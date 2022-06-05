// actualmente este esta en el html
function login() {
    
    let user, password;

    user = document.getElementById("userEmail").value;
    password = document.getElementById("userPassword").value;

    console.log("User info: ", user, ' ', password);

    if (user != '' && password != '') {
        $("#success_login").show();
    }
            

}

function login2(){
    var user, password;
   
    var user = $("#userEmail").val();
    var password = $("#userPassword").val();

    if (user != '' && password != '') {
        $("#success_login").show();
    }
}