$(document).ready(function(){function e(){var e=document.getElementById("map"),t={center:new google.maps.LatLng(46.4699,30.72718),zoom:17,scrollwheel:!1,disableDefaultUI:!0,mapTypeId:google.maps.MapTypeId.ROADMAP},n=new google.maps.Map(e,t),l=new google.maps.LatLng(46.4699,30.72718);new google.maps.Marker({position:l,map:n,title:"вул. Мечникова, 108"})}$("body").removeClass("no-js"),$('a[href="#"]').on("click",function(e){e.preventDefault()}),$("input[placeholder], textarea[placeholder]").placeholder(),$(".menu-toggle").on("click",function(e){e.preventDefault(),$(".navigation").toggleClass("open")}),$(".reviews-slider").slick({infinite:!0,speed:300,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),google.maps.event.addDomListener(window,"load",e);for(var t=document.getElementsByClassName("accordion-btn"),n=0;n<t.length;n++)t[n].onclick=function(){this.classList.toggle("active"),this.nextElementSibling.classList.toggle("show")};for(var l=document.getElementsByClassName("tooltip-btn"),n=0;n<l.length;n++)l[n].onclick=function(e){e.preventDefault(),this.classList.toggle("active"),this.nextElementSibling.classList.toggle("active")};for(var o=document.getElementsByClassName("font-style-btn"),n=0;n<o.length;n++)o[n].onclick=function(e){e.preventDefault(),this.classList.toggle("active")};var s=(document.getElementsByClassName("counter-btn"),$(".copies-counter-input")),a=$(".fields-counter-input");$(".copies-minus-btn").on("click",function(e){e.preventDefault();var t=parseInt(s.val());t>1&&t--,s.val(t)}),$(".copies-plus-btn").on("click",function(e){e.preventDefault();var t=parseInt(s.val());t<1e3&&t++,s.val(t)}),$(".fields-minus-btn").on("click",function(e){e.preventDefault();var t=parseInt(a.val());t>0&&t--,a.val(t)}),$(".fields-plus-btn").on("click",function(e){e.preventDefault();var t=parseInt(a.val());t<1e3&&t++,a.val(t)})}),$(window).load(function(){});