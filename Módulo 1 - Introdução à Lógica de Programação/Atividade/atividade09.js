/* Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo: 
1 - Sul
2 - Norte
3 - Leste
4 - Oeste
5,6 - Nordeste
7,8,9 - Sudeste
10 até 20 - Centro-Oeste
25 até 50 - Nordeste
Fora dos Intervalos - Produto Importado
*/

//criar prompt
let prompt = require('prompt-sync')();

let regiao =  parseInt(prompt("Informe o código da região: "));
if(regiao === 1) {
  console.log("Região Sul");
} else if (regiao === 2) {
  console.log("Região Norte");
} else if (regiao === 3) {
  console.log("Região Leste");
} else if (regiao === 4) {
  console.log("Região Oeste");
} else if ( regiao === 5 || regiao === 6) {
  console.log("Região Nordeste");
} else if (regiao >= 7 && regiao <= 9) {
  console.log("Região Sudeste");
} else if (regiao >= 10 && regiao <= 20) {
  console.log("Região Centro-Oeste");
} else if (regiao >= 25 && regiao <= 50) {
  console.log("Região Nordeste");
} else {
  console.log("Fora dos Intervalos - Produto Importado");
}


//Para rodar é necessário abrir o terminal e executar o comando:
//node atividade09.js