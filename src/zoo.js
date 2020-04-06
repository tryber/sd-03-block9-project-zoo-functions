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

const animalsByIds = (...ids) => animals.filter(animal => ids.find(id => id === animal.id));

const animalsOlderThan = (animal, age) => {
  const findAnimal = animals.find(element => element.name === animal);
  const searchAge = findAnimal.residents.every(element => element.age >= age);
  return searchAge;
};

const employeeByName = (employeeName) => {
  if (employeeName) {
    return employees.find(element => element.firstName === employeeName
      || element.lastName === employeeName);
  }
  return {};
};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = id => employees.some(element => element.managers.find(a => a === id));

// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

const animalCount = species => animals.find(element => element.name === species).residents.length;

// console.log(animalCount('lions'));

const entryCalculator = (entrants) => {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const visitantesArray = Object.entries(entrants);
  const valorAdult = visitantesArray[0][1] * 49.99;
  const valorChild = visitantesArray[1][1] * 20.99;
  const valorSenior = visitantesArray[2][1] * 24.99;
  const valorTotal = valorAdult + valorSenior + valorChild;
  return valorTotal;
};

// console.log(entryCalculator({}));

// console.log(entryCalculator({ 'Adult': 2, 'Child': 3, 'Senior': 1 }));

const oldestFromFirstSpecies = (id) => {
  const funcionario = employees.find(fun => fun.id === id).responsibleFor[0];
  const animaL = animals.find(codigo => codigo.id === funcionario).residents;
  const animaisOrdem = animaL.sort((a, b) => {
    if (a.age < b.age) return 1;
    if (a.age > b.age) return -1;
    return 0;
  });
  return Object.values(animaisOrdem[0]);
  // return funcionario;
  // return animaL;
  // return animaisOrdem
};

// console.log(oldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

const increasePrices = (percentage) => {
  const arrayPrices = Object.entries(prices);
//  console.log('Array com preço atual:\n', arrayPrices);
  const newArrayPrices = arrayPrices.map(([key, val]) =>
    [key, Math.round(((val + ((val * percentage) / 100)) * 100)) / 100]);
//  console.log('Array com novos preços:\n', newArrayPrices);

  // seu código aqui
  const obj = Object.fromEntries(newArrayPrices);
// console.log('novos preços como objeto:');

  return obj;
};

// console.log(increasePrices(100));  // {'adult': x, 'Senior': x,}

function schedule(dayName) {
  // seu código aqui
}

function animalMap(options) {
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
