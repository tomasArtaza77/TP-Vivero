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
                    <button
							style="color: green; background-color: aliceblue; border-color: green; width: 100%;"
							data-bs-toggle="modal" data-bs-target="#exampleModal" type="button"
							class="btn btn-primary btn-lg" onClick="(agregar(${element.id}))">Agregar
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
        let nombre = element.nombre_comun.toLowerCase()

        if(familia.includes(value) || nombre.includes(value)){
            filtrar.push(element)
        }
    }
    return filtrar
}

function agregar(id) {
    console.log(id);
    let alert = document.getElementById('producto-agregado')
    alert.innerHTML = ''
    for (const element of products) {
        if(id == element.id){
            let row = 
            `
            <h5 class=atributo id=nombreCientificoModal >Nombre: ${element.nombre_comun}</h5>
            `
            ;
            alert.innerHTML += row;
        }
    }
}
