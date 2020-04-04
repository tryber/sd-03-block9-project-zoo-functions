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
  const filterId = ids.map(id => data.animals.filter(animal => animal.id === id));
  const filterIdSemArrayEmCadaObjeto = [];
  for (let i = 0; i < filterId.length; i += 1) {
    filterIdSemArrayEmCadaObjeto.push(filterId[i][0]);
  }
  return filterIdSemArrayEmCadaObjeto;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const nomeEspecieFilter = data.animals.filter(item => item.name === animal);
  const idadeResidentesPorEspecie = nomeEspecieFilter[0].residents.map(item => item.age);
  return idadeResidentesPorEspecie.every(idade => idade >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  const funcD = data.employees;
  const funcR = funcD.filter(fc => fc.firstName === employeeName || fc.lastName === employeeName);
  return funcR[0];
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  // seu código aqui
  const result = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return result;
}

function isManager(id) {
  // seu código aqui
  const managersMap = data.employees.map(item => item.managers);
  const arrTest = [];
  for (let i = 0; i < managersMap.length; i += 1) {
    managersMap[i].forEach(element => arrTest.push(element));
  }
  const isManagerYn = arrTest.some(item => item === id);
  return isManagerYn;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function animalCount(species) {
  // seu código aqui
  if (species === undefined) {
    const objectAnimalsCount = {};
    for (let i = 0; i < data.animals.length; i += 1) {
      objectAnimalsCount[data.animals[i].name] = data.animals[i].residents.length;
    }
    return objectAnimalsCount;
  }
  const unicAnimalCountFilter = data.animals.filter(animal => animal.name === species);
  const unicAnimalCount = unicAnimalCountFilter[0].residents.length;
  return unicAnimalCount;
}

function entryCalculator(entrants) {
  // seu código aqui
  const arrayKeys = Object.keys(data.prices);
  const arrayPrices = [];
  for (let i = 0; i < arrayKeys.length; i += 1) {
    arrayPrices.push({ [arrayKeys[i]]: data.prices[arrayKeys[i]] });
  }
  let filterKey;
  let somaPreço = 0;
  const arrayKeysEntrants = Object.keys(entrants);
  for (let i = 0; i < arrayKeysEntrants.length; i += 1) {
    filterKey = arrayPrices.filter(item => item[arrayKeysEntrants[i]]);
    somaPreço += filterKey[0][arrayKeysEntrants[i]] * entrants[arrayKeysEntrants[i]];
  }
  return somaPreço;
}

function animalMap(options) {
  // seu código aqui
}

function objectHoursFunction() {
  const days = Object.keys(data.hours);
  const objectHours = {};
  for (let i = 0; i < days.length; i += 1) {
    if (days[i] === 'Monday') {
      objectHours[days[i]] = 'CLOSED';
    } else {
      objectHours[days[i]] = `Open from ${data.hours[days[i]].open}am until ${data.hours[days[i]].close - 12}pm`;
    }
  }
  return objectHours;
}

function schedule(dayName) {
  if (dayName === undefined) return objectHoursFunction();
  const objectDayHours = {};
  if (dayName === 'Monday') {
    objectDayHours[dayName] = 'CLOSED';
  } else {
    objectDayHours[dayName] = `Open from ${data.hours[dayName].open}am until ${data.hours[dayName].close - 12}pm`;
  }
  return objectDayHours;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const funcionario = data.employees.filter(item => item.id === id);
  const especieResponsavelId = funcionario[0].responsibleFor[0];
  const especieResponsavelObject = data.animals.filter(item => item.id === especieResponsavelId);
  const animalMaisVelho = especieResponsavelObject[0].residents.reduce((acc, item) => {
    if (acc.age > item.age) return acc;
    return item;
  });
  const arrayResult = [animalMaisVelho.name, animalMaisVelho.sex, animalMaisVelho.age];
  return arrayResult;
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
