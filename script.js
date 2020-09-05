let chance = 4;
let bandera = false;
function mostrarNombre() {
    event.preventDefault();
    let elemento = document.getElementById('txtNombre');
    let unaAlerta = document.getElementById('laAlerta');
    let pista = document.getElementById('pista');
    let pista2 = document.getElementById('pista2')
    
    let nombre = elemento.value;
    nombre = nombre.toLowerCase()
    if(nombre==='roma' && chance > 0) {
        let cadena3 = "";
        cadena3 += '<div class="alert alert-success" role="alert">';
        cadena3 += '¡FELICIDADES! Respuesta correcta';
        cadena3 += '</div>';
        unaAlerta.innerHTML = cadena3;
        bandera = true;
        
    } else {
        if (bandera === false && chance != 0) {
            chance -= 1;
        }
    }
    if(chance <= 0 && bandera == false) {
        let cadena2 = "";
        cadena2 += '<div class="alert alert-danger" role="alert">';
        cadena2 += '¡Respuesta incorrecta!';
        cadena2 += '</div>';
        unaAlerta.innerHTML = cadena2;
    }
    if(chance === 2) {
        let cadena4 = "Pista: Es una ciudad de Italia";
        pista.innerHTML = cadena4;
    }
    if(chance === 1) {
        let cadena5 = "Pista: Todos los caminos llegan a...";
        pista2.innerHTML = cadena5;
    }
    
    let elemento2 = document.getElementById('intentos');
    let cadena = "<b>Intentos restantes:</b> ";
    cadena += chance;
    elemento2.innerHTML = cadena;
}