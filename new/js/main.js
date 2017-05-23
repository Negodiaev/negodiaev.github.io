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
        projectsList = [],
        projectsDir = 'http://negodiaev.github.io/new/projects/';

    var request = new XMLHttpRequest();
      request.open('GET', '../projects.json', true);

      request.onload = function() {
      	if (this.status >= 200 && this.status < 400) {
      		var data = JSON.parse(this.response),
              project = '';

          for (var prop in data.projects) {
            if (data.projects.hasOwnProperty(prop)) {
              projectsList.push(data.projects[prop]);
            }
          }

          projectsList.forEach(function(item) {
            projectsContainer.innerHTML +=
            '<div class="grid-25 tablet-grid-33 mobile-grid-50">' +
              '<div class="project">' +
                '<div class="project-image"' +
                     'style="background-image: url(' +
                     projectsDir + item.imageUrl + ');"></div>' +
                '<div class="project-title">' +
                  item.title +
                '</div>' +
                '<div class="project-decription">' +
                  item.description +
                '</div>' +
                '<a href="' + projectsDir + item.url + '"' +
                   'class="project-link" target="_blank">Show</a>' +
              '</div>' +
            '</div>';
          });
      	} else {
      		console.error('Response received and there was an error');
      	}
      };

      request.onerror = function() {
      	console.error('Request error');
      };

      request.send();
    //------------------------------------------------------------------------//

  });
}());