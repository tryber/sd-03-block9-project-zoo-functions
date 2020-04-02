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
  return data.employees.some(emp => emp.managers.find(superiores => superiores === id));
}
// O some é necessário, pois se usar só o find ele retorna undefined se o ID não existir.
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const emp = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(emp);
}

function animalCount(species) {
  if (species) {
    return data.animals.find(anim => anim.name === species).residents.length;
  }
  let objAnimais = {};
  data.animals.forEach((animal) => objAnimais[animal.name] = animal.residents.length);
  return objAnimais;
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
