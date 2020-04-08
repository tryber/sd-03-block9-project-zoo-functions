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
const { animals, employees, prices, hours } = require('./data');

const animalsByIds = (...ids) => {
  if (typeof ids === 'undefined') {
    return [];
  }
  return animals.filter(({ id }) => ids.includes(id));
};
const animalsOlderThan = (animal, idade) => {
  const verifica = animals.filter(({ name }) => animal.includes(name));
  return verifica[0].residents[0].age > idade;
}

const employeeByName = (employeeName) => {
  if (typeof employeeName === 'undefined') return {};
  return employees.find((elemento =>
    elemento.firstName === employeeName || elemento.lastName === employeeName));
}

const createEmployee = (personalInfo, associatedWith) => {
  const alterado = Object.assign(personalInfo, associatedWith);
  return alterado;
}

const isManager = (id) => {
  for (let i = 0; i < employees.length; i = i + 1) {
    if (employees[i].managers.includes(id)) {
      return true;
    };
  }
  return false;
}

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  let objeto = { id, firstName, lastName, managers, responsibleFor };
  employees.push(objeto);
}

const animalCount = (species) => {
  if (species === undefined) {
    const novaLista = animals.reduce((acumulador, currentValue) => {
      acumulador[currentValue.name] = currentValue.residents.length;
      return acumulador;
    }, {});
    console.log(novaLista);
    return novaLista;
  };
  const animal = animals.find(({ name }) => name === species);
  return animal.residents.length;
};

const entryCalculator = (entrants) => {
  if (entrants === undefined) {
    return 0;
  } else if (Object.keys(entrants).length === 0) {
    return 0;
  };
  const adulto = prices.Adult * entrants.Adult;
  const crianca = prices.Child * entrants.Child;
  const idoso = prices.Senior * entrants.Senior;
  let soma = adulto + crianca + idoso;
  return soma;
};

function animalMap(options) {
  // seu código aqui
};

function schedule(dayName) {
  const horarios = {};
  if (dayName === undefined) {
    Object.keys(hours).forEach((key) => {
      horarios[key] = getTime(key)
    });
  } else {
    horarios[dayName] = getTime(dayName)
  };
  return horarios;
};
function getTime(key) {
  if (hours[key].open === 0 && hours[key].close === 0) {
    return 'CLOSED';
  } else {
    return `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`;
  };
};

function oldestFromFirstSpecies(id) {
  const func = employees.find((elemento) => elemento.id === id);
  const animal = animals.find((elemento) => elemento.id === func.responsibleFor[0]);
  const idade = animal.residents.sort((a, b) => {
    if (a.age < b.age) return 1;
    if (a.age > b.age) return -1;
    return 0;
  });
  return Object.values(idade[0]);
}

function increasePrices(percentage) {
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
