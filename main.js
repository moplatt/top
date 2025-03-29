/*
Script für die Lieblingorte
*/

const STOPS = [
    {
        nr: 21,
        title: "Tafraoute",
        user: "moplatt",
        lat: 29.71,
        lng: -8.96,
        zoom: 11,
    }

];

// Karte initialisieren
let map = L.map('map');
//Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Marker zeichnen
// loop über Etappen 
for (let i = 0; i < STOPS.length; i++) {
    // console.log(STOPS[i]);
    let marker = L.marker([STOPS[i].lat, STOPS[i].lng]).addTo(map);

    // Popup definieren
    marker.bindPopup(`
            <h2><b>${STOPS[i].title}!</b></h2>
            <br> 
            <ul>
                <li>geogr. Länge: ${STOPS[i].lat.toFixed(5)}°</li>
                <li>geogr. Breite ${STOPS[i].lng.toFixed(5)}°</li>
            </ul>
        `);

    //auf eigene Etappe blicken und Popup öffnen
    if (STOPS[i].user == "moplatt") {
        console.log(STOPS[i].user, " = meine Etappe ;)")
        map.setView([STOPS[i].lat, STOPS[i].lng], STOPS[i].zoom);
        marker.openPopup();
    }

    // Pulldownmenü befüllen
    let option = document.createElement("option");
    option.value = STOPS[i].user;
    option.text = STOPS[i].title;
    if (STOPS[i].user == "moplatt") {
        option.selected = true;
    }
    document.querySelector("#pulldown select").appendChild(option);
}

// auf Änderungen beim Pulldown reagieren
document.querySelector("#pulldown select").onchange = function(evt) {
    let url = `https://${evt.target.value}.github.io/nz`;
    // console.log(url);
    // console.log(evt.target.value);
    window.location = url;
}