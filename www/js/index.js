function pronto() {
    document.getElementById("entrarComFace").addEventListener("click", entrarNoFace, false);

    function entrarNoFace(){
        navigator.vibrate(200);
        facebookConnectPlugin.login(['public_profile'], function(sucesso){
            alert("login OK!!");
            // var facebook_id = sucesso.authResponse.userID;
            facebookConnectPlugin.api('me', ['public_profile'], function(dados){
                alert(JSON.stringify(dados));
                localStorage.setItem('facebook_nome', dados.name);
                localStorage.setItem('facebook_id', dados.id);
                document.getElementById("nomePerfil").innerHTML = dados.name;
                document.getElementById("imagemPerfil").src = "https://graph.facebook.com/"+dados.id+"/picture/?type=large";
            })
        }, function(erro) { alert('Não foi possível conectar ao Facebook: '+ erro); });
    }
}

document.addEventListener("deviceready", pronto, false);