/* Utilizar somente while do exercício 14 ao 16
Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos */

//criar prompt
let prompt = require('prompt-sync')();

let num = parseFloat(prompt("Informe o valor: "));
let peso = parseInt(prompt("Informe o peso: "));
let mediaP;
let valor = num * peso; 
let totalPeso = peso;

while(num !== 0) {
  num = parseFloat(prompt("Informe o valor: "));
  if(num !== 0) {
    peso = parseInt(prompt("Informe o peso: "));
    valor += num * peso;
    totalPeso += peso;
    mediaP = valor / totalPeso;
  }
}
console.log("Média Ponderada: " + mediaP.toFixed(2));

//Para rodar é necessário abrir o terminal e executar o comando:
//node atividade15.js