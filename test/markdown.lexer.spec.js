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
    expect(result).to.equal('<div class="line"><div class="token-wrapper header"><i class="a"><span class="any">#</span></i><span class="any"> This is an &lt;h1&gt; ∗tag∗</span></div></div>\n<div class="line"><div class="token-wrapper header"><i class="a"><span class="any">##</span></i><span class="any"> This is an </span><div class="token-wrapper bold"><i><span class="any">&#95;&#95;</span></i><span class="any">&lt;h2&gt;</span><i><span class="any">&#95;&#95;</span></i></div><span class="any"> tag</span></div></div>\n<div class="line"><span class="any">∗This text will be italic∗</span></div>\n<div class="line"><div class="token-wrapper italic"><i><span class="any">&#95;</span></i><span class="any">This will also be italic</span><i><span class="any">&#95;</span></i></div></div>\n<div class="line"><span class="any">∗∗This text will be bold∗∗</span></div>\n<div class="line"><div class="token-wrapper bold"><i><span class="any">&#95;&#95;</span></i><span class="any">This will also be bold</span><i><span class="any">&#95;&#95;</span></i></div></div>\n<div class="line"><div class="token-wrapper italic"><i><span class="any">&#95;</span></i><span class="any">You ∗∗can∗∗ combine them</span><i><span class="any">&#95;</span></i></div></div><span class="any"></span>');
  });
});