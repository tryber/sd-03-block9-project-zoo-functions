
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  const result = ids.map((e) => (ids === [] ? [] : data.animals.find((animal) => animal.id === e)));
  return result;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const result = data.animals.some((e) => {
    if (e.name === animal) return e.residents.every((resident) => resident.age > age);
  });
  return result;
}
animalsOlderThan('penguins', 10);

// Done
function employeeByName(employeeName) {
  //
  return employeeName === undefined ? {}
    : data.employees.find((employe) => {
      if (employe.firstName === employeeName) {
        return employe;
      }
    }) || data.employees.find((employe) =>
    employe.lastName === employeeName)

}

function createEmployee(personalInfo, associatedWith) {
  const obj = { ...personalInfo, ...associatedWith };

  // return { ...personalInfo, ...associatedWith };

  return obj;
}

// createEmployee(personalInfo, associatedWith)
function isManager(id) {
  // DONE
  const result = data.employees.some((e) => e.managers.includes(id));
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
  const sortByKey = (obj) => Object.keys(obj).sort().reduce((acc, key) => {
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
  const search = data.animals.find((e) => e.name === species).residents.length;
  if (species) { return search; }
}


function entryCalculator(entrants) {
  // seu código aqui
  if (typeof entrants !== 'object' || entrants === {}) { return 0; }

  const values = [entrants, data.prices];
  const reduceAdult = values.reduce((acc, val) => (typeof val.Adult !== 'number' ? null : val.Adult * acc), 1);
  const reduceChild = values.reduce((acc, val) => (typeof val.Child !== 'number' ? null : val.Child * acc), 1);
  const reduceSenior = values.reduce((acc, val) => (typeof val.Senior !== 'number' ? null : val.Senior * acc), 1);
  const price = reduceAdult + reduceChild + reduceSenior;

  console.log('price ', price);
  return price;
}
console.log(entryCalculator({ Adult: 2 }));

function animalMap(options) {

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
  const chosen = data.employees.find((employee) => employee.id === id);
  const { responsibleFor: [animalId] } = chosen;
  const animal = data.animals.find((animal) => animal.id === animalId);
  const result = animal.residents
    .reduce((old, value) => {
      const val = Object.values;
      val(value)[2] > val(old)[2] ? old = val(value) : val(old);
      return old;
    });
  return result;
}
oldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad');

function increasePrices(percentage) {
  // DONE
  let result = data.prices;
  result = Object.entries(data.prices).reduce((acc, value) => {
    acc[value[0]] = parseFloat(Math.ceil(value[1] * (percentage + 100))) / 100;
    return acc;
  }, {});
  return result;
}

function employeeCoverage(idOrName) {
  // seu código aqui
  const coverageById = data.employees.reduce((acc, employee) => {
    const fullName = `${employee.firstName} ${employee.lastName}`;
    acc[fullName] = employee.responsibleFor.map((id, name) => {
      name = data.animals.find((animal) => animal.id === id).name;
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
