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

const animalsByIds = (...ids) => animals.filter(animal => ids.find(id => id === animal.id));

function animalsOlderThan(animal, age) {
  const findAnimal = animals.find(element => element.name === animal);
  const searchAge = findAnimal.residents.every(element => element.age >= age);
  return searchAge;
}

function employeeByName(employeeName) {
  if (employeeName) {
    return employees.find(element =>
      element.firstName === employeeName || element.lastName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

const isManager= (id) => {
  if (employees.filter(element => element.id === id)){
    return true
  };
};


console.log(isManager('0e7b46acf4-4e17-bcb3-ee472265db83'));


function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function animalMap(options) {
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
