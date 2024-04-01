// para seleccionara contenido hay 3 formas: 
//queryselector: te retorna ninguno o hasta algun selector que estes escribiendo, son similiares a CSS
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