!function(){document.addEventListener("DOMContentLoaded",function(){function e(e){var t=e.target;"A"===t.nodeName&&"#"===t.getAttribute("href")&&e.preventDefault()}function t(e){var t=[],o=new XMLHttpRequest;o.open("GET","projects.json",!0),o.onload=function(){if(this.status>=200&&this.status<400){var o=JSON.parse(this.response);for(var i in o.projects)o.projects.hasOwnProperty(i)&&t.push(o.projects[i]);for(var s=0;s<e;s++){if(d>=t.length)return void c();n(t[d]),d++}r()}else console.error("Response received and there was an error")},o.onerror=function(){console.error("Request error")},o.send()}function n(e){s.innerHTML+='<div class="grid-25 tablet-grid-33 mobile-grid-50"><div class="project"><div class="project-image"style="background-image: url('+a+e.imageUrl+');"></div><div class="project-info"><div class="project__title">'+e.title+'</div><p class="project__description">'+e.description+'</p><div class="project-links-container"><div class="project-links"><a href="'+e.url+'"class="project__link" target="_blank">Show</a></div></div></div></div></div>'}function o(){var e=document.createElement("button"),t=document.createElement("div"),n=document.createElement("div");e.className="btn btn-load projects__btn-load",e.textContent="Load more",t.className="grid-100 projects__btn-load-wrap",t.appendChild(e),n.className="grid-container projects__btn-load-container",n.appendChild(t),s.parentElement.appendChild(n)}function r(){var e=document.querySelector(".projects__btn-load");e||(o(),e=document.querySelector(".projects__btn-load")),e.addEventListener("click",function(){t(4)})}function c(){var e=document.querySelector(".projects__btn-load-container");e&&e.parentElement.removeChild(e)}function i(e){var n=document.getElementById("projects"),o=n.getBoundingClientRect(),r=document.documentElement.clientHeight,c=o.top&&o.top<r,s=o.bottom&&o.bottom<r;console.log(pageYOffset+" "+o.top+" "+r),(c||s)&&(t(8),window.removeEventListener("scroll",i))}document.addEventListener("click",e);var s=document.getElementById("projects-container"),a="https://negodiaev.github.io/projects/",d=0;window.addEventListener("scroll",i),setTimeout(function(){document.querySelector(".hero__title").classList.add("hero__title--shown")},2e3)})}();