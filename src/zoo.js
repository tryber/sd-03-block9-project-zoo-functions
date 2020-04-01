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
  // seu código aqui
  const filterId = ids.map(id => data.animals.filter(animal => animal.id === id));
  const filterIdSemArrayEmCadaObjeto = [];
  for (let i = 0; i < filterId.length; i += 1) {
    filterIdSemArrayEmCadaObjeto.push(filterId[i][0]);
  }
  return filterIdSemArrayEmCadaObjeto;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const nomeEspecieFilter = data.animals.filter(item => item.name === animal);
  const idadeResidentesPorEspecie = nomeEspecieFilter[0].residents.map(item => item.age);
  return idadeResidentesPorEspecie.every(idade => idade >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  const funcD = data.employees;
  const funcR = funcD.filter(fc => fc.firstName === employeeName || fc.lastName === employeeName);
  return funcR[0];
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  // seu código aqui
  const result = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return result;
}

function isManager(id) {
  // seu código aqui
  const managersMap = data.employees.map(item => item.managers);
  const arrTest = [];
  for (let i = 0; i < managersMap.length; i += 1) {
    managersMap[i].forEach(element => arrTest.push(element));
  }
  const isManagerYn = arrTest.some(item => item === id);
  return isManagerYn;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function animalCount(species) {
  // seu código aqui
  if (species === undefined) {
    const objectAnimalsCount = {};
    for (let i = 0; i < data.animals.length; i += 1) {
      objectAnimalsCount[data.animals[i].name] = data.animals[i].residents.length;
    }
    return objectAnimalsCount;
  }
  const unicAnimalCountFilter = data.animals.filter(animal => animal.name === species);
  const unicAnimalCount = unicAnimalCountFilter[0].residents.length;
  return unicAnimalCount;
}

function entryCalculator(entrants) {
  // seu código aqui
  const arrayKeys = Object.keys(data.prices);
  const arrayPrices = [];
  for (let i = 0; i < arrayKeys.length; i += 1) {
    arrayPrices.push({ [arrayKeys[i]]: data.prices[arrayKeys[i]] });
  }
  let filterKey;
  let somaPreço = 0;
  const arrayKeysEntrants = Object.keys(entrants);
  for (let i = 0; i < arrayKeysEntrants.length; i += 1) {
    filterKey = arrayPrices.filter(item => item[arrayKeysEntrants[i]]);
    somaPreço += filterKey[0][arrayKeysEntrants[i]] * entrants[arrayKeysEntrants[i]];
  }
  return somaPreço;
}

function includeNamesTrue(arrLocation) {
  let newArrLocationMap;
  let newArrLocationFilter;
  let newObject = {};
  let objectValue = {};
  let filterNames;
  let arrObject = []
  for (let i = 0; i < arrLocation.length; i += 1) {
    newArrLocationFilter = data.animals.filter(animal => animal.location === arrLocation[i]);
    newArrLocationMap = newArrLocationFilter.map(item => item.name);
    for (let x = 0; x < newArrLocationMap.length; x += 1) {
      filterNames = newArrLocationFilter.filter(item => item.name === newArrLocationMap[x])[0].residents.map(item => item.name);
      objectValue[newArrLocationMap[x]] = filterNames;
      arrObject.push(objectValue);
      newObject[arrLocation[i]] = arrObject;
      objectValue = {}
    }
    arrObject = [];
  }
  return newObject;
}

function sortedTrue(arrLocation) {
  let newArrLocationMap;
  let newArrLocationFilter;
  let newObject = {};
  let objectValue = {};
  let filterNames;
  let arrObject = []
  let nameSorted;
  for (let i = 0; i < arrLocation.length; i += 1) {
    newArrLocationFilter = data.animals.filter(animal => animal.location === arrLocation[i]);
    newArrLocationMap = newArrLocationFilter.map(item => item.name);
    for (let x = 0; x < newArrLocationMap.length; x += 1) {
      filterNames = newArrLocationFilter.filter(item => item.name === newArrLocationMap[x])[0].residents.map(item => item.name);
      nameSorted = filterNames.sort()
      objectValue[newArrLocationMap[x]] = nameSorted;
      arrObject.push(objectValue);
      newObject[arrLocation[i]] = arrObject;
      objectValue = {}
    }
    arrObject = [];
  }
  return newObject;
}

function sex(arrLocation, sexParam) {
  let newArrLocationMap;
  let newArrLocationFilter;
  let newObject = {};
  let objectValue = {};
  let filterNames;
  let arrObject = []
  for (let i = 0; i < arrLocation.length; i += 1) {
    newArrLocationFilter = data.animals.filter(animal => animal.location === arrLocation[i]);
    newArrLocationMap = newArrLocationFilter.map(item => item.name);
    for (let x = 0; x < newArrLocationMap.length; x += 1) {
      filterNames = newArrLocationFilter.filter(item => item.name === newArrLocationMap[x])[0].residents.filter(element => element.sex === sexParam).map(item => item.name);
      objectValue[newArrLocationMap[x]] = filterNames;
      arrObject.push(objectValue);
      newObject[arrLocation[i]] = arrObject;
      objectValue = {}
    }
    arrObject = [];
  }
  return newObject;
}

function animalMap(options) {
  const newArrLocation = ['NE', 'NW', 'SE', 'SW'];
  let newArrLocationMap;
  let newArrLocationFilter;
  let newObject = {};
  for (let i = 0; i < newArrLocation.length; i += 1) {
    newArrLocationFilter = data.animals.filter(animal => animal.location === newArrLocation[i]);
    newArrLocationMap = newArrLocationFilter.map(item => item.name);
    newObject[newArrLocation[i]] = newArrLocationMap;
  }
  if (options === undefined || options.includeNames === undefined) {
    return newObject;
  } else if (options.includeNames === true && options.sorted === true) {
    return sortedTrue(newArrLocation);
  } else if (options.includeNames === true && options.sex !== undefined) {
    return sex(newArrLocation, options.sex);
  } else if (options.includeNames) {
    return includeNamesTrue(newArrLocation);
  }
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
