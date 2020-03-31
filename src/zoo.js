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
  const resposta = [];
  for (let i = 0; i < ids.length; i += 1) {
    const animalsID = animals.find(element => element.id === ids[i]);
    resposta.push(animalsID);
  }
  return resposta;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animaiS = animals.filter(animalNome => animalNome.name === animal);
  const idadeAnimal = animaiS.map(idadE => idadE.residents);
  const animalsIdade = idadeAnimal[0].every(ageAnimal => ageAnimal.age >= age);
  return animalsIdade;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }

  const primeiroNome = employees.find(element => element.firstName === employeeName)
    || employees.find(element => element.lastName === employeeName);

  return primeiroNome;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui

  const newFuncionario = Object.assign({}, personalInfo, associatedWith);
  return newFuncionario;
}

function isManager(id) {
  // seu código aqui
  const gerents = employees.map(gerente => gerente.managers)
    .some(gerente => gerente[0] === id);
  return gerents;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
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
