"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["33805"],{48719:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>s});var t=JSON.parse('{"id":"use-link-builder","title":"useLinkBuilder","description":"The useLinkBuilder hook returns helpers to build href or action based on the linking options. It returns an object with the following properties:","source":"@site/versioned_docs/version-7.x/use-link-builder.md","sourceDirName":".","slug":"/use-link-builder","permalink":"/docs/use-link-builder","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/use-link-builder.md","tags":[],"version":"7.x","frontMatter":{"id":"use-link-builder","title":"useLinkBuilder","sidebar_label":"useLinkBuilder"},"sidebar":"docs","previous":{"title":"useLinkProps","permalink":"/docs/use-link-props"},"next":{"title":"useScrollToTop","permalink":"/docs/use-scroll-to-top"}}'),r=i("85893"),o=i("50065");let s={id:"use-link-builder",title:"useLinkBuilder",sidebar_label:"useLinkBuilder"},a=void 0,l={},d=[{value:"<code>buildHref</code>",id:"buildhref",level:2},{value:"<code>buildAction</code>",id:"buildaction",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"useLinkBuilder"})," hook returns helpers to build ",(0,r.jsx)(n.code,{children:"href"})," or action based on the linking options. It returns an object with the following properties:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#buildhref",children:(0,r.jsx)(n.code,{children:"buildHref"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#buildaction",children:(0,r.jsx)(n.code,{children:"buildAction"})})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"buildhref",children:(0,r.jsx)(n.code,{children:"buildHref"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"buildHref"})," method lets us build a path to use for links for a screen in the current navigator's state. It returns a function that takes ",(0,r.jsx)(n.code,{children:"name"})," and ",(0,r.jsx)(n.code,{children:"params"})," for the screen to focus and returns path based on the ",(0,r.jsxs)(n.a,{href:"/docs/navigation-container#linking",children:[(0,r.jsx)(n.code,{children:"linking"})," options"]}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { useLinkBuilder } from '@react-navigation/native';\nimport { PlatformPressable } from '@react-navigation/elements';\n\n// ...\n\nfunction DrawerContent({ state, descriptors, navigation }) {\n  const { buildHref } = useLinkBuilder();\n\n  return state.routes((route) => (\n    <PlatformPressable\n      href={buildHref(route.name, route.params)}\n      onPress={() => navigation.navigate(route.name, route.params)}\n    >\n      {descriptors[route.key].options.title}\n    </PlatformPressable>\n  ));\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"This hook is intended to be used in navigators to show links to various pages in the navigator, such as drawer and tab navigators. If you're building a custom navigator, custom drawer content, custom tab bar etc. then you might want to use this hook."}),"\n",(0,r.jsx)(n.p,{children:"There are couple of important things to note:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The destination screen must be present in the current navigator. It cannot be in a parent navigator or a navigator nested in a child."}),"\n",(0,r.jsx)(n.li,{children:"It's intended to be only used in custom navigators to keep them reusable in multiple apps. For your regular app code, use screen names directly instead of building paths for screens."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"buildaction",children:(0,r.jsx)(n.code,{children:"buildAction"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"buildAction"})," method lets us parse a ",(0,r.jsx)(n.code,{children:"href"})," string into an action object that can be used with ",(0,r.jsx)(n.a,{href:"/docs/navigation-object#dispatch",children:(0,r.jsx)(n.code,{children:"navigation.dispatch"})})," to navigate to the relevant screen."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { Link, CommonActions, useLinkBuilder } from '@react-navigation/native';\nimport { Button } from '@react-navigation/elements';\n\n// ...\n\nfunction MyComponent() {\n  const { buildAction } = useLinkBuilder();\n\n  return (\n    <Button onPress={() => navigation.dispatch(buildAction('/users/jane'))}>\n      Go to Jane's profile\n    </Button>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"/docs/use-link-to",children:(0,r.jsx)(n.code,{children:"useLinkTo"})})," hook is a convenient wrapper around this hook to navigate to a screen using a ",(0,r.jsx)(n.code,{children:"href"})," string."]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return s}});var t=i(67294);let r={},o=t.createContext(r);function s(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);