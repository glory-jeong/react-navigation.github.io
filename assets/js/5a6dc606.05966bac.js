"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["61790"],{40789:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>s,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>r});var a=JSON.parse('{"id":"custom-navigators","title":"Custom navigators","description":"A navigator is any React component that has a router on it, to define the navigation behavior. Each navigator is given a navigation prop, which allows the parent to control the navigation state.","source":"@site/versioned_docs/version-2.x/custom-navigators.md","sourceDirName":".","slug":"/custom-navigators","permalink":"/docs/2.x/custom-navigators","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/custom-navigators.md","tags":[],"version":"2.x","frontMatter":{"id":"custom-navigators","title":"Custom navigators","sidebar_label":"Custom navigators"},"sidebar":"version-2.x-docs","previous":{"title":"Routers","permalink":"/docs/2.x/routers"},"next":{"title":"Custom routers","permalink":"/docs/2.x/custom-routers"}}'),i=t("85893"),o=t("50065");let r={id:"custom-navigators",title:"Custom navigators",sidebar_label:"Custom navigators"},s=void 0,c={},d=[{value:"Extending Navigators",id:"extending-navigators",level:2},{value:"Navigator Navigation Prop",id:"navigator-navigation-prop",level:2},{value:"Navigation State",id:"navigation-state",level:3},{value:"Navigation Dispatchers",id:"navigation-dispatchers",level:3},{value:"API for building custom navigators",id:"api-for-building-custom-navigators",level:2},{value:"<code>createNavigator</code>",id:"createnavigator",level:3},{value:"Scene Descriptors",id:"scene-descriptors",level:3},{value:"<code>createNavigationContainer</code>",id:"createnavigationcontainer",level:3}];function l(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["A navigator is any React component that has a ",(0,i.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation/blob/2.x/src/routers/StackRouter.js",children:"router"})," on it, to define the navigation behavior. Each navigator is given a ",(0,i.jsx)(n.code,{children:"navigation"})," prop, which allows the parent to control the navigation state."]}),"\n",(0,i.jsx)(n.h2,{id:"extending-navigators",children:"Extending Navigators"}),"\n",(0,i.jsx)(n.p,{children:"It is possible to take an existing Navigator and extend its behavior, using the following approach:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const MyStack = createStackNavigator({ ... });\n\nclass CustomNavigator extends React.Component {\n  static router = MyStack.router;\n  render() {\n    const { navigation } = this.props;\n\n    return <MyStack navigation={navigation} />;\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now it is possible to render additional things, observe the navigation prop, and override behavior of the router:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const MyStack = createStackNavigator({ ... });\n\nclass CustomNavigator extends React.Component {\n  static router = {\n    ...MyStack.router,\n    getStateForAction: (action, lastState) => {\n      // check for custom actions and return a different navigation state.\n      return MyStack.router.getStateForAction(action, lastState);\n    },\n  };\n  componentDidUpdate(lastProps) {\n    // Navigation state has changed from lastProps.navigation.state to this.props.navigation.state\n  }\n  render() {\n    const { navigation } = this.props;\n\n    return (\n      <View>\n        <MyStack navigation={navigation} />\n        {...}\n      </View>\n    );\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"navigator-navigation-prop",children:"Navigator Navigation Prop"}),"\n",(0,i.jsxs)(n.p,{children:["The navigation prop passed down to a navigator only includes ",(0,i.jsx)(n.code,{children:"state"}),", ",(0,i.jsx)(n.code,{children:"dispatch"}),", and ",(0,i.jsx)(n.code,{children:"addListener"}),". This is the current state of the navigator, and an event channel to send action requests."]}),"\n",(0,i.jsxs)(n.p,{children:["All navigators are controlled components: they always display what is coming in through ",(0,i.jsx)(n.code,{children:"props.navigation.state"}),", and their only way to change the state is to send actions into ",(0,i.jsx)(n.code,{children:"props.navigation.dispatch"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Navigators can specify custom behavior to parent navigators by ",(0,i.jsx)(n.a,{href:"/docs/2.x/custom-routers",children:"customizing their router"}),". For example, a navigator is able to specify when actions should be blocked by returning null from ",(0,i.jsx)(n.code,{children:"router.getStateForAction"}),". Or a navigator can specify custom URI handling by overriding ",(0,i.jsx)(n.code,{children:"router.getActionForPathAndParams"})," to output a relevant navigation action, and handling that action in ",(0,i.jsx)(n.code,{children:"router.getStateForAction"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"navigation-state",children:"Navigation State"}),"\n",(0,i.jsxs)(n.p,{children:["The navigation state that is passed into a navigator's ",(0,i.jsx)(n.code,{children:"props.navigation.state"})," has the following structure:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"{\n  index: 1, // identifies which route in the routes array is active\n  routes: [\n    {\n      // Each route needs a name, which routers will use to associate each route\n      // with a react component\n      routeName: 'MyRouteName',\n\n      // A unique id for this route, used to keep order in the routes array:\n      key: 'myroute-123',\n\n      // Routes can have any additional data. The included routers have `params`\n      ...customRouteData,\n    },\n    ...moreRoutes,\n  ]\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"navigation-dispatchers",children:"Navigation Dispatchers"}),"\n",(0,i.jsx)(n.p,{children:"A navigator can dispatch navigation actions, such as 'Go to a URI', 'Go back'."}),"\n",(0,i.jsxs)(n.p,{children:["The dispatcher will return ",(0,i.jsx)(n.code,{children:"true"})," if the action was successfully handled, otherwise ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"api-for-building-custom-navigators",children:"API for building custom navigators"}),"\n",(0,i.jsx)(n.p,{children:"To help developers implement custom navigators, the following utilities are provided with React Navigation:"}),"\n",(0,i.jsx)(n.h3,{id:"createnavigator",children:(0,i.jsx)(n.code,{children:"createNavigator"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note: The ",(0,i.jsx)(n.code,{children:"createNavigator"})," API has changed in version 2. The old doc for v1 can be accessed here: ",(0,i.jsx)(n.a,{href:"https://v1.reactnavigation.org/docs/custom-navigators.html",children:"v1.reactnavigation.org/docs/custom-navigators.html"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This utility combines a ",(0,i.jsx)(n.a,{href:"/docs/2.x/routers",children:"router"})," and a ",(0,i.jsx)(n.a,{href:"/docs/2.x/navigation-views",children:"navigation view"})," together in a standard way:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { createNavigator } from 'react-navigation';\n\nconst AppNavigator = createNavigator(NavigationView, router, navigationConfig);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The new ",(0,i.jsx)(n.code,{children:"AppNavigator"})," can be rendered as such:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"<AppNavigator\n  navigation={{ state, dispatch, addListener }}\n  screenProps={...}\n/>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then the view will be rendered in the following way:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"<NavigationView\n  screenProps={screenProps}\n  navigation={navigation}\n  navigationConfig={navigationConfig}\n  descriptors={descriptors}\n/>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"navigation"})," prop is the same navigation prop that was passed into the navigator."]}),"\n",(0,i.jsxs)(n.p,{children:["Both ",(0,i.jsx)(n.code,{children:"navigationConfig"})," and ",(0,i.jsx)(n.code,{children:"screenProps"})," are simply passed through, as defined above."]}),"\n",(0,i.jsxs)(n.p,{children:["Most information about child screens comes through the ",(0,i.jsx)(n.code,{children:"descriptors"})," prop. The descriptors is an object map of route keys to scene descriptors. There is one descriptor for each child route."]}),"\n",(0,i.jsx)(n.h3,{id:"scene-descriptors",children:"Scene Descriptors"}),"\n",(0,i.jsx)(n.p,{children:"A scene descriptor has the following properties:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getComponent"}),", a function that returns the component for the screen"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"options"}),", the flattened navigationOptions for the route"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"navigation"}),", the child navigation prop, including actions and the route ",(0,i.jsx)(n.code,{children:"state"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"state"}),", the navigation state for the child screen (a shortcut for ",(0,i.jsx)(n.code,{children:"navigation.state"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"key"}),", the key of the route (a shortcut for ",(0,i.jsx)(n.code,{children:"navigation.state.key"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"createnavigationcontainer",children:(0,i.jsx)(n.code,{children:"createNavigationContainer"})}),"\n",(0,i.jsxs)(n.p,{children:["If you want your navigator to be usable as a top-level component, (without a navigation prop being passed in), you can use ",(0,i.jsx)(n.code,{children:"createNavigationContainer"}),". This utility will make your navigator act like a top-level navigator when the navigation prop is missing. It will manage the app state, and integrate with app-level nav features, like handling incoming and outgoing links, and Android back button behavior."]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var a=t(67294);let i={},o=a.createContext(i);function r(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);