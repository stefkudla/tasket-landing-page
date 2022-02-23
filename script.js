//     =============

//     Components: Buttons

//     =============

const learnMoreBtn = document.querySelector('.learn-button');
const mobileMenuBtn = document.getElementById('menu--button');
const closeMenuBtn = document.getElementById('close--button');
const ctaBtn = document.querySelector('.cta-button');
const mobileNavigation = document.querySelector('#mobile-navigation');
const mainNav = document.querySelector('.nav--items');
const mobileNavLinks = document.querySelector('.mobile-nav--items');
const CtaForm = document.querySelector('.cta-form-card-container');

//     =============

//     Function: Navigation Menus

//     =============

function toggleMobileNav() {
  mobileNavigation.classList.toggle('mobile-navigation__open');
  document.querySelector('#container').classList.toggle('dim');
}

window.addEventListener('click', function (e) {
  if (!mobileNavigation.classList.contains('mobile-navigation__open')) return;
  if (document.querySelector('.fa-reorder').contains(e.target)) return;
  if (!mobileNavigation.contains(e.target)) {
    toggleMobileNav();
  }
});

mobileMenuBtn.onclick = () => toggleMobileNav();
closeMenuBtn.onclick = () => toggleMobileNav();

function setActive(currentNav) {
  aObj = currentNav.getElementsByClassName('nav--item');

  for (i = 0; i < aObj.length; i++) {
    if (document.location.href === aObj[i].href) {
      aObj[i].classList.add('active');
    }
  }
}
setActive(mobileNavLinks);
setActive(mainNav);

//     =============

//     Function: CTA-Buttons

//     =============

function openCtaModal() {
  CtaForm.classList.add('show-modal');
  document.querySelector('#container').classList.toggle('dim');
  document.body.classList.add('fixed');
}

function closeCtaModal() {
  CtaForm.classList.remove('show-modal');
  document.querySelector('#container').classList.toggle('dim');
  document.body.classList.remove('fixed');
}

// window.addEventListener('click', function (e) {
//   // if (!CtaForm.classList.contains('show-modal')) console.log('ok');
//   if (
//     CtaForm.classList.contains('show-modal') &&
//     !document.querySelector('.cta-form').contains(e.target)
//   ) {
//     closeCtaModal();
//   }
// });

function smoothScroll(el) {
  el.onclick = () => {
    document
      .querySelector('.section--about')
      .scrollIntoView({ behavior: 'smooth' });
  };
}

document.location.pathname === '/index.html' && smoothScroll();
document.location.pathname === '/' && smoothScroll();
