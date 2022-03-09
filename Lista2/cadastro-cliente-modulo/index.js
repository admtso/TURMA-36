
import{validaCPF,validaCEP} from "./validador.js"

let clientesCadastrados = [] //escopo módulo

function cadastrar(){ // escopo módulo//
    let novoCliente= {}
    novoCliente.nome = document.getElementById("inputNome").value
    novoCliente.email = document.getElementById("inputEmail").value
    novoCliente.cpf = document.getElementById("inputCpf").value

       if(validaCPF(novoCliente.cpf)){
           clientesCadastrados.push(novoCliente)
           alert("cadastrado com sucesso!")
       }else{
           alert("O CPF contém erros")
       }
    }


document.getElementById("btnCadastrar").onclick = cadastrar