//create map
const map = L.map('mapid').setView([-23.2837783,-46.744214], 16);


// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "/images/vacine3.png",
    iconSize: [78,78],
    iconAnchor: [18,78],
    popupAnchor: [170,2],
    
  })

function addMarker({id, name, lat, lng}) {



        // create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="unity?id=${id}"><img src="/images/arrow-white.svg" > </a>`)




    //create and add marker
    L
        .marker([lat, lng], { icon })
        .addTo(map)
        .bindPopup(popup)

}


const unitsSpan = document.querySelectorAll('.units span')
unitsSpan.forEach(span => {
    const unity = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(unity)
})


function showPopup(popupID) {
    const popup = document.querySelector(`#${popupID}`);
    if(popup) {
    popup.classList.add('show');
    popup.addEventListener('click', (e) => {
        if(e.target.id == popupID || e.target.className == 'quit') {
            popup.classList.remove('show');
        }
    });
    }
}


const click = document.querySelector('.zoom');
click.addEventListener('click', () => showPopup('pop-up-info'));



//showPopup('pop-up-info');
