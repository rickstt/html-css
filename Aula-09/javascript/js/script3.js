// Funções de seta (Arrow Function)
const alteraBgColor = () => document.body.style.backgroundColor="red";

const mudarCor = () => {
    document.body.style.backgroundColor=corEscolhida();
    function corEscolhida() {
        return "blue";
    }
}



const btn6 = document.createElement("button");
const btn7 = document.createElement("button");
btn6.setAttribute("id","btn6");
btn7.setAttribute("id","btn7");
btn6.onclick = alteraBgColor;
btn7.onclick = mudarCor;
btn6.innerHTML = "Botão 6";
btn7.innerHTML = "Botão 7";
body.appendChild(btn6);
body.appendChild(btn7);