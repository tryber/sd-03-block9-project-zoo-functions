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

/* Caso receba nenhum parâmetro, necessário retornar um array vazio
Ao receber como parâmetro um único id, retorna os animais com este id
Ao receber mais de um id, retorna os animais que têm um desses ids */

function animalsByIds(...ids) {
  if (ids) {
    return data.animals.filter(animal => ids.find(id => id === animal.id));
  }
  return [];
}

/* Ao passar o nome de uma espécie e uma idade, testa se todos os animais
desta espécie possuem a idade mínima especificada */

function animalsOlderThan(animal, age) {
  const findSpecie = data.animals.find(({ name }) => name === animal);
  return findSpecie.residents.every(({ age: aAge }) => aAge >= age);
}

// Sem parâmetros, retorna um objeto vazio
// Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// Quando provido o último nome do funcionário, retorna o objeto do funcionário

function employeeByName(employeeName) {
  if (employeeName) {
    return data.employees.find(
      ({ firstName, lastName }) =>
        firstName === employeeName || lastName === employeeName,
    );
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(element =>
    element.managers.find(manId => manId === id),
  );
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  if (species) {
    const findSpecie = data.animals.find(element => element.name === species);
    const speciePop = findSpecie.residents.length;
    return speciePop;
  }
  const allAnimals = {};
  data.animals.forEach((element) => {
    allAnimals[element.name] = element.residents.length;
  });
  return allAnimals;
}

// console.log(animalCount('lions'));
// console.log(animalCount());

function entryCalculator(entrants) {
  if (entrants === 0
    || entrants === undefined
    || entrants === null
    || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult, Senior, Child } = entrants;
  return (Adult * data.prices.Adult) + (Senior * data.prices.Senior) + (Child * data.prices.Child);
}

// console.log(entryCalculator({'Adult' : 2, 'Senior': 1, 'Child': 3}));

function animalMap(options) {
  // const animalsByLocation = getLocation();
}

/* function getLocation() {
  const location = data.animals.map(({ location }) => location);
  const animalsByLocation = location.reduce((acummulator, location) => {
    if (acummulator[location] === undefined) acummulator[location] = [];
    return acummulator;
  }, {});
  return animalsByLocation;
} */


const assistSchedule = (day) => {
  if (day === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
};

function schedule(dayName) {
  const scheduleObj = {};
  if (dayName) {
    scheduleObj[dayName] = assistSchedule(dayName);
    return scheduleObj;
  }
  Object.keys(data.hours).forEach((day) => {
    scheduleObj[day] = assistSchedule(day);
  });
  return scheduleObj;
}

function oldestFromFirstSpecies(id) {
  const findEmployee = data.employees.find(element => element.id === id);
  // console.log(findEmployee);
  const firstAnimalRespID = findEmployee.responsibleFor[0];
  // console.log(firstAnimalRespID);
  const findAnimalById = data.animals.find(element => element.id === firstAnimalRespID);
  // console.log(findAnimalById);
  const residentsFound = findAnimalById.residents;
  // console.log(residentsFound);
  const sortedResidents = residentsFound.sort((a, b) => {
    if (a.age < b.age) {
      return 1;
    }
    return -1;
  });
  console.log(sortedResidents);
  return Object.values(sortedResidents[0]);
}

// oldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1')

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((elem) => {
    (data.prices[elem] = Math.round(data.prices[elem] * ((percentage / 100) + 1) * 100) / 100);
  });
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
