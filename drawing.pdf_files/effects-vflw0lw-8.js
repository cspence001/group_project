define(["exports","../common/io-6de156f3"],(function(e,t){"use strict";var n=function(e){return{done:!0,value:e}},r={};function a(e){return t.channel(e)?"channel":t.stringableFunc(e)?String(e):t.func(e)?e.name:String(e)}function o(e,a,o){var u,c,f,l=a;function i(t,a){if(l===r)return n(t);if(a&&!c)throw l=r,a;u&&u(t);var o=a?e[c](a):e[l]();return l=o.nextState,f=o.effect,u=o.stateUpdater,c=o.errorState,l===r?n(t):f}return t.makeIterator(i,(function(e){return i(null,e)}),o)}function u(e,n){for(var r=arguments.length,u=new Array(r>2?r-2:0),c=2;c<r;c++)u[c-2]=arguments[c];var f,l={done:!1,value:t.take(e)},i=function(e){return{done:!1,value:t.fork.apply(void 0,[n].concat(u,[e]))}},d=function(e){return f=e};return o({q1:function(){return{nextState:"q2",effect:l,stateUpdater:d}},q2:function(){return{nextState:"q1",effect:i(f)}}},"q1","takeEvery("+a(e)+", "+n.name+")")}function c(e,n){for(var r=arguments.length,u=new Array(r>2?r-2:0),c=2;c<r;c++)u[c-2]=arguments[c];var f,l,i={done:!1,value:t.take(e)},d=function(e){return{done:!1,value:t.fork.apply(void 0,[n].concat(u,[e]))}},v=function(e){return{done:!1,value:t.cancel(e)}},p=function(e){return f=e},q=function(e){return l=e};return o({q1:function(){return{nextState:"q2",effect:i,stateUpdater:q}},q2:function(){return f?{nextState:"q3",effect:v(f)}:{nextState:"q1",effect:d(l),stateUpdater:p}},q3:function(){return{nextState:"q1",effect:d(l),stateUpdater:p}}},"q1","takeLatest("+a(e)+", "+n.name+")")}function f(e,n){for(var r=arguments.length,u=new Array(r>2?r-2:0),c=2;c<r;c++)u[c-2]=arguments[c];var f,l={done:!1,value:t.take(e)},i=function(e){return{done:!1,value:t.call.apply(void 0,[n].concat(u,[e]))}},d=function(e){return f=e};return o({q1:function(){return{nextState:"q2",effect:l,stateUpdater:d}},q2:function(){return{nextState:"q1",effect:i(f)}}},"q1","takeLeading("+a(e)+", "+n.name+")")}function l(e,n,r){for(var u=arguments.length,c=new Array(u>3?u-3:0),f=3;f<u;f++)c[f-3]=arguments[f];var l,i,d={done:!1,value:t.actionChannel(n,t.sliding(1))},v=function(){return{done:!1,value:t.take(i)}},p=function(e){return{done:!1,value:t.fork.apply(void 0,[r].concat(c,[e]))}},q={done:!1,value:t.delay(e)},y=function(e){return l=e},s=function(e){return i=e};return o({q1:function(){return{nextState:"q2",effect:d,stateUpdater:s}},q2:function(){return{nextState:"q3",effect:v(),stateUpdater:y}},q3:function(){return{nextState:"q4",effect:p(l)}},q4:function(){return{nextState:"q2",effect:q}}},"q1","throttle("+a(n)+", "+r.name+")")}function i(e,n,a){for(var u=e,c=arguments.length,f=new Array(c>3?c-3:0),l=3;l<c;l++)f[l-3]=arguments[l];var i={done:!1,value:t.call.apply(void 0,[a].concat(f))},d={done:!1,value:t.delay(n)};return o({q1:function(){return{nextState:"q2",effect:i,errorState:"q10"}},q2:function(){return{nextState:r}},q10:function(e){if((u-=1)<=0)throw e;return{nextState:"q1",effect:d}}},"q1","retry("+a.name+")")}function d(e,n,r){for(var u=arguments.length,c=new Array(u>3?u-3:0),f=3;f<u;f++)c[f-3]=arguments[f];var l,i,d={done:!1,value:t.take(n)},v={done:!1,value:t.race({action:t.take(n),debounce:t.delay(e)})},p=function(e){return{done:!1,value:t.fork.apply(void 0,[r].concat(c,[e]))}},q=function(e){return{done:!1,value:e}},y=function(e){return l=e},s=function(e){return i=e};return o({q1:function(){return{nextState:"q2",effect:d,stateUpdater:y}},q2:function(){return{nextState:"q3",effect:v,stateUpdater:s}},q3:function(){return i.debounce?{nextState:"q1",effect:p(l)}:{nextState:"q2",effect:q(i.action),stateUpdater:y}}},"q1","debounce("+a(n)+", "+r.name+")")}e.actionChannel=t.actionChannel,e.all=t.all,e.apply=t.apply,e.call=t.call,e.cancel=t.cancel,e.cancelled=t.cancelled,e.cps=t.cps,e.delay=t.delay,e.effectTypes=t.effectTypes,e.flush=t.flush,e.fork=t.fork,e.getContext=t.getContext,e.join=t.join,e.put=t.put,e.putResolve=t.putResolve,e.race=t.race,e.select=t.select,e.setContext=t.setContext,e.spawn=t.spawn,e.take=t.take,e.takeMaybe=t.takeMaybe,e.debounce=function(e,n,r){for(var a=arguments.length,o=new Array(a>3?a-3:0),u=3;u<a;u++)o[u-3]=arguments[u];return t.fork.apply(void 0,[d,e,n,r].concat(o))},e.retry=function(e,n,r){for(var a=arguments.length,o=new Array(a>3?a-3:0),u=3;u<a;u++)o[u-3]=arguments[u];return t.call.apply(void 0,[i,e,n,r].concat(o))},e.takeEvery=function(e,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return t.fork.apply(void 0,[u,e,n].concat(a))},e.takeLatest=function(e,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return t.fork.apply(void 0,[c,e,n].concat(a))},e.takeLeading=function(e,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return t.fork.apply(void 0,[f,e,n].concat(a))},e.throttle=function(e,n,r){for(var a=arguments.length,o=new Array(a>3?a-3:0),u=3;u<a;u++)o[u-3]=arguments[u];return t.fork.apply(void 0,[l,e,n,r].concat(o))},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=effects.js-vflZhs-jL.map
