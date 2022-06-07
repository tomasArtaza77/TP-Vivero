const products = [
    {
        "id": 1, 
        "img": '/img/plantas/1(Peral).jpg',
        "nombre_comun": 'Peral', 
        "nombre_cientifico": 'Pyrus communis', 
        "color": '-', 
        "tipo_suelo": 'Basico', 
        "fase": '6 meses', 
        "ubicacion": 'Fila 1, Columna 1', 
        "estado": 'ListaParaVenta',
        "familia": 'Rosaceae'
    },
    {
        "id": 2, 
        "img": '/img/plantas/2(Fragaria).jpg',
        "nombre_comun": 'Fresa', 
        "nombre_cientifico": 'Fragaria', 
        "color": '-', 
        "tipo_suelo": 'Basico', 
        "fase": '2 meses', 
        "ubicacion": 'Fila 1, Columna 2', 
        "estado": 'EnLote',
        "familia": 'Rosaceae'
    },
    {
        "id": 3,
        "img": '/img/plantas/3(Freesia).jpg',
        "nombre_comun": 'Fresia', 
        "nombre_cientifico": 'Freesia', 
        "color": 'Amarillo', 
        "tipo_suelo": 'Basico', 
        "fase": '2 meses', 
        "ubicacion": 'Fila 2, Columna 1', 
        "estado": 'EnExperimento',
        "familia": 'Iridaceae'
    },
    {
        "id": 4, 
        "img": '/img/plantas/4(Iris Germánica).jpg',
        "nombre_comun": 'Iris', 
        "nombre_cientifico": 'Iris Germánica', 
        "color": 'Morado', 
        "tipo_suelo": 'Basico', 
        "fase": 'Floracion', 
        "ubicacion": 'Fila 2, Columna 2', 
        "estado": 'DeBaja',
        "familia": 'Iridaceae'
    },
    {
        "id": 5, 
        "img": '/img/plantas/5(Patrinia scabiosifolia).jpg',
        "nombre_comun": 'Nardo sirio', 
        "nombre_cientifico": 'Patrinia scabiosifolia', 
        "color": 'Dorado', 
        "tipo_suelo": 'Basico', 
        "fase": '1 mes', 
        "ubicacion": 'Fila 3, Columna 1', 
        "estado": 'ListaParaVenta',
        "familia": 'Caprifoliaceae'
    },

];

// INICIO FILTRAR POR FAMILIA
$('#search-input').on('keyup', function(){
    let value = $(this).val()
    console.log("Value: ", value)
    let data = filterData(value, products)
    buildFilteredTable(data)
})

function filterData(value, data){
    let filtrar = []
    for (let i = 0; i < data.length; i++) {
        value = value.toLowerCase()
        let familia = data[i].familia.toLowerCase()

        if(familia.includes(value)){
            filtrar.push(data[i])
        }
    }
    return filtrar
}

function buildFilteredTable(array){
    let table = document.getElementById('tabla-filtro')
    table.innerHTML = ''
    for (let i = 0; i < array.length; i++) {
        let row = 
        `
        <div class = "row">
            <div class = "column"> 
                <div class = "card"> 
                    <p>N°: ${array[i].id}</p>
                    <img [src]="${array[i]}" alt="Product image">
                    <p>Name: ${array[i].nombre_comun}</p>
                    <p>Nombre científico: ${array[i].nombre_cientifico}</p>
                    <p>Color: ${array[i].color}</p>
                    <p>Tipo de suelo: ${array[i].tipo_suelo}</p>
                    <p>Fase: ${array[i].fase}</p>
                    <p>Ubicación: ${array[i].ubicacion}</p>
                    <p>Estado: ${array[i].estado}</p>
                    <p>Familia: ${array[i].familia}</p>
                </div>
            </div>
        </div>	    
        `
        ;
        table.innerHTML += row;
    }

}
// FIN FILTRAR POR FAMILIA


// INICIO MOSTRAR TABLA
function showTable() {
    buildTable();
}


function buildTable(){
    let table = document.getElementById('tabla')
    table.innerHTML = ''
    for (let i = 0; i < products.length; i++) {
        let row = 
        `
        <div class = "row">
            <div class = "column"> 
                <div class = "card"> 
                    <p>N°: ${products[i].id}</p>
                    <img [src]="${products[i]}" alt="Product image">
                    <p>Name: ${products[i].nombre_comun}</p>
                    <p>Nombre científico: ${products[i].nombre_cientifico}</p>
                    <p>Color: ${products[i].color}</p>
                    <p>Tipo de suelo: ${products[i].tipo_suelo}</p>
                    <p>Fase: ${products[i].fase}</p>
                    <p>Ubicación: ${products[i].ubicacion}</p>
                    <p>Estado: ${products[i].estado}</p>
                    <p>Familia: ${products[i].familia}</p>
                </div>
            </div>
        </div>	    
        `
        ;
        table.innerHTML += row;
    }

}
// FIN MOSTRAR TABLA