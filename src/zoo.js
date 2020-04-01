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

function animalsByIds(...ids) { // rest parameter
  return data.animals.filter(animal => ids.find(id => id === animal.id));
}

function animalsOlderThan(animal, age) {
  return data.animals.find(
    species => species.name === animal).residents.every(age1 => age1.age > age);
}

function employeeByName(employeeName) {
  return data.employees.find(
    name => name.firstName === employeeName || name.lastName === employeeName) || {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(
    occupation => occupation.managers.find(manager => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // return
  // const reduceAnimals = (acc, species) => {
  //   if (species) return ` ${species.name} ${acc}`;
  //     return data.animals.every(
  //       animal => animal.find(animal => animal.name === species).residents.lenght);
  // };
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
  Object.keys(data.prices).forEach((value) => {
    (data.prices[value] = Math.round(data.prices[value] * (1 + (percentage / 100)) * 100) / 100); // https://metring.com.br/arredondar-numero-em-javascript
  });
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
