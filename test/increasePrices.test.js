const assert = require('assert');
const zoo = require('../src/zoo');
const data = require('../src/data');


describe('increasePrices', () => {
  it('test', () => {
    let expected;

    // dada uma porcentagem, incrementa todos os preços, arrendondados em duas casas
    // decimais
    zoo.increasePrices(50);
    expected = {
      'Adult': 74.98,
      'Senior': 37.48,
      'Child': 31.48
    };

    assert.deepEqual(data.prices, expected);

    zoo.increasePrices(30);
    expected = {
      'Adult': 97.47,
      'Senior': 48.72,
      'Child': 40.92
    };

    assert.deepEqual(data.prices, expected);
  });
});
