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
  if (!ids) return [];
  const group =
    data.animals.filter(idItem => ids.includes(idItem.id));
  return group;
};

const animalsOlderThan = (animal, age) => {
  const checkAnimals =
    data.animals.find(item => item.name === animal)
                .residents.every(itemAge => itemAge.age >= age);
  return checkAnimals;
};

const employeeByName = (employeeName) => {
  if (!employeeName) return {};
  const employeeSearch =
    data.employees.find(item => item.firstName === employeeName || item.lastName === employeeName);
  return employeeSearch;
};

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

const isManager = (id) => {
  const manager =
    data.employees.find(employee => employee.managers.includes(id));
  return !!manager;
};

const addEmployee = (id, firstName, lastName, managers, responsibleFor) => {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers: managers || [],
    responsibleFor: responsibleFor || [],
  };
  return data.employees.push(newEmployee);
};

const animalCount = (species) => {
  if (!species) {
    const allSpecies = {};
    data.animals.forEach((animal) => {
      allSpecies[animal.name] = animal.residents.length;
    });
    return allSpecies;
  }
  const oneSpecie =
    data.animals.find(animal => animal.name.includes(species)).residents.length;
  return oneSpecie;
};

const entryCalculator = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult: aPrice, Senior: sPrice, Child: cPrice } = data.prices;
  const { Adult, Senior, Child } = entrants;
  return (aPrice * Adult) + (sPrice * Senior) + (cPrice * Child);
};

function animalMap(options=false) {
  const {includeNames, sorted, sex} = options
  const animalsByLocation = {};
    data.animals.map((animal) => {
      if (!animalsByLocation[animal.location]){
        animalsByLocation[animal.location] = []
      }
      const item = includeNames ? 
        { [animal.name] : animal.residents.map((resident)=>resident.name) } 
        : animal.name
      animalsByLocation[animal.location].push(item);
    });
  return animalsByLocation
}

console.log(animalMap({includeNames:1}));


const generateSchedule = (open, close) => {
  if (open && close) {
    return `Open from ${open}am until ${close - 12}pm`;
  }
  return 'CLOSED';
};

const schedule = (dayName) => {
  const legibleSchedule = {};
  if (!dayName) {
    Object.entries(data.hours).forEach(([day, value]) => {
      legibleSchedule[day] = generateSchedule(value.open, value.close);
    });
  } else if (data.hours[dayName]) {
    const value = data.hours[dayName];
    legibleSchedule[dayName] = generateSchedule(value.open, value.close);
  }
  return legibleSchedule;
};

const oldestFromFirstSpecies = (id) => {
  const employeeAnimal =
    data.employees.find(item => item.id === id).responsibleFor[0];
  const oldest =
    data.animals.find(idAnimal => idAnimal.id === employeeAnimal)
                .residents.sort((a, b) => b.age - a.age);
  return [oldest[0].name, oldest[0].sex, oldest[0].age];
};

const increasePrices = (percentage) => {
  const value = Object.entries(data.prices);
  value.forEach(([type, price]) => {
    data.prices[type] = (Math.round((price * ((percentage / 100) + 1) * 100))) / 100;
  });
  return data.prices;
};

function employeeCoverage(idOrName) {
  // const employeeAnimal =
  //   data.employees.find(item => item.id === idOrName).responsibleFor;
  // if (!idOrName) {
  //   const allAnimalsByEmployee = {};
  //   data.employees.forEach((name) => {
  //     allAnimalsByEmployee[`${employee.firstName} ${employee.lastName}`] = []
  //   });
  // }
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
