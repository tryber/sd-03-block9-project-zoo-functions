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
  return data.animals.filter(animal => ids.find(id => id === animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return data.animals
    .find(({ name }) => name === animal)
    .residents.every(({ age: animalAge }) => animalAge >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return data.employees.find(el => el.firstName === employeeName || el.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees
  .some(({ managers }) => managers
    .some(managerId => managerId === id));
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
  if (!species) {
    const nomes = data.animals.map(el => `${el.name}`);
    const qtds = data.animals.map(el => el.residents.length);
    const result = {};
    for (let i = 0; i < nomes.length; i += 1) {
      result[nomes[i]] = qtds[i];
    }
    return result;
  }
  const filtro = data.animals.filter(el => el.name === species);
  const resultado = filtro.map(el => el.residents.length);
  return resultado[0];
}

function entryCalculator(entrants) {
  // seu código aqui
  const { Adult: adultPrice, Senior: seniorPrice, Child: childPrice } = data.prices;
  if (entrants && Object.keys(entrants).length > 0) {
    const { Adult, Child, Senior } = entrants;
    return (Adult * adultPrice) + (Child * childPrice) + (Senior * seniorPrice);
  }
  return 0;
}

function getLocation(animals) {
  return animals.map(({ location }) => location)
  .reduce((obj, elem) => {
    obj[elem] = [];
    return obj;
  }, {});
}

function putNames(name, residents, { sex = '', sorted = false }) {
  const specieNames = {};
  if (specieNames[name] === undefined) specieNames[name] = [];
  specieNames[name] = residents
  .filter(({ sex: animalSex }) => (sex === '' || sex === animalSex))
  .map(({ name: animalName }) => animalName);

  if (sorted === true) specieNames[name].sort();

  return specieNames;
}

function animalMap(options = {}) {
  // seu código aqui
  const { includeNames = false, ...restOptions } = options;
  const info = getLocation(data.animals);

  data.animals.forEach(({ name, location, residents }) => {
    if (includeNames === true) name = putNames(name, residents, restOptions);
    info[location].push(name);
  });

  return info;
}

const pickDay = (day) => {
  if (day === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
};

function schedule(dayName) {
  // seu código aqui
  const dayObject = {};
  if (dayName) {
    dayObject[dayName] = pickDay(dayName);
    return dayObject;
  }
  Object.keys(data.hours).forEach((day) => {
    dayObject[day] = pickDay(day);
  });
  return dayObject;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  return Object.values(data.animals
    .find(el => el.id === data.employees
      .find(animal => animal.id === id).responsibleFor[0]).residents
    .sort((first, second) => second.age - first.age)[0]);
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
