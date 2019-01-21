var myLocation = [72.64, 31.1];


var map = L.map('map', {
    center: myLocation,
    zoom: 8,
});

L.tileLayer('http://localhost:3600/api/tiles/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Maplet &copy; <a href="https://github.com/DevelopSmith/maplet">Develop Smith</a>',
    maxZoom: 10,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

L.marker(myLocation).addTo(map)
    .bindPopup('Cairo<br> A lovely place!')
    .openPopup();

var circle = L.circle([72.34, 30.01], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 4500
}).addTo(map);
