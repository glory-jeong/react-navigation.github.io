"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["82674"],{64175:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>h,frontMatter:()=>s});var a=JSON.parse('{"id":"auth-flow","title":"Authentication flows","description":"Most apps require that a user authenticate in some way to have access to data associated with a user or other private content. Typically the flow will look like this:","source":"@site/versioned_docs/version-1.x/auth-flow.md","sourceDirName":".","slug":"/auth-flow","permalink":"/docs/1.x/auth-flow","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/auth-flow.md","tags":[],"version":"1.x","frontMatter":{"id":"auth-flow","title":"Authentication flows","sidebar_label":"Authentication flows"},"sidebar":"docs","previous":{"title":"Drawer navigation","permalink":"/docs/1.x/drawer-based-navigation"},"next":{"title":"iPhone X support","permalink":"/docs/1.x/handling-iphonex"}}'),o=n("85893"),i=n("50065");let s={id:"auth-flow",title:"Authentication flows",sidebar_label:"Authentication flows"},r=void 0,c={},h=[{value:"Set up our navigators",id:"set-up-our-navigators",level:2},{value:"Implement our authentication loading screen",id:"implement-our-authentication-loading-screen",level:2},{value:"Fill in other components",id:"fill-in-other-components",level:2}];function l(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Most apps require that a user authenticate in some way to have access to data associated with a user or other private content. Typically the flow will look like this:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The user opens the app."}),"\n",(0,o.jsxs)(t.li,{children:["The app loads some authentication state from persistent storage (for example, ",(0,o.jsx)(t.code,{children:"AsyncStorage"}),")."]}),"\n",(0,o.jsx)(t.li,{children:"When the state has loaded, the user is presented with either authentication screens or the main app, depending on whether valid authentication state was loaded."}),"\n",(0,o.jsx)(t.li,{children:"When the user signs out, we clear the authentication state and send them back to authentication screens."}),"\n"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:'Note: we say "authentication screens" because usually there is more than one. You may have a main screen with a username and password field, another for "forgot password", and another set for sign up.'}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"set-up-our-navigators",children:"Set up our navigators"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { StackNavigator, SwitchNavigator } from 'react-navigation';\n\n// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen\n// goes here.\n\nconst AppStack = StackNavigator({ Home: HomeScreen, Other: OtherScreen });\nconst AuthStack = StackNavigator({ SignIn: SignInScreen });\n\nexport default SwitchNavigator(\n  {\n    AuthLoading: AuthLoadingScreen,\n    App: AppStack,\n    Auth: AuthStack,\n  },\n  {\n    initialRouteName: 'AuthLoading',\n  }\n);\n"})}),"\n",(0,o.jsx)("a",{href:"https://snack.expo.io/@react-navigation/auth-flow",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,o.jsxs)(t.p,{children:["You may not be familiar with ",(0,o.jsx)(t.code,{children:"SwitchNavigator"})," yet. The purpose of ",(0,o.jsx)(t.code,{children:"SwitchNavigator"})," is to only ever show one screen at a time. By default, it does not handle back actions and it resets routes to their default state when you switch away. This is the exact behavior that we want from the authentication flow: when users sign in, we want to throw away the state of the authentication flow and unmount all of the screens, and when we press the hardware back button we expect to not be able to go back to the authentication flow. We switch between routes in the ",(0,o.jsx)(t.code,{children:"SwitchNavigator"})," by using the ",(0,o.jsx)(t.code,{children:"navigate"})," action. You can read more about the ",(0,o.jsx)(t.code,{children:"SwitchNavigator"})," in the ",(0,o.jsx)(t.a,{href:"/docs/1.x/switch-navigator",children:"API reference"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["We set the ",(0,o.jsx)(t.code,{children:"initialRouteName"})," to ",(0,o.jsx)(t.code,{children:"'AuthLoading'"})," because we will fetch our authentication state from persistent storage inside of that screen component."]}),"\n",(0,o.jsx)(t.h2,{id:"implement-our-authentication-loading-screen",children:"Implement our authentication loading screen"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import React from 'react';\nimport {\n  ActivityIndicator,\n  AsyncStorage,\n  StatusBar,\n  StyleSheet,\n  View,\n} from 'react-native';\n\nclass AuthLoadingScreen extends React.Component {\n  constructor(props) {\n    super(props);\n    this._bootstrapAsync();\n  }\n\n  // Fetch the token from storage then navigate to our appropriate place\n  _bootstrapAsync = async () => {\n    const userToken = await AsyncStorage.getItem('userToken');\n\n    // This will switch to the App screen or Auth screen and this loading\n    // screen will be unmounted and thrown away.\n    this.props.navigation.navigate(userToken ? 'App' : 'Auth');\n  };\n\n  // Render any loading content that you like here\n  render() {\n    return (\n      <View>\n        <ActivityIndicator />\n        <StatusBar barStyle=\"default\" />\n      </View>\n    );\n  }\n}\n"})}),"\n",(0,o.jsx)("a",{href:"https://snack.expo.io/@react-navigation/auth-flow",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,o.jsx)(t.h2,{id:"fill-in-other-components",children:"Fill in other components"}),"\n",(0,o.jsxs)(t.p,{children:["Our ",(0,o.jsx)(t.code,{children:"App"})," and ",(0,o.jsx)(t.code,{children:"Auth"})," routes are both ",(0,o.jsx)(t.code,{children:"StackNavigators"}),", but you could do whatever you like here. As mentioned above, you probably want your authentication route to be a stack for password reset, signup, etc. Similarly for your app, you probably have more than one screen. We won't talk about how to implement the text inputs and buttons for the authentication screen, that is outside of the scope of navigation. We'll just fill in some placeholder content."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"class SignInScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Please sign in',\n  };\n\n  render() {\n    return (\n      <View>\n        <Button title=\"Sign in!\" onPress={this._signInAsync} />\n      </View>\n    );\n  }\n\n  _signInAsync = async () => {\n    await AsyncStorage.setItem('userToken', 'abc');\n    this.props.navigation.navigate('App');\n  };\n}\n\nclass HomeScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Welcome to the app!',\n  };\n\n  render() {\n    return (\n      <View>\n        <Button title=\"Show me more of the app\" onPress={this._showMoreApp} />\n        <Button title=\"Actually, sign me out :)\" onPress={this._signOutAsync} />\n      </View>\n    );\n  }\n\n  _showMoreApp = () => {\n    this.props.navigation.navigate('Other');\n  };\n\n  _signOutAsync = async () => {\n    await AsyncStorage.clear();\n    this.props.navigation.navigate('Auth');\n  };\n}\n\n// More code like OtherScreen omitted for brevity\n"})}),"\n",(0,o.jsx)("a",{href:"https://snack.expo.io/@react-navigation/auth-flow",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,o.jsxs)(t.p,{children:["That's about all there is to it. At the moment, ",(0,o.jsx)(t.code,{children:"SwitchNavigator"})," doesn't support animating between screens. Let us know if this is important to you ",(0,o.jsx)(t.a,{href:"https://react-navigation.canny.io/feature-requests",children:"on Canny"}),"."]})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return s}});var a=n(67294);let o={},i=a.createContext(o);function s(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);