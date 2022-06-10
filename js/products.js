function showTable() {
    buildTable();    
}

function buildTable(){
    let data = getData()
    let table = document.getElementById('tabla')
    table.innerHTML = ''
    for (const element of data) {
        let row = 
        `
        <div class = "row">
            <div class = "column"> 
                <div class = "card"> 
                    <p>N°: ${element.id}</p>
                    <img src="${element.img}" alt="Product image"><br>
                    <p>Nombre: ${element.nombre_comun}</p>
                    <p>Nombre científico: ${element.nombre_cientifico}</p>
                    <p>Color: ${element.color}</p>
                    <p>Tipo de suelo: ${element.tipo_suelo}</p>
                    <p>Fase: ${element.fase}</p>
                    <p>Ubicación: ${element.ubicacion}</p>
                    <p>Estado: ${element.estado}</p>
                    <p>Familia: ${element.familia.nombre}</p>
                    <button
							style="color: green; background-color: aliceblue; border-color: green; width: 100%;"
							data-bs-toggle="modal" data-bs-target="#exampleModal" type="button"
							class="btn btn-primary btn-lg" onclick="agregar(element.nombre_comun)">Agregar
                    </button>
                </div>
            </div>
        </div>	    
        `
        ;
        table.innerHTML += row;
    }
    $('input[name=search-input').val('');

}

function agregar(a){
    console.log(a);
    //alert(`'Agregado al carrito: '${a}`);
}


function getData() {
    console.log($('#search-input'))
    if($('#search-input').val() != "") {
        let value = $('#search-input').val() 
        return filterData(value, products)
    } else {
        return products
    }
}

function filterData(value, data){
    let filtrar = []
    for (const element of data) {
        value = value.toLowerCase()
        let familia = element.familia.nombre.toLowerCase()

        if(familia.includes(value)){
            filtrar.push(element)
        }
    }
    return filtrar
}