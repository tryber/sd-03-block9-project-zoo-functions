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
  const arr = [];
  ids.forEach((id) => {
    arr.push(...data.animals
      .filter(({ id: animalId }) => {
        if (animalId === id) return true;
        return false;
      }));
  });
  return arr;
}

function animalsOlderThan(animal, age) {
  return data.animals
    .find(({ name }) => name === animal)
    .residents.every(({ age: animalAge }) => animalAge >= age);
}

function employeeByName(employeeName) {
  const person = {};
  const finded = data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);

  return Object.assign(person, finded);
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign({}, personalInfo, associatedWith);
}

function isManager(id) {
  return data.employees
    .some(({ managers }) => managers
      .some(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
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
  const animalsQntd = {};
  data.animals.forEach(({ name, residents }) => {
    animalsQntd[name] = residents.length;
  });

  return (species !== undefined) ? animalsQntd[species] : animalsQntd;
}

function entryCalculator(entrants = {}) {
  let total = 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;

  total += Adult * data.prices.Adult;
  total += Child * data.prices.Child;
  total += Senior * data.prices.Senior;

  return total;
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
  const { includeNames = false, ...restOptions } = options;
  const info = getLocation(data.animals);

  data.animals.forEach(({ name, location, residents }) => {
    if (includeNames === true) name = putNames(name, residents, restOptions);
    info[location].push(name);
  });

  return info;
}

function newHour(num) {
  let frase;

  if (num <= 12 && num > 0) {
    frase = `${num}am`;
  } else if (num <= 24 && num > 12) {
    frase = `${num - 12}pm`;
  }

  return frase;
}

function schedule(dayName) {
  const legible = (obj, [day, { open, close }]) => {
    let frase;

    if (open === 0 && close === 0) frase = 'CLOSED';
    else frase = `Open from ${newHour(open)} until ${newHour(close)}`;

    return Object.assign(obj, { [day]: frase });
  };

  const hours = data.hours;
  const legibleSchedule = {};

  if (dayName === undefined) {
    Object.entries(hours).reduce(legible, legibleSchedule);
  } else if (dayName) {
    const { open, close } = hours[dayName];
    legible(legibleSchedule, [dayName, { open, close }]);
  }

  return legibleSchedule;
}

function oldestFromFirstSpecies(id) {
  const firstAnimalId = data.employees.find(
    ({ id: employeeId }) => id === employeeId)
    .responsibleFor[0];
  const specieResidents = data.animals.find(
    ({ id: animalId }) => animalId === firstAnimalId)
    .residents;
  const oldestAnimal = specieResidents.sort(
    ({ age: ageA }, { age: ageB }) => ageB - ageA)[0];

  return Object.values(oldestAnimal);
}

function increasePrices(percentage) {
  Object.keys(data.prices).reduce((obj, elem) => {
    obj[elem] = Math.round((obj[elem] * (100 + percentage)).toFixed(2)) / 100;
    return obj;
  }, data.prices);
}

function speciesNames(idArr) {
  return idArr.map(idFromEmployee => data.animals
  .find(({ id: idFromAnimal }) => idFromEmployee === idFromAnimal).name);
}

function employeeCoverage(idOrName) {
  const employeeAnimals = {};
  let employee = '';

  if (idOrName === undefined) {
    return data.employees.reduce((obj, { firstName, lastName, responsibleFor }) => {
      obj[`${firstName} ${lastName}`] = speciesNames(responsibleFor);
      return obj;
    }, employeeAnimals);
  }

  const speciesId = data.employees.find(({ id, firstName, lastName }) => {
    if (idOrName === id || idOrName === firstName || idOrName === lastName) {
      employee = `${firstName} ${lastName}`;
      return true;
    }

    return false;
  }).responsibleFor;

  return { [employee]: speciesNames(speciesId) };
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
