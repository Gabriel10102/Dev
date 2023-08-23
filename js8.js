//Diferença entre =,== e === .Atribuição de valor usando var:
var x = 5;
console.log(x); // Resultado: 5

//Atribuição de valor usando let:
let y = 10;
console.log(y); // Resultado: 10

//Comparação de igualdade com var usando ==:
var a = 5;
var b = "5";
console.log(a == b); // Resultado: true

//Comparação de igualdade com let usando ==:
let c = 10;
let d = "10";
console.log(c == d); // Resultado: true
// Note que esta comparação tem como retorno true pois ele identificou que os caracteres 10 são iguais não importante se foram definidos como string ou número.

//Comparação de igualdade com var usando ===:
var e = 5;
var f = "5";
console.log(e === f); // Resultado: false
// A comparação com === só será verdadeiro se ambos forem números ou strings.