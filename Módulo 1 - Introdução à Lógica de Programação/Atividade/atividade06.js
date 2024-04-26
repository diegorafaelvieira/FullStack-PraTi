/*Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

//criar prompt
let prompt = require('prompt-sync')();

let a = Number(prompt("Digite o valor do A: "));
let b = Number(prompt("Digite o valor do B: "));
let c = Number(prompt("Digite o valor do C: "));

//Verifica se é triângulo
if(a < b + c && b < a + c && c < a + b) {
  if(a !== b && a !== c && b !== c ) {
    console.log("Triângulo escaleno");
  } else if ( a === b && a === c && b === c) {
    console.log("Triângulo equilátero");
  } else {
    console.log("Triângulo isósceles");
  }
} else {
  console.log("Não forma um triângulo")
}


//Para rodar é necessário abrir o terminal e executar o comando:
//node atividade06.js