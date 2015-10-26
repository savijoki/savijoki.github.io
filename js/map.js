function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        center: new google.maps.LatLng(61.474747, 23.834561),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(mapCanvas, mapOptions)


    var markers = [

    ['Koulu', 61.449981, 23.858911, 'images/koulu.png'],
    ['Koti', 61.452643, 23.861649, 'images/koti.png'],
    ['Kauppa', 61.450864, 23.850952, 'images/kauppa.png'],
    ['Työpaikka', 61.501225, 23.802677, 'images/tyo.png'],
    ['Posti', 61.451430, 23.851249, 'images/posti.png']

    ];

    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        // bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0],
            icon: markers[i][3]
        });
    }




    // var koulu = new google.maps.LatLng(61.449981, 23.858911);
    // var marker = new google.maps.Marker({
    //     position: koulu,
    //     title: "TTY",
    //     icon: "images/koulu.png"
    // });

    // var koti = new google.maps.LatLng(61.452643, 23.861649);
    // var marker = new google.maps.Marker({
    //     position: koti,
    //     title: "Koti",
    //     icon: "images/koti.png"
    // });

    // var kauppa = new google.maps.LatLng(61.450864, 23.850952);
    // var marker = new google.maps.Marker({
    //     position: kauppa,
    //     title: "Kauppa",
    //     icon: "images/kauppa.png"
    // });

    // var tyo = new google.maps.LatLng(61.501225, 23.802677);
    // var marker = new google.maps.Marker({
    //     position: tyo,
    //     title: "Työpaikka",
    //     icon: "images/tyo.png"
    // });

    // var posti = new google.maps.LatLng(61.451430, 23.851249);
    // var marker = new google.maps.Marker({
    //     position: posti,
    //     title: "Posti",
    //     icon: "images/posti.png"
    // });


marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
