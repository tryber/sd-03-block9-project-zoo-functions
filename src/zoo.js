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
    return data.animals.find(ani => ani.name === species).residents.length;
  }
  const anim = {};
  data.animals.forEach((ani) => { anim[ani.name] = ani.residents.length; });
  return anim;
};

const entryCalculator = (entrants) => {
  if (entrants && Object.keys(entrants).length > 0) {
    return Object.keys(entrants).reduce((accumulator, entrant) =>
  (accumulator + (data.prices[entrant] * entrants[entrant])), 0);
  }
  return 0;
};

const animalMap = (options) => {
  // seu código aqui
};

const cronLeg = (day) => {
  if (day === 'Monday') {
    return 'CLOSED'
  }
  return `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
}

const schedule = (dayName) => {
  const cron = {};
  if (dayName) {
    cron[dayName] = cronLeg(dayName);
    return cron;
  }
  Object.keys(data.hours).forEach((element) => { cron[element] = cronLeg(element); });
  return cron;
};

const oldestFromFirstSpecies = (id) => {
  // seu código aqui
};

const increasePrices = (percentage) => {
  // seu código aqui
};

const employeeCoverage = (idOrName) => {
  // seu código aqui
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
