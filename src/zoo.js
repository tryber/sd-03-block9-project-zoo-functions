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
  data.animals.find(a => a.name === animal).residents.every(a => a.age > age);

const employeeByName = employeeName =>
  data.employees.find(
    e => e.firstName === employeeName || e.lastName === employeeName,
  ) || {};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = id => data.employees.some(e => e.managers.find(i => i === id));

class Employee {
  constructor(id, firstName, lastName, managers = [], responsibleFor = []) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.managers = managers;
    this.responsibleFor = responsibleFor;
  }
}

const addEmployee = (...args) => data.employees.push(new Employee(...args));

const animalCount = (species) => {
  if (species) {
    return data.animals.find(a => a.name === species).residents.length;
  }
  const asw = {};
  data.animals.forEach((a) => { asw[a.name] = a.residents.length; });
  return asw;
};

const entryCalculator = entrants => (entrants && Object.keys(entrants).length > 0
  ? Object.keys(entrants).reduce((a, e) => (a + (data.prices[e] * entrants[e])), 0)
  : 0
);

const getResidentsName = (animal, sorted, sex) => {
  const obj = {};
  obj[animal] = data.animals
    .find(e => e.name === animal).residents;
  if (sex) obj[animal] = obj[animal].filter(bichos => bichos.sex === sex);
  obj[animal] = obj[animal].map(e => e.name);
  if (sorted) obj[animal].sort();
  return obj;
};

const animalMap = (options = {}) => {
  const { includeNames, sex, sorted } = options;
  const asw = {};
  data.animals.forEach(animal => {
    asw[animal.location] = data.animals.filter(e => e.location
    === animal.location).map(e => {
      if (!includeNames) return e.name;
      return getResidentsName(e.name, sorted, sex);
    });
  });
  return asw;
};

const legibleSchedule = day => ((day === 'Monday')
  ? 'CLOSED'
  : `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`);

const schedule = (dayName) => {
  const sch = {};
  if (dayName) {
    sch[dayName] = legibleSchedule(dayName);
    return sch;
  }
  Object.keys(data.hours).forEach((e) => { sch[e] = legibleSchedule(e); });
  return sch;
};

const oldestFromFirstSpecies = id => Object.values(data.animals
  .find(e => e.id === data.employees
    .find(animal => animal.id === id).responsibleFor[0]).residents
  .sort((a, b) => b.age - a.age)[0]);

const increasePrices = (percentage) => {
  Object.keys(data.prices).forEach((e) => {
    (data.prices[e] = Math.round(data.prices[e] * ((percentage / 100) + 1) * 100) / 100);
  });
};

const employeeCoverage = (idOrName) => {
};

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
