let clientesCadastrados = []

export function cadastrar(novoCliente) {
    // 1 - validação
    let erros = ""
    if(!novoCliente.nome) erros += "nome, "
    if(!novoCliente.email) erros += "email, "
    if(!novoCliente.cpf) erros += "cpf, "
    if(erros) return "Os campos: " + erros + "não foram preenchidos"
    
    // 2 - adicionar no vetor
    clientesCadastrados.push(novoCliente)
    return ""
}

export function buscarTodos() {
    return clientesCadastrados
}