<h1 style="margin-left:0cm; margin-right:0cm">Решение тестовых заданий на JS на Yandex Bootcamp&nbsp;</h1>

<h1 style="margin-left:0cm; margin-right:0cm"><font style="background-color:white">Игра в города (40 баллов)&nbsp;</font></h1>

<p><font color="#008000"><span style="background-color:#ffffff"><font style="background-color:#00ff00">РЕШЕНО</font></span></font></p>

<p style="margin-left:0cm; margin-right:0cm"><font style="background-color:white">Рик и Морти играли в города. Герои запомнили названия всех городов, но забыли в каком порядке они следовали. Нужна ваша помощь!</font></p>

<p style="margin-left:0cm; margin-right:0cm"><font style="background-color:white">Напишите программу, которая восстановит порядок следования городов в игре.</font></p>

<h2 style="margin-left:0cm; margin-right:0cm">Формат ввода</h2>

<p style="margin-left:0cm; margin-right:0cm"><font style="background-color:white">На вход подаётся массив <code>cities</code>. Например:</font></p>

<pre><font style="background-color:white"><code>const cities = [</code></font></pre>

<pre><font style="background-color:white"><code>&nbsp;&nbsp;&nbsp; &#39;Геленджик&#39;,</code></font></pre>

<pre><font style="background-color:white"><code>&nbsp;&nbsp;&nbsp; &#39;Домодедово&#39;,</code></font></pre>

<pre><font style="background-color:white"><code>&nbsp;&nbsp;&nbsp; &#39;Казань&#39;,</code></font></pre>

<pre><font style="background-color:white"><code>&nbsp;&nbsp;&nbsp; &#39;Люберцы&#39;,</code></font></pre>

<pre><font style="background-color:white"><code>&nbsp;&nbsp;&nbsp; &#39;Нижний Новгород&#39;,</code></font></pre>

<pre><font style="background-color:white"><code>&nbsp;&nbsp;&nbsp; &#39;Орёл&#39;,</code></font></pre>

<pre><font style="background-color:white"><code>&nbsp;&nbsp;&nbsp; &#39;Санкт-Петербург&#39;,</code></font></pre>

<pre><font style="background-color:white"><code>];</code></font></pre>

<h2 style="margin-left:0cm; margin-right:0cm">Формат вывода</h2>

<p style="margin-left:0cm; margin-right:0cm"><font style="background-color:white">Ожидаемый результат:</font></p>

<pre><font style="background-color:white"><code>[</code></font></pre>

<pre><font style="background-color:white"><code>&nbsp;&nbsp;&nbsp; &#39;Санкт-Петербург&#39;,</code></font></pre>

<pre><font style="background-color:white"><code>&nbsp;&nbsp;&nbsp; &#39;Геленджик&#39;,</code></font></pre>

<pre><font style="background-color:white"><code>&nbsp;&nbsp;&nbsp; &#39;Казань&#39;,</code></font></pre>

<pre><font style="background-color:white"><code>&nbsp;&nbsp;&nbsp; &#39;Нижний Новгород&#39;,</code></font></pre>

<pre><font style="background-color:white"><code>&nbsp;&nbsp;&nbsp; &#39;Домодедово&#39;,</code></font></pre>

<pre><font style="background-color:white"><code>&nbsp;&nbsp;&nbsp; &#39;Орёл&#39;,</code></font></pre>

<pre><font style="background-color:white"><code>&nbsp;&nbsp;&nbsp; &#39;Люберцы&#39;,</code></font></pre>

<pre><font style="background-color:white"><code>]</code></font></pre>

<h2 style="margin-left:0cm; margin-right:0cm">Примечание</h2>

<ul>
	<li><font style="background-color:white">На вход всегда передаётся корректный массив городов, которые можно упорядочить единственным верным образом.</font></li>
	<li><font style="background-color:white">Название последующего города начинается на ту букву, которой оканчивается название предыдущего города.</font></li>
	<li><font style="background-color:white">Исключения составляют названия, оканчивающиеся на твёрдый и мягкий знаки. В таких случаях берётся предпоследняя буква.</font></li>
	<li><font style="background-color:white">Решение нужно оформить следующим образом:</font></li>
</ul>

<pre><font style="background-color:white"><code>module.exports = function (cities) {</code></font></pre>

<pre><font style="background-color:white"><code>&nbsp;&nbsp;&nbsp; // ваше</code><code> решение</code></font></pre>

<pre><font style="background-color:white"><code>}</code></font></pre>

<p><font style="background-color:white">Ограничение памяти</font></p>

<p><font style="background-color:white">64.0 Мб</font></p>

<p><font style="background-color:white">Ограничение времени</font></p>

<p><font style="background-color:white">1 с</font></p>

<p><font style="background-color:white">Ввод</font></p>

<p><font style="background-color:white">input.json</font></p>

<p><font style="background-color:white">Вывод</font></p>

<p><font style="background-color:white">output.txt</font></p>
