$(function() {

    $('ul.benefits__list').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.benefits__row').removeClass('active').eq($(this).index()).addClass('active');
    });

});
document.addEventListener("DOMContentLoaded", function( ) {
    let header = document.querySelector(".header")
    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY
        if (scrollPosition  > 900){
            header.style.background = "white"
        }
        else{
            header.style.background = "#ffdad5"
        }
    })
})

let burger = document.querySelector('.header__burger')
let burgerMenu = document.querySelector('.header__burgerMenu')

burger.addEventListener('click',() => {
    burger.classList.toggle("active")
    burgerMenu.classList.toggle("active")
})