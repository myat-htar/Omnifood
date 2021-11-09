$(document).ready(function(){
    $('.js--section-feature').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '30%'
    });

//Scroll button effect
    $('.js--btn-full').click(function(){
        $('html, body').animate({ scrollTop: $('.js--plan-section').offset().top}, 2000);
    });
    $('.js--btn-stroke').click(function(){
        $('html, body').animate({ scrollTop: $('.js--section-feature').offset().top}, 1000);
    });

//animate effect with animate.css

    // $('.js--wp-1').waypoint(function(direction){
    //     $('.js--wp-1').addClass('animated backInLeft');
    // }, {
    //     offset: '50%'
    // });

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated animate__fadeInUpBig');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated animate__fadeIn');
    }, {
        offset: '50%'
    })

//mobile nav
    $('.js--mobile-nav-icon').click(function(){
        $('.js--main-nav').slideToggle(200);
        if($('.js--mobile-nav-icon i').hasClass('im-menu')){
            $('.js--mobile-nav-icon i').addClass('im-x-mark');
            $('.js--mobile-nav-icon i').removeClass('im-menu');
        }
        else{
            $('.js--mobile-nav-icon i').addClass('im-menu');
            $('.js--mobile-nav-icon i').removeClass('im-x-mark');
        }

        $('.sticky .js--main-nav').click(function(){
            $('.sticky .js--main-nav').hide(400);
            $('.js--mobile-nav-icon i').addClass('im-menu');
            $('.js--mobile-nav-icon i').removeClass('im-x-mark');
        })
    })
    $('.sticky .js--main-nav').click(function(){
        $('.sticky .js--main-nav').css("display", "none");
        $('.js--mobile-nav-icon i').addClass('im-menu');
        $('.js--mobile-nav-icon i').removeClass('im-x-mark');
        // if($('.js--mobile-nav-icon i').hasClass('im-menu')){
        //     $('.js--mobile-nav-icon i').addClass('im-x-mark');
        //     $('.js--mobile-nav-icon i').removeClass('im-menu');
        // }
        // else{
        //     $('.js--mobile-nav-icon i').addClass('im-menu');
        //     $('.js--mobile-nav-icon i').removeClass('im-x-mark');
        // }
    })

//Smooth scroll nav link
    //From css-tricks.com/snippets/jquery/smooth-scrolling/ -> Smooth Scroll with jQuery

        // Select all links with hashes
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
            ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                scrollTop: target.offset().top
                }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
                });
            }
            }
        });
});
// Sign-up-modal
$('.sign-up-btn').click(function(){
    $(".modal-overlay").fadeIn(300);
    $(".sign-up-modal").fadeIn(500);
});
$('.sign-up-modal .large-icon').click(function(){
    $(".modal-overlay").fadeOut(500);
    $(".sign-up-modal").fadeOut(500);
})
