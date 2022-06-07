let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function elementoWho(who) {
    let indiceAleatorioWho = Math.floor(Math.random()* who.length);
    return who[indiceAleatorioWho];
} 

let nuevoWho = elementoWho(who);

function elementoAction(action) {
    let indiceAleatorioAction = Math.floor(Math.random()* action.length);
    return action[indiceAleatorioAction];
} 

let nuevoAction = elementoWho(action);

function elementoWho(what) {
    let indiceAleatorioWhat = Math.floor(Math.random()* what.length);
    return what[indiceAleatorioWhat];
} 

let nuevoWhat = elementoWho(what);

function elementoWho(when) {
    let indiceAleatorioWhen = Math.floor(Math.random()* when.length);
    return when[indiceAleatorioWhen];
} 

let nuevoWhen = elementoWho(when);

console.log(nuevoWho+''+nuevoAction+''+nuevoWhat+''+nuevoWhen);

