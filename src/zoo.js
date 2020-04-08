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
let animalsFind = {};
function animalsByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  const result = [];
  ids.forEach(idt => result.push(data.animals.find(element => element.id === idt)));
    // ids.forEach(idt => result.push(data.animals.find(({ element }) => element === idt)));
  return result;
}
function animalsOlderThan(animal, age) {
  // seu código aqui
  let maisVelhos = false;
  const especiesSelected = data.animals.filter(element => element.name === animal);
  const especiesSelected2 = especiesSelected[0].residents.filter(element => element.age >= age);
  if (especiesSelected2.length === 0) {
    maisVelhos = false;
  } else if (especiesSelected2.length === especiesSelected[0].residents.length) {
    maisVelhos = true;
  }

  return maisVelhos;
}

function employeeByName(employeeName) {
  // seu código aqui
  let employeeSelected = {};
  if (!employeeName) {
    return {};
  }
  employeeSelected = data.employees.filter(
  element => element.firstName === employeeName || element.lastName === employeeName);
  return employeeSelected[0];
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const isManagerFilter = data.employees[0].managers.filter(element => element === id);
  if (isManagerFilter.length === 0) {
    return false;
  } else if (isManagerFilter.length > 0) {
    return true;
  }
  return 0;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  if (!managers && !responsibleFor) {
    const newObject = {
      id,
      firstName,
      lastName,
      managers: [],
      responsibleFor: [],
    };
    return data.employees.push(newObject);
  }

  const newObject = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newObject);

  return data.employees;
}

function animalCount(species) {
  // seu código aqui.
  if (!species) {
    const object2 = {};
    data.animals.forEach((element) => {
      object2[element.name] = element.residents.length;
    });
    return object2;
  }
  const especie = data.animals.find(element => element.name === species);
  return especie.residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants) {
    return 0;
  } else if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const total = (data.prices.Adult * entrants.Adult)
    + (data.prices.Senior * entrants.Senior) +
    (data.prices.Child * entrants.Child);
  return total;
}

function animalMap(options) {
  // seu código aqui
}

function from24to12HoursOpen(openHour, element) {
  openHour = element.open < 12 ? `${element.open}am` : `${element.open - 12}pm`;
  return openHour;
}

function from24to12HoursClose(closeHour, element) {
  closeHour = element.close > 12 ? `${element.close - 12}pm` : `${element.close}am`;
  return closeHour;
}

function percoreObjeto(object, objaux) {
  const daysOfWeek = Object.keys(data.hours);
  let i = 0;
  let openHour;
  let closeHour;
  Object.values(object).forEach((element) => {
    if (element.open === 0 && element.close === 0) {
      objaux[daysOfWeek[i]] = 'CLOSED';
      i += 1;
    }
    openHour = from24to12HoursOpen(openHour, element);
    closeHour = from24to12HoursClose(closeHour, element);
    if (daysOfWeek[i] === undefined) {
      return '';
    }
    objaux[daysOfWeek[i]] = `Open from ${openHour} until ${closeHour}`;
    i += 1;
    return objaux;
  });
  return objaux;
}

function schedule(dayName) {
  // seu código aqui
  const obj = {};
  percoreObjeto(data.hours, obj);
  if (!dayName) {
    return obj;
  }
  const daySelected = Object.keys(obj).find(element => element === dayName);
  const obj2 = { [daySelected]: obj[daySelected] };
  return obj2;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const firstSpecie = data.employees.find(element => element.id === id).responsibleFor[0];
  const oldestAnimalSpecie = data.animals.filter(element => element.id === firstSpecie);
  const animalsAge = [];
  oldestAnimalSpecie[0].residents.forEach((element) => {
    animalsAge.push(element.age);
  });
  let maxAge = 0;
  maxAge = Math.max(...animalsAge);
  const result = oldestAnimalSpecie[0].residents.find(element => element.age === maxAge);
  return Object.values(result);
}

function increasePrices(percentage) {
  // seu código aqui
  const seniorPrices = Math.round(data.prices.Senior * ((percentage / 100) + 1) * 100) / 100;
  const childPrices = Math.round(data.prices.Child * ((percentage / 100) + 1) * 100) / 100;
  const adultPrices = Math.round(data.prices.Adult * ((percentage / 100) + 1) * 100) / 100;
  data.prices = { Adult: adultPrices, Child: childPrices, Senior: seniorPrices };
}

const responsibleFor = (element) => {
const respId = element.responsibleFor;

let animalsList = [];
respId.forEach(element2 => {   
  animalsById = data.animals.filter(element3 => element3.id === element2);
  animalsList.push(animalsById[0].name);
});
animalsFind[element.firstName + " "+ element.lastName] = animalsList;
return animalsFind ;
}

/* function responsibleForId(byId){
  const respId = byId.responsibleFor;
  let animalsList = [];
  respId.forEach(element2 => {   
    animalsById = data.animals.filter(element3 => element3.id === element2);
    animalsList.push(animalsById[0].name);  
  });
  animalsFind2[byId.firstName + " "+ byId.lastName] = animalsList;
  return animalsFind2;
} */

function employeeCoverage(idOrName) {
  // seu código aqui
  animalsFind = {};
 /*  animalsFind2 = {}; */
  if (!idOrName) {
  let result =  data.employees.map(element => responsibleFor(element));
  console.log(result[0]);
  return result[0];
  }else if (idOrName) { 
 const employeeByName = data.employees.find(element4 => element4.id == idOrName 
    || element4.firstName == idOrName || element4.lastName == idOrName);
    let result = responsibleFor(employeeByName);
  return result;
 }
}
 employeeCoverage('Spry');
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
