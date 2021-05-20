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
})
