let lista = [];

function adicionarItem(event) {
  event.preventDefault()
  let itemDigitadoInput = document.getElementById("item");
  if (itemDigitadoInput.value == "") {
    alert("Preencha o campo");
  } else if (lista.indexOf(itemDigitadoInput.value) >= 0) {
    alert("Este item já foi inserido");
  } else {
    lista.push(itemDigitadoInput.value);
    /*alert("Item adicionado com sucesso");*/
    itemDigitadoInput.value = "";
    itemDigitadoInput.focus()
    listar();
  }
}

function listar() {
  let divLista = document.getElementById("lista");
  divLista.innerHTML = "" //"zera" a lista para recriá- la
  for(let i = 0; i <lista.length; i++) {
    divLista.innerHTML += `
    <div class = "item-compras">${lista[i]}
    <button class= "btn-remover" onclick="removerLinha(${i})"><img src="trash-can.png"></button></div>
   `
  }
}

function remover() {
  let itemDigitadoInput = document.getElementById("item")
  if (itemDigitadoInput.value == "") {
    alert("O campo deve ser digitado")
  } else if (lista.indexOf(itemDigitadoInput.value) < 0) {
    alert("Este item ainda não foi cadastrado")
  } else {
    // Remove o item do vetor
    // 1 - Descobrir o índice do elemento a ser removido
    let indice = lista.indexOf(itemDigitadoInput.value)
    // 2 - Remover o elemento com a função splice
    lista.splice(indice, 1)
    // 3 - Atualizar a lista
    listar()
    itemDigitadoInput.value = ""
  }
}

function removerLinha(indice){
  lista.splice(indice,1)
  listar()
}