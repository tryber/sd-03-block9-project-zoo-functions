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

const animalsByIds = (...ids) => {
  if (ids.length === 0) {
    return [];
  }
  return animals.filter(element => ids.find(id => id === element.id));
};

const animalsOlderThan = (animal, age) =>
  animals.find(group => group.name === animal)
  .residents.every(element => element.age >= age);


const employeeByName = (employeeName) => {
  if (typeof employeeName !== 'string') {
    return {};
  }

  return employees.find(employee => employee.firstName ===
  employeeName || employee.lastName === employeeName);
};

const createEmployee = (personalInfo, associatedWith) => {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
};

const isManager = id => employees.map(obj => obj.managers)
.some(element => element.find(manager => manager === id));

const addEmployee = (id, firstName, lastName, managers, responsibleFor) => {
  if (Array.isArray(managers) === false) {
    managers = [];
  }

  if (Array.isArray(responsibleFor) === false) {
    responsibleFor = [];
  }

  const lastEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(lastEmployee);
};

const animalCount = (species) => {
  if (typeof species !== 'string') {
    return {
      lions: 4,
      tigers: 2,
      bears: 3,
      penguins: 4,
      otters: 4,
      frogs: 2,
      snakes: 2,
      elephants: 4,
      giraffes: 6,
    };
  }
  return animals
    .find(element => element.name === species).residents.length;
};

const entryCalculator = (entrants) => {
  if (typeof entrants !== 'object' || Object.keys(entrants).length === 0) {
    return 0;
  }

  const { Adult, Senior, Child } = entrants;

  return (Adult * 49.99) + (Senior * 24.99) + (Child * 20.99);
};

function animalMap(options) {
  // seu código aqui
}

const DayHours = () => {
  const days = Object.keys(data.hours);
  const hoursString = {};
  for (let i = 0; i < days.length; i += 1) {
    if (days[i] === 'Monday') {
      hoursString[days[i]] = 'CLOSED';
    } else {
      hoursString[days[i]] = `Open from ${data.hours[days[i]].open}am until ${data.hours[days[i]].close - 12}pm`;
    }
  }
  return hoursString;
};

const schedule = (dayName) => {
  if (dayName === undefined) return DayHours();
  const hoursStringObject = {};
  if (dayName === 'Monday') {
    hoursStringObject[dayName] = 'CLOSED';
  } else {
    hoursStringObject[dayName] = `Open from ${data.hours[dayName].open}am until ${data.hours[dayName].close - 12}pm`;
  }
  return hoursStringObject;
};

const oldestFromFirstSpecies = id =>
  Object.values(animals.find(element => element.id === employees
  .find(anim => anim.id === id).responsibleFor[0]).residents
  .sort((r1, r2) => r2.age - r1.age)[0]);

const increasePrices = (percentage) => {
  Object.keys(prices).forEach((i) => {
    (prices[i] = Math.round(data.prices[i] * ((percentage / 100) + 1) * 100) / 100);
  });
};

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
