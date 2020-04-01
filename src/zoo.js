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

const getLocations = () => {
  return animals.map(({ location }) => location).reduce((acc, location) => {
    if (acc[location] === undefined) {
      acc[location] = [];
    }
    return acc;
  }, {});
}

const addAnimals = (animalsLocation) => {
  return animals.forEach(({ name, location }) => animalsLocation[location].push(name));
};

function animalMap(options) {
  const animalsLocation = getLocations();
  if (options && options[includeNames] !== undefined) {
    return true;
  }
  return addAnimals(animalsLocation);
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
  const { Adult: adultPrice, Senior: seniorPrice, Child: childPrice } = prices;
  prices.Adult = Math.round(adultPrice * (1 + (percentage / 100)) * 100) / 100;
  prices.Senior = Math.round(seniorPrice * (1 + (percentage / 100)) * 100) / 100;
  prices.Child = Math.round(childPrice * (1 + (percentage / 100)) * 100) / 100;
  return prices;
}

const findResponsible = (responsible) => {
  const arrAnimals = [];
  responsible.forEach(id =>
    animals.forEach((animal) => {
      if (animal.id === id) {
        arrAnimals.push(animal.name);
      }
    }),
  );
  return arrAnimals;
};

function employeeCoverage(idOrName) {
  if (idOrName) {
    const employeeC = employees.find(
      employee =>
        employee.id === idOrName ||
        employee.firstName === idOrName ||
        employee.lastName === idOrName,
    );
    const objRetorno = {};
    const employeeName = `${employeeC.firstName} ${employeeC.lastName}`;
    objRetorno[employeeName] = findResponsible(employeeC.responsibleFor);
    return objRetorno;
  }
  return employees.reduce((acc, employee) => {
    acc[`${employee.firstName} ${employee.lastName}`] = findResponsible(
      employee.responsibleFor,
    );
    return acc;
  }, {});
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
