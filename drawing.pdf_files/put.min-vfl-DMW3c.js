define(["require","exports","redux-saga/effects","rondo/v1/index"],(function(e,t,n,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.putResolve=function(e){return function(t){return n.putResolve(e.action(t))}},t.put=function(e){return function(t){return u.isActionCreator(e)?n.put(e.action(t)):n.put(e,t)}}}));
//# sourceMappingURL=put.min.js-vflffZ0cm.map