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

const animalsByIds = (...ids) => data.animals.filter(animId => ids.find(id => id === animId.id));

const animalsOlderThan = (animal, age) => data.animals.find(anim => anim.name === animal).residents
.every(animIdade => animIdade.age > age);

const employeeByName = employeeName => (employeeName === undefined ? {} : data.employees
  .find(e => e.firstName === employeeName || e.lastName === employeeName));

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

const isManager = id => data.employees.some(({ managers }) => managers.find(i => i === id));

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

const animalCount = (species) => {
  if (species !== undefined) {
    return data.animals.find(a => a.name === species).residents.length;
  }
  const obj = {};
  data.animals.forEach((e) => { obj[e.name] = e.residents.length; });
  return obj;
};

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  {
    const valores = [entrants, data.prices];
    const teste = valores.reduce((soma, item) => item.Adult * soma, 1) +
    valores.reduce((soma, item) => item.Child * soma, 1) +
    valores.reduce((soma, item) => item.Senior * soma, 1);
    return teste;
  }
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
      acc[day] = `Open from ${open} am until ${close - 12} pm`;
    }
    return console.log(acc), acc;
  }, {});
  if (dayName){ const unica = {}
  unica[dayName] = test[dayName]
  return console.log(unica);
  }
}
schedule('Monday');

const oldestFromFirstSpecies = (id) => {
  const emp = data.employees.find(n => n.id === id).responsibleFor[0];
  return Object.values(data.animals.find(m => m.id === emp).residents
  .sort((a, b) => b.age - a.age)[0]);
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
