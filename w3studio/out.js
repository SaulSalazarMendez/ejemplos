(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/environments.js
  var environments;
  var init_environments = __esm({
    "src/environments.js"() {
      environments = {
        /** 
         * @type {'local' | 'produccion'} define el modo de la app
         */
        modo: "produccion"
      };
    }
  });

  // src/vanilla/utils/modal/zindexModal.js
  function getZindez() {
    return zindex++;
  }
  var zindex;
  var init_zindexModal = __esm({
    "src/vanilla/utils/modal/zindexModal.js"() {
      zindex = 1e5;
    }
  });

  // src/vanilla/utils/modal/modal.js
  var Modal;
  var init_modal = __esm({
    "src/vanilla/utils/modal/modal.js"() {
      init_zindexModal();
      Modal = class {
        constructor() {
          this._innerHtml = "Modal";
          this._titulo = "Titulo";
          this._cancelar = "Cancelar";
          this._aceptar = "Aceptar";
          this._el = null;
        }
        set innerHtml(val) {
          this._innerHtml = val;
        }
        get innerHtml() {
          return this._innerHtml;
        }
        set cancelar(val) {
          this._cancelar = val;
        }
        get cancelar() {
          return this._cancelar;
        }
        set aceptar(val) {
          this._aceptar = val;
        }
        get aceptar() {
          return this._aceptar;
        }
        set titulo(val) {
          this._titulo = val;
        }
        get titulo() {
          return this._titulo;
        }
        open() {
          let div2 = document.createElement("div");
          let body = document.querySelector("body");
          this._el = div2;
          div2.style.zIndex = getZindez();
          div2.style.background = "rgba(50,50,50,0.5)";
          div2.style.position = "fixed";
          div2.style.top = 0;
          div2.style.left = 0;
          div2.style.bottom = 0;
          div2.style.width = "100%";
          div2.style.height = "100vh";
          div2.innerHTML = this.createWin();
          body.appendChild(div2);
          const cerrar = div2.querySelector("#close");
          const cancelar = div2.querySelector("#cancelar");
          const aceptar = div2.querySelector("#aceptar");
          aceptar.focus();
          return this.terminar(cerrar, cancelar, aceptar);
        }
        dataAceptar() {
          return null;
        }
        terminar(cerrar, cancelar, aceptar) {
          return new Promise((resolve2, reject2) => {
            if (cerrar) {
              cerrar.addEventListener("click", (e) => {
                this._el.remove();
                reject2({ val: false, op: "cerrar" });
              });
            }
            if (cancelar) {
              cancelar.addEventListener("click", (e) => {
                this._el.remove();
                reject2({ val: false, op: "cancelar" });
              });
            }
            if (aceptar) {
              aceptar.addEventListener("click", (e) => {
                const data2 = this.dataAceptar();
                this._el.remove();
                resolve2({ val: true, op: "aceptar", data: data2 });
              });
            }
          });
        }
        createWin() {
          return (
            /*html*/
            `
        <div class="w3-card-4 w3-white" id="ventana" 
        style="
            width: 50%;
            margin-left: 25%;
            margin-right: 25%;
            margin-top: 15%;
        ">
            <div class="w3-bar w3-blue" id="barra-titulo">
                <div class="w3-bar-item" id="titulo">${this._titulo}</div>
                <div class="w3-right">
                    <span class="w3-button w3-black" id="close">x</span>
                </div>
            </div>
            <div class="w3-container">
                <div class="ventana-body">
                    ${this._innerHtml}
                </div>               
            </div>
            <div class="w3-container">
                <button class="w3-button w3-border w3-hover-blue w3-right w3-margin" id="aceptar">${this._aceptar}</button>
                <button class="w3-button w3-border w3-hover-red w3-right w3-margin" id="cancelar">${this._cancelar}</button>
            </div>
        </div>
        `
          );
        }
      };
    }
  });

  // src/vanilla/bootswatch-libs.js
  function getBootswatchLocal() {
    return {
      cerulan: "http://localhost/saul/lib/bootswatch/cerulean/bootstrap.min.css",
      cosmo: "http://localhost/saul/lib/bootswatch/cosmo/bootstrap.min.css",
      default: "http://localhost/saul/lib/bootswatch/default/bootstrap.min.css",
      flatly: "http://localhost/saul/lib/bootswatch/flatly/bootstrap.min.css",
      journal: "http://localhost/saul/lib/bootswatch/journal/bootstrap.min.css",
      literia: "http://localhost/saul/lib/bootswatch/literia/bootstrap.min.css",
      lux: "http://localhost/saul/lib/bootswatch/lux/bootstrap.min.css",
      materia: "http://localhost/saul/lib/bootswatch/materia/bootstrap.min.css",
      minty: "http://localhost/saul/lib/bootswatch/minty/bootstrap.min.css",
      morph: "http://localhost/saul/lib/bootswatch/morph/bootstrap.min.css",
      quartz: "http://localhost/saul/lib/bootswatch/quartz/bootstrap.min.css",
      sandstone: "http://localhost/saul/lib/bootswatch/sandstone/bootstrap.min.css",
      simplex: "http://localhost/saul/lib/bootswatch/simplex/bootstrap.min.css",
      sketchy: "http://localhost/saul/lib/bootswatch/sketchy/bootstrap.min.css",
      spacelab: "http://localhost/saul/lib/bootswatch/spacelab/bootstrap.min.css",
      superhero: "http://localhost/saul/lib/bootswatch/superhero/bootstrap.min.css",
      united: "http://localhost/saul/lib/bootswatch/united/bootstrap.min.css",
      yeti: "http://localhost/saul/lib/bootswatch/yeti/bootstrap.min.css",
      zephyr: "http://localhost/saul/lib/bootswatch/zephyr/bootstrap.min.css"
    };
  }
  function getBootswatchProduccion() {
    return {
      cerulan: "https://cdn.jsdelivr.net/npm/bootswatch@5/dist/cerulean/bootstrap.min.css",
      cosmo: "https://cdn.jsdelivr.net/npm/bootswatch@5/dist/cosmo/bootstrap.min.css",
      default: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css",
      flatly: "https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/flatly/bootstrap.min.css",
      journal: "https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/journal/bootstrap.min.css",
      literia: "https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/literia/bootstrap.min.css",
      lux: "https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/lux/bootstrap.min.css",
      materia: "https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/materia/bootstrap.min.css",
      minty: "https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/minty/bootstrap.min.css",
      morph: "https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/morph/bootstrap.min.css",
      quartz: "https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/quartz/bootstrap.min.css",
      sandstone: "https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/sandstone/bootstrap.min.css",
      simplex: "https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/simplex/bootstrap.min.css",
      sketchy: "https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/sketchy/bootstrap.min.css",
      spacelab: "https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/spacelab/bootstrap.min.css",
      superhero: "https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/superhero/bootstrap.min.css",
      united: "https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/united/bootstrap.min.css",
      yeti: "https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/yeti/bootstrap.min.css",
      zephyr: "https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/zephyr/bootstrap.min.css"
    };
  }
  function getTemasBootswatch() {
    return Object.keys(getBootswatchProduccion());
  }
  var init_bootswatch_libs = __esm({
    "src/vanilla/bootswatch-libs.js"() {
    }
  });

  // src/vanilla/config.js
  function loadConfigDesk() {
    const desk3 = document.querySelector(".escritorio");
    let item = localStorage.getItem("configDesk");
    let json = null;
    if (item) {
      json = JSON.parse(item);
    } else {
      json = {
        colorVentanaActiva: "w3-blue",
        colorVentanaInactiva: "w3-grey",
        ventana: "",
        colorDesk: "blue",
        imagenDesk: 'url("./img/libres/monta\xF1a.jpg")'
      };
    }
    desk3.style.background = json.colorDesk;
    if (json.imagenDesk) {
      desk3.style.backgroundImage = json.imagenDesk;
      desk3.style.backgroundRepeat = "round";
    }
    return json;
  }
  function saveConfigDesk() {
    localStorage.setItem("configDesk", JSON.stringify(configDesk));
  }
  var configuracion, config, configDesk;
  var init_config = __esm({
    "src/vanilla/config.js"() {
      init_environments();
      init_bootswatch_libs();
      configuracion = {
        host: "http://localhost/saul/lib",
        //host: 'http://saulsm.epizy.com/lib'
        colorVentanaActiva: "w3-blue",
        colorVentanaInactiva: "w3-grey",
        winxp: "http://localhost/saul/lib/win/xp.css",
        win98: "http://localhost/saul/lib/win/98.css",
        w3css: "http://localhost/saul/lib/w3css/w3.css",
        fontAwesome: "http://localhost/saul/lib/fonts/fafafont/font-awesome.min.css",
        animate: "http://localhost/saul/lib/css/animate.min.css",
        codeMirror: {
          showhint: "http://localhost/saul/lib/codemirror/addon/hint/show-hint.css",
          main: "http://localhost/saul/lib/codemirror/lib/codemirror.css",
          ambiance: "http://localhost/saul/lib/codemirror/theme/ambiance.css",
          darcula: "http://localhost/saul/lib/codemirror/theme/darcula.css",
          material: "http://localhost/saul/lib/codemirror/theme/material.css",
          solarized: "http://localhost/saul/lib/codemirror/theme/solarized.css",
          neo: "http://localhost/saul/lib/codemirror/theme/neo.css",
          mbo: "http://localhost/saul/lib/codemirror/theme/mbo.css",
          tern: "http://localhost/saul/lib/codemirror/addon/tern/tern.css",
          dialog: "http://localhost/saul/lib/codemirror/addon/dialog/dialog.css"
        },
        bootstrap: getBootswatchLocal()
      };
      if (environments.modo == "produccion") {
        configuracion = {
          host: "Git hub",
          colorVentanaActiva: "w3-blue",
          colorVentanaInactiva: "w3-grey",
          winxp: "https://unpkg.com/xp.css@0.2.4/dist/XP.css",
          win98: "https://unpkg.com/98.css@0.1.17/dist/98.css ",
          w3css: "https://www.w3schools.com/w3css/4/w3.css",
          fontAwesome: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
          animate: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
          codeMirror: {
            showhint: "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/addon/hint/show-hint.min.css",
            main: "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/codemirror.min.css",
            ambiance: "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/theme/ambiance.min.css",
            darcula: "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/theme/darcula.min.css",
            material: "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/theme/material.min.css",
            solarized: "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.62.0/theme/solarized.min.css",
            neo: "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/theme/neo.min.css",
            mbo: "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/theme/mbo.min.css",
            tern: "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/addon/tern/tern.min.css",
            dialog: "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/addon/dialog/dialog.min.css"
          },
          bootstrap: getBootswatchProduccion()
        };
      }
      config = configuracion;
      configDesk = loadConfigDesk();
    }
  });

  // src/vanilla/utils/ventana/agregarApps.js
  function addWindow(componente, titulo, resize, maximizar) {
    return addWindowConParametros(componente, titulo, { resize, maximizar });
  }
  function addWindowConParametros(componente, titulo, parametrosWin = {}, parametrosApp = {}) {
    const desk3 = document.querySelector(".escritorio");
    let ventanaComp = "x-window" + configDesk.ventana;
    const win = document.createElement(ventanaComp);
    let app3 = document.createElement(componente);
    for (let i in parametrosApp) {
      app3.setAttribute(i, parametrosApp[i]);
    }
    win.appendChild(app3);
    win.setAttribute("titulo", titulo);
    desk3.appendChild(win);
    for (let i in parametrosWin) {
      if (parametrosWin[i] != null || parametrosWin[i] != void 0) {
        win.setAttribute(i, parametrosWin[i]);
      }
    }
    win.setAttribute("activo", 1);
    win.setAttribute("size", JSON.stringify({ ancho: 300, alto: 400 }));
    activaVentana(win);
    return app3;
  }
  function activaVentana(win) {
    setTimeout((ev) => {
      win.activo = 1;
    }, 50);
  }
  var init_agregarApps = __esm({
    "src/vanilla/utils/ventana/agregarApps.js"() {
      init_config();
    }
  });

  // src/appVue/calculadora/calculadora.js
  var require_calculadora = __commonJS({
    "src/appVue/calculadora/calculadora.js"(exports, module) {
      init_config();
      var idcalculadora = 0;
      var template90 = (
        /*html*/
        `
<div @keyup="onkey" :tabindex="id" class="calc yolo">    
    <x-bar-menu color="w3-blue-grey" titulo="Calculadora" icono="calculator"></x-bar-menu>
    <div class="w3-row w3-margin">
        <div class="w3-col s12">
            <div class="margen w3-white w3-border">
            <div style="text-align: right;font-size: large;">{{getNumero()}}</div>
            <div style="font-size: xx-small;">
                <span v-if="operacion!=''">{{pila}}{{operacion}}</span>{{getNumero()}}
            </div>
            </div>
        </div>        
    </div>
    <div class="w3-row w3-margin">
        <div class="w3-col s3 w3-center"><span class="w3-deep-orange w3-border boton w3-hover-blue-grey" @click="onEliminaLetra()"><--</span></div>
        <div class="w3-col s3 w3-center"><span class="w3-deep-orange w3-border boton w3-hover-blue-grey" @click="reset()">Ce</span></div>
        <div class="w3-col s3 w3-center"><span class="w3-deep-orange w3-border boton w3-hover-blue-grey" @click="limpiaNumero()">C</span></div>
        <div class="w3-col s3 w3-center"><span class="w3-deep-orange w3-border boton w3-hover-blue-grey" @click="onOperacion('/')">/</span></div>
        <div class="w3-col s3 w3-center"><span class="w3-white w3-border boton w3-hover-blue-grey" @click="addNumero(7)">7</span></div>
        <div class="w3-col s3 w3-center"><span class="w3-white w3-border boton w3-hover-blue-grey" @click="addNumero(8)">8</span></div>
        <div class="w3-col s3 w3-center"><span class="w3-white w3-border boton w3-hover-blue-grey" @click="addNumero(9)">9</span></div>
        <div class="w3-col s3 w3-center"><span class="w3-deep-orange w3-border boton w3-hover-blue-grey" @click="onOperacion('*')">*</span></div>
        <div class="w3-col s3 w3-center"><span class="w3-white w3-border boton w3-hover-blue-grey" @click="addNumero(4)">4</span></div>
        <div class="w3-col s3 w3-center"><span class="w3-white w3-border boton w3-hover-blue-grey" @click="addNumero(5)">5</span></div>
        <div class="w3-col s3 w3-center"><span class="w3-white w3-border boton w3-hover-blue-grey" @click="addNumero(6)">6</span></div>
        <div class="w3-col s3 w3-center"><span class="w3-deep-orange w3-border boton w3-hover-blue-grey" @click="onOperacion('-')">-</span></div>
        <div class="w3-col s3 w3-center"><span class="w3-white w3-border boton w3-hover-blue-grey" @click="addNumero(1)">1</span></div>
        <div class="w3-col s3 w3-center"><span class="w3-white w3-border boton w3-hover-blue-grey" @click="addNumero(2)">2</span></div>
        <div class="w3-col s3 w3-center"><span class="w3-white w3-border boton w3-hover-blue-grey" @click="addNumero(3)">3</span></div>
        <div class="w3-col s3 w3-center"><span class="w3-deep-orange w3-border boton w3-hover-blue-grey" @click="onOperacion('+')">+</span></div>
        <div class="w3-col s6 w3-center"><span class="w3-white w3-border boton w3-hover-blue-grey" @click="addNumero(0)">0</span></div>
        <div class="w3-col s3 w3-center"><span class="w3-white w3-border boton w3-hover-blue-grey" @click="onPunto()">.</span></div>
        <div class="w3-col s3 w3-center"><span class="w3-deep-orange w3-border boton w3-hover-blue-grey" @click="onResultado()">=</span></div>        
    </div>
</div>
`
      );
      var style87 = (
        /*css*/
        `
.yolo {
    font-family: Verdana,sans-serif;
    font-size: 15px;
    line-height: 1.5;
    margin: 0;
}
.margen{
    margin: 2px;
    margin-bottom: 20px
}
.boton{
    cursor: pointer;
    display: block;
    margin: 2px;
    height: 30px;
}
.calc:focus { outline: none; }
`
      );
      var Calculadora = class extends HTMLElement {
        constructor() {
          super();
          this.render();
        }
        render() {
          let shadowRoot = this.attachShadow({ mode: "open" });
          shadowRoot.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style87}</style>            
            <div></div>            
        `;
          const div = shadowRoot.querySelector("div");
          const numeros = /* @__PURE__ */ new Set([
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
          ]);
          const operaciones = /* @__PURE__ */ new Set(["/", "*", "-", "+"]);
          let app = new Vue({
            el: div,
            template: template90,
            data() {
              return {
                num1: "",
                pila: "",
                id: idcalculadora++,
                punto: false,
                operacion: ""
              };
            },
            methods: {
              limpiaNumero() {
                this.num1 = "";
              },
              reset() {
                this.num1 = "";
                this.pila = "";
                this.punto = false;
                this.operacion = "";
              },
              eliminaCerosInicio(cad) {
                let n = "";
                let haynumero = false;
                for (let i of cad) {
                  if (i == ".") {
                    n += n == "" ? "0." : ".";
                  } else if (i != "0" || haynumero) {
                    n += i;
                    haynumero = true;
                  }
                }
                if (n == "")
                  n = "0";
                return n;
              },
              getNumero() {
                return this.num1 != "" ? this.num1 : "0";
              },
              addNumero(n) {
                if (this.num1.length > 10) {
                  return;
                }
                this.num1 += "" + n;
              },
              onOperacion(p) {
                this.pila = this.eliminaCerosInicio(this.num1);
                this.operacion = p;
                this.num1 = "";
                this.punto = false;
              },
              onEliminaLetra() {
                this.num1 = this.num1.substr(0, this.num1.length - 1);
              },
              onkey(e) {
                if (e.key == "Backspace") {
                  this.onEliminaLetra();
                }
                if (numeros.has(e.key)) {
                  this.addNumero(parseInt(e.key));
                }
                if (e.key == "." && !this.punto) {
                  this.onPunto();
                }
                if (operaciones.has(e.key)) {
                  this.onOperacion(e.key);
                }
                if (e.key == "Enter") {
                  this.onResultado();
                }
              },
              onPunto() {
                this.punto = true;
                this.num1 += ".";
              },
              onResultado() {
                this.num1 = this.num1 == "" ? "0" : this.num1;
                if (this.operacion == "")
                  return;
                const op = "" + this.pila + this.operacion + this.eliminaCerosInicio(this.num1);
                this.num1 = "" + eval(op);
                this.pila = "";
                this.punto = false;
                this.operacion = "";
              }
            }
          });
        }
      };
      customElements.define("x-calculadora", Calculadora);
    }
  });

  // src/vanilla/utils/db/index-db-REST.js
  var IndexedDBREST;
  var init_index_db_REST = __esm({
    "src/vanilla/utils/db/index-db-REST.js"() {
      IndexedDBREST = class {
        /**
         * Constructor
         * @param {string} nameDB Nombre de la base de datos
         * @param {number} versionDB Numero de versión
         * @param {{}} tablas Objeto de tablas que se crearan.
         * @param {function} onError callback que regresa TODOS los errores de ejecución
         */
        constructor(nameDB, versionDB, tablas2, onError) {
          this.isStart = false;
          this.db = null;
          this.onError = onError;
          let obj = this;
          let indexedDB = window.indexedDB;
          let open2 = indexedDB.open(nameDB, versionDB);
          this.tablas = tablas2;
          this.folio = Date.now();
          open2.onupgradeneeded = () => {
            let db5 = open2.result;
            if (tablas2) {
              for (const tabla in tablas2) {
                try {
                  db5.createObjectStore(tabla, { keyPath: tablas2[tabla].id });
                } catch (e) {
                  console.log(`%cYa existe ${tabla}`, "color: red");
                }
              }
            }
            obj.db = open2.result;
          };
          open2.onsuccess = function() {
            obj.db = open2.result;
            obj.isStart = true;
          };
          open2.onerror = (e) => {
            if (!obj.isStart) {
              obj.isStart = false;
            }
            if (onError) {
              onError(e);
            }
          };
        }
        getFolio() {
          this.folio++;
          return this.folio;
        }
        copy(json) {
          if (!json) {
            return void 0;
          }
          return JSON.parse(JSON.stringify(json));
        }
        /**
         * Agrega un registro a la tabla _table
         * @param _table tabla con la que se trabajara
         * @param _datos datos a guardar
         * @param _auto_id crear un id automaticamente
         * @return Una promesa que devuelve el registro agregado o el error
         */
        post(_table, _data, _auto_id = true) {
          let obj = this;
          return new Promise(
            (resolve2, reject2) => {
              if (!obj.db) {
                reject2("Error: no init indexedDB");
              } else {
                try {
                  let db5 = obj.db;
                  let tx = db5.transaction(_table, "readwrite");
                  let store = tx.objectStore(_table);
                  let json = _data;
                  if (_auto_id) {
                    json[this.tablas[_table].id] = obj.getFolio();
                  }
                  let request = store.put(json);
                  request.onsuccess = function() {
                    let out = _data;
                    resolve2(obj.copy(out));
                  };
                  request.onerror = function(e) {
                    this.onError({ type: "POST", error: e });
                    reject2("Ocurrio un error");
                  };
                  tx.oncomplete = function() {
                  };
                } catch (error) {
                  setTimeout(() => {
                    obj.post(_table, _data).then((res) => {
                      resolve2(res);
                    }).catch((err) => {
                      reject2(err);
                    });
                  }, 1e3);
                }
              }
            }
          );
        }
        /**
         * Funcion busca un elemento en la tabla dada.
         * @param _table tabla con la que se trabajara
         * @param _key llave a buscar
         * @return una promesa que contienen el elemento encontrado o el error
         */
        get(_table, _key) {
          let obj = this;
          return new Promise((resolve2, reject2) => {
            if (!obj.db) {
              reject2("Error: no init indexedDB");
            } else {
              try {
                let db5 = obj.db;
                let tx = db5.transaction(_table, "readonly");
                let store = tx.objectStore(_table);
                let request = store.get(_key);
                request.onsuccess = function() {
                  let out = request.result;
                  resolve2(obj.copy(out));
                };
                request.onerror = function(e) {
                  this.onError({ type: "GET", error: e });
                  resolve2(null);
                };
                tx.oncomplete = function() {
                };
              } catch (error) {
                setTimeout(() => {
                  obj.get(_table, _key).then((res) => {
                    resolve2(res);
                  }).catch((err) => {
                    reject2(err);
                  });
                }, 1e3);
              }
            }
          });
        }
        /**
         * Esta funcion manda el error o la actualizacion hasta que se desocupa la transacion
         * @param _table Tabla que se actualizara
         * @param _data json con los cambios
         */
        put(_table, _data) {
          let obj = this;
          return new Promise((resolve2, reject2) => {
            if (!obj.db) {
              reject2("Error: no init indexedDB");
            } else {
              try {
                let db5 = obj.db;
                let tx = db5.transaction(_table, "readwrite");
                let store = tx.objectStore(_table);
                const _id = this.tablas[_table].id;
                if (!_data.hasOwnProperty(_id)) {
                  _data[_id] = obj.getFolio();
                }
                let request = store.put(_data);
                request.onsuccess = function() {
                  let out = _data;
                  resolve2(obj.copy(out));
                };
                request.onerror = function(e) {
                  this.onError({ type: "PUT", error: e });
                  reject2("Ocurrio un error");
                };
                tx.oncomplete = function() {
                };
              } catch (error) {
                setTimeout(() => {
                  obj.put(_table, _data).then((res) => {
                    resolve2(res);
                  }).catch((err) => {
                    reject2(err);
                  });
                }, 1e3);
              }
            }
          });
        }
        /**
         * Funcion que elimina un registro a la tabla _table
         * @param _table tabla con la que se trabajara
         * @param _key elemento a eliminar     
         * @return Una promesa que devuelve true si se elimina o false si no se pudo
         */
        delete(_table, _key) {
          let obj = this;
          return new Promise((resolve2, reject2) => {
            try {
              let db5 = obj.db;
              let tx = db5.transaction(_table, "readwrite");
              let store = tx.objectStore(_table);
              let requets = store.delete(_key);
              requets.onsuccess = function(e) {
                let out = true;
                resolve2(out);
              };
              requets.onerror = function(e) {
                let out = false;
                this.onError({ type: "DELETE", error: e });
                resolve2(out);
              };
              tx.oncomplete = function() {
              };
            } catch (error) {
              setTimeout(() => {
                obj.delete(_table, _key).then((res) => {
                  resolve2(res);
                }).catch((err) => {
                  reject2(err);
                });
              }, 1e3);
            }
          });
        }
        /**
         * Funcion que lista los elementos de latabla dada
         * @param _table tabla con la que trabajara
         * @return una promesa que devuelve la lista de elementos de la tabla dada o el error
         */
        list(_table) {
          let obj = this;
          return new Promise(
            (resolve2, reject2) => {
              try {
                let db5 = obj.db;
                let tx = db5.transaction(_table, "readonly");
                let store = tx.objectStore(_table);
                let list = store.openCursor();
                let items = [];
                list.onsuccess = function(evt) {
                  let cursor = evt.target.result;
                  if (cursor) {
                    items.push(cursor.value);
                    cursor.continue();
                  }
                };
                list.onerror = function(e) {
                  this.onError({ type: "LIST", error: e });
                  reject2(e);
                };
                tx.oncomplete = function() {
                  resolve2(obj.copy(items));
                };
              } catch (error) {
                setTimeout(() => {
                  obj.list(_table).then((res) => {
                    resolve2(res);
                  });
                }, 1e3);
              }
            }
          );
        }
        /**
         * Funcion para eliminar el contenido de una tabla
         * @_table_ nombre de la tabla a limpiar
         * @return devuelve una promesa que contienen true o el error.
         */
        clear(_table) {
          let obj = this;
          return new Promise(
            (resolve2, reject2) => {
              if (!obj.db) {
                reject2("Error: no init indexedDB");
              } else {
                let db5 = obj.db;
                let tx = db5.transaction(_table, "readwrite");
                let store = tx.objectStore(_table);
                let req = store.clear();
                req.onsuccess = function(evt) {
                  let out = true;
                  resolve2(out);
                };
                req.onerror = function(e) {
                  this.onError({ type: "CLEAR", error: e });
                  reject2(e);
                };
              }
            }
          );
        }
      };
    }
  });

  // src/vanilla/utils/db/db.js
  function getDB() {
    return db2;
  }
  var tablas, version, db2, eventoBaseDatos;
  var init_db = __esm({
    "src/vanilla/utils/db/db.js"() {
      init_index_db_REST();
      tablas = {
        proyectos: {
          id: "id"
        },
        vistas: {
          id: "id"
        },
        grupos: {
          id: "id"
        },
        usuarios: {
          id: "id"
        },
        caminos: {
          id: "id"
        },
        metadataVistas: {
          id: "id"
        },
        headers: {
          id: "id"
        },
        footers: {
          id: "id"
        },
        globals: {
          id: "id"
        },
        componentes: {
          id: "tag"
        },
        apps: {
          id: "tag"
        },
        componentesIde: {
          id: "tag"
        }
      };
      version = 8;
      db2 = new IndexedDBREST("w3-studio", version, tablas);
      eventoBaseDatos = new CustomEvent("readyDB", {
        detail: {
          info: "Base de datos lista"
        }
      });
      document.dispatchEvent(eventoBaseDatos);
    }
  });

  // src/vanilla/utils/componentes-registrados/lista-componentes-activos.js
  function estaComponenteUsuarioActivo(tag2) {
    if (lista3.findIndex((item) => tag2 == item) == -1) {
      return false;
    }
    return true;
  }
  function registraComponenteUsuario(tag2) {
    if (!estaComponenteUsuarioActivo(tag2)) {
      lista3.push(tag2);
    }
  }
  function getListaDeComponentesUsuario() {
    return lista3;
  }
  var lista3;
  var init_lista_componentes_activos = __esm({
    "src/vanilla/utils/componentes-registrados/lista-componentes-activos.js"() {
      lista3 = [];
    }
  });

  // src/vanilla/utils/notificacion/notificaciones.js
  function addListenerCerrar(div2, span, reloj) {
    span.addEventListener("click", (ev) => {
      clearInterval(reloj);
      div2.remove();
    });
  }
  function addNoticiaciones() {
    let div2 = document.createElement("div");
    div2.id = "notificaciones-de-la-app";
    div2.style.cssText = "position: fixed; bottom: 0; right: 20px; height: auto; z-index: 10000;";
    let body = document.querySelector("body");
    body.append(div2);
    return div2;
  }
  function addNotificacion(tipo2, titulo, mensaje, tiempo = 5e3) {
    let div2 = document.createElement("div");
    div2.classList.value = `w3-panel w3-card-4 w3-display-container ${tipo2}`;
    div2.style.minWidth = "200px";
    div2.innerHTML = `
        <span
            class="w3-button w3-green w3-large w3-display-topright">&times;</span>
        <h3>${titulo}</h3>
        <p>${mensaje}</p>
        <div class="w3-border w3-grey">
          <div class="w3-blue" style="height:5px;width:0" tiempo></div>
        </div>
        <br>
    `;
    let span = div2.querySelector("span");
    let barra = div2.querySelector("[tiempo]");
    let contadorTiempo = 0;
    let reloj = setInterval((t) => {
      contadorTiempo += 10;
      if (contadorTiempo > tiempo) {
        clearInterval(reloj);
        div2.remove();
      } else {
        const ancho = contadorTiempo / tiempo * 100;
        barra.style.width = ancho + "%";
      }
    }, 10);
    addListenerCerrar(div2, span, reloj);
    let notificaciones = document.querySelector("#notificaciones-de-la-app");
    if (!notificaciones) {
      notificaciones = addNoticiaciones();
    }
    notificaciones.appendChild(div2);
  }
  var NOTIFICACION;
  var init_notificaciones = __esm({
    "src/vanilla/utils/notificacion/notificaciones.js"() {
      NOTIFICACION = {
        ALERT: "w3-red",
        SUCCESS: "w3-green",
        WARNING: "w3-yellow"
      };
    }
  });

  // src/vanilla/utils/memes/nyancat.js
  function llamaNyancat() {
    let nyancat = document.createElement("div");
    nyancat.style.cssText = "position: absolute; top: 50%; left: 40%; z-index: 10001";
    nyancat.innerHTML = '<img src="./img/nyancat.gif">';
    nyancat.classList.value = "animate__animated animate__backInLeft animate__delay-1s";
    let body = document.querySelector("body");
    body.append(nyancat);
    let sonido = new Audio("./img/hola-adios.mp3");
    nyancat.appendChild(sonido);
    let veces = 0;
    nyancat.addEventListener("animationend", (ev) => {
      if (veces == 0) {
        sonido.play();
        nyancat.classList.value = "animate__animated animate__backOutRight animate__delay-1s";
        veces++;
      } else {
        nyancat.remove();
      }
    });
  }
  var init_nyancat = __esm({
    "src/vanilla/utils/memes/nyancat.js"() {
    }
  });

  // src/vanilla/utils/html/music-playe.js
  function getMusicPlayer() {
    return player;
  }
  var MusicPlayer, player;
  var init_music_playe = __esm({
    "src/vanilla/utils/html/music-playe.js"() {
      MusicPlayer = class {
        constructor() {
          this.player = new Audio();
          this.indice = 0;
          this.lista = [];
          this.load();
          this.addListeners();
        }
        addListeners() {
          this.player.addEventListener("ended", (ev) => {
            this.next();
          });
        }
        /**
         * Agrega una pista de sonido
         * @param {string} track url de la pista
         */
        add(track) {
          if (track) {
            this.lista.push(track);
            this.save();
          }
        }
        save() {
          localStorage.setItem("lista_player", JSON.stringify(this.lista));
        }
        load() {
          let lista4 = localStorage.getItem("lista_player");
          if (lista4) {
            this.lista = JSON.parse(lista4);
          }
        }
        play() {
          if (this.lista.length == 0) {
            return;
          }
          if (!this.player.src) {
            this.player.src = this.lista[this.indice];
            this.indice = (this.indice + 1) % this.lista.length;
          }
          if (!this.player.paused) {
            this.player.load();
          }
          this.player.play();
        }
        pause() {
          this.player.pause();
        }
        estatus() {
          if (this.player.paused) {
            if (this.player.src != "") {
              return "PAUSADO";
            }
            return "PARADO";
          }
          return "REPRODUCIENDO";
        }
        next10s() {
          if (this.player.src != "") {
            this.player.currentTime += 10;
          }
        }
        back10s() {
          if (this.player.src != "") {
            this.player.currentTime -= 10;
          }
        }
        stop() {
          this.player.pause();
          this.player.load();
        }
        next() {
          if (this.lista.length == 0) {
            return;
          }
          this.player.src = this.lista[this.indice];
          this.indice = (this.indice + 1) % this.lista.length;
          this.player.load();
          this.player.play();
        }
      };
      player = new MusicPlayer();
    }
  });

  // src/vanilla/ui/consola-js/consola-js.js
  var require_consola_js = __commonJS({
    "src/vanilla/ui/consola-js/consola-js.js"(exports, module) {
      init_db();
      init_nyancat();
      init_config();
      init_agregarApps();
      init_music_playe();
      var template90 = (
        /*html*/
        `
<div class="terminal w3-black">    
    <div class="lineas">
    <div>
        <h1 class="">Consola js</h1>
        creado por <span class="w3-text-green">Sa\xFAl Salazar M\xE9ndez</span>
    </div>
    </div>
    <div>
        <div class="usuario w3-text-blue">></div>
        <input type="text" class="w3-black" style="font-family: monospace;">        
    </div>
</div>
`
      );
      var estilo = (
        /*css*/
        `
.usuario{
    float: left;
}
input{
    float: left;
    outline: none;
    border: none;
    width: 90%;    
}
.terminal{
    max-height: 100vh;
    height: 100vh;
    width: 100%;
    overflow: auto;
}
.resultado{
    padding-left: 50px;
    color: grey;
}
`
      );
      var ConsolaJs = class extends HTMLElement {
        constructor() {
          super();
          this.render();
        }
        render() {
          let shadownRoot = this.attachShadow({ mode: "open" });
          shadownRoot.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <style>${estilo}</style>
            ${template90}
        `;
          this.addListeners();
          this.v = {
            player: getMusicPlayer()
          };
        }
        addListeners() {
          const input = this.shadowRoot.querySelector("input");
          input.addEventListener("change", (ev) => {
            this.procesaComado(input.value);
          });
          const caso = this.shadowRoot.querySelector(".terminal");
          caso.addEventListener("click", () => {
            input.focus();
          });
        }
        procesaComado(cmd, arreglado = false) {
          if (this.procesaClear(cmd)) {
            return;
          }
          if (this.procesaNyancat(cmd)) {
            return;
          }
          if (this.procesaOpenApp(cmd)) {
            return;
          }
          this.agregarVariable(cmd);
          let resultado = "";
          try {
            resultado = eval(cmd);
          } catch (error) {
            this.procesaError(cmd, arreglado);
            this.clearInput();
            return;
          }
          if (!arreglado) {
            this.createRespuesta(cmd, resultado);
          } else {
            return resultado;
          }
          this.clearInput();
        }
        procesaOpenApp(cmd2) {
          let comandos = cmd2.trim().split(" ");
          console.log(comandos);
          if (comandos[0].indexOf("openApp") >= 0) {
            if (!comandos[1]) {
              this.createRespuesta(cmd2, "Necesita dar el nombre del componente que desea abrir.", false);
              this.clearInput();
              return true;
            }
            let app3 = addWindowConParametros(comandos[1], "openApp " + comandos[1], { resize: null, maximizar: true });
            this.createRespuesta(cmd2, "");
            this.clearInput();
            return true;
          }
          return false;
        }
        procesaClear(cmd2) {
          if (cmd2.indexOf("clear") >= 0) {
            this.clear();
            this.clearInput();
            return true;
          }
          return false;
        }
        procesaNyancat(cmd2) {
          if (cmd2.indexOf("nyancat") >= 0) {
            llamaNyancat();
            this.createRespuesta(cmd2, "");
            this.clearInput();
            return true;
          }
          return false;
        }
        procesaError(cmd2, arreglado2) {
          let newCmd = this.replaceVaraibles(cmd2);
          if (arreglado2) {
            this.createRespuesta(cmd2, "No existe alguna variable o escribio mal", false);
            throw "Error: no existe variable";
          }
          try {
            let r = this.procesaComado(newCmd, true);
            this.createRespuesta(cmd2, r);
          } catch (error) {
          }
        }
        createRespuesta(cmd2, resultado2, ok = true) {
          let result = typeof resultado2 == "object" ? JSON.stringify(resultado2, null, "	") : resultado2;
          let div2 = document.createElement("div");
          let estado = '<span class="w3-text-green">\u2713</span>';
          if (!ok) {
            estado = '<span class="w3-text-red">\u2717</span>';
          }
          div2.innerHTML = `
            <div class="comando">${estado} ${cmd2}</div>
            <div class="resultado">${result}</div>
        `;
          let lineas = this.shadowRoot.querySelector(".lineas");
          lineas.appendChild(div2);
        }
        clearInput() {
          let input = this.shadowRoot.querySelector("input");
          input.value = "";
        }
        clear() {
          let lineas = this.shadowRoot.querySelector(".lineas");
          lineas.innerHTML = "";
          this.clearInput();
        }
        getArregloOperadores(cmd2) {
          let arr = [];
          let op2 = "";
          const letra = /[\w'" ]+/;
          for (let l of cmd2) {
            if (letra.test(l)) {
              op2 += l;
            } else {
              if (op2 != "") {
                arr.push(op2);
                op2 = "";
              }
              arr.push(l);
            }
          }
          if (op2 != "") {
            arr.push(op2);
            op2 = "";
          }
          return arr;
        }
        replaceVaraibles(cmd2) {
          let arr = this.getArregloOperadores(cmd2);
          let keys = Object.keys(this.v);
          for (let i = 0; i < arr.length; i++) {
            let item = arr[i].trim();
            let esta = keys.find((key) => {
              return key == item;
            });
            if (esta != void 0) {
              arr[i] = "this.v['" + item + "']";
            }
          }
          return arr.join("");
        }
        agregarVariable(cmd2) {
          let lineas = cmd2.split(";");
          for (let linea of lineas) {
            if (linea.indexOf("let") >= 0) {
              this.procesaVariables(linea);
            }
          }
        }
        procesaVariables(cmd) {
          let declaracion = cmd.split("=");
          declaracion[0] = declaracion[0].replace("let", "").trim();
          declaracion[0] = declaracion[0].replace("let", "");
          eval("this.v[declaracion[0]] = " + declaracion[1]);
        }
        replaceVariables(cmd2) {
        }
      };
      customElements.define("x-consola-js", ConsolaJs);
    }
  });

  // src/vanilla/w3-estudio/componentes-registrados/x-componentes-guardados.js
  var require_x_componentes_guardados = __commonJS({
    "src/vanilla/w3-estudio/componentes-registrados/x-componentes-guardados.js"(exports, module) {
      init_lista_componentes_activos();
      init_db();
      init_modal();
      init_notificaciones();
      var style87 = (
        /*css*/
        `
* {
    background: ;
}
.espacio{
    min-height: 10px;
}

`
      );
      var template90 = (
        /*html*/
        `
<div class="w3-row titulo-h2">

    <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
    <div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">  
    <h2 propiedades="" ><b>Componentes guardados</b>&nbsp;<i class="fa fa-gear w3-spin"></i></h2>    
</div>
</div><div class="w3-row w3-margin-top">


<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">  

<div class="w3-responsive">



<table class="w3-table-all">    
    <tbody><tr id="columnas" propiedades="">
        <th propiedades="" >Componentes</th>
    <th id="1608148854240" class="w3-right"><span propiedades=""  class="w">Acciones</span> 
        </th></tr>    
</tbody></table>
</div>

</div>

</div>
`
      );
      var XComponentesGuardados = class extends HTMLElement {
        constructor() {
          super();
          this.mensaje = "Hola mundo";
          this.render();
          this.db = getDB();
        }
        render() {
          let shadowRoot2 = this.attachShadow({
            mode: "open"
          });
          let customTemplate = this.replazaValoresMustache(template90);
          shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="http://localhost/saul/lib/w3css/w3.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <style>${style87}</style>
            <div>${customTemplate}</div>
        `;
          this.$el = shadowRoot2.querySelector("div");
        }
        /*Cuando se monta en la pagina*/
        connectedCallback() {
          this.loadComponentes();
        }
        /*Cuando se desmonta en la pagina, no necesariamente se destruye*/
        disconnectedCallback() {
        }
        replazaValoresMustache(template91) {
          let props = ["titulo"];
          let salida = template91 + "";
          for (let p of props) {
            const exp = new RegExp(`{{${p}}}`, "g");
            const attr = this.getAttribute(p);
            salida = salida.replace(exp, attr);
          }
          let variables = ["mensaje"];
          for (let p of variables) {
            const exp = new RegExp(`{{${p}}}`, "g");
            const attr = this[p];
            salida = salida.replace(exp, attr);
          }
          return salida;
        }
        loadComponentes() {
          this.db.list("componentes").then((data2) => {
            this.creaLista(data2);
          });
        }
        addClassActivo(tag2) {
          if (estaComponenteUsuarioActivo(tag2)) {
            return " w3-text-green";
          }
          return "";
        }
        /**
         * 
         * @param {[]} lista 
         */
        creaLista(lista4) {
          let tbody = this.shadowRoot.querySelector("tbody");
          for (let item of lista4) {
            let tr = document.createElement("tr");
            tr.innerHTML = `
            <td propiedades="" >${item.tag}</td>
            <td  propiedades="" class="w3-right">
                <i class="fa fa-gear${this.addClassActivo(item.tag)}" id="activar" title="activar"></i>
                <i class="fa fa-trash w3-text-red" id="eliminar" title="eliminar"></i>
            </td>
            `;
            this.addListenerTr(tr, item.tag);
            tbody.append(tr);
          }
        }
        /**
         * 
         * @param {HTMLElement} tr 
         */
        addListenerTr(tr, tag2) {
          let activar = tr.querySelector("#activar");
          let eliminar = tr.querySelector("#eliminar");
          eliminar.addEventListener("click", (ev) => {
            this.eliminaFila(tag2, tr);
          });
          activar.addEventListener("click", (ev) => {
            this.activaComponente(tag2, activar);
          });
        }
        /**
         * 
         * @param {string} tag 
         * @param {HTMLElement} tr 
         */
        eliminaFila(tag2, tr) {
          let dlg2 = new Modal();
          dlg2.innerHtml = `Desea eleminar este componente?`;
          dlg2.open().then((data2) => {
            this.db.delete("componentes", tag2).then((data3) => {
              tr.remove();
              addNotificacion(
                NOTIFICACION.WARNING,
                "Aviso",
                `El componente <b>${tag2}</b> sigue funcionando, hasta que se reinicie el explorador`
              );
            });
          });
        }
        /**
         * 
         * @param {string} tag 
         * @param {HTMLElement} icono 
         */
        activaComponente(tag, icono) {
          icono.classList.add("w3-text-green");
          addNotificacion(
            NOTIFICACION.SUCCESS,
            "Aviso",
            `El componente <b>${tag}</b> se activo correctamente.<br>
                Lo puede usar como un custom componente agregando el codigo<br> &lt;${tag}&gt;&lt;/${tag}&gt;`
          );
          this.db.get("componentes", tag).then((data) => {
            if (!estaComponenteUsuarioActivo(tag)) {
              eval(data.codigo);
            }
            registraComponenteUsuario(tag);
          });
        }
      };
      customElements.define("x-componentes-guardados", XComponentesGuardados);
    }
  });

  // src/libs.js
  init_environments();
  var lista = [];
  var listaTernLibs = [];
  var codemirrorLib = "";
  if (environments.modo == "produccion") {
    codemirrorLib = "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/codemirror.min.js";
    lista = [
      //jszip
      "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.5.0/jszip.min.js",
      //codemirror        
      "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/addon/edit/matchbrackets.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/addon/comment/continuecomment.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/addon/comment/comment.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/addon/hint/show-hint.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/mode/javascript/javascript.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/mode/css/css.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/mode/xml/xml.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/addon/dialog/dialog.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.57.0/addon/tern/tern.min.js",
      //beautify
      "https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.13.0/beautify.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.13.0/beautify-html.min.js"
    ];
    listaTernLibs = [
      "https://cdnjs.cloudflare.com/ajax/libs/tern/0.24.3/signal.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/tern/0.24.3/tern.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/tern/0.24.3/def.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/tern/0.24.3/comment.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/tern/0.24.3/infer.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/tern/0.24.3/plugin/doc_comment.min.js"
    ];
  } else {
    codemirrorLib = "http://localhost/saul/lib/codemirror/lib/codemirror.js";
    lista = [
      //jszip
      "http://localhost/saul/lib/jszip.min.js",
      //extras codemirror        
      "http://localhost/saul/lib/codemirror/addon/edit/matchbrackets.js",
      "http://localhost/saul/lib/codemirror/addon/comment/continuecomment.js",
      "http://localhost/saul/lib/codemirror/addon/comment/comment.js",
      "http://localhost/saul/lib/codemirror/addon/hint/show-hint.js",
      "http://localhost/saul/lib/codemirror/mode/javascript/javascript.js",
      "http://localhost/saul/lib/codemirror/mode/css/css.js",
      "http://localhost/saul/lib/codemirror/mode/xml/xml.js",
      "http://localhost/saul/lib/codemirror/addon/dialog/dialog.js",
      "http://localhost/saul/lib/codemirror/addon/tern/tern.js",
      //beautify
      "http://localhost/saul/lib/beautify/beautify.min.js",
      "http://localhost/saul/lib/beautify/beautify-html.min.js"
    ];
    listaTernLibs = [
      "http://localhost/saul/lib/tern/signal.min.js",
      "http://localhost/saul/lib/tern/tern.min.js",
      "http://localhost/saul/lib/tern/def.min.js",
      "http://localhost/saul/lib/tern/comment.min.js",
      "http://localhost/saul/lib/tern/infer.min.js",
      "http://localhost/saul/lib/tern/doc_comment.min.js"
    ];
  }
  function loadScript(lib) {
    let item = document.createElement("script");
    item.src = lib;
    document.body.append(item);
    let promesa = new Promise((resolve2, reject2) => {
      item.onload = (ev) => {
        resolve2({
          load: true,
          lib
        });
      };
    });
    return promesa;
  }
  async function loadTerm() {
    for (let lib of listaTernLibs) {
      await loadScript(lib);
    }
  }
  async function loadBaseTerm() {
    let path = window.location.href.replace("#", "").replace("index.local.html", "").replace("index.html", "");
    await loadScript(path + "extra_libs/tern/acorn.js");
    await loadScript(path + "extra_libs/tern/acorn-loose.js");
    await loadScript(path + "extra_libs/tern/walk.js");
    await loadScript(path + "extra_libs/tern/polyfill.js");
    loadTerm();
  }
  function loadCodemirror() {
    loadScript(codemirrorLib).then((c) => {
      let promesas = [];
      for (let lib of lista) {
        promesas.push(loadScript(lib));
      }
      Promise.all(promesas).then((l) => {
        loadBaseTerm();
      });
    });
  }
  loadCodemirror();

  // src/appVue/info/win.info.js
  var template = (
    /*html*/
    `
<div>
    <x-bar-menu color="w3-blue-grey" 
        titulo="Sobre.." icono="info-circle"></x-bar-menu>
    <h3>Desk interface</h3>    
    <strong>Version</strong>: 1<br>
    <strong>Librerias</strong>: 
        <a href="https://www.w3schools.com/w3css/">W3.css</a> 
        <a href="https://animate.style/">Animate css</a>
        <a href="https://vuejs.org/">Vue</a><br>    
    <strong>Autor</strong>: <a href="http://saulsm.epizy.com/">Sa\xFAl Salazar M\xE9ndez</a><br>
    <p>Iterface web que simula un escriotrio virtual, el proposito de esta interface es dar una opci\xF3n 
    m\xE1s al usuario para su aplicaci\xF3n web.</p>
    <p>Esta interface usa las librer\xEDas w3css, animate, codemirror y vue. Se implemento el escriotrio, ventanas y su iteracion con web componentes</p>
</div>
`
  );
  var WinInfo = class extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `            
            <div></div>
        `;
      const div2 = shadowRoot2.querySelector("div");
      let app3 = new Vue({
        el: div2,
        template
      });
    }
  };
  customElements.define("win-info", WinInfo);

  // src/vanilla/utils/modal/bloquear.js
  init_modal();
  init_zindexModal();
  var Bloquear = class extends Modal {
    constructor() {
      super();
      this._aceptar = "Entrar";
      this._el = null;
    }
    open(hasError, mensaje) {
      let div2 = document.createElement("div");
      let body = document.querySelector("body");
      this._el = div2;
      const desk3 = document.querySelector(".escritorio");
      div2.style.backgroundImage = desk3.style.backgroundImage;
      div2.style.backgroundRepeat = desk3.style.backgroundRepeat;
      if (!div2.style.backgroundImage || div2.style.backgroundImage.indexOf("url") == -1) {
        div2.style.background = desk3.style.background ? desk3.style.background : "teal";
      }
      div2.style.zIndex = getZindez();
      div2.style.position = "fixed";
      div2.style.top = 0;
      div2.style.left = 0;
      div2.style.bottom = 0;
      div2.style.width = "100%";
      div2.style.height = "100hv";
      if (hasError) {
        mensaje = `<span class="w3-text-orange">${mensaje}</span>`;
      }
      div2.innerHTML = this.createWin(mensaje);
      let ventana = this._el.querySelector("#ventana");
      if (hasError) {
        ventana.classList.value = "w3-card-4 w3-white animate__animated animate__wobble";
      } else {
        ventana.classList.value = "w3-card-4 w3-white animate__animated animate__flipInY";
      }
      body.appendChild(div2);
      const cerrar = div2.querySelector("#close");
      const cancelar = div2.querySelector("#cancelar");
      const aceptar = div2.querySelector("#aceptar");
      return this.terminar(cerrar, cancelar, aceptar);
    }
    terminar(cerrar, cancelar, aceptar) {
      return new Promise((resolve2, reject2) => {
        if (aceptar) {
          aceptar.addEventListener("click", (e) => {
            const data2 = this.dataAceptar();
            let ventana = this._el.querySelector("#ventana");
            ventana.classList.value = "w3-card-4 w3-white animate__animated animate__flipOutY";
            setTimeout(() => {
              this._el.remove();
              resolve2({ val: true, op: "aceptar", data: data2 });
            }, 1e3);
          });
        }
      });
    }
    dataAceptar() {
      let input = this._el.querySelector("input");
      let data2 = {
        password: input.value
      };
      return data2;
    }
    createWin(mensaje) {
      return (
        /*html*/
        `
        <div class="w3-card-4 w3-white" id="ventana" 
        style="
            width: 30%;
            margin-left: 35%;
            margin-right: 35%;
            margin-top: 15%;
        ">
        <div class="w3-container w3-center">
            <p>
            <img src="./img/img_avatar3.png" alt="Avatar" class="w3-circle" style="width: 100px;">
            </p>
            <br>
            <p>Usuario</p>
            <p>
            <input style="width: 100px;" value="" type="password">
            </p>
            <p>${mensaje}</p>
        </div>
        <div class="w3-container w3-center">            
            <button class="w3-button w3-border w3-hover-blue w3-margin" id="aceptar">${this._aceptar}</button>
            </div>
        </div>
        `
      );
    }
  };

  // src/appVue/menu-escritorio/menu-escritorio.js
  init_agregarApps();

  // src/appVue/menu-escritorio/menu-compacto.js
  var template2 = (
    /*html*/
    `
<div>
    <input class="w3-input" type="text" style="width:100%" placeholder="Buscar" @input="onbuscar($event)" v-model="buscar">
    <div class="w3-row">
    <div class="w3-col m6">         
        <button v-for="(item,key) in apps" :key="key"
        class="w3-button w3-block w3-left-align" @click ="setActivo(item)">
        <img style="width: 20px;" :src="item.icono">
        {{item.nombre}}
        </button>        
        <!--<button class="w3-button">
        <img style="width: 20px;" src="https://openclipart.org/download/183014/1378371919.svg">
        Proyecto
    </button>-->
    </div>
    <div class="w3-col m6">
        <div class="w3-button w3-block w3-left-align" v-for="(item,index) in menu" @click="abrir(item)" :key='index'>          
        {{item.nombre}}
        </div>
    </div>
    </div>

    <button class="w3-button salir " @click="bloquear()">
    <img style="width: 20px;" src="https://openclipart.org/download/197891/mono-logout.svg">
    Bloquear
    </button>
    <button class="w3-button expandir " @click="expandir()">
    <i class="fa fa-arrows-alt"></i>
    </button>
</div>
`
  );
  var menu_compacto_default = {
    props: ["apps"],
    template: template2,
    data: () => {
      return {
        menu: [],
        buscar: ""
      };
    },
    mounted() {
    },
    methods: {
      setActivo(item) {
        this.menu = item.apps;
        this.buscar = "";
      },
      abrir(item) {
        this.$emit("abrir", item);
      },
      bloquear() {
        this.$emit("bloquear", true);
      },
      expandir() {
        this.$emit("expandir", true);
      },
      onbuscar(val) {
        let cad = val.target.value;
        if (cad == "") {
          this.menu = [];
          return;
        }
        cad = cad.toLowerCase();
        this.menu = [];
        for (let item of this.apps) {
          for (let app3 of item.apps) {
            if (app3.nombre.toLowerCase().indexOf(cad) >= 0) {
              this.menu.push(app3);
            }
          }
        }
      }
    }
  };

  // src/appVue/menu-escritorio/menu-expandido.js
  var template3 = (
    /*html*/
    `
<div>
    <div id="contenido" class="w3-container">        

    </div>
    <button class="w3-button salir " @click="bloquear()">
    <img style="width: 20px;" src="https://openclipart.org/download/197891/mono-logout.svg">
    Bloquear
    </button>
    <button class="w3-button expandir " @click="expandir()">
    <i class="fa fa-arrows-alt"></i>
    </button>
</div>
`
  );
  var menu_expandido_default = {
    props: ["apps"],
    template: template3,
    data: () => {
      return {
        menu: null,
        buscar: ""
      };
    },
    mounted() {
      this.menu = this.$el.querySelector("#contenido");
      this.creaMenus();
    },
    methods: {
      creaMenus() {
        for (let item of this.apps) {
          let div2 = document.createElement("div");
          div2.classList.value = "w3-container";
          let menu = document.createElement("x-menu-android");
          div2.innerHTML = `
                <h5 propiedades="" class="margen-izq">
                    <img style="width: 20px;" src="${item.icono}"> ${item.nombre}
                </h5>
                `;
          div2.append(menu);
          this.menu.append(div2);
          menu.setMenu(item.apps);
          menu.addEventListener("select", (ev) => this.abrir(ev));
        }
      },
      abrir(ev) {
        this.$emit("abrir", ev.detail.menu);
      },
      bloquear() {
        this.$emit("bloquear", true);
      },
      expandir() {
        this.$emit("expandir", true);
      }
    }
  };

  // src/appVue/menu-escritorio/menu-escritorio.js
  var template4 = (
    /*html*/
    `
<div class="w3-dropdown-hover w3-left">    
    <button class="w3-button w3-black">Apps</button>
    <div :class="getClase(compacto)" style="z-index: 9999;">
       <menu-compacto 
            :apps="apps" 
            @bloquear="bloquear()" 
            @abrir="abrir($event)" 
            v-if="compacto"
            @expandir=" compacto = false;"></menu-compacto>
        <menu-expandido 
            :apps="apps" 
            @bloquear="bloquear()" 
            @abrir="abrir($event)" 
            v-if="!compacto"
            @expandir=" compacto = true;"></menu-expandido>
    </div>    
</div> 
`
  );
  var apps = [
    {
      icono: "https://openclipart.org/download/280995/RoughPipeWrench.svg",
      nombre: "Utilidades",
      apps: [
        {
          componente: "x-ayuda-escritorio",
          nombre: "Ayuda escritorio",
          icono: "hand-peace-o",
          maximizar: true
        },
        {
          componente: "x-calculadora",
          nombre: "Calculadora",
          icono: "calculator",
          resize: 0
        },
        {
          componente: "x-consola-javascript",
          nombre: "Consola",
          icono: "terminal",
          maximizar: true
        },
        {
          componente: "win-info",
          nombre: "Sobre..",
          icono: "info-circle"
        }
      ]
    },
    {
      icono: "https://openclipart.org/download/169903/1336392323.svg",
      nombre: "Configuraciones",
      apps: [{
        componente: "config-desk",
        nombre: "Escritorio",
        maximizar: true,
        icono: "gear"
      }]
    },
    {
      icono: "./img/editor-flujos/form.png",
      nombre: "Desarrollo",
      apps: [
        // {
        //     componente: 'x-paginador-proyectos',
        //     nombre: 'Proyectos',
        //     icono: 'css3',
        //     maximizar: true
        // }
        {
          componente: "x-info-ide",
          nombre: "W3Studio - ide",
          icono: "css3",
          maximizar: true
        },
        {
          componente: "x-paginador-ide",
          nombre: "Ide",
          icono: "css3",
          maximizar: true
        }
      ]
    }
  ];
  var desk = document.querySelector(".escritorio");
  var app2 = new Vue({
    el: "#menu-inicio",
    template: template4,
    data: () => {
      return {
        apps: [],
        buscar: "",
        compacto: true
      };
    },
    components: {
      "menu-compacto": menu_compacto_default,
      "menu-expandido": menu_expandido_default
    },
    mounted() {
      this.apps = apps;
    },
    methods: {
      getClase(compacto) {
        if (compacto) {
          return "w3-dropdown-content w3-card-4 menu-inicio-compacto";
        }
        return "w3-dropdown-content w3-card-4 menu-inicio-expandido";
      },
      abrir(item) {
        addWindow(item.componente, item.nombre, item.resize, item.maximizar);
      },
      onbuscar(val) {
        let cad = val.target.value;
        if (cad == "") {
          return;
        }
        let keys = Object.keys(apps);
        this.apps = [];
        for (let key of keys) {
          for (let app3 of apps[key]) {
            if (app3.nombre.indexOf(cad) >= 0) {
              this.apps.push(app3);
            }
          }
        }
      },
      bloquear() {
        this.bloquea(false, "admin");
      },
      bloquea(hasError, mensaje) {
        let m = new Bloquear();
        m.open(hasError, mensaje).then((r) => {
          if (r.data.password != "admin") {
            this.bloquea(true, "Es admin");
          }
        });
      }
    }
  });

  // src/appVue/appvue.js
  var import_calculadora = __toESM(require_calculadora());

  // src/appVue/ide/propiedades/propiedades-input.js
  var template5 = (
    /*html*/
    `
    <div id="propiedades-inputs" style="display:none;">
        <div class="w3-padding propiedad-titulo">
            Propiedades input            
        </div>
        <div class="w3-tiny espacio propiedad-content">
            <div class="w3-row propiedad-fila">
                <div class="w3-col s4 propiedad-editar">name</div>
                <div class="w3-col s8 propiedad-editar" spellcheck="false" contenteditable="true" name-item></div>                  
            </div>            
            <div class="w3-row propiedad-fila">
                <div class="w3-col s4 propiedad-editar">pattern</div>
                <div class="w3-col s8 propiedad-editar" spellcheck="false" contenteditable="true" pattern-item></div>                  
            </div>
            <div class="w3-row propiedad-fila">
                <div class="w3-col s4 propiedad-editar">requerido</div>
                <div class="w3-col s8 propiedad-editar" spellcheck="false" contenteditable="true" required-item></div>                  
            </div>
            <div class="w3-row propiedad-fila">
                <div class="w3-col s4 propiedad-editar">placeholder</div>
                <div class="w3-col s8 propiedad-editar" spellcheck="false" contenteditable="true" placeholder-item></div>                  
            </div>
        </div>  
    </div>  
`
  );
  var PropiedadesInput = class extends HTMLElement {
    constructor() {
      super();
      this.item = null;
      this.render();
    }
    render() {
      this.innerHTML = template5;
      this.propiedadesInput = this.querySelector("#propiedades-inputs");
      this.addListenersInputChange();
    }
    setItem(item) {
      this.item = item;
      this.propiedadesInput.style.display = "none";
      if (item && item.hasAttribute("input-formulario")) {
        this.setPropiedadesInput(item);
      }
    }
    addListenersInputChange() {
      let name = this.propiedadesInput.querySelector("[name-item]");
      let pattern = this.propiedadesInput.querySelector("[pattern-item]");
      let required = this.propiedadesInput.querySelector("[required-item]");
      let placeholder = this.propiedadesInput.querySelector("[placeholder-item]");
      name.addEventListener("input", (e) => {
        this.setAtributoInput(name, "name");
      });
      pattern.addEventListener("input", (e) => {
        this.setAtributoInput(pattern, "pattern");
      });
      required.addEventListener("input", (e) => {
        this.setAtributoInput(required, "required");
      });
      placeholder.addEventListener("input", (e) => {
        this.setAtributoInput(placeholder, "placeholder");
      });
    }
    setPropiedadesInput(item) {
      this.propiedadesInput.style.display = "";
      let name = this.propiedadesInput.querySelector("[name-item]");
      let pattern = this.propiedadesInput.querySelector("[pattern-item]");
      let required = this.propiedadesInput.querySelector("[required-item]");
      let placeholder = this.propiedadesInput.querySelector("[placeholder-item]");
      this.setPropiedadInput(name, item, "name");
      this.setPropiedadInput(pattern, item, "pattern");
      this.setPropiedadInput(required, item, "required");
      this.setPropiedadInput(placeholder, item, "placeholder");
    }
    setPropiedadInput(div2, item, propiedad) {
      if (item.hasAttribute(propiedad)) {
        div2.innerHTML = item.getAttribute(propiedad);
      } else {
        div2.innerHTML = "";
      }
    }
    setAtributoInput(div2, propiedad) {
      let valor = div2.innerText.replace(/<br>/g, "").trim();
      if (valor) {
        this.item.setAttribute(propiedad, valor);
      } else {
        this.item.removeAttribute(propiedad);
      }
    }
  };
  customElements.define("x-propiedades-input", PropiedadesInput);

  // src/appVue/ide/propiedades/propiedades-link.js
  var template6 = (
    /*html*/
    `
    <div id="propiedades-links" style="display:none;">
        <div class="w3-padding propiedad-titulo">
            Propiedades link            
        </div>
        <div class="w3-tiny espacio propiedad-content">        
            <div class="w3-row propiedad-fila">
                <div class="w3-col s4 propiedad-editar">link</div>
                <div class="w3-col s8 propiedad-editar" spellcheck="false" contenteditable="true" link-item></div>                  
            </div>            
        </div>  
    </div>  
`
  );
  var PropiedadesLink = class extends HTMLElement {
    constructor() {
      super();
      this.item = null;
      this.render();
    }
    render() {
      this.innerHTML = template6;
      this.propiedadesLinks = this.querySelector("#propiedades-links");
      this.addListenersInputChange();
    }
    setItem(item) {
      this.item = item;
      this.propiedadesLinks.style.display = "none";
      if (item && item.hasAttribute("link")) {
        this.setPropiedadesLink(item);
      }
    }
    addListenersInputChange() {
      let link = this.propiedadesLinks.querySelector("[link-item]");
      link.addEventListener("input", (e) => {
        this.setAtributoLink(link, "link");
      });
    }
    setPropiedadesLink(item) {
      this.propiedadesLinks.style.display = "";
      let link = this.propiedadesLinks.querySelector("[link-item]");
      this.setPropiedadLink(link, item, "link");
    }
    setPropiedadLink(div2, item, propiedad) {
      if (item.hasAttribute(propiedad)) {
        div2.innerHTML = item.getAttribute(propiedad);
      } else {
        div2.innerHTML = "";
      }
    }
    setAtributoLink(div2, propiedad) {
      let valor = div2.innerText.replace(/<br>/g, "").trim();
      if (valor) {
        this.item.setAttribute(propiedad, valor);
      }
    }
  };
  customElements.define("x-propiedades-link", PropiedadesLink);

  // src/appVue/ide/propiedades/propiedades-directivas.js
  var template7 = (
    /*html*/
    `
    <div id="propiedades-directivas">
        <div class="w3-padding propiedad-titulo">
            Directivas          
        </div>
        <div class="w3-tiny espacio propiedad-content">        
            <div class="w3-row propiedad-fila">
                <div class="w3-col s4 propiedad-editar">if</div>
                <div class="w3-col s8 propiedad-editar" spellcheck="false" contenteditable="true" item-if></div>
                <div class="w3-col s4 propiedad-editar">for</div>
                <div class="w3-col s8 propiedad-editar" spellcheck="false" contenteditable="true" item-for></div>
            </div>            
        </div>  
    </div>  
`
  );
  var PropiedadesDirectivas = class extends HTMLElement {
    constructor() {
      super();
      this.item = null;
      this.render();
    }
    render() {
      this.innerHTML = template7;
      this.propiedadesDirectivas = this.querySelector("#propiedades-directivas");
      this.addListenersInputChange();
    }
    setItem(item) {
      this.item = item;
      this.setPropiedadesDirectivas(item);
    }
    addListenersInputChange() {
      let itemIf = this.propiedadesDirectivas.querySelector("[item-if]");
      let itemFor = this.propiedadesDirectivas.querySelector("[item-for]");
      itemIf.addEventListener("input", (e) => {
        this.setAtributoDirectiva(itemIf, "dir-if");
      });
      itemFor.addEventListener("input", (e) => {
        this.setAtributoDirectiva(itemFor, "dir-for");
      });
    }
    setPropiedadesDirectivas(item) {
      let itemIf = this.propiedadesDirectivas.querySelector("[item-if]");
      let itemFor = this.propiedadesDirectivas.querySelector("[item-for]");
      this.setPropiedadDirectiva(itemIf, item, "dir-if");
      this.setPropiedadDirectiva(itemFor, item, "dir-for");
    }
    setPropiedadDirectiva(div2, item, propiedad) {
      if (item.hasAttribute(propiedad)) {
        div2.innerHTML = item.getAttribute(propiedad);
      } else {
        div2.innerHTML = "";
      }
    }
    setAtributoDirectiva(div2, propiedad) {
      let valor = div2.innerText.replace(/<br>/g, "").trim();
      if (valor) {
        this.item.setAttribute(propiedad, valor);
      }
    }
  };
  customElements.define("x-propiedades-directivas", PropiedadesDirectivas);

  // src/appVue/ide/propiedades/propiedades-ediccion.js
  var template8 = (
    /*html*/
    `
    <div id="propiedades-ediccion">
        <div class="w3-padding propiedad-titulo">
            Edici\xF3n          
        </div>
        <div class="espacio propiedad-content">
            <span class="w3-button fa fa-bold" comando="bold" title="Negrita"></span>
            <span class="w3-button fa fa-italic" comando="italic" title="Italica"></span>
            <span class="w3-button fa fa-underline" comando="underline" title="Subrayado"></span>            
            <span class="w3-button fa fa-align-center" comando="justifyCenter" title="Centrado"></span>
            <span class="w3-button fa fa-align-justify" comando="justifyFull" title="Justificado"></span>
            <span class="w3-button fa fa-align-left" comando="justifyLeft" title="Justificado izquierdo"></span>
            <span class="w3-button fa fa-align-right" comando="justifyRight" title="Justificado derecho"></span>
            <span class="w3-button fa fa-list-ol" comando="insertorderedlist" title="Lista numerada"></span>
            <span class="w3-button fa fa-list-ul" comando="insertunorderedlist" title="Lista no numerada"></span>
            <span class="w3-button fa fa-link" comando="link" title="Link"></span>
            <span class="w3-button fa fa-gear" comando="icono" title="icono"></span>
        </div>
        <div class="w3-padding propiedad-titulo">
            Letra
        </div>
        <div class="espacio propiedad-content">
            <div class="btn-color w3-red w3-border" color="#f44336"></div>
            <div class="btn-color w3-blue w3-border" color="#2196F3"></div>
            <div class="btn-color w3-green w3-border" color="#4CAF50"></div>
            <div class="btn-color w3-yellow w3-border" color="#ffeb3b"></div>
            <div class="btn-color w3-pink w3-border" color="#e91e63"></div>
            <div class="btn-color w3-indigo w3-border" color="#3f51b5"></div>
            <div class="btn-color w3-teal w3-border" color="#009688"></div>
            <div class="btn-color w3-deep-orange w3-border" color="#ff5722"></div>
            <div class="btn-color w3-black w3-border" color="black"></div>
            <div class="btn-color w3-white w3-border" color="white"></div>
            <div class="btn-color w3-purple w3-border" color="#9c27b0"></div>
            <div class="btn-color w3-blue-grey w3-border" color="#607d8b"></div>
            <div class="btn-color w3-dark-grey w3-border" color="#616161"></div>
            <div class="btn-color w3-brown w3-border" color="#795548"></div>
        </div>
    </div>  
`
  );
  var PropiedadesEdiccion = class extends HTMLElement {
    constructor() {
      super();
      this.item = null;
      this.render();
    }
    render() {
      this.innerHTML = template8;
      this.propiedadesEdiccion = this.querySelector("#propiedades-ediccion");
      this.addListeners();
    }
    setItem(item) {
      this.item = item;
    }
    addListeners() {
      let botones = this.querySelectorAll(".w3-button");
      for (let btn of botones) {
        this.ejecutarComandoBoton(btn);
      }
      this.cambiarColorLetra();
    }
    /**
     * 
     * @param {HTMLElement} btn 
     */
    ejecutarComandoBoton(btn) {
      btn.addEventListener("click", (ev) => {
        this.ejecutarCmd(btn.getAttribute("comando"));
      });
    }
    cambiarColorLetra() {
      let botones = this.querySelectorAll(".btn-color");
      for (let btn of botones) {
        this.ejecutarCambioDeColor(btn);
      }
    }
    /**
     * 
     * @param {HTMLElement} btn 
     */
    ejecutarCambioDeColor(btn) {
      btn.addEventListener("click", (ev) => {
        let color = btn.getAttribute("color");
        document.execCommand("styleWithCSS", false, true);
        document.execCommand("foreColor", false, color);
      });
    }
    ejecutarCmd(cmd2) {
      if (cmd2 == "link") {
        this.ejecutaCmdLink();
        return;
      }
      if (cmd2 == "icono") {
        this.ejecutaCmdIcono();
        return;
      }
      document.execCommand(cmd2);
    }
    ejecutaCmdIcono() {
      let sText = document.getSelection();
      document.execCommand("insertHTML", false, '<i class="fa fa-gear"></i>' + sText);
    }
    ejecutaCmdLink() {
      let sText = document.getSelection();
      let link = prompt("Link", "https://");
      document.execCommand("insertHTML", false, '<a href="' + link + '" target="_blank">' + sText + "</a>");
    }
  };
  customElements.define("x-propiedades-ediccion", PropiedadesEdiccion);

  // src/appVue/ide/propiedades/propiedades.js
  init_modal();
  var template9 = (
    /*html*/
    `
<div class="w3-card contenido" style="display: none;">
    <div class="w3-padding propiedad-nombre w3-center">
        Titulo    
    </div>
    <x-propiedades-ediccion></x-propiedades-ediccion>
    <div class="w3-padding propiedad-titulo">
        Clases    
    </div>
    <div id="clases" class="propiedad-content espacio w3-tiny propiedad-editar" 
        contenteditable="true" spellcheck="false">        
    </div>

    <div class="w3-padding propiedad-titulo">
        Id
    </div>
    <div id="id-item" class="propiedad-content w3-tiny" 
        contenteditable="true" spellcheck="false">        
    </div>
    
    <div class="w3-padding propiedad-titulo">
        Estilos
        <i class="fa fa-plus w3-right" agregar-estilo></i>
    </div>
    <div id="estilos" class="w3-tiny espacio propiedad-content">        
    </div>
    
    <div class="w3-padding propiedad-titulo">
        Eventos
        <i class="fa fa-plus w3-right" agregar-evento></i>
    </div>
    <div id="eventos" class="w3-tiny espacio propiedad-content">        
    </div>
    <x-propiedades-directivas></x-propiedades-directivas>
    <x-propiedades-input></x-propiedades-input>
    <x-propiedades-link></x-propiedades-link>
</div>
<div class="espacio"></div>
`
  );
  var contEvent = Date.now();
  var PropiedadesHtml = class extends HTMLElement {
    constructor() {
      super();
      this.item = null;
      this.nombreComponente = "";
      this.dlg = new Modal();
      this.render();
      this.editorJs = null;
      this.editorCss = null;
    }
    render() {
      this.innerHTML = template9;
      let clases = this.querySelector("#clases");
      this.addListenerAgregarEstilo();
      this.addListenerAgregarEvento();
      clases.addEventListener("input", (ev) => {
        this.saveClase();
      });
      let idItem = this.querySelector("#id-item");
      idItem.addEventListener("input", (ev) => {
        this.saveIdItem();
      });
      this.dlg.innerHtml = "Desea eliminar esta propiedad?";
      this.dlg.titulo = "Confirmaci\xF3n";
      this.propiedadesInput = this.querySelector("x-propiedades-input");
      this.propiedadesDirectivas = this.querySelector("x-propiedades-directivas");
      this.propiedadesLink = this.querySelector("x-propiedades-link");
    }
    addListenerCambiosCampo() {
      const estilos = this.querySelector("#estilos");
      const eventos = this.querySelector("#eventos");
      this.addListenerTodosLoscamposeditables(estilos);
      this.addListenerTodosLoscamposeditables(eventos, true);
    }
    addListenerTodosLoscamposeditables(div2, esEvento = false) {
      let lista4 = div2.querySelectorAll("[contenteditable]");
      for (let item of lista4) {
        if (esEvento) {
          if (!item.hasAttribute("es-evento")) {
            item.addEventListener("input", (ev) => {
              this.saveEventos();
            });
          }
        } else {
          item.addEventListener("input", (ev) => {
            this.saveEstilos();
          });
        }
      }
    }
    addListenerAgregarEstilo() {
      let btn = this.querySelector("[agregar-estilo]");
      let estilos = this.querySelector("#estilos");
      this.agregarFila(btn, estilos);
    }
    addListenerAgregarEvento() {
      let btn = this.querySelector("[agregar-evento]");
      let eventos = this.querySelector("#eventos");
      this.agregarFila(btn, eventos, true);
    }
    agregarFila(btn, contenedor, esEvento = false) {
      const tagEvento = esEvento ? 'es-evento="true"' : "";
      btn.addEventListener("click", () => {
        let tr = document.createElement("div");
        tr.classList.value = "w3-row propiedad-fila";
        tr.innerHTML += `
                    <div class="w3-col s5 propiedad-editar" spellcheck="false" contenteditable="true" ${tagEvento}>propiedad</div>
                    <div class="w3-col s6 propiedad-editar" spellcheck="false" contenteditable="true">valor</div>  
                    <div class="w3-col s1">
                        <i class="fa fa-trash" basurero></i>
                    </div>
                `;
        contenedor.appendChild(tr);
        let basurero = tr.querySelector("[basurero]");
        const tieneEvento = esEvento ? "-evento" : "";
        tr.setAttribute("propiedad" + tieneEvento, "");
        basurero.addEventListener("click", (e) => {
          this.eliminaPropiedad(e.target.parentNode.parentNode);
        });
        this.addListenerTodosLoscamposeditables(tr, esEvento);
      });
    }
    setEditores(editorJs, editorCss) {
      this.editorCss = editorCss;
      this.editorJs = editorJs;
    }
    setItem(nombreComponente, item) {
      const contenido = this.querySelector(".contenido");
      if (!item) {
        contenido.style.display = "none";
        return;
      }
      this.item = item;
      this.propiedadesInput.setItem(item);
      this.propiedadesLink.setItem(item);
      this.propiedadesDirectivas.setItem(item);
      this.nombreComponente = nombreComponente;
      this.addNombre();
      this.addClassPropiedad();
      this.addIdItem();
      this.addEstilosItem();
      this.addEventosItem();
      contenido.style.display = "";
      this.addListenerCambiosCampo();
    }
    addNombre() {
      let div2 = this.querySelector(".propiedad-nombre");
      div2.innerHTML = this.nombreComponente + "<br>" + this.item.tagName;
    }
    addClassPropiedad() {
      let clases = this.querySelector("#clases");
      clases.innerHTML = this.item.classList.value;
    }
    addIdItem() {
      let idItem = this.querySelector("#id-item");
      let id2 = this.item.id ? this.item.id : "";
      idItem.innerHTML = id2;
    }
    addListenerNewClass(div2) {
      div2.addEventListener("dblclick", (e) => {
        const nombre = `e${this.nombreComponente}${Date.now()}`;
        div2.innerHTML += ` ${nombre}`;
        this.editorCss.creaNuevoEstilo(nombre);
        this.save();
      });
    }
    addEventosItem() {
      let eventos = this.querySelector("#eventos");
      let lista4 = this.item.attributes;
      let filas = "";
      for (let attr of lista4) {
        if (attr.nodeName.indexOf("ev-") < 0) {
          continue;
        }
        filas += `
                <div class="w3-row propiedad-fila" propiedad-evento>  
                    <div class="w3-col s5 propiedad-editar" spellcheck="false" contenteditable="true" es-evento="true">${attr.nodeName.replace("ev-", "")}</div>
                    <div class="w3-col s6 propiedad-editar" spellcheck="false" contenteditable="true">${attr.value}</div>  
                    <div class="w3-col s1">
                        <i class="fa fa-trash" basurero></i>
                    </div>  
                </div>`;
      }
      eventos.innerHTML = filas;
      this.addListenerPropiedadBasureros(eventos);
    }
    addEstilosItem() {
      let estilos = this.querySelector("#estilos");
      estilos.innerHTML = "";
      let styles = this.item.style.cssText.split(";");
      let filas = "";
      for (let estilo of styles) {
        if (estilo) {
          let propiedad = estilo.split(":");
          filas += `
                <div class="w3-row propiedad-fila" propiedad>  
                    <div class="w3-col s5 propiedad-editar" spellcheck="false" contenteditable="true">${propiedad[0]}</div>
                    <div class="w3-col s6 propiedad-editar" spellcheck="false" contenteditable="true">${propiedad[1]}</div>  
                    <div class="w3-col s1">
                        <i class="fa fa-trash" basurero></i>
                    </div>  
                </div>`;
        }
      }
      estilos.innerHTML = filas;
      this.addListenerPropiedadBasureros(estilos);
    }
    addListenerNewMetodo(ev, div2) {
      div2.addEventListener("dblclick", (e) => {
        let nombreEvento = ev.innerText;
        const nombre = `${nombreEvento.replace(/-/g, "")}${Date.now()}`;
        div2.innerHTML += ` ${nombre}()`;
        this.editorJs.creaNuevoMetodoJs(nombre);
        this.save();
      });
    }
    addListenerPropiedadBasureros(data2) {
      let basurero = data2.querySelectorAll("[basurero]");
      for (let b of basurero) {
        b.addEventListener("click", (e) => {
          this.eliminaPropiedad(e.target.parentNode.parentNode);
        });
      }
    }
    eliminaPropiedad(div2) {
      this.dlg.open().then((r) => {
        const td = div2.querySelectorAll("div");
        let nombre = td[0].innerText;
        if (td[0].hasAttribute("es-evento") >= 0) {
          this.item.removeAttribute("ev-" + nombre);
        }
        div2.remove();
        this.save();
      });
    }
    save() {
      this.saveClase();
      this.saveIdItem();
      this.saveEstilos();
      this.saveEventos();
    }
    saveClase() {
      if (!this.item) {
        return;
      }
      const clases = this.querySelector("#clases");
      let reg = new RegExp(String.fromCharCode(160), "g");
      this.item.classList.value = clases.innerText.replace(/<br>/g, "").replace(reg, " ").trim();
    }
    saveIdItem() {
      if (!this.item) {
        return;
      }
      const idItem = this.querySelector("#id-item");
      const valor = idItem.innerText.replace(/<br>/g, "").trim();
      this.item.id = valor;
    }
    saveEstilos() {
      if (!this.item) {
        return;
      }
      const propiedades2 = this.querySelectorAll("[propiedad]");
      let estilos = "";
      for (const p of propiedades2) {
        const td = p.querySelectorAll("div");
        estilos += `${td[0].innerText}: ${td[1].innerText}; `;
      }
      this.item.style.cssText = estilos.trim();
    }
    saveEventos() {
      if (!this.item) {
        return;
      }
      this.eliminaEventos();
      let id2 = null;
      const propiedades2 = this.querySelectorAll("[propiedad-evento]");
      this.item.removeAttribute("tiene-eventos");
      for (const p of propiedades2) {
        const td = p.querySelectorAll("div");
        let valor = td[1].innerText.trim();
        if (valor == "") {
          this.item.removeAttribute("ev-" + td[0].innerText);
          continue;
        }
        this.item.setAttribute("ev-" + td[0].innerText, td[1].innerText);
        if (id2 == null) {
          id2 = contEvent++;
        }
        if (!this.item.id) {
          this.item.id = "ev" + id2;
        }
        this.item.setAttribute("tiene-eventos", "");
      }
    }
    eliminaEventos() {
      let lista4 = this.item.attributes;
      for (let prop of lista4) {
        if (prop.nodeName.indexOf("ev-") < 0) {
          continue;
        }
        this.item.removeAttribute(prop.nodeName);
      }
    }
  };
  customElements.define("x-propiedades", PropiedadesHtml);

  // src/appVue/ide/ide.js
  init_config();

  // src/appVue/ide/style.js
  var style = (
    /*css*/
    `
.espacio {
    min-height: 30px;
}
.propiedad-nombre{
    background: #182c3e;
    color: #99a9b8;
}
.propiedad-titulo{
    background: #182c3e;
    color: #99a9b8;
}
.propiedad-titulo:hover{    
    color: white;
}
.propiedad-content{    
    border-left: 6px solid #182c3e;
    border-right: 6px solid #182c3e;
    border-bottom: 6px solid #182c3e;
    overflow: auto;
    max-height: 100px;
}
.propiedad-border{    
    border: 1px solid #182c3e;    
}
.propiedad-editar{
    outline: none;    
}
.propiedad-editar:focus{
    border-bottom: solid 1px;
    background: white !important;
    color: tomato !important;
}
.propiedad-fila{
    border-bottom: solid 1px black;
}
.propiedad-fila:hover, .propiedad-fila:active{
    background: white !important;
}
.basura{
    color: grey;
}
.basura:hover{
    color: tomato;
}
.ide-grupo{
    background: #182c3e;
    color: #99a9b8;
    width: -webkit-fill-available;
}
.ide-grupo:hover {
    background-color: #163048 !important;
    color: white !important;
}
.ide-item{    
    transition: transform 0.1s;
    font-size: 0.8em;
    width: auto;
}
[contenedor]{    
    transition: transform 0.1s;    
    width: -webkit-fill-available;
}
[contenedor]:hover, .ide-item:hover {
    transform: scale(0.99);
}
.btn-color{
	float: left;
    width: 24px;
    height: 24px;
    margin: 2px;
}
`
  );

  // src/appVue/ide/template.js
  var template10 = (
    /*html*/
    `
<div class="w3-row" :style="estilo">
<div class="w3-col s12 m12 l12" style="padding-bottom: 8px;">
    <div class="w3-bar w3-light-grey">
        <div :class="getClaseBotonEspaciado('3 6')">
            <img src="./img/icon/col-3-6.svg" style="width: 20px;" @click="setEspaciado('3 6')">            
        </div>
        <div :class="getClaseBotonEspaciado('2 8')">
            <img src="./img/icon/col-2-8.svg" style="width: 20px;" @click="setEspaciado('2 8')">
        </div>    
        <div :class="getClaseBotonEspaciado('1 10')">
            <img src="./img/icon/col-1-10.svg" style="width: 20px;" @click="setEspaciado('1 10')">
        </div>    
        <div class="w3-bar-item w3-button w3-right" @click="swapPaneles()">
            <img src="./img/icon/rotate-paneles.svg" style="width: 20px;">
        </div>                 
        <div class="w3-bar-item w3-button w3-right">
            ?
        </div>   
    </div>
</div>
<div class="w3-col s2 m2 l2" id="componentes" :style="estiloColComponentes">
    <div v-for="(grupo, index) in apps" :key="index">
        <button 
            @click="show('grupo'+index)"
            class="w3-padding-16 w3-button w3-block w3-left-align ide-grupo">{{grupo.nombre}} <i class="fa fa-caret-down"></i></button>
        <div :id="'grupo'+index" class="w3-card w3-hide">        
            <a v-for="(app, indexApp) in grupo.apps" :key="indexApp" 
                class="w3-button w3-block w3-left-align ide-item"                
                draggable="true"
                @dragstart="dragStar($event,app)"
                @dblclick="agregaAlFinal(app)"
                href="javascript:void(0)" :app="app.tag">
                <i :class="'fa ' + app.ico"></i>
                {{app.nombre}}
                </a>        
        </div> 
    </div>       
</div>
<div class="w3-col s8 m8 l8" 
    id="content-page"
    @drop="drop($event)"
    @dragover="allowDrop($event)"
    :style="estiloUi" >
  <div id="panel"
  @dragover="allowDropItem($event)"
  draggable="true"
  contenedor = "true"
  @dragstart="dragStarSwap($event)"
  class="w3-block w3-white w3-border w3-hover-border-blue" style="min-height: 100px;">
    <div class="w3-right basura" style="top: -4px; position: relative;"><i class="fa fa-trash" id="eliminar"></i></div>
    <div style="top: 0; position: relative; width: min-content;" class="w3-teal w3-hover-blue w3-tiny">panel</div>
    <p>Arrastra los componetes para empezar</p>
    <p class="w3-small">Nota: Este componente no se tomara encuenta</p>
  </div>  
  
</div>
<div class="w3-col s2 m2 l2" id="propiedades" :style="estiloColComponentes">
</div>
</div>
`
  );

  // src/vanilla/exports/export-html.js
  init_config();
  function getValorVariable(valor) {
    if (typeof valor == "string") {
      return `'${valor}'`;
    }
    if (typeof valor == "object") {
      return JSON.stringify(valor);
    }
    return valor;
  }
  function getVariables(customScript) {
    let variables = "//variables\n";
    const data2 = customScript.data;
    if (!data2) {
      return "";
    }
    for (let key in data2) {
      variables += `    let ${key} = ${getValorVariable(data2[key])};
`;
    }
    return variables;
  }
  function getFunciones(obj) {
    let fun = "//funciones\n";
    const data2 = obj.metodos;
    if (!data2) {
      return "";
    }
    for (let f in data2) {
      fun += `    function ${data2[f].toString().replace(/this./g, "")}
`;
    }
    return fun;
  }
  function getInit(obj) {
    if (obj.metodos["init"]) {
      return "init();";
    }
    return "";
  }
  function getHtml(componentes, customstyle, customScript, tipoCss) {
    let estilo = /* @__PURE__ */ new Set();
    let libcss = "";
    if (tipoCss == "w3css") {
      libcss = config.w3css;
    } else if (tipoCss == "bootstrap") {
      libcss = config.bootstrap.default;
    } else {
      libcss = config.bootstrap[tipoCss];
    }
    let text = `<html>
    <title>W3.CSS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${libcss}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    ${customstyle}
    .espacio{
        min-height: 10px;
    }`;
    for (let item of componentes) {
      if (!estilo.has(item.tagName)) {
        estilo.add(item.tagName);
        text += item.getStyle();
      }
    }
    text += "</style><body>";
    for (let item of componentes) {
      text += item.getHtml();
    }
    text += "<script>\n";
    text += getVariables(customScript);
    text += getFunciones(customScript);
    for (let item of componentes) {
      const strScript = item.getScrip();
      text += strScript;
    }
    text += getInit(customScript);
    text += `
<\/script>
</body>
</html>`;
    text = text.replace(/ev-/g, "on");
    return text;
  }

  // src/vanilla/utils/apps/listaComponentesIde.js
  var lista2 = [];
  function estaComponenteIdeActivo(tag2) {
    if (lista2.findIndex((item) => tag2 == item.tag) == -1) {
      return false;
    }
    return true;
  }
  function registraListaComponenteIde(componente) {
    if (!estaComponenteIdeActivo(componente.tag)) {
      lista2.push(componente);
    }
  }
  function eliminaListaComponenteIde(tag2) {
    let i = lista2.findIndex((item) => item.tag == tag2);
    if (i >= 0) {
      lista2.splice(i, 1);
    }
  }
  function getListaDeComponentesIde() {
    return lista2;
  }

  // src/vanilla/utils/json/util-json.js
  function clonarJson(json) {
    return JSON.parse(JSON.stringify(json));
  }
  function downloadFile(data2, filename, type) {
    var blob = new Blob([data2], { type });
    var elem = window.document.createElement("a");
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
  var opciones = {
    "indent_size": 4,
    "indent_char": " ",
    "indent_with_tabs": false,
    "editorconfig": false,
    "eol": "\n",
    "end_with_newline": false,
    "indent_level": 0,
    "preserve_newlines": true,
    "max_preserve_newlines": 10,
    "space_in_paren": false,
    "space_in_empty_paren": false,
    "jslint_happy": false,
    "space_after_anon_function": false,
    "space_after_named_function": false,
    "brace_style": "collapse",
    "unindent_chained_methods": false,
    "break_chained_methods": false,
    "keep_array_indentation": false,
    "unescape_strings": false,
    "wrap_line_length": 0,
    "e4x": false,
    "comma_first": false,
    "operator_position": "before-newline",
    "indent_empty_lines": false,
    "templating": ["auto"]
  };
  function formatoCodigoJs(data2) {
    return js_beautify(data2, opciones);
  }
  function formatoCodigoHtml(data2) {
    return html_beautify(data2, opciones);
  }
  function downloadSource(data2, filename, type) {
    let datab = js_beautify(data2, opciones);
    downloadFile(datab, filename, type);
  }
  function downloadHtml(data2, filename, type) {
    let datab = html_beautify(data2, opciones);
    downloadFile(datab, filename, type);
  }

  // src/appVue/ide/apps/apps-bootstrap.js
  var appsBS = [
    {
      nombre: "B\xE1sicos",
      apps: [
        {
          nombre: "Titulo",
          tag: "x-bs-titulo",
          ico: "fa-font"
        },
        {
          nombre: "Parrafo",
          tag: "x-bs-parrafo",
          ico: "fa-align-justify"
        },
        {
          nombre: "Cita",
          tag: "x-bs-cita",
          ico: "fa-commenting-o"
        },
        {
          nombre: "Boton",
          tag: "x-bs-boton",
          ico: "fa-cube"
        },
        {
          nombre: "Imagen",
          tag: "x-bs-imagen",
          ico: "fa-picture-o"
        }
      ]
    },
    {
      nombre: "Navegaci\xF3n",
      apps: [
        {
          nombre: "Navbar",
          tag: "x-bs-navbar",
          ico: "fa-bars"
        }
      ]
    },
    {
      nombre: "T\xEDtulo",
      apps: [
        {
          nombre: "Tiutlo Jumbo",
          tag: "x-bs-titulo-jumbo",
          ico: "fa-bars"
        }
      ]
    }
  ];

  // src/appVue/ide/apps/apps-w3css.js
  var appsHeadersW3css = [
    {
      nombre: "Titulos",
      apps: [
        {
          nombre: "Titulo imagen",
          tag: "x-titulo-imagen",
          ico: "fa-picture-o"
        },
        {
          nombre: "Titulo imagen menu",
          tag: "x-titulo-imagen-menu",
          ico: "fa-picture-o"
        }
      ]
    },
    {
      nombre: "Navegaci\xF3n",
      apps: [
        {
          nombre: "Bar",
          tag: "x-bar",
          ico: "fa-bars "
        },
        {
          nombre: "Bar dropdown",
          tag: "x-bar-dropdown",
          ico: "fa-bars "
        }
      ]
    }
  ];
  var appsFootersW3css = [
    {
      nombre: "Pie de p\xE1gina",
      apps: [
        {
          nombre: "Redes sociales",
          tag: "x-redes-sociales",
          ico: "fa-twitter"
        }
      ]
    }
  ];
  var appsVistasW3css = [
    {
      nombre: "T\xEDtulos H",
      apps: [{
        nombre: "T\xEDtulo H1",
        tag: "x-titulo-h1",
        ico: "fa-font"
      }, {
        nombre: "T\xEDtulo H2",
        tag: "x-titulo-h2",
        ico: "fa-font"
      }, {
        nombre: "T\xEDtulo H3",
        tag: "x-titulo-h3",
        ico: "fa-font"
      }, {
        nombre: "T\xEDtulo H4",
        tag: "x-titulo-h4",
        ico: "fa-font"
      }, {
        nombre: "T\xEDtulo H5",
        tag: "x-titulo-h5",
        ico: "fa-font"
      }, {
        nombre: "T\xEDtulo H6",
        tag: "x-titulo-h6",
        ico: "fa-font"
      }]
    },
    {
      nombre: "B\xE1sicos",
      apps: [{
        nombre: "Parrafo",
        tag: "x-parrafo",
        ico: "fa-align-justify"
      }, {
        nombre: "Nota",
        tag: "x-nota",
        ico: "fa-sticky-note-o "
      }, {
        nombre: "Boton",
        tag: "x-boton",
        ico: "fa-cube"
      }, {
        nombre: "Comentario",
        tag: "x-comentario",
        ico: "fa-commenting-o"
      }, {
        nombre: "Alerta",
        tag: "x-alerta",
        ico: "fa-warning"
      }, {
        nombre: "Progress Bar",
        tag: "x-progress-bar",
        ico: "fa-minus"
      }, {
        nombre: "Imagen",
        tag: "x-imagen",
        ico: "fa-picture-o"
      }, {
        nombre: "Video",
        tag: "x-video",
        ico: "fa-video-camera"
      }, {
        nombre: "youtube",
        tag: "x-youtube",
        ico: "fa-youtube-play"
      }, {
        nombre: "Linea",
        tag: "x-linea",
        ico: "fa-minus"
      }, {
        nombre: "Linea texto",
        tag: "x-linea-texto",
        ico: "fa-minus"
      }, {
        nombre: "C\xF3digo fuente",
        tag: "x-codigo-fuente",
        ico: "fa-code"
      }, {
        nombre: "Lista",
        tag: "x-lista",
        ico: "fa-list"
      }, {
        nombre: "Tabla",
        tag: "x-tabla",
        ico: "fa-table"
      }]
    },
    {
      nombre: "Cards",
      apps: [
        {
          nombre: "Card Avatar",
          tag: "x-card-avatar",
          ico: "fa-id-card-o"
        },
        {
          nombre: "Card imagen",
          tag: "x-card-imagen",
          ico: "fa-id-card-o"
        },
        {
          nombre: "Card Texto",
          tag: "x-card-texto",
          ico: "fa-id-card-o"
        },
        {
          nombre: "Card Youtube",
          tag: "x-card-youtube",
          ico: "fa-id-card-o"
        }
      ]
    },
    {
      nombre: "Jumbotron",
      apps: [
        {
          nombre: "Titulo jumbo",
          tag: "x-titulo-jumbo",
          ico: "fa-header"
        },
        {
          nombre: "Jumbotron titulo",
          tag: "x-jumbotron-titulo",
          ico: "fa-id-card-o"
        },
        {
          nombre: "Grid descripcion",
          tag: "x-grid-descripcion",
          ico: "fa-indent"
        }
      ]
    },
    {
      nombre: "Formulario",
      apps: [
        {
          nombre: "Formulario",
          tag: "x-formulario-simple",
          ico: "fa-wpforms"
        }
      ]
    },
    {
      nombre: "Menus",
      apps: [
        {
          nombre: "Men\xFA simple",
          tag: "x-menu",
          ico: "fa-list-ul"
        }
      ]
    },
    {
      nombre: "Dise\xF1o",
      apps: [
        {
          nombre: "Custom item",
          tag: "x-custom-item",
          ico: "fa-cog"
        },
        {
          nombre: "Div",
          tag: "x-div",
          ico: "fa-dropbox"
        },
        {
          nombre: "Paneles columnas",
          tag: "x-paneles-columnas",
          ico: "fa-columns"
        }
      ]
    },
    {
      nombre: "Texto prehecho",
      apps: [
        {
          nombre: "Articulo simple",
          tag: "x-articulo",
          ico: "fa-newspaper-o"
        }
      ]
    }
  ];
  var appsW3css = appsHeadersW3css.concat(appsVistasW3css).concat(appsFootersW3css);

  // src/appVue/ide/apps.js
  function uneAppsCustom(apps2) {
    let capps = clonarJson(apps2);
    let lista4 = getListaDeComponentesIde();
    for (let item of lista4) {
      let categoria = capps.find((cat) => cat.nombre == item.categoria);
      if (!categoria) {
        categoria = {
          nombre: item.categoria,
          apps: []
        };
        capps.push(categoria);
      }
      categoria.apps.push({
        nombre: item.titulo,
        tag: item.tag,
        ico: item.ico
      });
    }
    return capps;
  }
  function getApps(css) {
    if (css !== "w3css" && css !== "null") {
      return {
        apps: appsBS,
        appsHeaders: appsBS,
        appsVistas: appsBS,
        appsFooters: appsBS
      };
    }
    return {
      apps: uneAppsCustom(appsW3css),
      appsHeaders: appsHeadersW3css,
      appsVistas: appsVistasW3css,
      appsFooters: appsFootersW3css
    };
  }

  // src/appVue/ide/utils.js
  init_modal();

  // src/vanilla/utils/dom/util-dom.js
  function swapElementsDom(obj1, obj2) {
    var temp = document.createElement("div");
    obj1.parentNode.insertBefore(temp, obj1);
    obj2.parentNode.insertBefore(obj1, obj2);
    temp.parentNode.insertBefore(obj2, temp);
    temp.parentNode.removeChild(temp);
  }

  // src/appVue/ide/utils.js
  init_db();
  init_lista_componentes_activos();
  var contDiv = 1;
  function getBackgroundColor(tipo2) {
    if (tipo2 == "superhero") {
      return "#2B3E50 !important";
    }
    return "";
  }
  function createContenido(nombre, tag2, propiedades2, shadowRoot2, tipo2 = "w3css", espaciado = "2 8", alfa = 1) {
    let div2 = document.createElement("div");
    div2.classList.add("w3-block");
    div2.classList.add("w3-border");
    div2.classList.add("w3-hover-border-blue");
    const color = getBackgroundColor(tipo2);
    div2.style.cssText = `min-height: 100px; background: ${color}; overflow: auto;`;
    div2.style.backgroundColor = `rgba(255,255,255, ${alfa})`;
    div2.id = "div" + contDiv++;
    div2.setAttribute("draggable", "true");
    div2.setAttribute("contenedor", "true");
    div2.innerHTML = `
    <div class="basura w3-right" style="top: -4px; position: relative;"><i class="fa fa-trash" id="eliminar"></i></div>
    <div 
        style="top: 0; position: relative; width: fit-content;" class="w3-teal w3-hover-blue w3-tiny">
        ${nombre}
    </div>
    `;
    let tagItem = document.createElement(tag2);
    tipo2 == "null" ? tipo2 = "w3css" : "";
    tagItem.setAttribute("tipo", tipo2);
    tagItem.setAttribute("componente", "exportar");
    if (tagItem.setPropiedades) {
      tagItem.setPropiedades(propiedades2);
    }
    if (shadowRoot2) {
      tagItem.setShadowRoot(shadowRoot2);
    }
    tagItem.setEspaciado(espaciado, espaciado, espaciado);
    div2.append(tagItem);
    let dlg2 = new Modal();
    dlg2.innerHtml = "Desea eliminar este componente?";
    dlg2.titulo = "Confirmaci\xF3n";
    const eliminar = div2.querySelector("#eliminar");
    eliminar.addEventListener("click", (e) => {
      const componente = e.target.parentNode.parentNode;
      dlg2.open().then((r) => {
        componente.remove();
        propiedades2.setItem("", null);
      });
    });
    return div2;
  }
  function swapElements(obj1, obj2) {
    swapElementsDom(obj1, obj2);
  }
  function registrarWebComponenteDB(tag, codigo) {
    let db = getDB();
    console.log("yolo", tag);
    return new Promise((resolve, reject) => {
      db.post("componentes", {
        tag,
        codigo
      }, false).then((data) => {
        eval(codigo);
        registraComponenteUsuario(tag);
        resolve(true);
      }).catch((e) => {
        reject(e);
      });
    });
  }

  // src/vanilla/utils/html/ventana.js
  init_config();
  function openWindow(src) {
    let vistaPrevia = window.open("", "myWindow", "width='+w',height='+h',status=yes,toolbar=no,menubar=no,location=no");
    let html = vistaPrevia.document.querySelector("html");
    html.innerHTML = src;
    return vistaPrevia;
  }
  function loadCSSExtra(css, tema = "default") {
    let style87 = document.querySelector("#estilo-boostrap");
    if (!style87) {
      style87 = document.createElement("style");
      style87.setAttribute("rel", "stylesheet");
      style87.id = "estilo-bootstrap";
      let head = document.querySelector("head");
      head.appendChild(style87);
    }
    if (css == "bootstrap") {
      style87.setAttribute("href", config.bootstrap.default);
    }
  }

  // src/vanilla/exports/export-web-component.js
  init_bootswatch_libs();
  init_config();

  // src/vanilla/exports/nombres.js
  function toCammelCase(tag2) {
    let names = tag2.split("-");
    let nombre = "";
    for (let name of names) {
      nombre += name[0].toUpperCase();
      if (name.length > 1) {
        nombre += name.substr(-(name.length - 1));
      }
    }
    return nombre;
  }

  // src/vanilla/exports/export-web-component.js
  function getListaProps(obj) {
    let salida = "";
    for (let p in obj.props) {
      salida += `'${p}',`;
    }
    return salida;
  }
  function getValorVariable2(valor) {
    if (typeof valor == "string") {
      return `'${valor}'`;
    }
    if (typeof valor == "object") {
      return JSON.stringify(valor);
    }
    return valor;
  }
  function getVariables2(customScript) {
    let variables = "";
    const data2 = customScript.data;
    const props = customScript.props;
    for (let key in data2) {
      variables += `        this.${key} = ${getValorVariable2(data2[key])};
`;
    }
    for (let key in props) {
      variables += `        this.${key} = this.getAttribute("${key}");
`;
    }
    return variables;
  }
  function getArrayVariables(customScript) {
    let variables = "";
    const data2 = customScript.data;
    for (let key in data2) {
      variables += `'${key}',`;
    }
    return variables;
  }
  function getFunciones2(obj) {
    let fun = "";
    const data2 = obj.metodos;
    for (let f in data2) {
      fun += `    ${data2[f].toString()}
`;
    }
    return fun;
  }
  function tagToClassName(tag2) {
    return toCammelCase(tag2);
  }
  function getCss(tipo2) {
    let temas = getTemasBootswatch();
    if (temas.find((tema) => tema == tipo2)) {
      return config.bootstrap[tipo2];
    }
    return config.bootstrap.default;
  }
  function getCsslink(tipo2) {
    if (tipo2 == "w3css" || tipo2 == "null") {
      return config.w3css;
    }
    return getCss(tipo2);
  }
  function getFontDefault(tipo2) {
    if (tipo2 == "sketchy") {
      return `this.style.fontFamily = "'Neucha', cursive"; `;
    }
    return "";
  }
  function getInit2(obj) {
    if (obj.metodos["init"]) {
      return "this.init();";
    }
    return "";
  }
  function escapaDiagonalesTemplate(template90) {
    return template90.replace(/\//g, "\\/");
  }
  function getWebcomponent(tag2, componentes, customStyle, obj, tipocss) {
    const nombreClase = tagToClassName(tag2);
    let estilo = /* @__PURE__ */ new Set();
    let style87 = "";
    let template90 = "";
    let metodos = "";
    let init = "";
    let css = getCsslink(tipocss);
    let font = getFontDefault(tipocss);
    let color = getBackgroundColor(tipocss);
    for (let item of componentes) {
      if (!estilo.has(item.tagName)) {
        estilo.add(item.tagName);
        style87 += item.getStyle();
      }
      template90 += item.getWebComponenteTemplate();
      metodos += item.getWebComponenteMetodos();
      init += item.getWebComponenteInit();
    }
    let textHtml = `
const style = /*css*/\`
* {
    background: ${color};
}
.espacio{
    min-height: 10px;
}
${customStyle}
${style87}
\`;

const template = /*html*/\`
${escapaDiagonalesTemplate(template90)}
\`;

class ${nombreClase} extends HTMLElement {
    constructor(){
        super();
${getVariables2(obj)}
        this.render();   
        this.initComponentes();
        ${getInit2(obj)}
    }

    initComponentes() {
        ${init}
    }

    ${getFunciones2(obj)}

    render() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        let customTemplate = this.replazaValoresMustache(template);        
        shadowRoot.innerHTML = \`
            <link rel="stylesheet" href="${css}">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <style>\${style}</style>
            <div>\${customTemplate}</div>
        \`;
        this.$el = shadowRoot.querySelector('div');
        ${font}
    }
    /*Cuando se monta en la pagina*/
    connectedCallback(){        
    }
    /*Cuando se desmonta en la pagina, no necesariamente se destruye*/
    disconnectedCallback(){        
    }

    replazaValoresMustache(template){
        let props = [${getListaProps(obj)}];
        let salida = template + '';
        for (let p of props){
            const exp = new RegExp(\`{{\${p}}}\`, 'g');
            const attr = this.getAttribute(p);
            salida = salida.replace(exp, attr);
        }
        let variables = [${getArrayVariables(obj)}]
        for (let p of variables){
            const exp = new RegExp(\`{{\${p}}}\`, 'g');
            const attr = this[p];
            salida = salida.replace(exp, attr);
        }
        return salida;
    }

    ${metodos}

}

customElements.define("${tag2}", ${nombreClase});
    `;
    return textHtml;
  }

  // src/vanilla/utils/modal/modal-get.js
  init_modal();
  var ModalGet = class extends Modal {
    constructor(mensaje, valorDefault, tipo2 = "text") {
      super();
      this._titulo = "";
      this.innerHtml = /*html*/
      `
        <div class="w3-container">
            <p>
            <label>${mensaje}</label>
            <input class="w3-input" type="${tipo2}" value="${valorDefault}">
            </p>
        </div>
        `;
    }
    dataAceptar() {
      let input = this._el.querySelector("input");
      return input.value;
    }
  };

  // src/vanilla/exports/export-vue.js
  function getListaProps2(obj) {
    let salida = "";
    for (let p in obj.props) {
      salida += `'${p}',`;
    }
    return salida;
  }
  function getValorVariable3(valor) {
    if (typeof valor == "string") {
      return `'${valor}'`;
    }
    if (typeof valor == "object") {
      return JSON.stringify(valor);
    }
    return valor;
  }
  function getVariables3(customScript) {
    let variables = "";
    const data2 = customScript.data;
    for (let key in data2) {
      variables += `        ${key}: ${getValorVariable3(data2[key])},
`;
    }
    return variables;
  }
  function getFunciones3(obj) {
    let fun = "";
    const data2 = obj.metodos;
    for (let f in data2) {
      fun += `    ${data2[f].toString()},
`;
    }
    return fun;
  }
  function getInit3(obj) {
    if (obj.metodos["init"]) {
      return "this.init();";
    }
    return "";
  }
  function getVueComponent(componentes, customStyle, obj) {
    let estilo = /* @__PURE__ */ new Set();
    let style87 = "";
    let template90 = "";
    let metodos = "";
    let init = "";
    for (let item of componentes) {
      if (!estilo.has(item.tagName)) {
        estilo.add(item.tagName);
        style87 += item.getStyle();
      }
      template90 += item.getVueTemplate();
      const metodo = item.getVueMetodos();
      if (metodo) {
        metodos += metodo + ",";
      }
      init += item.getVueInit();
    }
    let text = `
<template>
<div>
${template90}
</div>
</template>

<script>
export default {    
    data() {
        return {
${getVariables3(obj)}
        }
    },
    props: [${getListaProps2(obj)}],
    mounted() {
        ${init}
        ${getInit3(obj)}
    },
    methods: {
        ${metodos}
        ${getFunciones3(obj)}
    }
}
<\/script>

<style scoped>
.espacio{
    min-height: 10px;
}
${style87}
${customStyle}
</style>
    `;
    text = text.replace(/ev-/g, "@");
    return text;
  }

  // src/vanilla/exports/export-angular.js
  function getListaProps3(obj) {
    let salida = "";
    for (let p in obj.props) {
      salida += `    @Input() ${p}: any;
`;
    }
    return salida;
  }
  function getValorVariable4(valor) {
    if (typeof valor == "string") {
      return `'${valor}'`;
    }
    if (typeof valor == "object") {
      return JSON.stringify(valor);
    }
    return valor;
  }
  function getVariables4(customScript) {
    let variables = "";
    const data2 = customScript.data;
    for (let key in data2) {
      variables += `    ${key} = ${getValorVariable4(data2[key])};
`;
    }
    return variables;
  }
  function getFunciones4(obj) {
    let fun = "";
    const data2 = obj.metodos;
    for (let f in data2) {
      fun += `    ${data2[f].toString()}
`;
    }
    return fun;
  }
  function getInit4(obj) {
    if (obj.metodos["init"]) {
      return "this.init();";
    }
    return "";
  }
  function getAngularComponent(tag2, componentes, customStyle, obj) {
    const nombreClase = tagToClassName(tag2);
    let estilo = /* @__PURE__ */ new Set();
    let style87 = "";
    let template90 = "";
    let metodos = "";
    let init = "";
    for (let item of componentes) {
      if (!estilo.has(item.tagName)) {
        estilo.add(item.tagName);
        style87 += item.getStyle();
      }
      template90 += item.getAngularTemplate();
      const metodo = item.getAngularMetodos();
      if (metodo) {
        metodos += metodo + "\n";
      }
      init += item.getAngularInit();
    }
    let text = `
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

const template = \`
${template90}
\`;

const style = \`
.espacio{
    min-height: 10px;
}
${style87}
${customStyle}
\`;
@Component({
    selector: '${tag2}',
    template: template,
    styles: [style]
})
export class ${nombreClase}Component implements  OnInit{
${getVariables4(obj)}    
    ${getListaProps3(obj)}
    constructor(){        
    }

    ngOnInit() {
        ${init}
        ${getInit4(obj)}
    }
    ${metodos}
    ${getFunciones4(obj)}
}
    `;
    text = text.replace(/lang-/g, "(");
    text = text.replace(/-rang/g, ")");
    return text;
  }

  // src/appVue/ide/ide.vue.js
  init_agregarApps();

  // src/vanilla/utils/modal/open-file.js
  var Openfile = class {
    constructor(tipo2 = "") {
      this._el = null;
      this.tipo = tipo2;
    }
    open() {
      if (this._el) {
        this._el.remove();
      }
      let div2 = document.createElement("div");
      let body = document.querySelector("body");
      this._el = div2;
      div2.innerHTML = this.createWin();
      let input = div2.querySelector("input");
      body.appendChild(div2);
      return new Promise((resolve2, reject2) => {
        input.addEventListener("change", (ev) => {
          this.terminar(ev).then((data2) => {
            resolve2(data2);
          });
        });
        input.click();
      });
    }
    terminar(ev) {
      return new Promise((resolve2, reject2) => {
        var file = ev.target.files[0];
        var r = new FileReader();
        const that = this;
        r.onload = function(e) {
          resolve2(e.target.result);
          that._el.remove();
          that._el = null;
        };
        r.readAsText(file);
      });
    }
    getTipo() {
      if (this.tipo) {
        return `accept="${this.tipo}"`;
      }
      return "";
    }
    /**
     * Elimina el input del dom. Tiene que utilizarse con el destructor del componente
     */
    finaliza() {
      if (this._el) {
        this._el.remove();
        this._el = null;
      }
    }
    createWin() {
      return (
        /*html*/
        `
        <input type="file" id="fileinput" style="display: none;" ${this.getTipo()}/>
        `
      );
    }
  };

  // src/appVue/ide/ide.vue.js
  init_notificaciones();

  // src/vanilla/utils/ide/definicion-objeto.js
  var ClaseComponente = class {
    init() {
    }
    mount() {
    }
    unmount() {
    }
  };
  var AtributoComponente = class {
    constructor() {
    }
  };
  function $DefineAtributo() {
    return new AtributoComponente();
  }
  var VariableComponente = class {
    constructor(valor) {
      this.valor = valor;
    }
  };
  function $DefineVariable(valor) {
    return new VariableComponente(valor);
  }
  var DomItem = class {
    constructor(selector) {
      this.selector = selector;
    }
  };
  function $DefineDomItem(selector) {
    return new DomItem(selector);
  }
  var ref = null;
  function $DefineClaseDelComponente(clase) {
    ref = new clase();
  }
  function creaObjecto() {
    return {
      props: {},
      data: {},
      metodos: {}
    };
  }
  function agregaAtributos(obj) {
    for (let p in ref) {
      if (ref[p] instanceof AtributoComponente) {
        obj.props[p] = "";
      }
    }
  }
  function agregaVariables(obj) {
    for (let p in ref) {
      if (ref[p] instanceof VariableComponente) {
        obj.data[p] = ref[p].valor;
      }
    }
  }
  function agregaMetodos(obj) {
    let clase = ref.constructor;
    let metodos = Object.getOwnPropertyNames(clase.prototype);
    for (let p of metodos) {
      if (p !== "constructor") {
        obj.metodos[p] = ref[p].toString();
      }
    }
  }
  function evaluaCodigo(codigo) {
    eval(codigo);
  }
  function getObjetoComponente(codigo2) {
    evaluaCodigo(codigo2);
    let obj = creaObjecto();
    if (ref == null) {
      return obj;
    }
    agregaAtributos(obj);
    agregaVariables(obj);
    agregaMetodos(obj);
    return obj;
  }

  // src/vanilla/exports/exportar-componente-ide.js
  function getValorVariable5(valor) {
    if (typeof valor == "string") {
      return `'${valor}'`;
    }
    if (typeof valor == "object") {
      return JSON.stringify(valor);
    }
    return valor;
  }
  function getVariables5(customScript) {
    let variables = "";
    const data2 = customScript.data;
    const props = customScript.props;
    for (let key in data2) {
      variables += `        this.${key} = ${getValorVariable5(data2[key])};
`;
    }
    for (let key in props) {
      variables += `        this.${key} = this.getAttribute("${key}");
`;
    }
    return variables;
  }
  function getFunciones5(obj) {
    let fun = "";
    const data2 = obj.metodos;
    for (let f in data2) {
      fun += `    ${data2[f].toString()}
`;
    }
    return fun;
  }
  function tagToClassName2(tag2) {
    return toCammelCase(tag2);
  }
  function getInit5(obj) {
    if (obj.metodos["init"]) {
      return "this.init();";
    }
    return "";
  }
  function getIdecomponent(tag2, componentes, customStyle, obj) {
    const nombreClase = tagToClassName2(tag2);
    let estilo = /* @__PURE__ */ new Set();
    let style87 = "";
    let template90 = "";
    let metodos = "";
    let init = "";
    for (let item of componentes) {
      if (!estilo.has(item.tagName)) {
        estilo.add(item.tagName);
        style87 += item.getStyle();
      }
      template90 += item.getWebComponenteTemplate();
      metodos += item.getWebComponenteMetodos();
      init += item.getWebComponenteInit();
    }
    return `
const style = /*css*/\`
${customStyle}
${style87}
.espacio{
    min-height: 10px;
}
\`;

const template = /*html*/\`
${template90}
\`;

class ${nombreClase} extends CustomComponente {
    constructor(){
        super();
${getVariables5(obj)}
        this.render();   
        this.initComponentes();
        ${getInit5(obj)}
    }

    getStyle() {
        return style;
    }

    getHtml() {         
        const original = this.shadowRoot.querySelector('div');
        const div = original.cloneNode(true);
        return this.getInnerHtml(div);
    }

    initComponentes() {
        ${init}
    }

    ${getFunciones5(obj)}

    render() {
        super.render();
        let shadowRoot = this.shadowRoot;
        shadowRoot.innerHTML = \`   
            <style id="custom-style"></style>
            <style>\${style}</style>
            <div>\${template}</div>
        \`;
    }

    ${metodos}

    getWebComponenteMetodos() {
        return \`${metodos}\`;
    }

}

customElements.define("${tag2}", ${nombreClase});
    `;
  }
  function getIdeJsonComponent(infoComponente, componentes, customStyle, obj) {
    return {
      activo: true,
      tag: infoComponente.tag,
      titulo: infoComponente.titulo,
      descripcion: infoComponente.descripcion,
      codigo: getIdecomponent(infoComponente.tag, componentes, customStyle, obj),
      icono: infoComponente.icono,
      categoria: infoComponente.categoria
    };
  }

  // src/vanilla/utils/modal/modal-form.js
  init_modal();

  // src/vanilla/utils/colores/colores.js
  function w3CodeColor(el) {
    let x5, i, j, k, l, modes = ["html", "js", "css", "sql", "python"];
    k = modes.length;
    for (j = 0; j < k; j++) {
      x5 = el.querySelectorAll("." + modes[j] + "High");
      l = x5.length;
      for (i = 0; i < l; i++) {
        x5[i].innerHTML = w3CodeColorize(x5[i].innerHTML, modes[j]);
      }
    }
  }
  function w3CodeColorize(x5, lang) {
    let tagcolor = "mediumblue";
    let tagnamecolor = "brown";
    let attributecolor = "red";
    let attributevaluecolor = "mediumblue";
    let commentcolor = "green";
    let cssselectorcolor = "brown";
    let csspropertycolor = "red";
    let csspropertyvaluecolor = "mediumblue";
    let cssdelimitercolor = "black";
    let cssimportantcolor = "red";
    let jscolor = "black";
    let jskeywordcolor = "mediumblue";
    let jsstringcolor = "brown";
    let jsnumbercolor = "red";
    let jspropertycolor = "black";
    let phptagcolor = "red";
    let phpcolor = "black";
    let phpkeywordcolor = "mediumblue";
    let phpglobalcolor = "goldenrod";
    let phpstringcolor = "brown";
    let phpnumbercolor = "red";
    let pythoncolor = "black";
    let pythonkeywordcolor = "mediumblue";
    let pythonstringcolor = "brown";
    let pythonnumbercolor = "red";
    let angularstatementcolor = "red";
    let sqlcolor = "black";
    let sqlkeywordcolor = "mediumblue";
    let sqlstringcolor = "brown";
    let sqlnumbercolor = "";
    if (!lang) {
      lang = "html";
    }
    if (lang == "html") {
      return htmlMode(x5);
    }
    if (lang == "css") {
      return cssMode(x5);
    }
    if (lang == "js") {
      return jsMode(x5);
    }
    if (lang == "php") {
      return phpMode(x5);
    }
    if (lang == "sql") {
      return sqlMode(x5);
    }
    if (lang == "python") {
      return pythonMode(x5);
    }
    return x5;
    function extract(str, start, end, func, repl) {
      let s, e, d = "", a = [];
      while (str.search(start) > -1) {
        s = str.search(start);
        e = str.indexOf(end, s);
        if (e == -1) {
          e = str.length;
        }
        if (repl) {
          a.push(func(str.substring(s, e + end.length)));
          str = str.substring(0, s) + repl + str.substr(e + end.length);
        } else {
          d += str.substring(0, s);
          d += func(str.substring(s, e + end.length));
          str = str.substr(e + end.length);
        }
      }
      this.rest = d + str;
      this.arr = a;
    }
    function htmlMode(txt) {
      let rest = txt, done = "", php, comment, angular, startpos, endpos, note, i;
      php = new extract(rest, "&lt;\\?php", "?&gt;", phpMode, "W3PHPPOS");
      rest = php.rest;
      comment = new extract(rest, "&lt;!--", "--&gt;", commentMode, "W3HTMLCOMMENTPOS");
      rest = comment.rest;
      while (rest.indexOf("&lt;") > -1) {
        note = "";
        startpos = rest.indexOf("&lt;");
        if (rest.substr(startpos, 9).toUpperCase() == "&LT;STYLE") {
          note = "css";
        }
        if (rest.substr(startpos, 10).toUpperCase() == "&LT;SCRIPT") {
          note = "javascript";
        }
        endpos = rest.indexOf("&gt;", startpos);
        if (endpos == -1) {
          endpos = rest.length;
        }
        done += rest.substring(0, startpos);
        done += tagMode(rest.substring(startpos, endpos + 4));
        rest = rest.substr(endpos + 4);
        if (note == "css") {
          endpos = rest.indexOf("&lt;/style&gt;");
          if (endpos > -1) {
            done += cssMode(rest.substring(0, endpos));
            rest = rest.substr(endpos);
          }
        }
        if (note == "javascript") {
          endpos = rest.indexOf("&lt;/script&gt;");
          if (endpos > -1) {
            done += jsMode(rest.substring(0, endpos));
            rest = rest.substr(endpos);
          }
        }
      }
      rest = done + rest;
      angular = new extract(rest, "{{", "}}", angularMode);
      rest = angular.rest;
      for (i = 0; i < comment.arr.length; i++) {
        rest = rest.replace("W3HTMLCOMMENTPOS", comment.arr[i]);
      }
      for (i = 0; i < php.arr.length; i++) {
        rest = rest.replace("W3PHPPOS", php.arr[i]);
      }
      return rest;
    }
    function tagMode(txt) {
      let rest = txt, done = "", startpos, endpos, result;
      while (rest.search(/(\s|<br>)/) > -1) {
        startpos = rest.search(/(\s|<br>)/);
        endpos = rest.indexOf("&gt;");
        if (endpos == -1) {
          endpos = rest.length;
        }
        done += rest.substring(0, startpos);
        done += attributeMode(rest.substring(startpos, endpos));
        rest = rest.substr(endpos);
      }
      result = done + rest;
      result = "<span style=color:" + tagcolor + ">&lt;</span>" + result.substring(4);
      if (result.substr(result.length - 4, 4) == "&gt;") {
        result = result.substring(0, result.length - 4) + "<span style=color:" + tagcolor + ">&gt;</span>";
      }
      return "<span style=color:" + tagnamecolor + ">" + result + "</span>";
    }
    function attributeMode(txt) {
      let rest = txt, done = "", startpos, endpos, singlefnuttpos, doublefnuttpos, spacepos;
      while (rest.indexOf("=") > -1) {
        endpos = -1;
        startpos = rest.indexOf("=");
        singlefnuttpos = rest.indexOf("'", startpos);
        doublefnuttpos = rest.indexOf('"', startpos);
        spacepos = rest.indexOf(" ", startpos + 2);
        if (spacepos > -1 && (spacepos < singlefnuttpos || singlefnuttpos == -1) && (spacepos < doublefnuttpos || doublefnuttpos == -1)) {
          endpos = rest.indexOf(" ", startpos);
        } else if (doublefnuttpos > -1 && (doublefnuttpos < singlefnuttpos || singlefnuttpos == -1) && (doublefnuttpos < spacepos || spacepos == -1)) {
          endpos = rest.indexOf('"', rest.indexOf('"', startpos) + 1);
        } else if (singlefnuttpos > -1 && (singlefnuttpos < doublefnuttpos || doublefnuttpos == -1) && (singlefnuttpos < spacepos || spacepos == -1)) {
          endpos = rest.indexOf("'", rest.indexOf("'", startpos) + 1);
        }
        if (!endpos || endpos == -1 || endpos < startpos) {
          endpos = rest.length;
        }
        done += rest.substring(0, startpos);
        done += attributeValueMode(rest.substring(startpos, endpos + 1));
        rest = rest.substr(endpos + 1);
      }
      return "<span style=color:" + attributecolor + ">" + done + rest + "</span>";
    }
    function attributeValueMode(txt) {
      return "<span style=color:" + attributevaluecolor + ">" + txt + "</span>";
    }
    function angularMode(txt) {
      return "<span style=color:" + angularstatementcolor + ">" + txt + "</span>";
    }
    function commentMode(txt) {
      return "<span style=color:" + commentcolor + ">" + txt + "</span>";
    }
    function cssMode(txt) {
      let rest = txt, done = "", s, e, comment, i, midz, c, cc;
      comment = new extract(rest, /\/\*/, "*/", commentMode, "W3CSSCOMMENTPOS");
      rest = comment.rest;
      while (rest.search("{") > -1) {
        s = rest.search("{");
        midz = rest.substr(s + 1);
        cc = 1;
        c = 0;
        for (i = 0; i < midz.length; i++) {
          if (midz.substr(i, 1) == "{") {
            cc++;
            c++;
          }
          if (midz.substr(i, 1) == "}") {
            cc--;
          }
          if (cc == 0) {
            break;
          }
        }
        if (cc != 0) {
          c = 0;
        }
        e = s;
        for (i = 0; i <= c; i++) {
          e = rest.indexOf("}", e + 1);
        }
        if (e == -1) {
          e = rest.length;
        }
        done += rest.substring(0, s + 1);
        done += cssPropertyMode(rest.substring(s + 1, e));
        rest = rest.substr(e);
      }
      rest = done + rest;
      rest = rest.replace(/{/g, "<span style=color:" + cssdelimitercolor + ">{</span>");
      rest = rest.replace(/}/g, "<span style=color:" + cssdelimitercolor + ">}</span>");
      for (i = 0; i < comment.arr.length; i++) {
        rest = rest.replace("W3CSSCOMMENTPOS", comment.arr[i]);
      }
      return "<span style=color:" + cssselectorcolor + ">" + rest + "</span>";
    }
    function cssPropertyMode(txt) {
      let rest = txt, done = "", s, e, n, loop;
      if (rest.indexOf("{") > -1) {
        return cssMode(rest);
      }
      while (rest.search(":") > -1) {
        s = rest.search(":");
        loop = true;
        n = s;
        while (loop == true) {
          loop = false;
          e = rest.indexOf(";", n);
          if (rest.substring(e - 5, e + 1) == "&nbsp;") {
            loop = true;
            n = e + 1;
          }
        }
        if (e == -1) {
          e = rest.length;
        }
        done += rest.substring(0, s);
        done += cssPropertyValueMode(rest.substring(s, e + 1));
        rest = rest.substr(e + 1);
      }
      return "<span style=color:" + csspropertycolor + ">" + done + rest + "</span>";
    }
    function cssPropertyValueMode(txt) {
      let rest = txt, done = "", s, result;
      rest = "<span style=color:" + cssdelimitercolor + ">:</span>" + rest.substring(1);
      while (rest.search(/!important/i) > -1) {
        s = rest.search(/!important/i);
        done += rest.substring(0, s);
        done += cssImportantMode(rest.substring(s, s + 10));
        rest = rest.substr(s + 10);
      }
      result = done + rest;
      if (result.substr(result.length - 1, 1) == ";" && result.substr(result.length - 6, 6) != "&nbsp;" && result.substr(result.length - 4, 4) != "&lt;" && result.substr(result.length - 4, 4) != "&gt;" && result.substr(result.length - 5, 5) != "&amp;") {
        result = result.substring(0, result.length - 1) + "<span style=color:" + cssdelimitercolor + ">;</span>";
      }
      return "<span style=color:" + csspropertyvaluecolor + ">" + result + "</span>";
    }
    function cssImportantMode(txt) {
      return "<span style=color:" + cssimportantcolor + ";font-weight:bold;>" + txt + "</span>";
    }
    function jsMode(txt) {
      let rest = txt, done = "", esc = [], i, cc, tt = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos2, mypos, dotpos, y5;
      for (i = 0; i < rest.length; i++) {
        cc = rest.substr(i, 1);
        if (cc == "\\") {
          esc.push(rest.substr(i, 2));
          cc = "W3JSESCAPE";
          i++;
        }
        tt += cc;
      }
      rest = tt;
      y5 = 1;
      while (y5 == 1) {
        sfnuttpos = getPos(rest, "'", "'", jsStringMode);
        dfnuttpos = getPos(rest, '"', '"', jsStringMode);
        compos = getPos(rest, /\/\*/, "*/", commentMode);
        comlinepos = getPos(rest, /\/\//, "<br>", commentMode);
        numpos2 = getNumPos(rest, jsNumberMode);
        keywordpos = getKeywordPos("js", rest, jsKeywordMode);
        dotpos = getDotPos(rest, jsPropertyMode);
        if (Math.max(numpos2[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0], dotpos[0]) == -1) {
          break;
        }
        mypos = getMinPos(numpos2, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, dotpos);
        if (mypos[0] == -1) {
          break;
        }
        if (mypos[0] > -1) {
          done += rest.substring(0, mypos[0]);
          done += mypos[2](rest.substring(mypos[0], mypos[1]));
          rest = rest.substr(mypos[1]);
        }
      }
      rest = done + rest;
      for (i = 0; i < esc.length; i++) {
        rest = rest.replace("W3JSESCAPE", esc[i]);
      }
      return "<span style=color:" + jscolor + ">" + rest + "</span>";
    }
    function jsStringMode(txt) {
      return "<span style=color:" + jsstringcolor + ">" + txt + "</span>";
    }
    function jsKeywordMode(txt) {
      return "<span style=color:" + jskeywordcolor + ">" + txt + "</span>";
    }
    function jsNumberMode(txt) {
      return "<span style=color:" + jsnumbercolor + ">" + txt + "</span>";
    }
    function jsPropertyMode(txt) {
      return "<span style=color:" + jspropertycolor + ">" + txt + "</span>";
    }
    function getDotPos(txt, func) {
      let x6, i, j, s, e, arr = [".", "<", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "index.html", "-", "*", "|", "%"];
      s = txt.indexOf(".");
      if (s > -1) {
        x6 = txt.substr(s + 1);
        for (j = 0; j < x6.length; j++) {
          let cc = x6[j];
          for (i = 0; i < arr.length; i++) {
            if (cc.indexOf(arr[i]) > -1) {
              e = j;
              return [s + 1, e + s + 1, func];
            }
          }
        }
      }
      return [-1, -1, func];
    }
    function getMinPos() {
      let i, arr = [];
      for (i = 0; i < arguments.length; i++) {
        if (arguments[i][0] > -1) {
          if (arr.length == 0 || arguments[i][0] < arr[0]) {
            arr = arguments[i];
          }
        }
      }
      if (arr.length == 0) {
        arr = arguments[i];
      }
      return arr;
    }
    function sqlMode(txt) {
      let rest = txt, y5, done = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos2, mypos;
      y5 = 1;
      while (y5 == 1) {
        sfnuttpos = getPos(rest, "'", "'", sqlStringMode);
        dfnuttpos = getPos(rest, '"', '"', sqlStringMode);
        compos = getPos(rest, /\/\*/, "*/", commentMode);
        comlinepos = getPos(rest, /--/, "<br>", commentMode);
        numpos2 = getNumPos(rest, sqlNumberMode);
        keywordpos = getKeywordPos("sql", rest, sqlKeywordMode);
        if (Math.max(numpos2[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0]) == -1) {
          break;
        }
        mypos = getMinPos(numpos2, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos);
        if (mypos[0] == -1) {
          break;
        }
        if (mypos[0] > -1) {
          done += rest.substring(0, mypos[0]);
          done += mypos[2](rest.substring(mypos[0], mypos[1]));
          rest = rest.substr(mypos[1]);
        }
      }
      rest = done + rest;
      return "<span style=color:" + sqlcolor + ">" + rest + "</span>";
    }
    function sqlStringMode(txt) {
      return "<span style=color:" + sqlstringcolor + ">" + txt + "</span>";
    }
    function sqlKeywordMode(txt) {
      return "<span style=color:" + sqlkeywordcolor + ">" + txt + "</span>";
    }
    function sqlNumberMode(txt) {
      return "<span style=color:" + sqlnumbercolor + ">" + txt + "</span>";
    }
    function phpMode(txt) {
      let rest = txt, done = "", sfnuttpos, dfnuttpos, compos, comlinepos, comhashpos, keywordpos, mypos, y5;
      y5 = 1;
      while (y5 == 1) {
        sfnuttpos = getPos(rest, "'", "'", phpStringMode);
        dfnuttpos = getPos(rest, '"', '"', phpStringMode);
        compos = getPos(rest, /\/\*/, "*/", commentMode);
        comlinepos = getPos(rest, /\/\//, "<br>", commentMode);
        comhashpos = getPos(rest, "#", "<br>", commentMode);
        numpos = getNumPos(rest, phpNumberMode);
        keywordpos = getKeywordPos("php", rest, phpKeywordMode);
        if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], comhashpos[0], keywordpos[0]) == -1) {
          break;
        }
        mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, comhashpos, keywordpos);
        if (mypos[0] == -1) {
          break;
        }
        if (mypos[0] > -1) {
          done += rest.substring(0, mypos[0]);
          done += mypos[2](rest.substring(mypos[0], mypos[1]));
          rest = rest.substr(mypos[1]);
        }
      }
      rest = done + rest;
      rest = "<span style=color:" + phptagcolor + ">&lt;" + rest.substr(4, 4) + "</span>" + rest.substring(8);
      if (rest.substr(rest.length - 5, 5) == "?&gt;") {
        rest = rest.substring(0, rest.length - 5) + "<span style=color:" + phptagcolor + ">?&gt;</span>";
      }
      return "<span style=color:" + phpcolor + ">" + rest + "</span>";
    }
    function phpStringMode(txt) {
      return "<span style=color:" + phpstringcolor + ">" + txt + "</span>";
    }
    function phpNumberMode(txt) {
      return "<span style=color:" + phpnumbercolor + ">" + txt + "</span>";
    }
    function phpKeywordMode(txt) {
      let glb = ["$GLOBALS", "$_SERVER", "$_REQUEST", "$_POST", "$_GET", "$_FILES", "$_ENV", "$_COOKIE", "$_SESSION"];
      if (glb.indexOf(txt.toUpperCase()) > -1) {
        if (glb.indexOf(txt) > -1) {
          return "<span style=color:" + phpglobalcolor + ">" + txt + "</span>";
        } else {
          return txt;
        }
      } else {
        return "<span style=color:" + phpkeywordcolor + ">" + txt + "</span>";
      }
    }
    function pythonMode(txt) {
      let rest = txt, done = "", sfnuttpos, dfnuttpos, compos, comlinepos, comhashpos, keywordpos, mypos, y5;
      y5 = 1;
      while (y5 == 1) {
        sfnuttpos = getPos(rest, "'", "'", pythonStringMode);
        dfnuttpos = getPos(rest, '"', '"', pythonStringMode);
        compos = getPos(rest, /\/\*/, "*/", commentMode);
        comlinepos = getPos(rest, /\/\//, "<br>", commentMode);
        comhashpos = getPos(rest, "#", "<br>", commentMode);
        numpos = getNumPos(rest, pythonNumberMode);
        keywordpos = getKeywordPos("python", rest, pythonKeywordMode);
        if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], comhashpos[0], keywordpos[0]) == -1) {
          break;
        }
        mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, comhashpos, keywordpos);
        if (mypos[0] == -1) {
          break;
        }
        if (mypos[0] > -1) {
          done += rest.substring(0, mypos[0]);
          done += mypos[2](rest.substring(mypos[0], mypos[1]));
          rest = rest.substr(mypos[1]);
        }
      }
      rest = done + rest;
      return "<span style=color:" + pythoncolor + ">" + rest + "</span>";
    }
    function pythonStringMode(txt) {
      return "<span style=color:" + pythonstringcolor + ">" + txt + "</span>";
    }
    function pythonNumberMode(txt) {
      return "<span style=color:" + pythonnumbercolor + ">" + txt + "</span>";
    }
    function pythonKeywordMode(txt) {
      return "<span style=color:" + pythonkeywordcolor + ">" + txt + "</span>";
    }
    function getKeywordPos(typ, txt, func) {
      let words, i, pos, rpos = -1, rpos2 = -1, patt;
      if (typ == "js") {
        words = [
          "abstract",
          "arguments",
          "boolean",
          "break",
          "byte",
          "case",
          "catch",
          "char",
          "class",
          "const",
          "continue",
          "debugger",
          "default",
          "delete",
          "do",
          "double",
          "else",
          "enum",
          "eval",
          "event",
          "export",
          "extends",
          "false",
          "final",
          "finally",
          "float",
          "for",
          "function",
          "goto",
          "if",
          "implements",
          "import",
          "in",
          "instanceof",
          "int",
          "interface",
          "let",
          "long",
          "NaN",
          "native",
          "new",
          "null",
          "package",
          "private",
          "protected",
          "public",
          "return",
          "short",
          "static",
          "super",
          "switch",
          "synchronized",
          "this",
          "throw",
          "throws",
          "transient",
          "true",
          "try",
          "typeof",
          "let",
          "void",
          "volatile",
          "while",
          "with",
          "yield"
        ];
      } else if (typ == "php") {
        words = [
          "$GLOBALS",
          "$_SERVER",
          "$_REQUEST",
          "$_POST",
          "$_GET",
          "$_FILES",
          "$_ENV",
          "$_COOKIE",
          "$_SESSION",
          "__halt_compiler",
          "abstract",
          "and",
          "array",
          "as",
          "break",
          "callable",
          "case",
          "catch",
          "class",
          "clone",
          "const",
          "continue",
          "declare",
          "default",
          "die",
          "do",
          "echo",
          "else",
          "elseif",
          "empty",
          "enddeclare",
          "endfor",
          "endforeach",
          "endif",
          "endswitch",
          "endwhile",
          "eval",
          "exit",
          "extends",
          "final",
          "for",
          "foreach",
          "function",
          "global",
          "goto",
          "if",
          "implements",
          "include",
          "include_once",
          "instanceof",
          "insteadof",
          "interface",
          "isset",
          "list",
          "namespace",
          "new",
          "or",
          "print",
          "private",
          "protected",
          "public",
          "require",
          "require_once",
          "return",
          "static",
          "switch",
          "throw",
          "trait",
          "try",
          "unset",
          "use",
          "let",
          "while",
          "xor"
        ];
      } else if (typ == "sql") {
        words = [
          "ADD",
          "EXTERNAL",
          "PROCEDURE",
          "ALL",
          "FETCH",
          "PUBLIC",
          "ALTER",
          "FILE",
          "RAISERROR",
          "AND",
          "FILLFACTOR",
          "READ",
          "ANY",
          "READTEXT",
          "AS",
          "FOREIGN",
          "RECONFIGURE",
          "ASC",
          "FREETEXT",
          "REFERENCES",
          "AUTHORIZATION",
          "FREETEXTTABLE",
          "REPLICATION",
          "BACKUP",
          "FROM",
          "RESTORE",
          "BEGIN",
          "FULL",
          "RESTRICT",
          "BETWEEN",
          "FUNCTION",
          "RETURN",
          "BREAK",
          "GOTO",
          "REVERT",
          "BROWSE",
          "GRANT",
          "REVOKE",
          "BULK",
          "GROUP",
          "RIGHT",
          "BY",
          "HAVING",
          "ROLLBACK",
          "CASCADE",
          "HOLDLOCK",
          "ROWCOUNT",
          "CASE",
          "IDENTITY",
          "ROWGUIDCOL",
          "CHECK",
          "IDENTITY_INSERT",
          "RULE",
          "CHECKPOINT",
          "IDENTITYCOL",
          "SAVE",
          "CLOSE",
          "IF",
          "SCHEMA",
          "CLUSTERED",
          "IN",
          "SECURITYAUDIT",
          "COALESCE",
          "INDEX",
          "SELECT",
          "COLLATE",
          "INNER",
          "SEMANTICKEYPHRASETABLE",
          "COLUMN",
          "INSERT",
          "SEMANTICSIMILARITYDETAILSTABLE",
          "COMMIT",
          "INTERSECT",
          "SEMANTICSIMILARITYTABLE",
          "COMPUTE",
          "INTO",
          "SESSION_USER",
          "CONSTRAINT",
          "IS",
          "SET",
          "CONTAINS",
          "JOIN",
          "SETUSER",
          "CONTAINSTABLE",
          "KEY",
          "SHUTDOWN",
          "CONTINUE",
          "KILL",
          "SOME",
          "CONVERT",
          "LEFT",
          "STATISTICS",
          "CREATE",
          "LIKE",
          "SYSTEM_USER",
          "CROSS",
          "LINENO",
          "TABLE",
          "CURRENT",
          "LOAD",
          "TABLESAMPLE",
          "CURRENT_DATE",
          "MERGE",
          "TEXTSIZE",
          "CURRENT_TIME",
          "NATIONAL",
          "THEN",
          "CURRENT_TIMESTAMP",
          "NOCHECK",
          "TO",
          "CURRENT_USER",
          "NONCLUSTERED",
          "TOP",
          "CURSOR",
          "NOT",
          "TRAN",
          "DATABASE",
          "NULL",
          "TRANSACTION",
          "DBCC",
          "NULLIF",
          "TRIGGER",
          "DEALLOCATE",
          "OF",
          "TRUNCATE",
          "DECLARE",
          "OFF",
          "TRY_CONVERT",
          "DEFAULT",
          "OFFSETS",
          "TSEQUAL",
          "DELETE",
          "ON",
          "UNION",
          "DENY",
          "OPEN",
          "UNIQUE",
          "DESC",
          "OPENDATASOURCE",
          "UNPIVOT",
          "DISK",
          "OPENQUERY",
          "UPDATE",
          "DISTINCT",
          "OPENROWSET",
          "UPDATETEXT",
          "DISTRIBUTED",
          "OPENXML",
          "USE",
          "DOUBLE",
          "OPTION",
          "USER",
          "DROP",
          "OR",
          "VALUES",
          "DUMP",
          "ORDER",
          "letYING",
          "ELSE",
          "OUTER",
          "VIEW",
          "END",
          "OVER",
          "WAITFOR",
          "ERRLVL",
          "PERCENT",
          "WHEN",
          "ESCAPE",
          "PIVOT",
          "WHERE",
          "EXCEPT",
          "PLAN",
          "WHILE",
          "EXEC",
          "PRECISION",
          "WITH",
          "EXECUTE",
          "PRIMARY",
          "WITHIN GROUP",
          "EXISTS",
          "PRINT",
          "WRITETEXT",
          "EXIT",
          "PROC",
          "LIMIT",
          "MODIFY",
          "COUNT"
        ];
      } else if (typ == "python") {
        words = [
          "as",
          "assert",
          "break",
          "class",
          "continue",
          "def",
          "del",
          "elif",
          "else",
          "except",
          "finally",
          "for",
          "from",
          "global",
          "if",
          "import",
          "lambda",
          "pass",
          "raise",
          "return",
          "try",
          "while",
          "with",
          "yield",
          "in",
          "abs",
          "all",
          "any",
          "bin",
          "bool",
          "bytearray",
          "callable",
          "chr",
          "classmethod",
          "compile",
          "complex",
          "delattr",
          "dict",
          "dir",
          "divmod",
          "enumerate",
          "eval",
          "filter",
          "float",
          "format",
          "frozenset",
          "getattr",
          "globals",
          "hasattr",
          "hash",
          "help",
          "hex",
          "id",
          "input",
          "int",
          "isinstance",
          "issubclass",
          "iter",
          "len",
          "list",
          "locals",
          "map",
          "max",
          "memoryview",
          "min",
          "next",
          "object",
          "oct",
          "open",
          "ord",
          "pow",
          "print",
          "property",
          "range",
          "repr",
          "reversed",
          "round",
          "set",
          "setattr",
          "slice",
          "sorted",
          "staticmethod",
          "str",
          "sum",
          "super",
          "tuple",
          "type",
          "lets",
          "zip",
          "__import__",
          "NotImplemented",
          "Ellipsis",
          "__debug__"
        ];
      }
      for (i = 0; i < words.length; i++) {
        if (typ == "php" || typ == "sql") {
          pos = txt.toLowerCase().indexOf(words[i].toLowerCase());
        } else {
          pos = txt.indexOf(words[i]);
        }
        if (pos > -1) {
          patt = /\W/g;
          if (txt.substr(pos + words[i].length, 1).match(patt) && txt.substr(pos - 1, 1).match(patt)) {
            if (pos > -1 && (rpos == -1 || pos < rpos)) {
              rpos = pos;
              rpos2 = rpos + words[i].length;
            }
          }
        }
      }
      return [rpos, rpos2, func];
    }
    function getPos(txt, start, end, func) {
      let s, e;
      s = txt.search(start);
      e = txt.indexOf(end, s + end.length);
      if (e == -1) {
        e = txt.length;
      }
      return [s, e + end.length, func];
    }
    function getNumPos(txt, func) {
      let arr = ["<br>", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "index.html", "-", "*", "|", "%", "="], i, j, c, startpos = 0, endpos, word;
      for (i = 0; i < txt.length; i++) {
        for (j = 0; j < arr.length; j++) {
          c = txt.substr(i, arr[j].length);
          if (c == arr[j]) {
            if (c == "-" && (txt.substr(i - 1, 1) == "e" || txt.substr(i - 1, 1) == "E")) {
              continue;
            }
            endpos = i;
            if (startpos < endpos) {
              word = txt.substring(startpos, endpos);
              if (!isNaN(word)) {
                return [startpos, endpos, func];
              }
            }
            i += arr[j].length;
            startpos = i;
            i -= 1;
            break;
          }
        }
      }
      return [-1, -1, func];
    }
  }

  // src/vanilla/utils/modal/modal-form.js
  var ModalForm = class extends Modal {
    constructor(titulo) {
      super();
      this._titulo = titulo;
      this.defaultValue = null;
      this.innerHtml = `
        <div class="w3-container">
            <p>
            Agrege los inputs con la propiedad dlg.innerHtml
            </p>
            <div class="w3-panel w3-card w3-light-grey"> 
            <h4>ejemplo</h4>
                <div class="w3-code jsHigh notranslate">
                    let dlg = new ModalForm();<br>
                    dlg.innerHtml = '
                    &lt;div class="w3-container"&gt;<br>

                    &lt;label&gt;First Name&lt;/label&gt;<br>
                    &lt;input class="w3-input" type="text" name="nombre" dato-salida&gt;<br>

                    &lt;label&gt;Last Namel&lt;/label&gt;<br>
                    &lt;input class="w3-input" type="text" name="apellido" dato-salida&gt;<br>

                    &lt;/div&gt;<br>
                    ' ;<br>
                    dlg.open().then(datos => {<br>
                        //datos = {nombre: .., apellido: ..}<br>
                    });<br>
                </div>
            </div>
            <p>
            Note que los inputs tienen la propiedad de name y dato-salida, es importante que estos 
            dos propiedades esten en los datos que desea recibir del dialogo.
            </p>
        </div>
        `;
    }
    dataAceptar() {
      let inputs = this._el.querySelectorAll("[dato-salida]");
      let data2 = {};
      for (let input of inputs) {
        const name = input.getAttribute("name");
        data2[name] = input.value;
      }
      return data2;
    }
    setDefaultValue(defaultValue) {
      this.defaultValue = defaultValue;
    }
    open() {
      let promesa = super.open();
      w3CodeColor(this._el);
      for (let key in this.defaultValue) {
        let input = this._el.querySelector(`input[name="${key}"]`);
        if (input) {
          input.value = this.defaultValue[key];
        }
      }
      return promesa;
    }
  };

  // src/appVue/ide/ide.vue.js
  var contPrueba = 1;
  var open = new Openfile();
  function cretateVueApp(div2) {
    let app3 = new Vue({
      el: div2,
      data() {
        return {
          apps: [],
          buscar: [],
          hover: null,
          propiedades: null,
          customStyle: "",
          customScript: "{}",
          editorCss: null,
          editorJs: null,
          css: "",
          estilo: {
            maxHeight: "100px",
            overflow: "auto"
          },
          estiloColComponentes: {
            maxHeight: "100px",
            overflow: "auto"
          },
          estiloUi: {
            height: "100vh",
            backgroundImage: "url(./img/cuadro.png)",
            backgroundRepeat: "round",
            overflow: "auto",
            maxHeight: "100px"
          },
          espaciadoComponentes: "2 8"
        };
      },
      mounted() {
        this.createDragDrop();
        const eliminar = this.$el.querySelector("#eliminar");
        eliminar.addEventListener("click", (e) => {
          e.target.parentNode.parentNode.remove();
        });
        let propiedades2 = this.$el.querySelector("#propiedades");
        propiedades2.innerHTML = "<x-propiedades></x-propiedades>";
        this.propiedades = propiedades2.querySelector("x-propiedades");
      },
      beforeDestroy() {
        open.finaliza();
      },
      template: template10,
      methods: {
        getClaseBotonEspaciado(tipo2) {
          let color = "";
          if (tipo2 == this.espaciadoComponentes) {
            color = "w3-grey";
          }
          return "w3-bar-item w3-button " + color;
        },
        setEspaciado(espaciado) {
          this.espaciadoComponentes = espaciado;
          const componentes = this.$el.querySelectorAll("[componente]");
          for (let item of componentes) {
            item.setEspaciado(espaciado, espaciado, espaciado);
          }
        },
        setTipo(tipo2, css) {
          this.css = css;
          const appcss = getApps(css);
          switch (tipo2) {
            case "vistas": {
              this.apps = appcss.appsVistas;
              break;
            }
            case "headers": {
              this.apps = appcss.appsHeaders;
              break;
            }
            case "footers": {
              this.apps = appcss.appsFooters;
              break;
            }
            default:
              this.apps = appcss.apps;
              break;
          }
        },
        saveComponentes() {
          let json = this.getComponentes();
          let componente = {
            componentes: json,
            codigo: this.editorJs.getCodigo(),
            estilo: this.editorCss.getCodigo()
          };
          downloadFile(JSON.stringify(componente, null, "	"), "componentes.json", "application/json");
        },
        setPadre(padre) {
          let that = this;
          let observer = new MutationObserver(function(mutations) {
            let altura = padre.offsetHeight - 10;
            that.estilo.maxHeight = altura + "px";
            that.estiloColComponentes.maxHeight = altura - 50 + "px";
            that.estiloUi.maxHeight = altura - 50 + "px";
          });
          var config2 = { attributes: true, childList: true, characterData: true };
          observer.observe(padre, config2);
        },
        getComponentes() {
          let json = [];
          const componentes = this.$el.querySelectorAll("[componente]");
          for (let item of componentes) {
            json.push({
              componente: item.tagName,
              shadowRoot: item.getShadowRoot()
            });
          }
          return json;
        },
        openComponente() {
          open.open().then((r) => {
            let json = JSON.parse(r);
            this.setComponentes(json.componentes);
            this.editorCss.setCodigo(json.estilo);
            this.editorJs.setCodigo(json.codigo);
          });
        },
        setComponentes(componentes) {
          const content = this.$el.querySelector("#content-page");
          let panel = content.querySelector("#panel");
          if (panel && componentes.length > 0) {
            panel.remove();
          }
          for (let x5 of componentes) {
            let div3 = createContenido(x5.componente, x5.componente, this.propiedades, x5.shadowRoot, this.css, this.espaciadoComponentes);
            this.addListeners(div3);
            this.dropNuevo(content, div3);
          }
        },
        setEditores(editorJs, editorCss) {
          this.editorCss = editorCss;
          this.editorJs = editorJs;
          this.propiedades.setEditores(editorJs, editorCss);
        },
        setCustomtyle(style87) {
          this.customStyle = style87;
        },
        setCustomScript(script) {
          this.customScript = script;
        },
        vistaPrevia() {
          const componentes = this.$el.querySelectorAll("[componente]");
          let html = getHtml(componentes, this.customStyle, {});
          openWindow(html);
        },
        evaluaObj() {
          let obj = {};
          obj = getObjetoComponente(this.customScript);
          return obj;
        },
        testWebComponente() {
          let test2 = addWindow("test-custom-w3-webcomponent", "Prueba componente", null, true);
          let ventana = test2.parentNode;
          let obj = this.evaluaObj();
          const componentes = this.$el.querySelectorAll("[componente]");
          const tag2 = `web-componente${contPrueba++}`;
          let webComponente = getWebcomponent(tag2, componentes, this.customStyle, obj, this.css);
          test2.setCustomComponent(tag2, webComponente);
          setTimeout(() => {
            ventana.setAttribute("activo", "1");
          }, 100);
        },
        registrarWebcomponente() {
          let obj = this.evaluaObj();
          const componentes = this.$el.querySelectorAll("[componente]");
          let dlg2 = new ModalGet("Dame el tag del web componente a registrar", "x-ejemplo");
          dlg2.open().then((re) => {
            let webComponente = getWebcomponent(re.data, componentes, this.customStyle, obj, this.css);
            registrarWebComponenteDB(re.data, webComponente).then((e) => {
              addNotificacion(NOTIFICACION.SUCCESS, "Registrado", "Se registro el componente " + re.data, 5e3);
            });
          });
        },
        exportHtml() {
          let obj = this.evaluaObj();
          const componentes = this.$el.querySelectorAll("[componente]");
          let html = getHtml(componentes, this.customStyle, obj, this.css);
          downloadHtml(html, "index.html", "text/html");
        },
        exportWebComponente() {
          let obj = this.evaluaObj();
          let dlg2 = new ModalGet("Dame el tag del web componente", "x-ejemplo");
          dlg2.open().then((re) => {
            const componentes = this.$el.querySelectorAll("[componente]");
            let webComponente = getWebcomponent(re.data, componentes, this.customStyle, obj, this.css);
            downloadSource(webComponente, `${re.data}.js`, "text/javascript");
          });
        },
        exportIdeComponente() {
          let obj = this.evaluaObj();
          let dlg2 = new ModalForm("Dame el tag del web componente");
          dlg2.innerHtml = `
            <div class="w3-container">
                <label>Titulo</label>
                <input class="w3-input" type="text" name="titulo" dato-salida>
                <label>Tag</label>
                <input class="w3-input" type="text" name="tag" dato-salida>
                <label>Icono</label>
                <input class="w3-input" type="text" name="icono" dato-salida>
                <label>Categoria</label>
                <input class="w3-input" type="text" name="categoria" dato-salida>
                <label>Descripci\xF3n</label>
                <input class="w3-input" type="text" name="descripcion" dato-salida>
            </div>
            `;
          dlg2.open().then((re) => {
            const componentes = this.$el.querySelectorAll("[componente]");
            let webComponente = getIdeJsonComponent(re.data, componentes, this.customStyle, obj, this.css);
            downloadSource(JSON.stringify(webComponente, null, null, "	"), `${re.data.tag}.icjson`, "text/json");
          });
        },
        exportVueComponente() {
          let obj = this.evaluaObj();
          let dlg2 = new ModalGet("Dame el tag del web componente", "x-ejemplo");
          dlg2.open().then((re) => {
            const componentes = this.$el.querySelectorAll("[componente]");
            let webComponente = getVueComponent(componentes, this.customStyle, obj);
            downloadHtml(webComponente, `${re.data}.vue`, "text/javascript");
          });
        },
        exportAngularComponente() {
          let obj = this.evaluaObj();
          let dlg2 = new ModalGet("Dame el tag del web componente", "x-ejemplo");
          dlg2.open().then((re) => {
            const componentes = this.$el.querySelectorAll("[componente]");
            let webComponente = getAngularComponent(re.data, componentes, this.customStyle, obj);
            downloadSource(webComponente, `${re.data}.component.ts`, "text/javascript");
          });
        },
        buscaPadreContenedor(div3) {
          let contenedor = div3;
          while (contenedor.getAttribute("contenedor") != "true") {
            contenedor = contenedor.parentNode;
          }
          return contenedor;
        },
        show(id2) {
          const acoordeon = this.$el.querySelector("#" + id2);
          if (acoordeon.classList.contains("w3-hide")) {
            acoordeon.classList.remove("w3-hide");
          } else {
            acoordeon.classList.add("w3-hide");
          }
        },
        createDragDrop() {
          let i = 0;
          for (let grupo of this.apps) {
            const id2 = `#grupo${i}`;
            const drag = document.querySelector(id2);
            i++;
            this.createDrag(drag);
          }
        },
        createDrag(drag) {
          let dragGhost = null;
        },
        dragStarSwap(ev) {
          const padre = this.buscaPadreContenedor(ev.target);
          ev.dataTransfer.setData("swap", padre.id);
          ev.dataTransfer.setData("tipo-mover-ide", "swap");
          ev.stopPropagation();
        },
        dragStar(ev, app4) {
          ev.dataTransfer.setData("app", JSON.stringify(app4));
          ev.dataTransfer.setData("tipo-mover-ide", "nuevo");
          ev.stopPropagation();
        },
        drop(ev) {
          const jsonapp = ev.dataTransfer.getData("app");
          const id2 = ev.dataTransfer.getData("swap");
          const tipo2 = ev.dataTransfer.getData("tipo-mover-ide");
          if (!tipo2) {
            return;
          }
          let app4 = null;
          if (jsonapp) {
            app4 = JSON.parse(jsonapp);
          }
          const content = this.$el.querySelector("#content-page");
          let div3 = null;
          if (app4) {
            div3 = createContenido(app4.nombre, app4.tag, this.propiedades, null, this.css, this.espaciadoComponentes);
            this.addListeners(div3);
            let item = div3.querySelector(app4.tag);
            item.setCustomStyle(this.customStyle);
          }
          if (!this.hover) {
            this.dropNuevo(content, div3);
          } else {
            if (id2) {
              this.dropSwap(id2, content);
            } else {
              this.dropHover(content, div3);
            }
          }
          this.hover = null;
          ev.preventDefault();
          ev.stopPropagation();
        },
        agregaAlFinal(app4) {
          const content = this.$el.querySelector("#content-page");
          let div3 = createContenido(app4.nombre, app4.tag, this.propiedades, null, this.css, this.espaciadoComponentes);
          this.addListeners(div3);
          this.dropNuevo(content, div3);
        },
        addListeners(div3) {
          div3.addEventListener("dragover", this.allowDropItem.bind(this));
          div3.addEventListener("dragstart", this.dragStarSwap.bind(this));
        },
        dropSwap(id2, content) {
          let div3 = content.querySelector("#" + id2);
          if (div3 && div3.id != this.hover.id) {
            const padrediv = this.buscaPadreContenedor(div3);
            const padrehover = this.buscaPadreContenedor(this.hover);
            swapElements(padrediv, padrehover);
          }
        },
        dropHover(content, div3) {
          try {
            content.insertBefore(div3, this.buscaPadreContenedor(this.hover));
          } catch (e) {
            this.dropNuevo(content, div3);
          }
        },
        dropNuevo(content, div3) {
          content.appendChild(div3);
        },
        allowDrop(ev) {
          ev.preventDefault();
          ev.stopPropagation();
        },
        allowDropItem(ev) {
          this.hover = ev.target;
          ev.preventDefault();
          ev.stopPropagation();
        },
        swapPaneles() {
          const panelComponentes = this.$el.querySelector("#componentes");
          const panelPropiedades = this.$el.querySelector("#propiedades");
          swapElements(panelComponentes, panelPropiedades);
        }
      }
    });
    return app3;
  }

  // src/appVue/ide/ide.js
  var Ide = class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.render();
      this.contadorVistaResize = 0;
    }
    render() {
      let tipo2 = this.getAttribute("tipo");
      let css = this.getAttribute("css");
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style}</style>
            <div></div>
        `;
      const div2 = shadowRoot2.querySelector("div");
      const desk3 = document.querySelector(".escritorio");
      this.app = cretateVueApp(div2);
      this.app.setTipo(tipo2, css);
      const padre = this.parentNode.parentNode;
      this.app.setPadre(padre);
    }
    recalculaSize() {
      this.contadorVistaResize++;
      if (this.contadorVistaResize > 0) {
        this.click();
      }
    }
    setCustomStyle(style87) {
      this.app.setCustomtyle(style87);
      let componentes = this.shadowRoot.querySelectorAll("[componente]");
      for (let item of componentes) {
        item.setCustomStyle(style87);
      }
    }
    setCustomScript(codigo2) {
      this.app.setCustomScript(codigo2);
    }
    setEditores(editorJs, editorCss) {
      this.app.setEditores(editorJs, editorCss);
    }
    setComponentes(componentes) {
      this.app.setComponentes(componentes);
    }
    getComponentes() {
      return this.app.getComponentes();
    }
    disconnectedCallback() {
      this.app.$destroy();
    }
    getAppVue() {
      return this.app;
    }
  };
  customElements.define("app-ide", Ide);

  // src/appVue/config-desk/config-desk.js
  init_config();
  var template11 = (
    /*html*/
    `
<div>
    <x-bar-menu color="w3-blue-grey" 
        titulo="Configuraci\xF3n escritorio" icono="gear"></x-bar-menu>
    <h3>Configuraci\xF3n escritorio</h3>   
    <p>
    <input class="w3-radio" type="radio" name="tipo" value="color" v-model="tipo">
    <label>Color de fondo</label>
    <input class="w3-radio" type="radio" name="tipo" value="imagen" v-model="tipo">
    <label>Imagen</label>
    </p>
    <p v-if="tipo=='color'">
    Seleccione el color<br> 
    <input type="color" v-model="color" @change="cambioColor()">
    </p>
    <p v-if="tipo=='imagen'">
    Seleccione la imagen<br>
    <input class="w3-radio" type="radio" name="file" value="" v-model="file" @change="cambioImagen()">
    <label>Ninguno</label>
    <span v-for="(item,index) in listaImagenes" :key="index">
    <input class="w3-radio" type="radio" name="file" :value="item.valor" v-model="file" @change="cambioImagen()">
    <label>{{item.nombre}}</label>
    </span>    
    </p>
    <p>
    Color activo ventana<br>
    <input class="w3-radio" type="radio" name="colorActivo" value="w3-red" v-model="colorActivo" @change="cambioColorActivo()">    
    <label>Rojo</label>
    <input class="w3-radio" type="radio" name="colorActivo" value="w3-green" v-model="colorActivo" @change="cambioColorActivo()">    
    <label>Verde</label>
    <input class="w3-radio" type="radio" name="colorActivo" value="w3-blue" v-model="colorActivo" @change="cambioColorActivo()">
    <label>Azul</label>
    <input class="w3-radio" type="radio" name="colorActivo" value="w3-purple" v-model="colorActivo" @change="cambioColorActivo()">
    <label>Purpura</label>
    <input class="w3-radio" type="radio" name="colorActivo" value="w3-deep-orange" v-model="colorActivo" @change="cambioColorActivo()">
    <label>Naranja</label>
    <input class="w3-radio" type="radio" name="colorActivo" value="w3-brown" v-model="colorActivo" @change="cambioColorActivo()">
    <label>Caf\xE9</label>
    <input class="w3-radio" type="radio" name="colorActivo" value="w3-pink" v-model="colorActivo" @change="cambioColorActivo()">
    <label>Rosa</label>
    <input class="w3-radio" type="radio" name="colorActivo" value="w3-teal" v-model="colorActivo" @change="cambioColorActivo()">
    <label>Teal</label>
    <input class="w3-radio" type="radio" name="colorActivo" value="w3-blue-grey" v-model="colorActivo" @change="cambioColorActivo()">
    <label>Gris</label>    
    </p>
    <p>
    Seleccione el tipo de ventana<br>
    <input class="w3-radio" type="radio" name="tipo-ventana" value="" v-model="tipoVentana" @change="cambioTipoVentana()">
    <label>W3CSS</label>
    <input class="w3-radio" type="radio" name="tipo-ventana" value="-98" v-model="tipoVentana" @change="cambioTipoVentana()">
    <label>98</label>
    <input class="w3-radio" type="radio" name="tipo-ventana" value="-xp" v-model="tipoVentana" @change="cambioTipoVentana()">
    <label>XP</label>
    <input class="w3-radio" type="radio" name="tipo-ventana" value="-mac" v-model="tipoVentana" @change="cambioTipoVentana()">
    <label>Mac</label>
    </p>
</div>
`
  );
  var listaImagenes = [
    {
      nombre: "Espacio",
      valor: "libres/space"
    },
    {
      nombre: "Tierra",
      valor: "libres/tierra"
    },
    {
      nombre: "Atardercer",
      valor: "libres/atardercer-arbol"
    },
    {
      nombre: "Caf\xE9",
      valor: "libres/cafe"
    },
    {
      nombre: "Lago",
      valor: "libres/lago"
    },
    {
      nombre: "Libreta",
      valor: "libres/libreta"
    },
    {
      nombre: "Lobos",
      valor: "libres/lobos"
    },
    {
      nombre: "Mariposa",
      valor: "libres/mariposa"
    },
    {
      nombre: "Monta\xF1a",
      valor: "libres/monta\xF1a"
    }
  ];
  var ConfigDesk = class extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `            
            <div></div>
        `;
      const div2 = shadowRoot2.querySelector("div");
      const desk3 = document.querySelector(".escritorio");
      let app3 = new Vue({
        el: div2,
        data() {
          return {
            tipo: null,
            color: "",
            colorActivo: "",
            file: "",
            tipoVentana: "",
            listaImagenes
          };
        },
        mounted() {
          this.color = configDesk.colorDesk;
          if (desk3.style.backgroundImage && desk3.style.backgroundImage.indexOf("url") >= 0) {
            this.tipo = "imagen";
            let archivo = desk3.style.backgroundImage.replace('url("./img/', "").replace('.jpg")', "");
            this.file = archivo;
          } else {
            this.tipo = "color";
          }
          this.colorActivo = configDesk.colorVentanaActiva;
          this.tipoVentana = configDesk.ventana;
        },
        template: template11,
        methods: {
          tt(e) {
            console.log(e);
          },
          cambioColor() {
            desk3.style.background = this.color;
            configDesk.colorDesk = this.color;
            configDesk.imagenDesk = "";
            saveConfigDesk();
          },
          cambioImagen() {
            if (this.file != "") {
              desk3.style.backgroundImage = `url("./img/${this.file}.jpg")`;
              configDesk.imagenDesk = `url("./img/${this.file}.jpg")`;
              desk3.style.backgroundRepeat = "round";
            } else {
              desk3.style.backgroundImage = ``;
              configDesk.imagenDesk = "";
              desk3.style.backgroundRepeat = "";
            }
            saveConfigDesk();
          },
          cambioTipoVentana() {
            configDesk.ventana = this.tipoVentana;
            saveConfigDesk();
          },
          cambioColorActivo() {
            configDesk.colorVentanaActiva = this.colorActivo;
            saveConfigDesk();
          }
        }
      });
    }
  };
  customElements.define("config-desk", ConfigDesk);

  // src/vanilla/dragdrop.js
  var itemAMover = {
    padre: null,
    target: null,
    x: 0,
    y: 0
  };
  var itemSize = {
    padre: null,
    target: null,
    x: 0,
    y: 0
  };
  var tipo = "";
  function incremento(ini, fin) {
    return fin - ini;
  }
  function numero(p) {
    if (p === "")
      return 0;
    return parseInt(p);
  }
  function dropMover(ev) {
    ev.preventDefault();
    const x5 = incremento(itemAMover.x, ev.x);
    const y5 = incremento(itemAMover.y, ev.y);
    itemAMover.padre.style.left = numero(itemAMover.padre.style.left) + x5 + "px";
    itemAMover.padre.style.top = numero(itemAMover.padre.style.top) + y5 + "px";
  }
  function dropSize(ev) {
    ev.preventDefault();
    const x5 = incremento(itemSize.x, ev.x);
    const y5 = incremento(itemSize.y, ev.y);
    const win = itemSize.target.parentNode;
    const padre = itemSize.padre;
    const ventana = win.querySelector(".ventana");
    const body = win.querySelector(".ventana-contenedor");
    const titulo = win.querySelector("#titulo");
    let ancho = 0;
    let alto = 0;
    if (win.style.width == "" || win.style.width == "auto") {
      ancho = win.clientWidth;
    } else {
      ancho = numero(win.style.width);
    }
    if (win.style.height == "" || win.style.height == "auto") {
      alto = win.clientHeight;
    } else {
      alto = numero(win.style.height);
    }
    win.style.width = ancho + x5 + "px";
    win.style.height = alto + y5 + "px";
    padre.style.width = ancho + x5 + "px";
    padre.style.height = alto + y5 + "px";
    ventana.style.width = ancho + x5 + "px";
    ventana.style.height = alto + y5 + "px";
    body.style.maxHeight = alto + y5 - 50 + "px";
    body.style.height = alto + y5 - 50 + "px";
    body.style.width = ancho + x5 + "px";
    if (padre.tagName !== "X-WINDOW") {
      body.style.width = ancho + x5 - 5 + "px";
    }
    body.style.overflow = "auto";
    titulo.style.width = `${ancho - 150}px`;
    itemSize.x = ev.x;
    itemSize.y = ev.y;
  }
  function drop(ev) {
    const data2 = ev.dataTransfer.getData("tipo");
    if (data2 == "size") {
      dropSize(ev);
    } else if (data2 == "mover") {
      dropMover(ev);
    }
    tipo = "";
  }
  function dragSize(ev, padre) {
    itemSize.target = ev.target;
    itemSize.x = ev.x;
    itemSize.y = ev.y;
    itemSize.padre = padre;
    ev.dataTransfer.setData("tipo", "size");
    tipo = "size";
  }
  function allowDrop(ev) {
    if (tipo == "size") {
      dropSize(ev);
    } else {
      ev.preventDefault();
    }
  }
  function dragAMover(ev, padre) {
    if (ev.target.tagName == "APP-IDE") {
      return;
    }
    itemAMover.target = ev.target;
    itemAMover.x = ev.x;
    itemAMover.y = ev.y;
    itemAMover.padre = padre;
    ev.dataTransfer.setData("tipo", "mover");
    tipo = "mover";
  }

  // src/vanilla/ventanas/ventana.js
  init_config();
  var style2 = (
    /*css*/
    `
.ventana {
    position: absolute;  
}
.content-win{
    position: relative;
}
.resizable {  
    position: absolute;
    right: 1px;
    bottom: 1px;
    color: black;
    font-size: xx-small;
    cursor: se-resize;
  }
.ventana_no_activa {
    filter: grayscale(1);
}
.ventana-body {
    
}
`
  );
  var template12 = (
    /*html*/
    `
<div class="content-win" style="width: 500px; height: 200px;">
    <div class="w3-card-4 w3-white ventana" id="ventana" style="width: 500px; height: 200px;" draggable="true">
        <div class="w3-bar ${configDesk.colorVentanaInactiva}" id="barra-titulo">
            <div class="w3-bar-item" id="titulo" 
            style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Titulo</div>
            <div class="w3-right">
                <span class="w3-button w3-black" id="close">x</span>
            </div>
            <div class="w3-right">
                <span class="w3-button w3-black" id="minimizar">-</span>
            </div>            
            <div class="w3-right">
                <span class="w3-button w3-black" id="maximizar">+</span>
            </div>
        </div>
        <div class="ventana-contenedor" style="overflow: auto; max-height: 143px;">
            <div class="ventana-body">
                <slot></slot>
            </div>               
        </div>       
    </div>        
    <div class='w3-right resizable' id="banda" draggable="true">//</div>         
</div>
`
  );
  var zindez = 1e3;
  function getZindex() {
    return zindez++;
  }
  var id = 1;
  function getId() {
    return id++;
  }
  var x = 10;
  var y = 10;
  var Ventana = class extends HTMLElement {
    constructor() {
      super();
    }
    render() {
      this.pos = {
        x: "",
        y: "",
        ancho: "",
        alto: "",
        bodyMaxAltura: "",
        bodyAltura: ""
      };
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style2}</style>
            ${template12}            
        `;
      this.classList.add("animate__animated");
      this.style.width = "500px";
      this.style.height = "200px";
      this.style.position = "absolute";
      this.style.zIndex = "" + zindez++;
      this.style.left = x + "px";
      this.style.top = y + "px";
      x += 10;
      y += 10;
      this.setAttribute("id", "win_" + id++);
      this.style.display = "none";
      this.beforeClose = null;
    }
    setBeforeClose(callBack) {
      this.beforeClose = callBack;
    }
    connectedCallback() {
      this.render();
      this.addListeners();
      if (this.getAttribute("maximizar")) {
        this.maximizar();
      }
      this.style.display = "block";
      this.setColorFondo();
      this.emiteCargado();
    }
    setColorFondo() {
      let color = this.getAttribute("color-fondo");
      let win = this.shadowRoot.querySelector(".ventana-contenedor");
      if (color) {
        win.style.background = color;
      }
    }
    addListeners() {
      const win = this.shadowRoot.querySelector("#ventana");
      const banda = this.shadowRoot.querySelector("#banda");
      const close = this.shadowRoot.querySelector("#close");
      const minimizar = this.shadowRoot.querySelector("#minimizar");
      const maximizar = this.shadowRoot.querySelector("#maximizar");
      banda.addEventListener("dragstart", (e) => {
        dragSize(e, this);
      });
      win.addEventListener("dragstart", (e) => {
        let slot = this.shadowRoot.querySelector("slot");
        slot.style.display = "none";
        dragAMover(e, this);
      });
      win.addEventListener("dragend", (e) => {
        let slot = this.shadowRoot.querySelector("slot");
        slot.style.display = "";
      });
      close.addEventListener("click", (e) => {
        this.cierraVentana();
      });
      minimizar.addEventListener("click", (e) => {
        this.classList.add("animate__zoomOutDown");
      });
      maximizar.addEventListener("click", (e) => {
        this.maximizar();
      });
      win.addEventListener("click", (e) => {
        this.setAttribute("activo", 1);
      });
    }
    cierraVentana() {
      if (this.beforeClose) {
        if (this.beforeClose()) {
          this.parentNode.removeChild(this);
        } else {
          console.log("No puedes cerrar");
        }
      } else {
        this.parentNode.removeChild(this);
      }
    }
    disconnectedCallback() {
    }
    setsize(e, ancho, alto) {
      e.style.width = `${ancho}px`;
      e.style.height = `${alto}px`;
    }
    setSizeVentana(ancho, alto) {
      if (!this.shadowRoot) {
        return;
      }
      const win = this.shadowRoot.querySelector(".content-win");
      const ventana = this.shadowRoot.querySelector("#ventana");
      this.setsize(this, ancho, alto);
      this.setsize(win, ancho, alto);
      this.setsize(ventana, ancho, alto);
      const titulo = this.shadowRoot.querySelector("#titulo");
      titulo.style.width = `${ancho - 150}px`;
    }
    static get observedAttributes() {
      return ["titulo", "activo", "resize", "size"];
    }
    get titulo() {
      return "";
    }
    set size(val) {
      let json = JSON.parse(val);
      if (!this.shadowRoot) {
        return;
      }
      if (this.getAttribute("maximizar")) {
        this.maximizar();
      } else {
        this.setSizeVentana(json.ancho, json.alto);
        const contenedor = this.shadowRoot.querySelector(".ventana-contenedor");
        if (this.tagName !== "X-WINDOW") {
          contenedor.style.width = parseInt(this.style.width) - 5 + "px";
        }
        contenedor.style.maxHeight = parseInt(this.style.height) - 50 + "px";
      }
      this.setColorFondo();
    }
    get size() {
      return "";
    }
    set titulo(value) {
      setTimeout(() => {
        const titulo = this.shadowRoot.querySelector("#titulo");
        titulo.innerHTML = value;
      }, 300);
    }
    set resize(value) {
      if (value == 0) {
        const banda = this.shadowRoot.querySelector("#banda");
        banda.style.display = "none";
      }
    }
    get resize() {
      return "";
    }
    set activo(val) {
      this._activo = val;
      const m_activo = this.getAttribute("activo");
      if (m_activo == 0 && val == 0 || m_activo == null) {
        return;
      }
      const barraTitulo = this.shadowRoot.querySelector("#barra-titulo");
      this.style.zIndex = "" + zindez++;
      this.removeActivo(this.getAttribute("id"));
      barraTitulo.classList.remove(configDesk.colorVentanaInactiva);
      barraTitulo.classList.add(configDesk.colorVentanaActiva);
      this.setBandejaActivo(this.getAttribute("id"));
      const ventana = this.shadowRoot.querySelector("#ventana");
      ventana.classList.remove("ventana_no_activa");
    }
    get activo() {
      return this._activo;
    }
    getClassWin() {
      return configDesk.colorVentanaActiva;
    }
    removeActivo(id2) {
      let lista4 = document.querySelectorAll("x-window, x-window-98, x-window-xp, x-window-mac");
      for (let win of lista4) {
        if (win.getAttribute("id") != id2) {
          const barraTitulo = win.shadowRoot.querySelector("#barra-titulo");
          win.setAttribute("activo", 0);
          barraTitulo.classList.remove(configDesk.colorVentanaActiva);
          barraTitulo.classList.add(configDesk.colorVentanaInactiva);
          const ventana = win.shadowRoot.querySelector("#ventana");
          ventana.classList.remove(this.getClassWin());
          ventana.classList.add("ventana_no_activa");
        }
      }
    }
    setBandejaActivo(id2) {
      const bandeja = document.querySelector("x-bandeja");
      bandeja.setActivo(id2);
    }
    attributeChangedCallback(name, oldVal, newVal) {
      this[name] = newVal;
    }
    maximizar() {
      const padre = this;
      const win = this.shadowRoot.querySelector(".content-win");
      const ventana = this.shadowRoot.querySelector(".ventana");
      const body = ventana.querySelector(".ventana-contenedor");
      padre.classList.remove("animate__zoomInUp");
      if (padre.style.width !== "100%") {
        this.pos.x = padre.style.left;
        this.pos.y = padre.style.top;
        this.pos.ancho = padre.style.width;
        this.pos.alto = padre.style.height;
        this.pos.bodyAltura = body.style.height;
        this.pos.bodyMaxAltura = body.style.maxHeight;
        this.actualizaPropiedadMaximizar(padre);
        this.actualizaPropiedadMaximizar(win);
        this.actualizaPropiedadMaximizar(ventana);
        body.style.maxHeight = "";
        body.style.height = "89vh";
        body.style.width = "100%";
        padre.classList.add("animate__headShake");
        padre.classList.remove("animate__rubberBand");
      } else {
        this.actulizarePropiedaRestaurar(padre);
        this.actulizarePropiedaRestaurar(win);
        this.actulizarePropiedaRestaurar(ventana);
        body.style.maxHeight = this.pos.bodyMaxAltura;
        body.style.height = this.pos.bodyAltura;
        padre.style.left = this.pos.x;
        padre.style.top = this.pos.y;
        padre.classList.add("animate__rubberBand");
        padre.classList.remove("animate__headShake");
      }
    }
    actualizaPropiedadMaximizar(p) {
      p.style.top = "";
      p.style.left = "";
      p.style.width = "100%";
      p.style.height = "calc(100vh - 35px)";
    }
    actulizarePropiedaRestaurar(p) {
      p.style.width = this.pos.ancho;
      p.style.height = this.pos.alto;
    }
    emiteCargado() {
      this.dispatchEvent(
        new CustomEvent("cargado", {
          detail: {
            cargado: true
          }
        })
      );
    }
    emiteAyuda() {
      this.dispatchEvent(
        new CustomEvent("ayuda", {
          detail: {
            ayuda: true
          }
        })
      );
    }
    emiteNuevo() {
      this.dispatchEvent(
        new CustomEvent("nuevo", {
          detail: {
            nuevo: true
          }
        })
      );
    }
    emiteGuardar() {
      this.dispatchEvent(
        new CustomEvent("guardar", {
          detail: {
            guardar: true
          }
        })
      );
    }
    emiteEditar() {
      this.dispatchEvent(
        new CustomEvent("editar", {
          detail: {
            editar: true
          }
        })
      );
    }
    /**
     * Emite el evento size. Es util cuando se cambia el tamaño de la ventana principal y
     * el conteneido de la ventana no se reestructura automaticamente.
     */
    emiteSize() {
      this.dispatchEvent(
        new CustomEvent("size", {
          detail: {
            size: true
          }
        })
      );
    }
  };
  customElements.define("x-window", Ventana);

  // src/vanilla/ventanas/ventana-98.js
  init_config();
  var style3 = (
    /*css*/
    `
.ventana {
    position: absolute;  
}
.resizable {  
    position: absolute;
    right: 3px;
    bottom: 1px;
    color: black;
    font-size: xx-small;
    cursor: se-resize;
  }
.ventana_no_activa {
    filter: grayscale(1);
}

.w3-red {
    background: linear-gradient(90deg,#69221d,#f44336);
}
.w3-green {
    background: linear-gradient(90deg,#1a521c,#4CAF50);
}
.w3-blue {
    background: linear-gradient(90deg,navy,#1084d0);
}
.w3-purple {
    background: linear-gradient(90deg,#522252,purple)
}
.w3-deep-orange {
    background: linear-gradient(90deg,#8a3014,#ff5722);
}
.w3-brown {
    background: linear-gradient(90deg,#48352e,#795548);
}
.w3-pink {
    background: linear-gradient(90deg,#670f2d,#e91e63);
}
.w3-teal {
    background: linear-gradient(90deg,#1f6760,#009688);
}
.w3-blue-grey {
    background: linear-gradient(90deg,#556871,#607d8b);
}
.ventana-body{
    width: 100%;
}
`
  );
  var template13 = (
    /*html*/
    `
<div class="content-win animate__animated">
    <div class="window ventana" id="ventana" draggable="true">
        <div class="title-bar" id="barra-titulo">
            <div class="title-bar-text" id="titulo">titulo</div>
            <div class="title-bar-controls">
            <button aria-label="Minimize" id="minimizar"></button>
            <button aria-label="Maximize" id="maximizar"></button>
            <button aria-label="Close"id="close"></button>
            </div>
        </div>
        <div class="window-body ventana-contenedor" style="margin: 0;">
            <div class="ventana-body">
                <slot></slot>
            </div>        
        </div>
    </div>        
    <div class='resizable' draggable="true" id="banda">//</div>        
</div>
`
  );
  var x2 = 10;
  var y2 = 10;
  var Ventana98 = class extends Ventana {
    constructor() {
      super();
    }
    render() {
      this.pos = {
        x: "",
        y: "",
        ancho: "",
        alto: "",
        bodyMaxAltura: "",
        bodyAltura: ""
      };
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.win98}">
            <link rel="stylesheet" href="${config.w3css}">
            <style>${style3}</style>
            ${template13}            
        `;
      this.classList.add("animate__animated");
      this.style.width = "500px";
      this.style.height = "200px";
      this.style.position = "absolute";
      this.style.zIndex = "" + getZindex();
      this.style.left = x2 + "px";
      this.style.top = y2 + "px";
      x2 += 10;
      y2 += 10;
      this.setAttribute("id", "win_" + getId());
      this.style.display = "none";
      this.beforeClose = null;
    }
    /**
     * Se deja metodos para cambiar el ancho del body de la ventana
     * @param {*} ancho 
     * @param {*} alto 
     */
    setSizeVentana(ancho, alto) {
      if (!this.shadowRoot) {
        return;
      }
      const win = this.shadowRoot.querySelector(".content-win");
      const ventana = this.shadowRoot.querySelector("#ventana");
      const contenido = this.shadowRoot.querySelector(".window-body");
      this.setsize(this, ancho, alto);
      this.setsize(win, ancho, alto);
      this.setsize(ventana, ancho, alto);
      this.setsize(contenido, ancho, alto);
      const titulo = this.shadowRoot.querySelector("#titulo");
      titulo.style.width = `${ancho - 150}px`;
    }
    maximizar() {
      const padre = this;
      const win = this.shadowRoot.querySelector(".content-win");
      const ventana = this.shadowRoot.querySelector(".ventana");
      const body = ventana.querySelector(".ventana-contenedor");
      padre.classList.remove("animate__zoomInUp");
      if (padre.style.width !== "100%") {
        this.pos.x = padre.style.left;
        this.pos.y = padre.style.top;
        this.pos.ancho = padre.style.width;
        this.pos.alto = padre.style.height;
        this.pos.bodyAltura = body.style.height;
        this.pos.bodyMaxAltura = body.style.maxHeight;
        this.actualizaPropiedadMaximizar(padre);
        this.actualizaPropiedadMaximizar(win);
        this.actualizaPropiedadMaximizar(ventana);
        body.style.maxHeight = "";
        body.style.height = "89vh";
        body.style.width = "100%";
        body.style.overflow = "auto";
        padre.classList.add("animate__headShake");
        padre.classList.remove("animate__rubberBand");
      } else {
        this.actulizarePropiedaRestaurar(padre);
        this.actulizarePropiedaRestaurar(win);
        this.actulizarePropiedaRestaurar(ventana);
        let altura = this.pos.bodyMaxAltura;
        if (this.pos.bodyMaxAltura == "") {
          altura = parseFloat(this.pos.alto) * 0.78 + "px";
        }
        body.style.maxHeight = altura;
        body.style.height = altura;
        body.style.width = this.pos.ancho;
        body.style.overflow = "auto";
        padre.style.left = this.pos.x;
        padre.style.top = this.pos.y;
        padre.classList.add("animate__rubberBand");
        padre.classList.remove("animate__headShake");
      }
    }
    set activo(val) {
      this._activo = val;
      const m_activo = this.getAttribute("activo");
      if (m_activo == 0 && val == 0 || m_activo == null) {
        return;
      }
      const barraTitulo = this.shadowRoot.querySelector("#barra-titulo");
      const ventana = this.shadowRoot.querySelector("#ventana");
      this.style.zIndex = "" + getZindex();
      this.removeActivo(this.getAttribute("id"));
      barraTitulo.classList.remove(configDesk.colorVentanaInactiva);
      barraTitulo.classList.add(configDesk.colorVentanaActiva);
      this.setBandejaActivo(this.getAttribute("id"));
      ventana.classList.remove("ventana_no_activa");
    }
    get activo() {
      return super.activo();
    }
  };
  customElements.define("x-window-98", Ventana98);

  // src/vanilla/ventanas/ventana-xp.js
  init_config();
  var style4 = (
    /*css*/
    `
.ventana {
    position: absolute;  
}
.resizable {  
    position: absolute;
    right: 4px;
    bottom: 2px;
    color: black;
    font-size: xx-small;
    cursor: se-resize;
  }
.ventana_no_activa {
    filter: grayscale(1);
}
.win-no-activa {
    box-shadow: 
        inset -1px -1px grey, 
        inset 1px 1px grey, 
        inset -2px -2px grey, 
        inset 2px 2px grey, 
        inset -3px -3px grey, 
        inset 3px 3px grey;    
}
.w3-red {
    background: #f44336;
    border-top: 1px solid #f44336;
    border-left: 1px solid #f44336;
    border-right: 1px solid #f44336;

}
.win-red{
    box-shadow: 
        inset -1px -1px #f44336, 
        inset 1px 1px #f44336, 
        inset -2px -2px #f44336, 
        inset 2px 2px #f44336, 
        inset -3px -3px #f44336, 
        inset 3px 3px #f44336;
}
.w3-green {    
    background: #4CAF50;
    border-top: 1px solid #4CAF50;
    border-left: 1px solid #4CAF50;
    border-right: 1px solid #4CAF50;
}
.win-green{
    box-shadow: 
        inset -1px -1px #4CAF50, 
        inset 1px 1px #4CAF50, 
        inset -2px -2px #4CAF50, 
        inset 2px 2px #4CAF50, 
        inset -3px -3px #4CAF50, 
        inset 3px 3px #4CAF50;
}
.w3-blue {
    background: linear-gradient(180deg,#0997ff,#0053ee 8%,#0050ee 40%,#06f 88%,#06f 93%,#005bff 95%,#003dd7 96%,#003dd7);
    border-top: 1px solid #0831d9;
    border-left: 1px solid #0831d9;
    border-right: 1px solid #001ea0;
}
.win-blue {
    box-shadow: 
        inset -1px -1px #00138c, 
        inset 1px 1px #0831d9, 
        inset -2px -2px #001ea0, 
        inset 2px 2px #166aee, 
        inset -3px -3px #003bda, 
        inset 3px 3px #0855dd;
}
.w3-purple {
    background: purple;
    border-top: 1px solid purple;
    border-left: 1px solid purple;
    border-right: 1px solid purple;
}
.win-purple {
    box-shadow: 
        inset -1px -1px purple, 
        inset 1px 1px purple, 
        inset -2px -2px purple, 
        inset 2px 2px purple, 
        inset -3px -3px purple, 
        inset 3px 3px purple;
}
.w3-deep-orange {    
    background: #ff5722;
    border-top: 1px solid #ff5722;
    border-left: 1px solid #ff5722;
    border-right: 1px solid #ff5722;
}
.win-deep-orange {
    box-shadow: 
        inset -1px -1px #ff5722, 
        inset 1px 1px #ff5722, 
        inset -2px -2px #ff5722, 
        inset 2px 2px #ff5722, 
        inset -3px -3px #ff5722, 
        inset 3px 3px #ff5722;
}
.win-purple {
    box-shadow: 
        inset -1px -1px purple, 
        inset 1px 1px purple, 
        inset -2px -2px purple, 
        inset 2px 2px purple, 
        inset -3px -3px purple, 
        inset 3px 3px purple;
}
.w3-brown {    
    background: #795548;
    border-top: 1px solid #795548;
    border-left: 1px solid #795548;
    border-right: 1px solid #795548;
}
.win-brown {
    box-shadow: 
        inset -1px -1px #795548, 
        inset 1px 1px #795548, 
        inset -2px -2px #795548, 
        inset 2px 2px #795548, 
        inset -3px -3px #795548, 
        inset 3px 3px #795548;
}
.w3-pink {    
    background: #e91e63;
    border-top: 1px solid #e91e63;
    border-left: 1px solid #e91e63;
    border-right: 1px solid #e91e63;
}
.win-pink {
    box-shadow: 
        inset -1px -1px #e91e63, 
        inset 1px 1px #e91e63, 
        inset -2px -2px #e91e63, 
        inset 2px 2px #e91e63, 
        inset -3px -3px #e91e63, 
        inset 3px 3px #e91e63;
}
.w3-teal {    
    background: #009688;
    border-top: 1px solid #009688;
    border-left: 1px solid #009688;
    border-right: 1px solid #009688;
}
.win-teal {
    box-shadow: 
        inset -1px -1px #009688, 
        inset 1px 1px #009688, 
        inset -2px -2px #009688, 
        inset 2px 2px #009688, 
        inset -3px -3px #009688, 
        inset 3px 3px #009688;
}
.w3-blue-grey {    
    background: #607d8b;
    border-top: 1px solid #607d8b;
    border-left: 1px solid #607d8b;
    border-right: 1px solid #607d8b;
}
.win-blue-grey {
    box-shadow: 
        inset -1px -1px #607d8b, 
        inset 1px 1px #607d8b, 
        inset -2px -2px #607d8b, 
        inset 2px 2px #607d8b, 
        inset -3px -3px #607d8b, 
        inset 3px 3px #607d8b;
}
.ventana-body{
    width: 100%;    
}
`
  );
  var template14 = (
    /*html*/
    `
<div class="content-win animate__animated">
    <div class="window ventana win-no-activa" id="ventana" draggable="true">
        <div class="title-bar" id="barra-titulo">
            <div class="title-bar-text" id="titulo">titulo</div>
            <div class="title-bar-controls">
            <button aria-label="Minimize" id="minimizar"></button>
            <button aria-label="Maximize" id="maximizar"></button>
            <button aria-label="Close"id="close"></button>
            </div>
        </div>
        <div class="window-body ventana-contenedor" style="margin: 0; padding-left: 3px;">
            <div class="ventana-body">
                <slot></slot>
            </div>        
        </div>
    </div>        
    <div class='resizable' draggable="true" id="banda">//</div>        
</div>
`
  );
  var x3 = 10;
  var y3 = 10;
  var VentanaXp = class extends Ventana98 {
    constructor() {
      super();
    }
    render() {
      this.pos = {
        x: "",
        y: "",
        ancho: "",
        alto: "",
        bodyMaxAltura: "",
        bodyAltura: ""
      };
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.winxp}">
            <link rel="stylesheet" href="${config.w3css}">
            <style>${style4}</style>
            ${template14}            
        `;
      this.classList.add("animate__animated");
      this.style.width = "500px";
      this.style.height = "200px";
      this.style.position = "absolute";
      this.style.zIndex = "" + getZindex();
      this.style.left = x3 + "px";
      this.style.top = y3 + "px";
      x3 += 10;
      y3 += 10;
      this.setAttribute("id", "win_" + getId());
      this.style.display = "none";
      this.beforeClose = null;
    }
    set activo(val) {
      this._activo = val;
      const m_activo = this.getAttribute("activo");
      if (m_activo == 0 && val == 0 || m_activo == null) {
        return;
      }
      const barraTitulo = this.shadowRoot.querySelector("#barra-titulo");
      const ventana = this.shadowRoot.querySelector("#ventana");
      this.style.zIndex = "" + getZindex();
      this.removeActivo(this.getAttribute("id"));
      barraTitulo.classList.remove(configDesk.colorVentanaInactiva);
      barraTitulo.classList.add(configDesk.colorVentanaActiva);
      ventana.classList.add(this.getClassWin());
      this.setBandejaActivo(this.getAttribute("id"));
      ventana.classList.remove("ventana_no_activa");
    }
    get activo() {
      return super.activo();
    }
    getClassWin() {
      return "win-" + configDesk.colorVentanaActiva.replace("w3-", "");
    }
  };
  customElements.define("x-window-xp", VentanaXp);

  // src/vanilla/ventanas/ventana-mac.js
  init_config();
  var style5 = (
    /*css*/
    `
.ventana {
    position: absolute;  
}
.resizable {  
    position: absolute;
    right: 2px;
    bottom: 0px;
    color: black;
    font-size: xx-small;
    cursor: se-resize;
  }
.ventana_no_activa {    
    filter: grayscale(1);
}

.w3-red {
    color: black!important;
    background: linear-gradient(90deg,#ebebeb, #d5d5d5)!important;
}
.w3-green {
    color: black!important;
    background: linear-gradient(90deg,#ebebeb, #d5d5d5)!important;
}
.w3-blue {
    color: black!important;
    background: linear-gradient(90deg,#ebebeb, #d5d5d5)!important;
}
.w3-purple {
    color: black!important;
    background: linear-gradient(90deg,#ebebeb, #d5d5d5)!important;
}
.w3-deep-orange {
    color: black!important;
    background: linear-gradient(90deg,#ebebeb, #d5d5d5)!important;
}
.w3-brown {
    color: black!important;
    background: linear-gradient(90deg,#ebebeb, #d5d5d5)!important;
}
.w3-pink {
    color: black!important;
    background: linear-gradient(90deg,#ebebeb, #d5d5d5)!important;
}
.w3-teal {
    color: black!important;
    background: linear-gradient(90deg,#ebebeb, #d5d5d5)!important;
}
.w3-blue-grey {
    color: black!important;
    background: linear-gradient(90deg,#ebebeb, #d5d5d5)!important;
}
.ventana-body{
    width: 100%;
}

.buttons {
    margin-left: 8px;
    margin-top: 3px;
    float: left;
    line-height: 0px;
}

.buttons:hover a {
    visibility: visible;
}

.close {
    background: #ff5c5c;
    font-size: 9pt;
    width: 11px;
    height: 11px;
    border: 1px solid #e33e41;
    border-radius: 50%;
    display: inline-block;
}

.close div:before{    
    content: 'x';      
    float: left;
    padding-top: 4px;
    padding-left: 2px;
    visibility: hidden;
}

.close:hover div:before{    
    visibility: visible;
}

.close:active {
    background: #c14645;
    border: 1px solid #b03537;
}

.minimize {
    background: #ffbd4c;
    font-size: 9pt;
    line-height: 11px;
    margin-left: 4px;
    width: 11px;
    height: 11px;
    border: 1px solid #e09e3e;
    border-radius: 50%;
    display: inline-block;
}

.minimize div:before{    
    content: '-';      
    float: left;    
    visibility: hidden;
}

.minimize:hover div:before{    
    visibility: visible;
}

.minimize:active {
    background: #c08e38;
    border: 1px solid #af7c33;
}

.zoom {
    background: #00ca56;
    font-size: 9pt;
    line-height: 11px;
    margin-left: 6px;
    width: 11px;
    height: 11px;
    border: 1px solid #14ae46;
    border-radius: 50%;
    display: inline-block;
}

.zoom div:before{    
    content: '+';      
    float: left;    
    visibility: hidden;
}

.zoom:hover div:before{    
    visibility: visible;
}

.zoom:active {
    background: #029740;
    border: 1px solid #128435;
}

.window {
    background: #f0f0f0;
    width: 50vw;
    height: 75vh;
    margin: auto;
    border: 1px solid #acacac;
    border-radius: 6px;    
}

.ventana-activa {
    box-shadow: 0px 0px 5px #acacac;
}
.title-bar {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 100%;
    height: 24px;
}
`
  );
  var template15 = (
    /*html*/
    `
<div class="content-win animate__animated">
    <div class="window ventana" id="ventana" draggable="true">
        <div class="title-bar" id="barra-titulo">
            <div class="buttons">
                <div class="close" id="close">
                    <div></div>          
                </div>
                <div class="minimize" id="minimizar">                    
                <div></div>
                </div>
                <div class="zoom" id="maximizar">                    
                <div></div>
                </div>
            </div>
            <div id="titulo" style="float: left; display: block; text-align: center; width: 213px">CSS OS X Yosemite Window</div>        
        </div>
        <div class="window-body ventana-contenedor">
            <div class="ventana-body">
                <slot></slot>
            </div>   
        </div>
    </div>
    <div class='resizable' draggable="true" id="banda">//</div> 
</div>
`
  );
  var x4 = 10;
  var y4 = 10;
  var VentanaMac = class extends Ventana98 {
    constructor() {
      super();
    }
    render() {
      this.pos = {
        x: "",
        y: "",
        ancho: "",
        alto: "",
        bodyMaxAltura: "",
        bodyAltura: ""
      };
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">          
            <style>${style5}</style>
            ${template15}            
        `;
      this.classList.add("animate__animated");
      this.style.width = "500px";
      this.style.height = "200px";
      this.style.position = "absolute";
      this.style.zIndex = "" + getZindex();
      this.style.left = x4 + "px";
      this.style.top = y4 + "px";
      let titulo = this.shadowRoot.querySelector("#titulo");
      titulo.style.width = "430px";
      x4 += 10;
      y4 += 10;
      this.setAttribute("id", "win_" + getId());
      this.style.display = "none";
      this.beforeClose = null;
    }
    set activo(val) {
      super.activo = val;
      const m_activo = this.getAttribute("activo");
      if (m_activo == 0 && val == 0 || m_activo == null) {
        return;
      }
      const ventana = this.shadowRoot.querySelector("#ventana");
      ventana.classList.add("ventana-activa");
      ventana.classList.remove("ventana_no_activa");
    }
    get activo() {
      return super.activo;
    }
    getClassWin() {
      return "win-" + configDesk.colorVentanaActiva.replace("w3-", "");
    }
    maximizar() {
      super.maximizar();
      const padre = this;
      const ancho = padre.style.width;
      const titulo = this.shadowRoot.querySelector("#titulo");
      titulo.style.width = `${padre.offsetWidth - 70}px`;
    }
    setSizeVentana(ancho, alto) {
      if (!this.shadowRoot) {
        return;
      }
      const win = this.shadowRoot.querySelector(".content-win");
      const ventana = this.shadowRoot.querySelector("#ventana");
      const contenido = this.shadowRoot.querySelector(".window-body");
      this.setsize(this, ancho, alto);
      this.setsize(win, ancho, alto);
      this.setsize(ventana, ancho, alto);
      this.setsize(contenido, ancho, alto);
      const titulo = this.shadowRoot.querySelector("#titulo");
      titulo.style.width = `${ancho - 150}px`;
    }
  };
  customElements.define("x-window-mac", VentanaMac);

  // src/vanilla/bandeja.js
  init_config();
  var style6 = (
    /*css*/
    `

`
  );
  var template16 = (
    /*html*/
    `
<div style="display: flex;">
        <div class="w3-button w3-blue w3-hover-grey w3-round">Purple</div>
        <div class="w3-button w3-grey w3-round">Purple</div>
</div>
`
  );
  var Bandeja = class extends HTMLElement {
    constructor() {
      super();
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style6}</style>
            ${template16}
        `;
      this.addApps();
      this.observaDesk();
      this.observaSizeHtml();
    }
    /**
     * Observa los cambios de la ventana.
     */
    observaSizeHtml() {
      window.addEventListener("resize", this.emiteResizeVentanas.bind(this));
    }
    /**
     * Emite el cambio a todas las ventanas.
     */
    emiteResizeVentanas() {
      const desk3 = document.querySelector(".escritorio");
      const ventanas = desk3.querySelectorAll("x-window, x-window-98, x-window-xp, x-window-mac");
      for (let win of ventanas) {
        win.emiteSize();
      }
    }
    addApps() {
      const desk3 = document.querySelector(".escritorio");
      const ventanas = desk3.querySelectorAll("x-window, x-window-98, x-window-xp, x-window-mac");
      const div2 = this.shadowRoot.querySelector("div");
      div2.innerHTML = "";
      for (let win of ventanas) {
        const titulo = win.getAttribute("titulo");
        const id2 = win.getAttribute("id");
        let color = "w3-grey";
        if (win.getAttribute("activo") == 1) {
          color = configDesk.colorVentanaActiva;
        }
        div2.innerHTML += `<div id="${id2}" class="w3-button ${color} w3-round">${titulo}</div>`;
      }
      this.addListener();
    }
    setActivo(id2) {
      this.removeActivo(id2);
      let btn = this.shadowRoot.querySelector("#" + id2);
      if (!btn)
        return;
      btn.classList.remove("w3-grey");
      btn.classList.add(configDesk.colorVentanaActiva);
      btn.classList.add("w3-hover-indigo");
    }
    /**
     * Eventos para Windows
     * @param {KeyboardEvent} e 
     */
    listenerWindows(e) {
      if (e.metaKey && e.code == "KeyA") {
        this.emiteAyudaEnVentanaActiva();
      }
      if (e.metaKey && e.code == "KeyY") {
        this.activaSiguienteVentana();
      }
      if (e.metaKey && e.code == "KeyW") {
        this.cierraActiva();
      }
      if (e.metaKey && e.code == "KeyN") {
        this.emiteNuevoEnVentanaActiva();
      }
      if (e.metaKey && e.code == "KeyG") {
        this.emiteGuardarEnVentanaActiva();
      }
      if (e.code == "F2") {
        this.emiteEditarEnVentanaActiva();
      }
    }
    /**
     * Eventos para Linux
     * @param {KeyboardEvent} e 
     */
    listenerLinux(e) {
      if (e.ctrlKey && e.altKey && e.code == "KeyA") {
        this.emiteAyudaEnVentanaActiva();
      }
      if (e.ctrlKey && e.altKey && e.code == "KeyY") {
        this.activaSiguienteVentana();
      }
      if (e.ctrlKey && e.altKey && e.code == "KeyW") {
        this.cierraActiva();
      }
      if (e.ctrlKey && e.altKey && e.code == "KeyN") {
        this.emiteNuevoEnVentanaActiva();
      }
      if (e.ctrlKey && e.altKey && e.code == "KeyG") {
        this.emiteGuardarEnVentanaActiva();
      }
      if (e.code == "F2") {
        this.emiteEditarEnVentanaActiva();
      }
    }
    addListener() {
      let botones = this.shadowRoot.querySelectorAll(".w3-button");
      for (let btn of botones) {
        btn.addEventListener("click", this.swapMinimize.bind(this));
      }
      const that = this;
      let plataforma = navigator.platform;
      document.onkeyup = function(e) {
        if (plataforma.indexOf("Windows") >= 0) {
          that.listenerWindows(e);
        }
        if (plataforma.indexOf("Linux") >= 0) {
          that.listenerLinux(e);
        }
      };
    }
    cierraActiva() {
      let win = this.getVentanaActiva();
      if (win) {
        win.cierraVentana();
      }
    }
    getVentanaActiva() {
      let ventanas = document.querySelectorAll("x-window, x-window-98, x-window-xp");
      for (let win of ventanas) {
        if (win.getAttribute("activo") == 1) {
          return win;
        }
      }
      return null;
    }
    emiteEditarEnVentanaActiva() {
      let win = this.getVentanaActiva();
      if (win) {
        win.emiteEditar();
      }
    }
    emiteGuardarEnVentanaActiva() {
      let win = this.getVentanaActiva();
      if (win) {
        win.emiteGuardar();
      }
    }
    emiteNuevoEnVentanaActiva() {
      let win = this.getVentanaActiva();
      if (win) {
        win.emiteNuevo();
      }
    }
    emiteAyudaEnVentanaActiva() {
      let win = this.getVentanaActiva();
      if (win) {
        win.emiteAyuda();
      }
    }
    activaSiguienteVentana() {
      let ventanas = document.querySelectorAll("x-window, x-window-98, x-window-xp");
      if (ventanas.length == 1) {
        ventanas[0].setAttribute("activo", 1);
        return;
      }
      let i = 0;
      const n = ventanas.length;
      for (let win of ventanas) {
        if (win.getAttribute("activo") == 1) {
          ventanas[(i + 1) % n].setAttribute("activo", 1);
          return;
        }
        i++;
      }
      if (ventanas.length > 0) {
        ventanas[0].setAttribute("activo", 1);
      }
    }
    removeActivo(id2) {
      let botones = this.shadowRoot.querySelectorAll(".w3-button");
      for (let btn of botones) {
        let win = document.querySelector("#" + btn.getAttribute("id"));
        btn.classList.remove(configDesk.colorVentanaActiva);
        btn.classList.add("w3-grey");
        btn.classList.remove("w3-hover-indigo");
        if (win.id !== id2) {
          win.setAttribute("activo", 0);
        }
      }
    }
    swapMinimize(ev) {
      const id2 = ev.target.getAttribute("id");
      let win = document.querySelector("#" + id2);
      const activo = win.getAttribute("activo");
      if (activo != "1") {
        win.setAttribute("activo", 1);
        return;
      }
      this.removeActivo(win.id);
      if (win.classList.contains("animate__zoomOutDown")) {
        win.classList.remove("animate__zoomOutDown");
        win.classList.add("animate__zoomInUp");
        win.setAttribute("activo", 1);
      } else {
        win.classList.remove("animate__zoomInUp");
        win.classList.add("animate__zoomOutDown");
      }
    }
    observaDesk() {
      const obj = this;
      const desk3 = document.querySelector(".escritorio");
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          obj.addApps();
        });
      });
      var config2 = { childList: true };
      observer.observe(desk3, config2);
    }
    connectedCallback() {
      this.render();
    }
    disconnectedCallback() {
      console.log("Unmounted!");
    }
  };
  customElements.define("x-bandeja", Bandeja);

  // src/vanilla/Fecha.js
  var Fecha = class extends Date {
    constructor() {
      super();
    }
    /**
     * Metodo que regresa el formato en HH:MM a.m.|p.m.
     */
    toTimeString() {
      let minutos = ("0" + this.getMinutes()).substr(-2);
      let hora = this.getHours();
      hora = hora <= 12 ? hora : hora - 12;
      let horas = ("0" + hora).substr(-2);
      let isAm = this.getHours() > 12 ? "p.m." : "a.m.";
      return `${horas}:${minutos} ${isAm}`;
    }
  };

  // src/vanilla/reloj.js
  var Reloj = class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      setInterval(() => {
        this.innerHTML = new Fecha().toTimeString();
      }, 1e3);
    }
  };
  customElements.define("x-reloj", Reloj);

  // src/vanilla/ui/ui.js
  var import_consola_js = __toESM(require_consola_js());

  // src/vanilla/ui/menu-aero/menu-aero.js
  init_config();
  var style7 = (
    /*css*/
    `
.cuadro-aero {
    padding: 2px;
    float: left;
    cursor: pointer;
}
.cuadro-aero:hover {
    filter: invert(25%);
}
.padding-cuadro{
    padding: 30%;
}
.cuadro {
    height: 150px;
    width: 150px;
}

`
  );
  var MenuAero = class extends HTMLElement {
    constructor() {
      super();
      this.menus = [
        {
          nombre: "Grupos",
          icono: "users",
          color: "w3-indigo"
        },
        {
          nombre: "Usuario",
          icono: "user-circle",
          color: "w3-red"
        }
      ];
      this.render();
      this.setMenu(this.menus);
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style7}</style>
            <div class="w3-block">
                <div menu-content></div>
            </div>
        `;
    }
    getIcono(menu) {
      if (menu.imagen) {
        return `
            <img src="${menu.imagen}" style="width: 115px;" class="w3-round w3-left w3-border">
            `;
      }
      return `        
            <div class="w3-center padding-cuadro">
                <i class="fa fa-${menu.icono} w3-xlarge"></i>
            </div>
        
        `;
    }
    creaMenu(menu) {
      let div2 = document.createElement("div");
      div2.innerHTML = `
        <div class="cuadro w3-container w3-cell w3-cell-bottom ${menu.color}">            
            ${this.getIcono(menu)}            
            <div>
                ${menu.nombre}
            </div>
        </div>
        `;
      div2.classList.value = "cuadro-aero";
      div2.addEventListener("dblclick", (ev) => {
        this.emiteSelectOpcion(menu);
      });
      return div2;
    }
    emiteSelectOpcion(menu) {
      this.dispatchEvent(
        new CustomEvent("select", {
          detail: {
            menu,
            select: true
          }
        })
      );
    }
    setMenu(menus) {
      let contenedor = this.shadowRoot.querySelector("[menu-content]");
      this.menus = menus;
      contenedor.innerHTML = "";
      for (let menu of menus) {
        contenedor.appendChild(this.creaMenu(menu));
      }
    }
  };
  customElements.define("x-menu-aero", MenuAero);

  // src/vanilla/ui/menu-android/menu-android.js
  init_config();
  var style8 = (
    /*css*/
    `
.menu {
    height: 100px;
    width: 150px;    
    cursor: pointer;    
}

.menu:hover {
    filter: invert(25%);
}

`
  );
  var MenuAndroid = class extends MenuAero {
    constructor() {
      super();
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style8}</style>
            <div class="w3-block">
                <div menu-content></div>
            </div>
        `;
    }
    creaMenu(menu) {
      let div2 = document.createElement("div");
      div2.innerHTML = `
        <div class="w3-button w3-xlarge w3-circle ${menu.color}">
            <i class="fa fa-${menu.icono} w3-xlarge"></i>
        </div>
    	<div class="w3-tiny w3-padding">
            ${menu.nombre}
        </div>        
        `;
      div2.classList.value = "w3-container w3-cell w3-cell-bottom w3-center w3-left menu";
      div2.addEventListener("dblclick", (ev) => {
        this.emiteSelectOpcion(menu);
      });
      return div2;
    }
  };
  customElements.define("x-menu-android", MenuAndroid);

  // src/vanilla/ui/menu-iphone/menu-iphone.js
  init_config();
  var style9 = (
    /*css*/
    `
.menu {
    height: 100px;
    width: 150px;    
    cursor: pointer;    
}

.menu:hover {
    filter: invert(25%);
}

.icono{
    border-radius: 5px;
}

`
  );
  var MenuIphone = class extends MenuAero {
    constructor() {
      super();
    }
    render() {
      console.log(style9);
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style9}</style>
            <div class="w3-block">
                <div menu-content></div>
            </div>
        `;
    }
    creaMenu(menu) {
      let div2 = document.createElement("div");
      div2.innerHTML = `
        <div class="w3-button w3-xlarge ${menu.color} icono">
            <i class="fa fa-${menu.icono} w3-xlarge"></i>
        </div>
    	<div class="w3-tiny w3-padding">
            ${menu.nombre}
        </div>        
        `;
      div2.classList.value = "w3-container w3-cell w3-cell-bottom w3-center w3-left menu";
      div2.addEventListener("dblclick", (ev) => {
        this.emiteSelectOpcion(menu);
      });
      return div2;
    }
  };
  customElements.define("x-menu-iphone", MenuIphone);

  // src/vanilla/ui/menu-windows/menu-windows.js
  init_config();
  var style10 = (
    /*css*/
    `
.menu {
    height: 80px;
    width: 230px;    
    cursor: pointer;
    border-radius: 5px;
}

.menu:hover {
    filter: invert(25%);
    border: 1px solid;
}

.icono{
    border-radius: 5px;    
}

`
  );
  var MenuWindows = class extends MenuAero {
    constructor() {
      super();
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style10}</style>
            <div class="w3-block">
                <div menu-content></div>
            </div>
        `;
    }
    getIcono(menu) {
      if (menu.imagen) {
        return `<img src="${menu.imagen}" style="width: 50px;" class="w3-round w3-left">`;
      }
      return `
        <div class="w3-button w3-xlarge ${menu.color} icono w3-left">
            <i class="fa fa-${menu.icono} w3-xlarge"></i>
        </div>
        `;
    }
    creaMenu(menu) {
      let div2 = document.createElement("div");
      div2.innerHTML = `
        ${this.getIcono(menu)}
    	<div class="w3-left w3-padding w3-tiny">
            ${menu.nombre}
        </div>        
        `;
      div2.classList.value = "w3-container w3-left menu w3-padding";
      div2.addEventListener("dblclick", (ev) => {
        this.emiteSelectOpcion(menu);
      });
      return div2;
    }
  };
  customElements.define("x-menu-windows", MenuWindows);

  // src/vanilla/ui/x-iframe/x-iframe.js
  var XIframe = class extends HTMLElement {
    constructor() {
      super();
      this.padre = null;
      this.overIframe = false;
      this.render();
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `            
        <iframe allowfullscreen></iframe>
        `;
      const padre = this.parentNode;
      const iframe2 = shadowRoot2.querySelector("iframe");
      iframe2.style.position = "absolute";
      iframe2.style.top = "38px";
    }
    connectedCallback() {
      if (!this.hasAttribute("otropadre")) {
        this.cargaDefualPadre();
      }
    }
    cargaDefualPadre() {
      let padre = this.parentNode;
      this.observaPadre(padre);
    }
    static get observedAttributes() {
      return ["src"];
    }
    attributeChangedCallback(name, oldVal, newVal) {
      this[name] = newVal;
    }
    set src(val) {
      const iframe2 = this.shadowRoot.querySelector("iframe");
      iframe2.src = val;
    }
    get src() {
      return iframe.src;
    }
    setPadre(padre) {
      this.observaPadre(padre);
    }
    observaPadre(padre) {
      const iframe2 = this.shadowRoot.querySelector("iframe");
      const config2 = { attributes: true };
      var observer = new MutationObserver(function(mutations) {
        iframe2.style.width = "calc(100% - 12px)";
        iframe2.style.height = padre.clientHeight - 45 + "px";
      });
      observer.observe(padre, config2);
    }
  };
  customElements.define("x-iframe", XIframe);

  // src/vanilla/ui/paginador/Paginador-files.js
  init_config();
  var template17 = (
    /*html*/
    `
<div>    
    <div class="w3-row">
        <div class="w3-col s8 m8" style="max-height: 100vh; overflow-y: auto; width: 65%; margin: 2px;">
        <h1 class="w3-xxlarge" id="titulo">Titulo</h1>
        <div class="file-container">            
        </div>
        </div>
        <div class="w3-col s4 m4" id="vistaPrevia" 
            style="overflow: auto; max-height: 100vh; height:100vh; width: 32%;"> 
        </div>
    </div>    
</div>
`
  );
  var style11 = (
    /*css*/
    `
.img_pag{
    width: 80px;
    height: 80px;
}

.file-container {
    display: flex;
    flex-wrap: wrap;    
}

.file-select {
    border: solid 1px #2196F3;
    border-radius: 5px;
    background: beige;
}
  
.file-container > div {
width: 90px;
margin: 5px;
text-align: center;
}
`
  );
  var PaginadorFiles = class extends HTMLElement {
    constructor() {
      super();
      this.lista = [];
      this.getTipoImagen = null;
      this.render();
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
        <link rel="stylesheet" href="${config.w3css}">
        <style>${style11}</style>
        ${template17}
        `;
      this.el = shadowRoot2.querySelector("div");
      this.vistaPrevia = shadowRoot2.querySelector("#vistaPrevia");
      this.fileContainer = shadowRoot2.querySelector(".file-container");
      this.titulo = shadowRoot2.querySelector("#titulo");
      this.titulo.innerHTML = this.getAttribute("titulo");
    }
    quitarSelecionado() {
      for (let item of this.fileContainer.children) {
        item.classList.remove("file-select");
      }
    }
    getImagen(item) {
      if (this.getTipoImagen) {
        return this.getTipoImagen(item);
      }
      return "./img/icon/text-file-icon.svg";
    }
    addFile(item) {
      let div2 = document.createElement("div");
      div2.innerHTML = /*html*/
      `
            <img class="img_pag" src="${this.getImagen(item)}"><br>
            ${item.nombre}
        `;
      div2.id = item.id;
      div2.addEventListener("click", (e) => {
        this.quitarSelecionado();
        this.vistaPrevia.innerHTML = `            
            <${this.getAttribute("vista-previa")}></${this.getAttribute("vista-previa")}>`;
        const vista = this.vistaPrevia.querySelector(this.getAttribute("vista-previa"));
        div2.classList.add("file-select");
        this.emiteOnVistaPrevia(item, vista);
      });
      div2.addEventListener("dblclick", (e) => {
        this.emiteOpenItem(item);
      });
      this.fileContainer.appendChild(div2);
    }
    emiteOnVistaPrevia(item, vistaPrevia) {
      this.dispatchEvent(
        new CustomEvent("onVistaPrevia", {
          detail: {
            item,
            vistaPrevia
          }
        })
      );
    }
    setLista(lista4) {
      this.fileContainer.innerHTML = "";
      this.lista = lista4;
      for (let item of lista4) {
        this.addFile(item);
      }
    }
    setGetTipoImagen(getTipoImagen) {
      this.getTipoImagen = getTipoImagen;
    }
    emiteOpenItem(item) {
      this.dispatchEvent(
        new CustomEvent("onOpenItem", {
          detail: {
            item
          }
        })
      );
    }
  };
  customElements.define("x-paginador-files", PaginadorFiles);

  // src/vanilla/ui/x-codigo/x-codigo.js
  init_config();

  // src/vanilla/ui/x-codigo/listas-hints/lista-editor-css.js
  var hintsCSS = [
    {
      "text": `.clase {
    
}`,
      "displayText": "clase"
    },
    //pseudo elementos    
    {
      "text": `::first-line`,
      "displayText": "::first-line"
    },
    {
      "text": `::first-letter`,
      "displayText": "::first-letter"
    },
    {
      "text": `::first-line`,
      "displayText": "::first-line"
    },
    {
      "text": `::before`,
      "displayText": "::before"
    },
    {
      "text": `::after`,
      "displayText": "::after"
    },
    {
      "text": `::selection`,
      "displayText": "::selection"
    },
    //pseudo clases
    {
      "text": `:active`,
      "displayText": ":active"
    },
    {
      "text": `:checked`,
      "displayText": ":checked"
    },
    {
      "text": `:disabled`,
      "displayText": ":disabled"
    },
    {
      "text": `:empty`,
      "displayText": ":empty"
    },
    {
      "text": `:enabled`,
      "displayText": ":enabled"
    },
    {
      "text": `:first-child`,
      "displayText": ":first-child"
    },
    {
      "text": `:first-of-type`,
      "displayText": ":first-of-type"
    },
    {
      "text": `:focus`,
      "displayText": ":focus"
    },
    {
      "text": `:hover`,
      "displayText": ":hover"
    },
    {
      "text": `:in-range`,
      "displayText": ":in-range"
    },
    {
      "text": `:invalid`,
      "displayText": ":invalid"
    },
    {
      "text": `:last-child`,
      "displayText": ":last-child"
    },
    {
      "text": `:last-of-type`,
      "displayText": ":last-of-type"
    },
    {
      "text": `:link`,
      "displayText": ":link"
    },
    {
      "text": `:optional`,
      "displayText": ":optional"
    },
    {
      "text": `:out-of-range`,
      "displayText": ":out-of-range"
    },
    {
      "text": `:read-only`,
      "displayText": ":read-only"
    },
    {
      "text": `:read-write`,
      "displayText": ":read-write"
    },
    {
      "text": `:required`,
      "displayText": ":required"
    },
    {
      "text": `:root`,
      "displayText": ":root"
    },
    {
      "text": `:target`,
      "displayText": ":target"
    },
    {
      "text": `:valid`,
      "displayText": ":valid"
    },
    {
      "text": `:visited`,
      "displayText": ":visited"
    },
    //propiedades    
    {
      "text": `border: 2px solid yellow;`,
      "displayText": "border"
    },
    {
      "text": `width: 300px;`,
      "displayText": "width"
    },
    {
      "text": `height: 300px;`,
      "displayText": "height"
    },
    {
      "text": `background: red;`,
      "displayText": "background"
    },
    {
      "text": `transition: width 2s, height 4s;`,
      "displayText": "transition"
    },
    {
      "text": `transition-delay: 1s;`,
      "displayText": "transition-delay"
    },
    {
      "text": `@keyframes example {
    0%   {background-color:red;}
    25%  {background-color:yellow;}
    50%  {background-color:blue;}
    75%  {background-color:green;}
    100% {background-color:red;}
}`,
      "displayText": "keyframes"
    },
    //queries responsivos
    {
      "text": `@media screen and (max-width: 600px){}`,
      "displayText": "query celular"
    },
    {
      "text": `@media screen and (max-width: 900px){}`,
      "displayText": "query tablet"
    },
    {
      "text": `@media screen and (min-width: 901px){}`,
      "displayText": "query pc"
    }
  ];
  function getHitsCss() {
    return hintsCSS;
  }

  // src/vanilla/ui/x-codigo/listas-hints/lista-editor-js.js
  var definicionesClaseBase = {
    "Any": {
      "!type": "Object",
      "!doc": "Representa cualquier tipo de dato."
    },
    "ClaseComponente": {
      "!type": "fn() -> Object",
      "!doc": "Base para crear los Clases de Componentes",
      "constructor": {
        "!type": "fn()",
        "!doc": "Declara las variables y atributos del componente"
      },
      "init": {
        "!type": "fn()",
        "!doc": "Funcion para inicializar el componente, se llama en la creacion del componente"
      },
      "mount": {
        "!type": "fn()",
        "!doc": "Funcion que se llama cada vez que se monta en el DOM el componente"
      },
      "unmount": {
        "!type": "fn()",
        "!doc": "Funcion que se llama cada vez que se desmonta en el DOM el componente"
      }
    },
    "constructor": {
      "!type": "fn()",
      "!doc": "Declara las variables y atributos del componente"
    },
    "init": {
      "!type": "fn()",
      "!doc": "Funcion para inicializar el componente, se llama en la creacion del componente"
    },
    "mount": {
      "!type": "fn()",
      "!doc": "Funcion que se llama cada vez que se monta en el DOM el componente"
    },
    "unmount": {
      "!type": "fn()",
      "!doc": "Funcion que se llama cada vez que se desmonta en el DOM el componente"
    },
    "$DefineClaseDelComponente": {
      "!type": "fn(clase: Object) -> void",
      "!doc": "Funcion que define la clase del componente. Uso $DefineClaseDelComponente(MiComponente)."
    },
    "$DefineAtributo": {
      "!type": "fn() -> Any",
      "!doc": "Declara un atributo. Uso this.color = $DefineAtributo();"
    },
    "$DefineVariable": {
      "!type": "fn(valor: ?) -> Any",
      "!doc": "Declara una variable. Uso this.lista = $DefineVariable([]);"
    },
    "$DefineDomItem": {
      "!type": "fn(selector: string) -> HTMLElement",
      "!doc": "Define una instancia al elemento del componente definido por el selector. Uso this.lista = $DefineDomItem('h1')"
    }
  };

  // src/vanilla/ui/x-codigo/x-codigo.js
  var style12 = (
    /*css*/
    `
.principal {
    height: 100%;
    width: 100%;
}

.CodeMirror {
    font-family: monospace;
    height: 100%;  
    font-size: var(--size-font);
    direction: ltr;
}
`
  );
  var styleVariable = (
    /*css*/
    `
.variable {    
    --size-font: 12px;
}
`
  );
  var xCodigo = class extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `           
            <link rel="stylesheet" href="${config.codeMirror.showhint}">
            <link rel="stylesheet" href="${config.codeMirror.main}">
            <link rel="stylesheet" href="${config.codeMirror.ambiance}">
            <link rel="stylesheet" href="${config.codeMirror.darcula}">
            <link rel="stylesheet" href="${config.codeMirror.material}">
            <link rel="stylesheet" href="${config.codeMirror.mbo}">
            <link rel="stylesheet" href="${config.codeMirror.neo}">
            <link rel="stylesheet" href="${config.codeMirror.solarized}">
            <link rel="stylesheet" href="./css/one-dark.css">
            <link rel="stylesheet" href="./css/vscode-dark.css">
            <link rel="stylesheet" href="${config.codeMirror.dialog}">                        
            <link rel="stylesheet" href="${config.codeMirror.tern}">            
            <style>${style12}</style>
            <style id="config">${styleVariable}</style>
            <div style="float: left">
            Tema
            <select>
            <option value="one-dark">atom</option>
            <option value="ambiance">ambiance</option>
            <option value="darcula">darcula</option>
            <option value="default" selected>default</option>            
            <option value="material">material</option>
            <option value="mbo">mbo</option>
            <option value="neo">neo</option>            
            <option value="solarized dark">solarized dark</option>
            <option value="solarized light">solarized light</option>                            
            <option value="vscode-dark">visual studio</option>                            
            
            </select>
            </div>
            <div style="float: right">
                <button title="Ayuda" id="ayuda"> ? </button>
            </div>
            <div style="float: right">
            Tama\xF1o letra
            <input type="number" value="10" min="10" max="50">
            </div>
            <div class="variable principal" style="float: left">
                <textarea class="editor"></textarea>                    
            </div>
        `;
      let textarea = shadowRoot2.querySelector(".editor");
      this.configEstilo = shadowRoot2.querySelector("#config");
      let modo = this.getAttribute("modo");
      modo = modo ? modo : "javascript";
      let contenedor = this.shadowRoot.querySelector(".principal");
      this.editor = CodeMirror.fromTextArea(textarea, {
        lineNumbers: true,
        matchBrackets: true,
        continueComments: "Enter",
        extraKeys: {
          "Ctrl-Space": () => {
            this.addAutocompletar();
          },
          "Ctrl-Q": "toggleComment"
        },
        mode: modo,
        theme: "default",
        tabSize: 4,
        smartIndent: false,
        hintOptions: {
          container: contenedor
        }
      });
      const codigo2 = this.getAttribute("codigo");
      if (codigo2 != null) {
        this.setCodigo(codigo2);
      }
      if (modo == "javascript") {
        this.agregarTern();
      } else {
        this.addAutocompletar();
      }
      this.addListeners();
    }
    get value() {
      return this.getCodigo();
    }
    agregarTern() {
      let server;
      fetch("https://ternjs.net/node_modules/tern/defs/ecmascript.json").then((data2) => data2.text()).then((text) => {
        server = new CodeMirror.TernServer({ defs: [JSON.parse(text), definicionesClaseBase] });
        this.editor.setOption("extraKeys", {
          "Ctrl-Space": function(cm) {
            server.complete(cm);
          },
          "Ctrl-I": function(cm) {
            server.showType(cm);
          },
          "Ctrl-O": function(cm) {
            server.showDocs(cm);
          },
          "Alt-.": function(cm) {
            server.jumpToDef(cm);
          },
          "Alt-,": function(cm) {
            server.jumpBack(cm);
          },
          "Ctrl-Q": function(cm) {
            server.rename(cm);
          },
          "Ctrl-.": function(cm) {
            server.selectName(cm);
          }
        });
        this.editor.on("cursorActivity", function(cm) {
          server.updateArgHints(cm);
        });
      });
    }
    addAutocompletar() {
      let listaAutocomletado = [];
      let hint = this.getAttribute("hint");
      if (hint == "editor-css") {
        listaAutocomletado = getHitsCss();
      }
      let editor = this.editor;
      let contenedor = this.shadowRoot.querySelector(".principal");
      CodeMirror.showHint(editor, function() {
        let cursor = editor.getCursor();
        let token = editor.getTokenAt(cursor);
        let start = token.start;
        let end = cursor.ch;
        let line = cursor.line;
        let currentWord = token.string;
        let extraEspacios = 0;
        let list = listaAutocomletado.filter(function(item) {
          return item.displayText.trim().indexOf(currentWord) == 0;
        });
        return {
          list: list.length ? list : listaAutocomletado,
          from: CodeMirror.Pos(line, start + extraEspacios),
          to: CodeMirror.Pos(line, end)
        };
      }, {
        completeSingle: false,
        container: contenedor
      });
    }
    connectedCallback() {
      let tema = this.getAttribute("tema");
      if (tema) {
        this.setTema(tema);
      }
    }
    setFontSize(size) {
      this.configEstilo.innerHTML = `
            .variable {    
                --size-font: ${size}px;
            }
        ;`;
      this.setCodigo(this.editor.getValue());
    }
    setTema(tema) {
      let select = this.shadowRoot.querySelector("select");
      select.value = tema;
      this.editor.setOption("theme", tema);
    }
    addListeners() {
      let select = this.shadowRoot.querySelector("select");
      select.addEventListener("change", (data2) => {
        this.editor.setOption("theme", select.value);
      });
      this.editor.on("change", (data2) => {
        this.emiteChange(data2.getValue());
      });
      let input = this.shadowRoot.querySelector("input");
      input.addEventListener("change", (data2) => {
        this.setFontSize(input.value);
      });
      let that = this;
      this.editor.on("keyup", function(cm, event) {
        if (event.key == "$") {
          that.addAutocompletar();
        }
      });
      let ayuda = this.shadowRoot.querySelector("#ayuda");
      ayuda.addEventListener("click", (e) => {
        console.log(this.getAttribute("ayuda"));
      });
    }
    emiteChange(code) {
      let event = new CustomEvent("changeCode", {
        detail: {
          code
        }
      });
      this.dispatchEvent(event);
    }
    getCodigo() {
      return this.editor.getValue();
    }
    setCodigo(code) {
      this.editor.setValue(code);
    }
    actualiza() {
      this.setCodigo(this.getCodigo());
      let select = this.shadowRoot.querySelector("select");
      let tema = select.value;
      let tem = tema == "default" ? "ambiance" : "default";
      this.setTema(tem);
      setTimeout((ev) => {
        this.setTema(tema);
      }, 1);
    }
    creaNuevoEstilo(nombreEstilo) {
      const estilo = `
.${nombreEstilo}{
}
`;
      this.setCodigo(this.getCodigo() + estilo);
    }
    creaNuevoMetodoJs(nombreMetodo) {
      const metodo = `
        ${nombreMetodo}() {                
        },
`;
      let codigo2 = this.getCodigo();
      let indice = codigo2.indexOf("metodos:");
      let pegarEn = -1;
      for (let i = indice; i < codigo2.length; i++) {
        if (codigo2[i] == "{") {
          pegarEn = i + 1;
          break;
        }
      }
      codigo2 = codigo2.substring(0, pegarEn) + metodo + codigo2.substring(pegarEn, codigo2.length);
      this.setCodigo(codigo2);
    }
  };
  customElements.define("x-codigo", xCodigo);

  // src/vanilla/ui/test-web-component/test-web-component.js
  init_config();
  init_lista_componentes_activos();
  init_db();
  var style13 = `
    .pc, .pc-giro {
        width: 100%;
        height: 100%;
    }
    .tablet {
        width: 719px;
        height: 957px;
        margin-left: 82px;
        margin-top: 97px;
        border-style: solid;
        border-width: 4px;       
    }
    .telefono {        
        width: 339px;
        height: 598px;
        margin-top: 82px;
        margin-left: 38px;
        border-style: solid;
        border-width: 4px;
    }
    .tablet-giro{
        width: 955px;
        height: 715px;
        margin-top: 89px;
        margin-left: 98px;
        border-style: solid;
        border-width: 4px;
    }
    .telefono-giro {
        height: 338px;
        width: 614px;
        margin-top: 42px;
        margin-left: 84px;
        border-style: solid;
        border-width: 4px;    
    }    
    .dispostivo-telefono{
        width: 419px;
        height: 783px;
        margin: auto;
        background-image: url(./img/ide/contenedor/mobil.png);
    }
    .dispostivo-telefono-giro{
        height: 419px;
        width: 800px;
        margin: auto;
        background-image: url(./img/ide/contenedor/mobil-giro.png);
    }
    .dispostivo-tablet{
        width: 887px;
        height: 1160px;
        margin: auto;
        background-image: url(./img/ide/contenedor/tablet.png);
    }
    .dispostivo-tablet-giro{
        width: 1160px;
        height: 887px;
        margin: auto;
        background-image: url(./img/ide/contenedor/tablet-giro.png);
    }
    .dispostivo-pc-giro, .dispostivo-pc{
        width: 100%;
        height: 80vh;
        margin: auto;        
    }
`;
  var TestW3WebComponent = class extends HTMLElement {
    constructor() {
      super();
      this.render();
      this.addListeners();
      this.db = getDB();
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
        <link rel="stylesheet" href="${config.fontAwesome}">
        <link rel="stylesheet" href="${config.w3css}">
        <style>${style13}</style>
        <div class="w3-bar w3-black ">
            <div class="w3-bar-item w3-hover-grey" id="telefono" title="Mobil"><i class="w3-large fa fa-mobile"></i></div>
            <div class="w3-bar-item w3-hover-grey" id="tablet" title="Tablet"><i class="w3-large fa fa-tablet"></i></div>
            <div class="w3-bar-item w3-hover-grey w3-white" id="pc" title="Escritorio"><i class="w3-large fa fa-desktop"></i></div>
            <div class="w3-bar-item w3-hover-grey" id="rotar" title="Rotar"><i class="w3-large fa fa-undo"></i></div>
        </div>
        <div style="overflow: auto;"> 
            <div class="dispostivo-pc" id="dispositivo">
                <iframe id="contenedor" class="pc">            
                </iframe>
            </div>
        </div>
        `;
    }
    removeActivo() {
      let items = this.shadowRoot.querySelectorAll(".w3-bar-item");
      for (let item of items) {
        item.classList.remove("w3-white");
      }
    }
    addListeners() {
      let telefono = this.shadowRoot.querySelector("#telefono");
      let tablet = this.shadowRoot.querySelector("#tablet");
      let pc = this.shadowRoot.querySelector("#pc");
      let rotar = this.shadowRoot.querySelector("#rotar");
      let icono2 = rotar.querySelector("i");
      telefono.addEventListener("click", (ev) => this.setClassIframe(icono2, "telefono", telefono));
      tablet.addEventListener("click", (ev) => this.setClassIframe(icono2, "tablet", tablet));
      pc.addEventListener("click", (ev) => this.setClassIframe(icono2, "pc", pc));
      rotar.addEventListener("click", (ev) => this.rotarContenido(icono2));
    }
    /**
     * Rota los elementos
     * @param {HTMLElement} icono El boton de rotar
     */
    rotarContenido(icono2) {
      let iframe2 = this.shadowRoot.querySelector("#contenedor");
      let dispositivo = this.shadowRoot.querySelector("#dispositivo");
      if (icono2.classList.contains("fa-rotate-90")) {
        icono2.classList.remove("fa-rotate-90");
        iframe2.classList.value = iframe2.classList.value.replace("-giro", "");
        dispositivo.classList.value = dispositivo.classList.value.replace("-giro", "");
      } else {
        icono2.classList.add("fa-rotate-90");
        iframe2.classList.value = iframe2.classList.value + "-giro";
        dispositivo.classList.value = dispositivo.classList.value + "-giro";
      }
    }
    /**
     * Agrega la clase al iframe y activa el boton
     * @param {HTMLElement} icono 
     * @param {string} clase 
     * @param {HTMLElement} div 
     */
    setClassIframe(icono2, clase, div2) {
      let giro = "";
      if (icono2.classList.contains("fa-rotate-90")) {
        giro = "-giro";
      }
      let iframe2 = this.shadowRoot.querySelector("#contenedor");
      let dispositivo = this.shadowRoot.querySelector("#dispositivo");
      iframe2.classList.value = clase + giro;
      dispositivo.classList.value = "dispostivo-" + clase + giro;
      this.removeActivo();
      div2.classList.add("w3-white");
    }
    getWebcomponentsUsuario() {
      return new Promise((resolve2, reject2) => {
        let lista4 = getListaDeComponentesUsuario();
        this.db.list("componentes").then((lComponentes) => {
          let componentes = [];
          for (let tag2 of lista4) {
            let item = lComponentes.find((c) => c.tag == tag2);
            if (item) {
              componentes.push(item);
            }
          }
          resolve2(componentes);
        }).catch((e) => {
          reject2(e);
        });
      });
    }
    setCustomComponent(tag2, codigo2) {
      this.getWebcomponentsUsuario().then((lista4) => {
        let iframe2 = this.shadowRoot.querySelector("#contenedor");
        let codigoComponetes = "";
        let contadorComponentes = 1;
        for (let item of lista4) {
          codigoComponetes += `function registraComponente${contadorComponentes}() {`;
          codigoComponetes += item.codigo;
          codigoComponetes += `}
;    registraComponente${contadorComponentes}();
`;
          contadorComponentes++;
        }
        let html = `
            <html>     
            <head>
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            </head>   
            <body>
                <${tag2}></${tag2}>
            <script>
            ${codigoComponetes}
            ${codigo2}            
            <\/script>
            </body>
            </html>
            `;
        iframe2.contentDocument.open();
        iframe2.contentDocument.write(html);
        iframe2.contentDocument.close();
      });
    }
    setEstilo(estilo) {
      const style87 = this.shadowRoot.querySelector("style");
      style87.innerHTML = estilo;
    }
  };
  customElements.define("test-custom-w3-webcomponent", TestW3WebComponent);

  // src/vanilla/ui/bar/bar-menu.js
  init_config();
  var template18 = (
    /*html*/
    `
<div class="w3-bar w3-color w3-border-top">
    <div class="w3-dropdown-hover w3-color">
        <span class="w3-button  w3-large"><i class="fa fa-bars"></i></span>
        <div class="w3-dropdown-content w3-bar-block w3-card-4" id="acciones">        
        </div>
    </div>
    <span class="w3-bar-item w3-large" id="titulo">
        <img class="bar-img" src="./img/icon/logo-app.png"> W3 Estudio - ide
    </span>
    <div class="w3-right w3-bar-item" style="display: none;" id="span-buscar">
        <i class="fa fa-search"></i>
        <input id="buscar">
    </div>
</div>
`
  );
  var style14 = (
    /*css*/
    `
.bar-img{
    width: 24px;
}
#buscar {
    transition: width 0.4s ease-in-out;
    font-size: small;
    width: 100px;    
}
#buscar:focus {
    width: 300px;
}
`
  );
  var BarUI = class extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    connectedCallback() {
      let color = this.getAttribute("color");
      if (color) {
        let divs = this.shadowRoot.querySelectorAll(".w3-color");
        for (let div2 of divs) {
          div2.classList.value = div2.classList.value.replace("w3-color", color);
        }
      }
      let buscar = this.hasAttribute("buscar");
      if (buscar) {
        let div2 = this.shadowRoot.querySelector("#span-buscar");
        div2.style.display = "";
      }
      const titulo = this.getAttribute("titulo");
      const icono2 = this.getAttribute("icono");
      if (titulo) {
        let barTitulo = this.shadowRoot.querySelector("#titulo");
        barTitulo.innerHTML = `<i class="fa fa-${icono2}"></i> ${titulo}`;
      }
    }
    addListeners() {
      const buscar = this.shadowRoot.querySelector("#buscar");
      buscar.addEventListener("change", (ev) => {
        this.emiteBuscar(buscar.value);
      });
    }
    emiteBuscar(val) {
      this.dispatchEvent(
        new CustomEvent("buscar", {
          detail: {
            buscar: true,
            value: val
          }
        })
      );
    }
    getTitulo(menu) {
      if (menu.imagen) {
        return `<img class="bar-img" src="${menu.imagen}"> ${menu.titulo}`;
      }
      return `<i class="fa fa-${menu.icono}"></i> ${menu.titulo}`;
    }
    setItem(menu) {
      let titulo = this.shadowRoot.querySelector("#titulo");
      let acciones = this.shadowRoot.querySelector("#acciones");
      titulo.innerHTML = this.getTitulo(menu);
      for (let accion of menu.acciones) {
        acciones.append(this.creaAccion(accion));
      }
    }
    creaAccion(accion) {
      let span = document.createElement("span");
      span.classList.value = "w3-bar-item w3-button";
      span.innerHTML = `<i class="fa ${accion.icono}"></i> ${accion.titulo}`;
      span.addEventListener("click", (ev) => this.emiteOnAccion(accion));
      return span;
    }
    emiteOnAccion(accion) {
      this.dispatchEvent(
        new CustomEvent("accion", {
          detail: {
            accionClick: true,
            accion
          }
        })
      );
    }
    render() {
      let shadow = this.attachShadow({ mode: "open" });
      shadow.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style14}</style>
            ${template18}
        `;
      this.addListeners();
    }
  };
  customElements.define("x-bar-menu", BarUI);

  // src/vanilla/ui/tooltip/tooltip.js
  init_config();
  var style15 = (
    /*css*/
    `
.tooltip {
    position: relative;
    display: inline-block;  
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;    
}

.arriba{
    bottom: 150%;
    left: 50%;
    margin-left: -60px;
}

.abajo {
    top: 150%;
    left: 50%;
    margin-left: -60px;
}

.derecha {
    top: -5px;
    left: 120%;
}

.izquierda {
    top: -5px;
    right: 120%;
}

  
.tooltip:hover .tooltiptext {
    visibility: visible;
}

`
  );
  var template19 = (
    /*html*/
    `
<div class="tooltip">
    <span id="titulo"><slot></slot></span>
    <span id="contenido" class="tooltiptext w3-small w3-border">
        contenido
    </span>
</div>
`
  );
  var ToolTip = class extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style15}</style>
            ${template19}
        `;
    }
    getIcono(menu) {
      if (menu.imagen) {
        return `
            <img src="${menu.imagen}" style="width: 115px;" class="w3-round w3-left w3-border">
            `;
      }
      return `        
            <div class="w3-center padding-cuadro">
                <i class="fa fa-${menu.icono} w3-xlarge"></i>
            </div>
        
        `;
    }
    connectedCallback() {
      let contenido = this.getAttribute("contenido");
      let posicion = this.getAttribute("posicion");
      let contenidoSpan = this.shadowRoot.querySelector("#contenido");
      if (contenido) {
        contenidoSpan.innerHTML = contenido;
      }
      if (posicion) {
        contenidoSpan.classList.add(posicion);
      } else {
        contenidoSpan.classList.add("arriba");
      }
    }
  };
  customElements.define("x-tooltip", ToolTip);

  // src/vanilla/apps/utils/app-consola-js.js
  init_agregarApps();
  var template20 = `
    <x-bar-menu color="w3-blue-grey" 
        titulo="Consola" icono="terminal"></x-bar-menu>
    <x-consola-js></x-consola-js>
`;
  var ConsolaJavaScript = class extends HTMLElement {
    constructor() {
      super();
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `            
            ${template20}
        `;
      this.addListeners();
      let menu = shadowRoot2.querySelector("x-bar-menu");
      menu.setItem({
        titulo: "Consola",
        icono: "terminal",
        acciones: [{
          titulo: "Ayuda",
          icono: "fa-hand-peace-o"
        }]
      });
    }
    connectedCallback() {
      this.render();
    }
    addListeners() {
      let win = this.parentElement;
      win.addEventListener("ayuda", (ev) => {
        addWindow("x-ayuda-consola", "Ayuda consola", null, "true");
      });
      let menu = this.shadowRoot.querySelector("x-bar-menu");
      menu.addEventListener("accion", (ev) => {
        let data2 = ev.detail;
        if (data2.accion.titulo == "Ayuda") {
          addWindow("x-ayuda-consola", "Ayuda consola", null, "true");
        }
      });
    }
  };
  customElements.define("x-consola-javascript", ConsolaJavaScript);

  // src/vanilla/apps/administracion/adm-componentes.js
  init_config();

  // src/vanilla/w3-estudio/ide/base/componente-ide.js
  var contComponente = 1;
  function creaEvento(id2, nombreEvento, accion) {
    return `
        const item${id2} = this.shadowRoot.querySelector('#${id2}');
        item${id2}.addEventListener('${nombreEvento}', (ev) =>{
            this.${accion};
        });
    `;
  }
  function procesaEventos(item) {
    let eventos = "";
    const listaAttr = item.attributes;
    for (let attr of listaAttr) {
      if (attr.nodeName.indexOf("ev-") >= 0) {
        const nombre = attr.nodeName.replace("ev-", "");
        eventos += creaEvento(item.id, nombre, attr.value);
      }
    }
    return eventos;
  }
  function getAllEvents(div2) {
    let eventos = "";
    let lista4 = div2.querySelectorAll("[tiene-eventos]");
    for (let item of lista4) {
      eventos += procesaEventos(item);
    }
    return eventos;
  }
  function procesaAngularEventos(item) {
    const listaAttr = item.attributes;
    let datos = [];
    for (let attr of listaAttr) {
      if (attr.nodeName.indexOf("ev-") >= 0) {
        const nombre = attr.nodeName.replace("ev-", "");
        datos.push({
          nodo: attr.nodeName,
          newNodo: "lang-" + nombre + "-rang",
          value: attr.value
        });
      }
    }
    for (let d of datos) {
      item.removeAttribute(d.nodo);
      item.setAttribute(d.newNodo, d.value);
    }
  }
  function procesaEventosAngular(div2) {
    let lista4 = div2.querySelectorAll("[tiene-eventos]");
    for (let item of lista4) {
      procesaAngularEventos(item);
    }
  }
  function createLinkVue(link) {
    let rl = document.createElement("router-link");
    rl.classList.value = link.classList.value;
    rl.setAttribute("to", link.getAttribute("link"));
    rl.innerHTML = link.innerHTML;
    return rl;
  }
  function procesaLinksVue2(div2) {
    let links = div2.querySelectorAll("[link]");
    for (let link of links) {
      let rl = createLinkVue(link);
      div2.append(rl);
      swapElementsDom(link, rl);
      link.remove();
    }
  }
  function procesaLinksAngular(div2) {
    let links = div2.querySelectorAll("[link]");
    for (let link of links) {
      link.setAttribute("routerLink", link.getAttribute("link"));
      link.setAttribute("routerLinkActive", "active");
      link.removeAttribute("link");
      link.removeAttribute("propiedades");
    }
  }
  function procesaLinksTextoAngular(text) {
    text = text.replace(/routerlink/g, "routerLink");
    text = text.replace(/routerlinkactive/g, "routerLinkActive");
    return text;
  }
  var BaseComponentIde = class extends HTMLElement {
    constructor() {
      super();
      this.propiedades = null;
      this.modelo = null;
      this._id = contComponente++;
      this.espaciadoPeque = "2 8";
      this.espaciadoNormal = "2 8";
      this.espaciadoGrande = "2 8";
      this.addListenerDePegado();
    }
    /**
     * Devuelve un arreglo con las clases de espacio
     * Se tiene que definir en las clases base de w3css y boostrap
     * @returns {[string]}
     */
    getClasesEspacioComponente() {
      return [];
    }
    /**
     * Devuelve un arreglo con las clases de contenido
     * Se tiene que definir en las clases base de w3css y boostrap
     * @returns {[string]}
     */
    getClasesContenidoComponente() {
      return [];
    }
    /**
     * Es el espaciado que tendran los componentes de la orilla
     * esta función se tiene que invocar despues del render y despues
     * de modificar el espaciado.
     */
    generaEspaciado() {
      let colEspacio = this.shadowRoot.querySelector("[espacio-componente]");
      let colContenido = this.shadowRoot.querySelector("[contenido-componente]");
      if (!(colEspacio && colContenido)) {
        return;
      }
      const clasesEspacio = this.getClasesEspacioComponente();
      const clasesContenido = this.getClasesContenidoComponente();
      clasesEspacio.forEach((item) => colEspacio.classList.add(item));
      clasesContenido.forEach((item) => colContenido.classList.add(item));
    }
    /**
     * Se eliminan las clases de espaciado, esto pasa por que se setearon nuevas clase de espaciado
     */
    remueveEspaciado() {
      let colEspacio = this.shadowRoot.querySelector("[espacio-componente]");
      let colContenido = this.shadowRoot.querySelector("[contenido-componente]");
      if (!(colEspacio && colContenido)) {
        return;
      }
      const clasesEspacio = this.getClasesEspacioComponente();
      const clasesContenido = this.getClasesContenidoComponente();
      clasesEspacio.forEach((item) => colEspacio.classList.remove(item));
      clasesContenido.forEach((item) => colContenido.classList.remove(item));
    }
    /**
     * Setea el nuevo espaciado
     * @param {string} peque Esta definido por dos numeros positivos
     * @param {string} normal Esta definido por dos numeros positivos
     * @param {string} grande Esta definido por dos numeros positivos
     */
    setEspaciado(peque, normal, grande) {
      this.remueveEspaciado();
      this.espaciadoPeque = peque;
      this.espaciadoNormal = normal;
      this.espaciadoGrande = grande;
      this.generaEspaciado();
    }
    /**
     * Se agrega listener para pegar texto plano en los componentes
     */
    addListenerDePegado() {
      this.addEventListener("paste", function(e) {
        e.preventDefault();
        if (e.clipboardData) {
          let content = (e.originalEvent || e).clipboardData.getData("text/plain");
          document.execCommand("insertText", false, content);
        } else if (window.clipboardData) {
          let content = window.clipboardData.getData("Text");
          document.selection.createRange().pasteHTML(content);
        }
      });
    }
    /**
     * Agrega el shadowroot
     */
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
    }
    /**
     * @returns {string} regresa el innerHTML del shadowRoot
     */
    getShadowRoot() {
      return this.shadowRoot.innerHTML;
    }
    /**
     * Setea el shadowRoot del componente
     * @param {string} shadowRoot 
     */
    setShadowRoot(shadowRoot2) {
      this.shadowRoot.innerHTML = shadowRoot2;
      this.addAllListenersShadowRoot();
    }
    /**
     * Agrega los listener de propiedades al shadowRoot.
     * Despues de agregar el shdown root se debe agregar todos los demas
     * listeners del componente.
     */
    addAllListenersShadowRoot() {
      this.addListenersPropiedades();
      this.addListenerClonar();
    }
    /**
     * Agrea el custom stile del componente
     * @param {string} style Estilo css
     */
    setCustomStyle(style87) {
      let customStyle = this.shadowRoot.querySelector("#custom-style");
      customStyle.innerHTML = style87;
    }
    /**
     * Metodo que se llama cuando se monta el componente en el dom
     */
    connectedCallback() {
      this.remueveEspaciado();
      this.generaEspaciado();
    }
    /**
     * Metodo que se llama cuando se desmonta del dow el componente
     */
    disconnectedCallback() {
    }
    /**
     * Se setea el modelo del componente
     * @param {Object} modelo Es el objeto que representa al componente
     */
    setModelo(modelo) {
      this.modelo = modelo;
    }
    /**
     * Se setea la instancia de propiedades
     * @param {HTMLElement} propiedades HTMLElement que tiene al panel de propiedades
     */
    setPropiedades(propiedades2) {
      this.propiedades = propiedades2;
      this.addListenersPropiedades();
      this.addListenerClonar();
    }
    /**
     * Va agregar un boton para clonar el div que tenga esta propiedad
     */
    addListenerClonar() {
      const divs = this.shadowRoot.querySelectorAll("[clonar]");
      for (let div2 of divs) {
        div2.classList.add("clonador");
        let span = document.createElement("div");
        span.classList.value = "w3-display-topright";
        span.innerHTML = `
            <i class="fa fa-clone" title="Clonar"></i> <i class="fa fa-trash" title="Eliminar"></i>
            `;
        span.id = "btn-clonador";
        span.setAttribute("no-usar", "");
        div2.append(span);
        this.addListenerClonarEliminar(div2);
      }
    }
    /**
     * Clona el elemento y lo agrega despues
     * @param {HTMLElement} div 
     */
    addListenerClonarEliminar(div2) {
      let botonesClonadores = div2.querySelectorAll("#btn-clonador");
      for (let btn of botonesClonadores) {
        this.eliminaElementoConEtiquetaClonar(btn);
        this.clonaElemento(btn);
      }
    }
    /**
     * Elimina elemento con etiqueta clonar
     * @param {HTMLElement} btn 
     */
    eliminaElementoConEtiquetaClonar(btn) {
      let div2 = btn.parentNode;
      let iconotrash = btn.querySelector(".fa-trash");
      iconotrash.addEventListener("click", (ev) => {
        div2.remove();
      });
    }
    /**
     * Clona el elemnto con etiqueta clonar     
     * @param {HTMLElement} btn
     */
    clonaElemento(btn) {
      let div2 = btn.parentNode;
      let iconoclon = btn.querySelector(".fa-clone");
      iconoclon.addEventListener("click", (ev) => {
        let clon = div2.cloneNode(true);
        div2.after(clon);
        this.addListenerClonarEliminar(clon);
        this.addListenerAClon(clon);
      });
    }
    /**
     * Agrega los listeners necesarios al clon.
     * Esta funcion es para los componentes.
     * @param {HTMLElement} clon 
     */
    addListenerAClon(clon) {
      this.addListenerPropiedadesDiv(clon);
    }
    addListenerPropiedadesDiv(div2) {
      const itemPropiedades = div2.querySelectorAll("[propiedades]");
      for (let p of itemPropiedades) {
        p.addEventListener("click", (e) => {
          this.propiedades.setItem(this.tagName, e.target);
          e.stopPropagation();
          e.preventDefault();
        });
      }
    }
    /**
     * SE agregan los listener a los elementos que tienen el atributo de porpiedades.
     *  Este se dispara cuando se da click y se pasan al panel de propiedades
     * */
    addListenersPropiedades() {
      this.addListenerPropiedadesDiv(this.shadowRoot);
    }
    /**
     * Regresa el codigo html del componente
     * @returns {string} Regresa el texto del codigo
     */
    getHtml() {
      throw "No esta definido html en " + this.tagName;
    }
    /**
     * Regresa el Style del componente
     * @returns {string} Regresa el texto del codigo
     */
    getStyle() {
      throw "No esta definido style en " + this.tagName;
    }
    /**
     * Regresa el codigo js del componente.
     * @returns {string} Regresa el texto del codigo
     */
    getScrip() {
      throw "No esta definido js en " + this.tagName;
    }
    /**
     * Elimina los elementos con la propiedad de no-usar
     * @param {HTMLElement} div Es el div que es clone del componente
     */
    removerNoUsar(div2) {
      let noUsar = div2.querySelectorAll("[no-usar]");
      for (let item of noUsar) {
        item.remove();
      }
      this.removeClasesDeClonar(div2);
    }
    /**
     * Elimina las clases que se agregaron a clonar
     */
    removeClasesDeClonar(div2) {
      let clones = div2.querySelectorAll("[clonar]");
      for (let item of clones) {
        item.classList.remove("clonador");
      }
    }
    /**
    * Regresa el codigo html del componente
    * @returns {string} Por defecto regresa el codigo html
    */
    getWebComponenteTemplate() {
      console.log("No esta definido getWebComponenteTemplate en " + this.tagName);
      return this.getHtml();
    }
    /**
    * Regresa el codigo de las funciones js del componente
    * @returns {string} Por defecto regresa la cadena vacia
    */
    getWebComponenteMetodos() {
      console.log("No esta definido getWebComponenteMetodos en " + this.tagName);
      return "";
    }
    /**
    * Regresa el codigo html del componente
    * @returns {string} Por defecto regresa la cadena vacia
    */
    getWebComponenteInit() {
      console.log("No esta definido getWebComponenteInit en " + this.tagName);
      return getAllEvents(this.shadowRoot);
    }
    /**
     * Regresa el codigo html del componente
     * @returns {string} Por defecto regresa el codigo html
     */
    getVueTemplate() {
      return this.getHtml();
    }
    /**
    * Regresa el codigo js del componente
    * @returns {string} Por defecto regresa la cadena vacia
    */
    getVueMetodos() {
      return "";
    }
    /**
     * Regresa el codigo de inicializacion del componente. este codigo se llamara despues de 
     * crearce el componente
     * @returns {string} Por defecto regresa la cadena vacia
     */
    getVueInit() {
      return "";
    }
    /**
     * Regresa el codigo html del componente
     * @returns {string} Por defecto regresa el codigo html
     */
    getAngularTemplate() {
      return this.getHtml();
    }
    /**
     * Regresa el codigo js del componente
     * @returns {string} Por defecto regresa la cadena vacia
     */
    getAngularMetodos() {
      return "";
    }
    /**
     * Regresa el codigo de inicializacion del componente. este codigo se llamara despues de 
     * crearce el componente
     * @returns {string} Por defecto regresa la cadena vacia
     */
    getAngularInit() {
      return "";
    }
    getInnerHtml(div2) {
      this.removerNoUsar(div2);
      let text = `<div class="${div2.classList.value}">
`;
      text += div2.innerHTML;
      text = text.replace(/contenteditable="true"/g, "");
      text += "</div>";
      return text;
    }
    procesaInnerHtmlAnugular(text) {
      text = text.replace(/gato-/g, "#");
      text = text.replace(/=""/g, "");
      return text;
    }
    getInnerHTMLAngular(div2) {
      procesaEventosAngular(div2);
      let text = this.procesaInnerHtmlAnugular(
        this.getInnerHtml(div2)
      );
      return text;
    }
    /**
     * Crear el template html vue
     * @param {HTMLElement} div 
     */
    getInnerHTMLVue(div2) {
      this.removerNoUsar(div2);
      procesaLinksVue2(div2);
      let text = `<div class="${div2.classList.value}">
`;
      text += div2.innerHTML;
      text = text.replace(/contenteditable="true"/g, "");
      text += "</div>";
      return text;
    }
  };

  // src/vanilla/comun-style-editable.js
  var styleEditable = (
    /*css*/
    `
[contenteditable]:focus {
    outline: 2px solid #ee8872;
    outline-offset: 2px;
}
::selection {
    background: rgb( 0 0 255 / 0.2);
}
.espacio{
    min-height: 10px;
}
`
  );

  // src/vanilla/w3-estudio/ide/base/style-clonar.js
  var styleClonador = (
    /*css */
    `
.clonador:hover {
    border: 1px solid #ccc!important;    
}
.clonador {
    position: relative;
}
.clonador #btn-clonador {
    color: rgb(1 1 1 / 0.2);
}
.clonador #btn-clonador .fa-clone:hover {
    color: black;
}
.clonador #btn-clonador .fa-trash:hover {
    color: red;
}
`
  );

  // src/vanilla/utils/apps/registrar-componente.js
  init_db();
  var componenteInterface = {
    /** tag del webcomponente */
    tag: "",
    /**nombre app */
    titulo: "",
    /** descripcion app */
    descripcion: "",
    /** categoria */
    categoria: "",
    /** icono fa fa*/
    icono: "",
    /** codigo app */
    codigo: ""
  };
  async function registraComponente(app) {
    return new Promise((resolve, reject) => {
      let db = getDB();
      try {
        eval(app.codigo);
        db.put("componentesIde", app);
        registraListaComponenteIde({
          titulo: app.titulo,
          tag: app.tag,
          categoria: app.categoria,
          descripcion: app.descripcion,
          ico: app.icono
        });
        resolve(app);
      } catch (e) {
        console.log(e);
        reject("No se pudo instalar la app");
      }
      ;
    });
  }

  // src/vanilla/apps/administracion/adm-componentes.js
  init_db();
  init_modal();
  var template21 = (
    /*html*/
    `
<x-bar-menu color="w3-blue-grey" 
    titulo="Componentes de ide" icono="gear"></x-bar-menu>
<div class="w3-container" card-texto="">
    <div class="w3-row-padding w3-margin-top w3-margin-botton" contenedor>                    
        
    </div>
</div>
`
  );
  var style16 = `

.app{
    height: 250px;
}

.descripcion{
    height: 100px;
}

.espacio {
    height: 10px;
}
`;
  var AdministradorComponentesIde = class extends HTMLElement {
    constructor() {
      super();
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `   
            <style>${style16}</style> 
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            ${template21}
        `;
      let menu = shadowRoot2.querySelector("x-bar-menu");
      menu.setItem({
        titulo: "Componentes de ide",
        icono: "gear",
        acciones: [{
          titulo: "Instalar",
          icono: "fa-gift"
        }]
      });
      this.db = getDB();
      this.tabla = "componentesIde";
      this.initLista();
      this.dlg = new Openfile(".icjson");
      this.addListeners();
    }
    addListeners() {
      let menu = this.shadowRoot.querySelector("x-bar-menu");
      menu.addEventListener("accion", (ev) => {
        let data2 = ev.detail;
        if (data2.accion.titulo == "Instalar") {
          this.instalarApp();
        }
      });
    }
    /*Cuando se desmonta en la pagina, no necesariamente se destruye*/
    disconnectedCallback() {
      this.dlg.finaliza();
    }
    instalarApp() {
      this.dlg.open().then((file) => {
        let componente = JSON.parse(file);
        registraComponente(componente).then((app3) => {
          this.initLista();
        });
      });
    }
    initLista() {
      this.db.list(this.tabla).then((lista4) => {
        this.cargaLista(lista4);
      });
    }
    connectedCallback() {
      this.render();
    }
    /**
     * @param {HTMLElement} div 
     */
    eliminaItem(div2) {
      let dlg2 = new Modal();
      dlg2.titulo = "Alerta";
      dlg2.innerHtml = `
        <h2>Mensaje</h2>
        Se eliminara el componente del ide. Desea continuar?
        `;
      dlg2.open().then((re) => {
        this.db.delete(this.tabla, div2.id).then((ev) => {
          eliminaListaComponenteIde(div2.id);
          div2.remove();
          this.initLista();
        });
      });
    }
    creaCard(item) {
      let div2 = document.createElement("div");
      div2.innerHTML = `
        <div class="w3-black w3-round-xlarge w3-border" >
            <div class="w3-container app">
                <h2><i class="fa ${item.icono}"></i> ${item.titulo}</h2>
                <p  class="descripcion w3-block w3-white">
                    ${item.descripcion}
                </p>                                
                <button class="w3-button w3-blue w3-left w3-round-xxlarge" id="descargar">Descargar</button>
                <button class="w3-button w3-red w3-right w3-round-xxlarge" id="eliminar">Eliminar</button>                                
            </div>  
        </div>                    
        `;
      div2.classList.value = "w3-margin-top w3-col s12 m6 l4";
      div2.id = item.tag;
      let descargar = div2.querySelector("#descargar");
      let eliminar = div2.querySelector("#eliminar");
      eliminar.addEventListener("click", (ev) => {
        this.eliminaItem(div2);
      });
      return div2;
    }
    cargaLista(lista4) {
      console.log(lista4);
      let contenedor = this.shadowRoot.querySelector("[contenedor]");
      for (let item of lista4) {
        contenedor.append(this.creaCard(item));
      }
    }
  };
  customElements.define("x-admin-componentes-ide", AdministradorComponentesIde);

  // src/vanilla/apps/administracion/admin-app.js
  init_config();
  init_db();
  init_modal();
  var template22 = (
    /*html*/
    `
<x-bar-menu color="w3-blue-grey" 
    titulo="Componentes de ide" icono="gear"></x-bar-menu>
<div class="w3-container" card-texto="">
    <div class="w3-row-padding w3-margin-top w3-margin-botton" contenedor>                    
        
    </div>
</div>
`
  );
  var style17 = `

.app{
    height: 250px;
}

.descripcion{
    height: 100px;
}

.espacio {
    height: 10px;
}
`;
  var AdministradorProgramas = class extends HTMLElement {
    constructor() {
      super();
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `   
            <style>${style17}</style> 
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            ${template22}
        `;
      let menu = shadowRoot2.querySelector("x-bar-menu");
      menu.setItem({
        titulo: "Componentes de ide",
        icono: "gear",
        acciones: [{
          titulo: "Instalar",
          icono: "fa-gift"
        }]
      });
      this.db = getDB();
      this.tabla = "componentesIde";
      this.initLista();
      this.dlg = new Openfile(".icjson");
      this.addListeners();
    }
    addListeners() {
      let menu = this.shadowRoot.querySelector("x-bar-menu");
      menu.addEventListener("accion", (ev) => {
        let data2 = ev.detail;
        if (data2.accion.titulo == "Instalar") {
          this.instalarApp();
        }
      });
    }
    /*Cuando se desmonta en la pagina, no necesariamente se destruye*/
    disconnectedCallback() {
      this.dlg.finaliza();
    }
    instalarApp() {
      this.dlg.open().then((file) => {
        let componente = JSON.parse(file);
        registraComponente(componente).then((app3) => {
          this.initLista();
        });
      });
    }
    initLista() {
      this.db.list(this.tabla).then((lista4) => {
        this.cargaLista(lista4);
      });
    }
    connectedCallback() {
      this.render();
    }
    /**
     * @param {HTMLElement} div 
     */
    eliminaItem(div2) {
      let dlg2 = new Modal();
      dlg2.titulo = "Alerta";
      dlg2.innerHtml = `
        <h2>Mensaje</h2>
        Se eliminara el componente del ide. Desea continuar?
        `;
      dlg2.open().then((re) => {
        this.db.delete(this.tabla, div2.id).then((ev) => {
          eliminaListaComponenteIde(div2.id);
          div2.remove();
          this.initLista();
        });
      });
    }
    creaCard(item) {
      let div2 = document.createElement("div");
      div2.innerHTML = `
        <div class="w3-black w3-round-xlarge w3-border" >
            <div class="w3-container app">
                <h2><i class="fa ${item.icono}"></i> ${item.titulo}</h2>
                <p  class="descripcion w3-block w3-white">
                    ${item.descripcion}
                </p>                                
                <button class="w3-button w3-blue w3-left w3-round-xxlarge" id="descargar">Descargar</button>
                <button class="w3-button w3-red w3-right w3-round-xxlarge" id="eliminar">Eliminar</button>                                
            </div>  
        </div>                    
        `;
      div2.classList.value = "w3-margin-top w3-col s12 m6 l4";
      div2.id = item.tag;
      let descargar = div2.querySelector("#descargar");
      let eliminar = div2.querySelector("#eliminar");
      eliminar.addEventListener("click", (ev) => {
        this.eliminaItem(div2);
      });
      return div2;
    }
    cargaLista(lista4) {
      console.log(lista4);
      let contenedor = this.shadowRoot.querySelector("[contenedor]");
      for (let item of lista4) {
        contenedor.append(this.creaCard(item));
      }
    }
  };
  customElements.define("x-admin-apps", AdministradorProgramas);

  // src/vanilla/w3-estudio/ide/base/componente-w3css.js
  init_config();
  var BaseW3CSS = class extends BaseComponentIde {
    constructor() {
      super();
    }
    /** Agrega el template básico de los componentes w3css */
    render() {
      super.render();
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="${config.w3css}">
        <link rel="stylesheet" href="${config.fontAwesome}">
        <style>${styleEditable}${styleClonador}</style>
        <style id="custom-style"></style>
        `;
    }
    getClasesEspacioComponente() {
      const peque = this.espaciadoPeque.split(" ");
      const normal = this.espaciadoNormal.split(" ");
      const grande = this.espaciadoGrande.split(" ");
      return [`s${peque[0]}`, `m${normal[0]}`, `l${grande[0]}`];
    }
    getClasesContenidoComponente() {
      const peque = this.espaciadoPeque.split(" ");
      const normal = this.espaciadoNormal.split(" ");
      const grande = this.espaciadoGrande.split(" ");
      return [`s${peque[1]}`, `m${normal[1]}`, `l${grande[1]}`];
    }
  };

  // src/vanilla/w3-estudio/ide/w3css/disenio/custom-item.js
  var template23 = (
    /*html*/
    `
<div class="w3-container">
<button class="w3-button w3-xlarge w3-circle w3-teal w3-right" id ="add-code">
    <i class="fa fa-pencil-square-o"></i>
</button>
</div>
<div custom-item>
</div>
`
  );
  var style18 = "";
  var dlg = new ModalForm();
  dlg.titulo = "C\xF3digo html";
  var CustomItem = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    connectedCallback() {
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style18}</style>
            ${template23}
        `;
      this.div = shadowRoot2.querySelector("[custom-item]");
      this.addListeners();
    }
    addListeners() {
      const btn = this.shadowRoot.querySelector("#add-code");
      btn.addEventListener("click", (e) => {
        this.agregarCodigo();
      });
    }
    agregarCodigo() {
      dlg.innerHtml = `
        <div class="w3-container" style="height: 400px;">
            <label>Codigo html5</label>
            <br>
            <x-codigo modo="text/html" 
                tema="material" 
                codigo='${this.div.innerHTML.replace(/'/g, "\xB4")}' 
                name="codigo" 
                dato-salida />            
        </div>
        `;
      dlg.open().then((re) => {
        this.div.innerHTML = re.data.codigo.replace(/´/g, "'");
        this.addListenersPropiedades();
      });
    }
    getHtml() {
      const original = this.div;
      const div2 = original.cloneNode(true);
      this.removerNoUsar(div2);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style18;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.div;
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
    addAllListenersShadowRoot() {
      this.addListenersPropiedades();
      this.addListeners();
    }
  };
  customElements.define("x-custom-item", CustomItem);

  // src/vanilla/w3-estudio/ide/w3css/formulario/formulario-simple.js
  init_modal();
  var template24 = (
    /*html*/
    `

<div class="w3-row w3-margin-top" formulario>
<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<div class="w3-col s8" propiedades contenido-componente>  

    <div class="w3-button w3-blue w3-large w3-right w3-circle" id="add" no-usar>
        <i class="fa fa-plus"></i>
    </div>

    <form onsubmit="return false" propiedades>
    
    <div id="items-div" class="w3-row w3-margin-bottom"></div> 
    
    
    
    
    </form>

</div>
</div>
`
  );
  var style19 = (
    /*css*/
    `
input:invalid {
    outline: solid 1px red;
    background: pink;
}
input[type="color"] {
    padding: 0;
    height: 40px;
}
`
  );
  var idInput = Date.now();
  var FormularioSimple = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
      this.addListeners();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style19}</style>            
            ${template24}
        `;
      this.formulario = shadowRoot2.querySelector("#items-div");
    }
    addAllListenersShadowRoot() {
      this.formulario = this.shadowRoot.querySelector("#items-div");
      this.addListenersPropiedades();
      this.addListeners();
      let divs = this.formulario.querySelectorAll("[input-div]");
      for (let div2 of divs) {
        this.addListenersDivInput(div2);
      }
    }
    addListenersDivInput(div2) {
      let arriba = div2.querySelector("#arriba");
      let abajo = div2.querySelector("#abajo");
      let eliminar = div2.querySelector("#eliminar");
      this.addListenersBotonesInput(div2, arriba, abajo, eliminar);
    }
    addListeners() {
      let btn = this.shadowRoot.querySelector("#add");
      btn.addEventListener("click", (ev) => {
        this.agregaInput();
      });
    }
    agregaInput() {
      let dlg2 = new ModalForm();
      dlg2.titulo = "Tipo de input";
      dlg2.innerHtml = `
        <div>
        <label>Tipo de input</label>
        <select dato-salida name="tipo" class="w3-select">
                <option value="text">Texto</option>
                <option value="password">Password</option>
                <option value="number">N\xFAmero</option>
                <option value="date">Fecha</option>
                <option value="time">Hora</option>
                <option value="color">Color</option>
                <option value="radio">Radio</option>
                <option value="checkbox">Checkbox</option>
                <option value="label">Label</option>
                <option value="textarea">Textarea</option>
        </select>
        </div>
        `;
      dlg2.open().then((data2) => {
        if (data2.data.tipo != "textarea") {
          if (data2.data.tipo == "label") {
            this.addLabel();
          } else {
            this.addInput(data2.data.tipo);
          }
        } else if (data2.data.tipo == "textarea") {
          this.addTextArea();
        }
      });
    }
    addLabel() {
      let div2 = document.createElement("div");
      div2.setAttribute("input-div", "");
      let botones = this.addBotonesInput(div2);
      let salto = document.createElement("br");
      let label = document.createElement("label");
      label.innerHTML = " Etiqueta";
      label.contentEditable = "true";
      label.setAttribute("propiedades", "");
      div2.appendChild(botones);
      div2.appendChild(salto);
      div2.appendChild(label);
      div2.id = idInput++;
      div2.classList.value = "w3-col s12 m12";
      div2.setAttribute("propiedades", "");
      this.formulario.appendChild(div2);
      this.addListenersPropiedadesItem(label);
      this.addListenersPropiedadesItem(div2);
    }
    addTextArea() {
      let div2 = document.createElement("div");
      div2.setAttribute("input-div", "");
      let botones = this.addBotonesInput(div2);
      let input = document.createElement("textarea");
      let salto = document.createElement("br");
      input.classList.value = "w3-input w3-border";
      input.style.resize = "none";
      input.setAttribute("propiedades", "");
      input.setAttribute("input-formulario", "");
      let label = document.createElement("label");
      label.innerHTML = " Etiqueta textarea";
      label.contentEditable = "true";
      label.setAttribute("propiedades", "");
      div2.appendChild(botones);
      div2.appendChild(salto);
      div2.appendChild(label);
      div2.appendChild(input);
      div2.id = idInput++;
      div2.classList.value = "w3-col s12 m12";
      div2.setAttribute("propiedades", "");
      this.formulario.appendChild(div2);
      this.addListenersPropiedadesItem(input);
      this.addListenersPropiedadesItem(label);
      this.addListenersPropiedadesItem(div2);
    }
    addInput(tipo2) {
      let div2 = document.createElement("div");
      div2.setAttribute("input-div", "");
      let botones = this.addBotonesInput(div2);
      let input = document.createElement("input");
      let salto = document.createElement("br");
      input.classList.value = "w3-input w3-border";
      if (tipo2 == "radio") {
        input.classList.value = "w3-radio";
      } else if (tipo2 == "checkbox") {
        input.classList.value = "w3-check";
      }
      input.setAttribute("propiedades", "");
      input.setAttribute("input-formulario", "");
      input.type = tipo2;
      let label = document.createElement("label");
      label.innerHTML = " Etiqueta " + tipo2;
      label.contentEditable = "true";
      label.setAttribute("propiedades", "");
      div2.appendChild(botones);
      div2.appendChild(salto);
      if (tipo2 == "radio" || tipo2 == "checkbox") {
        div2.appendChild(input);
        div2.appendChild(label);
      } else {
        div2.appendChild(label);
        div2.appendChild(input);
      }
      div2.id = idInput++;
      div2.classList.value = "w3-col s12 m12";
      div2.setAttribute("propiedades", "");
      this.formulario.appendChild(div2);
      this.addListenersPropiedadesItem(input);
      this.addListenersPropiedadesItem(label);
      this.addListenersPropiedadesItem(div2);
    }
    addListenersPropiedadesItem(div2) {
      div2.addEventListener("click", (e) => {
        this.propiedades.setItem(this.tagName, e.target);
      });
    }
    addBotonesInput(div2) {
      let botones = document.createElement("div");
      let arriba = document.createElement("span");
      arriba.classList.value = "w3-button w3-xlarge w3-circle w3-black";
      arriba.id = "arriba";
      arriba.setAttribute("no-usar", "");
      let abajo = document.createElement("span");
      abajo.id = "abajo";
      abajo.classList.value = "w3-button w3-xlarge w3-circle w3-black";
      abajo.setAttribute("no-usar", "");
      let eliminar = document.createElement("span");
      eliminar.id = "eliminar";
      eliminar.classList.value = "w3-button w3-xlarge w3-circle w3-red";
      eliminar.setAttribute("no-usar", "");
      arriba.innerHTML = '<i class="fa fa-arrow-up"></i>';
      abajo.innerHTML = '<i class="fa fa-arrow-down"></i>';
      eliminar.innerHTML = '<i class="fa fa-trash"></i>';
      botones.appendChild(arriba);
      botones.appendChild(abajo);
      botones.appendChild(eliminar);
      this.addListenersBotonesInput(div2, arriba, abajo, eliminar);
      botones.classList.value = "w3-right";
      botones.style.transform = "scale(0.5)";
      botones.setAttribute("no-usar", "");
      return botones;
    }
    addListenersBotonesInput(div2, arriba, abajo, eliminar) {
      arriba.addEventListener("click", (ev) => {
        this.swapArriba(div2);
      });
      abajo.addEventListener("click", (ev) => {
        this.swapAbajo(div2);
      });
      eliminar.addEventListener("click", (ev) => {
        let dlg2 = new Modal();
        dlg2.titulo = "Confirmaci\xF3n";
        dlg2.innerHtml = "Desea Eliminar el input";
        dlg2.open().then((e) => {
          div2.remove();
        });
      });
    }
    /*busca el elemento que esta arriba de este y se intercambia de lugar*/
    swapArriba(div2) {
      let superior = null;
      for (let item of this.formulario.childNodes) {
        if (item.id == div2.id) {
          break;
        }
        if (item.tagName == "DIV") {
          superior = item;
        }
      }
      if (superior) {
        swapElementsDom(superior, div2);
      }
    }
    swapAbajo(div2) {
      let inferiror = null;
      let estaDiv = false;
      for (let item of this.formulario.childNodes) {
        if (estaDiv && item.tagName == "DIV") {
          inferiror = item;
          break;
        }
        if (item.id == div2.id) {
          estaDiv = true;
        }
      }
      if (inferiror) {
        swapElementsDom(inferiror, div2);
      }
    }
    getHtml() {
      const original = this.shadowRoot.querySelector("[formulario]");
      const div2 = original.cloneNode(true);
      this.removerNoUsar(div2);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style19;
    }
    getScrip() {
      return "";
    }
  };
  customElements.define("x-formulario-simple", FormularioSimple);

  // src/vanilla/w3-estudio/ide/w3css/jumbotron/grid-descripcion.js
  var template25 = (
    /*html*/
    `
<div class="w3-row-padding w3-padding-64 w3-container grid-descripcion w3-light-grey" propiedades>  
    <div class="w3-col s6" propiedades clonar contenteditable="true">
      <h4 propiedades>Lorem Ipsum</h4>
      <p propiedades>Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
    </div> 
</div>
`
  );
  var style20 = `
.img-grid{
    width: 100%;
    border-radius: 5px;
}
.size-icon{
    font-size:200px;
}
`;
  var GridDescripcion = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            
            <style>${style20}</style>
            ${template25}
        `;
    }
    addListeners() {
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".grid-descripcion");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style20;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".grid-descripcion");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-grid-descripcion", GridDescripcion);

  // src/vanilla/w3-estudio/ide/w3css/jumbotron/jumbotron-titulo.js
  var template26 = (
    /*html*/
    `
<div class="w3-container">
  <div class="w3-row-padding w3-padding-64 w3-container jumbotron-titulo w3-light-grey" propiedades="">
  <div class="w3-content">
    <div class="w3-col s12 m6">      
      <h2 class="w3-padding-32" contenteditable="true" propiedades="">Bienvenido a W3CSS <span class="w3-text-blue">Desarrollador</span></h2>

      <p class="w3-text-grey" contenteditable="true" propiedades="">Crea una web hermosa y moderna con los componentes de w3css.</p>
      <button class="w3-button w3-blue" contenteditable="true" propiedades="">Contenido</button>
      <button class="w3-button w3-black" contenteditable="true" propiedades="">Documentaci\xF3n</button>
    </div>

    <div class="w3-col s12 m6">
        <img style="width: 100%;" src="https://openclipart.org/download/285925/interviewpeople.svg">        
    </div>
  </div>
</div>
</div>
`
  );
  var style21 = `
.img-grid{
    width: 100%;
    border-radius: 5px;
}
.size-icon{
    font-size:200px;
}
`;
  var JumboTronTitulo = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style21}</style>
            ${template26}
        `;
      this.addListeners();
    }
    addListeners() {
      let img = this.shadowRoot.querySelector("img");
      img.addEventListener("click", (ev) => this.onChangeImg(img));
    }
    onChangeImg(img) {
      let dlg2 = new ModalGet("Dame url de imagen", img.src);
      dlg2.open().then((dlg3) => {
        img.src = dlg3.data;
      });
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".jumbotron-titulo");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style21;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".jumbotron-titulo");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
    addAllListenersShadowRoot() {
      super.addAllListenersShadowRoot();
      this.addListeners();
    }
  };
  customElements.define("x-jumbotron-titulo", JumboTronTitulo);

  // src/vanilla/w3-estudio/ide/w3css/menu/menu.js
  var style22 = (
    /*css*/
    `
`
  );
  var template27 = (
    /*html*/
    `
<div class="w3-row menu">
    <div class="w3-col s2 espacio">        
    </div>
    <div class="w3-col s8">
        <h1 contenteditable="true" propiedades>T\xEDtulo Principal</h1>
        <p contenteditable="true" propiedades>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="w3-right" no-usar>
        Menus <i class="fa fa-plus" id="add-menu"></i>
        </div>
        <div class="w3-row-padding w3-padding-16 w3-center content-menu">
            
        </div>
    </div>
    <div class="w3-col s2">
    </div>
</div>
`
  );
  var MenuSimple = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style22}</style>
            ${template27}
        `;
      this.addListeners();
      this.onAddMenu(null);
    }
    onChangeImg(img) {
      let dlg2 = new ModalGet("Dame url de imagen", img.src);
      dlg2.open().then((dlg3) => {
        img.src = dlg3.data;
      });
    }
    createMenu() {
      let menu = document.createElement("div");
      let img = document.createElement("img");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");
      h3.innerHTML = "Let Me Tell You About This Steak";
      h3.setAttribute("contenteditable", "true");
      h3.setAttribute("propiedades", "");
      p.innerHTML = "Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.";
      p.setAttribute("contenteditable", "true");
      p.setAttribute("propiedades", "");
      img.src = "./img/libres/mariposa.jpg";
      img.style.width = "100%";
      this.addListenerImg(img);
      menu.classList.add("w3-col");
      menu.classList.add("s12");
      menu.classList.add("m6");
      menu.classList.add("l4");
      menu.appendChild(img);
      menu.appendChild(h3);
      menu.appendChild(p);
      return menu;
    }
    connectedCallback() {
    }
    addListeners() {
      const boton = this.shadowRoot.querySelector("#add-menu");
      boton.addEventListener("click", this.onAddMenu.bind(this));
    }
    addListenerImg(img) {
      img.addEventListener("click", (e) => {
        this.onChangeImg(img);
      });
    }
    onAddMenu(event) {
      let contentMenu = this.shadowRoot.querySelector(".content-menu");
      let menu = this.createMenu();
      contentMenu.appendChild(menu);
    }
    disconnectedCallback() {
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".menu");
      const div2 = original.cloneNode(true);
      this.removerNoUsar(div2);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style22;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".menu");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
    addListenersAllImg() {
      const imgs = this.shadowRoot.querySelectorAll("img");
      for (let img of imgs) {
        this.addListenerImg(img);
      }
    }
    addAllListenersShadowRoot() {
      this.addListenersPropiedades();
      this.addListeners();
      this.addListenersAllImg();
    }
  };
  customElements.define("x-menu", MenuSimple);

  // src/vanilla/w3-estudio/ide/w3css/navegacion/bar/bar.js
  var template28 = (
    /*html*/
    `
<div class="bar w3-card">
    <div class="w3-bar w3-red" propiedades>
        <span href="#" class="w3-bar-item w3-button w3-xlarge" contenteditable="true" id="titulo" propiedades>T\xEDtulo</span>
        <button class="w3-bar-item w3-button w3-xlarge w3-right" id="btn-menu">&#9776;</button>
    </div>
    <div class="w3-sidebar w3-bar-block" style="display:none;" id="right-menu">
        <span class="w3-bar-item w3-button w3-large ancho-menu" id="btn-cerrar" no-usar>Cerrar &times;</span>
        <span class="w3-bar-item w3-button w3-large ancho-menu" id="btn-agregar" no-usar>+</span>        
    </div>
</div>
`
  );
  var style23 = `.ancho-menu{
    width: auto !important;
}`;
  var Bar = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style23}</style>
            ${template28}
        `;
      this.addListeners();
    }
    getLinks() {
      const links = this.shadowRoot.querySelectorAll("[link]");
      let linksOut = [];
      for (let link of links) {
        linksOut.push({
          ruta: link.getAttribute("ruta"),
          nombre: link.innerHTML
        });
      }
      return linksOut;
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".bar");
      const div2 = original.cloneNode(true);
      const boton = div2.querySelector("#btn-menu");
      boton.setAttribute("ev-click", `onMenu${this._id}()`);
      this.removerNoUsar(div2);
      return this.getInnerHtml(div2);
    }
    addListeners() {
      const menu = this.shadowRoot.querySelector("#btn-menu");
      const cerrar = this.shadowRoot.querySelector("#btn-cerrar");
      menu.addEventListener("click", (e) => {
        let display = this.shadowRoot.getElementById("right-menu").style.display;
        display == "contents" ? display = "none" : display = "contents";
        this.shadowRoot.getElementById("right-menu").style.display = display;
      });
      cerrar.addEventListener("click", (e) => {
      });
      const agregar = this.shadowRoot.querySelector("#btn-agregar");
      const contenedor = this.shadowRoot.querySelector(".w3-sidebar");
      agregar.addEventListener("click", (e) => {
        let span = document.createElement("a");
        span.classList.value = "w3-bar-item w3-button";
        span.setAttribute("link", "");
        span.setAttribute("propiedades", "");
        span.setAttribute("contenteditable", "true");
        span.innerHTML = 'Link <span class="w3-right" no-usar>-</span>';
        let del = span.querySelector("span");
        del.setAttribute("contenteditable", "false");
        del.addEventListener("click", (e2) => {
          this.eliminarElemento(e2, span);
        });
        contenedor.appendChild(span);
        span.addEventListener("click", (e2) => {
          this.propiedades.setItem(this.tagName, span);
        });
      });
      const links = this.shadowRoot.querySelectorAll("[link]");
      for (const link of links) {
        let span = link.querySelector("span");
        if (!span) {
          continue;
        }
        span.addEventListener("click", (e) => {
          this.eliminarElemento(e, link);
        });
      }
    }
    eliminarElemento(e, div2) {
      this.propiedades.setItem(this.tagName, null);
      e.preventDefault();
      e.stopPropagation();
      div2.remove();
    }
    getStyle() {
      return style23;
    }
    getScrip() {
      return `function onMenu${this._id}(){
            let display = document.getElementById("right-menu").style.display;
            display == 'contents' ? display = 'none' : display = 'contents';
            document.getElementById("right-menu").style.display = display;
        }`;
    }
    getWebComponenteTemplate() {
      const original = this.shadowRoot.querySelector(".bar");
      const div2 = original.cloneNode(true);
      this.removerNoUsar(div2);
      let text = `<div class="${div2.classList.value}">
`;
      text += div2.innerHTML;
      text = text.replace(/contenteditable="true"/g, "");
      text += "</div>";
      return text;
    }
    getWebComponenteMetodos() {
      return `
    onMenu${this._id}(){
        let menu = this.shadowRoot.getElementById("right-menu");
        let display = menu.style.display;
        display == 'contents' ? display = 'none' : display = 'contents';
        menu.style.display = display;
    }
    addListeners${this._id}(){
        let menu = this.shadowRoot.getElementById("btn-menu");
        menu.addEventListener('click', (e) => {
            this.onMenu${this._id}();
        });
    }
        `;
    }
    getWebComponenteInit() {
      return `
        this.addListeners${this._id}();
        `;
    }
    getVueTemplate() {
      const original = this.shadowRoot.querySelector(".bar");
      const div2 = original.cloneNode(true);
      let btn = div2.querySelector("#btn-menu");
      btn.setAttribute("ev-click", `onMenu${this._id}()`);
      this.removerNoUsar(div2);
      procesaLinksVue2(div2);
      let text = `<div class="${div2.classList.value}">
`;
      text += div2.innerHTML;
      text = text.replace(/contenteditable="true"/g, "");
      text += "</div>";
      return text;
    }
    getVueMetodos() {
      return `
    onMenu${this._id}(){
        let menu = this.$el.querySelector("#right-menu");
        let display = menu.style.display;
        display == 'contents' ? display = 'none' : display = 'contents';
        menu.style.display = display;
    }
        `;
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".bar");
      const div2 = original.cloneNode(true);
      let btn = div2.querySelector("#btn-menu");
      btn.setAttribute("ev-click", `onMenu${this._id}()`);
      btn.setAttribute(`tiene-eventos`, "");
      this.removerNoUsar(div2);
      procesaLinksAngular(div2);
      let menu = div2.querySelector("#right-menu");
      menu.setAttribute(`gato-menu${this._id}`, "");
      let text = this.getInnerHTMLAngular(div2);
      return procesaLinksTextoAngular(text);
    }
    getAngularMetodos() {
      return `
    @ViewChild("menu${this._id}", {read: ElementRef}) menu${this._id}: ElementRef;
    onMenu${this._id}(){        
        if (this.menu${this._id}.nativeElement.style.cssText) {
            this.menu${this._id}.nativeElement.style.cssText = '';    
        } else {
            this.menu${this._id}.nativeElement.style.cssText = 'display: none;';    
        }
    }
        `;
    }
    addAllListenersShadowRoot() {
      this.addListenersPropiedades();
      this.addListeners();
    }
  };
  customElements.define("x-bar", Bar);

  // src/vanilla/w3-estudio/ide/w3css/navegacion/dropdown/bar-dropdown.js
  var template29 = (
    /*html*/
    `
<div class="w3-bar w3-red bar-dropdown" propiedades>
    <a href="#" class="w3-bar-item w3-button w3-xlarge" contenteditable="true">Home</a>
    <div class="w3-dropdown-hover w3-right">
    <button class="w3-button w3-xlarge" >&#9776;</button>
    <div class="w3-dropdown-content w3-bar-block w3-border " style="right: 10px;">
      <span class="w3-bar-item w3-button" id="btn-agregar" no-usar>+</span>       
    </div>
  </div>
</div>
`
  );
  var style24 = "";
  var BarDropDown = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style24}</style>
            ${template29}
        `;
      this.addListeners();
    }
    addListeners() {
      const agregar = this.shadowRoot.querySelector("#btn-agregar");
      const contenedor = this.shadowRoot.querySelector(".w3-dropdown-content");
      agregar.addEventListener("click", (e) => {
        let span = document.createElement("a");
        span.classList.value = "w3-bar-item w3-button";
        span.setAttribute("link", "");
        span.innerHTML = 'Link <span class="w3-right" no-usar>-</span>';
        span.setAttribute("contenteditable", "true");
        let del = span.querySelector("span");
        del.setAttribute("contenteditable", "false");
        del.addEventListener("click", (e2) => {
          this.eliminarElemento(e2, span);
        });
        contenedor.appendChild(span);
        this.addListenerEditSpan(span);
      });
      const links = this.shadowRoot.querySelectorAll("[link]");
      for (const link of links) {
        let span = link.querySelector("span");
        if (!span) {
          continue;
        }
        span.addEventListener("click", (e) => {
          this.eliminarElemento(e, link);
        });
      }
    }
    eliminarElemento(e, div2) {
      this.propiedades.setItem(this.tagName, null);
      e.preventDefault();
      e.stopPropagation();
      div2.remove();
    }
    addListenerEditSpan(span) {
      span.addEventListener("click", (e) => {
        this.editLink(span);
        e.stopPropagation();
        e.preventDefault();
      });
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".bar-dropdown");
      const div2 = original.cloneNode(true);
      const menu = this.shadowRoot.querySelector(".w3-dropdown-content");
      menu.style.cssText = "right: 0;";
      let text = this.getInnerHtml(div2);
      return text;
    }
    getVueTemplate() {
      const original = this.shadowRoot.querySelector(".bar-dropdown");
      const div2 = original.cloneNode(true);
      this.removerNoUsar(div2);
      procesaLinksVue(div2);
      const menu = div2.querySelector(".w3-dropdown-content");
      menu.style.cssText = "right: 0;";
      let text = this.getInnerHtml(div2);
      return text;
    }
    getStyle() {
      return style24;
    }
    getScrip() {
      "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".bar-dropdown");
      const div2 = original.cloneNode(true);
      this.removerNoUsar(div2);
      procesaLinksAngular(div2);
      const menu = div2.querySelector(".w3-dropdown-content");
      menu.style.cssText = "right: 0;";
      let text = this.getInnerHTMLAngular(div2);
      menu.style.cssText = "";
      return procesaLinksTextoAngular(text);
    }
    addAllListenersShadowRoot() {
      this.addListenersPropiedades();
      this.addListeners();
      this.addListenersEditSpanLink();
    }
    addListenersEditSpanLink() {
      const spans = this.shadowRoot.querySelectorAll("[link]");
      for (let span of spans) {
        this.addListenerEditSpan(span);
      }
    }
  };
  customElements.define("x-bar-dropdown", BarDropDown);

  // src/vanilla/w3-estudio/ide/w3css/pie pagina/redes-sociales.js
  var template30 = (
    /*html*/
    `
<footer class="w3-container w3-padding-64 w3-center w3-opacity redes-sociales">  
  <div class="w3-xlarge w3-padding-32">
    <i class="fa fa-facebook-official w3-hover-opacity"></i>
    <i class="fa fa-instagram w3-hover-opacity"></i>
    <i class="fa fa-snapchat w3-hover-opacity"></i>
    <i class="fa fa-pinterest-p w3-hover-opacity"></i>
    <i class="fa fa-twitter w3-hover-opacity"></i>
    <i class="fa fa-linkedin w3-hover-opacity"></i>
 </div>
</footer>
`
  );
  var style25 = "";
  var RedesSociales = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `            
            <style>${style25}</style>
            ${template30}
        `;
    }
    getHtml() {
      const div2 = this.shadowRoot.querySelector(".redes-sociales");
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style25;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".redes-sociales");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-redes-sociales", RedesSociales);

  // src/vanilla/w3-estudio/ide/w3css/basicos/codigo.js
  var template31 = (
    /*html*/
    `
<div class="w3-row codigo w3-margin-top">
<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<div class="w3-col s8" propiedades contenido-componente>
    <div class="w3-panel w3-card w3-light-grey"> 
    <span class="w3-button w3-blue w3-right" id="actualiza" no-usar>actualiza</span>
    <span class="w3-button w3-blue w3-right"  contenteditable="true" id="copiar">copiar</span>
    <h4 propiedades contenteditable="true">C\xF3digo js</h4>
    <div></div>
    <div class="w3-code jsHigh notranslate" contenteditable="true" editor>
        let frutas = [];<br>
        frutas[0] = "Platano";<br>
        frutas[1] = "Manzana";<br>
        frutas[2] = "Mango";<br>
        frutas[3] = "Naranja";<br>
    </div>
    <textarea style="position: absolute; top: -1000px; display:none;"></textarea>
    </div>    
</div>
</div>

`
  );
  var style26 = "";
  var TextoCodigo = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `            
            <style>${style26}</style>
            ${template31}
        `;
      this.addListenerActualiza();
      w3CodeColor(shadowRoot2);
    }
    addListenerActualiza() {
      let boton = this.shadowRoot.querySelector("#actualiza");
      boton.addEventListener("click", (ev) => {
        this.actulizaCodigo();
      });
    }
    actulizaCodigo() {
      let editor = this.shadowRoot.querySelector("[editor]");
      let texto = editor.innerText.split("\n");
      editor.innerHTML = "";
      for (let linea of texto) {
        editor.innerHTML += linea + "<br>";
      }
      w3CodeColor(this.shadowRoot);
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".codigo");
      let div2 = original.cloneNode(true);
      this.addPropiedadesDiv(div2);
      this.removerNoUsar(div2);
      return this.getInnerHtml(div2);
    }
    addPropiedadesDiv(div2) {
      let editor = div2.querySelector("[editor]");
      editor.setAttribute("editor", "" + this._id);
      let textarea = div2.querySelector("textarea");
      textarea.setAttribute("id", "text" + this._id);
      let copiar = div2.querySelector("#copiar");
      copiar.setAttribute("id", "copiar" + this._id);
      return div2;
    }
    getVueTemplate() {
      const original = this.shadowRoot.querySelector(".codigo");
      let div2 = original.cloneNode(true);
      this.addPropiedadesDiv(div2);
      let copiar = div2.querySelector("#copiar" + this._id);
      copiar.setAttribute("ev-click", `copiaTexto${this._id}()`);
      return this.getInnerHTMLVue(div2);
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".codigo");
      let div2 = original.cloneNode(true);
      this.addPropiedadesDiv(div2);
      let copiar = div2.querySelector("#copiar" + this._id);
      copiar.setAttribute("ev-click", `copiaTexto${this._id}()`);
      copiar.setAttribute(`tiene-eventos`, "");
      let textarea = div2.querySelector("textarea");
      textarea.setAttribute(`gato-text${this._id}`, "");
      let editor = div2.querySelector("[editor]");
      editor.setAttribute(`gato-editor${this._id}`, "");
      let text = this.getInnerHTMLAngular(div2);
      return text;
    }
    getAngularMetodos() {
      return `
    @ViewChild("text${this._id}", {read: ElementRef}) textarea${this._id}: ElementRef;
    @ViewChild("editor${this._id}", {read: ElementRef}) editor${this._id}: ElementRef;    
    copiaTexto${this._id}(){
        let texto = this.editor${this._id}.nativeElement.innerText;      
        this.textarea${this._id}.nativeElement.style.display = '';
        this.textarea${this._id}.nativeElement.value = texto;
        setTimeout(e => {
            this.textarea${this._id}.nativeElement.select();
            document.execCommand("Copy");
            this.textarea${this._id}.nativeElement.style.display = 'none';
        }, 1);
    }
        `;
    }
    getWebComponenteMetodos() {
      return `
    copiaTexto${this._id}(){
        let editor = this.shadowRoot.querySelector('[editor="${this._id}"]');
        let texto = editor.innerText;
        let textarea = this.shadowRoot.querySelector('#text${this._id}');
        textarea.style.display = '';
        let reg = new RegExp(String.fromCharCode(160),'g');
        textarea.value = texto.replace(reg, ' ');
        setTimeout(e => {
            textarea.select();
            document.execCommand("Copy");
            textarea.style.display = 'none';
        }, 1);
    }
    addListeners${this._id}(){        
        let copiar = this.shadowRoot.querySelector('#copiar${this._id}');
        copiar.addEventListener('click', (ev) => {
            this.copiaTexto${this._id}();
        });
    }
        `;
    }
    getWebComponenteInit() {
      return `
        this.addListeners${this._id}();
        `;
    }
    getVueMetodos() {
      return `
    copiaTexto${this._id}(){
        let editor = this.$el.querySelector('[editor="${this._id}"]');
        let texto = editor.innerText;
        let textarea = this.$el.querySelector('#text${this._id}');
        textarea.style.display = '';
        textarea.value = texto;
        setTimeout(e => {
            textarea.select();
            document.execCommand("Copy");
            textarea.style.display = 'none';
        }, 1);
    }
        `;
    }
    getStyle() {
      return style26;
    }
    getScrip() {
      return "";
    }
    addAllListenersShadowRoot() {
      this.addListenersPropiedades();
      this.addListenerActualiza();
    }
  };
  customElements.define("x-codigo-fuente", TextoCodigo);

  // src/vanilla/w3-estudio/ide/w3css/basicos/comentario.js
  var template32 = (
    /*html*/
    `
<div class="w3-row comentario w3-margin-top">
<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<div class="w3-col s8" propiedades contenido-componente>
    <div class="w3-panel w3-leftbar w3-pale-yellow w3-border-orange" propiedades>
        <p><i class="fa fa-quote-right w3-xxlarge"></i></p>
        <p contenteditable="true">Make it as simple as possible, but not simpler.</p>
        <p style="font-weight: bold;" class="w3-small w3-bold" contenteditable="true">Albert Einstein</p>
    </div>
</div>
</div>

`
  );
  var style27 = "";
  var TextoComentario = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style27}</style>
            ${template32}
        `;
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".comentario");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style27;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".comentario");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-comentario", TextoComentario);

  // src/vanilla/w3-estudio/ide/w3css/basicos/imagen.js
  var template33 = (
    /*html*/
    `
<div class="w3-row imagen">
<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<div class="w3-col s8" propiedades contenido-componente>
    <img src="./img/libres/lago.jpg" class="cls-imagen" propiedades>
</div>
</div>

`
  );
  var style28 = `
.cls-imagen{
    width: 100%;
    border-radius: 5px;
}
`;
  var TextoImagen = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `            
            <style>${style28}</style>
            ${template33}
        `;
      this.addListeners();
    }
    addListeners() {
      const img = this.shadowRoot.querySelector("img");
      img.addEventListener("click", this.onChangeImg.bind(this));
    }
    onChangeImg() {
      const img = this.shadowRoot.querySelector("img");
      let dlg2 = new ModalGet("Dame url de imagen", img.src);
      dlg2.open().then((dlg3) => {
        img.src = dlg3.data;
      });
    }
    getHtml() {
      const div2 = this.shadowRoot.querySelector(".imagen");
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style28;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".imagen");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
    addAllListenersShadowRoot() {
      this.addListenersPropiedades();
      this.addListeners();
    }
  };
  customElements.define("x-imagen", TextoImagen);

  // src/vanilla/w3-estudio/ide/w3css/basicos/nota.js
  var template34 = (
    /*html*/
    `
<div class="w3-row nota w3-margin-top">
    <div class="w3-col s2 espacio" propiedades espacio-componente></div>
    <div class="w3-col s8" propiedades contenido-componente>
        <div class="w3-panel w3-pale-blue w3-leftbar w3-border-blue" propiedades>
            <div contenteditable="true">London is the most populous city in the United Kingdom,
            with a metropolitan area of over 9 million inhabitants.
            </div>
        </div>
    </div>
</div>

`
  );
  var style29 = "";
  var Nota = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style29}</style>
            ${template34}
        `;
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".nota");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style29;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".nota");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-nota", Nota);

  // src/vanilla/w3-estudio/ide/w3css/basicos/parrafo.js
  var template35 = (
    /*html*/
    `
<div class="w3-row parrafo w3-margin-top">
<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<div class="w3-col s8" propiedades contenido-componente>   
    <div contenteditable="true" propiedades>London is the most populous city in the United Kingdom, with a metropolitan area of over 9 million inhabitants.</div>
</div>
</div>

`
  );
  var style30 = "";
  var TextoParrafo = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style30}</style>
            ${template35}
        `;
    }
    getHtml() {
      const div2 = this.shadowRoot.querySelector(".parrafo");
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style30;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".parrafo");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-parrafo", TextoParrafo);

  // src/vanilla/w3-estudio/ide/w3css/titulos-h/titulo-h1.js
  var template36 = (
    /*html*/
    `
<div class="w3-row titulo-h1">
    <div class="w3-col s2 espacio" propiedades espacio-componente></div>
    <div class="w3-col s8" propiedades contenido-componente> 
    <h1 propiedades contenteditable="true">T\xEDtulo</h1>    
</div>
</div>

`
  );
  var style31 = "";
  var TituloH1 = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `            
            <style>${style31}</style>
            ${template36}
        `;
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".titulo-h1");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style31;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".titulo-h1");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-titulo-h1", TituloH1);

  // src/vanilla/w3-estudio/ide/w3css/titulos-h/titulo-h2.js
  var template37 = (
    /*html*/
    `
<div class="w3-row titulo-h2">
    <div class="w3-col s2 espacio" propiedades espacio-componente></div>
    <div class="w3-col s8" propiedades contenido-componente>  
    <h2 propiedades contenteditable="true">T\xEDtulo</h2>    
</div>
</div>

`
  );
  var style32 = "";
  var TituloH2 = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `            
            <style>${style32}</style>
            ${template37}
        `;
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".titulo-h2");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style32;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".titulo-h2");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-titulo-h2", TituloH2);

  // src/vanilla/w3-estudio/ide/w3css/titulos-h/titulo-h3.js
  var template38 = (
    /*html*/
    `
<div class="w3-row titulo-h3">
<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<div class="w3-col s8" propiedades contenido-componente>  
    <h3 propiedades contenteditable="true">T\xEDtulo</h3>    
</div>
</div>

`
  );
  var style33 = "";
  var TituloH3 = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `            
            <style>${style33}</style>
            ${template38}
        `;
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".titulo-h3");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style33;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".titulo-h3");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-titulo-h3", TituloH3);

  // src/vanilla/w3-estudio/ide/w3css/titulos-h/titulo-h4.js
  var template39 = (
    /*html*/
    `
<div class="w3-row titulo-h4">
<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<div class="w3-col s8" propiedades contenido-componente>   
    <h4 propiedades contenteditable="true">T\xEDtulo</h4>    
</div>
</div>

`
  );
  var style34 = "";
  var TituloH4 = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `            
            <style>${style34}</style>
            ${template39}
        `;
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".titulo-h4");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style34;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".titulo-h4");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-titulo-h4", TituloH4);

  // src/vanilla/w3-estudio/ide/w3css/titulos-h/titulo-h5.js
  var template40 = (
    /*html*/
    `
<div class="w3-row titulo-h5">
<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<div class="w3-col s8" propiedades contenido-componente>    
    <h5 propiedades contenteditable="true">T\xEDtulo</h5>    
</div>
</div>

`
  );
  var style35 = "";
  var TituloH5 = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `            
            <style>${style35}</style>
            ${template40}
        `;
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".titulo-h5");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style35;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".titulo-h5");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-titulo-h5", TituloH5);

  // src/vanilla/w3-estudio/ide/w3css/titulos-h/titulo-h6.js
  var template41 = (
    /*html*/
    `
<div class="w3-row titulo-h6">
<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<div class="w3-col s8" propiedades contenido-componente>    
    <h6 propiedades contenteditable="true">T\xEDtulo</h6>    
</div>
</div>

`
  );
  var style36 = "";
  var TituloH6 = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `            
            <style>${style36}</style>
            ${template41}
        `;
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".titulo-h6");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style36;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".titulo-h6");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-titulo-h6", TituloH6);

  // src/vanilla/w3-estudio/ide/w3css/basicos/linea.js
  var template42 = (
    /*html*/
    `
<div class="w3-row linea w3-margin-top">
<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<div class="w3-col s8" propiedades contenido-componente>
    <hr class="" propiedades>
</div>
</div>

`
  );
  var style37 = "";
  var LineaWcc = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `                        
            <style>${style37}</style>
            ${template42}
        `;
    }
    getHtml() {
      const div2 = this.shadowRoot.querySelector(".linea");
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style37;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".linea");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-linea", LineaWcc);

  // src/vanilla/w3-estudio/ide/w3css/basicos/linea-texto.js
  var template43 = (
    /*html*/
    `
<div class="w3-row linea-texto w3-margin-top">
<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<div class="w3-col s8" propiedades contenido-componente>
    <div class="w3-row">
        <hr class="w3-col s5" propiedades style="border-top: 2px solid grey;">
        <div class="w3-col s2 w3-center" propiedades contenteditable="true" style="padding: 10px;">O</div>
        <hr class="w3-col s5" propiedades style="border-top: 2px solid grey;">
    </div>
</div>
</div>

`
  );
  var style38 = "";
  var LineaTextoWcc = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `                        
            <style>${style38}</style>
            ${template43}
        `;
    }
    getHtml() {
      const div2 = this.shadowRoot.querySelector(".linea-texto");
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style38;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".linea-texto");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-linea-texto", LineaTextoWcc);

  // src/vanilla/w3-estudio/ide/w3css/texto-prehecho/articulo.js
  var style39 = (
    /*css*/
    `
.articulo-autor{
    font-style: italic;    
}

.articulo-autor-content{    
    font-size: xx-small;
}
.articulo-titulo {
    font-family: fantasy;
}
.articulo-img{
    width: 100%;
    border-radius: 5px;
}
.letra-capital::first-letter {
    float: left;
    font-size: 499%;    
    margin-right: 0.15em;
    line-height: 0.76343165978em;
    color: #000;
    display: inline-block;
    vertical-align: bottom;
    font-family: fantasy;
}
`
  );
  var template44 = (
    /*html*/
    `
<div class="w3-row articulo">
    <div class="w3-col s2 espacio">        
    </div>
    <div class="w3-col s8">
        <h1 contenteditable="true" class="articulo-titulo" propiedades>Lorem ipsum dolor sit amet</h1>
        <p  class="articulo-autor-content">
            Por <span class="articulo-autor" contenteditable="true" propiedades>Juan P\xE9rez Garc\xEDa</span><br>
            <span contenteditable="true" propiedades>3 de Noviembre de 2020</span>
        </p>        
        <hr>        
        <p contenteditable="true" propiedades class="letra-capital" clonar>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eos accusamus eius et totam obcaecati? Reprehenderit, facilis,
        voluptate nulla praesentium sequi delectus animi corrupti itaque ad ducimus,
         totam suscipit pariatur quos!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Vitae fugiat magnam, exercitationem, qui quas est rerum 
         molestiae, quis mollitia tenetur consequuntur? 
         Numquam laboriosam facere expedita temporibus quos sint 
         id doloremque?
        </p>
        <div clonar>
        <img src="./img/libres/lago.jpg" class="articulo-img">        
        <p contenteditable="true" propiedades>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eos accusamus eius et totam obcaecati? Reprehenderit, facilis,
        voluptate nulla praesentium sequi delectus animi corrupti itaque ad ducimus,
         totam suscipit pariatur quos!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Vitae fugiat magnam, exercitationem, qui quas est rerum 
         molestiae, quis mollitia tenetur consequuntur? 
         Numquam laboriosam facere expedita temporibus quos sint 
         id doloremque?
        </p>
        </div>
    </div>
    <div class="w3-col s2">
    </div>
</div>
`
  );
  var Articulo = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style39}</style>
            ${template44}
        `;
      this.addListeners();
    }
    onChangeImg(img) {
      let dlg2 = new ModalGet("Dame url de imagen", img.src);
      dlg2.open().then((dlg3) => {
        img.src = dlg3.data;
      });
    }
    addListeners() {
      const img = this.shadowRoot.querySelector("img");
      img.addEventListener("click", (ev) => this.onChangeImg(img));
    }
    addListenerAClon(clon) {
      super.addListenerAClon(clon);
      const img = clon.querySelector("img");
      if (img) {
        img.addEventListener("click", (ev) => this.onChangeImg(img));
      }
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".articulo");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style39;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".articulo");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
    addAllListenersShadowRoot() {
      super.addAllListenersShadowRoot();
      this.addListeners();
    }
  };
  customElements.define("x-articulo", Articulo);

  // src/vanilla/w3-estudio/ide/w3css/texto-prehecho/cv.js
  var style40 = (
    /*css*/
    `
`
  );
  var template45 = (
    /*html*/
    `
<div class="w3-row-padding w3-margin-top w3-margin-botton" cv>
  
    <!-- Left Column -->
    <div class="w3-col s12 m5 l4" contenteditable="true" propiedades>
    
      <div class="w3-white w3-text-grey w3-card-4">
        <div class="w3-display-container">
          <img src="./img/img_avatar3.png" style="width:100%" alt="Avatar">
          <h2  propiedades style="text-align: center">Juan P\xE9rez P\xE9rez</h2>
        </div>
        <div class="w3-container">
          <p clonar><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Web developer</p>                
        </div>
        <div class="w3-container" clonar>
      
          <p class="w3-large">
            <i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills
          </p>
          <div clonar>
          <p>Angular</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:65%">65%</div>
          </div>
          </div>
          <br>          
        </div>

        <div class="w3-container" clonar>
            <p class="w3-large w3-text-theme">
                <i class="fa fa-bolt fa-fw w3-margin-right w3-text-teal"></i>Programas
            </p>
            <p>Visual Estudio Code</p>
        </div>
      </div><br>

    <!-- End Left Column -->
    </div>

    <!-- Right Column -->
    <div class="w3-col s12 m7 l8" contenteditable="true" propiedades>
    
      <div class="w3-container w3-card w3-white w3-margin-bottom" clonar>
        <h2 class="w3-text-grey w3-padding-16" id="titulo-exp-color"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" propiedades></i>
        <span  propiedades>Experiencia de trabajo</span> </h2>        
        <div class="w3-container" clonar>
          <h5 class="w3-opacity"> Puesto / Empresa </h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Nov 2016 - Jul 2017</h6>
          <p>Desarrollo en Java usando el framaework Play(https://www.playframework.com/) para el proyecto de gesti\xF3n de Prices Shoes</p>
          <hr>
        </div>
      </div>

    <!-- End Right Column -->
    </div>
    
  <!-- End Grid -->
  </div>
  <br>
`
  );
  var CVWcss = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
      this.color = "teal";
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style40}</style>
            ${template45}
        `;
      this.addListeners();
    }
    setColor(color) {
      let divs = this.shadowRoot.querySelectorAll(`.w3-${this.color}, .w3-text-${this.color}`);
      for (let div2 of divs) {
        div2.classList.value = div2.classList.value.replace(`w3-${this.color}`, `w3-${color}`).replace(`w3-text-${this.color}`, `w3-text-${color}`);
      }
      this.color = color;
    }
    onChangeImg() {
      const img = this.shadowRoot.querySelector("img");
      let dlg2 = new ModalGet("Dame url de imagen", img.src);
      dlg2.open().then((dlg3) => {
        img.src = dlg3.data;
      });
    }
    addListeners() {
      const img = this.shadowRoot.querySelector("img");
      img.addEventListener("click", this.onChangeImg.bind(this));
    }
    getHtml() {
      const original = this.shadowRoot.querySelector("[cv]");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style40;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector("[cv]");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
    buscaColor() {
      let h = this.shadowRoot.querySelector("#titulo-exp-color");
      let i = h.querySelector("i");
      let clases = i.classList.value;
      let textclases = clases.split(" ");
      let color = textclases.find((e) => e.indexOf("w3-text-") >= 0);
      color = color.replace("w3-text-", "");
      this.color = color;
    }
    addAllListenersShadowRoot() {
      super.addAllListenersShadowRoot();
      this.addListeners();
      this.buscaColor();
    }
  };
  customElements.define("x-cv", CVWcss);

  // src/vanilla/w3-estudio/ide/w3css/texto-prehecho/servicios.js
  var style41 = (
    /*css*/
    `
`
  );
  var template46 = (
    /*html*/
    `
<div class="w3-row" template-servicios>

<div class="w3-col s12 m2 espacio">
</div>

<div class="w3-col s12 m8 espacio">
<div >

  <!-- Header -->
  <div class="w3-container" style="margin-top:80px" id="showcase">
    <h1 class="w3-jumbo" contenteditable="true" propiedades><b>Interior Design</b></h1>
    <h1 class="w3-xxxlarge w3-text-red" contenteditable="true" propiedades><b>Showcase.</b></h1>
    <hr style="width:50px;border:5px solid red" class="w3-round" propiedades>
  </div>
  
  <!-- Photo grid (modal) -->
  <div class="w3-row-padding">
    <div class="w3-half">
      <div clonar class="w3-margin-top">
      <img src="https://www.w3schools.com/w3images/kitchenconcrete.jpg" style="width:100%"  alt="Concrete meets bricks">
      </div>
    </div>

    <div class="w3-half">
      <div clonar class="w3-margin-top">
      <img src="https://www.w3schools.com/w3images/atrium.jpg" style="width:100%"  alt="Windows for the atrium">      
      </div>
    </div>
  </div>

  <!-- Services -->
  <div class="w3-container" id="services" style="margin-top:75px" clonar>
    <h1 class="w3-xxxlarge w3-text-red" contenteditable="true" propiedades><b>Services.</b></h1>
    <hr style="width:50px;border:5px solid red" class="w3-round" propiedades>
    <p contenteditable="true" propiedades>We are a interior design service that focus on what's best for your home and what's best for you!</p>
    <p contenteditable="true" propiedades>Some text about our services - what we do and what we offer. We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
  
  <!-- Designers -->
  <div class="w3-container" id="designers" style="margin-top:75px" clonar>
    <h1 class="w3-xxxlarge w3-text-red" contenteditable="true" propiedades><b>Designers.</b></h1>
    <hr style="width:50px;border:5px solid red" class="w3-round" propiedades>
    <p contenteditable="true" propiedades>The best team in the world.</p>
    <p contenteditable="true" propiedades>We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <p contenteditable="true" propiedades><b>Our designers are thoughtfully chosen</b>:</p>
  </div>

  <!-- The Team -->
  <div class="w3-row-padding w3-grayscale">
    <div class="w3-col m4 w3-margin-bottom" clonar>
      <div class="w3-light-grey">
        <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John" style="width:100%">
        <div class="w3-container">
          <h3 contenteditable="true" propiedades>John Doe</h3>
          <p class="w3-opacity" contenteditable="true" propiedades>CEO &amp; Founder</p>
          <p contenteditable="true" propiedades>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
        </div>
      </div>
    </div>
    <div class="w3-col m4 w3-margin-bottom" clonar>
      <div class="w3-light-grey">
        <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane" style="width:100%">
        <div class="w3-container">
          <h3 contenteditable="true" propiedades>Jane Doe</h3>
          <p class="w3-opacity" contenteditable="true" propiedades>Designer</p>
          <p contenteditable="true" propiedades>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
        </div>
      </div>
    </div>    
  </div>

  <!-- Packages / Pricing Tables -->
  <div class="w3-container" id="packages" style="margin-top:75px">
    <h1 class="w3-xxxlarge w3-text-red" contenteditable="true" propiedades><b>Packages.</b></h1>
    <hr style="width:50px;border:5px solid red" class="w3-round" propiedades>
    <p contenteditable="true" propiedades>Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
  </div>

  <div class="w3-row-padding">
    <div class="w3-half w3-margin-bottom" clonar>
      <ul class="w3-ul w3-light-grey w3-center">
        <li class="w3-dark-grey w3-xlarge w3-padding-32" contenteditable="true" propiedades>Basic</li>
        <li class="w3-padding-16" contenteditable="true" propiedades clonar>Floorplanning</li>
        <li class="w3-padding-16" contenteditable="true" propiedades clonar>10 hours support</li>
        <li class="w3-padding-16" contenteditable="true" propiedades clonar>Photography</li>
        <li class="w3-padding-16" contenteditable="true" propiedades clonar>20% furniture discount</li>
        <li class="w3-padding-16" contenteditable="true" propiedades clonar>Good deals</li>
        <li class="w3-padding-16" clonar>
          <h2 contenteditable="true" propiedades>$ 199</h2>
          <span class="w3-opacity" contenteditable="true" propiedades>per room</span>
        </li>
        <li class="w3-light-grey w3-padding-24">
          <button class="w3-button w3-white w3-padding-large w3-hover-black" contenteditable="true" propiedades>Sign Up</button>
        </li>
      </ul>
    </div>
        
    <div class="w3-half" clonar>
      <ul class="w3-ul w3-light-grey w3-center">
        <li class="w3-red w3-xlarge w3-padding-32" contenteditable="true" propiedades>Pro</li>
        <li class="w3-padding-16" contenteditable="true" propiedades clonar>Floorplanning</li>
        <li class="w3-padding-16" contenteditable="true" propiedades clonar>50 hours support</li>
        <li class="w3-padding-16" contenteditable="true" propiedades clonar>Photography</li>
        <li class="w3-padding-16" contenteditable="true" propiedades clonar>50% furniture discount</li>
        <li class="w3-padding-16" contenteditable="true" propiedades clonar>GREAT deals</li>
        <li class="w3-padding-16" clonar>
          <h2 contenteditable="true" propiedades>$ 249</h2>
          <span class="w3-opacity" contenteditable="true" propiedades>per room</span>
        </li>
        <li class="w3-light-grey w3-padding-24">
          <button class="w3-button w3-red w3-padding-large w3-hover-black" contenteditable="true" propiedades>Sign Up</button>
        </li>
      </ul>
    </div>
  </div>
  
  <!-- Contact -->
  <div class="w3-container" id="contact" style="margin-top:75px">
    <h1 class="w3-xxxlarge w3-text-red" contenteditable="true" propiedades><b>Contact.</b></h1>
    <hr style="width:50px;border:5px solid red" class="w3-round" propiedades>
    <p contenteditable="true" propiedades>Do you want us to style your home? Fill out the form and fill me in with the details :) We love meeting new people!</p>
    <form action="#" target="_blank">
      <div class="w3-section">
        <label contenteditable="true" propiedades>Name</label>
        <input class="w3-input w3-border" type="text" name="Name" required="">
      </div>
      <div class="w3-section">
        <label contenteditable="true" propiedades>Email</label>
        <input class="w3-input w3-border" type="text" name="Email" required="">
      </div>
      <div class="w3-section">
        <label contenteditable="true" propiedades>Message</label>
        <input class="w3-input w3-border" type="text" name="Message" required="">
      </div>
      <button type="submit" class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom" contenteditable="true" propiedades>Send Message</button>
    </form>  
  </div>

<!-- End page content -->
</div>


</div>
<!--row-->
</div>


`
  );
  var ServiciosWcss = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
      this.color = "teal";
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style41}</style>
            ${template46}
        `;
      this.addListeners();
    }
    setColor(color) {
      let divs = this.shadowRoot.querySelectorAll(`.w3-${this.color}, .w3-text-${this.color}`);
      for (let div2 of divs) {
        div2.classList.value = div2.classList.value.replace(`w3-${this.color}`, `w3-${color}`).replace(`w3-text-${this.color}`, `w3-text-${color}`);
      }
      this.color = color;
    }
    addListenerImagenes() {
      let imgs = this.shadowRoot.querySelectorAll("img");
      for (let img of imgs) {
        img.addEventListener("click", (ev) => this.onChangeImg(img));
      }
    }
    addListenerAClon(clon) {
      super.addListenerAClon(clon);
      const img = clon.querySelector("img");
      img.addEventListener("click", (ev) => this.onChangeImg(img));
    }
    onChangeImg(img) {
      let dlg2 = new ModalGet("Dame url de imagen", img.src);
      dlg2.open().then((dlg3) => {
        img.src = dlg3.data;
      });
    }
    addListeners() {
      this.addListenerImagenes();
    }
    getHtml() {
      const original = this.shadowRoot.querySelector("[template-servicios]");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style41;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector("[template-servicios]");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
    addAllListenersShadowRoot() {
      super.addAllListenersShadowRoot();
      this.addListeners();
    }
  };
  customElements.define("x-template-servicios", ServiciosWcss);

  // src/vanilla/w3-estudio/ide/w3css/titulo/titulo-imagen.js
  var template47 = (
    /*html*/
    `
<div class="w3-display-container titulo-imagen">
  <img src="./img/libres/lago.jpg"  style="width:100%;">
  <div class="w3-display-middle w3-large">
    <h1 class="w3-jumbo w3-text-white w3-wide" propiedades contenteditable="true" style="font-weight: bold;">DEADLINE</h1>
  </div>
   <div class="w3-display-bottomright w3-container">
      <p class="w3-text-white w3-xlarge" propiedades contenteditable="true">Venezia street 16-17 August</p>
   </div>
</div>
`
  );
  var style42 = "";
  var TituloImagen = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `            
            <style>${style42}</style>
            ${template47}
        `;
      this.addListeners();
    }
    onChangeImg() {
      const img = this.shadowRoot.querySelector("img");
      let dlg2 = new ModalGet("Dame url de imagen", img.src);
      dlg2.open().then((dlg3) => {
        img.src = dlg3.data;
      });
    }
    addListeners() {
      const img = this.shadowRoot.querySelector("img");
      img.addEventListener("click", this.onChangeImg.bind(this));
    }
    getHtml() {
      const div2 = this.shadowRoot.querySelector(".titulo-imagen");
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style42;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".titulo-imagen");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
    addAllListenersShadowRoot() {
      this.addListenersPropiedades();
      this.addListeners();
    }
  };
  customElements.define("x-titulo-imagen", TituloImagen);

  // src/vanilla/w3-estudio/ide/w3css/jumbotron/titulo-jumbo.js
  var template48 = (
    /*html*/
    `
<div class="w3-container w3-red w3-center titulo-jumbo" contenteditable="true" propiedades>
    <h2 class="w3-margin w3-jumbo">P\xE1gina de inicio</h2>
    <p class="w3-xlarge">Usando w3.css</p>
</div>
`
  );
  var style43 = "";
  var TituloJumbo = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `            
            <style>${style43}</style>
            ${template48}
        `;
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".titulo-jumbo");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style43;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".titulo-jumbo");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-titulo-jumbo", TituloJumbo);

  // src/vanilla/w3-estudio/ide/w3css/titulo/titulo-imagen-menu.js
  var template49 = (
    /*html*/
    `
<div class="titulo-imagen-menu">
<div class="w3-display-container w3-content w3-center" style="max-width:1500px">
  <img class="w3-image" src="./img/libres/lago.jpg" alt="Me" width="1500" height="600">
  <div class="w3-display-middle w3-padding-large w3-border w3-wide w3-text-light-grey w3-center">
    <h1 class="w3-xxxlarge w3-hide-small"  propiedades contenteditable="true" titulo>Juan P\xE9rez</h1>
    <h5 class="w3-hide-large w3-hide-medium " style="white-space:nowrap" titulo2>Juan P\xE9rez</h5>
    <h3 class="w3-hide-medium w3-hide-small"  propiedades contenteditable="true" >Fot\xF3grafo</h3>
  </div>
  <div class="w3-bar w3-grey w3-round w3-display-bottommiddle w3-hide-small" style="bottom:-16px" id="contenedor-menu">
    <span id="agregar" class="w3-bar-item w3-button" no-usar>+</span>    
  </div>
  <div class="w3-center w3-light-grey w3-padding-16 w3-hide-large w3-hide-medium"  id="contenedor-menu2">
    <div class="w3-bar w3-light-grey" id="contenedor-menu2">
    </div>
  </div>
</div>
</div>
`
  );
  var style44 = "";
  var TituloImagenMenu = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `            
            <style>${style44}</style>
            ${template49}
        `;
      this.addListeners();
    }
    onChangeImg() {
      const img = this.shadowRoot.querySelector("img");
      let dlg2 = new ModalGet("Dame url de imagen", img.src);
      dlg2.open().then((dlg3) => {
        img.src = dlg3.data;
      });
    }
    addListeners() {
      const img = this.shadowRoot.querySelector("img");
      img.addEventListener("click", this.onChangeImg.bind(this));
      let agregar = this.shadowRoot.querySelector("#agregar");
      agregar.addEventListener("click", (ev) => {
        this.addMenu();
      });
      let links = this.shadowRoot.querySelectorAll("[link]");
      for (let link of links) {
        let span = link.querySelector("div");
        if (!span) {
          continue;
        }
        span.addEventListener("click", (e) => {
          this.eliminarElemento(e, link);
        });
      }
    }
    eliminarElemento(e, div2) {
      this.propiedades.setItem(this.tagName, null);
      e.preventDefault();
      e.stopPropagation();
      div2.remove();
    }
    addMenu() {
      let menu = this.shadowRoot.querySelector("#contenedor-menu");
      let a = document.createElement("a");
      a.innerHTML = 'Menu <div no-usar class="w3-right">-</div>';
      a.href = "#";
      a.classList.value = "w3-bar-item w3-button";
      a.setAttribute("link", "");
      a.setAttribute("propiedades", "");
      a.setAttribute("contenteditable", "true");
      let del = a.querySelector("div");
      del.setAttribute("contenteditable", "false");
      del.addEventListener("click", (e) => {
        this.eliminarElemento(e, a);
      });
      this.addListenerPropiedadesMenu(a);
      menu.append(a);
    }
    addListenerPropiedadesMenu(div2) {
      div2.addEventListener("click", (e) => {
        this.propiedades.setItem(this.tagName, e.target);
      });
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".titulo-imagen-menu");
      const div2 = original.cloneNode(true);
      this.duplicaContenido(div2);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style44;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".titulo-imagen-menu");
      const div2 = original.cloneNode(true);
      this.duplicaContenido(div2);
      procesaLinksAngular(div2);
      let text = this.getInnerHTMLAngular(div2);
      return procesaLinksTextoAngular(text);
    }
    addAllListenersShadowRoot() {
      this.addListenersPropiedades();
      this.addListeners();
    }
    getVueTemplate() {
      const original = this.shadowRoot.querySelector(".titulo-imagen-menu");
      const div2 = original.cloneNode(true);
      let links = div2.querySelectorAll("[link]");
      this.duplicaContenido(div2);
      procesaLinksVue2(div2);
      return this.getInnerHtml(div2);
    }
    duplicaContenido(div2) {
      let menu = div2.querySelector("#contenedor-menu");
      let menu2 = div2.querySelector("#contenedor-menu2");
      let titulo = div2.querySelector("[titulo]");
      let titulo2 = div2.querySelector("[titulo2]");
      titulo2.innerHTML = titulo.innerHTML;
      menu2.innerHTML = menu.innerHTML;
    }
  };
  customElements.define("x-titulo-imagen-menu", TituloImagenMenu);

  // src/vanilla/w3-estudio/ide/w3css/tabla/tabla.js
  var template50 = (
    /*html*/
    `
<div class="w3-row w3-margin-top" tabla>

<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<div class="w3-col s8" propiedades contenido-componente>  

<div class="w3-responsive">
<button no-usar id="add-col" class="w3-button w3-blue w3-right w3-margin">
    <i class="fa fa-plus"></i> col
</button>
<button no-usar id="add-row" class="w3-button w3-blue w3-right w3-margin">
    <i class="fa fa-plus"></i> row
</button>

<table class="w3-table-all" >    
    <tr id="columnas" propiedades>
        <th propiedades contenteditable="true">Col 1</th>
    </tr>
    <tr fila>
        <td propiedades contenteditable="true">dato</td>
    </tr>
</table>
</div>

</div>

</div>

`
  );
  var style45 = "";
  var TablaHtml = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
      this.addListeners();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style45}</style>
            ${template50}
        `;
      this.columnas = shadowRoot2.querySelector("#columnas");
    }
    addAllListenersShadowRoot() {
      this.columnas = this.shadowRoot.querySelector("#columnas");
      this.addListenersPropiedades();
      this.addListeners();
      let data2 = this.columnas.querySelectorAll("th");
      for (let th of data2) {
        this.addListenereliminarColumna(th);
      }
    }
    addListeners() {
      const btn = this.shadowRoot.querySelector("#add-col");
      btn.addEventListener("click", (ev) => {
        this.addColumna();
      });
      const btnRow = this.shadowRoot.querySelector("#add-row");
      btnRow.addEventListener("click", (ev) => {
        this.addFila();
      });
    }
    addColumna() {
      let col = document.createElement("th");
      col.id = Date.now();
      col.innerHTML = `<span propiedades contenteditable="true">col</span> 
        <i class="fa fa-trash w3-hover-text-red w3-right" no-usar></i>`;
      this.columnas.appendChild(col);
      let filas = this.shadowRoot.querySelectorAll("[fila]");
      for (let fila of filas) {
        this.addColAFila(fila);
      }
      this.addListenereliminarColumna(col);
    }
    addListenereliminarColumna(col) {
      let basurero = col.querySelector("i");
      if (!basurero)
        return;
      basurero.addEventListener("click", (ev) => {
        let cols = this.columnas.querySelectorAll("th");
        let indice = 0;
        for (let c of cols) {
          if (c.id == col.id) {
            break;
          }
          indice++;
        }
        this.removerColunaDeFilas(indice);
        col.remove();
      });
    }
    removerColunaDeFilas(indice) {
      let filas = this.shadowRoot.querySelectorAll("[fila]");
      for (let fila of filas) {
        let td = fila.querySelectorAll("td");
        td[indice].remove();
      }
    }
    addFila() {
      console.log("si");
      let row = document.createElement("tr");
      row.setAttribute("fila", "");
      let cols = this.columnas.querySelectorAll("th");
      let data2 = "";
      for (let d of cols) {
        data2 += `<td propiedades contenteditable="true">dato</td>`;
      }
      row.innerHTML = data2;
      let tabla = this.shadowRoot.querySelector("table").querySelector("tbody");
      tabla.appendChild(row);
    }
    addColAFila(tr) {
      let col = document.createElement("td");
      col.innerHTML = "data";
      col.setAttribute("contenteditable", "true");
      col.setAttribute("propiedades", "");
      tr.appendChild(col);
    }
    getHtml() {
      const original = this.shadowRoot.querySelector("[tabla]");
      const div2 = original.cloneNode(true);
      this.removerNoUsar(div2);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style45;
    }
    getScrip() {
      return "";
    }
  };
  customElements.define("x-tabla", TablaHtml);

  // src/vanilla/w3-estudio/ide/w3css/basicos/lista.js
  var template51 = (
    /*html*/
    `
<div class="w3-row lista w3-margin-top">
<div class="w3-col s2 w3-center" propiedades espacio-componente>        
    <span id="add" class="w3-button w3-blue w3-circle" no-usar>+</span>
</div>
<div class="w3-col s8" propiedades contenido-componente>
    <ul class="w3-ul w3-border">
        <li contenteditable="true" propiedades>Item
        <span eliminar class="w3-right w3-border w3-circle w3-red w3-center w3-hover-grey" style="width: 24px;" no-usar>-</span>
        </li>
    </ul>
</div>
</div>

`
  );
  var style46 = "";
  var Lista = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style46}</style>
            ${template51}
        `;
      this.addListeners();
    }
    addListeners() {
      let add = this.shadowRoot.querySelector("#add");
      add.addEventListener("click", (ev) => {
        this.addItem();
      });
      let lista4 = this.shadowRoot.querySelectorAll("[eliminar]");
      for (let item of lista4) {
        this.addListenerEliminar(item);
      }
    }
    addItem() {
      let lista4 = this.shadowRoot.querySelector("ul");
      let li = document.createElement("li");
      li.setAttribute("contenteditable", "true");
      li.setAttribute("propiedades", "");
      li.innerHTML = `Item
        <span eliminar no-usar
            class="w3-right w3-border w3-circle w3-red w3-center  w3-hover-grey" 
            style="width: 24px;">-</span>`;
      let eliminar = li.querySelector("[eliminar]");
      this.addListenerEliminar(eliminar);
      li.addEventListener("click", (ev) => {
        this.propiedades.setItem(this.tagName, li);
        ev.stopPropagation();
        ev.preventDefault();
      });
      lista4.append(li);
    }
    addAllListenersShadowRoot() {
      super.addAllListenersShadowRoot();
      this.addListeners();
    }
    /**
     * Agrega 
     * @param {HTMLElement} eliminar 
     */
    addListenerEliminar(eliminar) {
      eliminar.addEventListener("click", (ev) => {
        eliminar.parentNode.remove();
      });
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".lista");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style46;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".lista");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-lista", Lista);

  // src/vanilla/w3-estudio/ide/w3css/basicos/alerta.js
  var template52 = (
    /*html*/
    `
<div class="w3-row alerta w3-margin-top">
<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<div class="w3-col s8" propiedades contenido-componente>
    <div class="w3-panel w3-yellow w3-border" propiedades>
        <h3 contenteditable="true" propiedades><i class="fa fa-warning" propiedades></i> Precauci\xF3n!</h3>
        <p contenteditable="true" propiedades>El amarillo suele indicar una advertencia que podr\xEDa necesitar atenci\xF3n.</p>
    </div>
</div>
</div>

`
  );
  var style47 = "";
  var AlertaTexto = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style47}</style>
            ${template52}
        `;
    }
    getHtml() {
      const div2 = this.shadowRoot.querySelector(".alerta");
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style47;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".alerta");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-alerta", AlertaTexto);

  // src/vanilla/w3-estudio/ide/w3css/basicos/progress-bar.js
  var template53 = (
    /*html*/
    `
<div class="w3-row progress-bar w3-margin-top">
<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<div class="w3-col s8" propiedades contenido-componente>
    <div class="w3-light-grey" propiedades>
        <div class="w3-container w3-green" style="width:50%" propiedades contenteditable="true">50%</div>
    </div>
</div>
</div>

`
  );
  var style48 = "";
  var ProgressBar = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style48}</style>
            ${template53}
        `;
    }
    getHtml() {
      const div2 = this.shadowRoot.querySelector(".progress-bar");
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style48;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".progress-bar");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-progress-bar", ProgressBar);

  // src/vanilla/w3-estudio/ide/w3css/basicos/boton.js
  var template54 = (
    /*html*/
    `
<div class="w3-row boton w3-margin-top">
<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<div class="w3-col s8" propiedades contenido-componente>
    <span class="w3-button w3-red" propiedades contenteditable="true">Red</span>
</div>
</div>

`
  );
  var style49 = "";
  var BotonWCC = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style49}</style>
            ${template54}
        `;
    }
    getHtml() {
      const div2 = this.shadowRoot.querySelector(".boton");
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style49;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".boton");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-boton", BotonWCC);

  // src/vanilla/w3-estudio/ide/w3css/basicos/video.js
  var template55 = (
    /*html*/
    `


<div class="w3-row" no-usar>
    <div class="w3-col s12 w3-center">
    <button class="w3-button w3-blue">Cargar video</button>
    </div>
</div>

<div class="w3-row w3-margin-top" video>
<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<video id="video" propiedades
    src="https://www.w3schools.com/html/mov_bbb.mp4" 
    controls="controls"
    class="w3-col s8"
    contenido-componente
    >        
</video> 
</div>


`
  );
  var style50 = `
.cls-imagen{
    width: 100%;
    border-radius: 5px;
}
`;
  var VideoComponente = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `            
            <style>${style50}</style>
            ${template55}
        `;
      this.addListeners();
    }
    addListeners() {
      let btn = this.shadowRoot.querySelector("button");
      btn.addEventListener("click", this.onChangeImg.bind(this));
    }
    onChangeImg() {
      const video = this.shadowRoot.querySelector("video");
      let dlg2 = new ModalGet("Dame url de imagen", video.src);
      dlg2.open().then((dlg3) => {
        video.src = dlg3.data;
        video.load();
      });
    }
    getHtml() {
      const div2 = this.shadowRoot.querySelector("[video]");
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style50;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector("[video]");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
    addAllListenersShadowRoot() {
      this.addListenersPropiedades();
      this.addListeners();
    }
  };
  customElements.define("x-video", VideoComponente);

  // src/vanilla/w3-estudio/ide/w3css/basicos/youtube.js
  var template56 = (
    /*html*/
    `


<div class="w3-row w3-margin-bottom" no-usar>
    <div class="w3-col s12 w3-center">
    <button class="w3-button w3-blue">Cargar video</button>
    </div>
</div>

<div class="w3-row-padding" youtube>
	<div class="w3-col s2 espacio"></div>
    <div class="w3-col s8">
    	<div class="contenedor">
    	<iframe class="video" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" type="text/html" src="https://www.youtube.com/embed/sI7nXVKJVmU?hd=1" allowfullscreen><div><small><a href="https://youtubeembedcode.com/nl/">youtubeembedcode nl</a></small></div><div><small><a href="https://mibew.org/">afforadablle targeted web traffic</a></small></div></iframe>
    	</div>    
    </div>	
</div>


`
  );
  var style51 = `
.cls-imagen{
    width: 100%;
    border-radius: 5px;
}
.contenedor{
	position: relative;   	
	padding-top: 56.25%;
    width: 100%;
}

.video{
	position:  absolute;
   	top: 0;
   	left: 0;
   	width: 100%;
    height: 100%;
}
`;
  var YoutubeComponente = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `            
            <style>${style51}</style>
            ${template56}
        `;
      this.addListeners();
    }
    addListeners() {
      let btn = this.shadowRoot.querySelector("button");
      btn.addEventListener("click", this.onChangeImg.bind(this));
    }
    onChangeImg() {
      const video = this.shadowRoot.querySelector(".video");
      let dlg2 = new ModalGet("Dame url de imagen", "");
      dlg2.open().then((dlg3) => {
        this.setUrl(dlg3.data);
      });
    }
    setUrl(url) {
      const video = this.shadowRoot.querySelector(".video");
      let params = new URL(url).searchParams;
      let idVideo = params.get("v");
      if (idVideo) {
        video.src = `https://www.youtube.com/embed/${idVideo}?hd=1`;
      } else {
        alert("La ruta no es v\xE1lida. <br> Una ruta valida es: https://www.youtube.com/watch?v=sI7nXVKJVmU");
      }
    }
    getHtml() {
      const div2 = this.shadowRoot.querySelector("[youtube]");
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style51;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector("[youtube]");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
    addAllListenersShadowRoot() {
      this.addListenersPropiedades();
      this.addListeners();
    }
  };
  customElements.define("x-youtube", YoutubeComponente);

  // src/vanilla/w3-estudio/ide/w3css/disenio/n-columns.js
  init_modal();
  var template57 = (
    /*html*/
    `
<div class="w3-row w3-margin" no-usar>
    <div class="w3-col s12">
        <button class="w3-blue w3-button w3-circle w3-right" addcol>+</button>
    </div>
</div>
<div class="w3-row" ncolumnas propiedades>
</div>

`
  );
  function getListaOptions() {
    let options = "";
    let lista4 = appsVistasW3css.find((item) => item.nombre == "B\xE1sicos");
    for (let item of lista4.apps) {
      options += `<option value="${item.tag}">${item.nombre}</option>`;
    }
    return options;
  }
  var style52 = "";
  function getComponentes(columna, tipo2) {
    let componentes = columna.querySelectorAll("[componente]");
    let codigo2 = "";
    for (let c of componentes) {
      if (tipo2 == "html") {
        codigo2 += c.getHtml();
      } else if (tipo2 == "vue") {
        codigo2 += c.getHtml();
      } else if (tipo2 == "angular") {
        codigo2 += c.getHtml();
      }
    }
    return codigo2;
  }
  function createFila(columnas, tipo2) {
    let fila = document.createElement("div");
    fila.classList.value = "w3-row";
    let cols = columnas.querySelectorAll("[columna]");
    for (let col of cols) {
      let columna = document.createElement("div");
      columna.classList.value = col.classList.value;
      columna.classList.remove("w3-border");
      columna.innerHTML = getComponentes(col, tipo2);
      fila.append(columna);
    }
    return fila;
  }
  var NColumna = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style52}</style>
            ${template57}
        `;
      this.addListeners();
    }
    setShadowRoot(shadowRoot2) {
      this.shadowRoot.innerHTML = shadowRoot2;
      let componentes = this.shadowRoot.querySelectorAll("[crear-componente]");
      for (let c of componentes) {
        let tag2 = c.getAttribute("crear-componente").toLowerCase();
        let tagItem = document.createElement(tag2);
        tagItem.setAttribute("tipo", c.getAttribute("tipo"));
        tagItem.setPropiedades(this.propiedades);
        tagItem.setShadowRoot(c.innerHTML);
        tagItem.setAttribute("componente", "exportar");
        c.after(tagItem);
        c.remove();
      }
      this.addAllListenersShadowRoot();
    }
    getShadowRoot() {
      let copia = this.shadowRoot.querySelector("[ncolumnas]").cloneNode(true);
      let componentes = copia.querySelectorAll("[componente]");
      for (let c of componentes) {
        let div2 = document.createElement("div");
        let padre = c.parentNode;
        let padreShadown = this.shadowRoot.querySelector(`#${padre.id}`);
        let c2 = padreShadown.querySelector("[componente]");
        div2.innerHTML = c2.getShadowRoot();
        div2.setAttribute("crear-componente", c.tagName);
        div2.setAttribute("tipo", c.getAttribute("tipo"));
        c.after(div2);
        c.remove();
      }
      let texto = this.shadowRoot.innerHTML;
      let i = texto.indexOf('<div class="w3-row" ncolumnas="" propiedades="">');
      texto = texto.substring(0, i);
      texto += '<div class="w3-row" ncolumnas="" propiedades="">' + copia.innerHTML + "</div>";
      return texto;
    }
    addAllListenersShadowRoot() {
      super.addAllListenersShadowRoot();
      this.addListeners();
      this.addListenersColumnas();
    }
    addListenersColumnas() {
      let cols = this.shadowRoot.querySelectorAll("[columna]");
      let columnas = this.shadowRoot.querySelector("[ncolumnas]");
      for (let col of cols) {
        this.addListenerColumna(col, columnas);
        this.addListenerItemsColumna(col);
      }
    }
    addListenerItemsColumna(col) {
      let items = col.querySelectorAll("[contenedor]");
      for (let item of items) {
        this.addListenesSwapArribaAbajo(item, col);
        let componente = item.querySelector("[componente]");
        componente.setPropiedades(this.propiedades);
        this.eliminarItemColumna(item);
      }
    }
    eliminarItemColumna(item) {
      const eliminar = item.querySelector("#eliminar");
      let dlg2 = new Modal();
      dlg2.innerHtml = "Desea eliminar este componente?";
      dlg2.titulo = "Confirmaci\xF3n";
      eliminar.addEventListener("click", (e) => {
        const componente = e.target.parentNode.parentNode;
        dlg2.open().then((r) => {
          componente.remove();
          this.propiedades.setItem("", null);
        });
      });
    }
    addListenerColumna(col, columnas) {
      this.addListenerSize(col);
      this.addListenerEliminar(col);
      this.addListenerColumnaSwap(col, columnas);
      this.addListenerAgregarItem(col);
    }
    addListeners() {
      let addcol = this.shadowRoot.querySelector("[addcol]");
      addcol.addEventListener("click", (ev) => this.addColumuna());
    }
    addColumuna() {
      let columnas = this.shadowRoot.querySelector("[ncolumnas]");
      let col = document.createElement("div");
      col.setAttribute("columna", "");
      col.id = "col" + Date.now();
      col.classList.value = "w3-col s6 espacio w3-border w3-hover-border-blue";
      col.innerHTML = /*html*/
      `
            <div class="basura w3-right w3-hover-text-red" style="top: -4px; position: relative;"><i class="fa fa-trash" id="eliminar"></i></div>
            <div 
                style="top: 0; position: relative; width: fit-content;" class="w3-blue w3-hover-teal w3-tiny">
                columna
            </div>
            <div class="w3-row">
                <div class="w3-col s12 m6 w3-small" no-usar>
                    <label>Tama\xF1o</label><br>
                    <input class="w3-input w3-border" value="s6 m6" size>
                </div>
                <div class="w3-col s12 m6" no-usar="" style="transform: scale(0.5);">
                    <span class="w3-button w3-circle w3-black" id="izquierda" no-usar="">
                        <i class="fa fa-arrow-left"></i>                </span>
                    <span id="derecha" class="w3-button w3-circle w3-black" no-usar="">
                        <i class="fa fa-arrow-right"></i>
                    </span>
                    <span id="agregar" class="w3-button w3-circle w3-blue" no-usar="">
                        <i class="fa fa-plus"></i>
                    </span>
                </div>                           
            </div>
        `;
      columnas.append(col);
      this.addListenerColumna(col, columnas);
    }
    creaBotones() {
      let div2 = document.createElement("div");
      div2.classList.value = "w3-col s12 m12";
      div2.style.transform = "scale(0.5)";
      div2.innerHTML = `        
            <span class="w3-button w3-circle w3-black" id="arriba" no-usar="">
                <i class="fa fa-arrow-up"></i>                </span>
            <span id="abajo" class="w3-button w3-circle w3-black" no-usar="">
                <i class="fa fa-arrow-down"></i>
            </span>
        `;
      return div2;
    }
    swapArriba(div2, col) {
      let superior = null;
      let lista4 = col.querySelectorAll("[contenedor]");
      for (let item of lista4) {
        if (item.id == div2.id) {
          break;
        }
        if (item.hasAttribute("contenedor")) {
          superior = item;
        }
      }
      if (superior) {
        swapElementsDom(superior, div2);
      }
    }
    swapAbajo(div2, col) {
      let inferiror = null;
      let estaDiv = false;
      let lista4 = col.querySelectorAll("[contenedor]");
      for (let item of lista4) {
        if (estaDiv && item.hasAttribute("contenedor")) {
          inferiror = item;
          break;
        }
        if (item.id == div2.id) {
          estaDiv = true;
        }
      }
      if (inferiror) {
        swapElementsDom(inferiror, div2);
      }
    }
    addListenesSwapArribaAbajo(item, col) {
      let arriba = item.querySelector("#arriba");
      let abajo = item.querySelector("#abajo");
      arriba.addEventListener("click", (ev) => {
        this.swapArriba(item, col);
      });
      abajo.addEventListener("click", (ev) => {
        this.swapAbajo(item, col);
      });
    }
    addListenerAgregarItem(col) {
      let dlg2 = new ModalForm();
      dlg2.innerHtml = `<div class="w3-container">
        <label>Tipo de componente</label>
        <select class="w3-select" name="tag" dato-salida>
        ${getListaOptions()}
        </select>
        </div>`;
      let agregar = col.querySelector("#agregar");
      agregar.addEventListener("click", (ev) => {
        dlg2.open().then((data2) => {
          const div2 = createContenido(data2.data.tag, data2.data.tag, this.propiedades);
          let componente = div2.querySelector("[componente]");
          let botones = this.creaBotones();
          div2.append(botones);
          swapElements(componente, botones);
          this.addListenesSwapArribaAbajo(div2, col);
          col.append(div2);
        });
      });
    }
    /**
     * Agrega listener de swap
     * @param {HTMLElement} col 
     */
    addListenerColumnaSwap(col, cols) {
      let izquierda = col.querySelector("#izquierda");
      let derecha = col.querySelector("#derecha");
      izquierda.addEventListener("click", (ev) => this.swapIzquierda(col, cols));
      derecha.addEventListener("click", (ev) => this.swapDerecha(col, cols));
    }
    /**
     * Intercambia el div con la columna a la izquierda
     * @param {HTMLElement} div 
     * @param {HTMLElement} cols 
     */
    swapIzquierda(div2, cols) {
      let izquierda = null;
      for (let item of cols.childNodes) {
        if (item.id == div2.id) {
          break;
        }
        if (item.tagName == "DIV") {
          izquierda = item;
        }
      }
      if (izquierda) {
        swapElementsDom(izquierda, div2);
      }
    }
    /**
     * Intercambia el div con la columna a la derecha
     * @param {HTMLElement} div 
     * @param {HTMLElement} cols 
     */
    swapDerecha(div2, cols) {
      let derecha = null;
      let estaDiv = false;
      for (let item of cols.childNodes) {
        if (estaDiv && item.tagName == "DIV") {
          derecha = item;
          break;
        }
        if (item.id == div2.id) {
          estaDiv = true;
        }
      }
      if (derecha) {
        swapElementsDom(derecha, div2);
      }
    }
    /**
     * Agrega la funcion de eliminar la columna
     * @param {HTMLElement} col 
     */
    addListenerEliminar(col) {
      let eliminar = col.querySelector("#eliminar");
      eliminar.addEventListener("click", (ev) => {
        let dlg2 = new Modal();
        dlg2.titulo = "Confirmaci\xF3n";
        dlg2.innerHtml = "Desea Eliminar la columna?";
        dlg2.open().then((e) => {
          col.remove();
        });
      });
    }
    /**
     * Agrega listener al size de la columna
     * @param {HTMLElement} col 
     */
    addListenerSize(col) {
      let size = col.querySelector("[size]");
      size.addEventListener("change", (ev) => {
        col.classList.value = `w3-col ${size.value} espacio w3-border`;
      });
    }
    getHtml() {
      const original = this.shadowRoot.querySelector("[ncolumnas]");
      let contenido = createFila(original, "html");
      return this.getInnerHtml(contenido);
    }
    getStyle() {
      let estilos = "";
      let componentes = this.shadowRoot.querySelectorAll("[componente]");
      let conjunto = /* @__PURE__ */ new Set();
      for (let c of componentes) {
        const tag2 = c.tagName;
        if (!conjunto.has(tag2)) {
          conjunto.add(tag2);
          estilos += c.getStyle();
        }
      }
      return style52 + estilos;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector("[ncolumnas]");
      let div2 = original.cloneNode(true);
      let contenido = createFila(div2, "angular");
      return this.getInnerHTMLAngular(contenido);
    }
  };
  customElements.define("x-ncol", NColumna);

  // src/vanilla/w3-estudio/ide/w3css/disenio/div.js
  init_config();
  init_modal();

  // src/vanilla/w3-estudio/ide/w3css/disenio/utils.js
  function getComponentes2(columna, tipo2) {
    let componentes = columna.querySelectorAll("[componente]");
    let codigo2 = "";
    for (let c of componentes) {
      if (tipo2 == "html") {
        codigo2 += c.getHtml();
      } else if (tipo2 == "vue") {
        codigo2 += c.getHtml();
      } else if (tipo2 == "angular") {
        codigo2 += c.getHtml();
      }
    }
    return codigo2;
  }
  function getMetodosWebcomponente(columna, tipo2) {
    let componentes = columna.querySelectorAll("[componente]");
    let codigo2 = "";
    for (let c of componentes) {
      if (tipo2 == "html") {
        codigo2 += c.getWebComponenteMetodos();
      } else if (tipo2 == "vue") {
        codigo2 += c.getVueMetodos();
      } else if (tipo2 == "angular") {
        codigo2 += c.getAngularMetodos();
      }
    }
    return codigo2;
  }
  function getInitComponente(columna, tipo2) {
    let componentes = columna.querySelectorAll("[componente]");
    let codigo2 = "";
    for (let c of componentes) {
      if (tipo2 == "html") {
        codigo2 += c.getWebComponenteInit();
      } else if (tipo2 == "vue") {
        codigo2 += c.getVueInit();
      } else if (tipo2 == "angular") {
        codigo2 += c.getAngularInit();
      }
    }
    return codigo2;
  }

  // src/vanilla/w3-estudio/ide/w3css/disenio/div.js
  var template58 = (
    /*html*/
    `
<div class="w3-row" div-x>
<div class="w3-col s12">
    <div class="w3-border w3-hover-border-red" div-custom propiedades style="min-height: 50px">
    </div>
</div>
</div>
`
  );
  var style53 = "";
  function creaDiv(original) {
    const div2 = document.createElement("div");
    div2.classList.value = "w3-row";
    let custom = original.querySelector("[div-custom]");
    let clases = custom.classList.value;
    clases = clases.replace("w3-border", "");
    let codigo2 = getComponentes2(custom, "html");
    div2.innerHTML = `
    <div class="w3-col s12">
        <div class="${clases}" style="${custom.style.cssText}" custom>
            ${codigo2}
        </div>
    </div>
    `;
    let div22 = div2.querySelector("[custom]");
    div22.style.cssText = custom.style.cssText;
    return div2;
  }
  var DivCustom = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
      this.item1 = null;
      this.item2 = null;
      this.addListeners();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      this.codigoInicial = shadowRoot2.innerHTML;
      shadowRoot2.innerHTML += `
            <style>${style53}</style>
            ${template58}
        `;
    }
    setShadowRoot(shadowRoot2) {
      this.shadowRoot.innerHTML = shadowRoot2;
      let componentes = this.shadowRoot.querySelectorAll("[crear-componente]");
      for (let c of componentes) {
        let tag2 = c.getAttribute("crear-componente").toLowerCase();
        let tagItem = document.createElement(tag2);
        tagItem.setAttribute("tipo", c.getAttribute("tipo"));
        tagItem.setPropiedades(this.propiedades);
        tagItem.setShadowRoot(c.innerHTML);
        tagItem.setAttribute("componente", "exportar");
        this.addListenersItem(tagItem);
        c.after(tagItem);
        c.remove();
      }
      this.addAllListenersShadowRoot();
    }
    addAllListenersShadowRoot() {
      super.addAllListenersShadowRoot();
      this.addListeners();
      let contenedores = this.shadowRoot.querySelectorAll("[contenedor]");
      for (let contenedor of contenedores) {
        this.addEventoEliminarContenedor(contenedor);
      }
    }
    addEventoEliminarContenedor(div2) {
      let basura = div2.querySelector("#eliminar");
      basura.addEventListener("click", (ev) => {
        let dlg2 = new Modal();
        dlg2.innerHtml = "Desea eliminar este item?";
        dlg2.open().then((data2) => {
          div2.remove();
        });
      });
    }
    getShadowRoot() {
      let copia = this.shadowRoot.querySelector("[div-custom]").cloneNode(true);
      let componentes = copia.querySelectorAll("[componente]");
      for (let c of componentes) {
        let div2 = document.createElement("div");
        let padre = c.parentNode;
        let padreShadown = this.shadowRoot.querySelector(`#${padre.id}`);
        let c2 = padreShadown.querySelector("[componente]");
        div2.innerHTML = c2.getShadowRoot();
        div2.setAttribute("crear-componente", c.tagName);
        div2.setAttribute("tipo", c.getAttribute("tipo"));
        c.after(div2);
        c.remove();
      }
      let shadow = `
            ${this.codigoInicial}
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style53}</style>
            <div class="w3-row" div-x>
            <div class="w3-col s12">
                <div class="${copia.classList.value}" div-custom propiedades style="min-height: 50px">
                ${copia.innerHTML}
                </div>
            </div>
            </div>            
        `;
      return shadow;
    }
    addListeners() {
      let div2 = this.shadowRoot.querySelector("[div-custom]");
      div2.addEventListener("drop", (ev) => this.drop(ev, div2));
    }
    drop(ev, col) {
      if (this.item1 && this.item2 && this.item1.id != this.item2.id) {
        swapElementsDom(this.item1, this.item2);
        this.item1 = null;
        this.item2 = null;
      }
      if (this.item1 && this.item1.id == this.item2.id) {
        col.append(this.item1);
      }
      const jsonapp = ev.dataTransfer.getData("app");
      let app3 = null;
      if (jsonapp) {
        app3 = JSON.parse(jsonapp);
        this.agregaTagApp(app3.tag, col);
      }
      ev.preventDefault();
      ev.stopPropagation();
    }
    agregaTagApp(tag2, col) {
      const div2 = createContenido(tag2, tag2, this.propiedades, null, "w3css", "2 8", 0);
      this.addListenersItem(div2);
      col.append(div2);
    }
    addListenersItem(div2) {
      div2.addEventListener("dragover", (ev) => this.allowDrop(ev, div2));
      div2.addEventListener("dragstart", (ev) => this.dragStarSwap(ev, div2));
    }
    allowDrop(ev, div2) {
      this.item2 = div2;
      ev.preventDefault();
    }
    dragStarSwap(ev, div2) {
      this.item1 = div2;
    }
    getHtml() {
      const original = this.shadowRoot.querySelector("[div-x]");
      const div2 = creaDiv(original);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      let estilos = "";
      let componentes = this.shadowRoot.querySelectorAll("[componente]");
      let conjunto = /* @__PURE__ */ new Set();
      for (let c of componentes) {
        const tag2 = c.tagName;
        if (!conjunto.has(tag2)) {
          conjunto.add(tag2);
          estilos += c.getStyle();
        }
      }
      return style53 + estilos;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector("[div-x]");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
    getWebComponenteMetodos() {
      let codigo2 = "";
      const div2 = this.shadowRoot.querySelector("[div-custom]");
      codigo2 += getMetodosWebcomponente(div2, "html");
      return codigo2;
    }
    getWebComponenteInit() {
      const div2 = this.shadowRoot.querySelector("[div-custom]");
      let codigo2 = getInitComponente(div2, "html");
      return codigo2;
    }
  };
  customElements.define("x-div", DivCustom);

  // src/vanilla/w3-estudio/ide/w3css/disenio/paneles-columnas.js
  init_config();
  init_modal();
  var template59 = (
    /*html*/
    `
<div class="w3-row w3-margin" no-usar>
    <div class="w3-col s12">
        <button class="w3-blue w3-button w3-circle w3-right" addcol>+</button>
    </div>
</div>
<div class="w3-row-padding" ncolumnas propiedades>
</div>

`
  );
  var style54 = "";
  function createFila2(columnas, tipo2) {
    let fila = document.createElement("div");
    fila.classList.value = columnas.classList.value;
    let cols = columnas.querySelectorAll("[columna]");
    for (let col of cols) {
      let columna = document.createElement("div");
      columna.classList.value = col.classList.value;
      columna.classList.remove("w3-border");
      columna.innerHTML = getComponentes2(col, tipo2);
      fila.append(columna);
    }
    return fila;
  }
  var PanelesColumna = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
      this.item1 = null;
      this.item2 = null;
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      this.codigoInicial = shadowRoot2.innerHTML;
      shadowRoot2.innerHTML += `
            <style>${style54}</style>
            ${template59}
        `;
      this.addListeners();
    }
    setShadowRoot(shadowRoot2) {
      this.shadowRoot.innerHTML = shadowRoot2;
      let componentes = this.shadowRoot.querySelectorAll("[crear-componente]");
      for (let c of componentes) {
        let tag2 = c.getAttribute("crear-componente").toLowerCase();
        let tagItem = document.createElement(tag2);
        tagItem.setAttribute("tipo", c.getAttribute("tipo"));
        tagItem.setPropiedades(this.propiedades);
        tagItem.setShadowRoot(c.innerHTML);
        tagItem.setAttribute("componente", "exportar");
        c.after(tagItem);
        c.remove();
      }
      this.addAllListenersShadowRoot();
    }
    getShadowRoot() {
      let copia = this.shadowRoot.querySelector("[ncolumnas]").cloneNode(true);
      let componentes = copia.querySelectorAll("[componente]");
      for (let c of componentes) {
        let div2 = document.createElement("div");
        let padre = c.parentNode;
        let padreShadown = this.shadowRoot.querySelector(`#${padre.id}`);
        let c2 = padreShadown.querySelector("[componente]");
        div2.innerHTML = c2.getShadowRoot();
        div2.setAttribute("crear-componente", c.tagName);
        div2.setAttribute("tipo", c.getAttribute("tipo"));
        c.after(div2);
        c.remove();
      }
      let texto = "";
      texto += '<div class="w3-row" ncolumnas="" propiedades="">' + copia.innerHTML + "</div>";
      let shadow = `
            ${this.codigoInicial}
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style54}</style>
            <div class="w3-row w3-margin" no-usar>
                <div class="w3-col s12">
                    <button class="w3-blue w3-button w3-circle w3-right" addcol>+</button>
                </div>
            </div>
            ${texto}
        `;
      return shadow;
    }
    addAllListenersShadowRoot() {
      super.addAllListenersShadowRoot();
      this.addListeners();
      this.addListenersColumnas();
    }
    addListenersColumnas() {
      let cols = this.shadowRoot.querySelectorAll("[columna]");
      let columnas = this.shadowRoot.querySelector("[ncolumnas]");
      for (let col of cols) {
        this.addListenerColumna(col, columnas);
      }
    }
    eliminarItemColumna(item) {
      const eliminar = item.querySelector("#eliminar");
      let dlg2 = new Modal();
      dlg2.innerHtml = "Desea eliminar este componente?";
      dlg2.titulo = "Confirmaci\xF3n";
      eliminar.addEventListener("click", (e) => {
        const componente = e.target.parentNode.parentNode;
        dlg2.open().then((r) => {
          componente.remove();
          this.propiedades.setItem("", null);
        });
      });
    }
    addListenerColumna(col, columnas) {
      this.addListenerSize(col);
      this.addListenerEliminar(col);
      this.addListenerColumnaSwap(col, columnas);
      col.addEventListener("drop", (ev) => this.drop(ev, col));
    }
    addListeners() {
      let addcol = this.shadowRoot.querySelector("[addcol]");
      addcol.addEventListener("click", (ev) => this.addColumuna());
    }
    addColumuna() {
      let columnas = this.shadowRoot.querySelector("[ncolumnas]");
      let col = document.createElement("div");
      col.setAttribute("columna", "");
      col.id = "col" + Date.now();
      col.classList.value = "w3-col s6 espacio w3-border w3-hover-border-blue";
      col.innerHTML = /*html*/
      `
            <div class="basura w3-right w3-hover-text-red" style="top: -4px; position: relative;"><i class="fa fa-trash" id="eliminar"></i></div>
            <div 
                style="top: 0; position: relative; width: fit-content;" class="w3-blue w3-hover-teal w3-tiny">
                columna
            </div>
            <div class="w3-row">
                <div class="w3-col s12 m6 w3-small" no-usar>
                    <label>Tama\xF1o</label><br>
                    <input class="w3-input w3-border" value="s6 m6" size>
                </div>
                <div class="w3-col s12 m6" no-usar="" style="transform: scale(0.5);">
                    <span class="w3-button w3-circle w3-black" id="izquierda" no-usar="">
                        <i class="fa fa-arrow-left"></i>                </span>
                    <span id="derecha" class="w3-button w3-circle w3-black" no-usar="">
                        <i class="fa fa-arrow-right"></i>
                    </span>
                </div>                           
            </div>
        `;
      columnas.append(col);
      this.addListenerColumna(col, columnas);
    }
    addListenersItem(div2) {
      div2.addEventListener("dragover", (ev) => this.allowDrop(ev, div2));
      div2.addEventListener("dragstart", (ev) => this.dragStarSwap(ev, div2));
    }
    allowDrop(ev, div2) {
      this.item2 = div2;
      ev.preventDefault();
    }
    dragStarSwap(ev, div2) {
      this.item1 = div2;
    }
    drop(ev, col) {
      if (this.item1 && this.item2 && this.item1.id != this.item2.id) {
        swapElementsDom(this.item1, this.item2);
        this.item1 = null;
        this.item2 = null;
      }
      if (this.item1 && this.item1.id == this.item2.id) {
        col.append(this.item1);
      }
      const jsonapp = ev.dataTransfer.getData("app");
      let app3 = null;
      if (jsonapp) {
        app3 = JSON.parse(jsonapp);
        this.agregaTagApp(app3.tag, col);
      }
      ev.preventDefault();
      ev.stopPropagation();
    }
    agregaTagApp(tag2, col) {
      const div2 = createContenido(tag2, tag2, this.propiedades, null, "w3css", "2 8", 0);
      let itemTag = div2.querySelector(tag2);
      itemTag.setEspaciado("1 12", "1 12", "1 12");
      this.addListenersItem(div2);
      col.append(div2);
    }
    /**
     * Agrega listener de swap
     * @param {HTMLElement} col 
     */
    addListenerColumnaSwap(col, cols) {
      let izquierda = col.querySelector("#izquierda");
      let derecha = col.querySelector("#derecha");
      izquierda.addEventListener("click", (ev) => this.swapIzquierda(col, cols));
      derecha.addEventListener("click", (ev) => this.swapDerecha(col, cols));
    }
    /**
     * Intercambia el div con la columna a la izquierda
     * @param {HTMLElement} div 
     * @param {HTMLElement} cols 
     */
    swapIzquierda(div2, cols) {
      let izquierda = null;
      for (let item of cols.childNodes) {
        if (item.id == div2.id) {
          break;
        }
        if (item.tagName == "DIV") {
          izquierda = item;
        }
      }
      if (izquierda) {
        swapElementsDom(izquierda, div2);
      }
    }
    /**
     * Intercambia el div con la columna a la derecha
     * @param {HTMLElement} div 
     * @param {HTMLElement} cols 
     */
    swapDerecha(div2, cols) {
      let derecha = null;
      let estaDiv = false;
      for (let item of cols.childNodes) {
        if (estaDiv && item.tagName == "DIV") {
          derecha = item;
          break;
        }
        if (item.id == div2.id) {
          estaDiv = true;
        }
      }
      if (derecha) {
        swapElementsDom(derecha, div2);
      }
    }
    /**
     * Agrega la funcion de eliminar la columna
     * @param {HTMLElement} col 
     */
    addListenerEliminar(col) {
      let eliminar = col.querySelector("#eliminar");
      eliminar.addEventListener("click", (ev) => {
        let dlg2 = new Modal();
        dlg2.titulo = "Confirmaci\xF3n";
        dlg2.innerHtml = "Desea Eliminar la columna?";
        dlg2.open().then((e) => {
          col.remove();
        });
      });
    }
    /**
     * Agrega listener al size de la columna
     * @param {HTMLElement} col 
     */
    addListenerSize(col) {
      let size = col.querySelector("[size]");
      size.addEventListener("change", (ev) => {
        col.classList.value = `w3-col ${size.value} espacio w3-border`;
      });
    }
    getHtml() {
      const original = this.shadowRoot.querySelector("[ncolumnas]");
      let contenido = createFila2(original, "html");
      return this.getInnerHtml(contenido);
    }
    getStyle() {
      let estilos = "";
      let componentes = this.shadowRoot.querySelectorAll("[componente]");
      let conjunto = /* @__PURE__ */ new Set();
      for (let c of componentes) {
        const tag2 = c.tagName;
        if (!conjunto.has(tag2)) {
          conjunto.add(tag2);
          estilos += c.getStyle();
        }
      }
      return style54 + estilos;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector("[ncolumnas]");
      let div2 = original.cloneNode(true);
      let contenido = createFila2(div2, "angular");
      return this.getInnerHTMLAngular(contenido);
    }
    getWebComponenteMetodos() {
      let codigo2 = "";
      const columnas = this.shadowRoot.querySelector("[ncolumnas]");
      let cols = columnas.querySelectorAll("[columna]");
      for (let col of cols) {
        codigo2 += getMetodosWebcomponente(col, "html");
      }
      return codigo2;
    }
    getWebComponenteInit() {
      let codigo2 = "";
      const columnas = this.shadowRoot.querySelector("[ncolumnas]");
      let cols = columnas.querySelectorAll("[columna]");
      for (let col of cols) {
        codigo2 += getInitComponente(col, "html");
      }
      return codigo2;
    }
    setCustomStyle(estilo) {
      super.setCustomStyle(estilo);
      let componentes = this.shadowRoot.querySelectorAll("[componente]");
      for (let c of componentes) {
        c.setCustomStyle(estilo);
      }
    }
  };
  customElements.define("x-paneles-columnas", PanelesColumna);

  // src/vanilla/w3-estudio/ide/w3css/cards/card-imagen.js
  var template60 = (
    /*html*/
    `
<div class="w3-row" card-imagen>
<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<div class="w3-col s8" propiedades contenido-componente>  

    <div class="w3-row">
    <div class="w3-col s12">    
        <div class="w3-row-padding w3-margin-top w3-margin-botton">
            <div class="w3-margin-top w3-col s12 m6 l4" clonar propiedades>
                <div class="w3-card-4">
                    <img src="./img/libres/lago.jpg" alt="Avatar" style="width:100%">
                    <div class="w3-container">
                        <h4 contenteditable="true">Lago</h4>    
                        <p contenteditable="true">Un lago interezante</p>    
                    </div>            
                </div>
            </div>
        </div>
    </div>
    </div>

</div>
</div>
`
  );
  var style55 = "";
  var CardImagen = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style55}</style>
            ${template60}
        `;
      this.addListeners();
    }
    addListeners() {
      this.addListenerImagenes();
    }
    addListenerImagenes() {
      const imgs = this.shadowRoot.querySelectorAll("img");
      for (let img of imgs) {
        img.addEventListener("click", (ev) => this.onChangeImg(img));
      }
    }
    addListenerAClon(clon) {
      super.addListenerAClon(clon);
      const img = clon.querySelector("img");
      img.addEventListener("click", (ev) => this.onChangeImg(img));
    }
    onChangeImg(img) {
      let dlg2 = new ModalGet("Dame url de imagen", img.src);
      dlg2.open().then((dlg3) => {
        img.src = dlg3.data;
      });
    }
    getHtml() {
      const original = this.shadowRoot.querySelector("[card-imagen]");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style55;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector("[card-imagen]");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-card-imagen", CardImagen);

  // src/vanilla/w3-estudio/ide/w3css/cards/card-texto.js
  var template61 = (
    /*html*/
    `
<div class="w3-row" card-texto>
<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<div class="w3-col s8" propiedades contenido-componente>  

    <div class="w3-row">
    <div class="w3-col s12">    
        <div class="w3-row-padding w3-margin-top w3-margin-botton">
            
            <div class="w3-margin-top w3-col s12 m6 l4" propiedades clonar>
                <div class="w3-blue w3-round w3-border" propiedades>
                    <div class="w3-container">
                        <h2 contenteditable="true">titulo</h2>
                        <p contenteditable="true">
                            Primary card title Some quick example text to build on the card 
                            title and make up the bulk of the card's content.
                        </p>
                    </div>  
                </div>
            </div>
            
        </div>
    </div>
    </div>

</div>
</div>
`
  );
  var style56 = "";
  var CardTexto = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style56}</style>
            ${template61}
        `;
      this.addListeners();
    }
    addListeners() {
      this.addListenerImagenes();
    }
    addListenerImagenes() {
      const imgs = this.shadowRoot.querySelectorAll("img");
      for (let img of imgs) {
        img.addEventListener("click", (ev) => this.onChangeImg(img));
      }
    }
    addListenerAClon(clon) {
      super.addListenerAClon(clon);
    }
    getHtml() {
      const original = this.shadowRoot.querySelector("[card-texto]");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style56;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector("[card-texto]");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-card-texto", CardTexto);

  // src/vanilla/w3-estudio/ide/w3css/cards/card-avatar.js
  var template62 = (
    /*html*/
    `
<div class="w3-row" card-avatar>
<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<div class="w3-col s8" propiedades contenido-componente>  

    <div class="w3-row">
    <div class="w3-col s12 m6 l6" clonar propiedades>
        <div class="w3-row-padding w3-margin-top w3-margin-botton">
            <div class="w3-card-4">
                <div class="w3-container ">
                    <p class="w3-left">
                    <img src="https://thumbs.dreamstime.com/b/retrato-de-raza-perro-del-tama%C3%B1o-gigante-mastiff-aislado-en-blanco-dibujo-arte-digital-acuarela-animales-dibujado-mano-159585456.jpg" alt="Avatar" class="w3-circle" style="width:40px; height: 40px;">
                    </p>
                    <p style="margin-left: 60px" propiedades="" contenteditable="true"><span style="font-weight: 700;">Dogo del T\xEDbet</span><br><span style="color: rgb(97, 97, 97);">Dog Breed</span></p>
                </div>
                <img src="https://i.pinimg.com/originals/55/8f/1d/558f1dddc75b65d56ec592b950bafa98.jpg" alt="Norway" style="width:100%">
                <div class="w3-container w3-center">
                    <p contenteditable="true" propiedades="">Es una antigua raza de trabajo de los pastores n\xF3madas del Himalaya y un guardi\xE1n tradicional de los monasterios tibetanos.</p>
                    <p contenteditable="true" propiedades=""><span class="w3-button w3-white">Like</span> <span class="w3-button w3-white">Shared</span></p>
                </div>
            </div>
        </div>
    </div>
    </div>

</div>
</div>
`
  );
  var style57 = "";
  var CardAvatar = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style57}</style>
            ${template62}
        `;
      this.addListeners();
    }
    addListeners() {
      this.addListenerImagenes();
    }
    addListenerImagenes() {
      const imgs = this.shadowRoot.querySelectorAll("img");
      for (let img of imgs) {
        img.addEventListener("click", (ev) => this.onChangeImg(img));
      }
    }
    addListenerAClon(clon) {
      super.addListenerAClon(clon);
      const imgs = clon.querySelectorAll("img");
      for (let img of imgs) {
        img.addEventListener("click", (ev) => this.onChangeImg(img));
      }
    }
    onChangeImg(img) {
      let dlg2 = new ModalGet("Dame url de imagen", img.src);
      dlg2.open().then((dlg3) => {
        img.src = dlg3.data;
      });
    }
    getHtml() {
      const original = this.shadowRoot.querySelector("[card-avatar]");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style57;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector("[card-avatar]");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-card-avatar", CardAvatar);

  // src/vanilla/w3-estudio/ide/w3css/cards/card-youtube.js
  var template63 = (
    /*html*/
    `
<div class="w3-row" card-youtube>
<div class="w3-col s2 espacio" propiedades espacio-componente></div>
<div class="w3-col s8" propiedades contenido-componente>  

    <div class="w3-row">
    <div class="w3-col s12 m6 l6" clonar propiedades>
        <div class="w3-row-padding w3-margin-top w3-margin-botton">            
            <img src="https://i.ytimg.com/vi/aOijL0gBnYU/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLARYMqhHbj5hRB7-UZ8prVTV-tubQ" alt="Norway" style="width:100%">
            <div class="w3-container ">
                <p class="w3-left">
                <img src="./img/icon/avatar-comentario.svg" alt="Avatar" class="w3-circle" style="width:40px; height: 40px;">
                </p>
                <p style="margin-left: 60px" propiedades="" contenteditable="true"><span style="font-weight: 700;">Desarrollo Movil Multiplataforma 2020</span><br><span style="color: rgb(97, 97, 97);">Sa\xFAl</span></p>
            </div>
        </div>
    </div>
    </div>

</div>
</div>
`
  );
  var style58 = "";
  var CardYoutube = class extends BaseW3CSS {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `                        
            <style>${style58}</style>
            ${template63}
        `;
      this.addListeners();
    }
    addListeners() {
      this.addListenerImagenes();
    }
    addListenerImagenes() {
      const imgs = this.shadowRoot.querySelectorAll("img");
      for (let img of imgs) {
        img.addEventListener("click", (ev) => this.onChangeImg(img));
      }
    }
    addListenerAClon(clon) {
      super.addListenerAClon(clon);
      const imgs = clon.querySelectorAll("img");
      for (let img of imgs) {
        img.addEventListener("click", (ev) => this.onChangeImg(img));
      }
    }
    onChangeImg(img) {
      let dlg2 = new ModalGet("Dame url de imagen", img.src);
      dlg2.open().then((dlg3) => {
        img.src = dlg3.data;
      });
    }
    getHtml() {
      const original = this.shadowRoot.querySelector("[card-youtube]");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style58;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector("[card-youtube]");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-card-youtube", CardYoutube);

  // src/vanilla/w3-estudio/ide/base/componente-bootstrap.js
  init_config();
  var BaseBootstrap = class extends BaseComponentIde {
    constructor() {
      super();
    }
    /** Agrega el template básico de los componentes w3css. El render se aplicara despues 
     * de que se monte el componente y no antes. */
    render() {
      super.render();
      this.shadowRoot.innerHTML = `
        
        <link rel="stylesheet"  id="bootstrap" href="${config.bootstrap.materia}">
        <style>${styleEditable}</style>
        <style id="custom-style"></style>
        `;
    }
    connectedCallback() {
      this.mounted();
    }
    /**
     * Metodo que se llamara para montar el componente.
     */
    mounted() {
      this.inicializaCss();
    }
    /**
     * Inicializa el tema css
     */
    inicializaCss() {
      const tipo2 = this.getAttribute("tipo");
      let css = getCss(tipo2);
      let bs = this.shadowRoot.querySelector("#bootstrap");
      bs.setAttribute("href", css);
      if (tipo2 == "sketchy") {
        this.style.fontFamily = "'Neucha', cursive";
      }
    }
  };

  // src/vanilla/w3-estudio/ide/bootstrap/basicos/titulo.js
  var template64 = (
    /*html*/
    `
<div class="row titulo">
    <div class="col-sm-2 col-md-2 espacio">        
    </div>
    <div class="col-sm-8 col-md-8">
        <h1 propiedades contenteditable="true">T\xEDtulo</h1>
    </div>
    <div class="col-sm-2 col-md-2" no-usar>
        <select class="w3-select w3-border">
            <option value="H1">H1</option>
            <option value="H2">H2</option>
            <option value="H3">H3</option>
            <option value="H4">H4</option>
            <option value="H5">H5</option>
            <option value="H6">H6</option>
        </select>
    </div>
</div>

`
  );
  var style59 = "";
  var TituloBS = class extends BaseBootstrap {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style59}</style>
            ${template64}
        `;
      this.addListeners();
    }
    addListeners() {
      let select = this.shadowRoot.querySelector("select");
      select.addEventListener("change", (ev) => {
        this.changeTitulo(select.value);
      });
    }
    changeTitulo(h) {
      let contenedor = this.shadowRoot.querySelector(".col-sm-8");
      let div2 = document.createElement(h);
      div2.setAttribute("propiedades", "");
      div2.setAttribute("contenteditable", "true");
      let titulo = contenedor.firstElementChild;
      div2.innerHTML = titulo.innerHTML;
      contenedor.append(div2);
      titulo.remove();
      this.addListenersPropiedades();
    }
    addAllListenersShadowRoot() {
      super.addAllListenersShadowRoot();
      this.addListeners();
      let contenedor = this.shadowRoot.querySelector(".col-sm-8");
      let select = this.shadowRoot.querySelector("select");
      let titulo = contenedor.firstElementChild;
      select.value = titulo.tagName;
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".titulo");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style59;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".titulo");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-bs-titulo", TituloBS);

  // src/vanilla/w3-estudio/ide/bootstrap/basicos/parrafo.js
  var template65 = (
    /*html*/
    `
<div class="row parrafo">
    <div class="col-sm-2 col-md-2 espacio">        
    </div>
    <div class="col-sm-8 col-md-8">        
        <p propiedades contenteditable="true" class="text-body">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, 
        minima eius distinctio vero perspiciatis blanditiis quis recusandae ipsum atque. 
        At debitis maxime nesciunt consectetur expedita odit dolorem voluptates iusto beatae?
        </p>
    </div>    
</div>

`
  );
  var style60 = "";
  var ParrafoBS = class extends BaseBootstrap {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style60}</style>
            ${template65}
        `;
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".parrafo");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style60;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".parrafo");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-bs-parrafo", ParrafoBS);

  // src/vanilla/w3-estudio/ide/bootstrap/basicos/boton.js
  var template66 = (
    /*html*/
    `
<div class="row boton">
    <div class="col-sm-2 col-md-2 espacio">        
    </div>
    <div class="col-sm-8 col-md-8" propiedades>
        <button type="button" class="btn btn-primary" propiedades contenteditable="true">Primary</button>
    </div>    
</div>

`
  );
  var style61 = "";
  var BotonBS = class extends BaseBootstrap {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style61}</style>
            ${template66}
        `;
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".boton");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style61;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".boton");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-bs-boton", BotonBS);

  // src/vanilla/w3-estudio/ide/bootstrap/basicos/cita.js
  var template67 = (
    /*html*/
    `
<div class="row cita">
    <div class="col-sm-2 col-md-2 espacio">        
    </div>
    <div class="col-sm-8 col-md-8">        
        <blockquote class="blockquote text-center">
            <p class="mb-0" propiedades contenteditable="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer" contenteditable="true">Someone famous in <cite title="Source Title" contenteditable="true">Source Title</cite></footer>
        </blockquote>
    </div>    
</div>

`
  );
  var style62 = "";
  var CitaBS = class extends BaseBootstrap {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style62}</style>
            ${template67}
        `;
    }
    getHtml() {
      const original = this.shadowRoot.querySelector(".cita");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style62;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".cita");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-bs-cita", CitaBS);

  // src/vanilla/w3-estudio/ide/bootstrap/basicos/imagen.js
  var template68 = (
    /*html*/
    `
<div class="row imagen">
<div class="col-sm-2 col-md-2 espacio">        
</div>
<div class="col-sm-8 col-md-8">
    <img src="./img/libres/lago.jpg" class="articulo-img">
</div>
</div>

`
  );
  var style63 = `
.articulo-img{
    width: 100%;
    border-radius: 5px;
}
`;
  var BotonBS2 = class extends BaseBootstrap {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <style>${style63}</style>
            ${template68}
        `;
      this.addListeners();
    }
    addListeners() {
      const img = this.shadowRoot.querySelector("img");
      img.addEventListener("click", this.onChangeImg.bind(this));
    }
    onChangeImg() {
      const img = this.shadowRoot.querySelector("img");
      let dlg2 = new ModalGet("Dame url de imagen", img.src);
      dlg2.open().then((dlg3) => {
        img.src = dlg3.data;
      });
    }
    getHtml() {
      const div2 = this.shadowRoot.querySelector(".imagen");
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style63;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".imagen");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
    addAllListenersShadowRoot() {
      this.addListenersPropiedades();
      this.addListeners();
    }
  };
  customElements.define("x-bs-imagen", BotonBS2);

  // src/vanilla/w3-estudio/ide/bootstrap/navegacion/navbar.js
  init_config();
  init_modal();
  var template69 = (
    /*html*/
    `
<nav class="navbar navbar-expand-lg navbar-dark bg-primary" navbar propiedades>
  <a class="navbar-brand" href="#" contenteditable="true">T\xEDtulo</a>  

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav" lista-menu>
      <li class="nav-item active" no-usar>
        <a class="nav-link" href="#" agregar> + <span class="sr-only">(current)</span></a>
      </li>
    </ul>    
  </div>

  <ul class="navbar-nav navbar-right">
      <li><a class="nav-link" href="#"><i class="fa fa-sign-out" propiedades></i> <span contenteditable="true" propiedades link>Salir</span></a></li>
  </ul>
</nav>

`
  );
  var style64 = "";
  var NavBArBS = class extends BaseBootstrap {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style64}</style>
            ${template69}
        `;
      this.addListeners();
    }
    /**
     * 
     * @param {HTMLElement} div 
     */
    addListenerRemove(div2) {
      div2.addEventListener("click", (ev) => {
        this.preguntaEliminar().then((data2) => {
          div2.parentNode.remove();
          this.propiedades.setItem(this.tagName, null);
        });
      });
    }
    preguntaEliminar() {
      let dlg2 = new Modal();
      dlg2.innerHtml = `D\xE9sea eliminar este elemento?`;
      dlg2.titulo = "Confirmaci\xF3n";
      return dlg2.open();
    }
    addListenerAgregar() {
      let agregar = this.shadowRoot.querySelector("[agregar]");
      agregar.addEventListener("click", (ev) => {
        this.agregarMenu();
      });
    }
    agregarMenu() {
      let li = document.createElement("li");
      li.classList.value = "nav-item";
      li.setAttribute("item-menu", "");
      li.innerHTML = `<a class="nav-link" href="#" contenteditable="true" propiedades link> Menu <span eliminar no-usar> - </span></a>`;
      let eliminar = li.querySelector("[eliminar]");
      this.addListenerRemove(eliminar);
      let lista4 = this.shadowRoot.querySelector("[lista-menu]");
      lista4.append(li);
      this.addPropiedades(li);
    }
    /**
     * Agrega el listener de propiedades al elemento
     * @param {HTMLElement} div 
     */
    addPropiedades(div2) {
      let p = div2.querySelector("[propiedades]");
      p.addEventListener("click", (e) => {
        this.propiedades.setItem(this.tagName, p);
      });
    }
    addListeners() {
      let menus = this.shadowRoot.querySelectorAll("[eliminar]");
      for (let menu of menus) {
        this.addListenerRemove(menu);
      }
      this.addListenerAgregar();
    }
    getHtml() {
      const original = this.shadowRoot.querySelector("[navbar]");
      const div2 = original.cloneNode(true);
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style64;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector("[navbar]");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
    addAllListenersShadowRoot() {
      this.addListenersPropiedades();
      this.addListeners();
    }
  };
  customElements.define("x-bs-navbar", NavBArBS);

  // src/vanilla/w3-estudio/ide/bootstrap/titulo/titulo-jumbo.js
  var template70 = (
    /*html*/
    `
<div class="jumbotron titulo-jumbo">
  <h1 class="display-3" contenteditable="true" propiedades>Hola</h1>
  <p class="lead" contenteditable="true" propiedades>Ejemplo de jumbotron usando Bootstrap</p>    
</div>
`
  );
  var style65 = "";
  var TituloJumboBS = class extends BaseBootstrap {
    constructor() {
      super();
      this.render();
    }
    render() {
      super.render();
      let shadowRoot2 = this.shadowRoot;
      shadowRoot2.innerHTML += `            
            <style>${style65}</style>
            ${template70}
        `;
    }
    getHtml() {
      const div2 = this.shadowRoot.querySelector(".titulo-jumbo");
      return this.getInnerHtml(div2);
    }
    getStyle() {
      return style65;
    }
    getScrip() {
      return "";
    }
    getAngularTemplate() {
      const original = this.shadowRoot.querySelector(".titulo-jumbo");
      const div2 = original.cloneNode(true);
      return this.getInnerHTMLAngular(div2);
    }
  };
  customElements.define("x-bs-titulo-jumbo", TituloJumboBS);

  // src/vanilla/w3-estudio/proyecto/menu-inicio.js
  init_config();
  init_db();
  init_agregarApps();
  var template71 = (
    /*html*/
    `
<x-bar-menu color="w3-blue-grey"></x-bar-menu>
<div class="w3-block" style="height: 100vh; padding: 5%;">
    <h1 titulo>W3 Estudio</h1>
    <x-menu-aero menu></x-menu-aero>
</div>
`
  );
  var W3EMenuInicio = class extends HTMLElement {
    constructor() {
      super();
      this.render();
      this.addListeners();
      this.db = getDB();
      this.idProyecto = null;
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            ${template71}
        `;
      const menus = [
        {
          nombre: "Grupos",
          icono: "users",
          color: "w3-blue",
          appTag: "x-paginador-grupos"
        },
        {
          nombre: "Usuario",
          icono: "user-circle",
          color: "w3-indigo",
          appTag: "x-paginador-usuarios"
        },
        {
          nombre: "Vistas",
          icono: "table",
          color: "w3-teal",
          appTag: "x-paginador-vistas"
        },
        {
          nombre: "Headers",
          icono: "minus",
          color: "w3-green",
          appTag: "x-paginador-headers"
        },
        {
          nombre: "Footers",
          icono: "paw",
          color: "w3-pink",
          appTag: "x-paginador-footers"
        },
        {
          nombre: "Configuraciones",
          icono: "gear",
          color: "w3-purple",
          appTag: "x-configuracion-proyecto"
        },
        {
          nombre: "Exportar",
          icono: "cloud-download",
          color: "w3-red",
          appTag: "x-w3e-exportar-proyecto"
        }
      ];
      this.menu = shadowRoot2.querySelector("[menu]");
      this.menu.setMenu(menus);
      this.menuBar = shadowRoot2.querySelector("x-bar-menu");
    }
    addListeners() {
      this.menu.addEventListener("select", (ev) => {
        this.menuSeleccionado(ev.detail.menu);
      });
    }
    menuSeleccionado(menu) {
      let app3 = addWindowConParametros(menu.appTag, menu.nombre, { resize: null, maximizar: true }, { idproyecto: this.idProyecto });
    }
    connectedCallback() {
      this.idProyecto = parseInt(this.getAttribute("idproyecto"));
      this.db.get("proyectos", this.idProyecto).then((data2) => {
        let titulo = this.shadowRoot.querySelector("[titulo]");
        titulo.innerHTML = data2.nombre;
        loadCSSExtra(data2.configuracion.css);
        this.menuBar.setItem({
          titulo: "Proyecto - " + data2.nombre,
          icono: "file-code-o",
          acciones: []
        });
      });
    }
  };
  customElements.define("x-w3e-menu-inicio", W3EMenuInicio);

  // src/vanilla/w3-estudio/vistas/editar-datos-basicos-vista.js
  init_config();
  init_modal();
  var template72 = (
    /*html*/
    `
<div style="width: 100%; height: 100vh; border-left: solid;" class="w3-padding" editor-basico>
    <div class="w3-container">
        <button class="w3-button w3-circle w3-black  w3-hover-red w3-right" id="eliminar">
            <i class="fa fa-trash"></i>
        </button>
        
        <h2>Datos</h2>   	
    <label>Nombre</label>
    <input class="w3-input" type="text" name="nombre">
    <div class="w3-padding">
        <button class="w3-btn w3-blue w3-block" id="actualizar">Actualizar</button>
    </div>
    </div>
</div>
`
  );
  var style66 = (
    /*css*/
    `
`
  );
  var EditorDatosBasicosVista = class extends HTMLElement {
    constructor() {
      super();
      this.item = null;
      this.render();
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
        <link rel="stylesheet" href="${config.w3css}">
        <link rel="stylesheet" href="${config.fontAwesome}">
        <style>${style66}</style>
        ${template72}
        `;
      this.nombre = shadowRoot2.querySelector("input");
      this.addListeners();
    }
    addListeners() {
      const eliminar = this.shadowRoot.querySelector("#eliminar");
      const actualizar = this.shadowRoot.querySelector("#actualizar");
      eliminar.addEventListener("click", (ev) => {
        this.eliminarItem();
      });
      actualizar.addEventListener("click", (ev) => {
        this.actualizarItem();
      });
    }
    eliminarItem() {
      let dlg2 = new Modal();
      dlg2.titulo = "Confirmaci\xF3n";
      dlg2.innerHtml = `
            <h2>Mensaje</h2>
            Desea eliminar esta vista?
        `;
      dlg2.open().then((r) => {
        this.emiteEliminar();
        this.shadowRoot.querySelector("[editor-basico]").innerHTML = "";
      });
    }
    actualizarItem() {
      this.emiteActualizar();
    }
    setItem(item) {
      this.item = item;
      if (item) {
        this.nombre.value = item.nombre;
      }
    }
    emiteActualizar() {
      this.dispatchEvent(
        new CustomEvent("actualizar", {
          detail: {
            actualizar: true,
            id: this.item.id,
            nombre: this.nombre.value
          }
        })
      );
    }
    emiteEliminar() {
      this.dispatchEvent(
        new CustomEvent("eliminar", {
          detail: {
            eliminar: true,
            id: this.item.id
          }
        })
      );
    }
  };
  customElements.define("x-editor-basico-vista", EditorDatosBasicosVista);

  // src/vanilla/w3-estudio/vistas/paginador-vistas.js
  init_config();
  init_db();
  init_notificaciones();
  init_agregarApps();

  // src/vanilla/w3-estudio/proyecto/utils-proyecto.js
  init_modal();
  function validaProyecto(div2) {
    div2.idProyecto = parseInt(div2.getAttribute("idproyecto"));
    if (!div2.idProyecto) {
      let dlg2 = new Modal();
      dlg2.titulo = '<i class="fa fa-warning"></i> Alerta';
      dlg2.innerHtml = "No puede abrir as\xED esta app";
      div2.parentNode.cierraVentana();
      dlg2.open().then((e) => {
      }).catch((e) => {
      });
    }
  }

  // src/vanilla/w3-estudio/vistas/codigos-iniciales.js
  var dataJs = `//Clase del componente
class MiComponente extends ClaseComponente{
    constructor() {
        super();
        //definicion de Atributos
        this.titulo = $DefineAtributo();
        //definicion de selectores de dom
        this.h1 = $DefineDomItem('#item');
        //definicion de variables
        this.hola = $DefineVariable('Hola mundo');

    }
    init() {
        console.log(this);
    }
}

$DefineClaseDelComponente(MiComponente);
`;
  var dataCss = `/*define los estilos del componente*/
.hola-mundo{
    color: red;
}
`;

  // src/vanilla/w3-estudio/vistas/paginador-vistas.js
  var style67 = (
    /*css*/
    `
#buscar {
    transition: width 0.4s ease-in-out;
    font-size: small;
    width: 100px;    
}
#buscar:focus {
    width: 300px;
}
`
  );
  var PaginadorVistas = class extends HTMLElement {
    constructor() {
      super();
      this.db = getDB();
      this.lista = [];
      this.idProyecto = null;
      this.tabla = "vistas";
      this.titulo = "Vistas";
      this.color = "teal";
      this.css = "w3css";
      this.vistaPrevia = "x-editor-basico-vista";
      this.icono = "table";
    }
    connectedCallback() {
      this.idProyecto = parseInt(this.getAttribute("idproyecto"));
      validaProyecto(this);
      this.render();
      this.cargaLista();
      this.cargaCssProyecto();
    }
    cargaCssProyecto() {
      this.db.get("proyectos", this.idProyecto).then((data2) => {
        this.css = data2.configuracion.css;
      });
    }
    cargaLista() {
      this.db.list(this.tabla).then((data2) => {
        this.lista = [];
        data2.forEach((item) => {
          item.idProyecto == this.idProyecto ? this.lista.push(item) : "";
        });
        this.paginador.setLista(this.lista);
      });
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
        <link rel="stylesheet" href="${config.w3css}">
        <link rel="stylesheet" href="${config.fontAwesome}">
        <style>${style67}</style>     
        <x-bar-menu color="w3-${this.color}" buscar></x-bar-menu>        
        <x-paginador-files titulo="${this.titulo}" vista-previa="${this.vistaPrevia}"></x-paginador-files>

        `;
      this.menu = shadowRoot2.querySelector("x-bar-menu");
      this.paginador = shadowRoot2.querySelector("x-paginador-files");
      this.paginador.setLista(this.lista);
      this.addListeners();
      this.menu.setItem({
        titulo: this.titulo,
        icono: this.icono,
        acciones: [{
          titulo: "Nuevo",
          icono: "fa-file-o"
        }]
      });
    }
    addListeners() {
      this.paginador.addEventListener("onVistaPrevia", (e) => {
        const r = e.detail;
        this.onVistaPrevia(r.vistaPrevia, r.item);
      });
      this.paginador.addEventListener("onOpenItem", (e) => {
        const r = e.detail;
        this.onOpenItem(r.item);
      });
      const padre = this.parentNode;
      padre.addEventListener("nuevo", (ev) => {
        this.addItem();
      });
      this.menu.addEventListener("accion", (ev) => {
        let data2 = ev.detail;
        if (data2.accion.titulo == "Nuevo") {
          this.addItem();
        }
      });
      this.menu.addEventListener("buscar", (ev) => {
        let data2 = ev.detail;
        this.buscaElementos(data2.value);
      });
    }
    /**
     * Metodo que se ejecuta cuando se da clic algun item del paginador
     * @param {HTMLElement} vistaPrevia Es la instancia de la vista previa creada
     * @param {Object} item Es un objecto json
     */
    onVistaPrevia(vistaPrevia, item) {
      vistaPrevia.setItem(item);
      vistaPrevia.addEventListener("actualizar", (ev) => {
        const re = ev.detail;
        this.actualizaLista(re.id, re.nombre);
      });
      vistaPrevia.addEventListener("eliminar", (ev) => {
        const re = ev.detail;
        this.eliminaItem(re.id);
      });
    }
    onOpenItem(item) {
      this.db.get("metadataVistas", item.id).then((data2) => {
        let app3 = addWindowConParametros(
          "x-ide",
          item.nombre,
          { resize: null, maximizar: true },
          {
            tipo: this.tabla,
            css: this.css
          }
        );
        app3.setVista(data2);
        app3.addEventListener("guardarVista", (ev) => {
          this.actualizaMetadataVista(item.nombre, item.id, ev.detail.item);
        });
      });
    }
    actualizaMetadataVista(nombre, id2, data2) {
      data2.id = id2;
      this.db.put("metadataVistas", data2).then((r) => {
        addNotificacion(
          NOTIFICACION.SUCCESS,
          '<i class="fa fa-check-square-o"></i> Guardado',
          "Ha editado corretamente la vista " + nombre,
          5e3
        );
      });
    }
    buscaElementos(nombre) {
      let buscar = [];
      nombre = nombre.trim();
      if (nombre == "") {
        this.paginador.setLista(this.lista);
        return;
      }
      nombre = nombre.toUpperCase();
      for (let item of this.lista) {
        if (item.nombre.toUpperCase().indexOf(nombre) >= 0) {
          buscar.push(item);
        }
      }
      this.paginador.setLista(buscar);
    }
    buscaIndexItem(id2) {
      return this.lista.findIndex((item) => {
        return item.id == id2;
      });
    }
    eliminaItem(id2) {
      const i = this.buscaIndexItem(id2);
      if (i < 0)
        return;
      console.log(id2);
      this.db.delete(this.tabla, id2).then((data2) => {
        this.lista.splice(i, 1);
        this.paginador.setLista(this.lista);
        this.resetBuscador();
      });
    }
    resetBuscador() {
      let buscar = this.shadowRoot.querySelector("#buscar");
      buscar.value = "";
    }
    actualizaLista(id2, nombre) {
      const i = this.buscaIndexItem(id2);
      if (i < 0)
        return;
      this.lista[i].nombre = nombre;
      this.db.put(this.tabla, this.lista[i]).then((data2) => {
        this.paginador.setLista(this.lista);
        this.paginador.setLista(this.lista);
        this.resetBuscador();
      });
    }
    addItem() {
      let item = {
        nombre: "Vista",
        idProyecto: this.idProyecto
      };
      this.db.post(this.tabla, item).then((data2) => {
        this.lista.push(data2);
        this.paginador.setLista(this.lista);
        this.db.post("metadataVistas", {
          id: data2.id,
          codigo: dataJs,
          estilo: dataCss,
          componentes: []
        }, false);
      });
    }
  };
  customElements.define("x-paginador-vistas", PaginadorVistas);

  // src/vanilla/w3-estudio/headers/paginador-headers.js
  var PaginadorHeaders = class extends PaginadorVistas {
    constructor() {
      super();
      this.tabla = "headers";
      this.titulo = "Headers";
      this.color = "green";
      this.icono = "minus";
    }
    //sobreescribimos
    addItem() {
      let item = {
        nombre: "Header",
        idProyecto: this.idProyecto
      };
      this.db.post(this.tabla, item).then((data2) => {
        this.lista.push(data2);
        this.paginador.setLista(this.lista);
        this.db.post("metadataVistas", {
          id: data2.id,
          codigo: dataJs,
          estilo: dataCss,
          componentes: []
        }, false);
      });
    }
  };
  customElements.define("x-paginador-headers", PaginadorHeaders);

  // src/vanilla/w3-estudio/footers/paginador-footers.js
  var PaginadorFooters = class extends PaginadorVistas {
    constructor() {
      super();
      this.tabla = "footers";
      this.titulo = "Footers";
      this.color = "pink";
      this.icono = "paw";
    }
    //sobreescribimos
    addItem() {
      let item = {
        nombre: "Footer",
        idProyecto: this.idProyecto
      };
      this.db.post(this.tabla, item).then((data2) => {
        this.lista.push(data2);
        this.paginador.setLista(this.lista);
        this.db.post("metadataVistas", {
          id: data2.id,
          codigo: dataJs,
          estilo: dataCss,
          componentes: []
        }, false);
      });
    }
  };
  customElements.define("x-paginador-footers", PaginadorFooters);

  // src/vanilla/w3-estudio/users/vista-previa-usuarios.js
  init_config();
  init_db();
  var style68 = (
    /*css*/
    `
.espacio{
    min-height: 10px;
}
/*define los estilos del componente*/
.hola-mundo{
    color: red;
}


input:invalid {
    outline: solid 1px red;
    background: pink;
}
input[type="color"] {
    padding: 0;
    height: 40px;
}

`
  );
  var template73 = (
    /*html*/
    `
<div class="">

    <div class="w3-container"  propiedades="">
      <h2>Proyecto</h2>
      <p><span class="w3-tag w3-blue w3-round" id="tipo-css"></span></p>
    </div>

    <form onsubmit="return false">
    <div class="w3-container">     
        <div id="items-div" class="w3-row">
            <div input-div="" id="1601067853218" class="w3-col s12 m12 w3-padding" propiedades="">
                <br>
                <label  propiedades="">Nombre</label>
                <input class="w3-input w3-border" propiedades="" 
                    input-formulario="" type="text" name="nombre" required="true" 
                    pattern="[a-zA-Z\xF1\xD1 0-9]{5,25}">
            </div>
            <div input-div="" id="1601067853218" class="w3-col s12 m12 w3-padding" propiedades="">
                <br>
                <label  propiedades="">Apellidos</label>
                <input class="w3-input w3-border" propiedades="" 
                    input-formulario="" type="text" name="apellidos" required="true" 
                    pattern="[a-zA-Z\xF1\xD1 0-9]{5,25}">
            </div>
            <div input-div="" id="1601067853218" class="w3-col s12 m12 w3-padding" propiedades="">
                <br>
                <label  propiedades="">Username</label>
                <input class="w3-input w3-border" propiedades="" 
                    input-formulario="" type="text" name="username" required="true" 
                    pattern="[a-zA-Z\xF1\xD1 0-9]{5,25}">
            </div>
            <div input-div="" id="1601067853218" class="w3-col s12 m12 w3-padding" propiedades="">
                <br>
                <label  propiedades="">Password</label>
                <input class="w3-input w3-border" propiedades="" 
                    input-formulario="" type="text" name="password" required="true" 
                    pattern="[a-zA-Z\xF1\xD1 0-9]{5,25}">
            </div>
            <div input-div="" id="1601067853218" class="w3-col s12 m12 w3-padding" propiedades="">
                <br>
                <label  propiedades="">Grupo</label>
                <select class="w3-select" name="grupo">
                    <option value="ninguno">Ninguno</option>
                </select>
            </div>
        </div> 
    </div>
    <div class="w3-container w3-padding-top">
    <button class="w3-button w3-blue w3-block w3-margin-top"  propiedades="" id="guardarProyecto" ev-click="guardar()" tiene-eventos="">Guardar</button>
    </div>
    </form>
</div>
`
  );
  var XUsuarioPrevia = class extends HTMLElement {
    constructor() {
      super();
      this.mensaje = "Hola mundo";
      this.item = null;
      this.idProyecto = null;
      this.db = getDB();
      this.render();
      this.initComponentes();
    }
    setIdProyecto(idProyecto) {
      this.idProyecto = idProyecto;
      this.cargaGrupos();
    }
    initComponentes() {
      const btnGuardar = this.shadowRoot.querySelector("#guardarProyecto");
      btnGuardar.addEventListener("click", (ev) => {
        this.guardar();
      });
    }
    setValueForm(form, nombre) {
      form.querySelector(`[name="${nombre}"]`).value = this.item[nombre];
    }
    setItem(item) {
      this.item = item;
      let form = this.$el.querySelector("form");
      this.setValueForm(form, "nombre");
      this.setValueForm(form, "apellidos");
      this.setValueForm(form, "username");
      this.setValueForm(form, "password");
    }
    guardar() {
      let form = this.$el.querySelector("form");
      if (form.checkValidity()) {
        this.emiteActualizar();
      }
    }
    emiteActualizar() {
      const data2 = {
        id: this.item.id,
        idProyecto: this.idProyecto,
        nombre: this.nombre.value,
        apellidos: this.apellidos.value,
        username: this.username.value,
        password: this.password.value,
        grupo: this.grupo.value
      };
      this.dispatchEvent(
        new CustomEvent("actualizar", {
          detail: {
            actualizar: true,
            item: data2
          }
        })
      );
    }
    render() {
      let shadowRoot2 = this.attachShadow({
        mode: "open"
      });
      let customTemplate = this.replazaValoresMustache(template73);
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">            
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style68}</style>
            <div>${customTemplate}</div>
        `;
      this.$el = shadowRoot2.querySelector("div");
      this.form = this.$el.querySelector("form");
      this.nombre = this.form.querySelector('[name="nombre"]');
      this.apellidos = this.form.querySelector('[name="apellidos"]');
      this.username = this.form.querySelector('[name="username"]');
      this.password = this.form.querySelector('[name="password"]');
      this.grupo = this.form.querySelector('[name="grupo"]');
    }
    /*Cuando se monta en la pagina*/
    connectedCallback() {
    }
    /*Cuando se desmonta en la pagina, no necesariamente se destruye*/
    disconnectedCallback() {
    }
    replazaValoresMustache(template90) {
      let props = ["titulo"];
      let salida = template90 + "";
      for (let p of props) {
        const exp = new RegExp(`{{${p}}}`, "g");
        const attr = this.getAttribute(p);
        salida = salida.replace(exp, attr);
      }
      return salida;
    }
    cargaGrupos() {
      this.db.list("grupos").then((data2) => {
        let lista4 = data2.filter((item) => item.idProyecto == this.idProyecto);
        this.setOptionsSelect(lista4);
      });
    }
    /**
     * Setea los options a la lista
     * @param {[]} lista 
     */
    setOptionsSelect(lista4) {
      let select = this.shadowRoot.querySelector("select");
      let options = `<option value="">Ninguno</option>`;
      for (let item of lista4) {
        options += `<option value="${item.id}">${item.nombre}</option>`;
      }
      select.innerHTML = options;
      setTimeout((t) => {
        select.value = this.item.grupo;
      }, 100);
    }
  };
  customElements.define("x-usuario-vista-previa", XUsuarioPrevia);

  // src/vanilla/w3-estudio/users/paginador-usuarios.js
  init_notificaciones();
  var con = Date.now();
  var PaginadorUsuarios = class extends PaginadorVistas {
    constructor() {
      super();
      this.tabla = "usuarios";
      this.titulo = "Usuarios";
      this.color = "indigo";
      this.vistaPrevia = "x-usuario-vista-previa";
      this.icono = "user-circle";
    }
    //sobreescribimos
    addItem() {
      let item = {
        nombre: "Usuario",
        apellidos: "apellidos",
        username: "User" + con++,
        password: "123456",
        idProyecto: this.idProyecto,
        grupo: ""
      };
      this.db.post(this.tabla, item).then((data2) => {
        this.lista.push(data2);
        this.paginador.setLista(this.lista);
      });
    }
    /**
     * 
     * @param {HTMLElement} vistaPrevia 
     * @param {Object} item 
     */
    onVistaPrevia(vistaPrevia, item) {
      vistaPrevia.setIdProyecto(this.idProyecto);
      vistaPrevia.setItem(item);
      vistaPrevia.addEventListener("actualizar", (ev) => {
        const re = ev.detail;
        this.actualizaItem(re.item);
      });
    }
    actualizaItem(item) {
      this.db.put(this.tabla, item).then((data2) => {
        this.cargaLista();
        addNotificacion(
          NOTIFICACION.SUCCESS,
          '<i class="fa fa-check-square-o"></i> Actualizado',
          "Ha actualizado correctamente al usuario",
          5e3
        );
      });
    }
    onOpenItem(item) {
    }
  };
  customElements.define("x-paginador-usuarios", PaginadorUsuarios);

  // src/vanilla/w3-estudio/grupos/paginador/paginadorGrupos.js
  init_config();

  // src/vanilla/w3-estudio/editor-caminos/itemsCanvas.js
  var cont = Date.now();
  var imgGrupo = document.createElement("img");
  var imgForm = document.createElement("img");
  imgGrupo.src = "./img/editor-flujos/grupo.png";
  imgForm.src = "./img/editor-flujos/form.png";
  var inombre = document.querySelector('input[name="nombre"]');
  var bsave = document.querySelector("#save");
  var propiedades = document.querySelector("x-propidades-vista");
  var Item = class {
    constructor(x5, y5, ancho, alto, color) {
      this.x = x5;
      this.y = y5;
      this.alto = alto;
      this.ancho = ancho;
      this.isSelect = false;
      this.color = color;
      this.id = cont++;
      this.configuracion = {
        colorActivoConexion: "yellow",
        colorConexion: "orange",
        anchoLineaConexion: 3,
        colorLetra: "black",
        letra: "12px cursive"
      };
      this.tipo = "Item";
    }
    /** Se utiliza para pintar el objecto*/
    draw(lienso) {
    }
    /** Cuando da click en el area rectangular  regresa true */
    inArea(x5, y5) {
      if (this.x <= x5 && this.x + this.ancho >= x5) {
        if (this.y <= y5 && this.y + this.alto >= y5) {
          return true;
        }
      }
      return false;
    }
    /** */
    setConfiguracion(configuracion2) {
      Object.assign(this.configuracion, configuracion2);
    }
    /** cuando mueve el mouse, se verifica que este este dentro del area del objecto, 
     * si no esta se borra el borde */
    isOut(x5, y5) {
      if (x5 < this.x - 10 || x5 > this.x + this.ancho + 15) {
        return true;
      }
      if (y5 < this.y - 10 || y5 > this.y + this.alto + 15) {
        return true;
      }
      return false;
    }
    /** Se utiliza para redimencionar el objecto */
    incrementoLados(incx, incy) {
      this.ancho = this.ancho + incx;
      this.alto = this.alto + incy;
      this.ancho < 0 ? this.ancho = 10 : "";
      this.alto < 0 ? this.alto = 10 : "";
    }
  };
  var ItemImg = class extends Item {
    constructor(nombre, x5, y5) {
      super(x5, y5, 50, 70, "black");
      this.nombre = nombre;
      this.img = imgGrupo;
      this.contexto = "";
      this.tipo = "ItemImg";
    }
    draw(lienso) {
      lienso.fillStyle = this.configuracion.colorLetra;
      lienso.font = this.configuracion.letra;
      lienso.fillText(this.nombre, this.x, this.y + this.alto);
      lienso.drawImage(this.img, this.x, this.y);
      if (this.isSelect) {
        lienso.strokeStyle = this.configuracion.colorConexion;
        lienso.strokeRect(this.x - 10, this.y - 10, this.ancho + 20, this.alto + 20);
      }
    }
    incrementoLados(incx, incy) {
    }
    inArea(x5, y5) {
      if (this.x <= x5 && this.x + this.ancho >= x5) {
        if (this.y - 25 <= y5 && this.y + this.alto >= y5) {
          return true;
        }
      }
      return false;
    }
    drawConexiones(lienso) {
    }
    toJson() {
      return {
        nombre: this.nombre,
        contexto: this.contexto,
        id: this.id,
        x: this.x,
        y: this.y,
        tipo: this.tipo
      };
    }
    fromJson(json) {
      this.nombre = json.nombre;
      this.contexto = json.contexto;
      this.x = json.x;
      this.y = json.y;
      this.id = json.id;
    }
    actualizaCaminos(idCaminos, lista4) {
      for (let id2 of idCaminos) {
        for (let vista of lista4) {
          if (vista.id == id2) {
            this.caminos.push(vista);
            break;
          }
        }
      }
    }
  };
  var Grupo = class extends ItemImg {
    constructor(nombre, x5, y5) {
      super(nombre, x5, y5);
      this.img = imgGrupo;
      this.caminoInicial = null;
      this.header = "";
      this.footer = "";
      this.vista = "";
      this.configuracion.letra = "15px cursive";
      if (nombre) {
        this.contexto = nombre.trim().replace(/ /g, "-");
      }
      this.tipo = "Grupo";
    }
    /** dibuja una linea */
    drawConexiones(lienso) {
      if (!this.caminoInicial) {
        return;
      }
      lienso.lineWidth = this.configuracion.anchoLineaConexion;
      if (this.isSelect) {
        lienso.strokeStyle = this.configuracion.colorActivoConexion;
      } else {
        lienso.strokeStyle = this.configuracion.colorConexion;
      }
      lienso.beginPath();
      lienso.moveTo(this.x + this.ancho / 2, this.y + this.alto / 2);
      lienso.lineTo(
        this.caminoInicial.x + this.ancho / 2,
        this.caminoInicial.y + this.alto / 2
      );
      lienso.stroke();
      lienso.lineWidth = 1;
    }
    toJson() {
      let json = super.toJson();
      json.vista = this.vista;
      json.footer = this.footer;
      json.header = this.header;
      json.caminoInicial = this.caminoInicial ? this.caminoInicial.id : null;
      return json;
    }
    replaceId(lista4) {
      for (let item of lista4) {
        if (item.id == this.caminoInicial) {
          this.caminoInicial = item;
          break;
        }
      }
    }
    fromJson(json) {
      super.fromJson(json);
      this.vista = json.vista;
      this.footer = json.footer;
      this.header = json.header;
      this.caminoInicial = json.caminoInicial;
    }
  };
  var Camino = class extends ItemImg {
    constructor(nombre, x5, y5) {
      super(nombre, x5, y5);
      this.img = imgForm;
      this.caminos = [];
      this.vista = "";
      this.tipo = "Camino";
    }
    drawConexiones(lienso) {
      lienso.lineWidth = this.configuracion.anchoLineaConexion;
      if (this.isSelect) {
        lienso.strokeStyle = this.configuracion.colorActivoConexion;
      } else {
        lienso.strokeStyle = this.configuracion.colorConexion;
      }
      for (let vista of this.caminos) {
        lienso.beginPath();
        lienso.moveTo(this.x + this.ancho / 2, this.y + this.alto / 2);
        lienso.lineTo(vista.x + this.ancho / 2, vista.y + this.alto / 2);
        lienso.stroke();
      }
      lienso.lineWidth = 1;
    }
    toJson() {
      let caminos = [];
      for (let vista of this.caminos) {
        caminos.push(vista.id);
      }
      let json = super.toJson();
      json.caminos = caminos;
      json.vista = this.vista;
      return json;
    }
    replaceId(lista4) {
      let caminos = [];
      for (const id2 of this.caminos) {
        for (let item of lista4) {
          if (item.id == id2) {
            caminos.push(item);
            break;
          }
        }
      }
      this.caminos = caminos;
    }
    fromJson(json) {
      super.fromJson(json);
      this.vista = json.vista;
      this.caminos = json.caminos;
    }
  };
  function listaObjectosToJson(listaObjectos) {
    let lista4 = [];
    for (let item of listaObjectos) {
      lista4.push(item.toJson());
    }
    return lista4;
  }
  function jsonToListaObjectos(json) {
    let lista4 = [];
    for (let item of json) {
      if (item.tipo == "Grupo") {
        let grupo = new Grupo();
        grupo.fromJson(item);
        lista4.push(grupo);
      } else if (item.tipo == "Camino") {
        let grupo = new Camino();
        grupo.fromJson(item);
        lista4.push(grupo);
      }
    }
    for (let item of lista4) {
      item.replaceId(lista4);
    }
    return lista4;
  }

  // src/vanilla/w3-estudio/grupos/paginador/paginadorGrupos.js
  init_agregarApps();
  init_db();
  init_notificaciones();
  var template74 = (
    /*html*/
    `
<x-bar-menu color="w3-blue"></x-bar-menu>
<x-paginador-files titulo="Grupos" vista-previa="x-vista-previa-flujo"></x-paginador-files>
`
  );
  var style69 = (
    /*css*/
    `
`
  );
  var PaginadorGrupos = class extends HTMLElement {
    constructor() {
      super();
      this.db = getDB();
      this.lista = [];
      this.activo = null;
      this.idProyecto = null;
    }
    connectedCallback() {
      this.idProyecto = parseInt(this.getAttribute("idproyecto"));
      validaProyecto(this);
      this.render();
      this.addListeners();
      this.loadGrupos();
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
        <link rel="stylesheet" href="${config.w3css}">
        <link rel="stylesheet" href="${config.fontAwesome}">
        <style>${style69}</style>
        ${template74}
        `;
      this.paginador = this.shadowRoot.querySelector("x-paginador-files");
      this.paginador.setLista(this.lista);
      this.padre = this.parentNode;
      this.menu = shadowRoot2.querySelector("x-bar-menu");
      this.menu.setItem({
        titulo: "Grupos",
        icono: "users",
        acciones: [{
          titulo: "Nuevo",
          icono: "fa-file-o"
        }]
      });
    }
    loadGrupos() {
      this.db.list("grupos").then((data2) => {
        this.lista = data2.filter((item) => {
          return item.idProyecto == this.idProyecto;
        });
        this.paginador.setLista(this.lista);
      });
    }
    addListeners() {
      this.addListenerEditarFlujo();
      this.addListenerVistaPrevia();
      this.addListenerGuardar();
      this.addListenerEditarNombre();
    }
    addListenerEditarNombre() {
      this.padre.addEventListener("editar", (ev) => {
        if (!this.activo) {
          return;
        }
        let dlg2 = new ModalForm();
        dlg2.innerHtml = `
            <div class="w3-container">
                <label>Nombre de grupo</label>
                <input class="w3-input" type="text" name="nombre" dato-salida value="${this.activo.nombre}">
            </div>
            `;
        dlg2.titulo = "Cambiar nombre de grupo";
        dlg2.open().then((data2) => {
          this.activo.nombre = data2.data.nombre;
          this.paginador.setLista(this.lista);
          addNotificacion(
            NOTIFICACION.SUCCESS,
            '<i class="fa fa-check-square-o"></i> Editado',
            "Se cambio el nombre"
          );
        });
      });
    }
    addListenerEditarFlujo() {
      this.paginador.addEventListener("onOpenItem", (e) => {
        const r = e.detail;
        let app3 = addWindowConParametros(
          "x-editor-flujos",
          r.item.nombre,
          { resize: null, maximizar: true },
          { idProyecto: this.idProyecto }
        );
        this.db.get("caminos", r.item.id).then((data2) => {
          app3.setListaObjectos(data2.flujo);
          app3.actualiza();
          app3.draw();
        });
        app3.addEventListener("guardar", (ev) => {
          let flujo = ev.detail.flujo;
          let data2 = {
            id: r.item.id,
            flujo
          };
          this.db.put("caminos", data2).then((d) => {
            addNotificacion(
              NOTIFICACION.SUCCESS,
              '<i class="fa fa-check-square-o"></i> Guardado',
              "Se guardo el flujo"
            );
          });
        });
      });
    }
    addListenerVistaPrevia() {
      this.paginador.addEventListener("onVistaPrevia", (e) => {
        const r = e.detail;
        this.activo = r.item;
        this.db.get("caminos", r.item.id).then((data2) => {
          r.vistaPrevia.setLista(data2.flujo);
        });
      });
    }
    addListenerGuardar() {
      this.menu.addEventListener("accion", (ev) => {
        let data2 = ev.detail;
        if (data2.accion.titulo == "Nuevo") {
          this.abreDlgGuardar();
        }
      });
    }
    abreDlgGuardar() {
      let dlg2 = new ModalForm();
      dlg2.innerHtml = `
            <div class="w3-container">
                <label>Nombre de grupo</label>
                <input class="w3-input" type="text" name="nombre" dato-salida>
            </div>
            `;
      dlg2.titulo = "Agregar grupo";
      dlg2.open().then((re) => {
        const nombre = re.data.nombre;
        if (this.existeNombre(nombre)) {
          addNotificacion(NOTIFICACION.ALERT, "Error", "Ya existe el grupo: " + nombre);
        } else {
          this.guardaGrupo(nombre);
        }
      });
    }
    existeNombre(nombre) {
      for (let grupo of this.lista) {
        if (grupo.nombre == nombre) {
          return true;
        }
      }
      return false;
    }
    guardaGrupo(nombre) {
      let grupo = this.crearGrupo(nombre);
      this.db.post("grupos", grupo).then((data2) => {
        this.lista.push(data2);
        let flujo = this.creaFlujo(data2.id, data2.nombre);
        this.db.post("caminos", flujo, false).then((re) => {
          addNotificacion(
            NOTIFICACION.SUCCESS,
            '<i class="fa fa-check-square-o"></i> Guardado',
            "Se creo el grupo"
          );
          this.paginador.setLista(this.lista);
        });
      });
    }
    crearGrupo(nombre) {
      return {
        nombre,
        descripcion: "",
        idProyecto: this.idProyecto
      };
    }
    creaFlujo(id2, nombre) {
      let grupo = new Grupo(nombre, 50, 50);
      return {
        id: id2,
        flujo: [grupo.toJson()]
      };
    }
  };
  customElements.define("x-paginador-grupos", PaginadorGrupos);

  // src/vanilla/w3-estudio/grupos/vistaPrevia/vistaPreviaFlujo.js
  init_config();
  var template75 = (
    /*html*/
    `
<div class="w3-bar w3-dark-grey">
    <div class="w3-button w3-bar-item" id="btnVista">VistaPrevia</div>
    <div class="w3-button w3-bar-item" id="btnRuta">Rutas</div>
</div>
<div id="rutas"
class="w3-animate-left" style="display: none">    
</div>
<canvas 
id="vistaPrevia"
width="1500" 
height="1500" 
style="border:1px solid #d3d3d3; display: block;" class="w3-animate-left">
`
  );
  var VistaPreviaFlujo = class extends HTMLElement {
    constructor() {
      super();
      this.render();
      this.listaObjetos = [];
      this.configuracion = {
        colorActivoConexion: "#9c27b0",
        colorConexion: "#ff9800",
        anchoLieneaConexion: "20px",
        colorFondo: "white",
        colorLetra: "black",
        zoom: 1
      };
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
        <link rel="stylesheet" href="${config.w3css}">
        <style></style>
        ${template75}
        `;
      this.canvas = shadowRoot2.querySelector("canvas");
      this.addListeners();
    }
    addListeners() {
      const btnRuta = this.shadowRoot.querySelector("#btnRuta");
      const btnVista = this.shadowRoot.querySelector("#btnVista");
      let rutas = this.shadowRoot.querySelector("#rutas");
      let vistaPrevia = this.shadowRoot.querySelector("#vistaPrevia");
      btnRuta.addEventListener("click", (ev) => {
        rutas.style.display = "block";
        vistaPrevia.style.display = "none";
        this.createRutas();
      });
      btnVista.addEventListener("click", (ev) => {
        vistaPrevia.style.display = "block";
        rutas.style.display = "none";
      });
    }
    createRutas() {
      let rutaInicial = "/" + this.listaObjetos[0].contexto;
      let rutasNodos = this.creaArbol(rutaInicial, this.listaObjetos[0].caminoInicial);
      this.verListaRutas(rutaInicial + "\n" + rutasNodos);
    }
    verListaRutas(lista4) {
      let rutas = this.shadowRoot.querySelector("#rutas");
      rutas.innerHTML = "";
      let listaRutas = lista4.split("\n");
      for (let linea of listaRutas) {
        rutas.innerHTML += `<div class="w3-block">${linea}</div>`;
      }
    }
    creaArbol(ruta, nodo) {
      if (!nodo) {
        return "";
      }
      let rutaInicial = ruta + "/" + nodo.nombre;
      let rutas = "";
      for (let hijo of nodo.caminos) {
        rutas += this.creaArbol(rutaInicial, hijo);
      }
      return rutaInicial + "\n" + rutas;
    }
    setLista(lista4) {
      this.listaObjetos = jsonToListaObjectos(lista4);
      this.draw();
    }
    draw() {
      let canvas = this.canvas;
      let lienso = canvas.getContext("2d");
      lienso.clearRect(0, 0, canvas.width, canvas.height);
      lienso.fillStyle = this.configuracion.colorFondo;
      lienso.fillRect(0, 0, canvas.width, canvas.height);
      for (const item of this.listaObjetos) {
        item.drawConexiones(lienso);
      }
      for (const item of this.listaObjetos) {
        item.draw(lienso);
      }
    }
  };
  customElements.define("x-vista-previa-flujo", VistaPreviaFlujo);

  // src/vanilla/w3-estudio/editor-caminos/propiedades.js
  init_db();
  var template76 = `
<h4>Propiedades</h4>
<div id="propiedades"></div>
`;
  var templateGrupo = (
    /*html*/
    `
<label>Nombre</label>
<input name="nombre" disabled>
<label>contexto</label>
<input name="contexto">
<label>Camino inicial</label>
<select id="caminos" name="vistaInicial"></select>
<label>Vista</label>
<select id="vistas" name="vista"></select>
<hr>
<h4>Propiedades generales</h4>
<label>Header de p\xE1gina</label>
<select id="headers" name="header"></select>
<label>Pie de p\xE1gina</label>
<select id="footers" name="footer"></select>
`
  );
  var templateVista = (
    /*html*/
    `
<label>Nombre</label>
<input name="nombre">
<label>contexto</label>
<input name="contexto">
<div class="lista-vistas">
</div>
<label>Agregar camino</label>
<select id="caminos" name="camino"></select>
<label>Vista</label>
<select id="vistas" name="vista"></select>
`
  );
  var style70 = (
    /*css*/
    `
input,select{
    width: 100%;
}
.lista-vistas{
    padding: 16px;
}
span.camino {
    margin: 5px;
    border: solid black 1px;
    border-radius: 5px;
    padding: 8px;
    color: white;
    background: tomato;
}
`
  );
  var PropiedadesVista = class extends HTMLElement {
    constructor() {
      super();
      this.item = null;
      this.divPropiedades = null;
      this.lista = null;
      this.db = getDB();
      this.idProyecto = null;
      this.render();
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
        <style>${style70}</style>
        ${template76}
        `;
      this.divPropiedades = shadowRoot2.querySelector("#propiedades");
    }
    /** se debe pasar el array de lista para poder trabajar boien con el. */
    setLista(lista4) {
      this.lista = lista4;
    }
    setIdProyecto(idProyecto) {
      this.idProyecto = idProyecto;
    }
    setItem(item) {
      this.item = item;
      this.showPropiedades();
    }
    addOptions() {
      if (!this.lista) {
        return;
      }
      let options = "<option disabled>Selecione uno</option>";
      for (const item of this.lista) {
        if (item.tipo == "Camino") {
          options += `<option value="${item.id}">${item.nombre}</option>`;
        }
      }
      const listaCaminos = this.divPropiedades.querySelector("#caminos");
      listaCaminos.innerHTML = options;
    }
    showPropiedades() {
      if (this.item.tipo == "Grupo") {
        this.divPropiedades.innerHTML = templateGrupo;
        this.addOptions();
        this.setValoresGrupo();
        this.setValoresVista("headers", "header");
        this.setValoresVista("vistas", "vista");
        this.setValoresVista("footers", "footer");
      } else if (this.item.tipo == "Camino") {
        this.divPropiedades.innerHTML = templateVista;
        this.addOptions();
        this.setValoresCamino();
        this.showListaCamino();
        this.setValoresVista("vistas", "vista");
      }
    }
    setValoresVista(tabla, campo) {
      let select = this.shadowRoot.querySelector("#" + tabla);
      this.db.list(tabla).then((data2) => {
        let lista4 = data2.filter((item) => item.idProyecto == this.idProyecto);
        let options = '<option value="">Ninguna</option>';
        for (let vista of lista4) {
          options += `<option value="${vista.id}">${vista.nombre}</option>`;
        }
        select.innerHTML = options;
        select.value = this.item[campo];
      });
      select.addEventListener("change", (ev) => {
        const value = select.value;
        if (value == "-1") {
        } else {
          this.item[campo] = value;
        }
      });
    }
    emitePintar() {
      this.dispatchEvent(
        new CustomEvent("pintar", {
          detail: {
            pintar: true
          }
        })
      );
    }
    setInputListener(key) {
      const item = this.divPropiedades.querySelector(`input[name="${key}"]`);
      item.value = this.item[key];
      item.addEventListener("change", (ev) => {
        this.item[key] = item.value;
        this.emitePintar();
      });
    }
    showListaCamino() {
      const div2 = this.divPropiedades.querySelector(".lista-vistas");
      div2.innerHTML = "";
      for (let camino of this.item.caminos) {
        let span = document.createElement("span");
        span.classList.value = "camino";
        span.setAttribute("id", camino.id + "");
        span.innerHTML = camino.nombre;
        this.addListenerEliminaCamino(span);
        div2.appendChild(span);
      }
    }
    /**
     * 
     * @param {HTMLElement} span 
     */
    addListenerEliminaCamino(span) {
      span.addEventListener("click", (e) => {
        span.remove();
        this.removeFromCamino();
      });
    }
    removeFromCamino(id2) {
      let index = this.item.caminos.findIndex((e) => {
        return e.id == id2;
      });
      this.item.caminos.splice(index, 1);
      this.emitePintar();
    }
    setValoresCamino() {
      this.setInputListener("nombre");
      this.setInputListener("contexto");
      const svistas = this.divPropiedades.querySelector("#caminos");
      svistas.value = "";
      svistas.addEventListener("change", (ev) => {
        const id2 = ev.target.value;
        if (id2 == "") {
          return;
        }
        this.lista.forEach((element) => {
          if (element.id == id2) {
            let esta = this.item.caminos.some((e) => {
              return e.id == id2;
            });
            if (!esta && id2 != this.item.id) {
              this.item.caminos.push(element);
              this.showListaCamino();
              this.emitePintar();
            }
            svistas.value = "";
          }
        });
      });
    }
    setValoresGrupo() {
      const nombre = this.divPropiedades.querySelector('input[name="nombre"]');
      this.setInputListener("contexto");
      const caminoInicial = this.divPropiedades.querySelector("#caminos");
      nombre.value = this.item.nombre;
      if (this.item.caminoInicial) {
        caminoInicial.value = this.item.caminoInicial.id;
      } else {
        caminoInicial.value = "";
      }
      caminoInicial.addEventListener("change", (ev) => {
        const id2 = ev.target.value;
        this.lista.forEach((element) => {
          if (element.id == id2) {
            this.item.caminoInicial = element;
            this.emitePintar();
          }
        });
      });
    }
    connectedCallback() {
    }
    disconnectedCallback() {
    }
  };
  customElements.define("x-propidades-vista", PropiedadesVista);

  // src/vanilla/w3-estudio/editor-caminos/themas.js
  var temasColorEditor = {
    default: {
      colorActivoConexion: "#9c27b0",
      colorConexion: "#ff9800",
      anchoLieneaConexion: "20px",
      colorFondo: "white",
      colorLetra: "black"
    },
    dark: {
      colorActivoConexion: "#93755D",
      colorConexion: "#0C7D9D",
      anchoLieneaConexion: "20px",
      colorFondo: "#1E1E1E",
      colorLetra: "white"
    },
    solar: {
      colorActivoConexion: "#81B88B",
      colorConexion: "#C7B833",
      anchoLieneaConexion: "20px",
      colorFondo: "#FDF6E3",
      colorLetra: "#66AFE0"
    },
    solarDark: {
      colorActivoConexion: "#C7B833",
      colorConexion: "#81B88B",
      anchoLieneaConexion: "20px",
      colorFondo: "#002B36",
      colorLetra: "#66AFE0"
    },
    dracula: {
      colorActivoConexion: "#4EC151",
      colorConexion: "#7DE9FD",
      anchoLieneaConexion: "20px",
      colorFondo: "#282A36",
      colorLetra: "#FF79C6"
    },
    ayu: {
      colorActivoConexion: "#009DF6",
      colorConexion: "#38CFB1",
      anchoLieneaConexion: "20px",
      colorFondo: "#FFFFFF",
      colorLetra: "#FF941C"
    },
    notepad: {
      colorActivoConexion: "#CB5053",
      colorConexion: "#ED5E62",
      anchoLieneaConexion: "20px",
      colorFondo: "#FFFFFF",
      colorLetra: "#2F2CB7"
    }
  };

  // src/vanilla/w3-estudio/editor-caminos/editor-caminos.js
  init_config();
  var template77 = (
    /*html*/
    `
<div>

<div class="w3-bar w3-dark-grey">
        <div class="w3-bar-item w3-button" id="guardar"><i class="fa fa-floppy-o"></i> Guardar</div>
</div>
<div class="w3-container">    
    <h1>Editor de caminos</h1>            
    <div class="w3-row">
        <div class="w3-col l8 m8" style="overflow: auto; max-height: 80vh; ">
            <div class="w3-left">
                <button class="span_size azul" id="size-mas">size +</button>
                <button class="span_size rosa" id="size-menos">size -</button>
            </div>
            <div class="w3-right">
                Tema
                <select id="theme">
                    <option value="default">Default</option>
                    <option value="dark">Dark</option>
                    <option value="solar">Solar</option>
                    <option value="solarDark">Solar Dark</option>
                    <option value="dracula">Dracula</option>
                    <option value="ayu">Ayu</option>
                    <option value="notepad">Notepad</option>
                </select>
                <img id="zoom-in" class="img_icon" src="./img/editor-flujos/zoom-in.svg">
                <img id="zoom-out" class="img_icon" src="./img/editor-flujos/zoom-out.svg">
                <img id="zoom-1" class="img_icon" src="./img/editor-flujos/zoom-1.svg">
            </div>
            <canvas width="1500" height="1500" style="border:1px solid #d3d3d3;">
        </div>
        <div class="w3-col l4 m4">                    
            <br>
            <button class="w3-btn w3-margin-bottom w3-blue" id="b-add-vista">Agregar camino</button>                    
            <x-propidades-vista></x-propidades-vista>
        </div>
    </div>
</div>

</div>
`
  );
  var style71 = (
    /*css*/
    `
.img_icon{
    width: 25px;
}
.span_size{
    border: solid 1px black;
    border-radius: 5px;            
    margin-left: 10px;
    cursor: pointer;
}        
.rosa{            
    background: #E91E63;
    color: white;
}
.azul{
    background: #2196F3;
    color: white;
}
`
  );
  var EditorFlujos = class extends HTMLElement {
    constructor() {
      super();
      this.configuracion = {
        canvas: {
          alto: 1500,
          ancho: 1500
        },
        colorActivoConexion: "#9c27b0",
        colorConexion: "#ff9800",
        anchoLieneaConexion: "20px",
        colorFondo: "white",
        colorLetra: "black",
        zoom: 1
      };
      this.listaObjetos = [];
      this.canvas = null;
      this.el = null;
      this.selectedItem = null;
      this.antx = 0;
      this.anty = 0;
      this.setConfiguracion(temasColorEditor["default"]);
      this.render();
      this.draw();
    }
    setConfiguracion(configuracion2) {
      this.configuracion = Object.assign(this.configuracion, configuracion2);
      this.actulizaConfiguracionLista();
    }
    actulizaConfiguracionLista() {
      for (let item of this.listaObjetos) {
        item.setConfiguracion(this.configuracion);
      }
    }
    setListaObjectos(listaObjectos) {
      this.listaObjetos = jsonToListaObjectos(listaObjectos);
      this.actulizaConfiguracionLista();
    }
    actualiza() {
      this.el.innerHTML = template77;
      this.canvas = this.el.querySelector("canvas");
      this.addListeners();
      this.addZoom(0.01);
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
        <link rel="stylesheet" href="${config.w3css}">
        <link rel="stylesheet" href="${config.fontAwesome}">
        <style>${style71}</style>
        <div>${template77}</div>
        `;
      this.el = shadowRoot2.querySelector("div");
      this.canvas = shadowRoot2.querySelector("canvas");
      this.addListeners();
    }
    addListeners() {
      this.addBtnVistaListener();
      this.addPropiedeadesListener();
      this.addZoomListeners();
      this.addCanvasListener();
      this.addListenerTheme();
      this.addListenerGuardar();
    }
    addListenerGuardar() {
      let guardar = this.shadowRoot.querySelector("#guardar");
      guardar.addEventListener("click", () => {
        this.emiteGuardar();
      });
    }
    addListenerTheme() {
      let select = this.el.querySelector("#theme");
      select.addEventListener("change", (ev) => {
        this.setConfiguracion(temasColorEditor[select.value]);
        this.draw();
      });
    }
    addPropiedeadesListener() {
      let propiedades2 = this.el.querySelector("x-propidades-vista");
      propiedades2.setLista(this.listaObjetos);
      imgGrupo.onload = () => {
        this.draw();
      };
      imgForm.onload = () => {
        this.draw();
      };
      propiedades2.addEventListener("pintar", (e) => {
        this.draw();
      });
    }
    addBtnVistaListener() {
      let bAddVista = this.el.querySelector("#b-add-vista");
      bAddVista.addEventListener("click", () => {
        this.addVista();
      });
    }
    addZoomListeners() {
      const zoomIn = this.el.querySelector("#zoom-in");
      const zoomOut = this.el.querySelector("#zoom-out");
      const zoom1 = this.el.querySelector("#zoom-1");
      const sizeMenos = this.el.querySelector("#size-menos");
      const sizeMas = this.el.querySelector("#size-mas");
      const canvas = this.canvas;
      zoomIn.addEventListener("click", (e) => {
        this.addZoom(0.1);
      });
      zoomOut.addEventListener("click", (e) => {
        this.addZoom(-0.1);
      });
      zoom1.addEventListener("click", (e) => {
        this.addZoom(0);
      });
      sizeMas.addEventListener("click", (e) => {
        canvas.width = canvas.width + 50 + "";
        canvas.height = canvas.height + 50 + "";
        this.draw();
      });
      sizeMenos.addEventListener("click", (e) => {
        canvas.width = canvas.width - 50 + "";
        canvas.height = canvas.height - 50 + "";
        this.draw();
      });
    }
    addZoom(inc) {
      const canvas = this.canvas;
      if (inc == 0) {
        this.configuracion.zoom = 1;
      } else {
        this.configuracion.zoom += inc;
        if (this.configuracion.zoom < 0.3) {
          this.configuracion.zoom = 0.3;
        } else if (this.configuracion.zoom > 1.5) {
          this.configuracion.zoom = 1.5;
        }
      }
      let ancho = canvas.width;
      let pos = (ancho - ancho * this.configuracion.zoom) / 2;
      if (this.configuracion.zoom != 1) {
        canvas.style.position = "relative";
        canvas.style.left = -pos + "px";
        canvas.style.top = -pos + "px";
      } else {
        canvas.style.position = "";
        canvas.style.left = "";
        canvas.style.top = "";
      }
      canvas.style.transform = `scale(${this.configuracion.zoom})`;
    }
    addVista() {
      let vista = new Camino("Camino", 20, 200, 100, "black");
      vista.setConfiguracion(this.configuracion);
      this.listaObjetos.push(
        vista
      );
      this.draw();
    }
    addCanvasListener() {
      const canvas = this.canvas;
      canvas.addEventListener("mousedown", (event) => {
        const x5 = event.offsetX;
        const y5 = event.offsetY;
        if (!this.selectedItem) {
          this.selectedItem = this.selectItem(x5, y5);
          if (this.selectedItem) {
            this.selectedItem.x = x5 - this.selectedItem.ancho / 2;
            this.selectedItem.y = y5 - this.selectedItem.alto / 2;
          }
        }
        this.draw();
      });
      canvas.addEventListener("mousemove", (event) => {
        const x5 = event.offsetX;
        const y5 = event.offsetY;
        if (event.buttons == 1 && this.selectedItem) {
          this.selectedItem.x = x5 - this.selectedItem.ancho / 2;
          this.selectedItem.y = y5 - this.selectedItem.alto / 2;
          this.draw();
        } else {
          if (this.selectedItem && this.selectedItem.isOut(x5, y5)) {
            this.selectedItem = null;
            this.unSelectItems();
            this.draw();
          }
        }
        this.antx = x5;
        this.anty = y5;
      });
    }
    draw() {
      let canvas = this.canvas;
      let lienso = canvas.getContext("2d");
      lienso.clearRect(0, 0, canvas.width, canvas.height);
      lienso.fillStyle = this.configuracion.colorFondo;
      lienso.fillRect(0, 0, canvas.width, canvas.height);
      for (const item of this.listaObjetos) {
        item.drawConexiones(lienso);
      }
      for (const item of this.listaObjetos) {
        item.draw(lienso);
      }
    }
    unSelectItems() {
      for (const item of this.listaObjetos) {
        item.isSelect = false;
      }
    }
    emiteListaObjectos() {
      this.dispatchEvent(
        new CustomEvent("changeLista", {
          detail: {
            flujo: this.listaObjetos
          }
        })
      );
    }
    emiteGuardar() {
      this.dispatchEvent(
        new CustomEvent("guardar", {
          detail: {
            flujo: listaObjectosToJson(this.listaObjetos)
          }
        })
      );
    }
    selectItem(x5, y5) {
      this.unSelectItems();
      const idProyecto = parseInt(this.getAttribute("idproyecto"));
      let propiedades2 = this.el.querySelector("x-propidades-vista");
      for (let i = this.listaObjetos.length - 1; i >= 0; i--) {
        const item = this.listaObjetos[i];
        if (item.inArea(x5, y5)) {
          item.isSelect = true;
          propiedades2.setIdProyecto(idProyecto);
          propiedades2.setItem(item);
          return item;
        }
      }
      return null;
    }
  };
  customElements.define("x-editor-flujos", EditorFlujos);

  // src/vanilla/w3-estudio/panel-ide/panel-ide.js
  init_config();
  var variablesStyle = (
    /*css*/
    `
.variables{
    --tamanio: 240px;
    --visible-titulo: '';
    --positionx-central: calc( var(--tamanio) - 20px);
    --color-background: #132637;
    --color: #99a9b8;
    --color-background-activo: #163048;
    --color-activo: white;
}
`
  );
  var style72 = (
    /*css*/
    `
.panel {
    height: 100%;
    width: var(--tamanio);
    background: var(--color-background);
    color: var(--color);
    /*transition: width 0.2s;*/
}
.espacio{
    height: 10px;
    width: 100%;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    /*background-color: #f1f1f1;
    border: 1px solid #555;*/
}

li {
    display: block;    
    padding: 8px 16px;
    text-decoration: none;
}
li span{
    padding-left: 10px;
}
li:hover {
    background-color: var(--color-background-activo);
    color: var(--color-activo);
}
.activo {    
    color: var(--color-activo);
    background-color: var(--color-background-activo);
}
.titulo{
    display: var(--visible-titulo);
}
.central{
    color: var(--color);
    margin: 0;
    position: absolute;
    top: 45%;    
    transform: translateX(var(--positionx-central));
    background: var(--color-background);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    /*transition: transform 0.2s;*/
    z-index: 10;
}
.icono{
    font-size: 40px;
    padding-left: 4px;
}
.icono:hover {
    color: var(--color-activo);
}
`
  );
  var PanelIde = class extends HTMLElement {
    constructor() {
      super();
      this.render();
      this.addListeners();
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `        
        <link rel="stylesheet" href="${config.fontAwesome}"> 
        <style id="config">${variablesStyle}</style>
        <style>${style72}</style>
        
       <div class="variables panel">
        <div class="espacio"></div>        
        <ul>
        <li nombre="ui"><i class="fa fa-html5"></i><span class="titulo">Ui</span></li>
        <li nombre="js" style="font-weight: bolder;"> Js <span class="titulo">Javascript</span></li>
        <li nombre="css"><i class="fa fa-css3"></i><span class="titulo">CSS</span></li>       
        </ul>               
       </div>
       <div class="variables central">
       <i id="flecha" class="fa fa-chevron-circle-left  icono"></i>
        </div>
        `;
    }
    addListeners() {
      let central = this.shadowRoot.querySelector(".central");
      central.addEventListener("click", (ev) => {
        this.toogleSize();
      });
      let listaLi = this.shadowRoot.querySelectorAll("li");
      for (let li of listaLi) {
        li.addEventListener("click", (ev) => {
          this.removerActivo(listaLi);
          li.classList.add("activo");
          this.emiteSelectItem(li.getAttribute("nombre"));
          ev.preventDefault();
        });
      }
    }
    removerActivo(lista4) {
      for (let li of lista4) {
        li.classList.remove("activo");
      }
    }
    emiteSelectItem(activo) {
      let event = new CustomEvent("activo", {
        detail: {
          activo
        }
      });
      this.dispatchEvent(event);
    }
    emiteChangeSize(ancho) {
      let event = new CustomEvent("changeSize", {
        detail: {
          changeSize: true,
          ancho
        }
      });
      this.dispatchEvent(event);
    }
    toogleSize() {
      let style87 = this.shadowRoot.querySelector("#config");
      let flecha = this.shadowRoot.querySelector("#flecha");
      let tamanio = "50px";
      let display = "none";
      let emitio240 = false;
      flecha.classList.value = "fa fa-chevron-circle-right  icono";
      if (style87.innerHTML.indexOf("--tamanio: 50px;") >= 0) {
        tamanio = "240px";
        display = "''";
        flecha.classList.value = "fa fa-chevron-circle-left icono";
        this.emiteChangeSize(240);
        emitio240 = true;
      }
      style87.innerHTML = `
    .variables{
        --tamanio: ${tamanio};
        --visible-titulo: ${display};
        --positionx-central: calc( var(--tamanio) - 20px);
        --color-background: #132637;
        --color: #99a9b8;
        --color-background-activo: #163048;
        --color-activo: white;
    }
        `;
      if (emitio240) {
        return;
      }
      this.emiteChangeSize(50);
    }
  };
  customElements.define("x-panel-ide", PanelIde);

  // src/vanilla/w3-estudio/w3-estudio.js
  var import_x_componentes_guardados = __toESM(require_x_componentes_guardados());

  // src/vanilla/w3-estudio/ayuda/escritorio/x-ayuda-escritorio.js
  init_config();
  var style73 = (
    /*css*/
    `
* {
    background: ;
}
.espacio{
    min-height: 10px;
}
/*define los estilos del componente*/
.hola-mundo{
    color: red;
}

.margen-izq {
	margin-left: 16%;
}

.tamanio{
	width: 66%;
}
.bolita{
	width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #2196F3;
    transition: background 1s;
}
.bolita:hover{
	background: green;
}

`
  );
  var template78 = (
    /*html*/
    `
<x-bar-menu color="w3-blue-grey" titulo="Ayuda escritorio" icono="hand-peace-o"></x-bar-menu>
<div class="w3-padding">
    <h2 class="margen-izq">Escritorio</h2>
</div>
<div class="w3-row">
    <div class="w3-col s2 espacio w3-hide-small"></div>

    <div class="w3-col s12 m8 ">
        <div class="w3-display-container w3-text-white">
            <img src="./img/ayuda/desk/desk.png" alt="Lights" style="width:100%" class="w3-card-4">
            <div class="w3-padding w3-display-bottomleft">
                <x-tooltip posicion="derecha" contenido="Men\xFA de apps">
                    <div class="bolita animate__animated animate__heartBeat animate__infinite"></div>
                </x-tooltip>
            </div>
            <div class="w3-padding w3-display-bottomright">
                <x-tooltip posicion="izquierda" contenido="Reloj">
                    <div class="bolita animate__animated animate__heartBeat animate__infinite"></div>
                </x-tooltip>
            </div>    
            <div class="w3-padding w3-display-middle ">
                <x-tooltip posicion="abajo" contenido="Escritorio">
                    <div class="bolita animate__animated animate__heartBeat animate__infinite"></div>
                </x-tooltip>
            </div>
            <div class="w3-padding w3-display-bottommiddle">
                <x-tooltip contenido="Barra de tareas">
                    <div class="bolita animate__animated animate__heartBeat animate__infinite"></div>
                </x-tooltip>
            </div>
        </div>
    </div>
</div>
<div class="w3-row-padding titulo-h2">
<div class="w3-col s12" contenedor="">    
    <h2 propiedades=""  class="margen-izq">Teclas r\xE1pidas</h2>    
</div>
</div><div class="w3-row-padding parrafo w3-margin-top">

<div class="w3-col s12">
    <div  propiedades="" style="" class="margen-izq tamanio" id="">Estas combinaciones de teclas ejecutan funciones generales del escritorio web.</div>
</div>
</div><div class="w3-row w3-margin-top">


<div class="w3-col s2 espacio w3-hide-small">        
</div>

<div class="w3-col s12 m8 ">

<div class="w3-responsive">



<table class="w3-table-all">    
    <tbody><tr id="columnas" propiedades="">
        <th propiedades=""  style="min-width: 200px;">Atajo</th>
    <th id="1604244498232"><span propiedades="" >Acci\xF3n</span> 
        </th></tr>
    <tr fila="">
        <td propiedades="" >Meta + w<br></td>
    <td  propiedades="">Cierra la ventana actual.</td></tr>
<tr fila=""><td propiedades="" >Meta + y</td><td propiedades="" >Activa la siguiente ventana.</td></tr>
<tr fila=""><td propiedades="" >Meta + a</td><td propiedades="" >Activa la ayuda de la ventana.</td></tr>
<tr fila=""><td propiedades="" >Meta + n</td><td propiedades="" >Emite el comando nuevo.<br>Nota: hay que dar la funcionalidad en las apps, escuchando de la ventana el evento <span style="font-style: italic;">"<span style="color: rgb(33, 150, 243);">nuevo</span>"</span>.</td></tr><tr fila=""><td propiedades="" >Meta + g</td><td propiedades="" >Emite el evento guardar. 
<br>Nota: hay que dar la funcionalidad en las apps, escuchando de la ventana el evento <span style="font-style: italic;">"<span style="color: rgb(33, 150, 243);">guardar</span>"</span>.</td></tr><tr fila=""><td propiedades="" >F2</td><td propiedades="" >Emite el evento editar. 
<br>Nota: hay que dar la funcionalidad en las apps, escuchando de la ventana el evento "<span style="color: rgb(33, 150, 243); font-style: italic;">editar</span>".</td></tr></tbody></table>
</div>

</div>

</div><div class="w3-row-padding comentario w3-margin-top">

<div class="w3-col s12">
    <blockquote class="w3-leftbar w3-pale-green w3-border-blue w3-padding margen-izq tamanio"  propiedades="" style="">
        <p><i class="fa fa-info w3-xxlarge w3-text-blue"></i></p>
        <p class="">La tecla meta es diferente dependiendo del teclado y el sistema operativo. Normalmente se representa en los teclados mediante la tecla \u229E windows o&nbsp; \u2318 comand.</p>
    </blockquote>
</div>
</div>
`
  );
  var XAyudaEscritorio = class extends HTMLElement {
    constructor() {
      super();
      this.mensaje = "Hola mundo";
      this.render();
      this.initComponentes();
      this.init();
    }
    initComponentes() {
    }
    init() {
    }
    render() {
      let shadowRoot2 = this.attachShadow({
        mode: "open"
      });
      let customTemplate = this.replazaValoresMustache(template78);
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            <link rel="stylesheet" href="${config.animate}">
            <style>${style73}</style>
            <div>${customTemplate}</div>
        `;
      this.$el = shadowRoot2.querySelector("div");
    }
    /*Cuando se monta en la pagina*/
    connectedCallback() {
    }
    /*Cuando se desmonta en la pagina, no necesariamente se destruye*/
    disconnectedCallback() {
    }
    replazaValoresMustache(template90) {
      let props = ["titulo"];
      let salida = template90 + "";
      for (let p of props) {
        const exp = new RegExp(`{{${p}}}`, "g");
        const attr = this.getAttribute(p);
        salida = salida.replace(exp, attr);
      }
      return salida;
    }
  };
  customElements.define("x-ayuda-escritorio", XAyudaEscritorio);

  // src/vanilla/w3-estudio/ayuda/propiedades/x-ayuda-propiedades-clases.js
  var style74 = (
    /*css*/
    `
.espacio{
    min-height: 10px;
}
/*define los estilos del componente*/
.hola-mundo{
    color: red;
}


.articulo-img{
    width: 100%;
    border-radius: 5px;
}

`
  );
  var template79 = (
    /*html*/
    `

<div class="w3-bar w3-red">
<a href="#" class="w3-bar-item w3-button">Home</a>
<a href="#" class="w3-bar-item w3-button">Link 1</a>
<a href="#" class="w3-bar-item w3-button">Link 2</a>
<a href="#" class="w3-bar-item w3-button">Link 3</a>
</div>

<div class="
                w3-container w3-indigo w3-center titulo-jumbo
            ">

    <h1 class="w3-margin w3-jumbo">Ayuda</h1>
    <p class="w3-xlarge"><br></p>
</div><div class="w3-row titulo">

<div class="w3-col s2 espacio">        
</div>
<div class="w3-col s8">
    <h1 propiedades=""  style="font-family: fantasy;">Clases</h1>    
</div>
</div><div class="w3-row parrafo">

<div class="w3-col s2 espacio">        
</div>
<div class="w3-col s8">
    <div  propiedades="">Para editar las clases solo hay que dar clic debajo del titulo de clases, se\xF1alado en la imagen de color rojo.<div><br></div></div>
</div>
</div><div class="w3-row imagen">

<div class="w3-col s2 espacio">        
</div>
<div class="w3-col s8">
    <img src="./img/ayuda/propiedades/clases.png" class="articulo-img">
</div>
</div><div class="w3-row parrafo">

<div class="w3-col s2 espacio">        
</div>
<div class="w3-col s8">
    <div  propiedades=""><div><br></div>Puede agregar cualquier clase separada por un espacio en blanco. Puede usar las clases definidas en el editor, estas tomaran efecto inmediato en la vista.&nbsp;<div><br><div>O puede Usar las definidas en la librer\xEDa de 
    <a href="https://www.w3schools.com/w3css/w3css_references.asp" target="_blank">W3CSS</a>.</div></div></div>
</div>
</div>
`
  );
  var XAyudaPropiedadesClases = class extends HTMLElement {
    constructor() {
      super();
      this.nombreComponente = "nice";
      this.render();
      this.initComponentes();
      this.init();
    }
    initComponentes() {
    }
    init() {
    }
    render() {
      let shadowRoot2 = this.attachShadow({
        mode: "open"
      });
      let customTemplate = this.replazaValoresMustache(template79);
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <style>${style74}</style>
            <div>${customTemplate}</div>
        `;
      this.$el = shadowRoot2.querySelector("div");
    }
    /*Cuando se monta en la pagina*/
    connectedCallback() {
    }
    /*Cuando se desmonta en la pagina, no necesariamente se destruye*/
    disconnectedCallback() {
    }
    replazaValoresMustache(template90) {
      let props = [];
      let salida = template90 + "";
      for (let p of props) {
        const exp = new RegExp(`{{${p}}}`, "g");
        const attr = this.getAttribute(p);
        salida = salida.replace(exp, attr);
      }
      return salida;
    }
  };
  customElements.define("x-ayuda-propiedades-clases", XAyudaPropiedadesClases);

  // src/vanilla/w3-estudio/ayuda/utilidades/ayuda-consola.js
  init_config();
  var template80 = `
<x-bar-menu color="w3-blue-grey" titulo="Ayuda consola" icono="hand-peace-o"></x-bar-menu>
<div>
<div class="w3-row-padding titulo-h1">

<div class="w3-col s12" contenedor="">    
    <h1 propiedades="" class="margen-izq">Comandos de la consola js</h1>    
</div>
</div><div class="w3-row-padding parrafo w3-margin-top">

<div class="w3-col s12">
    <div propiedades="" class="margen-izq">La consola ejecuta cualquier comando de javascrit.&nbsp;<div><br></div><div>Tenemos las siguientes instrucciones nos pueden ayudar.</div></div>
</div>
</div><div class="w3-row w3-margin-top">


<div class="w3-col s2 espacio w3-hide-small">        
</div>

<div class="w3-col s12 m8 ">

<div class="w3-responsive">



<table class="w3-table-all">    
    <tbody><tr id="columnas" propiedades="">
        <th propiedades="" style="width: 200px;">Comando</th>
    <th id="1604256152352"><span propiedades="">Accion</span> 
        </th></tr>
    <tr fila="">
        <td propiedades="">clear</td>
    <td propiedades="">Limpia la consola.</td></tr>
<tr fila=""><td propiedades="">nyancat</td><td propiedades="">Sorpresa..</td></tr></tbody></table>
</div>

</div>

</div>
</div>
`;
  var style75 = (
    /*css*/
    `
* {
    background: ;
}
.espacio{
    min-height: 10px;
}
/*define los estilos del componente*/
.hola-mundo{
    color: red;
}

.margen-izq {
	margin-left: 16%;
}

.tamanio{
	width: 66%;
}


`
  );
  var XAyudaConsola = class extends HTMLElement {
    constructor() {
      super();
      this.mensaje = "Hola mundo";
      this.render();
      this.initComponentes();
      this.init();
    }
    initComponentes() {
    }
    init() {
    }
    render() {
      let shadowRoot2 = this.attachShadow({
        mode: "open"
      });
      let customTemplate = this.replazaValoresMustache(template80);
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style75}</style>
            <div>${customTemplate}</div>
        `;
      this.$el = shadowRoot2.querySelector("div");
    }
    /*Cuando se monta en la pagina*/
    connectedCallback() {
    }
    /*Cuando se desmonta en la pagina, no necesariamente se destruye*/
    disconnectedCallback() {
    }
    replazaValoresMustache(template90) {
      let props = ["titulo"];
      let salida = template90 + "";
      for (let p of props) {
        const exp = new RegExp(`{{${p}}}`, "g");
        const attr = this.getAttribute(p);
        salida = salida.replace(exp, attr);
      }
      return salida;
    }
  };
  customElements.define("x-ayuda-consola", XAyudaConsola);

  // src/vanilla/w3-estudio/exportar/exportar-proyectos.js
  init_config();
  init_db();

  // src/vanilla/w3-estudio/exportar/angular/export-angular.js
  init_db();

  // src/vanilla/w3-estudio/exportar/vue/utils.js
  var ArchivoTexto = class {
    /**     
     * @param {string} nombre Nombre del archivo. Puede definir que este dentro de alguna carpeta. ejemplo src/hola.txt
     * @param {string} contenido Contenido del archivo en forma de texto.
     */
    constructor(nombre, contenido) {
      this.nombre = nombre;
      this.contenido = contenido;
    }
  };
  var JSArchivo = class extends ArchivoTexto {
    /**     
     * @param {string} nombre Nombre del archivo. Puede definir que este dentro de alguna carpeta. ejemplo src/hola.txt
     * @param {string} contenido Contenido del archivo en forma de texto.
     */
    constructor(nombre, contenido) {
      super(nombre, contenido);
      this.contenido = formatoCodigoJs(contenido);
    }
  };
  function getComponentes3(vista) {
    let lista4 = [];
    for (let x5 of vista.componentes) {
      let tagItem = document.createElement(x5.componente);
      tagItem.setShadowRoot(x5.shadowRoot);
      tagItem.connectedCallback();
      lista4.push(tagItem);
    }
    return lista4;
  }
  function creaArbol(ruta, nodo) {
    if (!nodo) {
      return [];
    }
    const sruta = ruta == "/" ? "" : ruta;
    let rutaInicial = sruta + "/" + nodo.contexto;
    let lista4 = [{
      ruta: rutaInicial,
      nodo
    }];
    for (let hijo of nodo.caminos) {
      lista4 = lista4.concat(creaArbol(rutaInicial, hijo));
    }
    return lista4;
  }
  function getNombreArchivo(nombre) {
    return nombre.trim().toLowerCase().replace(/ /g, "-");
  }
  function getCamino(id2, caminos) {
    let filter = caminos.find((item) => item.id == id2);
    return filter;
  }

  // src/vanilla/w3-estudio/exportar/angular/archivos/templateModulo.js
  function getModulo(nombre, imports, declaracion2, exports) {
    return `
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
${imports}
@NgModule({
    declarations: [
${declaracion2}
    ],
    exports: [
${exports}
    ],
    imports: [
    CommonModule,
    RouterModule
    ]
})
export class ${toCammelCase(nombre)}Module { }
`;
  }

  // src/vanilla/w3-estudio/exportar/angular/archivos/packagejson.js
  function getPakageJson(nombre) {
    return new ArchivoTexto("package.json", `
{
    "name": "${nombre.trim().replace(/ /g, "-")}",
    "version": "1.0.0",
    "scripts": {
        "ng": "ng",
        "start": "ng serve",
        "build": "ng build",
        "test": "ng test",
        "lint": "ng lint",
        "e2e": "ng e2e"
    },
    "private": true,
    "dependencies": {
        "@angular/animations": "~10.1.3",
        "@angular/common": "~10.1.3",
        "@angular/compiler": "~10.1.3",
        "@angular/core": "~10.1.3",
        "@angular/forms": "~10.1.3",
        "@angular/platform-browser": "~10.1.3",
        "@angular/platform-browser-dynamic": "~10.1.3",
        "@angular/router": "~10.1.3",
        "rxjs": "~6.6.0",
        "tslib": "^2.0.0",
        "zone.js": "~0.10.2"
    },
    "devDependencies": {
        "@angular-devkit/build-angular": "~0.1001.3",
        "@angular/cli": "~10.1.3",
        "@angular/compiler-cli": "~10.1.3",
        "@types/node": "^12.11.1",
        "@types/jasmine": "~3.5.0",
        "@types/jasminewd2": "~2.0.3",
        "codelyzer": "^6.0.0",
        "jasmine-core": "~3.6.0",
        "jasmine-spec-reporter": "~5.0.0",
        "karma": "~5.0.0",
        "karma-chrome-launcher": "~3.1.0",
        "karma-coverage-istanbul-reporter": "~3.0.2",
        "karma-jasmine": "~4.0.0",
        "karma-jasmine-html-reporter": "^1.5.0",
        "protractor": "~7.0.0",
        "ts-node": "~8.3.0",
        "tslint": "~6.1.0",
        "typescript": "~4.0.2"
    }
}
    `);
  }

  // src/vanilla/w3-estudio/exportar/angular/archivos/angularjson.js
  var angularJson = `{
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "version": 1,
    "newProjectRoot": "projects",
    "projects": {
      "machote": {
        "projectType": "application",
        "schematics": {},
        "root": "",
        "sourceRoot": "src",
        "prefix": "app",
        "architect": {
          "build": {
            "builder": "@angular-devkit/build-angular:browser",
            "options": {
              "outputPath": "dist/machote",
              "index": "src/index.html",
              "main": "src/main.ts",
              "polyfills": "src/polyfills.ts",
              "tsConfig": "tsconfig.app.json",
              "aot": true,
              "assets": [
                "src/favicon.ico",
                "src/assets"
              ],
              "styles": [
                "src/styles.css"
              ],
              "scripts": []
            },
            "configurations": {
              "production": {
                "fileReplacements": [
                  {
                    "replace": "src/environments/environment.ts",
                    "with": "src/environments/environment.prod.ts"
                  }
                ],
                "optimization": true,
                "outputHashing": "all",
                "sourceMap": false,
                "extractCss": true,
                "namedChunks": false,
                "extractLicenses": true,
                "vendorChunk": false,
                "buildOptimizer": true,
                "budgets": [
                  {
                    "type": "initial",
                    "maximumWarning": "2mb",
                    "maximumError": "5mb"
                  },
                  {
                    "type": "anyComponentStyle",
                    "maximumWarning": "6kb",
                    "maximumError": "10kb"
                  }
                ]
              }
            }
          },
          "serve": {
            "builder": "@angular-devkit/build-angular:dev-server",
            "options": {
              "browserTarget": "machote:build"
            },
            "configurations": {
              "production": {
                "browserTarget": "machote:build:production"
              }
            }
          },
          "extract-i18n": {
            "builder": "@angular-devkit/build-angular:extract-i18n",
            "options": {
              "browserTarget": "machote:build"
            }
          },
          "test": {
            "builder": "@angular-devkit/build-angular:karma",
            "options": {
              "main": "src/test.ts",
              "polyfills": "src/polyfills.ts",
              "tsConfig": "tsconfig.spec.json",
              "karmaConfig": "karma.conf.js",
              "assets": [
                "src/favicon.ico",
                "src/assets"
              ],
              "styles": [
                "src/styles.css"
              ],
              "scripts": []
            }
          },
          "lint": {
            "builder": "@angular-devkit/build-angular:tslint",
            "options": {
              "tsConfig": [
                "tsconfig.app.json",
                "tsconfig.spec.json",
                "e2e/tsconfig.json"
              ],
              "exclude": [
                "**/node_modules/**"
              ]
            }
          },
          "e2e": {
            "builder": "@angular-devkit/build-angular:protractor",
            "options": {
              "protractorConfig": "e2e/protractor.conf.js",
              "devServerTarget": "machote:serve"
            },
            "configurations": {
              "production": {
                "devServerTarget": "machote:serve:production"
              }
            }
          }
        }
      }
    },
    "defaultProject": "machote",
    "cli": {
      "analytics": false
    }
}
`;
  function getAngularJson() {
    return new ArchivoTexto("angular.json", angularJson);
  }

  // src/vanilla/w3-estudio/exportar/angular/archivos/tsconfig.js
  var tsconfigApp = ` 
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "outDir": "./out-tsc/app",
      "types": []
    },
    "files": [
      "src/main.ts",
      "src/polyfills.ts"
    ],
    "include": [
      "src/**/*.d.ts"
    ]
}
`;
  function getTsconfigApp() {
    return new ArchivoTexto("tsconfig.app.json", tsconfigApp);
  }
  var tsconfig = `/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "es2015",
    "module": "es2020",
    "lib": [
      "es2018",
      "dom"
    ]
  }
}
`;
  function getTsconfig() {
    return new ArchivoTexto("tsconfig.json", tsconfig);
  }
  var tsconfigSpec = `/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jasmine"
    ]
  },
  "files": [
    "src/test.ts",
    "src/polyfills.ts"
  ],
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}
`;
  function getTsConfigSpec() {
    return new ArchivoTexto("tsconfig.spec.json", tsconfigSpec);
  }
  function getTsConfigFiles() {
    return [getTsconfig(), getTsConfigSpec(), getTsconfigApp()];
  }

  // src/vanilla/w3-estudio/exportar/angular/archivos/pruebas.js
  var tslinFile = `{
    "extends": "tslint:recommended",
    "rulesDirectory": [
      "codelyzer"
    ],
    "rules": {
      "align": {
        "options": [
          "parameters",
          "statements"
        ]
      },
      "array-type": false,
      "arrow-return-shorthand": true,
      "curly": true,
      "deprecation": {
        "severity": "warning"
      },
      "eofline": true,
      "import-blacklist": [
        true,
        "rxjs/Rx"
      ],
      "import-spacing": true,
      "indent": {
        "options": [
          "spaces"
        ]
      },
      "max-classes-per-file": false,
      "max-line-length": [
        true,
        140
      ],
      "member-ordering": [
        true,
        {
          "order": [
            "static-field",
            "instance-field",
            "static-method",
            "instance-method"
          ]
        }
      ],
      "no-console": [
        true,
        "debug",
        "info",
        "time",
        "timeEnd",
        "trace"
      ],
      "no-empty": false,
      "no-inferrable-types": [
        true,
        "ignore-params"
      ],
      "no-non-null-assertion": true,
      "no-redundant-jsdoc": true,
      "no-switch-case-fall-through": true,
      "no-var-requires": false,
      "object-literal-key-quotes": [
        true,
        "as-needed"
      ],
      "quotemark": [
        true,
        "single"
      ],
      "semicolon": {
        "options": [
          "always"
        ]
      },
      "space-before-function-paren": {
        "options": {
          "anonymous": "never",
          "asyncArrow": "always",
          "constructor": "never",
          "method": "never",
          "named": "never"
        }
      },
      "typedef": [
        true,
        "call-signature"
      ],
      "typedef-whitespace": {
        "options": [
          {
            "call-signature": "nospace",
            "index-signature": "nospace",
            "parameter": "nospace",
            "property-declaration": "nospace",
            "variable-declaration": "nospace"
          },
          {
            "call-signature": "onespace",
            "index-signature": "onespace",
            "parameter": "onespace",
            "property-declaration": "onespace",
            "variable-declaration": "onespace"
          }
        ]
      },
      "variable-name": {
        "options": [
          "ban-keywords",
          "check-format",
          "allow-pascal-case"
        ]
      },
      "whitespace": {
        "options": [
          "check-branch",
          "check-decl",
          "check-operator",
          "check-separator",
          "check-type",
          "check-typecast"
        ]
      },
      "component-class-suffix": true,
      "contextual-lifecycle": true,
      "directive-class-suffix": true,
      "no-conflicting-lifecycle": true,
      "no-host-metadata-property": true,
      "no-input-rename": true,
      "no-inputs-metadata-property": true,
      "no-output-native": true,
      "no-output-on-prefix": true,
      "no-output-rename": true,
      "no-outputs-metadata-property": true,
      "template-banana-in-box": true,
      "template-no-negated-async": true,
      "use-lifecycle-interface": true,
      "use-pipe-transform-interface": true,
      "directive-selector": [
        true,
        "attribute",
        "app",
        "camelCase"
      ],
      "component-selector": [
        true,
        "element",
        "app",
        "kebab-case"
      ]
    }
}`;
  var karmaFile = `
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/machote'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
`;
  function getPruebas() {
    return [
      new ArchivoTexto("tslint.json", tslinFile),
      new ArchivoTexto("karma.conf.js", karmaFile)
    ];
  }

  // src/vanilla/w3-estudio/exportar/angular/archivos/configuracion.js
  var gitignore = `
# See http://help.github.com/ignore-files/ for more about ignoring files.

# compiled output
/dist
/tmp
/out-tsc
# Only exists if Bazel was run
/bazel-out

# dependencies
/node_modules

# profiling files
chrome-profiler-events*.json
speed-measure-plugin*.json

# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# IDE - VSCode
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
.history/*

# misc
/.sass-cache
/connect.lock
/coverage
/libpeerconnection.log
npm-debug.log
yarn-error.log
testem.log
/typings

# System Files
.DS_Store
Thumbs.db
`;
  var editorconfig = `
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false

`;
  var browsersslistrc = `
# This file is used by the build system to adjust CSS and JS output to support the specified browsers below.
# For additional information regarding the format and rule options, please see:
# https://github.com/browserslist/browserslist#queries

# For the full list of supported browsers by the Angular framework, please see:
# https://angular.io/guide/browser-support

# You can see what browsers were selected by your queries by running:
#   npx browserslist

last 1 Chrome version
last 1 Firefox version
last 2 Edge major versions
last 2 Safari major versions
last 2 iOS major versions
Firefox ESR
not IE 9-10 # Angular support for IE 9-10 has been deprecated and will be removed as of Angular v11. To opt-in, remove the 'not' prefix on this line.
not IE 11 # Angular supports IE 11 only as an opt-in. To opt-in, remove the 'not' prefix on this line.

`;
  var enviroments = `
// This file can be replaced during build by using the 'fileReplacements' array.
// 'ng build --prod' replaces 'environment.ts' with 'environment.prod.ts'.
// The list of file replacements can be found in 'angular.json'.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as 'zone.run', 'zoneDelegate.invokeTask'.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
`;
  var enviromentsProd = `
export const environment = {
    production: true
};  
`;
  function getConfiguraciones() {
    return [
      new ArchivoTexto(".gitignore", gitignore),
      new ArchivoTexto(".editorconfig", editorconfig),
      new ArchivoTexto(".browserslistrc", browsersslistrc),
      new ArchivoTexto("src/environments/environment.ts", enviroments),
      new ArchivoTexto("src/environments/environment.prod.ts", enviromentsProd)
    ];
  }

  // src/vanilla/w3-estudio/exportar/vue/w3css-index.js
  init_config();
  function getStyle(tipo2) {
    if (tipo2 == "sketchy") {
      return `
    <link href="https://fonts.googleapis.com/css2?family=Cabin+Sketch&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Neucha&display=swap" rel="stylesheet">
        `;
    }
    return "";
  }
  function getW3Index(nombre, tipo2) {
    let css = getCsslink(tipo2);
    let styleExtra = getStyle(tipo2);
    return new ArchivoTexto("src/index.html", `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="${css}">
    <link rel="stylesheet" href="${config.fontAwesome}">
${styleExtra}
    <title>${nombre}</title>
</head>
<body>
    <div id="app"></div>
    <script src="main.js" ><\/script>
</body>
</html>
`);
  }

  // src/vanilla/w3-estudio/exportar/angular/archivos/mainFiles.js
  function getW3Index2(nombre, tipo2) {
    let css = getCsslink(tipo2);
    let styleExtra = getStyle(tipo2);
    return new ArchivoTexto("src/index.html", `
<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>${nombre}</title>
    <link rel="stylesheet" href="${css}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
${styleExtra}
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
    <app-root></app-root>
</body>
</html>
    
`);
  }
  var main = `
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

`;
  var polifills = `
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run 'npm install --save classlist.js'.

/**
 * Web Animations '@angular/platform-browser/animations'
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run 'npm install --save web-animations-js'.

/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before 'zone.js' being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass 'zone.js' patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js/dist/zone';  // Included with Angular CLI.


/***************************************************************************************************
 * APPLICATION IMPORTS
 */
`;
  var style76 = `
/* You can add global styles to this file, and also import other style files */
`;
  var test = `
// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /.spec.ts$/);
// And load the modules.
context.keys().map(context);

`;
  function getMainFiles() {
    return [
      new JSArchivo("src/main.ts", main),
      new ArchivoTexto("src/styles.css", style76),
      new JSArchivo("src/polyfills.ts", polifills),
      new JSArchivo("src/test.ts", test)
    ];
  }

  // src/vanilla/w3-estudio/exportar/angular/archivos/templateFlujos.js
  init_db();
  function fixRutasAngular(rutas) {
    for (let ruta of rutas) {
      if (ruta.ruta[0] == "/") {
        ruta.ruta = ruta.ruta.replace("/", "");
      }
    }
    return rutas;
  }
  async function generarRutas(idProyecto) {
    let archivos = [];
    let db5 = getDB();
    let grupos = await db5.list("grupos");
    grupos = grupos.filter((grupo) => {
      return grupo.idProyecto == idProyecto;
    });
    let caminos = await db5.list("caminos");
    for (let i = 0; i < grupos.length; i++) {
      let camino = getCamino(grupos[i].id, caminos);
      const flujo = jsonToListaObjectos(camino.flujo);
      let nombre = grupos[i].nombre.trim().toLowerCase().replace(/ /g, "-");
      let rutaInicial = "/" + flujo[0].contexto.trim().toLowerCase().replace(/ /g, "-");
      let rutas = [{ ruta: rutaInicial, nodo: flujo[0] }].concat(creaArbol(rutaInicial, flujo[0].caminoInicial));
      rutas = fixRutasAngular(rutas);
      const modulorutas = await creaModuloRutas(nombre, rutas);
      archivos = archivos.concat(modulorutas);
    }
    return archivos;
  }
  async function creaModuloRutas(nombre, rutas) {
    let db5 = getDB();
    let imports = /* @__PURE__ */ new Set();
    let importstext = "";
    let paths = "";
    let declaraciones = "";
    let archivos = [];
    let idHeader = parseInt(rutas[0].nodo.header);
    let idFooter = parseInt(rutas[0].nodo.footer);
    let header = null;
    let footer = null;
    if (idHeader) {
      header = await db5.get("headers", idHeader);
    }
    if (idFooter) {
      footer = await db5.get("footers", idFooter);
    }
    let nombreHeader = header ? getNombreArchivo(header.nombre) : "";
    let nombreHFooter = footer ? getNombreArchivo(footer.nombre) : "";
    for (let ruta of rutas) {
      let nombreComponente = toCammelCase(ruta.nodo.nombre.trim().replace(/ /g, "-").toLowerCase()) + "VistaComponent";
      const vistaCamino = await creaVista(
        ruta,
        nombre,
        nombreComponente,
        nombreHeader,
        nombreHFooter
      );
      archivos.push(vistaCamino);
      paths += `        { path: '${ruta.ruta}', component: ${nombreComponente} } ,
`;
      let imp = `import { ${nombreComponente} } from './${getNombreArchivo(ruta.nodo.nombre)}-vista.component';`;
      if (!imports.has(imp)) {
        imports.add(imp);
        importstext += imp + "\n";
        declaraciones += `      ${nombreComponente},
`;
      }
    }
    let archivoRutas = creaRouting(nombre, importstext, paths);
    let moduloRuta = creaModuloRouting(nombre, importstext, declaraciones);
    archivos.push(archivoRutas);
    archivos.push(moduloRuta);
    return archivos;
  }
  function creaRouting(nombre, importstext, paths) {
    return new JSArchivo(
      `src/flujos/${nombre}/${getNombreArchivo(nombre)}-routing.module.ts`,
      `
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
${importstext}

const routes: Routes = [
${paths}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ${toCammelCase(nombre)}RoutingModule { }    
`
    );
  }
  function creaModuloRouting(nombre, importstext, declaraciones) {
    return new JSArchivo(
      `src/flujos/${nombre}/${getNombreArchivo(nombre)}.module.ts`,
      `
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ${toCammelCase(nombre)}RoutingModule } from './${getNombreArchivo(nombre)}-routing.module';
import { FootersModule } from 'src/footers/footers.module';
import { VistasModule } from 'src/vistas/vistas.module';
import { HeadersModule } from 'src/headers/headers.module';
//Vistas
${importstext}

@NgModule({
    declarations: [
${declaraciones}
    ],
    imports: [
        CommonModule,
        VistasModule,
        FootersModule,
        HeadersModule,
        ${toCammelCase(nombre)}RoutingModule,
    ]
})
export class ${toCammelCase(nombre)}Module { }
`
    );
  }
  async function creaVista(ruta, nombre, nombreComponente, header, footer) {
    let db5 = getDB();
    let idVista = parseInt(ruta.nodo.vista);
    let vista = null;
    if (idVista) {
      vista = await db5.get("vistas", parseInt(ruta.nodo.vista));
    }
    let nombreArchivo = `src/flujos/${nombre}/${getNombreArchivo(ruta.nodo.nombre)}-vista.component.ts`;
    let tag2 = vista ? vista.nombre.toLowerCase().replace(/ /g, "-") : "";
    let tagHeader = header ? `<${header}></${header}>` : "";
    let tagFooter = footer ? `<${footer}></${footer}>` : "";
    let tagContent = vista ? `<${tag2}></${tag2}>` : "";
    return new JSArchivo(
      nombreArchivo,
      `
import { Component, OnInit } from '@angular/core';

const template = \`
<div>
    ${tagHeader}
    ${tagContent}
    ${tagFooter}
</div>    
\`;

@Component({
    template: template,  
})
export class ${nombreComponente} implements OnInit {
    
    constructor() { }

    ngOnInit(): void {
    }

}    
    `
    );
  }

  // src/vanilla/w3-estudio/exportar/angular/archivos/app-angular.js
  init_db();
  function getRoutingApp() {
    return new JSArchivo("src/app/app-routing.module.ts", `
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }        
`);
  }
  function getAppComponent() {
    return new JSArchivo("src/app/app.component.ts", `
import { Component } from '@angular/core';

const template = \`
<router-outlet></router-outlet>
\`;

@Component({
    selector: 'app-root',
    template: template,
})
export class AppComponent {
    title = '';
}
    
    `);
  }
  async function getAppModule(idProyecto) {
    let db5 = getDB();
    let grupos = await db5.list("grupos");
    grupos = grupos.filter((grupo) => {
      return grupo.idProyecto == idProyecto;
    });
    let imports = "";
    let declaraciones = "";
    for (let grupo of grupos) {
      const nombre = grupo.nombre.trim().toLowerCase().replace(/ /g, "-");
      const nombreClase = toCammelCase(nombre);
      imports += `import { ${nombreClase}Module } from 'src/flujos/${nombre}/${nombre}.module';`;
      declaraciones += `      ${nombreClase}Module,
`;
    }
    return new JSArchivo(
      "src/app/app.module.ts",
      `
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
${imports}


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
${declaraciones}
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
    `
    );
  }
  async function getAppFiles(idProyecto) {
    let modulo = await getAppModule(idProyecto);
    return [
      getRoutingApp(),
      getAppComponent(),
      modulo
    ];
  }

  // src/vanilla/w3-estudio/exportar/angular/export-angular.js
  var db3 = getDB();
  async function getVistasAngular(tabla, idProyecto) {
    let vistas = await db3.list(tabla);
    vistas = vistas.filter((vista) => {
      return vista.idProyecto == idProyecto;
    });
    let vistasAngular = [];
    let imports = "";
    let declaraciones = "";
    let exports = "";
    for (let i = 0; i < vistas.length; i++) {
      let obj = {};
      let vista = await db3.get("metadataVistas", vistas[i].id);
      obj = getObjetoComponente(vista.codigo);
      let tag2 = vistas[i].nombre.toLowerCase().replace(/ /g, "-");
      let componentes = getComponentes3(vista);
      const nombreClase = toCammelCase(tag2) + "Component";
      imports += `import { ${nombreClase} } from './${tag2}.component';
`;
      declaraciones += `       ${nombreClase},
`;
      exports += `        ${nombreClase},
`;
      vistasAngular.push(
        new JSArchivo(
          `src/${tabla}/${tag2}.component.ts`,
          formatoCodigoHtml(
            getAngularComponent(tag2, componentes, vista.estilo, obj)
          )
        )
      );
    }
    let modulo = getModulo(tabla, imports, declaraciones, exports);
    vistasAngular.push(new JSArchivo(`src/${tabla}/${tabla}.module.ts`, modulo));
    return vistasAngular;
  }
  async function getProyectoAngular(idProyecto, tipo2) {
    let archivos = [];
    const proyecto = await db3.get("proyectos", idProyecto);
    let vistas = await getVistasAngular("vistas", idProyecto);
    let headers = await getVistasAngular("headers", idProyecto);
    let footers = await getVistasAngular("footers", idProyecto);
    archivos = archivos.concat(vistas);
    archivos = archivos.concat(headers);
    archivos = archivos.concat(footers);
    archivos = archivos.concat([getPakageJson(proyecto.nombre)]);
    archivos = archivos.concat([getAngularJson()]);
    archivos = archivos.concat(getTsConfigFiles());
    archivos = archivos.concat(getPruebas());
    archivos = archivos.concat(getConfiguraciones());
    archivos = archivos.concat([getW3Index2(proyecto.nombre, tipo2)]);
    archivos = archivos.concat(getMainFiles());
    let rutas = await generarRutas(idProyecto);
    archivos = archivos.concat(rutas);
    let appFiles = await getAppFiles(idProyecto);
    archivos = archivos.concat(appFiles);
    let zip = new JSZip();
    for (let file of archivos) {
      zip.file(file.nombre, file.contenido);
    }
    zip.generateAsync({ type: "blob" }).then(function(content) {
      downloadFile(content, proyecto.nombre + ".angular.zip", "application/zip");
    });
  }

  // src/vanilla/w3-estudio/exportar/vue/exportar-vue.js
  init_db();

  // src/vanilla/w3-estudio/exportar/vue/packagejson.js
  function getPakageJson2(nombre) {
    return new ArchivoTexto("package.json", `
{
    "name": "${nombre.trim().replace(/ /g, "-")}",
    "version": "1.0.0",
    "description": "",
    "main": "",
    "scripts": {
        "start": "parcel src/index.html",
        "build": "parcel build src/index.html"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "app.vue": "^0.1.10",
        "vue": "^2.6.12",
        "vue-hot-reload-api": "^2.3.4",
        "vue-router": "^3.4.3"
    },
    "devDependencies": {
        "@vue/component-compiler-utils": "^3.2.0",
        "vue-template-compiler": "^2.6.12"
    }
}
    `);
  }

  // src/vanilla/w3-estudio/exportar/vue/templates.js
  init_db();
  function getMain() {
    return new ArchivoTexto(
      "src/main.js",
      `
import Vue from 'vue';
import VueRouter from 'vue-router';
import {getRutas} from './rutas';
import App from './app';
Vue.use(VueRouter);

const router = getRutas();

new Vue({
    router: router,
    el: '#app',
    render: (context) => context(App)
});
    `
    );
  }
  function getApp() {
    return new ArchivoTexto("src/app.vue", `
<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
}
<\/script>
    `);
  }
  async function generarRutas2(idProyecto) {
    let archivos = [];
    let db5 = getDB();
    let grupos = await db5.list("grupos");
    grupos = grupos.filter((grupo) => {
      return grupo.idProyecto == idProyecto;
    });
    let caminos = await db5.list("caminos");
    for (let i = 0; i < grupos.length; i++) {
      let camino = getCamino(grupos[i].id, caminos);
      const flujo = jsonToListaObjectos(camino.flujo);
      let nombre = grupos[i].nombre.trim().toLowerCase().replace(/ /g, "-");
      let rutaInicial = "/" + flujo[0].contexto.trim().toLowerCase().replace(/ /g, "-");
      let rutas = [{ ruta: rutaInicial, nodo: flujo[0] }].concat(creaArbol(rutaInicial, flujo[0].caminoInicial));
      const modulorutas = await creaModuloRutas2(nombre, rutas);
      archivos = archivos.concat(modulorutas);
    }
    archivos.push(creaArchivosRutas(grupos));
    return archivos;
  }
  function creaArchivosRutas(grupos) {
    let imports = "";
    let cmd2 = "";
    for (let grupo of grupos) {
      let nombre = grupo.nombre.trim().toLowerCase();
      imports += `import { getRutas${toCammelCase(nombre)} } from './flujos/${nombre}/rutas${toCammelCase(nombre)}.js'
`;
      cmd2 += `routes = routes.concat(getRutas${toCammelCase(nombre)}());
`;
    }
    return new ArchivoTexto("src/rutas.js", `
import VueRouter from 'vue-router';
${imports}
let routes = [];
${cmd2}

export function getRutas(){ 
    return new VueRouter({
        routes 
    })
}
    `);
  }
  function getNombreVista(ruta) {
    return ruta.nodo.nombre.toLowerCase().replace(/ /g, "-");
  }
  async function creaModuloRutas2(nombre, rutas) {
    let db5 = getDB();
    let imports = /* @__PURE__ */ new Set();
    let importstext = "";
    let paths = "";
    let archivos = [];
    let idHeader = parseInt(rutas[0].nodo.header);
    let idFooter = parseInt(rutas[0].nodo.footer);
    let header = null;
    let footer = null;
    if (idHeader) {
      header = await db5.get("headers", idHeader);
    }
    if (idFooter) {
      footer = await db5.get("footers", idFooter);
    }
    let nombreHeader = header ? getNombreArchivo(header.nombre) : null;
    let nombreHFooter = footer ? getNombreArchivo(footer.nombre) : null;
    for (let ruta of rutas) {
      const vistaCamino = await creaVistaCamino(nombre, ruta, nombreHeader, nombreHFooter);
      archivos.push(vistaCamino);
      let nombreComponente = toCammelCase(ruta.nodo.nombre.trim().replace(/ /g, "-").toLowerCase());
      paths += `        { path: '${ruta.ruta}', component: ${nombreComponente} } ,
`;
      let imp = `import ${nombreComponente} from './${getNombreVista(ruta)}';`;
      if (!imports.has(imp)) {
        imports.add(imp);
        importstext += imp + "\n";
      }
    }
    let archivoRutas = new ArchivoTexto(`src/flujos/${nombre}/rutas${toCammelCase(nombre)}.js`, `
${importstext}
export function getRutas${toCammelCase(nombre)}(){
    return [
${paths}
    ];
}
    `);
    archivos.push(archivoRutas);
    return archivos;
  }
  async function creaVistaCamino(nombre, ruta, header, footer) {
    let db5 = getDB();
    let idVista = parseInt(ruta.nodo.vista);
    let vista = null;
    if (idVista) {
      vista = await db5.get("vistas", idVista);
    }
    const nombreArchivo = `src/flujos/${nombre}/${getNombreVista(ruta)}.vue`;
    const nombreContent = vista ? getNombreArchivo(vista.nombre) : "";
    const importcontent = vista ? `import ContentDiv from '../../vistas/${nombreContent}.vue';` : "";
    const tagContent = vista ? "<content-div></content-div>" : "";
    const defContent = vista ? "ContentDiv" : "";
    const tagHeader = header ? "<header-div></header-div>" : "";
    const tagFooter = footer ? "<footer-div></footer-div>" : "";
    const importHeader = header ? `import HeaderDiv from '../../headers/${header}.vue';` : "";
    const importFooter = footer ? `import FooterDiv from '../../footers/${footer}.vue';` : "";
    const defHeader = header ? `HeaderDiv,` : "";
    const defFooter = footer ? `FooterDiv,` : "";
    return new ArchivoTexto(nombreArchivo, `
<template>
    <div>
    ${tagHeader}
    ${tagContent}
    ${tagFooter}
    </div>    
</template>
<script>
    ${importHeader}
    ${importcontent}
    ${importFooter}
    export default {
        data() {
            return {
                mensaje: 'Hola mundo',
            }
        },
        components: {
            ${defFooter}
            ${defHeader}
            ${defContent}
        }
    }
<\/script>

    `);
  }

  // src/vanilla/w3-estudio/exportar/vue/exportar-vue.js
  var db4 = getDB();
  async function getVistasVue(tabla, idProyecto) {
    let vistas = await db4.list(tabla);
    vistas = vistas.filter((vista) => {
      return vista.idProyecto == idProyecto;
    });
    let vistasVue = [];
    for (let i = 0; i < vistas.length; i++) {
      let obj = {};
      let vista = await db4.get("metadataVistas", vistas[i].id);
      obj = getObjetoComponente(vista.codigo);
      let tag2 = vistas[i].nombre.toLowerCase().replace(/ /g, "-");
      let componentes = getComponentes3(vista);
      vistasVue.push(
        new ArchivoTexto(
          `src/${tabla}/${tag2}.vue`,
          formatoCodigoHtml(
            getVueComponent(componentes, vista.estilo, obj)
          )
        )
      );
    }
    return vistasVue;
  }
  async function getProyectoVue(idProyecto, tipo2) {
    let archivos = [];
    const proyecto = await db4.get("proyectos", idProyecto);
    let vistas = await getVistasVue("vistas", idProyecto);
    let headers = await getVistasVue("headers", idProyecto);
    let footers = await getVistasVue("footers", idProyecto);
    archivos = archivos.concat(vistas);
    archivos = archivos.concat(headers);
    archivos = archivos.concat(footers);
    archivos = archivos.concat([getPakageJson2(proyecto.nombre)]);
    archivos = archivos.concat([getW3Index(proyecto.nombre, tipo2)]);
    archivos = archivos.concat([getMain()]);
    let rutas = await generarRutas2(idProyecto);
    archivos = archivos.concat(rutas);
    archivos = archivos.concat([getApp()]);
    let zip = new JSZip();
    for (let file of archivos) {
      zip.file(file.nombre, file.contenido);
    }
    zip.generateAsync({ type: "blob" }).then(function(content) {
      downloadFile(content, proyecto.nombre + ".vue.zip", "application/zip");
    });
  }

  // src/vanilla/w3-estudio/exportar/exportar-proyectos.js
  var style77 = `
img{
    height: 100px;
    width: 100px;
}
.descarga{
    cursor: pointer;
}
.descarga:hover{
    filter: invert(25%);
}
.cuadro{
    padding: 10px;
    height: 200px;
    width: 200px;
}
.card{
    height: 180px;
    width: 180px;
}
`;
  var template81 = (
    /*html*/
    `
<x-bar-menu color="w3-deep-orange"></x-bar-menu>
<div class="w3-block" style="height: 100vh; padding: 5%;">
    <div class="w3-row-padding">        
        <div class="w3-left cuadro">
            <div class="w3-card-4 w3-center card">
                <img src="./img/logos/web-componente.png" >
                <div class="w3-container w3-center w3-border-top descarga">
                    <p><i class="fa fa-download"></i> Web componentes</p>
                </div>
            </div>
        </div>

        <div class="w3-left cuadro">
            <div class="w3-card-4 w3-center card">
                <img src="./img/logos/vue.png" >
                <div class="w3-container w3-center w3-border-top descarga">
                    <p vue ><i class="fa fa-download"></i> Vue</p>
                </div>
            </div>
        </div>

        <div class="w3-left cuadro">
        <div class="w3-card-4 w3-center card">
            <img src="./img/logos/angular.svg" >
            <div class="w3-container w3-center w3-border-top descarga">
                <p angular><i class="fa fa-download"></i> Angular</p>
            </div>
        </div>
    </div>
    </div>  
</div>
`
  );
  var W3EExportar = class extends HTMLElement {
    constructor() {
      super();
      this.render();
      this.addListeners();
      this.tipo = "w3css";
    }
    connectedCallback() {
      this.idProyecto = parseInt(this.getAttribute("idproyecto"));
      let db5 = getDB();
      db5.get("proyectos", this.idProyecto).then((data2) => {
        this.tipo = data2.configuracion.css;
      });
      validaProyecto(this);
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style77}</style>
            ${template81}
        `;
      this.menu = shadowRoot2.querySelector("x-bar-menu");
      this.menu.setItem({
        titulo: "Exportar",
        icono: "cloud-download",
        acciones: [
          {
            titulo: "Vue",
            icono: "fa-html5 w3-text-green"
          },
          {
            titulo: "Angular",
            icono: "fa-html5 w3-text-red"
          }
        ]
      });
    }
    addListeners() {
      let vue = this.shadowRoot.querySelector("[vue]");
      vue.addEventListener("click", (ev) => {
        getProyectoVue(this.idProyecto, this.tipo);
      });
      let angular = this.shadowRoot.querySelector("[angular]");
      angular.addEventListener("click", (ev) => {
        getProyectoAngular(this.idProyecto, this.tipo);
      });
    }
  };
  customElements.define("x-w3e-exportar-proyecto", W3EExportar);

  // src/vanilla/w3-estudio/proyecto/vista-previa.js
  init_config();
  var style78 = (
    /*css*/
    `
.espacio{
    min-height: 10px;
}
/*define los estilos del componente*/
.hola-mundo{
    color: red;
}


input:invalid {
    outline: solid 1px red;
    background: pink;
}
input[type="color"] {
    padding: 0;
    height: 40px;
}

`
  );
  var template82 = (
    /*html*/
    `
<div class="">

    <div class="w3-container"  propiedades="">
      <h2>Proyecto</h2>
      <p><span class="w3-tag w3-blue w3-round" id="tipo-css"></span></p>
    </div>
    
    <form onsubmit="return false">
    <div class="w3-container">     
        <div id="items-div" class="w3-row">
            <div input-div="" id="1601067853218" class="w3-col s12 m12 w3-padding" propiedades="">
                <br>
                <label  propiedades="">Nombre</label>
                <input class="w3-input w3-border" propiedades="" 
                    input-formulario="" type="text" name="nombre" required="true" 
                    pattern="[a-zA-Z\xF1\xD1 0-9]{5,25}">
            </div>
            <div input-div="" id="1601067853219" class="w3-col s12 m12 w3-padding" propiedades="">
                <br>
                <label  propiedades=""> Descripci\xF3n</label>
                <textarea class="w3-input w3-border" style="resize:none; height: 100px; "propiedades="" 
                input-formulario="" type="text" name="descripcion"></textarea>                
            </div>
        </div> 
    </div>
    <div class="w3-container w3-padding-top">
    <button class="w3-button w3-blue w3-block w3-margin-top"  propiedades="" id="guardarProyecto" ev-click="guardar()" tiene-eventos="">Guardar</button>
    </div>
    </form>
</div>
`
  );
  var XProyectoVistaPrevia = class extends HTMLElement {
    constructor() {
      super();
      this.mensaje = "Hola mundo";
      this.item = null;
      this.render();
      this.initComponentes();
    }
    initComponentes() {
      const btnGuardar = this.shadowRoot.querySelector("#guardarProyecto");
      btnGuardar.addEventListener("click", (ev) => {
        this.guardar();
      });
    }
    setItem(item) {
      this.item = item;
      let form = this.$el.querySelector("form");
      form.querySelector('[name="nombre"]').value = item.nombre;
      form.querySelector('[name="descripcion"]').value = item.descripcion;
      this.tipocss.innerHTML = item.configuracion.css;
    }
    guardar() {
      let form = this.$el.querySelector("form");
      if (form.checkValidity()) {
        this.emiteActualizar();
      }
    }
    emiteActualizar() {
      const data2 = {
        id: this.item.id,
        nombre: this.nombre.value,
        descripcion: this.descripcion.value
      };
      this.dispatchEvent(
        new CustomEvent("actualizar", {
          detail: {
            actualizar: true,
            item: data2
          }
        })
      );
    }
    render() {
      let shadowRoot2 = this.attachShadow({
        mode: "open"
      });
      let customTemplate = this.replazaValoresMustache(template82);
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">            
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style78}</style>
            <div>${customTemplate}</div>
        `;
      this.$el = shadowRoot2.querySelector("div");
      this.form = this.$el.querySelector("form");
      this.nombre = this.form.querySelector('[name="nombre"]');
      this.descripcion = this.form.querySelector('[name="descripcion"]');
      this.tipocss = this.$el.querySelector("#tipo-css");
    }
    /*Cuando se monta en la pagina*/
    connectedCallback() {
    }
    /*Cuando se desmonta en la pagina, no necesariamente se destruye*/
    disconnectedCallback() {
    }
    replazaValoresMustache(template90) {
      let props = ["titulo"];
      let salida = template90 + "";
      for (let p of props) {
        const exp = new RegExp(`{{${p}}}`, "g");
        const attr = this.getAttribute(p);
        salida = salida.replace(exp, attr);
      }
      return salida;
    }
  };
  customElements.define("x-proyecto-vista-previa", XProyectoVistaPrevia);

  // src/vanilla/w3-estudio/proyecto/paginador-proyecto.js
  init_config();
  init_db();

  // src/vanilla/utils/modal/splash-screen.js
  init_zindexModal();
  var SplashScreen = class {
    constructor() {
      this._titulo = "Titulo";
      this._el = null;
    }
    set titulo(val) {
      this._titulo = val;
    }
    get titulo() {
      return this._titulo;
    }
    open() {
      let div2 = document.createElement("div");
      let body = document.querySelector("body");
      this._el = div2;
      div2.style.zIndex = getZindez();
      div2.style.background = "rgba(50,50,50,0.5)";
      div2.style.position = "fixed";
      div2.style.top = 0;
      div2.style.left = 0;
      div2.style.bottom = 0;
      div2.style.width = "100%";
      div2.style.height = "100hv";
      div2.innerHTML = this.createWin();
      body.appendChild(div2);
      return this.terminar(div2);
    }
    dataAceptar() {
      return null;
    }
    terminar(div2) {
      return new Promise((resolve2, reject2) => {
        if (div2) {
          div2.addEventListener("click", (e) => {
            this._el.remove();
            resolve2({ val: true, op: "aceptar" });
          });
          setTimeout((tik) => {
            this._el.remove();
            resolve2({ val: true, op: "aceptar" });
          }, 3e3);
        }
      });
    }
    createWin() {
      return (
        /*html*/
        `
        <div class="w3-row-padding">
            <div class="w3-col s3 m4" style="height: 100px;">
            </div>
            <div class="w3-col s11 m4 w3-text-white">        
                <div class="w3-card-4 animate__animated animate__jackInTheBox w3-display-container" id="ventana" 
                style="
                    width: 100%;                    
                    height: 250px;        
                    background: #69a62d;
                    margin-top: 30%;
                ">
                <!--<img class="w3-responsive" src="${this._srcimg}">-->
                    <div class="w3-display-topleft w3-container w3-padding-16">
                    <img class="w3-left" src="./img/icon/logo-app.png" style="width: 30px;"> 
                    <div class="w3-margin-left w3-large w3-left">W3 Estudio</div>
                    </div>
                    <div class="w3-display-middle w3-xxxlarge" style="font-family: fantasy;">${this._titulo}</div>
                    <div class="w3-display-bottomright w3-container">Creado por Sa\xFAl Salazar M\xE9ndez</div>                          
                </div>
            </div>
        </div>        
        `
      );
    }
  };

  // src/vanilla/w3-estudio/proyecto/paginador-proyecto.js
  init_notificaciones();
  init_agregarApps();
  var template83 = (
    /*html*/
    `
<x-bar-menu color="w3-black" buscar></x-bar-menu>
<x-paginador-files titulo="Proyectos" vista-previa="x-proyecto-vista-previa"></x-paginador-files>
`
  );
  var style79 = (
    /*css*/
    `
#buscar {
    transition: width 0.4s ease-in-out;
    font-size: small;
    width: 100px;    
}
#buscar:focus {
    width: 300px;
}
`
  );
  var PaginadorProyectos = class extends HTMLElement {
    constructor() {
      super();
      this.db = getDB();
      this.lista = [];
    }
    connectedCallback() {
      this.render();
      this.cargaLista();
      let splash = new SplashScreen();
      splash.titulo = "Proyecto";
      splash.open();
    }
    cargaLista() {
      this.db.list("proyectos").then((data2) => {
        this.lista = data2;
        this.paginador.setLista(data2);
      });
    }
    getTipoImagen(item) {
      if (item.configuracion.css == "w3css") {
        return "./img/icon/text-file-icon-w3css.svg";
      }
      return "./img/icon/text-file-icon-bootstrap.svg";
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
        <link rel="stylesheet" href="${config.w3css}">
        <link rel="stylesheet" href="${config.fontAwesome}">
        <style>${style79}</style>
        ${template83}
        `;
      this.paginador = shadowRoot2.querySelector("x-paginador-files");
      this.paginador.setLista(this.lista);
      this.paginador.setGetTipoImagen(this.getTipoImagen);
      this.menu = shadowRoot2.querySelector("x-bar-menu");
      this.menu.setItem({
        titulo: "Proyectos",
        icono: "css3",
        acciones: [{
          titulo: "Nuevo",
          icono: "fa-file-o"
        }]
      });
      this.addListeners();
    }
    addListeners() {
      this.paginador.addEventListener("onVistaPrevia", (e) => {
        const r = e.detail;
        r.vistaPrevia.setItem(r.item);
        r.vistaPrevia.addEventListener("actualizar", (ev) => {
          let data2 = ev.detail.item;
          this.actualizaLista(data2);
        });
      });
      this.paginador.addEventListener("onOpenItem", (e) => {
        const r = e.detail;
        let app3 = addWindowConParametros(
          "x-w3e-menu-inicio",
          r.item.nombre,
          { resize: null, maximizar: true },
          { idProyecto: r.item.id }
        );
      });
      const padre = this.parentNode;
      padre.addEventListener("nuevo", (ev) => {
        this.addItem();
      });
      this.menu.addEventListener("accion", (ev) => {
        let data2 = ev.detail;
        if (data2.accion.titulo == "Nuevo") {
          this.addItem();
        }
      });
      this.menu.addEventListener("buscar", (ev) => {
        let data2 = ev.detail;
        this.buscaElementos(data2.value);
      });
    }
    buscaElementos(nombre) {
      let buscar = [];
      nombre = nombre.trim();
      if (nombre == "") {
        this.paginador.setLista(this.lista);
        return;
      }
      nombre = nombre.toUpperCase();
      for (let item of this.lista) {
        if (item.nombre.toUpperCase().indexOf(nombre) >= 0) {
          buscar.push(item);
        }
      }
      this.paginador.setLista(buscar);
    }
    buscaIndexItem(id2) {
      return this.lista.findIndex((item) => {
        return item.id == id2;
      });
    }
    eliminaItem(id2) {
      const i = this.buscaIndexItem(id2);
      if (i < 0)
        return;
      console.log(id2);
      this.db.delete("vistas", id2).then((data2) => {
        this.lista.splice(i, 1);
        this.paginador.setLista(this.lista);
        this.resetBuscador();
      });
    }
    resetBuscador() {
      let buscar = this.shadowRoot.querySelector("#buscar");
      buscar.value = "";
    }
    actualizaLista(data2) {
      const i = this.buscaIndexItem(data2.id);
      if (i < 0)
        return;
      this.lista[i].nombre = data2.nombre;
      this.lista[i].descripcion = data2.descripcion;
      this.db.put("proyectos", this.lista[i]).then((data3) => {
        this.paginador.setLista(this.lista);
        this.resetBuscador();
      });
    }
    addItem() {
      let item = {
        nombre: "Proyecto",
        descripcion: "",
        configuracion: {
          css: "w3css"
        }
      };
      this.db.post("proyectos", item).then((data2) => {
        this.lista.push(data2);
        this.paginador.setLista(this.lista);
      });
    }
  };
  customElements.define("x-paginador-proyectos", PaginadorProyectos);

  // src/vanilla/w3-estudio/configuracion/configuracion-proyecto.js
  init_config();
  init_db();
  init_notificaciones();
  var style80 = (
    /*css*/
    `
`
  );
  var ConfiguracionProyecto = class extends HTMLElement {
    constructor() {
      super();
      this.db = getDB();
      this.lista = [];
      this.idProyecto = null;
      this.tabla = "vistas";
      this.titulo = "Vistas";
      this.color = "teal";
      this.proyecto = null;
    }
    connectedCallback() {
      this.idProyecto = parseInt(this.getAttribute("idproyecto"));
      validaProyecto(this);
      this.render();
      this.addListeners();
      this.cargarProyecto();
    }
    cargarProyecto() {
      this.db.get("proyectos", this.idProyecto).then((data2) => {
        this.proyecto = data2;
        this.loadDatosFormulario();
      });
    }
    loadDatosFormulario() {
      const configuracion2 = this.proyecto.configuracion;
      let css = configuracion2.css;
      css ? "" : css = "w3css";
      let cssInput = this.formulario.querySelector(`[value="${css}"]`);
      cssInput.checked = true;
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
        <link rel="stylesheet" href="${config.w3css}">
        <link rel="stylesheet" href="${config.fontAwesome}">
        <style>${style80}</style>
        <x-bar-menu color="w3-purple"></x-bar-menu>
        <form action="#">
            <div id="items-div" class="w3-row">
                <div input-div="" id="1601609479537" class="w3-col s12 m12 w3-padding" propiedades="">
                    <br><label propiedades="" style="font-weight: bold;"> Framework CSS</label>
                </div>
                <div input-div="" id="1601609479538" class="w3-col s4 m4 w3-padding" propiedades="">
                    <br><input class="w3-radio" propiedades="" input-formulario="" type="radio" name="css" value="w3css">
                    <label propiedades=""> W3CSS</label>
                </div>
                <div input-div="" id="1601609479539" class="w3-col s4 m4 w3-padding" propiedades="">
                    <br><input class="w3-radio" propiedades="" input-formulario="" type="radio" name="css" value="bootstrap">
                    <label propiedades=""> Boostrap</label>
                </div>
                <div input-div="" id="1601609479539" class="w3-col s4 m4 w3-padding" propiedades="">
                    <br><input class="w3-radio" propiedades="" input-formulario="" type="radio" name="css" value="sketchy">
                    <label propiedades=""> Sketchy</label>
                </div>
                <div input-div="" id="1601609479539" class="w3-col s4 m4 w3-padding" propiedades="">
                    <br><input class="w3-radio" propiedades="" input-formulario="" type="radio" name="css" value="materia">
                    <label propiedades=""> Materia</label>
                </div>
                <div input-div="" id="1601609479539" class="w3-col s4 m4 w3-padding" propiedades="">
                    <br><input class="w3-radio" propiedades="" input-formulario="" type="radio" name="css" value="literia">
                    <label propiedades=""> Literia</label>
                </div>
                <div input-div="" id="1601609479539" class="w3-col s4 m4 w3-padding" propiedades="">
                    <br><input class="w3-radio" propiedades="" input-formulario="" type="radio" name="css" value="superhero">
                    <label propiedades=""> SuperHero</label>
                </div>
                <div input-div="" id="1601609479539" class="w3-col s4 m4 w3-padding" propiedades="">
                    <br><input class="w3-radio" propiedades="" input-formulario="" type="radio" name="css" value="minty">
                    <label propiedades=""> Minty</label>
                </div>                
            </div>
        </form>
        `;
      this.formulario = shadowRoot2.querySelector("form");
      this.menu = shadowRoot2.querySelector("x-bar-menu");
      this.menu.setItem({
        titulo: "Configuraciones",
        icono: "gear",
        acciones: [{
          titulo: "Guardar",
          icono: "fa-floppy-o"
        }]
      });
    }
    addListeners() {
      this.menu.addEventListener("accion", (ev) => {
        let data2 = ev.detail;
        if (data2.accion.titulo == "Guardar") {
          this.guardaConfiguraciones();
        }
      });
    }
    guardaConfiguraciones() {
      let css = this.formulario.querySelector('[name="css"]:checked');
      this.proyecto.configuracion = {
        css: css.value
      };
      this.db.put("proyectos", this.proyecto).then((data2) => {
        loadCSSExtra(data2.configuracion.css);
        addNotificacion(
          NOTIFICACION.SUCCESS,
          '<i class="fa fa-check-square-o"></i> Actulizaci\xF3n de Proyecto',
          "Se ha actulizado correctamenta la configuraci\xF3n del proyecto"
        );
      });
    }
  };
  customElements.define("x-configuracion-proyecto", ConfiguracionProyecto);

  // src/vanilla/w3-estudio/x-ide/x-ide.js
  init_config();
  init_agregarApps();
  function template84(tipo2, css) {
    return (
      /*html*/
      `
<div class="w3-bar w3-dark-grey">
    <div class="w3-dropdown-hover w3-dark-grey">
        <button class="w3-button w3-hover-grey">Exportar</button> 
        <div class="w3-dropdown-content w3-bar-block w3-border" style="z-index: 5;">
            <a href="#" class="w3-bar-item w3-button" id="html">HTML</a> 
            <a href="#" class="w3-bar-item w3-button" id="web-componente">Web Componente</a> 
            <a href="#" class="w3-bar-item w3-button" id="vue">Vue</a>
            <a href="#" class="w3-bar-item w3-button" id="angular">Angular</a>            
            <a href="#" class="w3-bar-item w3-button" id="componente-ide">Componente ide</a>         
        </div>
    </div>
    <div class="w3-btn w3-bar-item w3-hover-grey" id="guardar" title="guardar"><i class="fa fa-floppy-o"></i></div>
    <div class="w3-btn w3-bar-item w3-hover-grey"  id="registrar" title="Registrar componente"><i class="fa fa-registered"></i></div>
    <div class="w3-btn w3-bar-item w3-hover-grey" id="componentes" title="Componentes usuario"><i class="fa fa-gear"></i></div>
    <div class="w3-bar-item w3-button w3-hover-grey w3-right" id="test"><i class="fa fa-play"></i></div>
</div>
<div id="panel" style="height: 100vh; float: left;">
    <x-panel-ide></x-panel-ide>        
</div>
<div id="resto" style="float: left; border: solid #132637 5px; overflow: none; height: 100vh; background: white;">
    <div class="no-activo" nombre="ui">
        <app-ide tipo="${tipo2}" css="${css}"></app-ide>
    </div>
    <div nombre="js" style="height: 100%;">
        <x-codigo tema="material" hint="editor-js"></x-codigo>
    </div>
    <div nombre="css" style="height: 100%;">
        <x-codigo modo="css" tema="material" hint="editor-css"></x-codigo>
    </div>
</div>
`
    );
  }
  var style81 = `
.no-activo{
    display: none;
}
`;
  var XIde = class extends HTMLElement {
    constructor() {
      super();
      this.tipo = "";
      this.css = "";
    }
    render() {
      this.tipo = this.getAttribute("tipo");
      this.css = this.getAttribute("css");
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
        <link rel="stylesheet" href="${config.w3css}">
        <link rel="stylesheet" href="${config.fontAwesome}">
        <style>${style81}</style>
        ${template84(this.tipo, this.css)}
        `;
      this.padre = this.parentNode;
      this.panel = shadowRoot2.querySelector("#panel");
      this.resto = shadowRoot2.querySelector("#resto");
      this.setSizesChangePanel(10);
      this.editorJs = this.resto.querySelector('[nombre="js"] x-codigo');
      this.editorCss = this.resto.querySelector('[nombre="css"] x-codigo');
      this.editorUi = this.resto.querySelector('[nombre="ui"] app-ide');
      this.editorUi.setEditores(this.editorJs, this.editorCss);
      let splash = new SplashScreen();
      splash.titulo = "I D E";
      splash.open();
    }
    actualizaActivo(activo) {
      for (let div3 of this.resto.children) {
        div3.classList.value = "no-activo";
      }
      let div2 = this.resto.querySelector(`[nombre="${activo}"]`);
      div2.classList.value = "";
      this.actualizaEditor(div2);
    }
    actualizaEditor(div2) {
      let editor = div2.querySelector("x-codigo");
      editor ? editor.actualiza() : "";
    }
    actualizaEditores() {
      let js = this.resto.querySelector(`[nombre="js"]`);
      let css = this.resto.querySelector(`[nombre="css"]`);
      this.actualizaEditor(css);
      this.actualizaEditor(js);
    }
    addListeners() {
      let xpanel = this.panel.querySelector("x-panel-ide");
      xpanel.addEventListener("changeSize", (ev) => {
        const re = ev.detail;
        this.setSizesChangePanel(re.ancho);
        setTimeout(() => {
          xpanel.click();
        }, 300);
      });
      xpanel.addEventListener("activo", (ev) => {
        const activo = ev.detail.activo;
        this.actualizaActivo(activo);
      });
      this.editorCss.addEventListener("changeCode", (data2) => {
        this.editorUi.setCustomStyle(data2.detail.code);
      });
      this.editorJs.addEventListener("changeCode", (data2) => {
        this.editorUi.setCustomScript(data2.detail.code);
      });
      this.actualizaEditores();
      const test2 = this.shadowRoot.querySelector("#test");
      const guardar = this.shadowRoot.querySelector("#guardar");
      const html = this.shadowRoot.querySelector("#html");
      const vue = this.shadowRoot.querySelector("#vue");
      const angular = this.shadowRoot.querySelector("#angular");
      const componenteIde = this.shadowRoot.querySelector("#componente-ide");
      const registrar = this.shadowRoot.querySelector("#registrar");
      const btncomponentes = this.shadowRoot.querySelector("#componentes");
      const webcomponete = this.shadowRoot.querySelector("#web-componente");
      test2.addEventListener("click", (e) => {
        this.editorUi.getAppVue().testWebComponente();
      });
      html.addEventListener("click", (e) => {
        this.editorUi.getAppVue().exportHtml();
      });
      vue.addEventListener("click", (e) => {
        this.editorUi.getAppVue().exportVueComponente();
      });
      angular.addEventListener("click", (e) => {
        this.editorUi.getAppVue().exportAngularComponente();
      });
      componenteIde.addEventListener("click", (e) => {
        this.editorUi.getAppVue().exportIdeComponente();
      });
      webcomponete.addEventListener("click", (e) => {
        this.editorUi.getAppVue().exportWebComponente();
      });
      guardar.addEventListener("click", (e) => {
        this.emiteGuardar();
      });
      btncomponentes.addEventListener("click", (e) => {
        this.abreAppComponentes();
      });
      registrar.addEventListener("click", (e) => {
        this.editorUi.getAppVue().registrarWebcomponente();
      });
    }
    abreAppComponentes() {
      let app3 = addWindow("x-componentes-guardados", "Componenetes de usuario", null, true);
    }
    setSizesChangePanel(anchopanel) {
      const ancho = this.padre.clientWidth;
      const alto = this.padre.clientHeight - 100;
      this.resto.style.width = ancho - anchopanel + "px";
      this.panel.style.height = alto + "px";
      this.resto.style.height = alto + "px";
    }
    setSizes() {
      const ancho = this.padre.clientWidth - 50;
      const alto = this.padre.clientHeight - 100;
      const anchopanel = this.panel.clientWidth;
      this.panel.style.height = alto + "px";
      this.resto.style.height = alto + "px";
      this.resto.style.width = ancho - anchopanel + "px";
    }
    connectedCallback() {
      this.render();
      this.addListeners();
      this.editorJs.setCodigo("");
      this.editorCss.setCodigo("");
      this.actualizaActivo("ui");
      const padre = this.parentNode;
      const config2 = { attributes: true };
      const that = this;
      var observer = new MutationObserver(function(mutations) {
        that.setSizes();
      });
      observer.observe(padre, config2);
      padre.addEventListener("guardar", (ev) => {
        this.emiteGuardar();
      });
      setTimeout(() => {
        if (this.editorCss.getCodigo() == "") {
          this.editorCss.setCodigo(dataCss);
        }
        if (this.editorJs.getCodigo() == "") {
          this.editorJs.setCodigo(dataJs);
        }
      }, 500);
      padre.addEventListener("size", (ev) => {
        if (padre.getAttribute("activo") === "1") {
          this.editorUi.recalculaSize();
        }
      });
    }
    emiteGuardar() {
      this.dispatchEvent(
        new CustomEvent("guardarVista", {
          detail: {
            item: {
              componentes: this.editorUi.getComponentes(),
              codigo: this.editorJs.getCodigo(),
              estilo: this.editorCss.getCodigo()
            }
          }
        })
      );
    }
    setVista(vista) {
      this.editorCss.setCodigo(vista.estilo);
      this.editorJs.setCodigo(vista.codigo);
      this.editorUi.setComponentes(vista.componentes);
    }
  };
  customElements.define("x-ide", XIde);

  // src/vanilla/w3-estudio/x-ide/paginador-ide.js
  init_config();
  init_db();
  init_agregarApps();
  var template85 = (
    /*html*/
    `
<div class="w3-bar w3-large w3-blue-grey">
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-bars"></i></a>
   <span class="w3-bar-item"><img class="bar-img" src="./img/icon/logo-app.png"> W3 Estudio - ide</span>  
</div>
<div style="height: 100vh; padding: 5%;">
    <div class="w3-row">
        <h4>Iniciar p\xE1gina nueva w3css</h4>
        <x-menu-windows menu-w3css></x-menu-windows>
    </div>
    <div class="w3-row">
        <h4>Iniciar p\xE1gina nueva Bootstrap</h4>
        <x-menu-windows menu-bootstrap></x-menu-windows>
    </div>
    <div>
        <h4>Componentes externos</h4>
        <x-menu-windows menu-admin></x-menu-windows>
    </div>
    <br>
</div>
`
  );
  var style82 = (
    /*css*/
    `
.bar-img{
    width: 24px;
}
`
  );
  var menuW3CSS = [
    {
      nombre: "W3css",
      css: "w3css",
      imagen: "./img/icon/logo-app.png",
      icono: "css3",
      color: "w3-blue"
    },
    {
      nombre: "Template CV",
      css: "w3css",
      imagen: "./img/ide/preview/cv-preview.png",
      icono: "file-o",
      color: "",
      componente: "x-cv"
    },
    {
      nombre: "Template Servicios",
      css: "w3css",
      imagen: "./img/ide/preview/disenio-preview.png",
      icono: "file-o",
      color: "",
      componente: "x-template-servicios"
    },
    {
      nombre: "Template Articulo",
      css: "w3css",
      imagen: "./img/ide/preview/articulo-preview.png",
      icono: "file-o",
      color: "",
      componente: "x-articulo"
    }
  ];
  var menuBootstrap = [
    {
      nombre: "Bootstrap",
      css: "bootstrap",
      icono: "bold",
      color: "w3-indigo"
    },
    {
      nombre: "Tema Sketchy",
      css: "sketchy",
      icono: "bold",
      color: "w3-teal"
    },
    {
      nombre: "Tema Materia",
      css: "materia",
      icono: "bold",
      color: "w3-green"
    },
    {
      nombre: "Tema Literia",
      css: "literia",
      icono: "bold",
      color: "w3-pink"
    },
    {
      nombre: "Tema Superhero",
      css: "superhero",
      icono: "bold",
      color: "w3-purple"
    },
    {
      nombre: "Tema Minty",
      css: "minty",
      icono: "bold",
      color: "w3-deep-orange"
    },
    {
      nombre: "Tema Lux",
      css: "lux",
      icono: "bold",
      color: "w3-black"
    },
    {
      nombre: "Tema Simplex",
      css: "simplex",
      icono: "bold",
      color: "w3-red"
    },
    {
      nombre: "Tema Spacelab",
      css: "spacelab",
      icono: "bold",
      color: "w3-blue-grey"
    },
    {
      nombre: "Tema Sandstone",
      css: "sandstone",
      icono: "bold",
      color: "w3-sand"
    }
  ];
  var menuAdmin = [
    {
      nombre: "Administrar",
      icono: "gear",
      componente: "x-admin-componentes-ide",
      maximizar: true,
      color: "w3-green"
    }
  ];
  var PaginadorIde = class extends HTMLElement {
    constructor() {
      super();
      this.render();
      this.addListeners();
      this.db = getDB();
      this.idProyecto = null;
    }
    render() {
      let shadowRoot2 = this.attachShadow({ mode: "open" });
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style82}</style>
            ${template85}
        `;
      this.menu = shadowRoot2.querySelector("[menu-w3css]");
      this.menu.setMenu(menuW3CSS);
      this.menuBootstrap = shadowRoot2.querySelector("[menu-bootstrap]");
      this.menuBootstrap.setMenu(menuBootstrap);
      this.menuAdmin = shadowRoot2.querySelector("[menu-admin]");
      this.menuAdmin.setMenu(menuAdmin);
    }
    addListeners() {
      this.menu.addEventListener("select", (ev) => {
        this.menuSeleccionado(ev.detail.menu);
      });
      this.menuBootstrap.addEventListener("select", (ev) => {
        this.menuSeleccionado(ev.detail.menu);
      });
      this.menuAdmin.addEventListener("select", (ev) => {
        this.menuAppsAdmin(ev.detail.menu);
      });
    }
    menuAppsAdmin(menu) {
      if (menu.componente) {
        let app3 = addWindowConParametros(menu.componente, "Administracion componentes");
      }
    }
    menuSeleccionado(menu) {
      if (menu.componente) {
        return this.menuTemplatesSeleccionado(menu);
      }
      let app3 = addWindowConParametros(
        "x-ide",
        `Nuevo ${menu.nombre}`,
        {
          resize: null,
          maximizar: true,
          "color-fondo": "#132637"
        },
        {
          css: menu.css
        }
      );
    }
    menuTemplatesSeleccionado(menu) {
      let componente = document.createElement(menu.componente);
      if (componente.setColor) {
        componente.setColor("blue");
      }
      let data2 = {
        id: 1,
        codigo: dataJs,
        estilo: dataCss,
        componentes: [{
          componente: componente.tagName,
          shadowRoot: componente.getShadowRoot()
        }]
      };
      let app3 = addWindowConParametros(
        "x-ide",
        `Nuevo ${menu.nombre}`,
        { resize: null, maximizar: true, "color-fondo": "#132637" },
        {
          css: menu.css,
          "color-fondo": "#132637"
        }
      );
      app3.setVista(data2);
    }
    connectedCallback() {
    }
  };
  customElements.define("x-paginador-ide", PaginadorIde);

  // src/vanilla/presentaciones/x-info-ide.js
  init_config();
  init_agregarApps();
  var style83 = (
    /*css*/
    `
* {
    background: ;
}
.espacio{
    min-height: 10px;
}
/*define los estilos del componente*/
.hola-mundo{
    color: red;
}


.cls-imagen{
    width: 100%;
    border-radius: 5px;
}

.img-grid{
    width: 100%;
    border-radius: 5px;
}
.size-icon{
    font-size:200px;
}

.img-grid{
    width: 100%;
    border-radius: 5px;
}
.size-icon{
    font-size:200px;
}

.ide-img{  
    background: url(./img/ide-bg.png) round;
    height: 20em;
    width: 80%;
    margin-left: 10%;
}

.no-visible{
	visibility: hidden;
}

`
  );
  var template86 = (
    /*html*/
    `

<x-bar-menu color="w3-black" titulo="W3Studio - ide" icono="hand-peace-o"></x-bar-menu>

<div class="w3-container w3-black w3-center titulo-jumbo w3-padding-64">
    <h2 class="w3-margin w3-xxlarge no-visible" animacion="w3-animate-top"><span style="font-weight: bold;" class="w3-xxxlarge">W3CSS estudio - ide</span></h2>
    <h2 class="w3-margin w3-xxlarge no-visible" animacion="w3-animate-left"><span style="font-weight: bold;"><span style="font-style: italic; color: rgb(33, 150, 243);">Dise\xF1a y prototipa</span> componentes web</span></h2>
    <p class="w3-xlarge no-visible" animacion="w3-animate-right">
        <span style="color: rgb(97, 97, 97);">
        <span class="w3-button w3-blue w3-round-xxlarge" id="ejecutar-ide"><i class="fa fa-play-circle"></i> Ejecutar Ide</span>
    </p>
</div>

<div class="w3-container w3-black w3-center">    
    <div class="ide-img no-visible" animacion="w3-animate-bottom"></div>
</div>

<div class="w3-row w3-margin-top no-visible" animacion="w3-animate-left">
<div class="w3-col espacio s1 m1 l1" propiedades="" espacio-componente=""></div>
<video id="video" propiedades="" src="./video/ayuda/ide/ejemplo-edicion.webm" controls="controls" class="w3-col w3-margin-bottom s10 m10 l10" contenido-componente="">        
</video> 
</div>

<div class="w3-row-padding w3-padding-64 w3-container jumbotron-titulo w3-blue-grey no-visible" animacion="w3-animate-left">

  <div class="w3-content">
    <div class="w3-col s12 m6">      
      <h2 class="w3-padding-32"  propiedades=""><div style="text-align: center;"><span style="font-weight: bold;">Desarrollador</span><span style="font-weight: bold;">&nbsp;</span></div><div style="text-align: center;"><span style="font-weight: bold;">descubre&nbsp; lo que&nbsp;</span><span style="color: black; font-weight: bold; text-decoration-line: underline; font-style: italic;">W3Studio</span><span style="color: black; font-weight: bold; font-style: italic;">&nbsp;</span><span style="font-weight: bold;">puede hacer</span><span style="font-weight: bold;">.</span></div></h2>

      <p class="w3-center"  propiedades=""><span style="color: white;">Crea una web hermosa y moderna con los componentes de w3css.</span></p>
      <div class="w3-center">
        <button class="w3-button w3-blue"  propiedades="">Ayuda</button>
        <button class="w3-button w3-black"  propiedades="" id="btn-tutoriales">Tutoriales</button>
      </div>      
    </div>

    <div class="w3-col s12 m6">
        <img style="width: 100%;" src="https://openclipart.org/download/285925/interviewpeople.svg">        
    </div>
  </div>
</div><div class="w3-row">

<div class="w3-col espacio s1 m1 l1" propiedades="" espacio-componente=""></div>
<div class="w3-col s10 m10 l10" propiedades="" contenido-componente="">  

    <div class="w3-row">
    <div class="w3-col s12">    
        <div class="w3-row-padding w3-margin-top w3-margin-botton">
            
            <div class="w3-margin-top w3-col s12 no-visible" animacion="w3-animate-top" propiedades="" clonar="">
                <div class="w3-white w3-round w3-border" propiedades="">
                    <div class="w3-container">
                        <h2 ><span style="font-weight: bold; color: rgb(33, 150, 243);" class="fa fa-hand-rock-o w3-xxxlarge">&nbsp;</span><span style="font-weight: bold;">Drag &amp; drop</span></h2>
                        <p >Arrastra los componentes que necesites para crear componentes impresionantes.</p>
                    </div>  
                </div>
            </div><div class="w3-margin-top w3-col s6 no-visible" animacion="w3-animate-left" propiedades="" clonar="">
                <div class="w3-white w3-round w3-border" propiedades="">
                    <div class="w3-container">
                        <h2 ><span style="font-weight: bold; color: rgb(33, 150, 243);" class="fa fa-code w3-xxxlarge">&nbsp;</span><span style="font-weight: bold;">Edita js</span></h2>
                        <p >Agrega propiedades, m\xE9todos variables y todo lo que necesites para el funcionamiento de tu componente.</p>
                    </div>  
                </div>
            </div><div class="w3-margin-top w3-col s6 no-visible" animacion="w3-animate-right" propiedades="" clonar="">
                <div class="w3-white w3-round w3-border" propiedades="">
                    <div class="w3-container">
                        <h2 ><span style="color: rgb(33, 150, 243); font-weight: bold;" class="fa fa-edit w3-xxxlarge" id="">&nbsp;</span><b>Edita el texto</b></h2>
                        <p >Edita como si estuvieras en un editor de texto cambiando f\xE1cilmente los propiedades y colores texto.</p>
                    </div>  
                </div>
            </div><div class="w3-margin-top w3-col s12 w3-margin-bottom no-visible" animacion="w3-animate-bottom" propiedades="" clonar="">
                <div class="w3-white w3-round w3-border" propiedades="">
                    <div class="w3-container">
                        <h2 ><span style="color: rgb(33, 150, 243);" class="fa fa-css3 w3-xxxlarge" id="">&nbsp;</span><b>Edita Css</b></h2>
                        <p >Crea estilos en tiempo real que afectan el contenido del componente web.</p>
                    </div>  
                </div>
            </div>
            
        </div>
    </div>
    </div>

</div>
</div><div class="w3-row-padding w3-padding-64 w3-container grid-descripcion w3-black">
  
    <div class="w3-col s6 no-visible" animacion="w3-animate-left" propiedades="" clonar="" style="padding-left: 10%;">
      <h4  propiedades="" class="w3-xxlarge"><div style="text-align: right;"><span style="font-weight: bold;">El poder del c\xF3digo</span></div></h4>
      <p  propiedades=""></p><div style="text-align: right;">
        Controla el c\xF3digo HTML, CSS y javascript directamente en el ide de W3Studio. 
        Edita los estilos visuales de manera sencilla y exporta el contenido a web componente.
        </div>
        <p></p>
        <div><br></div>
        <div>
            <div style="text-align: right;">
            <span class="fa fa-html5 w3-text-deep-orange w3-xxlarge" id="">&nbsp;</span>
            <span class="w3-text-yellow w3-xxlarge" id="">Js </span> 
            <span class="fa fa-css3 w3-text-blue w3-xxlarge" id="">&nbsp;</span> 
            &nbsp; 
            <img src="./img/logos/web-componente.png" style="width: 50px;">
            <img src="./img/logos/vue.png" style="width: 40px;">
            <img src="./img/logos/angular.svg" style="width: 45px;">
            &nbsp; &nbsp; &nbsp;&nbsp;</div></div><div><br></div><p></p>
      
    </div><div class="w3-col s6 no-visible" animacion="w3-animate-right" propiedades="" clonar="" style="padding-left: 5%; padding-right: 10%;">
      <h4  propiedades="" class="w3-large"><div><span style="color: rgb(233, 30, 99);"><br></span></div><div><span style="color: rgb(233, 30, 99);" class="w3-large"><b><br></b></span></div><div><span class="w3-large"><b>Construye con contenido pre-hecho</b></div></h4>
      <p  propiedades=""></p><div style="text-align: justify;">Arrastra las secciones que ocupes al lienzo de construcci\xF3n. Hay diferentes categor\xEDas de componentes como T\xEDtulos, Cards, Jumbotron Formulario, etc.</div><p></p><div><br></div><div><span class="w3-large">Define tu estilo de manera global</span></div><div><br></div><div>Decida y cambie el estilo de su plantilla con un solo clic, directamente en su navegador.&nbsp;</div><p></p>
      
    </div> 
</div>
`
  );
  var XInfoIde = class extends HTMLElement {
    constructor() {
      super();
      this.mensaje = "Hola mundo";
      this.render();
    }
    render() {
      let shadowRoot2 = this.attachShadow({
        mode: "open"
      });
      let customTemplate = this.replazaValoresMustache(template86);
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style83}</style>
            <div>${customTemplate}</div>
        `;
      this.$el = shadowRoot2.querySelector("div");
      this.addListeners();
    }
    addListeners() {
      let btn = this.shadowRoot.querySelector("#ejecutar-ide");
      btn.addEventListener("click", (ev) => {
        addWindow("x-paginador-ide", "Ide", void 0, true);
      });
      this.addAnimaciones();
      let btnTutoriales = this.shadowRoot.querySelector("#btn-tutoriales");
      btnTutoriales.addEventListener("click", (ev) => addWindow("x-tutoriales-ide", "Tutoriales", null, "true"));
    }
    addAnimaciones() {
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
      };
      let observer = new IntersectionObserver((entries, observer2) => {
        entries.forEach((entry) => {
          var txt = entry.target.id + " visibility: " + entry.isIntersecting;
          let div2 = entry.target;
          if (entry.isIntersecting) {
            div2.classList.remove("no-visible");
            div2.classList.remove(div2.getAttribute("animacion"));
            div2.classList.add(div2.getAttribute("animacion"));
          }
        });
      }, options);
      let items = this.shadowRoot.querySelectorAll("[animacion]");
      items.forEach((item) => {
        observer.observe(item);
      });
    }
    /*Cuando se monta en la pagina*/
    connectedCallback() {
    }
    /*Cuando se desmonta en la pagina, no necesariamente se destruye*/
    disconnectedCallback() {
    }
    replazaValoresMustache(template90) {
      let props = ["titulo"];
      let salida = template90 + "";
      for (let p of props) {
        const exp = new RegExp(`{{${p}}}`, "g");
        const attr = this.getAttribute(p);
        salida = salida.replace(exp, attr);
      }
      return salida;
    }
  };
  customElements.define("x-info-ide", XInfoIde);

  // src/vanilla/w3-estudio/tutoriales/ide/x-tutorial-1-agregar-evento.js
  init_config();
  var style84 = (
    /*css*/
    `
* {
    background: ;
}
.espacio{
    min-height: 10px;
}
/*define los estilos del componente*/
.hola-mundo{
    color: red;
}


.cls-imagen{
    width: 100%;
    border-radius: 5px;
}
.contenedor{
	position: relative;   	
	padding-top: 56.25%;
    width: 100%;
}

.video{
	position:  absolute;
   	top: 0;
   	left: 0;
   	width: 100%;
    height: 100%;
}

`
  );
  var template87 = (
    /*html*/
    `
<x-bar-menu color="w3-blue-grey" titulo="Tutorial 1 - agregar evento" icono="hand-peace-o"></x-bar-menu>
<div class="w3-row titulo-h1">

    <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
    <div class="w3-col s8 m8 l8" propiedades="" contenido-componente=""> 
    <h1 propiedades="" >Tutorial  1 - agregar evento</h1> 
    <div  propiedades="">En este tutorial aprenderas:</div>    
    <ol><li>Agregar items al lienso</li><li>Agregar un evento</li><li>Agregar el codigo del evento</li><li>Probar el componente</li></ol>    
</div>
</div><div class="w3-row titulo-h2">

    <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
    <div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">  
    <h2 propiedades="" >Agregar componente</h2>    
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades=""><ol><li>Vaya al panel de componentes.</li><li>Arrastre el componente Titulo Jumbo o de doble clic sobre el Titulo jumbo.</li></ol></div>
</div>
</div><div class="w3-row-padding">

	<div class="w3-col s2 espacio"></div>
    <div class="w3-col s8">
    	<div class="contenedor">
    	<iframe class="video" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" type="text/html" src="https://www.youtube.com/embed/B2y-4ZrMM2Y?hd=1" allowfullscreen=""><div><small><a href="https://youtubeembedcode.com/nl/">youtubeembedcode nl</a></small></div><div><small><a href="https://mibew.org/">afforadablle targeted web traffic</a></small></div></iframe>
    	</div>    
    </div>	
</div><div class="w3-row titulo-h2">

    <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
    <div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">  
    <h2 propiedades="" >Crear un evento</h2>    
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades=""><ol><li>Seleccionar el componente
</li><li>Ir a las propiedades de evento y dar clic en el signo <span style="color: rgb(33, 150, 243);">+</span>
</li><li>Modificar el nombre del evento(<span style="color: rgb(33, 150, 243);">propiedad</span>) y el m\xE9todo(<span style="color: rgb(33, 150, 243);">valor</span>), el evento se guardar\xE1 hasta que agregue un m\xE9todo.</li></ol></div>
</div>
</div><div class="w3-row-padding">

	<div class="w3-col s2 espacio"></div>
    <div class="w3-col s8">
    	<div class="contenedor">
    	<iframe class="video" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" type="text/html" src="https://www.youtube.com/embed/mGagY-lCP5c?hd=1" allowfullscreen=""><div><small><a href="https://youtubeembedcode.com/nl/">youtubeembedcode nl</a></small></div><div><small><a href="https://mibew.org/">afforadablle targeted web traffic</a></small></div></iframe>
    	</div>    
    </div>	
</div><div class="w3-row titulo-h2">

    <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
    <div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">  
    <h2 propiedades="" >Agregar m\xE9todo</h2>    
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades=""><ol><li>Seleccione el editor de javascript
</li><li>Vaya a la secci\xF3n de m\xE9todos y agregu\xE9 el m\xE9todo hola definido abajo.</li></ol></div>
</div>
</div><div class="w3-row codigo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
    <div class="w3-panel w3-card w3-light-grey"> 
    
    <h4 propiedades="">C\xF3digo js</h4>
    <div></div>
    <div class="w3-code jsHigh notranslate"  editor=""><span style="color:black">hola() {<br>&nbsp; &nbsp; alert(<span style="color:brown">'hola mundo'</span>);<br>}<br></span></div>
    </div>    
</div>
</div><div class="w3-row-padding">

	<div class="w3-col s2 espacio"></div>
    <div class="w3-col s8">
    	<div class="contenedor">
    	<iframe class="video" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" type="text/html" src="https://www.youtube.com/embed/Wyzd8CMBc4I?hd=1" allowfullscreen=""><div><small><a href="https://youtubeembedcode.com/nl/">youtubeembedcode nl</a></small></div><div><small><a href="https://mibew.org/">afforadablle targeted web traffic</a></small></div></iframe>
    	</div>    
    </div>	
</div><div class="w3-row titulo-h2">

    <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
    <div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">  
    <h2 propiedades="" >Probar evento</h2>    
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Para probar lo que realizamos damos en el bot\xF3n de play.</div>
</div>
</div><div class="w3-row-padding">

	<div class="w3-col s2 espacio"></div>
    <div class="w3-col s8">
    	<div class="contenedor">
    	<iframe class="video" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" type="text/html" src="https://www.youtube.com/embed/5onDsc0SW4k?hd=1" allowfullscreen=""><div><small><a href="https://youtubeembedcode.com/nl/">youtubeembedcode nl</a></small></div><div><small><a href="https://mibew.org/">afforadablle targeted web traffic</a></small></div></iframe>
    	</div>    
    </div>	
</div>
`
  );
  var XTutorial1AgregarEvento = class extends HTMLElement {
    constructor() {
      super();
      this.mensaje = "Hola mundo";
      this.render();
    }
    render() {
      let shadowRoot2 = this.attachShadow({
        mode: "open"
      });
      let customTemplate = this.replazaValoresMustache(template87);
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">            
            <style>${style84}</style>
            <div>${customTemplate}</div>
        `;
      this.$el = shadowRoot2.querySelector("div");
    }
    /*Cuando se monta en la pagina*/
    connectedCallback() {
    }
    /*Cuando se desmonta en la pagina, no necesariamente se destruye*/
    disconnectedCallback() {
    }
    replazaValoresMustache(template90) {
      let props = ["titulo"];
      let salida = template90 + "";
      for (let p of props) {
        const exp = new RegExp(`{{${p}}}`, "g");
        const attr = this.getAttribute(p);
        salida = salida.replace(exp, attr);
      }
      return salida;
    }
  };
  customElements.define("x-tutorial-1-agregar-evento", XTutorial1AgregarEvento);

  // src/vanilla/w3-estudio/tutoriales/ide/x-tutoriales-ide.js
  init_config();
  init_agregarApps();
  var style85 = (
    /*css*/
    `
* {
    background: ;
}
.espacio{
    min-height: 10px;
}
/*define los estilos del componente*/
.hola-mundo{
    color: red;
}


.img-grid{
    width: 100%;
    border-radius: 5px;
}
.size-icon{
    font-size:200px;
}

`
  );
  var template88 = (
    /*html*/
    `
<x-bar-menu color="w3-blue-grey" titulo="Tutoriales de ide" icono="hand-peace-o"></x-bar-menu>
<div class="w3-row-padding w3-padding-64 w3-container grid-descripcion w3-white">
  
    <div class="w3-col s12 w3-padding-64 w3-center" propiedades="" clonar="" >
      <h4 propiedades="" class="w3-xxlarge"><b>Tutorial 1</b></h4><div><br></div>
      <p propiedades="" class="w3-xlarge">En este tutorial aprender\xE1s a agregar elementos al lienzo del editor as\xED como a agregar&nbsp; un evento a un elemento.</p><p propiedades="" class="w3-button w3-blue w3-round-xxlarge"><span style="" class="" id="tutorial1"><span style="" class="fa fa-play" id="">&nbsp;&nbsp;</span>Ver tutorial</span></p>
      
    </div> 
</div><div class="w3-row-padding w3-padding-64 w3-container grid-descripcion w3-blue-grey">
  
    <div class="w3-col s12 w3-center w3-padding-64" propiedades="" clonar="" >
      <h4 propiedades=""><span style="font-weight: bold;" class="w3-xxlarge">Tutorial 2 - loggin</span></h4>
      <p propiedades=""><span style="" class="w3-xlarge" id="">
      El proposito es empezar a usar los componentes y tus conociminetos de css para crear un login hermoso.</span></p>
      <p propiedades=""><img = src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZZiKkCBb2DQ%2Fmaxresdefault.jpg&f=1&nofb=1" style="width: 200px;"></p><p propiedades="" class="w3-button w3-blue w3-round-xxlarge"><span style="" class="" id="tutorial-loggin"><span style="" class="fa fa-play" id="">&nbsp;&nbsp;</span>Ver tutorial</span></p>
      
    </div> 
</div>
`
  );
  var XTutorialesIde = class extends HTMLElement {
    constructor() {
      super();
      this.mensaje = "Hola mundo";
      this.render();
      this.addListeners();
    }
    addListeners() {
      let btn = this.shadowRoot.querySelector("#tutorial1");
      btn.addEventListener("click", (ev) => {
        this.abreApp("x-tutorial-1-agregar-evento", "Tutorial - agregar evento");
      });
      let btnTutoLoggin = this.shadowRoot.querySelector("#tutorial-loggin");
      btnTutoLoggin.addEventListener("click", (ev) => {
        this.abreApp("x-tutorial-loggin", "Tutorial - loggin");
      });
    }
    abreApp(componente, titulo) {
      addWindow(componente, titulo, null, "true");
    }
    render() {
      let shadowRoot2 = this.attachShadow({
        mode: "open"
      });
      let customTemplate = this.replazaValoresMustache(template88);
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">   
            <style>${style85}</style>
            <div>${customTemplate}</div>
        `;
      this.$el = shadowRoot2.querySelector("div");
    }
    /*Cuando se monta en la pagina*/
    connectedCallback() {
    }
    /*Cuando se desmonta en la pagina, no necesariamente se destruye*/
    disconnectedCallback() {
    }
    replazaValoresMustache(template90) {
      let props = ["titulo"];
      let salida = template90 + "";
      for (let p of props) {
        const exp = new RegExp(`{{${p}}}`, "g");
        const attr = this.getAttribute(p);
        salida = salida.replace(exp, attr);
      }
      return salida;
    }
  };
  customElements.define("x-tutoriales-ide", XTutorialesIde);

  // src/vanilla/w3-estudio/tutoriales/ide/x-tutorial-loggin.js
  var style86 = (
    /*css*/
    `
* {
    background: ;
}
.espacio{
    min-height: 10px;
}
/*define los estilos del componente*/
.hola-mundo{
    color: red;
}


.cls-imagen{
    width: 100%;
    border-radius: 5px;
}

.cls-imagen{
    width: 100%;
    border-radius: 5px;
}
.contenedor{
	position: relative;   	
	padding-top: 56.25%;
    width: 100%;
}

.video{
	position:  absolute;
   	top: 0;
   	left: 0;
   	width: 100%;
    height: 100%;
}

`
  );
  var template89 = (
    /*html*/
    `

<x-bar-menu color="w3-blue-grey" titulo="Tutorial - loggin" icono="hand-peace-o"></x-bar-menu>

<div class="w3-row titulo-h1">

    <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
    <div class="w3-col s8 m8 l8" propiedades="" contenido-componente=""> 
    <h1 propiedades="" >Tutorial - crear loggin</h1>    
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Aprende como crear un loggin responsivo usando W3Studio - IDE</div>
</div>
</div><div class="w3-row linea w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
    <hr class="" propiedades="">
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">El prop\xF3sito es generar el siguiente loggin.</div>
</div>
</div><div class="w3-row imagen">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
    <img src="https://i.ibb.co/DpNxD5w/loggin.png" class="cls-imagen" propiedades="">
</div>
</div><div class="w3-row titulo-h2">

    <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
    <div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">  
    <h2 propiedades="" >Agregando el div con la imagen de fondo</h2>    
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Para lograr lo anterior tenemos que arrastrar el componente Div(Dise\xF1o-&gt;Div) al lienzo.</div>
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Despu\xE9s hay que agregar la clase contenedor en el editor css:</div>
</div>
</div><div class="w3-row codigo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
    <div class="w3-panel w3-card w3-light-grey"> 
    
    <span class="w3-button w3-blue w3-right w3-ripple"  id="copiar9">copiar</span>
    <h4 propiedades="" >C\xF3digo css</h4>
    <div></div>
    <div class="w3-code cssHigh notranslate"  editor="9"><span style="color:brown">.contenedor <span style="color:black">{</span><span style="color:red"><br>background-image<span style="color:mediumblue"><span style="color:black">:</span> url(https://cdn.pixabay.com/photo/2017/08/02/14/26/winter-landscape-2571788_960_720.jpg)<span style="color:black">;</span></span><br>&nbsp; &nbsp; background-size<span style="color:mediumblue"><span style="color:black">:</span> cover<span style="color:black">;</span></span><br>&nbsp; &nbsp; height<span style="color:mediumblue"><span style="color:black">:</span> 100vh<span style="color:black">;</span></span><br></span><span style="color:black">}</span><br><br></span></div>
    <textarea style="position: absolute; top: -1000px; display:none;" id="text9"></textarea>
    </div>    
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Para finalizar seleccione el div y agregue&nbsp; la clase contenedor.</div>
</div>
</div><div class="w3-row titulo-h2">

    <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
    <div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">  
    <h2 propiedades="" >Agregar el componente de paneles.</h2>    
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Arrastre dentro del componente div el componente de PANELES COLUMNA(Dise\xF1o-&gt;paneles columna).</div>
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Cree dos paneles, esto le realizaras presionando el bot\xF3n <span style="border-radius: 5px; border: 1px solid black;" class="">+</span> .</div>
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Al primer panel agregue la siguientes clases:</div>
</div>
</div><div class="w3-row codigo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
    <div class="w3-panel w3-card w3-light-grey"> 
    
    <span class="w3-button w3-blue w3-right"  id="copiar15">copiar</span>
    <h4 propiedades="" >Clases</h4>
    <div></div>
    <div class="w3-code jsHigh notranslate"  editor="15"><span style="color:black">s1 m3 l4<br></span></div>
    <textarea style="position: absolute; top: -1000px; display:none;" id="text15"></textarea>
    </div>    
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Al segundo panel agregue las siguientes clases:</div>
</div>
</div><div class="w3-row codigo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
    <div class="w3-panel w3-card w3-light-grey"> 
    
    <span class="w3-button w3-blue w3-right"  id="copiar17">copiar</span>
    <h4 propiedades="" >Clases</h4>
    <div></div>
    <div class="w3-code jsHigh notranslate"  editor="17"><span style="color:black">s9 m6 l4<br></span></div>
    <textarea style="position: absolute; top: -1000px; display:none;" id="text17"></textarea>
    </div>    
</div>
</div><div class="w3-row titulo-h2">

    <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
    <div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">  
    <h2 propiedades="" >Agregar t\xEDtulo</h2>    
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Agregue un t\xEDtulo h2(T\xEDtulo H -&gt; T\xEDtulo H2) dentro del segundo panel.</div>
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Modifique el texto del t\xEDtulo por Sign in.</div>
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Seleccione el texto del t\xEDtulo y agregue el estilo de negritas(Panel propiedades -&gt; edici\xF3n -&gt; negrita&nbsp;<i class="fa fa-bold"></i>).</div>
</div>
</div><div class="w3-row titulo-h2">

    <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
    <div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">  
    <h2 propiedades="" >Crear el bot\xF3n de google</h2>    
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Agregue un bot\xF3n(B\xE1sicos-&gt;Bot\xF3n) dentro del segundo panel.</div>
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Seleccione el bot\xF3n y agregue las siguientes clases:</div>
</div>
</div><div class="w3-row codigo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
    <div class="w3-panel w3-card w3-light-grey"> 
    
    <span class="w3-button w3-blue w3-right"  id="copiar25">copiar</span>
    <h4 propiedades="" >Clases</h4>
    <div></div>
    <div class="w3-code jsHigh notranslate"  editor="25"><span style="color:black">w3-button w3-red w3-block w3-round-xxlarge<span style="color:red">
</span>    </span></div>
    <textarea style="position: absolute; top: -1000px; display:none;" id="text25"></textarea>
    </div>    
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Edite el texto del bot\xF3n por Google.</div>
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Teniendo seleccionado el texto de Google, agregue un icono(panel propiedades -&gt; edici\xF3n -&gt; icono&nbsp;<i class="fa fa-gear"></i>).</div>
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Seleccione el icono agregado y sustituya las clases por las siguientes:</div>
</div>
</div><div class="w3-row codigo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
    <div class="w3-panel w3-card w3-light-grey"> 
    
    <span class="w3-button w3-blue w3-right"  id="copiar29">copiar</span>
    <h4 propiedades="" >Clases</h4>
    <div></div>
    <div class="w3-code jsHigh notranslate"  editor="29"><span style="color:black">fa fa-google<br></span></div>
    <textarea style="position: absolute; top: -1000px; display:none;" id="text29"></textarea>
    </div>    
</div>
</div><div class="w3-row titulo-h2">

    <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
    <div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">  
    <h2 propiedades="" >Crear bot\xF3n de facebook</h2>    
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Son los mismos pasos que crear el bot\xF3n de google cambiando el contenido del bot\xF3n por Facebbok, las clases del bot\xF3n y del icono por las siguientes:</div>
</div>
</div><div class="w3-row codigo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
    <div class="w3-panel w3-card w3-light-grey"> 
    
    <span class="w3-button w3-blue w3-right"  id="copiar32">copiar</span>
    <h4 propiedades="" >Clases bot\xF3n</h4>
    <div></div>
    <div class="w3-code jsHigh notranslate"  editor="32"><span style="color:black">w3-button w3-indigo w3-block w3-round-xxlarge<br></span></div>
    <textarea style="position: absolute; top: -1000px; display:none;" id="text32"></textarea>
    </div>    
</div>
</div><div class="w3-row codigo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
    <div class="w3-panel w3-card w3-light-grey"> 
    
    <span class="w3-button w3-blue w3-right"  id="copiar33">copiar</span>
    <h4 propiedades="" >Clases de icono</h4>
    <div></div>
    <div class="w3-code jsHigh notranslate"  editor="33"><span style="color:black">fa fa-facebook<br></span></div>
    <textarea style="position: absolute; top: -1000px; display:none;" id="text33"></textarea>
    </div>    
</div>
</div><div class="w3-row titulo-h2">

    <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
    <div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">  
    <h2 propiedades="" >Agregue la linea con texto</h2>    
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Agregue la linea con texto(B\xE1sicos-&gt;Linea texto) en el segundo panel.</div>
</div>
</div><div class="w3-row titulo-h1">

    <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
    <div class="w3-col s8 m8 l8" propiedades="" contenido-componente=""> 
    <h1 propiedades="" >Crea formulario</h1>    
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Agregue el componente formulario(Formulario-&gt;Formulario) dentro del segundo panel.</div>
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades=""><span style="font-weight: bold;">Agrega un input text</span><div><br></div><div>Selecciona el t\xEDtulo del input y cambialo por Email.</div><div><br></div><div>Selecciona el texto de Email, centralo(Panel propiedades-&gt;Edici\xF3n-&gt;Centrar&nbsp;<i class="fa fa-align-center"></i>&nbsp;) y ponerlo en negritas (Panel propiedades-&gt;Edici\xF3n-&gt;Centrar&nbsp;<i class="fa fa-bold">&nbsp;</i>).<br></div></div>
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Seleccione el input y cambie agregue las siguientes clases:</div>
</div>
</div><div class="w3-row codigo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
    <div class="w3-panel w3-card w3-light-grey"> 
    
    <span class="w3-button w3-blue w3-right"  id="copiar40">copiar</span>
    <h4 propiedades="" >Clases</h4>
    <div></div>
    <div class="w3-code jsHigh notranslate"  editor="40"><span style="color:black">w3-center w3-round-xxlarge<br></span></div>
    <textarea style="position: absolute; top: -1000px; display:none;" id="text40"></textarea>
    </div>    
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades=""><span style="font-weight: bold;">Agrega un input password.</span><div><br></div><div>Hacer lo mismo que el campo input text, solo cambia el titulo por Password.</div></div>
</div>
</div><div class="w3-row titulo-h2">

    <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
    <div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">  
    <h2 propiedades="" >Crear bot\xF3n de Sign in</h2>    
</div>
</div><div class="w3-row parrafo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">   
    <div  propiedades="">Son los mismos pasos que crear el bot\xF3n de google cambiando el contenido del bot\xF3n por Sign in, las clases del bot\xF3n y del icono por las siguientes:</div>
</div>
</div><div class="w3-row codigo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
    <div class="w3-panel w3-card w3-light-grey"> 
    
    <span class="w3-button w3-blue w3-right"  id="copiar44">copiar</span>
    <h4 propiedades="" >Clases bot\xF3n</h4>
    <div></div>
    <div class="w3-code jsHigh notranslate"  editor="44"><span style="color:black">w3-button w3-blue w3-block w3-round-xxlarge<br></span></div>
    <textarea style="position: absolute; top: -1000px; display:none;" id="text44"></textarea>
    </div>    
</div>
</div><div class="w3-row codigo w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
    <div class="w3-panel w3-card w3-light-grey"> 
    
    <span class="w3-button w3-blue w3-right"  id="copiar45">copiar</span>
    <h4 propiedades="" >Clases icono</h4>
    <div></div>
    <div class="w3-code cssHigh notranslate"  editor="45">fa fa-sign-in<br></div>
    <textarea style="position: absolute; top: -1000px; display:none;" id="text45"></textarea>
    </div>    
</div>
</div><div class="w3-row titulo-h2">

    <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
    <div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">  
    <h2 propiedades="" >Video del tutorial</h2>    
</div>
</div><div class="w3-row-padding">

	<div class="w3-col s2 espacio"></div>
    <div class="w3-col s8">
    	<div class="contenedor">
    	<iframe class="video" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" type="text/html" src="https://www.youtube.com/embed/fzMjIbjQvfU?hd=1" allowfullscreen=""><div><small><a href="https://youtubeembedcode.com/nl/">youtubeembedcode nl</a></small></div><div><small><a href="https://mibew.org/">afforadablle targeted web traffic</a></small></div></iframe>
    	</div>    
    </div>	
</div><div class="w3-row titulo-h2">

    <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
    <div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">  
    <h2 propiedades="" >Referencias</h2>    
</div>
</div><div class="w3-row alerta w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
    <div class="w3-panel w3-green w3-border" propiedades="">
        <h3  propiedades=""><i class="fa fa-html5" propiedades=""></i>&nbsp;<a href="https://www.w3schools.com/w3css/" target="_blank">W3CSS</a></h3>
        <p  propiedades="">W3Css es un framework responsivo creado por w3schools, cuenta con excelente documentaci\xF3n y ejemplos. Consulte para saber mas sobre sus clases y forma de uso.</p>
    </div>
</div>
</div><div class="w3-row alerta w3-margin-top">

<div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
<div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
    <div class="w3-panel w3-blue w3-border" propiedades="">
        <h3  propiedades=""><i class="fa fa-font-awesome" propiedades=""></i>&nbsp;<a href="https://fontawesome.com/v4.7.0/icons/" target="_blank">Font Awesome</a></h3>
        <p  propiedades="">Una de las mejores l\xEDbrerias para agregar iconos a nuestras aplicaciones web. Consulte para ver los iconos que existen.</p>
    </div>
</div>
</div>
`
  );
  var XTutorialLoggin = class extends HTMLElement {
    constructor() {
      super();
      this.mensaje = "Hola mundo";
      this.render();
      this.initComponentes();
      this.init();
    }
    initComponentes() {
      this.addListeners9();
      this.addListeners15();
      this.addListeners17();
      this.addListeners25();
      this.addListeners29();
      this.addListeners32();
      this.addListeners33();
      this.addListeners40();
      this.addListeners44();
      this.addListeners45();
    }
    holaMundo() {
      console.log(this.mensaje);
    }
    init() {
      this.holaMundo();
    }
    render() {
      let shadowRoot2 = this.attachShadow({
        mode: "open"
      });
      let customTemplate = this.replazaValoresMustache(template89);
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="http://localhost/saul/lib/w3css/w3.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <style>${style86}</style>
            <div>${customTemplate}</div>
        `;
      this.$el = shadowRoot2.querySelector("div");
    }
    /*Cuando se monta en la pagina*/
    connectedCallback() {
    }
    /*Cuando se desmonta en la pagina, no necesariamente se destruye*/
    disconnectedCallback() {
    }
    replazaValoresMustache(template90) {
      let props = ["titulo"];
      let salida = template90 + "";
      for (let p of props) {
        const exp = new RegExp(`{{${p}}}`, "g");
        const attr = this.getAttribute(p);
        salida = salida.replace(exp, attr);
      }
      return salida;
    }
    fixCopia(texto) {
      let reg = new RegExp(String.fromCharCode(160), "g");
      return texto.replace(reg, " ");
    }
    copiaTexto9() {
      let editor = this.shadowRoot.querySelector('[editor="9"]');
      let texto = editor.innerText;
      let textarea = this.shadowRoot.querySelector("#text9");
      textarea.style.display = "";
      textarea.value = this.fixCopia(texto);
      setTimeout((e) => {
        textarea.select();
        document.execCommand("Copy");
        textarea.style.display = "none";
      }, 1);
    }
    addListeners9() {
      let copiar = this.shadowRoot.querySelector("#copiar9");
      copiar.addEventListener("click", (ev) => {
        this.copiaTexto9();
      });
    }
    copiaTexto15() {
      let editor = this.shadowRoot.querySelector('[editor="15"]');
      let texto = editor.innerText;
      let textarea = this.shadowRoot.querySelector("#text15");
      textarea.style.display = "";
      textarea.value = this.fixCopia(texto);
      setTimeout((e) => {
        textarea.select();
        document.execCommand("Copy");
        textarea.style.display = "none";
      }, 1);
    }
    addListeners15() {
      let copiar = this.shadowRoot.querySelector("#copiar15");
      copiar.addEventListener("click", (ev) => {
        this.copiaTexto15();
      });
    }
    copiaTexto17() {
      let editor = this.shadowRoot.querySelector('[editor="17"]');
      let texto = editor.innerText;
      let textarea = this.shadowRoot.querySelector("#text17");
      textarea.style.display = "";
      textarea.value = this.fixCopia(texto);
      setTimeout((e) => {
        textarea.select();
        document.execCommand("Copy");
        textarea.style.display = "none";
      }, 1);
    }
    addListeners17() {
      let copiar = this.shadowRoot.querySelector("#copiar17");
      copiar.addEventListener("click", (ev) => {
        this.copiaTexto17();
      });
    }
    copiaTexto25() {
      let editor = this.shadowRoot.querySelector('[editor="25"]');
      let texto = editor.innerText;
      let textarea = this.shadowRoot.querySelector("#text25");
      textarea.style.display = "";
      textarea.value = this.fixCopia(texto);
      setTimeout((e) => {
        textarea.select();
        document.execCommand("Copy");
        textarea.style.display = "none";
      }, 1);
    }
    addListeners25() {
      let copiar = this.shadowRoot.querySelector("#copiar25");
      copiar.addEventListener("click", (ev) => {
        this.copiaTexto25();
      });
    }
    copiaTexto29() {
      let editor = this.shadowRoot.querySelector('[editor="29"]');
      let texto = editor.innerText;
      let textarea = this.shadowRoot.querySelector("#text29");
      textarea.style.display = "";
      textarea.value = this.fixCopia(texto);
      setTimeout((e) => {
        textarea.select();
        document.execCommand("Copy");
        textarea.style.display = "none";
      }, 1);
    }
    addListeners29() {
      let copiar = this.shadowRoot.querySelector("#copiar29");
      copiar.addEventListener("click", (ev) => {
        this.copiaTexto29();
      });
    }
    copiaTexto32() {
      let editor = this.shadowRoot.querySelector('[editor="32"]');
      let texto = editor.innerText;
      let textarea = this.shadowRoot.querySelector("#text32");
      textarea.style.display = "";
      textarea.value = this.fixCopia(texto);
      setTimeout((e) => {
        textarea.select();
        document.execCommand("Copy");
        textarea.style.display = "none";
      }, 1);
    }
    addListeners32() {
      let copiar = this.shadowRoot.querySelector("#copiar32");
      copiar.addEventListener("click", (ev) => {
        this.copiaTexto32();
      });
    }
    copiaTexto33() {
      let editor = this.shadowRoot.querySelector('[editor="33"]');
      let texto = editor.innerText;
      let textarea = this.shadowRoot.querySelector("#text33");
      textarea.style.display = "";
      textarea.value = this.fixCopia(texto);
      setTimeout((e) => {
        textarea.select();
        document.execCommand("Copy");
        textarea.style.display = "none";
      }, 1);
    }
    addListeners33() {
      let copiar = this.shadowRoot.querySelector("#copiar33");
      copiar.addEventListener("click", (ev) => {
        this.copiaTexto33();
      });
    }
    copiaTexto40() {
      let editor = this.shadowRoot.querySelector('[editor="40"]');
      let texto = editor.innerText;
      let textarea = this.shadowRoot.querySelector("#text40");
      textarea.style.display = "";
      textarea.value = this.fixCopia(texto);
      setTimeout((e) => {
        textarea.select();
        document.execCommand("Copy");
        textarea.style.display = "none";
      }, 1);
    }
    addListeners40() {
      let copiar = this.shadowRoot.querySelector("#copiar40");
      copiar.addEventListener("click", (ev) => {
        this.copiaTexto40();
      });
    }
    copiaTexto44() {
      let editor = this.shadowRoot.querySelector('[editor="44"]');
      let texto = editor.innerText;
      let textarea = this.shadowRoot.querySelector("#text44");
      textarea.style.display = "";
      textarea.value = this.fixCopia(texto);
      setTimeout((e) => {
        textarea.select();
        document.execCommand("Copy");
        textarea.style.display = "none";
      }, 1);
    }
    addListeners44() {
      let copiar = this.shadowRoot.querySelector("#copiar44");
      copiar.addEventListener("click", (ev) => {
        this.copiaTexto44();
      });
    }
    copiaTexto45() {
      let editor = this.shadowRoot.querySelector('[editor="45"]');
      let texto = editor.innerText;
      let textarea = this.shadowRoot.querySelector("#text45");
      textarea.style.display = "";
      textarea.value = this.fixCopia(texto);
      setTimeout((e) => {
        textarea.select();
        document.execCommand("Copy");
        textarea.style.display = "none";
      }, 1);
    }
    addListeners45() {
      let copiar = this.shadowRoot.querySelector("#copiar45");
      copiar.addEventListener("click", (ev) => {
        this.copiaTexto45();
      });
    }
  };
  customElements.define("x-tutorial-loggin", XTutorialLoggin);

  // src/init.js
  init_config();
  init_db();
  init_modal();

  // src/vanilla/utils/apps/init-componentes.js
  init_db();
  function espera() {
    return new Promise((resolve2, reject2) => {
      setTimeout(() => {
        resolve2(true);
      }, 1e3);
    });
  }
  async function inicializaComponentesIde() {
    let db5 = getDB();
    if (!db5.isStart) {
      await espera();
    }
    let lista4 = await db5.list("componentesIde");
    lista4.forEach((element) => {
      registraComponente(element);
    });
  }

  // src/init.js
  init_agregarApps();
  var desk2 = document.querySelector(".escritorio");
  desk2.addEventListener("drop", (e) => {
    drop(e);
  });
  desk2.addEventListener("dragover", (e) => {
    allowDrop(e);
  });
  function alerta(texto) {
    let dlg2 = new Modal();
    dlg2.titulo = "Alerta";
    dlg2.innerHtml = `
    <h2>Mensaje</h2>
    ${texto}
    `;
    dlg2.open();
  }
  window._alert = window.alert;
  window.alert = alerta;
  inicializaComponentesIde();
  addWindowConParametros("x-info-ide", "W3Studio - ide", { maximizar: "true" });
})();
