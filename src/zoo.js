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
  if (ids) {
    const animals = data.animals;
    return animals.filter(animal => ids.find(id => id === animal.id));
  }
  return [];
}

const animalsOlderThan = (animal, age) => {
  const { animals } = data;
  const especie = animals.find(element => element.name === animal);
  return especie.residents.every(element => element.age >= age);
};

const employeeByName = (employeeName) => {
  const employees = data.employees;
  const test = employees.find(teste => teste.firstName === employeeName
    || teste.lastName === employeeName)
    || {};
  return test;
};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

function isManager(id) {
  const employees = data.employees;
  return employees.some(element =>
    element.managers.find(managerId => managerId === id),
  );
}

const employees = data.employees;
const addEmployee =
  (id, firstName, lastName, managers = [], responsibleFor = []) => employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });

const animalCount = (species) => {
  const animals = data.animals;
  if (species) {
    return animals.find(animal => animal.name === species).residents.length;
  }
  const todosAnimais = {};
  animals.forEach((animal) => {
    todosAnimais[animal.name] = animal.residents.length;
  });
  return todosAnimais;
};

const entryCalculator = (entrants) => {
  const prices = data.prices;
  const { Adult: adultPrice, Senior: seniorPrice, Child: childPrice } = prices;
  if (entrants && Object.keys(entrants).length > 0) {
    const { Adult, Child, Senior } = entrants;
    return (Adult * adultPrice) + (Child * childPrice) + (Senior * seniorPrice);
  }
  return 0;
};

function animalMap(options) {
  // seu código aqui
}

const legibleSchedule = (dia) => {
  return ((dia === 'Monday')
  ? 'CLOSED'
  : `Open from ${data.hours[dia].open}am until ${data.hours[dia].close - 12}pm`)};
const schedule = (dayName) => {
  const sch = {};
  if (dayName) {
    sch[dayName] = legibleSchedule(dayName);
    return sch;
  }
  Object.keys(data.hours).forEach((e) => { sch[e] = legibleSchedule(e); });
  return sch;
};

const oldestFromFirstSpecies = (id) => {
  const animals = data.animals;
  const funcionario = employees.find(employee => employee.id === id);
  const responsible = animals
    .find(animal => animal.id === funcionario.responsibleFor[0])
    .residents.sort((a, b) => b.age - a.age);
  return [responsible[0].name, responsible[0].sex, responsible[0].age];
};

const increasePrices = (percentage) => {
  Object.keys(data.prices).forEach((e) => {
    (data.prices[e] = Math.round(data.prices[e] * ((percentage / 100) + 1) * 100) / 100);
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
