var map = L.map('map').setView([29.71, -8.96], 11);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        var marker = L.marker([29.71, -8.96]).addTo(map);
        marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();