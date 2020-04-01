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
}

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
