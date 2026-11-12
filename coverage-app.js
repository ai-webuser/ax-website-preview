const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label','Open navigation');
}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');document.querySelector('.nav-dropdown').open=false;}});
const form=document.querySelector('#quote-form');
const status=document.querySelector('#form-status');
function enquiry(){
 const data=new FormData(form);
 const entries=[['Name','name'],['Company','company'],['Locations to connect','location'],['Bandwidth','bandwidth'],['Requirements','requirements']];
 return 'Hello Axclusive, I would like a Singapore connectivity availability check.\n\n'+entries.map(([label,key])=>data.get(key).trim()?label+': '+data.get(key).trim():'').filter(Boolean).join('\n');
}
form.addEventListener('submit',e=>{
 e.preventDefault();
 const target='https://wa.me/6560111719?text='+encodeURIComponent(enquiry());
 window.open(target,'_blank','noopener,noreferrer');
 status.textContent='Review your enquiry in WhatsApp, then send it when you are ready.';
});
document.querySelector('#copy-enquiry').addEventListener('click',async()=>{
 if(!form.reportValidity())return;
 try{await navigator.clipboard.writeText(enquiry());status.textContent='Enquiry copied. You can paste it into your preferred message to Axclusive.';}
 catch{status.textContent='Copy is unavailable in this browser. Please continue in WhatsApp or use the website contact form.';}
});
document.querySelector('#year').textContent=new Date().getFullYear();

const dcSearch=document.querySelector('#dc-search');
const dcCards=[...document.querySelectorAll('.dc-card')];
dcSearch.addEventListener('input',()=>{const terms=dcSearch.value.toLowerCase().trim().split(/\s+/).filter(Boolean);let count=0;dcCards.forEach(card=>{const show=terms.every(t=>card.dataset.search.includes(t));card.hidden=!show;if(show)count++;});document.querySelector('#dc-count').textContent=count+' of '+dcCards.length+' entries';document.querySelector('#dc-empty').hidden=count!==0;});
document.querySelectorAll('.location-link').forEach(a=>a.addEventListener('click',()=>{const input=form.elements.location;const value=a.dataset.location;if(!input.value.includes(value))input.value=input.value?input.value+'; '+value:value;input.focus({preventScroll:true});}));
