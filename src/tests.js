const data = require('./data');

var numbers = [4, 9, 16, 25];


var passaros = [
{ ID: 1, Name: 'Carario' },
{ ID: 2, Name: 'Tia Chica' },
{ ID: 3, Name: 'Pardal' },
{ ID: 4, Name: 'Bem te Vi' },
];
var pessoas = [
    {
      nome: 'Ayrton',
      idade: 27
    },
    {
      nome: 'João',
      idade: 14
    },
    {
      nome: 'Maria',
      idade: 23
    },
    {
      nome: 'Joana',
      idade: 21
    },
    {
      nome: 'Lucas',
      idade: 32
    },
    {
      nome: 'Mateus',
      idade: 15
    },
    {
      nome: 'Isa',
      idade: 23
    },
    {
      nome: 'Luiza',
      idade: 17,
    },
];

const mapAcimaDe10 = numbers.map(entry => {if(entry > 10){ return entry} else{return 0}});
const filterAcimaDe10 = numbers.filter(entry => {if(entry > 10){ return entry} else{return 0}});
const mapDoMap = passaros.map(passaros => passaros.Name).map(name => name.toLowerCase());

const [ Name ] = passaros;

// console.log(data.animals);

console.log(`spread: ${Name}`)
console.log(`map: ${mapAcimaDe10}`)
console.log(`map: ${filterAcimaDe10}`)
console.log(`mapDoMap em lowercase: 
 ${mapDoMap}`)

 const maioresMenores = pessoas.reduce(function(Acumulator, Entry){
    if(Entry.idade>17){
        Acumulator['maiores'].push(Entry);
    }else{
        Acumulator['menores'].push(Entry);
    }
    
    return Acumulator;

}, {maiores: [], menores: []});


const coco =numbers.reduce(function(acumulador, entry){
    return entry+acumulador;
},0)

console.log(`soma do reduce = ${coco}`);


console.log(typeof maioresMenores);
console.log(maioresMenores);






// function map(array, transform) {
//     var mapped = [];
//     for (var i = 0; i < array.length; i++)
//       mapped.push(transform(array[i]));
//     return mapped;
//   }
//   var overNinety = ancestry.filter(function(person) {
//     return person.died - person.born > 90;
//   });
//   console.log(map(overNinety, function(person) {
//     return person.name;
//   }));