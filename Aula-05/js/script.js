//Fazer referências aos controles html do formulário
const btn = document.getElementById("btnLogin");
const txtuser = document.getElementById("txtuser");
const senha = document.getElementById("senha");
let autenticado;
let token;
let key; 

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
                //Alterar a tela
                window.location.replace(`list.html?key+${token}`);
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


function carregarDados() {

    key = window.location.search.substring(5,window.location.search.length);

    const estrutura = document.getElementById("estrutura");
    fetch("http://127.0.0.1:8087/users/list",{
        method: "GET",    
        headers: {
            "accept": "application/json",
            "content-type": "application/json",
            "token": key
        }
    }).then((response) => response.json()).then((result) => {
        result.data.map((item, index) => {
            let divUser = document.createElement("div");
            divUser.setAttribute("class", "divUser");
            divUser.innerHTML=`
                <img src="assets/tuxavatar.png">
                <h3>${item.idusuario}</h3>
                <h2>${item.nomeusuario}</h2>
                <h3>${item.email}<h3>
                <a href="#" onclick="editar('${item.idusuario}', '${item.nomeusuario}', '${item.email}', '${item.foto}')"><img src="assets/editar.jpg"></a>
            `;
            estrutura.appendChild(divUser);
        })
    }).catch((error) => console.log(`Erro ao executar API -> ${error}`))
}

function editar(id, usuario, email, foto) {
    //Fazer uma referência ao body da página html
    const body = document.body;
    const div_shadow = document.createElement("div");
    const div_white = document.createElement("div");
    const form = document.createElement("form");
    const input_id = document.createElement("input");
    const input_user = document.createElement("input");
    const input_pass = document.createElement("input");
    const input_confirm = document.createElement("input");
    const input_email = document.createElement("input");
    const input_file = document.createElement("input");
    const input_sub = document.createElement("input");
    const fechar = document.createElement("a");

    //Aplicar atributos aos elementos
    div_shadow.setAttribute("id","div_shadow");
    div_white.setAttribute("id","div_white");
    fechar.setAttribute("href", "#");
    fechar.setAttribute("id","fechar");
    fechar.setAttribute("onclick","fecharFormAtualizar()");
    fechar.innerHTML="&times;";


    //atributo para não enviar o formulário, o envio será feito via JS
    form.setAttribute("onsubmit","return false");

    //Aplicar atributos as caixas de input
    input_id.setAttribute("type", "text");
    input_id.setAttribute("placeholder", `Id do Usuário: ${id}`);
    input_id.setAttribute("disabled", "true");

    input_user.setAttribute("type", "text");
    input_user.setAttribute("placeholder", `Nome de Usuário: ${usuario}`);
    input_user.setAttribute("disabled", "true");

    input_pass.setAttribute("type", "password");
    input_pass.setAttribute("placeholder", "Digite a nova senha");
    input_confirm.setAttribute("type", "password");
    input_confirm.setAttribute("placeholder", "Confirme a nova senha");

    input_email.setAttribute("type", "email");
    input_email.setAttribute("placeholder", `${email}`)
    input_email.setAttribute("value", `${email}`);

    input_file.setAttribute("type",  "file");
    input_file.setAttribute("value", `${foto}`);

    input_sub.setAttribute("type", "submit");
    input_sub.setAttribute("value", "Update")

    input_sub.onclick = () => {
        if (input_confirm.value != input_pass.value){
            return alert(`As senhas não coincidem`);
        }
        else {
            fetch(`http://127.0.0.1:8087/users/update/${id}`, {
                method: "PUT",
                headers: {
                    "accept":"application/json",
                    "content-type":"application/json",
                    "token":key
                },
                body:JSON.stringify({
                    senha: input_pass.value,
                    email: input_email.value,
                    foto: input_file.value
                })
            }).then((response) => response.json()).then((dados) => alert(`${dados.output}`)).catch((error) => console.error(`Erro ao ler API -> ${error}`))
        }
    }

    form.appendChild(input_id);
    form.appendChild(input_user);
    form.appendChild(input_pass);
    form.appendChild(input_confirm);
    form.appendChild(input_email);
    form.appendChild(input_file);
    form.appendChild(input_sub);
    div_white.appendChild(form);
    div_white.appendChild(fechar);
    div_shadow.appendChild(div_white);
    body.appendChild(div_shadow);

}

function fecharFormAtualizar() {
    document.getElementById("div_shadow").style.zIndex = "-100";
    document.getElementById("div_shadow").style.opacity = "0";
    window.location.reload();
}