(() => {
"use strict";
const ROOT=document.getElementById("app"),Q=window.QUESTIONS||[];
const KEY="recuperacao_programacao_8ano_2026_"+location.pathname;
const RECORD_PREFIX=KEY+"_aluno_";
const norm=x=>String(x||"").trim().replace(/\s+/g," ").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleUpperCase("pt-BR");
const studentKey=(n,t)=>RECORD_PREFIX+encodeURIComponent(norm(t))+"__"+encodeURIComponent(norm(n));
const emptyState=()=>({stage:"intro",name:"",turma:"",index:0,answers:{},id:"",start:0,reason:"",delivery:"idle"});
const COLLECTOR_READY = /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec(?:\?.*)?$/.test(window.RESULTS_URL||"");
let state=emptyState();
const esc=x=>String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const persist=(attempt=state)=>{
  try {
    const record={stage:attempt.stage,name:attempt.name,turma:attempt.turma,id:attempt.id,start:attempt.start,index:attempt.index,answers:attempt.answers,reason:attempt.reason||""};
    if(attempt.name&&attempt.turma)localStorage.setItem(studentKey(attempt.name,attempt.turma),JSON.stringify(record));
    if(attempt.stage==="quiz")localStorage.setItem(KEY,JSON.stringify(record));
    else {
      const active=JSON.parse(localStorage.getItem(KEY)||"null");
      if(active&&active.id===attempt.id)localStorage.removeItem(KEY);
    }
  }catch{}
};
// Transfere a tentativa do formato antigo para um registro individual, sem apagar notas anteriores.
try{
 const old=JSON.parse(localStorage.getItem(KEY)||"null");
 if(old&&old.name&&old.turma&&["quiz","blocked","done"].includes(old.stage)){
   if(old.stage==="quiz"){
     old.stage="blocked";old.reason="A prova foi interrompida ou recarregada";
     persist(old);
     queueMicrotask(()=>sendResult("BLOQUEADO","Recarregamento ou interrupção da prova",old));
   }else if(!localStorage.getItem(studentKey(old.name,old.turma)))persist(old);
   localStorage.removeItem(KEY);
 }
}catch{}
function deliveryStatus(){return state.delivery==="missing"?"Coletor ainda não configurado. Avise a professora.":state.delivery==="error"?"Não foi possível solicitar o envio. Avise a professora.":state.delivery==="requested"?"Envio solicitado. A professora deve conferir a planilha.":"Preparando o registro..."}
function render(){
if(state.stage==="intro")ROOT.innerHTML=`<article class="card"><span class="eyebrow">AVALIAÇÃO INDIVIDUAL</span><h1>Recuperação — Programação — 8º ano</h1><p class="lead">20 questões difíceis, valendo 50 pontos (2,5 por acerto): 10 desafios de Scratch com blocos complexos e 10 de tecnologia, lógica e segurança digital.</p><div class="note">Digite nome completo e turma. Após iniciar, <b>trocar de aba, minimizar, perder o foco da janela ou clicar com o botão direito bloqueia a tentativa</b>. Não será possível voltar às perguntas.</div><div class="fields"><label>Nome completo<input id="student-name" maxlength="120" autocomplete="off" placeholder="NOME E SOBRENOME" value="${esc(state.name)}"></label><label>Turma<input id="student-class" maxlength="30" autocomplete="off" placeholder="Ex.: 8º A" value="${esc(state.turma)}"></label></div><button class="btn" id="start" disabled>${COLLECTOR_READY?"INICIAR RECUPERAÇÃO":"AGUARDANDO CONFIGURAÇÃO"}</button>${COLLECTOR_READY?"":'<p class="status">A prova ainda não está disponível: a professora está conectando o registro de resultados.</p>'}</article>`;
else if(state.stage==="quiz"){let q=Q[state.index],a=state.answers[q.id];ROOT.innerHTML=`<div class="topbar"><span>${esc(q.section)}</span><span>Questão ${state.index+1} de ${Q.length}</span></div><div class="progress"><span style="width:${100*(state.index+1)/Q.length}%"></span></div><article class="card"><div class="eyebrow">${esc(q.skill)}</div><h1>${esc(q.prompt)}</h1>${q.blocks?.length?`<div class="blockstack">${q.blocks.map(b=>`<div class="block ${esc(b.kind)}">${esc(b.text)}</div>`).join("")}</div>`:""}<div class="options">${q.options.map((o,i)=>`<button class="option ${a===i?"selected":""}" data-opt="${i}"><b>${String.fromCharCode(65+i)}</b><span>${esc(o)}</span></button>`).join("")}</div><div class="actions"><small>Marque uma alternativa.</small><button class="btn" id="next" ${a===undefined?"disabled":""}>${state.index===Q.length-1?"FINALIZAR":"PRÓXIMA →"}</button></div></article>`;}
else if(state.stage==="blocked")ROOT.innerHTML=`<article class="card centered"><div class="big">✕</div><h1>Recuperação bloqueada</h1><p class="lead">${esc(state.reason||"A tentativa foi interrompida.")}</p><p class="status" id="status">${deliveryStatus()}</p><button class="btn" id="another">PRÓXIMO ALUNO</button></article>`;
else ROOT.innerHTML=`<article class="card centered"><div class="big">✓</div><h1>Prova concluída</h1><p class="lead">${esc(state.name)}, da turma ${esc(state.turma)}, sua tentativa foi encerrada. O resultado ficará no relatório da professora quando o coletor estiver configurado.</p><p class="status" id="status">${deliveryStatus()}</p><button class="btn" id="another">PRÓXIMO ALUNO</button></article>`;
bind()}
function bind(){
if(state.stage==="intro"){let n=document.getElementById("student-name"),t=document.getElementById("student-class"),b=document.getElementById("start");let update=()=>{state.name=n.value;state.turma=t.value;b.disabled=!COLLECTOR_READY||state.name.trim().length<5||!state.turma.trim()};n.addEventListener("input",update);t.addEventListener("input",update);update();b.addEventListener("click",()=>{state.name=n.value.trim();state.turma=t.value.trim();try{const previous=JSON.parse(localStorage.getItem(studentKey(state.name,state.turma))||"null");if(previous&&["quiz","blocked","done"].includes(previous.stage)){state={...emptyState(),...previous,stage:previous.stage==="quiz"?"blocked":previous.stage};if(previous.stage==="quiz"){state.reason="A prova foi interrompida ou recarregada";persist();sendResult("BLOQUEADO","Recarregamento ou interrupção da prova")}render();return}}catch{}state.id=crypto.randomUUID?crypto.randomUUID():String(Date.now())+Math.random();state.start=Date.now();state.stage="quiz";persist();render()})}
if(state.stage==="quiz"){document.querySelectorAll("[data-opt]").forEach(b=>b.addEventListener("click",()=>{state.answers[Q[state.index].id]=Number(b.dataset.opt);persist();render()}));document.getElementById("next").addEventListener("click",()=>{if(state.index===Q.length-1){state.stage="done";persist();render();sendResult("CONCLUÍDO","")}else{state.index++;persist();render()}})}
if(state.stage==="done"||state.stage==="blocked"){const another=document.getElementById("another");if(another)another.addEventListener("click",()=>{state=emptyState();render()})}
}
function status(){let el=document.getElementById("status");if(el)el.textContent=deliveryStatus()}
async function sendResult(s,reason,attempt=state){let url=window.RESULTS_URL||"";if(!url||url.includes("COLE_AQUI")){if(attempt===state){state.delivery="missing";status()}return}let body=JSON.stringify({id:attempt.id,nome:attempt.name,turma:attempt.turma,status:s,motivoBloqueio:reason,startedAt:attempt.start,duracaoSegundos:Math.round((Date.now()-attempt.start)/1000),respostas:attempt.answers,quantidadeQuestoes:Q.length,nomeMaiusculo:attempt.name===attempt.name.toLocaleUpperCase("pt-BR")});try{await fetch(url,{method:"POST",mode:"no-cors",keepalive:true,headers:{"Content-Type":"text/plain;charset=utf-8"},body});if(attempt===state)state.delivery="requested"}catch{if(attempt===state)state.delivery="error"}if(attempt===state)status()}
function block(reason){if(state.stage!=="quiz")return;state.reason=reason;state.stage="blocked";persist();render();sendResult("BLOQUEADO",reason)}
document.addEventListener("contextmenu",e=>{if(state.stage==="quiz"){e.preventDefault();block("Clique com o botão direito")}});
document.addEventListener("visibilitychange",()=>{if(document.hidden)block("Mudança de aba ou janela minimizada")});
window.addEventListener("blur",()=>block("Perda de foco da janela"));
window.addEventListener("pagehide",()=>{if(state.stage==="quiz"){state.stage="blocked";persist();sendResult("BLOQUEADO","Saída ou atualização da página")}});
document.addEventListener("keydown",e=>{if(state.stage==="quiz"&&(e.key==="F12"||e.ctrlKey&&e.shiftKey&&["i","j","c"].includes(e.key.toLowerCase()))){e.preventDefault();block("Tentativa de abrir ferramentas do navegador")}});
render();
})();