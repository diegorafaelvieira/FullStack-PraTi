/* Utilizar somente while do exercício 14 ao 16
Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números */

//criar prompt
let prompt = require('prompt-sync')();

let valor = Number(prompt("Informe o valor: "));
let soma = valor;
let media = 0;
let contador = 1;

while(valor !== 0) {
  valor = Number(prompt("Informe o valor: "));
  soma += valor;
  media = soma / contador; 
  contador++;
}

console.log("A média dos valores é: " + media.toFixed(2));


//Para rodar é necessário abrir o terminal e executar o comando:
//node atividade14.js