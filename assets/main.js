
function initMap(){
    var options = {
        center: {lat:41.02911165781979 , lng: 28.97510044560216},
        zoom: 14,
        mapId: "d3a2ea52cb7b769",
        disableDefaultUI: true,
    } 

    map = new google.maps.Map(document.getElementById("map"), options);

    const marker = new google.maps.Marker({
        
        position: {lat:41.02911165781979 , lng: 28.97510044560216},
        map: map,
        icon: "/assets/img/marker.png",
       

    })

}

window.initMap = initMap;