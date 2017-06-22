$(document).ready(function() {

	
	// Строка поиска
	$(".main-srch").click(function() {	
		$(this).fadeOut(500, function() {
		$(".search-form").removeClass("hidden");
		});
	});

	$(".search-string").focusout(function() {
		$(".search-form").addClass("hidden");
		$(".main-srch").fadeIn(500);
	});

	//Меню на маленьких экранах
	$(".main-menu-button").click(function() {
		$(".main-menu ul").slideToggle();
	});

	//Карусель
	  $(".owl-carousel").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 800,
      singleItem: true,
	    autoPlay : true,
    	stopOnHover : true
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
  });

  //Портфолио
	$(".popup").magnificPopup({type:"image"});
	$(".popup-content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".catalog-item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".catalog-descr").attr("id", "work_" + i);
	});

  //Отправка формы
	$("input").jqBootstrapValidation();
	
});

//Pre-loader
$(window).load(function(){
  $(".loader_inner").fadeOut(); 
	$(".loader").delay(600).fadeOut("slow");
});