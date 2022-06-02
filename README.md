# The International Space Satellite (ISS) Tracker Project
I built a web application for tracking the international space satellite as it goes around the world. You can see the longitude, latitude and visibility live on the site.

**Link to project:** https://oniso20.github.io/IntSpaceSatelliteTracker/

![alt tag](img.png?raw=true "Satellite over the globe")

## How It's Made:

**Tech used:** HTML, CSS, and JavaScript

The web application was developed using very little HTML and CSS to provide a structure for the site and basic coordinates information. JavaScript makes up the most part of the project.

The site is developed using two APIs;
The first for fetching the satellite location, the where is the ISS (WTIA) rest API is used. With the API, developers can get current, past, or future position of the ISS, get timezone information about a set of coordinates. You can read more about the API here - https://wheretheiss.at/w/developer.

The data on the coordinates is fetched from the WTIA REST API and displayed on the DOM. Also the data is used to update the ISS location on the map every 1 second.

Secondly, the leaflet API developed by Volodymyr Agafonkin, a Ukrainian citizen living in Kyiv is used to provide the mapping features needed to display the satellite location. Leaflet is one of the leading open-source JavaScript library for mobile-friendly interactive maps. You can read more about the API here - https://leafletjs.com/.

The leaflet API provided the zoom and image as an icon functionality added to the site. Using the location coordinates from the WTIA REST API, the leaflet API can display the location.


## Optimizations

The application was first developed using fetch() and .then and later refactored to use async await method. The leaflet API is used in place of Google map to support Ukraine.

## Lessons Learned:

I had a fun figuring out the use of the leaflet API. It has a lot of options I hope to go back to in the future.

## Key Resources:

**Where is the ISS API:** https://wheretheiss.at/w/developer 

**Leaflet Map:** https://leafletjs.com/