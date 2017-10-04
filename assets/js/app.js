'use strict';
var map;
var table = document.querySelector('#list tbody');

document.addEventListener("DOMContentLoaded", function (event) {
  create_map();
});

function create_map() {
  window.map = window.L.map('map', {
    center: [20.0, 5.0],
    minZoom: 2,
    zoom: 2
  });
  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors'
  }).addTo(window.map);
  add_speakers();
}

function add_speakers() {
  window.fetch('list.json')
          .then(function (response) {
            return response.json();
          }).
          then(function (json) {
            json = json.list;
            console.log(json.length + ' people loaded');
            document.querySelector('.counter').innerHTML = json.length + ' ';
            for (var i = 0; i < json.length; ++i) {
              //add marker
              var popup = '<img src="' + get_gravatar_image_url(json[i].gravatar) + '" />';
              popup += '<br>' + json[i].country + '<br>';
              popup += '<a href="' + json[i].url + '" target="_blank">' + json[i].name + '</a>';
              window.L.marker([json[i].lat, json[i].lng])
                      .bindPopup(popup)
                      .addTo(window.map);
              //populate list
              var rowCount = window.table.rows.length;
              var row = window.table.insertRow(rowCount);
              var cell1 = row.insertCell(0);
              cell1.innerHTML = '<a href="' + json[i].url + '" target="_blank">' + json[i].name + '</a>';
              var cell2 = row.insertCell(1);
              cell2.innerHTML = json[i].country;
            }
            document.querySelector('#list thead td').click();
          });
}

//from http://jsfiddle.net/xanderiel/Tvnq7/4/
function get_gravatar_image_url(email, size, default_image, allowed_rating, force_default) {
  email = typeof email !== 'undefined' ? email : 'john.doe@example.com';
  size = (size >= 1 && size <= 2048) ? size : 80;
  default_image = typeof default_image !== 'undefined' ? default_image : 'mm';
  allowed_rating = typeof allowed_rating !== 'undefined' ? allowed_rating : 'x';
  force_default = force_default === true ? 'y' : 'n';

  return ("https://secure.gravatar.com/avatar/" + md5(email.toLowerCase().trim()) + "?size=" + size + "&default=" + encodeURIComponent(default_image) + "&rating=" + allowed_rating + (force_default === 'y' ? "&forcedefault=" + force_default : ''));
}
