function salvar(){
      let nome = document.formulario.nome.value
      let email = document.formulario.email.value
      let idade = document.formulario.idade.value
      let tipo = document.formulario.tipo.value

    //let nome = document.getElementById("nome").value
    //let email = document.getElementById("email").value
    //let idade = document.getElementById("idade").value
    //let tipo = document.querySelector("input[type=radio]:checked")

    let erros = ""

      if(nome == ""){
        erros = erros += "nome," 
        
      }if(email == ""){
        erros += "email,"

      }if(idade == ""){
        erros = erros += "idade," 

      }if(tipo == ""){
        erros = erros += "tipo," 
    }
    if(erros != ""){
        alert("Os campos: " + erros + "não foram prenchidos corretamente.")
    }else{
        alert("Tudo certo!")
    }
}

