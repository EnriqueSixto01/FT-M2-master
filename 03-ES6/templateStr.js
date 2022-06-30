//------------------- Template String ----------------

let nombre = "Pepa";
let apellido = "Martinez";
let edad = 25;
var altura = 1.6;
// Si quiero obtener: "Ella es Pepa Martinez, tiene 15 anos y mide 1.60 mts."
var str ="Ella es " + nombre + " " + apellido + ", tiene " + edad + " años y mide " + altura + "mts.";
//con templates ${} hacemos interseccion de codigo js
var tStr = `Ella es ${nombre} ${apellido}, tiene ${edad} años y mide ${altura} mts`;
//Puedo tambien poner logica JS en el codigo:
var tStr2 = `Ella es ${nombre} ${apellido}, tiene ${edad + 10} años y mide ${altura} mts`;
// Dicho sea de paso... Ternarios!!
//cualquier cosa que pongamos dentro de ${} sera lo que se quiere ejecutar, ej. un statement, una funcion
var tStrTernario = `${nombre === "pepa" ? "soy pepa" : "no se quien soy"}`;
//statement if comun
if (nombre === "Pepa") {
  console.log("soy pepa");
} else {
  console.log("no se quien soy");
}

console.log(str)
console.log(tStr)
console.log(tStr2)
console.log(tStrTernario)

