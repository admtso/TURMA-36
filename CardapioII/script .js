let pratosCadastrados = []

function cadastrar() {

    let novoPrato = { 
        descricao: document.getElementById("inputDescricao").value, 
        valor: document.getElementById("inputValor").value, 
        url: document.getElementById("inputURL").value, 
        gratis: document.getElementById("inputEntregaGratis").checked
    }

    pratosCadastrados.push(novoPrato)
    listarPratos(pratosCadastrados)

    document.getElementById("inputDescricao").value = ""
}

function listarPratos(lista) {
    let sectionLista = document.getElementById("lista")
    sectionLista.innerHTML = "" // Limpa a lista

    for(let i=0; i < lista.length; i++) {
        sectionLista.innerHTML += `
        <div>
            <img src="${lista[i].url}">
            <h3>${lista[i].descricao}</h3>
            <p>${lista[i].valor}</p>
            <span style="display: ${lista[i].gratis ? "block" : "none"}">Entrega grátis</span>
        </div>
        `
    }
}

function filtrar() {
    let textoFiltro = document.getElementById("inputFiltro").value
    let pratosFiltrados = pratosCadastrados.filter((el) => {
        return el.descricao.toUpperCase().includes(textoFiltro.toUpperCase())
    })
    listarPratos(pratosFiltrados)
}