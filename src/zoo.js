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
  const animalSelecionado = (name) =>
    data.animals.filter(element => element.name === name);

  const animalSelecionadoLista = animalSelecionado(animal);
    
  const idadeAnimalLista = animalSelecionadoLista[0].residents.reduce(
    (accumulator,element) => {
      accumulator.push(element.age);
      return accumulator;
    },[]);
  
  return idadeAnimalLista.every(element => element >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

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
