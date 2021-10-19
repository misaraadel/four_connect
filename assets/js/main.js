$(document).ready(function () {
    /*start the loading page */
    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });
   //scroll to top make fade for button
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });  
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-btn").addClass('acitve');
        } else {
            $(".scroll-top-btn").removeClass('acitve');
        }
    });
    //scroll to top button
    $(".scroll-top-btn").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
    //start active navbar
    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('.navbar-nav').toggleClass('active-nav');
        $('body').toggleClass('overflowNone')
    });
    $('.add-popup').click(function(){
        $('.poup-window').addClass('acitve-popup');
        $('body').addClass('overflowNone');
    });
    $('.close-popup-window').click(function(){
        $('.poup-window').removeClass('acitve-popup');
        $('body').removeClass('overflowNone');
    });
    //brand slider 
    $('.owl-brand-data').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:false,
        dots: false,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 4000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });
    //brand slider 
    $('.owl-brand').owlCarousel({
        loop:true,
        margin: 20,
        nav:false,
        center: true,
        dots: false,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 4000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:7
            }
        }
    });
});