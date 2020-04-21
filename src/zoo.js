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

const animalsByIds = (...ids) => {
  if (!ids.length) return [];
  return data.animals.filter(({ id }) => ids.includes(id));
};

const animalsOlderThan = (species, age) => {
  const speciesFinder = data.animals.find(({ name }) => name === species);
  return speciesFinder.residents.every(({ age: a }) => a > age);
};

const employeeByName = (employeeName) => {
  if (!employeeName) return {};
  return data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
};

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

const isManager = id => data.employees.some(({ managers }) => managers.includes(id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) =>
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });

const animalCount = (species) => {
  const allAnimals = {};
  data.animals.forEach(({ name, residents }) => {
    allAnimals[name] = residents.length;
  });
  if (!species) return allAnimals;
  const animalFinder = data.animals.find(({ name }) => name === species);
  return animalFinder.residents.length;
};

const entryCalculator = (entrants) => {
  if (!entrants || !Object.keys(entrants).length) return 0;
  const pricesEntries = Object.entries(data.prices);
  const entrantsEntries = Object.entries(entrants);
  let payment = 0;
  entrantsEntries.forEach(([age, amount]) => {
    pricesEntries.forEach(([category, price]) => {
      if (category === age) payment += amount * price;
    });
  });
  return payment;
};

const animalMap = (options = {}) => {
  const getNames = (animal, sorted, sex) => {
    const getResidents = {};
    getResidents[animal] = data.animals.find(({ name }) => name === animal).residents;
    if (sex) getResidents[animal] = getResidents[animal].filter(residents => residents.sex === sex);
    getResidents[animal] = getResidents[animal].map(({ name }) => name);
    if (sorted) getResidents[animal].sort();
    return getResidents;
  };

  const { includeNames, sorted, sex } = options;
  return data.animals.reduce((acc, { name, location }) => {
    if (!acc[location]) acc[location] = [];
    if (includeNames) {
      acc[location].push(getNames(name, sorted, sex));
    } else {
      acc[location].push(name);
    }
    return acc;
  }, {});
};

function schedule(dayName) {
  const entries = Object.entries(data.hours);

  if (dayName) {
    const entrie = entries.find(([day]) => day === dayName);
    const [day, { open, close }] = entrie;
    if (dayName === 'Monday') return { [dayName]: 'CLOSED' };
    return { [day]: `Open from ${open}am until ${close - 12}pm` };
  }

  return entries.reduce((acc, [day, { open, close }]) => {
    acc[day] = `Open from ${open}am until ${close - 12}pm`;
    if (day === 'Monday') acc[day] = 'CLOSED';
    return acc;
  }, {});
}

function oldestFromFirstSpecies(id) {
  const employee = data.employees.find(({ id: i }) => i === id);
  const firstAnimal = employee.responsibleFor[0];
  const animal = data.animals.find(({ id: i }) => i === firstAnimal);
  let older;
  animal.residents.reduce((acc, resident) => {
    if (resident.age > acc) {
      acc = resident.age;
      older = resident;
    }
    return acc;
  }, 0);
  return Object.values(older);
}

function round(value, precision) {
  if (Number.isInteger(precision)) {
    const shift = 10 ** precision;
    // Limited preventing decimal issue
    return (Math.round(value * (shift + 0.00000000000001)) / shift);
  }
  return Math.round(value);
}

function increasePrices(percentage) {
  const incrementedValues = Object.values(data.prices).map((value) => {
    const num = value + (value * (percentage / 100));
    return round(num, 2);
  });
  incrementedValues.forEach((value, index) => {
    data.prices[Object.keys(data.prices)[index]] = value;
  });
}

function employeeCoverage(idOrName) {
  const fetchAnimals = list => list.map(id =>
    data.animals.find(animal => animal.id === id).name
  );

  if (idOrName) {
    const fetchEmployee = data.employees.find(({ id, firstName, lastName }) =>
      id === idOrName || firstName === idOrName || lastName === idOrName
    );
    const { firstName, lastName, responsibleFor } = fetchEmployee;
    return { [`${firstName} ${lastName}`]: fetchAnimals(responsibleFor) };
  }

  return data.employees.reduce((acc, { firstName, lastName, responsibleFor }) => {
    acc[`${firstName} ${lastName}`] = fetchAnimals(responsibleFor);
    return acc;
  }, {});
}

console.log(employeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));


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
