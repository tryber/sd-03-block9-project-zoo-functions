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
  const list = data.animals.filter(animal => animal.id === ids[0] || animal.id === ids[1]);
  return list;
}

const animalsOlderThan = (animal, age) => {
  // seu código aqui
  const especie = data.animals.filter(e => e.name === animal);
  const isOld = especie[0].residents.every(e => e.age > age);
  return isOld;
};

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const employee = data.employees.find(e => e.firstName === employeeName
    || e.lastName === employeeName);
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  return newEmployee;
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
  const managers = data.employees.map(e => e.managers.some(f => f === id));
  const issManager = managers.some(e => e === true);
  return issManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id, firstName, lastName, managers, responsibleFor,
  };
  data.employees.push(newEmployee);
}

function animalCount(especies) {
  // seu código aqui
  if (especies === undefined) {
    const obj = {};
    const names = data.animals.map(e => e.name);
    names.forEach((e, i) => { obj[e] = data.animals[i].residents.length; });
    return obj;
  }
  const animals = data.animals.find(e => e.name === especies);
  const total = animals.residents.length;
  return total;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const arr = ['Adult', 'Child', 'Senior'];
  const { Adult, Child, Senior } = entrants;
  const payers = [Adult, Child, Senior];
  const total = payers.reduce((sum, e, i) => {
    sum += e * data.prices[arr[i]];
    return sum;
  }, 0);
  return total;
}

function createLocationAndSpecies(listOfLocations, animalsByLocation) {
  listOfLocations.forEach(e => data.animals.reduce((arrayOfAnimals, el) => {
    if (el.location === e) {
      arrayOfAnimals.push(el.name);
    }
    animalsByLocation[e] = arrayOfAnimals;
    return arrayOfAnimals;
  }, []));
  return animalsByLocation;
}

function createListOfNames(options) {
  const listOfNames = {};
  data.animals.forEach((e) => {
    const arrOfNames = [];
    e.residents.forEach((el) => {
      if (options.sex === 'female') {
        if (el.sex === 'female') {
          arrOfNames.push(el.name);
        }
      } else {
        arrOfNames.push(el.name);
      }
      if (options.sorted === true) {
        arrOfNames.sort();
      }
      listOfNames[e.name] = arrOfNames;
    });
  });
  return listOfNames;
}

const listOfNamesandLocations = (listOfLocations, animalsByLocation, listOfNames) => {
  listOfLocations.forEach((el) => {
    const arrayWithNames = animalsByLocation[el].map(e => ({ [e]: listOfNames[e] }));
    animalsByLocation[el] = arrayWithNames;
  });
  return animalsByLocation;
};


function animalMap(options) {
  let animalsByLocation = {};
  data.animals.forEach((e) => {
    animalsByLocation[e.location] = ' ';
  });
  const listOfLocations = Object.keys(animalsByLocation);

  animalsByLocation = createLocationAndSpecies(listOfLocations, animalsByLocation);

  if (options === undefined) {
    return animalsByLocation;
  }
  const listOfNames = createListOfNames(options);

  if (options.includeNames === undefined && options.sex === 'female') {
    return createLocationAndSpecies(listOfLocations, animalsByLocation);
  }

  animalsByLocation = listOfNamesandLocations(listOfLocations, animalsByLocation, listOfNames);

  if (options.includeNames === true) {
    return animalsByLocation;
  }
  return animalsByLocation;
}

function schedule(dayName) {
  // seu código aqui
  const days = Object.keys(data.hours);
  if (dayName === undefined) {
    const obj = {};
    days.forEach((e, i) => {
      if (e === 'Monday') {
        obj[e] = 'CLOSED';
      } else {
        obj[e] = `Open from ${data.hours[days[i]].open}am until ${(data.hours[days[i]].close) - 12}pm`;
      }
    });
    return obj;
  }
  const obj = {};
  days.forEach((e) => {
    if (e === dayName) {
      if (e === 'Monday') {
        obj[e] = 'CLOSED';
      } else {
        obj[e] = `Open from ${data.hours[e].open}am until ${(data.hours[e].close) - 12}pm`;
      }
    }
  });
  return obj;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = data.employees.find(e => e.id === id);
  const animal = employee.responsibleFor[0];
  const animalIf = data.animals.find(e => e.id === animal);
  const cadaAnimal = animalIf.residents;
  const age = cadaAnimal.reduce((old, e) => {
    if (old < e.age) {
      old = e.age;
      return old;
    } return old;
  }, 0);
  const maisvelho = cadaAnimal.find(e => e.age === age);
  const arr = [maisvelho.name, maisvelho.sex, maisvelho.age];
  return arr;
}

function increasePrices(percentage) {
  // seu código aqui
  const arr = [data.prices.Adult, data.prices.Senior, data.prices.Child];
  const keys = Object.keys(data.prices);
  arr.forEach((e, i) => {
    data.prices[keys[i]] = (Math.round((e * (1 + (percentage / 100))) * 100)) / 100;
  });
  return data.prices;
}
const newDictionary = () => {
  const ids = data.animals.map(e => e.id);
  const names = data.animals.map(e => e.name);
  const dictionary = {};
  ids.forEach((e, i) => {
    dictionary[e] = names[i];
  });
  return dictionary;
};

function employeeCoverage(idOrName) {
  // seu código aqui
  const dictionary = newDictionary();
  const employees = data.employees.map(e => `${e.firstName} ${e.lastName}`);
  let obj = {};
  const animalsId = data.employees.map(e => e.responsibleFor);
  const translatedAnimals = animalsId.map(e => e.reduce((arr, i) => {
    i = dictionary[i];
    arr.push(i);
    return arr;
  },
    []));
  employees.forEach((e, i) => {
    obj[e] = translatedAnimals[i];
  });
  if (idOrName === undefined) {
    return obj;
  }
  const id = data.employees.find(e => e.id === idOrName
    || e.lastName === idOrName || e.firstName === idOrName);
  const name = `${id.firstName} ${id.lastName}`;
  obj = { [name]: obj[name] };
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
console.log(2)