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

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const novoFunc = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(novoFunc);
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    const quantidade = animals.map(animal => animal.residents.length);
    const quanAnimal = animals.map(anima => anima.name);
    const obj = {};
    for (let i = 0; i < quantidade.length; i += 1) {
      obj[quanAnimal[i]] = quantidade[i];
    }
    return obj;
  }

  const qtdTotal = animals.filter(animais => animais.name === species);
  const totalqtd = qtdTotal.map(anim => anim.residents.length);

  return totalqtd[0];
}

function entryCalculator(entrants = {}) {
  // seu código aqui
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }

  const { Adult: N, Child: A, Senior: B } = entrants;
  let valorTotal = 0;
  valorTotal = (N * data.prices.Adult) + (A * data.prices.Child) + (B * data.prices.Senior);
  return valorTotal;
}

function animalMap(options) {
  // seu código aqui
  /* const nEast = animals.filter(local => (local.location === 'NE'));
  const nWest = animals.filter(local => (local.location === 'NW'));
  const sEast = animals.filter(local => (local.location === 'SE'));
  const sWest = animals.filter(local => (local.location === 'SW'));

  if (!options) {
    const obj = {
      NE: nEast.map(animal => animal.name),
      NW: nWest.map(animal => animal.name),
      SE: sEast.map(animal => animal.name),
      SW: sWest.map(animal => animal.name),
    }
    return obj;
  }

  if(options.includeNames === true){


  } */
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const funcId = employees.find(funcionario => funcionario.id === id);
  const especie = animals.find(animal => animal.id === funcId.responsibleFor[0]);
  const animaisSorted = especie.residents.sort((a,b) => b.age - a.age);
  const object = Object.values(animaisSorted[0]);

  return object;
}

function increasePrices(percentage) {
  // seu código aqui
  const {Adult, Child, Senior} = data.prices;
  const mult = (percentage/100)+1;
  const adultM = Math.round(100*Adult*mult)/100;
  const childM = Math.round(100*Child*mult)/100;
  const seniorM = Math.round(100*Senior*mult)/100;
  const obje = {
    'Adult' : adultM,
    'Senior' : seniorM,
    'Child' : childM,
  }
  data.prices = obje;
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
