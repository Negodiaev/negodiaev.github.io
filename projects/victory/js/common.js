$(document).ready(function() {

	//Animation
	if ($(window).width() > 991) {
		new WOW().init();
	}

	// Scroll to ID
	$(".main-menu a, .up-link, .small-menu a").mPageScroll2id({
		scrollSpeed: 1000,
		scrollEasing: "easeOutQuart"
	});

	/*** People services section ***/
	if ($(window).width() > 991) {
		$(".p-services .services-item-wrapper, .b-services .services-item-wrapper").mouseenter(function() {
			$(this).find(".service-text-wrapper").animate({"opacity": "0"}, 200);
			// $(this).find(".services-item-inner").animate({"top": "0"}, 300);
			// $(this).find(".services-item-inner").css({"background": "rgba(135, 12, 10, .8)"});
			}
		);
			
		$(".p-services .services-item-wrapper, .b-services .services-item-wrapper").mouseleave(function() {
			$(this).find(".service-text-wrapper").animate({"opacity": "1"}, 400); }
			// $(this).find(".services-item-inner").animate({"top": "-500px"}, 150);
		);

		// Parallax
		$.stellar({
			responsive: true
			// horizontalOffset: 40
		});

		/*** Google Map ***/
		$(".for-hid").mousedown(function() {
			$(".contacts-content").css({"z-index" : 1});
		});
		$(".contacts").mouseleave(function() {
			$(".contacts-content").css({"z-index" : 3});
		});

		$(".for-hid").attr({"title" : "Кликните для просмотра карты"});

	}

	if ($(window).width() < 991) {
		$(".p-services .services-item-wrapper, .b-services .services-item-wrapper").click(function() {
			$(this).find(".service-text-wrapper").animate({"opacity": "0"}, 200);
			$(this).find(".services-item-inner").animate({"top": "0"}, 300);
			// $(this).find(".services-item-inner").css({"background": "rgba(135, 12, 10, .8)"});
			}
		);
			
		$(".p-services .services-item-wrapper, .b-services .services-item-wrapper").mouseleave(function() {
			$(this).find(".service-text-wrapper").animate({"opacity": "1"}, 400); 
			$(this).find(".services-item-inner").animate({"top": "-500px"}, 150);
			}
		);

		
		$(".services-item-wrapper", "services-item-content").unbind('mouseenter'); 
		
	}
  
  /*** Carousel example ***/ 
	$("#owl-example").owlCarousel({
		items: 4,
		// autoPlay: 3000,
		navigation : true,
		navigationText : "",
		pagination : true,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [991, 2],
		itemsTablet: [767,1],
		itemsMobile : [480,1]
	});
	
	/*** Carousel navigation buttons ***/
	$(".owl-prev, .owl-next").html();
	
	/*** Modal box ***/
	$('.popup').magnificPopup({type:'image'});
	$('.popup-form').magnificPopup();

	/*** Carousel comments ***/ 
	$("#owl-comments").owlCarousel({
		singleItem: true,
		autoPlay: 5000,
		pagination: false
	});

	/*** Small menu ***/
  $(".menu-mini").click(function() {
    $(".small-menu").toggleClass("show-menu");
  });

	/*** Sending forms ***/
	$("input").jqBootstrapValidation();

	/*$("#main-form", "#second-form", "hidden-form").submit(function() { //устанавливаем событие отправки для формы с id='main-form'
    var form_data = $(this).serialize(); //собираем все данные из формы
    $.ajax({
    type: "POST", //Метод отправки
    url: "mail.php", //путь до php файла отправителя
    data: form_data,
    success: function() {
           //код в этом блоке выполняется при успешной отправке сообщения
           alert("Ваше сообщение отправлено!");
    			}
  	});
  });*/

	/*** Masked Input ***/
	$("input[type='tel']").mask("+7 (999) 999-9999");

});


/*** Google Maps API ***/
function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(55.776715, 49.222446),
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var markerPos = new google.maps.LatLng(55.776715, 49.222446);
  var marker = new google.maps.Marker({
   position: markerPos,
   map: map,
   title: 'Центр правового обслуживания "ПОБЕДА"'
	});
}
google.maps.event.addDomListener(window, 'load', initialize);

