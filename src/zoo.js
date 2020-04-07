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

const animalsByIds = (...ids) => data.animals.filter(animId => ids.find(id => id === animId.id));

const animalsOlderThan = (animal, age) => data.animals.find(anim => anim.name === animal).residents
.every(animIdade => animIdade.age > age);

const employeeByName = employeeName => (employeeName === undefined ? {} : data.employees
  .find(e => e.firstName === employeeName || e.lastName === employeeName));

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

const isManager = id => data.employees.some(({ managers }) => managers.find(i => i === id));

const addEmployee = (
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) => {
  const x = { id, firstName, lastName, managers, responsibleFor };
  return data.employees.push(x);
};

const animalCount = (species) => {
  if (species !== undefined) {
    return data.animals.find(a => a.name === species).residents.length;
  }
  const obj = {};
  data.animals.forEach((e) => { obj[e.name] = e.residents.length; });
  return obj;
};

const entryCalculator = entrants => (entrants && Object.keys(entrants).length > 0
? Object.keys(entrants).reduce((test, all) => (test + (data.prices[all] * entrants[all])), 0)
: 0);

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
  percentage /= 100;
  precos.Adult = Math.round(((precos.Adult + (precos.Adult * percentage)) * 100)) / 100;
  precos.Child = Math.round(((precos.Child + (precos.Child * percentage)) * 100)) / 100;
  precos.Senior = Math.round(((precos.Senior + (precos.Senior * percentage)) * 100)) / 100;
  return undefined;
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
