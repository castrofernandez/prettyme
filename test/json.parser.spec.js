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
    expect(result).to.deep.equal([{
        type: 'array',
        value: []
    }]);
  });

  it('Nested array', async function () {
    const result = prettyme.parse('[ [   ] ]');
    expect(result).to.deep.equal([{
        type: 'array',
        value: [
            {
                type: 'array',
                value: []
            }
        ]
    }]);
  });

  it('Array with 1 object', async function () {
    const result = prettyme.parse('[ 1 ]');
    expect(result).to.deep.equal([{
        type: 'array',
        value: [
            {
                type: 'number',
                value: 1
            }
        ]
    }]);
  });

  it('Array with 2 elements', async function () {
    const result = prettyme.parse('[ -0.3e10, false ]');
    expect(result).to.deep.equal([{
        type: 'array',
        value: [
            {
                type: 'number',
                value: -0.3e10
            },
            {
                type: 'boolean',
                value: false
            }
        ]
    }]);
  });

  it('Array with 4 elements', async function () {
    const result = prettyme.parse('[ -0.3e10, "foo", null, false ]');
    expect(result).to.deep.equal([{
        type: 'array',
        value: [
            {
                type: 'number',
                value: -0.3e10
            },
            {
                type: 'string',
                value: 'foo'
            },
            {
                type: 'null',
                value: null
            },
            {
                type: 'boolean',
                value: false
            }
        ]
    }]);
  });

  it('Empty object', async function () {
    const result = prettyme.parse('{ }');
    expect(result).to.deep.equal([{
        type: 'object',
        value: [

        ]
    }]);
  });

  it('Object with 1 property', async function () {
    const result = prettyme.parse('{ "foo": "bar" }');
    expect(result).to.deep.equal([{
        type: 'object',
        value: [
            {
                type: 'property',
                name: 'foo',
                value: {
                    type: 'string',
                    value: 'bar'
                }
            }
        ]
    }]);
  });

  it('Object with 2 properties', async function () {
    const result = prettyme.parse('{ "foo": "bar", "second": 2 }');
    expect(result).to.deep.equal([{
        type: 'object',
        value: [
            {
                type: 'property',
                name: 'foo',
                value: {
                    type: 'string',
                    value: 'bar'
                }
            },
            {
                type: 'property',
                name: 'second',
                value: {
                    type: 'number',
                    value: 2
                }
            }
        ]
    }]);
  });

  it('Array with object', async function () {
    const result = prettyme.parse('[{ "foo": true }]');
    expect(result).to.deep.equal([{
        type: 'array',
        value: [
            {
                type: 'object',
                value: [
                    {
                        type: 'property',
                        name: 'foo',
                        value: {
                            type: 'boolean',
                            value: true
                        }
                    }
                ]
            }
        ]
    }]);
  });

  it('Object with array', async function () {
    const result = prettyme.parse('{ "foo": [1, 2, 3] }');
    expect(result).to.deep.equal([{
        type: 'object',
        value: [
            {
                type: 'property',
                name: 'foo',
                value: {
                    type: 'array',
                    value: [
                        {
                            type: 'number',
                            value: 1
                        },
                        {
                            type: 'number',
                            value: 2
                        },
                        {
                            type: 'number',
                            value: 3
                        }
                    ]
                }
            }
        ]
    }]);
  });
});

describe('prettyme: formatting JSON', function () {
  before(async function () {
    prettyme.init({
      language: 'json'
    });
  });
  
  it('Array', async function () {
    const result = prettyme.format('[{ "foo": "bar", "second": [1, 2, null], "done": false, "great": true }]');
    expect(result).to.equal('<p class="line">[</p><p class="line tab tab1x">{</p><p class="line tab tab2x"><span class="string property">"foo"</span>: <span class="string">"bar"</span>, </p><p class="line tab tab2x"><span class="string property">"second"</span>: [</p><p class="line tab tab3x"><span class="number">1</span>, </p><p class="line tab tab3x"><span class="number">2</span>, </p><p class="line tab tab3x"><span class="null">null</span></p><p class="line tab tab2x">], </p><p class="line tab tab2x"><span class="string property">"done"</span>: <span class="false">false</span>, </p><p class="line tab tab2x"><span class="string property">"great"</span>: <span class="true">true</span></p><p class="line tab tab1x">}</p><p class="line">]</p>');
  });
});