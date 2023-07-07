const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById("valor");

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  const counter = store.getState().contador;
  valor.innerHTML = counter
  
}
renderContador()
// Ejecutamos la función 'renderContador':

// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:

//! QUEDA ATENTO A LOS SUCESO QUE HAYA EN EL ESTADO GLOBAL (SUSCRIBE)
store.suscribe(renderContador);

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:

 const boton1= document.getElementById("incremento");
 boton1.addEventListener("click",() => {store.dispatch(incremento())})
 const boton2= document.getElementById("decremento");
 boton2.addEventListener("click",() => {store.dispatch(decremento())})