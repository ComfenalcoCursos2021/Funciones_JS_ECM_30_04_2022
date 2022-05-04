
let fnA = function(){
    return `Hola soy la funcion A`;
}
let fnB = function(callback){
    console.log(callback());
    return `Hola soy la funcion B srgseg`;
}


console.log(fnB(fnA));
