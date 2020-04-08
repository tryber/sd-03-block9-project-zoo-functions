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
    .find(animals => animals.name === animal)
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

const createEmployee = (personalInfo, associatedWith) =>
  Object.assign(personalInfo, associatedWith);

const isManager = id =>
  data.employees.some(({ managers }) => managers.find(i => i === id));

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
  if (species !== undefined) {
    return data.animals.find(ani => ani.name === species).residents.length;
  }
  const obj = {};
  data.animals.forEach(impar => {
    obj[impar.name] = impar.residents.length;
  });
  return obj;
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  return (
    [entrants, data.prices].reduce((soma, item) => item.Adult * soma, 1) +
    [entrants, data.prices].reduce((soma, item) => item.Child * soma, 1) +
    [entrants, data.prices].reduce((soma, item) => item.Senior * soma, 1)
  );
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  if (dayName === undefined){
    data.hours.forEach(Object.keys)
  }
  console.log(data.hours.forEach(element => element.Object.keys));
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
