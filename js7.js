//SutEtituição de texto em uma string:
let texto = "Olá, mundo!";
let novoTexto = texto.replace("mundo", "JavaScript");
console.log(novoTexto); // Resultado: "Olá, JavaScript!"".

//Verificação de existência de uma substring em uma string:
let texto1 = "Olá, mundo!";
console.log(texto1.includes("mundo")); // Resultado: true
console.log(texto1.includes("JavaScript")); // Resultado: false

//Divisão de uma string em um array com base em um delimitador:
let texto2 = "JavaScript é uma linguagem poderosa";
let palavras = texto2.split(" ");
console.log(palavras); // Resultado: ["JavaScript", "é", "uma", "linguagem", "poderosa"]

// Remoção de espaços em branco no início e no final de uma string:
let texto3 = " Olá, mundo! ";
let novoTexto1
console.log(novoTexto1); // Resultado: "Olá, mundo!"

//Verificação do início ou fim de uma string:
let texto4 = "Olá, mundo!";
console.log(texto.startsWith("Olá")); // Resultado: true
console.log(texto.endsWith("mundo!")); // Resultado: true
