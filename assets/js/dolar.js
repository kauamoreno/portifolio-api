fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => {
    return resposta.json(); 
}).then(economia => {
    console.log(economia);
    document.getElementById("dolarAgora").innerHTML = economia.USDBRL.code + " " + economia.USDBRL.bid;
})