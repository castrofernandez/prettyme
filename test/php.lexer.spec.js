'use strict';

require('babel-register');
const {expect} = require('chai');
const prettyme = require('../src/index');
require('../src/languages/php');

describe('prettyme: highlighting PHP', function () {
  before(async function () {
    prettyme.init({
      language: 'php',
      lineWrapper: ['<div class="line">', '</div>']
    });
  });
  
  it('Array', async function () {
    const result = prettyme.highlight('<?php\n// This is a single-line comment\n# This is also a single-line comment\n/*\nThis is a multiple-lines comment block\nthat spans over multiple\nlines\n*/\n$hola = "hola";\n$array = array(\n"foo" => "bar",\n"bar" => "foo",\n);\n$array = [\n"foo" => "bar",\n"bar" => "foo",\n];\nclass foo\n{\nfunction hacer_algo()\n{\necho "Haciendo algo.";\n}\n}\n$bar = new foo;\n$bar->hacer_algo();\n?>');
    expect(result).to.equal('<div class="line"><span class="tag">&lt;?php</span></div>\n<div class="line"><span class="comment single">// This is a single-line comment</span></div>\n<div class="line"><span class="comment unix"># This is also a single-line comment</span></div>\n<div class="line"><span class="comment multiline">/*</span></div>\n<div class="line"><span class="comment multiline">This is a multiple-lines comment block</span></div>\n<div class="line"><span class="comment multiline">that spans over multiple</span></div>\n<div class="line"><span class="comment multiline">lines</span></div>\n<div class="line"><span class="comment multiline">*/</span></div>\n<div class="line"><span class="variable name">$hola</span><span class="space"> </span><span class="delimiter">=</span><span class="space"> </span><span class="string double">"hola"</span><span class="delimiter">;</span></div>\n<div class="line"><span class="variable name">$array</span><span class="space"> </span><span class="delimiter">=</span><span class="space"> </span><span class="function reserved">array</span><span class="delimiter">(</span></div>\n<div class="line"><span class="string double">"foo"</span><span class="space"> </span><span class="delimiter">=&gt;</span><span class="space"> </span><span class="string double">"bar"</span><span class="delimiter">,</span></div>\n<div class="line"><span class="string double">"bar"</span><span class="space"> </span><span class="delimiter">=&gt;</span><span class="space"> </span><span class="string double">"foo"</span><span class="delimiter">,</span></div>\n<div class="line"><span class="delimiter">)</span><span class="delimiter">;</span></div>\n<div class="line"><span class="variable name">$array</span><span class="space"> </span><span class="delimiter">=</span><span class="space"> </span><span class="delimiter">[</span></div>\n<div class="line"><span class="string double">"foo"</span><span class="space"> </span><span class="delimiter">=&gt;</span><span class="space"> </span><span class="string double">"bar"</span><span class="delimiter">,</span></div>\n<div class="line"><span class="string double">"bar"</span><span class="space"> </span><span class="delimiter">=&gt;</span><span class="space"> </span><span class="string double">"foo"</span><span class="delimiter">,</span></div>\n<div class="line"><span class="delimiter">]</span><span class="delimiter">;</span></div>\n<div class="line"><span class="reserved">class</span><span class="space"> </span><span class="object">foo</span></div>\n<div class="line"><span class="delimiter">{</span></div>\n<div class="line"><span class="reserved">function</span><span class="space"> </span><span class="function name">hacer_algo</span><span class="delimiter">(</span><span class="delimiter">)</span></div>\n<div class="line"><span class="delimiter">{</span></div>\n<div class="line"><span class="reserved">echo</span><span class="space"> </span><span class="string double">"Haciendo algo."</span><span class="delimiter">;</span></div>\n<div class="line"><span class="delimiter">}</span></div>\n<div class="line"><span class="delimiter">}</span></div>\n<div class="line"><span class="variable name">$bar</span><span class="space"> </span><span class="delimiter">=</span><span class="space"> </span><span class="reserved">new</span><span class="space"> </span><span class="object">foo</span><span class="delimiter">;</span></div>\n<div class="line"><span class="variable name">$bar</span><span class="delimiter">-&gt;</span><span class="function name">hacer_algo</span><span class="delimiter">(</span><span class="delimiter">)</span><span class="delimiter">;</span></div>\n<div class="line"><span class="tag">?&gt;</span></div>');
  });
});