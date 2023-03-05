/*
Biblioteca Axios para realizar uma
requisição HTTp da OpenWeatherMAP e 
obter a previsão
*/

function pesquisar() {

    var cidade = document.getElementById("cidade").value;

    //Esta linha define a função getWeather como uma função assincron, esperando uma resposta da API
    async function getWeather() {

        //Fazendo uma chamada à API usando a biblioteca AXIOS. A URL da API inclui as informações da localidade (Mogi das Cruzes)
        //A unidade de medida (Celsius) e a chave API KEY

        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`);

            //Resposta em (Celsius e localização)
            const tempCelsius = response.data.main.temp;

            const iconCode = response.data.weather[0].icon;
            const clima = response.data.weather[0].main;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
            document.getElementById('icon').src = iconUrl

            document.getElementById('cidateTitulo').innerHTML = cidade
            document.querySelector("#temperatura").innerHTML = `${tempCelsius.toFixed(2)} °C`
            document.getElementById('clima').innerHTML = `Clima: ${clima}`;

            console.log(response);
        } catch {
            Swal.fire({
                icon: 'error',
                title: "Local não reconhecido",
                text: 'Insira um local existente!',
            })
        }


    }

    //Chamando a função getWeather para iniciar a consulta da API
    getWeather();
}