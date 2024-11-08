"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["48719"],{44036:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>r,default:()=>l,assets:()=>c,toc:()=>d,frontMatter:()=>s});var o=JSON.parse('{"id":"navigation-actions","title":"CommonActions reference","description":"A navigation action is an object containing at least a type property. Internally, the action can be handled by routers with the getStateForAction method to return a new state from an existing navigation state.","source":"@site/versioned_docs/version-5.x/navigation-actions.md","sourceDirName":".","slug":"/navigation-actions","permalink":"/docs/5.x/navigation-actions","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/navigation-actions.md","tags":[],"version":"5.x","frontMatter":{"id":"navigation-actions","title":"CommonActions reference","sidebar_label":"CommonActions"},"sidebar":"docs","previous":{"title":"useTheme","permalink":"/docs/5.x/use-theme"},"next":{"title":"StackActions","permalink":"/docs/5.x/stack-actions"}}'),a=t("85893"),i=t("50065");let s={id:"navigation-actions",title:"CommonActions reference",sidebar_label:"CommonActions"},r=void 0,c={},d=[{value:"Common actions",id:"common-actions",level:2},{value:"navigate",id:"navigate",level:3},{value:"reset",id:"reset",level:3},{value:"goBack",id:"goback",level:3},{value:"setParams",id:"setparams",level:3}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["A navigation action is an object containing at least a ",(0,a.jsx)(n.code,{children:"type"})," property. Internally, the action can be handled by ",(0,a.jsx)(n.a,{href:"/docs/5.x/custom-routers",children:"routers"})," with the ",(0,a.jsx)(n.code,{children:"getStateForAction"})," method to return a new state from an existing ",(0,a.jsx)(n.a,{href:"/docs/5.x/navigation-state",children:"navigation state"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Each navigation actions can contain at least the following properties:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"type"})," (required) - A string which represents the name of the action."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"payload"})," (options) - An object containing additional information about the action. For example, it will contain ",(0,a.jsx)(n.code,{children:"name"})," and ",(0,a.jsx)(n.code,{children:"params"})," for ",(0,a.jsx)(n.code,{children:"navigate"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"source"})," (optional) - The key of the route which should be considered as the source of the action. This is used for some actions to determine which route to apply the action on. By default, ",(0,a.jsx)(n.code,{children:"navigation.dispatch"})," adds the key of the route that dispatched the action."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"target"})," (optional) - The key of the ",(0,a.jsx)(n.a,{href:"/docs/5.x/navigation-state",children:"navigation state"})," the action should be applied on."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"It's important to highlight that dispatching a navigation action doesn't throw any error when the action is unhandled (similar to when you dispatch an action that isn't handled by a reducer in redux and nothing happens)."}),"\n",(0,a.jsx)(n.h2,{id:"common-actions",children:"Common actions"}),"\n",(0,a.jsxs)(n.p,{children:["The library exports several action creators under the ",(0,a.jsx)(n.code,{children:"CommonActions"})," namespace. You should use these action creators instead of writing action objects manually."]}),"\n",(0,a.jsx)(n.h3,{id:"navigate",children:"navigate"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"navigate"})," action allows to navigate to a specific route. It takes the following arguments:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"name"})," - ",(0,a.jsx)(n.em,{children:"string"})," - A destination name of the route that has been registered somewhere.."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"key"})," - ",(0,a.jsx)(n.em,{children:"string"})," - The identifier for the route to navigate to. Navigate back to this route if it already exists.."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"params"})," - ",(0,a.jsx)(n.em,{children:"object"})," - Params to merge into the destination route.."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The options object passed should at least contain a ",(0,a.jsx)(n.code,{children:"key"})," or ",(0,a.jsx)(n.code,{children:"name"})," property, and optionally ",(0,a.jsx)(n.code,{children:"params"}),". If both ",(0,a.jsx)(n.code,{children:"key"})," and ",(0,a.jsx)(n.code,{children:"name"})," are passed, stack navigator will create a new route with the specified key if no matches were found."]}),"\n",(0,a.jsx)("samp",{id:"common-actions"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(\n  CommonActions.navigate({\n    name: 'Profile',\n    params: {\n      user: 'jane',\n    },\n  })\n);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In a ",(0,a.jsx)(n.a,{href:"/docs/5.x/stack-navigator",children:"stack navigator"}),", calling ",(0,a.jsx)(n.code,{children:"navigate"})," with a screen name will result in different behavior based on if the screen is already present or not. If the screen is already present in the stack's history, it'll go back to that screen and remove any screens after that. If the screen is not present, it'll push a new screen."]}),"\n",(0,a.jsxs)(n.p,{children:["By default, the screen is identified by its name. But you can also customize it to take the params into account by using the ",(0,a.jsx)(n.a,{href:"/docs/5.x/screen#getid",children:(0,a.jsx)(n.code,{children:"getId"})})," prop."]}),"\n",(0,a.jsx)(n.h3,{id:"reset",children:"reset"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"reset"})," action allows to reset the ",(0,a.jsx)(n.a,{href:"/docs/5.x/navigation-state",children:"navigation state"})," to the given state. It takes the following arguments:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"state"})," - ",(0,a.jsx)(n.em,{children:"object"})," - The new ",(0,a.jsx)(n.a,{href:"/docs/5.x/navigation-state",children:"navigation state"})," object to use."]}),"\n"]}),"\n",(0,a.jsx)("samp",{id:"common-actions"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(\n  CommonActions.reset({\n    index: 1,\n    routes: [\n      { name: 'Home' },\n      {\n        name: 'Profile',\n        params: { user: 'jane' },\n      },\n    ],\n  })\n);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The state object specified in ",(0,a.jsx)(n.code,{children:"reset"})," replaces the existing ",(0,a.jsx)(n.a,{href:"/docs/5.x/navigation-state",children:"navigation state"})," with the new one. This means that if you provide new route objects without a key, or route objects with a different key, it'll remove the existing screens for those routes and add new screens."]}),"\n",(0,a.jsxs)(n.p,{children:["If you want to preserve the existing screens but only want to modify the state, you can pass a function to ",(0,a.jsx)(n.code,{children:"dispatch"})," where you can get the existing state. Then you can change it as you like (make sure not to mutate the existing state, but create new state object for your changes). and return a ",(0,a.jsx)(n.code,{children:"reset"})," action with the desired state:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch((state) => {\n  // Remove the home route from the stack\n  const routes = state.routes.filter((r) => r.name !== 'Home');\n\n  return CommonActions.reset({\n    ...state,\n    routes,\n    index: routes.length - 1,\n  });\n});\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Note: Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the ",(0,a.jsx)(n.a,{href:"/docs/5.x/navigation-state",children:"navigation state"})," state object except ",(0,a.jsx)(n.code,{children:"index"})," and ",(0,a.jsx)(n.code,{children:"routes"}),", unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"goback",children:"goBack"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"goBack"})," action creator allows to go back to the previous route in history. It doesn't take any arguments."]}),"\n",(0,a.jsx)("samp",{id:"common-actions"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(CommonActions.goBack());\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you want to go back from a particular route, you can add a ",(0,a.jsx)(n.code,{children:"source"})," property referring to the route key and a ",(0,a.jsx)(n.code,{children:"target"})," property referring to the ",(0,a.jsx)(n.code,{children:"key"})," of the navigator which contains the route:"]}),"\n",(0,a.jsx)("samp",{id:"common-actions"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch({\n  ...CommonActions.goBack(),\n  source: route.key,\n  target: state.key,\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["By default, the key of the route which dispatched the action is passed as the ",(0,a.jsx)(n.code,{children:"source"})," property and the ",(0,a.jsx)(n.code,{children:"target"})," property is ",(0,a.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"setparams",children:"setParams"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"setParams"})," action allows to update params for a certain route. It takes the following arguments:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"params"})," - ",(0,a.jsx)(n.em,{children:"object"})," - required - New params to be merged into existing route params."]}),"\n"]}),"\n",(0,a.jsx)("samp",{id:"common-actions"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(CommonActions.setParams({ user: 'Wojtek' }));\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you want to set params for a particular route, you can add a ",(0,a.jsx)(n.code,{children:"source"})," property referring to the route key:"]}),"\n",(0,a.jsx)("samp",{id:"common-actions"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch({\n  ...CommonActions.setParams({ user: 'Wojtek' }),\n  source: route.key,\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If the ",(0,a.jsx)(n.code,{children:"source"})," property is explicitly set to ",(0,a.jsx)(n.code,{children:"undefined"}),", it'll set the params for the focused route."]})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var o=t(67294);let a={},i=o.createContext(a);function s(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);