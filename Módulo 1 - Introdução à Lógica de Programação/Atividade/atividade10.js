/* Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. */

//criar prompt
let prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite o número: "));
let contador = 1;
while(contador <= 10) {
  console.log(numero);
  contador++;
}


//Para rodar é necessário abrir o terminal e executar o comando:
//node atividade10.js