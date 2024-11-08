"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["62875"],{86611:function(e,n,a){a.r(n),a.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>g,assets:()=>c,toc:()=>d,frontMatter:()=>o});var i=JSON.parse('{"id":"drawer-based-navigation","title":"Drawer navigation","description":"Common pattern in navigation is to use drawer from left (sometimes right) side for navigating between screens.","source":"@site/versioned_docs/version-6.x/drawer-based-navigation.md","sourceDirName":".","slug":"/drawer-based-navigation","permalink":"/docs/6.x/drawer-based-navigation","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/drawer-based-navigation.md","tags":[],"version":"6.x","frontMatter":{"id":"drawer-based-navigation","title":"Drawer navigation","sidebar_label":"Drawer navigation"},"sidebar":"docs","previous":{"title":"Tab navigation","permalink":"/docs/6.x/tab-based-navigation"},"next":{"title":"Authentication flows","permalink":"/docs/6.x/auth-flow"}}'),t=a("85893"),r=a("50065");let o={id:"drawer-based-navigation",title:"Drawer navigation",sidebar_label:"Drawer navigation"},s=void 0,c={},d=[{value:"Minimal example of drawer-based navigation",id:"minimal-example-of-drawer-based-navigation",level:2},{value:"Opening and closing drawer",id:"opening-and-closing-drawer",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Common pattern in navigation is to use drawer from left (sometimes right) side for navigating between screens."}),"\n",(0,t.jsxs)(n.p,{children:["Before continuing, first install and configure ",(0,t.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation/tree/main/packages/drawer",children:(0,t.jsx)(n.code,{children:"@react-navigation/drawer"})})," and its dependencies following the ",(0,t.jsx)(n.a,{href:"/docs/6.x/drawer-navigator#installation",children:"installation instructions"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"minimal-example-of-drawer-based-navigation",children:"Minimal example of drawer-based navigation"}),"\n",(0,t.jsxs)(n.p,{children:["To use this drawer navigator, import it from ",(0,t.jsx)(n.code,{children:"@react-navigation/drawer"}),":\n(swipe right to open)"]}),"\n",(0,t.jsx)("samp",{id:"drawer-based-navigation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import * as React from 'react';\nimport { Button, View } from 'react-native';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\nimport { NavigationContainer } from '@react-navigation/native';\n\nfunction HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button\n        onPress={() => navigation.navigate('Notifications')}\n        title=\"Go to notifications\"\n      />\n    </View>\n  );\n}\n\nfunction NotificationsScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.goBack()} title=\"Go back home\" />\n    </View>\n  );\n}\n\nconst Drawer = createDrawerNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Drawer.Navigator initialRouteName=\"Home\">\n        <Drawer.Screen name=\"Home\" component={HomeScreen} />\n        <Drawer.Screen name=\"Notifications\" component={NotificationsScreen} />\n      </Drawer.Navigator>\n    </NavigationContainer>\n  );\n}\n"})}),"\n",(0,t.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,children:(0,t.jsx)("source",{src:"/assets/navigators/drawer/drawer.mp4"})}),"\n",(0,t.jsx)(n.h2,{id:"opening-and-closing-drawer",children:"Opening and closing drawer"}),"\n",(0,t.jsx)(n.p,{children:"To open and close drawer, use the following helpers:"}),"\n",(0,t.jsx)("samp",{id:"drawer-open-close-toggle"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"navigation.openDrawer();\nnavigation.closeDrawer();\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you would like to toggle the drawer you call the following:"}),"\n",(0,t.jsx)("samp",{id:"drawer-open-close-toggle"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"navigation.toggleDrawer();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Each of these functions, behind the scenes, are simply dispatching actions:"}),"\n",(0,t.jsx)("samp",{id:"drawer-dispatch"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"navigation.dispatch(DrawerActions.openDrawer());\nnavigation.dispatch(DrawerActions.closeDrawer());\nnavigation.dispatch(DrawerActions.toggleDrawer());\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you would like to determine if drawer is open or closed, you can do the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { useDrawerStatus } from '@react-navigation/drawer';\n\n// ...\n\nconst isDrawerOpen = useDrawerStatus() === 'open';\n"})})]})}function g(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return o}});var i=a(67294);let t={},r=i.createContext(t);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);