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
  data.animals
    .find(animals => animals.name === animal)
    .residents.every(idade => idade.age >= age);

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const employee = data.employees.find(
    nome => nome.firstName === employeeName || nome.lastName === employeeName,
  );
  return employee;
}

const createEmployee = (personalInfo, associatedWith) =>
  Object.assign(personalInfo, associatedWith);

const isManager = id =>
  data.employees.some(({ managers }) => managers.find(i => i === id));

const addEmployee = (
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) => {
  const x = { id, firstName, lastName, managers, responsibleFor };
  return data.employees.push(x);
};

function animalCount(species) {
  if (species !== undefined) {
    return data.animals.find(ani => ani.name === species).residents.length;
  }
  const obj = {};
  data.animals.forEach((impar) => {
    obj[impar.name] = impar.residents.length;
  });
  return obj;
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  return (
    [entrants, data.prices].reduce((soma, item) => item.Adult * soma, 1) +
    [entrants, data.prices].reduce((soma, item) => item.Child * soma, 1) +
    [entrants, data.prices].reduce((soma, item) => item.Senior * soma, 1)
  );
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const aux = Object.entries(data.hours);
  const test = aux.reduce((acc, [day, { open, close }]) => {
    if (open === 0 && close === 0) {
      acc[day] = 'CLOSED';
    } else {
      acc[day] = `Open from ${open}am until ${close - 12}pm`;
    }
    return acc;
  }, {});
  if (dayName) {
    const unica = {};
    unica[dayName] = test[dayName];
    return unica;
  }
  return test;
}

const oldestFromFirstSpecies = (id) => {
  const emp = data.employees.find(n => n.id === id).responsibleFor[0];
  return Object.values(
    data.animals.find(m => m.id === emp).residents.sort((a, b) => b.age - a.age)[0],
  );
};

function increasePrices(percentage) {
  const client = [data.prices.Adult, data.prices.Senior, data.prices.Child];
  const val = Object.keys(data.prices);
  client.forEach((a, b) => {
    data.prices[val[b]] = (Math.round((a * (1 + (percentage / 100))) * 100)) / 100;
  });
  return data.prices;
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
