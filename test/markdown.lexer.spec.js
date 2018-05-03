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
    expect(result).to.equal('<div class="line">#<span class="space"> </span>This<span class="space"> </span>is<span class="space"> </span>an<span class="space"> </span>&lt;h1&gt;<span class="space"> </span>∗tag∗</div>\n<div class="line">##<span class="space"> </span>This<span class="space"> </span>is<span class="space"> </span>an<span class="space"> </span><div class="token-wrapper bold"><i>&#95;&#95;</i>&lt;h2&gt;<i>&#95;&#95;</i></div><span class="space"> </span>tag</div>\n<div class="line">∗This<span class="space"> </span>text<span class="space"> </span>will<span class="space"> </span>be<span class="space"> </span>italic∗</div>\n<div class="line"><div class="token-wrapper italic"><i>&#95;</i>This<span class="space"> </span>will<span class="space"> </span>also<span class="space"> </span>be<span class="space"> </span>italic<i>&#95;</i></div></div>\n<div class="line">∗∗This<span class="space"> </span>text<span class="space"> </span>will<span class="space"> </span>be<span class="space"> </span>bold∗∗</div>\n<div class="line"><div class="token-wrapper bold"><i>&#95;&#95;</i>This<span class="space"> </span>will<span class="space"> </span>also<span class="space"> </span>be<span class="space"> </span>bold<i>&#95;&#95;</i></div></div>\n<div class="line"><div class="token-wrapper italic"><i>&#95;</i>You<span class="space"> </span>∗∗can∗∗<span class="space"> </span>combine<span class="space"> </span>them<i>&#95;</i></div></div>');
  });
});