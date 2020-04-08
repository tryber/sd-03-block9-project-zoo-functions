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

// 1- Implemente a função animalsByIds:
// Caso receba nenhum parâmetro, necessário retornar um array vazio
// Ao receber como parâmetro um único id, retorna os animais com este id
// Ao receber mais de um id, retorna os animais que têm um desses ids
function animalsByIds(ids) {
  // seu código aqui
}

// 2- Implemente a função animalsOlderThan:
// Ao passar o nome de uma espécie e uma idade, testa se todos os animais
// desta espécie possuem a idade mínima especificada
function animalsOlderThan(animal, age) {
  return data.animals.find(anima => anima.name === animal)
                      .residents.every(anima => anima.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
}

// 4- Implemente a função createEmployee:
// Cria um novo colaborador a partir de objetos contendo informações pessoais,
// gerentes e animais gerenciados
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// 5- Implemente a função isManager:
// Testa se o id passado é de um gerente
function isManager(id) {
  return data.employees.some(manager => manager.managers.find(i => i === id));
}

// 6- Implemente a função addEmployee:
// Adiciona um funcionário no fim da lista
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
