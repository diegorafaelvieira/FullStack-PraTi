//o método 'log' do objeto 'console, utilizado para imprimir informações no console do navegador

/*
teste
teste
teste
*/
console.log("Hello World");
console.log('Hello World');
console.log(`Hello World`);

console.log(10);
console.log(7.5);

console.log(1000, 1520.10, "Jaques");

//Apresente no console a seguinte mensagem: Meu nome é (x) e estou na aula 4 do professor Jaques
let nome = "Diego";
console.log(`Meu nome é ${nome} e estou na aula `+ 4 +` do professor Jaques`);

nome = "Jaques"; //não recomendado
let nome2 = "Jaques"; //declaração padrão
var name = "Jaques"; //antiga e inadequada
const NAME = "Jaques";

let teste;
console.log(teste); //undefined


/* let meuNull - null;
console.log(meuNull); */

let meuNumber = 10.1;
console.log(typeof(meuNumber)); //verifica o tipo da variável

let meuBoolean = true;
console.log(meuBoolean);


let n1 = 10;
let n2 = 5;
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 ** n2);

let numTeste = "5";
console.log(numTeste + n1);
let numTeste2 = parseInt(numTeste); //Number
console.log(numTeste2 + n1);


let contador = 1;
console.log(contador);
contador = contador + 1;
console.log(contador);
contador++;
console.log(contador);
--contador;
console.log(contador);


const passo = 5;
let contador2 = 0;
contador2 =+ passo;
console.log(contador2);

/* Ordem e lê da esquerda para a direita
()
**
* / %
+- */

/*Operadores Ralacionais*/
console.log(10 < 5);
console.log(10 <= 5);
console.log(10 <= 5);
console.log(10 >= 5);
console.log(10 == 5);
console.log(10 == "10"); //valor 
console.log(10 === "10"); //valor e tipo
console.log(10 != "10"); //valor
console.log(10 !== "10"); //valor e tipo

/*Operadores Lógicos*/
console.log((10 > 5) && (10 >2 ));
console.log((10 > 5) || (10 >2 ));
console.log((10 > 5) && !(10 >2 ));

const usuario = "Jaques";
const senha = "123";
const autentificacao = usuario === "Jaques" && senha === "123";
console.log(autentificacao);

//Estruturas Condicionais
const nota = 60;
if(nota >= 60) {
  console.log("Aprovado");
} else if (nota >= 40 && nota <= 59) {
  console.log("Está de recuperação");
} {
  console.log("Reprovado");
}

//Operador Ternário
// <condicao> ? <verdadeiro> : <falso>;
let resultadoTernario = (10 < 100) ? true : false;
console.log(resultadoTernario);


const prompt = require('prompt-sync')();

let teste2 = prompt("Digite o seu nome: "); 
