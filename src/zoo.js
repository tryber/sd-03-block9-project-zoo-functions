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
  // seu código aqui
  if (ids === undefined) return [];
  const identifiedAnimals = [];
  // {id} é um object destructing;
  const animalsData = animalsIds =>
    data.animals.find(({ id }) => animalsIds === id);
  ids.forEach(id => identifiedAnimals.push(animalsData(id)));

  return identifiedAnimals;
};

const animalsOlderThan = (animal, animalAge) =>
  // seu código aqui
  data.animals
    .find(({ name }) => animal === name)
    .residents.every(({ age }) => age >= animalAge);

const employeeByName = (employeeName) => {
  // seu código aqui
  if (employeeName === undefined) return {};
  return data.employees.find(
      employees =>
      employeeName === employees.firstName ||
      employeeName === employees.lastName,
  );
};

const createEmployee = (personalInfo, associatedWith) => ({
  // seu código aqui
  ...personalInfo,
  ...associatedWith,
});

const isManager = id =>
  // seu código aqui
  data.employees.some(({ managers }) => managers.includes(id));


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
