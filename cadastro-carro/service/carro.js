let carrosCadastrados = []

export function inserir(carro) {
    // 1 - validação simples (validar preenchimento dos campos)
    // 2 - validar se placa já foi cadastrada
    carrosCadastrados.push(carro)
}

export function buscarTodos() {
    return carrosCadastrados
}