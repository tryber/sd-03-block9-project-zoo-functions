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
  // seu código
  const a = [];
  if (ids.length >= 1) {
    for (let i = 0; i < ids.length; i += 1) {
      a.push(data.animals.find(item => item.id === `${ids[i]}`));
    }
    return a;
  }
  return [];
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return data.animals
    .find(({ name }) => animal === name)
    .residents.every(a => a.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) { return {}; }
  return data.employees.find(a => a.firstName === employeeName || a.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const found = data.employees.find(employ => employ.managers.includes(id));
  if (found === undefined) { return false; }
  return true;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (species) {
    const foundSpecies = data.animals.find(a => a.name === species);
    return foundSpecies.residents.length;
  }
  return data.animals.reduce((accumulator, index) => {
    accumulator[index.name] = index.residents.length;
    return accumulator;
  }, {});
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || !Object.keys(entrants).length) { return 0; }
  const Adults = entrants.Adult;
  const Seniors = entrants.Senior;
  const Children = entrants.Child;
  return (Adults * 49.99) + (Seniors * 24.99) + (Children * 20.99);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
  const returner = {};
  if (!dayName) {
    return {
      Tuesday: 'Open from 8am until 6pm',
      Wednesday: 'Open from 8am until 6pm',
      Thursday: 'Open from 10am until 8pm',
      Friday: 'Open from 10am until 8pm',
      Saturday: 'Open from 8am until 10pm',
      Sunday: 'Open from 8am until 8pm',
      Monday: 'CLOSED',
    };
  } else if (dayName === 'Monday') {
    return {
      Monday: 'CLOSED',
    };
  }
  returner[dayName] = `Open from ${data.hours[dayName].open}am until ${data.hours[dayName].close}pm`;
  return returner;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  return Object.values(data.animals
    .find(a => a.id === data.employees
    .find(animal => animal.id === id).responsibleFor[0]).residents
    .sort((a, b) => b.age - a.age)[0]);
}

function increasePrices(percentage) {
  // seu código aqui
  return Object.keys(data.prices).forEach((a) => {
    (data.prices[a] =
      Math.round(data.prices[a] * ((percentage / 100) + 1) * 100) / 100);
  });
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
