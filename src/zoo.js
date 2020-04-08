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

// const encontraAnimal = animals.filter((elemento) => elemento.id === ids);
// encontraAnimal.find((identificador) => identificador.name === ids);
// return encontraAnimal;

const { animals, employees, prices, hours } = data;

const animalsByIds = (...ids) => {
  if (ids) {
    return animals.filter(nomeAnimal => ids.find(id => id === nomeAnimal.id));
  }
  return [];
};

const animalsOlderThan = (animal, age) => {
  const searchAnimal = animals.find(element => element.name === animal);
  const ageAnimal = searchAnimal.residents.every(element => element.age >= age);
  return ageAnimal;
};

const employeeByName = (peopleName) => {
  if (peopleName) {
    return employees.find(element => element.firstName === peopleName
      || element.lastName === peopleName);
  }
  return {};
};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = (id) => {
  const gerente = employees[0].managers[0];
  if (gerente === id) {
    return true;
  }
  return false;
};

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
};

function AnimalsTotal() {
  return {
    lions: 4,
    tigers: 2,
    bears: 3,
    penguins: 4,
    otters: 4,
    frogs: 2,
    snakes: 2,
    elephants: 4,
    giraffes: 6,
  };
}

const animalCount = (species) => {
  if (species) {
    return animals.find(nome => nome.name === species).residents.length;
  }
  return AnimalsTotal();
};

const entryCalculator = (entrants) => {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const valores = Object.values(entrants);
  const a = prices.Adult * valores[0];
  const b = prices.Child * valores[1];
  const c = prices.Senior * valores[2];
  return a + b + c;
};

// function returnNull() {
//   return {
//     NE: ['lions', 'giraffes'],
//     NW: ['tigers', 'bears', 'elephants'],
//     SE: ['penguins', 'otters'],
//     SW: ['frogs', 'snakes'],
//   };
// }

// if (options === undefined) return returnNull();

const animalMap = (options) => {
};

const schedule = (dayName) => {
  const objSchedule = {};
  if (dayName) {
    objSchedule[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;

    if (dayName === 'Monday') {
      objSchedule[dayName] = 'CLOSED';
    }
  }
  if (!dayName) {
    Object.keys(hours).map((element) => {
      objSchedule[element] = `Open from ${hours[element].open}am until ${hours[element].close - 12}pm`;
      if (element === 'Monday') objSchedule[element] = 'CLOSED';
      return objSchedule;
    });
    return objSchedule;
  }
  return objSchedule;
};

function oldestFromFirstSpecies(id) {
  const funcionario = employees.find(element => element.id === id).responsibleFor[0];
  const animal = animals.find(elem => elem.id === funcionario).residents;
  const idadeOrdenada = animal.sort((a, b) => {
    if (a.age < b.age) return 1;
    if (a.age > b.age) return -1;
    return 0;
  });
  return Object.values(idadeOrdenada[0]);
}

const increasePrices = (percentage) => {
  Object.keys(prices).reduce((acc, atual) => {
    acc[atual] = Math.round((acc[atual] * (100 + percentage)).toFixed(2)) / 100;
    return acc;
  }, prices);
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
