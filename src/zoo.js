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
  data.animals.filter(animal => ids.find(id => id === animal.id));

const animalsOlderThan = (animal, age) =>
  data.animals
    .find(animalz => animalz.name === animal)
    .residents.every(idade => idade.age >= age);

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const employee = data.employees.find(
    nome => nome.firstName === employeeName || nome.lastName === employeeName,
);
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

const isManager = id => data.employees.some(({ managers }) => managers.find(i => i === id));

const addEmployee = (
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) => {
  const x = { id, firstName, lastName, managers, responsibleFor };
  return data.employees.push(x);
};

function animalCount(species) {
  // if (species) {
  //   return data.animals.find(({ lião }) => lião === species).residents.length;
  // }
  // data.animals.forEach(especie => {
  // });
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
