import { inserir as cadastrarCar, buscarTodos } from "./../service/carro.js"

function cadastrarCarro() {
    
    let novoCarro = {}
    novoCarro.marca = document.getElementById("inputMarca").value
    novoCarro.modelo = document.getElementById("inputModelo").value
    novoCarro.cor = document.getElementById("inputCor").value
    novoCarro.placa = document.getElementById("inputPlaca").value
    
    let erros = cadastrarCar(novoCarro)
    if(erros){
        alert(erros)
    }else{
        alert("Veículo Cadastrado com Sucesso!")
    }
   
    listarCarros()
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

document.getElementById("btnCadastrar").onclick = cadastrarCarro
document.body.onload = listarCarros

