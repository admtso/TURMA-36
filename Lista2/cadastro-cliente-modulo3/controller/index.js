import { cadastrar as cadastrarCliente, buscarTodos } from "./../service/cliente.js"

function cadastrar() {
    let novoCliente= {}
    novoCliente.nome = document.getElementById("inputNome").value
    novoCliente.email = document.getElementById("inputEmail").value
    novoCliente.cpf = document.getElementById("inputCpf").value

    let erros = cadastrarCliente(novoCliente)
    if(erros) {
        alert(erros)
    } else {
        alert("O cliente foi salvo com sucesso!")
    }

    listar()
}

function listar() {
    let clientesCadastrados = buscarTodos()
    let listaSection = document.getElementById("listaClientes")
    listaSection.innerHTML = ""
    for(let i=0; i < clientesCadastrados.length; i++) {
        listaSection.innerHTML += `
        <div>
            ${clientesCadastrados[i].nome}
        </div>
        `
    }
}

document.getElementById("btnCadastrar").onclick = cadastrar
document.body.onload = listar