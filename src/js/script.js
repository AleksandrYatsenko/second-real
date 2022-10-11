//  ----------- Up -------------
const elemUp = document.querySelector('.up');
window.addEventListener('scroll', () => {
  if(window.scrollY >= 1300) {
    elemUp.classList.remove('hidden');
  } else if (window.scrollY <= 1300) {
    elemUp.classList.add('hidden');
  }
});