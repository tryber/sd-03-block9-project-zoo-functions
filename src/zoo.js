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

const animalsByIds = (ids) => {
  data.animals.filter(idAnimal => ids.find(id => id === idAnimal.id));
}

const animalsOlderThan = (animal, age) => {
  const { animals } = data;
  const especie = animals.find(element => element.name === animal);
  return especie.residents.every(element => element.age >= age);
};

const employeeByName = (employeeName) => {
  const test = data.employees.find(teste => teste.firstName === employeeName
  || teste.lastName === employeeName)
  || {};
  return test;
};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = (id) => {
  data.employees.some(e => e.managers.find(i => i === id));
};

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

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
