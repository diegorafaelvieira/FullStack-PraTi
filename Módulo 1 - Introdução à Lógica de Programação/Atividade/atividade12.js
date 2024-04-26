/* Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5. */

//criar prompt
let prompt = require('prompt-sync')();

let cont = 1000;

while (cont <= 1999) {
  if(cont % 11 === 5) {
    console.log(cont);
  }
  cont++;
}


//Para rodar é necessário abrir o terminal e executar o comando:
//node atividade12.js