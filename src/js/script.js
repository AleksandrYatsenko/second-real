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

// function toggleBurger () {
//   burger.classList.toggle('header__burger_active');
//   navBlock.classList.toggle('header__nav_active');
// };
function openBurger() {
  burger.classList.add('header__burger_active');
  navBlock.classList.add('header__nav_active');
  undlayForNav.style.display = 'block';
}
function closeBurger() {
  navBlock.classList.remove('header__nav_active');
  burger.classList.remove('header__burger_active');
  undlayForNav.style.display = 'none';
}
burger.addEventListener('click', (e) => {
  console.log(e.target);
  if (!burger.classList.contains('header__burger_active')) {
    openBurger();
  }
});

header.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('header__burger_active') || target.classList.contains('underlayerForNav') || target == headerButton) {
    closeBurger();
    console.log(target);
  }
});

// burgerSpans.forEach(item => {
//   item.addEventListener('click', toggleBurger);
// });
// burgerSpans.forEach(item => {
//   item.addEventListener('click', closeBurger);
// })

navItems.forEach(item => {
  item.addEventListener('click', closeBurger);
});

