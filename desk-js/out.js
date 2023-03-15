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

  // src/js/utils/bootswatch/bootswatch-libs.js
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
  var init_bootswatch_libs = __esm({
    "src/js/utils/bootswatch/bootswatch-libs.js"() {
    }
  });

  // src/js/config.js
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
    "src/js/config.js"() {
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
          bootstrap: getBootswatchProduccion()
        };
      }
      config = configuracion;
      configDesk = loadConfigDesk();
    }
  });

  // src/js/utils/ventana/agregarApps.js
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
    "src/js/utils/ventana/agregarApps.js"() {
      init_config();
    }
  });

  // src/js/utils/db/index-db-REST.js
  var IndexedDBREST;
  var init_index_db_REST = __esm({
    "src/js/utils/db/index-db-REST.js"() {
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
          let open = indexedDB.open(nameDB, versionDB);
          this.tablas = tablas2;
          this.folio = Date.now();
          open.onupgradeneeded = () => {
            let db2 = open.result;
            if (tablas2) {
              for (const tabla in tablas2) {
                try {
                  db2.createObjectStore(tabla, { keyPath: tablas2[tabla].id });
                } catch (e) {
                  console.log(`%cYa existe ${tabla}`, "color: red");
                }
              }
            }
            obj.db = open.result;
          };
          open.onsuccess = function() {
            obj.db = open.result;
            obj.isStart = true;
          };
          open.onerror = (e) => {
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
            (resolve, reject) => {
              if (!obj.db) {
                reject("Error: no init indexedDB");
              } else {
                try {
                  let db2 = obj.db;
                  let tx = db2.transaction(_table, "readwrite");
                  let store = tx.objectStore(_table);
                  let json = _data;
                  if (_auto_id) {
                    json[this.tablas[_table].id] = obj.getFolio();
                  }
                  let request = store.put(json);
                  request.onsuccess = function() {
                    let out = _data;
                    resolve(obj.copy(out));
                  };
                  request.onerror = function(e) {
                    this.onError({ type: "POST", error: e });
                    reject("Ocurrio un error");
                  };
                  tx.oncomplete = function() {
                  };
                } catch (error) {
                  setTimeout(() => {
                    obj.post(_table, _data).then((res) => {
                      resolve(res);
                    }).catch((err) => {
                      reject(err);
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
          return new Promise((resolve, reject) => {
            if (!obj.db) {
              reject("Error: no init indexedDB");
            } else {
              try {
                let db2 = obj.db;
                let tx = db2.transaction(_table, "readonly");
                let store = tx.objectStore(_table);
                let request = store.get(_key);
                request.onsuccess = function() {
                  let out = request.result;
                  resolve(obj.copy(out));
                };
                request.onerror = function(e) {
                  this.onError({ type: "GET", error: e });
                  resolve(null);
                };
                tx.oncomplete = function() {
                };
              } catch (error) {
                setTimeout(() => {
                  obj.get(_table, _key).then((res) => {
                    resolve(res);
                  }).catch((err) => {
                    reject(err);
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
          return new Promise((resolve, reject) => {
            if (!obj.db) {
              reject("Error: no init indexedDB");
            } else {
              try {
                let db2 = obj.db;
                let tx = db2.transaction(_table, "readwrite");
                let store = tx.objectStore(_table);
                const _id = this.tablas[_table].id;
                if (!_data.hasOwnProperty(_id)) {
                  _data[_id] = obj.getFolio();
                }
                let request = store.put(_data);
                request.onsuccess = function() {
                  let out = _data;
                  resolve(obj.copy(out));
                };
                request.onerror = function(e) {
                  this.onError({ type: "PUT", error: e });
                  reject("Ocurrio un error");
                };
                tx.oncomplete = function() {
                };
              } catch (error) {
                setTimeout(() => {
                  obj.put(_table, _data).then((res) => {
                    resolve(res);
                  }).catch((err) => {
                    reject(err);
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
          return new Promise((resolve, reject) => {
            try {
              let db2 = obj.db;
              let tx = db2.transaction(_table, "readwrite");
              let store = tx.objectStore(_table);
              let requets = store.delete(_key);
              requets.onsuccess = function(e) {
                let out = true;
                resolve(out);
              };
              requets.onerror = function(e) {
                let out = false;
                this.onError({ type: "DELETE", error: e });
                resolve(out);
              };
              tx.oncomplete = function() {
              };
            } catch (error) {
              setTimeout(() => {
                obj.delete(_table, _key).then((res) => {
                  resolve(res);
                }).catch((err) => {
                  reject(err);
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
            (resolve, reject) => {
              try {
                let db2 = obj.db;
                let tx = db2.transaction(_table, "readonly");
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
                  reject(e);
                };
                tx.oncomplete = function() {
                  resolve(obj.copy(items));
                };
              } catch (error) {
                setTimeout(() => {
                  obj.list(_table).then((res) => {
                    resolve(res);
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
            (resolve, reject) => {
              if (!obj.db) {
                reject("Error: no init indexedDB");
              } else {
                let db2 = obj.db;
                let tx = db2.transaction(_table, "readwrite");
                let store = tx.objectStore(_table);
                let req = store.clear();
                req.onsuccess = function(evt) {
                  let out = true;
                  resolve(out);
                };
                req.onerror = function(e) {
                  this.onError({ type: "CLEAR", error: e });
                  reject(e);
                };
              }
            }
          );
        }
      };
    }
  });

  // src/js/utils/db/db.js
  var tablas, version, db, eventoBaseDatos;
  var init_db = __esm({
    "src/js/utils/db/db.js"() {
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
      db = new IndexedDBREST("w3-studio", version, tablas);
      eventoBaseDatos = new CustomEvent("readyDB", {
        detail: {
          info: "Base de datos lista"
        }
      });
      document.dispatchEvent(eventoBaseDatos);
    }
  });

  // src/js/utils/memes/nyancat.js
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
    "src/js/utils/memes/nyancat.js"() {
    }
  });

  // src/js/utils/html/music-playe.js
  function getMusicPlayer() {
    return player;
  }
  var MusicPlayer, player;
  var init_music_playe = __esm({
    "src/js/utils/html/music-playe.js"() {
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
          let lista = localStorage.getItem("lista_player");
          if (lista) {
            this.lista = JSON.parse(lista);
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

  // src/js/ui/consola-js/consola-js.js
  var require_consola_js = __commonJS({
    "src/js/ui/consola-js/consola-js.js"(exports, module) {
      init_db();
      init_nyancat();
      init_config();
      init_agregarApps();
      init_music_playe();
      var template18 = (
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
            ${template18}
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

  // src/js/apps/calculadora/calculadora.js
  var require_calculadora = __commonJS({
    "src/js/apps/calculadora/calculadora.js"(exports, module) {
      init_config();
      var idcalculadora = 0;
      var template18 = (
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
      var style17 = (
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
            <style>${style17}</style>            
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
            template: template18,
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

  // src/js/bandeja/bandeja.js
  init_config();
  var style = (
    /*css*/
    `

`
  );
  var template = (
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
            <style>${style}</style>
            ${template}
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

  // src/js/utils/fecha/Fecha.js
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

  // src/js/bandeja/reloj.js
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

  // src/js/utils/procesa-drop-archivo/procesa-archivo.js
  init_agregarApps();

  // src/js/utils/procesa-drop-archivo/archivo-text.js
  function showTexto(div2, file) {
    let fr = new FileReader();
    fr.onload = function() {
      div2.innerHTML = `<pre>${fr.result}</pre>`;
    };
    fr.readAsText(file);
  }

  // src/js/utils/procesa-drop-archivo/archivo-multimedia.js
  function showAudio(div2, file) {
    let blobURL = window.URL.createObjectURL(file);
    div2.innerHTML = `
    <audio controls>        
        <source src="${blobURL}" type="audio/mpeg">
        Your browser does not support the audio element.
        </audio>
    `;
  }
  function showVideo(div2, file) {
    let blobURL = window.URL.createObjectURL(file);
    div2.innerHTML = `
    <video controls>
    <source src="${blobURL}" type="video/mp4">  
    Your browser does not support the video tag.
    </video>
    `;
  }

  // src/js/utils/procesa-drop-archivo/procesa-archivo.js
  function procesaArchivo(file) {
    let div2 = addWindowConParametros("div", file.name);
    if (file.type == "text/plain") {
      showTexto(div2, file);
    }
    if (file.type == "audio/mpeg") {
      showAudio(div2, file);
    }
    if (file.type == "video/mp4") {
      showVideo(div2, file);
    }
  }

  // src/js/ventanas/dragdrop.js
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
    const data = ev.dataTransfer.getData("tipo");
    if (data == "size") {
      dropSize(ev);
    } else if (data == "mover") {
      dropMover(ev);
    }
    if (ev.dataTransfer.items && ev.dataTransfer.items[0].kind === "file") {
      ev.preventDefault();
      var file = ev.dataTransfer.items[0].getAsFile();
      procesaArchivo(file);
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

  // src/js/ventanas/ventana.js
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
  var template2 = (
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
            ${template2}            
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
      let lista = document.querySelectorAll("x-window, x-window-98, x-window-xp, x-window-mac");
      for (let win of lista) {
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

  // src/js/ventanas/ventana-98.js
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
  var template3 = (
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
            ${template3}            
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

  // src/js/ventanas/ventana-xp.js
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
  var template4 = (
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
            ${template4}            
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

  // src/js/ventanas/ventana-mac.js
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
  var template5 = (
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
            ${template5}            
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

  // src/js/ui/ui.js
  var import_consola_js = __toESM(require_consola_js());

  // src/js/ui/menu-aero/menu-aero.js
  init_config();
  var style6 = (
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
            <style>${style6}</style>
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

  // src/js/ui/menu-android/menu-android.js
  init_config();
  var style7 = (
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
            <style>${style7}</style>
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

  // src/js/ui/menu-iphone/menu-iphone.js
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
      console.log(style8);
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

  // src/js/ui/menu-windows/menu-windows.js
  init_config();
  var style9 = (
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
            <style>${style9}</style>
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

  // src/js/ui/x-iframe/x-iframe.js
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

  // src/js/ui/paginador/Paginador-files.js
  init_config();
  var template6 = (
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
  var style10 = (
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
        <style>${style10}</style>
        ${template6}
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
    setLista(lista) {
      this.fileContainer.innerHTML = "";
      this.lista = lista;
      for (let item of lista) {
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

  // src/js/ui/x-codigo/x-codigo.js
  init_config();

  // src/js/ui/x-codigo/listas-hints/lista-editor-css.js
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

  // src/js/ui/x-codigo/listas-hints/lista-editor-js.js
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

  // src/js/ui/x-codigo/x-codigo.js
  var style11 = (
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
            <style>${style11}</style>
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
      const codigo = this.getAttribute("codigo");
      if (codigo != null) {
        this.setCodigo(codigo);
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
      fetch("https://ternjs.net/node_modules/tern/defs/ecmascript.json").then((data) => data.text()).then((text) => {
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
      select.addEventListener("change", (data) => {
        this.editor.setOption("theme", select.value);
      });
      this.editor.on("change", (data) => {
        this.emiteChange(data.getValue());
      });
      let input = this.shadowRoot.querySelector("input");
      input.addEventListener("change", (data) => {
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
      let codigo = this.getCodigo();
      let indice = codigo.indexOf("metodos:");
      let pegarEn = -1;
      for (let i = indice; i < codigo.length; i++) {
        if (codigo[i] == "{") {
          pegarEn = i + 1;
          break;
        }
      }
      codigo = codigo.substring(0, pegarEn) + metodo + codigo.substring(pegarEn, codigo.length);
      this.setCodigo(codigo);
    }
  };
  customElements.define("x-codigo", xCodigo);

  // src/js/ui/bar/bar-menu.js
  init_config();
  var template7 = (
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
  var style12 = (
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
      const icono = this.getAttribute("icono");
      if (titulo) {
        let barTitulo = this.shadowRoot.querySelector("#titulo");
        barTitulo.innerHTML = `<i class="fa fa-${icono}"></i> ${titulo}`;
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
            <style>${style12}</style>
            ${template7}
        `;
      this.addListeners();
    }
  };
  customElements.define("x-bar-menu", BarUI);

  // src/js/ui/tooltip/tooltip.js
  init_config();
  var style13 = (
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
  var template8 = (
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
            <style>${style13}</style>
            ${template8}
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

  // src/js/apps/info/win.info.js
  var template9 = (
    /*html*/
    `
<div>
    <x-bar-menu color="w3-blue-grey" 
        titulo="Sobre.." icono="info-circle"></x-bar-menu>
    <h3>Desk interface</h3>    
    <strong>Version</strong>: 1<br>
    <strong>Librerias</strong>: 
        <a href="https://www.w3schools.com/w3css/" target="_blank">W3.css</a> 
        <a href="https://animate.style/" target="_blank">Animate css</a>
        <a href="https://vuejs.org/" target="_blank">Vue</a><br>    
    <strong>Autor</strong>: <a href="https://saulsalazarmendez.github.io/cv/#/" target="_blank">Sa\xFAl Salazar M\xE9ndez</a><br>
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
        template: template9
      });
    }
  };
  customElements.define("win-info", WinInfo);

  // src/js/utils/modal/zindexModal.js
  var zindex = 1e5;
  function getZindez() {
    return zindex++;
  }

  // src/js/utils/modal/modal.js
  var Modal = class {
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
      return new Promise((resolve, reject) => {
        if (cerrar) {
          cerrar.addEventListener("click", (e) => {
            this._el.remove();
            reject({ val: false, op: "cerrar" });
          });
        }
        if (cancelar) {
          cancelar.addEventListener("click", (e) => {
            this._el.remove();
            reject({ val: false, op: "cancelar" });
          });
        }
        if (aceptar) {
          aceptar.addEventListener("click", (e) => {
            const data = this.dataAceptar();
            this._el.remove();
            resolve({ val: true, op: "aceptar", data });
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

  // src/js/utils/modal/bloquear.js
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
      return new Promise((resolve, reject) => {
        if (aceptar) {
          aceptar.addEventListener("click", (e) => {
            const data = this.dataAceptar();
            let ventana = this._el.querySelector("#ventana");
            ventana.classList.value = "w3-card-4 w3-white animate__animated animate__flipOutY";
            setTimeout(() => {
              this._el.remove();
              resolve({ val: true, op: "aceptar", data });
            }, 1e3);
          });
        }
      });
    }
    dataAceptar() {
      let input = this._el.querySelector("input");
      let data = {
        password: input.value
      };
      return data;
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

  // src/js/apps/menu-escritorio/menu-escritorio.js
  init_agregarApps();

  // src/js/apps/menu-escritorio/menu-compacto.js
  var template10 = (
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
    template: template10,
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

  // src/js/apps/menu-escritorio/menu-expandido.js
  var template11 = (
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
    template: template11,
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

  // src/js/apps/menu-escritorio/menu-escritorio.js
  var template12 = (
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
      icono: "https://openclipart.org/download/67/Andy-Tools-Hammer-Spanner.svg",
      nombre: "Desarrollo",
      apps: [{
        componente: "x-iframe",
        nombre: "try-coding",
        maximizar: true,
        icono: "html5",
        appParametros: {
          src: "https://saulsalazarmendez.github.io/ejemplos/try-coding/"
        }
      }]
    }
  ];
  var desk = document.querySelector(".escritorio");
  var app2 = new Vue({
    el: "#menu-inicio",
    template: template12,
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
        let parametros = {};
        if (item.appParametros)
          parametros = item.appParametros;
        addWindowConParametros(item.componente, item.nombre, { resize: item.resize, maximizar: item.maximizar }, parametros);
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

  // src/js/apps/apps.js
  var import_calculadora = __toESM(require_calculadora());

  // src/js/apps/config-desk/config-desk.js
  init_config();
  var template13 = (
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
        template: template13,
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

  // src/js/apps/consola/app-consola-js.js
  init_agregarApps();
  var template14 = `
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
            ${template14}
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
        let data = ev.detail;
        if (data.accion.titulo == "Ayuda") {
          addWindow("x-ayuda-consola", "Ayuda consola", null, "true");
        }
      });
    }
  };
  customElements.define("x-consola-javascript", ConsolaJavaScript);

  // src/js/apps/ayuda/escritorio/x-ayuda-escritorio.js
  init_config();
  var style14 = (
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
  var template15 = (
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
      let customTemplate = this.replazaValoresMustache(template15);
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            <link rel="stylesheet" href="${config.animate}">
            <style>${style14}</style>
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
    replazaValoresMustache(template18) {
      let props = ["titulo"];
      let salida = template18 + "";
      for (let p of props) {
        const exp = new RegExp(`{{${p}}}`, "g");
        const attr = this.getAttribute(p);
        salida = salida.replace(exp, attr);
      }
      return salida;
    }
  };
  customElements.define("x-ayuda-escritorio", XAyudaEscritorio);

  // src/js/apps/ayuda/propiedades/x-ayuda-propiedades-clases.js
  var style15 = (
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
  var template16 = (
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
      let customTemplate = this.replazaValoresMustache(template16);
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <style>${style15}</style>
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
    replazaValoresMustache(template18) {
      let props = [];
      let salida = template18 + "";
      for (let p of props) {
        const exp = new RegExp(`{{${p}}}`, "g");
        const attr = this.getAttribute(p);
        salida = salida.replace(exp, attr);
      }
      return salida;
    }
  };
  customElements.define("x-ayuda-propiedades-clases", XAyudaPropiedadesClases);

  // src/js/apps/ayuda/utilidades/ayuda-consola.js
  init_config();
  var template17 = `
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
  var style16 = (
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
      let customTemplate = this.replazaValoresMustache(template17);
      shadowRoot2.innerHTML = `
            <link rel="stylesheet" href="${config.w3css}">
            <link rel="stylesheet" href="${config.fontAwesome}">
            <style>${style16}</style>
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
    replazaValoresMustache(template18) {
      let props = ["titulo"];
      let salida = template18 + "";
      for (let p of props) {
        const exp = new RegExp(`{{${p}}}`, "g");
        const attr = this.getAttribute(p);
        salida = salida.replace(exp, attr);
      }
      return salida;
    }
  };
  customElements.define("x-ayuda-consola", XAyudaConsola);

  // src/init.js
  init_config();
  init_db();
  init_agregarApps();

  // src/js/utils/modal/splash-screen.js
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
      return new Promise((resolve, reject) => {
        if (div2) {
          div2.addEventListener("click", (e) => {
            this._el.remove();
            resolve({ val: true, op: "aceptar" });
          });
          setTimeout((tik) => {
            this._el.remove();
            resolve({ val: true, op: "aceptar" });
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
                    <div class="w3-margin-left w3-large w3-left">desk js</div>
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

  // src/init.js
  var desk2 = document.querySelector(".escritorio");
  desk2.addEventListener("drop", (e) => {
    drop(e);
  });
  desk2.addEventListener("dragover", (e) => {
    allowDrop(e);
  });
  function alerta(texto) {
    let dlg = new Modal();
    dlg.titulo = "Alerta";
    dlg.innerHtml = `
    <h2>Mensaje</h2>
    ${texto}
    `;
    dlg.open();
  }
  window._alert = window.alert;
  window.alert = alerta;
  var splas = new SplashScreen();
  splas.titulo = "DESK JS";
  splas.open();
})();
