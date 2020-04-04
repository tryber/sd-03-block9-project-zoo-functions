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

const animalsArr = data.animals;
const employeesArr = data.employees;
const pricesObj = data.prices;
// console.log(data.animals[0]);

const animalsByIds = (...ids) => animalsArr.filter(element => ids.find(id => id === element.id));
// console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

const animalsOlderThan = (animal, age) => {
  const specificAnimal = animalsArr.filter(element => element.name === animal)[0].residents;
  return specificAnimal.every(element => element.age > age);
};
// console.log(animalsOlderThan('penguins', 10));

const employeeByName = (employeeName) => {
  if (!employeeName) return {};
  return employeesArr.find(element => element.firstName === employeeName
    || element.lastName === employeeName);
};
// console.log(employeeByName());

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

// console.log(createEmployee({ kkk: 'heheh', llll: 'zzz' }, { hulu: 'Tom Brady', Team: 'Bucs' }));

const isManager = id => employeesArr.some(element => element.managers.includes(id));
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) =>
  employeesArr.push({
    id, firstName, lastName, managers, responsibleFor,
  });
// console.log(addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe'));

const animalCount = (species) => {
  const animals = {};
  animalsArr.forEach((element) => {
    animals[element.name] = element.residents.length;
  });
  if (species != null) {
    return animals[species];
  }
  return animals;
};
// console.log(animalCount('snakes'));

const entryCalculator = (entrants) => {
  if (entrants === 0
    || entrants === null
    || entrants === undefined
    || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Child, Adult, Senior } = entrants;
  return (Child * pricesObj.Child) + (Adult * pricesObj.Adult) + (Senior * pricesObj.Senior);
};
// console.log(entryCalculator({ 'Adult': 2, 'Child': 3, 'Senior': 1 }));

const animalMap = (options) => {
  // const { includeNames = false, sorted = false, sex = '' } = options;
  // return {
  //   NE: animalsArr.filter(element => element.location === 'NE').map(element => element.name),
  //   NW: animalsArr.filter(element => element.location === 'NW').map(element => element.name),
  //   SE: animalsArr.filter(element => element.location === 'SE').map(element => element.name),
  //   SW: animalsArr.filter(element => element.location === 'SW').map(element => element.name),
  // };
};
// console.log(animalMap());
// console.log(animalMap({ includeNames: true, sex: 'female' }));

const schedule = (dayName) => {
  const sched = {};
  Object.entries(data.hours).forEach((element) => {
    if (element[0] === 'Monday') {
      sched[element[0]] = 'CLOSED';
    } else {
      sched[element[0]] = `Open from ${element[1].open}am until ${element[1].close - 12}pm`;
    }
  });
  if (dayName != null) {
    const obj = { [dayName]: sched[dayName] };
    return obj;
  }
  return sched;
};

// console.log(schedule('Monday'));

const oldestFromFirstSpecies = (id) => {
  const idAnimal = employeesArr.find(element => element.id === id).responsibleFor[0];
  const residentAnimal = animalsArr.find(element => element.id === idAnimal).residents;
  const oldest = residentAnimal.reduce((accumulator, element) => {
    if (accumulator > element.age) return accumulator;
    return element.age;
  }, 0);
  const { name, sex, age } = residentAnimal.find(element => element.age === oldest);
  return [name, sex, age];
};
// console.log(oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

const increasePrices = (percentage) => {
  Object.keys(pricesObj).forEach((e) => {
    (pricesObj[e] = Math.round(pricesObj[e] * ((percentage / 100) + 1) * 100) / 100);
  });
};
// console.log(increasePrices(30));
const filteredEmployee = (nameOrId) => {
  const singleEmployee = {};
  const findEmployee = employeesArr.find(e => e.id === nameOrId
    || e.firstName === nameOrId || e.lastName === nameOrId);
  singleEmployee[`${findEmployee.firstName} ${findEmployee.lastName}`] = findEmployee
    .responsibleFor.map(e => animalsArr.find(animal => animal.id === e).name);
  return singleEmployee;
};
// console.log(filteredEmployee('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
const employeeCoverage = (idOrName) => {
  const obj = {};
  employeesArr.forEach((element) => {
    obj[`${element.firstName} ${element.lastName}`] = element.responsibleFor
      .map(id => animalsArr
        .find(animal => animal.id === id).name);
  });
  if (idOrName) return filteredEmployee(idOrName);
  return obj;
};
console.log(employeeCoverage('Sharonda'));

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
