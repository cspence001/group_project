define(["require","exports","tslib","react","spectrum/button","spectrum/icon_action","spectrum/icon_adminsymbol","spectrum/modal","modules/clean/ajax","modules/clean/components/modals/show_modal","modules/clean/contacts/contact_token_state","modules/clean/contacts/tokenizer","modules/clean/web_user_action_logger","modules/clean/web_user_action_events","modules/clean/react/css","modules/clean/react/teams/avatar/components","modules/clean/static_urls","modules/clean/teams/components/warning_box","modules/clean/teams/modals/member_info_modal_header","modules/clean/viewer","modules/core/exception","modules/core/i18n","modules/core/notify","modules/clean/ux_analytics_utils","modules/clean/ux_analytics_modal_tracking","modules/clean/contacts/types","spectrum/tooltip","spectrum/tertiary_link","modules/core/browser"],(function(e,t,a,s,n,o,r,i,l,d,c,m,u,f,p,h,g,M,_,E,y,v,b,A,N,D,O,S,k){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=a.__importDefault(s),l=a.__importStar(l),h=a.__importStar(h),D=a.__importDefault(D),k=a.__importStar(k);var T,R,L=h.TeamUserAvatar;function C(e,t){u.WebUserActionLog.log(e,t,{source:"delete-user-modal"})}(function(e){e[e.LEGAL_HOLDS_FOR_TEAM_ADMINS=0]="LEGAL_HOLDS_FOR_TEAM_ADMINS",e[e.LEGAL_HOLDS_FOR_LOCKED_STATE_TEAM_ADMINS=1]="LEGAL_HOLDS_FOR_LOCKED_STATE_TEAM_ADMINS",e[e.NEED_TEAM_ADMIN_PERMISSIONS=2]="NEED_TEAM_ADMIN_PERMISSIONS"})(T=t.ErrorMsgType||(t.ErrorMsgType={})),(function(e){e[e.MAIN=0]="MAIN",e[e.DELETE=1]="DELETE",e[e.OFFBOARD=2]="OFFBOARD",e[e.ERROR_MSG=3]="ERROR_MSG"})(R=t.ModalStep||(t.ModalStep={}));var I=(function(e){function t(t){var o,r=e.call(this,t)||this;r.onSubmit=function(){r.setState({submitting:!0});var e=r.props,t=e.userId,s=e.accountId,n=e.invited,o=e.email,i=e.isUserSuspended,d=e.teamJoinDate,c=e.storageUsed,m=e.accountPhotoUrl,u=e.recoverUserCallback,f=e.successCallback,p=e.teamAuthParams,h={user_id:t,account_id:s,should_disable:r.state.step===R.DELETE};r.state.step===R.DELETE&&(h=a.__assign(a.__assign({},h),{transfer_files:r.state.transferFiles,emails:"on"===r.state.transferFiles&&r.state.transferFilesToken?r.state.transferFilesToken.email:void 0,delete_on_unlink:r.state.deleteOnUnlink})),l.WebRequest({url:"/account/team/remove_user",data:h,subject_user:r.state.user,teamAuthParams:p,complete:function(){return r.setState({submitting:!1})},skipNotifyError:!0,success:function(e){var a,l,p=null,h=v.intl.formatMessage({id:"Lx38Vy",defaultMessage:"Restore"}),g=null;r.state.step===R.DELETE?(a="deleted",l=v.intl.formatMessage({id:"hMoH2b",defaultMessage:"Deleted {name}’s account completely."},{name:r.displayName})):(a="converted",l=v.intl.formatMessage({id:"tz+hpu",defaultMessage:"Converted {name}’s account to individual Dropbox Basic"},{name:r.displayName})),"on"===r.state.transferFiles||n||r.state.step!==R.DELETE||(p={user_id:t,account_id:s,user_name:r.displayName,email:o,is_user_suspended:i,team_join_date:d,storage_used:c,account_photo_url:m},g=u),r.close(),f(a,l,p,g,h)},error:function(e,t,a){"This user is currently under a legal hold."===a?r.setState({step:R.ERROR_MSG,errorMsg:T.LEGAL_HOLDS_FOR_TEAM_ADMINS}):"Only a team admin, can convert this account to a Basic account."===a?r.setState({step:R.ERROR_MSG,errorMsg:T.NEED_TEAM_ADMIN_PERMISSIONS}):"This user is currently under a legal hold, in a locked team."===a?r.setState({step:R.ERROR_MSG,errorMsg:T.LEGAL_HOLDS_FOR_LOCKED_STATE_TEAM_ADMINS}):a?b.Notify.error(a):(b.Notify.error(v.intl.formatMessage({id:"HPL0VF",defaultMessage:"There was a problem completing this request"})),y.reportException({err:new Error(a),severity:"critical",tags:["delete_user_modal"]}),r.close())}})},r.onPrimaryAction=function(){var e=r.state,t=e.step,a=e.transferFiles,s=e.transferFilesToken;if(t===R.MAIN){if("on"===a&&(!s||r.contactsValidator(s).state!==c.ContactTokenState.ok))return void b.Notify.error(v.intl.formatMessage({id:"X/E7P2",defaultMessage:"Please enter a valid name or email address"}));r.setState({step:R.DELETE})}else t===R.ERROR_MSG?r.close():r.onSubmit()},r.onLink=function(){r.setState({step:R.OFFBOARD})},r.onConvertAccountLink=function(){C(r.state.user.id,f.WebUserActionLogEvent.CLICK_CONVERT_INDIVIDUAL_ACCOUNT),r.onLink()},r.redirectToContactForm=function(){k.redirect("/team/admin/help")},r.onReviewSummaryLink=function(){C(r.state.user.id,f.WebUserActionLogEvent.CLICK_REVIEW_SUMMARY_DELETE_USER),r.onLink()},r.onLearnMoreConversionLink=function(){C(r.state.user.id,f.WebUserActionLogEvent.CLICK_LEARN_MORE_ACCOUNT_CONVERSION)},r.onCancel=function(){r.state.step===R.MAIN||r.props.offboardOnly?r.close():r.setState({step:R.MAIN})},r.onTransferFilesChange=function(e){r.setState({transferFiles:e.currentTarget.value})},r.onDeleteOnUnlinkChange=function(e){r.setState({deleteOnUnlink:e.currentTarget.value})},r.onUpdateContacts=function(e){r.setState({transferFilesToken:e&&e[0]})},r.PRIMARY_ACTION_LABELS=((o={})[R.MAIN]=v.intl.formatMessage({id:"LgJiOW",defaultMessage:"Continue"}),o[R.DELETE]=v.intl.formatMessage({id:"F1PCBh",defaultMessage:"Delete account"}),o[R.OFFBOARD]=v.intl.formatMessage({id:"wtDwxp",defaultMessage:"Convert account"}),o[R.ERROR_MSG]=v.intl.formatMessage({id:"nOO9Qi",defaultMessage:"OK"}),o),r.primaryAction=function(e){return s.default.createElement("span",null,r.state.submitting&&s.default.createElement("span",{className:"dbmodal-loading",key:"loading"},s.default.createElement("img",{src:g.static_url("/static/images/icons/ajax-loading-small-vfl3Wt7C_.gif"),alt:v.intl.formatMessage({id:"jybGUg",defaultMessage:"Loading"})})),s.default.createElement(n.Button,{disabled:r.state.submitting,variant:"primary",onClick:e},r.PRIMARY_ACTION_LABELS[r.state.step]))},r.secondaryAction=function(e){return r.state.step!==R.ERROR_MSG?s.default.createElement(n.Button,{disabled:r.state.submitting,variant:"secondary",onClick:e},v.intl.formatMessage({id:"d9/SE1",defaultMessage:"Cancel"})):s.default.createElement("noscript",null)},r.getLink=function(){var e=v.intl.formatMessage({id:"WsvIqV",defaultMessage:"Convert to individual Dropbox Basic account instead"}),t=r.onConvertAccountLink;if(r.state.step===R.OFFBOARD||r.state.step===R.ERROR_MSG){if(r.state.errorMsg!==T.LEGAL_HOLDS_FOR_LOCKED_STATE_TEAM_ADMINS)return s.default.createElement("noscript",null);e=v.intl.formatMessage({id:"SDLkWB",defaultMessage:"Contact us"}),t=r.redirectToContactForm}if(r.props.invited||r.props.noOffboardDueToAAL){var a=r.props.invited?v.intl.formatMessage({id:"2imYtb",defaultMessage:"Can’t convert account because they haven’t joined the team"}):v.intl.formatMessage({id:"Xi5sxu",defaultMessage:"Can’t convert account because they’ve never signed in"});return s.default.createElement(O.Tooltip,{tooltipContent:a,positioning:"above"},s.default.createElement(S.TertiaryLink,{className:"disabled-offboard-link"},e))}return s.default.createElement(S.TertiaryLink,{onClick:t},e)},r.setModalBodyRef=function(e){r.modalBody=e},r.contactsFilter=function(e){var t=e.email,a=e.type;return t!==r.props.email&&a!==D.default.NEW_STYLE_GROUP},r.contactsValidator=function(e){var t={state:c.ContactTokenState.ok};return e.on_team||(t={state:c.ContactTokenState.invalid,msg:v.intl.formatMessage({id:"PVw1P4",defaultMessage:"This person isn’t on your team"})}),t},r.close=function(){r.props.cancelCallback&&r.props.cancelCallback(),r.setState({open:!1}),A.dispatchModalClosed()},r.onReady=function(){A.dispatchModalOpened()};var i=t.userId,d=t.accountId,m=t.offboardOnly;if(!i&&!d)throw new Error("Must provide user or account id");return r.state={transferFiles:"on",deleteOnUnlink:r.showRemoteWipe?"on":void 0,submitting:!1,step:m?R.OFFBOARD:R.MAIN,open:!0,user:E.Viewer.get_viewer().get_user_by_id(window.ensemble.viewer.getActiveUser().userId)},C(r.state.user.id,f.WebUserActionLogEvent.OPEN_DELETE_USER_MODAL),r}return a.__extends(t,e),t.prototype.render=function(){var e,t=this.props.customModalClass,a=void 0===t?"":t;switch(this.state.step){case R.MAIN:case R.DELETE:e=v.intl.formatMessage({id:"Dwje+M",defaultMessage:"Delete {display_name}’s account completely"},{display_name:this.displayName});break;case R.OFFBOARD:e=v.intl.formatMessage({id:"k1SvNl",defaultMessage:"Convert {display_name}’s account to individual Dropbox Basic account"},{display_name:this.displayName});break;case R.ERROR_MSG:e=v.intl.formatMessage({id:"BaU4v4",defaultMessage:"Can’t convert to a Dropbox Basic account"})}return s.default.createElement(i.UtilityModal,{className:"delete-user-modal "+a,overlayClassName:"delete-user-modal-overlay",title:e,width:"699px",primaryAction:this.primaryAction,secondaryAction:this.secondaryAction,link:this.getLink,onPrimaryAction:this.onPrimaryAction,onSecondaryAction:this.onCancel,onReady:this.onReady,onRequestClose:this.close,overlayClickClose:!1,ariaLabel:v.intl.formatMessage({id:"iC9NTD",defaultMessage:"Delete member"}),open:this.state.open,shouldRequestCloseOnActions:!1},s.default.createElement(N.UXAnalyticsModalTracking,{id:"delete-user-modal"}),s.default.createElement("div",{tabIndex:0,ref:this.setModalBodyRef},this.state.step===R.MAIN&&this.renderMainModal(),this.state.step===R.DELETE&&this.renderDeleteModal(),this.state.step===R.OFFBOARD&&this.renderOffboardModal(),this.state.step===R.ERROR_MSG&&this.renderOffboardErrorModal()))},t.prototype.componentDidUpdate=function(){this.modalBody&&this.state.step===R.OFFBOARD&&this.modalBody.focus()},t.prototype.renderMainModal=function(){return[this.renderMemberInfoHeader(),this.renderMergedPersonalAccountWarning(),this.renderDeleteInfoMsg(),s.default.createElement("div",{className:"delete-settings"},this.renderTransferFilesSetting(),this.renderRemoteWipeSetting()),s.default.createElement("span",{className:"step-label"},v.intl.formatMessage({id:"C12AhB",defaultMessage:"Step 1 of 2"}))]},t.prototype.renderDeleteModal=function(){var e=[{icon:s.default.createElement(o.IconAction,{name:"delete"}),text:v.intl.formatMessage({id:"QUsVjS",defaultMessage:"Account will be deleted"})},{icon:s.default.createElement(o.IconAction,{name:"permissions"}),text:v.intl.formatMessage({id:"gJ4J7a",defaultMessage:"Member will no longer have access to the account"})}];"on"===this.state.transferFiles&&this.state.transferFilesToken&&e.push({icon:s.default.createElement(o.IconAction,{name:"move"}),text:v.intl.formatMessage({id:"nPLVOL",defaultMessage:"Member’s content will immediately be transferred to {email}"},{email:this.state.transferFilesToken.email})}),"on"===this.state.deleteOnUnlink&&e.push({icon:s.default.createElement(o.IconAction,{name:"permanently-delete"}),text:v.intl.formatMessage({id:"YDIDVf",defaultMessage:"All synced content will be deleted from this member’s devices the next time they come online"})}),this.props.numApiApps&&e.push({icon:s.default.createElement(o.IconAction,{name:"link",className:"link-icon"}),text:v.intl.formatMessage({id:"3QRiaZ",defaultMessage:"Member has {num_api_apps} API apps that will stop working for their users"},{num_api_apps:this.props.numApiApps})});var t=[{icon:s.default.createElement(r.IconAdminsymbol,{name:"additional-license"}),text:v.intl.formatMessage({id:"/GDCqQ",defaultMessage:"{team_name} will get back one license"},{team_name:this.props.teamName})},{icon:s.default.createElement(o.IconAction,{name:"new-folder"}),text:v.intl.formatMessage({id:"5bg3kl",defaultMessage:"{team_name} will keep all content"},{team_name:this.props.teamName})}],a="";return"on"===this.state.transferFiles&&this.state.transferFilesToken&&"suspended"===this.state.transferFilesToken.join_state&&(a=v.intl.formatMessage({id:"pAHhp/",defaultMessage:"You’ve chosen to transfer account files to a suspended member, {name}. This member won’t be able to access any files until their suspension is removed."},{name:this.state.transferFilesToken.name||this.state.transferFilesToken.email})),[this.renderSummaryModal(e,t,void 0,void 0,a),s.default.createElement("span",{className:"step-label"},v.intl.formatMessage({id:"JRBRTW",defaultMessage:"Step 2 of 2"}))]},t.prototype.renderOffboardErrorModal=function(){return this.state.errorMsg===T.LEGAL_HOLDS_FOR_TEAM_ADMINS?s.default.createElement("div",null,v.intl.formatMessage({id:"d/lDff",defaultMessage:"{display_name}’s content is currently being held. To convert this member’s account to a Basic account, you’ll first need to remove them from the hold on the <a>legal holds</a> page."},{display_name:this.props.displayName,a:function(e){return s.default.createElement("a",{href:"/team/admin/settings/legal_holds"},e)}})):this.state.errorMsg===T.NEED_TEAM_ADMIN_PERMISSIONS?s.default.createElement("div",null,v.intl.formatMessage({id:"FNTreO",defaultMessage:"Only a team admin can convert {display_name}’s account to a Basic account."},{display_name:this.props.displayName})):this.state.errorMsg===T.LEGAL_HOLDS_FOR_LOCKED_STATE_TEAM_ADMINS?s.default.createElement("div",null,v.intl.formatMessage({id:"cApiKm",defaultMessage:"%(display_name)s’s content is held. You can release their content on the legal holds page once you’ve added billing info. Otherwise, contact us for help."},{display_name:this.props.displayName})):(b.Notify.error(v.intl.formatMessage({id:"HPL0VF",defaultMessage:"There was a problem completing this request"})),y.reportException({err:new Error("Unrecognized errorMsg type: "+this.state.errorMsg),severity:"critical",tags:["delete_user_modal"]}),this.close(),s.default.createElement("noscript",null))},t.prototype.renderOffboardModal=function(){var e=v.intl.formatMessage({id:"PEHHTL",defaultMessage:"Member won’t have access to team-owned folders, and any file transfers they created will be deleted"}),t=[{icon:s.default.createElement(r.IconAdminsymbol,{name:"personal-account"}),text:v.intl.formatMessage({id:"ONvAGg",defaultMessage:"Account will be disconnected from the team and converted to an individual account"})},{icon:s.default.createElement(o.IconAction,{name:"new-folder"}),text:v.intl.formatMessage({id:"ccIqqh",defaultMessage:"Member will keep unshared files and folders, and shared folders that they own"})},{icon:s.default.createElement(o.IconAction,{name:"permissions"}),text:e}];this.props.numApiApps&&t.push({icon:s.default.createElement(o.IconAction,{name:"link",className:"link-icon"}),text:v.intl.formatMessage({id:"3QRiaZ",defaultMessage:"Member has {num_api_apps} API apps that will stop working for their users"},{num_api_apps:this.props.numApiApps})}),t.push({icon:s.default.createElement(o.IconAction,{name:"new-paper-doc"}),text:v.intl.formatMessage({id:"oWtMAW",defaultMessage:"Member will still have access to Paper docs they own that aren’t shared"})});var a=[{icon:s.default.createElement(r.IconAdminsymbol,{name:"additional-license"}),text:v.intl.formatMessage({id:"/GDCqQ",defaultMessage:"{team_name} will get back one license"},{team_name:this.props.teamName})},{icon:s.default.createElement(r.IconAdminsymbol,{name:"company"}),text:v.intl.formatMessage({id:"M8QAlp",defaultMessage:"{team_name} will still keep team-owned folders"},{team_name:this.props.teamName})},{icon:s.default.createElement(o.IconAction,{name:"new-paper-doc"}),text:v.intl.formatMessage({id:"/1hVjo",defaultMessage:"You will become the owner of all shared Paper docs owned by this member"})}],n=v.intl.formatMessage({id:"ZK0Cyi",defaultMessage:"This option is permanent. Please review the list above carefully before converting, as members might retain company data. You won’t be able to restore the account or make any changes to it."});return this.renderSummaryModal(t,a,void 0,"/help/business/convert-to-individual",n)},t.prototype.renderMemberInfoHeader=function(){return s.default.createElement(_.MemberInfoModalHeader,{displayName:this.props.displayName,email:this.props.email,storageUsed:this.props.storageUsed,accountPhotoUrl:this.props.accountPhotoUrl,teamJoinDate:this.props.teamJoinDate})},t.prototype.renderMergedPersonalAccountWarning=function(){return!this.props.mergedPersonalAccount||this.props.invited?null:s.default.createElement("div",{className:"merged-personal-account-warning"},s.default.createElement(r.IconAdminsymbol,{name:"alert"}),s.default.createElement("div",null,v.intl.formatMessage({id:"36Zcm5",defaultMessage:"<b>Note:</b> This member merged an individual account with the {team_name} Dropbox account on {date}. They might have personal files in the account from before the merge. You can convert them to an individual Dropbox Basic account instead."},{team_name:this.props.teamName,date:this.props.teamJoinDate,b:function(e){return s.default.createElement("b",null,e)}}),s.default.createElement(n.Button,{onClick:this.onReviewSummaryLink,variant:"styleless"},v.intl.formatMessage({id:"MH6qlB",defaultMessage:"Review summary before converting"}))))},t.prototype.renderDeleteInfoMsg=function(){return this.props.deleteInfoMsg?s.default.createElement("div",{className:"delete-info-msg"},this.props.deleteInfoMsg):null},t.prototype.renderTransferFilesSetting=function(){return s.default.createElement("div",{className:"transfer_files_setting"},s.default.createElement("div",{className:"verbal_setting_explanation"},v.intl.formatMessage({id:"KMtIDp",defaultMessage:"Do you want to transfer this member’s file content to another team member?"})),s.default.createElement("div",{className:"deactivate_or_remove_setting_option"},s.default.createElement("label",null,s.default.createElement("input",{name:"transfer_files",type:"radio",value:"on",checked:"on"===this.state.transferFiles,"aria-checked":"on"===this.state.transferFiles,"aria-label":"Yes",onChange:this.onTransferFilesChange}),v.intl.formatMessage({id:"LtVgfK",defaultMessage:"Transfer now"})),this.renderTokenizer()),s.default.createElement("div",{className:"deactivate_or_remove_setting_option"},s.default.createElement("label",null,s.default.createElement("input",{name:"transfer_files",type:"radio",value:"off",checked:"off"===this.state.transferFiles,"aria-checked":"off"===this.state.transferFiles,"aria-label":"No",onChange:this.onTransferFilesChange}),v.intl.formatMessage({id:"BssyWI",defaultMessage:"Transfer later"}),this.renderEvhMessage())))},t.prototype.renderTokenizer=function(){var e=this.props.customContactsDataSourceFactory,t=this.state.transferFilesToken&&{tokens:[this.state.transferFilesToken]};return s.default.createElement(m.ContactsTokenizer,{onContentsChange:this.onUpdateContacts,placeholder:v.intl.formatMessage({id:"0Jk4U/",defaultMessage:"Recipient’s name or email"}),populatedInputData:t,user:this.state.user,customContactFilter:this.contactsFilter,customContactValidator:this.contactsValidator,disabled:"off"===this.state.transferFiles,customContactsDataSourceFactory:e})},t.prototype.renderEvhMessage=function(){return this.props.evhEndDate?s.default.createElement("div",{className:"evh-message"},v.intl.formatMessage({id:"A0f9t6",defaultMessage:"You can transfer content until <b>{date}</b>"},{b:function(e){return s.default.createElement("span",{className:"evh-date"},e)},date:this.props.evhEndDate})):null},t.prototype.renderRemoteWipeSetting=function(){return this.showRemoteWipe?s.default.createElement("div",{className:"remote_wipe_setting"},s.default.createElement("div",{className:"verbal_setting_explanation"},v.intl.formatMessage({id:"NLObc3",defaultMessage:"Do you want to delete content from this member’s devices the next time they come online?"})),s.default.createElement("div",{className:"deactivate_or_remove_setting_option"},s.default.createElement("label",null,s.default.createElement("input",{name:"delete_on_unlink",type:"radio",value:"on",checked:"on"===this.state.deleteOnUnlink,"aria-checked":"on"===this.state.deleteOnUnlink,"aria-label":"Yes",onChange:this.onDeleteOnUnlinkChange}),v.intl.formatMessage({id:"U5fgWD",defaultMessage:"Yes"}))),s.default.createElement("div",{className:"deactivate_or_remove_setting_option"},s.default.createElement("label",null,s.default.createElement("input",{name:"delete_on_unlink",type:"radio",value:"off",checked:"off"===this.state.deleteOnUnlink,"aria-checked":"off"===this.state.deleteOnUnlink,"aria-label":"No",onChange:this.onDeleteOnUnlinkChange}),v.intl.formatMessage({id:"gWxS/S",defaultMessage:"No"})))):null},t.prototype.renderSummaryModal=function(e,t,a,n,o){return s.default.createElement("div",null,o&&s.default.createElement(M.WarningBox,{warningText:o}),a&&s.default.createElement("div",null,a),s.default.createElement("div",{className:"user-summary"},s.default.createElement("div",{className:"summary-header"},s.default.createElement(L,{name:this.props.displayName,email:this.props.email,photo_url:this.props.accountPhotoUrl})),s.default.createElement("div",{className:"summary-items"},e.map(this.renderSummaryItem))),s.default.createElement("div",{className:"team-summary"},s.default.createElement("div",{className:"summary-header"},s.default.createElement("img",{src:g.static_url("/static/images/teams/building-vflJW1t3P.png"),alt:v.intl.formatMessage({id:"IYiHJp",defaultMessage:"Team"})}),s.default.createElement("span",{className:"team-name"},this.props.teamName)),s.default.createElement("div",{className:"summary-items"},t.map(this.renderSummaryItem))),n&&s.default.createElement("div",{className:"full-summary-link"},s.default.createElement("a",{href:n,onClick:this.onLearnMoreConversionLink,target:"_blank",rel:"noopener noreferrer"},v.intl.formatMessage({id:"KvFh7N",defaultMessage:"Learn more about account conversion"})," ")),o&&s.default.createElement("div",{className:"summary-warning-spacing"}))},t.prototype.renderSummaryItem=function(e){return s.default.createElement("div",{key:e.text,className:"summary-item"},s.default.createElement("span",{className:"summary-icon"},e.icon),s.default.createElement("span",{className:"summary-text"},e.text))},Object.defineProperty(t.prototype,"displayName",{get:function(){return this.props.displayName||this.props.email},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"showRemoteWipe",{get:function(){return!this.props.invited&&!this.props.hideRemoteWipe&&!this.props.noOffboardDueToAAL},enumerable:!0,configurable:!0}),t})(s.default.Component);t.DeleteUserModal=p.requireCssWithComponent(I,["/static/css/react/contacts_tokenizer-vflPxjRxg.css","/static/css/teams/admin_team_modals-vflzyAU0s.css"]),t.showDeleteUserModal=function(e){return d.showModal(s.default.createElement(t.DeleteUserModal,a.__assign({},e)))}}));
//# sourceMappingURL=delete_user_modal.min.js-vflJLbiIf.map