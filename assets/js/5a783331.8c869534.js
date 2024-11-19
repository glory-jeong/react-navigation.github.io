"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["49710"],{11864:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>l,default:()=>m,assets:()=>u,toc:()=>d,frontMatter:()=>s});var a=JSON.parse('{"id":"screen-tracking","title":"Screen tracking for analytics","description":"To track the currently active screen, we need to:","source":"@site/versioned_docs/version-7.x/screen-tracking.md","sourceDirName":".","slug":"/screen-tracking","permalink":"/docs/screen-tracking","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/screen-tracking.md","tags":[],"version":"7.x","frontMatter":{"id":"screen-tracking","title":"Screen tracking for analytics","sidebar_label":"Screen tracking"},"sidebar":"docs","previous":{"title":"Server rendering","permalink":"/docs/server-rendering"},"next":{"title":"Themes","permalink":"/docs/themes"}}'),r=t("85893"),o=t("50065"),i=t("47902"),c=t("5525");let s={id:"screen-tracking",title:"Screen tracking for analytics",sidebar_label:"Screen tracking"},l=void 0,u={},d=[{value:"Example",id:"example",level:2}];function f(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"To track the currently active screen, we need to:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Add a callback to get notified of state changes"}),"\n",(0,r.jsx)(n.li,{children:"Get the root navigator state and find the active route name"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To get notified of state changes, we can use the ",(0,r.jsx)(n.code,{children:"onStateChange"})," prop on ",(0,r.jsx)(n.code,{children:"NavigationContainer"}),". To get the root navigator state, we can use the ",(0,r.jsx)(n.code,{children:"getRootState"})," method on the container's ref. Please note that ",(0,r.jsx)(n.code,{children:"onStateChange"})," is not called on initial render so you have to set your initial screen separately."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"This example shows how the approach can be adapted to any mobile analytics SDK."}),"\n",(0,r.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,r.jsx)(c.Z,{value:"static",label:"Static",default:!0,children:(0,r.jsx)(n.pre,{"data-name":"Screen tracking for analytics","data-snack":"true",children:(0,r.jsx)(n.code,{className:"language-js",metastring:'name="Screen tracking for analytics" snack',children:"import * as React from 'react';\nimport { View } from 'react-native';\n// codeblock-focus-start\nimport {\n  createStaticNavigation,\n  useNavigationContainerRef,\n  useNavigation,\n} from '@react-navigation/native';\n// codeblock-focus-end\nimport { Button } from '@react-navigation/elements';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction Home() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.navigate('Settings')}>\n        Go to Settings\n      </Button>\n    </View>\n  );\n}\n\nfunction Settings() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>\n    </View>\n  );\n}\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: Home,\n    Settings: Settings,\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\n// codeblock-focus-start\n\nexport default function App() {\n  const navigationRef = useNavigationContainerRef();\n  const routeNameRef = React.useRef();\n\n  return (\n    <Navigation\n      ref={navigationRef}\n      onReady={() => {\n        routeNameRef.current = navigationRef.current.getCurrentRoute().name;\n      }}\n      onStateChange={async () => {\n        const previousRouteName = routeNameRef.current;\n        const currentRouteName = navigationRef.current.getCurrentRoute().name;\n        const trackScreenView = () => {\n          // Your implementation of analytics goes here!\n        };\n\n        if (previousRouteName !== currentRouteName) {\n          // Replace the line below to add the tracker from a mobile analytics SDK\n          await trackScreenView(currentRouteName);\n        }\n\n        // Save the current route name for later comparison\n        routeNameRef.current = currentRouteName;\n      }}\n    />\n  );\n}\n// codeblock-focus-end\n"})})}),(0,r.jsx)(c.Z,{value:"dynamic",label:"Dynamic",children:(0,r.jsx)(n.pre,{"data-name":"Screen tracking for anylytics","data-snack":"true",children:(0,r.jsx)(n.code,{className:"language-js",metastring:'name="Screen tracking for anylytics" snack',children:"import * as React from 'react';\nimport { View } from 'react-native';\n// codeblock-focus-start\nimport {\n  NavigationContainer,\n  useNavigation,\n  useNavigationContainerRef,\n} from '@react-navigation/native';\n// codeblock-focus-end\nimport { Button } from '@react-navigation/elements';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nfunction Home() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.navigate('Settings')}>\n        Go to Settings\n      </Button>\n    </View>\n  );\n}\n\nfunction Settings() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>\n    </View>\n  );\n}\n\nconst Stack = createStackNavigator();\n\n// codeblock-focus-start\n\nexport default function App() {\n  const navigationRef = useNavigationContainerRef();\n  const routeNameRef = React.useRef();\n\n  return (\n    <NavigationContainer\n      ref={navigationRef}\n      onReady={() => {\n        routeNameRef.current = navigationRef.current.getCurrentRoute().name;\n      }}\n      onStateChange={async () => {\n        const previousRouteName = routeNameRef.current;\n        const currentRouteName = navigationRef.current.getCurrentRoute().name;\n        const trackScreenView = () => {\n          // Your implementation of analytics goes here!\n        };\n\n        if (previousRouteName !== currentRouteName) {\n          // Replace the line below to add the tracker from a mobile analytics SDK\n          await trackScreenView(currentRouteName);\n        }\n\n        // Save the current route name for later comparison\n        routeNameRef.current = currentRouteName;\n      }}\n    >\n      {/* ... */}\n      // codeblock-focus-end\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={Home} />\n        <Stack.Screen name=\"Settings\" component={Settings} />\n      </Stack.Navigator>\n      // codeblock-focus-start\n    </NavigationContainer>\n  );\n}\n// codeblock-focus-end\n"})})})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},5525:function(e,n,t){t.d(n,{Z:()=>i});var a=t("85893");t("67294");var r=t("67026");let o="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t,children:n})}},47902:function(e,n,t){t.d(n,{Z:()=>N});var a=t("85893"),r=t("67294"),o=t("67026"),i=t("69599"),c=t("16550"),s=t("32000"),l=t("4520"),u=t("38341"),d=t("76009");function f(e){var n,t;return null!==(t=null===(n=r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function m(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var g=t("7227");let v="tabList__CuJ",p="tabItem_LNqP";function h(e){let{className:n,block:t,selectedValue:r,selectValue:c,tabValues:s}=e,l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{let n=e.currentTarget,t=s[l.indexOf(n)].value;t!==r&&(u(n),c(t))},f=e=>{var n,t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=l.indexOf(e.currentTarget)+1;a=null!==(n=l[t])&&void 0!==n?n:l[0];break}case"ArrowLeft":{let n=l.indexOf(e.currentTarget)-1;a=null!==(t=l[n])&&void 0!==t?t:l[l.length-1]}}null==a||a.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:s.map(e=>{let{value:n,label:t,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:f,onClick:d,...i,className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)})})}function k(e){let{lazy:n,children:t,selectedValue:i}=e,c=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=c.find(e=>e.props.value===i);return e?(0,r.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:c.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:a}=e,o=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=null!=n?n:f(t).map(e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(n.map(e=>e.value).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[n,t])}(e),[i,g]=(0,r.useState)(()=>(function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(t,'" but none of its children has the corresponding value. Available values are: ').concat(a.map(e=>e.value).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return t}let r=null!==(n=a.find(e=>e.default))&&void 0!==n?n:a[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:o})),[v,p]=function(e){let{queryString:n=!1,groupId:t}=e,a=(0,c.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t}),i=(0,l._X)(o);return[i,(0,r.useCallback)(e=>{if(!o)return;let n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})},[o,a])]}({queryString:t,groupId:a}),[h,k]=function(e){var n;let{groupId:t}=e;let a=(n=t)?"docusaurus.tab.".concat(n):null,[o,i]=(0,d.Nk)(a);return[o,(0,r.useCallback)(e=>{if(!!a)i.set(e)},[a,i])]}({groupId:a}),b=(()=>{let e=null!=v?v:h;return m({value:e,tabValues:o})?e:null})();return(0,s.Z)(()=>{b&&g(b)},[b]),{selectedValue:i,selectValue:(0,r.useCallback)(e=>{if(!m({value:e,tabValues:o}))throw Error("Can't select invalid tab value=".concat(e));g(e),p(e),k(e)},[p,k,o]),tabValues:o}}(e);return(0,a.jsxs)("div",{className:(0,o.Z)("tabs-container",v),children:[(0,a.jsx)(h,{...n,...e}),(0,a.jsx)(k,{...n,...e})]})}function N(e){let n=(0,g.Z)();return(0,a.jsx)(b,{...e,children:f(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var a=t(67294);let r={},o=a.createContext(r);function i(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);