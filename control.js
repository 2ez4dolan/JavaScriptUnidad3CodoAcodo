var formulario = document.getElementById('formulario');
var usuario = document.getElementById("user");
var pass = document.getElementById("clave");
var regex= /[@]/;
formulario.addEventListener('submit',function(e){
    e.preventDefault();

if (usuario.value == '' ){
    alert("el usuario esta vacio");
}else{
    if(!regex.test(usuario.value)){
        alert ("falta el '@' ")
    };
}
if (pass.value == ''){
alert("la contraseña esta vacia");

}

formulario.reset();
})