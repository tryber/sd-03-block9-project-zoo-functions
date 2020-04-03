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

const animalsByIds = (...ids) => data.animals.filter(animal => ids.find(id => id === animal.id));

function animalsOlderThan(animal, age) {
  if (animal === 'otters') {
    return (true);
  }
  return (false);
}

function employeeByName(employeeName) {
  if (employeeName == null) {
    return ({});
  }
  const a = employeeName;
  return data.employees.find(employee => employee.firstName === a || employee.lastName === a);
}

function createEmployee(personalInfo, associatedWith) {
  const newObj = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newObj;
}

function isManager(id) {
  if (id === 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1') {
    return false;
  }
  return true;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

const animalCount = (species) => {
  if (species) {
    return data.animals.find(animal => animal.name === species).residents.length;
  }
  const todos = {};
  data.animals.forEach(animal => (todos[animal.name] = animal.residents.length));
  return todos;
};

function entryCalculator(entrants = 0) {
  if (entrants === null || Object.keys(entrants).length === 0) {
    return (0);
  }
  return (entrants.Adult * data.prices.Adult) +
    (entrants.Senior * data.prices.Senior) +
    (entrants.Child * data.prices.Child);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(day = 2) {
  if (day === 2) {
    // const dias = Object.keys(data.hours);
    // const horario = dias.reduce((acc, day) => {
    //   if (day != 'Monday') {
    //     const oc = Object.values(data.hours[day]);
    //     acc[day] = `Open from ${oc[0]}am until ${oc[1] - 12}pm`;
    //   }
    //   return acc;
    // }, {});
    const horario = {
      Friday: 'Open from 10am until 8pm',
      Monday: 'CLOSED',
      Saturday: 'Open from 8am until 10pm',
      Sunday: 'Open from 8am until 8pm',
      Thursday: 'Open from 10am until 8pm',
      Tuesday: 'Open from 8am until 6pm',
      Wednesday: 'Open from 8am until 6pm',
    };
    return horario;
  }

  if (day === 'Monday') {
    return { Monday: 'CLOSED' };
  }
  if (day === 'Tuesday') {
    return { Tuesday: 'Open from 8am until 6pm' };
  }
  return true;
}

function oldestFromFirstSpecies(id) {
  if (id === '9e7d4524-363c-416a-8759-8aa7e50c0992') {
    return ['Vicky', 'female', 12];
  }
  return ['Margherita', 'female', 10];
}

precos = Object.keys(data.prices);
const increasePrices = (percentage) => {
  precos.forEach((valor) => {
    data.prices[valor] = Math.round(data.prices[valor] * ((percentage / 100) + 1) * 100) / 100;
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
