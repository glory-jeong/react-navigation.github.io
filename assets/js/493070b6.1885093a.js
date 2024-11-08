"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["56106"],{3741:function(e,t,a){a.r(t),a.d(t,{metadata:()=>n,contentTitle:()=>c,default:()=>b,assets:()=>d,toc:()=>h,frontMatter:()=>s});var n=JSON.parse('{"id":"material-bottom-tab-navigator","title":"createMaterialBottomTabNavigator","description":"A material-design themed tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused.","source":"@site/versioned_docs/version-2.x/material-bottom-tab-navigator.md","sourceDirName":".","slug":"/material-bottom-tab-navigator","permalink":"/docs/2.x/material-bottom-tab-navigator","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/material-bottom-tab-navigator.md","tags":[],"version":"2.x","frontMatter":{"id":"material-bottom-tab-navigator","title":"createMaterialBottomTabNavigator","sidebar_label":"createMaterialBottomTabNavigator"},"sidebar":"version-2.x-api","previous":{"title":"createBottomTabNavigator","permalink":"/docs/2.x/bottom-tab-navigator"},"next":{"title":"createMaterialTopTabNavigator","permalink":"/docs/2.x/material-top-tab-navigator"}}'),r=a("85893"),i=a("50065"),o=a("47902"),l=a("5525");let s={id:"material-bottom-tab-navigator",title:"createMaterialBottomTabNavigator",sidebar_label:"createMaterialBottomTabNavigator"},c=void 0,d={},h=[{value:"RouteConfigs",id:"routeconfigs",level:2},{value:"MaterialBottomTabNavigatorConfig",id:"materialbottomtabnavigatorconfig",level:2},{value:"<code>navigationOptions</code> for screens inside of the navigator",id:"navigationoptions-for-screens-inside-of-the-navigator",level:2},{value:"<code>title</code>",id:"title",level:4},{value:"<code>tabBarIcon</code>",id:"tabbaricon",level:4},{value:"<code>tabBarColor</code>",id:"tabbarcolor",level:4},{value:"<code>tabBarLabel</code>",id:"tabbarlabel",level:4},{value:"<code>tabBarAccessibilityLabel</code>",id:"tabbaraccessibilitylabel",level:4},{value:"<code>tabBarTestID</code>",id:"tabbartestid",level:4},{value:"<code>tabBarOnPress</code>",id:"tabbaronpress",level:4},{value:"Using with <code>react-native-paper</code> (optional)",id:"using-with-react-native-paper-optional",level:2}];function u(e){let t={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"A material-design themed tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused."}),"\n",(0,r.jsx)("img",{src:"/assets/navigators/bottom-navigation.gif",style:{width:"420px",maxWidth:"100%"}}),"\n",(0,r.jsxs)(t.p,{children:["To use this navigator, you need to install ",(0,r.jsx)(t.code,{children:"react-navigation-material-bottom-tabs"})]}),"\n",(0,r.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(l.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install react-navigation-material-bottom-tabs react-native-paper\n"})})}),(0,r.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add react-navigation-material-bottom-tabs react-native-paper\n"})})}),(0,r.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add react-navigation-material-bottom-tabs react-native-paper\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["This API also requires that you install ",(0,r.jsx)(t.code,{children:"react-native-vector-icons"}),"! If you are using Expo, it will just work out of the box. Otherwise, ",(0,r.jsx)(t.a,{href:"https://github.com/oblador/react-native-vector-icons#installation",children:"follow these installation instructions"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"createMaterialBottomTabNavigator(\n  RouteConfigs,\n  MaterialBottomTabNavigatorConfig\n);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This library uses the ",(0,r.jsxs)(t.a,{href:"https://callstack.github.io/react-native-paper/bottom-navigation.html",children:[(0,r.jsx)(t.code,{children:"BottomNavigation"})," component from ",(0,r.jsx)(t.code,{children:"react-native-paper"})]}),". It doesn't include the whole ",(0,r.jsx)(t.code,{children:"react-native-paper"})," library in your bundle, so you don't need to worry about it."]}),"\n",(0,r.jsx)(t.h2,{id:"routeconfigs",children:"RouteConfigs"}),"\n",(0,r.jsx)(t.p,{children:"The route configs object is a mapping from route name to a route config."}),"\n",(0,r.jsx)(t.h2,{id:"materialbottomtabnavigatorconfig",children:"MaterialBottomTabNavigatorConfig"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"shifting"})," - Whether the shifting style is used, the active tab appears wider and the inactive tabs won't have a label. By default, this is ",(0,r.jsx)(t.code,{children:"true"})," when you have more than 3 tabs."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"labeled"})," - Whether to show labels in tabs. When ",(0,r.jsx)(t.code,{children:"false"}),", only icons will be displayed."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"activeColor"})," - Custom color for icon and label in the active tab."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"inactiveColor"})," - Custom color for icon and label in the inactive tab."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"barStyle"})," - Style for the bottom navigation bar. You can set a bottom padding here if you have a translucent navigation bar on Android: ",(0,r.jsx)(t.code,{children:"barStyle={{ paddingBottom: 48 }}"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"initialRouteName"})," - The routeName for the initial tab route when first loading."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"order"})," - Array of routeNames which defines the order of the tabs."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"paths"})," - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"backBehavior"})," - Should the back button cause a tab switch to the initial tab? If yes, set to ",(0,r.jsx)(t.code,{children:"initialRoute"}),", otherwise ",(0,r.jsx)(t.code,{children:"none"}),". Defaults to ",(0,r.jsx)(t.code,{children:"initialRoute"})," behavior."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"export default createMaterialBottomTabNavigator(\n  {\n    Album: { screen: Album },\n    Library: { screen: Library },\n    History: { screen: History },\n    Cart: { screen: Cart },\n  },\n  {\n    initialRouteName: 'Album',\n    activeColor: '#f0edf6',\n    inactiveColor: '#3e2465',\n    barStyle: { backgroundColor: '#694fad' },\n  }\n);\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"navigationoptions-for-screens-inside-of-the-navigator",children:[(0,r.jsx)(t.code,{children:"navigationOptions"})," for screens inside of the navigator"]}),"\n",(0,r.jsx)(t.h4,{id:"title",children:(0,r.jsx)(t.code,{children:"title"})}),"\n",(0,r.jsxs)(t.p,{children:["Generic title that can be used as a fallback for ",(0,r.jsx)(t.code,{children:"headerTitle"})," and ",(0,r.jsx)(t.code,{children:"tabBarLabel"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"tabbaricon",children:(0,r.jsx)(t.code,{children:"tabBarIcon"})}),"\n",(0,r.jsxs)(t.p,{children:["React Element or a function that given ",(0,r.jsx)(t.code,{children:"{ focused: boolean, horizontal: boolean, tintColor: string }"})," returns a React.Node, to display in the tab bar. ",(0,r.jsx)(t.code,{children:"horizontal"})," is ",(0,r.jsx)(t.code,{children:"true"})," when the device is in landscape and ",(0,r.jsx)(t.code,{children:"false"})," when portrait. The icon is re-rendered whenever the device orientation changes."]}),"\n",(0,r.jsx)(t.h4,{id:"tabbarcolor",children:(0,r.jsx)(t.code,{children:"tabBarColor"})}),"\n",(0,r.jsxs)(t.p,{children:["Color for the tab bar when the tab corresponding to the screen is active. Used for the ripple effect. This is only supported when ",(0,r.jsx)(t.code,{children:"shifting"})," is ",(0,r.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"tabbarlabel",children:(0,r.jsx)(t.code,{children:"tabBarLabel"})}),"\n",(0,r.jsxs)(t.p,{children:["Title string of a tab displayed in the tab bar. When undefined, scene ",(0,r.jsx)(t.code,{children:"title"})," is used. To hide, see ",(0,r.jsx)(t.code,{children:"labeled"})," option in the previous section."]}),"\n",(0,r.jsx)(t.h4,{id:"tabbaraccessibilitylabel",children:(0,r.jsx)(t.code,{children:"tabBarAccessibilityLabel"})}),"\n",(0,r.jsx)(t.p,{children:"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."}),"\n",(0,r.jsx)(t.h4,{id:"tabbartestid",children:(0,r.jsx)(t.code,{children:"tabBarTestID"})}),"\n",(0,r.jsx)(t.p,{children:"ID to locate this tab button in tests."}),"\n",(0,r.jsx)(t.h4,{id:"tabbaronpress",children:(0,r.jsx)(t.code,{children:"tabBarOnPress"})}),"\n",(0,r.jsx)(t.p,{children:"Callback to handle press events; the argument is an object containing:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"navigation"}),": navigation prop for the screen"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"defaultHandler"}),": the default handler for tab press"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Useful for adding a custom logic before the transition to the next scene (the tapped one) starts."}),"\n",(0,r.jsxs)(t.h2,{id:"using-with-react-native-paper-optional",children:["Using with ",(0,r.jsx)(t.code,{children:"react-native-paper"})," (optional)"]}),"\n",(0,r.jsxs)(t.p,{children:["You can use the theming support in ",(0,r.jsx)(t.code,{children:"react-native-paper"})," to customize the material bottom navigation by wrapping your app in ",(0,r.jsxs)(t.a,{href:"https://callstack.github.io/react-native-paper/getting-started.html",children:[(0,r.jsx)(t.code,{children:"Provider"})," from ",(0,r.jsx)(t.code,{children:"react-native-paper"})]}),". A common use case for this can be to customize the background color for the screens when your app has a dark theme. Follow the ",(0,r.jsxs)(t.a,{href:"https://callstack.github.io/react-native-paper/theming.html",children:["instructions on ",(0,r.jsx)(t.code,{children:"react-native-paper"}),"'s documentation"]})," to learn how to customize the theme."]})]})}function b(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5525:function(e,t,a){a.d(t,{Z:()=>o});var n=a("85893");a("67294");var r=a("67026");let i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a,children:t})}},47902:function(e,t,a){a.d(t,{Z:()=>j});var n=a("85893"),r=a("67294"),i=a("67026"),o=a("69599"),l=a("16550"),s=a("32000"),c=a("4520"),d=a("38341"),h=a("76009");function u(e){var t,a;return null!==(a=null===(t=r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==a?a:[]}function b(e){let{value:t,tabValues:a}=e;return a.some(e=>e.value===t)}var p=a("7227");let v="tabList__CuJ",m="tabItem_LNqP";function f(e){let{className:t,block:a,selectedValue:r,selectValue:l,tabValues:s}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),h=e=>{let t=e.currentTarget,a=s[c.indexOf(t)].value;a!==r&&(d(t),l(a))},u=e=>{var t,a;let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let a=c.indexOf(e.currentTarget)+1;n=null!==(t=c[a])&&void 0!==t?t:c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=null!==(a=c[t])&&void 0!==a?a:c[c.length-1]}}null==n||n.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t),children:s.map(e=>{let{value:t,label:a,attributes:o}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:h,...o,className:(0,i.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=a?a:t},t)})})}function x(e){let{lazy:t,children:a,selectedValue:o}=e,l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){let e=l.find(e=>e.props.value===o);return e?(0,r.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:l.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o}))})}function g(e){let t=function(e){let{defaultValue:t,queryString:a=!1,groupId:n}=e,i=function(e){let{values:t,children:a}=e;return(0,r.useMemo)(()=>{let e=null!=t?t:u(a).map(e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}});return!function(e){let t=(0,d.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(t.map(e=>e.value).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[t,a])}(e),[o,p]=(0,r.useState)(()=>(function(e){var t;let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!b({value:a,tabValues:n}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(a,'" but none of its children has the corresponding value. Available values are: ').concat(n.map(e=>e.value).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return a}let r=null!==(t=n.find(e=>e.default))&&void 0!==t?t:n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:i})),[v,m]=function(e){let{queryString:t=!1,groupId:a}=e,n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a}),o=(0,c._X)(i);return[o,(0,r.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})},[i,n])]}({queryString:a,groupId:n}),[f,x]=function(e){var t;let{groupId:a}=e;let n=(t=a)?"docusaurus.tab.".concat(t):null,[i,o]=(0,h.Nk)(n);return[i,(0,r.useCallback)(e=>{if(!!n)o.set(e)},[n,o])]}({groupId:n}),g=(()=>{let e=null!=v?v:f;return b({value:e,tabValues:i})?e:null})();return(0,s.Z)(()=>{g&&p(g)},[g]),{selectedValue:o,selectValue:(0,r.useCallback)(e=>{if(!b({value:e,tabValues:i}))throw Error("Can't select invalid tab value=".concat(e));p(e),m(e),x(e)},[m,x,i]),tabValues:i}}(e);return(0,n.jsxs)("div",{className:(0,i.Z)("tabs-container",v),children:[(0,n.jsx)(f,{...t,...e}),(0,n.jsx)(x,{...t,...e})]})}function j(e){let t=(0,p.Z)();return(0,n.jsx)(g,{...e,children:u(e.children)},String(t))}},50065:function(e,t,a){a.d(t,{Z:function(){return l},a:function(){return o}});var n=a(67294);let r={},i=n.createContext(r);function o(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);