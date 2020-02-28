const body = document.body;
const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');

btn.addEventListener('click', function() {
  if( modal.classList.contains('is-active') == true ) {
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    modal.classList.remove('is-active');
  }
  else {
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    modal.classList.add('is-active');
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
  }
});

modal.addEventListener('click', function() {
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  modal.classList.remove('is-active');
});

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});