let lista = []
            
function adicionarItem() {
    let itemDigitadoInput = document.getElementById("item")
    if(itemDigitadoInput.value == "") {
        alert("Preencha o campo")
    } else if(lista.indexOf(itemDigitadoInput.value)>=0){
        alert("Este item já foi inserido")
    }else{
        lista.push(itemDigitadoInput.value)
        alert("Item adicionado com sucesso")
        itemDigitadoInput.value =""
        listar()
    }
    
}
function listar() {
    let divLista = document.getElementById("lista")
    divLista.innerHTML = lista

}

function remover(){
    let itemDigitadoInput = document.getElementById("item")
    if(itemDigitadoInput.value == ""){
        alert("O campo deve ser digitado")
    } else if(lista.indexOf(itemDigitadoInput.value) < 0){
        alert("Este item ainda não foi cadastrado")
    }else{
        //Remova o item do vetor 
        //1 - Descobrir o índice do elemento a ser removido 
        let indice = lista.indexOf(itemDigitadoInput.value)
        //2 - Remover o elemento com a função splice 
        lista.splice(indice,1)
        //3 - Atualizar a lista 
        listar()
        itemDigitadoInput.value = ""
    }   
}