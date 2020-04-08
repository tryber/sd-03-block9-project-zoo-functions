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
  if (ids[0] === undefined) return [];
  const animals = data.animals;
  const buscaById = animals.filter(element => element.id === ids[0] || element.id === ids[1]);

  return buscaById;
}

function animalsOlderThan(especie, age) {
  const animals = data.animals;
  let bool = true;

  animals.forEach((element) => {
    if (element.name === especie) {
      element.residents.forEach((arr) => {
        if (arr.age < age) {
          bool = false;
        }
      });
    }
  });
  return bool;
}

function employeeByName(employeeName) {
  const employees = data.employees;

  if (employeeName === undefined) {
    return {};
  }

  const employee = employees.find((element) => {
    if (employeeName === element.firstName || employeeName === element.lastName) {
      return element;
    }
  });
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const employees = data.employees;
  let idManager = false;

  employees.find((element) => element.managers.find((item) => {
    if (item === id) {
      idManager = true;
    }
  }));

  return idManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employees = data.employees;

  const newEmploy = { id, firstName, lastName, managers, responsibleFor };

  employees.push(newEmploy);
}

function animalCount(species) {
  const animals = data.animals;

  if (!species) {
    const todosAnimais = {};
    animals.forEach((animal) => {
      todosAnimais[animal.name] = animal.residents.length;
    });
    return todosAnimais;
  } else {
    const animal = animals.find(element => element.name === species);
    return animal.residents.length;
  }
}

function entryCalculator(entrants) {
  const prices = data.prices;
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

const pickDay = (day) => {
  const hours = data.hours;
  if (day === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
};

function schedule(dayName) {
  const hours = data.hours;
  const dayObject = {};
  if (dayName) {
    dayObject[dayName] = pickDay(dayName);
    return dayObject;
  }
  Object.keys(hours).forEach((day) => {
    dayObject[day] = pickDay(day);
  });
  return dayObject;
}

function oldestFromFirstSpecies(id) {
  const animals = data.animals;
  const employees = data.employees;
  const pessoa = employees.find(employee => employee.id === id);

  const responsible = animals
    .find(animal => animal.id === pessoa.responsibleFor[0])
    .residents.sort((a, b) => b.age - a.age);

  return [responsible[0].name, responsible[0].sex, responsible[0].age];
}

function increasePrices(percentage) {
  const prices = data.prices;

  const { Adult: adultPrice, Senior: seniorPrice, Child: childPrice } = prices;
  prices.Adult = Math.round(adultPrice * (1 + (percentage / 100)) * 100) / 100;
  prices.Senior = Math.round(seniorPrice * (1 + (percentage / 100)) * 100) / 100;
  prices.Child = Math.round(childPrice * (1 + (percentage / 100)) * 100) / 100;

  return prices;
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
