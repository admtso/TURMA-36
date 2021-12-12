function procurar() {
    let frase = document.getElementById("frase").value
    let busca = document.getElementById("busca").value

    if (frase.toUpperCase().includes(busca.toUpperCase())) {
        alert("Texto encontrado")
    } else {
        alert("Texto não encontrado")
    }

}