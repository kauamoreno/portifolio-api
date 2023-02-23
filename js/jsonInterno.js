
//SERVE PARA CASO O USUARIO APERTAR ENTER NO INPUT
const input = document.getElementById("cpf")
input.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    pesquisar();
  }
});

function pesquisar(){

    //MINHA BASE DE DADOS ARRAY
    const pessoas = '{"pessoa1":{"nome": "101", "idade": "36", "profissao": "Carpinteiro"}, "pessoa2":{"nome": "102", "idade": "47", "profissao": "Programador"},                  "pessoa3":{"nome": "103", "idade": "12", "profissao": "Estudante"}, "pessoa4":{"nome": "104", "idade": "45", "profissao": "Geólogo"},                                           "pessoa5":{"nome": "105", "idade": "90", "profissao": "Aposentado"}, "pessoa6":{"nome": "106", "idade": "51", "profissao": "Cozinheiro"}}'

    //CONVERSÃO DA MINHA BASE DE DADOS ARRAY PARA JSON
    const data = JSON.parse(pessoas)
    console.log(data);

    //VARIAVEIS 
    var cpf = document.getElementById("cpf").value;
    var nome = document.getElementById("nome");
    var idade = document.getElementById("idade");
    var profissao = document.getElementById("profissao");

    //FUNÇÃO QUE RETORNA PARA O FRONT OS DADOS DOS USUARIOS
    function mostrarDados(usuario){
        var user = usuario;
        //alert("CPF Correto, ENTRANDO NO SISTEMA...")
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Entrando no sistema...',
            showConfirmButton: false,
            timer: 1500
        })
        document.getElementById("dados").style.display = "block";
        document.getElementById("nome").innerHTML = `●  CPF: ${data[user].nome}`;
        document.getElementById("idade").innerHTML = `●  Idade: ${data[user].idade}`;
        document.getElementById("profissao").innerHTML = `●  Profissão: ${data[user].profissao}`;
    }

    //CASE PARA SABER QUAL FOI O USUARIO QUE VEIO DO INPUT
    switch (cpf){
        case data.pessoa1.nome:
            mostrarDados("pessoa1");
            break;
        
        case data.pessoa2.nome:
            mostrarDados("pessoa2");
            break;

        case data.pessoa3.nome:
            mostrarDados("pessoa3");
            break;

        case data.pessoa4.nome:
            mostrarDados("pessoa4");
            break;

        case data.pessoa5.nome:
            mostrarDados("pessoa5");
            break;
        
        case data.pessoa6.nome:
            mostrarDados("pessoa6");
            break;
        
        default:
            Swal.fire({
                icon: 'error',
                title: "Usuário não reconhecido",
                text: 'Tente logar com um usuário existente!',
            })
    }
}
