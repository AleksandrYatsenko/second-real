document.addEventListener('DOMContentLoaded', () => {

  //  ----------- Up -------------
  const elemUp = document.querySelector('.up');
  window.addEventListener('scroll', () => {
    if(window.scrollY >= 1300) {
      elemUp.classList.remove('hidden');
    } else if (window.scrollY <= 1300) {
      elemUp.classList.add('hidden');
    }
  });

  //  -------------- burger -----------------
  const header = document.querySelector('.header'), 
        burger = document.querySelector('.header__burger'),
        navBlock = header.querySelector('.header__nav'),
        navItems = navBlock.querySelectorAll('.header__link'),
        headerButton = header.querySelector('.button'),
        undlayForNav = document.querySelector('.underlayerForNav');

  function toggleBurger() {
    burger.classList.toggle('header__burger_active');
    navBlock.classList.toggle('header__nav_active');
    undlayForNav.classList.toggle('hidden');
    document.body.classList.toggle('lock'); 
  };

  function closeBurger() {
    navBlock.classList.remove('header__nav_active');
    burger.classList.remove('header__burger_active');
    undlayForNav.classList.add('hidden');
    document.body.classList.remove('lock');

  }

  burger.addEventListener('click', toggleBurger);

  navItems.forEach(item => {
    item.addEventListener('click', closeBurger);
  });

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('underlayerForNav') || target == headerButton) {
      closeBurger();
      console.log(target);
    }
  });

});





