/* Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0 */

//criar prompt
let prompt = require('prompt-sync')();

let nota1 = Number(prompt("Informe a 1ª nota: "));
let nota2 = Number(prompt("Informe a 2ª nota: "));
let media = (nota1 + nota2) / 2;

console.log(`Média semestral: ${media}`);
if(media >= 6.0) {
  console.log("PARABÉNS! Você foi aprovado");
} else {
  console.log("Você foi REPROVADO! Estude mais");
}

//Para rodar é necessário abrir o terminal e executar o comando:
//node atividade05.js