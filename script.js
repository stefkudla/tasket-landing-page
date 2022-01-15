//     =============

//     Components: Buttons

//     =============

const learnMoreBtn = document.querySelector('.learn-button');
const mobileMenuBtn = document.getElementById('menu--button');
const closeMenuBtn = document.getElementById('close--button');

function toggleMobileNav() {
  let element = document.getElementById('mobile-navigation');

  element.classList.contains('mobile-navigation__open')
    ? element.classList.remove('mobile-navigation__open')
    : element.classList.add('mobile-navigation__open');
}
mobileMenuBtn.onclick = () => toggleMobileNav();
closeMenuBtn.onclick = () => toggleMobileNav();

learnMoreBtn.onclick = () => {
  document
    .querySelector('.section--about')
    .scrollIntoView({ behavior: 'smooth' });
};
