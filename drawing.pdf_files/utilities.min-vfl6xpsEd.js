define(["require","exports","comments2/components/annotation_instructional_tooltip_pane/utilities"],(function(t,e,i){"use strict";var n;function h(t,e,i){return void 0===e&&(e=0),void 0===i&&(i=1),Math.min(Math.max(e,t),i)}function r(t){var e=t.x,i=t.y,n=t.width,r=t.height;return{x:h(e),y:h(i),width:h(n),height:h(r)}}function o(t,e,i){var n=i?i.x:t.left-e.left,h=i?i.y:t.top-e.top;return r({x:n/e.width,y:h/e.height,width:t.width/e.width,height:t.height/e.height})}function a(t,e){var i=t.x+t.width-e.width,n=t.y+t.height-e.height;return{x:Math.min(i,e.x),y:Math.min(n,e.y),width:e.width,height:e.height}}function g(t,e){var i=t.x+t.width,n=t.y+t.height,r=t.x,o=t.y,a={x:h(e.x,r,i),y:h(e.y,o,n)},g=h(e.x+e.width,r,i),u=h(e.y+e.height,o,n);return{x:a.x,y:a.y,width:g-a.x,height:u-a.y}}Object.defineProperty(e,"__esModule",{value:!0}),e.COMPONENT_CLASS_NAME="sc-annotation-conductor-layer",(n=e.Surface||(e.Surface={}))[n.None=0]="None",n[n.Text=1]="Text",n[n.Link=2]="Link",n[n.Creation=3]="Creation",e.toPoint=function(t){var e=t.currentTarget.getBoundingClientRect(),i=e.top,n=e.left,h=e.width,r=e.height,o=[t.clientX-n,t.clientY-i];return{x:o[0]/h,y:o[1]/r}},e.normalizeValue=h,e.normalizeRegion=r,e.createRectangleFromPixelRectangle=function(t,e){return o({left:t.x,top:t.y,width:t.width,height:t.height},{left:e.x,top:e.y,width:e.width,height:e.height})},e.createNormalizedRegion=o,e.createPlacementFromNormalizedRegion=function(t,e,i){return{x:t.x*e,y:t.y*i,width:t.width*e,height:t.height*i}},e.createAnnotation=function(t,e){return void 0!==e?{type:"document",regionType:e,regions:t}:{type:"image",region:t[0]}},e.applyEdgeBoundingByPosition=a,e.applyEdgeBoundingByDimensions=g;function u(t){var e=t.target.tagName.toUpperCase();return"P"===e||"TEXT"===e}function d(t){return"A"===t.target.tagName}function c(t){return"IMG"===t.target.tagName}function y(t,e){return t.target.classList.contains(e)}e.applyEdgeBounding=function(t,e,i){return(function(t,e){var i=t.x,n=t.y,h=t.width,r=t.height,o=i+h,a=n+r,g=e.x+e.width,u=e.y+e.height;return h<=8&&o+8>g&&(i=o-8,h=8),r<=8&&a+8>u&&(n=a-8,r=8),{x:i,y:n,width:h,height:r}})("drag"===i?a(e,t):g(e,t),e)},e.getTextSelectionRange=function(){var t=window.getSelection();if(t)return t.getRangeAt(0)},e.getSurfaceFromEvt=function(t){return d(t)?e.Surface.Link:u(t)?e.Surface.Text:y(t,e.COMPONENT_CLASS_NAME)||y(t,i.COMPONENT_CLASS_NAME)||c(t)?e.Surface.Creation:e.Surface.None},e.isOnText=u,e.isOnLink=d,e.isOnImage=c,e.isOnDivWithClass=y,e.getOverlayElementPosition=function(t,e,i,n,h){var r,a,g=o(t,i);if(g.y*i.height>=n+h)r=(g.x+g.width/2)*i.width-n/2,a=g.y*i.height-n-h;else if((1-g.x-g.width)*i.width>=n)r=(g.x+g.width)*i.width+h,a=(g.y+g.height/2)*i.height-n/2;else if(g.x*i.width>=n)r=g.x*i.width-n-h,a=(g.y+g.height/2)*i.height-n/2;else if((1-g.y-g.height)*i.height>=n)r=(g.x+g.width/2)*i.width-n/2,a=(g.y+g.height)*i.height+h;else{var u=o(e,i);r=(u.x+u.width/2)*i.width-n/2,a=(u.y+u.height)*i.height+h}return{x:r,y:a}}}));
//# sourceMappingURL=utilities.min.js-vflV4b-8c.map