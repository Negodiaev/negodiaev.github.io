$(document).ready(function() {

	//Выпадающее меню
	$(".main-menu-button").click(function() {
		// $(".main-menu ul").slideToggle();
		$(".menu-line").toggleClass("open");
	});

	// Скролл к секции
	$(".main-menu a").mPageScroll2id({
		scrollSpeed : 1500
	});

	//Всплывающие окна
	$(".popup").magnificPopup({type:"image"});
	$(".popup-content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".service-item").each(function(i) {
		$(this).find("a").attr("href", "#project_" + i);
		$(this).find(".service-description").attr("id", "project_" + i);
	});

	//Секция портфолио
	// $("#portfolio-grid").mixItUp();

	$(".works li").click(function() {
		$(".works li").removeClass("active");
		$(this).addClass("active");
	});

	$(".works-item").each(function(i) {
		$(this).find("a").attr("href", "#projct_" + i);
		$(this).find(".work-description").attr("id", "projct_" + i);
	});
	
	//Отправка формы
	$("input, select, textarea").jqBootstrapValidation();
	
	//Анимация
	$(".advantage-item").animated("fadeInLeft", "fadeOut");
	// $(".service-item").animated("fadeInRight", "fadeOut");
	$(".works-item").animated("fadeIn", "fadeOut");

});

//Pre-loader
$(window).load(function(){
  $(".loader-inner").fadeOut(); 
	$(".loader").delay(600).fadeOut("slow");
});
