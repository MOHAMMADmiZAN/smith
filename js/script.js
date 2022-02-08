(function (){
    //skill-counter-part start//
    $('.up').counterUp({
        delay: 10,
        time: 2500
    });
//skill-counter-part End//
///portfolio-part-start////
    $(document).ready(() => {
        $('.venobox').venobox(
            {
                spinner: 'wandering-cubes',
                framewidth: '800px',
                frameheight: '800px',
                border: '10px',
                share: [],
                infinigall: true,
                closeColor: '#fff',
                numeratio: true,
            }
        );
    });
///pro-slider-part////
    $('.pro-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<i class="fas fa-angle-double-left prev"></i>',
        nextArrow: '<i class="fas fa-angle-double-right next"></i>',
        centerMode: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    fade: true,
                    arrows: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

///Test-part-End////
    $('.feed-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        autoplay: true,
        autoplaySpeed: 2000,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    autoplay: true,
                    autoplaySpeed: 2000,
                    focusOnSelect: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    autoplay: true,
                    autoplaySpeed: 2000,
                    focusOnSelect: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    autoplay: true,
                    autoplaySpeed: 2000,
                    focusOnSelect: true,
                    fade: true,

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

///test-part-End////

/// variables////
    const win = $(window);
    const html_body = $('html, body');
    const stk = $('.st-menu');

    const c_stk = 'sticky';
    const bdy = $('body');


//stiky-header//
    win.scroll(() => win.scrollTop() > 300 ? stk.addClass(c_stk) : stk.removeClass(c_stk));
// scroolpy
    bdy.scrollspy({
        target: '.navbar',
        offset: 100
    });

// animation scroll js
    for (const nav of document.getElementsByClassName('nav-link')) {
        nav.addEventListener('click',function(){
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    html_body.animate({
                        scrollTop: target.offset().top - 0
                    }, 1500);
                    return false;
                }

            }

        })

    }



//back to top fadetoogle//
// win.scroll(() => win.scrollTop() > 100 ? b2b.fadeIn() + b2b.addClass('animate__animated animate__flip animate__slower 2s') : b2b.fadeOut());
//back to top effect//
// b2b.click(() => html_body.animate({scrollTop: 0}, 2500));
    // back to top effect//
    let b2b = document.querySelector('.back-to-top i')
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            b2b.style.cssText= `
        opacity: 1;
        transition: opacity 1s ease-in-out;
        `

        } else {
            b2b.style.cssText= `
        opacity: 0;
        transition: opacity 1s ease-in-out;
        `
        }
    })

    b2b.addEventListener('click', function () {
        html_body.animate({scrollTop: 0}, 2500);
    })



    /* always close responsive nav after click */
    $('.navbar-collapse ul li a').click(() => $('.navbar-toggler:visible').click());


//// aos animation///
    AOS.init();


// make a range function with step
    function range(start, end, step) {
        let range = [];
        for (let i = start; i <= end; i += step) {
            range.push(i);
        }
        return range;
    }






})()

