$(document).ready(function(){
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
})

$(document).ready(function(){
    $('.left-block__slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        infinite: true,
        swipe: true,
        fade: true,
        asNavFor: '.slider-block',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }]
    })
    $('.slider-block').slick({
        arrows: true,
        slidesToShow: 3,
        infinite: true,
        draggable: true,
        asNavFor: '.left-block__slider',
    });
})

$(document).ready(function(){
    $('.feedback__popup').magnificPopup({
        closeBtnInside: true,
        closeOnBgClick: true,
    });
})

$(document).ready(function(){
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


$(document).ready(function(){
    $('.popup__data').submit(function(event){
        event.preventDefault();

        

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function(){
                $.magnificPopup.open({
                    items: {
                        src: '#check',
                        type: 'inline'
                    }
                })
            },
        });
    });
});  