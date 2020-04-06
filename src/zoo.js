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

const animalsOlderThan = (pAnimal, pAge) =>
  data.animals.find(animal => animal.name === pAnimal).residents.every(a => a.age > pAge);

const employeeByName = employee =>
  data.employees.find(el => el.firstName === employee || el.lastName === employee) || {};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});


const isManager = id => data.employees.some(el => el.managers[0] === id);


const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  const detalhes = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(detalhes);
};

const animalCount = (species) => {
  const [...animais] = data.animals;
  if (!species) {
    const acumulador = animais.reduce((acc, animal) => {
      acc[animal.name] = animal.residents.length;
      return acc;
    }, {});
    return acumulador;
  }
  const qtdAnimal = animais.filter(animal => animal.name === species);
  const totalQtd = qtdAnimal.map(animal => animal.residents.length);
  return totalQtd[0];
};


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
