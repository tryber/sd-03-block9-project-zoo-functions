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

const animalsByIds = (...ids) => data.animals.filter(aniId => ids.find(id => id === aniId.id));

const animalsOlderThan = (animal, age) =>
  data.animals.find(anim => anim.name === animal).residents.every(r => r.age > age);

const employeeByName = employeeName =>
  data.employees.find(
  emp => emp.firstName === employeeName || emp.lastName === employeeName,
  ) || {};

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

const isManager = id => data.employees.some(m => m.managers.find(mId => mId === id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) =>
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });

const animalCount = (species) => {
  if (species) {
    return data.animals.find(a => a.name === species).residents.length;
  }
  const all = {};
  data.animals.map((a) => { all[a.name] = a.residents.length; });
  return all;
}

const entryCalculator = (entrants) => {
  // seu código aqui
}

const animalMap = (options) => {
  // seu código aqui
}

const schedule = (dayName) => {
  // seu código aqui
}

const oldestFromFirstSpecies = (id) => {
  // seu código aqui
}

const increasePrices = (percentage) => {
  // seu código aqui
}

const employeeCoverage = (idOrName) => {
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
