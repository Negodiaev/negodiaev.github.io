$(document).ready(function() {

	/*** Floating menu ***/
  $(window).scroll(function() {
      var top = $(document).scrollTop();
      if (top < 1) $(".main-menu").css({top: '0', position: 'relative'});
      else $(".main-menu").css({top: '0', left: '0', right: '0', position: 'fixed', 'z-index': '10001'});
  });

	/*** Scroll to ID ***/
	$("a[href*='#']").mPageScroll2id({
		offset: 80
	});

	/*** Countdown ***/
	$('#countdown-dashboard-1').countDown({
		targetOffset: {
			'day': 		5,
			'month': 	0,
			'year': 	0,
			'hour': 	7,
			'min': 		29,
			'sec': 		59
		}
	});

	$('#countdown-dashboard-2').countDown({
		targetOffset: {
			'day': 		5,
			'month': 	0,
			'year': 	0,
			'hour': 	7,
			'min': 		29,
			'sec': 		59
		}
	});

	$('#countdown-dashboard-3').countDown({
		targetOffset: {
			'day': 		5,
			'month': 	0,
			'year': 	0,
			'hour': 	7,
			'min': 		29,
			'sec': 		59
		}
	});

	$('#countdown-dashboard-4').countDown({
		targetOffset: {
			'day': 		5,
			'month': 	0,
			'year': 	0,
			'hour': 	7,
			'min': 		29,
			'sec': 		59
		}
	});

	/*** Photogallery ***/
	
	$('.bxslider').bxSlider({
  buildPager: function(slideIndex){
    switch(slideIndex){
      case 0:
        return '<img src="img/photogallery/gallery-image-1.jpg" />';
      case 1:
        return '<img src="img/photogallery/gallery-image-2.jpg" />';
      case 2:
        return '<img src="img/photogallery/gallery-image-3.jpg" />';
      case 3:
        return '<img src="img/photogallery/gallery-image-4.jpg" />';
      case 4:
        return '<img src="img/photogallery/gallery-image-5.jpg" />';
      case 5:
        return '<img src="img/photogallery/gallery-image-6.jpg" />';
      case 6:
        return '<img src="img/photogallery/gallery-image-7.jpg" />';
	    }
	  }
	});
	

	if ($(window).width() > 769) {
		$(".bx-pager").append("<div class='thumbnails-line'></div>");
	}

	if ($(window).width() < 1401 && $(window).width() > 991) {
		$(".bx-viewport img, .bx-controls-direction").hover(function() {
			$(".bx-prev, .bx-next").animate({ "opacity" : "1" }, 300);
		}, function() {
			$(".bx-prev, .bx-next").animate({ "opacity" : "0" }, 300);
		});
	} $(".bx-prev, .bx-next").css({ "opacity" : "1" }, 300);

	
	/*$(".bx-pager-link").append("<div class='layout-dark'></div>");

	
	$(".bx-pager-item").on ({
		click: function() {
			$(".bx-pager-link").find(".layout-dark").removeClass("hidden");
			$(this).children().find(".layout-dark").addClass("hidden");
		}
	});*/

	
	/*** Google Map ***/
	function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(55.673528, 37.481070),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
  }
  google.maps.event.addDomListener(window, 'load', initialize);

  /*** Adaptive menu ***/
  $(".menu-mini-button").click(function() {
		$(this).parent().find("ul").slideToggle();
	});

	/*** Sending the form ***/
	//E-mail Ajax Send
	$("#lead_crm1427").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Письмо отправлено! Спасибо!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});