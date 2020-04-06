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

const animalsByIds = (...ids) => (
  ids ? ids.map(id => (
    data.animals.reduce((acc, animal) => (
      animal.id === id ? animal : acc
    ), null)
  )) : []
);

const animalsOlderThan = (animal, age) => {
  let maxAge = false;
  data.animals.forEach((especie) => {
    if (especie.name === animal) {
      maxAge = especie.residents.every(animais => animais.age >= age);
    }
  });
  return maxAge;
};

const employeeByName = employeeName => (
  employeeName ? data.employees.reduce((acc, cuidador) => (
    employeeName === cuidador.firstName || employeeName === cuidador.lastName ? cuidador : acc
  ), null) : {}
);

const createEmployee = (personalInfo, associatedWith) =>
  Object.assign(personalInfo, associatedWith);

const isManager = id =>
  data.employees.some(cuidador =>
  cuidador.managers.includes(id) === true,
  );

const addEmployee = (id, firstName, lastName, managers, responsibleFor) =>
  data.employees.push({
    id,
    firstName,
    lastName,
    managers: managers || [],
    responsibleFor: responsibleFor || [],
  });

const animalCount = species => (
  species
    ? data.animals.reduce(
      (acc, animal) => (
        animal.name === species
          ? animal.residents.length
          : acc
      ),
      0,
    )
    : data.animals.reduce(
      (acc, qtdanimal) => {
        acc[qtdanimal.name] = qtdanimal.residents.length;
        return acc;
      },
      {},
    )
);

const entryCalculator = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const keys = Object.keys(entrants);
  return keys.reduce((acc, keyEntrants) => {
    acc += entrants[keyEntrants] * data.prices[keyEntrants];
    return acc;
    },
    0,
  );
};

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
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
