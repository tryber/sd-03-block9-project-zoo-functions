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
const { ...hours } = data.hours;

const animalsByIds = (...ids) => {
  if (ids.length === 0) {
    return ids;
  }
  const filtro = [];
  for (let i = 0; i < ids.length; i += 1) {
    const resposta = animals.find(element => element.id === ids[i]);
    filtro.push(resposta);
  }
  return filtro;
};

const animalsOlderThan = (especie, idade) => {
  const filtra = animals.filter(element => element.name === especie);
  const mapFiltra = filtra.map(element => element.residents);
  return mapFiltra[0].every(element => element.age >= idade);
};

const employeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  return employees.find(el => el.firstName === employeeName || el.lastName === employeeName);
};

const createEmployee = (personalInfo, associatedWith) =>
Object.assign({}, personalInfo, associatedWith);

function isManager(id) {
  const managers = employees.map(el => el.managers);
  return managers[0].some(el => el === id);
}

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  const novoFunc = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(novoFunc);
};

const animalCount = (species) => {
  if (!species) {
    const nomes = animals.map(el => `${el.name}`);
    const qtds = animals.map(el => el.residents.length);
    const result = {};
    for (let i = 0; i < nomes.length; i += 1) {
      result[nomes[i]] = qtds[i];
    }
    return result;
  }
  const filtro = animals.filter(el => el.name === species);
  const resultado = filtro.map(el => el.residents.length);
  return resultado[0];
};

const entryCalculator = (entrants) => {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const { Adult: adultoQtd, Child: criancaQtd, Senior: velhoQtd } = entrants;
  const { Adult, Senior, Child } = data.prices;
  const total = (adultoQtd * Adult) + (criancaQtd * Child) + (velhoQtd * Senior);
  return total;
};

const construcAnimalObj = (objeto, arrReg, funcao, options) => {
  arrReg.forEach((region) => {
    objeto[region] = funcao(region, options);
  });
  return objeto;
};

const getLocations = () => data.animals.map(({ location }) => location)
.reduce((accumulator, location) => {
  if (accumulator[location] === undefined) accumulator[location] = [];
  return accumulator;
}, {});

const filterByRegion = region => animals.filter(el => el.location === region)
.map(el => el.name);

const filterByRegionAndSex = (region, sexo) => {
  const arr = animals.filter(el => el.location === region);
  const novoObj = arr.reduce((newArr, cur) => {
    const newObj = {};
    const residents = cur.residents.filter(el => el.sex === sexo).map(el => el.name);
    newObj[cur.name] = residents;
    newArr.push(newObj);
    return newArr;
  }, []);
  return novoObj;
};

const filterByRegionAndNames = (region, sorted) => {
  const arr = animals.filter(el => el.location === region);
  const novoObj = arr.reduce((newArr, cur) => {
    const newObj = {};
    const residents = cur.residents.map(el => el.name);
    if (sorted === true) {
      residents.sort();
    }
    newObj[cur.name] = residents;
    newArr.push(newObj);
    return newArr;
  }, []);
  return novoObj;
};

const animalMap = (options = false) => {
  const obj = getLocations();
  const arrReg = Object.keys(obj);

  if (options.includeNames && options.sex) {
    return construcAnimalObj(obj, arrReg, filterByRegionAndSex, options.sex);
  }

  if (options.includeNames || options.sorted) {
    return construcAnimalObj(obj, arrReg, filterByRegionAndNames, options.sorted);
  }

  arrReg.forEach((region) => {
    obj[region] = filterByRegion(region);
  });
  return obj;
};

function schedule(dayName) {
  const weekDay = Object.keys(hours);
  const obj = {};
  weekDay.forEach((day) => {
    if (day === 'Monday') {
      obj[day] = 'CLOSED';
    } else {
      obj[day] = `Open from ${hours[day].open}am until ${hours[day].close % 12}pm`;
    }
  });
  if (!dayName) {
    return obj;
  }

  return weekDay.reduce((acc, cur) => {
    if (cur === dayName) {
      acc[cur] = obj[cur];
    }
    return acc;
  }, {});
}

const oldestFromFirstSpecies = (idFunc) => {
  const pegaIdPrimeiroAnimal = employees.find(el => el.id === idFunc).responsibleFor[0];
  const residentsEspecie = animals.find(el => el.id === pegaIdPrimeiroAnimal)
  .residents.sort((a, b) => b.age - a.age)[0];
  return [residentsEspecie.name, residentsEspecie.sex, residentsEspecie.age];
};

const increasePrices = (percentage) => {
  const { Adult, Senior, Child } = data.prices;
  const percent = (percentage / 100) + 1;
  const newObj = {
    Adult: Math.round(100 * Adult * percent) / 100,
    Senior: Math.round(100 * Senior * percent) / 100,
    Child: Math.round(100 * Child * percent) / 100,
  };
  data.prices = newObj;
  return data.prices;
};

const forFunctions = (idAnimals) => {
  const filtro = [];
  idAnimals.forEach((element) => {
    const animal = animals.find(el => el.id === element);
    filtro.push(animal);
  });
  return filtro.map(el => el.name);
};

const returnById = (id) => {
  const localizaId = employees.find(el => el.id === id);
  const localizaNome = employees.find(el => el.firstName === id);
  const localizaSobrenome = employees.find(el => el.lastName === id);
  let idAnimals = null;
  let nomeFunc = null;

  if (localizaId !== undefined) {
    idAnimals = localizaId.responsibleFor;
    nomeFunc = `${localizaId.firstName} ${localizaId.lastName}`;
  } else if (localizaNome !== undefined) {
    idAnimals = localizaNome.responsibleFor;
    nomeFunc = `${localizaNome.firstName} ${localizaNome.lastName}`;
  } else {
    idAnimals = localizaSobrenome.responsibleFor;
    nomeFunc = `${localizaSobrenome.firstName} ${localizaSobrenome.lastName}`;
  }

  const resposta = { [`${nomeFunc}`]: forFunctions(idAnimals) };
  return resposta;
};

const returnResumo = () => {
  const resumo = employees.reduce((acc, cur) => {
    const idAnimals = cur.responsibleFor;
    const nomeFunc = `${cur.firstName} ${cur.lastName}`;
    acc[nomeFunc] = forFunctions(idAnimals);
    return acc;
  }, {});

  return resumo;
};

const employeeCoverage = (idOrName) => {
  if (!idOrName) {
    return returnResumo();
  }

  return returnById(idOrName);
};

// console.log(employeeCoverage())

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
