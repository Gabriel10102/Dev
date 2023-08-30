let texto = 'Olá, mundo!';

// Tamanho da string
let tamanho = texto.length;
console.log(tamanho); // Retorna 11

// Acessando um caractere específico
let primeiroCaractere = texto[0];
console.log(primeiroCaractere); // Retorna 'O'

// Encontrando a posição de um caractere
let texto1 = 'Olá, mundo!';

// Encontrando a posição de um caractere
let posicao = texto1.indexOf('mundo');
console.log(posicao); // Retorna 5

// |--------------------------------------------------------|

console.log(" "); // linha "pulada" 

// |--------------------------------------------------------|

let frase = ' Espaços em branco ';

// Removendo espaços em branco no início e no final
let textoLimpo = frase.trim(); 
console.log(textoLimpo); // Retorna 'Espaços em branco'

// Verificando se uma string começa com determinado texto
let comecaCom = frase.startsWith(' Espaços');
console.log(comecaCom); // Retorna true

// Verificando se uma string termina com determinado texto
let terminaCom = frase.endsWith('branco');
console.log(terminaCom); // Retorna false


// |--------------------------------------------------------|

console.log(" "); // linha "pulada" 

// |--------------------------------------------------------|

let nome = 'João';
let sobrenome = 'Silva';

// Concatenando strings
let nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto); // Retorna 'João Silva'

// Usando template strings (interpolação)
let mensagem = `Olá, ${nome} ${sobrenome}!`;
console.log(mensagem); // Retorna 'Olá, João Silva!'

// |--------------------------------------------------------|

console.log(" "); // linha "pulada"

// |--------------------------------------------------------|

let texto2 = 'Texto para conversão';

// Convertendo para maiúsculas
let maiusculas = texto2.toUpperCase();
console.log(maiusculas); // Retorna 'TEXTO PARA CONVERSÃO'

// Convertendo para minúsculas
let minusculas = texto2.toLowerCase();
console.log(minusculas); // Retorna 'texto para conversão'

// |--------------------------------------------------------|

console.log(" "); // linha "pulada" 

// |--------------------------------------------------------|

let texto3 = 'Aprenda JavaScript, aprenda Python';

// Substituindo 'aprenda' por 'estude'
let novoTexto = texto3.replace(/aprenda/g, 'estude');
console.log(novoTexto); // Retorna 'Estude JavaScript, estude Python'

// |--------------------------------------------------------|

console.log(" "); // linha "pulada" 

// |--------------------------------------------------------|

let texto4 = 'aprenda JavaScript, aprenda Python, aprenda JS';

// Substituindo 'aprenda' por 'estude'
let novoTexto1 = texto4.replace(/aprenda/g, 'Estude');
console.log(novoTexto1); // Retorna 'Estude JavaScript, estude Python






