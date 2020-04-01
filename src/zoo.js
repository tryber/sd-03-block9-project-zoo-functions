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

function animalsByIds(...ids) {
  // seu código aqui
  const finder = dado => data.animals.find(animal => animal.id === dado);
  if (arguments.length === 0) return [];
  return (arguments.length === 1) ? Array.of(finder(...ids)) : [...ids].map(finder);
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const finder = dado => data.animals.find(ani => ani.name === dado);
  return finder(animal).residents.every(ida => ida.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (arguments.length === 0) return {};
  const findfirst = dado => data.employees.find(ani => ani.firstName === dado);
  const findlast = dado => data.employees.find(ani => ani.lastName === dado);
  return findfirst(employeeName) || findlast(employeeName);
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
