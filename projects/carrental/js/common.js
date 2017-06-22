$(document).ready(function() {

	//Верхнее меню
	$(".top-menu-button").click(function() {
		$(".top-menu ul").slideToggle();
	});

	//Меню услуг
	$(".services-item-wrapper ul").each(function() {
		$(this).after("<div class='services-item-wrapper-after'></div>");
	});
	$(".services-toggle").click(function() {
		if($(this).parent().children("ul").is(":visible")) {
		$(this).parent().children("ul").slideUp();
		$(this).parent().children(".services-item-wrapper-after").hide();
	} else {
		$(".services .services-item-wrapper > ul, .services-item-wrapper-after").hide();
		$(".services-item-wrapper").removeClass("active");
		$(this).parent().addClass("active");
		$(this).parent().children("ul").slideDown();
		$(this).parent().children(".services-item-wrapper-after").show();
		}
	});

	//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".catalog-item"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Анимация
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(500).fadeOut("slow");

  $("h1").animated("slideInLeft", "fadeOut");
  $(".car-description").animated("flipInX", "fadeOut");
  $(".info-button-wrapper").animated("slideInRight", "fadeOut");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));
	
});
