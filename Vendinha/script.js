let total = 0 

function adicionar(){
    let frutaSelecionada = document.getElementById("fruta").value
    
    switch (frutaSelecionada) {
        case "Banana":
            total += 2 
            alert("Banana, a 2 reais, adicionada com sucesso. Valor total da compra é : " + total)    
            break;
        case "Abacate":
            total += 2.5
            alert("Abacate, a 2.5 reais, adicionada com sucesso, valor total da compra é : " + total)
                break;
        case "Abacaxi":
            total += 3.5
            alert("Abacaxi, a 3.5 reais, adicionada com sucesso, valor total da compra é : " + total)
                break;
        case "Maçã":
             total += 4
             alert("Maçã, a 4 reais, adicionada com sucesso, valor total da compra é : " + total)
               break;
        default:
            alert("Por gentileza,selecione uma fruta")
            break;
    }

}

function finalizar(){
    alert("Sua compra foi finalizada com sucesso, o total foi de: " + total + "reais.")
    total=0
}