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

const createEmployee = (personalInfo, asso) => Object.assign({}, personalInfo, asso);

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
  const o = {};
  if (dayName === undefined) {
    Object.keys(data.hours)
    .forEach((e) => {
      o[e] = (e === 'Monday') ? 'CLOSED' :
      `Open from ${data.hours[e].open}am until ${data.hours[e].close - 12}pm`;
    });
    return o;
  }
  if (Object.keys(data.hours).find(el => (el === dayName)) === 'Monday') {
    o[dayName] = 'CLOSED';
    return o;
  }
  o[dayName] = `Open from ${data.hours[dayName].open}am until ${data.hours[dayName].close - 12}pm`;
  return o;
};

const oldestFromFirstSpecies = (id) => {
  const empregado = data.employees.find(e => e.id === id).responsibleFor[0];
  return Object.values(data.animals.find(ele => ele.id === empregado).residents
  .sort((a, b) => b.age - a.age)[0]);
};


const increasePrices = percentage => Object.keys(data.prices)
.forEach(el => (data.prices[el] = Math
.round(data.prices[el] * ((percentage / 100) + 1) * 100) / 100));

const employeeCoverage = (idOrName) => {
  const obj = {};
  const map = els => data.animals.find(aly => aly.id === els).name;
  const findName = el => el.firstName === idOrName || el.lastName === idOrName;
  if (data.employees.find(el => el.id === idOrName)) {
    const objTrab = data.employees.find(el => el.id === idOrName);
    obj[`${objTrab.firstName} ${objTrab.lastName}`] = objTrab.responsibleFor.map(map);
    return obj;
  } else if (data.employees.find(findName)) {
    const objNomes = data.employees.find(findName);
    obj[`${objNomes.firstName} ${objNomes.lastName}`] = objNomes.responsibleFor.map(map);
    return obj;
  }
  data.employees.map(acc => (obj[`${acc.firstName} ${acc.lastName}`] = acc.responsibleFor
  .map(el => data.animals.find(ely => ely.id === el).name)));
  return obj;
};

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
