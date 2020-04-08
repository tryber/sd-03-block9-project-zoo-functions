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
  const listId = data.animals.filter(animals => ids.find(id => id === animals.id));
  return listId;
}

function animalsOlderThan(animal, age) {
  const listAnimal = data.animals.find(list => list.name === animal);
  const listAge = listAnimal.residents.every(list => list.age >= age);
  return listAge;
}

function employeeByName(employeeName) {
  const listEmp = data.employees.find(list =>
    employeeName === list.firstName || employeeName === list.lastName);
  if (listEmp === undefined) return {};
  return listEmp;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const listManager = data.employees.some(list => list.managers.find(el => el === id));
  return listManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  if (species) {
    return data.animals.find(list => list.name === species).residents.length;
  }
  return Object.assign(data.animals.reduce((acc, el) => {
    acc[el.name] = el.residents.length;
    return acc;
  }, {}));
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const listEntrants = Object.values(entrants);
  const valueAdult = data.prices.Adult * listEntrants[0];
  const valueChild = data.prices.Child * listEntrants[1];
  const valueSenior = data.prices.Senior * listEntrants[2];
  return (valueAdult + valueChild + valueSenior);
}

function animalMap(options) {
  // try
}

function schedule(dayName) {
  const objlist = {};
  const objlist2 = {};
  if (dayName) {
    objlist[dayName] = `Open from ${data.hours[dayName].open}am until ${data.hours[dayName].close - 12}pm`;
    if (dayName === 'Monday') {
      objlist[dayName] = 'CLOSED';
    }
  }
  if (!dayName) {
    Object.keys(data.hours).map((list) => {
      objlist2[list] = `Open from ${data.hours[list].open}am until ${data.hours[list].close - 12}pm`;
      if (list === 'Monday') objlist2[list] = 'CLOSED';
      return objlist2;
    });
  }
  return objlist;
}

function oldestFromFirstSpecies(id) {
  const listEmpl = data.employees.find(list => list.id === id).responsibleFor[0];
  const listAnimal = data.animals.find(list => list.id === listEmpl).residents;
  const animalsOrdem = listAnimal.sort((a, b) => {
    if (a.age < b.age) return 1;
    if (a.age > b.age) return -1;
    return 0;
  });
  return Object.values(animalsOrdem[0]);
}

const increasePrices = (percentage) => {
  Object.keys(data.prices).reduce((acc, el) => {
   acc[el] = Math.round((acc[el] * (100 + percentage)).toFixed(2)) / 100;
    return acc;
   }, data.prices);
};

function employeeCoverage(idOrName) {
  const obj = {};
  if (idOrName) {
    const emplName = data.employees.find(list =>
    list.id === idOrName || list.firstName === idOrName || list.lastName === idOrName);
    if (emplName) {
      const listRespAnim = emplName.responsibleFor.reduce((acc, el) => {
        acc.push(data.animals.find(list => list.id === el).name);
        return acc;
      }, []);
      obj[`${emplName.firstName} ${emplName.lastName}`] = listRespAnim;
      return obj;
    }
  }
  if (!idOrName) {
    data.employees.map((element) => {
      const listRespAnim2 = element.responsibleFor.reduce((acc, el) => {
        acc.push(data.animals.find(list => list.id === el).name);
        return acc;
      }, []);
      obj[`${element.firstName} ${element.lastName}`] = listRespAnim2;
      return obj;
    });
  }
  return obj;
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
