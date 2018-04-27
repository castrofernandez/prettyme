'use strict';

require('babel-register');
const {expect} = require('chai');
const prettyme = require('../src/index');
require('../src/languages/json');

describe('prettyme: parsing JSON', function () {
  before(async function () {
    prettyme.init({
      language: 'json'
    });
  });

  it('Empty array', async function () {
    const result = prettyme.parse('[]');
    expect(result).to.deep.equal({
        type: 'array',
        value: []
    });
  });

  it('Nested array', async function () {
    const result = prettyme.parse('[ [   ] ]');
    expect(result).to.deep.equal({
        type: 'array',
        value: [
            {
                type: 'array',
                value: []
            }
        ]
    });
  });
});