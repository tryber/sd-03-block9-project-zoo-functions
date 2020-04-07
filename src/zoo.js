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

const animalsByIds = (...ids) => data.animals.filter(animal => ids.find(id => id === animal.id));

const animalsOlderThan = (animal, age) => data.animals
  .find(a => a.name === animal).residents.every(a => a.age > age);

const employeeByName = eName => (eName === undefined ? {} : data.employees
  .find(e => e.firstName === eName || e.lastName === eName));

const createEmployee = (personalInfo, associatedWith) =>
  Object.assign(personalInfo, associatedWith);

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

function entryCalculator(e) {
  if (e === undefined || Object.keys(e).length === 0) {
    return 0;
  }
  {
    const valores = [e, data.prices];
    const result = valores.reduce((soma, i) => i.Adult * soma, 1)
    + valores.reduce((soma, i) => i.Child * soma, 1)
    + valores.reduce((soma, i) => i.Senior * soma, 1);
    return result;
  }
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
