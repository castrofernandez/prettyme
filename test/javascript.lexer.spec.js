'use strict';

require('babel-register');
const {expect} = require('chai');
const prettyme = require('../src/index');
require('../src/languages/javascript');

describe('prettyme: highlighting JavaScript', function () {
  before(async function () {
    prettyme.init({
      language: 'javascript'
    });
  });
  
  it('Array', async function () {
    const result = prettyme.highlight('/*Comment*/var t = `string text`;if (typeof window !== undefined) {console.log("hola");}let array = [1, 0.6e10, "foo", null, false, true, undefined];const binary = 0b00010101;');
    expect(result).to.equal('<div class="line"><span class="comment multiline">/*Comment*/</span><span class="reserved">var</span> <span class="name">t</span> <span class="delimiter">=</span> <span class="string-template delimiter">`</span><span class="string-template name">string</span> <span class="string-template name">text</span><span class="string-template delimiter">`</span><span class="delimiter">;</span><span class="function reserved">if</span> <span class="delimiter">(</span><span class="reserved">typeof</span> <span class="name">window</span> <span class="delimiter">!=</span><span class="delimiter">=</span> <span class="null undefined">undefined</span><span class="delimiter">)</span> <span class="delimiter">{</span><span class="name">console</span><span class="delimiter">.</span><span class="function name">log</span><span class="delimiter">(</span><span class="string double">"hola"</span><span class="delimiter">)</span><span class="delimiter">;</span><span class="delimiter">}</span><span class="reserved">let</span> <span class="name">array</span> <span class="delimiter">=</span> <span class="delimiter">[</span><span class="number floating">1</span><span class="delimiter">,</span> <span class="number floating">0.6e10</span><span class="delimiter">,</span> <span class="string double">"foo"</span><span class="delimiter">,</span> <span class="null">null</span><span class="delimiter">,</span> <span class="false boolean">false</span><span class="delimiter">,</span> <span class="true boolean">true</span><span class="delimiter">,</span> <span class="null undefined">undefined</span><span class="delimiter">]</span><span class="delimiter">;</span><span class="reserved">const</span> <span class="name">binary</span> <span class="delimiter">=</span> <span class="number binary">0b00010101</span><span class="delimiter">;</span></div>');
  });
});