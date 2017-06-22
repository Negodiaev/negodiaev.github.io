/**
 * Main JS file
 * File description...
 */

;(function() {
  document.addEventListener('DOMContentLoaded', function() {

    //------------------------------------------------------------------------//
    //fakelink
    document.addEventListener('click', blockFakeLink);

    function blockFakeLink(e) {
      var target = e.target;

      if (target.nodeName === 'A' && target.getAttribute('href') === '#') {
        e.preventDefault();
      }
    }
    //------------------------------------------------------------------------//


    //------------------------------------------------------------------------//
    //toggle menu
    var toggleButton = document.getElementById('btn-nav'),
        navigationMenu = document.getElementById('nav-menu');

    toggleButton.addEventListener('click', toggleMenu);

    function toggleMenu(e) {
      this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active');

      navigationMenu.classList.contains('open') ?
      navigationMenu.classList.remove('open') : navigationMenu.classList.add('open');

      e.preventDefault();
    }
    //------------------------------------------------------------------------//


    //------------------------------------------------------------------------//
    //product tabs
    var tabLinks = document.querySelectorAll('.tabs .links');

    for (var i = 0; i < tabLinks.length; i++) {
      tabLinks[i].addEventListener('click', showTab);
    }

    function showTab(e) {
      var target = e.target,
      tabLinksItems = this.querySelectorAll('li'),
      tabContentItems = this.parentElement.querySelectorAll('.tab-content'),
      currentTabName = '',
      currentTabContent = '';

      if (target.parentElement.nodeName === 'A') target = target.parentElement;

      if (target.nodeName === 'A') {
        if (!target.parentElement.classList.contains('active')) {
          for (var i = 0; i < tabLinksItems.length; i++) {
            tabLinksItems[i].classList.remove('active');
          }

          target.parentElement.classList.add('active');

          for (var i = 0; i < tabContentItems.length; i++) {
            tabContentItems[i].classList.remove('active');
          }
          currentTabName = target.getAttribute('href');
          currentTabContent = this.parentElement.querySelector(currentTabName);

          currentTabContent.classList.add('active');
        }
        e.preventDefault();
      }
    }
    //------------------------------------------------------------------------//


    //------------------------------------------------------------------------//
    //testimonials slider
    var testimonialsLinksList = document.getElementById('testimonials-links-list'),
        testimonialsLinks = testimonialsLinksList.querySelectorAll('li'),
        testimonialsLinksNumber = testimonialsLinksList.children.length,
        testimonialsLinkWidth = 0,
        activeTestimonialsLink = 0;

    for (var idx = 0; idx < testimonialsLinks.length; idx++) {
      if (testimonialsLinks[idx].classList.contains('active')) activeTestimonialsLink = idx;
    }

    var translateWidth = 0,
        rootFontSize = 16,
        viewportWidth,
        isDesktop = true;

    function getViewportWidth() {
      var rootStyles = window.getComputedStyle(document.documentElement);

      rootFontSize = rootStyles.getPropertyValue('font-size');
      viewportWidth = (window.innerWidth / parseFloat(rootFontSize)).toFixed(4);
    }

    function getTranslateWidth() {
      testimonialsLinkWidth = testimonialsLinksList.firstElementChild.clientWidth;
      translateWidth = activeTestimonialsLink * -testimonialsLinkWidth;
    }

    function moveSliderInitially() {
      getTranslateWidth();

      if (viewportWidth < 48) {
        testimonialsLinksList.style.transform = 'translateX(' + translateWidth + 'px)';
      }
    }

    getViewportWidth();
    moveSliderInitially();

    function moveTestimonialsSlider() {
      getViewportWidth();
      getTranslateWidth();

      if (viewportWidth < 48) {
        if (isDesktop) isDesktop = false;

        if (testimonialsLinksNumber > 1) {
          translateWidth -= testimonialsLinkWidth;

          if (-translateWidth >= testimonialsLinkWidth * testimonialsLinksNumber) {
            translateWidth = 0;
            activeTestimonialsLink = 0;
          }

          testimonialsLinksList.style.transform = 'translateX(' + translateWidth + 'px)';

          setTimeout(function() {
            if (translateWidth) activeTestimonialsLink++;
            testimonialsLinks[activeTestimonialsLink].firstElementChild.click();
          }, 500);
        }
      }
      else {
        if (!isDesktop) {
          testimonialsLinksList.style.transform = 'translateX(0)';
          testimonialsLinks[1].firstElementChild.click();
          isDesktop = true;
        } else return;
      }
    }

    setInterval(moveTestimonialsSlider, 5000);
    //------------------------------------------------------------------------//

  });
}());
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBNYWluIEpTIGZpbGVcclxuICogRmlsZSBkZXNjcmlwdGlvbi4uLlxyXG4gKi9cclxuXHJcbjsoZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuICAgIC8vZmFrZWxpbmtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmxvY2tGYWtlTGluayk7XHJcblxyXG4gICAgZnVuY3Rpb24gYmxvY2tGYWtlTGluayhlKSB7XHJcbiAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgIGlmICh0YXJnZXQubm9kZU5hbWUgPT09ICdBJyAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykgPT09ICcjJykge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcbiAgICAvL3RvZ2dsZSBtZW51XHJcbiAgICB2YXIgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1uYXYnKSxcclxuICAgICAgICBuYXZpZ2F0aW9uTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtbWVudScpO1xyXG5cclxuICAgIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1lbnUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZU1lbnUoZSkge1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgPyB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpIDogdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgIG5hdmlnYXRpb25NZW51LmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpID9cclxuICAgICAgbmF2aWdhdGlvbk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpIDogbmF2aWdhdGlvbk1lbnUuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcbiAgICAvL3Byb2R1Y3QgdGFic1xyXG4gICAgdmFyIHRhYkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMgLmxpbmtzJyk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJMaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0YWJMaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dUYWIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dUYWIoZSkge1xyXG4gICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQsXHJcbiAgICAgIHRhYkxpbmtzSXRlbXMgPSB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyksXHJcbiAgICAgIHRhYkNvbnRlbnRJdGVtcyA9IHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLWNvbnRlbnQnKSxcclxuICAgICAgY3VycmVudFRhYk5hbWUgPSAnJyxcclxuICAgICAgY3VycmVudFRhYkNvbnRlbnQgPSAnJztcclxuXHJcbiAgICAgIGlmICh0YXJnZXQucGFyZW50RWxlbWVudC5ub2RlTmFtZSA9PT0gJ0EnKSB0YXJnZXQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgIGlmICh0YXJnZXQubm9kZU5hbWUgPT09ICdBJykge1xyXG4gICAgICAgIGlmICghdGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJMaW5rc0l0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRhYkxpbmtzSXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJDb250ZW50SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGFiQ29udGVudEl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY3VycmVudFRhYk5hbWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgICBjdXJyZW50VGFiQ29udGVudCA9IHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKGN1cnJlbnRUYWJOYW1lKTtcclxuXHJcbiAgICAgICAgICBjdXJyZW50VGFiQ29udGVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuICAgIC8vdGVzdGltb25pYWxzIHNsaWRlclxyXG4gICAgdmFyIHRlc3RpbW9uaWFsc0xpbmtzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0aW1vbmlhbHMtbGlua3MtbGlzdCcpLFxyXG4gICAgICAgIHRlc3RpbW9uaWFsc0xpbmtzID0gdGVzdGltb25pYWxzTGlua3NMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyksXHJcbiAgICAgICAgdGVzdGltb25pYWxzTGlua3NOdW1iZXIgPSB0ZXN0aW1vbmlhbHNMaW5rc0xpc3QuY2hpbGRyZW4ubGVuZ3RoLFxyXG4gICAgICAgIHRlc3RpbW9uaWFsc0xpbmtXaWR0aCA9IDAsXHJcbiAgICAgICAgYWN0aXZlVGVzdGltb25pYWxzTGluayA9IDA7XHJcblxyXG4gICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgdGVzdGltb25pYWxzTGlua3MubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICBpZiAodGVzdGltb25pYWxzTGlua3NbaWR4XS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSBhY3RpdmVUZXN0aW1vbmlhbHNMaW5rID0gaWR4O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB0cmFuc2xhdGVXaWR0aCA9IDAsXHJcbiAgICAgICAgcm9vdEZvbnRTaXplID0gMTYsXHJcbiAgICAgICAgdmlld3BvcnRXaWR0aCxcclxuICAgICAgICBpc0Rlc2t0b3AgPSB0cnVlO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFZpZXdwb3J0V2lkdGgoKSB7XHJcbiAgICAgIHZhciByb290U3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcclxuXHJcbiAgICAgIHJvb3RGb250U2l6ZSA9IHJvb3RTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1zaXplJyk7XHJcbiAgICAgIHZpZXdwb3J0V2lkdGggPSAod2luZG93LmlubmVyV2lkdGggLyBwYXJzZUZsb2F0KHJvb3RGb250U2l6ZSkpLnRvRml4ZWQoNCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VHJhbnNsYXRlV2lkdGgoKSB7XHJcbiAgICAgIHRlc3RpbW9uaWFsc0xpbmtXaWR0aCA9IHRlc3RpbW9uaWFsc0xpbmtzTGlzdC5maXJzdEVsZW1lbnRDaGlsZC5jbGllbnRXaWR0aDtcclxuICAgICAgdHJhbnNsYXRlV2lkdGggPSBhY3RpdmVUZXN0aW1vbmlhbHNMaW5rICogLXRlc3RpbW9uaWFsc0xpbmtXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3ZlU2xpZGVySW5pdGlhbGx5KCkge1xyXG4gICAgICBnZXRUcmFuc2xhdGVXaWR0aCgpO1xyXG5cclxuICAgICAgaWYgKHZpZXdwb3J0V2lkdGggPCA0OCkge1xyXG4gICAgICAgIHRlc3RpbW9uaWFsc0xpbmtzTGlzdC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgdHJhbnNsYXRlV2lkdGggKyAncHgpJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFZpZXdwb3J0V2lkdGgoKTtcclxuICAgIG1vdmVTbGlkZXJJbml0aWFsbHkoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBtb3ZlVGVzdGltb25pYWxzU2xpZGVyKCkge1xyXG4gICAgICBnZXRWaWV3cG9ydFdpZHRoKCk7XHJcbiAgICAgIGdldFRyYW5zbGF0ZVdpZHRoKCk7XHJcblxyXG4gICAgICBpZiAodmlld3BvcnRXaWR0aCA8IDQ4KSB7XHJcbiAgICAgICAgaWYgKGlzRGVza3RvcCkgaXNEZXNrdG9wID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0ZXN0aW1vbmlhbHNMaW5rc051bWJlciA+IDEpIHtcclxuICAgICAgICAgIHRyYW5zbGF0ZVdpZHRoIC09IHRlc3RpbW9uaWFsc0xpbmtXaWR0aDtcclxuXHJcbiAgICAgICAgICBpZiAoLXRyYW5zbGF0ZVdpZHRoID49IHRlc3RpbW9uaWFsc0xpbmtXaWR0aCAqIHRlc3RpbW9uaWFsc0xpbmtzTnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVdpZHRoID0gMDtcclxuICAgICAgICAgICAgYWN0aXZlVGVzdGltb25pYWxzTGluayA9IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGVzdGltb25pYWxzTGlua3NMaXN0LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyB0cmFuc2xhdGVXaWR0aCArICdweCknO1xyXG5cclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0cmFuc2xhdGVXaWR0aCkgYWN0aXZlVGVzdGltb25pYWxzTGluaysrO1xyXG4gICAgICAgICAgICB0ZXN0aW1vbmlhbHNMaW5rc1thY3RpdmVUZXN0aW1vbmlhbHNMaW5rXS5maXJzdEVsZW1lbnRDaGlsZC5jbGljaygpO1xyXG4gICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0l0XFwncyBkZXNrdG9wJyk7XHJcbiAgICAgICAgaWYgKCFpc0Rlc2t0b3ApIHtcclxuICAgICAgICAgIHRlc3RpbW9uaWFsc0xpbmtzTGlzdC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwKSc7XHJcbiAgICAgICAgICB0ZXN0aW1vbmlhbHNMaW5rc1sxXS5maXJzdEVsZW1lbnRDaGlsZC5jbGljaygpO1xyXG4gICAgICAgICAgaXNEZXNrdG9wID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW50ZXJ2YWwobW92ZVRlc3RpbW9uaWFsc1NsaWRlciwgNTAwMCk7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG4gIH0pO1xyXG59KCkpOyJdLCJmaWxlIjoibWFpbi5qcyJ9
