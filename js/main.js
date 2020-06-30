$(document).ready(function(){
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
})

$(document).ready(function(){
    $('.slider-block').slick({
        arrows: true,
        slidesToShow: 2,
        infinite: true,
        draggable: true,
    });
})

$(document).ready(function(){
    $('.feedback__popup').magnificPopup({
        closeBtnInside: true,
        closeOnBgClick: true,
    });
})

$(document).ready(function(){
    $('.check__popup').magnificPopup({
        closeBtnInside: true,
        closeOnBgClick: true,
    });
    
    $('.check__close').click(function() {
        $.magnificPopup.close();
    });
})

$(document).ready(function(){
    $('.mark').click(function(event){
        $('.voice__spec, .voice__triangle').toggleClass('active');
    });
    $('.spec__close').click(function() {
        $('.voice__spec, .voice__triangle').removeClass('active');
    });
})