import { inserir, buscarTodos, buscarPorPlaca } from "./../service/carro.js"

function cadastrarCarro() {
    
    let novoCarro = {}
    novoCarro.marca = document.getElementById("inputMarca").value
    novoCarro.modelo = document.getElementById("inputModelo").value
    novoCarro.cor = document.getElementById("inputCor").value
    novoCarro.placa = document.getElementById("inputPlaca").value
    
    let erros = inserir(novoCarro)
    
    if(erros) { // falsy
        alert(erros)
    } else {
        listarCarros()
        limpar()
    }

}

function limpar() {
    document.getElementById("inputMarca").value = ""
    document.getElementById("inputModelo").value = ""
    document.getElementById("inputCor").value = ""
    document.getElementById("inputPlaca").value = ""
}

function listarCarros() {
    let carrosCadastrados = buscarTodos()
    let sectionCarros = document.getElementById("sectionCarros")
    sectionCarros.innerHTML = ""
    for (let i = 0; i < carrosCadastrados.length; i++) {
        sectionCarros.innerHTML += `
        <div>
            <span>${carrosCadastrados[i].modelo}</span>
            <span>${carrosCadastrados[i].marca}</span>
            <span>${carrosCadastrados[i].cor}</span>
            <span>${carrosCadastrados[i].placa}</span>
        </div>
        `
    }
}

function buscarCarroPorPlaca() {
    let placaBusca = document.getElementById("inputBusca").value
    let resultado = buscarPorPlaca(placaBusca)
    
    if(resultado) {
        alert(`
            Marca: ${resultado.marca}
            Modelo: ${resultado.modelo}
            Cor: ${resultado.cor}
        `)
    } else {
        alert("Nenhum carro foi encontrado")
    }
}

document.getElementById("btnCadastrar").onclick = cadastrarCarro
document.getElementById("btnBuscar").onclick = buscarCarroPorPlaca