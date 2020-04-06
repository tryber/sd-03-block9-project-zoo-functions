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

// 1- Implemente a função animalsByIds:
// Caso receba nenhum parâmetro, necessário retornar um array vazio
// Ao receber como parâmetro um único id, retorna os animais com este id
// Ao receber mais de um id, retorna os animais que têm um desses ids

const animalsByIds = (...ids) => data.animals.filter(animal => ids.find(id => id === animal.id));

// 2 -Implemente a função animalsOlderThan:
// Ao passar o nome de uma espécie e uma idade, testa se
// todos os animais desta espécie possuem a idade mínima especificada

const animalsOlderThan = (animal, age) =>
  data.animals.find(animals => animals.name === animal).residents.every(res => res.age >= age);

// 3- Implemente a função employeeByName:
// Sem parâmetros, retorna um objeto vazio
// Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// Quando provido o último nome do funcionário, retorna o objeto do funcionário

const employeeByName = employeeName =>
  data.employees.find(
    person => person.firstName === employeeName || person.lastName === employeeName,
  ) || {};

// 4- Implemente a função createEmployee:
// Cria um novo colaborador a partir de objetos contendo informações pessoais,
// gerentes e animais gerenciados

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

// 5- Implemente a função isManager:
// Testa se o id passado é de um gerente

const isManager = id =>
  data.employees.some(allManagers => allManagers.managers.find(is => is === id));

// 6- Implemente a função addEmployee:
// Adiciona um funcionário no fim da lista

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) =>
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });

// 7- Implemente a função animalCount:
// Sem parâmetros, returna animais e suas quantidades
// Com o nome de uma espécie de animal, retorna somente a quantidade

function animalCount(species) {
  if (species !== undefined) {
    return data.animals.find(element => element.name === species).residents.length;
  }
  const allAnimals = {};
  data.animals.map(animal => (allAnimals[animal.name] = animal.residents.length));
  return allAnimals;
}

// 8- Returna 0 se nenhum argumento for passado
// Retorna 0 se um objeto vazio for passado
// Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos

const entryCalculator = entrants => {
  if (entrants && Object.keys(entrants).length > 0) {
    return Object.keys(entrants).reduce(
      (acc, person) => acc + data.prices[person] * entrants[person],
      0,
    );
  }

  return 0;
};

function animalMap(options) {
  // seu código aqui
}

// Implemente a função schedule:
// Sem parâmetros, retorna um cronograma legível para humanos
// Se um único dia for passado, retorna somente este dia em um formato legível para humanos

const checkSchedule = (day) => {
  if (day === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
};

const schedule = (dayName) => {
  const cronograma = {};
  if (dayName) {
    cronograma[dayName] = checkSchedule(dayName);
    return cronograma;
  }

  Object.keys(data.hours).forEach((day) => {
    cronograma[day] = `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
    if (day === 'Monday') cronograma[day] = 'CLOSED';
  });

  return cronograma;
};

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
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
