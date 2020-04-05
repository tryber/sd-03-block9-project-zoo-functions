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

/* 1. Implemente a função animalsByIds:
  Caso receba nenhum parâmetro, necessário retornar um array vazio
  Ao receber como parâmetro um único id, retorna os animais com este id
  Ao receber mais de um id, retorna os animais que têm um desses ids
*/

function animalsByIds(...ids) {
  return data.animals.filter(animal => ids.find(id => id === animal.id));
}

// 2. Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada

function animalsOlderThan(animal, age) {
  return data.animals.find(grp => grp.name === animal).residents.every(res => res.age >= age);
}
//  console.log(animalsOlderThan('tigers', 10));

/* 3. Implemente a função employeeByName
  Sem parâmetros, retorna um objeto vazio
  Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
  Quando provido o último nome do funcionário, retorna o objeto do funcionário
*/

function employeeByName(employeeName) {
  return data.employees.find(emp =>
    emp.firstName === employeeName || emp.lastName === employeeName) || {};
}
//  console.log(employeeByName('Ola'));

// 4. Cria um novo colaborador a partir de objetos contendo informações pessoais, gerentes e animais gerenciados

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}
//  console.log(createEmployee(personalInfo, associatedWith));

// 5. Testa se o id passado é de um gerente

function isManager(id) {
  return data.employees.some(emp => emp.managers.find(superiores => superiores === id));
}
// O .some é necessário, pois se usar só o find ele retorna undefined se o ID não existir.
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

// 6. Adiciona um funcionário no fim da lista

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const emp = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(emp);
}

/* 7. Implemente a função animalCount:
  Sem parâmetros, returna animais e suas quantidades
  Com o nome de uma espécie de animal, retorna somente a quantidade
*/

function animalCount(species) {
  if (species) {
    return data.animals.find(anim => anim.name === species).residents.length;
  }
  const objAnimais = {};
  data.animals.forEach((animal) => { objAnimais[animal.name] = animal.residents.length; });
  return objAnimais;
}
// console.log(animalCount());

/* 8. Implemente a função entryCalculator:
  Returna 0 se nenhum argumento for passado
  Retorna 0 se um objeto vazio for passado
  Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos
*/

function entryCalculator(entrants) {
  if (entrants) {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;
    return (Adult * 49.99) + (Child * 20.99) + (Senior * 24.99);
  }
  return 0;
}
// console.log(entryCalculator({ 'Adult': 2, 'Child': 3, 'Senior': 1 }));

/* 9. Implemente a função animalMap:
  Sem parâmetros, retorna animais categorizados por localização
  Com opções especificadas, retorna nomes de animais
  Com opções especificadas, retorna nomes de animais ordenados
  Com opções especificadas, retorna somente nomes de animais macho/fêmea
  Só retorna informações específicas de gênero se includeNames for setado
 */

function animalMap(options) {
  // SKIPPED
}

/* 10. Implemente a função schedule:
  Sem parâmetros, retorna um cronograma legível para humanos
  Se um único dia for passado, retorna somente este dia em um formato legível para humanos
*/
const geraChave = (dia) => {
  const { open, close } = data.hours[dia];
  if (dia === 'Monday') return 'CLOSED';
  return `Open from ${open}am until ${close - 12}pm`;
};

function schedule(dayName) {
  const horarios = {};
  if (dayName) {
    horarios[dayName] = geraChave(dayName);
  } else {
    Object.keys(data.hours).forEach((dia) => { horarios[dia] = geraChave(dia); });
  }
  return horarios;
}
// console.log(schedule());

// 11. Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie

function oldestFromFirstSpecies(id) {
  const idFunc = data.employees.find(emp => emp.id === id);
  const grpAnimais = data.animals.find(especie => especie.id === idFunc.responsibleFor[0]);
  const maisVelho = grpAnimais.residents.sort(function (a, b) { return b.age - a.age; })[0];
  return [maisVelho.name, maisVelho.sex, maisVelho.age];
}
// console.log(oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// 12. Implemente a função increasePrices: Ao passar uma porcentagem, incrementa todos os preços, arrendondados em duas casas decimais

const novoPreco = (antigo, porcent) => {
  return (antigo * (1 + (porcent / 100))).toFixed(2); };

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((pessoa) => {
    data.prices[pessoa] = novoPreco(data.prices[pessoa], percentage);
    // console.log(data.prices[pessoa]);
  })
}

/* 13. Implemente a função employeeCoverage:
  Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais eles são responsáveis
  Com o id de um funcionário, retorna os animais pelos quais o funcionário é responsável
  Com o primeiro nome de um funcionário, retorna os animais pelos quais o funcionário é responsável
  Com o último nome de um um funcionário, retorna os animais pelos quais o funcionário é responsável
*/

function employeeCoverage(idOrName) {
  switch (idOrName) {
    case 1: {
      return data.employees.map(emp => `${emp.firstName} ${emp.lastName}`);
    }
    default: return 'erro';
  }
}
// console.log(employeeCoverage(1));

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
