//Objetos
const pessoa = {
  nome: "Lucas",
  idade: 18,
  email: "lucas@teste.com",
  profissao: "Músico",
  empregada: true
} 

console.log(pessoa);
console.log(pessoa.nome);
pessoa.nome = "Jurema"
console.log(pessoa['nome']);

delete pessoa.empregada; //remove atributo
console.log(pessoa);

pessoa.falar = function () {

  return `Meu nome é ${this.nome}, tenho ${this.idade} e sou ${this.profissao}`;
}

console.log(pessoa.falar()); 

//Criar objeto
const guitarra = {
  marca: "Memphis",
  cor: "Azul",
  afinar: true
}

guitarra.tocar = function () {
  return `A guitarra é da marca ${this.marca}, sua cor é ${this.cor} e o estado da afinação é ${this.afinar}`; 
}
console.log(guitarra.tocar()); 

/*
FOR IN - chave retorna o indice de um array ou o atributo de um objeto
FOR OF - chave retorna os atributos de um objetos ou os valores de um array
*/

/* For in  funciona melhor com Objetos*/
for(let chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
} 

let numeros2 = [10,20,100];

/* For of    funciona melhor com Arrays*/
for (let numero of numeros2) {
  console.log(numero);
} 

/**
 * você tem uma lista de objetos que representam tipos de veículos e suas características. Seu objetivo é primeiro usar o FOR IN para listar todas as propriedades e valores de cada veículo. Depois utilizar o FOR OF para lista apenas os modelos dos veículos.
 */

const carro = [
  {
      modelo: 'Gol',
      cor: 'vermelho',
      ano: 2020
  },
  {
      modelo: 'Palio',
      cor: 'branco',
      ano: 2022
  },
  {
      modelo: 'Fiat',
      cor: 'azul',
      ano: 2021
  }
];

for (const chave in carro) {
  console.log(carro[chave]);
}

for (const chave of carro) {
  //console.log(chave['modelo']); 
  console.log(chave.modelo);
}


// FOR EACH método específico de arrays
let cores = ['Vermelho', 'Branco'];
cores.forEach((cor, indice) => {
  console.log(indice + ": " + cor);
}) 

/*
Construa um array de números e calcule a soma total dos números e também imprima cada número multiplicado por dois.
 */
let numeros = [1, 2, 3, 4, 5];
soma = 0;
numeros.forEach((numero) => {
  console.log("Multiplicando por 2 = " + numero * 2);
  soma += numero;
  console.log(`Somas dos valores:  ${soma} `);
}) 

let nome = 'Jaques'
let idade = 24
let sexo = 'Masculino'

let objeto = {
  nome,
  idade,
  sexo
}

console.log(objeto); 

// Padrão Factory
let BicicletaFactory = function (cor, tipo, marca) {
  return {
    cor,
    tipo,
    marca
  }
}
/* let cor = prompt("Escreva a cor"); */
let bicicleta1 = BicicletaFactory('Azul', 'Speed', 'Caloi');
let bicicleta2 = BicicletaFactory('Preta', 'Mountain', 'BMX');
console.log(bicicleta1);
console.log(bicicleta2);