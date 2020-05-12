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
  const result = ids.map(e => (ids === [] ? [] : data.animals.find(animal => animal.id === e)));
  return result;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find(
    employe => employe.firstName === employeeName,
  ) || data.employees.find(
    employe => employe.lastName === employeeName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  const { managers, responsibleFor } = associatedWith;
  const { firstName, id, lastName } = personalInfo;
  return { firstName, id, lastName, managers, responsibleFor };
}

function isManager(id) {
  const result = data.employees.some(e => e.managers.includes(id));
  return result;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id, firstName, lastName, managers, responsibleFor,
  };
  data.employees.push(employee);
  return employee;
}

function animalCount(species) {
  const allAnimals = {};
  data.animals.forEach(({ name, residents }) => {
    allAnimals[name] = residents.length;
  });
  if (!species) return allAnimals;
  const animalFinder = data.animals.find(({ name }) => name === species);
  return animalFinder.residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || !Object.keys(entrants).length) return 0;
  const pricesEntries = Object.entries(data.prices);
  const entrantsEntries = Object.entries(entrants);
  let payment = 0;
  entrantsEntries.forEach(([age, amount]) => {
    pricesEntries.forEach(([category, price]) => {
      if (category === age) payment += amount * price;
    });
  });
  return payment;
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
  const employee = data.employees.find(({ id: i }) => i === id);
  const firstAnimal = employee.responsibleFor[0];
  const animal = data.animals.find(({ id: i }) => i === firstAnimal);
  let older;
  animal.residents.reduce((acc, resident) => {
    if (resident.age > acc) {
      acc = resident.age;
      older = resident;
    }
    return acc;
  }, 0);
  return Object.values(older);
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
