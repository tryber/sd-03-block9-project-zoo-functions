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
  const result = [];
  const animals = data.animals;
  if (ids) {
    ids.forEach(index => result.push(...animals.filter(element => element.id === index)));
    return result;
  }
  return ids;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalSelecionado = name =>
    data.animals.filter(element => element.name === name);

  const animalSelecionadoLista = animalSelecionado(animal);

  const idadeAnimalLista = animalSelecionadoLista[0].residents.reduce(
    (accumulator, element) => {
      accumulator.push(element.age);
      return accumulator;
    }, []);

  return idadeAnimalLista.every(element => element >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName) {
    return data.employees.find(
      element => element.firstName === employeeName
      || element.lastName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  let gerentes = [];
  gerentes = data.employees.reduce((accumulator, element) =>
  `${accumulator},${element.managers}`, ['0']);
  if (gerentes.split(',').find(element => element === id)) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  if (!managers && !responsibleFor) {
    managers = [];
    responsibleFor = [];
    const employee = { id, firstName, lastName, managers, responsibleFor };
    data.employees.push(employee);
  } else {
    const employee = { id, firstName, lastName, managers, responsibleFor };
    data.employees.push(employee);
  }
}

function animalCount(species) {
  // seu código aqui
  const count = data.animals.reduce((accumulator, element) => {
    accumulator[element.name] = element.residents.length;
    return accumulator;
  }, {});

  if (!species) return count;

  let countIndividual = 0;
  Object.keys(count).forEach((element) => {
    if (element === species) {
      countIndividual = count[element];
    }
  });
  return countIndividual;
}

function entryCalculator(entrants) {
  // seu código aqui
  let result = 0;
  if (!entrants) return result;
  if (typeof entrants === 'object'
    && Object.keys(entrants).length === 0) return result;

  const { Adult, Child, Senior } = entrants;
  const { Adult: pAdult, Child: pChild, Senior: pSenior } = data.prices;
  result = (Adult * pAdult) + (Child * pChild) + (Senior * pSenior);
  return result;
}

function animalMap(options = {}) {
  // seu código aqui
  const getResidentsName = (animal, sorted, sex) => {
    const residentsList = {};
    residentsList[animal] = data.animals
      .find(element => element.name === animal).residents;
    if (sex) residentsList[animal] = residentsList[animal].filter(resident => resident.sex === sex);
    residentsList[animal] = residentsList[animal].map(({ name }) => name);
    if (sorted) residentsList[animal].sort();
    return residentsList;
  };

  const { includeNames, sex, sorted } = options;

  return data.animals.reduce((acc, { name, location }) => {
    if (!acc[location]) acc[location] = [];
    if (!includeNames) {
      acc[location].push(name);
    } else {
      acc[location].push(getResidentsName(name, sorted, sex));
    }
    return acc;
  }, {});
}

function schedule(dayName) {
  // seu código aqui
  let week = {};
  const dayHours = {};
  const hours = data.hours;
  week = Object.keys(hours).reduce((accumulator, element) => {
    if (hours[element].open === 0 && hours[element].close === 0) {
      accumulator[element] = 'CLOSED';
    } else accumulator[element] = `Open from ${hours[element].open}am until ${hours[element].close - 12}pm`;
    return accumulator;
  }, {});

  if (!dayName) return week;

  if (week.hasOwnProperty.call(week, `${dayName}`)) {
    dayHours[dayName] = week[dayName];
  }
  return dayHours;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  let oldest = [];
  let ages = 0;
  let agesIndex = 0;

  const animalsGroup = data.employees.reduce((accumulator, element) => {
    if (element.id === id) {
      accumulator = element.responsibleFor;
    }
    return accumulator;
  }, {});

  const tutoredAnimalType = data.animals.find(element =>
    element.id === animalsGroup[0]);

  const animalList = tutoredAnimalType.residents;

  animalList.forEach((element, index) => {
    if (element.age > ages) {
      ages = element.age;
      agesIndex = index;
    }
  });

  oldest = [`${animalList[agesIndex].name}`, `${animalList[agesIndex].sex}`, ages];
  return oldest;
}

function increasePrices(percentage) {
  // seu código aqui
  // refatorar
  const roundedFloat = num => Number((Math.round(num * 100) / 100).toFixed(2));
  const { Adult, Child, Senior } = data.prices;
  const alteredPrices = {};

  alteredPrices.Adult = (Adult + (Adult * (percentage / 100)));
  data.prices.Adult = roundedFloat(alteredPrices.Adult);

  alteredPrices.Child = (Child + (Child * (percentage / 100)));
  data.prices.Child = roundedFloat(alteredPrices.Child);

  alteredPrices.Senior = (Senior + (Senior * (percentage / 100)));
  data.prices.Senior = roundedFloat(alteredPrices.Senior);

  return data.prices;
}

function employeeCoverage(idOrName) {
  // seu código aqui
  const result = {};

  const employeeResponsabilities = ((personObject) => {
    console.log(personObject);
    personObject.responsibleFor.forEach((number) => {
      data.animals.forEach((specie) => {
        if (specie.id === number) {
          result[`${personObject.firstName} ${personObject.lastName}`].push(specie.name);
        }
      }, []);
    });
  });

  const employeeSelect = () => {
    const selected = data.employees.filter(employ => employ.id === idOrName
      || employ.firstName === idOrName || employ.lastName === idOrName);
    result[`${selected[0].firstName} ${selected[0].lastName}`] = [];
    employeeResponsabilities(selected[0]);
  };

  const allEmployees = () => {
    data.employees.forEach((employee) => {
      result[`${employee.firstName} ${employee.lastName}`] = [];
      employeeResponsabilities(employee);
    });
  };

  if (idOrName) {
    employeeSelect();
    return result;
  }

  allEmployees();
  return result;
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
