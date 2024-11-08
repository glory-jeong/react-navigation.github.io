"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["27681"],{85169:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>d,assets:()=>s,toc:()=>l,frontMatter:()=>i});var r=JSON.parse('{"id":"screen-tracking","title":"Screen tracking for analytics","description":"To track the currently active screen, we need to:","source":"@site/versioned_docs/version-5.x/screen-tracking.md","sourceDirName":".","slug":"/screen-tracking","permalink":"/docs/5.x/screen-tracking","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/screen-tracking.md","tags":[],"version":"5.x","frontMatter":{"id":"screen-tracking","title":"Screen tracking for analytics","sidebar_label":"Screen tracking for analytics"},"sidebar":"docs","previous":{"title":"Server rendering","permalink":"/docs/5.x/server-rendering"},"next":{"title":"Themes","permalink":"/docs/5.x/themes"}}'),a=t("85893"),o=t("50065");let i={id:"screen-tracking",title:"Screen tracking for analytics",sidebar_label:"Screen tracking for analytics"},c=void 0,s={},l=[{value:"Example",id:"example",level:2}];function u(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"To track the currently active screen, we need to:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Add a callback to get notified of state changes"}),"\n",(0,a.jsx)(n.li,{children:"Get the root navigator state and find the active route name"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["To get notified of state changes, we can use the ",(0,a.jsx)(n.code,{children:"onStateChange"})," prop on ",(0,a.jsx)(n.code,{children:"NavigationContainer"}),". To get the root navigator state, we can use the ",(0,a.jsx)(n.code,{children:"getRootState"})," method on the container's ref. Please note that ",(0,a.jsx)(n.code,{children:"onStateChange"})," is not called on initial render so you have to set your initial screen separately."]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"This example shows how the approach can be adapted to any mobile analytics SDK."}),"\n",(0,a.jsx)("samp",{id:"screen-tracking-for-analytics"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { useRef } from 'react';\nimport { NavigationContainer } from '@react-navigation/native';\n\nexport default () => {\n  const navigationRef = useRef();\n  const routeNameRef = useRef();\n\n  return (\n    <NavigationContainer\n      ref={navigationRef}\n      onReady={() =>\n        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)\n      }\n      onStateChange={async () => {\n        const previousRouteName = routeNameRef.current;\n        const currentRouteName = navigationRef.current.getCurrentRoute().name;\n        const trackScreenView = () => {\n          // Your implementation of analytics goes here!\n        };\n\n        if (previousRouteName !== currentRouteName) {\n          // Replace the line below to add the tracker from a mobile analytics SDK\n          await trackScreenView(currentRouteName);\n        }\n\n        // Save the current route name for later comparison\n        routeNameRef.current = currentRouteName;\n      }}\n    >\n      {/* ... */}\n    </NavigationContainer>\n  );\n};\n"})})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(67294);let a={},o=r.createContext(a);function i(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);