"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[94920],{77564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(85893),i=n(11151),a=n(74866),s=n(85162);const o={id:"testing",title:"Testing with Jest",sidebar_label:"Testing with Jest"},l=void 0,c={id:"testing",title:"Testing with Jest",description:"Testing code using React Navigation may require some setup since we need to mock native dependencies used in the navigators. We recommend using Jest to write unit tests.",source:"@site/versioned_docs/version-7.x/testing.md",sourceDirName:".",slug:"/testing",permalink:"/docs/7.x/testing",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/testing.md",tags:[],version:"7.x",frontMatter:{id:"testing",title:"Testing with Jest",sidebar_label:"Testing with Jest"},sidebar:"docs",previous:{title:"State persistence",permalink:"/docs/7.x/state-persistence"},next:{title:"Type checking with TypeScript",permalink:"/docs/7.x/typescript"}},u={},d=[{value:"Mocking native modules",id:"mocking-native-modules",level:2},{value:"Writing tests",id:"writing-tests",level:2},{value:"Best practices",id:"best-practices",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Testing code using React Navigation may require some setup since we need to mock native dependencies used in the navigators. We recommend using ",(0,r.jsx)(t.a,{href:"https://jestjs.io",children:"Jest"})," to write unit tests."]}),"\n",(0,r.jsx)(t.h2,{id:"mocking-native-modules",children:"Mocking native modules"}),"\n",(0,r.jsx)(t.p,{children:"To be able to test React Navigation components, certain dependencies will need to be mocked depending on which components are being used."}),"\n",(0,r.jsxs)(t.p,{children:["If you're using ",(0,r.jsx)(t.code,{children:"@react-navigation/drawer"}),", you will need to mock:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"react-native-reanimated"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"react-native-gesture-handler"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["If you're using ",(0,r.jsx)(t.code,{children:"@react-navigation/stack"}),", you will only need to mock:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"react-native-gesture-handler"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["To add the mocks, create a file ",(0,r.jsx)(t.code,{children:"jest/setup.js"})," (or any other file name of your choice) and paste the following code in it:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"// include this line for mocking react-native-gesture-handler\nimport 'react-native-gesture-handler/jestSetup';\n\n// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated\njest.mock('react-native-reanimated', () => {\n  const Reanimated = require('react-native-reanimated/mock');\n\n  // The mock for `call` immediately calls the callback which is incorrect\n  // So we override it with a no-op\n  Reanimated.default.call = () => {};\n\n  return Reanimated;\n});\n\n// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing\njest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Then we need to use this setup file in our jest config. You can add it under ",(0,r.jsx)(t.code,{children:"setupFiles"})," option in a ",(0,r.jsx)(t.code,{children:"jest.config.js"})," file or the ",(0,r.jsx)(t.code,{children:"jest"})," key in ",(0,r.jsx)(t.code,{children:"package.json"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "preset": "react-native",\n  "setupFiles": ["<rootDir>/jest/setup.js"]\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Make sure that the path to the file in ",(0,r.jsx)(t.code,{children:"setupFiles"})," is correct. Jest will run these files before running your tests, so it's the best place to put your global mocks."]}),"\n",(0,r.jsx)(t.p,{children:"If you're not using Jest, then you'll need to mock these modules according to the test framework you are using."}),"\n",(0,r.jsx)(t.h2,{id:"writing-tests",children:"Writing tests"}),"\n",(0,r.jsxs)(t.p,{children:["We recommend using ",(0,r.jsx)(t.a,{href:"https://callstack.github.io/react-native-testing-library/",children:"React Native Testing Library"})," along with ",(0,r.jsx)(t.a,{href:"https://github.com/testing-library/jest-native",children:(0,r.jsx)(t.code,{children:"jest-native"})})," to write your tests."]}),"\n",(0,r.jsx)(t.p,{children:"Example:"}),"\n",(0,r.jsxs)(a.Z,{groupId:"config",queryString:"config",children:[(0,r.jsx)(s.Z,{value:"static",label:"Static",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"name='Testing with jest'",children:"import * as React from 'react';\nimport { screen, render, fireEvent } from '@testing-library/react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { RootNavigator } from './RootNavigator';\n\nconst Navigation = createStaticNavigation(RootNavigator);\n\ntest('shows profile screen when View Profile is pressed', () => {\n  render(<Navigation />);\n\n  fireEvent.press(screen.getByText('View Profile'));\n\n  expect(screen.getByText('My Profile')).toBeOnTheScreen();\n});\n"})})}),(0,r.jsx)(s.Z,{value:"dynamic",label:"Dynamic",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"name='Testing with jest'",children:"import * as React from 'react';\nimport { screen, render, fireEvent } from '@testing-library/react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { RootNavigator } from './RootNavigator';\n\ntest('shows profile screen when View Profile is pressed', () => {\n  render(\n    <NavigationContainer>\n      <RootNavigator />\n    </NavigationContainer>\n  );\n\n  fireEvent.press(screen.getByText('View Profile'));\n\n  expect(screen.getByText('My Profile')).toBeOnTheScreen();\n});\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,r.jsx)(t.p,{children:"There are a couple of things to keep in mind when writing tests for components using React Navigation:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Avoid mocking React Navigation. Instead, use a real navigator in your tests."}),"\n",(0,r.jsx)(t.li,{children:"Don't check for navigation actions. Instead, check for the result of the navigation such as the screen being rendered."}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(86010);const i={tabItem:"tabItem_Ymn6"};var a=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),i=n(86010),a=n(12466),s=n(16550),o=n(20469),l=n(91980),c=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=h(e),[s,l]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const i=null!=(t=r.find((e=>e.default)))?t:r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:n,groupId:i}),[g,v]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[i,a]=(0,u.Nk)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),f=(()=>{const e=null!=c?c:g;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);l(e),d(e),v(e)}),[d,v,a]),tabValues:a}}var v=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==r&&(c(t),s(i))},d=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const t=l.indexOf(e.currentTarget)+1;n=null!=(r=l[t])?r:l[0];break}case"ArrowLeft":{var i;const t=l.indexOf(e.currentTarget)-1;n=null!=(i=l[t])?i:l[l.length-1];break}}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.Z)("tabs__item",f.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===t}),children:null!=n?n:t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,i.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(x,{...e,...t}),(0,b.jsx)(j,{...e,...t})]})}function y(e){const t=(0,v.Z)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(67294);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);