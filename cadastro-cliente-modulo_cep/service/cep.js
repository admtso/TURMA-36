
export async function buscarEnderecoPorCep(cep) {
    try {
        let resposta = await fetch("http://viacep.com.br/ws/" + cep + "/json")
        return resposta.json()
    } catch (erro) {
        throw erro
    }
}