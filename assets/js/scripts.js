(function($) {
    "use strict";
    /*********************************
     * Table of Context
     * *******************************
     * 
    /* Preloader
    /* Sticky Navbar
    /* Click Scroll Action
    /* Scroll Top Bar
    /* Mobile Menu Flyout Menu
    /* Counter Up
    /* Dynamic Feature Background
    /* Progress Bar
    /* Testimonial Slider
    /* Testimonial Slider2
    /* Aos Animation
    *********************************/

    /*********************************
    /* Preloader Start
    *********************************/
    $(window).on("load", function() {
        $(".preloader").fadeOut(500);
    });

    /*********************************
    /* Sticky Navbar
    *********************************/
    $(window).scroll(function() {
        var scrolling = $(this).scrollTop();
        var stikey = $(".header-sticky");

        if (scrolling >= 50) {
            $(stikey).addClass("nav-bg");
        } else {
            $(stikey).removeClass("nav-bg");
        }
    });

    /*********************************
    /* Click Scroll Action
    ********************************/
    $(".header__menu .main__menu a").on("click", function(e) {
        var target = this.hash,
            $target = $(target);

        $("html, body")
            .stop()
            .animate({
                    scrollTop: $target.offset().top - 70,
                },
                100,
                "swing",
                function() {
                    window.location.hash = target;
                }
            );
    });

    /*********************************
    /*  Scroll Top Bar
    *********************************/
    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".scroll-to-target").removeClass("open");
        } else {
            $(".scroll-to-target").addClass("open");
        }
    });

    if ($(".scroll-to-target").length) {
        $(".scroll-to-target").on("click", function() {
            var target = $(this).attr("data-target");
            // animate
            $("html, body").animate({
                    scrollTop: $(target).offset().top,
                },
                500
            );
        });
    }

    /*********************************
    /*  Mobile Menu Flyout Menu
    *********************************/
    $(".toggler__btn").on("click", function(event) {
        event.preventDefault();
        $(".flyoutMenu").toggleClass("active");
    });
    $(".closest__btn").on("click", function(event) {
        event.preventDefault();
        $(".flyoutMenu").removeClass("active");
    });

    $('.flyout-main__menu li a').on('click', function() {
        $('.flyoutMenu').removeClass('active');
    });

    $(document).on("click", function(e) {
        if ($(e.target).closest(".flyout__inner").length === 0 && $(e.target).closest(".toggler__btn").length === 0) {
            $(".flyoutMenu").removeClass("active");
        }
    });

    /*********************************
    /*  Counter
    *********************************/
    if ($(".counter").length > 0) {
        $(".counter").counterUp({
            delay: 10,
            time: 1000
        });
    }

    /*********************************
    /*  Dynamic Feature Background
    *********************************/
    const box = $(" [data-bg]");
    Array.from(box, (box) => {
        const bgColor = $(box).data("bg");
        $(box).css("backgroundColor", bgColor);
    });

    /*********************************
    /* Progress Bar
    *********************************/
    if ($(".profit").length > 0) {
        $(".profit").rProgressbar({
            percentage: 30,
            fillBackgroundColor: "#6FD207",
            backgroundColor: "rgba(111, 210, 7, 0.2)",
            duration: 2000,
        });
    }
    if ($(".income").length > 0) {
        $(".income").rProgressbar({
            percentage: 80,
            fillBackgroundColor: "#5793EC",
            backgroundColor: "rgba(87, 147, 236, 0.2)",
            duration: 2000,
        });
    }
    if ($(".expenses").length > 0) {
        $(".expenses").rProgressbar({
            percentage: 50,
            fillBackgroundColor: "#FFAA04",
            backgroundColor: "rgba(255, 170, 4, 0.2)",
            duration: 2000,
        });
    }
    if ($(".professional").length > 0) {
        $(".professional").rProgressbar({
            percentage: 90,
            fillBackgroundColor: "#1ecbea",
            backgroundColor: "rgba(30, 203, 234, 0.2)",
            duration: 2000,

        });
    }

    /*********************************
    /*  Testimonial Slider Carousel
    *********************************/
    if ($(".testimonial__Swiper").length > 0) {
        var swiper = new Swiper(".testimonial__Swiper", {
            direction: "horizontal",
            loop: "true",
            grabCursor: true,
            slidesPerView: "auto",
            spaceBetween: 30,
            speed: 5000,
            centeredSlides: true,
            freeMode: false,
            autoplay: {
                enabled: true,
                delay: 1,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            },
            centerInsufficientSlides: true,

            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                375: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                479: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                991: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1199: {
                    slidesPerView: 4,
                },

            },
        });
    }
    /*********************************
    /*  Testimonial Slider 2 Carousel
    *********************************/
    if ($(".testimonial__Swiper2").length > 0) {
        var swiper = new Swiper(".testimonial__Swiper2", {
            direction: "horizontal",
            loop: "true",
            grabCursor: true,
            slidesPerView: "auto",
            spaceBetween: 30,
            speed: 5000,
            centeredSlides: true,
            freeMode: false,
            autoplay: {
                reverseDirection: true,
                enabled: true,
                delay: 1,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            },
            centerInsufficientSlides: true,

            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                375: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                479: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                991: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1199: {
                    slidesPerView: 4,
                },

            },
        });
    }
    /**********************************
     *  AOS animation
     **********************************/
    AOS.init();
})(jQuery);