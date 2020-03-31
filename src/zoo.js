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

const [...animals] = data.animals;
const [...employees] = data.employees;
const animalsByIds = (...ids) => {
  if (ids.length === 0) {
    return ids;
  }
  const filtro = [];
  for (let i = 0; i < ids.length; i += 1) {
    const resposta = animals.find(element => element.id === ids[i]);
    filtro.push(resposta);
  }
  return filtro;
};

const animalsOlderThan = (especie, idade) => {
  const filtra = animals.filter(element => element.name === especie);
  const mapFiltra = filtra.map(element => element.residents);
  return mapFiltra[0].every(element => element.age >= idade);
};

const employeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  return employees.find(el => el.firstName === employeeName || el.lastName === employeeName);
};

const createEmployee = (personalInfo, associatedWith) => {
  const newEmployee = Object.assign({}, personalInfo, associatedWith);
  return newEmployee;
};

function isManager(id) {
  const managers = employees.map(el => el.managers);
  return managers[0].some(el => el === id);
}

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  const novoFunc = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(novoFunc);
};

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
