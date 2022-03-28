import { buscarEnderecoPorCep } from "./../service/cep.js"

function buscarPorCEP() {
    let cepDigitado = document.getElementById("inputCEP").value
    buscarEnderecoPorCep(cepDigitado)
    .then((resposta) => {
        resposta.json()
        .then((endereco) => {
            document.getElementById("sectionResultado").innerHTML = `
            <p>Cidade: ${endereco.localidade}</p>
            <p>Rua: ${endereco.logradouro}</p>
            <p>Bairro: ${endereco.bairro}</p>
            <p>UF: ${endereco.uf}</p>
            `
        })
    })
    .catch((erro) => {
        alert("Algo deu errado na consulta")
        console.log(erro)
    })
}

document.getElementById("btnBuscar").onclick = buscarPorCEP