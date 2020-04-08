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

const data = require("./data");

const animalsByIds = (...ids) =>
  data.animals.filter((animal) => ids.find((id) => id === animal.id));

const animalsOlderThan = (animal, age) =>
  data.animals
    .find((a) => a.name === animal)
    .residents.every((a) => a.age > age);

const employeeByName = (employeeName) =>
  data.employees.find(
    (e) => e.firstName === employeeName || e.lastName === employeeName
  ) || {};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = (id) =>
  data.employees.some((e) => e.managers.find((i) => i === id));

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = []
) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

const animalCount = (species) => {
  if (species) {
    return data.animals.find((el) => el.name === species).residents.length;
  }

  const animalslength = {};
  data.animals.forEach((el) => {
    animalslength[el.name] = el.residents.length;
  });
  return animalslength;
};

const entryCalculator = (entrants) => {
  if (entrants && Object.keys(entrants).length > 0) {
    return Object.keys(entrants).reduce(
      (acc, el) => acc + data.prices[el] * entrants[el],
      0
    );
  }

  return 0;
};

const residName = (animal, sorted, sex) => {
  const obj = {};

  obj[animal] = data.animals.find((e) => e.name === animal).residents;

  if (sex) obj[animal] = obj[animal].filter((bichos) => bichos.sex === sex);

  obj[animal] = obj[animal].map((e) => e.name);

  if (sorted) obj[animal].sort();
  return obj;
};

const animalMap = (options = {}) => {
  const { includeNames, sex, sorted } = options;
  const obj = {};
  data.animals.forEach((animal) => {
    obj[animal.location] = data.animals
      .filter((el) => el.location === animal.location)
      .map((el) => {
        if (!includeNames) return el.name;
        return residName(el.name, sorted, sex);
      });
  });
  return obj;
};

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  const firstAnimalId = data.employees.find(
    ({ id: employeeId }) => id === employeeId
  ).responsibleFor[0];
  const specieResidents = data.animals.find(
    ({ id: animalId }) => animalId === firstAnimalId
  ).residents;
  const oldestAnimal = specieResidents.sort(
    ({ age: ageA }, { age: ageB }) => ageB - ageA
  )[0];

  return Object.values(oldestAnimal);
}

const increasePrices = (percentage) => {
  Object.keys(data.prices).forEach((el) => {
    data.prices[el] =
      Math.round(data.prices[el] * (percentage / 100 + 1) * 100) / 100;
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
