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

// const speciesFinder = data.animals.find(({ name }) => name === species);
// return speciesFinder.residents.filter(({ age:a })=> a > age);

const data = require('./data');

const animalsByIds = (...ids) => {
  if (!ids.length) return [];
  return data.animals.filter(({ id }) => ids.includes(id));
};

const animalsOlderThan = (species, age) => {
  const speciesFinder = data.animals.find(({ name }) => name === species);
  const ageChecker = speciesFinder.residents.find(({ age: a }) => a < age);
  if (ageChecker) return false;
  return true;
};

const employeeByName = (employeeName) => {
  if (!employeeName) return {};
  return data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
};

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

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
