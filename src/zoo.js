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
const { animals, employees, prices, hours } = require('./data');
/*----------------------------------------------------------------------------------------------------------------------------*/

// 1. Implemente a função animalsByIds:
// 1.1. Caso receba nenhum parâmetro, necessário retornar um array vazio
// 1.2. Ao receber como parâmetro um único id, retorna os animais com este id
// 1.3. Ao receber mais de um id, retorna os animais que têm um desses ids

const animalsByIds = (...ids) => {
  if (typeof ids === 'undefined') {
    return [];
  }
  return animals.filter(({ id }) => ids.includes(id));
};
// console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

/*----------------------------------------------------------------------------------------------------------------------------*/

// 2. Implemente a função animalsOlderThan:
// 2.1. Ao passar o nome de uma espécie e uma idade, testa se todos os
// animais desta espécie possuem a idade mínima especificada

const animalsOlderThan = (animal, idade) => {
  const verifica = animals.filter(({ name }) => animal.includes(name));
  return verifica[0].residents[0].age > idade;
}
// console.log(animalsOlderThan('otters', 7));

/*----------------------------------------------------------------------------------------------------------------------------*/

// 3. Implemente a função employeeByName:
// 3.1 Sem parâmetros, retorna um objeto vazio
// 3.2 Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// 3.3 Quando provido o último nome do funcionário, retorna o objeto do funcionário

const employeeByName = (employeeName) => {
  if (typeof employeeName === 'undefined') return {};
  return employees.find((elemento => elemento.firstName === employeeName || elemento.lastName === employeeName));
}
// console.log(employeeByName('Emery'));

/*----------------------------------------------------------------------------------------------------------------------------*/

// 4. Implemente a função createEmployee:
// 4.1 Cria um novo colaborador a partir de objetos
// contendo informações pessoais, gerentes e animais gerenciados

const createEmployee = (personalInfo, associatedWith) => {
  const alterado = Object.assign(personalInfo, associatedWith);
  return alterado;
}
/*----------------------------------------------------------------------------------------------------------------------------*/

// 5. Implemente a função isManager:
// 5.1 Testa se o id passado é de um gerente

const isManager = id => {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].managers.includes(id)) {
      return true;
    }
  }
  return false;
}
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
/*----------------------------------------------------------------------------------------------------------------------------*/

// 6. Implemente a função addEmployee:
// 6.1 Adiciona um funcionário no fim da lista

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  let objeto = { id, firstName, lastName, managers, responsibleFor }
  employees.push(objeto);
}
/*----------------------------------------------------------------------------------------------------------------------------*/

// 7. Implemente a função animalCount:
// 7.1 Sem parâmetros, returna animais e suas quantidades
// 7.2 Com o nome de uma espécie de animal, retorna somente a quantidade

const animalCount = (species) => {
  if (species === undefined) {
    const novaLista = animals.reduce((acumulador, currentValue) => {
      acumulador[currentValue.name] = currentValue.residents.length;

      return acumulador;
    }, {});
    console.log(novaLista);
    return novaLista;
  }

  const animal = animals.find(({ name }) => name === species);
  return animal.residents.length;
}

// console.log(animalCount('lions'));
/*----------------------------------------------------------------------------------------------------------------------------*/

// 8. Implemente a função entryCalculator:
// 8.1 Returna 0 se nenhum argumento for passado
// 8.2 Retorna 0 se um objeto vazio for passado
// 8.3 Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos

const entryCalculator = (entrants) => {
  if (entrants === undefined) {
    return 0;
  } else if (Object.keys(entrants).length === 0) {
    return 0;
  }

  // const { Adult, Child, Senior } = entrants;
  let adulto = prices.Adult * entrants.Adult;
  let crianca = prices.Child * entrants.Child;
  let idoso = prices.Senior * entrants.Senior;
  console.log(idoso);
  let soma = adulto + crianca + idoso;
  console.log(soma);
  return soma;
}
// console.log(entryCalculator({ 'Adult': 2, 'Child': 3, 'Senior': 1 }));
/*----------------------------------------------------------------------------------------------------------------------------*/

// 9. Implemente a função animalMap:
// 9.1 Sem parâmetros, retorna animais categorizados por localização
// 9.2 Com opções especificadas, retorna nomes de animais
// 9.3 Com opções especificadas, retorna nomes de animais ordenados
// 9.4 Com opções especificadas, retorna somente nomes de animais macho / fêmea
// 9.5 Só retorna informações específicas de gênero se includeNames for setado

function animalMap(options) {
  // seu código aqui
}

/*----------------------------------------------------------------------------------------------------------------------------*/

// 10. Implemente a função schedule:
// 10.1 Sem parâmetros, retorna um cronograma legível para humanos
// 10.2 Se um único dia for passado, retorna somente este dia em um formato legível para humanos

function schedule(dayName) {
  // const { Tuesday, Friday, Wednesday, Thursday, Saturday, Sunday, Monday, open, close } = hours;
  const horarios = {};

  if (dayName === undefined) {
    Object.keys(hours).forEach(key => {
      if (hours[key].open === 0 && hours[key].close === 0) {
        horarios[key] = "CLOSED";
      } else {

        horarios[key] = `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`;
      }
    });
  } else {
    if (hours[dayName].open === 0 && hours[dayName].close === 0) {
      horarios[dayName] = "CLOSED";
    } else {
      horarios[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;
    }
  }

  return horarios;
}



// console.log(schedule('Monday'));
// 'Tuesday': 'Open from 8am until 6pm',
/*----------------------------------------------------------------------------------------------------------------------------*/

// 11. Implemente a função oldestFromFirstSpecies:
// 11.1 Passado o id de um funcionário, encontra a primeira espécie de animal
// gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie

function oldestFromFirstSpecies(id) {
  const func = employees.find((elemento) => elemento.id === id).responsibleFor[0];
  const animal = animals.find((elemento) => elemento.id === func).residents;
  const idade = animal.sort((a, b) => {
    if (a.age < b.age) return 1;
    if (a.age > b.age) return -1;
    return 0;
  });
  return Object.values(idade[0]);
}
// console.log(oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
/*----------------------------------------------------------------------------------------------------------------------------*/

// 12. Implemente a função increasePrices:
// 12.1 Ao passar uma porcentagem, incrementa todos os preços, arrendondados em duas casas decimais

function increasePrices(percentage) {
  Object.keys(prices).reduce((acc, atual) => {
    acc[atual] = Math.round((acc[atual] * (100 + percentage)).toFixed(2)) / 100;
    return acc;
  }, prices);
};


/*----------------------------------------------------------------------------------------------------------------------------*/

// 13. Implemente a função employeeCoverage:
// 13.1 Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais eles são responsáveis
// 13.2 Com o id de um funcionário, retorna os animais pelos quais o funcionário é responsável
// 13.3 Com o primeiro nome de um funcionário, retorna os animais pelos quais o funcionário é responsável
// 13.4 Com o último nome de um um funcionário, retorna os animais pelos quais o funcionário é responsável

function employeeCoverage(idOrName) {
  // seu código aqui
}

/*----------------------------------------------------------------------------------------------------------------------------*/

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
