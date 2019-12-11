let mymap = L.map('mapid').setView([19.0216, 72.8707], 16);

let defaultToDarkFilter = [
    'grayscale:100%',
    // 'invert:100%',
]

L.tileLayer.colorFilter('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
    maxZoom: 19,
    filter: defaultToDarkFilter
}).addTo(mymap);

var marker = L.marker([19.0216, 72.8707]).addTo(mymap);

async function animate() {
    document.querySelector('.catchy').innerHTML = ' Lorem ipsum dolor sit amet consectetur accusamus quia eveniet at sit minus! Expedita, voluptas vel?';
    document.querySelector('.column1As > h2').innerHTML = 'CONTACT US';
}
