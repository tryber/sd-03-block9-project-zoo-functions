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

const { animals, employees } = data;

// hours, prices

const animalsByIds = (...ids) => {
  const idAnimals = [];
  ids.forEach((value) => {
    const selection = animals.filter(group => group.id === value);
    idAnimals.push(...selection);
  });
  return idAnimals;
};

const animalsOlderThan = (animal, age) =>
  animals.filter(group => group.name === animal)
          .every(obj => obj.residents.every(animal2 => animal2.age >= age));

const employeeByName = employeeName =>
  employees.find(person => person.firstName === employeeName || person.lastName === employeeName,
) || {};

const createEmployee = (personalInfo, associatedWith) => {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
};

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
