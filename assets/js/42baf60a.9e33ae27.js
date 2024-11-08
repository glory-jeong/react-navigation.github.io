"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["23311"],{23088:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>c,default:()=>l,assets:()=>s,toc:()=>d,frontMatter:()=>o});var n=JSON.parse('{"id":"animated-switch-navigator","title":"createAnimatedSwitchNavigator","description":"A SwitchNavigator with animation support.","source":"@site/versioned_docs/version-3.x/animated-switch-navigator.md","sourceDirName":".","slug":"/animated-switch-navigator","permalink":"/docs/3.x/animated-switch-navigator","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/animated-switch-navigator.md","tags":[],"version":"3.x","frontMatter":{"id":"animated-switch-navigator","title":"createAnimatedSwitchNavigator","sidebar_label":"createAnimatedSwitchNavigator"},"sidebar":"version-3.x-docs","previous":{"title":"createSwitchNavigator","permalink":"/docs/3.x/switch-navigator"},"next":{"title":"createDrawerNavigator","permalink":"/docs/3.x/drawer-navigator"}}'),a=i("85893"),r=i("50065");let o={id:"animated-switch-navigator",title:"createAnimatedSwitchNavigator",sidebar_label:"createAnimatedSwitchNavigator"},c=void 0,s={},d=[{value:"API Definition",id:"api-definition",level:2},{value:"RouteConfigs",id:"routeconfigs",level:2},{value:"SwitchNavigatorConfig",id:"switchnavigatorconfig",level:2}];function h(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.code,{children:"SwitchNavigator"})," with animation support."]}),"\n",(0,a.jsxs)(t.p,{children:["To use this navigator, you need to install ",(0,a.jsx)(t.code,{children:"react-native-reanimated >= 1.0.0"}),". If you have a managed Expo project, you need to use >= SDK 33 to have the correct version of Reanimated."]}),"\n",(0,a.jsx)(t.h2,{id:"api-definition",children:"API Definition"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';\n\ncreateAnimatedSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"routeconfigs",children:"RouteConfigs"}),"\n",(0,a.jsxs)(t.p,{children:["The route configs are identical to ",(0,a.jsx)(t.a,{href:"/docs/3.x/switch-navigator",children:"createSwitchNavigator"})]}),"\n",(0,a.jsx)(t.h2,{id:"switchnavigatorconfig",children:"SwitchNavigatorConfig"}),"\n",(0,a.jsxs)(t.p,{children:["The switch navigator configs are identical to ",(0,a.jsx)(t.a,{href:"/docs/3.x/switch-navigator",children:"createSwitchNavigator"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["By default, the transition between screens is a cross-fade. You can customize the transition with an additional option ",(0,a.jsx)(t.code,{children:"transition"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:'import createAnimatedSwitchNavigator from \'react-navigation-animated-switch\';\nimport { Transition } from \'react-native-reanimated\';\n\nconst MySwitch = createAnimatedSwitchNavigator(\n  {\n    Home: HomeScreen,\n    Other: OtherScreen,\n  },\n  {\n    // The previous screen will slide to the bottom while the next screen will fade in\n    transition: (\n      <Transition.Together>\n        <Transition.Out\n          type="slide-bottom"\n          durationMs={400}\n          interpolation="easeIn"\n        />\n        <Transition.In type="fade" durationMs={500} />\n      </Transition.Together>\n    ),\n  }\n);\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Since the transition are possible thanks to the ",(0,a.jsx)(t.code,{children:"Transition"})," API from ",(0,a.jsx)(t.code,{children:"react-native-reanimated"}),", you can learn more about it ",(0,a.jsx)(t.a,{href:"https://github.com/software-mansion/react-native-reanimated",children:"here"}),"."]})]})}function l(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return c},a:function(){return o}});var n=i(67294);let a={},r=n.createContext(a);function o(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);