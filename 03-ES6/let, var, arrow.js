// ES6 --> Nuevas features

//    Let y const

var fruta = 'Pera'
let verdura = 'Tomate'
const hongos = 'Champignon'

if(true){
var fruta = 'Mango'
let verdura = 'Lechuga'   //verdura y hongos solo existen dentro del scope del if
const hongos = 'Girgolas'
}
 
console.log(fruta) // Mango
console.log(verdura) // Tomate
console.log(hongos) // Champignon

// let verdura --> Error, no se puede declarar dos veces una variable con 'let' que tengan el mismo nombre.
// hongos = 'Portobello' --> Error, a una variable declarada previamente con 'const' no puedes reasignarle un nuevo valor.

const obj = {a:1}
obj.a = 2
console.log(obj) // {a:2}

//const obj = {a:1, b:2}
//console.log(obj) // Error! no puede haber dos variables con el mismo nombre declaradas con const

//obj = {a:1, b:2} // Error! no se puede reasignar n nuevo valor a una variable que ha sido declarada con 'const'

const arrayConst = [1, 2]
arrayConst.push(3) 
// arrayConst = [1, 2, 3]
//arrayConst = [1, 2, 3, 4] // Error!
//const arrayConst = [1, 2, 3, 4] // Error!

// Cada una tiene su propio scope y sus caracteristicas de declaracion.


//=============================================== ---- Arrow function ----- ===========================================                                  
//         let funcionFlecha = (parametro) => loQueHagaLaFuncion 

var impar = [1, 3, 5, 7]

//Funcion tradicional
var pares = impar.map(function(num) {
return num + 1
})

// Arrow Function
var pares = impar.map (num => {
return num + 1
})

//Arrow Function refactoring
var pares = impar.map(num => num + 1) //el return ya esat implicito si se escribe de esta forma


var objetos = [{nombre: "Enrique", friends:['Yio', 'Dany']}];
var nuevoObjt = objetos.map(obj => obj.friends.length)

// Atencion! Si es mas de un argumento lleva parentesis
// Atencion! Si es mas de una linea lleva llaves y return
var nums = [1,2,3,4,5,6,7,8,9];
var cincos =[];
nums.forEach(v => {
    if(v%5 === 0)
    cincos.push(v)
});
console.log(cincos)
