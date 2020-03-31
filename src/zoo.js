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
  const arr = [];
  ids.forEach((id) => {
    arr.push(...data.animals
      .filter(({ id: animalId }) => {
        if (animalId === id) return true;
        return false;
      }));
  });
  return arr;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return data.animals
    .find(({ name }) => name === animal)
    .residents.every(({ age: animalAge }) => animalAge >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const person = {};
  const finded = data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
  return Object.assign(person, finded);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return Object.assign({}, personalInfo, associatedWith);
}

function isManager(id) {
  // seu código aqui
  return data.employees
    .some(({ managers }) => managers
      .some(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function animalCount(species) {
  // seu código aqui
  const animalsQntd = {};
  data.animals.forEach(({ name, residents }) => {
    animalsQntd[name] = residents.length;
  });

  return (species !== undefined) ? animalsQntd[species] : animalsQntd;
}

function entryCalculator(entrants = {}) {
  // seu código aqui
  let total = 0;
  const { Adult = 0, Child = 0, Senior = 0} = entrants;
  total += Adult * data.prices.Adult;
  total += Child * data.prices.Child;
  total += Senior * data.prices.Senior;
  return total;
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
