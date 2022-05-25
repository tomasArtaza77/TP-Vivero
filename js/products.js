const products = [
    new Plant(1 , 'Peral', 'Pyrus communis', '-', 'Basico', '6 meses', 'Fila 1, Columna 1', 'ListaParaVenta'),
    new Plant(2, 'Fresa', 'Fragaria', '-',	'Basico', '2 meses', 'Fila 1, Columna 2', 'EnLote'),
    new Plant(3, 'Fresia', 'Freesia', 'Amarillo', 'Basico', '3 meses', 'Fila 2, Columna 1', 'EnExperimento'),
    new Plant(4, 'Iris', 'Iris Germánica', 'Morado', 'Basico', 'Floracion', 'Fila 2, Columna 2', 'DeBaja'),
    new Plant(5, 'Nardo sirio',	'Patrinia scabiosifolia', 'Dorado', 'Basico', '1 mes', 'Fila 3, Columna 1', 'ListaParaVenta'),
];

function showTable(params) {
    buildTable(products);
}

function buildTable(data){
    console.log(data);
    let table = '';
    for (let i = 0; i < data.length; i++) {
        table += 
        `<li>
            <td>${data[i].id}</td>
            <td>${data[i].nombre_comun}</td>
            <td>${data[i].nombre_cientifico}</td>

        </li>`;
        console.log(table);
        document.getElementById('products-page').innerHTML = table;
    }

}