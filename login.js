function logar (){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login=="gabriel" && senha == "gabriel"){
        alert('Sucesso');
        location.href = "index.html";
   
    }else{
        alert('Usuario ou senha incorretos');
    }

}