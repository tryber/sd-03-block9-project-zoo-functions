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

function animalsByIds(...ids) {
  return data.animals.filter(animal => ids.find(e => animal.id === e));
}

function animalsOlderThan(animal, age) {
  return data.animals.find(e => e.name === animal).residents.every(r => r.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName) {
    return data.employees.find(e => e.firstName === employeeName || e.lastName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(e => e.managers.find(m => m === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (species) {
    return data.animals.find(e => e.name === species).residents.length;
  }
  return data.animals.reduce((list, animal) => {
    list[animal.name] = animal.residents.length;
    return list;
  }, {});
}

function entryCalculator(entrants) {
  if (entrants && Object.keys(entrants).length > 0) {
    return Object.keys(entrants).reduce((sum, entrant) =>
    (sum + (data.prices[entrant] * entrants[entrant])), 0);
  }
  return 0;
}

function animalMap(options) {
  // seu código aqui
}

function hours(day) {
  if (day === 'Monday') { return 'CLOSED'; }
  return `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
}

function schedule(dayName) {
  let scheduleV = {};
  if (dayName) {
    { scheduleV[dayName] = hours(dayName) };
    return scheduleV;
  }
  Object.keys(data.hours).forEach((e) => { scheduleV[e] = hours(e); });
  return scheduleV;
}

function oldestFromFirstSpecies(id) {
  const species = data.animals.find(f =>
  f.id === data.employees.find(e => e.id === id).responsibleFor[0]);
  species.residents.sort((a, b) => b.age - a.age);
  return [species.residents[0].name, species.residents[0].sex, species.residents[0].age];
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((e) => {
    data.prices[e] = Math.round(data.prices[e] * (1 + (percentage / 100)) * 100) / 100;
  });
}


const summary = (e) => {
  const obj = {};
  obj[`${e.firstName} ${e.lastName}`] = e
  .responsibleFor.map(element => data.animals.find(animal => animal.id === element).name);
  return obj;
};

function employeeCoverage(idOrName) {
  const coverage = {};
  if (idOrName) {
    const findEmployee = data.employees.find(e => e.id === idOrName
    || e.firstName === idOrName || e.lastName === idOrName);
    return summary(findEmployee);
  }
  data.employees.forEach((employee) => {
    Object.assign(coverage, summary(employee));
  });
  return coverage;
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
