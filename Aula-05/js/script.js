//Fazer referências aos controles html do formulário
const btn = document.getElementById("btnLogin");
const txtuser = document.getElementById("txtuser");
const senha = document.getElementById("senha");
let autenticado;
let token;

btn.onclick = () => {
    //validação dos campos usuário e senha
    if (txtuser.value.trim() == "" || senha.value.trim() == "") {
        return alert(`Todos os campos devem ser preenchidos`);
    }
    else {
        //vamos usar o comando fecth para fazer uma requisição à nossa API e realizar o login.
        //Iremos passar o nome de usuário e a senha
        fetch("http://127.0.1:8087/users/login", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                nomeusuario: txtuser.value,
                senha: senha.value
            })
        }).then((response) => response.json()).then((dado) => {
            if (dado.output == "Authenticated") {
                let autenticado = true;
                token = dado.token;
                txtuser.value = "";
                senha.value = "";
            }
            else {
                txtuser.value = "";
                senha.value = "";
                return alert("Usuário ou senha incorretos");
            }
        }).catch((error) => {
            console.error(`Não foi possível requisitar a APÍ -> ${error}`);
        })
    }
}

document.getElementById("register").onclick = () => {
    document.getElementById("shadow").style.zIndex = "200";
    document.getElementById("shadow").style.opacity = "1";
}
document.getElementById("fechar").onclick = () => {
    document.getElementById("shadow").style.zIndex = "-100";
    document.getElementById("shadow").style.opacity = "0";
}

//Script para cadastrar novo usuário no banco de dados
const btnCad = document.getElementById("btnCadastrar");
const txtusuario = document.getElementById("txtusuario");
const txtemail = document.getElementById("txtemail");
const txtsenha = document.getElementById("txtsenha");
const foto = document.getElementById("foto");

btnCad.onclick = () => {
    if (txtusuario.value.trim() == "" || txtsenha.value.trim() == "" || txtemail.value.trim() == "" || foto.value.trim() == "") {
        return alert(`Todos os campos devem ser preenchidos`);
    }
    else {
        fetch("http://127.0.0.1:8087/users/insert", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                nomeusuario: txtusuario.value,
                senha: txtsenha.value,
                email: txtemail.value,
                foto: foto.value
            })
        }).then((response) => response.json())
        .then((result) => {
            if (result.output == "Inserted") {
                alert("Usuário cadastrado com sucesso");
                txtusuario.value = "";
                txtsenha.value = "";
                txtemail.value = "";
                foto.value = "";
                document.getElementById("shadow").style.zIndex = "-100";
                document.getElementById("shadow").style.opacity = "0";
            }
            else {
                alert(`Não foi possível realizar o cadastro. Tente novamente!`)
            }
        }).catch((error) => console.error(`Erro ao cadastrar -> ${error}`));
    }
}

//
function carregarDados() {
    const estrutura = document.getElementById("estrutura");
    fetch("http://127.0.0.1:8087/users/list").then((response) => response.json()).then((result) => {
        result.data.map((item, index) => {
            let divUser = document.createElement("div");
            divUser.setAttribute("class", "divUser");
            divUser.innerHTML=`
                <img src="assets/tuxavatar.png">
                <h3>${item.idusuario}</h3>
                <h2>${item.nomeusuario}</h2>
                <h3>${item.email}<h3>
                <a href="#" onclick="editar('${item.idusuario}', '${item.nomeusuario}')"><img src="assets/editar.jpg"></a>
            `;
            estrutura.appendChild(divUser);
        })
    }).catch((error) => console.log(`Erro ao executar API -> ${error}`))
}

function editar(id, usuario) {
    alert(`O id é ${id} e o nome é ${usuario}`);
}
