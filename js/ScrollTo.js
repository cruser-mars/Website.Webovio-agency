;(function() {
let body = document.querySelector('body');

let closestAttr = function (item, attr) {
    let node = item;

    while (node) {
      let attrValue = node.getAttribute(attr);
      if (attrValue) {
        return attrValue;
      }

      node = node.parentElement;
    }

    return null;
  };


  let scroll = function(target) {
let targetTop = target.getBoundingClientRect().top;
let scrollTop = window.pageYOffset;
let targetOffsetTop = targetTop + scrollTop;
let headerOffset = document.querySelector('.header').clientHeight;
window.scrollTo(0, targetOffsetTop - headerOffset - 20);
  };

body.addEventListener('click', function(e) {
    let target = e.target;
    let scrollToItemClass = closestAttr(target, 'data-scroll-to');
    if (scrollToItemClass === null) {
        return;
    }
    e.preventDefault();
    let scrollToItem = document.querySelector('.' + scrollToItemClass);

    if (scrollToItem) {
        scroll(scrollToItem);
    }

})
})();