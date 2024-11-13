// Selecciona el elemento HTML con id "tabla" para crear una tabla
var table = document.getElementById("tabla");
//Constante para hacer el ancho de la tabla(celdas)
const WIDTH = 8;
// Define colores para las celdas
const RED = "red";
const GREEN = "green";
const ORANGE = "orange";
const VIOLET = "violet";
const BLUE = "blue";
const GREY = "grey";
// Array de colores que se usará para asignar colores aleatorios a las celdas
const colors = [RED, GREEN, ORANGE, VIOLET, BLUE, GREY];
// Crea 8 filas en la tabla, cada una con 8 celdas
for (var i = 1; i < 9; i++) {
  // Inserta una nueva fila
    var holder = table.insertRow();
  // Inserta celdas en la fila y les asigna identificadores de la "a" a la "h"  
  holder.insertCell(-1).innerHTML = "a" + i;
  holder.insertCell(-1).innerHTML = "b" + i;
  holder.insertCell(-1).innerHTML = "c" + i;
  holder.insertCell(-1).innerHTML = "d" + i;
  holder.insertCell(-1).innerHTML = "e" + i;
  holder.insertCell(-1).innerHTML = "f" + i;
  holder.insertCell(-1).innerHTML = "g" + i;
  holder.insertCell(-1).innerHTML = "h" + i;
}
// Obtiene todas las celdas de la tabla
var cells = document.getElementsByTagName("td");
// Asigna un color aleatorio de la lista de colores a cada celda
for (var x = 0; x < cells.length; x++) {
  cells[x].style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
}
// Asigna un id único a cada celda basado en su posición en el tablero (ej., "a1", "b2")
for (var x = 0; x < cells.length; x++) {
  if (x < 8) {
    cells[x].id = String.fromCharCode(97 + x) + 1;
  } else if (x < 16) {
    cells[x].id = String.fromCharCode(97 + (x - 8)) + 2;
  } else if (x < 24) {
    cells[x].id = String.fromCharCode(97 + (x - 16)) + 3;
  } else if (x < 32) {
    cells[x].id = String.fromCharCode(97 + (x - 24)) + 4;
  } else if (x < 40) {
    cells[x].id = String.fromCharCode(97 + (x - 32)) + 5;
  } else if (x < 48) {
    cells[x].id = String.fromCharCode(97 + (x - 40)) + 6;
  } else if (x < 56) {
    cells[x].id = String.fromCharCode(97 + (x - 48)) + 7;
  } else if (x < 64) {
    cells[x].id = String.fromCharCode(97 + (x - 56)) + 8;
  }
}
// Desactiva los botones de movimiento al iniciar el juego
document.getElementById("flechaArriba").disabled = true; 
document.getElementById("felchaIzq").disabled = true; 
document.getElementById("flechaDer").disabled = true; 
document.getElementById("flechaAbajo").disabled = true; 
// Valida los movimientos permitidos desde la posición actual
function validateMove() {
// Desactiva todas las flechas al inicio
  document.getElementById("flechaArriba").disabled = true;
  document.getElementById("felchaIzq").disabled = true;
  document.getElementById("flechaDer").disabled = true;
  document.getElementById("flechaAbajo").disabled = true;
// Obtiene la posición actual
  var casilla = document.getElementById('contDer-input').value;
// Obtiene el número de fila
  var moveVertical = casilla.charCodeAt(1);
// Obtiene la letra de columna
  var moveHorizontal = casilla.charCodeAt(0);
// Habilita/deshabilita flechas dependiendo de la posición
  if (moveVertical > 49) {
    document.getElementById("flechaArriba").disabled = false;
  }
  if (moveVertical < 56) {
    document.getElementById("flechaAbajo").disabled = false;
  }
  if (moveHorizontal > 97) {
    document.getElementById("felchaIzq").disabled = false;
  }
  if (moveHorizontal < 104) {
    document.getElementById("flechaDer").disabled = false;
  }
// Si la entrada no es válida, desactiva todas las flechas
  if (
    casilla == null ||
    moveVertical == 0 ||
    moveVertical < 49 ||
    moveVertical > 56 ||
    moveHorizontal < 97 ||
    moveHorizontal > 104 ||
    casilla.length != 2
  ) {
    document.getElementById("flechaArriba").disabled = true;
    document.getElementById("felchaIzq").disabled = true;
    document.getElementById("flechaDer").disabled = true;
    document.getElementById("flechaAbajo").disabled = true;
  }
}
// Reinicia el juego recargando la página
function newgame() {
  location.reload();
}
// Función para mover hacia arriba
function arriba() {
  var casilla = document.getElementById('contDer-input').value;
// Obtiene el número de fila
  var moveUp = casilla.charCodeAt(1);
// Verifica si puede moverse hacia arriba
  if (moveUp > 49) {
    var destination = casilla.charAt(0) + String.fromCharCode(moveUp - 1);
    var move1 = document.getElementById(casilla);
    var move2 = document.getElementById(destination);
    var temporal = move2.style.backgroundColor;
    move2.style.backgroundColor = move1.style.backgroundColor;
    move1.style.backgroundColor = temporal;
  } else {
    alert("Movimiento invalido");
  }
// Limpia el campo de entrada y lo enfoca
  var resetti = document.getElementById("contDer-input");
  resetti.value = "";
  document.getElementById("contDer-input").focus();
}
// Función para mover hacia abajo
function abajo(){
// Lógica similar a la de "arriba", pero hacia abajo
    var casilla = document.getElementById('contDer-input').value;
    var moveDown = casilla.charCodeAt(1);
    if (moveDown < 56){
    var destination = casilla.charAt(0) + String.fromCharCode(moveDown + 1);
    var move1 = document.getElementById(casilla);
    var move2 = document.getElementById(destination);
    var temporal = move2.style.backgroundColor;
    move2.style.backgroundColor = move1.style.backgroundColor;
    move1.style.backgroundColor = temporal;
    }else{
      alert("Movimiento invalido");
    }
    var resetti = document.getElementById("contDer-input");
        resetti.value = "";
        document.getElementById("contDer-input").focus();
    }
// Función para mover hacia la izquierda  
    function izquierda(){
      var casilla = document.getElementById('contDer-input').value;
// Obtiene la letra de columna
      var moveLeft = casilla.charCodeAt(0);
// Verifica si puede moverse a la izquierda
      if (moveLeft > 97){
      var destination = String.fromCharCode(moveLeft - 1) + casilla.charAt(1);
      var move1 = document.getElementById(casilla);
      var move2 = document.getElementById(destination);
      var temporal = move2.style.backgroundColor;
      move2.style.backgroundColor = move1.style.backgroundColor;
      move1.style.backgroundColor = temporal;
      }else{
        alert("Movimiento invalido");
      }
      var resetti = document.getElementById("contDer-input");
      resetti.value = "";
      document.getElementById("contDer-input").focus();
      }
// Función para mover hacia la derecha 
      function derecha(){
        
        var casilla = document.getElementById('contDer-input').value;
        var moveRight = casilla.charCodeAt(0);
        if (moveRight < 104){
        var destination = String.fromCharCode(moveRight + 1) + casilla.charAt(1);
        var move1 = document.getElementById(casilla);
        var move2 = document.getElementById(destination);
        var temporal = move2.style.backgroundColor;
        move2.style.backgroundColor = move1.style.backgroundColor;
        move1.style.backgroundColor = temporal;
        }else{
          alert("Movimiento invalido");
        }
        var resetti = document.getElementById("contDer-input");
        resetti.value = "";
        document.getElementById("contDer-input").focus();
        }