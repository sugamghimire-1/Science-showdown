var CHARS=[
{id:'jensen',name:'Jensen Huang',title:'THE GPU KING • NVIDIA',color:'#76b900',dark:'#141a10',ini:'JH',pow:9,spec:'CEO Again Stock Crash',ult:'RTX ON — GPU Storm',taunt:'"The more you buy, the more you save!"',desc:'Throws a GIANT chip like a joke, shouts "I AM THE CEO AGAIN!" — and the stock market crashes on you. 87 damage!',hair:'cap',skin:'#e8b58a'},
{id:'tesla',name:'Nikola Tesla',title:'THE ELECTRIC WIZARD',color:'#7c5cff',dark:'#241a4d',ini:'NT',pow:9,spec:'Thunder Coil',ult:'Tesla Tower Blast',taunt:'"AC will win!"',desc:'Chain lightning from a crackling coil.',hair:'slick',skin:'#f0c8a0'},
{id:'einstein',name:'Albert Einstein',title:'THE TIME BENDER',color:'#e8e3d5',dark:'#3a372c',ini:'AE',pow:7,spec:'Relativity Bolt',ult:'E = mc² Explosion',taunt:'"Imagination is more important!"',desc:'Bends time, then drops the equation.',hair:'wild',skin:'#f2c79b'},
{id:'newton',name:'Isaac Newton',title:'THE GRAVITY KING',color:'#c0392b',dark:'#3d0f0a',ini:'IN',pow:10,spec:'Apple Drop',ult:'Gravity Slam',taunt:'"What goes up must come down!"',desc:'A giant apple. Gravity does the rest.',hair:'long',skin:'#eec39a'},
{id:'turing',name:'Alan Turing',title:'THE CODE BREAKER',color:'#2f7bff',dark:'#0f244d',ini:'AT',pow:8,spec:'Enigma Glitch',ult:'Machine Code Storm',taunt:'"Can machines think? Watch this!"',desc:'Glitches behind you before you blink.',hair:'side',skin:'#f0c096'},
{id:'ada',name:'Ada Lovelace',title:'THE FIRST PROGRAMMER',color:'#d63384',dark:'#3d0f26',ini:'AL',pow:8,spec:'Algorithm Rush',ult:'Infinite Loop Trap',taunt:'"I wrote the first code!"',desc:'Traps you in a loop you cannot exit.',hair:'bun',skin:'#f4cda4'},
{id:'curie',name:'Marie Curie',title:'THE RADIATION QUEEN',color:'#20c997',dark:'#07382a',ini:'MC',pow:9,spec:'Radioactive Blast',ult:'Radium Wave',taunt:'"Nothing to fear, only to understand!"',desc:'Glowing green science, handle with care.',hair:'bun',skin:'#f6d2ac'},
{id:'hawking',name:'Stephen Hawking',title:'THE BLACK HOLE MIND',color:'#5b7fa6',dark:'#0d1524',ini:'SH',pow:10,spec:'Black Hole Pull',ult:'Singularity',taunt:'"Look up at the stars!"',desc:'Pulls you in. Nothing escapes.',hair:'side',skin:'#eec39a'},
{id:'elon',name:'Elon Musk',title:'THE ROCKET MAN',color:'#e8590c',dark:'#3d1e05',ini:'EM',pow:9,spec:'Rocket Rain',ult:'Mars Landing',taunt:'"To Mars!"',desc:'Calls down ROCKET RAIN — rockets fall from the sky and explode on you. 100 damage. Obviously.',hair:'side',skin:'#f0bd8e'},
{id:'davinci',name:'Leonardo da Vinci',title:'THE INVENTOR',color:'#b08968',dark:'#2e2116',ini:'LD',pow:8,spec:'Flying Machine Dive',ult:'Masterpiece Strike',taunt:'"I draw the future!"',desc:'500 years ahead of the meta.',hair:'long',skin:'#e8b58a'},
{id:'babbage',name:'Charles Babbage',title:'FATHER OF THE COMPUTER',color:'#9aa5b1',dark:'#1d2125',ini:'CB',pow:7,spec:'Analytical Punch',ult:'Difference Engine Crash',taunt:'"I invented the computer!"',desc:'Brass gears, heavy hands.',hair:'side',skin:'#f2c79b'},
{id:'hopper',name:'Grace Hopper',title:'THE BUG HUNTER',color:'#0dcaf0',dark:'#06303d',ini:'GH',pow:8,spec:'Compiler Blast',ult:'Bug Swarm',taunt:'"Easier to ask forgiveness!"',desc:'Found the first bug. Now weaponised it.',hair:'bun',skin:'#f4cda4'},
{id:'jobs',name:'Steve Jobs',title:'THE iKING',color:'#ced4da',dark:'#101214',ini:'SJ',pow:8,spec:'iPhone Throw',ult:'Reality Distortion Field',taunt:'"Think Different!"',desc:'One more thing… a knockout.',hair:'slick',skin:'#eec39a'},
{id:'gates',name:'Bill Gates',title:'THE WINDOWS MASTER',color:'#00a4ef',dark:'#06344d',ini:'BG',pow:8,spec:'Blue Screen Freeze',ult:'Money Rain',taunt:'"640K should be enough!"',desc:'Freezes you with the screen of death.',hair:'side',skin:'#f6d2ac',glasses:true},
{id:'linus',name:'Linus Torvalds',title:'THE LINUX PENGUIN',color:'#f59f00',dark:'#3d2a03',ini:'LT',pow:9,spec:'Penguin Kick',ult:'Open Source Army',taunt:'"Talk is cheap. Show me the code!"',desc:'Tux attacks. The kernel protects him.',hair:'side',skin:'#f0c096',glasses:true},
{id:'berners',name:'Tim Berners-Lee',title:'FATHER OF THE WEB',color:'#4dabf7',dark:'#122f4a',ini:'TB',pow:7,spec:'Web Trap',ult:'WWW Blast',taunt:'"I gave the web away for free!"',desc:'Traps you in a web he invented.',hair:'side',skin:'#f2c79b'},
{id:'katherine',name:'Katherine Johnson',title:'THE NASA CALCULATOR',color:'#9775fa',dark:'#2a1d4d',ini:'KJ',pow:8,spec:'Trajectory Strike',ult:'Orbital Drop',taunt:'"Math never lies!"',desc:'Calculates the perfect hit, every time.',hair:'bun',skin:'#8a5a34',glasses:true},
{id:'edison',name:'Thomas Edison',title:'THE LIGHT BULB KING',color:'#ffd43b',dark:'#3d3205',ini:'TE',pow:8,spec:'Light Bulb Blast',ult:'1000 Ways to Win',taunt:'"Genius is 1% inspiration!"',desc:'1,000 attempts. This one lands.',hair:'slick',skin:'#eec39a'},
{id:'bell',name:'Alexander G. Bell',title:'THE PHONE MAN',color:'#63e6be',dark:'#0f3830',ini:'AB',pow:7,spec:'Telephone Ring Stun',ult:'Call Drop Slam',taunt:'"Mr. Watson, come here!"',desc:'Your opponent is calling. It hurts.',hair:'slick',skin:'#f0bd8e',beard:true},
{id:'altman',name:'Sam Altman',title:'THE AI BOSS',color:'#10a37f',dark:'#07382a',ini:'SA',pow:9,spec:'Prompt Attack',ult:'AI Hallucination Clone',taunt:'"Ask the AI!"',desc:'Prompts a clone to fight for him.',hair:'side',skin:'#f4cda4'},
{id:'sundar',name:'Sundar Pichai',title:'THE GOOGLE CHIEF',color:'#ea4335',dark:'#3d100c',ini:'SP',pow:8,spec:'Search Strike',ult:'Chrome Throw',taunt:'"Just Google it!"',desc:'Searched your weakness. Found it.',hair:'side',skin:'#a06a3c',glasses:true},
{id:'zuck',name:'Mark Zuckerberg',title:'THE METAVERSE MAN',color:'#1877f2',dark:'#0a254d',ini:'MZ',pow:7,spec:'Like Slap',ult:'Metaverse Trap',taunt:'"Connect the world!"',desc:'Traps you in a world he built.',hair:'curly',skin:'#f6d2ac'}
];

/* ===== v8 UNIQUE ABILITIES — every character's skill, ultimate & passive is DIFFERENT =====
   type drives REAL behaviour in doSpecial()/step(): barrage, chain, slow, drop, teleport, trap,
   poison, pull, rocket, dive, gear, swarm, fast, freeze, slide, homing, flash, sonic, clone, web */
var ABILITIES={
 jensen:{kind:'barrage',proj:'chip',count:3,speed:640,size:13,dmgMult:1.0,status:null,effect:'CEO AGAIN STOCK CRASH — giant meme chip throw, then red stock charts rain from the sky: 87 DMG (35% of max HP!)',passive:'GPU Overclock: chip hits give +40% extra meter'},
 tesla:{kind:'chain',proj:'bolt',count:1,speed:560,size:17,dmgMult:1.15,status:'shock',effect:'Chain lightning bolt — big damage + SHOCK stun',passive:'High Voltage: all hits stun a fraction longer'},
 einstein:{kind:'slow',proj:'orb',count:1,speed:500,size:16,dmgMult:0.95,status:'slow',effect:'Relativity orb — SLOWS the rival for 2.2s',passive:'Time Dilation: recovers stamina 25% faster'},
 newton:{kind:'drop',proj:'apple',count:1,speed:0,size:19,dmgMult:1.35,status:null,effect:'A giant apple DROPS from the sky onto the rival',passive:'Gravity Well: his Heavy launches higher'},
 turing:{kind:'teleport',proj:'glitch',count:0,speed:0,size:0,dmgMult:1.2,status:null,effect:'GLITCH TELEPORT — vanishes and strikes from behind',passive:'Enigma Strike: teleport hits as a Heavy from behind'},
 ada:{kind:'trap',proj:'loop',count:1,speed:0,size:18,dmgMult:0.9,status:'slow',effect:'Leaves an INFINITE LOOP trap that snares who steps in',passive:'First Programmer: combo window lasts longer'},
 curie:{kind:'poison',proj:'vial',count:1,speed:520,size:15,dmgMult:0.85,status:'poison',effect:'Radium vial — POISON ticks damage for 3.5s',passive:'Radioactive: standing close slowly builds her meter'},
 hawking:{kind:'pull',proj:'hole',count:1,speed:380,size:21,dmgMult:1.0,status:'pull',effect:'BLACK HOLE — drags the rival toward it, then bursts',passive:'Singularity Mind: ultimate charges from 85 meter'},
 elon:{kind:'rocket',proj:'rocket',count:1,speed:700,size:18,dmgMult:1.3,status:'burn',effect:'ROCKET RAIN — rockets fall from the sky onto the rival and explode: 100 DMG (40% of max HP!)',passive:'Rapid Reuse: dash cooldown is shorter'},
 davinci:{kind:'dive',proj:'dive',count:0,speed:0,size:0,dmgMult:1.25,status:null,effect:'FLYING MACHINE DIVE — swoops across the arena',passive:'Renaissance: gains meter from both hits and blocks'},
 babbage:{kind:'gear',proj:'gear',count:1,speed:330,size:23,dmgMult:1.45,status:null,effect:'Huge brass GEAR — slow, unstoppable, biggest single hit',passive:'Difference Engine: Heavy costs less stamina'},
 hopper:{kind:'swarm',proj:'bug',count:5,speed:520,size:10,dmgMult:0.55,status:null,effect:'BUG SWARM — 5 bugs spread out, hard to dodge all',passive:'Bug Hunter: projectiles give extra meter'},
 jobs:{kind:'fast',proj:'phone',count:2,speed:820,size:11,dmgMult:0.8,status:null,effect:'Two iPhones at blistering speed — "one more thing…"',passive:'Reality Distortion: taunt gives double meter'},
 gates:{kind:'freeze',proj:'screen',count:1,speed:480,size:17,dmgMult:0.9,status:'freeze',effect:'BLUE SCREEN — FREEZES the rival solid for 0.9s',passive:'Windows Shield: guard breaks one hit later'},
 linus:{kind:'slide',proj:'slide',count:0,speed:0,size:0,dmgMult:1.2,status:null,effect:'PENGUIN SLIDE — Tux-powered sliding kick across the floor',passive:'Kernel Panic: faster stamina regen while blocking'},
 berners:{kind:'web',proj:'web',count:1,speed:460,size:16,dmgMult:0.85,status:'slow',effect:'WEB TRAP shot — heavy SLOW, rival crawls for 2.6s',passive:'World Wide: his slow effects last longer'},
 katherine:{kind:'homing',proj:'star',count:1,speed:470,size:14,dmgMult:1.05,status:null,effect:'TRAJECTORY STAR — HOMES IN and chases the rival',passive:'Perfect Math: homing shots turn tighter'},
 edison:{kind:'flash',proj:'bulb',count:1,speed:600,size:15,dmgMult:1.0,status:'shock',effect:'Light-bulb FLASH burst — damage + SHOCK stun',passive:'Flashbulb Mind: his bulb burst also applies SHOCK'},
 bell:{kind:'sonic',proj:'ring',count:1,speed:430,size:20,dmgMult:1.0,status:'shock',effect:'TELEPHONE SONIC RING — wide wave, hard to jump',passive:'First Call: taunt also restores a little stamina'},
 altman:{kind:'clone',proj:'clone',count:2,speed:560,size:14,dmgMult:0.75,status:null,effect:'AI CLONE — fires TWO shadow copies of himself',passive:'Prompt Master: true combos give +20% meter'},
 sundar:{kind:'homing',proj:'search',count:1,speed:540,size:13,dmgMult:0.95,status:null,effect:'SEARCH STRIKE — fast HOMING shot, "found your weakness"',passive:'Just Google It: sees cooldowns — his own recharge 10% faster'},
 zuck:{kind:'trap',proj:'meta',count:1,speed:0,size:18,dmgMult:0.9,status:'slow',effect:'METAVERSE TRAP — a portal snare that SLOWS on contact',passive:'Metaverse Snare: his floor trap lingers and slows'}
};
CHARS.forEach(function(c){ var a=ABILITIES[c.id]||ABILITIES.jensen; c.ability=a; c.effect=a.effect; c.passive=a.passive; });

var EMOJI={jensen:'💚',tesla:'⚡',einstein:'🧠',newton:'🍎',turing:'💻',ada:'👩‍💻',curie:'☢️',hawking:'🕳️',elon:'🚀',davinci:'🎨',babbage:'⚙️',hopper:'🐛',jobs:'🍏',gates:'🪟',linus:'🐧',berners:'🌐',katherine:'🧮',edison:'💡',bell:'📞',altman:'🤖',sundar:'🔍',zuck:'👓'};
/* Real photo portrait for EVERY fighter — same clean headshot style as the Jensen photo the user shared */
/* Portraits: real photos where we have them, otherwise a drawn portrait is generated by js/fx.js
   (drop a file in images/photo-<id>.jpg and add it to PHOTOS to use a real photo instead). */
var PHOTOS={jensen:'images/photo-jensen.jpg',elon:'images/photo-elon.jpg',ada:'images/photo-ada.jpg',turing:'images/photo-turing.jpg'};
var BLANK_IMG='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
CHARS.forEach(function(c){ c.img=PHOTOS[c.id]||BLANK_IMG; });
/* v12: in-fight fighters are FULLY DRAWN in code (drawFighterBody) — real photos are used only in character select and HUD portraits, never as in-fight heads. */
var pickTurn=1, sel1=null, sel2=null, activeFilter='all';
var roster=document.getElementById('roster');
CHARS.forEach(function(c,i){
  c.emoji=EMOJI[c.id]||'🥊';
  var b=document.createElement('button'); b.className='card'; b.id='card-'+c.id; b.setAttribute('aria-label','Pick '+c.name);
  b.style.animationDelay=(i*0.03)+'s';
  b.dataset.search=(c.name+' '+c.title+' '+c.spec+' '+c.desc).toLowerCase();
  b.dataset.pow=c.pow;
  b.innerHTML='<div class="face"><img class="photo" src="'+c.img+'" alt="Portrait photo of '+c.name+'" loading="lazy"><span class="pnum">#'+(i+1)+'</span><div class="photo-shade"></div><div class="photo-badge"><span class="ini2">'+c.ini+'</span><span class="spec2">⚡ '+c.spec+'</span></div><div class="shine"></div></div><h4>'+c.emoji+' '+c.name+'</h4><div class="title">'+c.title+'</div><div class="spec">⚡ '+c.spec+'<br>⭐ '+c.ult+'<br>'+c.desc+'</div>'
  +'<div class="ability-box">🧬 <b>'+c.spec+'</b> — '+c.effect+'<br>✦ Passive: '+c.passive+'</div>'
  +'<div class="stat">PWR <span class="bar"><span class="fill" style="display:block;width:'+(c.pow*10)+'%;background:#ff3b4e"></span></span> '+c.pow+'</div>'
  +'<div class="stat">SPD <span class="bar"><span class="fill" style="display:block;width:100%;background:#2f7bff"></span></span> EQUAL</div>'
  +'<div class="stat">STYLE <span style="color:#fff;font-weight:800">'+(c.pow>=9?'Heavy hitter':c.pow>=8?'Balanced bruiser':'Tricky &amp; technical')+'</span></div>';
  b.onclick=function(){ pick(c); }; roster.appendChild(b);
});
function applyFilter(){
  var q=(document.getElementById('searchBox').value||'').toLowerCase().trim();
  var visible=0;
  CHARS.forEach(function(c){
    var el=document.getElementById('card-'+c.id);
    var okQ=!q||el.dataset.search.indexOf(q)>=0;
    var okF=activeFilter==='all'||(activeFilter==='heavy'&&c.pow>=9)||(activeFilter==='balanced'&&c.pow<9);
    var show=okQ&&okF; el.style.display=show?'':'none'; if(show)visible++;
  });
  document.getElementById('noResults').style.display=visible?'none':'block';
}
document.getElementById('searchBox').addEventListener('input',applyFilter);
document.querySelectorAll('.chip[data-filter]').forEach(function(ch){
  ch.onclick=function(){ document.querySelectorAll('.chip[data-filter]').forEach(function(x){x.classList.remove('on');}); ch.classList.add('on'); activeFilter=ch.dataset.filter; applyFilter(); };
});
var COACH_TIPS=[
 'New here? Don\'t mash one button. Try this real combo: <b>Punch → Kick → Heavy</b>. Mixing moves keeps your damage full and your cooldowns short.',
 'See the orange stamina bar in a fight? Heavy attacks eat a lot of it. If you\'re tired, step back and block for a second — it refills fast.',
 'Blocking feels safe, right? Careful — 4 blocked hits quickly will <b>break your guard</b> and stun you. Dash away instead sometimes!',
 'Your ultimate is <b>once per round</b> now. The best players save it for when the opponent is below 45 HP. No pressure. 😄',
 'Double-tap A/D (or ←/→) to dash through projectiles. It costs a little stamina, so don\'t dash on loop — you\'ll get caught tired.'
];
var coachIdx=0; setInterval(function(){ coachIdx=(coachIdx+1)%COACH_TIPS.length; document.getElementById('coachTip').innerHTML=COACH_TIPS[coachIdx]; },9000);
function refreshCards(){ CHARS.forEach(function(c){ var el=document.getElementById('card-'+c.id); el.classList.toggle('sel1', sel1&&sel1.id===c.id); el.classList.toggle('sel2', sel2&&sel2.id===c.id); }); }
function pick(c){
  if(pickTurn===1){ sel1=c; pickTurn=2; } else { sel2=c; pickTurn=1; }
  updatePickUI(); refreshCards();
}
function updatePickUI(){
  var b1=document.getElementById('p1Avatar'),b2=document.getElementById('p2Avatar');
  if(sel1){ b1.innerHTML='<img src="'+sel1.img+'" alt="Portrait photo of '+sel1.name+'">'; document.getElementById('p1Name').textContent='P1: '+sel1.name; document.getElementById('p1Info').textContent=sel1.title+' • ⚡ '+sel1.spec+': '+sel1.effect+' • ✦ '+sel1.passive; document.getElementById('dlg1').textContent=sel1.name+': '+sel1.taunt+' Let\'s go — I\'m ready when you are!'; }
  if(sel2){ b2.innerHTML='<img src="'+sel2.img+'" alt="Portrait photo of '+sel2.name+'">'; document.getElementById('p2Name').textContent='P2: '+sel2.name; document.getElementById('p2Info').textContent=sel2.title+' • ⚡ '+sel2.spec+': '+sel2.effect+' • ✦ '+sel2.passive; document.getElementById('dlg2').textContent=sel2.name+': '+sel2.taunt+' May the best combo win. No spamming, okay? 😄'; }
  var tb=document.getElementById('turnBanner');
  tb.textContent = pickTurn===1 ? '🔴 Hey Player 1 — tap your fighter below! (Tap again anytime to change P1)' : '🔵 Your turn, Player 2 — tap your fighter below! (Tap again anytime to change P2)';
  tb.classList.toggle('p2turn', pickTurn===2);
  var sb=document.getElementById('startBtn');
  sb.disabled = !(sel1&&sel2);
  sb.textContent = (sel1&&sel2) ? '👊 LET\'S FIGHT — '+sel1.name+' vs '+sel2.name : '▶ START FIGHT — Best of 3';
}
document.getElementById('randomBtn').onclick=function(){ sel1=CHARS[Math.floor(Math.random()*CHARS.length)]; do{ sel2=CHARS[Math.floor(Math.random()*CHARS.length)]; }while(sel2.id===sel1.id); pickTurn=1; updatePickUI(); refreshCards(); };
document.getElementById('swapBtn').onclick=function(){ var t=sel1; sel1=sel2; sel2=t; updatePickUI(); refreshCards(); };
/* Default headline matchup — Jensen Huang (P1) vs Elon Musk (P2), the same pairing the loading screen leads with */
sel1=CHARS[0]; sel2=CHARS[8]; updatePickUI(); refreshCards();

/* ============ v6 SCREEN FLOW: MENU → SELECT → STAGE → VS (loading) → FIGHT ============ */
var trainingMode=false, stageIdx=0, assist1=null, assist2=null, loadTimer=null;
var STAGES=[
 {name:'Circuit Lab Arena',desc:'Night makerspace arena — skyline, spotlights and a bouncing crowd.',cls:'stage-lab'},
 {name:'Kathmandu Rooftop Street',desc:'Daytime street stage — shopfront, wooden fence and rooftops, like the classic fighters.',cls:'stage-day'},
 {name:'Orbital Space Station',desc:'Fight above the Earth — station panels, starfield and a glowing planet below.',cls:'stage-space'}
];
function showOnly(id){
  ['menuScreen','selectScreen','stageScreen','vsScreen','fightScreen'].forEach(function(s){
    var el=document.getElementById(s); if(!el) return;
    el.style.display = s===id ? (s==='selectScreen'?'flex':'block') : 'none';
  });
  window.scrollTo({top:0,behavior:'smooth'});
}
function openSelect(training){ trainingMode=!!training; showOnly('selectScreen'); }
document.getElementById('menuTeam').onclick=function(){ openSelect(false); };
document.getElementById('menuSingle').onclick=function(){ openSelect(false); };
document.getElementById('menuTraining').onclick=function(){ openSelect(true); };
function showInfo(title,html){ document.getElementById('infoTitle').textContent=title; document.getElementById('infoText').innerHTML=html; document.getElementById('infoModal').classList.add('show'); }
document.getElementById('infoClose').onclick=function(){ document.getElementById('infoModal').classList.remove('show'); };
document.getElementById('menuOption').onclick=function(){ showInfo('⚙️ Option — Controls','<b style="color:#fff">Player 1:</b> W jump ×2, A/D move, double-tap A/D dash, S block, J punch, K kick, L heavy, I special, O ultimate, P taunt.<br><br><b style="color:#fff">Player 2:</b> ↑ jump ×2, ←/→ move, double-tap ←/→ dash, ↓ block, 1 punch, 2 kick, 3 heavy, 4 special, 5 ultimate, 6 taunt.<br><br>90 seconds a round, best of 3. Both players move at exactly the same speed. Every move has a cooldown and costs stamina — mixing Punch → Kick → Heavy builds a TRUE COMBO, mashing one move locks it.'); };
document.getElementById('menuCredits').onclick=function(){ showInfo('🏆 Credits','<b style="color:#fff">Science Showdown</b> — a parody fan fighting game made for the United Academy Robotics Club stall at Robo Fest 5.0.<br><br>22 science, robotics and ICT legends fight with their real portraits. Jensen Huang pulls a GPU from his jacket pocket and throws NVIDIA chips — yes, really.<br><br>Built with HTML + Canvas on one laptop, for two players sharing one keyboard. Not affiliated with NVIDIA or any person featured.'); };
document.getElementById('menuMore').onclick=function(){ showInfo('🎮 More Games at the UARC Stall','Robo Fest 5.0 is a full day of hands-on fun at United Academy:<br><br>🤖 <b style="color:#fff">Project demonstrations</b> from student teams<br>🥊 <b style="color:#fff">Robo Sumo</b> — robots push each other out of the ring<br>⚽ <b style="color:#fff">Robo Soccer</b> — robot football matches<br>🥊 <b style="color:#fff">Science Showdown</b> — this game! Two players, one keyboard, loser wants a rematch.<br><br>Ask anyone in a UARC shirt and they will point you to the next game.'); };
function updateStagePreview(){
  var st=STAGES[stageIdx], pv=document.getElementById('stagePreview');
  pv.className='stage-preview '+st.cls;
  document.getElementById('stageName').textContent=st.name;
  document.getElementById('stageDesc').textContent=st.desc;
}
document.getElementById('stageNext').onclick=function(){ stageIdx=(stageIdx+1)%STAGES.length; updateStagePreview(); };
document.getElementById('stageNextSide').onclick=function(){ stageIdx=(stageIdx+1)%STAGES.length; updateStagePreview(); };
document.getElementById('stagePrev').onclick=function(){ stageIdx=(stageIdx+STAGES.length-1)%STAGES.length; updateStagePreview(); };
document.getElementById('stageBack').onclick=function(){ showOnly('selectScreen'); };
function goStageSelect(){ if(sel1&&sel2){ updateStagePreview(); showOnly('stageScreen'); } }
function pickAssist(excludeA,excludeB){
  var pool=CHARS.filter(function(c){ return c.id!==excludeA.id && c.id!==excludeB.id; });
  return pool[Math.floor(Math.random()*pool.length)];
}
document.getElementById('toVsBtn').onclick=function(){
  assist1=pickAssist(sel1,sel2); do{ assist2=pickAssist(sel1,sel2); }while(assist2.id===assist1.id);
  document.getElementById('vsImg1').src=sel1.img; document.getElementById('vsName1').textContent='🔵 P1 • '+sel1.name; document.getElementById('vsTitle1').textContent=sel1.title+' • '+sel1.spec;
  document.getElementById('vsImg2').src=sel2.img; document.getElementById('vsName2').textContent=sel2.name+' • P2 🔴'; document.getElementById('vsTitle2').textContent=sel2.title+' • '+sel2.spec;
  document.getElementById('vsAssistImg1').src=assist1.img; document.getElementById('vsAssistName1').textContent=assist1.name;
  document.getElementById('vsAssistImg2').src=assist2.img; document.getElementById('vsAssistName2').textContent=assist2.name;
  document.getElementById('vsStageName').textContent=STAGES[stageIdx].name.toUpperCase()+(trainingMode?' • TRAINING':'');
  document.getElementById('vsTopImg1').src=sel1.img; document.getElementById('vsTopImg2').src=sel2.img;
  document.getElementById('vsTopName1').textContent=sel1.name.toUpperCase(); document.getElementById('vsTopName2').textContent=sel2.name.toUpperCase();
  document.getElementById('vsBigName1').textContent=sel1.name; document.getElementById('vsBigName2').textContent=sel2.name;
  showOnly('vsScreen');
  var stepN=0; document.getElementById('loadFill').style.width='0%'; document.getElementById('loadCount').textContent='(0/6)';
  var LOAD_STEPS=['Warming up the arena for you…','Rolling out the red carpet for '+sel1.name+'…','Polishing the spotlight for '+sel2.name+'…','Checking both keyboards — all yours…','Filling everyone up to 250 HP…','Almost there — good luck, both of you!'];
  var loadStepEl=document.getElementById('loadStep'); if(loadStepEl) loadStepEl.textContent=LOAD_STEPS[0];
  if(loadTimer) clearInterval(loadTimer);
  loadTimer=setInterval(function(){
    stepN++;
    document.getElementById('loadFill').style.width=Math.round(stepN/6*100)+'%';
    document.getElementById('loadCount').textContent='('+stepN+'/6)';
    if(loadStepEl) loadStepEl.textContent=LOAD_STEPS[Math.min(stepN,LOAD_STEPS.length-1)];
    if(stepN>=6){ clearInterval(loadTimer); loadTimer=null; startMatch(); }
  },260);
};

/* ============ FIGHT ENGINE — fixed-timestep, equal speed for both players ============ */
var cv=document.getElementById('game'), ctx=cv.getContext('2d');
var W=cv.width,H=cv.height, GROUND=H-78;
var keys={}, justPressed={}, projectiles=[], particles=[], floaters=[], afterimages=[];
var gameState='idle', paused=false, round=1, timeLeft=90, lastTs=0, acc=0, roundLock=0, shake=0, hitstop=0, bgT=0, nowSec=0;
var F1=null,F2=null, raf=null;
var STEP=1/60;
/* Fighters now start every round with 250 HP (up from 150) — Free Fire MAX-length fights, big comebacks possible — fights last longer and comebacks are real. Damage numbers are unchanged. */
var MAX_HP=250;
/* IDENTICAL movement numbers for every fighter and both players — no character is faster. */
var MOVE={ accel:3400, maxSpeed:400, friction:3000, airAccel:2400, airMax:380,
  jumpVel:-800, doubleJumpVel:-720, gravity:2150, fallMax:1050,
  dashSpeed:820, dashTime:0.16, dashCd:0.55 };
/* ===== Fair-play system: cooldowns, stamina, anti-spam (identical for both players) ===== */
var BASE_CD={punch:0.26,kick:0.44,heavy:0.70,spec:1.15,dash:0.55};
var STAM_COST={punch:6,kick:10,heavy:18,spec:13,dash:9};
var CD_LABEL={punch:'PUNCH',kick:'KICK',heavy:'HEAVY',spec:'SPEC',dash:'DASH'};

function makeFighter(char,x,faceRight,controls,accent){
  return {char:char,x:x,y:GROUND,vx:0,vy:0,w:54,h:198,hp:MAX_HP,ghostHp:MAX_HP,meter:0,wins:0,face:faceRight?1:-1,controls:controls,accent:accent,
  state:'idle',atkT:0,atkCd:0,atkCfg:null,atkHitDone:false,hitT:0,block:false,onGround:true,jumps:0,projCd:0,tauntCd:0,anim:Math.random()*10,
  dashT:0,dashCd:0,dashDir:0,lastTapL:-9,lastTapR:-9,combo:0,comboT:0,
  cds:{punch:0,kick:0,heavy:0,spec:0,dash:0}, cdsMax:{punch:BASE_CD.punch,kick:BASE_CD.kick,heavy:BASE_CD.heavy,spec:BASE_CD.spec,dash:BASE_CD.dash},
  stamina:100, exhausted:0, lastMove:'', spamCount:0, spamWindow:0, lockMove:'', lockT:0,
  chain:[], chainT:0, comboHitsTaken:0, guardHits:0, guardT:0, guardBreak:0, ultUsed:false, auraT:Math.random()*10,
  seq:[], seqT:0, finisher:0, finisherName:'', landT:0, runDust:0,
  slowT:0, poisonT:0, poisonTick:0, poisonSrc:null, freezeT:0, shockT:0, specAnimT:0, ultAnimT:0, tauntAnimT:0, hurtShake:0, chargeT:0, hitFlashT:0};
}
function buildCdChips(){
  [1,2].forEach(function(n){
    var row=document.getElementById('cdRow'+n); row.innerHTML='';
    ['punch','kick','heavy','spec','dash'].forEach(function(k){
      var d=document.createElement('span'); d.className='cdchip ready'; d.id='cd'+n+'-'+k;
      d.innerHTML='<span class="fill" style="width:0%"></span><span>'+CD_LABEL[k]+'</span>'; row.appendChild(d);
    });
  });
}
function refreshCdUI(){
  if(!F1||!F2) return;
  [[F1,1],[F2,2]].forEach(function(pair){
    var f=pair[0], n=pair[1];
    document.getElementById('st'+n).style.width=Math.max(0,Math.round(f.stamina))+'%';
    document.getElementById('stamWrap'+n).classList.toggle('low',f.stamina<28||f.exhausted>0);
    ['punch','kick','heavy','spec','dash'].forEach(function(k){
      var el=document.getElementById('cd'+n+'-'+k); if(!el) return;
      var locked=f.lockMove===k&&f.lockT>0;
      var rem=locked?f.lockT:f.cds[k], mx=locked?1.4:(f.cdsMax[k]||BASE_CD[k]);
      var pct=rem>0?Math.min(100,rem/mx*100):0;
      el.querySelector('.fill').style.width=pct+'%';
      el.classList.toggle('ready',rem<=0&&!locked);
      el.classList.toggle('locked',locked);
    });
  });
}
function startMatch(){
  ['menuScreen','selectScreen','stageScreen','vsScreen'].forEach(function(s){ document.getElementById(s).style.display='none'; });
  document.getElementById('fightScreen').style.display='block';
  if(assist1&&assist2){ document.getElementById('assistImg1').src=assist1.img; document.getElementById('assistImg2').src=assist2.img; }
  document.getElementById('endModal').classList.remove('show');
  document.getElementById('hudP1Name').textContent='P1 • '+sel1.name;
  document.getElementById('hudP2Name').textContent=sel2.name+' • P2';
  document.getElementById('hudPhoto1').src=sel1.img; document.getElementById('hudPhoto2').src=sel2.img;
  F1=makeFighter(sel1,210,true,'p1','#ff3b4e'); F2=makeFighter(sel2,W-270,false,'p2','#2f7bff');
  buildCdChips();
  round=1; startRound(); gameState='fight'; paused=false;
  /* pre-paint the arena immediately — no blank/white frame between screen switch and first animation frame */
  ctx.save(); ctx.fillStyle='#0a1030'; ctx.fillRect(0,0,W,H); ctx.restore(); draw();
  if(raf) cancelAnimationFrame(raf); lastTs=0; acc=0; raf=requestAnimationFrame(loop);
  window.scrollTo({top:0,behavior:'smooth'});
}
function startRound(){
  [F1,F2].forEach(function(f,i){ f.hp=MAX_HP; f.ghostHp=MAX_HP; f.meter=Math.min(f.meter,30); f.x=i===0?210:W-270; f.y=GROUND; f.vx=0; f.vy=0; f.state='idle'; f.onGround=true; f.atkT=0; f.atkCd=0; f.atkCfg=null; f.hitT=0; f.combo=0; f.comboT=0; f.dashT=0; f.face=i===0?1:-1;
    f.cds={punch:0,kick:0,heavy:0,spec:0,dash:0}; f.stamina=100; f.exhausted=0; f.lastMove=''; f.spamCount=0; f.spamWindow=0; f.lockMove=''; f.lockT=0; f.chain=[]; f.chainT=0; f.comboHitsTaken=0; f.guardHits=0; f.guardT=0; f.guardBreak=0; f.ultUsed=false; f.seq=[]; f.seqT=0; f.finisher=0; f.finisherName=''; f.landT=0; f.slowT=0; f.poisonT=0; f.poisonTick=0; f.freezeT=0; f.shockT=0; f.specAnimT=0; f.ultAnimT=0; f.tauntAnimT=0; });
  projectiles=[]; particles=[]; floaters=[]; afterimages=[]; timeLeft=90; roundLock=1.4; hitstop=0;
  document.getElementById('roundNum').textContent=round;
  announce('ROUND '+round+' — FIGHT!',2400);
  updateHUD();
}
function announce(t,ms){ var a=document.getElementById('announce'); a.textContent=t; a.classList.remove('pop'); void a.offsetWidth; a.classList.add('pop'); if(ms){ setTimeout(function(){ if(gameState==='fight') a.textContent=F1.char.taunt+'  •  '+F2.char.taunt; },ms);} }
function updateHUD(){
  if(!F1||!F2) return;
  document.getElementById('hp1').style.width=Math.max(0,F1.hp/MAX_HP*100)+'%';
  document.getElementById('hp2').style.width=Math.max(0,F2.hp/MAX_HP*100)+'%';
  document.getElementById('hpGhost1').style.width=Math.max(0,F1.ghostHp/MAX_HP*100)+'%';
  document.getElementById('hpGhost2').style.width=Math.max(0,F2.ghostHp/MAX_HP*100)+'%';
  document.getElementById('hpWrap1').classList.toggle('low',F1.hp<=MAX_HP*0.25);
  document.getElementById('hpWrap2').classList.toggle('low',F2.hp<=MAX_HP*0.25);
  /* human HP readout: the number, plus how they're actually doing */
  [[F1,1],[F2,2]].forEach(function(pair){ var f=pair[0], el=document.getElementById('hpNum'+pair[1]); if(!el) return;
    var hpNow=Math.max(0,Math.ceil(f.hp));
    var mood = f.hp<=0 ? 'down — what a fight!' : f.hp<=MAX_HP*0.25 ? 'hang in there!' : f.hp<=MAX_HP*0.6 ? 'feeling those hits' : 'fresh & ready';
    el.innerHTML=hpNow+' <small>/ '+MAX_HP+' HP · '+mood+'</small>';
    el.classList.toggle('hurt',f.hp<=MAX_HP*0.6&&f.hp>MAX_HP*0.25);
    el.classList.toggle('danger',f.hp<=MAX_HP*0.25);
  });
  document.getElementById('mt1').style.width=F1.meter+'%'; document.getElementById('mt2').style.width=F2.meter+'%';
  document.getElementById('meterWrap1').classList.toggle('full',F1.meter>=100);
  document.getElementById('meterWrap2').classList.toggle('full',F2.meter>=100);
  var tn=document.getElementById('timerNum'); tn.textContent=Math.ceil(timeLeft); tn.classList.toggle('low',timeLeft<=10&&gameState==='fight');
  document.getElementById('combo1').textContent=F1.combo>=2?F1.combo+' HIT COMBO!':(F1.seq&&F1.seq.length?'COMBO… '+F1.seq.join(' › ').toUpperCase():'');
  document.getElementById('combo2').textContent=F2.combo>=2?F2.combo+' HIT COMBO!':(F2.seq&&F2.seq.length?'COMBO… '+F2.seq.join(' › ').toUpperCase():'');
  [1,2].forEach(function(n){ var f=n===1?F1:F2; var dots=document.getElementById('wins'+n).children; for(var i=0;i<2;i++) dots[i].classList.toggle('on', f.wins>i); });
  document.getElementById('assistMeter1').style.width=F1.meter+'%'; document.getElementById('assistNum1').textContent=Math.round(F1.meter);
  document.getElementById('assistMeter2').style.width=F2.meter+'%'; document.getElementById('assistNum2').textContent=Math.round(F2.meter);
  refreshCdUI();
  [[F1,1],[F2,2]].forEach(function(pair){ var f=pair[0], el=document.getElementById('status'+pair[1]); if(!el)return; var s=[];
    if(f.freezeT>0)s.push('❄️ FROZEN'); if(f.slowT>0)s.push('🐌 SLOWED'); if(f.poisonT>0)s.push('☢️ POISONED'); if(f.shockT>0)s.push('⚡ SHOCKED');
    el.textContent=s.join('  •  '); });
}
document.getElementById('startBtn').onclick=goStageSelect;
document.getElementById('rematchBtn').onclick=function(){ document.getElementById('endModal').classList.remove('show'); F1.wins=0;F2.wins=0; round=1; startRound(); gameState='fight'; };
document.getElementById('changeBtn').onclick=quitToSelect;
document.getElementById('quitBtn').onclick=quitToSelect;
function quitToSelect(){ gameState='idle'; if(raf) cancelAnimationFrame(raf); document.getElementById('endModal').classList.remove('show'); showOnly('selectScreen'); }
document.getElementById('pauseBtn').onclick=function(){ if(gameState!=='fight'&&gameState!=='roundEnd')return; paused=!paused; announce(paused?'⏸ PAUSED — press Pause again to resume':'▶ FIGHT!',1200); };

var P1K={left:'KeyA',right:'KeyD',jump:'KeyW',block:'KeyS',punch:'KeyJ',kick:'KeyK',heavy:'KeyL',spec:'KeyI',ult:'KeyO',taunt:'KeyP'};
var P2K={left:'ArrowLeft',right:'ArrowRight',jump:'ArrowUp',block:'ArrowDown',punch:'Digit1',kick:'Digit2',heavy:'Digit3',spec:'Digit4',ult:'Digit5',taunt:'Digit6',
          punch2:'Numpad1',kick2:'Numpad2',heavy2:'Numpad3',spec2:'Numpad4',ult2:'Numpad5',taunt2:'Numpad6'};
window.addEventListener('keydown',function(e){
  if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Space'].indexOf(e.code)>=0) e.preventDefault();
  if(!e.repeat){ justPressed[e.code]=true; tapCheck(e.code); }
  keys[e.code]=true;
});
window.addEventListener('keyup',function(e){ keys[e.code]=false; });
window.addEventListener('blur',function(){ keys={}; });
function mapOf(f){ return f.controls==='p1'?P1K:P2K; }
function held(f,k){ var m=mapOf(f); return !!keys[m[k]] || (m[k+'2'] && !!keys[m[k+'2']]); }
function tapped(f,k){ var m=mapOf(f); return !!justPressed[m[k]] || (m[k+'2'] && !!justPressed[m[k+'2']]); }
/* double-tap dash detection, identical window for both players */
function tapCheck(code){
  if(gameState!=='fight'||paused||!F1) return;
  tapCheckFor(F1,code); tapCheckFor(F2,code);
}
function tapCheckFor(f,code){
  var m=mapOf(f);
  if(code===m.left){ if(nowSec-f.lastTapL<0.26) startDash(f,-1); f.lastTapL=nowSec; }
  if(code===m.right){ if(nowSec-f.lastTapR<0.26) startDash(f,1); f.lastTapR=nowSec; }
}
function registerMove(f,move){
  /* Returns damage multiplier. Spamming the same move 3x in a short window locks it. */
  if(f.lastMove===move){ f.spamCount++; } else { f.spamCount=1; f.lastMove=move; }
  f.spamWindow=1.6;
  if(f.spamCount>=3){
    f.lockMove=move; f.lockT=1.4; f.spamCount=0;
    floater(f.x,f.y-176,'🚫 SPAM BLOCKED — TRY A COMBO!','#ff8a94');
    beep(120,.14,'sawtooth'); refreshCdUI();
    return 0.55;
  }
  return f.spamCount===2?0.85:1;
}
function startDash(f,dir){
  if(f.dashCd>0||f.cds.dash>0||f.hitT>0||f.exhausted>0||f.guardBreak>0||roundLock>0||gameState!=='fight') return;
  if(f.lockMove==='dash'&&f.lockT>0) return;
  if(f.stamina<STAM_COST.dash){ floater(f.x,f.y-216,'😮‍💨 TOO TIRED TO DASH!','#ffd21a'); return; }
  f.stamina-=STAM_COST.dash; registerMove(f,'dash');
  f.dashT=MOVE.dashTime; f.dashCd=MOVE.dashCd; var dcd=f.char.id==='elon'?0.36:BASE_CD.dash; f.cds.dash=dcd; f.cdsMax.dash=dcd; f.dashDir=dir; f.face=dir;
  if(!f.onGround) f.vy=Math.min(f.vy,60);
  spawnParticles(f.x+27,f.y-8,'#cfd8ff',7);
  for(var sl=0;sl<5;sl++) particles.push({x:f.x+27-dir*sl*14,y:f.y-95,vx:-dir*260,vy:(Math.random()-.5)*40,t:0.22,color:'#8ec5ff',size:2.5});
  beep(240,.05,'sine'); refreshCdUI();
}
function tryActions(f,o){
  if(tapped(f,'jump')){
    if(f.onGround){ f.vy=MOVE.jumpVel; f.onGround=false; f.jumps=1; spawnParticles(f.x+27,f.y,'#8ea2d8',5); beep(300,.05,'sine'); }
    else if(f.jumps<2){ f.vy=MOVE.doubleJumpVel; f.jumps=2; ringParticles(f.x+27,f.y-6,f.char.color); beep(420,.06,'sine'); }
  }
  if(tapped(f,'punch')) doAttack(f,o,'punch');
  else if(tapped(f,'kick')) doAttack(f,o,'kick');
  else if(tapped(f,'heavy')) doAttack(f,o,'heavy');
  else if(tapped(f,'spec')) doSpecial(f,o,false);
  else if(tapped(f,'ult')) doSpecial(f,o,true);
  else if(tapped(f,'taunt')){ if(f.tauntCd<=0&&f.onGround){ f.tauntCd=0.9; f.tauntAnimT=0.55; f.state='taunt'; f.atkT=Math.max(f.atkT,0.4); if(f.char.id==='linus'||f.char.id==='bell') f.stamina=Math.min(100,f.stamina+14); f.meter=Math.min(100,f.meter+(f.char.id==='jobs'?12:6)); floater(f.x,f.y-224,f.char.taunt,f.char.color); spawnParticles(f.x+27,f.y-116,f.char.color,8); beep(440,.09,'triangle'); updateHUD(); } }
}
function doAttack(f,o,type){
  if(f.atkCd>0||f.hitT>0||f.dashT>0||f.guardBreak>0) return;
  if(f.cds[type]>0) return; /* still recharging — mashing does nothing */
  if(f.lockMove===type&&f.lockT>0){ floater(f.x,f.y-216,'🔒 '+type.toUpperCase()+' LOCKED — MIX IT UP!','#ff8a94'); f.cds[type]=0.2; return; }
  if(f.exhausted>0){ floater(f.x,f.y-216,'😮‍💨 EXHAUSTED — BREATHE!','#ffd21a'); return; }
  if(f.stamina<STAM_COST[type]){ floater(f.x,f.y-216,'😮‍💨 NO STAMINA!','#ffd21a'); beep(140,.07,'sawtooth'); f.cds[type]=0.25; return; }
  var spamMult=registerMove(f,type);
  f.stamina-=STAM_COST[type]*((f.char.id==='babbage'&&type==='heavy')?0.6:1);
  if(f.stamina<=0){ f.stamina=0; f.exhausted=0.85; floater(f.x,f.y-176,'💤 EXHAUSTED!','#ffd21a'); }
  var base={punch:{dmg:5+f.char.pow*0.35,range:88,meter:9,dur:0.16},
           kick:{dmg:8+f.char.pow*0.45,range:98,meter:12,dur:0.2},
           heavy:{dmg:12+f.char.pow*0.6,range:94,meter:16,dur:0.24}}[type];
  var cd=BASE_CD[type]*(spamMult<1?1.7:1);
  f.cds[type]=cd; f.cdsMax[type]=cd;
  var cfg={dmg:base.dmg*spamMult,range:base.range,meter:base.meter,dur:base.dur,moveType:type,finisher:''};
  /* ===== NAMED COMBOS: remember the last moves — finish a pattern for a finisher ===== */
  f.seq.push(type); if(f.seq.length>3) f.seq.shift(); f.seqT=1.25;
  var last3=f.seq.join(',');
  if(last3==='punch,punch,kick'){ cfg.finisher='RISING UPPERCUT'; cfg.dmg*=1.65; cfg.range+=14; }
  else if(last3==='kick,kick,heavy'){ cfg.finisher='SPIN CYCLONE'; cfg.dmg*=1.65; cfg.range+=16; }
  else if(last3==='punch,kick,heavy'){ cfg.finisher='TRUE FINISHER'; cfg.dmg*=1.45; cfg.range+=10; }
  if(cfg.finisher){ f.finisher=0.42; f.finisherName=cfg.finisher; f.seq=[]; floater(f.x,f.y-196,'⚡ '+cfg.finisher+'!','#ffe98a'); beep(980,.14,'triangle'); setTimeout(function(){beep(1240,.12,'triangle');},70); }
  f.state=type; f.atkT=cfg.dur; f.atkCd=Math.min(cd,0.5); f.atkCfg=cfg; f.atkHitDone=false;
  /* step-in lunge so every attack visibly lunges forward — real fighting-game feel */
  f.vx+=f.face*(type==='punch'?150:type==='kick'?210:260);
  if(!f.onGround) f.vx=f.face*Math.max(Math.abs(f.vx),140)*1;
  beep(type==='punch'?520:type==='kick'?340:200,.05,'square'); refreshCdUI();
}
function applyStatus(att,def,status,dmg){
  if(!status||!def) return;
  if(status==='shock'){ def.shockT=Math.max(def.shockT,0.5); def.hitT=Math.max(def.hitT,0.42); floater(def.x,def.y-224,'⚡ SHOCKED!','#7dd3fc'); }
  else if(status==='slow'){ def.slowT=Math.max(def.slowT, att.char.id==='berners'?3.0:2.2); floater(def.x,def.y-224,'🐌 SLOWED!','#93c5fd'); spawnParticles(def.x+27,def.y-102,'#93c5fd',10); }
  else if(status==='poison'){ def.poisonT=3.5; def.poisonTick=0; def.poisonSrc=att; floater(def.x,def.y-224,'☢️ POISONED!','#4ade80'); spawnParticles(def.x+27,def.y-102,'#4ade80',12); }
  else if(status==='freeze'){ def.freezeT=0.95; def.hitT=Math.max(def.hitT,0.6); def.vx=0; floater(def.x,def.y-224,'❄️ FROZEN!','#bae6fd'); spawnParticles(def.x+27,def.y-112,'#e0f2fe',16); beep(1200,.15,'sine'); }
  else if(status==='burn'){ def.poisonT=Math.max(def.poisonT,1.6); def.poisonTick=0; def.poisonSrc=att; floater(def.x,def.y-224,'🔥 BURNING!','#fdba74'); }
  else if(status==='pull'){ def.vx += (att.x-def.x>0?1:-1)*120; }
}
function doSpecial(f,o,ult){
  var cost=ult?100:30;
  if(f.char.id==='hawking'&&ult) cost=85; /* Hawking passive */
  if(f.projCd>0||f.hitT>0||f.guardBreak>0||f.freezeT>0) return;
  if(ult&&f.ultUsed){ floater(f.x,f.y-216,'⭐ ULT ALREADY USED THIS ROUND!','#ffc61a'); beep(140,.09,'sawtooth'); f.projCd=0.3; return; }
  if(!ult){
    if(f.cds.spec>0) return;
    if(f.lockMove==='spec'&&f.lockT>0){ floater(f.x,f.y-216,'🔒 SPECIAL LOCKED — MIX IT UP!','#ff8a94'); return; }
    if(f.exhausted>0||f.stamina<STAM_COST.spec){ floater(f.x,f.y-216,'😮‍💨 NO STAMINA FOR SPECIAL!','#ffd21a'); return; }
    var activeMine=projectiles.filter(function(p){return p.owner===f;}).length;
    if(activeMine>=4){ floater(f.x,f.y-216,'✋ TOO MANY PROJECTILES OUT!','#ffc61a'); return; }
  }
  if(f.meter<cost){ floater(f.x,f.y-216, ult?'NEED FULL METER!':'NEED 30 METER','#ffc61a'); beep(140,.08,'sawtooth'); f.projCd=0.25; return; }
  var ab=f.char.ability||ABILITIES.jensen;
  var spamMult=1;
  if(!ult){ spamMult=registerMove(f,'spec'); f.stamina-=STAM_COST.spec; var cdMul=(f.char.id==='sundar'?0.9:1); f.cds.spec=BASE_CD.spec*(spamMult<1?1.7:1)*cdMul; f.cdsMax.spec=f.cds.spec; }
  if(ult) f.ultUsed=true;
  f.meter-=cost; f.projCd=ult?0.9:0.55; f.state=ult?'ult':'spec'; f.atkT=ult?0.5:0.34;
  if(ult) f.ultAnimT=0.7; else f.specAnimT=0.45;
  var baseDmg=(ult? 26+f.char.pow*1.25 : 10+f.char.pow*0.7);
  var dmg=baseDmg*(ab.dmgMult||1)*spamMult*(ult?1.7:1);
  var kind=ult?'ult':ab.kind;
  /* --- MOVEMENT / INSTANT skills: teleport, dive, slide --- */
  if(!ult&&(kind==='teleport'||kind==='dive'||kind==='slide')){
    if(kind==='teleport'){ spawnParticles(f.x+27,f.y-100,'#2f7bff',22); ringParticles(f.x+27,f.y-100,'#2f7bff');
      f.x=Math.max(14,Math.min(W-f.w-14, o.x - o.face*70)); f.face=o.x>f.x?1:-1; spawnParticles(f.x+27,f.y-100,'#2f7bff',22);
      floater(f.x,f.y-224,'💻 GLITCH — BEHIND YOU!','#93c5fd'); beep(900,.12,'sawtooth');
      setTimeout(function(){},0); damage(f,o,dmg,10,'heavy'); }
    else if(kind==='dive'){ f.vy=-420; f.vx=f.face*760; f.dashT=0.32; f.dashDir=f.face; f.onGround=false; f.state='dive'; f.atkT=0.45; f.atkCfg={dmg:dmg,range:96,meter:12,dur:0.45,moveType:'heavy',finisher:''}; f.atkHitDone=false;
      floater(f.x,f.y-224,'🎨 FLYING MACHINE DIVE!','#fde68a'); beep(500,.15,'triangle'); }
    else { f.vx=f.face*880; f.dashT=0.28; f.dashDir=f.face; f.state='slide'; f.atkT=0.4; f.atkCfg={dmg:dmg,range:92,meter:12,dur:0.4,moveType:'kick',finisher:''}; f.atkHitDone=false;
      floater(f.x,f.y-224,'🐧 PENGUIN SLIDE!','#fde68a'); spawnParticles(f.x+27,f.y-4,'#e0f2fe',12); beep(340,.12,'triangle'); }
    updateHUD(); return;
  }
  /* --- SKY DROP (Newton): apple falls on the rival's head --- */
  if(!ult&&kind==='drop'){
    projectiles.push({x:o.x+27,y:40,vx:0,vy:120,dmg:dmg,owner:f,color:'#e03131',id:f.char.id,proj:'apple',kindType:'drop',status:null,size:20,delay:0,life:2.4,trail:[],grav:1500,homing:0});
    floater(f.x,f.y-224,'🍎 GRAVITY SAYS HELLO!','#fda4af'); beep(300,.14,'triangle'); updateHUD(); return;
  }
  /* --- BLACK HOLE PULL (Hawking) --- */
  if(!ult&&kind==='pull'){
    projectiles.push({x:f.x+27+f.face*150,y:f.y-115,vx:0,vy:0,dmg:dmg,owner:f,color:'#a78bfa',id:f.char.id,proj:'hole',kindType:'pull',status:null,size:22,delay:0,life:1.15,trail:[],grav:0,homing:0,pull:true});
    floater(f.x,f.y-224,'🕳️ BLACK HOLE PULL!','#c4b5fd'); beep(110,.3,'sawtooth'); updateHUD(); return;
  }
  /* --- TRAPS (Ada loop / Zuck metaverse): sit on the floor and snare --- */
  if(!ult&&kind==='trap'){
    projectiles.push({x:f.x+27+f.face*120,y:GROUND-14,vx:0,vy:0,dmg:dmg,owner:f,color:f.char.color,id:f.char.id,proj:ab.proj,kindType:'trap',status:ab.status,size:20,delay:0,life:4.5,trail:[],grav:0,homing:0});
    floater(f.x,f.y-224,(f.char.id==='ada'?'🔁 INFINITE LOOP TRAP!':'🌀 METAVERSE TRAP!'),f.char.color); beep(520,.14,'triangle'); updateHUD(); return;
  }
  /* --- BRAINROT MEME SPECIAL: ELON MUSK — ROCKET RAIN. Rockets fall from the sky onto the
         rival; the middle one lands for a flat 100 damage = 40% of the 250 max HP. --- */
  if(!ult&&f.char.id==='elon'){
    f.cds.spec=2.8; f.cdsMax.spec=2.8; /* meme specials recharge slower — they hit HARD */
    showBrainrot('🚀 ROCKET RAIN!!!','💥 BOOM! BOOM! BOOM! 💥','rocket');
    floater(f.x,f.y-224,'🚀 ROCKET RAIN INCOMING!','#fdba74',22);
    for(var ri=0;ri<3;ri++){
      projectiles.push({x:o.x+27+(ri-1)*54,y:-30-ri*70,vx:0,vy:300,dmg:0,owner:f,color:'#f97316',id:f.char.id,proj:'rocket',kindType:'rain',status:null,size:18,delay:ri*0.16,life:3,trail:[],grav:0,homing:0,memeDmg:ri===1?100:0});
    }
    shake=Math.max(shake,8); beep(200,.2,'sawtooth'); setTimeout(function(){beep(320,.18,'sawtooth');},110); setTimeout(function(){beep(90,.3,'sawtooth');},320);
    updateHUD(); return;
  }
  /* --- BRAINROT MEME SPECIAL: JENSEN HUANG — CEO AGAIN STOCK CRASH. A giant joke chip throw,
         then red stock charts crash down from the sky for a flat 87 damage = 35% of max HP. --- */
  if(!ult&&f.char.id==='jensen'){
    f.cds.spec=2.8; f.cdsMax.spec=2.8;
    showBrainrot('💚 I AM THE CEO AGAIN!!!','📉 STOCK CRASH! STONKS DOWN! 📉','crash');
    floater(f.x,f.y-246,'"I AM THE CEO AGAIN!"','#76b900',26);
    projectiles.push({x:f.x+27+f.face*40,y:f.y-150,vx:f.face*560,vy:-320,dmg:0,owner:f,color:'#76b900',id:f.char.id,proj:'giantchip',kindType:'giantchip',status:null,size:34,delay:0,life:2.2,trail:[],grav:1050,homing:0,memeDmg:87});
    spawnParticles(f.x+27+f.face*30,f.y-140,'#76b900',16); ringParticles(f.x+27,f.y-120,'#76b900');
    shake=Math.max(shake,6); beep(880,.12,'square'); setTimeout(function(){beep(660,.12,'square');},90); setTimeout(function(){beep(440,.14,'square');},180);
    updateHUD(); return;
  }
  /* --- PROJECTILE skills: each with its own count / speed / spread / homing --- */
  var count=ult?5:(ab.count||1);
  var spd=ult?500:(ab.speed||540);
  for(var i=0;i<count;i++){
    var spread=(count>1)?(i-(count-1)/2):0;
    projectiles.push({x:f.x+27+f.face*38, y:f.y-120+spread*13, vx:f.face*spd, vy:spread*(ab.kind==='swarm'?70:26),
      dmg:dmg/(ult?1.5:(count>2?1.35:1)), owner:f, color:f.char.color, id:f.char.id, proj:ult?'ult':ab.proj, kindType:ult?'ult':ab.kind,
      status:ult?ab.status:ab.status, size:ult?16:(ab.size||13), delay:i*0.07, life:2.4, trail:[], grav:(ab.proj==='gear'?60:0),
      homing:(ab.kind==='homing'?(f.char.id==='katherine'?3.4:2.6):0)});
  }
  if(f.char.id==='jensen'&&!ult) floater(f.x,f.y-224,'💚 POCKET GPU — CHIP BARRAGE!','#76b900');
  else floater(f.x,f.y-224,(ult?'★ ULT: '+f.char.ult:f.char.spec).toUpperCase()+'!',f.char.color);
  spawnParticles(f.x+27+f.face*30,f.y-120,f.char.color,ult?26:12);
  if(ult){ ringParticles(f.x+27,f.y-100,f.char.color); shake=Math.max(shake,7); }
  beep(ult?880:660,.12,'triangle'); updateHUD();
}
function damage(att,def,dmg,meterGain,kind,status){
  if(status&&!(def.block&&def.onGround)) applyStatus(att,def,status,dmg);
  var blocked=def.block && def.onGround && def.guardBreak<=0;
  /* --- true-combo tracking: mixing different moves builds a chain with bonus damage --- */
  var chainBonus=1, isTrueCombo=false;
  if(!blocked && kind!=='proj'){
    var mv=att.atkCfg&&att.atkCfg.moveType?att.atkCfg.moveType:kind;
    if(att.chainT>0 && att.chain.length && att.chain[att.chain.length-1]!==mv){ att.chain.push(mv); isTrueCombo=att.chain.length>=2; }
    else if(att.chainT<=0){ att.chain=[mv]; }
    att.chainT=att.char.id==='ada'?1.45:0.95;
    if(isTrueCombo) chainBonus=1+Math.min(0.30,(att.chain.length-1)*0.10);
  }
  /* --- damage scaling inside one long combo so nobody dies to an infinite string --- */
  var scale=1;
  if(!blocked){ def.comboHitsTaken++; scale=Math.max(0.55, 1-(def.comboHitsTaken-1)*0.09); }
  var final=blocked?1:Math.max(1,Math.round(dmg*chainBonus*scale));
  /* --- guard break: too many blocked hits stuns the blocker --- */
  if(blocked){
    def.guardHits++; def.guardT=2.2;
    if(def.guardHits>=(def.char.id==='gates'?5:4)){ def.guardBreak=0.9; def.guardHits=0; def.block=false; blocked=false; final=Math.max(1,Math.round(dmg*0.6));
      floater(def.x,def.y-218,'💥 GUARD BREAK!','#ff3b4e'); hitstop=0.09; shake=11;
      spawnParticles(def.x+27,def.y-112,'#bfe3ff',18); burstStar(def.x+27,def.y-118,30,'#bfe3ff'); beep(90,.18,'sawtooth');
    }
  }
  def.hp=Math.max(0,def.hp-final); def.hitT=blocked?0.1:(def.guardBreak>0?0.5:0.24); def.hitFlashT=blocked?0.07:0.13; def.state=blocked?'block':'hit';
  def.dashT=0;
  if(def.hitT<=0.15||!blocked) def.comboHitsTaken=def.hp>0&&blocked?def.comboHitsTaken:def.comboHitsTaken;
  if(!blocked){
    def.vx=att.face*(kind==='heavy'?330:kind==='proj'?190:210);
    if(kind==='heavy'||kind==='proj'){ def.vy=Math.min(def.vy,(att.char.id==='newton'&&kind==='heavy')?-280:-160); def.onGround=false; }
    /* --- combo finisher payoffs: launch, cyclone knockback, shockwave --- */
    var fin=att.atkCfg&&att.atkCfg.finisher?att.atkCfg.finisher:'';
    if(fin==='RISING UPPERCUT'){ def.vy=-560; def.onGround=false; def.vx=att.face*120; hitstop=0.11; shake=12; ringParticles(def.x+27,def.y-30,'#ffe98a'); burstStar(def.x+27,def.y-122,40,'#ffe98a'); floater(def.x,def.y-228,'🚀 LAUNCHED!','#ffe98a'); }
    else if(fin==='SPIN CYCLONE'){ def.vx=att.face*580; def.vy=-240; def.onGround=false; hitstop=0.1; shake=13; ringParticles(def.x+27,def.y-102,att.char.color); burstStar(def.x+27,def.y-118,42,att.char.color); }
    else if(fin==='TRUE FINISHER'){ def.vx=att.face*420; def.vy=-300; def.onGround=false; hitstop=0.12; shake=14; ringParticles(def.x+27,def.y-102,'#ffe98a'); burstStar(def.x+27,def.y-118,44,'#ffe98a'); }
    var mg=meterGain*(isTrueCombo?1.35:1); if(att.char.id==='jensen'&&kind==='proj')mg*=1.4; if(att.char.id==='hopper'&&kind==='proj')mg*=1.5; if(att.char.id==='altman'&&isTrueCombo)mg*=1.2;
    att.meter=Math.min(100,att.meter+mg); def.meter=Math.min(100,def.meter+5);
    if(att.char.id==='tesla') def.hitT+=0.06;
    att.combo++; att.comboT=1.1;
    hitstop = kind==='heavy'?0.075 : 0.04;
    shake=kind==='heavy'?9:5;
    spawnParticles(def.x+27,def.y-108,att.char.color, kind==='heavy'?20:12);
    burstStar(def.x+27+att.face*20,def.y-118, kind==='heavy'?28:18, att.char.color);
    if(isTrueCombo) floater(att.x,att.y-218,'🔥 TRUE COMBO x'+att.chain.length+'!','#ffc61a');
    /* LOCAL impact burst only — never a full-screen flash (that was the white-screen flicker) */
    if(kind==='heavy'||isTrueCombo){ ringParticles(def.x+27,def.y-108,att.char.color); burstStar(def.x+27+att.face*22,def.y-118, kind==='heavy'?30:24, att.char.color); }
  } else {
    shake=2; spawnParticles(def.x+27+att.face*24,def.y-112,'#bfe3ff',5); def.meter=Math.min(100,def.meter+(def.char.id==='davinci'?8:3));
  }
  floater(def.x,def.y-214, blocked?'BLOCKED':'-'+final, blocked?'#fff':'#ffd21a');
  beep(blocked?180:90,.06,'sawtooth');
  updateHUD(); checkKO();
}
function floater(x,y,txt,color,size){ var t=size?1.5:0.9; floaters.push({x:x,y:y,txt:txt,color:color,t:t,t0:t,size:size||15}); }
/* ===== BRAINROT MEME SPECIALS: banner, flat meme damage, stock crash ===== */
var bbTimer=null;
function showBrainrot(main,sub,cls){
  var b=document.getElementById('brainrotBanner'); if(!b) return;
  document.getElementById('bbMain').textContent=main; document.getElementById('bbSub').textContent=sub;
  b.className='brainrot-banner '+cls; void b.offsetWidth; b.classList.add('show');
  if(bbTimer) clearTimeout(bbTimer);
  bbTimer=setTimeout(function(){ b.classList.remove('show'); },1550);
}
function memeHit(att,def,amount){
  /* Flat, unscaled meme damage — exactly the number on the tin (100 for Rocket Rain, 87 for Stock Crash) */
  def.hp=Math.max(0,def.hp-amount);
  def.hitT=0.55; def.hitFlashT=0.22; def.state='hit'; def.dashT=0;
  def.vx=att.face*300; def.vy=-260; def.onGround=false;
  hitstop=Math.max(hitstop,0.13); shake=Math.max(shake,17);
  floater(def.x,def.y-246,'-'+amount+'!!!','#ff3b4e',38);
  floater(def.x,def.y-202,'💥 BRAINROT HIT!','#ffe082',19);
  spawnParticles(def.x+27,def.y-110,'#ffd21a',22); burstStar(def.x+27,def.y-118,46,'#ff7a00'); ringParticles(def.x+27,def.y-100,'#ff3b4e');
  beep(60,.3,'sawtooth'); setTimeout(function(){beep(45,.35,'sawtooth');},60);
  updateHUD(); checkKO();
}
function stockCrash(att,target,impactX,wasHit){
  for(var ci=0;ci<5;ci++){
    projectiles.push({x:target.x+27+(ci-2)*36,y:-20-ci*46,vx:0,vy:340+ci*30,dmg:0,owner:att,color:'#ff3b4e',id:att.char.id,proj:'chart',kindType:'chart',status:null,size:16,delay:ci*0.05,life:2.4,trail:[],grav:0,homing:0});
  }
  spawnParticles(impactX,GROUND-16,'#ff3b4e',16); spawnParticles(impactX,GROUND-30,'#76b900',12); burstStar(impactX,GROUND-40,36,'#ff3b4e');
  shake=Math.max(shake,15); hitstop=Math.max(hitstop,0.1);
  beep(760,.14,'sawtooth'); setTimeout(function(){beep(540,.14,'sawtooth');},90); setTimeout(function(){beep(320,.16,'sawtooth');},180); setTimeout(function(){beep(140,.3,'sawtooth');},270);
  floater(target.x,target.y-246,'📉📉📉 CRASH!','#ff8a94',24);
  if(wasHit||Math.abs((target.x+27)-impactX)<150) memeHit(att,target,87);
  updateHUD();
}
function spawnParticles(x,y,color,n){ for(var i=0;i<n;i++) particles.push({x:x,y:y,vx:(Math.random()-.5)*380,vy:(Math.random()-.7)*380,t:0.35+Math.random()*0.25,color:color,size:3+Math.random()*4}); }
function ringParticles(x,y,color){ for(var i=0;i<10;i++){ var a=i/10*Math.PI*2; particles.push({x:x+Math.cos(a)*22,y:y+Math.sin(a)*7,vx:Math.cos(a)*130,vy:-30,t:0.3,color:color,size:3}); } }
function burstStar(x,y,r,color){ particles.push({star:true,x:x,y:y,r:r,t:0.16,color:color}); }
function checkKO(){ if(F1.hp<=0||F2.hp<=0){ endRound(F1.hp<=0?F2:F1); } }
function endRound(winner){
  if(gameState!=='fight') return;
  if(trainingMode){ /* training: no wins, no timer — just refill and go again */
    gameState='roundEnd'; var lw=winner===F1?F2:F1; lw.state='ko'; lw.vx=winner.face*180; lw.vy=-260; lw.onGround=false;
    announce('💥 K.O.! Training mode — HP refilled, keep practising!',999999); beep(120,.4,'sawtooth'); shake=15; hitstop=0.12; spawnParticles(lw.x+27,lw.y-60,'#ffc61a',30);
    setTimeout(function(){ if(gameState==='roundEnd'){ round=1; gameState='fight'; startRound(); } },1700);
    return;
  }
  gameState='roundEnd'; winner.wins++; updateHUD();
  var loser=winner===F1?F2:F1; loser.state='ko'; loser.vx=winner.face*180; loser.vy=-260; loser.onGround=false;
  announce('💥 K.O.! '+(winner===F1?'PLAYER 1':'PLAYER 2')+' — '+winner.char.name+' wins the round! '+winner.char.taunt, 999999);
  beep(120,.4,'sawtooth'); shake=15; hitstop=0.12; spawnParticles(loser.x+27,loser.y-60,'#ffc61a',30);
  setTimeout(function(){
    if(F1.wins>=2||F2.wins>=2){ gameState='matchEnd'; var w=F1.wins>=2?F1:F2;
      document.getElementById('endTitle').textContent=(w===F1?'🔴 Player 1':'🔵 Player 2')+' wins!';
      document.getElementById('endText').innerHTML='<b style="color:#fff;font-size:19px">'+w.char.name+'</b> takes the match '+F1.wins+' – '+F2.wins+'.<br>'+w.char.taunt+'<br><br>Ultimate used: '+w.char.ult+' • Special: '+w.char.spec;
      document.getElementById('endModal').classList.add('show');
    } else { round++; gameState='fight'; startRound(); }
  },2300);
}
/* audio */
var AC=null; function beep(fr,dur,type){ try{ AC=AC||new (window.AudioContext||window.webkitAudioContext)(); if(AC.state==='suspended')AC.resume(); var o=AC.createOscillator(),g=AC.createGain(); o.type=type||'square'; o.frequency.value=fr; g.gain.setValueAtTime(.05,AC.currentTime); g.gain.exponentialRampToValueAtTime(.001,AC.currentTime+dur); o.connect(g); g.connect(AC.destination); o.start(); o.stop(AC.currentTime+dur);}catch(e){} }

function stepFighter(f,o,dt){
  f.anim+=dt*7; f.auraT+=dt;
  if(f.atkCd>0)f.atkCd-=dt; if(f.projCd>0)f.projCd-=dt; if(f.tauntCd>0)f.tauntCd-=dt;
  if(f.atkT>0)f.atkT-=dt; if(f.hitT>0)f.hitT-=dt; if(f.dashCd>0)f.dashCd-=dt;
  /* cooldowns + stamina + timers (identical rules for both players) */
  var cdDirty=false;
  ['punch','kick','heavy','spec','dash'].forEach(function(k){ if(f.cds[k]>0){ f.cds[k]=Math.max(0,f.cds[k]-dt); cdDirty=true; } });
  if(f.lockT>0){ f.lockT-=dt; if(f.lockT<=0){ f.lockMove=''; } cdDirty=true; }
  if(f.spamWindow>0){ f.spamWindow-=dt; if(f.spamWindow<=0){ f.spamCount=0; f.lastMove=''; } }
  if(f.chainT>0){ f.chainT-=dt; if(f.chainT<=0) f.chain=[]; }
  if(f.seqT>0){ f.seqT-=dt; if(f.seqT<=0) f.seq=[]; }
  if(f.finisher>0) f.finisher-=dt;
  if(f.landT>0) f.landT-=dt;
  if(f.guardT>0){ f.guardT-=dt; if(f.guardT<=0) f.guardHits=0; }
  if(f.guardBreak>0) f.guardBreak-=dt;
  if(f.exhausted>0) f.exhausted-=dt;
  if(f.hitT<=0) f.comboHitsTaken=0;
  var regen=(f.state==='block'||f.block)?30:(Math.abs(f.vx)<40&&f.atkT<=0?26:13); if(f.char.id==='einstein')regen*=1.25; if(f.char.id==='linus'&&f.block)regen*=1.3;
  if(f.exhausted<=0) f.stamina=Math.min(100,f.stamina+regen*dt);
  if(cdDirty && Math.random()<0.5) refreshCdUI();
  if(f.comboT>0){ f.comboT-=dt; if(f.comboT<=0){ f.combo=0; updateHUD(); } }
  /* v8 status timers + poison damage-over-time */
  if(f.hitFlashT>0)f.hitFlashT-=dt; if(f.specAnimT>0)f.specAnimT-=dt; if(f.ultAnimT>0)f.ultAnimT-=dt; if(f.tauntAnimT>0)f.tauntAnimT-=dt;
  if(f.slowT>0)f.slowT-=dt; if(f.freezeT>0)f.freezeT-=dt; if(f.shockT>0)f.shockT-=dt;
  if(f.poisonT>0){ f.poisonT-=dt; f.poisonTick+=dt;
    if(f.poisonTick>=0.55){ f.poisonTick=0; f.hp=Math.max(1,f.hp-3); spawnParticles(f.x+27,f.y-125,'#4ade80',4); floater(f.x,f.y-212,'☢️ -3','#4ade80'); updateHUD(); }
    if(Math.random()<0.25) particles.push({x:f.x+10+Math.random()*34,y:f.y-20-Math.random()*70,vx:0,vy:-55,t:0.5,color:'#4ade80',size:4});
  }
  if(f.ghostHp>f.hp){ f.ghostHp=Math.max(f.hp,f.ghostHp-26*dt); document.getElementById(f.controls==='p1'?'hpGhost1':'hpGhost2').style.width=Math.max(0,f.ghostHp/MAX_HP*100)+'%'; }
  f.block=held(f,'block') && f.hitT<=0 && f.guardBreak<=0;
  var canAct = f.hitT<=0 && f.guardBreak<=0 && f.freezeT<=0 && roundLock<=0 && !paused && gameState==='fight';
  if(f.char.id==='curie'&&gameState==='fight'&&Math.abs((o.x)-(f.x))<170) f.meter=Math.min(100,f.meter+1.6*dt);
  if(canAct) tryActions(f,o);
  /* movement: acceleration + friction, identical constants for everyone */
  if(f.dashT>0){
    f.dashT-=dt; f.vx=f.dashDir*MOVE.dashSpeed;
    if(Math.random()<0.8) afterimages.push({x:f.x,y:f.y,face:f.face,char:f.char,t:10});
    if(f.dashT<=0) f.vx=f.dashDir*MOVE.maxSpeed*0.6;
  } else if(f.hitT>0){
    f.vx*=Math.pow(0.0018,dt);
  } else if(canAct && !f.block){
    var dir=(held(f,'right')?1:0)-(held(f,'left')?1:0);
    var acc=f.onGround?MOVE.accel:MOVE.airAccel, mx=f.onGround?MOVE.maxSpeed:MOVE.airMax;
    if(f.slowT>0){ mx*=0.52; acc*=0.6; } if(f.freezeT>0){ mx=0; }
    if(dir!==0){ f.face=dir; f.vx+=dir*acc*dt; f.vx=Math.max(-mx,Math.min(mx,f.vx)); }
    else if(f.onGround){ var s=Math.sign(f.vx); f.vx-=s*MOVE.friction*dt; if(Math.sign(f.vx)!==s)f.vx=0; }
  } else if(f.block&&f.onGround){ f.vx*=Math.pow(0.0001,dt); }
  f.vy+=MOVE.gravity*dt; if(f.vy>MOVE.fallMax)f.vy=MOVE.fallMax;
  f.x+=f.vx*dt; f.y+=f.vy*dt;
  if(f.y>=GROUND){ if(!f.onGround && f.vy>420){ spawnParticles(f.x+27,GROUND,'#8ea2d8',8); f.landT=0.18; ringParticles(f.x+27,GROUND,'#5a6fb3'); } f.y=GROUND; f.vy=0; f.onGround=true; f.jumps=0; }
  else f.onGround=false;
  /* run dust while sprinting on the ground — v13 FIX: this check must NOT touch onGround.
     Previously its trailing "else f.onGround=false" fired every frame a grounded fighter
     stood still or walked at |vx|<=240, so the state picker below saw !onGround, labelled
     idle/walk fighters 'fall', and the renderer drew the tucked air pose with both shoes
     24-34px above the floor while the shadow stayed on the ground — the floating bug. */
  if(f.onGround&&Math.abs(f.vx)>240){ f.runDust-=dt; if(f.runDust<=0){ f.runDust=0.07; particles.push({x:f.x+27-f.face*22,y:GROUND-2,vx:-f.face*60,vy:-40-Math.random()*30,t:0.3,color:'#8ea2d8',size:4+Math.random()*3}); } }
  f.x=Math.max(14,Math.min(W-f.w-14,f.x));
  var dx=(o.x+27)-(f.x+27); if(Math.abs(dx)<48 && Math.abs(o.y-f.y)<92){ var push=(48-Math.abs(dx))/2*Math.sign(dx||1); f.x-=push; }
  if(f.atkCfg && f.atkT>0 && !f.atkHitDone && (f.state==='punch'||f.state==='kick'||f.state==='heavy'||f.state==='dive'||f.state==='slide')){
    var cfg=f.atkCfg, d=(o.x+27)-(f.x+27);
    if(Math.abs(d)<cfg.range && Math.sign(d)===f.face && Math.abs(o.y-f.y)<104){ f.atkHitDone=true; damage(f,o,cfg.dmg,cfg.meter,f.state); }
  }
  if(f.atkT<=0 && f.atkCfg) f.atkCfg=null;
  if(gameState==='roundEnd'&&f.state==='ko'){ }
  else if(f.guardBreak>0) f.state='hit';
  else if(f.hitT>0) f.state='hit';
  else if(f.atkT>0) { }
  else if(f.dashT>0) f.state='dash';
  else if(!f.onGround) f.state=f.vy<0?'jump':'fall';
  else if(f.block) f.state='block';
  else if(f.tauntAnimT>0) f.state='taunt';
  else if(Math.abs(f.vx)>315) f.state='run';
  else if(Math.abs(f.vx)>30) f.state='walk';
  else f.state='idle';
}
function step(dt){
  nowSec+=dt; bgT+=dt;
  if(roundLock>0) roundLock-=dt;
  if(hitstop>0){ hitstop-=dt; return; }
  if(gameState==='fight' && roundLock<=0 && !trainingMode){ timeLeft-=dt; if(timeLeft<=0){ timeLeft=0; updateHUD(); endRound(F1.hp===F2.hp?(Math.random()<.5?F1:F2):(F1.hp>F2.hp?F1:F2)); return; } }
  stepFighter(F1,F2,dt); stepFighter(F2,F1,dt);
  for(var i=projectiles.length-1;i>=0;i--){ var p=projectiles[i];
    if(p.delay>0){ p.delay-=dt; continue; }
    var target=p.owner===F1?F2:F1;
    /* Hawking black hole: drag the rival in, burst at end of life */
    if(p.pull){ var pd=(p.x)-(target.x+27); target.vx+=Math.sign(pd)*620*dt*8; target.x+=Math.sign(pd)*46*dt;
      if(Math.random()<0.6) particles.push({x:p.x+(Math.random()-.5)*70,y:p.y+(Math.random()-.5)*50,vx:-(Math.random()-.5)*40,vy:0,t:0.3,color:'#a78bfa',size:3});
      p.life-=dt; if(p.life<=0){ damage(p.owner,target,p.dmg,8,'proj'); burstStar(target.x+27,target.y-70,34,'#a78bfa'); projectiles.splice(i,1); } continue; }
    /* Traps sit still and snare on contact */
    if(p.kindType==='trap'){ p.life-=dt; if(p.life<=0){ projectiles.splice(i,1); continue; }
      if(Math.abs((target.x+27)-p.x)<42 && target.onGround){ damage(p.owner,target,p.dmg,6,'proj',p.status); burstStar(p.x,p.y-10,26,p.color); projectiles.splice(i,1); } continue; }
    /* BRAINROT: Elon's rain rockets fall straight down and explode on the floor */
    if(p.kindType==='rain'){ p.vy+=1500*dt; p.y+=p.vy*dt; p.life-=dt;
      if(p.y>=GROUND-14||p.life<=0){ burstStar(p.x,GROUND-16,46,'#fdba74'); spawnParticles(p.x,GROUND-14,'#f97316',22); spawnParticles(p.x,GROUND-24,'#ffd21a',10); shake=Math.max(shake,13); beep(70,.25,'sawtooth');
        if(p.memeDmg&&Math.abs((target.x+27)-p.x)<100) memeHit(p.owner,target,p.memeDmg);
        projectiles.splice(i,1); } continue; }
    /* BRAINROT: Jensen's red stock charts crash down (visual rain over the crash zone) */
    if(p.kindType==='chart'){ p.y+=p.vy*dt; p.life-=dt; if(p.y>=GROUND-10||p.life<=0){ spawnParticles(p.x,GROUND-8,'#ff3b4e',6); projectiles.splice(i,1); } continue; }
    /* BRAINROT: Jensen's giant chip arcs through the air — on hit or landing, the market crashes */
    if(p.kindType==='giantchip'){ p.vy+=p.grav*dt; p.x+=p.vx*dt; p.y+=p.vy*dt; p.life-=dt;
      var gHit=Math.abs((target.x+27)-p.x)<56 && p.y>target.y-202 && p.y<target.y+8;
      if(gHit||p.y>=GROUND-26||p.life<=0){ stockCrash(p.owner,target,p.x,gHit); projectiles.splice(i,1); } continue; }
    p.trail.push({x:p.x,y:p.y}); if(p.trail.length>7)p.trail.shift();
    if(p.homing){ var want=Math.atan2((target.y-70)-p.y,(target.x+27)-p.x); var cur=Math.atan2(p.vy,p.vx); var diff=want-cur; while(diff>Math.PI)diff-=Math.PI*2; while(diff<-Math.PI)diff+=Math.PI*2; cur+=Math.max(-p.homing*dt,Math.min(p.homing*dt,diff)); var sp=Math.hypot(p.vx,p.vy)||500; p.vx=Math.cos(cur)*sp; p.vy=Math.sin(cur)*sp; }
    if(p.grav) p.vy+=p.grav*dt;
    p.x+=p.vx*dt; p.y+=p.vy*dt; p.life-=dt;
    if(p.kindType==='drop'&&p.y>=GROUND-16){ damage(p.owner,target, Math.abs((target.x+27)-p.x)<70?p.dmg:p.dmg*0.25, 6,'proj'); burstStar(p.x,GROUND-14,30,'#e03131'); spawnParticles(p.x,GROUND-10,'#e03131',14); shake=Math.max(shake,6); projectiles.splice(i,1); continue; }
    if(p.life<=0||p.x<-40||p.x>W+40||p.y>H+30){ projectiles.splice(i,1); continue; }
    var hitR=34+(p.size||13)*0.7;
    if(Math.abs((target.x+27)-p.x)<hitR && p.y>target.y-194 && p.y<target.y+4){ damage(p.owner,target,p.dmg,4,'proj',p.status); if(p.kindType==='rocket'||p.proj==='rocket'){ burstStar(target.x+27,target.y-70,38,'#fdba74'); shake=Math.max(shake,9); spawnParticles(target.x+27,target.y-70,'#f97316',20); } projectiles.splice(i,1); }
  }
  particles.forEach(function(pt){ if(pt.star||pt.flash){pt.t-=dt;return;} pt.x+=pt.vx*dt; pt.y+=pt.vy*dt; pt.vy+=640*dt; pt.t-=dt; }); particles=particles.filter(function(p){return p.t>0;});
  floaters.forEach(function(fl){ fl.y-=34*dt; fl.t-=dt; }); floaters=floaters.filter(function(f){return f.t>0;});
  afterimages.forEach(function(a){ a.t--; }); afterimages=afterimages.filter(function(a){return a.t>0;});
  if(Math.ceil(timeLeft)!==parseInt(document.getElementById('timerNum').textContent)) updateHUD();
}
function loop(ts){
  if(gameState==='idle') return; raf=requestAnimationFrame(loop);
  if(!lastTs) lastTs=ts;
  var frame=Math.min(0.1,(ts-lastTs)/1000); lastTs=ts;
  if(!paused && (gameState==='fight'||gameState==='roundEnd')){
    acc+=frame;
    var n=0;
    while(acc>=STEP && n<5){ step(STEP); acc-=STEP; n++; }
    if(n===5) acc=0;
  }
  justPressed={};
  draw();
}
/* ================= DRAWING ================= */
function draw(){
  ctx.save(); ctx.clearRect(0,0,W,H);
  if(shake>0){ ctx.translate((Math.random()-.5)*shake,(Math.random()-.5)*shake); shake*=0.86; if(shake<0.4)shake=0; }
  if(stageIdx===1) drawDayBackground();
  else if(stageIdx===2) drawSpaceBackground();
  else { drawBackground(); drawArenaRealism(); }
  drawFFMaxPolish();
  afterimages.forEach(function(a){ drawFighterBody(a.char,a.x,a.y,a.face,0,a.t/10*0.30); });
  drawFighter(F2); drawFighter(F1);
  projectiles.forEach(function(p){ if(p.delay>0)return;
    p.trail.forEach(function(t,i){ ctx.globalAlpha=i/p.trail.length*0.3; ctx.fillStyle=p.color; ctx.beginPath(); ctx.arc(t.x,t.y,4+i,0,7); ctx.fill(); }); ctx.globalAlpha=1;
    if(p.kindType==='rain'){ ctx.save(); ctx.strokeStyle='rgba(255,59,78,.85)'; ctx.lineWidth=3; ctx.beginPath(); ctx.ellipse(p.x,GROUND+6,34+Math.sin(bgT*10)*5,10,0,0,7); ctx.stroke(); ctx.fillStyle='rgba(255,59,78,.95)'; ctx.font='900 14px system-ui'; ctx.textAlign='center'; ctx.fillText('⚠',p.x,GROUND+11); ctx.restore(); }
    ctx.save(); ctx.translate(p.x,p.y);
    if(p.proj==='giantchip'){ ctx.rotate(bgT*7*(p.vx>0?1:-1)); ctx.shadowColor='#76b900'; ctx.shadowBlur=24; ctx.fillStyle='#0c1a00'; roundRect(-36,-25,72,50,7); ctx.fill(); ctx.fillStyle='#76b900'; roundRect(-29,-18,58,36,4); ctx.fill(); ctx.fillStyle='#122b00'; roundRect(-11,-9,22,18,3); ctx.fill(); ctx.fillStyle='#e9ffb0'; for(var gk=-2;gk<=2;gk++){ ctx.fillRect(gk*13-2,-32,5,7); ctx.fillRect(gk*13-2,25,5,7); } ctx.rotate(-bgT*7*(p.vx>0?1:-1)); ctx.shadowBlur=0; ctx.fillStyle='#fff'; ctx.font='900 14px system-ui'; ctx.textAlign='center'; ctx.fillText('RTX',0,5); }
    else if(p.id==='jensen'){ ctx.rotate(bgT*9*(p.vx>0?1:-1)); ctx.fillStyle='#0c1a00'; roundRect(-18,-12,36,24,4); ctx.fill(); ctx.fillStyle='#76b900'; roundRect(-14,-8,28,16,2); ctx.fill(); ctx.fillStyle='#e9ffb0'; for(var k=-1;k<=1;k++){ ctx.fillRect(k*10-2,-18,4,6); ctx.fillRect(k*10-2,12,4,6);} ctx.rotate(-bgT*9*(p.vx>0?1:-1)); ctx.fillStyle='#fff'; ctx.font='900 8px system-ui'; ctx.textAlign='center'; ctx.fillText('RTX',0,3); }
    else { var sz=p.size||13; ctx.shadowColor=p.color; ctx.shadowBlur=14;
      if(p.proj==='apple'){ ctx.shadowBlur=0; ctx.fillStyle='#e03131'; ctx.beginPath(); ctx.arc(0,2,sz,0,7); ctx.fill(); ctx.fillStyle='#2b8a3e'; ctx.fillRect(-2,-sz-4,4,8); ctx.beginPath(); ctx.ellipse(6,-sz-2,7,3.5,-0.5,0,7); ctx.fill(); }
      else if(p.proj==='gear'){ ctx.rotate(bgT*4); ctx.fillStyle='#d9a441'; for(var gt=0;gt<8;gt++){ ctx.save(); ctx.rotate(gt*Math.PI/4); ctx.fillRect(-4,-sz-5,8,9); ctx.restore(); } ctx.beginPath(); ctx.arc(0,0,sz,0,7); ctx.fill(); ctx.fillStyle='#7a5510'; ctx.beginPath(); ctx.arc(0,0,sz*0.42,0,7); ctx.fill(); }
      else if(p.kindType==='rain'){ ctx.rotate(Math.PI/2); ctx.shadowColor='#f97316'; ctx.shadowBlur=16; ctx.fillStyle='#e5e7eb'; roundRect(-sz,-sz*0.55,sz*2,sz*1.1,6); ctx.fill(); ctx.fillStyle='#f97316'; ctx.beginPath(); ctx.moveTo(-sz,0); ctx.lineTo(-sz-16,-7); ctx.lineTo(-sz-26,0); ctx.lineTo(-sz-16,7); ctx.closePath(); ctx.fill(); ctx.fillStyle='#38bdf8'; ctx.beginPath(); ctx.arc(sz*0.35,0,5,0,7); ctx.fill(); ctx.fillStyle='#fff'; ctx.font='900 10px system-ui'; ctx.textAlign='center'; ctx.fillText('🚀',sz*0.95,4); }
      else if(p.proj==='chart'){ ctx.shadowColor='#ff3b4e'; ctx.shadowBlur=14; ctx.strokeStyle='#ff3b4e'; ctx.lineWidth=5; ctx.beginPath(); ctx.moveTo(-16,-12); ctx.lineTo(-5,-4); ctx.lineTo(2,-8); ctx.lineTo(14,10); ctx.stroke(); ctx.fillStyle='#ff3b4e'; ctx.beginPath(); ctx.moveTo(14,10); ctx.lineTo(3,8); ctx.lineTo(11,-2); ctx.closePath(); ctx.fill(); ctx.font='20px system-ui'; ctx.textAlign='center'; ctx.fillText('📉',0,-18); }
      else if(p.proj==='rocket'){ ctx.rotate(p.vx>0?0:Math.PI); ctx.fillStyle='#e5e7eb'; roundRect(-sz,-sz*0.55,sz*2,sz*1.1,6); ctx.fill(); ctx.fillStyle='#f97316'; ctx.beginPath(); ctx.moveTo(-sz,0); ctx.lineTo(-sz-13,-6); ctx.lineTo(-sz-20,0); ctx.lineTo(-sz-13,6); ctx.closePath(); ctx.fill(); ctx.fillStyle='#38bdf8'; ctx.beginPath(); ctx.arc(sz*0.35,0,4.5,0,7); ctx.fill(); }
      else if(p.proj==='bolt'||p.proj==='bulb'){ ctx.fillStyle=p.color; ctx.beginPath(); ctx.moveTo(4,-sz); ctx.lineTo(-sz*0.7,2); ctx.lineTo(-1,2); ctx.lineTo(-4,sz); ctx.lineTo(sz*0.7,-2); ctx.lineTo(1,-2); ctx.closePath(); ctx.fill(); ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(0,0,3.5,0,7); ctx.fill(); }
      else if(p.proj==='hole'){ ctx.rotate(bgT*6); ctx.strokeStyle='#a78bfa'; ctx.lineWidth=4; ctx.beginPath(); ctx.arc(0,0,sz,0,5.2); ctx.stroke(); ctx.fillStyle='#05010f'; ctx.beginPath(); ctx.arc(0,0,sz*0.62,0,7); ctx.fill(); }
      else if(p.proj==='loop'||p.proj==='meta'){ ctx.strokeStyle=p.color; ctx.lineWidth=4; ctx.beginPath(); ctx.ellipse(0,8,sz,sz*0.42,0,0,7); ctx.stroke(); ctx.fillStyle=p.color; ctx.font='900 11px system-ui'; ctx.textAlign='center'; ctx.fillText(p.proj==='loop'?'∞':'◈',0,4); }
      else if(p.proj==='bug'){ ctx.fillStyle='#111827'; ctx.beginPath(); ctx.ellipse(0,0,sz,sz*0.7,0,0,7); ctx.fill(); ctx.strokeStyle='#4ade80'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(-sz,4); ctx.lineTo(-sz-5,9); ctx.moveTo(sz,4); ctx.lineTo(sz+5,9); ctx.stroke(); ctx.fillStyle='#4ade80'; ctx.beginPath(); ctx.arc(-3,-2,2,0,7); ctx.arc(3,-2,2,0,7); ctx.fill(); }
      else if(p.proj==='ring'){ ctx.strokeStyle=p.color; ctx.lineWidth=5; ctx.beginPath(); ctx.arc(0,0,sz+Math.sin(bgT*18)*3,0,7); ctx.stroke(); ctx.strokeStyle='#fff'; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(0,0,sz*0.6,0,7); ctx.stroke(); }
      else if(p.proj==='screen'){ ctx.fillStyle='#2563eb'; roundRect(-sz,-sz*0.8,sz*2,sz*1.6,3); ctx.fill(); ctx.fillStyle='#dbeafe'; ctx.font='900 10px system-ui'; ctx.textAlign='center'; ctx.fillText(':(',0,4); }
      else if(p.proj==='clone'||p.proj==='star'||p.proj==='search'){ ctx.fillStyle=p.color; ctx.beginPath(); for(var st2=0;st2<5;st2++){ var aa=-Math.PI/2+st2*Math.PI*2/5, aa2=aa+Math.PI/5; ctx.lineTo(Math.cos(aa)*sz,Math.sin(aa)*sz); ctx.lineTo(Math.cos(aa2)*sz*0.5,Math.sin(aa2)*sz*0.5); } ctx.closePath(); ctx.fill(); ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(0,0,3.5,0,7); ctx.fill(); }
      else { ctx.fillStyle=p.color; ctx.beginPath(); ctx.arc(0,0,sz,0,7); ctx.fill(); ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(0,0,5,0,7); ctx.fill(); } }
    ctx.restore(); });
  particles.forEach(function(pt){
    if(pt.flash){ /* legacy flash particles render as a small LOCAL glow at the hit point — never a full-screen white fill */
      ctx.save(); var fa=Math.max(0,pt.t/0.07)*0.35; var fg2=ctx.createRadialGradient(pt.x||W/2,pt.y||H/2,2,pt.x||W/2,pt.y||H/2,46); fg2.addColorStop(0,'rgba(255,240,190,'+fa+')'); fg2.addColorStop(1,'rgba(255,240,190,0)'); ctx.fillStyle=fg2; ctx.beginPath(); ctx.arc(pt.x||W/2,pt.y||H/2,46,0,7); ctx.fill(); ctx.restore(); pt.t-=0.016; return; }
    if(pt.star){ ctx.save(); ctx.globalAlpha=Math.max(0,pt.t/0.16); ctx.translate(pt.x,pt.y); ctx.fillStyle='#fff'; ctx.strokeStyle=pt.color; ctx.lineWidth=3; ctx.beginPath(); for(var s=0;s<8;s++){ var a=s*Math.PI/4, r=s%2?pt.r*0.45:pt.r; ctx.lineTo(Math.cos(a)*r,Math.sin(a)*r);} ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore(); return; }
    ctx.globalAlpha=Math.max(0,pt.t/0.5); ctx.fillStyle=pt.color; ctx.fillRect(pt.x-pt.size/2,pt.y-pt.size/2,pt.size,pt.size); ctx.globalAlpha=1; });
  floaters.forEach(function(fl){ var age=(fl.t0||fl.t)-fl.t, pop=age<0.14?1.7-age/0.14*0.7:1; ctx.save(); ctx.translate(fl.x+27,fl.y); ctx.scale(pop,pop); ctx.globalAlpha=Math.min(1,fl.t/0.4); var fsz=fl.size||15; ctx.font='900 '+fsz+'px system-ui'; ctx.textAlign='center'; ctx.strokeStyle='#000'; ctx.lineJoin='round'; ctx.lineWidth=Math.max(4,fsz/4); ctx.strokeText(fl.txt,0,0); ctx.fillStyle=fl.color; ctx.fillText(fl.txt,0,0); ctx.restore(); });
  if(roundLock>0 && gameState==='fight'){ /* ROUND intro like screenshot 5: stage stays fully visible (NO dark/white overlay), big green→gold gradient text with a cyan glow */
    var words=['','One','Two','Three']; var msg=roundLock>0.62?('Round '+words[round]):'FIGHT!';
    ctx.save(); ctx.textAlign='center'; ctx.font='900 108px system-ui';
    var rgd=ctx.createLinearGradient(0,H/2-140,0,H/2-16); rgd.addColorStop(0,'#4dff7a'); rgd.addColorStop(.34,'#b6ff4d'); rgd.addColorStop(.52,'#ffffff'); rgd.addColorStop(.60,'#ffee58'); rgd.addColorStop(1,'#ff7a00');
    ctx.shadowColor='rgba(0,229,255,.95)'; ctx.shadowBlur=30; ctx.lineWidth=13; ctx.strokeStyle='#003a3f'; ctx.lineJoin='round';
    var ph=roundLock>0.62?(1.4-roundLock):(0.62-roundLock), sc=ph<0.16?2.4-ph/0.16*1.4:1+Math.max(0,0.04-(ph-0.16)*0.1);
    ctx.translate(W/2,H/2-24); ctx.scale(sc,sc); ctx.translate(-W/2,-(H/2-24)); ctx.globalAlpha=Math.min(1,ph/0.08);
    ctx.strokeText(msg,W/2,H/2-24); ctx.shadowBlur=0; ctx.fillStyle=rgd; ctx.fillText(msg,W/2,H/2-24); ctx.restore(); }
  if(paused){ ctx.fillStyle='rgba(0,0,0,.5)'; ctx.fillRect(0,0,W,H); ctx.fillStyle='#fff'; ctx.font='900 42px system-ui'; ctx.textAlign='center'; ctx.fillText('PAUSED',W/2,H/2); }
  ctx.restore();
}
function drawBackground(){
  var g=ctx.createLinearGradient(0,0,0,H); g.addColorStop(0,'#0a1030'); g.addColorStop(.55,'#16235c'); g.addColorStop(.78,'#1d2c66'); g.addColorStop(1,'#070a18'); ctx.fillStyle=g; ctx.fillRect(-24,-24,W+48,H+48);
  ctx.fillStyle='#f5f3ce'; ctx.beginPath(); ctx.arc(W-150,64,26,0,7); ctx.fill(); ctx.fillStyle='rgba(245,243,206,.16)'; ctx.beginPath(); ctx.arc(W-150,64,46,0,7); ctx.fill();
  for(var s=0;s<40;s++){ var sx=(s*173)%W, sy=(s*67)%150+8; ctx.globalAlpha=.42+.10*Math.sin(bgT*0.45+s); ctx.fillStyle='#cfe0ff'; ctx.fillRect(sx,sy,2,2); } ctx.globalAlpha=1;
  /* drifting energy embers — slow drift, STEADY brightness (no pulsing = no flicker) */
  for(var em=0;em<22;em++){ var ex=(em*211+bgT*9*(em%3+1))% (W+40)-20, ey=GROUND-30-((em*89+bgT*6)%330); ctx.globalAlpha=.34; ctx.fillStyle=em%3?'#ffc61a':'#76b900'; ctx.beginPath(); ctx.arc(ex,ey,2.2,0,7); ctx.fill(); } ctx.globalAlpha=1;
  /* lightning bolt REMOVED — its random bright flash was a main cause of the white-screen flicker */
  ctx.fillStyle='#0d1533'; var bw=[90,130,70,150,100,120,80,140,95,110,85,125];
  var bx=-10; for(var b=0;b<bw.length;b++){ var bh=120+((b*53)%90); ctx.fillRect(bx,GROUND-bh,bw[b],bh); ctx.fillStyle='#ffd76a'; for(var wy=0;wy<4;wy++)for(var wx=0;wx<3;wx++){ if((b*7+wy*3+wx)%3!==0) ctx.fillRect(bx+10+wx*26,GROUND-bh+14+wy*26,9,12); } ctx.fillStyle='#0d1533'; bx+=bw[b]+8; }
  for(var L=0;L<2;L++){ var lcx=L===0?180:W-180, sw=Math.sin(bgT*0.7+L*2.4)*130; var lg=ctx.createLinearGradient(lcx,60,lcx+sw,GROUND); lg.addColorStop(0,'rgba(140,200,255,.20)'); lg.addColorStop(1,'rgba(140,200,255,0)'); ctx.fillStyle=lg; ctx.beginPath(); ctx.moveTo(lcx-14,54); ctx.lineTo(lcx+14,54); ctx.lineTo(lcx+sw+90,GROUND); ctx.lineTo(lcx+sw-90,GROUND); ctx.closePath(); ctx.fill(); }
  var scx=W/2-190; ctx.fillStyle='#050914'; roundRect(scx,44,380,132,12); ctx.fill(); ctx.strokeStyle='#3d5a99'; ctx.lineWidth=3; roundRect(scx,44,380,132,12); ctx.stroke();
  var sg=ctx.createLinearGradient(scx,44,scx,176); sg.addColorStop(0,'#13224f'); sg.addColorStop(1,'#0a1430'); ctx.fillStyle=sg; roundRect(scx+6,50,368,120,9); ctx.fill();
  ctx.fillStyle='#ffc61a'; ctx.font='900 27px system-ui'; ctx.textAlign='center'; ctx.fillText('SCIENCE SHOWDOWN',W/2,96);
  ctx.fillStyle='#8ec5ff'; ctx.font='800 13px system-ui'; ctx.fillText('⚡ CIRCUIT LAB ARENA • UNITED ACADEMY MAKERSPACE ⚡',W/2,122);
  ctx.fillStyle='#76b900'; ctx.font='22px system-ui'; ctx.fillText('🤖',W/2-120,152); ctx.fillStyle='#4dabf7'; ctx.fillText('🛰️',W/2+120,152);
  ctx.fillStyle='rgba(255,255,255,.75)'; ctx.font='700 11px system-ui'; ctx.fillText('ROBO FEST 5.0',W/2,152);
  ctx.fillStyle='#101d45'; roundRect(28,196,150,120,10); ctx.fill(); roundRect(W-178,196,150,120,10); ctx.fill();
  ctx.strokeStyle='rgba(118,185,0,.35)'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(44,300); ctx.lineTo(90,300); ctx.lineTo(90,240); ctx.lineTo(140,240); ctx.lineTo(140,282); ctx.lineTo(164,282); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(W-164,282); ctx.lineTo(W-120,282); ctx.lineTo(W-120,232); ctx.lineTo(W-76,232); ctx.lineTo(W-76,296); ctx.lineTo(W-44,296); ctx.stroke();
  ctx.fillStyle='#76b900'; [44,90,140].forEach(function(x,i){ ctx.globalAlpha=.62; ctx.beginPath(); ctx.arc(x,i===1?240:282,4,0,7); ctx.fill(); });
  [W-164,W-120,W-76].forEach(function(x,i){ ctx.globalAlpha=.62; ctx.beginPath(); ctx.arc(x,i===1?232:282,4,0,7); ctx.fill(); }); ctx.globalAlpha=1;
  /* v12: no crowd row behind the fighters — dark heads at the floor line hid the fighters' legs and made them look like they were floating. The audience now sits in the FOREGROUND at the bottom edge (see drawArenaRealism). */
  var fg=ctx.createLinearGradient(0,GROUND,0,H); fg.addColorStop(0,'#2a3768'); fg.addColorStop(.12,'#1b2447'); fg.addColorStop(1,'#0a0e20'); ctx.fillStyle=fg; ctx.fillRect(-24,GROUND+2,W+48,H-GROUND);
  ctx.fillStyle='#ffc61a'; ctx.fillRect(-24,GROUND,W+48,4);
  ctx.fillStyle='rgba(255,198,26,.5)'; ctx.fillRect(-24,GROUND+4,W+48,2);
  ctx.strokeStyle='rgba(255,255,255,.09)'; ctx.lineWidth=2; for(var fx=0;fx<W+40;fx+=56){ ctx.beginPath(); ctx.moveTo(fx,GROUND+8); ctx.lineTo(fx-26,H); ctx.stroke(); }
  ctx.fillStyle='rgba(118,185,0,.10)'; ctx.beginPath(); ctx.ellipse(W/2,GROUND+34,240,20,0,0,7); ctx.fill();
  /* ===== v4 arena richness: aurora ribbons, holo science panels, EQ pillars, pulsing ring ===== */
  for(var au=0;au<3;au++){ ctx.save(); ctx.globalAlpha=0.08+au*0.02; ctx.strokeStyle=au===0?'#76b900':au===1?'#7c5cff':'#2f7bff'; ctx.lineWidth=16-au*4; ctx.shadowColor=ctx.strokeStyle; ctx.shadowBlur=10; ctx.beginPath();
    for(var ax=-20;ax<=W+20;ax+=28){ var ay=52+au*30+Math.sin(ax*0.008+bgT*(0.5+au*0.22)+au*2)*20; if(ax===-20)ctx.moveTo(ax,ay); else ctx.lineTo(ax,ay); } ctx.stroke(); ctx.restore(); }
  ctx.save(); ctx.font='900 17px system-ui'; ctx.textAlign='center';
  var holo=['E = mc²','∑ F = ma','π ≈ 3.14159','⚛ H₂O','Δv = Δx/Δt','∫ eˣ dx','λ = h/p','F = G·m₁m₂/r²'];
  for(var hp2=0;hp2<4;hp2++){ var hx=90+hp2*300+Math.sin(bgT*0.4+hp2*1.9)*14, hy2=212+((hp2%2)*36)+Math.cos(bgT*0.55+hp2)*7;
    ctx.globalAlpha=0.78; ctx.fillStyle='rgba(10,24,54,.82)'; roundRect(hx-64,hy2-17,128,34,8); ctx.fill(); ctx.strokeStyle='rgba(118,220,255,.75)'; ctx.lineWidth=1.6; roundRect(hx-64,hy2-17,128,34,8); ctx.stroke();
    ctx.fillStyle='#aee6ff'; ctx.fillText(holo[(hp2+Math.floor(bgT/6))%holo.length],hx,hy2+6); }
  ctx.restore();
  /* animated equalizer pillars at both edges — they bounce like the crowd is loud */
  for(var side=0;side<2;side++){ var px=side===0?8:W-26;
    for(var eb=0;eb<5;eb++){ var eh=26+Math.abs(Math.sin(bgT*1.3+eb*1.3+side*2))*30; ctx.fillStyle=eb%2?'rgba(255,198,26,.6)':'rgba(118,185,0,.6)'; ctx.fillRect(px,GROUND-10-eh,18,eh); } }
  /* centre ring + slow floor light sweep — steady brightness, gentle motion only */
  var pr=200+Math.sin(bgT*0.8)*8; ctx.save(); ctx.globalAlpha=0.15; ctx.strokeStyle='#ffc61a'; ctx.lineWidth=3; ctx.beginPath(); ctx.ellipse(W/2,GROUND+34,pr,18,0,0,7); ctx.stroke(); ctx.restore();
  var sweepX=((bgT*42)%(W+320))-160; var sgr=ctx.createLinearGradient(sweepX-90,0,sweepX+90,0); sgr.addColorStop(0,'rgba(140,200,255,0)'); sgr.addColorStop(.5,'rgba(140,200,255,.045)'); sgr.addColorStop(1,'rgba(140,200,255,0)'); ctx.fillStyle=sgr; ctx.fillRect(sweepX-90,GROUND,W*0+180,H-GROUND);
  /* vignette for depth */
  var vg=ctx.createRadialGradient(W/2,H/2,H*0.32,W/2,H/2,H*0.95); vg.addColorStop(0,'rgba(0,0,0,0)'); vg.addColorStop(1,'rgba(0,0,10,.42)'); ctx.fillStyle=vg; ctx.fillRect(-24,-24,W+48,H+48);
}
/* ===== v6 stage art: daytime street (screenshots 5/6) + orbital station. STEADY brightness everywhere — nothing pulses, nothing flashes. ===== */
function drawDayBackground(){
  var g=ctx.createLinearGradient(0,0,0,GROUND); g.addColorStop(0,'#8fc3e8'); g.addColorStop(.7,'#cfe8ef'); g.addColorStop(1,'#e6f0e4'); ctx.fillStyle=g; ctx.fillRect(-24,-24,W+48,GROUND+24);
  ctx.fillStyle='rgba(255,255,255,.55)';
  [[180,52,64],[430,36,48],[760,58,72],[990,40,44]].forEach(function(cl){ ctx.beginPath(); ctx.ellipse(cl[0],cl[1],cl[2],13,0,0,7); ctx.ellipse(cl[0]+26,cl[1]+5,cl[2]*0.62,10,0,0,7); ctx.fill(); });
  /* distant Kathmandu skyline */
  ctx.fillStyle='#93a7bd';
  var bx=-16; for(var b=0;b<14;b++){ var bw2=58+((b*47)%52), bh=52+((b*61)%64); ctx.fillRect(bx,GROUND-196-bh+116,bw2,bh); bx+=bw2+10; }
  ctx.fillStyle='rgba(220,235,245,.5)'; bx=-16; for(var b2=0;b2<14;b2++){ var bw3=58+((b2*47)%52), bh2=52+((b2*61)%64); for(var wy=0;wy<3;wy++)for(var wx=0;wx<3;wx++){ if((b2+wy+wx)%2) ctx.fillRect(bx+8+wx*16,GROUND-196-bh2+116+8+wy*16,8,10); } bx+=bw3+10; }
  /* tree line */
  ctx.fillStyle='#5d8a4e'; for(var t=0;t<26;t++){ ctx.beginPath(); ctx.arc(10+t*44,GROUND-196+((t*29)%10),20+((t*13)%9),0,7); ctx.fill(); }
  /* main shopfront building */
  ctx.fillStyle='#c9b294'; ctx.fillRect(-24,GROUND-190,W+48,190);
  ctx.fillStyle='#8a6a4e'; ctx.fillRect(-24,GROUND-190,W+48,30);
  ctx.fillStyle='rgba(0,0,0,.14)'; for(var px=0;px<W+48;px+=14) ctx.fillRect(px-24,GROUND-190,2,30);
  ctx.fillStyle='#a33327'; ctx.font='900 21px system-ui'; ctx.textAlign='center';
  ctx.fillStyle='#efe6d2'; roundRect(W/2-118,GROUND-148,236,36,5); ctx.fill(); ctx.fillStyle='#a33327'; ctx.fillText('SCIENCE म:म SHOP',W/2,GROUND-122);
  /* windows + door */
  ctx.fillStyle='#5b4632';
  [[90,120],[300,120],[830,120],[1000,120]].forEach(function(wn){ ctx.fillRect(wn[0],GROUND-wn[1],86,62); });
  ctx.fillStyle='#b9d6de';
  [[90,120],[300,120],[830,120],[1000,120]].forEach(function(wn){ ctx.fillRect(wn[0]+5,GROUND-wn[1]+5,36,52); ctx.fillRect(wn[0]+45,GROUND-wn[1]+5,36,52); });
  ctx.fillStyle='#4a3826'; ctx.fillRect(520,GROUND-96,74,96); ctx.fillStyle='#9fc4d4'; ctx.fillRect(528,GROUND-88,58,52);
  /* wooden fence band */
  ctx.fillStyle='#96754f'; ctx.fillRect(-24,GROUND-52,W+48,52);
  ctx.fillStyle='rgba(0,0,0,.16)'; for(var fx2=0;fx2<W+48;fx2+=18) ctx.fillRect(fx2-24,GROUND-52,2,52);
  ctx.fillStyle='rgba(255,255,255,.10)'; ctx.fillRect(-24,GROUND-52,W+48,4);
  /* bushes */
  ctx.fillStyle='#4e7a3e'; [[210,26],[660,30],[930,24]].forEach(function(bs){ ctx.beginPath(); ctx.ellipse(bs[0],GROUND-3,bs[1]+16,bs[1]*0.55,0,0,7); ctx.fill(); });
  /* pavement */
  var fg=ctx.createLinearGradient(0,GROUND,0,H); fg.addColorStop(0,'#c2b096'); fg.addColorStop(1,'#8f8069'); ctx.fillStyle=fg; ctx.fillRect(-24,GROUND,W+48,H-GROUND+24);
  ctx.strokeStyle='rgba(70,58,40,.35)'; ctx.lineWidth=2; for(var fx=0;fx<W+40;fx+=62){ ctx.beginPath(); ctx.moveTo(fx,GROUND+6); ctx.lineTo(fx-28,H); ctx.stroke(); }
  ctx.fillStyle='rgba(70,58,40,.25)'; ctx.fillRect(-24,GROUND+30,W+48,3);
}
function drawSpaceBackground(){
  var g=ctx.createLinearGradient(0,0,0,H); g.addColorStop(0,'#050214'); g.addColorStop(.55,'#160a33'); g.addColorStop(.78,'#232c4d'); g.addColorStop(1,'#0a0e20'); ctx.fillStyle=g; ctx.fillRect(-24,-24,W+48,H+48);
  ctx.fillStyle='#dfe9ff'; for(var s=0;s<70;s++){ ctx.globalAlpha=.65; ctx.fillRect((s*157)%W,(s*83)%210+6,2,2); } ctx.globalAlpha=1;
  /* Earth */
  ctx.save(); ctx.beginPath(); ctx.arc(W-170,86,104,0,7); ctx.clip();
  var eg=ctx.createRadialGradient(W-205,50,10,W-170,86,110); eg.addColorStop(0,'#7db4ff'); eg.addColorStop(.6,'#2f6fd1'); eg.addColorStop(1,'#173a6e'); ctx.fillStyle=eg; ctx.fillRect(W-280,-24,220,220);
  ctx.fillStyle='rgba(90,200,120,.75)'; [[W-225,52,30],[W-150,105,24],[W-195,128,17]].forEach(function(ld){ ctx.beginPath(); ctx.ellipse(ld[0],ld[1],ld[2],ld[2]*0.55,0.5,0,7); ctx.fill(); });
  ctx.fillStyle='rgba(255,255,255,.5)'; [[W-235,74,26],[W-140,60,20],[W-185,140,22]].forEach(function(cd){ ctx.beginPath(); ctx.ellipse(cd[0],cd[1],cd[2],7,0.3,0,7); ctx.fill(); });
  ctx.restore();
  ctx.strokeStyle='rgba(160,200,255,.5)'; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(W-170,86,104,0,7); ctx.stroke();
  /* station panels + solar wings */
  ctx.fillStyle='#39466a'; roundRect(36,150,190,120,8); ctx.fill(); roundRect(W-226,190,190,110,8); ctx.fill();
  ctx.fillStyle='#1d3a8a'; for(var sx2=0;sx2<4;sx2++)for(var sy2=0;sy2<3;sy2++){ ctx.fillRect(48+sx2*44,162+sy2*36,38,30); ctx.fillRect(W-214+sx2*44,202+sy2*32,38,26); }
  ctx.fillStyle='#8ec5ff'; ctx.font='800 13px system-ui'; ctx.textAlign='center'; ctx.fillText('🛰 ORBITAL STATION • BAY 07',W/2,120);
  ctx.fillStyle='#ffc61a'; ctx.font='900 24px system-ui'; ctx.fillText('SCIENCE SHOWDOWN',W/2,88);
  /* metallic floor */
  var fg=ctx.createLinearGradient(0,GROUND,0,H); fg.addColorStop(0,'#2a3350'); fg.addColorStop(1,'#0a0e20'); ctx.fillStyle=fg; ctx.fillRect(-24,GROUND,W+48,H-GROUND+24);
  ctx.fillStyle='rgba(0,229,255,.5)'; ctx.fillRect(-24,GROUND,W+48,3);
  ctx.strokeStyle='rgba(160,200,255,.14)'; ctx.lineWidth=2; for(var fx=0;fx<W+40;fx+=62){ ctx.beginPath(); ctx.moveTo(fx,GROUND+8); ctx.lineTo(fx-26,H); ctx.stroke(); }
  var vg=ctx.createRadialGradient(W/2,H/2,H*0.32,W/2,H/2,H*0.95); vg.addColorStop(0,'rgba(0,0,0,0)'); vg.addColorStop(1,'rgba(0,0,10,.42)'); ctx.fillStyle=vg; ctx.fillRect(-24,-24,W+48,H+48);
}
/* ===== v5 realistic arena layer: lighting truss, atmosphere haze, polished concrete floor, crowd depth =====
   Everything here uses STEADY brightness — no pulsing alphas, so nothing in this layer can flicker. */
function drawArenaRealism(){
  /* overhead lighting truss with real fixtures */
  ctx.save();
  ctx.fillStyle='#05070f'; ctx.fillRect(-24,-24,W+48,26);
  ctx.fillStyle='#1c2440'; ctx.fillRect(-24,0,W+48,5);
  for(var tx=30;tx<W;tx+=92){
    ctx.fillStyle='#0d1330'; roundRect(tx-15,4,30,17,4); ctx.fill();
    ctx.fillStyle='#ffe9a8'; ctx.beginPath(); ctx.ellipse(tx,22,9,3.5,0,0,7); ctx.fill();
    var cone=ctx.createLinearGradient(tx,22,tx,GROUND);
    cone.addColorStop(0,'rgba(255,240,200,.10)'); cone.addColorStop(1,'rgba(255,240,200,0)');
    ctx.fillStyle=cone; ctx.beginPath(); ctx.moveTo(tx-8,22); ctx.lineTo(tx+8,22); ctx.lineTo(tx+64,GROUND); ctx.lineTo(tx-64,GROUND); ctx.closePath(); ctx.fill();
  }
  ctx.restore();
  /* atmospheric haze band sitting over the skyline — sells depth like a real arena photo */
  var hz=ctx.createLinearGradient(0,GROUND-190,0,GROUND-30);
  hz.addColorStop(0,'rgba(140,170,255,0)'); hz.addColorStop(1,'rgba(140,170,255,.10)');
  ctx.fillStyle=hz; ctx.fillRect(-24,GROUND-190,W+48,160);
  /* crowd depth: a second, darker row of heads behind the front row */
  ctx.fillStyle='#070b1a';
  for(var c2=0;c2<38;c2++){ var cx2=22+c2*30.5, cbob=Math.abs(Math.sin(bgT*1.5+c2*1.7))*2; ctx.beginPath(); ctx.arc(cx2,H-4-cbob,11,0,7); ctx.fill(); ctx.fillRect(cx2-11,H-6-cbob,22,10); }
  /* polished floor: soft light pools, painted centre emblem and fine concrete speckle */
  var pool=ctx.createRadialGradient(W/2,GROUND+30,20,W/2,GROUND+30,430);
  pool.addColorStop(0,'rgba(190,210,255,.13)'); pool.addColorStop(1,'rgba(190,210,255,0)');
  ctx.fillStyle=pool; ctx.fillRect(-24,GROUND,W+48,H-GROUND);
  ctx.save(); ctx.globalAlpha=.16; ctx.strokeStyle='#e8ecff'; ctx.lineWidth=2.5;
  ctx.beginPath(); ctx.ellipse(W/2,GROUND+36,118,13,0,0,7); ctx.stroke();
  ctx.font='900 13px system-ui'; ctx.textAlign='center'; ctx.fillStyle='#e8ecff';
  ctx.fillText('S C I E N C E   S H O W D O W N',W/2,GROUND+40); ctx.restore();
  ctx.save(); ctx.globalAlpha=.05; ctx.fillStyle='#ffffff';
  for(var sp=0;sp<130;sp++){ var spx=((sp*167)%W), spy=GROUND+8+((sp*41)%(H-GROUND-14)); ctx.fillRect(spx,spy,2,1.4); }
  ctx.restore();
  /* side LED boards like a real stadium */
  ctx.save(); ctx.font='800 11px system-ui'; ctx.textAlign='center';
  [[70,'LIVE • ROBO FEST 5.0'],[W-70,'UARC ARENA']].forEach(function(bd){
    ctx.fillStyle='rgba(4,7,16,.88)'; roundRect(bd[0]-62,GROUND-64,124,22,5); ctx.fill();
    ctx.strokeStyle='rgba(255,198,26,.55)'; ctx.lineWidth=1.2; roundRect(bd[0]-62,GROUND-64,124,22,5); ctx.stroke();
    ctx.fillStyle='#ffd76a'; ctx.fillText(bd[1],bd[0],GROUND-49);
  });
  ctx.restore();
}

/* ===== v8 Free Fire MAX arena polish: neon floor strips, volumetric beams, lens glow — STEADY brightness, no flashing ===== */
function drawFFMaxPolish(){
  ctx.save();
  /* neon floor edge strips in orange / cyan, like a glossy battleground lobby floor */
  var ng=ctx.createLinearGradient(0,0,W,0); ng.addColorStop(0,'rgba(255,122,0,.85)'); ng.addColorStop(.5,'rgba(255,179,0,.95)'); ng.addColorStop(1,'rgba(0,229,255,.85)');
  ctx.fillStyle=ng; ctx.fillRect(-24,GROUND+22,W+48,3);
  ctx.globalAlpha=.16; ctx.fillStyle=ng; ctx.fillRect(-24,GROUND+26,W+48,10); ctx.globalAlpha=1;
  /* diagonal volumetric light shafts */
  for(var vb=0;vb<3;vb++){ var vx0=140+vb*380+Math.sin(bgT*0.35+vb*2)*22; var vg2=ctx.createLinearGradient(vx0,0,vx0+120,GROUND); vg2.addColorStop(0,'rgba(255,230,160,.10)'); vg2.addColorStop(1,'rgba(255,230,160,0)'); ctx.fillStyle=vg2; ctx.beginPath(); ctx.moveTo(vx0,0); ctx.lineTo(vx0+52,0); ctx.lineTo(vx0+190,GROUND); ctx.lineTo(vx0+40,GROUND); ctx.closePath(); ctx.fill(); }
  /* floating golden dust motes — slow and steady */
  ctx.fillStyle='#ffd76a'; for(var dm=0;dm<16;dm++){ var dxm=(dm*173+bgT*11*(1+dm%3))%(W+30)-15, dym=90+((dm*97+bgT*7)%(GROUND-140)); ctx.globalAlpha=.35; ctx.beginPath(); ctx.arc(dxm,dym,1.9,0,7); ctx.fill(); } ctx.globalAlpha=1;
  /* glossy floor sheen band */
  var sh=ctx.createLinearGradient(0,GROUND,0,H); sh.addColorStop(0,'rgba(255,255,255,.13)'); sh.addColorStop(.35,'rgba(255,255,255,0)'); ctx.fillStyle=sh; ctx.fillRect(-24,GROUND,W+48,H-GROUND);
  ctx.restore();
}
/* attack animation curve: quick wind-up, snap to full extension, then partial recovery */
var DRAW_PR=1;
function atkExtend(){ var p=DRAW_PR; if(p<0.12) return -0.25*(p/0.12); if(p<0.34) return -0.25+1.25*(1-Math.pow(1-(p-0.12)/0.22,3)); return 1-0.45*((p-0.34)/0.66); }
function roundRect(x,y,w,h,r){ ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath(); }
function shade(hex,amt){ var n=parseInt(hex.slice(1),16); var r=Math.max(0,Math.min(255,(n>>16)+amt)), gg=Math.max(0,Math.min(255,((n>>8)&255)+amt)), b=Math.max(0,Math.min(255,(n&255)+amt)); return '#'+((r<<16)|(gg<<8)|b).toString(16).padStart(6,'0'); }
/* Detailed anime-style fighter. ghostAlpha>0 draws a flat dash silhouette instead. */
function drawFighterBody(c,x,y,face,anim,ghostAlpha,state,vx){
  /* ===== v12 FULL-BODY FIGHTER, drawn entirely in code =====
     Proper human proportions (~198px tall): legs, torso, arms, neck and a DRAWN head
     (hair / glasses / beard per character). NO photo head in the fight — real photos
     live only in character select and the HUD portraits.
     Grounding rule: local y=0 is the FLOOR. The sole of every planted foot is drawn
     ending exactly at y=0, so a standing fighter's shoes sit ON the ground line. */
  var cx=x+27;
  if(!state) state='idle';
  var sil=ghostAlpha>0;
  ctx.save(); ctx.translate(cx,y); ctx.scale(face,1);
  if(sil) ctx.globalAlpha=ghostAlpha;
  ctx.lineCap='round'; ctx.lineJoin='round';
  var skin=sil?c.color:c.skin;
  var jacket=sil?c.color:(c.id==='jensen'?'#1b1c21':shade(c.dark,30));
  var jacketDk=sil?c.color:(c.id==='jensen'?'#060607':c.dark);
  var trim=sil?c.color:c.color;
  var trouser=sil?c.color:shade(c.dark,62);
  var shoeCol=sil?c.color:'#f4f6ff';
  var walking=(state==='walk'||state==='run');
  var bounce=(state==='idle')?(Math.sin(anim*1.9)*0.5+0.5)*4:0; var breathe=(state==='idle')?Math.sin(anim*1.6)*1.8+bounce:0;
  var UB=breathe; /* upper-body bob — legs and planted feet never bob, so feet stay glued to the floor */
  /* ---------- SHOES + LEGS ---------- */
  function shoeAt(fx,fy){
    /* shoe whose SOLE (bottom edge) is exactly at fy */
    ctx.fillStyle='rgba(0,0,0,.45)'; roundRect(fx-5,fy-8,28,8,3); ctx.fill();
    ctx.fillStyle=shoeCol; roundRect(fx-4,fy-9,26,7,3); ctx.fill();
    if(!sil){ ctx.fillStyle=trim; ctx.fillRect(fx-4,fy-9,26,2.6); }
    ctx.fillStyle='#14161c'; ctx.fillRect(fx-5,fy-2.4,28,2.4);
  }
  function leg(hipX,fx,fy,bend){
    var kx=(hipX+fx)/2+(bend||0), ky=-46+fy/2;
    ctx.strokeStyle='rgba(0,0,0,.55)'; ctx.lineWidth=15;
    ctx.beginPath(); ctx.moveTo(hipX,-90); ctx.lineTo(kx,ky); ctx.lineTo(fx,fy-6); ctx.stroke();
    ctx.strokeStyle=trouser; ctx.lineWidth=11;
    ctx.beginPath(); ctx.moveTo(hipX,-90); ctx.lineTo(kx,ky); ctx.lineTo(fx,fy-6); ctx.stroke();
    if(!sil){ ctx.strokeStyle='rgba(255,255,255,.22)'; ctx.lineWidth=3;
      ctx.beginPath(); ctx.moveTo(hipX-2,-88); ctx.lineTo(kx-2,ky); ctx.lineTo(fx-2,fy-8); ctx.stroke(); }
    shoeAt(fx,fy);
  }
  /* v13: the tucked air pose is only legal while the fighter is ACTUALLY above the floor.
     If the body's origin sits on GROUND, the legs plant with soles at local y=0 — a
     grounded fighter can never be drawn floating, whatever state label it carries. */
  var airY=(state==='jump'||state==='fall') && y<GROUND-1;
  if(state==='kick'){
    leg(-7,-11,0,2);
    var ke=Math.max(0,atkExtend()), kfx=16+46*ke, kfy=-58-38*ke, kkx=12+24*ke+8*(1-ke), kky=-100+6*ke;
    ctx.strokeStyle='rgba(0,0,0,.55)'; ctx.lineWidth=15; ctx.beginPath(); ctx.moveTo(7,-90); ctx.lineTo(kkx,kky); ctx.lineTo(kfx,kfy); ctx.stroke();
    ctx.strokeStyle=trouser; ctx.lineWidth=11; ctx.beginPath(); ctx.moveTo(7,-90); ctx.lineTo(kkx,kky); ctx.lineTo(kfx,kfy); ctx.stroke();
    shoeAt(kfx-8,kfy+6);
    if(!sil){ ctx.strokeStyle='rgba(255,255,255,.55)'; ctx.lineWidth=3.5; ctx.beginPath(); ctx.arc(30,-92,40,-0.5,0.8); ctx.stroke();
      ctx.strokeStyle=trim; ctx.globalAlpha=sil?ghostAlpha:.5; ctx.beginPath(); ctx.arc(30,-92,47,-0.4,0.7); ctx.stroke(); ctx.globalAlpha=sil?ghostAlpha:1; }
  }
  else if(airY){ leg(-7,-15,-24,7); leg(7,17,-34,8); }
  else if(state==='dash'||state==='dive'){ leg(-7,-26,-12,6); leg(7,-8,-24,7); }
  else if(state==='slide'){ leg(-7,-22,-4,4); leg(7,30,-8,3); }
  else if(state==='ko'){ leg(-7,-19,-3,2); leg(7,17,-3,-2); }
  else if(state==='block'){ leg(-7,-16,0,3); leg(7,18,0,3); }
  else if(walking){
    var ph=anim*(state==='run'?3.6:2.4), lift=(state==='run'?13:9);
    var s1=Math.sin(ph), s2=Math.sin(ph+Math.PI);
    leg(-7,-4+s1*17,-Math.max(0,s1)*lift,4);
    leg(7,4+s2*17,-Math.max(0,s2)*lift,4);
  }
  else { leg(-7,-13,0,3+bounce*1.6); leg(7,15,0,3+bounce*1.6); }
  /* ---------- UPPER BODY (torso, arms, head) — pivots at the waist so leans never lift the feet ---------- */
  var lean=(state==='dash'||state==='dive')?13:(state==='slide'?17:(state==='run'?8:(walking?4:(state==='hit'?-7:0))));
  ctx.save(); ctx.translate(0,-92); ctx.rotate(lean*Math.PI/180*0.45); ctx.translate(0,92);
  var ty=-162+UB, shY=-148+UB, hy=-182+UB;
  /* torso: jacket in the fighter's colours, colour shoulder band, chest plate, belt */
  if(sil){ ctx.fillStyle=c.color; roundRect(-24,ty,48,72,12); ctx.fill(); }
  else {
    var tg=ctx.createLinearGradient(-24,0,24,0); tg.addColorStop(0,jacketDk); tg.addColorStop(.5,jacket); tg.addColorStop(1,jacketDk);
    ctx.fillStyle=tg; roundRect(-24,ty,48,72,12); ctx.fill();
    ctx.fillStyle='rgba(0,0,0,.32)'; roundRect(-24,ty,48,15,7); ctx.fill();
    ctx.fillStyle=trim; roundRect(-24,ty,48,13,7); ctx.fill();
    ctx.fillStyle='rgba(255,255,255,.15)'; roundRect(-3,ty+18,6,46,3); ctx.fill();
    ctx.fillStyle='rgba(255,255,255,.95)'; roundRect(-13,ty+24,26,22,5); ctx.fill();
    ctx.fillStyle='#141a30'; ctx.font='900 12px system-ui'; ctx.textAlign='center'; ctx.fillText(c.ini,0,ty+39);
    ctx.fillStyle='#0a0e1a'; ctx.fillRect(-24,ty+63,48,9);
    ctx.fillStyle='#ffc61a'; ctx.fillRect(-4,ty+64,8,7);
  }
  /* arms: jacket sleeve to the elbow, skin forearm and fist */
  function arm(sx,ex,ey,fistR){
    var mx=(sx+ex)/2+3, my=(shY+ey)/2+9;
    ctx.strokeStyle='rgba(0,0,0,.5)'; ctx.lineWidth=13; ctx.beginPath(); ctx.moveTo(sx,shY); ctx.lineTo(mx,my); ctx.stroke();
    ctx.strokeStyle=jacket; ctx.lineWidth=10; ctx.beginPath(); ctx.moveTo(sx,shY); ctx.lineTo(mx,my); ctx.stroke();
    ctx.strokeStyle=skin; ctx.lineWidth=8.5; ctx.beginPath(); ctx.moveTo(mx,my); ctx.lineTo(ex,ey); ctx.stroke();
    ctx.fillStyle=skin; ctx.beginPath(); ctx.arc(ex,ey,fistR||6.5,0,7); ctx.fill();
    if(!sil){ ctx.fillStyle='rgba(0,0,0,.16)'; ctx.beginPath(); ctx.arc(ex+1.5,ey+1.5,Math.max(2,(fistR||6.5)-2.5),0,7); ctx.fill(); }
  }
  var wave=Math.sin(anim*5)*7;
  var ext=atkExtend(); if(state==='punch'){ arm(-19,-2,-106+UB,6); arm(19,22+36*ext,-116-20*ext+UB,7.5); }
  else if(state==='heavy'){ arm(-19,-26,-102+UB,6); arm(19,4+60*ext,-138+18*ext+UB,9); }
  else if(state==='kick'||state==='slide'){ arm(19,2,-102+UB,6); arm(-19,-28,-114+UB,6); }
  else if(state==='spec'){ arm(-19,-14,-104+UB,6); arm(19,48,-146+UB,7);
    if(!sil && c.id==='jensen'){ ctx.fillStyle='#0c1a00'; roundRect(38,-166+UB,30,20,3); ctx.fill(); ctx.fillStyle='#76b900'; roundRect(41,-163+UB,24,14,2); ctx.fill(); ctx.fillStyle='#fff'; ctx.font='900 8px system-ui'; ctx.textAlign='center'; ctx.fillText('GPU',53,-153+UB); } }
  else if(state==='ult'){ arm(19,36,-188+UB,7.5); arm(-19,-36,-188+UB,7.5);
    if(!sil){ ctx.save(); ctx.shadowColor=trim; ctx.shadowBlur=22; ctx.fillStyle=trim; ctx.beginPath(); ctx.arc(0,-206+UB,15+Math.sin(anim*9)*2.5,0,7); ctx.fill(); ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(0,-206+UB,6,0,7); ctx.fill(); ctx.restore(); } }
  else if(state==='taunt'){ arm(19,32,-182+UB+wave,7); arm(-19,-32,-182+UB-wave,7);
    if(!sil){ ctx.font='15px system-ui'; ctx.textAlign='center'; ctx.fillText('♪',-32,-198+UB-wave); ctx.fillText('♪',36,-204+UB+wave); } }
  else if(state==='block'){ arm(19,31,-128+UB,6.5); arm(-19,27,-112+UB,6.5);
    if(!sil){ ctx.strokeStyle='rgba(120,210,255,.95)'; ctx.lineWidth=4; ctx.shadowColor='#4dabf7'; ctx.shadowBlur=10; ctx.beginPath(); ctx.arc(42,-128+UB,34,-1.15,1.15); ctx.stroke(); ctx.shadowBlur=0;
      ctx.strokeStyle='rgba(190,235,255,.6)'; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(42,-128+UB,27,-1.0,1.0); ctx.stroke(); } }
  else if(state==='win'){ arm(19,30,-186+UB,7); arm(-19,-30,-186+UB,7);
    if(!sil){ ctx.font='14px system-ui'; ctx.textAlign='center'; ctx.fillText('⭐',-28,-200+UB); ctx.fillText('⭐',30,-204+UB); } }
  else if(state==='hit'){ arm(19,-8,-172+UB,6); arm(-19,-30,-120+UB,6); }
  else if(state==='dash'||state==='dive'){ arm(19,-24,-118+UB,6); arm(-19,-34,-132+UB,6); }
  else if(airY){ arm(19,30,-162+UB,6); arm(-19,-28,-160+UB,6); }
  else if(walking){ var sw=Math.sin(anim*(state==='run'?3.6:2.4))*(state==='run'?13:9); arm(19,17,-110+UB+sw,6); arm(-19,-17,-110+UB-sw,6); }
  else if(state==='ko'){ arm(19,34,-158+UB,6); arm(-19,-34,-158+UB,6); }
  else { arm(19,27,-116+UB+Math.sin(anim*1.6)*2,6.5); arm(-19,13,-106+UB,6.5); }
  /* neck + DRAWN head (never a photo) */
  ctx.fillStyle=skin; ctx.fillRect(-6,-172+UB,12,13);
  ctx.save(); ctx.translate(2,hy);
  if(!sil){ ctx.fillStyle=skin; ctx.beginPath(); ctx.arc(-17,1,4.5,0,7); ctx.arc(18,1,4,0,7); ctx.fill(); }
  ctx.fillStyle=skin; ctx.beginPath(); ctx.arc(0,0,18,0,7); ctx.fill();
  if(!sil){
    ctx.fillStyle='rgba(0,0,0,.08)'; ctx.beginPath(); ctx.arc(-6,5,13,0,7); ctx.fill();
    ctx.fillStyle=skin; ctx.beginPath(); ctx.arc(1,-1,16.5,0,7); ctx.fill();
    var hairCol=c.id==='einstein'?'#f2f2f2':(c.hair==='cap'?'#101114':shade(c.color,-45));
    ctx.fillStyle=hairCol;
    if(c.hair==='wild'){ ctx.beginPath(); ctx.arc(-14,-7,8,0,7); ctx.arc(14,-7,8,0,7); ctx.arc(0,-14,9,0,7); ctx.arc(-17,2,6,0,7); ctx.arc(17,2,6,0,7); ctx.fill(); ctx.fillStyle='#e8e8e8'; ctx.fillRect(-2,10,10,3.5); }
    else if(c.hair==='cap'){ ctx.beginPath(); ctx.arc(0,-2,18,Math.PI,0); ctx.fill(); ctx.fillRect(-18,-4,40,4); ctx.fillStyle=trim; ctx.fillRect(-18,-8,36,3); }
    else if(c.hair==='bun'){ ctx.beginPath(); ctx.arc(0,-3,18,Math.PI,0); ctx.fill(); ctx.beginPath(); ctx.arc(-5,-20,7,0,7); ctx.fill(); ctx.fillRect(-17,0,4,13); }
    else if(c.hair==='long'){ ctx.beginPath(); ctx.arc(0,-3,18,Math.PI,0); ctx.fill(); ctx.fillRect(-18,-3,7,30); ctx.fillRect(12,-3,7,26); }
    else if(c.hair==='curly'){ for(var ci=0;ci<6;ci++){ ctx.beginPath(); ctx.arc(-13+ci*5.4,-11+((ci%2)*3),6,0,7); ctx.fill(); } }
    else if(c.hair==='slick'){ ctx.beginPath(); ctx.arc(0,-4,18,Math.PI*1.02,Math.PI*1.98); ctx.fill(); ctx.fillRect(-17,-10,34,6); }
    else { ctx.beginPath(); ctx.arc(0,-4,18,Math.PI,0); ctx.fill(); ctx.fillRect(9,-13,10,13); }
    if(c.beard){ ctx.fillStyle='#e8e8e8'; ctx.beginPath(); ctx.arc(3,9,10,0,Math.PI); ctx.fill(); }
    if(state==='hit'){
      ctx.strokeStyle='#171310'; ctx.lineWidth=2.2; ctx.beginPath();
      ctx.moveTo(6,-2); ctx.lineTo(13,5); ctx.moveTo(13,-2); ctx.lineTo(6,5); ctx.stroke();
      ctx.fillStyle='#171310'; ctx.beginPath(); ctx.arc(-6,1,2.2,0,7); ctx.fill();
      ctx.beginPath(); ctx.arc(2,13,3,0,7); ctx.fill();
    } else {
      ctx.fillStyle='#171310'; ctx.beginPath(); ctx.arc(9,1,2.7,0,7); ctx.arc(-6,1,2.3,0,7); ctx.fill();
      ctx.strokeStyle='#2a2018'; ctx.lineWidth=2.3; ctx.beginPath();
      if(state==='punch'||state==='heavy'||state==='kick'){ ctx.moveTo(4,-5); ctx.lineTo(14,-3); ctx.moveTo(-11,-4); ctx.lineTo(-2,-5); }
      else { ctx.moveTo(4,-4); ctx.lineTo(14,-5); ctx.moveTo(-11,-5); ctx.lineTo(-2,-4); }
      ctx.stroke();
      ctx.strokeStyle='rgba(120,70,35,.65)'; ctx.lineWidth=1.8; ctx.beginPath(); ctx.moveTo(14,4); ctx.lineTo(11.5,8); ctx.stroke();
      ctx.strokeStyle='#7a4a26'; ctx.lineWidth=2.2; ctx.beginPath();
      if(state==='win'||state==='taunt'){ ctx.arc(3,9,6,0.15,Math.PI-0.6); }
      else if(state==='ult'||state==='spec'){ ctx.arc(4,11,3.4,0,7); }
      else { ctx.moveTo(-1,12.5); ctx.lineTo(8,12.5); }
      ctx.stroke();
    }
    if(c.glasses){
      ctx.fillStyle='rgba(190,220,255,.15)'; ctx.strokeStyle='#1c1e24'; ctx.lineWidth=2.3;
      roundRect(2.5,-4.5,13.5,11,3); ctx.fill(); ctx.stroke();
      roundRect(-13,-4.5,11.5,10.5,3); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-1.5,0); ctx.lineTo(2.5,0); ctx.moveTo(16,-2); ctx.lineTo(18,-3); ctx.stroke();
    }
  }
  ctx.restore();
  ctx.restore();
  ctx.restore();
}
function drawFighter(f){
  if(!f) return; var c=f.char, cx=f.x+27, top=f.y-f.h;
  /* --- anime aura: full meter = green flame, low HP = red desperation aura, dash = speed lines --- */
  ctx.save();
  if(gameState==='fight'&&(f.meter>=100||f.hp<=MAX_HP*0.25)){
    var auraCol=f.meter>=100?'118,185,0':'255,59,78';
    for(var fl=0;fl<4;fl++){ var fh=196+Math.sin(f.auraT*4.5+fl*1.7)*10, fw=34-fl*4;
      ctx.fillStyle='rgba('+auraCol+','+(0.13-fl*0.025)+')'; ctx.beginPath(); ctx.ellipse(cx,f.y-100,fw,fh/2,0,0,7); ctx.fill(); }
  }
  if(f.state==='dash'){ ctx.strokeStyle='rgba(180,220,255,.55)'; ctx.lineWidth=2.5;
    for(var ln=0;ln<5;ln++){ var ly=f.y-184+ln*38+Math.sin(f.auraT*20+ln)*3; ctx.beginPath(); ctx.moveTo(cx-f.face*(44+ln*7),ly); ctx.lineTo(cx-f.face*(96+ln*10),ly); ctx.stroke(); } }
  if(f.exhausted>0){ ctx.font='15px system-ui'; ctx.textAlign='center'; ctx.fillText('💤',cx+22,f.y-208+Math.sin(f.auraT*4)*3); }
  if(f.guardBreak>0){ ctx.font='15px system-ui'; ctx.textAlign='center'; ctx.fillText('💫',cx-22,f.y-208+Math.cos(f.auraT*6)*3); }
  if(f.lockT>0&&f.lockMove){ ctx.font='800 10px system-ui'; ctx.textAlign='center'; ctx.fillStyle='#ff8a94'; ctx.strokeStyle='#000'; ctx.lineWidth=3; var lt='🔒 '+f.lockMove.toUpperCase(); ctx.strokeText(lt,cx,f.y-216); ctx.fillText(lt,cx,f.y-216); }
  ctx.restore();
  /* glossy floor reflection — mirrored fighter, tinted by their colour */
  ctx.save(); ctx.globalAlpha=0.15; ctx.translate(0,GROUND+4+GROUND*0.34); ctx.scale(1,-0.34);
  drawFighterBody(c,f.x,f.y,f.face,f.anim,0,f.state,f.vx); ctx.restore();
  ctx.save(); ctx.globalAlpha=0.20; var rg=ctx.createRadialGradient(cx,GROUND+16,4,cx,GROUND+16,52); rg.addColorStop(0,c.color); rg.addColorStop(1,'rgba(0,0,0,0)'); ctx.fillStyle=rg; ctx.beginPath(); ctx.ellipse(cx,GROUND+16,52,10,0,0,7); ctx.fill(); ctx.restore();
  ctx.save();
  /* realistic contact shadow: a wide soft pool plus a tight dark core right under the feet */
  var airH=Math.max(0,GROUND-f.y);
  ctx.fillStyle='rgba(0,0,0,'+(0.22-airH*0.0006)+')'; ctx.beginPath(); ctx.ellipse(cx, GROUND+6, Math.max(22,54-airH*0.10), 11, 0, 0, 7); ctx.fill();
  ctx.fillStyle='rgba(0,0,0,'+(0.5-airH*0.0012)+')'; ctx.beginPath(); ctx.ellipse(cx, GROUND+5, Math.max(16,38-airH*0.07), 8, 0, 0, 7); ctx.fill();
  var drawState=f.state, drawY=f.y;
  if((gameState==='roundEnd'||gameState==='matchEnd')&&f.hp>0){ drawState='win'; drawY=f.y-Math.abs(Math.sin(f.auraT*6))*10; }
  if(f.state==='ko'){ ctx.translate(cx,f.y); ctx.rotate(f.face*-1.45); ctx.translate(-cx,-f.y); }
  /* squash on landing, stretch while rising, full spin during a combo finisher */
  ctx.translate(cx,drawY);
  var sqX=1,sqY=1;
  if(f.landT>0){ sqY=0.86; sqX=1.12; } else if(!f.onGround&&f.vy<-260){ sqY=1.07; sqX=0.95; }
  ctx.scale(sqX,sqY);
  if(f.finisher>0&&(f.state==='heavy'||f.state==='kick')){ ctx.rotate(f.face*(0.42-f.finisher)/0.42*Math.PI*2); }
  ctx.translate(-cx,-drawY);
  DRAW_PR=(f.atkT>0&&f.atkCfg&&f.atkCfg.dur)?Math.min(1,Math.max(0,1-f.atkT/f.atkCfg.dur)):1;
  drawFighterBody(c,f.x,drawY,f.face,f.anim,0,drawState,f.vx);
  DRAW_PR=1;
  ctx.restore();
  /* ===== v12 ATTACK VISUALS: a bold swing swoosh on every melee attack, and a white hit-flash on whoever got hit ===== */
  if(f.atkT>0 && (drawState==='punch'||drawState==='kick'||drawState==='heavy'||drawState==='dive'||drawState==='slide')){
    var dur=(f.atkCfg&&f.atkCfg.dur)||(drawState==='heavy'?0.24:0.2);
    var pr2=1-Math.max(0,f.atkT)/dur; if(pr2<0)pr2=0; if(pr2>1)pr2=1;
    var isKick=(drawState==='kick'||drawState==='slide');
    var arcCx=cx+f.face*(isKick?50:48), arcCy=f.y-(isKick?94:136), arcR=isKick?46:(drawState==='heavy'?54:42);
    var a0=-1.2+pr2*1.6, a1=a0+0.9, sweep=Math.sin(pr2*Math.PI);
    ctx.save(); ctx.globalAlpha=0.25+0.55*sweep; ctx.lineCap='round';
    ctx.strokeStyle=c.color; ctx.lineWidth=drawState==='heavy'?12:8;
    ctx.beginPath(); ctx.arc(arcCx,arcCy,arcR, f.face>0?a0:Math.PI-a1, f.face>0?a1:Math.PI-a0); ctx.stroke();
    ctx.strokeStyle='rgba(255,255,255,.92)'; ctx.lineWidth=3.5;
    ctx.beginPath(); ctx.arc(arcCx,arcCy,arcR-5, f.face>0?a0+0.18:Math.PI-a1+0.18, f.face>0?a1-0.08:Math.PI-a0-0.08); ctx.stroke();
    ctx.strokeStyle='rgba(255,255,255,.5)'; ctx.lineWidth=2;
    for(var st3=0;st3<3;st3++){ var sa=a0+0.15+st3*0.3; var sx3=arcCx+Math.cos(f.face>0?sa:Math.PI-sa)*(arcR+7+st3*5), sy3=arcCy+Math.sin(f.face>0?sa:Math.PI-sa)*(arcR+7+st3*5);
      ctx.beginPath(); ctx.moveTo(sx3,sy3); ctx.lineTo(sx3-f.face*(12+st3*5),sy3+3); ctx.stroke(); }
    ctx.restore();
  }
  if(f.hitFlashT>0){
    ctx.save(); ctx.globalAlpha=Math.max(0,f.hitFlashT/0.13)*0.6; ctx.fillStyle='#ffffff';
    roundRect(cx-27,f.y-200,54,198,22); ctx.fill(); ctx.restore();
  }
  /* v8 status + charge visuals */
  if(f.poisonT>0){ ctx.save(); ctx.translate(cx,f.y); ctx.fillStyle='rgba(74,222,128,.16)'; ctx.beginPath(); ctx.ellipse(0,-98,38,100,0,0,7); ctx.fill(); ctx.restore(); }
  if(f.slowT>0){ ctx.save(); ctx.translate(cx,f.y); ctx.strokeStyle='rgba(147,197,253,.8)'; ctx.lineWidth=2.5; ctx.beginPath(); ctx.arc(30,-182,12,0,7); ctx.stroke(); ctx.beginPath(); ctx.moveTo(30,-182); ctx.lineTo(30,-191); ctx.moveTo(30,-182); ctx.lineTo(36,-179); ctx.stroke(); ctx.restore(); }
  if(f.freezeT>0){ ctx.save(); ctx.translate(cx,f.y); ctx.fillStyle='rgba(186,230,253,.38)'; roundRect(-38,-202,76,200,10); ctx.fill(); ctx.strokeStyle='rgba(224,242,254,.95)'; ctx.lineWidth=2.5; roundRect(-38,-202,76,200,10); ctx.stroke(); ctx.font='18px system-ui'; ctx.textAlign='center'; ctx.fillText('❄️',0,-208); ctx.restore(); }
  if(f.specAnimT>0||f.ultAnimT>0){ var cr=f.ultAnimT>0?f.ultAnimT/0.7:f.specAnimT/0.45; ctx.save(); ctx.translate(cx,f.y-98); ctx.globalAlpha=Math.max(0,cr)*0.8; ctx.strokeStyle=f.char.color; ctx.lineWidth=f.ultAnimT>0?5:3; ctx.shadowColor=f.char.color; ctx.shadowBlur=16; ctx.beginPath(); ctx.ellipse(0,0,32+(1-cr)*44,100+(1-cr)*30,0,0,7); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.translate(cx,f.y-120); ctx.font=(f.ultAnimT>0?'30px':'22px')+' system-ui'; ctx.textAlign='center'; ctx.fillText(f.char.emoji||'⚡',0,0); ctx.restore(); }
  if(f.meter>=100 && gameState==='fight'){ ctx.save(); ctx.translate(cx,f.y); ctx.strokeStyle='rgba(190,242,100,.75)'; ctx.lineWidth=3; ctx.shadowColor='#76b900'; ctx.shadowBlur=14; ctx.beginPath(); ctx.ellipse(0,-98,37,100,0,0,7); ctx.stroke(); ctx.restore(); }
  if(f.hitT>0 && f.state==='hit'){ ctx.save(); ctx.translate(cx,f.y); ctx.fillStyle='rgba(255,60,60,.28)'; ctx.beginPath(); ctx.arc(0,-100,58,0,7); ctx.fill(); ctx.restore(); }
  /* name tag */
  ctx.fillStyle='rgba(0,0,0,.6)'; var label=(f.controls==='p1'?'P1 • ':'P2 • ')+c.name; ctx.font='800 11px system-ui'; var tw=ctx.measureText(label).width+14; roundRect(cx-tw/2,top-36,tw,19,9); ctx.fill();
  ctx.fillStyle=f.accent; ctx.textAlign='center'; ctx.fillText(label,cx,top-22);
  if(f.combo>=2){ ctx.fillStyle='#ffc61a'; ctx.font='900 13px system-ui'; ctx.strokeStyle='#000'; ctx.lineWidth=3; var ct=f.combo+' HITS!'; ctx.strokeText(ct,cx,top-46); ctx.fillText(ct,cx,top-46); }
}
updateHUD();
