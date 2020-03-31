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

const animalsByIds = (...ids) =>
  data.animals.filter(animal => ids.find(id => id === animal.id));

const animalsOlderThan = (animal, age) =>
  data.animals.find(a => a.name === animal).residents.every(a => a.age > age);

const employeeByName = employeeName =>
  data.employees.find(
    e => e.firstName === employeeName || e.lastName === employeeName,
  ) || {};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = id => data.employees.some(e => e.managers.find(i => i === id));

class Employee {
  constructor(id, firstName, lastName, managers = [], responsibleFor = []) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.managers = managers;
    this.responsibleFor = responsibleFor;
  }
}

const addEmployee = (...args) => data.employees.push(new Employee(...args));

// addEmployee('4141da1c-a6ed-4cf7-90c4-99c657ba4ef3', 'Jane', 'Doe',
// [
//   '546fe3d4-2d81-4bb4-83a7-92d5b7048d17',
//   'a67a36ee-3765-4c74-8e0f-13f881f6588a',
// ],
// [
//   'ee6139bf-b526-4653-9e1e-1ca128d0ad2e',
//   '210fcd23-aa7b-4975-91b7-0230ebb27b99',
// ]);

console.log(data.employees);

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
