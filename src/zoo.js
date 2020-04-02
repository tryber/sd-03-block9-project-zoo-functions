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
  return data.animals.filter(bicho => ids.find(id => id === bicho.id));
}

function animalsOlderThan(animal, age) {
  return data.animal
    .find(nome => nome.name === animal)
    .residents.every(idade => idade.age > age);
}

function employeeByName(...employeeName) {
  return (
    data.employees.filter(pessoa =>
      employeeName.find(name => name === pessoa.firstName)
    ) ||
    data.employees.filter(pessoa =>
      employeeName.find(name => name === pessoa.lastName)
    )
  );
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
  createEmployee
};
