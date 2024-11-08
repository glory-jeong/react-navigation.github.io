"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["348"],{80473:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>p,assets:()=>c,toc:()=>l,frontMatter:()=>o});var i=JSON.parse('{"id":"react-native-screens","title":"Optimize memory usage and performance","description":"Prior to react-navigation@2.14.0, all screens are essentially regular native View in each platform, which will increase memory usage and make the render tree deep in a heavy-stacked application. This is one of the reason your app is slowing down comparing to native navigation solution.","source":"@site/versioned_docs/version-4.x/react-native-screens.md","sourceDirName":".","slug":"/react-native-screens","permalink":"/docs/4.x/react-native-screens","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/react-native-screens.md","tags":[],"version":"4.x","frontMatter":{"id":"react-native-screens","title":"Optimize memory usage and performance","sidebar_label":"Optimize memory usage and performance"},"sidebar":"version-4.x-docs","previous":{"title":"Call a function when focused screen changes","permalink":"/docs/4.x/function-after-focusing-screen"},"next":{"title":"Upgrading from 3.x","permalink":"/docs/4.x/upgrading-from-3.x"}}'),a=t("85893"),r=t("50065");let o={id:"react-native-screens",title:"Optimize memory usage and performance",sidebar_label:"Optimize memory usage and performance"},s=void 0,c={},l=[{value:"Setup when you are using Expo",id:"setup-when-you-are-using-expo",level:2},{value:"Setup in normal react-native applications",id:"setup-in-normal-react-native-applications",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Prior to ",(0,a.jsx)(n.code,{children:"react-navigation@2.14.0"}),", all screens are essentially regular native ",(0,a.jsx)(n.code,{children:"View"})," in each platform, which will increase memory usage and make the render tree deep in a heavy-stacked application. This is one of the reason your app is slowing down comparing to native navigation solution."]}),"\n",(0,a.jsxs)(n.p,{children:["With the advent of ",(0,a.jsx)(n.code,{children:"react-native-screens"}),", the native screen optimization is brought possible to ",(0,a.jsx)(n.code,{children:"react-navigation"})," by bringing the native navigation component (",(0,a.jsx)(n.code,{children:"UIViewController"})," for iOS, and ",(0,a.jsx)(n.code,{children:"FragmentActivity"})," for Android). By using ",(0,a.jsx)(n.code,{children:"react-native-screens"}),", it is possible for each native platform to optimize the memory usage for screens that are under the view stack and also simplify the native node hierarchy. You can take a look at the comparison ",(0,a.jsx)(n.a,{href:"https://twitter.com/janicduplessis/status/1039979591815897088?s=21",children:"here"})," to see the performance gain."]}),"\n",(0,a.jsx)(n.h2,{id:"setup-when-you-are-using-expo",children:"Setup when you are using Expo"}),"\n",(0,a.jsxs)(n.p,{children:["By default expo already included ",(0,a.jsx)(n.code,{children:"react-native-screens"}),", all you need to do is pasting the following snippet before your navigation stacks are rendered (typically in an ",(0,a.jsx)(n.code,{children:"index.js"})," or ",(0,a.jsx)(n.code,{children:"App.js"})," file):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// Before rendering any navigation stack\nimport { useScreens } from 'react-native-screens';\nuseScreens();\n"})}),"\n",(0,a.jsx)(n.h2,{id:"setup-in-normal-react-native-applications",children:"Setup in normal react-native applications"}),"\n",(0,a.jsxs)(n.p,{children:["You will need to follow the installation instruction from ",(0,a.jsx)(n.a,{href:"https://github.com/software-mansion/react-native-screens",children:"react-native-screens"})," first. After that, you can import the library like mentioned above and enjoy the optimization."]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var i=t(67294);let a={},r=i.createContext(a);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);