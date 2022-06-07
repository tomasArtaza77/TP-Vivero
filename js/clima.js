let api = 'https://weatherservices.herokuapp.com/api';
let alertasUrl = "/alerts/byDay/";
let pronosticoUrl = "/weather/"

function consultarAlertas() {
    let url = api + alertasUrl + '1';

    // if (patente != "") {
    axios.get(url).then(
        function (response) {
            console.log(rendesponse.data)
        }
    );


}

function consultarClima() {
    let url = api + pronosticoUrl;
    let pronostico
    axios.get(url).then(
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

            renderTable(pronostico)
        }
    );
}

function renderTable(pronostico) {
    $("#header_pronostico_id").append("<p class=small>" + pronostico.ciudad + "</p>");
    $("#header_pronostico_id").append("<p class=small>" + pronostico.date + "</p>");
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
    // dia.substring(0,3)
    return dia.substring(0, 1).toUpperCase() + dia.substring(1)
}

