"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[2684],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),v=l(a),g=r,d=v["".concat(c,".").concat(g)]||v[g]||u[g]||i;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=v;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},85939:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return v}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={id:"navigation-views",title:"Navigation views",sidebar_label:"Navigation views"},c=void 0,l={unversionedId:"navigation-views",id:"version-4.x/navigation-views",isDocsHomePage:!1,title:"Navigation views",description:"Navigation views are presentation components that take a router and a navigation prop, and can display several screens, as specified by the navigation.state.",source:"@site/versioned_docs/version-4.x/navigation-views.md",sourceDirName:".",slug:"/navigation-views",permalink:"/docs/4.x/navigation-views",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/navigation-views.md",tags:[],version:"4.x",frontMatter:{id:"navigation-views",title:"Navigation views",sidebar_label:"Navigation views"},sidebar:"version-4.x-docs",previous:{title:"Custom routers",permalink:"/docs/4.x/custom-routers"},next:{title:"Supported React Native versions",permalink:"/docs/4.x/supported-react-native-versions"}},p=[{value:"Built in Views",id:"built-in-views",children:[],level:2}],u={toc:p};function v(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Navigation views are presentation components that take a ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.x/routers"},(0,i.kt)("inlineCode",{parentName:"a"},"router"))," and a ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.x/navigation-prop"},(0,i.kt)("inlineCode",{parentName:"a"},"navigation"))," prop, and can display several screens, as specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation.state"),"."),(0,i.kt)("p",null,"Navigation views are controlled React components that can present the current navigation state. They manage switching of screens, animations and gestures. They also present persistent navigation views such as tab bars and headers."),(0,i.kt)("h2",{id:"built-in-views"},"Built in Views"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation/blob/4.x/packages/stack/src/views/StackView.tsx"},"StackView")," - Present a stack that looks suitable on any platform",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/stack/blob/1.0/src/views/StackView/StackViewCard.tsx"},"StackViewCard")," - Present one card from the card stack, with gestures"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/stack/blob/1.0/src/views/Header/Header.tsx"},"Header")," - The header view for the card stack"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation/blob/4.x/packages/core/src/views/SwitchView/SwitchView.js"},"SwitchView")," - A navigator that only ever show one screen at a time, useful for authentication flows."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation/tree/4.x/packages/tabs"},"Tabs")," - A configurable tab switcher / pager"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation/tree/4.x/packages/drawer"},"Drawer")," - A view with a drawer that slides from the left")))}v.isMDXComponent=!0}}]);