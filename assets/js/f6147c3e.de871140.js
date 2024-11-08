"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["90975"],{3244:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>s,default:()=>l,assets:()=>c,toc:()=>d,frontMatter:()=>r});var a=JSON.parse('{"id":"handling-safe-area","title":"Supporting safe areas","description":"By default, React Navigation tries to ensure that the elements of the navigators display correctly on devices with notches (e.g. iPhone X) and UI elements which may overlap the app content. Such items include:","source":"@site/versioned_docs/version-5.x/handling-safe-area.md","sourceDirName":".","slug":"/handling-safe-area","permalink":"/docs/5.x/handling-safe-area","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/handling-safe-area.md","tags":[],"version":"5.x","frontMatter":{"id":"handling-safe-area","title":"Supporting safe areas","sidebar_label":"Supporting safe areas"},"sidebar":"docs","previous":{"title":"Authentication flows","permalink":"/docs/5.x/auth-flow"},"next":{"title":"Hiding tab bar in specific screens","permalink":"/docs/5.x/hiding-tabbar-in-screens"}}'),i=t("85893"),o=t("50065");let r={id:"handling-safe-area",title:"Supporting safe areas",sidebar_label:"Supporting safe areas"},s=void 0,c={},d=[{value:"Hidden/Custom Header or Tab Bar",id:"hiddencustom-header-or-tab-bar",level:2},{value:"Landscape Mode",id:"landscape-mode",level:2},{value:"Use the hook for more control",id:"use-the-hook-for-more-control",level:2},{value:"Summary",id:"summary",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"By default, React Navigation tries to ensure that the elements of the navigators display correctly on devices with notches (e.g. iPhone X) and UI elements which may overlap the app content. Such items include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Physical notches"}),"\n",(0,i.jsx)(n.li,{children:"Status bar overlay"}),"\n",(0,i.jsx)(n.li,{children:"Home activity indicator on iOS"}),"\n",(0,i.jsx)(n.li,{children:"Navigation bar on Android"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'The area not overlapped by such items is referred to as "safe area".'}),"\n",(0,i.jsx)(n.p,{children:"We try to apply proper insets on the UI elements of the navigators to avoid being overlapped by such items. The goal is to (a) maximize usage of the screen (b) without hiding content or making it difficult to interact with by having it obscured by a physical display cutout or some operating system UI."}),"\n",(0,i.jsx)(n.p,{children:"While React Navigation handles safe areas for the built-in UI elements by default, your own content also needs to handle it to ensure that content isn't hidden by these items."}),"\n",(0,i.jsx)(n.p,{children:"It's tempting to solve (a) by wrapping your entire app in a container with padding that ensures all content will not be occluded. But in doing so, we waste a bunch of space on the screen, as pictured in the image on the left below. What we ideally want is the image pictured on the right."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Notch on the iPhone X",src:t(63912).Z+"",width:"794",height:"785"})}),"\n",(0,i.jsxs)(n.p,{children:["While React Native exports a ",(0,i.jsx)(n.code,{children:"SafeAreaView"})," component, it has some inherent issues, i.e. if a screen containing safe area is animating, it causes jumpy behavior. In addition, this component only supports iOS 10+ with no support for older iOS versions or Android. We recommend to use the ",(0,i.jsx)(n.a,{href:"https://github.com/th3rdwave/react-native-safe-area-context",children:"react-native-safe-area-context"})," library to handle safe areas in a more reliable way."]}),"\n",(0,i.jsx)(n.p,{children:"The rest of this guide gives more information on how to support safe areas in React Navigation."}),"\n",(0,i.jsx)(n.h2,{id:"hiddencustom-header-or-tab-bar",children:"Hidden/Custom Header or Tab Bar"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Default React Navigation Behavior",src:t(98230).Z+"",width:"323",height:"700"})}),"\n",(0,i.jsx)(n.p,{children:"React Navigation handles safe area in the default header. However, if you're using a custom header, it's important to ensure your UI is within the safe area."}),"\n",(0,i.jsxs)(n.p,{children:["For example, if I render nothing for the ",(0,i.jsx)(n.code,{children:"header"})," or ",(0,i.jsx)(n.code,{children:"tabBar"}),", nothing renders"]}),"\n",(0,i.jsx)("samp",{id:"hidden-components"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nfunction Demo() {\n  return (\n    <View\n      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}\n    >\n      <Text>This is top text.</Text>\n      <Text>This is bottom text.</Text>\n    </View>\n  );\n}\nconst Stack = createStackNavigator();\nconst Tab = createBottomTabNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator initialRouteName=\"Home\" headerMode=\"none\">\n        <Stack.Screen name=\"Home\">\n          {() => (\n            <Tab.Navigator initialRouteName=\"Analytics\" tabBar={() => null}>\n              <Tab.Screen name=\"Analytics\" component={Demo} />\n              <Tab.Screen name=\"Profile\" component={Demo} />\n            </Tab.Navigator>\n          )}\n        </Stack.Screen>\n\n        <Stack.Screen name=\"Settings\" component={Demo} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Text hidden by iPhoneX UI elements",src:t(28370).Z+"",width:"323",height:"700"})}),"\n",(0,i.jsxs)(n.p,{children:["To fix this issue you can apply safe area insets on your content. This can be achieved easily by using the ",(0,i.jsx)(n.code,{children:"SafeAreaView"})," component from the ",(0,i.jsx)(n.code,{children:"react-native-safe-area-context"})," library:"]}),"\n",(0,i.jsx)("samp",{id:"safe-area-example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';\n\nfunction Demo() {\n  return (\n    <SafeAreaView\n      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}\n    >\n      <Text>This is top text.</Text>\n      <Text>This is bottom text.</Text>\n    </SafeAreaView>\n  );\n}\n\nexport default function App() {\n  return (\n    <SafeAreaProvider>\n      <NavigationContainer>{/*(...) */}</NavigationContainer>\n    </SafeAreaProvider>\n  );\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Make sure to wrap your app in ",(0,i.jsx)(n.code,{children:"SafeAreaProvider"})," as per the instructions ",(0,i.jsx)(n.a,{href:"https://github.com/th3rdwave/react-native-safe-area-context#usage",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Content spaced correctly with safe area insets",src:t(82769).Z+"",width:"323",height:"700"})}),"\n",(0,i.jsx)(n.p,{children:"This will detect if the app is running on a device with notches, if so, ensure the content isn't hidden behind any hardware elements."}),"\n",(0,i.jsx)(n.h2,{id:"landscape-mode",children:"Landscape Mode"}),"\n",(0,i.jsx)(n.p,{children:"Even if you're using the default navigation bar and tab bar - if your application works in landscape mode it's important to ensure your content isn't hidden behind the sensor cluster."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"App in landscape mode with text hidden",src:t(69366).Z+"",width:"2436",height:"1125"})}),"\n",(0,i.jsx)(n.p,{children:"To fix this you can, once again, apply safe area insets to your content. This will not conflict with the navigation bar nor the tab bar's default behavior in portrait mode."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"App in landscape mode with text visible",src:t(42846).Z+"",width:"2436",height:"1125"})}),"\n",(0,i.jsx)(n.h2,{id:"use-the-hook-for-more-control",children:"Use the hook for more control"}),"\n",(0,i.jsxs)(n.p,{children:["In some cases you might need more control over which paddings are applied. For example, you can only apply the top and the bottom padding by changing the ",(0,i.jsx)(n.code,{children:"style"})," object:"]}),"\n",(0,i.jsx)("samp",{id:"use-safe-area"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import { useSafeAreaInsets } from 'react-native-safe-area-context';\n\nfunction Demo() {\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={{\n        paddingTop: insets.top,\n        paddingBottom: insets.bottom,\n\n        flex: 1,\n        justifyContent: 'space-between',\n        alignItems: 'center',\n      }}\n    >\n      <Text>This is top text.</Text>\n      <Text>This is bottom text.</Text>\n    </View>\n  );\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Similarly, you could apply these paddings in ",(0,i.jsx)(n.code,{children:"contentContainerStyle"})," of ",(0,i.jsx)(n.code,{children:"FlatList"})," to have the content avoid the safe areas, but still show them under the statusbar and navigation bar when scrolling."]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Don't wrap your whole app in ",(0,i.jsx)(n.code,{children:"SafeAreaView"}),", instead wrap content inside your screens"]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"useSafeAreaInsets"})," hook for more control over where the insets are applied"]}),"\n"]})]})}function l(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},63912:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/00-intro-4709ed78711b21c7bd54d2a1385262bb.png"},98230:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/01-iphonex-default-2588bf4cb73433282b14319e54ea4815.png"},28370:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/02-iphonex-content-hidden-2a5db62e9fa6340cfb3e8f5a4250b7d4.png"},82769:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/03-iphonex-content-fixed-cb656e6a268a30af3f9aae2b6f3d4c64.png"},69366:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/04-iphonex-landscape-hidden-113cbaf522b57ff8fbfdf4b1b39411d3.png"},42846:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/05-iphonex-landscape-fixed-0d90c3fe5813cdd8664946c5873d7f57.png"},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var a=t(67294);let i={},o=a.createContext(i);function r(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);