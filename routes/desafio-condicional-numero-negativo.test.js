const numeroNegativo = require('./desafio-condicional-numero-negativo');

test('O numero 10 não é negativo', () => {
  expect(numeroNegativo(10)).toBe(false);
})

test('O numero -4 é negativo', () => {
  expect(numeroNegativo(-4)).toBe(true);
})