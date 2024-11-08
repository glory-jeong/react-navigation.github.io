"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["90878"],{14109:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>a});var o=JSON.parse('{"id":"custom-android-back-button-handling","title":"Custom Android back button behavior","description":"By default, when user presses the Android hardware back button, react-navigation will pop a screen or exit the app if there are no screens to pop. This is a sensible default behavior, but there are situations when you might want to implement custom handling.","source":"@site/versioned_docs/version-6.x/custom-android-back-button-handling.md","sourceDirName":".","slug":"/custom-android-back-button-handling","permalink":"/docs/6.x/custom-android-back-button-handling","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/custom-android-back-button-handling.md","tags":[],"version":"6.x","frontMatter":{"id":"custom-android-back-button-handling","title":"Custom Android back button behavior","sidebar_label":"Custom Android back button behavior"},"sidebar":"docs","previous":{"title":"Screen options with nested navigators","permalink":"/docs/6.x/screen-options-resolution"},"next":{"title":"Animating elements between screens","permalink":"/docs/6.x/shared-element-transitions"}}'),s=t("85893"),i=t("50065");let a={id:"custom-android-back-button-handling",title:"Custom Android back button behavior",sidebar_label:"Custom Android back button behavior"},r=void 0,c={},d=[{value:"Why not use component lifecycle methods",id:"why-not-use-component-lifecycle-methods",level:3}];function l(e){let n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"By default, when user presses the Android hardware back button, react-navigation will pop a screen or exit the app if there are no screens to pop. This is a sensible default behavior, but there are situations when you might want to implement custom handling."}),"\n",(0,s.jsxs)(n.p,{children:['As an example, consider a screen where user is selecting items in a list, and a "selection mode" is active. On a back button press, you would first want the "selection mode" to be deactivated, and the screen should be popped only on the second back button press. The following code snippet demonstrates the situation. We make use of ',(0,s.jsx)(n.a,{href:"https://reactnative.dev/docs/backhandler.html",children:(0,s.jsx)(n.code,{children:"BackHandler"})})," which comes with react-native, along with the ",(0,s.jsx)(n.code,{children:"useFocusEffect"})," hook to add our custom ",(0,s.jsx)(n.code,{children:"hardwareBackPress"})," listener."]}),"\n",(0,s.jsxs)(n.p,{children:["Returning ",(0,s.jsx)(n.code,{children:"true"})," from ",(0,s.jsx)(n.code,{children:"onBackPress"})," denotes that we have handled the event, and react-navigation's listener will not get called, thus not popping the screen. Returning ",(0,s.jsx)(n.code,{children:"false"})," will cause the event to bubble up and react-navigation's listener will pop the screen."]}),"\n",(0,s.jsx)("samp",{id:"custom-android-back-button"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function ScreenWithCustomBackBehavior() {\n  // ...\n\n  useFocusEffect(\n    React.useCallback(() => {\n      const onBackPress = () => {\n        if (isSelectionModeEnabled()) {\n          disableSelectionMode();\n          return true;\n        } else {\n          return false;\n        }\n      };\n\n      const subscription = BackHandler.addEventListener(\n        'hardwareBackPress',\n        onBackPress\n      );\n\n      return () => subscription.remove();\n    }, [isSelectionModeEnabled, disableSelectionMode])\n  );\n\n  // ...\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The presented approach will work well for screens that are shown in a ",(0,s.jsx)(n.code,{children:"StackNavigator"}),". Custom back button handling in other situations may not be supported at the moment (eg. A known case when this does not work is when you want to handle back button press in an open drawer. PRs for such use cases are welcome!)."]}),"\n",(0,s.jsxs)(n.p,{children:["If instead of overriding system back button, you'd like to prevent going back from the screen, see docs for ",(0,s.jsx)(n.a,{href:"/docs/6.x/preventing-going-back",children:"preventing going back"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"why-not-use-component-lifecycle-methods",children:"Why not use component lifecycle methods"}),"\n",(0,s.jsxs)(n.p,{children:["At first, you may be inclined to use ",(0,s.jsx)(n.code,{children:"componentDidMount"})," to subscribe for the back press event and ",(0,s.jsx)(n.code,{children:"componentWillUnmount"})," to unsubscribe, or use ",(0,s.jsx)(n.code,{children:"useEffect"})," to add the listener. This approach will not work - learn more about this in ",(0,s.jsx)(n.a,{href:"/docs/6.x/navigation-lifecycle",children:"navigation lifecycle"}),"."]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var o=t(67294);let s={},i=o.createContext(s);function a(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);