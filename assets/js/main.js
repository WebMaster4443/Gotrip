  
  
/* Здесь мы настроили через параматеры наш слайдер

owl.owlCarousel({
    center: true, //Centrenirovanie elementa
    loop: true, //Vklyu4ili sikl
    margin: 30, // Dali otstupi
    startPosition: 1, //na4netsy s ne 0, a s 1 
    items: 3, // za raz pokazivat 3 slidera
    
}); Здесь параметры слайдера 

А вот здесь кнопки наши их классы им задали чтоб при
клике они крутились в определенную, сторону

$('.slider__btn__prev').click(function() {
    owl.trigger('prev.owl.carousel');
});


$('.slider__btn__next').click(function() {
    owl.trigger('next.owl.carousel');
});

*/

let owl = $('.owl-carousel');
owl.owlCarousel({
    center: true, //Centrenirovanie elementa
    loop: true, //Vklyu4ili sikl
    margin: 30, // Dali otstupi
    startPosition: 1, //na4netsy s ne 0, a s 1 
    items: 3, // za raz pokazivat 3 slidera


    responsive: {

        0:{
            items:1,
            
        },

        600:{
            items:2,
        },
        
        1000: {
            items:3,
            margin: 20   
        },
    }
    
});

$('.slider__btn__prev').click(function() {
    owl.trigger('prev.owl.carousel');
});


$('.slider__btn__next').click(function() {
    owl.trigger('next.owl.carousel');
});






/* ТУТ СКРИПТЫ ДЛЯ НАШЕГО МОБИЛЬНЕГО МЕНЮ */

const navBtn =  document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');



navBtn.onclick = function(){
    nav.classList.toggle('nav__mobile');
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
    
}


