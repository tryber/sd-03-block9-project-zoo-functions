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
  if (ids.length === 0) return [];
  const animals = [];
  ids.forEach((ida) => animals.push(data.animals.find(({ id }) => id === ida)));
  return animals;
}

function animalsOlderThan(animal, agep) {
  return data.animals
    .find(({ name }) => name === animal)
    .residents.every(({ age }) => age > agep);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(
    (employee) => employee.firstName === employeeName || employee.lastName === employeeName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return Boolean(data.employees.find(({ managers }) => managers.includes(id)));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  data.employees.push({
    id, firstName, lastName, managers, responsibleFor
  });
}

function animalCount(species) {
  if (species) { return data.animals.find(({ name }) => name === species).residents.length; }
  return data.animals.reduce(
    (object, animal) => Object.assign(object, { [animal.name]: animal.residents.length }),
    {},
  );
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  return Object.entries(entrants).reduce(
    (valor, entrant) => valor + entrant[1] * data.prices[entrant[0]],
    0,
  );
}

function animalMap(options) {
  const locations = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  function findAnimals(location) {
    locations[location] = data.animals
      .filter((animal) => animal.location === location)
      .reduce((acc, e) => acc.concat(e.name), []);
  }
  Object.keys(locations).forEach(findAnimals);

  if (options && options.includeNames) {
    const animalsNames = (desireAnimal, desireSex) => {
      const animals = data.animals.find(({ name }) => name === desireAnimal)
        .residents;

      if (desireSex) {
        return animals
          .filter(({ sex }) => sex === desireSex)
          .reduce((acc, { name }) => acc.concat(name), []);
      }
      return animals.reduce((acc, { name }) => acc.concat(name), []);
    };


    Object.entries(locations).forEach((element) => {
      const object = element[1].reduce((acc, animal) => {
        const animalNamesObject = { [animal]: animalsNames(animal, options.sex) };
        return acc.concat(animalNamesObject);
      }, []);
      locations[element[0]] = object;
    });

    if (options.sorted) {
      Object.keys(locations).forEach((location) =>{
        locations[location].forEach(animal => {
          animal[Object.keys(animal)[0]] = Object.values(animal)[0].sort();
        });
      });
    }
  }
  return locations;
}

function schedule(dayName) {
  function makeDay(day) {
    function legibleHour(hour) {
      if (hour < 12) return `${hour}am`;
      if (hour === 12) return '12pm';
      return `${hour - 12}pm`;
    }
    if (data.hours[day].open === data.hours[day].close) return 'CLOSED';
    return `Open from ${legibleHour(data.hours[day].open)} until ${legibleHour(
      data.hours[day].close,
    )}`;
  }

  if (dayName) return { [dayName]: makeDay(dayName) };
  return Object.keys(data.hours)
    .reduce((scheduleObject, day) => ({ ...scheduleObject, ...{ [day]: makeDay(day) } }), {});
}

function oldestFromFirstSpecies(idf) {
  const animalId = data.employees.find(({ id }) => id === idf)
    .responsibleFor[0];
  const oldestAnimal = data.animals
    .find(({ id }) => id === animalId)
    .residents.reduce((oldest, animal) => oldest.age > animal.age ? oldest : animal);
  return Object.values(oldestAnimal);
}

function increasePrices(percentage) {
  data.prices = Object.entries(data.prices).reduce(
    (acc, e) => Object.assign(acc, {
      [e[0]]:
          Math.round(data.prices[e[0]] * (1 + percentage / 100) * 100) / 100,
    }),
    {},
  );
}

function employeeCoverage(par) {
  const employeer = (idOrName) => data.employees.find(
    (employee) => employee.id === idOrName
        || employee.firstName === idOrName
        || employee.lastName === idOrName,
  );
  const animals = (id) => animalsByIds(...id).reduce((acc, animal) => acc.concat(animal.name), []);
  const returned = (idName) => ({
    [`${employeer(idName).firstName} ${employeer(idName).lastName}`]: animals(
      employeer(idName).responsibleFor,
    ),
  });

  if (!par) {
    return data.employees.reduce(
      (acc, element) => Object.assign(acc, returned(element.id)),
      {},
    );
  }
  return returned(par);
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
