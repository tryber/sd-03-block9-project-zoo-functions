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

const animalsByIds = (...ids) => {
  if (!ids) return [];
  const group =
    data.animals.filter(idItem => ids.includes(idItem.id));
  return group;
};

const animalsOlderThan = (animal, age) => {
  const checkAnimals =
    data.animals.find(item => item.name === animal)
                .residents.every(itemAge => itemAge.age >= age);
  return checkAnimals;
};

const employeeByName = (employeeName) => {
  if (!employeeName) return {};
  const employeeSearch =
    data.employees.find(item => item.firstName === employeeName || item.lastName === employeeName);
  return employeeSearch;
};

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

const isManager = (id) => {
  const manager =
    data.employees.find(employee => employee.managers.includes(id));
  return !!manager;
};

const addEmployee = (id, firstName, lastName, managers, responsibleFor) => {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers: managers || [],
    responsibleFor: responsibleFor || [],
  };
  return data.employees.push(newEmployee);
};

const animalCount = (species) => {
  if (!species) {
    const allSpecies = {};
    data.animals.forEach((animal) => {
      allSpecies[animal.name] = animal.residents.length;
    });
    return allSpecies;
  }
  const oneSpecie =
    data.animals.find(animal => animal.name.includes(species)).residents.length;
  return oneSpecie;
};

const entryCalculator = (entrants) => {
  if (!entrants || Object.keys(entrants).lenght === 0) return 0;
  const { Adult: aPrice, Senior: sPrice, Child: cPrice } = data.prices;
  const { Adult, Senior, Child } = entrants;
  return (aPrice * Adult) + (sPrice * Senior) + (cPrice * Child);
};

function animalMap(options) {
  // seu código aqui
}

const schedule = (dayName) => {
//   if (!dayName) {
//     const allSchedule = {};
//       data.hours.forEach((day) => {
//         allSchedule[day] = `${Object.keys[0]}`
//       })
//   }
};

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
