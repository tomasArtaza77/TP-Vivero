$(document).ready(function () {
    header()
})

function header() {
    var logueado = localStorage.getItem("logueado");
    var correo = localStorage.getItem("correo");

    if (logueado === "true" && correo == 'botanica@gmail.com') {
        getHeaderBotanica()
    } else {
        getHeaderCliente(logueado)
    }
}

function getHeaderCliente(logueado) {
    if (logueado === "true") {
        $("#login_id").hide();
        $("#logout_id").show();
        $("#registro_id").hide();
        $("#clima").hide();

    } else {
        $("#login_id").show();
        $("#logout_id").hide();
        $("#registro_id").hide();
        $("#puntos_venta_id").show();
    }
}

function getHeaderBotanica() {
    $("#login_id").hide();
    $("#logout_id").show();
    $("#registro_id").show();
    $("#clima_id").show();
    $("#puntos_venta_id").hide();
}

function logout() {
    localStorage.removeItem("correo");
    localStorage.setItem("logueado", false);
    header()
}


