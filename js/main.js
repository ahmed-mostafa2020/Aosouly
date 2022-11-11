// $(function() {
//     'use strict';
//     // adjust slider height
//     var winH   = $(window).height(),
//         upperH = $('.upper-bar').innerHeight(),
//         navH   = $('.navbar').innerHeight();
//         $('.slider , .carousel-item ').height(winH - ( upperH + navH ));
// });


 // nav bar
 $('.navbar-nav li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');


// nice scroll
$("html").niceScroll();
}); 