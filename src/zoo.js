// Commit pra constatar mudança do nome git hub

const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  const result = ids.map(e => (ids === [] ? [] : data.animals.find(animal => animal.id === e)));
  return result;
}

function animalsOlderThan(animal, age) {
  // seu código aqui

  const result = data.animals.some((e) => {
    const olderThan = e.residents.every(resident => resident.age > age);
    return e.name === animal && olderThan;
  });
  return result;
}
animalsOlderThan('penguins', 10);

// Done
function employeeByName(employeeName) {
  //
  if (employeeName === undefined) return {};
  return data.employees.find(
    employe => employe.firstName === employeeName,
  ) || data.employees.find(
    employe => employe.lastName === employeeName,
  );
}
function createEmployee(personalInfo, associatedWith) {
  const obj = { ...personalInfo, ...associatedWith };

  // return { ...personalInfo, ...associatedWith };

  return obj;
}

function isManager(id) {
  // DONE
  const result = data.employees.some(e => e.managers.includes(id));
  return result;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id, firstName, lastName, managers, responsibleFor,
  };
  data.employees.push(employee);
  return employee;
}

function animalCount(species) {
  const sortByKey = obj => Object.keys(obj).sort().reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
  if (!species) {
    const animalList = data.animals.reduce((acc, animal) => {
      acc[animal.name] = animal.residents.length;
      return acc;
    }, {});
    return sortByKey(animalList);
  }
  const search = data.animals.find(e => e.name === species).residents.length;
  return search;
}


function entryCalculator(entrants) {
  // seu código aqui
  if (typeof entrants !== 'object' || entrants === {}) { return 0; }

  const entries = Object.entries(entrants);
  const sum = entries.reduce((acc, entry) => {
    acc += data.prices[entry[0]] * entry[1];
    return acc;
  }, 0);
  return sum;
}

function animalMap(options) {
  const getLocations = () => data.animals.map(({ location }) => location).reduce((acc, local) => {
    if (acc[local] === undefined) acc[local] = [];
    return acc;
  }, {});
  const local = getLocations();
  const searchBase = data.animals;

  data.animals.forEach((animal) => {
    if (!!options && typeof options.sex === 'string') {
      const filtered = animal.residents.filter(resident => resident.sex === options.sex);
      animal.residents = filtered;
    }
  });
  searchBase.forEach((animal) => {
    if (!!options && options.includeNames === true) {
      const obj = {};
      const namesMaped = animal.residents.map(resident => resident.name);
      obj[animal.name] = options.sorted === true ? namesMaped.sort() : namesMaped;
      local[animal.location].push(obj);
      return local;
    }
    local[animal.location].push(animal.name);
    return local;
  });

  return local;
}

function schedule(dayName) {
  const entries = Object.entries(data.hours);

  const list = entries.reduce((acc, [day, { open, close }]) => {
    acc[day] = `Open from ${open}am until ${close - 12}pm`;
    if (open === 0 && close === 0) {
      acc[day] = 'CLOSED';
    }
    // open > 12 ? open = `${open - 12}pm` : open = open + 'am';
    // close > 12 ? close = `${close - 12}pm` : close = close + 'am';
    return acc;
  }, {});
  if (dayName) {
    const unique = {};
    unique[dayName] = list[dayName];
    return unique;
  }
  return list;
}
schedule('Monday');
function oldestFromFirstSpecies(id) {
  // DONE
  if (!id) return null;
  const chosen = data.employees.find(employee => employee.id === id);
  const { responsibleFor: [animalId] } = chosen;
  const anima = data.animals.find(animal => animal.id === animalId);
  const val = Object.values;
  const result = anima.residents
    .reduce((old, value) => (val(value)[2] > val(old)[2] ? val(value) : val(old)));
  return result;
}
oldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad');

function increasePrices(percentage) {
  // DONE
  const result = Object.entries(data.prices).reduce((acc, value) => {
    acc[value[0]] = parseFloat(Math.ceil(value[1] * (percentage + 100))) / 100;
    return acc;
  }, {});
  data.prices = result;
}

function employeeCoverage(idOrName) {
  // seu código aqui
  const coverageById = data.employees.reduce((acc, employee) => {
    const fullName = `${employee.firstName} ${employee.lastName}`;
    acc[fullName] = employee.responsibleFor.map((id, name) => {
      name = data.animals.find(animal => animal.id === id).name;
      return name;
    });

    return acc;
  }, {});
  const test = data.employees.reduce((acc, emplo) => {
    if (idOrName === emplo.id || idOrName === emplo.firstName || idOrName === emplo.lastName) {
      const newFullName = `${emplo.firstName} ${emplo.lastName}`;
      acc[newFullName] = coverageById[newFullName];
    }
    return acc;
  }, {});


  if (idOrName) { return test; }
  return coverageById;
}
employeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad');


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
