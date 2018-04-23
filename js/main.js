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



});