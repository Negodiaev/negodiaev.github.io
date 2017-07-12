/**
 * Main JS file
 * File description...
 */

(function() {
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
    var toggleButton = document.getElementById('btn-nav');

    function toggleMenu(e) {
      if (this.nextElementSibling.classList.contains('nav-menu')) {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('open');
      }
      e.preventDefault();
    }

    toggleButton.addEventListener('click', toggleMenu);
    //------------------------------------------------------------------------//


    //------------------------------------------------------------------------//
    //Menu hover
    var menu = document.getElementById('nav-menu'),
        activeMenuItem = menu.querySelector('li.active');

    function removeClass() { activeMenuItem.classList.remove('active'); }
    function addClass()    { activeMenuItem.classList.add('active'); }

    menu.addEventListener('mouseenter', removeClass);
    menu.addEventListener('mouseleave', addClass);
    //------------------------------------------------------------------------//


    //------------------------------------------------------------------------//
    //Sliders
    var heroSlider = tns({
      container: document.getElementById('hero-slider'),
      autoplay: true,
      speed: 1000,
      autoplayTimeout: 5000,
      controlsText: ['&#x221F;', '&#x221F;'],
      lazyload: true
    });

    var projectsSlider = tns({
      container: document.getElementById('projects-slider'),
      items: 1,
      responsive: {
        1025: 4,
        768: 3,
        481: 2,
      },
      slideBy: 'page',
      autoplay: true,
      speed: 1000,
      autoplayTimeout: 10000,
      controlsText: ['&#x221F;', '&#x221F;']
    });
    //------------------------------------------------------------------------//

    //fixed header
    var main = document.getElementById('main'),
        header = document.getElementById('page-header'),
        headerClone = header.cloneNode(true);

    headerClone.classList.add('fixed-clone');
    main.insertBefore(headerClone, header);

    function fixHeader() {
      var headerHeight = header.offsetHeight;

      if (window.scrollY > headerHeight) {
        headerClone.classList.add('shown');
      } else {
        headerClone.classList.remove('shown');
      }
    }

    window.addEventListener('scroll', fixHeader);

    var toggleButtonClone = headerClone.querySelector('.btn-nav');
    toggleButtonClone.addEventListener('click', toggleMenu);
    //------------------------------------------------------------------------//

  });
}());
