;(function() {
 const burger = document.querySelector('.burger'),
 menu = document.querySelector('.menu'),
 btnClose = document.querySelector('.menu__close'),
 ScrollToSection = document.querySelector('.section-link'),
 ScrollToSectionSecond = document.querySelector('.section-started'),
 ScrollToSectionEnd = document.querySelector('.section-contacts'),
 headerPage = document.querySelector('.header');


 window.addEventListener('scroll', function() {
if (window.pageYOffset > 0) {
    headerPage.classList.add('is-active');
} else {
    headerPage.classList.remove('is-active');
}
 });

 burger.addEventListener('click', () => {
     menu.classList.add('menu--visible');
 });

 btnClose.addEventListener('click', () => {
    menu.classList.remove('menu--visible');
});

ScrollToSection.addEventListener('click', () => {
    menu.classList.remove('menu--visible');
});

ScrollToSectionSecond.addEventListener('click', () => {
    menu.classList.remove('menu--visible');
});

ScrollToSectionEnd.addEventListener('click', () => {
    menu.classList.remove('menu--visible');
});

})();