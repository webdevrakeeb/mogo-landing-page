jQuery(document).ready(function(){
    //mobile menu icon
    jQuery(".mobile-menu-icon i").click(function(){
        jQuery(this).toggleClass("fa-solid, fa-xmark");
        jQuery(".menu-area").slideToggle();
    });

    jQuery(window).resize(function(){
        const winWidth = jQuery(window).width();
        if(winWidth >= 768) {
            jQuery(".menu-area").removeAttr("style");
        }
    });

    //counter up 
    jQuery('.countup').CountUpCircle({
        duration: 1000,
        opacity_anim: false,
        step_divider: 5
    });

    //owl carousel 
    jQuery(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        loop: true,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>']
    });

    //accordion
    jQuery(".faq").accordion();

    //footer year js
    const date = new Date();
    const year = date.getFullYear();
    jQuery("#full-year").text(year);

    //scroll to top js
    jQuery('body').materialScrollTop({
        duration: 1000,
    });

      










})