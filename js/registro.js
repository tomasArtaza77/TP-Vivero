let planta = {
    nombreCientifico: "",
    nombreComun: "",
    fase: "",
    color: "",
    tipoSuelo: "",
    familia: {
        nombreFamilia: "",
        cuidados: "",
        fruto: "",
    },
    ubicacionDeposito: {
        fila: "",
        columna: "",
    }
}

let familia = [
    {
        id: 1,
        nombre: 'Rosales',
        fruto: ' manzana, pera, membrillo, melocotón, ciruela, cereza, fresa, almendra, albaricoque, níspero, zarzamora, frambuesa, etc. ',
        cuidados: 'Regados cada 24hs,  necesitan suelo permeable, bien aireado (para evitar la proliferación de hongos en las hojas), profundo y sin compactar. Es la manera de que crezcan lozanos y saludables.'
    },
    {
        id: 2,
        nombre: 'Saxifragales',
        fruto: ' capsulares o foliculares',
        cuidados: 'Evitar el riego excesivo, que podria causar la muerte de la especie (producto de su podredumbre), requieren de mucha cantidad de luz diariamente (al menos medio dia de luz), Asimismo, la dotación de un sustrato compuesto por una mezcla entre arena y tierra, con buen drenaje, permite el desarrollo de estas plantas en buenas condiciones. También, se debe evitar que estas plantas se encuentren en sitios encerrados para disminuir el riesgo de que sean atacadas por hongos fitopatógenos.'
    },
    {
        id: 3,
        nombre: 'herbáceas',
        fruto: 'baya',
        cuidados: 'su floracion es durante todo el año, su ubicacion debe de ser preferentemente a pleno sol,La temperatura óptima varía entre los 24ºC de máxima y 10ºC de mínima, en un suelo bien drenado y con un pH entre 6,5 y 7,5. Se debe regar constantemente, pero sin encharcar. El abono es esencial una vez por semana en primavera y verano. El resto del año, una vez al mes.'
    }
]

let familiaIsEmpty = true

function onClick() {
    $("#campo_obligatorio_id").hide()
    if (validarInputs()) {
        crearPlanta();
        showPlantaRegistrada();
    } else {
        $("#campo_obligatorio_id").show()
    }
}

function validarInputs() {
    var nombreCientifico = $("#nombreCientifico").val()
    var nombreComun = $("#nombreComun").val()
    var fase = $("#fase").val()
    var color = $("#color").val()
    var nombreFamilia = $("#nombreFamilia").val()
    var cuidados = $("#cuidados").val()
    var fruto = $("#fruto").val()
    var tipoSuelo = $("#tipoSuelo").val()
    var fila = $("#fila").val()
    var columna = $("#columna").val()
    let validateInputs = (nombreCientifico == "" || nombreComun == "" || fase == "" || color == "" || tipoSuelo == "" || fila == "" || columna == "")
    let validateFamilia;

    if (familiaIsEmpty) {
        validateFamilia = cuidados == "" || fruto == "" || nombreFamilia == ""
        return !(validateInputs || validateFamilia)
    }
    return !validateInputs
}

function crearPlanta() {
    planta.nombreCientifico = $("#nombreCientifico").val()
    planta.nombreComun = $("#nombreComun").val()
    planta.fase = $("#fase").val()
    planta.color = $("#color").val()
    planta.tipoSuelo = $("#tipoSuelo").val()
    if (familiaIsEmpty) {
        planta.familia.nombreFamilia = $("#nombreFamilia").val()
        planta.familia.fruto = $("#fruto").val()
        planta.familia.cuidados = $("#cuidados").val()
    }
    planta.ubicacionDeposito.fila = $("#fila").val()
    planta.ubicacionDeposito.columna = $("#columna").val()

}

function selectedFamilia() {
    if ($("#select_familia").val() != 0 && $("#select_familia").val() != "") {
        let selFamilia = familia[$("#select_familia").val() - 1]
        planta.familia.nombreFamilia = selFamilia.nombre
        planta.familia.fruto = selFamilia.fruto
        planta.familia.cuidados = selFamilia.cuidados
        familiaIsEmpty = false;
        $("#container_input_select").show()
        $("#container_input_familia").hide()
    } else {
        familiaIsEmpty = true;
        $("#container_input_select").hide()
        $("#container_input_familia").show()
    }
}

function showPlantaRegistrada() {
    var datos = "<h5 class=atributo id=info_modal >Nombre Científico: " + planta.nombreCientifico + "</h5>" +
        "<h5 class=atributo id=info_modal >Nombre Común: " + planta.nombreComun + "</h5> " +
        "<h5 class=atributo id=info_modal >Fase: " + planta.fase + "</h5>" +
        "<h5 class=atributo id=info_modal >Color: " + planta.color + "</h5>" +
        "<h5 class=atributo id=info_modal >Nombre Familia: " + planta.familia.nombreFamilia + "</h5>" +
        "<h5 class=atributo id=info_modal >Cuidados: " + planta.familia.cuidados + "</h5>" +
        "<h5 class=atributo id=info_modal >Fruto: " + planta.familia.fruto + "</h5>" +
        "<h5 class=atributo id=info_modal >Tipo Suelo: " + planta.tipoSuelo + "</h5>" +
        "<h5 class=atributo id=info_modal >Fila: " + planta.ubicacionDeposito.fila + "</h5>" +
        "<h5 class=atributo id=info_modal >Columna: " + planta.ubicacionDeposito.columna + "</h5>"

    document.getElementById("contenedor-datos").innerHTML = datos;
    $("#modal_exitoso").show()
}

function cerrarModal() {
    $("#modal_exitoso").hide()
    clearInputs()
}

function clearInputs() {
    $("#nombreCientifico").val("")
    $("#nombreComun").val("")
    $("#fase").val("")
    $("#color").val("")
    $("#nombreFamilia").val("")
    $("#cuidados").val("")
    $("#fruto").val("")
    $("#tipoSuelo").val("")
    $("#fila").val("")
    $("#columna").val("")
    $('#select_familia').prop('selectedIndex', 0);
    $('#container_input_familia').hide()
    familiaIsEmpty = true
}