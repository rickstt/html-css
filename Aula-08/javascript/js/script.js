// let valor = 0;
// valor = prompt("Digite um número");

// if(valor % 2 == 0){
//     alert("Você digitou um número par");
// }
// else {
//     alert("O número digitado é impar");
// }
 
// let rs = valor % 2 == 0 ? "O número digitado é par" : "O número digitado é impar";
// alert(rs);

//-------------------------------------//

// lISTA DE PRODUTOS
const produtos = ["Mouse", "Teclado", "Sofá", "Monitor"];
console.log(produtos[1].toUpperCase());


//Adicionando um produto
produtos.push("Cadeira Gamer");

for(let i = 0 ; i < produtos.length ; i++){
    console.log("Produto " + (i+1) + ": " + produtos[i]);
}

//remove o ultimo item
produtos.pop();

for(let i of produtos){
    console.log(i);
}

let dados = prompt("Digite produtos separados por vírgula");

//Vamos utilizar um comando cahamdo split que permite quebrar uma string a partir de um caracter separador
//e transforma-lá em um array
const lista = dados.split(',');
for(let pr of lista){
    console.log(pr);
}

























