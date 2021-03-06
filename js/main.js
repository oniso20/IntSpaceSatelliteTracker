
const myMap = L.map('map').setView([0, 0], 1);
const myIcon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [80, 52],
    iconAnchor: [25, 16],
});
const marker = L.marker([0, 0], {icon: myIcon}).addTo(myMap);

const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

      const TITLE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const tiles = L.tileLayer(TITLE_URL, { attribution });
      
      tiles.addTo(myMap);


const API_URL = 'https://api.wheretheiss.at/v1/satellites/25544'


// To avoid view updates when ISS moves use this variable (firstTime)

let firstTime = true;

async function getISS() {
    const response = await fetch(API_URL);
    const data = await response.json();
    const { 
        longitude, 
        latitude,
        visibility 
    } = data

    //This sets the value of the marker
    marker.setLatLng([latitude, longitude])

    // continue firstTime code action
    if (firstTime) {
        myMap.setView([latitude, longitude], 5);
        firstTime = false;
    }

    document.getElementById('lat').innerText = latitude.toFixed(3)
    document.getElementById('lon').innerText = longitude.toFixed(3)
    document.getElementById('vis').innerText = visibility.toUpperCase()
}
getISS()

setInterval(getISS, 1000)
