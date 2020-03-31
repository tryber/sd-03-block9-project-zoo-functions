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

const { animals, employees, prices } = data;

function animalsByIds(...ids) {
  if (ids) {
    return animals.filter(animal => ids.find(id => id === animal.id));
  }
  return [];
}

function animalsOlderThan(animal, age) {
  const especie = animals.find(({ name }) => name === animal);
  return especie.residents.every(({ age: animalAge }) => animalAge >= age);
}

function employeeByName(employeeName) {
  if (employeeName) {
    return employees.find(
      ({ firstName, lastName }) =>
        firstName === employeeName || lastName === employeeName,
    );
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(element => element.managers.find(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  if (species) {
    return animals.find(animal => animal.name === species).residents.length;
  }
  const allAnimals = {};
  animals.forEach(animal => {
    allAnimals[animal.name] = animal.residents.length;
  });
  return allAnimals;
}

function entryCalculator(entrants) {
  const { Adult , Senior, Kid } = prices;
  if (entrants) {

  }
  return 0;
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
