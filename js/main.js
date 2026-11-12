(function(){
var ids=["sobre","educacao","portfolio","contato"],btns=document.querySelectorAll(".nav button");
function show(){var h=location.hash.slice(1);if(ids.indexOf(h)<0)h="sobre";
ids.forEach(function(i){document.getElementById(i).classList.toggle("on",i===h)});
btns.forEach(function(b){b.setAttribute("aria-selected",b.dataset.t===h)})}
btns.forEach(function(b){b.addEventListener("click",function(){location.hash=b.dataset.t})});
window.addEventListener("hashchange",show);show();
var lines=["MARIZA-OS v1.0  (c) 1984","Carregando módulos... OK","Conectando ao servidor... OK","Login: mariza_rocha","Acesso concedido."],
el=document.getElementById("boot");
if(matchMedia("(prefers-reduced-motion:reduce)").matches){el.textContent=lines.join("\n");return}
var li=0,ci=0,out="";
(function t(){if(li>=lines.length)return;var l=lines[li];
if(ci<l.length){out+=l[ci++];el.textContent=out;setTimeout(t,22)}
else{out+="\n";li++;ci=0;setTimeout(t,160)}})();
})();
