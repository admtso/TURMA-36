
export function buscarEnderecoPorCep(cep) {
    return fetch("http://viacep.com.br/ws/" + cep + "/json")
}