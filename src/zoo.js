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

const retornaSchedule = day => ((day === 'Monday')
  ? 'CLOSED'
  : `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`);

const schedule = (dayName) => {
  const myobj = {};
  if (dayName) {
    myobj[dayName] = retornaSchedule(dayName);
    return myobj;
  }

  Object.keys(data.hours).forEach((el) => {
    myobj[el] = `Open from ${data.hours[el].open}am until ${data.hours[el].close - 12}pm`;
    if (el === 'Monday') myobj[el] = 'CLOSED';
  });

  return myobj;
};

const oldestFromFirstSpecies = id => Object.values(data.animals
  .find(el => el.id === data.employees
    .find(animal => animal.id === id).responsibleFor[0]).residents
  .sort((n1, n2) => n2.age - n1.age)[0]);

const increasePrices = (percentage) => {
  Object.keys(data.prices).forEach((el) => {
    (data.prices[el] = Math.round(data.prices[el] * ((percentage / 100) + 1) * 100) / 100);
  });
};

const employeeresponsible = (el) => {
  const obj = {};
  obj[`${el.firstName} ${el.lastName}`] = el.responsibleFor
    .map(id => data.animals
      .find(animal => animal.id === id).name);
  return obj;
};

const employeeCoverage = (idOrName) => {
  const myobj = {};
  if (idOrName) {
    Object.assign(myobj, employeeresponsible(data.employees
      .find(el => (
        (el.id === idOrName)
        || (el.firstName === idOrName)
        || (el.lastName === idOrName)
        ))));
    return myobj;
  }
  data.employees.forEach((e) => {
    Object.assign(myobj, employeeresponsible(e));
  });

  return myobj;
};

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
