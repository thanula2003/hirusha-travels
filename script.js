var S=[
    ["Sigiriya","The Lion Rock Fortress","Climb the ancient rock palace of King Kashyapa, a UNESCO World Heritage Site rising 200 metres above the jungle, with mirror wall frescoes and water gardens at its feet.","1704797390901-e1d20bd46647"],
    ["Yala","Wild Safari Adventure","Ride a jeep through Sri Lanka's most famous national park and meet elephants, leopards, crocodiles and hundreds of bird species in their natural home.","1720667964398-b8c22d5b417d"],
    ["Galle","The Dutch Fort by the Sea","Walk the historic ramparts of Galle Fort, a UNESCO World Heritage Site, with its lighthouse, boutique cafes, colonial streets and ocean sunsets.","1743614887671-92c9f274cd7d"],
    ["Kandy","The Sacred Hill Capital","Visit the golden-roofed Temple of the Tooth beside Kandy Lake, a UNESCO World Heritage Site, and enjoy traditional Kandyan dance, spice gardens and misty hill views.","1665849050332-8d5d7e59afb6"],
    ["Hill Country","Tea Estates & Mist","Rolling emerald tea plantations, cool mountain air and scenic train rides around Nuwara Eliya and Ella. A green escape for hikers and dreamers.","1559038300-07cb5d6c3d27"]];
    var i=0,n=S.length,P="https://images.unsplash.com/photo-";
    function $(x){return document.getElementById(x)}
    function show(k){
     i=(k+n)%n;var s=S[i],nx=S[(i+1)%n];
     $("bg").style.opacity=0;$("bg").className="";$("tx").style.opacity=0;
     setTimeout(function(){
      $("bg").style.backgroundImage="url("+P+s[3]+"?w=1800)";$("bg").style.opacity=1;$("bg").className="in";
      $("tg").textContent=s[1];$("t").textContent=s[0];$("d").innerHTML=s[2];$("tx").style.opacity=1;
      $("gh").innerHTML=nx[0];$("vt").textContent="0"+(i+1)+"/0"+n;$("p1").textContent="0"+(i+1);$("pf").style.width=((i+1)/n*100)+"%";
      var r="",c="";
      S.forEach(function(_,k){r+="<b"+(k==i?' class="on">'+(i+1):">")+"</b>"});$("rail").innerHTML=r;
      for(var k=1;k<=n;k++){var j=(i+k)%n;if(j==i)continue;
       c+='<div class="k" onclick="show('+j+')"><small>'+S[j][0]+'</small><div>'+"<i class=o></i><i class=o></i><i class=o></i><i class=o></i><i></i>"+'</div><div class="im" style="background-image:url('+P+S[j][3]+'?w=600)"><button class="bm" onclick="event.stopPropagation();this.classList.toggle(\'on\')">★</button></div></div>';}
      $("cards").innerHTML=c;
     },350);}
    if($("hero")){$("pv").onclick=function(){show(i-1)};$("nx").onclick=function(){show(i+1)};show(0);setInterval(function(){show(i+1)},8000);}
    var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting)x.target.classList.add("show")})});
    document.querySelectorAll(".card,.gallery img,.tbl,form,h2,.qc,.sbox,.mapbox,.faq details").forEach(function(x){x.classList.add("rv");io.observe(x)});
    var f=document.querySelector("form");
    if(f){f.addEventListener("submit",function(e){e.preventDefault();var t=document.createElement("div");t.className="toast";t.textContent="✈ Thank you! Hirusha Travels will contact you soon.";document.body.appendChild(t);setTimeout(function(){t.classList.add("show")},30);setTimeout(function(){t.classList.remove("show");setTimeout(function(){t.remove()},600)},4800);f.reset();});}