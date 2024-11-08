"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["33931"],{95226:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>s,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>r});var a=JSON.parse('{"id":"custom-navigators","title":"Custom navigators","description":"A navigator is any React component that has a router on it. Here is a basic one, which uses the router\'s API to get the active component to render:","source":"@site/versioned_docs/version-1.x/custom-navigators.md","sourceDirName":".","slug":"/custom-navigators","permalink":"/docs/1.x/custom-navigators","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/custom-navigators.md","tags":[],"version":"1.x","frontMatter":{"id":"custom-navigators","title":"Custom navigators","sidebar_label":"Custom navigators"},"sidebar":"docs","previous":{"title":"Routers","permalink":"/docs/1.x/routers"},"next":{"title":"Custom routers","permalink":"/docs/1.x/custom-routers"}}'),i=n("85893"),o=n("50065");let r={id:"custom-navigators",title:"Custom navigators",sidebar_label:"Custom navigators"},s=void 0,c={},d=[{value:"Navigation Prop",id:"navigation-prop",level:2},{value:"Navigation State",id:"navigation-state",level:3},{value:"Navigation Dispatchers",id:"navigation-dispatchers",level:3},{value:"API for building custom navigators",id:"api-for-building-custom-navigators",level:2},{value:"<code>createNavigator</code>",id:"createnavigator",level:3},{value:"<code>addNavigationHelpers</code>",id:"addnavigationhelpers",level:3},{value:"<code>createNavigationContainer</code>",id:"createnavigationcontainer",level:3}];function l(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["A navigator is any React component that has a ",(0,i.jsx)(t.a,{href:"https://github.com/react-navigation/react-navigation/blob/1.x/src/routers/StackRouter.js",children:"router"})," on it. Here is a basic one, which uses the ",(0,i.jsx)(t.a,{href:"/docs/1.x/routers",children:"router's API"})," to get the active component to render:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"class MyNavigator extends React.Component {\n  static router = MyRouter;\n  render() {\n    const { state, dispatch, addListener } = this.props.navigation;\n    const { routes, index } = state;\n\n    // Figure out what to render based on the navigation state and the router:\n    const Component = MyRouter.getComponentForState(state);\n\n    // The state of the active child screen can be found at routes[index]\n    let childNavigation = { dispatch, addListener, state: routes[index] };\n    // If we want, we can also tinker with the dispatch function here, to limit\n    // or augment our children's actions\n    // addListener is needed to support children Stack and Drawer navigators\n\n    // Assuming our children want the convenience of calling .navigate() and so on,\n    // we should call addNavigationHelpers to augment our navigation prop:\n    childNavigation = addNavigationHelpers(childNavigation);\n\n    return <Component navigation={childNavigation} />;\n  }\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"navigation-prop",children:"Navigation Prop"}),"\n",(0,i.jsxs)(t.p,{children:["The navigation prop passed down to a navigator only includes ",(0,i.jsx)(t.code,{children:"state"})," and ",(0,i.jsx)(t.code,{children:"dispatch"}),". This is the current state of the navigator, and an event channel to send action requests."]}),"\n",(0,i.jsxs)(t.p,{children:["All navigators are controlled components: they always display what is coming in through ",(0,i.jsx)(t.code,{children:"props.navigation.state"}),", and their only way to change the state is to send actions into ",(0,i.jsx)(t.code,{children:"props.navigation.dispatch"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Navigators can specify custom behavior to parent navigators by ",(0,i.jsx)(t.a,{href:"/docs/1.x/custom-routers",children:"customizing their router"}),". For example, a navigator is able to specify when actions should be blocked by returning null from ",(0,i.jsx)(t.code,{children:"router.getStateForAction"}),". Or a navigator can specify custom URI handling by overriding ",(0,i.jsx)(t.code,{children:"router.getActionForPathAndParams"})," to output a relevant navigation action, and handling that action in ",(0,i.jsx)(t.code,{children:"router.getStateForAction"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"navigation-state",children:"Navigation State"}),"\n",(0,i.jsxs)(t.p,{children:["The navigation state that is passed into a navigator's ",(0,i.jsx)(t.code,{children:"props.navigation.state"})," has the following structure:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"{\n  index: 1, // identifies which route in the routes array is active\n  routes: [\n    {\n      // Each route needs a name, which routers will use to associate each route\n      // with a react component\n      routeName: 'MyRouteName',\n\n      // A unique id for this route, used to keep order in the routes array:\n      key: 'myroute-123',\n\n      // Routes can have any additional data. The included routers have `params`\n      ...customRouteData,\n    },\n    ...moreRoutes,\n  ]\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"navigation-dispatchers",children:"Navigation Dispatchers"}),"\n",(0,i.jsx)(t.p,{children:"A navigator can dispatch navigation actions, such as 'Go to a URI', 'Go back'."}),"\n",(0,i.jsxs)(t.p,{children:["The dispatcher will return ",(0,i.jsx)(t.code,{children:"true"})," if the action was successfully handled, otherwise ",(0,i.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"api-for-building-custom-navigators",children:"API for building custom navigators"}),"\n",(0,i.jsx)(t.p,{children:"To help developers implement custom navigators, the following utilities are provided with React Navigation:"}),"\n",(0,i.jsx)(t.h3,{id:"createnavigator",children:(0,i.jsx)(t.code,{children:"createNavigator"})}),"\n",(0,i.jsxs)(t.p,{children:["This utility combines a ",(0,i.jsx)(t.a,{href:"/docs/1.x/routers",children:"router"})," and a ",(0,i.jsx)(t.a,{href:"/docs/1.x/navigation-views",children:"navigation view"})," together in a standard way:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const MyApp = createNavigator(MyRouter)(MyView);\n"})}),"\n",(0,i.jsx)(t.p,{children:"All this does behind the scenes is:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const MyApp = ({ navigation }) => (\n  <MyView router={MyRouter} navigation={navigation} />\n);\nMyApp.router = MyRouter;\n"})}),"\n",(0,i.jsx)(t.h3,{id:"addnavigationhelpers",children:(0,i.jsx)(t.code,{children:"addNavigationHelpers"})}),"\n",(0,i.jsxs)(t.p,{children:["Takes in a bare navigator navigation prop with ",(0,i.jsx)(t.code,{children:"state"})," and ",(0,i.jsx)(t.code,{children:"dispatch"}),", and augments it with all the various functions in a screen navigation prop, such as ",(0,i.jsx)(t.code,{children:"navigation.navigate()"})," and ",(0,i.jsx)(t.code,{children:"navigation.goBack()"}),". These functions are simply helpers to create the actions and send them into ",(0,i.jsx)(t.code,{children:"dispatch"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"createnavigationcontainer",children:(0,i.jsx)(t.code,{children:"createNavigationContainer"})}),"\n",(0,i.jsxs)(t.p,{children:["If you want your navigator to be usable as a top-level component, (without a navigation prop being passed in), you can use ",(0,i.jsx)(t.code,{children:"createNavigationContainer"}),". This utility will make your navigator act like a top-level navigator when the navigation prop is missing. It will manage the app state, and integrate with app-level nav features, like handling incoming and outgoing links, and Android back button behavior."]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return r}});var a=n(67294);let i={},o=a.createContext(i);function r(e){let t=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);