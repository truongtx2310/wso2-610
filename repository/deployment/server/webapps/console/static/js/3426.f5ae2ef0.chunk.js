"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[3426],{63426:(e,n,t)=>{t.r(n),t.d(n,{default:()=>K});var a=t(45688),o=t(8206),r=t(41671),i=t(67776),c=t(79133),l=t(13654),s=t(38314),u=t(67127),d=t(52983),f=t(26221),m=t(69141),p=t(92423),g=t(75919),h=t(39795),v=t(42875),y=t(24285),E=t(14517),b=t(71008),S=t(47194),z=t(23934),k=t(29330),C=t(1604);function Z(e){var n=e.children,t=e.className,a=e.content,o=e.icon,r=(0,E.Z)("divider",t),i=(0,b.Z)(Z,e),c=(0,S.Z)(Z,e);return(0,k.Z)(o)?(0,k.Z)(a)?d.createElement(c,(0,v.Z)({},i,{className:r}),z.kK(n)?"/":n):d.createElement(c,(0,v.Z)({},i,{className:r}),a):p.Z.create(o,{defaultProps:(0,v.Z)({},i,{className:r}),autoGenerateKey:!1})}Z.handledProps=["as","children","className","content","icon"],Z.propTypes={},Z.create=(0,C.u5)(Z,(function(e){return{icon:e}}));const O=Z;var A=t(28637),P=t(43152),I=t(40296),T=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))||this).computeElementType=function(){var e=n.props,t=e.link,a=e.onClick;if(t||a)return"a"},n.handleClick=function(e){return(0,P.Z)(n.props,"onClick",e,n.props)},n}return(0,A.Z)(n,e),n.prototype.render=function(){var e=this.props,t=e.active,a=e.children,o=e.className,r=e.content,i=e.href,c=(0,E.Z)((0,I.lG)(t,"active"),"section",o),l=(0,b.Z)(n,this.props),s=(0,S.Z)(n,this.props,this.computeElementType);return d.createElement(s,(0,v.Z)({},l,{className:c,href:i,onClick:this.handleClick}),z.kK(a)?r:a)},n}(d.Component);function w(e){var n=e.children,t=e.className,a=e.divider,o=e.icon,r=e.sections,i=e.size,c=(0,E.Z)("ui",i,"breadcrumb",t),l=(0,b.Z)(w,e),s=(0,S.Z)(w,e);if(!z.kK(n))return d.createElement(s,(0,v.Z)({},l,{className:c}),n);var u=[];return(0,y.Z)(r,(function(e,n){var t=T.create(e);if(u.push(t),n!==r.length-1){var i=t.key+"_divider"||0;u.push(O.create({content:a,icon:o,key:i}))}})),d.createElement(s,(0,v.Z)({},l,{className:c}),u)}T.handledProps=["active","as","children","className","content","href","link","onClick"],T.propTypes={},T.create=(0,C.u5)(T,(function(e){return{content:e,link:!0}})),w.handledProps=["as","children","className","divider","icon","sections","size"],w.propTypes={},w.Divider=O,w.Section=T;const N=w;var R=t(61621),_=t(19709),L=t(23367),U=t(53901);function j(e){return function(e){if(Array.isArray(e))return V(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var a,o,r=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(a=t.next()).done)&&(r.push(a.value),!n||r.length!==n);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return r}(e,n)||Q(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,n){if(e){if("string"==typeof e)return V(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?V(e,n):void 0}}function V(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var x=[{key:0,text:c.I18n.instance.t("common:name"),value:"name"}],F=function(e){var n,t,c,v,y=e["data-componentid"],E=(0,f.$)().t,b=(0,m.I0)(),S=D((0,d.useState)(null),2),z=S[0],k=S[1],C=D((0,d.useState)(""),2),Z=C[0],O=C[1],A=D((0,d.useState)(x[0]),2),P=A[0],I=A[1],T=D((0,d.useState)(_.ru.DEFAULT_RESOURCE_LIST_ITEM_LIMIT),2),w=T[0],Q=T[1],V=D((0,d.useState)(!0),2),F=V[0],K=V[1],M=D((0,d.useState)(!1),2),X=M[0],B=M[1],G=D((0,d.useState)(void 0),2),W=G[0],$=G[1],q=D((0,d.useState)(void 0),2),H=q[0],J=q[1],Y=D((0,d.useState)(null),2),ee=Y[0],ne=Y[1],te=D((0,d.useState)([]),2),ae=te[0],oe=te[1],re=D((0,d.useState)(null),2),ie=re[0],ce=re[1],le=D((0,d.useState)(""),2),se=le[0],ue=le[1],de=D((0,d.useState)(""),2),fe=de[0],me=de[1],pe=D((0,d.useState)(1),2),ge=pe[0],he=pe[1],ve=(0,m.v9)((function(e){return e.organization.organization})),ye=_.lD.getInstance(),Ee=D((0,i.cC)(),2),be=Ee[0],Se=Ee[1];(0,d.useEffect)((function(){var e,n=!1,t=!1;null==z||null===(e=z.links)||void 0===e||e.forEach((function(e){if("next"===e.rel){var a=e.href.split("after=")[1];ue(a),$(!0),n=!0}if("previous"===e.rel){var o=e.href.split("before=")[1];me(o),J(!0),t=!0}})),n||(ue(""),$(!1)),t||(me(""),J(!1))}),[z]);var ze=(0,d.useCallback)((function(){he(1),Se()}),[he,Se]);(0,d.useEffect)((function(){ee&&!(0,u.Z)(ee)&&(0,L.Xu)(ee.id).then((function(e){ce(e)})).catch((function(e){null!=e&&e.description?b((0,r.V_)({description:e.description,level:o.QU.ERROR,message:E("console:manage.features.organizations.notifications.fetchOrganization.error.message")})):b((0,r.V_)({description:E("console:manage.features.organizations.notifications.fetchOrganization.genericError.description"),level:o.QU.ERROR,message:E("console:manage.features.organizations.notifications.fetchOrganization.genericError.message")}))}))}),[ee,b,E]);var ke=(0,d.useMemo)((function(){return!ee||(0,u.Z)(ee)?Z:"".concat(Z?Z+" and ":"","parentId eq ").concat(ee.id)}),[Z,ee]),Ce=(0,d.useCallback)((function(e,n,t,a,i){K(!0),(0,L.jX)(n,e,t,a,!1).then((function(e){k(e)})).catch((function(e){null!=e&&e.description?b((0,r.V_)({description:e.description,level:o.QU.ERROR,message:E("console:manage.features.organizations.notifications.getOrganizationList.error.message")})):b((0,r.V_)({description:E("console:manage.features.organizations.notifications.getOrganizationList.genericError.description"),level:o.QU.ERROR,message:E("console:manage.features.organizations.notifications.getOrganizationList.genericError.message")}))})).finally((function(){K(!1)}))}),[L.jX,b,E,k,K]);(0,d.useEffect)((function(){Ce(w,ke,null,null)}),[w,Ce,ke]);var Ze=(0,d.useCallback)((function(e){ze(),O(e)}),[ze,O]),Oe=(0,d.useCallback)((function(e,n){var t=parseInt(null==n?void 0:n.activePage);t>ge?Ce(w,ke,se,null):t<ge&&Ce(w,ke,null,fe),he(t)}),[Ce,ge,ke,w,se,fe]),Ae=(0,d.useCallback)((function(e,n){Q(n.value),ze()}),[Q,ze]),Pe=(0,d.useCallback)((function(){O(""),ze()}),[O,ze]),Ie=function(e,n){var t=j(ae);t.splice(n+1),oe(t),ne(e),ze(),e||ce(null)};return d.createElement(d.Fragment,null,d.createElement(l.Xg,{action:!F&&!(!Z&&((0,u.Z)(z)||(null==z||null===(n=z.organizations)||void 0===n?void 0:n.length)<=0))&&R.organizationConfigs.canCreateOrganization()&&d.createElement(a.di,{when:a.TA.ORGANIZATION_WRITE},d.createElement(l.KM,{disabled:F,loading:F,onClick:function(){ye.publish("organization-click-new-organization-button"),B(!0)},"data-componentid":"".concat(y,"-list-layout-add-button")},d.createElement(p.Z,{name:"add"}),E("console:manage.features.organizations.list.actions.add"))),pageTitle:"Organizations",title:F?null:ie?ie.name:E("console:manage.features.organizations.homeList.name"),description:d.createElement("p",null,F?null:ie?ie.description:null),"data-componentid":"".concat(y,"-page-layout"),titleAs:"h3",componentAbovePageHeader:d.createElement(d.Fragment,null,d.createElement(g.Z,{as:"h1","data-componentid":"".concat(y,"-organization-header")},E("console:manage.pages.organizations.title"),d.createElement(g.Z.Subheader,{"data-componentid":"".concat(y,"-sub-title")},E("console:manage.pages.organizations.subTitle"))),d.createElement(h.Z,{hidden:!0}),ee&&ae.length>0&&d.createElement(N,{className:"margined","data-componentid":"".concat(y,"-breadcrumb")},d.createElement(N.Section,{onClick:function(){Ie(null,-1)}},d.createElement("span",{"data-componentid":"".concat(y,"-breadcrumb-home")},ve.name)),null==ae?void 0:ae.map((function(e,n){return d.createElement(d.Fragment,{key:n},d.createElement(N.Divider,{icon:"right chevron"}),d.createElement(N.Section,{active:n===ae.length-1,link:n!==ae.length-1,onClick:n!==ae.length-1?function(){return Ie(e,n)}:null},e.name))})))," ")},d.createElement(l.PS,{advancedSearch:d.createElement(_.nC,{onFilter:Ze,filterAttributeOptions:[{key:0,text:E("common:name"),value:"name"}],filterAttributePlaceholder:E("console:manage.features.organizations.advancedSearch.form.inputs.filterAttribute.placeholder"),filterConditionsPlaceholder:E("console:manage.features.organizations.advancedSearch.form.inputs.filterCondition.placeholder"),filterValuePlaceholder:E("console:manage.features.organizations.advancedSearch.form.inputs.filterValue.placeholder"),placeholder:E("console:manage.features.organizations.advancedSearch.placeholder"),defaultSearchAttribute:"name",defaultSearchOperator:"co","data-componentid":"".concat(y,"-list-advanced-search")}),currentListSize:null==z||null===(t=z.organizations)||void 0===t?void 0:t.length,listItemLimit:w,onItemsPerPageDropdownChange:Ae,onPageChange:Oe,onSortStrategyChange:function(e,n){I((0,s.Z)(x,(function(e){return n.value===e.value})))},showPagination:!0,showTopActionPanel:F||!(!Z&&(null==z||null===(c=z.organizations)||void 0===c?void 0:c.length)<=0),sortOptions:x,sortStrategy:P,totalPages:10,totalListSize:null==z||null===(v=z.organizations)||void 0===v?void 0:v.length,paginationOptions:{disableNextButton:!W,disablePreviousButton:!H},"data-componentid":"".concat(y,"-list-layout"),resetPagination:be,activePage:ge},d.createElement(U.Bg,{isLoading:F,list:z,onOrganizationDelete:function(){Ce(w,ke,se,fe)},onEmptyListPlaceholderActionClick:function(){B(!0)},onSearchQueryClear:Pe,searchQuery:Z,"data-componentid":"organization-list",onListItemClick:function(e,n){if(!ae.find((function(e){return e.id===n.id}))){Pe(),ne(n),ze();var t=j(ae);t.push(n),oe(t)}},parentOrganization:ee})),X&&d.createElement(U.Xh,{onUpdate:function(){Ce(w,ke,se,fe)},closeWizard:function(){return B(!1)},parent:ee})))};F.defaultProps={"data-componentid":"organizations"};const K=F}}]);