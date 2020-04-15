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
  if (!ids.length) return [];
  return data.animals.filter(({ id }) => ids.includes(id));
};

const animalsOlderThan = (species, age) => {
  const speciesFinder = data.animals.find(({ name }) => name === species);
  return speciesFinder.residents.every(({ age: a }) => a > age);
};

const employeeByName = (employeeName) => {
  if (!employeeName) return {};
  return data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
};

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

const isManager = id => data.employees.some(({ managers }) => managers.includes(id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) =>
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });

const animalCount = (species) => {
  const allAnimals = {};
  data.animals.forEach(({ name, residents }) => {
    allAnimals[name] = residents.length;
  });
  if (!species) return allAnimals;
  const animalFinder = data.animals.find(({ name }) => name === species);
  return animalFinder.residents.length;
};

const entryCalculator = (entrants) => {
  if (!entrants || !Object.keys(entrants).length) return 0;
  const pricesEntries = Object.entries(data.prices);
  const entrantsEntries = Object.entries(entrants);
  let payment = 0;
  entrantsEntries.forEach(([age, amount]) => {
    pricesEntries.forEach(([category, price]) => {
      if (category === age) payment += amount * price;
    });
  });
  return payment;
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
