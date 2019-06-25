//Utility functions
function randomInt(max) {
    return Math.floor(Math.random() * max);
}

//Data
const attributes = ['Index', 'Latitude', 'Longitude', 'Property 1', 'Property 2'];
const data = [
    [1, 51.505, -0.0900, randomInt(10), randomInt(3)],
    [2, 51.505, -0.0899, randomInt(10), randomInt(3)],
    [3, 51.505, -0.0898, randomInt(10), randomInt(3)],
    [4, 51.505, -0.0897, randomInt(10), randomInt(3)],
    [5, 51.505, -0.0896, randomInt(10), randomInt(3)],
    [6, 51.505, -0.0895, randomInt(10), randomInt(3)],
    [7, 51.505, -0.0894, randomInt(10), randomInt(3)],
];


//Leaflet Map 
const mapViz = L.map('map-viz').setView([51.505, -0.09], 6);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(mapViz);

const prepData = [];
data.forEach(function(item) {
    prepData.push(item.slice(1, 3));
});

const heat = L.heatLayer(prepData, { radius: 25, blur: 0, maxZoom: 8, max: true }).addTo(mapViz);

/* 
 * Constructing the table
 */

//Table Header
const thead = document.getElementById('data-thead');
const headRow = document.createElement('tr');

attributes.forEach(function(item) {
    const cell = document.createElement('th');
    cell.appendChild(document.createTextNode(item));
    headRow.appendChild(cell);
});
thead.append(headRow);

//Table Rows
const tbody = document.getElementById('data-tbody');

data.forEach(function(item) {
    const bodyRow = document.createElement('tr');
    item.forEach(function(dataItem) {
        const cell = document.createElement('td');
        cell.appendChild(document.createTextNode(dataItem));
        bodyRow.appendChild(cell);
    });
    tbody.appendChild(bodyRow);
});

/* 
 * Filters
 */