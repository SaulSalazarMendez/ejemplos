var td=Object.defineProperty;var rd=(e,n,t)=>n in e?td(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Ce=(e,n,t)=>(rd(e,typeof n!="symbol"?n+"":n,t),t);function od(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function id(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $t={},ld={get exports(){return $t},set exports(e){$t=e}},go={},E={},ad={get exports(){return E},set exports(e){E=e}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=Symbol.for("react.element"),ud=Symbol.for("react.portal"),sd=Symbol.for("react.fragment"),cd=Symbol.for("react.strict_mode"),dd=Symbol.for("react.profiler"),fd=Symbol.for("react.provider"),pd=Symbol.for("react.context"),hd=Symbol.for("react.forward_ref"),md=Symbol.for("react.suspense"),vd=Symbol.for("react.memo"),gd=Symbol.for("react.lazy"),pa=Symbol.iterator;function yd(e){return e===null||typeof e!="object"?null:(e=pa&&e[pa]||e["@@iterator"],typeof e=="function"?e:null)}var Ou={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Iu=Object.assign,ju={};function pt(e,n,t){this.props=e,this.context=n,this.refs=ju,this.updater=t||Ou}pt.prototype.isReactComponent={};pt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};pt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mu(){}Mu.prototype=pt.prototype;function gl(e,n,t){this.props=e,this.context=n,this.refs=ju,this.updater=t||Ou}var yl=gl.prototype=new Mu;yl.constructor=gl;Iu(yl,pt.prototype);yl.isPureReactComponent=!0;var ha=Array.isArray,Du=Object.prototype.hasOwnProperty,wl={current:null},Fu={key:!0,ref:!0,__self:!0,__source:!0};function Uu(e,n,t){var r,o={},i=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)Du.call(n,r)&&!Fu.hasOwnProperty(r)&&(o[r]=n[r]);var a=arguments.length-2;if(a===1)o.children=t;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:ir,type:e,key:i,ref:l,props:o,_owner:wl.current}}function wd(e,n){return{$$typeof:ir,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Sl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ir}function Sd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ma=/\/+/g;function $o(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Sd(""+e.key):n.toString(36)}function Tr(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ir:case ud:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+$o(l,0):r,ha(o)?(t="",e!=null&&(t=e.replace(ma,"$&/")+"/"),Tr(o,n,t,"",function(s){return s})):o!=null&&(Sl(o)&&(o=wd(o,t+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ma,"$&/")+"/")+e)),n.push(o)),1;if(l=0,r=r===""?".":r+":",ha(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+$o(i,a);l+=Tr(i,n,t,u,o)}else if(u=yd(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+$o(i,a++),l+=Tr(i,n,t,u,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function hr(e,n,t){if(e==null)return e;var r=[],o=0;return Tr(e,r,"","",function(i){return n.call(t,i,o++)}),r}function kd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Or={transition:null},Ed={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Or,ReactCurrentOwner:wl};O.Children={map:hr,forEach:function(e,n,t){hr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return hr(e,function(){n++}),n},toArray:function(e){return hr(e,function(n){return n})||[]},only:function(e){if(!Sl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=pt;O.Fragment=sd;O.Profiler=dd;O.PureComponent=gl;O.StrictMode=cd;O.Suspense=md;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ed;O.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Iu({},e.props),o=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=wl.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)Du.call(n,u)&&!Fu.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:ir,type:e.type,key:o,ref:i,props:r,_owner:l}};O.createContext=function(e){return e={$$typeof:pd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fd,_context:e},e.Consumer=e};O.createElement=Uu;O.createFactory=function(e){var n=Uu.bind(null,e);return n.type=e,n};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:hd,render:e}};O.isValidElement=Sl;O.lazy=function(e){return{$$typeof:gd,_payload:{_status:-1,_result:e},_init:kd}};O.memo=function(e,n){return{$$typeof:vd,type:e,compare:n===void 0?null:n}};O.startTransition=function(e){var n=Or.transition;Or.transition={};try{e()}finally{Or.transition=n}};O.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};O.useCallback=function(e,n){return de.current.useCallback(e,n)};O.useContext=function(e){return de.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return de.current.useDeferredValue(e)};O.useEffect=function(e,n){return de.current.useEffect(e,n)};O.useId=function(){return de.current.useId()};O.useImperativeHandle=function(e,n,t){return de.current.useImperativeHandle(e,n,t)};O.useInsertionEffect=function(e,n){return de.current.useInsertionEffect(e,n)};O.useLayoutEffect=function(e,n){return de.current.useLayoutEffect(e,n)};O.useMemo=function(e,n){return de.current.useMemo(e,n)};O.useReducer=function(e,n,t){return de.current.useReducer(e,n,t)};O.useRef=function(e){return de.current.useRef(e)};O.useState=function(e){return de.current.useState(e)};O.useSyncExternalStore=function(e,n,t){return de.current.useSyncExternalStore(e,n,t)};O.useTransition=function(){return de.current.useTransition()};O.version="18.2.0";(function(e){e.exports=O})(ad);const Bu=id(E),hi=od({__proto__:null,default:Bu},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd=E,Cd=Symbol.for("react.element"),Pd=Symbol.for("react.fragment"),_d=Object.prototype.hasOwnProperty,Nd=xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zd={key:!0,ref:!0,__self:!0,__source:!0};function $u(e,n,t){var r,o={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)_d.call(n,r)&&!zd.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:Cd,type:e,key:i,ref:l,props:o,_owner:Nd.current}}go.Fragment=Pd;go.jsx=$u;go.jsxs=$u;(function(e){e.exports=go})(ld);const Au=$t.Fragment,L=$t.jsx,D=$t.jsxs;var mi={},vi={},Ld={get exports(){return vi},set exports(e){vi=e}},Ee={},gi={},Rd={get exports(){return gi},set exports(e){gi=e}},Vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,R){var T=_.length;_.push(R);e:for(;0<T;){var Y=T-1>>>1,b=_[Y];if(0<o(b,R))_[Y]=R,_[T]=b,T=Y;else break e}}function t(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var R=_[0],T=_.pop();if(T!==R){_[0]=T;e:for(var Y=0,b=_.length,fr=b>>>1;Y<fr;){var xn=2*(Y+1)-1,Bo=_[xn],Cn=xn+1,pr=_[Cn];if(0>o(Bo,T))Cn<b&&0>o(pr,Bo)?(_[Y]=pr,_[Cn]=T,Y=Cn):(_[Y]=Bo,_[xn]=T,Y=xn);else if(Cn<b&&0>o(pr,T))_[Y]=pr,_[Cn]=T,Y=Cn;else break e}}return R}function o(_,R){var T=_.sortIndex-R.sortIndex;return T!==0?T:_.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],s=[],f=1,h=null,m=3,g=!1,w=!1,y=!1,z=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(_){for(var R=t(s);R!==null;){if(R.callback===null)r(s);else if(R.startTime<=_)r(s),R.sortIndex=R.expirationTime,n(u,R);else break;R=t(s)}}function v(_){if(y=!1,p(_),!w)if(t(u)!==null)w=!0,Fo(k);else{var R=t(s);R!==null&&Uo(v,R.startTime-_)}}function k(_,R){w=!1,y&&(y=!1,d(N),N=-1),g=!0;var T=m;try{for(p(R),h=t(u);h!==null&&(!(h.expirationTime>R)||_&&!Te());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,m=h.priorityLevel;var b=Y(h.expirationTime<=R);R=e.unstable_now(),typeof b=="function"?h.callback=b:h===t(u)&&r(u),p(R)}else r(u);h=t(u)}if(h!==null)var fr=!0;else{var xn=t(s);xn!==null&&Uo(v,xn.startTime-R),fr=!1}return fr}finally{h=null,m=T,g=!1}}var C=!1,x=null,N=-1,K=5,I=-1;function Te(){return!(e.unstable_now()-I<K)}function gt(){if(x!==null){var _=e.unstable_now();I=_;var R=!0;try{R=x(!0,_)}finally{R?yt():(C=!1,x=null)}}else C=!1}var yt;if(typeof c=="function")yt=function(){c(gt)};else if(typeof MessageChannel<"u"){var fa=new MessageChannel,nd=fa.port2;fa.port1.onmessage=gt,yt=function(){nd.postMessage(null)}}else yt=function(){z(gt,0)};function Fo(_){x=_,C||(C=!0,yt())}function Uo(_,R){N=z(function(){_(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,Fo(k))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var T=m;m=R;try{return _()}finally{m=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,R){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var T=m;m=_;try{return R()}finally{m=T}},e.unstable_scheduleCallback=function(_,R,T){var Y=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?Y+T:Y):T=Y,_){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=T+b,_={id:f++,callback:R,priorityLevel:_,startTime:T,expirationTime:b,sortIndex:-1},T>Y?(_.sortIndex=T,n(s,_),t(u)===null&&_===t(s)&&(y?(d(N),N=-1):y=!0,Uo(v,T-Y))):(_.sortIndex=b,n(u,_),w||g||(w=!0,Fo(k))),_},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(_){var R=m;return function(){var T=m;m=R;try{return _.apply(this,arguments)}finally{m=T}}}})(Vu);(function(e){e.exports=Vu})(Rd);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hu=E,ke=gi;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wu=new Set,At={};function Un(e,n){lt(e,n),lt(e+"Capture",n)}function lt(e,n){for(At[e]=n,e=0;e<n.length;e++)Wu.add(n[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yi=Object.prototype.hasOwnProperty,Td=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,va={},ga={};function Od(e){return yi.call(ga,e)?!0:yi.call(va,e)?!1:Td.test(e)?ga[e]=!0:(va[e]=!0,!1)}function Id(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jd(e,n,t,r){if(n===null||typeof n>"u"||Id(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function fe(e,n,t,r,o,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];oe[n]=new fe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var kl=/[\-:]([a-z])/g;function El(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(kl,El);oe[n]=new fe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(kl,El);oe[n]=new fe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(kl,El);oe[n]=new fe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function xl(e,n,t,r){var o=oe.hasOwnProperty(n)?oe[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(jd(n,t,o,r)&&(t=null),r||o===null?Od(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var be=Hu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mr=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),Cl=Symbol.for("react.strict_mode"),wi=Symbol.for("react.profiler"),Qu=Symbol.for("react.provider"),Ku=Symbol.for("react.context"),Pl=Symbol.for("react.forward_ref"),Si=Symbol.for("react.suspense"),ki=Symbol.for("react.suspense_list"),_l=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),Yu=Symbol.for("react.offscreen"),ya=Symbol.iterator;function wt(e){return e===null||typeof e!="object"?null:(e=ya&&e[ya]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Ao;function Nt(e){if(Ao===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ao=n&&n[1]||""}return`
`+Ao+e}var Vo=!1;function Ho(e,n){if(!e||Vo)return"";Vo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Vo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Nt(e):""}function Md(e){switch(e.tag){case 5:return Nt(e.type);case 16:return Nt("Lazy");case 13:return Nt("Suspense");case 19:return Nt("SuspenseList");case 0:case 2:case 15:return e=Ho(e.type,!1),e;case 11:return e=Ho(e.type.render,!1),e;case 1:return e=Ho(e.type,!0),e;default:return""}}function Ei(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Vn:return"Portal";case wi:return"Profiler";case Cl:return"StrictMode";case Si:return"Suspense";case ki:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ku:return(e.displayName||"Context")+".Consumer";case Qu:return(e._context.displayName||"Context")+".Provider";case Pl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _l:return n=e.displayName||null,n!==null?n:Ei(e.type)||"Memo";case nn:n=e._payload,e=e._init;try{return Ei(e(n))}catch{}}return null}function Dd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ei(n);case 8:return n===Cl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Fd(e){var n=Gu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function vr(e){e._valueTracker||(e._valueTracker=Fd(e))}function Xu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Gu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xi(e,n){var t=n.checked;return W({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function wa(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=yn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ju(e,n){n=n.checked,n!=null&&xl(e,"checked",n,!1)}function Ci(e,n){Ju(e,n);var t=yn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Pi(e,n.type,t):n.hasOwnProperty("defaultValue")&&Pi(e,n.type,yn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Sa(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Pi(e,n,t){(n!=="number"||Hr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var zt=Array.isArray;function et(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+yn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function _i(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return W({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ka(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(zt(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:yn(t)}}function Zu(e,n){var t=yn(n.value),r=yn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ea(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function qu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ni(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?qu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gr,bu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Vt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Tt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ud=["Webkit","ms","Moz","O"];Object.keys(Tt).forEach(function(e){Ud.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Tt[n]=Tt[e]})});function es(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Tt.hasOwnProperty(e)&&Tt[e]?(""+n).trim():n+"px"}function ns(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=es(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Bd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zi(e,n){if(n){if(Bd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function Li(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ri=null;function Nl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ti=null,nt=null,tt=null;function xa(e){if(e=ur(e)){if(typeof Ti!="function")throw Error(S(280));var n=e.stateNode;n&&(n=Eo(n),Ti(e.stateNode,e.type,n))}}function ts(e){nt?tt?tt.push(e):tt=[e]:nt=e}function rs(){if(nt){var e=nt,n=tt;if(tt=nt=null,xa(e),n)for(e=0;e<n.length;e++)xa(n[e])}}function os(e,n){return e(n)}function is(){}var Wo=!1;function ls(e,n,t){if(Wo)return e(n,t);Wo=!0;try{return os(e,n,t)}finally{Wo=!1,(nt!==null||tt!==null)&&(is(),rs())}}function Ht(e,n){var t=e.stateNode;if(t===null)return null;var r=Eo(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var Oi=!1;if(Xe)try{var St={};Object.defineProperty(St,"passive",{get:function(){Oi=!0}}),window.addEventListener("test",St,St),window.removeEventListener("test",St,St)}catch{Oi=!1}function $d(e,n,t,r,o,i,l,a,u){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(f){this.onError(f)}}var Ot=!1,Wr=null,Qr=!1,Ii=null,Ad={onError:function(e){Ot=!0,Wr=e}};function Vd(e,n,t,r,o,i,l,a,u){Ot=!1,Wr=null,$d.apply(Ad,arguments)}function Hd(e,n,t,r,o,i,l,a,u){if(Vd.apply(this,arguments),Ot){if(Ot){var s=Wr;Ot=!1,Wr=null}else throw Error(S(198));Qr||(Qr=!0,Ii=s)}}function Bn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function as(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ca(e){if(Bn(e)!==e)throw Error(S(188))}function Wd(e){var n=e.alternate;if(!n){if(n=Bn(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return Ca(o),e;if(i===r)return Ca(o),n;i=i.sibling}throw Error(S(188))}if(t.return!==r.return)t=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===t){l=!0,t=o,r=i;break}if(a===r){l=!0,r=o,t=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===t){l=!0,t=i,r=o;break}if(a===r){l=!0,r=i,t=o;break}a=a.sibling}if(!l)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function us(e){return e=Wd(e),e!==null?ss(e):null}function ss(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ss(e);if(n!==null)return n;e=e.sibling}return null}var cs=ke.unstable_scheduleCallback,Pa=ke.unstable_cancelCallback,Qd=ke.unstable_shouldYield,Kd=ke.unstable_requestPaint,G=ke.unstable_now,Yd=ke.unstable_getCurrentPriorityLevel,zl=ke.unstable_ImmediatePriority,ds=ke.unstable_UserBlockingPriority,Kr=ke.unstable_NormalPriority,Gd=ke.unstable_LowPriority,fs=ke.unstable_IdlePriority,yo=null,Ve=null;function Xd(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(yo,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:qd,Jd=Math.log,Zd=Math.LN2;function qd(e){return e>>>=0,e===0?32:31-(Jd(e)/Zd|0)|0}var yr=64,wr=4194304;function Lt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~o;a!==0?r=Lt(a):(i&=l,i!==0&&(r=Lt(i)))}else l=t&~o,l!==0?r=Lt(l):i!==0&&(r=Lt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-De(n),o=1<<t,r|=e[t],n&=~o;return r}function bd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ef(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-De(i),a=1<<l,u=o[l];u===-1?(!(a&t)||a&r)&&(o[l]=bd(a,n)):u<=n&&(e.expiredLanes|=a),i&=~a}}function ji(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ps(){var e=yr;return yr<<=1,!(yr&4194240)&&(yr=64),e}function Qo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function lr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-De(n),e[n]=t}function nf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-De(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function Ll(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-De(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var M=0;function hs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ms,Rl,vs,gs,ys,Mi=!1,Sr=[],sn=null,cn=null,dn=null,Wt=new Map,Qt=new Map,rn=[],tf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _a(e,n){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Wt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qt.delete(n.pointerId)}}function kt(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=ur(n),n!==null&&Rl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function rf(e,n,t,r,o){switch(n){case"focusin":return sn=kt(sn,e,n,t,r,o),!0;case"dragenter":return cn=kt(cn,e,n,t,r,o),!0;case"mouseover":return dn=kt(dn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return Wt.set(i,kt(Wt.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Qt.set(i,kt(Qt.get(i)||null,e,n,t,r,o)),!0}return!1}function ws(e){var n=zn(e.target);if(n!==null){var t=Bn(n);if(t!==null){if(n=t.tag,n===13){if(n=as(t),n!==null){e.blockedOn=n,ys(e.priority,function(){vs(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ir(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Di(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ri=r,t.target.dispatchEvent(r),Ri=null}else return n=ur(t),n!==null&&Rl(n),e.blockedOn=t,!1;n.shift()}return!0}function Na(e,n,t){Ir(e)&&t.delete(n)}function of(){Mi=!1,sn!==null&&Ir(sn)&&(sn=null),cn!==null&&Ir(cn)&&(cn=null),dn!==null&&Ir(dn)&&(dn=null),Wt.forEach(Na),Qt.forEach(Na)}function Et(e,n){e.blockedOn===n&&(e.blockedOn=null,Mi||(Mi=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,of)))}function Kt(e){function n(o){return Et(o,e)}if(0<Sr.length){Et(Sr[0],e);for(var t=1;t<Sr.length;t++){var r=Sr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(sn!==null&&Et(sn,e),cn!==null&&Et(cn,e),dn!==null&&Et(dn,e),Wt.forEach(n),Qt.forEach(n),t=0;t<rn.length;t++)r=rn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(t=rn[0],t.blockedOn===null);)ws(t),t.blockedOn===null&&rn.shift()}var rt=be.ReactCurrentBatchConfig,Gr=!0;function lf(e,n,t,r){var o=M,i=rt.transition;rt.transition=null;try{M=1,Tl(e,n,t,r)}finally{M=o,rt.transition=i}}function af(e,n,t,r){var o=M,i=rt.transition;rt.transition=null;try{M=4,Tl(e,n,t,r)}finally{M=o,rt.transition=i}}function Tl(e,n,t,r){if(Gr){var o=Di(e,n,t,r);if(o===null)ni(e,n,r,Xr,t),_a(e,r);else if(rf(o,e,n,t,r))r.stopPropagation();else if(_a(e,r),n&4&&-1<tf.indexOf(e)){for(;o!==null;){var i=ur(o);if(i!==null&&ms(i),i=Di(e,n,t,r),i===null&&ni(e,n,r,Xr,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else ni(e,n,r,null,t)}}var Xr=null;function Di(e,n,t,r){if(Xr=null,e=Nl(r),e=zn(e),e!==null)if(n=Bn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=as(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Xr=e,null}function Ss(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yd()){case zl:return 1;case ds:return 4;case Kr:case Gd:return 16;case fs:return 536870912;default:return 16}default:return 16}}var ln=null,Ol=null,jr=null;function ks(){if(jr)return jr;var e,n=Ol,t=n.length,r,o="value"in ln?ln.value:ln.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===o[i-r];r++);return jr=o.slice(e,1<r?1-r:void 0)}function Mr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function za(){return!1}function xe(e){function n(t,r,o,i,l){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?kr:za,this.isPropagationStopped=za,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),n}var ht={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=xe(ht),ar=W({},ht,{view:0,detail:0}),uf=xe(ar),Ko,Yo,xt,wo=W({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xt&&(xt&&e.type==="mousemove"?(Ko=e.screenX-xt.screenX,Yo=e.screenY-xt.screenY):Yo=Ko=0,xt=e),Ko)},movementY:function(e){return"movementY"in e?e.movementY:Yo}}),La=xe(wo),sf=W({},wo,{dataTransfer:0}),cf=xe(sf),df=W({},ar,{relatedTarget:0}),Go=xe(df),ff=W({},ht,{animationName:0,elapsedTime:0,pseudoElement:0}),pf=xe(ff),hf=W({},ht,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mf=xe(hf),vf=W({},ht,{data:0}),Ra=xe(vf),gf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=wf[e])?!!n[e]:!1}function jl(){return Sf}var kf=W({},ar,{key:function(e){if(e.key){var n=gf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(e){return e.type==="keypress"?Mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ef=xe(kf),xf=W({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ta=xe(xf),Cf=W({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),Pf=xe(Cf),_f=W({},ht,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nf=xe(_f),zf=W({},wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lf=xe(zf),Rf=[9,13,27,32],Ml=Xe&&"CompositionEvent"in window,It=null;Xe&&"documentMode"in document&&(It=document.documentMode);var Tf=Xe&&"TextEvent"in window&&!It,Es=Xe&&(!Ml||It&&8<It&&11>=It),Oa=String.fromCharCode(32),Ia=!1;function xs(e,n){switch(e){case"keyup":return Rf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function Of(e,n){switch(e){case"compositionend":return Cs(n);case"keypress":return n.which!==32?null:(Ia=!0,Oa);case"textInput":return e=n.data,e===Oa&&Ia?null:e;default:return null}}function If(e,n){if(Wn)return e==="compositionend"||!Ml&&xs(e,n)?(e=ks(),jr=Ol=ln=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Es&&n.locale!=="ko"?null:n.data;default:return null}}var jf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ja(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!jf[e.type]:n==="textarea"}function Ps(e,n,t,r){ts(r),n=Jr(n,"onChange"),0<n.length&&(t=new Il("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var jt=null,Yt=null;function Mf(e){Ds(e,0)}function So(e){var n=Yn(e);if(Xu(n))return e}function Df(e,n){if(e==="change")return n}var _s=!1;if(Xe){var Xo;if(Xe){var Jo="oninput"in document;if(!Jo){var Ma=document.createElement("div");Ma.setAttribute("oninput","return;"),Jo=typeof Ma.oninput=="function"}Xo=Jo}else Xo=!1;_s=Xo&&(!document.documentMode||9<document.documentMode)}function Da(){jt&&(jt.detachEvent("onpropertychange",Ns),Yt=jt=null)}function Ns(e){if(e.propertyName==="value"&&So(Yt)){var n=[];Ps(n,Yt,e,Nl(e)),ls(Mf,n)}}function Ff(e,n,t){e==="focusin"?(Da(),jt=n,Yt=t,jt.attachEvent("onpropertychange",Ns)):e==="focusout"&&Da()}function Uf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return So(Yt)}function Bf(e,n){if(e==="click")return So(n)}function $f(e,n){if(e==="input"||e==="change")return So(n)}function Af(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ue=typeof Object.is=="function"?Object.is:Af;function Gt(e,n){if(Ue(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!yi.call(n,o)||!Ue(e[o],n[o]))return!1}return!0}function Fa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ua(e,n){var t=Fa(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Fa(t)}}function zs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ls(){for(var e=window,n=Hr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Hr(e.document)}return n}function Dl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Vf(e){var n=Ls(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&zs(t.ownerDocument.documentElement,t)){if(r!==null&&Dl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ua(t,i);var l=Ua(t,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hf=Xe&&"documentMode"in document&&11>=document.documentMode,Qn=null,Fi=null,Mt=null,Ui=!1;function Ba(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ui||Qn==null||Qn!==Hr(r)||(r=Qn,"selectionStart"in r&&Dl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mt&&Gt(Mt,r)||(Mt=r,r=Jr(Fi,"onSelect"),0<r.length&&(n=new Il("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Qn)))}function Er(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Kn={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionend:Er("Transition","TransitionEnd")},Zo={},Rs={};Xe&&(Rs=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function ko(e){if(Zo[e])return Zo[e];if(!Kn[e])return e;var n=Kn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Rs)return Zo[e]=n[t];return e}var Ts=ko("animationend"),Os=ko("animationiteration"),Is=ko("animationstart"),js=ko("transitionend"),Ms=new Map,$a="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,n){Ms.set(e,n),Un(n,[e])}for(var qo=0;qo<$a.length;qo++){var bo=$a[qo],Wf=bo.toLowerCase(),Qf=bo[0].toUpperCase()+bo.slice(1);Sn(Wf,"on"+Qf)}Sn(Ts,"onAnimationEnd");Sn(Os,"onAnimationIteration");Sn(Is,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(js,"onTransitionEnd");lt("onMouseEnter",["mouseout","mouseover"]);lt("onMouseLeave",["mouseout","mouseover"]);lt("onPointerEnter",["pointerout","pointerover"]);lt("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rt));function Aa(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Hd(r,n,void 0,e),e.currentTarget=null}function Ds(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;Aa(o,a,s),i=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,s=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;Aa(o,a,s),i=u}}}if(Qr)throw e=Ii,Qr=!1,Ii=null,e}function B(e,n){var t=n[Hi];t===void 0&&(t=n[Hi]=new Set);var r=e+"__bubble";t.has(r)||(Fs(n,e,2,!1),t.add(r))}function ei(e,n,t){var r=0;n&&(r|=4),Fs(t,e,r,n)}var xr="_reactListening"+Math.random().toString(36).slice(2);function Xt(e){if(!e[xr]){e[xr]=!0,Wu.forEach(function(t){t!=="selectionchange"&&(Kf.has(t)||ei(t,!1,e),ei(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xr]||(n[xr]=!0,ei("selectionchange",!1,n))}}function Fs(e,n,t,r){switch(Ss(n)){case 1:var o=lf;break;case 4:o=af;break;default:o=Tl}t=o.bind(null,n,t,e),o=void 0,!Oi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function ni(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;a!==null;){if(l=zn(a),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}a=a.parentNode}}r=r.return}ls(function(){var s=i,f=Nl(t),h=[];e:{var m=Ms.get(e);if(m!==void 0){var g=Il,w=e;switch(e){case"keypress":if(Mr(t)===0)break e;case"keydown":case"keyup":g=Ef;break;case"focusin":w="focus",g=Go;break;case"focusout":w="blur",g=Go;break;case"beforeblur":case"afterblur":g=Go;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=La;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=cf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Pf;break;case Ts:case Os:case Is:g=pf;break;case js:g=Nf;break;case"scroll":g=uf;break;case"wheel":g=Lf;break;case"copy":case"cut":case"paste":g=mf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ta}var y=(n&4)!==0,z=!y&&e==="scroll",d=y?m!==null?m+"Capture":null:m;y=[];for(var c=s,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,d!==null&&(v=Ht(c,d),v!=null&&y.push(Jt(c,v,p)))),z)break;c=c.return}0<y.length&&(m=new g(m,w,null,t,f),h.push({event:m,listeners:y}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&t!==Ri&&(w=t.relatedTarget||t.fromElement)&&(zn(w)||w[Je]))break e;if((g||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,g?(w=t.relatedTarget||t.toElement,g=s,w=w?zn(w):null,w!==null&&(z=Bn(w),w!==z||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=s),g!==w)){if(y=La,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ta,v="onPointerLeave",d="onPointerEnter",c="pointer"),z=g==null?m:Yn(g),p=w==null?m:Yn(w),m=new y(v,c+"leave",g,t,f),m.target=z,m.relatedTarget=p,v=null,zn(f)===s&&(y=new y(d,c+"enter",w,t,f),y.target=p,y.relatedTarget=z,v=y),z=v,g&&w)n:{for(y=g,d=w,c=0,p=y;p;p=An(p))c++;for(p=0,v=d;v;v=An(v))p++;for(;0<c-p;)y=An(y),c--;for(;0<p-c;)d=An(d),p--;for(;c--;){if(y===d||d!==null&&y===d.alternate)break n;y=An(y),d=An(d)}y=null}else y=null;g!==null&&Va(h,m,g,y,!1),w!==null&&z!==null&&Va(h,z,w,y,!0)}}e:{if(m=s?Yn(s):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var k=Df;else if(ja(m))if(_s)k=$f;else{k=Uf;var C=Ff}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Bf);if(k&&(k=k(e,s))){Ps(h,k,t,f);break e}C&&C(e,m,s),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Pi(m,"number",m.value)}switch(C=s?Yn(s):window,e){case"focusin":(ja(C)||C.contentEditable==="true")&&(Qn=C,Fi=s,Mt=null);break;case"focusout":Mt=Fi=Qn=null;break;case"mousedown":Ui=!0;break;case"contextmenu":case"mouseup":case"dragend":Ui=!1,Ba(h,t,f);break;case"selectionchange":if(Hf)break;case"keydown":case"keyup":Ba(h,t,f)}var x;if(Ml)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Wn?xs(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(Es&&t.locale!=="ko"&&(Wn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Wn&&(x=ks()):(ln=f,Ol="value"in ln?ln.value:ln.textContent,Wn=!0)),C=Jr(s,N),0<C.length&&(N=new Ra(N,e,null,t,f),h.push({event:N,listeners:C}),x?N.data=x:(x=Cs(t),x!==null&&(N.data=x)))),(x=Tf?Of(e,t):If(e,t))&&(s=Jr(s,"onBeforeInput"),0<s.length&&(f=new Ra("onBeforeInput","beforeinput",null,t,f),h.push({event:f,listeners:s}),f.data=x))}Ds(h,n)})}function Jt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Jr(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ht(e,t),i!=null&&r.unshift(Jt(e,i,o)),i=Ht(e,n),i!=null&&r.push(Jt(e,i,o))),e=e.return}return r}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Va(e,n,t,r,o){for(var i=n._reactName,l=[];t!==null&&t!==r;){var a=t,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,o?(u=Ht(t,i),u!=null&&l.unshift(Jt(t,u,a))):o||(u=Ht(t,i),u!=null&&l.push(Jt(t,u,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Yf=/\r\n?/g,Gf=/\u0000|\uFFFD/g;function Ha(e){return(typeof e=="string"?e:""+e).replace(Yf,`
`).replace(Gf,"")}function Cr(e,n,t){if(n=Ha(n),Ha(e)!==n&&t)throw Error(S(425))}function Zr(){}var Bi=null,$i=null;function Ai(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vi=typeof setTimeout=="function"?setTimeout:void 0,Xf=typeof clearTimeout=="function"?clearTimeout:void 0,Wa=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof Wa<"u"?function(e){return Wa.resolve(null).then(e).catch(Zf)}:Vi;function Zf(e){setTimeout(function(){throw e})}function ti(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Kt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Kt(n)}function fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Qa(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var mt=Math.random().toString(36).slice(2),Ae="__reactFiber$"+mt,Zt="__reactProps$"+mt,Je="__reactContainer$"+mt,Hi="__reactEvents$"+mt,qf="__reactListeners$"+mt,bf="__reactHandles$"+mt;function zn(e){var n=e[Ae];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Je]||t[Ae]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Qa(e);e!==null;){if(t=e[Ae])return t;e=Qa(e)}return n}e=t,t=e.parentNode}return null}function ur(e){return e=e[Ae]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Eo(e){return e[Zt]||null}var Wi=[],Gn=-1;function kn(e){return{current:e}}function $(e){0>Gn||(e.current=Wi[Gn],Wi[Gn]=null,Gn--)}function F(e,n){Gn++,Wi[Gn]=e.current,e.current=n}var wn={},ue=kn(wn),me=kn(!1),In=wn;function at(e,n){var t=e.type.contextTypes;if(!t)return wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function ve(e){return e=e.childContextTypes,e!=null}function qr(){$(me),$(ue)}function Ka(e,n,t){if(ue.current!==wn)throw Error(S(168));F(ue,n),F(me,t)}function Us(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(S(108,Dd(e)||"Unknown",o));return W({},t,r)}function br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wn,In=ue.current,F(ue,e),F(me,me.current),!0}function Ya(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=Us(e,n,In),r.__reactInternalMemoizedMergedChildContext=e,$(me),$(ue),F(ue,e)):$(me),F(me,t)}var Qe=null,xo=!1,ri=!1;function Bs(e){Qe===null?Qe=[e]:Qe.push(e)}function ep(e){xo=!0,Bs(e)}function En(){if(!ri&&Qe!==null){ri=!0;var e=0,n=M;try{var t=Qe;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Qe=null,xo=!1}catch(o){throw Qe!==null&&(Qe=Qe.slice(e+1)),cs(zl,En),o}finally{M=n,ri=!1}}return null}var Xn=[],Jn=0,eo=null,no=0,Pe=[],_e=0,jn=null,Ke=1,Ye="";function Pn(e,n){Xn[Jn++]=no,Xn[Jn++]=eo,eo=e,no=n}function $s(e,n,t){Pe[_e++]=Ke,Pe[_e++]=Ye,Pe[_e++]=jn,jn=e;var r=Ke;e=Ye;var o=32-De(r)-1;r&=~(1<<o),t+=1;var i=32-De(n)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Ke=1<<32-De(n)+o|t<<o|r,Ye=i+e}else Ke=1<<i|t<<o|r,Ye=e}function Fl(e){e.return!==null&&(Pn(e,1),$s(e,1,0))}function Ul(e){for(;e===eo;)eo=Xn[--Jn],Xn[Jn]=null,no=Xn[--Jn],Xn[Jn]=null;for(;e===jn;)jn=Pe[--_e],Pe[_e]=null,Ye=Pe[--_e],Pe[_e]=null,Ke=Pe[--_e],Pe[_e]=null}var Se=null,we=null,A=!1,Me=null;function As(e,n){var t=Ne(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ga(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Se=e,we=fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Se=e,we=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=jn!==null?{id:Ke,overflow:Ye}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ne(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Se=e,we=null,!0):!1;default:return!1}}function Qi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ki(e){if(A){var n=we;if(n){var t=n;if(!Ga(e,n)){if(Qi(e))throw Error(S(418));n=fn(t.nextSibling);var r=Se;n&&Ga(e,n)?As(r,t):(e.flags=e.flags&-4097|2,A=!1,Se=e)}}else{if(Qi(e))throw Error(S(418));e.flags=e.flags&-4097|2,A=!1,Se=e}}}function Xa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Pr(e){if(e!==Se)return!1;if(!A)return Xa(e),A=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ai(e.type,e.memoizedProps)),n&&(n=we)){if(Qi(e))throw Vs(),Error(S(418));for(;n;)As(e,n),n=fn(n.nextSibling)}if(Xa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){we=fn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}we=null}}else we=Se?fn(e.stateNode.nextSibling):null;return!0}function Vs(){for(var e=we;e;)e=fn(e.nextSibling)}function ut(){we=Se=null,A=!1}function Bl(e){Me===null?Me=[e]:Me.push(e)}var np=be.ReactCurrentBatchConfig;function Ie(e,n){if(e&&e.defaultProps){n=W({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var to=kn(null),ro=null,Zn=null,$l=null;function Al(){$l=Zn=ro=null}function Vl(e){var n=to.current;$(to),e._currentValue=n}function Yi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ot(e,n){ro=e,$l=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(he=!0),e.firstContext=null)}function Le(e){var n=e._currentValue;if($l!==e)if(e={context:e,memoizedValue:n,next:null},Zn===null){if(ro===null)throw Error(S(308));Zn=e,ro.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return n}var Ln=null;function Hl(e){Ln===null?Ln=[e]:Ln.push(e)}function Hs(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Hl(n)):(t.next=o.next,o.next=t),n.interleaved=t,Ze(e,r)}function Ze(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var tn=!1;function Wl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ws(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function pn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,Ze(e,t)}return o=r.interleaved,o===null?(n.next=n,Hl(r)):(n.next=o.next,o.next=n),r.interleaved=n,Ze(e,t)}function Dr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ll(e,t)}}function Ja(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function oo(e,n,t,r){var o=e.updateQueue;tn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,s=u.next;u.next=null,l===null?i=s:l.next=s,l=u;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=s:a.next=s,f.lastBaseUpdate=u))}if(i!==null){var h=o.baseState;l=0,f=s=u=null,a=i;do{var m=a.lane,g=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,y=a;switch(m=n,g=t,y.tag){case 1:if(w=y.payload,typeof w=="function"){h=w.call(g,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,m=typeof w=="function"?w.call(g,h,m):w,m==null)break e;h=W({},h,m);break e;case 2:tn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(s=f=g,u=h):f=f.next=g,l|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(f===null&&(u=h),o.baseState=u,o.firstBaseUpdate=s,o.lastBaseUpdate=f,n=o.shared.interleaved,n!==null){o=n;do l|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);Dn|=l,e.lanes=l,e.memoizedState=h}}function Za(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var Qs=new Hu.Component().refs;function Gi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:W({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Co={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ce(),o=mn(e),i=Ge(r,o);i.payload=n,t!=null&&(i.callback=t),n=pn(e,i,o),n!==null&&(Fe(n,e,o,r),Dr(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ce(),o=mn(e),i=Ge(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=pn(e,i,o),n!==null&&(Fe(n,e,o,r),Dr(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ce(),r=mn(e),o=Ge(t,r);o.tag=2,n!=null&&(o.callback=n),n=pn(e,o,r),n!==null&&(Fe(n,e,r,t),Dr(n,e,r))}};function qa(e,n,t,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):n.prototype&&n.prototype.isPureReactComponent?!Gt(t,r)||!Gt(o,i):!0}function Ks(e,n,t){var r=!1,o=wn,i=n.contextType;return typeof i=="object"&&i!==null?i=Le(i):(o=ve(n)?In:ue.current,r=n.contextTypes,i=(r=r!=null)?at(e,o):wn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Co,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function ba(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Co.enqueueReplaceState(n,n.state,null)}function Xi(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs=Qs,Wl(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=Le(i):(i=ve(n)?In:ue.current,o.context=at(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Gi(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Co.enqueueReplaceState(o,o.state,null),oo(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ct(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var a=o.refs;a===Qs&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function _r(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function eu(e){var n=e._init;return n(e._payload)}function Ys(e){function n(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=vn(d,c),d.index=0,d.sibling=null,d}function i(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,p,v){return c===null||c.tag!==6?(c=ci(p,d.mode,v),c.return=d,c):(c=o(c,p),c.return=d,c)}function u(d,c,p,v){var k=p.type;return k===Hn?f(d,c,p.props.children,v,p.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===nn&&eu(k)===c.type)?(v=o(c,p.props),v.ref=Ct(d,c,p),v.return=d,v):(v=Vr(p.type,p.key,p.props,null,d.mode,v),v.ref=Ct(d,c,p),v.return=d,v)}function s(d,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=di(p,d.mode,v),c.return=d,c):(c=o(c,p.children||[]),c.return=d,c)}function f(d,c,p,v,k){return c===null||c.tag!==7?(c=On(p,d.mode,v,k),c.return=d,c):(c=o(c,p),c.return=d,c)}function h(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ci(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case mr:return p=Vr(c.type,c.key,c.props,null,d.mode,p),p.ref=Ct(d,null,c),p.return=d,p;case Vn:return c=di(c,d.mode,p),c.return=d,c;case nn:var v=c._init;return h(d,v(c._payload),p)}if(zt(c)||wt(c))return c=On(c,d.mode,p,null),c.return=d,c;_r(d,c)}return null}function m(d,c,p,v){var k=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:a(d,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case mr:return p.key===k?u(d,c,p,v):null;case Vn:return p.key===k?s(d,c,p,v):null;case nn:return k=p._init,m(d,c,k(p._payload),v)}if(zt(p)||wt(p))return k!==null?null:f(d,c,p,v,null);_r(d,p)}return null}function g(d,c,p,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(p)||null,a(c,d,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case mr:return d=d.get(v.key===null?p:v.key)||null,u(c,d,v,k);case Vn:return d=d.get(v.key===null?p:v.key)||null,s(c,d,v,k);case nn:var C=v._init;return g(d,c,p,C(v._payload),k)}if(zt(v)||wt(v))return d=d.get(p)||null,f(c,d,v,k,null);_r(c,v)}return null}function w(d,c,p,v){for(var k=null,C=null,x=c,N=c=0,K=null;x!==null&&N<p.length;N++){x.index>N?(K=x,x=null):K=x.sibling;var I=m(d,x,p[N],v);if(I===null){x===null&&(x=K);break}e&&x&&I.alternate===null&&n(d,x),c=i(I,c,N),C===null?k=I:C.sibling=I,C=I,x=K}if(N===p.length)return t(d,x),A&&Pn(d,N),k;if(x===null){for(;N<p.length;N++)x=h(d,p[N],v),x!==null&&(c=i(x,c,N),C===null?k=x:C.sibling=x,C=x);return A&&Pn(d,N),k}for(x=r(d,x);N<p.length;N++)K=g(x,d,N,p[N],v),K!==null&&(e&&K.alternate!==null&&x.delete(K.key===null?N:K.key),c=i(K,c,N),C===null?k=K:C.sibling=K,C=K);return e&&x.forEach(function(Te){return n(d,Te)}),A&&Pn(d,N),k}function y(d,c,p,v){var k=wt(p);if(typeof k!="function")throw Error(S(150));if(p=k.call(p),p==null)throw Error(S(151));for(var C=k=null,x=c,N=c=0,K=null,I=p.next();x!==null&&!I.done;N++,I=p.next()){x.index>N?(K=x,x=null):K=x.sibling;var Te=m(d,x,I.value,v);if(Te===null){x===null&&(x=K);break}e&&x&&Te.alternate===null&&n(d,x),c=i(Te,c,N),C===null?k=Te:C.sibling=Te,C=Te,x=K}if(I.done)return t(d,x),A&&Pn(d,N),k;if(x===null){for(;!I.done;N++,I=p.next())I=h(d,I.value,v),I!==null&&(c=i(I,c,N),C===null?k=I:C.sibling=I,C=I);return A&&Pn(d,N),k}for(x=r(d,x);!I.done;N++,I=p.next())I=g(x,d,N,I.value,v),I!==null&&(e&&I.alternate!==null&&x.delete(I.key===null?N:I.key),c=i(I,c,N),C===null?k=I:C.sibling=I,C=I);return e&&x.forEach(function(gt){return n(d,gt)}),A&&Pn(d,N),k}function z(d,c,p,v){if(typeof p=="object"&&p!==null&&p.type===Hn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case mr:e:{for(var k=p.key,C=c;C!==null;){if(C.key===k){if(k=p.type,k===Hn){if(C.tag===7){t(d,C.sibling),c=o(C,p.props.children),c.return=d,d=c;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===nn&&eu(k)===C.type){t(d,C.sibling),c=o(C,p.props),c.ref=Ct(d,C,p),c.return=d,d=c;break e}t(d,C);break}else n(d,C);C=C.sibling}p.type===Hn?(c=On(p.props.children,d.mode,v,p.key),c.return=d,d=c):(v=Vr(p.type,p.key,p.props,null,d.mode,v),v.ref=Ct(d,c,p),v.return=d,d=v)}return l(d);case Vn:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(d,c.sibling),c=o(c,p.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=di(p,d.mode,v),c.return=d,d=c}return l(d);case nn:return C=p._init,z(d,c,C(p._payload),v)}if(zt(p))return w(d,c,p,v);if(wt(p))return y(d,c,p,v);_r(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(t(d,c.sibling),c=o(c,p),c.return=d,d=c):(t(d,c),c=ci(p,d.mode,v),c.return=d,d=c),l(d)):t(d,c)}return z}var st=Ys(!0),Gs=Ys(!1),sr={},He=kn(sr),qt=kn(sr),bt=kn(sr);function Rn(e){if(e===sr)throw Error(S(174));return e}function Ql(e,n){switch(F(bt,n),F(qt,e),F(He,sr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ni(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ni(n,e)}$(He),F(He,n)}function ct(){$(He),$(qt),$(bt)}function Xs(e){Rn(bt.current);var n=Rn(He.current),t=Ni(n,e.type);n!==t&&(F(qt,e),F(He,t))}function Kl(e){qt.current===e&&($(He),$(qt))}var V=kn(0);function io(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oi=[];function Yl(){for(var e=0;e<oi.length;e++)oi[e]._workInProgressVersionPrimary=null;oi.length=0}var Fr=be.ReactCurrentDispatcher,ii=be.ReactCurrentBatchConfig,Mn=0,H=null,J=null,ee=null,lo=!1,Dt=!1,er=0,tp=0;function ie(){throw Error(S(321))}function Gl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ue(e[t],n[t]))return!1;return!0}function Xl(e,n,t,r,o,i){if(Mn=i,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Fr.current=e===null||e.memoizedState===null?lp:ap,e=t(r,o),Dt){i=0;do{if(Dt=!1,er=0,25<=i)throw Error(S(301));i+=1,ee=J=null,n.updateQueue=null,Fr.current=up,e=t(r,o)}while(Dt)}if(Fr.current=ao,n=J!==null&&J.next!==null,Mn=0,ee=J=H=null,lo=!1,n)throw Error(S(300));return e}function Jl(){var e=er!==0;return er=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?H.memoizedState=ee=e:ee=ee.next=e,ee}function Re(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=ee===null?H.memoizedState:ee.next;if(n!==null)ee=n,J=e;else{if(e===null)throw Error(S(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?H.memoizedState=ee=e:ee=ee.next=e}return ee}function nr(e,n){return typeof n=="function"?n(e):n}function li(e){var n=Re(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=J,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,u=null,s=i;do{var f=s.lane;if((Mn&f)===f)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var h={lane:f,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=h,l=r):u=u.next=h,H.lanes|=f,Dn|=f}s=s.next}while(s!==null&&s!==i);u===null?l=r:u.next=a,Ue(r,n.memoizedState)||(he=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,H.lanes|=i,Dn|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ai(e){var n=Re(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ue(i,n.memoizedState)||(he=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Js(){}function Zs(e,n){var t=H,r=Re(),o=n(),i=!Ue(r.memoizedState,o);if(i&&(r.memoizedState=o,he=!0),r=r.queue,Zl(ec.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ee!==null&&ee.memoizedState.tag&1){if(t.flags|=2048,tr(9,bs.bind(null,t,r,o,n),void 0,null),ne===null)throw Error(S(349));Mn&30||qs(t,n,o)}return o}function qs(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function bs(e,n,t,r){n.value=t,n.getSnapshot=r,nc(n)&&tc(e)}function ec(e,n,t){return t(function(){nc(n)&&tc(e)})}function nc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ue(e,t)}catch{return!0}}function tc(e){var n=Ze(e,1);n!==null&&Fe(n,e,1,-1)}function nu(e){var n=$e();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},n.queue=e,e=e.dispatch=ip.bind(null,H,e),[n.memoizedState,e]}function tr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function rc(){return Re().memoizedState}function Ur(e,n,t,r){var o=$e();H.flags|=e,o.memoizedState=tr(1|n,t,void 0,r===void 0?null:r)}function Po(e,n,t,r){var o=Re();r=r===void 0?null:r;var i=void 0;if(J!==null){var l=J.memoizedState;if(i=l.destroy,r!==null&&Gl(r,l.deps)){o.memoizedState=tr(n,t,i,r);return}}H.flags|=e,o.memoizedState=tr(1|n,t,i,r)}function tu(e,n){return Ur(8390656,8,e,n)}function Zl(e,n){return Po(2048,8,e,n)}function oc(e,n){return Po(4,2,e,n)}function ic(e,n){return Po(4,4,e,n)}function lc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ac(e,n,t){return t=t!=null?t.concat([e]):null,Po(4,4,lc.bind(null,n,e),t)}function ql(){}function uc(e,n){var t=Re();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Gl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function sc(e,n){var t=Re();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Gl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function cc(e,n,t){return Mn&21?(Ue(t,n)||(t=ps(),H.lanes|=t,Dn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=t)}function rp(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=ii.transition;ii.transition={};try{e(!1),n()}finally{M=t,ii.transition=r}}function dc(){return Re().memoizedState}function op(e,n,t){var r=mn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},fc(e))pc(n,t);else if(t=Hs(e,n,t,r),t!==null){var o=ce();Fe(t,e,r,o),hc(t,n,r)}}function ip(e,n,t){var r=mn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(fc(e))pc(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,a=i(l,t);if(o.hasEagerState=!0,o.eagerState=a,Ue(a,l)){var u=n.interleaved;u===null?(o.next=o,Hl(n)):(o.next=u.next,u.next=o),n.interleaved=o;return}}catch{}finally{}t=Hs(e,n,o,r),t!==null&&(o=ce(),Fe(t,e,r,o),hc(t,n,r))}}function fc(e){var n=e.alternate;return e===H||n!==null&&n===H}function pc(e,n){Dt=lo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function hc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ll(e,t)}}var ao={readContext:Le,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},lp={readContext:Le,useCallback:function(e,n){return $e().memoizedState=[e,n===void 0?null:n],e},useContext:Le,useEffect:tu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ur(4194308,4,lc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ur(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ur(4,2,e,n)},useMemo:function(e,n){var t=$e();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=$e();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=op.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=$e();return e={current:e},n.memoizedState=e},useState:nu,useDebugValue:ql,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=nu(!1),n=e[0];return e=rp.bind(null,e[1]),$e().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,o=$e();if(A){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),ne===null)throw Error(S(349));Mn&30||qs(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,tu(ec.bind(null,r,i,e),[e]),r.flags|=2048,tr(9,bs.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=$e(),n=ne.identifierPrefix;if(A){var t=Ye,r=Ke;t=(r&~(1<<32-De(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=er++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=tp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ap={readContext:Le,useCallback:uc,useContext:Le,useEffect:Zl,useImperativeHandle:ac,useInsertionEffect:oc,useLayoutEffect:ic,useMemo:sc,useReducer:li,useRef:rc,useState:function(){return li(nr)},useDebugValue:ql,useDeferredValue:function(e){var n=Re();return cc(n,J.memoizedState,e)},useTransition:function(){var e=li(nr)[0],n=Re().memoizedState;return[e,n]},useMutableSource:Js,useSyncExternalStore:Zs,useId:dc,unstable_isNewReconciler:!1},up={readContext:Le,useCallback:uc,useContext:Le,useEffect:Zl,useImperativeHandle:ac,useInsertionEffect:oc,useLayoutEffect:ic,useMemo:sc,useReducer:ai,useRef:rc,useState:function(){return ai(nr)},useDebugValue:ql,useDeferredValue:function(e){var n=Re();return J===null?n.memoizedState=e:cc(n,J.memoizedState,e)},useTransition:function(){var e=ai(nr)[0],n=Re().memoizedState;return[e,n]},useMutableSource:Js,useSyncExternalStore:Zs,useId:dc,unstable_isNewReconciler:!1};function dt(e,n){try{var t="",r=n;do t+=Md(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function ui(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ji(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var sp=typeof WeakMap=="function"?WeakMap:Map;function mc(e,n,t){t=Ge(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){so||(so=!0,ll=r),Ji(e,n)},t}function vc(e,n,t){t=Ge(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Ji(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ji(e,n),typeof r!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function ru(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new sp;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=xp.bind(null,e,n,t),n.then(e,e))}function ou(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function iu(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ge(-1,1),n.tag=2,pn(t,n,1))),t.lanes|=1),e)}var cp=be.ReactCurrentOwner,he=!1;function se(e,n,t,r){n.child=e===null?Gs(n,null,t,r):st(n,e.child,t,r)}function lu(e,n,t,r,o){t=t.render;var i=n.ref;return ot(n,o),r=Xl(e,n,t,r,i,o),t=Jl(),e!==null&&!he?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,qe(e,n,o)):(A&&t&&Fl(n),n.flags|=1,se(e,n,r,o),n.child)}function au(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!la(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,gc(e,n,i,r,o)):(e=Vr(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:Gt,t(l,r)&&e.ref===n.ref)return qe(e,n,o)}return n.flags|=1,e=vn(i,r),e.ref=n.ref,e.return=n,n.child=e}function gc(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(Gt(i,r)&&e.ref===n.ref)if(he=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(he=!0);else return n.lanes=e.lanes,qe(e,n,o)}return Zi(e,n,t,r,o)}function yc(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(bn,ye),ye|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,F(bn,ye),ye|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,F(bn,ye),ye|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,F(bn,ye),ye|=r;return se(e,n,o,t),n.child}function wc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Zi(e,n,t,r,o){var i=ve(t)?In:ue.current;return i=at(n,i),ot(n,o),t=Xl(e,n,t,r,i,o),r=Jl(),e!==null&&!he?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,qe(e,n,o)):(A&&r&&Fl(n),n.flags|=1,se(e,n,t,o),n.child)}function uu(e,n,t,r,o){if(ve(t)){var i=!0;br(n)}else i=!1;if(ot(n,o),n.stateNode===null)Br(e,n),Ks(n,t,r),Xi(n,t,r,o),r=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var u=l.context,s=t.contextType;typeof s=="object"&&s!==null?s=Le(s):(s=ve(t)?In:ue.current,s=at(n,s));var f=t.getDerivedStateFromProps,h=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==s)&&ba(n,l,r,s),tn=!1;var m=n.memoizedState;l.state=m,oo(n,r,l,o),u=n.memoizedState,a!==r||m!==u||me.current||tn?(typeof f=="function"&&(Gi(n,t,f,r),u=n.memoizedState),(a=tn||qa(n,t,a,r,m,u,s))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),l.props=r,l.state=u,l.context=s,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,Ws(e,n),a=n.memoizedProps,s=n.type===n.elementType?a:Ie(n.type,a),l.props=s,h=n.pendingProps,m=l.context,u=t.contextType,typeof u=="object"&&u!==null?u=Le(u):(u=ve(t)?In:ue.current,u=at(n,u));var g=t.getDerivedStateFromProps;(f=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||m!==u)&&ba(n,l,r,u),tn=!1,m=n.memoizedState,l.state=m,oo(n,r,l,o);var w=n.memoizedState;a!==h||m!==w||me.current||tn?(typeof g=="function"&&(Gi(n,t,g,r),w=n.memoizedState),(s=tn||qa(n,t,s,r,m,w,u)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,u)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),l.props=r,l.state=w,l.context=u,r=s):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return qi(e,n,t,r,i,o)}function qi(e,n,t,r,o,i){wc(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return o&&Ya(n,t,!1),qe(e,n,i);r=n.stateNode,cp.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=st(n,e.child,null,i),n.child=st(n,null,a,i)):se(e,n,a,i),n.memoizedState=r.state,o&&Ya(n,t,!0),n.child}function Sc(e){var n=e.stateNode;n.pendingContext?Ka(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ka(e,n.context,!1),Ql(e,n.containerInfo)}function su(e,n,t,r,o){return ut(),Bl(o),n.flags|=256,se(e,n,t,r),n.child}var bi={dehydrated:null,treeContext:null,retryLane:0};function el(e){return{baseLanes:e,cachePool:null,transitions:null}}function kc(e,n,t){var r=n.pendingProps,o=V.current,i=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),F(V,o&1),e===null)return Ki(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,i?(r=n.mode,i=n.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=zo(l,r,0,null),e=On(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=el(t),n.memoizedState=bi,e):bl(n,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return dp(e,n,l,r,a,o,t);if(i){i=r.fallback,l=n.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=vn(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=vn(a,i):(i=On(i,l,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,l=e.child.memoizedState,l=l===null?el(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=bi,r}return i=e.child,e=i.sibling,r=vn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function bl(e,n){return n=zo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Nr(e,n,t,r){return r!==null&&Bl(r),st(n,e.child,null,t),e=bl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function dp(e,n,t,r,o,i,l){if(t)return n.flags&256?(n.flags&=-257,r=ui(Error(S(422))),Nr(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=zo({mode:"visible",children:r.children},o,0,null),i=On(i,o,l,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&st(n,e.child,null,l),n.child.memoizedState=el(l),n.memoizedState=bi,i);if(!(n.mode&1))return Nr(e,n,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(S(419)),r=ui(i,r,void 0),Nr(e,n,l,r)}if(a=(l&e.childLanes)!==0,he||a){if(r=ne,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ze(e,o),Fe(r,e,o,-1))}return ia(),r=ui(Error(S(421))),Nr(e,n,l,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Cp.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,we=fn(o.nextSibling),Se=n,A=!0,Me=null,e!==null&&(Pe[_e++]=Ke,Pe[_e++]=Ye,Pe[_e++]=jn,Ke=e.id,Ye=e.overflow,jn=n),n=bl(n,r.children),n.flags|=4096,n)}function cu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Yi(e.return,n,t)}function si(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Ec(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(se(e,n,r.children,t),r=V.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cu(e,t,n);else if(e.tag===19)cu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(V,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&io(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),si(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&io(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}si(n,!0,t,null,i);break;case"together":si(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Br(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function qe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Dn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=vn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=vn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function fp(e,n,t){switch(n.tag){case 3:Sc(n),ut();break;case 5:Xs(n);break;case 1:ve(n.type)&&br(n);break;case 4:Ql(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;F(to,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(F(V,V.current&1),n.flags|=128,null):t&n.child.childLanes?kc(e,n,t):(F(V,V.current&1),e=qe(e,n,t),e!==null?e.sibling:null);F(V,V.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ec(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),F(V,V.current),r)break;return null;case 22:case 23:return n.lanes=0,yc(e,n,t)}return qe(e,n,t)}var xc,nl,Cc,Pc;xc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};nl=function(){};Cc=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Rn(He.current);var i=null;switch(t){case"input":o=xi(e,o),r=xi(e,r),i=[];break;case"select":o=W({},o,{value:void 0}),r=W({},r,{value:void 0}),i=[];break;case"textarea":o=_i(e,o),r=_i(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zr)}zi(t,r);var l;t=null;for(s in o)if(!r.hasOwnProperty(s)&&o.hasOwnProperty(s)&&o[s]!=null)if(s==="style"){var a=o[s];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(At.hasOwnProperty(s)?i||(i=[]):(i=i||[]).push(s,null));for(s in r){var u=r[s];if(a=o!=null?o[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(t||(t={}),t[l]=u[l])}else t||(i||(i=[]),i.push(s,t)),t=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(At.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&B("scroll",e),i||a===u||(i=[])):(i=i||[]).push(s,u))}t&&(i=i||[]).push("style",t);var s=i;(n.updateQueue=s)&&(n.flags|=4)}};Pc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Pt(e,n){if(!A)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function pp(e,n,t){var r=n.pendingProps;switch(Ul(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(n),null;case 1:return ve(n.type)&&qr(),le(n),null;case 3:return r=n.stateNode,ct(),$(me),$(ue),Yl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Me!==null&&(sl(Me),Me=null))),nl(e,n),le(n),null;case 5:Kl(n);var o=Rn(bt.current);if(t=n.type,e!==null&&n.stateNode!=null)Cc(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return le(n),null}if(e=Rn(He.current),Pr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Ae]=n,r[Zt]=i,e=(n.mode&1)!==0,t){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<Rt.length;o++)B(Rt[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":wa(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":ka(r,i),B("invalid",r)}zi(t,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Cr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Cr(r.textContent,a,e),o=["children",""+a]):At.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&B("scroll",r)}switch(t){case"input":vr(r),Sa(r,i,!0);break;case"textarea":vr(r),Ea(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zr)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[Ae]=n,e[Zt]=r,xc(e,n,!1,!1),n.stateNode=e;e:{switch(l=Li(t,r),t){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<Rt.length;o++)B(Rt[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":wa(e,r),o=xi(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=W({},r,{value:void 0}),B("invalid",e);break;case"textarea":ka(e,r),o=_i(e,r),B("invalid",e);break;default:o=r}zi(t,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?ns(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&bu(e,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Vt(e,u):typeof u=="number"&&Vt(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(At.hasOwnProperty(i)?u!=null&&i==="onScroll"&&B("scroll",e):u!=null&&xl(e,i,u,l))}switch(t){case"input":vr(e),Sa(e,r,!1);break;case"textarea":vr(e),Ea(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?et(e,!!r.multiple,i,!1):r.defaultValue!=null&&et(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Zr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return le(n),null;case 6:if(e&&n.stateNode!=null)Pc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=Rn(bt.current),Rn(He.current),Pr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ae]=n,(i=r.nodeValue!==t)&&(e=Se,e!==null))switch(e.tag){case 3:Cr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ae]=n,n.stateNode=r}return le(n),null;case 13:if($(V),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&we!==null&&n.mode&1&&!(n.flags&128))Vs(),ut(),n.flags|=98560,i=!1;else if(i=Pr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[Ae]=n}else ut(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;le(n),i=!1}else Me!==null&&(sl(Me),Me=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||V.current&1?Z===0&&(Z=3):ia())),n.updateQueue!==null&&(n.flags|=4),le(n),null);case 4:return ct(),nl(e,n),e===null&&Xt(n.stateNode.containerInfo),le(n),null;case 10:return Vl(n.type._context),le(n),null;case 17:return ve(n.type)&&qr(),le(n),null;case 19:if($(V),i=n.memoizedState,i===null)return le(n),null;if(r=(n.flags&128)!==0,l=i.rendering,l===null)if(r)Pt(i,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=io(e),l!==null){for(n.flags|=128,Pt(i,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return F(V,V.current&1|2),n.child}e=e.sibling}i.tail!==null&&G()>ft&&(n.flags|=128,r=!0,Pt(i,!1),n.lanes=4194304)}else{if(!r)if(e=io(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Pt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!A)return le(n),null}else 2*G()-i.renderingStartTime>ft&&t!==1073741824&&(n.flags|=128,r=!0,Pt(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=G(),n.sibling=null,t=V.current,F(V,r?t&1|2:t&1),n):(le(n),null);case 22:case 23:return oa(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ye&1073741824&&(le(n),n.subtreeFlags&6&&(n.flags|=8192)):le(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function hp(e,n){switch(Ul(n),n.tag){case 1:return ve(n.type)&&qr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ct(),$(me),$(ue),Yl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Kl(n),null;case 13:if($(V),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));ut()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(V),null;case 4:return ct(),null;case 10:return Vl(n.type._context),null;case 22:case 23:return oa(),null;case 24:return null;default:return null}}var zr=!1,ae=!1,mp=typeof WeakSet=="function"?WeakSet:Set,P=null;function qn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Q(e,n,r)}else t.current=null}function tl(e,n,t){try{t()}catch(r){Q(e,n,r)}}var du=!1;function vp(e,n){if(Bi=Gr,e=Ls(),Dl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,a=-1,u=-1,s=0,f=0,h=e,m=null;n:for(;;){for(var g;h!==t||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(u=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===e)break n;if(m===t&&++s===o&&(a=l),m===i&&++f===r&&(u=l),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for($i={focusedElem:e,selectionRange:t},Gr=!1,P=n;P!==null;)if(n=P,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,P=e;else for(;P!==null;){n=P;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,z=w.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?y:Ie(n.type,y),z);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){Q(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,P=e;break}P=n.return}return w=du,du=!1,w}function Ft(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&tl(n,t,i)}o=o.next}while(o!==r)}}function _o(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function rl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function _c(e){var n=e.alternate;n!==null&&(e.alternate=null,_c(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ae],delete n[Zt],delete n[Hi],delete n[qf],delete n[bf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nc(e){return e.tag===5||e.tag===3||e.tag===4}function fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ol(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Zr));else if(r!==4&&(e=e.child,e!==null))for(ol(e,n,t),e=e.sibling;e!==null;)ol(e,n,t),e=e.sibling}function il(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(il(e,n,t),e=e.sibling;e!==null;)il(e,n,t),e=e.sibling}var te=null,je=!1;function en(e,n,t){for(t=t.child;t!==null;)zc(e,n,t),t=t.sibling}function zc(e,n,t){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(yo,t)}catch{}switch(t.tag){case 5:ae||qn(t,n);case 6:var r=te,o=je;te=null,en(e,n,t),te=r,je=o,te!==null&&(je?(e=te,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):te.removeChild(t.stateNode));break;case 18:te!==null&&(je?(e=te,t=t.stateNode,e.nodeType===8?ti(e.parentNode,t):e.nodeType===1&&ti(e,t),Kt(e)):ti(te,t.stateNode));break;case 4:r=te,o=je,te=t.stateNode.containerInfo,je=!0,en(e,n,t),te=r,je=o;break;case 0:case 11:case 14:case 15:if(!ae&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&tl(t,n,l),o=o.next}while(o!==r)}en(e,n,t);break;case 1:if(!ae&&(qn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){Q(t,n,a)}en(e,n,t);break;case 21:en(e,n,t);break;case 22:t.mode&1?(ae=(r=ae)||t.memoizedState!==null,en(e,n,t),ae=r):en(e,n,t);break;default:en(e,n,t)}}function pu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new mp),n.forEach(function(r){var o=Pp.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Oe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,je=!1;break e;case 3:te=a.stateNode.containerInfo,je=!0;break e;case 4:te=a.stateNode.containerInfo,je=!0;break e}a=a.return}if(te===null)throw Error(S(160));zc(i,l,o),te=null,je=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(s){Q(o,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Lc(n,e),n=n.sibling}function Lc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(n,e),Be(e),r&4){try{Ft(3,e,e.return),_o(3,e)}catch(y){Q(e,e.return,y)}try{Ft(5,e,e.return)}catch(y){Q(e,e.return,y)}}break;case 1:Oe(n,e),Be(e),r&512&&t!==null&&qn(t,t.return);break;case 5:if(Oe(n,e),Be(e),r&512&&t!==null&&qn(t,t.return),e.flags&32){var o=e.stateNode;try{Vt(o,"")}catch(y){Q(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ju(o,i),Li(a,l);var s=Li(a,i);for(l=0;l<u.length;l+=2){var f=u[l],h=u[l+1];f==="style"?ns(o,h):f==="dangerouslySetInnerHTML"?bu(o,h):f==="children"?Vt(o,h):xl(o,f,h,s)}switch(a){case"input":Ci(o,i);break;case"textarea":Zu(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?et(o,!!i.multiple,g,!1):m!==!!i.multiple&&(i.defaultValue!=null?et(o,!!i.multiple,i.defaultValue,!0):et(o,!!i.multiple,i.multiple?[]:"",!1))}o[Zt]=i}catch(y){Q(e,e.return,y)}}break;case 6:if(Oe(n,e),Be(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){Q(e,e.return,y)}}break;case 3:if(Oe(n,e),Be(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Kt(n.containerInfo)}catch(y){Q(e,e.return,y)}break;case 4:Oe(n,e),Be(e);break;case 13:Oe(n,e),Be(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ta=G())),r&4&&pu(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(ae=(s=ae)||f,Oe(n,e),ae=s):Oe(n,e),Be(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!f&&e.mode&1)for(P=e,f=e.child;f!==null;){for(h=P=f;P!==null;){switch(m=P,g=m.child,m.tag){case 0:case 11:case 14:case 15:Ft(4,m,m.return);break;case 1:qn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(y){Q(r,t,y)}}break;case 5:qn(m,m.return);break;case 22:if(m.memoizedState!==null){mu(h);continue}}g!==null?(g.return=m,P=g):mu(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{o=h.stateNode,s?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,u=h.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=es("display",l))}catch(y){Q(e,e.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=s?"":h.memoizedProps}catch(y){Q(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Oe(n,e),Be(e),r&4&&pu(e);break;case 21:break;default:Oe(n,e),Be(e)}}function Be(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Nc(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Vt(o,""),r.flags&=-33);var i=fu(e);il(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=fu(e);ol(e,a,l);break;default:throw Error(S(161))}}catch(u){Q(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function gp(e,n,t){P=e,Rc(e)}function Rc(e,n,t){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||zr;if(!l){var a=o.alternate,u=a!==null&&a.memoizedState!==null||ae;a=zr;var s=ae;if(zr=l,(ae=u)&&!s)for(P=o;P!==null;)l=P,u=l.child,l.tag===22&&l.memoizedState!==null?vu(o):u!==null?(u.return=l,P=u):vu(o);for(;i!==null;)P=i,Rc(i),i=i.sibling;P=o,zr=a,ae=s}hu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):hu(e)}}function hu(e){for(;P!==null;){var n=P;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ae||_o(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ae)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:Ie(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Za(n,i,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Za(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var f=s.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Kt(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ae||n.flags&512&&rl(n)}catch(m){Q(n,n.return,m)}}if(n===e){P=null;break}if(t=n.sibling,t!==null){t.return=n.return,P=t;break}P=n.return}}function mu(e){for(;P!==null;){var n=P;if(n===e){P=null;break}var t=n.sibling;if(t!==null){t.return=n.return,P=t;break}P=n.return}}function vu(e){for(;P!==null;){var n=P;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{_o(4,n)}catch(u){Q(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(u){Q(n,o,u)}}var i=n.return;try{rl(n)}catch(u){Q(n,i,u)}break;case 5:var l=n.return;try{rl(n)}catch(u){Q(n,l,u)}}}catch(u){Q(n,n.return,u)}if(n===e){P=null;break}var a=n.sibling;if(a!==null){a.return=n.return,P=a;break}P=n.return}}var yp=Math.ceil,uo=be.ReactCurrentDispatcher,ea=be.ReactCurrentOwner,ze=be.ReactCurrentBatchConfig,j=0,ne=null,X=null,re=0,ye=0,bn=kn(0),Z=0,rr=null,Dn=0,No=0,na=0,Ut=null,pe=null,ta=0,ft=1/0,We=null,so=!1,ll=null,hn=null,Lr=!1,an=null,co=0,Bt=0,al=null,$r=-1,Ar=0;function ce(){return j&6?G():$r!==-1?$r:$r=G()}function mn(e){return e.mode&1?j&2&&re!==0?re&-re:np.transition!==null?(Ar===0&&(Ar=ps()),Ar):(e=M,e!==0||(e=window.event,e=e===void 0?16:Ss(e.type)),e):1}function Fe(e,n,t,r){if(50<Bt)throw Bt=0,al=null,Error(S(185));lr(e,t,r),(!(j&2)||e!==ne)&&(e===ne&&(!(j&2)&&(No|=t),Z===4&&on(e,re)),ge(e,r),t===1&&j===0&&!(n.mode&1)&&(ft=G()+500,xo&&En()))}function ge(e,n){var t=e.callbackNode;ef(e,n);var r=Yr(e,e===ne?re:0);if(r===0)t!==null&&Pa(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Pa(t),n===1)e.tag===0?ep(gu.bind(null,e)):Bs(gu.bind(null,e)),Jf(function(){!(j&6)&&En()}),t=null;else{switch(hs(r)){case 1:t=zl;break;case 4:t=ds;break;case 16:t=Kr;break;case 536870912:t=fs;break;default:t=Kr}t=Uc(t,Tc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Tc(e,n){if($r=-1,Ar=0,j&6)throw Error(S(327));var t=e.callbackNode;if(it()&&e.callbackNode!==t)return null;var r=Yr(e,e===ne?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=fo(e,r);else{n=r;var o=j;j|=2;var i=Ic();(ne!==e||re!==n)&&(We=null,ft=G()+500,Tn(e,n));do try{kp();break}catch(a){Oc(e,a)}while(1);Al(),uo.current=i,j=o,X!==null?n=0:(ne=null,re=0,n=Z)}if(n!==0){if(n===2&&(o=ji(e),o!==0&&(r=o,n=ul(e,o))),n===1)throw t=rr,Tn(e,0),on(e,r),ge(e,G()),t;if(n===6)on(e,r);else{if(o=e.current.alternate,!(r&30)&&!wp(o)&&(n=fo(e,r),n===2&&(i=ji(e),i!==0&&(r=i,n=ul(e,i))),n===1))throw t=rr,Tn(e,0),on(e,r),ge(e,G()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:_n(e,pe,We);break;case 3:if(on(e,r),(r&130023424)===r&&(n=ta+500-G(),10<n)){if(Yr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Vi(_n.bind(null,e,pe,We),n);break}_n(e,pe,We);break;case 4:if(on(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var l=31-De(r);i=1<<l,l=n[l],l>o&&(o=l),r&=~i}if(r=o,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yp(r/1960))-r,10<r){e.timeoutHandle=Vi(_n.bind(null,e,pe,We),r);break}_n(e,pe,We);break;case 5:_n(e,pe,We);break;default:throw Error(S(329))}}}return ge(e,G()),e.callbackNode===t?Tc.bind(null,e):null}function ul(e,n){var t=Ut;return e.current.memoizedState.isDehydrated&&(Tn(e,n).flags|=256),e=fo(e,n),e!==2&&(n=pe,pe=t,n!==null&&sl(n)),e}function sl(e){pe===null?pe=e:pe.push.apply(pe,e)}function wp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!Ue(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function on(e,n){for(n&=~na,n&=~No,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-De(n),r=1<<t;e[t]=-1,n&=~r}}function gu(e){if(j&6)throw Error(S(327));it();var n=Yr(e,0);if(!(n&1))return ge(e,G()),null;var t=fo(e,n);if(e.tag!==0&&t===2){var r=ji(e);r!==0&&(n=r,t=ul(e,r))}if(t===1)throw t=rr,Tn(e,0),on(e,n),ge(e,G()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,_n(e,pe,We),ge(e,G()),null}function ra(e,n){var t=j;j|=1;try{return e(n)}finally{j=t,j===0&&(ft=G()+500,xo&&En())}}function Fn(e){an!==null&&an.tag===0&&!(j&6)&&it();var n=j;j|=1;var t=ze.transition,r=M;try{if(ze.transition=null,M=1,e)return e()}finally{M=r,ze.transition=t,j=n,!(j&6)&&En()}}function oa(){ye=bn.current,$(bn)}function Tn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Xf(t)),X!==null)for(t=X.return;t!==null;){var r=t;switch(Ul(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qr();break;case 3:ct(),$(me),$(ue),Yl();break;case 5:Kl(r);break;case 4:ct();break;case 13:$(V);break;case 19:$(V);break;case 10:Vl(r.type._context);break;case 22:case 23:oa()}t=t.return}if(ne=e,X=e=vn(e.current,null),re=ye=n,Z=0,rr=null,na=No=Dn=0,pe=Ut=null,Ln!==null){for(n=0;n<Ln.length;n++)if(t=Ln[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}t.pending=r}Ln=null}return e}function Oc(e,n){do{var t=X;try{if(Al(),Fr.current=ao,lo){for(var r=H.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}lo=!1}if(Mn=0,ee=J=H=null,Dt=!1,er=0,ea.current=null,t===null||t.return===null){Z=1,rr=n,X=null;break}e:{var i=e,l=t.return,a=t,u=n;if(n=re,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=ou(l);if(g!==null){g.flags&=-257,iu(g,l,a,i,n),g.mode&1&&ru(i,s,n),n=g,u=s;var w=n.updateQueue;if(w===null){var y=new Set;y.add(u),n.updateQueue=y}else w.add(u);break e}else{if(!(n&1)){ru(i,s,n),ia();break e}u=Error(S(426))}}else if(A&&a.mode&1){var z=ou(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),iu(z,l,a,i,n),Bl(dt(u,a));break e}}i=u=dt(u,a),Z!==4&&(Z=2),Ut===null?Ut=[i]:Ut.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=mc(i,u,n);Ja(i,d);break e;case 1:a=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(hn===null||!hn.has(p)))){i.flags|=65536,n&=-n,i.lanes|=n;var v=vc(i,a,n);Ja(i,v);break e}}i=i.return}while(i!==null)}Mc(t)}catch(k){n=k,X===t&&t!==null&&(X=t=t.return);continue}break}while(1)}function Ic(){var e=uo.current;return uo.current=ao,e===null?ao:e}function ia(){(Z===0||Z===3||Z===2)&&(Z=4),ne===null||!(Dn&268435455)&&!(No&268435455)||on(ne,re)}function fo(e,n){var t=j;j|=2;var r=Ic();(ne!==e||re!==n)&&(We=null,Tn(e,n));do try{Sp();break}catch(o){Oc(e,o)}while(1);if(Al(),j=t,uo.current=r,X!==null)throw Error(S(261));return ne=null,re=0,Z}function Sp(){for(;X!==null;)jc(X)}function kp(){for(;X!==null&&!Qd();)jc(X)}function jc(e){var n=Fc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,n===null?Mc(e):X=n,ea.current=null}function Mc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=hp(t,n),t!==null){t.flags&=32767,X=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,X=null;return}}else if(t=pp(t,n,ye),t!==null){X=t;return}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);Z===0&&(Z=5)}function _n(e,n,t){var r=M,o=ze.transition;try{ze.transition=null,M=1,Ep(e,n,t,r)}finally{ze.transition=o,M=r}return null}function Ep(e,n,t,r){do it();while(an!==null);if(j&6)throw Error(S(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(nf(e,i),e===ne&&(X=ne=null,re=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Lr||(Lr=!0,Uc(Kr,function(){return it(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=ze.transition,ze.transition=null;var l=M;M=1;var a=j;j|=4,ea.current=null,vp(e,t),Lc(t,e),Vf($i),Gr=!!Bi,$i=Bi=null,e.current=t,gp(t),Kd(),j=a,M=l,ze.transition=i}else e.current=t;if(Lr&&(Lr=!1,an=e,co=o),i=e.pendingLanes,i===0&&(hn=null),Xd(t.stateNode),ge(e,G()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(so)throw so=!1,e=ll,ll=null,e;return co&1&&e.tag!==0&&it(),i=e.pendingLanes,i&1?e===al?Bt++:(Bt=0,al=e):Bt=0,En(),null}function it(){if(an!==null){var e=hs(co),n=ze.transition,t=M;try{if(ze.transition=null,M=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,co=0,j&6)throw Error(S(331));var o=j;for(j|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(P=s;P!==null;){var f=P;switch(f.tag){case 0:case 11:case 15:Ft(8,f,i)}var h=f.child;if(h!==null)h.return=f,P=h;else for(;P!==null;){f=P;var m=f.sibling,g=f.return;if(_c(f),f===s){P=null;break}if(m!==null){m.return=g,P=m;break}P=g}}}var w=i.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var z=y.sibling;y.sibling=null,y=z}while(y!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ft(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,P=d;break e}P=i.return}}var c=e.current;for(P=c;P!==null;){l=P;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,P=p;else e:for(l=c;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_o(9,a)}}catch(k){Q(a,a.return,k)}if(a===l){P=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,P=v;break e}P=a.return}}if(j=o,En(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(yo,e)}catch{}r=!0}return r}finally{M=t,ze.transition=n}}return!1}function yu(e,n,t){n=dt(t,n),n=mc(e,n,1),e=pn(e,n,1),n=ce(),e!==null&&(lr(e,1,n),ge(e,n))}function Q(e,n,t){if(e.tag===3)yu(e,e,t);else for(;n!==null;){if(n.tag===3){yu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){e=dt(t,e),e=vc(n,e,1),n=pn(n,e,1),e=ce(),n!==null&&(lr(n,1,e),ge(n,e));break}}n=n.return}}function xp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ce(),e.pingedLanes|=e.suspendedLanes&t,ne===e&&(re&t)===t&&(Z===4||Z===3&&(re&130023424)===re&&500>G()-ta?Tn(e,0):na|=t),ge(e,n)}function Dc(e,n){n===0&&(e.mode&1?(n=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):n=1);var t=ce();e=Ze(e,n),e!==null&&(lr(e,n,t),ge(e,t))}function Cp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Dc(e,t)}function Pp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),Dc(e,t)}var Fc;Fc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)he=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return he=!1,fp(e,n,t);he=!!(e.flags&131072)}else he=!1,A&&n.flags&1048576&&$s(n,no,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Br(e,n),e=n.pendingProps;var o=at(n,ue.current);ot(n,t),o=Xl(null,n,r,e,o,t);var i=Jl();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ve(r)?(i=!0,br(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Wl(n),o.updater=Co,n.stateNode=o,o._reactInternals=n,Xi(n,r,e,t),n=qi(null,n,r,!0,i,t)):(n.tag=0,A&&i&&Fl(n),se(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Br(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Np(r),e=Ie(r,e),o){case 0:n=Zi(null,n,r,e,t);break e;case 1:n=uu(null,n,r,e,t);break e;case 11:n=lu(null,n,r,e,t);break e;case 14:n=au(null,n,r,Ie(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ie(r,o),Zi(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ie(r,o),uu(e,n,r,o,t);case 3:e:{if(Sc(n),e===null)throw Error(S(387));r=n.pendingProps,i=n.memoizedState,o=i.element,Ws(e,n),oo(n,r,null,t);var l=n.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=dt(Error(S(423)),n),n=su(e,n,r,t,o);break e}else if(r!==o){o=dt(Error(S(424)),n),n=su(e,n,r,t,o);break e}else for(we=fn(n.stateNode.containerInfo.firstChild),Se=n,A=!0,Me=null,t=Gs(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ut(),r===o){n=qe(e,n,t);break e}se(e,n,r,t)}n=n.child}return n;case 5:return Xs(n),e===null&&Ki(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ai(r,o)?l=null:i!==null&&Ai(r,i)&&(n.flags|=32),wc(e,n),se(e,n,l,t),n.child;case 6:return e===null&&Ki(n),null;case 13:return kc(e,n,t);case 4:return Ql(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=st(n,null,r,t):se(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ie(r,o),lu(e,n,r,o,t);case 7:return se(e,n,n.pendingProps,t),n.child;case 8:return se(e,n,n.pendingProps.children,t),n.child;case 12:return se(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,l=o.value,F(to,r._currentValue),r._currentValue=l,i!==null)if(Ue(i.value,l)){if(i.children===o.children&&!me.current){n=qe(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ge(-1,t&-t),u.tag=2;var s=i.updateQueue;if(s!==null){s=s.shared;var f=s.pending;f===null?u.next=u:(u.next=f.next,f.next=u),s.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Yi(i.return,t,n),a.lanes|=t;break}u=u.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Yi(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}se(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,ot(n,t),o=Le(o),r=r(o),n.flags|=1,se(e,n,r,t),n.child;case 14:return r=n.type,o=Ie(r,n.pendingProps),o=Ie(r.type,o),au(e,n,r,o,t);case 15:return gc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ie(r,o),Br(e,n),n.tag=1,ve(r)?(e=!0,br(n)):e=!1,ot(n,t),Ks(n,r,o),Xi(n,r,o,t),qi(null,n,r,!0,e,t);case 19:return Ec(e,n,t);case 22:return yc(e,n,t)}throw Error(S(156,n.tag))};function Uc(e,n){return cs(e,n)}function _p(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,n,t,r){return new _p(e,n,t,r)}function la(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Np(e){if(typeof e=="function")return la(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pl)return 11;if(e===_l)return 14}return 2}function vn(e,n){var t=e.alternate;return t===null?(t=Ne(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Vr(e,n,t,r,o,i){var l=2;if(r=e,typeof e=="function")la(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Hn:return On(t.children,o,i,n);case Cl:l=8,o|=8;break;case wi:return e=Ne(12,t,n,o|2),e.elementType=wi,e.lanes=i,e;case Si:return e=Ne(13,t,n,o),e.elementType=Si,e.lanes=i,e;case ki:return e=Ne(19,t,n,o),e.elementType=ki,e.lanes=i,e;case Yu:return zo(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qu:l=10;break e;case Ku:l=9;break e;case Pl:l=11;break e;case _l:l=14;break e;case nn:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=Ne(l,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function On(e,n,t,r){return e=Ne(7,e,r,n),e.lanes=t,e}function zo(e,n,t,r){return e=Ne(22,e,r,n),e.elementType=Yu,e.lanes=t,e.stateNode={isHidden:!1},e}function ci(e,n,t){return e=Ne(6,e,null,n),e.lanes=t,e}function di(e,n,t){return n=Ne(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function zp(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qo(0),this.expirationTimes=Qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function aa(e,n,t,r,o,i,l,a,u){return e=new zp(e,n,t,a,u),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ne(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wl(i),e}function Lp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Bc(e){if(!e)return wn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ve(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(ve(t))return Us(e,t,n)}return n}function $c(e,n,t,r,o,i,l,a,u){return e=aa(t,r,!0,e,o,i,l,a,u),e.context=Bc(null),t=e.current,r=ce(),o=mn(t),i=Ge(r,o),i.callback=n??null,pn(t,i,o),e.current.lanes=o,lr(e,o,r),ge(e,r),e}function Lo(e,n,t,r){var o=n.current,i=ce(),l=mn(o);return t=Bc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ge(i,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=pn(o,n,l),e!==null&&(Fe(e,o,l,i),Dr(e,o,l)),l}function po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ua(e,n){wu(e,n),(e=e.alternate)&&wu(e,n)}function Rp(){return null}var Ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function sa(e){this._internalRoot=e}Ro.prototype.render=sa.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));Lo(e,n,null,null)};Ro.prototype.unmount=sa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Fn(function(){Lo(null,e,null,null)}),n[Je]=null}};function Ro(e){this._internalRoot=e}Ro.prototype.unstable_scheduleHydration=function(e){if(e){var n=gs();e={blockedOn:null,target:e,priority:n};for(var t=0;t<rn.length&&n!==0&&n<rn[t].priority;t++);rn.splice(t,0,e),t===0&&ws(e)}};function ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Su(){}function Tp(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var s=po(l);i.call(s)}}var l=$c(n,r,e,0,null,!1,!1,"",Su);return e._reactRootContainer=l,e[Je]=l.current,Xt(e.nodeType===8?e.parentNode:e),Fn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var s=po(u);a.call(s)}}var u=aa(e,0,!1,null,null,!1,!1,"",Su);return e._reactRootContainer=u,e[Je]=u.current,Xt(e.nodeType===8?e.parentNode:e),Fn(function(){Lo(n,u,t,r)}),u}function Oo(e,n,t,r,o){var i=t._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var u=po(l);a.call(u)}}Lo(n,l,e,o)}else l=Tp(t,n,e,o,r);return po(l)}ms=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Lt(n.pendingLanes);t!==0&&(Ll(n,t|1),ge(n,G()),!(j&6)&&(ft=G()+500,En()))}break;case 13:Fn(function(){var r=Ze(e,1);if(r!==null){var o=ce();Fe(r,e,1,o)}}),ua(e,1)}};Rl=function(e){if(e.tag===13){var n=Ze(e,134217728);if(n!==null){var t=ce();Fe(n,e,134217728,t)}ua(e,134217728)}};vs=function(e){if(e.tag===13){var n=mn(e),t=Ze(e,n);if(t!==null){var r=ce();Fe(t,e,n,r)}ua(e,n)}};gs=function(){return M};ys=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};Ti=function(e,n,t){switch(n){case"input":if(Ci(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Eo(r);if(!o)throw Error(S(90));Xu(r),Ci(r,o)}}}break;case"textarea":Zu(e,t);break;case"select":n=t.value,n!=null&&et(e,!!t.multiple,n,!1)}};os=ra;is=Fn;var Op={usingClientEntryPoint:!1,Events:[ur,Yn,Eo,ts,rs,ra]},_t={findFiberByHostInstance:zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ip={bundleType:_t.bundleType,version:_t.version,rendererPackageName:_t.rendererPackageName,rendererConfig:_t.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=us(e),e===null?null:e.stateNode},findFiberByHostInstance:_t.findFiberByHostInstance||Rp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rr.isDisabled&&Rr.supportsFiber)try{yo=Rr.inject(Ip),Ve=Rr}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Op;Ee.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ca(n))throw Error(S(200));return Lp(e,n,null,t)};Ee.createRoot=function(e,n){if(!ca(e))throw Error(S(299));var t=!1,r="",o=Ac;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=aa(e,1,!1,null,null,t,!1,r,o),e[Je]=n.current,Xt(e.nodeType===8?e.parentNode:e),new sa(n)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=us(n),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Fn(e)};Ee.hydrate=function(e,n,t){if(!To(n))throw Error(S(200));return Oo(null,e,n,!0,t)};Ee.hydrateRoot=function(e,n,t){if(!ca(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",l=Ac;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=$c(n,null,e,1,t??null,o,!1,i,l),e[Je]=n.current,Xt(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Ro(n)};Ee.render=function(e,n,t){if(!To(n))throw Error(S(200));return Oo(null,e,n,!1,t)};Ee.unmountComponentAtNode=function(e){if(!To(e))throw Error(S(40));return e._reactRootContainer?(Fn(function(){Oo(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};Ee.unstable_batchedUpdates=ra;Ee.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!To(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Oo(e,n,t,!1,r)};Ee.version="18.2.0-next-9e3b772b8-20220608";(function(e){function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}n(),e.exports=Ee})(Ld);var ku=vi;mi.createRoot=ku.createRoot,mi.hydrateRoot=ku.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function or(){return or=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},or.apply(this,arguments)}var un;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(un||(un={}));const Eu="popstate";function jp(e){e===void 0&&(e={});function n(o,i){let{pathname:l="/",search:a="",hash:u=""}=$n(o.location.hash.substr(1));return cl("",{pathname:l,search:a,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(o,i){let l=o.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let u=o.location.href,s=u.indexOf("#");a=s===-1?u:u.slice(0,s)}return a+"#"+(typeof i=="string"?i:ho(i))}function r(o,i){Io(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Dp(n,t,r,e)}function q(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Io(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Mp(){return Math.random().toString(36).substr(2,8)}function xu(e,n){return{usr:e.state,key:e.key,idx:n}}function cl(e,n,t,r){return t===void 0&&(t=null),or({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?$n(n):n,{state:t,key:n&&n.key||r||Mp()})}function ho(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function $n(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Dp(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=un.Pop,u=null,s=f();s==null&&(s=0,l.replaceState(or({},l.state,{idx:s}),""));function f(){return(l.state||{idx:null}).idx}function h(){a=un.Pop;let z=f(),d=z==null?null:z-s;s=z,u&&u({action:a,location:y.location,delta:d})}function m(z,d){a=un.Push;let c=cl(y.location,z,d);t&&t(c,z),s=f()+1;let p=xu(c,s),v=y.createHref(c);try{l.pushState(p,"",v)}catch{o.location.assign(v)}i&&u&&u({action:a,location:y.location,delta:1})}function g(z,d){a=un.Replace;let c=cl(y.location,z,d);t&&t(c,z),s=f();let p=xu(c,s),v=y.createHref(c);l.replaceState(p,"",v),i&&u&&u({action:a,location:y.location,delta:0})}function w(z){let d=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof z=="string"?z:ho(z);return q(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let y={get action(){return a},get location(){return e(o,l)},listen(z){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Eu,h),u=z,()=>{o.removeEventListener(Eu,h),u=null}},createHref(z){return n(o,z)},createURL:w,encodeLocation(z){let d=w(z);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:m,replace:g,go(z){return l.go(z)}};return y}var Cu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Cu||(Cu={}));function Fp(e,n,t){t===void 0&&(t="/");let r=typeof n=="string"?$n(n):n,o=da(r.pathname||"/",t);if(o==null)return null;let i=Vc(e);Up(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=Yp(i[a],Jp(o));return l}function Vc(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(i,l,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};u.relativePath.startsWith("/")&&(q(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let s=gn([r,u.relativePath]),f=t.concat(u);i.children&&i.children.length>0&&(q(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),Vc(i.children,n,f,s)),!(i.path==null&&!i.index)&&n.push({path:s,score:Qp(s,i.index),routesMeta:f})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let u of Hc(i.path))o(i,l,u)}),n}function Hc(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Hc(r.join("/")),a=[];return a.push(...l.map(u=>u===""?i:[i,u].join("/"))),o&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Up(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Kp(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Bp=/^:\w+$/,$p=3,Ap=2,Vp=1,Hp=10,Wp=-2,Pu=e=>e==="*";function Qp(e,n){let t=e.split("/"),r=t.length;return t.some(Pu)&&(r+=Wp),n&&(r+=Ap),t.filter(o=>!Pu(o)).reduce((o,i)=>o+(Bp.test(i)?$p:i===""?Vp:Hp),r)}function Kp(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function Yp(e,n){let{routesMeta:t}=e,r={},o="/",i=[];for(let l=0;l<t.length;++l){let a=t[l],u=l===t.length-1,s=o==="/"?n:n.slice(o.length)||"/",f=Gp({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},s);if(!f)return null;Object.assign(r,f.params);let h=a.route;i.push({params:r,pathname:gn([o,f.pathname]),pathnameBase:eh(gn([o,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(o=gn([o,f.pathnameBase]))}return i}function Gp(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Xp(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((s,f,h)=>{if(f==="*"){let m=a[h]||"";l=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}return s[f]=Zp(a[h]||"",f),s},{}),pathname:i,pathnameBase:l,pattern:e}}function Xp(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Io(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function Jp(e){try{return decodeURI(e)}catch(n){return Io(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Zp(e,n){try{return decodeURIComponent(e)}catch(t){return Io(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),e}}function da(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function qp(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?$n(e):e;return{pathname:t?t.startsWith("/")?t:bp(t,n):n,search:nh(r),hash:th(o)}}function bp(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function fi(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wc(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Qc(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=$n(e):(o=or({},e),q(!o.pathname||!o.pathname.includes("?"),fi("?","pathname","search",o)),q(!o.pathname||!o.pathname.includes("#"),fi("#","pathname","hash",o)),q(!o.search||!o.search.includes("#"),fi("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(r||l==null)a=t;else{let h=n.length-1;if(l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),h-=1;o.pathname=m.join("/")}a=h>=0?n[h]:"/"}let u=qp(o,a),s=l&&l!=="/"&&l.endsWith("/"),f=(i||l===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(s||f)&&(u.pathname+="/"),u}const gn=e=>e.join("/").replace(/\/\/+/g,"/"),eh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),nh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,th=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function rh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}const ih=typeof Object.is=="function"?Object.is:oh,{useState:lh,useEffect:ah,useLayoutEffect:uh,useDebugValue:sh}=hi;function ch(e,n,t){const r=n(),[{inst:o},i]=lh({inst:{value:r,getSnapshot:n}});return uh(()=>{o.value=r,o.getSnapshot=n,pi(o)&&i({inst:o})},[e,r,n]),ah(()=>(pi(o)&&i({inst:o}),e(()=>{pi(o)&&i({inst:o})})),[e]),sh(r),r}function pi(e){const n=e.getSnapshot,t=e.value;try{const r=n();return!ih(t,r)}catch{return!0}}function dh(e,n,t){return n()}const fh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ph=!fh,hh=ph?dh:ch;"useSyncExternalStore"in hi&&(e=>e.useSyncExternalStore)(hi);const Kc=E.createContext(null),Yc=E.createContext(null),cr=E.createContext(null),jo=E.createContext(null),vt=E.createContext({outlet:null,matches:[]}),Gc=E.createContext(null);function dl(){return dl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},dl.apply(this,arguments)}function mh(e,n){let{relative:t}=n===void 0?{}:n;dr()||q(!1);let{basename:r,navigator:o}=E.useContext(cr),{hash:i,pathname:l,search:a}=Jc(e,{relative:t}),u=l;return r!=="/"&&(u=l==="/"?r:gn([r,l])),o.createHref({pathname:u,search:a,hash:i})}function dr(){return E.useContext(jo)!=null}function Mo(){return dr()||q(!1),E.useContext(jo).location}function Xc(){dr()||q(!1);let{basename:e,navigator:n}=E.useContext(cr),{matches:t}=E.useContext(vt),{pathname:r}=Mo(),o=JSON.stringify(Wc(t).map(a=>a.pathnameBase)),i=E.useRef(!1);return E.useEffect(()=>{i.current=!0}),E.useCallback(function(a,u){if(u===void 0&&(u={}),!i.current)return;if(typeof a=="number"){n.go(a);return}let s=Qc(a,JSON.parse(o),r,u.relative==="path");e!=="/"&&(s.pathname=s.pathname==="/"?e:gn([e,s.pathname])),(u.replace?n.replace:n.push)(s,u.state,u)},[e,n,o,r])}function Jc(e,n){let{relative:t}=n===void 0?{}:n,{matches:r}=E.useContext(vt),{pathname:o}=Mo(),i=JSON.stringify(Wc(r).map(l=>l.pathnameBase));return E.useMemo(()=>Qc(e,JSON.parse(i),o,t==="path"),[e,i,o,t])}function vh(e,n){dr()||q(!1);let{navigator:t}=E.useContext(cr),r=E.useContext(Yc),{matches:o}=E.useContext(vt),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let u=Mo(),s;if(n){var f;let y=typeof n=="string"?$n(n):n;a==="/"||(f=y.pathname)!=null&&f.startsWith(a)||q(!1),s=y}else s=u;let h=s.pathname||"/",m=a==="/"?h:h.slice(a.length)||"/",g=Fp(e,{pathname:m}),w=Sh(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:gn([a,t.encodeLocation?t.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:gn([a,t.encodeLocation?t.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,r||void 0);return n&&w?E.createElement(jo.Provider,{value:{location:dl({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:un.Pop}},w):w}function gh(){let e=Ch(),n=rh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},n),t?E.createElement("pre",{style:o},t):null,i)}class yh extends E.Component{constructor(n){super(n),this.state={location:n.location,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location?{error:n.error,location:n.location}:{error:n.error||t.error,location:t.location}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error?E.createElement(vt.Provider,{value:this.props.routeContext},E.createElement(Gc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wh(e){let{routeContext:n,match:t,children:r}=e,o=E.useContext(Kc);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(vt.Provider,{value:n},r)}function Sh(e,n,t){if(n===void 0&&(n=[]),e==null)if(t!=null&&t.errors)e=t.matches;else return null;let r=e,o=t==null?void 0:t.errors;if(o!=null){let i=r.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));i>=0||q(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,l,a)=>{let u=l.route.id?o==null?void 0:o[l.route.id]:null,s=null;t&&(l.route.ErrorBoundary?s=E.createElement(l.route.ErrorBoundary,null):l.route.errorElement?s=l.route.errorElement:s=E.createElement(gh,null));let f=n.concat(r.slice(0,a+1)),h=()=>{let m=i;return u?m=s:l.route.Component?m=E.createElement(l.route.Component,null):l.route.element&&(m=l.route.element),E.createElement(wh,{match:l,routeContext:{outlet:i,matches:f},children:m})};return t&&(l.route.ErrorBoundary||l.route.errorElement||a===0)?E.createElement(yh,{location:t.location,component:s,error:u,children:h(),routeContext:{outlet:null,matches:f}}):h()},null)}var _u;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(_u||(_u={}));var mo;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(mo||(mo={}));function kh(e){let n=E.useContext(Yc);return n||q(!1),n}function Eh(e){let n=E.useContext(vt);return n||q(!1),n}function xh(e){let n=Eh(),t=n.matches[n.matches.length-1];return t.route.id||q(!1),t.route.id}function Ch(){var e;let n=E.useContext(Gc),t=kh(mo.UseRouteError),r=xh(mo.UseRouteError);return n||((e=t.errors)==null?void 0:e[r])}function fl(e){q(!1)}function Ph(e){let{basename:n="/",children:t=null,location:r,navigationType:o=un.Pop,navigator:i,static:l=!1}=e;dr()&&q(!1);let a=n.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:a,navigator:i,static:l}),[a,i,l]);typeof r=="string"&&(r=$n(r));let{pathname:s="/",search:f="",hash:h="",state:m=null,key:g="default"}=r,w=E.useMemo(()=>{let y=da(s,a);return y==null?null:{location:{pathname:y,search:f,hash:h,state:m,key:g},navigationType:o}},[a,s,f,h,m,g,o]);return w==null?null:E.createElement(cr.Provider,{value:u},E.createElement(jo.Provider,{children:t,value:w}))}function _h(e){let{children:n,location:t}=e,r=E.useContext(Kc),o=r&&!n?r.router.routes:pl(n);return vh(o,t)}var Nu;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Nu||(Nu={}));new Promise(()=>{});function pl(e,n){n===void 0&&(n=[]);let t=[];return E.Children.forEach(e,(r,o)=>{if(!E.isValidElement(r))return;if(r.type===E.Fragment){t.push.apply(t,pl(r.props.children,n));return}r.type!==fl&&q(!1),!r.props.index||!r.props.children||q(!1);let i=[...n,o],l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=pl(r.props.children,i)),t.push(l)}),t}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hl(){return hl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},hl.apply(this,arguments)}function Nh(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function zh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Lh(e,n){return e.button===0&&(!n||n==="_self")&&!zh(e)}const Rh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Th(e){let{basename:n,children:t,window:r}=e,o=E.useRef();o.current==null&&(o.current=jp({window:r,v5Compat:!0}));let i=o.current,[l,a]=E.useState({action:i.action,location:i.location});return E.useLayoutEffect(()=>i.listen(a),[i]),E.createElement(Ph,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:i})}const Oh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ih=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Do=E.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:u,to:s,preventScrollReset:f}=n,h=Nh(n,Rh),{basename:m}=E.useContext(cr),g,w=!1;if(typeof s=="string"&&Ih.test(s)&&(g=s,Oh)){let c=new URL(window.location.href),p=s.startsWith("//")?new URL(c.protocol+s):new URL(s),v=da(p.pathname,m);p.origin===c.origin&&v!=null?s=v+p.search+p.hash:w=!0}let y=mh(s,{relative:o}),z=jh(s,{replace:l,state:a,target:u,preventScrollReset:f,relative:o});function d(c){r&&r(c),c.defaultPrevented||z(c)}return E.createElement("a",hl({},h,{href:g||y,onClick:w||i?r:d,ref:t,target:u}))});var zu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(zu||(zu={}));var Lu;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Lu||(Lu={}));function jh(e,n){let{target:t,replace:r,state:o,preventScrollReset:i,relative:l}=n===void 0?{}:n,a=Xc(),u=Mo(),s=Jc(e,{relative:l});return E.useCallback(f=>{if(Lh(f,t)){f.preventDefault();let h=r!==void 0?r:ho(u)===ho(s);a(e,{replace:h,state:o,preventScrollReset:i,relative:l})}},[u,a,s,r,o,t,e,i,l])}function Nn(e){return JSON.parse(JSON.stringify(e))}class Mh{constructor(){Ce(this,"isStart",!1);Ce(this,"db",null);Ce(this,"onError");Ce(this,"folio",0);Ce(this,"tablas",null);this.isStart=!1,this.db=null}init(n,t,r,o){return this.onError=o,new Promise((i,l)=>{let a=this,s=window.indexedDB.open(n,t);this.tablas=r,this.folio=Date.now(),s.onupgradeneeded=()=>{let f=s.result;if(r)for(const h in r)try{f.createObjectStore(h,{keyPath:r[h].id})}catch{console.log(`%cYa existe ${h}`,"color: red")}a.db=s.result,i(!0)},s.onsuccess=function(){a.db=s.result,a.isStart=!0,i(!0)},s.onerror=f=>{a.isStart||(a.isStart=!1),o&&o(f),l(!1)}})}getFolio(){return this.folio++,this.folio}copy(n){if(n)return JSON.parse(JSON.stringify(n))}post(n,t,r=!0){let o=this;return new Promise((i,l)=>{if(!o.db)l("Error: no init indexedDB");else try{let u=o.db.transaction(n,"readwrite"),s=u.objectStore(n),f=t;r&&(f[this.tablas[n].id]=o.getFolio());let h=s.put(f);h.onsuccess=function(){let m=t;i(o.copy(m))},h.onerror=function(m){o.onError&&o.onError({type:"POST",error:m}),l("Ocurrio un error")},u.oncomplete=function(){}}catch{setTimeout(()=>{o.post(n,t).then(u=>{i(u)}).catch(u=>{l(u)})},1e3)}})}get(n,t){let r=this;return new Promise((o,i)=>{if(!r.db)i("Error: no init indexedDB");else try{let a=r.db.transaction(n,"readonly"),s=a.objectStore(n).get(t);s.onsuccess=function(){let f=s.result;o(r.copy(f))},s.onerror=function(f){r.onError&&r.onError({type:"GET",error:f}),o(null)},a.oncomplete=function(){}}catch{setTimeout(()=>{r.get(n,t).then(a=>{o(a)}).catch(a=>{i(a)})},1e3)}})}put(n,t){let r=this;return new Promise((o,i)=>{if(!r.db)i("Error: no init indexedDB");else try{let a=r.db.transaction(n,"readwrite"),u=a.objectStore(n);const s=this.tablas[n].id;t.hasOwnProperty(s)||(t[s]=r.getFolio());let f=u.put(t);f.onsuccess=function(){let h=t;o(r.copy(h))},f.onerror=function(h){r.onError&&r.onError({type:"PUT",error:h}),i("Ocurrio un error")},a.oncomplete=function(){}}catch{setTimeout(()=>{r.put(n,t).then(a=>{o(a)}).catch(a=>{i(a)})},1e3)}})}delete(n,t){let r=this;return new Promise((o,i)=>{try{let l=r.db,a;if(!l){r.onError({type:"DELETE",error:"no esta abierta la base de datos"}),o(!1);return}a=l.transaction(n,"readwrite");let s=a.objectStore(n).delete(t);s.onsuccess=function(f){o(!0)},s.onerror=function(f){let h=!1;r.onError&&r.onError({type:"DELETE",error:f}),o(h)},a.oncomplete=function(){}}catch{setTimeout(()=>{r.delete(n,t).then(a=>{o(a)}).catch(a=>{i(a)})},1e3)}})}list(n){let t=this;return new Promise((r,o)=>{try{let i=t.db;if(!i){t.onError({type:"LIST",error:"no esta abierta la base de datos"}),r(!1);return}let l=i.transaction(n,"readonly"),u=l.objectStore(n).openCursor(),s=[];u.onsuccess=function(f){let h=f.target.result;h&&(s.push(h.value),h.continue())},u.onerror=function(f){t.onError&&t.onError({type:"LIST",error:f}),o(f)},l.oncomplete=function(){r(t.copy(s))}}catch{setTimeout(()=>{t.list(n).then(l=>{r(l)})},1e3)}})}clear(n){let t=this;return new Promise((r,o)=>{if(!t.db)o("Error: no init indexedDB");else{let u=t.db.transaction(n,"readwrite").objectStore(n).clear();u.onsuccess=function(s){r(!0)},u.onerror=function(s){t.onError&&t.onError({type:"CLEAR",error:s}),o(s)}}})}}const Dh=`[
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


`,Zc=JSON.parse(Dh),Fh={ingrediente:{id:"id"},comida:{id:"id"},receta:{id:"id"}};let vo=new Mh;function Uh(e){console.log(e)}function ml(){return vo}function Bh(){Zc.map(e=>{vo.post("ingrediente",e)})}vo.init("comida",2,Fh,Uh).then(()=>{setTimeout(()=>{vo.clear("ingrediente").then(()=>{Bh()})},500)});function $h(){return new Promise(e=>{setTimeout(()=>{e(!0)},201)})}function qc(e){let n=0,t=0,r=0;return e.forEach(o=>{const i=parseFloat(o.proteina),l=parseFloat(o.calorias),a=parseFloat(o.carbohidratos),u=parseFloat(o.cantidad),s=parseFloat(o.usado),f=i*s/u,h=l*s/u,m=a*s/u;n+=isFinite(f)?f:0,r+=isFinite(h)?h:0,t+=isFinite(m)?m:0}),{proteina:Math.round(n),carbohidratos:Math.round(t),calorias:Math.round(r)}}function Ah(e){const[n,t]=E.useState(0),[r,o]=E.useState(0),[i,l]=E.useState(0);function a(){const u=qc(e.listaComida);t(Math.round(u.proteina)),l(Math.round(u.calorias)),o(Math.round(u.carbohidratos))}return E.useEffect(()=>{a()},[e.listaComida]),D("div",{className:"flex-container detalle-comida",children:[D("div",{className:"flex-item amaraillo",children:[L("p",{children:"Calorias:"}),D("h3",{children:[" ",i," cal "]})]}),D("div",{className:"flex-item azul",children:[L("p",{children:"Proteinas:"}),D("h3",{children:[" ",n,"g "]})]}),D("div",{className:"flex-item cafe",children:[L("p",{children:"Carbohidratos:"}),D("h3",{children:[" ",r,"g "]})]})]})}function Vh(e){const[n,t]=E.useState(Zc),[r,o]=E.useState([]),[i,l]=E.useState(""),[a,u]=E.useState(45),s=E.useRef(null);function f(g){l(g.target.value)}E.useEffect(()=>{var z;let g=[];n.forEach(d=>{d.nombre.toLowerCase().indexOf(i.toLowerCase())>=0&&g.push(d)}),o(g);const w=(z=s.current)==null?void 0:z.getClientRects()[0].width,y=document.body.getClientRects()[0].width;w&&u((y-w)/2*100/y)},[i]);function h(g){e.seleccionaIngrediente(g)}function m(){return r.map((g,w)=>L("li",{onClick:()=>h(g),children:g.nombre},w))}return D("div",{className:"listar-ingredientes",ref:s,style:{left:a+"%"},children:[L("input",{type:"text",onChange:f,value:i}),L("button",{onClick:()=>e.cancelar(),children:"x"}),L("ul",{children:m()})]})}const vl={ALERT:"w3-red",SUCCESS:"w3-green",WARNING:"w3-yellow"};function Hh(e,n,t){n.addEventListener("click",r=>{clearInterval(t),e.remove()})}const bc={tipo:vl.SUCCESS,titulo:"Título",mensaje:"Mensaje",tiempo:5e3,w3css:"https://www.w3schools.com/w3css/4/w3.css"};function Wh(){return JSON.parse(JSON.stringify(bc))}function Qh(){let e=document.createElement("div");e.id="notificaciones-de-la-app",e.style.cssText="position: fixed; bottom: 0; right: 20px; height: auto; z-index: 10000;";let n=document.querySelector("body");return n&&n.append(e),e}function Ru(e=bc){let n=Object.assign(Wh(),e),t=document.createElement("div");if(t.attachShadow({mode:"open"}),t.style.minWidth="200px",!t.shadowRoot)return;t.shadowRoot.innerHTML=`
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
    `;let r=t.shadowRoot.querySelector("span"),o=t.shadowRoot.querySelector("[tiempo]");if(!o)return;let i=0,l=setInterval(()=>{if(i+=10,i>n.tiempo)clearInterval(l),t.remove();else{const h=i/n.tiempo*100;o.style.width=h+"%"}},10);r&&Hh(t,r,l);let a=document.querySelector("#notificaciones-de-la-app");a||(a=Qh());let u=t.shadowRoot.querySelector("#cargando"),s=t.shadowRoot.querySelector("#contenido"),f=t.shadowRoot.querySelector("link");f.onload=()=>{u.remove(),s.style.display="block"},a.appendChild(t)}function Tu(){const[,e]=window.location.href.split("?");if(!e)return{};const n=e.split("&");let t={};return n.forEach(r=>{const[o,i]=r.split("=");t[o]=i}),t}function ed(e){function n(){return e.rutas.map((t,r)=>r+1<e.rutas.length?L(Do,{to:t.ruta,className:"ruta",children:t.titulo},"index"):D("span",{children:[" ",t.titulo]},r))}return L("div",{className:"breadcrum",children:n()})}function Kh(){const[e,n]=E.useState(!1),[t,r]=E.useState("Sin nombre"),[o,i]=E.useState(""),[l,a]=E.useState([]),[u,s]=E.useState([{titulo:"Recetas",ruta:"/"}]),f=Xc();E.useEffect(()=>{let v=Nn(u);const k=parseInt(Tu().id);if(!k){v.push({titulo:"Receta Nueva",ruta:"/receta"}),s(v);return}ml().get("receta",k).then(x=>{x&&(v.push({titulo:x.nombre,ruta:"/receta?id="+k}),s(v),r(x.nombre),a(x.ingredientes),i(x.preparacion))})},[]);function h(){n(!0)}function m(v){const k=l.find(N=>N.id==v.id);if(k){let N=parseInt(v.cantidad)+parseInt(k.usado);w(v.id,N),n(!1);return}let C=Nn(l),x=Nn(v);x.usado=x.cantidad,C.push(x),a(C),n(!1)}function g(){n(!1)}function w(v,k){let C=Nn(l),x=C.find(N=>N.id==v);x&&(x.usado=k,a(C))}function y(v){let k=Nn(l),C=k.findIndex(x=>x.id==v);C>-1&&(k.splice(C,1),a(k))}function z(){return l.map(v=>D("tr",{children:[L("td",{children:v.nombre}),D("td",{children:[L("input",{value:v.usado,type:"number",onChange:k=>w(v.id,k.target.value)}),v.medida,L("button",{onClick:()=>y(v.id),children:"x"})]})]},v.id))}function d(){if(console.log(t),!t||t=="Sin nombre"||t==""){Ru({titulo:"Error",tipo:vl.ALERT,mensaje:"Pon el nombre de la receta"});return}const v=ml(),k=parseInt(Tu().id);let C,x={nombre:t+"",ingredientes:Nn(l),preparacion:o+""};k?(C=v.put.bind(v),x.id=k):C=v.post.bind(v),C("receta",x).then(N=>{Ru({tipo:vl.SUCCESS,titulo:"Success",mensaje:"Se agrego la receta: "+t}),f("/receta?id="+N.id)})}function c(v){v.target.value?r(v.target.value):r("")}function p(v){v.target.value?i(v.target.value):i("")}return D("div",{className:"Receta",children:[L(ed,{rutas:u}),D("div",{className:"centrar",children:[D("h2",{children:["Receta ",L("input",{type:"text",value:t,onChange:c,id:"nombre-receta"})]}),L(Ah,{listaComida:l}),L("button",{onClick:()=>h(),className:"boton",id:"agregar-ingrediente",children:"Agregar Ingrediente"}),e?L(Vh,{seleccionaIngrediente:m,cancelar:g}):L(Au,{}),D("table",{className:"tabla-receta",children:[L("thead",{children:D("tr",{children:[L("th",{children:"Ingrediente"}),L("th",{children:"Cantidad"})]})}),L("tbody",{children:z()})]}),L("h3",{children:"Preparación"}),L("div",{children:L("textarea",{value:o,onChange:p,id:"preparacion",rows:5})}),L("div",{className:"ancho-100",children:L("button",{onClick:()=>d(),className:"der boton",id:"guardar",children:"Guardar"})})]})]})}function Yh(){return D("div",{className:"menu",children:[L(Do,{to:"/",className:"item btn",children:L("i",{className:"bi bi-house-fill"})}),L("div",{className:"item",children:"Recetario"})]})}function Gh(e){return L("div",{className:"body-splash",onClick:()=>e.click(),children:L("h2",{className:"titulo-inicial",children:"Recetas"})})}function Xh(e){const[n,t]=E.useState({proteina:0,calorias:0,carbohidratos:0});return E.useEffect(()=>{t(qc(e.receta.ingredientes))},[]),D(Do,{className:"tarjeta-receta",to:"/receta?id="+e.receta.id,children:[L("h3",{children:e.receta.nombre}),D("div",{className:"detalles",children:[L("p",{children:D("span",{className:"letra letra_caloria",children:[n.calorias," "]})}),D("span",{className:"letra letra_proteina",children:["p: ",n.proteina," "]}),D("span",{className:"letra letra_carbohidrato",children:["c: ",n.carbohidratos]})]})]})}class Jh{constructor(n=[]){Ce(this,"pasos");Ce(this,"ipaso");Ce(this,"div");Ce(this,"pico");Ce(this,"divBack");Ce(this,"divTarget");this.pasos=n,this.ipaso=-1,this.div=null,this.pico=null,this.divBack=null,this.divTarget=null}inicia(){this.ipaso=0,this.render()}addPaso(n){this.pasos.push(n)}atras(){this.ipaso--,this.render()}siguiente(){this.ipaso++,this.render()}esActivo(){return!!this.div}remueve(){this.div&&this.pico&&this.divBack&&this.divTarget&&(this.div.remove(),this.pico.remove(),this.divBack.remove(),this.divTarget.remove()),this.div=null,this.pico=null,this.divBack=null,this.divTarget=null}cancelar(){this.remueve()}render(){if(this.div&&this.remueve(),this.ipaso==-1||this.ipaso>=this.pasos.length)return;this.div=document.createElement("div"),this.div.classList.add("_modal_tour"),this.divTarget=document.createElement("div"),this.divTarget.classList.add("target_border"),this.pico=document.createElement("div"),this.divBack=document.createElement("div"),this.divBack.classList.add("tour-back");const n=this.pasos[this.ipaso];n.posicion=="top"?this.pico.classList.add("_flecha-abajo"):this.pico.classList.add("_flecha-arriba"),document.body.append(this.divBack),document.body.append(this.div),document.body.append(this.pico),document.body.append(this.divTarget),this.div.innerHTML=n.contenido;let t=document.querySelector(n.target),r=null;t?r=t.getClientRects():r=[{top:0,left:0,width:100,height:20}];const[o,i,l,a]=[r[0].top,r[0].left,r[0].width,r[0].height];this.addBotones(this.div,n),this.addListenersBotones(this.div),Object.assign(this.div.style,{top:o+"px",left:"1px",height:"auto",maxWidth:"300px",position:"absolute",background:"white",zIndex:2001,visibility:"hidden",borderRadius:"5px"});let u=o-21;n.posicion=="botton"&&(u=o+a),Object.assign(this.pico.style,{top:u+window.scrollY+"px",left:i+l/2-5+"px",position:"absolute",zIndex:2001}),Object.assign(this.divTarget.style,{top:o+window.scrollY+"px",left:i+"px",width:l+"px",height:a+"px",position:"absolute",zIndex:2001});let s=this.div.clientWidth,f=i+l/2-s/2;f+s>document.body.clientWidth?f=i+l-s+5:f<0&&(f=i);let h=o-this.div.clientHeight-20;n.posicion!="top"&&(h=a+o+10),Object.assign(this.div.style,{top:h+window.scrollY+"px",left:f+"px",visibility:""}),this.mueveScroll(o-2*this.div.clientHeight+window.scrollY)}addBotones(n,t){let r="";t.acciones.forEach(o=>{const i=o.class?' class="'+o.class+'"':"";r+=`<button ${i}>${o.texto}</button>`}),n.innerHTML+=`
        <div class='_botones'>
            ${r}
        </div>
        `}addListerBoton(n,t){n.addEventListener("click",()=>{const r=this.pasos[this.ipaso].acciones[t].accion;r&&r.bind(this)()})}addListenersBotones(n){n.querySelector("._botones").querySelectorAll("button").forEach((o,i)=>{this.addListerBoton(o,i)})}mueveScroll(n){window.scroll({top:n,behavior:"smooth"})}}const U=new Jh;U.addPaso({contenido:`
        <h2>🤔</h2>
        <p>
        Veo que es la primera vez que entras, 
        a continución te explico lo básico</p>`,target:".breadcrum",posicion:"botton",acciones:[{texto:"siguiente",accion:U.siguiente,class:"azul"}]});function Zh(){document.querySelector(".boton-circular").click(),setTimeout(()=>{U.siguiente()},100)}U.addPaso({contenido:`
    <p>Primero tienes que agregar una receta</p>`,target:".boton-circular",acciones:[{texto:"atras",accion:U.atras,class:"azul"},{texto:"siguiente",accion:Zh,class:"azul"}],posicion:"botton"});function qh(){document.querySelector(".breadcrum a").click(),setTimeout(()=>{U.atras()},100)}function bh(){const e=document.querySelector("#nombre-receta");e.value="Aperitivo durazno",U.siguiente()}const em={contenido:`
        <p>
        Hay que dar un nombre a la receta</p>`,target:"#nombre-receta",posicion:"botton",acciones:[{texto:"atras",accion:qh,class:"azul"},{texto:"siguiente",accion:bh,class:"azul"}]};function nm(){document.querySelector("#agregar-ingrediente").click(),setTimeout(()=>{U.siguiente()},100)}const tm={contenido:`
        <p>Da click en agregar ingrediente</p>`,target:"#agregar-ingrediente",posicion:"botton",acciones:[{texto:"atras",accion:U.atras,class:"azul"},{texto:"siguiente",accion:nm,class:"azul"}]};function rm(){document.querySelectorAll(".listar-ingredientes li").forEach(n=>{n.innerHTML.indexOf("Durazno")>=0&&n.click()}),U.siguiente()}function om(){document.querySelector(".listar-ingredientes button").click(),U.atras()}const im={contenido:`
        <p>Selecciona un ingrediente de los que aparecen</p>`,target:".listar-ingredientes",posicion:"botton",acciones:[{texto:"atras",accion:om,class:"azul"},{texto:"siguiente",accion:rm,class:"azul"}]};function lm(){document.querySelector("#agregar-ingrediente").click(),setTimeout(()=>{U.atras()},100)}const am={contenido:`
        <p>El ingrediente seleccionado se muestra en la tabla de ingredientes.</p>
        <p>Notar que se muestra la cantidad y esta se puede modificar. 
        Tambien se puede remover presionando la x</p>`,target:".tabla-receta",posicion:"top",acciones:[{texto:"atras",accion:lm,class:"azul"},{texto:"siguiente",accion:U.siguiente,class:"azul"}]};function um(){const e=document.querySelector("#preparacion");e.value="Lavar bien los duraznos y comer.",U.siguiente()}const sm={contenido:`
        <p>Puedes indicar la preparación</p>`,target:"#preparacion",posicion:"top",acciones:[{texto:"atras",accion:U.atras,class:"azul"},{texto:"siguiente",accion:um,class:"azul"}]},cm={contenido:`
        <p>Por último guardamos</p>`,target:"#guardar",posicion:"top",acciones:[{texto:"atras",accion:U.atras,class:"azul"},{texto:"finalizar",accion:U.siguiente,class:"rojo"}]};U.addPaso(em);U.addPaso(tm);U.addPaso(im);U.addPaso(am);U.addPaso(sm);U.addPaso(cm);function dm(){const e=localStorage.getItem("tourRecetario");U.esActivo()||e||U.esActivo()||(U.inicia(),localStorage.setItem("tourRecetario","true"))}const fm=ml();function pm(){const[e,n]=E.useState([]),[t,r]=E.useState([{titulo:"Recetas",ruta:"/"}]);return E.useEffect(()=>{$h().then(()=>{fm.list("receta").then(o=>{n(Nn(o))})}),dm()},[]),D("div",{children:[L(ed,{rutas:t}),D("div",{children:[L(Do,{to:"/receta",className:"boton boton-circular derecha",children:"+"}),L("div",{className:"tarjetario",children:e.map((o,i)=>L(Xh,{receta:o},i))})]})]})}function hm(){const[e,n]=E.useState(!0);function t(){return e?L(Gh,{click:()=>n(!1)}):D(Th,{children:[L(Yh,{}),D(_h,{children:[L(fl,{path:"/receta",element:L(Kh,{})}),L(fl,{path:"/",element:L(pm,{})})]}),L("div",{className:"espacio"})]})}return L(Au,{children:t()})}mi.createRoot(document.getElementById("root")).render(L(Bu.StrictMode,{children:L(hm,{})}));
