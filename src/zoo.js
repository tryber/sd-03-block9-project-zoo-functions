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

// 1. Caso receba nenhum parâmetro, necessário retornar um array vazio; (ok)
// 2. Ao receber como parâmetro um único id, retorna os animais com este id;
// 3. Ao receber mais de um id, retorna os animais que têm um desses ids;

function animalsByIds(...ids) {
  // seu código aqui
  if (ids === undefined) return [];
  const identifiedAnimals = [];
  // {id} é um object destructing;
  const animalsData = (ids) => data.animals.find(({ id }) => ids === id);
  ids.forEach((id) => identifiedAnimals.push(animalsData(id)));

  return identifiedAnimals;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
}

function employeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
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
