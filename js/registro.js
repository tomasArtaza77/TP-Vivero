function myFunction() {
    let planta = {
        nombreCientifico: document.getElementById("nombreCientifico").value,
        nombreComun: document.getElementById("nombreComun").value,
        fase: document.getElementById("fase").value,
        color: document.getElementById("color").value,
        familia: {
            nombreFamilia: document.getElementById("nombreFamilia").value,
            cuidados: document.getElementById("cuidados").value,
            fruto: document.getElementById("fruto").value,
        },

        tipoSuelo: document.getElementById("tipoSuelo").value,
        ubicacionDeposito: {
            fila: document.getElementById("fila").value,
            columna: document.getElementById("columna").value,
        },


    }
    console.log(planta)
    showPlantaRegistrada(planta);
}


function showPlantaRegistrada(planta) {
    console.log(planta.nombreCientifico)
    $("#modal-title") =   planta.nombreCientifico
}