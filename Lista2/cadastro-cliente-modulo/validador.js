export function validaCPF(cpf){
    if(cpf.length == 11){
        return true
    }else{
        return false
    }
}

export function validaCEP(cpf){
    if(cpf.length == 8){
        return true
    }else{
        return false
    }
}
