fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => {
    return resposta.json(); 
}).then(economia => {
    console.log(economia);
    document.getElementById("dolarAgora").innerHTML = economia.USDBRL.bid;
    document.getElementById("dolarAlta").innerHTML = economia.USDBRL.high;
    document.getElementById("dolarBaixa").innerHTML = economia.USDBRL.low;
})