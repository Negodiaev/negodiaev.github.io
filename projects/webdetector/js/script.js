$(document).ready(function(){

	//nojs
	$('body').removeClass('no-js');

	//------------------------------------------------------------------------//

	//fakelink
	$('a[href="#"]').on('click', function(event) {
		event.preventDefault();
	});

	//------------------------------------------------------------------------//

	//drop down menu
	//$('.menu li').has('ul').addClass('dropdown');
	//$('.menu li').hover(function(){$('ul',this).slideDown(0);},function(){$('ul',this).slideUp(0);});
	//doubleTapToGo
	//$('.menu > li:has(ul)').doubleTapToGo();

	//------------------------------------------------------------------------//

	//placeholder
	$('input[placeholder], textarea[placeholder]').placeholder();

	//------------------------------------------------------------------------//

	//swiper slider
	var mySwiper = new Swiper ('.swiper-container', {
		loop: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
	});

	//------------------------------------------------------------------------//

	//categories grid
	var categories = document.getElementsByClassName('category');

	
	if (categories.length > 10) {
		for (var i = 0; i < categories.length; i++) {
			categories[i].parentElement.classList.add('xl-6-col');
		}
	}
	if (categories.length > 8) {
		for (var i = 0; i < categories.length; i++) {
			categories[i].parentElement.classList.add('xl-5-col');
		}
	}

	//------------------------------------------------------------------------//

	//magnific popup
	$('.open-popup-link').magnificPopup({
		fixedContentPos: true
	});

	//------------------------------------------------------------------------//

	if ($(window).height() < 660 ) {
		$('.popup-product').css({'height': '96%', 'top': '2%'});
	}
	if (($(window).height() < 660) && ($(window).width() < 480 )) {
		$('.popup-product').css({'top': '50%'});
	}

	//------------------------------------------------------------------------//

	//products tabs
	// $('.tabs li').on('click', function() {
	// 	$('.tabs li').toggleClass('active');
	// });

	$('.search-tab-online').on('click', function() {
		$('.search-tabs li').removeClass('active');
		$('.search-tab-online').addClass('active');
		$('.products-container').removeClass('active');
		$('.online-products-container').addClass('active');
	});

	$('.search-tab-local').on('click', function() {
		$('.search-tabs li').removeClass('active');
		$('.search-tab-local').addClass('active');
		$('.products-container').removeClass('active');
		$('.local-products-container').addClass('active');
	});

	//------------------------------------------------------------------------//

	//filter accordion
	var acc = document.getElementsByClassName('filter-accordion-btn');

	for (var i = 0; i < acc.length; i++) {
		acc[i].onclick = function(event) {
			event.preventDefault();
			this.classList.toggle('active');
			this.nextElementSibling.classList.toggle('show');
		}
	}

	//------------------------------------------------------------------------//

	//register accordion
	$('.register-accordion-btn').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next().removeClass('show');
		} else {
			$('.register-accordion-btn').removeClass('active');
			$('.register-accordion-panel').removeClass('show');
			$(this).toggleClass('active').next().toggleClass('show');
		}
	});

	//------------------------------------------------------------------------//

	$(".scl-select-test").selectBoxIt();

	//------------------------------------------------------------------------//

	//noUiSlider
	var html5Slider = document.getElementById('price-slider');

	noUiSlider.create(html5Slider, {
		start: [ 25, 160 ],
		connect: true,
		step: 1,
		range: {
			'min': 0,
			'max': 200
		}
	});

	var inputNumber1 = document.getElementById('price-slider-value-1'),
			inputNumber2 = document.getElementById('price-slider-value-2');

	html5Slider.noUiSlider.on('update', function( values, handle ) {

		var value = values[handle];

		if ( handle ) {
			inputNumber1.value = parseInt(value);
		} else {
			inputNumber2.value = parseInt(value);
		}
	});


	inputNumber1.addEventListener('change', function(){
		html5Slider.noUiSlider.set([null, this.value]);
	});
	inputNumber2.addEventListener('change', function(){
		html5Slider.noUiSlider.set([null, this.value]);
	});

	//------------------------------------------------------------------------//

	//slimScroll
	$('.custom-scroll').slimScroll({
		size: '12px',
		height: '300px',
		color: '#b2b2b2',
		railColor: '#f0f0f0',
		railOpacity: 1,
		railVisible: true,
		alwaysVisible: true
	});

	if (($(window).height() < 660) || ($(window).width() < 768)) {
		$('.popup-custom-scroll').slimScroll({
			size: '12px',
			width: '100%',
			height: '100%',
			color: '#b2b2b2',
			railColor: '#f0f0f0',
			railOpacity: 1,
			railVisible: true,
			alwaysVisible: true
		});
	}

	

	//------------------------------------------------------------------------//

	//product gallery
	$('#product-gallery').lightSlider({
		gallery: true,
		item: 1,
		vertical: true,
		verticalHeight: 470,
		vThumbWidth: 85,
		thumbItem: 5,
		galleryMargin: 15,
		// thumbMargin: 10,
		controls: true,
		responsive : [
			{
			breakpoint: 1024,
			settings: {
					verticalHeight: 440,
					thumbItem: 4
				}
			},
			{
			breakpoint: 880,
			settings: {
					verticalHeight: 360,
					thumbItem: 4,
					vThumbWidth: 70
				}
			},
			{
			breakpoint: 767,
			settings: {
					verticalHeight: 400,
					thumbItem: 4,
					vThumbWidth: 100
				}
			},
			{
			breakpoint: 543,
			settings: {
					verticalHeight: 330,
					pager: false,
				}
			}
		]
	});

	//------------------------------------------------------------------------//

});//document ready

$(window).load(function() {

	//load

});//window load
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcblx0Ly9ub2pzXHJcblx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCduby1qcycpO1xyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG5cdC8vZmFrZWxpbmtcclxuXHQkKCdhW2hyZWY9XCIjXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0fSk7XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcblx0Ly9kcm9wIGRvd24gbWVudVxyXG5cdC8vJCgnLm1lbnUgbGknKS5oYXMoJ3VsJykuYWRkQ2xhc3MoJ2Ryb3Bkb3duJyk7XHJcblx0Ly8kKCcubWVudSBsaScpLmhvdmVyKGZ1bmN0aW9uKCl7JCgndWwnLHRoaXMpLnNsaWRlRG93bigwKTt9LGZ1bmN0aW9uKCl7JCgndWwnLHRoaXMpLnNsaWRlVXAoMCk7fSk7XHJcblx0Ly9kb3VibGVUYXBUb0dvXHJcblx0Ly8kKCcubWVudSA+IGxpOmhhcyh1bCknKS5kb3VibGVUYXBUb0dvKCk7XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcblx0Ly9wbGFjZWhvbGRlclxyXG5cdCQoJ2lucHV0W3BsYWNlaG9sZGVyXSwgdGV4dGFyZWFbcGxhY2Vob2xkZXJdJykucGxhY2Vob2xkZXIoKTtcclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuXHQvL3N3aXBlciBzbGlkZXJcclxuXHR2YXIgbXlTd2lwZXIgPSBuZXcgU3dpcGVyICgnLnN3aXBlci1jb250YWluZXInLCB7XHJcblx0XHRsb29wOiB0cnVlLFxyXG5cdFx0bmV4dEJ1dHRvbjogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG5cdFx0cHJldkJ1dHRvbjogJy5zd2lwZXItYnV0dG9uLXByZXYnXHJcblx0fSk7XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcblx0Ly9jYXRlZ29yaWVzIGdyaWRcclxuXHR2YXIgY2F0ZWdvcmllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhdGVnb3J5Jyk7XHJcblxyXG5cdFxyXG5cdGlmIChjYXRlZ29yaWVzLmxlbmd0aCA+IDEwKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y2F0ZWdvcmllc1tpXS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3hsLTYtY29sJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGlmIChjYXRlZ29yaWVzLmxlbmd0aCA+IDgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjYXRlZ29yaWVzW2ldLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgneGwtNS1jb2wnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcblx0Ly9tYWduaWZpYyBwb3B1cFxyXG5cdCQoJy5vcGVuLXBvcHVwLWxpbmsnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGZpeGVkQ29udGVudFBvczogdHJ1ZVxyXG5cdH0pO1xyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG5cdGlmICgkKHdpbmRvdykuaGVpZ2h0KCkgPCA2NjAgKSB7XHJcblx0XHQkKCcucG9wdXAtcHJvZHVjdCcpLmNzcyh7J2hlaWdodCc6ICc5NiUnLCAndG9wJzogJzIlJ30pO1xyXG5cdH1cclxuXHRpZiAoKCQod2luZG93KS5oZWlnaHQoKSA8IDY2MCkgJiYgKCQod2luZG93KS53aWR0aCgpIDwgNDgwICkpIHtcclxuXHRcdCQoJy5wb3B1cC1wcm9kdWN0JykuY3NzKHsndG9wJzogJzUwJSd9KTtcclxuXHR9XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcblx0Ly9wcm9kdWN0cyB0YWJzXHJcblx0Ly8gJCgnLnRhYnMgbGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHQvLyBcdCQoJy50YWJzIGxpJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdC8vIH0pO1xyXG5cclxuXHQkKCcuc2VhcmNoLXRhYi1vbmxpbmUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5zZWFyY2gtdGFicyBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5zZWFyY2gtdGFiLW9ubGluZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5wcm9kdWN0cy1jb250YWluZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKCcub25saW5lLXByb2R1Y3RzLWNvbnRhaW5lcicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLnNlYXJjaC10YWItbG9jYWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5zZWFyY2gtdGFicyBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5zZWFyY2gtdGFiLWxvY2FsJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLnByb2R1Y3RzLWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5sb2NhbC1wcm9kdWN0cy1jb250YWluZXInKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcblx0Ly9maWx0ZXIgYWNjb3JkaW9uXHJcblx0dmFyIGFjYyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbHRlci1hY2NvcmRpb24tYnRuJyk7XHJcblxyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYWNjLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRhY2NbaV0ub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0XHRcdHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcblx0Ly9yZWdpc3RlciBhY2NvcmRpb25cclxuXHQkKCcucmVnaXN0ZXItYWNjb3JkaW9uLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLm5leHQoKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnLnJlZ2lzdGVyLWFjY29yZGlvbi1idG4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdCQoJy5yZWdpc3Rlci1hY2NvcmRpb24tcGFuZWwnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG5cdFx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5uZXh0KCkudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuXHQkKFwiLnNjbC1zZWxlY3QtdGVzdFwiKS5zZWxlY3RCb3hJdCgpO1xyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG5cdC8vbm9VaVNsaWRlclxyXG5cdHZhciBodG1sNVNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmljZS1zbGlkZXInKTtcclxuXHJcblx0bm9VaVNsaWRlci5jcmVhdGUoaHRtbDVTbGlkZXIsIHtcclxuXHRcdHN0YXJ0OiBbIDI1LCAxNjAgXSxcclxuXHRcdGNvbm5lY3Q6IHRydWUsXHJcblx0XHRzdGVwOiAxLFxyXG5cdFx0cmFuZ2U6IHtcclxuXHRcdFx0J21pbic6IDAsXHJcblx0XHRcdCdtYXgnOiAyMDBcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0dmFyIGlucHV0TnVtYmVyMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmljZS1zbGlkZXItdmFsdWUtMScpLFxyXG5cdFx0XHRpbnB1dE51bWJlcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpY2Utc2xpZGVyLXZhbHVlLTInKTtcclxuXHJcblx0aHRtbDVTbGlkZXIubm9VaVNsaWRlci5vbigndXBkYXRlJywgZnVuY3Rpb24oIHZhbHVlcywgaGFuZGxlICkge1xyXG5cclxuXHRcdHZhciB2YWx1ZSA9IHZhbHVlc1toYW5kbGVdO1xyXG5cclxuXHRcdGlmICggaGFuZGxlICkge1xyXG5cdFx0XHRpbnB1dE51bWJlcjEudmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpbnB1dE51bWJlcjIudmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cclxuXHRpbnB1dE51bWJlcjEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuXHRcdGh0bWw1U2xpZGVyLm5vVWlTbGlkZXIuc2V0KFtudWxsLCB0aGlzLnZhbHVlXSk7XHJcblx0fSk7XHJcblx0aW5wdXROdW1iZXIyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcblx0XHRodG1sNVNsaWRlci5ub1VpU2xpZGVyLnNldChbbnVsbCwgdGhpcy52YWx1ZV0pO1xyXG5cdH0pO1xyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG5cdC8vc2xpbVNjcm9sbFxyXG5cdCQoJy5jdXN0b20tc2Nyb2xsJykuc2xpbVNjcm9sbCh7XHJcblx0XHRzaXplOiAnMTJweCcsXHJcblx0XHRoZWlnaHQ6ICczMDBweCcsXHJcblx0XHRjb2xvcjogJyNiMmIyYjInLFxyXG5cdFx0cmFpbENvbG9yOiAnI2YwZjBmMCcsXHJcblx0XHRyYWlsT3BhY2l0eTogMSxcclxuXHRcdHJhaWxWaXNpYmxlOiB0cnVlLFxyXG5cdFx0YWx3YXlzVmlzaWJsZTogdHJ1ZVxyXG5cdH0pO1xyXG5cclxuXHRpZiAoKCQod2luZG93KS5oZWlnaHQoKSA8IDY2MCkgfHwgKCQod2luZG93KS53aWR0aCgpIDwgNzY4KSkge1xyXG5cdFx0JCgnLnBvcHVwLWN1c3RvbS1zY3JvbGwnKS5zbGltU2Nyb2xsKHtcclxuXHRcdFx0c2l6ZTogJzEycHgnLFxyXG5cdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHRoZWlnaHQ6ICcxMDAlJyxcclxuXHRcdFx0Y29sb3I6ICcjYjJiMmIyJyxcclxuXHRcdFx0cmFpbENvbG9yOiAnI2YwZjBmMCcsXHJcblx0XHRcdHJhaWxPcGFjaXR5OiAxLFxyXG5cdFx0XHRyYWlsVmlzaWJsZTogdHJ1ZSxcclxuXHRcdFx0YWx3YXlzVmlzaWJsZTogdHJ1ZVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRcclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuXHQvL3Byb2R1Y3QgZ2FsbGVyeVxyXG5cdCQoJyNwcm9kdWN0LWdhbGxlcnknKS5saWdodFNsaWRlcih7XHJcblx0XHRnYWxsZXJ5OiB0cnVlLFxyXG5cdFx0aXRlbTogMSxcclxuXHRcdHZlcnRpY2FsOiB0cnVlLFxyXG5cdFx0dmVydGljYWxIZWlnaHQ6IDQ3MCxcclxuXHRcdHZUaHVtYldpZHRoOiA4NSxcclxuXHRcdHRodW1iSXRlbTogNSxcclxuXHRcdGdhbGxlcnlNYXJnaW46IDE1LFxyXG5cdFx0Ly8gdGh1bWJNYXJnaW46IDEwLFxyXG5cdFx0Y29udHJvbHM6IHRydWUsXHJcblx0XHRyZXNwb25zaXZlIDogW1xyXG5cdFx0XHR7XHJcblx0XHRcdGJyZWFrcG9pbnQ6IDEwMjQsXHJcblx0XHRcdHNldHRpbmdzOiB7XHJcblx0XHRcdFx0XHR2ZXJ0aWNhbEhlaWdodDogNDQwLFxyXG5cdFx0XHRcdFx0dGh1bWJJdGVtOiA0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdGJyZWFrcG9pbnQ6IDg4MCxcclxuXHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHRcdHZlcnRpY2FsSGVpZ2h0OiAzNjAsXHJcblx0XHRcdFx0XHR0aHVtYkl0ZW06IDQsXHJcblx0XHRcdFx0XHR2VGh1bWJXaWR0aDogNzBcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0YnJlYWtwb2ludDogNzY3LFxyXG5cdFx0XHRzZXR0aW5nczoge1xyXG5cdFx0XHRcdFx0dmVydGljYWxIZWlnaHQ6IDQwMCxcclxuXHRcdFx0XHRcdHRodW1iSXRlbTogNCxcclxuXHRcdFx0XHRcdHZUaHVtYldpZHRoOiAxMDBcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0YnJlYWtwb2ludDogNTQzLFxyXG5cdFx0XHRzZXR0aW5nczoge1xyXG5cdFx0XHRcdFx0dmVydGljYWxIZWlnaHQ6IDMzMCxcclxuXHRcdFx0XHRcdHBhZ2VyOiBmYWxzZSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9KTtcclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxufSk7Ly9kb2N1bWVudCByZWFkeVxyXG5cclxuJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdC8vbG9hZFxyXG5cclxufSk7Ly93aW5kb3cgbG9hZCJdLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
