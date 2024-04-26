/* Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação). */

//criar prompt
let prompt = require('prompt-sync')();

let nota1 = Number(prompt("Informe a 1ª nota: "));
let nota2 = Number(prompt("Informe a 2ª nota: "));
let media = (nota1 + nota2) / 2;

console.log(`Média semestral: ${media}`);
if(media >= 6.0) {
  console.log("PARABÉNS! Você foi aprovado");
}

//Para rodar é necessário abrir o terminal e executar o comando:
//node atividade04.js