define(["require","exports","tslib","classnames","prop-types","react","spectrum/button","spectrum/popover","modules/clean/filepath","modules/clean/react/file_viewer/logging","modules/clean/react/file_viewer/constants","modules/clean/react/file_viewer/utils","modules/clean/react/share_download/util","modules/clean/react/share_download/models","modules/clean/react/share_download/util","modules/clean/share_download/types","modules/clean/react/title_bubble","modules/core/i18n","modules/core/browser_detection","modules/clean/react/file_viewer_sidebar/buttons/icon","modules/clean/loggers/folder_preview_logger","modules/clean/react/sticky_position"],(function(e,t,o,s,i,l,n,r,a,p,d,c,u,f,m,h,g,b,w,_,v,D){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=o.__importDefault(s),i=o.__importDefault(i),l=o.__importDefault(l),a=o.__importStar(a);var C=function(e){return w.is_mobile_or_tablet()||!e.title?l.default.createElement(l.default.Fragment,null,e.children):l.default.createElement(g.TitleBubble,{content:e.title,isTargetPositionFixed:!0,position:e.isCollapsed?D.StickyPosition.BOTTOM_ALIGN_LEFT:D.StickyPosition.LEFT},e.children)},y=(function(e){function t(t){var o=e.call(this,t)||this;return o.state={isDisabled:!0},o}return o.__extends(t,e),t.prototype.componentDidMount=function(){this.setState({isDisabled:this.props.isDisabled})},t.prototype.render=function(){var e={"download-button":!0,control__button:!0,"control__button--collapsed":this.props.isCollapsed};return this.props.className&&(e[this.props.className]=!0),l.default.createElement(C,{title:this.props.title,isCollapsed:this.props.isCollapsed},l.default.createElement(n.Button,{className:s.default(e),style:{display:"-webkit-box"},variant:this.props.importance,disabled:this.state.isDisabled,onClick:this.props.onClick,"aria-label":this.props.title},this.props.children))},t.defaultProps={isDisabled:!1,importance:"secondary"},t})(l.default.Component),P=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.render=function(){var e=this;return l.default.createElement(y,{isDisabled:this.props.isDisabled,onClick:function(t){t.preventDefault(),e.props.onClick&&e.props.onClick(e.props.option),e.props.option.handler(),e.props.folderPreviewSession?v.logEvent(e.props.option.userAction,e.props.folderPreviewSession):p.logUserAction(e.props.option.userAction,c.getSplitButtonUserActionContext(d.SplitButtonActionLocation.Main,e.props.location))},importance:this.props.importance,isCollapsed:this.props.isCollapsed,title:this.props.title},this.props.isCollapsed?l.default.createElement(_.ButtonIcon,{name:"download-file",isPrimary:"primary"===this.props.importance}):this.props.targetText)},t})(l.default.Component);t.DownloadSimpleButton=P;var M=(function(e){function t(t){var o=e.call(this,t)||this;return o.onPopoverSelection=function(e){u.callOptionHandler(e,d.SplitButtonActionLocation.Split,o.props.folderPreviewSession,o.props.onClick,o.props.location)()},o.state={isDisabled:!0},o}return o.__extends(t,e),t.prototype.componentDidMount=function(){this.setState({isDisabled:this.props.isDisabled})},t.prototype.renderIcon=function(){return l.default.createElement(_.ButtonIcon,{name:"download-file",isPrimary:"primary"===this.props.importance,"aria-label":this.props.title})},t.prototype.renderPopover=function(){var e=this.props.options.map((function(e){return l.default.createElement(r.PopoverContentItem,{key:e.text,value:e,disabled:e.isDisabled},e.text)})),t={"download-button":!0,control__button:!0,"control__button--collapsed":this.props.isCollapsed};return l.default.createElement(r.Popover,{key:"download-dropdown",onSelection:this.onPopoverSelection},l.default.createElement(r.PopoverTrigger,{"aria-label":this.props.title},l.default.createElement(C,{title:this.props.title},l.default.createElement(n.Button,{className:s.default(t),tagName:"span",variant:this.props.importance,disabled:this.state.isDisabled,"aria-label":this.props.title},this.props.isCollapsed?this.renderIcon():this.props.targetText))),l.default.createElement(r.PopoverContent,{attachment:"right"},e))},t.prototype.render=function(){return this.props.isDisabled?l.default.createElement(y,{isDisabled:!0,importance:this.props.importance,title:this.props.title,isCollapsed:this.props.isCollapsed},this.props.isCollapsed?this.renderIcon():this.props.targetText):this.renderPopover()},t.defaultProps={importance:"secondary"},t})(l.default.Component);t.DownloadDropdown=M;var S=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.getTargetText=function(e){if(u.isDownloadAllowed(this.props.sharePermission))return e>1?{title:b.intl.formatMessage({id:"0YRjqy",defaultMessage:"Download ▾"})}:{title:b.intl.formatMessage({id:"pHnJw0",defaultMessage:"Download"})};if(this.props.user&&this.props.user.is_cdm_member){var t=a.filename(this.props.user.cdm_tmf_path);return t.length>25?{title:b.intl.formatMessage({id:"6m85k6",defaultMessage:"Add to my member folder"})}:{label:b.intl.formatMessage({id:"ck1w+U",defaultMessage:"Add to <strong>{cdm_tmf_name}</strong> folder"},{cdm_tmf_name:t,strong:function(e){return l.default.createElement("strong",{style:{fontWeight:800}},e)}}),title:b.intl.formatMessage({id:"nzqkZQ",defaultMessage:"Add to {cdm_tmf_name} folder"},{cdm_tmf_name:t})}}return{title:b.intl.formatMessage({id:"N8ovVA",defaultMessage:"Add to Dropbox"})}},t.prototype.getTooltipLabel=function(){return h.isPendingEntry(this.props.copyable)?b.intl.formatMessage({id:"DldXvN",defaultMessage:"Download is unavailable while file is uploading."}):b.intl.formatMessage({id:"gUTeT9",defaultMessage:"Downloads disabled."})},t.prototype.render=function(){var e=m.getDownloadOptions(this.props.sharePermission,this.props.sharedLinkInfo,this.props.shareToken,this.props.copyable,this.context.authModalKind||null,this.props.encryptionOptions,this.props.user,this.props.folderPreviewSession);if(this.props.downloadOnly){var t=new f.ShareDownloadActionOption({isDisabled:!0}),o=!0;return u.isDownloadAllowed(this.props.sharePermission)&&(t=f.ShareDownloadActionOption.buildDirectOption(this.props.sharedLinkInfo,null,this.props.encryptionOptions),o=!1),l.default.createElement(P,{isDisabled:o,targetText:b.intl.formatMessage({id:"pHnJw0",defaultMessage:"Download"}),title:b.intl.formatMessage({id:"pHnJw0",defaultMessage:"Download"}),option:t,onClick:this.props.onClick,location:this.props.location,importance:this.props.importance,isCollapsed:this.props.isCollapsed,folderPreviewSession:this.props.folderPreviewSession})}if(0===e.length)return l.default.createElement(M,{targetText:b.intl.formatMessage({id:"pHnJw0",defaultMessage:"Download"}),isDisabled:!0,options:[new f.ShareDownloadActionOption({isDisabled:!0})],onClick:this.props.onClick,location:this.props.location,title:this.getTooltipLabel(),importance:this.props.importance,isCollapsed:this.props.isCollapsed,folderPreviewSession:this.props.folderPreviewSession});var s=this.getTargetText(e.length);return 1===e.length?l.default.createElement(P,{isDisabled:!1,targetText:s.label||s.title,title:s.title,option:e[0],onClick:this.props.onClick,location:this.props.location,importance:this.props.importance,isCollapsed:this.props.isCollapsed,folderPreviewSession:this.props.folderPreviewSession}):l.default.createElement(M,{targetText:s.label||s.title,options:e,onClick:this.props.onClick,location:this.props.location,isDisabled:!1,importance:this.props.importance,isCollapsed:this.props.isCollapsed,title:b.intl.formatMessage({id:"pHnJw0",defaultMessage:"Download"}),folderPreviewSession:this.props.folderPreviewSession})},t.contextTypes={authModalKind:i.default.oneOf(["immediate","download",null])},t})(l.default.Component);t.ShareDownloadButton=S}));
//# sourceMappingURL=button_component.min.js-vflIbGktF.map