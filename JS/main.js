$(window).scroll(function () {
    let sectionTop = $("#about").offset().top;
    let Top = $(window).scrollTop()
    if(Top > sectionTop - 5){
        $(".navbar-cstm").css("background-color" , "white")
        $(".ul-cstm li a").addClass("text-black")
        $("#logoImg").attr("src" , "images/logo-dark.png")
    } 
    else{
        $(".navbar-cstm").css("background-color" , "transparent")
        $(".ul-cstm li a").removeClass("text-black")
        $("#logoImg").attr("src" , "images/logo-light.png")
    }
})

$(".navbar .nav-link").click(function(){
    let hrefval = $(this).attr("href")
    let sectionTop = $(hrefval).offset().top;
    $("html , body").animate({scrollTop : sectionTop} , {duration : 2000 , queue : false })
})