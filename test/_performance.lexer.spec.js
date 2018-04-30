'use strict';

require('babel-register');
const {expect} = require('chai');
const prettyme = require('../src/index');
require('../src/languages/javascript');

prettyme.init({
  language: 'javascript'
});

function measureTime() {
  const start = new Date();

  for (let i = 0; i < 1000; i++) {
    prettyme.highlight('/*Comment*/var t = `string text`;if (typeof window !== undefined) {console.log("hola");}let array = [1, 0.6e10, "foo", null, false, true, undefined];const binary = 0b00010101;');
  }

  return new Date() - start;
}

describe('prettyme: performace', function () {
  it(`1000 times => ${measureTime()} milliseconds`, async function () {
    expect(true).to.equal(true);
  });
});