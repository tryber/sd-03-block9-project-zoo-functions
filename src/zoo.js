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

const animalsByIds = (...ids) =>
  data.animals.filter(el => ids.find(id => id === el.id));

const animalsOlderThan = (animal, age) =>
  data.animals.find(el => el.name === animal).residents.every(el => el.age > age);

const employeeByName = employeeName =>
  data.employees.find(
    emp => emp.firstName === employeeName || emp.lastName === employeeName,
  ) || {};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = id =>
  data.employees.some(el => el.managers.find(a => a === id));

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

const animalCount = species => {
  if (species) {
    return data.animals.find(el => el.name === species).residents.length;
  }

  const animalslength = {};
  data.animals.forEach((el) => {animalslength[el.name] = el.residents.length})
  return animalslength;

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
