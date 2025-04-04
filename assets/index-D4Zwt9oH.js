var hE=Object.defineProperty;var pE=(i,t,n)=>t in i?hE(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n;var Tl=(i,t,n)=>pE(i,typeof t!="symbol"?t+"":t,n);function mE(i,t){for(var n=0;n<t.length;n++){const a=t[n];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in i)){const c=Object.getOwnPropertyDescriptor(a,o);c&&Object.defineProperty(i,o,c.get?c:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function LS(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Oh={exports:{}},Al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function gE(){if(O_)return Al;O_=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:i,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Al.Fragment=t,Al.jsx=n,Al.jsxs=n,Al}var P_;function vE(){return P_||(P_=1,Oh.exports=gE()),Oh.exports}var dt=vE(),Ph={exports:{}},me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function _E(){if(B_)return me;B_=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function b(P,$,pt){this.props=P,this.context=$,this.refs=E,this.updater=pt||x}b.prototype.isReactComponent={},b.prototype.setState=function(P,$){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,$,"setState")},b.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function S(){}S.prototype=b.prototype;function O(P,$,pt){this.props=P,this.context=$,this.refs=E,this.updater=pt||x}var U=O.prototype=new S;U.constructor=O,M(U,b.prototype),U.isPureReactComponent=!0;var R=Array.isArray,D={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function I(P,$,pt,Mt,J,_t){return pt=_t.ref,{$$typeof:i,type:P,key:$,ref:pt!==void 0?pt:null,props:_t}}function H(P,$){return I(P.type,$,void 0,void 0,void 0,P.props)}function w(P){return typeof P=="object"&&P!==null&&P.$$typeof===i}function y(P){var $={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(pt){return $[pt]})}var N=/\/+/g;function j(P,$){return typeof P=="object"&&P!==null&&P.key!=null?y(""+P.key):$.toString(36)}function q(){}function rt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(q,q):(P.status="pending",P.then(function($){P.status==="pending"&&(P.status="fulfilled",P.value=$)},function($){P.status==="pending"&&(P.status="rejected",P.reason=$)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function lt(P,$,pt,Mt,J){var _t=typeof P;(_t==="undefined"||_t==="boolean")&&(P=null);var yt=!1;if(P===null)yt=!0;else switch(_t){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(P.$$typeof){case i:case t:yt=!0;break;case g:return yt=P._init,lt(yt(P._payload),$,pt,Mt,J)}}if(yt)return J=J(P),yt=Mt===""?"."+j(P,0):Mt,R(J)?(pt="",yt!=null&&(pt=yt.replace(N,"$&/")+"/"),lt(J,$,pt,"",function(ue){return ue})):J!=null&&(w(J)&&(J=H(J,pt+(J.key==null||P&&P.key===J.key?"":(""+J.key).replace(N,"$&/")+"/")+yt)),$.push(J)),1;yt=0;var Rt=Mt===""?".":Mt+":";if(R(P))for(var Ut=0;Ut<P.length;Ut++)Mt=P[Ut],_t=Rt+j(Mt,Ut),yt+=lt(Mt,$,pt,_t,J);else if(Ut=_(P),typeof Ut=="function")for(P=Ut.call(P),Ut=0;!(Mt=P.next()).done;)Mt=Mt.value,_t=Rt+j(Mt,Ut++),yt+=lt(Mt,$,pt,_t,J);else if(_t==="object"){if(typeof P.then=="function")return lt(rt(P),$,pt,Mt,J);throw $=String(P),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return yt}function F(P,$,pt){if(P==null)return P;var Mt=[],J=0;return lt(P,Mt,"","",function(_t){return $.call(pt,_t,J++)}),Mt}function Y(P){if(P._status===-1){var $=P._result;$=$(),$.then(function(pt){(P._status===0||P._status===-1)&&(P._status=1,P._result=pt)},function(pt){(P._status===0||P._status===-1)&&(P._status=2,P._result=pt)}),P._status===-1&&(P._status=0,P._result=$)}if(P._status===1)return P._result.default;throw P._result}var X=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function ht(){}return me.Children={map:F,forEach:function(P,$,pt){F(P,function(){$.apply(this,arguments)},pt)},count:function(P){var $=0;return F(P,function(){$++}),$},toArray:function(P){return F(P,function($){return $})||[]},only:function(P){if(!w(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},me.Component=b,me.Fragment=n,me.Profiler=o,me.PureComponent=O,me.StrictMode=a,me.Suspense=h,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,me.__COMPILER_RUNTIME={__proto__:null,c:function(P){return D.H.useMemoCache(P)}},me.cache=function(P){return function(){return P.apply(null,arguments)}},me.cloneElement=function(P,$,pt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Mt=M({},P.props),J=P.key,_t=void 0;if($!=null)for(yt in $.ref!==void 0&&(_t=void 0),$.key!==void 0&&(J=""+$.key),$)!z.call($,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&$.ref===void 0||(Mt[yt]=$[yt]);var yt=arguments.length-2;if(yt===1)Mt.children=pt;else if(1<yt){for(var Rt=Array(yt),Ut=0;Ut<yt;Ut++)Rt[Ut]=arguments[Ut+2];Mt.children=Rt}return I(P.type,J,void 0,void 0,_t,Mt)},me.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},me.createElement=function(P,$,pt){var Mt,J={},_t=null;if($!=null)for(Mt in $.key!==void 0&&(_t=""+$.key),$)z.call($,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(J[Mt]=$[Mt]);var yt=arguments.length-2;if(yt===1)J.children=pt;else if(1<yt){for(var Rt=Array(yt),Ut=0;Ut<yt;Ut++)Rt[Ut]=arguments[Ut+2];J.children=Rt}if(P&&P.defaultProps)for(Mt in yt=P.defaultProps,yt)J[Mt]===void 0&&(J[Mt]=yt[Mt]);return I(P,_t,void 0,void 0,null,J)},me.createRef=function(){return{current:null}},me.forwardRef=function(P){return{$$typeof:d,render:P}},me.isValidElement=w,me.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:Y}},me.memo=function(P,$){return{$$typeof:p,type:P,compare:$===void 0?null:$}},me.startTransition=function(P){var $=D.T,pt={};D.T=pt;try{var Mt=P(),J=D.S;J!==null&&J(pt,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(ht,X)}catch(_t){X(_t)}finally{D.T=$}},me.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},me.use=function(P){return D.H.use(P)},me.useActionState=function(P,$,pt){return D.H.useActionState(P,$,pt)},me.useCallback=function(P,$){return D.H.useCallback(P,$)},me.useContext=function(P){return D.H.useContext(P)},me.useDebugValue=function(){},me.useDeferredValue=function(P,$){return D.H.useDeferredValue(P,$)},me.useEffect=function(P,$,pt){var Mt=D.H;if(typeof pt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Mt.useEffect(P,$)},me.useId=function(){return D.H.useId()},me.useImperativeHandle=function(P,$,pt){return D.H.useImperativeHandle(P,$,pt)},me.useInsertionEffect=function(P,$){return D.H.useInsertionEffect(P,$)},me.useLayoutEffect=function(P,$){return D.H.useLayoutEffect(P,$)},me.useMemo=function(P,$){return D.H.useMemo(P,$)},me.useOptimistic=function(P,$){return D.H.useOptimistic(P,$)},me.useReducer=function(P,$,pt){return D.H.useReducer(P,$,pt)},me.useRef=function(P){return D.H.useRef(P)},me.useState=function(P){return D.H.useState(P)},me.useSyncExternalStore=function(P,$,pt){return D.H.useSyncExternalStore(P,$,pt)},me.useTransition=function(){return D.H.useTransition()},me.version="19.1.0",me}var I_;function Rm(){return I_||(I_=1,Ph.exports=_E()),Ph.exports}var ot=Rm();const wa=LS(ot),z_=mE({__proto__:null,default:wa},[ot]);var Bh={exports:{}},Rl={},Ih={exports:{}},zh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function yE(){return F_||(F_=1,function(i){function t(F,Y){var X=F.length;F.push(Y);t:for(;0<X;){var ht=X-1>>>1,P=F[ht];if(0<o(P,Y))F[ht]=Y,F[X]=P,X=ht;else break t}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var Y=F[0],X=F.pop();if(X!==Y){F[0]=X;t:for(var ht=0,P=F.length,$=P>>>1;ht<$;){var pt=2*(ht+1)-1,Mt=F[pt],J=pt+1,_t=F[J];if(0>o(Mt,X))J<P&&0>o(_t,Mt)?(F[ht]=_t,F[J]=X,ht=J):(F[ht]=Mt,F[pt]=X,ht=pt);else if(J<P&&0>o(_t,X))F[ht]=_t,F[J]=X,ht=J;else break t}}return Y}function o(F,Y){var X=F.sortIndex-Y.sortIndex;return X!==0?X:F.id-Y.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();i.unstable_now=function(){return u.now()-d}}var h=[],p=[],g=1,v=null,_=3,x=!1,M=!1,E=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function R(F){for(var Y=n(p);Y!==null;){if(Y.callback===null)a(p);else if(Y.startTime<=F)a(p),Y.sortIndex=Y.expirationTime,t(h,Y);else break;Y=n(p)}}function D(F){if(E=!1,R(F),!M)if(n(h)!==null)M=!0,z||(z=!0,j());else{var Y=n(p);Y!==null&&lt(D,Y.startTime-F)}}var z=!1,I=-1,H=5,w=-1;function y(){return b?!0:!(i.unstable_now()-w<H)}function N(){if(b=!1,z){var F=i.unstable_now();w=F;var Y=!0;try{t:{M=!1,E&&(E=!1,O(I),I=-1),x=!0;var X=_;try{e:{for(R(F),v=n(h);v!==null&&!(v.expirationTime>F&&y());){var ht=v.callback;if(typeof ht=="function"){v.callback=null,_=v.priorityLevel;var P=ht(v.expirationTime<=F);if(F=i.unstable_now(),typeof P=="function"){v.callback=P,R(F),Y=!0;break e}v===n(h)&&a(h),R(F)}else a(h);v=n(h)}if(v!==null)Y=!0;else{var $=n(p);$!==null&&lt(D,$.startTime-F),Y=!1}}break t}finally{v=null,_=X,x=!1}Y=void 0}}finally{Y?j():z=!1}}}var j;if(typeof U=="function")j=function(){U(N)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,rt=q.port2;q.port1.onmessage=N,j=function(){rt.postMessage(null)}}else j=function(){S(N,0)};function lt(F,Y){I=S(function(){F(i.unstable_now())},Y)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(F){F.callback=null},i.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<F?Math.floor(1e3/F):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_next=function(F){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var X=_;_=Y;try{return F()}finally{_=X}},i.unstable_requestPaint=function(){b=!0},i.unstable_runWithPriority=function(F,Y){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var X=_;_=F;try{return Y()}finally{_=X}},i.unstable_scheduleCallback=function(F,Y,X){var ht=i.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ht+X:ht):X=ht,F){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=X+P,F={id:g++,callback:Y,priorityLevel:F,startTime:X,expirationTime:P,sortIndex:-1},X>ht?(F.sortIndex=X,t(p,F),n(h)===null&&F===n(p)&&(E?(O(I),I=-1):E=!0,lt(D,X-ht))):(F.sortIndex=P,t(h,F),M||x||(M=!0,z||(z=!0,j()))),F},i.unstable_shouldYield=y,i.unstable_wrapCallback=function(F){var Y=_;return function(){var X=_;_=Y;try{return F.apply(this,arguments)}finally{_=X}}}}(zh)),zh}var H_;function SE(){return H_||(H_=1,Ih.exports=yE()),Ih.exports}var Fh={exports:{}},Wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function xE(){if(G_)return Wn;G_=1;var i=Rm();function t(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(h,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:h,containerInfo:p,implementation:g}}var u=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Wn.createPortal=function(h,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(h,p,null,g)},Wn.flushSync=function(h){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,h)return h()}finally{u.T=p,a.p=g,a.d.f()}},Wn.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(h,p))},Wn.prefetchDNS=function(h){typeof h=="string"&&a.d.D(h)},Wn.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&a.d.X(h,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Wn.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);a.d.M(h,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(h)},Wn.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);a.d.L(h,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Wn.preloadModule=function(h,p){if(typeof h=="string")if(p){var g=d(p.as,p.crossOrigin);a.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(h)},Wn.requestFormReset=function(h){a.d.r(h)},Wn.unstable_batchedUpdates=function(h,p){return h(p)},Wn.useFormState=function(h,p,g){return u.H.useFormState(h,p,g)},Wn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Wn.version="19.1.0",Wn}var V_;function bE(){if(V_)return Fh.exports;V_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Fh.exports=xE(),Fh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function ME(){if(k_)return Rl;k_=1;var i=SE(),t=Rm(),n=bE();function a(e){var r="https://react.dev/errors/"+e;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var r=e,s=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(s=r.return),e=r.return;while(e)}return r.tag===3?s:null}function u(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(a(188))}function h(e){var r=e.alternate;if(!r){if(r=c(e),r===null)throw Error(a(188));return r!==e?null:e}for(var s=e,l=r;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return d(f),e;if(m===l)return d(f),r;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=m;else{for(var T=!1,C=f.child;C;){if(C===s){T=!0,s=f,l=m;break}if(C===l){T=!0,l=f,s=m;break}C=C.sibling}if(!T){for(C=m.child;C;){if(C===s){T=!0,s=m,l=f;break}if(C===l){T=!0,l=m,s=f;break}C=C.sibling}if(!T)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:r}function p(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e;for(e=e.child;e!==null;){if(r=p(e),r!==null)return r;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),y=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var q=Symbol.for("react.client.reference");function rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case b:return"Profiler";case E:return"StrictMode";case D:return"Suspense";case z:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case U:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case R:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return r=e.displayName||null,r!==null?r:rt(e.type)||"Memo";case H:r=e._payload,e=e._init;try{return rt(e(r))}catch{}}return null}var lt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},ht=[],P=-1;function $(e){return{current:e}}function pt(e){0>P||(e.current=ht[P],ht[P]=null,P--)}function Mt(e,r){P++,ht[P]=e.current,e.current=r}var J=$(null),_t=$(null),yt=$(null),Rt=$(null);function Ut(e,r){switch(Mt(yt,r),Mt(_t,e),Mt(J,null),r.nodeType){case 9:case 11:e=(e=r.documentElement)&&(e=e.namespaceURI)?l_(e):0;break;default:if(e=r.tagName,r=r.namespaceURI)r=l_(r),e=c_(r,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}pt(J),Mt(J,e)}function ue(){pt(J),pt(_t),pt(yt)}function Kt(e){e.memoizedState!==null&&Mt(Rt,e);var r=J.current,s=c_(r,e.type);r!==s&&(Mt(_t,e),Mt(J,s))}function Ue(e){_t.current===e&&(pt(J),pt(_t)),Rt.current===e&&(pt(Rt),Sl._currentValue=X)}var Ee=Object.prototype.hasOwnProperty,de=i.unstable_scheduleCallback,V=i.unstable_cancelCallback,pn=i.unstable_shouldYield,he=i.unstable_requestPaint,$t=i.unstable_now,Vt=i.unstable_getCurrentPriorityLevel,ae=i.unstable_ImmediatePriority,Xt=i.unstable_UserBlockingPriority,B=i.unstable_NormalPriority,A=i.unstable_LowPriority,nt=i.unstable_IdlePriority,bt=i.log,At=i.unstable_setDisableYieldValue,gt=null,Ft=null;function wt(e){if(typeof bt=="function"&&At(e),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(gt,e)}catch{}}var Dt=Math.clz32?Math.clz32:Pt,ee=Math.log,Et=Math.LN2;function Pt(e){return e>>>=0,e===0?32:31-(ee(e)/Et|0)|0}var qt=256,Yt=4194304;function Nt(e){var r=e&42;if(r!==0)return r;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pe(e,r,s){var l=e.pendingLanes;if(l===0)return 0;var f=0,m=e.suspendedLanes,T=e.pingedLanes;e=e.warmLanes;var C=l&134217727;return C!==0?(l=C&~m,l!==0?f=Nt(l):(T&=C,T!==0?f=Nt(T):s||(s=C&~e,s!==0&&(f=Nt(s))))):(C=l&~m,C!==0?f=Nt(C):T!==0?f=Nt(T):s||(s=l&~e,s!==0&&(f=Nt(s)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,s=r&-r,m>=s||m===32&&(s&4194048)!==0)?r:f}function oe(e,r){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&r)===0}function Pe(e,r){switch(e){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var e=qt;return qt<<=1,(qt&4194048)===0&&(qt=256),e}function Bt(){var e=Yt;return Yt<<=1,(Yt&62914560)===0&&(Yt=4194304),e}function ft(e){for(var r=[],s=0;31>s;s++)r.push(e);return r}function xt(e,r){e.pendingLanes|=r,r!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function kt(e,r,s,l,f,m){var T=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var C=e.entanglements,G=e.expirationTimes,et=e.hiddenUpdates;for(s=T&~s;0<s;){var vt=31-Dt(s),Tt=1<<vt;C[vt]=0,G[vt]=-1;var it=et[vt];if(it!==null)for(et[vt]=null,vt=0;vt<it.length;vt++){var at=it[vt];at!==null&&(at.lane&=-536870913)}s&=~Tt}l!==0&&It(e,l,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(T&~r))}function It(e,r,s){e.pendingLanes|=r,e.suspendedLanes&=~r;var l=31-Dt(r);e.entangledLanes|=r,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function fe(e,r){var s=e.entangledLanes|=r;for(e=e.entanglements;s;){var l=31-Dt(s),f=1<<l;f&r|e[l]&r&&(e[l]|=r),s&=~f}}function ke(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ln(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ce(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:C_(e.type))}function Lt(e,r){var s=Y.p;try{return Y.p=e,r()}finally{Y.p=s}}var zt=Math.random().toString(36).slice(2),ne="__reactFiber$"+zt,se="__reactProps$"+zt,Se="__reactContainer$"+zt,Un="__reactEvents$"+zt,bi="__reactListeners$"+zt,Qi="__reactHandles$"+zt,Ji="__reactResources$"+zt,Mi="__reactMarker$"+zt;function Zr(e){delete e[ne],delete e[se],delete e[Un],delete e[bi],delete e[Qi]}function pr(e){var r=e[ne];if(r)return r;for(var s=e.parentNode;s;){if(r=s[Se]||s[ne]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(e=h_(e);e!==null;){if(s=e[ne])return s;e=h_(e)}return r}e=s,s=e.parentNode}return null}function mr(e){if(e=e[ne]||e[Se]){var r=e.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return e}return null}function za(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e.stateNode;throw Error(a(33))}function Qr(e){var r=e[Ji];return r||(r=e[Ji]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Sn(e){e[Mi]=!0}var oc=new Set,lc={};function gr(e,r){L(e,r),L(e+"Capture",r)}function L(e,r){for(lc[e]=r,e=0;e<r.length;e++)oc.add(r[e])}var Z=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},ct={};function Q(e){return Ee.call(ct,e)?!0:Ee.call(st,e)?!1:Z.test(e)?ct[e]=!0:(st[e]=!0,!1)}function Ct(e,r,s){if(Q(r))if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(r);return}}e.setAttribute(r,""+s)}}function Ot(e,r,s){if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttribute(r,""+s)}}function Ht(e,r,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(r,s,""+l)}}var Wt,le;function Jt(e){if(Wt===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);Wt=r&&r[1]||"",le=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wt+e+le}var Qt=!1;function xe(e,r){if(!e||Qt)return"";Qt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var Tt=function(){throw Error()};if(Object.defineProperty(Tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Tt,[])}catch(at){var it=at}Reflect.construct(e,[],Tt)}else{try{Tt.call()}catch(at){it=at}e.call(Tt.prototype)}}else{try{throw Error()}catch(at){it=at}(Tt=e())&&typeof Tt.catch=="function"&&Tt.catch(function(){})}}catch(at){if(at&&it&&typeof at.stack=="string")return[at.stack,it.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),T=m[0],C=m[1];if(T&&C){var G=T.split(`
`),et=C.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<et.length&&!et[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===et.length)for(l=G.length-1,f=et.length-1;1<=l&&0<=f&&G[l]!==et[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==et[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==et[f]){var vt=`
`+G[l].replace(" at new "," at ");return e.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",e.displayName)),vt}while(1<=l&&0<=f);break}}}finally{Qt=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Jt(s):""}function Le(e){switch(e.tag){case 26:case 27:case 5:return Jt(e.type);case 16:return Jt("Lazy");case 13:return Jt("Suspense");case 19:return Jt("SuspenseList");case 0:case 15:return xe(e.type,!1);case 11:return xe(e.type.render,!1);case 1:return xe(e.type,!0);case 31:return Jt("Activity");default:return""}}function sn(e){try{var r="";do r+=Le(e),e=e.return;while(e);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Te(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ae(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function te(e){var r=Ae(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),l=""+e[r];if(!e.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return f.call(this)},set:function(T){l=""+T,m.call(this,T)}}),Object.defineProperty(e,r,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(T){l=""+T},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function cn(e){e._valueTracker||(e._valueTracker=te(e))}function De(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var s=r.getValue(),l="";return e&&(l=Ae(e)?e.checked?"true":"false":e.value),e=l,e!==s?(r.setValue(e),!0):!1}function Vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Jr=/[\n"\\]/g;function en(e){return e.replace(Jr,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function vr(e,r,s,l,f,m,T,C){e.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.type=T:e.removeAttribute("type"),r!=null?T==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+Te(r)):e.value!==""+Te(r)&&(e.value=""+Te(r)):T!=="submit"&&T!=="reset"||e.removeAttribute("value"),r!=null?kn(e,T,Te(r)):s!=null?kn(e,T,Te(s)):l!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+Te(C):e.removeAttribute("name")}function Ze(e,r,s,l,f,m,T,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),r!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;s=s!=null?""+Te(s):"",r=r!=null?""+Te(r):s,C||r===e.value||(e.value=r),e.defaultValue=r}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=C?e.checked:!!l,e.defaultChecked=!!l,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(e.name=T)}function kn(e,r,s){r==="number"&&Vn(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Tn(e,r,s,l){if(e=e.options,r){r={};for(var f=0;f<s.length;f++)r["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=r.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+Te(s),r=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}r!==null||e[f].disabled||(r=e[f])}r!==null&&(r.selected=!0)}}function Ln(e,r,s){if(r!=null&&(r=""+Te(r),r!==e.value&&(e.value=r),s==null)){e.defaultValue!==r&&(e.defaultValue=r);return}e.defaultValue=s!=null?""+Te(s):""}function In(e,r,s,l){if(r==null){if(l!=null){if(s!=null)throw Error(a(92));if(lt(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),r=s}s=Te(r),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function tr(e,r){if(r){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=r;return}}e.textContent=r}var _r=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lg(e,r,s){var l=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="":l?e.setProperty(r,s):typeof s!="number"||s===0||_r.has(r)?r==="float"?e.cssFloat=s:e[r]=(""+s).trim():e[r]=s+"px"}function cg(e,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in r)l=r[f],r.hasOwnProperty(f)&&s[f]!==l&&lg(e,f,l)}else for(var m in r)r.hasOwnProperty(m)&&lg(e,m,r[m])}function Nf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),db=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cc(e){return db.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Of=null;function Pf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ss=null,xs=null;function ug(e){var r=mr(e);if(r&&(e=r.stateNode)){var s=e[se]||null;t:switch(e=r.stateNode,r.type){case"input":if(vr(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+en(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var l=s[r];if(l!==e&&l.form===e.form){var f=l[se]||null;if(!f)throw Error(a(90));vr(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<s.length;r++)l=s[r],l.form===e.form&&De(l)}break t;case"textarea":Ln(e,s.value,s.defaultValue);break t;case"select":r=s.value,r!=null&&Tn(e,!!s.multiple,r,!1)}}}var Bf=!1;function fg(e,r,s){if(Bf)return e(r,s);Bf=!0;try{var l=e(r);return l}finally{if(Bf=!1,(Ss!==null||xs!==null)&&(jc(),Ss&&(r=Ss,e=xs,xs=Ss=null,ug(r),e)))for(r=0;r<e.length;r++)ug(e[r])}}function No(e,r){var s=e.stateNode;if(s===null)return null;var l=s[se]||null;if(l===null)return null;s=l[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var yr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),If=!1;if(yr)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){If=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{If=!1}var ta=null,zf=null,uc=null;function dg(){if(uc)return uc;var e,r=zf,s=r.length,l,f="value"in ta?ta.value:ta.textContent,m=f.length;for(e=0;e<s&&r[e]===f[e];e++);var T=s-e;for(l=1;l<=T&&r[s-l]===f[m-l];l++);return uc=f.slice(e,1<l?1-l:void 0)}function fc(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function dc(){return!0}function hg(){return!1}function Qn(e){function r(s,l,f,m,T){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(s=e[C],this[C]=s?s(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?dc:hg,this.isPropagationStopped=hg,this}return g(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=dc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=dc)},persist:function(){},isPersistent:dc}),r}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=Qn(Fa),Po=g({},Fa,{view:0,detail:0}),hb=Qn(Po),Ff,Hf,Bo,pc=g({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bo&&(Bo&&e.type==="mousemove"?(Ff=e.screenX-Bo.screenX,Hf=e.screenY-Bo.screenY):Hf=Ff=0,Bo=e),Ff)},movementY:function(e){return"movementY"in e?e.movementY:Hf}}),pg=Qn(pc),pb=g({},pc,{dataTransfer:0}),mb=Qn(pb),gb=g({},Po,{relatedTarget:0}),Gf=Qn(gb),vb=g({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),_b=Qn(vb),yb=g({},Fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sb=Qn(yb),xb=g({},Fa,{data:0}),mg=Qn(xb),bb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tb(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Eb[e])?!!r[e]:!1}function Vf(){return Tb}var Ab=g({},Po,{key:function(e){if(e.key){var r=bb[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=fc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vf,charCode:function(e){return e.type==="keypress"?fc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rb=Qn(Ab),Cb=g({},pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gg=Qn(Cb),wb=g({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vf}),Db=Qn(wb),Ub=g({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lb=Qn(Ub),Nb=g({},pc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ob=Qn(Nb),Pb=g({},Fa,{newState:0,oldState:0}),Bb=Qn(Pb),Ib=[9,13,27,32],kf=yr&&"CompositionEvent"in window,Io=null;yr&&"documentMode"in document&&(Io=document.documentMode);var zb=yr&&"TextEvent"in window&&!Io,vg=yr&&(!kf||Io&&8<Io&&11>=Io),_g=" ",yg=!1;function Sg(e,r){switch(e){case"keyup":return Ib.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bs=!1;function Fb(e,r){switch(e){case"compositionend":return xg(r);case"keypress":return r.which!==32?null:(yg=!0,_g);case"textInput":return e=r.data,e===_g&&yg?null:e;default:return null}}function Hb(e,r){if(bs)return e==="compositionend"||!kf&&Sg(e,r)?(e=dg(),uc=zf=ta=null,bs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return vg&&r.locale!=="ko"?null:r.data;default:return null}}var Gb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bg(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Gb[e.type]:r==="textarea"}function Mg(e,r,s,l){Ss?xs?xs.push(l):xs=[l]:Ss=l,r=tu(r,"onChange"),0<r.length&&(s=new hc("onChange","change",null,s,l),e.push({event:s,listeners:r}))}var zo=null,Fo=null;function Vb(e){i_(e,0)}function mc(e){var r=za(e);if(De(r))return e}function Eg(e,r){if(e==="change")return r}var Tg=!1;if(yr){var Xf;if(yr){var Wf="oninput"in document;if(!Wf){var Ag=document.createElement("div");Ag.setAttribute("oninput","return;"),Wf=typeof Ag.oninput=="function"}Xf=Wf}else Xf=!1;Tg=Xf&&(!document.documentMode||9<document.documentMode)}function Rg(){zo&&(zo.detachEvent("onpropertychange",Cg),Fo=zo=null)}function Cg(e){if(e.propertyName==="value"&&mc(Fo)){var r=[];Mg(r,Fo,e,Pf(e)),fg(Vb,r)}}function kb(e,r,s){e==="focusin"?(Rg(),zo=r,Fo=s,zo.attachEvent("onpropertychange",Cg)):e==="focusout"&&Rg()}function Xb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mc(Fo)}function Wb(e,r){if(e==="click")return mc(r)}function qb(e,r){if(e==="input"||e==="change")return mc(r)}function Yb(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var li=typeof Object.is=="function"?Object.is:Yb;function Ho(e,r){if(li(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var s=Object.keys(e),l=Object.keys(r);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Ee.call(r,f)||!li(e[f],r[f]))return!1}return!0}function wg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dg(e,r){var s=wg(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=r&&l>=r)return{node:s,offset:r-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=wg(s)}}function Ug(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Ug(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Lg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var r=Vn(e.document);r instanceof e.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)e=r.contentWindow;else break;r=Vn(e.document)}return r}function qf(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}var jb=yr&&"documentMode"in document&&11>=document.documentMode,Ms=null,Yf=null,Go=null,jf=!1;function Ng(e,r,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;jf||Ms==null||Ms!==Vn(l)||(l=Ms,"selectionStart"in l&&qf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Go&&Ho(Go,l)||(Go=l,l=tu(Yf,"onSelect"),0<l.length&&(r=new hc("onSelect","select",null,r,s),e.push({event:r,listeners:l}),r.target=Ms)))}function Ha(e,r){var s={};return s[e.toLowerCase()]=r.toLowerCase(),s["Webkit"+e]="webkit"+r,s["Moz"+e]="moz"+r,s}var Es={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},$f={},Og={};yr&&(Og=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function Ga(e){if($f[e])return $f[e];if(!Es[e])return e;var r=Es[e],s;for(s in r)if(r.hasOwnProperty(s)&&s in Og)return $f[e]=r[s];return e}var Pg=Ga("animationend"),Bg=Ga("animationiteration"),Ig=Ga("animationstart"),$b=Ga("transitionrun"),Kb=Ga("transitionstart"),Zb=Ga("transitioncancel"),zg=Ga("transitionend"),Fg=new Map,Kf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kf.push("scrollEnd");function Hi(e,r){Fg.set(e,r),gr(r,[e])}var Hg=new WeakMap;function Ei(e,r){if(typeof e=="object"&&e!==null){var s=Hg.get(e);return s!==void 0?s:(r={value:e,source:r,stack:sn(r)},Hg.set(e,r),r)}return{value:e,source:r,stack:sn(r)}}var Ti=[],Ts=0,Zf=0;function gc(){for(var e=Ts,r=Zf=Ts=0;r<e;){var s=Ti[r];Ti[r++]=null;var l=Ti[r];Ti[r++]=null;var f=Ti[r];Ti[r++]=null;var m=Ti[r];if(Ti[r++]=null,l!==null&&f!==null){var T=l.pending;T===null?f.next=f:(f.next=T.next,T.next=f),l.pending=f}m!==0&&Gg(s,f,m)}}function vc(e,r,s,l){Ti[Ts++]=e,Ti[Ts++]=r,Ti[Ts++]=s,Ti[Ts++]=l,Zf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Qf(e,r,s,l){return vc(e,r,s,l),_c(e)}function As(e,r){return vc(e,null,null,r),_c(e)}function Gg(e,r,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=e.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&r!==null&&(f=31-Dt(s),e=m.hiddenUpdates,l=e[f],l===null?e[f]=[r]:l.push(r),r.lane=s|536870912),m):null}function _c(e){if(50<dl)throw dl=0,rh=null,Error(a(185));for(var r=e.return;r!==null;)e=r,r=e.return;return e.tag===3?e.stateNode:null}var Rs={};function Qb(e,r,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,r,s,l){return new Qb(e,r,s,l)}function Jf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sr(e,r){var s=e.alternate;return s===null?(s=ci(e.tag,r,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=r,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,r=e.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Vg(e,r){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=r,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,r=s.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),e}function yc(e,r,s,l,f,m){var T=0;if(l=e,typeof e=="function")Jf(e)&&(T=1);else if(typeof e=="string")T=tE(e,s,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=ci(31,s,r,f),e.elementType=w,e.lanes=m,e;case M:return Va(s.children,f,m,r);case E:T=8,f|=24;break;case b:return e=ci(12,s,r,f|2),e.elementType=b,e.lanes=m,e;case D:return e=ci(13,s,r,f),e.elementType=D,e.lanes=m,e;case z:return e=ci(19,s,r,f),e.elementType=z,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S:case U:T=10;break t;case O:T=9;break t;case R:T=11;break t;case I:T=14;break t;case H:T=16,l=null;break t}T=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return r=ci(T,s,r,f),r.elementType=e,r.type=l,r.lanes=m,r}function Va(e,r,s,l){return e=ci(7,e,l,r),e.lanes=s,e}function td(e,r,s){return e=ci(6,e,null,r),e.lanes=s,e}function ed(e,r,s){return r=ci(4,e.children!==null?e.children:[],e.key,r),r.lanes=s,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}var Cs=[],ws=0,Sc=null,xc=0,Ai=[],Ri=0,ka=null,xr=1,br="";function Xa(e,r){Cs[ws++]=xc,Cs[ws++]=Sc,Sc=e,xc=r}function kg(e,r,s){Ai[Ri++]=xr,Ai[Ri++]=br,Ai[Ri++]=ka,ka=e;var l=xr;e=br;var f=32-Dt(l)-1;l&=~(1<<f),s+=1;var m=32-Dt(r)+f;if(30<m){var T=f-f%5;m=(l&(1<<T)-1).toString(32),l>>=T,f-=T,xr=1<<32-Dt(r)+f|s<<f|l,br=m+e}else xr=1<<m|s<<f|l,br=e}function nd(e){e.return!==null&&(Xa(e,1),kg(e,1,0))}function id(e){for(;e===Sc;)Sc=Cs[--ws],Cs[ws]=null,xc=Cs[--ws],Cs[ws]=null;for(;e===ka;)ka=Ai[--Ri],Ai[Ri]=null,br=Ai[--Ri],Ai[Ri]=null,xr=Ai[--Ri],Ai[Ri]=null}var Kn=null,un=null,Be=!1,Wa=null,er=!1,rd=Error(a(519));function qa(e){var r=Error(a(418,""));throw Xo(Ei(r,e)),rd}function Xg(e){var r=e.stateNode,s=e.type,l=e.memoizedProps;switch(r[ne]=e,r[se]=l,s){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(s=0;s<pl.length;s++)Me(pl[s],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":Me("invalid",r),Ze(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),cn(r);break;case"select":Me("invalid",r);break;case"textarea":Me("invalid",r),In(r,l.value,l.defaultValue,l.children),cn(r)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||l.suppressHydrationWarning===!0||o_(r.textContent,s)?(l.popover!=null&&(Me("beforetoggle",r),Me("toggle",r)),l.onScroll!=null&&Me("scroll",r),l.onScrollEnd!=null&&Me("scrollend",r),l.onClick!=null&&(r.onclick=eu),r=!0):r=!1,r||qa(e)}function Wg(e){for(Kn=e.return;Kn;)switch(Kn.tag){case 5:case 13:er=!1;return;case 27:case 3:er=!0;return;default:Kn=Kn.return}}function Vo(e){if(e!==Kn)return!1;if(!Be)return Wg(e),Be=!0,!1;var r=e.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Sh(e.type,e.memoizedProps)),s=!s),s&&un&&qa(e),Wg(e),r===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(r===0){un=Vi(e.nextSibling);break t}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;e=e.nextSibling}un=null}}else r===27?(r=un,ga(e.type)?(e=Eh,Eh=null,un=e):un=r):un=Kn?Vi(e.stateNode.nextSibling):null;return!0}function ko(){un=Kn=null,Be=!1}function qg(){var e=Wa;return e!==null&&(ei===null?ei=e:ei.push.apply(ei,e),Wa=null),e}function Xo(e){Wa===null?Wa=[e]:Wa.push(e)}var ad=$(null),Ya=null,Mr=null;function ea(e,r,s){Mt(ad,r._currentValue),r._currentValue=s}function Er(e){e._currentValue=ad.current,pt(ad)}function sd(e,r,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),e===s)break;e=e.return}}function od(e,r,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var T=f.child;m=m.firstContext;t:for(;m!==null;){var C=m;m=f;for(var G=0;G<r.length;G++)if(C.context===r[G]){m.lanes|=s,C=m.alternate,C!==null&&(C.lanes|=s),sd(m.return,s,e),l||(T=null);break t}m=C.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(a(341));T.lanes|=s,m=T.alternate,m!==null&&(m.lanes|=s),sd(T,s,e),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===e){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function Wo(e,r,s,l){e=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(a(387));if(T=T.memoizedProps,T!==null){var C=f.type;li(f.pendingProps.value,T.value)||(e!==null?e.push(C):e=[C])}}else if(f===Rt.current){if(T=f.alternate,T===null)throw Error(a(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Sl):e=[Sl])}f=f.return}e!==null&&od(r,e,s,l),r.flags|=262144}function bc(e){for(e=e.firstContext;e!==null;){if(!li(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ja(e){Ya=e,Mr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xn(e){return Yg(Ya,e)}function Mc(e,r){return Ya===null&&ja(e),Yg(e,r)}function Yg(e,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},Mr===null){if(e===null)throw Error(a(308));Mr=r,e.dependencies={lanes:0,firstContext:r},e.flags|=524288}else Mr=Mr.next=r;return s}var Jb=typeof AbortController<"u"?AbortController:function(){var e=[],r=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){r.aborted=!0,e.forEach(function(s){return s()})}},tM=i.unstable_scheduleCallback,eM=i.unstable_NormalPriority,An={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ld(){return{controller:new Jb,data:new Map,refCount:0}}function qo(e){e.refCount--,e.refCount===0&&tM(eM,function(){e.controller.abort()})}var Yo=null,cd=0,Ds=0,Us=null;function nM(e,r){if(Yo===null){var s=Yo=[];cd=0,Ds=fh(),Us={status:"pending",value:void 0,then:function(l){s.push(l)}}}return cd++,r.then(jg,jg),r}function jg(){if(--cd===0&&Yo!==null){Us!==null&&(Us.status="fulfilled");var e=Yo;Yo=null,Ds=0,Us=null;for(var r=0;r<e.length;r++)(0,e[r])()}}function iM(e,r){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=r;for(var f=0;f<s.length;f++)(0,s[f])(r)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var $g=F.S;F.S=function(e,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&nM(e,r),$g!==null&&$g(e,r)};var $a=$(null);function ud(){var e=$a.current;return e!==null?e:nn.pooledCache}function Ec(e,r){r===null?Mt($a,$a.current):Mt($a,r.pool)}function Kg(){var e=ud();return e===null?null:{parent:An._currentValue,pool:e}}var jo=Error(a(460)),Zg=Error(a(474)),Tc=Error(a(542)),fd={then:function(){}};function Qg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ac(){}function Jg(e,r,s){switch(s=e[s],s===void 0?e.push(r):s!==r&&(r.then(Ac,Ac),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,e0(e),e;default:if(typeof r.status=="string")r.then(Ac,Ac);else{if(e=nn,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=r,e.status="pending",e.then(function(l){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=l}},function(l){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,e0(e),e}throw $o=r,jo}}var $o=null;function t0(){if($o===null)throw Error(a(459));var e=$o;return $o=null,e}function e0(e){if(e===jo||e===Tc)throw Error(a(483))}var na=!1;function dd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hd(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ra(e,r,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ge&2)!==0){var f=l.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),l.pending=r,r=_c(e),Gg(e,null,s),r}return vc(e,l,r,s),_c(e)}function Ko(e,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var l=r.lanes;l&=e.pendingLanes,s|=l,r.lanes=s,fe(e,s)}}function pd(e,r){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var T={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=T:m=m.next=T,s=s.next}while(s!==null);m===null?f=m=r:m=m.next=r}else f=m=r;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=r:e.next=r,s.lastBaseUpdate=r}var md=!1;function Zo(){if(md){var e=Us;if(e!==null)throw e}}function Qo(e,r,s,l){md=!1;var f=e.updateQueue;na=!1;var m=f.firstBaseUpdate,T=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var G=C,et=G.next;G.next=null,T===null?m=et:T.next=et,T=G;var vt=e.alternate;vt!==null&&(vt=vt.updateQueue,C=vt.lastBaseUpdate,C!==T&&(C===null?vt.firstBaseUpdate=et:C.next=et,vt.lastBaseUpdate=G))}if(m!==null){var Tt=f.baseState;T=0,vt=et=G=null,C=m;do{var it=C.lane&-536870913,at=it!==C.lane;if(at?(we&it)===it:(l&it)===it){it!==0&&it===Ds&&(md=!0),vt!==null&&(vt=vt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var ce=e,ie=C;it=r;var qe=s;switch(ie.tag){case 1:if(ce=ie.payload,typeof ce=="function"){Tt=ce.call(qe,Tt,it);break t}Tt=ce;break t;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=ie.payload,it=typeof ce=="function"?ce.call(qe,Tt,it):ce,it==null)break t;Tt=g({},Tt,it);break t;case 2:na=!0}}it=C.callback,it!==null&&(e.flags|=64,at&&(e.flags|=8192),at=f.callbacks,at===null?f.callbacks=[it]:at.push(it))}else at={lane:it,tag:C.tag,payload:C.payload,callback:C.callback,next:null},vt===null?(et=vt=at,G=Tt):vt=vt.next=at,T|=it;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;at=C,C=at.next,at.next=null,f.lastBaseUpdate=at,f.shared.pending=null}}while(!0);vt===null&&(G=Tt),f.baseState=G,f.firstBaseUpdate=et,f.lastBaseUpdate=vt,m===null&&(f.shared.lanes=0),da|=T,e.lanes=T,e.memoizedState=Tt}}function n0(e,r){if(typeof e!="function")throw Error(a(191,e));e.call(r)}function i0(e,r){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)n0(s[e],r)}var Ls=$(null),Rc=$(0);function r0(e,r){e=Ur,Mt(Rc,e),Mt(Ls,r),Ur=e|r.baseLanes}function gd(){Mt(Rc,Ur),Mt(Ls,Ls.current)}function vd(){Ur=Rc.current,pt(Ls),pt(Rc)}var aa=0,_e=null,Xe=null,xn=null,Cc=!1,Ns=!1,Ka=!1,wc=0,Jo=0,Os=null,rM=0;function mn(){throw Error(a(321))}function _d(e,r){if(r===null)return!1;for(var s=0;s<r.length&&s<e.length;s++)if(!li(e[s],r[s]))return!1;return!0}function yd(e,r,s,l,f,m){return aa=m,_e=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,F.H=e===null||e.memoizedState===null?G0:V0,Ka=!1,m=s(l,f),Ka=!1,Ns&&(m=s0(r,s,l,f)),a0(e),m}function a0(e){F.H=Pc;var r=Xe!==null&&Xe.next!==null;if(aa=0,xn=Xe=_e=null,Cc=!1,Jo=0,Os=null,r)throw Error(a(300));e===null||Nn||(e=e.dependencies,e!==null&&bc(e)&&(Nn=!0))}function s0(e,r,s,l){_e=e;var f=0;do{if(Ns&&(Os=null),Jo=0,Ns=!1,25<=f)throw Error(a(301));if(f+=1,xn=Xe=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=fM,m=r(s,l)}while(Ns);return m}function aM(){var e=F.H,r=e.useState()[0];return r=typeof r.then=="function"?tl(r):r,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(_e.flags|=1024),r}function Sd(){var e=wc!==0;return wc=0,e}function xd(e,r,s){r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s}function bd(e){if(Cc){for(e=e.memoizedState;e!==null;){var r=e.queue;r!==null&&(r.pending=null),e=e.next}Cc=!1}aa=0,xn=Xe=_e=null,Ns=!1,Jo=wc=0,Os=null}function Jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?_e.memoizedState=xn=e:xn=xn.next=e,xn}function bn(){if(Xe===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var r=xn===null?_e.memoizedState:xn.next;if(r!==null)xn=r,Xe=e;else{if(e===null)throw _e.alternate===null?Error(a(467)):Error(a(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},xn===null?_e.memoizedState=xn=e:xn=xn.next=e}return xn}function Md(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tl(e){var r=Jo;return Jo+=1,Os===null&&(Os=[]),e=Jg(Os,e,r),r=_e,(xn===null?r.memoizedState:xn.next)===null&&(r=r.alternate,F.H=r===null||r.memoizedState===null?G0:V0),e}function Dc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return tl(e);if(e.$$typeof===U)return Xn(e)}throw Error(a(438,String(e)))}function Ed(e){var r=null,s=_e.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var l=_e.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=Md(),_e.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(e),l=0;l<e;l++)s[l]=y;return r.index++,s}function Tr(e,r){return typeof r=="function"?r(e):r}function Uc(e){var r=bn();return Td(r,Xe,e)}function Td(e,r,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=e.baseQueue,m=l.pending;if(m!==null){if(f!==null){var T=f.next;f.next=m.next,m.next=T}r.baseQueue=f=m,l.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{r=f.next;var C=T=null,G=null,et=r,vt=!1;do{var Tt=et.lane&-536870913;if(Tt!==et.lane?(we&Tt)===Tt:(aa&Tt)===Tt){var it=et.revertLane;if(it===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),Tt===Ds&&(vt=!0);else if((aa&it)===it){et=et.next,it===Ds&&(vt=!0);continue}else Tt={lane:0,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},G===null?(C=G=Tt,T=m):G=G.next=Tt,_e.lanes|=it,da|=it;Tt=et.action,Ka&&s(m,Tt),m=et.hasEagerState?et.eagerState:s(m,Tt)}else it={lane:Tt,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},G===null?(C=G=it,T=m):G=G.next=it,_e.lanes|=Tt,da|=Tt;et=et.next}while(et!==null&&et!==r);if(G===null?T=m:G.next=C,!li(m,e.memoizedState)&&(Nn=!0,vt&&(s=Us,s!==null)))throw s;e.memoizedState=m,e.baseState=T,e.baseQueue=G,l.lastRenderedState=m}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ad(e){var r=bn(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,m=r.memoizedState;if(f!==null){s.pending=null;var T=f=f.next;do m=e(m,T.action),T=T.next;while(T!==f);li(m,r.memoizedState)||(Nn=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),s.lastRenderedState=m}return[m,l]}function o0(e,r,s){var l=_e,f=bn(),m=Be;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=r();var T=!li((Xe||f).memoizedState,s);T&&(f.memoizedState=s,Nn=!0),f=f.queue;var C=u0.bind(null,l,f,e);if(el(2048,8,C,[e]),f.getSnapshot!==r||T||xn!==null&&xn.memoizedState.tag&1){if(l.flags|=2048,Ps(9,Lc(),c0.bind(null,l,f,s,r),null),nn===null)throw Error(a(349));m||(aa&124)!==0||l0(l,r,s)}return s}function l0(e,r,s){e.flags|=16384,e={getSnapshot:r,value:s},r=_e.updateQueue,r===null?(r=Md(),_e.updateQueue=r,r.stores=[e]):(s=r.stores,s===null?r.stores=[e]:s.push(e))}function c0(e,r,s,l){r.value=s,r.getSnapshot=l,f0(r)&&d0(e)}function u0(e,r,s){return s(function(){f0(r)&&d0(e)})}function f0(e){var r=e.getSnapshot;e=e.value;try{var s=r();return!li(e,s)}catch{return!0}}function d0(e){var r=As(e,2);r!==null&&pi(r,e,2)}function Rd(e){var r=Jn();if(typeof e=="function"){var s=e;if(e=s(),Ka){wt(!0);try{s()}finally{wt(!1)}}}return r.memoizedState=r.baseState=e,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:e},r}function h0(e,r,s,l){return e.baseState=s,Td(e,Xe,typeof l=="function"?l:Tr)}function sM(e,r,s,l,f){if(Oc(e))throw Error(a(485));if(e=r.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){m.listeners.push(T)}};F.T!==null?s(!0):m.isTransition=!1,l(m),s=r.pending,s===null?(m.next=r.pending=m,p0(r,m)):(m.next=s.next,r.pending=s.next=m)}}function p0(e,r){var s=r.action,l=r.payload,f=e.state;if(r.isTransition){var m=F.T,T={};F.T=T;try{var C=s(f,l),G=F.S;G!==null&&G(T,C),m0(e,r,C)}catch(et){Cd(e,r,et)}finally{F.T=m}}else try{m=s(f,l),m0(e,r,m)}catch(et){Cd(e,r,et)}}function m0(e,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){g0(e,r,l)},function(l){return Cd(e,r,l)}):g0(e,r,s)}function g0(e,r,s){r.status="fulfilled",r.value=s,v0(r),e.state=s,r=e.pending,r!==null&&(s=r.next,s===r?e.pending=null:(s=s.next,r.next=s,p0(e,s)))}function Cd(e,r,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=s,v0(r),r=r.next;while(r!==l)}e.action=null}function v0(e){e=e.listeners;for(var r=0;r<e.length;r++)(0,e[r])()}function _0(e,r){return r}function y0(e,r){if(Be){var s=nn.formState;if(s!==null){t:{var l=_e;if(Be){if(un){e:{for(var f=un,m=er;f.nodeType!==8;){if(!m){f=null;break e}if(f=Vi(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){un=Vi(f.nextSibling),l=f.data==="F!";break t}}qa(l)}l=!1}l&&(r=s[0])}}return s=Jn(),s.memoizedState=s.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_0,lastRenderedState:r},s.queue=l,s=z0.bind(null,_e,l),l.dispatch=s,l=Rd(!1),m=Nd.bind(null,_e,!1,l.queue),l=Jn(),f={state:r,dispatch:null,action:e,pending:null},l.queue=f,s=sM.bind(null,_e,f,m,s),f.dispatch=s,l.memoizedState=e,[r,s,!1]}function S0(e){var r=bn();return x0(r,Xe,e)}function x0(e,r,s){if(r=Td(e,r,_0)[0],e=Uc(Tr)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=tl(r)}catch(T){throw T===jo?Tc:T}else l=r;r=bn();var f=r.queue,m=f.dispatch;return s!==r.memoizedState&&(_e.flags|=2048,Ps(9,Lc(),oM.bind(null,f,s),null)),[l,m,e]}function oM(e,r){e.action=r}function b0(e){var r=bn(),s=Xe;if(s!==null)return x0(r,s,e);bn(),r=r.memoizedState,s=bn();var l=s.queue.dispatch;return s.memoizedState=e,[r,l,!1]}function Ps(e,r,s,l){return e={tag:e,create:s,deps:l,inst:r,next:null},r=_e.updateQueue,r===null&&(r=Md(),_e.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,r.lastEffect=e),e}function Lc(){return{destroy:void 0,resource:void 0}}function M0(){return bn().memoizedState}function Nc(e,r,s,l){var f=Jn();l=l===void 0?null:l,_e.flags|=e,f.memoizedState=Ps(1|r,Lc(),s,l)}function el(e,r,s,l){var f=bn();l=l===void 0?null:l;var m=f.memoizedState.inst;Xe!==null&&l!==null&&_d(l,Xe.memoizedState.deps)?f.memoizedState=Ps(r,m,s,l):(_e.flags|=e,f.memoizedState=Ps(1|r,m,s,l))}function E0(e,r){Nc(8390656,8,e,r)}function T0(e,r){el(2048,8,e,r)}function A0(e,r){return el(4,2,e,r)}function R0(e,r){return el(4,4,e,r)}function C0(e,r){if(typeof r=="function"){e=e();var s=r(e);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function w0(e,r,s){s=s!=null?s.concat([e]):null,el(4,4,C0.bind(null,r,e),s)}function wd(){}function D0(e,r){var s=bn();r=r===void 0?null:r;var l=s.memoizedState;return r!==null&&_d(r,l[1])?l[0]:(s.memoizedState=[e,r],e)}function U0(e,r){var s=bn();r=r===void 0?null:r;var l=s.memoizedState;if(r!==null&&_d(r,l[1]))return l[0];if(l=e(),Ka){wt(!0);try{e()}finally{wt(!1)}}return s.memoizedState=[l,r],l}function Dd(e,r,s){return s===void 0||(aa&1073741824)!==0?e.memoizedState=r:(e.memoizedState=s,e=Ov(),_e.lanes|=e,da|=e,s)}function L0(e,r,s,l){return li(s,r)?s:Ls.current!==null?(e=Dd(e,s,l),li(e,r)||(Nn=!0),e):(aa&42)===0?(Nn=!0,e.memoizedState=s):(e=Ov(),_e.lanes|=e,da|=e,r)}function N0(e,r,s,l,f){var m=Y.p;Y.p=m!==0&&8>m?m:8;var T=F.T,C={};F.T=C,Nd(e,!1,r,s);try{var G=f(),et=F.S;if(et!==null&&et(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var vt=iM(G,l);nl(e,r,vt,hi(e))}else nl(e,r,l,hi(e))}catch(Tt){nl(e,r,{then:function(){},status:"rejected",reason:Tt},hi())}finally{Y.p=m,F.T=T}}function lM(){}function Ud(e,r,s,l){if(e.tag!==5)throw Error(a(476));var f=O0(e).queue;N0(e,f,r,X,s===null?lM:function(){return P0(e),s(l)})}function O0(e){var r=e.memoizedState;if(r!==null)return r;r={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:X},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:s},next:null},e.memoizedState=r,e=e.alternate,e!==null&&(e.memoizedState=r),r}function P0(e){var r=O0(e).next.queue;nl(e,r,{},hi())}function Ld(){return Xn(Sl)}function B0(){return bn().memoizedState}function I0(){return bn().memoizedState}function cM(e){for(var r=e.return;r!==null;){switch(r.tag){case 24:case 3:var s=hi();e=ia(s);var l=ra(r,e,s);l!==null&&(pi(l,r,s),Ko(l,r,s)),r={cache:ld()},e.payload=r;return}r=r.return}}function uM(e,r,s){var l=hi();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Oc(e)?F0(r,s):(s=Qf(e,r,s,l),s!==null&&(pi(s,e,l),H0(s,r,l)))}function z0(e,r,s){var l=hi();nl(e,r,s,l)}function nl(e,r,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Oc(e))F0(r,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var T=r.lastRenderedState,C=m(T,s);if(f.hasEagerState=!0,f.eagerState=C,li(C,T))return vc(e,r,f,0),nn===null&&gc(),!1}catch{}finally{}if(s=Qf(e,r,f,l),s!==null)return pi(s,e,l),H0(s,r,l),!0}return!1}function Nd(e,r,s,l){if(l={lane:2,revertLane:fh(),action:l,hasEagerState:!1,eagerState:null,next:null},Oc(e)){if(r)throw Error(a(479))}else r=Qf(e,s,l,2),r!==null&&pi(r,e,2)}function Oc(e){var r=e.alternate;return e===_e||r!==null&&r===_e}function F0(e,r){Ns=Cc=!0;var s=e.pending;s===null?r.next=r:(r.next=s.next,s.next=r),e.pending=r}function H0(e,r,s){if((s&4194048)!==0){var l=r.lanes;l&=e.pendingLanes,s|=l,r.lanes=s,fe(e,s)}}var Pc={readContext:Xn,use:Dc,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useLayoutEffect:mn,useInsertionEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useSyncExternalStore:mn,useId:mn,useHostTransitionStatus:mn,useFormState:mn,useActionState:mn,useOptimistic:mn,useMemoCache:mn,useCacheRefresh:mn},G0={readContext:Xn,use:Dc,useCallback:function(e,r){return Jn().memoizedState=[e,r===void 0?null:r],e},useContext:Xn,useEffect:E0,useImperativeHandle:function(e,r,s){s=s!=null?s.concat([e]):null,Nc(4194308,4,C0.bind(null,r,e),s)},useLayoutEffect:function(e,r){return Nc(4194308,4,e,r)},useInsertionEffect:function(e,r){Nc(4,2,e,r)},useMemo:function(e,r){var s=Jn();r=r===void 0?null:r;var l=e();if(Ka){wt(!0);try{e()}finally{wt(!1)}}return s.memoizedState=[l,r],l},useReducer:function(e,r,s){var l=Jn();if(s!==void 0){var f=s(r);if(Ka){wt(!0);try{s(r)}finally{wt(!1)}}}else f=r;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=uM.bind(null,_e,e),[l.memoizedState,e]},useRef:function(e){var r=Jn();return e={current:e},r.memoizedState=e},useState:function(e){e=Rd(e);var r=e.queue,s=z0.bind(null,_e,r);return r.dispatch=s,[e.memoizedState,s]},useDebugValue:wd,useDeferredValue:function(e,r){var s=Jn();return Dd(s,e,r)},useTransition:function(){var e=Rd(!1);return e=N0.bind(null,_e,e.queue,!0,!1),Jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,r,s){var l=_e,f=Jn();if(Be){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),nn===null)throw Error(a(349));(we&124)!==0||l0(l,r,s)}f.memoizedState=s;var m={value:s,getSnapshot:r};return f.queue=m,E0(u0.bind(null,l,m,e),[e]),l.flags|=2048,Ps(9,Lc(),c0.bind(null,l,m,s,r),null),s},useId:function(){var e=Jn(),r=nn.identifierPrefix;if(Be){var s=br,l=xr;s=(l&~(1<<32-Dt(l)-1)).toString(32)+s,r="«"+r+"R"+s,s=wc++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=rM++,r="«"+r+"r"+s.toString(32)+"»";return e.memoizedState=r},useHostTransitionStatus:Ld,useFormState:y0,useActionState:y0,useOptimistic:function(e){var r=Jn();r.memoizedState=r.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=Nd.bind(null,_e,!0,s),s.dispatch=r,[e,r]},useMemoCache:Ed,useCacheRefresh:function(){return Jn().memoizedState=cM.bind(null,_e)}},V0={readContext:Xn,use:Dc,useCallback:D0,useContext:Xn,useEffect:T0,useImperativeHandle:w0,useInsertionEffect:A0,useLayoutEffect:R0,useMemo:U0,useReducer:Uc,useRef:M0,useState:function(){return Uc(Tr)},useDebugValue:wd,useDeferredValue:function(e,r){var s=bn();return L0(s,Xe.memoizedState,e,r)},useTransition:function(){var e=Uc(Tr)[0],r=bn().memoizedState;return[typeof e=="boolean"?e:tl(e),r]},useSyncExternalStore:o0,useId:B0,useHostTransitionStatus:Ld,useFormState:S0,useActionState:S0,useOptimistic:function(e,r){var s=bn();return h0(s,Xe,e,r)},useMemoCache:Ed,useCacheRefresh:I0},fM={readContext:Xn,use:Dc,useCallback:D0,useContext:Xn,useEffect:T0,useImperativeHandle:w0,useInsertionEffect:A0,useLayoutEffect:R0,useMemo:U0,useReducer:Ad,useRef:M0,useState:function(){return Ad(Tr)},useDebugValue:wd,useDeferredValue:function(e,r){var s=bn();return Xe===null?Dd(s,e,r):L0(s,Xe.memoizedState,e,r)},useTransition:function(){var e=Ad(Tr)[0],r=bn().memoizedState;return[typeof e=="boolean"?e:tl(e),r]},useSyncExternalStore:o0,useId:B0,useHostTransitionStatus:Ld,useFormState:b0,useActionState:b0,useOptimistic:function(e,r){var s=bn();return Xe!==null?h0(s,Xe,e,r):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Ed,useCacheRefresh:I0},Bs=null,il=0;function Bc(e){var r=il;return il+=1,Bs===null&&(Bs=[]),Jg(Bs,e,r)}function rl(e,r){r=r.props.ref,e.ref=r!==void 0?r:null}function Ic(e,r){throw r.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(r),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e)))}function k0(e){var r=e._init;return r(e._payload)}function X0(e){function r(K,k){if(e){var tt=K.deletions;tt===null?(K.deletions=[k],K.flags|=16):tt.push(k)}}function s(K,k){if(!e)return null;for(;k!==null;)r(K,k),k=k.sibling;return null}function l(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function f(K,k){return K=Sr(K,k),K.index=0,K.sibling=null,K}function m(K,k,tt){return K.index=tt,e?(tt=K.alternate,tt!==null?(tt=tt.index,tt<k?(K.flags|=67108866,k):tt):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function T(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function C(K,k,tt,St){return k===null||k.tag!==6?(k=td(tt,K.mode,St),k.return=K,k):(k=f(k,tt),k.return=K,k)}function G(K,k,tt,St){var jt=tt.type;return jt===M?vt(K,k,tt.props.children,St,tt.key):k!==null&&(k.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===H&&k0(jt)===k.type)?(k=f(k,tt.props),rl(k,tt),k.return=K,k):(k=yc(tt.type,tt.key,tt.props,null,K.mode,St),rl(k,tt),k.return=K,k)}function et(K,k,tt,St){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=ed(tt,K.mode,St),k.return=K,k):(k=f(k,tt.children||[]),k.return=K,k)}function vt(K,k,tt,St,jt){return k===null||k.tag!==7?(k=Va(tt,K.mode,St,jt),k.return=K,k):(k=f(k,tt),k.return=K,k)}function Tt(K,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=td(""+k,K.mode,tt),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case _:return tt=yc(k.type,k.key,k.props,null,K.mode,tt),rl(tt,k),tt.return=K,tt;case x:return k=ed(k,K.mode,tt),k.return=K,k;case H:var St=k._init;return k=St(k._payload),Tt(K,k,tt)}if(lt(k)||j(k))return k=Va(k,K.mode,tt,null),k.return=K,k;if(typeof k.then=="function")return Tt(K,Bc(k),tt);if(k.$$typeof===U)return Tt(K,Mc(K,k),tt);Ic(K,k)}return null}function it(K,k,tt,St){var jt=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return jt!==null?null:C(K,k,""+tt,St);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case _:return tt.key===jt?G(K,k,tt,St):null;case x:return tt.key===jt?et(K,k,tt,St):null;case H:return jt=tt._init,tt=jt(tt._payload),it(K,k,tt,St)}if(lt(tt)||j(tt))return jt!==null?null:vt(K,k,tt,St,null);if(typeof tt.then=="function")return it(K,k,Bc(tt),St);if(tt.$$typeof===U)return it(K,k,Mc(K,tt),St);Ic(K,tt)}return null}function at(K,k,tt,St,jt){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return K=K.get(tt)||null,C(k,K,""+St,jt);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case _:return K=K.get(St.key===null?tt:St.key)||null,G(k,K,St,jt);case x:return K=K.get(St.key===null?tt:St.key)||null,et(k,K,St,jt);case H:var ye=St._init;return St=ye(St._payload),at(K,k,tt,St,jt)}if(lt(St)||j(St))return K=K.get(tt)||null,vt(k,K,St,jt,null);if(typeof St.then=="function")return at(K,k,tt,Bc(St),jt);if(St.$$typeof===U)return at(K,k,tt,Mc(k,St),jt);Ic(k,St)}return null}function ce(K,k,tt,St){for(var jt=null,ye=null,Zt=k,re=k=0,Pn=null;Zt!==null&&re<tt.length;re++){Zt.index>re?(Pn=Zt,Zt=null):Pn=Zt.sibling;var Ne=it(K,Zt,tt[re],St);if(Ne===null){Zt===null&&(Zt=Pn);break}e&&Zt&&Ne.alternate===null&&r(K,Zt),k=m(Ne,k,re),ye===null?jt=Ne:ye.sibling=Ne,ye=Ne,Zt=Pn}if(re===tt.length)return s(K,Zt),Be&&Xa(K,re),jt;if(Zt===null){for(;re<tt.length;re++)Zt=Tt(K,tt[re],St),Zt!==null&&(k=m(Zt,k,re),ye===null?jt=Zt:ye.sibling=Zt,ye=Zt);return Be&&Xa(K,re),jt}for(Zt=l(Zt);re<tt.length;re++)Pn=at(Zt,K,re,tt[re],St),Pn!==null&&(e&&Pn.alternate!==null&&Zt.delete(Pn.key===null?re:Pn.key),k=m(Pn,k,re),ye===null?jt=Pn:ye.sibling=Pn,ye=Pn);return e&&Zt.forEach(function(xa){return r(K,xa)}),Be&&Xa(K,re),jt}function ie(K,k,tt,St){if(tt==null)throw Error(a(151));for(var jt=null,ye=null,Zt=k,re=k=0,Pn=null,Ne=tt.next();Zt!==null&&!Ne.done;re++,Ne=tt.next()){Zt.index>re?(Pn=Zt,Zt=null):Pn=Zt.sibling;var xa=it(K,Zt,Ne.value,St);if(xa===null){Zt===null&&(Zt=Pn);break}e&&Zt&&xa.alternate===null&&r(K,Zt),k=m(xa,k,re),ye===null?jt=xa:ye.sibling=xa,ye=xa,Zt=Pn}if(Ne.done)return s(K,Zt),Be&&Xa(K,re),jt;if(Zt===null){for(;!Ne.done;re++,Ne=tt.next())Ne=Tt(K,Ne.value,St),Ne!==null&&(k=m(Ne,k,re),ye===null?jt=Ne:ye.sibling=Ne,ye=Ne);return Be&&Xa(K,re),jt}for(Zt=l(Zt);!Ne.done;re++,Ne=tt.next())Ne=at(Zt,K,re,Ne.value,St),Ne!==null&&(e&&Ne.alternate!==null&&Zt.delete(Ne.key===null?re:Ne.key),k=m(Ne,k,re),ye===null?jt=Ne:ye.sibling=Ne,ye=Ne);return e&&Zt.forEach(function(dE){return r(K,dE)}),Be&&Xa(K,re),jt}function qe(K,k,tt,St){if(typeof tt=="object"&&tt!==null&&tt.type===M&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case _:t:{for(var jt=tt.key;k!==null;){if(k.key===jt){if(jt=tt.type,jt===M){if(k.tag===7){s(K,k.sibling),St=f(k,tt.props.children),St.return=K,K=St;break t}}else if(k.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===H&&k0(jt)===k.type){s(K,k.sibling),St=f(k,tt.props),rl(St,tt),St.return=K,K=St;break t}s(K,k);break}else r(K,k);k=k.sibling}tt.type===M?(St=Va(tt.props.children,K.mode,St,tt.key),St.return=K,K=St):(St=yc(tt.type,tt.key,tt.props,null,K.mode,St),rl(St,tt),St.return=K,K=St)}return T(K);case x:t:{for(jt=tt.key;k!==null;){if(k.key===jt)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){s(K,k.sibling),St=f(k,tt.children||[]),St.return=K,K=St;break t}else{s(K,k);break}else r(K,k);k=k.sibling}St=ed(tt,K.mode,St),St.return=K,K=St}return T(K);case H:return jt=tt._init,tt=jt(tt._payload),qe(K,k,tt,St)}if(lt(tt))return ce(K,k,tt,St);if(j(tt)){if(jt=j(tt),typeof jt!="function")throw Error(a(150));return tt=jt.call(tt),ie(K,k,tt,St)}if(typeof tt.then=="function")return qe(K,k,Bc(tt),St);if(tt.$$typeof===U)return qe(K,k,Mc(K,tt),St);Ic(K,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(s(K,k.sibling),St=f(k,tt),St.return=K,K=St):(s(K,k),St=td(tt,K.mode,St),St.return=K,K=St),T(K)):s(K,k)}return function(K,k,tt,St){try{il=0;var jt=qe(K,k,tt,St);return Bs=null,jt}catch(Zt){if(Zt===jo||Zt===Tc)throw Zt;var ye=ci(29,Zt,null,K.mode);return ye.lanes=St,ye.return=K,ye}finally{}}}var Is=X0(!0),W0=X0(!1),Ci=$(null),nr=null;function sa(e){var r=e.alternate;Mt(Rn,Rn.current&1),Mt(Ci,e),nr===null&&(r===null||Ls.current!==null||r.memoizedState!==null)&&(nr=e)}function q0(e){if(e.tag===22){if(Mt(Rn,Rn.current),Mt(Ci,e),nr===null){var r=e.alternate;r!==null&&r.memoizedState!==null&&(nr=e)}}else oa()}function oa(){Mt(Rn,Rn.current),Mt(Ci,Ci.current)}function Ar(e){pt(Ci),nr===e&&(nr=null),pt(Rn)}var Rn=$(0);function zc(e){for(var r=e;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Mh(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Od(e,r,s,l){r=e.memoizedState,s=s(l,r),s=s==null?r:g({},r,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Pd={enqueueSetState:function(e,r,s){e=e._reactInternals;var l=hi(),f=ia(l);f.payload=r,s!=null&&(f.callback=s),r=ra(e,f,l),r!==null&&(pi(r,e,l),Ko(r,e,l))},enqueueReplaceState:function(e,r,s){e=e._reactInternals;var l=hi(),f=ia(l);f.tag=1,f.payload=r,s!=null&&(f.callback=s),r=ra(e,f,l),r!==null&&(pi(r,e,l),Ko(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var s=hi(),l=ia(s);l.tag=2,r!=null&&(l.callback=r),r=ra(e,l,s),r!==null&&(pi(r,e,s),Ko(r,e,s))}};function Y0(e,r,s,l,f,m,T){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,T):r.prototype&&r.prototype.isPureReactComponent?!Ho(s,l)||!Ho(f,m):!0}function j0(e,r,s,l){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,l),r.state!==e&&Pd.enqueueReplaceState(r,r.state,null)}function Za(e,r){var s=r;if("ref"in r){s={};for(var l in r)l!=="ref"&&(s[l]=r[l])}if(e=e.defaultProps){s===r&&(s=g({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}var Fc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function $0(e){Fc(e)}function K0(e){console.error(e)}function Z0(e){Fc(e)}function Hc(e,r){try{var s=e.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function Q0(e,r,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Bd(e,r,s){return s=ia(s),s.tag=3,s.payload={element:null},s.callback=function(){Hc(e,r)},s}function J0(e){return e=ia(e),e.tag=3,e}function tv(e,r,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;e.payload=function(){return f(m)},e.callback=function(){Q0(r,s,l)}}var T=s.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(e.callback=function(){Q0(r,s,l),typeof f!="function"&&(ha===null?ha=new Set([this]):ha.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function dM(e,r,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=s.alternate,r!==null&&Wo(r,s,f,!0),s=Ci.current,s!==null){switch(s.tag){case 13:return nr===null?sh():s.alternate===null&&fn===0&&(fn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===fd?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([l]):r.add(l),lh(e,l,f)),!1;case 22:return s.flags|=65536,l===fd?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([l]):s.add(l)),lh(e,l,f)),!1}throw Error(a(435,s.tag))}return lh(e,l,f),sh(),!1}if(Be)return r=Ci.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,l!==rd&&(e=Error(a(422),{cause:l}),Xo(Ei(e,s)))):(l!==rd&&(r=Error(a(423),{cause:l}),Xo(Ei(r,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=Ei(l,s),f=Bd(e.stateNode,l,f),pd(e,f),fn!==4&&(fn=2)),!1;var m=Error(a(520),{cause:l});if(m=Ei(m,s),fl===null?fl=[m]:fl.push(m),fn!==4&&(fn=2),r===null)return!0;l=Ei(l,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=Bd(s.stateNode,l,e),pd(s,e),!1;case 1:if(r=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ha===null||!ha.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=J0(f),tv(f,e,s,l),pd(s,f),!1}s=s.return}while(s!==null);return!1}var ev=Error(a(461)),Nn=!1;function zn(e,r,s,l){r.child=e===null?W0(r,null,s,l):Is(r,e.child,s,l)}function nv(e,r,s,l,f){s=s.render;var m=r.ref;if("ref"in l){var T={};for(var C in l)C!=="ref"&&(T[C]=l[C])}else T=l;return ja(r),l=yd(e,r,s,T,m,f),C=Sd(),e!==null&&!Nn?(xd(e,r,f),Rr(e,r,f)):(Be&&C&&nd(r),r.flags|=1,zn(e,r,l,f),r.child)}function iv(e,r,s,l,f){if(e===null){var m=s.type;return typeof m=="function"&&!Jf(m)&&m.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=m,rv(e,r,m,l,f)):(e=yc(s.type,null,l,r,r.mode,f),e.ref=r.ref,e.return=r,r.child=e)}if(m=e.child,!Xd(e,f)){var T=m.memoizedProps;if(s=s.compare,s=s!==null?s:Ho,s(T,l)&&e.ref===r.ref)return Rr(e,r,f)}return r.flags|=1,e=Sr(m,l),e.ref=r.ref,e.return=r,r.child=e}function rv(e,r,s,l,f){if(e!==null){var m=e.memoizedProps;if(Ho(m,l)&&e.ref===r.ref)if(Nn=!1,r.pendingProps=l=m,Xd(e,f))(e.flags&131072)!==0&&(Nn=!0);else return r.lanes=e.lanes,Rr(e,r,f)}return Id(e,r,s,l,f)}function av(e,r,s){var l=r.pendingProps,f=l.children,m=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,e!==null){for(f=r.child=e.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~l}else r.childLanes=0,r.child=null;return sv(e,r,l,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ec(r,m!==null?m.cachePool:null),m!==null?r0(r,m):gd(),q0(r);else return r.lanes=r.childLanes=536870912,sv(e,r,m!==null?m.baseLanes|s:s,s)}else m!==null?(Ec(r,m.cachePool),r0(r,m),oa(),r.memoizedState=null):(e!==null&&Ec(r,null),gd(),oa());return zn(e,r,f,s),r.child}function sv(e,r,s,l){var f=ud();return f=f===null?null:{parent:An._currentValue,pool:f},r.memoizedState={baseLanes:s,cachePool:f},e!==null&&Ec(r,null),gd(),q0(r),e!==null&&Wo(e,r,l,!0),null}function Gc(e,r){var s=r.ref;if(s===null)e!==null&&e.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(r.flags|=4194816)}}function Id(e,r,s,l,f){return ja(r),s=yd(e,r,s,l,void 0,f),l=Sd(),e!==null&&!Nn?(xd(e,r,f),Rr(e,r,f)):(Be&&l&&nd(r),r.flags|=1,zn(e,r,s,f),r.child)}function ov(e,r,s,l,f,m){return ja(r),r.updateQueue=null,s=s0(r,l,s,f),a0(e),l=Sd(),e!==null&&!Nn?(xd(e,r,m),Rr(e,r,m)):(Be&&l&&nd(r),r.flags|=1,zn(e,r,s,m),r.child)}function lv(e,r,s,l,f){if(ja(r),r.stateNode===null){var m=Rs,T=s.contextType;typeof T=="object"&&T!==null&&(m=Xn(T)),m=new s(l,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Pd,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=l,m.state=r.memoizedState,m.refs={},dd(r),T=s.contextType,m.context=typeof T=="object"&&T!==null?Xn(T):Rs,m.state=r.memoizedState,T=s.getDerivedStateFromProps,typeof T=="function"&&(Od(r,s,T,l),m.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(T=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),T!==m.state&&Pd.enqueueReplaceState(m,m.state,null),Qo(r,l,m,f),Zo(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(e===null){m=r.stateNode;var C=r.memoizedProps,G=Za(s,C);m.props=G;var et=m.context,vt=s.contextType;T=Rs,typeof vt=="object"&&vt!==null&&(T=Xn(vt));var Tt=s.getDerivedStateFromProps;vt=typeof Tt=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=r.pendingProps!==C,vt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||et!==T)&&j0(r,m,l,T),na=!1;var it=r.memoizedState;m.state=it,Qo(r,l,m,f),Zo(),et=r.memoizedState,C||it!==et||na?(typeof Tt=="function"&&(Od(r,s,Tt,l),et=r.memoizedState),(G=na||Y0(r,s,G,l,it,et,T))?(vt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=et),m.props=l,m.state=et,m.context=T,l=G):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{m=r.stateNode,hd(e,r),T=r.memoizedProps,vt=Za(s,T),m.props=vt,Tt=r.pendingProps,it=m.context,et=s.contextType,G=Rs,typeof et=="object"&&et!==null&&(G=Xn(et)),C=s.getDerivedStateFromProps,(et=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T!==Tt||it!==G)&&j0(r,m,l,G),na=!1,it=r.memoizedState,m.state=it,Qo(r,l,m,f),Zo();var at=r.memoizedState;T!==Tt||it!==at||na||e!==null&&e.dependencies!==null&&bc(e.dependencies)?(typeof C=="function"&&(Od(r,s,C,l),at=r.memoizedState),(vt=na||Y0(r,s,vt,l,it,at,G)||e!==null&&e.dependencies!==null&&bc(e.dependencies))?(et||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,at,G),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,at,G)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||T===e.memoizedProps&&it===e.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&it===e.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=at),m.props=l,m.state=at,m.context=G,l=vt):(typeof m.componentDidUpdate!="function"||T===e.memoizedProps&&it===e.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&it===e.memoizedState||(r.flags|=1024),l=!1)}return m=l,Gc(e,r),l=(r.flags&128)!==0,m||l?(m=r.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,e!==null&&l?(r.child=Is(r,e.child,null,f),r.child=Is(r,null,s,f)):zn(e,r,s,f),r.memoizedState=m.state,e=r.child):e=Rr(e,r,f),e}function cv(e,r,s,l){return ko(),r.flags|=256,zn(e,r,s,l),r.child}var zd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fd(e){return{baseLanes:e,cachePool:Kg()}}function Hd(e,r,s){return e=e!==null?e.childLanes&~s:0,r&&(e|=wi),e}function uv(e,r,s){var l=r.pendingProps,f=!1,m=(r.flags&128)!==0,T;if((T=m)||(T=e!==null&&e.memoizedState===null?!1:(Rn.current&2)!==0),T&&(f=!0,r.flags&=-129),T=(r.flags&32)!==0,r.flags&=-33,e===null){if(Be){if(f?sa(r):oa(),Be){var C=un,G;if(G=C){t:{for(G=C,C=er;G.nodeType!==8;){if(!C){C=null;break t}if(G=Vi(G.nextSibling),G===null){C=null;break t}}C=G}C!==null?(r.memoizedState={dehydrated:C,treeContext:ka!==null?{id:xr,overflow:br}:null,retryLane:536870912,hydrationErrors:null},G=ci(18,null,null,0),G.stateNode=C,G.return=r,r.child=G,Kn=r,un=null,G=!0):G=!1}G||qa(r)}if(C=r.memoizedState,C!==null&&(C=C.dehydrated,C!==null))return Mh(C)?r.lanes=32:r.lanes=536870912,null;Ar(r)}return C=l.children,l=l.fallback,f?(oa(),f=r.mode,C=Vc({mode:"hidden",children:C},f),l=Va(l,f,s,null),C.return=r,l.return=r,C.sibling=l,r.child=C,f=r.child,f.memoizedState=Fd(s),f.childLanes=Hd(e,T,s),r.memoizedState=zd,l):(sa(r),Gd(r,C))}if(G=e.memoizedState,G!==null&&(C=G.dehydrated,C!==null)){if(m)r.flags&256?(sa(r),r.flags&=-257,r=Vd(e,r,s)):r.memoizedState!==null?(oa(),r.child=e.child,r.flags|=128,r=null):(oa(),f=l.fallback,C=r.mode,l=Vc({mode:"visible",children:l.children},C),f=Va(f,C,s,null),f.flags|=2,l.return=r,f.return=r,l.sibling=f,r.child=l,Is(r,e.child,null,s),l=r.child,l.memoizedState=Fd(s),l.childLanes=Hd(e,T,s),r.memoizedState=zd,r=f);else if(sa(r),Mh(C)){if(T=C.nextSibling&&C.nextSibling.dataset,T)var et=T.dgst;T=et,l=Error(a(419)),l.stack="",l.digest=T,Xo({value:l,source:null,stack:null}),r=Vd(e,r,s)}else if(Nn||Wo(e,r,s,!1),T=(s&e.childLanes)!==0,Nn||T){if(T=nn,T!==null&&(l=s&-s,l=(l&42)!==0?1:ke(l),l=(l&(T.suspendedLanes|s))!==0?0:l,l!==0&&l!==G.retryLane))throw G.retryLane=l,As(e,l),pi(T,e,l),ev;C.data==="$?"||sh(),r=Vd(e,r,s)}else C.data==="$?"?(r.flags|=192,r.child=e.child,r=null):(e=G.treeContext,un=Vi(C.nextSibling),Kn=r,Be=!0,Wa=null,er=!1,e!==null&&(Ai[Ri++]=xr,Ai[Ri++]=br,Ai[Ri++]=ka,xr=e.id,br=e.overflow,ka=r),r=Gd(r,l.children),r.flags|=4096);return r}return f?(oa(),f=l.fallback,C=r.mode,G=e.child,et=G.sibling,l=Sr(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,et!==null?f=Sr(et,f):(f=Va(f,C,s,null),f.flags|=2),f.return=r,l.return=r,l.sibling=f,r.child=l,l=f,f=r.child,C=e.child.memoizedState,C===null?C=Fd(s):(G=C.cachePool,G!==null?(et=An._currentValue,G=G.parent!==et?{parent:et,pool:et}:G):G=Kg(),C={baseLanes:C.baseLanes|s,cachePool:G}),f.memoizedState=C,f.childLanes=Hd(e,T,s),r.memoizedState=zd,l):(sa(r),s=e.child,e=s.sibling,s=Sr(s,{mode:"visible",children:l.children}),s.return=r,s.sibling=null,e!==null&&(T=r.deletions,T===null?(r.deletions=[e],r.flags|=16):T.push(e)),r.child=s,r.memoizedState=null,s)}function Gd(e,r){return r=Vc({mode:"visible",children:r},e.mode),r.return=e,e.child=r}function Vc(e,r){return e=ci(22,e,null,r),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Vd(e,r,s){return Is(r,e.child,null,s),e=Gd(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function fv(e,r,s){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r),sd(e.return,r,s)}function kd(e,r,s,l,f){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=f)}function dv(e,r,s){var l=r.pendingProps,f=l.revealOrder,m=l.tail;if(zn(e,r,l.children,s),l=Rn.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fv(e,s,r);else if(e.tag===19)fv(e,s,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break t;for(;e.sibling===null;){if(e.return===null||e.return===r)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Mt(Rn,l),f){case"forwards":for(s=r.child,f=null;s!==null;)e=s.alternate,e!==null&&zc(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=r.child,r.child=null):(f=s.sibling,s.sibling=null),kd(r,!1,f,s,m);break;case"backwards":for(s=null,f=r.child,r.child=null;f!==null;){if(e=f.alternate,e!==null&&zc(e)===null){r.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}kd(r,!0,s,null,m);break;case"together":kd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Rr(e,r,s){if(e!==null&&(r.dependencies=e.dependencies),da|=r.lanes,(s&r.childLanes)===0)if(e!==null){if(Wo(e,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(e!==null&&r.child!==e.child)throw Error(a(153));if(r.child!==null){for(e=r.child,s=Sr(e,e.pendingProps),r.child=s,s.return=r;e.sibling!==null;)e=e.sibling,s=s.sibling=Sr(e,e.pendingProps),s.return=r;s.sibling=null}return r.child}function Xd(e,r){return(e.lanes&r)!==0?!0:(e=e.dependencies,!!(e!==null&&bc(e)))}function hM(e,r,s){switch(r.tag){case 3:Ut(r,r.stateNode.containerInfo),ea(r,An,e.memoizedState.cache),ko();break;case 27:case 5:Kt(r);break;case 4:Ut(r,r.stateNode.containerInfo);break;case 10:ea(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(sa(r),r.flags|=128,null):(s&r.child.childLanes)!==0?uv(e,r,s):(sa(r),e=Rr(e,r,s),e!==null?e.sibling:null);sa(r);break;case 19:var f=(e.flags&128)!==0;if(l=(s&r.childLanes)!==0,l||(Wo(e,r,s,!1),l=(s&r.childLanes)!==0),f){if(l)return dv(e,r,s);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Mt(Rn,Rn.current),l)break;return null;case 22:case 23:return r.lanes=0,av(e,r,s);case 24:ea(r,An,e.memoizedState.cache)}return Rr(e,r,s)}function hv(e,r,s){if(e!==null)if(e.memoizedProps!==r.pendingProps)Nn=!0;else{if(!Xd(e,s)&&(r.flags&128)===0)return Nn=!1,hM(e,r,s);Nn=(e.flags&131072)!==0}else Nn=!1,Be&&(r.flags&1048576)!==0&&kg(r,xc,r.index);switch(r.lanes=0,r.tag){case 16:t:{e=r.pendingProps;var l=r.elementType,f=l._init;if(l=f(l._payload),r.type=l,typeof l=="function")Jf(l)?(e=Za(l,e),r.tag=1,r=lv(null,r,l,e,s)):(r.tag=0,r=Id(null,r,l,e,s));else{if(l!=null){if(f=l.$$typeof,f===R){r.tag=11,r=nv(null,r,l,e,s);break t}else if(f===I){r.tag=14,r=iv(null,r,l,e,s);break t}}throw r=rt(l)||l,Error(a(306,r,""))}}return r;case 0:return Id(e,r,r.type,r.pendingProps,s);case 1:return l=r.type,f=Za(l,r.pendingProps),lv(e,r,l,f,s);case 3:t:{if(Ut(r,r.stateNode.containerInfo),e===null)throw Error(a(387));l=r.pendingProps;var m=r.memoizedState;f=m.element,hd(e,r),Qo(r,l,null,s);var T=r.memoizedState;if(l=T.cache,ea(r,An,l),l!==m.cache&&od(r,[An],s,!0),Zo(),l=T.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:T.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=cv(e,r,l,s);break t}else if(l!==f){f=Ei(Error(a(424)),r),Xo(f),r=cv(e,r,l,s);break t}else{switch(e=r.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(un=Vi(e.firstChild),Kn=r,Be=!0,Wa=null,er=!0,s=W0(r,null,l,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ko(),l===f){r=Rr(e,r,s);break t}zn(e,r,l,s)}r=r.child}return r;case 26:return Gc(e,r),e===null?(s=v_(r.type,null,r.pendingProps,null))?r.memoizedState=s:Be||(s=r.type,e=r.pendingProps,l=nu(yt.current).createElement(s),l[ne]=r,l[se]=e,Hn(l,s,e),Sn(l),r.stateNode=l):r.memoizedState=v_(r.type,e.memoizedProps,r.pendingProps,e.memoizedState),null;case 27:return Kt(r),e===null&&Be&&(l=r.stateNode=p_(r.type,r.pendingProps,yt.current),Kn=r,er=!0,f=un,ga(r.type)?(Eh=f,un=Vi(l.firstChild)):un=f),zn(e,r,r.pendingProps.children,s),Gc(e,r),e===null&&(r.flags|=4194304),r.child;case 5:return e===null&&Be&&((f=l=un)&&(l=GM(l,r.type,r.pendingProps,er),l!==null?(r.stateNode=l,Kn=r,un=Vi(l.firstChild),er=!1,f=!0):f=!1),f||qa(r)),Kt(r),f=r.type,m=r.pendingProps,T=e!==null?e.memoizedProps:null,l=m.children,Sh(f,m)?l=null:T!==null&&Sh(f,T)&&(r.flags|=32),r.memoizedState!==null&&(f=yd(e,r,aM,null,null,s),Sl._currentValue=f),Gc(e,r),zn(e,r,l,s),r.child;case 6:return e===null&&Be&&((e=s=un)&&(s=VM(s,r.pendingProps,er),s!==null?(r.stateNode=s,Kn=r,un=null,e=!0):e=!1),e||qa(r)),null;case 13:return uv(e,r,s);case 4:return Ut(r,r.stateNode.containerInfo),l=r.pendingProps,e===null?r.child=Is(r,null,l,s):zn(e,r,l,s),r.child;case 11:return nv(e,r,r.type,r.pendingProps,s);case 7:return zn(e,r,r.pendingProps,s),r.child;case 8:return zn(e,r,r.pendingProps.children,s),r.child;case 12:return zn(e,r,r.pendingProps.children,s),r.child;case 10:return l=r.pendingProps,ea(r,r.type,l.value),zn(e,r,l.children,s),r.child;case 9:return f=r.type._context,l=r.pendingProps.children,ja(r),f=Xn(f),l=l(f),r.flags|=1,zn(e,r,l,s),r.child;case 14:return iv(e,r,r.type,r.pendingProps,s);case 15:return rv(e,r,r.type,r.pendingProps,s);case 19:return dv(e,r,s);case 31:return l=r.pendingProps,s=r.mode,l={mode:l.mode,children:l.children},e===null?(s=Vc(l,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=Sr(e.child,l),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return av(e,r,s);case 24:return ja(r),l=Xn(An),e===null?(f=ud(),f===null&&(f=nn,m=ld(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),r.memoizedState={parent:l,cache:f},dd(r),ea(r,An,f)):((e.lanes&s)!==0&&(hd(e,r),Qo(r,null,null,s),Zo()),f=e.memoizedState,m=r.memoizedState,f.parent!==l?(f={parent:l,cache:l},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),ea(r,An,l)):(l=m.cache,ea(r,An,l),l!==f.cache&&od(r,[An],s,!0))),zn(e,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function Cr(e){e.flags|=4}function pv(e,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!b_(r)){if(r=Ci.current,r!==null&&((we&4194048)===we?nr!==null:(we&62914560)!==we&&(we&536870912)===0||r!==nr))throw $o=fd,Zg;e.flags|=8192}}function kc(e,r){r!==null&&(e.flags|=4),e.flags&16384&&(r=e.tag!==22?Bt():536870912,e.lanes|=r,Gs|=r)}function al(e,r){if(!Be)switch(e.tailMode){case"hidden":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function on(e){var r=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(r)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,r}function pM(e,r,s){var l=r.pendingProps;switch(id(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(r),null;case 1:return on(r),null;case 3:return s=r.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Er(An),ue(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Vo(r)?Cr(r):e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,qg())),on(r),null;case 26:return s=r.memoizedState,e===null?(Cr(r),s!==null?(on(r),pv(r,s)):(on(r),r.flags&=-16777217)):s?s!==e.memoizedState?(Cr(r),on(r),pv(r,s)):(on(r),r.flags&=-16777217):(e.memoizedProps!==l&&Cr(r),on(r),r.flags&=-16777217),null;case 27:Ue(r),s=yt.current;var f=r.type;if(e!==null&&r.stateNode!=null)e.memoizedProps!==l&&Cr(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return on(r),null}e=J.current,Vo(r)?Xg(r):(e=p_(f,l,s),r.stateNode=e,Cr(r))}return on(r),null;case 5:if(Ue(r),s=r.type,e!==null&&r.stateNode!=null)e.memoizedProps!==l&&Cr(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return on(r),null}if(e=J.current,Vo(r))Xg(r);else{switch(f=nu(yt.current),e){case 1:e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}e[ne]=r,e[se]=l;t:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)e.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break t;for(;f.sibling===null;){if(f.return===null||f.return===r)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=e;t:switch(Hn(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Cr(r)}}return on(r),r.flags&=-16777217,null;case 6:if(e&&r.stateNode!=null)e.memoizedProps!==l&&Cr(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(a(166));if(e=yt.current,Vo(r)){if(e=r.stateNode,s=r.memoizedProps,l=null,f=Kn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[ne]=r,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||o_(e.nodeValue,s)),e||qa(r)}else e=nu(e).createTextNode(l),e[ne]=r,r.stateNode=e}return on(r),null;case 13:if(l=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Vo(r),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[ne]=r}else ko(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;on(r),f=!1}else f=qg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(Ar(r),r):(Ar(r),null)}if(Ar(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=r.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return s!==e&&s&&(r.child.flags|=8192),kc(r,r.updateQueue),on(r),null;case 4:return ue(),e===null&&mh(r.stateNode.containerInfo),on(r),null;case 10:return Er(r.type),on(r),null;case 19:if(pt(Rn),f=r.memoizedState,f===null)return on(r),null;if(l=(r.flags&128)!==0,m=f.rendering,m===null)if(l)al(f,!1);else{if(fn!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(m=zc(e),m!==null){for(r.flags|=128,al(f,!1),e=m.updateQueue,r.updateQueue=e,kc(r,e),r.subtreeFlags=0,e=s,s=r.child;s!==null;)Vg(s,e),s=s.sibling;return Mt(Rn,Rn.current&1|2),r.child}e=e.sibling}f.tail!==null&&$t()>qc&&(r.flags|=128,l=!0,al(f,!1),r.lanes=4194304)}else{if(!l)if(e=zc(m),e!==null){if(r.flags|=128,l=!0,e=e.updateQueue,r.updateQueue=e,kc(r,e),al(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Be)return on(r),null}else 2*$t()-f.renderingStartTime>qc&&s!==536870912&&(r.flags|=128,l=!0,al(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(e=f.last,e!==null?e.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=$t(),r.sibling=null,e=Rn.current,Mt(Rn,l?e&1|2:e&1),r):(on(r),null);case 22:case 23:return Ar(r),vd(),l=r.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(s&536870912)!==0&&(r.flags&128)===0&&(on(r),r.subtreeFlags&6&&(r.flags|=8192)):on(r),s=r.updateQueue,s!==null&&kc(r,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==s&&(r.flags|=2048),e!==null&&pt($a),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Er(An),on(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function mM(e,r){switch(id(r),r.tag){case 1:return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Er(An),ue(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 26:case 27:case 5:return Ue(r),null;case 13:if(Ar(r),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(a(340));ko()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return pt(Rn),null;case 4:return ue(),null;case 10:return Er(r.type),null;case 22:case 23:return Ar(r),vd(),e!==null&&pt($a),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 24:return Er(An),null;case 25:return null;default:return null}}function mv(e,r){switch(id(r),r.tag){case 3:Er(An),ue();break;case 26:case 27:case 5:Ue(r);break;case 4:ue();break;case 13:Ar(r);break;case 19:pt(Rn);break;case 10:Er(r.type);break;case 22:case 23:Ar(r),vd(),e!==null&&pt($a);break;case 24:Er(An)}}function sl(e,r){try{var s=r.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var m=s.create,T=s.inst;l=m(),T.destroy=l}s=s.next}while(s!==f)}}catch(C){Qe(r,r.return,C)}}function la(e,r,s){try{var l=r.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&e)===e){var T=l.inst,C=T.destroy;if(C!==void 0){T.destroy=void 0,f=r;var G=s,et=C;try{et()}catch(vt){Qe(f,G,vt)}}}l=l.next}while(l!==m)}}catch(vt){Qe(r,r.return,vt)}}function gv(e){var r=e.updateQueue;if(r!==null){var s=e.stateNode;try{i0(r,s)}catch(l){Qe(e,e.return,l)}}}function vv(e,r,s){s.props=Za(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Qe(e,r,l)}}function ol(e,r){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(f){Qe(e,r,f)}}function ir(e,r){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Qe(e,r,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Qe(e,r,f)}else s.current=null}function _v(e){var r=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Qe(e,e.return,f)}}function Wd(e,r,s){try{var l=e.stateNode;BM(l,e.type,s,r),l[se]=r}catch(f){Qe(e,e.return,f)}}function yv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ga(e.type)||e.tag===4}function qd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||yv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yd(e,r,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(e),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=eu));else if(l!==4&&(l===27&&ga(e.type)&&(s=e.stateNode,r=null),e=e.child,e!==null))for(Yd(e,r,s),e=e.sibling;e!==null;)Yd(e,r,s),e=e.sibling}function Xc(e,r,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?s.insertBefore(e,r):s.appendChild(e);else if(l!==4&&(l===27&&ga(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Xc(e,r,s),e=e.sibling;e!==null;)Xc(e,r,s),e=e.sibling}function Sv(e){var r=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);Hn(r,l,s),r[ne]=e,r[se]=s}catch(m){Qe(e,e.return,m)}}var wr=!1,gn=!1,jd=!1,xv=typeof WeakSet=="function"?WeakSet:Set,On=null;function gM(e,r){if(e=e.containerInfo,_h=lu,e=Lg(e),qf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var T=0,C=-1,G=-1,et=0,vt=0,Tt=e,it=null;e:for(;;){for(var at;Tt!==s||f!==0&&Tt.nodeType!==3||(C=T+f),Tt!==m||l!==0&&Tt.nodeType!==3||(G=T+l),Tt.nodeType===3&&(T+=Tt.nodeValue.length),(at=Tt.firstChild)!==null;)it=Tt,Tt=at;for(;;){if(Tt===e)break e;if(it===s&&++et===f&&(C=T),it===m&&++vt===l&&(G=T),(at=Tt.nextSibling)!==null)break;Tt=it,it=Tt.parentNode}Tt=at}s=C===-1||G===-1?null:{start:C,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(yh={focusedElem:e,selectionRange:s},lu=!1,On=r;On!==null;)if(r=On,e=r.child,(r.subtreeFlags&1024)!==0&&e!==null)e.return=r,On=e;else for(;On!==null;){switch(r=On,m=r.alternate,e=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=r,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var ce=Za(s.type,f,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(ce,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Qe(s,s.return,ie)}}break;case 3:if((e&1024)!==0){if(e=r.stateNode.containerInfo,s=e.nodeType,s===9)bh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=r.sibling,e!==null){e.return=r.return,On=e;break}On=r.return}}function bv(e,r,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ca(e,s),l&4&&sl(5,s);break;case 1:if(ca(e,s),l&4)if(e=s.stateNode,r===null)try{e.componentDidMount()}catch(T){Qe(s,s.return,T)}else{var f=Za(s.type,r.memoizedProps);r=r.memoizedState;try{e.componentDidUpdate(f,r,e.__reactInternalSnapshotBeforeUpdate)}catch(T){Qe(s,s.return,T)}}l&64&&gv(s),l&512&&ol(s,s.return);break;case 3:if(ca(e,s),l&64&&(e=s.updateQueue,e!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{i0(e,r)}catch(T){Qe(s,s.return,T)}}break;case 27:r===null&&l&4&&Sv(s);case 26:case 5:ca(e,s),r===null&&l&4&&_v(s),l&512&&ol(s,s.return);break;case 12:ca(e,s);break;case 13:ca(e,s),l&4&&Tv(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=TM.bind(null,s),kM(e,s))));break;case 22:if(l=s.memoizedState!==null||wr,!l){r=r!==null&&r.memoizedState!==null||gn,f=wr;var m=gn;wr=l,(gn=r)&&!m?ua(e,s,(s.subtreeFlags&8772)!==0):ca(e,s),wr=f,gn=m}break;case 30:break;default:ca(e,s)}}function Mv(e){var r=e.alternate;r!==null&&(e.alternate=null,Mv(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&Zr(r)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rn=null,ti=!1;function Dr(e,r,s){for(s=s.child;s!==null;)Ev(e,r,s),s=s.sibling}function Ev(e,r,s){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(gt,s)}catch{}switch(s.tag){case 26:gn||ir(s,r),Dr(e,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:gn||ir(s,r);var l=rn,f=ti;ga(s.type)&&(rn=s.stateNode,ti=!1),Dr(e,r,s),gl(s.stateNode),rn=l,ti=f;break;case 5:gn||ir(s,r);case 6:if(l=rn,f=ti,rn=null,Dr(e,r,s),rn=l,ti=f,rn!==null)if(ti)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(s.stateNode)}catch(m){Qe(s,r,m)}else try{rn.removeChild(s.stateNode)}catch(m){Qe(s,r,m)}break;case 18:rn!==null&&(ti?(e=rn,d_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),El(e)):d_(rn,s.stateNode));break;case 4:l=rn,f=ti,rn=s.stateNode.containerInfo,ti=!0,Dr(e,r,s),rn=l,ti=f;break;case 0:case 11:case 14:case 15:gn||la(2,s,r),gn||la(4,s,r),Dr(e,r,s);break;case 1:gn||(ir(s,r),l=s.stateNode,typeof l.componentWillUnmount=="function"&&vv(s,r,l)),Dr(e,r,s);break;case 21:Dr(e,r,s);break;case 22:gn=(l=gn)||s.memoizedState!==null,Dr(e,r,s),gn=l;break;default:Dr(e,r,s)}}function Tv(e,r){if(r.memoizedState===null&&(e=r.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{El(e)}catch(s){Qe(r,r.return,s)}}function vM(e){switch(e.tag){case 13:case 19:var r=e.stateNode;return r===null&&(r=e.stateNode=new xv),r;case 22:return e=e.stateNode,r=e._retryCache,r===null&&(r=e._retryCache=new xv),r;default:throw Error(a(435,e.tag))}}function $d(e,r){var s=vM(e);r.forEach(function(l){var f=AM.bind(null,e,l);s.has(l)||(s.add(l),l.then(f,f))})}function ui(e,r){var s=r.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=e,T=r,C=T;t:for(;C!==null;){switch(C.tag){case 27:if(ga(C.type)){rn=C.stateNode,ti=!1;break t}break;case 5:rn=C.stateNode,ti=!1;break t;case 3:case 4:rn=C.stateNode.containerInfo,ti=!0;break t}C=C.return}if(rn===null)throw Error(a(160));Ev(m,T,f),rn=null,ti=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Av(r,e),r=r.sibling}var Gi=null;function Av(e,r){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ui(r,e),fi(e),l&4&&(la(3,e,e.return),sl(3,e),la(5,e,e.return));break;case 1:ui(r,e),fi(e),l&512&&(gn||s===null||ir(s,s.return)),l&64&&wr&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Gi;if(ui(r,e),fi(e),l&512&&(gn||s===null||ir(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Mi]||m[ne]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Hn(m,l,s),m[ne]=e,Sn(m),l=m;break t;case"link":var T=S_("link","href",f).get(l+(s.href||""));if(T){for(var C=0;C<T.length;C++)if(m=T[C],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){T.splice(C,1);break e}}m=f.createElement(l),Hn(m,l,s),f.head.appendChild(m);break;case"meta":if(T=S_("meta","content",f).get(l+(s.content||""))){for(C=0;C<T.length;C++)if(m=T[C],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){T.splice(C,1);break e}}m=f.createElement(l),Hn(m,l,s),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[ne]=e,Sn(m),l=m}e.stateNode=l}else x_(f,e.type,e.stateNode);else e.stateNode=y_(f,l,e.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?x_(f,e.type,e.stateNode):y_(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Wd(e,e.memoizedProps,s.memoizedProps)}break;case 27:ui(r,e),fi(e),l&512&&(gn||s===null||ir(s,s.return)),s!==null&&l&4&&Wd(e,e.memoizedProps,s.memoizedProps);break;case 5:if(ui(r,e),fi(e),l&512&&(gn||s===null||ir(s,s.return)),e.flags&32){f=e.stateNode;try{tr(f,"")}catch(at){Qe(e,e.return,at)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Wd(e,f,s!==null?s.memoizedProps:f)),l&1024&&(jd=!0);break;case 6:if(ui(r,e),fi(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(at){Qe(e,e.return,at)}}break;case 3:if(au=null,f=Gi,Gi=iu(r.containerInfo),ui(r,e),Gi=f,fi(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{El(r.containerInfo)}catch(at){Qe(e,e.return,at)}jd&&(jd=!1,Rv(e));break;case 4:l=Gi,Gi=iu(e.stateNode.containerInfo),ui(r,e),fi(e),Gi=l;break;case 12:ui(r,e),fi(e);break;case 13:ui(r,e),fi(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(eh=$t()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,$d(e,l)));break;case 22:f=e.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,et=wr,vt=gn;if(wr=et||f,gn=vt||G,ui(r,e),gn=vt,wr=et,fi(e),l&8192)t:for(r=e.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(s===null||G||wr||gn||Qa(e)),s=null,r=e;;){if(r.tag===5||r.tag===26){if(s===null){G=s=r;try{if(m=G.stateNode,f)T=m.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{C=G.stateNode;var Tt=G.memoizedProps.style,it=Tt!=null&&Tt.hasOwnProperty("display")?Tt.display:null;C.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(at){Qe(G,G.return,at)}}}else if(r.tag===6){if(s===null){G=r;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(at){Qe(G,G.return,at)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===e)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,$d(e,s))));break;case 19:ui(r,e),fi(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,$d(e,l)));break;case 30:break;case 21:break;default:ui(r,e),fi(e)}}function fi(e){var r=e.flags;if(r&2){try{for(var s,l=e.return;l!==null;){if(yv(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=qd(e);Xc(e,m,f);break;case 5:var T=s.stateNode;s.flags&32&&(tr(T,""),s.flags&=-33);var C=qd(e);Xc(e,C,T);break;case 3:case 4:var G=s.stateNode.containerInfo,et=qd(e);Yd(e,et,G);break;default:throw Error(a(161))}}catch(vt){Qe(e,e.return,vt)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Rv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var r=e;Rv(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),e=e.sibling}}function ca(e,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)bv(e,r.alternate,r),r=r.sibling}function Qa(e){for(e=e.child;e!==null;){var r=e;switch(r.tag){case 0:case 11:case 14:case 15:la(4,r,r.return),Qa(r);break;case 1:ir(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&vv(r,r.return,s),Qa(r);break;case 27:gl(r.stateNode);case 26:case 5:ir(r,r.return),Qa(r);break;case 22:r.memoizedState===null&&Qa(r);break;case 30:Qa(r);break;default:Qa(r)}e=e.sibling}}function ua(e,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,f=e,m=r,T=m.flags;switch(m.tag){case 0:case 11:case 15:ua(f,m,s),sl(4,m);break;case 1:if(ua(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(et){Qe(l,l.return,et)}if(l=m,f=l.updateQueue,f!==null){var C=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)n0(G[f],C)}catch(et){Qe(l,l.return,et)}}s&&T&64&&gv(m),ol(m,m.return);break;case 27:Sv(m);case 26:case 5:ua(f,m,s),s&&l===null&&T&4&&_v(m),ol(m,m.return);break;case 12:ua(f,m,s);break;case 13:ua(f,m,s),s&&T&4&&Tv(f,m);break;case 22:m.memoizedState===null&&ua(f,m,s),ol(m,m.return);break;case 30:break;default:ua(f,m,s)}r=r.sibling}}function Kd(e,r){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(e=r.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&qo(s))}function Zd(e,r){e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&qo(e))}function rr(e,r,s,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Cv(e,r,s,l),r=r.sibling}function Cv(e,r,s,l){var f=r.flags;switch(r.tag){case 0:case 11:case 15:rr(e,r,s,l),f&2048&&sl(9,r);break;case 1:rr(e,r,s,l);break;case 3:rr(e,r,s,l),f&2048&&(e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&qo(e)));break;case 12:if(f&2048){rr(e,r,s,l),e=r.stateNode;try{var m=r.memoizedProps,T=m.id,C=m.onPostCommit;typeof C=="function"&&C(T,r.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Qe(r,r.return,G)}}else rr(e,r,s,l);break;case 13:rr(e,r,s,l);break;case 23:break;case 22:m=r.stateNode,T=r.alternate,r.memoizedState!==null?m._visibility&2?rr(e,r,s,l):ll(e,r):m._visibility&2?rr(e,r,s,l):(m._visibility|=2,zs(e,r,s,l,(r.subtreeFlags&10256)!==0)),f&2048&&Kd(T,r);break;case 24:rr(e,r,s,l),f&2048&&Zd(r.alternate,r);break;default:rr(e,r,s,l)}}function zs(e,r,s,l,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=e,T=r,C=s,G=l,et=T.flags;switch(T.tag){case 0:case 11:case 15:zs(m,T,C,G,f),sl(8,T);break;case 23:break;case 22:var vt=T.stateNode;T.memoizedState!==null?vt._visibility&2?zs(m,T,C,G,f):ll(m,T):(vt._visibility|=2,zs(m,T,C,G,f)),f&&et&2048&&Kd(T.alternate,T);break;case 24:zs(m,T,C,G,f),f&&et&2048&&Zd(T.alternate,T);break;default:zs(m,T,C,G,f)}r=r.sibling}}function ll(e,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=e,l=r,f=l.flags;switch(l.tag){case 22:ll(s,l),f&2048&&Kd(l.alternate,l);break;case 24:ll(s,l),f&2048&&Zd(l.alternate,l);break;default:ll(s,l)}r=r.sibling}}var cl=8192;function Fs(e){if(e.subtreeFlags&cl)for(e=e.child;e!==null;)wv(e),e=e.sibling}function wv(e){switch(e.tag){case 26:Fs(e),e.flags&cl&&e.memoizedState!==null&&nE(Gi,e.memoizedState,e.memoizedProps);break;case 5:Fs(e);break;case 3:case 4:var r=Gi;Gi=iu(e.stateNode.containerInfo),Fs(e),Gi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=cl,cl=16777216,Fs(e),cl=r):Fs(e));break;default:Fs(e)}}function Dv(e){var r=e.alternate;if(r!==null&&(e=r.child,e!==null)){r.child=null;do r=e.sibling,e.sibling=null,e=r;while(e!==null)}}function ul(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];On=l,Lv(l,e)}Dv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Uv(e),e=e.sibling}function Uv(e){switch(e.tag){case 0:case 11:case 15:ul(e),e.flags&2048&&la(9,e,e.return);break;case 3:ul(e);break;case 12:ul(e);break;case 22:var r=e.stateNode;e.memoizedState!==null&&r._visibility&2&&(e.return===null||e.return.tag!==13)?(r._visibility&=-3,Wc(e)):ul(e);break;default:ul(e)}}function Wc(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];On=l,Lv(l,e)}Dv(e)}for(e=e.child;e!==null;){switch(r=e,r.tag){case 0:case 11:case 15:la(8,r,r.return),Wc(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,Wc(r));break;default:Wc(r)}e=e.sibling}}function Lv(e,r){for(;On!==null;){var s=On;switch(s.tag){case 0:case 11:case 15:la(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:qo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,On=l;else t:for(s=e;On!==null;){l=On;var f=l.sibling,m=l.return;if(Mv(l),l===s){On=null;break t}if(f!==null){f.return=m,On=f;break t}On=m}}}var _M={getCacheForType:function(e){var r=Xn(An),s=r.data.get(e);return s===void 0&&(s=e(),r.data.set(e,s)),s}},yM=typeof WeakMap=="function"?WeakMap:Map,Ge=0,nn=null,be=null,we=0,Ve=0,di=null,fa=!1,Hs=!1,Qd=!1,Ur=0,fn=0,da=0,Ja=0,Jd=0,wi=0,Gs=0,fl=null,ei=null,th=!1,eh=0,qc=1/0,Yc=null,ha=null,Fn=0,pa=null,Vs=null,ks=0,nh=0,ih=null,Nv=null,dl=0,rh=null;function hi(){if((Ge&2)!==0&&we!==0)return we&-we;if(F.T!==null){var e=Ds;return e!==0?e:fh()}return Ce()}function Ov(){wi===0&&(wi=(we&536870912)===0||Be?W():536870912);var e=Ci.current;return e!==null&&(e.flags|=32),wi}function pi(e,r,s){(e===nn&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)&&(Xs(e,0),ma(e,we,wi,!1)),xt(e,s),((Ge&2)===0||e!==nn)&&(e===nn&&((Ge&2)===0&&(Ja|=s),fn===4&&ma(e,we,wi,!1)),ar(e))}function Pv(e,r,s){if((Ge&6)!==0)throw Error(a(327));var l=!s&&(r&124)===0&&(r&e.expiredLanes)===0||oe(e,r),f=l?bM(e,r):oh(e,r,!0),m=l;do{if(f===0){Hs&&!l&&ma(e,r,0,!1);break}else{if(s=e.current.alternate,m&&!SM(s)){f=oh(e,r,!1),m=!1;continue}if(f===2){if(m=r,e.errorRecoveryDisabledLanes&m)var T=0;else T=e.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){r=T;t:{var C=e;f=fl;var G=C.current.memoizedState.isDehydrated;if(G&&(Xs(C,T).flags|=256),T=oh(C,T,!1),T!==2){if(Qd&&!G){C.errorRecoveryDisabledLanes|=m,Ja|=m,f=4;break t}m=ei,ei=f,m!==null&&(ei===null?ei=m:ei.push.apply(ei,m))}f=T}if(m=!1,f!==2)continue}}if(f===1){Xs(e,0),ma(e,r,0,!0);break}t:{switch(l=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:ma(l,r,wi,!fa);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(f=eh+300-$t(),10<f)){if(ma(l,r,wi,!fa),pe(l,0,!0)!==0)break t;l.timeoutHandle=u_(Bv.bind(null,l,s,ei,Yc,th,r,wi,Ja,Gs,fa,m,2,-0,0),f);break t}Bv(l,s,ei,Yc,th,r,wi,Ja,Gs,fa,m,0,-0,0)}}break}while(!0);ar(e)}function Bv(e,r,s,l,f,m,T,C,G,et,vt,Tt,it,at){if(e.timeoutHandle=-1,Tt=r.subtreeFlags,(Tt&8192||(Tt&16785408)===16785408)&&(yl={stylesheets:null,count:0,unsuspend:eE},wv(r),Tt=iE(),Tt!==null)){e.cancelPendingCommit=Tt(kv.bind(null,e,r,m,s,l,f,T,C,G,vt,1,it,at)),ma(e,m,T,!et);return}kv(e,r,m,s,l,f,T,C,G)}function SM(e){for(var r=e;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!li(m(),f))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ma(e,r,s,l){r&=~Jd,r&=~Ja,e.suspendedLanes|=r,e.pingedLanes&=~r,l&&(e.warmLanes|=r),l=e.expirationTimes;for(var f=r;0<f;){var m=31-Dt(f),T=1<<m;l[m]=-1,f&=~T}s!==0&&It(e,s,r)}function jc(){return(Ge&6)===0?(hl(0),!1):!0}function ah(){if(be!==null){if(Ve===0)var e=be.return;else e=be,Mr=Ya=null,bd(e),Bs=null,il=0,e=be;for(;e!==null;)mv(e.alternate,e),e=e.return;be=null}}function Xs(e,r){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,zM(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),ah(),nn=e,be=s=Sr(e.current,null),we=r,Ve=0,di=null,fa=!1,Hs=oe(e,r),Qd=!1,Gs=wi=Jd=Ja=da=fn=0,ei=fl=null,th=!1,(r&8)!==0&&(r|=r&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=r;0<l;){var f=31-Dt(l),m=1<<f;r|=e[f],l&=~m}return Ur=r,gc(),s}function Iv(e,r){_e=null,F.H=Pc,r===jo||r===Tc?(r=t0(),Ve=3):r===Zg?(r=t0(),Ve=4):Ve=r===ev?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,di=r,be===null&&(fn=1,Hc(e,Ei(r,e.current)))}function zv(){var e=F.H;return F.H=Pc,e===null?Pc:e}function Fv(){var e=F.A;return F.A=_M,e}function sh(){fn=4,fa||(we&4194048)!==we&&Ci.current!==null||(Hs=!0),(da&134217727)===0&&(Ja&134217727)===0||nn===null||ma(nn,we,wi,!1)}function oh(e,r,s){var l=Ge;Ge|=2;var f=zv(),m=Fv();(nn!==e||we!==r)&&(Yc=null,Xs(e,r)),r=!1;var T=fn;t:do try{if(Ve!==0&&be!==null){var C=be,G=di;switch(Ve){case 8:ah(),T=6;break t;case 3:case 2:case 9:case 6:Ci.current===null&&(r=!0);var et=Ve;if(Ve=0,di=null,Ws(e,C,G,et),s&&Hs){T=0;break t}break;default:et=Ve,Ve=0,di=null,Ws(e,C,G,et)}}xM(),T=fn;break}catch(vt){Iv(e,vt)}while(!0);return r&&e.shellSuspendCounter++,Mr=Ya=null,Ge=l,F.H=f,F.A=m,be===null&&(nn=null,we=0,gc()),T}function xM(){for(;be!==null;)Hv(be)}function bM(e,r){var s=Ge;Ge|=2;var l=zv(),f=Fv();nn!==e||we!==r?(Yc=null,qc=$t()+500,Xs(e,r)):Hs=oe(e,r);t:do try{if(Ve!==0&&be!==null){r=be;var m=di;e:switch(Ve){case 1:Ve=0,di=null,Ws(e,r,m,1);break;case 2:case 9:if(Qg(m)){Ve=0,di=null,Gv(r);break}r=function(){Ve!==2&&Ve!==9||nn!==e||(Ve=7),ar(e)},m.then(r,r);break t;case 3:Ve=7;break t;case 4:Ve=5;break t;case 7:Qg(m)?(Ve=0,di=null,Gv(r)):(Ve=0,di=null,Ws(e,r,m,7));break;case 5:var T=null;switch(be.tag){case 26:T=be.memoizedState;case 5:case 27:var C=be;if(!T||b_(T)){Ve=0,di=null;var G=C.sibling;if(G!==null)be=G;else{var et=C.return;et!==null?(be=et,$c(et)):be=null}break e}}Ve=0,di=null,Ws(e,r,m,5);break;case 6:Ve=0,di=null,Ws(e,r,m,6);break;case 8:ah(),fn=6;break t;default:throw Error(a(462))}}MM();break}catch(vt){Iv(e,vt)}while(!0);return Mr=Ya=null,F.H=l,F.A=f,Ge=s,be!==null?0:(nn=null,we=0,gc(),fn)}function MM(){for(;be!==null&&!pn();)Hv(be)}function Hv(e){var r=hv(e.alternate,e,Ur);e.memoizedProps=e.pendingProps,r===null?$c(e):be=r}function Gv(e){var r=e,s=r.alternate;switch(r.tag){case 15:case 0:r=ov(s,r,r.pendingProps,r.type,void 0,we);break;case 11:r=ov(s,r,r.pendingProps,r.type.render,r.ref,we);break;case 5:bd(r);default:mv(s,r),r=be=Vg(r,Ur),r=hv(s,r,Ur)}e.memoizedProps=e.pendingProps,r===null?$c(e):be=r}function Ws(e,r,s,l){Mr=Ya=null,bd(r),Bs=null,il=0;var f=r.return;try{if(dM(e,f,r,s,we)){fn=1,Hc(e,Ei(s,e.current)),be=null;return}}catch(m){if(f!==null)throw be=f,m;fn=1,Hc(e,Ei(s,e.current)),be=null;return}r.flags&32768?(Be||l===1?e=!0:Hs||(we&536870912)!==0?e=!1:(fa=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ci.current,l!==null&&l.tag===13&&(l.flags|=16384))),Vv(r,e)):$c(r)}function $c(e){var r=e;do{if((r.flags&32768)!==0){Vv(r,fa);return}e=r.return;var s=pM(r.alternate,r,Ur);if(s!==null){be=s;return}if(r=r.sibling,r!==null){be=r;return}be=r=e}while(r!==null);fn===0&&(fn=5)}function Vv(e,r){do{var s=mM(e.alternate,e);if(s!==null){s.flags&=32767,be=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(e=e.sibling,e!==null)){be=e;return}be=e=s}while(e!==null);fn=6,be=null}function kv(e,r,s,l,f,m,T,C,G){e.cancelPendingCommit=null;do Kc();while(Fn!==0);if((Ge&6)!==0)throw Error(a(327));if(r!==null){if(r===e.current)throw Error(a(177));if(m=r.lanes|r.childLanes,m|=Zf,kt(e,s,m,T,C,G),e===nn&&(be=nn=null,we=0),Vs=r,pa=e,ks=s,nh=m,ih=f,Nv=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,RM(B,function(){return jv(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,f=Y.p,Y.p=2,T=Ge,Ge|=4;try{gM(e,r,s)}finally{Ge=T,Y.p=f,F.T=l}}Fn=1,Xv(),Wv(),qv()}}function Xv(){if(Fn===1){Fn=0;var e=pa,r=Vs,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=Y.p;Y.p=2;var f=Ge;Ge|=4;try{Av(r,e);var m=yh,T=Lg(e.containerInfo),C=m.focusedElem,G=m.selectionRange;if(T!==C&&C&&C.ownerDocument&&Ug(C.ownerDocument.documentElement,C)){if(G!==null&&qf(C)){var et=G.start,vt=G.end;if(vt===void 0&&(vt=et),"selectionStart"in C)C.selectionStart=et,C.selectionEnd=Math.min(vt,C.value.length);else{var Tt=C.ownerDocument||document,it=Tt&&Tt.defaultView||window;if(it.getSelection){var at=it.getSelection(),ce=C.textContent.length,ie=Math.min(G.start,ce),qe=G.end===void 0?ie:Math.min(G.end,ce);!at.extend&&ie>qe&&(T=qe,qe=ie,ie=T);var K=Dg(C,ie),k=Dg(C,qe);if(K&&k&&(at.rangeCount!==1||at.anchorNode!==K.node||at.anchorOffset!==K.offset||at.focusNode!==k.node||at.focusOffset!==k.offset)){var tt=Tt.createRange();tt.setStart(K.node,K.offset),at.removeAllRanges(),ie>qe?(at.addRange(tt),at.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),at.addRange(tt))}}}}for(Tt=[],at=C;at=at.parentNode;)at.nodeType===1&&Tt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Tt.length;C++){var St=Tt[C];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}lu=!!_h,yh=_h=null}finally{Ge=f,Y.p=l,F.T=s}}e.current=r,Fn=2}}function Wv(){if(Fn===2){Fn=0;var e=pa,r=Vs,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=Y.p;Y.p=2;var f=Ge;Ge|=4;try{bv(e,r.alternate,r)}finally{Ge=f,Y.p=l,F.T=s}}Fn=3}}function qv(){if(Fn===4||Fn===3){Fn=0,he();var e=pa,r=Vs,s=ks,l=Nv;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Fn=5:(Fn=0,Vs=pa=null,Yv(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(ha=null),ln(s),r=r.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(gt,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=F.T,f=Y.p,Y.p=2,F.T=null;try{for(var m=e.onRecoverableError,T=0;T<l.length;T++){var C=l[T];m(C.value,{componentStack:C.stack})}}finally{F.T=r,Y.p=f}}(ks&3)!==0&&Kc(),ar(e),f=e.pendingLanes,(s&4194090)!==0&&(f&42)!==0?e===rh?dl++:(dl=0,rh=e):dl=0,hl(0)}}function Yv(e,r){(e.pooledCacheLanes&=r)===0&&(r=e.pooledCache,r!=null&&(e.pooledCache=null,qo(r)))}function Kc(e){return Xv(),Wv(),qv(),jv()}function jv(){if(Fn!==5)return!1;var e=pa,r=nh;nh=0;var s=ln(ks),l=F.T,f=Y.p;try{Y.p=32>s?32:s,F.T=null,s=ih,ih=null;var m=pa,T=ks;if(Fn=0,Vs=pa=null,ks=0,(Ge&6)!==0)throw Error(a(331));var C=Ge;if(Ge|=4,Uv(m.current),Cv(m,m.current,T,s),Ge=C,hl(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(gt,m)}catch{}return!0}finally{Y.p=f,F.T=l,Yv(e,r)}}function $v(e,r,s){r=Ei(s,r),r=Bd(e.stateNode,r,2),e=ra(e,r,2),e!==null&&(xt(e,2),ar(e))}function Qe(e,r,s){if(e.tag===3)$v(e,e,s);else for(;r!==null;){if(r.tag===3){$v(r,e,s);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ha===null||!ha.has(l))){e=Ei(s,e),s=J0(2),l=ra(r,s,2),l!==null&&(tv(s,l,r,e),xt(l,2),ar(l));break}}r=r.return}}function lh(e,r,s){var l=e.pingCache;if(l===null){l=e.pingCache=new yM;var f=new Set;l.set(r,f)}else f=l.get(r),f===void 0&&(f=new Set,l.set(r,f));f.has(s)||(Qd=!0,f.add(s),e=EM.bind(null,e,r,s),r.then(e,e))}function EM(e,r,s){var l=e.pingCache;l!==null&&l.delete(r),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,nn===e&&(we&s)===s&&(fn===4||fn===3&&(we&62914560)===we&&300>$t()-eh?(Ge&2)===0&&Xs(e,0):Jd|=s,Gs===we&&(Gs=0)),ar(e)}function Kv(e,r){r===0&&(r=Bt()),e=As(e,r),e!==null&&(xt(e,r),ar(e))}function TM(e){var r=e.memoizedState,s=0;r!==null&&(s=r.retryLane),Kv(e,s)}function AM(e,r){var s=0;switch(e.tag){case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(r),Kv(e,s)}function RM(e,r){return de(e,r)}var Zc=null,qs=null,ch=!1,Qc=!1,uh=!1,ts=0;function ar(e){e!==qs&&e.next===null&&(qs===null?Zc=qs=e:qs=qs.next=e),Qc=!0,ch||(ch=!0,wM())}function hl(e,r){if(!uh&&Qc){uh=!0;do for(var s=!1,l=Zc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var T=l.suspendedLanes,C=l.pingedLanes;m=(1<<31-Dt(42|e)+1)-1,m&=f&~(T&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,t_(l,m))}else m=we,m=pe(l,l===nn?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||oe(l,m)||(s=!0,t_(l,m));l=l.next}while(s);uh=!1}}function CM(){Zv()}function Zv(){Qc=ch=!1;var e=0;ts!==0&&(IM()&&(e=ts),ts=0);for(var r=$t(),s=null,l=Zc;l!==null;){var f=l.next,m=Qv(l,r);m===0?(l.next=null,s===null?Zc=f:s.next=f,f===null&&(qs=s)):(s=l,(e!==0||(m&3)!==0)&&(Qc=!0)),l=f}hl(e)}function Qv(e,r){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var T=31-Dt(m),C=1<<T,G=f[T];G===-1?((C&s)===0||(C&l)!==0)&&(f[T]=Pe(C,r)):G<=r&&(e.expiredLanes|=C),m&=~C}if(r=nn,s=we,s=pe(e,e===r?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===r&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&V(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||oe(e,s)){if(r=s&-s,r===e.callbackPriority)return r;switch(l!==null&&V(l),ln(s)){case 2:case 8:s=Xt;break;case 32:s=B;break;case 268435456:s=nt;break;default:s=B}return l=Jv.bind(null,e),s=de(s,l),e.callbackPriority=r,e.callbackNode=s,r}return l!==null&&l!==null&&V(l),e.callbackPriority=2,e.callbackNode=null,2}function Jv(e,r){if(Fn!==0&&Fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Kc()&&e.callbackNode!==s)return null;var l=we;return l=pe(e,e===nn?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Pv(e,l,r),Qv(e,$t()),e.callbackNode!=null&&e.callbackNode===s?Jv.bind(null,e):null)}function t_(e,r){if(Kc())return null;Pv(e,r,!0)}function wM(){FM(function(){(Ge&6)!==0?de(ae,CM):Zv()})}function fh(){return ts===0&&(ts=W()),ts}function e_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cc(""+e)}function n_(e,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,e.id&&s.setAttribute("form",e.id),r.parentNode.insertBefore(s,r),e=new FormData(e),s.parentNode.removeChild(s),e}function DM(e,r,s,l,f){if(r==="submit"&&s&&s.stateNode===f){var m=e_((f[se]||null).action),T=l.submitter;T&&(r=(r=T[se]||null)?e_(r.formAction):T.getAttribute("formAction"),r!==null&&(m=r,T=null));var C=new hc("action","action",null,l,f);e.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ts!==0){var G=T?n_(f,T):new FormData(f);Ud(s,{pending:!0,data:G,method:f.method,action:m},null,G)}}else typeof m=="function"&&(C.preventDefault(),G=T?n_(f,T):new FormData(f),Ud(s,{pending:!0,data:G,method:f.method,action:m},m,G))},currentTarget:f}]})}}for(var dh=0;dh<Kf.length;dh++){var hh=Kf[dh],UM=hh.toLowerCase(),LM=hh[0].toUpperCase()+hh.slice(1);Hi(UM,"on"+LM)}Hi(Pg,"onAnimationEnd"),Hi(Bg,"onAnimationIteration"),Hi(Ig,"onAnimationStart"),Hi("dblclick","onDoubleClick"),Hi("focusin","onFocus"),Hi("focusout","onBlur"),Hi($b,"onTransitionRun"),Hi(Kb,"onTransitionStart"),Hi(Zb,"onTransitionCancel"),Hi(zg,"onTransitionEnd"),L("onMouseEnter",["mouseout","mouseover"]),L("onMouseLeave",["mouseout","mouseover"]),L("onPointerEnter",["pointerout","pointerover"]),L("onPointerLeave",["pointerout","pointerover"]),gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gr("onBeforeInput",["compositionend","keypress","textInput","paste"]),gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pl));function i_(e,r){r=(r&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var m=void 0;if(r)for(var T=l.length-1;0<=T;T--){var C=l[T],G=C.instance,et=C.currentTarget;if(C=C.listener,G!==m&&f.isPropagationStopped())break t;m=C,f.currentTarget=et;try{m(f)}catch(vt){Fc(vt)}f.currentTarget=null,m=G}else for(T=0;T<l.length;T++){if(C=l[T],G=C.instance,et=C.currentTarget,C=C.listener,G!==m&&f.isPropagationStopped())break t;m=C,f.currentTarget=et;try{m(f)}catch(vt){Fc(vt)}f.currentTarget=null,m=G}}}}function Me(e,r){var s=r[Un];s===void 0&&(s=r[Un]=new Set);var l=e+"__bubble";s.has(l)||(r_(r,e,2,!1),s.add(l))}function ph(e,r,s){var l=0;r&&(l|=4),r_(s,e,l,r)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function mh(e){if(!e[Jc]){e[Jc]=!0,oc.forEach(function(s){s!=="selectionchange"&&(NM.has(s)||ph(s,!1,e),ph(s,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Jc]||(r[Jc]=!0,ph("selectionchange",!1,r))}}function r_(e,r,s,l){switch(C_(r)){case 2:var f=sE;break;case 8:f=oE;break;default:f=wh}s=f.bind(null,r,s,e),f=void 0,!If||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(r,s,{capture:!0,passive:f}):e.addEventListener(r,s,!0):f!==void 0?e.addEventListener(r,s,{passive:f}):e.addEventListener(r,s,!1)}function gh(e,r,s,l,f){var m=l;if((r&1)===0&&(r&2)===0&&l!==null)t:for(;;){if(l===null)return;var T=l.tag;if(T===3||T===4){var C=l.stateNode.containerInfo;if(C===f)break;if(T===4)for(T=l.return;T!==null;){var G=T.tag;if((G===3||G===4)&&T.stateNode.containerInfo===f)return;T=T.return}for(;C!==null;){if(T=pr(C),T===null)return;if(G=T.tag,G===5||G===6||G===26||G===27){l=m=T;continue t}C=C.parentNode}}l=l.return}fg(function(){var et=m,vt=Pf(s),Tt=[];t:{var it=Fg.get(e);if(it!==void 0){var at=hc,ce=e;switch(e){case"keypress":if(fc(s)===0)break t;case"keydown":case"keyup":at=Rb;break;case"focusin":ce="focus",at=Gf;break;case"focusout":ce="blur",at=Gf;break;case"beforeblur":case"afterblur":at=Gf;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=pg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=mb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=Db;break;case Pg:case Bg:case Ig:at=_b;break;case zg:at=Lb;break;case"scroll":case"scrollend":at=hb;break;case"wheel":at=Ob;break;case"copy":case"cut":case"paste":at=Sb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=gg;break;case"toggle":case"beforetoggle":at=Bb}var ie=(r&4)!==0,qe=!ie&&(e==="scroll"||e==="scrollend"),K=ie?it!==null?it+"Capture":null:it;ie=[];for(var k=et,tt;k!==null;){var St=k;if(tt=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||tt===null||K===null||(St=No(k,K),St!=null&&ie.push(ml(k,St,tt))),qe)break;k=k.return}0<ie.length&&(it=new at(it,ce,null,s,vt),Tt.push({event:it,listeners:ie}))}}if((r&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",it&&s!==Of&&(ce=s.relatedTarget||s.fromElement)&&(pr(ce)||ce[Se]))break t;if((at||it)&&(it=vt.window===vt?vt:(it=vt.ownerDocument)?it.defaultView||it.parentWindow:window,at?(ce=s.relatedTarget||s.toElement,at=et,ce=ce?pr(ce):null,ce!==null&&(qe=c(ce),ie=ce.tag,ce!==qe||ie!==5&&ie!==27&&ie!==6)&&(ce=null)):(at=null,ce=et),at!==ce)){if(ie=pg,St="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ie=gg,St="onPointerLeave",K="onPointerEnter",k="pointer"),qe=at==null?it:za(at),tt=ce==null?it:za(ce),it=new ie(St,k+"leave",at,s,vt),it.target=qe,it.relatedTarget=tt,St=null,pr(vt)===et&&(ie=new ie(K,k+"enter",ce,s,vt),ie.target=tt,ie.relatedTarget=qe,St=ie),qe=St,at&&ce)e:{for(ie=at,K=ce,k=0,tt=ie;tt;tt=Ys(tt))k++;for(tt=0,St=K;St;St=Ys(St))tt++;for(;0<k-tt;)ie=Ys(ie),k--;for(;0<tt-k;)K=Ys(K),tt--;for(;k--;){if(ie===K||K!==null&&ie===K.alternate)break e;ie=Ys(ie),K=Ys(K)}ie=null}else ie=null;at!==null&&a_(Tt,it,at,ie,!1),ce!==null&&qe!==null&&a_(Tt,qe,ce,ie,!0)}}t:{if(it=et?za(et):window,at=it.nodeName&&it.nodeName.toLowerCase(),at==="select"||at==="input"&&it.type==="file")var jt=Eg;else if(bg(it))if(Tg)jt=qb;else{jt=Xb;var ye=kb}else at=it.nodeName,!at||at.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?et&&Nf(et.elementType)&&(jt=Eg):jt=Wb;if(jt&&(jt=jt(e,et))){Mg(Tt,jt,s,vt);break t}ye&&ye(e,it,et),e==="focusout"&&et&&it.type==="number"&&et.memoizedProps.value!=null&&kn(it,"number",it.value)}switch(ye=et?za(et):window,e){case"focusin":(bg(ye)||ye.contentEditable==="true")&&(Ms=ye,Yf=et,Go=null);break;case"focusout":Go=Yf=Ms=null;break;case"mousedown":jf=!0;break;case"contextmenu":case"mouseup":case"dragend":jf=!1,Ng(Tt,s,vt);break;case"selectionchange":if(jb)break;case"keydown":case"keyup":Ng(Tt,s,vt)}var Zt;if(kf)t:{switch(e){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else bs?Sg(e,s)&&(re="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(re="onCompositionStart");re&&(vg&&s.locale!=="ko"&&(bs||re!=="onCompositionStart"?re==="onCompositionEnd"&&bs&&(Zt=dg()):(ta=vt,zf="value"in ta?ta.value:ta.textContent,bs=!0)),ye=tu(et,re),0<ye.length&&(re=new mg(re,e,null,s,vt),Tt.push({event:re,listeners:ye}),Zt?re.data=Zt:(Zt=xg(s),Zt!==null&&(re.data=Zt)))),(Zt=zb?Fb(e,s):Hb(e,s))&&(re=tu(et,"onBeforeInput"),0<re.length&&(ye=new mg("onBeforeInput","beforeinput",null,s,vt),Tt.push({event:ye,listeners:re}),ye.data=Zt)),DM(Tt,e,et,s,vt)}i_(Tt,r)})}function ml(e,r,s){return{instance:e,listener:r,currentTarget:s}}function tu(e,r){for(var s=r+"Capture",l=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=No(e,s),f!=null&&l.unshift(ml(e,f,m)),f=No(e,r),f!=null&&l.push(ml(e,f,m))),e.tag===3)return l;e=e.return}return[]}function Ys(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function a_(e,r,s,l,f){for(var m=r._reactName,T=[];s!==null&&s!==l;){var C=s,G=C.alternate,et=C.stateNode;if(C=C.tag,G!==null&&G===l)break;C!==5&&C!==26&&C!==27||et===null||(G=et,f?(et=No(s,m),et!=null&&T.unshift(ml(s,et,G))):f||(et=No(s,m),et!=null&&T.push(ml(s,et,G)))),s=s.return}T.length!==0&&e.push({event:r,listeners:T})}var OM=/\r\n?/g,PM=/\u0000|\uFFFD/g;function s_(e){return(typeof e=="string"?e:""+e).replace(OM,`
`).replace(PM,"")}function o_(e,r){return r=s_(r),s_(e)===r}function eu(){}function We(e,r,s,l,f,m){switch(s){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||tr(e,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&tr(e,""+l);break;case"className":Ot(e,"class",l);break;case"tabIndex":Ot(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ot(e,s,l);break;case"style":cg(e,l,m);break;case"data":if(r!=="object"){Ot(e,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=cc(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(r!=="input"&&We(e,r,"name",f.name,f,null),We(e,r,"formEncType",f.formEncType,f,null),We(e,r,"formMethod",f.formMethod,f,null),We(e,r,"formTarget",f.formTarget,f,null)):(We(e,r,"encType",f.encType,f,null),We(e,r,"method",f.method,f,null),We(e,r,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=cc(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=eu);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=cc(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Ct(e,"popover",l);break;case"xlinkActuate":Ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ht(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ht(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ht(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ht(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ct(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=fb.get(s)||s,Ct(e,s,l))}}function vh(e,r,s,l,f,m){switch(s){case"style":cg(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?tr(e,l):(typeof l=="number"||typeof l=="bigint")&&tr(e,""+l);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=eu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lc.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),r=s.slice(2,f?s.length-7:void 0),m=e[se]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(r,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(r,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Ct(e,s,l)}}}function Hn(e,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var T=s[m];if(T!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:We(e,r,m,T,s,null)}}f&&We(e,r,"srcSet",s.srcSet,s,null),l&&We(e,r,"src",s.src,s,null);return;case"input":Me("invalid",e);var C=m=T=f=null,G=null,et=null;for(l in s)if(s.hasOwnProperty(l)){var vt=s[l];if(vt!=null)switch(l){case"name":f=vt;break;case"type":T=vt;break;case"checked":G=vt;break;case"defaultChecked":et=vt;break;case"value":m=vt;break;case"defaultValue":C=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(a(137,r));break;default:We(e,r,l,vt,s,null)}}Ze(e,m,C,G,et,T,f,!1),cn(e);return;case"select":Me("invalid",e),l=T=m=null;for(f in s)if(s.hasOwnProperty(f)&&(C=s[f],C!=null))switch(f){case"value":m=C;break;case"defaultValue":T=C;break;case"multiple":l=C;default:We(e,r,f,C,s,null)}r=m,s=T,e.multiple=!!l,r!=null?Tn(e,!!l,r,!1):s!=null&&Tn(e,!!l,s,!0);return;case"textarea":Me("invalid",e),m=f=l=null;for(T in s)if(s.hasOwnProperty(T)&&(C=s[T],C!=null))switch(T){case"value":l=C;break;case"defaultValue":f=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:We(e,r,T,C,s,null)}In(e,l,f,m),cn(e);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:We(e,r,G,l,s,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(l=0;l<pl.length;l++)Me(pl[l],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in s)if(s.hasOwnProperty(et)&&(l=s[et],l!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:We(e,r,et,l,s,null)}return;default:if(Nf(r)){for(vt in s)s.hasOwnProperty(vt)&&(l=s[vt],l!==void 0&&vh(e,r,vt,l,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(l=s[C],l!=null&&We(e,r,C,l,s,null))}function BM(e,r,s,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,T=null,C=null,G=null,et=null,vt=null;for(at in s){var Tt=s[at];if(s.hasOwnProperty(at)&&Tt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":G=Tt;default:l.hasOwnProperty(at)||We(e,r,at,null,l,Tt)}}for(var it in l){var at=l[it];if(Tt=s[it],l.hasOwnProperty(it)&&(at!=null||Tt!=null))switch(it){case"type":m=at;break;case"name":f=at;break;case"checked":et=at;break;case"defaultChecked":vt=at;break;case"value":T=at;break;case"defaultValue":C=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,r));break;default:at!==Tt&&We(e,r,it,at,l,Tt)}}vr(e,T,C,G,et,vt,m,f);return;case"select":at=T=C=it=null;for(m in s)if(G=s[m],s.hasOwnProperty(m)&&G!=null)switch(m){case"value":break;case"multiple":at=G;default:l.hasOwnProperty(m)||We(e,r,m,null,l,G)}for(f in l)if(m=l[f],G=s[f],l.hasOwnProperty(f)&&(m!=null||G!=null))switch(f){case"value":it=m;break;case"defaultValue":C=m;break;case"multiple":T=m;default:m!==G&&We(e,r,f,m,l,G)}r=C,s=T,l=at,it!=null?Tn(e,!!s,it,!1):!!l!=!!s&&(r!=null?Tn(e,!!s,r,!0):Tn(e,!!s,s?[]:"",!1));return;case"textarea":at=it=null;for(C in s)if(f=s[C],s.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:We(e,r,C,null,l,f)}for(T in l)if(f=l[T],m=s[T],l.hasOwnProperty(T)&&(f!=null||m!=null))switch(T){case"value":it=f;break;case"defaultValue":at=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&We(e,r,T,f,l,m)}Ln(e,it,at);return;case"option":for(var ce in s)if(it=s[ce],s.hasOwnProperty(ce)&&it!=null&&!l.hasOwnProperty(ce))switch(ce){case"selected":e.selected=!1;break;default:We(e,r,ce,null,l,it)}for(G in l)if(it=l[G],at=s[G],l.hasOwnProperty(G)&&it!==at&&(it!=null||at!=null))switch(G){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:We(e,r,G,it,l,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in s)it=s[ie],s.hasOwnProperty(ie)&&it!=null&&!l.hasOwnProperty(ie)&&We(e,r,ie,null,l,it);for(et in l)if(it=l[et],at=s[et],l.hasOwnProperty(et)&&it!==at&&(it!=null||at!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(a(137,r));break;default:We(e,r,et,it,l,at)}return;default:if(Nf(r)){for(var qe in s)it=s[qe],s.hasOwnProperty(qe)&&it!==void 0&&!l.hasOwnProperty(qe)&&vh(e,r,qe,void 0,l,it);for(vt in l)it=l[vt],at=s[vt],!l.hasOwnProperty(vt)||it===at||it===void 0&&at===void 0||vh(e,r,vt,it,l,at);return}}for(var K in s)it=s[K],s.hasOwnProperty(K)&&it!=null&&!l.hasOwnProperty(K)&&We(e,r,K,null,l,it);for(Tt in l)it=l[Tt],at=s[Tt],!l.hasOwnProperty(Tt)||it===at||it==null&&at==null||We(e,r,Tt,it,l,at)}var _h=null,yh=null;function nu(e){return e.nodeType===9?e:e.ownerDocument}function l_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c_(e,r){if(e===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&r==="foreignObject"?0:e}function Sh(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var xh=null;function IM(){var e=window.event;return e&&e.type==="popstate"?e===xh?!1:(xh=e,!0):(xh=null,!1)}var u_=typeof setTimeout=="function"?setTimeout:void 0,zM=typeof clearTimeout=="function"?clearTimeout:void 0,f_=typeof Promise=="function"?Promise:void 0,FM=typeof queueMicrotask=="function"?queueMicrotask:typeof f_<"u"?function(e){return f_.resolve(null).then(e).catch(HM)}:u_;function HM(e){setTimeout(function(){throw e})}function ga(e){return e==="head"}function d_(e,r){var s=r,l=0,f=0;do{var m=s.nextSibling;if(e.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var T=e.ownerDocument;if(s&1&&gl(T.documentElement),s&2&&gl(T.body),s&4)for(s=T.head,gl(s),T=s.firstChild;T;){var C=T.nextSibling,G=T.nodeName;T[Mi]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&T.rel.toLowerCase()==="stylesheet"||s.removeChild(T),T=C}}if(f===0){e.removeChild(m),El(r);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);El(r)}function bh(e){var r=e.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":bh(s),Zr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function GM(e,r,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Mi])switch(r){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(r==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Vi(e.nextSibling),e===null)break}return null}function VM(e,r,s){if(r==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Vi(e.nextSibling),e===null))return null;return e}function Mh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function kM(e,r){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")r();else{var l=function(){r(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Vi(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return e}var Eh=null;function h_(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return e;r--}else s==="/$"&&r++}e=e.previousSibling}return null}function p_(e,r,s){switch(r=nu(s),e){case"html":if(e=r.documentElement,!e)throw Error(a(452));return e;case"head":if(e=r.head,!e)throw Error(a(453));return e;case"body":if(e=r.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function gl(e){for(var r=e.attributes;r.length;)e.removeAttributeNode(r[0]);Zr(e)}var Di=new Map,m_=new Set;function iu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Lr=Y.d;Y.d={f:XM,r:WM,D:qM,C:YM,L:jM,m:$M,X:ZM,S:KM,M:QM};function XM(){var e=Lr.f(),r=jc();return e||r}function WM(e){var r=mr(e);r!==null&&r.tag===5&&r.type==="form"?P0(r):Lr.r(e)}var js=typeof document>"u"?null:document;function g_(e,r,s){var l=js;if(l&&typeof r=="string"&&r){var f=en(r);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),m_.has(f)||(m_.add(f),e={rel:e,crossOrigin:s,href:r},l.querySelector(f)===null&&(r=l.createElement("link"),Hn(r,"link",e),Sn(r),l.head.appendChild(r)))}}function qM(e){Lr.D(e),g_("dns-prefetch",e,null)}function YM(e,r){Lr.C(e,r),g_("preconnect",e,r)}function jM(e,r,s){Lr.L(e,r,s);var l=js;if(l&&e&&r){var f='link[rel="preload"][as="'+en(r)+'"]';r==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+en(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+en(s.imageSizes)+'"]')):f+='[href="'+en(e)+'"]';var m=f;switch(r){case"style":m=$s(e);break;case"script":m=Ks(e)}Di.has(m)||(e=g({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:e,as:r},s),Di.set(m,e),l.querySelector(f)!==null||r==="style"&&l.querySelector(vl(m))||r==="script"&&l.querySelector(_l(m))||(r=l.createElement("link"),Hn(r,"link",e),Sn(r),l.head.appendChild(r)))}}function $M(e,r){Lr.m(e,r);var s=js;if(s&&e){var l=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+en(l)+'"][href="'+en(e)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ks(e)}if(!Di.has(m)&&(e=g({rel:"modulepreload",href:e},r),Di.set(m,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(_l(m)))return}l=s.createElement("link"),Hn(l,"link",e),Sn(l),s.head.appendChild(l)}}}function KM(e,r,s){Lr.S(e,r,s);var l=js;if(l&&e){var f=Qr(l).hoistableStyles,m=$s(e);r=r||"default";var T=f.get(m);if(!T){var C={loading:0,preload:null};if(T=l.querySelector(vl(m)))C.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":r},s),(s=Di.get(m))&&Th(e,s);var G=T=l.createElement("link");Sn(G),Hn(G,"link",e),G._p=new Promise(function(et,vt){G.onload=et,G.onerror=vt}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,ru(T,r,l)}T={type:"stylesheet",instance:T,count:1,state:C},f.set(m,T)}}}function ZM(e,r){Lr.X(e,r);var s=js;if(s&&e){var l=Qr(s).hoistableScripts,f=Ks(e),m=l.get(f);m||(m=s.querySelector(_l(f)),m||(e=g({src:e,async:!0},r),(r=Di.get(f))&&Ah(e,r),m=s.createElement("script"),Sn(m),Hn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function QM(e,r){Lr.M(e,r);var s=js;if(s&&e){var l=Qr(s).hoistableScripts,f=Ks(e),m=l.get(f);m||(m=s.querySelector(_l(f)),m||(e=g({src:e,async:!0,type:"module"},r),(r=Di.get(f))&&Ah(e,r),m=s.createElement("script"),Sn(m),Hn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function v_(e,r,s,l){var f=(f=yt.current)?iu(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=$s(s.href),s=Qr(f).hoistableStyles,l=s.get(r),l||(l={type:"style",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=$s(s.href);var m=Qr(f).hoistableStyles,T=m.get(e);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,T),(m=f.querySelector(vl(e)))&&!m._p&&(T.instance=m,T.state.loading=5),Di.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Di.set(e,s),m||JM(f,e,s,T.state))),r&&l===null)throw Error(a(528,""));return T}if(r&&l!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Ks(s),s=Qr(f).hoistableScripts,l=s.get(r),l||(l={type:"script",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function $s(e){return'href="'+en(e)+'"'}function vl(e){return'link[rel="stylesheet"]['+e+"]"}function __(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function JM(e,r,s,l){e.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=e.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),Hn(r,"link",s),Sn(r),e.head.appendChild(r))}function Ks(e){return'[src="'+en(e)+'"]'}function _l(e){return"script[async]"+e}function y_(e,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var l=e.querySelector('style[data-href~="'+en(s.href)+'"]');if(l)return r.instance=l,Sn(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Sn(l),Hn(l,"style",f),ru(l,s.precedence,e),r.instance=l;case"stylesheet":f=$s(s.href);var m=e.querySelector(vl(f));if(m)return r.state.loading|=4,r.instance=m,Sn(m),m;l=__(s),(f=Di.get(f))&&Th(l,f),m=(e.ownerDocument||e).createElement("link"),Sn(m);var T=m;return T._p=new Promise(function(C,G){T.onload=C,T.onerror=G}),Hn(m,"link",l),r.state.loading|=4,ru(m,s.precedence,e),r.instance=m;case"script":return m=Ks(s.src),(f=e.querySelector(_l(m)))?(r.instance=f,Sn(f),f):(l=s,(f=Di.get(m))&&(l=g({},s),Ah(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),Sn(f),Hn(f,"link",l),e.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,ru(l,s.precedence,e));return r.instance}function ru(e,r,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,T=0;T<l.length;T++){var C=l[T];if(C.dataset.precedence===r)m=C;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(e,r.firstChild))}function Th(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.title==null&&(e.title=r.title)}function Ah(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.integrity==null&&(e.integrity=r.integrity)}var au=null;function S_(e,r,s){if(au===null){var l=new Map,f=au=new Map;f.set(s,l)}else f=au,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var m=s[f];if(!(m[Mi]||m[ne]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var T=m.getAttribute(r)||"";T=e+T;var C=l.get(T);C?C.push(m):l.set(T,[m])}}return l}function x_(e,r,s){e=e.ownerDocument||e,e.head.insertBefore(s,r==="title"?e.querySelector("head > title"):null)}function tE(e,r,s){if(s===1||r.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return e=r.disabled,typeof r.precedence=="string"&&e==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function b_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var yl=null;function eE(){}function nE(e,r,s){if(yl===null)throw Error(a(475));var l=yl;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=$s(s.href),m=e.querySelector(vl(f));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=su.bind(l),e.then(l,l)),r.state.loading|=4,r.instance=m,Sn(m);return}m=e.ownerDocument||e,s=__(s),(f=Di.get(f))&&Th(s,f),m=m.createElement("link"),Sn(m);var T=m;T._p=new Promise(function(C,G){T.onload=C,T.onerror=G}),Hn(m,"link",s),r.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,e),(e=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=su.bind(l),e.addEventListener("load",r),e.addEventListener("error",r))}}function iE(){if(yl===null)throw Error(a(475));var e=yl;return e.stylesheets&&e.count===0&&Rh(e,e.stylesheets),0<e.count?function(r){var s=setTimeout(function(){if(e.stylesheets&&Rh(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(s)}}:null}function su(){if(this.count--,this.count===0){if(this.stylesheets)Rh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ou=null;function Rh(e,r){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ou=new Map,r.forEach(rE,e),ou=null,su.call(e))}function rE(e,r){if(!(r.state.loading&4)){var s=ou.get(e);if(s)var l=s.get(null);else{s=new Map,ou.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var T=f[m];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(s.set(T.dataset.precedence,T),l=T)}l&&s.set(null,l)}f=r.instance,T=f.getAttribute("data-precedence"),m=s.get(T)||l,m===l&&s.set(null,f),s.set(T,f),this.count++,l=su.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),r.state.loading|=4}}var Sl={$$typeof:U,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function aE(e,r,s,l,f,m,T,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ft(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ft(0),this.hiddenUpdates=ft(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function M_(e,r,s,l,f,m,T,C,G,et,vt,Tt){return e=new aE(e,r,s,T,C,G,et,Tt),r=1,m===!0&&(r|=24),m=ci(3,null,null,r),e.current=m,m.stateNode=e,r=ld(),r.refCount++,e.pooledCache=r,r.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:r},dd(m),e}function E_(e){return e?(e=Rs,e):Rs}function T_(e,r,s,l,f,m){f=E_(f),l.context===null?l.context=f:l.pendingContext=f,l=ia(r),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=ra(e,l,r),s!==null&&(pi(s,e,r),Ko(s,e,r))}function A_(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<r?s:r}}function Ch(e,r){A_(e,r),(e=e.alternate)&&A_(e,r)}function R_(e){if(e.tag===13){var r=As(e,67108864);r!==null&&pi(r,e,67108864),Ch(e,67108864)}}var lu=!0;function sE(e,r,s,l){var f=F.T;F.T=null;var m=Y.p;try{Y.p=2,wh(e,r,s,l)}finally{Y.p=m,F.T=f}}function oE(e,r,s,l){var f=F.T;F.T=null;var m=Y.p;try{Y.p=8,wh(e,r,s,l)}finally{Y.p=m,F.T=f}}function wh(e,r,s,l){if(lu){var f=Dh(l);if(f===null)gh(e,r,l,cu,s),w_(e,l);else if(cE(f,e,r,s,l))l.stopPropagation();else if(w_(e,l),r&4&&-1<lE.indexOf(e)){for(;f!==null;){var m=mr(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var T=Nt(m.pendingLanes);if(T!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;T;){var G=1<<31-Dt(T);C.entanglements[1]|=G,T&=~G}ar(m),(Ge&6)===0&&(qc=$t()+500,hl(0))}}break;case 13:C=As(m,2),C!==null&&pi(C,m,2),jc(),Ch(m,2)}if(m=Dh(l),m===null&&gh(e,r,l,cu,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else gh(e,r,l,null,s)}}function Dh(e){return e=Pf(e),Uh(e)}var cu=null;function Uh(e){if(cu=null,e=pr(e),e!==null){var r=c(e);if(r===null)e=null;else{var s=r.tag;if(s===13){if(e=u(r),e!==null)return e;e=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null)}}return cu=e,null}function C_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case ae:return 2;case Xt:return 8;case B:case A:return 32;case nt:return 268435456;default:return 32}default:return 32}}var Lh=!1,va=null,_a=null,ya=null,xl=new Map,bl=new Map,Sa=[],lE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w_(e,r){switch(e){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":xl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":bl.delete(r.pointerId)}}function Ml(e,r,s,l,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:r,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},r!==null&&(r=mr(r),r!==null&&R_(r)),e):(e.eventSystemFlags|=l,r=e.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),e)}function cE(e,r,s,l,f){switch(r){case"focusin":return va=Ml(va,e,r,s,l,f),!0;case"dragenter":return _a=Ml(_a,e,r,s,l,f),!0;case"mouseover":return ya=Ml(ya,e,r,s,l,f),!0;case"pointerover":var m=f.pointerId;return xl.set(m,Ml(xl.get(m)||null,e,r,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,bl.set(m,Ml(bl.get(m)||null,e,r,s,l,f)),!0}return!1}function D_(e){var r=pr(e.target);if(r!==null){var s=c(r);if(s!==null){if(r=s.tag,r===13){if(r=u(s),r!==null){e.blockedOn=r,Lt(e.priority,function(){if(s.tag===13){var l=hi();l=ke(l);var f=As(s,l);f!==null&&pi(f,s,l),Ch(s,l)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uu(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var s=Dh(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Of=l,s.target.dispatchEvent(l),Of=null}else return r=mr(s),r!==null&&R_(r),e.blockedOn=s,!1;r.shift()}return!0}function U_(e,r,s){uu(e)&&s.delete(r)}function uE(){Lh=!1,va!==null&&uu(va)&&(va=null),_a!==null&&uu(_a)&&(_a=null),ya!==null&&uu(ya)&&(ya=null),xl.forEach(U_),bl.forEach(U_)}function fu(e,r){e.blockedOn===r&&(e.blockedOn=null,Lh||(Lh=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,uE)))}var du=null;function L_(e){du!==e&&(du=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){du===e&&(du=null);for(var r=0;r<e.length;r+=3){var s=e[r],l=e[r+1],f=e[r+2];if(typeof l!="function"){if(Uh(l||s)===null)continue;break}var m=mr(s);m!==null&&(e.splice(r,3),r-=3,Ud(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function El(e){function r(G){return fu(G,e)}va!==null&&fu(va,e),_a!==null&&fu(_a,e),ya!==null&&fu(ya,e),xl.forEach(r),bl.forEach(r);for(var s=0;s<Sa.length;s++){var l=Sa[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Sa.length&&(s=Sa[0],s.blockedOn===null);)D_(s),s.blockedOn===null&&Sa.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],T=f[se]||null;if(typeof m=="function")T||L_(s);else if(T){var C=null;if(m&&m.hasAttribute("formAction")){if(f=m,T=m[se]||null)C=T.formAction;else if(Uh(f)!==null)continue}else C=T.action;typeof C=="function"?s[l+1]=C:(s.splice(l,3),l-=3),L_(s)}}}function Nh(e){this._internalRoot=e}hu.prototype.render=Nh.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,l=hi();T_(s,l,e,r,null,null)},hu.prototype.unmount=Nh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;T_(e.current,2,null,e,null,null),jc(),r[Se]=null}};function hu(e){this._internalRoot=e}hu.prototype.unstable_scheduleHydration=function(e){if(e){var r=Ce();e={blockedOn:null,target:e,priority:r};for(var s=0;s<Sa.length&&r!==0&&r<Sa[s].priority;s++);Sa.splice(s,0,e),s===0&&D_(e)}};var N_=t.version;if(N_!=="19.1.0")throw Error(a(527,N_,"19.1.0"));Y.findDOMNode=function(e){var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=h(r),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var fE={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{gt=pu.inject(fE),Ft=pu}catch{}}return Rl.createRoot=function(e,r){if(!o(e))throw Error(a(299));var s=!1,l="",f=$0,m=K0,T=Z0,C=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(C=r.unstable_transitionCallbacks)),r=M_(e,1,!1,null,null,s,l,f,m,T,C,null),e[Se]=r.current,mh(e),new Nh(r)},Rl.hydrateRoot=function(e,r,s){if(!o(e))throw Error(a(299));var l=!1,f="",m=$0,T=K0,C=Z0,G=null,et=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(T=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(G=s.unstable_transitionCallbacks),s.formState!==void 0&&(et=s.formState)),r=M_(e,1,!0,r,s??null,l,f,m,T,C,G,et),r.context=E_(null),s=r.current,l=hi(),l=ke(l),f=ia(l),f.callback=null,ra(s,f,l),s=l,r.current.lanes=s,xt(r,s),ar(r),e[Se]=r.current,mh(e),new hu(r)},Rl.version="19.1.0",Rl}var X_;function EE(){if(X_)return Bh.exports;X_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Bh.exports=ME(),Bh.exports}var TE=EE();const AE=LS(TE),Fl={black:"#000",white:"#fff"},Zs={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},Qs={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},Js={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},to={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},eo={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},Cl={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},RE={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function vs(i,...t){const n=new URL(`https://mui.com/production-error/?code=${i}`);return t.forEach(a=>n.searchParams.append("args[]",a)),`Minified MUI error #${i}; visit ${n} for the full message.`}const dr="$$material";function rf(){return rf=Object.assign?Object.assign.bind():function(i){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(i[a]=n[a])}return i},rf.apply(null,arguments)}function CE(i){if(i.sheet)return i.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===i)return document.styleSheets[t]}function wE(i){var t=document.createElement("style");return t.setAttribute("data-emotion",i.key),i.nonce!==void 0&&t.setAttribute("nonce",i.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var DE=function(){function i(n){var a=this;this._insertTag=function(o){var c;a.tags.length===0?a.insertionPoint?c=a.insertionPoint.nextSibling:a.prepend?c=a.container.firstChild:c=a.before:c=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(o,c),a.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=i.prototype;return t.hydrate=function(a){a.forEach(this._insertTag)},t.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(wE(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var c=CE(o);try{c.insertRule(a,c.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(a));this.ctr++},t.flush=function(){this.tags.forEach(function(a){var o;return(o=a.parentNode)==null?void 0:o.removeChild(a)}),this.tags=[],this.ctr=0},i}(),jn="-ms-",af="-moz-",Ie="-webkit-",NS="comm",Cm="rule",wm="decl",UE="@import",OS="@keyframes",LE="@layer",NE=Math.abs,gf=String.fromCharCode,OE=Object.assign;function PE(i,t){return Gn(i,0)^45?(((t<<2^Gn(i,0))<<2^Gn(i,1))<<2^Gn(i,2))<<2^Gn(i,3):0}function PS(i){return i.trim()}function BE(i,t){return(i=t.exec(i))?i[0]:i}function ze(i,t,n){return i.replace(t,n)}function Rp(i,t){return i.indexOf(t)}function Gn(i,t){return i.charCodeAt(t)|0}function Hl(i,t,n){return i.slice(t,n)}function or(i){return i.length}function Dm(i){return i.length}function mu(i,t){return t.push(i),i}function IE(i,t){return i.map(t).join("")}var vf=1,Mo=1,BS=0,si=0,En=0,wo="";function _f(i,t,n,a,o,c,u){return{value:i,root:t,parent:n,type:a,props:o,children:c,line:vf,column:Mo,length:u,return:""}}function wl(i,t){return OE(_f("",null,null,"",null,null,0),i,{length:-i.length},t)}function zE(){return En}function FE(){return En=si>0?Gn(wo,--si):0,Mo--,En===10&&(Mo=1,vf--),En}function _i(){return En=si<BS?Gn(wo,si++):0,Mo++,En===10&&(Mo=1,vf++),En}function hr(){return Gn(wo,si)}function Xu(){return si}function Yl(i,t){return Hl(wo,i,t)}function Gl(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function IS(i){return vf=Mo=1,BS=or(wo=i),si=0,[]}function zS(i){return wo="",i}function Wu(i){return PS(Yl(si-1,Cp(i===91?i+2:i===40?i+1:i)))}function HE(i){for(;(En=hr())&&En<33;)_i();return Gl(i)>2||Gl(En)>3?"":" "}function GE(i,t){for(;--t&&_i()&&!(En<48||En>102||En>57&&En<65||En>70&&En<97););return Yl(i,Xu()+(t<6&&hr()==32&&_i()==32))}function Cp(i){for(;_i();)switch(En){case i:return si;case 34:case 39:i!==34&&i!==39&&Cp(En);break;case 40:i===41&&Cp(i);break;case 92:_i();break}return si}function VE(i,t){for(;_i()&&i+En!==57;)if(i+En===84&&hr()===47)break;return"/*"+Yl(t,si-1)+"*"+gf(i===47?i:_i())}function kE(i){for(;!Gl(hr());)_i();return Yl(i,si)}function XE(i){return zS(qu("",null,null,null,[""],i=IS(i),0,[0],i))}function qu(i,t,n,a,o,c,u,d,h){for(var p=0,g=0,v=u,_=0,x=0,M=0,E=1,b=1,S=1,O=0,U="",R=o,D=c,z=a,I=U;b;)switch(M=O,O=_i()){case 40:if(M!=108&&Gn(I,v-1)==58){Rp(I+=ze(Wu(O),"&","&\f"),"&\f")!=-1&&(S=-1);break}case 34:case 39:case 91:I+=Wu(O);break;case 9:case 10:case 13:case 32:I+=HE(M);break;case 92:I+=GE(Xu()-1,7);continue;case 47:switch(hr()){case 42:case 47:mu(WE(VE(_i(),Xu()),t,n),h);break;default:I+="/"}break;case 123*E:d[p++]=or(I)*S;case 125*E:case 59:case 0:switch(O){case 0:case 125:b=0;case 59+g:S==-1&&(I=ze(I,/\f/g,"")),x>0&&or(I)-v&&mu(x>32?q_(I+";",a,n,v-1):q_(ze(I," ","")+";",a,n,v-2),h);break;case 59:I+=";";default:if(mu(z=W_(I,t,n,p,g,o,d,U,R=[],D=[],v),c),O===123)if(g===0)qu(I,t,z,z,R,c,v,d,D);else switch(_===99&&Gn(I,3)===110?100:_){case 100:case 108:case 109:case 115:qu(i,z,z,a&&mu(W_(i,z,z,0,0,o,d,U,o,R=[],v),D),o,D,v,d,a?R:D);break;default:qu(I,z,z,z,[""],D,0,d,D)}}p=g=x=0,E=S=1,U=I="",v=u;break;case 58:v=1+or(I),x=M;default:if(E<1){if(O==123)--E;else if(O==125&&E++==0&&FE()==125)continue}switch(I+=gf(O),O*E){case 38:S=g>0?1:(I+="\f",-1);break;case 44:d[p++]=(or(I)-1)*S,S=1;break;case 64:hr()===45&&(I+=Wu(_i())),_=hr(),g=v=or(U=I+=kE(Xu())),O++;break;case 45:M===45&&or(I)==2&&(E=0)}}return c}function W_(i,t,n,a,o,c,u,d,h,p,g){for(var v=o-1,_=o===0?c:[""],x=Dm(_),M=0,E=0,b=0;M<a;++M)for(var S=0,O=Hl(i,v+1,v=NE(E=u[M])),U=i;S<x;++S)(U=PS(E>0?_[S]+" "+O:ze(O,/&\f/g,_[S])))&&(h[b++]=U);return _f(i,t,n,o===0?Cm:d,h,p,g)}function WE(i,t,n){return _f(i,t,n,NS,gf(zE()),Hl(i,2,-2),0)}function q_(i,t,n,a){return _f(i,t,n,wm,Hl(i,0,a),Hl(i,a+1,-1),a)}function _o(i,t){for(var n="",a=Dm(i),o=0;o<a;o++)n+=t(i[o],o,i,t)||"";return n}function qE(i,t,n,a){switch(i.type){case LE:if(i.children.length)break;case UE:case wm:return i.return=i.return||i.value;case NS:return"";case OS:return i.return=i.value+"{"+_o(i.children,a)+"}";case Cm:i.value=i.props.join(",")}return or(n=_o(i.children,a))?i.return=i.value+"{"+n+"}":""}function YE(i){var t=Dm(i);return function(n,a,o,c){for(var u="",d=0;d<t;d++)u+=i[d](n,a,o,c)||"";return u}}function jE(i){return function(t){t.root||(t=t.return)&&i(t)}}function FS(i){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=i(n)),t[n]}}var $E=function(t,n,a){for(var o=0,c=0;o=c,c=hr(),o===38&&c===12&&(n[a]=1),!Gl(c);)_i();return Yl(t,si)},KE=function(t,n){var a=-1,o=44;do switch(Gl(o)){case 0:o===38&&hr()===12&&(n[a]=1),t[a]+=$E(si-1,n,a);break;case 2:t[a]+=Wu(o);break;case 4:if(o===44){t[++a]=hr()===58?"&\f":"",n[a]=t[a].length;break}default:t[a]+=gf(o)}while(o=_i());return t},ZE=function(t,n){return zS(KE(IS(t),n))},Y_=new WeakMap,QE=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,a=t.parent,o=t.column===a.column&&t.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Y_.get(a))&&!o){Y_.set(t,!0);for(var c=[],u=ZE(n,c),d=a.props,h=0,p=0;h<u.length;h++)for(var g=0;g<d.length;g++,p++)t.props[p]=c[h]?u[h].replace(/&\f/g,d[g]):d[g]+" "+u[h]}}},JE=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function HS(i,t){switch(PE(i,t)){case 5103:return Ie+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ie+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return Ie+i+af+i+jn+i+i;case 6828:case 4268:return Ie+i+jn+i+i;case 6165:return Ie+i+jn+"flex-"+i+i;case 5187:return Ie+i+ze(i,/(\w+).+(:[^]+)/,Ie+"box-$1$2"+jn+"flex-$1$2")+i;case 5443:return Ie+i+jn+"flex-item-"+ze(i,/flex-|-self/,"")+i;case 4675:return Ie+i+jn+"flex-line-pack"+ze(i,/align-content|flex-|-self/,"")+i;case 5548:return Ie+i+jn+ze(i,"shrink","negative")+i;case 5292:return Ie+i+jn+ze(i,"basis","preferred-size")+i;case 6060:return Ie+"box-"+ze(i,"-grow","")+Ie+i+jn+ze(i,"grow","positive")+i;case 4554:return Ie+ze(i,/([^-])(transform)/g,"$1"+Ie+"$2")+i;case 6187:return ze(ze(ze(i,/(zoom-|grab)/,Ie+"$1"),/(image-set)/,Ie+"$1"),i,"")+i;case 5495:case 3959:return ze(i,/(image-set\([^]*)/,Ie+"$1$`$1");case 4968:return ze(ze(i,/(.+:)(flex-)?(.*)/,Ie+"box-pack:$3"+jn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ie+i+i;case 4095:case 3583:case 4068:case 2532:return ze(i,/(.+)-inline(.+)/,Ie+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(or(i)-1-t>6)switch(Gn(i,t+1)){case 109:if(Gn(i,t+4)!==45)break;case 102:return ze(i,/(.+:)(.+)-([^]+)/,"$1"+Ie+"$2-$3$1"+af+(Gn(i,t+3)==108?"$3":"$2-$3"))+i;case 115:return~Rp(i,"stretch")?HS(ze(i,"stretch","fill-available"),t)+i:i}break;case 4949:if(Gn(i,t+1)!==115)break;case 6444:switch(Gn(i,or(i)-3-(~Rp(i,"!important")&&10))){case 107:return ze(i,":",":"+Ie)+i;case 101:return ze(i,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ie+(Gn(i,14)===45?"inline-":"")+"box$3$1"+Ie+"$2$3$1"+jn+"$2box$3")+i}break;case 5936:switch(Gn(i,t+11)){case 114:return Ie+i+jn+ze(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return Ie+i+jn+ze(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return Ie+i+jn+ze(i,/[svh]\w+-[tblr]{2}/,"lr")+i}return Ie+i+jn+i+i}return i}var t1=function(t,n,a,o){if(t.length>-1&&!t.return)switch(t.type){case wm:t.return=HS(t.value,t.length);break;case OS:return _o([wl(t,{value:ze(t.value,"@","@"+Ie)})],o);case Cm:if(t.length)return IE(t.props,function(c){switch(BE(c,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return _o([wl(t,{props:[ze(c,/:(read-\w+)/,":"+af+"$1")]})],o);case"::placeholder":return _o([wl(t,{props:[ze(c,/:(plac\w+)/,":"+Ie+"input-$1")]}),wl(t,{props:[ze(c,/:(plac\w+)/,":"+af+"$1")]}),wl(t,{props:[ze(c,/:(plac\w+)/,jn+"input-$1")]})],o)}return""})}},e1=[t1],n1=function(t){var n=t.key;if(n==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(E){var b=E.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(E),E.setAttribute("data-s",""))})}var o=t.stylisPlugins||e1,c={},u,d=[];u=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(E){for(var b=E.getAttribute("data-emotion").split(" "),S=1;S<b.length;S++)c[b[S]]=!0;d.push(E)});var h,p=[QE,JE];{var g,v=[qE,jE(function(E){g.insert(E)})],_=YE(p.concat(o,v)),x=function(b){return _o(XE(b),_)};h=function(b,S,O,U){g=O,x(b?b+"{"+S.styles+"}":S.styles),U&&(M.inserted[S.name]=!0)}}var M={key:n,sheet:new DE({key:n,container:u,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:c,registered:{},insert:h};return M.sheet.hydrate(d),M},Hh={exports:{}},Fe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function i1(){if(j_)return Fe;j_=1;var i=typeof Symbol=="function"&&Symbol.for,t=i?Symbol.for("react.element"):60103,n=i?Symbol.for("react.portal"):60106,a=i?Symbol.for("react.fragment"):60107,o=i?Symbol.for("react.strict_mode"):60108,c=i?Symbol.for("react.profiler"):60114,u=i?Symbol.for("react.provider"):60109,d=i?Symbol.for("react.context"):60110,h=i?Symbol.for("react.async_mode"):60111,p=i?Symbol.for("react.concurrent_mode"):60111,g=i?Symbol.for("react.forward_ref"):60112,v=i?Symbol.for("react.suspense"):60113,_=i?Symbol.for("react.suspense_list"):60120,x=i?Symbol.for("react.memo"):60115,M=i?Symbol.for("react.lazy"):60116,E=i?Symbol.for("react.block"):60121,b=i?Symbol.for("react.fundamental"):60117,S=i?Symbol.for("react.responder"):60118,O=i?Symbol.for("react.scope"):60119;function U(D){if(typeof D=="object"&&D!==null){var z=D.$$typeof;switch(z){case t:switch(D=D.type,D){case h:case p:case a:case c:case o:case v:return D;default:switch(D=D&&D.$$typeof,D){case d:case g:case M:case x:case u:return D;default:return z}}case n:return z}}}function R(D){return U(D)===p}return Fe.AsyncMode=h,Fe.ConcurrentMode=p,Fe.ContextConsumer=d,Fe.ContextProvider=u,Fe.Element=t,Fe.ForwardRef=g,Fe.Fragment=a,Fe.Lazy=M,Fe.Memo=x,Fe.Portal=n,Fe.Profiler=c,Fe.StrictMode=o,Fe.Suspense=v,Fe.isAsyncMode=function(D){return R(D)||U(D)===h},Fe.isConcurrentMode=R,Fe.isContextConsumer=function(D){return U(D)===d},Fe.isContextProvider=function(D){return U(D)===u},Fe.isElement=function(D){return typeof D=="object"&&D!==null&&D.$$typeof===t},Fe.isForwardRef=function(D){return U(D)===g},Fe.isFragment=function(D){return U(D)===a},Fe.isLazy=function(D){return U(D)===M},Fe.isMemo=function(D){return U(D)===x},Fe.isPortal=function(D){return U(D)===n},Fe.isProfiler=function(D){return U(D)===c},Fe.isStrictMode=function(D){return U(D)===o},Fe.isSuspense=function(D){return U(D)===v},Fe.isValidElementType=function(D){return typeof D=="string"||typeof D=="function"||D===a||D===p||D===c||D===o||D===v||D===_||typeof D=="object"&&D!==null&&(D.$$typeof===M||D.$$typeof===x||D.$$typeof===u||D.$$typeof===d||D.$$typeof===g||D.$$typeof===b||D.$$typeof===S||D.$$typeof===O||D.$$typeof===E)},Fe.typeOf=U,Fe}var $_;function r1(){return $_||($_=1,Hh.exports=i1()),Hh.exports}var Gh,K_;function a1(){if(K_)return Gh;K_=1;var i=r1(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};c[i.ForwardRef]=a,c[i.Memo]=o;function u(M){return i.isMemo(M)?o:c[M.$$typeof]||t}var d=Object.defineProperty,h=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,_=Object.prototype;function x(M,E,b){if(typeof E!="string"){if(_){var S=v(E);S&&S!==_&&x(M,S,b)}var O=h(E);p&&(O=O.concat(p(E)));for(var U=u(M),R=u(E),D=0;D<O.length;++D){var z=O[D];if(!n[z]&&!(b&&b[z])&&!(R&&R[z])&&!(U&&U[z])){var I=g(E,z);try{d(M,z,I)}catch{}}}}return M}return Gh=x,Gh}a1();var s1=!0;function GS(i,t,n){var a="";return n.split(" ").forEach(function(o){i[o]!==void 0?t.push(i[o]+";"):o&&(a+=o+" ")}),a}var Um=function(t,n,a){var o=t.key+"-"+n.name;(a===!1||s1===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Lm=function(t,n,a){Um(t,n,a);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var c=n;do t.insert(n===c?"."+o:"",c,t.sheet,!0),c=c.next;while(c!==void 0)}};function o1(i){for(var t=0,n,a=0,o=i.length;o>=4;++a,o-=4)n=i.charCodeAt(a)&255|(i.charCodeAt(++a)&255)<<8|(i.charCodeAt(++a)&255)<<16|(i.charCodeAt(++a)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(i.charCodeAt(a+2)&255)<<16;case 2:t^=(i.charCodeAt(a+1)&255)<<8;case 1:t^=i.charCodeAt(a)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var l1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},c1=/[A-Z]|^ms/g,u1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,VS=function(t){return t.charCodeAt(1)===45},Z_=function(t){return t!=null&&typeof t!="boolean"},Vh=FS(function(i){return VS(i)?i:i.replace(c1,"-$&").toLowerCase()}),Q_=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(u1,function(a,o,c){return lr={name:o,styles:c,next:lr},o})}return l1[t]!==1&&!VS(t)&&typeof n=="number"&&n!==0?n+"px":n};function Vl(i,t,n){if(n==null)return"";var a=n;if(a.__emotion_styles!==void 0)return a;switch(typeof n){case"boolean":return"";case"object":{var o=n;if(o.anim===1)return lr={name:o.name,styles:o.styles,next:lr},o.name;var c=n;if(c.styles!==void 0){var u=c.next;if(u!==void 0)for(;u!==void 0;)lr={name:u.name,styles:u.styles,next:lr},u=u.next;var d=c.styles+";";return d}return f1(i,t,n)}case"function":{if(i!==void 0){var h=lr,p=n(i);return lr=h,Vl(i,t,p)}break}}var g=n;if(t==null)return g;var v=t[g];return v!==void 0?v:g}function f1(i,t,n){var a="";if(Array.isArray(n))for(var o=0;o<n.length;o++)a+=Vl(i,t,n[o])+";";else for(var c in n){var u=n[c];if(typeof u!="object"){var d=u;t!=null&&t[d]!==void 0?a+=c+"{"+t[d]+"}":Z_(d)&&(a+=Vh(c)+":"+Q_(c,d)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&(t==null||t[u[0]]===void 0))for(var h=0;h<u.length;h++)Z_(u[h])&&(a+=Vh(c)+":"+Q_(c,u[h])+";");else{var p=Vl(i,t,u);switch(c){case"animation":case"animationName":{a+=Vh(c)+":"+p+";";break}default:a+=c+"{"+p+"}"}}}return a}var J_=/label:\s*([^\s;{]+)\s*(;|$)/g,lr;function jl(i,t,n){if(i.length===1&&typeof i[0]=="object"&&i[0]!==null&&i[0].styles!==void 0)return i[0];var a=!0,o="";lr=void 0;var c=i[0];if(c==null||c.raw===void 0)a=!1,o+=Vl(n,t,c);else{var u=c;o+=u[0]}for(var d=1;d<i.length;d++)if(o+=Vl(n,t,i[d]),a){var h=c;o+=h[d]}J_.lastIndex=0;for(var p="",g;(g=J_.exec(o))!==null;)p+="-"+g[1];var v=o1(o)+p;return{name:v,styles:o,next:lr}}var d1=function(t){return t()},kS=z_.useInsertionEffect?z_.useInsertionEffect:!1,XS=kS||d1,ty=kS||ot.useLayoutEffect,WS=ot.createContext(typeof HTMLElement<"u"?n1({key:"css"}):null);WS.Provider;var Nm=function(t){return ot.forwardRef(function(n,a){var o=ot.useContext(WS);return t(n,o,a)})},$l=ot.createContext({}),Om={}.hasOwnProperty,wp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",h1=function(t,n){var a={};for(var o in n)Om.call(n,o)&&(a[o]=n[o]);return a[wp]=t,a},p1=function(t){var n=t.cache,a=t.serialized,o=t.isStringTag;return Um(n,a,o),XS(function(){return Lm(n,a,o)}),null},m1=Nm(function(i,t,n){var a=i.css;typeof a=="string"&&t.registered[a]!==void 0&&(a=t.registered[a]);var o=i[wp],c=[a],u="";typeof i.className=="string"?u=GS(t.registered,c,i.className):i.className!=null&&(u=i.className+" ");var d=jl(c,void 0,ot.useContext($l));u+=t.key+"-"+d.name;var h={};for(var p in i)Om.call(i,p)&&p!=="css"&&p!==wp&&(h[p]=i[p]);return h.className=u,n&&(h.ref=n),ot.createElement(ot.Fragment,null,ot.createElement(p1,{cache:t,serialized:d,isStringTag:typeof o=="string"}),ot.createElement(o,h))}),g1=m1,ey=function(t,n){var a=arguments;if(n==null||!Om.call(n,"css"))return ot.createElement.apply(void 0,a);var o=a.length,c=new Array(o);c[0]=g1,c[1]=h1(t,n);for(var u=2;u<o;u++)c[u]=a[u];return ot.createElement.apply(null,c)};(function(i){var t;t||(t=i.JSX||(i.JSX={}))})(ey||(ey={}));var v1=Nm(function(i,t){var n=i.styles,a=jl([n],void 0,ot.useContext($l)),o=ot.useRef();return ty(function(){var c=t.key+"-global",u=new t.sheet.constructor({key:c,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),d=!1,h=document.querySelector('style[data-emotion="'+c+" "+a.name+'"]');return t.sheet.tags.length&&(u.before=t.sheet.tags[0]),h!==null&&(d=!0,h.setAttribute("data-emotion",c),u.hydrate([h])),o.current=[u,d],function(){u.flush()}},[t]),ty(function(){var c=o.current,u=c[0],d=c[1];if(d){c[1]=!1;return}if(a.next!==void 0&&Lm(t,a.next,!0),u.tags.length){var h=u.tags[u.tags.length-1].nextElementSibling;u.before=h,u.flush()}t.insert("",a,u,!1)},[t,a.name]),null});function _1(){for(var i=arguments.length,t=new Array(i),n=0;n<i;n++)t[n]=arguments[n];return jl(t)}function Pm(){var i=_1.apply(void 0,arguments),t="animation-"+i.name;return{name:t,styles:"@keyframes "+t+"{"+i.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var y1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,S1=FS(function(i){return y1.test(i)||i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)<91}),x1=S1,b1=function(t){return t!=="theme"},ny=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?x1:b1},iy=function(t,n,a){var o;if(n){var c=n.shouldForwardProp;o=t.__emotion_forwardProp&&c?function(u){return t.__emotion_forwardProp(u)&&c(u)}:c}return typeof o!="function"&&a&&(o=t.__emotion_forwardProp),o},M1=function(t){var n=t.cache,a=t.serialized,o=t.isStringTag;return Um(n,a,o),XS(function(){return Lm(n,a,o)}),null},E1=function i(t,n){var a=t.__emotion_real===t,o=a&&t.__emotion_base||t,c,u;n!==void 0&&(c=n.label,u=n.target);var d=iy(t,n,a),h=d||ny(o),p=!h("as");return function(){var g=arguments,v=a&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(c!==void 0&&v.push("label:"+c+";"),g[0]==null||g[0].raw===void 0)v.push.apply(v,g);else{var _=g[0];v.push(_[0]);for(var x=g.length,M=1;M<x;M++)v.push(g[M],_[M])}var E=Nm(function(b,S,O){var U=p&&b.as||o,R="",D=[],z=b;if(b.theme==null){z={};for(var I in b)z[I]=b[I];z.theme=ot.useContext($l)}typeof b.className=="string"?R=GS(S.registered,D,b.className):b.className!=null&&(R=b.className+" ");var H=jl(v.concat(D),S.registered,z);R+=S.key+"-"+H.name,u!==void 0&&(R+=" "+u);var w=p&&d===void 0?ny(U):h,y={};for(var N in b)p&&N==="as"||w(N)&&(y[N]=b[N]);return y.className=R,O&&(y.ref=O),ot.createElement(ot.Fragment,null,ot.createElement(M1,{cache:S,serialized:H,isStringTag:typeof U=="string"}),ot.createElement(U,y))});return E.displayName=c!==void 0?c:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",E.defaultProps=t.defaultProps,E.__emotion_real=E,E.__emotion_base=o,E.__emotion_styles=v,E.__emotion_forwardProp=d,Object.defineProperty(E,"toString",{value:function(){return"."+u}}),E.withComponent=function(b,S){var O=i(b,rf({},n,S,{shouldForwardProp:iy(E,S,!0)}));return O.apply(void 0,v)},E}},T1=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Dp=E1.bind(null);T1.forEach(function(i){Dp[i]=Dp(i)});function A1(i){return i==null||Object.keys(i).length===0}function qS(i){const{styles:t,defaultTheme:n={}}=i,a=typeof t=="function"?o=>t(A1(o)?n:o):t;return dt.jsx(v1,{styles:a})}function YS(i,t){return Dp(i,t)}function R1(i,t){Array.isArray(i.__emotion_styles)&&(i.__emotion_styles=t(i.__emotion_styles))}const ry=[];function ay(i){return ry[0]=i,jl(ry)}var kh={exports:{}},Ye={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function C1(){if(sy)return Ye;sy=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.view_transition"),x=Symbol.for("react.client.reference");function M(E){if(typeof E=="object"&&E!==null){var b=E.$$typeof;switch(b){case i:switch(E=E.type,E){case n:case o:case a:case h:case p:case _:return E;default:switch(E=E&&E.$$typeof,E){case u:case d:case v:case g:return E;case c:return E;default:return b}}case t:return b}}}return Ye.ContextConsumer=c,Ye.ContextProvider=u,Ye.Element=i,Ye.ForwardRef=d,Ye.Fragment=n,Ye.Lazy=v,Ye.Memo=g,Ye.Portal=t,Ye.Profiler=o,Ye.StrictMode=a,Ye.Suspense=h,Ye.SuspenseList=p,Ye.isContextConsumer=function(E){return M(E)===c},Ye.isContextProvider=function(E){return M(E)===u},Ye.isElement=function(E){return typeof E=="object"&&E!==null&&E.$$typeof===i},Ye.isForwardRef=function(E){return M(E)===d},Ye.isFragment=function(E){return M(E)===n},Ye.isLazy=function(E){return M(E)===v},Ye.isMemo=function(E){return M(E)===g},Ye.isPortal=function(E){return M(E)===t},Ye.isProfiler=function(E){return M(E)===o},Ye.isStrictMode=function(E){return M(E)===a},Ye.isSuspense=function(E){return M(E)===h},Ye.isSuspenseList=function(E){return M(E)===p},Ye.isValidElementType=function(E){return typeof E=="string"||typeof E=="function"||E===n||E===o||E===a||E===h||E===p||typeof E=="object"&&E!==null&&(E.$$typeof===v||E.$$typeof===g||E.$$typeof===u||E.$$typeof===c||E.$$typeof===d||E.$$typeof===x||E.getModuleId!==void 0)},Ye.typeOf=M,Ye}var oy;function w1(){return oy||(oy=1,kh.exports=C1()),kh.exports}var jS=w1();function ur(i){if(typeof i!="object"||i===null)return!1;const t=Object.getPrototypeOf(i);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)}function $S(i){if(ot.isValidElement(i)||jS.isValidElementType(i)||!ur(i))return i;const t={};return Object.keys(i).forEach(n=>{t[n]=$S(i[n])}),t}function yi(i,t,n={clone:!0}){const a=n.clone?{...i}:i;return ur(i)&&ur(t)&&Object.keys(t).forEach(o=>{ot.isValidElement(t[o])||jS.isValidElementType(t[o])?a[o]=t[o]:ur(t[o])&&Object.prototype.hasOwnProperty.call(i,o)&&ur(i[o])?a[o]=yi(i[o],t[o],n):n.clone?a[o]=ur(t[o])?$S(t[o]):t[o]:a[o]=t[o]}),a}const D1=i=>{const t=Object.keys(i).map(n=>({key:n,val:i[n]}))||[];return t.sort((n,a)=>n.val-a.val),t.reduce((n,a)=>({...n,[a.key]:a.val}),{})};function U1(i){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:a=5,...o}=i,c=D1(t),u=Object.keys(c);function d(_){return`@media (min-width:${typeof t[_]=="number"?t[_]:_}${n})`}function h(_){return`@media (max-width:${(typeof t[_]=="number"?t[_]:_)-a/100}${n})`}function p(_,x){const M=u.indexOf(x);return`@media (min-width:${typeof t[_]=="number"?t[_]:_}${n}) and (max-width:${(M!==-1&&typeof t[u[M]]=="number"?t[u[M]]:x)-a/100}${n})`}function g(_){return u.indexOf(_)+1<u.length?p(_,u[u.indexOf(_)+1]):d(_)}function v(_){const x=u.indexOf(_);return x===0?d(u[1]):x===u.length-1?h(u[x]):p(_,u[u.indexOf(_)+1]).replace("@media","@media not all and")}return{keys:u,values:c,up:d,down:h,between:p,only:g,not:v,unit:n,...o}}function L1(i,t){if(!i.containerQueries)return t;const n=Object.keys(t).filter(a=>a.startsWith("@container")).sort((a,o)=>{var u,d;const c=/min-width:\s*([0-9.]+)/;return+(((u=a.match(c))==null?void 0:u[1])||0)-+(((d=o.match(c))==null?void 0:d[1])||0)});return n.length?n.reduce((a,o)=>{const c=t[o];return delete a[o],a[o]=c,a},{...t}):t}function N1(i,t){return t==="@"||t.startsWith("@")&&(i.some(n=>t.startsWith(`@${n}`))||!!t.match(/^@\d/))}function O1(i,t){const n=t.match(/^@([^/]+)?\/?(.+)?$/);if(!n)return null;const[,a,o]=n,c=Number.isNaN(+a)?a||0:+a;return i.containerQueries(o).up(c)}function P1(i){const t=(c,u)=>c.replace("@media",u?`@container ${u}`:"@container");function n(c,u){c.up=(...d)=>t(i.breakpoints.up(...d),u),c.down=(...d)=>t(i.breakpoints.down(...d),u),c.between=(...d)=>t(i.breakpoints.between(...d),u),c.only=(...d)=>t(i.breakpoints.only(...d),u),c.not=(...d)=>{const h=t(i.breakpoints.not(...d),u);return h.includes("not all and")?h.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):h}}const a={},o=c=>(n(a,c),a);return n(o),{...i,containerQueries:o}}const B1={borderRadius:4};function zl(i,t){return t?yi(i,t,{clone:!1}):i}const yf={xs:0,sm:600,md:900,lg:1200,xl:1536},ly={keys:["xs","sm","md","lg","xl"],up:i=>`@media (min-width:${yf[i]}px)`},I1={containerQueries:i=>({up:t=>{let n=typeof t=="number"?t:yf[t]||t;return typeof n=="number"&&(n=`${n}px`),i?`@container ${i} (min-width:${n})`:`@container (min-width:${n})`}})};function qr(i,t,n){const a=i.theme||{};if(Array.isArray(t)){const c=a.breakpoints||ly;return t.reduce((u,d,h)=>(u[c.up(c.keys[h])]=n(t[h]),u),{})}if(typeof t=="object"){const c=a.breakpoints||ly;return Object.keys(t).reduce((u,d)=>{if(N1(c.keys,d)){const h=O1(a.containerQueries?a:I1,d);h&&(u[h]=n(t[d],d))}else if(Object.keys(c.values||yf).includes(d)){const h=c.up(d);u[h]=n(t[d],d)}else{const h=d;u[h]=t[h]}return u},{})}return n(t)}function z1(i={}){var n;return((n=i.keys)==null?void 0:n.reduce((a,o)=>{const c=i.up(o);return a[c]={},a},{}))||{}}function F1(i,t){return i.reduce((n,a)=>{const o=n[a];return(!o||Object.keys(o).length===0)&&delete n[a],n},t)}function $n(i){if(typeof i!="string")throw new Error(vs(7));return i.charAt(0).toUpperCase()+i.slice(1)}function Da(i,t,n=!0){if(!t||typeof t!="string")return null;if(i&&i.vars&&n){const a=`vars.${t}`.split(".").reduce((o,c)=>o&&o[c]?o[c]:null,i);if(a!=null)return a}return t.split(".").reduce((a,o)=>a&&a[o]!=null?a[o]:null,i)}function sf(i,t,n,a=n){let o;return typeof i=="function"?o=i(n):Array.isArray(i)?o=i[n]||a:o=Da(i,n)||a,t&&(o=t(o,a,i)),o}function yn(i){const{prop:t,cssProperty:n=i.prop,themeKey:a,transform:o}=i,c=u=>{if(u[t]==null)return null;const d=u[t],h=u.theme,p=Da(h,a)||{};return qr(u,d,v=>{let _=sf(p,o,v);return v===_&&typeof v=="string"&&(_=sf(p,o,`${t}${v==="default"?"":$n(v)}`,v)),n===!1?_:{[n]:_}})};return c.propTypes={},c.filterProps=[t],c}function H1(i){const t={};return n=>(t[n]===void 0&&(t[n]=i(n)),t[n])}const G1={m:"margin",p:"padding"},V1={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},cy={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},k1=H1(i=>{if(i.length>2)if(cy[i])i=cy[i];else return[i];const[t,n]=i.split(""),a=G1[t],o=V1[n]||"";return Array.isArray(o)?o.map(c=>a+c):[a+o]}),Bm=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Im=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Bm,...Im];function Kl(i,t,n,a){const o=Da(i,t,!0)??n;return typeof o=="number"||typeof o=="string"?c=>typeof c=="string"?c:typeof o=="string"?o.startsWith("var(")&&c===0?0:o.startsWith("var(")&&c===1?o:`calc(${c} * ${o})`:o*c:Array.isArray(o)?c=>{if(typeof c=="string")return c;const u=Math.abs(c),d=o[u];return c>=0?d:typeof d=="number"?-d:typeof d=="string"&&d.startsWith("var(")?`calc(-1 * ${d})`:`-${d}`}:typeof o=="function"?o:()=>{}}function zm(i){return Kl(i,"spacing",8)}function Zl(i,t){return typeof t=="string"||t==null?t:i(t)}function X1(i,t){return n=>i.reduce((a,o)=>(a[o]=Zl(t,n),a),{})}function W1(i,t,n,a){if(!t.includes(n))return null;const o=k1(n),c=X1(o,a),u=i[n];return qr(i,u,c)}function KS(i,t){const n=zm(i.theme);return Object.keys(i).map(a=>W1(i,t,a,n)).reduce(zl,{})}function dn(i){return KS(i,Bm)}dn.propTypes={};dn.filterProps=Bm;function hn(i){return KS(i,Im)}hn.propTypes={};hn.filterProps=Im;function ZS(i=8,t=zm({spacing:i})){if(i.mui)return i;const n=(...a)=>(a.length===0?[1]:a).map(c=>{const u=t(c);return typeof u=="number"?`${u}px`:u}).join(" ");return n.mui=!0,n}function Sf(...i){const t=i.reduce((a,o)=>(o.filterProps.forEach(c=>{a[c]=o}),a),{}),n=a=>Object.keys(a).reduce((o,c)=>t[c]?zl(o,t[c](a)):o,{});return n.propTypes={},n.filterProps=i.reduce((a,o)=>a.concat(o.filterProps),[]),n}function Pi(i){return typeof i!="number"?i:`${i}px solid`}function zi(i,t){return yn({prop:i,themeKey:"borders",transform:t})}const q1=zi("border",Pi),Y1=zi("borderTop",Pi),j1=zi("borderRight",Pi),$1=zi("borderBottom",Pi),K1=zi("borderLeft",Pi),Z1=zi("borderColor"),Q1=zi("borderTopColor"),J1=zi("borderRightColor"),tT=zi("borderBottomColor"),eT=zi("borderLeftColor"),nT=zi("outline",Pi),iT=zi("outlineColor"),xf=i=>{if(i.borderRadius!==void 0&&i.borderRadius!==null){const t=Kl(i.theme,"shape.borderRadius",4),n=a=>({borderRadius:Zl(t,a)});return qr(i,i.borderRadius,n)}return null};xf.propTypes={};xf.filterProps=["borderRadius"];Sf(q1,Y1,j1,$1,K1,Z1,Q1,J1,tT,eT,xf,nT,iT);const bf=i=>{if(i.gap!==void 0&&i.gap!==null){const t=Kl(i.theme,"spacing",8),n=a=>({gap:Zl(t,a)});return qr(i,i.gap,n)}return null};bf.propTypes={};bf.filterProps=["gap"];const Mf=i=>{if(i.columnGap!==void 0&&i.columnGap!==null){const t=Kl(i.theme,"spacing",8),n=a=>({columnGap:Zl(t,a)});return qr(i,i.columnGap,n)}return null};Mf.propTypes={};Mf.filterProps=["columnGap"];const Ef=i=>{if(i.rowGap!==void 0&&i.rowGap!==null){const t=Kl(i.theme,"spacing",8),n=a=>({rowGap:Zl(t,a)});return qr(i,i.rowGap,n)}return null};Ef.propTypes={};Ef.filterProps=["rowGap"];const rT=yn({prop:"gridColumn"}),aT=yn({prop:"gridRow"}),sT=yn({prop:"gridAutoFlow"}),oT=yn({prop:"gridAutoColumns"}),lT=yn({prop:"gridAutoRows"}),cT=yn({prop:"gridTemplateColumns"}),uT=yn({prop:"gridTemplateRows"}),fT=yn({prop:"gridTemplateAreas"}),dT=yn({prop:"gridArea"});Sf(bf,Mf,Ef,rT,aT,sT,oT,lT,cT,uT,fT,dT);function yo(i,t){return t==="grey"?t:i}const hT=yn({prop:"color",themeKey:"palette",transform:yo}),pT=yn({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:yo}),mT=yn({prop:"backgroundColor",themeKey:"palette",transform:yo});Sf(hT,pT,mT);function vi(i){return i<=1&&i!==0?`${i*100}%`:i}const gT=yn({prop:"width",transform:vi}),Fm=i=>{if(i.maxWidth!==void 0&&i.maxWidth!==null){const t=n=>{var o,c,u,d,h;const a=((u=(c=(o=i.theme)==null?void 0:o.breakpoints)==null?void 0:c.values)==null?void 0:u[n])||yf[n];return a?((h=(d=i.theme)==null?void 0:d.breakpoints)==null?void 0:h.unit)!=="px"?{maxWidth:`${a}${i.theme.breakpoints.unit}`}:{maxWidth:a}:{maxWidth:vi(n)}};return qr(i,i.maxWidth,t)}return null};Fm.filterProps=["maxWidth"];const vT=yn({prop:"minWidth",transform:vi}),_T=yn({prop:"height",transform:vi}),yT=yn({prop:"maxHeight",transform:vi}),ST=yn({prop:"minHeight",transform:vi});yn({prop:"size",cssProperty:"width",transform:vi});yn({prop:"size",cssProperty:"height",transform:vi});const xT=yn({prop:"boxSizing"});Sf(gT,Fm,vT,_T,yT,ST,xT);const Ql={border:{themeKey:"borders",transform:Pi},borderTop:{themeKey:"borders",transform:Pi},borderRight:{themeKey:"borders",transform:Pi},borderBottom:{themeKey:"borders",transform:Pi},borderLeft:{themeKey:"borders",transform:Pi},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Pi},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:xf},color:{themeKey:"palette",transform:yo},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:yo},backgroundColor:{themeKey:"palette",transform:yo},p:{style:hn},pt:{style:hn},pr:{style:hn},pb:{style:hn},pl:{style:hn},px:{style:hn},py:{style:hn},padding:{style:hn},paddingTop:{style:hn},paddingRight:{style:hn},paddingBottom:{style:hn},paddingLeft:{style:hn},paddingX:{style:hn},paddingY:{style:hn},paddingInline:{style:hn},paddingInlineStart:{style:hn},paddingInlineEnd:{style:hn},paddingBlock:{style:hn},paddingBlockStart:{style:hn},paddingBlockEnd:{style:hn},m:{style:dn},mt:{style:dn},mr:{style:dn},mb:{style:dn},ml:{style:dn},mx:{style:dn},my:{style:dn},margin:{style:dn},marginTop:{style:dn},marginRight:{style:dn},marginBottom:{style:dn},marginLeft:{style:dn},marginX:{style:dn},marginY:{style:dn},marginInline:{style:dn},marginInlineStart:{style:dn},marginInlineEnd:{style:dn},marginBlock:{style:dn},marginBlockStart:{style:dn},marginBlockEnd:{style:dn},displayPrint:{cssProperty:!1,transform:i=>({"@media print":{display:i}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:bf},rowGap:{style:Ef},columnGap:{style:Mf},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:vi},maxWidth:{style:Fm},minWidth:{transform:vi},height:{transform:vi},maxHeight:{transform:vi},minHeight:{transform:vi},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function bT(...i){const t=i.reduce((a,o)=>a.concat(Object.keys(o)),[]),n=new Set(t);return i.every(a=>n.size===Object.keys(a).length)}function MT(i,t){return typeof i=="function"?i(t):i}function ET(){function i(n,a,o,c){const u={[n]:a,theme:o},d=c[n];if(!d)return{[n]:a};const{cssProperty:h=n,themeKey:p,transform:g,style:v}=d;if(a==null)return null;if(p==="typography"&&a==="inherit")return{[n]:a};const _=Da(o,p)||{};return v?v(u):qr(u,a,M=>{let E=sf(_,g,M);return M===E&&typeof M=="string"&&(E=sf(_,g,`${n}${M==="default"?"":$n(M)}`,M)),h===!1?E:{[h]:E}})}function t(n){const{sx:a,theme:o={}}=n||{};if(!a)return null;const c=o.unstable_sxConfig??Ql;function u(d){let h=d;if(typeof d=="function")h=d(o);else if(typeof d!="object")return d;if(!h)return null;const p=z1(o.breakpoints),g=Object.keys(p);let v=p;return Object.keys(h).forEach(_=>{const x=MT(h[_],o);if(x!=null)if(typeof x=="object")if(c[_])v=zl(v,i(_,x,o,c));else{const M=qr({theme:o},x,E=>({[_]:E}));bT(M,x)?v[_]=t({sx:x,theme:o}):v=zl(v,M)}else v=zl(v,i(_,x,o,c))}),L1(o,F1(g,v))}return Array.isArray(a)?a.map(u):u(a)}return t}const Oa=ET();Oa.filterProps=["sx"];function TT(i,t){var a;const n=this;if(n.vars){if(!((a=n.colorSchemes)!=null&&a[i])||typeof n.getColorSchemeSelector!="function")return{};let o=n.getColorSchemeSelector(i);return o==="&"?t:((o.includes("data-")||o.includes("."))&&(o=`*:where(${o.replace(/\s*&$/,"")}) &`),{[o]:t})}return n.palette.mode===i?t:{}}function Jl(i={},...t){const{breakpoints:n={},palette:a={},spacing:o,shape:c={},...u}=i,d=U1(n),h=ZS(o);let p=yi({breakpoints:d,direction:"ltr",components:{},palette:{mode:"light",...a},spacing:h,shape:{...B1,...c}},u);return p=P1(p),p.applyStyles=TT,p=t.reduce((g,v)=>yi(g,v),p),p.unstable_sxConfig={...Ql,...u==null?void 0:u.unstable_sxConfig},p.unstable_sx=function(v){return Oa({sx:v,theme:this})},p}function AT(i){return Object.keys(i).length===0}function QS(i=null){const t=ot.useContext($l);return!t||AT(t)?i:t}const RT=Jl();function tc(i=RT){return QS(i)}function CT({styles:i,themeId:t,defaultTheme:n={}}){const a=tc(n),o=typeof i=="function"?i(t&&a[t]||a):i;return dt.jsx(qS,{styles:o})}const wT=i=>{var a;const t={systemProps:{},otherProps:{}},n=((a=i==null?void 0:i.theme)==null?void 0:a.unstable_sxConfig)??Ql;return Object.keys(i).forEach(o=>{n[o]?t.systemProps[o]=i[o]:t.otherProps[o]=i[o]}),t};function Hm(i){const{sx:t,...n}=i,{systemProps:a,otherProps:o}=wT(n);let c;return Array.isArray(t)?c=[a,...t]:typeof t=="function"?c=(...u)=>{const d=t(...u);return ur(d)?{...a,...d}:a}:c={...a,...t},{...o,sx:c}}const uy=i=>i,DT=()=>{let i=uy;return{configure(t){i=t},generate(t){return i(t)},reset(){i=uy}}},JS=DT();function tx(i){var t,n,a="";if(typeof i=="string"||typeof i=="number")a+=i;else if(typeof i=="object")if(Array.isArray(i)){var o=i.length;for(t=0;t<o;t++)i[t]&&(n=tx(i[t]))&&(a&&(a+=" "),a+=n)}else for(n in i)i[n]&&(a&&(a+=" "),a+=n);return a}function $e(){for(var i,t,n=0,a="",o=arguments.length;n<o;n++)(i=arguments[n])&&(t=tx(i))&&(a&&(a+=" "),a+=t);return a}function UT(i={}){const{themeId:t,defaultTheme:n,defaultClassName:a="MuiBox-root",generateClassName:o}=i,c=YS("div",{shouldForwardProp:d=>d!=="theme"&&d!=="sx"&&d!=="as"})(Oa);return ot.forwardRef(function(h,p){const g=tc(n),{className:v,component:_="div",...x}=Hm(h);return dt.jsx(c,{as:_,ref:p,className:$e(v,o?o(a):a),theme:t&&g[t]||g,...x})})}const LT={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Fi(i,t,n="Mui"){const a=LT[t];return a?`${n}-${a}`:`${JS.generate(i)}-${t}`}function Ki(i,t,n="Mui"){const a={};return t.forEach(o=>{a[o]=Fi(i,o,n)}),a}function ex(i){const{variants:t,...n}=i,a={variants:t,style:ay(n),isProcessed:!0};return a.style===n||t&&t.forEach(o=>{typeof o.style!="function"&&(o.style=ay(o.style))}),a}const NT=Jl();function Xh(i){return i!=="ownerState"&&i!=="theme"&&i!=="sx"&&i!=="as"}function OT(i){return i?(t,n)=>n[i]:null}function PT(i,t,n){i.theme=IT(i.theme)?n:i.theme[t]||i.theme}function Yu(i,t){const n=typeof t=="function"?t(i):t;if(Array.isArray(n))return n.flatMap(a=>Yu(i,a));if(Array.isArray(n==null?void 0:n.variants)){let a;if(n.isProcessed)a=n.style;else{const{variants:o,...c}=n;a=c}return nx(i,n.variants,[a])}return n!=null&&n.isProcessed?n.style:n}function nx(i,t,n=[]){var o;let a;t:for(let c=0;c<t.length;c+=1){const u=t[c];if(typeof u.props=="function"){if(a??(a={...i,...i.ownerState,ownerState:i.ownerState}),!u.props(a))continue}else for(const d in u.props)if(i[d]!==u.props[d]&&((o=i.ownerState)==null?void 0:o[d])!==u.props[d])continue t;typeof u.style=="function"?(a??(a={...i,...i.ownerState,ownerState:i.ownerState}),n.push(u.style(a))):n.push(u.style)}return n}function ix(i={}){const{themeId:t,defaultTheme:n=NT,rootShouldForwardProp:a=Xh,slotShouldForwardProp:o=Xh}=i;function c(d){PT(d,t,n)}return(d,h={})=>{R1(d,D=>D.filter(z=>z!==Oa));const{name:p,slot:g,skipVariantsResolver:v,skipSx:_,overridesResolver:x=OT(FT(g)),...M}=h,E=v!==void 0?v:g&&g!=="Root"&&g!=="root"||!1,b=_||!1;let S=Xh;g==="Root"||g==="root"?S=a:g?S=o:zT(d)&&(S=void 0);const O=YS(d,{shouldForwardProp:S,label:BT(),...M}),U=D=>{if(typeof D=="function"&&D.__emotion_real!==D)return function(I){return Yu(I,D)};if(ur(D)){const z=ex(D);return z.variants?function(H){return Yu(H,z)}:z.style}return D},R=(...D)=>{const z=[],I=D.map(U),H=[];if(z.push(c),p&&x&&H.push(function(j){var F,Y;const rt=(Y=(F=j.theme.components)==null?void 0:F[p])==null?void 0:Y.styleOverrides;if(!rt)return null;const lt={};for(const X in rt)lt[X]=Yu(j,rt[X]);return x(j,lt)}),p&&!E&&H.push(function(j){var lt,F;const q=j.theme,rt=(F=(lt=q==null?void 0:q.components)==null?void 0:lt[p])==null?void 0:F.variants;return rt?nx(j,rt):null}),b||H.push(Oa),Array.isArray(I[0])){const N=I.shift(),j=new Array(z.length).fill(""),q=new Array(H.length).fill("");let rt;rt=[...j,...N,...q],rt.raw=[...j,...N.raw,...q],z.unshift(rt)}const w=[...z,...I,...H],y=O(...w);return d.muiName&&(y.muiName=d.muiName),y};return O.withConfig&&(R.withConfig=O.withConfig),R}}function BT(i,t){return void 0}function IT(i){for(const t in i)return!1;return!0}function zT(i){return typeof i=="string"&&i.charCodeAt(0)>96}function FT(i){return i&&i.charAt(0).toLowerCase()+i.slice(1)}const rx=ix();function of(i,t){const n={...t};for(const a in i)if(Object.prototype.hasOwnProperty.call(i,a)){const o=a;if(o==="components"||o==="slots")n[o]={...i[o],...n[o]};else if(o==="componentsProps"||o==="slotProps"){const c=i[o],u=t[o];if(!u)n[o]=c||{};else if(!c)n[o]=u;else{n[o]={...u};for(const d in c)if(Object.prototype.hasOwnProperty.call(c,d)){const h=d;n[o][h]=of(c[h],u[h])}}}else n[o]===void 0&&(n[o]=i[o])}return n}function HT(i){const{theme:t,name:n,props:a}=i;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?a:of(t.components[n].defaultProps,a)}function ax({props:i,name:t,defaultTheme:n,themeId:a}){let o=tc(n);return a&&(o=o[a]||o),HT({theme:o,name:t,props:i})}const Gm=typeof window<"u"?ot.useLayoutEffect:ot.useEffect;function GT(i,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(i,n))}function Vm(i,t=0,n=1){return GT(i,t,n)}function VT(i){i=i.slice(1);const t=new RegExp(`.{1,${i.length>=6?2:1}}`,"g");let n=i.match(t);return n&&n[0].length===1&&(n=n.map(a=>a+a)),n?`rgb${n.length===4?"a":""}(${n.map((a,o)=>o<3?parseInt(a,16):Math.round(parseInt(a,16)/255*1e3)/1e3).join(", ")})`:""}function Pa(i){if(i.type)return i;if(i.charAt(0)==="#")return Pa(VT(i));const t=i.indexOf("("),n=i.substring(0,t);if(!["rgb","rgba","hsl","hsla","color"].includes(n))throw new Error(vs(9,i));let a=i.substring(t+1,i.length-1),o;if(n==="color"){if(a=a.split(" "),o=a.shift(),a.length===4&&a[3].charAt(0)==="/"&&(a[3]=a[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(o))throw new Error(vs(10,o))}else a=a.split(",");return a=a.map(c=>parseFloat(c)),{type:n,values:a,colorSpace:o}}const kT=i=>{const t=Pa(i);return t.values.slice(0,3).map((n,a)=>t.type.includes("hsl")&&a!==0?`${n}%`:n).join(" ")},Pl=(i,t)=>{try{return kT(i)}catch{return i}};function Tf(i){const{type:t,colorSpace:n}=i;let{values:a}=i;return t.includes("rgb")?a=a.map((o,c)=>c<3?parseInt(o,10):o):t.includes("hsl")&&(a[1]=`${a[1]}%`,a[2]=`${a[2]}%`),t.includes("color")?a=`${n} ${a.join(" ")}`:a=`${a.join(", ")}`,`${t}(${a})`}function sx(i){i=Pa(i);const{values:t}=i,n=t[0],a=t[1]/100,o=t[2]/100,c=a*Math.min(o,1-o),u=(p,g=(p+n/30)%12)=>o-c*Math.max(Math.min(g-3,9-g,1),-1);let d="rgb";const h=[Math.round(u(0)*255),Math.round(u(8)*255),Math.round(u(4)*255)];return i.type==="hsla"&&(d+="a",h.push(t[3])),Tf({type:d,values:h})}function Up(i){i=Pa(i);let t=i.type==="hsl"||i.type==="hsla"?Pa(sx(i)).values:i.values;return t=t.map(n=>(i.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function XT(i,t){const n=Up(i),a=Up(t);return(Math.max(n,a)+.05)/(Math.min(n,a)+.05)}function Ua(i,t){return i=Pa(i),t=Vm(t),(i.type==="rgb"||i.type==="hsl")&&(i.type+="a"),i.type==="color"?i.values[3]=`/${t}`:i.values[3]=t,Tf(i)}function gu(i,t,n){try{return Ua(i,t)}catch{return i}}function km(i,t){if(i=Pa(i),t=Vm(t),i.type.includes("hsl"))i.values[2]*=1-t;else if(i.type.includes("rgb")||i.type.includes("color"))for(let n=0;n<3;n+=1)i.values[n]*=1-t;return Tf(i)}function Je(i,t,n){try{return km(i,t)}catch{return i}}function Xm(i,t){if(i=Pa(i),t=Vm(t),i.type.includes("hsl"))i.values[2]+=(100-i.values[2])*t;else if(i.type.includes("rgb"))for(let n=0;n<3;n+=1)i.values[n]+=(255-i.values[n])*t;else if(i.type.includes("color"))for(let n=0;n<3;n+=1)i.values[n]+=(1-i.values[n])*t;return Tf(i)}function tn(i,t,n){try{return Xm(i,t)}catch{return i}}function WT(i,t=.15){return Up(i)>.5?km(i,t):Xm(i,t)}function vu(i,t,n){try{return WT(i,t)}catch{return i}}function ox(i,t=166){let n;function a(...o){const c=()=>{i.apply(this,o)};clearTimeout(n),n=setTimeout(c,t)}return a.clear=()=>{clearTimeout(n)},a}function qT(i,t){var n,a,o;return ot.isValidElement(i)&&t.indexOf(i.type.muiName??((o=(a=(n=i.type)==null?void 0:n._payload)==null?void 0:a.value)==null?void 0:o.muiName))!==-1}function lx(i){return i&&i.ownerDocument||document}function cx(i){return lx(i).defaultView||window}function YT(i,t){typeof i=="function"?i(t):i&&(i.current=t)}function ms(i){const t=ot.useRef(i);return Gm(()=>{t.current=i}),ot.useRef((...n)=>(0,t.current)(...n)).current}function lf(...i){return ot.useMemo(()=>i.every(t=>t==null)?null:t=>{i.forEach(n=>{YT(n,t)})},i)}const fy={};function ux(i,t){const n=ot.useRef(fy);return n.current===fy&&(n.current=i(t)),n}const jT=[];function $T(i){ot.useEffect(i,jT)}class Wm{constructor(){Tl(this,"currentId",null);Tl(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});Tl(this,"disposeEffect",()=>this.clear)}static create(){return new Wm}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function KT(){const i=ux(Wm.create).current;return $T(i.disposeEffect),i}function cf(i){try{return i.matches(":focus-visible")}catch{}return!1}function Zi(i,t,n=void 0){const a={};for(const o in i){const c=i[o];let u="",d=!0;for(let h=0;h<c.length;h+=1){const p=c[h];p&&(u+=(d===!0?"":" ")+t(p),d=!1,n&&n[p]&&(u+=" "+n[p]))}a[o]=u}return a}function ZT(i){return typeof i=="string"}function fx(i,t,n){return i===void 0||ZT(i)?t:{...t,ownerState:{...t.ownerState,...n}}}function QT(i,t=[]){if(i===void 0)return{};const n={};return Object.keys(i).filter(a=>a.match(/^on[A-Z]/)&&typeof i[a]=="function"&&!t.includes(a)).forEach(a=>{n[a]=i[a]}),n}function dy(i){if(i===void 0)return{};const t={};return Object.keys(i).filter(n=>!(n.match(/^on[A-Z]/)&&typeof i[n]=="function")).forEach(n=>{t[n]=i[n]}),t}function dx(i){const{getSlotProps:t,additionalProps:n,externalSlotProps:a,externalForwardedProps:o,className:c}=i;if(!t){const x=$e(n==null?void 0:n.className,c,o==null?void 0:o.className,a==null?void 0:a.className),M={...n==null?void 0:n.style,...o==null?void 0:o.style,...a==null?void 0:a.style},E={...n,...o,...a};return x.length>0&&(E.className=x),Object.keys(M).length>0&&(E.style=M),{props:E,internalRef:void 0}}const u=QT({...o,...a}),d=dy(a),h=dy(o),p=t(u),g=$e(p==null?void 0:p.className,n==null?void 0:n.className,c,o==null?void 0:o.className,a==null?void 0:a.className),v={...p==null?void 0:p.style,...n==null?void 0:n.style,...o==null?void 0:o.style,...a==null?void 0:a.style},_={...p,...n,...h,...d};return g.length>0&&(_.className=g),Object.keys(v).length>0&&(_.style=v),{props:_,internalRef:p.ref}}function hx(i,t,n){return typeof i=="function"?i(t,n):i}function uf(i){var v;const{elementType:t,externalSlotProps:n,ownerState:a,skipResolvingSlotProps:o=!1,...c}=i,u=o?{}:hx(n,a),{props:d,internalRef:h}=dx({...c,externalSlotProps:u}),p=lf(h,u==null?void 0:u.ref,(v=i.additionalProps)==null?void 0:v.ref);return fx(t,{...d,ref:p},a)}const px=ot.createContext(null);function qm(){return ot.useContext(px)}const JT=typeof Symbol=="function"&&Symbol.for,tA=JT?Symbol.for("mui.nested"):"__THEME_NESTED__";function eA(i,t){return typeof t=="function"?t(i):{...i,...t}}function nA(i){const{children:t,theme:n}=i,a=qm(),o=ot.useMemo(()=>{const c=a===null?{...n}:eA(a,n);return c!=null&&(c[tA]=a!==null),c},[n,a]);return dt.jsx(px.Provider,{value:o,children:t})}const mx=ot.createContext();function iA({value:i,...t}){return dt.jsx(mx.Provider,{value:i??!0,...t})}const gx=()=>ot.useContext(mx)??!1,vx=ot.createContext(void 0);function rA({value:i,children:t}){return dt.jsx(vx.Provider,{value:i,children:t})}function aA(i){const{theme:t,name:n,props:a}=i;if(!t||!t.components||!t.components[n])return a;const o=t.components[n];return o.defaultProps?of(o.defaultProps,a):!o.styleOverrides&&!o.variants?of(o,a):a}function sA({props:i,name:t}){const n=ot.useContext(vx);return aA({props:i,name:t,theme:{components:n}})}const hy={};function py(i,t,n,a=!1){return ot.useMemo(()=>{const o=i&&t[i]||t;if(typeof n=="function"){const c=n(o),u=i?{...t,[i]:c}:c;return a?()=>u:u}return i?{...t,[i]:n}:{...t,...n}},[i,t,n,a])}function _x(i){const{children:t,theme:n,themeId:a}=i,o=QS(hy),c=qm()||hy,u=py(a,o,n),d=py(a,c,n,!0),h=(a?u[a]:u).direction==="rtl";return dt.jsx(nA,{theme:d,children:dt.jsx($l.Provider,{value:u,children:dt.jsx(iA,{value:h,children:dt.jsx(rA,{value:a?u[a].components:u.components,children:t})})})})}const my={theme:void 0};function oA(i){let t,n;return function(o){let c=t;return(c===void 0||o.theme!==n)&&(my.theme=o.theme,c=ex(i(my)),t=c,n=o.theme),c}}const Ym="mode",jm="color-scheme",lA="data-color-scheme";function cA(i){const{defaultMode:t="system",defaultLightColorScheme:n="light",defaultDarkColorScheme:a="dark",modeStorageKey:o=Ym,colorSchemeStorageKey:c=jm,attribute:u=lA,colorSchemeNode:d="document.documentElement",nonce:h}=i||{};let p="",g=u;if(u==="class"&&(g=".%s"),u==="data"&&(g="[data-%s]"),g.startsWith(".")){const _=g.substring(1);p+=`${d}.classList.remove('${_}'.replace('%s', light), '${_}'.replace('%s', dark));
      ${d}.classList.add('${_}'.replace('%s', colorScheme));`}const v=g.match(/\[([^\]]+)\]/);if(v){const[_,x]=v[1].split("=");x||(p+=`${d}.removeAttribute('${_}'.replace('%s', light));
      ${d}.removeAttribute('${_}'.replace('%s', dark));`),p+=`
      ${d}.setAttribute('${_}'.replace('%s', colorScheme), ${x?`${x}.replace('%s', colorScheme)`:'""'});`}else p+=`${d}.setAttribute('${g}', colorScheme);`;return dt.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?h:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${c}-dark') || '${a}';
  const light = localStorage.getItem('${c}-light') || '${n}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${p}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}function uA(){}const fA=({key:i,storageWindow:t})=>(!t&&typeof window<"u"&&(t=window),{get(n){if(typeof window>"u")return;if(!t)return n;let a;try{a=t.localStorage.getItem(i)}catch{}return a||n},set:n=>{if(t)try{t.localStorage.setItem(i,n)}catch{}},subscribe:n=>{if(!t)return uA;const a=o=>{const c=o.newValue;o.key===i&&n(c)};return t.addEventListener("storage",a),()=>{t.removeEventListener("storage",a)}}});function Wh(){}function gy(i){if(typeof window<"u"&&typeof window.matchMedia=="function"&&i==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function yx(i,t){if(i.mode==="light"||i.mode==="system"&&i.systemMode==="light")return t("light");if(i.mode==="dark"||i.mode==="system"&&i.systemMode==="dark")return t("dark")}function dA(i){return yx(i,t=>{if(t==="light")return i.lightColorScheme;if(t==="dark")return i.darkColorScheme})}function hA(i){const{defaultMode:t="light",defaultLightColorScheme:n,defaultDarkColorScheme:a,supportedColorSchemes:o=[],modeStorageKey:c=Ym,colorSchemeStorageKey:u=jm,storageWindow:d=typeof window>"u"?void 0:window,storageManager:h=fA,noSsr:p=!1}=i,g=o.join(","),v=o.length>1,_=ot.useMemo(()=>h==null?void 0:h({key:c,storageWindow:d}),[h,c,d]),x=ot.useMemo(()=>h==null?void 0:h({key:`${u}-light`,storageWindow:d}),[h,u,d]),M=ot.useMemo(()=>h==null?void 0:h({key:`${u}-dark`,storageWindow:d}),[h,u,d]),[E,b]=ot.useState(()=>{const H=(_==null?void 0:_.get(t))||t,w=(x==null?void 0:x.get(n))||n,y=(M==null?void 0:M.get(a))||a;return{mode:H,systemMode:gy(H),lightColorScheme:w,darkColorScheme:y}}),[S,O]=ot.useState(p||!v);ot.useEffect(()=>{O(!0)},[]);const U=dA(E),R=ot.useCallback(H=>{b(w=>{if(H===w.mode)return w;const y=H??t;return _==null||_.set(y),{...w,mode:y,systemMode:gy(y)}})},[_,t]),D=ot.useCallback(H=>{H?typeof H=="string"?H&&!g.includes(H)?console.error(`\`${H}\` does not exist in \`theme.colorSchemes\`.`):b(w=>{const y={...w};return yx(w,N=>{N==="light"&&(x==null||x.set(H),y.lightColorScheme=H),N==="dark"&&(M==null||M.set(H),y.darkColorScheme=H)}),y}):b(w=>{const y={...w},N=H.light===null?n:H.light,j=H.dark===null?a:H.dark;return N&&(g.includes(N)?(y.lightColorScheme=N,x==null||x.set(N)):console.error(`\`${N}\` does not exist in \`theme.colorSchemes\`.`)),j&&(g.includes(j)?(y.darkColorScheme=j,M==null||M.set(j)):console.error(`\`${j}\` does not exist in \`theme.colorSchemes\`.`)),y}):b(w=>(x==null||x.set(n),M==null||M.set(a),{...w,lightColorScheme:n,darkColorScheme:a}))},[g,x,M,n,a]),z=ot.useCallback(H=>{E.mode==="system"&&b(w=>{const y=H!=null&&H.matches?"dark":"light";return w.systemMode===y?w:{...w,systemMode:y}})},[E.mode]),I=ot.useRef(z);return I.current=z,ot.useEffect(()=>{if(typeof window.matchMedia!="function"||!v)return;const H=(...y)=>I.current(...y),w=window.matchMedia("(prefers-color-scheme: dark)");return w.addListener(H),H(w),()=>{w.removeListener(H)}},[v]),ot.useEffect(()=>{if(v){const H=(_==null?void 0:_.subscribe(N=>{(!N||["light","dark","system"].includes(N))&&R(N||t)}))||Wh,w=(x==null?void 0:x.subscribe(N=>{(!N||g.match(N))&&D({light:N})}))||Wh,y=(M==null?void 0:M.subscribe(N=>{(!N||g.match(N))&&D({dark:N})}))||Wh;return()=>{H(),w(),y()}}},[D,R,g,t,d,v,_,x,M]),{...E,mode:S?E.mode:void 0,systemMode:S?E.systemMode:void 0,colorScheme:S?U:void 0,setMode:R,setColorScheme:D}}const pA="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function mA(i){const{themeId:t,theme:n={},modeStorageKey:a=Ym,colorSchemeStorageKey:o=jm,disableTransitionOnChange:c=!1,defaultColorScheme:u,resolveTheme:d}=i,h={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},p=ot.createContext(void 0),g=()=>ot.useContext(p)||h,v={},_={};function x(S){var gt,Ft,wt,Dt;const{children:O,theme:U,modeStorageKey:R=a,colorSchemeStorageKey:D=o,disableTransitionOnChange:z=c,storageManager:I,storageWindow:H=typeof window>"u"?void 0:window,documentNode:w=typeof document>"u"?void 0:document,colorSchemeNode:y=typeof document>"u"?void 0:document.documentElement,disableNestedContext:N=!1,disableStyleSheetGeneration:j=!1,defaultMode:q="system",forceThemeRerender:rt=!1,noSsr:lt}=S,F=ot.useRef(!1),Y=qm(),X=ot.useContext(p),ht=!!X&&!N,P=ot.useMemo(()=>U||(typeof n=="function"?n():n),[U]),$=P[t],pt=$||P,{colorSchemes:Mt=v,components:J=_,cssVarPrefix:_t}=pt,yt=Object.keys(Mt).filter(ee=>!!Mt[ee]).join(","),Rt=ot.useMemo(()=>yt.split(","),[yt]),Ut=typeof u=="string"?u:u.light,ue=typeof u=="string"?u:u.dark,Kt=Mt[Ut]&&Mt[ue]?q:((Ft=(gt=Mt[pt.defaultColorScheme])==null?void 0:gt.palette)==null?void 0:Ft.mode)||((wt=pt.palette)==null?void 0:wt.mode),{mode:Ue,setMode:Ee,systemMode:de,lightColorScheme:V,darkColorScheme:pn,colorScheme:he,setColorScheme:$t}=hA({supportedColorSchemes:Rt,defaultLightColorScheme:Ut,defaultDarkColorScheme:ue,modeStorageKey:R,colorSchemeStorageKey:D,defaultMode:Kt,storageManager:I,storageWindow:H,noSsr:lt});let Vt=Ue,ae=he;ht&&(Vt=X.mode,ae=X.colorScheme);let Xt=ae||pt.defaultColorScheme;pt.vars&&!rt&&(Xt=pt.defaultColorScheme);const B=ot.useMemo(()=>{var Pt;const ee=((Pt=pt.generateThemeVars)==null?void 0:Pt.call(pt))||pt.vars,Et={...pt,components:J,colorSchemes:Mt,cssVarPrefix:_t,vars:ee};if(typeof Et.generateSpacing=="function"&&(Et.spacing=Et.generateSpacing()),Xt){const qt=Mt[Xt];qt&&typeof qt=="object"&&Object.keys(qt).forEach(Yt=>{qt[Yt]&&typeof qt[Yt]=="object"?Et[Yt]={...Et[Yt],...qt[Yt]}:Et[Yt]=qt[Yt]})}return d?d(Et):Et},[pt,Xt,J,Mt,_t]),A=pt.colorSchemeSelector;Gm(()=>{if(ae&&y&&A&&A!=="media"){const ee=A;let Et=A;if(ee==="class"&&(Et=".%s"),ee==="data"&&(Et="[data-%s]"),ee!=null&&ee.startsWith("data-")&&!ee.includes("%s")&&(Et=`[${ee}="%s"]`),Et.startsWith("."))y.classList.remove(...Rt.map(Pt=>Et.substring(1).replace("%s",Pt))),y.classList.add(Et.substring(1).replace("%s",ae));else{const Pt=Et.replace("%s",ae).match(/\[([^\]]+)\]/);if(Pt){const[qt,Yt]=Pt[1].split("=");Yt||Rt.forEach(Nt=>{y.removeAttribute(qt.replace(ae,Nt))}),y.setAttribute(qt,Yt?Yt.replace(/"|'/g,""):"")}else y.setAttribute(Et,ae)}}},[ae,A,y,Rt]),ot.useEffect(()=>{let ee;if(z&&F.current&&w){const Et=w.createElement("style");Et.appendChild(w.createTextNode(pA)),w.head.appendChild(Et),window.getComputedStyle(w.body),ee=setTimeout(()=>{w.head.removeChild(Et)},1)}return()=>{clearTimeout(ee)}},[ae,z,w]),ot.useEffect(()=>(F.current=!0,()=>{F.current=!1}),[]);const nt=ot.useMemo(()=>({allColorSchemes:Rt,colorScheme:ae,darkColorScheme:pn,lightColorScheme:V,mode:Vt,setColorScheme:$t,setMode:Ee,systemMode:de}),[Rt,ae,pn,V,Vt,$t,Ee,de,B.colorSchemeSelector]);let bt=!0;(j||pt.cssVariables===!1||ht&&(Y==null?void 0:Y.cssVarPrefix)===_t)&&(bt=!1);const At=dt.jsxs(ot.Fragment,{children:[dt.jsx(_x,{themeId:$?t:void 0,theme:B,children:O}),bt&&dt.jsx(qS,{styles:((Dt=B.generateStyleSheets)==null?void 0:Dt.call(B))||[]})]});return ht?At:dt.jsx(p.Provider,{value:nt,children:At})}const M=typeof u=="string"?u:u.light,E=typeof u=="string"?u:u.dark;return{CssVarsProvider:x,useColorScheme:g,getInitColorSchemeScript:S=>cA({colorSchemeStorageKey:o,defaultLightColorScheme:M,defaultDarkColorScheme:E,modeStorageKey:a,...S})}}function gA(i=""){function t(...a){if(!a.length)return"";const o=a[0];return typeof o=="string"&&!o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${i?`${i}-`:""}${o}${t(...a.slice(1))})`:`, ${o}`}return(a,...o)=>`var(--${i?`${i}-`:""}${a}${t(...o)})`}const vy=(i,t,n,a=[])=>{let o=i;t.forEach((c,u)=>{u===t.length-1?Array.isArray(o)?o[Number(c)]=n:o&&typeof o=="object"&&(o[c]=n):o&&typeof o=="object"&&(o[c]||(o[c]=a.includes(c)?[]:{}),o=o[c])})},vA=(i,t,n)=>{function a(o,c=[],u=[]){Object.entries(o).forEach(([d,h])=>{(!n||n&&!n([...c,d]))&&h!=null&&(typeof h=="object"&&Object.keys(h).length>0?a(h,[...c,d],Array.isArray(h)?[...u,d]:u):t([...c,d],h,u))})}a(i)},_A=(i,t)=>typeof t=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(a=>i.includes(a))||i[i.length-1].toLowerCase().includes("opacity")?t:`${t}px`:t;function qh(i,t){const{prefix:n,shouldSkipGeneratingVar:a}=t||{},o={},c={},u={};return vA(i,(d,h,p)=>{if((typeof h=="string"||typeof h=="number")&&(!a||!a(d,h))){const g=`--${n?`${n}-`:""}${d.join("-")}`,v=_A(d,h);Object.assign(o,{[g]:v}),vy(c,d,`var(${g})`,p),vy(u,d,`var(${g}, ${v})`,p)}},d=>d[0]==="vars"),{css:o,vars:c,varsWithDefaults:u}}function yA(i,t={}){const{getSelector:n=b,disableCssColorScheme:a,colorSchemeSelector:o}=t,{colorSchemes:c={},components:u,defaultColorScheme:d="light",...h}=i,{vars:p,css:g,varsWithDefaults:v}=qh(h,t);let _=v;const x={},{[d]:M,...E}=c;if(Object.entries(E||{}).forEach(([U,R])=>{const{vars:D,css:z,varsWithDefaults:I}=qh(R,t);_=yi(_,I),x[U]={css:z,vars:D}}),M){const{css:U,vars:R,varsWithDefaults:D}=qh(M,t);_=yi(_,D),x[d]={css:U,vars:R}}function b(U,R){var z,I;let D=o;if(o==="class"&&(D=".%s"),o==="data"&&(D="[data-%s]"),o!=null&&o.startsWith("data-")&&!o.includes("%s")&&(D=`[${o}="%s"]`),U){if(D==="media")return i.defaultColorScheme===U?":root":{[`@media (prefers-color-scheme: ${((I=(z=c[U])==null?void 0:z.palette)==null?void 0:I.mode)||U})`]:{":root":R}};if(D)return i.defaultColorScheme===U?`:root, ${D.replace("%s",String(U))}`:D.replace("%s",String(U))}return":root"}return{vars:_,generateThemeVars:()=>{let U={...p};return Object.entries(x).forEach(([,{vars:R}])=>{U=yi(U,R)}),U},generateStyleSheets:()=>{var H,w;const U=[],R=i.defaultColorScheme||"light";function D(y,N){Object.keys(N).length&&U.push(typeof y=="string"?{[y]:{...N}}:y)}D(n(void 0,{...g}),g);const{[R]:z,...I}=x;if(z){const{css:y}=z,N=(w=(H=c[R])==null?void 0:H.palette)==null?void 0:w.mode,j=!a&&N?{colorScheme:N,...y}:{...y};D(n(R,{...j}),j)}return Object.entries(I).forEach(([y,{css:N}])=>{var rt,lt;const j=(lt=(rt=c[y])==null?void 0:rt.palette)==null?void 0:lt.mode,q=!a&&j?{colorScheme:j,...N}:{...N};D(n(y,{...q}),q)}),U}}}function SA(i){return function(n){return i==="media"?`@media (prefers-color-scheme: ${n})`:i?i.startsWith("data-")&&!i.includes("%s")?`[${i}="${n}"] &`:i==="class"?`.${n} &`:i==="data"?`[data-${n}] &`:`${i.replace("%s",n)} &`:"&"}}const xA=Jl(),bA=rx("div",{name:"MuiContainer",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:n}=i;return[t.root,t[`maxWidth${$n(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),MA=i=>ax({props:i,name:"MuiContainer",defaultTheme:xA}),EA=(i,t)=>{const n=h=>Fi(t,h),{classes:a,fixed:o,disableGutters:c,maxWidth:u}=i,d={root:["root",u&&`maxWidth${$n(String(u))}`,o&&"fixed",c&&"disableGutters"]};return Zi(d,n,a)};function TA(i={}){const{createStyledComponent:t=bA,useThemeProps:n=MA,componentName:a="MuiContainer"}=i,o=t(({theme:u,ownerState:d})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!d.disableGutters&&{paddingLeft:u.spacing(2),paddingRight:u.spacing(2),[u.breakpoints.up("sm")]:{paddingLeft:u.spacing(3),paddingRight:u.spacing(3)}}}),({theme:u,ownerState:d})=>d.fixed&&Object.keys(u.breakpoints.values).reduce((h,p)=>{const g=p,v=u.breakpoints.values[g];return v!==0&&(h[u.breakpoints.up(g)]={maxWidth:`${v}${u.breakpoints.unit}`}),h},{}),({theme:u,ownerState:d})=>({...d.maxWidth==="xs"&&{[u.breakpoints.up("xs")]:{maxWidth:Math.max(u.breakpoints.values.xs,444)}},...d.maxWidth&&d.maxWidth!=="xs"&&{[u.breakpoints.up(d.maxWidth)]:{maxWidth:`${u.breakpoints.values[d.maxWidth]}${u.breakpoints.unit}`}}}));return ot.forwardRef(function(d,h){const p=n(d),{className:g,component:v="div",disableGutters:_=!1,fixed:x=!1,maxWidth:M="lg",classes:E,...b}=p,S={...p,component:v,disableGutters:_,fixed:x,maxWidth:M},O=EA(S,a);return dt.jsx(o,{as:v,ownerState:S,className:$e(O.root,g),ref:h,...b})})}const AA=(i,t)=>i.filter(n=>t.includes(n)),Do=(i,t,n)=>{const a=i.keys[0];Array.isArray(t)?t.forEach((o,c)=>{n((u,d)=>{c<=i.keys.length-1&&(c===0?Object.assign(u,d):u[i.up(i.keys[c])]=d)},o)}):t&&typeof t=="object"?(Object.keys(t).length>i.keys.length?i.keys:AA(i.keys,Object.keys(t))).forEach(c=>{if(i.keys.includes(c)){const u=t[c];u!==void 0&&n((d,h)=>{a===c?Object.assign(d,h):d[i.up(c)]=h},u)}}):(typeof t=="number"||typeof t=="string")&&n((o,c)=>{Object.assign(o,c)},t)};function ff(i){return`--Grid-${i}Spacing`}function Af(i){return`--Grid-parent-${i}Spacing`}const _y="--Grid-columns",So="--Grid-parent-columns",RA=({theme:i,ownerState:t})=>{const n={};return Do(i.breakpoints,t.size,(a,o)=>{let c={};o==="grow"&&(c={flexBasis:0,flexGrow:1,maxWidth:"100%"}),o==="auto"&&(c={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof o=="number"&&(c={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${o} / var(${So}) - (var(${So}) - ${o}) * (var(${Af("column")}) / var(${So})))`}),a(n,c)}),n},CA=({theme:i,ownerState:t})=>{const n={};return Do(i.breakpoints,t.offset,(a,o)=>{let c={};o==="auto"&&(c={marginLeft:"auto"}),typeof o=="number"&&(c={marginLeft:o===0?"0px":`calc(100% * ${o} / var(${So}) + var(${Af("column")}) * ${o} / var(${So}))`}),a(n,c)}),n},wA=({theme:i,ownerState:t})=>{if(!t.container)return{};const n={[_y]:12};return Do(i.breakpoints,t.columns,(a,o)=>{const c=o??12;a(n,{[_y]:c,"> *":{[So]:c}})}),n},DA=({theme:i,ownerState:t})=>{if(!t.container)return{};const n={};return Do(i.breakpoints,t.rowSpacing,(a,o)=>{var u;const c=typeof o=="string"?o:(u=i.spacing)==null?void 0:u.call(i,o);a(n,{[ff("row")]:c,"> *":{[Af("row")]:c}})}),n},UA=({theme:i,ownerState:t})=>{if(!t.container)return{};const n={};return Do(i.breakpoints,t.columnSpacing,(a,o)=>{var u;const c=typeof o=="string"?o:(u=i.spacing)==null?void 0:u.call(i,o);a(n,{[ff("column")]:c,"> *":{[Af("column")]:c}})}),n},LA=({theme:i,ownerState:t})=>{if(!t.container)return{};const n={};return Do(i.breakpoints,t.direction,(a,o)=>{a(n,{flexDirection:o})}),n},NA=({ownerState:i})=>({minWidth:0,boxSizing:"border-box",...i.container&&{display:"flex",flexWrap:"wrap",...i.wrap&&i.wrap!=="wrap"&&{flexWrap:i.wrap},gap:`var(${ff("row")}) var(${ff("column")})`}}),OA=i=>{const t=[];return Object.entries(i).forEach(([n,a])=>{a!==!1&&a!==void 0&&t.push(`grid-${n}-${String(a)}`)}),t},PA=(i,t="xs")=>{function n(a){return a===void 0?!1:typeof a=="string"&&!Number.isNaN(Number(a))||typeof a=="number"&&a>0}if(n(i))return[`spacing-${t}-${String(i)}`];if(typeof i=="object"&&!Array.isArray(i)){const a=[];return Object.entries(i).forEach(([o,c])=>{n(c)&&a.push(`spacing-${o}-${String(c)}`)}),a}return[]},BA=i=>i===void 0?[]:typeof i=="object"?Object.entries(i).map(([t,n])=>`direction-${t}-${n}`):[`direction-xs-${String(i)}`];function IA(i,t){i.item!==void 0&&delete i.item,i.zeroMinWidth!==void 0&&delete i.zeroMinWidth,t.keys.forEach(n=>{i[n]!==void 0&&delete i[n]})}const zA=Jl(),FA=rx("div",{name:"MuiGrid",slot:"Root",overridesResolver:(i,t)=>t.root});function HA(i){return ax({props:i,name:"MuiGrid",defaultTheme:zA})}function GA(i={}){const{createStyledComponent:t=FA,useThemeProps:n=HA,useTheme:a=tc,componentName:o="MuiGrid"}=i,c=(p,g)=>{const{container:v,direction:_,spacing:x,wrap:M,size:E}=p,b={root:["root",v&&"container",M!=="wrap"&&`wrap-xs-${String(M)}`,...BA(_),...OA(E),...v?PA(x,g.breakpoints.keys[0]):[]]};return Zi(b,S=>Fi(o,S),{})};function u(p,g,v=()=>!0){const _={};return p===null||(Array.isArray(p)?p.forEach((x,M)=>{x!==null&&v(x)&&g.keys[M]&&(_[g.keys[M]]=x)}):typeof p=="object"?Object.keys(p).forEach(x=>{const M=p[x];M!=null&&v(M)&&(_[x]=M)}):_[g.keys[0]]=p),_}const d=t(wA,UA,DA,RA,LA,NA,CA),h=ot.forwardRef(function(g,v){const _=a(),x=n(g),M=Hm(x);IA(M,_.breakpoints);const{className:E,children:b,columns:S=12,container:O=!1,component:U="div",direction:R="row",wrap:D="wrap",size:z={},offset:I={},spacing:H=0,rowSpacing:w=H,columnSpacing:y=H,unstable_level:N=0,...j}=M,q=u(z,_.breakpoints,$=>$!==!1),rt=u(I,_.breakpoints),lt=g.columns??(N?void 0:S),F=g.spacing??(N?void 0:H),Y=g.rowSpacing??g.spacing??(N?void 0:w),X=g.columnSpacing??g.spacing??(N?void 0:y),ht={...M,level:N,columns:lt,container:O,direction:R,wrap:D,spacing:F,rowSpacing:Y,columnSpacing:X,size:q,offset:rt},P=c(ht,_);return dt.jsx(d,{ref:v,as:U,ownerState:ht,className:$e(P.root,E),...j,children:ot.Children.map(b,$=>{var pt;return ot.isValidElement($)&&qT($,["Grid"])&&O&&$.props.container?ot.cloneElement($,{unstable_level:((pt=$.props)==null?void 0:pt.unstable_level)??N+1}):$})})});return h.muiName="Grid",h}function Sx(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Fl.white,default:Fl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const VA=Sx();function xx(){return{text:{primary:Fl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Fl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const yy=xx();function Sy(i,t,n,a){const o=a.light||a,c=a.dark||a*1.5;i[t]||(i.hasOwnProperty(n)?i[t]=i[n]:t==="light"?i.light=Xm(i.main,o):t==="dark"&&(i.dark=km(i.main,c)))}function kA(i="light"){return i==="dark"?{main:Js[200],light:Js[50],dark:Js[400]}:{main:Js[700],light:Js[400],dark:Js[800]}}function XA(i="light"){return i==="dark"?{main:Qs[200],light:Qs[50],dark:Qs[400]}:{main:Qs[500],light:Qs[300],dark:Qs[700]}}function WA(i="light"){return i==="dark"?{main:Zs[500],light:Zs[300],dark:Zs[700]}:{main:Zs[700],light:Zs[400],dark:Zs[800]}}function qA(i="light"){return i==="dark"?{main:to[400],light:to[300],dark:to[700]}:{main:to[700],light:to[500],dark:to[900]}}function YA(i="light"){return i==="dark"?{main:eo[400],light:eo[300],dark:eo[700]}:{main:eo[800],light:eo[500],dark:eo[900]}}function jA(i="light"){return i==="dark"?{main:Cl[400],light:Cl[300],dark:Cl[700]}:{main:"#ed6c02",light:Cl[500],dark:Cl[900]}}function $m(i){const{mode:t="light",contrastThreshold:n=3,tonalOffset:a=.2,...o}=i,c=i.primary||kA(t),u=i.secondary||XA(t),d=i.error||WA(t),h=i.info||qA(t),p=i.success||YA(t),g=i.warning||jA(t);function v(E){return XT(E,yy.text.primary)>=n?yy.text.primary:VA.text.primary}const _=({color:E,name:b,mainShade:S=500,lightShade:O=300,darkShade:U=700})=>{if(E={...E},!E.main&&E[S]&&(E.main=E[S]),!E.hasOwnProperty("main"))throw new Error(vs(11,b?` (${b})`:"",S));if(typeof E.main!="string")throw new Error(vs(12,b?` (${b})`:"",JSON.stringify(E.main)));return Sy(E,"light",O,a),Sy(E,"dark",U,a),E.contrastText||(E.contrastText=v(E.main)),E};let x;return t==="light"?x=Sx():t==="dark"&&(x=xx()),yi({common:{...Fl},mode:t,primary:_({color:c,name:"primary"}),secondary:_({color:u,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:_({color:d,name:"error"}),warning:_({color:g,name:"warning"}),info:_({color:h,name:"info"}),success:_({color:p,name:"success"}),grey:RE,contrastThreshold:n,getContrastText:v,augmentColor:_,tonalOffset:a,...x},o)}function $A(i){const t={};return Object.entries(i).forEach(a=>{const[o,c]=a;typeof c=="object"&&(t[o]=`${c.fontStyle?`${c.fontStyle} `:""}${c.fontVariant?`${c.fontVariant} `:""}${c.fontWeight?`${c.fontWeight} `:""}${c.fontStretch?`${c.fontStretch} `:""}${c.fontSize||""}${c.lineHeight?`/${c.lineHeight} `:""}${c.fontFamily||""}`)}),t}function KA(i,t){return{toolbar:{minHeight:56,[i.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[i.up("sm")]:{minHeight:64}},...t}}function ZA(i){return Math.round(i*1e5)/1e5}const xy={textTransform:"uppercase"},by='"Roboto", "Helvetica", "Arial", sans-serif';function bx(i,t){const{fontFamily:n=by,fontSize:a=14,fontWeightLight:o=300,fontWeightRegular:c=400,fontWeightMedium:u=500,fontWeightBold:d=700,htmlFontSize:h=16,allVariants:p,pxToRem:g,...v}=typeof t=="function"?t(i):t,_=a/14,x=g||(b=>`${b/h*_}rem`),M=(b,S,O,U,R)=>({fontFamily:n,fontWeight:b,fontSize:x(S),lineHeight:O,...n===by?{letterSpacing:`${ZA(U/S)}em`}:{},...R,...p}),E={h1:M(o,96,1.167,-1.5),h2:M(o,60,1.2,-.5),h3:M(c,48,1.167,0),h4:M(c,34,1.235,.25),h5:M(c,24,1.334,0),h6:M(u,20,1.6,.15),subtitle1:M(c,16,1.75,.15),subtitle2:M(u,14,1.57,.1),body1:M(c,16,1.5,.15),body2:M(c,14,1.43,.15),button:M(u,14,1.75,.4,xy),caption:M(c,12,1.66,.4),overline:M(c,12,2.66,1,xy),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return yi({htmlFontSize:h,pxToRem:x,fontFamily:n,fontSize:a,fontWeightLight:o,fontWeightRegular:c,fontWeightMedium:u,fontWeightBold:d,...E},v,{clone:!1})}const QA=.2,JA=.14,tR=.12;function an(...i){return[`${i[0]}px ${i[1]}px ${i[2]}px ${i[3]}px rgba(0,0,0,${QA})`,`${i[4]}px ${i[5]}px ${i[6]}px ${i[7]}px rgba(0,0,0,${JA})`,`${i[8]}px ${i[9]}px ${i[10]}px ${i[11]}px rgba(0,0,0,${tR})`].join(",")}const eR=["none",an(0,2,1,-1,0,1,1,0,0,1,3,0),an(0,3,1,-2,0,2,2,0,0,1,5,0),an(0,3,3,-2,0,3,4,0,0,1,8,0),an(0,2,4,-1,0,4,5,0,0,1,10,0),an(0,3,5,-1,0,5,8,0,0,1,14,0),an(0,3,5,-1,0,6,10,0,0,1,18,0),an(0,4,5,-2,0,7,10,1,0,2,16,1),an(0,5,5,-3,0,8,10,1,0,3,14,2),an(0,5,6,-3,0,9,12,1,0,3,16,2),an(0,6,6,-3,0,10,14,1,0,4,18,3),an(0,6,7,-4,0,11,15,1,0,4,20,3),an(0,7,8,-4,0,12,17,2,0,5,22,4),an(0,7,8,-4,0,13,19,2,0,5,24,4),an(0,7,9,-4,0,14,21,2,0,5,26,4),an(0,8,9,-5,0,15,22,2,0,6,28,5),an(0,8,10,-5,0,16,24,2,0,6,30,5),an(0,8,11,-5,0,17,26,2,0,6,32,5),an(0,9,11,-5,0,18,28,2,0,7,34,6),an(0,9,12,-6,0,19,29,2,0,7,36,6),an(0,10,13,-6,0,20,31,3,0,8,38,7),an(0,10,13,-6,0,21,33,3,0,8,40,7),an(0,10,14,-6,0,22,35,3,0,8,42,7),an(0,11,14,-7,0,23,36,3,0,9,44,8),an(0,11,15,-7,0,24,38,3,0,9,46,8)],nR={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},iR={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function My(i){return`${Math.round(i)}ms`}function rR(i){if(!i)return 0;const t=i/36;return Math.min(Math.round((4+15*t**.25+t/5)*10),3e3)}function aR(i){const t={...nR,...i.easing},n={...iR,...i.duration};return{getAutoHeightDuration:rR,create:(o=["all"],c={})=>{const{duration:u=n.standard,easing:d=t.easeInOut,delay:h=0,...p}=c;return(Array.isArray(o)?o:[o]).map(g=>`${g} ${typeof u=="string"?u:My(u)} ${d} ${typeof h=="string"?h:My(h)}`).join(",")},...i,easing:t,duration:n}}const sR={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function oR(i){return ur(i)||typeof i>"u"||typeof i=="string"||typeof i=="boolean"||typeof i=="number"||Array.isArray(i)}function Mx(i={}){const t={...i};function n(a){const o=Object.entries(a);for(let c=0;c<o.length;c++){const[u,d]=o[c];!oR(d)||u.startsWith("unstable_")?delete a[u]:ur(d)&&(a[u]={...d},n(a[u]))}}return n(t),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function Lp(i={},...t){const{breakpoints:n,mixins:a={},spacing:o,palette:c={},transitions:u={},typography:d={},shape:h,...p}=i;if(i.vars&&i.generateThemeVars===void 0)throw new Error(vs(20));const g=$m(c),v=Jl(i);let _=yi(v,{mixins:KA(v.breakpoints,a),palette:g,shadows:eR.slice(),typography:bx(g,d),transitions:aR(u),zIndex:{...sR}});return _=yi(_,p),_=t.reduce((x,M)=>yi(x,M),_),_.unstable_sxConfig={...Ql,...p==null?void 0:p.unstable_sxConfig},_.unstable_sx=function(M){return Oa({sx:M,theme:this})},_.toRuntimeSource=Mx,_}function Np(i){let t;return i<1?t=5.11916*i**2:t=4.5*Math.log(i+1)+2,Math.round(t*10)/1e3}const lR=[...Array(25)].map((i,t)=>{if(t===0)return"none";const n=Np(t);return`linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`});function Ex(i){return{inputPlaceholder:i==="dark"?.5:.42,inputUnderline:i==="dark"?.7:.42,switchTrackDisabled:i==="dark"?.2:.12,switchTrack:i==="dark"?.3:.38}}function Tx(i){return i==="dark"?lR:[]}function cR(i){const{palette:t={mode:"light"},opacity:n,overlays:a,...o}=i,c=$m(t);return{palette:c,opacity:{...Ex(c.mode),...n},overlays:a||Tx(c.mode),...o}}function uR(i){var t;return!!i[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!i[0].match(/sxConfig$/)||i[0]==="palette"&&!!((t=i[1])!=null&&t.match(/(mode|contrastThreshold|tonalOffset)/))}const fR=i=>[...[...Array(25)].map((t,n)=>`--${i?`${i}-`:""}overlays-${n}`),`--${i?`${i}-`:""}palette-AppBar-darkBg`,`--${i?`${i}-`:""}palette-AppBar-darkColor`],dR=i=>(t,n)=>{const a=i.rootSelector||":root",o=i.colorSchemeSelector;let c=o;if(o==="class"&&(c=".%s"),o==="data"&&(c="[data-%s]"),o!=null&&o.startsWith("data-")&&!o.includes("%s")&&(c=`[${o}="%s"]`),i.defaultColorScheme===t){if(t==="dark"){const u={};return fR(i.cssVarPrefix).forEach(d=>{u[d]=n[d],delete n[d]}),c==="media"?{[a]:n,"@media (prefers-color-scheme: dark)":{[a]:u}}:c?{[c.replace("%s",t)]:u,[`${a}, ${c.replace("%s",t)}`]:n}:{[a]:{...n,...u}}}if(c&&c!=="media")return`${a}, ${c.replace("%s",String(t))}`}else if(t){if(c==="media")return{[`@media (prefers-color-scheme: ${String(t)})`]:{[a]:n}};if(c)return c.replace("%s",String(t))}return a};function hR(i,t){t.forEach(n=>{i[n]||(i[n]={})})}function mt(i,t,n){!i[t]&&n&&(i[t]=n)}function Bl(i){return typeof i!="string"||!i.startsWith("hsl")?i:sx(i)}function Nr(i,t){`${t}Channel`in i||(i[`${t}Channel`]=Pl(Bl(i[t])))}function pR(i){return typeof i=="number"?`${i}px`:typeof i=="string"||typeof i=="function"||Array.isArray(i)?i:"8px"}const sr=i=>{try{return i()}catch{}},mR=(i="mui")=>gA(i);function Yh(i,t,n,a){if(!t)return;t=t===!0?{}:t;const o=a==="dark"?"dark":"light";if(!n){i[a]=cR({...t,palette:{mode:o,...t==null?void 0:t.palette}});return}const{palette:c,...u}=Lp({...n,palette:{mode:o,...t==null?void 0:t.palette}});return i[a]={...t,palette:c,opacity:{...Ex(o),...t==null?void 0:t.opacity},overlays:(t==null?void 0:t.overlays)||Tx(o)},u}function gR(i={},...t){const{colorSchemes:n={light:!0},defaultColorScheme:a,disableCssColorScheme:o=!1,cssVarPrefix:c="mui",shouldSkipGeneratingVar:u=uR,colorSchemeSelector:d=n.light&&n.dark?"media":void 0,rootSelector:h=":root",...p}=i,g=Object.keys(n)[0],v=a||(n.light&&g!=="light"?"light":g),_=mR(c),{[v]:x,light:M,dark:E,...b}=n,S={...b};let O=x;if((v==="dark"&&!("dark"in n)||v==="light"&&!("light"in n))&&(O=!0),!O)throw new Error(vs(21,v));const U=Yh(S,O,p,v);M&&!S.light&&Yh(S,M,void 0,"light"),E&&!S.dark&&Yh(S,E,void 0,"dark");let R={defaultColorScheme:v,...U,cssVarPrefix:c,colorSchemeSelector:d,rootSelector:h,getCssVar:_,colorSchemes:S,font:{...$A(U.typography),...U.font},spacing:pR(p.spacing)};Object.keys(R.colorSchemes).forEach(w=>{const y=R.colorSchemes[w].palette,N=j=>{const q=j.split("-"),rt=q[1],lt=q[2];return _(j,y[rt][lt])};if(y.mode==="light"&&(mt(y.common,"background","#fff"),mt(y.common,"onBackground","#000")),y.mode==="dark"&&(mt(y.common,"background","#000"),mt(y.common,"onBackground","#fff")),hR(y,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),y.mode==="light"){mt(y.Alert,"errorColor",Je(y.error.light,.6)),mt(y.Alert,"infoColor",Je(y.info.light,.6)),mt(y.Alert,"successColor",Je(y.success.light,.6)),mt(y.Alert,"warningColor",Je(y.warning.light,.6)),mt(y.Alert,"errorFilledBg",N("palette-error-main")),mt(y.Alert,"infoFilledBg",N("palette-info-main")),mt(y.Alert,"successFilledBg",N("palette-success-main")),mt(y.Alert,"warningFilledBg",N("palette-warning-main")),mt(y.Alert,"errorFilledColor",sr(()=>y.getContrastText(y.error.main))),mt(y.Alert,"infoFilledColor",sr(()=>y.getContrastText(y.info.main))),mt(y.Alert,"successFilledColor",sr(()=>y.getContrastText(y.success.main))),mt(y.Alert,"warningFilledColor",sr(()=>y.getContrastText(y.warning.main))),mt(y.Alert,"errorStandardBg",tn(y.error.light,.9)),mt(y.Alert,"infoStandardBg",tn(y.info.light,.9)),mt(y.Alert,"successStandardBg",tn(y.success.light,.9)),mt(y.Alert,"warningStandardBg",tn(y.warning.light,.9)),mt(y.Alert,"errorIconColor",N("palette-error-main")),mt(y.Alert,"infoIconColor",N("palette-info-main")),mt(y.Alert,"successIconColor",N("palette-success-main")),mt(y.Alert,"warningIconColor",N("palette-warning-main")),mt(y.AppBar,"defaultBg",N("palette-grey-100")),mt(y.Avatar,"defaultBg",N("palette-grey-400")),mt(y.Button,"inheritContainedBg",N("palette-grey-300")),mt(y.Button,"inheritContainedHoverBg",N("palette-grey-A100")),mt(y.Chip,"defaultBorder",N("palette-grey-400")),mt(y.Chip,"defaultAvatarColor",N("palette-grey-700")),mt(y.Chip,"defaultIconColor",N("palette-grey-700")),mt(y.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),mt(y.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),mt(y.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),mt(y.LinearProgress,"primaryBg",tn(y.primary.main,.62)),mt(y.LinearProgress,"secondaryBg",tn(y.secondary.main,.62)),mt(y.LinearProgress,"errorBg",tn(y.error.main,.62)),mt(y.LinearProgress,"infoBg",tn(y.info.main,.62)),mt(y.LinearProgress,"successBg",tn(y.success.main,.62)),mt(y.LinearProgress,"warningBg",tn(y.warning.main,.62)),mt(y.Skeleton,"bg",`rgba(${N("palette-text-primaryChannel")} / 0.11)`),mt(y.Slider,"primaryTrack",tn(y.primary.main,.62)),mt(y.Slider,"secondaryTrack",tn(y.secondary.main,.62)),mt(y.Slider,"errorTrack",tn(y.error.main,.62)),mt(y.Slider,"infoTrack",tn(y.info.main,.62)),mt(y.Slider,"successTrack",tn(y.success.main,.62)),mt(y.Slider,"warningTrack",tn(y.warning.main,.62));const j=vu(y.background.default,.8);mt(y.SnackbarContent,"bg",j),mt(y.SnackbarContent,"color",sr(()=>y.getContrastText(j))),mt(y.SpeedDialAction,"fabHoverBg",vu(y.background.paper,.15)),mt(y.StepConnector,"border",N("palette-grey-400")),mt(y.StepContent,"border",N("palette-grey-400")),mt(y.Switch,"defaultColor",N("palette-common-white")),mt(y.Switch,"defaultDisabledColor",N("palette-grey-100")),mt(y.Switch,"primaryDisabledColor",tn(y.primary.main,.62)),mt(y.Switch,"secondaryDisabledColor",tn(y.secondary.main,.62)),mt(y.Switch,"errorDisabledColor",tn(y.error.main,.62)),mt(y.Switch,"infoDisabledColor",tn(y.info.main,.62)),mt(y.Switch,"successDisabledColor",tn(y.success.main,.62)),mt(y.Switch,"warningDisabledColor",tn(y.warning.main,.62)),mt(y.TableCell,"border",tn(gu(y.divider,1),.88)),mt(y.Tooltip,"bg",gu(y.grey[700],.92))}if(y.mode==="dark"){mt(y.Alert,"errorColor",tn(y.error.light,.6)),mt(y.Alert,"infoColor",tn(y.info.light,.6)),mt(y.Alert,"successColor",tn(y.success.light,.6)),mt(y.Alert,"warningColor",tn(y.warning.light,.6)),mt(y.Alert,"errorFilledBg",N("palette-error-dark")),mt(y.Alert,"infoFilledBg",N("palette-info-dark")),mt(y.Alert,"successFilledBg",N("palette-success-dark")),mt(y.Alert,"warningFilledBg",N("palette-warning-dark")),mt(y.Alert,"errorFilledColor",sr(()=>y.getContrastText(y.error.dark))),mt(y.Alert,"infoFilledColor",sr(()=>y.getContrastText(y.info.dark))),mt(y.Alert,"successFilledColor",sr(()=>y.getContrastText(y.success.dark))),mt(y.Alert,"warningFilledColor",sr(()=>y.getContrastText(y.warning.dark))),mt(y.Alert,"errorStandardBg",Je(y.error.light,.9)),mt(y.Alert,"infoStandardBg",Je(y.info.light,.9)),mt(y.Alert,"successStandardBg",Je(y.success.light,.9)),mt(y.Alert,"warningStandardBg",Je(y.warning.light,.9)),mt(y.Alert,"errorIconColor",N("palette-error-main")),mt(y.Alert,"infoIconColor",N("palette-info-main")),mt(y.Alert,"successIconColor",N("palette-success-main")),mt(y.Alert,"warningIconColor",N("palette-warning-main")),mt(y.AppBar,"defaultBg",N("palette-grey-900")),mt(y.AppBar,"darkBg",N("palette-background-paper")),mt(y.AppBar,"darkColor",N("palette-text-primary")),mt(y.Avatar,"defaultBg",N("palette-grey-600")),mt(y.Button,"inheritContainedBg",N("palette-grey-800")),mt(y.Button,"inheritContainedHoverBg",N("palette-grey-700")),mt(y.Chip,"defaultBorder",N("palette-grey-700")),mt(y.Chip,"defaultAvatarColor",N("palette-grey-300")),mt(y.Chip,"defaultIconColor",N("palette-grey-300")),mt(y.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),mt(y.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),mt(y.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),mt(y.LinearProgress,"primaryBg",Je(y.primary.main,.5)),mt(y.LinearProgress,"secondaryBg",Je(y.secondary.main,.5)),mt(y.LinearProgress,"errorBg",Je(y.error.main,.5)),mt(y.LinearProgress,"infoBg",Je(y.info.main,.5)),mt(y.LinearProgress,"successBg",Je(y.success.main,.5)),mt(y.LinearProgress,"warningBg",Je(y.warning.main,.5)),mt(y.Skeleton,"bg",`rgba(${N("palette-text-primaryChannel")} / 0.13)`),mt(y.Slider,"primaryTrack",Je(y.primary.main,.5)),mt(y.Slider,"secondaryTrack",Je(y.secondary.main,.5)),mt(y.Slider,"errorTrack",Je(y.error.main,.5)),mt(y.Slider,"infoTrack",Je(y.info.main,.5)),mt(y.Slider,"successTrack",Je(y.success.main,.5)),mt(y.Slider,"warningTrack",Je(y.warning.main,.5));const j=vu(y.background.default,.98);mt(y.SnackbarContent,"bg",j),mt(y.SnackbarContent,"color",sr(()=>y.getContrastText(j))),mt(y.SpeedDialAction,"fabHoverBg",vu(y.background.paper,.15)),mt(y.StepConnector,"border",N("palette-grey-600")),mt(y.StepContent,"border",N("palette-grey-600")),mt(y.Switch,"defaultColor",N("palette-grey-300")),mt(y.Switch,"defaultDisabledColor",N("palette-grey-600")),mt(y.Switch,"primaryDisabledColor",Je(y.primary.main,.55)),mt(y.Switch,"secondaryDisabledColor",Je(y.secondary.main,.55)),mt(y.Switch,"errorDisabledColor",Je(y.error.main,.55)),mt(y.Switch,"infoDisabledColor",Je(y.info.main,.55)),mt(y.Switch,"successDisabledColor",Je(y.success.main,.55)),mt(y.Switch,"warningDisabledColor",Je(y.warning.main,.55)),mt(y.TableCell,"border",Je(gu(y.divider,1),.68)),mt(y.Tooltip,"bg",gu(y.grey[700],.92))}Nr(y.background,"default"),Nr(y.background,"paper"),Nr(y.common,"background"),Nr(y.common,"onBackground"),Nr(y,"divider"),Object.keys(y).forEach(j=>{const q=y[j];j!=="tonalOffset"&&q&&typeof q=="object"&&(q.main&&mt(y[j],"mainChannel",Pl(Bl(q.main))),q.light&&mt(y[j],"lightChannel",Pl(Bl(q.light))),q.dark&&mt(y[j],"darkChannel",Pl(Bl(q.dark))),q.contrastText&&mt(y[j],"contrastTextChannel",Pl(Bl(q.contrastText))),j==="text"&&(Nr(y[j],"primary"),Nr(y[j],"secondary")),j==="action"&&(q.active&&Nr(y[j],"active"),q.selected&&Nr(y[j],"selected")))})}),R=t.reduce((w,y)=>yi(w,y),R);const D={prefix:c,disableCssColorScheme:o,shouldSkipGeneratingVar:u,getSelector:dR(R)},{vars:z,generateThemeVars:I,generateStyleSheets:H}=yA(R,D);return R.vars=z,Object.entries(R.colorSchemes[R.defaultColorScheme]).forEach(([w,y])=>{R[w]=y}),R.generateThemeVars=I,R.generateStyleSheets=H,R.generateSpacing=function(){return ZS(p.spacing,zm(this))},R.getColorSchemeSelector=SA(d),R.spacing=R.generateSpacing(),R.shouldSkipGeneratingVar=u,R.unstable_sxConfig={...Ql,...p==null?void 0:p.unstable_sxConfig},R.unstable_sx=function(y){return Oa({sx:y,theme:this})},R.toRuntimeSource=Mx,R}function Ey(i,t,n){i.colorSchemes&&n&&(i.colorSchemes[t]={...n!==!0&&n,palette:$m({...n===!0?{}:n.palette,mode:t})})}function Rf(i={},...t){const{palette:n,cssVariables:a=!1,colorSchemes:o=n?void 0:{light:!0},defaultColorScheme:c=n==null?void 0:n.mode,...u}=i,d=c||"light",h=o==null?void 0:o[d],p={...o,...n?{[d]:{...typeof h!="boolean"&&h,palette:n}}:void 0};if(a===!1){if(!("colorSchemes"in i))return Lp(i,...t);let g=n;"palette"in i||p[d]&&(p[d]!==!0?g=p[d].palette:d==="dark"&&(g={mode:"dark"}));const v=Lp({...i,palette:g},...t);return v.defaultColorScheme=d,v.colorSchemes=p,v.palette.mode==="light"&&(v.colorSchemes.light={...p.light!==!0&&p.light,palette:v.palette},Ey(v,"dark",p.dark)),v.palette.mode==="dark"&&(v.colorSchemes.dark={...p.dark!==!0&&p.dark,palette:v.palette},Ey(v,"light",p.light)),v}return!n&&!("light"in p)&&d==="light"&&(p.light=!0),gR({...u,colorSchemes:p,defaultColorScheme:d,...typeof a!="boolean"&&a},...t)}const Km=Rf();function Cf(){const i=tc(Km);return i[dr]||i}function vR(i){return i!=="ownerState"&&i!=="theme"&&i!=="sx"&&i!=="as"}const _R=i=>vR(i)&&i!=="classes",Dn=ix({themeId:dr,defaultTheme:Km,rootShouldForwardProp:_R});function jh({theme:i,...t}){const n=dr in i?i[dr]:void 0;return dt.jsx(_x,{...t,themeId:n?dr:void 0,theme:n||i})}const _u={colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:yR}=mA({themeId:dr,theme:()=>Rf({cssVariables:!0}),colorSchemeStorageKey:_u.colorSchemeStorageKey,modeStorageKey:_u.modeStorageKey,defaultColorScheme:{light:_u.defaultLightColorScheme,dark:_u.defaultDarkColorScheme},resolveTheme:i=>{const t={...i,typography:bx(i.palette,i.typography)};return t.unstable_sx=function(a){return Oa({sx:a,theme:this})},t}}),SR=yR;function xR({theme:i,...t}){if(typeof i=="function")return dt.jsx(jh,{theme:i,...t});const n=dr in i?i[dr]:i;return"colorSchemes"in n?dt.jsx(SR,{theme:i,...t}):"vars"in n?dt.jsx(jh,{theme:i,...t}):dt.jsx(jh,{theme:{...i,vars:null},...t})}function bR(i){return dt.jsx(CT,{...i,defaultTheme:Km,themeId:dr})}function Ax(i){return function(n){return dt.jsx(bR,{styles:typeof i=="function"?a=>i({theme:a,...n}):i})}}function MR(){return Hm}const Ia=oA;function xi(i){return sA(i)}function ER(i){return Fi("MuiSvgIcon",i)}Ki("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const TR=i=>{const{color:t,fontSize:n,classes:a}=i,o={root:["root",t!=="inherit"&&`color${$n(t)}`,`fontSize${$n(n)}`]};return Zi(o,ER,a)},AR=Dn("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:n}=i;return[t.root,n.color!=="inherit"&&t[`color${$n(n.color)}`],t[`fontSize${$n(n.fontSize)}`]]}})(Ia(({theme:i})=>{var t,n,a,o,c,u,d,h,p,g,v,_,x,M;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:(o=(t=i.transitions)==null?void 0:t.create)==null?void 0:o.call(t,"fill",{duration:(a=(n=(i.vars??i).transitions)==null?void 0:n.duration)==null?void 0:a.shorter}),variants:[{props:E=>!E.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:((u=(c=i.typography)==null?void 0:c.pxToRem)==null?void 0:u.call(c,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:((h=(d=i.typography)==null?void 0:d.pxToRem)==null?void 0:h.call(d,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:((g=(p=i.typography)==null?void 0:p.pxToRem)==null?void 0:g.call(p,35))||"2.1875rem"}},...Object.entries((i.vars??i).palette).filter(([,E])=>E&&E.main).map(([E])=>{var b,S;return{props:{color:E},style:{color:(S=(b=(i.vars??i).palette)==null?void 0:b[E])==null?void 0:S.main}}}),{props:{color:"action"},style:{color:(_=(v=(i.vars??i).palette)==null?void 0:v.action)==null?void 0:_.active}},{props:{color:"disabled"},style:{color:(M=(x=(i.vars??i).palette)==null?void 0:x.action)==null?void 0:M.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),Op=ot.forwardRef(function(t,n){const a=xi({props:t,name:"MuiSvgIcon"}),{children:o,className:c,color:u="inherit",component:d="svg",fontSize:h="medium",htmlColor:p,inheritViewBox:g=!1,titleAccess:v,viewBox:_="0 0 24 24",...x}=a,M=ot.isValidElement(o)&&o.type==="svg",E={...a,color:u,component:d,fontSize:h,instanceFontSize:t.fontSize,inheritViewBox:g,viewBox:_,hasSvgAsChild:M},b={};g||(b.viewBox=_);const S=TR(E);return dt.jsxs(AR,{as:d,className:$e(S.root,c),focusable:"false",color:p,"aria-hidden":v?void 0:!0,role:v?"img":void 0,ref:n,...b,...x,...M&&o.props,ownerState:E,children:[M?o.props.children:o,v?dt.jsx("title",{children:v}):null]})});Op.muiName="SvgIcon";function oi(i,t){function n(a,o){return dt.jsx(Op,{"data-testid":void 0,ref:o,...a,children:i})}return n.muiName=Op.muiName,ot.memo(ot.forwardRef(n))}function RR(i,t){if(i==null)return{};var n={};for(var a in i)if({}.hasOwnProperty.call(i,a)){if(t.indexOf(a)!==-1)continue;n[a]=i[a]}return n}function Pp(i,t){return Pp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},Pp(i,t)}function CR(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,Pp(i,t)}const Ty=wa.createContext(null);function wR(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Zm(i,t){var n=function(c){return t&&ot.isValidElement(c)?t(c):c},a=Object.create(null);return i&&ot.Children.map(i,function(o){return o}).forEach(function(o){a[o.key]=n(o)}),a}function DR(i,t){i=i||{},t=t||{};function n(g){return g in t?t[g]:i[g]}var a=Object.create(null),o=[];for(var c in i)c in t?o.length&&(a[c]=o,o=[]):o.push(c);var u,d={};for(var h in t){if(a[h])for(u=0;u<a[h].length;u++){var p=a[h][u];d[a[h][u]]=n(p)}d[h]=n(h)}for(u=0;u<o.length;u++)d[o[u]]=n(o[u]);return d}function ds(i,t,n){return n[t]!=null?n[t]:i.props[t]}function UR(i,t){return Zm(i.children,function(n){return ot.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:ds(n,"appear",i),enter:ds(n,"enter",i),exit:ds(n,"exit",i)})})}function LR(i,t,n){var a=Zm(i.children),o=DR(t,a);return Object.keys(o).forEach(function(c){var u=o[c];if(ot.isValidElement(u)){var d=c in t,h=c in a,p=t[c],g=ot.isValidElement(p)&&!p.props.in;h&&(!d||g)?o[c]=ot.cloneElement(u,{onExited:n.bind(null,u),in:!0,exit:ds(u,"exit",i),enter:ds(u,"enter",i)}):!h&&d&&!g?o[c]=ot.cloneElement(u,{in:!1}):h&&d&&ot.isValidElement(p)&&(o[c]=ot.cloneElement(u,{onExited:n.bind(null,u),in:p.props.in,exit:ds(u,"exit",i),enter:ds(u,"enter",i)}))}}),o}var NR=Object.values||function(i){return Object.keys(i).map(function(t){return i[t]})},OR={component:"div",childFactory:function(t){return t}},Qm=function(i){CR(t,i);function t(a,o){var c;c=i.call(this,a,o)||this;var u=c.handleExited.bind(wR(c));return c.state={contextValue:{isMounting:!0},handleExited:u,firstRender:!0},c}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,c){var u=c.children,d=c.handleExited,h=c.firstRender;return{children:h?UR(o,d):LR(o,u,d),firstRender:!1}},n.handleExited=function(o,c){var u=Zm(this.props.children);o.key in u||(o.props.onExited&&o.props.onExited(c),this.mounted&&this.setState(function(d){var h=rf({},d.children);return delete h[o.key],{children:h}}))},n.render=function(){var o=this.props,c=o.component,u=o.childFactory,d=RR(o,["component","childFactory"]),h=this.state.contextValue,p=NR(this.state.children).map(u);return delete d.appear,delete d.enter,delete d.exit,c===null?wa.createElement(Ty.Provider,{value:h},p):wa.createElement(Ty.Provider,{value:h},wa.createElement(c,d,p))},t}(wa.Component);Qm.propTypes={};Qm.defaultProps=OR;function PR(i){return Fi("MuiPaper",i)}Ki("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const BR=i=>{const{square:t,elevation:n,variant:a,classes:o}=i,c={root:["root",a,!t&&"rounded",a==="elevation"&&`elevation${n}`]};return Zi(c,PR,o)},IR=Dn("div",{name:"MuiPaper",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:n}=i;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(Ia(({theme:i})=>({backgroundColor:(i.vars||i).palette.background.paper,color:(i.vars||i).palette.text.primary,transition:i.transitions.create("box-shadow"),variants:[{props:({ownerState:t})=>!t.square,style:{borderRadius:i.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(i.vars||i).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),Rx=ot.forwardRef(function(t,n){var x;const a=xi({props:t,name:"MuiPaper"}),o=Cf(),{className:c,component:u="div",elevation:d=1,square:h=!1,variant:p="elevation",...g}=a,v={...a,component:u,elevation:d,square:h,variant:p},_=BR(v);return dt.jsx(IR,{as:u,ownerState:v,className:$e(_.root,c),ref:n,...g,style:{...p==="elevation"&&{"--Paper-shadow":(o.vars||o).shadows[d],...o.vars&&{"--Paper-overlay":(x=o.vars.overlays)==null?void 0:x[d]},...!o.vars&&o.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${Ua("#fff",Np(d))}, ${Ua("#fff",Np(d))})`}},...g.style}})});function os(i,t){const{className:n,elementType:a,ownerState:o,externalForwardedProps:c,internalForwardedProps:u,shouldForwardComponentProp:d=!1,...h}=t,{component:p,slots:g={[i]:void 0},slotProps:v={[i]:void 0},..._}=c,x=g[i]||a,M=hx(v[i],o),{props:{component:E,...b},internalRef:S}=dx({className:n,...h,externalForwardedProps:i==="root"?_:void 0,externalSlotProps:M}),O=lf(S,M==null?void 0:M.ref,t.ref),U=i==="root"?E||p:E,R=fx(x,{...i==="root"&&!p&&!g[i]&&u,...i!=="root"&&!g[i]&&u,...b,...U&&!d&&{as:U},...U&&d&&{component:U},ref:O},o);return[x,R]}class df{constructor(){Tl(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new df}static use(){const t=ux(df.create).current,[n,a]=ot.useState(!1);return t.shouldMount=n,t.setShouldMount=a,ot.useEffect(t.mountEffect,[n]),t}mount(){return this.mounted||(this.mounted=FR(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...t)})}stop(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...t)})}pulsate(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...t)})}}function zR(){return df.use()}function FR(){let i,t;const n=new Promise((a,o)=>{i=a,t=o});return n.resolve=i,n.reject=t,n}function HR(i){const{className:t,classes:n,pulsate:a=!1,rippleX:o,rippleY:c,rippleSize:u,in:d,onExited:h,timeout:p}=i,[g,v]=ot.useState(!1),_=$e(t,n.ripple,n.rippleVisible,a&&n.ripplePulsate),x={width:u,height:u,top:-(u/2)+c,left:-(u/2)+o},M=$e(n.child,g&&n.childLeaving,a&&n.childPulsate);return!d&&!g&&v(!0),ot.useEffect(()=>{if(!d&&h!=null){const E=setTimeout(h,p);return()=>{clearTimeout(E)}}},[h,d,p]),dt.jsx("span",{className:_,style:x,children:dt.jsx("span",{className:M})})}const Ni=Ki("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Bp=550,GR=80,VR=Pm`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,kR=Pm`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,XR=Pm`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,WR=Dn("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),qR=Dn(HR,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${Ni.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${VR};
    animation-duration: ${Bp}ms;
    animation-timing-function: ${({theme:i})=>i.transitions.easing.easeInOut};
  }

  &.${Ni.ripplePulsate} {
    animation-duration: ${({theme:i})=>i.transitions.duration.shorter}ms;
  }

  & .${Ni.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Ni.childLeaving} {
    opacity: 0;
    animation-name: ${kR};
    animation-duration: ${Bp}ms;
    animation-timing-function: ${({theme:i})=>i.transitions.easing.easeInOut};
  }

  & .${Ni.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${XR};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:i})=>i.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,YR=ot.forwardRef(function(t,n){const a=xi({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:c={},className:u,...d}=a,[h,p]=ot.useState([]),g=ot.useRef(0),v=ot.useRef(null);ot.useEffect(()=>{v.current&&(v.current(),v.current=null)},[h]);const _=ot.useRef(!1),x=KT(),M=ot.useRef(null),E=ot.useRef(null),b=ot.useCallback(R=>{const{pulsate:D,rippleX:z,rippleY:I,rippleSize:H,cb:w}=R;p(y=>[...y,dt.jsx(qR,{classes:{ripple:$e(c.ripple,Ni.ripple),rippleVisible:$e(c.rippleVisible,Ni.rippleVisible),ripplePulsate:$e(c.ripplePulsate,Ni.ripplePulsate),child:$e(c.child,Ni.child),childLeaving:$e(c.childLeaving,Ni.childLeaving),childPulsate:$e(c.childPulsate,Ni.childPulsate)},timeout:Bp,pulsate:D,rippleX:z,rippleY:I,rippleSize:H},g.current)]),g.current+=1,v.current=w},[c]),S=ot.useCallback((R={},D={},z=()=>{})=>{const{pulsate:I=!1,center:H=o||D.pulsate,fakeElement:w=!1}=D;if((R==null?void 0:R.type)==="mousedown"&&_.current){_.current=!1;return}(R==null?void 0:R.type)==="touchstart"&&(_.current=!0);const y=w?null:E.current,N=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let j,q,rt;if(H||R===void 0||R.clientX===0&&R.clientY===0||!R.clientX&&!R.touches)j=Math.round(N.width/2),q=Math.round(N.height/2);else{const{clientX:lt,clientY:F}=R.touches&&R.touches.length>0?R.touches[0]:R;j=Math.round(lt-N.left),q=Math.round(F-N.top)}if(H)rt=Math.sqrt((2*N.width**2+N.height**2)/3),rt%2===0&&(rt+=1);else{const lt=Math.max(Math.abs((y?y.clientWidth:0)-j),j)*2+2,F=Math.max(Math.abs((y?y.clientHeight:0)-q),q)*2+2;rt=Math.sqrt(lt**2+F**2)}R!=null&&R.touches?M.current===null&&(M.current=()=>{b({pulsate:I,rippleX:j,rippleY:q,rippleSize:rt,cb:z})},x.start(GR,()=>{M.current&&(M.current(),M.current=null)})):b({pulsate:I,rippleX:j,rippleY:q,rippleSize:rt,cb:z})},[o,b,x]),O=ot.useCallback(()=>{S({},{pulsate:!0})},[S]),U=ot.useCallback((R,D)=>{if(x.clear(),(R==null?void 0:R.type)==="touchend"&&M.current){M.current(),M.current=null,x.start(0,()=>{U(R,D)});return}M.current=null,p(z=>z.length>0?z.slice(1):z),v.current=D},[x]);return ot.useImperativeHandle(n,()=>({pulsate:O,start:S,stop:U}),[O,S,U]),dt.jsx(WR,{className:$e(Ni.root,c.root,u),ref:E,...d,children:dt.jsx(Qm,{component:null,exit:!0,children:h})})});function jR(i){return Fi("MuiButtonBase",i)}const $R=Ki("MuiButtonBase",["root","disabled","focusVisible"]),KR=i=>{const{disabled:t,focusVisible:n,focusVisibleClassName:a,classes:o}=i,u=Zi({root:["root",t&&"disabled",n&&"focusVisible"]},jR,o);return n&&a&&(u.root+=` ${a}`),u},ZR=Dn("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(i,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${$R.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Cx=ot.forwardRef(function(t,n){const a=xi({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:c=!1,children:u,className:d,component:h="button",disabled:p=!1,disableRipple:g=!1,disableTouchRipple:v=!1,focusRipple:_=!1,focusVisibleClassName:x,LinkComponent:M="a",onBlur:E,onClick:b,onContextMenu:S,onDragLeave:O,onFocus:U,onFocusVisible:R,onKeyDown:D,onKeyUp:z,onMouseDown:I,onMouseLeave:H,onMouseUp:w,onTouchEnd:y,onTouchMove:N,onTouchStart:j,tabIndex:q=0,TouchRippleProps:rt,touchRippleRef:lt,type:F,...Y}=a,X=ot.useRef(null),ht=zR(),P=lf(ht.ref,lt),[$,pt]=ot.useState(!1);p&&$&&pt(!1),ot.useImperativeHandle(o,()=>({focusVisible:()=>{pt(!0),X.current.focus()}}),[]);const Mt=ht.shouldMount&&!g&&!p;ot.useEffect(()=>{$&&_&&!g&&ht.pulsate()},[g,_,$,ht]);const J=Or(ht,"start",I,v),_t=Or(ht,"stop",S,v),yt=Or(ht,"stop",O,v),Rt=Or(ht,"stop",w,v),Ut=Or(ht,"stop",A=>{$&&A.preventDefault(),H&&H(A)},v),ue=Or(ht,"start",j,v),Kt=Or(ht,"stop",y,v),Ue=Or(ht,"stop",N,v),Ee=Or(ht,"stop",A=>{cf(A.target)||pt(!1),E&&E(A)},!1),de=ms(A=>{X.current||(X.current=A.currentTarget),cf(A.target)&&(pt(!0),R&&R(A)),U&&U(A)}),V=()=>{const A=X.current;return h&&h!=="button"&&!(A.tagName==="A"&&A.href)},pn=ms(A=>{_&&!A.repeat&&$&&A.key===" "&&ht.stop(A,()=>{ht.start(A)}),A.target===A.currentTarget&&V()&&A.key===" "&&A.preventDefault(),D&&D(A),A.target===A.currentTarget&&V()&&A.key==="Enter"&&!p&&(A.preventDefault(),b&&b(A))}),he=ms(A=>{_&&A.key===" "&&$&&!A.defaultPrevented&&ht.stop(A,()=>{ht.pulsate(A)}),z&&z(A),b&&A.target===A.currentTarget&&V()&&A.key===" "&&!A.defaultPrevented&&b(A)});let $t=h;$t==="button"&&(Y.href||Y.to)&&($t=M);const Vt={};$t==="button"?(Vt.type=F===void 0?"button":F,Vt.disabled=p):(!Y.href&&!Y.to&&(Vt.role="button"),p&&(Vt["aria-disabled"]=p));const ae=lf(n,X),Xt={...a,centerRipple:c,component:h,disabled:p,disableRipple:g,disableTouchRipple:v,focusRipple:_,tabIndex:q,focusVisible:$},B=KR(Xt);return dt.jsxs(ZR,{as:$t,className:$e(B.root,d),ownerState:Xt,onBlur:Ee,onClick:b,onContextMenu:_t,onFocus:de,onKeyDown:pn,onKeyUp:he,onMouseDown:J,onMouseLeave:Ut,onMouseUp:Rt,onDragLeave:yt,onTouchEnd:Kt,onTouchMove:Ue,onTouchStart:ue,ref:ae,tabIndex:p?-1:q,type:F,...Vt,...Y,children:[u,Mt?dt.jsx(YR,{ref:P,center:c,...rt}):null]})});function Or(i,t,n,a=!1){return ms(o=>(n&&n(o),a||i[t](o),!0))}function QR(i){return typeof i.main=="string"}function JR(i,t=[]){if(!QR(i))return!1;for(const n of t)if(!i.hasOwnProperty(n)||typeof i[n]!="string")return!1;return!0}function wx(i=[]){return([,t])=>t&&JR(t,i)}function tC(i){return Fi("MuiTypography",i)}Ki("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const eC={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},nC=MR(),iC=i=>{const{align:t,gutterBottom:n,noWrap:a,paragraph:o,variant:c,classes:u}=i,d={root:["root",c,i.align!=="inherit"&&`align${$n(t)}`,n&&"gutterBottom",a&&"noWrap",o&&"paragraph"]};return Zi(d,tC,u)},rC=Dn("span",{name:"MuiTypography",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:n}=i;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${$n(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(Ia(({theme:i})=>{var t;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(i.typography).filter(([n,a])=>n!=="inherit"&&a&&typeof a=="object").map(([n,a])=>({props:{variant:n},style:a})),...Object.entries(i.palette).filter(wx()).map(([n])=>({props:{color:n},style:{color:(i.vars||i).palette[n].main}})),...Object.entries(((t=i.palette)==null?void 0:t.text)||{}).filter(([,n])=>typeof n=="string").map(([n])=>({props:{color:`text${$n(n)}`},style:{color:(i.vars||i).palette.text[n]}})),{props:({ownerState:n})=>n.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:n})=>n.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:n})=>n.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:n})=>n.paragraph,style:{marginBottom:16}}]}})),Ay={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Yi=ot.forwardRef(function(t,n){const{color:a,...o}=xi({props:t,name:"MuiTypography"}),c=!eC[a],u=nC({...o,...c&&{color:a}}),{align:d="inherit",className:h,component:p,gutterBottom:g=!1,noWrap:v=!1,paragraph:_=!1,variant:x="body1",variantMapping:M=Ay,...E}=u,b={...u,align:d,color:a,className:h,component:p,gutterBottom:g,noWrap:v,paragraph:_,variant:x,variantMapping:M},S=p||(_?"p":M[x]||Ay[x])||"span",O=iC(b);return dt.jsx(rC,{as:S,ref:n,className:$e(O.root,h),...E,ownerState:b,style:{...d!=="inherit"&&{"--Typography-textAlign":d},...E.style}})}),aC=oi(dt.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));function sC(i){return Fi("MuiAvatar",i)}Ki("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const oC=i=>{const{classes:t,variant:n,colorDefault:a}=i;return Zi({root:["root",n,a&&"colorDefault"],img:["img"],fallback:["fallback"]},sC,t)},lC=Dn("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:n}=i;return[t.root,t[n.variant],n.colorDefault&&t.colorDefault]}})(Ia(({theme:i})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:i.typography.fontFamily,fontSize:i.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(i.vars||i).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(i.vars||i).palette.background.default,...i.vars?{backgroundColor:i.vars.palette.Avatar.defaultBg}:{backgroundColor:i.palette.grey[400],...i.applyStyles("dark",{backgroundColor:i.palette.grey[600]})}}}]}))),cC=Dn("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(i,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),uC=Dn(aC,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(i,t)=>t.fallback})({width:"75%",height:"75%"});function fC({crossOrigin:i,referrerPolicy:t,src:n,srcSet:a}){const[o,c]=ot.useState(!1);return ot.useEffect(()=>{if(!n&&!a)return;c(!1);let u=!0;const d=new Image;return d.onload=()=>{u&&c("loaded")},d.onerror=()=>{u&&c("error")},d.crossOrigin=i,d.referrerPolicy=t,d.src=n,a&&(d.srcset=a),()=>{u=!1}},[i,t,n,a]),o}const dC=ot.forwardRef(function(t,n){const a=xi({props:t,name:"MuiAvatar"}),{alt:o,children:c,className:u,component:d="div",slots:h={},slotProps:p={},imgProps:g,sizes:v,src:_,srcSet:x,variant:M="circular",...E}=a;let b=null;const S={...a,component:d,variant:M},O=fC({...g,...typeof p.img=="function"?p.img(S):p.img,src:_,srcSet:x}),U=_||x,R=U&&O!=="error";S.colorDefault=!R,delete S.ownerState;const D=oC(S),[z,I]=os("img",{className:D.img,elementType:cC,externalForwardedProps:{slots:h,slotProps:{img:{...g,...p.img}}},additionalProps:{alt:o,src:_,srcSet:x,sizes:v},ownerState:S});return R?b=dt.jsx(z,{...I}):c||c===0?b=c:U&&o?b=o[0]:b=dt.jsx(uC,{ownerState:S,className:D.fallback}),dt.jsx(lC,{as:d,className:$e(D.root,u),ref:n,...E,ownerState:S,children:b})}),hC=Ki("MuiBox",["root"]),pC=Rf(),Ii=UT({themeId:dr,defaultTheme:pC,defaultClassName:hC.root,generateClassName:JS.generate}),mC=TA({createStyledComponent:Dn("div",{name:"MuiContainer",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:n}=i;return[t.root,t[`maxWidth${$n(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:i=>xi({props:i,name:"MuiContainer"})}),Ip=typeof Ax({})=="function",gC=(i,t)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...t&&!i.vars&&{colorScheme:i.palette.mode}}),vC=i=>({color:(i.vars||i).palette.text.primary,...i.typography.body1,backgroundColor:(i.vars||i).palette.background.default,"@media print":{backgroundColor:(i.vars||i).palette.common.white}}),Dx=(i,t=!1)=>{var c,u;const n={};t&&i.colorSchemes&&typeof i.getColorSchemeSelector=="function"&&Object.entries(i.colorSchemes).forEach(([d,h])=>{var g,v;const p=i.getColorSchemeSelector(d);p.startsWith("@")?n[p]={":root":{colorScheme:(g=h.palette)==null?void 0:g.mode}}:n[p.replace(/\s*&/,"")]={colorScheme:(v=h.palette)==null?void 0:v.mode}});let a={html:gC(i,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:i.typography.fontWeightBold},body:{margin:0,...vC(i),"&::backdrop":{backgroundColor:(i.vars||i).palette.background.default}},...n};const o=(u=(c=i.components)==null?void 0:c.MuiCssBaseline)==null?void 0:u.styleOverrides;return o&&(a=[a,o]),a},ju="mui-ecs",_C=i=>{const t=Dx(i,!1),n=Array.isArray(t)?t[0]:t;return!i.vars&&n&&(n.html[`:root:has(${ju})`]={colorScheme:i.palette.mode}),i.colorSchemes&&Object.entries(i.colorSchemes).forEach(([a,o])=>{var u,d;const c=i.getColorSchemeSelector(a);c.startsWith("@")?n[c]={[`:root:not(:has(.${ju}))`]:{colorScheme:(u=o.palette)==null?void 0:u.mode}}:n[c.replace(/\s*&/,"")]={[`&:not(:has(.${ju}))`]:{colorScheme:(d=o.palette)==null?void 0:d.mode}}}),t},yC=Ax(Ip?({theme:i,enableColorScheme:t})=>Dx(i,t):({theme:i})=>_C(i));function SC(i){const t=xi({props:i,name:"MuiCssBaseline"}),{children:n,enableColorScheme:a=!1}=t;return dt.jsxs(ot.Fragment,{children:[Ip&&dt.jsx(yC,{enableColorScheme:a}),!Ip&&!a&&dt.jsx("span",{className:ju,style:{display:"none"}}),n]})}const $h=GA({createStyledComponent:Dn("div",{name:"MuiGrid",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:n}=i;return[t.root,n.container&&t.container]}}),componentName:"MuiGrid",useThemeProps:i=>xi({props:i,name:"MuiGrid"}),useTheme:Cf});function xC(i){return Fi("MuiLink",i)}const bC=Ki("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),MC=({theme:i,ownerState:t})=>{const n=t.color,a=Da(i,`palette.${n}.main`,!1)||Da(i,`palette.${n}`,!1)||t.color,o=Da(i,`palette.${n}.mainChannel`)||Da(i,`palette.${n}Channel`);return"vars"in i&&o?`rgba(${o} / 0.4)`:Ua(a,.4)},Ry={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},EC=i=>{const{classes:t,component:n,focusVisible:a,underline:o}=i,c={root:["root",`underline${$n(o)}`,n==="button"&&"button",a&&"focusVisible"]};return Zi(c,xC,t)},TC=Dn(Yi,{name:"MuiLink",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:n}=i;return[t.root,t[`underline${$n(n.underline)}`],n.component==="button"&&t.button]}})(Ia(({theme:i})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:t,ownerState:n})=>t==="always"&&n.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(i.palette).filter(wx()).map(([t])=>({props:{underline:"always",color:t},style:{"--Link-underlineColor":i.vars?`rgba(${i.vars.palette[t].mainChannel} / 0.4)`:Ua(i.palette[t].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":i.vars?`rgba(${i.vars.palette.text.primaryChannel} / 0.4)`:Ua(i.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":i.vars?`rgba(${i.vars.palette.text.secondaryChannel} / 0.4)`:Ua(i.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(i.vars||i).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${bC.focusVisible}`]:{outline:"auto"}}}]}))),Ux=ot.forwardRef(function(t,n){const a=xi({props:t,name:"MuiLink"}),o=Cf(),{className:c,color:u="primary",component:d="a",onBlur:h,onFocus:p,TypographyClasses:g,underline:v="always",variant:_="inherit",sx:x,...M}=a,[E,b]=ot.useState(!1),S=D=>{cf(D.target)||b(!1),h&&h(D)},O=D=>{cf(D.target)&&b(!0),p&&p(D)},U={...a,color:u,component:d,focusVisible:E,underline:v,variant:_},R=EC(U);return dt.jsx(TC,{color:u,className:$e(R.root,c),classes:g,component:d,onBlur:S,onFocus:O,ref:n,ownerState:U,variant:_,...M,sx:[...Ry[u]===void 0?[{color:u}]:[],...Array.isArray(x)?x:[x]],style:{...M.style,...v==="always"&&u!=="inherit"&&!Ry[u]&&{"--Link-underlineColor":MC({theme:o,ownerState:U})}}})});function AC(i){return Fi("MuiTab",i)}const Ui=Ki("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper","icon"]),RC=i=>{const{classes:t,textColor:n,fullWidth:a,wrapped:o,icon:c,label:u,selected:d,disabled:h}=i,p={root:["root",c&&u&&"labelIcon",`textColor${$n(n)}`,a&&"fullWidth",o&&"wrapped",d&&"selected",h&&"disabled"],icon:["iconWrapper","icon"]};return Zi(p,AC,t)},CC=Dn(Cx,{name:"MuiTab",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:n}=i;return[t.root,n.label&&n.icon&&t.labelIcon,t[`textColor${$n(n.textColor)}`],n.fullWidth&&t.fullWidth,n.wrapped&&t.wrapped,{[`& .${Ui.iconWrapper}`]:t.iconWrapper},{[`& .${Ui.icon}`]:t.icon}]}})(Ia(({theme:i})=>({...i.typography.button,maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center",lineHeight:1.25,variants:[{props:({ownerState:t})=>t.label&&(t.iconPosition==="top"||t.iconPosition==="bottom"),style:{flexDirection:"column"}},{props:({ownerState:t})=>t.label&&t.iconPosition!=="top"&&t.iconPosition!=="bottom",style:{flexDirection:"row"}},{props:({ownerState:t})=>t.icon&&t.label,style:{minHeight:72,paddingTop:9,paddingBottom:9}},{props:({ownerState:t,iconPosition:n})=>t.icon&&t.label&&n==="top",style:{[`& > .${Ui.icon}`]:{marginBottom:6}}},{props:({ownerState:t,iconPosition:n})=>t.icon&&t.label&&n==="bottom",style:{[`& > .${Ui.icon}`]:{marginTop:6}}},{props:({ownerState:t,iconPosition:n})=>t.icon&&t.label&&n==="start",style:{[`& > .${Ui.icon}`]:{marginRight:i.spacing(1)}}},{props:({ownerState:t,iconPosition:n})=>t.icon&&t.label&&n==="end",style:{[`& > .${Ui.icon}`]:{marginLeft:i.spacing(1)}}},{props:{textColor:"inherit"},style:{color:"inherit",opacity:.6,[`&.${Ui.selected}`]:{opacity:1},[`&.${Ui.disabled}`]:{opacity:(i.vars||i).palette.action.disabledOpacity}}},{props:{textColor:"primary"},style:{color:(i.vars||i).palette.text.secondary,[`&.${Ui.selected}`]:{color:(i.vars||i).palette.primary.main},[`&.${Ui.disabled}`]:{color:(i.vars||i).palette.text.disabled}}},{props:{textColor:"secondary"},style:{color:(i.vars||i).palette.text.secondary,[`&.${Ui.selected}`]:{color:(i.vars||i).palette.secondary.main},[`&.${Ui.disabled}`]:{color:(i.vars||i).palette.text.disabled}}},{props:({ownerState:t})=>t.fullWidth,style:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"}},{props:({ownerState:t})=>t.wrapped,style:{fontSize:i.typography.pxToRem(12)}}]}))),Cy=ot.forwardRef(function(t,n){const a=xi({props:t,name:"MuiTab"}),{className:o,disabled:c=!1,disableFocusRipple:u=!1,fullWidth:d,icon:h,iconPosition:p="top",indicator:g,label:v,onChange:_,onClick:x,onFocus:M,selected:E,selectionFollowsFocus:b,textColor:S="inherit",value:O,wrapped:U=!1,...R}=a,D={...a,disabled:c,disableFocusRipple:u,selected:E,icon:!!h,iconPosition:p,label:!!v,fullWidth:d,textColor:S,wrapped:U},z=RC(D),I=h&&v&&ot.isValidElement(h)?ot.cloneElement(h,{className:$e(z.icon,h.props.className)}):h,H=y=>{!E&&_&&_(y,O),x&&x(y)},w=y=>{b&&!E&&_&&_(y,O),M&&M(y)};return dt.jsxs(CC,{focusRipple:!u,className:$e(z.root,o),ref:n,role:"tab","aria-selected":E,disabled:c,onClick:H,onFocus:w,ownerState:D,tabIndex:E?0:-1,...R,children:[p==="top"||p==="start"?dt.jsxs(ot.Fragment,{children:[I,v]}):dt.jsxs(ot.Fragment,{children:[v,I]}),g]})}),wC=oi(dt.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})),DC=oi(dt.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}));function UC(i){return(1+Math.sin(Math.PI*i-Math.PI/2))/2}function LC(i,t,n,a={},o=()=>{}){const{ease:c=UC,duration:u=300}=a;let d=null;const h=t[i];let p=!1;const g=()=>{p=!0},v=_=>{if(p){o(new Error("Animation cancelled"));return}d===null&&(d=_);const x=Math.min(1,(_-d)/u);if(t[i]=c(x)*(n-h)+h,x>=1){requestAnimationFrame(()=>{o(null)});return}requestAnimationFrame(v)};return h===n?(o(new Error("Element already at target position")),g):(requestAnimationFrame(v),g)}const NC={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function OC(i){const{onChange:t,...n}=i,a=ot.useRef(),o=ot.useRef(null),c=()=>{a.current=o.current.offsetHeight-o.current.clientHeight};return Gm(()=>{const u=ox(()=>{const h=a.current;c(),h!==a.current&&t(a.current)}),d=cx(o.current);return d.addEventListener("resize",u),()=>{u.clear(),d.removeEventListener("resize",u)}},[t]),ot.useEffect(()=>{c(),t(a.current)},[t]),dt.jsx("div",{style:NC,...n,ref:o})}function PC(i){return Fi("MuiTabScrollButton",i)}const BC=Ki("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),IC=i=>{const{classes:t,orientation:n,disabled:a}=i;return Zi({root:["root",n,a&&"disabled"]},PC,t)},zC=Dn(Cx,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:n}=i;return[t.root,n.orientation&&t[n.orientation]]}})({width:40,flexShrink:0,opacity:.8,[`&.${BC.disabled}`]:{opacity:0},variants:[{props:{orientation:"vertical"},style:{width:"100%",height:40,"& svg":{transform:"var(--TabScrollButton-svgRotate)"}}}]}),FC=ot.forwardRef(function(t,n){const a=xi({props:t,name:"MuiTabScrollButton"}),{className:o,slots:c={},slotProps:u={},direction:d,orientation:h,disabled:p,...g}=a,v=gx(),_={isRtl:v,...a},x=IC(_),M=c.StartScrollButtonIcon??wC,E=c.EndScrollButtonIcon??DC,b=uf({elementType:M,externalSlotProps:u.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:_}),S=uf({elementType:E,externalSlotProps:u.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:_});return dt.jsx(zC,{component:"div",className:$e(x.root,o),ref:n,role:null,ownerState:_,tabIndex:null,...g,style:{...g.style,...h==="vertical"&&{"--TabScrollButton-svgRotate":`rotate(${v?-90:90}deg)`}},children:d==="left"?dt.jsx(M,{...b}):dt.jsx(E,{...S})})});function HC(i){return Fi("MuiTabs",i)}const Kh=Ki("MuiTabs",["root","vertical","list","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),wy=(i,t)=>i===t?i.firstChild:t&&t.nextElementSibling?t.nextElementSibling:i.firstChild,Dy=(i,t)=>i===t?i.lastChild:t&&t.previousElementSibling?t.previousElementSibling:i.lastChild,yu=(i,t,n)=>{let a=!1,o=n(i,t);for(;o;){if(o===i.firstChild){if(a)return;a=!0}const c=o.disabled||o.getAttribute("aria-disabled")==="true";if(!o.hasAttribute("tabindex")||c)o=n(i,o);else{o.focus();return}}},GC=i=>{const{vertical:t,fixed:n,hideScrollbar:a,scrollableX:o,scrollableY:c,centered:u,scrollButtonsHideMobile:d,classes:h}=i;return Zi({root:["root",t&&"vertical"],scroller:["scroller",n&&"fixed",a&&"hideScrollbar",o&&"scrollableX",c&&"scrollableY"],list:["list","flexContainer",t&&"flexContainerVertical",t&&"vertical",u&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",d&&"scrollButtonsHideMobile"],scrollableX:[o&&"scrollableX"],hideScrollbar:[a&&"hideScrollbar"]},HC,h)},VC=Dn("div",{name:"MuiTabs",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:n}=i;return[{[`& .${Kh.scrollButtons}`]:t.scrollButtons},{[`& .${Kh.scrollButtons}`]:n.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,n.vertical&&t.vertical]}})(Ia(({theme:i})=>({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex",variants:[{props:({ownerState:t})=>t.vertical,style:{flexDirection:"column"}},{props:({ownerState:t})=>t.scrollButtonsHideMobile,style:{[`& .${Kh.scrollButtons}`]:{[i.breakpoints.down("sm")]:{display:"none"}}}}]}))),kC=Dn("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(i,t)=>{const{ownerState:n}=i;return[t.scroller,n.fixed&&t.fixed,n.hideScrollbar&&t.hideScrollbar,n.scrollableX&&t.scrollableX,n.scrollableY&&t.scrollableY]}})({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap",variants:[{props:({ownerState:i})=>i.fixed,style:{overflowX:"hidden",width:"100%"}},{props:({ownerState:i})=>i.hideScrollbar,style:{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}},{props:({ownerState:i})=>i.scrollableX,style:{overflowX:"auto",overflowY:"hidden"}},{props:({ownerState:i})=>i.scrollableY,style:{overflowY:"auto",overflowX:"hidden"}}]}),XC=Dn("div",{name:"MuiTabs",slot:"List",overridesResolver:(i,t)=>{const{ownerState:n}=i;return[t.list,t.flexContainer,n.vertical&&t.flexContainerVertical,n.centered&&t.centered]}})({display:"flex",variants:[{props:({ownerState:i})=>i.vertical,style:{flexDirection:"column"}},{props:({ownerState:i})=>i.centered,style:{justifyContent:"center"}}]}),WC=Dn("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(i,t)=>t.indicator})(Ia(({theme:i})=>({position:"absolute",height:2,bottom:0,width:"100%",transition:i.transitions.create(),variants:[{props:{indicatorColor:"primary"},style:{backgroundColor:(i.vars||i).palette.primary.main}},{props:{indicatorColor:"secondary"},style:{backgroundColor:(i.vars||i).palette.secondary.main}},{props:({ownerState:t})=>t.vertical,style:{height:"100%",width:2,right:0}}]}))),qC=Dn(OC)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Uy={},YC=ot.forwardRef(function(t,n){const a=xi({props:t,name:"MuiTabs"}),o=Cf(),c=gx(),{"aria-label":u,"aria-labelledby":d,action:h,centered:p=!1,children:g,className:v,component:_="div",allowScrollButtonsMobile:x=!1,indicatorColor:M="primary",onChange:E,orientation:b="horizontal",ScrollButtonComponent:S,scrollButtons:O="auto",selectionFollowsFocus:U,slots:R={},slotProps:D={},TabIndicatorProps:z={},TabScrollButtonProps:I={},textColor:H="primary",value:w,variant:y="standard",visibleScrollbar:N=!1,...j}=a,q=y==="scrollable",rt=b==="vertical",lt=rt?"scrollTop":"scrollLeft",F=rt?"top":"left",Y=rt?"bottom":"right",X=rt?"clientHeight":"clientWidth",ht=rt?"height":"width",P={...a,component:_,allowScrollButtonsMobile:x,indicatorColor:M,orientation:b,vertical:rt,scrollButtons:O,textColor:H,variant:y,visibleScrollbar:N,fixed:!q,hideScrollbar:q&&!N,scrollableX:q&&!rt,scrollableY:q&&rt,centered:p&&!q,scrollButtonsHideMobile:!x},$=GC(P),pt=uf({elementType:R.StartScrollButtonIcon,externalSlotProps:D.startScrollButtonIcon,ownerState:P}),Mt=uf({elementType:R.EndScrollButtonIcon,externalSlotProps:D.endScrollButtonIcon,ownerState:P}),[J,_t]=ot.useState(!1),[yt,Rt]=ot.useState(Uy),[Ut,ue]=ot.useState(!1),[Kt,Ue]=ot.useState(!1),[Ee,de]=ot.useState(!1),[V,pn]=ot.useState({overflow:"hidden",scrollbarWidth:0}),he=new Map,$t=ot.useRef(null),Vt=ot.useRef(null),ae={slots:R,slotProps:{indicator:z,scrollButton:I,...D}},Xt=()=>{const Lt=$t.current;let zt;if(Lt){const se=Lt.getBoundingClientRect();zt={clientWidth:Lt.clientWidth,scrollLeft:Lt.scrollLeft,scrollTop:Lt.scrollTop,scrollWidth:Lt.scrollWidth,top:se.top,bottom:se.bottom,left:se.left,right:se.right}}let ne;if(Lt&&w!==!1){const se=Vt.current.children;if(se.length>0){const Se=se[he.get(w)];ne=Se?Se.getBoundingClientRect():null}}return{tabsMeta:zt,tabMeta:ne}},B=ms(()=>{const{tabsMeta:Lt,tabMeta:zt}=Xt();let ne=0,se;rt?(se="top",zt&&Lt&&(ne=zt.top-Lt.top+Lt.scrollTop)):(se=c?"right":"left",zt&&Lt&&(ne=(c?-1:1)*(zt[se]-Lt[se]+Lt.scrollLeft)));const Se={[se]:ne,[ht]:zt?zt[ht]:0};if(typeof yt[se]!="number"||typeof yt[ht]!="number")Rt(Se);else{const Un=Math.abs(yt[se]-Se[se]),bi=Math.abs(yt[ht]-Se[ht]);(Un>=1||bi>=1)&&Rt(Se)}}),A=(Lt,{animation:zt=!0}={})=>{zt?LC(lt,$t.current,Lt,{duration:o.transitions.duration.standard}):$t.current[lt]=Lt},nt=Lt=>{let zt=$t.current[lt];rt?zt+=Lt:zt+=Lt*(c?-1:1),A(zt)},bt=()=>{const Lt=$t.current[X];let zt=0;const ne=Array.from(Vt.current.children);for(let se=0;se<ne.length;se+=1){const Se=ne[se];if(zt+Se[X]>Lt){se===0&&(zt=Lt);break}zt+=Se[X]}return zt},At=()=>{nt(-1*bt())},gt=()=>{nt(bt())},[Ft,{onChange:wt,...Dt}]=os("scrollbar",{className:$e($.scrollableX,$.hideScrollbar),elementType:qC,shouldForwardComponentProp:!0,externalForwardedProps:ae,ownerState:P}),ee=ot.useCallback(Lt=>{wt==null||wt(Lt),pn({overflow:null,scrollbarWidth:Lt})},[wt]),[Et,Pt]=os("scrollButtons",{className:$e($.scrollButtons,I.className),elementType:FC,externalForwardedProps:ae,ownerState:P,additionalProps:{orientation:b,slots:{StartScrollButtonIcon:R.startScrollButtonIcon||R.StartScrollButtonIcon,EndScrollButtonIcon:R.endScrollButtonIcon||R.EndScrollButtonIcon},slotProps:{startScrollButtonIcon:pt,endScrollButtonIcon:Mt}}}),qt=()=>{const Lt={};Lt.scrollbarSizeListener=q?dt.jsx(Ft,{...Dt,onChange:ee}):null;const ne=q&&(O==="auto"&&(Ut||Kt)||O===!0);return Lt.scrollButtonStart=ne?dt.jsx(Et,{direction:c?"right":"left",onClick:At,disabled:!Ut,...Pt}):null,Lt.scrollButtonEnd=ne?dt.jsx(Et,{direction:c?"left":"right",onClick:gt,disabled:!Kt,...Pt}):null,Lt},Yt=ms(Lt=>{const{tabsMeta:zt,tabMeta:ne}=Xt();if(!(!ne||!zt)){if(ne[F]<zt[F]){const se=zt[lt]+(ne[F]-zt[F]);A(se,{animation:Lt})}else if(ne[Y]>zt[Y]){const se=zt[lt]+(ne[Y]-zt[Y]);A(se,{animation:Lt})}}}),Nt=ms(()=>{q&&O!==!1&&de(!Ee)});ot.useEffect(()=>{const Lt=ox(()=>{$t.current&&B()});let zt;const ne=Un=>{Un.forEach(bi=>{bi.removedNodes.forEach(Qi=>{zt==null||zt.unobserve(Qi)}),bi.addedNodes.forEach(Qi=>{zt==null||zt.observe(Qi)})}),Lt(),Nt()},se=cx($t.current);se.addEventListener("resize",Lt);let Se;return typeof ResizeObserver<"u"&&(zt=new ResizeObserver(Lt),Array.from(Vt.current.children).forEach(Un=>{zt.observe(Un)})),typeof MutationObserver<"u"&&(Se=new MutationObserver(ne),Se.observe(Vt.current,{childList:!0})),()=>{Lt.clear(),se.removeEventListener("resize",Lt),Se==null||Se.disconnect(),zt==null||zt.disconnect()}},[B,Nt]),ot.useEffect(()=>{const Lt=Array.from(Vt.current.children),zt=Lt.length;if(typeof IntersectionObserver<"u"&&zt>0&&q&&O!==!1){const ne=Lt[0],se=Lt[zt-1],Se={root:$t.current,threshold:.99},Un=Mi=>{ue(!Mi[0].isIntersecting)},bi=new IntersectionObserver(Un,Se);bi.observe(ne);const Qi=Mi=>{Ue(!Mi[0].isIntersecting)},Ji=new IntersectionObserver(Qi,Se);return Ji.observe(se),()=>{bi.disconnect(),Ji.disconnect()}}},[q,O,Ee,g==null?void 0:g.length]),ot.useEffect(()=>{_t(!0)},[]),ot.useEffect(()=>{B()}),ot.useEffect(()=>{Yt(Uy!==yt)},[Yt,yt]),ot.useImperativeHandle(h,()=>({updateIndicator:B,updateScrollButtons:Nt}),[B,Nt]);const[pe,oe]=os("indicator",{className:$e($.indicator,z.className),elementType:WC,externalForwardedProps:ae,ownerState:P,additionalProps:{style:yt}}),Pe=dt.jsx(pe,{...oe});let W=0;const Bt=ot.Children.map(g,Lt=>{if(!ot.isValidElement(Lt))return null;const zt=Lt.props.value===void 0?W:Lt.props.value;he.set(zt,W);const ne=zt===w;return W+=1,ot.cloneElement(Lt,{fullWidth:y==="fullWidth",indicator:ne&&!J&&Pe,selected:ne,selectionFollowsFocus:U,onChange:E,textColor:H,value:zt,...W===1&&w===!1&&!Lt.props.tabIndex?{tabIndex:0}:{}})}),ft=Lt=>{if(Lt.altKey||Lt.shiftKey||Lt.ctrlKey||Lt.metaKey)return;const zt=Vt.current,ne=lx(zt).activeElement;if(ne.getAttribute("role")!=="tab")return;let Se=b==="horizontal"?"ArrowLeft":"ArrowUp",Un=b==="horizontal"?"ArrowRight":"ArrowDown";switch(b==="horizontal"&&c&&(Se="ArrowRight",Un="ArrowLeft"),Lt.key){case Se:Lt.preventDefault(),yu(zt,ne,Dy);break;case Un:Lt.preventDefault(),yu(zt,ne,wy);break;case"Home":Lt.preventDefault(),yu(zt,null,wy);break;case"End":Lt.preventDefault(),yu(zt,null,Dy);break}},xt=qt(),[kt,It]=os("root",{ref:n,className:$e($.root,v),elementType:VC,externalForwardedProps:{...ae,...j,component:_},ownerState:P}),[fe,ke]=os("scroller",{ref:$t,className:$.scroller,elementType:kC,externalForwardedProps:ae,ownerState:P,additionalProps:{style:{overflow:V.overflow,[rt?`margin${c?"Left":"Right"}`:"marginBottom"]:N?void 0:-V.scrollbarWidth}}}),[ln,Ce]=os("list",{ref:Vt,className:$e($.list,$.flexContainer),elementType:XC,externalForwardedProps:ae,ownerState:P,getSlotProps:Lt=>({...Lt,onKeyDown:zt=>{var ne;ft(zt),(ne=Lt.onKeyDown)==null||ne.call(Lt,zt)}})});return dt.jsxs(kt,{...It,children:[xt.scrollButtonStart,xt.scrollbarSizeListener,dt.jsxs(fe,{...ke,children:[dt.jsx(ln,{"aria-label":u,"aria-labelledby":d,"aria-orientation":b==="vertical"?"vertical":null,role:"tablist",...Ce,children:Bt}),J&&Pe]}),xt.scrollButtonEnd]})}),jC=oi(dt.jsx("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"})),Lx=oi(dt.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"})),$C=oi(dt.jsx("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"})),KC=Rf({palette:{mode:"dark",primary:{main:"#a6d4fa"},secondary:{main:"#f4a2a3"},background:{default:"rgb(9, 9, 9)",paper:"rgba(31, 31, 31, 0.9)"},text:{primary:"rgba(255, 255, 255, 1.0)",secondary:"rgba(255, 255, 255, 1.0)"}},typography:{fontFamily:'"Inter", "Roboto", "Helvetica", "Arial", sans-serif',h1:{fontWeight:700,fontSize:"3rem",letterSpacing:"-0.5px"},h4:{fontWeight:600,marginBottom:"0.5em"},h5:{fontWeight:600},body1:{fontSize:"1rem",lineHeight:1.6},body2:{fontSize:"0.95rem",color:"rgba(255, 255, 255, 0.75)",marginBottom:"1.5em"}},components:{MuiCssBaseline:{styleOverrides:`
        body {
          background: linear-gradient(180deg,rgb(20, 20, 20) 0%,rgb(0, 15, 18) 100%);
          background-attachment: fixed;
        }
      `},MuiPaper:{styleOverrides:{root:({theme:i})=>({padding:i.spacing(3),backgroundColor:i.palette.background.paper,borderRadius:"12px",display:"flex",flexDirection:"column"})}},MuiLink:{styleOverrides:{root:({theme:i})=>({display:"inline-flex",alignItems:"center",gap:"6px",textDecoration:"none",fontWeight:500,color:i.palette.primary.light,transition:"color 0.2s ease, background-color 0.2s ease",padding:"4px 8px",borderRadius:"4px","&:hover":{color:i.palette.primary.main,backgroundColor:Ua(i.palette.primary.light,.1),textDecoration:"none"}})}},MuiContainer:{styleOverrides:{root:{}}},MuiGrid:{styleOverrides:{item:{paddingTop:"0 !important",paddingBottom:"0 !important"}}}}}),$u=oi(dt.jsx("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"})),ZC=oi(dt.jsx("path",{d:"M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"})),QC=oi(dt.jsx("path",{d:"M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2m-11-4 2.03 2.71L16 11l4 5H8zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6z"})),JC=oi(dt.jsx("path",{d:"M19.8 18.4 14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6"})),t2=oi([dt.jsx("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 8.22c0-.86.7-1.56 1.56-1.56.33 0 .64.1.89.28l-.01-.12c0-.86.7-1.56 1.56-1.56s1.56.7 1.56 1.56l-.01.12c.26-.18.56-.28.89-.28.86 0 1.56.7 1.56 1.56 0 .62-.37 1.16-.89 1.4.52.25.89.79.89 1.41 0 .86-.7 1.56-1.56 1.56-.33 0-.64-.11-.89-.28l.01.12c0 .86-.7 1.56-1.56 1.56s-1.56-.7-1.56-1.56l.01-.12c-.26.18-.56.28-.89.28-.86 0-1.56-.7-1.56-1.56 0-.62.37-1.16.89-1.4C8.37 9.38 8 8.84 8 8.22M12 19c-3.31 0-6-2.69-6-6 3.31 0 6 2.69 6 6 0-3.31 2.69-6 6-6 0 3.31-2.69 6-6 6"},"0"),dt.jsx("circle",{cx:"12",cy:"9.62",r:"1.56"},"1")]),e2=oi(dt.jsx("path",{d:"M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2zm-9-2h10V8H12zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"})),n2=oi(dt.jsx("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"})),i2=[{category:"Personal Project",icon:dt.jsx(JC,{fontSize:"large"}),title:"particle.js",description:"An interactive 3D n-body particle physics simulator, built with WebGL for direct browser visualization.",imgSrc:"/img/particlejs.png",links:[{href:"https://andrenepomuceno.github.io/particle.js/",text:"Online Demo",icon:dt.jsx(n2,{fontSize:"small"})},{href:"https://github.com/andrenepomuceno/particle.js",text:"View Code",icon:dt.jsx($u,{fontSize:"small"})},{href:"https://www.youtube.com/watch?v=z5RhBaDnkOE&list=PLr48cTU7J6cyvKp1v-1bpH4j5qCZbR-AV",text:"Video",icon:dt.jsx(ZC,{fontSize:"small"})},{href:"https://photos.app.goo.gl/1x41ZhipNKr5yrYa7",text:"Gallery",icon:dt.jsx(QC,{fontSize:"small"})}]},{category:"Personal Project",icon:dt.jsx(t2,{fontSize:"large"}),title:"ESP Garden",description:"Automated system for garden irrigation and monitoring using an ESP32 microcontroller, with cloud integration.",imgSrc:"/img/espgarden.png",links:[{href:"https://github.com/andrenepomuceno/esp_garden",text:"View Code",icon:dt.jsx($u,{fontSize:"small"})}]},{category:"Personal Project",icon:dt.jsx(e2,{fontSize:"large"}),title:"wallet.py",description:"Web application developed with Flask for detailed management and analysis of investment portfolios.",imgSrc:"/img/wallet.png",links:[{href:"https://github.com/andrenepomuceno/wallet.py",text:"View Code",icon:dt.jsx($u,{fontSize:"small"})}]}];function r2({item:i,index:t}){const n={xs:1,md:1},a={xs:2,md:2},o={display:"flex",alignItems:"flex-start",gridColumn:{xs:"span 12",md:"span 6"}},c={display:"flex",flexDirection:"column",justifyContent:"flex-start",gridColumn:{xs:"span 12",md:"span 6"}};return dt.jsxs($h,{container:!0,spacing:{xs:2,md:5},sx:{mb:4,transition:"transform 0.3s ease-in-out","&:hover":{transform:"scale(1.02)"}},children:[dt.jsx($h,{order:n,sx:o,children:dt.jsx(Ii,{component:"img",src:i.imgSrc,alt:`[Image of ${i.title}]`,sx:{width:"100%",height:"auto",maxHeight:{xs:"300px",md:"400px"},display:"block",borderRadius:"12px",objectFit:"cover",boxShadow:"0 8px 16px rgba(0,0,0,0.2)"},onError:u=>{u.target.onerror=null,u.target.src=`https://placehold.co/600x400/1a1a1a/666?text=Error+loading+${i.title}`,u.target.style.objectFit="contain"}})}),dt.jsx($h,{order:a,sx:c,children:dt.jsxs(Rx,{elevation:4,sx:{p:{xs:2,sm:3,md:4},width:"100%"},children:[dt.jsxs(Ii,{sx:{display:"flex",alignItems:"center",gap:1.5,mb:2},children:[i.icon,dt.jsx(Yi,{variant:"overline",color:"primary",children:i.category})]}),dt.jsx(Yi,{variant:"h4",component:"h2",gutterBottom:!0,children:i.title}),dt.jsx(Yi,{variant:"body2",color:"text.secondary",sx:{mb:3,whiteSpace:"pre-line",overflowWrap:"break-word"},children:i.description}),dt.jsx(Ii,{sx:{display:"flex",flexWrap:"wrap",gap:1.5},children:i.links.map((u,d)=>dt.jsxs(Ux,{href:u.href,target:"_blank",rel:"noopener noreferrer",underline:"none",children:[u.icon,u.text]},d))})]})})]})}const a2=oi(dt.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}));function s2(){const i=[{href:"https://github.com/andrenepomuceno",text:"GitHub",icon:dt.jsx($u,{fontSize:"small"})},{href:"https://linkedin.com/in/andresiega",text:"LinkedIn",icon:dt.jsx(a2,{fontSize:"small"})}];return dt.jsx(Ii,{sx:{mb:8},children:dt.jsxs(Rx,{elevation:3,sx:{p:{xs:2,sm:3,md:4}},children:[dt.jsxs(Ii,{sx:{display:"flex",alignItems:"center",gap:1.5,mb:3},children:[dt.jsx(Lx,{color:"primary",fontSize:"large"}),dt.jsx(Yi,{variant:"h3",component:"h2",children:"About Me"})]}),dt.jsx(Yi,{variant:"body1",color:"text.secondary",sx:{lineHeight:1.7,mb:3},paragraph:!0,children:"For the last 10+ years, I've been diving deep into the world of software and hardware engineering. It's been a fun ride, taking me through challenging projects involving both code and hardware in diverse areas like fintech, medical devices, defense systems, and renewable energy tech."}),dt.jsx(Yi,{variant:"body1",color:"text.secondary",sx:{lineHeight:1.7,mb:3},paragraph:!0,children:"I get a kick out of designing systems built to handle serious scale, optimizing performance, and helping engineering teams thrive. You'll often find me working with embedded systems, cloud infrastructure, or puzzling out hardware and software designs or debugging."}),dt.jsx(Yi,{variant:"body1",color:"text.secondary",sx:{lineHeight:1.7,mb:3},paragraph:!0,children:"Ultimately, I love solving tricky problems and building robust, efficient solutions that make a difference."}),dt.jsx(Ii,{sx:{display:"flex",flexWrap:"wrap",gap:2,mt:3},children:i.map((t,n)=>dt.jsxs(Ux,{href:t.href,target:"_blank",rel:"noopener noreferrer",underline:"none",sx:{display:"inline-flex",alignItems:"center"},children:[t.icon&&wa.cloneElement(t.icon,{sx:{mr:.8}}),t.text]},n))})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jm="175",o2=0,Ly=1,l2=2,Nx=1,c2=2,Hr=3,Ba=0,ii=1,Gr=2,La=0,xo=1,zp=2,Ny=3,Oy=4,u2=5,us=100,f2=101,d2=102,h2=103,p2=104,m2=200,g2=201,v2=202,_2=203,Fp=204,Hp=205,y2=206,S2=207,x2=208,b2=209,M2=210,E2=211,T2=212,A2=213,R2=214,Gp=0,Vp=1,kp=2,Eo=3,Xp=4,Wp=5,qp=6,Yp=7,Ox=0,C2=1,w2=2,Na=0,D2=1,U2=2,L2=3,N2=4,O2=5,P2=6,B2=7,Px=300,To=301,Ao=302,jp=303,$p=304,wf=306,Kp=1e3,hs=1001,Zp=1002,$i=1003,I2=1004,Su=1005,fr=1006,Zh=1007,ps=1008,Yr=1009,Bx=1010,Ix=1011,kl=1012,tg=1013,_s=1014,Vr=1015,ec=1016,eg=1017,ng=1018,Xl=1020,zx=35902,Fx=1021,Hx=1022,ji=1023,Gx=1024,Vx=1025,Wl=1026,ql=1027,kx=1028,ig=1029,Xx=1030,rg=1031,ag=1033,Ku=33776,Zu=33777,Qu=33778,Ju=33779,Qp=35840,Jp=35841,tm=35842,em=35843,nm=36196,im=37492,rm=37496,am=37808,sm=37809,om=37810,lm=37811,cm=37812,um=37813,fm=37814,dm=37815,hm=37816,pm=37817,mm=37818,gm=37819,vm=37820,_m=37821,tf=36492,ym=36494,Sm=36495,Wx=36283,xm=36284,bm=36285,Mm=36286,z2=3200,F2=3201,H2=0,G2=1,Ca="",Oi="srgb",Ro="srgb-linear",hf="linear",je="srgb",no=7680,Py=519,V2=512,k2=513,X2=514,qx=515,W2=516,q2=517,Y2=518,j2=519,By=35044,Iy="300 es",kr=2e3,pf=2001;class Uo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qh=Math.PI/180,Em=180/Math.PI;function nc(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(qn[i&255]+qn[i>>8&255]+qn[i>>16&255]+qn[i>>24&255]+"-"+qn[t&255]+qn[t>>8&255]+"-"+qn[t>>16&15|64]+qn[t>>24&255]+"-"+qn[n&63|128]+qn[n>>8&255]+"-"+qn[n>>16&255]+qn[n>>24&255]+qn[a&255]+qn[a>>8&255]+qn[a>>16&255]+qn[a>>24&255]).toLowerCase()}function Re(i,t,n){return Math.max(t,Math.min(n,i))}function $2(i,t){return(i%t+t)%t}function Jh(i,t,n){return(1-n)*i+n*t}function Dl(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(t=0,n=0){Ke.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Re(this.x,t.x,n.x),this.y=Re(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Re(this.x,t,n),this.y=Re(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Re(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Re(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ge{constructor(t,n,a,o,c,u,d,h,p){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,d,h,p)}set(t,n,a,o,c,u,d,h,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=d,g[3]=n,g[4]=c,g[5]=h,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],d=a[3],h=a[6],p=a[1],g=a[4],v=a[7],_=a[2],x=a[5],M=a[8],E=o[0],b=o[3],S=o[6],O=o[1],U=o[4],R=o[7],D=o[2],z=o[5],I=o[8];return c[0]=u*E+d*O+h*D,c[3]=u*b+d*U+h*z,c[6]=u*S+d*R+h*I,c[1]=p*E+g*O+v*D,c[4]=p*b+g*U+v*z,c[7]=p*S+g*R+v*I,c[2]=_*E+x*O+M*D,c[5]=_*b+x*U+M*z,c[8]=_*S+x*R+M*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],d=t[5],h=t[6],p=t[7],g=t[8];return n*u*g-n*d*p-a*c*g+a*d*h+o*c*p-o*u*h}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],d=t[5],h=t[6],p=t[7],g=t[8],v=g*u-d*p,_=d*h-g*c,x=p*c-u*h,M=n*v+a*_+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return t[0]=v*E,t[1]=(o*p-g*a)*E,t[2]=(d*a-o*u)*E,t[3]=_*E,t[4]=(g*n-o*h)*E,t[5]=(o*c-d*n)*E,t[6]=x*E,t[7]=(a*h-p*n)*E,t[8]=(u*n-a*c)*E,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,d){const h=Math.cos(c),p=Math.sin(c);return this.set(a*h,a*p,-a*(h*u+p*d)+u+t,-o*p,o*h,-o*(-p*u+h*d)+d+n,0,0,1),this}scale(t,n){return this.premultiply(tp.makeScale(t,n)),this}rotate(t){return this.premultiply(tp.makeRotation(-t)),this}translate(t,n){return this.premultiply(tp.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const tp=new ge;function Yx(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mf(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function K2(){const i=mf("canvas");return i.style.display="block",i}const zy={};function ef(i){i in zy||(zy[i]=!0,console.warn(i))}function Z2(i,t,n){return new Promise(function(a,o){function c(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}function Q2(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function J2(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Fy=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hy=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tw(){const i={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===je&&(o.r=Wr(o.r),o.g=Wr(o.g),o.b=Wr(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===je&&(o.r=bo(o.r),o.g=bo(o.g),o.b=bo(o.b))),o},fromWorkingColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},toWorkingColorSpace:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ca?hf:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return i.define({[Ro]:{primaries:t,whitePoint:a,transfer:hf,toXYZ:Fy,fromXYZ:Hy,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Oi},outputColorSpaceConfig:{drawingBufferColorSpace:Oi}},[Oi]:{primaries:t,whitePoint:a,transfer:je,toXYZ:Fy,fromXYZ:Hy,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Oi}}}),i}const Oe=tw();function Wr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let io;class ew{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{io===void 0&&(io=mf("canvas")),io.width=t.width,io.height=t.height;const o=io.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=io}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=mf("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Wr(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Wr(n[a]/255)*255):n[a]=Wr(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nw=0;class sg{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nw++}),this.uuid=nc(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(ep(o[u].image)):c.push(ep(o[u]))}else c=ep(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function ep(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ew.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iw=0;class ri extends Uo{constructor(t=ri.DEFAULT_IMAGE,n=ri.DEFAULT_MAPPING,a=hs,o=hs,c=fr,u=ps,d=ji,h=Yr,p=ri.DEFAULT_ANISOTROPY,g=Ca){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iw++}),this.uuid=nc(),this.name="",this.source=new sg(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Px)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kp:t.x=t.x-Math.floor(t.x);break;case hs:t.x=t.x<0?0:1;break;case Zp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kp:t.y=t.y-Math.floor(t.y);break;case hs:t.y=t.y<0?0:1;break;case Zp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=Px;ri.DEFAULT_ANISOTROPY=1;class vn{constructor(t=0,n=0,a=0,o=1){vn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const h=t.elements,p=h[0],g=h[4],v=h[8],_=h[1],x=h[5],M=h[9],E=h[2],b=h[6],S=h[10];if(Math.abs(g-_)<.01&&Math.abs(v-E)<.01&&Math.abs(M-b)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+E)<.1&&Math.abs(M+b)<.1&&Math.abs(p+x+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,R=(x+1)/2,D=(S+1)/2,z=(g+_)/4,I=(v+E)/4,H=(M+b)/4;return U>R&&U>D?U<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(U),o=z/a,c=I/a):R>D?R<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),a=z/o,c=H/o):D<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(D),a=I/c,o=H/c),this.set(a,o,c,n),this}let O=Math.sqrt((b-M)*(b-M)+(v-E)*(v-E)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(b-M)/O,this.y=(v-E)/O,this.z=(_-g)/O,this.w=Math.acos((p+x+S-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Re(this.x,t.x,n.x),this.y=Re(this.y,t.y,n.y),this.z=Re(this.z,t.z,n.z),this.w=Re(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Re(this.x,t,n),this.y=Re(this.y,t,n),this.z=Re(this.z,t,n),this.w=Re(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Re(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rw extends Uo{constructor(t=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new vn(0,0,t,n),this.scissorTest=!1,this.viewport=new vn(0,0,t,n);const o={width:t,height:n,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const c=new ri(o,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const u=a.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new sg(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends rw{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class jx extends ri{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=$i,this.minFilter=$i,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class aw extends ri{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=$i,this.minFilter=$i,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ic{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,d){let h=a[o+0],p=a[o+1],g=a[o+2],v=a[o+3];const _=c[u+0],x=c[u+1],M=c[u+2],E=c[u+3];if(d===0){t[n+0]=h,t[n+1]=p,t[n+2]=g,t[n+3]=v;return}if(d===1){t[n+0]=_,t[n+1]=x,t[n+2]=M,t[n+3]=E;return}if(v!==E||h!==_||p!==x||g!==M){let b=1-d;const S=h*_+p*x+g*M+v*E,O=S>=0?1:-1,U=1-S*S;if(U>Number.EPSILON){const D=Math.sqrt(U),z=Math.atan2(D,S*O);b=Math.sin(b*z)/D,d=Math.sin(d*z)/D}const R=d*O;if(h=h*b+_*R,p=p*b+x*R,g=g*b+M*R,v=v*b+E*R,b===1-d){const D=1/Math.sqrt(h*h+p*p+g*g+v*v);h*=D,p*=D,g*=D,v*=D}}t[n]=h,t[n+1]=p,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,o,c,u){const d=a[o],h=a[o+1],p=a[o+2],g=a[o+3],v=c[u],_=c[u+1],x=c[u+2],M=c[u+3];return t[n]=d*M+g*v+h*x-p*_,t[n+1]=h*M+g*_+p*v-d*x,t[n+2]=p*M+g*x+d*_-h*v,t[n+3]=g*M-d*v-h*_-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,d=Math.cos,h=Math.sin,p=d(a/2),g=d(o/2),v=d(c/2),_=h(a/2),x=h(o/2),M=h(c/2);switch(u){case"XYZ":this._x=_*g*v+p*x*M,this._y=p*x*v-_*g*M,this._z=p*g*M+_*x*v,this._w=p*g*v-_*x*M;break;case"YXZ":this._x=_*g*v+p*x*M,this._y=p*x*v-_*g*M,this._z=p*g*M-_*x*v,this._w=p*g*v+_*x*M;break;case"ZXY":this._x=_*g*v-p*x*M,this._y=p*x*v+_*g*M,this._z=p*g*M+_*x*v,this._w=p*g*v-_*x*M;break;case"ZYX":this._x=_*g*v-p*x*M,this._y=p*x*v+_*g*M,this._z=p*g*M-_*x*v,this._w=p*g*v+_*x*M;break;case"YZX":this._x=_*g*v+p*x*M,this._y=p*x*v+_*g*M,this._z=p*g*M-_*x*v,this._w=p*g*v-_*x*M;break;case"XZY":this._x=_*g*v-p*x*M,this._y=p*x*v-_*g*M,this._z=p*g*M+_*x*v,this._w=p*g*v+_*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],d=n[5],h=n[9],p=n[2],g=n[6],v=n[10],_=a+d+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-h)*x,this._y=(c-p)*x,this._z=(u-o)*x}else if(a>d&&a>v){const x=2*Math.sqrt(1+a-d-v);this._w=(g-h)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+p)/x}else if(d>v){const x=2*Math.sqrt(1+d-a-v);this._w=(c-p)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(h+g)/x}else{const x=2*Math.sqrt(1+v-a-d);this._w=(u-o)/x,this._x=(c+p)/x,this._y=(h+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,d=n._x,h=n._y,p=n._z,g=n._w;return this._x=a*g+u*d+o*p-c*h,this._y=o*g+u*h+c*d-a*p,this._z=c*g+u*p+a*h-o*d,this._w=u*g-a*d-o*h-c*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,o=this._y,c=this._z,u=this._w;let d=u*t._w+a*t._x+o*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=u,this._x=a,this._y=o,this._z=c,this;const h=1-d*d;if(h<=Number.EPSILON){const x=1-n;return this._w=x*u+n*this._w,this._x=x*a+n*this._x,this._y=x*o+n*this._y,this._z=x*c+n*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,d),v=Math.sin((1-n)*g)/p,_=Math.sin(n*g)/p;return this._w=u*v+this._w*_,this._x=a*v+this._x*_,this._y=o*v+this._y*_,this._z=c*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ut{constructor(t=0,n=0,a=0){ut.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Gy.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Gy.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,d=t.z,h=t.w,p=2*(u*o-d*a),g=2*(d*n-c*o),v=2*(c*a-u*n);return this.x=n+h*p+u*v-d*g,this.y=a+h*g+d*p-c*v,this.z=o+h*v+c*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Re(this.x,t.x,n.x),this.y=Re(this.y,t.y,n.y),this.z=Re(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Re(this.x,t,n),this.y=Re(this.y,t,n),this.z=Re(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Re(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,d=n.y,h=n.z;return this.x=o*h-c*d,this.y=c*u-a*h,this.z=a*d-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return np.copy(this).projectOnVector(t),this.sub(np)}reflect(t){return this.sub(np.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Re(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const np=new ut,Gy=new ic;class rc{constructor(t=new ut(1/0,1/0,1/0),n=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(ki.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(ki.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=ki.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)t.isMesh===!0?t.getVertexPosition(u,ki):ki.fromBufferAttribute(c,u),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xu.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),xu.copy(a.boundingBox)),xu.applyMatrix4(t.matrixWorld),this.union(xu)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ul),bu.subVectors(this.max,Ul),ro.subVectors(t.a,Ul),ao.subVectors(t.b,Ul),so.subVectors(t.c,Ul),ba.subVectors(ao,ro),Ma.subVectors(so,ao),es.subVectors(ro,so);let n=[0,-ba.z,ba.y,0,-Ma.z,Ma.y,0,-es.z,es.y,ba.z,0,-ba.x,Ma.z,0,-Ma.x,es.z,0,-es.x,-ba.y,ba.x,0,-Ma.y,Ma.x,0,-es.y,es.x,0];return!ip(n,ro,ao,so,bu)||(n=[1,0,0,0,1,0,0,0,1],!ip(n,ro,ao,so,bu))?!1:(Mu.crossVectors(ba,Ma),n=[Mu.x,Mu.y,Mu.z],ip(n,ro,ao,so,bu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pr=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],ki=new ut,xu=new rc,ro=new ut,ao=new ut,so=new ut,ba=new ut,Ma=new ut,es=new ut,Ul=new ut,bu=new ut,Mu=new ut,ns=new ut;function ip(i,t,n,a,o){for(let c=0,u=i.length-3;c<=u;c+=3){ns.fromArray(i,c);const d=o.x*Math.abs(ns.x)+o.y*Math.abs(ns.y)+o.z*Math.abs(ns.z),h=t.dot(ns),p=n.dot(ns),g=a.dot(ns);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>d)return!1}return!0}const sw=new rc,Ll=new ut,rp=new ut;class Df{constructor(t=new ut,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):sw.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ll.subVectors(t,this.center);const n=Ll.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Ll,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ll.copy(t.center).add(rp)),this.expandByPoint(Ll.copy(t.center).sub(rp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Br=new ut,ap=new ut,Eu=new ut,Ea=new ut,sp=new ut,Tu=new ut,op=new ut;class $x{constructor(t=new ut,n=new ut(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Br)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Br.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Br.copy(this.origin).addScaledVector(this.direction,n),Br.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){ap.copy(t).add(n).multiplyScalar(.5),Eu.copy(n).sub(t).normalize(),Ea.copy(this.origin).sub(ap);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Eu),d=Ea.dot(this.direction),h=-Ea.dot(Eu),p=Ea.lengthSq(),g=Math.abs(1-u*u);let v,_,x,M;if(g>0)if(v=u*h-d,_=u*d-h,M=c*g,v>=0)if(_>=-M)if(_<=M){const E=1/g;v*=E,_*=E,x=v*(v+u*_+2*d)+_*(u*v+_+2*h)+p}else _=c,v=Math.max(0,-(u*_+d)),x=-v*v+_*(_+2*h)+p;else _=-c,v=Math.max(0,-(u*_+d)),x=-v*v+_*(_+2*h)+p;else _<=-M?(v=Math.max(0,-(-u*c+d)),_=v>0?-c:Math.min(Math.max(-c,-h),c),x=-v*v+_*(_+2*h)+p):_<=M?(v=0,_=Math.min(Math.max(-c,-h),c),x=_*(_+2*h)+p):(v=Math.max(0,-(u*c+d)),_=v>0?c:Math.min(Math.max(-c,-h),c),x=-v*v+_*(_+2*h)+p);else _=u>0?-c:c,v=Math.max(0,-(u*_+d)),x=-v*v+_*(_+2*h)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(ap).addScaledVector(Eu,_),x}intersectSphere(t,n){Br.subVectors(t.center,this.origin);const a=Br.dot(this.direction),o=Br.dot(Br)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=a-u,h=a+u;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,d,h;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(a=(t.min.x-_.x)*p,o=(t.max.x-_.x)*p):(a=(t.max.x-_.x)*p,o=(t.min.x-_.x)*p),g>=0?(c=(t.min.y-_.y)*g,u=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,u=(t.min.y-_.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),v>=0?(d=(t.min.z-_.z)*v,h=(t.max.z-_.z)*v):(d=(t.max.z-_.z)*v,h=(t.min.z-_.z)*v),a>h||d>o)||((d>a||a!==a)&&(a=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,Br)!==null}intersectTriangle(t,n,a,o,c){sp.subVectors(n,t),Tu.subVectors(a,t),op.crossVectors(sp,Tu);let u=this.direction.dot(op),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Ea.subVectors(this.origin,t);const h=d*this.direction.dot(Tu.crossVectors(Ea,Tu));if(h<0)return null;const p=d*this.direction.dot(sp.cross(Ea));if(p<0||h+p>u)return null;const g=-d*Ea.dot(op);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _n{constructor(t,n,a,o,c,u,d,h,p,g,v,_,x,M,E,b){_n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,d,h,p,g,v,_,x,M,E,b)}set(t,n,a,o,c,u,d,h,p,g,v,_,x,M,E,b){const S=this.elements;return S[0]=t,S[4]=n,S[8]=a,S[12]=o,S[1]=c,S[5]=u,S[9]=d,S[13]=h,S[2]=p,S[6]=g,S[10]=v,S[14]=_,S[3]=x,S[7]=M,S[11]=E,S[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _n().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/oo.setFromMatrixColumn(t,0).length(),c=1/oo.setFromMatrixColumn(t,1).length(),u=1/oo.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),d=Math.sin(a),h=Math.cos(o),p=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=u*g,x=u*v,M=d*g,E=d*v;n[0]=h*g,n[4]=-h*v,n[8]=p,n[1]=x+M*p,n[5]=_-E*p,n[9]=-d*h,n[2]=E-_*p,n[6]=M+x*p,n[10]=u*h}else if(t.order==="YXZ"){const _=h*g,x=h*v,M=p*g,E=p*v;n[0]=_+E*d,n[4]=M*d-x,n[8]=u*p,n[1]=u*v,n[5]=u*g,n[9]=-d,n[2]=x*d-M,n[6]=E+_*d,n[10]=u*h}else if(t.order==="ZXY"){const _=h*g,x=h*v,M=p*g,E=p*v;n[0]=_-E*d,n[4]=-u*v,n[8]=M+x*d,n[1]=x+M*d,n[5]=u*g,n[9]=E-_*d,n[2]=-u*p,n[6]=d,n[10]=u*h}else if(t.order==="ZYX"){const _=u*g,x=u*v,M=d*g,E=d*v;n[0]=h*g,n[4]=M*p-x,n[8]=_*p+E,n[1]=h*v,n[5]=E*p+_,n[9]=x*p-M,n[2]=-p,n[6]=d*h,n[10]=u*h}else if(t.order==="YZX"){const _=u*h,x=u*p,M=d*h,E=d*p;n[0]=h*g,n[4]=E-_*v,n[8]=M*v+x,n[1]=v,n[5]=u*g,n[9]=-d*g,n[2]=-p*g,n[6]=x*v+M,n[10]=_-E*v}else if(t.order==="XZY"){const _=u*h,x=u*p,M=d*h,E=d*p;n[0]=h*g,n[4]=-v,n[8]=p*g,n[1]=_*v+E,n[5]=u*g,n[9]=x*v-M,n[2]=M*v-x,n[6]=d*g,n[10]=E*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ow,t,lw)}lookAt(t,n,a){const o=this.elements;return mi.subVectors(t,n),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Ta.crossVectors(a,mi),Ta.lengthSq()===0&&(Math.abs(a.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Ta.crossVectors(a,mi)),Ta.normalize(),Au.crossVectors(mi,Ta),o[0]=Ta.x,o[4]=Au.x,o[8]=mi.x,o[1]=Ta.y,o[5]=Au.y,o[9]=mi.y,o[2]=Ta.z,o[6]=Au.z,o[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],d=a[4],h=a[8],p=a[12],g=a[1],v=a[5],_=a[9],x=a[13],M=a[2],E=a[6],b=a[10],S=a[14],O=a[3],U=a[7],R=a[11],D=a[15],z=o[0],I=o[4],H=o[8],w=o[12],y=o[1],N=o[5],j=o[9],q=o[13],rt=o[2],lt=o[6],F=o[10],Y=o[14],X=o[3],ht=o[7],P=o[11],$=o[15];return c[0]=u*z+d*y+h*rt+p*X,c[4]=u*I+d*N+h*lt+p*ht,c[8]=u*H+d*j+h*F+p*P,c[12]=u*w+d*q+h*Y+p*$,c[1]=g*z+v*y+_*rt+x*X,c[5]=g*I+v*N+_*lt+x*ht,c[9]=g*H+v*j+_*F+x*P,c[13]=g*w+v*q+_*Y+x*$,c[2]=M*z+E*y+b*rt+S*X,c[6]=M*I+E*N+b*lt+S*ht,c[10]=M*H+E*j+b*F+S*P,c[14]=M*w+E*q+b*Y+S*$,c[3]=O*z+U*y+R*rt+D*X,c[7]=O*I+U*N+R*lt+D*ht,c[11]=O*H+U*j+R*F+D*P,c[15]=O*w+U*q+R*Y+D*$,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],d=t[5],h=t[9],p=t[13],g=t[2],v=t[6],_=t[10],x=t[14],M=t[3],E=t[7],b=t[11],S=t[15];return M*(+c*h*v-o*p*v-c*d*_+a*p*_+o*d*x-a*h*x)+E*(+n*h*x-n*p*_+c*u*_-o*u*x+o*p*g-c*h*g)+b*(+n*p*v-n*d*x-c*u*v+a*u*x+c*d*g-a*p*g)+S*(-o*d*g-n*h*v+n*d*_+o*u*v-a*u*_+a*h*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],d=t[5],h=t[6],p=t[7],g=t[8],v=t[9],_=t[10],x=t[11],M=t[12],E=t[13],b=t[14],S=t[15],O=v*b*p-E*_*p+E*h*x-d*b*x-v*h*S+d*_*S,U=M*_*p-g*b*p-M*h*x+u*b*x+g*h*S-u*_*S,R=g*E*p-M*v*p+M*d*x-u*E*x-g*d*S+u*v*S,D=M*v*h-g*E*h-M*d*_+u*E*_+g*d*b-u*v*b,z=n*O+a*U+o*R+c*D;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/z;return t[0]=O*I,t[1]=(E*_*c-v*b*c-E*o*x+a*b*x+v*o*S-a*_*S)*I,t[2]=(d*b*c-E*h*c+E*o*p-a*b*p-d*o*S+a*h*S)*I,t[3]=(v*h*c-d*_*c-v*o*p+a*_*p+d*o*x-a*h*x)*I,t[4]=U*I,t[5]=(g*b*c-M*_*c+M*o*x-n*b*x-g*o*S+n*_*S)*I,t[6]=(M*h*c-u*b*c-M*o*p+n*b*p+u*o*S-n*h*S)*I,t[7]=(u*_*c-g*h*c+g*o*p-n*_*p-u*o*x+n*h*x)*I,t[8]=R*I,t[9]=(M*v*c-g*E*c-M*a*x+n*E*x+g*a*S-n*v*S)*I,t[10]=(u*E*c-M*d*c+M*a*p-n*E*p-u*a*S+n*d*S)*I,t[11]=(g*d*c-u*v*c-g*a*p+n*v*p+u*a*x-n*d*x)*I,t[12]=D*I,t[13]=(g*E*o-M*v*o+M*a*_-n*E*_-g*a*b+n*v*b)*I,t[14]=(M*d*o-u*E*o-M*a*h+n*E*h+u*a*b-n*d*b)*I,t[15]=(u*v*o-g*d*o+g*a*h-n*v*h-u*a*_+n*d*_)*I,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,d=t.y,h=t.z,p=c*u,g=c*d;return this.set(p*u+a,p*d-o*h,p*h+o*d,0,p*d+o*h,g*d+a,g*h-o*u,0,p*h-o*d,g*h+o*u,c*h*h+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,d=n._z,h=n._w,p=c+c,g=u+u,v=d+d,_=c*p,x=c*g,M=c*v,E=u*g,b=u*v,S=d*v,O=h*p,U=h*g,R=h*v,D=a.x,z=a.y,I=a.z;return o[0]=(1-(E+S))*D,o[1]=(x+R)*D,o[2]=(M-U)*D,o[3]=0,o[4]=(x-R)*z,o[5]=(1-(_+S))*z,o[6]=(b+O)*z,o[7]=0,o[8]=(M+U)*I,o[9]=(b-O)*I,o[10]=(1-(_+E))*I,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let c=oo.set(o[0],o[1],o[2]).length();const u=oo.set(o[4],o[5],o[6]).length(),d=oo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],Xi.copy(this);const p=1/c,g=1/u,v=1/d;return Xi.elements[0]*=p,Xi.elements[1]*=p,Xi.elements[2]*=p,Xi.elements[4]*=g,Xi.elements[5]*=g,Xi.elements[6]*=g,Xi.elements[8]*=v,Xi.elements[9]*=v,Xi.elements[10]*=v,n.setFromRotationMatrix(Xi),a.x=c,a.y=u,a.z=d,this}makePerspective(t,n,a,o,c,u,d=kr){const h=this.elements,p=2*c/(n-t),g=2*c/(a-o),v=(n+t)/(n-t),_=(a+o)/(a-o);let x,M;if(d===kr)x=-(u+c)/(u-c),M=-2*u*c/(u-c);else if(d===pf)x=-u/(u-c),M=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,n,a,o,c,u,d=kr){const h=this.elements,p=1/(n-t),g=1/(a-o),v=1/(u-c),_=(n+t)*p,x=(a+o)*g;let M,E;if(d===kr)M=(u+c)*v,E=-2*v;else if(d===pf)M=c*v,E=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=E,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const oo=new ut,Xi=new _n,ow=new ut(0,0,0),lw=new ut(1,1,1),Ta=new ut,Au=new ut,mi=new ut,Vy=new _n,ky=new ic;class jr{constructor(t=0,n=0,a=0,o=jr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],d=o[8],h=o[1],p=o[5],g=o[9],v=o[2],_=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Re(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-Re(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Vy.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vy,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return ky.setFromEuler(this),this.setFromQuaternion(ky,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jr.DEFAULT_ORDER="XYZ";class Kx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cw=0;const Xy=new ut,lo=new ic,Ir=new _n,Ru=new ut,Nl=new ut,uw=new ut,fw=new ic,Wy=new ut(1,0,0),qy=new ut(0,1,0),Yy=new ut(0,0,1),jy={type:"added"},dw={type:"removed"},co={type:"childadded",child:null},lp={type:"childremoved",child:null};class ai extends Uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cw++}),this.uuid=nc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const t=new ut,n=new jr,a=new ic,o=new ut(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new _n},normalMatrix:{value:new ge}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return lo.setFromAxisAngle(t,n),this.quaternion.multiply(lo),this}rotateOnWorldAxis(t,n){return lo.setFromAxisAngle(t,n),this.quaternion.premultiply(lo),this}rotateX(t){return this.rotateOnAxis(Wy,t)}rotateY(t){return this.rotateOnAxis(qy,t)}rotateZ(t){return this.rotateOnAxis(Yy,t)}translateOnAxis(t,n){return Xy.copy(t).applyQuaternion(this.quaternion),this.position.add(Xy.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Wy,t)}translateY(t){return this.translateOnAxis(qy,t)}translateZ(t){return this.translateOnAxis(Yy,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ir.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Ru.copy(t):Ru.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ir.lookAt(Nl,Ru,this.up):Ir.lookAt(Ru,Nl,this.up),this.quaternion.setFromRotationMatrix(Ir),o&&(Ir.extractRotation(o.matrixWorld),lo.setFromRotationMatrix(Ir),this.quaternion.premultiply(lo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jy),co.child=t,this.dispatchEvent(co),co.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(dw),lp.child=t,this.dispatchEvent(lp),lp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ir.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ir.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ir),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jy),co.child=t,this.dispatchEvent(co),co.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nl,t,uw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nl,fw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const v=h[p];c(t.shapes,v)}else c(t.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,p=this.material.length;h<p;h++)d.push(c(t.materials,this.material[h]));o.material=d}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(c(t.animations,h))}}if(n){const d=u(t.geometries),h=u(t.materials),p=u(t.textures),g=u(t.images),v=u(t.shapes),_=u(t.skeletons),x=u(t.animations),M=u(t.nodes);d.length>0&&(a.geometries=d),h.length>0&&(a.materials=h),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),x.length>0&&(a.animations=x),M.length>0&&(a.nodes=M)}return a.object=o,a;function u(d){const h=[];for(const p in d){const g=d[p];delete g.metadata,h.push(g)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}ai.DEFAULT_UP=new ut(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wi=new ut,zr=new ut,cp=new ut,Fr=new ut,uo=new ut,fo=new ut,$y=new ut,up=new ut,fp=new ut,dp=new ut,hp=new vn,pp=new vn,mp=new vn;class qi{constructor(t=new ut,n=new ut,a=new ut){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Wi.subVectors(t,n),o.cross(Wi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Wi.subVectors(o,n),zr.subVectors(a,n),cp.subVectors(t,n);const u=Wi.dot(Wi),d=Wi.dot(zr),h=Wi.dot(cp),p=zr.dot(zr),g=zr.dot(cp),v=u*p-d*d;if(v===0)return c.set(0,0,0),null;const _=1/v,x=(p*h-d*g)*_,M=(u*g-d*h)*_;return c.set(1-x-M,M,x)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,Fr)===null?!1:Fr.x>=0&&Fr.y>=0&&Fr.x+Fr.y<=1}static getInterpolation(t,n,a,o,c,u,d,h){return this.getBarycoord(t,n,a,o,Fr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,Fr.x),h.addScaledVector(u,Fr.y),h.addScaledVector(d,Fr.z),h)}static getInterpolatedAttribute(t,n,a,o,c,u){return hp.setScalar(0),pp.setScalar(0),mp.setScalar(0),hp.fromBufferAttribute(t,n),pp.fromBufferAttribute(t,a),mp.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(hp,c.x),u.addScaledVector(pp,c.y),u.addScaledVector(mp,c.z),u}static isFrontFacing(t,n,a,o){return Wi.subVectors(a,n),zr.subVectors(t,n),Wi.cross(zr).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wi.subVectors(this.c,this.b),zr.subVectors(this.a,this.b),Wi.cross(zr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return qi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return qi.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return qi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,d;uo.subVectors(o,a),fo.subVectors(c,a),up.subVectors(t,a);const h=uo.dot(up),p=fo.dot(up);if(h<=0&&p<=0)return n.copy(a);fp.subVectors(t,o);const g=uo.dot(fp),v=fo.dot(fp);if(g>=0&&v<=g)return n.copy(o);const _=h*v-g*p;if(_<=0&&h>=0&&g<=0)return u=h/(h-g),n.copy(a).addScaledVector(uo,u);dp.subVectors(t,c);const x=uo.dot(dp),M=fo.dot(dp);if(M>=0&&x<=M)return n.copy(c);const E=x*p-h*M;if(E<=0&&p>=0&&M<=0)return d=p/(p-M),n.copy(a).addScaledVector(fo,d);const b=g*M-x*v;if(b<=0&&v-g>=0&&x-M>=0)return $y.subVectors(c,o),d=(v-g)/(v-g+(x-M)),n.copy(o).addScaledVector($y,d);const S=1/(b+E+_);return u=E*S,d=_*S,n.copy(a).addScaledVector(uo,u).addScaledVector(fo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Aa={h:0,s:0,l:0},Cu={h:0,s:0,l:0};function gp(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*6*(2/3-n):i}class He{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.toWorkingColorSpace(this,n),this}setRGB(t,n,a,o=Oe.workingColorSpace){return this.r=t,this.g=n,this.b=a,Oe.toWorkingColorSpace(this,o),this}setHSL(t,n,a,o=Oe.workingColorSpace){if(t=$2(t,1),n=Re(n,0,1),a=Re(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=gp(u,c,t+1/3),this.g=gp(u,c,t),this.b=gp(u,c,t-1/3)}return Oe.toWorkingColorSpace(this,o),this}setStyle(t,n=Oi){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Oi){const a=Zx[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}copyLinearToSRGB(t){return this.r=bo(t.r),this.g=bo(t.g),this.b=bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oi){return Oe.fromWorkingColorSpace(Yn.copy(this),t),Math.round(Re(Yn.r*255,0,255))*65536+Math.round(Re(Yn.g*255,0,255))*256+Math.round(Re(Yn.b*255,0,255))}getHexString(t=Oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Oe.workingColorSpace){Oe.fromWorkingColorSpace(Yn.copy(this),n);const a=Yn.r,o=Yn.g,c=Yn.b,u=Math.max(a,o,c),d=Math.min(a,o,c);let h,p;const g=(d+u)/2;if(d===u)h=0,p=0;else{const v=u-d;switch(p=g<=.5?v/(u+d):v/(2-u-d),u){case a:h=(o-c)/v+(o<c?6:0);break;case o:h=(c-a)/v+2;break;case c:h=(a-o)/v+4;break}h/=6}return t.h=h,t.s=p,t.l=g,t}getRGB(t,n=Oe.workingColorSpace){return Oe.fromWorkingColorSpace(Yn.copy(this),n),t.r=Yn.r,t.g=Yn.g,t.b=Yn.b,t}getStyle(t=Oi){Oe.fromWorkingColorSpace(Yn.copy(this),t);const n=Yn.r,a=Yn.g,o=Yn.b;return t!==Oi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(Aa),this.setHSL(Aa.h+t,Aa.s+n,Aa.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Aa),t.getHSL(Cu);const a=Jh(Aa.h,Cu.h,n),o=Jh(Aa.s,Cu.s,n),c=Jh(Aa.l,Cu.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yn=new He;He.NAMES=Zx;let hw=0;class ac extends Uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hw++}),this.uuid=nc(),this.name="",this.type="Material",this.blending=xo,this.side=Ba,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fp,this.blendDst=Hp,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Py,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(a.blending=this.blending),this.side!==Ba&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Fp&&(a.blendSrc=this.blendSrc),this.blendDst!==Hp&&(a.blendDst=this.blendDst),this.blendEquation!==us&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Py&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==no&&(a.stencilFail=this.stencilFail),this.stencilZFail!==no&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==no&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const d in c){const h=c[d];delete h.metadata,u.push(h)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qx extends ac{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.combine=Ox,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Mn=new ut,wu=new Ke;let pw=0;class Si{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pw++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=By,this.updateRanges=[],this.gpuType=Vr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)wu.fromBufferAttribute(this,n),wu.applyMatrix3(t),this.setXY(n,wu.x,wu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix3(t),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix4(t),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)Mn.fromBufferAttribute(this,n),Mn.applyNormalMatrix(t),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)Mn.fromBufferAttribute(this,n),Mn.transformDirection(t),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Dl(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=ni(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Dl(n,this.array)),n}setX(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Dl(n,this.array)),n}setY(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Dl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Dl(n,this.array)),n}setW(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=ni(n,this.array),a=ni(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=ni(n,this.array),a=ni(a,this.array),o=ni(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=ni(n,this.array),a=ni(a,this.array),o=ni(o,this.array),c=ni(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==By&&(t.usage=this.usage),t}}class Jx extends Si{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class tb extends Si{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class gs extends Si{constructor(t,n,a){super(new Float32Array(t),n,a)}}let mw=0;const Li=new _n,vp=new ai,ho=new ut,gi=new rc,Ol=new rc,Bn=new ut;class Kr extends Uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mw++}),this.uuid=nc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yx(t)?tb:Jx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ge().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Li.makeRotationFromQuaternion(t),this.applyMatrix4(Li),this}rotateX(t){return Li.makeRotationX(t),this.applyMatrix4(Li),this}rotateY(t){return Li.makeRotationY(t),this.applyMatrix4(Li),this}rotateZ(t){return Li.makeRotationZ(t),this.applyMatrix4(Li),this}translate(t,n,a){return Li.makeTranslation(t,n,a),this.applyMatrix4(Li),this}scale(t,n,a){return Li.makeScale(t,n,a),this.applyMatrix4(Li),this}lookAt(t){return vp.lookAt(t),vp.updateMatrix(),this.applyMatrix4(vp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new gs(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rc);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];gi.setFromBufferAttribute(c),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Df);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(t){const a=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Ol.setFromBufferAttribute(d),this.morphTargetsRelative?(Bn.addVectors(gi.min,Ol.min),gi.expandByPoint(Bn),Bn.addVectors(gi.max,Ol.max),gi.expandByPoint(Bn)):(gi.expandByPoint(Ol.min),gi.expandByPoint(Ol.max))}gi.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)Bn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(Bn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],h=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Bn.fromBufferAttribute(d,p),h&&(ho.fromBufferAttribute(t,p),Bn.add(ho)),o=Math.max(o,a.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let H=0;H<a.count;H++)d[H]=new ut,h[H]=new ut;const p=new ut,g=new ut,v=new ut,_=new Ke,x=new Ke,M=new Ke,E=new ut,b=new ut;function S(H,w,y){p.fromBufferAttribute(a,H),g.fromBufferAttribute(a,w),v.fromBufferAttribute(a,y),_.fromBufferAttribute(c,H),x.fromBufferAttribute(c,w),M.fromBufferAttribute(c,y),g.sub(p),v.sub(p),x.sub(_),M.sub(_);const N=1/(x.x*M.y-M.x*x.y);isFinite(N)&&(E.copy(g).multiplyScalar(M.y).addScaledVector(v,-x.y).multiplyScalar(N),b.copy(v).multiplyScalar(x.x).addScaledVector(g,-M.x).multiplyScalar(N),d[H].add(E),d[w].add(E),d[y].add(E),h[H].add(b),h[w].add(b),h[y].add(b))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let H=0,w=O.length;H<w;++H){const y=O[H],N=y.start,j=y.count;for(let q=N,rt=N+j;q<rt;q+=3)S(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const U=new ut,R=new ut,D=new ut,z=new ut;function I(H){D.fromBufferAttribute(o,H),z.copy(D);const w=d[H];U.copy(w),U.sub(D.multiplyScalar(D.dot(w))).normalize(),R.crossVectors(z,w);const N=R.dot(h[H])<0?-1:1;u.setXYZW(H,U.x,U.y,U.z,N)}for(let H=0,w=O.length;H<w;++H){const y=O[H],N=y.start,j=y.count;for(let q=N,rt=N+j;q<rt;q+=3)I(t.getX(q+0)),I(t.getX(q+1)),I(t.getX(q+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,x=a.count;_<x;_++)a.setXYZ(_,0,0,0);const o=new ut,c=new ut,u=new ut,d=new ut,h=new ut,p=new ut,g=new ut,v=new ut;if(t)for(let _=0,x=t.count;_<x;_+=3){const M=t.getX(_+0),E=t.getX(_+1),b=t.getX(_+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),d.fromBufferAttribute(a,M),h.fromBufferAttribute(a,E),p.fromBufferAttribute(a,b),d.add(g),h.add(g),p.add(g),a.setXYZ(M,d.x,d.y,d.z),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(b,p.x,p.y,p.z)}else for(let _=0,x=n.count;_<x;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Bn.fromBufferAttribute(t,n),Bn.normalize(),t.setXYZ(n,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function t(d,h){const p=d.array,g=d.itemSize,v=d.normalized,_=new p.constructor(h.length*g);let x=0,M=0;for(let E=0,b=h.length;E<b;E++){d.isInterleavedBufferAttribute?x=h[E]*d.data.stride+d.offset:x=h[E]*g;for(let S=0;S<g;S++)_[M++]=p[x++]}return new Si(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kr,a=this.index.array,o=this.attributes;for(const d in o){const h=o[d],p=t(h,a);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const h=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const _=p[g],x=t(_,a);h.push(x)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(t[p]=h[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const h in a){const p=a[h];t.data.attributes[h]=p.toJSON(t.data)}const o={};let c=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let v=0,_=p.length;v<_;v++){const x=p[v];g.push(x.toJSON(t.data))}g.length>0&&(o[h]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ky=new _n,is=new $x,Du=new Df,Zy=new ut,Uu=new ut,Lu=new ut,Nu=new ut,_p=new ut,Ou=new ut,Qy=new ut,Pu=new ut;class Xr extends ai{constructor(t=new Kr,n=new Qx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const d=this.morphTargetInfluences;if(c&&d){Ou.set(0,0,0);for(let h=0,p=c.length;h<p;h++){const g=d[h],v=c[h];g!==0&&(_p.fromBufferAttribute(v,t),u?Ou.addScaledVector(_p,g):Ou.addScaledVector(_p.sub(n),g))}n.add(Ou)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Du.copy(a.boundingSphere),Du.applyMatrix4(c),is.copy(t.ray).recast(t.near),!(Du.containsPoint(is.origin)===!1&&(is.intersectSphere(Du,Zy)===null||is.origin.distanceToSquared(Zy)>(t.far-t.near)**2))&&(Ky.copy(c).invert(),is.copy(t.ray).applyMatrix4(Ky),!(a.boundingBox!==null&&is.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,is)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,d=c.index,h=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,x=c.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const b=_[M],S=u[b.materialIndex],O=Math.max(b.start,x.start),U=Math.min(d.count,Math.min(b.start+b.count,x.start+x.count));for(let R=O,D=U;R<D;R+=3){const z=d.getX(R),I=d.getX(R+1),H=d.getX(R+2);o=Bu(this,S,t,a,p,g,v,z,I,H),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=b.materialIndex,n.push(o))}}else{const M=Math.max(0,x.start),E=Math.min(d.count,x.start+x.count);for(let b=M,S=E;b<S;b+=3){const O=d.getX(b),U=d.getX(b+1),R=d.getX(b+2);o=Bu(this,u,t,a,p,g,v,O,U,R),o&&(o.faceIndex=Math.floor(b/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const b=_[M],S=u[b.materialIndex],O=Math.max(b.start,x.start),U=Math.min(h.count,Math.min(b.start+b.count,x.start+x.count));for(let R=O,D=U;R<D;R+=3){const z=R,I=R+1,H=R+2;o=Bu(this,S,t,a,p,g,v,z,I,H),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=b.materialIndex,n.push(o))}}else{const M=Math.max(0,x.start),E=Math.min(h.count,x.start+x.count);for(let b=M,S=E;b<S;b+=3){const O=b,U=b+1,R=b+2;o=Bu(this,u,t,a,p,g,v,O,U,R),o&&(o.faceIndex=Math.floor(b/3),n.push(o))}}}}function gw(i,t,n,a,o,c,u,d){let h;if(t.side===ii?h=a.intersectTriangle(u,c,o,!0,d):h=a.intersectTriangle(o,c,u,t.side===Ba,d),h===null)return null;Pu.copy(d),Pu.applyMatrix4(i.matrixWorld);const p=n.ray.origin.distanceTo(Pu);return p<n.near||p>n.far?null:{distance:p,point:Pu.clone(),object:i}}function Bu(i,t,n,a,o,c,u,d,h,p){i.getVertexPosition(d,Uu),i.getVertexPosition(h,Lu),i.getVertexPosition(p,Nu);const g=gw(i,t,n,a,Uu,Lu,Nu,Qy);if(g){const v=new ut;qi.getBarycoord(Qy,Uu,Lu,Nu,v),o&&(g.uv=qi.getInterpolatedAttribute(o,d,h,p,v,new Ke)),c&&(g.uv1=qi.getInterpolatedAttribute(c,d,h,p,v,new Ke)),u&&(g.normal=qi.getInterpolatedAttribute(u,d,h,p,v,new ut),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:h,c:p,normal:new ut,materialIndex:0};qi.getNormal(Uu,Lu,Nu,_.normal),g.face=_,g.barycoord=v}return g}class sc extends Kr{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const h=[],p=[],g=[],v=[];let _=0,x=0;M("z","y","x",-1,-1,a,n,t,u,c,0),M("z","y","x",1,-1,a,n,-t,u,c,1),M("x","z","y",1,1,t,a,n,o,u,2),M("x","z","y",1,-1,t,a,-n,o,u,3),M("x","y","z",1,-1,t,n,a,o,c,4),M("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(h),this.setAttribute("position",new gs(p,3)),this.setAttribute("normal",new gs(g,3)),this.setAttribute("uv",new gs(v,2));function M(E,b,S,O,U,R,D,z,I,H,w){const y=R/I,N=D/H,j=R/2,q=D/2,rt=z/2,lt=I+1,F=H+1;let Y=0,X=0;const ht=new ut;for(let P=0;P<F;P++){const $=P*N-q;for(let pt=0;pt<lt;pt++){const Mt=pt*y-j;ht[E]=Mt*O,ht[b]=$*U,ht[S]=rt,p.push(ht.x,ht.y,ht.z),ht[E]=0,ht[b]=0,ht[S]=z>0?1:-1,g.push(ht.x,ht.y,ht.z),v.push(pt/I),v.push(1-P/H),Y+=1}}for(let P=0;P<H;P++)for(let $=0;$<I;$++){const pt=_+$+lt*P,Mt=_+$+lt*(P+1),J=_+($+1)+lt*(P+1),_t=_+($+1)+lt*P;h.push(pt,Mt,_t),h.push(Mt,J,_t),X+=6}d.addGroup(x,X,w),x+=X,_+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Co(i){const t={};for(const n in i){t[n]={};for(const a in i[n]){const o=i[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function Zn(i){const t={};for(let n=0;n<i.length;n++){const a=Co(i[n]);for(const o in a)t[o]=a[o]}return t}function vw(i){const t=[];for(let n=0;n<i.length;n++)t.push(i[n].clone());return t}function eb(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Oe.workingColorSpace}const _w={clone:Co,merge:Zn};var yw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $r extends ac{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yw,this.fragmentShader=Sw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Co(t.uniforms),this.uniformsGroups=vw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class nb extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=kr}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ra=new ut,Jy=new Ke,tS=new Ke;class Bi extends nb{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Em*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Em*2*Math.atan(Math.tan(Qh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Ra.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ra.x,Ra.y).multiplyScalar(-t/Ra.z),Ra.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ra.x,Ra.y).multiplyScalar(-t/Ra.z)}getViewSize(t,n){return this.getViewBounds(t,Jy,tS),n.subVectors(tS,Jy)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Qh*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/h,n-=u.offsetY*a/p,o*=u.width/h,a*=u.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const po=-90,mo=1;class xw extends ai{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Bi(po,mo,t,n);o.layers=this.layers,this.add(o);const c=new Bi(po,mo,t,n);c.layers=this.layers,this.add(c);const u=new Bi(po,mo,t,n);u.layers=this.layers,this.add(u);const d=new Bi(po,mo,t,n);d.layers=this.layers,this.add(d);const h=new Bi(po,mo,t,n);h.layers=this.layers,this.add(h);const p=new Bi(po,mo,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,d,h]=n;for(const p of n)this.remove(p);if(t===kr)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===pf)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,h,p,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,u),t.setRenderTarget(a,2,o),t.render(n,d),t.setRenderTarget(a,3,o),t.render(n,h),t.setRenderTarget(a,4,o),t.render(n,p),a.texture.generateMipmaps=E,t.setRenderTarget(a,5,o),t.render(n,g),t.setRenderTarget(v,_,x),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class ib extends ri{constructor(t=[],n=To,a,o,c,u,d,h,p,g){super(t,n,a,o,c,u,d,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bw extends ys{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new ib(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:fr}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new sc(5,5,5),c=new $r({name:"CubemapFromEquirect",uniforms:Co(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ii,blending:La});c.uniforms.tEquirect.value=n;const u=new Xr(o,c),d=n.minFilter;return n.minFilter===ps&&(n.minFilter=fr),new xw(1,10,this).update(t,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}class Iu extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mw={type:"move"};class yp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Iu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Iu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Iu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const d=this._targetRay,h=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const E of t.hand.values()){const b=n.getJointPose(E,a),S=this._getHandJoint(p,E);b!==null&&(S.matrix.fromArray(b.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=b.radius),S.visible=b!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,M=.005;p.inputState.pinching&&_>x+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=x-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Mw)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Iu;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class Ew extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jr,this.environmentIntensity=1,this.environmentRotation=new jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Sp=new ut,Tw=new ut,Aw=new ge;class ls{constructor(t=new ut(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Sp.subVectors(a,n).cross(Tw.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Sp),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||Aw.getNormalMatrix(t),o=this.coplanarPoint(Sp).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new Df,zu=new ut;class rb{constructor(t=new ls,n=new ls,a=new ls,o=new ls,c=new ls,u=new ls){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const d=this.planes;return d[0].copy(t),d[1].copy(n),d[2].copy(a),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=kr){const a=this.planes,o=t.elements,c=o[0],u=o[1],d=o[2],h=o[3],p=o[4],g=o[5],v=o[6],_=o[7],x=o[8],M=o[9],E=o[10],b=o[11],S=o[12],O=o[13],U=o[14],R=o[15];if(a[0].setComponents(h-c,_-p,b-x,R-S).normalize(),a[1].setComponents(h+c,_+p,b+x,R+S).normalize(),a[2].setComponents(h+u,_+g,b+M,R+O).normalize(),a[3].setComponents(h-u,_-g,b-M,R-O).normalize(),a[4].setComponents(h-d,_-v,b-E,R-U).normalize(),n===kr)a[5].setComponents(h+d,_+v,b+E,R+U).normalize();else if(n===pf)a[5].setComponents(d,v,E,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(zu.x=o.normal.x>0?t.max.x:t.min.x,zu.y=o.normal.y>0?t.max.y:t.min.y,zu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(zu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rw extends ac{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const eS=new _n,Tm=new $x,Fu=new Df,Hu=new ut;class Cw extends ai{constructor(t=new Kr,n=new Rw){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Fu.copy(a.boundingSphere),Fu.applyMatrix4(o),Fu.radius+=c,t.ray.intersectsSphere(Fu)===!1)return;eS.copy(o).invert(),Tm.copy(t.ray).applyMatrix4(eS);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,p=a.index,v=a.attributes.position;if(p!==null){const _=Math.max(0,u.start),x=Math.min(p.count,u.start+u.count);for(let M=_,E=x;M<E;M++){const b=p.getX(M);Hu.fromBufferAttribute(v,b),nS(Hu,b,h,o,t,n,this)}}else{const _=Math.max(0,u.start),x=Math.min(v.count,u.start+u.count);for(let M=_,E=x;M<E;M++)Hu.fromBufferAttribute(v,M),nS(Hu,M,h,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function nS(i,t,n,a,o,c,u){const d=Tm.distanceSqToPoint(i);if(d<n){const h=new ut;Tm.closestPointToPoint(i,h),h.applyMatrix4(a);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class ab extends ri{constructor(t,n,a=_s,o,c,u,d=$i,h=$i,p,g=Wl){if(g!==Wl&&g!==ql)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,c,u,d,h,g,a,p),this.isDepthTexture=!0,this.image={width:t,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sg(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Uf extends Kr{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,d=Math.floor(a),h=Math.floor(o),p=d+1,g=h+1,v=t/d,_=n/h,x=[],M=[],E=[],b=[];for(let S=0;S<g;S++){const O=S*_-u;for(let U=0;U<p;U++){const R=U*v-c;M.push(R,-O,0),E.push(0,0,1),b.push(U/d),b.push(1-S/h)}}for(let S=0;S<h;S++)for(let O=0;O<d;O++){const U=O+p*S,R=O+p*(S+1),D=O+1+p*(S+1),z=O+1+p*S;x.push(U,R,z),x.push(R,D,z)}this.setIndex(x),this.setAttribute("position",new gs(M,3)),this.setAttribute("normal",new gs(E,3)),this.setAttribute("uv",new gs(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uf(t.width,t.height,t.widthSegments,t.heightSegments)}}class ww extends ac{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dw extends ac{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Uw extends nb{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,d=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=g*this.view.offsetY,h=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Lw extends Bi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class iS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rS(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=rS();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function rS(){return performance.now()}function aS(i,t,n,a){const o=Nw(a);switch(n){case Fx:return i*t;case Gx:return i*t;case Vx:return i*t*2;case kx:return i*t/o.components*o.byteLength;case ig:return i*t/o.components*o.byteLength;case Xx:return i*t*2/o.components*o.byteLength;case rg:return i*t*2/o.components*o.byteLength;case Hx:return i*t*3/o.components*o.byteLength;case ji:return i*t*4/o.components*o.byteLength;case ag:return i*t*4/o.components*o.byteLength;case Ku:case Zu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qu:case Ju:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jp:case em:return Math.max(i,16)*Math.max(t,8)/4;case Qp:case tm:return Math.max(i,8)*Math.max(t,8)/2;case nm:case im:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rm:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case am:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sm:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case om:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case lm:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case cm:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case um:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fm:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case dm:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case hm:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case pm:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case mm:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case gm:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case vm:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _m:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case tf:case ym:case Sm:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wx:case xm:return Math.ceil(i/4)*Math.ceil(t/4)*8;case bm:case Mm:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Nw(i){switch(i){case Yr:case Bx:return{byteLength:1,components:1};case kl:case Ix:case ec:return{byteLength:2,components:1};case eg:case ng:return{byteLength:2,components:4};case _s:case tg:case Vr:return{byteLength:4,components:1};case zx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sb(){let i=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){i=c}}}function Ow(i){const t=new WeakMap;function n(d,h){const p=d.array,g=d.usage,v=p.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,p,g),d.onUploadCallback();let x;if(p instanceof Float32Array)x=i.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=i.SHORT;else if(p instanceof Uint32Array)x=i.UNSIGNED_INT;else if(p instanceof Int32Array)x=i.INT;else if(p instanceof Int8Array)x=i.BYTE;else if(p instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function a(d,h,p){const g=h.array,v=h.updateRanges;if(i.bindBuffer(p,d),v.length===0)i.bufferSubData(p,0,g);else{v.sort((x,M)=>x.start-M.start);let _=0;for(let x=1;x<v.length;x++){const M=v[_],E=v[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,v[_]=E)}v.length=_+1;for(let x=0,M=v.length;x<M;x++){const E=v[x];i.bufferSubData(p,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=t.get(d);h&&(i.deleteBuffer(h.buffer),t.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,n(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,h),p.version=d.version}}return{get:o,remove:c,update:u}}var Pw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Iw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ww=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$w=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,i3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,r3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,a3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,s3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,o3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f3="gl_FragColor = linearToOutputTexel( gl_FragColor );",d3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,h3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,p3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,g3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,M3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,R3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,C3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,N3=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,O3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,P3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,B3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I3=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z3=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F3=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H3=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,X3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Z3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,J3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_D=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ED=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,DD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ND=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ID=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,GD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,VD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,XD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$D=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,JD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tU=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eU=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nU=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iU=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rU=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aU=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sU=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oU=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lU=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uU=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fU=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dU=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ve={alphahash_fragment:Pw,alphahash_pars_fragment:Bw,alphamap_fragment:Iw,alphamap_pars_fragment:zw,alphatest_fragment:Fw,alphatest_pars_fragment:Hw,aomap_fragment:Gw,aomap_pars_fragment:Vw,batching_pars_vertex:kw,batching_vertex:Xw,begin_vertex:Ww,beginnormal_vertex:qw,bsdfs:Yw,iridescence_fragment:jw,bumpmap_pars_fragment:$w,clipping_planes_fragment:Kw,clipping_planes_pars_fragment:Zw,clipping_planes_pars_vertex:Qw,clipping_planes_vertex:Jw,color_fragment:t3,color_pars_fragment:e3,color_pars_vertex:n3,color_vertex:i3,common:r3,cube_uv_reflection_fragment:a3,defaultnormal_vertex:s3,displacementmap_pars_vertex:o3,displacementmap_vertex:l3,emissivemap_fragment:c3,emissivemap_pars_fragment:u3,colorspace_fragment:f3,colorspace_pars_fragment:d3,envmap_fragment:h3,envmap_common_pars_fragment:p3,envmap_pars_fragment:m3,envmap_pars_vertex:g3,envmap_physical_pars_fragment:R3,envmap_vertex:v3,fog_vertex:_3,fog_pars_vertex:y3,fog_fragment:S3,fog_pars_fragment:x3,gradientmap_pars_fragment:b3,lightmap_pars_fragment:M3,lights_lambert_fragment:E3,lights_lambert_pars_fragment:T3,lights_pars_begin:A3,lights_toon_fragment:C3,lights_toon_pars_fragment:w3,lights_phong_fragment:D3,lights_phong_pars_fragment:U3,lights_physical_fragment:L3,lights_physical_pars_fragment:N3,lights_fragment_begin:O3,lights_fragment_maps:P3,lights_fragment_end:B3,logdepthbuf_fragment:I3,logdepthbuf_pars_fragment:z3,logdepthbuf_pars_vertex:F3,logdepthbuf_vertex:H3,map_fragment:G3,map_pars_fragment:V3,map_particle_fragment:k3,map_particle_pars_fragment:X3,metalnessmap_fragment:W3,metalnessmap_pars_fragment:q3,morphinstance_vertex:Y3,morphcolor_vertex:j3,morphnormal_vertex:$3,morphtarget_pars_vertex:K3,morphtarget_vertex:Z3,normal_fragment_begin:Q3,normal_fragment_maps:J3,normal_pars_fragment:tD,normal_pars_vertex:eD,normal_vertex:nD,normalmap_pars_fragment:iD,clearcoat_normal_fragment_begin:rD,clearcoat_normal_fragment_maps:aD,clearcoat_pars_fragment:sD,iridescence_pars_fragment:oD,opaque_fragment:lD,packing:cD,premultiplied_alpha_fragment:uD,project_vertex:fD,dithering_fragment:dD,dithering_pars_fragment:hD,roughnessmap_fragment:pD,roughnessmap_pars_fragment:mD,shadowmap_pars_fragment:gD,shadowmap_pars_vertex:vD,shadowmap_vertex:_D,shadowmask_pars_fragment:yD,skinbase_vertex:SD,skinning_pars_vertex:xD,skinning_vertex:bD,skinnormal_vertex:MD,specularmap_fragment:ED,specularmap_pars_fragment:TD,tonemapping_fragment:AD,tonemapping_pars_fragment:RD,transmission_fragment:CD,transmission_pars_fragment:wD,uv_pars_fragment:DD,uv_pars_vertex:UD,uv_vertex:LD,worldpos_vertex:ND,background_vert:OD,background_frag:PD,backgroundCube_vert:BD,backgroundCube_frag:ID,cube_vert:zD,cube_frag:FD,depth_vert:HD,depth_frag:GD,distanceRGBA_vert:VD,distanceRGBA_frag:kD,equirect_vert:XD,equirect_frag:WD,linedashed_vert:qD,linedashed_frag:YD,meshbasic_vert:jD,meshbasic_frag:$D,meshlambert_vert:KD,meshlambert_frag:ZD,meshmatcap_vert:QD,meshmatcap_frag:JD,meshnormal_vert:tU,meshnormal_frag:eU,meshphong_vert:nU,meshphong_frag:iU,meshphysical_vert:rU,meshphysical_frag:aU,meshtoon_vert:sU,meshtoon_frag:oU,points_vert:lU,points_frag:cU,shadow_vert:uU,shadow_frag:fU,sprite_vert:dU,sprite_frag:hU},Gt={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},cr={basic:{uniforms:Zn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Zn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new He(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Zn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Zn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Zn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new He(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Zn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Zn([Gt.points,Gt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Zn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Zn([Gt.common,Gt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Zn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Zn([Gt.sprite,Gt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Zn([Gt.common,Gt.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Zn([Gt.lights,Gt.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};cr.physical={uniforms:Zn([cr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Gu={r:0,b:0,g:0},as=new jr,pU=new _n;function mU(i,t,n,a,o,c,u){const d=new He(0);let h=c===!0?0:1,p,g,v=null,_=0,x=null;function M(U){let R=U.isScene===!0?U.background:null;return R&&R.isTexture&&(R=(U.backgroundBlurriness>0?n:t).get(R)),R}function E(U){let R=!1;const D=M(U);D===null?S(d,h):D&&D.isColor&&(S(D,1),R=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?a.buffers.color.setClear(0,0,0,1,u):z==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(i.autoClear||R)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(U,R){const D=M(R);D&&(D.isCubeTexture||D.mapping===wf)?(g===void 0&&(g=new Xr(new sc(1,1,1),new $r({name:"BackgroundCubeMaterial",uniforms:Co(cr.backgroundCube.uniforms),vertexShader:cr.backgroundCube.vertexShader,fragmentShader:cr.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,I,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),as.copy(R.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(pU.makeRotationFromEuler(as)),g.material.toneMapped=Oe.getTransfer(D.colorSpace)!==je,(v!==D||_!==D.version||x!==i.toneMapping)&&(g.material.needsUpdate=!0,v=D,_=D.version,x=i.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new Xr(new Uf(2,2),new $r({name:"BackgroundMaterial",uniforms:Co(cr.background.uniforms),vertexShader:cr.background.vertexShader,fragmentShader:cr.background.fragmentShader,side:Ba,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Oe.getTransfer(D.colorSpace)!==je,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(v!==D||_!==D.version||x!==i.toneMapping)&&(p.material.needsUpdate=!0,v=D,_=D.version,x=i.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function S(U,R){U.getRGB(Gu,eb(i)),a.buffers.color.setClear(Gu.r,Gu.g,Gu.b,R,u)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,R=1){d.set(U),h=R,S(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(U){h=U,S(d,h)},render:E,addToRenderList:b,dispose:O}}function gU(i,t){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),a={},o=_(null);let c=o,u=!1;function d(y,N,j,q,rt){let lt=!1;const F=v(q,j,N);c!==F&&(c=F,p(c.object)),lt=x(y,q,j,rt),lt&&M(y,q,j,rt),rt!==null&&t.update(rt,i.ELEMENT_ARRAY_BUFFER),(lt||u)&&(u=!1,R(y,N,j,q),rt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(rt).buffer))}function h(){return i.createVertexArray()}function p(y){return i.bindVertexArray(y)}function g(y){return i.deleteVertexArray(y)}function v(y,N,j){const q=j.wireframe===!0;let rt=a[y.id];rt===void 0&&(rt={},a[y.id]=rt);let lt=rt[N.id];lt===void 0&&(lt={},rt[N.id]=lt);let F=lt[q];return F===void 0&&(F=_(h()),lt[q]=F),F}function _(y){const N=[],j=[],q=[];for(let rt=0;rt<n;rt++)N[rt]=0,j[rt]=0,q[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:j,attributeDivisors:q,object:y,attributes:{},index:null}}function x(y,N,j,q){const rt=c.attributes,lt=N.attributes;let F=0;const Y=j.getAttributes();for(const X in Y)if(Y[X].location>=0){const P=rt[X];let $=lt[X];if($===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),P===void 0||P.attribute!==$||$&&P.data!==$.data)return!0;F++}return c.attributesNum!==F||c.index!==q}function M(y,N,j,q){const rt={},lt=N.attributes;let F=0;const Y=j.getAttributes();for(const X in Y)if(Y[X].location>=0){let P=lt[X];P===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(P=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(P=y.instanceColor));const $={};$.attribute=P,P&&P.data&&($.data=P.data),rt[X]=$,F++}c.attributes=rt,c.attributesNum=F,c.index=q}function E(){const y=c.newAttributes;for(let N=0,j=y.length;N<j;N++)y[N]=0}function b(y){S(y,0)}function S(y,N){const j=c.newAttributes,q=c.enabledAttributes,rt=c.attributeDivisors;j[y]=1,q[y]===0&&(i.enableVertexAttribArray(y),q[y]=1),rt[y]!==N&&(i.vertexAttribDivisor(y,N),rt[y]=N)}function O(){const y=c.newAttributes,N=c.enabledAttributes;for(let j=0,q=N.length;j<q;j++)N[j]!==y[j]&&(i.disableVertexAttribArray(j),N[j]=0)}function U(y,N,j,q,rt,lt,F){F===!0?i.vertexAttribIPointer(y,N,j,rt,lt):i.vertexAttribPointer(y,N,j,q,rt,lt)}function R(y,N,j,q){E();const rt=q.attributes,lt=j.getAttributes(),F=N.defaultAttributeValues;for(const Y in lt){const X=lt[Y];if(X.location>=0){let ht=rt[Y];if(ht===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){const P=ht.normalized,$=ht.itemSize,pt=t.get(ht);if(pt===void 0)continue;const Mt=pt.buffer,J=pt.type,_t=pt.bytesPerElement,yt=J===i.INT||J===i.UNSIGNED_INT||ht.gpuType===tg;if(ht.isInterleavedBufferAttribute){const Rt=ht.data,Ut=Rt.stride,ue=ht.offset;if(Rt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<X.locationSize;Kt++)S(X.location+Kt,Rt.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Kt=0;Kt<X.locationSize;Kt++)b(X.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let Kt=0;Kt<X.locationSize;Kt++)U(X.location+Kt,$/X.locationSize,J,P,Ut*_t,(ue+$/X.locationSize*Kt)*_t,yt)}else{if(ht.isInstancedBufferAttribute){for(let Rt=0;Rt<X.locationSize;Rt++)S(X.location+Rt,ht.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Rt=0;Rt<X.locationSize;Rt++)b(X.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let Rt=0;Rt<X.locationSize;Rt++)U(X.location+Rt,$/X.locationSize,J,P,$*_t,$/X.locationSize*Rt*_t,yt)}}else if(F!==void 0){const P=F[Y];if(P!==void 0)switch(P.length){case 2:i.vertexAttrib2fv(X.location,P);break;case 3:i.vertexAttrib3fv(X.location,P);break;case 4:i.vertexAttrib4fv(X.location,P);break;default:i.vertexAttrib1fv(X.location,P)}}}}O()}function D(){H();for(const y in a){const N=a[y];for(const j in N){const q=N[j];for(const rt in q)g(q[rt].object),delete q[rt];delete N[j]}delete a[y]}}function z(y){if(a[y.id]===void 0)return;const N=a[y.id];for(const j in N){const q=N[j];for(const rt in q)g(q[rt].object),delete q[rt];delete N[j]}delete a[y.id]}function I(y){for(const N in a){const j=a[N];if(j[y.id]===void 0)continue;const q=j[y.id];for(const rt in q)g(q[rt].object),delete q[rt];delete j[y.id]}}function H(){w(),u=!0,c!==o&&(c=o,p(c.object))}function w(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:H,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:z,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:b,disableUnusedAttributes:O}}function vU(i,t,n){let a;function o(p){a=p}function c(p,g){i.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,v){v!==0&&(i.drawArraysInstanced(a,p,g,v),n.update(g,a,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,v);let x=0;for(let M=0;M<v;M++)x+=g[M];n.update(x,a,1)}function h(p,g,v,_){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<p.length;M++)u(p[M],g[M],_[M]);else{x.multiDrawArraysInstancedWEBGL(a,p,0,g,0,_,0,v);let M=0;for(let E=0;E<v;E++)M+=g[E]*_[E];n.update(M,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function _U(i,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(I){return!(I!==ji&&a.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const H=I===ec&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Yr&&a.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Vr&&!H)}function h(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),O=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),U=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=M>0,z=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:b,maxAttributes:S,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:R,vertexTextures:D,maxSamples:z}}function yU(i){const t=this;let n=null,a=0,o=!1,c=!1;const u=new ls,d=new ge,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||a!==0||o;return o=_,a=v.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,x){const M=v.clippingPlanes,E=v.clipIntersection,b=v.clipShadows,S=i.get(v);if(!o||M===null||M.length===0||c&&!b)c?g(null):p();else{const O=c?0:a,U=O*4;let R=S.clippingState||null;h.value=R,R=g(M,_,U,x);for(let D=0;D!==U;++D)R[D]=n[D];S.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=O}};function p(){h.value!==n&&(h.value=n,h.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(v,_,x,M){const E=v!==null?v.length:0;let b=null;if(E!==0){if(b=h.value,M!==!0||b===null){const S=x+E*4,O=_.matrixWorldInverse;d.getNormalMatrix(O),(b===null||b.length<S)&&(b=new Float32Array(S));for(let U=0,R=x;U!==E;++U,R+=4)u.copy(v[U]).applyMatrix4(O,d),u.normal.toArray(b,R),b[R+3]=u.constant}h.value=b,h.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,b}}function SU(i){let t=new WeakMap;function n(u,d){return d===jp?u.mapping=To:d===$p&&(u.mapping=Ao),u}function a(u){if(u&&u.isTexture){const d=u.mapping;if(d===jp||d===$p)if(t.has(u)){const h=t.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new bw(h.height);return p.fromEquirectangularTexture(i,u),t.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const h=t.get(d);h!==void 0&&(t.delete(d),h.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const vo=4,sS=[.125,.215,.35,.446,.526,.582],fs=20,xp=new Uw,oS=new He;let bp=null,Mp=0,Ep=0,Tp=!1;const cs=(1+Math.sqrt(5))/2,go=1/cs,lS=[new ut(-cs,go,0),new ut(cs,go,0),new ut(-go,0,cs),new ut(go,0,cs),new ut(0,cs,-go),new ut(0,cs,go),new ut(-1,1,-1),new ut(1,1,-1),new ut(-1,1,1),new ut(1,1,1)],xU=new ut;class cS{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:d=xU}=c;bp=this._renderer.getRenderTarget(),Mp=this._renderer.getActiveCubeFace(),Ep=this._renderer.getActiveMipmapLevel(),Tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,a,o,h,d),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bp,Mp,Ep),this._renderer.xr.enabled=Tp,t.scissorTest=!1,Vu(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===To||t.mapping===Ao?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bp=this._renderer.getRenderTarget(),Mp=this._renderer.getActiveCubeFace(),Ep=this._renderer.getActiveMipmapLevel(),Tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:fr,minFilter:fr,generateMipmaps:!1,type:ec,format:ji,colorSpace:Ro,depthBuffer:!1},o=uS(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uS(t,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bU(c)),this._blurMaterial=MU(c,t,n)}return o}_compileMaterial(t){const n=new Xr(this._lodPlanes[0],t);this._renderer.compile(n,xp)}_sceneToCubeUV(t,n,a,o,c){const h=new Bi(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(oS),v.toneMapping=Na,v.autoClear=!1;const M=new Qx({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1}),E=new Xr(new sc,M);let b=!1;const S=t.background;S?S.isColor&&(M.color.copy(S),t.background=null,b=!0):(M.color.copy(oS),b=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(h.up.set(0,p[O],0),h.position.set(c.x,c.y,c.z),h.lookAt(c.x+g[O],c.y,c.z)):U===1?(h.up.set(0,0,p[O]),h.position.set(c.x,c.y,c.z),h.lookAt(c.x,c.y+g[O],c.z)):(h.up.set(0,p[O],0),h.position.set(c.x,c.y,c.z),h.lookAt(c.x,c.y,c.z+g[O]));const R=this._cubeSize;Vu(o,U*R,O>2?R:0,R,R),v.setRenderTarget(o),b&&v.render(E,h),v.render(t,h)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=x,v.autoClear=_,t.background=S}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===To||t.mapping===Ao;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=dS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fS());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new Xr(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const h=this._cubeSize;Vu(n,0,0,3*h,2*h),a.setRenderTarget(n),a.render(u,xp)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=lS[(o-c-1)%lS.length];this._blur(t,c-1,c,u,d)}n.autoClear=a}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,d){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Xr(this._lodPlanes[o],p),_=p.uniforms,x=this._sizeLods[a]-1,M=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*fs-1),E=c/M,b=isFinite(c)?1+Math.floor(g*E):fs;b>fs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${fs}`);const S=[];let O=0;for(let I=0;I<fs;++I){const H=I/E,w=Math.exp(-H*H/2);S.push(w),I===0?O+=w:I<b&&(O+=2*w)}for(let I=0;I<S.length;I++)S[I]=S[I]/O;_.envMap.value=t.texture,_.samples.value=b,_.weights.value=S,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:U}=this;_.dTheta.value=M,_.mipInt.value=U-a;const R=this._sizeLods[o],D=3*R*(o>U-vo?o-U+vo:0),z=4*(this._cubeSize-R);Vu(n,D,z,3*R,2*R),h.setRenderTarget(n),h.render(v,xp)}}function bU(i){const t=[],n=[],a=[];let o=i;const c=i-vo+1+sS.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);n.push(d);let h=1/d;u>i-vo?h=sS[u-i+vo-1]:u===0&&(h=0),a.push(h);const p=1/(d-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,M=6,E=3,b=2,S=1,O=new Float32Array(E*M*x),U=new Float32Array(b*M*x),R=new Float32Array(S*M*x);for(let z=0;z<x;z++){const I=z%3*2/3-1,H=z>2?0:-1,w=[I,H,0,I+2/3,H,0,I+2/3,H+1,0,I,H,0,I+2/3,H+1,0,I,H+1,0];O.set(w,E*M*z),U.set(_,b*M*z);const y=[z,z,z,z,z,z];R.set(y,S*M*z)}const D=new Kr;D.setAttribute("position",new Si(O,E)),D.setAttribute("uv",new Si(U,b)),D.setAttribute("faceIndex",new Si(R,S)),t.push(D),o>vo&&o--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function uS(i,t,n){const a=new ys(i,t,n);return a.texture.mapping=wf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Vu(i,t,n,a,o){i.viewport.set(t,n,a,o),i.scissor.set(t,n,a,o)}function MU(i,t,n){const a=new Float32Array(fs),o=new ut(0,1,0);return new $r({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:og(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function fS(){return new $r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:og(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function dS(){return new $r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:og(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function og(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function EU(i){let t=new WeakMap,n=null;function a(d){if(d&&d.isTexture){const h=d.mapping,p=h===jp||h===$p,g=h===To||h===Ao;if(p||g){let v=t.get(d);const _=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new cS(i)),v=p?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const x=d.image;return p&&x&&x.height>0||g&&x&&o(x)?(n===null&&(n=new cS(i)),v=p?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function o(d){let h=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&h++;return h===p}function c(d){const h=d.target;h.removeEventListener("dispose",c);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function TU(i){const t={};function n(a){if(t[a]!==void 0)return t[a];let o;switch(a){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(a)}return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&ef("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function AU(i,t,n,a){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const M in _.attributes)t.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete o[_.id];const x=c.get(_);x&&(t.remove(x),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function d(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function h(v){const _=v.attributes;for(const x in _)t.update(_[x],i.ARRAY_BUFFER)}function p(v){const _=[],x=v.index,M=v.attributes.position;let E=0;if(x!==null){const O=x.array;E=x.version;for(let U=0,R=O.length;U<R;U+=3){const D=O[U+0],z=O[U+1],I=O[U+2];_.push(D,z,z,I,I,D)}}else if(M!==void 0){const O=M.array;E=M.version;for(let U=0,R=O.length/3-1;U<R;U+=3){const D=U+0,z=U+1,I=U+2;_.push(D,z,z,I,I,D)}}else return;const b=new(Yx(_)?tb:Jx)(_,1);b.version=E;const S=c.get(v);S&&t.remove(S),c.set(v,b)}function g(v){const _=c.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:h,getWireframeAttribute:g}}function RU(i,t,n){let a;function o(_){a=_}let c,u;function d(_){c=_.type,u=_.bytesPerElement}function h(_,x){i.drawElements(a,x,c,_*u),n.update(x,a,1)}function p(_,x,M){M!==0&&(i.drawElementsInstanced(a,x,c,_*u,M),n.update(x,a,M))}function g(_,x,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,c,_,0,M);let b=0;for(let S=0;S<M;S++)b+=x[S];n.update(b,a,1)}function v(_,x,M,E){if(M===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let S=0;S<_.length;S++)p(_[S]/u,x[S],E[S]);else{b.multiDrawElementsInstancedWEBGL(a,x,0,c,_,0,E,0,M);let S=0;for(let O=0;O<M;O++)S+=x[O]*E[O];n.update(S,a,1)}}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function CU(i){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,d){switch(n.calls++,u){case i.TRIANGLES:n.triangles+=d*(c/3);break;case i.LINES:n.lines+=d*(c/2);break;case i.LINE_STRIP:n.lines+=d*(c-1);break;case i.LINE_LOOP:n.lines+=d*c;break;case i.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function wU(i,t,n){const a=new WeakMap,o=new vn;function c(u,d,h){const p=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(d);if(_===void 0||_.count!==v){let y=function(){H.dispose(),a.delete(d),d.removeEventListener("dispose",y)};var x=y;_!==void 0&&_.texture.dispose();const M=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let R=0;M===!0&&(R=1),E===!0&&(R=2),b===!0&&(R=3);let D=d.attributes.position.count*R,z=1;D>t.maxTextureSize&&(z=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const I=new Float32Array(D*z*4*v),H=new jx(I,D,z,v);H.type=Vr,H.needsUpdate=!0;const w=R*4;for(let N=0;N<v;N++){const j=S[N],q=O[N],rt=U[N],lt=D*z*4*N;for(let F=0;F<j.count;F++){const Y=F*w;M===!0&&(o.fromBufferAttribute(j,F),I[lt+Y+0]=o.x,I[lt+Y+1]=o.y,I[lt+Y+2]=o.z,I[lt+Y+3]=0),E===!0&&(o.fromBufferAttribute(q,F),I[lt+Y+4]=o.x,I[lt+Y+5]=o.y,I[lt+Y+6]=o.z,I[lt+Y+7]=0),b===!0&&(o.fromBufferAttribute(rt,F),I[lt+Y+8]=o.x,I[lt+Y+9]=o.y,I[lt+Y+10]=o.z,I[lt+Y+11]=rt.itemSize===4?o.w:1)}}_={count:v,texture:H,size:new Ke(D,z)},a.set(d,_),d.addEventListener("dispose",y)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",u.morphTexture,n);else{let M=0;for(let b=0;b<p.length;b++)M+=p[b];const E=d.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",E),h.getUniforms().setValue(i,"morphTargetInfluences",p)}h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,n),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:c}}function DU(i,t,n,a){let o=new WeakMap;function c(h){const p=a.render.frame,g=h.geometry,v=t.get(h,g);if(o.get(v)!==p&&(t.update(v),o.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==p&&(n.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,i.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return v}function u(){o=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const ob=new ri,hS=new ab(1,1),lb=new jx,cb=new aw,ub=new ib,pS=[],mS=[],gS=new Float32Array(16),vS=new Float32Array(9),_S=new Float32Array(4);function Lo(i,t,n){const a=i[0];if(a<=0||a>0)return i;const o=t*n;let c=pS[o];if(c===void 0&&(c=new Float32Array(o),pS[o]=c),t!==0){a.toArray(c,0);for(let u=1,d=0;u!==t;++u)d+=n,i[u].toArray(c,d)}return c}function Cn(i,t){if(i.length!==t.length)return!1;for(let n=0,a=i.length;n<a;n++)if(i[n]!==t[n])return!1;return!0}function wn(i,t){for(let n=0,a=t.length;n<a;n++)i[n]=t[n]}function Lf(i,t){let n=mS[t];n===void 0&&(n=new Int32Array(t),mS[t]=n);for(let a=0;a!==t;++a)n[a]=i.allocateTextureUnit();return n}function UU(i,t){const n=this.cache;n[0]!==t&&(i.uniform1f(this.addr,t),n[0]=t)}function LU(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Cn(n,t))return;i.uniform2fv(this.addr,t),wn(n,t)}}function NU(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Cn(n,t))return;i.uniform3fv(this.addr,t),wn(n,t)}}function OU(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Cn(n,t))return;i.uniform4fv(this.addr,t),wn(n,t)}}function PU(i,t){const n=this.cache,a=t.elements;if(a===void 0){if(Cn(n,t))return;i.uniformMatrix2fv(this.addr,!1,t),wn(n,t)}else{if(Cn(n,a))return;_S.set(a),i.uniformMatrix2fv(this.addr,!1,_S),wn(n,a)}}function BU(i,t){const n=this.cache,a=t.elements;if(a===void 0){if(Cn(n,t))return;i.uniformMatrix3fv(this.addr,!1,t),wn(n,t)}else{if(Cn(n,a))return;vS.set(a),i.uniformMatrix3fv(this.addr,!1,vS),wn(n,a)}}function IU(i,t){const n=this.cache,a=t.elements;if(a===void 0){if(Cn(n,t))return;i.uniformMatrix4fv(this.addr,!1,t),wn(n,t)}else{if(Cn(n,a))return;gS.set(a),i.uniformMatrix4fv(this.addr,!1,gS),wn(n,a)}}function zU(i,t){const n=this.cache;n[0]!==t&&(i.uniform1i(this.addr,t),n[0]=t)}function FU(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Cn(n,t))return;i.uniform2iv(this.addr,t),wn(n,t)}}function HU(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Cn(n,t))return;i.uniform3iv(this.addr,t),wn(n,t)}}function GU(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Cn(n,t))return;i.uniform4iv(this.addr,t),wn(n,t)}}function VU(i,t){const n=this.cache;n[0]!==t&&(i.uniform1ui(this.addr,t),n[0]=t)}function kU(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Cn(n,t))return;i.uniform2uiv(this.addr,t),wn(n,t)}}function XU(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Cn(n,t))return;i.uniform3uiv(this.addr,t),wn(n,t)}}function WU(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Cn(n,t))return;i.uniform4uiv(this.addr,t),wn(n,t)}}function qU(i,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(i.uniform1i(this.addr,o),a[0]=o);let c;this.type===i.SAMPLER_2D_SHADOW?(hS.compareFunction=qx,c=hS):c=ob,n.setTexture2D(t||c,o)}function YU(i,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(i.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||cb,o)}function jU(i,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(i.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||ub,o)}function $U(i,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(i.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||lb,o)}function KU(i){switch(i){case 5126:return UU;case 35664:return LU;case 35665:return NU;case 35666:return OU;case 35674:return PU;case 35675:return BU;case 35676:return IU;case 5124:case 35670:return zU;case 35667:case 35671:return FU;case 35668:case 35672:return HU;case 35669:case 35673:return GU;case 5125:return VU;case 36294:return kU;case 36295:return XU;case 36296:return WU;case 35678:case 36198:case 36298:case 36306:case 35682:return qU;case 35679:case 36299:case 36307:return YU;case 35680:case 36300:case 36308:case 36293:return jU;case 36289:case 36303:case 36311:case 36292:return $U}}function ZU(i,t){i.uniform1fv(this.addr,t)}function QU(i,t){const n=Lo(t,this.size,2);i.uniform2fv(this.addr,n)}function JU(i,t){const n=Lo(t,this.size,3);i.uniform3fv(this.addr,n)}function tL(i,t){const n=Lo(t,this.size,4);i.uniform4fv(this.addr,n)}function eL(i,t){const n=Lo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,n)}function nL(i,t){const n=Lo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,n)}function iL(i,t){const n=Lo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,n)}function rL(i,t){i.uniform1iv(this.addr,t)}function aL(i,t){i.uniform2iv(this.addr,t)}function sL(i,t){i.uniform3iv(this.addr,t)}function oL(i,t){i.uniform4iv(this.addr,t)}function lL(i,t){i.uniform1uiv(this.addr,t)}function cL(i,t){i.uniform2uiv(this.addr,t)}function uL(i,t){i.uniform3uiv(this.addr,t)}function fL(i,t){i.uniform4uiv(this.addr,t)}function dL(i,t,n){const a=this.cache,o=t.length,c=Lf(n,o);Cn(a,c)||(i.uniform1iv(this.addr,c),wn(a,c));for(let u=0;u!==o;++u)n.setTexture2D(t[u]||ob,c[u])}function hL(i,t,n){const a=this.cache,o=t.length,c=Lf(n,o);Cn(a,c)||(i.uniform1iv(this.addr,c),wn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||cb,c[u])}function pL(i,t,n){const a=this.cache,o=t.length,c=Lf(n,o);Cn(a,c)||(i.uniform1iv(this.addr,c),wn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||ub,c[u])}function mL(i,t,n){const a=this.cache,o=t.length,c=Lf(n,o);Cn(a,c)||(i.uniform1iv(this.addr,c),wn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||lb,c[u])}function gL(i){switch(i){case 5126:return ZU;case 35664:return QU;case 35665:return JU;case 35666:return tL;case 35674:return eL;case 35675:return nL;case 35676:return iL;case 5124:case 35670:return rL;case 35667:case 35671:return aL;case 35668:case 35672:return sL;case 35669:case 35673:return oL;case 5125:return lL;case 36294:return cL;case 36295:return uL;case 36296:return fL;case 35678:case 36198:case 36298:case 36306:case 35682:return dL;case 35679:case 36299:case 36307:return hL;case 35680:case 36300:case 36308:case 36293:return pL;case 36289:case 36303:case 36311:case 36292:return mL}}class vL{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=KU(n.type)}}class _L{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gL(n.type)}}class yL{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(t,n[d.id],a)}}}const Ap=/(\w+)(\])?(\[|\.)?/g;function yS(i,t){i.seq.push(t),i.map[t.id]=t}function SL(i,t,n){const a=i.name,o=a.length;for(Ap.lastIndex=0;;){const c=Ap.exec(a),u=Ap.lastIndex;let d=c[1];const h=c[2]==="]",p=c[3];if(h&&(d=d|0),p===void 0||p==="["&&u+2===o){yS(n,p===void 0?new vL(d,i,t):new _L(d,i,t));break}else{let v=n.map[d];v===void 0&&(v=new yL(d),yS(n,v)),n=v}}}class nf{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(n,o),u=t.getUniformLocation(n,c.name);SL(c,u,this)}}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],h=a[d.id];h.needsUpdate!==!1&&d.setValue(t,h.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function SS(i,t,n){const a=i.createShader(t);return i.shaderSource(a,n),i.compileShader(a),a}const xL=37297;let bL=0;function ML(i,t){const n=i.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const d=u+1;a.push(`${d===t?">":" "} ${d}: ${n[u]}`)}return a.join(`
`)}const xS=new ge;function EL(i){Oe._getMatrix(xS,Oe.workingColorSpace,i);const t=`mat3( ${xS.elements.map(n=>n.toFixed(4))} )`;switch(Oe.getTransfer(i)){case hf:return[t,"LinearTransferOETF"];case je:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bS(i,t,n){const a=i.getShaderParameter(t,i.COMPILE_STATUS),o=i.getShaderInfoLog(t).trim();if(a&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+ML(i.getShaderSource(t),u)}else return o}function TL(i,t){const n=EL(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function AL(i,t){let n;switch(t){case D2:n="Linear";break;case U2:n="Reinhard";break;case L2:n="Cineon";break;case N2:n="ACESFilmic";break;case P2:n="AgX";break;case B2:n="Neutral";break;case O2:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+i+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ku=new ut;function RL(){Oe.getLuminanceCoefficients(ku);const i=ku.x.toFixed(4),t=ku.y.toFixed(4),n=ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CL(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Il).join(`
`)}function wL(i){const t=[];for(const n in i){const a=i[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function DL(i,t){const n={},a=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=i.getActiveAttrib(t,o),u=c.name;let d=1;c.type===i.FLOAT_MAT2&&(d=2),c.type===i.FLOAT_MAT3&&(d=3),c.type===i.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:i.getAttribLocation(t,u),locationSize:d}}return n}function Il(i){return i!==""}function MS(i,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ES(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const UL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Am(i){return i.replace(UL,NL)}const LL=new Map;function NL(i,t){let n=ve[t];if(n===void 0){const a=LL.get(t);if(a!==void 0)n=ve[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Am(n)}const OL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function TS(i){return i.replace(OL,PL)}function PL(i,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function AS(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function BL(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nx?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===c2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hr&&(t="SHADOWMAP_TYPE_VSM"),t}function IL(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case To:case Ao:t="ENVMAP_TYPE_CUBE";break;case wf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zL(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ao:t="ENVMAP_MODE_REFRACTION";break}return t}function FL(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ox:t="ENVMAP_BLENDING_MULTIPLY";break;case C2:t="ENVMAP_BLENDING_MIX";break;case w2:t="ENVMAP_BLENDING_ADD";break}return t}function HL(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:a,maxMip:n}}function GL(i,t,n,a){const o=i.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const h=BL(n),p=IL(n),g=zL(n),v=FL(n),_=HL(n),x=CL(n),M=wL(c),E=o.createProgram();let b,S,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Il).join(`
`),b.length>0&&(b+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Il).join(`
`),S.length>0&&(S+=`
`)):(b=[AS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Il).join(`
`),S=[AS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Na?"#define TONE_MAPPING":"",n.toneMapping!==Na?ve.tonemapping_pars_fragment:"",n.toneMapping!==Na?AL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,TL("linearToOutputTexel",n.outputColorSpace),RL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Il).join(`
`)),u=Am(u),u=MS(u,n),u=ES(u,n),d=Am(d),d=MS(d,n),d=ES(d,n),u=TS(u),d=TS(d),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,b=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,S=["#define varying in",n.glslVersion===Iy?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Iy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const U=O+b+u,R=O+S+d,D=SS(o,o.VERTEX_SHADER,U),z=SS(o,o.FRAGMENT_SHADER,R);o.attachShader(E,D),o.attachShader(E,z),n.index0AttributeName!==void 0?o.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function I(N){if(i.debug.checkShaderErrors){const j=o.getProgramInfoLog(E).trim(),q=o.getShaderInfoLog(D).trim(),rt=o.getShaderInfoLog(z).trim();let lt=!0,F=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(lt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,E,D,z);else{const Y=bS(o,D,"vertex"),X=bS(o,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+j+`
`+Y+`
`+X)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(q===""||rt==="")&&(F=!1);F&&(N.diagnostics={runnable:lt,programLog:j,vertexShader:{log:q,prefix:b},fragmentShader:{log:rt,prefix:S}})}o.deleteShader(D),o.deleteShader(z),H=new nf(o,E),w=DL(o,E)}let H;this.getUniforms=function(){return H===void 0&&I(this),H};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=o.getProgramParameter(E,xL)),y},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bL++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=z,this}let VL=0;class kL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new XL(t),n.set(t,a)),a}}class XL{constructor(t){this.id=VL++,this.code=t,this.usedTimes=0}}function WL(i,t,n,a,o,c,u){const d=new Kx,h=new kL,p=new Set,g=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let x=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return p.add(w),w===0?"uv":`uv${w}`}function b(w,y,N,j,q){const rt=j.fog,lt=q.geometry,F=w.isMeshStandardMaterial?j.environment:null,Y=(w.isMeshStandardMaterial?n:t).get(w.envMap||F),X=Y&&Y.mapping===wf?Y.image.height:null,ht=M[w.type];w.precision!==null&&(x=o.getMaxPrecision(w.precision),x!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const P=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,$=P!==void 0?P.length:0;let pt=0;lt.morphAttributes.position!==void 0&&(pt=1),lt.morphAttributes.normal!==void 0&&(pt=2),lt.morphAttributes.color!==void 0&&(pt=3);let Mt,J,_t,yt;if(ht){const Ce=cr[ht];Mt=Ce.vertexShader,J=Ce.fragmentShader}else Mt=w.vertexShader,J=w.fragmentShader,h.update(w),_t=h.getVertexShaderID(w),yt=h.getFragmentShaderID(w);const Rt=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),ue=q.isInstancedMesh===!0,Kt=q.isBatchedMesh===!0,Ue=!!w.map,Ee=!!w.matcap,de=!!Y,V=!!w.aoMap,pn=!!w.lightMap,he=!!w.bumpMap,$t=!!w.normalMap,Vt=!!w.displacementMap,ae=!!w.emissiveMap,Xt=!!w.metalnessMap,B=!!w.roughnessMap,A=w.anisotropy>0,nt=w.clearcoat>0,bt=w.dispersion>0,At=w.iridescence>0,gt=w.sheen>0,Ft=w.transmission>0,wt=A&&!!w.anisotropyMap,Dt=nt&&!!w.clearcoatMap,ee=nt&&!!w.clearcoatNormalMap,Et=nt&&!!w.clearcoatRoughnessMap,Pt=At&&!!w.iridescenceMap,qt=At&&!!w.iridescenceThicknessMap,Yt=gt&&!!w.sheenColorMap,Nt=gt&&!!w.sheenRoughnessMap,pe=!!w.specularMap,oe=!!w.specularColorMap,Pe=!!w.specularIntensityMap,W=Ft&&!!w.transmissionMap,Bt=Ft&&!!w.thicknessMap,ft=!!w.gradientMap,xt=!!w.alphaMap,kt=w.alphaTest>0,It=!!w.alphaHash,fe=!!w.extensions;let ke=Na;w.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(ke=i.toneMapping);const ln={shaderID:ht,shaderType:w.type,shaderName:w.name,vertexShader:Mt,fragmentShader:J,defines:w.defines,customVertexShaderID:_t,customFragmentShaderID:yt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:Kt,batchingColor:Kt&&q._colorsTexture!==null,instancing:ue,instancingColor:ue&&q.instanceColor!==null,instancingMorph:ue&&q.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Rt===null?i.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Ro,alphaToCoverage:!!w.alphaToCoverage,map:Ue,matcap:Ee,envMap:de,envMapMode:de&&Y.mapping,envMapCubeUVHeight:X,aoMap:V,lightMap:pn,bumpMap:he,normalMap:$t,displacementMap:_&&Vt,emissiveMap:ae,normalMapObjectSpace:$t&&w.normalMapType===G2,normalMapTangentSpace:$t&&w.normalMapType===H2,metalnessMap:Xt,roughnessMap:B,anisotropy:A,anisotropyMap:wt,clearcoat:nt,clearcoatMap:Dt,clearcoatNormalMap:ee,clearcoatRoughnessMap:Et,dispersion:bt,iridescence:At,iridescenceMap:Pt,iridescenceThicknessMap:qt,sheen:gt,sheenColorMap:Yt,sheenRoughnessMap:Nt,specularMap:pe,specularColorMap:oe,specularIntensityMap:Pe,transmission:Ft,transmissionMap:W,thicknessMap:Bt,gradientMap:ft,opaque:w.transparent===!1&&w.blending===xo&&w.alphaToCoverage===!1,alphaMap:xt,alphaTest:kt,alphaHash:It,combine:w.combine,mapUv:Ue&&E(w.map.channel),aoMapUv:V&&E(w.aoMap.channel),lightMapUv:pn&&E(w.lightMap.channel),bumpMapUv:he&&E(w.bumpMap.channel),normalMapUv:$t&&E(w.normalMap.channel),displacementMapUv:Vt&&E(w.displacementMap.channel),emissiveMapUv:ae&&E(w.emissiveMap.channel),metalnessMapUv:Xt&&E(w.metalnessMap.channel),roughnessMapUv:B&&E(w.roughnessMap.channel),anisotropyMapUv:wt&&E(w.anisotropyMap.channel),clearcoatMapUv:Dt&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:ee&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&E(w.sheenRoughnessMap.channel),specularMapUv:pe&&E(w.specularMap.channel),specularColorMapUv:oe&&E(w.specularColorMap.channel),specularIntensityMapUv:Pe&&E(w.specularIntensityMap.channel),transmissionMapUv:W&&E(w.transmissionMap.channel),thicknessMapUv:Bt&&E(w.thicknessMap.channel),alphaMapUv:xt&&E(w.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&($t||A),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!lt.attributes.uv&&(Ue||xt),fog:!!rt,useFog:w.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ut,skinning:q.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:pt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ue&&w.map.isVideoTexture===!0&&Oe.getTransfer(w.map.colorSpace)===je,decodeVideoTextureEmissive:ae&&w.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(w.emissiveMap.colorSpace)===je,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Gr,flipSided:w.side===ii,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:fe&&w.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&w.extensions.multiDraw===!0||Kt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ln.vertexUv1s=p.has(1),ln.vertexUv2s=p.has(2),ln.vertexUv3s=p.has(3),p.clear(),ln}function S(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)y.push(N),y.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(O(y,w),U(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function O(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function U(w,y){d.disableAll(),y.supportsVertexTextures&&d.enable(0),y.instancing&&d.enable(1),y.instancingColor&&d.enable(2),y.instancingMorph&&d.enable(3),y.matcap&&d.enable(4),y.envMap&&d.enable(5),y.normalMapObjectSpace&&d.enable(6),y.normalMapTangentSpace&&d.enable(7),y.clearcoat&&d.enable(8),y.iridescence&&d.enable(9),y.alphaTest&&d.enable(10),y.vertexColors&&d.enable(11),y.vertexAlphas&&d.enable(12),y.vertexUv1s&&d.enable(13),y.vertexUv2s&&d.enable(14),y.vertexUv3s&&d.enable(15),y.vertexTangents&&d.enable(16),y.anisotropy&&d.enable(17),y.alphaHash&&d.enable(18),y.batching&&d.enable(19),y.dispersion&&d.enable(20),y.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),y.fog&&d.enable(0),y.useFog&&d.enable(1),y.flatShading&&d.enable(2),y.logarithmicDepthBuffer&&d.enable(3),y.reverseDepthBuffer&&d.enable(4),y.skinning&&d.enable(5),y.morphTargets&&d.enable(6),y.morphNormals&&d.enable(7),y.morphColors&&d.enable(8),y.premultipliedAlpha&&d.enable(9),y.shadowMapEnabled&&d.enable(10),y.doubleSided&&d.enable(11),y.flipSided&&d.enable(12),y.useDepthPacking&&d.enable(13),y.dithering&&d.enable(14),y.transmission&&d.enable(15),y.sheen&&d.enable(16),y.opaque&&d.enable(17),y.pointsUvs&&d.enable(18),y.decodeVideoTexture&&d.enable(19),y.decodeVideoTextureEmissive&&d.enable(20),y.alphaToCoverage&&d.enable(21),w.push(d.mask)}function R(w){const y=M[w.type];let N;if(y){const j=cr[y];N=_w.clone(j.uniforms)}else N=w.uniforms;return N}function D(w,y){let N;for(let j=0,q=g.length;j<q;j++){const rt=g[j];if(rt.cacheKey===y){N=rt,++N.usedTimes;break}}return N===void 0&&(N=new GL(i,y,w,c),g.push(N)),N}function z(w){if(--w.usedTimes===0){const y=g.indexOf(w);g[y]=g[g.length-1],g.pop(),w.destroy()}}function I(w){h.remove(w)}function H(){h.dispose()}return{getParameters:b,getProgramCacheKey:S,getUniforms:R,acquireProgram:D,releaseProgram:z,releaseShaderCache:I,programs:g,dispose:H}}function qL(){let i=new WeakMap;function t(u){return i.has(u)}function n(u){let d=i.get(u);return d===void 0&&(d={},i.set(u,d)),d}function a(u){i.delete(u)}function o(u,d,h){i.get(u)[d]=h}function c(){i=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function YL(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function RS(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function CS(){const i=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(v,_,x,M,E,b){let S=i[t];return S===void 0?(S={id:v.id,object:v,geometry:_,material:x,groupOrder:M,renderOrder:v.renderOrder,z:E,group:b},i[t]=S):(S.id=v.id,S.object=v,S.geometry=_,S.material=x,S.groupOrder=M,S.renderOrder=v.renderOrder,S.z=E,S.group=b),t++,S}function d(v,_,x,M,E,b){const S=u(v,_,x,M,E,b);x.transmission>0?a.push(S):x.transparent===!0?o.push(S):n.push(S)}function h(v,_,x,M,E,b){const S=u(v,_,x,M,E,b);x.transmission>0?a.unshift(S):x.transparent===!0?o.unshift(S):n.unshift(S)}function p(v,_){n.length>1&&n.sort(v||YL),a.length>1&&a.sort(_||RS),o.length>1&&o.sort(_||RS)}function g(){for(let v=t,_=i.length;v<_;v++){const x=i[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:d,unshift:h,finish:g,sort:p}}function jL(){let i=new WeakMap;function t(a,o){const c=i.get(a);let u;return c===void 0?(u=new CS,i.set(a,[u])):o>=c.length?(u=new CS,c.push(u)):u=c[o],u}function n(){i=new WeakMap}return{get:t,dispose:n}}function $L(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new ut,color:new He};break;case"SpotLight":n={position:new ut,direction:new ut,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ut,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ut,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return i[t.id]=n,n}}}function KL(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=n,n}}}let ZL=0;function QL(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function JL(i){const t=new $L,n=KL(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new ut);const o=new ut,c=new _n,u=new _n;function d(p){let g=0,v=0,_=0;for(let w=0;w<9;w++)a.probe[w].set(0,0,0);let x=0,M=0,E=0,b=0,S=0,O=0,U=0,R=0,D=0,z=0,I=0;p.sort(QL);for(let w=0,y=p.length;w<y;w++){const N=p[w],j=N.color,q=N.intensity,rt=N.distance,lt=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)g+=j.r*q,v+=j.g*q,_+=j.b*q;else if(N.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(N.sh.coefficients[F],q);I++}else if(N.isDirectionalLight){const F=t.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Y=N.shadow,X=n.get(N);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,a.directionalShadow[x]=X,a.directionalShadowMap[x]=lt,a.directionalShadowMatrix[x]=N.shadow.matrix,O++}a.directional[x]=F,x++}else if(N.isSpotLight){const F=t.get(N);F.position.setFromMatrixPosition(N.matrixWorld),F.color.copy(j).multiplyScalar(q),F.distance=rt,F.coneCos=Math.cos(N.angle),F.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),F.decay=N.decay,a.spot[E]=F;const Y=N.shadow;if(N.map&&(a.spotLightMap[D]=N.map,D++,Y.updateMatrices(N),N.castShadow&&z++),a.spotLightMatrix[E]=Y.matrix,N.castShadow){const X=n.get(N);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,a.spotShadow[E]=X,a.spotShadowMap[E]=lt,R++}E++}else if(N.isRectAreaLight){const F=t.get(N);F.color.copy(j).multiplyScalar(q),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),a.rectArea[b]=F,b++}else if(N.isPointLight){const F=t.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),F.distance=N.distance,F.decay=N.decay,N.castShadow){const Y=N.shadow,X=n.get(N);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,a.pointShadow[M]=X,a.pointShadowMap[M]=lt,a.pointShadowMatrix[M]=N.shadow.matrix,U++}a.point[M]=F,M++}else if(N.isHemisphereLight){const F=t.get(N);F.skyColor.copy(N.color).multiplyScalar(q),F.groundColor.copy(N.groundColor).multiplyScalar(q),a.hemi[S]=F,S++}}b>0&&(i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Gt.LTC_FLOAT_1,a.rectAreaLTC2=Gt.LTC_FLOAT_2):(a.rectAreaLTC1=Gt.LTC_HALF_1,a.rectAreaLTC2=Gt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const H=a.hash;(H.directionalLength!==x||H.pointLength!==M||H.spotLength!==E||H.rectAreaLength!==b||H.hemiLength!==S||H.numDirectionalShadows!==O||H.numPointShadows!==U||H.numSpotShadows!==R||H.numSpotMaps!==D||H.numLightProbes!==I)&&(a.directional.length=x,a.spot.length=E,a.rectArea.length=b,a.point.length=M,a.hemi.length=S,a.directionalShadow.length=O,a.directionalShadowMap.length=O,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=O,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=R+D-z,a.spotLightMap.length=D,a.numSpotLightShadowsWithMaps=z,a.numLightProbes=I,H.directionalLength=x,H.pointLength=M,H.spotLength=E,H.rectAreaLength=b,H.hemiLength=S,H.numDirectionalShadows=O,H.numPointShadows=U,H.numSpotShadows=R,H.numSpotMaps=D,H.numLightProbes=I,a.version=ZL++)}function h(p,g){let v=0,_=0,x=0,M=0,E=0;const b=g.matrixWorldInverse;for(let S=0,O=p.length;S<O;S++){const U=p[S];if(U.isDirectionalLight){const R=a.directional[v];R.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(b),v++}else if(U.isSpotLight){const R=a.spot[x];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(b),R.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(b),x++}else if(U.isRectAreaLight){const R=a.rectArea[M];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(b),u.identity(),c.copy(U.matrixWorld),c.premultiply(b),u.extractRotation(c),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),M++}else if(U.isPointLight){const R=a.point[_];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(b),_++}else if(U.isHemisphereLight){const R=a.hemi[E];R.direction.setFromMatrixPosition(U.matrixWorld),R.direction.transformDirection(b),E++}}}return{setup:d,setupView:h,state:a}}function wS(i){const t=new JL(i),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function d(){t.setup(n)}function h(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:h,pushLight:c,pushShadow:u}}function tN(i){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let d;return u===void 0?(d=new wS(i),t.set(o,[d])):c>=u.length?(d=new wS(i),u.push(d)):d=u[c],d}function a(){t=new WeakMap}return{get:n,dispose:a}}const eN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iN(i,t,n){let a=new rb;const o=new Ke,c=new Ke,u=new vn,d=new ww({depthPacking:F2}),h=new Dw,p={},g=n.maxTextureSize,v={[Ba]:ii,[ii]:Ba,[Gr]:Gr},_=new $r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:eN,fragmentShader:nN}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const M=new Kr;M.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Xr(M,_),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nx;let S=this.type;this.render=function(z,I,H){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||z.length===0)return;const w=i.getRenderTarget(),y=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),j=i.state;j.setBlending(La),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const q=S!==Hr&&this.type===Hr,rt=S===Hr&&this.type!==Hr;for(let lt=0,F=z.length;lt<F;lt++){const Y=z[lt],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const ht=X.getFrameExtents();if(o.multiply(ht),c.copy(X.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/ht.x),o.x=c.x*ht.x,X.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/ht.y),o.y=c.y*ht.y,X.mapSize.y=c.y)),X.map===null||q===!0||rt===!0){const $=this.type!==Hr?{minFilter:$i,magFilter:$i}:{};X.map!==null&&X.map.dispose(),X.map=new ys(o.x,o.y,$),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const P=X.getViewportCount();for(let $=0;$<P;$++){const pt=X.getViewport($);u.set(c.x*pt.x,c.y*pt.y,c.x*pt.z,c.y*pt.w),j.viewport(u),X.updateMatrices(Y,$),a=X.getFrustum(),R(I,H,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===Hr&&O(X,H),X.needsUpdate=!1}S=this.type,b.needsUpdate=!1,i.setRenderTarget(w,y,N)};function O(z,I){const H=t.update(E);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,x.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ys(o.x,o.y)),_.uniforms.shadow_pass.value=z.map.texture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,i.setRenderTarget(z.mapPass),i.clear(),i.renderBufferDirect(I,null,H,_,E,null),x.uniforms.shadow_pass.value=z.mapPass.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,i.setRenderTarget(z.map),i.clear(),i.renderBufferDirect(I,null,H,x,E,null)}function U(z,I,H,w){let y=null;const N=H.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(N!==void 0)y=N;else if(y=H.isPointLight===!0?h:d,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const j=y.uuid,q=I.uuid;let rt=p[j];rt===void 0&&(rt={},p[j]=rt);let lt=rt[q];lt===void 0&&(lt=y.clone(),rt[q]=lt,I.addEventListener("dispose",D)),y=lt}if(y.visible=I.visible,y.wireframe=I.wireframe,w===Hr?y.side=I.shadowSide!==null?I.shadowSide:I.side:y.side=I.shadowSide!==null?I.shadowSide:v[I.side],y.alphaMap=I.alphaMap,y.alphaTest=I.alphaTest,y.map=I.map,y.clipShadows=I.clipShadows,y.clippingPlanes=I.clippingPlanes,y.clipIntersection=I.clipIntersection,y.displacementMap=I.displacementMap,y.displacementScale=I.displacementScale,y.displacementBias=I.displacementBias,y.wireframeLinewidth=I.wireframeLinewidth,y.linewidth=I.linewidth,H.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const j=i.properties.get(y);j.light=H}return y}function R(z,I,H,w,y){if(z.visible===!1)return;if(z.layers.test(I.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&y===Hr)&&(!z.frustumCulled||a.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,z.matrixWorld);const q=t.update(z),rt=z.material;if(Array.isArray(rt)){const lt=q.groups;for(let F=0,Y=lt.length;F<Y;F++){const X=lt[F],ht=rt[X.materialIndex];if(ht&&ht.visible){const P=U(z,ht,w,y);z.onBeforeShadow(i,z,I,H,q,P,X),i.renderBufferDirect(H,null,q,P,z,X),z.onAfterShadow(i,z,I,H,q,P,X)}}}else if(rt.visible){const lt=U(z,rt,w,y);z.onBeforeShadow(i,z,I,H,q,lt,null),i.renderBufferDirect(H,null,q,lt,z,null),z.onAfterShadow(i,z,I,H,q,lt,null)}}const j=z.children;for(let q=0,rt=j.length;q<rt;q++)R(j[q],I,H,w,y)}function D(z){z.target.removeEventListener("dispose",D);for(const H in p){const w=p[H],y=z.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const rN={[Gp]:Vp,[kp]:qp,[Xp]:Yp,[Eo]:Wp,[Vp]:Gp,[qp]:kp,[Yp]:Xp,[Wp]:Eo};function aN(i,t){function n(){let W=!1;const Bt=new vn;let ft=null;const xt=new vn(0,0,0,0);return{setMask:function(kt){ft!==kt&&!W&&(i.colorMask(kt,kt,kt,kt),ft=kt)},setLocked:function(kt){W=kt},setClear:function(kt,It,fe,ke,ln){ln===!0&&(kt*=ke,It*=ke,fe*=ke),Bt.set(kt,It,fe,ke),xt.equals(Bt)===!1&&(i.clearColor(kt,It,fe,ke),xt.copy(Bt))},reset:function(){W=!1,ft=null,xt.set(-1,0,0,0)}}}function a(){let W=!1,Bt=!1,ft=null,xt=null,kt=null;return{setReversed:function(It){if(Bt!==It){const fe=t.get("EXT_clip_control");It?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),Bt=It;const ke=kt;kt=null,this.setClear(ke)}},getReversed:function(){return Bt},setTest:function(It){It?Rt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(It){ft!==It&&!W&&(i.depthMask(It),ft=It)},setFunc:function(It){if(Bt&&(It=rN[It]),xt!==It){switch(It){case Gp:i.depthFunc(i.NEVER);break;case Vp:i.depthFunc(i.ALWAYS);break;case kp:i.depthFunc(i.LESS);break;case Eo:i.depthFunc(i.LEQUAL);break;case Xp:i.depthFunc(i.EQUAL);break;case Wp:i.depthFunc(i.GEQUAL);break;case qp:i.depthFunc(i.GREATER);break;case Yp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=It}},setLocked:function(It){W=It},setClear:function(It){kt!==It&&(Bt&&(It=1-It),i.clearDepth(It),kt=It)},reset:function(){W=!1,ft=null,xt=null,kt=null,Bt=!1}}}function o(){let W=!1,Bt=null,ft=null,xt=null,kt=null,It=null,fe=null,ke=null,ln=null;return{setTest:function(Ce){W||(Ce?Rt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(Ce){Bt!==Ce&&!W&&(i.stencilMask(Ce),Bt=Ce)},setFunc:function(Ce,Lt,zt){(ft!==Ce||xt!==Lt||kt!==zt)&&(i.stencilFunc(Ce,Lt,zt),ft=Ce,xt=Lt,kt=zt)},setOp:function(Ce,Lt,zt){(It!==Ce||fe!==Lt||ke!==zt)&&(i.stencilOp(Ce,Lt,zt),It=Ce,fe=Lt,ke=zt)},setLocked:function(Ce){W=Ce},setClear:function(Ce){ln!==Ce&&(i.clearStencil(Ce),ln=Ce)},reset:function(){W=!1,Bt=null,ft=null,xt=null,kt=null,It=null,fe=null,ke=null,ln=null}}}const c=new n,u=new a,d=new o,h=new WeakMap,p=new WeakMap;let g={},v={},_=new WeakMap,x=[],M=null,E=!1,b=null,S=null,O=null,U=null,R=null,D=null,z=null,I=new He(0,0,0),H=0,w=!1,y=null,N=null,j=null,q=null,rt=null;const lt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Y=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=Y>=2);let ht=null,P={};const $=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),Mt=new vn().fromArray($),J=new vn().fromArray(pt);function _t(W,Bt,ft,xt){const kt=new Uint8Array(4),It=i.createTexture();i.bindTexture(W,It),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<ft;fe++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Bt,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,kt):i.texImage2D(Bt+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,kt);return It}const yt={};yt[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Rt(i.DEPTH_TEST),u.setFunc(Eo),he(!1),$t(Ly),Rt(i.CULL_FACE),V(La);function Rt(W){g[W]!==!0&&(i.enable(W),g[W]=!0)}function Ut(W){g[W]!==!1&&(i.disable(W),g[W]=!1)}function ue(W,Bt){return v[W]!==Bt?(i.bindFramebuffer(W,Bt),v[W]=Bt,W===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Bt),W===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Bt),!0):!1}function Kt(W,Bt){let ft=x,xt=!1;if(W){ft=_.get(Bt),ft===void 0&&(ft=[],_.set(Bt,ft));const kt=W.textures;if(ft.length!==kt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let It=0,fe=kt.length;It<fe;It++)ft[It]=i.COLOR_ATTACHMENT0+It;ft.length=kt.length,xt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,xt=!0);xt&&i.drawBuffers(ft)}function Ue(W){return M!==W?(i.useProgram(W),M=W,!0):!1}const Ee={[us]:i.FUNC_ADD,[f2]:i.FUNC_SUBTRACT,[d2]:i.FUNC_REVERSE_SUBTRACT};Ee[h2]=i.MIN,Ee[p2]=i.MAX;const de={[m2]:i.ZERO,[g2]:i.ONE,[v2]:i.SRC_COLOR,[Fp]:i.SRC_ALPHA,[M2]:i.SRC_ALPHA_SATURATE,[x2]:i.DST_COLOR,[y2]:i.DST_ALPHA,[_2]:i.ONE_MINUS_SRC_COLOR,[Hp]:i.ONE_MINUS_SRC_ALPHA,[b2]:i.ONE_MINUS_DST_COLOR,[S2]:i.ONE_MINUS_DST_ALPHA,[E2]:i.CONSTANT_COLOR,[T2]:i.ONE_MINUS_CONSTANT_COLOR,[A2]:i.CONSTANT_ALPHA,[R2]:i.ONE_MINUS_CONSTANT_ALPHA};function V(W,Bt,ft,xt,kt,It,fe,ke,ln,Ce){if(W===La){E===!0&&(Ut(i.BLEND),E=!1);return}if(E===!1&&(Rt(i.BLEND),E=!0),W!==u2){if(W!==b||Ce!==w){if((S!==us||R!==us)&&(i.blendEquation(i.FUNC_ADD),S=us,R=us),Ce)switch(W){case xo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zp:i.blendFunc(i.ONE,i.ONE);break;case Ny:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oy:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case xo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zp:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ny:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oy:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}O=null,U=null,D=null,z=null,I.set(0,0,0),H=0,b=W,w=Ce}return}kt=kt||Bt,It=It||ft,fe=fe||xt,(Bt!==S||kt!==R)&&(i.blendEquationSeparate(Ee[Bt],Ee[kt]),S=Bt,R=kt),(ft!==O||xt!==U||It!==D||fe!==z)&&(i.blendFuncSeparate(de[ft],de[xt],de[It],de[fe]),O=ft,U=xt,D=It,z=fe),(ke.equals(I)===!1||ln!==H)&&(i.blendColor(ke.r,ke.g,ke.b,ln),I.copy(ke),H=ln),b=W,w=!1}function pn(W,Bt){W.side===Gr?Ut(i.CULL_FACE):Rt(i.CULL_FACE);let ft=W.side===ii;Bt&&(ft=!ft),he(ft),W.blending===xo&&W.transparent===!1?V(La):V(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const xt=W.stencilWrite;d.setTest(xt),xt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ae(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Rt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(W){y!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),y=W)}function $t(W){W!==o2?(Rt(i.CULL_FACE),W!==N&&(W===Ly?i.cullFace(i.BACK):W===l2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),N=W}function Vt(W){W!==j&&(F&&i.lineWidth(W),j=W)}function ae(W,Bt,ft){W?(Rt(i.POLYGON_OFFSET_FILL),(q!==Bt||rt!==ft)&&(i.polygonOffset(Bt,ft),q=Bt,rt=ft)):Ut(i.POLYGON_OFFSET_FILL)}function Xt(W){W?Rt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function B(W){W===void 0&&(W=i.TEXTURE0+lt-1),ht!==W&&(i.activeTexture(W),ht=W)}function A(W,Bt,ft){ft===void 0&&(ht===null?ft=i.TEXTURE0+lt-1:ft=ht);let xt=P[ft];xt===void 0&&(xt={type:void 0,texture:void 0},P[ft]=xt),(xt.type!==W||xt.texture!==Bt)&&(ht!==ft&&(i.activeTexture(ft),ht=ft),i.bindTexture(W,Bt||yt[W]),xt.type=W,xt.texture=Bt)}function nt(){const W=P[ht];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function bt(){try{i.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function At(){try{i.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function gt(){try{i.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ft(){try{i.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{i.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Dt(){try{i.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ee(){try{i.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Et(){try{i.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pt(){try{i.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{i.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Yt(W){Mt.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Mt.copy(W))}function Nt(W){J.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),J.copy(W))}function pe(W,Bt){let ft=p.get(Bt);ft===void 0&&(ft=new WeakMap,p.set(Bt,ft));let xt=ft.get(W);xt===void 0&&(xt=i.getUniformBlockIndex(Bt,W.name),ft.set(W,xt))}function oe(W,Bt){const xt=p.get(Bt).get(W);h.get(Bt)!==xt&&(i.uniformBlockBinding(Bt,xt,W.__bindingPointIndex),h.set(Bt,xt))}function Pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},ht=null,P={},v={},_=new WeakMap,x=[],M=null,E=!1,b=null,S=null,O=null,U=null,R=null,D=null,z=null,I=new He(0,0,0),H=0,w=!1,y=null,N=null,j=null,q=null,rt=null,Mt.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:Rt,disable:Ut,bindFramebuffer:ue,drawBuffers:Kt,useProgram:Ue,setBlending:V,setMaterial:pn,setFlipSided:he,setCullFace:$t,setLineWidth:Vt,setPolygonOffset:ae,setScissorTest:Xt,activeTexture:B,bindTexture:A,unbindTexture:nt,compressedTexImage2D:bt,compressedTexImage3D:At,texImage2D:Pt,texImage3D:qt,updateUBOMapping:pe,uniformBlockBinding:oe,texStorage2D:ee,texStorage3D:Et,texSubImage2D:gt,texSubImage3D:Ft,compressedTexSubImage2D:wt,compressedTexSubImage3D:Dt,scissor:Yt,viewport:Nt,reset:Pe}}function sN(i,t,n,a,o,c,u){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ke,g=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(B,A){return x?new OffscreenCanvas(B,A):mf("canvas")}function E(B,A,nt){let bt=1;const At=Xt(B);if((At.width>nt||At.height>nt)&&(bt=nt/Math.max(At.width,At.height)),bt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const gt=Math.floor(bt*At.width),Ft=Math.floor(bt*At.height);v===void 0&&(v=M(gt,Ft));const wt=A?M(gt,Ft):v;return wt.width=gt,wt.height=Ft,wt.getContext("2d").drawImage(B,0,0,gt,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+gt+"x"+Ft+")."),wt}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),B;return B}function b(B){return B.generateMipmaps}function S(B){i.generateMipmap(B)}function O(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function U(B,A,nt,bt,At=!1){if(B!==null){if(i[B]!==void 0)return i[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let gt=A;if(A===i.RED&&(nt===i.FLOAT&&(gt=i.R32F),nt===i.HALF_FLOAT&&(gt=i.R16F),nt===i.UNSIGNED_BYTE&&(gt=i.R8)),A===i.RED_INTEGER&&(nt===i.UNSIGNED_BYTE&&(gt=i.R8UI),nt===i.UNSIGNED_SHORT&&(gt=i.R16UI),nt===i.UNSIGNED_INT&&(gt=i.R32UI),nt===i.BYTE&&(gt=i.R8I),nt===i.SHORT&&(gt=i.R16I),nt===i.INT&&(gt=i.R32I)),A===i.RG&&(nt===i.FLOAT&&(gt=i.RG32F),nt===i.HALF_FLOAT&&(gt=i.RG16F),nt===i.UNSIGNED_BYTE&&(gt=i.RG8)),A===i.RG_INTEGER&&(nt===i.UNSIGNED_BYTE&&(gt=i.RG8UI),nt===i.UNSIGNED_SHORT&&(gt=i.RG16UI),nt===i.UNSIGNED_INT&&(gt=i.RG32UI),nt===i.BYTE&&(gt=i.RG8I),nt===i.SHORT&&(gt=i.RG16I),nt===i.INT&&(gt=i.RG32I)),A===i.RGB_INTEGER&&(nt===i.UNSIGNED_BYTE&&(gt=i.RGB8UI),nt===i.UNSIGNED_SHORT&&(gt=i.RGB16UI),nt===i.UNSIGNED_INT&&(gt=i.RGB32UI),nt===i.BYTE&&(gt=i.RGB8I),nt===i.SHORT&&(gt=i.RGB16I),nt===i.INT&&(gt=i.RGB32I)),A===i.RGBA_INTEGER&&(nt===i.UNSIGNED_BYTE&&(gt=i.RGBA8UI),nt===i.UNSIGNED_SHORT&&(gt=i.RGBA16UI),nt===i.UNSIGNED_INT&&(gt=i.RGBA32UI),nt===i.BYTE&&(gt=i.RGBA8I),nt===i.SHORT&&(gt=i.RGBA16I),nt===i.INT&&(gt=i.RGBA32I)),A===i.RGB&&nt===i.UNSIGNED_INT_5_9_9_9_REV&&(gt=i.RGB9_E5),A===i.RGBA){const Ft=At?hf:Oe.getTransfer(bt);nt===i.FLOAT&&(gt=i.RGBA32F),nt===i.HALF_FLOAT&&(gt=i.RGBA16F),nt===i.UNSIGNED_BYTE&&(gt=Ft===je?i.SRGB8_ALPHA8:i.RGBA8),nt===i.UNSIGNED_SHORT_4_4_4_4&&(gt=i.RGBA4),nt===i.UNSIGNED_SHORT_5_5_5_1&&(gt=i.RGB5_A1)}return(gt===i.R16F||gt===i.R32F||gt===i.RG16F||gt===i.RG32F||gt===i.RGBA16F||gt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function R(B,A){let nt;return B?A===null||A===_s||A===Xl?nt=i.DEPTH24_STENCIL8:A===Vr?nt=i.DEPTH32F_STENCIL8:A===kl&&(nt=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===_s||A===Xl?nt=i.DEPTH_COMPONENT24:A===Vr?nt=i.DEPTH_COMPONENT32F:A===kl&&(nt=i.DEPTH_COMPONENT16),nt}function D(B,A){return b(B)===!0||B.isFramebufferTexture&&B.minFilter!==$i&&B.minFilter!==fr?Math.log2(Math.max(A.width,A.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?A.mipmaps.length:1}function z(B){const A=B.target;A.removeEventListener("dispose",z),H(A),A.isVideoTexture&&g.delete(A)}function I(B){const A=B.target;A.removeEventListener("dispose",I),y(A)}function H(B){const A=a.get(B);if(A.__webglInit===void 0)return;const nt=B.source,bt=_.get(nt);if(bt){const At=bt[A.__cacheKey];At.usedTimes--,At.usedTimes===0&&w(B),Object.keys(bt).length===0&&_.delete(nt)}a.remove(B)}function w(B){const A=a.get(B);i.deleteTexture(A.__webglTexture);const nt=B.source,bt=_.get(nt);delete bt[A.__cacheKey],u.memory.textures--}function y(B){const A=a.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),a.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let bt=0;bt<6;bt++){if(Array.isArray(A.__webglFramebuffer[bt]))for(let At=0;At<A.__webglFramebuffer[bt].length;At++)i.deleteFramebuffer(A.__webglFramebuffer[bt][At]);else i.deleteFramebuffer(A.__webglFramebuffer[bt]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[bt])}else{if(Array.isArray(A.__webglFramebuffer))for(let bt=0;bt<A.__webglFramebuffer.length;bt++)i.deleteFramebuffer(A.__webglFramebuffer[bt]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let bt=0;bt<A.__webglColorRenderbuffer.length;bt++)A.__webglColorRenderbuffer[bt]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[bt]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const nt=B.textures;for(let bt=0,At=nt.length;bt<At;bt++){const gt=a.get(nt[bt]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),u.memory.textures--),a.remove(nt[bt])}a.remove(B)}let N=0;function j(){N=0}function q(){const B=N;return B>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+o.maxTextures),N+=1,B}function rt(B){const A=[];return A.push(B.wrapS),A.push(B.wrapT),A.push(B.wrapR||0),A.push(B.magFilter),A.push(B.minFilter),A.push(B.anisotropy),A.push(B.internalFormat),A.push(B.format),A.push(B.type),A.push(B.generateMipmaps),A.push(B.premultiplyAlpha),A.push(B.flipY),A.push(B.unpackAlignment),A.push(B.colorSpace),A.join()}function lt(B,A){const nt=a.get(B);if(B.isVideoTexture&&Vt(B),B.isRenderTargetTexture===!1&&B.version>0&&nt.__version!==B.version){const bt=B.image;if(bt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(bt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(nt,B,A);return}}n.bindTexture(i.TEXTURE_2D,nt.__webglTexture,i.TEXTURE0+A)}function F(B,A){const nt=a.get(B);if(B.version>0&&nt.__version!==B.version){J(nt,B,A);return}n.bindTexture(i.TEXTURE_2D_ARRAY,nt.__webglTexture,i.TEXTURE0+A)}function Y(B,A){const nt=a.get(B);if(B.version>0&&nt.__version!==B.version){J(nt,B,A);return}n.bindTexture(i.TEXTURE_3D,nt.__webglTexture,i.TEXTURE0+A)}function X(B,A){const nt=a.get(B);if(B.version>0&&nt.__version!==B.version){_t(nt,B,A);return}n.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture,i.TEXTURE0+A)}const ht={[Kp]:i.REPEAT,[hs]:i.CLAMP_TO_EDGE,[Zp]:i.MIRRORED_REPEAT},P={[$i]:i.NEAREST,[I2]:i.NEAREST_MIPMAP_NEAREST,[Su]:i.NEAREST_MIPMAP_LINEAR,[fr]:i.LINEAR,[Zh]:i.LINEAR_MIPMAP_NEAREST,[ps]:i.LINEAR_MIPMAP_LINEAR},$={[V2]:i.NEVER,[j2]:i.ALWAYS,[k2]:i.LESS,[qx]:i.LEQUAL,[X2]:i.EQUAL,[Y2]:i.GEQUAL,[W2]:i.GREATER,[q2]:i.NOTEQUAL};function pt(B,A){if(A.type===Vr&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===fr||A.magFilter===Zh||A.magFilter===Su||A.magFilter===ps||A.minFilter===fr||A.minFilter===Zh||A.minFilter===Su||A.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,ht[A.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,ht[A.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,ht[A.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,P[A.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,P[A.minFilter]),A.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,$[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===$i||A.minFilter!==Su&&A.minFilter!==ps||A.type===Vr&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(B,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function Mt(B,A){let nt=!1;B.__webglInit===void 0&&(B.__webglInit=!0,A.addEventListener("dispose",z));const bt=A.source;let At=_.get(bt);At===void 0&&(At={},_.set(bt,At));const gt=rt(A);if(gt!==B.__cacheKey){At[gt]===void 0&&(At[gt]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,nt=!0),At[gt].usedTimes++;const Ft=At[B.__cacheKey];Ft!==void 0&&(At[B.__cacheKey].usedTimes--,Ft.usedTimes===0&&w(A)),B.__cacheKey=gt,B.__webglTexture=At[gt].texture}return nt}function J(B,A,nt){let bt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(bt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(bt=i.TEXTURE_3D);const At=Mt(B,A),gt=A.source;n.bindTexture(bt,B.__webglTexture,i.TEXTURE0+nt);const Ft=a.get(gt);if(gt.version!==Ft.__version||At===!0){n.activeTexture(i.TEXTURE0+nt);const wt=Oe.getPrimaries(Oe.workingColorSpace),Dt=A.colorSpace===Ca?null:Oe.getPrimaries(A.colorSpace),ee=A.colorSpace===Ca||wt===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Et=E(A.image,!1,o.maxTextureSize);Et=ae(A,Et);const Pt=c.convert(A.format,A.colorSpace),qt=c.convert(A.type);let Yt=U(A.internalFormat,Pt,qt,A.colorSpace,A.isVideoTexture);pt(bt,A);let Nt;const pe=A.mipmaps,oe=A.isVideoTexture!==!0,Pe=Ft.__version===void 0||At===!0,W=gt.dataReady,Bt=D(A,Et);if(A.isDepthTexture)Yt=R(A.format===ql,A.type),Pe&&(oe?n.texStorage2D(i.TEXTURE_2D,1,Yt,Et.width,Et.height):n.texImage2D(i.TEXTURE_2D,0,Yt,Et.width,Et.height,0,Pt,qt,null));else if(A.isDataTexture)if(pe.length>0){oe&&Pe&&n.texStorage2D(i.TEXTURE_2D,Bt,Yt,pe[0].width,pe[0].height);for(let ft=0,xt=pe.length;ft<xt;ft++)Nt=pe[ft],oe?W&&n.texSubImage2D(i.TEXTURE_2D,ft,0,0,Nt.width,Nt.height,Pt,qt,Nt.data):n.texImage2D(i.TEXTURE_2D,ft,Yt,Nt.width,Nt.height,0,Pt,qt,Nt.data);A.generateMipmaps=!1}else oe?(Pe&&n.texStorage2D(i.TEXTURE_2D,Bt,Yt,Et.width,Et.height),W&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Et.width,Et.height,Pt,qt,Et.data)):n.texImage2D(i.TEXTURE_2D,0,Yt,Et.width,Et.height,0,Pt,qt,Et.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){oe&&Pe&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,Yt,pe[0].width,pe[0].height,Et.depth);for(let ft=0,xt=pe.length;ft<xt;ft++)if(Nt=pe[ft],A.format!==ji)if(Pt!==null)if(oe){if(W)if(A.layerUpdates.size>0){const kt=aS(Nt.width,Nt.height,A.format,A.type);for(const It of A.layerUpdates){const fe=Nt.data.subarray(It*kt/Nt.data.BYTES_PER_ELEMENT,(It+1)*kt/Nt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,It,Nt.width,Nt.height,1,Pt,fe)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Nt.width,Nt.height,Et.depth,Pt,Nt.data)}else n.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Yt,Nt.width,Nt.height,Et.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?W&&n.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Nt.width,Nt.height,Et.depth,Pt,qt,Nt.data):n.texImage3D(i.TEXTURE_2D_ARRAY,ft,Yt,Nt.width,Nt.height,Et.depth,0,Pt,qt,Nt.data)}else{oe&&Pe&&n.texStorage2D(i.TEXTURE_2D,Bt,Yt,pe[0].width,pe[0].height);for(let ft=0,xt=pe.length;ft<xt;ft++)Nt=pe[ft],A.format!==ji?Pt!==null?oe?W&&n.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,Nt.width,Nt.height,Pt,Nt.data):n.compressedTexImage2D(i.TEXTURE_2D,ft,Yt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?W&&n.texSubImage2D(i.TEXTURE_2D,ft,0,0,Nt.width,Nt.height,Pt,qt,Nt.data):n.texImage2D(i.TEXTURE_2D,ft,Yt,Nt.width,Nt.height,0,Pt,qt,Nt.data)}else if(A.isDataArrayTexture)if(oe){if(Pe&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,Yt,Et.width,Et.height,Et.depth),W)if(A.layerUpdates.size>0){const ft=aS(Et.width,Et.height,A.format,A.type);for(const xt of A.layerUpdates){const kt=Et.data.subarray(xt*ft/Et.data.BYTES_PER_ELEMENT,(xt+1)*ft/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xt,Et.width,Et.height,1,Pt,qt,kt)}A.clearLayerUpdates()}else n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Pt,qt,Et.data)}else n.texImage3D(i.TEXTURE_2D_ARRAY,0,Yt,Et.width,Et.height,Et.depth,0,Pt,qt,Et.data);else if(A.isData3DTexture)oe?(Pe&&n.texStorage3D(i.TEXTURE_3D,Bt,Yt,Et.width,Et.height,Et.depth),W&&n.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Pt,qt,Et.data)):n.texImage3D(i.TEXTURE_3D,0,Yt,Et.width,Et.height,Et.depth,0,Pt,qt,Et.data);else if(A.isFramebufferTexture){if(Pe)if(oe)n.texStorage2D(i.TEXTURE_2D,Bt,Yt,Et.width,Et.height);else{let ft=Et.width,xt=Et.height;for(let kt=0;kt<Bt;kt++)n.texImage2D(i.TEXTURE_2D,kt,Yt,ft,xt,0,Pt,qt,null),ft>>=1,xt>>=1}}else if(pe.length>0){if(oe&&Pe){const ft=Xt(pe[0]);n.texStorage2D(i.TEXTURE_2D,Bt,Yt,ft.width,ft.height)}for(let ft=0,xt=pe.length;ft<xt;ft++)Nt=pe[ft],oe?W&&n.texSubImage2D(i.TEXTURE_2D,ft,0,0,Pt,qt,Nt):n.texImage2D(i.TEXTURE_2D,ft,Yt,Pt,qt,Nt);A.generateMipmaps=!1}else if(oe){if(Pe){const ft=Xt(Et);n.texStorage2D(i.TEXTURE_2D,Bt,Yt,ft.width,ft.height)}W&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,qt,Et)}else n.texImage2D(i.TEXTURE_2D,0,Yt,Pt,qt,Et);b(A)&&S(bt),Ft.__version=gt.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function _t(B,A,nt){if(A.image.length!==6)return;const bt=Mt(B,A),At=A.source;n.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+nt);const gt=a.get(At);if(At.version!==gt.__version||bt===!0){n.activeTexture(i.TEXTURE0+nt);const Ft=Oe.getPrimaries(Oe.workingColorSpace),wt=A.colorSpace===Ca?null:Oe.getPrimaries(A.colorSpace),Dt=A.colorSpace===Ca||Ft===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const ee=A.isCompressedTexture||A.image[0].isCompressedTexture,Et=A.image[0]&&A.image[0].isDataTexture,Pt=[];for(let xt=0;xt<6;xt++)!ee&&!Et?Pt[xt]=E(A.image[xt],!0,o.maxCubemapSize):Pt[xt]=Et?A.image[xt].image:A.image[xt],Pt[xt]=ae(A,Pt[xt]);const qt=Pt[0],Yt=c.convert(A.format,A.colorSpace),Nt=c.convert(A.type),pe=U(A.internalFormat,Yt,Nt,A.colorSpace),oe=A.isVideoTexture!==!0,Pe=gt.__version===void 0||bt===!0,W=At.dataReady;let Bt=D(A,qt);pt(i.TEXTURE_CUBE_MAP,A);let ft;if(ee){oe&&Pe&&n.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,pe,qt.width,qt.height);for(let xt=0;xt<6;xt++){ft=Pt[xt].mipmaps;for(let kt=0;kt<ft.length;kt++){const It=ft[kt];A.format!==ji?Yt!==null?oe?W&&n.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt,0,0,It.width,It.height,Yt,It.data):n.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt,pe,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?W&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt,0,0,It.width,It.height,Yt,Nt,It.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt,pe,It.width,It.height,0,Yt,Nt,It.data)}}}else{if(ft=A.mipmaps,oe&&Pe){ft.length>0&&Bt++;const xt=Xt(Pt[0]);n.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,pe,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Et){oe?W&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Pt[xt].width,Pt[xt].height,Yt,Nt,Pt[xt].data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,pe,Pt[xt].width,Pt[xt].height,0,Yt,Nt,Pt[xt].data);for(let kt=0;kt<ft.length;kt++){const fe=ft[kt].image[xt].image;oe?W&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt+1,0,0,fe.width,fe.height,Yt,Nt,fe.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt+1,pe,fe.width,fe.height,0,Yt,Nt,fe.data)}}else{oe?W&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Yt,Nt,Pt[xt]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,pe,Yt,Nt,Pt[xt]);for(let kt=0;kt<ft.length;kt++){const It=ft[kt];oe?W&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt+1,0,0,Yt,Nt,It.image[xt]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt+1,pe,Yt,Nt,It.image[xt])}}}b(A)&&S(i.TEXTURE_CUBE_MAP),gt.__version=At.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function yt(B,A,nt,bt,At,gt){const Ft=c.convert(nt.format,nt.colorSpace),wt=c.convert(nt.type),Dt=U(nt.internalFormat,Ft,wt,nt.colorSpace),ee=a.get(A),Et=a.get(nt);if(Et.__renderTarget=A,!ee.__hasExternalTextures){const Pt=Math.max(1,A.width>>gt),qt=Math.max(1,A.height>>gt);At===i.TEXTURE_3D||At===i.TEXTURE_2D_ARRAY?n.texImage3D(At,gt,Dt,Pt,qt,A.depth,0,Ft,wt,null):n.texImage2D(At,gt,Dt,Pt,qt,0,Ft,wt,null)}n.bindFramebuffer(i.FRAMEBUFFER,B),$t(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,bt,At,Et.__webglTexture,0,he(A)):(At===i.TEXTURE_2D||At>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,bt,At,Et.__webglTexture,gt),n.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(B,A,nt){if(i.bindRenderbuffer(i.RENDERBUFFER,B),A.depthBuffer){const bt=A.depthTexture,At=bt&&bt.isDepthTexture?bt.type:null,gt=R(A.stencilBuffer,At),Ft=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=he(A);$t(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,gt,A.width,A.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,gt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,gt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,B)}else{const bt=A.textures;for(let At=0;At<bt.length;At++){const gt=bt[At],Ft=c.convert(gt.format,gt.colorSpace),wt=c.convert(gt.type),Dt=U(gt.internalFormat,Ft,wt,gt.colorSpace),ee=he(A);nt&&$t(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Dt,A.width,A.height):$t(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,Dt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(B,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(i.FRAMEBUFFER,B),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const bt=a.get(A.depthTexture);bt.__renderTarget=A,(!bt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),lt(A.depthTexture,0);const At=bt.__webglTexture,gt=he(A);if(A.depthTexture.format===Wl)$t(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,At,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,At,0);else if(A.depthTexture.format===ql)$t(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,At,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,At,0);else throw new Error("Unknown depthTexture format")}function ue(B){const A=a.get(B),nt=B.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==B.depthTexture){const bt=B.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),bt){const At=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,bt.removeEventListener("dispose",At)};bt.addEventListener("dispose",At),A.__depthDisposeCallback=At}A.__boundDepthTexture=bt}if(B.depthTexture&&!A.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");Ut(A.__webglFramebuffer,B)}else if(nt){A.__webglDepthbuffer=[];for(let bt=0;bt<6;bt++)if(n.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[bt]),A.__webglDepthbuffer[bt]===void 0)A.__webglDepthbuffer[bt]=i.createRenderbuffer(),Rt(A.__webglDepthbuffer[bt],B,!1);else{const At=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=A.__webglDepthbuffer[bt];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,gt)}}else if(n.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Rt(A.__webglDepthbuffer,B,!1);else{const bt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,At),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,At)}n.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(B,A,nt){const bt=a.get(B);A!==void 0&&yt(bt.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),nt!==void 0&&ue(B)}function Ue(B){const A=B.texture,nt=a.get(B),bt=a.get(A);B.addEventListener("dispose",I);const At=B.textures,gt=B.isWebGLCubeRenderTarget===!0,Ft=At.length>1;if(Ft||(bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture()),bt.__version=A.version,u.memory.textures++),gt){nt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0){nt.__webglFramebuffer[wt]=[];for(let Dt=0;Dt<A.mipmaps.length;Dt++)nt.__webglFramebuffer[wt][Dt]=i.createFramebuffer()}else nt.__webglFramebuffer[wt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){nt.__webglFramebuffer=[];for(let wt=0;wt<A.mipmaps.length;wt++)nt.__webglFramebuffer[wt]=i.createFramebuffer()}else nt.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let wt=0,Dt=At.length;wt<Dt;wt++){const ee=a.get(At[wt]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),u.memory.textures++)}if(B.samples>0&&$t(B)===!1){nt.__webglMultisampledFramebuffer=i.createFramebuffer(),nt.__webglColorRenderbuffer=[],n.bindFramebuffer(i.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let wt=0;wt<At.length;wt++){const Dt=At[wt];nt.__webglColorRenderbuffer[wt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,nt.__webglColorRenderbuffer[wt]);const ee=c.convert(Dt.format,Dt.colorSpace),Et=c.convert(Dt.type),Pt=U(Dt.internalFormat,ee,Et,Dt.colorSpace,B.isXRRenderTarget===!0),qt=he(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Pt,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,nt.__webglColorRenderbuffer[wt])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(nt.__webglDepthRenderbuffer=i.createRenderbuffer(),Rt(nt.__webglDepthRenderbuffer,B,!0)),n.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){n.bindTexture(i.TEXTURE_CUBE_MAP,bt.__webglTexture),pt(i.TEXTURE_CUBE_MAP,A);for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Dt=0;Dt<A.mipmaps.length;Dt++)yt(nt.__webglFramebuffer[wt][Dt],B,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Dt);else yt(nt.__webglFramebuffer[wt],B,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);b(A)&&S(i.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ft){for(let wt=0,Dt=At.length;wt<Dt;wt++){const ee=At[wt],Et=a.get(ee);n.bindTexture(i.TEXTURE_2D,Et.__webglTexture),pt(i.TEXTURE_2D,ee),yt(nt.__webglFramebuffer,B,ee,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,0),b(ee)&&S(i.TEXTURE_2D)}n.unbindTexture()}else{let wt=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(wt=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(wt,bt.__webglTexture),pt(wt,A),A.mipmaps&&A.mipmaps.length>0)for(let Dt=0;Dt<A.mipmaps.length;Dt++)yt(nt.__webglFramebuffer[Dt],B,A,i.COLOR_ATTACHMENT0,wt,Dt);else yt(nt.__webglFramebuffer,B,A,i.COLOR_ATTACHMENT0,wt,0);b(A)&&S(wt),n.unbindTexture()}B.depthBuffer&&ue(B)}function Ee(B){const A=B.textures;for(let nt=0,bt=A.length;nt<bt;nt++){const At=A[nt];if(b(At)){const gt=O(B),Ft=a.get(At).__webglTexture;n.bindTexture(gt,Ft),S(gt),n.unbindTexture()}}}const de=[],V=[];function pn(B){if(B.samples>0){if($t(B)===!1){const A=B.textures,nt=B.width,bt=B.height;let At=i.COLOR_BUFFER_BIT;const gt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=a.get(B),wt=A.length>1;if(wt)for(let Dt=0;Dt<A.length;Dt++)n.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),n.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);n.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Dt=0;Dt<A.length;Dt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(At|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(At|=i.STENCIL_BUFFER_BIT)),wt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Dt]);const ee=a.get(A[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,nt,bt,0,0,nt,bt,At,i.NEAREST),h===!0&&(de.length=0,V.length=0,de.push(i.COLOR_ATTACHMENT0+Dt),B.depthBuffer&&B.resolveDepthBuffer===!1&&(de.push(gt),V.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,V)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(n.bindFramebuffer(i.READ_FRAMEBUFFER,null),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),wt)for(let Dt=0;Dt<A.length;Dt++){n.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Dt]);const ee=a.get(A[Dt]).__webglTexture;n.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,ee,0)}n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&h){const A=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function he(B){return Math.min(o.maxSamples,B.samples)}function $t(B){const A=a.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Vt(B){const A=u.render.frame;g.get(B)!==A&&(g.set(B,A),B.update())}function ae(B,A){const nt=B.colorSpace,bt=B.format,At=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||nt!==Ro&&nt!==Ca&&(Oe.getTransfer(nt)===je?(bt!==ji||At!==Yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),A}function Xt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(p.width=B.naturalWidth||B.width,p.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(p.width=B.displayWidth,p.height=B.displayHeight):(p.width=B.width,p.height=B.height),p}this.allocateTextureUnit=q,this.resetTextureUnits=j,this.setTexture2D=lt,this.setTexture2DArray=F,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=Kt,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=$t}function oN(i,t){function n(a,o=Ca){let c;const u=Oe.getTransfer(o);if(a===Yr)return i.UNSIGNED_BYTE;if(a===eg)return i.UNSIGNED_SHORT_4_4_4_4;if(a===ng)return i.UNSIGNED_SHORT_5_5_5_1;if(a===zx)return i.UNSIGNED_INT_5_9_9_9_REV;if(a===Bx)return i.BYTE;if(a===Ix)return i.SHORT;if(a===kl)return i.UNSIGNED_SHORT;if(a===tg)return i.INT;if(a===_s)return i.UNSIGNED_INT;if(a===Vr)return i.FLOAT;if(a===ec)return i.HALF_FLOAT;if(a===Fx)return i.ALPHA;if(a===Hx)return i.RGB;if(a===ji)return i.RGBA;if(a===Gx)return i.LUMINANCE;if(a===Vx)return i.LUMINANCE_ALPHA;if(a===Wl)return i.DEPTH_COMPONENT;if(a===ql)return i.DEPTH_STENCIL;if(a===kx)return i.RED;if(a===ig)return i.RED_INTEGER;if(a===Xx)return i.RG;if(a===rg)return i.RG_INTEGER;if(a===ag)return i.RGBA_INTEGER;if(a===Ku||a===Zu||a===Qu||a===Ju)if(u===je)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Ku)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Zu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Qu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ju)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Ku)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Zu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Qu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ju)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Qp||a===Jp||a===tm||a===em)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Qp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Jp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===tm)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===em)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===nm||a===im||a===rm)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===nm||a===im)return u===je?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===rm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===am||a===sm||a===om||a===lm||a===cm||a===um||a===fm||a===dm||a===hm||a===pm||a===mm||a===gm||a===vm||a===_m)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===am)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===sm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===om)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===lm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===cm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===um)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===fm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===dm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===hm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===pm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===mm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===gm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===vm)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===_m)return u===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===tf||a===ym||a===Sm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===tf)return u===je?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===ym)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Sm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Wx||a===xm||a===bm||a===Mm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===tf)return c.COMPRESSED_RED_RGTC1_EXT;if(a===xm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===bm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Mm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Xl?i.UNSIGNED_INT_24_8:i[a]!==void 0?i[a]:null}return{convert:n}}const lN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,a){if(this.texture===null){const o=new ri,c=t.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new $r({vertexShader:lN,fragmentShader:cN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xr(new Uf(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fN extends Uo{constructor(t,n){super();const a=this;let o=null,c=1,u=null,d="local-floor",h=1,p=null,g=null,v=null,_=null,x=null,M=null;const E=new uN,b=n.getContextAttributes();let S=null,O=null;const U=[],R=[],D=new Ke;let z=null;const I=new Bi;I.viewport=new vn;const H=new Bi;H.viewport=new vn;const w=[I,H],y=new Lw;let N=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let _t=U[J];return _t===void 0&&(_t=new yp,U[J]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(J){let _t=U[J];return _t===void 0&&(_t=new yp,U[J]=_t),_t.getGripSpace()},this.getHand=function(J){let _t=U[J];return _t===void 0&&(_t=new yp,U[J]=_t),_t.getHandSpace()};function q(J){const _t=R.indexOf(J.inputSource);if(_t===-1)return;const yt=U[_t];yt!==void 0&&(yt.update(J.inputSource,J.frame,p||u),yt.dispatchEvent({type:J.type,data:J.inputSource}))}function rt(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",rt),o.removeEventListener("inputsourceschange",lt);for(let J=0;J<U.length;J++){const _t=R[J];_t!==null&&(R[J]=null,U[J].disconnect(_t))}N=null,j=null,E.reset(),t.setRenderTarget(S),x=null,_=null,v=null,o=null,O=null,Mt.stop(),a.isPresenting=!1,t.setPixelRatio(z),t.setSize(D.width,D.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(S=t.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",rt),o.addEventListener("inputsourceschange",lt),b.xrCompatible!==!0&&await n.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Rt=null,Ut=null;b.depth&&(Ut=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,yt=b.stencil?ql:Wl,Rt=b.stencil?Xl:_s);const ue={colorFormat:n.RGBA8,depthFormat:Ut,scaleFactor:c};v=new XRWebGLBinding(o,n),_=v.createProjectionLayer(ue),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),O=new ys(_.textureWidth,_.textureHeight,{format:ji,type:Yr,depthTexture:new ab(_.textureWidth,_.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const yt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,yt),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),O=new ys(x.framebufferWidth,x.framebufferHeight,{format:ji,type:Yr,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(d),Mt.setContext(o),Mt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function lt(J){for(let _t=0;_t<J.removed.length;_t++){const yt=J.removed[_t],Rt=R.indexOf(yt);Rt>=0&&(R[Rt]=null,U[Rt].disconnect(yt))}for(let _t=0;_t<J.added.length;_t++){const yt=J.added[_t];let Rt=R.indexOf(yt);if(Rt===-1){for(let ue=0;ue<U.length;ue++)if(ue>=R.length){R.push(yt),Rt=ue;break}else if(R[ue]===null){R[ue]=yt,Rt=ue;break}if(Rt===-1)break}const Ut=U[Rt];Ut&&Ut.connect(yt)}}const F=new ut,Y=new ut;function X(J,_t,yt){F.setFromMatrixPosition(_t.matrixWorld),Y.setFromMatrixPosition(yt.matrixWorld);const Rt=F.distanceTo(Y),Ut=_t.projectionMatrix.elements,ue=yt.projectionMatrix.elements,Kt=Ut[14]/(Ut[10]-1),Ue=Ut[14]/(Ut[10]+1),Ee=(Ut[9]+1)/Ut[5],de=(Ut[9]-1)/Ut[5],V=(Ut[8]-1)/Ut[0],pn=(ue[8]+1)/ue[0],he=Kt*V,$t=Kt*pn,Vt=Rt/(-V+pn),ae=Vt*-V;if(_t.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ae),J.translateZ(Vt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ut[10]===-1)J.projectionMatrix.copy(_t.projectionMatrix),J.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const Xt=Kt+Vt,B=Ue+Vt,A=he-ae,nt=$t+(Rt-ae),bt=Ee*Ue/B*Xt,At=de*Ue/B*Xt;J.projectionMatrix.makePerspective(A,nt,bt,At,Xt,B),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ht(J,_t){_t===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(_t.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let _t=J.near,yt=J.far;E.texture!==null&&(E.depthNear>0&&(_t=E.depthNear),E.depthFar>0&&(yt=E.depthFar)),y.near=H.near=I.near=_t,y.far=H.far=I.far=yt,(N!==y.near||j!==y.far)&&(o.updateRenderState({depthNear:y.near,depthFar:y.far}),N=y.near,j=y.far),I.layers.mask=J.layers.mask|2,H.layers.mask=J.layers.mask|4,y.layers.mask=I.layers.mask|H.layers.mask;const Rt=J.parent,Ut=y.cameras;ht(y,Rt);for(let ue=0;ue<Ut.length;ue++)ht(Ut[ue],Rt);Ut.length===2?X(y,I,H):y.projectionMatrix.copy(I.projectionMatrix),P(J,y,Rt)};function P(J,_t,yt){yt===null?J.matrix.copy(_t.matrixWorld):(J.matrix.copy(yt.matrixWorld),J.matrix.invert(),J.matrix.multiply(_t.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(_t.projectionMatrix),J.projectionMatrixInverse.copy(_t.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Em*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(_===null&&x===null))return h},this.setFoveation=function(J){h=J,_!==null&&(_.fixedFoveation=J),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=J)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(y)};let $=null;function pt(J,_t){if(g=_t.getViewerPose(p||u),M=_t,g!==null){const yt=g.views;x!==null&&(t.setRenderTargetFramebuffer(O,x.framebuffer),t.setRenderTarget(O));let Rt=!1;yt.length!==y.cameras.length&&(y.cameras.length=0,Rt=!0);for(let Kt=0;Kt<yt.length;Kt++){const Ue=yt[Kt];let Ee=null;if(x!==null)Ee=x.getViewport(Ue);else{const V=v.getViewSubImage(_,Ue);Ee=V.viewport,Kt===0&&(t.setRenderTargetTextures(O,V.colorTexture,V.depthStencilTexture),t.setRenderTarget(O))}let de=w[Kt];de===void 0&&(de=new Bi,de.layers.enable(Kt),de.viewport=new vn,w[Kt]=de),de.matrix.fromArray(Ue.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(Ue.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Kt===0&&(y.matrix.copy(de.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Rt===!0&&y.cameras.push(de)}const Ut=o.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const Kt=v.getDepthInformation(yt[0]);Kt&&Kt.isValid&&Kt.texture&&E.init(t,Kt,o.renderState)}}for(let yt=0;yt<U.length;yt++){const Rt=R[yt],Ut=U[yt];Rt!==null&&Ut!==void 0&&Ut.update(Rt,_t,p||u)}$&&$(J,_t),_t.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:_t}),M=null}const Mt=new sb;Mt.setAnimationLoop(pt),this.setAnimationLoop=function(J){$=J},this.dispose=function(){}}}const ss=new jr,dN=new _n;function hN(i,t){function n(b,S){b.matrixAutoUpdate===!0&&b.updateMatrix(),S.value.copy(b.matrix)}function a(b,S){S.color.getRGB(b.fogColor.value,eb(i)),S.isFog?(b.fogNear.value=S.near,b.fogFar.value=S.far):S.isFogExp2&&(b.fogDensity.value=S.density)}function o(b,S,O,U,R){S.isMeshBasicMaterial||S.isMeshLambertMaterial?c(b,S):S.isMeshToonMaterial?(c(b,S),v(b,S)):S.isMeshPhongMaterial?(c(b,S),g(b,S)):S.isMeshStandardMaterial?(c(b,S),_(b,S),S.isMeshPhysicalMaterial&&x(b,S,R)):S.isMeshMatcapMaterial?(c(b,S),M(b,S)):S.isMeshDepthMaterial?c(b,S):S.isMeshDistanceMaterial?(c(b,S),E(b,S)):S.isMeshNormalMaterial?c(b,S):S.isLineBasicMaterial?(u(b,S),S.isLineDashedMaterial&&d(b,S)):S.isPointsMaterial?h(b,S,O,U):S.isSpriteMaterial?p(b,S):S.isShadowMaterial?(b.color.value.copy(S.color),b.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(b,S){b.opacity.value=S.opacity,S.color&&b.diffuse.value.copy(S.color),S.emissive&&b.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(b.map.value=S.map,n(S.map,b.mapTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,n(S.alphaMap,b.alphaMapTransform)),S.bumpMap&&(b.bumpMap.value=S.bumpMap,n(S.bumpMap,b.bumpMapTransform),b.bumpScale.value=S.bumpScale,S.side===ii&&(b.bumpScale.value*=-1)),S.normalMap&&(b.normalMap.value=S.normalMap,n(S.normalMap,b.normalMapTransform),b.normalScale.value.copy(S.normalScale),S.side===ii&&b.normalScale.value.negate()),S.displacementMap&&(b.displacementMap.value=S.displacementMap,n(S.displacementMap,b.displacementMapTransform),b.displacementScale.value=S.displacementScale,b.displacementBias.value=S.displacementBias),S.emissiveMap&&(b.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,b.emissiveMapTransform)),S.specularMap&&(b.specularMap.value=S.specularMap,n(S.specularMap,b.specularMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest);const O=t.get(S),U=O.envMap,R=O.envMapRotation;U&&(b.envMap.value=U,ss.copy(R),ss.x*=-1,ss.y*=-1,ss.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),b.envMapRotation.value.setFromMatrix4(dN.makeRotationFromEuler(ss)),b.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=S.reflectivity,b.ior.value=S.ior,b.refractionRatio.value=S.refractionRatio),S.lightMap&&(b.lightMap.value=S.lightMap,b.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,b.lightMapTransform)),S.aoMap&&(b.aoMap.value=S.aoMap,b.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,b.aoMapTransform))}function u(b,S){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,S.map&&(b.map.value=S.map,n(S.map,b.mapTransform))}function d(b,S){b.dashSize.value=S.dashSize,b.totalSize.value=S.dashSize+S.gapSize,b.scale.value=S.scale}function h(b,S,O,U){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,b.size.value=S.size*O,b.scale.value=U*.5,S.map&&(b.map.value=S.map,n(S.map,b.uvTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,n(S.alphaMap,b.alphaMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest)}function p(b,S){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,b.rotation.value=S.rotation,S.map&&(b.map.value=S.map,n(S.map,b.mapTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,n(S.alphaMap,b.alphaMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest)}function g(b,S){b.specular.value.copy(S.specular),b.shininess.value=Math.max(S.shininess,1e-4)}function v(b,S){S.gradientMap&&(b.gradientMap.value=S.gradientMap)}function _(b,S){b.metalness.value=S.metalness,S.metalnessMap&&(b.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,b.metalnessMapTransform)),b.roughness.value=S.roughness,S.roughnessMap&&(b.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,b.roughnessMapTransform)),S.envMap&&(b.envMapIntensity.value=S.envMapIntensity)}function x(b,S,O){b.ior.value=S.ior,S.sheen>0&&(b.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),b.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(b.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,b.sheenColorMapTransform)),S.sheenRoughnessMap&&(b.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,b.sheenRoughnessMapTransform))),S.clearcoat>0&&(b.clearcoat.value=S.clearcoat,b.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(b.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,b.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(b.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ii&&b.clearcoatNormalScale.value.negate())),S.dispersion>0&&(b.dispersion.value=S.dispersion),S.iridescence>0&&(b.iridescence.value=S.iridescence,b.iridescenceIOR.value=S.iridescenceIOR,b.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(b.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,b.iridescenceMapTransform)),S.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),S.transmission>0&&(b.transmission.value=S.transmission,b.transmissionSamplerMap.value=O.texture,b.transmissionSamplerSize.value.set(O.width,O.height),S.transmissionMap&&(b.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,b.transmissionMapTransform)),b.thickness.value=S.thickness,S.thicknessMap&&(b.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=S.attenuationDistance,b.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(b.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(b.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=S.specularIntensity,b.specularColor.value.copy(S.specularColor),S.specularColorMap&&(b.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,b.specularColorMapTransform)),S.specularIntensityMap&&(b.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,b.specularIntensityMapTransform))}function M(b,S){S.matcap&&(b.matcap.value=S.matcap)}function E(b,S){const O=t.get(S).light;b.referencePosition.value.setFromMatrixPosition(O.matrixWorld),b.nearDistance.value=O.shadow.camera.near,b.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function pN(i,t,n,a){let o={},c={},u=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(O,U){const R=U.program;a.uniformBlockBinding(O,R)}function p(O,U){let R=o[O.id];R===void 0&&(M(O),R=g(O),o[O.id]=R,O.addEventListener("dispose",b));const D=U.program;a.updateUBOMapping(O,D);const z=t.render.frame;c[O.id]!==z&&(_(O),c[O.id]=z)}function g(O){const U=v();O.__bindingPointIndex=U;const R=i.createBuffer(),D=O.__size,z=O.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,D,z),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,U,R),R}function v(){for(let O=0;O<d;O++)if(u.indexOf(O)===-1)return u.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const U=o[O.id],R=O.uniforms,D=O.__cache;i.bindBuffer(i.UNIFORM_BUFFER,U);for(let z=0,I=R.length;z<I;z++){const H=Array.isArray(R[z])?R[z]:[R[z]];for(let w=0,y=H.length;w<y;w++){const N=H[w];if(x(N,z,w,D)===!0){const j=N.__offset,q=Array.isArray(N.value)?N.value:[N.value];let rt=0;for(let lt=0;lt<q.length;lt++){const F=q[lt],Y=E(F);typeof F=="number"||typeof F=="boolean"?(N.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,j+rt,N.__data)):F.isMatrix3?(N.__data[0]=F.elements[0],N.__data[1]=F.elements[1],N.__data[2]=F.elements[2],N.__data[3]=0,N.__data[4]=F.elements[3],N.__data[5]=F.elements[4],N.__data[6]=F.elements[5],N.__data[7]=0,N.__data[8]=F.elements[6],N.__data[9]=F.elements[7],N.__data[10]=F.elements[8],N.__data[11]=0):(F.toArray(N.__data,rt),rt+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(O,U,R,D){const z=O.value,I=U+"_"+R;if(D[I]===void 0)return typeof z=="number"||typeof z=="boolean"?D[I]=z:D[I]=z.clone(),!0;{const H=D[I];if(typeof z=="number"||typeof z=="boolean"){if(H!==z)return D[I]=z,!0}else if(H.equals(z)===!1)return H.copy(z),!0}return!1}function M(O){const U=O.uniforms;let R=0;const D=16;for(let I=0,H=U.length;I<H;I++){const w=Array.isArray(U[I])?U[I]:[U[I]];for(let y=0,N=w.length;y<N;y++){const j=w[y],q=Array.isArray(j.value)?j.value:[j.value];for(let rt=0,lt=q.length;rt<lt;rt++){const F=q[rt],Y=E(F),X=R%D,ht=X%Y.boundary,P=X+ht;R+=ht,P!==0&&D-P<Y.storage&&(R+=D-P),j.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=R,R+=Y.storage}}}const z=R%D;return z>0&&(R+=D-z),O.__size=R,O.__cache={},this}function E(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function b(O){const U=O.target;U.removeEventListener("dispose",b);const R=u.indexOf(U.__bindingPointIndex);u.splice(R,1),i.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function S(){for(const O in o)i.deleteBuffer(o[O]);u=[],o={},c={}}return{bind:h,update:p,dispose:S}}class mN{constructor(t={}){const{canvas:n=K2(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),E=new Int32Array(4);let b=null,S=null;const O=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1;this._outputColorSpace=Oi;let z=0,I=0,H=null,w=-1,y=null;const N=new vn,j=new vn;let q=null;const rt=new He(0);let lt=0,F=n.width,Y=n.height,X=1,ht=null,P=null;const $=new vn(0,0,F,Y),pt=new vn(0,0,F,Y);let Mt=!1;const J=new rb;let _t=!1,yt=!1;const Rt=new _n,Ut=new _n,ue=new ut,Kt=new vn,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function de(){return H===null?X:1}let V=a;function pn(L,Z){return n.getContext(L,Z)}try{const L={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jm}`),n.addEventListener("webglcontextlost",xt,!1),n.addEventListener("webglcontextrestored",kt,!1),n.addEventListener("webglcontextcreationerror",It,!1),V===null){const Z="webgl2";if(V=pn(Z,L),V===null)throw pn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let he,$t,Vt,ae,Xt,B,A,nt,bt,At,gt,Ft,wt,Dt,ee,Et,Pt,qt,Yt,Nt,pe,oe,Pe,W;function Bt(){he=new TU(V),he.init(),oe=new oN(V,he),$t=new _U(V,he,t,oe),Vt=new aN(V,he),$t.reverseDepthBuffer&&_&&Vt.buffers.depth.setReversed(!0),ae=new CU(V),Xt=new qL,B=new sN(V,he,Vt,Xt,$t,oe,ae),A=new SU(R),nt=new EU(R),bt=new Ow(V),Pe=new gU(V,bt),At=new AU(V,bt,ae,Pe),gt=new DU(V,At,bt,ae),Yt=new wU(V,$t,B),Et=new yU(Xt),Ft=new WL(R,A,nt,he,$t,Pe,Et),wt=new hN(R,Xt),Dt=new jL,ee=new tN(he),qt=new mU(R,A,nt,Vt,gt,x,h),Pt=new iN(R,gt,$t),W=new pN(V,ae,$t,Vt),Nt=new vU(V,he,ae),pe=new RU(V,he,ae),ae.programs=Ft.programs,R.capabilities=$t,R.extensions=he,R.properties=Xt,R.renderLists=Dt,R.shadowMap=Pt,R.state=Vt,R.info=ae}Bt();const ft=new fN(R,V);this.xr=ft,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const L=he.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=he.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(L){L!==void 0&&(X=L,this.setSize(F,Y,!1))},this.getSize=function(L){return L.set(F,Y)},this.setSize=function(L,Z,st=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=L,Y=Z,n.width=Math.floor(L*X),n.height=Math.floor(Z*X),st===!0&&(n.style.width=L+"px",n.style.height=Z+"px"),this.setViewport(0,0,L,Z)},this.getDrawingBufferSize=function(L){return L.set(F*X,Y*X).floor()},this.setDrawingBufferSize=function(L,Z,st){F=L,Y=Z,X=st,n.width=Math.floor(L*st),n.height=Math.floor(Z*st),this.setViewport(0,0,L,Z)},this.getCurrentViewport=function(L){return L.copy(N)},this.getViewport=function(L){return L.copy($)},this.setViewport=function(L,Z,st,ct){L.isVector4?$.set(L.x,L.y,L.z,L.w):$.set(L,Z,st,ct),Vt.viewport(N.copy($).multiplyScalar(X).round())},this.getScissor=function(L){return L.copy(pt)},this.setScissor=function(L,Z,st,ct){L.isVector4?pt.set(L.x,L.y,L.z,L.w):pt.set(L,Z,st,ct),Vt.scissor(j.copy(pt).multiplyScalar(X).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(L){Vt.setScissorTest(Mt=L)},this.setOpaqueSort=function(L){ht=L},this.setTransparentSort=function(L){P=L},this.getClearColor=function(L){return L.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(L=!0,Z=!0,st=!0){let ct=0;if(L){let Q=!1;if(H!==null){const Ct=H.texture.format;Q=Ct===ag||Ct===rg||Ct===ig}if(Q){const Ct=H.texture.type,Ot=Ct===Yr||Ct===_s||Ct===kl||Ct===Xl||Ct===eg||Ct===ng,Ht=qt.getClearColor(),Wt=qt.getClearAlpha(),le=Ht.r,Jt=Ht.g,Qt=Ht.b;Ot?(M[0]=le,M[1]=Jt,M[2]=Qt,M[3]=Wt,V.clearBufferuiv(V.COLOR,0,M)):(E[0]=le,E[1]=Jt,E[2]=Qt,E[3]=Wt,V.clearBufferiv(V.COLOR,0,E))}else ct|=V.COLOR_BUFFER_BIT}Z&&(ct|=V.DEPTH_BUFFER_BIT),st&&(ct|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",xt,!1),n.removeEventListener("webglcontextrestored",kt,!1),n.removeEventListener("webglcontextcreationerror",It,!1),qt.dispose(),Dt.dispose(),ee.dispose(),Xt.dispose(),A.dispose(),nt.dispose(),gt.dispose(),Pe.dispose(),W.dispose(),Ft.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",ne),ft.removeEventListener("sessionend",se),Se.stop()};function xt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const L=ae.autoReset,Z=Pt.enabled,st=Pt.autoUpdate,ct=Pt.needsUpdate,Q=Pt.type;Bt(),ae.autoReset=L,Pt.enabled=Z,Pt.autoUpdate=st,Pt.needsUpdate=ct,Pt.type=Q}function It(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function fe(L){const Z=L.target;Z.removeEventListener("dispose",fe),ke(Z)}function ke(L){ln(L),Xt.remove(L)}function ln(L){const Z=Xt.get(L).programs;Z!==void 0&&(Z.forEach(function(st){Ft.releaseProgram(st)}),L.isShaderMaterial&&Ft.releaseShaderCache(L))}this.renderBufferDirect=function(L,Z,st,ct,Q,Ct){Z===null&&(Z=Ue);const Ot=Q.isMesh&&Q.matrixWorld.determinant()<0,Ht=za(L,Z,st,ct,Q);Vt.setMaterial(ct,Ot);let Wt=st.index,le=1;if(ct.wireframe===!0){if(Wt=At.getWireframeAttribute(st),Wt===void 0)return;le=2}const Jt=st.drawRange,Qt=st.attributes.position;let xe=Jt.start*le,Le=(Jt.start+Jt.count)*le;Ct!==null&&(xe=Math.max(xe,Ct.start*le),Le=Math.min(Le,(Ct.start+Ct.count)*le)),Wt!==null?(xe=Math.max(xe,0),Le=Math.min(Le,Wt.count)):Qt!=null&&(xe=Math.max(xe,0),Le=Math.min(Le,Qt.count));const sn=Le-xe;if(sn<0||sn===1/0)return;Pe.setup(Q,ct,Ht,st,Wt);let Te,Ae=Nt;if(Wt!==null&&(Te=bt.get(Wt),Ae=pe,Ae.setIndex(Te)),Q.isMesh)ct.wireframe===!0?(Vt.setLineWidth(ct.wireframeLinewidth*de()),Ae.setMode(V.LINES)):Ae.setMode(V.TRIANGLES);else if(Q.isLine){let te=ct.linewidth;te===void 0&&(te=1),Vt.setLineWidth(te*de()),Q.isLineSegments?Ae.setMode(V.LINES):Q.isLineLoop?Ae.setMode(V.LINE_LOOP):Ae.setMode(V.LINE_STRIP)}else Q.isPoints?Ae.setMode(V.POINTS):Q.isSprite&&Ae.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)ef("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))Ae.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const te=Q._multiDrawStarts,cn=Q._multiDrawCounts,De=Q._multiDrawCount,Vn=Wt?bt.get(Wt).bytesPerElement:1,Jr=Xt.get(ct).currentProgram.getUniforms();for(let en=0;en<De;en++)Jr.setValue(V,"_gl_DrawID",en),Ae.render(te[en]/Vn,cn[en])}else if(Q.isInstancedMesh)Ae.renderInstances(xe,sn,Q.count);else if(st.isInstancedBufferGeometry){const te=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,cn=Math.min(st.instanceCount,te);Ae.renderInstances(xe,sn,cn)}else Ae.render(xe,sn)};function Ce(L,Z,st){L.transparent===!0&&L.side===Gr&&L.forceSinglePass===!1?(L.side=ii,L.needsUpdate=!0,Zr(L,Z,st),L.side=Ba,L.needsUpdate=!0,Zr(L,Z,st),L.side=Gr):Zr(L,Z,st)}this.compile=function(L,Z,st=null){st===null&&(st=L),S=ee.get(st),S.init(Z),U.push(S),st.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),L!==st&&L.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),S.setupLights();const ct=new Set;return L.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ct=Q.material;if(Ct)if(Array.isArray(Ct))for(let Ot=0;Ot<Ct.length;Ot++){const Ht=Ct[Ot];Ce(Ht,st,Q),ct.add(Ht)}else Ce(Ct,st,Q),ct.add(Ct)}),S=U.pop(),ct},this.compileAsync=function(L,Z,st=null){const ct=this.compile(L,Z,st);return new Promise(Q=>{function Ct(){if(ct.forEach(function(Ot){Xt.get(Ot).currentProgram.isReady()&&ct.delete(Ot)}),ct.size===0){Q(L);return}setTimeout(Ct,10)}he.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Lt=null;function zt(L){Lt&&Lt(L)}function ne(){Se.stop()}function se(){Se.start()}const Se=new sb;Se.setAnimationLoop(zt),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(L){Lt=L,ft.setAnimationLoop(L),L===null?Se.stop():Se.start()},ft.addEventListener("sessionstart",ne),ft.addEventListener("sessionend",se),this.render=function(L,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(Z),Z=ft.getCamera()),L.isScene===!0&&L.onBeforeRender(R,L,Z,H),S=ee.get(L,U.length),S.init(Z),U.push(S),Ut.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),J.setFromProjectionMatrix(Ut),yt=this.localClippingEnabled,_t=Et.init(this.clippingPlanes,yt),b=Dt.get(L,O.length),b.init(),O.push(b),ft.enabled===!0&&ft.isPresenting===!0){const Ct=R.xr.getDepthSensingMesh();Ct!==null&&Un(Ct,Z,-1/0,R.sortObjects)}Un(L,Z,0,R.sortObjects),b.finish(),R.sortObjects===!0&&b.sort(ht,P),Ee=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Ee&&qt.addToRenderList(b,L),this.info.render.frame++,_t===!0&&Et.beginShadows();const st=S.state.shadowsArray;Pt.render(st,L,Z),_t===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=b.opaque,Q=b.transmissive;if(S.setupLights(),Z.isArrayCamera){const Ct=Z.cameras;if(Q.length>0)for(let Ot=0,Ht=Ct.length;Ot<Ht;Ot++){const Wt=Ct[Ot];Qi(ct,Q,L,Wt)}Ee&&qt.render(L);for(let Ot=0,Ht=Ct.length;Ot<Ht;Ot++){const Wt=Ct[Ot];bi(b,L,Wt,Wt.viewport)}}else Q.length>0&&Qi(ct,Q,L,Z),Ee&&qt.render(L),bi(b,L,Z);H!==null&&I===0&&(B.updateMultisampleRenderTarget(H),B.updateRenderTargetMipmap(H)),L.isScene===!0&&L.onAfterRender(R,L,Z),Pe.resetDefaultState(),w=-1,y=null,U.pop(),U.length>0?(S=U[U.length-1],_t===!0&&Et.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,O.pop(),O.length>0?b=O[O.length-1]:b=null};function Un(L,Z,st,ct){if(L.visible===!1)return;if(L.layers.test(Z.layers)){if(L.isGroup)st=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Z);else if(L.isLight)S.pushLight(L),L.castShadow&&S.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||J.intersectsSprite(L)){ct&&Kt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ut);const Ot=gt.update(L),Ht=L.material;Ht.visible&&b.push(L,Ot,Ht,st,Kt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||J.intersectsObject(L))){const Ot=gt.update(L),Ht=L.material;if(ct&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Kt.copy(L.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Kt.copy(Ot.boundingSphere.center)),Kt.applyMatrix4(L.matrixWorld).applyMatrix4(Ut)),Array.isArray(Ht)){const Wt=Ot.groups;for(let le=0,Jt=Wt.length;le<Jt;le++){const Qt=Wt[le],xe=Ht[Qt.materialIndex];xe&&xe.visible&&b.push(L,Ot,xe,st,Kt.z,Qt)}}else Ht.visible&&b.push(L,Ot,Ht,st,Kt.z,null)}}const Ct=L.children;for(let Ot=0,Ht=Ct.length;Ot<Ht;Ot++)Un(Ct[Ot],Z,st,ct)}function bi(L,Z,st,ct){const Q=L.opaque,Ct=L.transmissive,Ot=L.transparent;S.setupLightsView(st),_t===!0&&Et.setGlobalState(R.clippingPlanes,st),ct&&Vt.viewport(N.copy(ct)),Q.length>0&&Ji(Q,Z,st),Ct.length>0&&Ji(Ct,Z,st),Ot.length>0&&Ji(Ot,Z,st),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Qi(L,Z,st,ct){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[ct.id]===void 0&&(S.state.transmissionRenderTarget[ct.id]=new ys(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?ec:Yr,minFilter:ps,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const Ct=S.state.transmissionRenderTarget[ct.id],Ot=ct.viewport||N;Ct.setSize(Ot.z*R.transmissionResolutionScale,Ot.w*R.transmissionResolutionScale);const Ht=R.getRenderTarget();R.setRenderTarget(Ct),R.getClearColor(rt),lt=R.getClearAlpha(),lt<1&&R.setClearColor(16777215,.5),R.clear(),Ee&&qt.render(st);const Wt=R.toneMapping;R.toneMapping=Na;const le=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),S.setupLightsView(ct),_t===!0&&Et.setGlobalState(R.clippingPlanes,ct),Ji(L,st,ct),B.updateMultisampleRenderTarget(Ct),B.updateRenderTargetMipmap(Ct),he.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Qt=0,xe=Z.length;Qt<xe;Qt++){const Le=Z[Qt],sn=Le.object,Te=Le.geometry,Ae=Le.material,te=Le.group;if(Ae.side===Gr&&sn.layers.test(ct.layers)){const cn=Ae.side;Ae.side=ii,Ae.needsUpdate=!0,Mi(sn,st,ct,Te,Ae,te),Ae.side=cn,Ae.needsUpdate=!0,Jt=!0}}Jt===!0&&(B.updateMultisampleRenderTarget(Ct),B.updateRenderTargetMipmap(Ct))}R.setRenderTarget(Ht),R.setClearColor(rt,lt),le!==void 0&&(ct.viewport=le),R.toneMapping=Wt}function Ji(L,Z,st){const ct=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Ct=L.length;Q<Ct;Q++){const Ot=L[Q],Ht=Ot.object,Wt=Ot.geometry,le=Ot.group;let Jt=Ot.material;Jt.allowOverride===!0&&ct!==null&&(Jt=ct),Ht.layers.test(st.layers)&&Mi(Ht,Z,st,Wt,Jt,le)}}function Mi(L,Z,st,ct,Q,Ct){L.onBeforeRender(R,Z,st,ct,Q,Ct),L.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Q.onBeforeRender(R,Z,st,ct,L,Ct),Q.transparent===!0&&Q.side===Gr&&Q.forceSinglePass===!1?(Q.side=ii,Q.needsUpdate=!0,R.renderBufferDirect(st,Z,ct,Q,L,Ct),Q.side=Ba,Q.needsUpdate=!0,R.renderBufferDirect(st,Z,ct,Q,L,Ct),Q.side=Gr):R.renderBufferDirect(st,Z,ct,Q,L,Ct),L.onAfterRender(R,Z,st,ct,Q,Ct)}function Zr(L,Z,st){Z.isScene!==!0&&(Z=Ue);const ct=Xt.get(L),Q=S.state.lights,Ct=S.state.shadowsArray,Ot=Q.state.version,Ht=Ft.getParameters(L,Q.state,Ct,Z,st),Wt=Ft.getProgramCacheKey(Ht);let le=ct.programs;ct.environment=L.isMeshStandardMaterial?Z.environment:null,ct.fog=Z.fog,ct.envMap=(L.isMeshStandardMaterial?nt:A).get(L.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&L.envMap===null?Z.environmentRotation:L.envMapRotation,le===void 0&&(L.addEventListener("dispose",fe),le=new Map,ct.programs=le);let Jt=le.get(Wt);if(Jt!==void 0){if(ct.currentProgram===Jt&&ct.lightsStateVersion===Ot)return mr(L,Ht),Jt}else Ht.uniforms=Ft.getUniforms(L),L.onBeforeCompile(Ht,R),Jt=Ft.acquireProgram(Ht,Wt),le.set(Wt,Jt),ct.uniforms=Ht.uniforms;const Qt=ct.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Qt.clippingPlanes=Et.uniform),mr(L,Ht),ct.needsLights=Sn(L),ct.lightsStateVersion=Ot,ct.needsLights&&(Qt.ambientLightColor.value=Q.state.ambient,Qt.lightProbe.value=Q.state.probe,Qt.directionalLights.value=Q.state.directional,Qt.directionalLightShadows.value=Q.state.directionalShadow,Qt.spotLights.value=Q.state.spot,Qt.spotLightShadows.value=Q.state.spotShadow,Qt.rectAreaLights.value=Q.state.rectArea,Qt.ltc_1.value=Q.state.rectAreaLTC1,Qt.ltc_2.value=Q.state.rectAreaLTC2,Qt.pointLights.value=Q.state.point,Qt.pointLightShadows.value=Q.state.pointShadow,Qt.hemisphereLights.value=Q.state.hemi,Qt.directionalShadowMap.value=Q.state.directionalShadowMap,Qt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Qt.spotShadowMap.value=Q.state.spotShadowMap,Qt.spotLightMatrix.value=Q.state.spotLightMatrix,Qt.spotLightMap.value=Q.state.spotLightMap,Qt.pointShadowMap.value=Q.state.pointShadowMap,Qt.pointShadowMatrix.value=Q.state.pointShadowMatrix),ct.currentProgram=Jt,ct.uniformsList=null,Jt}function pr(L){if(L.uniformsList===null){const Z=L.currentProgram.getUniforms();L.uniformsList=nf.seqWithValue(Z.seq,L.uniforms)}return L.uniformsList}function mr(L,Z){const st=Xt.get(L);st.outputColorSpace=Z.outputColorSpace,st.batching=Z.batching,st.batchingColor=Z.batchingColor,st.instancing=Z.instancing,st.instancingColor=Z.instancingColor,st.instancingMorph=Z.instancingMorph,st.skinning=Z.skinning,st.morphTargets=Z.morphTargets,st.morphNormals=Z.morphNormals,st.morphColors=Z.morphColors,st.morphTargetsCount=Z.morphTargetsCount,st.numClippingPlanes=Z.numClippingPlanes,st.numIntersection=Z.numClipIntersection,st.vertexAlphas=Z.vertexAlphas,st.vertexTangents=Z.vertexTangents,st.toneMapping=Z.toneMapping}function za(L,Z,st,ct,Q){Z.isScene!==!0&&(Z=Ue),B.resetTextureUnits();const Ct=Z.fog,Ot=ct.isMeshStandardMaterial?Z.environment:null,Ht=H===null?R.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ro,Wt=(ct.isMeshStandardMaterial?nt:A).get(ct.envMap||Ot),le=ct.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Jt=!!st.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Qt=!!st.morphAttributes.position,xe=!!st.morphAttributes.normal,Le=!!st.morphAttributes.color;let sn=Na;ct.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(sn=R.toneMapping);const Te=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ae=Te!==void 0?Te.length:0,te=Xt.get(ct),cn=S.state.lights;if(_t===!0&&(yt===!0||L!==y)){const Ln=L===y&&ct.id===w;Et.setState(ct,L,Ln)}let De=!1;ct.version===te.__version?(te.needsLights&&te.lightsStateVersion!==cn.state.version||te.outputColorSpace!==Ht||Q.isBatchedMesh&&te.batching===!1||!Q.isBatchedMesh&&te.batching===!0||Q.isBatchedMesh&&te.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&te.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&te.instancing===!1||!Q.isInstancedMesh&&te.instancing===!0||Q.isSkinnedMesh&&te.skinning===!1||!Q.isSkinnedMesh&&te.skinning===!0||Q.isInstancedMesh&&te.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&te.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&te.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&te.instancingMorph===!1&&Q.morphTexture!==null||te.envMap!==Wt||ct.fog===!0&&te.fog!==Ct||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Et.numPlanes||te.numIntersection!==Et.numIntersection)||te.vertexAlphas!==le||te.vertexTangents!==Jt||te.morphTargets!==Qt||te.morphNormals!==xe||te.morphColors!==Le||te.toneMapping!==sn||te.morphTargetsCount!==Ae)&&(De=!0):(De=!0,te.__version=ct.version);let Vn=te.currentProgram;De===!0&&(Vn=Zr(ct,Z,Q));let Jr=!1,en=!1,vr=!1;const Ze=Vn.getUniforms(),kn=te.uniforms;if(Vt.useProgram(Vn.program)&&(Jr=!0,en=!0,vr=!0),ct.id!==w&&(w=ct.id,en=!0),Jr||y!==L){Vt.buffers.depth.getReversed()?(Rt.copy(L.projectionMatrix),Q2(Rt),J2(Rt),Ze.setValue(V,"projectionMatrix",Rt)):Ze.setValue(V,"projectionMatrix",L.projectionMatrix),Ze.setValue(V,"viewMatrix",L.matrixWorldInverse);const In=Ze.map.cameraPosition;In!==void 0&&In.setValue(V,ue.setFromMatrixPosition(L.matrixWorld)),$t.logarithmicDepthBuffer&&Ze.setValue(V,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Ze.setValue(V,"isOrthographic",L.isOrthographicCamera===!0),y!==L&&(y=L,en=!0,vr=!0)}if(Q.isSkinnedMesh){Ze.setOptional(V,Q,"bindMatrix"),Ze.setOptional(V,Q,"bindMatrixInverse");const Ln=Q.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),Ze.setValue(V,"boneTexture",Ln.boneTexture,B))}Q.isBatchedMesh&&(Ze.setOptional(V,Q,"batchingTexture"),Ze.setValue(V,"batchingTexture",Q._matricesTexture,B),Ze.setOptional(V,Q,"batchingIdTexture"),Ze.setValue(V,"batchingIdTexture",Q._indirectTexture,B),Ze.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ze.setValue(V,"batchingColorTexture",Q._colorsTexture,B));const Tn=st.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Yt.update(Q,st,Vn),(en||te.receiveShadow!==Q.receiveShadow)&&(te.receiveShadow=Q.receiveShadow,Ze.setValue(V,"receiveShadow",Q.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(kn.envMap.value=Wt,kn.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&Z.environment!==null&&(kn.envMapIntensity.value=Z.environmentIntensity),en&&(Ze.setValue(V,"toneMappingExposure",R.toneMappingExposure),te.needsLights&&Qr(kn,vr),Ct&&ct.fog===!0&&wt.refreshFogUniforms(kn,Ct),wt.refreshMaterialUniforms(kn,ct,X,Y,S.state.transmissionRenderTarget[L.id]),nf.upload(V,pr(te),kn,B)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(nf.upload(V,pr(te),kn,B),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Ze.setValue(V,"center",Q.center),Ze.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Ze.setValue(V,"normalMatrix",Q.normalMatrix),Ze.setValue(V,"modelMatrix",Q.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const Ln=ct.uniformsGroups;for(let In=0,tr=Ln.length;In<tr;In++){const _r=Ln[In];W.update(_r,Vn),W.bind(_r,Vn)}}return Vn}function Qr(L,Z){L.ambientLightColor.needsUpdate=Z,L.lightProbe.needsUpdate=Z,L.directionalLights.needsUpdate=Z,L.directionalLightShadows.needsUpdate=Z,L.pointLights.needsUpdate=Z,L.pointLightShadows.needsUpdate=Z,L.spotLights.needsUpdate=Z,L.spotLightShadows.needsUpdate=Z,L.rectAreaLights.needsUpdate=Z,L.hemisphereLights.needsUpdate=Z}function Sn(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(L,Z,st){const ct=Xt.get(L);ct.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),Xt.get(L.texture).__webglTexture=Z,Xt.get(L.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:st,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Z){const st=Xt.get(L);st.__webglFramebuffer=Z,st.__useDefaultFramebuffer=Z===void 0};const oc=V.createFramebuffer();this.setRenderTarget=function(L,Z=0,st=0){H=L,z=Z,I=st;let ct=!0,Q=null,Ct=!1,Ot=!1;if(L){const Wt=Xt.get(L);if(Wt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(V.FRAMEBUFFER,null),ct=!1;else if(Wt.__webglFramebuffer===void 0)B.setupRenderTarget(L);else if(Wt.__hasExternalTextures)B.rebindTextures(L,Xt.get(L.texture).__webglTexture,Xt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Qt=L.depthTexture;if(Wt.__boundDepthTexture!==Qt){if(Qt!==null&&Xt.has(Qt)&&(L.width!==Qt.image.width||L.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(L)}}const le=L.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(Ot=!0);const Jt=Xt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Jt[Z])?Q=Jt[Z][st]:Q=Jt[Z],Ct=!0):L.samples>0&&B.useMultisampledRTT(L)===!1?Q=Xt.get(L).__webglMultisampledFramebuffer:Array.isArray(Jt)?Q=Jt[st]:Q=Jt,N.copy(L.viewport),j.copy(L.scissor),q=L.scissorTest}else N.copy($).multiplyScalar(X).floor(),j.copy(pt).multiplyScalar(X).floor(),q=Mt;if(st!==0&&(Q=oc),Vt.bindFramebuffer(V.FRAMEBUFFER,Q)&&ct&&Vt.drawBuffers(L,Q),Vt.viewport(N),Vt.scissor(j),Vt.setScissorTest(q),Ct){const Wt=Xt.get(L.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Wt.__webglTexture,st)}else if(Ot){const Wt=Xt.get(L.texture),le=Z;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Wt.__webglTexture,st,le)}else if(L!==null&&st!==0){const Wt=Xt.get(L.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Wt.__webglTexture,st)}w=-1},this.readRenderTargetPixels=function(L,Z,st,ct,Q,Ct,Ot){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=Xt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ot!==void 0&&(Ht=Ht[Ot]),Ht){Vt.bindFramebuffer(V.FRAMEBUFFER,Ht);try{const Wt=L.texture,le=Wt.format,Jt=Wt.type;if(!$t.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=L.width-ct&&st>=0&&st<=L.height-Q&&V.readPixels(Z,st,ct,Q,oe.convert(le),oe.convert(Jt),Ct)}finally{const Wt=H!==null?Xt.get(H).__webglFramebuffer:null;Vt.bindFramebuffer(V.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(L,Z,st,ct,Q,Ct,Ot){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=Xt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ot!==void 0&&(Ht=Ht[Ot]),Ht)if(Z>=0&&Z<=L.width-ct&&st>=0&&st<=L.height-Q){Vt.bindFramebuffer(V.FRAMEBUFFER,Ht);const Wt=L.texture,le=Wt.format,Jt=Wt.type;if(!$t.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Qt),V.bufferData(V.PIXEL_PACK_BUFFER,Ct.byteLength,V.STREAM_READ),V.readPixels(Z,st,ct,Q,oe.convert(le),oe.convert(Jt),0);const xe=H!==null?Xt.get(H).__webglFramebuffer:null;Vt.bindFramebuffer(V.FRAMEBUFFER,xe);const Le=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Z2(V,Le,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Qt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ct),V.deleteBuffer(Qt),V.deleteSync(Le),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Z=null,st=0){const ct=Math.pow(2,-st),Q=Math.floor(L.image.width*ct),Ct=Math.floor(L.image.height*ct),Ot=Z!==null?Z.x:0,Ht=Z!==null?Z.y:0;B.setTexture2D(L,0),V.copyTexSubImage2D(V.TEXTURE_2D,st,0,0,Ot,Ht,Q,Ct),Vt.unbindTexture()};const lc=V.createFramebuffer(),gr=V.createFramebuffer();this.copyTextureToTexture=function(L,Z,st=null,ct=null,Q=0,Ct=null){Ct===null&&(Q!==0?(ef("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ct=Q,Q=0):Ct=0);let Ot,Ht,Wt,le,Jt,Qt,xe,Le,sn;const Te=L.isCompressedTexture?L.mipmaps[Ct]:L.image;if(st!==null)Ot=st.max.x-st.min.x,Ht=st.max.y-st.min.y,Wt=st.isBox3?st.max.z-st.min.z:1,le=st.min.x,Jt=st.min.y,Qt=st.isBox3?st.min.z:0;else{const Tn=Math.pow(2,-Q);Ot=Math.floor(Te.width*Tn),Ht=Math.floor(Te.height*Tn),L.isDataArrayTexture?Wt=Te.depth:L.isData3DTexture?Wt=Math.floor(Te.depth*Tn):Wt=1,le=0,Jt=0,Qt=0}ct!==null?(xe=ct.x,Le=ct.y,sn=ct.z):(xe=0,Le=0,sn=0);const Ae=oe.convert(Z.format),te=oe.convert(Z.type);let cn;Z.isData3DTexture?(B.setTexture3D(Z,0),cn=V.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(B.setTexture2DArray(Z,0),cn=V.TEXTURE_2D_ARRAY):(B.setTexture2D(Z,0),cn=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const De=V.getParameter(V.UNPACK_ROW_LENGTH),Vn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Jr=V.getParameter(V.UNPACK_SKIP_PIXELS),en=V.getParameter(V.UNPACK_SKIP_ROWS),vr=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Te.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Te.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,le),V.pixelStorei(V.UNPACK_SKIP_ROWS,Jt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qt);const Ze=L.isDataArrayTexture||L.isData3DTexture,kn=Z.isDataArrayTexture||Z.isData3DTexture;if(L.isDepthTexture){const Tn=Xt.get(L),Ln=Xt.get(Z),In=Xt.get(Tn.__renderTarget),tr=Xt.get(Ln.__renderTarget);Vt.bindFramebuffer(V.READ_FRAMEBUFFER,In.__webglFramebuffer),Vt.bindFramebuffer(V.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let _r=0;_r<Wt;_r++)Ze&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xt.get(L).__webglTexture,Q,Qt+_r),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xt.get(Z).__webglTexture,Ct,sn+_r)),V.blitFramebuffer(le,Jt,Ot,Ht,xe,Le,Ot,Ht,V.DEPTH_BUFFER_BIT,V.NEAREST);Vt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||L.isRenderTargetTexture||Xt.has(L)){const Tn=Xt.get(L),Ln=Xt.get(Z);Vt.bindFramebuffer(V.READ_FRAMEBUFFER,lc),Vt.bindFramebuffer(V.DRAW_FRAMEBUFFER,gr);for(let In=0;In<Wt;In++)Ze?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Tn.__webglTexture,Q,Qt+In):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Tn.__webglTexture,Q),kn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ln.__webglTexture,Ct,sn+In):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ln.__webglTexture,Ct),Q!==0?V.blitFramebuffer(le,Jt,Ot,Ht,xe,Le,Ot,Ht,V.COLOR_BUFFER_BIT,V.NEAREST):kn?V.copyTexSubImage3D(cn,Ct,xe,Le,sn+In,le,Jt,Ot,Ht):V.copyTexSubImage2D(cn,Ct,xe,Le,le,Jt,Ot,Ht);Vt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else kn?L.isDataTexture||L.isData3DTexture?V.texSubImage3D(cn,Ct,xe,Le,sn,Ot,Ht,Wt,Ae,te,Te.data):Z.isCompressedArrayTexture?V.compressedTexSubImage3D(cn,Ct,xe,Le,sn,Ot,Ht,Wt,Ae,Te.data):V.texSubImage3D(cn,Ct,xe,Le,sn,Ot,Ht,Wt,Ae,te,Te):L.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ct,xe,Le,Ot,Ht,Ae,te,Te.data):L.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ct,xe,Le,Te.width,Te.height,Ae,Te.data):V.texSubImage2D(V.TEXTURE_2D,Ct,xe,Le,Ot,Ht,Ae,te,Te);V.pixelStorei(V.UNPACK_ROW_LENGTH,De),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Vn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Jr),V.pixelStorei(V.UNPACK_SKIP_ROWS,en),V.pixelStorei(V.UNPACK_SKIP_IMAGES,vr),Ct===0&&Z.generateMipmaps&&V.generateMipmap(cn),Vt.unbindTexture()},this.copyTextureToTexture3D=function(L,Z,st=null,ct=null,Q=0){return ef('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,Z,st,ct,Q)},this.initRenderTarget=function(L){Xt.get(L).__webglFramebuffer===void 0&&B.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?B.setTextureCube(L,0):L.isData3DTexture?B.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?B.setTexture2DArray(L,0):B.setTexture2D(L,0),Vt.unbindTexture()},this.resetState=function(){z=0,I=0,H=null,Vt.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(t),n.unpackColorSpace=Oe._getUnpackColorSpace()}}const gN=`

  attribute float aBlinkOffset; 

  uniform float uTime; 
  uniform float uPixelRatio;
  uniform float uSize;

  varying vec3 vColor;
  varying float vBlinkOffset; 

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
    
    gl_PointSize = uSize * uPixelRatio;
    gl_PointSize *= (1.0 / -viewPosition.z); 

    vColor = color;
    vBlinkOffset = aBlinkOffset; 
  }
`,vN=`
  varying vec3 vColor;
  varying float vBlinkOffset; 

  uniform float uTime;
  uniform float uBlinkSpeed;
  uniform float uBlinkPeriod;
  uniform float uBlinkDuration; 
  
  #define PI 3.14159265359

  void main() {
    
    float blinkCycleTime = mod(uTime * uBlinkSpeed + vBlinkOffset, uBlinkPeriod);
    
    float blinkFactor = 0.0;
    if (blinkCycleTime < uBlinkDuration) {
        float glowProgress = blinkCycleTime / uBlinkDuration;
        blinkFactor = sin(glowProgress * PI);
    }
    
    float dist = distance(gl_PointCoord, vec2(0.5));
    
    float strength = 1.0 - smoothstep(0.3, 0.5, dist);
    
    float finalAlpha = strength * blinkFactor;

    if (finalAlpha < 0.01) {
        discard;
    }
    
    gl_FragColor = vec4(vColor, finalAlpha);
  }
`;function _N(){const i=ot.useRef(null),t=ot.useRef(new iS);return ot.useEffect(()=>{let n;const a=i.current,{clientWidth:o,clientHeight:c}=a,u=new Ew,d=new Bi(75,o/c,.1,1e3);d.position.z=40;const h=new mN({alpha:!0,antialias:!0});h.setSize(o,c),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.appendChild(h.domElement);const p=1024,g=new Kr,v=new Float32Array(p*3),_=new Float32Array(p*3),x=new Float32Array(p),E=["#FFFFFF","#FFFFE0","#FFD700","#FFA500","#FF4500","#00FF7F"].map(H=>new He(H)),b=400,S=15;for(let H=0;H<p;H++){const w=H*3;v[w+0]=(Math.random()-.5)*b,v[w+1]=(Math.random()-.5)*b,v[w+2]=(Math.random()-.5)*b;const y=E[Math.floor(Math.random()*E.length)];_[w+0]=y.r,_[w+1]=y.g,_[w+2]=y.b,x[H]=Math.random()*S}g.setAttribute("position",new Si(v,3)),g.setAttribute("color",new Si(_,3)),g.setAttribute("aBlinkOffset",new Si(x,1));const O=new $r({uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uSize:{value:500},uBlinkSpeed:{value:1},uBlinkPeriod:{value:S},uBlinkDuration:{value:.9}},vertexShader:gN,fragmentShader:vN,transparent:!0,vertexColors:!0,blending:zp,depthWrite:!1}),U=new Cw(g,O);u.add(U);const R=new Ke(0,0),D=H=>{R.x=H.clientX/o*2-1,R.y=-(H.clientY/c)*2+1};window.addEventListener("mousemove",D);const z=()=>{n=requestAnimationFrame(z);const H=t.current.getElapsedTime();O.uniforms.uTime.value=H,U.rotation.x+=3e-5,U.rotation.y+=5e-5,d.position.x+=(R.x*5-d.position.x)*.01,d.position.y+=(-R.y*5-d.position.y)*.01,d.lookAt(u.position),h.render(u,d)};t.current=new iS,z();const I=()=>{const{clientWidth:H,clientHeight:w}=a;H>0&&w>0&&(d.aspect=H/w,d.updateProjectionMatrix(),h.setSize(H,w),O.uniforms.uPixelRatio.value=Math.min(window.devicePixelRatio,2),h.setPixelRatio(Math.min(window.devicePixelRatio,2)))};return window.addEventListener("resize",I),()=>{cancelAnimationFrame(n),window.removeEventListener("resize",I),window.removeEventListener("mousemove",D),a&&h.domElement&&a.removeChild(h.domElement),u.remove(U),g.dispose(),O.dispose(),h.dispose()}},[]),dt.jsx(Ii,{ref:i,sx:{position:"fixed",top:0,left:0,width:"100%",height:"100vh",zIndex:-1,pointerEvents:"none",overflow:"hidden"}})}function DS(i){const{children:t,value:n,index:a,...o}=i;return dt.jsx("div",{role:"tabpanel",hidden:n!==a,id:`simple-tabpanel-${a}`,"aria-labelledby":`simple-tab-${a}`,...o,children:n===a&&dt.jsx(Ii,{sx:{pt:3},children:t})})}function US(i){return{id:`simple-tab-${i}`,"aria-controls":`simple-tabpanel-${i}`}}function yN(){const[i,t]=ot.useState(0),n=(a,o)=>{t(o)};return dt.jsxs(xR,{theme:KC,children:[dt.jsx(SC,{}),dt.jsx(_N,{}),dt.jsxs(mC,{maxWidth:"lg",sx:{py:6,position:"relative",zIndex:1},children:[dt.jsxs(Ii,{sx:{textAlign:"center",mb:6},children:[dt.jsx(dC,{sx:{width:80,height:80,margin:"0 auto 16px",bgcolor:"primary.main"},children:dt.jsx(jC,{fontSize:"large"})}),dt.jsx(Yi,{variant:"h1",component:"h1",gutterBottom:!0,children:"André Nepomuceno"}),dt.jsx(Yi,{variant:"h6",component:"p",sx:{color:"text.secondary",mb:2,maxWidth:"600px",margin:"0 auto"},children:"Welcome to my page! Explore my projects, resume, and other information."})]}),dt.jsx(Ii,{sx:{borderBottom:1,borderColor:"divider",mb:4},children:dt.jsxs(YC,{value:i,onChange:n,"aria-label":"Portfolio Sections",centered:!0,indicatorColor:"primary",textColor:"primary",children:[dt.jsx(Cy,{icon:dt.jsx(Lx,{}),iconPosition:"start",label:"About Me",...US(0)}),dt.jsx(Cy,{icon:dt.jsx($C,{}),iconPosition:"start",label:"Projects",...US(1)})]})}),dt.jsx(DS,{value:i,index:0,children:dt.jsx(s2,{})}),dt.jsx(DS,{value:i,index:1,children:dt.jsx(Ii,{sx:{display:"flex",flexDirection:"column",gap:8},children:i2.map((a,o)=>dt.jsx(r2,{item:a,index:o},o))})}),dt.jsxs(Yi,{variant:"body2",component:"p",sx:{textAlign:"center",mt:10,color:"text.secondary"},children:["Thanks for visiting! Come back anytime.",dt.jsxs(Ii,{component:"span",sx:{display:"block",fontSize:"0.8em",mt:1,opacity:.7},children:["v","1.4.3"]})]})]})]})}{let i=function(){const n=document.createElement("script");n.async=!0,n.src=`https://www.googletagmanager.com/gtag/js?id=${t}`,document.head.appendChild(n),window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a("js",new Date),a("config",t)};const t="G-8X67LC7LY9";i()}const SN=AE.createRoot(document.getElementById("root"));SN.render(dt.jsx(wa.StrictMode,{children:dt.jsx(yN,{})}));
