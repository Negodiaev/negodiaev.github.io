$(document).ready(function(){function t(){$(".main_head").css("height",$(window).height())}t(),$(window).resize(function(){t()}),$(".top_menu_btn").click(function(){$(".top_menu ul").slideToggle()}),$("#portfolio_grid").mixItUp(),$(".s_portfolio li").click(function(){$(".s_portfolio li").removeClass("active"),$(this).addClass("active")}),$(".popup").magnificPopup({type:"image"}),$(".popup_content").magnificPopup({type:"inline",midClick:!0}),$(".portfolio_item").each(function(t){$(this).find("a").attr("href","#project_"+t),$(this).find(".port_descr").attr("id","project_"+t)}),$("h3").animated("fadeInDown","fadeOut"),$(".portfolio_item").animated("fadeIn"),$(".services_item").animated("fadeInLeft"),$(".s_tw p").animated("fadeInLeft"),$(".s_testimonials p").animated("fadeInRight"),$(".top_menu a").mPageScroll2id({scrollSpeed:1500}),$("input, select, textarea").jqBootstrapValidation()}),$(window).load(function(){$(".loader_inner").fadeOut(),$(".loader").delay(500).fadeOut("slow"),$("h1").animated("fadeInDown","fadeOut"),$("h2").animated("fadeInUp","fadeOut")});
