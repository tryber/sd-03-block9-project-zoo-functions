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

function animalsByIds(...ids) { // https://www.geeksforgeeks.org/javascript-rest-operator/
  return data.animals.filter(animal => ids.find(id => id === animal.id));
}

function animalsOlderThan(animal, age) {
  return data.animals.find(
    species => species.name === animal).residents.every(age1 => age1.age > age);
}

function employeeByName(employeeName) {
  return data.employees.find(
    name => name.firstName === employeeName || name.lastName === employeeName) || {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(
    occupation => occupation.managers.find(manager => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (species) {
    return data.animals.find(animal => animal.name === species).residents.length;
  }
  const quantityOnly = {};
  data.animals.forEach((animal) => { quantityOnly[animal.name] = animal.residents.length; });
  return quantityOnly;
}

function entryCalculator(entering) {
  return entering && Object.keys(entering).length > 0
  ? Object.keys(entering)
    .reduce((kind, quantity) => (kind + (data.prices[quantity] * entering[quantity])), 0)
  : 0;
}

function residents(animal, sorted, sex) {
  const object = {};
  object[animal] = data.animals
      .find(element => element.name === animal).residents;
  if (sex) object[animal] = object[animal].filter(resident => resident.sex === sex);
  object[animal] = object[animal].map(({ name }) => name);
  if (sorted) object[animal].sort();
  return object;
}

const animalMap = (options = {}) => {
  const { sex, sorted, includeNames } = options;
  return data.animals.reduce((object, { name, location }) => {
    if (!object[location]) object[location] = [];
    if (!includeNames) {
      object[location].push(name);
    } else {
      object[location].push(residents(name, sorted, sex));
    }
    return object;
  }, {});
}

const readableCalendar = day => ((day === 'Monday')
  ? 'CLOSED'
  : `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`);

function schedule(day) {
  const schedule1 = {};
  if (day) {
    schedule1[day] = readableCalendar(day);
    return schedule1;
  }
  Object.keys(data.hours).forEach((el) => { schedule1[el] = readableCalendar(el); });
  return schedule1;
}

function oldestFromFirstSpecies(id) {
  return Object.values(data.animals
    .find(el => el.id === data.employees
      .find(animal => animal.id === id).responsibleFor[0]).residents
    .sort((first, second) => second.age - first.age)[0]);
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((value) => {
    (data.prices[value] = Math.round(data.prices[value] * (1 + (percentage / 100)) * 100) / 100); // https://metring.com.br/arredondar-numero-em-javascript
  });
}

const responsible = (name) => {
  const complete = {};
  complete[`${name.firstName} ${name.lastName}`] = name.responsibleFor
    .map(id => data.animals
      .find(animal => animal.id === id).name);
  return complete;
};

const employeeCoverage = (idName) => {
  const object = {};
  if (idName) {
    Object.assign(object, responsible(data.employees
      .find(element => ((
        element.id === idName)
        || (element.firstName === idName) || (element.lastName === idName)))));
    return object;
  }
  data.employees.forEach((i) => {
    Object.assign(object, responsible(i));
  });
  return object;
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
