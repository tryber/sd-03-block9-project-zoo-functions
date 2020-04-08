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
  data.animals.find(el => el.name === animal).residents.every(el => el.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const funcD = data.employees;
  const funcR = funcD.filter(fc => fc.firstName === employeeName || fc.lastName === employeeName);
  return funcR[0];
}

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

function animalCount = species => {
  if (species) {
    const quantEspecies = animals.find(element => element.name === species).residents.length;
    return quantSpecies;
  }
  const allOfThem = animal.reduce((acc, el) => {

  })


function entryCalculator = (entrants) {
  if (entrants === undefined || )
}

function animalMap(options) { // complexo
  // seu código aqui
}

function schedule(dayName) {
  let scheduleV = {};
  if (dayName) {
    scheduleV = { dayName: hours(dayName) };
    return scheduleV;
  }
  Object.keys(data.hours).forEach((e) => { scheduleV[e] = hours(e); });
  return scheduleV;
}

cons oldestFromFirstSpecies = (id) => {
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
};

function employeeCoverage(idOrName) { // bem complexo
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
