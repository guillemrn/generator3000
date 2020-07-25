function generar(longitud)
{
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!#$%&/(";:-_)@';
    const numbers = '1234567890';
    let caracteres = uppercase + lowercase + symbols + numbers

    long=parseInt(longitud);
    let contraseña = " ";
    for (i=0; i<long; i++) contraseña += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
    document.getElementById("pass").innerHTML=contraseña;
}

var boton = document.querySelector('.botonCopiar');

boton.addEventListener('click', function(event) {
var passwrd = document.querySelector('.passw');
var range = document.createRange();
range.selectNode(passwrd);
window.getSelection().addRange(range);

try {
    var resultado = document.execCommand('copy');
    Swal.fire(resultado ? 'Contraseña copiada' : 'No se pudo copiar la contraseña');
} catch(err) {
    Swal.fire('ERROR al intentar copiar la contaseña');
}

window.getSelection().removeAllRanges();

});
