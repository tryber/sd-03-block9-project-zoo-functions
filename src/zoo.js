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

const employeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
};

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

const isManager = id => employees
  .some(({ managers }) => managers
    .some(idManager => idManager === id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
};

const animalCount = (species) => {
  if (species) {
    return animals.find(({ name }) => name === species).residents.length;
  }
  const quant = {};
  animals.forEach((all) => {
    quant[all.name] = all.residents.length;
  });
  return quant;
};

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

const increasePrices = percentage => {
  prices.Adult = Math.ceil(prices.Adult * (100 + percentage)) / 100;
  prices.Child = Math.ceil(prices.Child * (100 + percentage)) / 100;
  prices.Senior = Math.ceil(prices.Senior * (100 + percentage)) / 100;
  return prices;
};

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
