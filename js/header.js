$(document).ready(function(){

    var topBar = $("#topBar").offset();

    $(window).scroll(function(){
        
        var docScrollY = $(document).scrollTop()
        var barThis = $("#topBar")
        var fixNext = $("#fixNextContent")
        var navDiv = $("#nav-banner")

        if( docScrollY > topBar.top ) {
            barThis.addClass("top-bar-fix");
            navDiv.addClass("nav-none")
            fixNext.addClass("pd-top-80");
        }else{
            barThis.removeClass("top-bar-fix");
            fixNext.removeClass("pd-top-80");
            navDiv.removeClass("nav-none")
        }

    });

})