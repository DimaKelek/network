(this["webpackJsonpsamurai-app"]=this["webpackJsonpsamurai-app"]||[]).push([[3],{321:function(e,t,n){"use strict";n.r(t),n.d(t,"getCLS",(function(){return S})),n.d(t,"getFCP",(function(){return g})),n.d(t,"getFID",(function(){return C})),n.d(t,"getLCP",(function(){return P})),n.d(t,"getTTFB",(function(){return D}));var i,a,r,o,u=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},s=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},f=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},d="function"==typeof WeakSet?new WeakSet:new Set,m=function(e,t,n){var i;return function(){t.value>=0&&(n||d.has(t)||"hidden"===document.visibilityState)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},p=-1,v=function(){return"hidden"===document.visibilityState?0:1/0},l=function(){s((function(e){var t=e.timeStamp;p=t}),!0)},h=function(){return p<0&&(p=v(),l(),f((function(){setTimeout((function(){p=v(),l()}),0)}))),{get firstHiddenTime(){return p}}},g=function(e,t){var n,i=h(),a=u("FCP"),r=function(e){"first-contentful-paint"===e.name&&(s&&s.disconnect(),e.startTime<i.firstHiddenTime&&(a.value=e.startTime,a.entries.push(e),d.add(a),n()))},o=performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],s=o?null:c("paint",r);(o||s)&&(n=m(e,a,t),o&&r(o),f((function(i){a=u("FCP"),n=m(e,a,t),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,d.add(a),n()}))}))})))},y=!1,T=-1,S=function(e,t){y||(g((function(e){T=e.value})),y=!0);var n,i=function(t){T>-1&&e(t)},a=u("CLS",0),r=0,o=[],d=function(e){if(!e.hadRecentInput){var t=o[0],i=o[o.length-1];r&&e.startTime-i.startTime<1e3&&e.startTime-t.startTime<5e3?(r+=e.value,o.push(e)):(r=e.value,o=[e]),r>a.value&&(a.value=r,a.entries=o,n())}},p=c("layout-shift",d);p&&(n=m(i,a,t),s((function(){p.takeRecords().map(d),n()})),f((function(){r=0,T=-1,a=u("CLS",0),n=m(i,a,t)})))},E={passive:!0,capture:!0},w=new Date,L=function(e,t){i||(i=t,a=e,r=new Date,k(removeEventListener),b())},b=function(){if(a>=0&&a<r-w){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+a};o.forEach((function(t){t(e)})),o=[]}},F=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){L(e,t),a()},i=function(){a()},a=function(){removeEventListener("pointerup",n,E),removeEventListener("pointercancel",i,E)};addEventListener("pointerup",n,E),addEventListener("pointercancel",i,E)}(t,e):L(t,e)}},k=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,F,E)}))},C=function(e,t){var n,r=h(),p=u("FID"),v=function(e){e.startTime<r.firstHiddenTime&&(p.value=e.processingStart-e.startTime,p.entries.push(e),d.add(p),n())},l=c("first-input",v);n=m(e,p,t),l&&s((function(){l.takeRecords().map(v),l.disconnect()}),!0),l&&f((function(){var r;p=u("FID"),n=m(e,p,t),o=[],a=-1,i=null,k(addEventListener),r=v,o.push(r),b()}))},P=function(e,t){var n,i=h(),a=u("LCP"),r=function(e){var t=e.startTime;t<i.firstHiddenTime&&(a.value=t,a.entries.push(e)),n()},o=c("largest-contentful-paint",r);if(o){n=m(e,a,t);var p=function(){d.has(a)||(o.takeRecords().map(r),o.disconnect(),d.add(a),n())};["keydown","click"].forEach((function(e){addEventListener(e,p,{once:!0,capture:!0})})),s(p,!0),f((function(i){a=u("LCP"),n=m(e,a,t),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,d.add(a),n()}))}))}))}},D=function(e){var t,n=u("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0)return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}}}]);
//# sourceMappingURL=3.51d424ad.chunk.js.map