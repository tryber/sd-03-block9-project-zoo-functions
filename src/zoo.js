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

const animalsByIds = (...ids) => animalsArr.filter(element =>
  ids.find(id => id === element.id));

const animalsOlderThan = (animal, age) =>
  data.animals.find(elemento => elemento.name === animal).residents.every(elemento => elemento.age > age);

const employeeByName = (employeeName) => {
  if (employeeName) {
    return employees.find(element => element.firstName === employeeName
    || element.lastName === employeeName);
  }
  return {};
  };

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
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
  return data.employees.some(e => e.managers.find(m => m === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

const animalCount = (species) => {
  if (species) {
    const quantSpecies = animals.find(element => element.name === species).residents.length;
    return quantSpecies;
  }

  return Object.assign(animals.reduce((acc, el) => {
    acc[el.name] = el.residents.length;
    return acc;
  }, {}));
};


const entryCalculator = (entrants) => {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const visitantesArray = Object.entries(entrants);
  const valores = Object.values(entrants);
  const valorAdult = prices.Adult * valores[0];
  const valorChild = visitantesArray[1][1] * 20.99;
  const valorSenior = visitantesArray[2][1] * 24.99;
  const valorTotal = valorAdult + valorSenior + valorChild;
  return valorTotal;
};

function animalMap(options) { // complexo
  // seu código aqui
}

function schedule(dayName) {
  let agenda = {};
  if (dayName) {
    agenda = { dayName: hours(dayName) };
    return agenda;
  }
  Object.keys(data.hours).forEach((e) => { agenda[e] = hours(e); });
  return agenda;
  }

const oldestFromFirstSpecies = (id) => {
  const funcionario = employees.find(fun => fun.id === id).responsibleFor[0];
  const animal = animals.find(codigo => codigo.id === funcionario).residents;
  const animaisOrdem = animal.sort((a,b) => {
    if (a.age < b.age) return 1;
    if (a.age > b.age) return -1;
    return 0;
  });
  return Object.values(animaisOrdem[0]);
};

const increasePrices = percentage => {
  Object.keys(data.prices).reduce((objeto, pessoa ) => {
    objeto[pessoa] = Math.round((objeto[pessoa] * (100 + percentage)).toFixed(2)) / 100;
    return objeto;
  }, data.prices);
};cd

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
