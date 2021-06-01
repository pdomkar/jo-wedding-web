console.log('%cDoraž na 🍖 a 🍻.', 'font-size: 20px; font-weight: bold')

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

    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            // $('.headerNote').show()
            $('nav').addClass('withHeaderNote')
        } else {
            // $('.headerNote').hide()
            $('nav').removeClass('withHeaderNote')
        }
    })

    $('.menu, .menuClose').click(function () {
        $('nav').toggleClass('mobile')
    })

    $('nav > ul > li > a ').click(function () {
        $('nav').removeClass('mobile')
    })

    $('.eventTitle').click(function () {
        $(this).toggleClass('open')
        $(this).next('.desc').slideToggle(300)
    })

    refreshActiveLink()

    $(window).on('hashchange', function () {
        refreshActiveLink()
    })

    function refreshActiveLink() {
        $('nav > ul > li > a').removeClass('active')

        switch (window.location.hash.substring(1)) {
            case 'jo':
                $('.joLink').addClass('active')
                break
            case 'who':
                $('.whoLink').addClass('active')
                break
            case 'howGet':
                $('.howGetLink').addClass('active')
                break
            case 'where':
                $('.whereLink').addClass('active')
                break
            case 'what':
                $('.whatLink').addClass('active')
                break
            case 'howBe':
                $('.howBeLink').addClass('active')
                break
            case 'which':
                $('.whichLink').addClass('active')
                break
        }
    }
})
