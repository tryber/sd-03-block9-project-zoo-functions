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

function animalsByIds(...ids) {
  const idAnimals = [];
  ids.forEach((value) => {
    const selection = animals.filter(group => group.id === value);
    idAnimals.push(...selection);
  });
  return idAnimals;
}

function animalsOlderThan(animal, age) {
  return animals.filter(group => group.name === animal)
                .every(obj => obj.residents.every(animal2 => animal2.age >= age));
}

const employeeByName = employeeName =>
  employees.find(person => person.firstName === employeeName || person.lastName === employeeName,
) || {};

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
