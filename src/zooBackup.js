

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
