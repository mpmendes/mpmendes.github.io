  // Contact form 
  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    let form = document.getElementById("contact-form");
    let button = document.getElementById("form-button");
    let status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
	function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thanks!".fontcolor("green");
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.".fontcolor("red");
    } 
    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      let data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

    // Map Leaflet
    let myMap = L.map('geo-map').setView([41.549949, -8.427539], 12);

    // Marker to position
    let marker = L.marker([41.549949, -8.427539]).addTo(myMap);
    marker.bindPopup("<b>Reach out!</b><br>").openPopup();


    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoidmlzbHV4IiwiYSI6ImNrOWc5eXVxaTAxNnMzZ213NzRybm5saGgifQ.UG3hU1tUJAf56ZSzHY0umA'
    }).addTo(myMap);
