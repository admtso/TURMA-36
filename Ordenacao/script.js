let numeros = []
let numerosOrdenados = []

function adicionarNumero() {
    numeros.push(document.getElementById("inputNumero").valueAsNumber)
    listarNumeros()
}

function listarNumeros(){
    document.getElementById("divResultado").innerHTML = "Números adicionados: " + numeros
}

function ordenarNumeros(){
    let n = numeros.length
    for (let i=0; i< n; i++){

        let posMenor = 0
        for (let j=0; j < numeros.length; j++){
            if(numeros[j] <numeros[posMenor]) posMenor = j
        }
        numerosOrdenados.push(numeros[posMenor])
        numeros.splice(posMenor,1) // remove o menor do vetor original
        
    }

    //imprimir o vetor ordenado 
    document.getElementById("divResultado").innerHTML += "<br><br>Númros Ordenados: " + numerosOrdenados
}