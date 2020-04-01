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
  return data.animals.filter(animal => ids.find(id => id === animal.id));
}

function animalsOlderThan(animal, age) {
  return data.animals.find(grp => grp.name === animal).residents.every(res => res.age >= age);
}
//  console.log(animalsOlderThan('tigers', 10));

function employeeByName(employeeName) {
  return data.employees.find(emp =>
    emp.firstName === employeeName || emp.lastName === employeeName) || {};
}
//  console.log(employeeByName('Ola'));

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

//  console.log(createEmployee(personalInfo, associatedWith));

function isManager(id) {
  if (data.employees.find(emp => emp.id === id).managers.length === 0) {
    return true;
  }
  return false;
}
//  console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const emp = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor
  };
  data.employees.push(emp);
}

function animalCount(species) {
  if (species)
    return data.animals.find(anim => anim.name === species).residents.length;
  return data.animals.map(animal => `${animal.name}: ${animal.residents.length}`);
 }

console.log(animalCount());

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
