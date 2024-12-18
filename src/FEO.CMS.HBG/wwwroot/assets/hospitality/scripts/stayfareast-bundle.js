/**
 * Swiper 6.3.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 30, 2020
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Swiper=t()}(this,(function(){"use strict";function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function t(){return(t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e}).apply(this,arguments)}function i(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function s(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach((function(a){void 0===e[a]?e[a]=t[a]:i(t[a])&&i(e[a])&&Object.keys(t[a]).length>0&&s(e[a],t[a])}))}var a={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function r(){var e="undefined"!=typeof document?document:{};return s(e,a),e}var n={document:a,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}},requestAnimationFrame:function(e){return"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0)},cancelAnimationFrame:function(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function l(){var e="undefined"!=typeof window?window:{};return s(e,n),e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function p(e,t,i){return(p=h()?Reflect.construct:function(e,t,i){var s=[null];s.push.apply(s,t);var a=new(Function.bind.apply(e,s));return i&&d(a,i.prototype),a}).apply(null,arguments)}function u(e){var t="function"==typeof Map?new Map:void 0;return(u=function(e){if(null===e||(i=e,-1===Function.toString.call(i).indexOf("[native code]")))return e;var i;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,s)}function s(){return p(e,arguments,o(this).constructor)}return s.prototype=Object.create(e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),d(s,e)})(e)}var c=function(e){var t,i;function s(t){var i,s,a;return i=e.call.apply(e,[this].concat(t))||this,s=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(i),a=s.__proto__,Object.defineProperty(s,"__proto__",{get:function(){return a},set:function(e){a.__proto__=e}}),i}return i=e,(t=s).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i,s}(u(Array));function f(e){void 0===e&&(e=[]);var t=[];return e.forEach((function(e){Array.isArray(e)?t.push.apply(t,f(e)):t.push(e)})),t}function v(e,t){return Array.prototype.filter.call(e,t)}function m(e,t){var i=l(),s=r(),a=[];if(!t&&e instanceof c)return e;if(!e)return new c(a);if("string"==typeof e){var n=e.trim();if(n.indexOf("<")>=0&&n.indexOf(">")>=0){var o="div";0===n.indexOf("<li")&&(o="ul"),0===n.indexOf("<tr")&&(o="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(o="tr"),0===n.indexOf("<tbody")&&(o="table"),0===n.indexOf("<option")&&(o="select");var d=s.createElement(o);d.innerHTML=n;for(var h=0;h<d.childNodes.length;h+=1)a.push(d.childNodes[h])}else a=function(e,t){if("string"!=typeof e)return[e];for(var i=[],s=t.querySelectorAll(e),a=0;a<s.length;a+=1)i.push(s[a]);return i}(e.trim(),t||s)}else if(e.nodeType||e===i||e===s)a.push(e);else if(Array.isArray(e)){if(e instanceof c)return e;a=e}return new c(function(e){for(var t=[],i=0;i<e.length;i+=1)-1===t.indexOf(e[i])&&t.push(e[i]);return t}(a))}m.fn=c.prototype;var g,w,y,b={addClass:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var s=f(t.map((function(e){return e.split(" ")})));return this.forEach((function(e){var t;(t=e.classList).add.apply(t,s)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var s=f(t.map((function(e){return e.split(" ")})));return this.forEach((function(e){var t;(t=e.classList).remove.apply(t,s)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var s=f(t.map((function(e){return e.split(" ")})));return v(this,(function(e){return s.filter((function(t){return e.classList.contains(t)})).length>0})).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var s=f(t.map((function(e){return e.split(" ")})));this.forEach((function(e){s.forEach((function(t){e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var i=0;i<this.length;i+=1)if(2===arguments.length)this[i].setAttribute(e,t);else for(var s in e)this[i][s]=e[s],this[i].setAttribute(s,e[s]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transition="string"!=typeof e?e+"ms":e;return this},on:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var s=t[0],a=t[1],r=t[2],n=t[3];function l(e){var t=e.target;if(t){var i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),m(t).is(a))r.apply(t,i);else for(var s=m(t).parents(),n=0;n<s.length;n+=1)m(s[n]).is(a)&&r.apply(s[n],i)}}function o(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof t[1]&&(s=t[0],r=t[1],n=t[2],a=void 0),n||(n=!1);for(var d,h=s.split(" "),p=0;p<this.length;p+=1){var u=this[p];if(a)for(d=0;d<h.length;d+=1){var c=h[d];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[c]||(u.dom7LiveListeners[c]=[]),u.dom7LiveListeners[c].push({listener:r,proxyListener:l}),u.addEventListener(c,l,n)}else for(d=0;d<h.length;d+=1){var f=h[d];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[f]||(u.dom7Listeners[f]=[]),u.dom7Listeners[f].push({listener:r,proxyListener:o}),u.addEventListener(f,o,n)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var s=t[0],a=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(s=t[0],r=t[1],n=t[2],a=void 0),n||(n=!1);for(var l=s.split(" "),o=0;o<l.length;o+=1)for(var d=l[o],h=0;h<this.length;h+=1){var p=this[h],u=void 0;if(!a&&p.dom7Listeners?u=p.dom7Listeners[d]:a&&p.dom7LiveListeners&&(u=p.dom7LiveListeners[d]),u&&u.length)for(var c=u.length-1;c>=0;c-=1){var f=u[c];r&&f.listener===r||r&&f.listener&&f.listener.dom7proxy&&f.listener.dom7proxy===r?(p.removeEventListener(d,f.proxyListener,n),u.splice(c,1)):r||(p.removeEventListener(d,f.proxyListener,n),u.splice(c,1))}}return this},trigger:function(){for(var e=l(),t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];for(var a=i[0].split(" "),r=i[1],n=0;n<a.length;n+=1)for(var o=a[n],d=0;d<this.length;d+=1){var h=this[d];if(e.CustomEvent){var p=new e.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0});h.dom7EventData=i.filter((function(e,t){return t>0})),h.dispatchEvent(p),h.dom7EventData=[],delete h.dom7EventData}}return this},transitionEnd:function(e){var t=this;return e&&t.on("transitionend",(function i(s){s.target===this&&(e.call(this,s),t.off("transitionend",i))})),this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){var e=l();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){var e=l(),t=r(),i=this[0],s=i.getBoundingClientRect(),a=t.body,n=i.clientTop||a.clientTop||0,o=i.clientLeft||a.clientLeft||0,d=i===e?e.scrollY:i.scrollTop,h=i===e?e.scrollX:i.scrollLeft;return{top:s.top+d-n,left:s.left+h-o}}return null},css:function(e,t){var i,s=l();if(1===arguments.length){if("string"!=typeof e){for(i=0;i<this.length;i+=1)for(var a in e)this[i].style[a]=e[a];return this}if(this[0])return s.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(i=0;i<this.length;i+=1)this[i].style[e]=t;return this}return this},each:function(e){return e?(this.forEach((function(t,i){e.apply(t,[t,i])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,i,s=l(),a=r(),n=this[0];if(!n||void 0===e)return!1;if("string"==typeof e){if(n.matches)return n.matches(e);if(n.webkitMatchesSelector)return n.webkitMatchesSelector(e);if(n.msMatchesSelector)return n.msMatchesSelector(e);for(t=m(e),i=0;i<t.length;i+=1)if(t[i]===n)return!0;return!1}if(e===a)return n===a;if(e===s)return n===s;if(e.nodeType||e instanceof c){for(t=e.nodeType?[e]:e,i=0;i<t.length;i+=1)if(t[i]===n)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t=this.length;if(e>t-1)return m([]);if(e<0){var i=t+e;return m(i<0?[]:[this[i]])}return m([this[e]])},append:function(){for(var e,t=r(),i=0;i<arguments.length;i+=1){e=i<0||arguments.length<=i?void 0:arguments[i];for(var s=0;s<this.length;s+=1)if("string"==typeof e){var a=t.createElement("div");for(a.innerHTML=e;a.firstChild;)this[s].appendChild(a.firstChild)}else if(e instanceof c)for(var n=0;n<e.length;n+=1)this[s].appendChild(e[n]);else this[s].appendChild(e)}return this},prepend:function(e){var t,i,s=r();for(t=0;t<this.length;t+=1)if("string"==typeof e){var a=s.createElement("div");for(a.innerHTML=e,i=a.childNodes.length-1;i>=0;i-=1)this[t].insertBefore(a.childNodes[i],this[t].childNodes[0])}else if(e instanceof c)for(i=0;i<e.length;i+=1)this[t].insertBefore(e[i],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&m(this[0].nextElementSibling).is(e)?m([this[0].nextElementSibling]):m([]):this[0].nextElementSibling?m([this[0].nextElementSibling]):m([]):m([])},nextAll:function(e){var t=[],i=this[0];if(!i)return m([]);for(;i.nextElementSibling;){var s=i.nextElementSibling;e?m(s).is(e)&&t.push(s):t.push(s),i=s}return m(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&m(t.previousElementSibling).is(e)?m([t.previousElementSibling]):m([]):t.previousElementSibling?m([t.previousElementSibling]):m([])}return m([])},prevAll:function(e){var t=[],i=this[0];if(!i)return m([]);for(;i.previousElementSibling;){var s=i.previousElementSibling;e?m(s).is(e)&&t.push(s):t.push(s),i=s}return m(t)},parent:function(e){for(var t=[],i=0;i<this.length;i+=1)null!==this[i].parentNode&&(e?m(this[i].parentNode).is(e)&&t.push(this[i].parentNode):t.push(this[i].parentNode));return m(t)},parents:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var s=this[i].parentNode;s;)e?m(s).is(e)&&t.push(s):t.push(s),s=s.parentNode;return m(t)},closest:function(e){var t=this;return void 0===e?m([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var s=this[i].querySelectorAll(e),a=0;a<s.length;a+=1)t.push(s[a]);return m(t)},children:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var s=this[i].children,a=0;a<s.length;a+=1)e&&!m(s[a]).is(e)||t.push(s[a]);return m(t)},filter:function(e){return m(v(this,e))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function E(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function x(){return Date.now()}function T(e,t){void 0===t&&(t="x");var i,s,a,r=l(),n=r.getComputedStyle(e,null);return r.WebKitCSSMatrix?((s=n.transform||n.webkitTransform).split(",").length>6&&(s=s.split(", ").map((function(e){return e.replace(",",".")})).join(", ")),a=new r.WebKitCSSMatrix("none"===s?"":s)):i=(a=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(s=r.WebKitCSSMatrix?a.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===t&&(s=r.WebKitCSSMatrix?a.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),s||0}function C(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object}function S(){for(var e=Object(arguments.length<=0?void 0:arguments[0]),t=1;t<arguments.length;t+=1){var i=t<0||arguments.length<=t?void 0:arguments[t];if(null!=i)for(var s=Object.keys(Object(i)),a=0,r=s.length;a<r;a+=1){var n=s[a],l=Object.getOwnPropertyDescriptor(i,n);void 0!==l&&l.enumerable&&(C(e[n])&&C(i[n])?S(e[n],i[n]):!C(e[n])&&C(i[n])?(e[n]={},S(e[n],i[n])):e[n]=i[n])}}return e}function M(e,t){Object.keys(t).forEach((function(i){C(t[i])&&Object.keys(t[i]).forEach((function(s){"function"==typeof t[i][s]&&(t[i][s]=t[i][s].bind(e))})),e[i]=t[i]}))}function z(){return g||(g=function(){var e=l(),t=r();return{touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),pointerEvents:!!e.PointerEvent&&"maxTouchPoints"in e.navigator&&e.navigator.maxTouchPoints>=0,observer:"MutationObserver"in e||"WebkitMutationObserver"in e,passiveListener:function(){var t=!1;try{var i=Object.defineProperty({},"passive",{get:function(){t=!0}});e.addEventListener("testPassiveListener",null,i)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),g}function P(e){return void 0===e&&(e={}),w||(w=function(e){var t=(void 0===e?{}:e).userAgent,i=z(),s=l(),a=s.navigator.platform,r=t||s.navigator.userAgent,n={ios:!1,android:!1},o=s.screen.width,d=s.screen.height,h=r.match(/(Android);?[\s\/]+([\d.]+)?/),p=r.match(/(iPad).*OS\s([\d_]+)/),u=r.match(/(iPod)(.*OS\s([\d_]+))?/),c=!p&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f="Win32"===a,v="MacIntel"===a;return!p&&v&&i.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(o+"x"+d)>=0&&((p=r.match(/(Version)\/([\d.]+)/))||(p=[0,1,"13_0_0"]),v=!1),h&&!f&&(n.os="android",n.android=!0),(p||c||u)&&(n.os="ios",n.ios=!0),n}(e)),w}function k(){return y||(y=function(){var e,t=l();return{isEdge:!!t.navigator.userAgent.match(/Edge/g),isSafari:(e=t.navigator.userAgent.toLowerCase(),e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)}}()),y}Object.keys(b).forEach((function(e){m.fn[e]=b[e]}));var $={name:"resize",create:function(){var e=this;S(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(e){var t=l();t.addEventListener("resize",e.resize.resizeHandler),t.addEventListener("orientationchange",e.resize.orientationChangeHandler)},destroy:function(e){var t=l();t.removeEventListener("resize",e.resize.resizeHandler),t.removeEventListener("orientationchange",e.resize.orientationChangeHandler)}}},L={attach:function(e,t){void 0===t&&(t={});var i=l(),s=this,a=new(i.MutationObserver||i.WebkitMutationObserver)((function(e){if(1!==e.length){var t=function(){s.emit("observerUpdate",e[0])};i.requestAnimationFrame?i.requestAnimationFrame(t):i.setTimeout(t,0)}else s.emit("observerUpdate",e[0])}));a.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),s.observer.observers.push(a)},init:function(){if(this.support.observer&&this.params.observer){if(this.params.observeParents)for(var e=this.$el.parents(),t=0;t<e.length;t+=1)this.observer.attach(e[t]);this.observer.attach(this.$el[0],{childList:this.params.observeSlideChildren}),this.observer.attach(this.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach((function(e){e.disconnect()})),this.observer.observers=[]}},I={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){M(this,{observer:t(t({},L),{},{observers:[]})})},on:{init:function(e){e.observer.init()},destroy:function(e){e.observer.destroy()}}};function O(e){var t=r(),i=l(),s=this.touchEventsData,a=this.params,n=this.touches;if(!this.animating||!a.preventInteractionOnTransition){var o=e;o.originalEvent&&(o=o.originalEvent);var d=m(o.target);if("wrapper"!==a.touchEventsTarget||d.closest(this.wrapperEl).length)if(s.isTouchEvent="touchstart"===o.type,s.isTouchEvent||!("which"in o)||3!==o.which)if(!(!s.isTouchEvent&&"button"in o&&o.button>0))if(!s.isTouched||!s.isMoved)if(!!a.noSwipingClass&&""!==a.noSwipingClass&&o.target&&o.target.shadowRoot&&e.path&&e.path[0]&&(d=m(e.path[0])),a.noSwiping&&d.closest(a.noSwipingSelector?a.noSwipingSelector:"."+a.noSwipingClass)[0])this.allowClick=!0;else if(!a.swipeHandler||d.closest(a.swipeHandler)[0]){n.currentX="touchstart"===o.type?o.targetTouches[0].pageX:o.pageX,n.currentY="touchstart"===o.type?o.targetTouches[0].pageY:o.pageY;var h=n.currentX,p=n.currentY,u=a.edgeSwipeDetection||a.iOSEdgeSwipeDetection,c=a.edgeSwipeThreshold||a.iOSEdgeSwipeThreshold;if(!u||!(h<=c||h>=i.screen.width-c)){if(S(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),n.startX=h,n.startY=p,s.touchStartTime=x(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,a.threshold>0&&(s.allowThresholdMove=!1),"touchstart"!==o.type){var f=!0;d.is(s.formElements)&&(f=!1),t.activeElement&&m(t.activeElement).is(s.formElements)&&t.activeElement!==d[0]&&t.activeElement.blur();var v=f&&this.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||v)&&o.preventDefault()}this.emit("touchStart",o)}}}}function A(e){var t=r(),i=this.touchEventsData,s=this.params,a=this.touches,n=this.rtlTranslate,l=e;if(l.originalEvent&&(l=l.originalEvent),i.isTouched){if(!i.isTouchEvent||"touchmove"===l.type){var o="touchmove"===l.type&&l.targetTouches&&(l.targetTouches[0]||l.changedTouches[0]),d="touchmove"===l.type?o.pageX:l.pageX,h="touchmove"===l.type?o.pageY:l.pageY;if(l.preventedByNestedSwiper)return a.startX=d,void(a.startY=h);if(!this.allowTouchMove)return this.allowClick=!1,void(i.isTouched&&(S(a,{startX:d,startY:h,currentX:d,currentY:h}),i.touchStartTime=x()));if(i.isTouchEvent&&s.touchReleaseOnEdges&&!s.loop)if(this.isVertical()){if(h<a.startY&&this.translate<=this.maxTranslate()||h>a.startY&&this.translate>=this.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(d<a.startX&&this.translate<=this.maxTranslate()||d>a.startX&&this.translate>=this.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&l.target===t.activeElement&&m(l.target).is(i.formElements))return i.isMoved=!0,void(this.allowClick=!1);if(i.allowTouchCallbacks&&this.emit("touchMove",l),!(l.targetTouches&&l.targetTouches.length>1)){a.currentX=d,a.currentY=h;var p=a.currentX-a.startX,u=a.currentY-a.startY;if(!(this.params.threshold&&Math.sqrt(Math.pow(p,2)+Math.pow(u,2))<this.params.threshold)){var c;if(void 0===i.isScrolling)this.isHorizontal()&&a.currentY===a.startY||this.isVertical()&&a.currentX===a.startX?i.isScrolling=!1:p*p+u*u>=25&&(c=180*Math.atan2(Math.abs(u),Math.abs(p))/Math.PI,i.isScrolling=this.isHorizontal()?c>s.touchAngle:90-c>s.touchAngle);if(i.isScrolling&&this.emit("touchMoveOpposite",l),void 0===i.startMoving&&(a.currentX===a.startX&&a.currentY===a.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){this.allowClick=!1,!s.cssMode&&l.cancelable&&l.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&l.stopPropagation(),i.isMoved||(s.loop&&this.loopFix(),i.startTranslate=this.getTranslate(),this.setTransition(0),this.animating&&this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!s.grabCursor||!0!==this.allowSlideNext&&!0!==this.allowSlidePrev||this.setGrabCursor(!0),this.emit("sliderFirstMove",l)),this.emit("sliderMove",l),i.isMoved=!0;var f=this.isHorizontal()?p:u;a.diff=f,f*=s.touchRatio,n&&(f=-f),this.swipeDirection=f>0?"prev":"next",i.currentTranslate=f+i.startTranslate;var v=!0,g=s.resistanceRatio;if(s.touchReleaseOnEdges&&(g=0),f>0&&i.currentTranslate>this.minTranslate()?(v=!1,s.resistance&&(i.currentTranslate=this.minTranslate()-1+Math.pow(-this.minTranslate()+i.startTranslate+f,g))):f<0&&i.currentTranslate<this.maxTranslate()&&(v=!1,s.resistance&&(i.currentTranslate=this.maxTranslate()+1-Math.pow(this.maxTranslate()-i.startTranslate-f,g))),v&&(l.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.threshold>0){if(!(Math.abs(f)>s.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,i.currentTranslate=i.startTranslate,void(a.diff=this.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY)}s.followFinger&&!s.cssMode&&((s.freeMode||s.watchSlidesProgress||s.watchSlidesVisibility)&&(this.updateActiveIndex(),this.updateSlidesClasses()),s.freeMode&&(0===i.velocities.length&&i.velocities.push({position:a[this.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:a[this.isHorizontal()?"currentX":"currentY"],time:x()})),this.updateProgress(i.currentTranslate),this.setTranslate(i.currentTranslate))}}}}}else i.startMoving&&i.isScrolling&&this.emit("touchMoveOpposite",l)}function D(e){var t=this,i=t.touchEventsData,s=t.params,a=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,l=t.slidesGrid,o=t.snapGrid,d=e;if(d.originalEvent&&(d=d.originalEvent),i.allowTouchCallbacks&&t.emit("touchEnd",d),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&s.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);s.grabCursor&&i.isMoved&&i.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var h,p=x(),u=p-i.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(d),t.emit("tap click",d),u<300&&p-i.lastClickTime<300&&t.emit("doubleTap doubleClick",d)),i.lastClickTime=x(),E((function(){t.destroyed||(t.allowClick=!0)})),!i.isTouched||!i.isMoved||!t.swipeDirection||0===a.diff||i.currentTranslate===i.startTranslate)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,h=s.followFinger?r?t.translate:-t.translate:-i.currentTranslate,!s.cssMode)if(s.freeMode){if(h<-t.minTranslate())return void t.slideTo(t.activeIndex);if(h>-t.maxTranslate())return void(t.slides.length<o.length?t.slideTo(o.length-1):t.slideTo(t.slides.length-1));if(s.freeModeMomentum){if(i.velocities.length>1){var c=i.velocities.pop(),f=i.velocities.pop(),v=c.position-f.position,m=c.time-f.time;t.velocity=v/m,t.velocity/=2,Math.abs(t.velocity)<s.freeModeMinimumVelocity&&(t.velocity=0),(m>150||x()-c.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=s.freeModeMomentumVelocityRatio,i.velocities.length=0;var g=1e3*s.freeModeMomentumRatio,w=t.velocity*g,y=t.translate+w;r&&(y=-y);var b,T,C=!1,S=20*Math.abs(t.velocity)*s.freeModeMomentumBounceRatio;if(y<t.maxTranslate())s.freeModeMomentumBounce?(y+t.maxTranslate()<-S&&(y=t.maxTranslate()-S),b=t.maxTranslate(),C=!0,i.allowMomentumBounce=!0):y=t.maxTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(y>t.minTranslate())s.freeModeMomentumBounce?(y-t.minTranslate()>S&&(y=t.minTranslate()+S),b=t.minTranslate(),C=!0,i.allowMomentumBounce=!0):y=t.minTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(s.freeModeSticky){for(var M,z=0;z<o.length;z+=1)if(o[z]>-y){M=z;break}y=-(y=Math.abs(o[M]-y)<Math.abs(o[M-1]-y)||"next"===t.swipeDirection?o[M]:o[M-1])}if(T&&t.once("transitionEnd",(function(){t.loopFix()})),0!==t.velocity){if(g=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity),s.freeModeSticky){var P=Math.abs((r?-y:y)-t.translate),k=t.slidesSizesGrid[t.activeIndex];g=P<k?s.speed:P<2*k?1.5*s.speed:2.5*s.speed}}else if(s.freeModeSticky)return void t.slideToClosest();s.freeModeMomentumBounce&&C?(t.updateProgress(b),t.setTransition(g),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd((function(){t&&!t.destroyed&&i.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(s.speed),setTimeout((function(){t.setTranslate(b),n.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(t.updateProgress(y),t.setTransition(g),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}else if(s.freeModeSticky)return void t.slideToClosest();(!s.freeModeMomentum||u>=s.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var $=0,L=t.slidesSizesGrid[0],I=0;I<l.length;I+=I<s.slidesPerGroupSkip?1:s.slidesPerGroup){var O=I<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;void 0!==l[I+O]?h>=l[I]&&h<l[I+O]&&($=I,L=l[I+O]-l[I]):h>=l[I]&&($=I,L=l[l.length-1]-l[l.length-2])}var A=(h-l[$])/L,D=$<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(u>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(A>=s.longSwipesRatio?t.slideTo($+D):t.slideTo($)),"prev"===t.swipeDirection&&(A>1-s.longSwipesRatio?t.slideTo($+D):t.slideTo($))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(d.target===t.navigation.nextEl||d.target===t.navigation.prevEl)?d.target===t.navigation.nextEl?t.slideTo($+D):t.slideTo($):("next"===t.swipeDirection&&t.slideTo($+D),"prev"===t.swipeDirection&&t.slideTo($))}}}function G(){var e=this.params,t=this.el;if(!t||0!==t.offsetWidth){e.breakpoints&&this.setBreakpoint();var i=this.allowSlideNext,s=this.allowSlidePrev,a=this.snapGrid;this.allowSlideNext=!0,this.allowSlidePrev=!0,this.updateSize(),this.updateSlides(),this.updateSlidesClasses(),("auto"===e.slidesPerView||e.slidesPerView>1)&&this.isEnd&&!this.isBeginning&&!this.params.centeredSlides?this.slideTo(this.slides.length-1,0,!1,!0):this.slideTo(this.activeIndex,0,!1,!0),this.autoplay&&this.autoplay.running&&this.autoplay.paused&&this.autoplay.run(),this.allowSlidePrev=s,this.allowSlideNext=i,this.params.watchOverflow&&a!==this.snapGrid&&this.checkOverflow()}}function N(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function B(){var e=this.wrapperEl,t=this.rtlTranslate;this.previousTranslate=this.translate,this.isHorizontal()?this.translate=t?e.scrollWidth-e.offsetWidth-e.scrollLeft:-e.scrollLeft:this.translate=-e.scrollTop,-0===this.translate&&(this.translate=0),this.updateActiveIndex(),this.updateSlidesClasses();var i=this.maxTranslate()-this.minTranslate();(0===i?0:(this.translate-this.minTranslate())/i)!==this.progress&&this.updateProgress(t?-this.translate:this.translate),this.emit("setTranslate",this.translate,!1)}var H=!1;function X(){}var Y={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,nested:!1,width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1},V={modular:{useParams:function(e){var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i];s.params&&S(e,s.params)}))},useModules:function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i],a=e[i]||{};s.on&&t.on&&Object.keys(s.on).forEach((function(e){t.on(e,s.on[e])})),s.create&&s.create.bind(t)(a)}))}},eventsEmitter:{on:function(e,t,i){var s=this;if("function"!=typeof t)return s;var a=i?"unshift":"push";return e.split(" ").forEach((function(e){s.eventsListeners[e]||(s.eventsListeners[e]=[]),s.eventsListeners[e][a](t)})),s},once:function(e,t,i){var s=this;if("function"!=typeof t)return s;function a(){s.off(e,a),a.__emitterProxy&&delete a.__emitterProxy;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];t.apply(s,r)}return a.__emitterProxy=t,s.on(e,a,i)},onAny:function(e,t){if("function"!=typeof e)return this;var i=t?"unshift":"push";return this.eventsAnyListeners.indexOf(e)<0&&this.eventsAnyListeners[i](e),this},offAny:function(e){if(!this.eventsAnyListeners)return this;var t=this.eventsAnyListeners.indexOf(e);return t>=0&&this.eventsAnyListeners.splice(t,1),this},off:function(e,t){var i=this;return i.eventsListeners?(e.split(" ").forEach((function(e){void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e]&&i.eventsListeners[e].forEach((function(s,a){(s===t||s.__emitterProxy&&s.__emitterProxy===t)&&i.eventsListeners[e].splice(a,1)}))})),i):i},emit:function(){var e,t,i,s=this;if(!s.eventsListeners)return s;for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(e=r[0],t=r.slice(1,r.length),i=s):(e=r[0].events,t=r[0].data,i=r[0].context||s),t.unshift(i);var l=Array.isArray(e)?e:e.split(" ");return l.forEach((function(e){if(s.eventsAnyListeners&&s.eventsAnyListeners.length&&s.eventsAnyListeners.forEach((function(s){s.apply(i,[e].concat(t))})),s.eventsListeners&&s.eventsListeners[e]){var a=[];s.eventsListeners[e].forEach((function(e){a.push(e)})),a.forEach((function(e){e.apply(i,t)}))}})),s}},update:{updateSize:function(){var e,t,i=this.$el;e=void 0!==this.params.width&&null!==this.params.width?this.params.width:i[0].clientWidth,t=void 0!==this.params.height&&null!==this.params.width?this.params.height:i[0].clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(e=e-parseInt(i.css("padding-left")||0,10)-parseInt(i.css("padding-right")||0,10),t=t-parseInt(i.css("padding-top")||0,10)-parseInt(i.css("padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),S(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){var e=l(),t=this.params,i=this.$wrapperEl,s=this.size,a=this.rtlTranslate,r=this.wrongRTL,n=this.virtual&&t.virtual.enabled,o=n?this.virtual.slides.length:this.slides.length,d=i.children("."+this.params.slideClass),h=n?this.virtual.slides.length:d.length,p=[],u=[],c=[];function f(e,i){return!t.cssMode||i!==d.length-1}var v=t.slidesOffsetBefore;"function"==typeof v&&(v=t.slidesOffsetBefore.call(this));var m=t.slidesOffsetAfter;"function"==typeof m&&(m=t.slidesOffsetAfter.call(this));var g=this.snapGrid.length,w=this.snapGrid.length,y=t.spaceBetween,b=-v,E=0,x=0;if(void 0!==s){var T,C;"string"==typeof y&&y.indexOf("%")>=0&&(y=parseFloat(y.replace("%",""))/100*s),this.virtualSize=-y,a?d.css({marginLeft:"",marginTop:""}):d.css({marginRight:"",marginBottom:""}),t.slidesPerColumn>1&&(T=Math.floor(h/t.slidesPerColumn)===h/this.params.slidesPerColumn?h:Math.ceil(h/t.slidesPerColumn)*t.slidesPerColumn,"auto"!==t.slidesPerView&&"row"===t.slidesPerColumnFill&&(T=Math.max(T,t.slidesPerView*t.slidesPerColumn)));for(var M,z=t.slidesPerColumn,P=T/z,k=Math.floor(h/t.slidesPerColumn),$=0;$<h;$+=1){C=0;var L=d.eq($);if(t.slidesPerColumn>1){var I=void 0,O=void 0,A=void 0;if("row"===t.slidesPerColumnFill&&t.slidesPerGroup>1){var D=Math.floor($/(t.slidesPerGroup*t.slidesPerColumn)),G=$-t.slidesPerColumn*t.slidesPerGroup*D,N=0===D?t.slidesPerGroup:Math.min(Math.ceil((h-D*z*t.slidesPerGroup)/z),t.slidesPerGroup);I=(O=G-(A=Math.floor(G/N))*N+D*t.slidesPerGroup)+A*T/z,L.css({"-webkit-box-ordinal-group":I,"-moz-box-ordinal-group":I,"-ms-flex-order":I,"-webkit-order":I,order:I})}else"column"===t.slidesPerColumnFill?(A=$-(O=Math.floor($/z))*z,(O>k||O===k&&A===z-1)&&(A+=1)>=z&&(A=0,O+=1)):O=$-(A=Math.floor($/P))*P;L.css("margin-"+(this.isHorizontal()?"top":"left"),0!==A&&t.spaceBetween&&t.spaceBetween+"px")}if("none"!==L.css("display")){if("auto"===t.slidesPerView){var B=e.getComputedStyle(L[0],null),H=L[0].style.transform,X=L[0].style.webkitTransform;if(H&&(L[0].style.transform="none"),X&&(L[0].style.webkitTransform="none"),t.roundLengths)C=this.isHorizontal()?L.outerWidth(!0):L.outerHeight(!0);else if(this.isHorizontal()){var Y=parseFloat(B.getPropertyValue("width")||0),V=parseFloat(B.getPropertyValue("padding-left")||0),F=parseFloat(B.getPropertyValue("padding-right")||0),R=parseFloat(B.getPropertyValue("margin-left")||0),W=parseFloat(B.getPropertyValue("margin-right")||0),q=B.getPropertyValue("box-sizing");if(q&&"border-box"===q)C=Y+R+W;else{var j=L[0],_=j.clientWidth;C=Y+V+F+R+W+(j.offsetWidth-_)}}else{var U=parseFloat(B.getPropertyValue("height")||0),K=parseFloat(B.getPropertyValue("padding-top")||0),Z=parseFloat(B.getPropertyValue("padding-bottom")||0),J=parseFloat(B.getPropertyValue("margin-top")||0),Q=parseFloat(B.getPropertyValue("margin-bottom")||0),ee=B.getPropertyValue("box-sizing");if(ee&&"border-box"===ee)C=U+J+Q;else{var te=L[0],ie=te.clientHeight;C=U+K+Z+J+Q+(te.offsetHeight-ie)}}H&&(L[0].style.transform=H),X&&(L[0].style.webkitTransform=X),t.roundLengths&&(C=Math.floor(C))}else C=(s-(t.slidesPerView-1)*y)/t.slidesPerView,t.roundLengths&&(C=Math.floor(C)),d[$]&&(this.isHorizontal()?d[$].style.width=C+"px":d[$].style.height=C+"px");d[$]&&(d[$].swiperSlideSize=C),c.push(C),t.centeredSlides?(b=b+C/2+E/2+y,0===E&&0!==$&&(b=b-s/2-y),0===$&&(b=b-s/2-y),Math.abs(b)<.001&&(b=0),t.roundLengths&&(b=Math.floor(b)),x%t.slidesPerGroup==0&&p.push(b),u.push(b)):(t.roundLengths&&(b=Math.floor(b)),(x-Math.min(this.params.slidesPerGroupSkip,x))%this.params.slidesPerGroup==0&&p.push(b),u.push(b),b=b+C+y),this.virtualSize+=C+y,E=C,x+=1}}if(this.virtualSize=Math.max(this.virtualSize,s)+m,a&&r&&("slide"===t.effect||"coverflow"===t.effect)&&i.css({width:this.virtualSize+t.spaceBetween+"px"}),t.setWrapperSize&&(this.isHorizontal()?i.css({width:this.virtualSize+t.spaceBetween+"px"}):i.css({height:this.virtualSize+t.spaceBetween+"px"})),t.slidesPerColumn>1&&(this.virtualSize=(C+t.spaceBetween)*T,this.virtualSize=Math.ceil(this.virtualSize/t.slidesPerColumn)-t.spaceBetween,this.isHorizontal()?i.css({width:this.virtualSize+t.spaceBetween+"px"}):i.css({height:this.virtualSize+t.spaceBetween+"px"}),t.centeredSlides)){M=[];for(var se=0;se<p.length;se+=1){var ae=p[se];t.roundLengths&&(ae=Math.floor(ae)),p[se]<this.virtualSize+p[0]&&M.push(ae)}p=M}if(!t.centeredSlides){M=[];for(var re=0;re<p.length;re+=1){var ne=p[re];t.roundLengths&&(ne=Math.floor(ne)),p[re]<=this.virtualSize-s&&M.push(ne)}p=M,Math.floor(this.virtualSize-s)-Math.floor(p[p.length-1])>1&&p.push(this.virtualSize-s)}if(0===p.length&&(p=[0]),0!==t.spaceBetween&&(this.isHorizontal()?a?d.filter(f).css({marginLeft:y+"px"}):d.filter(f).css({marginRight:y+"px"}):d.filter(f).css({marginBottom:y+"px"})),t.centeredSlides&&t.centeredSlidesBounds){var le=0;c.forEach((function(e){le+=e+(t.spaceBetween?t.spaceBetween:0)}));var oe=(le-=t.spaceBetween)-s;p=p.map((function(e){return e<0?-v:e>oe?oe+m:e}))}if(t.centerInsufficientSlides){var de=0;if(c.forEach((function(e){de+=e+(t.spaceBetween?t.spaceBetween:0)})),(de-=t.spaceBetween)<s){var he=(s-de)/2;p.forEach((function(e,t){p[t]=e-he})),u.forEach((function(e,t){u[t]=e+he}))}}S(this,{slides:d,snapGrid:p,slidesGrid:u,slidesSizesGrid:c}),h!==o&&this.emit("slidesLengthChange"),p.length!==g&&(this.params.watchOverflow&&this.checkOverflow(),this.emit("snapGridLengthChange")),u.length!==w&&this.emit("slidesGridLengthChange"),(t.watchSlidesProgress||t.watchSlidesVisibility)&&this.updateSlidesOffset()}},updateAutoHeight:function(e){var t,i=[],s=0;if("number"==typeof e?this.setTransition(e):!0===e&&this.setTransition(this.params.speed),"auto"!==this.params.slidesPerView&&this.params.slidesPerView>1)if(this.params.centeredSlides)this.visibleSlides.each((function(e){i.push(e)}));else for(t=0;t<Math.ceil(this.params.slidesPerView);t+=1){var a=this.activeIndex+t;if(a>this.slides.length)break;i.push(this.slides.eq(a)[0])}else i.push(this.slides.eq(this.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var r=i[t].offsetHeight;s=r>s?r:s}s&&this.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this.params,i=this.slides,s=this.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&this.updateSlidesOffset();var a=-e;s&&(a=e),i.removeClass(t.slideVisibleClass),this.visibleSlidesIndexes=[],this.visibleSlides=[];for(var r=0;r<i.length;r+=1){var n=i[r],l=(a+(t.centeredSlides?this.minTranslate():0)-n.swiperSlideOffset)/(n.swiperSlideSize+t.spaceBetween);if(t.watchSlidesVisibility||t.centeredSlides&&t.autoHeight){var o=-(a-n.swiperSlideOffset),d=o+this.slidesSizesGrid[r];(o>=0&&o<this.size-1||d>1&&d<=this.size||o<=0&&d>=this.size)&&(this.visibleSlides.push(n),this.visibleSlidesIndexes.push(r),i.eq(r).addClass(t.slideVisibleClass))}n.progress=s?-l:l}this.visibleSlides=m(this.visibleSlides)}},updateProgress:function(e){if(void 0===e){var t=this.rtlTranslate?-1:1;e=this&&this.translate&&this.translate*t||0}var i=this.params,s=this.maxTranslate()-this.minTranslate(),a=this.progress,r=this.isBeginning,n=this.isEnd,l=r,o=n;0===s?(a=0,r=!0,n=!0):(r=(a=(e-this.minTranslate())/s)<=0,n=a>=1),S(this,{progress:a,isBeginning:r,isEnd:n}),(i.watchSlidesProgress||i.watchSlidesVisibility||i.centeredSlides&&i.autoHeight)&&this.updateSlidesProgress(e),r&&!l&&this.emit("reachBeginning toEdge"),n&&!o&&this.emit("reachEnd toEdge"),(l&&!r||o&&!n)&&this.emit("fromEdge"),this.emit("progress",a)},updateSlidesClasses:function(){var e,t=this.slides,i=this.params,s=this.$wrapperEl,a=this.activeIndex,r=this.realIndex,n=this.virtual&&i.virtual.enabled;t.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=n?this.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+a+'"]'):t.eq(a)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass));var l=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=t.eq(0)).addClass(i.slideNextClass);var o=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===o.length&&(o=t.eq(-1)).addClass(i.slidePrevClass),i.loop&&(l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),o.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass)),this.emitSlidesClasses()},updateActiveIndex:function(e){var t,i=this.rtlTranslate?this.translate:-this.translate,s=this.slidesGrid,a=this.snapGrid,r=this.params,n=this.activeIndex,l=this.realIndex,o=this.snapIndex,d=e;if(void 0===d){for(var h=0;h<s.length;h+=1)void 0!==s[h+1]?i>=s[h]&&i<s[h+1]-(s[h+1]-s[h])/2?d=h:i>=s[h]&&i<s[h+1]&&(d=h+1):i>=s[h]&&(d=h);r.normalizeSlideIndex&&(d<0||void 0===d)&&(d=0)}if(a.indexOf(i)>=0)t=a.indexOf(i);else{var p=Math.min(r.slidesPerGroupSkip,d);t=p+Math.floor((d-p)/r.slidesPerGroup)}if(t>=a.length&&(t=a.length-1),d!==n){var u=parseInt(this.slides.eq(d).attr("data-swiper-slide-index")||d,10);S(this,{snapIndex:t,realIndex:u,previousIndex:n,activeIndex:d}),this.emit("activeIndexChange"),this.emit("snapIndexChange"),l!==u&&this.emit("realIndexChange"),(this.initialized||this.params.runCallbacksOnInit)&&this.emit("slideChange")}else t!==o&&(this.snapIndex=t,this.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this.params,i=m(e.target).closest("."+t.slideClass)[0],s=!1;if(i)for(var a=0;a<this.slides.length;a+=1)this.slides[a]===i&&(s=!0);if(!i||!s)return this.clickedSlide=void 0,void(this.clickedIndex=void 0);this.clickedSlide=i,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(m(i).attr("data-swiper-slide-index"),10):this.clickedIndex=m(i).index(),t.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}},translate:{getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,i=this.rtlTranslate,s=this.translate,a=this.$wrapperEl;if(t.virtualTranslate)return i?-s:s;if(t.cssMode)return s;var r=T(a[0],e);return i&&(r=-r),r||0},setTranslate:function(e,t){var i=this.rtlTranslate,s=this.params,a=this.$wrapperEl,r=this.wrapperEl,n=this.progress,l=0,o=0;this.isHorizontal()?l=i?-e:e:o=e,s.roundLengths&&(l=Math.floor(l),o=Math.floor(o)),s.cssMode?r[this.isHorizontal()?"scrollLeft":"scrollTop"]=this.isHorizontal()?-l:-o:s.virtualTranslate||a.transform("translate3d("+l+"px, "+o+"px, 0px)"),this.previousTranslate=this.translate,this.translate=this.isHorizontal()?l:o;var d=this.maxTranslate()-this.minTranslate();(0===d?0:(e-this.minTranslate())/d)!==n&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,i,s,a){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0),void 0===s&&(s=!0);var r=this,n=r.params,l=r.wrapperEl;if(r.animating&&n.preventInteractionOnTransition)return!1;var o,d=r.minTranslate(),h=r.maxTranslate();if(o=s&&e>d?d:s&&e<h?h:e,r.updateProgress(o),n.cssMode){var p,u=r.isHorizontal();if(0===t)l[u?"scrollLeft":"scrollTop"]=-o;else if(l.scrollTo)l.scrollTo(((p={})[u?"left":"top"]=-o,p.behavior="smooth",p));else l[u?"scrollLeft":"scrollTop"]=-o;return!0}return 0===t?(r.setTransition(0),r.setTranslate(o),i&&(r.emit("beforeTransitionStart",t,a),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(o),i&&(r.emit("beforeTransitionStart",t,a),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,i&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){this.params.cssMode||this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.params,a=this.previousIndex;if(!s.cssMode){s.autoHeight&&this.updateAutoHeight();var r=t;if(r||(r=i>a?"next":i<a?"prev":"reset"),this.emit("transitionStart"),e&&i!==a){if("reset"===r)return void this.emit("slideResetTransitionStart");this.emit("slideChangeTransitionStart"),"next"===r?this.emit("slideNextTransitionStart"):this.emit("slidePrevTransitionStart")}}},transitionEnd:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.previousIndex,a=this.params;if(this.animating=!1,!a.cssMode){this.setTransition(0);var r=t;if(r||(r=i>s?"next":i<s?"prev":"reset"),this.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void this.emit("slideResetTransitionEnd");this.emit("slideChangeTransitionEnd"),"next"===r?this.emit("slideNextTransitionEnd"):this.emit("slidePrevTransitionEnd")}}}},slide:{slideTo:function(e,t,i,s){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. ["+typeof e+"] given.");if("string"==typeof e){var a=parseInt(e,10);if(!isFinite(a))throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. ["+e+"] given.");e=a}var r=this,n=e;n<0&&(n=0);var l=r.params,o=r.snapGrid,d=r.slidesGrid,h=r.previousIndex,p=r.activeIndex,u=r.rtlTranslate,c=r.wrapperEl;if(r.animating&&l.preventInteractionOnTransition)return!1;var f=Math.min(r.params.slidesPerGroupSkip,n),v=f+Math.floor((n-f)/r.params.slidesPerGroup);v>=o.length&&(v=o.length-1),(p||l.initialSlide||0)===(h||0)&&i&&r.emit("beforeSlideChangeStart");var m,g=-o[v];if(r.updateProgress(g),l.normalizeSlideIndex)for(var w=0;w<d.length;w+=1)-Math.floor(100*g)>=Math.floor(100*d[w])&&(n=w);if(r.initialized&&n!==p){if(!r.allowSlideNext&&g<r.translate&&g<r.minTranslate())return!1;if(!r.allowSlidePrev&&g>r.translate&&g>r.maxTranslate()&&(p||0)!==n)return!1}if(m=n>p?"next":n<p?"prev":"reset",u&&-g===r.translate||!u&&g===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(g),"reset"!==m&&(r.transitionStart(i,m),r.transitionEnd(i,m)),!1;if(l.cssMode){var y,b=r.isHorizontal(),E=-g;if(u&&(E=c.scrollWidth-c.offsetWidth-E),0===t)c[b?"scrollLeft":"scrollTop"]=E;else if(c.scrollTo)c.scrollTo(((y={})[b?"left":"top"]=E,y.behavior="smooth",y));else c[b?"scrollLeft":"scrollTop"]=E;return!0}return 0===t?(r.setTransition(0),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(i,m),r.transitionEnd(i,m)):(r.setTransition(t),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(i,m),r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(i,m))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=e;return this.params.loop&&(a+=this.loopedSlides),this.slideTo(a,t,i,s)},slideNext:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.activeIndex<s.slidesPerGroupSkip?1:s.slidesPerGroup;if(s.loop){if(a&&s.loopPreventsSlide)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}return this.slideTo(this.activeIndex+r,e,t,i)},slidePrev:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.snapGrid,n=this.slidesGrid,l=this.rtlTranslate;if(s.loop){if(a&&s.loopPreventsSlide)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}function o(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var d,h=o(l?this.translate:-this.translate),p=r.map((function(e){return o(e)})),u=(r[p.indexOf(h)],r[p.indexOf(h)-1]);return void 0===u&&s.cssMode&&r.forEach((function(e){!u&&h>=e&&(u=e)})),void 0!==u&&(d=n.indexOf(u))<0&&(d=this.activeIndex-1),this.slideTo(d,e,t,i)},slideReset:function(e,t,i){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,i)},slideToClosest:function(e,t,i,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===s&&(s=.5);var a=this.activeIndex,r=Math.min(this.params.slidesPerGroupSkip,a),n=r+Math.floor((a-r)/this.params.slidesPerGroup),l=this.rtlTranslate?this.translate:-this.translate;if(l>=this.snapGrid[n]){var o=this.snapGrid[n];l-o>(this.snapGrid[n+1]-o)*s&&(a+=this.params.slidesPerGroup)}else{var d=this.snapGrid[n-1];l-d<=(this.snapGrid[n]-d)*s&&(a-=this.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,this.slidesGrid.length-1),this.slideTo(a,e,t,i)},slideToClickedSlide:function(){var e,t=this,i=t.params,s=t.$wrapperEl,a="auto"===i.slidesPerView?t.slidesPerViewDynamic():i.slidesPerView,r=t.clickedIndex;if(i.loop){if(t.animating)return;e=parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?r<t.loopedSlides-a/2||r>t.slides.length-t.loopedSlides+a/2?(t.loopFix(),r=s.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),E((function(){t.slideTo(r)}))):t.slideTo(r):r>t.slides.length-a?(t.loopFix(),r=s.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),E((function(){t.slideTo(r)}))):t.slideTo(r)}else t.slideTo(r)}},loop:{loopCreate:function(){var e=this,t=r(),i=e.params,s=e.$wrapperEl;s.children("."+i.slideClass+"."+i.slideDuplicateClass).remove();var a=s.children("."+i.slideClass);if(i.loopFillGroupWithBlank){var n=i.slidesPerGroup-a.length%i.slidesPerGroup;if(n!==i.slidesPerGroup){for(var l=0;l<n;l+=1){var o=m(t.createElement("div")).addClass(i.slideClass+" "+i.slideBlankClass);s.append(o)}a=s.children("."+i.slideClass)}}"auto"!==i.slidesPerView||i.loopedSlides||(i.loopedSlides=a.length),e.loopedSlides=Math.ceil(parseFloat(i.loopedSlides||i.slidesPerView,10)),e.loopedSlides+=i.loopAdditionalSlides,e.loopedSlides>a.length&&(e.loopedSlides=a.length);var d=[],h=[];a.each((function(t,i){var s=m(t);i<e.loopedSlides&&h.push(t),i<a.length&&i>=a.length-e.loopedSlides&&d.push(t),s.attr("data-swiper-slide-index",i)}));for(var p=0;p<h.length;p+=1)s.append(m(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));for(var u=d.length-1;u>=0;u-=1)s.prepend(m(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass))},loopFix:function(){this.emit("beforeLoopFix");var e,t=this.activeIndex,i=this.slides,s=this.loopedSlides,a=this.allowSlidePrev,r=this.allowSlideNext,n=this.snapGrid,l=this.rtlTranslate;this.allowSlidePrev=!0,this.allowSlideNext=!0;var o=-n[t]-this.getTranslate();if(t<s)e=i.length-3*s+t,e+=s,this.slideTo(e,0,!1,!0)&&0!==o&&this.setTranslate((l?-this.translate:this.translate)-o);else if(t>=i.length-s){e=-i.length+t+s,e+=s,this.slideTo(e,0,!1,!0)&&0!==o&&this.setTranslate((l?-this.translate:this.translate)-o)}this.allowSlidePrev=a,this.allowSlideNext=r,this.emit("loopFix")},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,i=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),i.removeAttr("data-swiper-slide-index")}},grabCursor:{setGrabCursor:function(e){if(!(this.support.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked||this.params.cssMode)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){this.support.touch||this.params.watchOverflow&&this.isLocked||this.params.cssMode||(this.el.style.cursor="")}},manipulation:{appendSlide:function(e){var t=this.$wrapperEl,i=this.params;if(i.loop&&this.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&t.append(e[s]);else t.append(e);i.loop&&this.loopCreate(),i.observer&&this.support.observer||this.update()},prependSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&this.loopDestroy();var a=s+1;if("object"==typeof e&&"length"in e){for(var r=0;r<e.length;r+=1)e[r]&&i.prepend(e[r]);a=s+e.length}else i.prepend(e);t.loop&&this.loopCreate(),t.observer&&this.support.observer||this.update(),this.slideTo(a,0,!1)},addSlide:function(e,t){var i=this.$wrapperEl,s=this.params,a=this.activeIndex;s.loop&&(a-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+s.slideClass));var r=this.slides.length;if(e<=0)this.prependSlide(t);else if(e>=r)this.appendSlide(t);else{for(var n=a>e?a+1:a,l=[],o=r-1;o>=e;o-=1){var d=this.slides.eq(o);d.remove(),l.unshift(d)}if("object"==typeof t&&"length"in t){for(var h=0;h<t.length;h+=1)t[h]&&i.append(t[h]);n=a>e?a+t.length:a}else i.append(t);for(var p=0;p<l.length;p+=1)i.append(l[p]);s.loop&&this.loopCreate(),s.observer&&this.support.observer||this.update(),s.loop?this.slideTo(n+this.loopedSlides,0,!1):this.slideTo(n,0,!1)}},removeSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&(s-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+t.slideClass));var a,r=s;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)a=e[n],this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1);r=Math.max(r,0)}else a=e,this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1),r=Math.max(r,0);t.loop&&this.loopCreate(),t.observer&&this.support.observer||this.update(),t.loop?this.slideTo(r+this.loopedSlides,0,!1):this.slideTo(r,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},events:{attachEvents:function(){var e=r(),t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl,n=this.device,l=this.support;this.onTouchStart=O.bind(this),this.onTouchMove=A.bind(this),this.onTouchEnd=D.bind(this),t.cssMode&&(this.onScroll=B.bind(this)),this.onClick=N.bind(this);var o=!!t.nested;if(!l.touch&&l.pointerEvents)s.addEventListener(i.start,this.onTouchStart,!1),e.addEventListener(i.move,this.onTouchMove,o),e.addEventListener(i.end,this.onTouchEnd,!1);else{if(l.touch){var d=!("touchstart"!==i.start||!l.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.addEventListener(i.start,this.onTouchStart,d),s.addEventListener(i.move,this.onTouchMove,l.passiveListener?{passive:!1,capture:o}:o),s.addEventListener(i.end,this.onTouchEnd,d),i.cancel&&s.addEventListener(i.cancel,this.onTouchEnd,d),H||(e.addEventListener("touchstart",X),H=!0)}(t.simulateTouch&&!n.ios&&!n.android||t.simulateTouch&&!l.touch&&n.ios)&&(s.addEventListener("mousedown",this.onTouchStart,!1),e.addEventListener("mousemove",this.onTouchMove,o),e.addEventListener("mouseup",this.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&s.addEventListener("click",this.onClick,!0),t.cssMode&&a.addEventListener("scroll",this.onScroll),t.updateOnWindowResize?this.on(n.ios||n.android?"resize orientationchange observerUpdate":"resize observerUpdate",G,!0):this.on("observerUpdate",G,!0)},detachEvents:function(){var e=r(),t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl,n=this.device,l=this.support,o=!!t.nested;if(!l.touch&&l.pointerEvents)s.removeEventListener(i.start,this.onTouchStart,!1),e.removeEventListener(i.move,this.onTouchMove,o),e.removeEventListener(i.end,this.onTouchEnd,!1);else{if(l.touch){var d=!("onTouchStart"!==i.start||!l.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.removeEventListener(i.start,this.onTouchStart,d),s.removeEventListener(i.move,this.onTouchMove,o),s.removeEventListener(i.end,this.onTouchEnd,d),i.cancel&&s.removeEventListener(i.cancel,this.onTouchEnd,d)}(t.simulateTouch&&!n.ios&&!n.android||t.simulateTouch&&!l.touch&&n.ios)&&(s.removeEventListener("mousedown",this.onTouchStart,!1),e.removeEventListener("mousemove",this.onTouchMove,o),e.removeEventListener("mouseup",this.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&s.removeEventListener("click",this.onClick,!0),t.cssMode&&a.removeEventListener("scroll",this.onScroll),this.off(n.ios||n.android?"resize orientationchange observerUpdate":"resize observerUpdate",G)}},breakpoints:{setBreakpoint:function(){var e=this.activeIndex,t=this.initialized,i=this.loopedSlides,s=void 0===i?0:i,a=this.params,r=this.$el,n=a.breakpoints;if(n&&(!n||0!==Object.keys(n).length)){var l=this.getBreakpoint(n);if(l&&this.currentBreakpoint!==l){var o=l in n?n[l]:void 0;o&&["slidesPerView","spaceBetween","slidesPerGroup","slidesPerGroupSkip","slidesPerColumn"].forEach((function(e){var t=o[e];void 0!==t&&(o[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")}));var d=o||this.originalParams,h=a.slidesPerColumn>1,p=d.slidesPerColumn>1;h&&!p?(r.removeClass(a.containerModifierClass+"multirow "+a.containerModifierClass+"multirow-column"),this.emitContainerClasses()):!h&&p&&(r.addClass(a.containerModifierClass+"multirow"),"column"===d.slidesPerColumnFill&&r.addClass(a.containerModifierClass+"multirow-column"),this.emitContainerClasses());var u=d.direction&&d.direction!==a.direction,c=a.loop&&(d.slidesPerView!==a.slidesPerView||u);u&&t&&this.changeDirection(),S(this.params,d),S(this,{allowTouchMove:this.params.allowTouchMove,allowSlideNext:this.params.allowSlideNext,allowSlidePrev:this.params.allowSlidePrev}),this.currentBreakpoint=l,this.emit("_beforeBreakpoint",d),c&&t&&(this.loopDestroy(),this.loopCreate(),this.updateSlides(),this.slideTo(e-s+this.loopedSlides,0,!1)),this.emit("breakpoint",d)}}},getBreakpoint:function(e){var t=l();if(e){var i=!1,s=Object.keys(e).map((function(e){if("string"==typeof e&&0===e.indexOf("@")){var i=parseFloat(e.substr(1));return{value:t.innerHeight*i,point:e}}return{value:e,point:e}}));s.sort((function(e,t){return parseInt(e.value,10)-parseInt(t.value,10)}));for(var a=0;a<s.length;a+=1){var r=s[a],n=r.point;r.value<=t.innerWidth&&(i=n)}return i||"max"}}},checkOverflow:{checkOverflow:function(){var e=this.params,t=this.isLocked,i=this.slides.length>0&&e.slidesOffsetBefore+e.spaceBetween*(this.slides.length-1)+this.slides[0].offsetWidth*this.slides.length;e.slidesOffsetBefore&&e.slidesOffsetAfter&&i?this.isLocked=i<=this.size:this.isLocked=1===this.snapGrid.length,this.allowSlideNext=!this.isLocked,this.allowSlidePrev=!this.isLocked,t!==this.isLocked&&this.emit(this.isLocked?"lock":"unlock"),t&&t!==this.isLocked&&(this.isEnd=!1,this.navigation&&this.navigation.update())}},classes:{addClasses:function(){var e=this.classNames,t=this.params,i=this.rtl,s=this.$el,a=this.device,r=[];r.push("initialized"),r.push(t.direction),t.freeMode&&r.push("free-mode"),t.autoHeight&&r.push("autoheight"),i&&r.push("rtl"),t.slidesPerColumn>1&&(r.push("multirow"),"column"===t.slidesPerColumnFill&&r.push("multirow-column")),a.android&&r.push("android"),a.ios&&r.push("ios"),t.cssMode&&r.push("css-mode"),r.forEach((function(i){e.push(t.containerModifierClass+i)})),s.addClass(e.join(" ")),this.emitContainerClasses()},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" ")),this.emitContainerClasses()}},images:{loadImage:function(e,t,i,s,a,r){var n,o=l();function d(){r&&r()}m(e).parent("picture")[0]||e.complete&&a?d():t?((n=new o.Image).onload=d,n.onerror=d,s&&(n.sizes=s),i&&(n.srcset=i),t&&(n.src=t)):d()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var i=0;i<e.imagesToLoad.length;i+=1){var s=e.imagesToLoad[i];e.loadImage(s,s.currentSrc||s.getAttribute("src"),s.srcset||s.getAttribute("srcset"),s.sizes||s.getAttribute("sizes"),!0,t)}}}},F={},R=function(){function t(){for(var e,i,s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];1===a.length&&a[0].constructor&&a[0].constructor===Object?i=a[0]:(e=a[0],i=a[1]),i||(i={}),i=S({},i),e&&!i.el&&(i.el=e);var n=this;n.support=z(),n.device=P({userAgent:i.userAgent}),n.browser=k(),n.eventsListeners={},n.eventsAnyListeners=[],void 0===n.modules&&(n.modules={}),Object.keys(n.modules).forEach((function(e){var t=n.modules[e];if(t.params){var s=Object.keys(t.params)[0],a=t.params[s];if("object"!=typeof a||null===a)return;if(!(s in i)||!("enabled"in a))return;!0===i[s]&&(i[s]={enabled:!0}),"object"!=typeof i[s]||"enabled"in i[s]||(i[s].enabled=!0),i[s]||(i[s]={enabled:!1})}}));var l=S({},Y);n.useParams(l),n.params=S({},l,F,i),n.originalParams=S({},n.params),n.passedParams=S({},i),n.params&&n.params.on&&Object.keys(n.params.on).forEach((function(e){n.on(e,n.params.on[e])})),n.params&&n.params.onAny&&n.onAny(n.params.onAny),n.$=m;var o=m(n.params.el);if(e=o[0]){if(o.length>1){var d=[];return o.each((function(e){var s=S({},i,{el:e});d.push(new t(s))})),d}var h,p,u;return e.swiper=n,e&&e.shadowRoot&&e.shadowRoot.querySelector?(h=m(e.shadowRoot.querySelector("."+n.params.wrapperClass))).children=function(e){return o.children(e)}:h=o.children("."+n.params.wrapperClass),S(n,{$el:o,el:e,$wrapperEl:h,wrapperEl:h[0],classNames:[],slides:m(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===n.params.direction},isVertical:function(){return"vertical"===n.params.direction},rtl:"rtl"===e.dir.toLowerCase()||"rtl"===o.css("direction"),rtlTranslate:"horizontal"===n.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===o.css("direction")),wrongRTL:"-webkit-box"===h.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev,touchEvents:(p=["touchstart","touchmove","touchend","touchcancel"],u=["mousedown","mousemove","mouseup"],n.support.pointerEvents&&(u=["pointerdown","pointermove","pointerup"]),n.touchEventsTouch={start:p[0],move:p[1],end:p[2],cancel:p[3]},n.touchEventsDesktop={start:u[0],move:u[1],end:u[2]},n.support.touch||!n.params.simulateTouch?n.touchEventsTouch:n.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video, label",lastClickTime:x(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:n.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),n.useModules(),n.emit("_swiper"),n.params.init&&n.init(),n}}var i,s,a,r=t.prototype;return r.emitContainerClasses=function(){var e=this;if(e.params._emitClasses&&e.el){var t=e.el.className.split(" ").filter((function(t){return 0===t.indexOf("swiper-container")||0===t.indexOf(e.params.containerModifierClass)}));e.emit("_containerClasses",t.join(" "))}},r.getSlideClasses=function(e){var t=this;return e.className.split(" ").filter((function(e){return 0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass)})).join(" ")},r.emitSlidesClasses=function(){var e=this;e.params._emitClasses&&e.el&&e.slides.each((function(t){var i=e.getSlideClasses(t);e.emit("_slideClass",t,i)}))},r.slidesPerViewDynamic=function(){var e=this.params,t=this.slides,i=this.slidesGrid,s=this.size,a=this.activeIndex,r=1;if(e.centeredSlides){for(var n,l=t[a].swiperSlideSize,o=a+1;o<t.length;o+=1)t[o]&&!n&&(r+=1,(l+=t[o].swiperSlideSize)>s&&(n=!0));for(var d=a-1;d>=0;d-=1)t[d]&&!n&&(r+=1,(l+=t[d].swiperSlideSize)>s&&(n=!0))}else for(var h=a+1;h<t.length;h+=1)i[h]-i[a]<s&&(r+=1);return r},r.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,i=e.params;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(s(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||s(),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function s(){var t=e.rtlTranslate?-1*e.translate:e.translate,i=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}},r.changeDirection=function(e,t){void 0===t&&(t=!0);var i=this.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(this.$el.removeClass(""+this.params.containerModifierClass+i).addClass(""+this.params.containerModifierClass+e),this.emitContainerClasses(),this.params.direction=e,this.slides.each((function(t){"vertical"===e?t.style.width="":t.style.height=""})),this.emit("changeDirection"),t&&this.update()),this},r.init=function(){this.initialized||(this.emit("beforeInit"),this.params.breakpoints&&this.setBreakpoint(),this.addClasses(),this.params.loop&&this.loopCreate(),this.updateSize(),this.updateSlides(),this.params.watchOverflow&&this.checkOverflow(),this.params.grabCursor&&this.setGrabCursor(),this.params.preloadImages&&this.preloadImages(),this.params.loop?this.slideTo(this.params.initialSlide+this.loopedSlides,0,this.params.runCallbacksOnInit):this.slideTo(this.params.initialSlide,0,this.params.runCallbacksOnInit),this.attachEvents(),this.initialized=!0,this.emit("init"),this.emit("afterInit"))},r.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var i,s=this,a=s.params,r=s.$el,n=s.$wrapperEl,l=s.slides;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),r.removeAttr("style"),n.removeAttr("style"),l&&l.length&&l.removeClass([a.slideVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((function(e){s.off(e)})),!1!==e&&(s.$el[0].swiper=null,i=s,Object.keys(i).forEach((function(e){try{i[e]=null}catch(e){}try{delete i[e]}catch(e){}}))),s.destroyed=!0),null},t.extendDefaults=function(e){S(F,e)},t.installModule=function(e){t.prototype.modules||(t.prototype.modules={});var i=e.name||Object.keys(t.prototype.modules).length+"_"+x();t.prototype.modules[i]=e},t.use=function(e){return Array.isArray(e)?(e.forEach((function(e){return t.installModule(e)})),t):(t.installModule(e),t)},i=t,a=[{key:"extendedDefaults",get:function(){return F}},{key:"defaults",get:function(){return Y}}],(s=null)&&e(i.prototype,s),a&&e(i,a),t}();Object.keys(V).forEach((function(e){Object.keys(V[e]).forEach((function(t){R.prototype[t]=V[e][t]}))})),R.use([$,I]);var W={update:function(e){var t=this,i=t.params,s=i.slidesPerView,a=i.slidesPerGroup,r=i.centeredSlides,n=t.params.virtual,l=n.addSlidesBefore,o=n.addSlidesAfter,d=t.virtual,h=d.from,p=d.to,u=d.slides,c=d.slidesGrid,f=d.renderSlide,v=d.offset;t.updateActiveIndex();var m,g,w,y=t.activeIndex||0;m=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(g=Math.floor(s/2)+a+o,w=Math.floor(s/2)+a+l):(g=s+(a-1)+o,w=a+l);var b=Math.max((y||0)-w,0),E=Math.min((y||0)+g,u.length-1),x=(t.slidesGrid[b]||0)-(t.slidesGrid[0]||0);function T(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(S(t.virtual,{from:b,to:E,offset:x,slidesGrid:t.slidesGrid}),h===b&&p===E&&!e)return t.slidesGrid!==c&&x!==v&&t.slides.css(m,x+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:x,from:b,to:E,slides:function(){for(var e=[],t=b;t<=E;t+=1)e.push(u[t]);return e}()}),void(t.params.virtual.renderExternalUpdate&&T());var C=[],M=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var z=h;z<=p;z+=1)(z<b||z>E)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+z+'"]').remove();for(var P=0;P<u.length;P+=1)P>=b&&P<=E&&(void 0===p||e?M.push(P):(P>p&&M.push(P),P<h&&C.push(P)));M.forEach((function(e){t.$wrapperEl.append(f(u[e],e))})),C.sort((function(e,t){return t-e})).forEach((function(e){t.$wrapperEl.prepend(f(u[e],e))})),t.$wrapperEl.children(".swiper-slide").css(m,x+"px"),T()},renderSlide:function(e,t){var i=this.params.virtual;if(i.cache&&this.virtual.cache[t])return this.virtual.cache[t];var s=i.renderSlide?m(i.renderSlide.call(this,e,t)):m('<div class="'+this.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(this.virtual.cache[t]=s),s},appendSlide:function(e){if("object"==typeof e&&"length"in e)for(var t=0;t<e.length;t+=1)e[t]&&this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);this.virtual.update(!0)},prependSlide:function(e){var t=this.activeIndex,i=t+1,s=1;if(Array.isArray(e)){for(var a=0;a<e.length;a+=1)e[a]&&this.virtual.slides.unshift(e[a]);i=t+e.length,s=e.length}else this.virtual.slides.unshift(e);if(this.params.virtual.cache){var r=this.virtual.cache,n={};Object.keys(r).forEach((function(e){var t=r[e],i=t.attr("data-swiper-slide-index");i&&t.attr("data-swiper-slide-index",parseInt(i,10)+1),n[parseInt(e,10)+s]=t})),this.virtual.cache=n}this.virtual.update(!0),this.slideTo(i,0)},removeSlide:function(e){if(null!=e){var t=this.activeIndex;if(Array.isArray(e))for(var i=e.length-1;i>=0;i-=1)this.virtual.slides.splice(e[i],1),this.params.virtual.cache&&delete this.virtual.cache[e[i]],e[i]<t&&(t-=1),t=Math.max(t,0);else this.virtual.slides.splice(e,1),this.params.virtual.cache&&delete this.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);this.virtual.update(!0),this.slideTo(t,0)}},removeAllSlides:function(){this.virtual.slides=[],this.params.virtual.cache&&(this.virtual.cache={}),this.virtual.update(!0),this.slideTo(0,0)}},q={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}},create:function(){M(this,{virtual:t(t({},W),{},{slides:this.params.virtual.slides,cache:{}})})},on:{beforeInit:function(e){if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};S(e.params,t),S(e.originalParams,t),e.params.initialSlide||e.virtual.update()}},setTranslate:function(e){e.params.virtual.enabled&&e.virtual.update()}}},j={handle:function(e){var t=l(),i=r(),s=this.rtlTranslate,a=e;a.originalEvent&&(a=a.originalEvent);var n=a.keyCode||a.charCode,o=this.params.keyboard.pageUpDown,d=o&&33===n,h=o&&34===n,p=37===n,u=39===n,c=38===n,f=40===n;if(!this.allowSlideNext&&(this.isHorizontal()&&u||this.isVertical()&&f||h))return!1;if(!this.allowSlidePrev&&(this.isHorizontal()&&p||this.isVertical()&&c||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||i.activeElement&&i.activeElement.nodeName&&("input"===i.activeElement.nodeName.toLowerCase()||"textarea"===i.activeElement.nodeName.toLowerCase()))){if(this.params.keyboard.onlyInViewport&&(d||h||p||u||c||f)){var v=!1;if(this.$el.parents("."+this.params.slideClass).length>0&&0===this.$el.parents("."+this.params.slideActiveClass).length)return;var m=t.innerWidth,g=t.innerHeight,w=this.$el.offset();s&&(w.left-=this.$el[0].scrollLeft);for(var y=[[w.left,w.top],[w.left+this.width,w.top],[w.left,w.top+this.height],[w.left+this.width,w.top+this.height]],b=0;b<y.length;b+=1){var E=y[b];E[0]>=0&&E[0]<=m&&E[1]>=0&&E[1]<=g&&(v=!0)}if(!v)return}this.isHorizontal()?((d||h||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((h||u)&&!s||(d||p)&&s)&&this.slideNext(),((d||p)&&!s||(h||u)&&s)&&this.slidePrev()):((d||h||c||f)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(h||f)&&this.slideNext(),(d||c)&&this.slidePrev()),this.emit("keyPress",n)}},enable:function(){var e=r();this.keyboard.enabled||(m(e).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){var e=r();this.keyboard.enabled&&(m(e).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},_={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}},create:function(){M(this,{keyboard:t({enabled:!1},j)})},on:{init:function(e){e.params.keyboard.enabled&&e.keyboard.enable()},destroy:function(e){e.keyboard.enabled&&e.keyboard.disable()}}};var U={lastScrollTime:x(),lastEventBeforeSnap:void 0,recentWheelEvents:[],event:function(){return l().navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e=r(),t="onwheel"in e;if(!t){var i=e.createElement("div");i.setAttribute("onwheel","return;"),t="function"==typeof i.onwheel}return!t&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(t=e.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel"},normalize:function(e){var t=0,i=0,s=0,a=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),s=10*t,a=10*i,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(s=e.deltaX),e.shiftKey&&!s&&(s=a,a=0),(s||a)&&e.deltaMode&&(1===e.deltaMode?(s*=40,a*=40):(s*=800,a*=800)),s&&!t&&(t=s<1?-1:1),a&&!i&&(i=a<1?-1:1),{spinX:t,spinY:i,pixelX:s,pixelY:a}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,i=this,s=i.params.mousewheel;i.params.cssMode&&t.preventDefault();var a=i.$el;if("container"!==i.params.mousewheel.eventsTarget&&(a=m(i.params.mousewheel.eventsTarget)),!i.mouseEntered&&!a[0].contains(t.target)&&!s.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var r=0,n=i.rtlTranslate?-1:1,l=U.normalize(t);if(s.forceToAxis)if(i.isHorizontal()){if(!(Math.abs(l.pixelX)>Math.abs(l.pixelY)))return!0;r=-l.pixelX*n}else{if(!(Math.abs(l.pixelY)>Math.abs(l.pixelX)))return!0;r=-l.pixelY}else r=Math.abs(l.pixelX)>Math.abs(l.pixelY)?-l.pixelX*n:-l.pixelY;if(0===r)return!0;if(s.invert&&(r=-r),i.params.freeMode){var o={time:x(),delta:Math.abs(r),direction:Math.sign(r)},d=i.mousewheel.lastEventBeforeSnap,h=d&&o.time<d.time+500&&o.delta<=d.delta&&o.direction===d.direction;if(!h){i.mousewheel.lastEventBeforeSnap=void 0,i.params.loop&&i.loopFix();var p=i.getTranslate()+r*s.sensitivity,u=i.isBeginning,c=i.isEnd;if(p>=i.minTranslate()&&(p=i.minTranslate()),p<=i.maxTranslate()&&(p=i.maxTranslate()),i.setTransition(0),i.setTranslate(p),i.updateProgress(),i.updateActiveIndex(),i.updateSlidesClasses(),(!u&&i.isBeginning||!c&&i.isEnd)&&i.updateSlidesClasses(),i.params.freeModeSticky){clearTimeout(i.mousewheel.timeout),i.mousewheel.timeout=void 0;var f=i.mousewheel.recentWheelEvents;f.length>=15&&f.shift();var v=f.length?f[f.length-1]:void 0,g=f[0];if(f.push(o),v&&(o.delta>v.delta||o.direction!==v.direction))f.splice(0);else if(f.length>=15&&o.time-g.time<500&&g.delta-o.delta>=1&&o.delta<=6){var w=r>0?.8:.2;i.mousewheel.lastEventBeforeSnap=o,f.splice(0),i.mousewheel.timeout=E((function(){i.slideToClosest(i.params.speed,!0,void 0,w)}),0)}i.mousewheel.timeout||(i.mousewheel.timeout=E((function(){i.mousewheel.lastEventBeforeSnap=o,f.splice(0),i.slideToClosest(i.params.speed,!0,void 0,.5)}),500))}if(h||i.emit("scroll",t),i.params.autoplay&&i.params.autoplayDisableOnInteraction&&i.autoplay.stop(),p===i.minTranslate()||p===i.maxTranslate())return!0}}else{var y={time:x(),delta:Math.abs(r),direction:Math.sign(r),raw:e},b=i.mousewheel.recentWheelEvents;b.length>=2&&b.shift();var T=b.length?b[b.length-1]:void 0;if(b.push(y),T?(y.direction!==T.direction||y.delta>T.delta||y.time>T.time+150)&&i.mousewheel.animateSlider(y):i.mousewheel.animateSlider(y),i.mousewheel.releaseScroll(y))return!0}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},animateSlider:function(e){var t=l();return!(this.params.mousewheel.thresholdDelta&&e.delta<this.params.mousewheel.thresholdDelta)&&(!(this.params.mousewheel.thresholdTime&&x()-this.mousewheel.lastScrollTime<this.params.mousewheel.thresholdTime)&&(e.delta>=6&&x()-this.mousewheel.lastScrollTime<60||(e.direction<0?this.isEnd&&!this.params.loop||this.animating||(this.slideNext(),this.emit("scroll",e.raw)):this.isBeginning&&!this.params.loop||this.animating||(this.slidePrev(),this.emit("scroll",e.raw)),this.mousewheel.lastScrollTime=(new t.Date).getTime(),!1)))},releaseScroll:function(e){var t=this.params.mousewheel;if(e.direction<0){if(this.isEnd&&!this.params.loop&&t.releaseOnEdges)return!0}else if(this.isBeginning&&!this.params.loop&&t.releaseOnEdges)return!0;return!1},enable:function(){var e=U.event();if(this.params.cssMode)return this.wrapperEl.removeEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarget&&(t=m(this.params.mousewheel.eventsTarget)),t.on("mouseenter",this.mousewheel.handleMouseEnter),t.on("mouseleave",this.mousewheel.handleMouseLeave),t.on(e,this.mousewheel.handle),this.mousewheel.enabled=!0,!0},disable:function(){var e=U.event();if(this.params.cssMode)return this.wrapperEl.addEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(!this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarget&&(t=m(this.params.mousewheel.eventsTarget)),t.off(e,this.mousewheel.handle),this.mousewheel.enabled=!1,!0}},K={update:function(){var e=this.params.navigation;if(!this.params.loop){var t=this.navigation,i=t.$nextEl,s=t.$prevEl;s&&s.length>0&&(this.isBeginning?s.addClass(e.disabledClass):s.removeClass(e.disabledClass),s[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass)),i&&i.length>0&&(this.isEnd?i.addClass(e.disabledClass):i.removeClass(e.disabledClass),i[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,i=this.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=m(i.nextEl),this.params.uniqueNavElements&&"string"==typeof i.nextEl&&e.length>1&&1===this.$el.find(i.nextEl).length&&(e=this.$el.find(i.nextEl))),i.prevEl&&(t=m(i.prevEl),this.params.uniqueNavElements&&"string"==typeof i.prevEl&&t.length>1&&1===this.$el.find(i.prevEl).length&&(t=this.$el.find(i.prevEl))),e&&e.length>0&&e.on("click",this.navigation.onNextClick),t&&t.length>0&&t.on("click",this.navigation.onPrevClick),S(this.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;t&&t.length&&(t.off("click",this.navigation.onNextClick),t.removeClass(this.params.navigation.disabledClass)),i&&i.length&&(i.off("click",this.navigation.onPrevClick),i.removeClass(this.params.navigation.disabledClass))}},Z={update:function(){var e=this.rtl,t=this.params.pagination;if(t.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var i,s=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,a=this.pagination.$el,r=this.params.loop?Math.ceil((s-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length;if(this.params.loop?((i=Math.ceil((this.activeIndex-this.loopedSlides)/this.params.slidesPerGroup))>s-1-2*this.loopedSlides&&(i-=s-2*this.loopedSlides),i>r-1&&(i-=r),i<0&&"bullets"!==this.params.paginationType&&(i=r+i)):i=void 0!==this.snapIndex?this.snapIndex:this.activeIndex||0,"bullets"===t.type&&this.pagination.bullets&&this.pagination.bullets.length>0){var n,l,o,d=this.pagination.bullets;if(t.dynamicBullets&&(this.pagination.bulletSize=d.eq(0)[this.isHorizontal()?"outerWidth":"outerHeight"](!0),a.css(this.isHorizontal()?"width":"height",this.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==this.previousIndex&&(this.pagination.dynamicBulletIndex+=i-this.previousIndex,this.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?this.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:this.pagination.dynamicBulletIndex<0&&(this.pagination.dynamicBulletIndex=0)),n=i-this.pagination.dynamicBulletIndex,o=((l=n+(Math.min(d.length,t.dynamicMainBullets)-1))+n)/2),d.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),a.length>1)d.each((function(e){var s=m(e),a=s.index();a===i&&s.addClass(t.bulletActiveClass),t.dynamicBullets&&(a>=n&&a<=l&&s.addClass(t.bulletActiveClass+"-main"),a===n&&s.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),a===l&&s.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))}));else{var h=d.eq(i),p=h.index();if(h.addClass(t.bulletActiveClass),t.dynamicBullets){for(var u=d.eq(n),c=d.eq(l),f=n;f<=l;f+=1)d.eq(f).addClass(t.bulletActiveClass+"-main");if(this.params.loop)if(p>=d.length-t.dynamicMainBullets){for(var v=t.dynamicMainBullets;v>=0;v-=1)d.eq(d.length-v).addClass(t.bulletActiveClass+"-main");d.eq(d.length-t.dynamicMainBullets-1).addClass(t.bulletActiveClass+"-prev")}else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),c.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next");else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),c.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}}if(t.dynamicBullets){var g=Math.min(d.length,t.dynamicMainBullets+4),w=(this.pagination.bulletSize*g-this.pagination.bulletSize)/2-o*this.pagination.bulletSize,y=e?"right":"left";d.css(this.isHorizontal()?y:"top",w+"px")}}if("fraction"===t.type&&(a.find("."+t.currentClass).text(t.formatFractionCurrent(i+1)),a.find("."+t.totalClass).text(t.formatFractionTotal(r))),"progressbar"===t.type){var b;b=t.progressbarOpposite?this.isHorizontal()?"vertical":"horizontal":this.isHorizontal()?"horizontal":"vertical";var E=(i+1)/r,x=1,T=1;"horizontal"===b?x=E:T=E,a.find("."+t.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+x+") scaleY("+T+")").transition(this.params.speed)}"custom"===t.type&&t.renderCustom?(a.html(t.renderCustom(this,i+1,r)),this.emit("paginationRender",a[0])):this.emit("paginationUpdate",a[0]),a[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,i=this.pagination.$el,s="";if("bullets"===e.type){for(var a=this.params.loop?Math.ceil((t-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length,r=0;r<a;r+=1)e.renderBullet?s+=e.renderBullet.call(this,r,e.bulletClass):s+="<"+e.bulletElement+' class="'+e.bulletClass+'"></'+e.bulletElement+">";i.html(s),this.pagination.bullets=i.find("."+e.bulletClass)}"fraction"===e.type&&(s=e.renderFraction?e.renderFraction.call(this,e.currentClass,e.totalClass):'<span class="'+e.currentClass+'"></span> / <span class="'+e.totalClass+'"></span>',i.html(s)),"progressbar"===e.type&&(s=e.renderProgressbar?e.renderProgressbar.call(this,e.progressbarFillClass):'<span class="'+e.progressbarFillClass+'"></span>',i.html(s)),"custom"!==e.type&&this.emit("paginationRender",this.pagination.$el[0])}},init:function(){var e=this,t=e.params.pagination;if(t.el){var i=m(t.el);0!==i.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&i.length>1&&(i=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&i.addClass(t.clickableClass),i.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(i.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&i.addClass(t.progressbarOppositeClass),t.clickable&&i.on("click","."+t.bulletClass,(function(t){t.preventDefault();var i=m(this).index()*e.params.slidesPerGroup;e.params.loop&&(i+=e.loopedSlides),e.slideTo(i)})),S(e.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),this.pagination.bullets&&this.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click","."+e.bulletClass)}}},J={setTranslate:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=this.rtlTranslate,i=this.progress,s=e.dragSize,a=e.trackSize,r=e.$dragEl,n=e.$el,l=this.params.scrollbar,o=s,d=(a-s)*i;t?(d=-d)>0?(o=s-d,d=0):-d+s>a&&(o=a+d):d<0?(o=s+d,d=0):d+s>a&&(o=a-d),this.isHorizontal()?(r.transform("translate3d("+d+"px, 0, 0)"),r[0].style.width=o+"px"):(r.transform("translate3d(0px, "+d+"px, 0)"),r[0].style.height=o+"px"),l.hide&&(clearTimeout(this.scrollbar.timeout),n[0].style.opacity=1,this.scrollbar.timeout=setTimeout((function(){n[0].style.opacity=0,n.transition(400)}),1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=e.$dragEl,i=e.$el;t[0].style.width="",t[0].style.height="";var s,a=this.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,r=this.size/this.virtualSize,n=r*(a/this.size);s="auto"===this.params.scrollbar.dragSize?a*r:parseInt(this.params.scrollbar.dragSize,10),this.isHorizontal()?t[0].style.width=s+"px":t[0].style.height=s+"px",i[0].style.display=r>=1?"none":"",this.params.scrollbar.hide&&(i[0].style.opacity=0),S(e,{trackSize:a,divider:r,moveDivider:n,dragSize:s}),e.$el[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](this.params.scrollbar.lockClass)}},getPointerPosition:function(e){return this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY},setDragPosition:function(e){var t,i=this.scrollbar,s=this.rtlTranslate,a=i.$el,r=i.dragSize,n=i.trackSize,l=i.dragStartPos;t=(i.getPointerPosition(e)-a.offset()[this.isHorizontal()?"left":"top"]-(null!==l?l:r/2))/(n-r),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var o=this.minTranslate()+(this.maxTranslate()-this.minTranslate())*t;this.updateProgress(o),this.setTranslate(o),this.updateActiveIndex(),this.updateSlidesClasses()},onDragStart:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el,r=i.$dragEl;this.scrollbar.isTouched=!0,this.scrollbar.dragStartPos=e.target===r[0]||e.target===r?i.getPointerPosition(e)-e.target.getBoundingClientRect()[this.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.transition(100),r.transition(100),i.setDragPosition(e),clearTimeout(this.scrollbar.dragTimeout),a.transition(0),t.hide&&a.css("opacity",1),this.params.cssMode&&this.$wrapperEl.css("scroll-snap-type","none"),this.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,i=this.$wrapperEl,s=t.$el,a=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),i.transition(0),s.transition(0),a.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el;this.scrollbar.isTouched&&(this.scrollbar.isTouched=!1,this.params.cssMode&&(this.$wrapperEl.css("scroll-snap-type",""),s.transition("")),t.hide&&(clearTimeout(this.scrollbar.dragTimeout),this.scrollbar.dragTimeout=E((function(){a.css("opacity",0),a.transition(400)}),1e3)),this.emit("scrollbarDragEnd",e),t.snapOnRelease&&this.slideToClosest())},enableDraggable:function(){if(this.params.scrollbar.el){var e=r(),t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,n=this.support,l=t.$el[0],o=!(!n.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},d=!(!n.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};n.touch?(l.addEventListener(i.start,this.scrollbar.onDragStart,o),l.addEventListener(i.move,this.scrollbar.onDragMove,o),l.addEventListener(i.end,this.scrollbar.onDragEnd,d)):(l.addEventListener(s.start,this.scrollbar.onDragStart,o),e.addEventListener(s.move,this.scrollbar.onDragMove,o),e.addEventListener(s.end,this.scrollbar.onDragEnd,d))}},disableDraggable:function(){if(this.params.scrollbar.el){var e=r(),t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,n=this.support,l=t.$el[0],o=!(!n.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},d=!(!n.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};n.touch?(l.removeEventListener(i.start,this.scrollbar.onDragStart,o),l.removeEventListener(i.move,this.scrollbar.onDragMove,o),l.removeEventListener(i.end,this.scrollbar.onDragEnd,d)):(l.removeEventListener(s.start,this.scrollbar.onDragStart,o),e.removeEventListener(s.move,this.scrollbar.onDragMove,o),e.removeEventListener(s.end,this.scrollbar.onDragEnd,d))}},init:function(){if(this.params.scrollbar.el){var e=this.scrollbar,t=this.$el,i=this.params.scrollbar,s=m(i.el);this.params.uniqueNavElements&&"string"==typeof i.el&&s.length>1&&1===t.find(i.el).length&&(s=t.find(i.el));var a=s.find("."+this.params.scrollbar.dragClass);0===a.length&&(a=m('<div class="'+this.params.scrollbar.dragClass+'"></div>'),s.append(a)),S(e,{$el:s,el:s[0],$dragEl:a,dragEl:a[0]}),i.draggable&&e.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},Q={setTransform:function(e,t){var i=this.rtl,s=m(e),a=i?-1:1,r=s.attr("data-swiper-parallax")||"0",n=s.attr("data-swiper-parallax-x"),l=s.attr("data-swiper-parallax-y"),o=s.attr("data-swiper-parallax-scale"),d=s.attr("data-swiper-parallax-opacity");if(n||l?(n=n||"0",l=l||"0"):this.isHorizontal()?(n=r,l="0"):(l=r,n="0"),n=n.indexOf("%")>=0?parseInt(n,10)*t*a+"%":n*t*a+"px",l=l.indexOf("%")>=0?parseInt(l,10)*t+"%":l*t+"px",null!=d){var h=d-(d-1)*(1-Math.abs(t));s[0].style.opacity=h}if(null==o)s.transform("translate3d("+n+", "+l+", 0px)");else{var p=o-(o-1)*(1-Math.abs(t));s.transform("translate3d("+n+", "+l+", 0px) scale("+p+")")}},setTranslate:function(){var e=this,t=e.$el,i=e.slides,s=e.progress,a=e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t){e.parallax.setTransform(t,s)})),i.each((function(t,i){var r=t.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(r+=Math.ceil(i/2)-s*(a.length-1)),r=Math.min(Math.max(r,-1),1),m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t){e.parallax.setTransform(t,r)}))}))},setTransition:function(e){void 0===e&&(e=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t){var i=m(t),s=parseInt(i.attr("data-swiper-parallax-duration"),10)||e;0===e&&(s=0),i.transition(s)}))}},ee={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,i=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,a=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-t,2)+Math.pow(a-i,2))},onGestureStart:function(e){var t=this.support,i=this.params.zoom,s=this.zoom,a=s.gesture;if(s.fakeGestureTouched=!1,s.fakeGestureMoved=!1,!t.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;s.fakeGestureTouched=!0,a.scaleStart=ee.getDistanceBetweenTouches(e)}a.$slideEl&&a.$slideEl.length||(a.$slideEl=m(e.target).closest("."+this.params.slideClass),0===a.$slideEl.length&&(a.$slideEl=this.slides.eq(this.activeIndex)),a.$imageEl=a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),a.$imageWrapEl=a.$imageEl.parent("."+i.containerClass),a.maxRatio=a.$imageWrapEl.attr("data-swiper-zoom")||i.maxRatio,0!==a.$imageWrapEl.length)?(a.$imageEl&&a.$imageEl.transition(0),this.zoom.isScaling=!0):a.$imageEl=void 0},onGestureChange:function(e){var t=this.support,i=this.params.zoom,s=this.zoom,a=s.gesture;if(!t.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;s.fakeGestureMoved=!0,a.scaleMove=ee.getDistanceBetweenTouches(e)}a.$imageEl&&0!==a.$imageEl.length?(t.gestures?s.scale=e.scale*s.currentScale:s.scale=a.scaleMove/a.scaleStart*s.currentScale,s.scale>a.maxRatio&&(s.scale=a.maxRatio-1+Math.pow(s.scale-a.maxRatio+1,.5)),s.scale<i.minRatio&&(s.scale=i.minRatio+1-Math.pow(i.minRatio-s.scale+1,.5)),a.$imageEl.transform("translate3d(0,0,0) scale("+s.scale+")")):"gesturechange"===e.type&&s.onGestureStart(e)},onGestureEnd:function(e){var t=this.device,i=this.support,s=this.params.zoom,a=this.zoom,r=a.gesture;if(!i.gestures){if(!a.fakeGestureTouched||!a.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!t.android)return;a.fakeGestureTouched=!1,a.fakeGestureMoved=!1}r.$imageEl&&0!==r.$imageEl.length&&(a.scale=Math.max(Math.min(a.scale,r.maxRatio),s.minRatio),r.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(r.$slideEl=void 0))},onTouchStart:function(e){var t=this.device,i=this.zoom,s=i.gesture,a=i.image;s.$imageEl&&0!==s.$imageEl.length&&(a.isTouched||(t.android&&e.cancelable&&e.preventDefault(),a.isTouched=!0,a.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,a.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this.zoom,i=t.gesture,s=t.image,a=t.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(this.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=T(i.$imageWrapEl[0],"x")||0,s.startY=T(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),this.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var r=s.width*t.scale,n=s.height*t.scale;if(!(r<i.slideWidth&&n<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-r/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-n/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!t.isScaling){if(this.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!this.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),a.prevPositionX||(a.prevPositionX=s.touchesCurrent.x),a.prevPositionY||(a.prevPositionY=s.touchesCurrent.y),a.prevTime||(a.prevTime=Date.now()),a.x=(s.touchesCurrent.x-a.prevPositionX)/(Date.now()-a.prevTime)/2,a.y=(s.touchesCurrent.y-a.prevPositionY)/(Date.now()-a.prevTime)/2,Math.abs(s.touchesCurrent.x-a.prevPositionX)<2&&(a.x=0),Math.abs(s.touchesCurrent.y-a.prevPositionY)<2&&(a.y=0),a.prevPositionX=s.touchesCurrent.x,a.prevPositionY=s.touchesCurrent.y,a.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,i=e.image,s=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!i.isTouched||!i.isMoved)return i.isTouched=!1,void(i.isMoved=!1);i.isTouched=!1,i.isMoved=!1;var a=300,r=300,n=s.x*a,l=i.currentX+n,o=s.y*r,d=i.currentY+o;0!==s.x&&(a=Math.abs((l-i.currentX)/s.x)),0!==s.y&&(r=Math.abs((d-i.currentY)/s.y));var h=Math.max(a,r);i.currentX=l,i.currentY=d;var p=i.width*e.scale,u=i.height*e.scale;i.minX=Math.min(t.slideWidth/2-p/2,0),i.maxX=-i.minX,i.minY=Math.min(t.slideHeight/2-u/2,0),i.maxY=-i.minY,i.currentX=Math.max(Math.min(i.currentX,i.maxX),i.minX),i.currentY=Math.max(Math.min(i.currentY,i.maxY),i.minY),t.$imageWrapEl.transition(h).transform("translate3d("+i.currentX+"px, "+i.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl&&t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl&&t.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,e.currentScale=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,i,s,a,r,n,l,o,d,h,p,u,c,f,v,m,g=this.zoom,w=this.params.zoom,y=g.gesture,b=g.image;(y.$slideEl||(this.params.virtual&&this.params.virtual.enabled&&this.virtual?y.$slideEl=this.$wrapperEl.children("."+this.params.slideActiveClass):y.$slideEl=this.slides.eq(this.activeIndex),y.$imageEl=y.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),y.$imageWrapEl=y.$imageEl.parent("."+w.containerClass)),y.$imageEl&&0!==y.$imageEl.length)&&(y.$slideEl.addClass(""+w.zoomedSlideClass),void 0===b.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,i="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=b.touchesStart.x,i=b.touchesStart.y),g.scale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,g.currentScale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,e?(v=y.$slideEl[0].offsetWidth,m=y.$slideEl[0].offsetHeight,s=y.$slideEl.offset().left+v/2-t,a=y.$slideEl.offset().top+m/2-i,l=y.$imageEl[0].offsetWidth,o=y.$imageEl[0].offsetHeight,d=l*g.scale,h=o*g.scale,c=-(p=Math.min(v/2-d/2,0)),f=-(u=Math.min(m/2-h/2,0)),(r=s*g.scale)<p&&(r=p),r>c&&(r=c),(n=a*g.scale)<u&&(n=u),n>f&&(n=f)):(r=0,n=0),y.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),y.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+g.scale+")"))},out:function(){var e=this.zoom,t=this.params.zoom,i=e.gesture;i.$slideEl||(this.params.virtual&&this.params.virtual.enabled&&this.virtual?i.$slideEl=this.$wrapperEl.children("."+this.params.slideActiveClass):i.$slideEl=this.slides.eq(this.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),i.$imageWrapEl=i.$imageEl.parent("."+t.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(e.scale=1,e.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+t.zoomedSlideClass),i.$slideEl=void 0)},toggleGestures:function(e){var t=this.zoom,i=t.slideSelector,s=t.passiveListener;this.$wrapperEl[e]("gesturestart",i,t.onGestureStart,s),this.$wrapperEl[e]("gesturechange",i,t.onGestureChange,s),this.$wrapperEl[e]("gestureend",i,t.onGestureEnd,s)},enableGestures:function(){this.zoom.gesturesEnabled||(this.zoom.gesturesEnabled=!0,this.zoom.toggleGestures("on"))},disableGestures:function(){this.zoom.gesturesEnabled&&(this.zoom.gesturesEnabled=!1,this.zoom.toggleGestures("off"))},enable:function(){var e=this.support,t=this.zoom;if(!t.enabled){t.enabled=!0;var i=!("touchstart"!==this.touchEvents.start||!e.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},s=!e.passiveListener||{passive:!1,capture:!0},a="."+this.params.slideClass;this.zoom.passiveListener=i,this.zoom.slideSelector=a,e.gestures?(this.$wrapperEl.on(this.touchEvents.start,this.zoom.enableGestures,i),this.$wrapperEl.on(this.touchEvents.end,this.zoom.disableGestures,i)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.on(this.touchEvents.start,a,t.onGestureStart,i),this.$wrapperEl.on(this.touchEvents.move,a,t.onGestureChange,s),this.$wrapperEl.on(this.touchEvents.end,a,t.onGestureEnd,i),this.touchEvents.cancel&&this.$wrapperEl.on(this.touchEvents.cancel,a,t.onGestureEnd,i)),this.$wrapperEl.on(this.touchEvents.move,"."+this.params.zoom.containerClass,t.onTouchMove,s)}},disable:function(){var e=this.zoom;if(e.enabled){var t=this.support;this.zoom.enabled=!1;var i=!("touchstart"!==this.touchEvents.start||!t.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},s=!t.passiveListener||{passive:!1,capture:!0},a="."+this.params.slideClass;t.gestures?(this.$wrapperEl.off(this.touchEvents.start,this.zoom.enableGestures,i),this.$wrapperEl.off(this.touchEvents.end,this.zoom.disableGestures,i)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.off(this.touchEvents.start,a,e.onGestureStart,i),this.$wrapperEl.off(this.touchEvents.move,a,e.onGestureChange,s),this.$wrapperEl.off(this.touchEvents.end,a,e.onGestureEnd,i),this.touchEvents.cancel&&this.$wrapperEl.off(this.touchEvents.cancel,a,e.onGestureEnd,i)),this.$wrapperEl.off(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove,s)}}},te={loadInSlide:function(e,t){void 0===t&&(t=!0);var i=this,s=i.params.lazy;if(void 0!==e&&0!==i.slides.length){var a=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):i.slides.eq(e),r=a.find("."+s.elementClass+":not(."+s.loadedClass+"):not(."+s.loadingClass+")");!a.hasClass(s.elementClass)||a.hasClass(s.loadedClass)||a.hasClass(s.loadingClass)||r.push(a[0]),0!==r.length&&r.each((function(e){var r=m(e);r.addClass(s.loadingClass);var n=r.attr("data-background"),l=r.attr("data-src"),o=r.attr("data-srcset"),d=r.attr("data-sizes"),h=r.parent("picture");i.loadImage(r[0],l||n,o,d,!1,(function(){if(null!=i&&i&&(!i||i.params)&&!i.destroyed){if(n?(r.css("background-image",'url("'+n+'")'),r.removeAttr("data-background")):(o&&(r.attr("srcset",o),r.removeAttr("data-srcset")),d&&(r.attr("sizes",d),r.removeAttr("data-sizes")),h.length&&h.children("source").each((function(e){var t=m(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),l&&(r.attr("src",l),r.removeAttr("data-src"))),r.addClass(s.loadedClass).removeClass(s.loadingClass),a.find("."+s.preloaderClass).remove(),i.params.loop&&t){var e=a.attr("data-swiper-slide-index");if(a.hasClass(i.params.slideDuplicateClass)){var p=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(p.index(),!1)}else{var u=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(u.index(),!1)}}i.emit("lazyImageReady",a[0],r[0]),i.params.autoHeight&&i.updateAutoHeight()}})),i.emit("lazyImageLoad",a[0],r[0])}))}},load:function(){var e=this,t=e.$wrapperEl,i=e.params,s=e.slides,a=e.activeIndex,r=e.virtual&&i.virtual.enabled,n=i.lazy,l=i.slidesPerView;function o(e){if(r){if(t.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(s[e])return!0;return!1}function d(e){return r?m(e).attr("data-swiper-slide-index"):m(e).index()}if("auto"===l&&(l=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+i.slideVisibleClass).each((function(t){var i=r?m(t).attr("data-swiper-slide-index"):m(t).index();e.lazy.loadInSlide(i)}));else if(l>1)for(var h=a;h<a+l;h+=1)o(h)&&e.lazy.loadInSlide(h);else e.lazy.loadInSlide(a);if(n.loadPrevNext)if(l>1||n.loadPrevNextAmount&&n.loadPrevNextAmount>1){for(var p=n.loadPrevNextAmount,u=l,c=Math.min(a+u+Math.max(p,u),s.length),f=Math.max(a-Math.max(u,p),0),v=a+l;v<c;v+=1)o(v)&&e.lazy.loadInSlide(v);for(var g=f;g<a;g+=1)o(g)&&e.lazy.loadInSlide(g)}else{var w=t.children("."+i.slideNextClass);w.length>0&&e.lazy.loadInSlide(d(w));var y=t.children("."+i.slidePrevClass);y.length>0&&e.lazy.loadInSlide(d(y))}}},ie={LinearSpline:function(e,t){var i,s,a,r,n,l=function(e,t){for(s=-1,i=e.length;i-s>1;)e[a=i+s>>1]<=t?s=a:i=a;return i};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=l(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){this.controller.spline||(this.controller.spline=this.params.loop?new ie.LinearSpline(this.slidesGrid,e.slidesGrid):new ie.LinearSpline(this.snapGrid,e.snapGrid))},setTranslate:function(e,t){var i,s,a=this,r=a.controller.control,n=a.constructor;function l(e){var t=a.rtlTranslate?-a.translate:a.translate;"slide"===a.params.controller.by&&(a.controller.getInterpolateFunction(e),s=-a.controller.spline.interpolate(-t)),s&&"container"!==a.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(a.maxTranslate()-a.minTranslate()),s=(t-a.minTranslate())*i+e.minTranslate()),a.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,a),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof n&&l(r[o]);else r instanceof n&&t!==r&&l(r)},setTransition:function(e,t){var i,s=this,a=s.constructor,r=s.controller.control;function n(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.params.autoHeight&&E((function(){t.updateAutoHeight()})),t.$wrapperEl.transitionEnd((function(){r&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())})))}if(Array.isArray(r))for(i=0;i<r.length;i+=1)r[i]!==t&&r[i]instanceof a&&n(r[i]);else r instanceof a&&t!==r&&n(r)}},se={getRandomNumber:function(e){void 0===e&&(e=16);return"x".repeat(e).replace(/x/g,(function(){return Math.round(16*Math.random()).toString(16)}))},makeElFocusable:function(e){return e.attr("tabIndex","0"),e},makeElNotFocusable:function(e){return e.attr("tabIndex","-1"),e},addElRole:function(e,t){return e.attr("role",t),e},addElRoleDescription:function(e,t){return e.attr("aria-role-description",t),e},addElControls:function(e,t){return e.attr("aria-controls",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},addElId:function(e,t){return e.attr("id",t),e},addElLive:function(e,t){return e.attr("aria-live",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this.params.a11y;if(13===e.keyCode){var i=m(e.target);this.navigation&&this.navigation.$nextEl&&i.is(this.navigation.$nextEl)&&(this.isEnd&&!this.params.loop||this.slideNext(),this.isEnd?this.a11y.notify(t.lastSlideMessage):this.a11y.notify(t.nextSlideMessage)),this.navigation&&this.navigation.$prevEl&&i.is(this.navigation.$prevEl)&&(this.isBeginning&&!this.params.loop||this.slidePrev(),this.isBeginning?this.a11y.notify(t.firstSlideMessage):this.a11y.notify(t.prevSlideMessage)),this.pagination&&i.is("."+this.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){if(!this.params.loop&&this.navigation){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;i&&i.length>0&&(this.isBeginning?(this.a11y.disableEl(i),this.a11y.makeElNotFocusable(i)):(this.a11y.enableEl(i),this.a11y.makeElFocusable(i))),t&&t.length>0&&(this.isEnd?(this.a11y.disableEl(t),this.a11y.makeElNotFocusable(t)):(this.a11y.enableEl(t),this.a11y.makeElFocusable(t)))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each((function(i){var s=m(i);e.a11y.makeElFocusable(s),e.params.pagination.renderBullet||(e.a11y.addElRole(s,"button"),e.a11y.addElLabel(s,t.paginationBulletMessage.replace(/\{\{index\}\}/,s.index()+1)))}))},init:function(){var e=this,t=e.params.a11y;e.$el.append(e.a11y.liveRegion);var i=e.$el;t.containerRoleDescriptionMessage&&e.a11y.addElRoleDescription(i,t.containerRoleDescriptionMessage),t.containerMessage&&e.a11y.addElLabel(i,t.containerMessage);var s,a,r,n=e.$wrapperEl,l=n.attr("id")||"swiper-wrapper-"+e.a11y.getRandomNumber(16);e.a11y.addElId(n,l),s=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite",e.a11y.addElLive(n,s),t.itemRoleDescriptionMessage&&e.a11y.addElRoleDescription(m(e.slides),t.itemRoleDescriptionMessage),e.a11y.addElRole(m(e.slides),"group"),e.slides.each((function(t){var i=m(t);e.a11y.addElLabel(i,i.index()+1+" / "+e.slides.length)})),e.navigation&&e.navigation.$nextEl&&(a=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(r=e.navigation.$prevEl),a&&a.length&&(e.a11y.makeElFocusable(a),"BUTTON"!==a[0].tagName&&(e.a11y.addElRole(a,"button"),a.on("keydown",e.a11y.onEnterKey)),e.a11y.addElLabel(a,t.nextSlideMessage),e.a11y.addElControls(a,l)),r&&r.length&&(e.a11y.makeElFocusable(r),"BUTTON"!==r[0].tagName&&(e.a11y.addElRole(r,"button"),r.on("keydown",e.a11y.onEnterKey)),e.a11y.addElLabel(r,t.prevSlideMessage),e.a11y.addElControls(r,l)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)},destroy:function(){var e,t;this.a11y.liveRegion&&this.a11y.liveRegion.length>0&&this.a11y.liveRegion.remove(),this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&e.off("keydown",this.a11y.onEnterKey),t&&t.off("keydown",this.a11y.onEnterKey),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.off("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)}},ae={init:function(){var e=l();if(this.params.history){if(!e.history||!e.history.pushState)return this.params.history.enabled=!1,void(this.params.hashNavigation.enabled=!0);var t=this.history;t.initialized=!0,t.paths=ae.getPathValues(this.params.url),(t.paths.key||t.paths.value)&&(t.scrollToSlide(0,t.paths.value,this.params.runCallbacksOnInit),this.params.history.replaceState||e.addEventListener("popstate",this.history.setHistoryPopState))}},destroy:function(){var e=l();this.params.history.replaceState||e.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=ae.getPathValues(this.params.url),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(e){var t=l(),i=(e?new URL(e):t.location).pathname.slice(1).split("/").filter((function(e){return""!==e})),s=i.length;return{key:i[s-2],value:i[s-1]}},setHistory:function(e,t){var i=l();if(this.history.initialized&&this.params.history.enabled){var s;s=this.params.url?new URL(this.params.url):i.location;var a=this.slides.eq(t),r=ae.slugify(a.attr("data-history"));s.pathname.includes(e)||(r=e+"/"+r);var n=i.history.state;n&&n.value===r||(this.params.history.replaceState?i.history.replaceState({value:r},null,r):i.history.pushState({value:r},null,r))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,i){if(t)for(var s=0,a=this.slides.length;s<a;s+=1){var r=this.slides.eq(s);if(ae.slugify(r.attr("data-history"))===t&&!r.hasClass(this.params.slideDuplicateClass)){var n=r.index();this.slideTo(n,e,i)}}else this.slideTo(0,e,i)}},re={onHashCange:function(){var e=r();this.emit("hashChange");var t=e.location.hash.replace("#","");if(t!==this.slides.eq(this.activeIndex).attr("data-hash")){var i=this.$wrapperEl.children("."+this.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===i)return;this.slideTo(i)}},setHash:function(){var e=l(),t=r();if(this.hashNavigation.initialized&&this.params.hashNavigation.enabled)if(this.params.hashNavigation.replaceState&&e.history&&e.history.replaceState)e.history.replaceState(null,null,"#"+this.slides.eq(this.activeIndex).attr("data-hash")||""),this.emit("hashSet");else{var i=this.slides.eq(this.activeIndex),s=i.attr("data-hash")||i.attr("data-history");t.location.hash=s||"",this.emit("hashSet")}},init:function(){var e=r(),t=l();if(!(!this.params.hashNavigation.enabled||this.params.history&&this.params.history.enabled)){this.hashNavigation.initialized=!0;var i=e.location.hash.replace("#","");if(i)for(var s=0,a=this.slides.length;s<a;s+=1){var n=this.slides.eq(s);if((n.attr("data-hash")||n.attr("data-history"))===i&&!n.hasClass(this.params.slideDuplicateClass)){var o=n.index();this.slideTo(o,0,this.params.runCallbacksOnInit,!0)}}this.params.hashNavigation.watchState&&m(t).on("hashchange",this.hashNavigation.onHashCange)}},destroy:function(){var e=l();this.params.hashNavigation.watchState&&m(e).off("hashchange",this.hashNavigation.onHashCange)}},ne={run:function(){var e=this,t=e.slides.eq(e.activeIndex),i=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(i=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=E((function(){var t;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),t=e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(t=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(t=e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),t=e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(t=e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(t=e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")),(e.params.cssMode&&e.autoplay.running||!1===t)&&e.autoplay.run()}),i)},start:function(){return void 0===this.autoplay.timeout&&(!this.autoplay.running&&(this.autoplay.running=!0,this.emit("autoplayStart"),this.autoplay.run(),!0))},stop:function(){return!!this.autoplay.running&&(void 0!==this.autoplay.timeout&&(this.autoplay.timeout&&(clearTimeout(this.autoplay.timeout),this.autoplay.timeout=void 0),this.autoplay.running=!1,this.emit("autoplayStop"),!0))},pause:function(e){this.autoplay.running&&(this.autoplay.paused||(this.autoplay.timeout&&clearTimeout(this.autoplay.timeout),this.autoplay.paused=!0,0!==e&&this.params.autoplay.waitForTransition?(this.$wrapperEl[0].addEventListener("transitionend",this.autoplay.onTransitionEnd),this.$wrapperEl[0].addEventListener("webkitTransitionEnd",this.autoplay.onTransitionEnd)):(this.autoplay.paused=!1,this.autoplay.run())))},onVisibilityChange:function(){var e=r();"hidden"===e.visibilityState&&this.autoplay.running&&this.autoplay.pause(),"visible"===e.visibilityState&&this.autoplay.paused&&(this.autoplay.run(),this.autoplay.paused=!1)},onTransitionEnd:function(e){this&&!this.destroyed&&this.$wrapperEl&&e.target===this.$wrapperEl[0]&&(this.$wrapperEl[0].removeEventListener("transitionend",this.autoplay.onTransitionEnd),this.$wrapperEl[0].removeEventListener("webkitTransitionEnd",this.autoplay.onTransitionEnd),this.autoplay.paused=!1,this.autoplay.running?this.autoplay.run():this.autoplay.stop())}},le={setTranslate:function(){for(var e=this.slides,t=0;t<e.length;t+=1){var i=this.slides.eq(t),s=-i[0].swiperSlideOffset;this.params.virtualTranslate||(s-=this.translate);var a=0;this.isHorizontal()||(a=s,s=0);var r=this.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:r}).transform("translate3d("+s+"px, "+a+"px, 0px)")}},setTransition:function(e){var t=this,i=t.slides,s=t.$wrapperEl;if(i.transition(e),t.params.virtualTranslate&&0!==e){var a=!1;i.transitionEnd((function(){if(!a&&t&&!t.destroyed){a=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)s.trigger(e[i])}}))}}},oe={setTranslate:function(){var e,t=this.$el,i=this.$wrapperEl,s=this.slides,a=this.width,r=this.height,n=this.rtlTranslate,l=this.size,o=this.browser,d=this.params.cubeEffect,h=this.isHorizontal(),p=this.virtual&&this.params.virtual.enabled,u=0;d.shadow&&(h?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=m('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:a+"px"})):0===(e=t.find(".swiper-cube-shadow")).length&&(e=m('<div class="swiper-cube-shadow"></div>'),t.append(e)));for(var c=0;c<s.length;c+=1){var f=s.eq(c),v=c;p&&(v=parseInt(f.attr("data-swiper-slide-index"),10));var g=90*v,w=Math.floor(g/360);n&&(g=-g,w=Math.floor(-g/360));var y=Math.max(Math.min(f[0].progress,1),-1),b=0,E=0,x=0;v%4==0?(b=4*-w*l,x=0):(v-1)%4==0?(b=0,x=4*-w*l):(v-2)%4==0?(b=l+4*w*l,x=l):(v-3)%4==0&&(b=-l,x=3*l+4*l*w),n&&(b=-b),h||(E=b,b=0);var T="rotateX("+(h?0:-g)+"deg) rotateY("+(h?g:0)+"deg) translate3d("+b+"px, "+E+"px, "+x+"px)";if(y<=1&&y>-1&&(u=90*v+90*y,n&&(u=90*-v-90*y)),f.transform(T),d.slideShadows){var C=h?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),S=h?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===C.length&&(C=m('<div class="swiper-slide-shadow-'+(h?"left":"top")+'"></div>'),f.append(C)),0===S.length&&(S=m('<div class="swiper-slide-shadow-'+(h?"right":"bottom")+'"></div>'),f.append(S)),C.length&&(C[0].style.opacity=Math.max(-y,0)),S.length&&(S[0].style.opacity=Math.max(y,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(h)e.transform("translate3d(0px, "+(a/2+d.shadowOffset)+"px, "+-a/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var M=Math.abs(u)-90*Math.floor(Math.abs(u)/90),z=1.5-(Math.sin(2*M*Math.PI/360)/2+Math.cos(2*M*Math.PI/360)/2),P=d.shadowScale,k=d.shadowScale/z,$=d.shadowOffset;e.transform("scale3d("+P+", 1, "+k+") translate3d(0px, "+(r/2+$)+"px, "+-r/2/k+"px) rotateX(-90deg)")}var L=o.isSafari||o.isWebView?-l/2:0;i.transform("translate3d(0px,0,"+L+"px) rotateX("+(this.isHorizontal()?0:u)+"deg) rotateY("+(this.isHorizontal()?-u:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},de={setTranslate:function(){for(var e=this.slides,t=this.rtlTranslate,i=0;i<e.length;i+=1){var s=e.eq(i),a=s[0].progress;this.params.flipEffect.limitRotation&&(a=Math.max(Math.min(s[0].progress,1),-1));var r=-180*a,n=0,l=-s[0].swiperSlideOffset,o=0;if(this.isHorizontal()?t&&(r=-r):(o=l,l=0,n=-r,r=0),s[0].style.zIndex=-Math.abs(Math.round(a))+e.length,this.params.flipEffect.slideShadows){var d=this.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),h=this.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===d.length&&(d=m('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"left":"top")+'"></div>'),s.append(d)),0===h.length&&(h=m('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"right":"bottom")+'"></div>'),s.append(h)),d.length&&(d[0].style.opacity=Math.max(-a,0)),h.length&&(h[0].style.opacity=Math.max(a,0))}s.transform("translate3d("+l+"px, "+o+"px, 0px) rotateX("+n+"deg) rotateY("+r+"deg)")}},setTransition:function(e){var t=this,i=t.slides,s=t.activeIndex,a=t.$wrapperEl;if(i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;i.eq(s).transitionEnd((function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)a.trigger(e[i])}}))}}},he={setTranslate:function(){for(var e=this.width,t=this.height,i=this.slides,s=this.slidesSizesGrid,a=this.params.coverflowEffect,r=this.isHorizontal(),n=this.translate,l=r?e/2-n:t/2-n,o=r?a.rotate:-a.rotate,d=a.depth,h=0,p=i.length;h<p;h+=1){var u=i.eq(h),c=s[h],f=(l-u[0].swiperSlideOffset-c/2)/c*a.modifier,v=r?o*f:0,g=r?0:o*f,w=-d*Math.abs(f),y=a.stretch;"string"==typeof y&&-1!==y.indexOf("%")&&(y=parseFloat(a.stretch)/100*c);var b=r?0:y*f,E=r?y*f:0,x=1-(1-a.scale)*Math.abs(f);Math.abs(E)<.001&&(E=0),Math.abs(b)<.001&&(b=0),Math.abs(w)<.001&&(w=0),Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(x)<.001&&(x=0);var T="translate3d("+E+"px,"+b+"px,"+w+"px)  rotateX("+g+"deg) rotateY("+v+"deg) scale("+x+")";if(u.transform(T),u[0].style.zIndex=1-Math.abs(Math.round(f)),a.slideShadows){var C=r?u.find(".swiper-slide-shadow-left"):u.find(".swiper-slide-shadow-top"),S=r?u.find(".swiper-slide-shadow-right"):u.find(".swiper-slide-shadow-bottom");0===C.length&&(C=m('<div class="swiper-slide-shadow-'+(r?"left":"top")+'"></div>'),u.append(C)),0===S.length&&(S=m('<div class="swiper-slide-shadow-'+(r?"right":"bottom")+'"></div>'),u.append(S)),C.length&&(C[0].style.opacity=f>0?f:0),S.length&&(S[0].style.opacity=-f>0?-f:0)}}},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},pe={init:function(){var e=this.params.thumbs;if(this.thumbs.initialized)return!1;this.thumbs.initialized=!0;var t=this.constructor;return e.swiper instanceof t?(this.thumbs.swiper=e.swiper,S(this.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),S(this.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):C(e.swiper)&&(this.thumbs.swiper=new t(S({},e.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),this.thumbs.swiperCreated=!0),this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),this.thumbs.swiper.on("tap",this.thumbs.onThumbClick),!0},onThumbClick:function(){var e=this.thumbs.swiper;if(e){var t=e.clickedIndex,i=e.clickedSlide;if(!(i&&m(i).hasClass(this.params.thumbs.slideThumbActiveClass)||null==t)){var s;if(s=e.params.loop?parseInt(m(e.clickedSlide).attr("data-swiper-slide-index"),10):t,this.params.loop){var a=this.activeIndex;this.slides.eq(a).hasClass(this.params.slideDuplicateClass)&&(this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft,a=this.activeIndex);var r=this.slides.eq(a).prevAll('[data-swiper-slide-index="'+s+'"]').eq(0).index(),n=this.slides.eq(a).nextAll('[data-swiper-slide-index="'+s+'"]').eq(0).index();s=void 0===r?n:void 0===n?r:n-a<a-r?n:r}this.slideTo(s)}}},update:function(e){var t=this.thumbs.swiper;if(t){var i="auto"===t.params.slidesPerView?t.slidesPerViewDynamic():t.params.slidesPerView,s=this.params.thumbs.autoScrollOffset,a=s&&!t.params.loop;if(this.realIndex!==t.realIndex||a){var r,n,l=t.activeIndex;if(t.params.loop){t.slides.eq(l).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,l=t.activeIndex);var o=t.slides.eq(l).prevAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index(),d=t.slides.eq(l).nextAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index();r=void 0===o?d:void 0===d?o:d-l==l-o?l:d-l<l-o?d:o,n=this.activeIndex>this.previousIndex?"next":"prev"}else n=(r=this.realIndex)>this.previousIndex?"next":"prev";a&&(r+="next"===n?s:-1*s),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(r)<0&&(t.params.centeredSlides?r=r>l?r-Math.floor(i/2)+1:r+Math.floor(i/2)-1:r>l&&(r=r-i+1),t.slideTo(r,e?0:void 0))}var h=1,p=this.params.thumbs.slideThumbActiveClass;if(this.params.slidesPerView>1&&!this.params.centeredSlides&&(h=this.params.slidesPerView),this.params.thumbs.multipleActiveThumbs||(h=1),h=Math.floor(h),t.slides.removeClass(p),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(var u=0;u<h;u+=1)t.$wrapperEl.children('[data-swiper-slide-index="'+(this.realIndex+u)+'"]').addClass(p);else for(var c=0;c<h;c+=1)t.slides.eq(this.realIndex+c).addClass(p)}}},ue=[q,_,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}},create:function(){M(this,{mousewheel:{enabled:!1,lastScrollTime:x(),lastEventBeforeSnap:void 0,recentWheelEvents:[],enable:U.enable,disable:U.disable,handle:U.handle,handleMouseEnter:U.handleMouseEnter,handleMouseLeave:U.handleMouseLeave,animateSlider:U.animateSlider,releaseScroll:U.releaseScroll}})},on:{init:function(e){!e.params.mousewheel.enabled&&e.params.cssMode&&e.mousewheel.disable(),e.params.mousewheel.enabled&&e.mousewheel.enable()},destroy:function(e){e.params.cssMode&&e.mousewheel.enable(),e.mousewheel.enabled&&e.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){M(this,{navigation:t({},K)})},on:{init:function(e){e.navigation.init(),e.navigation.update()},toEdge:function(e){e.navigation.update()},fromEdge:function(e){e.navigation.update()},destroy:function(e){e.navigation.destroy()},click:function(e,t){var i,s=e.navigation,a=s.$nextEl,r=s.$prevEl;!e.params.navigation.hideOnClick||m(t.target).is(r)||m(t.target).is(a)||(a?i=a.hasClass(e.params.navigation.hiddenClass):r&&(i=r.hasClass(e.params.navigation.hiddenClass)),!0===i?e.emit("navigationShow"):e.emit("navigationHide"),a&&a.toggleClass(e.params.navigation.hiddenClass),r&&r.toggleClass(e.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){M(this,{pagination:t({dynamicBulletIndex:0},Z)})},on:{init:function(e){e.pagination.init(),e.pagination.render(),e.pagination.update()},activeIndexChange:function(e){(e.params.loop||void 0===e.snapIndex)&&e.pagination.update()},snapIndexChange:function(e){e.params.loop||e.pagination.update()},slidesLengthChange:function(e){e.params.loop&&(e.pagination.render(),e.pagination.update())},snapGridLengthChange:function(e){e.params.loop||(e.pagination.render(),e.pagination.update())},destroy:function(e){e.pagination.destroy()},click:function(e,t){e.params.pagination.el&&e.params.pagination.hideOnClick&&e.pagination.$el.length>0&&!m(t.target).hasClass(e.params.pagination.bulletClass)&&(!0===e.pagination.$el.hasClass(e.params.pagination.hiddenClass)?e.emit("paginationShow"):e.emit("paginationHide"),e.pagination.$el.toggleClass(e.params.pagination.hiddenClass))}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){M(this,{scrollbar:t({isTouched:!1,timeout:null,dragTimeout:null},J)})},on:{init:function(e){e.scrollbar.init(),e.scrollbar.updateSize(),e.scrollbar.setTranslate()},update:function(e){e.scrollbar.updateSize()},resize:function(e){e.scrollbar.updateSize()},observerUpdate:function(e){e.scrollbar.updateSize()},setTranslate:function(e){e.scrollbar.setTranslate()},setTransition:function(e,t){e.scrollbar.setTransition(t)},destroy:function(e){e.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){M(this,{parallax:t({},Q)})},on:{beforeInit:function(e){e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},init:function(e){e.params.parallax.enabled&&e.parallax.setTranslate()},setTranslate:function(e){e.params.parallax.enabled&&e.parallax.setTranslate()},setTransition:function(e,t){e.params.parallax.enabled&&e.parallax.setTransition(t)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this;M(e,{zoom:t({enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}},ee)});var i=1;Object.defineProperty(e.zoom,"scale",{get:function(){return i},set:function(t){if(i!==t){var s=e.zoom.gesture.$imageEl?e.zoom.gesture.$imageEl[0]:void 0,a=e.zoom.gesture.$slideEl?e.zoom.gesture.$slideEl[0]:void 0;e.emit("zoomChange",t,s,a)}i=t}})},on:{init:function(e){e.params.zoom.enabled&&e.zoom.enable()},destroy:function(e){e.zoom.disable()},touchStart:function(e,t){e.zoom.enabled&&e.zoom.onTouchStart(t)},touchEnd:function(e,t){e.zoom.enabled&&e.zoom.onTouchEnd(t)},doubleTap:function(e,t){e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&e.zoom.toggle(t)},transitionEnd:function(e){e.zoom.enabled&&e.params.zoom.enabled&&e.zoom.onTransitionEnd()},slideChange:function(e){e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&e.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){M(this,{lazy:t({initialImageLoaded:!1},te)})},on:{beforeInit:function(e){e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)},init:function(e){e.params.lazy.enabled&&!e.params.loop&&0===e.params.initialSlide&&e.lazy.load()},scroll:function(e){e.params.freeMode&&!e.params.freeModeSticky&&e.lazy.load()},resize:function(e){e.params.lazy.enabled&&e.lazy.load()},scrollbarDragMove:function(e){e.params.lazy.enabled&&e.lazy.load()},transitionStart:function(e){e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(e){e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&e.lazy.load()},slideChange:function(e){e.params.lazy.enabled&&e.params.cssMode&&e.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){M(this,{controller:t({control:this.params.controller.control},ie)})},on:{update:function(e){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},resize:function(e){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},observerUpdate:function(e){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},setTranslate:function(e,t,i){e.controller.control&&e.controller.setTranslate(t,i)},setTransition:function(e,t,i){e.controller.control&&e.controller.setTransition(t,i)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null}},create:function(){M(this,{a11y:t(t({},se),{},{liveRegion:m('<span class="'+this.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')})})},on:{afterInit:function(e){e.params.a11y.enabled&&(e.a11y.init(),e.a11y.updateNavigation())},toEdge:function(e){e.params.a11y.enabled&&e.a11y.updateNavigation()},fromEdge:function(e){e.params.a11y.enabled&&e.a11y.updateNavigation()},paginationUpdate:function(e){e.params.a11y.enabled&&e.a11y.updatePagination()},destroy:function(e){e.params.a11y.enabled&&e.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){M(this,{history:t({},ae)})},on:{init:function(e){e.params.history.enabled&&e.history.init()},destroy:function(e){e.params.history.enabled&&e.history.destroy()},transitionEnd:function(e){e.history.initialized&&e.history.setHistory(e.params.history.key,e.activeIndex)},slideChange:function(e){e.history.initialized&&e.params.cssMode&&e.history.setHistory(e.params.history.key,e.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){M(this,{hashNavigation:t({initialized:!1},re)})},on:{init:function(e){e.params.hashNavigation.enabled&&e.hashNavigation.init()},destroy:function(e){e.params.hashNavigation.enabled&&e.hashNavigation.destroy()},transitionEnd:function(e){e.hashNavigation.initialized&&e.hashNavigation.setHash()},slideChange:function(e){e.hashNavigation.initialized&&e.params.cssMode&&e.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){M(this,{autoplay:t(t({},ne),{},{running:!1,paused:!1})})},on:{init:function(e){e.params.autoplay.enabled&&(e.autoplay.start(),r().addEventListener("visibilitychange",e.autoplay.onVisibilityChange))},beforeTransitionStart:function(e,t,i){e.autoplay.running&&(i||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(t):e.autoplay.stop())},sliderFirstMove:function(e){e.autoplay.running&&(e.params.autoplay.disableOnInteraction?e.autoplay.stop():e.autoplay.pause())},touchEnd:function(e){e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&e.autoplay.run()},destroy:function(e){e.autoplay.running&&e.autoplay.stop(),r().removeEventListener("visibilitychange",e.autoplay.onVisibilityChange)}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){M(this,{fadeEffect:t({},le)})},on:{beforeInit:function(e){if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};S(e.params,t),S(e.originalParams,t)}},setTranslate:function(e){"fade"===e.params.effect&&e.fadeEffect.setTranslate()},setTransition:function(e,t){"fade"===e.params.effect&&e.fadeEffect.setTransition(t)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){M(this,{cubeEffect:t({},oe)})},on:{beforeInit:function(e){if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};S(e.params,t),S(e.originalParams,t)}},setTranslate:function(e){"cube"===e.params.effect&&e.cubeEffect.setTranslate()},setTransition:function(e,t){"cube"===e.params.effect&&e.cubeEffect.setTransition(t)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){M(this,{flipEffect:t({},de)})},on:{beforeInit:function(e){if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};S(e.params,t),S(e.originalParams,t)}},setTranslate:function(e){"flip"===e.params.effect&&e.flipEffect.setTranslate()},setTransition:function(e,t){"flip"===e.params.effect&&e.flipEffect.setTransition(t)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}},create:function(){M(this,{coverflowEffect:t({},he)})},on:{beforeInit:function(e){"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(e){"coverflow"===e.params.effect&&e.coverflowEffect.setTranslate()},setTransition:function(e,t){"coverflow"===e.params.effect&&e.coverflowEffect.setTransition(t)}}},{name:"thumbs",params:{thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){M(this,{thumbs:t({swiper:null,initialized:!1},pe)})},on:{beforeInit:function(e){var t=e.params.thumbs;t&&t.swiper&&(e.thumbs.init(),e.thumbs.update(!0))},slideChange:function(e){e.thumbs.swiper&&e.thumbs.update()},update:function(e){e.thumbs.swiper&&e.thumbs.update()},resize:function(e){e.thumbs.swiper&&e.thumbs.update()},observerUpdate:function(e){e.thumbs.swiper&&e.thumbs.update()},setTransition:function(e,t){var i=e.thumbs.swiper;i&&i.setTransition(t)},beforeDestroy:function(e){var t=e.thumbs.swiper;t&&e.thumbs.swiperCreated&&t&&t.destroy()}}}];return R.use(ue),R}));
//# sourceMappingURL=swiper-bundle.min.js.map
$(document).ready(function() {
    $(document).on('click','.see_all_awards',function(){
        $('.awards_popup_modal').toggle();
        $('body').addClass('overflow-hidden');
        swiper.update();
        slideCount();
    });
    $(document).on('click','.awards_popup_modal .close-icon', function(){
        $('.awards_popup_modal').hide();
        $('body').removeClass('overflow-hidden');
    })

    function slideCount(){
        if($(".awards_popup_modal .swiper-pagination-total").text() == '1') {
            $('.awards_popup_modal .swiper-button-next').addClass( "disabled" );
            $('.awards_popup_modal .swiper-button-prev').addClass( "disabled" );
            $('.awards_popup_modal .swiper-wrapper').addClass( "disabled" );
        }
    }
    
    var swiper = new Swiper('.swiper-container-awards', {
        observer:true,
        loop:true,
        loopFillGroupWithBlank: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            767: {
                slidesPerView: 1,
                spaceBetween: 20,
                slidesPerGroup: 1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 2,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
                slidesPerGroup: 4,
            },
        }
    });
});
$(document).ready(function () {
    //FARE0002SG-57
    function addDays(dateObj, numDays) {
        dateObj.setDate(dateObj.getDate() + numDays);
        return dateObj;
    }
    var advancedDate = parseInt($('#header-booknow-widget').data('days-advance'));
    if(!advancedDate) advancedDate = 0;
    var EnMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var nowBooking = new Date();
    var dBooking = addDays(nowBooking , advancedDate),
        monthBooking = dBooking.getMonth()+1,
        monthBooking = EnMonths[monthBooking - 1],
        dayBooking = dBooking.getDate(),
        currentBooking = ((''+dayBooking).length<2 ? '0' : '') + dayBooking  + ' ' +  monthBooking + ' ' +  dBooking.getFullYear();
    //console.log(currentBooking);
    //console.log(advancedDate);

    if ($('.header_ribbon').length) {
        $('.promoData_toggler').each(function() {
            if ($(this).text().trim().length === 0) {
                $(this).css('display', 'none');
            }
        });
    }

    if ($(window).width() >= 769) {
        $(document).on('click', '.location ul.dropdown-menu li', function () {
            setTimeout(function() {
                $('.property').addClass('open');
            })
        });
        $(document).on('click', '.location1 ul.dropdown-menu li', function () {
            setTimeout(function() {
                $('.property1').addClass('open');
            })
        });
    }

    if ($(window).width() >= 1024 && $('.header_ribbon__promoData_detail').length) {
        $('#top-book-now').on('click', function () {
            if (!$('.header_ribbon__promoData_detail').is(":hidden")) {
                $('.promoData_toggler')[0].click();
            }
        });
    }

    // newsletter if has bg img script

    // $('.newsletter.subscription .modal-content').each(function() {
    //     //$(this).find('.modal-body').addClass('no_image');
    //     if ($(this).find('img').length == 0) {
    //         $('.newsletter.subscription .modal-content').find('.modal-body').addClass('no_image');
    //     }else{
            
    //   }
    // });
      
    $('.menu_listing_new li').on('touchstart touchend', function(e) {
        //e.preventDefault();
        $(this).toggleClass('hover_touch');
    });

    $(document).on('click', '.accordion__item', function () {
        if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active')
            $(this).find('.accordion__itemContent').hide();
            $(this).find('.accordion__itemContent').animate({ 'height': '0' }, 0);

            var length = $(".accordion__list .accordion__item.is-active").length;
            if (length == 0) {
                $(".show-all-accordions").find("span.expand-all").removeClass("hide");
                $(".show-all-accordions").find("span.collapse-all").addClass("hide");
                $(".show-all-accordions").find("i").removeClass("up").addClass("down");
            }
        } else {
            $("ul.accordion__list .accordion__item").removeClass('is-active');
            $("ul.accordion__list .accordion__item .accordion__itemContent").animate({
                'height': '0'
            }, 0);
            $("ul.accordion__list .accordion__item .accordion__itemContent").hide();
            $(this).addClass('is-active');
            var height = $(".accordion__item.is-active .accordion__itemContent").height();
            $(".accordion__item.is-active .accordion__itemContent").show();
            $(".accordion__item.is-active .accordion__itemContent").animate({
                'height': '100%'
            }, 0);
            if ($(window).width() > 900) {
                var offsettop = $(".accordion__item.is-active .accordion__itemTitleWrap").offset().top - 100;
            } else {
                var offsettop = $(".accordion__item.is-active .accordion__itemTitleWrap").offset().top - 100;
            }
            $('html, body').animate({
                scrollTop: offsettop
            }, '0');

            $(".show-all-accordions").find("span.expand-all").addClass("hide");
            $(".show-all-accordions").find("span.collapse-all").removeClass("hide");
            $(".show-all-accordions").find("i").removeClass("down").addClass("up");
        }
    });

    if(typeof $.validator !== 'undefined'){
        $.validator.addMethod('selectrequired', function (value, element, params) {
            if($(element).data('val-selectrequired').length > 0 && $(element).find('.bs-title-option').text() === value){
            return false;
            }
            return true;
        });
        $.validator.unobtrusive.adapters.addBool('selectrequired');
    }

    $(".sfeclosebtn").on("click", function (e) {
        $('#top-book-now').click();
    });

    function delayTime() {
        if ($(".signupnow_pop").data('delay-time') == "") return 10000; //10 second default delay
        else return $(".signupnow_pop").data('delay-time') * 1000;
    }

    function timeOnPage() {
        if ($(".signupnow_pop").data('time-on-page') == "") return 1000000; //default screen time
        else return $(".signupnow_pop").data('delay-time') * 1000 + $(".signupnow_pop").data('time-on-page') * 1000;
    }


    $(".signupnow_pop").each(function() {
        var delay        = parseInt($(this).data('delay-time')),
            display      = parseInt($(this).data('time-on-page')),
            cookieRemove = parseInt($(this).data('display-again-after')),
            cookieName   = $(this).data('cookie'),
            cookie       = $.cookie(cookieName),
            close        = $(this).find(".close_btn"),
            popup        = $(this);

        if (cookie == 'yes') {
            $(this).hide();
        }else {
            var expires = cookieRemove ? cookieRemove:1,
                timeIn  = delay ? delay:10000,
                timeOut = display ? display:1000000;
                timeOut +=timeIn;
                setTimeout(function () {
                popup.fadeIn('fast');
            }, timeIn);
            setTimeout(function () {
                popup.fadeOut('fast');
            }, timeOut);     
            $.cookie(''+cookieName+'', 'yes', { expires: expires, path: '/' });
            }
		
        close.on("click", function (e) {
            popup.fadeOut('fast');
        });
    });   


    // $('.login_notification').each(function() { 
        // if ($(this).attr('data-auto-close') == '') { 
            // $(this).removeAttr('data-auto-close'); 
        // } 
        // else{
            // var autoClose =  $(".login_notification").attr('data-auto-close') * 1000;
            // console.log(autoClose);

            // setTimeout(function () {
                // $('.login_notification').fadeOut('fast');
            // }, autoClose);
        // }
        // $(".login_notification .close_btn").on("click", function (e) {
            // $('.login_notification').fadeOut('fast');
        // });
    // });
	(function () {
		var signInUpSuccess = $.cookie("signInUpSuccess");
		if (signInUpSuccess == 'yes') {
			$(".login_notification").show();
			$.cookie("signInUpSuccess", null, { path: '/' });
			
			if($(".login_notification").attr('data-auto-close')!=""){
				var autoClose = $(".login_notification").attr('data-auto-close') * 1000;

				setTimeout(function () {
					$('.login_notification').fadeOut('fast');
				}, autoClose);
			}
	}}());
		
	 $(".login_notification .close_btn").on("click", function (e) {
		 $('.login_notification').fadeOut('fast');
	 });



    //Added video modal popup
    $(".video-btn").on("click", function (e) {
        e.preventDefault();
        var source = $(this).attr("href");
        $("#videoModal iframe").attr("src", source);
        $("#videoModal").modal("show");
    });
    $('.close-video-modal, .close.btn').click(function () {
        $('iframe').attr('src', $('iframe').attr('src'));
    });


    $.fn.andSelf = function () {
        return this.addBack.apply(this, arguments);
    }

    //PROMOTION BAR
    var promotionBar = $('.promotion-bar');
    if (promotionBar.length > 0) {
        // console.log('has promotion ', promotionBar);
        $("#announcement-container, #announcement-triangle").hide();
        $("#announcement-container, #announcement-triangle").hide();
        $('body').addClass('hasPromotionBar');


        calculatePromotionBar(promotionBar);

        promotionBar.find('.promotion-close').on('click', function () {
            var elem = $(this);
            noPromotionBarReset();
            elem.parent().remove();
        });

        $(window).resize(function () {
            // console.log('resizing..');
            if ($('.promotion-bar').length > 0) {
                // console.log('with promobar');
                debounce(calculatePromotionBar(promotionBar), 300);
            } else {
                // console.log('without promobar');
                debounce(noPromotionBarReset(), 300);
            }
        });
    } else {
        // console.log('no promotion');
        noPromotionBarReset();
    }

//FARE0002SG-159
    function calculatePromotionBar(promotionBar) {
        var pb_height = promotionBar.outerHeight() !== 0 ? promotionBar.outerHeight() : 50;

        var nav_height = $('nav.navbar').outerHeight();

        var pb_bgcolor = promotionBar.attr('data-bgcolor');
        // console.log(pb_height);

        promotionBar.css('backgroundColor', pb_bgcolor);
        //$('nav.navbar').css('top', pb_height + 'px');
        //$('.menu-burger').css('top', pb_height + 'px');
        //$('.static-content').css('marginTop', (nav_height + pb_height) + 'px');

        $('#announcement-container').css('top', (nav_height + pb_height) + 'px')
        $('.widget').css('top', (nav_height + pb_height) + 'px');
        $('.breadcrumb-container').css('top', (nav_height + pb_height) + 'px');
    }

    function noPromotionBarReset() {
        //console.log('resetting')
        $('body').removeClass('hasPromotionBar');
        //$('.menu-burger').css('top', '0px');
        $('#announcement-container').css('top', '50px');
        $('.widget').css('top', '87px');
        $('.breadcrumb-container').css('top', '50px');
        //$('nav.navbar').css('top', '0px');
        //$('.static-content').css('marginTop', '50px');
    }



    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function () {
                timeout = null;
                if (immediate) {
                    func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) {
                    func.apply(context, args);
                }
            }
        }
    }





    //END PROMOTION BAR


    var newsAnnouncementId = setTimeout(function () {
        $('.rich-content-popup').modal('show');
        clearTimeout(newsAnnouncementId);
    }, 2000);

    // ANNOUNCEMENT on click


    $("#announcement-icon").click(function (e) {
        e.preventDefault();
        if ($("#announcement-container, #announcement-triangle").is(":visible")) {
            if (!$.cookie('announcement-flag')) {
                $.cookie("announcement-flag", 'close');
            }
            hideAnnouncement();
        } else {
            showAnnouncement();
        }
    });

    $('.announcement-close').click(function (e) {
        e.preventDefault();
        $.cookie('announcement-flag', 'close');
        hideAnnouncement();

    })

    // CAROUSEL SLIDE ON mobile
    $(".carousel").swiperight(function () {
        $(this).carousel('prev');
    });
    $(".carousel").swipeleft(function () {
        $(this).carousel('next');
    });

    videoModal();

    $('.date-warning').remove();
    // FEHSMP 1055 start
    $(window).on('load', function() {
        $('#residenceQuote .arrival-date').datepicker({
            minDate: 0,
            // numberOfMonths: 2,
            autoSize: true,
            prevText: " ",
            nextText: " ",
            dateFormat: "d MM yy",
            changeFirstDay: false,
            onSelect: function(selected) {
                var dt = new Date(selected);
                dt.setDate(dt.getDate() + 29);
                $('#residenceQuote .departure-date').datepicker("option", "minDate", dt);
            }
        });
        $('#residenceQuote .departure-date').datepicker({
            minDate: 0,
            // numberOfMonths: 2,
            autoSize: true,
            prevText: " ",
            nextText: " ",
            dateFormat: "d MM yy"
        });


        $('#residenceMonthlyQuote .arrival-date').datepicker({
            minDate: 0,
            // numberOfMonths: 2,
            autoSize: true,
            prevText: " ",
            nextText: " ",
            dateFormat: "d MM yy",
            changeFirstDay: false,
            onSelect: function(selected) {
                var dt = new Date(selected);
                dt.setDate(dt.getDate() + 29);
                $('#residenceMonthlyQuote .departure-date').datepicker("option", "minDate", dt);
            }
        });
        $('#residenceMonthlyQuote .departure-date').datepicker({
            minDate: 0,
            // numberOfMonths: 2,
            autoSize: true,
            prevText: " ",
            nextText: " ",
            dateFormat: "d MM yy"
        });
    });


    // FEHSMP 1055 end

    $(".checkin-date.desktop").datepicker({
        minDate: 0,
        numberOfMonths: 2,
        autoSize: true,
        prevText: " ",
        nextText: " ",
        dateFormat: "d MM yy",
        changeFirstDay: false,
        beforeShowDay: function (date) {
            try {
                var checkin = $.datepicker.parseDate("d MM yy", $(".checkin-date.desktop").val());
                var checkout = $.datepicker.parseDate("d MM yy", $(".checkout-date.desktop").val());
            } catch (ex) {
                return [true];
            }
            if ($('.date-warning').length < 1) {
                var propertyIndex = $('.bootstrap-select.property ul li.selected').attr('data-original-index') - 1;
                var propertyIndexText = $('#property optgroup option').eq(propertyIndex).attr('data-minnighttext');
                if (propertyIndexText == 'null' || propertyIndexText == undefined) {} else {
                    $("#ui-datepicker-div").append('<div class="date-warning">' + propertyIndexText + '</div>');
                }
            }
                var classes = "";

                if (checkin && ((date.getTime() == checkin.getTime()) || (checkout && date >= checkin && date <= checkout))) {
                    classes += "date-highlight";
                }
                if ((checkin && date.getTime() == checkin.getTime()) || (checkout && date.getTime() == checkout.getTime())) {
                    classes += " active";
                }

            return [true, classes];

        },
        onClose: function (selectedDate) {
            //updateMinNightsRestriction(selectedDate);


            //FARE0002SG-138
            var propertyIndex = $('.bootstrap-select.property ul li.selected').attr('data-original-index') - 1;
            var minday = parseInt($('#property optgroup option').eq(propertyIndex).attr('data-mindays'));


            console.log('minday ::::'+minday);
            var checkIn = $('#widget-checkin'),
                checkOut = $('#widget-checkout');
            updateCheckInCheckOut(checkIn,checkOut,minday);
        }
    });

    $(".checkout-date.desktop").datepicker({
        // minDate: "+3d",
        numberOfMonths: 2,
        autoSize: true,
        prevText: " ",
        nextText: " ",
        dateFormat: "d MM yy",
        beforeShowDay: function (date) {

            try {
                var checkin = $.datepicker.parseDate("d MM yy", $(".checkin-date.desktop").val());
                var checkout = $.datepicker.parseDate("d MM yy", $(".checkout-date.desktop").val());
            } catch (ex) {
                return [true];
            }

            if ($('.date-warning').length < 1) {
                var propertyIndex = $('.bootstrap-select.property ul li.selected').attr('data-original-index') - 1;
                var propertyIndexText = $('#property optgroup option').eq(propertyIndex).attr('data-minnighttext');
                if (propertyIndexText == 'null' || propertyIndexText == undefined) {} else {
                    $("#ui-datepicker-div").append('<div class="date-warning">' + propertyIndexText + '</div>');
                }
            }
            var classes = "";
                
                if (checkin && ((date.getTime() == checkin.getTime()) || (checkout && date >= checkin && date <= checkout))) {
                    classes += "date-highlight";
                }

                if ((checkin && date.getTime() == checkin.getTime()) || (checkout && date.getTime() == checkout.getTime())) {
                    classes += " active";
                }
            return [true, classes];
        }
    });



    $(".checkin-date.mobile").datepicker({
        minDate: 0,
        autoSize: true,
        prevText: " ",
        nextText: " ",
        dateFormat: "d MM yy",
        changeFirstDay: false,
        beforeShowDay: function (date) {
            try {
                var checkin = $.datepicker.parseDate("d MM yy", $(".checkin-date.mobile").val());
                var checkout = $.datepicker.parseDate("d MM yy", $(".checkout-date.mobile").val());
            } catch (ex) {
                return [true];
            }

            if ($('.date-warning').length < 1) {
                var propertyIndexMobile = $('.mobile-bookng-widget .bootstrap-select.property ul li.selected').attr('data-original-index') - 1;
                var propertyIndexTextMobile = $('#mobile-property optgroup option').eq(propertyIndexMobile).attr('data-minnighttext');
                if (propertyIndexTextMobile == 'null' || propertyIndexTextMobile == undefined) {} else {
                    $("#ui-datepicker-div").append('<div class="date-warning">' + propertyIndexTextMobile + '</div>');
                }
            }

            var classes = "";

            if (checkin && ((date.getTime() == checkin.getTime()) || (checkout && date >= checkin && date <= checkout))) {
                classes += "date-highlight";
            }
            if ((checkin && date.getTime() == checkin.getTime()) || (checkout && date.getTime() == checkout.getTime())) {
                classes += " active";
            }

            return [true, classes];

        },
        onClose: function (selectedDate) {
                //FARE0002SG-138
                var propertyIndex = $('.mobile-bookng-widget .bootstrap-select.property ul li.selected').attr('data-original-index') - 1;
                var minday = parseInt($('#mobile-property optgroup option').eq(propertyIndex).attr('data-mindays'));


                console.log('minday ::::'+minday);
                var checkIn = $('#widget-mobile-checkin'),
                    checkOut = $('#widget-mobile-checkout');
                updateCheckInCheckOut(checkIn,checkOut,minday);
        }
    });

    $(".checkout-date.mobile").datepicker({
        // minDate: "+3d",
        autoSize: true,
        prevText: " ",
        nextText: " ",
        dateFormat: "d MM yy",
        beforeShowDay: function (date) {

            try {
                var checkin = $.datepicker.parseDate("d MM yy", $(".checkin-date.mobile").val());
                var checkout = $.datepicker.parseDate("d MM yy", $(".checkout-date.mobile").val());
            } catch (ex) {
                return [true];
            }

            if ($('.date-warning').length < 1) {
                var propertyIndexMobile = $('.mobile-bookng-widget .bootstrap-select.property ul li.selected').attr('data-original-index') - 1;
                var propertyIndexTextMobile = $('#mobile-property optgroup option').eq(propertyIndexMobile).attr('data-minnighttext');
                if (propertyIndexTextMobile == 'null' || propertyIndexTextMobile == undefined) {} else {
                    $("#ui-datepicker-div").append('<div class="date-warning">' + propertyIndexTextMobile + '</div>');
                }
            }
            var classes = "";
                
                if (checkin && ((date.getTime() == checkin.getTime()) || (checkout && date >= checkin && date <= checkout))) {
                    classes += "date-highlight";
                }

                if ((checkin && date.getTime() == checkin.getTime()) || (checkout && date.getTime() == checkout.getTime())) {
                    classes += " active";
                }
            return [true, classes];
        }
    });


    function updateCheckInCheckOut(checkIn,checkOut,minday) {  
        console.log('minday xxxxxxxxxxx '+minday);
        if (minday >0) {
            if(checkOut.val()){
                var dateOut = new Date(checkOut.val()),
                    dateIn = new Date(checkIn.val()),
                    diff = dateOut - dateIn,
                    days = diff / 1000 / 60 / 60 / 24;

                var $date = new Date(checkIn.val());
                $date.setDate($date.getDate()+minday);
                checkOut.datepicker("option", "minDate", $date);                    
                if(days<minday){
                    checkOut.datepicker("setDate", $date);
                }
            }else {
                var $date = new Date(checkIn.val());
                $date.setDate($date.getDate()+minday);
                console.log('có min - chưa in '+$date);
                checkOut.datepicker("option", "minDate", $date);
                checkOut.datepicker("setDate", $date);
            } 
        } else {
            var $date = new Date(checkIn.val());
            $date.setDate($date.getDate()+1);
            console.log('ko min'+$date);
            checkOut.datepicker("option", "minDate", $date);
            if (!checkOut.val()) {
                checkOut.datepicker("setDate", $date);
            }            
        } 

    }


    $(".checkin2").datepicker({
        minDate: 0,
        numberOfMonths: 2,
        autoSize: true,
        prevText: " ",
        nextText: " ",
        dateFormat: "d MM yy",
        changeFirstDay: false,
        beforeShowDay: function (date) {
            try {
                var checkin = $.datepicker.parseDate("d MM yy", $(".checkin2").val());
                var checkout = $.datepicker.parseDate("d MM yy", $(".checkout2").val());
            } catch (ex) {
                return [true];
            }

            var classes = "";

            if (checkin && ((date.getTime() == checkin.getTime()) || (checkout && date >= checkin && date <= checkout))) {
                classes += "date-highlight";
            }
            if ($('.date-warning').length < 1) {
                var propertyIndex = $('.bootstrap-select.property1 ul li.selected').attr('data-original-index') - 1;
                var propertyIndexText = $('#property1 optgroup option').eq(propertyIndex).attr('data-minnighttext');
                if (propertyIndexText == 'null' || propertyIndexText == undefined) {} else {
                    $("#ui-datepicker-div").append('<div class="date-warning">' + propertyIndexText + '</div>');
                }
            }

            if ((checkin && date.getTime() == checkin.getTime()) || (checkout && date.getTime() == checkout.getTime())) {
                classes += " active";
            }

            return [true, classes];

        },
        onClose: function (selectedDate2) {
            //updateMinNightsRestriction2(selectedDate2);



            
            //FARE0002SG-138
            var propertyIndex = $('.bootstrap-select.property1 ul li.selected').attr('data-original-index') - 1;
            var minday = parseInt($('#property1 optgroup option').eq(propertyIndex).attr('data-mindays'));


            console.log('minday ::::'+minday);
            var checkIn = $('#checkin2'),
                checkOut = $('#checkout2');
            updateCheckInCheckOut(checkIn,checkOut,minday);
        }
    });
    $(".checkout2").datepicker({
        // minDate: "+3d",
        numberOfMonths: 2,
        autoSize: true,
        prevText: " ",
        nextText: " ",
        dateFormat: "d MM yy",
        beforeShowDay: function (date) {

            try {
                var checkin = $.datepicker.parseDate("d MM yy", $(".checkin2").val());
                var checkout = $.datepicker.parseDate("d MM yy", $(".checkout2").val());
            } catch (ex) {
                return [true];
            }

            var classes = "";

            if (checkin && ((date.getTime() == checkin.getTime()) || (checkout && date >= checkin && date <= checkout))) {
                classes += "date-highlight";
            }

            if ($('.date-warning').length < 1) {
                var propertyIndex = $('.bootstrap-select.property1 ul li.selected').attr('data-original-index') - 1;
                var propertyIndexText = $('#property1 optgroup option').eq(propertyIndex).attr('data-minnighttext');
                if (propertyIndexText == 'null' || propertyIndexText == undefined) {} else {
                    $("#ui-datepicker-div").append('<div class="date-warning">' + propertyIndexText + '</div>');
                }
            }

            if ((checkin && date.getTime() == checkin.getTime()) || (checkout && date.getTime() == checkout.getTime())) {
                classes += " active";
            }

            return [true, classes];
        }
    });


    $('.glyphicon-calendar').click(function () {
        var self = $(this);
        var target = self.prev();
        if (!target)
            return;

        $(target).datepicker('show');
    });

    // ADD SEARCH ICON IN DROPDOWN
    $('#location').on('show.bs.select', function () {
        var searchIcon = '<span class="glyphicon glyphicon-search"></span>'
        $('.bs-searchbox').append(searchIcon);
    });

    function updateMinNightsRestriction(selectedDate) {
        var mindays = $('.widget').find('.mindays').val() || $('.booknow-widget').find('.mindays').val() || 0,
            mindaysTotal = 86400000 * mindays,
            getDate = new Date(selectedDate).getTime() + mindaysTotal,
            getNewDate = new Date(getDate);

        var startCheckinDate = new Date($.cookie("cookie-checkin-date"));
        var endCheckoutDate = new Date($.cookie("cookie-checkout-date"));

        // end - start returns difference in milliseconds 
        var diff = new Date(endCheckoutDate - startCheckinDate);

        // get days
        var days = diff / 1000 / 60 / 60 / 24;

        $(".checkout-date").datepicker('setDate', null);
        $(".ui-state-disabled").removeClass("date-highlight").removeClass("active");
        $(".checkout-date").datepicker("option", "minDate", getNewDate);

        if (selectedDate) {
            $(".checkout-date").datepicker("setDate", getNewDate);
        }

    }

    function updateMinNightsRestriction2(selectedDate2) {
        var mindays = $('.widget').find('.mindays').val() || $('.booknow-widget').find('.mindays').val() || 0,
            mindaysTotal = 86400000 * mindays,
            getDate = new Date(selectedDate2).getTime() + mindaysTotal,
            getNewDate2 = new Date(getDate);

        var startCheckinDate = new Date($.cookie("cookie-checkin-date"));
        var endCheckoutDate = new Date($.cookie("cookie-checkout-date"));

        // end - start returns difference in milliseconds 
        var diff = new Date(endCheckoutDate - startCheckinDate);

        // get days
        var days = diff / 1000 / 60 / 60 / 24;
        $(".ui-state-disabled").removeClass("date-highlight").removeClass("active");

        $(".checkout2").datepicker('setDate', null);
        $(".checkout2").datepicker("option", "minDate", getNewDate2);

        if (selectedDate2) {
            $(".checkout2").datepicker("setDate", getNewDate2);
        }

    }

    // MOBILE DETECT
    var isMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }

    if (isMobile) {
        $(".checkin-date").datepicker("option", "numberOfMonths", 1);
        $(".checkout-date").datepicker("option", "numberOfMonths", 1);
        $('#residenceQuote', '#residenceMonthlyQuote').on('show.bs.modal', function (e) {
            // alert('residenceQuote show!');
            $('body').css('position', 'fixed');
        });
        $('#residenceQuote', '#residenceMonthlyQuote').on('hide.bs.modal', function (e) {
            // alert('residenceQuote show!');
            $('body').css('position', 'static');
        });

        //Announcement wait 2 seconds to show
        window.setTimeout(announcementCookie, 3000);

    } else {
        $(".checkin-date").datepicker("option", "numberOfMonths", 2);
        $(".checkout-date").datepicker("option", "numberOfMonths", 2);
        $(".checkin2").datepicker("option", "numberOfMonths", 2);
        $(".checkout2").datepicker("option", "numberOfMonths", 2);
        // DETECT ANNOUNCEMENT COOKIE

        window.setTimeout(announcementCookie, 3000);

    }

    // $('.widget-form #mobile-property').each(function() {
    //     if ($('.widget-form #mobile-property option').is(':selected')) {
    //         var propertytext1 = $(".widget-form #mobile-property option:selected").attr('data-propertynote');
    //         console.log(propertytext1);
    //         $('#header-mobile-booknow-widget .shownote').html(propertytext1).show();
    //     } else {
    //         // $('.widget-form .shownote').hide();
    //     }
    // });


    // BOOKING button
    $('.booking-btn').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('.desktop-only .widget, .mobile-only .widget').slideToggle();
        $('body').toggleClass('widget-open');
        var propertytext1 = $(".desktop-only .widget-form #property option:selected").attr('data-propertynote');
        $('.widget-form .shownote').text(propertytext1).show();
        console.log(propertytext1);
		
		//fehsmp 1196 comment
		// var ChainId = $(".desktop-only .widget-form #property option:selected").attr('data-ChainId');
		// $(".widget-form #chain").remove();
        // if (ChainId != '') {
            // $('<input>').attr({
                // type: 'hidden',
                // id: 'chain',
                // name: 'chain',
                // class: 'chain',
                // value: ChainId
            // }).appendTo('.widget-form');
        // }
        //$(".widget-form #chain").val(ChainId);
    });
    $('.booking.text-uppercase').on('click', function (e) {
        // e.stopPropagation();
        // e.preventDefault();
        // $('.desktop-only .widget, .mobile-only .widget').slideToggle();
        // $('body').toggleClass('widget-open');
        var propertytext1 = $(".widget-form #mobile-property option:selected").attr('data-propertynote');
        $('.widget-form .shownote').text(propertytext1).show();
        console.log(propertytext1);
		//fehsmp 1196 comment
		// var ChainId = $(".widget-form #mobile-property option:selected").attr('data-ChainId');
		// $(".widget-form #chain").remove();
        // if (ChainId != '') {
            // $('<input>').attr({
                // type: 'hidden',
                // id: 'chain',
                // name: 'chain',
                // class: 'chain',
                // value: ChainId
            // }).appendTo('.widget-form');
        // }
        //$(".widget-form #chain").val(ChainId);
    });
    $('.residenceMonthlyQuote').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('#residenceMonthlyQuote').modal('show');

    });
    $('.promo.label').on('click', function (e) {
        e.preventDefault();
        $(this).hide();
        $(this).next('.input-wrapper').fadeIn();
    });

    $('.desktop-only .promo.close-btn').on('click', function (e) {
        e.preventDefault();
        $(this).parent('.input-wrapper').hide();
        $(this).closest('.promocode-container').find('.promo.label').fadeIn();
    });
    $('.SFE_banner_booking_widget .promo.close-btn').on('click', function (e) {
        e.preventDefault();
        $(this).parent('.input-wrapper').hide();
        $(this).closest('.promocode-container').find('.promo.label').fadeIn();
    });
    $(".mobile-only .promo.close-btn").on("click", function (n) {
        n.preventDefault();
        $(".input-wrapper").hide();
        $(".promo.label").fadeIn()
    });

    // CLOSE BOOKING WIDGET OUT OF BOX
    $('body').on('click', function (e) {
        var open_widget = false;

        $(e.target).parents().each(function (i, elem) {
            // console.log('i', i, 'elem', elem);
            if ($(elem).hasClass('widget') || $(elem).hasClass('ui-datepicker-prev') || $(elem).hasClass('ui-datepicker-next') || $(elem).hasClass('ui-datepicker-group')) {
                open_widget = true;
            }
        });

        if (!open_widget) {
            /*$('body').removeClass('widget-open');
            $('.widget').slideUp();*/
        }
        if ($(".dropdown.dropdown-rooms").hasClass("active")) {
            $(".dropdown.dropdown-rooms").removeClass("active");
        }
    });

    //widget flow dropdown
    widgetFormFlow();

    function widgetFormFlow() {
        var $widgetForm = $('.widget-form'),
            location = $widgetForm.find('.desktop-only #location'),
            property = $widgetForm.find('.desktop-only #property'),
            location2 = $widgetForm.find('.SFE_banner_booking_widget #location'),
            property2 = $widgetForm.find('.SFE_banner_booking_widget #property'),
            mobileLocation = $widgetForm.find('#mobile-location'),
            mobileCheckin = $widgetForm.find('#widget-mobile-checkin'),
            mobileProperty = $widgetForm.find('#mobile-property');

        $('.widget-form #mobile-property').on("change", function () {
            if ($('.widget-form #mobile-property option:selected').attr("data-propertynote")) {
                var propertytext1 = $(".widget-form #mobile-property option:selected").attr('data-propertynote');
                $('.widget-form .shownote').text(propertytext1).show();
            } else {
                $('.widget-form .shownote').hide();
            }
            setTimeout(function() {
                //FARE0002SG-57
                if ($("#widget-mobile-checkin").val() == '') {
                    $("#widget-mobile-checkin").val(currentBooking);                         
                    $("#widget-mobile-checkin").datepicker('refresh');
                    $("#widget-mobile-checkin").datepicker('show');
                    console.log('FARE0002SG-57 : 1');
                } 
            }, 100);     
                     
                //FARE0002SG-111
                var checkMindate = parseInt($('.widget-form #mobile-property option:selected').attr("data-mindays"));
                $("#widget-mobile-checkout").each(function () {
                    if($(this).val()){
                        var currentInputCheckout = new Date($(this).val()),
                            checkCookieCheckoutDate = currentInputCheckout;
                        if($.cookie("cookie-mobilecheckout-date")){
                            checkCookieCheckoutDate = new Date($.cookie("cookie-mobilecheckout-date"));
                        }
                        var aaa = currentInputCheckout - checkCookieCheckoutDate;
                        var $date = new Date($( "#widget-mobile-checkin" ).val());
                        $date.setDate($date.getDate()+checkMindate);
                        $(this).datepicker("option", "minDate", $date);
                        if(aaa>0){
                            $(this).datepicker('setDate', checkCookieCheckoutDate);
                        }
                    }                    
                }); 
        });

        if (isMobile) {

            mobileCheckin.on('change', function () {  
                setTimeout(function () {
                    $('#widget-mobile-checkout').focus();
                }, 100);
            });

            mobileLocation.on("change", function () {
                setTimeout(function () {
                    // Do something after xx milli seconds
                    $('button[data-id="mobile-property"]').trigger('click');
                }, 100);
            });
            mobileProperty.on('change', function () {
                setTimeout(function () {
                    var selectedDate = $('#widget-mobile-checkin').datepicker('getDate');
                    //FARE0002SG-57
                    if (selectedDate) {
                        //updateMinNightsRestriction(selectedDate);
                    }
                    if ($("#widget-mobile-checkin").val() == '') {
                        $('#widget-mobile-checkin').datepicker('show');
                    }
                }, 100);
            });
            $('#widget-mobile-checkout').on('change', function () {
                setTimeout(function () {
                    $('form.mobile-bookng-widget button.room-adult-child-btn').trigger('click');
                }, 100);
            });
        } else {
            location.on("change", function () {
                setTimeout(function () {
                    // Do something after xx milli seconds
                    $('button[data-id="property"]').trigger('click');
                }, 100);
            });

            property.on('change', function () {
                setTimeout(function () {
                    var selectedDate = $('#widget-checkin').datepicker('getDate');
                    if (selectedDate) {
                        updateMinNightsRestriction(selectedDate);
                    }
                    if ($("#widget-checkin").val() == '') {
                        $('#widget-checkin').datepicker('show');
                    }
                }, 100);
            });

            location2.on("change", function () {
                setTimeout(function () {
                    // Do something after xx milli seconds
                    $('.SFE_banner_booking_widget button[data-id="property"]').trigger('click');
                }, 100);
            });

            property2.on('change', function () {
                setTimeout(function () {
                    var selectedDate = $('#checkin2').datepicker('getDate');
                    if (selectedDate) {
                        updateMinNightsRestriction2(selectedDate2);
                    }
                    if ($("#checkin2").val() == '') {
                        $('#checkin2').datepicker('show');
                    }
                }, 100);
            });

            $('.desktop-only .widget-form #property').on("change", function () {
                if ($('.desktop-only .widget-form #property option:selected').attr("data-propertynote")) {
                    var propertytext1 = $(".desktop-only .widget-form #property option:selected").attr('data-propertynote');
                    $('.desktop-only .widget-form .shownote').text(propertytext1).show();
                } else {
                    $('.desktop-only .widget-form .shownote').hide();
                }

                setTimeout(function() {
                    //FARE0002SG-57
                    if ($("#widget-checkin").val() == '') {
                        $("#widget-checkin").val(currentBooking);                         
                        $("#widget-checkin").datepicker('refresh');
                        $("#widget-checkin").datepicker('show');
                        console.log('FARE0002SG-57 : ');
                    } 
                }, 100);                  

                //FARE0002SG-111
                var checkMindate = parseInt($('.desktop-only .widget-form #property option:selected').attr("data-mindays"));
                $("#widget-checkout").each(function () {
                    if($(this).val()){
                        var currentInputCheckout = new Date($(this).val()),
                            checkCookieCheckoutDate = currentInputCheckout;
                        if($.cookie("cookie-checkout-date")){
                            checkCookieCheckoutDate = new Date($.cookie("cookie-checkout-date"));
                        }
                        var aaa = currentInputCheckout - checkCookieCheckoutDate;
                        var $date = new Date($( "#widget-checkin" ).val());
                        $date.setDate($date.getDate()+checkMindate);
                        $(this).datepicker("option", "minDate", $date);
                        if(aaa>0){
                            $(this).datepicker('setDate', checkCookieCheckoutDate);
                        }
                    } 
                }); 
            });
            
            $('.SFE_banner_booking_widget .widget-form-banner #property1').on("change",function(){
				if ($('.SFE_banner_booking_widget .widget-form-banner #property1 option:selected').attr("data-propertynote")) {      
					var propertytext2 = $(".SFE_banner_booking_widget .widget-form-banner #property1 option:selected").attr('data-propertynote');
					$('.SFE_banner_booking_widget .widget-form-banner .shownote').text(propertytext2).show();
				  }
				  else
				  {
					$('.SFE_banner_booking_widget .widget-form-banner .shownote').hide();
				  }
                setTimeout(function() {
                    //FARE0002SG-57
                    if ($('#checkin2').val() == '') {
                        $('#checkin2').val(currentBooking);                         
                        $('#checkin2').datepicker('refresh');
                        $('#checkin2').datepicker('show');
                        console.log('FARE0002SG-57 : 3');
                    } 
                }, 100);                   

                //FARE0002SG-111
                var checkMindate = parseInt($('.SFE_banner_booking_widget .widget-form-banner #property1 option:selected').attr("data-mindays"));
                $("#checkout2").each(function () {
                    if($(this).val()){
                        var currentInputCheckout = new Date($(this).val()),
                            checkCookieCheckoutDate = currentInputCheckout;
                        if($.cookie("cookie-checkout-date")){
                            checkCookieCheckoutDate = new Date($.cookie("cookie-checkout-date"));
                        }
                        var aaa = currentInputCheckout - checkCookieCheckoutDate;
                        var $date = new Date($( "#checkin2" ).val());
                        $date.setDate($date.getDate()+checkMindate);
                        $(this).datepicker("option", "minDate", $date);
                        if(aaa>0){
                            $(this).datepicker('setDate', checkCookieCheckoutDate);
                        }
                    }
                }); 
			});
            $('#widget-checkin').on('change', function() {
                setTimeout(function() {
                    $('#widget-checkout').focus();
                }, 100);
            });

            $('#checkin2').on('change', function () {
                setTimeout(function () {
                    $('#checkout2').focus();
                }, 100);
            });

            $('#widget-checkout').on('change', function () {
                setTimeout(function () {
                    $('.desktop-only form.desktop-bookng-widget button.room-adult-child-btn').trigger('click');
                }, 100);
            });

            $('#checkout2').on('change', function () {
                setTimeout(function () {
                    $('button.room-adult-child-btn2').trigger('click');
                }, 100);
            });
        }
        
    }    


    //load page -> set CO > CI : FARE0002SG-138
    $(window).bind("load", function() {
        $("#widget-checkout").each(function () {
            var checkin2 = $("#widget-checkin").val(),
                currentDate = new Date();
            if(checkin2){
                var $date = new Date(checkin2);    
            }else {
                var $date = new Date(currentDate);    
            }
            $date.setDate($date.getDate()+1);
            
            $(this).datepicker("option", "minDate", $date);
        });        
        $("#checkout2").each(function () {
            var checkin2 = $("#checkin2").val(),
                currentDate = new Date();
            if(checkin2){
                var $date = new Date(checkin2);    
            }else {
                var $date = new Date(currentDate);    
            }
            $date.setDate($date.getDate()+1);
            
            $(this).datepicker("option", "minDate", $date);
        });   

        $("#widget-mobile-checkout").each(function () {
            var checkin2 = $("#widget-mobile-checkin").val(),
                currentDate = new Date();
            if(checkin2){
                var $date = new Date(checkin2);    
            }else {
                var $date = new Date(currentDate);    
            }
            $date.setDate($date.getDate()+1);
            
            $(this).datepicker("option", "minDate", $date);
        }); 


    });  


    //WIDGET VALIDATION
    $('.widget-form').on('click', '.btn-submit', function (e) {
        // e.preventDefault();
        $(".widget-form").removeClass('sfe_form');
        $(this).closest(".widget-form").addClass('sfe_form');
        var browser_responsive = false;
        var formData = new FormData();
        var $widgetForm = $('.sfe_form'),
            // location = $widgetForm.find('.location').selectpicker('val'),
            mindays = $('.widget').find('.mindays').val() || $('.booknow-widget').find('.mindays').val() || 0,
            checkInVal = $widgetForm.find('.checkin-date').val(),
            checkOutVal = $widgetForm.find('.checkout-date').val(),
            propertyVal = $widgetForm.find('.property').selectpicker('val');

        if ($('.mobile-only .sfe_form').length > 0) {
            if ($('.mobile-only').is(":visible") == true) {
                $widgetForm = $('.mobile-only .sfe_form'),
                    mindays = $('.mobile-only .widget').find('.mindays').val() || $('.mobile-only .booknow-widget').find('.mindays').val() || 0,
                    checkInVal = $widgetForm.find('.checkin-date').val(),
                    checkOutVal = $widgetForm.find('.checkout-date').val(),
                    propertyVal = $widgetForm.find('.property').selectpicker('val');

            }
        }
        if ($('.desktop-only .sfe_form').length > 0) {
            if ($('.desktop-only').is(":visible") == true) {
                $widgetForm = $('.desktop-only .sfe_form'),
                    mindays = $('.desktop-only .widget').find('.mindays').val() || $('.desktop-only .booknow-widget').find('.mindays').val() || 0,
                    checkInVal = $widgetForm.find('.checkin-date').val(),
                    checkOutVal = $widgetForm.find('.checkout-date').val(),
                    propertyVal = $widgetForm.find('.property').selectpicker('val');
                formData.append("Mindays", $('[name="mindays"]').val().trim());

            }
        }
        if ($('.mobile-only .sfe_form').length == 0 && $('.desktop-only .sfe_form').length == 0) {
            $('.sfe_form .error-placement').hide();
            var CheckIn = $('#checkin').val();
            var CheckOut = $('#checkout').val();
            var CheckProperty = $('#property').val();
            var pleaseSelect = $('#pleaseselect').val() + ' ';
            if (!checkInVal && !checkOutVal && !propertyVal) {
                $('.sfe_form .error-placement').text(pleaseSelect + CheckProperty + ', ' + CheckIn + ' & ' + CheckOut).show();
                e.preventDefault();
                return false;
            } else if (!checkInVal && !checkOutVal) {
                $('.sfe_form .error-placement').text(pleaseSelect + CheckIn + ' & ' + CheckOut).show();
                e.preventDefault();
                return false;
            } else if (!checkInVal && !propertyVal) {
                $('.sfe_form .error-placement').text(pleaseSelect + CheckProperty + ' & ' + CheckIn).show();
                e.preventDefault();
                return false;
            } else if (!checkOutVal && !propertyVal) {
                $('.sfe_form .error-placement').text(pleaseSelect + CheckProperty + ' & ' + CheckOut).show();
                e.preventDefault();
                return false;
            } else if (!propertyVal) {
                $('.sfe_form .error-placement').text(pleaseSelect + CheckProperty).show();
                e.preventDefault();
                return false;
            } else if (!checkInVal) {
                $('.sfe_form .error-placement').text(pleaseSelect + CheckIn).show();
                e.preventDefault();
                return false;
            } else if (!checkOutVal) {
                $('.sfe_form .error-placement').text(pleaseSelect + CheckOut).show();
                e.preventDefault();
                return false;
            } else {
                var selectedCheckIn = new Date(checkInVal).getTime();
                var selectedCheckOut = new Date(checkOutVal).getTime();
                if (selectedCheckOut - selectedCheckIn < (86400000 * mindays)) {
                    var minNights = $('input:hidden.mindays').val() || 0;
                    $('.sfe_form .error-placement').text('Minimum ' + minNights + ' nights required.').show();
                    e.preventDefault();
                    return false;
                } else {
                    $('.sfe_form .error-placement').hide();
                }
            }
        } else {
            if ($('.mobile-only .sfe_form').length > 0) {
                if ($('.mobile-only').is(":visible") == true) {
                    $('.mobile-only .error-placement').hide();
                    var CheckIn = $('#checkin').val();
                    var CheckOut = $('#checkout').val();
                    var CheckProperty = $('#property').val();
                    var pleaseSelect = $('#pleaseselect').val() + ' ';

                    if (!checkInVal && !checkOutVal && !propertyVal) {
                        $('.mobile-only .error-placement').text(pleaseSelect + CheckProperty + ', ' + CheckIn + ' & ' + CheckOut).show();
                        e.preventDefault();
                        return false;
                    } else if (!checkInVal && !checkOutVal) {
                        $('.mobile-only .error-placement').text(pleaseSelect + CheckIn + ' & ' + CheckOut).show();
                        e.preventDefault();
                        return false;
                    } else if (!checkInVal && !propertyVal) {
                        $('.mobile-only .error-placement').text(pleaseSelect + CheckProperty + ' & ' + CheckIn).show();
                        e.preventDefault();
                        return false;
                    } else if (!checkOutVal && !propertyVal) {
                        $('.mobile-only .error-placement').text(pleaseSelect + CheckProperty + ' & ' + CheckOut).show();
                        e.preventDefault();
                        return false;
                    } else if (!propertyVal) {
                        $('.mobile-only .error-placement').text(pleaseSelect + CheckProperty).show();
                        e.preventDefault();
                        return false;
                    } else if (!checkInVal) {
                        $('.mobile-only .error-placement').text(pleaseSelect + CheckIn).show();
                        e.preventDefault();
                        return false;
                    } else if (!checkOutVal) {
                        $('.mobile-only .error-placement').text(pleaseSelect + CheckOut).show();
                        e.preventDefault();
                        return false;
                    } else {
                        var selectedCheckIn = new Date(checkInVal).getTime();
                        var selectedCheckOut = new Date(checkOutVal).getTime();
                        if (selectedCheckOut - selectedCheckIn < (86400000 * mindays)) {
                            var minNights = $('input:hidden.mindays').val() || 0;
                            $('.mobile-only .error-placement').text('Minimum ' + minNights + ' nights required.').show();
                            e.preventDefault();
                            return false;
                        } else {
                            $('.mobile-only .error-placement').hide();
                        }
                    }
                }
            }
            if ($('.desktop-only .sfe_form').length > 0) {
                if ($('.desktop-only').is(":visible") == true) {
                    $('.desktop-only .sfe_form .error-placement').hide();
                    var CheckIn = $('#checkin').val();
                    var CheckOut = $('#checkout').val();
                    var CheckProperty = $('#property').val();
                    var pleaseSelect = $('#pleaseselect').val() + ' ';

                    if (!checkInVal && !checkOutVal && !propertyVal) {
                        $('.desktop-only .sfe_form .error-placement').text(pleaseSelect + CheckProperty + ', ' + CheckIn + ' & ' + CheckOut).show();
                        e.preventDefault();
                        return false;
                    } else if (!checkInVal && !checkOutVal) {
                        $('.desktop-only .sfe_form .error-placement').text(pleaseSelect + CheckIn + ' & ' + CheckOut).show();
                        e.preventDefault();
                        return false;
                    } else if (!checkInVal && !propertyVal) {
                        $('.desktop-only .sfe_form .error-placement').text(pleaseSelect + CheckProperty + ' & ' + CheckIn).show();
                        e.preventDefault();
                        return false;
                    } else if (!checkOutVal && !propertyVal) {
                        $('.desktop-only .sfe_form .error-placement').text(pleaseSelect + CheckProperty + ' & ' + CheckOut).show();
                        e.preventDefault();
                        return false;
                    } else if (!propertyVal) {
                        $('.desktop-only .sfe_form .error-placement').text(pleaseSelect + CheckProperty).show();
                        e.preventDefault();
                        return false;
                    } else if (!checkInVal) {
                        $('.desktop-only .sfe_form .error-placement').text(pleaseSelect + CheckIn).show();
                        e.preventDefault();
                        return false;
                    } else if (!checkOutVal) {
                        $('.desktop-only .sfe_form .error-placement').text(pleaseSelect + CheckOut).show();
                        e.preventDefault();
                        return false;
                    } else {
                        var selectedCheckIn = new Date(checkInVal).getTime();
                        var selectedCheckOut = new Date(checkOutVal).getTime();
                        if (selectedCheckOut - selectedCheckIn < (86400000 * mindays)) {
                            var minNights = $('input:hidden.mindays').val() || 0;
                            $('.desktop-only .sfe_form .error-placement').text('Minimum ' + minNights + ' nights required.').show();
                            e.preventDefault();
                            return false;
                        } else {
                            $('.desktop-only .sfe_form .error-placement').hide();
                        }
                    }
                }
            }
        }
        if ($('.mobile-only').is(":visible") == true) { 
            //form data values for  mobile booking widget
            formData.append("Property", $('.widget-form #mobile-property option:selected').val().trim());
            formData.append("CheckIn", $("#widget-mobile-checkin").val().trim());
            formData.append("CheckOut", $("#widget-mobile-checkout").val().trim());
            formData.append("Adults", $(this).closest('.new-form-booking').find(".value-submit-adult-child .adults").html());
            formData.append("Children", $(this).closest('.new-form-booking').find(".value-submit-adult-child .childrens").html());

            formData.append("DefaultAdults", $('.mobile-only [name="defaultAdults"]').val().trim());
            formData.append("DefaultChildren", $('.mobile-only [name="defaultChildren"]').val().trim());
            formData.append("CallBooking", $('[name="call-booking"]').val().trim());
            formData.append("Iata", $('.mobile-only [name="iata"]').val().trim());
			if($('[name="session"]').length >0){
				formData.append("session", $('[name="session"]').val().trim());	
			}
			if ($('.mobile-only [name="chain"]').length > 0) {
				formData.append("chain", $('.mobile-only [name="chain"]').val().trim());
			}

        } else {
            //form data values for desktop booking widget
            formData.append("Property", $('.widget-form #property option:selected').val().trim());
            formData.append("CheckIn", $('[name="check-in"]').val().trim());
            formData.append("CheckOut", $('[name="check-out"]').val().trim());
            formData.append("Adults", $(this).closest('.new-form-booking').find(".value-submit-adult-child .adults").html());
            formData.append("Children", $(this).closest('.new-form-booking').find(".value-submit-adult-child .childrens").html());

            formData.append("DefaultAdults", $('[name="defaultAdults"]').val().trim());
            formData.append("DefaultChildren", $('[name="defaultChildren"]').val().trim());
            formData.append("CallBooking", $('[name="call-booking"]').val().trim());
            formData.append("Iata", $('[name="iata"]').val().trim());
			if($('[name="session"]').length > 0){
				formData.append("session", $('[name="session"]').val().trim());	
			}
			if ($('[name="chain"]').length > 0) {
				formData.append("chain", $('[name="chain"]').val().trim());
			}
        }

        callBookingWidget(formData);
    });




    //Book now widget on banner validation

    $('.widget-form-banner').on('click', '.btn-submit', function (e) {
        // e.preventDefault();
        $(".widget-form-banner").removeClass('sfe_form');
        $(this).closest(".widget-form-banner").addClass('sfe_form2');
        var browser_responsive = false;

        var $widgetForm = $('.sfe_form2'),
            // location = $widgetForm.find('.location').selectpicker('val'),
            mindays = $widgetForm.find('.mindays').val() || 0,
            checkInVal = $widgetForm.find('.checkin2').val(),
            checkOutVal = $widgetForm.find('.checkout2').val(),
            propertyVal = $widgetForm.find('.property').selectpicker('val');


        if ($('.sfe_form2').length > 0) {

            $widgetForm = $('.sfe_form2'),
                mindays = $widgetForm.find('.mindays').val() || 0,
                checkInVal = $widgetForm.find('.checkin2').val(),
                checkOutVal = $widgetForm.find('.checkout2').val(),
                propertyVal = $widgetForm.find('.property1').selectpicker('val');

        }

        if ($('.sfe_form2').length > 0) {

            $('.sfe_form2 .error-placement').hide();
            var CheckIn = $('#checkin').val();
            var CheckOut = $('#checkout').val();
            var CheckProperty = $('#property1').val();
            var pleaseSelect = $('#pleaseselect').val() + ' ';

            if (!checkInVal && !checkOutVal && !propertyVal) {
                $('.sfe_form2 .error-placement').text(pleaseSelect + CheckProperty + ', ' + CheckIn + ' & ' + CheckOut).show();
                e.preventDefault();
                return false;
            } else if (!checkInVal && !checkOutVal) {
                $('.sfe_form2 .error-placement').text(pleaseSelect + CheckIn + ' & ' + CheckOut).show();
                e.preventDefault();
                return false;
            } else if (!checkInVal && !propertyVal) {
                $('.sfe_form2 .error-placement').text(pleaseSelect + CheckProperty + ' & ' + CheckIn).show();
                e.preventDefault();
                return false;
            } else if (!checkOutVal && !propertyVal) {
                $('.sfe_form2 .error-placement').text(pleaseSelect + CheckProperty + ' & ' + CheckOut).show();
                e.preventDefault();
                return false;
            } else if (!propertyVal) {
                $('.sfe_form2 .error-placement').text(pleaseSelect + CheckProperty).show();
                e.preventDefault();
                return false;
            } else if (!checkInVal) {
                $('.sfe_form2 .error-placement').text(pleaseSelect + CheckIn).show();
                e.preventDefault();
                return false;
            } else if (!checkOutVal) {
                $('.sfe_form2 .error-placement').text(pleaseSelect + CheckOut).show();
                e.preventDefault();
                return false;
            } else {
                var selectedCheckIn = new Date(checkInVal).getTime();
                var selectedCheckOut = new Date(checkOutVal).getTime();
                if (selectedCheckOut - selectedCheckIn < (86400000 * mindays)) {
                    var minNights = $('input:hidden.mindays').val() || 0;
                    $('.sfe_form2 .error-placement').text('Minimum ' + minNights + ' nights required.').show();
                    e.preventDefault();
                    return false;
                } else {
                    $('.sfe_form2 .error-placement').hide();
                }
            }

        }
        var formDataBanner = new FormData();

        formDataBanner.append("Mindays", $('[name="mindays"]').val().trim());
        formDataBanner.append("Property", $('.widget-form-banner #property1 option:selected').val().trim());
        formDataBanner.append("CheckIn", $('#checkin2').val().trim());
        formDataBanner.append("CheckOut", $('#checkout2').val().trim());
        formDataBanner.append("Adults", $(this).closest('.new-form-booking').find(".value-submit-adult-child .adults").html());
        formDataBanner.append("Children", $(this).closest('.new-form-booking').find(".value-submit-adult-child .childrens").html());

        formDataBanner.append("DefaultAdults", $(".hiddendefaultAdults2").val().trim());
        formDataBanner.append("DefaultChildren", $(".hiddendefaultChildren2").val().trim());
        formDataBanner.append("CallBooking", $('[name="call-booking"]').val().trim());
        formDataBanner.append("Iata", $('.widget-form-banner #promocode').val().trim());
		if($('[name="session"]').length >0){
			formDataBanner.append("session", $('[name="session"]').val().trim());
		}
		if ($('[name="chain"]').length > 0) {
			formData.append("chain", $('[name="chain"]').val().trim());
		}
        callBookingWidgetBanner(formDataBanner);
    });


    // Hide Language Selector
    setTimeout(function () {
        if ($('#sfe-language option').length > 0) {
            var languageLength = $('#sfe-language option').length;
            if (languageLength <= 1) {
                $('.language .dropdown-toggle .bs-caret').hide();
                $('.language .dropdown-menu.open').hide();
                $('.language.nav-select').addClass('hidelan');
            }
        }

    }, 1000);

    // select placeholder
    $('.form-claim select').on('changed.bs.select', function () {
        $(this).parent().removeClass('empty');
    });

    //scrollto ANCHOR LINK
    $('.scrollto').on('click', function (e) {
        e.preventDefault();
        if ($(this).attr('href') != null && $(this).attr('href') != "" && $(this).attr('href') != "undefined") {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 500);
        }

        // console.log($(this).attr('href'));
        //return false;
    });

    $('.btn-collapse').each(function () {
        if ($(this).parent().parent().find('.content-collapse').length < 1) {
            $(this).addClass("hidden-btn-collapse");
        }
    });
    // COLLAPSE FUNCTION  
    $('.btn-collapse').on('click', function () {
        $(this).parent().parent().find('.content-collapse').slideToggle('slow');

        if ($(this).find('span').hasClass('glyphicon-menu-down') || $(this).find('span').hasClass('glyphicon-menu-up')) {

            if ($(this).hasClass('more')) {
                $(this).next().show();
                $(this).hide();
            } else if ($(this).hasClass('less')) {
                $(this).prev().show();
                $(this).hide();
            } else {
                $(this).find('span').toggleClass('glyphicon-menu-down glyphicon-menu-up');
            }
        } else {
            var icontxt = $(this).find('span').text();
            if (icontxt == '+' && $(this).hasClass('more')) {
                $(this).html('<span>-</span> Read less');
            } else if (icontxt == '-' && $(this).hasClass('more')) {
                $(this).html('<span>+</span> Read more');
            } else if (icontxt == '+') {
                $(this).find('span').text('-');
            } else {
                $(this).find('span').text('+');
            }
        }


    });

    // MENU OPEN
    //MENU TRANSFORM
    $('.menu-burger').on('click', function (e) {
        var $this = $(this),
        content = $('.menu-burger li p a');

        e.preventDefault();
        $this.toggleClass('open');
        if ($('.header_ribbon__promoData_detail').length && !$('.header_ribbon__promoData_detail').is(":hidden") && !$('.header_ribbon__promoData_detail').is(":animated") && $('.promoData_toggler').length) {
            $('.promoData_toggler')[0].click();
            $('.promoData_toggler').toggleClass('active_promo');
        }
        $this.find('.burger-bar').toggleClass('open');
        $('.promotion-bar').toggleClass('menu-opened');

        if ($('body').hasClass('menu-open')) {
            $('.header-overlay-wrapper').fadeOut('fast');
            $('.overlay-menu').fadeOut('fast');
            //$('html').removeClass('menu-open');
            $('body').removeClass('menu-open');
        } else {
            $('.header-overlay-wrapper').fadeIn('fast');
            $('.overlay-menu').fadeIn('fast');
            //$('html').addClass('menu-open');
            $('body').addClass('menu-open');
        }
    });
    $('.menu-burger-close').on('click', function (e) {
        $('body').removeClass('menu-open');
        $('.menu-burger').removeClass('open');
        $('.menu-burger').find('.burger-bar').removeClass('open');
        $('.header-overlay-wrapper').fadeOut('fast');
        $('.sfe_menu .overlay-menu').fadeOut('fast');        
    });


    $('#signin_up').on('click', function () {
        if($('.header-overlay-wrapper').is(':visible') && $('.menu_listing_new #signin_up p span').text() == "") {
            $('.menu-burger').click();
        }
    });

    $('#hotel-list a').click(function (e) {
        e.preventDefault();
        //$(this).tab('show');
    });


    $(window).on("resize", function () {

    })


    $(".overlay-menu .menu-listing.left-section>li").hover(
        function () {
            if ($(window).width() > 768) {
                $(".overlay-menu .menu-listing.left-section li a").removeClass("active");
                $(this).find("a").addClass("active");
                //var list= $(this).find("a").attr("datalist");
                if ($(this).find(".show-hover-right-section").length > 0) {
                    var element = $(this).find(".show-hover-right-section");
                    $(".show-on-hover-section-header").html(element.html());
                    $(".overlay-menu .menu-listing.right-section").show();
                } else {
                    $(".overlay-menu .menu-listing.right-section").hide();
                }
            }
        },
        function () {
            if ($(window).width() > 768) {

            }
        }
    );



    $(".overlay-menu .menu-listing.left-section li .arrow.right").on("click", function () {
        if ($(window).width() <= 768) {
            $(".overlay-menu .menu-listing.left-section").hide();
            if ($(this).parent().find(".show-hover-right-section").length > 0) {
                var element = $(this).parent().find(".show-hover-right-section");
                $(".show-on-hover-section-header").html(element.html());
                $(".overlay-menu .menu-listing.right-section").show();
            }
            $(".footnotes-section").hide();
        }



    });

    $(window).on("resize", function () {
        if ($(window).width() > 768) {
            $(".overlay-menu .menu-listing.left-section").show();
        }

    })

    $("body").on("click", ".menu-listing.right-section ul li .arrow.left", function () {
        $(".overlay-menu .menu-listing.left-section").show();
        $("ul.menu-listing.right-section").hide();
        $(".footnotes-section").show();
    });


    $("body").on("click", ".menu-listing.right-section ul li.back-to-all-hotels-residences a", function (e) {
        e.preventDefault();
        $(".overlay-menu .menu-listing.left-section").show();
        $("ul.menu-listing.right-section").hide();
        $(".footnotes-section").show();
    });



    $('.hotel-image-slider').owlCarousel({
        loop: false,
        margin: 15,
        navText: [' ', ' '],
        responsiveClass: true,
        items: 1,
        nav: true
    });

    // Footer logo carousel
    var logoLength = $('.brands-carousel li').length;
    $('.brands-carousel').owlCarousel({
        loop: false,
        margin: 15,
        responsiveClass: true,
        items: 4,
        responsive: {
            0: {
                items: 2,
                nav: (logoLength > 2),
                mouseDrag: (logoLength > 2),
                touchDrag: (logoLength > 2)
            },
            600: {
                items: 3,
                nav: (logoLength > 3),
                mouseDrag: (logoLength > 3),
                touchDrag: (logoLength > 3)
            },
            1000: {
                items: 4,
                nav: (logoLength > 4),
                mouseDrag: (logoLength > 4),
                touchDrag: (logoLength > 4)
            }
        }
    });

    var logoLength = $('.partner-brands-carousel li').length;
    $('.partner-brands-carousel').owlCarousel({
        loop: false,
        margin: 15,
        responsiveClass: true,
        items: 4,
        responsive: {
            0: {
                items: 2,
                nav: (logoLength > 2),
                mouseDrag: (logoLength > 2),
                touchDrag: (logoLength > 2)
            },
            600: {
                items: 3,
                nav: (logoLength > 3),
                mouseDrag: (logoLength > 3),
                touchDrag: (logoLength > 3)
            },
            1000: {
                items: 4,
                nav: (logoLength > 4),
                mouseDrag: (logoLength > 4),
                touchDrag: (logoLength > 4)
            }
        }
    });

    var logoLength = $('.affiliate-brands-carousel li').length;
    $('.affiliate-brands-carousel').owlCarousel({
        loop: false,
        margin: 15,
        responsiveClass: true,
        items: 4,
        responsive: {
            0: {
                items: 2,
                nav: (logoLength > 2),
                mouseDrag: (logoLength > 2),
                touchDrag: (logoLength > 2)
            },
            600: {
                items: 3,
                nav: (logoLength > 3),
                mouseDrag: (logoLength > 3),
                touchDrag: (logoLength > 3)
            },
            1000: {
                items: 4,
                nav: (logoLength > 4),
                mouseDrag: (logoLength > 4),
                touchDrag: (logoLength > 4)
            }
        }
    });


 
    $('.findoutmore .owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots:true,
        navText: ["<img loading='lazy' src='/assets/hospitality/images/left.svg' alt='left'>","<img loading='lazy' src='/assets/hospitality/images/right.svg' alt='right'>"],
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          }
        }
      });
    

    // hotel carousel
    $('.home-hotel-list').owlCarousel({
        loop: false,
        margin: 15,
        navText: [' ', ' '],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });

    // $(".owl-nav .owl-prev, .owl-nav .owl-next").append("<span class='icon'></span>");
    // $(".gallery-carousel .owl-nav .owl-prev, .gallery-carousel .owl-nav .owl-next").append("<span class='icon'></span>");

    //FUNCTION TO DETECT COOKIE
    function announcementCookie() {
        //console.log('cookie >>', $.cookie('announcement-flag'));
        if ($.cookie('announcement-flag')) {

            hideAnnouncement();
        } else {
            showAnnouncement();

        }
    }

    //SHOW ANNOUNCEMENT
    function showAnnouncement(withPromobar) {
        var withPromobar = withPromobar ? withPromobar : false;


        if (withPromobar) {
            // console.log('show announcement ', withPromobar );
            $("#announcement-container, #announcement-triangle").show();
            $('#announcement-icon .icon-close').show();
            $('#announcement-icon .icon-open').hide();
        } else {

            // console.log('show announcement ', withPromobar );

            $("#announcement-container, #announcement-triangle").fadeIn("fast", "linear");
            $('#announcement-icon .icon-close').show();
            $('#announcement-icon .icon-open').hide();

        }
    }

    //HIDE ANNOUNCEMENT
    function hideAnnouncement(withPromobar) {
        var withPromobar = withPromobar ? withPromobar : false;
        //$( "#announcement-container, #announcement-triangle" ).hide();

        if (withPromobar) {
            // console.log('hide announcement ', withPromobar );
            $("#announcement-container, #announcement-triangle").hide();
            $('#announcement-icon .icon-close').hide();
            $('#announcement-icon .icon-open').show();
        } else {
            // console.log('hide announcement ', withPromobar );
            $("#announcement-container, #announcement-triangle").fadeOut("fast", "linear");
            $('#announcement-icon .icon-close').hide();
            $('#announcement-icon .icon-open').show();

        }
    }


    //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
    function scrollTo() {
        $('body').focus();
        $('html, body').animate({
            scrollTop: $('.deal-selector').offset().top - 50
        }, 500);
    }

    function videoModal() {
        var videoBanner = $("body").find('[data-target="#videoModal"]');
        videoBanner.click(function () {
            var theModal = $(this).data("target"),
                videoSRC = $(this).attr("data-videosource"),
                videoAutoplay = videoSRC + "?autoplay=1&rel=0&enablejsapi=1";

            $(theModal + ' iframe').attr('src', videoAutoplay);
            $(theModal + ' button.close').click(function () {
                $(theModal + ' iframe').attr('src', videoSRC);
            });

            $('.modal').click(function () {
                $(theModal + ' iframe').attr('src', videoSRC);
            });
        });
    }

    $('.deal-type').on('changed.bs.select', function (e) {

        var id = $(e.target).val();
        var name = $(e.target).find('option:selected').text();
        var datatype = $('option:selected', e.target).attr('data-type');
        if (datatype == 'hotel' || datatype == 'serviced residence') {
            name = !id ? '' : id.toLowerCase().replace(/ /g, '-');
        } else {
            name = !id ? '' : name.toLowerCase().replace(/ /g, '-');
        }

        var url = Query.update('property', name);
        History.pushState(null, document.title, url);
        scrollTo();
    });

    $('.travel-type').on('changed.bs.select', function (e) {

        var id = $(e.target).val();
        var name = $(e.target).find('option:selected').text();
        name = !id ? '' : name.toLowerCase().replace(/ /g, '-');

        var url = Query.update('type', name);
        History.pushState(null, document.title, url);
        scrollTo();
    });

    $('.see-more').on('click', function (e) {
        e.preventDefault();
        var args = {
            reset: true,
            action: 'paging'
        };
        $('[data-role=dynamic]').trigger('display', args);
    });
    var cacheDom = "";
    var index = $("form[data-wffm] > div").index($(".property-type")) + 3;

    $(".enquiry-type select").on("change", function () {
        var value = $(this).val();
        console.log(value);
        if (value == "{F8AD9D2D-9093-42EB-98A9-7F3EEDB28F16}") {
            cacheDom = $(".property-type");
            $(".property-type").remove();
        } else {
            if (cacheDom) {
                $("form[data-wffm] > div:nth-child(" + (index) + ")").after(cacheDom);
            }
        }
    });

    $('.check-availability-btn').on('click', function (e) {
        //e.preventDefault();
        var goalid = $(this).data("goal-id");
        var istestenabled = $(this).data("test-enabled");
        if (istestenabled == 'True') {
            if (goalid != null && goalid != "undefined" && goalid != "") {
                $.getJSON('/ajax/triggergoal/' + goalid, function (data) {
                    console.log(data);
                });
            }
        }
    });

    $('.book-now-btn').on('click', function (e) {
        //e.preventDefault();
        var goalid = $(this).data("goal-id");
        var istestenabled = $(this).data("test-enabled");
        if (istestenabled == 'True') {
            if (goalid != null && goalid != "undefined" && goalid != "") {
                $.getJSON('/ajax/triggergoal/' + goalid, function (data) {
                    console.log(data);
                });
            }
        }
        var propertytext1 = $(".widget-form #mobile-property option:selected").attr('data-propertynote');
        $('.widget-form .shownote').text(propertytext1).show();
    });
    $('#home-search .searchbar').on("click", function () {
        //$('.bk_btn .mobile-only #top-book-now').trigger( "click" );
        $('#booknow-widget').modal('show');
    });
    $(".room-adult-child-btn").on('click', function (e) {
        e.stopPropagation();
        var element = $(this);
        if (!(element.hasClass("opacity"))) {
            //    if($(".dropdown-rooms").hasClass("active")){
            //     $(".dropdown-rooms").removeClass("active");
            //     }else{
            //         $(".dropdown-rooms").addClass("active");
            //     } 

            if ($(this).closest('.widget-form').find('.dropdown-rooms').hasClass("active")) {
                $(this).closest('.widget-form').find('.dropdown-rooms').removeClass("active");
            } else {
                $(this).closest('.widget-form').find('.dropdown-rooms').addClass("active");
            }


        }
    });

    $(".room-adult-child-btn2").on('click', function (e) {
        e.stopPropagation();
        var element = $(this);
        if (!(element.hasClass("opacity"))) {
            //    if($(".dropdown-rooms").hasClass("active")){
            //     $(".dropdown-rooms").removeClass("active");
            //     }else{
            //         $(".dropdown-rooms").addClass("active");
            //     } 

            if ($(this).closest('.widget-form-banner').find('.dropdown-rooms').hasClass("active")) {
                $(this).closest('.widget-form-banner').find('.dropdown-rooms').removeClass("active");
            } else {
                $(this).closest('.widget-form-banner').find('.dropdown-rooms').addClass("active");
            }


        }
    });

    $("ul.dropdown-rooms").click(function (e) {
        e.stopPropagation();
    });

    var timeframe = $(".dynamic-wiget-container").attr("data-timeframe");
    setTimeout(function () {
        $(".dynamic-wiget-container").fadeIn();
    }, timeframe);
    $(".dynamic-wiget-container .close").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(".dynamic-wiget-container").fadeOut();
    })
    $(".plus-sign").on('click', function (e) {
        e.stopPropagation();
        var element = $(this);
        var totalsum = 0;
        element.parents(".dropdown-rooms").find(".occ-label").each(function (i, obj) {
            totalsum += parseInt(obj.innerHTML);
        });
        var currentlabel = element.parents("li").find(".occ-label");
        var currentnumber = parseInt(currentlabel.html());
        var max_limit = parseInt(currentlabel.attr("data-max-pax-limit"));
        if (max_limit == (totalsum + 1)) {
            $(".add-less-icon.plus-sign").addClass("active");
            element.parent().find(".minus-sign").removeClass("active");
        } else if (max_limit == totalsum) {
            $(".add-less-icon.plus-sign").addClass("active");
            return;
        } else if (max_limit > totalsum) {
            element.removeClass("active");
            element.parent().find(".minus-sign").removeClass("active");
        } else {
            return;
        }
        currentlabel.html(currentnumber + 1);
        var mapelementid = currentlabel.data("mapid");
        $("text." + mapelementid).html(currentnumber + 1);
        element.parents("form").find("input[name='" + mapelementid + "']").val(currentnumber + 1);
        //$.cookie("cookie-"+mapelementid,currentnumber+1, { path: '/' });
    });

    $(".minus-sign").on('click', function (e) {
        e.stopPropagation();
        var element = $(this);
        var label = element.parents("li").find(".occ-label");
        var number = parseInt(label.html());
        var min_limit = parseInt(label.attr("data-min-limit"));
        if (min_limit == number - 1) {
            element.addClass("active");
            $(".add-less-icon.plus-sign").removeClass("active");
        } else if (min_limit < number) {
            element.removeClass("active");
            $(".add-less-icon.plus-sign").removeClass("active");
        } else {
            return;
        }
        label.html(number - 1);
        var mapelementid = label.data("mapid");
        $("text." + mapelementid).html(number - 1);
        element.parents("form").find("input[name='" + mapelementid + "']").val(number - 1);
        // $.cookie("cookie-"+mapelementid,number-1, { path: '/' });
    });



    $(".plus-sign2").on('click', function (e) {
        e.stopPropagation();
        var element = $(this);
        var totalsum = 0;
        element.parents(".dropdown-rooms").find(".occ-label").each(function (i, obj) {
            totalsum += parseInt(obj.innerHTML);
        });
        var currentlabel = element.parents("li").find(".occ-label");
        var currentnumber = parseInt(currentlabel.html());
        var max_limit = parseInt(currentlabel.attr("data-max-pax-limit"));
        if (max_limit == (totalsum + 1)) {
            $(".add-less-icon.plus-sign2").addClass("active");
            element.parent().find(".minus-sign2").removeClass("active");
        } else if (max_limit == totalsum) {
            $(".add-less-icon.plus-sign2").addClass("active");
            return;
        } else if (max_limit > totalsum) {
            element.removeClass("active");
            element.parent().find(".minus-sign2").removeClass("active");
        } else {
            return;
        }
        currentlabel.html(currentnumber + 1);
        var mapelementid = currentlabel.data("mapid");
        $("text." + mapelementid).html(currentnumber + 1);
        element.parents("form").find("input[name='" + mapelementid + "']").val(currentnumber + 1);
        //$.cookie("cookie-"+mapelementid,currentnumber+1, { path: '/' });
    });

    $(".minus-sign2").on('click', function (e) {
        e.stopPropagation();
        var element = $(this);
        var label = element.parents("li").find(".occ-label");
        var number = parseInt(label.html());
        var min_limit = parseInt(label.attr("data-min-limit"));
        if (min_limit == number - 1) {
            element.addClass("active");
            $(".add-less-icon.plus-sign2").removeClass("active");
        } else if (min_limit < number) {
            element.removeClass("active");
            $(".add-less-icon.plus-sign2").removeClass("active");
        } else {
            return;
        }
        label.html(number - 1);
        var mapelementid = label.data("mapid");
        $("text." + mapelementid).html(number - 1);
        element.parents("form").find("input[name='" + mapelementid + "']").val(number - 1);
        // $.cookie("cookie-"+mapelementid,number-1, { path: '/' });
    });

    function checkforMobileDevice() {
        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var data_href_mobile = $(".facebook-app-embed-link").attr("data-href-mobile");
            $(".facebook-app-embed-link").attr("href", data_href_mobile);
        } else {
            var data_href_desktop = $(".facebook-app-embed-link").attr("data-href-desktop");
            $(".facebook-app-embed-link").attr("href", data_href_desktop);
        }
    }
    checkforMobileDevice();

    $(".facebook-app-embed-link").on("click", function (e) {
        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            e.preventDefault();
            var desktop_link = $(this).attr("data-href-desktop");
            var mobile_link = $(this).attr("data-href-mobile");
            setTimeout(function () {
                window.location = desktop_link;
            }, 2000);
            window.location = mobile_link;
        }
    })

    function callBookingWidget(formData) {
        

        $.ajax({
            url: "/api/sitecore/StayFarEastNavigation/CallBookingWidget",
            type: 'POST',
            cache: false,
            contentType: false,
            processData: false,
            async: false,
            data: formData,
            success: function (data) {

                var booknow_form ="";
				if ($('.desktop-only .sfe_form').length > 0){
                 booknow_form = document.getElementById('header-booknow-widget')
				}
				else{
				 booknow_form = document.getElementById('header-mobile-booknow-widget')
				}
				booknow_form.action = data;

                
            },
            error: function () {
                window.location.reload();
            }
        })
    }

  function callBookingWidgetBanner(formData) {
        

        $.ajax({
            url: "/api/sitecore/StayFarEastNavigation/CallBookingWidget",
            type: 'POST',
            cache: false,
            contentType: false,
            processData: false,
            async: false,
            data: formData,
            success: function (data) {

                var booknow_form ="";
				
                 booknow_form = document.getElementById('BookingWidgetForm')
				
				booknow_form.action = data;

                
            },
            error: function () {
                window.location.reload();
            }
        })
    }

    if ($(location).attr("href").includes('rendez')) {
        $('body').addClass('rendez-site');
    }

    if (!$('.header_ribbon').length) {
        $('.desktop-only .widget').addClass('no-ribbon-widget');
    }

    if (!$(location).attr("href").includes('Sentosa') && !$(location).attr("href").includes('rendez') && !$('.header_ribbon').length) {
        $('.signupnow_pop').addClass('no-ribbon-popup-stayfareast');
    }
    // else if (!$('.header_ribbon').length) {
    //     $('.signupnow_pop').addClass('no-ribbon-popup-other');
    // }

    $('.sx_signup_btn').click(function () {
        if ($('.header_ribbon__promoData_detail').length && !$('.header_ribbon__promoData_detail').is(":hidden") && !$('.header_ribbon__promoData_detail').is(":animated")) {
            $('.promoData_toggler')[0].click();
            $('.promoData_toggler').toggleClass('active_promo');
        }

        $('body').addClass('signin-open');
    });

    $('body').on('click', function(e) {
        if ($(e.target).closest("#myModal .close").length || ($(e.target).closest('.sx_signup_btn').length === 0 && $(e.target).closest("#myModal .modal-dialog").length === 0)) {
            $('body').removeClass('signin-open');
        }
    });

    setTimeout(function () {
        var navTopInitPosition = $('.navbar-default').css('margin-top');
        var bodyInitPosition = $('.home-carousel').css('margin-top');
        var ribHeight = $('.header_ribbon__promoData_detail').height();

        if($(window).width() < 1024) {
            $(window).scroll(function () {
              if ($('.header_ribbon__promoData_detail').length && !$('.header_ribbon__promoData_detail').is(":hidden") && !$('.header_ribbon__promoData_detail').is(":animated") && $('.promoData_toggler').length) {
                $('.promoData_toggler')[0].click();
                $('.promoData_toggler').toggleClass('active_promo');
              }
            });
        }

        // if ($(window).width() < 412 && ($(location).attr("href").includes('rendez') || $(location).attr("href").includes('Sentosa'))) {
        //     if (parseInt($('.navbar.navbar-default').css('top')) > 80) {
        //         $('.navbar.navbar-default').css('top', '80px');
        //     } 
        // }

        //FARE0002SG-159

        //Rendezvous misconfiguration fix
        $('.promoData_toggler').on('click',function(e) {
            if (!$('.desktop-only .hidden-sm.pin').is(":hidden")) {
                $('#top-book-now').click();
            }

            var adjustBurgerHeight = 0;
            var existingStyleTop = parseInt($('.navbar-default').css('top'));
            $(this).toggleClass('active_promo');
            $('body').toggleClass('ribbon-toggle-on');
            if ($('.header_ribbon__promoData_detail').is(":hidden")) {
                var navTop = parseInt($('.navbar-default').css('margin-top')) + ribHeight;

                $('.overlay-menu').css('top', navTop + 'px');

            } else {

                $('.overlay-menu').css('top', '0px');
     
            }

            $('.header_ribbon__promoData_detail').slideToggle(400, 'linear');
        });

//FARE0002SG-159
        $('.close_promo_data').on('click',function(e) {
            if (!$('.desktop-only .hidden-sm.pin').is(":hidden")) {
                $('#top-book-now').click();
            }
            var adjustBurgerHeight = 0;
            var existingStyleTop = parseInt($('.navbar-default').css('top'));
            $('.promoData_toggler').toggleClass('active_promo');
            $('body').toggleClass('ribbon-toggle-on');
            $('.header_ribbon__promoData_detail').slideUp(400, 'linear');

            $('.overlay-menu').css('top', '0px');


        });
    }, 3000);
});

// implement memory store spec'd to Storage prototype
(function (window) {
    'use strict';

    var items = {};

    function MemoryStorage() {}

    MemoryStorage.prototype.getItem = function (key) {
        return items[key];
    };

    MemoryStorage.prototype.setItem = function (key, value) {
        items[key] = value;
    };

    MemoryStorage.prototype.key = function (index) {
        return Object.keys(items)[index];
    };

    MemoryStorage.prototype.get = function () {
        return items;
    };

    Object.defineProperty(MemoryStorage.prototype, "length", {
        get: function length() {
            return Object.keys(items).length;
        }
    });

    window.memoryStorage = new MemoryStorage();
})(window);

// helper function to swap to memory storage

function getStorage(storage) {
    var x = '__storage_test__';
    try {
        storage.setItem(x, x)
        storage.removeItem(x);
        return storage;
    } catch (e) {
        return getStorage.prototype.FALLBACK_STORAGE;
    }
}

getStorage.prototype.FALLBACK_STORAGE = memoryStorage;

var Query = (function () {

    function isFunction(func) {
        var getType = {};
        return func && getType.toString.call(func) === '[object Function]';
    }

    function _query() {
        this.names = []
        this.storage = [];
    }

    _query.prototype.store = function (name, value) {
        var isFunc = isFunction(value);
        var index = this.names.indexOf(name);
        if (index > 0) {
            var pair = this.storage[index];
            pair.value = value;
            pair.isFunc = isFunc;
        } else {
            this.names.push(name);
            this.storage.push({
                name: name,
                value: value,
                isFunc: isFunc
            });
        }
    };

    _query.prototype.dequeue = function () {
        this.names.shift();
        return this.storage.shift();
    };

    _query.prototype.pop = function () {
        this.names.pop();
        return this.storage.pop();
    };

    _query.prototype.storeHas = function (name) {
        return this.names.indexOf(name) > 0;
    };

    _query.prototype.removePair = function (name) {
        var index = this.names.indexOf(name);
        this.names.splice(index, 1);
        return this.storage.splice(index, 1);
    };

    _query.prototype.get = function (name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };

    _query.prototype.update = function (name, value, url) {
        if (!url) url = window.location.href;
        var re = new RegExp("([?|&])" + name + "=.*?(&|#|$)", "i");
        if (url.match(re)) {
            return url.replace(re, '$1' + name + "=" + value + '$2');
        } else {
            var hash = '';
            if (url.indexOf('#') !== -1) {
                hash = url.replace(/.*#/, '#');
                url = url.replace(/#.*/, '');
            }
            var separator = url.indexOf('?') !== -1 ? "&" : "?";
            return url + separator + name + "=" + value + hash;
        }
    };

    _query.prototype.removeParam = function (name, url) {
        if (!url) url = window.location.href;
        var urlparts = url.split('?');
        if (urlparts.length >= 2) {
            var prefix = encodeURIComponent(name) + '=';
            var pars = urlparts[1].split(/[&;]/g);

            //reverse iteration as may be destructive
            for (var i = pars.length; i-- > 0;) {
                //idiom for string.startsWith
                if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                    pars.splice(i, 1);
                }
            }

            url = urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
            return url;
        } else {
            return url;
        }
    };

    return new _query();
})();

$(window).on('load',function(){
    if($('#alert-bar').length){
        $('body').addClass('alertbar_exist');
    }

    if (!$('.header_ribbon').length) {
        $('body').addClass('no-ribbon');
    }

    $('#alert-bar tr td a').on('click',function(){
        $('body').removeClass('alertbar_exist');
    });
});




$(document).ready(function() {
    $("#residenceMonthlyQuote, #residenceQuote").on('scroll', function() {
        $('.hasDatepicker').datepicker('hide');
        $('.hasDatepicker').blur();
    });
    $("#residenceMonthlyQuote .arrival-date, #residenceQuote .arrival-date").click(function(e){ 
        let scrollTop = $(window).scrollTop(),
        elementOffset = $('.arrival-date').offset().top,
        distance = (elementOffset - scrollTop);
        $('.ui-datepicker').css('top', distance + 40);
        $(this).attr('readonly','true');
    });
    $("#residenceQuote .departure-date, #residenceMonthlyQuote .departure-date").click(function(e){ 
        let scrollTop = $(window).scrollTop(),
        elementOffset = $('.departure-date').offset().top,
        distance = (elementOffset - scrollTop);
        $('.ui-datepicker').css('top', distance + 40);
        $(this).attr('readonly','true');
    });

    $(".new-highlight-component").each(function () {
        var container = $(this).closest('.container'),
            sec = container.parent();
        sec.addClass('sec-custom-highlight');
    });  

});



//FARE0002SG-159
$(function () {
    var appInpageNav = $('.app-inpage-nav');

    function checkHeaderSticky(extend) {
        var heightHeader = $('nav.navbar.navbar-default').outerHeight(),
            setTopSubNav = 0,
            heightRibbon = 0,
            heightAlertBar = 0,
            heightSubNav = 0;

        if ($('#alert-bar').length>0) {
            heightAlertBar = $('#alert-bar').outerHeight();
        }
        if ($('.header_ribbon').length>0) {
            heightRibbon = $('.header_ribbon').outerHeight();
            
        }
        setTopSubNav = heightRibbon+heightAlertBar+extend+heightHeader;
        setTopHeader = heightRibbon+heightAlertBar+extend;

        if(appInpageNav.length>0){
            appInpageNav.css('top',setTopSubNav+'px'); 
            heightSubNav = appInpageNav.outerHeight();
        }
        var bodyPaddingTop = heightHeader+heightRibbon+heightAlertBar+heightSubNav;

        $('body').css('padding-top',bodyPaddingTop+'px');       
        $('.header_ribbon').css('top',heightAlertBar+'px'); 
        $('nav.navbar.navbar-default').css('top',setTopHeader+'px');     

    }


    checkHeaderSticky(0);
    $(window).resize(function(){
        checkHeaderSticky(0);
    });

    $('#alert-bar td a').on('click',function(){
        $('#alert-bar').remove();
        if($('.promoData_toggler').hasClass('active_promo')){
            $('.promoData_toggler').removeClass('active_promo');
            $('.header_ribbon__promoData_detail').slideUp(400, 'linear');
        }
        checkHeaderSticky(0);
    });

    $('.header_ribbon .promoData_toggler').on('click',function(){
        var extend =$('.header_ribbon__promoData_detail').outerHeight();
        if($(this).hasClass('active_promo')){
            extend = 0;
        }
        checkHeaderSticky(extend);
    });
    $('.header_ribbon__promoData_detail .close_promo_data').on('click',function(){
        checkHeaderSticky(0);
    });

    
    if(appInpageNav.length>0){

        $('.app-inpage-nav a.tag-inner-nav').each(function(i){
            var id  = $(this).attr('href');
            if($(id).length>0){
                $(id).addClass('section-onepage');
            }
        });
        $('.app-inpage-nav li:first-child').addClass('active');
        $('.app-inpage-nav .text-active').html($('.app-inpage-nav li:first-child a').html());    
        $('.app-inpage-nav .text-active').click(function (event) {
            $(this).parent().toggleClass('active');
        });

      // ONEPAFE
      $(".app-inpage-nav a.tag-inner-nav").click(function (event) {
        appInpageNav.removeClass('active');
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        top -=$('.app-inpage-nav').outerHeight();
        if($('.navbar-default').length>0){
          top -=$('.navbar-default').outerHeight();
        }
        if($('.header_ribbon').length>0){
          top -=$('.header_ribbon').outerHeight();
        }
        if($('#alert-bar').length>0){
          top -=$('#alert-bar').outerHeight();
        }

        $('html, body').animate({
          scrollTop: top
          }, 1000)
      });
      $(window).on('scroll',function(){
        var WindowTop = $(window).scrollTop(),
            pointactive  =  $(window).outerHeight()/4;

        $('.section-onepage').each(function(i){
          if(WindowTop > $(this).offset().top - pointactive && WindowTop < $(this).offset().top + $(this).outerHeight(true) ){
              if($(this).hasClass('active')){
              }else{
                $('.section-onepage').removeClass('active');
                $(this).addClass('active');
                var i = $(this).attr('id');
                $('.app-inpage-nav li').removeClass('active');                
                $('.app-inpage-nav a[href="#'+i+'"]').parent().addClass('active');
                $('.app-inpage-nav .text-active').html($('.app-inpage-nav a[href="#'+i+'"]').html());        
              }
            }
        });
      });
  }


});


//NEW OWL 
/*!  * imagesLoaded PACKAGED v4.1.3 */
!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return-1==n.indexOf(t)&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return-1!=n&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=0,o=i[n];t=t||[];for(var r=this._onceEvents&&this._onceEvents[e];o;){var s=r&&r[o];s&&(this.off(e,o),delete r[o]),o.apply(this,t),n+=s?0:1,o=i[n]}return this}},t.allOff=t.removeAllListeners=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){var t=[];if(Array.isArray(e))t=e;else if("number"==typeof e.length)for(var i=0;i<e.length;i++)t.push(e[i]);else t.push(e);return t}function o(e,t,r){return this instanceof o?("string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=n(e),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(e,t,r)}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&d[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});

(function ($) {
    $(document).ready(function () {
        function itemOwl(owl,responsive,paramowl) {
            var autospeed = 5000,
                margin = 0,
                start = 0,
                marginRes = 20,
                arrows = 'icon-arrow-1',
                dataout,datain,dotsContainer,navContainer;

            var owlArray = paramowl.split('||');
            $.each(owlArray, function (index, value) {
              var value = value.split('=');
              if(value[0] == 'autospeed')
                autospeed = parseInt(value[1]);
              else if(value[0] == 'out')
                dataout = value[1];
              else if(value[0] == 'in')
                datain = value[1];
              else if(value[0] == 'nav')
                navContainer = value[1];
              else if(value[0] == 'dot')
                dotsContainer = value[1];
              else if(value[0] == 'start')
                start = parseInt(value[1]);      
              else if(value[0] == 'margin') {
                margin = parseInt(value[1]);
                if(margin==0){
                    marginRes = 0;
                }
              }
              else if(value[0] == 'arrows')
                arrows = value[1];

            });

            owl.owlCarousel({
                navText: ['',''],
                nav:(owl.hasClass('s-nav') ? true : false),
                dots:(owl.hasClass('s-dots') ? true : false),
                loop: owl.hasClass('s-loop') ? true : false,
                autoplay: owl.hasClass('s-auto') ? true : false,
                autoplayHoverPause:true,
                center: owl.hasClass('s-center') ? true : false,
                autoWidth: (owl.hasClass('s-width') ? true : false),
                autoHeight: (owl.hasClass('s-height') ? true : false),
                lazyLoad:true,
                video:(owl.hasClass('s-video') ? true : false),
                mouseDrag:(owl.hasClass('s-drag') ? false :true),                
                autoplayTimeout: autospeed,   
                startPosition : start,             
                animateOut: (dataout ? dataout : ''),
                animateIn: (datain ? datain : ''),
                navContainer: (navContainer ? navContainer : false),
                dotsContainer: (dotsContainer ? dotsContainer : false),
                margin: margin,

                responsive:{
                    0:{
                        items:parseInt(responsive[3]),
                        margin:marginRes,
                    },
                    576:{
                        items:parseInt(responsive[2]),
                        margin:marginRes,
                    },
                    768:{
                        items:parseInt(responsive[1]),
                        margin:marginRes,
                    },
                    992:{
                        items:parseInt(responsive[0])
                    }
                }
            })            
        }

        function setActiveTabTranslated(owl,content) {
            owl.on('translated.owl.carousel',function(e){
                var activiFrist = owl.find(".active:first"),
                    index = activiFrist.children().data('index'),
                    current = owl.find(".current");
                if(!current.hasClass('active')){
                    activiFrist.addClass('current').siblings().removeClass('current');
                    content.children(':eq('+index+')').addClass('active').siblings().removeClass('active'); 
                }
            })   
        } 

        // Responsive OWL    
        function ResOwlSlider() {
            $(".res-owl-carousel").each(function () {
                var owl = $(this),
                    responsive =  owl.attr('data-res'),
                    paramowl = owl.attr('paramowl'); 
                    if(!paramowl) paramowl='';

                if(!responsive) { responsive = '1,1,1,1'; }
                responsive = responsive.split(',');

                if(owl.hasClass('check-loop')){
                    var child = owl.children(),
                        count = child.length,
                        current = 1;
                    if($(window).width() >= 992){
                        current = responsive[0];
                    }else if($(window).width() >= 768 && $(window).width() < 992){
                        current = responsive[1];
                    }else if($(window).width() >= 576  && $(window).width() < 768){
                        current = responsive[2];
                    }else {
                        current = responsive[3];
                    }
                    if(count>1 && (count>=current)){
                        $(this).addClass('s-loop');
                    }
                }

                owl.imagesLoaded(function(){    
                    itemOwl(owl,responsive,paramowl);
                });

                owl.on('initialized.owl.carousel',function(e){
                  $('.owl-item.active .group-ef').addClass('loaded');
                    var w1 = owl.children('.owl-stage-outer').outerWidth(),
                        w2= owl.find('.owl-stage').outerWidth();

                    if(w1>w2){
                        owl.addClass('noslide');
                    }
                }) 
            });    
        }        
        ResOwlSlider();    

        //Blog detail------------------------------------
        if($(window).width()<768){
            $('body').append($('.blog-sidebar-menu'));
        }
        $(window).bind("load", function() {
            //Blog detail------------------------------------
            var indexContentSummary = 1;
            $('.wrap-blog-detail .is-menu-sidebar').each(function() {
                var block = $(this),
                    text = $(this).data('menu'),
                    index = $(this).index(),
                    id = text.replace(/ /g, '')+'-'+indexContentSummary,
                    li = $('<li>',{'data-href':id, text : text }).on('click',function(){
                        if(!$('body').hasClass('scrolling')){
                            $('body').addClass('scrolling');
                            $('body').removeClass('show-menu-summary');
                            $('html, body').animate({
                                scrollTop: $('[data-id="'+id+'"]').offset().top - 70
                            }, 1000, function() {
                                $('body').removeClass('scrolling');
                            })
                        }
                    });   
                $(this).attr('data-id',id);
                $('.blog-sidebar-menu .widget-menu-summary ul.menu-summary').append(li);
                var WindowTop = $(window).scrollTop();
                scrollActiveMenu(WindowTop,90,block);
                $(window).on('scroll',function(){
                    var WindowTop = $(window).scrollTop(),
                        pointactive  = 90;
                        //pointactive  = $(window).outerHeight()/2;
                        scrollActiveMenu(WindowTop,pointactive,block);
                });    
                indexContentSummary ++;
            });    

            $(".single_video").on('click',function(){
              var src=$(this).data('src'),
                  v=$(this).data('video'),
                  iframe = $('<iframe   frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media;" src="'+src+''+v+'"></iframe>');
              $(this).html(iframe);
            }); 
            $(".blog-sidebar-menu .sidebar__inner .btn-summary").on('click',function(){
              $('body').toggleClass('show-menu-summary');
      
            }); 
            $(".blog-sidebar-menu .btn-summary-overlay").on('click',function(){
              $('body').removeClass('show-menu-summary');
            });               
            function scrollActiveMenu(WindowTop,pointactive,block) {   
                if(WindowTop > block.offset().top - pointactive && WindowTop < block.offset().top + block.outerHeight(true) ){
                  if(!block.hasClass('active')){
                    $('.is-menu-sidebar').removeClass('active');
                    block.addClass('active');
                    var i = block.attr('id');             
                    $('.menu-summary li[data-href="'+i+'"]').addClass('active').siblings().removeClass('active');
                  }
                }
            }            
            function stickySidebar(windowTop,endPoint,e,stickyTop,stickOffset) {   
                if (endPoint < windowTop) {
                    e.css({ position: 'absolute', bottom: 0, top:'initial' });
                } else if (stickyTop < windowTop) {
                    e.css({ position: 'fixed', top: stickOffset, bottom:'initial' });
                } else {
                    e.css({position: 'absolute', top: 'initial', bottom:'initial'});
                }  
            }

            $(".sidebar__inner____").each(function () {
              var e = $(this),
                  w = e.outerWidth(),
                  res = e.data('res'),
                  offset = e.data('offset'),
                  header = e.data('header'),
                  stickyh = e.outerHeight(),          
                  stickyContentHeight = $('.'+e.data('sync')).innerHeight();     

                  if(!offset || offset==''){ offset = 20; }
                  if(!header || header==''){ header = '#header'; }
              var offsetTop = $(header).outerHeight() + offset,
                  startPoint = e.offset().top - offsetTop,
                  endPoint = (stickyContentHeight + startPoint) - (stickyh);

              if(!res || res==''){ res = 768; }  
              e.css({position: 'absolute', width: w});  
              if($(window).width() >= res && stickyContentHeight > (stickyh + 100) ){
                var windowTop = $(window).scrollTop();   
                stickySidebar(windowTop,endPoint,e,startPoint,offsetTop);
                $(window).scroll(function(){
                  var windowTop = $(window).scrollTop(),
                      stickyContentHeight = $('.'+e.data('sync')).innerHeight(),
                      endPoint = (stickyContentHeight + startPoint) - (stickyh);
                  stickySidebar(windowTop,endPoint,e,startPoint,offsetTop);
                }); 
              }
            });

            //End blog detail------------------------------------

        });   

        $('.wrap-syn-tab-owl').each(function () {
            var owl = $(this).children('.owl-carousel'),
                content = $(this).children('.syn-tab-content');

            owl.on('initialized.owl.carousel',function(e){
                var acti = owl.find(".active:first");
                acti.addClass('current').siblings().removeClass('current');
            }) 
            owl.on("click", ".owl-item", function(e) {
                var itemTab = $(this).children(),
                    index = parseInt(itemTab.data('index')),
                    number = $(this).index();
                $(this).addClass('current').siblings().removeClass('current');     
                content.children(':eq('+index+')').addClass('active').siblings().removeClass('active');  
            });
            setActiveTabTranslated(owl,content);
        }); 

        $('.terms-conditions .title-collapse').each(function () {
            // var i = $('<span class="icon"></span>');
            // $(this).append(i);
            $(this).click(function () {
                var p = $(this).parent(),
                    c = p.find('.content-collapse');
                if(p.hasClass('active')){
                    c.slideUp();
                    p.removeClass('active');
                }else{
                    c.slideDown();
                    p.addClass('active');                
                }
            });

        });

        $( ".room-detail.gallery" ).each(function() {
            $(this).on('shown.bs.modal', function(){
                var btn = $(this).find('.close-room-detail');
                if(btn.length>0){
                    var offset = btn.offset();
                    //btn.css({"position": "fixed", "top": offset.top,"left":offset.left});

                    var btnClone= btn.clone();
                    btnClone.addClass('btnClone');
                    btnClone.css({"left":offset.left});
                    btnClone.appendTo( "body" );
                    btn.css({"opacity": 0});

                    btnClone.on('click',function () {
                        $(this).remove();
                        btn.trigger('click');
                    });

                    $(window).resize(function(){
                        var offset = btn.offset();
                        if($('.close-room-detail.btnClone').length>0){
                            $('.close-room-detail.btnClone').css({"left":offset.left});
                        }
                    });
                }
            });
            $(this).on('hide.bs.modal', function(){
                if($('.close-room-detail.btnClone').length>0){
                    $('.close-room-detail.btnClone').remove();
                }
            });            
        });


        //video-masthead

        function soundVideo(e,video,carousel='') {
            if(e.hasClass('active')){
                //if(carousel) carousel.carousel('cycle');
                video.get(0).muted = true;
                e.removeClass('active');
            }else{
                //if(carousel) carousel.carousel('pause');
                video.get(0).muted = false;
                e.addClass('active');
            }     
        }
        function playVideo(e,video) {
            if(e.hasClass('active')){
                video.get(0).pause();
                e.removeClass('active');
            }else{
                video.get(0).play();
                e.addClass('active');
            }   
        }







        function checkVideoCarousel(current,carousel,control) {
            if( current.hasClass('item-video')){
                control.removeClass('hidden');
                var video  = current.find('video');
                video.get(0).play();
                video[0].ontimeupdate = function() {

                    if(video[0].currentTime>(video[0].duration-0.5)){
                        carousel.carousel('next');
                    }
                };
                
            }else{
                var video='';
                control.addClass('hidden');
                setTimeout(function() {
                    if(current.hasClass('active')){ 
                        carousel.carousel('next');   
                    }
                }, 5000); 
            }
            return video;
        }


        $('.video-masthead').each(function() {
            var masthead = $(this),
                control = masthead.find($('.video-control')),
                video  = '',
                play = masthead.find('.video-play'), 
                sound = masthead.find('.video-sound'),
                carousel = masthead,
                homeBanner =  masthead.closest('.home-banner');
            if(homeBanner.length>0){
                homeBanner.append(control);
            }
            

            if(masthead.hasClass('main-banner')){
                video  = masthead.find('video');
            }  
            if(masthead.hasClass('carousel')){
                var current = carousel.find('.item.active');
                video = checkVideoCarousel(current,carousel,control);
            }  
            carousel.on('slid.bs.carousel', function () {
                sound.removeClass('active');
                play.addClass('active');
                carousel.find('video').each(function () {
                    $(this).get(0).muted = true;
                    $(this).get(0).pause();
                    $(this).get(0).currentTime = 0;
                });
                current = carousel.find('.item.active');
                video = checkVideoCarousel(current,carousel,control);

            })

            play.on('click',function (event) {
                playVideo($(this),video);
            });
            sound.on('click',function (event) {
                soundVideo($(this),video,carousel);
            });                
        }); //End video 


        //DEAL DETAIL

        $(".section-deal-detail .widget-book-deal .btn-book-1").on('click',function (event) {
            event.preventDefault();
            var id  = $(this).attr('href');
            if($(id).length>0){
                $('html, body').animate({
                  scrollTop: $(id).offset().top - 120
                }, 1000)
            }
        });
                
        // iframe video
        var getVideoUrl = function(id,v){
          return id + '?' + v + '&disablekb=1&hl=en_GB&loop=1&modestbranding=1&showinfo=0&autohide=0&color=white&iv_load_policy=3&theme=light&version=3&rel=1&listType=playlist&enablejsapi=1';
        }
        function eventYT(owl) {
            owl.find(".owl-item.active .btnvideo").on('click',function(){
              var parent = $(this).closest('.single_yt_owl'),
                    id=parent.data('id'),
                  v=parent.data('video'),
                  iframe = $('<iframe   frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media;" src="'+getVideoUrl(id,v)+'"></iframe>');
                if(parent.find('iframe').length>0){
                    parent.addClass('play').removeClass('pause');
                    parent.find('iframe').each(function () {
                        this.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
                    }) 

                }else{
                    parent.addClass('play').append(iframe);
                }

                if(owl.hasClass('s-auto')){
                    owl.trigger('stop.owl.autoplay');
                }
              
            }); 
        }

        $(".section-deal-detail .res-owl-carousel").each(function () {
            var owl = $(this);
            owl.on('initialized.owl.carousel',function(e){
              eventYT(owl);
            })    
            owl.on('translated.owl.carousel',function(e){
                //Pause Video
                if(owl.find('.single_yt_owl.play').length>0){
                    var yt=owl.find('.single_yt_owl.play'),
                        iframe=yt.find('iframe');
                    //yt.addClass('pause').removeClass('play');
                    iframe.each(function () {
                        this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
                    })                     
                }
              eventYT(owl);
            })  

        });     

        $(window).bind("load", function() {
            $(".section-deal-detail .res-owl-carousel").each(function () {
                var owl = $(this),
                    h = owl.find('.thumb-16-9:first').outerHeight();
                owl.find('.owl-nav').addClass('loaded').css('top',(h/2)+'px');
                owl.find('.owl-dots').addClass('loaded').css('--top-carousel',(h-15)+'px');
            }); 
        });   
        //End deal detail

        //navigation modal room detail
        $(".navigation-room-modal .nav-arrow .text").on('click',function (e) {
            e.preventDefault();
            var id = $(this).data('id'),
                parent = $(this).closest('.new-room-detail-popup');
            parent.modal('hide');
            $('.new-room-detail-popup[data-number="'+id+'"]').modal('show');
            setTimeout(function() {
                $('body').addClass('modal-open'); 
            }, 500);             
        });

        /* NEW ROOM
        ---------------------------------------------------------------*/
        $(window).bind("load", function() {
            if($('.new-form-booking select.select-new-property').length>0){
                $('.new-form-booking select.select-new-property').each(function () {
                    if($(this).val()){
                        changeDataFormBooking($(this).closest('.new-form-booking'));
                    }
                    $(this).on('change', function (e) {
                        changeDataFormBooking($(this).closest('.new-form-booking'));   
                    });
                }); 
            }
        }); 

        $('.add-adult-child-dropdown .add-more-room').click(function() {
            addMoreRoomBooking($(this));
        });

        $('body').delegate('.add-adult-child-dropdown .remove-room','click',function(e) {
            var form = $(this).closest('.new-form-booking');
            $(this).closest('.item-rooms').remove();
            form.find('.add-more-room').removeClass('hide');
            updateLabelAdultChild(form);
            setCookieGuest(form); 
        });

        $('body').delegate('.add-adult-child-dropdown .ul-rooms .add-less-guest','click',function(e) {
            if(!$(this).hasClass('active')){
                var form = $(this).closest('.new-form-booking'),
                    parent = $(this).closest('.guest-blocks'),
                    label = parent.find('.guest-number'),
                    number = parseInt(label.html());

                if($(this).hasClass('minus-guest')){
                    number --;
                }else{
                    number ++;
                }
                label.html(number);
                setCookieGuest(form);
                updateLabelAdultChild(form);
            }
        });
        $('.add-adult-child-dropdown .title-adult-child').on('click',function(e) {
            if(!$(this).parent().hasClass('opacity')) {
                $(this).parent().toggleClass('active');
            }
        });
        $(document).mouseup(e => {
            if (!$(".add-adult-child-dropdown").is(e.target) // if the target of the click isn't the container...
            && $(".add-adult-child-dropdown").has(e.target).length === 0) // ... nor a descendant of the container
            {
                $(".add-adult-child-dropdown").removeClass('active');
            }
        });    

        //End new room   
        
        
    });
})(jQuery);              




function changeDataFormBooking(form) {
    var option = form.find('.select-new-property  option:selected'),
        maxGuests = parseInt(option.data('maxnoofpax')),
        minAdults = parseInt(option.data('minnoofadults')),
        minChildren = parseInt(option.data('minnoofchildren')),
        textMaxnoofguests = option.data('maxnoofguests'),
        defaultGuests = getDefaultGuests(form),
        guestCookieAdult,guestCookieChild;

    if ($.cookie("guest-cookie-adult") && $.cookie("guest-cookie-children")) {
        guestCookieAdult = $.cookie("guest-cookie-adult").split(",");
        guestCookieChild = $.cookie("guest-cookie-children").split(",");
        checkCookieAddMoreRoom(form,guestCookieAdult);
    }
 

    if (maxGuests>0 && !isNaN(maxGuests) && maxGuests>=(minAdults+minChildren)) {
        form.find(".add-adult-child-dropdown").removeClass("opacity");
        form.find('.add-adult-child-dropdown .note-guest').html(textMaxnoofguests);
        form.find('.item-rooms').each(function () {
            var index = $(this).index(),
                adults = parseInt($(this).find('.adults-number').html()),
                children = parseInt($(this).find('.children-number').html()),
                totalGuests = adults + children;

                if(totalGuests<=maxGuests){ 
                    if(guestCookieAdult&&guestCookieChild){
                        var totalCookie = parseInt(guestCookieAdult[index]) + parseInt(guestCookieChild[index]);
                        //console.log('room : '+index+' maxGuests : '+maxGuests+' totalCookie :'+totalCookie);
                        if(totalCookie<=maxGuests) {
                            $(this).find('.adults-number').html(guestCookieAdult[index]);
                            $(this).find('.children-number').html(guestCookieChild[index]);      
                            countValueSubmit(form);                  
                        }
                    }
                }else {
                    $(this).find('.adults-number').html(defaultGuests[0]);
                    $(this).find('.children-number').html(defaultGuests[1]);
                    countValueSubmit(form);
                } 
            checkActivePlusMinus($(this));
        }); 
    }else{
        
        form.find(".add-adult-child-dropdown").addClass("opacity").removeClass('active');
        form.find(".add-adult-child-dropdown .display-adult-child .room").html('1');
        form.find(".add-adult-child-dropdown .display-adult-child .adults").html(defaultGuests[0]);
        form.find(".add-adult-child-dropdown .display-adult-child .children").html(defaultGuests[1]);
        form.find(".add-adult-child-dropdown .value-submit-adult-child .adults").html(defaultGuests[0]);
        form.find(".add-adult-child-dropdown .value-submit-adult-child .childrens").html(defaultGuests[1]);        
    }        
}


function addMoreRoomBooking(add,setCookie=true) {
    var form = add.closest('.new-form-booking'),
        option = form.find('.select-new-property  option:selected'),
        defaultGuests = getDefaultGuests(form),
        maxroom = parseInt(form.data('maxroom')),
        room = form.find('.list-rooms .item-rooms.first').clone(),
        currentRoom = form.find('.add-adult-child-dropdown .item-rooms').length;

    room.addClass('clone');

    if(currentRoom<maxroom){
        var text = room.find('.title-room').data('text'),
            remove = $('<div class="remove-room">'+text+'</div>');
        room.removeClass('first');
        room.find('.adults-number').html(defaultGuests[0]);
        room.find('.children-number').html(defaultGuests[1]);

        room.find('.title-room').append(remove);
        form.find('.list-rooms').append(room);

        updateLabelAdultChild(form);
        if(setCookie==true){
            setCookieGuest(form);
        }
        if(currentRoom==(maxroom-1)){
            add.addClass('hide');
        }
    }
}

function checkCookieAddMoreRoom(form,guestCookieAdult) {
    form.find('.item-rooms.clone').remove();
    form.each(function () {
        var add = $(this).find('.add-adult-child-dropdown .add-more-room');
        if(guestCookieAdult.length>1){
            for(var i=1;i<guestCookieAdult.length;i++){
                addMoreRoomBooking(add,setCookie=false);
            }
        }    
    });      

}

function getDefaultGuests(form) {
    var array = [],
        option = form.find('.select-new-property  option:selected'),
        maxGuests = parseInt(option.data('maxnoofpax')),
        defaultadults = parseInt(form.find('.item-rooms.first').data('defaultadults')),
        defaultchildren = parseInt(form.find('.item-rooms.first').data('defaultchildren'));      
        if((defaultadults+defaultchildren)>maxGuests) {
            //if(maxGuests<2) maxGuests = 2;
            array.push(2);
            array.push(0);
        }else{
            array.push(defaultadults);
            array.push(defaultchildren);
        }
    return array;
}





function checkActivePlusMinus(room) {
    var form = room.closest('.new-form-booking'),
        option = form.find('.select-new-property  option:selected'),
        maxGuests = parseInt(option.data('maxnoofpax')),
        minAdults = parseInt(option.data('minnoofadults')),
        minChildren = parseInt(option.data('minnoofchildren')),
        adults = parseInt(room.find('.adults-number').html()),
        children = parseInt(room.find('.children-number').html()),
        totalGuests = adults + children;


    if(adults<=minAdults){
        room.find('.adults-block .minus-guest').addClass('active');
    }else{
        room.find('.adults-block .minus-guest').removeClass('active');
    }
    if(children<=minChildren){
        room.find('.children-block .minus-guest').addClass('active');
    }else{
        room.find('.children-block .minus-guest').removeClass('active');
    }
    if(totalGuests >= maxGuests) {
        room.find('.adults-block .plus-guest').addClass('active');
        room.find('.children-block .plus-guest').addClass('active');
    }else {
        room.find('.adults-block .plus-guest').removeClass('active');
        room.find('.children-block .plus-guest').removeClass('active');
    }
}


function countValueSubmit(form) {
    var parent = form.find('.add-adult-child-dropdown'),
        room = parent.find('.item-rooms'),
        totalAdults=0,totalChildren=0,rooms=0,
        arrayAdults ='',arrayChildren ='';
    room.each(function () {
        var adults = parseInt($(this).find('.adults-number').html()),
            children = parseInt($(this).find('.children-number').html());
        rooms ++;
        totalAdults +=  adults;
        totalChildren += children;
        //checkActivePlusMinus($(this));

        if(rooms>1){
            arrayAdults = arrayAdults+','+adults;
            arrayChildren = arrayChildren+','+children;
        }else {
            arrayAdults = adults;
            arrayChildren = children;
        }
    });  
    parent.find('.display-adult-child .room').html(rooms);
    parent.find('.display-adult-child .adults').html(totalAdults);
    parent.find('.display-adult-child .children').html(totalChildren); 
    parent.find('.value-submit-adult-child .adults').html(arrayAdults);
    parent.find('.value-submit-adult-child .childrens').html(arrayChildren); 

  
}

function setCookieGuest(form) {
    var parent = form.find('.add-adult-child-dropdown'),
        room = parent.find('.item-rooms'),
        totalAdults=0,totalChildren=0,rooms=0,
        arrayAdults ='',arrayChildren ='';
    room.each(function () {
        var adults = parseInt($(this).find('.adults-number').html()),
            children = parseInt($(this).find('.children-number').html());
        rooms ++;
        totalAdults +=  adults;
        totalChildren += children;
        if(rooms>1){
            arrayAdults = arrayAdults+','+adults;
            arrayChildren = arrayChildren+','+children;
        }else {
            arrayAdults = adults;
            arrayChildren = children;
        }
    });  


    $.cookie("guest-cookie-adult", arrayAdults, { path: '/' });
    $.cookie("guest-cookie-children", arrayChildren, { path: '/' });    

}

function updateLabelAdultChild(form) {
    form.find('.item-rooms').each(function () {
        checkActivePlusMinus($(this));
    }); 
    countValueSubmit(form);   
}
$(document).ready(function () {
  //  Bday calendar
  if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;
        padString = String(typeof padString !== 'undefined' ? padString : ' ');
        if (this.length >= targetLength) {
            return String(this);
        } else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0, targetLength) + String(this);
        }
    };
}
  $(".toggle-password").click(function () {
    $(this).toggleClass("eyeshow eyeslash");
    var input = $($(this).attr("toggle"));
    if ($("#showhide").text() == "Show") {
      $("#showhide").text("Hide");
    } else {
      $("#showhide").text("Show");
    }
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  $(".toggle-password2").click(function () {
    $(this).toggleClass("eyeshow eyeslash");
    var input = $($(this).attr("toggle"));
    if ($("#showhide2").text() == "Show") {
      $("#showhide2").text("Hide");
    } else {
      $("#showhide2").text("Show");
    }
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  $(".toggle-password3").click(function () {
    $(this).toggleClass("eyeshow eyeslash");
    var input = $($(this).attr("toggle"));
    if ($("#showhide3").text() == "Show") {
      $("#showhide3").text("Hide");
    } else {
      $("#showhide3").text("Show");
    }
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  // FEHSMP-1429
  $(".toggle-password4").click(function () {
    //$(this).toggleClass("eyeshow eyeslash");
    var input = $($(this).attr("toggle")),
        txHide = $(this).data('text-hide'),
        txShow = $(this).data('text-show');
    if ($(this).hasClass('eyeshow')) {
      $(this).text(txHide);
      input.attr("type", "text");
      $(this).removeClass('eyeshow').addClass('eyeslash');
    } else {
      $(this).text(txShow);
      input.attr("type", "password");
      $(this).addClass('eyeshow').removeClass('eyeslash');
    }
  });
  $("#signin_modal input").keypress(function (event) {
    if (event.which == 13) {
      event.preventDefault();
      //$("#signin_modal").submit();
      $("#signin_modal").find("button").trigger("click");
    }
  });
  $(".excol").click(function () {
    $(this).toggleClass("arrowdown arrowup");
    if ($("#excol").text() == "Expand All") {
      $("#excol").text("Collapse All");
      $(".acc_body").show();
      $(".acc_head").addClass("opened_panel");
    } else {
      $("#excol").text("Expand All");
      $(".acc_body").hide();
      $(".acc_head").removeClass("opened_panel");
    }
  });

  // banner arrow slide down
  // function scrollToAnchor(aid){
  //   var aTag = $("a[id='"+ aid +"']");
  //   $('html,body').animate({scrollTop: aTag.offset().top - 100},'slow');
  // }

  // $(".scrollto.arrow").click(function() {
  //   scrollToAnchor('signuppage');
  // });

  //   $(".scrollto.arrow").click(function(e) {
  //     e.preventDefault();
  //     var aid = $(this).attr("href");
  //     $('html,body').animate({scrollTop: $(aid).offset().top - },'fast');
  // });

  $(".FAQ .acc_head").on("click", function () {
    if ($(this).next(".acc_body").is(":visible")) {
      $(this).next(".acc_body").hide();
      $(this).removeClass("opened_panel");

      // Update toggle button
      let activePanels = $(".acc_head.opened_panel").length;
      if (activePanels == 0) {
        $(".excol").addClass("arrowdown");
        $(".excol").removeClass("arrowup");
        $("#excol").text("Expand All");
      }
    } else {
      $(".acc_body").hide();
      $(this).next(".acc_body").show();
      $(".acc_head").removeClass("opened_panel");
      $(this).addClass("opened_panel");

      // Update toggle button
      $(".excol").addClass("arrowup");
      $(".excol").removeClass("arrowdown");
      $("#excol").text("Collapse All");
    }
  });

  $(".Profile .acc_head").on("click", function () {
    $(this).toggleClass("opened_panel");
    $(this).next(".acc_body").slideToggle();
  });
  // $(".radiocustom input[type=radio]").click(function(){
  //     $("input[type=radio]:checked ~ .checkmark").css("background-color", "#fff");
  //     $("input[type=radio]:not(:checked) ~ .checkmark").css("background-color", "#D6D6D6");
  // });
  $(".error_text").hide();
  $("#subscribe, #unsubscribe").click(function () {
    if (this.id == "subscribe") {
      $(".error_text").fadeOut("fast");
    } else if (this.id == "unsubscribe") {
      $(".error_text").fadeIn("fast");
    }
  });

  // Prefix change
  function updatePrefix() {
    var default_prefix = $("#prefixbutton").text().trim();
    $(".Profile ul.dropdown-menu li").each(function () {
      if ($(this).html() == default_prefix) {
        $(this).addClass("selected");
      } else {
        $(this).removeClass("selected");
      }
    });
  }
  updatePrefix();

  function toggleSubmitCTA() {
    if ($(".synsix_signup").find('.synsix_error').is(':visible')) {
      $('.synsix_signup #submit').attr('disabled','true');
    } else {
      $('.synsix_signup #submit').removeAttr('disabled');
    }
  }

  $('.synsix_signup #submit').attr('disabled','true');
  $(".synsix_signup input").on('keyup focus focusout',function(){
    setTimeout(function() {
      toggleSubmitCTA();
    }, 700);
  });


  $(document).on("click touchend", ".chosen-container-single", function () {
    setTimeout(function () {
      toggleSubmitCTA();
    }, 1200)
  });

  // enable profile button
  $(".Profile form").on("input change", function (e) {
    var password = $("form.change_pass_form #password-create").val();
    var confirmPassword = $("form.change_pass_form #password-confirm").val();
    
    if ($(this).closest('form').hasClass('change_pass_form')) {
      setTimeout(function(e) {
        if (password != confirmPassword || $('#Profile form.change_pass_form').find('.error-border').length) {
          $('form.change_pass_form').find(".updatebtn").attr("disabled", true);
        } else {
          $('form.change_pass_form').find(".updatebtn").attr("disabled", false);
        }
      },400);
    } else {
      setTimeout(function(e) {
        if ($('#Profile form.update_profile_form').find('.error-border').length) {
          $('form.update_profile_form #btnPersonalInfo').attr('disabled','true');
        } else {
          $('form.update_profile_form #btnPersonalInfo').removeAttr('disabled');
        }
      },400);
      }
  });
  $('input#password-create, input#password-confirm').keyup(function (e){
    $('#chnagePasswordSuccess').hide();
  });
  $(".Profile form #password-create").keyup(function (e) {
    e.preventDefault();
    var password = $("#password-create").val();
    var confirmPassword = $("#password-confirm").val();
    if (password.length <= 0 && confirmPassword.length <= 0) {
      $(".Profile form").find(".updatebtn").attr("disabled", true);
    }
  });

  $(".prefixli").on("click", function () {
    event.preventDefault();
    $(this).parents().children(".updatebtn").attr("disabled", false);
    setTimeout(function () {
      updatePrefix();
    }, 200);
  });

  //PREFIX DROPDOWN select

  $("#Profile .dropdown-menu li").click(function () {
    $(this)
      .parents(".dropdown")
      .find(".btn")
      .html(
        $(this).text() + ' <span class="glyphicon glyphicon-menu-down"></span>'
      );
    $(this).parents(".dropdown").find(".btn").val($(this).data("value"));
  });

  //TOOLTIP onclick close
  if ($(window).width() < 1025) {
        $('.toolround').on('click', function(e){
          $(this).toggleClass("tooltip_show");
          e.stopPropagation();
        })
      }
  $(document).click(function() {
    $('.toolround.tooltip_show').removeClass('tooltip_show');
  });
  //  Passowrd match JS

  function checkPasswordMatch(e) {
    var password = $("#password-create").val();
    var confirmPassword = $("#password-confirm").val();

    if (password != confirmPassword || $("#password-confirm").val().trim().length == 0) {
      if ($("#password-confirm").val().trim().length == 0) {
        $("#confirmpassword").fadeIn("slow");
        $("#passwordcheck").hide("fast");
      } else {
        $("#passwordcheck").show("fast");
        $("#confirmpassword").fadeOut("slow");
      }

      $("input#password-confirm").addClass("error-border");
      e.preventDefault();
    } else {
      if ($("#password-confirm").val().trim().length == 0) {
        $("#confirmpassword").fadeOut("slow");
      } else {
        $("#passwordcheck").hide("fast");
      }

      $("input#password-confirm").removeClass("error-border");
      $("#confirmpassword").fadeOut("slow");
    }
  }
  $("#password-confirm").keyup(checkPasswordMatch);
  // $("#password-confirm").paste(checkPasswordMatch);
  // Password Validation start

  function validatePassword(password) {
    //var filter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; ,^#()-_+|`"'~<>;{}
    //var filter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d\s@$!%*,^#()-_+|`"'~<>;{}?&]{8,}$/;
    var filter = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*[^\w\d]).*$/;
    if (filter.test(password)) {
      return true;
    } else {
      return false;
    }
  }

  // Email Validation start
  function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
      return true;
    } else {
      return false;
    }
  }

  function creditCardType(sCardNumber) {
    var Visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    var MasterCard = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/;
    var Amex = /^3[47][0-9]{13}$/;
    var Discover = /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/;

    if (MasterCard.test(sCardNumber)) {
      return "MC";
    } else if (Amex.test(sCardNumber)) {
      return "AX";
    } else if (Discover.test(sCardNumber)) {
      return "DS";
    } else if (Visa.test(sCardNumber)) {
      return "VI";
    }
  }

  $("#btnCreditCard").click(function (e) {
    var sCardNumber = $.trim($("#formCreditCardNumber").val());
    var type = creditCardType(sCardNumber);
    $("#creditCardType").val(type);
    if (sCardNumber.length < 16 || sCardNumber.length > 19) {
      $("#creditCardDigitMsg").show("fast");
      $("#creditCardTypeMsg").hide("fast");
      $("input#creditCardDigitMsg").addClass("error-border");
      e.preventDefault();
    } else {
      if ($.trim(type).length == 0) {
        $("#creditCardTypeMsg").show("fast");
        $("#creditCardDigitMsg").hide("fast");
        $("input#creditCardTypeMsg").addClass("error-border");
        e.preventDefault();
      }
    }
  });

  function emailValid(e) {
    var sEmail = $("#createemail").val();
    if ($.trim(sEmail).length == 0) {
      $("#emailcheckenter").show("fast");
      $("#emailcheckvalid").hide("fast");
      $("input#createemail").addClass("error-border");
      //     $('html, body').animate({
      //         scrollTop: ($('#createemail').offset().top - 300)
      //    }, 500);
      e.preventDefault();
    } else if (validateEmail(sEmail)) {
      $("#emailcheckvalid").hide("fast");
      $("#emailcheckenter").hide("fast");
      $("input#createemail").removeClass("error-border");
    } else {
      $("#emailcheckvalid").show("fast");
      $("#emailcheckenter").hide("fast");
      $("input#createemail").addClass("error-border");

      e.preventDefault();
    }
  }

  function passwordValid(e) {
    var password = $("#password-create").val();
    if ($.trim(password).length == 0) {
      $("#passwordcheckenter").show("fast");
      $("#passwordcheckformat").hide("fast");
      $("input#password-create").addClass("error-border");
      e.preventDefault();
    } else if (validatePassword(password)) {
      $("#passwordcheckformat").hide("fast");
      $("#passwordcheckenter").hide("fast");
      $("input#password-create").removeClass("error-border");
    } else {
      $("#passwordcheckformat").show("fast");
      $("#passwordcheckenter").hide("fast");
      $("input#password-create").addClass("error-border");
      e.preventDefault();
    }
  }
  // Staff Property check
  function staff_prop(e) {
    var StaffProperty = $("#staffproperty").val();
    if ($.trim(StaffProperty).length == 0) {
      $("#staffPropertyeCheck").fadeIn("slow");
      e.preventDefault();
    } else {
      $("#staffPropertyeCheck").fadeOut("slow");
    }
  }
  function staff_id(e) {
    var Staff_Id = $("#staffid").val();
    if ($.trim(Staff_Id).length == 0) {
      $("#staffIdCheck").fadeIn("slow");
      e.preventDefault();
    } else {
      $("#staffIdCheck").fadeOut("slow");
    }
  }
  function firstNameValid(e) {
    var id = $("#FirstName").val() != undefined ? 'FirstName' : 'firstname';
    console.log('id=' + id);
    var FirstName = $(`#${id}`).val();
    if ($.trim(FirstName).length == 0) {
      $("#firstNameCheck").fadeIn("slow");
      $(`#${id}`).addClass('error-border');
      e.preventDefault();
    } else {
      $("#firstNameCheck").fadeOut("slow");
      $(`#${id}`).removeClass('error-border');
    }
  }

  function lastNameValid(e) {
    var id = $("#LastName").val() != undefined ? 'LastName' : 'lastname';
    var LastName = $(`#${id}`).val();
    if ($.trim(LastName).length == 0) {
      $("#lastNameCheck").fadeIn("slow");
      $(`#${id}`).addClass('error-border');
      e.preventDefault();
    } else {
      $("#lastNameCheck").fadeOut("slow");
      $(`#${id}`).removeClass('error-border');
    }
  }
/*
  function countryCheckKeyup() {
    var CountryCheck = $(".chosen-single span").text();
    if (
      CountryCheck == $(".chosen-single span.watermark").text() ||
      CountryCheck == "" ||
      CountryCheck == null
    ) {
      $("#countrycheck").fadeIn("slow"); //error text show
      $('#myInput[name="Country"]').next().find('a').addClass('error-border');
    } else {
      $("#countrycheck").fadeOut("slow"); //error text hide
      $('#myInput[name="Country"]').next().find('a').removeClass('error-border');
    }
    setTimeout(function () {
      $(".synsix_error").each(function () {
        if ($(this).css("display") == "none") {
          $(this).removeClass("activeError");
        } else {
          $(this).addClass("activeError");
        }
      });
    }, 200);
  }

  function countryCheckValid(e) {
    $(".synsix_error").removeClass("activeError");
    var CountryCheck = $(".chosen-single span").text();
    if (
      CountryCheck == $(".chosen-single span.watermark").text() ||
      CountryCheck == "" ||
      CountryCheck == null
    ) {
      $("#countrycheck").fadeIn("slow"); //error text show
      $('#myInput[name="Country"]').next().find('a').addClass('error-border');
      e.preventDefault();
    } else {
      $("#countrycheck").fadeOut("slow"); //error text hide
      $('#myInput[name="Country"]').next().find('a').removeClass('error-border');
    }
    setTimeout(function () {
      $(".synsix_error").each(function () {
        if ($(this).css("display") == "none") {
          $(this).removeClass("activeError");
        } else {
          $(this).addClass("activeError");
        }
      });
    if ( $(".activeError").length)
    {
      $("html, body").animate({
          scrollTop: $(".activeError").offset().top - 300,
        },
        500
      );
    }
    }, 200);
  }
*/

//FARE0002SG-95
function countryCheckKeyup() {
}

function autocompleteValid(e) {
    var parent = e.closest('.autocomplete'),
        synsix_error = parent.find('.synsix_error'),
        val = e.val();

    if (val) {
      synsix_error.fadeOut("slow"); //error text hide
      parent.find("a.chosen-single span").removeClass("watermark");
      parent.find('.chosen-single').removeClass('error-border');
    } else {
      synsix_error.fadeIn("slow"); //error text show
      parent.find('.chosen-single').addClass('error-border');      
    }
}

function countryCheckValid(e) {
  $("div.autocomplete select").each(function () {
      autocompleteValid($(this));
  });
    setTimeout(function () {
      $(".synsix_error").each(function () {
        if ($(this).css("display") == "none") {
          $(this).removeClass("activeError");
        } else {
          $(this).addClass("activeError");
        }
      });
    if ( $(".activeError").length)
    {
      $("html, body").animate({
          scrollTop: $(".activeError").offset().top - 300,
        },
        500
      );
    }
    }, 200);
}

$("div.autocomplete select").each(function () {
  $(this).on('change', function() {
    autocompleteValid($(this));
  });
});


function inputTextValid(e) {
    var parent = e.closest('.input-text-valid'),
        error = parent.find('.synsix_error'),
        val = e.val();
    if (error.length > 0) {
        if ($.trim(val).length == 0) {
            error.fadeIn("slow");
            e.addClass('error-border');
            //e.preventDefault();
        } else {
            error.fadeOut("slow");
            e.removeClass('error-border');
        }
    }
}

$(".input-text-valid input[type='text']").each(function () {
    $(this).bind('DOMAttrModified focusout keyup', function () { //keypress focus
        inputTextValid($(this));
    });
});


// $(document).on("click touchend", ".autocomplete", function () {
//   autocompleteValid($(this).children('select'));
// });


//End FARE0002SG-95

  // No alphabet check
  $('#SelectedDate').keypress(function (e) {    
      var charCode = (e.which) ? e.which : event.keyCode    
      if (String.fromCharCode(charCode).match(/[^0-9]/g))    
          return false;                        
  }); 

  // Birthdat Validation REGEX start
  function validateBday(BdayCheck) {
    var filterDate = /^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/;
    if (filterDate.test(BdayCheck)) {
      return true;
    } else {
      return false;
    }
  }
  function birthDayCheck(e) {
    // Birthday Validation start
    var BdayCheck = $("#SelectedDate").val();
    var BdayCheckdate = BdayCheck.toString(); //convert to string
    //gets seperate character without slash
    var first2 = BdayCheckdate.slice(0, 2); //date
    var mid2 = BdayCheckdate.slice(3, 5); //month
    var last4 = BdayCheckdate.slice(6, 10); //year
    //convert character to number
    var first2Digit = +first2;
    var mid2Digit = +mid2;
    var last4Digit = +last4;

    console.log(first2);
    console.log(mid2);
    console.log(last4);
    // change format to yyyy/mm/dd
    var inputDate = last4 + "/" + mid2 + "/" + first2;

    console.log(inputDate);

    var todaysDate = new Date();
    var dd = String(todaysDate.getDate()).padStart(2, "0");
    var mm = String(todaysDate.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = todaysDate.getFullYear();
    todaysDate = yyyy + "/" + mm + "/" + dd;

    //console.log(BdayCheckdate);
    console.log(todaysDate);
    if ($.trim(BdayCheckdate).length == 0) {
      $("#bdaycheck").fadeIn("slow");
      $("input#SelectedDate").addClass("error-border");
      $("#bdayyearvalue").fadeOut("slow");
      e.preventDefault();
    } else if (inputDate >= todaysDate) {
      $("#bdaycheck").fadeOut("slow");
      $("#bdayyearvalue").fadeIn("slow");
      $("input#SelectedDate").addClass("error-border");
      e.preventDefault();
    }
    // else if(BdayCheckdate.match(".*[a-z].*")) { 
    //   $("#bdaycheck").fadeOut("slow");
    //   $("#bdayyearvalue").fadeIn("slow");
    //   $("input#SelectedDate").addClass("error-border");
    //   e.preventDefault();
    // }
    else if (validateBday(BdayCheck)) {
      $("#bdaycheck").fadeOut("fast");
      $("#bdayyearvalue").fadeOut("fast");
      $("input#SelectedDate").removeClass("error-border");
    }
    else {
      $("#bdaycheck").fadeOut("slow");
      $("#bdayyearvalue").fadeIn("slow");
      $("input#SelectedDate").addClass("error-border");
    }
    // Birthday Validation end
  }
  $('#SelectedDate').keypress(function (e) {    
    var charCode = (e.which) ? e.which : event.keyCode    
    if (String.fromCharCode(charCode).match(/[^0-9]/g))    
        return false;                        
}); 
  $("#SelectedDate").keyup(function(e){
    if (e.keyCode != 8){  
        if ($(this).val().length == 2){
            $(this).val($(this).val() + "/");
        } else if ($(this).val().length == 5){
            $(this).val($(this).val() + "/");
        }
    } else {
        var temp = $(this).val();
       
        if ($(this).val().length == 5){               
            $(this).val(temp.substring(0,4));   
        } else if ($(this).val().length == 2){       
            $(this).val(temp.substring(0,1));   
        }
    }
});
  function PasswordConfirmValid(e) {
    var PasswordConfirm = $("#password-confirm").val();
    if ($.trim(PasswordConfirm).length == 0) {
      $("#confirmpassword").fadeIn("slow");
      $("input#password-confirm").addClass("error-border");
      $("#passwordcheck").hide();
      e.preventDefault();
    } else {
      $("#confirmpassword").fadeOut("slow");
      $("input#password-confirm").removeClass("error-border");
    }
  }
  $(document).on("keydown", ".synsix_signup", function (e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode == 9) {
      $("#createemail").keyup(function () {
        $("#emailcheckenter").hide();
        e.preventDefault();
      });
      $("#password-create").keyup(function () {
        $("#passwordcheckenter").hide();
        $("#passwordcheckformat").hide();
        $(this).removeClass("error-border");
        e.preventDefault();
      });
      $("#firstname").keyup(function () {
        $("#firstNameCheck").hide();
        e.preventDefault();
      });
      $("#lastname").keyup(function () {
        $("#lastNameCheck").hide();
        e.preventDefault();
      });
      $("#SelectedDate").keyup(function () {
        $("#bdaycheck").hide();
        e.preventDefault();
      });
      $(".chosen-container-single").keydown(function () {
        countryCheckKeyup();
      });
    }
  });
  $("#staffproperty").keyup(staff_prop);
  $("#staffid").keyup(staff_id);
  $("#createemail").keyup(emailValid);
  $("#password-create").keyup(passwordValid);
  $("#password-create").keyup(function(e) {
    if ($("#password-create").val().trim().length > 0) {
      checkPasswordMatch(e);
    }
  });
  $("#firstname").keyup(firstNameValid);
  $("#FirstName").keyup(firstNameValid);
  $("#LastName").keyup(lastNameValid);
  $("#lastname").keyup(lastNameValid);
  $("#SelectedDate").keyup(birthDayCheck);

  $("#staffproperty").focusout(staff_prop);
  $("#staffid").focusout(staff_id);
  $("#createemail").focusout(emailValid);
  $("#password-create").focusout(passwordValid);
  $("#password-create").focusout(function(e) {
    if ($("#password-create").val().trim().length > 0) {
      checkPasswordMatch(e);
    }
  });
  $("#firstname").focusout(firstNameValid);
  $("#FirstName").focusout(firstNameValid);
  $("#LastName").focusout(lastNameValid);
  $("#lastname").focusout(lastNameValid);
  $("#SelectedDate").focusout(birthDayCheck);
  $("#password-confirm").focusout(checkPasswordMatch);
  $(".synsix_error").hide();
  // 1288 JS
  var create_img_gif = '<span class="loading_spinner"> </span>';
  var create_LoadingValue = $('.synsix_signup .container #submit').attr("data-loadingbutton-text") + '&nbsp;' + create_img_gif;

  var buttonName = $('#submit').length? document.getElementById("submit").innerHTML: '';
  // var error_present = document.getElementsByClassName('synsix_error');

  $(document).on('click','#submit',function(e){
  // $("#submit").click(function (e) {
    document.getElementById("submit").innerHTML = create_LoadingValue;
    $('html').addClass('fixed_page');

    window.setTimeout(function(){
      if($('.synsix_error').is(":visible")){
        document.getElementById("submit").innerHTML = buttonName;
        $('html').removeClass('fixed_page');
      }
      else{
      } 
    }, 100, true);

    emailValid(e);
    // Password Validation start
    passwordValid(e);
    // confirm pass Validation start
    checkPasswordMatch(e)
    // Firstname Validation start
    firstNameValid(e);
    // LastName Validation start
    lastNameValid(e);
    // COUNTRY Validation start
    countryCheckValid(e);
    // BirthDay Validation start
    birthDayCheck(e);
    //Password Confirm Validation start
    PasswordConfirmValid(e);
  });

  var create_FO_LoadingValue = $('.synsix_signup .container #submit_FO').attr("data-loadingbutton-text") + '&nbsp;' + create_img_gif;
  var buttonNameFO = $('#submit_FO').length ? document.getElementById("submit_FO").innerHTML : '';

  //$("#submit_FO").click(function (e) {
  $(document).on('click', '#submit_FO', function (e) {
    document.getElementById("submit_FO").innerHTML = create_FO_LoadingValue;

    $('html').addClass('fixed_page');

    window.setTimeout(function () {
      if ($('.synsix_error').is(":visible")) {
        document.getElementById("submit_FO").innerHTML = buttonNameFO;
        $('html').removeClass('fixed_page');
      }
      else {
      }
    }, 100, true);

    // staff property Validation start
    staff_prop(e);
    // staff ID Validation start
    staff_id(e);
    // email Validation start
    emailValid(e);
    // Firstname Validation start
    firstNameValid(e);
    // LastName Validation start
    lastNameValid(e);
    // COUNTRY Validation start
    countryCheckValid(e);
    // BirthDay Validation start
    birthDayCheck(e);

    $(".input-text-valid input[type='text']").each(function () {
        inputTextValid($(this));
    });


  });

  $(document).on("click touchend", ".chosen-container-single", function () {
    setTimeout(function () {
      countryCheckKeyup();
    }, 1000)
  });
  // passowrd masked on outside click
  // $("body").click(function (evt) {
  //   if (
  //     !$(evt.target).is(
  //       "#password-create, #showhide, #password-confirm, #showhide2"
  //     )
  //   ) {
  //     console.log("clicked");

  //     $("#password-create, #password-confirm").attr("type", "password");
  //     $("#showhide, #showhide2").text("Show");
  //     $("#showhide, #showhide2").addClass("eyeshow");
  //     $("#showhide, #showhide2").removeClass("eyeslash");
  //   }
  // });
  // Modal Email Validation start
  function validateEmailmodal(modalEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(modalEmail)) {
      return true;
    } else {
      return false;
    }
  }

  function modalEmailValid(e) {
    var modalEmail = $("#SignInEmail").val();
    if ($.trim(modalEmail).length == 0) {
      $("#SigninEmailcheck").show("fast");
      $("#SigninEmailValid").hide("fast");
      $("input#SignInEmail").addClass("error-border");
      e.preventDefault();
    } else if (validateEmailmodal(modalEmail)) {
      $("#SigninEmailValid").hide("fast");
      $("#SigninEmailcheck").hide("fast");
      $("input#SignInEmail").removeClass("error-border");
    } else {
      $("#SigninEmailValid").show("fast");
      $("#SigninEmailcheck").hide("fast");
      $("input#SignInEmail").addClass("error-border");
      e.preventDefault();
    }
  }

function modalPassValid(e) {
    var modalPass = $("#SignInPassword").val();
    if ($.trim(modalPass).length == 0) {
      $("#SigninPasswordcheck").show("fast");
      $("input#SignInPassword").addClass("error-border");
      $(".synsix_error.ErrorMessage").hide("fast");
      e.preventDefault();
    } else {
      $("#SigninPasswordcheck").hide("fast");
      $("input#SignInPassword").removeClass("error-border");
    }
  }

  function captchaValidation(e){
      var _signInRecaptcha = $("#signin_modal").find('.g-recaptcha');
      if(_signInRecaptcha){
        var gresponse = _signInRecaptcha.find('.g-recaptcha-response').val();
        console.log(gresponse);
        if (gresponse == "") {
          $("#CaptchaError").show("fast");
          e.preventDefault();
        } else {
          $("#CaptchaError").hide("fast");
        }
      }
    }

    $("#SignInEmail").keyup(modalEmailValid);
    $("#SignInEmail").focusout(modalEmailValid);
    $("#SignInPassword").keyup(modalPassValid);
    $("#SignInPassword").focusout(modalPassValid);



    $("#SignInButton").click(function (e) {
      modalEmailValid(e);
      modalPassValid(e);
      captchaValidation(e);

    });
  
  $("#SignInPageButton").click(function (e) {
    modalEmailValid(e);
    modalPassValid(e);
    captchaValidation(e);
  });
});
$(document).on("click", ".FAQ .acc_head", function () {
  var heightHeader =
    $(".navbar.navbar-default").outerHeight() + $("#alert-bar").outerHeight();
  if ($("#alert-bar").length == 0) {
    var offsettopfaq =
      $(".panel-group .acc_head.opened_panel").offset().top -
      $(".navbar.navbar-default").outerHeight();
  } else {
    if ($("#alert-bar").css("display") == "none") {
      var offsettopfaq =
        $(".panel-group .acc_head.opened_panel").offset().top -
        $(".navbar.navbar-default").outerHeight();
    } else {
      var offsettopfaq =
        $(".panel-group .acc_head.opened_panel").offset().top - heightHeader;
    }
  }
  $("html, body").animate({
      scrollTop: offsettopfaq,
    },
    "0"
  );
});

//$(".scrollto.arrow").click(function(e) {
//     e.preventDefault();
//     var aid = $(this).attr("href");
//     $('html,body').animate({scrollTop: $(aid).offset().top - },'fast');
// });
$(document).on("click", ".scrollto.arrow", function () {
  var heightHeader =
    $(".navbar.navbar-default").outerHeight() + $("#alert-bar").outerHeight();
  if ($("#alert-bar").length == 0) {
    var offsettopsignin =
      $(".synsix_signup").offset().top -
      $(".navbar.navbar-default").outerHeight() -
      40;
  } else {
    if ($("#alert-bar").css("display") == "none") {
      var offsettopsignin =
        $(".synsix_signup").offset().top -
        $(".navbar.navbar-default").outerHeight() -
        40;
    } else {
      var offsettopsignin =
        $(".synsix_signup").offset().top - heightHeader - 40;
    }
  }
  $("html, body").stop().animate({
      scrollTop: offsettopsignin,
    },
    700
  );
});

$(document).ready(function () {
  let getUrlParameter = function getUrlParameter(sParam) {
    let sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split("&"),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split("=");

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ?
          true :
          decodeURIComponent(sParameterName[1]);
      }
    }
  };

  let fname = getUrlParameter("firstname");
  let lname = getUrlParameter("lastname");
  let email = getUrlParameter("email");
  let countryIso = getUrlParameter("country");
  let date = getUrlParameter("dateofbirth");
  let staffproperty = getUrlParameter("hotel");
  let country;
  
  console.log(fname, lname, email, countryIso, date);

  $("#createemail").val(email);
  $("#SelectedDate").val(date);
  $("#firstname").val(fname);
  $("#lastname").val(lname);
  $("#staffproperty").val(staffproperty);
  
  $("#myInput > option").each(function () {
        if ($(this).attr('data-isocode') === countryIso) {
            country = this.text;
            return false;
        }
    });
  
  $("#myInput_chosen a span").html(country);

  $("#myInput option")
    .filter(function () {
      return this.text == country;
    })
    .attr("selected", true);

  $(".chosen-results .active-result")
    .filter(function () {
      return this.innerHTML == country;
    })
    .attr("class", "active-result result-selected hiligheted");

  // $(".chosen").on("keydown", function (e) {
  //   if (e.keyCode == 13) {
  //     console.log("enter");
  //       $("a.chosen-single span.watermark").removeClass("watermark");
  //   }
  // });
});

window.onload = function () {
  $(".synsix_signup a.chosen-single span").addClass("watermark");
  $(".Profile .acc_body form .btn.dropdown-toggle").addClass("watermark");
  //$("input#SelectedDate.form-control").addClass("watermark");

  // popup functionality

  var heightHeader = $(".navbar.navbar-default").outerHeight() + $("#alert-bar").outerHeight();
  var alertHeight = $("#alert-bar").outerHeight();
  if ($("#alert-bar").length == 0) {
    $(".signupnow_pop").css("top", "24px");
    $(".login_notification").css("top", "70px");
  } else if ($("#alert-bar").css("display") == "none") {
    $(".signupnow_pop").css("top", "24px");
    $(".login_notification").css("top", "70px");
  } else {
    $(".signupnow_pop").css("top", heightHeader - 28);
    $(".login_notification").css("top", heightHeader + 20);
    $(".header-overlay-wrapper").css("top", heightHeader - 2);
    // $(".menu_fxd_top, .first_level, .second_level").css("top", alertHeight - 10);
  }
  $("#alert-bar a, .promotion-close").click(function () {
    $(".signupnow_pop").css("top", "24px");
    $(".login_notification").css("top", "70px");
    $(".header-overlay-wrapper").css("top", "50px");
    $(".menu_fxd_top").css("top", 0);
    $(".menu_fxd_top, .first_level, .second_level").css("top", 0);
  });
};

//FARE0002SG-95
// $(document).on("touchstart click", ".active-result", function () {
//   $("a.chosen-single span.watermark").removeClass("watermark");
// });
$(document).on(
  "keyup",
  ".chosen-container-single .chosen-search input",
  function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code == 13) {
      $("a.chosen-single span.watermark").removeClass("watermark");
      var CountryCheck = $(".chosen-single span").text();
      if (
        CountryCheck == $(".chosen-single span.watermark").text() ||
        CountryCheck == "" ||
        CountryCheck == null
      ) {
        $("#countrycheck").fadeIn("slow"); //error text show
      } else {
        $("#countrycheck").fadeOut("slow"); //error text hide
      }
    }
  }
);
$(document).on("click", ".prefixli", function () {
  console.log("DEF");
  $(".Profile .acc_body form .btn.dropdown-toggle").removeClass("watermark");
});

$(document).on("show.bs.modal", ".modal#myModal", function () {
  var zIndex = 1111 + 10 * $(".modal:visible").length;
  $(this).css("z-index", zIndex);
  setTimeout(function () {
    $(".modal-backdrop")
      .not(".modal-stack")
      .css("z-index", zIndex - 1)
      .addClass("modal-stack");
  }, 0);
});

//If banner doesn't exist in SignIn page

$(window).on('load',function(){
  var heightHeaderAlert = $(".navbar.navbar-default").outerHeight() + $("#alert-bar").outerHeight();
  var heightHeader = $(".navbar.navbar-default").outerHeight();
  if($('#alert-bar').length){
    if(!$('.banner').length){
      //$('#SignIn').addClass('no_banner');
      $("#SignIn").css("margin-top", heightHeaderAlert + 70);
    }  
  }
  if(!$('#alert-bar').length){
    if(!$('.banner').length){
      //$('#SignIn').addClass('no_banner');
      $("#SignIn").css("margin-top", heightHeader + 70);
    } 
  }
});



// $(document).ready(function () {
// });
// $(document).click(function() { 
//   function popups_close(){
//     $(".tool_tip .toolround:hover::before, .tool_tip .toolround:hover::after").hide();
//   } 
//   var windowWidth = $(window).width();
//   if (windowWidth <= 1024) {
//     if($(".tool_tip .toolround:hover::before, .tool_tip .toolround:hover::after").is(':visible')) {
//       popups_close();
//   }
//   }
// });

// 103 alternative code

$(document).on('click','#logout',function(){
  $('.smp_login .dropdown-menu').addClass('noclose');
  $(this).text($(this).attr('data-loadingbutton-text'));
  $(this).closest('li').addClass('gif_added');
  $('html').addClass('fixed_page');
});

$(document).on('click','.header-overlay-wrapper #logout',function(){
  $('.header-overlay-wrapper .smp_login .dropdown-menu').addClass('noclose');
  $(this).text($(this).attr('data-loadingbutton-text'));
  $(this).closest('li').addClass('gif_added');
  $('html').addClass('fixed_page');
});

$(document).ready(function () {
  var updatedefaultValue_signup_link = $('#signup_link').html();
  var sign_img_gif = '<span class="loading_spinner color"> </span>';
  var sign_LoadingValue = $('#signup_link').attr("data-loadingbutton-text") + '&nbsp;' + sign_img_gif;
  $("#signup_link").on('click', function(e){
    document.getElementById("signup_link").innerHTML = sign_LoadingValue;
    //$('html').addClass('fixed_page');
    setTimeout( function(){ 
      document.getElementById("signup_link").innerHTML = updatedefaultValue_signup_link;
    }  , 2000 );
  })
});

  // FEHSMP-1170
$(document).ready(function () {
  $("#language-selector-li").click(function(e){
    $('.only_desk').hide()
  });
  $(".book-now-btn").click(function(e){
    $('.language-selector-li.sfe_menu').removeClass('open');
  });
});

  // FEHSMP-1170 RHW
  $(document).ready(function () {
    $("#language-selector-li").click(function(e){
      $('.only_desk_rhw').hide()
    });
    $(".booking-btn").click(function(e){
      $('#language-selector-li.sfe_menu').removeClass('open');
    });
  });
// $(document).ready(function(){
    
//     $('.sticky_nav_by_alpha ul:last-child').addClass('last_alpha');

//     $("ul.first_level li.abc").each(function() {
//         var $this = $(this);
//         var $items = $this.find("#alpha_menu a");
//         //now next loop
//         $.each($items, function(n, e)
//         {
//             let href = $(this).attr('href');
//             if($(href).length > 0) {
//                 $(this).addClass('active_letter');
//             } else {
//                 $(this).addClass('disabled_letter');
//             }
//         });
//     });   

//     $('.first_level, .second_level').parent('li').append('<i class="arrow right"></i>');
//     $(".first_level").hide();
//     $(".second_level").hide();
//     $(".overlay_menu_new .menu_listing_new li").on("click", function () {
//     $(".first_level").hide();
//     $(this).find(".first_level").show();
//     });
    
//     $(".overlay_menu_new .menu_listing_new ul.first_level li").on("click", function () {
//     console.log("clicked");
//     $(".first_level").hide();
//     $(".second_level").hide();
//     $(this).find(".second_level").show();
//     });
    
//     $("body").on("click", "ul li.backto_home", function (e) {
//     e.preventDefault();
//     $(".first_level").hide();
//     });
    
//     $("body").on("click", "ul li.backto_first_level", function (e) {
//     e.preventDefault();
//     $(".second_level").hide();
//     });
    
//     });
    
    

$(document).ready(function(){

    $('.sticky_nav_by_alpha ul:last-child').addClass('last_alpha'); 
    $(".second_level #alpha_menu a").each(function() {
        let href = $(this).closest("a").attr('href');
        if($(href).length > 0) {
            $(this).addClass('active_letter');
        } else {
            $(this).addClass('disabled_letter');
        }
    }); 
    
    $('.first_level, .second_level').parent('li').append('<img src="/images/wht_arw_rgt.svg">');
    $(".first_level").hide();
    $(".second_level").hide();
    $(".overlay_menu_new .menu_listing_new li").on("click", function () {
        $(".first_level").hide();
        $(this).find(".first_level").show();

        var idli=$(this).attr('id');
        if(idli=='language-selector-li' || idli=='signin_up') {
        }else {
            $('body').addClass('show-menu-sublevel');
        }

        
    });
    
    $(".overlay_menu_new .menu_listing_new ul.first_level li").on("click", function () {
    console.log("clicked");
    $(".first_level").hide();
    $(".second_level").hide();
    $(this).find(".second_level").show();
    });
    
    $("body").on("click", "ul li.backto_home", function (e) {
        e.preventDefault();
        $(".first_level").hide();

        $('body').removeClass('show-menu-sublevel');
    });
    
    $("body").on("click", "ul li.backto_first_level", function (e) {
    e.preventDefault();
    $(".second_level").hide();
    });

    $(".alpha_menu").on("click", "a.active_letter", function (e) {
        $("a.active_letter.focus").removeClass("focus");
        $(this).addClass("focus");
        });

    $('.menu_back_btn').each(function() {
        var menu = $('<div class="menu-burger-clone"><div class="burger-bar open"> <span></span> <span></span><span></span><span></span>  </div></div>');
        menu.on( "click", function() {
          $(".menu-burger").trigger( "click" );
        });
        $(this).before(menu);
    });
    $('.header-overlay-wrapper').each(function() {
        var overlay = $('<div class="menu-burger-overlay" style="position: absolute;     top: 0; left: 0;   right: 0;  bottom: 0;"></div>');
        overlay.on( "click", function() {
          $(".menu-burger").trigger( "click" );
        });
        $(this).prepend(overlay);
    });
});
    
    
/* Chosen v1.1.0 | (c) 2011-2013 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
!function () {
    var a,
        AbstractChosen,
        Chosen,
        SelectParser,
        b,
        c = {}.hasOwnProperty,
        d = function (a, b) {
            function d() {
                this.constructor = a;
            }
            for (var e in b) c.call(b, e) && (a[e] = b[e]);
            return (d.prototype = b.prototype), (a.prototype = new d()), (a.__super__ = b.prototype), a;
        };
    (SelectParser = (function () {
        function SelectParser() {
            (this.options_index = 0), (this.parsed = []);
        }
        return (
            (SelectParser.prototype.add_node = function (a) {
                return "OPTGROUP" === a.nodeName.toUpperCase() ? this.add_group(a) : this.add_option(a);
            }),
            (SelectParser.prototype.add_group = function (a) {
                var b, c, d, e, f, g;
                for (b = this.parsed.length, this.parsed.push({ array_index: b, group: !0, label: this.escapeExpression(a.label), children: 0, disabled: a.disabled }), f = a.childNodes, g = [], d = 0, e = f.length; e > d; d++)
                    (c = f[d]), g.push(this.add_option(c, b, a.disabled));
                return g;
            }),
            (SelectParser.prototype.add_option = function (a, b, c) {
                return "OPTION" === a.nodeName.toUpperCase()
                    ? ("" !== a.text
                          ? (null != b && (this.parsed[b].children += 1),
                            this.parsed.push({
                                array_index: this.parsed.length,
                                options_index: this.options_index,
                                value: a.value,
                                text: a.text,
                                html: a.innerHTML,
                                selected: a.selected,
                                disabled: c === !0 ? c : a.disabled,
                                group_array_index: b,
                                classes: a.className,
                                style: a.style.cssText,
                            }))
                          : this.parsed.push({ array_index: this.parsed.length, options_index: this.options_index, empty: !0 }),
                      (this.options_index += 1))
                    : void 0;
            }),
            (SelectParser.prototype.escapeExpression = function (a) {
                var b, c;
                return null == a || a === !1
                    ? ""
                    : /[\&\<\>\"\'\`]/.test(a)
                    ? ((b = { "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }),
                      (c = /&(?!\w+;)|[\<\>\"\'\`]/g),
                      a.replace(c, function (a) {
                          return b[a] || "&amp;";
                      }))
                    : a;
            }),
            SelectParser
        );
    })()),
        (SelectParser.select_to_array = function (a) {
            var b, c, d, e, f;
            for (c = new SelectParser(), f = a.childNodes, d = 0, e = f.length; e > d; d++) (b = f[d]), c.add_node(b);
            return c.parsed;
        }),
        (AbstractChosen = (function () {
            function AbstractChosen(a, b) {
                (this.form_field = a),
                    (this.options = null != b ? b : {}),
                    AbstractChosen.browser_is_supported() && ((this.is_multiple = this.form_field.multiple), this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers());
            }
            return (
                (AbstractChosen.prototype.set_default_values = function () {
                    var a = this;
                    return (
                        (this.click_test_action = function (b) {
                            return a.test_active_click(b);
                        }),
                        (this.activate_action = function (b) {
                            return a.activate_field(b);
                        }),
                        (this.active_field = !1),
                        (this.mouse_on_container = !1),
                        (this.results_showing = !1),
                        (this.result_highlighted = null),
                        (this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1),
                        (this.disable_search_threshold = this.options.disable_search_threshold || 0),
                        (this.disable_search = this.options.disable_search || !1),
                        (this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0),
                        (this.group_search = null != this.options.group_search ? this.options.group_search : !0),
                        (this.search_contains = this.options.search_contains || !1),
                        (this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0),
                        (this.max_selected_options = this.options.max_selected_options || 1 / 0),
                        (this.inherit_select_classes = this.options.inherit_select_classes || !1),
                        (this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0),
                        (this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0)
                    );
                }),
                (AbstractChosen.prototype.set_default_text = function () {
                    return (
                        (this.default_text = this.form_field.getAttribute("data-placeholder")
                            ? this.form_field.getAttribute("data-placeholder")
                            : this.is_multiple
                            ? this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text
                            : this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text),
                        (this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text)
                    );
                }),
                (AbstractChosen.prototype.mouse_enter = function () {
                    return (this.mouse_on_container = !0);
                }),
                (AbstractChosen.prototype.mouse_leave = function () {
                    return (this.mouse_on_container = !1);
                }),
                (AbstractChosen.prototype.input_focus = function () {
                    var a = this;
                    if (this.is_multiple) {
                        if (!this.active_field)
                            return setTimeout(function () {
                                return a.container_mousedown();
                            }, 50);
                    } else if (!this.active_field) return this.activate_field();
                }),
                (AbstractChosen.prototype.input_blur = function () {
                    var a = this;
                    return this.mouse_on_container
                        ? void 0
                        : ((this.active_field = !1),
                          setTimeout(function () {
                              return a.blur_test();
                          }, 100));
                }),
                (AbstractChosen.prototype.results_option_build = function (a) {
                    var b, c, d, e, f;
                    for (b = "", f = this.results_data, d = 0, e = f.length; e > d; d++)
                        (c = f[d]),
                            (b += c.group ? this.result_add_group(c) : this.result_add_option(c)),
                            (null != a ? a.first : void 0) && (c.selected && this.is_multiple ? this.choice_build(c) : c.selected && !this.is_multiple && this.single_set_selected_text(c.text));
                    return b;
                }),
                (AbstractChosen.prototype.result_add_option = function (a) {
                    var b, c;
                    return a.search_match
                        ? this.include_option_in_results(a)
                            ? ((b = []),
                              a.disabled || (a.selected && this.is_multiple) || b.push("active-result"),
                              !a.disabled || (a.selected && this.is_multiple) || b.push("disabled-result"),
                              a.selected && b.push("result-selected"),
                              null != a.group_array_index && b.push("group-option"),
                              "" !== a.classes && b.push(a.classes),
                              (c = document.createElement("li")),
                              (c.className = b.join(" ")),
                              (c.style.cssText = a.style),
                              c.setAttribute("data-option-array-index", a.array_index),
                              (c.innerHTML = a.search_text),
                              this.outerHTML(c))
                            : ""
                        : "";
                }),
                (AbstractChosen.prototype.result_add_group = function (a) {
                    var b;
                    return a.search_match || a.group_match ? (a.active_options > 0 ? ((b = document.createElement("li")), (b.className = "group-result"), (b.innerHTML = a.search_text), this.outerHTML(b)) : "") : "";
                }),
                (AbstractChosen.prototype.results_update_field = function () {
                    return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0;
                }),
                (AbstractChosen.prototype.reset_single_select_options = function () {
                    var a, b, c, d, e;
                    for (d = this.results_data, e = [], b = 0, c = d.length; c > b; b++) (a = d[b]), a.selected ? e.push((a.selected = !1)) : e.push(void 0);
                    return e;
                }),
                (AbstractChosen.prototype.results_toggle = function () {
                    return this.results_showing ? this.results_hide() : this.results_show();
                }),
                (AbstractChosen.prototype.results_search = function () {
                    return this.results_showing ? this.winnow_results() : this.results_show();
                }),
                (AbstractChosen.prototype.winnow_results = function () {
                    var a, b, c, d, e, f, g, h, i, j, k, l, m;
                    for (
                        this.no_results_clear(),
                            e = 0,
                            g = this.get_search_text(),
                            a = g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"),
                            d = this.search_contains ? "" : "^",
                            c = new RegExp(d + a, "i"),
                            j = new RegExp(a, "i"),
                            m = this.results_data,
                            k = 0,
                            l = m.length;
                        l > k;
                        k++
                    )
                        (b = m[k]),
                            (b.search_match = !1),
                            (f = null),
                            this.include_option_in_results(b) &&
                                (b.group && ((b.group_match = !1), (b.active_options = 0)),
                                null != b.group_array_index && this.results_data[b.group_array_index] && ((f = this.results_data[b.group_array_index]), 0 === f.active_options && f.search_match && (e += 1), (f.active_options += 1)),
                                (!b.group || this.group_search) &&
                                    ((b.search_text = b.group ? b.label : b.html),
                                    (b.search_match = this.search_string_match(b.search_text, c)),
                                    b.search_match && !b.group && (e += 1),
                                    b.search_match
                                        ? (g.length && ((h = b.search_text.search(j)), (i = b.search_text.substr(0, h + g.length) + "</em>" + b.search_text.substr(h + g.length)), (b.search_text = i.substr(0, h) + "<em>" + i.substr(h))),
                                          null != f && (f.group_match = !0))
                                        : null != b.group_array_index && this.results_data[b.group_array_index].search_match && (b.search_match = !0)));
                    return this.result_clear_highlight(), 1 > e && g.length ? (this.update_results_content(""), this.no_results(g)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight());
                }),
                (AbstractChosen.prototype.search_string_match = function (a, b) {
                    var c, d, e, f;
                    if (b.test(a)) return !0;
                    if (this.enable_split_word_search && (a.indexOf(" ") >= 0 || 0 === a.indexOf("[")) && ((d = a.replace(/\[|\]/g, "").split(" ")), d.length)) for (e = 0, f = d.length; f > e; e++) if (((c = d[e]), b.test(c))) return !0;
                }),
                (AbstractChosen.prototype.choices_count = function () {
                    var a, b, c, d;
                    if (null != this.selected_option_count) return this.selected_option_count;
                    for (this.selected_option_count = 0, d = this.form_field.options, b = 0, c = d.length; c > b; b++) (a = d[b]), a.selected && (this.selected_option_count += 1);
                    return this.selected_option_count;
                }),
                (AbstractChosen.prototype.choices_click = function (a) {
                    return a.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show();
                }),
                (AbstractChosen.prototype.keyup_checker = function (a) {
                    var b, c;
                    switch (((b = null != (c = a.which) ? c : a.keyCode), this.search_field_scale(), b)) {
                        case 8:
                            if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                            if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                            break;
                        case 13:
                            if ((a.preventDefault(), this.results_showing)) return this.result_select(a);
                            break;
                        case 27:
                            return this.results_showing && this.results_hide(), !0;
                        case 9:
                        case 38:
                        case 40:
                        case 16:
                        case 91:
                        case 17:
                            break;
                        default:
                            return this.results_search();
                    }
                }),
                (AbstractChosen.prototype.clipboard_event_checker = function () {
                    var a = this;
                    return setTimeout(function () {
                        return a.results_search();
                    }, 50);
                }),
                (AbstractChosen.prototype.container_width = function () {
                    return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px";
                }),
                (AbstractChosen.prototype.include_option_in_results = function (a) {
                    return this.is_multiple && !this.display_selected_options && a.selected ? !1 : !this.display_disabled_options && a.disabled ? !1 : a.empty ? !1 : !0;
                }),
                (AbstractChosen.prototype.search_results_touchstart = function (a) {
                    return (this.touch_started = !0), this.search_results_mouseover(a);
                }),
                (AbstractChosen.prototype.search_results_touchmove = function (a) {
                    return (this.touch_started = !1), this.search_results_mouseout(a);
                }),
                (AbstractChosen.prototype.search_results_touchend = function (a) {
                    return this.touch_started ? this.search_results_mouseup(a) : void 0;
                }),
                (AbstractChosen.prototype.outerHTML = function (a) {
                    var b;
                    return a.outerHTML ? a.outerHTML : ((b = document.createElement("div")), b.appendChild(a), b.innerHTML);
                }),
                (AbstractChosen.browser_is_supported = function () {
                    return "Microsoft Internet Explorer" === window.navigator.appName
                        ? document.documentMode >= 8
                        : /iP(od|hone)/i.test(window.navigator.userAgent)
                        ? !0
                        : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent)
                        ? !0
                        : !0;
                }),
                (AbstractChosen.default_multiple_text = "Select Some Options"),
                (AbstractChosen.default_single_text = "Select an Option"),
                (AbstractChosen.default_no_result_text = "No results match"),
                AbstractChosen
            );
        })()),
        (a = jQuery),
        a.fn.extend({
            chosen: function (b) {
                return AbstractChosen.browser_is_supported()
                    ? this.each(function () {
                          var c, d;
                          (c = a(this)), (d = c.data("chosen")), "destroy" === b && d ? d.destroy() : d || c.data("chosen", new Chosen(this, b));
                      })
                    : this;
            },
        }),
        (Chosen = (function (c) {
            function Chosen() {
                return (b = Chosen.__super__.constructor.apply(this, arguments));
            }
            return (
                d(Chosen, c),
                (Chosen.prototype.setup = function () {
                    return (this.form_field_jq = a(this.form_field)), (this.current_selectedIndex = this.form_field.selectedIndex), (this.is_rtl = this.form_field_jq.hasClass("chosen-rtl"));
                }),
                (Chosen.prototype.set_up_html = function () {
                    var b, c;
                    return (
                        (b = ["chosen-container"]),
                        b.push("chosen-container-" + (this.is_multiple ? "multi" : "single")),
                        this.inherit_select_classes && this.form_field.className && b.push(this.form_field.className),
                        this.is_rtl && b.push("chosen-rtl"),
                        (c = { class: b.join(" "), style: "width: " + this.container_width() + ";", title: this.form_field.title }),
                        this.form_field.id.length && (c.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"),
                        (this.container = a("<div />", c)),
                        this.is_multiple
                            ? this.container.html(
                                  '<ul class="chosen-choices"><li class="search-field"><input type="text" value="' +
                                      this.default_text +
                                      '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>'
                              )
                            : this.container.html(
                                  '<a class="chosen-single chosen-default" tabindex="-1"><span>' +
                                      this.default_text +
                                      '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'
                              ),
                        this.form_field_jq.hide().after(this.container),
                        (this.dropdown = this.container.find("div.chosen-drop").first()),
                        (this.search_field = this.container.find("input").first()),
                        (this.search_results = this.container.find("ul.chosen-results").first()),
                        this.search_field_scale(),
                        (this.search_no_results = this.container.find("li.no-results").first()),
                        this.is_multiple
                            ? ((this.search_choices = this.container.find("ul.chosen-choices").first()), (this.search_container = this.container.find("li.search-field").first()))
                            : ((this.search_container = this.container.find("div.chosen-search").first()), (this.selected_item = this.container.find(".chosen-single").first())),
                        this.results_build(),
                        this.set_tab_index(),
                        this.set_label_behavior(),
                        this.form_field_jq.trigger("chosen:ready", { chosen: this })
                    );
                }),
                (Chosen.prototype.register_observers = function () {
                    var a = this;
                    return (
                        this.container.bind("mousedown.chosen", function (b) {
                            a.container_mousedown(b);
                        }),
                        this.container.bind("mouseup.chosen", function (b) {
                            a.container_mouseup(b);
                        }),
                        this.container.bind("mouseenter.chosen", function (b) {
                            a.mouse_enter(b);
                        }),
                        this.container.bind("mouseleave.chosen", function (b) {
                            a.mouse_leave(b);
                        }),
                        this.search_results.bind("mouseup.chosen", function (b) {
                            a.search_results_mouseup(b);
                        }),
                        this.search_results.bind("mouseover.chosen", function (b) {
                            a.search_results_mouseover(b);
                        }),
                        this.search_results.bind("mouseout.chosen", function (b) {
                            a.search_results_mouseout(b);
                        }),
                        this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (b) {
                            a.search_results_mousewheel(b);
                        }),
                        this.search_results.bind("touchstart.chosen", function (b) {
                            a.search_results_touchstart(b);
                        }),
                        this.search_results.bind("touchmove.chosen", function (b) {
                            a.search_results_touchmove(b);
                        }),
                        this.search_results.bind("touchend.chosen", function (b) {
                            a.search_results_touchend(b);
                        }),
                        this.form_field_jq.bind("chosen:updated.chosen", function (b) {
                            a.results_update_field(b);
                        }),
                        this.form_field_jq.bind("chosen:activate.chosen", function (b) {
                            a.activate_field(b);
                        }),
                        this.form_field_jq.bind("chosen:open.chosen", function (b) {
                            a.container_mousedown(b);
                        }),
                        this.form_field_jq.bind("chosen:close.chosen", function (b) {
                            a.input_blur(b);
                        }),
                        this.search_field.bind("blur.chosen", function (b) {
                            a.input_blur(b);
                        }),
                        this.search_field.bind("keyup.chosen", function (b) {
                            a.keyup_checker(b);
                        }),
                        this.search_field.bind("keydown.chosen", function (b) {
                            a.keydown_checker(b);
                        }),
                        this.search_field.bind("focus.chosen", function (b) {
                            a.input_focus(b);
                        }),
                        this.search_field.bind("cut.chosen", function (b) {
                            a.clipboard_event_checker(b);
                        }),
                        this.search_field.bind("paste.chosen", function (b) {
                            a.clipboard_event_checker(b);
                        }),
                        this.is_multiple
                            ? this.search_choices.bind("click.chosen", function (b) {
                                  a.choices_click(b);
                              })
                            : this.container.bind("click.chosen", function (a) {
                                  a.preventDefault();
                              })
                    );
                }),
                (Chosen.prototype.destroy = function () {
                    return (
                        a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action),
                        this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex),
                        this.container.remove(),
                        this.form_field_jq.removeData("chosen"),
                        this.form_field_jq.show()
                    );
                }),
                (Chosen.prototype.search_field_disabled = function () {
                    return (
                        (this.is_disabled = this.form_field_jq[0].disabled),
                        this.is_disabled
                            ? (this.container.addClass("chosen-disabled"), (this.search_field[0].disabled = !0), this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field())
                            : (this.container.removeClass("chosen-disabled"), (this.search_field[0].disabled = !1), this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
                    );
                }),
                (Chosen.prototype.container_mousedown = function (b) {
                    return this.is_disabled || (b && "mousedown" === b.type && !this.results_showing && b.preventDefault(), null != b && a(b.target).hasClass("search-choice-close"))
                        ? void 0
                        : (this.active_field
                              ? this.is_multiple || !b || (a(b.target)[0] !== this.selected_item[0] && !a(b.target).parents("a.chosen-single").length) || (b.preventDefault(), this.results_toggle())
                              : (this.is_multiple && this.search_field.val(""), a(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()),
                          this.activate_field());
                }),
                (Chosen.prototype.container_mouseup = function (a) {
                    return "ABBR" !== a.target.nodeName || this.is_disabled ? void 0 : this.results_reset(a);
                }),
                (Chosen.prototype.search_results_mousewheel = function (a) {
                    var b;
                    return (
                        a.originalEvent && (b = -a.originalEvent.wheelDelta || a.originalEvent.detail),
                        null != b ? (a.preventDefault(), "DOMMouseScroll" === a.type && (b = 40 * b), this.search_results.scrollTop(b + this.search_results.scrollTop())) : void 0
                    );
                }),
                (Chosen.prototype.blur_test = function () {
                    return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0;
                }),
                (Chosen.prototype.close_field = function () {
                    return (
                        a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action),
                        (this.active_field = !1),
                        this.results_hide(),
                        this.container.removeClass("chosen-container-active"),
                        this.clear_backstroke(),
                        this.show_search_field_default(),
                        this.search_field_scale()
                    );
                }),
                (Chosen.prototype.activate_field = function () {
                    return this.container.addClass("chosen-container-active"), (this.active_field = !0), this.search_field.val(this.search_field.val()), this.search_field.focus();
                }),
                (Chosen.prototype.test_active_click = function (b) {
                    var c;
                    return (c = a(b.target).closest(".chosen-container")), c.length && this.container[0] === c[0] ? (this.active_field = !0) : this.close_field();
                }),
                (Chosen.prototype.results_build = function () {
                    return (
                        (this.parsing = !0),
                        (this.selected_option_count = null),
                        (this.results_data = SelectParser.select_to_array(this.form_field)),
                        this.is_multiple
                            ? this.search_choices.find("li.search-choice").remove()
                            : this.is_multiple ||
                              (this.single_set_selected_text(),
                              this.disable_search || this.form_field.options.length <= this.disable_search_threshold
                                  ? ((this.search_field[0].readOnly = !0), this.container.addClass("chosen-container-single-nosearch"))
                                  : ((this.search_field[0].readOnly = !1), this.container.removeClass("chosen-container-single-nosearch"))),
                        this.update_results_content(this.results_option_build({ first: !0 })),
                        this.search_field_disabled(),
                        this.show_search_field_default(),
                        this.search_field_scale(),
                        (this.parsing = !1)
                    );
                }),
                (Chosen.prototype.result_do_highlight = function (a) {
                    var b, c, d, e, f;
                    if (a.length) {
                        if (
                            (this.result_clear_highlight(),
                            (this.result_highlight = a),
                            this.result_highlight.addClass("highlighted"),
                            (d = parseInt(this.search_results.css("maxHeight"), 10)),
                            (f = this.search_results.scrollTop()),
                            (e = d + f),
                            (c = this.result_highlight.position().top + this.search_results.scrollTop()),
                            (b = c + this.result_highlight.outerHeight()),
                            b >= e)
                        )
                            return this.search_results.scrollTop(b - d > 0 ? b - d : 0);
                        if (f > c) return this.search_results.scrollTop(c);
                    }
                }),
                (Chosen.prototype.result_clear_highlight = function () {
                    return this.result_highlight && this.result_highlight.removeClass("highlighted"), (this.result_highlight = null);
                }),
                (Chosen.prototype.results_show = function () {
                    return this.is_multiple && this.max_selected_options <= this.choices_count()
                        ? (this.form_field_jq.trigger("chosen:maxselected", { chosen: this }), !1)
                        : (this.container.addClass("chosen-with-drop"),
                          (this.results_showing = !0),
                          this.search_field.focus(),
                          this.search_field.val(this.search_field.val()),
                          this.winnow_results(),
                          this.form_field_jq.trigger("chosen:showing_dropdown", { chosen: this }));
                }),
                (Chosen.prototype.update_results_content = function (a) {
                    return this.search_results.html(a);
                }),
                (Chosen.prototype.results_hide = function () {
                    return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", { chosen: this })), (this.results_showing = !1);
                }),
                (Chosen.prototype.set_tab_index = function () {
                    var a;
                    return this.form_field.tabIndex ? ((a = this.form_field.tabIndex), (this.form_field.tabIndex = -1), (this.search_field[0].tabIndex = a)) : void 0;
                }),
                (Chosen.prototype.set_label_behavior = function () {
                    var b = this;
                    return (
                        (this.form_field_label = this.form_field_jq.parents("label")),
                        !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = a("label[for='" + this.form_field.id + "']")),
                        this.form_field_label.length > 0
                            ? this.form_field_label.bind("click.chosen", function (a) {
                                  return b.is_multiple ? b.container_mousedown(a) : b.activate_field();
                              })
                            : void 0
                    );
                }),
                (Chosen.prototype.show_search_field_default = function () {
                    return this.is_multiple && this.choices_count() < 1 && !this.active_field
                        ? (this.search_field.val(this.default_text), this.search_field.addClass("default"))
                        : (this.search_field.val(""), this.search_field.removeClass("default"));
                }),
                (Chosen.prototype.search_results_mouseup = function (b) {
                    var c;
                    return (c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first()), c.length ? ((this.result_highlight = c), this.result_select(b), this.search_field.focus()) : void 0;
                }),
                (Chosen.prototype.search_results_mouseover = function (b) {
                    var c;
                    return (c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first()), c ? this.result_do_highlight(c) : void 0;
                }),
                (Chosen.prototype.search_results_mouseout = function (b) {
                    return a(b.target).hasClass("active-result") ? this.result_clear_highlight() : void 0;
                }),
                (Chosen.prototype.choice_build = function (b) {
                    var c,
                        d,
                        e = this;
                    return (
                        (c = a("<li />", { class: "search-choice" }).html("<span>" + b.html + "</span>")),
                        b.disabled
                            ? c.addClass("search-choice-disabled")
                            : ((d = a("<a />", { class: "search-choice-close", "data-option-array-index": b.array_index })),
                              d.bind("click.chosen", function (a) {
                                  return e.choice_destroy_link_click(a);
                              }),
                              c.append(d)),
                        this.search_container.before(c)
                    );
                }),
                (Chosen.prototype.choice_destroy_link_click = function (b) {
                    return b.preventDefault(), b.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(a(b.target));
                }),
                (Chosen.prototype.choice_destroy = function (a) {
                    return this.result_deselect(a[0].getAttribute("data-option-array-index"))
                        ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), a.parents("li").first().remove(), this.search_field_scale())
                        : void 0;
                }),
                (Chosen.prototype.results_reset = function () {
                    return (
                        this.reset_single_select_options(),
                        (this.form_field.options[0].selected = !0),
                        this.single_set_selected_text(),
                        this.show_search_field_default(),
                        this.results_reset_cleanup(),
                        this.form_field_jq.trigger("change"),
                        this.active_field ? this.results_hide() : void 0
                    );
                }),
                (Chosen.prototype.results_reset_cleanup = function () {
                    return (this.current_selectedIndex = this.form_field.selectedIndex), this.selected_item.find("abbr").remove();
                }),
                (Chosen.prototype.result_select = function (a) {
                    var b, c;
                    return this.result_highlight
                        ? ((b = this.result_highlight),
                          this.result_clear_highlight(),
                          this.is_multiple && this.max_selected_options <= this.choices_count()
                              ? (this.form_field_jq.trigger("chosen:maxselected", { chosen: this }), !1)
                              : (this.is_multiple ? b.removeClass("active-result") : this.reset_single_select_options(),
                                (c = this.results_data[b[0].getAttribute("data-option-array-index")]),
                                (c.selected = !0),
                                (this.form_field.options[c.options_index].selected = !0),
                                (this.selected_option_count = null),
                                this.is_multiple ? this.choice_build(c) : this.single_set_selected_text(c.text),
                                ((a.metaKey || a.ctrlKey) && this.is_multiple) || this.results_hide(),
                                this.search_field.val(""),
                                (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", { selected: this.form_field.options[c.options_index].value }),
                                (this.current_selectedIndex = this.form_field.selectedIndex),
                                this.search_field_scale()))
                        : void 0;
                }),
                (Chosen.prototype.single_set_selected_text = function (a) {
                    return (
                        null == a && (a = this.default_text),
                        a === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")),
                        this.selected_item.find("span").text(a)
                    );
                }),
                (Chosen.prototype.result_deselect = function (a) {
                    var b;
                    return (
                        (b = this.results_data[a]),
                        this.form_field.options[b.options_index].disabled
                            ? !1
                            : ((b.selected = !1),
                              (this.form_field.options[b.options_index].selected = !1),
                              (this.selected_option_count = null),
                              this.result_clear_highlight(),
                              this.results_showing && this.winnow_results(),
                              this.form_field_jq.trigger("change", { deselected: this.form_field.options[b.options_index].value }),
                              this.search_field_scale(),
                              !0)
                    );
                }),
                (Chosen.prototype.single_deselect_control_build = function () {
                    return this.allow_single_deselect
                        ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect"))
                        : void 0;
                }),
                (Chosen.prototype.get_search_text = function () {
                    return this.search_field.val() === this.default_text ? "" : a("<div/>").text(a.trim(this.search_field.val())).html();
                }),
                (Chosen.prototype.winnow_results_set_highlight = function () {
                    var a, b;
                    return (
                        (b = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result")),
                        (a = b.length ? b.first() : this.search_results.find(".active-result").first()),
                        null != a ? this.result_do_highlight(a) : void 0
                    );
                }),
                (Chosen.prototype.no_results = function (b) {
                    var c;
                    return (
                        (c = a('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>')), c.find("span").first().html(b), this.search_results.append(c), this.form_field_jq.trigger("chosen:no_results", { chosen: this })
                    );
                }),
                (Chosen.prototype.no_results_clear = function () {
                    return this.search_results.find(".no-results").remove();
                }),
                (Chosen.prototype.keydown_arrow = function () {
                    var a;
                    return this.results_showing && this.result_highlight ? ((a = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(a) : void 0) : this.results_show();
                }),
                (Chosen.prototype.keyup_arrow = function () {
                    var a;
                    return this.results_showing || this.is_multiple
                        ? this.result_highlight
                            ? ((a = this.result_highlight.prevAll("li.active-result")), a.length ? this.result_do_highlight(a.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight()))
                            : void 0
                        : this.results_show();
                }),
                (Chosen.prototype.keydown_backstroke = function () {
                    var a;
                    return this.pending_backstroke
                        ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke())
                        : ((a = this.search_container.siblings("li.search-choice").last()),
                          a.length && !a.hasClass("search-choice-disabled") ? ((this.pending_backstroke = a), this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0);
                }),
                (Chosen.prototype.clear_backstroke = function () {
                    return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), (this.pending_backstroke = null);
                }),
                (Chosen.prototype.keydown_checker = function (a) {
                    var b, c;
                    switch (((b = null != (c = a.which) ? c : a.keyCode), this.search_field_scale(), 8 !== b && this.pending_backstroke && this.clear_backstroke(), b)) {
                        case 8:
                            this.backstroke_length = this.search_field.val().length;
                            break;
                        case 9:
                            this.results_showing && !this.is_multiple && this.result_select(a), (this.mouse_on_container = !1);
                            break;
                        case 13:
                            a.preventDefault();
                            break;
                        case 38:
                            a.preventDefault(), this.keyup_arrow();
                            break;
                        case 40:
                            a.preventDefault(), this.keydown_arrow();
                    }
                }),
                (Chosen.prototype.search_field_scale = function () {
                    var b, c, d, e, f, g, h, i, j;
                    if (this.is_multiple) {
                        for (
                            d = 0,
                                h = 0,
                                f = "position:absolute; left: -1000px; top: -1000px; display:none;",
                                g = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"],
                                i = 0,
                                j = g.length;
                            j > i;
                            i++
                        )
                            (e = g[i]), (f += e + ":" + this.search_field.css(e) + ";");
                        return (
                            (b = a("<div />", { style: f })),
                            b.text(this.search_field.val()),
                            a("body").append(b),
                            (h = b.width() + 25),
                            b.remove(),
                            (c = this.container.outerWidth()),
                            h > c - 10 && (h = c - 10),
                            this.search_field.css({ width: h + "px" })
                        );
                    }
                }),
                Chosen
            );
        })(AbstractChosen));
}.call(this);

/*!
 * Clamp.js 0.5.1
 *
 * Copyright 2011-2013, Joseph Schmitt http://joe.sh
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 */

(function() {
    /**
     * Clamps a text node.
     * @param {HTMLElement} element. Element containing the text node to clamp.
     * @param {Object} options. Options to pass to the clamper.
     */
    function clamp(element, options) {
        options = options || {};

        var self = this,
            win = window,
            opt = {
                clamp: options.clamp || 2,
                useNativeClamp: typeof(options.useNativeClamp) != 'undefined' ? options.useNativeClamp : true,
                splitOnChars: options.splitOnChars || ['.', '-', '–', '—', ' '], //Split on sentences (periods), hypens, en-dashes, em-dashes, and words (spaces).
                animate: options.animate || false,
                truncationChar: options.truncationChar || '…',
                truncationHTML: options.truncationHTML
            },

            sty = element.style,
            originalText = element.innerHTML,

            supportsNativeClamp = typeof(element.style.webkitLineClamp) != 'undefined',
            clampValue = opt.clamp,
            isCSSValue = clampValue.indexOf && (clampValue.indexOf('px') > -1 || clampValue.indexOf('em') > -1),
            truncationHTMLContainer;

        if (opt.truncationHTML) {
            truncationHTMLContainer = document.createElement('span');
            truncationHTMLContainer.innerHTML = opt.truncationHTML;
        }


        // UTILITY FUNCTIONS __________________________________________________________

        /**
         * Return the current style for an element.
         * @param {HTMLElement} elem The element to compute.
         * @param {string} prop The style property.
         * @returns {number}
         */
        function computeStyle(elem, prop) {
            if (!win.getComputedStyle) {
                win.getComputedStyle = function(el, pseudo) {
                    this.el = el;
                    this.getPropertyValue = function(prop) {
                        var re = /(\-([a-z]){1})/g;
                        if (prop == 'float') prop = 'styleFloat';
                        if (re.test(prop)) {
                            prop = prop.replace(re, function() {
                                return arguments[2].toUpperCase();
                            });
                        }
                        return el.currentStyle && el.currentStyle[prop] ? el.currentStyle[prop] : null;
                    }
                    return this;
                }
            }

            return win.getComputedStyle(elem, null).getPropertyValue(prop);
        }

        /**
         * Returns the maximum number of lines of text that should be rendered based
         * on the current height of the element and the line-height of the text.
         */
        function getMaxLines(height) {
            var availHeight = height || element.clientHeight,
                lineHeight = getLineHeight(element);

            return Math.max(Math.floor(availHeight / lineHeight), 0);
        }

        /**
         * Returns the maximum height a given element should have based on the line-
         * height of the text and the given clamp value.
         */
        function getMaxHeight(clmp) {
            var lineHeight = getLineHeight(element);
            return lineHeight * clmp;
        }

        /**
         * Returns the line-height of an element as an integer.
         */
        function getLineHeight(elem) {
            var lh = computeStyle(elem, 'line-height');
            if (lh == 'normal') {
                // Normal line heights vary from browser to browser. The spec recommends
                // a value between 1.0 and 1.2 of the font size. Using 1.1 to split the diff.
                lh = parseInt(computeStyle(elem, 'font-size')) * 1.2;
            }
            return parseInt(lh);
        }


        // MEAT AND POTATOES (MMMM, POTATOES...) ______________________________________
        var splitOnChars = opt.splitOnChars.slice(0),
            splitChar = splitOnChars[0],
            chunks,
            lastChunk;

        /**
         * Gets an element's last child. That may be another node or a node's contents.
         */
        function getLastChild(elem) {
            //Current element has children, need to go deeper and get last child as a text node
            if (elem.lastChild.children && elem.lastChild.children.length > 0) {
                return getLastChild(Array.prototype.slice.call(elem.children).pop());
            }
            //This is the absolute last child, a text node, but something's wrong with it. Remove it and keep trying
            else if (!elem.lastChild || !elem.lastChild.nodeValue || elem.lastChild.nodeValue == '' || elem.lastChild.nodeValue == opt.truncationChar) {
                elem.lastChild.parentNode.removeChild(elem.lastChild);
                return getLastChild(element);
            }
            //This is the last child we want, return it
            else {
                return elem.lastChild;
            }
        }

        /**
         * Removes one character at a time from the text until its width or
         * height is beneath the passed-in max param.
         */
        function truncate(target, maxHeight) {
            if (!maxHeight) { return; }

            /**
             * Resets global variables.
             */
            function reset() {
                splitOnChars = opt.splitOnChars.slice(0);
                splitChar = splitOnChars[0];
                chunks = null;
                lastChunk = null;
            }

            var nodeValue = target.nodeValue.replace(opt.truncationChar, '');

            //Grab the next chunks
            if (!chunks) {
                //If there are more characters to try, grab the next one
                if (splitOnChars.length > 0) {
                    splitChar = splitOnChars.shift();
                }
                //No characters to chunk by. Go character-by-character
                else {
                    splitChar = '';
                }

                chunks = nodeValue.split(splitChar);
            }

            //If there are chunks left to remove, remove the last one and see if
            // the nodeValue fits.
            if (chunks.length > 1) {
                // console.log('chunks', chunks);
                lastChunk = chunks.pop();
                // console.log('lastChunk', lastChunk);
                applyEllipsis(target, chunks.join(splitChar));
            }
            //No more chunks can be removed using this character
            else {
                chunks = null;
            }

            //Insert the custom HTML before the truncation character
            if (truncationHTMLContainer) {
                target.nodeValue = target.nodeValue.replace(opt.truncationChar, '');
                element.innerHTML = target.nodeValue + ' ' + truncationHTMLContainer.innerHTML + opt.truncationChar;
            }

            //Search produced valid chunks
            if (chunks) {
                //It fits
                if (element.clientHeight <= maxHeight) {
                    //There's still more characters to try splitting on, not quite done yet
                    if (splitOnChars.length >= 0 && splitChar != '') {
                        applyEllipsis(target, chunks.join(splitChar) + splitChar + lastChunk);
                        chunks = null;
                    }
                    //Finished!
                    else {
                        return element.innerHTML;
                    }
                }
            }
            //No valid chunks produced
            else {
                //No valid chunks even when splitting by letter, time to move
                //on to the next node
                if (splitChar == '') {
                    applyEllipsis(target, '');
                    target = getLastChild(element);

                    reset();
                }
            }

            //If you get here it means still too big, let's keep truncating
            if (opt.animate) {
                setTimeout(function() {
                    truncate(target, maxHeight);
                }, opt.animate === true ? 10 : opt.animate);
            } else {
                return truncate(target, maxHeight);
            }
        }

        function applyEllipsis(elem, str) {
            elem.nodeValue = str + opt.truncationChar;
        }


        // CONSTRUCTOR ________________________________________________________________

        if (clampValue == 'auto') {
            clampValue = getMaxLines();
        } else if (isCSSValue) {
            clampValue = getMaxLines(parseInt(clampValue));
        }

        var clampedText;

        if (supportsNativeClamp && opt.useNativeClamp && $(window).width()<=1024) {
            sty.overflow = 'hidden';
            sty.textOverflow = 'ellipsis';
            sty.webkitBoxOrient = 'vertical';
            sty.display = '-webkit-box';
            sty.webkitLineClamp = clampValue;

            if (isCSSValue) {
                sty.height = opt.clamp + 'px';
            }
        } else {
            var height = getMaxHeight(clampValue);
            if (height < element.clientHeight) {
                clampedText = truncate(getLastChild(element), height);
            }
        }

        return {
            'original': originalText,
            'clamped': clampedText
        }
    }

    window.$clamp = clamp;
})();

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};
Date.prototype.subtract = function (d) {
    var oneDay = 1000 * 60 * 60 * 24;
    var ms1 = this.getTime();
    var ms2 = d.getTime();
    var diff = ms1 - ms2;
    return Math.round(diff / oneDay);
};

$(function () {
    $('.filtering-container').on('change', function () {
        var self = $(this);
        var selected = self.find('option:selected');
        var value = selected.val();
        processListings(self, value)
    }).on('filtering', function () {
        processListings($(this));
    }).trigger('filtering');

    function processListings(filter, filterValue) {
        var containers = filter.find('[data-dynamic=true]');
        containers.each(function (i) {
            var container = $(containers[i]);
            var brand = container.data('brand');
            var param = {
                type: container.data('type'),
                attributes: []
            };
            if (filterValue) {
                param.attributes.push({
                    name: 'country',
                    value: filterValue
                });
            }
            if (brand) {
                param.attributes.push({
                    name: 'brand',
                    value: brand
                });
            }
            $.ajax({
                url: '/ajax/listings/thumbnails',
                method: 'POST',
                data: JSON.stringify(param),
                contentType: 'application/json; charset=utf-8'
            }).done(function (response) {
                container.find('[data-remove=true]').remove();
                var config = createConfig(container);
                createListings(response, config, container);
            }).fail(function (response) {
                console.log('An error occurred while processing your request.');
            });
        });
    }

    function computeMediumPushValue(listingsCount) {
        var maxCount = 3;
        var colSizePerListing = 4;
        var totalSize = maxCount * colSizePerListing;
        var sizeOfListingCols = listingsCount * colSizePerListing;
        var freeSpace = totalSize - sizeOfListingCols;
        var pushValue = freeSpace === 0 ? 0 :
            freeSpace / 2;
        return pushValue;
    }

    function createListings(response, config, container) {
        if (response.length === 0) {
            container
                .closest('[data-hideable=true]').hide()
                .prev('.line-separator[data-hideable=true]').hide();
            return;
        } else {
            container
                .closest('[data-hideable=true]').show()
                .prev('.line-separator[data-hideable=true]').show();
        }

        var pushValue = computeMediumPushValue(response.length);
        for (var j = 0, l = response.length; j < l; ++j) {
            var listing = response[j];
            var html = createListingHtml(listing, config, pushValue);
            container.append(html);
        }
    }

    function createListingHtml(listing, config, pushValue) {
        var colPush = pushValue === 0 ? '' : ' col-md-push-' + pushValue;
        var html = '<div class="col-md-4 col-sm-6" data-remove="true">';
        html += '<div class="hotel-content-wrapper">';
        html += '<div class="hotel-image">';
        html += '<div class="deal-image image-with-txt">';
        html += '<a href="' + (listing.url ? listing.url : '#') + '">';
        if (listing.smallThumbnail) {
            html += '<img src="' + listing.smallThumbnail.src + '" alt="' + listing.smallThumbnail.alt + '" />';
        }
        html += '<div class="caption">';
        html += '<div class="content-v-align">';
        if (config.showTitle) {
            html += '<h3>' + (listing.title ? listing.title : '') + '</h3>';
        }
        html += '</div>';
        html += '</div>';
        html += '<p>' + (listing.caption ? listing.caption : '') + '</p>';
        html += '</a>';
        html += '</div>';
        html += '</div>';
        html += '<div class="hotel-content description">';
        html += '<h4>' + (listing.underlinedText ? listing.underlinedText : '') + '</h4>';
        html += '<div class="line-divider ' + config.dividerColor + '"></div>';
        html += '<p>' + (listing.summary ? listing.summary : '') + '</p>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        return html;
    }

    function createConfig(container) {
        return {
            dividerColor: container.find('[data-prop=DividerColor]').val(),
            showTitle: container.find('[data-prop=ShowTitle]').val()
        };
    }

});
var mindatenewone,checkinFormat,checkoutFormat;
$(function () {
    var sr = $('.sr-marker').find('select');
    var checkin = $('.checkin-marker').find('.datepicker');
    var checkout = $('.checkout-marker').find('.datepicker');
    
    //checkout.datepicker( "option", "disabled", true );
	//07062020 - Added for new SC Form
	var checkinDate = $('.checkin-marker input[type="date"]');
	var checkoutDate = $('.checkout-marker input[type="date"]');
    
	checkinDate.val(new Date().toISOString().substr(0, 10));
	checkinDate.attr('min', new Date().toISOString().substr(0, 10));
	checkoutDate.val(new Date().addDays(30).toISOString().substr(0, 10));
    checkoutDate.attr('min', new Date().addDays(30).toISOString().substr(0, 10));

	checkinDate.on('change', function () {
		var daysrestriction = parseInt($('input[data-sc-field-name="DaysRestriction"]').val());
		var val = $(this).val();
		var newDate = new Date(val + 'T00:00');
		checkoutDate.attr('min', newDate.addDays(parseInt(daysrestriction)).toISOString().substr(0, 10));
		//checkoutDate.attr('max', newDate.addDays(parseInt(daysrestriction)).toISOString().substr(0, 10));
	});
	//07062020 - Added for new SC Form

    function updateDates(date1, date2) {
        var checkinId = checkin.attr('id');
        var checkoutId = checkout.attr('id');
        var checkinFieldData = window.WffmFieldsData[checkinId];
        var checkoutFieldData = window.WffmFieldsData[checkoutId];
        checkinFormat = checkinFieldData.dateFormat;
        checkoutFormat = checkoutFieldData.dateFormat;

        var checkinDateString = $.datepicker.formatDate(checkinFormat, date1);
        var checkoutDateString = $.datepicker.formatDate(checkoutFormat, date2);

        checkin.val(checkinDateString);
        checkout.val(checkoutDateString);
        checkout.datepicker( "option","minDate", checkoutDateString);
        mindatenewone = checkoutDateString;
        setTimeout(function(){ 
            checkout.datepicker( "option","minDate", checkoutDateString);
         }, 2000);

    }

    function onSrChange(id) {
        var mindays = 0, found = false;
		var daysrestriction = parseInt($(".app-form-control-hidden-field .text-box").val());
        if (groups) {
            for (var i in groups) {
                var country = groups[i];
                var cities = country.cities;
                if (cities && cities.length > 0) {
                    for (var j in cities) {
                        var city = cities[j];
                        var grouping = city.grouping;
                        if (grouping && grouping.length > 0) {
                            for (var k in grouping) {
                                var group = grouping[k];
                                var items = group.items;
                                if (items && items.length > 0) {
                                    for (var l in items) {
                                        var item = items[l];
                                        if (item.id === id) {
                                            mindays = item.mindays;
                                            found = true;
                                            break;
                                        }
                                    }
                                }
                                if (found) break;
                            }
                        }
                        if (found) break;
                    }
                }
                if (found) break;
            }
        }
		if(daysrestriction>0){
			checkin.data('mindays', daysrestriction);
            checkout.data('mindays', daysrestriction);
			var checkinDate = new Date();
            var checkoutDate = checkinDate.addDays(daysrestriction);
			
            updateDates(checkinDate, checkoutDate);
		}
        else if (mindays > 0) {
            $('.minnight-label').text(mindays);

            checkin.data('mindays', mindays);
            checkout.data('mindays', mindays);

            var checkinDate = new Date();
            var checkoutDate = checkinDate.addDays(mindays);
			
            updateDates(checkinDate, checkoutDate);
        } else {
            $('.minnight-label').text('7');
            checkin.removeData('mindays');
            checkout.removeData('mindays');
            var checkinDate = new Date();
            var checkoutDate = checkinDate.addDays(7);
            updateDates(checkinDate, checkoutDate);
        }
    }

    sr.on('change', function () {
        var id = $(this).val();
        onSrChange(id);
    });

    checkin.on('onDateSelected', function () {
        var checkinId = checkin.attr('id');
        var checkoutId = checkout.attr('id');
        var checkinFieldData = window.WffmFieldsData[checkinId];
        var checkoutFieldData = window.WffmFieldsData[checkoutId];
        var checkinFormat = checkinFieldData.dateFormat;
        var checkoutFormat = checkoutFieldData.dateFormat;

        var mindays = $(this).data('mindays');
        var checkinDate = $.datepicker.parseDate(checkinFormat, $(this).val());
        var checkoutDate = $.datepicker.parseDate(checkoutFormat, checkout.val());
        var diff = checkoutDate.subtract(checkinDate);
        /*if (diff < mindays) {
            var newCheckoutDate = checkinDate.addDays(mindays);
            updateDates(checkinDate, newCheckoutDate);
        }else if(mindays!=null && mindays!="undefined" && mindays!=""){
            
        }*/
		var daysrestriction = parseInt($(".app-form-control-hidden-field .text-box").val());
		
		if(daysrestriction>0){
			var newCheckoutDate = checkinDate.addDays(daysrestriction);
            updateDates(checkinDate, newCheckoutDate);
		}
        if(mindays!=null && mindays!="undefined" && mindays!=""){
            var newCheckoutDate = checkinDate.addDays(mindays);
            updateDates(checkinDate, newCheckoutDate);
        }else{
            var newCheckoutDate = checkinDate.addDays(7);
            updateDates(checkinDate, newCheckoutDate);
        }
       // checkout.datepicker( "option", "enabled", true );
        //checkout.datepicker('setDate', null);
        
    });

    checkout.on('onDateSelected', function () {
        var checkinId = checkin.attr('id');
        var checkoutId = checkout.attr('id');
        var checkinFieldData = window.WffmFieldsData[checkinId];
        var checkoutFieldData = window.WffmFieldsData[checkoutId];
        var checkinFormat = checkinFieldData.dateFormat;
        var checkoutFormat = checkoutFieldData.dateFormat;

        var mindays = $(this).data('mindays');
        var checkinDate = $.datepicker.parseDate(checkinFormat, checkin.val());
        var checkoutDate = $.datepicker.parseDate(checkoutFormat, $(this).val());
        var diff = checkoutDate.subtract(checkinDate);

        if (diff < mindays) {
            var newCheckoutDate = checkinDate.addDays(mindays);
            updateDates(checkinDate, newCheckoutDate);
        }

        var checkoutDateString = $.datepicker.formatDate(checkoutFormat, checkoutDate);
        checkout.val(checkoutDateString);
    });

    
    $(window).on("load",function(){
        if(checkinFormat!=null){
             var dateformat = $.datepicker.formatDate(checkinFormat, new Date());
        $(".checkin-marker input.datepicker").datepicker('option', 'minDate', dateformat);
        if(mindatenewone!=null && mindatenewone!="undefined" && mindatenewone!=""){
            $(".checkout-marker input.datepicker").datepicker( "option","minDate", mindatenewone);
        }
    }   
       
        
    })
});

// WFFM
