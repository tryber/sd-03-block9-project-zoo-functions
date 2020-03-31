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

const [...animals] = data.animals;

function animalsByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return ids;
  }

  const arr = [];
  for (let indice = 0; indice < ids.length; indice += 1) {
    const res = animals.find(elemento => elemento.id === ids[indice]);
    arr.push(res);
  }
  return arr;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const especies = animals.filter(bicho => (bicho.name === animal));
  const idades = especies[0].every(idade => idade.age >= age);
  const idade = especies.map(animals => animals.residents);
  return idades;
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
