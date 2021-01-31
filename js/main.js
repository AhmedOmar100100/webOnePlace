/* var lastScrollTop = 0;
$(window).scroll(function(event){​​
    var st = $(this).scrollTop();
    if (st > lastScrollTop){​​
        // downscroll code
    }​​ else {​​
       // upscroll code
    }​​
    lastScrollTop = st;
 }​​);

*/

/*initialize wow .js lib */
new WOW().init();
/*initialize wow .js lib */

$(function() {
    'use strict';
    //controlling slider height
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();

    $('.slider,.carousel-item').height(winH - (upperH + navH));
});


//shuffle images
// $(document).ready(function() {

//     $(".filter-button").click(function() {
//         var value = $(this).attr('data-filter');

//         if (value == "all") {
//             //$('.filter').removeClass('hidden');
//             $('.filter').show('1000');
//         } else {
//             //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//             //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
//             $(".filter").not('.' + value).hide('3000');
//             $('.filter').filter('.' + value).show('3000');

//         }
//     });

//     if ($(".filter-button").removeClass("active")) {
//         $(this).removeClass("active");
//     }
//     $(this).addClass("active");

// });
//end shuffle images



//start function of loader in main page

function dis() {
    var loader;
    loader = document.getElementsByClassName("spinner-container")[0];
    setTimeout(() => {
        loader.setAttribute("style", "display:none");

    }, 1000);
};
dis();
//end function of loader in main page

// start scroll to top button
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 60) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });
    $('#topBtn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
});
// end scroll to top button