"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["53043"],{73180:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>s});var i=JSON.parse('{"id":"navigating","title":"Moving between screens","description":"In the previous section, \\"Hello React Navigation\\", we defined a StackNavigator with two routes (Home and Details), but we didn\'t learn how to let a user navigate from Home to Details (although we did learn how to change the initial route in our code, but forcing our users to clone our repository and change the route in our code in order to see another screen is arguably among the worst user experiences one could imagine).","source":"@site/versioned_docs/version-1.x/navigating.md","sourceDirName":".","slug":"/navigating","permalink":"/docs/1.x/navigating","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/navigating.md","tags":[],"version":"1.x","frontMatter":{"id":"navigating","title":"Moving between screens","sidebar_label":"Moving between screens"},"sidebar":"docs","previous":{"title":"Supported React Native versions","permalink":"/docs/1.x/supported-react-native-versions"},"next":{"title":"Passing parameters to routes","permalink":"/docs/1.x/params"}}'),a=t("85893"),o=t("50065");let s={id:"navigating",title:"Moving between screens",sidebar_label:"Moving between screens"},r=void 0,c={},l=[{value:"Navigating to a new screen",id:"navigating-to-a-new-screen",level:2},{value:"Navigate to a route multiple times",id:"navigate-to-a-route-multiple-times",level:2},{value:"Going back",id:"going-back",level:2},{value:"Summary",id:"summary",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["In the previous section, ",(0,a.jsx)(n.a,{href:"/docs/1.x/hello-react-navigation",children:'"Hello React Navigation"'}),", we defined a ",(0,a.jsx)(n.code,{children:"StackNavigator"})," with two routes (",(0,a.jsx)(n.code,{children:"Home"})," and ",(0,a.jsx)(n.code,{children:"Details"}),"), but we didn't learn how to let a user navigate from ",(0,a.jsx)(n.code,{children:"Home"})," to ",(0,a.jsx)(n.code,{children:"Details"})," (although we did learn how to change the ",(0,a.jsx)(n.em,{children:"initial"})," route in our code, but forcing our users to clone our repository and change the route in our code in order to see another screen is arguably among the worst user experiences one could imagine)."]}),"\n",(0,a.jsx)(n.p,{children:"If this was a web browser, we'd be able to write something like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'<a href="details.html">Go to Details</a>\n'})}),"\n",(0,a.jsx)(n.p,{children:"Another way to write this would be:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'<a onClick={() => { document.location.href = "details.html"; }}>Go to Details</a>\n'})}),"\n",(0,a.jsxs)(n.p,{children:["We'll do something similar to the latter, but rather than using a ",(0,a.jsx)(n.code,{children:"document"})," global we'll use the ",(0,a.jsx)(n.code,{children:"navigation"})," prop that is passed down to our screen components."]}),"\n",(0,a.jsx)(n.h2,{id:"navigating-to-a-new-screen",children:"Navigating to a new screen"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport { Button, View, Text } from 'react-native';\nimport { StackNavigator } from 'react-navigation';\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Home Screen</Text>\n        <Button\n          title=\"Go to Details\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n\n// ... other code from the previous section\n"})}),"\n",(0,a.jsx)("a",{href:"https://snack.expo.io/@react-navigation/our-first-navigate",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,a.jsx)(n.p,{children:"Let's break down this down:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"this.props.navigation"}),": the ",(0,a.jsx)(n.code,{children:"navigation"})," prop is passed in to every ",(0,a.jsx)(n.strong,{children:"screen component"})," (",(0,a.jsx)(n.a,{href:"/docs/1.x/glossary-of-terms#screen-component",children:"definition"}),") in ",(0,a.jsx)(n.code,{children:"StackNavigator"})," (more about this later in ",(0,a.jsx)(n.a,{href:"/docs/1.x/navigation-prop",children:'"The navigation prop in depth"'}),")."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"navigate('Details')"}),": we call the ",(0,a.jsx)(n.code,{children:"navigate"})," function (on the ",(0,a.jsx)(n.code,{children:"navigation"})," prop \u2014 naming is hard!) with the name of the route that we'd like to move the user to."]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["If we call ",(0,a.jsx)(n.code,{children:"this.props.navigation.navigate"})," with a route name that we haven't defined on a ",(0,a.jsx)(n.code,{children:"StackNavigator"}),", nothing will happen. Said another way, we can only navigate to routes that have been defined on our ",(0,a.jsx)(n.code,{children:"StackNavigator"})," \u2014 we cannot navigate to an arbitrary component."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"So we now have a stack with two routes: 1) the Home route 2) the Details route. What would happen if we navigated to the Details route again, from the Details screen?"}),"\n",(0,a.jsx)(n.h2,{id:"navigate-to-a-route-multiple-times",children:"Navigate to a route multiple times"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"class DetailsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Details Screen</Text>\n        <Button\n          title=\"Go to Details... again\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n"})}),"\n",(0,a.jsx)("a",{href:"https://snack.expo.io/@react-navigation/navigating-to-details-again",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,a.jsxs)(n.p,{children:['If you run this code, you\'ll notice that each time you press the "Go to Details... again" button it will push a new screen on top. This is where our original comparison to ',(0,a.jsx)(n.code,{children:"document.location.href"})," falls apart, because in a web browser these would not be treated as distinct routes and no new entries would be added to the browser history \u2014 ",(0,a.jsx)(n.code,{children:"navigate"})," for ",(0,a.jsx)(n.code,{children:"StackNavigator"})," behaves more like the web's ",(0,a.jsx)(n.code,{children:"window.history.pushState"}),": each time you call ",(0,a.jsx)(n.code,{children:"navigate"})," it pushes a new route to the navigation stack."]}),"\n",(0,a.jsx)(n.h2,{id:"going-back",children:"Going back"}),"\n",(0,a.jsxs)(n.p,{children:["The header provided by ",(0,a.jsx)(n.code,{children:"StackNavigator"})," will automatically include a back button when it is possible to go back from the active screen (if there is only one screen in the navigation stack, there is nothing that you can go back to, and so there is no back button)."]}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes you'll want to be able to programmatically trigger this behavior, and for that you can use ",(0,a.jsx)(n.code,{children:"this.props.navigation.goBack();"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"class DetailsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Details Screen</Text>\n        <Button\n          title=\"Go to Details... again\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n        <Button\n          title=\"Go back\"\n          onPress={() => this.props.navigation.goBack()}\n        />\n      </View>\n    );\n  }\n}\n"})}),"\n",(0,a.jsx)("a",{href:"https://snack.expo.io/@react-navigation/going-back",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["On Android, React Navigation hooks in to the hardware back button and fires the ",(0,a.jsx)(n.code,{children:"goBack()"})," function for you when the user presses it, so it behaves as the user would expect."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Another common requirement is to be able to go back ",(0,a.jsx)(n.em,{children:"multiple"})," screens -- for example, if you are several screens deep in a stack and want to dismiss all of them to go back to the first screen. We'll discuss how to do this in ",(0,a.jsx)(n.a,{href:"/docs/1.x/auth-flow",children:'"Building a sign in flow"'}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"this.props.navigation.navigate('RouteName')"})," pushes a new route to the ",(0,a.jsx)(n.code,{children:"StackNavigator"}),". We can call it as many times as we like and it will continue pushing routes."]}),"\n",(0,a.jsxs)(n.li,{children:["The header bar will automatically show a back button, but you can programmatically go back by calling ",(0,a.jsx)(n.code,{children:"this.props.navigation.goBack()"}),". On Android, the hardware back button just works as expected."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"navigation"})," prop is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://snack.expo.io/@react-navigation/going-back",children:"Full source of what we have built so far"}),"."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var i=t(67294);let a={},o=i.createContext(a);function s(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);