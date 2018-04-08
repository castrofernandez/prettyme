'use strict';

const {expect} = require('chai');
const prettyme = require('../index');
const {parse} = require('../grammars/html');
const htmlPrettier = require('../prettiers/html');

describe('prettyme: parsing', function () {
  before(async function () {
    prettyme.init({
      parser: parse,
      prettier: htmlPrettier
    });
  });

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

describe('prettyme: formatting', function () {
  before(async function () {
    prettyme.init({
      parser: parse,
      prettier: htmlPrettier
    });
  });

  it('Nested', async function () {
    const result = prettyme.format('<div></div>');
    expect(result).to.equal('<p class="line">&lt;<span class="tag">div</span>&gt;</p><p class="line">&lt;/<span class="tag">div</span>&gt;</p>');
  });

  it('Compound', async function () {
    const result = prettyme.format('<div><input type="text" />This is a text.</div>');
    expect(result).to.equal('<p class="line">&lt;<span class="tag">div</span>&gt;</p><p class="line tab 1x">&lt;<span class="tag">input</span> <span class="attribute">type</span>=<span class="value">"text"</span> /&gt;</p><p class="line tab 1x"><span class="text">This is a text.</span></p><p class="line">&lt;/<span class="tag">div</span>&gt;</p>');
  });
});