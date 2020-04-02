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

const animalCount = (species) => {
  if (!species) {
    const nomes = animals.map(el => `${el.name}`);
    const qtds = animals.map(el => el.residents.length);
    const result = {};
    for (let i = 0; i < nomes.length; i += 1) {
      result[nomes[i]] = qtds[i];
    }
    return result;
  }
  const filtro = animals.filter(el => el.name === species);
  const resultado = filtro.map(el => el.residents.length);
  return resultado[0];
};

const entryCalculator = (entrants) => {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const { Adult: adultoQtd, Child: criancaQtd, Senior: velhoQtd } = entrants;
  const { Adult, Senior, Child } = data.prices;
  const total = (adultoQtd * Adult) + (criancaQtd * Child) + (velhoQtd * Senior);
  return total;
};

const animalMap = (options) => {};

function schedule(dayName) {
  // seu código aqui
}

const oldestFromFirstSpecies = (idFunc) => {
  const pegaIdPrimeiroAnimal = employees.find(el => el.id === idFunc).responsibleFor[0];
  const residentsEspecie = animals.find(el => el.id === pegaIdPrimeiroAnimal)
  .residents.sort((a, b) => b.age - a.age)[0];
  return [residentsEspecie.name, residentsEspecie.sex, residentsEspecie.age];
};

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
