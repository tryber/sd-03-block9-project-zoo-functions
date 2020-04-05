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
    return 'CLOSED';
  }
  return `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
};

const schedule = (dayName) => {
  const cron = {};
  if (dayName) {
    cron[dayName] = cronLeg(dayName);
    return cron;
  }
  Object.keys(data.hours).forEach((element) => { cron[element] = cronLeg(element); });
  return cron;
};

const oldestFromFirstSpecies = id =>
  Object.values(data.animals.find(elem => elem.id === data.employees
  .find(anim => anim.id === id).responsibleFor[0]).residents
  .sort((r1, r2) => r2.age - r1.age)[0]);

const increasePrices = (percentage) => {Object.keys(data.prices).forEach((e) => {
    (data.prices[e] = Math.round(data.prices[e] * ((percentage / 100) + 1) * 100) / 100);
  });
};

const findResponsibleForAnimals = (res) => {
  const who = {};
  who[`${res.firstName} ${res.lastName}`] = res.responsibleFor.map(id => data.animals
  .find(animal => animal.id === id).name);
  return who;
};

const employeeCoverage = (idOrName) => {
  const emp = {};
  if (idOrName) {
    Object.assign(emp, findResponsibleForAnimals(data.employees.find(elem => ((
    elem.id === idOrName) || (elem.firstName === idOrName) || (elem.lastName === idOrName)))
    ));
    return emp;
  };
  data.employees.forEach((elem) => {Object.assign(emp, findResponsibleForAnimals(elem));
  });
  return emp;
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
