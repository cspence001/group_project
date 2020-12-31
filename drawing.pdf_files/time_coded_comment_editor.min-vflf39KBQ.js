define(["require","exports","tslib","react","comments2/components/comment/annotation_toggle","comments2/components/comment/time_coded_comment","comments2/components/comment_editor/comment_editor"],(function(e,t,n,o,r,i,m){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=(function(e){function t(){var t=e.apply(this,arguments)||this;return t.onPost=function(e){var n=t.props,o=n.onPost,r=n.pendingAnnotation;o&&o(e,r)},t}return n.__extends(t,e),Object.defineProperty(t.prototype,"timeCode",{get:function(){return i.calculateTimeCode(this.props.pendingAnnotation.time)},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this.props,t=e.playerIntegrationEnabled,i=e.tooltipComponent,a=n.__rest(e,["playerIntegrationEnabled","tooltipComponent"]),c=o.createElement(r.AnnotationToggle,{disabled:!t,label:this.timeCode});return i&&(c=o.createElement(i,null,c)),o.createElement(m.CommentEditor,Object.assign({},a,{annotation:c,onPost:this.onPost}))},t})((o=n.__importStar(o)).PureComponent);t.TimeCodedCommentEditor=a}));
//# sourceMappingURL=time_coded_comment_editor.min.js-vflwPAYPv.map