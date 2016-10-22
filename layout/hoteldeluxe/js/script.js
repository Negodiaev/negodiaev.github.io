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
	// $('input[placeholder], textarea[placeholder]').placeholder();

	//------------------------------------------------------------------------//

	//navigation
	function toggleNav() {
		$('body').toggleClass('menu-push-toleft');
		$('.navigation, .menu').toggleClass('open');
	}

	$(document).click(function(event) {
		// console.log(event.target);
		if ($('.menu').hasClass('open')) {
			if ((!$(event.target).closest('.menu.open').length) || ($(event.target).closest('.menu-toggle').length)) {
				toggleNav();
			}
		} else if ($(event.target).closest('.menu-toggle').length) {
			toggleNav();
		}
	});

	//------------------------------------------------------------------------//

	//promo slider
	$('.promo-slider').slick({
		arrows: false,
		touchMove: false,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 900
	});

	//offers slider
	$('.offers-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		touchMove: false,
		responsive: [
		{
			breakpoint: 880,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 544,
			settings: {
				slidesToShow: 1
			}
		}
		]

	});

	//------------------------------------------------------------------------//

	//booking form
	$('.booking-date-input').datepicker({
		dateFormat: 'dd/mm/yy'
	});

	$('#room-type-select').selectmenu();

	//------------------------------------------------------------------------//

});//document ready

$(window).load(function() {

	//load

});//window load
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcblx0Ly9ub2pzXHJcblx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCduby1qcycpO1xyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG5cdC8vZmFrZWxpbmtcclxuXHQkKCdhW2hyZWY9XCIjXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0fSk7XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcblx0Ly9kcm9wIGRvd24gbWVudVxyXG5cdC8vJCgnLm1lbnUgbGknKS5oYXMoJ3VsJykuYWRkQ2xhc3MoJ2Ryb3Bkb3duJyk7XHJcblx0Ly8kKCcubWVudSBsaScpLmhvdmVyKGZ1bmN0aW9uKCl7JCgndWwnLHRoaXMpLnNsaWRlRG93bigwKTt9LGZ1bmN0aW9uKCl7JCgndWwnLHRoaXMpLnNsaWRlVXAoMCk7fSk7XHJcblx0Ly9kb3VibGVUYXBUb0dvXHJcblx0Ly8kKCcubWVudSA+IGxpOmhhcyh1bCknKS5kb3VibGVUYXBUb0dvKCk7XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcblx0Ly9wbGFjZWhvbGRlclxyXG5cdC8vICQoJ2lucHV0W3BsYWNlaG9sZGVyXSwgdGV4dGFyZWFbcGxhY2Vob2xkZXJdJykucGxhY2Vob2xkZXIoKTtcclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuXHQvL25hdmlnYXRpb25cclxuXHRmdW5jdGlvbiB0b2dnbGVOYXYoKSB7XHJcblx0XHQkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ21lbnUtcHVzaC10b2xlZnQnKTtcclxuXHRcdCQoJy5uYXZpZ2F0aW9uLCAubWVudScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcblx0fVxyXG5cclxuXHQkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcclxuXHRcdGlmICgkKCcubWVudScpLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuXHRcdFx0aWYgKCghJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5tZW51Lm9wZW4nKS5sZW5ndGgpIHx8ICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLm1lbnUtdG9nZ2xlJykubGVuZ3RoKSkge1xyXG5cdFx0XHRcdHRvZ2dsZU5hdigpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcubWVudS10b2dnbGUnKS5sZW5ndGgpIHtcclxuXHRcdFx0dG9nZ2xlTmF2KCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcblx0Ly9wcm9tbyBzbGlkZXJcclxuXHQkKCcucHJvbW8tc2xpZGVyJykuc2xpY2soe1xyXG5cdFx0YXJyb3dzOiBmYWxzZSxcclxuXHRcdHRvdWNoTW92ZTogZmFsc2UsXHJcblx0fSk7XHJcblxyXG5cdC8vb2ZmZXJzIHNsaWRlclxyXG5cdCQoJy5vZmZlcnMtc2xpZGVyJykuc2xpY2soe1xyXG5cdFx0c2xpZGVzVG9TaG93OiAzLFxyXG5cdFx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHR0b3VjaE1vdmU6IGZhbHNlLFxyXG5cdFx0cmVzcG9uc2l2ZTogW1xyXG5cdFx0e1xyXG5cdFx0XHRicmVha3BvaW50OiA4ODAsXHJcblx0XHRcdHNldHRpbmdzOiB7XHJcblx0XHRcdFx0c2xpZGVzVG9TaG93OiAyXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGJyZWFrcG9pbnQ6IDU0NCxcclxuXHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHRzbGlkZXNUb1Nob3c6IDFcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XVxyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuXHQvL2Jvb2tpbmcgZm9ybVxyXG5cdCQoJy5ib29raW5nLWRhdGUtaW5wdXQnKS5kYXRlcGlja2VyKHtcclxuXHRcdGRhdGVGb3JtYXQ6ICdkZC9tbS95eSdcclxuXHR9KTtcclxuXHJcblx0JCgnI3Jvb20tdHlwZS1zZWxlY3QnKS5zZWxlY3RtZW51KCk7XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcbn0pOy8vZG9jdW1lbnQgcmVhZHlcclxuXHJcbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG5cclxuXHQvL2xvYWRcclxuXHJcbn0pOy8vd2luZG93IGxvYWQiXSwiZmlsZSI6InNjcmlwdC5qcyJ9
