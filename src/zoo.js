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
  if (ids.length === 0) {
    return [];
  }
  const result = [];
  ids.forEach(idt => result.push(data.animals.find(element => element.id === idt)));
    // ids.forEach(idt => result.push(data.animals.find(({ element }) => element === idt)));
  return result;
}
function animalsOlderThan(animal, age) {
  // seu código aqui
  let maisVelhos = false;
  const especiesSelected = data.animals.filter(element => element.name === animal);
  const especiesSelected2 = especiesSelected[0].residents.filter(element => element.age >= age);
  if (especiesSelected2.length === 0) {
    maisVelhos = false;
  } else if (especiesSelected2.length === especiesSelected[0].residents.length) {
    maisVelhos = true;
  }

  return maisVelhos;
}

function employeeByName(employeeName) {
  // seu código aqui
  let employeeSelected = {};
  if (!employeeName) {
    return {};
  }
  employeeSelected = data.employees.filter(
  element => element.firstName === employeeName || element.lastName === employeeName);
  return employeeSelected[0];
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui  
  let isManagerFilter = data.employees[0].managers.filter(element => element === id);
  if(isManagerFilter.length === 0) {
    return false;
  } else if (isManagerFilter.length > 0 ) { 
    return true;
  }
}
console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
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
