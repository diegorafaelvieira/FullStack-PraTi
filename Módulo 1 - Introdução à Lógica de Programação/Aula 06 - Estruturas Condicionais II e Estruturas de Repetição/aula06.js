// Exercício 1: Par ou Ímpar
const prompt = require('prompt-sync')(); //necessário para rodar

let numero = parseInt(prompt("Digite um número: "));

if(numero % 2 === 0) {
  console.log("É par");
} else {
  console.log("É ímpar");
}

// Exercício 2: Maior de dois números
let numero1 = parseInt(prompt("Insira o primeiro número: "));
let numero2 = parseInt(prompt("Insira o segundo número: "));

if(numero1 > numero2) {
  console.log("O primeiro número é maior.");
} else if (numero1 < numero2) {
  console.log("O segundo número é maior.");
} else {
  console.log("Números iguais");
}

// Exercício 3: Triângulo
let lado1 = parseInt(prompt("Insira o comprimento do primeiro lado: "));
let lado2 = parseInt(prompt("Insira o comprimento do segundo lado: "));
let lado3 = parseInt(prompt("Insira o comprimento do terceiro lado: "));

if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado3 + lado2 >  lado1) {
  console.log("É possível formar um triângulo com essas medidas");
}  else {
  console.log("Não é possível formar um triângulo");
}

//Exercício 4: Calculadora Simples
let num1 = parseInt(prompt("Insira o primeiro valor: "));
let num2 = parseInt(prompt("Insira o segundo valor: "));
let operacao = prompt("insira a operação desejada (+, -, *, /): ");
let resultado;

if(operacao === '+') {
  resultado = num1 + num2;
} else if (operacao === '-') {
  resultado = num1 - num2;
} else if (operacao === '*') {
  resultado = num1 * num2;
} else if (operacao === '/') {
  if (num2 !== 0) {
    resultado = num1 / num2;
  } else {
    console.log("Erro: divisão por zero");
    resultado = undefined;
  }
} else {
  console.log("Operação inválida");
}

if(resultado !== undefined) {
  console.log("Resultado: ", resultado);
} 

// Switch Case
let dia = parseInt(prompt("Insira um número do dia da semana: "));

let nomeDia;

switch (dia) {
  case 1:
    nomeDia = "Domingo";
    break;
  case 2:
    nomeDia = "Segunda-feira"; 
    break;
  case 3:
    nomeDia = "Terça-feira";
    break;
  case 4:
    nomeDia = "Quarta-feira";
    break;
  case 5:
    nomeDia = "Quinta-feira";
    break;
  case 6:
    nomeDia = "Sexta-feira";
    break;
  case 7:
    nomeDia = "Sábado";
    break;  

  default:
    console.log("Digite um número de 1 a 7");
    break;
}
console.log("O dia é: ", nomeDia); 

let mes = parseInt(prompt("Insira o número do mês (1 a 12): "));
let diasNoMes;

switch(mes) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    diasNoMes = 31;
    break;
  case 4: case 6: case 9: case 11:
    diasNoMes = 30;
    break;
  case 2:
    diasNoMes = 28;
    break;
  default:
    diasNoMes = -1;
    break; 
}

if(diasNoMes !== -1) {
  console.log("O mês", mes, "tem", diasNoMes, "dias.")
} else {
  console.log("Mês inválido.");
} 

/* ESTRUTURA DE REPETIÇÃO */
let contador2 = 0;
let multiplicando = 5;

//   <variavel>;   <condicao>;     <incremento>
for (contador2 = 0; contador2 <= 10; contador2++) {
  console.log(`${multiplicando} * ${contador2} =`, multiplicando * contador2);
} 

// Valores Pares até 100
for( let i=0; i <= 100; i+=2 ) {
  console.log(i);
} 

// Soma de todos os números até 10
let soma2 = 0;
for( let i = 0; i <= 10; i++ ) {
  soma2 += i;
}
console.log(soma2); 

// Exibir 10 até 1
for(let i = 10; i >= 1; i--) {
  console.log(i);
} 

/* WHILE testa se a condição é verdadeira*/
let i = 10;
while(i >= 1) {
  console.log(i);
  i--;
} 

// imprimir os Múltiplos de 5 menores que 100
let i2 = 5;
while(i2 <= 100) {
  console.log(i2);
  i2 += 5;
} 

// calcular a soma dos números de 1 a 1000
let contador = 1;
let soma = 0;
while (contador <= 1000) {
  soma += contador;
  contador++;
}
console.log(soma); 

/* DO WHILE  executa antes e depois testa */
let senha;
do {
  senha = prompt("Digite a senha: ");
} while(senha !== "1234")

console.log("Senha correta!"); 

//Pedir ao usuário para advinhar um número de 1 a 10
const numeroCorreto = Math.floor((Math.random() * 10) + 1); //Gerar número inteiro aleatório
let tentativa;

do {
  tentativa = parseInt(prompt("Advinhe o número entre 1 e 10: "));
  if (tentativa < numeroCorreto) {
    console.log("Tenta um número maior");
  } else if (tentativa > numeroCorreto){
    console.log("Tente um número menor");
  } 
} while(tentativa !== numeroCorreto);

console.log("Parabéns você acertou!");