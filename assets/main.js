
function initMap() {
    var options = {
        center: { lat: 41.02911165781979, lng: 28.97510044560216 },
        zoom: 14,
        mapId: "d3a2ea52cb7b769",
        disableDefaultUI: true,
    }

    map = new google.maps.Map(document.getElementById("map"), options);

    const marker = new google.maps.Marker({

        position: { lat: 41.02911165781979, lng: 28.97510044560216 },
        map: map,
        icon: "/assets/img/marker.png",


    })

}

window.initMap = initMap;

const input1 = document.getElementById("fromInput")
const input2 = document.getElementById("whereInput")
var sonuc1;
var sonuc2;


const updateSonuc1 = debounce((text) => {
    sonuc1 = text
    console.log(sonuc1)
})
const updateSonuc2 = debounce((text) => {
    sonuc2 = text
    console.log(sonuc2)
})

input1.addEventListener("input", e => {
    updateSonuc1(e.target.value)
})
input2.addEventListener("input", e => {
    updateSonuc2(e.target.value)
})

function debounce(cb, delay = 1500) {
    let timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args)
        }, delay)
    }

}

setInterval(function () {
    if(sonuc1!=sonuc2 && sonuc1 != '' && sonuc1 != undefined && sonuc2 != '' && sonuc2 != undefined ){
        window.location.href="index.html"
    }
}, 10000);