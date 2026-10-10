/* Hirusha Travels – aeroplane page transition (loaded in <head>) */
(function(){
 var HALF=850,root=document.documentElement,
  reduce=window.matchMedia("(prefers-reduced-motion:reduce)").matches;
 var LB={"index.html":"Home","about.html":"About","packages.html":"Tour Packages","contact.html":"Contact & Booking"};
 var SVG=['<svg viewBox="0 0 1000 560" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"><defs>',
 '<linearGradient id="fxs" x1="0" x2="1"><stop offset="0" stop-color="#00a6d6"/><stop offset=".6" stop-color="#19c37d"/><stop offset="1" stop-color="#ffb020"/></linearGradient>',
 '<linearGradient id="fxf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b9cbd6"/><stop offset=".28" stop-color="#ffffff"/><stop offset=".55" stop-color="#f1f7fa"/><stop offset=".8" stop-color="#dce8ee"/><stop offset="1" stop-color="#a9bdc9"/></linearGradient>',
 '<linearGradient id="fxw" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#c3d3dc"/><stop offset="1" stop-color="#f8fbfd"/></linearGradient>',
 '<linearGradient id="fxt" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".9"/></linearGradient>',
 '<linearGradient id="fxg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4b8fae"/><stop offset="1" stop-color="#0a2634"/></linearGradient>',
 '<radialGradient id="fxr"><stop offset="0" stop-color="#ff3b3b"/><stop offset="1" stop-color="#ff3b3b" stop-opacity="0"/></radialGradient>',
 '<radialGradient id="fxn"><stop offset="0" stop-color="#2dff8a"/><stop offset="1" stop-color="#2dff8a" stop-opacity="0"/></radialGradient>',
 '<filter id="fxb" x="-5%" y="-400%" width="110%" height="900%"><feGaussianBlur stdDeviation="5"/></filter></defs>',
 '<g filter="url(#fxb)"><rect x="-1100" y="145" width="1652" height="10" rx="5" fill="url(#fxt)"/><rect x="-1100" y="405" width="1652" height="10" rx="5" fill="url(#fxt)"/></g>',
 '<g stroke="#9db8c4" stroke-width="1.5" stroke-linejoin="round">',
 '<polygon fill="url(#fxw)" points="200,252 112,140 70,140 130,262"/><polygon fill="url(#fxw)" points="200,308 112,420 70,420 130,298"/>',
 '<polygon fill="url(#fxs)" stroke="none" points="112,140 70,140 78,152 116,152"/><polygon fill="url(#fxs)" stroke="none" points="112,420 70,420 78,408 116,408"/>',
 '<polygon fill="url(#fxw)" points="700,250 482,28 420,28 500,250"/><polygon fill="url(#fxw)" points="700,310 482,532 420,532 500,310"/>',
 '<polygon fill="#e4eef3" points="482,28 420,28 440,0 464,0"/><polygon fill="#e4eef3" points="482,532 420,532 440,560 464,560"/>',
 '<ellipse cx="600" cy="150" rx="54" ry="18" fill="#f6fafc"/><ellipse cx="600" cy="410" rx="54" ry="18" fill="#f6fafc"/>',
 '<path fill="url(#fxf)" d="M70,268 L560,250 L840,250 Q960,254 988,280 Q960,306 840,310 L560,310 L70,292 Q54,280 70,268 Z"/></g>',
 '<g fill="#17384a"><ellipse cx="650" cy="150" rx="6" ry="13"/><ellipse cx="650" cy="410" rx="6" ry="13"/></g>',
 '<g stroke="#b3c7d2" stroke-width="1.2" opacity=".8"><path d="M560,60 L590,248 M520,100 L548,248"/><path d="M560,500 L590,312 M520,460 L548,312"/></g>',
 '<rect x="110" y="284" width="770" height="6" rx="3" fill="url(#fxs)"/>',
 '<text x="270" y="273" font-family="Poppins,Arial,sans-serif" font-weight="700" font-size="20" letter-spacing="4" fill="#0a6f93">HIRUSHA TRAVELS</text>',
 '<path fill="url(#fxg)" d="M920,266 L962,273 Q974,280 962,287 L920,294 Z"/><path d="M930,271 L956,276" stroke="#ffffff99" stroke-width="2" stroke-linecap="round"/>',
 '<circle cx="452" cy="30" r="16" fill="url(#fxr)"/><circle cx="452" cy="530" r="16" fill="url(#fxn)"/></svg>'].join("");
 var CL=[[12,8,36,16,.5],[60,55,42,18,.9],[34,75,30,13,.7],[78,15,34,15,1.1]];
 var SP=[[14,18,1.3],[30,28,1.6],[48,14,1.2],[66,30,1.7],[84,20,1.4]];
 var sky,pl,bm,tg,tgn,tgp,pw,vw,ph,cls=[],sps=[];
 function stop(e){e.preventDefault()}
 /* constant cruising speed with short soft start/stop: no speed-up or stall in the middle */
 function prof(u){var a=.18,D=1-a,r;
  if(u<a)r=u*u/(2*a);else if(u>1-a){var q=1-u;r=D-q*q/(2*a)}else r=a/2+(u-a);return r/D}
 function make(label,phase){
  vw=innerWidth;ph=phase;cls=[];sps=[];
  pl=document.createElement("div");pl.className="fx-plane";pl.innerHTML=SVG;root.appendChild(pl);
  pw=pl.offsetWidth;
  var p0=(vw-pw)/2,left5=phase===1?p0-vw:p0;
  sky=document.createElement("div");sky.className="fx-sky";sky.style.width=(vw+pw)+"px";
  CL.forEach(function(c){var e=document.createElement("div");e.className="fx-cl";
   e.style.cssText="top:"+c[0]+"%;left:"+(c[1]/100*vw-left5)+"px;width:"+c[2]+"vw;height:"+c[3]+"vw";sky.appendChild(e);cls.push([e,c[4]])});
  SP.forEach(function(s){var e=document.createElement("div");e.className="fx-sp";
   e.style.cssText="top:"+s[0]+"%;left:"+(vw*.35-left5)+"px;width:"+s[1]+"vw";sky.appendChild(e);sps.push([e,s[2]])});
  bm=document.createElement("div");bm.className="fx-beam";
  tg=document.createElement("div");tg.className="fx-tag";
  tg.innerHTML="<small>Now flying to</small><b></b><i><u></u></i>";
  tgn=tg.querySelector("b");tgn.textContent=label||"";tgp=tg.querySelector("u");
  [sky,bm,tg].forEach(function(e){root.appendChild(e)});
  root.classList.add("pf-busy");
 }
 function render(u){
  var s=prof(u),p=-pw+(vw+pw)*s,y=Math.sin(u*Math.PI*3)*6;
  pl.style.transform="translate3d("+p+"px,"+y+"px,0)";
  sky.style.transform="translate3d("+(ph===1?p-vw:p)+"px,0,0)";
  bm.style.transform="translate3d("+((ph===1?p+pw:p)-1)+"px,0,0)";
  var d=(s-.5)*vw;
  for(var i=0;i<cls.length;i++)cls[i][0].style.transform="translate3d("+(d*cls[i][1]*.6)+"px,0,0)";
  for(i=0;i<sps.length;i++)sps[i][0].style.transform="translate3d("+(d*sps[i][1]*.9)+"px,0,0)";
  tg.style.opacity=Math.max(0,1-Math.abs(u-.5)/.22);
  tgp.style.width=(u*100)+"%";
 }
 function run(u0,u1,done){
  var t0=performance.now();
  (function f(now){
   var k=Math.min(1,Math.max(0,(now-t0)/HALF));render(u0+(u1-u0)*k);
   if(k<1)requestAnimationFrame(f);else done()
  })(t0);
 }
 function clear(){
  [sky,bm,pl,tg].forEach(function(e){if(e&&e.parentNode)e.parentNode.removeChild(e)});
  root.classList.remove("pf-busy");
  window.removeEventListener("wheel",stop);window.removeEventListener("touchmove",stop);
 }
 var arrived=false;
 try{arrived=!!sessionStorage.getItem("pf");sessionStorage.removeItem("pf")}catch(e){}
 if(arrived&&!reduce){make(document.title.split("|")[0].trim(),2);render(.5);requestAnimationFrame(function(){run(.5,1,clear)})}
 window.addEventListener("pageshow",function(e){if(e.persisted)clear()});
 function inner(e){
  var a=e.target.closest&&e.target.closest("a[href]");
  if(!a||a.target==="_blank")return null;
  var h=a.getAttribute("href");
  if(!h||h.charAt(0)==="#"||/^(mailto:|tel:|javascript:)/i.test(h)||a.origin!==location.origin||!/\.html$/.test(a.pathname))return null;
  var to=a.pathname.split("/").pop(),from=location.pathname.split("/").pop()||"index.html";
  return to===from?null:a;
 }
 var warmed={};
 function warm(a){if(warmed[a.href])return;warmed[a.href]=1;try{fetch(a.href,{credentials:"same-origin"}).catch(function(){})}catch(x){}}
 ["pointerover","touchstart"].forEach(function(t){document.addEventListener(t,function(e){var a=inner(e);if(a)warm(a)},{passive:true})});
 document.addEventListener("click",function(e){
  if(e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||reduce)return;
  var a=inner(e);if(!a)return;
  e.preventDefault();warm(a);
  make(LB[a.pathname.split("/").pop()]||a.textContent.trim(),1);
  window.addEventListener("wheel",stop,{passive:false});window.addEventListener("touchmove",stop,{passive:false});
  var done=false,go=function(){if(done)return;done=true;try{sessionStorage.setItem("pf","1")}catch(x){}location.href=a.href};
  run(0,.5,go);
 });
})();
