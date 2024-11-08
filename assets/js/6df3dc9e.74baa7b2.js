"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["62698"],{18701:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>u,default:()=>m,assets:()=>l,toc:()=>d,frontMatter:()=>c});var r=JSON.parse('{"id":"use-is-focused","title":"useIsFocused","description":"We might want to render different content based on the current focus state of the screen. The library exports a useIsFocused hook to make this easier:","source":"@site/versioned_docs/version-7.x/use-is-focused.md","sourceDirName":".","slug":"/use-is-focused","permalink":"/docs/use-is-focused","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/use-is-focused.md","tags":[],"version":"7.x","frontMatter":{"id":"use-is-focused","title":"useIsFocused","sidebar_label":"useIsFocused"},"sidebar":"docs","previous":{"title":"useFocusEffect","permalink":"/docs/use-focus-effect"},"next":{"title":"usePreventRemove","permalink":"/docs/use-prevent-remove"}}'),o=t("85893"),a=t("50065"),s=t("47902"),i=t("5525");let c={id:"use-is-focused",title:"useIsFocused",sidebar_label:"useIsFocused"},u=void 0,l={},d=[{value:"Using with class component",id:"using-with-class-component",level:2}];function f(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["We might want to render different content based on the current focus state of the screen. The library exports a ",(0,o.jsx)(n.code,{children:"useIsFocused"})," hook to make this easier:"]}),"\n",(0,o.jsxs)(s.Z,{groupId:"config",queryString:"config",children:[(0,o.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,o.jsx)(n.pre,{"data-name":"useIsFocused hook","data-snack":"true",children:(0,o.jsx)(n.code,{className:"language-js",metastring:'name="useIsFocused hook" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';\n// codeblock-focus-start\nimport { useIsFocused } from '@react-navigation/native';\n\nfunction ProfileScreen() {\n  // This hook returns `true` if the screen is focused, `false` otherwise\n  // highlight-next-line\n  const isFocused = useIsFocused();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>{isFocused ? 'focused' : 'unfocused'}</Text>\n    </View>\n  );\n}\n// codeblock-focus-end\n\nfunction HomeScreen() {\n  return <View />;\n}\n\nconst Tab = createMaterialTopTabNavigator({\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(Tab);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,o.jsx)(i.Z,{value:"dynamic",label:"Dynamic",children:(0,o.jsx)(n.pre,{"data-name":"useIsFocused hook","data-snack":"true",children:(0,o.jsx)(n.code,{className:"language-js",metastring:'name="useIsFocused hook" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';\n// codeblock-focus-start\nimport { useIsFocused } from '@react-navigation/native';\n\nfunction ProfileScreen() {\n  // This hook returns `true` if the screen is focused, `false` otherwise\n  // highlight-next-line\n  const isFocused = useIsFocused();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>{isFocused ? 'focused' : 'unfocused'}</Text>\n    </View>\n  );\n}\n// codeblock-focus-end\n\nfunction HomeScreen() {\n  return <View />;\n}\n\nconst Tab = createMaterialTopTabNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen name=\"Home\" component={HomeScreen} />\n        <Tab.Screen name=\"Profile\" component={ProfileScreen} />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["Note that using this hook triggers a re-render for the component when the screen it's in changes focus. This might cause lags during the animation if your component is heavy. You might want to extract the expensive parts to separate components and use ",(0,o.jsx)(n.a,{href:"https://react.dev/reference/react/memo",children:(0,o.jsx)(n.code,{children:"React.memo"})})," or ",(0,o.jsx)(n.a,{href:"https://react.dev/reference/react/PureComponent",children:(0,o.jsx)(n.code,{children:"React.PureComponent"})})," to minimize re-renders for them."]}),"\n",(0,o.jsx)(n.h2,{id:"using-with-class-component",children:"Using with class component"}),"\n",(0,o.jsx)(n.p,{children:"You can wrap your class component in a function component to use the hook:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"class Profile extends React.Component {\n  render() {\n    // Get it from props\n    const { isFocused } = this.props;\n  }\n}\n\n// Wrap and export\nexport default function (props) {\n  const isFocused = useIsFocused();\n\n  return <Profile {...props} isFocused={isFocused} />;\n}\n"})})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},5525:function(e,n,t){t.d(n,{Z:()=>s});var r=t("85893");t("67294");var o=t("67026");let a="tabItem_Ymn6";function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a,s),hidden:t,children:n})}},47902:function(e,n,t){t.d(n,{Z:()=>T});var r=t("85893"),o=t("67294"),a=t("67026"),s=t("69599"),i=t("16550"),c=t("32000"),u=t("4520"),l=t("38341"),d=t("76009");function f(e){var n,t;return null!==(t=null===(n=o.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function m(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var h=t("7227");let p="tabList__CuJ",v="tabItem_LNqP";function g(e){let{className:n,block:t,selectedValue:o,selectValue:i,tabValues:c}=e,u=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),d=e=>{let n=e.currentTarget,t=c[u.indexOf(n)].value;t!==o&&(l(n),i(t))},f=e=>{var n,t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;r=null!==(n=u[t])&&void 0!==n?n:u[0];break}case"ArrowLeft":{let n=u.indexOf(e.currentTarget)-1;r=null!==(t=u[n])&&void 0!==t?t:u[u.length-1]}}null==r||r.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:c.map(e=>{let{value:n,label:t,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>u.push(e),onKeyDown:f,onClick:d,...s,className:(0,a.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":o===n}),children:null!=t?t:n},n)})})}function b(e){let{lazy:n,children:t,selectedValue:s}=e,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===s);return e?(0,o.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,a=function(e){let{values:n,children:t}=e;return(0,o.useMemo)(()=>{let e=null!=n?n:f(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}});return!function(e){let n=(0,l.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(n.map(e=>e.value).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[n,t])}(e),[s,h]=(0,o.useState)(()=>(function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(t,'" but none of its children has the corresponding value. Available values are: ').concat(r.map(e=>e.value).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return t}let o=null!==(n=r.find(e=>e.default))&&void 0!==n?n:r[0];if(!o)throw Error("Unexpected error: 0 tabValues");return o.value})({defaultValue:n,tabValues:a})),[p,v]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t}),s=(0,u._X)(a);return[s,(0,o.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})},[a,r])]}({queryString:t,groupId:r}),[g,b]=function(e){var n;let{groupId:t}=e;let r=(n=t)?"docusaurus.tab.".concat(n):null,[a,s]=(0,d.Nk)(r);return[a,(0,o.useCallback)(e=>{if(!!r)s.set(e)},[r,s])]}({groupId:r}),x=(()=>{let e=null!=p?p:g;return m({value:e,tabValues:a})?e:null})();return(0,c.Z)(()=>{x&&h(x)},[x]),{selectedValue:s,selectValue:(0,o.useCallback)(e=>{if(!m({value:e,tabValues:a}))throw Error("Can't select invalid tab value=".concat(e));h(e),v(e),b(e)},[v,b,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container",p),children:[(0,r.jsx)(g,{...n,...e}),(0,r.jsx)(b,{...n,...e})]})}function T(e){let n=(0,h.Z)();return(0,r.jsx)(x,{...e,children:f(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return s}});var r=t(67294);let o={},a=r.createContext(o);function s(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);