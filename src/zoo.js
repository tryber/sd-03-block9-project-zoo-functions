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
  if (ids[0] === undefined) return [];
  const animals = data.animals;
  const buscaById = animals.filter(element => element.id === ids[0] || element.id === ids[1]);

  return buscaById;
}
// console.log(animalsByIds())
// animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce','e8481c1d-42ea-4610-8e11-1752cfc05a46');
// animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce');

function animalsOlderThan(especie, age) {
  const animals = data.animals;
  let bool = true;

  animals.forEach(element => {
    if (element.name === especie) {
      element.residents.forEach(arr => {
        if (arr.age < age) {
          bool = false;
        }
      });       
    }        
  }); 
  return bool; 
}
// console.log(animalsOlderThan('penguins', 10));

function employeeByName(employeeName) {
  const employees = data.employees;

  if (employeeName === undefined) {
    return {};
  }

  const employee = employees.find((element) => {
    if (employeeName === element.firstName || employeeName === element.lastName) {
      return element;
    }
  });
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  return {...personalInfo, ...associatedWith};
}

function isManager(id) {
  const employees = data.employees;
  let idManager = false;

  employees.find(element => {
    return element.managers.find(item => {
      if (item === id){
        idManager = true;
      }
    });
  });

  return idManager;
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
