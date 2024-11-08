"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["54450"],{41369:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>s,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>r});var a=JSON.parse('{"id":"screen-options-resolution","title":"Screen options with nested navigators","description":"In this document we\'ll explain how screen options work when there are multiple navigators. It\'s important to understand this so that you put your options in the correct place and can properly configure your navigators. If you put them in the wrong place, at best nothing will happen and at worst something confusing and unexpected will happen.","source":"@site/versioned_docs/version-5.x/screen-options-resolution.md","sourceDirName":".","slug":"/screen-options-resolution","permalink":"/docs/5.x/screen-options-resolution","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/screen-options-resolution.md","tags":[],"version":"5.x","frontMatter":{"id":"screen-options-resolution","title":"Screen options with nested navigators","sidebar_label":"Screen options with nested navigators"},"sidebar":"docs","previous":{"title":"Different status bar configuration based on route","permalink":"/docs/5.x/status-bar"},"next":{"title":"Custom Android back button behavior","permalink":"/docs/5.x/custom-android-back-button-handling"}}'),o=t("85893"),i=t("50065");let r={id:"screen-options-resolution",title:"Screen options with nested navigators",sidebar_label:"Screen options with nested navigators"},s=void 0,c={},d=[{value:"Setting parent screen options based on child navigator&#39;s state",id:"setting-parent-screen-options-based-on-child-navigators-state",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["In this document we'll explain how ",(0,o.jsx)(n.a,{href:"/docs/5.x/screen-options",children:"screen options"})," work when there are multiple navigators. It's important to understand this so that you put your ",(0,o.jsx)(n.code,{children:"options"})," in the correct place and can properly configure your navigators. If you put them in the wrong place, at best nothing will happen and at worst something confusing and unexpected will happen."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"You can only modify navigation options for a navigator from one of its screen components. This applies equally to navigators that are nested as screens."})}),"\n",(0,o.jsxs)(n.p,{children:["Let's take for example a tab navigator that contains a stack in each tab. What happens if we set the ",(0,o.jsx)(n.code,{children:"options"})," on a screen inside of the stack?"]}),"\n",(0,o.jsx)("samp",{id:"stack-in-tab-nav-options"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const Tab = createBottomTabNavigator();\nconst HomeStack = createStackNavigator();\nconst SettingsStack = createStackNavigator();\n\nfunction HomeStackScreen() {\n  return (\n    <HomeStack.Navigator>\n      <HomeStack.Screen\n        name="A"\n        component={A}\n        options={{ tabBarLabel: \'Home!\' }}\n      />\n    </HomeStack.Navigator>\n  );\n}\n\nfunction SettingsStackScreen() {\n  return (\n    <SettingsStack.Navigator>\n      <SettingsStack.Screen\n        name="B"\n        component={B}\n        options={{ tabBarLabel: \'Settings!\' }}\n      />\n    </SettingsStack.Navigator>\n  );\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen name="Home" component={HomeStackScreen} />\n        <Tab.Screen name="Settings" component={SettingsStackScreen} />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["As we mentioned earlier, you can only modify navigation options for a navigator from one of its screen components. ",(0,o.jsx)(n.code,{children:"A"})," and ",(0,o.jsx)(n.code,{children:"B"})," above are screen components in ",(0,o.jsx)(n.code,{children:"HomeStack"})," and ",(0,o.jsx)(n.code,{children:"SettingsStack"})," respectively, not in the tab navigator. So the result will be that the ",(0,o.jsx)(n.code,{children:"tabBarLabel"})," property is not applied to the tab navigator. We can fix this though!"]}),"\n",(0,o.jsx)("samp",{id:"stack-in-tab-nav-options-fixed"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen\n          name=\"Home\"\n          component={HomeStackScreen}\n          options={{ tabBarLabel: 'Home!' }}\n        />\n        <Tab.Screen\n          name=\"Settings\"\n          component={SettingsStackScreen}\n          options={{ tabBarLabel: 'Settings!' }}\n        />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When we set the ",(0,o.jsx)(n.code,{children:"options"})," directly on ",(0,o.jsx)(n.code,{children:"Screen"})," components containing the ",(0,o.jsx)(n.code,{children:"HomeStack"})," and ",(0,o.jsx)(n.code,{children:"SettingsStack"})," component, it allows us to control the options for its parent navigator when its used as a screen component. In this case, the options on our stack components configure the label in the tab navigator that renders the stacks."]}),"\n",(0,o.jsx)(n.h2,{id:"setting-parent-screen-options-based-on-child-navigators-state",children:"Setting parent screen options based on child navigator's state"}),"\n",(0,o.jsx)(n.p,{children:"Imagine the following configuration:"}),"\n",(0,o.jsx)("samp",{id:"parent-options-from-child-start"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const Tab = createBottomTabNavigator();\n\nfunction HomeTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Feed" component={FeedScreen} />\n      <Tab.Screen name="Profile" component={ProfileScreen} />\n      <Tab.Screen name="Account" component={AccountScreen} />\n    </Tab.Navigator>\n  );\n}\n\nconst Stack = createStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name="Home" component={HomeTabs} />\n        <Stack.Screen name="Settings" component={SettingsScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["If we were to set the ",(0,o.jsx)(n.code,{children:"headerTitle"})," with ",(0,o.jsx)(n.code,{children:"options"})," for the ",(0,o.jsx)(n.code,{children:"FeedScreen"}),", this would not work. This is because ",(0,o.jsx)(n.code,{children:"App"})," stack will only look at its immediate children for configuration: ",(0,o.jsx)(n.code,{children:"HomeTabs"})," and ",(0,o.jsx)(n.code,{children:"SettingsScreen"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["But we can determine the ",(0,o.jsx)(n.code,{children:"headerTitle"})," option based on the ",(0,o.jsx)(n.a,{href:"/docs/5.x/navigation-state",children:"navigation state"})," of our tab navigator using the ",(0,o.jsx)(n.code,{children:"getFocusedRouteNameFromRoute"})," helper. Let's create a function to get the title first:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import { getFocusedRouteNameFromRoute } from '@react-navigation/native';\n\nfunction getHeaderTitle(route) {\n  // If the focused route is not found, we need to assume it's the initial screen\n  // This can happen during if there hasn't been any navigation inside the screen\n  // In our case, it's \"Feed\" as that's the first screen inside the navigator\n  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';\n\n  switch (routeName) {\n    case 'Feed':\n      return 'News feed';\n    case 'Profile':\n      return 'My profile';\n    case 'Account':\n      return 'My account';\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then we can use this function in 2 ways:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Using ",(0,o.jsx)(n.code,{children:"options"})," prop on ",(0,o.jsx)(n.code,{children:"Screen"})," (recommended):"]}),"\n",(0,o.jsx)("samp",{id:"parent-options-from-child-opt1"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'<Stack.Screen\n  name="Home"\n  component={HomeTabs}\n  options={({ route }) => ({\n    headerTitle: getHeaderTitle(route),\n  })}\n/>\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Using ",(0,o.jsx)(n.code,{children:"navigation.setOptions"}),":"]}),"\n",(0,o.jsx)("samp",{id:"parent-options-from-child-opt2"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'function HomeTabs({ navigation, route }) {\n  React.useLayoutEffect(() => {\n    navigation.setOptions({ headerTitle: getHeaderTitle(route) });\n  }, [navigation, route]);\n\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Feed" component={FeedScreen} />\n      <Tab.Screen name="Profile" component={ProfileScreen} />\n      <Tab.Screen name="Account" component={AccountScreen} />\n    </Tab.Navigator>\n  );\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["So what's happening here? With the ",(0,o.jsx)(n.code,{children:"getFocusedRouteNameFromRoute"})," helper, we can get the currently active route name from this child navigator (in this case it's the tab navigator since that's what we're rendering) and setting an appropriate title for the header."]}),"\n",(0,o.jsx)(n.p,{children:"This approach can be used anytime you want to set options for a parent navigator based on a child navigator's state. Common use cases are:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Show tab title in stack header: a stack contains a tab navigator and you want to set the title on the stack header (above example)"}),"\n",(0,o.jsxs)(n.li,{children:["Show screens without tab bar: a tab navigator contains a stack and you want to hide the tab bar on specific screens (not recommended, see ",(0,o.jsx)(n.a,{href:"/docs/5.x/hiding-tabbar-in-screens",children:"Hiding tab bar in specific screens"})," instead)"]}),"\n",(0,o.jsx)(n.li,{children:"Lock drawer on certain screens: a drawer has a stack inside of it and you want to lock the drawer on certain screens"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In many cases, similar behavior can be achieved by reorganizing our navigators. We usually recommend this option if it fits your use case."}),"\n",(0,o.jsx)(n.p,{children:"For example, for the above use case, instead of adding a tab navigator inside a stack navigator, we can add a stack navigator inside each of the tabs."}),"\n",(0,o.jsx)("samp",{id:"reorganized-navigators"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const FeedStack = createStackNavigator();\n\nfunction FeedStackScreen() {\n  return (\n    <FeedStack.Navigator>\n      <FeedStack.Screen name="Feed" component={FeedScreen} />\n      {/* other screens */}\n    </FeedStack.Navigator>\n  );\n}\n\nconst ProfileStack = createStackNavigator();\n\nfunction ProfileStackScreen() {\n  return (\n    <ProfileStack.Navigator>\n      <ProfileStack.Screen name="Profile" component={ProfileScreen} />\n      {/* other screens */}\n    </ProfileStack.Navigator>\n  );\n}\n\nconst Tab = createBottomTabNavigator();\n\nfunction HomeTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Feed" component={FeedStackScreen} />\n      <Tab.Screen name="Profile" component={ProfileStackScreen} />\n    </Tab.Navigator>\n  );\n}\n\nconst RootStack = createStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RootStack.Navigator>\n        <RootStack.Screen name="Home" component={HomeTabs} />\n        <RootStack.Screen name="Settings" component={SettingsScreen} />\n      </RootStack.Navigator>\n    </NavigationContainer>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Additionally, this lets you push new screens to the feed and profile stacks without hiding the tab bar by adding more routes to those stacks."}),"\n",(0,o.jsxs)(n.p,{children:["If you want to push screens on top of the tab bar (i.e. that don't show the tab bar), then you can add them to the ",(0,o.jsx)(n.code,{children:"App"})," stack instead of adding them into the screens inside the tab navigator."]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var a=t(67294);let o={},i=a.createContext(o);function r(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);