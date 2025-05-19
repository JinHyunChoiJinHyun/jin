// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"98Pml":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "419c4430349046b4";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"aIaTB":[function(require,module,exports,__globalThis) {
var _routerJs = require("./router.js");
var _storeJs = require("../components/store.js");
// DOM 로드 후 초기화
document.addEventListener("DOMContentLoaded", ()=>{
    (0, _storeJs.setupNavbar)();
    (0, _routerJs.initRouter)();
});

},{"./router.js":"1Ca3u","../components/store.js":"1Wwf4"}],"1Ca3u":[function(require,module,exports,__globalThis) {
// app/router.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
parcelHelpers.export(exports, "updateRoute", ()=>updateRoute);
var _storeJs = require("../components/store.js");
var _mainPageJs = require("../pages/MainPage.js");
var _coinDetailJs = require("../pages/CoinDetail.js");
var _investmentSimulationJs = require("../pages/InvestmentSimulation.js"); // InvestmentSimulation.js 임포트 추가 (실제 export 방식에 따라 수정 필요)
var _discussionJs = require("../pages/Discussion.js");
var _postDetailJs = require("../pages/PostDetail.js");
var _loginJs = require("../pages/Login.js");
function initRouter() {
    updateRoute();
    window.addEventListener("hashchange", updateRoute);
}
function updateRoute() {
    const container = document.getElementById("app");
    let hash = window.location.hash.substring(1) || "";
    if (hash.startsWith("/")) hash = hash.substring(1);
    const [path, param] = hash.split("/");
    console.log("\uD604\uC7AC \uACBD\uB85C:", path, "\uD30C\uB77C\uBBF8\uD130:", param);
    // applyTheme(); // 페이지 변경 시 테마 적용 (필요시 주석 해제)
    switch(path){
        case "":
        case "main":
            (0, _mainPageJs.renderMainPage)(container);
            break;
        case "prediction":
            (0, _investmentSimulationJs.renderInvestmentSimulationPage)(container, param); // 이렇게 변경
            break;
        case "discussion":
            (0, _discussionJs.renderDiscussionPage)(container, param);
            break;
        case "coin":
            (0, _coinDetailJs.renderCoinDetailPage)(container, param);
            break;
        case "post":
            (0, _postDetailJs.renderPostDetailPage)(container, param);
            break;
        case "login":
            (0, _loginJs.renderLoginPage)(container);
            break;
        default:
            console.warn(`\u{C54C} \u{C218} \u{C5C6}\u{B294} \u{ACBD}\u{B85C}: ${path}`);
            (0, _mainPageJs.renderMainPage)(container);
    }
}

},{"../components/store.js":"1Wwf4","../pages/MainPage.js":"g0lzD","../pages/CoinDetail.js":"8NecS","../pages/InvestmentSimulation.js":"4AW9f","../pages/Discussion.js":"5u1UV","../pages/PostDetail.js":"bojc3","../pages/Login.js":"6O7Ur","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1Wwf4":[function(require,module,exports,__globalThis) {
// components/store.js
// 테마 설정을 가져오는 헬퍼 함수
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// 테마를 토글하는 함수 (수정됨)
parcelHelpers.export(exports, "toggleTheme", ()=>toggleTheme);
// 페이지 로드 또는 변경 시 테마를 적용하는 함수
parcelHelpers.export(exports, "applyTheme", ()=>applyTheme);
// 네비게이션 바 설정 함수
parcelHelpers.export(exports, "setupNavbar", ()=>setupNavbar);
const getThemePreference = ()=>localStorage.getItem("theme") === "dark";
// 테마 아이콘을 업데이트하는 함수 (수정됨: localStorage에서 직접 테마 상태 확인)
function updateThemeIcon() {
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        const isDark = getThemePreference(); // 현재 테마 설정을 가져옴
        themeToggle.textContent = isDark ? "\u2600\uFE0F" : "\uD83C\uDF19"; // 아이콘 설정
    }
}
function toggleTheme() {
    const body = document.body;
    // 현재 상태를 기준으로 다음 상태 결정
    const newIsDark = !body.classList.contains("dark-mode");
    body.classList.toggle("dark-mode", newIsDark); // body 클래스 명시적으로 설정
    localStorage.setItem("theme", newIsDark ? "dark" : "light"); // localStorage 업데이트
    // 다른 컴포넌트 알림용 커스텀 이벤트 (필요한 경우 detail에 상태 전달)
    const themeChangeEvent = new CustomEvent("themeUpdate", {
        bubbles: true,
        composed: true,
        detail: {
            isDark: newIsDark
        }
    });
    document.dispatchEvent(themeChangeEvent);
    updateThemeIcon(); // 아이콘 즉시 업데이트
}
function applyTheme() {
    const isDarkMode = getThemePreference();
    document.body.classList.toggle("dark-mode", isDarkMode);
    updateThemeIcon(); // 테마 적용 시 아이콘도 업데이트
}
function setupNavbar() {
    const navbar = document.createElement("nav");
    navbar.className = "navbar";
    const container = document.createElement("div");
    container.className = "container";
    // 로고
    const logo = document.createElement("div");
    logo.className = "logo";
    logo.textContent = "\uB9E4\uC218\uD558\uAE30 \uB531 \uC88B\uC740 \uB0A0\uC528\uB124!?";
    logo.addEventListener("click", ()=>window.location.hash = "");
    // 네비게이션 링크
    const navLinks = document.createElement("div");
    navLinks.className = "nav-links";
    [
        "\uBA54\uC778",
        "\uC218\uC775\uB960 \uC608\uCE21",
        "\uC885\uBAA9\uD1A0\uB860"
    ].forEach((text, index)=>{
        const a = document.createElement("a");
        a.textContent = text;
        a.href = `#${[
            "main",
            "prediction",
            "discussion"
        ][index]}`;
        navLinks.appendChild(a);
    });
    // 검색 및 로그인 영역
    const searchBox = document.createElement("div");
    searchBox.className = "search-login";
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "\uAC80\uC0C9...";
    const searchActionBtn = document.createElement("button");
    searchActionBtn.textContent = "\uAC80\uC0C9";
    const themeToggle = document.createElement("button");
    themeToggle.id = "theme-toggle";
    themeToggle.addEventListener("click", toggleTheme);
    const loginBtn = document.createElement("button");
    loginBtn.textContent = "\uB85C\uADF8\uC778";
    loginBtn.id = "navbar-login-button";
    // ✅ 로그인 버튼 클릭 시 #/login 으로 이동
    loginBtn.addEventListener("click", ()=>{
        window.location.hash = "#/login";
    });
    searchBox.append(searchInput, searchActionBtn, themeToggle, loginBtn);
    container.append(logo, navLinks, searchBox);
    navbar.appendChild(container);
    document.body.insertBefore(navbar, document.body.firstChild);
    applyTheme();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"g0lzD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderMainPage", ()=>renderMainPage);
var _conapiJs = require("../app/api/conapi.js");
// createMarketCapChart 함수는 이전과 동일하게 유지
function createMarketCapChart() {
    const chart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    chart.setAttribute("class", "market-cap-chart");
    chart.setAttribute("viewBox", "0 0 100 60");
    const { data } = (0, _conapiJs.getMarketCapHistory)(); // COIN_LIST[0].symbol 인자 제거 (getMarketCapHistory는 인자 안 받음)
    const points = data.map((val, i)=>`${i * (100 / (data.length - 1))},${60 - val / Math.max(...data) * 50}`).join(" ");
    const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    polyline.setAttribute("points", points);
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke", "#ff3b30"); // 기본 라이트모드 색상, 다크모드는 CSS에서 처리
    polyline.setAttribute("stroke-width", "1");
    chart.appendChild(polyline);
    return chart;
}
function renderMainPage(container) {
    container.innerHTML = "";
    const main = document.createElement("div");
    main.className = "main-content";
    // 좌측 패널 (코인 일기예보)
    const left = document.createElement("div");
    left.className = "left-panel";
    const leftTitle = document.createElement("h3");
    leftTitle.textContent = "\uCF54\uC778 \uC77C\uAE30\uC608\uBCF4";
    left.appendChild(leftTitle);
    const coinListContainer = document.createElement("div");
    coinListContainer.className = "coin-list-container";
    (0, _conapiJs.COIN_LIST).forEach((coin)=>{
        const coinItem = document.createElement("div");
        coinItem.className = "coin-item";
        coinItem.style.cursor = "pointer";
        coinItem.addEventListener("click", ()=>{
            window.location.hash = `coin/${coin.symbol}`;
        });
        // 코인 기본 정보 (심볼, 이름, 가격, 변동률)
        const coinInfoRow = document.createElement("div");
        coinInfoRow.className = "coin-info-row";
        const coinSymbolName = document.createElement("div");
        coinSymbolName.className = "coin-symbol-name";
        const symbolDisplay = document.createElement("span");
        symbolDisplay.className = "coin-item-symbol";
        // 수정된 부분: 그래픽 심볼 우선 표시
        symbolDisplay.textContent = coin.graphicSymbol || coin.symbol;
        const nameDisplay = document.createElement("span");
        nameDisplay.className = "coin-item-name";
        nameDisplay.textContent = ` ${coin.name}`; // 심볼과 이름 사이 공백 추가
        coinSymbolName.appendChild(symbolDisplay);
        coinSymbolName.appendChild(nameDisplay);
        const price = document.createElement("div");
        price.className = "coin-price";
        price.textContent = coin.price;
        const change = document.createElement("div");
        change.className = "coin-change";
        change.textContent = coin.change || "0%";
        change.style.color = coin.change && coin.change.includes("+") ? "#34c759" : "#ff3b30";
        coinInfoRow.appendChild(coinSymbolName);
        coinInfoRow.appendChild(price);
        coinInfoRow.appendChild(change);
        coinItem.appendChild(coinInfoRow);
        // 어제, 오늘, 내일 날씨 정보
        const dailyWeatherRow = document.createElement("div");
        dailyWeatherRow.className = "daily-weather-row";
        const forecasts = (0, _conapiJs.getWeatherPrediction)(coin.symbol);
        forecasts.forEach((forecast)=>{
            const weatherDayBlock = document.createElement("div");
            weatherDayBlock.className = "weather-day-block";
            // const dayLabel = document.createElement("div");
            // dayLabel.className = "weather-day-label";
            // if (forecast.day === "yesterday") dayLabel.textContent = "";
            // else if (forecast.day === "today") dayLabel.textContent = "";
            // else if (forecast.day === "tomorrow") dayLabel.textContent = "";
            const weatherIcon = document.createElement("span");
            weatherIcon.className = "weather-day-icon";
            weatherIcon.textContent = forecast.icon;
            weatherIcon.title = forecast.tooltip;
            // weatherDayBlock.appendChild(dayLabel);
            weatherDayBlock.appendChild(weatherIcon);
            dailyWeatherRow.appendChild(weatherDayBlock);
        });
        coinItem.appendChild(dailyWeatherRow);
        coinListContainer.appendChild(coinItem);
    });
    left.appendChild(coinListContainer);
    // ... (이하 코드는 이전과 거의 동일) ...
    const analysisNote = document.createElement("div");
    analysisNote.className = "analysis-note";
    analysisNote.textContent = "* \uB0A0\uC528 \uC544\uC774\uCF58\uC740 \uAC01 \uB0A0\uC9DC\uC758 \uC608\uC0C1 \uBCC0\uB3D9\uC131\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.";
    left.appendChild(analysisNote);
    // const ctaButtons = document.createElement("div");
    // ctaButtons.className = "cta-buttons";
    // const predictBtn = document.createElement("button");
    // predictBtn.textContent = "예측하기";
    // predictBtn.onclick = () => (window.location.hash = "prediction");
    // const discussBtn = document.createElement("button");
    // discussBtn.textContent = "토론방";
    // discussBtn.onclick = () => (window.location.hash = "discussion");
    // ctaButtons.appendChild(predictBtn);
    // ctaButtons.appendChild(discussBtn);
    // left.appendChild(ctaButtons);
    // 우측 패널
    const right = document.createElement("div");
    right.className = "right-panel";
    // 시가 총액 패널
    const marketCapPanel = document.createElement("div");
    marketCapPanel.className = "market-cap-panel";
    const marketCapHeader = document.createElement("div");
    marketCapHeader.className = "market-cap-header";
    const marketCapTitle = document.createElement("div");
    marketCapTitle.textContent = "\uC2DC\uAC00 \uCD1D\uC561";
    marketCapTitle.className = "market-cap-title";
    const marketCapValueContainer = document.createElement("div");
    marketCapValueContainer.className = "market-cap-value-container";
    const marketCapValue = document.createElement("div");
    marketCapValue.textContent = "\u20A94.04P"; // 이 값은 동적으로 변경될 수 있어야 함
    marketCapValue.className = "market-cap-value";
    const marketCapChange = document.createElement("div");
    marketCapChange.textContent = "\u25BC 0.86%"; // 이 값은 동적으로 변경될 수 있어야 함
    marketCapChange.className = "market-cap-change";
    marketCapValueContainer.appendChild(marketCapValue);
    marketCapValueContainer.appendChild(marketCapChange);
    marketCapHeader.appendChild(marketCapTitle);
    marketCapHeader.appendChild(marketCapValueContainer);
    const marketCapChartSVG = createMarketCapChart();
    marketCapPanel.appendChild(marketCapHeader);
    marketCapPanel.appendChild(marketCapChartSVG);
    // 공포 탐욕 지수 패널
    const fearGreedPanel = document.createElement("div");
    fearGreedPanel.className = "fear-greed-panel";
    const fearGreedHeader = document.createElement("div");
    fearGreedHeader.className = "fear-greed-header";
    const fearGreedTitle = document.createElement("div");
    fearGreedTitle.textContent = "\uACF5\uD3EC\uC640 \uD0D0\uC695";
    fearGreedTitle.className = "fear-greed-title";
    const fearGreedIndex = (0, _conapiJs.getFearGreedIndex)();
    const fgValueAndStatusContainer = document.createElement("div");
    fgValueAndStatusContainer.className = "fear-greed-current-value-status";
    const fearGreedValueSmall = document.createElement("div");
    fearGreedValueSmall.textContent = fearGreedIndex;
    fearGreedValueSmall.className = "fear-greed-value-small";
    const fearGreedStatusTextSmall = document.createElement("div");
    fearGreedStatusTextSmall.textContent = (0, _conapiJs.getFearGreedLabel)(fearGreedIndex);
    fearGreedStatusTextSmall.className = "fear-greed-status-small";
    fgValueAndStatusContainer.appendChild(fearGreedValueSmall);
    fgValueAndStatusContainer.appendChild(fearGreedStatusTextSmall);
    fearGreedHeader.appendChild(fearGreedTitle);
    fearGreedHeader.appendChild(fgValueAndStatusContainer);
    fearGreedPanel.appendChild(fearGreedHeader);
    const fearGreedContent = document.createElement("div");
    fearGreedContent.className = "fear-greed-content";
    const fearGreedInfo = document.createElement("div");
    fearGreedInfo.className = "fear-greed-info";
    const emojiDisplay = document.createElement("div");
    emojiDisplay.className = "fear-greed-emoji-display";
    emojiDisplay.textContent = (0, _conapiJs.getFearGreedEmoji)(fearGreedIndex);
    const fearGreedValueDisplay = document.createElement("div");
    fearGreedValueDisplay.className = "fear-greed-value-display";
    fearGreedValueDisplay.textContent = fearGreedIndex;
    const statusDisplayText = document.createElement("div");
    statusDisplayText.className = "fear-greed-status-display-text";
    statusDisplayText.textContent = (0, _conapiJs.getFearGreedLabel)(fearGreedIndex);
    fearGreedInfo.appendChild(emojiDisplay);
    fearGreedInfo.appendChild(fearGreedValueDisplay);
    fearGreedInfo.appendChild(statusDisplayText);
    const fearGreedGraph = document.createElement("div");
    fearGreedGraph.className = "fear-greed-graph";
    const gauge = document.createElement("div");
    gauge.className = "fear-greed-gauge";
    const indicator = document.createElement("div");
    indicator.className = "fear-greed-indicator";
    indicator.style.left = `${fearGreedIndex}%`;
    gauge.appendChild(indicator);
    const labels = document.createElement("div");
    labels.className = "fear-greed-labels";
    const fearLabel = document.createElement("span");
    fearLabel.textContent = "\uD83D\uDE28 \uADF9\uB3C4\uC758 \uACF5\uD3EC"; // 이전 답변의 😱에서 변경됨 (conapi.js 기준)
    const neutralLabel = document.createElement("span");
    neutralLabel.textContent = "\uD83D\uDE10 \uC911\uB9BD";
    const greedLabel = document.createElement("span");
    greedLabel.textContent = "\uD83E\uDD29 \uADF9\uB3C4\uC758 \uD0D0\uC695"; // 이전 답변의 🤑에서 변경됨 (conapi.js 기준)
    labels.appendChild(fearLabel);
    labels.appendChild(neutralLabel);
    labels.appendChild(greedLabel);
    fearGreedGraph.appendChild(gauge);
    fearGreedGraph.appendChild(labels);
    fearGreedContent.appendChild(fearGreedInfo);
    fearGreedContent.appendChild(fearGreedGraph);
    fearGreedPanel.appendChild(fearGreedContent);
    right.appendChild(marketCapPanel);
    right.appendChild(fearGreedPanel);
    main.appendChild(left);
    main.appendChild(right);
    container.appendChild(main);
}

},{"../app/api/conapi.js":"pTw2w","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"pTw2w":[function(require,module,exports,__globalThis) {
// app/api/conapi.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "COIN_LIST", ()=>COIN_LIST);
// 랜덤으로 기술지표 점수 반환 (실제로는 계산 또는 API 호출 필요)
parcelHelpers.export(exports, "getTechnicalIndicators", ()=>getTechnicalIndicators);
// 가상의 날씨예측: 점수에 따라 아이콘 결정 (3일치 예보 반환)
parcelHelpers.export(exports, "getWeatherPrediction", ()=>getWeatherPrediction);
// 가상의 시가총액 차트용 데이터 (7일치 랜덤 데이터 생성)
parcelHelpers.export(exports, "getMarketCapHistory", ()=>getMarketCapHistory);
// 가상의 공포/탐욕 지수 (0 ~ 100 사이의 랜덤 정수)
parcelHelpers.export(exports, "getFearGreedIndex", ()=>getFearGreedIndex);
// 공포/탐욕 지수 값에 따른 레이블 반환
parcelHelpers.export(exports, "getFearGreedLabel", ()=>getFearGreedLabel);
// 공포/탐욕 지수 값에 따른 이모티콘 반환
parcelHelpers.export(exports, "getFearGreedEmoji", ()=>getFearGreedEmoji) // 추가: 실제 CoinAPI 연동을 위한 예시 함수 (주석 처리됨, API 키 필요)
 /*
const COINAPI_KEY = "YOUR_API_KEY"; // 실제 API 키로 교체해야 합니다.
const BASE_URL = "https://rest.coinapi.io/v1";

export async function fetchCoinPrice(symbol = "BTC", convertTo = "USD") {
  if (!COINAPI_KEY || COINAPI_KEY === "YOUR_API_KEY") {
    console.warn("CoinAPI key is not set. Returning mock data.");
    return Math.random() * 70000; // 목업 데이터 반환
  }
  try {
    const response = await fetch(`${BASE_URL}/exchangerate/${symbol}/${convertTo}`, {
      headers: {
        'X-CoinAPI-Key': COINAPI_KEY,
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`CoinAPI Error: ${response.status} - ${errorData.message || 'Failed to fetch price'}`);
    }
    const data = await response.json();
    return data.rate;
  } catch (error) {
    console.error('Error fetching data from CoinAPI:', error);
    throw error; // 에러를 다시 던져서 호출한 쪽에서 처리하도록 함
  }
}

export async function fetchHistoricalData(symbol = "BTCUSDT", periodId = "1DAY", timeStart, timeEnd) {
  if (!COINAPI_KEY || COINAPI_KEY === "YOUR_API_KEY") {
    console.warn("CoinAPI key is not set. Returning mock historical data.");
    return getMarketCapHistory(symbol.replace('USDT', '')).data.map((val, index) => ({
        time_period_start: new Date(new Date().setDate(new Date().getDate() - (6 - index))).toISOString(),
        price_close: val
    })); // 목업 데이터 반환
  }
  const startDate = timeStart || new Date(new Date().setDate(new Date().getDate() - 7)).toISOString().split('T')[0] + "T00:00:00";
  const endDate = timeEnd || new Date().toISOString().split('T')[0] + "T23:59:59";
  
  try {
    const response = await fetch(
      `${BASE_URL}/ohlcv/${symbol.startsWith('X:') ? symbol : 'BITSTAMP_SPOT_' + symbol.replace('USDT', '_USD')}/history?period_id=${periodId}&time_start=${startDate}&time_end=${endDate}`,
      {
        headers: {
          'X-CoinAPI-Key': COINAPI_KEY,
        },
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`CoinAPI Error: ${response.status} - ${errorData.message || 'Failed to fetch historical data'}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching historical data from CoinAPI:', error);
    throw error;
  }
}
*/ ;
const COIN_LIST = [
    {
        rank: 1,
        name: "\uBE44\uD2B8\uCF54\uC778",
        symbol: "BTC",
        graphicSymbol: "\u20BF",
        apiSymbol: "BTCUSDT",
        price: "$67,890.45",
        change: "+2.34%"
    },
    {
        rank: 2,
        name: "\uC774\uB354\uB9AC\uC6C0",
        symbol: "ETH",
        graphicSymbol: "\u039E",
        apiSymbol: "ETHUSDT",
        price: "$3,456.78",
        change: "+1.23%"
    },
    {
        rank: 3,
        name: "\uB9AC\uD50C",
        symbol: "XRP",
        graphicSymbol: "\u2715",
        apiSymbol: "XRPUSDT",
        price: "$1.23",
        change: "-0.45%"
    },
    {
        rank: 4,
        name: "\uBC14\uC774\uB0B8\uC2A4\uCF54\uC778",
        symbol: "BNB",
        graphicSymbol: "BNB",
        apiSymbol: "BNBUSDT",
        price: "$456.78",
        change: "+0.89%"
    },
    {
        rank: 5,
        name: "\uC194\uB77C\uB098",
        symbol: "SOL",
        graphicSymbol: "SOL",
        apiSymbol: "SOLUSDT",
        price: "$123.45",
        change: "+5.67%"
    },
    {
        rank: 6,
        name: "\uB3C4\uC9C0\uCF54\uC778",
        symbol: "DOGE",
        graphicSymbol: "\u0189",
        apiSymbol: "DOGEUSDT",
        price: "$0.123",
        change: "-1.23%"
    },
    {
        rank: 7,
        name: "\uCE74\uB974\uB2E4\uB178",
        symbol: "ADA",
        graphicSymbol: "\u20B3",
        apiSymbol: "ADAUSDT",
        price: "$0.456",
        change: "+0.78%"
    },
    {
        rank: 8,
        name: "\uD2B8\uB860",
        symbol: "TRX",
        graphicSymbol: "TRX",
        apiSymbol: "TRXUSDT",
        price: "$0.089",
        change: "-0.34%"
    },
    {
        rank: 9,
        name: "\uC2DC\uBC14\uC774\uB204",
        symbol: "SHIB",
        graphicSymbol: "SHIB",
        apiSymbol: "SHIBUSDT",
        price: "$0.00002345",
        change: "+3.45%"
    },
    {
        rank: 10,
        name: "\uB77C\uC774\uD2B8\uCF54\uC778",
        symbol: "LTC",
        graphicSymbol: "\u0141",
        apiSymbol: "LTCUSDT",
        price: "$78.90",
        change: "-0.67%"
    }
];
function getTechnicalIndicators(symbol) {
    // console.log(`Fetching technical indicators for ${symbol}...`); // 실제 API 호출 시 유용
    return {
        ma: Math.random() * 100,
        ema: Math.random() * 100,
        rsi: Math.random() * 100,
        macd: (Math.random() * 2 - 1) * 10
    };
}
function getWeatherPrediction(symbol) {
    // console.log(`Fetching weather prediction for ${symbol}...`); // 실제 API 호출 시 유용
    const weathers = [
        {
            icon: "\uD83D\uDD06",
            label: "\uB9D1\uC74C",
            description: "\uAC15\uC138 \uC608\uC0C1"
        },
        {
            icon: "\u26C5\uFE0F",
            label: "\uAD6C\uB984\uC870\uAE08",
            description: "\uC57D\uC138\uC7A5 \uC608\uC0C1"
        },
        {
            icon: "\u2601\uFE0F",
            label: "\uD750\uB9BC",
            description: "\uAD00\uB9DD\uC138 \uC608\uC0C1"
        },
        {
            icon: "\uD83C\uDF27\uFE0F",
            label: "\uBE44",
            description: "\uD558\uB77D\uC138 \uC608\uC0C1"
        },
        {
            icon: "\u26C8\uFE0F",
            label: "\uD3ED\uD48D",
            description: "\uAE09\uB77D\uC138 \uC608\uC0C1"
        },
        {
            icon: "\u2744\uFE0F",
            label: "\uB208",
            description: "\uBCC0\uB3D9\uC131 \uD655\uB300"
        },
        {
            icon: "\uD83D\uDCA8",
            label: "\uBC14\uB78C",
            description: "\uC2DC\uC7A5 \uBD88\uC548\uC815"
        }
    ];
    const dailyForecasts = [
        "yesterday",
        "today",
        "tomorrow"
    ].map((dayType)=>{
        const idx = Math.floor(Math.random() * weathers.length);
        const weather = weathers[idx];
        return {
            day: dayType,
            icon: weather.icon,
            label: weather.label,
            description: weather.description,
            tooltip: `${symbol} ${dayType === "today" ? "\uC624\uB298" : dayType === "yesterday" ? "\uC5B4\uC81C" : "\uB0B4\uC77C"} \u{C608}\u{C0C1}: ${weather.description}`
        };
    });
    return dailyForecasts;
}
function getMarketCapHistory(symbol) {
    // console.log(`Fetching market cap history for ${symbol}...`); // 실제 API 호출 시 유용
    const labels = [];
    const data = [];
    for(let i = 6; i >= 0; i--){
        const d = new Date();
        d.setDate(d.getDate() - i);
        labels.push(`${d.getMonth() + 1}/${d.getDate()}`);
        // 심볼별로 약간 다른 패턴을 주도록 랜덤 값 범위 조정 (예시)
        let baseValue = 100;
        if (symbol === "BTC") baseValue = 500;
        else if (symbol === "ETH") baseValue = 300;
        data.push(baseValue + Math.random() * (baseValue / 2));
    }
    return {
        labels,
        data
    };
}
function getFearGreedIndex() {
    return Math.floor(Math.random() * 101);
}
function getFearGreedLabel(value) {
    if (value < 20) return "\uADF9\uB2E8\uC801 \uACF5\uD3EC";
    if (value < 40) return "\uACF5\uD3EC";
    if (value < 60) return "\uC911\uB9BD";
    if (value < 80) return "\uD0D0\uC695";
    return "\uADF9\uB2E8\uC801 \uD0D0\uC695";
}
function getFearGreedEmoji(value) {
    if (value < 20) return "\uD83D\uDE31";
    if (value < 40) return "\uD83D\uDE28";
    if (value < 60) return "\uD83D\uDE10";
    if (value < 80) return "\uD83D\uDE0A";
    return "\uD83E\uDD29"; // output5.txt 에서는 "🤩" 로 되어있음. (이전 답변은 "🤑" 이었음)
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8NecS":[function(require,module,exports,__globalThis) {
// pages/CoinDetail.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderCoinDetailPage", ()=>renderCoinDetailPage);
var _conapiJs = require("../app/api/conapi.js");
var _chartHelpersJs = require("./_ChartHelpers.js");
let activeChartObjects = {};
function destroyAllActiveCharts() {
    for(const canvasId in activeChartObjects){
        if (activeChartObjects[canvasId] && typeof activeChartObjects[canvasId].destroy === 'function') try {
            activeChartObjects[canvasId].destroy();
        } catch (e) {
            console.error(`Error destroying chart ${canvasId}:`, e);
        }
    }
    activeChartObjects = {};
}
function renderCoinDetailPage(container, coinSymbol = "BTC") {
    destroyAllActiveCharts();
    container.innerHTML = "";
    const coin = (0, _conapiJs.COIN_LIST).find((c)=>c.symbol === coinSymbol) || (0, _conapiJs.COIN_LIST)[0];
    const pageWrapper = document.createElement("div");
    pageWrapper.className = "coin-detail-page-wrapper";
    // --- 왼쪽 고정 정보 패널 ---
    const stickyLeftPanel = document.createElement("div");
    stickyLeftPanel.className = "coin-detail-sticky-left-panel";
    const header = document.createElement("div");
    header.className = "coin-detail-header";
    const title = document.createElement("h2");
    const displaySymbol = coin.graphicSymbol || coin.symbol;
    title.innerHTML = `<span class="coin-graphic-symbol-detail">${displaySymbol}</span> ${coin.name} (${coin.symbol})`;
    const price = document.createElement("div");
    price.className = "coin-detail-price";
    price.textContent = `\u{D604}\u{C7AC}\u{AC00}: ${coin.price || "\u20A990,000,000"}`;
    header.appendChild(title);
    header.appendChild(price);
    const weatherInfo = document.createElement("div");
    weatherInfo.className = "weather-forecast";
    const forecasts = (0, _conapiJs.getWeatherPrediction)(coin.symbol);
    forecasts.forEach((forecast)=>{
        const dayForecast = document.createElement("div");
        dayForecast.className = "day-forecast";
        let dayLabelText = "";
        if (forecast.day === "yesterday") dayLabelText = "\uC5B4\uC81C";
        else if (forecast.day === "today") dayLabelText = "\uC624\uB298";
        else if (forecast.day === "tomorrow") dayLabelText = "\uB0B4\uC77C";
        dayForecast.textContent = `${dayLabelText} ${forecast.icon}`;
        weatherInfo.appendChild(dayForecast);
    });
    const indicators = (0, _conapiJs.getTechnicalIndicators)(coin.symbol);
    const technicalInfo = document.createElement("div");
    technicalInfo.className = "technical-indicators";
    technicalInfo.textContent = `MA: ${Math.round(indicators.ma)} / EMA: ${Math.round(indicators.ema)} / RSI: ${Math.round(indicators.rsi)} / MACD: ${Math.round(indicators.macd)}`;
    const returns = document.createElement("div");
    returns.className = "returns-info";
    const timeframes = [
        "24\uC2DC\uAC04",
        "7\uC77C",
        "30\uC77C"
    ];
    const values = [
        "+2.2%",
        "+5.0%",
        "+10.0%"
    ];
    timeframes.forEach((time, index)=>{
        const returnItem = document.createElement("div");
        returnItem.className = "return-item";
        returnItem.textContent = `${time}: ${values[index]}`;
        returns.appendChild(returnItem);
    });
    // 요청 1: returns-info 아래에 추가 영역 확보
    const tempInfoPlaceholder = document.createElement("div");
    tempInfoPlaceholder.className = "temp-info-placeholder";
    tempInfoPlaceholder.innerHTML = `
    <h4>\u{C784}\u{C2DC} \u{C815}\u{BCF4} \u{C601}\u{C5ED}</h4>
    <p>\u{C5EC}\u{AE30}\u{C5D0} \u{CD94}\u{AC00}\u{C801}\u{C778} \u{C815}\u{BCF4}\u{B098} \u{CEF4}\u{D3EC}\u{B10C}\u{D2B8}\u{AC00} \u{D45C}\u{C2DC}\u{B420} \u{C218} \u{C788}\u{C2B5}\u{B2C8}\u{B2E4}.</p>
    <ul>
      <li>\u{D56D}\u{BAA9} 1</li>
      <li>\u{D56D}\u{BAA9} 2</li>
    </ul>
  `;
    // 요청 1: 수익률 예측과, 토론방 이동 버튼을 아래로 이동.
    const buttonArea = document.createElement("div");
    buttonArea.className = "coin-detail-buttons";
    const predictButton = document.createElement("button");
    predictButton.textContent = "\uC218\uC775\uB960 \uC608\uCE21";
    predictButton.onclick = ()=>window.location.hash = `#prediction/${coin.symbol}`;
    const discussButton = document.createElement("button");
    discussButton.textContent = "\uD1A0\uB860\uBC29 \uC774\uB3D9";
    discussButton.onclick = ()=>window.location.hash = `#discussion/${coin.symbol}`;
    buttonArea.appendChild(predictButton);
    buttonArea.appendChild(discussButton);
    stickyLeftPanel.appendChild(header);
    stickyLeftPanel.appendChild(weatherInfo);
    stickyLeftPanel.appendChild(technicalInfo);
    stickyLeftPanel.appendChild(returns);
    stickyLeftPanel.appendChild(tempInfoPlaceholder); // 임시 영역 추가
    stickyLeftPanel.appendChild(buttonArea); // 버튼 영역을 임시 영역 아래로 이동
    pageWrapper.appendChild(stickyLeftPanel);
    // --- 오른쪽 콘텐츠 영역 (차트 및 뉴스) ---
    const rightContentArea = document.createElement("div");
    rightContentArea.className = "coin-detail-right-content-area";
    // 1. 첫 번째 컬럼: 코인 가격 차트 (MA 제외)
    const coinChartColumn = document.createElement("div");
    coinChartColumn.className = "coin-chart-column";
    const priceAndIndicatorCombinedChartArea = document.createElement("div");
    priceAndIndicatorCombinedChartArea.className = "combined-chart-area-moved";
    const priceChartContainer = document.createElement("div");
    priceChartContainer.className = "price-chart-container";
    const priceChartHeaderEl = document.createElement("div");
    priceChartHeaderEl.className = "chart-header";
    priceChartHeaderEl.innerHTML = `<h3><span class="coin-graphic-symbol-detail">${displaySymbol}</span> ${coin.name} \u{AC00}\u{ACA9} \u{BCC0}\u{B3D9}</h3>`;
    const priceChartOptions = document.createElement("div");
    priceChartOptions.className = "chart-options";
    // 초기에는 '라인' 차트를 선택된 것으로 표시 (현재 라인차트 기본)
    [
        "\uCE94\uB4E4",
        "\uB77C\uC778"
    ].forEach((type)=>{
        const option = document.createElement("button");
        option.className = type === "\uB77C\uC778" ? "chart-option selected" : "chart-option";
        option.textContent = type;
        // TODO: 캔들/라인 차트 전환 로직 추가 필요
        priceChartOptions.appendChild(option);
    });
    [
        "1\uC77C",
        "1\uC8FC",
        "1\uAC1C\uC6D4",
        "1\uB144",
        "\uC804\uCCB4"
    ].forEach((time)=>{
        const option = document.createElement("button");
        option.className = time === "1\uAC1C\uC6D4" ? "time-option selected" : "time-option";
        option.textContent = time;
        priceChartOptions.appendChild(option);
    });
    const priceCanvasWrapper = document.createElement("div");
    priceCanvasWrapper.className = "canvas-wrapper";
    const priceChartCanvas = document.createElement("canvas");
    priceChartCanvas.id = "btcPriceChartCanvas";
    priceCanvasWrapper.appendChild(priceChartCanvas);
    priceChartContainer.appendChild(priceChartHeaderEl);
    priceChartContainer.appendChild(priceChartOptions);
    priceChartContainer.appendChild(priceCanvasWrapper);
    // 기술 지표 차트 부분 (MA 차트 표시)
    const indicatorChartContainer = document.createElement("div");
    indicatorChartContainer.className = "indicator-chart-container";
    const indicatorChartHeaderEl = document.createElement("h4");
    indicatorChartHeaderEl.textContent = "\uAE30\uC220 \uC9C0\uD45C";
    const indicatorsTabs = document.createElement("div");
    indicatorsTabs.className = "indicators-tabs";
    const indicatorTypes = [
        "MA",
        "EMA",
        "RSI",
        "MACD"
    ];
    indicatorTypes.forEach((indType)=>{
        const tab = document.createElement("button");
        tab.className = indType === "MA" ? "indicator-tab selected" : "indicator-tab";
        tab.textContent = indType;
        tab.addEventListener('click', ()=>{
            indicatorsTabs.querySelectorAll('.indicator-tab').forEach((t)=>t.classList.remove('selected'));
            tab.classList.add('selected');
            if (activeChartObjects['indicatorChartCanvas'] && typeof activeChartObjects['indicatorChartCanvas'].destroy === 'function') {
                activeChartObjects['indicatorChartCanvas'].destroy();
                delete activeChartObjects['indicatorChartCanvas'];
            }
            const btcPriceChart = activeChartObjects['btcPriceChartCanvas'];
            if (indType === 'MA' && btcPriceChart && btcPriceChart._fullCandlestickDataForMA) {
                const btcOhlcDataForMA = btcPriceChart._fullCandlestickDataForMA;
                activeChartObjects['indicatorChartCanvas'] = (0, _chartHelpersJs.createMaChart)('indicatorChartCanvas', btcOhlcDataForMA, 10);
            } else if (btcPriceChart) console.log(`${indType} chart selected, but not implemented yet. Or btcPriceChartCanvas or its data is missing for MA.`);
            else console.warn("BTC Price Chart is not available for indicator calculation.");
        });
        indicatorsTabs.appendChild(tab);
    });
    const indicatorCanvasWrapper = document.createElement("div");
    indicatorCanvasWrapper.className = "canvas-wrapper";
    const indicatorChartCanvas = document.createElement("canvas");
    indicatorChartCanvas.id = "indicatorChartCanvas";
    indicatorCanvasWrapper.appendChild(indicatorChartCanvas);
    indicatorChartContainer.appendChild(indicatorChartHeaderEl);
    indicatorChartContainer.appendChild(indicatorsTabs);
    indicatorChartContainer.appendChild(indicatorCanvasWrapper);
    priceAndIndicatorCombinedChartArea.appendChild(priceChartContainer);
    priceAndIndicatorCombinedChartArea.appendChild(indicatorChartContainer);
    coinChartColumn.appendChild(priceAndIndicatorCombinedChartArea);
    rightContentArea.appendChild(coinChartColumn);
    // 2. 두 번째 컬럼: 환율 및 금 시세 차트
    const otherAssetsColumn = document.createElement("div");
    otherAssetsColumn.className = "other-assets-column";
    const usdKrwChartArea = document.createElement("div");
    usdKrwChartArea.className = "usd-krw-chart-area-moved"; // 이 클래스에 높이 및 스크롤 적용
    const usdKrwChartHeaderEl = document.createElement("div");
    usdKrwChartHeaderEl.className = "chart-header";
    usdKrwChartHeaderEl.innerHTML = "<h3>USD/KRW \uD658\uC728 \uBCC0\uB3D9</h3>";
    const usdKrwCanvasWrapper = document.createElement("div");
    usdKrwCanvasWrapper.className = "canvas-wrapper";
    const usdKrwChartCanvas = document.createElement("canvas");
    usdKrwChartCanvas.id = "usdKrwChartCanvas";
    usdKrwCanvasWrapper.appendChild(usdKrwChartCanvas);
    usdKrwChartArea.appendChild(usdKrwChartHeaderEl);
    usdKrwChartArea.appendChild(usdKrwCanvasWrapper);
    otherAssetsColumn.appendChild(usdKrwChartArea);
    const goldPriceChartArea = document.createElement("div");
    goldPriceChartArea.className = "gold-price-chart-area-moved"; // 이 클래스에 높이 및 스크롤 적용
    const goldPriceChartHeaderEl = document.createElement("div");
    goldPriceChartHeaderEl.className = "chart-header";
    goldPriceChartHeaderEl.innerHTML = "<h3>\uAE08 \uC2DC\uC138 \uBCC0\uB3D9</h3>";
    const goldPriceCanvasWrapper = document.createElement("div");
    goldPriceCanvasWrapper.className = "canvas-wrapper";
    const goldPriceChartCanvas = document.createElement("canvas");
    goldPriceChartCanvas.id = "goldPriceChartCanvas";
    goldPriceCanvasWrapper.appendChild(goldPriceChartCanvas);
    goldPriceChartArea.appendChild(goldPriceChartHeaderEl);
    goldPriceChartArea.appendChild(goldPriceCanvasWrapper);
    otherAssetsColumn.appendChild(goldPriceChartArea);
    rightContentArea.appendChild(otherAssetsColumn);
    // 3. 세 번째 컬럼: 뉴스 및 인기 게시글
    const newsColumnDetail = document.createElement("div");
    newsColumnDetail.className = "news-column-detail";
    const newsAndPostsStack = document.createElement("div");
    newsAndPostsStack.className = "news-posts-vertical-stack"; // 이 클래스에 높이 및 스크롤 적용
    const newsList = createNewsColumn();
    const postsList = createPostsColumn();
    newsAndPostsStack.appendChild(newsList);
    newsAndPostsStack.appendChild(postsList);
    newsColumnDetail.appendChild(newsAndPostsStack);
    rightContentArea.appendChild(newsColumnDetail);
    pageWrapper.appendChild(rightContentArea);
    container.appendChild(pageWrapper);
    // --- 차트 렌더링 호출 ---
    try {
        const btcChart = (0, _chartHelpersJs.createBtcPriceChart)('btcPriceChartCanvas');
        if (btcChart) {
            activeChartObjects['btcPriceChartCanvas'] = btcChart;
            if (btcChart._fullCandlestickDataForMA) activeChartObjects['indicatorChartCanvas'] = (0, _chartHelpersJs.createMaChart)('indicatorChartCanvas', btcChart._fullCandlestickDataForMA, 10);
            else console.warn("Could not retrieve full OHLC data from BTC price chart for MA calculation.");
        }
        activeChartObjects['usdKrwChartCanvas'] = (0, _chartHelpersJs.createSimpleLineChart)('usdKrwChartCanvas', 'USD/KRW', 1200, 1400);
        activeChartObjects['goldPriceChartCanvas'] = (0, _chartHelpersJs.createSimpleLineChart)('goldPriceChartCanvas', 'Gold Price (USD)', 1800, 2500);
    } catch (e) {
        console.error("Error rendering charts in CoinDetail.js:", e);
    }
}
// createNewsColumn, createPostsColumn 함수는 이전과 동일하게 유지
function createNewsColumn() {
    const newsColumnDiv = document.createElement("div");
    newsColumnDiv.className = "news-section-in-detail";
    const newsHeader = document.createElement("h3");
    newsHeader.textContent = "\uCD5C\uC2E0 \uB274\uC2A4";
    newsColumnDiv.appendChild(newsHeader);
    const newsListEl = document.createElement("ul");
    newsListEl.className = "news-list";
    const newsItems = [
        {
            title: "\uBE44\uD2B8\uCF54\uC778 \uC0AC\uC0C1 \uCD5C\uACE0\uAC00 \uACBD\uC2E0",
            time: "10\uBD84 \uC804"
        },
        {
            title: "ETF \uC2B9\uC778 \uC18C\uC2DD",
            time: "1\uC2DC\uAC04 \uC804"
        },
        {
            title: "\uC2DC\uC7A5 \uBD84\uC11D \uB9AC\uD3EC\uD2B8",
            time: "3\uC2DC\uAC04 \uC804"
        },
        {
            title: "\uAE30\uAD00 \uD22C\uC790 \uC99D\uAC00",
            time: "5\uC2DC\uAC04 \uC804"
        },
        {
            title: "\uADDC\uC81C \uC774\uC288",
            time: "1\uC77C \uC804"
        }
    ];
    newsItems.forEach((item)=>{
        const newsItem = document.createElement("li");
        newsItem.className = "news-item";
        const title = document.createElement("div");
        title.className = "news-title";
        title.textContent = item.title;
        const time = document.createElement("div");
        time.className = "news-time";
        time.textContent = `(${item.time})`;
        newsItem.appendChild(title);
        newsItem.appendChild(time);
        newsListEl.appendChild(newsItem);
    });
    newsColumnDiv.appendChild(newsListEl);
    return newsColumnDiv;
}
function createPostsColumn() {
    const postsColumnDiv = document.createElement("div");
    postsColumnDiv.className = "posts-section-in-detail";
    const postsHeader = document.createElement("h3");
    postsHeader.textContent = "\uC778\uAE30 \uAC8C\uC2DC\uAE00";
    postsColumnDiv.appendChild(postsHeader);
    const postsListEl = document.createElement("ul");
    postsListEl.className = "posts-list";
    const postItems = [
        {
            title: "BTC \uC804\uB9DD \uD1A0\uB860",
            time: "2\uC2DC\uAC04 \uC804"
        },
        {
            title: "\uBE44\uD2B8\uCF54\uC778 \uACFC\uB300\uD3C9\uAC00?",
            time: "5\uC2DC\uAC04 \uC804"
        },
        {
            title: "\uB9E4\uB9E4\uC804\uB7B5 \uACF5\uC720",
            time: "1\uC77C \uC804"
        }
    ];
    postItems.forEach((item)=>{
        const postItem = document.createElement("li");
        postItem.className = "post-item";
        const title = document.createElement("div");
        title.className = "post-title";
        title.textContent = item.title;
        const time = document.createElement("div");
        time.className = "post-time";
        time.textContent = `(${item.time})`;
        postItem.appendChild(title);
        postItem.appendChild(time);
        postsListEl.appendChild(postItem);
    });
    const moreLink = document.createElement("a");
    moreLink.className = "more-link";
    moreLink.textContent = "\uB354 \uBCF4\uAE30";
    const currentCoinSymbol = window.location.hash.split("/")[1] || "BTC";
    moreLink.href = `#discussion/${currentCoinSymbol}`;
    postsColumnDiv.appendChild(postsListEl);
    postsColumnDiv.appendChild(moreLink);
    return postsColumnDiv;
}

},{"../app/api/conapi.js":"pTw2w","./_ChartHelpers.js":"8N1Va","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8N1Va":[function(require,module,exports,__globalThis) {
// pages/_ChartHelpers.js
// 임시 캔들스틱 데이터 생성 (날짜, 시, 고, 저, 종) - 카테고리 축용
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// 비트코인 가격 차트 (라인 차트로 변경) 생성 함수 - 카테고리 축 사용
parcelHelpers.export(exports, "createBtcPriceChart", ()=>createBtcPriceChart);
// MA(이동평균선) 차트 생성 함수 (기술 지표 영역용)
parcelHelpers.export(exports, "createMaChart", ()=>createMaChart);
// 단순 라인 차트 생성 함수 (환율, 금 시세용) - 카테고리 축 사용
parcelHelpers.export(exports, "createSimpleLineChart", ()=>createSimpleLineChart);
function generateCandlestickData(count = 60) {
    const data = [];
    let date = new Date();
    date.setDate(date.getDate() - count);
    let lastClose = 50000 + Math.random() * 10000;
    for(let i = 0; i < count; i++){
        const open = lastClose + (Math.random() - 0.5) * 1000;
        const close = open + (Math.random() - 0.5) * 2000;
        const high = Math.max(open, close) + Math.random() * 500;
        const low = Math.min(open, close) - Math.random() * 500;
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dateLabel = `${month}/${day}`;
        data.push({
            x: dateLabel,
            o: open,
            h: high,
            l: low,
            c: close
        });
        lastClose = close;
        date.setDate(date.getDate() + 1);
    }
    return data;
}
// 임시 MA 데이터 생성 (캔들스틱 데이터 기반) - 카테고리 축용
function calculateMA(ohlcData, period = 10) {
    const maData = [];
    if (!ohlcData || ohlcData.length < period) return maData;
    for(let i = period - 1; i < ohlcData.length; i++){
        let sum = 0;
        for(let j = 0; j < period; j++){
            // ohlcData의 각 요소에 'c'(종가) 속성이 있어야 함
            if (typeof ohlcData[i - j].c === 'undefined') {
                console.error("calculateMA: ohlcData item is missing 'c' property.", ohlcData[i - j]);
                return []; // 에러 발생 시 빈 배열 반환
            }
            sum += ohlcData[i - j].c;
        }
        maData.push({
            x: ohlcData[i].x,
            y: sum / period
        });
    }
    return maData;
}
// 임시 라인 차트 데이터 생성 - 카테고리 축용 (환율, 금 시세용)
function generateLineData(count = 60, minVal = 1000, maxVal = 1500) {
    const data = [];
    let date = new Date();
    date.setDate(date.getDate() - count);
    for(let i = 0; i < count; i++){
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dateLabel = `${month}/${day}`;
        data.push({
            x: dateLabel,
            y: Math.random() * (maxVal - minVal) + minVal
        });
        date.setDate(date.getDate() + 1);
    }
    return data;
}
function createBtcPriceChart(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas with id ${canvasId} not found for BTC Price Chart.`);
        return null;
    }
    const ctx = canvas.getContext("2d");
    // MA 계산을 위해 전체 OHLC 데이터 생성
    const candlestickRawData = generateCandlestickData(60);
    // 라인 차트를 위해 종가(c)만 활용
    const lineChartData = candlestickRawData.map((d)=>({
            x: d.x,
            y: d.c
        }));
    const chart = new Chart(ctx, {
        type: "line",
        data: {
            datasets: [
                {
                    label: "Bitcoin Price (Close)",
                    data: lineChartData,
                    borderColor: "rgb(54, 162, 235)",
                    tension: 0.1,
                    borderWidth: 2,
                    pointRadius: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: "category"
                },
                y: {
                    beginAtZero: false
                }
            },
            plugins: {
                legend: {
                    display: true
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    });
    // MA 차트 생성 시 원본 OHLC 데이터를 사용하기 위해 차트 객체에 저장
    chart._fullCandlestickDataForMA = candlestickRawData;
    return chart;
}
function createMaChart(canvasId, basePriceData, period = 10, label = `MA (${period})`) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas with id ${canvasId} not found for MA Chart.`);
        return null;
    }
    // basePriceData는 OHLC 형태여야 하며, 각 요소는 'x'와 'c' 속성을 가져야 함
    if (!basePriceData || basePriceData.length === 0 || typeof basePriceData[0].c === 'undefined' || typeof basePriceData[0].x === 'undefined') {
        console.warn(`No valid basePriceData (missing 'c' or 'x' property, or empty) provided for MA chart on ${canvasId}`);
        return null;
    }
    const ctx = canvas.getContext("2d");
    const maData = calculateMA(basePriceData, period);
    if (maData.length === 0) console.warn(`Not enough data to calculate MA (${period}) for ${canvasId}. MA Data length: ${maData.length}, Base Data length: ${basePriceData.length}`);
    return new Chart(ctx, {
        type: "line",
        data: {
            datasets: [
                {
                    label: label,
                    data: maData,
                    borderColor: "orange",
                    borderWidth: 1.5,
                    fill: false,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: "category"
                },
                y: {
                    beginAtZero: false
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    });
}
function createSimpleLineChart(canvasId, label, minVal, maxVal) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas with id ${canvasId} not found for Simple Line Chart.`);
        return null;
    }
    const ctx = canvas.getContext("2d");
    const lineData = generateLineData(60, minVal, maxVal);
    return new Chart(ctx, {
        type: "line",
        data: {
            datasets: [
                {
                    label: label,
                    data: lineData,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1,
                    borderWidth: 2,
                    pointRadius: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: "category"
                },
                y: {
                    beginAtZero: false
                }
            },
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4AW9f":[function(require,module,exports,__globalThis) {
// src/pages/InvestmentSimulation.js
// 임시 API 모의 함수 (실제 구현 시 삭제 또는 주석 처리)
// 실제 프로젝트에서는 이 함수들을 공통 API 모듈 (예: ../app/api/conapi.js)로 옮기거나,
// 해당 모듈에서 import하여 사용하는 것이 좋습니다.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// --- 라우터에서 호출할 메인 함수 ---
parcelHelpers.export(exports, "renderInvestmentSimulationPage", ()=>renderInvestmentSimulationPage);
const fetchCoinList = async ()=>{
    return new Promise((resolve)=>setTimeout(()=>resolve([
                {
                    id: 'bitcoin',
                    name: 'Bitcoin (BTC)',
                    symbol: 'BTC'
                },
                {
                    id: 'ethereum',
                    name: 'Ethereum (ETH)',
                    symbol: 'ETH'
                },
                {
                    id: 'dogecoin',
                    name: 'Dogecoin (DOGE)',
                    symbol: 'DOGE'
                }
            ]), 500));
};
const fetchHistoricalData = async (coinId, days)=>{
    return new Promise((resolve)=>setTimeout(()=>{
            const prices = [];
            let price = Math.random() * 50000 + 10000;
            for(let i = 0; i < days; i++){
                prices.push(price);
                price *= 1 + (Math.random() - 0.48) * 0.1; // 약간의 변동성 추가
            }
            resolve(prices.reverse()); // 최신 데이터가 마지막에 오도록
        }, 1000));
};
// --- 페이지 상태 변수 ---
let appState = {
    coins: [],
    selectedCoinId: '',
    investmentAmount: 1000,
    investmentPeriod: 30,
    simulationResult: null,
    isLoading: false,
    error: ''
};
// --- DOM 요소 참조 변수 ---
let pageElements = {
    container: null,
    coinSelect: null,
    amountInput: null,
    periodInput: null,
    simulateButton: null,
    errorMessage: null,
    resultsArea: null
};
// --- 메타 정보 업데이트 함수 (Helmet 대체) ---
function updateMeta(title, description) {
    document.title = title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;
}
// --- UI 렌더링 함수 ---
// 전체 페이지 레이아웃 생성
function createPageLayout(appContainer) {
    appContainer.innerHTML = ''; // 이전 내용 지우기
    updateMeta("\uC218\uC775\uB960 \uC608\uCE21 \uC2DC\uBBAC\uB808\uC774\uC158 - My Crypto Tracker", "\uC120\uD0DD\uD55C \uC554\uD638\uD654\uD3D0\uC5D0 \uB300\uD55C \uD22C\uC790 \uC218\uC775\uB960\uC744 \uC608\uCE21\uD574\uBCF4\uC138\uC694.");
    pageElements.container = document.createElement('div');
    pageElements.container.className = 'simulation-page-container';
    // 헤더 생성
    const headerEl = document.createElement('header');
    headerEl.className = 'page-header';
    headerEl.innerHTML = `
    <h2>\u{C218}\u{C775}\u{B960} \u{C608}\u{CE21} \u{C2DC}\u{BBAC}\u{B808}\u{C774}\u{C158}</h2>
    <p>\u{ACFC}\u{AC70} \u{B370}\u{C774}\u{D130}\u{B97C} \u{AE30}\u{BC18}\u{C73C}\u{B85C} \u{BBF8}\u{B798} \u{D22C}\u{C790} \u{C218}\u{C775}\u{B960}\u{C744} \u{C608}\u{CE21}\u{D574} \u{BCF4}\u{C138}\u{C694}.</p>
  `;
    pageElements.container.appendChild(headerEl);
    // 입력 폼 생성
    const formContainerEl = createFormElement();
    pageElements.container.appendChild(formContainerEl);
    // 오류 메시지 영역
    pageElements.errorMessage = document.createElement('p');
    pageElements.errorMessage.className = 'error-message';
    pageElements.errorMessage.style.display = 'none';
    pageElements.container.appendChild(pageElements.errorMessage);
    // 결과 표시 영역
    pageElements.resultsArea = document.createElement('div');
    pageElements.resultsArea.className = 'simulation-results-area';
    pageElements.container.appendChild(pageElements.resultsArea);
    appContainer.appendChild(pageElements.container);
}
// 입력 폼 요소 생성
function createFormElement() {
    const formContainer = document.createElement('div');
    formContainer.className = 'simulation-form-container';
    const formGrid = document.createElement('div');
    formGrid.className = 'form-grid';
    // 코인 선택
    const coinGroup = document.createElement('div');
    coinGroup.className = 'form-group';
    const coinLabel = document.createElement('label');
    coinLabel.htmlFor = 'coin-select';
    coinLabel.textContent = "\uCF54\uC778 \uC120\uD0DD:";
    pageElements.coinSelect = document.createElement('select');
    pageElements.coinSelect.id = 'coin-select';
    pageElements.coinSelect.addEventListener('change', (e)=>{
        appState.selectedCoinId = e.target.value;
    });
    coinGroup.appendChild(coinLabel);
    coinGroup.appendChild(pageElements.coinSelect);
    formGrid.appendChild(coinGroup);
    // 투자 금액
    const amountGroup = document.createElement('div');
    amountGroup.className = 'form-group';
    const amountLabel = document.createElement('label');
    amountLabel.htmlFor = 'investment-amount';
    amountLabel.textContent = "\uD22C\uC790 \uAE08\uC561 ($):";
    pageElements.amountInput = document.createElement('input');
    pageElements.amountInput.type = 'number';
    pageElements.amountInput.id = 'investment-amount';
    pageElements.amountInput.placeholder = "\uC608: 1000";
    pageElements.amountInput.min = '1';
    pageElements.amountInput.addEventListener('input', (e)=>{
        appState.investmentAmount = parseFloat(e.target.value) || 0;
    });
    amountGroup.appendChild(amountLabel);
    amountGroup.appendChild(pageElements.amountInput);
    formGrid.appendChild(amountGroup);
    // 투자 기간
    const periodGroup = document.createElement('div');
    periodGroup.className = 'form-group';
    const periodLabel = document.createElement('label');
    periodLabel.htmlFor = 'investment-period';
    periodLabel.textContent = "\uD22C\uC790 \uAE30\uAC04 (\uC77C):";
    pageElements.periodInput = document.createElement('input');
    pageElements.periodInput.type = 'number';
    pageElements.periodInput.id = 'investment-period';
    pageElements.periodInput.placeholder = "\uC608: 30";
    pageElements.periodInput.min = '1';
    pageElements.periodInput.addEventListener('input', (e)=>{
        appState.investmentPeriod = parseInt(e.target.value, 10) || 0;
    });
    periodGroup.appendChild(periodLabel);
    periodGroup.appendChild(pageElements.periodInput);
    formGrid.appendChild(periodGroup);
    formContainer.appendChild(formGrid);
    // 예측 버튼
    pageElements.simulateButton = document.createElement('button');
    pageElements.simulateButton.className = 'simulation-button';
    pageElements.simulateButton.addEventListener('click', handleSimulation);
    formContainer.appendChild(pageElements.simulateButton);
    return formContainer;
}
// 코인 선택 옵션 채우기
function populateCoinSelect() {
    if (!pageElements.coinSelect) return;
    pageElements.coinSelect.innerHTML = ''; // 기존 옵션 제거
    appState.coins.forEach((coin)=>{
        const option = document.createElement('option');
        option.value = coin.id; // API 응답의 id 사용
        option.textContent = `${coin.name} (${coin.symbol})`;
        if (coin.id === appState.selectedCoinId) option.selected = true;
        pageElements.coinSelect.appendChild(option);
    });
    // selectedCoinId가 유효하지 않거나 설정되지 않은 경우, 목록의 첫 번째 코인을 기본값으로 설정
    if (!appState.coins.find((c)=>c.id === appState.selectedCoinId) && appState.coins.length > 0) {
        appState.selectedCoinId = appState.coins[0].id;
        pageElements.coinSelect.value = appState.selectedCoinId;
    }
}
// 폼 입력 상태 업데이트 (활성화/비활성화, 값 설정)
function updateFormInputsState() {
    if (pageElements.coinSelect) {
        pageElements.coinSelect.disabled = appState.isLoading;
        pageElements.coinSelect.value = appState.selectedCoinId;
    }
    if (pageElements.amountInput) {
        pageElements.amountInput.value = appState.investmentAmount;
        pageElements.amountInput.disabled = appState.isLoading;
    }
    if (pageElements.periodInput) {
        pageElements.periodInput.value = appState.investmentPeriod;
        pageElements.periodInput.disabled = appState.isLoading;
    }
    if (pageElements.simulateButton) {
        pageElements.simulateButton.disabled = appState.isLoading;
        pageElements.simulateButton.innerHTML = appState.isLoading ? `<span class="spinner-sm" role="status" aria-hidden="true"></span> \u{ACC4}\u{C0B0} \u{C911}...` : "\uC608\uCE21 \uC2DC\uC791\uD558\uAE30";
    }
}
// 오류 메시지 표시 업데이트
function updateErrorMessage() {
    if (!pageElements.errorMessage) return;
    pageElements.errorMessage.textContent = appState.error;
    pageElements.errorMessage.style.display = appState.error ? 'block' : 'none';
}
// 결과 영역 업데이트
function updateResultsArea() {
    if (!pageElements.resultsArea) return;
    pageElements.resultsArea.innerHTML = ''; // 이전 내용 지우기
    if (appState.isLoading) pageElements.resultsArea.innerHTML = `
      <div class="loading-indicator">
        <div class="spinner-lg" role="status"></div>
        <p>\u{B370}\u{C774}\u{D130}\u{B97C} \u{BD84}\u{C11D}\u{D558}\u{ACE0} \u{C608}\u{CE21}\u{D558}\u{B294} \u{C911}\u{C785}\u{B2C8}\u{B2E4}...</p>
      </div>`;
    else if (appState.simulationResult) {
        const { coinName, coinSymbol, initialInvestment, finalValue, profitOrLoss, returnRate, periodDays, futurePrice, initialPrice } = appState.simulationResult;
        const resultContainer = document.createElement('div');
        resultContainer.className = 'prediction-container';
        resultContainer.innerHTML = `
      <h3>\u{1F4C8} ${coinName} \u{D22C}\u{C790} \u{C608}\u{CE21} \u{ACB0}\u{ACFC}</h3>
      <div class="result-summary">
        <p><strong>${periodDays}\u{C77C} \u{D6C4} \u{C608}\u{C0C1} \u{ACB0}\u{ACFC}:</strong></p>
        <div class="result-grid">
          <div class="result-item">
            <span class="result-label">\u{CD08}\u{AE30} \u{D22C}\u{C790}\u{AE08}</span>
            <span class="result-value">$${initialInvestment.toLocaleString()}</span>
          </div>
          <div class="result-item">
            <span class="result-label">\u{C608}\u{C0C1} \u{C790}\u{C0B0} \u{AC00}\u{CE58}</span>
            <span class="result-value highlight-value">$${finalValue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}</span>
          </div>
          <div class="result-item">
            <span class="result-label">\u{C608}\u{C0C1} \u{C218}\u{C775}/\u{C190}\u{C2E4}</span>
            <span class="result-value ${profitOrLoss >= 0 ? 'profit' : 'loss'}">
              $${profitOrLoss.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}
            </span>
          </div>
          <div class="result-item">
            <span class="result-label">\u{C608}\u{C0C1} \u{C218}\u{C775}\u{B960}</span>
            <span class="result-value ${returnRate >= 0 ? 'profit' : 'loss'}">
              ${returnRate.toFixed(2)}%
            </span>
          </div>
          <div class="result-item">
            <span class="result-label">${coinSymbol} \u{C2DC}\u{C791} \u{C2DC}\u{C810} \u{AC00}\u{ACA9}</span>
            <span class="result-value">$${initialPrice.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 6
        })}</span>
          </div>
           <div class="result-item">
            <span class="result-label">${coinSymbol} ${periodDays}\u{C77C} \u{D6C4} \u{C608}\u{C0C1} \u{AC00}\u{ACA9}</span>
            <span class="result-value">$${futurePrice.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 6
        })}</span>
          </div>
        </div>
      </div>
      <div class="disclaimer">
        <p>\u{C774} \u{C608}\u{CE21}\u{C740} \u{ACFC}\u{AC70} \u{B370}\u{C774}\u{D130}\u{C640} \u{B2E8}\u{C21C} \u{BCC0}\u{B3D9}\u{C131} \u{BAA8}\u{B378}\u{C744} \u{AE30}\u{BC18}\u{C73C}\u{B85C} \u{D55C} \u{CD94}\u{C815}\u{CE58}\u{C774}\u{BA70}, \u{C2E4}\u{C81C} \u{D22C}\u{C790} \u{C218}\u{C775}\u{C744} \u{BCF4}\u{C7A5}\u{D558}\u{C9C0} \u{C54A}\u{C2B5}\u{B2C8}\u{B2E4}. \u{BAA8}\u{B4E0} \u{D22C}\u{C790} \u{ACB0}\u{C815}\u{C740} \u{BCF8}\u{C778}\u{C758} \u{D310}\u{B2E8}\u{ACFC} \u{CC45}\u{C784} \u{D558}\u{C5D0} \u{C774}\u{B8E8}\u{C5B4}\u{C838}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.</p>
      </div>`;
        pageElements.resultsArea.appendChild(resultContainer);
    } else pageElements.resultsArea.innerHTML = `
      <div class="initial-info-container">
        <div class="initial-info-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="64px" height="64px">
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
            <path d="M11 7h2v6h-2zm0 8h2v2h-2z"/>
            <path d="M16.293 9.293 14.5 11.086l-2.293-2.293-3.207 3.207 1.414 1.414L12.5 11.336l2.293 2.293 2.5-2.5.707.707-3.207 3.207-1.414-1.414L14.5 12.707l-2.293-2.293-1.793 1.793-1.414-1.414 3.207-3.207L14.5 9.086l1.793-1.793zM7.5 14.086l1.793-1.793 1.414 1.414-1.793 1.793-1.414-1.414z"/>
          </svg>
        </div>
        <h3>\u{D22C}\u{C790}\u{B97C} \u{C2DC}\u{C791}\u{D558}\u{AE30} \u{C804}\u{C5D0} \u{C608}\u{CE21}\u{D574}\u{BCF4}\u{C138}\u{C694}!</h3>
        <p>\u{C120}\u{D0DD}\u{D55C} \u{CF54}\u{C778}, \u{D22C}\u{C790}\u{AE08}\u{C561}, \u{AE30}\u{AC04}\u{C744} \u{C785}\u{B825}\u{D558}\u{ACE0} '\u{C608}\u{CE21} \u{C2DC}\u{C791}\u{D558}\u{AE30}' \u{BC84}\u{D2BC}\u{C744} \u{B204}\u{B974}\u{BA74}<br/>\u{C608}\u{C0C1} \u{C218}\u{C775}\u{B960}\u{ACFC} \u{BBF8}\u{B798} \u{AC00}\u{CE58}\u{B97C} \u{D655}\u{C778}\u{D560} \u{C218} \u{C788}\u{C2B5}\u{B2C8}\u{B2E4}.</p>
        <small>\u{BCF8} \u{C2DC}\u{BBAC}\u{B808}\u{C774}\u{C158}\u{C740} \u{ACFC}\u{AC70} \u{B370}\u{C774}\u{D130}\u{B97C} \u{AE30}\u{BC18}\u{C73C}\u{B85C} \u{D558}\u{BA70}, \u{C2E4}\u{C81C} \u{D22C}\u{C790} \u{ACB0}\u{ACFC}\u{C640} \u{B2E4}\u{B97C} \u{C218} \u{C788}\u{C2B5}\u{B2C8}\u{B2E4}. \u{D22C}\u{C790} \u{ACB0}\u{C815}\u{C740} \u{C2E0}\u{C911}\u{D558}\u{AC8C} \u{D558}\u{C2DC}\u{AE30} \u{BC14}\u{B78D}\u{B2C8}\u{B2E4}.</small>
      </div>`;
}
// --- 이벤트 핸들러 및 로직 ---
async function handleSimulation() {
    if (!appState.selectedCoinId || !appState.investmentAmount || !appState.investmentPeriod) {
        appState.error = "\uBAA8\uB4E0 \uD544\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.";
        updateErrorMessage();
        return;
    }
    if (appState.investmentAmount <= 0) {
        appState.error = "\uD22C\uC790 \uAE08\uC561\uC740 0\uBCF4\uB2E4 \uCEE4\uC57C \uD569\uB2C8\uB2E4.";
        updateErrorMessage();
        return;
    }
    if (appState.investmentPeriod <= 0) {
        appState.error = "\uD22C\uC790 \uAE30\uAC04\uC740 0\uBCF4\uB2E4 \uCEE4\uC57C \uD569\uB2C8\uB2E4.";
        updateErrorMessage();
        return;
    }
    appState.isLoading = true;
    appState.error = '';
    appState.simulationResult = null;
    updateFormInputsState();
    updateErrorMessage();
    updateResultsArea(); // 로딩 상태 표시
    try {
        const historicalData = await fetchHistoricalData(appState.selectedCoinId, appState.investmentPeriod);
        if (historicalData.length < 2) throw new Error("\uC218\uC775\uB960 \uACC4\uC0B0\uC5D0 \uCDA9\uBD84\uD55C \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
        const initialPrice = historicalData[0];
        const finalPrice = historicalData[historicalData.length - 1];
        const coin = appState.coins.find((c)=>c.id === appState.selectedCoinId);
        const coinSymbol = coin ? coin.symbol : appState.selectedCoinId.toUpperCase();
        const coinName = coin ? coin.name : appState.selectedCoinId;
        const profitOrLoss = appState.investmentAmount / initialPrice * finalPrice - appState.investmentAmount;
        const returnRate = profitOrLoss / appState.investmentAmount * 100;
        const futurePrice = finalPrice * (1 + (Math.random() - 0.45) * 0.2); // 임의 변동성
        appState.simulationResult = {
            coinName,
            coinSymbol,
            initialInvestment: parseFloat(appState.investmentAmount),
            finalValue: parseFloat(appState.investmentAmount) + profitOrLoss,
            profitOrLoss,
            returnRate,
            periodDays: parseInt(appState.investmentPeriod, 10),
            futurePrice,
            initialPrice
        };
    } catch (err) {
        appState.error = "\uC2DC\uBBAC\uB808\uC774\uC158 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4: " + err.message;
        console.error(err);
    } finally{
        appState.isLoading = false;
        updateFormInputsState();
        updateErrorMessage();
        updateResultsArea(); // 결과 또는 초기 메시지 표시
    }
}
// --- 페이지 초기화 ---
async function initializePage(urlCoinSymbolParam) {
    // 상태 초기화
    appState = {
        coins: [],
        selectedCoinId: urlCoinSymbolParam || '',
        investmentAmount: 1000,
        investmentPeriod: 30,
        simulationResult: null,
        isLoading: true,
        error: ''
    };
    updateFormInputsState(); // 입력 필드 초기 상태 (로딩 중이므로 비활성화)
    updateResultsArea(); // 초기 로딩 메시지 또는 안내
    try {
        const coinListFromAPI = await fetchCoinList();
        appState.coins = coinListFromAPI;
        // URL 파라미터로 전달된 코인이 유효한지 확인하고 selectedCoinId 설정
        if (urlCoinSymbolParam) {
            const foundCoin = appState.coins.find((c)=>c.symbol === urlCoinSymbolParam || c.id === urlCoinSymbolParam);
            if (foundCoin) appState.selectedCoinId = foundCoin.id;
            else if (appState.coins.length > 0) appState.selectedCoinId = appState.coins[0].id;
        } else if (appState.coins.length > 0) appState.selectedCoinId = appState.coins[0].id;
        populateCoinSelect(); // 코인 목록으로 <select> 채우기
    } catch (err) {
        appState.error = "\uCF54\uC778 \uBAA9\uB85D\uC744 \uBD88\uB7EC\uC624\uB294 \uB370 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";
        console.error(err);
        updateErrorMessage();
    } finally{
        appState.isLoading = false;
        updateFormInputsState(); // 입력 필드 활성화 및 값 설정
        updateResultsArea(); // 초기 안내 메시지 표시 (로딩 완료)
    }
}
function renderInvestmentSimulationPage(appContainer, param) {
    createPageLayout(appContainer);
    initializePage(param); // param은 URL에서 전달된 코인 심볼일 수 있음
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5u1UV":[function(require,module,exports,__globalThis) {
// pages/Discussion.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderDiscussionPage", ()=>renderDiscussionPage);
var _conapiJs = require("../app/api/conapi.js");
// 샘플 게시글 데이터 (PostDetail.js에서도 이와 유사한 데이터를 사용)
const samplePosts = [
    {
        id: 1,
        coinSymbol: "BTC",
        title: "\uBE44\uD2B8\uCF54\uC778 \uC9C0\uAE08\uC774\uB77C\uB3C4 \uD0C0\uC57C\uD560\uAE4C\uC694? \uBD84\uC704\uAE30\uAC00 \uC2EC\uC0C1\uCE58 \uC54A\uB124\uC694",
        author: "\uCF54\uB9B0\uC774\uD0D0\uD5D8\uB300",
        date: "2025-05-11 10:30",
        views: 1245,
        likes: 78,
        commentsCount: 32,
        prediction: "\uC0C1\uC2B9",
        content: "\uCD5C\uADFC \uBE44\uD2B8\uCF54\uC778 \uAC00\uACA9 \uBCC0\uB3D9\uC131\uC774 \uCEE4\uC9C0\uBA74\uC11C \uB9CE\uC740 \uBD84\uB4E4\uC774 \uACE0\uBBFC\uC774\uC2E4 \uAC83 \uAC19\uC2B5\uB2C8\uB2E4. \uC800\uB294 \uC7A5\uAE30\uC801\uC73C\uB85C \uC6B0\uC0C1\uD5A5 \uD560 \uAC83\uC774\uB77C\uACE0 \uBCF4\uB294\uB370, \uC5EC\uB7EC\uBD84\uC758 \uC0DD\uAC01\uC740 \uC5B4\uB5A0\uC2E0\uAC00\uC694? \uD568\uAED8 \uC774\uC57C\uAE30 \uB098\uB220\uBD10\uC694!"
    },
    {
        id: 2,
        coinSymbol: "ETH",
        title: "\uC774\uB354\uB9AC\uC6C0, \uB2E4\uC74C\uC8FC \uC911\uC694\uD55C \uBC1C\uD45C \uC608\uC815! \uBBF8\uB9AC \uC120\uC810\uD558\uC138\uC694",
        author: "\uC815\uBCF4\uBD84\uC11D\uAC00",
        date: "2025-05-10 15:45",
        views: 982,
        likes: 56,
        commentsCount: 24,
        prediction: "\uC0C1\uC2B9",
        content: "\uC774\uB354\uB9AC\uC6C0 \uC7AC\uB2E8\uC5D0\uC11C \uB2E4\uC74C \uC8FC \uC911\uB300 \uBC1C\uD45C\uAC00 \uC788\uC744 \uC608\uC815\uC774\uB77C\uB294 \uC18C\uC2DD\uC785\uB2C8\uB2E4. \uC774\uBC88 \uBC1C\uD45C \uB0B4\uC6A9\uC5D0 \uB530\uB77C \uC2DC\uC7A5\uC5D0 \uD070 \uD30C\uC7A5\uC774 \uC608\uC0C1\uB418\uB2C8, \uAD00\uC2EC\uC788\uAC8C \uC9C0\uCF1C\uBCF4\uC2DC\uB294 \uAC83\uC774 \uC88B\uACA0\uC2B5\uB2C8\uB2E4."
    },
    {
        id: 3,
        coinSymbol: "XRP",
        title: "\uB9AC\uD50C \uC18C\uC1A1 \uACB0\uACFC \uC784\uBC15? \uB2E8\uAE30 \uBCC0\uB3D9\uC131 \uC8FC\uC758\uD558\uC138\uC694",
        author: "\uBC95\uB960\uC804\uBB38\uAC00",
        date: "2025-05-09 09:12",
        views: 756,
        likes: 23,
        commentsCount: 41,
        prediction: "\uC911\uB9BD",
        content: "\uB9AC\uD50C\uACFC SEC \uAC04\uC758 \uC18C\uC1A1 \uACB0\uACFC\uAC00 \uACE7 \uB098\uC62C \uAC83\uC774\uB77C\uB294 \uC804\uB9DD\uC774 \uB098\uC624\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uACB0\uACFC\uC5D0 \uB530\uB77C \uAC00\uACA9\uC774 \uAE09\uB4F1\uB77D\uD560 \uC218 \uC788\uC73C\uB2C8, \uD22C\uC790\uC5D0 \uAC01\uBCC4\uD788 \uC720\uC758\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4."
    },
    {
        id: 4,
        coinSymbol: "SOL",
        title: "\uC194\uB77C\uB098 \uAE30\uBC18 \uBC08\uCF54\uC778, \uB2E4\uC2DC \uD55C\uBC88 \uBD88\uC7A5 \uC62C\uAE4C\uC694?",
        author: "\uBC08\uCF54\uC778\uD5CC\uD130",
        date: "2025-05-08 18:20",
        views: 634,
        likes: 89,
        commentsCount: 15,
        prediction: "\uC0C1\uC2B9",
        content: "\uCD5C\uADFC \uC194\uB77C\uB098 \uB124\uD2B8\uC6CC\uD06C\uC758 \uC548\uC815\uC131\uC774 \uD5A5\uC0C1\uB418\uBA74\uC11C \uC194\uB77C\uB098 \uAE30\uBC18 \uBC08\uCF54\uC778\uB4E4\uC774 \uB2E4\uC2DC \uC8FC\uBAA9\uBC1B\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC81C2\uC758 \uBD09\uD06C, \uB3C4\uADF8\uC704\uD504\uD587\uC774 \uB098\uC62C \uC218 \uC788\uC744\uC9C0 \uAE30\uB300\uB418\uB124\uC694."
    },
    {
        id: 5,
        coinSymbol: "BTC",
        title: "\uB2E8\uD0C0\uB9E4\uB9E4 \uC218\uC775 \uC778\uC99D\uD569\uB2C8\uB2E4 (\uD558\uB8E8 +15%)",
        author: "\uC2A4\uCE98\uD551\uB9C8\uC2A4\uD130",
        date: "2025-05-07 22:05",
        views: 2056,
        likes: 152,
        commentsCount: 68,
        prediction: "\uC911\uB9BD",
        content: "\uC624\uB298 \uC7A5\uC911 \uBCC0\uB3D9\uC131\uC744 \uC774\uC6A9\uD574\uC11C \uC9E7\uAC8C \uC218\uC775 \uC2E4\uD604\uD588\uC2B5\uB2C8\uB2E4. \uB9E4\uB9E4\uB294 \uC9E7\uACE0 \uAD75\uAC8C! \uB2E4\uB4E4 \uC131\uD22C\uD558\uC138\uC694~ (\uB9E4\uB9E4 \uB0B4\uC5ED \uCCA8\uBD80)"
    }
];
function renderDiscussionPage(container, coinSymbolParam = "") {
    container.innerHTML = "";
    const discussionContainer = document.createElement("div");
    discussionContainer.className = "discussion-container";
    const header = document.createElement("header");
    header.className = "discussion-header";
    const title = document.createElement("h2");
    // coinSymbolParam을 사용하여 현재 선택된 코인 정보 가져오기
    const selectedCoinInfo = (0, _conapiJs.COIN_LIST).find((c)=>c.symbol === coinSymbolParam);
    title.textContent = selectedCoinInfo ? `${selectedCoinInfo.graphicSymbol || selectedCoinInfo.symbol} ${selectedCoinInfo.name} \u{AC8C}\u{C2DC}\u{D310}` : "\uCEE4\uBBA4\uB2C8\uD2F0";
    header.appendChild(title);
    discussionContainer.appendChild(header);
    const tabMenu = document.createElement("div");
    tabMenu.className = "discussion-tabs";
    const tabs = [
        "\uC778\uAE30",
        "\uCD5C\uC2E0",
        "\uC0C1\uC2B9\uC608\uCE21",
        "\uD558\uB77D\uC608\uCE21"
    ];
    tabs.forEach((tabName)=>{
        const tabButton = document.createElement("button");
        tabButton.className = tabName === "\uC778\uAE30" ? "tab-button active" : "tab-button";
        tabButton.textContent = tabName;
        tabButton.addEventListener("click", (e)=>{
            document.querySelectorAll(".discussion-tabs .tab-button").forEach((btn)=>btn.classList.remove("active"));
            e.target.classList.add("active");
            filterDiscussions(tabName, postsList);
        });
        tabMenu.appendChild(tabButton);
    });
    discussionContainer.appendChild(tabMenu);
    const topControls = document.createElement("div");
    topControls.className = "discussion-top-controls";
    const coinFilter = document.createElement("div");
    coinFilter.className = "coin-filter";
    const filterLabel = document.createElement("label");
    filterLabel.htmlFor = "coin-filter-select";
    filterLabel.textContent = "\uC885\uBAA9:";
    coinFilter.appendChild(filterLabel);
    const selectCoin = document.createElement("select");
    selectCoin.id = "coin-filter-select";
    const allOption = document.createElement("option");
    allOption.value = "";
    allOption.textContent = "\uC804\uCCB4";
    selectCoin.appendChild(allOption);
    (0, _conapiJs.COIN_LIST).forEach((coin)=>{
        const option = document.createElement("option");
        option.value = coin.symbol;
        option.textContent = `${coin.name} (${coin.symbol})`;
        if (coin.symbol === coinSymbolParam) option.selected = true;
        selectCoin.appendChild(option);
    });
    selectCoin.addEventListener('change', (e)=>{
        window.location.hash = e.target.value ? `#discussion/${e.target.value}` : '#discussion';
    });
    coinFilter.appendChild(selectCoin);
    topControls.appendChild(coinFilter);
    const searchBox = document.createElement("div");
    searchBox.className = "search-box";
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "\uAC8C\uC2DC\uAE00 \uAC80\uC0C9...";
    searchBox.appendChild(searchInput);
    const searchButton = document.createElement("button");
    searchButton.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>`;
    searchButton.addEventListener("click", ()=>{
        alert(`"${searchInput.value}" \u{AC80}\u{C0C9} \u{ACB0}\u{ACFC} (\u{AD6C}\u{D604} \u{C608}\u{C815})`);
    });
    searchBox.appendChild(searchButton);
    topControls.appendChild(searchBox);
    const writeButton = document.createElement("button");
    writeButton.className = "write-button";
    writeButton.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg> \u{C0C8} \u{AE00} \u{C791}\u{C131}`;
    writeButton.addEventListener("click", ()=>{
        showWriteForm(coinSymbolParam); // 현재 필터링된 코인 심볼 전달
    });
    topControls.appendChild(writeButton);
    discussionContainer.appendChild(topControls);
    const postsArea = document.createElement("div");
    postsArea.className = "posts-area";
    const postsList = document.createElement("ul");
    postsList.className = "posts-list";
    // coinSymbolParam을 사용하여 초기 게시글 필터링
    createSamplePosts(postsList, coinSymbolParam);
    postsArea.appendChild(postsList);
    discussionContainer.appendChild(postsArea);
    const pagination = document.createElement("div");
    pagination.className = "pagination";
    for(let i = 1; i <= 5; i++){
        const pageLink = document.createElement("a");
        pageLink.href = "#";
        pageLink.textContent = i;
        if (i === 1) pageLink.className = "active";
        pagination.appendChild(pageLink);
    }
    discussionContainer.appendChild(pagination);
    container.appendChild(discussionContainer);
}
function createSamplePosts(listContainer, currentCoinSymbol = "") {
    listContainer.innerHTML = '';
    // 현재 선택된 코인 심볼에 따라 게시글 필터링
    const filteredPosts = currentCoinSymbol ? samplePosts.filter((post)=>post.coinSymbol === currentCoinSymbol) : samplePosts;
    if (filteredPosts.length === 0) {
        const noPostsMessage = document.createElement("p");
        noPostsMessage.className = "filter-message"; // 스타일 적용을 위한 클래스
        noPostsMessage.textContent = currentCoinSymbol ? `${(0, _conapiJs.COIN_LIST).find((c)=>c.symbol === currentCoinSymbol)?.name || currentCoinSymbol} \u{AD00}\u{B828} \u{AC8C}\u{C2DC}\u{AE00}\u{C774} \u{C544}\u{C9C1} \u{C5C6}\u{C2B5}\u{B2C8}\u{B2E4}.` : "\uAC8C\uC2DC\uAE00\uC774 \uC544\uC9C1 \uC5C6\uC2B5\uB2C8\uB2E4. \uCCAB \uAE00\uC744 \uC791\uC131\uD574\uBCF4\uC138\uC694!";
        listContainer.appendChild(noPostsMessage);
        return;
    }
    filteredPosts.forEach((post)=>{
        const postItem = document.createElement("li");
        postItem.className = "post-item";
        postItem.dataset.postId = post.id; // 데이터 속성으로 post ID 저장
        postItem.addEventListener('click', ()=>{
            // ✅ 상세 페이지로 이동
            window.location.hash = `post/${post.id}`;
        });
        const postCardHeader = document.createElement("div");
        postCardHeader.className = "post-card-header";
        const authorInfo = document.createElement("div");
        authorInfo.className = "post-author-info";
        const authorAvatar = document.createElement("span");
        authorAvatar.className = "post-author-avatar";
        authorAvatar.textContent = post.author.charAt(0).toUpperCase();
        const authorNameAndDate = document.createElement("div");
        authorNameAndDate.className = "post-author-name-date";
        const authorName = document.createElement("span");
        authorName.className = "post-author-name";
        authorName.textContent = post.author;
        const postDate = document.createElement("span");
        postDate.className = "post-date";
        postDate.textContent = post.date;
        authorNameAndDate.appendChild(authorName);
        authorNameAndDate.appendChild(postDate);
        authorInfo.appendChild(authorAvatar);
        authorInfo.appendChild(authorNameAndDate);
        const rightHeaderItems = document.createElement("div"); // 오른쪽 상단 요소들을 묶을 div
        rightHeaderItems.className = "post-card-header-right";
        if (post.prediction && post.prediction !== "\uC608\uCE21 \uC5C6\uC74C") {
            const predictionTag = document.createElement("span");
            predictionTag.className = `prediction-tag ${post.prediction}`;
            predictionTag.textContent = post.prediction;
            rightHeaderItems.appendChild(predictionTag);
        }
        // 코인 태그 추가 (게시글 데이터에 coinSymbol이 있다고 가정)
        if (post.coinSymbol) {
            const coin = (0, _conapiJs.COIN_LIST).find((c)=>c.symbol === post.coinSymbol);
            if (coin) {
                const coinTag = document.createElement("span");
                coinTag.className = "post-item-coin-tag";
                coinTag.textContent = `${coin.graphicSymbol || coin.symbol}`;
                coinTag.title = coin.name;
                rightHeaderItems.appendChild(coinTag);
            }
        }
        postCardHeader.appendChild(authorInfo);
        postCardHeader.appendChild(rightHeaderItems);
        const postCardBody = document.createElement("div");
        postCardBody.className = "post-card-body";
        const postTitle = document.createElement("h3");
        postTitle.className = "post-title";
        postTitle.textContent = post.title;
        const postExcerpt = document.createElement("p");
        postExcerpt.className = "post-excerpt";
        postExcerpt.textContent = post.content.substring(0, 120) + (post.content.length > 120 ? "..." : "");
        postCardBody.appendChild(postTitle);
        postCardBody.appendChild(postExcerpt);
        const postCardFooter = document.createElement("div");
        postCardFooter.className = "post-card-footer";
        const postStats = document.createElement("div");
        postStats.className = "post-stats";
        postStats.innerHTML = `
      <span><svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg> ${post.views}</span>
      <span><svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.07.07-.07-.07C7.32 14.48 4 11.61 4 8.5S6.01 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c1.99 0 4 2.52 4 5.5 0 3.11-3.32 5.98-7.97 10.05z"></path></svg> ${post.likes}</span>
      <span><svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"></path></svg> ${post.commentsCount}</span>
    `; // post.comments -> post.commentsCount
        const postActions = document.createElement("div");
        postActions.className = "post-actions";
        const likeButton = document.createElement("button");
        likeButton.className = "action-button like-button";
        likeButton.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.07.07-.07-.07C7.32 14.48 4 11.61 4 8.5S6.01 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c1.99 0 4 2.52 4 5.5 0 3.11-3.32 5.98-7.97 10.05z"></path></svg><span>\u{C88B}\u{C544}\u{C694}</span>`;
        const commentButton = document.createElement("button");
        commentButton.className = "action-button comment-button";
        commentButton.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"></path></svg><span>\u{B313}\u{AE00}</span>`;
        // 이벤트 전파 방지
        likeButton.addEventListener('click', (e)=>{
            e.stopPropagation();
            alert("\uC88B\uC544\uC694 \uAE30\uB2A5 \uAD6C\uD604 \uC608\uC815");
        });
        commentButton.addEventListener('click', (e)=>{
            e.stopPropagation();
            alert("\uB313\uAE00 \uAE30\uB2A5 \uAD6C\uD604 \uC608\uC815");
        });
        postActions.appendChild(likeButton);
        postActions.appendChild(commentButton);
        postCardFooter.appendChild(postStats);
        postCardFooter.appendChild(postActions);
        postItem.appendChild(postCardHeader);
        postItem.appendChild(postCardBody);
        postItem.appendChild(postCardFooter);
        listContainer.appendChild(postItem);
    });
}
function filterDiscussions(tabName, listContainer) {
    const currentCoinSymbol = document.getElementById("coin-filter-select")?.value || "";
    console.log(`${tabName} \u{D0ED} \u{C120}\u{D0DD}\u{B428}. \u{CF54}\u{C778}: ${currentCoinSymbol || "\uC804\uCCB4"}. \u{AC8C}\u{C2DC}\u{AE00} \u{D544}\u{D130}\u{B9C1} (\u{D604}\u{C7AC}\u{B294} \u{C0D8}\u{D50C}\u{B370}\u{C774}\u{D130} \u{C7AC}\u{B85C}\u{B4DC})`);
    // TODO: 실제 구현 시, API를 호출하여 해당 탭과 코인 필터에 맞는 데이터를 가져오고 listContainer를 업데이트.
    createSamplePosts(listContainer, currentCoinSymbol); // 필터링된 코인 심볼 전달
}
function showWriteForm(currentCoinSymbol = "") {
    const existingForm = document.querySelector(".write-form-overlay");
    if (existingForm) existingForm.remove();
    const writeFormOverlay = document.createElement("div");
    writeFormOverlay.className = "write-form-overlay";
    writeFormOverlay.addEventListener("click", (e)=>{
        if (e.target === writeFormOverlay) document.body.removeChild(writeFormOverlay);
    });
    const writeForm = document.createElement("div");
    writeForm.className = "write-form";
    const formHeader = document.createElement("h3");
    formHeader.textContent = "\uC0C8 \uAE00 \uC791\uC131";
    // 코인 선택 드롭다운 (글쓰기 폼 내부)
    const formCoinSelectLabel = document.createElement("label");
    formCoinSelectLabel.textContent = "\uCF54\uC778 \uC120\uD0DD (\uC120\uD0DD \uC0AC\uD56D):";
    formCoinSelectLabel.style.display = "block";
    formCoinSelectLabel.style.marginBottom = "5px";
    const formCoinSelect = document.createElement("select");
    formCoinSelect.style.width = "100%";
    formCoinSelect.style.marginBottom = "15px";
    const noCoinOption = document.createElement("option");
    noCoinOption.value = "";
    noCoinOption.textContent = "\uCF54\uC778 \uC120\uD0DD \uC548 \uD568";
    formCoinSelect.appendChild(noCoinOption);
    (0, _conapiJs.COIN_LIST).forEach((coin)=>{
        const option = document.createElement("option");
        option.value = coin.symbol;
        option.textContent = `${coin.name} (${coin.symbol})`;
        if (coin.symbol === currentCoinSymbol) option.selected = true;
        formCoinSelect.appendChild(option);
    });
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694";
    const contentTextarea = document.createElement("textarea");
    contentTextarea.placeholder = "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694";
    contentTextarea.rows = 8; // 줄 수 조정
    const predictionDiv = document.createElement('div');
    predictionDiv.style.marginBottom = '15px';
    predictionDiv.style.marginTop = '10px';
    const predictionLabel = document.createElement("label");
    predictionLabel.textContent = "\uC608\uCE21: ";
    predictionLabel.style.marginRight = "10px";
    const predictionSelect = document.createElement("select");
    [
        "\uC608\uCE21 \uC5C6\uC74C",
        "\uC0C1\uC2B9",
        "\uD558\uB77D",
        "\uC911\uB9BD"
    ].forEach((pred)=>{
        const option = document.createElement("option");
        option.value = pred;
        option.textContent = pred;
        predictionSelect.appendChild(option);
    });
    predictionDiv.appendChild(predictionLabel);
    predictionDiv.appendChild(predictionSelect);
    const buttonArea = document.createElement("div");
    buttonArea.className = "form-buttons";
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "\uCDE8\uC18C";
    cancelButton.className = "cancel-button";
    cancelButton.addEventListener("click", ()=>{
        document.body.removeChild(writeFormOverlay);
    });
    const submitButton = document.createElement("button");
    submitButton.textContent = "\uB4F1\uB85D";
    submitButton.className = "submit-button";
    submitButton.addEventListener("click", ()=>{
        if (!titleInput.value.trim() || !contentTextarea.value.trim()) {
            alert("\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.");
            return;
        }
        const newPost = {
            id: samplePosts.length + 1,
            coinSymbol: formCoinSelect.value,
            title: titleInput.value,
            author: "\uD604\uC7AC\uC0AC\uC6A9\uC790",
            date: new Date().toISOString().slice(0, 16).replace('T', ' '),
            views: 0,
            likes: 0,
            commentsCount: 0,
            prediction: predictionSelect.value === "\uC608\uCE21 \uC5C6\uC74C" ? "\uC911\uB9BD" : predictionSelect.value,
            content: contentTextarea.value
        };
        samplePosts.unshift(newPost); // 새 글을 맨 앞에 추가
        filterDiscussions(document.querySelector('.discussion-tabs .tab-button.active')?.textContent || "\uCD5C\uC2E0", document.querySelector('.posts-list')); // 목록 새로고침
        alert("\uAC8C\uC2DC\uAE00\uC774 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        document.body.removeChild(writeFormOverlay);
    });
    buttonArea.appendChild(cancelButton);
    buttonArea.appendChild(submitButton);
    writeForm.appendChild(formHeader);
    writeForm.appendChild(formCoinSelectLabel);
    writeForm.appendChild(formCoinSelect);
    writeForm.appendChild(titleInput);
    writeForm.appendChild(contentTextarea);
    writeForm.appendChild(predictionDiv);
    writeForm.appendChild(buttonArea);
    writeFormOverlay.appendChild(writeForm);
    document.body.appendChild(writeFormOverlay);
}

},{"../app/api/conapi.js":"pTw2w","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bojc3":[function(require,module,exports,__globalThis) {
// pages/PostDetail.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderPostDetailPage", ()=>renderPostDetailPage);
var _conapiJs = require("../app/api/conapi.js");
// Discussion.js와 동일한 샘플 데이터를 사용 (실제로는 API 호출 또는 props/상태 관리로 전달)
const samplePostsData = [
    {
        id: 1,
        coinSymbol: "BTC",
        title: "\uBE44\uD2B8\uCF54\uC778 \uC9C0\uAE08\uC774\uB77C\uB3C4 \uD0C0\uC57C\uD560\uAE4C\uC694? \uBD84\uC704\uAE30\uAC00 \uC2EC\uC0C1\uCE58 \uC54A\uB124\uC694",
        author: "\uCF54\uB9B0\uC774\uD0D0\uD5D8\uB300",
        date: "2025-05-11 10:30",
        views: 1245,
        likes: 78,
        commentsCount: 32,
        prediction: "\uC0C1\uC2B9",
        content: "\uCD5C\uADFC \uBE44\uD2B8\uCF54\uC778 \uAC00\uACA9 \uBCC0\uB3D9\uC131\uC774 \uCEE4\uC9C0\uBA74\uC11C \uB9CE\uC740 \uBD84\uB4E4\uC774 \uACE0\uBBFC\uC774\uC2E4 \uAC83 \uAC19\uC2B5\uB2C8\uB2E4. \uC800\uB294 \uC7A5\uAE30\uC801\uC73C\uB85C \uC6B0\uC0C1\uD5A5 \uD560 \uAC83\uC774\uB77C\uACE0 \uBCF4\uB294\uB370, \uC5EC\uB7EC\uBD84\uC758 \uC0DD\uAC01\uC740 \uC5B4\uB5A0\uC2E0\uAC00\uC694? \uD568\uAED8 \uC774\uC57C\uAE30 \uB098\uB220\uBD10\uC694!\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n\uB450 \uBC88\uC9F8 \uB2E8\uB77D\uC785\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uB294 \uC870\uAE08 \uB354 \uAE34 \uB0B4\uC6A9\uC774 \uB4E4\uC5B4\uAC08 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC8C\uC2DC\uAE00 \uC0C1\uC138 \uD398\uC774\uC9C0\uC5D0\uC11C\uB294 \uC804\uCCB4 \uB0B4\uC6A9\uC744 \uBCF4\uC5EC\uC8FC\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB4E4\uC774 \uCDA9\uBD84\uD55C \uC815\uBCF4\uB97C \uC5BB\uC744 \uC218 \uC788\uB3C4\uB85D \uC0C1\uC138\uD558\uAC8C \uC791\uC131\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4."
    },
    {
        id: 2,
        coinSymbol: "ETH",
        title: "\uC774\uB354\uB9AC\uC6C0, \uB2E4\uC74C\uC8FC \uC911\uC694\uD55C \uBC1C\uD45C \uC608\uC815! \uBBF8\uB9AC \uC120\uC810\uD558\uC138\uC694",
        author: "\uC815\uBCF4\uBD84\uC11D\uAC00",
        date: "2025-05-10 15:45",
        views: 982,
        likes: 56,
        commentsCount: 24,
        prediction: "\uC0C1\uC2B9",
        content: "\uC774\uB354\uB9AC\uC6C0 \uC7AC\uB2E8\uC5D0\uC11C \uB2E4\uC74C \uC8FC \uC911\uB300 \uBC1C\uD45C\uAC00 \uC788\uC744 \uC608\uC815\uC774\uB77C\uB294 \uC18C\uC2DD\uC785\uB2C8\uB2E4. \uC774\uBC88 \uBC1C\uD45C \uB0B4\uC6A9\uC5D0 \uB530\uB77C \uC2DC\uC7A5\uC5D0 \uD070 \uD30C\uC7A5\uC774 \uC608\uC0C1\uB418\uB2C8, \uAD00\uC2EC\uC788\uAC8C \uC9C0\uCF1C\uBCF4\uC2DC\uB294 \uAC83\uC774 \uC88B\uACA0\uC2B5\uB2C8\uB2E4. \n\n\uC0C1\uC138 \uB0B4\uC6A9\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4: [\uC0C1\uC138 \uB0B4\uC6A9] \uC774 \uBD80\uBD84\uC740 \uCD94\uD6C4 \uC5C5\uB370\uC774\uD2B8\uB420 \uC608\uC815\uC785\uB2C8\uB2E4."
    },
    {
        id: 3,
        coinSymbol: "XRP",
        title: "\uB9AC\uD50C \uC18C\uC1A1 \uACB0\uACFC \uC784\uBC15? \uB2E8\uAE30 \uBCC0\uB3D9\uC131 \uC8FC\uC758\uD558\uC138\uC694",
        author: "\uBC95\uB960\uC804\uBB38\uAC00",
        date: "2025-05-09 09:12",
        views: 756,
        likes: 23,
        commentsCount: 41,
        prediction: "\uC911\uB9BD",
        content: "\uB9AC\uD50C\uACFC SEC \uAC04\uC758 \uC18C\uC1A1 \uACB0\uACFC\uAC00 \uACE7 \uB098\uC62C \uAC83\uC774\uB77C\uB294 \uC804\uB9DD\uC774 \uB098\uC624\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uACB0\uACFC\uC5D0 \uB530\uB77C \uAC00\uACA9\uC774 \uAE09\uB4F1\uB77D\uD560 \uC218 \uC788\uC73C\uB2C8, \uD22C\uC790\uC5D0 \uAC01\uBCC4\uD788 \uC720\uC758\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. \n\n\uBC95\uB960\uC801\uC778 \uAD00\uC810\uC5D0\uC11C \uBCFC \uB54C, \uC774\uBC88 \uC18C\uC1A1\uC740 \uC554\uD638\uD654\uD3D0 \uC2DC\uC7A5 \uC804\uCCB4\uC5D0 \uD070 \uC601\uD5A5\uC744 \uBBF8\uCE60 \uC218 \uC788\uB294 \uC911\uC694\uD55C \uC0AC\uAC74\uC785\uB2C8\uB2E4."
    },
    {
        id: 4,
        coinSymbol: "SOL",
        title: "\uC194\uB77C\uB098 \uAE30\uBC18 \uBC08\uCF54\uC778, \uB2E4\uC2DC \uD55C\uBC88 \uBD88\uC7A5 \uC62C\uAE4C\uC694?",
        author: "\uBC08\uCF54\uC778\uD5CC\uD130",
        date: "2025-05-08 18:20",
        views: 634,
        likes: 89,
        commentsCount: 15,
        prediction: "\uC0C1\uC2B9",
        content: "\uCD5C\uADFC \uC194\uB77C\uB098 \uB124\uD2B8\uC6CC\uD06C\uC758 \uC548\uC815\uC131\uC774 \uD5A5\uC0C1\uB418\uBA74\uC11C \uC194\uB77C\uB098 \uAE30\uBC18 \uBC08\uCF54\uC778\uB4E4\uC774 \uB2E4\uC2DC \uC8FC\uBAA9\uBC1B\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC81C2\uC758 \uBD09\uD06C, \uB3C4\uADF8\uC704\uD504\uD587\uC774 \uB098\uC62C \uC218 \uC788\uC744\uC9C0 \uAE30\uB300\uB418\uB124\uC694. \n\n\uBC08\uCF54\uC778 \uD22C\uC790\uB294 \uB9E4\uC6B0 \uB192\uC740 \uBCC0\uB3D9\uC131\uC744 \uB3D9\uBC18\uD558\uBBC0\uB85C, \uC2E0\uC911\uD55C \uC811\uADFC\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."
    },
    {
        id: 5,
        coinSymbol: "BTC",
        title: "\uB2E8\uD0C0\uB9E4\uB9E4 \uC218\uC775 \uC778\uC99D\uD569\uB2C8\uB2E4 (\uD558\uB8E8 +15%)",
        author: "\uC2A4\uCE98\uD551\uB9C8\uC2A4\uD130",
        date: "2025-05-07 22:05",
        views: 2056,
        likes: 152,
        commentsCount: 68,
        prediction: "\uC911\uB9BD",
        content: "\uC624\uB298 \uC7A5\uC911 \uBCC0\uB3D9\uC131\uC744 \uC774\uC6A9\uD574\uC11C \uC9E7\uAC8C \uC218\uC775 \uC2E4\uD604\uD588\uC2B5\uB2C8\uB2E4. \uB9E4\uB9E4\uB294 \uC9E7\uACE0 \uAD75\uAC8C! \uB2E4\uB4E4 \uC131\uD22C\uD558\uC138\uC694~ (\uB9E4\uB9E4 \uB0B4\uC5ED \uCCA8\uBD80)\n\n\uCC28\uD2B8 \uBD84\uC11D\uACFC \uBE60\uB978 \uD310\uB2E8\uC774 \uB2E8\uD0C0 \uB9E4\uB9E4\uC758 \uD575\uC2EC\uC785\uB2C8\uB2E4. \uCCA8\uBD80\uB41C \uC774\uBBF8\uC9C0\uB97C \uD1B5\uD574 \uC2E4\uC81C \uB9E4\uB9E4 \uD0C0\uC810\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694."
    }
];
// 임시 댓글 데이터
const sampleComments = [
    {
        id: 1,
        postId: 1,
        author: "\uB313\uAE00\uB7EC1",
        date: "2025-05-11 11:00",
        content: "\uC88B\uC740 \uBD84\uC11D \uAC10\uC0AC\uD569\uB2C8\uB2E4! \uC800\uB3C4 \uC7A5\uAE30\uC801\uC73C\uB85C \uBCF4\uACE0 \uC788\uC5B4\uC694."
    },
    {
        id: 2,
        postId: 1,
        author: "BTC\uC2E0\uBD09\uC790",
        date: "2025-05-11 11:30",
        content: "\uBE44\uD2B8\uCF54\uC778\uC740 \uACB0\uAD6D \uC6B0\uC0C1\uD5A5\uC785\uB2C8\uB2E4. \uAC71\uC815\uB9C8\uC138\uC694!"
    },
    {
        id: 3,
        postId: 2,
        author: "\uC774\uB354\uCD5C\uACE0",
        date: "2025-05-10 16:00",
        content: "\uC815\uBCF4 \uAC10\uC0AC\uD569\uB2C8\uB2E4. \uAE30\uB300\uB418\uB124\uC694!"
    }
];
function renderPostDetailPage(container, postIdStr) {
    container.innerHTML = "";
    const postId = parseInt(postIdStr);
    const post = samplePostsForDetail.find((p)=>p.id === postId);
    const pageWrapper = document.createElement("div");
    pageWrapper.className = "post-detail-page-wrapper";
    if (!post) {
        pageWrapper.innerHTML = `<p class="error-message">\u{C694}\u{CCAD}\u{D558}\u{C2E0} \u{AC8C}\u{C2DC}\u{AE00}\u{C744} \u{CC3E}\u{C744} \u{C218} \u{C5C6}\u{C2B5}\u{B2C8}\u{B2E4}. (ID: ${postIdStr})</p>`;
        const backButton = document.createElement("button");
        backButton.className = "back-to-list-button top";
        backButton.textContent = "\uBAA9\uB85D\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30";
        backButton.onclick = ()=>{
            window.location.hash = "#discussion";
        };
        pageWrapper.insertBefore(backButton, pageWrapper.firstChild);
        container.appendChild(pageWrapper);
        return;
    }
    const coinInfo = (0, _conapiJs.COIN_LIST).find((c)=>c.symbol === post.coinSymbol);
    // 상단: 목록으로 가기 버튼
    const backButtonTop = document.createElement("button");
    backButtonTop.className = "back-to-list-button top";
    backButtonTop.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg> \u{BAA9}\u{B85D}\u{C73C}\u{B85C}`;
    backButtonTop.onclick = ()=>{
        window.location.hash = `#discussion${post.coinSymbol ? '/' + post.coinSymbol : ''}`;
    };
    pageWrapper.appendChild(backButtonTop);
    // 게시글 컨테이너
    const postDetailContainer = document.createElement("article");
    postDetailContainer.className = "post-detail-container";
    // 헤더
    const header = document.createElement("header");
    header.className = "post-detail-header";
    const title = document.createElement("h1");
    title.className = "post-detail-title";
    title.textContent = post.title;
    if (coinInfo) {
        const coinTag = document.createElement("span");
        coinTag.className = "post-detail-coin-tag";
        coinTag.textContent = `${coinInfo.graphicSymbol || coinInfo.symbol} ${coinInfo.name}`;
        coinTag.onclick = ()=>window.location.hash = `#coin/${coinInfo.symbol}`;
        header.appendChild(coinTag);
    }
    header.appendChild(title);
    // 메타 정보 (작성자, 날짜, 조회수 등)
    const metaInfo = document.createElement("div");
    metaInfo.className = "post-detail-meta";
    const authorAvatar = document.createElement("span");
    authorAvatar.className = "post-author-avatar detail-avatar"; // 추가 클래스
    authorAvatar.textContent = post.author.charAt(0).toUpperCase();
    const authorName = document.createElement("span");
    authorName.className = "post-author-name";
    authorName.textContent = post.author;
    const postDate = document.createElement("span");
    postDate.className = "post-date";
    postDate.textContent = `\u{C791}\u{C131}\u{C77C}: ${post.date}`;
    const views = document.createElement("span");
    views.className = "post-views";
    views.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg> ${post.views}`;
    if (post.prediction && post.prediction !== "\uC608\uCE21 \uC5C6\uC74C") {
        const predictionTag = document.createElement("span");
        predictionTag.className = `prediction-tag ${post.prediction} detail-tag`;
        predictionTag.textContent = post.prediction;
        metaInfo.appendChild(predictionTag);
    }
    metaInfo.appendChild(authorAvatar);
    metaInfo.appendChild(authorName);
    metaInfo.appendChild(postDate);
    metaInfo.appendChild(views);
    header.appendChild(metaInfo);
    postDetailContainer.appendChild(header);
    // 본문 내용
    const content = document.createElement("div");
    content.className = "post-detail-content";
    // content.textContent = post.content; // 단순 텍스트일 경우
    // HTML 내용을 허용하려면 innerHTML 사용 (보안 주의) 또는 Markdown 파서 사용
    // 여기서는 \n을 <br>로 변환하여 줄바꿈 표시
    content.innerHTML = post.content.replace(/\n/g, "<br>");
    postDetailContainer.appendChild(content);
    // 하단 액션 (좋아요, 공유 등 - 임시)
    const actions = document.createElement("div");
    actions.className = "post-detail-actions";
    const likeButton = document.createElement("button");
    likeButton.className = "action-button like-button";
    likeButton.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.07.07-.07-.07C7.32 14.48 4 11.61 4 8.5S6.01 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c1.99 0 4 2.52 4 5.5 0 3.11-3.32 5.98-7.97 10.05z"></path></svg> \u{C88B}\u{C544}\u{C694} (${post.likes})`;
    // TODO: 좋아요 기능 구현
    actions.appendChild(likeButton);
    // 다른 액션 버튼들 (예: 수정, 삭제 - 권한 필요)
    postDetailContainer.appendChild(actions);
    pageWrapper.appendChild(postDetailContainer);
    // 댓글 섹션
    const commentsSection = document.createElement("section");
    commentsSection.className = "comments-section";
    const commentsTitle = document.createElement("h3");
    commentsTitle.textContent = `\u{B313}\u{AE00} (${post.commentsCount || 0})`; // Discussion.js samplePosts에 commentsCount 추가 가정
    commentsSection.appendChild(commentsTitle);
    const commentForm = document.createElement("form");
    commentForm.className = "comment-form";
    const commentTextarea = document.createElement("textarea");
    commentTextarea.placeholder = "\uB313\uAE00\uC744 \uC785\uB825\uD558\uC138\uC694...";
    commentTextarea.rows = 3;
    const commentSubmitButton = document.createElement("button");
    commentSubmitButton.type = "submit";
    commentSubmitButton.textContent = "\uB313\uAE00 \uB4F1\uB85D";
    commentForm.appendChild(commentTextarea);
    commentForm.appendChild(commentSubmitButton);
    commentForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        if (commentTextarea.value.trim()) {
            alert(`\u{B313}\u{AE00}: "${commentTextarea.value}" (\u{B4F1}\u{B85D} \u{AE30}\u{B2A5} \u{AD6C}\u{D604} \u{C608}\u{C815})`);
            commentTextarea.value = "";
        // TODO: 댓글 등록 및 목록 업데이트 로직
        }
    });
    commentsSection.appendChild(commentForm);
    const commentsList = document.createElement("ul");
    commentsList.className = "comments-list";
    const postComments = sampleComments.filter((comment)=>comment.postId === postId);
    if (postComments.length > 0) postComments.forEach((comment)=>{
        const commentItem = document.createElement("li");
        commentItem.className = "comment-item";
        commentItem.innerHTML = `
        <div class="comment-author-info">
          <span class="post-author-avatar comment-avatar">${comment.author.charAt(0).toUpperCase()}</span>
          <span class="post-author-name">${comment.author}</span>
          <span class="post-date">${comment.date}</span>
        </div>
        <p class="comment-content">${comment.content}</p>
      `;
        commentsList.appendChild(commentItem);
    });
    else {
        const noComments = document.createElement("p");
        noComments.textContent = "\uC544\uC9C1 \uB313\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.";
        noComments.className = "no-comments";
        commentsList.appendChild(noComments);
    }
    commentsSection.appendChild(commentsList);
    pageWrapper.appendChild(commentsSection);
    // 하단: 목록으로 가기 버튼
    const backButtonBottom = document.createElement("button");
    backButtonBottom.className = "back-to-list-button bottom";
    backButtonBottom.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg> \u{BAA9}\u{B85D}\u{C73C}\u{B85C}`;
    backButtonBottom.onclick = ()=>{
        window.location.hash = `#discussion${post.coinSymbol ? '/' + post.coinSymbol : ''}`;
    };
    pageWrapper.appendChild(backButtonBottom);
    container.appendChild(pageWrapper);
}
// PostDetail.js에서 사용할 샘플 데이터 (Discussion.js의 데이터와 동일하거나 확장)
const samplePostsForDetail = [
    {
        id: 1,
        coinSymbol: "BTC",
        title: "\uBE44\uD2B8\uCF54\uC778 \uC9C0\uAE08\uC774\uB77C\uB3C4 \uD0C0\uC57C\uD560\uAE4C\uC694? \uBD84\uC704\uAE30\uAC00 \uC2EC\uC0C1\uCE58 \uC54A\uB124\uC694",
        author: "\uCF54\uB9B0\uC774\uD0D0\uD5D8\uB300",
        date: "2025-05-11 10:30",
        views: 1245,
        likes: 78,
        commentsCount: 2,
        prediction: "\uC0C1\uC2B9",
        content: "\uCD5C\uADFC \uBE44\uD2B8\uCF54\uC778 \uAC00\uACA9 \uBCC0\uB3D9\uC131\uC774 \uCEE4\uC9C0\uBA74\uC11C \uB9CE\uC740 \uBD84\uB4E4\uC774 \uACE0\uBBFC\uC774\uC2E4 \uAC83 \uAC19\uC2B5\uB2C8\uB2E4. \uC800\uB294 \uC7A5\uAE30\uC801\uC73C\uB85C \uC6B0\uC0C1\uD5A5 \uD560 \uAC83\uC774\uB77C\uACE0 \uBCF4\uB294\uB370, \uC5EC\uB7EC\uBD84\uC758 \uC0DD\uAC01\uC740 \uC5B4\uB5A0\uC2E0\uAC00\uC694? \uD568\uAED8 \uC774\uC57C\uAE30 \uB098\uB220\uBD10\uC694!\n\n\uCD94\uAC00 \uB0B4\uC6A9: \uBE44\uD2B8\uCF54\uC778\uC758 \uC5ED\uC0AC\uC801 \uB370\uC774\uD130\uB97C \uC0B4\uD3B4\uBCF4\uBA74, \uD070 \uD558\uB77D \uC774\uD6C4\uC5D0\uB294 \uD56D\uC0C1 \uB354 \uD070 \uC0C1\uC2B9\uC774 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \uBB3C\uB860 \uACFC\uAC70\uAC00 \uBBF8\uB798\uB97C \uBCF4\uC7A5\uD558\uB294 \uAC83\uC740 \uC544\uB2C8\uC9C0\uB9CC, \uD604\uC7AC \uC2DC\uC7A5 \uC0C1\uD669\uACFC \uC5EC\uB7EC \uC9C0\uD45C\uB4E4\uC744 \uC885\uD569\uC801\uC73C\uB85C \uACE0\uB824\uD588\uC744 \uB54C \uAE0D\uC815\uC801\uC778 \uC2E0\uD638\uB4E4\uC774 \uB9CE\uC774 \uBCF4\uC785\uB2C8\uB2E4. \uD2B9\uD788 \uAE30\uAD00 \uD22C\uC790\uC790\uB4E4\uC758 \uC720\uC785\uACFC ETF \uC2B9\uC778 \uAC00\uB2A5\uC131 \uB4F1\uC740 \uC7A5\uAE30\uC801\uC778 \uC0C1\uC2B9 \uB3D9\uB825\uC774 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\n\uB2E4\uB9CC, \uB2E8\uAE30\uC801\uC778 \uBCC0\uB3D9\uC131\uC740 \uC5EC\uC804\uD788 \uD074 \uC218 \uC788\uC73C\uBBC0\uB85C \uD22C\uC790\uC5D0\uB294 \uD56D\uC0C1 \uC2E0\uC911\uD574\uC57C \uD569\uB2C8\uB2E4. \uBD84\uD560 \uB9E4\uC218\uC640 \uB9AC\uC2A4\uD06C \uAD00\uB9AC\uB294 \uD544\uC218\uC785\uB2C8\uB2E4!"
    },
    {
        id: 2,
        coinSymbol: "ETH",
        title: "\uC774\uB354\uB9AC\uC6C0, \uB2E4\uC74C\uC8FC \uC911\uC694\uD55C \uBC1C\uD45C \uC608\uC815! \uBBF8\uB9AC \uC120\uC810\uD558\uC138\uC694",
        author: "\uC815\uBCF4\uBD84\uC11D\uAC00",
        date: "2025-05-10 15:45",
        views: 982,
        likes: 56,
        commentsCount: 1,
        prediction: "\uC0C1\uC2B9",
        content: "\uC774\uB354\uB9AC\uC6C0 \uC7AC\uB2E8\uC5D0\uC11C \uB2E4\uC74C \uC8FC \uC911\uB300 \uBC1C\uD45C\uAC00 \uC788\uC744 \uC608\uC815\uC774\uB77C\uB294 \uC18C\uC2DD\uC785\uB2C8\uB2E4. \uC774\uBC88 \uBC1C\uD45C \uB0B4\uC6A9\uC5D0 \uB530\uB77C \uC2DC\uC7A5\uC5D0 \uD070 \uD30C\uC7A5\uC774 \uC608\uC0C1\uB418\uB2C8, \uAD00\uC2EC\uC788\uAC8C \uC9C0\uCF1C\uBCF4\uC2DC\uB294 \uAC83\uC774 \uC88B\uACA0\uC2B5\uB2C8\uB2E4. \n\n\uB4E4\uB9AC\uB294 \uC18C\uBB38\uC5D0 \uC758\uD558\uBA74, \uC774\uBC88 \uBC1C\uD45C\uB294 \uC774\uB354\uB9AC\uC6C0 2.0 \uC5C5\uADF8\uB808\uC774\uB4DC\uC758 \uB2E4\uC74C \uB2E8\uACC4\uC640 \uAD00\uB828\uB41C \uB85C\uB4DC\uB9F5, \uADF8\uB9AC\uACE0 \uC0C8\uB85C\uC6B4 \uD655\uC7A5\uC131 \uC194\uB8E8\uC158\uC5D0 \uB300\uD55C \uB0B4\uC6A9\uC77C \uAC00\uB2A5\uC131\uC774 \uB192\uB2E4\uACE0 \uD569\uB2C8\uB2E4. \uB9CC\uC57D \uC774\uAC83\uC774 \uC0AC\uC2E4\uC774\uB77C\uBA74 \uC774\uB354\uB9AC\uC6C0 \uC0DD\uD0DC\uACC4\uC5D0 \uC5C4\uCCAD\uB09C \uD638\uC7AC\uB85C \uC791\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
    },
    {
        id: 3,
        coinSymbol: "XRP",
        title: "\uB9AC\uD50C \uC18C\uC1A1 \uACB0\uACFC \uC784\uBC15? \uB2E8\uAE30 \uBCC0\uB3D9\uC131 \uC8FC\uC758\uD558\uC138\uC694",
        author: "\uBC95\uB960\uC804\uBB38\uAC00",
        date: "2025-05-09 09:12",
        views: 756,
        likes: 23,
        commentsCount: 0,
        prediction: "\uC911\uB9BD",
        content: "\uB9AC\uD50C\uACFC SEC \uAC04\uC758 \uC18C\uC1A1 \uACB0\uACFC\uAC00 \uACE7 \uB098\uC62C \uAC83\uC774\uB77C\uB294 \uC804\uB9DD\uC774 \uB098\uC624\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uACB0\uACFC\uC5D0 \uB530\uB77C \uAC00\uACA9\uC774 \uAE09\uB4F1\uB77D\uD560 \uC218 \uC788\uC73C\uB2C8, \uD22C\uC790\uC5D0 \uAC01\uBCC4\uD788 \uC720\uC758\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. \n\n\uD604\uC7AC\uAE4C\uC9C0 \uB098\uC628 \uC815\uBCF4\uB4E4\uC744 \uC885\uD569\uD574 \uBCF4\uBA74, \uC644\uC804\uD55C \uC2B9\uC18C\uB098 \uD328\uC18C\uBCF4\uB2E4\uB294 \uC591\uCE21\uC5D0 \uC77C\uBD80 \uC720\uB9AC\uD55C \uD310\uACB0\uC774 \uB098\uC62C \uAC00\uB2A5\uC131\uC774 \uC810\uCCD0\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uBC95\uC6D0\uC758 \uCD5C\uC885 \uD310\uB2E8\uC740 \uC608\uCE21\uD558\uAE30 \uC5B4\uB824\uC6B0\uBBC0\uB85C, \uACB0\uACFC \uBC1C\uD45C \uC804\uD6C4\uB85C \uBCC0\uB3D9\uC131\uC774 \uADF9\uC2EC\uD574\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD22C\uC790\uC790\uB4E4\uC740 \uAD00\uB828 \uB274\uC2A4\uC5D0 \uADC0\uB97C \uAE30\uC6B8\uC774\uACE0, \uB9AC\uC2A4\uD06C \uAD00\uB9AC\uC5D0 \uB9CC\uC804\uC744 \uAE30\uD574\uC57C \uD560 \uAC83\uC785\uB2C8\uB2E4."
    },
    {
        id: 4,
        coinSymbol: "SOL",
        title: "\uC194\uB77C\uB098 \uAE30\uBC18 \uBC08\uCF54\uC778, \uB2E4\uC2DC \uD55C\uBC88 \uBD88\uC7A5 \uC62C\uAE4C\uC694?",
        author: "\uBC08\uCF54\uC778\uD5CC\uD130",
        date: "2025-05-08 18:20",
        views: 634,
        likes: 89,
        commentsCount: 0,
        prediction: "\uC0C1\uC2B9",
        content: "\uCD5C\uADFC \uC194\uB77C\uB098 \uB124\uD2B8\uC6CC\uD06C\uC758 \uC548\uC815\uC131\uC774 \uD5A5\uC0C1\uB418\uBA74\uC11C \uC194\uB77C\uB098 \uAE30\uBC18 \uBC08\uCF54\uC778\uB4E4\uC774 \uB2E4\uC2DC \uC8FC\uBAA9\uBC1B\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC81C2\uC758 \uBD09\uD06C, \uB3C4\uADF8\uC704\uD504\uD587\uC774 \uB098\uC62C \uC218 \uC788\uC744\uC9C0 \uAE30\uB300\uB418\uB124\uC694. \n\n\uD2B9\uD788 \uCD5C\uADFC \uCD9C\uC2DC\uB41C \uBA87\uBA87 \uBC08\uCF54\uC778\uB4E4\uC774 \uCEE4\uBBA4\uB2C8\uD2F0\uC758 \uAC15\uB825\uD55C \uC9C0\uC9C0\uB97C \uBC1B\uC73C\uBA70 \uBE60\uB974\uAC8C \uC131\uC7A5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uBC08\uCF54\uC778 \uD22C\uC790\uB294 \uD558\uC774 \uB9AC\uC2A4\uD06C \uD558\uC774 \uB9AC\uD134\uC758 \uC804\uD615\uC801\uC778 \uC608\uC774\uBBC0\uB85C, \uD22C\uC790\uAE08\uC758 \uADF9\uD788 \uC77C\uBD80\uB9CC\uC73C\uB85C \uC7AC\uBBF8\uC0BC\uC544 \uC811\uADFC\uD558\uB294 \uAC83\uC774 \uD604\uBA85\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
    },
    {
        id: 5,
        coinSymbol: "BTC",
        title: "\uB2E8\uD0C0\uB9E4\uB9E4 \uC218\uC775 \uC778\uC99D\uD569\uB2C8\uB2E4 (\uD558\uB8E8 +15%)",
        author: "\uC2A4\uCE98\uD551\uB9C8\uC2A4\uD130",
        date: "2025-05-07 22:05",
        views: 2056,
        likes: 152,
        commentsCount: 0,
        prediction: "\uC911\uB9BD",
        content: "\uC624\uB298 \uC7A5\uC911 \uBCC0\uB3D9\uC131\uC744 \uC774\uC6A9\uD574\uC11C \uC9E7\uAC8C \uC218\uC775 \uC2E4\uD604\uD588\uC2B5\uB2C8\uB2E4. \uB9E4\uB9E4\uB294 \uC9E7\uACE0 \uAD75\uAC8C! \uB2E4\uB4E4 \uC131\uD22C\uD558\uC138\uC694~ (\uB9E4\uB9E4 \uB0B4\uC5ED \uCCA8\uBD80)\n\n\uC800\uC758 \uC8FC\uC694 \uC804\uB7B5\uC740 \uC9C0\uC9C0\uC120\uACFC \uC800\uD56D\uC120\uC744 \uD65C\uC6A9\uD55C \uB3CC\uD30C \uB9E4\uB9E4\uC785\uB2C8\uB2E4. \uC624\uB298\uC740 \uBE44\uD2B8\uCF54\uC778\uC774 \uC8FC\uC694 \uC9C0\uC9C0\uC120\uC5D0\uC11C \uBC18\uB4F1\uD558\uB294 \uBAA8\uC2B5\uC744 \uD3EC\uCC29\uD558\uC5EC \uB9E4\uC218\uD588\uACE0, \uB2E8\uAE30 \uC800\uD56D\uC120 \uBD80\uADFC\uC5D0\uC11C \uBE60\uB974\uAC8C \uB9E4\uB3C4\uD558\uC5EC \uC218\uC775\uC744 \uD655\uC815\uD588\uC2B5\uB2C8\uB2E4. \uC2DC\uC7A5 \uC0C1\uD669\uC774 \uC720\uB3D9\uC801\uC774\uBBC0\uB85C \uD56D\uC0C1 \uC190\uC808 \uB77C\uC778\uC744 \uC124\uC815\uD558\uACE0 \uAE30\uACC4\uC801\uC73C\uB85C \uB300\uC751\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4."
    }
];

},{"../app/api/conapi.js":"pTw2w","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6O7Ur":[function(require,module,exports,__globalThis) {
// pages/Login.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderLoginPage", ()=>renderLoginPage);
function renderLoginPage(container) {
    container.innerHTML = ""; // 이전 내용 지우기
    const loginPageWrapper = document.createElement("div");
    loginPageWrapper.className = "login-page-wrapper";
    const loginFormContainer = document.createElement("div");
    loginFormContainer.className = "login-form-container";
    const formTitle = document.createElement("h2");
    formTitle.className = "login-form-title";
    formTitle.textContent = "\uB85C\uADF8\uC778";
    const formDescription = document.createElement("p");
    formDescription.className = "login-form-description";
    formDescription.textContent = "\uACC4\uC815\uC5D0 \uB85C\uADF8\uC778\uD558\uC5EC \uBAA8\uB4E0 \uAE30\uB2A5\uC744 \uC774\uC6A9\uD558\uC138\uC694.";
    const form = document.createElement("form");
    form.id = "loginForm";
    form.addEventListener("submit", handleLoginSubmit);
    // 이메일 입력 필드
    const emailGroup = document.createElement("div");
    emailGroup.className = "form-group";
    const emailLabel = document.createElement("label");
    emailLabel.htmlFor = "email";
    emailLabel.textContent = "\uC774\uBA54\uC77C \uC8FC\uC18C";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.placeholder = "you@example.com";
    emailInput.required = true;
    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);
    // 비밀번호 입력 필드
    const passwordGroup = document.createElement("div");
    passwordGroup.className = "form-group";
    const passwordLabel = document.createElement("label");
    passwordLabel.htmlFor = "password";
    passwordLabel.textContent = "\uBE44\uBC00\uBC88\uD638";
    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.id = "password";
    passwordInput.name = "password";
    passwordInput.placeholder = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
    passwordInput.required = true;
    // Caps Lock 감지 이벤트 리스너
    passwordInput.addEventListener("keyup", handleCapsLock);
    passwordGroup.appendChild(passwordLabel);
    passwordGroup.appendChild(passwordInput);
    // Caps Lock 알림
    const capsLockWarning = document.createElement("div");
    capsLockWarning.id = "capsLockWarning";
    capsLockWarning.className = "caps-lock-warning";
    capsLockWarning.style.display = "none"; // 기본 숨김
    capsLockWarning.textContent = "Caps Lock\uC774 \uCF1C\uC838 \uC788\uC2B5\uB2C8\uB2E4.";
    passwordGroup.appendChild(capsLockWarning);
    // 추가 옵션 (기억하기, 비밀번호 찾기)
    const extraOptions = document.createElement("div");
    extraOptions.className = "extra-options";
    const rememberMeLabel = document.createElement("label");
    rememberMeLabel.className = "remember-me";
    const rememberMeCheckbox = document.createElement("input");
    rememberMeCheckbox.type = "checkbox";
    rememberMeCheckbox.name = "remember";
    rememberMeLabel.appendChild(rememberMeCheckbox);
    rememberMeLabel.append(" \uB85C\uADF8\uC778 \uC0C1\uD0DC \uC720\uC9C0");
    const forgotPasswordLink = document.createElement("a");
    forgotPasswordLink.href = "#/forgot-password"; // 실제 링크로 변경 필요
    forgotPasswordLink.className = "forgot-password-link";
    forgotPasswordLink.textContent = "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB098\uC694?";
    extraOptions.appendChild(rememberMeLabel);
    extraOptions.appendChild(forgotPasswordLink);
    // 로그인 버튼
    const loginButton = document.createElement("button");
    loginButton.type = "submit";
    loginButton.className = "login-button primary";
    loginButton.textContent = "\uB85C\uADF8\uC778";
    // 회원가입 링크
    const signUpPrompt = document.createElement("div");
    signUpPrompt.className = "signup-prompt";
    signUpPrompt.innerHTML = `\u{ACC4}\u{C815}\u{C774} \u{C5C6}\u{C73C}\u{C2E0}\u{AC00}\u{C694}? <a href="#/signup">\u{D68C}\u{C6D0}\u{AC00}\u{C785}</a>`; // 실제 회원가입 페이지로 연결
    // 폼 요소들 추가
    form.appendChild(emailGroup);
    form.appendChild(passwordGroup);
    form.appendChild(extraOptions);
    form.appendChild(loginButton);
    loginFormContainer.appendChild(formTitle);
    loginFormContainer.appendChild(formDescription);
    loginFormContainer.appendChild(form);
    // 소셜 로그인 구분선 및 버튼 그룹 제거됨
    loginFormContainer.appendChild(signUpPrompt); // 로그인 버튼 다음에 바로 회원가입 프롬프트
    loginPageWrapper.appendChild(loginFormContainer);
    container.appendChild(loginPageWrapper);
}
function handleLoginSubmit(event) {
    event.preventDefault(); // 폼 기본 제출 방지
    const email = event.target.email.value;
    const password = event.target.password.value;
    const rememberMe = event.target.remember.checked;
    console.log("\uB85C\uADF8\uC778 \uC2DC\uB3C4:", {
        email,
        password,
        rememberMe
    });
    // TODO: 실제 로그인 API 호출 및 로직 구현
    alert(`\u{B85C}\u{ADF8}\u{C778} \u{C2DC}\u{B3C4}: ${email} (\u{AD6C}\u{D604} \u{C608}\u{C815})`);
// 로그인 성공 시 메인 페이지 또는 이전 페이지로 리다이렉트
// window.location.hash = "#main";
}
function handleCapsLock(event) {
    const capsLockWarning = document.getElementById("capsLockWarning");
    if (event.getModifierState && event.getModifierState("CapsLock")) capsLockWarning.style.display = "block";
    else capsLockWarning.style.display = "none";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["98Pml","aIaTB"], "aIaTB", "parcelRequirefa02", {})

//# sourceMappingURL=weather-coin-project-moon.349046b4.js.map
