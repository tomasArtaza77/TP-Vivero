$(document).ready(function(){

    var logueado = localStorage.getItem("logueado");

    if(logueado=="true"){
        $(".subheader").show();
    }
})

function logout() {
    
    localStorage.removeItem("correo");
    localStorage.setItem("logueado", false);

    
    $(".subheader").hide();
    $(".mainheader").hide();

    $("#boton_iniciar_sesion").show();
    $("#boton_registrarse").show();

}
