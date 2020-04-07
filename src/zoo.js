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
  // seu código aqui
  if (ids === undefined) return [];
  const identifiedAnimals = [];
  // {id} é um object destructing;
  const animalsData = animalsIds =>
    data.animals.find(({ id }) => animalsIds === id);
  ids.forEach(id => identifiedAnimals.push(animalsData(id)));

  return identifiedAnimals;
};

const animalsOlderThan = (animal, animalAge) =>
  // seu código aqui
  data.animals
    .find(({ name }) => animal === name)
    .residents.every(({ age }) => age >= animalAge);

const employeeByName = (employeeName) => {
  // seu código aqui
  if (employeeName === undefined) return {};
  return data.employees.find(
    employees =>
      employeeName === employees.firstName ||
      employeeName === employees.lastName,
  );
};

const createEmployee = (personalInfo, associatedWith) => ({
  // seu código aqui
  ...personalInfo,
  ...associatedWith,
});

const isManager = id =>
  // seu código aqui
  data.employees.some(({ managers }) => managers.includes(id));

const addEmployee = (
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) =>
  data.employees.push({
    // seu código aqui
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });

const animalCount = (species) => {
  // seu código aqui
  if (species) {
    return data.animals.find(({ name }) => name === species).residents.length;
  }
  return data.animals.reduce((counter, animal) => {
    counter[animal.name] = animal.residents.length;
    return counter;
  }, {});
};

const entryCalculator = entrants =>
  // seu código aqui
  (entrants && Object.keys(entrants).length > 0
    ? Object.keys(entrants).reduce(
        (accumulator, entrant) =>
          accumulator + (data.prices[entrant] * entrants[entrant]),
        0,
      )
    : 0
    );


function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

const increasePrices = percentage =>
  // seu código aqui
  Object.keys(data.prices).map((index) =>
    data.prices[index] =
        Math.round(data.prices[index] * ((percentage / 100) + 1) * 100) / 100
  );


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
