"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["77278"],{6622:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>r,default:()=>d,assets:()=>h,toc:()=>c,frontMatter:()=>s});var n=JSON.parse('{"id":"pitch","title":"Pitch & anti-pitch","description":"It\'s useful when considering whether or not to use a project to understand the tradeoffs that the developers of the project made when building it. What problems does it explicitly try to solve for you, and which ones does it ignore? What are the current limitations of the project and common problems that people encounter? These are the kinds of questions that we believe you should have answers to when making an important technology decision for your project, and so we have documented answers to these questions as best we can here, in the form of a \\"pitch\\" (why you should use it) and \\"anti-pitch\\" (why you should not use it). Please submit a pull request if you believe we have omitted important information!","source":"@site/versioned_docs/version-5.x/pitch.md","sourceDirName":".","slug":"/pitch","permalink":"/docs/5.x/pitch","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/pitch.md","tags":[],"version":"5.x","frontMatter":{"id":"pitch","title":"Pitch & anti-pitch","sidebar_label":"Pitch & anti-pitch"},"sidebar":"docs","previous":{"title":"More Resources","permalink":"/docs/5.x/more-resources"},"next":{"title":"Alternative libraries","permalink":"/docs/5.x/alternatives"}}'),a=i("85893"),o=i("50065");let s={id:"pitch",title:"Pitch & anti-pitch",sidebar_label:"Pitch & anti-pitch"},r=void 0,h={},c=[{value:"Pitch",id:"pitch",level:2},{value:"Anti-pitch",id:"anti-pitch",level:2}];function l(e){let t={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:['It\'s useful when considering whether or not to use a project to understand the tradeoffs that the developers of the project made when building it. What problems does it explicitly try to solve for you, and which ones does it ignore? What are the current limitations of the project and common problems that people encounter? These are the kinds of questions that we believe you should have answers to when making an important technology decision for your project, and so we have documented answers to these questions as best we can here, in the form of a "pitch" (why you should use it) and "anti-pitch" (why you should not use it). Please ',(0,a.jsx)(t.a,{href:"https://github.com/react-navigation/react-navigation.github.io",children:"submit a pull request"})," if you believe we have omitted important information!"]}),"\n",(0,a.jsx)(t.h2,{id:"pitch",children:"Pitch"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["React Navigation doesn't include any native code in the library itself, but we use many native libraries such as ",(0,a.jsx)(t.a,{href:"https://software-mansion.github.io/react-native-reanimated/",children:"Reanimated"}),", ",(0,a.jsx)(t.a,{href:"https://software-mansion.github.io/react-native-gesture-handler/",children:"Gesture Handler"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/software-mansion/react-native-screens",children:"Screens"})," etc. to implement performant animations and gestures. Depending on the navigator, many UI components are written in JavaScript on top of React Native primitives. This has a lot of benefits:","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Easy OTA updates"}),"\n",(0,a.jsx)(t.li,{children:"Debuggable"}),"\n",(0,a.jsx)(t.li,{children:"Customizable"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Most apps heavily customize navigation, to do this with an API that wraps native navigation you will need to write a lot of native code. In React Navigation, we provide navigators written fully with JavaScript (e.g. ",(0,a.jsx)(t.a,{href:"/docs/5.x/stack-navigator",children:"Stack Navigator"}),") and navigators implemented on top of platform navigation primitives (e.g. ",(0,a.jsx)(t.a,{href:"https://github.com/software-mansion/react-native-screens/tree/master/native-stack",children:"Native Stack Navigator"}),"). This lets you pick the navigators suitable for your use case, depending on whether you want native platform behavior or full customizability."]}),"\n",(0,a.jsx)(t.li,{children:"It's easy to write your own navigators that integrate cleanly with standard navigators, or to fork the standard navigators and create your own version of them with the exact look and feel you want in your app."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"anti-pitch",children:"Anti-pitch"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Improvements may require breaking changes. We are working to make ",(0,a.jsx)(t.a,{href:"https://www.quora.com/What-is-the-origin-of-the-phrase-make-the-easy-things-easy-and-the-hard-things-possible",children:'"easy things easy and hard things possible"'})," and this may require us to change the API at times."]}),"\n",(0,a.jsxs)(t.li,{children:["Many navigators don't directly use the native navigation APIs on iOS and Android; rather, they use the lowest level pieces and then re-creates some subset of the APIs on top. This is a conscious choice in order to make it possible for users to customize any part of the navigation experience (because it's implemented in JavaScript) and to be able to debug issues that they encounter without needing to learn Objective C / Swift / Java / Kotlin.","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["If you need the exact platform behavior, you can choose to use the navigators that use native platform primitives (e.g. ",(0,a.jsx)(t.a,{href:"https://github.com/software-mansion/react-native-screens/tree/master/native-stack",children:"Native Stack Navigator"}),"), or use another library that wraps the platform APIs. Read more about these in ",(0,a.jsx)(t.a,{href:"/docs/5.x/alternatives",children:"Alternatives"})," and be sure to understand the tradeoffs that they make before digging in!"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["There are other limitations which you may want to consider, see ",(0,a.jsx)(t.a,{href:"/docs/5.x/limitations",children:"Limitations"})," for more details."]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return r},a:function(){return s}});var n=i(67294);let a={},o=n.createContext(a);function s(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);