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
    $('.popup__phone').inputmask({
        'mask': '+7(999)-999-99-99',
    });
})

$(document).ready(function(){
    $('form').validate ({
        rules: {
            name: {
                required: true,
                minlength: 3,
            },
            phone: {
                required: true,
            },
            personal: {
                required: '#personal:unchecked',
                
            },
            agree: 'required', 
        },
        messages: {
            name: {
                required: "Поле обязательно для заполнения.",
                minlength: "Длина имени должна быть не менее {0}-x символов."
            },
            phone: {
                required: "Поле обязательно для заполнения."
            },
            personal: {
                required: "Необходимо Ваше согласие"
            }
        },
        submitHandler: function() {
            $("form").submit(function() { //Change
                var th = $(this);
                $.ajax({
                    type: "POST",
                    url: "mail.php", //Change
                    data: th.serialize()
                }).done(function() {
                    $.magnificPopup.open({
                        items: {
                            src: '#check',
                            type: 'inline'
                        }
                    });
                    setTimeout(function() {
                        // Done Functions
                        th.trigger("reset");
                    }, 1000);
                });
                return false;
            });




            // $.ajax({
            //     type: $(this).attr('method'),
            //     url: 'ajax/feedback.php',
            //     data: $(form).serialize(),
            //     contentType: false,
            //     cache: false,
            //     processData: false,
            //     success: function(){
            //         $.magnificPopup.open({
            //             items: {
            //                 src: '#check',
            //                 type: 'inline'
            //             }
            //         })
            //     }
            // });
            // return false;
        }
    });    
})
          
    

        
    
  