(()=>{'use strict';const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;const loader=document.querySelector('#loader');let raf=0;
const gs=window.gsap,ST=window.ScrollTrigger;if(reduce){loader?.remove();document.body.classList.remove('loading');return}
function init(){
 if(!gs||!ST){loader?.remove();document.body.classList.remove('loading');return}
 gs.registerPlugin(ST);
 const label=document.querySelector('#load-number');
 const state={n:0};
 gs.to(state,{n:100,duration:1.45,ease:'power3.inOut',onUpdate(){if(label)label.textContent=String(Math.floor(state.n)).padStart(3,'0')+'%'}});
 const intro=gs.timeline({delay:.1});
 intro.to('#loader',{yPercent:-100,duration:1.05,delay:1.2,ease:'expo.inOut',onComplete(){loader?.remove();document.body.classList.remove('loading');ST.refresh()}})
 .fromTo('.hero h1 .hero-line',{y:140,rotationX:-17,opacity:0},{y:0,rotationX:0,opacity:1,duration:1.5,stagger:.13,ease:'expo.out'},'-=.7')
 .fromTo('.hero-detail,.hero .hero-top,.hero .hero-bottom',{opacity:0,y:28},{opacity:1,y:0,duration:.8,stagger:.1},'-=1');
 gs.utils.toArray('.section-top h2').forEach(el=>gs.fromTo(el,{x:-85,opacity:.3},{x:0,opacity:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',end:'top 45%',scrub:1}}));
 gs.fromTo('.interlude h2',{scale:.72,opacity:.3},{scale:1,opacity:1,scrollTrigger:{trigger:'.interlude',start:'top 80%',end:'center center',scrub:1}});
 gs.fromTo('.portrait-visual span',{rotation:-26,scale:1.7},{rotation:0,scale:1,scrollTrigger:{trigger:'.portrait',start:'top 88%',end:'center center',scrub:1}});
 gs.fromTo('.last h2',{y:100,opacity:.2},{y:0,opacity:1,scrollTrigger:{trigger:'.last',start:'top 90%',end:'center center',scrub:1}});
 gs.to('#reading-progress',{scaleX:1,ease:'none',scrollTrigger:{trigger:document.documentElement,start:'top top',end:'bottom bottom',scrub:.2}});
 if(matchMedia('(pointer:fine)').matches){const projects=[...document.querySelectorAll('.project')];projects.forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;gs.to(el,{rotationY:x*9,rotationX:-y*9,duration:.6,ease:'power2.out'});gs.to(el.querySelector('.shape'),{x:x*-70,y:y*-70,rotation:x*80,duration:.7})});el.addEventListener('pointerleave',()=>gs.to(el,{rotationX:0,rotationY:0,duration:.8,ease:'expo.out'}))});
 document.querySelectorAll('[data-magnet]').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();gs.to(el,{x:(e.clientX-r.left-r.width/2)*.22,y:(e.clientY-r.top-r.height/2)*.24,duration:.4})});el.addEventListener('pointerleave',()=>gs.to(el,{x:0,y:0,duration:.7,ease:'elastic.out(1,.4)'}))})}
}
const script=document.createElement('script');script.src='https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/ScrollTrigger.min.js';script.onload=init;script.onerror=()=>{loader?.remove();document.body.classList.remove('loading')};if(gs){document.head.append(script)}else{loader?.remove();document.body.classList.remove('loading')}
const canvas=document.getElementById('hero-field');if(canvas){const ctx=canvas.getContext('2d');let ww=0,hh=0,mx=.72,my=.4,particles=[];function size(){const r=canvas.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,1.5);ww=r.width;hh=r.height;canvas.width=ww*d;canvas.height=hh*d;ctx.setTransform(d,0,0,d,0,0);particles=Array.from({length:80},(_,i)=>({x:(i*137.508)%ww,y:(i*73.13)%hh,r:1+i%3}))}new ResizeObserver(size).observe(canvas);size();canvas.parentElement.addEventListener('pointermove',e=>{const r=canvas.getBoundingClientRect();mx=(e.clientX-r.left)/r.width;my=(e.clientY-r.top)/r.height});let t=0;function draw(){t+=.008;ctx.clearRect(0,0,ww,hh);const x=mx*ww,y=my*hh;particles.forEach((p,i)=>{const xx=p.x+Math.sin(t+i)*13,yy=p.y+Math.cos(t*.75+i)*13,d=Math.hypot(xx-x,yy-y);ctx.fillStyle=d<175?'#101010':'#96968e';ctx.fillRect(xx,yy,p.r,p.r);if(d<110){ctx.strokeStyle='#77777755';ctx.beginPath();ctx.moveTo(xx,yy);ctx.lineTo(x,y);ctx.stroke()}});if(document.visibilityState==='visible')raf=requestAnimationFrame(draw);else raf=requestAnimationFrame(draw)}draw()}
})();