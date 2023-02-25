//Metodo fetch() para buscar o arquivo dados.json, ou qualquer API
//Transformando o json eum um objeto usando o metodo response.json

fetch("assets/json/dadosEcommerce.json")
    .then(response => response.json())
    .then(corpo => {

        // Acessando os dados do objeto json e adicionando ao HTML 

        //NIRVANA
        document.getElementById("imagem-nirvana").innerHTML = corpo.nirvana.imagem;
        document.getElementById("nome-nirvana").innerHTML += corpo.nirvana.name;
        document.getElementById("disco-nirvana").innerHTML += corpo.nirvana.album;
        document.getElementById("estilo-nirvana").innerHTML += corpo.nirvana.style;
        document.getElementById("preco-nirvana").innerHTML += corpo.nirvana.price;

        //QUEEN
        document.getElementById("imagem-queen").innerHTML = corpo.queen.imagem;
        document.getElementById("nome-queen").innerHTML += corpo.queen.name;
        document.getElementById("disco-queen").innerHTML += corpo.queen.album;
        document.getElementById("estilo-queen").innerHTML += corpo.queen.style;
        document.getElementById("preco-queen").innerHTML += corpo.queen.price;

        //GUNS
        document.getElementById("imagem-guns").innerHTML = corpo.guns.imagem;
        document.getElementById("nome-guns").innerHTML += corpo.guns.name;
        document.getElementById("disco-guns").innerHTML += corpo.guns.album;
        document.getElementById("estilo-guns").innerHTML += corpo.guns.style;
        document.getElementById("preco-guns").innerHTML += corpo.guns.price;

    })
    .catch(error => console.log("nao encontrado"));