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

const { animals, employees, prices, hours } = data;

const animalsByIds = (...ids) => {
  const idAnimals = [];
  ids.forEach((value) => {
    const selection = animals.filter(group => group.id === value);
    idAnimals.push(...selection);
  });
  return idAnimals;
};

const animalsOlderThan = (animal, age) =>
  animals.filter(group => group.name === animal)
          .every(obj => obj.residents.every(animal2 => animal2.age >= age));

const employeeByName = employeeName =>
  employees.find(person => person.firstName === employeeName || person.lastName === employeeName,
) || {};

const createEmployee = (personalInfo, associatedWith) => {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
};

const isManager = id => employees.some(member => (member.managers).includes(id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  const newPerson = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newPerson);
};

const animalCount = (species) => {
  let answer = {};
  if (species) {
    answer = animals.find(group1 => species === group1.name).residents.length;
  } else {
    animals.forEach((group2) => { answer[group2.name] = group2.residents.length; });
  }
  return answer;
};

const entryCalculator = (entrants) => {
  if (entrants) {
    if (Object.keys(entrants).length === 0) return 0;
    let answer = 0;
    Object.keys(entrants).forEach((v, i) => {
      Object.keys(prices).forEach((v2, i2) => {
        if (v === v2) answer += Object.values(entrants)[i] * Object.values(prices)[i2];
      });
    });
    return answer;
  }
  return 0;
};

const getResidentsName = (animal, sorted, sex) => {
  const obj = {};
  obj[animal] = animals
    .find(element => element.name === animal).residents;
  if (sex) obj[animal] = obj[animal].filter(resident => resident.sex === sex);
  obj[animal] = obj[animal].map(({ name }) => name);
  if (sorted) obj[animal].sort();
  return obj;
};

const animalMap = (options = {}) => {
  const { includeNames, sex, sorted } = options;
  return animals.reduce((obj, { name, location }) => {
    if (!obj[location]) obj[location] = [];
    if (!includeNames) {
      obj[location].push(name);
    } else {
      obj[location].push(getResidentsName(name, sorted, sex));
    }
    return obj;
  }, {});
};

// animalMap();

const schedule = (dayName) => {
  const calendar = {};
  if (dayName === 'Monday') {
    calendar[dayName] = 'CLOSED';
    return calendar;
  }
  if (dayName) {
    calendar[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;
  } else {
    for (const days in hours) {
      calendar[days] = `Open from ${hours[days].open}am until ${hours[days].close - 12}pm`;
    }
    calendar.Monday = 'CLOSED';
  }
  return calendar;
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
