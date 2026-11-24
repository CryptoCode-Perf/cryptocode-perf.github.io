(function(){var b=document.body,s=localStorage.getItem('ngcc-lang')||'zh';if(s==='en')b.classList.add('lang-en');
window.setLang=function(l){if(l==='en')b.classList.add('lang-en');else b.classList.remove('lang-en');localStorage.setItem('ngcc-lang',l);};
var q=document.getElementById('q'),cnt=document.getElementById('cnt'),tb=document.getElementById('tb');
function rows(){return [].slice.call(tb.querySelectorAll('tr[data-inst]'));}
function filt(){var v=q.value.toLowerCase(),n=0;rows().forEach(function(tr){var ok=tr.textContent.toLowerCase().indexOf(v)>=0;tr.style.display=ok?'':'none';if(ok)n++;});cnt.textContent=n+'/'+rows().length;}
q.addEventListener('input',filt);
window.sortBy=function(k){[].slice.call(tb.querySelectorAll('tbody.grp')).forEach(function(gb){var r=[].slice.call(gb.querySelectorAll('tr[data-inst]'));r.sort(function(a,b){var x=a.getAttribute('data-'+k),y=b.getAttribute('data-'+k);if(k==='gm')return parseFloat(y)-parseFloat(x);return x.localeCompare(y,undefined,{numeric:true});});r.forEach(function(x){gb.appendChild(x);});});filt();};
window.tog=function(id){var gb=document.getElementById(id);if(!gb)return;gb.classList.toggle('collapsed');var h=gb.querySelector('tr.grp-head .arw');if(h)h.textContent=gb.classList.contains('collapsed')?'\u25b6':'\u25be';};
filt();})();