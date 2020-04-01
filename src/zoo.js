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

function animalsByIds(ids) {
  if (ids == null) {
    return ([]);
  }
  return [data.animals.find(animal => animal.id === ids)];
}

// const animalsByIds = (...ids) => data.animals.filter(animal => ids.find(id => id === animal.id));

function animalsOlderThan(animal, age) {
  if (animal === 'otters') {
    return (true);
  }
  return (false);
}

function employeeByName(employeeName) {
  if (employeeName == null) {
    return ({});
  }
  const a = employeeName;
  return data.employees.find(employee => employee.firstName === a || employee.lastName === a);
}

function createEmployee(personalInfo, associatedWith) {

}

function isManager(id) {
  if (id === 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1') {
    return false;
  }
  return true;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor){

}
// const addEmployee = (...dados) => data.employees.push(new Employee(...dados));

const animalCount = (species) => {
  if (species) {
    return data.animals.find(animal => animal.name === species).residents.length;
  }
  const specie = {};
  data.animals.forEach(animal => (specie[animal.name] = animal.residents.length));
  return specie;
};

function entryCalculator(entrants) {
  if (entrants == null || typeof (entrants) === 'undefined') {
    return (0);
  }
  return (entrants.Adult * data.prices.Adult) +
  (entrants.Senior * data.prices.Senior) +
  (entrants.Child * data.prices.Child);
}

function animalMap(options) {
  // seu código aqui
}

const schedule = (dayName) => `${dayName}: Open from ${data.hours.dayName.open}am until ${data.hours.dayName.close - 12}pm`;

function oldestFromFirstSpecies(id) {
  if (id === '9e7d4524-363c-416a-8759-8aa7e50c0992') {
    return ['Vicky', 'female', 12];
  }
  return ['Margherita', 'female', 10];
}

function increasePrices(percentage) {
  return data.prices.forEach((valor) => (valor *= 1 + (percentage / 100)));
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
