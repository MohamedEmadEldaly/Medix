/*global console,$,jquery*/ 
$(document).ready(function (){

    'use strict';

    // navigation button active

    $('.navbar-toggle').on("click", function () {
        $(this).toggleClass('active');
    });

    // close nav when click some where else 
    

    //revoluation slider
    $('.tp-banner').revolution(
     {
         delay:9000,
         startwidth:1170,
         startheight:500,
         hideThumbs:10,
         fullWidth:"on",
         onHoverStop:"off",
         navigationStyle:"round",
         navigationHAlign:"center",
         autoHeight:"on"
     });

     //counters
     var flag = 1;     
     $(window).scroll(function (){
         if ($(window).scrollTop() > $('.statistic').offset().top - 400 && flag === 1){

            $('.counter').countTo({
                refreshInterval: 10
             });

             flag = 0;
         }
     });

     //slick
     $('.testmonial').slick({
        autoplay : true,
        autoplaySpeed : 4000,			
        nextArrow : '<span class="fas fa-chevron-right"></span>',
        prevArrow : '<span class="fas fa-chevron-left"></span>'
      

        

        



     });



});