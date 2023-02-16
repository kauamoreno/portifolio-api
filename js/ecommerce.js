//Metodo fetch() para buscar o arquivo dados.json, ou qualquer API
//Transformando o json eum um objeto usando o metodo response.json

fetch("../json/ecommerce.json")
    .then(response => response.json())
    .then(corpo => {

        //Acessando os dados do objeto json e adicionando ao HTML 
        document.getElementById("imagem").innerHTML = corpo.imagem;
        document.getElementById("nome").innerHTML = corpo.name;
        document.getElementById("disco").innerHTML = corpo.albun;
        document.getElementById("estilo").innerHTML = corpo.style;
        document.getElementById("preco").innerHTML = corpo.price;
    })