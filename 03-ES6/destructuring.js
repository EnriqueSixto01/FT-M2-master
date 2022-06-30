//========================================== DESTRUCTURING =========================================================
//-----Arrays---------------                          
var [a, b, c] = [1, 2, 3]
/* es equivalente a hacer 
var a = 1, 
var b = 2,
var c = 3
​*/
console.log(a); //1
console.log(b); //2
console.log(c); //3

//si quiero saltear valores
var [a, , b] = [1, 2, 3]
console.log(a); //1
console.log(c); //3

//cambiar posicion de los elementos en un array
const edibles = ["food", "fruits"];

let [positionOne, positionTwo] = edibles;
[positionOne, positionTwo] = [positionTwo, positionOne];
console.log(positionOne, positionTwo); // fruits, food


//-----------  Objetos ----------------------
// Tambien en objetos puedo hacer destructuring de las propiedaes (Se usa mas el destructuring en objetos)
var obj = {
    name: "Pepita",
    lastname: "La Pistolera",
    masDatos:{
        nacionalidad: "Lejano Oeste"
    }
}

var {name, lastname} = obj
console.log(name) // Pepita
console.log(lastname) // La Pistolera

var {name: nombre, lastname: apellido} = obj //podemos reenombrar las propiedades, darles un alias
console.log(nombre) // Pepita
console.log(apellido) // La Pistolera

//tiene alcance tambien a los anidados
var {name: nombre, masDatos:{nacionalidad}} =obj
console.log(nacionalidad) // Lejano Oeste

//Y luego los utilizo
var str = `Soy ${nombre} ${apellido} de ${nacionalidad}` // Soy Pepita La Pistolera de Lejano Oeste
console.log(str)

//Destructurando en parametros de una funcion
function getFullName({name, surname}){ //se pasa un objeto como parametro
    console.log(`${name} ${surname}`)
}

getFullName({name: 'Enrique', surname: 'Sixto', edad: 26}) //Enrique Sixto

//Fail-soft destructuring
var[a,b,c] = [] //como no hay ningun valor que destructurar se imprimira undefined
console.log(a) //undefined
console.log(b) //undefined
console.log(c) //undefined

//Fail-soft destructuring with default
var[a = 1, b = 2, c = 3] = [8,10] 
console.log(a) //8, porque toma el valor que definimos en el array como primordial
console.log(b) //10
console.log(c) //3