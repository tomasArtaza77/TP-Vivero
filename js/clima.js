let api = 'https://weatherservices.herokuapp.com/api';
let alertasUrl = "/alerts/byDay/";
let pronosticoUrl = "/weather/"
let selectedPronostico = false;
let selectedAlertas = false;
let fechaSeleccionada = "3"

async function selectedFecha() {
    if ($("#select_fecha").val() != fechaSeleccionada) {
        $("#alerta_1").empty()
        let url = api + alertasUrl + $("#select_fecha").val();
        await axios.get(url).then(
            function (response) {
                alerta = {
                    fecha: response.data.alerts[0].date,
                    info: response.data.alerts[0].title,
                    zonas: response.data.alerts[0].zones
                }
            }
        )
        $("#container_alertas").show()
        $("#alerta_1").show()
        selectedAlertas = false
        fechaSeleccionada = $("#select_fecha").val()
        renderTableAlertas(alerta)
    }
}

async function consultarAlertas() {
    $("#alerta_1").empty()
    let url = api + alertasUrl + fechaSeleccionada;
    if (!selectedAlertas) {

        await axios.get(url).then(
            function (response) {
                alerta = {
                    fecha: response.data.alerts[0].date,
                    info: response.data.alerts[0].title,
                    zonas: response.data.alerts[0].zones
                }
            }

        )
        $("#container_clima").hide()
        $("#container_alertas").show()
        $("#alerta_1").show()
        selectedAlertas = true
        renderTableAlertas(alerta)
    } else {
        $("#container_clima").hide()
        $("#container_alertas").show()
        $("#alerta_1").show()
    }

}

async function renderTableAlertas(alerta) {
    $("#alerta_1").append('<p class="small mb-1"> ' + formatDate(alerta.fecha) + " </p>");
    $("#alerta_1").append('<p class="small mb-0"> Descripción: ' + alerta.info + "</p>");
    for (let i = 0; i < Object.keys(alerta.zonas).length; i++) {

        $("#alerta_1").append('<p class="small mb-0"> Zona: ' + alerta.zonas[i] + '</p> ');
    }
}

async function consultarClima() {
    let url = api + pronosticoUrl;
    let pronostico
    if (!selectedPronostico) {
        await axios.get(url).then(
            function (response) {
                const pronosticoResponse = response.data.items[0]

                pronostico = {
                    ciudad: pronosticoResponse.name,
                    provincia: pronosticoResponse.province,
                    date: pronosticoResponse.forecast.date_time,
                    humedad: pronosticoResponse.weather.humidity,
                    velViento: pronosticoResponse.weather.wind_speed,
                    estado: pronosticoResponse.weather.description,
                    temperatura: pronosticoResponse.weather.temp,
                    presion: pronosticoResponse.weather.pressure,
                    proximosDias: getPronosticoProximosDias(pronosticoResponse.forecast.forecast)
                }

            }
        );
        selectedPronostico = true
        $("#container_clima").show()
        $("#container_alertas").hide()
        $("#alerta_1").hide()

        renderTable(pronostico)
    } else {
        $("#container_alertas").hide()
        $("#alerta_1").hide()
        $("#container_clima").show()
    }
}

async function renderTable(pronostico) {
    $(".container").show()
    $("#header_pronostico_id").append("<p class=small>" + pronostico.ciudad + "</p>");
    $("#header_pronostico_id").append("<p class=small>" + formatDate(pronostico.date) + "</p>");
    $("#header_pronostico_id").append("<p class=small>" + pronostico.estado + "</p>");

    $("#content_pronostico_id").append('<p class="fw-bold mb-0" style="font-size: 7rem;">' + pronostico.temperatura + "ºC </p>");
    $("#info_pronostico_id").append('<p class="small"> Humedad: ' + pronostico.humedad + "% </p>");
    $("#info_pronostico_id").append('<p class="small"> Viento: ' + pronostico.velViento + " km/h </p>");
    $("#info_pronostico_id").append('<p class="small"> Presión: ' + pronostico.presion + " hPa </p>");

    for (let i = 0; i < 4; i++) {
        $("#day_" + (i + 1).toString()).append('<p class="small mb-1"> ' + getDayName(pronostico.proximosDias[i].date) + " </p>");
        $("#day_" + (i + 1).toString()).append('<p class="small mb-0"> Temp Máx: ' + pronostico.proximosDias[i].tempMax + "ºC</p>");
        $("#day_" + (i + 1).toString()).append('<p class="small mb-0"> Temp Mín: ' + pronostico.proximosDias[i].tempMin + 'ºC </p> ');
    }
}

function getPronosticoProximosDias(pronostico) {
    let nextDays = [];

    for (let i = 1; i <= 4; i++) {
        nextDays.push({
            date: pronostico[i].date,
            tempMax: pronostico[i].temp_max,
            tempMin: pronostico[i].temp_min
        })

    }

    return nextDays
}

function getDayName(date) {
    let dia = new Date(date).toLocaleDateString('es-es', { weekday: 'long' })
    return dia.substring(0, 1).toUpperCase() + dia.substring(1)
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('es-es', {})
}

