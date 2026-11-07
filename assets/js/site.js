(function(){
  const config=window.VYZCORP_COMMUNITY_CONFIG||{};
  const menuButton=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.primary-nav');
  if(menuButton&&nav){
    menuButton.addEventListener('click',()=>{const expanded=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('is-open',!expanded);});
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');}));
  }
  document.querySelectorAll('[data-year]').forEach(node=>node.textContent=String(new Date().getFullYear()));
  const invite=(config.discordInviteUrl||'').trim();
  document.querySelectorAll('[data-discord-link]').forEach(link=>{
    const status=document.querySelector('[data-discord-status]');
    if(invite){link.href=invite;link.target='_blank';link.rel='noopener noreferrer';link.classList.remove('button-disabled');link.removeAttribute('aria-disabled');link.setAttribute('aria-label','Join the VYZCORP Discord community (opens in a new tab)');}
    else{link.href='#discord';link.classList.add('button-disabled');link.setAttribute('aria-disabled','true');link.addEventListener('click',event=>{event.preventDefault();if(status)status.textContent='The Discord invite has not been published yet. The community link will appear here when it is ready.';});}
  });
  if('IntersectionObserver'in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.12});
    document.querySelectorAll('[data-reveal]').forEach(node=>{node.classList.add('will-reveal');observer.observe(node);});
  }
})();
