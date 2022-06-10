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
                    <img src="${element.img}" alt="Product image"><br>
                    <p>Nombre: ${element.nombre_comun}</p>
                    <p>Nombre científico: ${element.nombre_cientifico}</p>
                    <p>Color: ${element.color}</p>
                    <p>Tipo de suelo: ${element.tipo_suelo}</p>
                    <p>Familia: ${element.familia.nombre}</p>
                    <div style = "margin: 0 auto;">
                    <input id="cantidad" type="number" placeholder="0" step="1" min="0" max="10" style="width: 3em;">
                    <button
                            style="margin-top: 10px; font-size: 15px; color: green; background-color: aliceblue; border-color: green; width: 100%;"
                            data-bs-toggle="modal" data-bs-target="#exampleModal" type="button"
                            class="btn btn-primary btn-lg" onclick="(agregar(${element.id}))">Agregar
                    </button>
                </div>
                </div>
            </div>
        </div>	   
        `
        ;
        table.innerHTML += row;
    }
    $('input[name=search-input').val('');

}

function getData() {
    if($('#search-input').val() != "") {
        let value = $('#search-input').val() 
        $('#search-input').val('')
        return filterData(value, products)
    } else {
        console.log(products)
        return products
    }
}

function filterData(value, data){
    let filtrar = []
    for (const element of data) {
        value = value.toLowerCase()
        let familia = element.familia.nombre.toLowerCase()
        let nombre = element.nombre_comun.toLowerCase()

        if(familia.includes(value) || nombre.includes(value)){
            filtrar.push(element)
        }
        
        
    }

    if(Object.keys(filtrar).length === 0) {
        console.log("alerta")
        alert("No se han encontrado coincidencias, por favor intente de nuevo.");
        return;
    }

    return filtrar
}

function agregar(id) {
    let alert = document.getElementById('producto-agregado');
    let cantidadProducto = document.getElementById("cantidad").value;
    alert.innerHTML = '';
    for (const element of products) {
        if(id == element.id){
            let row = 
            `
            <h5 class=atributo id=nombreCientificoModal >Nombre: ${element.nombre_comun} - Cantidad: ${cantidadProducto}</h5>
            `
            ;
            alert.innerHTML += row;
        }
    }
}


