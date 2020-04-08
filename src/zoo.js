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

const { animals, prices, employees } = data;

const animalsByIds = (...ids) => {
  const vazio = [];
  if (ids) {
    return animals.filter(comparar => ids.find(idt => idt === comparar.id));
  }
  return vazio;
};

const animalsOlderThan = (animal, age) =>
  animals
  .find(animais => animais.name === animal)
  .residents.every(minima => minima.age >= age);
  // seu código aqui

function employeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

const isManager = id => employees
  .some(({ managers }) => managers
    .some(idManager => idManager === id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
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
  }
  return 0;
};

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

const oldestFromFirstSpecies = id => 
  Object.values(animals.find(verify => verify.id === employees
      .find(allow => allow.id === id).responsibleFor[0]).residents
    .sort((comp, atual) => atual.age - comp.age)[0]);

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
