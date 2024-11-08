"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["36041"],{45634:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>a});var i=JSON.parse('{"id":"testing","title":"Testing with Jest","description":"Testing code using React Navigation may require some setup since we need to mock native dependencies used in the navigators. We recommend using Jest to write unit tests.","source":"@site/versioned_docs/version-6.x/testing.md","sourceDirName":".","slug":"/testing","permalink":"/docs/6.x/testing","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/testing.md","tags":[],"version":"6.x","frontMatter":{"id":"testing","title":"Testing with Jest","sidebar_label":"Testing with Jest"},"sidebar":"docs","previous":{"title":"State persistence","permalink":"/docs/6.x/state-persistence"},"next":{"title":"Type checking with TypeScript","permalink":"/docs/6.x/typescript"}}'),s=n("85893"),r=n("50065");let a={id:"testing",title:"Testing with Jest",sidebar_label:"Testing with Jest"},o=void 0,c={},l=[{value:"Mocking native modules",id:"mocking-native-modules",level:2},{value:"Writing tests",id:"writing-tests",level:2},{value:"Best practices",id:"best-practices",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Testing code using React Navigation may require some setup since we need to mock native dependencies used in the navigators. We recommend using ",(0,s.jsx)(t.a,{href:"https://jestjs.io",children:"Jest"})," to write unit tests."]}),"\n",(0,s.jsx)(t.h2,{id:"mocking-native-modules",children:"Mocking native modules"}),"\n",(0,s.jsx)(t.p,{children:"To be able to test React Navigation components, certain dependencies will need to be mocked depending on which components are being used."}),"\n",(0,s.jsxs)(t.p,{children:["If you're using ",(0,s.jsx)(t.code,{children:"@react-navigation/drawer"}),", you will need to mock:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"react-native-reanimated"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"react-native-gesture-handler"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["If you're using ",(0,s.jsx)(t.code,{children:"@react-navigation/stack"}),", you will only need to mock:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"react-native-gesture-handler"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["To add the mocks, create a file ",(0,s.jsx)(t.code,{children:"jest/setup.js"})," (or any other file name of your choice) and paste the following code in it:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// include this line for mocking react-native-gesture-handler\nimport 'react-native-gesture-handler/jestSetup';\n\n// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated\njest.mock('react-native-reanimated', () => {\n  const Reanimated = require('react-native-reanimated/mock');\n\n  // The mock for `call` immediately calls the callback which is incorrect\n  // So we override it with a no-op\n  Reanimated.default.call = () => {};\n\n  return Reanimated;\n});\n\n// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing\njest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Then we need to use this setup file in our jest config. You can add it under ",(0,s.jsx)(t.code,{children:"setupFiles"})," option in a ",(0,s.jsx)(t.code,{children:"jest.config.js"})," file or the ",(0,s.jsx)(t.code,{children:"jest"})," key in ",(0,s.jsx)(t.code,{children:"package.json"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "preset": "react-native",\n  "setupFiles": ["<rootDir>/jest/setup.js"]\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Make sure that the path to the file in ",(0,s.jsx)(t.code,{children:"setupFiles"})," is correct. Jest will run these files before running your tests, so it's the best place to put your global mocks."]}),"\n",(0,s.jsx)(t.p,{children:"If you're not using Jest, then you'll need to mock these modules according to the test framework you are using."}),"\n",(0,s.jsx)(t.h2,{id:"writing-tests",children:"Writing tests"}),"\n",(0,s.jsxs)(t.p,{children:["We recommend using ",(0,s.jsx)(t.a,{href:"https://callstack.github.io/react-native-testing-library/",children:"React Native Testing Library"})," along with ",(0,s.jsx)(t.a,{href:"https://github.com/testing-library/jest-native",children:(0,s.jsx)(t.code,{children:"jest-native"})})," to write your tests."]}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import * as React from 'react';\nimport { screen, render, fireEvent } from '@testing-library/react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { RootNavigator } from './RootNavigator';\n\ntest('shows profile screen when View Profile is pressed', () => {\n  render(\n    <NavigationContainer>\n      <RootNavigator />\n    </NavigationContainer>\n  );\n\n  fireEvent.press(screen.getByText('View Profile'));\n\n  expect(screen.getByText('My Profile')).toBeOnTheScreen();\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,s.jsx)(t.p,{children:"There are a couple of things to keep in mind when writing tests for components using React Navigation:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Avoid mocking React Navigation. Instead, use a real navigator in your tests."}),"\n",(0,s.jsx)(t.li,{children:"Don't check for navigation actions. Instead, check for the result of the navigation such as the screen being rendered."}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var i=n(67294);let s={},r=i.createContext(s);function a(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);