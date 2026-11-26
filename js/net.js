/* =====================================================================
   Science Showdown — ONLINE 1v1 (v15)
   Two browsers connect directly (WebRTC via PeerJS, no game server).
   - The room creator is the HOST and plays Player 1 (left).
   - The joiner is the GUEST and plays Player 2 (right).
   - The host runs the real fight. The guest sends its key presses to the
     host, and the host sends back the fight state ~30 times a second plus
     the effects to replay (sparks, sounds, K.O. slams…).
   Add ?local=1 to the URL to test with two tabs in one browser.
   ===================================================================== */
(function(){
'use strict';

var ROOM_PREFIX='sshowdown-v1-';
var CODE_CHARS='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
var PEERJS_URLS=['https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js','https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js'];
var LOCAL_TEST=/[?&]local=1/.test(location.search);

var NET=window.NET={role:null,conn:null,code:'',peer:null,mute:0,events:[],nid:0,frame:0,rtt:0,lastSnap:0,trails:{}};
function online(){ return !!NET.role; }
function mySide(){ return NET.role==='host'?1:2; }
function $(id){ return document.getElementById(id); }
function charById(id){ for(var i=0;i<CHARS.length;i++) if(CHARS[i].id===id) return CHARS[i]; return null; }
function newCode(){ var s=''; for(var i=0;i<4;i++) s+=CODE_CHARS[Math.floor(Math.random()*CODE_CHARS.length)]; return s; }

/* ---------------------------------------------------------------
   TRANSPORT — PeerJS (online) or BroadcastChannel (?local=1 test)
   --------------------------------------------------------------- */
function loadPeerJS(cb){
  if(window.Peer) return cb(null);
  var i=0;
  (function next(){
    if(i>=PEERJS_URLS.length) return cb(new Error('Could not load the online library. Check your internet connection.'));
    var s=document.createElement('script'); s.src=PEERJS_URLS[i++]; s.async=true;
    s.onload=function(){ cb(window.Peer?null:new Error('Online library failed to start.')); };
    s.onerror=function(){ s.remove(); next(); };
    document.head.appendChild(s);
  })();
}
function wrapPeerConn(c){
  var api={send:function(m){ try{ if(c.open) c.send(m); }catch(e){} }, close:function(){ try{c.close();}catch(e){} },
    onmessage:null, onclose:null};
  c.on('data',function(d){ if(api.onmessage) api.onmessage(d); });
  c.on('close',function(){ if(api.onclose) api.onclose(); });
  c.on('error',function(){ if(api.onclose) api.onclose(); });
  return api;
}
function wrapLocalChannel(bc){
  var api={send:function(m){ try{ bc.postMessage(m); }catch(e){} }, close:function(){ try{ bc.postMessage({t:'bye'}); bc.close(); }catch(e){} },
    onmessage:null, onclose:null};
  bc.onmessage=function(e){ var m=e.data; if(m&&m.t==='bye'){ if(api.onclose) api.onclose(); return; } if(m&&m.t==='_hello') return; if(api.onmessage) api.onmessage(m); };
  return api;
}

function hostRoom(onCode,onConnect,onError){
  var code=newCode();
  if(LOCAL_TEST){
    var bc=new BroadcastChannel('ss-'+code); onCode(code);
    bc.onmessage=function(e){ if(e.data&&e.data.t==='_hello'){ bc.postMessage({t:'_welcome'}); onConnect(wrapLocalChannel(bc)); } };
    NET.peer={destroy:function(){ try{bc.close();}catch(e){} }};
    return;
  }
  loadPeerJS(function(err){
    if(err) return onError(err.message);
    var peer=new Peer(ROOM_PREFIX+code,{debug:0}); NET.peer=peer;
    peer.on('open',function(){ onCode(code); });
    peer.on('connection',function(c){
      if(NET.conn){ c.on('open',function(){ c.send({t:'full'}); setTimeout(function(){c.close();},300); }); return; }
      c.on('open',function(){ onConnect(wrapPeerConn(c)); });
    });
    peer.on('error',function(e){
      if(e.type==='unavailable-id'){ peer.destroy(); hostRoom(onCode,onConnect,onError); }
      else if(!NET.conn) onError('Could not create a room ('+e.type+'). Try again.');
    });
  });
}
function joinRoom(code,onConnect,onError){
  code=code.toUpperCase().replace(/[^A-Z0-9]/g,'');
  if(code.length!==4) return onError('Room codes have 4 letters or numbers.');
  var done=false, timer=setTimeout(function(){ if(!done){ done=true; onError('No room found with code '+code+'. Check the code and try again.'); if(NET.peer) NET.peer.destroy(); } },12000);
  if(LOCAL_TEST){
    var bc=new BroadcastChannel('ss-'+code);
    bc.onmessage=function(e){ if(!done&&e.data&&e.data.t==='_welcome'){ done=true; clearTimeout(timer); onConnect(wrapLocalChannel(bc)); } };
    bc.postMessage({t:'_hello'}); NET.peer={destroy:function(){ try{bc.close();}catch(e){} }};
    return;
  }
  loadPeerJS(function(err){
    if(err){ done=true; clearTimeout(timer); return onError(err.message); }
    var peer=new Peer({debug:0}); NET.peer=peer;
    peer.on('open',function(){
      var c=peer.connect(ROOM_PREFIX+code,{reliable:true});
      c.on('open',function(){ if(done) return; done=true; clearTimeout(timer); onConnect(wrapPeerConn(c)); });
      c.on('data',function(d){ if(d&&d.t==='full'&&!NET.role){ done=true; clearTimeout(timer); onError('That room already has two players.'); } });
    });
    peer.on('error',function(e){ if(done) return; done=true; clearTimeout(timer);
      onError(e.type==='peer-unavailable'?'No room found with code '+code+'. Check the code and try again.':'Could not connect ('+e.type+'). Try again.'); });
  });
}

/* ---------------------------------------------------------------
   SESSION — start / end, messages
   --------------------------------------------------------------- */
function startSession(role,conn,code){
  NET.role=role; NET.conn=conn; NET.code=code;
  conn.onmessage=onMessage; conn.onclose=function(){ endSession('Your opponent disconnected.'); };
  $('onlineModal').classList.remove('show');
  $('netBadge').classList.add('show'); updateBadge();
  $('swapBtn').style.display='none';
  trainingMode=false;
  if(role==='host'){ send({t:'welcome',s1:sel1&&sel1.id,s2:sel2&&sel2.id}); }
  showOnly('selectScreen'); updatePickUI(); refreshCards();
  NET.pingTimer=setInterval(function(){ send({t:'ping',ts:performance.now()}); },2000);
}
function endSession(reason){
  if(!NET.role) return;
  var c=NET.conn; NET.role=null; NET.conn=null; clearInterval(NET.pingTimer);
  if(c){ c.onclose=null; c.close(); }
  if(NET.peer){ try{ NET.peer.destroy(); }catch(e){} NET.peer=null; }
  $('netBadge').classList.remove('show'); $('swapBtn').style.display='';
  gameState='idle'; if(raf) cancelAnimationFrame(raf); paused=false;
  $('endModal').classList.remove('show');
  showOnly('menuScreen'); updatePickUI();
  if(reason) showInfo('🌐 Online match ended',reason+'<br><br>You can start a new room from <b style="color:#fff">Online 1v1</b> any time.');
}
function send(m){ if(NET.conn) NET.conn.send(m); }

function onMessage(m){
  if(!m||!m.t) return;
  switch(m.t){
    case 'hello': if(NET.role==='host') send({t:'welcome',s1:sel1&&sel1.id,s2:sel2&&sel2.id}); break;
    case 'welcome': if(m.s1) sel1=charById(m.s1); if(m.s2) sel2=charById(m.s2); updatePickUI(); refreshCards(); break;
    case 'sel': var c=charById(m.id); if(!c) break; if(m.side===1) sel1=c; else sel2=c; updatePickUI(); refreshCards(); break;
    case 'stage': setBanner('⏳ The host is choosing the stage…'); break;
    case 'backToSelect': if($('stageScreen').style.display!=='none'||$('vsScreen').style.display!=='none') showOnly('selectScreen'); updatePickUI(); break;
    case 'start': guestStart(m); break;
    case 'kd': if(NET.role==='host') remoteKey(m.a,true); break;
    case 'ku': if(NET.role==='host') remoteKey(m.a,false); break;
    case 'release': if(NET.role==='host') ['left','right','jump','block','punch','kick','heavy','spec','ult','taunt'].forEach(function(a){ keys[P2K[a]]=false; }); break;
    case 's': if(NET.role==='guest') applySnapshot(m); break;
    case 'pause': if(NET.role==='host') origPause(); break;
    case 'rematch': if(NET.role==='host') origRematch(); break;
    case 'toSelect': quitToSelect(true); break;
    case 'ping': send({t:'pong',ts:m.ts}); break;
    case 'pong': NET.rtt=Math.round(performance.now()-m.ts); updateBadge(); break;
    case 'bye': endSession('Your opponent left the room.'); break;
  }
}
function updateBadge(){
  if(!NET.role) return;
  $('netBadgeText').textContent='🌐 Online • Room '+NET.code+' • You are '+(NET.role==='host'?'Player 1 (left)':'Player 2 (right)')+(NET.rtt?' • '+NET.rtt+' ms':'');
}
function setBanner(t){ var tb=$('turnBanner'); tb.textContent=t; tb.classList.toggle('p2turn',mySide()===2); }

/* ---------------------------------------------------------------
   LOBBY — each player picks only their own side
   --------------------------------------------------------------- */
var origPick=pick;
pick=function(c){
  if(!online()) return origPick(c);
  if(mySide()===1) sel1=c; else sel2=c;
  send({t:'sel',side:mySide(),id:c.id}); updatePickUI(); refreshCards();
};
var origUpdatePickUI=updatePickUI;
updatePickUI=function(){
  origUpdatePickUI();
  if(!online()) return;
  setBanner(mySide()===1?'🔴 Online — you are Player 1 (left). Tap your fighter!':'🔵 Online — you are Player 2 (right). Tap your fighter!');
  var sb=$('startBtn');
  if(NET.role==='guest'){ sb.disabled=true; sb.textContent='⏳ Waiting for the host to start…'; }
};
$('randomBtn').onclick=(function(orig){ return function(){
  if(!online()) return orig();
  pick(CHARS[Math.floor(Math.random()*CHARS.length)]);
}; })($('randomBtn').onclick);
$('startBtn').onclick=function(){ if(NET.role==='guest') return; if(online()) send({t:'stage'}); goStageSelect(); };
$('stageBack').onclick=function(){ showOnly('selectScreen'); if(online()){ send({t:'backToSelect'}); updatePickUI(); } };

var origToVs=$('toVsBtn').onclick;
$('toVsBtn').onclick=function(){
  origToVs();
  if(NET.role==='host') send({t:'start',s1:sel1.id,s2:sel2.id,stage:stageIdx,a1:assist1.id,a2:assist2.id});
};
function guestStart(m){
  sel1=charById(m.s1); sel2=charById(m.s2); stageIdx=m.stage; trainingMode=false;
  origToVs();
  assist1=charById(m.a1); assist2=charById(m.a2);
  $('vsAssistImg1').src=assist1.img; $('vsAssistName1').textContent=assist1.name;
  $('vsAssistImg2').src=assist2.img; $('vsAssistName2').textContent=assist2.name;
}

/* ---------------------------------------------------------------
   INPUT — your keys always drive YOUR fighter (WASD/JKL or arrows/123)
   --------------------------------------------------------------- */
var ACTION={};
Object.keys(P1K).forEach(function(a){ ACTION[P1K[a]]=a; });
Object.keys(P2K).forEach(function(a){ ACTION[P2K[a]]=a.replace(/2$/,''); });
function remoteKey(a,down){
  var code=P2K[a]; if(!code) return;
  if(down){ if(!keys[code]){ justPressed[code]=true; tapCheck(code); } keys[code]=true; }
  else keys[code]=false;
}
window.addEventListener('keydown',function(e){
  if(!online()) return;
  var tag=e.target&&e.target.tagName; if(tag==='INPUT'||tag==='TEXTAREA') return;
  var a=ACTION[e.code]; if(!a) return;
  e.preventDefault(); e.stopImmediatePropagation();
  if(NET.role==='host'){ var code=P1K[a]; if(!e.repeat){ justPressed[code]=true; tapCheck(code); } keys[code]=true; }
  else if(!e.repeat) send({t:'kd',a:a});
},true);
window.addEventListener('keyup',function(e){
  if(!online()) return;
  var a=ACTION[e.code]; if(!a) return;
  e.stopImmediatePropagation();
  if(NET.role==='host') keys[P1K[a]]=false; else send({t:'ku',a:a});
},true);
window.addEventListener('blur',function(){ if(NET.role==='guest') send({t:'release'}); });

/* buttons during a fight */
var origPause=$('pauseBtn').onclick, origRematch=$('rematchBtn').onclick;
$('pauseBtn').onclick=function(){ if(NET.role==='guest') send({t:'pause'}); else origPause(); };
$('rematchBtn').onclick=function(){ if(NET.role==='guest'){ send({t:'rematch'}); $('rematchBtn').textContent='⏳ Asking the host…'; } else origRematch(); };
var origQuit=quitToSelect;
quitToSelect=function(fromRemote){
  if(online()&&fromRemote!==true) send({t:'toSelect'});
  origQuit(); $('rematchBtn').textContent='↻ Rematch — same fighters';
  if(online()) updatePickUI();
};
$('changeBtn').onclick=function(){ quitToSelect(); };
$('quitBtn').onclick=function(){ quitToSelect(); };

/* ---------------------------------------------------------------
   HOST → GUEST: record effects, send snapshots
   --------------------------------------------------------------- */
function recorder(name,fn){
  return function(){
    if(NET.role==='host'&&NET.mute===0&&F1&&gameState!=='idle') NET.events.push([name,Array.prototype.slice.call(arguments)]);
    return fn.apply(this,arguments);
  };
}
var REPLAY={};
[['sp','spawnParticles'],['rp','ringParticles'],['bs','burstStar'],['fl','floater'],['bp','beep'],['br','showBrainrot'],['an','announce']].forEach(function(p){
  var orig=window[p[1]]; REPLAY[p[0]]=orig; window[p[1]]=recorder(p[0],orig);
});
spawnParticles=window.spawnParticles; ringParticles=window.ringParticles; burstStar=window.burstStar; floater=window.floater; beep=window.beep; showBrainrot=window.showBrainrot; announce=window.announce;
Object.keys(SSFX).forEach(function(k){
  var orig=SSFX[k]; REPLAY['x.'+k]=orig;
  SSFX[k]=function(){
    if(NET.role==='host'&&F1&&gameState!=='idle') NET.events.push(['x.'+k,Array.prototype.slice.call(arguments)]);
    NET.mute++; try{ return orig.apply(this,arguments); } finally{ NET.mute--; }
  };
});

var SKIP={char:1,poisonSrc:1,chain:1,controls:1,accent:1,atkCfg:1,cds:1,cdsMax:1,seq:1};
function serF(f){
  var o={};
  for(var k in f){ if(SKIP[k]) continue; var v=f[k]; var t=typeof v;
    if(t==='number') o[k]=Math.round(v*100)/100; else if(t==='boolean'||t==='string') o[k]=v; }
  o.cds=f.cds; o.cdsMax=f.cdsMax; o.seq=f.seq;
  o.atkCfg=f.atkCfg?{dur:f.atkCfg.dur,finisher:f.atkCfg.finisher,moveType:f.atkCfg.moveType}:null;
  return o;
}
function serP(p){
  if(!p.nid) p.nid=++NET.nid;
  var o={owner:p.owner===F1?1:2};
  for(var k in p){ if(k==='owner'||k==='trail') continue; var v=p[k], t=typeof v;
    if(t==='number') o[k]=Math.round(v*10)/10; else if(t==='boolean'||t==='string'||v===null) o[k]=v; }
  return o;
}
function hostSend(){
  if(NET.role!=='host'||!F1||!F2) return;
  var em=$('endModal').classList.contains('show');
  send({t:'s', g:gameState, p:paused, r:round, tl:Math.round(timeLeft*100)/100, rl:roundLock, hs:hitstop, sh:Math.round(shake),
    f1:serF(F1), f2:serF(F2), pr:projectiles.map(serP), ev:NET.events,
    m:em?{title:$('endTitle').textContent, html:$('endText').innerHTML}:null});
  NET.events=[];
}

/* ---------------------------------------------------------------
   GUEST: apply snapshots, extrapolate between them
   --------------------------------------------------------------- */
function applyF(f,o){
  for(var k in o){ if(k==='atkCfg') continue; f[k]=o[k]; }
  f.atkCfg=o.atkCfg;
}
function applySnapshot(m){
  if(!F1||!F2||$('fightScreen').style.display==='none') return;
  NET.lastSnap=performance.now();
  gameState=m.g; paused=m.p; round=m.r; timeLeft=m.tl; roundLock=m.rl; hitstop=m.hs;
  if(m.sh>shake) shake=m.sh;
  $('roundNum').textContent=round;
  applyF(F1,m.f1); applyF(F2,m.f2);
  var trails={};
  projectiles=m.pr.map(function(o){
    o.owner=o.owner===1?F1:F2;
    var tr=NET.trails[o.nid]||[]; tr.push({x:o.x,y:o.y}); if(tr.length>7) tr.shift();
    o.trail=tr; trails[o.nid]=tr; return o;
  });
  NET.trails=trails;
  m.ev.forEach(function(e){ var fn=REPLAY[e[0]]; if(fn){ try{ fn.apply(null,e[1]); }catch(err){} } });
  var em=$('endModal');
  if(m.m){ if(!em.classList.contains('show')){ $('endTitle').textContent=m.m.title; $('endText').innerHTML=m.m.html; em.classList.add('show'); } }
  else if(em.classList.contains('show')){ em.classList.remove('show'); $('rematchBtn').textContent='↻ Rematch — same fighters'; }
  updateHUD();
}
var TIMERS=['atkT','hitT','hitFlashT','landT','specAnimT','ultAnimT','tauntAnimT','finisher','dashT','comboT','lockT','guardBreak','exhausted','slowT','poisonT','freezeT','shockT'];
function guestStep(dt){
  nowSec+=dt; bgT+=dt;
  if(roundLock>0) roundLock-=dt;
  if(hitstop>0){ hitstop-=dt; return; }
  [F1,F2].forEach(function(f){
    f.anim+=dt*7; f.auraT+=dt;
    TIMERS.forEach(function(k){ if(f[k]>0) f[k]=Math.max(0,f[k]-dt); });
    f.x+=f.vx*dt; f.y+=f.vy*dt;
    if(!f.onGround){ f.vy=Math.min(1050,f.vy+2150*dt); if(f.y>=GROUND){ f.y=GROUND; f.vy=0; } }
    f.x=Math.max(14,Math.min(W-f.w-14,f.x));
    if(f.dashT>0&&Math.random()<0.8) afterimages.push({x:f.x,y:f.y,face:f.face,char:f.char,t:10});
  });
  projectiles.forEach(function(p){ if(p.delay>0){ p.delay-=dt; return; }
    if(p.grav) p.vy+=p.grav*dt; if(p.kindType==='rain') p.vy+=1500*dt;
    p.x+=p.vx*dt; p.y+=p.vy*dt; });
  particles.forEach(function(pt){ if(pt.star||pt.flash){pt.t-=dt;return;} pt.x+=pt.vx*dt; pt.y+=pt.vy*dt; pt.vy+=640*dt; pt.t-=dt; }); particles=particles.filter(function(p){return p.t>0;});
  floaters.forEach(function(fl){ fl.y-=34*dt; fl.t-=dt; }); floaters=floaters.filter(function(f){return f.t>0;});
  afterimages.forEach(function(a){ a.t--; }); afterimages=afterimages.filter(function(a){return a.t>0;});
}
var hostStep=step;
step=function(dt){ if(NET.role==='guest') return guestStep(dt); return hostStep(dt); };

var prevDraw=draw;
draw=function(){
  prevDraw();
  if(NET.role==='host' && (++NET.frame%2===0)) hostSend();
  if(NET.role==='guest' && NET.lastSnap && performance.now()-NET.lastSnap>4000 && gameState==='fight'){
    NET.lastSnap=performance.now(); announce('📶 Connection is slow — waiting for the host…',0);
  }
};

/* the guest's own round timer must never end a round */
var origEndRound=endRound;
endRound=function(w){ if(NET.role==='guest') return; return origEndRound(w); };

/* ---------------------------------------------------------------
   UI — Online 1v1 menu button and room dialog
   --------------------------------------------------------------- */
function setStatus(t,bad){ var s=$('onlineStatus'); s.innerHTML=t; s.className='online-status'+(bad?' bad':''); }
function resetDialog(){
  $('onlineCode').textContent='----'; $('onlineHostBox').classList.add('hidden');
  $('onlineCreate').disabled=false; $('onlineJoin').disabled=false; setStatus('');
}
$('menuOnline').onclick=function(){ resetDialog(); $('onlineModal').classList.add('show'); setTimeout(function(){ $('onlineJoinCode').focus(); },50); };
$('onlineCancel').onclick=function(){ $('onlineModal').classList.remove('show'); if(!NET.role&&NET.peer){ try{NET.peer.destroy();}catch(e){} NET.peer=null; } };
$('onlineCreate').onclick=function(){
  $('onlineCreate').disabled=true; $('onlineJoin').disabled=true; setStatus('Creating a room…');
  hostRoom(function(code){
    $('onlineCode').textContent=code; $('onlineHostBox').classList.remove('hidden');
    setStatus('⏳ Waiting for your opponent to join with this code…');
  },function(conn){ startSession('host',conn,$('onlineCode').textContent); },
  function(err){ setStatus('⚠️ '+err,true); $('onlineCreate').disabled=false; $('onlineJoin').disabled=false; });
};
function doJoin(){
  var code=$('onlineJoinCode').value;
  $('onlineCreate').disabled=true; $('onlineJoin').disabled=true; setStatus('Connecting to room '+code.toUpperCase()+'…');
  joinRoom(code,function(conn){ startSession('guest',conn,code.toUpperCase().replace(/[^A-Z0-9]/g,'')); send({t:'hello'}); },
    function(err){ setStatus('⚠️ '+err,true); $('onlineCreate').disabled=false; $('onlineJoin').disabled=false; });
}
$('onlineJoin').onclick=doJoin;
$('onlineJoinCode').addEventListener('keydown',function(e){ if(e.key==='Enter') doJoin(); });
$('onlineCopy').onclick=function(){ var c=$('onlineCode').textContent; try{ navigator.clipboard.writeText(c).then(function(){ $('onlineCopy').textContent='✔ Copied'; setTimeout(function(){ $('onlineCopy').textContent='Copy code'; },1400); }); }catch(e){} };
$('netLeave').onclick=function(){ send({t:'bye'}); endSession(''); };
window.addEventListener('beforeunload',function(){ if(NET.conn) send({t:'bye'}); });
/* training is local only */
$('menuTraining').addEventListener('click',function(){ if(online()) endSession(''); },true);
})();
