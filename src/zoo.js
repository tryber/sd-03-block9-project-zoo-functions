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

const createEmployee = (personalInfo, associatedWith) => {
  return {
    ...personalInfo,
    ...associatedWith,
  };
};

const isManager = id => employees.some(element => element.managers.find(a => a === id));

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

const animalCount = (species) => animals.find(element => element.name === species).residents.length;

// console.log(animalCount('lions'));

// const entryCalculator = (entrants) => {
//   // seu código aqui
//   const visitantes = Object.values(entrants);
//   const precoTotal = null;
//   return visitantes;
// };

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
  // const arrayAnimalOlder = animaL.filter( older => older.age > 10);
  // return funcionario;
  // return animaL;
  // return arrayAnimalOlder;
  // return animaisOrdem
  // seu código aqui
};

// console.log(oldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

// const increasePrices = (percentage) => {
//   // seu código aqui
//   let newPrices = 0;
//   for (p in prices.values) {
//     newPrices = p * (percentage / 100);
//   }
//   return newPrices;
// };

// console.log(increasePrices(30));

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
