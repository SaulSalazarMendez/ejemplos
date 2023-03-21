var od=Object.defineProperty;var id=(e,n,t)=>n in e?od(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Cn=(e,n,t)=>(id(e,typeof n!="symbol"?n+"":n,t),t);function ld(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function ad(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var At={},ud={get exports(){return At},set exports(e){At=e}},yo={},E={},sd={get exports(){return E},set exports(e){E=e}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lr=Symbol.for("react.element"),cd=Symbol.for("react.portal"),dd=Symbol.for("react.fragment"),fd=Symbol.for("react.strict_mode"),pd=Symbol.for("react.profiler"),hd=Symbol.for("react.provider"),md=Symbol.for("react.context"),vd=Symbol.for("react.forward_ref"),gd=Symbol.for("react.suspense"),yd=Symbol.for("react.memo"),wd=Symbol.for("react.lazy"),ha=Symbol.iterator;function Sd(e){return e===null||typeof e!="object"?null:(e=ha&&e[ha]||e["@@iterator"],typeof e=="function"?e:null)}var Iu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ju=Object.assign,Mu={};function ht(e,n,t){this.props=e,this.context=n,this.refs=Mu,this.updater=t||Iu}ht.prototype.isReactComponent={};ht.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ht.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Du(){}Du.prototype=ht.prototype;function yl(e,n,t){this.props=e,this.context=n,this.refs=Mu,this.updater=t||Iu}var wl=yl.prototype=new Du;wl.constructor=yl;ju(wl,ht.prototype);wl.isPureReactComponent=!0;var ma=Array.isArray,Fu=Object.prototype.hasOwnProperty,Sl={current:null},Uu={key:!0,ref:!0,__self:!0,__source:!0};function $u(e,n,t){var r,o={},i=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)Fu.call(n,r)&&!Uu.hasOwnProperty(r)&&(o[r]=n[r]);var a=arguments.length-2;if(a===1)o.children=t;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:lr,type:e,key:i,ref:l,props:o,_owner:Sl.current}}function kd(e,n){return{$$typeof:lr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function kl(e){return typeof e=="object"&&e!==null&&e.$$typeof===lr}function Ed(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var va=/\/+/g;function Ao(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Ed(""+e.key):n.toString(36)}function Or(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case lr:case cd:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ao(l,0):r,ma(o)?(t="",e!=null&&(t=e.replace(va,"$&/")+"/"),Or(o,n,t,"",function(s){return s})):o!=null&&(kl(o)&&(o=kd(o,t+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(va,"$&/")+"/")+e)),n.push(o)),1;if(l=0,r=r===""?".":r+":",ma(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+Ao(i,a);l+=Or(i,n,t,u,o)}else if(u=Sd(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+Ao(i,a++),l+=Or(i,n,t,u,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function mr(e,n,t){if(e==null)return e;var r=[],o=0;return Or(e,r,"","",function(i){return n.call(t,i,o++)}),r}function xd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Ir={transition:null},Cd={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Ir,ReactCurrentOwner:Sl};O.Children={map:mr,forEach:function(e,n,t){mr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return mr(e,function(){n++}),n},toArray:function(e){return mr(e,function(n){return n})||[]},only:function(e){if(!kl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=ht;O.Fragment=dd;O.Profiler=pd;O.PureComponent=yl;O.StrictMode=fd;O.Suspense=gd;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cd;O.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ju({},e.props),o=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=Sl.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)Fu.call(n,u)&&!Uu.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:lr,type:e.type,key:o,ref:i,props:r,_owner:l}};O.createContext=function(e){return e={$$typeof:md,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hd,_context:e},e.Consumer=e};O.createElement=$u;O.createFactory=function(e){var n=$u.bind(null,e);return n.type=e,n};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:vd,render:e}};O.isValidElement=kl;O.lazy=function(e){return{$$typeof:wd,_payload:{_status:-1,_result:e},_init:xd}};O.memo=function(e,n){return{$$typeof:yd,type:e,compare:n===void 0?null:n}};O.startTransition=function(e){var n=Ir.transition;Ir.transition={};try{e()}finally{Ir.transition=n}};O.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};O.useCallback=function(e,n){return de.current.useCallback(e,n)};O.useContext=function(e){return de.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return de.current.useDeferredValue(e)};O.useEffect=function(e,n){return de.current.useEffect(e,n)};O.useId=function(){return de.current.useId()};O.useImperativeHandle=function(e,n,t){return de.current.useImperativeHandle(e,n,t)};O.useInsertionEffect=function(e,n){return de.current.useInsertionEffect(e,n)};O.useLayoutEffect=function(e,n){return de.current.useLayoutEffect(e,n)};O.useMemo=function(e,n){return de.current.useMemo(e,n)};O.useReducer=function(e,n,t){return de.current.useReducer(e,n,t)};O.useRef=function(e){return de.current.useRef(e)};O.useState=function(e){return de.current.useState(e)};O.useSyncExternalStore=function(e,n,t){return de.current.useSyncExternalStore(e,n,t)};O.useTransition=function(){return de.current.useTransition()};O.version="18.2.0";(function(e){e.exports=O})(sd);const Bu=ad(E),mi=ld({__proto__:null,default:Bu},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd=E,_d=Symbol.for("react.element"),Nd=Symbol.for("react.fragment"),Ld=Object.prototype.hasOwnProperty,zd=Pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rd={key:!0,ref:!0,__self:!0,__source:!0};function Au(e,n,t){var r,o={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Ld.call(n,r)&&!Rd.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:_d,type:e,key:i,ref:l,props:o,_owner:zd.current}}yo.Fragment=Nd;yo.jsx=Au;yo.jsxs=Au;(function(e){e.exports=yo})(ud);const Vu=At.Fragment,z=At.jsx,D=At.jsxs;var vi={},gi={},Td={get exports(){return gi},set exports(e){gi=e}},Ee={},yi={},Od={get exports(){return yi},set exports(e){yi=e}},Hu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,R){var T=_.length;_.push(R);e:for(;0<T;){var K=T-1>>>1,q=_[K];if(0<o(q,R))_[K]=R,_[T]=q,T=K;else break e}}function t(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var R=_[0],T=_.pop();if(T!==R){_[0]=T;e:for(var K=0,q=_.length,pr=q>>>1;K<pr;){var En=2*(K+1)-1,Bo=_[En],xn=En+1,hr=_[xn];if(0>o(Bo,T))xn<q&&0>o(hr,Bo)?(_[K]=hr,_[xn]=T,K=xn):(_[K]=Bo,_[En]=T,K=En);else if(xn<q&&0>o(hr,T))_[K]=hr,_[xn]=T,K=xn;else break e}}return R}function o(_,R){var T=_.sortIndex-R.sortIndex;return T!==0?T:_.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],s=[],f=1,h=null,m=3,g=!1,w=!1,y=!1,L=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(_){for(var R=t(s);R!==null;){if(R.callback===null)r(s);else if(R.startTime<=_)r(s),R.sortIndex=R.expirationTime,n(u,R);else break;R=t(s)}}function v(_){if(y=!1,p(_),!w)if(t(u)!==null)w=!0,Uo(k);else{var R=t(s);R!==null&&$o(v,R.startTime-_)}}function k(_,R){w=!1,y&&(y=!1,d(N),N=-1),g=!0;var T=m;try{for(p(R),h=t(u);h!==null&&(!(h.expirationTime>R)||_&&!Re());){var K=h.callback;if(typeof K=="function"){h.callback=null,m=h.priorityLevel;var q=K(h.expirationTime<=R);R=e.unstable_now(),typeof q=="function"?h.callback=q:h===t(u)&&r(u),p(R)}else r(u);h=t(u)}if(h!==null)var pr=!0;else{var En=t(s);En!==null&&$o(v,En.startTime-R),pr=!1}return pr}finally{h=null,m=T,g=!1}}var C=!1,x=null,N=-1,Q=5,I=-1;function Re(){return!(e.unstable_now()-I<Q)}function yt(){if(x!==null){var _=e.unstable_now();I=_;var R=!0;try{R=x(!0,_)}finally{R?wt():(C=!1,x=null)}}else C=!1}var wt;if(typeof c=="function")wt=function(){c(yt)};else if(typeof MessageChannel<"u"){var pa=new MessageChannel,rd=pa.port2;pa.port1.onmessage=yt,wt=function(){rd.postMessage(null)}}else wt=function(){L(yt,0)};function Uo(_){x=_,C||(C=!0,wt())}function $o(_,R){N=L(function(){_(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,Uo(k))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var T=m;m=R;try{return _()}finally{m=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,R){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var T=m;m=_;try{return R()}finally{m=T}},e.unstable_scheduleCallback=function(_,R,T){var K=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?K+T:K):T=K,_){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=T+q,_={id:f++,callback:R,priorityLevel:_,startTime:T,expirationTime:q,sortIndex:-1},T>K?(_.sortIndex=T,n(s,_),t(u)===null&&_===t(s)&&(y?(d(N),N=-1):y=!0,$o(v,T-K))):(_.sortIndex=q,n(u,_),w||g||(w=!0,Uo(k))),_},e.unstable_shouldYield=Re,e.unstable_wrapCallback=function(_){var R=m;return function(){var T=m;m=R;try{return _.apply(this,arguments)}finally{m=T}}}})(Hu);(function(e){e.exports=Hu})(Od);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wu=E,ke=yi;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qu=new Set,Vt={};function $n(e,n){at(e,n),at(e+"Capture",n)}function at(e,n){for(Vt[e]=n,e=0;e<n.length;e++)Qu.add(n[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wi=Object.prototype.hasOwnProperty,Id=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ga={},ya={};function jd(e){return wi.call(ya,e)?!0:wi.call(ga,e)?!1:Id.test(e)?ya[e]=!0:(ga[e]=!0,!1)}function Md(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dd(e,n,t,r){if(n===null||typeof n>"u"||Md(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function fe(e,n,t,r,o,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];re[n]=new fe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var El=/[\-:]([a-z])/g;function xl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(El,xl);re[n]=new fe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(El,xl);re[n]=new fe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(El,xl);re[n]=new fe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cl(e,n,t,r){var o=re.hasOwnProperty(n)?re[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Dd(n,t,o,r)&&(t=null),r||o===null?jd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var qe=Wu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vr=Symbol.for("react.element"),Hn=Symbol.for("react.portal"),Wn=Symbol.for("react.fragment"),Pl=Symbol.for("react.strict_mode"),Si=Symbol.for("react.profiler"),Ku=Symbol.for("react.provider"),Yu=Symbol.for("react.context"),_l=Symbol.for("react.forward_ref"),ki=Symbol.for("react.suspense"),Ei=Symbol.for("react.suspense_list"),Nl=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),Gu=Symbol.for("react.offscreen"),wa=Symbol.iterator;function St(e){return e===null||typeof e!="object"?null:(e=wa&&e[wa]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Vo;function Lt(e){if(Vo===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Vo=n&&n[1]||""}return`
`+Vo+e}var Ho=!1;function Wo(e,n){if(!e||Ho)return"";Ho=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Ho=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Lt(e):""}function Fd(e){switch(e.tag){case 5:return Lt(e.type);case 16:return Lt("Lazy");case 13:return Lt("Suspense");case 19:return Lt("SuspenseList");case 0:case 2:case 15:return e=Wo(e.type,!1),e;case 11:return e=Wo(e.type.render,!1),e;case 1:return e=Wo(e.type,!0),e;default:return""}}function xi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wn:return"Fragment";case Hn:return"Portal";case Si:return"Profiler";case Pl:return"StrictMode";case ki:return"Suspense";case Ei:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yu:return(e.displayName||"Context")+".Consumer";case Ku:return(e._context.displayName||"Context")+".Provider";case _l:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Nl:return n=e.displayName||null,n!==null?n:xi(e.type)||"Memo";case en:n=e._payload,e=e._init;try{return xi(e(n))}catch{}}return null}function Ud(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xi(n);case 8:return n===Pl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $d(e){var n=Xu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function gr(e){e._valueTracker||(e._valueTracker=$d(e))}function Ju(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Xu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ci(e,n){var t=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Sa(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=gn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Zu(e,n){n=n.checked,n!=null&&Cl(e,"checked",n,!1)}function Pi(e,n){Zu(e,n);var t=gn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?_i(e,n.type,t):n.hasOwnProperty("defaultValue")&&_i(e,n.type,gn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ka(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function _i(e,n,t){(n!=="number"||Wr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var zt=Array.isArray;function nt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+gn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Ni(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ea(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(zt(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:gn(t)}}function qu(e,n){var t=gn(n.value),r=gn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function xa(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function bu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Li(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?bu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,es=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ht(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ot={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bd=["Webkit","ms","Moz","O"];Object.keys(Ot).forEach(function(e){Bd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ot[n]=Ot[e]})});function ns(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ot.hasOwnProperty(e)&&Ot[e]?(""+n).trim():n+"px"}function ts(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=ns(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Ad=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zi(e,n){if(n){if(Ad[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function Ri(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ti=null;function Ll(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oi=null,tt=null,rt=null;function Ca(e){if(e=sr(e)){if(typeof Oi!="function")throw Error(S(280));var n=e.stateNode;n&&(n=xo(n),Oi(e.stateNode,e.type,n))}}function rs(e){tt?rt?rt.push(e):rt=[e]:tt=e}function os(){if(tt){var e=tt,n=rt;if(rt=tt=null,Ca(e),n)for(e=0;e<n.length;e++)Ca(n[e])}}function is(e,n){return e(n)}function ls(){}var Qo=!1;function as(e,n,t){if(Qo)return e(n,t);Qo=!0;try{return is(e,n,t)}finally{Qo=!1,(tt!==null||rt!==null)&&(ls(),os())}}function Wt(e,n){var t=e.stateNode;if(t===null)return null;var r=xo(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var Ii=!1;if(Ge)try{var kt={};Object.defineProperty(kt,"passive",{get:function(){Ii=!0}}),window.addEventListener("test",kt,kt),window.removeEventListener("test",kt,kt)}catch{Ii=!1}function Vd(e,n,t,r,o,i,l,a,u){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(f){this.onError(f)}}var It=!1,Qr=null,Kr=!1,ji=null,Hd={onError:function(e){It=!0,Qr=e}};function Wd(e,n,t,r,o,i,l,a,u){It=!1,Qr=null,Vd.apply(Hd,arguments)}function Qd(e,n,t,r,o,i,l,a,u){if(Wd.apply(this,arguments),It){if(It){var s=Qr;It=!1,Qr=null}else throw Error(S(198));Kr||(Kr=!0,ji=s)}}function Bn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function us(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Pa(e){if(Bn(e)!==e)throw Error(S(188))}function Kd(e){var n=e.alternate;if(!n){if(n=Bn(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return Pa(o),e;if(i===r)return Pa(o),n;i=i.sibling}throw Error(S(188))}if(t.return!==r.return)t=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===t){l=!0,t=o,r=i;break}if(a===r){l=!0,r=o,t=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===t){l=!0,t=i,r=o;break}if(a===r){l=!0,r=i,t=o;break}a=a.sibling}if(!l)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function ss(e){return e=Kd(e),e!==null?cs(e):null}function cs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=cs(e);if(n!==null)return n;e=e.sibling}return null}var ds=ke.unstable_scheduleCallback,_a=ke.unstable_cancelCallback,Yd=ke.unstable_shouldYield,Gd=ke.unstable_requestPaint,Y=ke.unstable_now,Xd=ke.unstable_getCurrentPriorityLevel,zl=ke.unstable_ImmediatePriority,fs=ke.unstable_UserBlockingPriority,Yr=ke.unstable_NormalPriority,Jd=ke.unstable_LowPriority,ps=ke.unstable_IdlePriority,wo=null,Ae=null;function Zd(e){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(wo,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:ef,qd=Math.log,bd=Math.LN2;function ef(e){return e>>>=0,e===0?32:31-(qd(e)/bd|0)|0}var wr=64,Sr=4194304;function Rt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~o;a!==0?r=Rt(a):(i&=l,i!==0&&(r=Rt(i)))}else l=t&~o,l!==0?r=Rt(l):i!==0&&(r=Rt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Me(n),o=1<<t,r|=e[t],n&=~o;return r}function nf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Me(i),a=1<<l,u=o[l];u===-1?(!(a&t)||a&r)&&(o[l]=nf(a,n)):u<=n&&(e.expiredLanes|=a),i&=~a}}function Mi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hs(){var e=wr;return wr<<=1,!(wr&4194240)&&(wr=64),e}function Ko(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ar(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Me(n),e[n]=t}function rf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Me(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function Rl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Me(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var M=0;function ms(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vs,Tl,gs,ys,ws,Di=!1,kr=[],un=null,sn=null,cn=null,Qt=new Map,Kt=new Map,tn=[],of="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Na(e,n){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":Qt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kt.delete(n.pointerId)}}function Et(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=sr(n),n!==null&&Tl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function lf(e,n,t,r,o){switch(n){case"focusin":return un=Et(un,e,n,t,r,o),!0;case"dragenter":return sn=Et(sn,e,n,t,r,o),!0;case"mouseover":return cn=Et(cn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return Qt.set(i,Et(Qt.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Kt.set(i,Et(Kt.get(i)||null,e,n,t,r,o)),!0}return!1}function Ss(e){var n=Ln(e.target);if(n!==null){var t=Bn(n);if(t!==null){if(n=t.tag,n===13){if(n=us(t),n!==null){e.blockedOn=n,ws(e.priority,function(){gs(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Fi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ti=r,t.target.dispatchEvent(r),Ti=null}else return n=sr(t),n!==null&&Tl(n),e.blockedOn=t,!1;n.shift()}return!0}function La(e,n,t){jr(e)&&t.delete(n)}function af(){Di=!1,un!==null&&jr(un)&&(un=null),sn!==null&&jr(sn)&&(sn=null),cn!==null&&jr(cn)&&(cn=null),Qt.forEach(La),Kt.forEach(La)}function xt(e,n){e.blockedOn===n&&(e.blockedOn=null,Di||(Di=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,af)))}function Yt(e){function n(o){return xt(o,e)}if(0<kr.length){xt(kr[0],e);for(var t=1;t<kr.length;t++){var r=kr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&xt(un,e),sn!==null&&xt(sn,e),cn!==null&&xt(cn,e),Qt.forEach(n),Kt.forEach(n),t=0;t<tn.length;t++)r=tn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(t=tn[0],t.blockedOn===null);)Ss(t),t.blockedOn===null&&tn.shift()}var ot=qe.ReactCurrentBatchConfig,Xr=!0;function uf(e,n,t,r){var o=M,i=ot.transition;ot.transition=null;try{M=1,Ol(e,n,t,r)}finally{M=o,ot.transition=i}}function sf(e,n,t,r){var o=M,i=ot.transition;ot.transition=null;try{M=4,Ol(e,n,t,r)}finally{M=o,ot.transition=i}}function Ol(e,n,t,r){if(Xr){var o=Fi(e,n,t,r);if(o===null)ti(e,n,r,Jr,t),Na(e,r);else if(lf(o,e,n,t,r))r.stopPropagation();else if(Na(e,r),n&4&&-1<of.indexOf(e)){for(;o!==null;){var i=sr(o);if(i!==null&&vs(i),i=Fi(e,n,t,r),i===null&&ti(e,n,r,Jr,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else ti(e,n,r,null,t)}}var Jr=null;function Fi(e,n,t,r){if(Jr=null,e=Ll(r),e=Ln(e),e!==null)if(n=Bn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=us(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Jr=e,null}function ks(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xd()){case zl:return 1;case fs:return 4;case Yr:case Jd:return 16;case ps:return 536870912;default:return 16}default:return 16}}var on=null,Il=null,Mr=null;function Es(){if(Mr)return Mr;var e,n=Il,t=n.length,r,o="value"in on?on.value:on.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===o[i-r];r++);return Mr=o.slice(e,1<r?1-r:void 0)}function Dr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function za(){return!1}function xe(e){function n(t,r,o,i,l){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Er:za,this.isPropagationStopped=za,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),n}var mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=xe(mt),ur=H({},mt,{view:0,detail:0}),cf=xe(ur),Yo,Go,Ct,So=H({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ct&&(Ct&&e.type==="mousemove"?(Yo=e.screenX-Ct.screenX,Go=e.screenY-Ct.screenY):Go=Yo=0,Ct=e),Yo)},movementY:function(e){return"movementY"in e?e.movementY:Go}}),Ra=xe(So),df=H({},So,{dataTransfer:0}),ff=xe(df),pf=H({},ur,{relatedTarget:0}),Xo=xe(pf),hf=H({},mt,{animationName:0,elapsedTime:0,pseudoElement:0}),mf=xe(hf),vf=H({},mt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gf=xe(vf),yf=H({},mt,{data:0}),Ta=xe(yf),wf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ef(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=kf[e])?!!n[e]:!1}function Ml(){return Ef}var xf=H({},ur,{key:function(e){if(e.key){var n=wf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ml,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cf=xe(xf),Pf=H({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oa=xe(Pf),_f=H({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ml}),Nf=xe(_f),Lf=H({},mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),zf=xe(Lf),Rf=H({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tf=xe(Rf),Of=[9,13,27,32],Dl=Ge&&"CompositionEvent"in window,jt=null;Ge&&"documentMode"in document&&(jt=document.documentMode);var If=Ge&&"TextEvent"in window&&!jt,xs=Ge&&(!Dl||jt&&8<jt&&11>=jt),Ia=String.fromCharCode(32),ja=!1;function Cs(e,n){switch(e){case"keyup":return Of.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ps(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function jf(e,n){switch(e){case"compositionend":return Ps(n);case"keypress":return n.which!==32?null:(ja=!0,Ia);case"textInput":return e=n.data,e===Ia&&ja?null:e;default:return null}}function Mf(e,n){if(Qn)return e==="compositionend"||!Dl&&Cs(e,n)?(e=Es(),Mr=Il=on=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xs&&n.locale!=="ko"?null:n.data;default:return null}}var Df={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ma(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Df[e.type]:n==="textarea"}function _s(e,n,t,r){rs(r),n=Zr(n,"onChange"),0<n.length&&(t=new jl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Mt=null,Gt=null;function Ff(e){Fs(e,0)}function ko(e){var n=Gn(e);if(Ju(n))return e}function Uf(e,n){if(e==="change")return n}var Ns=!1;if(Ge){var Jo;if(Ge){var Zo="oninput"in document;if(!Zo){var Da=document.createElement("div");Da.setAttribute("oninput","return;"),Zo=typeof Da.oninput=="function"}Jo=Zo}else Jo=!1;Ns=Jo&&(!document.documentMode||9<document.documentMode)}function Fa(){Mt&&(Mt.detachEvent("onpropertychange",Ls),Gt=Mt=null)}function Ls(e){if(e.propertyName==="value"&&ko(Gt)){var n=[];_s(n,Gt,e,Ll(e)),as(Ff,n)}}function $f(e,n,t){e==="focusin"?(Fa(),Mt=n,Gt=t,Mt.attachEvent("onpropertychange",Ls)):e==="focusout"&&Fa()}function Bf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ko(Gt)}function Af(e,n){if(e==="click")return ko(n)}function Vf(e,n){if(e==="input"||e==="change")return ko(n)}function Hf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fe=typeof Object.is=="function"?Object.is:Hf;function Xt(e,n){if(Fe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!wi.call(n,o)||!Fe(e[o],n[o]))return!1}return!0}function Ua(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $a(e,n){var t=Ua(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ua(t)}}function zs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Rs(){for(var e=window,n=Wr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Wr(e.document)}return n}function Fl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Wf(e){var n=Rs(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&zs(t.ownerDocument.documentElement,t)){if(r!==null&&Fl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=$a(t,i);var l=$a(t,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qf=Ge&&"documentMode"in document&&11>=document.documentMode,Kn=null,Ui=null,Dt=null,$i=!1;function Ba(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;$i||Kn==null||Kn!==Wr(r)||(r=Kn,"selectionStart"in r&&Fl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dt&&Xt(Dt,r)||(Dt=r,r=Zr(Ui,"onSelect"),0<r.length&&(n=new jl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Kn)))}function xr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Yn={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionend:xr("Transition","TransitionEnd")},qo={},Ts={};Ge&&(Ts=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function Eo(e){if(qo[e])return qo[e];if(!Yn[e])return e;var n=Yn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ts)return qo[e]=n[t];return e}var Os=Eo("animationend"),Is=Eo("animationiteration"),js=Eo("animationstart"),Ms=Eo("transitionend"),Ds=new Map,Aa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,n){Ds.set(e,n),$n(n,[e])}for(var bo=0;bo<Aa.length;bo++){var ei=Aa[bo],Kf=ei.toLowerCase(),Yf=ei[0].toUpperCase()+ei.slice(1);wn(Kf,"on"+Yf)}wn(Os,"onAnimationEnd");wn(Is,"onAnimationIteration");wn(js,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(Ms,"onTransitionEnd");at("onMouseEnter",["mouseout","mouseover"]);at("onMouseLeave",["mouseout","mouseover"]);at("onPointerEnter",["pointerout","pointerover"]);at("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tt));function Va(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Qd(r,n,void 0,e),e.currentTarget=null}function Fs(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;Va(o,a,s),i=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,s=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;Va(o,a,s),i=u}}}if(Kr)throw e=ji,Kr=!1,ji=null,e}function U(e,n){var t=n[Wi];t===void 0&&(t=n[Wi]=new Set);var r=e+"__bubble";t.has(r)||(Us(n,e,2,!1),t.add(r))}function ni(e,n,t){var r=0;n&&(r|=4),Us(t,e,r,n)}var Cr="_reactListening"+Math.random().toString(36).slice(2);function Jt(e){if(!e[Cr]){e[Cr]=!0,Qu.forEach(function(t){t!=="selectionchange"&&(Gf.has(t)||ni(t,!1,e),ni(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Cr]||(n[Cr]=!0,ni("selectionchange",!1,n))}}function Us(e,n,t,r){switch(ks(n)){case 1:var o=uf;break;case 4:o=sf;break;default:o=Ol}t=o.bind(null,n,t,e),o=void 0,!Ii||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function ti(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Ln(a),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}a=a.parentNode}}r=r.return}as(function(){var s=i,f=Ll(t),h=[];e:{var m=Ds.get(e);if(m!==void 0){var g=jl,w=e;switch(e){case"keypress":if(Dr(t)===0)break e;case"keydown":case"keyup":g=Cf;break;case"focusin":w="focus",g=Xo;break;case"focusout":w="blur",g=Xo;break;case"beforeblur":case"afterblur":g=Xo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ff;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Nf;break;case Os:case Is:case js:g=mf;break;case Ms:g=zf;break;case"scroll":g=cf;break;case"wheel":g=Tf;break;case"copy":case"cut":case"paste":g=gf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Oa}var y=(n&4)!==0,L=!y&&e==="scroll",d=y?m!==null?m+"Capture":null:m;y=[];for(var c=s,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,d!==null&&(v=Wt(c,d),v!=null&&y.push(Zt(c,v,p)))),L)break;c=c.return}0<y.length&&(m=new g(m,w,null,t,f),h.push({event:m,listeners:y}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&t!==Ti&&(w=t.relatedTarget||t.fromElement)&&(Ln(w)||w[Xe]))break e;if((g||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,g?(w=t.relatedTarget||t.toElement,g=s,w=w?Ln(w):null,w!==null&&(L=Bn(w),w!==L||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=s),g!==w)){if(y=Ra,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Oa,v="onPointerLeave",d="onPointerEnter",c="pointer"),L=g==null?m:Gn(g),p=w==null?m:Gn(w),m=new y(v,c+"leave",g,t,f),m.target=L,m.relatedTarget=p,v=null,Ln(f)===s&&(y=new y(d,c+"enter",w,t,f),y.target=p,y.relatedTarget=L,v=y),L=v,g&&w)n:{for(y=g,d=w,c=0,p=y;p;p=Vn(p))c++;for(p=0,v=d;v;v=Vn(v))p++;for(;0<c-p;)y=Vn(y),c--;for(;0<p-c;)d=Vn(d),p--;for(;c--;){if(y===d||d!==null&&y===d.alternate)break n;y=Vn(y),d=Vn(d)}y=null}else y=null;g!==null&&Ha(h,m,g,y,!1),w!==null&&L!==null&&Ha(h,L,w,y,!0)}}e:{if(m=s?Gn(s):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var k=Uf;else if(Ma(m))if(Ns)k=Vf;else{k=Bf;var C=$f}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Af);if(k&&(k=k(e,s))){_s(h,k,t,f);break e}C&&C(e,m,s),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&_i(m,"number",m.value)}switch(C=s?Gn(s):window,e){case"focusin":(Ma(C)||C.contentEditable==="true")&&(Kn=C,Ui=s,Dt=null);break;case"focusout":Dt=Ui=Kn=null;break;case"mousedown":$i=!0;break;case"contextmenu":case"mouseup":case"dragend":$i=!1,Ba(h,t,f);break;case"selectionchange":if(Qf)break;case"keydown":case"keyup":Ba(h,t,f)}var x;if(Dl)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Qn?Cs(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(xs&&t.locale!=="ko"&&(Qn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Qn&&(x=Es()):(on=f,Il="value"in on?on.value:on.textContent,Qn=!0)),C=Zr(s,N),0<C.length&&(N=new Ta(N,e,null,t,f),h.push({event:N,listeners:C}),x?N.data=x:(x=Ps(t),x!==null&&(N.data=x)))),(x=If?jf(e,t):Mf(e,t))&&(s=Zr(s,"onBeforeInput"),0<s.length&&(f=new Ta("onBeforeInput","beforeinput",null,t,f),h.push({event:f,listeners:s}),f.data=x))}Fs(h,n)})}function Zt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Zr(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Wt(e,t),i!=null&&r.unshift(Zt(e,i,o)),i=Wt(e,n),i!=null&&r.push(Zt(e,i,o))),e=e.return}return r}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ha(e,n,t,r,o){for(var i=n._reactName,l=[];t!==null&&t!==r;){var a=t,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,o?(u=Wt(t,i),u!=null&&l.unshift(Zt(t,u,a))):o||(u=Wt(t,i),u!=null&&l.push(Zt(t,u,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Xf=/\r\n?/g,Jf=/\u0000|\uFFFD/g;function Wa(e){return(typeof e=="string"?e:""+e).replace(Xf,`
`).replace(Jf,"")}function Pr(e,n,t){if(n=Wa(n),Wa(e)!==n&&t)throw Error(S(425))}function qr(){}var Bi=null,Ai=null;function Vi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Hi=typeof setTimeout=="function"?setTimeout:void 0,Zf=typeof clearTimeout=="function"?clearTimeout:void 0,Qa=typeof Promise=="function"?Promise:void 0,qf=typeof queueMicrotask=="function"?queueMicrotask:typeof Qa<"u"?function(e){return Qa.resolve(null).then(e).catch(bf)}:Hi;function bf(e){setTimeout(function(){throw e})}function ri(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Yt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Yt(n)}function dn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ka(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var vt=Math.random().toString(36).slice(2),Be="__reactFiber$"+vt,qt="__reactProps$"+vt,Xe="__reactContainer$"+vt,Wi="__reactEvents$"+vt,ep="__reactListeners$"+vt,np="__reactHandles$"+vt;function Ln(e){var n=e[Be];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Xe]||t[Be]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ka(e);e!==null;){if(t=e[Be])return t;e=Ka(e)}return n}e=t,t=e.parentNode}return null}function sr(e){return e=e[Be]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function xo(e){return e[qt]||null}var Qi=[],Xn=-1;function Sn(e){return{current:e}}function $(e){0>Xn||(e.current=Qi[Xn],Qi[Xn]=null,Xn--)}function F(e,n){Xn++,Qi[Xn]=e.current,e.current=n}var yn={},ae=Sn(yn),me=Sn(!1),jn=yn;function ut(e,n){var t=e.type.contextTypes;if(!t)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function ve(e){return e=e.childContextTypes,e!=null}function br(){$(me),$(ae)}function Ya(e,n,t){if(ae.current!==yn)throw Error(S(168));F(ae,n),F(me,t)}function $s(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(S(108,Ud(e)||"Unknown",o));return H({},t,r)}function eo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,jn=ae.current,F(ae,e),F(me,me.current),!0}function Ga(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=$s(e,n,jn),r.__reactInternalMemoizedMergedChildContext=e,$(me),$(ae),F(ae,e)):$(me),F(me,t)}var We=null,Co=!1,oi=!1;function Bs(e){We===null?We=[e]:We.push(e)}function tp(e){Co=!0,Bs(e)}function kn(){if(!oi&&We!==null){oi=!0;var e=0,n=M;try{var t=We;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}We=null,Co=!1}catch(o){throw We!==null&&(We=We.slice(e+1)),ds(zl,kn),o}finally{M=n,oi=!1}}return null}var Jn=[],Zn=0,no=null,to=0,Ce=[],Pe=0,Mn=null,Qe=1,Ke="";function Pn(e,n){Jn[Zn++]=to,Jn[Zn++]=no,no=e,to=n}function As(e,n,t){Ce[Pe++]=Qe,Ce[Pe++]=Ke,Ce[Pe++]=Mn,Mn=e;var r=Qe;e=Ke;var o=32-Me(r)-1;r&=~(1<<o),t+=1;var i=32-Me(n)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Qe=1<<32-Me(n)+o|t<<o|r,Ke=i+e}else Qe=1<<i|t<<o|r,Ke=e}function Ul(e){e.return!==null&&(Pn(e,1),As(e,1,0))}function $l(e){for(;e===no;)no=Jn[--Zn],Jn[Zn]=null,to=Jn[--Zn],Jn[Zn]=null;for(;e===Mn;)Mn=Ce[--Pe],Ce[Pe]=null,Ke=Ce[--Pe],Ce[Pe]=null,Qe=Ce[--Pe],Ce[Pe]=null}var Se=null,we=null,B=!1,je=null;function Vs(e,n){var t=_e(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Xa(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Se=e,we=dn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Se=e,we=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Mn!==null?{id:Qe,overflow:Ke}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=_e(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Se=e,we=null,!0):!1;default:return!1}}function Ki(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yi(e){if(B){var n=we;if(n){var t=n;if(!Xa(e,n)){if(Ki(e))throw Error(S(418));n=dn(t.nextSibling);var r=Se;n&&Xa(e,n)?Vs(r,t):(e.flags=e.flags&-4097|2,B=!1,Se=e)}}else{if(Ki(e))throw Error(S(418));e.flags=e.flags&-4097|2,B=!1,Se=e}}}function Ja(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function _r(e){if(e!==Se)return!1;if(!B)return Ja(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Vi(e.type,e.memoizedProps)),n&&(n=we)){if(Ki(e))throw Hs(),Error(S(418));for(;n;)Vs(e,n),n=dn(n.nextSibling)}if(Ja(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){we=dn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}we=null}}else we=Se?dn(e.stateNode.nextSibling):null;return!0}function Hs(){for(var e=we;e;)e=dn(e.nextSibling)}function st(){we=Se=null,B=!1}function Bl(e){je===null?je=[e]:je.push(e)}var rp=qe.ReactCurrentBatchConfig;function Oe(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var ro=Sn(null),oo=null,qn=null,Al=null;function Vl(){Al=qn=oo=null}function Hl(e){var n=ro.current;$(ro),e._currentValue=n}function Gi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function it(e,n){oo=e,Al=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(he=!0),e.firstContext=null)}function Le(e){var n=e._currentValue;if(Al!==e)if(e={context:e,memoizedValue:n,next:null},qn===null){if(oo===null)throw Error(S(308));qn=e,oo.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return n}var zn=null;function Wl(e){zn===null?zn=[e]:zn.push(e)}function Ws(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Wl(n)):(t.next=o.next,o.next=t),n.interleaved=t,Je(e,r)}function Je(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var nn=!1;function Ql(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qs(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function fn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,Je(e,t)}return o=r.interleaved,o===null?(n.next=n,Wl(r)):(n.next=o.next,o.next=n),r.interleaved=n,Je(e,t)}function Fr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Rl(e,t)}}function Za(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function io(e,n,t,r){var o=e.updateQueue;nn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,s=u.next;u.next=null,l===null?i=s:l.next=s,l=u;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=s:a.next=s,f.lastBaseUpdate=u))}if(i!==null){var h=o.baseState;l=0,f=s=u=null,a=i;do{var m=a.lane,g=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,y=a;switch(m=n,g=t,y.tag){case 1:if(w=y.payload,typeof w=="function"){h=w.call(g,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,m=typeof w=="function"?w.call(g,h,m):w,m==null)break e;h=H({},h,m);break e;case 2:nn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(s=f=g,u=h):f=f.next=g,l|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(f===null&&(u=h),o.baseState=u,o.firstBaseUpdate=s,o.lastBaseUpdate=f,n=o.shared.interleaved,n!==null){o=n;do l|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);Fn|=l,e.lanes=l,e.memoizedState=h}}function qa(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var Ks=new Wu.Component().refs;function Xi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:H({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Po={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ce(),o=hn(e),i=Ye(r,o);i.payload=n,t!=null&&(i.callback=t),n=fn(e,i,o),n!==null&&(De(n,e,o,r),Fr(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ce(),o=hn(e),i=Ye(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=fn(e,i,o),n!==null&&(De(n,e,o,r),Fr(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ce(),r=hn(e),o=Ye(t,r);o.tag=2,n!=null&&(o.callback=n),n=fn(e,o,r),n!==null&&(De(n,e,r,t),Fr(n,e,r))}};function ba(e,n,t,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):n.prototype&&n.prototype.isPureReactComponent?!Xt(t,r)||!Xt(o,i):!0}function Ys(e,n,t){var r=!1,o=yn,i=n.contextType;return typeof i=="object"&&i!==null?i=Le(i):(o=ve(n)?jn:ae.current,r=n.contextTypes,i=(r=r!=null)?ut(e,o):yn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Po,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function eu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Po.enqueueReplaceState(n,n.state,null)}function Ji(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs=Ks,Ql(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=Le(i):(i=ve(n)?jn:ae.current,o.context=ut(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Xi(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Po.enqueueReplaceState(o,o.state,null),io(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Pt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var a=o.refs;a===Ks&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function Nr(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function nu(e){var n=e._init;return n(e._payload)}function Gs(e){function n(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=mn(d,c),d.index=0,d.sibling=null,d}function i(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,p,v){return c===null||c.tag!==6?(c=di(p,d.mode,v),c.return=d,c):(c=o(c,p),c.return=d,c)}function u(d,c,p,v){var k=p.type;return k===Wn?f(d,c,p.props.children,v,p.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===en&&nu(k)===c.type)?(v=o(c,p.props),v.ref=Pt(d,c,p),v.return=d,v):(v=Hr(p.type,p.key,p.props,null,d.mode,v),v.ref=Pt(d,c,p),v.return=d,v)}function s(d,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=fi(p,d.mode,v),c.return=d,c):(c=o(c,p.children||[]),c.return=d,c)}function f(d,c,p,v,k){return c===null||c.tag!==7?(c=On(p,d.mode,v,k),c.return=d,c):(c=o(c,p),c.return=d,c)}function h(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=di(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case vr:return p=Hr(c.type,c.key,c.props,null,d.mode,p),p.ref=Pt(d,null,c),p.return=d,p;case Hn:return c=fi(c,d.mode,p),c.return=d,c;case en:var v=c._init;return h(d,v(c._payload),p)}if(zt(c)||St(c))return c=On(c,d.mode,p,null),c.return=d,c;Nr(d,c)}return null}function m(d,c,p,v){var k=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:a(d,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case vr:return p.key===k?u(d,c,p,v):null;case Hn:return p.key===k?s(d,c,p,v):null;case en:return k=p._init,m(d,c,k(p._payload),v)}if(zt(p)||St(p))return k!==null?null:f(d,c,p,v,null);Nr(d,p)}return null}function g(d,c,p,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(p)||null,a(c,d,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case vr:return d=d.get(v.key===null?p:v.key)||null,u(c,d,v,k);case Hn:return d=d.get(v.key===null?p:v.key)||null,s(c,d,v,k);case en:var C=v._init;return g(d,c,p,C(v._payload),k)}if(zt(v)||St(v))return d=d.get(p)||null,f(c,d,v,k,null);Nr(c,v)}return null}function w(d,c,p,v){for(var k=null,C=null,x=c,N=c=0,Q=null;x!==null&&N<p.length;N++){x.index>N?(Q=x,x=null):Q=x.sibling;var I=m(d,x,p[N],v);if(I===null){x===null&&(x=Q);break}e&&x&&I.alternate===null&&n(d,x),c=i(I,c,N),C===null?k=I:C.sibling=I,C=I,x=Q}if(N===p.length)return t(d,x),B&&Pn(d,N),k;if(x===null){for(;N<p.length;N++)x=h(d,p[N],v),x!==null&&(c=i(x,c,N),C===null?k=x:C.sibling=x,C=x);return B&&Pn(d,N),k}for(x=r(d,x);N<p.length;N++)Q=g(x,d,N,p[N],v),Q!==null&&(e&&Q.alternate!==null&&x.delete(Q.key===null?N:Q.key),c=i(Q,c,N),C===null?k=Q:C.sibling=Q,C=Q);return e&&x.forEach(function(Re){return n(d,Re)}),B&&Pn(d,N),k}function y(d,c,p,v){var k=St(p);if(typeof k!="function")throw Error(S(150));if(p=k.call(p),p==null)throw Error(S(151));for(var C=k=null,x=c,N=c=0,Q=null,I=p.next();x!==null&&!I.done;N++,I=p.next()){x.index>N?(Q=x,x=null):Q=x.sibling;var Re=m(d,x,I.value,v);if(Re===null){x===null&&(x=Q);break}e&&x&&Re.alternate===null&&n(d,x),c=i(Re,c,N),C===null?k=Re:C.sibling=Re,C=Re,x=Q}if(I.done)return t(d,x),B&&Pn(d,N),k;if(x===null){for(;!I.done;N++,I=p.next())I=h(d,I.value,v),I!==null&&(c=i(I,c,N),C===null?k=I:C.sibling=I,C=I);return B&&Pn(d,N),k}for(x=r(d,x);!I.done;N++,I=p.next())I=g(x,d,N,I.value,v),I!==null&&(e&&I.alternate!==null&&x.delete(I.key===null?N:I.key),c=i(I,c,N),C===null?k=I:C.sibling=I,C=I);return e&&x.forEach(function(yt){return n(d,yt)}),B&&Pn(d,N),k}function L(d,c,p,v){if(typeof p=="object"&&p!==null&&p.type===Wn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case vr:e:{for(var k=p.key,C=c;C!==null;){if(C.key===k){if(k=p.type,k===Wn){if(C.tag===7){t(d,C.sibling),c=o(C,p.props.children),c.return=d,d=c;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===en&&nu(k)===C.type){t(d,C.sibling),c=o(C,p.props),c.ref=Pt(d,C,p),c.return=d,d=c;break e}t(d,C);break}else n(d,C);C=C.sibling}p.type===Wn?(c=On(p.props.children,d.mode,v,p.key),c.return=d,d=c):(v=Hr(p.type,p.key,p.props,null,d.mode,v),v.ref=Pt(d,c,p),v.return=d,d=v)}return l(d);case Hn:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(d,c.sibling),c=o(c,p.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=fi(p,d.mode,v),c.return=d,d=c}return l(d);case en:return C=p._init,L(d,c,C(p._payload),v)}if(zt(p))return w(d,c,p,v);if(St(p))return y(d,c,p,v);Nr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(t(d,c.sibling),c=o(c,p),c.return=d,d=c):(t(d,c),c=di(p,d.mode,v),c.return=d,d=c),l(d)):t(d,c)}return L}var ct=Gs(!0),Xs=Gs(!1),cr={},Ve=Sn(cr),bt=Sn(cr),er=Sn(cr);function Rn(e){if(e===cr)throw Error(S(174));return e}function Kl(e,n){switch(F(er,n),F(bt,e),F(Ve,cr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Li(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Li(n,e)}$(Ve),F(Ve,n)}function dt(){$(Ve),$(bt),$(er)}function Js(e){Rn(er.current);var n=Rn(Ve.current),t=Li(n,e.type);n!==t&&(F(bt,e),F(Ve,t))}function Yl(e){bt.current===e&&($(Ve),$(bt))}var A=Sn(0);function lo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ii=[];function Gl(){for(var e=0;e<ii.length;e++)ii[e]._workInProgressVersionPrimary=null;ii.length=0}var Ur=qe.ReactCurrentDispatcher,li=qe.ReactCurrentBatchConfig,Dn=0,V=null,X=null,b=null,ao=!1,Ft=!1,nr=0,op=0;function oe(){throw Error(S(321))}function Xl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Fe(e[t],n[t]))return!1;return!0}function Jl(e,n,t,r,o,i){if(Dn=i,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ur.current=e===null||e.memoizedState===null?up:sp,e=t(r,o),Ft){i=0;do{if(Ft=!1,nr=0,25<=i)throw Error(S(301));i+=1,b=X=null,n.updateQueue=null,Ur.current=cp,e=t(r,o)}while(Ft)}if(Ur.current=uo,n=X!==null&&X.next!==null,Dn=0,b=X=V=null,ao=!1,n)throw Error(S(300));return e}function Zl(){var e=nr!==0;return nr=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?V.memoizedState=b=e:b=b.next=e,b}function ze(){if(X===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var n=b===null?V.memoizedState:b.next;if(n!==null)b=n,X=e;else{if(e===null)throw Error(S(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},b===null?V.memoizedState=b=e:b=b.next=e}return b}function tr(e,n){return typeof n=="function"?n(e):n}function ai(e){var n=ze(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=X,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,u=null,s=i;do{var f=s.lane;if((Dn&f)===f)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var h={lane:f,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=h,l=r):u=u.next=h,V.lanes|=f,Fn|=f}s=s.next}while(s!==null&&s!==i);u===null?l=r:u.next=a,Fe(r,n.memoizedState)||(he=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,V.lanes|=i,Fn|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ui(e){var n=ze(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Fe(i,n.memoizedState)||(he=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Zs(){}function qs(e,n){var t=V,r=ze(),o=n(),i=!Fe(r.memoizedState,o);if(i&&(r.memoizedState=o,he=!0),r=r.queue,ql(nc.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||b!==null&&b.memoizedState.tag&1){if(t.flags|=2048,rr(9,ec.bind(null,t,r,o,n),void 0,null),ee===null)throw Error(S(349));Dn&30||bs(t,n,o)}return o}function bs(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ec(e,n,t,r){n.value=t,n.getSnapshot=r,tc(n)&&rc(e)}function nc(e,n,t){return t(function(){tc(n)&&rc(e)})}function tc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Fe(e,t)}catch{return!0}}function rc(e){var n=Je(e,1);n!==null&&De(n,e,1,-1)}function tu(e){var n=$e();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},n.queue=e,e=e.dispatch=ap.bind(null,V,e),[n.memoizedState,e]}function rr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function oc(){return ze().memoizedState}function $r(e,n,t,r){var o=$e();V.flags|=e,o.memoizedState=rr(1|n,t,void 0,r===void 0?null:r)}function _o(e,n,t,r){var o=ze();r=r===void 0?null:r;var i=void 0;if(X!==null){var l=X.memoizedState;if(i=l.destroy,r!==null&&Xl(r,l.deps)){o.memoizedState=rr(n,t,i,r);return}}V.flags|=e,o.memoizedState=rr(1|n,t,i,r)}function ru(e,n){return $r(8390656,8,e,n)}function ql(e,n){return _o(2048,8,e,n)}function ic(e,n){return _o(4,2,e,n)}function lc(e,n){return _o(4,4,e,n)}function ac(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function uc(e,n,t){return t=t!=null?t.concat([e]):null,_o(4,4,ac.bind(null,n,e),t)}function bl(){}function sc(e,n){var t=ze();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Xl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function cc(e,n){var t=ze();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Xl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function dc(e,n,t){return Dn&21?(Fe(t,n)||(t=hs(),V.lanes|=t,Fn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=t)}function ip(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=li.transition;li.transition={};try{e(!1),n()}finally{M=t,li.transition=r}}function fc(){return ze().memoizedState}function lp(e,n,t){var r=hn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},pc(e))hc(n,t);else if(t=Ws(e,n,t,r),t!==null){var o=ce();De(t,e,r,o),mc(t,n,r)}}function ap(e,n,t){var r=hn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(pc(e))hc(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,a=i(l,t);if(o.hasEagerState=!0,o.eagerState=a,Fe(a,l)){var u=n.interleaved;u===null?(o.next=o,Wl(n)):(o.next=u.next,u.next=o),n.interleaved=o;return}}catch{}finally{}t=Ws(e,n,o,r),t!==null&&(o=ce(),De(t,e,r,o),mc(t,n,r))}}function pc(e){var n=e.alternate;return e===V||n!==null&&n===V}function hc(e,n){Ft=ao=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function mc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Rl(e,t)}}var uo={readContext:Le,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},up={readContext:Le,useCallback:function(e,n){return $e().memoizedState=[e,n===void 0?null:n],e},useContext:Le,useEffect:ru,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,$r(4194308,4,ac.bind(null,n,e),t)},useLayoutEffect:function(e,n){return $r(4194308,4,e,n)},useInsertionEffect:function(e,n){return $r(4,2,e,n)},useMemo:function(e,n){var t=$e();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=$e();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=lp.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var n=$e();return e={current:e},n.memoizedState=e},useState:tu,useDebugValue:bl,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=tu(!1),n=e[0];return e=ip.bind(null,e[1]),$e().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=V,o=$e();if(B){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),ee===null)throw Error(S(349));Dn&30||bs(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,ru(nc.bind(null,r,i,e),[e]),r.flags|=2048,rr(9,ec.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=$e(),n=ee.identifierPrefix;if(B){var t=Ke,r=Qe;t=(r&~(1<<32-Me(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=nr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=op++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},sp={readContext:Le,useCallback:sc,useContext:Le,useEffect:ql,useImperativeHandle:uc,useInsertionEffect:ic,useLayoutEffect:lc,useMemo:cc,useReducer:ai,useRef:oc,useState:function(){return ai(tr)},useDebugValue:bl,useDeferredValue:function(e){var n=ze();return dc(n,X.memoizedState,e)},useTransition:function(){var e=ai(tr)[0],n=ze().memoizedState;return[e,n]},useMutableSource:Zs,useSyncExternalStore:qs,useId:fc,unstable_isNewReconciler:!1},cp={readContext:Le,useCallback:sc,useContext:Le,useEffect:ql,useImperativeHandle:uc,useInsertionEffect:ic,useLayoutEffect:lc,useMemo:cc,useReducer:ui,useRef:oc,useState:function(){return ui(tr)},useDebugValue:bl,useDeferredValue:function(e){var n=ze();return X===null?n.memoizedState=e:dc(n,X.memoizedState,e)},useTransition:function(){var e=ui(tr)[0],n=ze().memoizedState;return[e,n]},useMutableSource:Zs,useSyncExternalStore:qs,useId:fc,unstable_isNewReconciler:!1};function ft(e,n){try{var t="",r=n;do t+=Fd(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function si(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Zi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var dp=typeof WeakMap=="function"?WeakMap:Map;function vc(e,n,t){t=Ye(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){co||(co=!0,al=r),Zi(e,n)},t}function gc(e,n,t){t=Ye(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Zi(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Zi(e,n),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function ou(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new dp;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Pp.bind(null,e,n,t),n.then(e,e))}function iu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function lu(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ye(-1,1),n.tag=2,fn(t,n,1))),t.lanes|=1),e)}var fp=qe.ReactCurrentOwner,he=!1;function se(e,n,t,r){n.child=e===null?Xs(n,null,t,r):ct(n,e.child,t,r)}function au(e,n,t,r,o){t=t.render;var i=n.ref;return it(n,o),r=Jl(e,n,t,r,i,o),t=Zl(),e!==null&&!he?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Ze(e,n,o)):(B&&t&&Ul(n),n.flags|=1,se(e,n,r,o),n.child)}function uu(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!aa(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,yc(e,n,i,r,o)):(e=Hr(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:Xt,t(l,r)&&e.ref===n.ref)return Ze(e,n,o)}return n.flags|=1,e=mn(i,r),e.ref=n.ref,e.return=n,n.child=e}function yc(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(Xt(i,r)&&e.ref===n.ref)if(he=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(he=!0);else return n.lanes=e.lanes,Ze(e,n,o)}return qi(e,n,t,r,o)}function wc(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(et,ye),ye|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,F(et,ye),ye|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,F(et,ye),ye|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,F(et,ye),ye|=r;return se(e,n,o,t),n.child}function Sc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function qi(e,n,t,r,o){var i=ve(t)?jn:ae.current;return i=ut(n,i),it(n,o),t=Jl(e,n,t,r,i,o),r=Zl(),e!==null&&!he?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Ze(e,n,o)):(B&&r&&Ul(n),n.flags|=1,se(e,n,t,o),n.child)}function su(e,n,t,r,o){if(ve(t)){var i=!0;eo(n)}else i=!1;if(it(n,o),n.stateNode===null)Br(e,n),Ys(n,t,r),Ji(n,t,r,o),r=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var u=l.context,s=t.contextType;typeof s=="object"&&s!==null?s=Le(s):(s=ve(t)?jn:ae.current,s=ut(n,s));var f=t.getDerivedStateFromProps,h=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==s)&&eu(n,l,r,s),nn=!1;var m=n.memoizedState;l.state=m,io(n,r,l,o),u=n.memoizedState,a!==r||m!==u||me.current||nn?(typeof f=="function"&&(Xi(n,t,f,r),u=n.memoizedState),(a=nn||ba(n,t,a,r,m,u,s))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),l.props=r,l.state=u,l.context=s,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,Qs(e,n),a=n.memoizedProps,s=n.type===n.elementType?a:Oe(n.type,a),l.props=s,h=n.pendingProps,m=l.context,u=t.contextType,typeof u=="object"&&u!==null?u=Le(u):(u=ve(t)?jn:ae.current,u=ut(n,u));var g=t.getDerivedStateFromProps;(f=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||m!==u)&&eu(n,l,r,u),nn=!1,m=n.memoizedState,l.state=m,io(n,r,l,o);var w=n.memoizedState;a!==h||m!==w||me.current||nn?(typeof g=="function"&&(Xi(n,t,g,r),w=n.memoizedState),(s=nn||ba(n,t,s,r,m,w,u)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,u)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),l.props=r,l.state=w,l.context=u,r=s):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return bi(e,n,t,r,i,o)}function bi(e,n,t,r,o,i){Sc(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return o&&Ga(n,t,!1),Ze(e,n,i);r=n.stateNode,fp.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=ct(n,e.child,null,i),n.child=ct(n,null,a,i)):se(e,n,a,i),n.memoizedState=r.state,o&&Ga(n,t,!0),n.child}function kc(e){var n=e.stateNode;n.pendingContext?Ya(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ya(e,n.context,!1),Kl(e,n.containerInfo)}function cu(e,n,t,r,o){return st(),Bl(o),n.flags|=256,se(e,n,t,r),n.child}var el={dehydrated:null,treeContext:null,retryLane:0};function nl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ec(e,n,t){var r=n.pendingProps,o=A.current,i=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),F(A,o&1),e===null)return Yi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,i?(r=n.mode,i=n.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=zo(l,r,0,null),e=On(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=nl(t),n.memoizedState=el,e):ea(n,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return pp(e,n,l,r,a,o,t);if(i){i=r.fallback,l=n.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=mn(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=mn(a,i):(i=On(i,l,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,l=e.child.memoizedState,l=l===null?nl(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=el,r}return i=e.child,e=i.sibling,r=mn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ea(e,n){return n=zo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Lr(e,n,t,r){return r!==null&&Bl(r),ct(n,e.child,null,t),e=ea(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function pp(e,n,t,r,o,i,l){if(t)return n.flags&256?(n.flags&=-257,r=si(Error(S(422))),Lr(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=zo({mode:"visible",children:r.children},o,0,null),i=On(i,o,l,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&ct(n,e.child,null,l),n.child.memoizedState=nl(l),n.memoizedState=el,i);if(!(n.mode&1))return Lr(e,n,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(S(419)),r=si(i,r,void 0),Lr(e,n,l,r)}if(a=(l&e.childLanes)!==0,he||a){if(r=ee,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Je(e,o),De(r,e,o,-1))}return la(),r=si(Error(S(421))),Lr(e,n,l,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=_p.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,we=dn(o.nextSibling),Se=n,B=!0,je=null,e!==null&&(Ce[Pe++]=Qe,Ce[Pe++]=Ke,Ce[Pe++]=Mn,Qe=e.id,Ke=e.overflow,Mn=n),n=ea(n,r.children),n.flags|=4096,n)}function du(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Gi(e.return,n,t)}function ci(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function xc(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(se(e,n,r.children,t),r=A.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&du(e,t,n);else if(e.tag===19)du(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(A,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&lo(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),ci(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&lo(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}ci(n,!0,t,null,i);break;case"together":ci(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Br(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ze(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Fn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=mn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=mn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function hp(e,n,t){switch(n.tag){case 3:kc(n),st();break;case 5:Js(n);break;case 1:ve(n.type)&&eo(n);break;case 4:Kl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;F(ro,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(F(A,A.current&1),n.flags|=128,null):t&n.child.childLanes?Ec(e,n,t):(F(A,A.current&1),e=Ze(e,n,t),e!==null?e.sibling:null);F(A,A.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return xc(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),F(A,A.current),r)break;return null;case 22:case 23:return n.lanes=0,wc(e,n,t)}return Ze(e,n,t)}var Cc,tl,Pc,_c;Cc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};tl=function(){};Pc=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Rn(Ve.current);var i=null;switch(t){case"input":o=Ci(e,o),r=Ci(e,r),i=[];break;case"select":o=H({},o,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":o=Ni(e,o),r=Ni(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qr)}zi(t,r);var l;t=null;for(s in o)if(!r.hasOwnProperty(s)&&o.hasOwnProperty(s)&&o[s]!=null)if(s==="style"){var a=o[s];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vt.hasOwnProperty(s)?i||(i=[]):(i=i||[]).push(s,null));for(s in r){var u=r[s];if(a=o!=null?o[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(t||(t={}),t[l]=u[l])}else t||(i||(i=[]),i.push(s,t)),t=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Vt.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&U("scroll",e),i||a===u||(i=[])):(i=i||[]).push(s,u))}t&&(i=i||[]).push("style",t);var s=i;(n.updateQueue=s)&&(n.flags|=4)}};_c=function(e,n,t,r){t!==r&&(n.flags|=4)};function _t(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function mp(e,n,t){var r=n.pendingProps;switch($l(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return ve(n.type)&&br(),ie(n),null;case 3:return r=n.stateNode,dt(),$(me),$(ae),Gl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_r(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,je!==null&&(cl(je),je=null))),tl(e,n),ie(n),null;case 5:Yl(n);var o=Rn(er.current);if(t=n.type,e!==null&&n.stateNode!=null)Pc(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return ie(n),null}if(e=Rn(Ve.current),_r(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Be]=n,r[qt]=i,e=(n.mode&1)!==0,t){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(o=0;o<Tt.length;o++)U(Tt[o],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Sa(r,i),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},U("invalid",r);break;case"textarea":Ea(r,i),U("invalid",r)}zi(t,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Pr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Pr(r.textContent,a,e),o=["children",""+a]):Vt.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&U("scroll",r)}switch(t){case"input":gr(r),ka(r,i,!0);break;case"textarea":gr(r),xa(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=qr)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[Be]=n,e[qt]=r,Cc(e,n,!1,!1),n.stateNode=e;e:{switch(l=Ri(t,r),t){case"dialog":U("cancel",e),U("close",e),o=r;break;case"iframe":case"object":case"embed":U("load",e),o=r;break;case"video":case"audio":for(o=0;o<Tt.length;o++)U(Tt[o],e);o=r;break;case"source":U("error",e),o=r;break;case"img":case"image":case"link":U("error",e),U("load",e),o=r;break;case"details":U("toggle",e),o=r;break;case"input":Sa(e,r),o=Ci(e,r),U("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=H({},r,{value:void 0}),U("invalid",e);break;case"textarea":Ea(e,r),o=Ni(e,r),U("invalid",e);break;default:o=r}zi(t,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?ts(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&es(e,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Ht(e,u):typeof u=="number"&&Ht(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Vt.hasOwnProperty(i)?u!=null&&i==="onScroll"&&U("scroll",e):u!=null&&Cl(e,i,u,l))}switch(t){case"input":gr(e),ka(e,r,!1);break;case"textarea":gr(e),xa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?nt(e,!!r.multiple,i,!1):r.defaultValue!=null&&nt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=qr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)_c(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=Rn(er.current),Rn(Ve.current),_r(n)){if(r=n.stateNode,t=n.memoizedProps,r[Be]=n,(i=r.nodeValue!==t)&&(e=Se,e!==null))switch(e.tag){case 3:Pr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Be]=n,n.stateNode=r}return ie(n),null;case 13:if($(A),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&we!==null&&n.mode&1&&!(n.flags&128))Hs(),st(),n.flags|=98560,i=!1;else if(i=_r(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[Be]=n}else st(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),i=!1}else je!==null&&(cl(je),je=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||A.current&1?J===0&&(J=3):la())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return dt(),tl(e,n),e===null&&Jt(n.stateNode.containerInfo),ie(n),null;case 10:return Hl(n.type._context),ie(n),null;case 17:return ve(n.type)&&br(),ie(n),null;case 19:if($(A),i=n.memoizedState,i===null)return ie(n),null;if(r=(n.flags&128)!==0,l=i.rendering,l===null)if(r)_t(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=lo(e),l!==null){for(n.flags|=128,_t(i,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return F(A,A.current&1|2),n.child}e=e.sibling}i.tail!==null&&Y()>pt&&(n.flags|=128,r=!0,_t(i,!1),n.lanes=4194304)}else{if(!r)if(e=lo(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),_t(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!B)return ie(n),null}else 2*Y()-i.renderingStartTime>pt&&t!==1073741824&&(n.flags|=128,r=!0,_t(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Y(),n.sibling=null,t=A.current,F(A,r?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return ia(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ye&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function vp(e,n){switch($l(n),n.tag){case 1:return ve(n.type)&&br(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return dt(),$(me),$(ae),Gl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Yl(n),null;case 13:if($(A),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));st()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(A),null;case 4:return dt(),null;case 10:return Hl(n.type._context),null;case 22:case 23:return ia(),null;case 24:return null;default:return null}}var zr=!1,le=!1,gp=typeof WeakSet=="function"?WeakSet:Set,P=null;function bn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){W(e,n,r)}else t.current=null}function rl(e,n,t){try{t()}catch(r){W(e,n,r)}}var fu=!1;function yp(e,n){if(Bi=Xr,e=Rs(),Fl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,a=-1,u=-1,s=0,f=0,h=e,m=null;n:for(;;){for(var g;h!==t||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(u=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===e)break n;if(m===t&&++s===o&&(a=l),m===i&&++f===r&&(u=l),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ai={focusedElem:e,selectionRange:t},Xr=!1,P=n;P!==null;)if(n=P,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,P=e;else for(;P!==null;){n=P;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,L=w.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?y:Oe(n.type,y),L);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){W(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,P=e;break}P=n.return}return w=fu,fu=!1,w}function Ut(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&rl(n,t,i)}o=o.next}while(o!==r)}}function No(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ol(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Nc(e){var n=e.alternate;n!==null&&(e.alternate=null,Nc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Be],delete n[qt],delete n[Wi],delete n[ep],delete n[np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lc(e){return e.tag===5||e.tag===3||e.tag===4}function pu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function il(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=qr));else if(r!==4&&(e=e.child,e!==null))for(il(e,n,t),e=e.sibling;e!==null;)il(e,n,t),e=e.sibling}function ll(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ll(e,n,t),e=e.sibling;e!==null;)ll(e,n,t),e=e.sibling}var ne=null,Ie=!1;function be(e,n,t){for(t=t.child;t!==null;)zc(e,n,t),t=t.sibling}function zc(e,n,t){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(wo,t)}catch{}switch(t.tag){case 5:le||bn(t,n);case 6:var r=ne,o=Ie;ne=null,be(e,n,t),ne=r,Ie=o,ne!==null&&(Ie?(e=ne,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ne.removeChild(t.stateNode));break;case 18:ne!==null&&(Ie?(e=ne,t=t.stateNode,e.nodeType===8?ri(e.parentNode,t):e.nodeType===1&&ri(e,t),Yt(e)):ri(ne,t.stateNode));break;case 4:r=ne,o=Ie,ne=t.stateNode.containerInfo,Ie=!0,be(e,n,t),ne=r,Ie=o;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&rl(t,n,l),o=o.next}while(o!==r)}be(e,n,t);break;case 1:if(!le&&(bn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){W(t,n,a)}be(e,n,t);break;case 21:be(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,be(e,n,t),le=r):be(e,n,t);break;default:be(e,n,t)}}function hu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new gp),n.forEach(function(r){var o=Np.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Te(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Ie=!1;break e;case 3:ne=a.stateNode.containerInfo,Ie=!0;break e;case 4:ne=a.stateNode.containerInfo,Ie=!0;break e}a=a.return}if(ne===null)throw Error(S(160));zc(i,l,o),ne=null,Ie=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(s){W(o,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Rc(n,e),n=n.sibling}function Rc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(n,e),Ue(e),r&4){try{Ut(3,e,e.return),No(3,e)}catch(y){W(e,e.return,y)}try{Ut(5,e,e.return)}catch(y){W(e,e.return,y)}}break;case 1:Te(n,e),Ue(e),r&512&&t!==null&&bn(t,t.return);break;case 5:if(Te(n,e),Ue(e),r&512&&t!==null&&bn(t,t.return),e.flags&32){var o=e.stateNode;try{Ht(o,"")}catch(y){W(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Zu(o,i),Ri(a,l);var s=Ri(a,i);for(l=0;l<u.length;l+=2){var f=u[l],h=u[l+1];f==="style"?ts(o,h):f==="dangerouslySetInnerHTML"?es(o,h):f==="children"?Ht(o,h):Cl(o,f,h,s)}switch(a){case"input":Pi(o,i);break;case"textarea":qu(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?nt(o,!!i.multiple,g,!1):m!==!!i.multiple&&(i.defaultValue!=null?nt(o,!!i.multiple,i.defaultValue,!0):nt(o,!!i.multiple,i.multiple?[]:"",!1))}o[qt]=i}catch(y){W(e,e.return,y)}}break;case 6:if(Te(n,e),Ue(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){W(e,e.return,y)}}break;case 3:if(Te(n,e),Ue(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Yt(n.containerInfo)}catch(y){W(e,e.return,y)}break;case 4:Te(n,e),Ue(e);break;case 13:Te(n,e),Ue(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ra=Y())),r&4&&hu(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(le=(s=le)||f,Te(n,e),le=s):Te(n,e),Ue(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!f&&e.mode&1)for(P=e,f=e.child;f!==null;){for(h=P=f;P!==null;){switch(m=P,g=m.child,m.tag){case 0:case 11:case 14:case 15:Ut(4,m,m.return);break;case 1:bn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(y){W(r,t,y)}}break;case 5:bn(m,m.return);break;case 22:if(m.memoizedState!==null){vu(h);continue}}g!==null?(g.return=m,P=g):vu(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{o=h.stateNode,s?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,u=h.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=ns("display",l))}catch(y){W(e,e.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=s?"":h.memoizedProps}catch(y){W(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Te(n,e),Ue(e),r&4&&hu(e);break;case 21:break;default:Te(n,e),Ue(e)}}function Ue(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Lc(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ht(o,""),r.flags&=-33);var i=pu(e);ll(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=pu(e);il(e,a,l);break;default:throw Error(S(161))}}catch(u){W(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function wp(e,n,t){P=e,Tc(e)}function Tc(e,n,t){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||zr;if(!l){var a=o.alternate,u=a!==null&&a.memoizedState!==null||le;a=zr;var s=le;if(zr=l,(le=u)&&!s)for(P=o;P!==null;)l=P,u=l.child,l.tag===22&&l.memoizedState!==null?gu(o):u!==null?(u.return=l,P=u):gu(o);for(;i!==null;)P=i,Tc(i),i=i.sibling;P=o,zr=a,le=s}mu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):mu(e)}}function mu(e){for(;P!==null;){var n=P;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||No(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:Oe(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&qa(n,i,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}qa(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var f=s.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Yt(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}le||n.flags&512&&ol(n)}catch(m){W(n,n.return,m)}}if(n===e){P=null;break}if(t=n.sibling,t!==null){t.return=n.return,P=t;break}P=n.return}}function vu(e){for(;P!==null;){var n=P;if(n===e){P=null;break}var t=n.sibling;if(t!==null){t.return=n.return,P=t;break}P=n.return}}function gu(e){for(;P!==null;){var n=P;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{No(4,n)}catch(u){W(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(u){W(n,o,u)}}var i=n.return;try{ol(n)}catch(u){W(n,i,u)}break;case 5:var l=n.return;try{ol(n)}catch(u){W(n,l,u)}}}catch(u){W(n,n.return,u)}if(n===e){P=null;break}var a=n.sibling;if(a!==null){a.return=n.return,P=a;break}P=n.return}}var Sp=Math.ceil,so=qe.ReactCurrentDispatcher,na=qe.ReactCurrentOwner,Ne=qe.ReactCurrentBatchConfig,j=0,ee=null,G=null,te=0,ye=0,et=Sn(0),J=0,or=null,Fn=0,Lo=0,ta=0,$t=null,pe=null,ra=0,pt=1/0,He=null,co=!1,al=null,pn=null,Rr=!1,ln=null,fo=0,Bt=0,ul=null,Ar=-1,Vr=0;function ce(){return j&6?Y():Ar!==-1?Ar:Ar=Y()}function hn(e){return e.mode&1?j&2&&te!==0?te&-te:rp.transition!==null?(Vr===0&&(Vr=hs()),Vr):(e=M,e!==0||(e=window.event,e=e===void 0?16:ks(e.type)),e):1}function De(e,n,t,r){if(50<Bt)throw Bt=0,ul=null,Error(S(185));ar(e,t,r),(!(j&2)||e!==ee)&&(e===ee&&(!(j&2)&&(Lo|=t),J===4&&rn(e,te)),ge(e,r),t===1&&j===0&&!(n.mode&1)&&(pt=Y()+500,Co&&kn()))}function ge(e,n){var t=e.callbackNode;tf(e,n);var r=Gr(e,e===ee?te:0);if(r===0)t!==null&&_a(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&_a(t),n===1)e.tag===0?tp(yu.bind(null,e)):Bs(yu.bind(null,e)),qf(function(){!(j&6)&&kn()}),t=null;else{switch(ms(r)){case 1:t=zl;break;case 4:t=fs;break;case 16:t=Yr;break;case 536870912:t=ps;break;default:t=Yr}t=$c(t,Oc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Oc(e,n){if(Ar=-1,Vr=0,j&6)throw Error(S(327));var t=e.callbackNode;if(lt()&&e.callbackNode!==t)return null;var r=Gr(e,e===ee?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=po(e,r);else{n=r;var o=j;j|=2;var i=jc();(ee!==e||te!==n)&&(He=null,pt=Y()+500,Tn(e,n));do try{xp();break}catch(a){Ic(e,a)}while(1);Vl(),so.current=i,j=o,G!==null?n=0:(ee=null,te=0,n=J)}if(n!==0){if(n===2&&(o=Mi(e),o!==0&&(r=o,n=sl(e,o))),n===1)throw t=or,Tn(e,0),rn(e,r),ge(e,Y()),t;if(n===6)rn(e,r);else{if(o=e.current.alternate,!(r&30)&&!kp(o)&&(n=po(e,r),n===2&&(i=Mi(e),i!==0&&(r=i,n=sl(e,i))),n===1))throw t=or,Tn(e,0),rn(e,r),ge(e,Y()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:_n(e,pe,He);break;case 3:if(rn(e,r),(r&130023424)===r&&(n=ra+500-Y(),10<n)){if(Gr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Hi(_n.bind(null,e,pe,He),n);break}_n(e,pe,He);break;case 4:if(rn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var l=31-Me(r);i=1<<l,l=n[l],l>o&&(o=l),r&=~i}if(r=o,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sp(r/1960))-r,10<r){e.timeoutHandle=Hi(_n.bind(null,e,pe,He),r);break}_n(e,pe,He);break;case 5:_n(e,pe,He);break;default:throw Error(S(329))}}}return ge(e,Y()),e.callbackNode===t?Oc.bind(null,e):null}function sl(e,n){var t=$t;return e.current.memoizedState.isDehydrated&&(Tn(e,n).flags|=256),e=po(e,n),e!==2&&(n=pe,pe=t,n!==null&&cl(n)),e}function cl(e){pe===null?pe=e:pe.push.apply(pe,e)}function kp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!Fe(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rn(e,n){for(n&=~ta,n&=~Lo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Me(n),r=1<<t;e[t]=-1,n&=~r}}function yu(e){if(j&6)throw Error(S(327));lt();var n=Gr(e,0);if(!(n&1))return ge(e,Y()),null;var t=po(e,n);if(e.tag!==0&&t===2){var r=Mi(e);r!==0&&(n=r,t=sl(e,r))}if(t===1)throw t=or,Tn(e,0),rn(e,n),ge(e,Y()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,_n(e,pe,He),ge(e,Y()),null}function oa(e,n){var t=j;j|=1;try{return e(n)}finally{j=t,j===0&&(pt=Y()+500,Co&&kn())}}function Un(e){ln!==null&&ln.tag===0&&!(j&6)&&lt();var n=j;j|=1;var t=Ne.transition,r=M;try{if(Ne.transition=null,M=1,e)return e()}finally{M=r,Ne.transition=t,j=n,!(j&6)&&kn()}}function ia(){ye=et.current,$(et)}function Tn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Zf(t)),G!==null)for(t=G.return;t!==null;){var r=t;switch($l(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&br();break;case 3:dt(),$(me),$(ae),Gl();break;case 5:Yl(r);break;case 4:dt();break;case 13:$(A);break;case 19:$(A);break;case 10:Hl(r.type._context);break;case 22:case 23:ia()}t=t.return}if(ee=e,G=e=mn(e.current,null),te=ye=n,J=0,or=null,ta=Lo=Fn=0,pe=$t=null,zn!==null){for(n=0;n<zn.length;n++)if(t=zn[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}t.pending=r}zn=null}return e}function Ic(e,n){do{var t=G;try{if(Vl(),Ur.current=uo,ao){for(var r=V.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ao=!1}if(Dn=0,b=X=V=null,Ft=!1,nr=0,na.current=null,t===null||t.return===null){J=1,or=n,G=null;break}e:{var i=e,l=t.return,a=t,u=n;if(n=te,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=iu(l);if(g!==null){g.flags&=-257,lu(g,l,a,i,n),g.mode&1&&ou(i,s,n),n=g,u=s;var w=n.updateQueue;if(w===null){var y=new Set;y.add(u),n.updateQueue=y}else w.add(u);break e}else{if(!(n&1)){ou(i,s,n),la();break e}u=Error(S(426))}}else if(B&&a.mode&1){var L=iu(l);if(L!==null){!(L.flags&65536)&&(L.flags|=256),lu(L,l,a,i,n),Bl(ft(u,a));break e}}i=u=ft(u,a),J!==4&&(J=2),$t===null?$t=[i]:$t.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=vc(i,u,n);Za(i,d);break e;case 1:a=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(pn===null||!pn.has(p)))){i.flags|=65536,n&=-n,i.lanes|=n;var v=gc(i,a,n);Za(i,v);break e}}i=i.return}while(i!==null)}Dc(t)}catch(k){n=k,G===t&&t!==null&&(G=t=t.return);continue}break}while(1)}function jc(){var e=so.current;return so.current=uo,e===null?uo:e}function la(){(J===0||J===3||J===2)&&(J=4),ee===null||!(Fn&268435455)&&!(Lo&268435455)||rn(ee,te)}function po(e,n){var t=j;j|=2;var r=jc();(ee!==e||te!==n)&&(He=null,Tn(e,n));do try{Ep();break}catch(o){Ic(e,o)}while(1);if(Vl(),j=t,so.current=r,G!==null)throw Error(S(261));return ee=null,te=0,J}function Ep(){for(;G!==null;)Mc(G)}function xp(){for(;G!==null&&!Yd();)Mc(G)}function Mc(e){var n=Uc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,n===null?Dc(e):G=n,na.current=null}function Dc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=vp(t,n),t!==null){t.flags&=32767,G=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,G=null;return}}else if(t=mp(t,n,ye),t!==null){G=t;return}if(n=n.sibling,n!==null){G=n;return}G=n=e}while(n!==null);J===0&&(J=5)}function _n(e,n,t){var r=M,o=Ne.transition;try{Ne.transition=null,M=1,Cp(e,n,t,r)}finally{Ne.transition=o,M=r}return null}function Cp(e,n,t,r){do lt();while(ln!==null);if(j&6)throw Error(S(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(rf(e,i),e===ee&&(G=ee=null,te=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Rr||(Rr=!0,$c(Yr,function(){return lt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ne.transition,Ne.transition=null;var l=M;M=1;var a=j;j|=4,na.current=null,yp(e,t),Rc(t,e),Wf(Ai),Xr=!!Bi,Ai=Bi=null,e.current=t,wp(t),Gd(),j=a,M=l,Ne.transition=i}else e.current=t;if(Rr&&(Rr=!1,ln=e,fo=o),i=e.pendingLanes,i===0&&(pn=null),Zd(t.stateNode),ge(e,Y()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(co)throw co=!1,e=al,al=null,e;return fo&1&&e.tag!==0&&lt(),i=e.pendingLanes,i&1?e===ul?Bt++:(Bt=0,ul=e):Bt=0,kn(),null}function lt(){if(ln!==null){var e=ms(fo),n=Ne.transition,t=M;try{if(Ne.transition=null,M=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,fo=0,j&6)throw Error(S(331));var o=j;for(j|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(P=s;P!==null;){var f=P;switch(f.tag){case 0:case 11:case 15:Ut(8,f,i)}var h=f.child;if(h!==null)h.return=f,P=h;else for(;P!==null;){f=P;var m=f.sibling,g=f.return;if(Nc(f),f===s){P=null;break}if(m!==null){m.return=g,P=m;break}P=g}}}var w=i.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var L=y.sibling;y.sibling=null,y=L}while(y!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ut(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,P=d;break e}P=i.return}}var c=e.current;for(P=c;P!==null;){l=P;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,P=p;else e:for(l=c;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:No(9,a)}}catch(k){W(a,a.return,k)}if(a===l){P=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,P=v;break e}P=a.return}}if(j=o,kn(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(wo,e)}catch{}r=!0}return r}finally{M=t,Ne.transition=n}}return!1}function wu(e,n,t){n=ft(t,n),n=vc(e,n,1),e=fn(e,n,1),n=ce(),e!==null&&(ar(e,1,n),ge(e,n))}function W(e,n,t){if(e.tag===3)wu(e,e,t);else for(;n!==null;){if(n.tag===3){wu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=ft(t,e),e=gc(n,e,1),n=fn(n,e,1),e=ce(),n!==null&&(ar(n,1,e),ge(n,e));break}}n=n.return}}function Pp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ce(),e.pingedLanes|=e.suspendedLanes&t,ee===e&&(te&t)===t&&(J===4||J===3&&(te&130023424)===te&&500>Y()-ra?Tn(e,0):ta|=t),ge(e,n)}function Fc(e,n){n===0&&(e.mode&1?(n=Sr,Sr<<=1,!(Sr&130023424)&&(Sr=4194304)):n=1);var t=ce();e=Je(e,n),e!==null&&(ar(e,n,t),ge(e,t))}function _p(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Fc(e,t)}function Np(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),Fc(e,t)}var Uc;Uc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)he=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return he=!1,hp(e,n,t);he=!!(e.flags&131072)}else he=!1,B&&n.flags&1048576&&As(n,to,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Br(e,n),e=n.pendingProps;var o=ut(n,ae.current);it(n,t),o=Jl(null,n,r,e,o,t);var i=Zl();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ve(r)?(i=!0,eo(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ql(n),o.updater=Po,n.stateNode=o,o._reactInternals=n,Ji(n,r,e,t),n=bi(null,n,r,!0,i,t)):(n.tag=0,B&&i&&Ul(n),se(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Br(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=zp(r),e=Oe(r,e),o){case 0:n=qi(null,n,r,e,t);break e;case 1:n=su(null,n,r,e,t);break e;case 11:n=au(null,n,r,e,t);break e;case 14:n=uu(null,n,r,Oe(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Oe(r,o),qi(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Oe(r,o),su(e,n,r,o,t);case 3:e:{if(kc(n),e===null)throw Error(S(387));r=n.pendingProps,i=n.memoizedState,o=i.element,Qs(e,n),io(n,r,null,t);var l=n.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=ft(Error(S(423)),n),n=cu(e,n,r,t,o);break e}else if(r!==o){o=ft(Error(S(424)),n),n=cu(e,n,r,t,o);break e}else for(we=dn(n.stateNode.containerInfo.firstChild),Se=n,B=!0,je=null,t=Xs(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(st(),r===o){n=Ze(e,n,t);break e}se(e,n,r,t)}n=n.child}return n;case 5:return Js(n),e===null&&Yi(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Vi(r,o)?l=null:i!==null&&Vi(r,i)&&(n.flags|=32),Sc(e,n),se(e,n,l,t),n.child;case 6:return e===null&&Yi(n),null;case 13:return Ec(e,n,t);case 4:return Kl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ct(n,null,r,t):se(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Oe(r,o),au(e,n,r,o,t);case 7:return se(e,n,n.pendingProps,t),n.child;case 8:return se(e,n,n.pendingProps.children,t),n.child;case 12:return se(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,l=o.value,F(ro,r._currentValue),r._currentValue=l,i!==null)if(Fe(i.value,l)){if(i.children===o.children&&!me.current){n=Ze(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ye(-1,t&-t),u.tag=2;var s=i.updateQueue;if(s!==null){s=s.shared;var f=s.pending;f===null?u.next=u:(u.next=f.next,f.next=u),s.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Gi(i.return,t,n),a.lanes|=t;break}u=u.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Gi(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}se(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,it(n,t),o=Le(o),r=r(o),n.flags|=1,se(e,n,r,t),n.child;case 14:return r=n.type,o=Oe(r,n.pendingProps),o=Oe(r.type,o),uu(e,n,r,o,t);case 15:return yc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Oe(r,o),Br(e,n),n.tag=1,ve(r)?(e=!0,eo(n)):e=!1,it(n,t),Ys(n,r,o),Ji(n,r,o,t),bi(null,n,r,!0,e,t);case 19:return xc(e,n,t);case 22:return wc(e,n,t)}throw Error(S(156,n.tag))};function $c(e,n){return ds(e,n)}function Lp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,n,t,r){return new Lp(e,n,t,r)}function aa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zp(e){if(typeof e=="function")return aa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_l)return 11;if(e===Nl)return 14}return 2}function mn(e,n){var t=e.alternate;return t===null?(t=_e(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Hr(e,n,t,r,o,i){var l=2;if(r=e,typeof e=="function")aa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Wn:return On(t.children,o,i,n);case Pl:l=8,o|=8;break;case Si:return e=_e(12,t,n,o|2),e.elementType=Si,e.lanes=i,e;case ki:return e=_e(13,t,n,o),e.elementType=ki,e.lanes=i,e;case Ei:return e=_e(19,t,n,o),e.elementType=Ei,e.lanes=i,e;case Gu:return zo(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ku:l=10;break e;case Yu:l=9;break e;case _l:l=11;break e;case Nl:l=14;break e;case en:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=_e(l,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function On(e,n,t,r){return e=_e(7,e,r,n),e.lanes=t,e}function zo(e,n,t,r){return e=_e(22,e,r,n),e.elementType=Gu,e.lanes=t,e.stateNode={isHidden:!1},e}function di(e,n,t){return e=_e(6,e,null,n),e.lanes=t,e}function fi(e,n,t){return n=_e(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Rp(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ko(0),this.expirationTimes=Ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ko(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ua(e,n,t,r,o,i,l,a,u){return e=new Rp(e,n,t,a,u),n===1?(n=1,i===!0&&(n|=8)):n=0,i=_e(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ql(i),e}function Tp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Bc(e){if(!e)return yn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ve(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(ve(t))return $s(e,t,n)}return n}function Ac(e,n,t,r,o,i,l,a,u){return e=ua(t,r,!0,e,o,i,l,a,u),e.context=Bc(null),t=e.current,r=ce(),o=hn(t),i=Ye(r,o),i.callback=n??null,fn(t,i,o),e.current.lanes=o,ar(e,o,r),ge(e,r),e}function Ro(e,n,t,r){var o=n.current,i=ce(),l=hn(o);return t=Bc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ye(i,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=fn(o,n,l),e!==null&&(De(e,o,l,i),Fr(e,o,l)),l}function ho(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Su(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function sa(e,n){Su(e,n),(e=e.alternate)&&Su(e,n)}function Op(){return null}var Vc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ca(e){this._internalRoot=e}To.prototype.render=ca.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));Ro(e,n,null,null)};To.prototype.unmount=ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Un(function(){Ro(null,e,null,null)}),n[Xe]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var n=ys();e={blockedOn:null,target:e,priority:n};for(var t=0;t<tn.length&&n!==0&&n<tn[t].priority;t++);tn.splice(t,0,e),t===0&&Ss(e)}};function da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ku(){}function Ip(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var s=ho(l);i.call(s)}}var l=Ac(n,r,e,0,null,!1,!1,"",ku);return e._reactRootContainer=l,e[Xe]=l.current,Jt(e.nodeType===8?e.parentNode:e),Un(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var s=ho(u);a.call(s)}}var u=ua(e,0,!1,null,null,!1,!1,"",ku);return e._reactRootContainer=u,e[Xe]=u.current,Jt(e.nodeType===8?e.parentNode:e),Un(function(){Ro(n,u,t,r)}),u}function Io(e,n,t,r,o){var i=t._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var u=ho(l);a.call(u)}}Ro(n,l,e,o)}else l=Ip(t,n,e,o,r);return ho(l)}vs=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Rt(n.pendingLanes);t!==0&&(Rl(n,t|1),ge(n,Y()),!(j&6)&&(pt=Y()+500,kn()))}break;case 13:Un(function(){var r=Je(e,1);if(r!==null){var o=ce();De(r,e,1,o)}}),sa(e,1)}};Tl=function(e){if(e.tag===13){var n=Je(e,134217728);if(n!==null){var t=ce();De(n,e,134217728,t)}sa(e,134217728)}};gs=function(e){if(e.tag===13){var n=hn(e),t=Je(e,n);if(t!==null){var r=ce();De(t,e,n,r)}sa(e,n)}};ys=function(){return M};ws=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};Oi=function(e,n,t){switch(n){case"input":if(Pi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=xo(r);if(!o)throw Error(S(90));Ju(r),Pi(r,o)}}}break;case"textarea":qu(e,t);break;case"select":n=t.value,n!=null&&nt(e,!!t.multiple,n,!1)}};is=oa;ls=Un;var jp={usingClientEntryPoint:!1,Events:[sr,Gn,xo,rs,os,oa]},Nt={findFiberByHostInstance:Ln,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Mp={bundleType:Nt.bundleType,version:Nt.version,rendererPackageName:Nt.rendererPackageName,rendererConfig:Nt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ss(e),e===null?null:e.stateNode},findFiberByHostInstance:Nt.findFiberByHostInstance||Op,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tr.isDisabled&&Tr.supportsFiber)try{wo=Tr.inject(Mp),Ae=Tr}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jp;Ee.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!da(n))throw Error(S(200));return Tp(e,n,null,t)};Ee.createRoot=function(e,n){if(!da(e))throw Error(S(299));var t=!1,r="",o=Vc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=ua(e,1,!1,null,null,t,!1,r,o),e[Xe]=n.current,Jt(e.nodeType===8?e.parentNode:e),new ca(n)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ss(n),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Un(e)};Ee.hydrate=function(e,n,t){if(!Oo(n))throw Error(S(200));return Io(null,e,n,!0,t)};Ee.hydrateRoot=function(e,n,t){if(!da(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",l=Vc;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Ac(n,null,e,1,t??null,o,!1,i,l),e[Xe]=n.current,Jt(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new To(n)};Ee.render=function(e,n,t){if(!Oo(n))throw Error(S(200));return Io(null,e,n,!1,t)};Ee.unmountComponentAtNode=function(e){if(!Oo(e))throw Error(S(40));return e._reactRootContainer?(Un(function(){Io(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};Ee.unstable_batchedUpdates=oa;Ee.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Oo(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Io(e,n,t,!1,r)};Ee.version="18.2.0-next-9e3b772b8-20220608";(function(e){function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}n(),e.exports=Ee})(Td);var Eu=gi;vi.createRoot=Eu.createRoot,vi.hydrateRoot=Eu.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ir.apply(this,arguments)}var an;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(an||(an={}));const xu="popstate";function Dp(e){e===void 0&&(e={});function n(o,i){let{pathname:l="/",search:a="",hash:u=""}=An(o.location.hash.substr(1));return dl("",{pathname:l,search:a,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(o,i){let l=o.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let u=o.location.href,s=u.indexOf("#");a=s===-1?u:u.slice(0,s)}return a+"#"+(typeof i=="string"?i:mo(i))}function r(o,i){jo(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Up(n,t,r,e)}function Z(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function jo(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Fp(){return Math.random().toString(36).substr(2,8)}function Cu(e,n){return{usr:e.state,key:e.key,idx:n}}function dl(e,n,t,r){return t===void 0&&(t=null),ir({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?An(n):n,{state:t,key:n&&n.key||r||Fp()})}function mo(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function An(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Up(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=an.Pop,u=null,s=f();s==null&&(s=0,l.replaceState(ir({},l.state,{idx:s}),""));function f(){return(l.state||{idx:null}).idx}function h(){a=an.Pop;let L=f(),d=L==null?null:L-s;s=L,u&&u({action:a,location:y.location,delta:d})}function m(L,d){a=an.Push;let c=dl(y.location,L,d);t&&t(c,L),s=f()+1;let p=Cu(c,s),v=y.createHref(c);try{l.pushState(p,"",v)}catch{o.location.assign(v)}i&&u&&u({action:a,location:y.location,delta:1})}function g(L,d){a=an.Replace;let c=dl(y.location,L,d);t&&t(c,L),s=f();let p=Cu(c,s),v=y.createHref(c);l.replaceState(p,"",v),i&&u&&u({action:a,location:y.location,delta:0})}function w(L){let d=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof L=="string"?L:mo(L);return Z(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let y={get action(){return a},get location(){return e(o,l)},listen(L){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(xu,h),u=L,()=>{o.removeEventListener(xu,h),u=null}},createHref(L){return n(o,L)},createURL:w,encodeLocation(L){let d=w(L);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:m,replace:g,go(L){return l.go(L)}};return y}var Pu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Pu||(Pu={}));function $p(e,n,t){t===void 0&&(t="/");let r=typeof n=="string"?An(n):n,o=fa(r.pathname||"/",t);if(o==null)return null;let i=Hc(e);Bp(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=Xp(i[a],qp(o));return l}function Hc(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(i,l,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};u.relativePath.startsWith("/")&&(Z(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let s=vn([r,u.relativePath]),f=t.concat(u);i.children&&i.children.length>0&&(Z(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),Hc(i.children,n,f,s)),!(i.path==null&&!i.index)&&n.push({path:s,score:Yp(s,i.index),routesMeta:f})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let u of Wc(i.path))o(i,l,u)}),n}function Wc(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Wc(r.join("/")),a=[];return a.push(...l.map(u=>u===""?i:[i,u].join("/"))),o&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Bp(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Gp(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Ap=/^:\w+$/,Vp=3,Hp=2,Wp=1,Qp=10,Kp=-2,_u=e=>e==="*";function Yp(e,n){let t=e.split("/"),r=t.length;return t.some(_u)&&(r+=Kp),n&&(r+=Hp),t.filter(o=>!_u(o)).reduce((o,i)=>o+(Ap.test(i)?Vp:i===""?Wp:Qp),r)}function Gp(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function Xp(e,n){let{routesMeta:t}=e,r={},o="/",i=[];for(let l=0;l<t.length;++l){let a=t[l],u=l===t.length-1,s=o==="/"?n:n.slice(o.length)||"/",f=Jp({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},s);if(!f)return null;Object.assign(r,f.params);let h=a.route;i.push({params:r,pathname:vn([o,f.pathname]),pathnameBase:th(vn([o,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(o=vn([o,f.pathnameBase]))}return i}function Jp(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Zp(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((s,f,h)=>{if(f==="*"){let m=a[h]||"";l=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}return s[f]=bp(a[h]||"",f),s},{}),pathname:i,pathnameBase:l,pattern:e}}function Zp(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),jo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function qp(e){try{return decodeURI(e)}catch(n){return jo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function bp(e,n){try{return decodeURIComponent(e)}catch(t){return jo(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),e}}function fa(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function eh(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?An(e):e;return{pathname:t?t.startsWith("/")?t:nh(t,n):n,search:rh(r),hash:oh(o)}}function nh(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function pi(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Qc(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Kc(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=An(e):(o=ir({},e),Z(!o.pathname||!o.pathname.includes("?"),pi("?","pathname","search",o)),Z(!o.pathname||!o.pathname.includes("#"),pi("#","pathname","hash",o)),Z(!o.search||!o.search.includes("#"),pi("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(r||l==null)a=t;else{let h=n.length-1;if(l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),h-=1;o.pathname=m.join("/")}a=h>=0?n[h]:"/"}let u=eh(o,a),s=l&&l!=="/"&&l.endsWith("/"),f=(i||l===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(s||f)&&(u.pathname+="/"),u}const vn=e=>e.join("/").replace(/\/\/+/g,"/"),th=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),rh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,oh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ih(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const lh=["post","put","patch","delete"];[...lh];/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ah(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}const uh=typeof Object.is=="function"?Object.is:ah,{useState:sh,useEffect:ch,useLayoutEffect:dh,useDebugValue:fh}=mi;function ph(e,n,t){const r=n(),[{inst:o},i]=sh({inst:{value:r,getSnapshot:n}});return dh(()=>{o.value=r,o.getSnapshot=n,hi(o)&&i({inst:o})},[e,r,n]),ch(()=>(hi(o)&&i({inst:o}),e(()=>{hi(o)&&i({inst:o})})),[e]),fh(r),r}function hi(e){const n=e.getSnapshot,t=e.value;try{const r=n();return!uh(t,r)}catch{return!0}}function hh(e,n,t){return n()}const mh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vh=!mh,gh=vh?hh:ph;"useSyncExternalStore"in mi&&(e=>e.useSyncExternalStore)(mi);const Yc=E.createContext(null),Gc=E.createContext(null),dr=E.createContext(null),Mo=E.createContext(null),gt=E.createContext({outlet:null,matches:[]}),Xc=E.createContext(null);function fl(){return fl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},fl.apply(this,arguments)}function yh(e,n){let{relative:t}=n===void 0?{}:n;fr()||Z(!1);let{basename:r,navigator:o}=E.useContext(dr),{hash:i,pathname:l,search:a}=Zc(e,{relative:t}),u=l;return r!=="/"&&(u=l==="/"?r:vn([r,l])),o.createHref({pathname:u,search:a,hash:i})}function fr(){return E.useContext(Mo)!=null}function Do(){return fr()||Z(!1),E.useContext(Mo).location}function Jc(){fr()||Z(!1);let{basename:e,navigator:n}=E.useContext(dr),{matches:t}=E.useContext(gt),{pathname:r}=Do(),o=JSON.stringify(Qc(t).map(a=>a.pathnameBase)),i=E.useRef(!1);return E.useEffect(()=>{i.current=!0}),E.useCallback(function(a,u){if(u===void 0&&(u={}),!i.current)return;if(typeof a=="number"){n.go(a);return}let s=Kc(a,JSON.parse(o),r,u.relative==="path");e!=="/"&&(s.pathname=s.pathname==="/"?e:vn([e,s.pathname])),(u.replace?n.replace:n.push)(s,u.state,u)},[e,n,o,r])}function Zc(e,n){let{relative:t}=n===void 0?{}:n,{matches:r}=E.useContext(gt),{pathname:o}=Do(),i=JSON.stringify(Qc(r).map(l=>l.pathnameBase));return E.useMemo(()=>Kc(e,JSON.parse(i),o,t==="path"),[e,i,o,t])}function wh(e,n){fr()||Z(!1);let{navigator:t}=E.useContext(dr),r=E.useContext(Gc),{matches:o}=E.useContext(gt),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let u=Do(),s;if(n){var f;let y=typeof n=="string"?An(n):n;a==="/"||(f=y.pathname)!=null&&f.startsWith(a)||Z(!1),s=y}else s=u;let h=s.pathname||"/",m=a==="/"?h:h.slice(a.length)||"/",g=$p(e,{pathname:m}),w=xh(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:vn([a,t.encodeLocation?t.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:vn([a,t.encodeLocation?t.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,r||void 0);return n&&w?E.createElement(Mo.Provider,{value:{location:fl({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:an.Pop}},w):w}function Sh(){let e=Nh(),n=ih(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},n),t?E.createElement("pre",{style:o},t):null,i)}class kh extends E.Component{constructor(n){super(n),this.state={location:n.location,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location?{error:n.error,location:n.location}:{error:n.error||t.error,location:t.location}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error?E.createElement(gt.Provider,{value:this.props.routeContext},E.createElement(Xc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Eh(e){let{routeContext:n,match:t,children:r}=e,o=E.useContext(Yc);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(gt.Provider,{value:n},r)}function xh(e,n,t){if(n===void 0&&(n=[]),e==null)if(t!=null&&t.errors)e=t.matches;else return null;let r=e,o=t==null?void 0:t.errors;if(o!=null){let i=r.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));i>=0||Z(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,l,a)=>{let u=l.route.id?o==null?void 0:o[l.route.id]:null,s=null;t&&(l.route.ErrorBoundary?s=E.createElement(l.route.ErrorBoundary,null):l.route.errorElement?s=l.route.errorElement:s=E.createElement(Sh,null));let f=n.concat(r.slice(0,a+1)),h=()=>{let m=i;return u?m=s:l.route.Component?m=E.createElement(l.route.Component,null):l.route.element&&(m=l.route.element),E.createElement(Eh,{match:l,routeContext:{outlet:i,matches:f},children:m})};return t&&(l.route.ErrorBoundary||l.route.errorElement||a===0)?E.createElement(kh,{location:t.location,component:s,error:u,children:h(),routeContext:{outlet:null,matches:f}}):h()},null)}var Nu;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Nu||(Nu={}));var vo;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(vo||(vo={}));function Ch(e){let n=E.useContext(Gc);return n||Z(!1),n}function Ph(e){let n=E.useContext(gt);return n||Z(!1),n}function _h(e){let n=Ph(),t=n.matches[n.matches.length-1];return t.route.id||Z(!1),t.route.id}function Nh(){var e;let n=E.useContext(Xc),t=Ch(vo.UseRouteError),r=_h(vo.UseRouteError);return n||((e=t.errors)==null?void 0:e[r])}function pl(e){Z(!1)}function Lh(e){let{basename:n="/",children:t=null,location:r,navigationType:o=an.Pop,navigator:i,static:l=!1}=e;fr()&&Z(!1);let a=n.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:a,navigator:i,static:l}),[a,i,l]);typeof r=="string"&&(r=An(r));let{pathname:s="/",search:f="",hash:h="",state:m=null,key:g="default"}=r,w=E.useMemo(()=>{let y=fa(s,a);return y==null?null:{location:{pathname:y,search:f,hash:h,state:m,key:g},navigationType:o}},[a,s,f,h,m,g,o]);return w==null?null:E.createElement(dr.Provider,{value:u},E.createElement(Mo.Provider,{children:t,value:w}))}function zh(e){let{children:n,location:t}=e,r=E.useContext(Yc),o=r&&!n?r.router.routes:hl(n);return wh(o,t)}var Lu;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Lu||(Lu={}));new Promise(()=>{});function hl(e,n){n===void 0&&(n=[]);let t=[];return E.Children.forEach(e,(r,o)=>{if(!E.isValidElement(r))return;if(r.type===E.Fragment){t.push.apply(t,hl(r.props.children,n));return}r.type!==pl&&Z(!1),!r.props.index||!r.props.children||Z(!1);let i=[...n,o],l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=hl(r.props.children,i)),t.push(l)}),t}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ml(){return ml=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ml.apply(this,arguments)}function Rh(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function Th(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Oh(e,n){return e.button===0&&(!n||n==="_self")&&!Th(e)}const Ih=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function jh(e){let{basename:n,children:t,window:r}=e,o=E.useRef();o.current==null&&(o.current=Dp({window:r,v5Compat:!0}));let i=o.current,[l,a]=E.useState({action:i.action,location:i.location});return E.useLayoutEffect(()=>i.listen(a),[i]),E.createElement(Lh,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:i})}const Mh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Dh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fo=E.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:u,to:s,preventScrollReset:f}=n,h=Rh(n,Ih),{basename:m}=E.useContext(dr),g,w=!1;if(typeof s=="string"&&Dh.test(s)&&(g=s,Mh)){let c=new URL(window.location.href),p=s.startsWith("//")?new URL(c.protocol+s):new URL(s),v=fa(p.pathname,m);p.origin===c.origin&&v!=null?s=v+p.search+p.hash:w=!0}let y=yh(s,{relative:o}),L=Fh(s,{replace:l,state:a,target:u,preventScrollReset:f,relative:o});function d(c){r&&r(c),c.defaultPrevented||L(c)}return E.createElement("a",ml({},h,{href:g||y,onClick:w||i?r:d,ref:t,target:u}))});var zu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(zu||(zu={}));var Ru;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ru||(Ru={}));function Fh(e,n){let{target:t,replace:r,state:o,preventScrollReset:i,relative:l}=n===void 0?{}:n,a=Jc(),u=Do(),s=Zc(e,{relative:l});return E.useCallback(f=>{if(Oh(f,t)){f.preventDefault();let h=r!==void 0?r:mo(u)===mo(s);a(e,{replace:h,state:o,preventScrollReset:i,relative:l})}},[u,a,s,r,o,t,e,i,l])}function Nn(e){return JSON.parse(JSON.stringify(e))}class Uh{constructor(){this.isStart=!1,this.isStart=!1,this.db=null}init(n,t,r,o){return this.onError=o,new Promise((i,l)=>{let a=this,s=window.indexedDB.open(n,t);this.tablas=r,this.folio=Date.now(),s.onupgradeneeded=()=>{let f=s.result;if(r)for(const h in r)try{f.createObjectStore(h,{keyPath:r[h].id})}catch{console.log(`%cYa existe ${h}`,"color: red")}a.db=s.result,i(!0)},s.onsuccess=function(){a.db=s.result,a.isStart=!0,i(!0)},s.onerror=f=>{a.isStart||(a.isStart=!1),o&&o(f),l(!1)}})}getFolio(){return this.folio++,this.folio}copy(n){if(n)return JSON.parse(JSON.stringify(n))}post(n,t,r=!0){let o=this;return new Promise((i,l)=>{if(!o.db)l("Error: no init indexedDB");else try{let u=o.db.transaction(n,"readwrite"),s=u.objectStore(n),f=t;r&&(f[this.tablas[n].id]=o.getFolio());let h=s.put(f);h.onsuccess=function(){let m=t;i(o.copy(m))},h.onerror=function(m){o.onError({type:"POST",error:m}),l("Ocurrio un error")},u.oncomplete=function(){}}catch{setTimeout(()=>{o.post(n,t).then(u=>{i(u)}).catch(u=>{l(u)})},1e3)}})}get(n,t){let r=this;return new Promise((o,i)=>{if(!r.db)i("Error: no init indexedDB");else try{let a=r.db.transaction(n,"readonly"),s=a.objectStore(n).get(t);s.onsuccess=function(){let f=s.result;o(r.copy(f))},s.onerror=function(f){r.onError({type:"GET",error:f}),o(null)},a.oncomplete=function(){}}catch{setTimeout(()=>{r.get(n,t).then(a=>{o(a)}).catch(a=>{i(a)})},1e3)}})}put(n,t){let r=this;return new Promise((o,i)=>{if(!r.db)i("Error: no init indexedDB");else try{let a=r.db.transaction(n,"readwrite"),u=a.objectStore(n);const s=this.tablas[n].id;t.hasOwnProperty(s)||(t[s]=r.getFolio());let f=u.put(t);f.onsuccess=function(){let h=t;o(r.copy(h))},f.onerror=function(h){r.onError({type:"PUT",error:h}),i("Ocurrio un error")},a.oncomplete=function(){}}catch{setTimeout(()=>{r.put(n,t).then(a=>{o(a)}).catch(a=>{i(a)})},1e3)}})}delete(n,t){let r=this;return new Promise((o,i)=>{try{let l=r.db,a;if(!l){r.onError({type:"DELETE",error:"no esta abierta la base de datos"}),o(!1);return}a=l.transaction(n,"readwrite");let s=a.objectStore(n).delete(t);s.onsuccess=function(f){o(!0)},s.onerror=function(f){let h=!1;r.onError({type:"DELETE",error:f}),o(h)},a.oncomplete=function(){}}catch{setTimeout(()=>{r.delete(n,t).then(a=>{o(a)}).catch(a=>{i(a)})},1e3)}})}list(n){let t=this;return new Promise((r,o)=>{try{let i=t.db;if(!i){t.onError({type:"LIST",error:"no esta abierta la base de datos"}),r(!1);return}let l=i.transaction(n,"readonly"),u=l.objectStore(n).openCursor(),s=[];u.onsuccess=function(f){let h=f.target.result;h&&(s.push(h.value),h.continue())},u.onerror=function(f){t.onError({type:"LIST",error:f}),o(f)},l.oncomplete=function(){r(t.copy(s))}}catch{setTimeout(()=>{t.list(n).then(l=>{r(l)})},1e3)}})}clear(n){let t=this;return new Promise((r,o)=>{if(!t.db)o("Error: no init indexedDB");else{let u=t.db.transaction(n,"readwrite").objectStore(n).clear();u.onsuccess=function(s){r(!0)},u.onerror=function(s){t.onError({type:"CLEAR",error:s}),o(s)}}})}}const $h=`[
    {
        "nombre": "Aceite de oliva",
        "proteina": "0",
        "calorias": "884",
        "carbohidratos": "0",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678405448401
    },
    {
        "nombre": "Aceite girasol",
        "proteina": "0",
        "calorias": "884",
        "carbohidratos": "0",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678405357585
    },
    {
        "nombre": "Aguacate",
        "proteina": "2",
        "calorias": "160",
        "carbohidratos": "2",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401058216
    },
    {
        "nombre": "Amaranto",
        "proteina": "14.45",
        "calorias": "374",
        "carbohidratos": "66",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678409729823
    },
    {
        "nombre": "Apio",
        "proteina": "0.7",
        "calorias": "16",
        "carbohidratos": "1.4",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401876000
    },
    {
        "nombre": "Arroz cocido",
        "proteina": "2.7",
        "calorias": "130",
        "carbohidratos": "76.9",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678403033414
    },
    {
        "nombre": "Atún en lata",
        "proteina": "9",
        "calorias": "48",
        "carbohidratos": "0",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678402952190
    },
    {
        "nombre": "Avena en hojuelas",
        "proteina": "12.5",
        "calorias": "388",
        "carbohidratos": "67",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678399354145
    },
    {
        "nombre": "Berenjena",
        "proteina": "0.8",
        "calorias": "35",
        "carbohidratos": "6.2",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401853848
    },
    {
        "nombre": "Betabel",
        "proteina": "1.3",
        "calorias": "43",
        "carbohidratos": "6.8",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678402034808
    },
    {
        "nombre": "Bistec cerdo",
        "proteina": "22",
        "calorias": "259",
        "carbohidratos": "13",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678400317487
    },
    {
        "id": 10,
        "nombre": "Bistec de res",
        "proteina": "25",
        "calorias": "130",
        "cantidad": "100",
        "medida": "gramos",
        "carbohidratos": ""
    },
    {
        "nombre": "Brotes de alfafa",
        "proteina": "4",
        "calorias": "23",
        "carbohidratos": "0.2",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401815736
    },
    {
        "nombre": "Brócoli",
        "proteina": "3.1",
        "calorias": "28",
        "carbohidratos": "2.4",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401708696
    },
    {
        "nombre": "Cacahuate",
        "proteina": "26",
        "calorias": "567",
        "carbohidratos": "16",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678399542569
    },
    {
        "nombre": "Calabaza",
        "proteina": "1",
        "calorias": "45",
        "carbohidratos": "12",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678399092602
    },
    {
        "nombre": "Camote",
        "proteina": "1.6",
        "calorias": "86",
        "carbohidratos": "20",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678405611945
    },
    {
        "nombre": "Cebolla",
        "proteina": "1.1",
        "calorias": "40",
        "carbohidratos": "7.6",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678399818640
    },
    {
        "nombre": "Cebollin",
        "proteina": "1.8",
        "calorias": "32",
        "carbohidratos": "4.7",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401674856
    },
    {
        "nombre": "Chambarete",
        "proteina": "28.1",
        "calorias": "190",
        "carbohidratos": "0",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678409308254
    },
    {
        "nombre": "Champiñon",
        "proteina": "3.1",
        "calorias": "22",
        "carbohidratos": "2.3",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401647104
    },
    {
        "nombre": "Chia",
        "proteina": "15.6",
        "calorias": "490",
        "carbohidratos": "43.8",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678409779414
    },
    {
        "nombre": "Chicharron",
        "proteina": "61",
        "calorias": "545",
        "carbohidratos": "0",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678409124558
    },
    {
        "nombre": "Chile habanero",
        "proteina": "0.48",
        "calorias": "15",
        "carbohidratos": "3.14",
        "cantidad": "1",
        "medida": "pieza",
        "id": 1678407413391
    },
    {
        "nombre": "Chile jalapeño",
        "proteina": "0.9",
        "calorias": "28",
        "carbohidratos": "7",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678406902759
    },
    {
        "nombre": "Chile poblano",
        "proteina": "0.87",
        "calorias": "18",
        "carbohidratos": "4.11",
        "cantidad": "1",
        "medida": "pieza",
        "id": 1678407485079
    },
    {
        "nombre": "Chile serrano",
        "proteina": "0.11",
        "calorias": "2",
        "carbohidratos": "0.41",
        "cantidad": "1",
        "medida": "pieza",
        "id": 1678407375559
    },
    {
        "nombre": "Ciruela",
        "proteina": "0.7",
        "calorias": "46",
        "carbohidratos": "10",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401608880
    },
    {
        "nombre": "Coliflor",
        "proteina": "1.8",
        "calorias": "23",
        "carbohidratos": "1.8",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401575272
    },
    {
        "nombre": "Costillas de cerdo",
        "proteina": "28.94",
        "calorias": "395",
        "carbohidratos": "0",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678409223174
    },
    {
        "nombre": "Diente Ajo",
        "proteina": "0.3",
        "calorias": "6",
        "carbohidratos": "1",
        "cantidad": "1",
        "medida": "pieza",
        "id": 1678400069408
    },
    {
        "nombre": "Durazno",
        "proteina": "0.9",
        "calorias": "39",
        "carbohidratos": "8",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401537480
    },
    {
        "nombre": "Espagueti",
        "proteina": "6",
        "calorias": "340",
        "carbohidratos": "30",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678406773000
    },
    {
        "nombre": "Espagueti integral",
        "proteina": "6.5",
        "calorias": "160",
        "carbohidratos": "30.8",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678406716632
    },
    {
        "nombre": "Espinaca",
        "proteina": "2.9",
        "calorias": "23",
        "carbohidratos": "3.6",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678402165024
    },
    {
        "nombre": "Fresa",
        "proteina": "0.7",
        "calorias": "32",
        "carbohidratos": "5.7",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401507240
    },
    {
        "id": 6,
        "nombre": "Frijol negro",
        "proteina": "6",
        "calorias": "91",
        "cantidad": "100",
        "medida": "gramos",
        "carbohidratos": "16.5"
    },
    {
        "nombre": "Frijol peruano",
        "proteina": "9.2",
        "calorias": "106",
        "carbohidratos": "14.9",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678408592631
    },
    {
        "nombre": "Garbanzos",
        "proteina": "19",
        "calorias": "364",
        "carbohidratos": "61",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678404277891
    },
    {
        "nombre": "Gelatina preparada en agua",
        "proteina": "1.5",
        "calorias": "6",
        "carbohidratos": "0",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678404511227
    },
    {
        "nombre": "Granola",
        "proteina": "9.2",
        "calorias": "408",
        "carbohidratos": "72",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678414415129
    },
    {
        "nombre": "Guayaba",
        "proteina": "2.6",
        "calorias": "68",
        "carbohidratos": "8.9",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401412696
    },
    {
        "id": 9,
        "nombre": "Higado de pollo",
        "proteina": "7.3",
        "calorias": "50",
        "cantidad": "1",
        "medida": "pieza",
        "carbohidratos": ""
    },
    {
        "nombre": "Higado res",
        "proteina": "20",
        "calorias": "130",
        "carbohidratos": "4",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678400227023
    },
    {
        "nombre": "Huevo frito",
        "proteina": "5.42",
        "calorias": "78",
        "carbohidratos": "0.37",
        "cantidad": "1",
        "medida": "pieza",
        "id": 1678414297130
    },
    {
        "nombre": "Huevo grande",
        "proteina": "6",
        "calorias": "74",
        "carbohidratos": "0.3",
        "cantidad": "1",
        "medida": "pieza",
        "id": 1678407998167
    },
    {
        "id": 1,
        "nombre": "Huevo mediano",
        "proteina": "5.54",
        "calorias": "65",
        "grasa": "6.3",
        "fibra": "0",
        "cantidad": "1",
        "medida": "pieza",
        "carbohidratos": "0.3"
    },
    {
        "nombre": "Huevo revuelto",
        "proteina": "13.1",
        "calorias": "199",
        "carbohidratos": "1.96",
        "cantidad": "2",
        "medida": "pieza",
        "id": 1678414337226
    },
    {
        "nombre": "Hígado cerdo",
        "proteina": "20",
        "calorias": "134",
        "carbohidratos": "2.4",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678400391880
    },
    {
        "nombre": "Kiwi",
        "proteina": "1.1",
        "calorias": "61",
        "carbohidratos": "11.7",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401359656
    },
    {
        "nombre": "Leche delite",
        "proteina": "1.5",
        "calorias": "54",
        "carbohidratos": "0",
        "cantidad": "100",
        "medida": "mililitro",
        "id": 1678403639765
    },
    {
        "nombre": "Leche nutri",
        "proteina": "5",
        "calorias": "133",
        "carbohidratos": "11.3",
        "cantidad": "250",
        "medida": "mililitro",
        "id": 1678403706021
    },
    {
        "nombre": "Lechuga",
        "proteina": "1.4",
        "calorias": "13",
        "carbohidratos": "1.1",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401388232
    },
    {
        "id": 3,
        "nombre": "Lenteja",
        "proteina": "9",
        "calorias": "116",
        "grasas": "1.06",
        "fibra": "8",
        "cantidad": "100",
        "medida": "gramos",
        "carbohidratos": "20"
    },
    {
        "nombre": "Limón",
        "proteina": "1.1",
        "calorias": "29",
        "carbohidratos": "6.5",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401328776
    },
    {
        "nombre": "Lomo cerdo",
        "proteina": "20.5",
        "calorias": "136",
        "carbohidratos": "0",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678409195918
    },
    {
        "nombre": "Mandarina",
        "proteina": "0.8",
        "calorias": "53",
        "carbohidratos": "11.5",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401292952
    },
    {
        "nombre": "Mango",
        "proteina": "0.8",
        "calorias": "60",
        "carbohidratos": "15",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678399703688
    },
    {
        "nombre": "Mantequilla",
        "proteina": "0.9",
        "calorias": "717",
        "carbohidratos": "0.1",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678403407574
    },
    {
        "nombre": "Manzana",
        "proteina": "0.3",
        "calorias": "52",
        "carbohidratos": "11.4",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401264680
    },
    {
        "nombre": "Melón",
        "proteina": "0.8",
        "calorias": "34",
        "carbohidratos": "8",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678399752800
    },
    {
        "nombre": "Miel",
        "proteina": "0.3",
        "calorias": "304",
        "carbohidratos": "82",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678405123146
    },
    {
        "nombre": "Mojarra",
        "proteina": "20",
        "calorias": "96",
        "carbohidratos": "0",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678403867397
    },
    {
        "id": 8,
        "nombre": "Muslo de pollo",
        "proteina": "20.6",
        "calorias": "177",
        "cantidad": "100",
        "medida": "gramos",
        "carbohidratos": ""
    },
    {
        "nombre": "Naranja",
        "proteina": "0.9",
        "calorias": "47",
        "carbohidratos": "12",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678399611273
    },
    {
        "nombre": "Nopal",
        "proteina": "1.14",
        "calorias": "14",
        "carbohidratos": "2.86",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678407641031
    },
    {
        "nombre": "Nopal asado",
        "proteina": "1.35",
        "calorias": "15",
        "carbohidratos": "3.28",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678407615175
    },
    {
        "nombre": "Níspero",
        "proteina": "0.4",
        "calorias": "47",
        "carbohidratos": "8.9",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401238136
    },
    {
        "nombre": "Pan dulce",
        "proteina": "8.7",
        "calorias": "362",
        "carbohidratos": "61.4",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678405888201
    },
    {
        "nombre": "Papa",
        "proteina": "2",
        "calorias": "85",
        "carbohidratos": "17.6",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678405705753
    },
    {
        "nombre": "Papas fritas caseras",
        "proteina": "2.2",
        "calorias": "185",
        "carbohidratos": "23",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678405823472
    },
    {
        "nombre": "Papaya",
        "proteina": "0.5",
        "calorias": "43",
        "carbohidratos": "9",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401096528
    },
    {
        "nombre": "Pasas",
        "proteina": "3.1",
        "calorias": "299",
        "carbohidratos": "79",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678405502473
    },
    {
        "id": 7,
        "nombre": "Pechuga de pollo",
        "proteina": "31",
        "calorias": "165",
        "cantidad": "100",
        "medida": "gramos",
        "carbohidratos": ""
    },
    {
        "nombre": "Pechuga pavo",
        "proteina": "24",
        "calorias": "100",
        "carbohidratos": "0",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678404171675
    },
    {
        "nombre": "Penca de sábila",
        "proteina": "0.4",
        "calorias": "21",
        "carbohidratos": "4.4",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678401190968
    },
    {
        "nombre": "Pepino",
        "proteina": "0.6",
        "calorias": "12",
        "carbohidratos": "1",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678400701776
    },
    {
        "nombre": "Pera",
        "proteina": "0.4",
        "calorias": "57",
        "carbohidratos": "12",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678400500839
    },
    {
        "nombre": "Piloncillo",
        "proteina": "0",
        "calorias": "351",
        "carbohidratos": "84",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678407237575
    },
    {
        "nombre": "Pimineto rojo",
        "proteina": "1",
        "calorias": "26",
        "carbohidratos": "6.03",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678407589207
    },
    {
        "nombre": "Piña",
        "proteina": "0.5",
        "calorias": "50",
        "carbohidratos": "11",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678400471744
    },
    {
        "nombre": "Platano",
        "proteina": "1.1",
        "calorias": "89",
        "carbohidratos": "23",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678399468993
    },
    {
        "nombre": "Pozole",
        "proteina": "6.8",
        "calorias": "96",
        "carbohidratos": "6.3",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678407283951
    },
    {
        "nombre": "Pulpo",
        "proteina": "19",
        "calorias": "86",
        "carbohidratos": "0",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678403988132
    },
    {
        "nombre": "Queso fresco",
        "proteina": "12",
        "calorias": "145",
        "carbohidratos": "5.4",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678407112519
    },
    {
        "nombre": "Queso oaxaca",
        "proteina": "21.7",
        "calorias": "354",
        "carbohidratos": "2.5",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678407064175
    },
    {
        "nombre": "Quinoa",
        "proteina": "14",
        "calorias": "365",
        "carbohidratos": "50",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678404378187
    },
    {
        "nombre": "Repollo",
        "proteina": "13",
        "calorias": "25",
        "carbohidratos": "3",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678400783640
    },
    {
        "nombre": "Rábanos",
        "proteina": "0.7",
        "calorias": "16",
        "carbohidratos": "2",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678400822408
    },
    {
        "id": 4,
        "nombre": "Semilla calabaza",
        "proteina": "19",
        "calorias": "446",
        "cantidad": "100",
        "medida": "gramos",
        "carbohidratos": "54"
    },
    {
        "id": 5,
        "nombre": "Semilla girasol",
        "proteina": "21",
        "calorias": "584",
        "cantidad": "100",
        "medida": "gramos",
        "carbohidratos": "20"
    },
    {
        "nombre": "Soya texturizada",
        "proteina": "47",
        "calorias": "330",
        "carbohidratos": "38",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678402305832
    },
    {
        "nombre": "Tocino",
        "proteina": "37",
        "calorias": "541",
        "carbohidratos": "1.4",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678405280578
    },
    {
        "nombre": "Tomate",
        "proteina": "1",
        "calorias": "18",
        "carbohidratos": "2",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678399996400
    },
    {
        "id": 2,
        "nombre": "Tortilla",
        "calorias": "65",
        "proteina": "1.5",
        "grasa": 0.5,
        "fibra": "6.3",
        "cantidad": "1",
        "medida": "pieza",
        "carbohidratos": "12"
    },
    {
        "nombre": "Tortilla harina",
        "proteina": "8.2",
        "calorias": "312",
        "carbohidratos": "51.32",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678408738598
    },
    {
        "nombre": "Tuna",
        "proteina": "1.1",
        "calorias": "56",
        "carbohidratos": "13",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678400976280
    },
    {
        "nombre": "Uva",
        "proteina": "0.8",
        "calorias": "57",
        "carbohidratos": "10",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678400863127
    },
    {
        "nombre": "Yuca",
        "proteina": "2.7",
        "calorias": "320",
        "carbohidratos": "76.1",
        "cantidad": "200",
        "medida": "gramos",
        "id": 1678405756865
    },
    {
        "nombre": "Zanahoria",
        "proteina": "0.9",
        "calorias": "41",
        "carbohidratos": "10",
        "cantidad": "100",
        "medida": "gramos",
        "id": 1678398791098
    }
]


`,qc=JSON.parse($h),Bh={ingrediente:{id:"id"},comida:{id:"id"},receta:{id:"id"}};let go=new Uh;function Ah(e){console.log(e)}function vl(){return go}function Vh(){qc.map(e=>{go.post("ingrediente",e)})}go.init("comida",2,Bh,Ah).then(()=>{setTimeout(()=>{go.clear("ingrediente").then(()=>{Vh()})},500)});function Hh(){return new Promise(e=>{setTimeout(()=>{e(!0)},201)})}function bc(e){let n=0,t=0,r=0;return e.forEach(o=>{const i=parseFloat(o.proteina),l=parseFloat(o.calorias),a=parseFloat(o.carbohidratos),u=parseFloat(o.cantidad),s=parseFloat(o.usado),f=i*s/u,h=l*s/u,m=a*s/u;n+=isFinite(f)?f:0,r+=isFinite(h)?h:0,t+=isFinite(m)?m:0}),{proteina:Math.round(n),carbohidratos:Math.round(t),calorias:Math.round(r)}}function Wh(e){const[n,t]=E.useState(0),[r,o]=E.useState(0),[i,l]=E.useState(0);function a(){const u=bc(e.listaComida);t(Math.round(u.proteina)),l(Math.round(u.calorias)),o(Math.round(u.carbohidratos))}return E.useEffect(()=>{a()},[e.listaComida]),D("div",{className:"flex-container detalle-comida",children:[D("div",{className:"flex-item amaraillo",children:[z("p",{children:"Calorias:"}),D("h3",{children:[" ",i," cal "]})]}),D("div",{className:"flex-item azul",children:[z("p",{children:"Proteinas:"}),D("h3",{children:[" ",n,"g "]})]}),D("div",{className:"flex-item cafe",children:[z("p",{children:"Carbohidratos:"}),D("h3",{children:[" ",r,"g "]})]})]})}function Qh(e){const[n,t]=E.useState(qc),[r,o]=E.useState([]),[i,l]=E.useState(""),[a,u]=E.useState(45),s=E.useRef(null);function f(g){l(g.target.value)}E.useEffect(()=>{var L;let g=[];n.forEach(d=>{d.nombre.toLowerCase().indexOf(i.toLowerCase())>=0&&g.push(d)}),o(g);const w=(L=s.current)==null?void 0:L.getClientRects()[0].width,y=document.body.getClientRects()[0].width;w&&u((y-w)/2*100/y)},[i]);function h(g){e.seleccionaIngrediente(g)}function m(){return r.map((g,w)=>z("li",{onClick:()=>h(g),children:g.nombre},w))}return D("div",{className:"listar-ingredientes",ref:s,style:{left:a+"%"},children:[z("input",{type:"text",onChange:f,value:i}),z("button",{onClick:()=>e.cancelar(),children:"x"}),z("ul",{children:m()})]})}const gl={ALERT:"w3-red",SUCCESS:"w3-green",WARNING:"w3-yellow"};function Kh(e,n,t){n.addEventListener("click",r=>{clearInterval(t),e.remove()})}const ed={tipo:gl.SUCCESS,titulo:"Título",mensaje:"Mensaje",tiempo:5e3,w3css:"https://www.w3schools.com/w3css/4/w3.css"};function Yh(){return JSON.parse(JSON.stringify(ed))}function Gh(){let e=document.createElement("div");e.id="notificaciones-de-la-app",e.style.cssText="position: fixed; bottom: 0; right: 20px; height: auto; z-index: 10000;";let n=document.querySelector("body");return n&&n.append(e),e}function Tu(e=ed){let n=Object.assign(Yh(),e),t=document.createElement("div");if(t.attachShadow({mode:"open"}),t.style.minWidth="200px",!t.shadowRoot)return;t.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="${n.w3css}">
        <style>
        .loader {
            border: 4px solid #f3f3f3;
            border-radius: 40%;
            border-top: 4px solid blue;            
            width: 30px;
            height: 30px;         
            animation: spin 1s linear infinite;
        }
        div#cargando{
            padding-left: calc(50% - 15px);
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        </style>        
        <div id ="cargando">
        <div class="loader" title="cargando"></div>
        </div>
        <div class="w3-panel w3-card-4 w3-display-container  ${n.tipo}" id="contenido" style="display: none;">
            <span
                class="w3-button ${n.tipo} w3-large w3-display-topright">&times;</span>
            <h3>${n.titulo}</h3>
            <p>${n.mensaje}</p>
            <div class="w3-border w3-grey">
            <div class="w3-blue" style="height:5px;width:0" tiempo></div>
            </div>
            <br>
        </div>   
    `;let r=t.shadowRoot.querySelector("span"),o=t.shadowRoot.querySelector("[tiempo]");if(!o)return;let i=0,l=setInterval(h=>{if(i+=10,i>n.tiempo)clearInterval(l),t.remove();else{const m=i/n.tiempo*100;o.style.width=m+"%"}},10);r&&Kh(t,r,l);let a=document.querySelector("#notificaciones-de-la-app");a||(a=Gh());let u=t.shadowRoot.querySelector("#cargando"),s=t.shadowRoot.querySelector("#contenido"),f=t.shadowRoot.querySelector("link");f.onload=()=>{u.remove(),s.style.display="block"},a.appendChild(t)}function Ou(){const[,e]=window.location.href.split("?");if(!e)return{};const n=e.split("&");let t={};return n.forEach(r=>{const[o,i]=r.split("=");t[o]=i}),t}function nd(e){function n(){return e.rutas.map((t,r)=>r+1<e.rutas.length?z(Fo,{to:t.ruta,className:"ruta",children:t.titulo},"index"):D("span",{children:[" ",t.titulo]},r))}return z("div",{className:"breadcrum",children:n()})}class td{constructor(n=[]){Cn(this,"pasos");Cn(this,"ipaso");Cn(this,"div");Cn(this,"pico");Cn(this,"divBack");Cn(this,"divTarget");this.pasos=n,this.ipaso=-1,this.div=null,this.pico=null,this.divBack=null,this.divTarget=null}inicia(){this.ipaso=0,this.render()}addPaso(n){this.pasos.push(n)}atras(){this.ipaso--,this.render()}siguiente(){this.ipaso++,this.render()}esActivo(){return!!this.div}remueve(){this.div&&this.pico&&this.divBack&&this.divTarget&&(this.div.remove(),this.pico.remove(),this.divBack.remove(),this.divTarget.remove()),this.div=null,this.pico=null,this.divBack=null,this.divTarget=null}cancelar(){this.remueve()}render(){if(this.div&&this.remueve(),this.ipaso==-1||this.ipaso>=this.pasos.length)return;this.div=document.createElement("div"),this.div.classList.add("_modal_tour"),this.divTarget=document.createElement("div"),this.divTarget.classList.add("target_border"),this.pico=document.createElement("div"),this.divBack=document.createElement("div"),this.divBack.classList.add("tour-back");const n=this.pasos[this.ipaso];n.posicion=="top"?this.pico.classList.add("_flecha-abajo"):this.pico.classList.add("_flecha-arriba"),document.body.append(this.divBack),document.body.append(this.div),document.body.append(this.pico),document.body.append(this.divTarget),this.div.innerHTML=n.contenido;let t=document.querySelector(n.target),r=null;t?r=t.getClientRects():r=[{top:0,left:0,width:100,height:20}];const[o,i,l,a]=[r[0].top,r[0].left,r[0].width,r[0].height];this.addBotones(this.div,n),this.addListenersBotones(this.div),Object.assign(this.div.style,{top:o+"px",left:1+"px",height:"auto",maxWidth:"300px",position:"absolute",background:"white",zIndex:2001,visibility:"hidden",borderRadius:"5px"});let u=o-21;n.posicion=="botton"&&(u=o+a),Object.assign(this.pico.style,{top:u+window.scrollY+"px",left:i+l/2-5+"px",position:"absolute",zIndex:2001}),Object.assign(this.divTarget.style,{top:o+window.scrollY+"px",left:i+"px",width:l+"px",height:a+"px",position:"absolute",zIndex:2001});let s=this.div.clientWidth,f=i+l/2-s/2;f+s>document.body.clientWidth?f=i+l-s+5:f<0&&(f=i);let h=o-this.div.clientHeight-20;n.posicion!="top"&&(h=a+o+10),Object.assign(this.div.style,{top:h+window.scrollY+"px",left:f+"px",visibility:""}),this.mueveScroll(o-2*this.div.clientHeight+window.scrollX)}addBotones(n,t){let r="";t.acciones.forEach(o=>{const i=o.class?' class="'+o.class+'"':"";r+=`<button ${i}>${o.texto}</button>`}),n.innerHTML+=`
        <div class='_botones'>
            ${r}
        </div>
        `}addListerBoton(n,t){n.addEventListener("click",()=>{const r=this.pasos[this.ipaso].acciones[t].accion;r&&r.bind(this)()})}addListenersBotones(n){n.querySelector("._botones").querySelectorAll("button").forEach((o,i)=>{this.addListerBoton(o,i)})}mueveScroll(n){window.scroll({top:n,behavior:"smooth"})}}const ue=new td,Xh={contenido:`
        <p>
        Hay que dar un nombre a la receta</p>`,target:"#nombre-receta",posicion:"botton",acciones:[{texto:"siguiente",accion:ue.siguiente,class:"azul"}]},Jh={contenido:`
        <p>Da click en agregar ingrediente</p>
        <p>Selecciona un ingrediente de los que aparecen</p>`,target:"#agregar-ingrediente",posicion:"botton",acciones:[{texto:"atras",accion:ue.atras,class:"azul"},{texto:"siguiente",accion:ue.siguiente,class:"azul"}]},Zh={contenido:`
        <p>El ingrediente seleccionado se muestra en la tabla de ingredientes.</p>
        <p>Notar que se muestra la cantidad y esta se puede modificar. 
        Tambien se puede remover presionando la x</p>`,target:".tabla-receta",posicion:"top",acciones:[{texto:"atras",accion:ue.atras,class:"azul"},{texto:"siguiente",accion:ue.siguiente,class:"azul"}]},qh={contenido:`
        <p>Puedes indicar la preparación</p>`,target:"#preparacion",posicion:"top",acciones:[{texto:"atras",accion:ue.atras,class:"azul"},{texto:"siguiente",accion:ue.siguiente,class:"azul"}]},bh={contenido:`
        <p>Por último guardamos</p>`,target:"#guardar",posicion:"top",acciones:[{texto:"atras",accion:ue.atras,class:"azul"},{texto:"finalizar",accion:ue.siguiente,class:"rojo"}]};ue.addPaso(Xh);ue.addPaso(Jh);ue.addPaso(Zh);ue.addPaso(qh);ue.addPaso(bh);function em(){const e=localStorage.getItem("tourReceta");ue.esActivo()||e||(ue.inicia(),localStorage.setItem("tourReceta","true"))}function nm(){const[e,n]=E.useState(!1),[t,r]=E.useState("Sin nombre"),[o,i]=E.useState(""),[l,a]=E.useState([]),[u,s]=E.useState([{titulo:"Recetas",ruta:"/"}]),f=Jc();E.useEffect(()=>{em();let v=Nn(u);const k=parseInt(Ou().id);if(!k){v.push({titulo:"Receta Nueva",ruta:"/receta"}),s(v);return}vl().get("receta",k).then(x=>{x&&(v.push({titulo:x.nombre,ruta:"/receta?id="+k}),s(v),r(x.nombre),a(x.ingredientes),i(x.preparacion))})},[]);function h(){n(!0)}function m(v){const k=l.find(N=>N.id==v.id);if(k){let N=parseInt(v.cantidad)+parseInt(k.usado);w(v.id,N),n(!1);return}let C=Nn(l),x=Nn(v);x.usado=x.cantidad,C.push(x),a(C),n(!1)}function g(){n(!1)}function w(v,k){let C=Nn(l),x=C.find(N=>N.id==v);x&&(x.usado=k,a(C))}function y(v){let k=Nn(l),C=k.findIndex(x=>x.id==v);C>-1&&(k.splice(C,1),a(k))}function L(){return l.map(v=>D("tr",{children:[z("td",{children:v.nombre}),D("td",{children:[z("input",{value:v.usado,type:"number",onChange:k=>w(v.id,k.target.value)}),v.medida,z("button",{onClick:()=>y(v.id),children:"x"})]})]},v.id))}function d(){if(console.log(t),!t||t=="Sin nombre"||t==""){Tu({titulo:"Error",tipo:gl.ALERT,mensaje:"Pon el nombre de la receta"});return}const v=vl(),k=parseInt(Ou().id);let C,x={nombre:t+"",ingredientes:Nn(l),preparacion:o+""};k?(C=v.put.bind(v),x.id=k):C=v.post.bind(v),C("receta",x).then(N=>{Tu({tipo:gl.SUCCESS,titulo:"Success",mensaje:"Se agrego la receta: "+t}),f("/receta?id="+N.id)})}function c(v){v.target.value?r(v.target.value):r("")}function p(v){v.target.value?i(v.target.value):i("")}return D("div",{className:"Receta",children:[z(nd,{rutas:u}),D("div",{className:"centrar",children:[D("h2",{children:["Receta ",z("input",{type:"text",value:t,onChange:c,id:"nombre-receta"})]}),z(Wh,{listaComida:l}),z("button",{onClick:()=>h(),className:"boton",id:"agregar-ingrediente",children:"Agregar Ingrediente"}),e?z(Qh,{seleccionaIngrediente:m,cancelar:g}):z(Vu,{}),D("table",{className:"tabla-receta",children:[z("thead",{children:D("tr",{children:[z("th",{children:"Ingrediente"}),z("th",{children:"Cantidad"})]})}),z("tbody",{children:L()})]}),z("h3",{children:"Preparación"}),z("div",{children:z("textarea",{value:o,onChange:p,id:"preparacion",rows:5})}),z("div",{className:"ancho-100",children:z("button",{onClick:()=>d(),className:"der boton",id:"guardar",children:"Guardar"})})]})]})}function tm(){return D("div",{className:"menu",children:[z(Fo,{to:"/",className:"item btn",children:z("i",{className:"bi bi-house-fill"})}),z("div",{className:"item",children:"Recetario"})]})}function rm(e){return z("div",{className:"body-splash",onClick:()=>e.click(),children:z("h2",{className:"titulo-inicial",children:"Recetas"})})}function om(e){const[n,t]=E.useState({proteina:0,calorias:0,carbohidratos:0});return E.useEffect(()=>{t(bc(e.receta.ingredientes))},[]),D(Fo,{className:"tarjeta-receta",to:"/receta?id="+e.receta.id,children:[z("h3",{children:e.receta.nombre}),D("div",{className:"detalles",children:[z("p",{children:D("span",{className:"letra letra_caloria",children:[n.calorias," "]})}),D("span",{className:"letra letra_proteina",children:["p: ",n.proteina," "]}),D("span",{className:"letra letra_carbohidrato",children:["c: ",n.carbohidratos]})]})]})}const In=new td;In.addPaso({contenido:`
        <h2>🤔</h2>
        <p>
        Veo que es la primera vez que entras, 
        a continución te explico lo básico</p>`,target:".breadcrum",posicion:"botton",acciones:[{texto:"siguiente",accion:In.siguiente,class:"azul"}]});In.addPaso({contenido:`
    <p>Primero tienes que agregar una receta</p>`,target:".boton-circular",acciones:[{texto:"atras",accion:In.atras,class:"azul"},{texto:"siguiente",accion:In.siguiente,class:"azul"}],posicion:"botton"});function im(){const e=localStorage.getItem("tourRecetario");In.esActivo()||e||(In.inicia(),localStorage.setItem("tourRecetario","true"))}const lm=vl();function am(){const[e,n]=E.useState([]),[t,r]=E.useState([{titulo:"Recetas",ruta:"/"}]);return E.useEffect(()=>{Hh().then(()=>{lm.list("receta").then(o=>{n(Nn(o))})}),im()},[]),D("div",{children:[z(nd,{rutas:t}),D("div",{children:[z(Fo,{to:"/receta",className:"boton boton-circular derecha",children:"+"}),z("div",{className:"tarjetario",children:e.map((o,i)=>z(om,{receta:o},i))})]})]})}function um(){const[e,n]=E.useState(!0);function t(){return e?z(rm,{click:()=>n(!1)}):D(jh,{children:[z(tm,{}),D(zh,{children:[z(pl,{path:"/receta",element:z(nm,{})}),z(pl,{path:"/",element:z(am,{})})]}),z("div",{className:"espacio"})]})}return z(Vu,{children:t()})}vi.createRoot(document.getElementById("root")).render(z(Bu.StrictMode,{children:z(um,{})}));
