function pesquisa() {
    const apiKey = '27f84c68';
    const filme = document.getElementById('filme').value;

    //http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}

    fetch(`https://www.omdbapi.com/?t=${filme}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.getElementById('titulo').innerHTML = data.Title
            document.getElementById('poster').src = data.Poster
            document.getElementById('resumo').innerHTML = `<b>Resumo: </b> ${data.Plot}`
            document.getElementById('lancamento').innerHTML = `<b>Lançamento: </b> ${data.Released}`
            document.getElementById('genero').innerHTML = `<b>Genero: </b> ${data.Genre}`
            document.getElementById('duracao').innerHTML = `<b>Duração: </b> ${data.Runtime}`
            document.getElementById('rating').innerHTML = `<b>Avaliação: </b> ${data.imdbRating}`
            document.getElementById('votos').innerHTML = `<b>Votos: </b> ${data.imdbVotes}`
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: "Filme não reconhecido",
                text: 'Insira um filme existente!',
            })
        });

    document.getElementById('display').style.display = 'block';
}





