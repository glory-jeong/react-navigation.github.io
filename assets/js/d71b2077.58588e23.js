"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["75185"],{13282:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>s,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>r});var a=JSON.parse('{"id":"custom-navigator-overview","title":"Overview","description":"Navigators allow you to define your application\'s navigation structure. Navigators also render common elements such as headers and tab bars which you can configure.","source":"@site/versioned_docs/version-1.x/custom-navigator-overview.md","sourceDirName":".","slug":"/custom-navigator-overview","permalink":"/docs/1.x/custom-navigator-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/custom-navigator-overview.md","tags":[],"version":"1.x","frontMatter":{"id":"custom-navigator-overview","title":"Overview","sidebar_label":"Overview"},"sidebar":"docs","previous":{"title":"Redux integration","permalink":"/docs/1.x/redux-integration"},"next":{"title":"Routers","permalink":"/docs/1.x/routers"}}'),i=t("85893"),o=t("50065");let r={id:"custom-navigator-overview",title:"Overview",sidebar_label:"Overview"},s=void 0,c={},l=[{value:"Built-in Navigators",id:"built-in-navigators",level:2},{value:"Rendering screens with Navigators",id:"rendering-screens-with-navigators",level:2},{value:"Calling Navigate on Top Level Component",id:"calling-navigate-on-top-level-component",level:3},{value:"Navigation Containers",id:"navigation-containers",level:2},{value:"<code>onNavigationStateChange(prevState, newState, action)</code>",id:"onnavigationstatechangeprevstate-newstate-action",level:3},{value:"<code>uriPrefix</code>",id:"uriprefix",level:3}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Navigators allow you to define your application's navigation structure. Navigators also render common elements such as headers and tab bars which you can configure."}),"\n",(0,i.jsx)(n.p,{children:"Under the hood, navigators are plain React components."}),"\n",(0,i.jsx)(n.h2,{id:"built-in-navigators",children:"Built-in Navigators"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"react-navigation"})," includes the following functions to help you create navigators:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/1.x/stack-navigator",children:"StackNavigator"})," - Renders one screen at a time and provides transitions between screens. When a new screen is opened it is placed on top of the stack."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/1.x/tab-navigator",children:"TabNavigator"})," - Renders a tab bar that lets the user switch between several screens"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/1.x/drawer-navigator",children:"DrawerNavigator"})," - Provides a drawer that slides in from the left of the screen"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"rendering-screens-with-navigators",children:"Rendering screens with Navigators"}),"\n",(0,i.jsx)(n.p,{children:"The navigators render application screens which are just React components."}),"\n",(0,i.jsx)(n.p,{children:"To learn how to create screens, read about:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.a,{href:"/docs/1.x/navigation-prop",children:["Screen ",(0,i.jsx)(n.code,{children:"navigation"})," prop"]})," to allow the screen to dispatch navigation actions, such as opening another screen"]}),"\n",(0,i.jsxs)(n.li,{children:["Screen ",(0,i.jsx)(n.code,{children:"navigationOptions"})," to customize how the screen gets presented by the navigator (e.g. ",(0,i.jsx)(n.a,{href:"/docs/1.x/stack-navigator#navigationoptions-used-by-stacknavigator",children:"header title"}),", tab label)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"calling-navigate-on-top-level-component",children:"Calling Navigate on Top Level Component"}),"\n",(0,i.jsxs)(n.p,{children:["In case you want to use Navigator from the same level you declare it you can use react's ",(0,i.jsx)(n.a,{href:"https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute",children:(0,i.jsx)(n.code,{children:"ref"})})," option:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { NavigationActions } from 'react-navigation';\n\nconst AppNavigator = StackNavigator(SomeAppRouteConfigs);\n\nclass App extends React.Component {\n  someEvent() {\n    // call navigate for AppNavigator here:\n    this.navigator &&\n      this.navigator.dispatch(\n        NavigationActions.navigate({ routeName: someRouteName })\n      );\n  }\n  render() {\n    return (\n      <AppNavigator\n        ref={(nav) => {\n          this.navigator = nav;\n        }}\n      />\n    );\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Please notice that this solution should only be used on the top level navigator."}),"\n",(0,i.jsx)(n.h2,{id:"navigation-containers",children:"Navigation Containers"}),"\n",(0,i.jsx)(n.p,{children:"The built in navigators can automatically behave like top-level navigators when the navigation prop is missing. This functionality provides a transparent navigation container, which is where the top-level navigation prop comes from."}),"\n",(0,i.jsx)(n.p,{children:"When rendering one of the included navigators, the navigation prop is optional. When it is missing, the container steps in and manages its own navigation state. It also handles URLs, external linking, and Android back button integration."}),"\n",(0,i.jsxs)(n.p,{children:["For the purpose of convenience, the built-in navigators have this ability because behind the scenes they use ",(0,i.jsx)(n.code,{children:"createNavigationContainer"}),". Usually, navigators require a navigation prop in order to function."]}),"\n",(0,i.jsx)(n.p,{children:"Top-level navigators accept the following props:"}),"\n",(0,i.jsx)(n.h3,{id:"onnavigationstatechangeprevstate-newstate-action",children:(0,i.jsx)(n.code,{children:"onNavigationStateChange(prevState, newState, action)"})}),"\n",(0,i.jsx)(n.p,{children:"Function that gets called every time navigation state managed by the navigator changes. It receives the previous state, the new state of the navigation and the action that issued state change. By default it prints state changes to the console."}),"\n",(0,i.jsx)(n.h3,{id:"uriprefix",children:(0,i.jsx)(n.code,{children:"uriPrefix"})}),"\n",(0,i.jsxs)(n.p,{children:["The prefix of the URIs that the app might handle. This will be used when handling a ",(0,i.jsx)(n.a,{href:"/docs/1.x/deep-linking",children:"deep link"})," to extract the path passed to the router."]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var a=t(67294);let i={},o=a.createContext(i);function r(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);