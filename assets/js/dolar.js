fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => {
    return resposta.json(); 
}).then(economia => {
    var dolar = economia.USDBRL.bid;
    console.log(economia);

    document.getElementById("dolarAgora").innerHTML = economia.USDBRL.code + " " + dolar;
})