"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["34941"],{64661:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>l,default:()=>m,assets:()=>u,toc:()=>d,frontMatter:()=>s});var o=JSON.parse('{"id":"screen-options","title":"Options for screens","description":"Each screen can configure various aspects about how it gets presented in the navigator that renders it by specifying certain options, for example, the header title in stack navigator, tab bar icon in bottom tab navigator etc. Different navigators support different set of options.","source":"@site/versioned_docs/version-7.x/screen-options.md","sourceDirName":".","slug":"/screen-options","permalink":"/docs/screen-options","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/screen-options.md","tags":[],"version":"7.x","frontMatter":{"id":"screen-options","title":"Options for screens","sidebar_label":"Options for screens"},"sidebar":"docs","previous":{"title":"Screen","permalink":"/docs/screen"},"next":{"title":"Route object","permalink":"/docs/route-object"}}'),a=t("85893"),r=t("50065"),i=t("47902"),c=t("5525");let s={id:"screen-options",title:"Options for screens",sidebar_label:"Options for screens"},l=void 0,u={},d=[{value:"<code>options</code> prop on <code>Screen</code>",id:"options-prop-on-screen",level:3},{value:"<code>screenOptions</code> prop on <code>Group</code>",id:"screenoptions-prop-on-group",level:3},{value:"<code>screenOptions</code> prop on the navigator",id:"screenoptions-prop-on-the-navigator",level:3},{value:"<code>navigation.setOptions</code> method",id:"navigationsetoptions-method",level:3}];function p(e){let n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Each screen can configure various aspects about how it gets presented in the navigator that renders it by specifying certain options, for example, the header title in stack navigator, tab bar icon in bottom tab navigator etc. Different navigators support different set of options."}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.a,{href:"/docs/headers",children:"configuring the header bar"})," section of the fundamentals documentation we explain the basics of how this works. Also see the ",(0,a.jsx)(n.a,{href:"/docs/screen-options-resolution",children:"screen options resolution guide"})," to get an idea of how they work when there are multiple navigators."]}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"/docs/typescript#annotating-options-and-screenoptions",children:"our docs"})," to learn more about how to use TypeScript with ",(0,a.jsx)(n.code,{children:"screenOptions"})," and ",(0,a.jsx)(n.code,{children:"options"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"There are 3 ways of specifying options for screens:"}),"\n",(0,a.jsxs)(n.h3,{id:"options-prop-on-screen",children:[(0,a.jsx)(n.code,{children:"options"})," prop on ",(0,a.jsx)(n.code,{children:"Screen"})]}),"\n",(0,a.jsxs)(n.p,{children:["You can pass a prop named ",(0,a.jsx)(n.code,{children:"options"})," to the ",(0,a.jsx)(n.code,{children:"Screen"})," component to configure a screen, where you can specify an object with different options for that screen:"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(c.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Screen title option","data-snack":"true",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Screen title option" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport Button from '@react-navigation/elements';\nimport {\n  createStaticNavigation,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button onPress={() => navigation.navigate('Profile')}>\n        Go to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Profile Screen</Text>\n      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>\n    </View>\n  );\n}\n\n// codeblock-focus-start\nconst Stack = createNativeStackNavigator({\n  screens: {\n    Home: {\n      screen: HomeScreen,\n      options: {\n        title: 'Awesome app',\n      },\n    },\n    Profile: {\n      screen: ProfileScreen,\n      options: {\n        title: 'My profile',\n      },\n    },\n  },\n});\n\nconst Navigation = createStaticNavigation(Stack);\n\nexport default function App() {\n  return <Navigation />;\n}\n// codeblock-focus-end\n"})})}),(0,a.jsx)(c.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{"data-name":"Screen title option","data-snack":"true",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Screen title option" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport Button from '@react-navigation/elements';\nimport { NavigationContainer, useNavigation } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nconst Stack = createNativeStackNavigator();\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button onPress={() => navigation.navigate('Profile')}>\n        Go to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Profile Screen</Text>\n      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>\n    </View>\n  );\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      // codeblock-focus-start\n      <Stack.Navigator>\n        <Stack.Screen\n          name=\"Home\"\n          component={HomeScreen}\n          options={{ title: 'Awesome app' }}\n        />\n        <Stack.Screen\n          name=\"Profile\"\n          component={ProfileScreen}\n          options={{ title: 'My profile' }}\n        />\n      </Stack.Navigator>\n      // codeblock-focus-end\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["You can also pass a function to ",(0,a.jsx)(n.code,{children:"options"}),". The function will receive the ",(0,a.jsxs)(n.a,{href:"/docs/navigation-object",children:[(0,a.jsx)(n.code,{children:"navigation"})," object"]})," and the ",(0,a.jsxs)(n.a,{href:"/docs/route-object",children:[(0,a.jsx)(n.code,{children:"route"})," object"]})," for that screen, as well as the ",(0,a.jsxs)(n.a,{href:"/docs/themes",children:[(0,a.jsx)(n.code,{children:"theme"})," object"]}),". This can be useful if you want to perform navigation in your options:"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(c.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const Stack = createNativeStackNavigator({\n  screens: {\n    Home: {\n      screen: HomeScreen,\n      options: ({ navigation }) => ({\n        title: 'Awesome app',\n        headerLeft: () => {\n          <DrawerButton onPress={() => navigation.toggleDrawer()} />;\n        },\n      }),\n    },\n  },\n});\n"})})}),(0,a.jsx)(c.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"<Stack.Screen\n  name=\"Home\"\n  component={HomeScreen}\n  options={({ navigation }) => ({\n    title: 'Awesome app',\n    headerLeft: () => (\n      <DrawerButton onPress={() => navigation.toggleDrawer()} />\n    ),\n  })}\n/>\n"})})})]}),"\n",(0,a.jsxs)(n.h3,{id:"screenoptions-prop-on-group",children:[(0,a.jsx)(n.code,{children:"screenOptions"})," prop on ",(0,a.jsx)(n.code,{children:"Group"})]}),"\n",(0,a.jsxs)(n.p,{children:["You can pass a prop named ",(0,a.jsx)(n.code,{children:"screenOptions"})," to the ",(0,a.jsx)(n.code,{children:"Group"})," component to configure screens inside the group, where you can specify an object with different options. The options specified in ",(0,a.jsx)(n.code,{children:"screenOptions"})," apply to all of the screens in the group."]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(c.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Screen options for group","data-snack":"true",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Screen options for group" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { Button } from '@react-navigation/elements';\nimport {\n  useNavigation,\n  createStaticNavigation,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\n// codeblock-focus-start\nconst Stack = createNativeStackNavigator({\n  groups: {\n    App: {\n      screenOptions: {\n        headerStyle: {\n          backgroundColor: '#FFB6C1',\n        },\n      },\n      screens: {\n        Home: ScreenWithButton('Home', 'Profile'),\n        Profile: ScreenWithButton('Profile', 'Settings'),\n      },\n    },\n    Modal: {\n      screenOptions: {\n        presentation: 'modal',\n      },\n      screens: {\n        Settings: ScreenWithButton('Settings', 'Share'),\n        Share: ScreenWithButton('Share'),\n      },\n    },\n  },\n});\n// codeblock-focus-end\n\nfunction ScreenWithButton(screenName, navigateTo) {\n  return function () {\n    const navigation = useNavigation();\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>{screenName} Screen</Text>\n        {navigateTo && (\n          <Button onPress={() => navigation.navigate(navigateTo)}>\n            Go to {navigateTo}\n          </Button>\n        )}\n      </View>\n    );\n  };\n}\nconst Navigation = createStaticNavigation(Stack);\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(c.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{"data-name":"Screen options for group","data-snack":"true",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Screen options for group" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { Button } from '@react-navigation/elements';\nimport { NavigationContainer, useNavigation } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nconst Stack = createNativeStackNavigator();\n\nfunction ScreenWithButton(screenName, navigateTo) {\n  return function () {\n    const navigation = useNavigation();\n\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>{screenName} Screen</Text>\n        {navigateTo && (\n          <Button onPress={() => navigation.navigate(navigateTo)}>\n            Go to {navigateTo}\n          </Button>\n        )}\n      </View>\n    );\n  };\n}\n\nconst HomeScreen = ScreenWithButton('Home', 'Profile');\nconst ProfileScreen = ScreenWithButton('Profile', 'Settings');\nconst SettingsScreen = ScreenWithButton('Settings', 'Share');\nconst ShareScreen = ScreenWithButton('Share');\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      // codeblock-focus-start\n      <Stack.Navigator>\n        <Stack.Group\n          screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }}\n        >\n          <Stack.Screen name=\"Home\" component={HomeScreen} />\n          <Stack.Screen name=\"Profile\" component={ProfileScreen} />\n        </Stack.Group>\n        <Stack.Group screenOptions={{ presentation: 'modal' }}>\n          <Stack.Screen name=\"Settings\" component={SettingsScreen} />\n          <Stack.Screen name=\"Share\" component={ShareScreen} />\n        </Stack.Group>\n      </Stack.Navigator>\n      // codeblock-focus-end\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Similar to ",(0,a.jsx)(n.code,{children:"options"}),", you can also pass a function to ",(0,a.jsx)(n.code,{children:"screenOptions"}),". The function will receive the ",(0,a.jsxs)(n.a,{href:"/docs/navigation-object",children:[(0,a.jsx)(n.code,{children:"navigation"})," object"]})," and the ",(0,a.jsxs)(n.a,{href:"/docs/route-object",children:[(0,a.jsx)(n.code,{children:"route"})," object"]})," for each screen. This can be useful if you want to configure options for all the screens in one place based on the route:"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(c.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const Stack = createNativeStackNavigator({\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n  groups: {\n    Modal: {\n      screenOptions: {\n        presentation: 'modal',\n        headerLeft: () => <CancelButton onPress={navigation.goBack} />,\n      },\n      screens: {\n        Settings: Settings,\n        Share: Share,\n      },\n    },\n  },\n});\n"})})}),(0,a.jsx)(c.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'<Stack.Navigator>\n  <Stack.Screen name="Home" component={HomeScreen} />\n  <Stack.Screen name="Profile" component={ProfileScreen} />\n  <Stack.Group\n    screenOptions={({ navigation }) => ({\n      presentation: \'modal\',\n      headerLeft: () => <CancelButton onPress={navigation.goBack} />,\n    })}\n  >\n    <Stack.Screen name="Settings" component={Settings} />\n    <Stack.Screen name="Share" component={Share} />\n  </Stack.Group>\n</Stack.Navigator>\n'})})})]}),"\n",(0,a.jsxs)(n.h3,{id:"screenoptions-prop-on-the-navigator",children:[(0,a.jsx)(n.code,{children:"screenOptions"})," prop on the navigator"]}),"\n",(0,a.jsxs)(n.p,{children:["You can pass a prop named ",(0,a.jsx)(n.code,{children:"screenOptions"})," to the navigator component, where you can specify an object with different options. The options specified in ",(0,a.jsx)(n.code,{children:"screenOptions"})," apply to all of the screens in the navigator. So this is a good place to specify options that you want to configure for the whole navigator."]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(c.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const Stack = createNativeStackNavigator({\n  screenOptions: {\n    headerStyle: {\n      backgroundColor: 'papayawhip',\n    },\n  },\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n"})})}),(0,a.jsx)(c.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'<Stack.Navigator\n  screenOptions={{ headerStyle: { backgroundColor: \'papayawhip\' } }}\n>\n  <Stack.Screen name="Home" component={HomeScreen} />\n  <Stack.Screen name="Profile" component={ProfileScreen} />\n</Stack.Navigator>\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Similar to ",(0,a.jsx)(n.code,{children:"options"}),", you can also pass a function to ",(0,a.jsx)(n.code,{children:"screenOptions"}),". The function will receive the ",(0,a.jsxs)(n.a,{href:"/docs/navigation-object",children:[(0,a.jsx)(n.code,{children:"navigation"})," object"]})," and the ",(0,a.jsxs)(n.a,{href:"/docs/route-object",children:[(0,a.jsx)(n.code,{children:"route"})," object"]})," for each screen. This can be useful if you want to configure options for all the screens in one place based on the route:"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(c.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Screen options for tab navigator","data-snack":"true","data-dependencies":"@expo/vector-icons",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Screen options for tab navigator" snack dependencies=@expo/vector-icons',children:"import * as React from 'react';\nimport { View } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { MaterialCommunityIcons } from '@expo/vector-icons';\n\n// codeblock-focus-start\nconst Tab = createBottomTabNavigator({\n  screenOptions: ({ route }) => ({\n    tabBarIcon: ({ color, size }) => {\n      const icons = {\n        Home: 'home',\n        Profile: 'account',\n      };\n\n      return (\n        <MaterialCommunityIcons\n          name={icons[route.name]}\n          color={color}\n          size={size}\n        />\n      );\n    },\n  }),\n  screens: {\n    Home: EmptyScreen,\n    Profile: EmptyScreen,\n  },\n});\n// codeblock-focus-end\n\nfunction EmptyScreen() {\n  return <View />;\n}\n\nconst Navigation = createStaticNavigation(Tab);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(c.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{"data-name":"Screen options for tab navigator","data-snack":"true","data-dependencies":"@expo/vector-icons",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Screen options for tab navigator" snack dependencies=@expo/vector-icons',children:"import * as React from 'react';\nimport { View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { MaterialCommunityIcons } from '@expo/vector-icons';\n\nconst Tab = createBottomTabNavigator();\n\nfunction EmptyScreen() {\n  return <View />;\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      // codeblock-focus-start\n      <Tab.Navigator\n        screenOptions={({ route }) => ({\n          tabBarIcon: ({ color, size }) => {\n            const icons = {\n              Home: 'home',\n              Profile: 'account',\n            };\n\n            return (\n              <MaterialCommunityIcons\n                name={icons[route.name]}\n                color={color}\n                size={size}\n              />\n            );\n          },\n        })}\n      >\n        <Tab.Screen name=\"Home\" component={EmptyScreen} />\n        <Tab.Screen name=\"Profile\" component={EmptyScreen} />\n      </Tab.Navigator>\n      // codeblock-focus-end\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsxs)(n.h3,{id:"navigationsetoptions-method",children:[(0,a.jsx)(n.code,{children:"navigation.setOptions"})," method"]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"navigation"})," object has a ",(0,a.jsx)(n.code,{children:"setOptions"})," method that lets you update the options for a screen from within a component. See ",(0,a.jsx)(n.a,{href:"/docs/navigation-object#setoptions",children:"navigation object's docs"})," for more details."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"<Button onPress={() => navigation.setOptions({ title: 'Updated!' })}>\n  Update options\n</Button>\n"})})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5525:function(e,n,t){t.d(n,{Z:()=>i});var o=t("85893");t("67294");var a=t("67026");let r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:t,children:n})}},47902:function(e,n,t){t.d(n,{Z:()=>j});var o=t("85893"),a=t("67294"),r=t("67026"),i=t("69599"),c=t("16550"),s=t("32000"),l=t("4520"),u=t("38341"),d=t("76009");function p(e){var n,t;return null!==(t=null===(n=a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function m(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var f=t("7227");let h="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:n,block:t,selectedValue:a,selectValue:c,tabValues:s}=e,l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{let n=e.currentTarget,t=s[l.indexOf(n)].value;t!==a&&(u(n),c(t))},p=e=>{var n,t;let o=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=l.indexOf(e.currentTarget)+1;o=null!==(n=l[t])&&void 0!==n?n:l[0];break}case"ArrowLeft":{let n=l.indexOf(e.currentTarget)-1;o=null!==(t=l[n])&&void 0!==t?t:l[l.length-1]}}null==o||o.focus()};return(0,o.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map(e=>{let{value:n,label:t,attributes:i}=e;return(0,o.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:p,onClick:d,...i,className:(0,r.Z)("tabs__item",g,null==i?void 0:i.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)})})}function S(e){let{lazy:n,children:t,selectedValue:i}=e,c=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=c.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,o.jsx)("div",{className:"margin-top--md",children:c.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:o}=e,r=function(e){let{values:n,children:t}=e;return(0,a.useMemo)(()=>{let e=null!=n?n:p(t).map(e=>{let{props:{value:n,label:t,attributes:o,default:a}}=e;return{value:n,label:t,attributes:o,default:a}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(n.map(e=>e.value).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[n,t])}(e),[i,f]=(0,a.useState)(()=>(function(e){var n;let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:o}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(t,'" but none of its children has the corresponding value. Available values are: ').concat(o.map(e=>e.value).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return t}let a=null!==(n=o.find(e=>e.default))&&void 0!==n?n:o[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:n,tabValues:r})),[h,g]=function(e){let{queryString:n=!1,groupId:t}=e,o=(0,c.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t}),i=(0,l._X)(r);return[i,(0,a.useCallback)(e=>{if(!r)return;let n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})},[r,o])]}({queryString:t,groupId:o}),[v,S]=function(e){var n;let{groupId:t}=e;let o=(n=t)?"docusaurus.tab.".concat(n):null,[r,i]=(0,d.Nk)(o);return[r,(0,a.useCallback)(e=>{if(!!o)i.set(e)},[o,i])]}({groupId:o}),x=(()=>{let e=null!=h?h:v;return m({value:e,tabValues:r})?e:null})();return(0,s.Z)(()=>{x&&f(x)},[x]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!m({value:e,tabValues:r}))throw Error("Can't select invalid tab value=".concat(e));f(e),g(e),S(e)},[g,S,r]),tabValues:r}}(e);return(0,o.jsxs)("div",{className:(0,r.Z)("tabs-container",h),children:[(0,o.jsx)(v,{...n,...e}),(0,o.jsx)(S,{...n,...e})]})}function j(e){let n=(0,f.Z)();return(0,o.jsx)(x,{...e,children:p(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var o=t(67294);let a={},r=o.createContext(a);function i(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);