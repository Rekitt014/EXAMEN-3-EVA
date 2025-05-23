const lista = [];
const boton_ = document.getElementById("boton1");

function agregarValor() {
  let input = document.getElementById("mi_Input");
  let nombre = input.value;

  if (nombre && lista.length < 4) {
    lista.push(nombre);

    let li = document.createElement("li");
    li.textContent = nombre;
    document.getElementById("lista").append(li);
    input.value = "";

    let faltan = 4 - lista.length;
    let mensaje_ = document.getElementById("mensaje");

    if (nombre === "") {
      alert("Escribe un nombre válido");
      return; 
    }
    if (faltan > 0) {
        mensaje_.textContent = `Quedan ${faltan} jugador${faltan !== 1 ? "es" : ""} por añadir`;
    } else {
      mensaje_.textContent = "¡Listos para empezar el juego!";
      boton_.textContent = "Jugar";
      boton_.style.backgroundColor = "#4CAF50"; 
      boton_.style.color = "white"; 
    }
  }

}
function empezarJuego(){
    if(faltan==lista.lenth)
        alert("El juego puede comenzar")
}

boton_.classList.add("jugar");

//menu hamburguesa

boton_.addEventListener("click", agregarValor);

