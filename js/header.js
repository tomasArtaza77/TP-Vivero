$(document).ready(function(){

    var logueado = localStorage.getItem("logueado");
    console.log(logueado)
    if(logueado=="true"){
        $(".mainheader").hide();
        $(".subheader").show();
    } else {
        $(".subheader").hide();
    $(".mainheader").show();
    }
    actualizar()

})

function logout() {
    
    localStorage.removeItem("correo");
    localStorage.setItem("logueado", false);
    $(".subheader").hide();
    $(".mainheader").show();
    
    actualizar()


}

function actualizar() {

    var logueado = localStorage.getItem("logueado");

    if(logueado=="true"){
        $(".mainheader").hide();
        $(".subheader").show();
    } else {
        $(".subheader").hide();
    $(".mainheader").show();
    }


}
