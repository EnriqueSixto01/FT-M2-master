
//------------------------ Valores por default -------------------------

//Funcion tradicional
function suma(a, b) {
return a + b
}

console.log(suma(1, 2))

//por defecto y con arrow --> 
suma = (a, b = 2) => a + b
suma(1)

suma = (a = 1, b = 2) => a + b
suma()

//------------------------ SPREAD

// Me agrupa todos los parametros en un array 

function prueba (a, ...otros) {
console.log(a)
console.log(otros)
}

prueba(1, 2, 3, 4, "otro valor", true, {a:1})
// a = 1
// otros = [2, 3, 4, "otro valor", true, {a:1}]



//Otro uso muy util --> Generar copias de Array
var array2 = [1, 2, 3]
var arrayCopia2 = array2
arrayCopia2.push(4)
console.log(array2) //-->[1, 2, 3, 4]

//Tambien podemos hacerlo con objetos
var Object = {
  marca: 'Gibson'
}

var copyObject = {...Object}
copyObject.year = 2022

console.log(Object);
console.log(copyObject);

//-----> el array se pasa por referencia, puede ser un problema!

let array3 = [1, 2, 3]
let arrayCopia3 = [...array3]  //<-- Spread
arrayCopia3.push(4)
console.log(array3) //--> 1, 2, 3

//---- Puedo generar copia y adicionar elementos a la vez

let array4 = [1, 2, 3]
let arrayCopia4 = [...array4, 4]
 
console.log(array4)  // --> 1, 2, 3
console.log(arrayCopia4) //--> 1, 2, 3, 4

//---------------------  O concatenar arrays

let arrayGigante = [...array3, ...arrayCopia2] //es lo mismo que si usaramos el .concat()
console.log(arrayGigante); //[1, 2, 3, 1, 2, 3, 4]


const myName = ["Sofela", "is", "my"];
const aboutMe = ["Oluwatobi", ...myName, "name."];

console.log(aboutMe);


//-------------------- Rest Operator ------------------------------------
//El operador rest se usa para colocar el resto de algunos valores específicos proporcionados por el usuario en una matriz 
//de JavaScript.

// Define a function with two regular parameters and one rest parameter:
function myBio(firstName, lastName, ...otherInfo) { 
    return `${firstName} ${lastName}` + otherInfo;
  }
  
  // Invoke myBio function while passing five arguments to its parameters:
  console.log(myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"));
  
//Si solo retornamos otherInfo nos devolvera un array
//   ["CodeSweetly", "Web Developer", "Male"]

//-------------------- Spread Operator --------------------------------------
//Expande iterables en elementos individuales.
//La sintaxis de SPREAD funciona dentro de los literales de matriz, las llamadas a funciones y los objetos de propiedad 
//inicializados para distribuir los valores de los objetos iterables en elementos separados. Así que efectivamente, 
//hace lo contrario del resto del operador.

//Nota: un operador de dispersión solo es efectivo cuando se usa dentro de literales de matriz, llamadas a funciones 
//u objetos de propiedades inicializados.

function f(a, ...amigos){
  console.log(a, amigos)
}

f(3, 'Dany', 'Yio', 'Bry') //3 ['Dany', 'Yio', 'Bry']

function g(x,y,z){
  console.log(x + y + z);
}

//Pero tambien puedo hacer el proceso inverso... desarmar array al pasarselo como parametro:

pruebaSum = (a, b, c) => a + b + c
var array = [1, 2, 3]
pruebaSum(...array) // 6


var arr = [1,2,5]
g(...arr) // 8, usando el spred de esta forma va a ir separando cada elemento de nuestro array y asignandolo a cada 
          //variable que este definida en nuestra funcion

// Define a function with three parameters:
function myBio(firstName, lastName, company) { 
    return `${firstName} ${lastName} runs ${company}`;
  }
  
  // Use spread to expand an array’s items into individual arguments:
  console.log(myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]));  // “Oluwatobi Sofela runs CodeSweetly”
  

