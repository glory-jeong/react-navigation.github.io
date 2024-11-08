"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["98293"],{49281:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>r,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>s});var o=JSON.parse('{"id":"custom-android-back-button-handling","title":"Custom Android back button behavior","description":"By default, when user presses the Android hardware back button, react-navigation will pop a screen or exit the app if there are no screens to pop. This is a sensible default behavior, but there are situations when you might want to implement custom handling.","source":"@site/versioned_docs/version-4.x/custom-android-back-button-handling.md","sourceDirName":".","slug":"/custom-android-back-button-handling","permalink":"/docs/4.x/custom-android-back-button-handling","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/custom-android-back-button-handling.md","tags":[],"version":"4.x","frontMatter":{"id":"custom-android-back-button-handling","title":"Custom Android back button behavior","sidebar_label":"Custom Android back button behavior"},"sidebar":"version-4.x-docs","previous":{"title":"Navigation options resolution","permalink":"/docs/4.x/navigation-options-resolution"},"next":{"title":"Access the navigation prop from any component","permalink":"/docs/4.x/connecting-navigation-prop"}}'),a=t("85893"),i=t("50065");let s={id:"custom-android-back-button-handling",title:"Custom Android back button behavior",sidebar_label:"Custom Android back button behavior"},r=void 0,d={},c=[];function l(e){let n={a:"a",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"By default, when user presses the Android hardware back button, react-navigation will pop a screen or exit the app if there are no screens to pop. This is a sensible default behavior, but there are situations when you might want to implement custom handling."}),"\n",(0,a.jsxs)(n.p,{children:['As an example, consider a screen where user is selecting items in a list, and a "selection mode" is active. On a back button press, you would first want the "selection mode" to be deactivated, and the screen should be popped only on the second back button press. The following code snippet demonstrates the situation. We make use of ',(0,a.jsx)(n.a,{href:"https://reactnative.dev/docs/backhandler.html",children:(0,a.jsx)(n.code,{children:"BackHandler"})})," which comes with react-native and add additional check (",(0,a.jsx)(n.code,{children:"navigation.isFocused()"}),") to make sure that our code only gets executed if the screen is focused."]}),"\n",(0,a.jsxs)(n.p,{children:["Returning ",(0,a.jsx)(n.code,{children:"true"})," from ",(0,a.jsx)(n.code,{children:"onBackButtonPressAndroid"})," denotes that we have handled the event, and react-navigation's listener will not get called, thus not popping the screen. Returning ",(0,a.jsx)(n.code,{children:"false"})," will cause the event to bubble up and react-navigation's listener will pop the screen."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport { BackHandler } from 'react-native';\n\nclass ScreenWithCustomBackBehavior extends React.Component {\n  componentDidMount() {\n    BackHandler.addEventListener(\n      'hardwareBackPress',\n      this.handleBackButtonPressAndroid\n    );\n  }\n\n  componentWillUnmount() {\n    BackHandler.removeEventListener(\n      'hardwareBackPress',\n      this.handleBackButtonPressAndroid\n    );\n  }\n\n  handleBackButtonPressAndroid = () => {\n    if (!this.props.navigation.isFocused()) {\n      // The screen is not focused, so don't do anything\n      return false;\n    }\n\n    if (this.isSelectionModeEnabled()) {\n      this.disableSelectionMode();\n\n      // We have handled the back button\n      // Return `true` to prevent react-navigation from handling it\n      return true;\n    } else {\n      return false;\n    }\n  };\n\n  render() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The presented approach will work well for screens that are shown in a ",(0,a.jsx)(n.code,{children:"StackNavigator"}),". Custom back button handling in other situations may not be supported at the moment (eg. A known case when this does not work is when you want to handle back button press in an open drawer. PRs for such use cases are welcome!)."]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var o=t(67294);let a={},i=o.createContext(a);function s(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);