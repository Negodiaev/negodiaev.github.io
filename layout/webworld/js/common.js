$(document).ready(function() {

	$(".main_menu_button").click(function() {
			$(".main_menu ul").slideToggle();
		});

	var nav_wrap = $(".sliding_menu"),
        elem_width,
        elem_left_offset,
        elem_parent,
        slider_line;
     
    $(window).load(function(){
 
        nav_wrap.each(function(){
            $(this).append('<li class="sliding_line"></li>');
 
            var start_elem_width = 0;
            var start_elem_offset = 0;
            var active_elem = $(this).find(".active_item");
 
            if(active_elem.length){
                start_elem_width = active_elem.outerWidth();
                start_elem_offset = active_elem.position().left;
            } 
 
            $(this).find(".sliding_line").css({
                "width": start_elem_width + "px",
                "left": start_elem_offset + "px"
            })
            .data("width", start_elem_width)
            .data("left", start_elem_offset);
        });
 
    });
 
    nav_wrap.find("li a").hover(function(){
 
        elem_parent = $(this).parent();
        elem_width = elem_parent.outerWidth();
        elem_left_offset = $(this).position().left;
        slider_line = elem_parent.siblings(".sliding_line");
        slider_line.stop().animate({
            "width": elem_width + "px",
            "left": elem_left_offset + "px"
        });
 
    }, function(){
 
        slider_line.stop().animate({
            "width": slider_line.data("width") + "px",
            "left": slider_line.data("left") + "px"
        });
           
    });

//Карусель
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1, //Количество слайдов при разрешении экрана более 1000px
        itemsDesktop : [1000,1], //При разрешении экрана от 901px до 1000px
        itemsDesktopSmall : [900,1], // При разрешении экрана от 601px до 900px
        itemsTablet: [600,1], //При разрешении экрана от 0 до 600px 
		autoHeight : true,
	    slideSpeed : 800,
	    rewindSpeed : 1000,

	    /*autoPlay: true*/ //Автопрокрутка слайдов
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

//Портфолио
	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".port_descr").attr("id", "work_" + i);
	});

//Попытка сделать треугольник
	$(".num_1").mouseenter(
	function(){
	  $(".triangle").animate({ left: '19%' },
		{
	    duration: 400, 
	    specialEasing: { opacity: 'linear', height: 'swing' }
		});
	});

	
	$(".num_1").mouseleave(
	function(){
	  $(".triangle").animate({ left: '50%' }, {
	    duration: 400, 
	    specialEasing: { opacity: 'linear', height: 'swing' }
		});
	});

	$(".num_3").mouseenter(
	function(){
	  $(".triangle").animate({ left: '81%' }, {
	    duration: 400, 
	    specialEasing: { opacity: 'linear', height: 'swing' }
		});
	});

	
	$(".num_3").mouseleave(
	function(){
	  $(".triangle").animate({ left: '50%' }, {
	    duration: 400, 
	    specialEasing: { opacity: 'linear', height: 'swing' }
		});
	});

});