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
  const result = [];
  const animals = data.animals;
  if (ids) {
    ids.forEach(index => result.push(...animals.filter(element => element.id === index)));
    return result;
  }
  return ids;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalSelecionado = name =>
    data.animals.filter(element => element.name === name);

  const animalSelecionadoLista = animalSelecionado(animal);

  const idadeAnimalLista = animalSelecionadoLista[0].residents.reduce(
    (accumulator, element) => {
      accumulator.push(element.age);
      return accumulator;
    }, []);

  return idadeAnimalLista.every(element => element >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName) {
    return data.employees.find(
      element => element.firstName === employeeName
      || element.lastName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
  let gerentes = [];
  gerentes = data.employees.reduce((accumulator, element) =>
  `${accumulator},${element.managers}`, ['0']);
  if (gerentes.split(',').find(element => element === id)) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  if (!managers && !responsibleFor) {
    managers = [];
    responsibleFor = [];
    const employee = { id, firstName, lastName, managers, responsibleFor };
    data.employees.push(employee);
  } else {
    const employee = { id, firstName, lastName, managers, responsibleFor };
    data.employees.push(employee);
  }
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
