/* Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.
 */

//criar prompt
let prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Digite o 1º valor: "));
let num2 = parseInt(prompt("Digite o 2º valor: "));
let num3 = parseInt(prompt("Digite o 3º valor: "));
let num4 = parseInt(prompt("Digite o 4º valor: "));

let novoNum1 = num1 + 25;
let novoNum2 = num2 * 3;
let novoNum3 = num3 - ((num3/100) * 88);
let novoNum4 = num1 + num2 + num3;

console.log(`O novo valor do 1º é: ${novoNum1}`);
console.log(`O novo valor do 2º é: ${novoNum2}`);
console.log(`O novo valor do 3º é: ${novoNum3}`);
console.log(`O novo valor do 4º é: ${novoNum4}`);


//Para rodar é necessário abrir o terminal e executar o comando:
//node atividade03.js