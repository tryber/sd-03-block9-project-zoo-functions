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

const { animals, prices } = data;

const animalsByIds = (...ids) => {
  const vazio = [];
  if (ids) {
    return animals.filter(comparar => ids.find(idt => idt === comparar.id));
  }
  return vazio;
};

function animalsOlderThan(animal, age) {

  // seu código aqui
}

function employeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
}

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
};

function animalCount(species) {
  // seu código aqui
}

const entryCalculator = (entrants) => {
  if (entrants && Object.keys(entrants).length > 0) {
    const { Adult, Child, Senior } = { ...entrants };
    const a = prices.Adult * Adult;
    const b = prices.Child * Child;
    const c = prices.Senior * Senior;
    return a + b + c;
  };
  return 0;
};

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
