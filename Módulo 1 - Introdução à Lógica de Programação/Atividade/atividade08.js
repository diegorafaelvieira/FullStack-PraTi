/* Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

//criar prompt
let prompt = require('prompt-sync')();

let val1 = Number(prompt("Digite o 1º valor: "));
let val2 = Number(prompt("Digite o 2º valor: "));

if(val1 !== val2) {
  if(val1 > val2) {
    console.log(val2, ",", val1);
  } else {
    console.log(val1, ",", val2);
  }
}

//Para rodar é necessário abrir o terminal e executar o comando:
//node atividade08.js