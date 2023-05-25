// Funções anônimas
const somaValores = function() {
    let v1 = prompt("Digite um valor");
    let v2 = prompt("Digite outro valor");

    v1 = parseInt(v1);
    v2 = parseInt(v2);

    console.log(v1+v2);
    alert(v1+v2);
}

const media = function(arrayNumerico, tamanhoArray){
    let rs = 0;
    for(let i = 0; i < tamanhoArray ; i++){
        rs += arrayNumerico[i];
    }
    return rs/tamanhoArray;
}

//Referenciar o body da página
const body = document.body;

// Vamos criar um controle html usando js. Este controle só existirá em tempo de execução, ou seja, somente quando a página estiver rodando. Usaremo o comando createElement
const btn4 = document.createElement("button");
const btn5 = document.createElement("button");

//Adicionar o atributo id ao botão criado
btn4.setAttribute("id","btn4");
btn5.setAttribute("id","btn5");

// Adicionar texto no botão
btn4.innerHTML = "Botão 4";
btn5.innerHTML = "Botão 5";
btn4.onclick = somaValores; 

let ar = [10,20,5,9,12];
btn5.onclick = function() {
    alert(media(ar,ar.length));
}
//Adicionar o btn4 ao corpo da página(body). Utilizaremos o comando append
body.appendChild(btn4);
body.appendChild(btn5);