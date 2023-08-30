// forEach: Executa passo a passo cada elemento do array

let cor = ['vermelho', 'verde', 'azul'];
// Usando forEach para percorrer o array 'cor'
cor.forEach(function(cor) {
console.log(cor);
});


console.log(" "); // linha "pulada" |----------------------------|


// map: Cria um novo array aplicando uma função a cada elemento do array original.

let numeros = [1, 2, 3];
let dobro = numeros.map(function(number) {
return number * 2;
});
console.log(dobro); // O resultado dobro será exibido no console


console.log(" "); // linha "pulada" |----------------------------|


// filter: Cria um novo array com elementos que passam por um teste definido pela função.

let idade = [18, 25, 12, 35, 40];
let adulto = idade.filter(function(age) {
return age >= 18;
});
console.log(adulto); // O resultado adulto será exibido no console


console.log(" "); // linha "pulada" |----------------------------|


// reduce: Executa uma função em cada elemento do array para reduzi-los a um único valor

let numeros1 = [1, 2, 3, 4, 5];
let soma = numeros1.reduce(function(total, somanumeros) {
return total + somanumeros;
}, 0);
console.log(soma);
// soma é 15






