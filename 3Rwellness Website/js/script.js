let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

/*Home page background*/
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    centeredSlides: true,
    speed: 2000, 
    autoplay: {
        loop: true,
        delay: 5000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      delay: 5000
    },
    autoplay: {
        disableOnInteraction: false,
    },
});