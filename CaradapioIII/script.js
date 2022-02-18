let pratosCadastrados = []

function cadastrar() {

    let novoPrato = { 
        descricao: document.getElementById("inputDescricao").value, 
        valor: document.getElementById("inputValor").valueAsNumber, 
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
    let pratosFiltrados = pratosCadastrados

    let textoFiltro = document.getElementById("inputFiltro").value
    if(textoFiltro) {
        pratosFiltrados = pratosCadastrados.filter((el) => {
            return el.descricao.toUpperCase().includes(textoFiltro.toUpperCase())
        })
    }

    let filtrarGratis = document.getElementById("inputFiltroGratis").checked
    if(filtrarGratis) {
        pratosFiltrados = pratosFiltrados.filter((el) => {
            return el.gratis
        })
    }

    let filtroValorMaximo = document.getElementById("inputFiltroValor").valueAsNumber
    if(filtroValorMaximo  > 0) {
        pratosFiltrados = pratosFiltrados.filter((el) => {
            return el.valor <= filtroValorMaximo
        })
    }

    listarPratos(pratosFiltrados)
}

function limparFiltro() {
    listarPratos(pratosCadastrados)
}