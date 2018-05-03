'use strict';

require('babel-register');
const {expect} = require('chai');
const prettyme = require('../src/index');
require('../src/languages/css');

describe('prettyme: highlighting CSS', function () {
  before(async function () {
    prettyme.init({
      language: 'css',
      lineWrapper: ['<div class="line">', '</div>']
    });
  });
  
  it('Two rules', async function () {
    const result = prettyme.highlight(' .test1  {   color:   red; } p {margin: 10px   0  0   0 ; }');
    expect(result).to.equal('<div class="line"><span class="space"> </span><span class="selector">.test1</span><span class="space">  </span><span class="in-bracket delimiter">{</span><span class="space in-bracket">   </span><span class="property in-bracket">color</span><span class="delimiter in-bracket">:</span><span class="space in-bracket">   </span><span class="value word in-bracket">red</span><span class="delimiter in-bracket">;</span><span class="space in-bracket"> </span><span class="in-bracket delimiter">}</span><span class="space"> </span><span class="selector">p</span><span class="space"> </span><span class="in-bracket delimiter">{</span><span class="property in-bracket">margin</span><span class="delimiter in-bracket">:</span><span class="space in-bracket"> </span><span class="value unit in-bracket">10px</span><span class="space in-bracket">   </span><span class="value number in-bracket">0</span><span class="space in-bracket">  </span><span class="value number in-bracket">0</span><span class="space in-bracket">   </span><span class="value number in-bracket">0</span><span class="space in-bracket"> </span><span class="delimiter in-bracket">;</span><span class="space in-bracket"> </span><span class="in-bracket delimiter">}</span></div>');
  });
});