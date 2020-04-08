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

const [...animals] = data.animals;
const [...employees] = data.employees;

function animalsByIds(...ids) {
  if (ids.length === 0) {
    return ids;
  }
  const resposta = [];
  for (let i = 0; i < ids.length; i += 1) {
    const animalsID = animals.find(element => element.id === ids[i]);
    resposta.push(animalsID);
  }
  return resposta;
}


function animalsOlderThan(animal, age) {
  let boolean = true;
  animals.forEach(function (el) {
    if (el.name === animal) {
      el.residents.forEach(function(el2) {
        if (el2.age > age) {
          boolean = true;
        } else {
          boolean = false;
        }
      });
    }
  });
  return boolean;
}

function employeeByName(employeeName) {
  let result = {};
  employees.forEach(function (el) {
    if (el.firstName === employeeName || el.lastName === employeeName) {
      result = el;
    }
  });
  return result;
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  const [...managers] = employees.map(el => el.managers);
  const arr = [];
  managers.forEach(function (el) {
    if (el.length > 0) {
      el.forEach(function (el2) {
        arr.push(el2);
      });
    }
  });
  let result = false;
  result = arr.some(function (el) {
    if (el === id) {
      return true;
    }
  });
  return result;
}

const addEmployee = (
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) => {
  const x = { id, firstName, lastName, managers, responsibleFor };
  return data.employees.push(x);
};

function animalCount(species) {
  if (species !== undefined) {
    return data.animals.find(el => el.name === species).residents.length;
  }
  const obj = {};
  data.animals.forEach((e) => { obj[e.name] = e.residents.length; });
  return obj;
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  return (
    [entrants, data.prices].reduce((soma, item) => item.Adult * soma, 1) +
    [entrants, data.prices].reduce((soma, item) => item.Child * soma, 1) +
    [entrants, data.prices].reduce((soma, item) => item.Senior * soma, 1)
  );
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const aux = Object.entries(data.hours);
  const result = aux.reduce((acc, [day, { open, close }]) => {
    if (open === 0 && close === 0) {
      acc[day] = 'CLOSED';
    } else {
      acc[day] = `Open from ${open}am until ${close - 12}pm`;
    }
    return acc;
  }, {});
  if (dayName) {
    const unica = {};
    unica[dayName] = result[dayName];
    return unica;
  }
  return result;
}

const oldestFromFirstSpecies = (id) => {
  const emp = data.employees.find(n => n.id === id).responsibleFor[0];
  return Object.values(
    data.animals.find(m => m.id === emp).residents.sort((a, b) => b.age - a.age)[0],
    );
};

function increasePrices(percentage) {
    const cliente = [data.prices.Adult, data.prices.Senior, data.prices.Child];
    const valores = Object.keys(data.prices);
    cliente.forEach((e, i) => {
      data.prices[valores[i]] = (Math.round((e * (1 + (percentage / 100))) * 100)) / 100;
    });
    return data.prices;
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
