/*
A função abaixo é chamada por um evento que está na página index.html.
O evento foi adicionado a um botão com o comando onclick="", ou seja quando o usuário clicar no botão será chamada a função mensagem().
*/
function mensagem() {
    var nome = prompt("Digite seu nome");
    var sobrenome = prompt("Digite seu sobrenome");
    document.getElementsByTagName("p")[0].innerHTML=nome+" "+sobrenome; 
};


/* 
Quando a página for carregada ela deverá chamar a função apagarDusplay(). Pois a função apaga a tela e adiciona o valor 0(zero).
O evento utilizado será onload(quando carregar a página) aplicado no body(document.body)
*/
const body = document.body;
body.onload = apagarDisplay;
const display = document.getElementsByTagName("input")[0];
let x = 0;
let y = 0;
let resultado = 0;
let operador = "";


function apagarDisplay() {
    display.value="0"
}
function adicionar1() {
    if(display.value=="0"){
        display.value = "1";
    }
    else{
        display.value+="1";
    }
}
function adicionar2() {
    if(display.value=="0"){
        display.value = "2";
    }
    else{
        display.value+="2";
    }
}
function adicionar3() {
    if(display.value=="0"){
        display.value = "3";
    }
    else{
        display.value+="3";
    }
}
function adicionar4() {
    if(display.value=="0"){
        display.value = "4";
    }
    else{
        display.value+="4";
    }
}
function adicionar5() {
    if(display.value=="0"){
        display.value = "5";
    }
    else{
        display.value+="5";
    }
}
function adicionar6() {
    if(display.value=="0"){
        display.value = "6";
    }
    else{
        display.value+="6";
    }
}
function adicionar7() {
    if(display.value=="0"){
        display.value = "7";
    }
    else{
        display.value+="7";
    }
}
function adicionar8() {
    if(display.value=="0"){
        display.value = "8";
    }
    else{
        display.value+="8";
    }
}
function adicionar9() {
    if(display.value=="0"){
        display.value = "9";
    }
    else{
        display.value+="9";
    }
}
function adicionar0() {
    if(display.value=="0"){
        display.value = "0";
    }
    else{
        display.value+="0";
    }
}

function adicionarVirgula(){
    /*
    Para o botão da virgula estamos verificando se a vírgula já foi adicionado. Caso isso ja tenha acontecido, o vírgula não será mais acrescida. Mas se a vírgula não foi adicionada então será acrescida ao display.
    Para verificar a existência da vírgula utilizamos o comando indexOf, que tenta localizar a vírgula no display. Quando indexOf retorna -1 é porque não foi localizado, e assim, nos adicionamos a vírgula
    */
    if(display.value.indexOf(".")==-1){
        display.value+="."
    }
}

function soma(){
    x = parseFloat(display.value);
    operador = "+";
    apagarDisplay();
}
function subtrair(){
    x = parseFloat(display.value);
    operador = "-";
    apagarDisplay();
}
function multiplicar(){
    x = parseFloat(display.value);
    operador = "*";
    apagarDisplay();
}
function dividir(){
    x = parseFloat(display.value);
    operador = "/";
    apagarDisplay();
}
function raiz(){
    x = parseFloat(display.value);
    operador = "sqrt";
}
function porcentagem(){
    x = parseFloat(display.value);
    operador = "%";
    apagarDisplay();
}
function igual(){
    if(operador=="+"){
        resultado = x + parseFloat(display.value);
        display.value = resultado;
    }
    else if(operador=="-"){
        resultado = x - parseFloat(display.value);
        display.value = resultado;
    }
    else if(operador=="*"){
        resultado = x * parseFloat(display.value);
        display.value = resultado;
    }
    else if(operador=="/"){
        resultado = x / parseFloat(display.value);
        display.value = resultado;
    }
    else if(operador=="sqrt"){
        resultado = Math.sqrt(parseFloat(display.value));
        display.value = resultado
    }
    else if(operador=="%"){
        resultado = x * display.value / 100;
        display.value = resultado
    }
    else{}
}
