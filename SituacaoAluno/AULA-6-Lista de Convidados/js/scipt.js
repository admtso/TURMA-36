let convidados = []

function inserir (){
    let nomeConvidado = document.getElementById("nomeConvidado").value
    if(nomeConvidado == ""){
        alert("Preencha o nome do convidado!")
    }else{
       convidados.push(nomeConvidado)
       limpar() 
       imprimir()
    }
}

function buscar(){
    let nomeBuscar = document.getElementById("nomeBuscar").value 

    if(nomeBuscar == ""){
        alert("Preencha o nome a ser buscado!")
    }else{
       
       let i = 0
       let achou = false

       while(i< convidados.length && !achou ){
           if(convidados[i] == nomeBuscar){
            alert(`o nome ${nomeBuscar} está na posição ${i + 1}`) 
            achou = true 
           }
           i++
          }
          
        if(!achou){
            alert("Nome não encontrado!")

        }
    }
}



function imprimir(){
    let tabela = document.getElementById("tabela")
      let cacheTabela = ""
      tabela.innerHTML= ""

    for (let i = 0; i< convidados.length; i++){
        cacheTabela = cacheTabela + `<tr> <td>${convidados[i]}</td> <td><img src="img/close.png" onclick="remover(${i})"/></td> </tr>`
    }
     tabela.innerHTML = cacheTabela
}

function remover(posicao){
    if(confirm("Tem certeza que deseja remover este convidado(a)?")){
        convidados.splice(posicao, 1)
        imprimir()   
    }
}

function limpar(){
   document.getElementById("nomeConvidado").value = "" 
}