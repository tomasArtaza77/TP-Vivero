var map;
var locacionInicial = [-34.528207, -58.721828];

function mapa() {
    map = L.map('mapid').setView(locacionInicial, 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    mostrarTiendas();
}

function mostrarTiendas() {
    $(".tituloTiendas").text("Tiendas adheridas");
    $(".listaTiendas").show();

    dibujarZonas();

    let icon = L.divIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color:#4838cc;' class='marker-pin'></div><i class='fas fa-store'>",
        iconSize: [26, 38],
        iconAnchor: [15, 42],
        popupAnchor: [0, -35]
    });

    //carga de locaciones
    var cluster = L.markerClusterGroup();
    for (let index = 0; index < locacionTiendas.length; index++) {
        cluster.addLayers([
            L.marker([locacionTiendas[index].lat, locacionTiendas[index].long], { icon: icon })
                .bindPopup("<b>" + datosTiendas[index].nombre + "</b>" + "<br>" +
                    "<b>" + "Dirección: " + "</b>" + datosTiendas[index].direccion + "<br>" +
                    "<b>" + "Horario: " + "</b>" + datosTiendas[index].horario + "<br>" +
                    "<b>" + "Telefóno: " + "</b>" + datosTiendas[index].telefono),
        ])


        $("#grupo1").append("<option id=tienda" + index + ">" + datosTiendas[index].nombre + "</option>");
        $("#tienda" + index).on("click", function (event) {
            let nombreTienda = event.target.innerText;
            hacerZoom(nombreTienda);
        });
    }
    cluster.addTo(map);
}

function hacerZoom(nombreTienda) {
    for (let i = 0; i < datosTiendas.length; i++) {

        if (nombreTienda == datosTiendas[i].nombre.toUpperCase()) {
            let latitud = locacionTiendas[i].lat;
            let longitud = locacionTiendas[i].long;

            map.setView([latitud, longitud], 17);

            let icon = L.divIcon({
                className: 'custom-div-icon',
                html: "<div style='background-color:#4238cc;' class='marker-pin'></div><i class='fas fa-parker'>",
                iconSize: [26, 38],
                iconAnchor: [15, 42],
                popupAnchor: [0, -35]
            });

            let popUp = "<b>" + datosTiendas[i].nombre + "<br>" +
                "<b>Dirección: </b>" + datosTiendas[i].direccion + "<br>" +
                "<b>Horarios: </b>" + datosTiendas[i].horario + "<br>" +
                "<b>Telefono: </b>" + datosTiendas[i].telefono;

            L.marker([latitud, longitud], { icon: icon }).bindPopup(popUp).addTo(map).openPopup();
        }
    }
}

function dibujarZonas() {
    // BROWN
    L.polygon([
        L.latLng(-34.523215, -58.746536),
        L.latLng(-34.530210, -58.758802),
        L.latLng(-34.522301, -58.766945),
        L.latLng(-34.515241, -58.752951),
    ], { color: 'brown' }).addTo(map);

    // GREEN
    L.polygon([
        L.latLng(-34.550677, -58.705811),
        L.latLng(-34.544372, -58.699481),
        L.latLng(-34.534604, -58.712735),
        L.latLng(-34.540897, -58.719577),

    ], { color: 'green' }).addTo(map);

    // PURPLE
    var latlngs = [
        [-34.523483, -58.696333],
        [-34.520382, -58.699940],
        [-34.517750, -58.702989],
        [-34.517995, -58.708311],
        [-34.522680, -58.713295],
        [-34.530062, -58.705161],

    ]

    L.polygon(latlngs, { color: 'purple' }).addTo(map); //Esta linea es necesaria para cambiar el color del poligono
}