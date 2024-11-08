"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["76171"],{43530:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>o,default:()=>d,assets:()=>c,toc:()=>l,frontMatter:()=>r});var a=JSON.parse('{"id":"params","title":"Passing parameters to routes","description":"Remember when I said \\"more on that later when we talk about params!\\"? Well, the time has come.","source":"@site/versioned_docs/version-2.x/params.md","sourceDirName":".","slug":"/params","permalink":"/docs/2.x/params","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/params.md","tags":[],"version":"2.x","frontMatter":{"id":"params","title":"Passing parameters to routes","sidebar_label":"Passing parameters to routes"},"sidebar":"version-2.x-docs","previous":{"title":"Navigation lifecycle","permalink":"/docs/2.x/navigation-lifecycle"},"next":{"title":"Configuring the header bar","permalink":"/docs/2.x/headers"}}'),s=n("85893"),i=n("50065");let r={id:"params",title:"Passing parameters to routes",sidebar_label:"Passing parameters to routes"},o=void 0,c={},l=[{value:"Summary",id:"summary",level:2}];function h(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:['Remember when I said "more on that later when we talk about ',(0,s.jsx)(t.code,{children:"params"}),'!"? Well, the time has come.']}),"\n",(0,s.jsxs)(t.p,{children:["Now that we know how to ",(0,s.jsx)(t.a,{href:"/docs/2.x/hello-react-navigation",children:"create a stack navigator with some routes"})," and ",(0,s.jsx)(t.a,{href:"/docs/2.x/navigating",children:"navigate between those routes"}),", let's look at how we can pass data to routes when we navigate to them."]}),"\n",(0,s.jsx)(t.p,{children:"There are two pieces to this:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Pass params to a route by putting them in an object as a second parameter to the ",(0,s.jsx)(t.code,{children:"navigation.navigate"})," function: ",(0,s.jsx)(t.code,{children:"this.props.navigation.navigate('RouteName', { /* params go here */ })"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Read the params in your screen component: ",(0,s.jsx)(t.code,{children:"this.props.navigation.getParam(paramName, defaultValue)"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["We recommend that the params you pass are JSON-serializable. That way, you'll be able to use ",(0,s.jsx)(t.a,{href:"/docs/2.x/state-persistence",children:"state persistence"})," and your screen components will have the right contract for implementing ",(0,s.jsx)(t.a,{href:"/docs/2.x/deep-linking",children:"deep linking"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"class HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Home Screen</Text>\n        <Button\n          title=\"Go to Details\"\n          onPress={() => {\n            /* 1. Navigate to the Details route with params */\n            this.props.navigation.navigate('Details', {\n              itemId: 86,\n              otherParam: 'anything you want here',\n            });\n          }}\n        />\n      </View>\n    );\n  }\n}\n\nclass DetailsScreen extends React.Component {\n  render() {\n    /* 2. Get the param, provide a fallback value if not available */\n    const { navigation } = this.props;\n    const itemId = navigation.getParam('itemId', 'NO-ID');\n    const otherParam = navigation.getParam('otherParam', 'some default value');\n\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Details Screen</Text>\n        <Text>itemId: {JSON.stringify(itemId)}</Text>\n        <Text>otherParam: {JSON.stringify(otherParam)}</Text>\n        <Button\n          title=\"Go to Details... again\"\n          onPress={() =>\n            this.props.navigation.push('Details', {\n              itemId: Math.floor(Math.random() * 100),\n            })\n          }\n        />\n        <Button\n          title=\"Go to Home\"\n          onPress={() => this.props.navigation.navigate('Home')}\n        />\n        <Button\n          title=\"Go back\"\n          onPress={() => this.props.navigation.goBack()}\n        />\n      </View>\n    );\n  }\n}\n"})}),"\n",(0,s.jsx)("a",{href:"https://snack.expo.io/@react-navigation/navigate-with-params-v2",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["You can also directly access the params object with ",(0,s.jsx)(t.code,{children:"this.props.navigation.state.params"}),". This may be ",(0,s.jsx)(t.code,{children:"null"})," if no params were supplied, and so it's usually easier to just use ",(0,s.jsx)(t.code,{children:"getParam"})," so you don't have to deal with that case."]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["If you want to access the params directly through props (eg. ",(0,s.jsx)(t.code,{children:"this.props.itemId"}),") rather than ",(0,s.jsx)(t.code,{children:"this.props.navigation.getParam"}),", you may use a community-developed ",(0,s.jsx)(t.a,{href:"https://github.com/vonovak/react-navigation-props-mapper",children:"react-navigation-props-mapper"})," package."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"navigate"})," and ",(0,s.jsx)(t.code,{children:"push"})," accept an optional second argument to let you pass parameters to the route you are navigating to. For example: ",(0,s.jsx)(t.code,{children:"this.props.navigation.navigate('RouteName', {paramName: 'value'})"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["You can read the params through ",(0,s.jsx)(t.code,{children:"this.props.navigation.getParam"})]}),"\n",(0,s.jsxs)(t.li,{children:["As an alternative to ",(0,s.jsx)(t.code,{children:"getParam"}),", you may use ",(0,s.jsx)(t.code,{children:"this.props.navigation.state.params"}),". It is ",(0,s.jsx)(t.code,{children:"null"})," if no parameters are specified."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://snack.expo.io/@react-navigation/navigate-with-params-v2",children:"Full source of what we have built so far"}),"."]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return r}});var a=n(67294);let s={},i=a.createContext(s);function r(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);