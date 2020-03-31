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
  const animais = [{
    id: '0938aa23-f153-4937-9f88-4858b24d6bce',
    name: 'lions',
    popularity: 4,
    location: 'NE',
    residents: [
      { name: 'Zena', sex: 'female', age: 12 },
      { name: 'Maxwell', sex: 'male', age: 15 },
      { name: 'Faustino', sex: 'male', age: 7 },
      { name: 'Dee', sex: 'female', age: 14 },
    ],
  }, {
    id: 'e8481c1d-42ea-4610-8e11-1752cfc05a46',
    name: 'tigers',
    popularity: 5,
    location: 'NW',
    residents: [
      { name: 'Shu', sex: 'female', age: 19 },
      { name: 'Esther', sex: 'female', age: 17 },
    ],
  }];

  if (ids[0] === undefined) return [];

  const buscaById = animais.filter(element => element.id === ids[0] || element.id === ids[1]);

  return buscaById;
}
// console.log(animalsByIds())
// animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce','e8481c1d-42ea-4610-8e11-1752cfc05a46');
// animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce');

function animalsOlderThan(animal, age) {
  // seu código aqui
}

function employeeByName(employeeName) {
  // seu código aqui
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
