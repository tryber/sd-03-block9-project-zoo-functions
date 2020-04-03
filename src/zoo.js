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
  return data.animals.filter(animal => ids.find(id => id === animal.id));
}

function animalsOlderThan(animal, age) {
  return data.animals.find(grp => grp.name === animal).residents.every(res => res.age >= age);
}
//  console.log(animalsOlderThan('tigers', 10));

function employeeByName(employeeName) {
  return data.employees.find(emp =>
    emp.firstName === employeeName || emp.lastName === employeeName) || {};
}
//  console.log(employeeByName('Ola'));

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

//  console.log(createEmployee(personalInfo, associatedWith));

function isManager(id) {
  return data.employees.some(emp => emp.managers.find(superiores => superiores === id));
}
// O some é necessário, pois se usar só o find ele retorna undefined se o ID não existir.
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const emp = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(emp);
}

function animalCount(species) {
  if (species) {
    return data.animals.find(anim => anim.name === species).residents.length;
  }
  const objAnimais = {};
  data.animals.forEach((animal) => { objAnimais[animal.name] = animal.residents.length; });
  return objAnimais;
}

// console.log(animalCount());

function entryCalculator(entrants) {
  if (entrants) {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;
    return (Adult * 49.99) + (Child * 20.99) + (Senior * 24.99);
  }
  return 0;
}
// console.log(entryCalculator({ 'Adult': 2, 'Child': 3, 'Senior': 1 }));

function animalMap(options) {
  // SKIPPED
}

const geraChave = (dia) => {
  const { open, close } = data.hours[dia];
  if (dia === 'Monday') return 'CLOSED';
  return `Open from ${open}am until ${close - 12}pm`;
};

function schedule(dayName) {
  const horarios = {};
  if (dayName) {
    horarios[dayName] = geraChave(dayName);
  }
  else {
    Object.keys(data.hours).forEach(dia => horarios[dia] = geraChave(dia));
  }
  return horarios;
}
// console.log(schedule());

function oldestFromFirstSpecies(id) {
  const idFunc = data.employees.find(emp => emp.id === id);
  const grpAnimais = data.animals.find(especie => especie.id === idFunc.responsibleFor[0]);
  const maisVelho = grpAnimais.residents.sort(function(a,b){ return b.age - a.age })[0];
  return [maisVelho.name, maisVelho.sex, maisVelho.age];
}

// console.log(oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

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
