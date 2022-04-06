import { validaCPF } from "./validador.js"

let clientesCadastrados = []

export function cadastrar(novoCliente) {
    // 1 - validação simples
    let erros = ""
    if(!novoCliente.nome) erros += "nome, "
    if(!novoCliente.email) erros += "email, "
    if(!novoCliente.cpf) erros += "cpf, "
    if(erros) throw "Os campos: " + erros + "não foram preenchidos"
    
    // 2 - Validar CPF
    let cpfValido = validaCPF(novoCliente.cpf)
    if(cpfValido == false) {
        throw "O CPF está inválido"
    }

    // 3 - Verifica cpf duplicado
    let clienteEncontrado = buscarPorCPF(novoCliente.cpf)
    if(clienteEncontrado) {
        throw "Este CPF já foi cadastrado"
    }
    
    // 4 - adicionar no vetor
    clientesCadastrados.push(novoCliente)
}

export function buscarTodos() {
    return clientesCadastrados
}

function buscarPorCPF(cpf) {
    let resultado = clientesCadastrados.find((el) => {
        return el.cpf == cpf
    })
    return resultado
}   