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
    //creating a projects list
    var projectsContainer = document.getElementById('projects-container'),
        projectsDir = 'https://negodiaev.github.io/projects/',
        projectsCounter = 0;

    function getProjects(projectsNumber) {
      var projectsList = [];
      var request = new XMLHttpRequest();
      request.open('GET', 'projects.json', true);

      request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          var data = JSON.parse(this.response);

          for (var prop in data.projects) {
            if (data.projects.hasOwnProperty(prop)) {
              projectsList.push(data.projects[prop]);
            }
          }

          for (var i = 0; i < projectsNumber; i++) {
            if (projectsCounter >= projectsList.length) {
              console.log('too much');
              removeLoadBtn();
              return;
            } else {
              addProject(projectsList[projectsCounter]);
              projectsCounter++;
            }
          }
          console.log(projectsCounter + ', ' + projectsList.length);
          addLoadBtn();
        } else {
          console.error('Response received and there was an error');
        }
      };

      request.onerror = function() { console.error('Request error'); };
      request.send();
    }

    function addProject(item) {
      projectsContainer.innerHTML +=
       '<div class="grid-25 tablet-grid-33 mobile-grid-50">' +
        '<div class="project">' +
          '<div class="project-image"' +
               'style="background-image: url(' +
            projectsDir + item.imageUrl + ');"></div>' +
          '<div class="project-info">' +
            '<div class="project__title">' +
              item.title +
            '</div>' +
            '<p class="project__description">' +
              item.description +
            '</p>' +
            '<div class="project-links-container">' +
              '<div class="project-links">' +
                '<a href="' + projectsDir + item.url + '"' +
                   'class="project__link" target="_blank">Show</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    }

    function createLoadBtn() {
      var btn = document.createElement('button'),
          btnWrap = document.createElement('div'),
          btnContainer = document.createElement('div');

      btn.className = 'btn btn-load projects__btn-load';
      btn.textContent = 'Load more';
      btnWrap.className = 'grid-100 projects__btn-load-wrap';
      btnWrap.appendChild(btn);
      btnContainer.className = 'grid-container projects__btn-load-container';
      btnContainer.appendChild(btnWrap);

      projectsContainer.parentElement.appendChild(btnContainer);
    }

    function addLoadBtn() {
      var btnLoad = document.querySelector('.projects__btn-load');
      if (!btnLoad) {
        createLoadBtn();

        btnLoad = document.querySelector('.projects__btn-load');
      }
      btnLoad.addEventListener('click', function() { getProjects(4); });
    }

    function removeLoadBtn() {
      var btnContainer = document.querySelector('.projects__btn-load-container');

      if (btnContainer) btnContainer.parentElement.removeChild(btnContainer);
    }

    getProjects(8);
    //------------------------------------------------------------------------//


    //------------------------------------------------------------------------//
    //showing a hero title
    setTimeout(function() {
      document.querySelector('.hero__title').classList.add('hero__title--shown');
    }, 2000);
    //------------------------------------------------------------------------//

  });
}());