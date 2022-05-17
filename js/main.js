
const myMap = L.map('map').setView([0, 0], 1);
const circle = L.circle([0, 0], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(myMap);
const myIcon = L.icon({
    iconUrl: 'international-space-station.jpg',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
});
const marker = L.marker([0, 0], {icon: myIcon}).addTo(myMap);

const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

      const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const tiles = L.tileLayer(tileUrl, { attribution });
      
      tiles.addTo(myMap);


const API_URL = 'https://api.wheretheiss.at/v1/satellites/25544'

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
    circle.setLatLng([latitude, longitude])

    document.getElementById('lat').innerText = latitude
    document.getElementById('lon').innerText = longitude
    document.getElementById('vis').innerText = visibility
}
getISS()




// catchRainbow ()
// //Adding .then as a check if I got the data & .catch to check for error
//   .then(response => {
//     console.log('Working')
//   })

//   .catch(error => {
//     console.log(`error! ${error}`)
//   })

// async function catchRainbow() {
//   const response = await fetch('rainbow.jpg')
//   const blob = await response.blob()
//   document.getElementById('rainbow').src = URL.createObjectURL(blob)
// }

// Website - https://wheretheiss.at/w/developer

//https://leafletjs.com/