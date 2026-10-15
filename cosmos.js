import * as THREE from 'three';
const host=document.getElementById('cosmos');
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(host&&!reduced){
let renderer;
try{
renderer=new THREE.WebGLRenderer({alpha:true,antialias:devicePixelRatio<2,powerPreference:'low-power'});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));
renderer.setClearColor(0x000000,0);
host.appendChild(renderer.domElement);
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(38,1,.1,100);
camera.position.set(0,0,12);
const group=new THREE.Group();scene.add(group);
const geometry=new THREE.BufferGeometry(),count=1900;
const pos=new Float32Array(count*3),colors=new Float32Array(count*3);
const neutral=new THREE.Color(0x8a8a84),lime=new THREE.Color(0xdbff6a);
for(let i=0;i<count;i++){
 const a=Math.random()*Math.PI*2,b=Math.random()*Math.PI*2;
 const tube=.92+Math.random()*.55,ring=3.05+Math.cos(b)*tube;
 pos[3*i]=Math.cos(a)*ring;pos[3*i+1]=Math.sin(a)*ring;pos[3*i+2]=Math.sin(b)*tube;
 const c=neutral.clone().lerp(lime,Math.random()<.12?.75:.04);
 colors[3*i]=c.r;colors[3*i+1]=c.g;colors[3*i+2]=c.b;
}
geometry.setAttribute('position',new THREE.BufferAttribute(pos,3));
geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));
const material=new THREE.PointsMaterial({size:.028,vertexColors:true,sizeAttenuation:true,transparent:true,opacity:.92,depthWrite:false});
const cloud=new THREE.Points(geometry,material);group.add(cloud);
const wire=new THREE.Mesh(new THREE.TorusGeometry(3.02,.85,14,80),new THREE.MeshBasicMaterial({wireframe:true,color:0x56564c,transparent:true,opacity:.12,depthWrite:false}));group.add(wire);
let mx=0,my=0,running=true,previous=0;
function resize(){let w=host.clientWidth,h=host.clientHeight;if(w<1||h<1)return;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false);}
new ResizeObserver(resize).observe(host);resize();
window.addEventListener('pointermove',e=>{mx=(e.clientX/innerWidth-.5)*.45;my=(e.clientY/innerHeight-.5)*.3},{passive:true});
const visibility=new IntersectionObserver(es=>{running=es[0]?.isIntersecting??true},{threshold:0});visibility.observe(host);
function frame(t){requestAnimationFrame(frame);if(!running||document.hidden||t-previous<25)return;previous=t;group.rotation.y+=(mx-group.rotation.y)*.018;group.rotation.x+=(my-group.rotation.x)*.018;cloud.rotation.z+=.0005;wire.rotation.z-=.0002;renderer.render(scene,camera)}requestAnimationFrame(frame);
}catch(e){if(renderer)renderer.dispose();host.style.display='none'}
}
