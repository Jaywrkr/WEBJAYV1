(function(){
const toast=document.getElementById('jay-toast'),drawer=document.getElementById('secret-drawer'),counter=document.getElementById('secret-counter'),list=document.getElementById('secret-list'),quote=document.getElementById('secret-quote');
if(!toast||!drawer)return;
const secrets=[['logo','The logo has a secret.'],['quote','Words change when you revisit them.'],['lab','You looked behind the project.'],['footer','The end is another beginning.'],['keys','Keyboard curiosity.']];
const found=new Set();let toastTimer=0,logoClicks=0,typed='';
function notify(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2400)}
function discover(id,message){if(found.has(id))return;found.add(id);counter.textContent='DISCOVERIES '+found.size+' / '+secrets.length+' ✳';render();notify(message||'DISCOVERY UNLOCKED');if(found.size===secrets.length)notify('ALL SECRETS FOUND. YOU LOOKED CLOSER.')}
function render(){list.innerHTML='';secrets.forEach(([id,label],i)=>{const li=document.createElement('li');li.className=found.has(id)?'found':'';li.textContent=(i+1).toString().padStart(2,'0')+' / '+(found.has(id)?label:'???');list.appendChild(li)})}
function open(){drawer.hidden=false;document.getElementById('secret-close').focus()}function close(){drawer.hidden=true;counter.focus()}
counter.addEventListener('click',open);document.getElementById('secret-close').addEventListener('click',close);drawer.addEventListener('click',e=>{if(e.target===drawer)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!drawer.hidden)close()});
const logo=document.querySelector('.brand');logo?.addEventListener('click',()=>{logoClicks++;if(logoClicks===4){discover('logo','NOT EVERYTHING NEEDS A BUTTON.');logoClicks=0}});
const quotes=['No todo lo que vale la pena entender necesita una respuesta.','A veces lo que buscas aparece cuando dejas de buscarlo.','La curiosidad no tiene un destino.'];
let qi=0;quote.addEventListener('click',()=>{qi=(qi+1)%quotes.length;quote.textContent=quotes[qi];discover('quote','SAME PLACE. DIFFERENT THOUGHT.')});
document.querySelectorAll('.lab-card').forEach(card=>card.addEventListener('dblclick',e=>{e.preventDefault();discover('lab','DOUBLE CLICK. DOUBLE TAKE.')}));
document.getElementById('hidden-message')?.addEventListener('click',()=>discover('footer','YOU FOUND THE LAST LINE.'));
document.addEventListener('keydown',e=>{if(e.ctrlKey||e.metaKey||e.altKey||['INPUT','TEXTAREA'].includes(document.activeElement?.tagName))return;typed=(typed+e.key.toLowerCase()).slice(-8);if(typed.endsWith('curious'))discover('keys','YOU TYPED CURIOUS. THAT SAYS A LOT.')});
document.querySelectorAll('[data-reveal]').forEach(el=>{const text=el.textContent;el.textContent='';el.classList.add('letter-reveal');[...text].forEach(ch=>{const s=document.createElement('span');s.textContent=ch===' '?'\u00a0':ch;el.appendChild(s)})});
render();
})();