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

// seu código aqui
function animalsByIds(...ids) {
  const result = ids.map(e => (ids === [] ? [] : data.animals.find(animal => animal.id === e)));
  return result;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
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

function animalMap(options = {}) {
  const getNames = (animal, sorted, sex) => {
    const getResidents = {};
    getResidents[animal] = data.animals.find(({ name }) => name === animal).residents;
    if (sex) getResidents[animal] = getResidents[animal].filter(residents => residents.sex === sex);
    getResidents[animal] = getResidents[animal].map(({ name }) => name);
    if (sorted) getResidents[animal].sort();
    return getResidents;
  };
  const { includeNames, sorted, sex } = options;
  return data.animals.reduce((acc, { name, location }) => {
    if (!acc[location]) acc[location] = [];
    if (includeNames) {
      acc[location].push(getNames(name, sorted, sex));
    } else {
      acc[location].push(name);
    }
    return acc;
  }, {});
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
  const coverageById = data.employees.reduce((acc, employee) => {
    const fullName = `${employee.firstName} ${employee.lastName}`;
    acc[fullName] = employee.responsibleFor.map((id, name) => {
      name = data.animals.find(animal => animal.id === id).name;
      return name;
    });

    return acc;
  }, {});
  const test = data.employees.reduce((acc, emplo) => {
    if (idOrName === emplo.id || idOrName === emplo.firstName || idOrName === emplo.lastName) {
      const newFullName = `${emplo.firstName} ${emplo.lastName}`;
      acc[newFullName] = coverageById[newFullName];
    }
    return acc;
  }, {});


  if (idOrName) { return test; }
  return coverageById;
}

employeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad');

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
