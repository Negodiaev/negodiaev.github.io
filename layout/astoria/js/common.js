$(document).ready(function() {


	// Parallax
	$.stellar({
		responsive: true,
		horizontalOffset: 40
	});

	/*Services section*/
	if ($(window).width() > 991) {
		$(".services-item").mouseenter(function() {
			$(this).find(".service-item-wrapper").animate({"top": "0"}, 300);
			$(this).find(".service-text-wrapper").animate({"opacity": "0"}, 200);
			$(this).find(".services-item-content").css({"background": "rgba(6, 38, 65, .88)"}); }
		);
			
		$(".services-item").mouseleave(function() {
			$(this).find(".service-item-wrapper").animate({"top": "-200px"}, 150);
			$(this).find(".service-text-wrapper").animate({"opacity": "1"}, 400); }
		);
	}


	/* Info on click on small devices */
	if (screen.width < 768) {
	  $(".mail .header-icon").click(function() {
			$(".info-mobile-mail").slideToggle("fast");
		});
		$(".address .header-icon").click(function() {
			$(".info-mobile-address").slideToggle("fast");
		});
		$(".phones .header-icon").click(function() {
			$(".info-mobile-phones").slideToggle("fast");
		});
  }

  
  /* Show services on small devices */
  if (screen.width < 768) {
	  $(".page-menu-small h4").click(function() {
			$(".page-menu-small ul").slideToggle("fast");
		});
  }


  /* Form */
  //Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		var ths = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "send.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance; 
				// save instance in magnificPopup variable
				magnificPopup.close(); 
				// Close popup that is currently opened
				ths.trigger("reset");
			}, 1000);
		});
		return false;
	});

  /* For the gallery */
  $(".fancybox").fancybox();

});

// Animation
$(window).load(function() {

	if (screen.width > 768) {
		$(".anm-up").animated("fadeInUp", "fadeOut");
		$(".anm-r").animated("fadeIn", "fadeOut");
		$(".s-advantages .advantages-wrapper ul li").animated("fadeInUp", "fadeOut");
		$(".fil .about-content-text").animated("fadeInLeft", "fadeOut");
		$(".fir .about-content-text").animated("fadeInRight", "fadeOut");
		$(".form-anm").animated("fadeInUp", "fadeOutDown");
	}

});