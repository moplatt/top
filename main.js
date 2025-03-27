/*
Script für die Lieblingorte
*/

let lat = 29.71;
let lon = -8.96;
let zoom = 11

// Karte initialisieren
var map = L.map('map').setView([lat,lon ], zoom);
//Hintergrundkarte definieren
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        // Marker zeichnen
        var marker = L.marker([lat, lon]).addTo(map);
        // Popup definieren und öffnen
        marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();