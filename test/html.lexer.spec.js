'use strict';

require('babel-register');
const {expect} = require('chai');
const prettyme = require('../src/index');
require('../src/languages/html');

describe('prettyme: highlighting HTML', function () {
  before(async function () {
    prettyme.init({
      language: 'html',
      lineWrapper: ['<div class="line">', '</div>']
    });
  });

  it('Nested', async function () {
    const result = prettyme.highlight('<div></div>');
    expect(result).to.equal('<div class="line"><span class="in-angle delimiter">&lt;</span><span class="in-angle tag open">div</span><span class="in-angle delimiter">&gt;</span><span class="in-angle delimiter">&lt;/</span><span class="in-angle tag close">div</span><span class="in-angle delimiter">&gt;</span></div>');
  });

  it('Compound', async function () {
    const result = prettyme.highlight('<div><input type="text" />This is a text.</div>');
    expect(result).to.equal('<div class="line"><span class="in-angle delimiter">&lt;</span><span class="in-angle tag open">div</span><span class="in-angle delimiter">&gt;</span><span class="in-angle delimiter">&lt;</span><span class="in-angle tag open">input</span><span class="in-angle space"> </span><span class="in-angle attribute">type</span><span class="in-angle delimiter">=</span><span class="in-angle value">"text"</span><span class="in-angle space"> </span><span class="in-angle delimiter">/&gt;</span>This<span class="space"> </span><span class="attribute">is</span><span class="space"> </span><span class="attribute">a</span><span class="space"> </span><span class="attribute">text.</span><span class="in-angle delimiter">&lt;/</span><span class="in-angle tag close">div</span><span class="in-angle delimiter">&gt;</span></div>');
  });
});