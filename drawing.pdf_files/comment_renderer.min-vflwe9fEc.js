define(["require","exports","tslib","react","comments2/components/comment_avatar","comments2/components/comment_editor/components/readonly_editor_container","comments2/components/comment_editor/components/readonly_draft_component"],(function(e,n,t,o,r,m,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c=(function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(n,e),n.prototype.render=function(){var e=this.props,n=e.author,t=e.children,c=e.annotation,i=this.props.commentAvatarComponent,s=void 0===i?r.CommentAvatar:i,p=o.createElement("div",null,o.createElement(a.ReadonlyDraftComponent,{annotation:c,readOnly:!0}));return o.createElement(m.ReadonlyEditorContainer,Object.assign({},this.props),o.createElement("div",{className:"sc-comment-renderer-inner"},o.createElement(s,{user:n}),t&&"function"==typeof t?t(p):p))},n})((o=t.__importStar(o)).Component);n.CommentRenderer=c}));
//# sourceMappingURL=comment_renderer.min.js-vfl_4OeGn.map