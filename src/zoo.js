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
  const compare = (item, toCompare) => toCompare.includes(item);
  return data.animals.filter(({ id }) => compare(id, ids));
};

const animalsOlderThan = (animal, agep) =>
  data.animals.find(({ name }) => name === animal).residents.every(({ age }) => age > agep);

const employeeByName = (employeeName) => {
  if (!employeeName) return {};
  return data.employees.find(
    employee => employee.firstName === employeeName || employee.lastName === employeeName,
  );
};

const createEmployee = (personalInfo, associatedWith) => {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
};

const isManager = id => Boolean(data.employees.find(({ managers }) => managers.includes(id)));

const addEmployee = (id, firstName, lastName, managers, responsibleFor) => {
  data.employees.push({
    id, firstName, lastName, managers, responsibleFor,
  });
};

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

const makeDay = (day) => {
  function legibleHour(hour) {
    if (hour < 12) return `${hour}am`;
    if (hour === 12) return '12pm';
    return `${hour - 12}pm`;
  }

  if (data.hours[day].open === data.hours[day].close) return 'CLOSED';
  return `Open from ${legibleHour(data.hours[day].open)} until ${legibleHour(
    data.hours[day].close,
  )}`;
};

const schedule = (dayName) => {
  if (dayName) return { [dayName]: makeDay(dayName) };
  return Object.keys(data.hours)
  .reduce((scheduleObject, day) => ({ ...scheduleObject, ...{ [day]: makeDay(day) } }), {});
};

const oldestFromFirstSpecies = id => Object.values(data.animals
.find(e => e.id === data.employees
.find(animal => animal.id === id).responsibleFor[0]).residents
.sort((a, b) => b.age - a.age)[0]);

function increasePrices(percentage) {
  // seu código aqui
}

const employeeCoverage = (idOrName) => {
  const obj = {};

  const findResponsibleForAnimals = (e) => {
    const asw = {};
    asw[`${e.firstName} ${e.lastName}`] = e.responsibleFor
    .map(id => data.animals
    .find(animal => animal.id === id).name);
    return asw;
  };

  if (idOrName) {
    Object.assign(obj, findResponsibleForAnimals(data.employees
    .find(e => ((
      e.id === idOrName)
      || (e.firstName === idOrName)
      || (e.lastName === idOrName)))));
    return obj;
  }
  data.employees.forEach((e) => {
    Object.assign(obj, findResponsibleForAnimals(e));
  });
  return obj;
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
