/* Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO. */

//criar prompt
let prompt = require('prompt-sync')();

let valor = parseInt(prompt("Digite o valor: "));

while( valor !== 0 ) {
  if (valor < 0 ) {
    break;
  } else if (valor % 2 === 0) {
    console.log(valor + " é PAR")
  } else {
    console.log(valor + " é ÍMPAR");
  }
  valor = parseInt(prompt("Digite o valor: "));
}


//Para rodar é necessário abrir o terminal e executar o comando:
//node atividade11.js