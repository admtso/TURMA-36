function procurar(){
   let frase = document.getElementById("frase").value
   let busca = document.getElementById("busca").value
   
   let resultado = frase.includes(busca)
   let divResultado = document.querySelector(".resultado")

  if(resultado == true){
    divResultado.innerHTML = `<p>Palavra " ${busca}" Encontrada</p>`
  }else{
    divResultado.innerHTML = `<p>Palavra " ${busca}" não Encontrada</p>`
  }

}