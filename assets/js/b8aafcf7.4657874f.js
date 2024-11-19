"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["32169"],{79418:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>u,frontMatter:()=>s});var a=JSON.parse('{"id":"getting-started","title":"Getting started","description":"React Navigation is born from the React Native community\'s need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives.","source":"@site/versioned_docs/version-3.x/getting-started.md","sourceDirName":".","slug":"/getting-started","permalink":"/docs/3.x/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/getting-started.md","tags":[],"version":"3.x","frontMatter":{"id":"getting-started","title":"Getting started","sidebar_label":"Getting started"},"sidebar":"version-3.x-docs","next":{"title":"Hello React Navigation","permalink":"/docs/3.x/hello-react-navigation"}}'),r=n("85893"),i=n("50065"),o=n("47902"),l=n("5525");let s={id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},c=void 0,d={},u=[{value:"What to expect",id:"what-to-expect",level:2},{value:"Installation",id:"installation",level:2},{value:"Hybrid iOS Applications (Skip for RN only projects)",id:"hybrid-ios-applications-skip-for-rn-only-projects",level:2}];function h(e){let t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"React Navigation is born from the React Native community's need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives."}),"\n",(0,r.jsxs)(t.p,{children:["Before you commit to using React Navigation for your project, you might want to read the ",(0,r.jsx)(t.a,{href:"/docs/3.x/pitch",children:"anti-pitch"})," \u2014 it will help you to understand the tradeoffs that we have chosen along with the areas where we consider the library to be deficient currently."]}),"\n",(0,r.jsx)(t.h2,{id:"what-to-expect",children:"What to expect"}),"\n",(0,r.jsxs)(t.p,{children:["If you're already familiar with React Native then you'll be able to get moving with React Navigation quickly! If not, you may want to read sections 1 to 4 (inclusive) of ",(0,r.jsx)(t.a,{href:"http://reactnativeexpress.com/",children:"React Native Express"})," first, then come back here when you're done."]}),"\n",(0,r.jsxs)(t.p,{children:["What follows within the ",(0,r.jsx)(t.em,{children:"Fundamentals"})," section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation."]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(t.p,{children:["Install the ",(0,r.jsx)(t.code,{children:"react-navigation"})," package in your React Native project."]}),"\n",(0,r.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(l.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install react-navigation\n"})})}),(0,r.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add react-navigation\n"})})}),(0,r.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add react-navigation\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["Next, install ",(0,r.jsx)(t.code,{children:"react-native-gesture-handler"})," and ",(0,r.jsx)(t.code,{children:"react-native-reanimated"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"If you're using Expo, to ensure that you get the compatible versions of the libraries you should run:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx expo install react-native-gesture-handler react-native-reanimated\n"})}),"\n",(0,r.jsx)(t.p,{children:"Otherwise, just use yarn or npm directly:"}),"\n",(0,r.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(l.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install react-native-gesture-handler react-native-reanimated\n"})})}),(0,r.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add react-native-gesture-handler react-native-reanimated\n"})})}),(0,r.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add react-native-gesture-handler react-native-reanimated\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"Next, if you are not using the Expo managed workflow then you need to link these libraries if you haven't already. The steps depends on your React Native version:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"React Native 0.60 and higher"})}),"\n",(0,r.jsxs)(t.p,{children:["On newer versions of React Native, ",(0,r.jsx)(t.a,{href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md",children:"linking is automatic"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["On iOS, to complete the linking, make sure you have ",(0,r.jsx)(t.a,{href:"https://cocoapods.org/",children:"Cocoapods"})," installed. Then run:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd ios\npod install\ncd ..\n"})}),"\n",(0,r.jsxs)(t.p,{children:["On Android, it shouldn't need any more steps. But if you get errors regarding Android Support library during building the app, you need to install and configure ",(0,r.jsx)(t.a,{href:"https://github.com/mikehardy/jetifier",children:"jetifier"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"React Native 0.59 and lower"})}),"\n",(0,r.jsx)(t.p,{children:"If you're on an older React Native version, you need to manually link the dependencies. To do that, run:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"react-native link react-native-reanimated\nreact-native link react-native-gesture-handler\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["To finalize installation of ",(0,r.jsx)(t.code,{children:"react-native-gesture-handler"})," for Android, be sure to make the necessary modifications to ",(0,r.jsx)(t.code,{children:"MainActivity.java"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",children:'package com.reactnavigation.example;\n\nimport com.facebook.react.ReactActivity;\n+ import com.facebook.react.ReactActivityDelegate;\n+ import com.facebook.react.ReactRootView;\n+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;\n\npublic class MainActivity extends ReactActivity {\n\n  @Override\n  protected String getMainComponentName() {\n    return "Example";\n  }\n\n+  @Override\n+  protected ReactActivityDelegate createReactActivityDelegate() {\n+    return new ReactActivityDelegate(this, getMainComponentName()) {\n+      @Override\n+      protected ReactRootView createRootView() {\n+       return new RNGestureHandlerEnabledRootView(MainActivity.this);\n+      }\n+    };\n+  }\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Finally, run ",(0,r.jsx)(t.code,{children:"react-native run-android"})," or ",(0,r.jsx)(t.code,{children:"react-native run-ios"})," to launch the app on your device/simulator."]}),"\n",(0,r.jsx)(t.h2,{id:"hybrid-ios-applications-skip-for-rn-only-projects",children:"Hybrid iOS Applications (Skip for RN only projects)"}),"\n",(0,r.jsxs)(t.p,{children:["If you're using React Navigation within a hybrid app - an iOS app that has both Swift/ObjC and React Native parts - you may be missing the ",(0,r.jsx)(t.code,{children:"RCTLinkingIOS"})," subspec in your Podfile, which is installed by default in new RN projects. To add this, ensure your Podfile looks like the following:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:" pod 'React', :path => '../node_modules/react-native', :subspecs => [\n    . . . // other subspecs\n    'RCTLinkingIOS',\n    . . .\n  ]\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You're good to go! Continue to ",(0,r.jsx)(t.a,{href:"/docs/3.x/hello-react-navigation",children:'"Hello React Navigation"'})," to start writing some code."]})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5525:function(e,t,n){n.d(t,{Z:()=>o});var a=n("85893");n("67294");var r=n("67026");let i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n,children:t})}},47902:function(e,t,n){n.d(t,{Z:()=>y});var a=n("85893"),r=n("67294"),i=n("67026"),o=n("69599"),l=n("16550"),s=n("32000"),c=n("4520"),d=n("38341"),u=n("76009");function h(e){var t,n;return null!==(n=null===(t=r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function p(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var v=n("7227");let m="tabList__CuJ",g="tabItem_LNqP";function f(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:s}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),u=e=>{let t=e.currentTarget,n=s[c.indexOf(t)].value;n!==r&&(d(t),l(n))},h=e=>{var t,n;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;a=null!==(t=c[n])&&void 0!==t?t:c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;a=null!==(n=c[t])&&void 0!==n?n:c[c.length-1]}}null==a||a.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:s.map(e=>{let{value:t,label:n,attributes:o}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:h,onClick:u,...o,className:(0,i.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=n?n:t},t)})})}function x(e){let{lazy:t,children:n,selectedValue:o}=e,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=l.find(e=>e.props.value===o);return e?(0,r.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:l.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o}))})}function b(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:a}=e,i=function(e){let{values:t,children:n}=e;return(0,r.useMemo)(()=>{let e=null!=t?t:h(n).map(e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}});return!function(e){let t=(0,d.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(t.map(e=>e.value).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[t,n])}(e),[o,v]=(0,r.useState)(()=>(function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(n,'" but none of its children has the corresponding value. Available values are: ').concat(a.map(e=>e.value).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return n}let r=null!==(t=a.find(e=>e.default))&&void 0!==t?t:a[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:i})),[m,g]=function(e){let{queryString:t=!1,groupId:n}=e,a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n}),o=(0,c._X)(i);return[o,(0,r.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})},[i,a])]}({queryString:n,groupId:a}),[f,x]=function(e){var t;let{groupId:n}=e;let a=(t=n)?"docusaurus.tab.".concat(t):null,[i,o]=(0,u.Nk)(a);return[i,(0,r.useCallback)(e=>{if(!!a)o.set(e)},[a,o])]}({groupId:a}),b=(()=>{let e=null!=m?m:f;return p({value:e,tabValues:i})?e:null})();return(0,s.Z)(()=>{b&&v(b)},[b]),{selectedValue:o,selectValue:(0,r.useCallback)(e=>{if(!p({value:e,tabValues:i}))throw Error("Can't select invalid tab value=".concat(e));v(e),g(e),x(e)},[g,x,i]),tabValues:i}}(e);return(0,a.jsxs)("div",{className:(0,i.Z)("tabs-container",m),children:[(0,a.jsx)(f,{...t,...e}),(0,a.jsx)(x,{...t,...e})]})}function y(e){let t=(0,v.Z)();return(0,a.jsx)(b,{...e,children:h(e.children)},String(t))}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var a=n(67294);let r={},i=a.createContext(r);function o(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);