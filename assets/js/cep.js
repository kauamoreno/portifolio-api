
document.getElementById("btnPesquisa").addEventListener("click", function () {


    const prencherFormulario = (endereço) => {
        document.getElementById("rua").value = endereço.logradouro;
        document.getElementById("bairro").value = endereço.bairro;
        document.getElementById("cidade").value = endereço.localidade;
        document.getElementById("estado").value = endereço.uf;
    }

    const cep = document.getElementById("cep").value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(function (response) {
            return response.json();
        })
        .then(function (dados) {
            prencherFormulario(dados)
            document.querySelector(".info").style.display = "block";
        })
        .catch(function (erro) {
            Swal.fire({
                icon: 'error',
                title: "CEP não reconhecido",
                text: 'Insira um cep existente!',
            })
        });
});
