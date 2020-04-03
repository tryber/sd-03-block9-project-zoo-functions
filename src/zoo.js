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

const animalsByIds = (element) => {
  if (element === undefined) return [];
  data.animals.filter((animal) => data.animals.id === animal.id);
};

const animalsOlderThan = (animal, age) => {
  if (data.animals.name === animal && data.animals.age >= age) {
    return true;
  }
  return false;
};
const searchEmployee = data.employees;
const employeeByName = (peopleName) => {
  if (peopleName === undefined) return {};
  const first = searchEmployee.filter((element) => element.firstName === peopleName);
  const last = first.filter((element) => element.lastName === peopleName);
  console.log(first);
};

const createEmployee = (personalInfo, associatedWith) => {
  return {
    ...personalInfo,
    ...associatedWith,
  };
};
const searchManager = data.employees;
const isManager = (id) => {
  searchManager.find((element) => element.id);
  if (searchManager === id) {
    return true;
  }
  return false;
};

function addEmployee(id, firstName, lastName, managers, responsibleFor) {

}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
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
