//Esta funcion hace un breadth o un depth-first search del DOM tree y crea un arreglo de
//elementos para la cual matchFunction devuelve true (significando que esos elementos matchean el selector del user).

var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl)
  
  for(let i=0; i<startEl.children.length; i++){
    let child = startEl.children[i];
    let arrayResult = traverseDomAndCollectElements(matchFunc, child);
    resultSet =[...resultSet, ...arrayResult]
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {      //el parametro selector será un string
  // tu código aquí
  if(selector[0] === '#') return "id" 
  else if(selector[0] === '.') return "class"
  else if(selector.split('').includes('.')) return  "tag.class"
  //if(selector('.').length === 2) return 'tag.class
  else return "tag"
};


// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

                                  //(#idName)
var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector); //id
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = (el) =>{ //el ---> es el elemento html, osea la tag <div></div>
      return `#${el.id}` === selector;
      //<div id='idName'/>
    }
  } else if (selectorType === "class") {
    matchFunction = (el) =>{
     var clases = el.classList; //classList nos devuelve un array con todas las clases que tiene el elemento
     for(let i=0;i<clases.length; i++){
      if(`.${clases[i]}` === selector)
      return true
     }
     return false
    }
  } else if (selectorType === "tag.class") {
    matchFunction = (el) =>{
      let [etiqueta, clase] = selector.split('.');

      //--clousure---
      //var functionTag = matchFunctionMaker(etiqueta)
      //functionTag(element)
      return matchFunctionMaker(etiqueta)(el) && matchFunctionMaker(`.${clase}`)(el)
    }
    
  } else if (selectorType === "tag") {
    matchFunction = (el) =>{
      //return el.localName === selector;
      return el.tagName && (el.tagName.toLowerCase() === selector.toLowerCase());
    }
  }
  return matchFunction;
};
              //('#idName')
var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
