const prencherFormulario = (endereço) => {
    document.getElementById("rua").value = endereço.logradouro;
    document.getElementById("bairro").value = endereço.bairro;
    document.getElementById("cidade").value = endereço.localidade;
    document.getElementById("estado").value = endereço.uf;
}

const cepValido = (cep) => {
    if (cep.length == 8){
        return true;
    }else{
        return false;
    }
}

const pesquisaCep = async () => {
    const cep = document.getElementById("cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        prencherFormulario(endereco);
    }
}

document.getElementById("cep").addEventListener("focusout", pesquisaCep);