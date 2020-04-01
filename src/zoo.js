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

const animalsByIds = (...ids) => data.animals.filter(animId => ids.find(id => id === animId.id));

const animalsOlderThan = (animal, age) => data.animals.find(anim => anim.name === animal).residents
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
    return data.animals.find(el => el.name === species).residents.length;
  }
  const result = {};
  data.animals.forEach((e) => { result[e.name] = e.residents.length; });
  return result;
};

const entryCalculator = entrants => (entrants && Object.keys(entrants).length > 0
  ? Object.keys(entrants).reduce((acc, ele) => (acc + (data.prices[ele] * entrants[ele])), 0)
  : 0);

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
