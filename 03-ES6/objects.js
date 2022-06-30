/* --------------------------BIND----------------------
Bindean el valor del this al lugar de la declaracion y no de la ejecucion
*/

//Funcion tradicional

var bob = {
  name: "Bob",
  friends: ["Patricio", "Calamardo"],
  printFriends() {
    this.friends.forEach(function (el) {
      console.log(this.name + " es amigo de " + el);
    });
  },
};

bob.printFriends(); // undef es amigo de Patricio
// undef es amigo de Calamargo

//Con ARROW Function ---> automaticamente se bindea el this en el contexto donse se creo

var bobbie = {
  name: "Bob",
  friends: ["Patricio", "Calamardo"],
  printFriends() {
    this.friends.forEach((amigo) => console.log(this.name + " es amigo de " + amigo));
  },
};

bobbie.printFriends(); // Bob es amigo de Patricio
// Bob es amigo de Calamargo

//  -----------------------------OTRO EJEMPLO DE BIND ---------------------------

//Funcion tradicional

function Persona(nombre, edad) {
  this.nombre = nombre;
}

Persona.prototype.getNombre = function () {
  return this.nombre;
};

let esponja = new Persona("Bob Esponja");
console.log(esponja.getNombre()); // Pepa

// ARROW---------------

Persona.prototype.getNombre = () => this.nombre;

let pat = new Persona("Patricio");
console.log(pat.getNombre()); //undefined

/*
    ATENCION
    La ventaja y la desventaja con las arrow function es que justamente el this queda bindeado al contexto donde se declara.
    Si la defino al contexto global apunta al contexto global y no se rebindea.
    Moraleja: Dentro de los metodos de clase, no funcionan porque al this lo tenemos que bindear a diferentes instancias
*/
    
    
 //================================================ Object Literal ===================================================
    // Antes no podiamos definir objeto directo con llaves
    // Ahora lo puedo definir y brindales propiedades dinamicas
    

function persona1(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
  };
}

persona1("Pepa", 25); // Pepa, 25

/* 
    ... Nada nuevo para ustedes, preguntenle a lxs programadorxs de 2014!
    - Puedo simplificar cuando el nombre del parametro es igual al nombre de la propiedad
    - Puedo recibir un parametro y usarlo como propiedad, no solo como un valor
    */
function persona2(nombre, edad, prop, value) {
  return {
    nombre,
    edad,
    [prop]: value,
  };
}
persona2("Pepa", 25, "altura", 160);


//------- Computed (dynamic) property names

var higth = 'altura';

var object = {
    a:1,
    b:2,
    [higth]: '1.78'
}
console.log(object);

//Tambien podemos aplicarlo a una funcion constructora
function People(nombre, apellido, prop, value){
    this.nombre = nombre || 'Enrique';
    this.apellido = apellido || 'Sixto';
    this[prop] = value;
}

let newPeople = new People('Enrique', 'Sixto','edad',26);
console.log(newPeople)