// para seleccionara contenido hay 3 formas: 
//queryselector: te retorna ninguno o hasta un slo selector que estes escribiendo que seria el primero que encuentres, son similiares a CSS
//vamos a seleccionar el texto de h2 de contacto.html
const heading = document.querySelector('.header__texto h2') // document hace referencia a todo el texto de html es una funcion, todos los query inician con DOCUMENT, . por que es un objeto y el queryselector que nos va a retornar 0 o 1 elemento. dentro del parentesis va el selector de CSS y va entre comillas la clase padre y el elemento html, cuando se comete un erros en js como poner una clase que no exista en parentesis va a salir null y lo mas posible es que este mal escrito el selector.
console.log(heading);// nos aparece en la consola seleccionado

heading.textContent = 'Nuevo Heading'; // en firefox le damos inspeccionar y nos abre una lista grande, y ahi dice textcontent que seria blog de cafe, aca lo que estamos haciendo es modificandolo a travez de JS
heading.classList.add('nueva-clase'); //aca estamos agregando una nueva clase, tambien con inspeccionar en firefox vemos classList
// todo el texto y todo lo de HTML puede ser manipulado a traves de JS


//querySelectorAll, a diferencia del anterior este selecciona varios elementos
const enlaces = document.querySelectorAll('.navegacion a'); //TODOS LOS SELECTORES INICIAN CON DOCUMENT, 
enlaces[0].textContent = 'Nuevo texto'; // para cambiar el texto del enlace seleccionado.
enlaces[0].href = 'http://google.com';// para cambiar la direccion donde nos llevaria el enlace, se pone href por que es el enlace que vamos a modificar
console.log(enlaces);
//para acceder a un enlace en especifico se hace como en los array, console.log(enlaces[0])

//getElementById  esta es la forma mas vieja y que poco se utiliza.

const heading2 = document.getElementById('heading'); // no hay necesidad de poner # por que ya se esta especificando
console.log(heading);

// como generar codigo HTML con JS
// generar un nuevo enlace
const nuevoEnlace = document.createElement('A') //Js recomienda utilizar mayusculas esto es lo mismo que crear <h1> en html, se puede crear P A DIv en mayusculas mejor

// agregar el href al enlace que estamos creando
nuevoEnlace.href = 'nuevo-enlace.html';

//agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace';

//agregar la clase
nuevoEnlace.classList.add('navegacio__enlace');

//Agregarlo al documento, una vez que creaste el enlace anterior con todos sus atributos se agrega al documento.
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace) //appendChild esta es la funcion que nos permite agregar un elemento e insertarla en otro lugar, estamos diciendo agrega como hijo de esta navegacion el nuevo enlace

console.log(nuevoEnlace);


//EVENTOS JS
//puede ser un click darle scroll, escribir todo eso son tipos de eventos

console.log(1);


window.addEventListener('load', function() {//addevenlistener es un metodo para registrar los eventos, cuando ocurra el evento el codigo siguiente es el que se ejecuta, el load lo que hace es esperar hasta que el window este lista, cuando el evento ocurrar va a suceder el function a esto se le conoce como CALL BACK 
    console.log(2); // load espera a que JS y los archivos que dependen del HTML esten listos 
}) 

window.onload = function(){ // esto es lo mismo del codigo anterior. se utiliza mas el primero
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() { // PREGUNTA DE ENTREVISTA La diferencia entre load y DOMContentLoaded en el caso de load espera a que se descargue todo el html (css js img videos etc) en el DOM solo espera que se descargue el HTML no le importa el css y las imagenes, se utiliza mas el DOM por ser mas rapido
    console.log(4);
});

console.log(5);

window.onscroll = function(){ // una funcion que se ejecuta mientras das scroll
    console.log('scrolling...')
}

//SELECCIONAR ELEMENTOS Y ASOCIARLES UN EVENTO
