$(window).scroll(function () {
    let sectionTop = $("#about").offset().top;
    let Top = $(window).scrollTop();

    if (Top > sectionTop - 5) {
        $(".navbar-cstm").css("background-color", "white");
        $(".ul-cstm li a").addClass("text-black");
        $("#logoImg").attr("src", "images/logo-dark.png");
        $(".navbar-toggler i").addClass("toggler-black"); // Add black color to toggler
    } else {
        $(".navbar-cstm").css("background-color", "transparent");
        $(".ul-cstm li a").removeClass("text-black");
        $("#logoImg").attr("src", "images/logo-light.png");
        $(".navbar-toggler i").removeClass("toggler-black"); // Revert toggler color to default
    }
});
