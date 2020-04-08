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

const animalsByIds = (...ids) => animals.filter(animal => ids.find(id => id === animal.id));

// console.log(animalsByIds());

const animalsOlderThan = (animal, age) => {
  const findAnimal = animals.find(element => element.name === animal);
  const searchAge = findAnimal.residents.every(element => element.age >= age);
  return searchAge;
};

const employeeByName = (employeeName) => {
  if (employeeName) {
    return employees.find(element => element.firstName === employeeName
      || element.lastName === employeeName);
  }
  return {};
};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = id => employees.some(element => element.managers.find(a => a === id));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

const animalCount = (species) => {
  if (species) {
    const quantSpecies = animals.find(element => element.name === species).residents.length;
    return quantSpecies;
  }

  return Object.assign(animals.reduce((acc, el) => {
    acc[el.name] = el.residents.length;
    return acc;
  }, {}));
};

// console.log(animalCount('giraffes'));

const entryCalculator = (entrants) => {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const visitantesArray = Object.entries(entrants);
  const valores = Object.values(entrants);
  const valorAdult = prices.Adult * valores[0];
// const valorAdult = visitantesArray[0][1] * 49.99;
  const valorChild = visitantesArray[1][1] * 20.99;
  const valorSenior = visitantesArray[2][1] * 24.99;
  const valorTotal = valorAdult + valorSenior + valorChild;
  return valorTotal;
};

// console.log(entryCalculator({ 'Adult': 2, 'Child': 3, 'Senior': 1 }));

const oldestFromFirstSpecies = (id) => {
  const funcionario = employees.find(fun => fun.id === id).responsibleFor[0];
  const animaL = animals.find(codigo => codigo.id === funcionario).residents;
  const animaisOrdem = animaL.sort((a, b) => {
    if (a.age < b.age) return 1;
    if (a.age > b.age) return -1;
    return 0;
  });
  return Object.values(animaisOrdem[0]);
};

// console.log(oldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

const increasePrices = (percentage) => {
  Object.keys(prices).reduce((objeto, pessoa) => {
    objeto[pessoa] = Math.round((objeto[pessoa] * (100 + percentage)).toFixed(2)) / 100;
    return objeto;
  }, prices);
};

//   const arrayPrices = Object.entries(prices);
// // console.log('Array com preço atual:\n', arrayPrices);
//   const newArrayPrices = arrayPrices.map(([key, val]) =>
//     [key, Math.round(((val + ((val * percentage) / 100)) * 100)) / 100]);
// // console.log('Array com novos preços:\n', newArrayPrices);
//   const obj = Object.fromEntries(newArrayPrices);
// // console.log('novos preços como objeto:');
//   return obj;

// console.log(increasePrices(50));
// console.log('\n');
// console.log(increasePrices(30));

function schedule(dayName) {
  const objSchedule = {};
  if (dayName) {
    objSchedule[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;

    if (dayName === 'Monday') {
      objSchedule[dayName] = 'CLOSED';
    }
  }
  if (!dayName) {
    Object.keys(hours).map((element) => {
      objSchedule[element] = `Open from ${hours[element].open}am until ${hours[element].close - 12}pm`;
      if (element === 'Monday') objSchedule[element] = 'CLOSED';
      return objSchedule;
    });
  }
  return objSchedule;
}

// console.log(schedule('Monday'));

function animalMap(options) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  const obj = {};
  if (idOrName) {
    const emplName = employees.find(list => list.id === idOrName || list.firstName === idOrName || list.lastName === idOrName);
    //console.log(emplName);

    if (employees.some(list =>
      list.id === idOrName || list.firstName === idOrName || list.lastName === idOrName)) {
      const listRespAnim = emplName.responsibleFor.reduce((acc, el) => {
      acc.push(animals.find(list => list.id === el).name);
      return acc;
    }, []);

    obj[`${emplName.firstName} ${emplName.lastName}`] = listRespAnim;
    return obj;
    }
  }
  if (!idOrName) {
    employees.map(element => {
      const listRespAnim = element.responsibleFor.reduce((acc, el) => {
      acc.push(animals.find(list => list.id === el).name);
      return acc;
      }, []);
      obj[`${element.firstName} ${element.lastName}`] = listRespAnim;
    });
    return obj;
  }
}
// console.log(employeeCoverage());

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
