let produtos = [
 {
     valor: 34.99,
     imagem: " https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQnBKe7zkOlvK3Ymi3tDphj7I62TgeS2PmAfTht0UwACwyG3LhKfKHi-GnQR43AuQUAyU7owtUOTPrAGaq7pO-1os6H355KoMvsJUNtABIs_J5A5PueZDVX&usqp=CAc",
     descricao:"Camiseta com desenhos Coração"
 
    },

 {
    valor: 34.99,
    imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSSCnO-AInxvQUiDqJcgQ_j1EMFmJxXt_Yb8RYV0qtiVhR7QsvUnptbB8_ivyardXdEylSUd7609I9sqoiWATKfEBgS0Iqrc5Ek7-PGI8ZEo11U6--ej322&usqp=CAE",
    descricao:"Camiseta com desenho de Bicicleta"
}, 


{
    valor: 29.99,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0HLTYRGZ4TFeRiEXcvyYPnmv3gEuwZ0rIhCFadcHt2ch4zkHg-1gil31khqx4O-py2Q&usqp=CAU",
    descricao:"Camiseta Branca"
},


{
    valor: 19.99,
    imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTnaLR-4736eEF5Yf1rAyBlVG1vjvl4F60a_IUV_CtihiYY7gmowbRj2NVVDeo-bq81opHZgo7DOoTmiATQlgSwNj8sRFZ8B5nQLEV0qoXeUpvTz8FsSG6om08&usqp=CAc",
    descricao:"Short Curto Moletinho"
},

]

let produtosBkp

function criaCatalogo(){
 let sectionCatalogo = document.getElementById("catalogo")
 for(let i= 0; i < produtos.length; i++){
     sectionCatalogo.innerHTML += `
     <div class="produto"> 
        <img src="${produtos[i].imagem}">
        <div class = "produto-detalhe">
        <p class="produto-titulo">${produtos[i].descricao}</p>
        <p class="produto-valor">R$${produtos[i].valor}</p>
        </div>
     </div>
     
     `
    }
}

function buscar(){
   let busca = document.getElementById("busca").value
   produtosBkp = produtos
   produtos = produtos.filter((elemento) =>{
     return elemento.descricao.toLowerCase().includes(busca.toLowerCase())
   })
   document.getElementById("catalogo").innerHTML = ""
   criaCatalogo()
}

function limpar(){
    produtos =produtosBkp
    document.getElementById("catalogo").innerHTML = ""
    criaCatalogo()
}