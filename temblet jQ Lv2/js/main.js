$(function () {

    // Cash Variables 
    let myLanding = $('.landing');
    let myLandingArea = $(".landing-area");

    // adjust landing height 
    myLanding.height($(window).height());
    myLandingArea.css('marginTop', ($(window).height() - (myLandingArea.height())) / 2);

    $(window).resize(function () {
        let windowHeight = $(window).height();

        myLanding.height(windowHeight);
        myLandingArea.css('marginTop', (windowHeight - (myLandingArea.height())) / 2);
    });


    // add Active Class to Active Link And Remove this from another Siblings********************
    let navLink = $('.navbar .links li a');
    navLink.click(function () {
        $('.navbar .links li a').removeClass('active')
        $(this).addClass('active');
    })
    $('.overlay , .landing-area').click(function () {
        navLink.removeClass('active');
    });



    console.log(($(window).height() - myLandingArea.height()) / 2);

    // Smooth Scroll
    $('.navbar .links li a').click(function () {
        $('html , body').animate({
            scrollTop: $(`#${$(this).data('link')}`).offset().top
        }, 500)
    })


    //Slider auto

    $(function changeSlider() {
        $('.slider .active-slider').each(function () {
            if (!$(this).is(":last-child")) {
                $(this).delay(1000).fadeOut(1000, function () {
                    $(this).removeClass('active-slider').next().addClass('active-slider').fadeIn(1000);
                    changeSlider();
                });
            } else {
                $(this).delay(1000).fadeOut(1000, function () {
                    $(this).removeClass('active-slider');
                    $('.slider .client-comment').eq(0).addClass('active-slider').fadeIn(1000);
                    changeSlider();
                })
            }
        });
    }());

    // Active shuffel
    $('.projects .shuffel-container li').click(function () {

        $(this).addClass('active-shuffle').siblings().removeClass('active-shuffle');

        //another way
        // $(".projects .shuffel-container li").removeClass('active-shuffle');
        // $(this).addClass('active-shuffle');


    })

    // trigger MixItUp
    jQuery(function () {
        jQuery('#Container').mixItUp({
            targetSelector: '.item',
            transitionSpeed: 450
        });
    });


    $(function () {
        $("html").niceScroll({
            cursorcolor: "var(--main-color)",//Change the scroll bar color,
            cursorwidth: '15px',

            background: '#aaa',
            cursorborder: "none"

        });;
    });

});