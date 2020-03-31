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

const { animals, employees, prices } = data;

function animalsByIds(...ids) {
  if (ids) {
    return animals.filter(animal => ids.find(id => id === animal.id));
  }
  return [];
}

function animalsOlderThan(animal, age) {
  const especie = animals.find(({ name }) => name === animal);
  return especie.residents.every(({ age: animalAge }) => animalAge >= age);
}

function employeeByName(employeeName) {
  if (employeeName) {
    return employees.find(
      ({ firstName, lastName }) =>
        firstName === employeeName || lastName === employeeName,
    );
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(element =>
    element.managers.find(managerId => managerId === id),
  );
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  if (species) {
    return animals.find(animal => animal.name === species).residents.length;
  }
  const allAnimals = {};
  animals.forEach((animal) => {
    allAnimals[animal.name] = animal.residents.length;
  });
  return allAnimals;
}

function entryCalculator(entrants) {
  const { Adult: adultPrice, Senior: seniorPrice, Child: childPrice } = prices;
  if (entrants && Object.keys(entrants).length > 0) {
    const { Adult, Child, Senior } = entrants;
    return (Adult * adultPrice) + (Child * childPrice) + (Senior * seniorPrice);
  }
  return 0;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  const pessoa = employees.find(employee => employee.id === id);
  const responsible = animals
    .find(animal => animal.id === pessoa.responsibleFor[0])
    .residents.sort((a, b) => b.age - a.age);
  return [responsible[0].name, responsible[0].sex, responsible[0].age];
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
