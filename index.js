$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 580) {
            $("#nav").css("background", "#303960");
        }
        else {
            $("#nav").css("background", "transparent");
        }
    })
})

