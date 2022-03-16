export function validaCPF(cpf) {
    if(cpf.length == 11) {
        return true
    } else {
        return false
    }
}

export function validaCEP(cep) {
    if(cep.length == 8) {
        return true
    } else {
        return false
    }
}