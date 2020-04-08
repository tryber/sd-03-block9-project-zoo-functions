
const data = require('./data');

//DONE
function animalsByIds(...ids) {
  // seu código aqui
  const result = ids.map(e => ids === [] ? [] : data.animals.find(animal => animal.id === e));
  return result;
}

//DONE
function animalsOlderThan(animal, age) {
  // seu código aqui
  const result = data.animals.some(e => {
    if (e.name === animal) {
      return e.residents.every(resident => {
        return resident.age > age;
      })
    }
  });
  return result;
}
animalsOlderThan('penguins', 10);

//Done
function employeeByName(employeeName) {
  //
  return employeeName === undefined ? {}
    : data.employees.find((employe) => {
      if (employe.firstName === employeeName) {
        return employe;
      };
    }) || data.employees.find((employe) => {
      if (employe.lastName === employeeName) {
        return employe;
      };
    });
}
/* Implemente a função createEmployee:
Cria um novo colaborador a partir de objetos contendo informações pessoais, gerentes e animais gerenciados */
function createEmployee(personalInfo, associatedWith) {
  const obj = Object.assign({}, personalInfo, associatedWith)
  //return { ...personalInfo, ...associatedWith };
  return obj
};

//createEmployee(personalInfo, associatedWith)
function isManager(id) {
  //DONE
  const result = data.employees.some(e => {
    if (e.managers.includes(id)) { return true; }
  });
  return result;
};

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // DONE
  const employee = { id, firstName, lastName, managers, responsibleFor }
  data.employees.push(employee);
  return employee;
}

function animalCount(species) {
  // DONE
  const sortByKey = (obj) => {
    return Object.keys(obj).sort().reduce((acc, key) => {
      acc[key] = obj[key];
      return acc
    }, {})

  }
  if (!species) {
    const animalList = data.animals.reduce((acc, animal) => {
      acc[animal.name] = animal.residents.length;
      return acc;
    }, {})
    return sortByKey(animalList);
  }
  const search = data.animals.find(e =>
    e.name === species).residents.length
  if (species) { return search }

}


function entryCalculator(entrants) {
  // seu código aqui
  if (typeof entrants !== 'object' || entrants === {}) { return 0 }
  else {
    const values = [entrants, data.prices];
    const reduceAdult = values.reduce((acc, val) =>
    typeof val.Adult != 'number' ? null:  val.Adult * acc, 1);
    const reduceChild  = values.reduce((acc, val) =>
    typeof val.Child != 'number' ? null: val.Child * acc, 1);
    const reduceSenior = values.reduce((acc, val) =>
    typeof val.Senior != 'number' ? null: val.Senior * acc, 1);
    const price = reduceAdult + reduceChild + reduceSenior

    console.log('price ',price);
    return price

  }

};
console.log(entryCalculator({ Adult: 2 }));

function animalMap(options) {
  /*
   TODO
  const getLocations = () => {
    return data.animals.map(({ location }) => location).reduce((acc, location) => {
      if (acc[location] === undefined) acc[location] = [];
      return acc;
    }, {})
  }
  const animalsByLocation = getLocations()

  function mapByLocation() {
    let searchBase = data.animals;

       searchBase.forEach(animal => {

      if (options.includesNames === true) {
          const residentsObj = {}
        residentsObj[animal.name] = animal.residents.map(resident => resident.name)
        console.log(residentsObj);
      }
      if(options.sex ){
        console.log(options.sex)
           searchBase = animal.residents.filter(({name, sex})) => {
             if(options.sex === sex)
             console.log(searchBase);
             return name
          })
         }
      let residentsList = animalsByLocation[animal.location].push(animal.name)
         if(options.sorted === true){}
     return residentsList, console.log(residentsList);


    })
  }
  mapByLocation()
  animalMap({ includesNames: true, sex: 'female' })
  */
}


function schedule(dayName) {
  // DONE
  const entries = Object.entries(data.hours)

  const list =  entries.reduce((acc, [day, { open, close }]) => {
    acc[day] = `Open from ${open}am until ${close - 12}pm`
    if (open === 0 && close === 0) {
      acc[day] = 'CLOSED';
    }
    // open > 12 ? open = `${open - 12}pm` : open = open + 'am';
    // close > 12 ? close = `${close - 12}pm` : close = close + 'am';
    return acc
  }, {})
  if (dayName) {
    unique = {}
    unique[dayName] = list[dayName];
    return unique
  }
  return list
}
schedule('Monday')
function oldestFromFirstSpecies(id) {
  // DONE
  if (!id) return null;
  const chosen = data.employees.find(employee => employee.id === id)
  const { responsibleFor: [animalId] } = chosen
  const animal = data.animals.find(animal => animal.id === animalId)
  const result = animal.residents
    .reduce((old, value) => {
      Object.values(value)[2] > Object.values(old)[2] ? old = Object.values(value) : Object.values(old)
      return old;
    })
  return result
}
oldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad')

function increasePrices(percentage) {
  // DONE
  return data.prices = Object.entries(data.prices).reduce((acc, value) => {
    acc[value[0]] = parseFloat(Math.ceil(value[1] * (percentage + 100))) / 100
    return acc
  }, {})
}

function employeeCoverage(idOrName) {
  // seu código aqui
  const coverageById = data.employees.reduce((acc, employee) => {
    const fullName = employee.firstName + " " + employee.lastName;
    acc[fullName] = employee.responsibleFor.map((id, name) => {
      name = data.animals.find(animal => animal.id === id).name
      return name
    })

    return acc
  }, {})
  const test = data.employees.reduce((acc, employee) => {
    if (idOrName === employee.id || idOrName === employee.firstName || idOrName === employee.lastName) {

      const newFullName = employee.firstName + " " + employee.lastName
      acc[newFullName] = coverageById[newFullName]
    }
    return acc
  }, {})


  if (idOrName) { return test }
  return coverageById

}
employeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad')


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
