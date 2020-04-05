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
      'Adult': 64.99,
      'Senior': 32.49,
      'Child': 27.29
    };

    assert.deepEqual(data.prices, expected);
  });
});
