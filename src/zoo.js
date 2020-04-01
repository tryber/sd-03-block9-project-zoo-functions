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

const animalsByIds = (...ids) =>
  data.animals.filter(el => ids.find(id => id === el.id));

const animalsOlderThan = (animal, age) =>
  data.animals.find(el => el.name === animal).residents.every(el => el.age > age);

const employeeByName = employeeName =>
  data.employees.find(
    emp => emp.firstName === employeeName || emp.lastName === employeeName,
  ) || {};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = id =>
  data.employees.some(el => el.managers.find(a => a === id));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

const animalCount = (species) => {
  if (species) {
    return data.animals.find(el => el.name === species).residents.length;
  }

  const animalslength = {};
  data.animals.forEach((el) => { animalslength[el.name] = el.residents.length; });
  return animalslength;
};

const entryCalculator = (entrants) => {
  if (entrants && Object.keys(entrants).length > 0) {
    return Object.keys(entrants).reduce((acc, el) => (acc + (data.prices[el] * entrants[el])), 0);
  }

  return 0;
};

function animalMap(options) {
  // seu código aqui
}

const  schedule = (dayName) => {
  const myobj = {};

  if (dayName) {
    myobj[dayName] = `Open from ${data.hours[dayName].open}am until ${data.hours[dayName].close - 12}pm`;

    if (dayName === 'Monday') {
      myobj[dayName] = "CLOSED";
    }
    return myobj;
  } 

  Object.keys(data.hours).forEach((e) => {
    myobj[e] = `Open from ${data.hours[e].open}am until ${data.hours[e].close - 12}pm`;
    if (e === 'Monday') myobj[e] = 'CLOSED';
  });
  return myobj;
  
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
