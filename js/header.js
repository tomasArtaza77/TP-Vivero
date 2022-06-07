$(document).ready(function(){

    $(".subheader").hide(); // no esta logueado personal del vivero

    var logueado = localStorage.getItem("logueado");
    var correo = localStorage.getItem("correo");

    if(logueado == "true" && correo == 'botanica@gmail.com'){
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
    
    actualizar()


}

function actualizar() {

    var logueado = localStorage.getItem("logueado");

    if(logueado == "true" && correo == 'botanica@gmail.com'){
        $(".mainheader").hide();
        $(".subheader").show();
    } else if(logueado == "true"){
        $(".subheader").hide();
        $(".mainheader").show();
    }

}
