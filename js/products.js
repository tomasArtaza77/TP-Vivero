const products = [
    {
        "id": 1, 
        "img": '../img/plantas/1(Peral).jpg',
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
        "img": '../img/plantas/2(Fragaria).jpg',
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
        "img": '../img/plantas/3(Freesia).jpg',
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
        "img": '../img/plantas/4(Iris Germánica).jpg',
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
        "img": '../img/plantas/5(Patrinia scabiosifolia).jpg',
        "nombre_comun": 'Nardo sirio', 
        "nombre_cientifico": 'Patrinia scabiosifolia', 
        "color": 'Dorado', 
        "tipo_suelo": 'Basico', 
        "fase": '1 mes', 
        "ubicacion": 'Fila 3, Columna 1', 
        "estado": 'ListaParaVenta',
        "familia": 'Caprifoliaceae'
    },
    {
        "id": 6, 
        "img": '../img/plantas/6(Fedia cornucopiae) Morado.jpg',
        "nombre_comun": 'Trompetillas', 
        "nombre_cientifico": 'Fedia cornucopiae', 
        "color": 'Rosado/Morado', 
        "tipo_suelo": 'Acido', 
        "fase": '3 meses', 
        "ubicacion": 'Fila 3, Columna 2', 
        "estado": 'ListaParaVenta',
        "familia": 'Caprifoliaceae'
    },
    {
        "id": 7, 
        "img": '../img/plantas/7(Kalanchoe blossfediana).jpg',
        "nombre_comun": 'Kalanchoe', 
        "nombre_cientifico": 'Kalanchoe blossfediana', 
        "color": 'Coral', 
        "tipo_suelo": 'Neutro', 
        "fase": '3 meses', 
        "ubicacion": 'Fila 4, Columna 1', 
        "estado": 'ListaParaVenta',
        "familia": 'Crassulaceae'
    },
    {
        "id": 8, 
        "img": '../img/plantas/8(Sempervivum).jpg',
        "nombre_comun": 'Siempreviva', 
        "nombre_cientifico": 'Sempervivum', 
        "color": '-', 
        "tipo_suelo": 'Neutro', 
        "fase": '9 meses', 
        "ubicacion": 'Fila 4, Columna 2', 
        "estado": 'EnLote',
        "familia": 'Crassulaceae'
    },
    {
        "id": 9, 
        "img": '../img/plantas/9(Arenaria serpens).jpg',
        "nombre_comun": 'Arenaria', 
        "nombre_cientifico": 'Arenaria serpens', 
        "color": 'Blanco', 
        "tipo_suelo": 'Neutro', 
        "fase": '2 meses', 
        "ubicacion": 'Fila 5, Columna 1', 
        "estado": 'EnLote',
        "familia": 'Caryophyllaceae'
    },
    {
        "id": 10, 
        "img": '../img/plantas/10(Dianthus caryophyllus).jpg',
        "nombre_comun": 'Clavel', 
        "nombre_cientifico": 'Dianthus caryophyllus', 
        "color": 'Rosaseo', 
        "tipo_suelo": 'Basico', 
        "fase": 'Floracion', 
        "ubicacion": 'Fila 5, Columna 2', 
        "estado": 'EnLote',
        "familia": 'Caprifoliaceae'
    },
    {
        "id": 11, 
        "img": '../img/plantas/11(Cattleya trianae).jpg',
        "nombre_comun": 'Lirio', 
        "nombre_cientifico": 'Cattleya trianae', 
        "color": 'Blanco', 
        "tipo_suelo": 'Neutro', 
        "fase": '3 meses', 
        "ubicacion": 'Fila 6, Columna 1', 
        "estado": 'ListaParaVenta',
        "familia": 'Orchidaceae'
    },
    {
        "id": 12, 
        "img": '../img/plantas/12(Phalaenopsis).jpg',
        "nombre_comun": 'Orquídea mariposa', 
        "nombre_cientifico": 'Phalaenopsis', 
        "color": 'Rosado claro', 
        "tipo_suelo": 'Neutro', 
        "fase": '4 meses', 
        "ubicacion": 'Fila 6, Columna 2', 
        "estado": 'DeBaja',
        "familia": 'Orchidaceae'
    },
    {
        "id": 13, 
        "img": '../img/plantas/13(Tulipa).jpg',
        "nombre_comun": 'Tulipán', 
        "nombre_cientifico": 'Tulipa', 
        "color": 'Amarillo', 
        "tipo_suelo": 'Acido', 
        "fase": '6 meses', 
        "ubicacion": 'Fila 7, Columna 1', 
        "estado": 'EnLote',
        "familia": 'Liliaceae'
    },
    {
        "id": 14, 
        "img": '../img/plantas/14(Lilium).jpg',
        "nombre_comun": 'Azucena', 
        "nombre_cientifico": 'Lilium', 
        "color": 'Dorado', 
        "tipo_suelo": 'Neutro', 
        "fase": '8 meses', 
        "ubicacion": 'Fila 7, Columna 2', 
        "estado": 'EnLote',
        "familia": 'Liliaceae'
    },
    {
        "id": 15, 
        "img": '../img/plantas/15(Calendula officinalis).jpg',
        "nombre_comun": 'Caléndula', 
        "nombre_cientifico": 'Calendula officinalis', 
        "color": 'Anaranjado', 
        "tipo_suelo": 'Acido', 
        "fase": '2 meses', 
        "ubicacion": 'Fila 8, Columna 1', 
        "estado": 'ListaParaVenta',
        "familia": 'Asteraceae'
    },
    {
        "id": 16, 
        "img": '../img/plantas/16(Bellis perennis).jpg',
        "nombre_comun": 'Margarita', 
        "nombre_cientifico": 'Bellis perennis', 
        "color": 'Blanco', 
        "tipo_suelo": 'Basico', 
        "fase": '2 meses', 
        "ubicacion": 'Fila 8, Columna 2', 
        "estado": 'ListaParaVenta',
        "familia": 'Asteraceae'
    }

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

// mostrar estado de venta? para la botanica/usuario comun
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
                    <img src="${array[i].img}" alt="Product image">
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
                    <img src="${products[i].img}" alt="Product image">
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