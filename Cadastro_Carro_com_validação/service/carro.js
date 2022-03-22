let carrosCadastrados = []

export function inserir(novoCarro) {
    // 1 - validação simples (validar preenchimento dos campos)
    let erros = ""
    if(!novoCarro.marca) erros += "Marca ;"
    if(!novoCarro.modelo) erros += "Modelo ; "
    if(!novoCarro.cor) erros+= "Cor ; "
    if(!novoCarro.placa) erros+= "Placa ; "
    if(erros) return "Os campos: " + erros + "não foram preenchidos"
    
    //2 - Verifica placa duplicada
    let placaEncontrada = buscaPorPlaca(novoCarro.placa)
    if(placaEncontrada){
        return "Esta placa já foi informada"
    }
       
    
    // 3 - adicionar no vetor
    carrosCadastrados.push(novoCarro)
    return ""
}

export function buscarTodos() {
    return carrosCadastrados

}

function buscaPorPlaca(placa){
    let resultado = carrosCadastrados.find((el)=>{
       return el.placa == placa
    })
     
    return resultado
}