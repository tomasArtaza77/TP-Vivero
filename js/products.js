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
        "estado": 'ListaParaVenta'
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
        "estado": 'EnLote'
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
        "estado": 'EnExperimento'
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
        "estado": 'DeBaja'
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
        "estado": 'ListaParaVenta'
    },

];


function showTable(params) {
    buildTable(products);
}


function buildTable(data){
    console.log(data);
    let table = '';
    for (let i = 0; i < data.length; i++) {
        table += 
        `
        <div class="container mt-5">
            <div class = "row">
                <div class = "column"> 
                    <div class = "card"> 
                        <p>N°: ${data[i].id}</p>
                        <img [src]="data[i].img" alt="Products">
                        <p>Name: ${data[i].nombre_comun}</p>
                        <p>Nombre científico: ${data[i].nombre_cientifico}</p>
                        <p>Color: ${data[i].color}</p>
                        <p>Tipo de suelo: ${data[i].tipo_suelo}</p>
                        <p>Fase: ${data[i].fase}</p>
                        <p>Ubicación: ${data[i].ubicacion}</p>
                        <p>Estado: ${data[i].estado}</p>
                    </div>
                </div>
            </div>
	    </div>
        `
        ;

        console.log(table);
        document.getElementById('products-page').innerHTML = table;
    }

}