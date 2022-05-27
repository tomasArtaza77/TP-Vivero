let planta;

function onClick() {
    planta = crearPlanta();
    showPlantaRegistrada();
}

function crearPlanta() {
    return {
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
}


function showPlantaRegistrada() {
    var datos = "<h5 class=atributo id=nombreCientificoModal >Nombre Científico: " + planta.nombreCientifico + "</h5>"  +
        "<h5 class=atributo id=nombreCientificoModal >Nombre Común: " + planta.nombreComun + "</h5> " +
        "<h5 class=atributo id=nombreCientificoModal >Fase: " + planta.fase + "</h5>" +
        "<h5 class=atributo id=nombreCientificoModal >Color: " + planta.color + "</h5>" +
        "<h5 class=atributo id=nombreCientificoModal >Nombre Familia: " + planta.familia.nombreFamilia + "</h5>" +
        "<h5 class=atributo id=nombreCientificoModal >Cuidados: " + planta.familia.cuidados + "</h5>" +
        "<h5 class=atributo id=nombreCientificoModal >Fruto: " + planta.familia.fruto + "</h5>" +
        "<h5 class=atributo id=nombreCientificoModal >Tipo Suelo: " + planta.tipoSuelo + "</h5>" +
        "<h5 class=atributo id=nombreCientificoModal >Fila: " + planta.ubicacionDeposito.fila + "</h5>" +
        "<h5 class=atributo id=nombreCientificoModal >Columna: " + planta.ubicacionDeposito.columna + "</h5>"
    document.getElementById("contenedor-datos").innerHTML = datos;
}