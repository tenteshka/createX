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



