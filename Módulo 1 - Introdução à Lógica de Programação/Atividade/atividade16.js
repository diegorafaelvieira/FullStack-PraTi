/* Utilizar somente while do exercício 14 ao 16
Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo. */

let num = 100;
let contador = 0;
let primo;

while(contador <= 50) {
  let divisores = 0;
  let contDivisores = 1;
  while (contDivisores <= num ) {   
    if(num % contDivisores === 0) { 
      divisores++;
    }
    contDivisores++;
  }
  if(divisores === 2) {
    console.log(num);
    contador++;
  }
  num++; 
}



//Para rodar é necessário abrir o terminal e executar o comando:
//node atividade16.js