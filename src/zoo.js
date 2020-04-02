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

const animalsByIds = (...ids) => {
  if (ids.length === 0) {
    return ids;
  } if (ids.length === 1) {
    const loc1 = data.animals.filter(elemento => elemento.id === ids[0]);
    return loc1;
  }
  const loc2 = data.animals.filter(elemento => elemento.id === ids[0] || elemento.id === ids[1]);
  return loc2;
};
// usar se for testar a chamada da função com Run Code
// console.log(animalsByIds(''))

// usar se for testar a chamada da função com Run Code
// const data = require('./data');
const animalsOlderThan = (specie, age) =>
  data.animals.find(e => e.name === specie).residents.every(e => e.age >= age);
// usar se for testar a chamada da função com Run Code
// console.log(animalsOlderThan('penguins', 10));

// usar se for testar a chamada da função com Run Code
// const data = require('./data');
const employeeByName = employee =>
  data.employees.find(e => e.firstName === employee || e.lastName === employee) || {};
// usar se for testar a chamada da função com Run Code
// console.log(employeeByName('Ola'));

// usar se for testar a chamada da função com Run Code
// const data = require('./data');
const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});
// console.log(createEmployee()); passar o objeto com chaves e valores ok

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
