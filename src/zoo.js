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

const [...animals] = data.animals;

const [...employees] = data.employees;

function animalsByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return ids;
  }

  const arr = [];
  for (let indice = 0; indice < ids.length; indice += 1) {
    const res = animals.find(elemento => elemento.id === ids[indice]);
    arr.push(res);
  }
  return arr;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const especies = animals.filter(bicho => (bicho.name === animal))
    .map(especie => especie.residents);
  const idades = especies[0].every(ida => ida.age >= age);
  return idades;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }

  const nomes = employees.find(elemento => elemento.firstName === employeeName)
    || employees.find(elemento => elemento.lastName === employeeName);
  return nomes;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = Object.assign({}, personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  const gerentes = employees.map(gerente => gerente.managers)
    .some(gerente => gerente[0] === id);
  return gerentes;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const novoFun = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(novoFun);
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    const obj = {};
    const ani = animals.map(animal => `${animal.name}`);
    const popula = animals.map(animal => animal.residents.length);
    for (let i = 0; i < ani.length; i += 1) {
      obj[ani[i]] = popula[i];
    }
    return obj;
  }

  const anima = animals.filter(bicho => bicho.name === species);
  const animeQtd = anima.map(qtd => qtd.residents.length);
  return animeQtd[0];
}

function entryCalculator(entrants) {
  // seu código aqui
  const { Adult, Child, Senior } = data.prices;
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const { Adult: precoA, Child: precoC, Senior: precoS } = entrants;

  const total = (Adult * precoA) + (Child * precoC) + (Senior * precoS);
  return total;
}

/* function animalMap(options) {
  // seu código

  const locais = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  const animaisLoc = animals.filter(local => local.location === locais)
  .reduce((cont, elemento) => cont.concat(elemento.name),[]);

  Object.keys(locais).forEach(animaisLoc);

  return animals.map(
    ({ location }) => location
  ).reduce((accumulator, location) => {
    if (acumulador[location] === undefined) acumulador[location] = []
    return acumulador;
  }, { });
  const localNE = animals.filter(local => (local.location === 'NE'));
  const localNW = animals.filter(local => (local.location === 'NW'));
  const localSE = animals.filter(local => (local.location === 'SE'));
  const localSW = animals.filter(local => (local.location === 'SW'));
  if (!options) {
    const allLocal = {
      NE: localNE.map(animal => animal.name),
      NW: localNW.map(animal => animal.name),
      SE: localSE.map(animal => animal.name),
      SW: localSW.map(animal => animal.name),
    };
    return allLocal;
  }

  if (options.includeNames === true) {
    return allNames;
  }

} */

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const idFunc = employees.find(func => func.id === id);
  const especie = animals.find(animal => animal.id === idFunc.responsibleFor[0]);
  const animaVelho = especie.residents.sort((a, b) => b.age - a.age);
  const objAnima = Object.values(animaVelho[0]);

  return objAnima;
}

function increasePrices(percentage) {
  // seu código aqui
  const { Adult, Child, Senior } = data.prices;
  const mult = (percentage / 100) + 1;

  const AdultM = Math.round(100 * Adult * mult) / 100;
  const ChildM = Math.round(100 * Child * mult) / 100;
  const SeniorM = Math.round(100 * Senior * mult) / 100;

  const total = {
    'Adult': AdultM,
    'Senior': SeniorM,
    'Child': ChildM,
  };
  data.prices = total;
  console.log(total);
  return data.prices;
}
function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  /* animalMap, */
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
