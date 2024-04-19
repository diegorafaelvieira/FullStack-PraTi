//Array ou Vetor
/* let lista_compras = Array()
lista_compras[0] = "Shampoo";
lista_compras[1] = "Condicionador";
lista_compras['x'] = 100;
console.log(lista_compras);

let listaFrutas = ['Banana', 'Morango'];
console.log(listaFrutas);

let lista_viagem = Array('Passagens', 'Malas');
console.log(lista_viagem); */

// Arrays multidimensionais ou Matriz
/* let listas_coisas = Array();
listas_coisas['Frutas'] = Array();
listas_coisas['Frutas'][0] = "Morango";
listas_coisas['Frutas'][1] = "Uva";
listas_coisas['Frutas'][2] = "Laranja";
listas_coisas['Frutas'][3] = "Bergamota";

listas_coisas['Viagem'] = Array();
listas_coisas['Viagem'][0] = "Passagens";
listas_coisas['Viagem'][1] = "Malas";

console.log(listas_coisas);

//Inserção de elementos no final do Array
listas_coisas['Frutas'].push('Banana');
console.log(listas_coisas);

//Inserção de elementos no começo do Array
listas_coisas['Frutas'].unshift('Limão');
console.log(listas_coisas);

//Exclusão de elementos no final do Array
listas_coisas['Frutas'].pop();
console.log(listas_coisas);

//Exclusão de elementos no começo do Array
listas_coisas['Frutas'].shift();
console.log(listas_coisas); */

//Pesquisar no Array
/* let listaProdutos = Array('Computador', 'Caneta', 'Chuteira');
let aux = listaProdutos.indexOf('Computador');

if(aux === -1) {
  console.log('Elemento não existe no Array');
} else {
  console.log('Elemento existe e está na posição ' + aux);
} */

//Ordenar Array
/* let listaProdutos = Array('Lousa', 'Caneta', 'Chuteira', 'Garrafa de água');
let listaProdutos2 = Array(1, 3, 2, 4);
console.log(listaProdutos.sort());
console.log(listaProdutos2.sort()); */

//Função
/* function calcularAreaTerreno(largura, comprimento) {
  let area = largura * comprimento; //escopo de função
  return area
}

//area não é acessível aqui

let prompt = require('prompt-sync')();

let lg = prompt("Digite a largura do terreno em metros: ");
let cp = prompt("Digite o comprimento do terreno em metros: ");

//Chamada da função e passagem de parâmetros
let resultado = calcularAreaTerreno(lg, cp);

console.log('O terreno possui ' + resultado + ' metros quadrados'); 


 */

//Função Anônima
/* let exibirFuncao = function() {
  console.log("Olá");
}

exibirFuncao(); */

//Função Callback
/* function exibirArtigo(callbackSucesso, callbackErro) {
  if(true) {
    callbackSucesso('Funções de callback em caso de sucesso');
  } else {
    callbackErro('Função de callback em caso de erro');
  }
}

let callbackSucesso = function (titulo, descricao) {
  console.log(titulo);
  console.log(descricao);
}

let callbackErro = function (erro) {
  console.log(erro);
}

exibirArtigo(callbackSucesso, callbackErro); */


let soma = function soma(num1, num2) {
  return num1 + num2;
}

let subtracao = function subtracao(num1 ,num2) {
  return num1 - num2;
}

let multiplicao = function multiplicacao(num1 ,num2) {
  return num1 * num2;
}

let divisao = function divisao(num1 ,num2) {
  return num1 / num2;
}

function calculadora(operacao, num1, num2, soma, subtracao, multiplicacao, divisao) {
  switch (operacao) {
    case "soma":
      let resultado = soma(num1, num2);
      return resultado;
      break;

  }
}

console.log(calculadora("soma", 10, 10, soma));