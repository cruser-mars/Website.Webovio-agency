;(function() {
 headerPage = document.querySelector('.header');


 window.addEventListener('scroll', function() {
if (window.pageYOffset > 0) {
    headerPage.classList.add('is-active-scroll');
} else {
    headerPage.classList.remove('is-active-scroll');
}
 });

})();