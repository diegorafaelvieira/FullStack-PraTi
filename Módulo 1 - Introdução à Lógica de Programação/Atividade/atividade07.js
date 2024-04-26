/* As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

//criar prompt
let prompt = require('prompt-sync')();

let macas = parseInt(prompt("Quantidade de maças compradas: "));
let preco = 0;

if(macas >= 12) {
  preco = macas * 0.25;
} else {
  preco = macas * 0.30;
}
preco = preco.toFixed(2); //insere duas casas decimais após o ponto
console.log(`Foram compradas ${macas} e o valor da compra é de R$${preco}`);


//Para rodar é necessário abrir o terminal e executar o comando:
//node atividade07.js