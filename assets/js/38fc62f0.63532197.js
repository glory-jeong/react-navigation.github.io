"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["6589"],{31826:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>l,assets:()=>a,toc:()=>u,frontMatter:()=>i});var t=JSON.parse('{"id":"use-focus-effect","title":"useFocusEffect","description":"Sometimes we want to run side-effects when a screen is focused. A side effect may involve things like adding an event listener, fetching data, updating document title, etc. While this can be achieved using focus and blur events, it\'s not very ergonomic.","source":"@site/versioned_docs/version-5.x/use-focus-effect.md","sourceDirName":".","slug":"/use-focus-effect","permalink":"/docs/5.x/use-focus-effect","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/use-focus-effect.md","tags":[],"version":"5.x","frontMatter":{"id":"use-focus-effect","title":"useFocusEffect","sidebar_label":"useFocusEffect"},"sidebar":"docs","previous":{"title":"useNavigationState","permalink":"/docs/5.x/use-navigation-state"},"next":{"title":"useIsFocused","permalink":"/docs/5.x/use-is-focused"}}'),c=s("85893"),o=s("50065");let i={id:"use-focus-effect",title:"useFocusEffect",sidebar_label:"useFocusEffect"},r=void 0,a={},u=[{value:"Running asynchronous effects",id:"running-asynchronous-effects",level:2},{value:"Delaying effect until transition finishes",id:"delaying-effect-until-transition-finishes",level:2},{value:"How is <code>useFocusEffect</code> different from adding a listener for <code>focus</code> event",id:"how-is-usefocuseffect-different-from-adding-a-listener-for-focus-event",level:2},{value:"Using with class component",id:"using-with-class-component",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["Sometimes we want to run side-effects when a screen is focused. A side effect may involve things like adding an event listener, fetching data, updating document title, etc. While this can be achieved using ",(0,c.jsx)(n.code,{children:"focus"})," and ",(0,c.jsx)(n.code,{children:"blur"})," events, it's not very ergonomic."]}),"\n",(0,c.jsxs)(n.p,{children:["To make this easier, the library exports a ",(0,c.jsx)(n.code,{children:"useFocusEffect"})," hook:"]}),"\n",(0,c.jsx)("samp",{id:"simple-focus-effect"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"import { useFocusEffect } from '@react-navigation/native';\n\nfunction Profile({ userId }) {\n  const [user, setUser] = React.useState(null);\n\n  useFocusEffect(\n    React.useCallback(() => {\n      const unsubscribe = API.subscribe(userId, (user) => setUser(user));\n\n      return () => unsubscribe();\n    }, [userId])\n  );\n\n  return <ProfileContent user={user} />;\n}\n"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["Note: To avoid the running the effect too often, it's important to wrap the callback in ",(0,c.jsx)(n.code,{children:"useCallback"})," before passing it to ",(0,c.jsx)(n.code,{children:"useFocusEffect"})," as shown in the example."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"useFocusEffect"})," is analogous to React's ",(0,c.jsx)(n.code,{children:"useEffect"})," hook. The only difference is that it only runs if the screen is currently focused."]}),"\n",(0,c.jsxs)(n.p,{children:["The effect will run whenever the dependencies passed to ",(0,c.jsx)(n.code,{children:"React.useCallback"})," change, i.e. it'll run on initial render (if the screen is focused) as well as on subsequent renders if the dependencies have changed. If you don't wrap your effect in ",(0,c.jsx)(n.code,{children:"React.useCallback"}),", the effect will run every render if the screen is focused."]}),"\n",(0,c.jsxs)(n.p,{children:["The code passed to ",(0,c.jsx)(n.code,{children:"useFocusEffect"})," can return a cleanup function that runs when the previous effect needs to be cleaned up, i.e. when dependencies change and a new effect is scheduled and when the screen unmounts or blurs."]}),"\n",(0,c.jsx)(n.h2,{id:"running-asynchronous-effects",children:"Running asynchronous effects"}),"\n",(0,c.jsxs)(n.p,{children:["When running asynchronous effects such as fetching data from server, it's important to make sure that you cancel the request in the cleanup function (similar to ",(0,c.jsx)(n.code,{children:"React.useEffect"}),"). If you're using an API that doesn't provide a cancellation mechanism, make sure to ignore the state updates:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"useFocusEffect(\n  React.useCallback(() => {\n    const abortController = new AbortController();\n\n    const fetchUser = async () => {\n      try {\n        const user = await fetch(`https://example.com/users/${userId}`, {\n          signal: abortController.signal,\n        });\n\n        setUser(user);\n      } catch (e) {\n        if (e.name !== 'AbortError') {\n          // Handle error\n        }\n      }\n    };\n\n    fetchUser();\n\n    return () => {\n      abortController.abort();\n    };\n  }, [userId])\n);\n"})}),"\n",(0,c.jsx)(n.p,{children:"If you don't ignore the result, then you might end up with inconsistent data due to race conditions in your API calls."}),"\n",(0,c.jsx)(n.h2,{id:"delaying-effect-until-transition-finishes",children:"Delaying effect until transition finishes"}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"useFocusEffect"})," hook runs the effect as soon as the screen comes into focus. This often means that if there is an animation for the screen change, it might not have finished yet."]}),"\n",(0,c.jsxs)(n.p,{children:["React Navigation runs its animations in native thread, so it's not a problem in many cases. But if the effect updates the UI or renders something expensive, then it can affect the animation performance. In such cases, we can use ",(0,c.jsx)(n.a,{href:"https://reactnative.dev/docs/interactionmanager",children:(0,c.jsx)(n.code,{children:"InteractionManager"})})," to defer our work until the animations or gestures have finished:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"useFocusEffect(\n  React.useCallback(() => {\n    const task = InteractionManager.runAfterInteractions(() => {\n      // Expensive task\n    });\n\n    return () => task.cancel();\n  }, [])\n);\n"})}),"\n",(0,c.jsxs)(n.h2,{id:"how-is-usefocuseffect-different-from-adding-a-listener-for-focus-event",children:["How is ",(0,c.jsx)(n.code,{children:"useFocusEffect"})," different from adding a listener for ",(0,c.jsx)(n.code,{children:"focus"})," event"]}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"focus"})," event fires when a screen comes into focus. Since it's an event, your listener won't be called if the screen was already focused when you subscribed to the event. This also doesn't provide a way to perform a cleanup function when the screen becomes unfocused. You can subscribe to the ",(0,c.jsx)(n.code,{children:"blur"})," event and handle it manually, but it can get messy. You will usually need to handle ",(0,c.jsx)(n.code,{children:"componentDidMount"})," and ",(0,c.jsx)(n.code,{children:"componentWillUnmount"})," as well in addition to these events, which complicates it even more."]}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"useFocusEffect"})," allows you to run an effect on focus and clean it up when the screen becomes unfocused. It also handles cleanup on unmount. It re-runs the effect when dependencies change, so you don't need to worry about stale values in your listener."]}),"\n",(0,c.jsx)(n.h2,{id:"using-with-class-component",children:"Using with class component"}),"\n",(0,c.jsx)(n.p,{children:"You can make a component for your effect and use it in your class component:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"function FetchUserData({ userId, onUpdate }) {\n  useFocusEffect(\n    React.useCallback(() => {\n      const unsubscribe = API.subscribe(userId, onUpdate);\n\n      return () => unsubscribe();\n    }, [userId, onUpdate])\n  );\n\n  return null;\n}\n\n// ...\n\nclass Profile extends React.Component {\n  _handleUpdate = (user) => {\n    // Do something with user object\n  };\n\n  render() {\n    return (\n      <>\n        <FetchUserData\n          userId={this.props.userId}\n          onUpdate={this._handleUpdate}\n        />\n        {/* rest of your code */}\n      </>\n    );\n  }\n}\n"})})]})}function l(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return i}});var t=s(67294);let c={},o=t.createContext(c);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);