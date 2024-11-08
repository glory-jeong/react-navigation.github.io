"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["79556"],{57752:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>r,default:()=>d,assets:()=>h,toc:()=>c,frontMatter:()=>s});var n=JSON.parse('{"id":"pitch","title":"Pitch & anti-pitch","description":"It\'s useful when considering whether or not to use a project to understand the tradeoffs that the developers of the project made when building it. What problems does it explicitly try to solve for you, and which ones does it ignore? What are the current limitations of the project and common problems that people encounter? These are the kinds of questions that we believe you should have answers to when making an important technology decision for your project, and so we have documented answers to these questions as best we can here, in the form of a \\"pitch\\" (why you should use it) and \\"anti-pitch\\" (why you should not use it). Please submit a pull request if you believe we have omitted important information!","source":"@site/versioned_docs/version-2.x/pitch.md","sourceDirName":".","slug":"/pitch","permalink":"/docs/2.x/pitch","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/pitch.md","tags":[],"version":"2.x","frontMatter":{"id":"pitch","title":"Pitch & anti-pitch","sidebar_label":"Pitch & anti-pitch"},"sidebar":"version-2.x-docs","previous":{"title":"More Resources","permalink":"/docs/2.x/more-resources"},"next":{"title":"Alternative libraries","permalink":"/docs/2.x/alternatives"}}'),o=i("85893"),a=i("50065");let s={id:"pitch",title:"Pitch & anti-pitch",sidebar_label:"Pitch & anti-pitch"},r=void 0,h={},c=[{value:"Pitch",id:"pitch",level:2},{value:"Anti-pitch",id:"anti-pitch",level:2}];function l(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:['It\'s useful when considering whether or not to use a project to understand the tradeoffs that the developers of the project made when building it. What problems does it explicitly try to solve for you, and which ones does it ignore? What are the current limitations of the project and common problems that people encounter? These are the kinds of questions that we believe you should have answers to when making an important technology decision for your project, and so we have documented answers to these questions as best we can here, in the form of a "pitch" (why you should use it) and "anti-pitch" (why you should not use it). Please ',(0,o.jsx)(t.a,{href:"https://github.com/react-navigation/website",children:"submit a pull request"})," if you believe we have omitted important information!"]}),"\n",(0,o.jsx)(t.h2,{id:"pitch",children:"Pitch"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Everything is written in JavaScript on top of React Native primitives \u2014 for example, animations use the ",(0,o.jsx)(t.code,{children:"Animated"})," API and its native driver option in order to run the animations on the main thread and produce smooth 60 fps transitions. Writing everything except the low-level primitives like animations and gestures in JavaScript has a lot of benefits:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Easy OTA updates"}),"\n",(0,o.jsx)(t.li,{children:"Debuggable"}),"\n",(0,o.jsx)(t.li,{children:"Customizable"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"Most apps heavily customize navigation, to do this with an API that wraps native navigation you will need to write a lot of native code."}),"\n",(0,o.jsx)(t.li,{children:"It's easy to write your own navigators that integrate cleanly with standard navigators, or to fork the standard navigators and create your own version of them with the exact look and feel you want in your app."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"anti-pitch",children:"Anti-pitch"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The API is sometimes unintuitive and difficult to use, improvements may require breaking changes. We are working to make ",(0,o.jsx)(t.a,{href:"https://www.quora.com/What-is-the-origin-of-the-phrase-make-the-easy-things-easy-and-the-hard-things-possible",children:'"easy things easy and hard things possible"'})," and this may require us to change the API at times."]}),"\n",(0,o.jsxs)(t.li,{children:["React Navigation does not directly use the native navigation APIs on iOS and Android; rather, it re-creates some subset of those APIs. This is a conscious choice in order to make it possible for users to customize any part of the navigation experience (because it's implemented in JavaScript) and to be able to debug issues that they encounter without needing to learn Objective C / Swift / Java / Kotlin.","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["If you need the exact platform behavior you are better off using another library that wraps the platform APIs. Read more about these in ",(0,o.jsx)(t.a,{href:"/docs/2.x/alternatives",children:"Alternatives"})," and be sure to understand the tradeoffs that they make before digging in!"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"Because much of the logic for React Navigation runs in JavaScript rather than in native, the usual concerns about blocking the JavaScript thread come into play."}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return r},a:function(){return s}});var n=i(67294);let o={},a=n.createContext(o);function s(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);