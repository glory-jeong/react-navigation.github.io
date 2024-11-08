"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["47996"],{77972:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>r,toc:()=>l,frontMatter:()=>s});var t=JSON.parse('{"id":"navigation-lifecycle","title":"Navigation lifecycle","description":"In the previous section, we worked with a stack navigator that has two screens (Home and Details) and learned how to use this.props.navigation.navigate(\'RouteName\') to navigate between the routes.","source":"@site/versioned_docs/version-4.x/navigation-lifecycle.md","sourceDirName":".","slug":"/navigation-lifecycle","permalink":"/docs/4.x/navigation-lifecycle","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/navigation-lifecycle.md","tags":[],"version":"4.x","frontMatter":{"id":"navigation-lifecycle","title":"Navigation lifecycle","sidebar_label":"Navigation lifecycle"},"sidebar":"version-4.x-docs","previous":{"title":"Moving between screens","permalink":"/docs/4.x/navigating"},"next":{"title":"Passing parameters to routes","permalink":"/docs/4.x/params"}}'),o=i("85893"),a=i("50065");let s={id:"navigation-lifecycle",title:"Navigation lifecycle",sidebar_label:"Navigation lifecycle"},c=void 0,r={},l=[{value:"Example scenario",id:"example-scenario",level:2},{value:"Subscribing to lifecycle events",id:"subscribing-to-lifecycle-events",level:2},{value:"Summary",id:"summary",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["In the previous section, we worked with a stack navigator that has two screens (",(0,o.jsx)(n.code,{children:"Home"})," and ",(0,o.jsx)(n.code,{children:"Details"}),") and learned how to use ",(0,o.jsx)(n.code,{children:"this.props.navigation.navigate('RouteName')"})," to navigate between the routes."]}),"\n",(0,o.jsxs)(n.p,{children:["An important question in this context is: what happens with ",(0,o.jsx)(n.code,{children:"Home"})," when we navigate away from it, or when we come back to it? How does a route find out that a user is leaving it or coming back to it?"]}),"\n",(0,o.jsxs)(n.p,{children:["Coming to React Navigation from the web, you may assume that when user navigates from route ",(0,o.jsx)(n.code,{children:"A"})," to route ",(0,o.jsx)(n.code,{children:"B"}),", ",(0,o.jsx)(n.code,{children:"A"})," will unmount and its ",(0,o.jsx)(n.code,{children:"componentWillUnmount"})," will be called. You may also expect ",(0,o.jsx)(n.code,{children:"A"})," will remount again when user comes back to it. While these React lifecycle methods are still valid and are used in React Navigation, their usage differs from the web. This is driven by more complex needs of mobile navigation."]}),"\n",(0,o.jsx)(n.h2,{id:"example-scenario",children:"Example scenario"}),"\n",(0,o.jsxs)(n.p,{children:["Consider a stack navigator with screens ",(0,o.jsx)(n.code,{children:"A"})," and ",(0,o.jsx)(n.code,{children:"B"}),". After navigating to ",(0,o.jsx)(n.code,{children:"A"}),", its ",(0,o.jsx)(n.code,{children:"componentDidMount"})," is called. When pushing ",(0,o.jsx)(n.code,{children:"B"}),", its ",(0,o.jsx)(n.code,{children:"componentDidMount"})," is also called, but ",(0,o.jsx)(n.code,{children:"A"})," remains mounted on the stack and its ",(0,o.jsx)(n.code,{children:"componentWillUnmount"})," is therefore not called."]}),"\n",(0,o.jsxs)(n.p,{children:["When going back from ",(0,o.jsx)(n.code,{children:"B"})," to ",(0,o.jsx)(n.code,{children:"A"}),", ",(0,o.jsx)(n.code,{children:"componentWillUnmount"})," of ",(0,o.jsx)(n.code,{children:"B"})," is called, but ",(0,o.jsx)(n.code,{children:"componentDidMount"})," of ",(0,o.jsx)(n.code,{children:"A"})," is not because ",(0,o.jsx)(n.code,{children:"A"})," remained mounted the whole time."]}),"\n",(0,o.jsx)(n.h2,{id:"subscribing-to-lifecycle-events",children:"Subscribing to lifecycle events"}),"\n",(0,o.jsx)(n.p,{children:'Now that we understand how React lifecycle methods work in React Navigation, let\'s answer the question we asked at the beginning: "How do we find out that a user is leaving it or coming back to it?"'}),"\n",(0,o.jsxs)(n.p,{children:["React Navigation emits events to screen components that subscribe to them. There are four different events that you can subscribe to: ",(0,o.jsx)(n.code,{children:"willFocus"}),", ",(0,o.jsx)(n.code,{children:"willBlur"}),", ",(0,o.jsx)(n.code,{children:"didFocus"})," and ",(0,o.jsx)(n.code,{children:"didBlur"}),". Read more about them in the ",(0,o.jsx)(n.a,{href:"/docs/4.x/navigation-prop#addlistener-subscribe-to-updates-to-navigation-lifecycle",children:"API reference"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Many of your use cases may be covered with the ",(0,o.jsxs)(n.a,{href:"/docs/4.x/with-navigation-focus",children:[(0,o.jsx)(n.code,{children:"withNavigationFocus"})," higher-order-component"]}),", the ",(0,o.jsxs)(n.a,{href:"/docs/4.x/navigation-events",children:[(0,o.jsx)(n.code,{children:"<NavigationEvents />"})," component"]}),", or the ",(0,o.jsx)(n.a,{href:"https://github.com/react-navigation/hooks#usefocusstate",children:"useFocusState hook"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["While Reacts lifecycle methods are still valid, React Navigation adds more lifecycle events that you can subscribe to through the ",(0,o.jsx)(n.code,{children:"navigation"})," prop."]}),"\n",(0,o.jsxs)(n.li,{children:["You may also use the ",(0,o.jsx)(n.code,{children:"withNavigationFocus"})," HOC or ",(0,o.jsx)(n.code,{children:"<NavigationEvents />"})," component to react to lifecycle changes."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return s}});var t=i(67294);let o={},a=t.createContext(o);function s(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);