var menuBtn = document.getElementsByClassName('menu-btn')[0];
var mobileMenu = document.getElementsByClassName('mobile-menu');

var clickedBtn = function() {
    mobileMenu[0].classList.toggle('active');
}

menuBtn.addEventListener('click', clickedBtn);