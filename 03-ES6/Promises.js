//==================================================== PROMISES ==================================================
//Una promesa es simplemente una función que devuelve un Object mensaje al que puede adjuntar devoluciones de llamada.
//Las devoluciones de llamada adjuntas a un objeto de promesa solo se llamarán cuando se complete la operación.
// Las devoluciones de llamada tendrán que esperar hasta que la operación se cumpla o se rechace :
//Por lo general, utiliza una promesa para gestionar situaciones en las que debe esperar el resultado de una operación.
//Por ejemplo, cargar archivos al servidor y esperar la respuesta de una llamada API, o simplemente pedirle al usuario 
//que elija un archivo de su computadora.

//Antes de que una promesa finalmente se establezca (la promesa se cumple o se rechaza) tiene que pasar por 
//diferentes estados:


// Se crea con un new Promise y o se resuelve o se rechaza
// En el codigo tengo que preveer ambos caminos
// Si se resuelve, hace tal cosa  --> .then
// Si se rechaza, hace tal otra --> .catch

function comparNotebook (duration = 0) {
    return new Promise ((resolve, reject) => {
    setTimeout (resolve, duration);
    })
    }

    var promise = comparNotebook() 
                 .then(() => console.log('Se resolvio')) //configuramos que se imprrime cuando se cumple la promise
             .catch(err => console.log('Se rechazo'))