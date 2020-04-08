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
  if (ids.length === 0) {
    return ids;
  } if (ids.length === 1) {
    const loc1 = data.animals.filter(elemento => elemento.id === ids[0]);
    return loc1;
  }
  const loc2 = data.animals.filter(elemento => elemento.id === ids[0] || elemento.id === ids[1]);
  return loc2;
};
// usar se for testar a chamada da função com Run Code
// console.log(animalsByIds(''))

// usar se for testar a chamada da função com Run Code
// const data = require('./data');
const animalsOlderThan = (specie, age) =>
  data.animals.find(e => e.name === specie).residents.every(e => e.age >= age);
// usar se for testar a chamada da função com Run Code
// console.log(animalsOlderThan('penguins', 10));

// usar se for testar a chamada da função com Run Code
// const data = require('./data');
const employeeByName = employee =>
  data.employees.find(e => e.firstName === employee || e.lastName === employee) || {};
// usar se for testar a chamada da função com Run Code
// console.log(employeeByName('Ola'));

// usar se for testar a chamada da função com Run Code
// const data = require('./data');
const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});
// console.log(createEmployee()); passar o objeto com chaves e valores ok

// usar se for testar a chamada da função com Run Code
// const data = require('./data');
const isManager = id => data.employees.some(({ managers }) => managers.find(e => e === id));
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));


// const data = require('./data');
const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  const adicionafuncionario = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(adicionafuncionario);
  console.log(adicionafuncionario);
};
// addEmployee('5785478', 'Luiz', 'Silva', '5789575', '45589458');


const animalCount = (species) => {
  if (species) {
    return data.animals.find(({ name }) => name === species).residents.length;
  }
  return data.animals.reduce((counter, animal) => {
    counter[animal.name] = animal.residents.length;
    return counter;
  }, {});
};

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const aux = Object.entries(data.hours);
  const test = aux.reduce((acc, [day, { open, close }]) => {
    if (open === 0 && close === 0) {
      acc[day] = 'CLOSED';
    } else {
      acc[day] = `Open from ${open}am until ${close - 12}pm`;
    }
    return acc;
  }, {});
  if (dayName) {
    const unica = {};
    unica[dayName] = test[dayName];
    return unica;
  }
  return test;
}

/* function oldestFromFirstSpecies(id) {
  // seu código aqui
} */
const oldestFromFirstSpecies = (id) => {
  const func = data.employees.find(e => e.id === id).responsibleFor[0];
  return Object.values(
    data.animals.find(e => e.id === func).residents.sort((a, b) => b.age - a.age)[0],
  );
};

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
