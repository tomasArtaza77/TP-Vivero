function login() {

    var correo = $("#input_correo").val();
    var password = $("#input_password").val();
    var expresion_mail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var correoOK = expresion_mail.test(correo);

    if (correo != "" && password != "" && correoOK) {
        localStorage.setItem("correo", correo);
        localStorage.setItem("logueado", true);

        $("#input_correo").val("");
        $("#input_password").val("");
        $("#sec_login").hide();
        $("#sec_loginExitoso").show();
        header();
    }else{
        if(!correoOK){
            alert("Por favor introduzca un mail válido (name@example.com)");
        }else{
            alert("Por favor introduzca todos los campos");
        } 
    }
}

function logout() {
    localStorage.removeItem("correo");
    localStorage.setItem("logueado", false);

    $("#sec_login").show();
    $("#sec_loginExitoso").hide();
}