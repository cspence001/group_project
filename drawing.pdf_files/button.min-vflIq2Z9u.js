define(["require","exports","tslib","react","modules/clean/react/sign_in/utils","modules/core/i18n","spectrum/button","classnames"],(function(t,n,e,i,r,o,s,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),i=e.__importDefault(i),a=e.__importDefault(a),n.SignInButton=function(t){var n=t.isPrimaryButton,u=t.title,l=t.icon,c=t.cont_url,_=e.__rest(t,["isPrimaryButton","title","icon","cont_url"]),d=c?{cont:c,register_cont:c}:void 0,m=r.getSignInAndContinueUrl(d),f=n?"primary":"secondary";return i.default.createElement(s.Button,e.__assign({className:a.default("sign-in-link","control__button",{"control__button--collapsed":!!l}),variant:f,href:m},_),l||u||o.intl.formatMessage({id:"raLp6W",defaultMessage:"Sign in"}))},n.SignInButton.defaultProps={isPrimaryButton:!0}}));
//# sourceMappingURL=button.min.js-vflBEYfyb.map