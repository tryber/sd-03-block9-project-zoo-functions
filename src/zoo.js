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
  let retornar = Object.assign({}, personalInfo, associatedWith);
  return retornar
}

const personalInfo = {
  id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
  firstName: 'John',
  lastName: 'Doe',
};

const associatedWith = {
  managers: [
    'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    '9e7d4524-363c-416a-8759-8aa7e50c0992'
  ],
  responsibleFor: [
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    '89be95b3-47e4-4c5b-b687-1fabf2afa274',
    'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
  ]
};
createEmployee(personalInfo,associatedWith)
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

const schedule = (dayName) => {
  let o = {};
  if (dayName === undefined){
    Object.keys(data.hours)
    .forEach(e => {
      o[e] = (e === 'Monday') ? 'CLOSED' :
      `Open from ${data.hours[e].open}am until ${data.hours[e].close - 12}pm`
      });
    return o;
  }else{
    Object.keys(data.hours).find(el=>el === dayName) === 'Monday' ? o[dayName]=`CLOSED`:
    o[dayName] = `Open from ${data.hours[dayName].open}am until ${data.hours[dayName].close - 12}pm`
    return o;
  };
};

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
