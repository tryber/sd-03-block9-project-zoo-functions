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
const data = require("./data");

function animalsByIds(...ids) {
  if (ids) {
    return data.animals.filter(animal => ids.find(id => id === animal.id));
  }
  return [];
}

function animalsOlderThan(animal, age) {
  const findSpecie = data.animals.find(({ name }) => name === animal);
  return findSpecie.residents.every(({ age: aAge }) => aAge >= age);
}

// Sem parâmetros, retorna um objeto vazio
// Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// Quando provido o último nome do funcionário, retorna o objeto do funcionário

function employeeByName(employeeName) {
  if (employeeName) {
    return data.employees.find(
      ({ firstName, lastName }) =>
       firstName === employeeName || lastName === employeeName
    );
  }
  return {};
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
  // const animalsByLocation = getLocation();
}

/* function getLocation() {
  const location = data.animals.map(({ location }) => location);
  const animalsByLocation = location.reduce((acummulator, location) => {
    if (acummulator[location] === undefined) acummulator[location] = [];
    return acummulator;
  }, {});
  return animalsByLocation;
} */

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
  createEmployee
};
