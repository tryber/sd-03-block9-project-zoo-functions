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
  // seu código aqui
  const finder = dado => data.animals.find(animal => animal.id === dado);
  if (arguments.length === 0) return [];
  return (arguments.length === 1) ? Array.of(finder(...ids)) : [...ids].map(finder);
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const finder = dado => data.animals.find(ani => ani.name === dado);
  return finder(animal).residents.every(ida => ida.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (arguments.length === 0) return {};
  const findfirst = dado => data.employees.find(ani => ani.firstName === dado);
  const findlast = dado => data.employees.find(ani => ani.lastName === dado);
  return findfirst(employeeName) || findlast(employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { managers, responsibleFor } = associatedWith;
  const { firstName, id, lastName } = personalInfo;
  return { firstName, id, lastName, managers, responsibleFor };
}

function isManager(id) {
  // seu código aqui
  return data.employees.filter(coisa => coisa.managers === []);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ firstName, id, lastName, managers, responsibleFor });
  return data.employees;
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    const mapper = data.animals.map(ani => [ani.name, ani.residents.length]);
    return Object.fromEntries(mapper);
  }
  const finder = dado => data.animals.find(ani => ani.name === dado);
  return finder(species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult, Child, Senior } = { ...entrants };
  return (data.prices.Adult * Adult) + (data.prices.Child * Child) + (data.prices.Senior * Senior);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
  function fun(ar) {
    return (ar[1].open === ar[1].close) ? 'CLOSED' : `Open from ${ar[1].open}am until ${ar[1].close - 12}pm`;
  }
  const arr = Object.entries(data.hours);
  if (!dayName) {
    const obj = arr.map(ar => [ar[0], fun(ar)]);
    return Object.fromEntries(obj);
  }
  const ans = [[dayName, fun(arr.find(ar => ar[0] === dayName))]];
  return Object.fromEntries(ans);
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const finder = dado => data.employees.find(animal => animal.id === dado);
  const spec = finder(id).responsibleFor[0];
  const findid = dado => data.animals.find(animal => animal.id === dado);
  const arr = findid(spec).residents.sort((a, b) => a.age - b.age);
  return Object.values(arr[arr.length - 1]);
}

function increasePrices(percentage) {
  // seu código aqui
  const stat = 100 + percentage;
  data.prices.Adult = Math.ceil(data.prices.Adult * stat) / 100;
  data.prices.Child = Math.ceil(data.prices.Child * stat) / 100;
  data.prices.Senior = Math.ceil(data.prices.Senior * stat) / 100;
  return data.prices;
}

function employeeCoverage(idOrName) {
  // seu código aqui
  const find1 = dado => data.employees.find(ani => ani.firstName === dado);
  const findid = dado => data.employees.find(ani => ani.id === dado);
  const find2 = dado => data.employees.find(ani => ani.lastName === dado);
  const func = find1(idOrName) || findid(idOrName) || find2(idOrName);
  const opa = al => data.animals.find(ani => ani.id === al).name;
  if (!idOrName) {
    const arr = [];
    data.employees.forEach(a => arr.push([`${a.firstName} ${a.lastName}`, a.responsibleFor]));
    for (let i = 0; i < arr.length; i += 1) {
      arr[i][1] = arr[i][1].map(opa);
    }
    return Object.fromEntries(arr);
  }
  const nome = `${func.firstName} ${func.lastName}`;
  return Object.fromEntries([[nome, func.responsibleFor.map(opa)]]);
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
