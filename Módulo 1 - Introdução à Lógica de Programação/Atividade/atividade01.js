/* Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit. */

//instalar o pacote 
//npm install prompt-sync

//criar prompt
let prompt = require('prompt-sync')();

let tempCelsius = Number(prompt("Informe a temperatura em Celsius: "));
let tempFahrenheit = (1.8 * tempCelsius) + 32;
console.log(`A temperatura convertida é de ${tempFahrenheit}°F. `)

//Para rodar é necessário abrir o terminal e executar o comando:
//node atividade01.js