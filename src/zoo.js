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
  // seu código aqui
  const list = data.animals.filter(animal => animal.id === ids[0] || animal.id === ids[1]);
  return list;
}

const animalsOlderThan = (animal, age) => {
  // seu código aqui
  const especie = data.animals.filter(e => e.name === animal);
  const isOld = especie[0].residents.every(e => e.age > age);
  return isOld;
};

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const employee = data.employees.find(e => e.firstName === employeeName
    || e.lastName === employeeName);
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  return newEmployee;
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
  const managers = data.employees.map(e => e.managers.some(f => f === id));
  const issManager = managers.some(e => e === true);
  return issManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id, firstName, lastName, managers, responsibleFor,
  };
  data.employees.push(newEmployee);
}

function animalCount(especies) {
  // seu código aqui
  if (especies === undefined) {
    const obj = {};
    const names = data.animals.map(e => e.name);
    names.forEach((e, i) => { obj[e] = data.animals[i].residents.length; });
    return obj;
  }
  const animals = data.animals.find(e => e.name === especies);
  const total = animals.residents.length;
  return total;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const arr = ['Adult', 'Child', 'Senior'];
  const { Adult, Child, Senior } = entrants;
  const payers = [Adult, Child, Senior];
  const total = payers.reduce((sum, e, i) => {
    sum += e * data.prices[arr[i]];
    return sum;
  }, 0);
  return total;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
  const days = Object.keys(data.hours);
  if (dayName === undefined) {
    const obj = {};
    days.forEach((e, i) => {
      if (e === 'Monday') {
        obj[e] = 'CLOSED';
      } else {
        obj[e] = `Open from ${data.hours[days[i]].open}am until ${(data.hours[days[i]].close) - 12}pm`;
      }
    });
    return obj;
  }
  const obj = {};
  days.forEach((e) => {
    if (e === dayName) {
      if (e === 'Monday') {
        obj[e] = 'CLOSED';
      } else {
        obj[e] = `Open from ${data.hours[e].open}am until ${(data.hours[e].close) - 12}pm`;
      }
    }
  });
  return obj;
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
