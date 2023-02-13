function guardaFormulario(){

    //Capturar valores e criar variaveis para um novo objeto
    var formCliente = new Object();

    formCliente.nome = document.getElementById('nome').value
    formCliente.sobrenome = document.getElementById('sobrenome').value
    formCliente.idade = document.getElementById('idade').value
    formCliente.profissao = document.getElementById('profissao').value
    formCliente.email = document.getElementById('email').value
    formCliente.telefone = document.getElementById('telefone').value
    formCliente.cpf = document.getElementById('cpf').value
    formCliente.formacaoAcademica = document.getElementById('formacaoAcademica').value


    var json = JSON.stringify(formCliente) 
    console.log(json);

    //Retorna o valor primitivo de um objeto
    console.log(formCliente.valueOf());

    window.print();
}