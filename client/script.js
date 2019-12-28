$(document).ready(function() {
    $('.load').hide();
});

function sleep (time) {
    $('.load').show();
    return new Promise((resolve) => setTimeout(resolve, time));
}

function teste(){
    validaCampos(); 
    // sleep(2000).then(() => {
    //     $(document).ready(function() {

    //     });
    //     window.location.assign("index.html");   
    // });
}


async function validaCampos(){
    var controle=0;
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    var nick = document.getElementById("nick").value;
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    if(login == "" || login == " " || login == null || login.length < 4){
        alert("ALERTA \nLogin não valido");
        controle = 1;
    }
    else if(senha == "" || senha == " " || senha == null || senha.length < 4){
        alert("ALERTA \nSenha não valido");
        controle = 1;
    }
    else if(nick == "" || nick == " " || nick == null){
        alert("POR GENTILEZA INFORMAR NICK");
        controle = 1;
    }
    else if(nome == "" || nome == " " || nome == null){
        alert("POR GENTILEZA INFORMAR NOME");
        controle = 1;
    }
    else if(email == "" || email == " " || email == null){
        alert("POR GENTILEZA INFORMAR E-MAIL");
        controle = 1;
    }

    if(controle == 0){
        alert("CADASTRO");
    }
}