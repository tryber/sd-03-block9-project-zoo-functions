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
  const filterId = ids.map(id => data.animals.filter(animal => animal.id === id));
  const filterIdSemArrayEmCadaObjeto = [];
  for (let i = 0; i < filterId.length; i += 1) {
    filterIdSemArrayEmCadaObjeto.push(filterId[i][0]);
  }
  return filterIdSemArrayEmCadaObjeto;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const nomeEspecieFilter = data.animals.filter(item => item.name === animal);
  const idadeResidentesPorEspecie = nomeEspecieFilter[0].residents.map(item => item.age);
  return idadeResidentesPorEspecie.every(idade => idade >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  const funcD = data.employees;
  const funcR = funcD.filter((fc) => fc.firstName === employeeName || fc.lastName === employeeName);
  return funcR[0];
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  // seu código aqui
  const result = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return result;
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
