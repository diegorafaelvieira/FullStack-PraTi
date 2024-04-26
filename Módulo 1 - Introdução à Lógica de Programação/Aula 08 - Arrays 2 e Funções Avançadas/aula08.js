//Exercitando Arrays e funções
//Exercício 1: Somar todos os elementos de um array

/* let elementos = [1, 2, 3, 4];

function somaElementos(vetor) {
  let soma = 0;
  for(i = 0; i < vetor.length; i++) {
    soma += vetor[i]
  }
  return soma;
} 

console.log("A soma dos elementos é: ", somaElementos(elementos)); */

//Exercício 2: Encontrar o maior número em um Array
/* let elementos2 = [1, 2, 3, 5, 4];

function maiorElemento(vetor) {
  let maior = 0;
  for(i = 0; i < vetor.length; i++) {
    if (maior < vetor[i]) {
      maior = vetor[i];
    }
  }
  return maior;
}
console.log("O maior valor do array é: ", maiorElemento(elementos2)); */

//Exercício 3:  Reverter um array
/* let elementos3 = [1, 2, 3, 4];

function reverterArray(vetor) {
  let vetorResultado = []
  for (let i = vetor.length - 1; i >= 0; i--) {
    vetorResultado.push(vetor[i]);
  }
  return vetorResultado;
}
console.log("O vetor invertido é: ", reverterArray(elementos3)); */

//Exercício 4: Somar todos os elementos de uma matriz
/* elementos4 = [[1,2], [3,4]];
function somaMatriz(matriz) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) { //linhas
    for (let j = 0; j < matriz[i].length; j++) { //colunas
      soma += matriz[i][j];
    }
  }
  return soma;
}
//console.log("A soma dos elementos da matriz é: ", somaMatriz([[1,2],[3,4]]));
console.log("A soma dos elementos da matriz é: ", somaMatriz(elementos4)); */

//Exercício 5: Encontrar o maior número em uma matriz
/* elementos5 = [[1,2,5], [3,4]];
function maiorMatriz(matriz) {
  let maior = matriz[0][0];
  for(let i = 0; i <matriz.length; i++) { // percorre a linha
    for(let j = 0; j < matriz[i].length; j++) { // percorre a coluna
      if( maior < matriz[i][j]) {
        maior = matriz[i][j];
      }
    }
  }
  return maior;
}
console.log("O maior elemento da matriz é: ", maiorMatriz(elementos5)); */


//Funções avançadas: String
/* String é considerada um valor primitivo, porém, ao ser interpretado o JS os converte em objetos,
possuindo propriedades e métodos */
let nome = "Diego";
console.log(nome.indexOf('o')); //retorna a posição da letra 

let nome2 = "Dick Vigarista";
console.log(nome2);
console.log(nome2.replace('Dick Vigarista', 'Pica Pau')); //muda o valor

let nome3 = "Dick Vigarista";
console.log(nome3.substring('7', '5')); //exibe da posição 5 até a 7

let nome4 = "Dick Vigarista";
console.log(nome4.toLocaleUpperCase());  //maiusculo
console.log(nome4.toLocaleLowerCase());  //minusculo

let nome5 = ' BATMAN ';
console.log('-' + nome5.trim() + '-'); //remove os espaços em branco em insere o -


//Funções avançadas: Matemática
let x = Math.ceil(10.100) //aredonda pra cima
console.log(x);
let x1 = Math.floor(10.100) //aredonda pra baixo
console.log(x1);
let x2 = Math.round(10.100) //aredonda 5 pra cima 
console.log(x2);
let x3 = Math.random(); //gera número aleatório
console.log(x3);



//Funções avançadas: Datas
let data = new Date()
console.log(data.getDate());
console.log(data.getMonth() + 1);
console.log(data.getFullYear());
console.log((data.getDate()) + "/" + (data.getMonth()+1) + "/"+ (data.getFullYear()));
console.log(data.toString()); //retorna data com hora
data.setDate(data.getDate() + 720); //data atual mais 720 dias
data.setFullYear(data.getFullYear() + 5); //data atual mais 5 anos
console.log(data.toDateString());
console.log(data.getTime()); //exibe a quantidade de milisegundos desde 1970
console.log(data.toLocaleDateString('pt-BR'));


/* let data1 = new Date() + 5;
let milisegundosEntreDatas = Math.abs(data.getTime() - data1.getTime());
console.log(milisegundosEntreDatas); */

let date = new Date();
console.log(date.toLocaleDateString()); //exibe o formato local da data

//Encontrar a quantidade de milisegundos entre duas datas
let data1 = new Date(2023, 4, 20);
let data2 = new Date(2023, 3, 20);

let milesegundosEntreDatas = Math.abs(data1.getTime() - data2.getTime());
console.log(`${milesegundosEntreDatas}`);