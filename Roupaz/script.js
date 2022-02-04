let produtos = [
 {
   valor : 10.99,
   imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSNVRotHo4fvHlKX-GWwM3sP_uupWA6oVFHGH-gnCeoUy8fQ5p2fGIwYSvZb1PZXXXi1KPGBGDJ&usqp=CAc"
 },
 {
    valor : 30.99,
    imagem:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ0Mkzk6Oo8cC7pKkpiCADZgnyiSsOiNIn4cRsS9mhnlJPmVndBWV82bw5UgYixnKp_y3b_3e7LFYvgf9E-dA6j50vMMw8gLMOdXfjEGZf7IczR4aALpT8nEKc&usqp=CAE"
    
 },
 {

    valor : 40.99,
   imagem: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTpRuZdYPZ7riJ8tv6QIuzXONfYnuIXYwHEMoETBUUOWYtEtSZE6j1E8X0-JVlS1X_CytP52H_qCb8J6KLjYUJ7OtdMe0gp_0A-A0z5vTLUgzQMBRZupQSbkw&usqp=CAE"
   

 }
   
]


function criarCatalogo(){
    let selectionCatalogo = document.getElementById("catalogo")
    for (let i = 0; i < produtos.length; i++){
        selectionCatalogo.innerHTML += `
        <div>
           <img src="${produtos[i].imagem}">
           <p>R$${produtos[i].valor}</p>
        </div>
        `
    }

}