$(document).ready(function () {
    var navBar = $(".my-boo-navbar"),data = navBar.data();
    var scrolling = false,scrolledPast = false;
    $(window).scroll(function () {return scrolling = true;});
    setInterval(function () {
        if (scrolling) {
            scrolling = false;
            if ($(window).scrollTop() > 25) {
                if (!scrolledPast) {
                    scrolledPast = true;
                    navBar.removeClass(data.startcolor);
                    navBar.addClass(data.intocolor);
                }
            } else {
                if (scrolledPast) {
                    scrolledPast = false;
                    navBar.addClass(data.startcolor);
                    navBar.removeClass(data.intocolor);
                }
            }
        }
    }, 100);
    $("#sb").click(function() {
       $(".search-box").toggle();
       $("input[type='text']").focus();
     });
});
