"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var page = 3

function formatCars(carsJSON) {
  let html = `<div class="row">${carsJSON.map(car => '<div class="col-md-4 car"><h2>' + car.Make + '</h2><p><strong>Model:</strong> ' + car.Model + '</p><p><strong>Year:</strong> ' + car.Year + '</p></div>').join("")}</div>`
  return html
}

function addCarsToDOM(carsJSON) {
  let formatted = formatCars(carsJSON)
  $('#cars').append(formatted)
}

function fetchJSON() {
  $.ajax({
        url: `${baseUrl}${page}/3`,
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(data) {
          addCarsToDOM(data)
        }
      });
      page++
}
