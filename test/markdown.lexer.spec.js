'use strict';

require('babel-register');
const {expect} = require('chai');
const prettyme = require('../src/index');
require('../src/languages/markdown');

describe('prettyme: highlighting Markdown', function () {
  before(async function () {
    prettyme.init({
      language: 'markdown',
      lineWrapper: ['<div class="line">', '</div>']
    });
  });
  
  it('Array', async function () {
    const result = prettyme.highlight('# This is an <h1> ∗tag∗\n## This is an __<h2>__ tag\n∗This text will be italic∗\n_This will also be italic_\n∗∗This text will be bold∗∗\n__This will also be bold__\n_You ∗∗can∗∗ combine them_');
    expect(result).to.equal('<div class="line"><div class="token-wrapper header"><i class="a">#</i> This is an &lt;h1&gt; ∗tag∗</div></div>\n<div class="line"><div class="token-wrapper header"><i class="a">##</i> This is an <div class="token-wrapper bold"><i>&#95;&#95;</i>&lt;h2&gt;<i>&#95;&#95;</i></div> tag</div></div>\n<div class="line">∗This text will be italic∗</div>\n<div class="line"><div class="token-wrapper italic"><i>&#95;</i>This will also be italic<i>&#95;</i></div></div>\n<div class="line">∗∗This text will be bold∗∗</div>\n<div class="line"><div class="token-wrapper bold"><i>&#95;&#95;</i>This will also be bold<i>&#95;&#95;</i></div></div>\n<div class="line"><div class="token-wrapper italic"><i>&#95;</i>You ∗∗can∗∗ combine them<i>&#95;</i></div></div>');
  });
});