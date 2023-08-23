//Comparação de igualdade com let usando ===:
let g = 10;
let h = "10";
console.log(g === h); // Resultado: false

//Atribuição de valor usando var e modificação posterior:
var x = 5;
x = 10;
console.log(x); // Resultado: 10

// Atribuição de valor usando let e modificação posterior:
let y =5;
y = 10;
console.log(y); // Resultado: 10

//Declaração de variável usando var e let no mesmo escopo:
var a = 5;
let b = 10;
console.log(a + b); // Resultado: 15

//Uso de variável não declarada com var e let:
console.log(c); // Erro: ReferenceError: c is not defined
console.log(d); // Erro: ReferenceError: d is not defined