/* Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores. */

//criar prompt
let prompt = require('prompt-sync')();

let eleitores = parseInt(prompt("Informe o número de eleitores: "));
let votosBrancos = parseInt(prompt("Informe o número de votos em brancos: "));
let votosNulos = parseInt(prompt("Informe o número de votos nulos: "));
let votosValidos = parseInt(prompt("Informe o número de votos válidos: "));

let percBrancos = (votosBrancos/eleitores) * 100;
let percNulos = (votosNulos/eleitores) * 100;
let percValidos = (votosValidos/eleitores) * 100;

console.log(`Percentual de votos brancos: ${percBrancos}%`);
console.log(`Percentual de votos nulos: ${percNulos}%`);
console.log(`Percentual de votos válidos: ${percValidos}%`);

//Para rodar é necessário abrir o terminal e executar o comando:
//node atividade02.js