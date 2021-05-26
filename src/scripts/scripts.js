console.log('%cTODO. 🍻', 'font-size: 20px; font-weight: bold')

$(window).on('load', function () {
    function fadeIn() {
        var windowBottom = $(window).scrollTop() + $(window).innerHeight()

        $('.fadeIn').each(function () {
            var objectBottom = $(this).offset().top
            /* If the begin of element is within bounds of the window, fade it in */
            if (objectBottom + 100 < windowBottom) { // object comes into view (scrolling down)
                $(this).fadeTo(1000, 1)
            }
        })
    }
    $(window).scroll(function () { fadeIn() }) // fade elements on scroll

    // $(window).scroll(function () {
    //     if ($(window).scrollTop() > 10) {
    //         $('.headerNote').show()
    //         $('nav').addClass('withHeaderNote')
    //     } else {
    //         $('.headerNote').hide()
    //         $('nav').removeClass('withHeaderNote')
    //     }
    // })

    $('.menu').click(function () {
        $('nav > ul').toggleClass('mobile')
    })

    $('nav > ul > li > a ').click(function () {
        $('nav > ul').removeClass('mobile')
    })

    $('.eventTitle').click(function () {
        $(this).toggleClass('open')
        $(this).next('.desc').slideToggle(300)
    })
})
