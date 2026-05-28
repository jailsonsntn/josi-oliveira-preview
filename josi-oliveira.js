// Nav scroll morphing com rAF para evitar jank
const nav=document.getElementById('nav');
let ticking=false;

function updateScrollState(){
  nav.classList.toggle('scrolled',window.scrollY>50);
  ticking=false;
}

window.addEventListener('scroll',()=>{
  if(ticking) return;
  ticking=true;
  window.requestAnimationFrame(updateScrollState);
},{passive:true});

updateScrollState();

// Scroll reveal leve: anima uma vez e remove observacao
const obs=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;

    entry.target.classList.add('visible');

    ['ideal-card','depoi-card','cta-link-item','pf-item'].forEach(cls=>{
      entry.target.querySelectorAll('.'+cls).forEach((el,i)=>{
        el.classList.add('scroll-stagger');
        el.style.setProperty('--stagger-delay',`${i*70}ms`);
      });
    });

    observer.unobserve(entry.target);
  });
},{threshold:0.14,rootMargin:'0px 0px -8% 0px'});

document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>obs.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const href=a.getAttribute('href');
    if(!href || href==='#') return;
    const t=document.querySelector(href);
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}
  });
});

