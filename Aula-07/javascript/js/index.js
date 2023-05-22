// Diferenças entre const, var e let
// declaração de variável com var e let.
// declaração de constantes com const. Aqui o valor nunca será alterado
// a declaração com var tem escopo(visibilidade) fora da estrutura
// declarar com let tem escopo(visibilidade) local, ou seja, dentro da estrutura
var nome = "Henrique";

let sobrenome = "Santos";

console.log(nome + " " + sobrenome);

if(nome == "Henrique"){
    var dados = "é uma pessoa de idade 18";
    let mais = " e também trabalha com TI";
}
console.log(dados);

const texto = "mensagem";
console.log("o valor da constante é: " + texto);
console.log(texto.toUpperCase());