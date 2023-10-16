const arrPessoa = [];

function calcular() {
    event.preventDefault(); //capturar o evento de submit do formulario (parar)

    //pegar dados do form
    const nome = document.getElementById("nome").value;
    const altura = Number.parseFloat(document.getElementById("altura").value);
    const peso = Number.parseFloat(document.getElementById("peso").value);

    //validar se estao prrenchidos
    if (isNaN(altura) || isNaN(peso) || nome.trim() == 0) {
        window.alert("nessario preencher os numeros");
        return;
    }

    //imc da pessoa
    const imc = calcularImc(altura, peso);

    //situacao da pessoa
    const situacao = retornaSituacao(imc);

    //gera objeto e ja adiciona os valores ao objeto(o objeto esta recebendo informacoes das variaveis com o mesmo nome)
    const pessoa = {
        nome,
        altura,
        peso,
        imc,
        situacao
    }

    //adiciona o objeto pessoa no array arrPessoa
    arrPessoa.push(pessoa);

    listarPessoas()
}

//calcula o IMC e reporna o resultado
function calcularImc(altura, peso) {
    return peso / Math.pow(altura, 2);
}

//checa o valor de IMC e retorna uma string que descreve o estado a partir do valor passado
function retornaSituacao(imc) {
    if (imc <= 18.5) {
        return "Magreza Severa";
    } else if (imc <= 24.99) {
        return "Peso normal";
    } else if (imc <= 29.99) {
        return "Acima do peso";
    } else if (imc <= 34.99) {
        return "Obesidade 1";
    } else if (imc <= 39.99) {
        return "Obesidade 2";
    } else {
        return "CUIDADO !!";
    }
}

function listarPessoas() {
    let template = ``;

    arrPessoa.forEach(pessoa => {
        template += `
        <tr>
            <td>${pessoa.nome}</td>
            <td>${pessoa.altura}</td>
            <td>${pessoa.peso}</td>
            <td>${pessoa.imc}</td>
            <td>${pessoa.situacao}</td>
        </tr>
        `

        document.getElementById("cadastro").innerHTML = template;
    });
}