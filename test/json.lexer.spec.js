'use strict';

require('babel-register');
const {expect} = require('chai');
const prettyme = require('../src/index');
require('../src/languages/json');

describe('prettyme: highlighting JSON', function () {
  before(async function () {
    prettyme.init({
      language: 'json',
      lineWrapper: ['<div class="line">', '</div>']
    });
  });
  
  it('Array', async function () {
    const result = prettyme.highlight('[{ "foo": "bar", "second": [1, 2, null], "done": false, "great": true }]');
    expect(result).to.equal('<div class="line">[<span class="delimiter">{</span> <span class="property string">"foo"</span><span class="delimiter">:</span> <span class="string double">"bar"</span><span class="delimiter">,</span> <span class="property string">"second"</span><span class="delimiter">:</span> [<span class="number floating">1</span><span class="delimiter">,</span> <span class="number floating">2</span><span class="delimiter">,</span> <span class="null">null</span>]<span class="delimiter">,</span> <span class="property string">"done"</span><span class="delimiter">:</span> <span class="false boolean">false</span><span class="delimiter">,</span> <span class="property string">"great"</span><span class="delimiter">:</span> <span class="true boolean">true</span> <span class="delimiter">}</span>]</div>');
  });
});