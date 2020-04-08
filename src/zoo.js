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
data.animals.filter(idAnimal => ids.find(id => id === idAnimal.id));

const animalsOlderThan = (animal, age) =>
data.animals.find(a => a.name === animal).residents.every(a => a.age > age);

const employeeByName = employeeName => (employeeName === undefined ? {} : data.employees
  .find(e => e.firstName === employeeName || e.lastName === employeeName));

const createEmployee = (personalInfo, associatedWith) =>
Object.assign({}, personalInfo, associatedWith);

const isManager = id => data.employees.some(e => e.managers.find(i => i === id));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor })
}

const animalCount = (species) => {
  const animals = {};
  data.animals.forEach((e) => { animals[e.name] = e.residents.length; });
  if (species !== undefined) {
    return animals[species];
  }
  return animals;
};


function entryCalculator(entrants) {
  const { Adult, Senior, Child } = data.prices;
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult: aQtd, Child: cQtd, Senior: sQtd } = entrants;
  const total = (aQtd * Adult) + (cQtd * Child) + (sQtd * Senior);
  return total;
};

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  return Object.values(data.animals
    .find(e => e.id === data.employees
      .find(animal => animal.id === id).responsibleFor[0]).residents
        .sort((first, second) => second.age - first.age)[0]);
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((value) => {
    (data.prices[value] = Math.round(data.prices[value] * (1 + (percentage / 100)) * 100) / 100); // https://metring.com.br/arredondar-numero-em-javascript
  });
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
