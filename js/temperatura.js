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

        //const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Mogi%20das%20Cruzes&units=metric&appid=64ed82577ced7f69cb1687f0ce536131')
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`);


        //Resposta em (Celsius e localização)
        const tempCelsius = response.data.main.temp;
        document.querySelector("#temperatura").innerHTML = `A temperatura atual de ${cidade} é de ${tempCelsius.toFixed(2)} °C`

    }

    //Chamando a função getWeather para iniciar a consulta da API
    getWeather();
}