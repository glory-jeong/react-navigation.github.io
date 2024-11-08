"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["78771"],{16401:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>s,default:()=>d,assets:()=>c,toc:()=>l,frontMatter:()=>r});var n=JSON.parse('{"id":"switch-navigator","title":"createSwitchNavigator","description":"The purpose of SwitchNavigator is to only ever show one screen at a time. By default, it does not handle back actions and it resets routes to their default state when you switch away.","source":"@site/versioned_docs/version-3.x/switch-navigator.md","sourceDirName":".","slug":"/switch-navigator","permalink":"/docs/3.x/switch-navigator","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/switch-navigator.md","tags":[],"version":"3.x","frontMatter":{"id":"switch-navigator","title":"createSwitchNavigator","sidebar_label":"createSwitchNavigator"},"sidebar":"version-3.x-docs","previous":{"title":"createStackNavigator","permalink":"/docs/3.x/stack-navigator"},"next":{"title":"createAnimatedSwitchNavigator","permalink":"/docs/3.x/animated-switch-navigator"}}'),o=i("85893"),a=i("50065");let r={id:"switch-navigator",title:"createSwitchNavigator",sidebar_label:"createSwitchNavigator"},s=void 0,c={},l=[{value:"API Definition",id:"api-definition",level:2},{value:"RouteConfigs",id:"routeconfigs",level:2},{value:"SwitchNavigatorConfig",id:"switchnavigatorconfig",level:2},{value:"Example",id:"example",level:2}];function h(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The purpose of SwitchNavigator is to only ever show one screen at a time. By default, it does not handle back actions and it resets routes to their default state when you switch away.\nThis is the exact behavior that we want from the ",(0,o.jsx)(t.a,{href:"/docs/3.x/auth-flow",children:"authentication flow"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"api-definition",children:"API Definition"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);\n"})}),"\n",(0,o.jsx)(t.h2,{id:"routeconfigs",children:"RouteConfigs"}),"\n",(0,o.jsxs)(t.p,{children:["The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route, see ",(0,o.jsx)(t.a,{href:"/docs/3.x/stack-navigator#routeconfigs",children:"example"})," from ",(0,o.jsx)(t.code,{children:"createStackNavigator"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"switchnavigatorconfig",children:"SwitchNavigatorConfig"}),"\n",(0,o.jsx)(t.p,{children:"Several options get passed to the underlying router to modify navigation logic:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"initialRouteName"})," - The routeName for the initial tab route when first loading."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"navigationOptions"})," - Navigation options for the navigator itself, to configure a parent navigator"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"defaultNavigationOptions"})," - Default navigation options to use for screens"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"resetOnBlur"})," - Reset the state of any nested navigators when switching away from a screen. Defaults to ",(0,o.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"paths"})," - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"backBehavior"})," - ",(0,o.jsx)(t.code,{children:"initialRoute"})," to return to initial route, ",(0,o.jsx)(t.code,{children:"order"})," to return to previous route, ",(0,o.jsx)(t.code,{children:"history"})," to return to last visited route, or ",(0,o.jsx)(t.code,{children:"none"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(t.p,{children:["See an example of this ",(0,o.jsx)(t.a,{href:"https://snack.expo.io/@react-navigation/auth-flow-v3",children:"on Snack"}),"."]})]})}function d(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return s},a:function(){return r}});var n=i(67294);let o={},a=n.createContext(o);function r(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);