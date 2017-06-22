$(document).ready(function() {

	/*** Первая карусель с тремя элементами ***/
	$('#myCarousel-1').carousel({
	  interval: 10000
	})

	$('.my-carousel .item').each(function(){
	  var next = $(this).next();
	  if (!next.length) {
	    next = $(this).siblings(':first');
	  }
	  next.children(':first-child').clone().appendTo($(this));
	  
	  if (next.next().length>0) {
	    next.next().children(':first-child').clone().appendTo($(this));
	  }
	  else {
	  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
	  }
	});

	/*** Вторая карусель с тремя элементами ***/
	$('#myCarousel-2').carousel({
	  interval: 10000
	});

	/*** Галерея ***/
	$(function () {
	  $('.gallery').gallery();
	});

  /*** Отправка сообщений через Ajax ***/
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Сообщение отправлено!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

/*** Google Maps API ***/
function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(52.354609, 104.260423),
    zoom: 16,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var markerPos = new google.maps.LatLng(52.354609, 104.260423);
  var iconBase = '../img/font-icons/marker.png';
  var marker = new google.maps.Marker({
		position: markerPos,
		map: map,
		title: 'ЛесТех',
		icon: iconBase
	});
}
google.maps.event.addDomListener(window, 'load', initialize);
