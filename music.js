/* Hirusha Travels – persistent background music
   - Does NOT autoplay on the first visit: the visitor taps the music button to start it.
   - Once on, it keeps playing when moving between pages (position + on/off are remembered
     for the browser tab, so the track carries on instead of restarting).
   - If the browser blocks audio on a new page, it resumes on the visitor's first tap/click/key.
   Add <script src="music.js"></script> before <script src="script.js"> on every page. */
   (function(){
    "use strict";
    var SRC="music.mp3";   /* <- replace with your own track if you like */
    var VOL=0.35;          /* default volume 0–1 */
    var KEY="ht_music";
    
    var TXT={
     en:["Play background music","Pause background music","Volume","Click here for a better experience"],
     ru:["Включить музыку","Выключить музыку","Громкость","Нажмите здесь для лучшего впечатления"],
     zh:["播放背景音乐","暂停背景音乐","音量","点击这里，体验更佳"],
     ja:["BGMを再生","BGMを一時停止","音量","ここをクリックして、より快適な体験を"],
     hi:["बैकग्राउंड संगीत चलाएँ","बैकग्राउंड संगीत रोकें","आवाज़","बेहतर अनुभव के लिए यहाँ क्लिक करें"],
     es:["Reproducir música de fondo","Pausar música de fondo","Volumen","Haz clic aquí para una mejor experiencia"],
     ar:["تشغيل الموسيقى","إيقاف الموسيقى","مستوى الصوت","انقر هنا لتجربة أفضل"]
    };
    
    function load(){try{return JSON.parse(sessionStorage.getItem(KEY))||{}}catch(e){return {}}}
    var S=load(),want=S.on===true,waiting=false,fadeId=0,hintTimer=0;
    var vol=typeof S.v==="number"?S.v:VOL;
    
    var a=new Audio();a.loop=true;a.preload="auto";a.src=SRC;
    a.volume=0.5;var canVol=Math.abs(a.volume-0.5)<0.01;   /* iOS ignores volume changes */
    a.volume=canVol?vol:1;
    
    function persist(){
     S.on=want;S.v=vol;
     if(!a.paused&&a.currentTime>0){S.t=a.currentTime;S.ts=Date.now()}
     try{sessionStorage.setItem(KEY,JSON.stringify(S))}catch(e){}
    }
    function fade(to,ms,done){
     clearInterval(fadeId);
     if(!canVol){a.volume=1;if(done)done();return}
     var from=a.volume,t0=performance.now();
     fadeId=setInterval(function(){
      var k=Math.min(1,(performance.now()-t0)/ms);a.volume=from+(to-from)*k;
      if(k>=1){clearInterval(fadeId);if(done)done()}
     },40);
    }
    
    /* ---------- UI ---------- */
    var css=[
    ".ht-mu{position:fixed;bottom:var(--ht-music-y,18px);inset-inline-start:var(--ht-music-x,18px);z-index:60;display:flex;align-items:center;padding:5px;border-radius:40px;background:rgba(7,22,31,.8);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.18);box-shadow:0 8px 24px rgba(0,0,0,.4)}",
    ".ht-mb{position:relative;width:42px;height:42px;flex:none;border:0;border-radius:50%;cursor:pointer;display:grid;place-items:center;color:#fff;background:linear-gradient(135deg,var(--blue,#00a6d6),var(--green,#19c37d));transition:transform .2s}",
    ".ht-mb:hover{transform:scale(1.07)}",
    ".ht-mb:focus-visible{outline:2px solid var(--gold,#ffb020);outline-offset:2px}",
    ".ht-mb svg{width:20px;height:20px;fill:currentColor}",
    ".ht-eq{display:none;align-items:flex-end;gap:3px;height:16px}",
    ".ht-eq i{display:block;width:3px;border-radius:2px;background:#fff;height:100%;transform-origin:bottom;animation:hteq 1s ease-in-out infinite}",
    ".ht-eq i:nth-child(2){animation-delay:-.4s}.ht-eq i:nth-child(3){animation-delay:-.8s}.ht-eq i:nth-child(4){animation-delay:-.2s}",
    "@keyframes hteq{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}",
    ".ht-mu.on .ht-mb svg{display:none}.ht-mu.on .ht-eq{display:flex}",
    ".ht-mv{width:0;opacity:0;margin:0;transition:.3s;accent-color:var(--gold,#ffb020);cursor:pointer;height:4px}",
    ".ht-mu:hover .ht-mv,.ht-mu:focus-within .ht-mv{width:92px;opacity:1;margin:0 12px 0 10px}",
    ".ht-mu.nov .ht-mv{display:none}",
    "@media(hover:none){.ht-mv{display:none}}",
    ".ht-mu.hint .ht-mb::after,.ht-mu.wait .ht-mb::after{content:'';position:absolute;inset:-5px;border-radius:50%;border:2px solid var(--gold,#ffb020);animation:htpulse 1.6s ease-out infinite}",
    "@keyframes htpulse{from{opacity:.9;transform:scale(.9)}to{opacity:0;transform:scale(1.5)}}",
    ".ht-ar{position:absolute;bottom:calc(100% + 10px);inset-inline-start:0;display:flex;flex-direction:column;align-items:flex-start;width:max-content;max-width:min(250px,calc(100vw - 40px));cursor:pointer;transform-origin:20% 100%;animation:htpop .7s cubic-bezier(.34,1.8,.5,1) .5s both;-webkit-tap-highlight-color:transparent}",
    ".ht-ar.out{animation:htout .4s ease-in both;pointer-events:none}",
    "@keyframes htpop{from{opacity:0;transform:scale(.2) rotate(-12deg)}to{opacity:1;transform:none}}",
    "@keyframes htout{to{opacity:0;transform:scale(.3) translateY(20px)}}",
    ".ht-at{padding:9px 15px;border-radius:18px;background:#ff2a3a;color:#fff;border:3px solid #5a0a10;box-shadow:3px 4px 0 #5a0a10;font-family:inherit;font-weight:700;font-size:.86rem;line-height:1.3;text-shadow:1px 1px 0 #5a0a10;transform-origin:20% 100%;animation:htwob 2.4s ease-in-out 1.2s infinite}",
    "@keyframes htwob{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}",
    ".ht-ay{width:46px;height:72px;margin-inline-start:2px;margin-top:-2px;flex:none;transform-origin:50% 100%;animation:htboing 1.1s ease-in-out 1.1s infinite;filter:drop-shadow(2px 3px 0 rgba(0,0,0,.28))}",
    "@keyframes htboing{0%{transform:translateY(0) scale(1,1)}28%{transform:translateY(-8px) scale(.92,1.14)}55%{transform:translateY(7px) scale(1.14,.84)}72%{transform:translateY(0) scale(.97,1.05)}100%{transform:translateY(0) scale(1,1)}}",
    "@media(prefers-reduced-motion:reduce){.ht-eq i,.ht-mu .ht-mb::after,.ht-ar,.ht-at,.ht-ay{animation:none!important}}"
    ].join("\n");
    var st=document.createElement("style");st.textContent=css;document.head.appendChild(st);
    
    var box=document.createElement("div");box.className="ht-mu";box.setAttribute("data-notr","");
    box.innerHTML='<button type="button" class="ht-mb" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg><span class="ht-eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span></button><input class="ht-mv" type="range" min="0" max="1" step="0.01">';
    var btn=box.querySelector(".ht-mb"),rng=box.querySelector(".ht-mv");
    rng.value=vol;if(!canVol)box.classList.add("nov");
    var ar=null,arT=0;
    function showArrow(){
     ar=document.createElement("div");ar.className="ht-ar";ar.setAttribute("aria-hidden","true");
     ar.innerHTML='<div class="ht-at"></div><svg class="ht-ay" viewBox="0 0 46 72"><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M23 10C35 19 11 28 23 40" stroke="#5a0a10" stroke-width="13"/><polygon points="8,38 38,38 23,66" fill="#5a0a10" stroke="#5a0a10" stroke-width="8"/><path d="M23 10C35 19 11 28 23 40" stroke="#ff2a3a" stroke-width="7"/><polygon points="8,38 38,38 23,66" fill="#ff2a3a" stroke="#ff2a3a" stroke-width="2"/><path d="M21 14C28 19 17 25 20 32" stroke="#fff" stroke-opacity=".55" stroke-width="2.4"/></g></svg>';
     ar.addEventListener("click",function(){btn.click()});
     box.appendChild(ar);
     arT=setTimeout(hideArrow,22000);
    }
    function hideArrow(){
     if(!ar)return;var e=ar;ar=null;clearTimeout(arT);
     e.classList.add("out");setTimeout(function(){if(e.parentNode)e.parentNode.removeChild(e)},450);
    }
    if(S.on===undefined){box.classList.add("hint");hintTimer=setTimeout(function(){box.classList.remove("hint")},12000)}
    
    function lang(){var l=(document.documentElement.getAttribute("lang")||"en").slice(0,2);return TXT[l]||TXT.en}
    function ui(){
     var playing=want&&!waiting&&!a.paused,t=lang();
     box.classList.toggle("on",playing);
     box.classList.toggle("wait",want&&waiting);
     btn.setAttribute("aria-pressed",want?"true":"false");
     btn.setAttribute("aria-label",want?t[1]:t[0]);btn.title=want?t[1]:t[0];
     rng.setAttribute("aria-label",t[2]);
     if(ar)ar.firstChild.textContent=t[3];
    }
    function mount(){document.body.appendChild(box);if(S.on===undefined)showArrow();ui()}
    if(document.body)mount();else document.addEventListener("DOMContentLoaded",mount);
    new MutationObserver(ui).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
    
    /* ---------- playback ---------- */
    function seekToSaved(cb){
     function go(){
      if(typeof S.t==="number"&&S.ts&&isFinite(a.duration)&&a.duration>0){
       var t=(S.t+(Date.now()-S.ts)/1000)%a.duration;
       try{a.currentTime=t}catch(e){}
      }
      cb();
     }
     if(a.readyState>=1)go();else a.addEventListener("loadedmetadata",go,{once:true});
    }
    function start(fromSaved){
     var go=function(){
      a.volume=canVol?0:1;
      var p=a.play();
      var ok=function(){waiting=false;fade(vol,1400);ui();persist()};
      if(p&&p.then)p.then(ok,function(){waiting=true;ui();armGesture()});else ok();
     };
     if(fromSaved)seekToSaved(go);else go();
    }
    var armed=false;
    function armGesture(){
     if(armed)return;armed=true;
     var ev=["pointerdown","keydown","touchstart"];
     var h=function(e){
      if(box.contains(e.target))return;          /* the music button handles itself */
      ev.forEach(function(n){document.removeEventListener(n,h,true)});armed=false;
      if(want&&waiting)start(true);
     };
     ev.forEach(function(n){document.addEventListener(n,h,true)});
    }
    function stop(){
     want=false;waiting=false;hideArrow();clearTimeout(hintTimer);box.classList.remove("hint");
     fade(0,350,function(){a.pause();ui()});persist();ui();
    }
    btn.addEventListener("click",function(){
     hideArrow();clearTimeout(hintTimer);box.classList.remove("hint");
     if(want&&waiting){start(true);return}
     if(want){stop();return}
     want=true;persist();start(false);
    });
    rng.addEventListener("input",function(){
     vol=+rng.value;
     if(canVol){clearInterval(fadeId);a.volume=vol}
     persist();
    });
    
    /* keep position saved; fade out as the visitor leaves for another page */
    setInterval(function(){if(want&&!a.paused)persist()},1000);
    window.addEventListener("pagehide",persist);
    document.addEventListener("click",function(e){
     if(e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||!want||a.paused)return;
     var l=e.target.closest&&e.target.closest("a[href]");
     if(!l||l.target==="_blank"||l.origin!==location.origin||!/\.html$/.test(l.pathname))return;
     var to=l.pathname.split("/").pop(),from=location.pathname.split("/").pop()||"index.html";
     if(to===from)return;
     persist();fade(0,700);
     setTimeout(function(){if(want&&!a.paused&&canVol&&a.volume<vol*.5)fade(vol,500)},3000); /* navigation didn't happen */
    },true);
    window.addEventListener("pageshow",function(e){
     if(!e.persisted)return;
     S=load();want=S.on===true;
     if(want){a.pause();start(true)}else ui();
    });
    a.addEventListener("error",function(){box.style.display="none";console.warn("music.js: could not load "+SRC)});
    
    /* resume on a new page if it was playing on the previous one */
    if(want)start(true);
    })();