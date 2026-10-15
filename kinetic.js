/* Progressive enhancement: GSAP + ScrollTrigger + Lenis. */
(function(){
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine=matchMedia('(pointer:fine)').matches;
const gs=window.gsap,st=window.ScrollTrigger;
if(!reduced&&gs&&st){
 gs.registerPlugin(st);
 gs.from('.hero h1',{opacity:0,y:75,filter:'blur(12px)',duration:1.4,ease:'power3.out',clearProps:'filter'});
 gs.from('.hero p,.hero .tag',{opacity:0,y:22,stagger:.13,duration:.8,delay:.42,ease:'power2.out'});
 gs.utils.toArray('.section h2,.world-heading h2,.game-head h2').forEach(el=>{
   gs.fromTo(el,{y:55,opacity:.25},{y:0,opacity:1,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}});
 });
 gs.utils.toArray('.card,.project,.item,.now-box').forEach((el,i)=>{
   gs.fromTo(el,{y:25,opacity:.45},{y:0,opacity:1,duration:.75,scrollTrigger:{trigger:el,start:'top 93%',once:true}});
 });
 gs.to('#progress-rail',{scaleX:1,ease:'none',scrollTrigger:{trigger:document.documentElement,start:'top top',end:'bottom bottom',scrub:.2}});
 if(fine&&typeof window.Lenis==='function'){
   const lenis=new window.Lenis({duration:1.15,smoothWheel:true,anchors:true});
   lenis.on('scroll',st.update);
   gs.ticker.add(t=>lenis.raf(t*1000));
   gs.ticker.lagSmoothing(0);
   window.addEventListener('pagehide',()=>lenis.destroy(),{once:true});
 }
}
if(fine&&!reduced&&gs){
 const ring=document.querySelector('#pointer-orbit'),dot=document.querySelector('#pointer-dot');
 if(ring&&dot){const rx=gs.quickTo(ring,'x',{duration:.48,ease:'power3.out'}),ry=gs.quickTo(ring,'y',{duration:.48,ease:'power3.out'});
 window.addEventListener('pointermove',e=>{ring.style.opacity='.6';dot.style.opacity='1';rx(e.clientX);ry(e.clientY);dot.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)'},{passive:true});
 document.querySelectorAll('a,button,.hero h1').forEach(el=>{el.addEventListener('pointerenter',()=>gs.to(ring,{scale:1.8,duration:.25}));el.addEventListener('pointerleave',()=>gs.to(ring,{scale:1,duration:.25}))});}
}
})();