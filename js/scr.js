$(function () {

    $(".slider").slick({
        speed: 2000,
    });

    var $mobileMenu = $(".nav-menu-mobile");
    $(".hamburger").click(function () {
        $(this).toggleClass("close-hamburger");
        $($mobileMenu).fadeToggle().removeClass("hidden").toggleClass("nav-menu-mobile_active").css("display", "grid");
    });


    if ($(document).width() <= 495) {
        $(".slick-arrow").hide();
    }
    $(window).on("resize", function () {
        if ($(document).width() <= 495) {
            $(".slick-arrow").hide();
        } else {
            $(".slick-arrow").show();
        }
    });
});
