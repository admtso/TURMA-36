import { cadastrar as cadastrarCliente, buscarTodos } from "./../service/cliente.js"
import { buscarEnderecoPorCep } from "./../service/cep.js"

function cadastrar() {
    let novoCliente= {}
    novoCliente.nome = document.getElementById("inputNome").value
    novoCliente.email = document.getElementById("inputEmail").value
    novoCliente.cpf = document.getElementById("inputCpf").value
    novoCliente.cep = document.getElementById("inputCep").value
    novoCliente.rua = document.getElementById("inputRua").value
    novoCliente.bairro = document.getElementById("inputBairro").value
    novoCliente.cidade = document.getElementById("inputCidade").value
    novoCliente.uf = document.getElementById("inputUf").value

    try {
        cadastrarCliente(novoCliente)
        alert("O cliente foi salvo com sucesso!")
    } catch (erro) {
        alert(erro)
    }

    listar()
}

async function buscarEndereco() {
    try {
        let cepDigitado = document.getElementById("inputCep").value
        let enderecoEncontrado = await buscarEnderecoPorCep(cepDigitado)
        console.log(enderecoEncontrado)
        document.getElementById("inputRua").value = enderecoEncontrado.logradouro
        document.getElementById("inputBairro").value = enderecoEncontrado.bairro
        document.getElementById("inputCidade").value = enderecoEncontrado.localidade
        document.getElementById("inputUf").value = enderecoEncontrado.uf
    } catch (error) {
        alert("A consulta do endereço falhou")
        console.log(error)
    }
}

function listar() {
    let clientesCadastrados = buscarTodos()
    let tbody = document.getElementById("tabela")
    tbody.innerHTML = ""
    for(let i=0; i < clientesCadastrados.length; i++) {
        tbody.innerHTML += `
        <tr>
            <td>${clientesCadastrados[i].nome}</td>
            <td>${clientesCadastrados[i].email}</td>
            <td>${clientesCadastrados[i].cep}</td>
            <td>${clientesCadastrados[i].rua}</td>
            <td>${clientesCadastrados[i].bairro}</td>
            <td>${clientesCadastrados[i].cidade}</td>
            <td>${clientesCadastrados[i].uf}</td>
        </tr>
        `
    }
}

document.getElementById("btnCadastrar").onclick = cadastrar
document.getElementById("btnBuscar").onclick = buscarEndereco
document.body.onload = listar