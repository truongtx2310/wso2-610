(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[1655],{41655:(e,t,n)=>{"use strict";n.r(t),n.d(t,{App:()=>L,default:()=>G});var r=n(38429),o=n(45688),i=n(70429),a=n(17189),u=n(8206),c=n(41671),l=n(96300),s=n(13654),T=n(67876),f=n(67127),p=n(20334),E=n(52983),d=n(38772),A=n(12641),m=n(69141),h=n(6855),S=n(45624),y=n(19277),g=n(76987),v=n(61621),_=n(19709),b=n(58515),O=n(25061),P=n(30870),R=n(48115);n(13572),n(64934);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var L=function(){var e,t,n,M,N,L,G=(0,m.I0)(),x=(0,m.v9)((function(e){return e.auth.username})),H=(0,m.v9)((function(e){return e.auth.loginInit})),k=(0,m.v9)((function(e){return e.auth.isPrivilegedUser})),j=(0,m.v9)((function(e){return e.config})),D=(0,m.v9)((function(e){var t;return null==e||null===(t=e.auth)||void 0===t?void 0:t.allowedScopes})),U=(0,m.v9)((function(e){var t,n;return null==e||null===(t=e.config)||void 0===t||null===(n=t.ui)||void 0===n?void 0:n.appTitle})),B=(0,m.v9)((function(e){return e.profile.profileInfo.id})),K=(0,m.v9)((function(e){var t,n,r;return null==e||null===(t=e.config)||void 0===t||null===(n=t.ui)||void 0===n||null===(r=n.theme)||void 0===r?void 0:r.name})),F=(0,m.v9)((function(e){var t,n;return null==e||null===(t=e.config)||void 0===t||null===(n=t.ui)||void 0===n?void 0:n.isMarketingConsentBannerEnabled})),$=w((0,E.useState)((0,O.ju)()),2),q=$[0],Y=$[1],Z=_.lD.getInstance(),V=(0,r.useAuthContext)(),X=V.trySignInSilently,z=V.getDecodedIDToken,Q=V.signOut,W=(0,m.v9)((function(e){var t,n;return null==e||null===(t=e.config)||void 0===t||null===(n=t.ui)||void 0===n?void 0:n.features})),J=w((0,E.useState)(!1),2),ee=J[0],te=J[1];(0,E.useEffect)((function(){ne()}),[]),(0,E.useEffect)((function(){p.locale("en")}),[]),(0,E.useEffect)((function(){G((0,c.kM)(O.De.getServiceResourceEndpoints())),G((0,c.z$)(O.De.getI18nConfig()))}),[P.$x.getTenantQualifiedAppBasename()]),(0,E.useEffect)((function(){Y((0,O.ju)())}),[P.$x.getTenantQualifiedAppBasename()]),(0,E.useEffect)((function(){var e;if(x&&null!=j&&null!==(e=j.deployment)&&void 0!==e&&e.tenant){var t=j.deployment.tenant,n=JSON.parse(l.LocalStorageUtils.getValueFromLocalStorage(t)),r={};if(r[x]=(0,u.D0)(),n){if(null===a.EN.lookupKey(n,x)){var o=C(C({},n),{},I({},x,(0,u.D0)()));l.LocalStorageUtils.setValueInLocalStorage(t,JSON.stringify(o))}}else l.LocalStorageUtils.setValueInLocalStorage(t,JSON.stringify(r))}}),[null==j||null===(e=j.deployment)||void 0===e?void 0:e.tenant,x]),(0,E.useEffect)((function(){var e,t;null!=j&&null!==(e=j.ui)&&void 0!==e&&e.features&&H&&((0,a.jY)(null==j||null===(t=j.ui)||void 0===t?void 0:t.features,D)||(null!==v.commonConfig&&void 0!==v.commonConfig&&v.commonConfig.enableOrganizationAssociations?z().then((function(e){(0,T.Z)(e,"associated_tenants")||k?R.m.push({pathname:P.$x.getPaths().get("UNAUTHORIZED"),search:"?error="+P.$x.LOGIN_ERRORS.get("ACCESS_DENIED")}):R.m.push({pathname:P.$x.getPaths().get("CREATE_TENANT")})})).catch((function(){})):R.m.push({pathname:P.$x.getPaths().get("UNAUTHORIZED"),search:"?error="+P.$x.LOGIN_ERRORS.get("ACCESS_DENIED")})))}),[j,H]),(0,E.useEffect)((function(){B&&Z.publish("page-visit-console-landing-page")}),[B]);var ne=function(){try{sessionStorage||location.pathname===P.$x.getPaths().get("STORING_DATA_DISABLED")||R.m.push(P.$x.getPaths().get("STORING_DATA_DISABLED"))}catch(e){location.pathname!==P.$x.getPaths().get("STORING_DATA_DISABLED")&&R.m.push(P.$x.getPaths().get("STORING_DATA_DISABLED"))}};return(0,f.Z)(null==j?void 0:j.deployment)||(0,f.Z)(null==j?void 0:j.endpoints)?E.createElement(_.xq,null):E.createElement(h.Z,{history:R.m},E.createElement("div",{className:"container-fluid"},E.createElement(s.dx,{links:O.ut},E.createElement(E.Suspense,{fallback:E.createElement(_.xq,null)},E.createElement(s.C1,null,E.createElement(o.q5,{allowedScopes:D,featureConfig:W},E.createElement(s.Vb,{onSessionTimeoutAbort:function(e){R.m.push({pathname:e.pathname,search:e.search})},onSessionLogout:function(){l.AuthenticateUtils.removeAuthenticationCallbackUrl(i.$x.CONSOLE_APP),R.m.push(P.$x.getAppLogoutPath())},onLoginAgain:function(){X().then((function(e){!1===e?(l.AuthenticateUtils.removeAuthenticationCallbackUrl(i.$x.CONSOLE_APP),R.m.push(P.$x.getAppLogoutPath())):window.history.replaceState(null,null,window.location.pathname)})).catch((function(){l.AuthenticateUtils.removeAuthenticationCallbackUrl(i.$x.CONSOLE_APP),R.m.push(P.$x.getAppLogoutPath())}))},setSessionTimedOut:function(e){te(e)},sessionTimedOut:ee,modalOptions:{description:E.createElement(A.c,{i18nKey:"console:common.modals.sessionTimeoutModal.description"},"When you click on the ",E.createElement(s.EK,null,"Go back")," button, we will try to recover the session if it exists. If you don't have an active session, you will be redirected to the login page"),headingI18nKey:"console:common.modals.sessionTimeoutModal.heading",loginAgainButtonText:E.createElement(A.c,{i18nKey:"console:common.modals.sessionTimeoutModal.loginAgainButton"},"Login again"),primaryButtonText:E.createElement(A.c,{i18nKey:"console:common.modals.sessionTimeoutModal.primaryButton"},"Go back"),secondaryButtonText:E.createElement(A.c,{i18nKey:"console:common.modals.sessionTimeoutModal.secondaryButton"},"Logout"),sessionTimedOutDescription:E.createElement(A.c,{i18nKey:"console:common.modals.sessionTimeoutModal.sessionTimedOutDescription"},"Please log in again to continue from where you left off."),sessionTimedOutHeadingI18nKey:"console:common.modals.sessionTimeoutModal.sessionTimedOutHeading"},type:s.h5.DEFAULT},E.createElement(E.Fragment,null,E.createElement(d.ql,null,E.createElement("title",null,U),null!==(t=window)&&void 0!==t&&t.themeHash&&null!==(n=window)&&void 0!==n&&n.publicPath&&K?E.createElement("link",{href:"".concat(null===(M=window)||void 0===M?void 0:M.origin).concat(null===(N=window)||void 0===N?void 0:N.publicPath,"/libs/themes/").concat(K,"/theme.").concat(null===(L=window)||void 0===L?void 0:L.themeHash,".min.css"),rel:"stylesheet",type:"text/css"}):null),E.createElement(s.T6,{heading:E.createElement(A.c,{i18nKey:"common:networkErrorMessage.heading"},"Your session has expired"),description:E.createElement(A.c,{i18nKey:"common:networkErrorMessage.description"},"Please try signing in again."),primaryActionText:E.createElement(A.c,{i18nKey:"common:networkErrorMessage.primaryActionText"},"Sign In"),primaryAction:Q}),E.createElement(s.dC,{heading:E.createElement(A.c,{i18nKey:"common:chunkLoadErrorMessage.heading"},"Something went wrong"),description:E.createElement(A.c,{i18nKey:"common:chunkLoadErrorMessage.description"},"An error occurred when serving the requested application. Please try reloading the app."),primaryActionText:E.createElement(A.c,{i18nKey:"common:chunkLoadErrorMessage.primaryActionText"},"Reload the App")}),F&&v.applicationConfig.marketingConsent.getBannerComponent(),E.createElement(S.Z,null,E.createElement(y.Z,{exact:!0,from:"/",to:P.$x.getAppHomePath()}),q.map((function(e,t){return e.protected?E.createElement(b.i1,{component:e.component,path:e.path,key:t,exact:e.exact}):E.createElement(g.Z,{path:e.path,render:function(t){return E.createElement(e.component,t)},key:t,exact:e.exact})})))))))))))};const G=L},38772:(e,t,n)=>{t.ql=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=T(n(52983)),a=T(n(7862)),u=T(n(53653)),c=T(n(30693)),l=n(84528),s=n(63613);function T(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d,A,m,h=(0,u.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),S=(d=h,m=A=function(e){function t(){return p(this,t),E(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,i=e.newProps,a=e.newChildProps,u=e.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return r({},i,((t={})[o.type]=u,t.titleAttributes=r({},a),t));case s.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case s.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=f(o,["children"]),u=(0,l.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(d,o)},o(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(i.default.Component),A.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},A.defaultProps={defer:!0,encodeSpecialCharacters:!0},A.peek=d.peek,A.rewind=function(){var e=d.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},m);S.renderStatic=S.rewind,t.ql=S},63613:(e,t)=>{t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},84528:(e,t,n)=>{t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n(52983)),a=c(n(52458)),u=n(63613);function c(e){return e&&e.__esModule?e:{default:e}}var l,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(e){var t=A(e,u.TAG_NAMES.TITLE),n=A(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=A(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return A(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[u.TAG_NAMES.BASE]})).map((function(e){return e[u.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},d=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&y("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===u.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),c=0;c<i.length;c++){var l=i[c],s=(0,a.default)({},o[l],r[l]);o[l]=s}return e}),[]).reverse()},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},m=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){m(e)}),0)}),h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m,S=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){return clearTimeout(e)},y=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,v=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,T=e.styleTags,f=e.title,p=e.titleAttributes;O(u.TAG_NAMES.BODY,r),O(u.TAG_NAMES.HTML,o),b(f,p);var E={baseTag:P(u.TAG_NAMES.BASE,n),linkTags:P(u.TAG_NAMES.LINK,i),metaTags:P(u.TAG_NAMES.META,a),noscriptTags:P(u.TAG_NAMES.NOSCRIPT,c),scriptTags:P(u.TAG_NAMES.SCRIPT,s),styleTags:P(u.TAG_NAMES.STYLE,T)},d={},A={};Object.keys(E).forEach((function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(A[e]=E[e].oldTags)})),t&&t(),l(e,d,A)},_=function(e){return Array.isArray(e)?e.join(""):e},b=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),O(u.TAG_NAMES.TITLE,t)},O=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var T=i.indexOf(l);-1!==T&&i.splice(T,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,a.join(","))}},P=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},R=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t}),t)},C=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[u.HELMET_ATTRIBUTE]=!0,o=M(n,r),[i.default.createElement(u.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=R(n),i=_(t);return o?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+s(i,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+s(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return R(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){g&&S(g),e.defer?g=h((function(){v(e,(function(){g=null}))})):(v(e),g=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,T=e.title,f=void 0===T?"":T,p=e.titleAttributes;return{base:C(u.TAG_NAMES.BASE,t,r),bodyAttributes:C(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(u.ATTRIBUTE_NAMES.HTML,o,r),link:C(u.TAG_NAMES.LINK,i,r),meta:C(u.TAG_NAMES.META,a,r),noscript:C(u.TAG_NAMES.NOSCRIPT,c,r),script:C(u.TAG_NAMES.SCRIPT,l,r),style:C(u.TAG_NAMES.STYLE,s,r),title:C(u.TAG_NAMES.TITLE,{title:f,titleAttributes:p},r)}},t.reducePropsToState=function(e){return{baseTag:E([u.TAG_PROPERTIES.HREF],e),bodyAttributes:p(u.ATTRIBUTE_NAMES.BODY,e),defer:A(e,u.HELMET_PROPS.DEFER),encode:A(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(u.ATTRIBUTE_NAMES.HTML,e),linkTags:d(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:d(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:d(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:T(e),titleAttributes:p(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=h,t.warn=y},53653:(e,t,n)=>{"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=n(52983),i=r(o),a=r(n(31236));function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!(!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function T(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var u=o.prototype;return u.shouldComponentUpdate=function(e){return!a(e,this.props)},u.componentWillMount=function(){s.push(this),T()},u.componentDidUpdate=function(){T()},u.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),T()},u.render=function(){return i.createElement(r,this.props)},o}(o.Component);return u(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),u(f,"canUseDOM",c),f}}}}]);