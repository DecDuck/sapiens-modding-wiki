import{_ as e,c as a,o as n,d as s}from"./app.aa7b13f3.js";const g=JSON.parse('{"title":"Input","description":"","frontmatter":{},"headers":[{"level":2,"title":"Adding your action to the KeyMap","slug":"adding-your-action-to-the-keymap","link":"#adding-your-action-to-the-keymap","children":[{"level":3,"title":"API","slug":"api","link":"#api","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"Listening to your Action","slug":"listening-to-your-action","link":"#listening-to-your-action","children":[]}],"relativePath":"docs/scripting/handling-input.md","lastUpdated":1664143882000}'),t={name:"docs/scripting/handling-input.md"},o=s(`<h1 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>We recommend you use Hammerstone for managing input. You can find the Hammerstone docs <a href="/hammerstone/input-manager.html">here</a></p></div><p>Input handling is the ability to listen and react to key strikes, mouse movements, and other physical-input.</p><h2 id="adding-your-action-to-the-keymap" tabindex="-1">Adding your action to the KeyMap <a class="header-anchor" href="#adding-your-action-to-the-keymap" aria-hidden="true">#</a></h2><p>The first step is overwriting <code>scripts/mainThread/keyBinding.lua</code>. I think it&#39;s also possible to add bindings from other files, but I think there may be an ordering dependency here, so I suggest overwriting in-place.</p><h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><p>There is a mod-exposed api:</p><ul><li><code>keyMapping</code></li><li><code>doubleMapping</code></li><li><code>addGroup</code></li><li><code>addMapping</code></li></ul><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><p>Here is a sample code, which adds a custom keybinding:</p><div class="language-lua"><button class="copy"></button><span class="lang">lua</span><pre><code><span class="line"><span style="color:#89DDFF;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mod</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">onload</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">keyMapping</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	keyMapping.</span><span style="color:#82AAFF;">addMapping</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">game</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">testBinding</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, keyMapping.</span><span style="color:#FFCB6B;">keyCodes</span><span style="color:#A6ACCD;">.</span><span style="color:#FFCB6B;">f5</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">end</span></span>
<span class="line"></span></code></pre></div><h2 id="listening-to-your-action" tabindex="-1">Listening to your Action <a class="header-anchor" href="#listening-to-your-action" aria-hidden="true">#</a></h2><p>The next step is actually listening to your action. This can be done using...</p><div class="danger custom-block"><p class="custom-block-title">Oh-no!</p><p>This wiki page isn&#39;t done. But you can help! Click the &#39;Edit Page&#39; button at the bottom.</p></div>`,14),i=[o];function l(p,c,r,d,h,u){return n(),a("div",null,i)}const m=e(t,[["render",l]]);export{g as __pageData,m as default};
