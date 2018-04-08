'use strict';

const {expect} = require('chai');
const prettyme = require('../index');

describe('prettyme: parsing', function () {
  it('Nested', async function () {
    const result = prettyme.parse('<div></div>');
    expect(result).to.deep.equal([
        { tag: 'div', type: 'open', attributes: [] }, 
        { tag: 'div', type: 'close' }
    ]);
  });

  it('Empty', async function () {
    const result = prettyme.parse('<input />');
    expect(result).to.deep.equal([{ tag: 'input', type: 'empty', attributes: [] }]);
  });

  it('Empty without /', async function () {
    const result = prettyme.parse('<input>');
    expect(result).to.deep.equal([{ tag: 'input', type: 'empty', attributes: [] }]);
  });

  it('Empty with quoted attributes', async function () {
    const result = prettyme.parse('<input type="text" value="foo" />');
    expect(result).to.deep.equal([
        { tag: 'input', type: 'empty', attributes: [
            { name: 'type', value: 'text' },
            { name: 'value', value: 'foo' }
        ] }
    ]);
  });

  it('Empty with unquoted attributes', async function () {
    const result = prettyme.parse('<input type=checkbox checked>');
    expect(result).to.deep.equal([
        { tag: 'input', type: 'empty', attributes: [
            { name: 'type', value: 'checkbox' },
            { name: 'checked', value: null }
        ] }
    ]);
  });

  it('Empty with unquoted attributes and trailing spaces', async function () {
    const result = prettyme.parse('<input type=checkbox checked  >');
    expect(result).to.deep.equal([
        { tag: 'input', type: 'empty', attributes: [
            { name: 'type', value: 'checkbox' },
            { name: 'checked', value: null }
        ] }
    ]);
  });

  it('Text', async function () {
    const result = prettyme.parse('This is a text.');
    expect(result).to.deep.equal([
        { type: 'text', value: 'This is a text.' }
    ]);
  });

  it('Compound', async function () {
    const result = prettyme.parse('<div><input type="text" />This is a text.</div>');
    expect(result).to.deep.equal([
        { tag: 'div', type: 'open', attributes: [] },
        { tag: 'input', type: 'empty', attributes: [
            { name: 'type', value: 'text' }
        ] },
        { type: 'text', value: 'This is a text.' },
        { tag: 'div', type: 'close' }
    ]);
  });
});