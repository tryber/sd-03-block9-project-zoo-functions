/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/
const data = require('./data');

/*----------------------------------------------------------------------------------------------------------------------------*/

// 1. Implemente a função animalsByIds:
// 1.1. Caso receba nenhum parâmetro, necessário retornar um array vazio
// 1.2. Ao receber como parâmetro um único id, retorna os animais com este id
// 1.3. Ao receber mais de um id, retorna os animais que têm um desses ids

// const { id, name, popularity, location, residents: { name, sex, age } } = data.animals;

// const animalsByIds = (...ids) => {
//   if (typeof ids === 'undefined') {
//     return [];
//   }
//   return data.animals.filter(({ id }) => ids.includes(id));
// };
// console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

/*----------------------------------------------------------------------------------------------------------------------------*/

// 2. Implemente a função animalsOlderThan:
// 2.1. Ao passar o nome de uma espécie e uma idade, testa se todos os
// animais desta espécie possuem a idade mínima especificada

const animalsOlderThan = (...param) => {
  const verifica = param.filter(({ name, animal, age }) =>
}

/*----------------------------------------------------------------------------------------------------------------------------*/

// 3. Implemente a função employeeByName:
// 3.1 Sem parâmetros, retorna um objeto vazio
// 3.2 Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// 3.3 Quando provido o último nome do funcionário, retorna o objeto do funcionário

// function employeeByName(employeeName) {
//   // seu código aqui
// }

/*----------------------------------------------------------------------------------------------------------------------------*/

// 4. Implemente a função createEmployee:
// 4.1 Cria um novo colaborador a partir de objetos contendo informações pessoais, gerentes e animais gerenciados

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

/*----------------------------------------------------------------------------------------------------------------------------*/

// 5. Implemente a função isManager:
// 5.1 Testa se o id passado é de um gerente

// function isManager(id) {
//   // seu código aqui
// }

/*----------------------------------------------------------------------------------------------------------------------------*/

// 6. Implemente a função addEmployee:
// 6.1 Adiciona um funcionário no fim da lista

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

/*----------------------------------------------------------------------------------------------------------------------------*/

// 7. Implemente a função animalCount:
// 7.1 Sem parâmetros, returna animais e suas quantidades
// 7.2 Com o nome de uma espécie de animal, retorna somente a quantidade

// function animalCount(species) {
//   // seu código aqui
// }

/*----------------------------------------------------------------------------------------------------------------------------*/

// 8. Implemente a função entryCalculator:
// 8.1 Returna 0 se nenhum argumento for passado
// 8.2 Retorna 0 se um objeto vazio for passado
// 8.3 Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos

// function entryCalculator(entrants) {
//   // seu código aqui
// }

/*----------------------------------------------------------------------------------------------------------------------------*/

// 9. Implemente a função animalMap:
// 9.1 Sem parâmetros, retorna animais categorizados por localização
// 9.2 Com opções especificadas, retorna nomes de animais
// 9.3 Com opções especificadas, retorna nomes de animais ordenados
// 9.4 Com opções especificadas, retorna somente nomes de animais macho / fêmea
// 9.5 Só retorna informações específicas de gênero se includeNames for setado

// function animalMap(options) {
//   // seu código aqui
// }

/*----------------------------------------------------------------------------------------------------------------------------*/

// 10. Implemente a função schedule:
// 10.1 Sem parâmetros, retorna um cronograma legível para humanos
// 10.2 Se um único dia for passado, retorna somente este dia em um formato legível para humanos

// function schedule(dayName) {
//   // seu código aqui
// }

/*----------------------------------------------------------------------------------------------------------------------------*/

// 11. Implemente a função oldestFromFirstSpecies:
// 11.1 Passado o id de um funcionário, encontra a primeira espécie de animal
// gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

/*----------------------------------------------------------------------------------------------------------------------------*/

// 12. Implemente a função increasePrices:
// 12.1 Ao passar uma porcentagem, incrementa todos os preços, arrendondados em duas casas decimais

// function increasePrices(percentage) {
//   // seu código aqui
// }

/*----------------------------------------------------------------------------------------------------------------------------*/

// 13. Implemente a função employeeCoverage:
// 13.1 Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais eles são responsáveis
// 13.2 Com o id de um funcionário, retorna os animais pelos quais o funcionário é responsável
// 13.3 Com o primeiro nome de um funcionário, retorna os animais pelos quais o funcionário é responsável
// 13.4 Com o último nome de um um funcionário, retorna os animais pelos quais o funcionário é responsável

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

/*----------------------------------------------------------------------------------------------------------------------------*/

module.exports = {
  // entryCalculator,
  // schedule,
  // animalCount,
  // animalMap,
  // animalsByIds
  // employeeByName,
  // employeeCoverage,
  // addEmployee,
  // isManager,
  animalsOlderThan
  // oldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
