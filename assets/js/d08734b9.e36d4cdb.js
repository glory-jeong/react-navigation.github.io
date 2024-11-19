"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["11295"],{8872:function(n,e,t){t.r(e),t.d(e,{metadata:()=>a,contentTitle:()=>l,default:()=>g,assets:()=>u,toc:()=>d,frontMatter:()=>s});var a=JSON.parse('{"id":"screen-options-resolution","title":"Screen options with nested navigators","description":"In this document we\'ll explain how screen options work when there are multiple navigators. It\'s important to understand this so that you put your options in the correct place and can properly configure your navigators. If you put them in the wrong place, at best nothing will happen and at worst something confusing and unexpected will happen.","source":"@site/versioned_docs/version-7.x/screen-options-resolution.md","sourceDirName":".","slug":"/screen-options-resolution","permalink":"/docs/screen-options-resolution","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/screen-options-resolution.md","tags":[],"version":"7.x","frontMatter":{"id":"screen-options-resolution","title":"Screen options with nested navigators","sidebar_label":"Options with nested navigators"},"sidebar":"docs","previous":{"title":"Multiple drawers","permalink":"/docs/multiple-drawers"},"next":{"title":"Android back button behavior","permalink":"/docs/custom-android-back-button-handling"}}'),o=t("85893"),r=t("50065"),i=t("47902"),c=t("5525");let s={id:"screen-options-resolution",title:"Screen options with nested navigators",sidebar_label:"Options with nested navigators"},l=void 0,u={},d=[{value:"Setting parent screen options based on child navigator&#39;s state",id:"setting-parent-screen-options-based-on-child-navigators-state",level:2}];function m(n){let e={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["In this document we'll explain how ",(0,o.jsx)(e.a,{href:"/docs/screen-options",children:"screen options"})," work when there are multiple navigators. It's important to understand this so that you put your ",(0,o.jsx)(e.code,{children:"options"})," in the correct place and can properly configure your navigators. If you put them in the wrong place, at best nothing will happen and at worst something confusing and unexpected will happen."]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"You can only modify navigation options for a navigator from one of its screen components. This applies equally to navigators that are nested as screens."})}),"\n",(0,o.jsxs)(e.p,{children:["Let's take for example a tab navigator that contains a native stack in each tab. What happens if we set the ",(0,o.jsx)(e.code,{children:"options"})," on a screen inside of the stack?"]}),"\n",(0,o.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,o.jsx)(c.Z,{value:"static",label:"Static",default:!0,children:(0,o.jsx)(e.pre,{"data-name":"Tabs with native stack","data-snack":"true",children:(0,o.jsx)(e.code,{className:"language-js",metastring:'name="Tabs with native stack" snack',children:"import * as React from 'react';\nimport { View } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction A() {\n  return <View />;\n}\n\nfunction B() {\n  return <View />;\n}\n\n// codeblock-focus-start\nconst HomeStackScreen = createNativeStackNavigator({\n  screens: {\n    A: {\n      screen: A,\n      options: {\n        tabBarLabel: 'Home',\n      },\n    },\n  },\n});\n\nconst SettingsStackScreen = createNativeStackNavigator({\n  screens: {\n    B: {\n      screen: B,\n      options: {\n        tabBarLabel: 'Settings!',\n      },\n    },\n  },\n});\n\nconst Tab = createBottomTabNavigator({\n  screens: {\n    Home: HomeStackScreen,\n    Settings: SettingsStackScreen,\n  },\n});\n// codeblock-focus-end\n\nconst Navigation = createStaticNavigation(Tab);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,o.jsx)(c.Z,{value:"dynamic",label:"Dynamic",children:(0,o.jsx)(e.pre,{"data-name":"Tabs with native stack","data-snack":"true",children:(0,o.jsx)(e.code,{className:"language-js",metastring:'name="Tabs with native stack" snack',children:"import * as React from 'react';\nimport { View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nconst Tab = createBottomTabNavigator();\nconst HomeStack = createNativeStackNavigator();\nconst SettingsStack = createNativeStackNavigator();\n\nfunction A() {\n  return <View />;\n}\n\nfunction B() {\n  return <View />;\n}\n// codeblock-focus-start\nfunction HomeStackScreen() {\n  return (\n    <HomeStack.Navigator>\n      <HomeStack.Screen\n        name=\"A\"\n        component={A}\n        options={{ tabBarLabel: 'Home!' }}\n      />\n    </HomeStack.Navigator>\n  );\n}\n\nfunction SettingsStackScreen() {\n  return (\n    <SettingsStack.Navigator>\n      <SettingsStack.Screen\n        name=\"B\"\n        component={B}\n        options={{ tabBarLabel: 'Settings!' }}\n      />\n    </SettingsStack.Navigator>\n  );\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen name=\"Home\" component={HomeStackScreen} />\n        <Tab.Screen name=\"Settings\" component={SettingsStackScreen} />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n// codeblock-focus-end\n"})})})]}),"\n",(0,o.jsxs)(e.p,{children:["As we mentioned earlier, you can only modify navigation options for a navigator from one of its screen components. ",(0,o.jsx)(e.code,{children:"A"})," and ",(0,o.jsx)(e.code,{children:"B"})," above are screen components in ",(0,o.jsx)(e.code,{children:"HomeStack"})," and ",(0,o.jsx)(e.code,{children:"SettingsStack"})," respectively, not in the tab navigator. So the result will be that the ",(0,o.jsx)(e.code,{children:"tabBarLabel"})," property is not applied to the tab navigator. We can fix this though!"]}),"\n",(0,o.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,o.jsx)(c.Z,{value:"static",label:"Static",default:!0,children:(0,o.jsx)(e.pre,{"data-name":"Tabs with native stack","data-snack":"true",children:(0,o.jsx)(e.code,{className:"language-js",metastring:'name="Tabs with native stack" snack',children:"import * as React from 'react';\nimport { View } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction A() {\n  return <View />;\n}\n\nfunction B() {\n  return <View />;\n}\n\nconst HomeStackScreen = createNativeStackNavigator({\n  screens: {\n    A: A,\n  },\n});\n\nconst SettingsStackScreen = createNativeStackNavigator({\n  screens: {\n    B: B,\n  },\n});\n\n// codeblock-focus-start\nconst Tab = createBottomTabNavigator({\n  screens: {\n    Home: {\n      screen: HomeStackScreen,\n      options: {\n        tabBarLabel: 'Home!',\n      },\n    },\n    Settings: {\n      screen: SettingsStackScreen,\n      options: {\n        tabBarLabel: 'Settings!',\n      },\n    },\n  },\n});\n// codeblock-focus-start\n\nconst Navigation = createStaticNavigation(Tab);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,o.jsx)(c.Z,{value:"dynamic",label:"Dynamic",children:(0,o.jsx)(e.pre,{"data-name":"Tabs with native stack","data-snack":"true",children:(0,o.jsx)(e.code,{className:"language-js",metastring:'name="Tabs with native stack" snack',children:"import * as React from 'react';\nimport { View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nconst Tab = createBottomTabNavigator();\nconst HomeStack = createNativeStackNavigator();\nconst SettingsStack = createNativeStackNavigator();\n\nfunction A() {\n  return <View />;\n}\n\nfunction B() {\n  return <View />;\n}\n\nfunction HomeStackScreen() {\n  return (\n    <HomeStack.Navigator>\n      <HomeStack.Screen name=\"A\" component={A} />\n    </HomeStack.Navigator>\n  );\n}\n\nfunction SettingsStackScreen() {\n  return (\n    <SettingsStack.Navigator>\n      <SettingsStack.Screen name=\"B\" component={B} />\n    </SettingsStack.Navigator>\n  );\n}\n\n// codeblock-focus-start\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen\n          name=\"Home\"\n          component={HomeStackScreen}\n          options={{ tabBarLabel: 'Home!' }}\n        />\n        <Tab.Screen\n          name=\"Settings\"\n          component={SettingsStackScreen}\n          options={{ tabBarLabel: 'Settings!' }}\n        />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n// codeblock-focus-end\n"})})})]}),"\n",(0,o.jsxs)(e.p,{children:["When we set the ",(0,o.jsx)(e.code,{children:"options"})," directly on ",(0,o.jsx)(e.code,{children:"Screen"})," components containing the ",(0,o.jsx)(e.code,{children:"HomeStack"})," and ",(0,o.jsx)(e.code,{children:"SettingsStack"})," component, it allows us to control the options for its parent navigator when its used as a screen component. In this case, the options on our stack components configure the label in the tab navigator that renders the stacks."]}),"\n",(0,o.jsx)(e.h2,{id:"setting-parent-screen-options-based-on-child-navigators-state",children:"Setting parent screen options based on child navigator's state"}),"\n",(0,o.jsx)(e.p,{children:"Imagine the following configuration:"}),"\n",(0,o.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,o.jsx)(c.Z,{value:"static",label:"Static",default:!0,children:(0,o.jsx)(e.pre,{"data-name":"Parent options from a child","data-snack":"true",children:(0,o.jsx)(e.code,{className:"language-js",metastring:'name="Parent options from a child" snack',children:"import * as React from 'react';\nimport { View } from 'react-native';\nimport {\n  createStaticNavigation,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { Button } from '@react-navigation/elements';\n\nfunction FeedScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.navigate('Settings')}>\n        Go to Settings\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  return <View />;\n}\n\nfunction AccountScreen() {\n  return <View />;\n}\n\nfunction SettingsScreen() {\n  return <View />;\n}\n\n// codeblock-focus-start\nconst HomeTabs = createBottomTabNavigator({\n  screens: {\n    Feed: FeedScreen,\n    Profile: ProfileScreen,\n    Account: AccountScreen,\n  },\n});\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: HomeTabs,\n    Settings: SettingsScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n// codeblock-focus-end\n"})})}),(0,o.jsx)(c.Z,{value:"dynamic",label:"Dynamic",children:(0,o.jsx)(e.pre,{"data-name":"Parent options from a child","data-snack":"true",children:(0,o.jsx)(e.code,{className:"language-js",metastring:'name="Parent options from a child" snack',children:"import * as React from 'react';\nimport { View } from 'react-native';\nimport { NavigationContainer, useNavigation } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { Button } from '@react-navigation/elements';\n\nfunction FeedScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.navigate('Settings')}>\n        Go to Settings\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  return <View />;\n}\n\nfunction AccountScreen() {\n  return <View />;\n}\n\nfunction SettingsScreen() {\n  return <View />;\n}\n\n// codeblock-focus-start\nconst Tab = createBottomTabNavigator();\n\nfunction HomeTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name=\"Feed\" component={FeedScreen} />\n      <Tab.Screen name=\"Profile\" component={ProfileScreen} />\n      <Tab.Screen name=\"Account\" component={AccountScreen} />\n    </Tab.Navigator>\n  );\n}\n\nconst Stack = createNativeStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={HomeTabs} />\n        <Stack.Screen name=\"Settings\" component={SettingsScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n\n// codeblock-focus-end\n"})})})]}),"\n",(0,o.jsxs)(e.p,{children:["If we were to set the ",(0,o.jsx)(e.code,{children:"headerTitle"})," with ",(0,o.jsx)(e.code,{children:"options"})," for the ",(0,o.jsx)(e.code,{children:"FeedScreen"}),", this would not work. This is because ",(0,o.jsx)(e.code,{children:"App"})," stack will only look at its immediate children for configuration: ",(0,o.jsx)(e.code,{children:"HomeTabs"})," and ",(0,o.jsx)(e.code,{children:"SettingsScreen"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["But we can determine the ",(0,o.jsx)(e.code,{children:"headerTitle"})," option based on the ",(0,o.jsx)(e.a,{href:"/docs/navigation-state",children:"navigation state"})," of our tab navigator using the ",(0,o.jsx)(e.code,{children:"getFocusedRouteNameFromRoute"})," helper. Let's create a function to get the title first:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"import { getFocusedRouteNameFromRoute } from '@react-navigation/native';\n\nfunction getHeaderTitle(route) {\n  // If the focused route is not found, we need to assume it's the initial screen\n  // This can happen during if there hasn't been any navigation inside the screen\n  // In our case, it's \"Feed\" as that's the first screen inside the navigator\n  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';\n\n  switch (routeName) {\n    case 'Feed':\n      return 'News feed';\n    case 'Profile':\n      return 'My profile';\n    case 'Account':\n      return 'My account';\n  }\n}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Then we can use this function with the ",(0,o.jsx)(e.code,{children:"options"})," prop on ",(0,o.jsx)(e.code,{children:"Screen"}),":"]}),"\n",(0,o.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,o.jsx)(c.Z,{value:"static",label:"Static",default:!0,children:(0,o.jsx)(e.pre,{"data-name":"Parent options from a child","data-snack":"true",children:(0,o.jsx)(e.code,{className:"language-js",metastring:'name="Parent options from a child" snack',children:"import * as React from 'react';\nimport { View } from 'react-native';\nimport { getFocusedRouteNameFromRoute } from '@react-navigation/native';\nimport {\n  createStaticNavigation,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { Button } from '@react-navigation/elements';\n\nfunction getHeaderTitle(route) {\n  // If the focused route is not found, we need to assume it's the initial screen\n  // This can happen during if there hasn't been any navigation inside the screen\n  // In our case, it's \"Feed\" as that's the first screen inside the navigator\n  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';\n\n  switch (routeName) {\n    case 'Feed':\n      return 'News feed';\n    case 'Profile':\n      return 'My profile';\n    case 'Account':\n      return 'My account';\n  }\n}\n\nfunction FeedScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.navigate('Settings')}>\n        Go to Settings\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  return <View />;\n}\n\nfunction AccountScreen() {\n  return <View />;\n}\n\nfunction SettingsScreen() {\n  return <View />;\n}\nconst HomeTabs = createBottomTabNavigator({\n  screenOptions: {\n    headerShown: false,\n  },\n  screens: {\n    Feed: FeedScreen,\n    Profile: ProfileScreen,\n    Account: AccountScreen,\n  },\n});\n\n// codeblock-focus-start\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: {\n      screen: HomeTabs,\n      options: ({ route }) => ({\n        headerTitle: getHeaderTitle(route),\n      }),\n    },\n    Settings: SettingsScreen,\n  },\n});\n// codeblock-focus-end\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,o.jsx)(c.Z,{value:"dynamic",label:"Dynamic",children:(0,o.jsx)(e.pre,{"data-name":"Parent options from a child","data-snack":"true",children:(0,o.jsx)(e.code,{className:"language-js",metastring:'name="Parent options from a child" snack',children:"import * as React from 'react';\nimport { View } from 'react-native';\nimport {\n  NavigationContainer,\n  useNavigation,\n  getFocusedRouteNameFromRoute,\n} from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { Button } from '@react-navigation/elements';\n\nfunction getHeaderTitle(route) {\n  // If the focused route is not found, we need to assume it's the initial screen\n  // This can happen during if there hasn't been any navigation inside the screen\n  // In our case, it's \"Feed\" as that's the first screen inside the navigator\n  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';\n\n  switch (routeName) {\n    case 'Feed':\n      return 'News feed';\n    case 'Profile':\n      return 'My profile';\n    case 'Account':\n      return 'My account';\n  }\n}\n\nfunction FeedScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.navigate('Settings')}>\n        Go to Settings\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  return <View />;\n}\n\nfunction AccountScreen() {\n  return <View />;\n}\n\nfunction SettingsScreen() {\n  return <View />;\n}\n\nconst Tab = createBottomTabNavigator();\n\nfunction HomeTabs() {\n  return (\n    <Tab.Navigator screenOptions={{ headerShown: false }}>\n      <Tab.Screen name=\"Feed\" component={FeedScreen} />\n      <Tab.Screen name=\"Profile\" component={ProfileScreen} />\n      <Tab.Screen name=\"Account\" component={AccountScreen} />\n    </Tab.Navigator>\n  );\n}\n\nconst Stack = createNativeStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        // codeblock-focus-start\n        <Stack.Screen\n          name=\"Home\"\n          component={HomeTabs}\n          options={({ route }) => ({\n            headerTitle: getHeaderTitle(route),\n          })}\n        />\n        // codeblock-focus-end\n        <Stack.Screen name=\"Settings\" component={SettingsScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,o.jsxs)(e.p,{children:["So what's happening here? With the ",(0,o.jsx)(e.code,{children:"getFocusedRouteNameFromRoute"})," helper, we can get the currently active route name from this child navigator (in this case it's the tab navigator since that's what we're rendering) and setting an appropriate title for the header."]}),"\n",(0,o.jsx)(e.p,{children:"This approach can be used anytime you want to set options for a parent navigator based on a child navigator's state. Common use cases are:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"Show tab title in stack header: a stack contains a tab navigator and you want to set the title on the stack header (above example)"}),"\n",(0,o.jsxs)(e.li,{children:["Show screens without tab bar: a tab navigator contains a stack and you want to hide the tab bar on specific screens (not recommended, see ",(0,o.jsx)(e.a,{href:"/docs/hiding-tabbar-in-screens",children:"Hiding tab bar in specific screens"})," instead)"]}),"\n",(0,o.jsx)(e.li,{children:"Lock drawer on certain screens: a drawer has a stack inside of it and you want to lock the drawer on certain screens"}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"In many cases, similar behavior can be achieved by reorganizing our navigators. We usually recommend this option if it fits your use case."}),"\n",(0,o.jsx)(e.p,{children:"For example, for the above use case, instead of adding a tab navigator inside a stack navigator, we can add a stack navigator inside each of the tabs."}),"\n",(0,o.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,o.jsx)(c.Z,{value:"static",label:"Static",default:!0,children:(0,o.jsx)(e.pre,{"data-name":"Reorganized navigators","data-snack":"true",children:(0,o.jsx)(e.code,{className:"language-js",metastring:'name="Reorganized navigators" snack',children:"import * as React from 'react';\nimport { View } from 'react-native';\nimport {\n  createStaticNavigation,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { Button } from '@react-navigation/elements';\n\nfunction FeedScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.navigate('Settings')}>\n        Go to Settings\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  return <View />;\n}\n\nfunction SettingsScreen() {\n  return <View />;\n}\n\n// codeblock-focus-start\nconst FeedStackScreen = createNativeStackNavigator({\n  screens: {\n    Feed: FeedScreen,\n    /* other screens */\n  },\n});\n\nconst ProfileStackScreen = createNativeStackNavigator({\n  screens: {\n    Profile: ProfileScreen,\n    /* other screens */\n  },\n});\n\nconst HomeTabs = createBottomTabNavigator({\n  screens: {\n    Feed: FeedStackScreen,\n    Profile: ProfileStackScreen,\n  },\n});\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: HomeTabs,\n    Settings: SettingsScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n// codeblock-focus-end\n"})})}),(0,o.jsx)(c.Z,{value:"dynamic",label:"Dynamic",children:(0,o.jsx)(e.pre,{"data-name":"Reorganized navigators","data-snack":"true",children:(0,o.jsx)(e.code,{className:"language-js",metastring:'name="Reorganized navigators" snack',children:"import * as React from 'react';\nimport { View } from 'react-native';\nimport { NavigationContainer, useNavigation } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { Button } from '@react-navigation/elements';\n\nfunction FeedScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.navigate('Settings')}>\n        Go to Settings\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  return <View />;\n}\n\nfunction SettingsScreen() {\n  return <View />;\n}\n\nconst FeedStack = createNativeStackNavigator();\n\n// codeblock-focus-start\nfunction FeedStackScreen() {\n  return (\n    <FeedStack.Navigator>\n      <FeedStack.Screen name=\"Feed\" component={FeedScreen} />\n      {/* other screens */}\n    </FeedStack.Navigator>\n  );\n}\n\nconst ProfileStack = createNativeStackNavigator();\n\nfunction ProfileStackScreen() {\n  return (\n    <ProfileStack.Navigator>\n      <ProfileStack.Screen name=\"Profile\" component={ProfileScreen} />\n      {/* other screens */}\n    </ProfileStack.Navigator>\n  );\n}\n\nconst Tab = createBottomTabNavigator();\n\nfunction HomeTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name=\"Feed\" component={FeedStackScreen} />\n      <Tab.Screen name=\"Profile\" component={ProfileStackScreen} />\n    </Tab.Navigator>\n  );\n}\n\nconst RootStack = createNativeStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RootStack.Navigator>\n        <RootStack.Screen name=\"Home\" component={HomeTabs} />\n        <RootStack.Screen name=\"Settings\" component={SettingsScreen} />\n      </RootStack.Navigator>\n    </NavigationContainer>\n  );\n}\n// codeblock-focus-end\n"})})})]}),"\n",(0,o.jsx)(e.p,{children:"Additionally, this lets you push new screens to the feed and profile stacks without hiding the tab bar by adding more routes to those stacks."}),"\n",(0,o.jsxs)(e.p,{children:["If you want to push screens on top of the tab bar (i.e. that don't show the tab bar), then you can add them to the ",(0,o.jsx)(e.code,{children:"App"})," stack instead of adding them into the screens inside the tab navigator."]})]})}function g(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(m,{...n})}):m(n)}},5525:function(n,e,t){t.d(e,{Z:()=>i});var a=t("85893");t("67294");var o=t("67026");let r="tabItem_Ymn6";function i(n){let{children:e,hidden:t,className:i}=n;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:t,children:e})}},47902:function(n,e,t){t.d(e,{Z:()=>k});var a=t("85893"),o=t("67294"),r=t("67026"),i=t("69599"),c=t("16550"),s=t("32000"),l=t("4520"),u=t("38341"),d=t("76009");function m(n){var e,t;return null!==(t=null===(e=o.Children.toArray(n).filter(n=>"\n"!==n).map(n=>{if(!n||(0,o.isValidElement)(n)&&function(n){let{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof n.type?n.type:n.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===e?void 0:e.filter(Boolean))&&void 0!==t?t:[]}function g(n){let{value:e,tabValues:t}=n;return t.some(n=>n.value===e)}var v=t("7227");let f="tabList__CuJ",p="tabItem_LNqP";function h(n){let{className:e,block:t,selectedValue:o,selectValue:c,tabValues:s}=n,l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=n=>{let e=n.currentTarget,t=s[l.indexOf(e)].value;t!==o&&(u(e),c(t))},m=n=>{var e,t;let a=null;switch(n.key){case"Enter":d(n);break;case"ArrowRight":{let t=l.indexOf(n.currentTarget)+1;a=null!==(e=l[t])&&void 0!==e?e:l[0];break}case"ArrowLeft":{let e=l.indexOf(n.currentTarget)-1;a=null!==(t=l[e])&&void 0!==t?t:l[l.length-1]}}null==a||a.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e),children:s.map(n=>{let{value:e,label:t,attributes:i}=n;return(0,a.jsx)("li",{role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,ref:n=>l.push(n),onKeyDown:m,onClick:d,...i,className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":o===e}),children:null!=t?t:e},e)})})}function S(n){let{lazy:e,children:t,selectedValue:i}=n,c=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let n=c.find(n=>n.props.value===i);return n?(0,o.cloneElement)(n,{className:(0,r.Z)("margin-top--md",n.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:c.map((n,e)=>(0,o.cloneElement)(n,{key:e,hidden:n.props.value!==i}))})}function b(n){let e=function(n){let{defaultValue:e,queryString:t=!1,groupId:a}=n,r=function(n){let{values:e,children:t}=n;return(0,o.useMemo)(()=>{let n=null!=e?e:m(t).map(n=>{let{props:{value:e,label:t,attributes:a,default:o}}=n;return{value:e,label:t,attributes:a,default:o}});return!function(n){let e=(0,u.lx)(n,(n,e)=>n.value===e.value);if(e.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(e.map(n=>n.value).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(n),n},[e,t])}(n),[i,v]=(0,o.useState)(()=>(function(n){var e;let{defaultValue:t,tabValues:a}=n;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(t,'" but none of its children has the corresponding value. Available values are: ').concat(a.map(n=>n.value).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return t}let o=null!==(e=a.find(n=>n.default))&&void 0!==e?e:a[0];if(!o)throw Error("Unexpected error: 0 tabValues");return o.value})({defaultValue:e,tabValues:r})),[f,p]=function(n){let{queryString:e=!1,groupId:t}=n,a=(0,c.k6)(),r=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),i=(0,l._X)(r);return[i,(0,o.useCallback)(n=>{if(!r)return;let e=new URLSearchParams(a.location.search);e.set(r,n),a.replace({...a.location,search:e.toString()})},[r,a])]}({queryString:t,groupId:a}),[h,S]=function(n){var e;let{groupId:t}=n;let a=(e=t)?"docusaurus.tab.".concat(e):null,[r,i]=(0,d.Nk)(a);return[r,(0,o.useCallback)(n=>{if(!!a)i.set(n)},[a,i])]}({groupId:a}),b=(()=>{let n=null!=f?f:h;return g({value:n,tabValues:r})?n:null})();return(0,s.Z)(()=>{b&&v(b)},[b]),{selectedValue:i,selectValue:(0,o.useCallback)(n=>{if(!g({value:n,tabValues:r}))throw Error("Can't select invalid tab value=".concat(n));v(n),p(n),S(n)},[p,S,r]),tabValues:r}}(n);return(0,a.jsxs)("div",{className:(0,r.Z)("tabs-container",f),children:[(0,a.jsx)(h,{...e,...n}),(0,a.jsx)(S,{...e,...n})]})}function k(n){let e=(0,v.Z)();return(0,a.jsx)(b,{...n,children:m(n.children)},String(e))}},50065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return i}});var a=t(67294);let o={},r=a.createContext(o);function i(n){let e=a.useContext(r);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);