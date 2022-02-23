//     =============

//     Components: Buttons

//     =============

const learnMoreBtn = document.querySelector('.learn-button');
const mobileMenuBtn = document.getElementById('menu--button');
const closeMenuBtn = document.getElementById('close--button');
const mainNav = document.querySelector('.nav--items');
const mobileNav = document.querySelector('.mobile-nav--items');

function toggleMobileNav() {
  let element = document.getElementById('mobile-navigation');

  element.classList.toggle('mobile-navigation__open');
  document.querySelector('#container').classList.toggle('dim');
}

function setActive(currentNav) {
  aObj = currentNav.getElementsByClassName('nav--item');

  for (i = 0; i < aObj.length; i++) {
    if (document.location.href === aObj[i].href) {
      aObj[i].classList.add('active');
    }
  }
}
setActive(mobileNav);
setActive(mainNav);

mobileMenuBtn.onclick = () => toggleMobileNav();
closeMenuBtn.onclick = () => toggleMobileNav();

function smoothScroll(el) {
  el.onclick = () => {
    document
      .querySelector('.section--about')
      .scrollIntoView({ behavior: 'smooth' });
  };
}
if (learnMoreBtn) smoothScroll(learnMoreBtn);
