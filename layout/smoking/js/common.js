$(document).ready(function() {

	//begin MENU with sliding line
	var nav_wrap = $(".sliding-menu"),
    menu_link = $(".sliding-menu li a"),
    elem_width,
    elem_left_offset,
    elem_parent,
    slider_line;
   
  $(window).load(function(){
    nav_wrap.each(function(){
      $(this).append('<li class="sliding-line"></li>');

      var start_elem_width = 0;
      var start_elem_offset = 0;
      var active_elem = $(this).find(".active-item");

      if(active_elem.length){
          start_elem_width = active_elem.outerWidth();
          start_elem_offset = active_elem.position().left;
      } 

      $(this).find(".sliding-line").css({
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
    slider_line = elem_parent.siblings(".sliding-line");
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

  menu_link.hover(function() {
    $(menu_link).removeClass("active-item");
    $(this).addClass("active-item");
  },
    function() {
    $(menu_link).removeClass("active-item");
    $(".sliding-menu li .first-link").addClass("active-item")
  });
	//end MENU with sliding line

  //begin Scroll to ID 
  $("a[href*='#']").mPageScroll2id({
    // offset: 40,
    // scrollEasing: "easeInOutSine",
    // scrollSpeed: 800
  });
  //end Scroll to ID

  //Animation
  new WOW().init();

  //begin FORM VALIDATION
  $("input, select, textarea").not("[type=submit]").jqBootstrapValidation();
  //end FORM VALIDATION

  
  //////GET button VALUE///////////
  $(".choose-suit").click(function() {
    $(this).siblings(".smoking-model").val();
    // return false;
  });
  ///////GET button VALUE//////////


  //begin  Sending the form 
  //E-mail Ajax Send
  $("#main-form, #offers-form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Ваше сообщение отправлено! Спасибо!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  $("#suits-form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Костюм выбран!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
  //end Sending the form 

  //begin SLIDER
  //Обработка клика на стрелку вправо
  $(document).on('click', ".suits-slider .next-button",function(){ 
    var carousel = $(this).parents('.suits-slider');
    right_carousel(carousel);
    return false;
  });
  //Обработка клика на стрелку влево
  $(document).on('click',".suits-slider .previous-button",function(){ 
    var carousel = $(this).parents('.suits-slider');
    left_carousel(carousel);
    return false;
  });

  function left_carousel(carousel){
   var block_width = $(carousel).find('.suits-slider-item').outerWidth();
   $(carousel).find(".hider-block .suits-slider-item").eq(-1).clone().prependTo($(carousel).find(".hider-block")); 
   $(carousel).find(".hider-block").css({"left":"-"+block_width+"px"});
   $(carousel).find(".hider-block .suits-slider-item").eq(-1).remove();    
   $(carousel).find(".hider-block").animate({left: "0px"}, 200);  
  }
  
  function right_carousel(carousel){
     var block_width = $(carousel).find('.suits-slider-item').outerWidth();
     $(carousel).find(".hider-block").animate({left: "-"+ block_width +"px"}, 200, function(){
      $(carousel).find(".hider-block .suits-slider-item").eq(0).clone().appendTo($(carousel).find(".hider-block")); 
        $(carousel).find(".hider-block .suits-slider-item").eq(0).remove(); 
        $(carousel).find(".hider-block").css({"left":"0px"}); 
     }); 
  }

  // Навели курсор на карусель
  $(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
  //Убрали курсор с карусели
  $(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})

  $(function() {
  //Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
    // auto_right('.suits-slider:first');
  });

  // Автоматическая прокрутка
  function auto_right(carousel){
    setInterval(function(){
      if (!$(carousel).is('.hover'))
        right_carousel(carousel);
    }, 3000)
  }
  //end SLIDER

  //begin Suits Slider HOVER effects 
  $(".suits-slider-item").hover(function() {
    $(this).find("img").css({"border-color" : "rgba(125, 150, 156, 0.38)"});
    $(this).find("a").css({
        "text-decoration" : "none",
        "color" : "rgba(51, 51, 51, 1)"
      });
    $(this).find(".choose-suit").css({
      "background-color" : "rgba(66, 143, 163, 1)",
      "color" : "rgba(255, 255, 255, 1)",
      "text-shadow" : "0 0 134px rgba(251, 251, 251, 0.75)"
    });
  }, function() {
    $(this).find("img").css({"border-color" : "#fff"});
    $(this).find("a").css({
      "text-decoration" : "underline",
      "color" : "rgba(66, 143, 163, 1)"
    });
    $(this).find(".choose-suit").css({
      "background-color" : "rgba(255, 255, 255, 0.29)",
      "color" : "rgba(51, 51, 51, 1)",
      "text-shadow" : "none"
    });
  });
  //end Suits Slider HOVER effects

  //begin Goods Category HOVER effects
  $(".goods-category").hover(function() {
    $(this).find(".category-name").css({
      "color" : "rgba(51, 51, 51, 1)",
      "text-decoration" : "none" 
    }).find(".category-image-wrapper").css({
      "border-color" : "rgba(66, 143, 163, 0.22)"
    });
  }, function() {
    $(this).find(".category-name").css({
      "color" : "rgba(66, 143, 163, 1)",
      "text-decoration" : "underline"
    }).find(".category-image-wrapper").css({
      "border-color" : "rgba(66, 143, 163, 0.01)"
    });
  });
  //end Goods Category HOVER effects 

  //begin Suits Slider HOVER effects
  $(".goods-slider-item").find("img").css({
    "border" : "none"
  });
  
  $(".goods-slider-item").hover(function() {
    $(this).find(".goods-slider-image").css({
      "border-width" : "5px"
    });
  }, function() {
    $(this).find(".goods-slider-image").css({
      "border-width" : "1px"
    });
  });
  //end Suits Slider HOVER effects

  //begin Shoes Slider HOVER effects
  $(".shoes-category").click(function() {
    $(this).siblings(".goods-slider").addClass("hidden").siblings("#shoes-slider").removeClass("hidden");
  });
  $(".shirts-category").click(function() {
    $(this).siblings(".goods-slider").addClass("hidden").siblings("#shirts-slider").removeClass("hidden");
  });
  $(".bow-tie-category").click(function() {
    $(this).siblings(".goods-slider").addClass("hidden").siblings("#bow-tie-slider").removeClass("hidden");
  });
  $(".cufflinks-category").click(function() {
    $(this).siblings(".goods-slider").addClass("hidden").siblings("#cufflinks-slider").removeClass("hidden");
  });
  //end Shoes Slider HOVER effects

  if(!$("#shirts-slider").hasClass("hidden"))
    $(this).siblings(".shirts-category").find(".category-image-wrapper").addClass("bd-show");

  //begin TESTIMONIALS SLIDER
  $('.bxslider').bxSlider({
    minSlides: 3, 
    maxSlides: 3,
    slideWidth: 305,
    slideMargin: 30,
    auto: true,
    pause: 5000,
    moveSlides: 1
  });
  //end TESTIMONIALS SLIDER

  //begin Google MAP
  function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(55.770224, 37.597364),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
  }
  google.maps.event.addDomListener(window, 'load', initialize);
  //end Google MAP


  //begin CENTER PLACEHOLDER for Safari
  $('[placeholder]').focus(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
      if (this.originalType) {
        this.type = this.originalType;
        delete this.originalType;
      }
      input.val('');
      input.removeClass('placeholder');
    }
  }).blur(function() {
    var input = $(this);
    if (input.val() == '') {
      if (this.type == 'password') {
        this.originalType = this.type;
        this.type = 'text';
      }
      input.addClass('placeholder');
      input.val(input.attr('placeholder'));
    }
  }).blur();
  //end CENTER PLACEHOLDER for Safari

});

