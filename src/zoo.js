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


const animals = data.animals;

function animalsByIds(...ids) {
  let animaisFiltradosPorId = [];
  ids.forEach((id) => {
    animaisFiltradosPorId = [...animaisFiltradosPorId, ...animals.filter((animal) => {
      if (animal.id === id) return true;
      return false;
    })];
  });
  return animaisFiltradosPorId;
}

const animalsOlderThan = (animal, age) => data.animals.find(
  element => element.name === animal).residents.every(
    element => element.age > age);

const employeeByName = employeeName => data.employees.find(
  element => element.firstName === employeeName || element.lastName === employeeName) || {};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo, ...associatedWith });

const isManager = id =>
data.employees.some(el => el.managers.find(a => a === id));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

const animalCount = (species) => {
  if (species) {
    return data.animals.find(el => el.name === species).residents.length;
  }

  const animalslength = {};
  data.animals.forEach((el) => { animalslength[el.name] = el.residents.length; });
  return animalslength;
};

const entryCalculator = (entrants) => {
  if (entrants && Object.keys(entrants).length > 0) {
    return Object.keys(entrants).reduce((acc, el) => (acc + (data.prices[el] * entrants[el])), 0);
  }

  return 0;
};

const residName = (animal, sorted, sex) => {
  const obj = {};

  obj[animal] = data.animals.find(e => e.name === animal).residents;

  if (sex) obj[animal] = obj[animal].filter(bichos => bichos.sex === sex);

  obj[animal] = obj[animal].map(e => e.name);

  if (sorted) obj[animal].sort();
  return obj;
};

const animalMap = (options = {}) => {
  const { includeNames, sex, sorted } = options;
  const obj = {};
  data.animals.forEach((animal) => {
    obj[animal.location] = data.animals.filter(el => el.location === animal.location).map((el) => {
      if (!includeNames) return el.name;
      return residName(el.name, sorted, sex);
    });
  });
  return obj;
};

const retornaSchedule = day => ((day === 'Monday')
  ? 'CLOSED'
  : `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`);

const schedule = (dayName) => {
  const myobj = {};
  if (dayName) {
    myobj[dayName] = retornaSchedule(dayName);
    return myobj;
  }

  Object.keys(data.hours).forEach((el) => {
    myobj[el] = `Open from ${data.hours[el].open}am until ${data.hours[el].close - 12}pm`;
    if (el === 'Monday') myobj[el] = 'CLOSED';
  });

  return myobj;
};

const oldestFromFirstSpecies = id => Object.values(data.animals
  .find(el => el.id === data.employees
    .find(animal => animal.id === id).responsibleFor[0]).residents
  .sort((n1, n2) => n2.age - n1.age)[0]);

const increasePrices = (percentage) => {
  Object.keys(data.prices).forEach((el) => {
    (data.prices[el] = Math.round(data.prices[el] * ((percentage / 100) + 1) * 100) / 100);
  });
};

const employeeresponsible = (el) => {
  const obj = {};
  obj[`${el.firstName} ${el.lastName}`] = el.responsibleFor
    .map(id => data.animals
      .find(animal => animal.id === id).name);
  return obj;
};

const employeeCoverage = (idOrName) => {
  const myobj = {};
  if (idOrName) {
    Object.assign(myobj, employeeresponsible(data.employees
      .find(el => (
        (el.id === idOrName)
        || (el.firstName === idOrName)
        || (el.lastName === idOrName)
        ))));
    return myobj;
  }
  data.employees.forEach((e) => {
    Object.assign(myobj, employeeresponsible(e));
  });

  return myobj;
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
