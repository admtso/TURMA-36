let notas = []

function adicionarNota() {
    let inputNota = document.getElementById("inputNota")
    notas.push(inputNota.valueAsNumber)
    listarNotas()
    inputNota.value = ""
}

function listarNotas() {
    let divResultado = document.getElementById("divResultado")
    divResultado.innerHTML = "Notas Adicionadas: " + notas + "<br><br>"
}

function finalizar() {
    let menorNota = acharMenorNota()
    let maiorNota = acharMaiorNota()
    let media = acharMedia()
    let substitutiva = document.getElementById("inputNotaSub").valueAsNumber

   
    // Imprimir resultados
    let divResultado = document.getElementById("divResultado")
    divResultado.innerHTML = ""//"limpa" a div de resultado
    listarNotas()
    divResultado.innerHTML += "Maior nota: " + maiorNota + "<br>"
    divResultado.innerHTML += "Menor nota: " + menorNota + "<br>"
    divResultado.innerHTML += "Substitutiva: " + substitutiva + "<br>"
    divResultado.innerHTML += "Média: " + media.toFixed(2) + "<br>"

   if(acharMedia() >=6 ){
       divResultado.innerHTML += "Aprovado"
   }else{
       divResultado.innerHTML += "Reprovado"

   }
   
}

function acharMenorNota() {
    let menorNota = notas[0]
    for(let i=0; i < notas.length; i++) {
        if(notas[i] < menorNota) {
            menorNota = notas[i]
        }
    }
    return menorNota
}

function acharMaiorNota() {
    let maiorNota = notas[0]
    for(let i=0; i < notas.length; i++) {
        if(notas[i] > maiorNota) {
            maiorNota = notas[i]
        }
    }
    return maiorNota
}

function acharMedia() {
    let soma = 0
    for(let i=0; i < notas.length; i++) {
        soma += notas[i]
    }
    return soma/notas.length
}

function substituirNota() { // | 3 | 6 | 1 | -> 7
    let notaSubstitutiva = document.getElementById("inputNotaSub").valueAsNumber
    let posicaoMenorNota = 0
    for(let i=0; i < notas.length; i++) {
        if(notas[i] < notas[posicaoMenorNota]) {
            posicaoMenorNota = i
        }
    }
    if(notaSubstitutiva > notas[posicaoMenorNota]) {
        notas[posicaoMenorNota] = notaSubstitutiva
    }
    listarNotas()
}
 
 
 