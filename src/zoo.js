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

let calendar = {};

const returnCalendar = (dia) => {
  calendar[dia] = `Open from ${hours[dia].open}am until ${hours[dia].close - 12}pm`;
};

const schedule = (dayName) => {
  if (dayName === 'Monday') {
    calendar = {};
    return { Monday: 'CLOSED' };
  }
  if (dayName) {
    calendar = {};
    returnCalendar(dayName);
  } else {
    calendar = {};
    Object.keys(hours).forEach(days => returnCalendar(days));
    calendar.Monday = 'CLOSED';
  }
  return calendar;
};

const oldestFromFirstSpecies = (id) => {
  let higherAge = 0;
  let older = {};
  const choosen = employees.filter(one => one.id === id);
  const animalId = (choosen[0].responsibleFor)[0];
  const animalsList = animals.filter(two => two.id === animalId);
  const residents = animalsList[0].residents;
  residents.forEach((individual) => {
    if (individual.age > higherAge) {
      older = individual;
      higherAge = individual.age;
    }
  });
  const { name, sex, age } = older;
  return [name, sex, age];
};

const increasePrices = (percentage) => {
  Object.keys(prices).forEach((e) => {
    (prices[e] = Math.round(prices[e] * ((percentage / 100) + 1) * 100) / 100);
  });
};

let answerObject = {};

const employeeResponsability = ((personObject) => {
  personObject.responsibleFor.forEach((number) => {
    animals.forEach((specie) => {
      if (specie.id === number) {
        answerObject[`${personObject.firstName} ${personObject.lastName}`].push(specie.name);
      }
    }, []);
  });
});

function employeeCoverage(idOrName) {
  if (idOrName) {
    answerObject = {};
    const selected = employees.filter(employ =>
    employ.id === idOrName ||
    employ.firstName === idOrName ||
    employ.lastName === idOrName);
    answerObject[`${selected[0].firstName} ${selected[0].lastName}`] = [];
    employeeResponsability(selected[0]);
  } else {
    answerObject = {};
    employees.forEach((employee) => {
      answerObject[`${employee.firstName} ${employee.lastName}`] = [];
      employeeResponsability(employee);
    });
  }
  return answerObject;
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
