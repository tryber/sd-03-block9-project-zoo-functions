

function byLocationNoOption(element, locations) {
    if (element.location === 'NE') {
      locations.NE.push(element.name);
    } else if (element.location === 'NW') {
      locations.NW.push(element.name);
    } else if (element.location === 'SW') {
      locations.SW.push(element.name);
    } else if (element.location === 'SE') {
      locations.SE.push(element.name);
    }  
  }

    function byLocationWithName(element, locations) {
    animalsNE = [];
    animalsSE = [];
    animalsNW = [];
    animalsSW = [];
    Object.entries(element.residents).forEach(element4 => {
        if (element.location === 'NE') {
        animalsNE.push(element4[1].name);
     }  else if (element.location === 'NW') {
        animalsNW.push(element4[1].name);
     }  else if (element.location === 'SW') {
      animalsSW.push(element4[1].name);
     }  else if (element.location === 'SE') {
      animalsSE.push(element4[1].name);
      }
    });
    isNotSorted(element,locations);
  };

  function byLocationWithNameSorted(element, locations) {
    animalsNE = [];
    animalsSE = [];
    animalsNW = [];
    animalsSW = [];
    Object.entries(element.residents).forEach(element4 => {
        if (element.location === 'NE') {
        animalsNE.push(element4[1].name);
     }  else if (element.location === 'NW') {
        animalsNW.push(element4[1].name);
     }  else if (element.location === 'SW') {
      animalsSW.push(element4[1].name);
     }  else if (element.location === 'SE') {
      animalsSE.push(element4[1].name);
      }
    });
    isSorted(element,locations);
  };

  function byLocationFilterSex(element, locations, sex) {
    animalsNE = [];
    animalsSE = [];
    animalsNW = [];
    animalsSW = [];
      const sexFiltered = Object.entries(element.residents).filter(elementsex => elementsex[1].sex == sex);
      Object.entries(sexFiltered).forEach(element4 => {
        if (element.location === 'NE') {
        animalsNE.push(element4[1][1].name);
     }  else if (element.location === 'NW') {
        animalsNW.push(element4[1][1].name);
     }  else if (element.location === 'SW') {
      animalsSW.push(element4[1][1].name);
     }  else if (element.location === 'SE') {
      animalsSE.push(element4[1][1].name);
      }
    });
    isNotSorted(element,locations);
  };

  function byLocationFilterSexOnly(element, locations, sex) {
    animalsNE = [];
    animalsSE = [];
    animalsNW = [];
    animalsSW = [];
     const sexFiltered = Object.entries(element.residents).filter(elementsex => elementsex[1].sex == sex);
     Object.entries(sexFiltered).forEach(element4 => {
       if (element.location === 'NE') {
        animalsNE.push(element4[1][1].name);
     } else if (element.location === 'NW') {
        animalsNW.push(element4[1][1].name);
     } else if (element.location === 'SW') {
      animalsSW.push(element4[1][1].name); 
     } else if (element.location === 'SE') {
      animalsSE.push(element4[1][1].name);
     }    
    });
    isNotSortedOnlyName(element,locations);
  };
  
  function isNotSortedOnlyName(element, locations) {
    if (element.location === 'NE') {
      locations.NE.push([element.name]);
    }
    else if (element.location === 'NW') {
      locations.NW.push([element.name]);
    }
    else if (element.location === 'SW') {
      locations.SW.push([element.name]);
    }
    else if (element.location === 'SE') {
      locations.SE.push([element.name]);
    }
  }
  
  function isNotSorted(element, locations) {
    if (element.location === 'NE') {
      locations.NE.push({ [element.name]: animalsNE });
    }
    else if (element.location === 'NW') {
      locations.NW.push({ [element.name]: animalsNW });
    }
    else if (element.location === 'SW') {
      locations.SW.push({ [element.name]: animalsSW });
    }
    else if (element.location === 'SE') {
      locations.SE.push({ [element.name]: animalsSE });
    }
  }
  
  function isSorted(element, locations) {
    if (element.location === 'NE') {
      locations.NE.push({ [element.name]: animalsNE.sort() });
    }
    else if (element.location === 'NW') {
      locations.NW.push({ [element.name]: animalsNW.sort() });
    }
    else if (element.location === 'SW') {
      locations.SW.push({ [element.name]: animalsSW.sort() });
    }
    else if (element.location === 'SE') {
      locations.SE.push({ [element.name]: animalsSE.sort() });
    }
  }
  
  module.exports = {
    byLocationNoOption,
    byLocationWithName,
    byLocationWithNameSorted,
    byLocationFilterSex,
    byLocationFilterSexOnly,
  };