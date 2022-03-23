let carrosCadastrados = []

export function inserir(carro) {
    // 1 - validação simples (validar preenchimento dos campos)
    let erros = ""
    if(carro.cor == "") {
        erros += "cor, "
    }
    if(carro.placa == "") {
        erros += "placa, "
    }
    if(carro.marca == "") {
        erros += "marca, "
    }
    if(carro.modelo == "") {
        erros += "modelo, "
    }

    if(erros != "") {
        return "Os campos: " + erros + "são obrigatórios e não foram preenchidos"
    }

    if(carro.placa.length != 7) {
        return "A placa deve conter exatamente 7 dígitos"
    }

    let letras = carro.placa.substr(0,3)
    let numeros = carro.placa.substr(3,7)

    if(isNaN(numeros) || letras.match(/[0-9]/g)) {
        return "Placa inválida"
    }

    // 2 - validar se placa já foi cadastrada
    // Verificar se existe um carro dentro do carrosCadastrados que tenha a placa igual ao novo carro que está sendo cadastrado
    let carroEncontrado = buscarPorPlaca(carro.placa)

    if(carroEncontrado) {
        return "A placa desde carro já foi cadastrada anteriormente"   
    }

    carrosCadastrados.push(carro)
}

export function buscarPorPlaca(placaBusca) {
    return carrosCadastrados.find((elemento) => {
        return elemento.placa == placaBusca
    })
}

export function buscarTodos() {
    return carrosCadastrados
}