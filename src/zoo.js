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

const dA = data.animals;

const animalsByIds = (...ids) => dA.filter(animId => ids.find(id => id === animId.id));

const animalsOlderThan = (animal, age) => dA.find(anim => anim.name === animal).residents
  .every(animIdade => animIdade.age > age);

const employeeByName = employeeName => (employeeName === undefined ? {} : data.employees
.find(e => e.firstName === employeeName || e.lastName === employeeName));

const createEmployee = (personalInfo, associatedWith) => {
  Object.assign({}, personalInfo, associatedWith);
};

const isManager = id => data.employees.some(ele => ele.managers.find(al => al === id));

const addEmployee = (id, firstName = [], lastName = [], managers = [], responsibleFor = []) => {
  data.employees.push(Object.assign({}, { id }, { firstName }, { lastName }, { managers },
      { responsibleFor }));
};

const animalCount = (species) => {
  if (species !== undefined) {
    return dA.find(el => el.name === species).residents.length;
  } else {
    const result = {};
    data.animals.forEach((e) => { result[e.name] = e.residents.length; });
    return result;
  };
};

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
