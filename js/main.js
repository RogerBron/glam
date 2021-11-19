window.addEventListener('DOMContentLoaded', function() {

  // Работа кнопки наверх
  const scrollBtn = document.querySelector('.footer__btn');
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // прокрутка меню
  const menu = document.querySelector('.header__menu')
  window.addEventListener('scroll', () => {
    if (window.pageYOffset < 600) {
      menu.classList.add('position-relative');
      menu.classList.remove('position-fixed', 'bg-black');
      menu.style.width = 'unset';
      menu.style.top = 'auto';
    } else {
      menu.classList.add('position-fixed', 'bg-black');
      menu.classList.remove('position-relative');
      menu.style.width = '960px';
      menu.style.top = '0';
    }
  },
  { passive: true });
});

