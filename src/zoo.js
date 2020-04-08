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
  // seu código aqui
  return data.animals.filter(animal => ids.find(id => id === animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return data.animals
    .find(({ name }) => name === animal)
    .residents.every(({ age: animalAge }) => animalAge >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return data.employees.find(el => el.firstName === employeeName || el.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees
  .some(({ managers }) => managers
    .some(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  data.employees.push(newEmployee);
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    const nomes = data.animals.map(el => `${el.name}`);
    const qtds = data.animals.map(el => el.residents.length);
    const result = {};
    for (let i = 0; i < nomes.length; i += 1) {
      result[nomes[i]] = qtds[i];
    }
    return result;
  }
  const filtro = data.animals.filter(el => el.name === species);
  const resultado = filtro.map(el => el.residents.length);
  return resultado[0];
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
