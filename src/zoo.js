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

const animalsByIds = ...ids => {
  return animalsArr.filter(element => ids.find(id => id === element.id));
};
// console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

const animalsOlderThan = (animal, age) => {
  const specificAnimal = animalsArr.filter(element => element.name === animal)[0].residents;
  return specificAnimal.every(element => element.age > age);
};
// console.log(animalsOlderThan('penguins', 10));

const employeeByName = employeeName => {
  return employeesArr.find(element => element.firstName === employeeName
    || element.lastName === employeeName);
};
// console.log(employeeByName('Elser'));

const createEmployee = (personalInfo, associatedWith) => {
  return { ...personalInfo, ...associatedWith };
};
// console.log(createEmployee({ kkk: 'heheh', llll: 'zzz' }, { hulu: 'Tom Brady', Team: 'Bucs' }));

const isManager = id => {
  return employeesArr.some(element => element.managers.includes(id));
};
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

const addEmployee = (id, firstName, lastName, managers = '[]', responsibleFor = '[]') => {
  return employeesArr.push({
    id, firstName, lastName, managers, responsibleFor,
  });
};
// console.log(addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe'));

const animalCount = species => {
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
  if (entrants === 0 || Object.keys(entrants).length === 0) {
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
      sched[element[0]] = `Open from ${element[1].open}am until ${element[1].close}pm`;
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
  const { Adult, Senior, Child } = pricesObj;
  return {
    Adult: `${Math.ceil((Adult * (percentage / 100) + Adult) * 100) / 100}`,
    Senior: `${Math.ceil((Senior * (percentage / 100) + Senior) * 100) / 100}`,
    Child: `${Math.ceil((Child * (percentage / 100) + Child) * 100) / 100}`,
  };
};
// console.log(increasePrices(30));

const employeeCoverage = (idOrName) => {
  const obj = {};
  employeesArr.forEach((element) => {
    obj[`${element.firstName} ${element.lastName}`] = element.responsibleFor
      .map(id => animalsArr
        .find(animal => animal.id === id).name);
  });
  return obj;
};
console.log(employeeCoverage());

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
