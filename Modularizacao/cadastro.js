import{removerPontos,removeHifens} from "./formatador.js"
let clientes = []

function cadastrar(){
    let novoCliente = {}
    novoCliente.nome = document.getElementById("nome").value
    novoCliente.cpf = document.getElementById("cpf").value
    novoCliente.cep = document.getElementById("cep").value
    novoCliente.numeroResidencial = document.getElementById("numero").value
    novoCliente.limite = document.getElementById("limite").value
    
    novoCliente.cpf = removerPontos(novoCliente.cpf)
    novoCliente.cpf = removeHifens(novoCliente.cpf)


    clientes.push(novoCliente)
    listarCliente()
    alert("Cliente cadastrado com sucesso")
}

function listarCliente(){
    let tabelaClientes = document.getElementById("tabelaCliente")
    tabelaClientes.innerHTML = ""
    for(let i=0; i< clientes.length; i++) {
        tabelaClientes.innerHTML  += `
        <tr>
           <td>${clientes[i].nome}</td>
           <td>${clientes[i].cpf}</td>
           <td>${clientes[i].cep}</td>
           <td>${clientes[i].limite}</td>
        </tr>
        `
    }
}

document.getElementById("btnCadastrar").onclick = cadastrar