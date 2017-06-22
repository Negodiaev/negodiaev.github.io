$(document).ready(function() {

	// Header на всю высоту
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	
	//Выпадающее меню
	$(".top_menu_btn").click(function() {
		$(".top_menu ul").slideToggle();
	});

	//Секция портфолио
	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	//Всплывающие окна
	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#project_" + i);
		$(this).find(".port_descr").attr("id", "project_" + i);
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	/*$("form").submit(function(e) {
		var ths = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
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
	});*/
	
	//Анимация
  $("h3").animated("fadeInDown", "fadeOut");
  $(".portfolio_item").animated("fadeIn");
  $(".services_item").animated("fadeInLeft");
  $(".s_tw p").animated("fadeInLeft");
  $(".s_testimonials p").animated("fadeInRight");
  
  $(".top_menu a").mPageScroll2id({
  	scrollSpeed : 1500
  });

  //Отправка формы
	$("input, select, textarea").jqBootstrapValidation();

});
  
$(window).load(function(){
  
  $(".loader_inner").fadeOut(); 
	$(".loader").delay(500).fadeOut("slow");

  $("h1").animated("fadeInDown", "fadeOut");
  $("h2").animated("fadeInUp", "fadeOut");
});
