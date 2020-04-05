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
  if (ids.length === 0) return ids;
  return ids.map(id => data.animals.find(animal => animal.id === id));
}

function animalsOlderThan(animal, age) {
  if (
    data.animals.find(
      anima =>
        anima.name === animal &&
        anima.residents.find(resident => resident.age === age),
    )
  ) {
    return false;
  } return true;
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find(
    employe =>
      employe.firstName === employeeName || employe.lastName === employeeName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  if (
    data.employees.find(employe =>
      employe.managers.find(managers => managers === id),
    )
  ) {
    return true;
  }
  return false;
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (species === undefined) {
    return data.animals.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.residents.length;
      return accumulator;
    }, {});
  }
  return data.animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  return Object.entries(entrants).map((entry) => {
    if (entry[0] === 'Adult') {
      return entry[1] * 49.99;
    } else if (entry[0] === 'Child') {
      return entry[1] * 20.99;
    } else if (entry[0] === 'Senior') {
      return entry[1] * 24.99;
    }
    return undefined;
  }).reduce((accumulator, currentValue) => accumulator + currentValue);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(...dayName) {
  let array;
  if (Object.keys(dayName).length === 0) {
    array = Object.keys(data.hours);
  } else array = dayName;
  return array.reduce((accumulator, currentValue) => {
    if (data.hours[currentValue].open === 0 && data.hours[currentValue].close === 0 ) {
        accumulator[currentValue] = 'CLOSED';
    } else accumulator[currentValue] = `Open from ${data.hours[currentValue].open}am until ${data.hours[currentValue].close - 12}pm`;
    return accumulator;
  }, {});
}

function firstAnimalEmploye(id) {
  return data.animals.find(
    animal =>
      animal.id ===
      data.employees.find(employe => employe.id === id).responsibleFor[0],
  ).residents;
}
function characteristicsAnimalEmploye(firstAnimal) {
  const olde = Math.max.apply(
    null,
    firstAnimal.map(animal => animal.age),
  );
  return Object.values(firstAnimal.find(animal => animal.age === olde));
}
function oldestFromFirstSpecies(id) {
  return characteristicsAnimalEmploye(firstAnimalEmploye(id));
}

function increasePrices(percentage) {
  return Object.keys(data.prices).forEach(
    price =>
      (data.prices[price] =
        Math.round(data.prices[price] * ((percentage / 100) + 1) * 100) / 100),
  );
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
