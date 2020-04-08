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

const animalsByIds = (...ids) => {
  if (ids === undefined) return [];
  const group =
    data.animals.filter(idItem => ids.includes(idItem.id));
  return group;
};

const animalsOlderThan = (animal, age) => {
  const checkAnimals =
    data.animals.find(item => item.name === animal)
                .residents.every(itemAge => itemAge.age >= age);
  return checkAnimals;
};

const employeeByName = (employeeName) => {
  if (employeeName === undefined) return {};
  const employeeSearch =
    data.employees.find(item => item.firstName === employeeName || item.lastName === employeeName);
  return employeeSearch;
};

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

const isManager = (id) => {
  const manager =
    data.employees.find(employee => employee.managers.includes(id));
  return !!manager;
};

const addEmployee = (id, firstName, lastName, managers, responsibleFor) => {
  const newEmployee = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    managers: managers || [],
    responsibleFor: responsibleFor || []
  }
  return data.employees.push(newEmployee);
};

const animalCount = (species) => {
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
