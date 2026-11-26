/* =====================================================================
   Science Showdown — FX layer (v14)
   Loaded after game.js. Wraps the engine's global functions to add:
   - drawn portraits for fighters without a photo
   - dynamic camera (follows the fight, zooms in when close)
   - glowing hit sparks, shockwave rings, landing/jump dust
   - slow-motion K.O. with a big K.O. / TIME UP slam
   - ultimate cinematic (zoom, darken, speed lines, name banner)
   - side combo counters, low-HP vignette, hit flashes, HUD shake
   - softer, punchier synthesized sound (hits, whooshes, booms)
   - 3D tilt on fighter cards, Esc to pause
   ===================================================================== */
(function(){
'use strict';
var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------------------------------------------------------
   1. PORTRAITS — draw each fighter (same art as in the arena)
   --------------------------------------------------------------- */
function makePortrait(c){
  var pc=document.createElement('canvas'); pc.width=240; pc.height=280;
  var p=pc.getContext('2d');
  var g=p.createRadialGradient(120,110,10,120,130,220);
  g.addColorStop(0,shade(c.color,40)); g.addColorStop(.45,c.color); g.addColorStop(1,c.dark);
  p.fillStyle=g; p.fillRect(0,0,240,280);
  /* diagonal energy streaks */
  p.save(); p.globalAlpha=.16; p.strokeStyle='#fff'; p.lineWidth=10;
  for(var i=-4;i<10;i++){ p.beginPath(); p.moveTo(i*40,0); p.lineTo(i*40+160,280); p.stroke(); }
  p.restore();
  /* big faint emoji badge */
  p.save(); p.globalAlpha=.22; p.font='120px system-ui'; p.textAlign='center'; p.fillText(c.emoji||'⚡',190,110); p.restore();
  /* the fighter, drawn by the game's own renderer */
  var saved=ctx; ctx=p;
  try{
    var S=2.05; p.save(); p.translate(116,128+182*S); p.scale(S,S);
    drawFighterBody(c,-27,0,1,0.6,0,'idle',0); p.restore();
  }catch(e){}
  ctx=saved;
  /* rim light + bottom fade */
  var b=p.createLinearGradient(0,170,0,280); b.addColorStop(0,'rgba(0,0,0,0)'); b.addColorStop(1,'rgba(0,0,0,.55)');
  p.fillStyle=b; p.fillRect(0,0,240,280);
  return pc.toDataURL('image/png');
}
function buildPortraits(){
  CHARS.forEach(function(c){
    if(PHOTOS[c.id]) return;
    c.img=makePortrait(c);
    var im=document.querySelector('#card-'+c.id+' img.photo');
    if(im){ im.src=c.img; im.alt='Drawn portrait of '+c.name; }
  });
  if(typeof updatePickUI==='function') updatePickUI();
}

/* ---------------------------------------------------------------
   2. AUDIO — master bus with a soft low-pass, plus real hit sounds
   --------------------------------------------------------------- */
var master=null, noiseBuf=null;
function audio(){
  try{
    AC=AC||new (window.AudioContext||window.webkitAudioContext)();
    if(AC.state==='suspended') AC.resume();
    if(!master){
      var comp=AC.createDynamicsCompressor(); comp.threshold.value=-14; comp.ratio.value=6; comp.connect(AC.destination);
      var lp=AC.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=4200; lp.connect(comp);
      master=AC.createGain(); master.gain.value=0.9; master.connect(lp);
      noiseBuf=AC.createBuffer(1,AC.sampleRate*0.6,AC.sampleRate);
      var d=noiseBuf.getChannelData(0); for(var i=0;i<d.length;i++) d[i]=Math.random()*2-1;
    }
    return AC;
  }catch(e){ return null; }
}
/* replace the old harsh beep — same signature, rounder tone */
beep=function(fr,dur,type){
  var a=audio(); if(!a) return;
  var o=a.createOscillator(), g=a.createGain(), t=a.currentTime;
  o.type=(type==='square'||type==='sawtooth')?'triangle':(type||'sine');
  o.frequency.setValueAtTime(fr,t); o.frequency.exponentialRampToValueAtTime(Math.max(30,fr*0.82),t+dur);
  g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(0.06,t+0.008); g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
  o.connect(g); g.connect(master); o.start(t); o.stop(t+dur+0.02);
};
function noise(dur,freq,q,vol,sweepTo){
  var a=audio(); if(!a) return; var t=a.currentTime;
  var s=a.createBufferSource(); s.buffer=noiseBuf;
  var f=a.createBiquadFilter(); f.type='bandpass'; f.frequency.setValueAtTime(freq,t); f.Q.value=q||1;
  if(sweepTo) f.frequency.exponentialRampToValueAtTime(sweepTo,t+dur);
  var g=a.createGain(); g.gain.setValueAtTime(vol,t); g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
  s.connect(f); f.connect(g); g.connect(master); s.start(t); s.stop(t+dur);
}
function thump(freq,dur,vol){
  var a=audio(); if(!a) return; var t=a.currentTime;
  var o=a.createOscillator(), g=a.createGain(); o.type='sine';
  o.frequency.setValueAtTime(freq,t); o.frequency.exponentialRampToValueAtTime(35,t+dur);
  g.gain.setValueAtTime(vol,t); g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
  o.connect(g); g.connect(master); o.start(t); o.stop(t+dur);
}
var SFX={
  whoosh:function(heavy){ noise(heavy?0.2:0.13, heavy?700:1100, 0.8, heavy?0.22:0.14, heavy?2600:3400); },
  hit:function(heavy){ noise(heavy?0.16:0.09, heavy?900:1600, 0.7, heavy?0.5:0.34); thump(heavy?150:190, heavy?0.22:0.12, heavy?0.55:0.35); },
  block:function(){ noise(0.06,3200,6,0.22); beep(1400,0.05,'triangle'); },
  boom:function(){ noise(0.7,400,0.5,0.6,80); thump(90,0.7,0.8); },
  land:function(){ noise(0.08,500,1,0.12); },
  ult:function(){ noise(0.6,300,0.6,0.25,3000); thump(60,0.5,0.5); }
};

/* ---------------------------------------------------------------
   3. FX STATE
   --------------------------------------------------------------- */
var FX={ parts:[], cam:{x:W/2,y:H/2,z:1}, timeScale:1, slowUntil:0, slowScale:1,
  focus:null, focusUntil:0, focusZoom:1, flash:null, cine:null, ko:null,
  comboPop:{1:{n:0,t:0},2:{n:0,t:0}}, last:0, ground:{} };
function now(){ return performance.now()/1000; }

/* slow motion: scales simulation time for a short real-time window */
function slowmo(scale,secs){ if(reduceMotion) return; FX.slowScale=scale; FX.slowUntil=now()+secs; }
function focusOn(x,y,zoom,secs){ FX.focus={x:x,y:y}; FX.focusZoom=zoom; FX.focusUntil=now()+secs; }

/* Effect events. Kept as one object so online play can replay them on the other player's screen. */
var SSFX=window.SSFX={
  hit:function(defIdx,heavy,color,blocked){
    if(blocked){ SFX.block(); return; }
    SFX.hit(heavy);
    var wrap=document.getElementById(defIdx===1?'hpWrap1':'hpWrap2');
    if(wrap){ wrap.classList.remove('hitshake'); void wrap.offsetWidth; wrap.classList.add('hitshake'); }
    if(heavy) FX.flash={color:color,t:0.18,t0:0.18};
  },
  meme:function(x,y){ SFX.boom(); FX.flash={color:'#ff7a00',t:0.3,t0:0.3}; focusOn(x,y,1.18,0.6); },
  whoosh:function(heavy){ SFX.whoosh(heavy); },
  dash:function(x){ dust(x,GROUND,5,140); SFX.whoosh(false); },
  cine:function(idx){ var f=idx===1?F1:F2; if(!f) return;
    FX.cine={f:f,start:now(),dur:reduceMotion?0.6:1.1,name:f.char.ult};
    focusOn(f.x+27,f.y-120,1.32,0.9); SFX.ult(); },
  ko:function(winIdx,timeUp,perfect){ var w=winIdx===1?F1:F2, l=winIdx===1?F2:F1; if(!w) return;
    FX.ko={start:now(),text:timeUp?'TIME UP!':'K.O.',sub:perfect?'PERFECT!':(winIdx===1?'PLAYER 1':'PLAYER 2')+' WINS THE ROUND',color:w.char.color};
    if(!timeUp){ focusOn(l.x+27,l.y-100,1.3,1.6); SFX.boom(); FX.flash={color:'#ffffff',t:0.25,t0:0.25}; }
    else beep(520,.4,'triangle'); }
};

var _step=step;
step=function(dt){ _step(dt*(now()<FX.slowUntil?FX.slowScale:1)); };

/* ---- particles: keep some original debris, add glowing sparks ---- */
var _spawn=spawnParticles;
spawnParticles=function(x,y,color,n){
  _spawn(x,y,color,Math.ceil(n*0.45));
  for(var i=0;i<n;i++){
    var a=Math.random()*Math.PI*2, sp=280+Math.random()*620;
    FX.parts.push({k:'spark',x:x,y:y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-180,t:0.22+Math.random()*0.25,color:color,w:1.5+Math.random()*2.5});
  }
};
var _burst=burstStar;
burstStar=function(x,y,r,color){
  _burst(x,y,r,color);
  FX.parts.push({k:'ring',x:x,y:y,r:r*0.4,r1:r*2.8,t:0.32,t0:0.32,color:color});
  FX.parts.push({k:'glow',x:x,y:y,r:r*2.2,t:0.14,t0:0.14,color:color});
};
function dust(x,y,n,spread){
  for(var i=0;i<n;i++){ var d=(i%2?1:-1);
    FX.parts.push({k:'dust',x:x+d*Math.random()*10,y:y-2,vx:d*(60+Math.random()*spread),vy:-20-Math.random()*50,r:6+Math.random()*8,t:0.45+Math.random()*0.25,t0:0.7}); }
}

/* ---- hits: sound, HUD shake, edge flash ---- */
var _damage=damage;
damage=function(att,def,dmg,meterGain,kind,status){
  var hp0=def.hp;
  _damage(att,def,dmg,meterGain,kind,status);
  var blocked=def.state==='block';
  var heavy=(kind==='heavy'||kind==='ult'||(hp0-def.hp)>=18);
  SSFX.hit(def===F1?1:2,heavy,att.char.color,blocked);
};
var _meme=memeHit;
memeHit=function(att,def,amount){ _meme(att,def,amount); SSFX.meme(def.x+27,def.y-110); slowmo(0.4,0.35); };

var _attack=doAttack;
doAttack=function(f,o,type){ var before=f.atkCfg; _attack(f,o,type); if(f.atkCfg&&f.atkCfg!==before) SSFX.whoosh(type==='heavy'||!!f.atkCfg.finisher); };

var _dash=startDash;
startDash=function(f,dir){ var t=f.dashT; _dash(f,dir); if(f.dashT>t) SSFX.dash(f.x+27); };

/* ---- ultimate cinematic ---- */
var _special=doSpecial;
doSpecial=function(f,o,ult){
  var used=f.ultUsed; _special(f,o,ult);
  if(ult && !used && f.ultUsed){
    SSFX.cine(f===F1?1:2); slowmo(0.3,0.75);
  }
};

/* ---- K.O. / time up ---- */
var _endRound=endRound;
endRound=function(winner){
  var live=(gameState==='fight');
  var timeUp=timeLeft<=0;
  _endRound(winner);
  if(!live) return;
  var loser=winner===F1?F2:F1;
  var perfect=winner.hp>=MAX_HP;
  SSFX.ko(winner===F1?1:2,timeUp,perfect);
  if(!timeUp) slowmo(0.22,1.1);
};

/* ---------------------------------------------------------------
   4. DRAW — camera around the original renderer, then overlays
   --------------------------------------------------------------- */
var _draw=draw;
draw=function(){
  var t=now(), dt=Math.min(0.05,FX.last?t-FX.last:0.016); FX.last=t;
  var simDt=paused?0:dt*(t<FX.slowUntil?FX.slowScale:1);
  trackGround();
  /* camera target */
  var tx=W/2, ty=H/2, tz=1;
  if(F1&&F2&&(gameState==='fight'||gameState==='roundEnd')&&!reduceMotion){
    var mid=(F1.x+F2.x)/2+27, dist=Math.abs(F1.x-F2.x);
    tz=1+Math.max(0,Math.min(1,(620-dist)/520))*0.1;
    tx=mid; ty=H*0.56+Math.min(0,(Math.min(F1.y,F2.y)-GROUND))*0.35;
  }
  if(FX.focus && t<FX.focusUntil){ tx=FX.focus.x; ty=FX.focus.y; tz=FX.focusZoom; }
  var k=1-Math.pow(0.002,dt);
  FX.cam.z+=(tz-FX.cam.z)*k; FX.cam.x+=(tx-FX.cam.x)*k; FX.cam.y+=(ty-FX.cam.y)*k;
  var z=FX.cam.z, hw=W/(2*z), hh=H/(2*z);
  var cx=Math.max(hw,Math.min(W-hw,FX.cam.x)), cy=Math.max(hh,Math.min(H-hh,FX.cam.y));

  ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,W,H);
  ctx.save(); ctx.translate(W/2,H/2); ctx.scale(z,z); ctx.translate(-cx,-cy);
  _draw();
  drawWorldFx(simDt);
  ctx.restore();
  drawOverlay(t,dt);
};

function trackGround(){
  [F1,F2].forEach(function(f){ if(!f) return; var g=FX.ground[f.controls];
    if(g!==undefined && g!==f.onGround){
      if(f.onGround){ dust(f.x+27,GROUND,8,160); SFX.land(); }
      else if(f.vy<0) dust(f.x+27,GROUND,4,90);
    }
    FX.ground[f.controls]=f.onGround; });
}

function drawWorldFx(dt){
  var P=FX.parts;
  ctx.save();
  for(var i=P.length-1;i>=0;i--){ var p=P[i]; p.t-=dt; if(p.t<=0){ P.splice(i,1); continue; }
    if(p.k==='dust'){
      p.x+=p.vx*dt; p.y+=p.vy*dt; p.vx*=Math.pow(0.05,dt); p.vy*=Math.pow(0.2,dt); p.r+=22*dt;
      ctx.globalCompositeOperation='source-over'; ctx.globalAlpha=Math.max(0,p.t/p.t0)*0.35;
      ctx.fillStyle='#c9d3f2'; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,7); ctx.fill();
    }
  }
  ctx.globalCompositeOperation='lighter';
  for(i=P.length-1;i>=0;i--){ p=P[i];
    if(p.k==='spark'){
      p.x+=p.vx*dt; p.y+=p.vy*dt; p.vy+=900*dt; p.vx*=Math.pow(0.08,dt); p.vy*=Math.pow(0.3,dt);
      var al=Math.min(1,p.t/0.18);
      ctx.globalAlpha=al; ctx.strokeStyle=p.color; ctx.lineWidth=p.w*1.8; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(p.x-p.vx*0.04,p.y-p.vy*0.04); ctx.stroke();
      ctx.strokeStyle='#fff'; ctx.lineWidth=p.w*0.7;
      ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(p.x-p.vx*0.02,p.y-p.vy*0.02); ctx.stroke();
    } else if(p.k==='ring'){
      var q=1-p.t/p.t0, r=p.r+(p.r1-p.r)*(1-Math.pow(1-q,3));
      ctx.globalAlpha=(1-q)*0.9; ctx.strokeStyle=p.color; ctx.lineWidth=6*(1-q)+1;
      ctx.beginPath(); ctx.ellipse(p.x,p.y,r,r*0.62,0,0,7); ctx.stroke();
    } else if(p.k==='glow'){
      var gg=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r);
      gg.addColorStop(0,'rgba(255,255,255,'+(0.75*p.t/p.t0)+')'); gg.addColorStop(.35,hexA(p.color,0.45*p.t/p.t0)); gg.addColorStop(1,'rgba(0,0,0,0)');
      ctx.globalAlpha=1; ctx.fillStyle=gg; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,7); ctx.fill();
    }
  }
  ctx.restore();
  if(P.length>500) P.splice(0,P.length-500);
}

function drawOverlay(t,dt){
  ctx.save();
  /* cinematic vignette */
  var v=ctx.createRadialGradient(W/2,H/2,H*0.35,W/2,H/2,W*0.72);
  v.addColorStop(0,'rgba(0,0,0,0)'); v.addColorStop(1,'rgba(0,0,0,.5)');
  ctx.fillStyle=v; ctx.fillRect(0,0,W,H);

  if(F1&&F2&&gameState==='fight'){
    /* low-HP danger pulse on that player's side */
    [[F1,0],[F2,W]].forEach(function(pr){ var f=pr[0]; if(f.hp>MAX_HP*0.25||f.hp<=0) return;
      var pulse=0.18+0.14*Math.sin(t*6);
      var lg=ctx.createLinearGradient(pr[1],0,pr[1]===0?160:W-160,0);
      lg.addColorStop(0,'rgba(255,30,50,'+pulse+')'); lg.addColorStop(1,'rgba(255,30,50,0)');
      ctx.fillStyle=lg; ctx.fillRect(0,0,W,H); });
    /* big side combo counters */
    [[F1,1,70],[F2,2,W-70]].forEach(function(pr){ var f=pr[0], cp=FX.comboPop[pr[1]];
      if(f.combo!==cp.n){ if(f.combo>cp.n) cp.t=t; cp.n=f.combo; }
      if(f.combo<3) return;
      var age=t-cp.t, s=age<0.12?1.6-age/0.12*0.6:1;
      ctx.save(); ctx.translate(pr[2],H*0.34); ctx.scale(s,s); ctx.rotate(pr[1]===1?-0.08:0.08);
      ctx.textAlign='center'; ctx.lineJoin='round';
      ctx.font='900 54px system-ui'; ctx.lineWidth=9; ctx.strokeStyle='#000'; ctx.strokeText(f.combo,0,0);
      var cg=ctx.createLinearGradient(0,-44,0,4); cg.addColorStop(0,'#fff6b0'); cg.addColorStop(1,f.char.color);
      ctx.fillStyle=cg; ctx.fillText(f.combo,0,0);
      ctx.font='900 16px system-ui'; ctx.lineWidth=5; ctx.strokeText('HITS!',0,22); ctx.fillStyle='#fff'; ctx.fillText('HITS!',0,22);
      ctx.restore(); });
  }

  /* hit flash on the screen edges */
  if(FX.flash){ FX.flash.t-=dt; if(FX.flash.t<=0) FX.flash=null; else {
    var fa=FX.flash.t/FX.flash.t0;
    var fg=ctx.createRadialGradient(W/2,H/2,H*0.25,W/2,H/2,W*0.7);
    fg.addColorStop(0,'rgba(0,0,0,0)'); fg.addColorStop(1,hexA(FX.flash.color,0.55*fa));
    ctx.fillStyle=fg; ctx.fillRect(0,0,W,H); } }

  /* ultimate cinematic */
  if(FX.cine){ var c=FX.cine, q=(t-c.start)/c.dur;
    if(q>=1) FX.cine=null; else {
      var inA=Math.min(1,q/0.12), outA=q>0.8?1-(q-0.8)/0.2:1, A=inA*outA;
      ctx.fillStyle='rgba(0,0,0,'+(0.45*A)+')'; ctx.fillRect(0,0,W,H);
      /* radial speed lines */
      ctx.save(); ctx.translate(W/2,H/2); ctx.globalAlpha=0.55*A; ctx.strokeStyle='#fff';
      for(var i=0;i<46;i++){ var a=i*2.399+t*0.6, r0=H*0.42+((i*37)%60), r1=W;
        ctx.lineWidth=1+(i%3); ctx.beginPath(); ctx.moveTo(Math.cos(a)*r0,Math.sin(a)*r0); ctx.lineTo(Math.cos(a)*r1,Math.sin(a)*r1); ctx.stroke(); }
      ctx.restore();
      /* letterbox + name banner */
      var lb=46*A; ctx.fillStyle='#000'; ctx.fillRect(0,0,W,lb); ctx.fillRect(0,H-lb,W,lb);
      var slide=(1-Math.pow(1-Math.min(1,q/0.18),3));
      var bx=c.f===F1? -W+slide*W : W-slide*W;
      ctx.save(); ctx.translate(bx,0); ctx.globalAlpha=A;
      ctx.fillStyle=hexA(c.f.char.color,0.85); ctx.beginPath(); ctx.moveTo(0,H-150); ctx.lineTo(W,H-170); ctx.lineTo(W,H-104); ctx.lineTo(0,H-84); ctx.closePath(); ctx.fill();
      ctx.font='900 italic 40px system-ui'; ctx.textAlign='center'; ctx.lineWidth=7; ctx.strokeStyle='#000'; ctx.lineJoin='round';
      ctx.strokeText('★ '+c.name.toUpperCase()+' ★',W/2,H-114); ctx.fillStyle='#fff'; ctx.fillText('★ '+c.name.toUpperCase()+' ★',W/2,H-114);
      ctx.font='900 14px system-ui'; ctx.fillStyle='#000'; ctx.fillText(c.f.char.name.toUpperCase()+' • ULTIMATE',W/2,H-92);
      ctx.restore();
    } }

  /* K.O. slam */
  if(FX.ko){ var k=FX.ko, age=t-k.start;
    if(age>2.2) FX.ko=null; else {
      var s=age<0.18?3-age/0.18*2:1+Math.max(0,0.05-(age-0.18)*0.05), a2=age>1.8?1-(age-1.8)/0.4:1;
      ctx.save(); ctx.globalAlpha=a2; ctx.translate(W/2,H/2-30); ctx.scale(s,s); ctx.rotate(-0.06);
      ctx.textAlign='center'; ctx.lineJoin='round'; ctx.font='900 italic 150px system-ui';
      ctx.shadowColor=k.color; ctx.shadowBlur=40; ctx.lineWidth=16; ctx.strokeStyle='#1a0000'; ctx.strokeText(k.text,0,40);
      ctx.shadowBlur=0; var kg=ctx.createLinearGradient(0,-80,0,50); kg.addColorStop(0,'#fff'); kg.addColorStop(.45,'#ffd21a'); kg.addColorStop(1,'#ff3b1a');
      ctx.fillStyle=kg; ctx.fillText(k.text,0,40); ctx.restore();
      if(age>0.35){ ctx.save(); ctx.globalAlpha=Math.min(1,(age-0.35)/0.2)*a2; ctx.textAlign='center'; ctx.font='900 26px system-ui'; ctx.lineWidth=6; ctx.strokeStyle='#000'; ctx.lineJoin='round';
        ctx.strokeText(k.sub,W/2,H/2+70); ctx.fillStyle='#fff'; ctx.fillText(k.sub,W/2,H/2+70); ctx.restore(); }
    } }
  ctx.restore();
}

function hexA(hex,a){ if(!hex||hex[0]!=='#') return 'rgba(255,255,255,'+a+')'; var n=parseInt(hex.slice(1),16); return 'rgba('+(n>>16)+','+((n>>8)&255)+','+(n&255)+','+Math.max(0,Math.min(1,a))+')'; }

/* ---------------------------------------------------------------
   5. UI — card tilt, Esc to pause, reset FX between rounds
   --------------------------------------------------------------- */
var _startRound=startRound;
startRound=function(){ _startRound(); FX.parts=[]; FX.ko=null; FX.cine=null; FX.flash=null; FX.slowUntil=0; FX.focusUntil=0; };

if(!reduceMotion){
  document.getElementById('roster').addEventListener('mousemove',function(e){
    var card=e.target.closest('.card'); if(!card) return;
    var r=card.getBoundingClientRect(), px=(e.clientX-r.left)/r.width-0.5, py=(e.clientY-r.top)/r.height-0.5;
    card.style.transform='perspective(500px) rotateY('+(px*18)+'deg) rotateX('+(-py*18)+'deg) translateY(-4px) scale(1.06)';
  });
  document.getElementById('roster').addEventListener('mouseout',function(e){
    var card=e.target.closest('.card'); if(card && !card.contains(e.relatedTarget)) card.style.transform='';
  });
}
window.addEventListener('keydown',function(e){
  if(e.code==='Escape' && (gameState==='fight'||gameState==='roundEnd')){ document.getElementById('pauseBtn').click(); }
});

buildPortraits();
})();
