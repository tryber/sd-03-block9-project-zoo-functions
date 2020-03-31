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
  const filtro = ids.map(id => data.animals.filter(animal => animal.id === id,));
  const semArray = [];
  for (let i = 0; i < filtro.length; i += 1) {
    semArray.push(filtro[i][0]);
  }
  return semArray;
};

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
