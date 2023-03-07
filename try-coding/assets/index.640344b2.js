import{addNotificacion as J}from"https://unpkg.com/notificaciones-w3css";import{descargarArchivo as W}from"https://unpkg.com/operaciones-archivos@1.0.2/operaciones-archivos.js";import{Modal as O}from"https://unpkg.com/modales-w3css";const Z=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};Z();let p={validarJs:!1,tema:"claro",size:""};function G(){let t=localStorage.getItem("estado-editor");t&&(p=JSON.parse(t))}function P(){localStorage.setItem("estado-editor",JSON.stringify(p))}function w(){return p}function H(t){p=Object.assign(p,t)}G();const U="modulepreload",$={},Q="./",f=function(e,o){return!o||o.length===0?e():Promise.all(o.map(i=>{if(i=`${Q}${i}`,i in $)return;$[i]=!0;const r=i.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${a}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":U,r||(n.as="script",n.crossOrigin=""),n.href=i,document.head.appendChild(n),r)return new Promise((c,g)=>{n.addEventListener("load",c),n.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};let Y=document.querySelector("#guardar");function M(){const t=S();let e=LZString.compressToBase64(JSON.stringify(t));localStorage.setItem("documento",e),Y.classList.remove("cambio"),J({tipo:"w3-indigo",titulo:"&#10004; Ok",mensaje:"Se guard\xF3 correctamente el documento"})}function S(){let t=L();const[e,o,i]=t.getTodoElCodigo(),r=document.querySelector("input.autor"),a=document.querySelector("input.titulo");return{autor:r.value,titulo:a.value,fecha:Date.now(),codigo:[e,o,i]}}function k(t){let e=document.querySelector("input.autor"),o=document.querySelector("input.titulo");e.value=t.autor,o.value=t.titulo}function X(){const t=`${location.protocol}//${location.host}${location.pathname}`,e="#N4IghgrgLg9gTiAXOa8QBoRQJZQgGxiRABVcCjMAzAUwGMALMJARgDYBmABjYBZ+WLAOy8WmOjAAm2AOZFEAbRAZlmEAF0AvkA==";window.open(t+e,"_blank")}function ee(){let t=document.createElement("div");t.innerHTML=`
    <form action="https://codepen.io/pen/define" 
    method="POST" target="_blank">
      <input id="data-input" type="hidden" name="data" value="">
    <button type=submmit>
    enviar
    </button>
    </form>
    `;let e=t.querySelector("form"),o=e.querySelector("input"),i=S();o.value=JSON.stringify({title:i.titulo,html:i.codigo[0],css:i.codigo[1],js:i.codigo[2]}),document.body.append(e),e.querySelector("button").click(),setTimeout(a=>{e.remove()},1)}let d=localStorage.getItem("split-sizes");d?d=JSON.parse(d):d=[50,50];function x(){let t=document.querySelector(".vista-previa");const e=`${t.clientWidth} x ${t.clientHeight}`;let o=document.querySelector("#size");o.innerHTML=e}Split(["#tabs-jar","#panel"],{sizes:d,minSize:400,gutterSize:8,onDragEnd:function(t){localStorage.setItem("split-sizes",JSON.stringify(t))},onDrag:function(){x()}});window.addEventListener("resize",()=>{x()});const te=`
.main{  
    visibility: hidden;  
    background: white;
    position: fixed;
    width: 400px;
    max-height: 600px;
    height: 0px;
    bottom: 5px;
    right: 0;    
    border: solid 1px black;
    overflow-y: visible;
    transition: height 0.5s;
}
.footer{
    padding-left: 5px;
    position: fixed;
    background: #009688;
    bottom: 5px;
    right: 0;
    border: solid 1px black;
    width: 400px;
    height: 18px;
    color: white;
}
.linea {
	margin-top: 4px;
    font-size: 11px;
    font-family: monospace;
    display: flex;
    border-bottom: solid 1px var(--color-linea);
	
}

.error {
	background-color: var(--fondo-error);
}
.warning {
	background-color: var(--fondo-warning);
}

.console {
    counter-reset: numlinea;
}

.linea::before {
    counter-increment: numlinea;
    content: "[" counter(numlinea) "]: ";    
    font-weight: bold;
    width: 50px;
}

details {
	margin-left: 15px;
	font-family: monospace;	
}
details > summary {
	list-style-type: none;
    padding-left: 4px;
    width: 200px;    
    border: none;
    cursor: pointer;
}

details > summary > .tipo {
	color: var(--color-tipo);
}

details > p {    
    padding: 4px;
    margin: 0;
    margin-left: 15px;
}

details > p > .key {
    color: var(--color-key);;
}

details > p > .objecto {
    color: var(--color-objecto);;
}

details > p > .cadena, .linea > .cadena {
    color: var(--color-string);
}
details > p > .numero, .linea > .numero {
    color: var(--color-numero);
}

details > p > .funcion, .linea > .funcion {
    color: var(--color-tipo);
}

details > summary::before {
    content: var(--simbolo-expandir);
    color: blue;
}

details[open] > summary::before {
    content: var(--simbolo-contraer);
    color: red;
}
.console{
    overflow-y: auto;
    max-height: 560px;
    height: 560px;
    max-width: 400px;
}
.encabezado-consola{
    border-bottom: 1px solid black;
    height: 18px;
    background: #009688;
    color: white;
}
.titulo{
    float: left;
    margin-left: 5px;
}
.acciones{
    float: right;
    margin-right: 5px;
}
.acciones > span {
    border: solid 1px black;
    font-size: 12px;
    cursor: pointer;
    color: black;
    background-color: white;
}

.acciones > span:hover {    
    color:blue;
}
`;let s=null,h=null,z={};function oe(){return{colorNumero:"blue",colorString:"red",colorKey:"purple",colorTipo:"blue",colorObjecto:"black",colorLinea:"#eee",fondoError:" #f3babf",fondoWarning:"#f3dfba",simboloExpandir:"+ ",simboloContraer:"- "}}function ie(t){z=t}function re(){let t=Object.assign(oe(),z);return`
.variables{
    --color-numero: ${t.colorNumero};
    --color-string: ${t.colorString};
    --color-key: ${t.colorKey};
    --color-tipo: ${t.colorTipo};
    --color-objecto: ${t.colorObjecto};
    --color-linea: ${t.colorLinea};
    --fondo: ${t.fondo};
    --fondo-warning: ${t.fondoWarning};
	--fondo-error: ${t.fondoError};
	--simbolo-expandir: "${t.simboloExpandir}";
	--simbolo-contraer: "${t.simboloContraer}";
}
    `}function I(t){let e="";for(let o in t){let i=t[o];i==null||i==null?e+=`<p><span class="key">${o}</span>: <span class="numero">${i}</span></p>`:typeof i=="object"&&i!=null&&i!=null?e+=`<details>
	<summary>${o}: <span class="tipo">${i.constructor.name}</span></summary>
	${I(i)}
</details>
			`:typeof i=="number"?e+=`<p><span class="key">${o}</span>: <span class="numero">${i}</span></p>`:typeof i=="string"?e+=`<p><span class="key">${o}</span>: <span class="cadena">"${i}"</span></p>`:typeof i=="function"&&(e+=`<p><span class="key">${o}</span>: <span class="funcion"> funcion()</span></p>`)}return e}function ae(t){return I({objecto:t})}function ne(t){t.attachShadow({mode:"open"}),t.shadowRoot.innerHTML=`
        <style>
        ${te}
        </style>
        
        <style>
        ${re()}
        </style>
		<div class="variables main" style="height: 0px; visibility: hidden;">
			<div class="encabezado-consola">
				<div class="titulo">Logger</div> 
				<div class="acciones">
				<span title="limpiar" id="limpiar">&empty;</span>
				<span title="cerrar" id="cerrar">&#x2B07;</span>
				</div>				
			</div>
            <div class="console"></div>
		</div>
		<div class="footer">
		<span class="show-consola">Logger</span>
			<div class="acciones">
				<span title="mostrar " id="show">&#x2B06;</span>
			</div>		
		</div>
	`,h=t,s=t.shadowRoot.querySelector(".console");let e=t.shadowRoot.querySelector("span#limpiar"),o=t.shadowRoot.querySelector("span#show"),i=t.shadowRoot.querySelector("span#cerrar"),r=t.shadowRoot.querySelector(".footer");ce(o,t,r),de(e),le(i,t,r)}function D(t,e){e.style.visibility="hidden",t.style.visibility="visible",t.style.height="600px"}function N(t,e){t.style.height="0",t.style.visibility="hidden",e.style.visibility="visible"}function se(){let t=h.shadowRoot.querySelector(".footer"),e=h.shadowRoot.querySelector(".main");console.log(e.style.visibility),e.style.visibility==="hidden"?D(e,t):N(e,t)}function le(t,e,o){let i=e.shadowRoot.querySelector(".main");t.addEventListener("click",r=>{N(i,o)})}function ce(t,e,o){let i=e.shadowRoot.querySelector(".main");t.addEventListener("click",r=>{D(i,o)})}function de(t){t.addEventListener("click",e=>{s.innerHTML=""})}function ue(t){let e="";for(let o of t)o==null||o==null?e+=`<span class="numero">${o}</span>&nbsp;`:typeof o=="object"?o instanceof Date?e+=o:o&&(e+=ae(o)):typeof o=="number"?e+=`<span class="numero">${o}</span>&nbsp;`:typeof o=="string"?e+=`<span class="cadena">${o}</span>&nbsp;`:typeof o=="function"&&(e+='<span class="funcion">funcion()</span>');return e}function F(){s||console.warn("Defina el div contenedor de la consola")}function pe(){s.scrollTop=s.scrollHeight-s.clientHeight}function R(t,e){let o=document.createElement("div");o.classList.value=t,o.innerHTML=ue(e),s.append(o),pe()}function _(...t){F(),R("linea",t)}function me(...t){F(),R("linea error",t)}function V(t){let e=L();t.onkeydown=function(o){if(o.ctrlKey&&o.key.toLowerCase()==="s")return M(),!1;if(o.ctrlKey&&o.key.toLowerCase()==="d")return ve(e),!1;if(o.ctrlKey&&o.key==="1")return e.activaTabPorIndice(0),!1;if(o.ctrlKey&&o.key==="2")return e.activaTabPorIndice(1),!1;if(o.ctrlKey&&o.key==="3")return e.activaTabPorIndice(2),!1;if(o.ctrlKey&&o.key==="4")return se(),!1;if(o.ctrlKey&&o.key===">")return e.incrementaTamanio(),!1;if(o.ctrlKey&&o.key==="<")return e.decrementaTamanio(),!1;if(o.ctrlKey&&o.key.toLowerCase()==="m")return X(),!1;if(o.ctrlKey&&o.key.toLowerCase()==="k")return e.swapTema(),!1;if(o.ctrlKey&&o.key.toLowerCase()==="e")return E(),!1}}function fe(t){t.contentWindow.console.error=(...e)=>{me(...e)},t.contentWindow.console.log=_}let ge=document.querySelector("#guardar");function he(t,e,o){let[i,r,a]=t.getTodoElCodigo();ge.classList.add("cambio"),e.innerHTML="<iframe></iframe>";let n=e.querySelector("iframe");fe(n);let c=B(i,r,a);n.contentDocument.open();try{n.contentDocument.write(c)}catch(g){console.log(g)}finally{n.contentDocument.close()}V(n.contentWindow)}function B(t,e,o){return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <style>
        ${e}
    </style>
    <body>
        ${t}
    </body>    
    <script type="module">
        ${o}
    <\/script>
    </html>
    `}function ve(t){const[e,o,i]=t.getTodoElCodigo(),r=document.querySelector("input.titulo").value,a=B(e,o,i);W(a,`${r}.html`,"text/html")}let be={forin:!0,noarg:!0,bitwise:!0,nonew:!0,browser:!0,devel:!0,node:!1,moz:!1,eqnull:!1,debug:!1,boss:!1,evil:!0,loopfunc:!1,varstmt:!0,esversion:8,undef:!0,unused:!0,curly:!0};function ye(t,e){let o=t.split(`
`);const i=e.line-1;let r=e.code.indexOf("E")==0?"error":"warning";return o[i]=`<span class="linea-${r}" title="${e.reason}">${o[i]}</span>`,o.join(`
`)}function we(t,e){JSHINT(e,be);let o=JSHINT.data();if(o.hasOwnProperty("errors"))for(let i of o.errors)t=ye(t,i);return t}const Se=`
<div class="variables">
    <div class="tabs principal">
    </div>
    <div class="editores">    
    </div>
</div>
`,xe=`
/**host */
@import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@500&display=swap');
.editor {   
    font-family: 'Fira Mono',monospace;
    font-size: var(--tamanio-letra);
    font-weight: 400;
    min-height: 240px;
    letter-spacing: normal;
    line-height: 20px;
    padding: 10px;
    tab-size: 4;
    height: var(--alto);
    overflow: auto;
    resize: none;
    line-height: 1.3;    
}
[contenedor] {
    display: none;
}

.activo {
    display: block;
}
.tabs {
    overflow: hidden;    
    position: sticky;
    top: 0;
    z-index: 1;
}
.tabs button{
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 4px 5px;
    transition: 0.3s;    
    filter: contrast(50%);
}

.tabs button img{
    width: 18px;
    height: 18px;
}

.tabs button:hover {    
    filter: contrast(100%);
}

.tabs button.activo {    
    filter: contrast(100%);
}

.codejar-linenumbers > div {
    filter: invert(1);
}
.linea-error{    
    color: white;
    background-color: red;
    border: solid 1px #902d2d;
    padding-left: 2px;
    padding-right: 2px;
    background-color: #907c7c;
}
.linea-error::before{
    content: '\\25B6 ';
    color: red;
}
.linea-warning{    
    color: white;
    background-color: orange;
    border: solid 1px #902d2d;
    padding-left: 2px;
    padding-right: 2px;
    background-color: #907c7c;
}
.linea-warning::before{
    content: '\\25B6 ';
    color: orange;
}
div[class*="editor"] span::selection, div[class*="editor"]::selection {
    color: var(--color-seleccion);
    background: var(--fondo-seleccion);
}

`,Ee=`
/**host */

.principal {   
    color: white;
    background-color: #2E3440;   
}
`,Le=`
/**host */

.principal {   
    color: black;
    background-color: #F9F5D7;   
}
`;var T=Object.freeze(Object.defineProperty({__proto__:null,oscuro:Ee,claro:Le},Symbol.toStringTag,{value:"Module"}));async function $e(){const t=await f(()=>import("https://unpkg.com/codejar@3.5.0/codejar.js"),[]),e=await f(()=>import("https://unpkg.com/codejar@3.5.0/linenumbers.js"),[]);await f(()=>import("https://unpkg.com/prismjs"),[]);const o=window.Prism;return{CodeJar:t.CodeJar,withLineNumbers:e.withLineNumbers,Prism:o}}const u=await $e();function C(t,e){return e?u.withLineNumbers(t):t}function ke(t,e,o=null,i=!0){const r=a=>{a.textContent=a.textContent;let n=a.textContent,c=u.Prism.highlight(n,u.Prism.languages[e],e);a.innerHTML=c};return o==null?u.CodeJar(t,C(r,i)):u.CodeJar(t,C(o,i))}const q={claro:"https://cdn.jsdelivr.net/gh/PrismJS/prism-themes/themes/prism-gruvbox-light.css",oscuro:"https://cdn.jsdelivr.net/gh/PrismJS/prism-themes/themes/prism-nord.css"};class Te extends HTMLElement{constructor(){super(),this.files=[],this.contadorTab=0,this.editoresJar=[],this.tema="oscuro",this.variablesEditor={alto:"100vh",colorSeleccion:"white",fondoSeleccion:"#446294",tamanioLetra:12}}getTodoElCodigo(){let e=[];for(let o of this.editoresJar)e.push(o.jar.toString());return e}emiteCambio(e,o){let i=new CustomEvent("cambio-editor",{detail:{target:e,codigo:o}});this.dispatchEvent(i)}emiteclipIcono(e,o){let i=new CustomEvent("click-icono",{detail:{target:e,index:o-1}});this.dispatchEvent(i)}swapTema(){this.tema=="claro"?this.setTema("oscuro"):this.setTema("claro")}setTema(e){this.tema=e,this.querySelector("#temacolor").setAttribute("href",q[this.tema]),this.colorStyle.innerHTML=`${T[this.tema]}`,H({tema:e}),P()}creaTab(e,o,i){let r=document.createElement("button");this.tabs.append(r),r.innerHTML=`<span icono>${o}</span> ${e}`,r.id=`tab-${i}`,r.setAttribute("tab","");let a=r.querySelector("[icono]");return a.addEventListener("click",n=>this.emiteclipIcono(a,i)),r}creaEditor(e,o){let i=document.createElement("div");this.editores.append(i),i.innerHTML=`<div id="file+${o}" class="editor language-${e.tipo} principal"></div>`,i.classList.add("contenedor-"+o),i.setAttribute("contenedor","");let r=i.querySelector("div"),a=ke(r,e.tipo,e.fcolor,e.numLinea);return a.updateCode(e.codigo),{editor:i,jar:a}}remueveActivo(e){let o=this.querySelectorAll(e);for(let i of o)i.classList.remove("activo")}activa(e,o){this.remueveActivo("[tab]"),this.remueveActivo("[contenedor]"),e.classList.add("activo"),o.classList.add("activo")}addListenersTabEditor(e,o){e.addEventListener("click",i=>{this.activa(e,o)})}getMetadataFile(){return{titulo:"",tipo:"",codigo:"",icono:"",fcolor:null,numLinea:!0}}activaTabPorIndice(e=0){let o=this.querySelector("#tab-"+e),i=this.querySelector(".contenedor-"+e);o&&i&&(this.activa(o,i),i.querySelector(".editor").focus())}addEventosEditoresJar(){for(let e of this.editoresJar)e.jar.onUpdate(o=>{this.emiteCambio(e.editor,o)})}render(){this.innerHTML=`
        <link rel="stylesheet" href="${q[this.tema]}" id="temacolor">
        <style variables>                
        </style>
        <style color>
            ${T[this.tema]}
        </style>
        <style>
        ${xe}
        </style>
        ${Se}
        `,this.contadorTab=0,this.editoresJar=[],this.tabs=this.querySelector(".tabs"),this.variables=this.querySelector("[variables]"),this.colorStyle=this.querySelector("[color]"),this.seteaVariables(),this.editores=this.querySelector(".editores");for(let e of this.files){let o=this.getMetadataFile();o=Object.assign(o,e);let i=this.creaTab(o.titulo,o.icono,this.contadorTab),r=this.creaEditor(o,this.contadorTab);this.addListenersTabEditor(i,r.editor),this.editoresJar.push(r),this.contadorTab==0&&this.activa(i,r.editor),this.contadorTab++}this.quitaPropiedadColorLineas(),this.addEventosEditoresJar()}quitaPropiedadColorLineas(){let e=this.querySelectorAll(".codejar-linenumbers");for(let o of e)o.style.color=""}seteaTamanioLetraLineas(){let e=this.querySelectorAll(".codejar-linenumbers");for(let o of e)o.style.fontSize=`${this.variablesEditor.tamanioLetra}px`,o.style.lineHeight=1.3}seteaVariables(){this.variables.innerHTML=`
            .variables {
                --alto: ${this.variablesEditor.alto};
                --color-seleccion: ${this.variablesEditor.colorSeleccion};
                --fondo-seleccion: ${this.variablesEditor.fondoSeleccion};
                --tamanio-letra: ${this.variablesEditor.tamanioLetra}px;
            }
        `,this.seteaTamanioLetraLineas()}setAlto(e="100vh"){this.variablesEditor.alto=e,this.seteaVariables()}incrementaTamanio(){this.variablesEditor.tamanioLetra++,this.seteaVariables()}decrementaTamanio(){this.variablesEditor.tamanioLetra--,this.variablesEditor.tamanioLetra<6&&(this.variablesEditor.tamanioLetra=6),this.seteaVariables()}setColorSeleccion(e="white"){this.variablesEditor.colorSeleccion=e,this.seteaVariables()}setFondoSeleccion(e="#446294"){this.variablesEditor.fondoSeleccion=e,this.seteaVariables()}setFiles(e){this.files=e,this.render()}}customElements.define("editor-archivos-codejar",Te);let l=document.querySelector("editor-archivos-codejar"),Ce=document.querySelector(".vista-previa"),[v,b,y]=["","",""],A=location.href.split("#")[1];if(A){let t=JSON.parse(LZString.decompressFromBase64(A));k(t),[v,b,y]=t.codigo}else{let t=localStorage.getItem("documento");if(t){let e=JSON.parse(LZString.decompressFromBase64(t));k(e),[v,b,y]=e.codigo}}async function qe(){return await f(()=>import("https://unpkg.com/prismjs"),[]),{Prism:window.Prism}}let j=await qe();const Ae=t=>{t.textContent=t.textContent;let e=t.textContent,o=j.Prism.highlight(e,j.Prism.languages.javascript,"javascript");w().validarJs&&(o=we(o,e)),t.innerHTML=o};l.setFiles([{titulo:"HTML",tipo:"html",codigo:v,icono:"&#9733;"},{titulo:"CSS",tipo:"css",codigo:b,icono:"&#9733;"},{titulo:"Js",tipo:"javascript",codigo:y,fcolor:Ae,icono:"&#9733;"}]);let K=95;window.addEventListener("resize",t=>{l.setAlto(`${window.innerHeight-K}px`)});l.setAlto(`${window.innerHeight-K}px`);l.addEventListener("cambio-editor",t=>{});function E(){he(l,Ce)}E();x();function L(){return l}let je=document.querySelector(".consola");ie({colorString:"black"});ne(je);_(`<h2 style="color: indigo;">Logger beta</h2>
<h4>by Sa\xFAl SM</h4>`);l.setTema(w().tema);let Je=document.querySelector("#compartir");Je.addEventListener("click",t=>{let e=S(),o=`${location.protocol}//${location.host}${location.pathname}`,i=LZString.compressToBase64(JSON.stringify(e));o+="#"+i,navigator.clipboard.writeText(o).then(r=>{J({tipo:"w3-green",titulo:"&#10004; Ok",mensaje:"Se copi\xF3 la url para compartir"})})});let Oe=document.querySelector("#guardar");Oe.addEventListener("click",t=>{M()});const Pe=`
<div class="w3-panel w3-bottombar w3-border-blue">
<p>Editor</p>
</div>
<div class="w3-margin-top">
  <span class="w3-indigo w3-border w3-padding-small w3-round-xxlarge">ctrl + m</span>
  <span>Abre un nuevo documento en blanco.</span>    
</div> 
<div class="w3-margin-top">
  <span class="w3-indigo w3-border w3-padding-small w3-round-xxlarge">ctrl + s</span>
  <span>Guardar el c\xF3digo en el explorador.</span>    
</div> 
<div class="w3-margin-top">
  <span class="w3-indigo w3-border w3-padding-small w3-round-xxlarge">ctrl + e</span>
  <span>Ejecutar.</span>    
</div> 
<div class="w3-margin-top">
  <span class="w3-indigo w3-border w3-padding-small w3-round-xxlarge">ctrl + k</span>
  <span>Intercambiar tema de editor.</span>    
</div> 
<div class="w3-margin-top">
  <span class="w3-indigo w3-border w3-padding-small w3-round-xxlarge">ctrl + d</span>
  <span>Descarga el contenido un archivo html.</span>    
</div> 
<div class="w3-margin-top">
  <span class="w3-indigo w3-border w3-padding-small w3-round-xxlarge">ctrl + &lt;</span>
  <span>Decrementa la letra de los editores.</span>    
</div>  
<div class="w3-margin-top">
  <span class="w3-indigo w3-border w3-padding-small w3-round-xxlarge">ctrl + &gt;</span>
  <span>Incrementa la letra de los editores.</span>    
</div>
`,He=`
<div class="w3-panel w3-bottombar w3-border-blue">
<p>Focus</p>
</div>
<div class="w3-margin-top">
  <span class="w3-indigo w3-border w3-padding-small w3-round-xxlarge">ctrl + 1</span>
  <span>Activa el editor html.</span>    
</div>
<div class="w3-margin-top">
  <span class="w3-indigo w3-border w3-padding-small w3-round-xxlarge">ctrl + 2</span>
  <span>Activa el editor css.</span>    
</div>
<div class="w3-margin-top">
  <span class="w3-indigo w3-border w3-padding-small w3-round-xxlarge">ctrl + 3</span>
  <span>Activa el editor js.</span>    
</div>
<div class="w3-margin-top">
  <span class="w3-indigo w3-border w3-padding-small w3-round-xxlarge">ctrl + 4</span>
  <span>Activa la consola.</span>    
</div>   
`,Me=`   
<div class="w3-padding" style="max-height: calc(100vh / 2); overflow: auto; display: flex; flex-wrap: wrap;"> 
    <div style="width: 50%;  margin-right: 5px;">
    ${Pe}    
    </div>  
    <div style="width: 48%;">
    ${He}  
    </div>
</div>
`;let ze=document.querySelector("#ayuda");ze.addEventListener("click",t=>{let e=new O({colorFondo:"w3-black",colorActivo:"w3-indigo"});e.titulo="Comandos",e.innerHtml=Me,e.opciones.ancho="90%",e.open()});let Ie=document.querySelector("#codepen");Ie.addEventListener("click",t=>{ee()});let De=document.querySelector("#run");De.addEventListener("click",()=>{E()});function m(t,e){return t===e?"selected":""}function Ne(){const t=w();return`
<div class="w3-padding" style="max-height: calc(100vh / 2); overflow: auto;"> 
  <div class="w3-panel">
<form >
    <div class="w3-margin-bottom">
    <label for="tema"><b>Tema:</b></label>
    <select class="w3-select" name="tema">
    <option value="claro" ${m("claro",t.tema)}>Claro</option>
    <option value="oscuro" ${m("oscuro",t.tema)}>Oscuro</option>
    </select>
    </div>
    <div>
    <label for="tema"><b>Validar c\xF3digo Javascript:<b></label>
    <select class="w3-select" name="validarJs">
    <option value="true" ${m(!0,t.validarJs)}>SI</option>
    <option value="false" ${m(!1,t.validarJs)}>No</option>
    </select>
    </div>
</form>
  </div>
</div>
`}let Fe=document.querySelector("#configurar");Fe.addEventListener("click",()=>{let t=new O({colorFondo:"w3-black",colorActivo:"w3-indigo"});t.titulo="Configuraciones",t.innerHtml=Ne(),t.opciones.ancho="50%",t.open().then(e=>{const o={validarJs:e.data.validarJs==="true",tema:e.data.tema};H(o),P(),L().setTema(o.tema)})});V(window);
