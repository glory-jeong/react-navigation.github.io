"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["15948"],{33502:function(n,e,r){r.r(e),r.d(e,{metadata:()=>t,contentTitle:()=>l,default:()=>m,assets:()=>u,toc:()=>p,frontMatter:()=>c});var t=JSON.parse('{"id":"drawer-actions","title":"DrawerActions reference","description":"DrawerActions is an object containing methods for generating actions specific to drawer-based navigators. Its methods expand upon the actions available in CommonActions.","source":"@site/versioned_docs/version-7.x/drawer-actions.md","sourceDirName":".","slug":"/drawer-actions","permalink":"/docs/drawer-actions","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/drawer-actions.md","tags":[],"version":"7.x","frontMatter":{"id":"drawer-actions","title":"DrawerActions reference","sidebar_label":"DrawerActions"},"sidebar":"docs","previous":{"title":"StackActions","permalink":"/docs/stack-actions"},"next":{"title":"TabActions","permalink":"/docs/tab-actions"}}'),a=r("85893"),o=r("50065"),i=r("47902"),s=r("5525");let c={id:"drawer-actions",title:"DrawerActions reference",sidebar_label:"DrawerActions"},l=void 0,u={},p=[{value:"openDrawer",id:"opendrawer",level:3},{value:"closeDrawer",id:"closedrawer",level:3},{value:"toggleDrawer",id:"toggledrawer",level:3},{value:"jumpTo",id:"jumpto",level:3}];function w(n){let e={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"DrawerActions"})," is an object containing methods for generating actions specific to drawer-based navigators. Its methods expand upon the actions available in ",(0,a.jsx)(e.a,{href:"/docs/navigation-actions",children:"CommonActions"}),"."]}),"\n",(0,a.jsx)(e.p,{children:"The following actions are supported:"}),"\n",(0,a.jsx)(e.h3,{id:"opendrawer",children:"openDrawer"}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"openDrawer"})," action can be used to open the drawer pane."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(s.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(e.pre,{"data-name":"Drawer Actions - openDrawer","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Drawer Actions - openDrawer" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { Button } from '@react-navigation/elements';\nimport {\n  createStaticNavigation,\n  useNavigation,\n  DrawerActions,\n} from '@react-navigation/native';\nimport {\n  createDrawerNavigator,\n  DrawerContentScrollView,\n  DrawerItemList,\n  DrawerItem,\n} from '@react-navigation/drawer';\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n  const jumpToAction = DrawerActions.jumpTo('Profile', { user: 'Satya' });\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home!</Text>\n      <Button\n        onPress={() => {\n          // codeblock-focus-start\n          navigation.dispatch(DrawerActions.openDrawer());\n          // codeblock-focus-end\n        }}\n      >\n        Open Drawer\n      </Button>\n      <Button onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>\n        Toggle Drawer\n      </Button>\n      <Button onPress={() => navigation.dispatch(jumpToAction)}>\n        Jump to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen({ route }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile!</Text>\n      <Text>{route?.params?.user ? route.params.user : 'Noone'}'s profile</Text>\n    </View>\n  );\n}\n\nfunction CustomDrawerContent(props) {\n  return (\n    <DrawerContentScrollView {...props}>\n      <DrawerItemList {...props} />\n      <DrawerItem\n        label=\"Close drawer\"\n        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}\n      />\n      <DrawerItem\n        label=\"Toggle drawer\"\n        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}\n      />\n    </DrawerContentScrollView>\n  );\n}\n\nconst Drawer = createDrawerNavigator({\n  drawerContent: (props) => <CustomDrawerContent {...props} />,\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(Drawer);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(s.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(e.pre,{"data-name":"Drawer Actions - openDrawer","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Drawer Actions - openDrawer" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { Button } from '@react-navigation/elements';\nimport {\n  NavigationContainer,\n  DrawerActions,\n  useNavigation,\n} from '@react-navigation/native';\nimport {\n  createDrawerNavigator,\n  DrawerContentScrollView,\n  DrawerItemList,\n  DrawerItem,\n} from '@react-navigation/drawer';\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n  const jumpToAction = DrawerActions.jumpTo('Profile', { user: 'Satya' });\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home!</Text>\n      <Button\n        onPress={() => {\n          // codeblock-focus-start\n          navigation.dispatch(DrawerActions.openDrawer());\n          // codeblock-focus-end\n        }}\n      >\n        Open Drawer\n      </Button>\n      <Button onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>\n        Toggle Drawer\n      </Button>\n      <Button onPress={() => navigation.dispatch(jumpToAction)}>\n        Jump to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen({ route }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile!</Text>\n      <Text>{route?.params?.user ? route.params.user : 'Noone'}'s profile</Text>\n    </View>\n  );\n}\n\nfunction CustomDrawerContent(props) {\n  return (\n    <DrawerContentScrollView {...props}>\n      <DrawerItemList {...props} />\n      <DrawerItem\n        label=\"Close drawer\"\n        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}\n      />\n      <DrawerItem\n        label=\"Toggle drawer\"\n        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}\n      />\n    </DrawerContentScrollView>\n  );\n}\n\nconst Drawer = createDrawerNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Drawer.Navigator\n        drawerContent={(props) => <CustomDrawerContent {...props} />}\n      >\n        <Drawer.Screen name=\"Home\" component={HomeScreen} />\n        <Drawer.Screen name=\"Profile\" component={ProfileScreen} />\n      </Drawer.Navigator>\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsx)(e.h3,{id:"closedrawer",children:"closeDrawer"}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"closeDrawer"})," action can be used to close the drawer pane."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(s.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(e.pre,{"data-name":"Drawer Actions - closeDrawer","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Drawer Actions - closeDrawer" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { Button } from '@react-navigation/elements';\nimport {\n  createStaticNavigation,\n  useNavigation,\n  DrawerActions,\n} from '@react-navigation/native';\nimport {\n  createDrawerNavigator,\n  DrawerContentScrollView,\n  DrawerItemList,\n  DrawerItem,\n} from '@react-navigation/drawer';\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n  const jumpToAction = DrawerActions.jumpTo('Profile', { user: 'Satya' });\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home!</Text>\n      <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>\n        Open Drawer\n      </Button>\n      <Button onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>\n        Toggle Drawer\n      </Button>\n      <Button onPress={() => navigation.dispatch(jumpToAction)}>\n        Jump to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen({ route }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile!</Text>\n      <Text>{route?.params?.user ? route.params.user : 'Noone'}'s profile</Text>\n    </View>\n  );\n}\n\nfunction CustomDrawerContent({ navigation }) {\n  return (\n    <DrawerContentScrollView {...props}>\n      <DrawerItemList {...props} />\n      <DrawerItem\n        label=\"Close drawer\"\n        onPress={() => {\n          // codeblock-focus-start\n          navigation.dispatch(DrawerActions.closeDrawer());\n          // codeblock-focus-end\n        }}\n      />\n      <DrawerItem\n        label=\"Toggle drawer\"\n        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}\n      />\n    </DrawerContentScrollView>\n  );\n}\n\nconst Drawer = createDrawerNavigator({\n  drawerContent: (props) => <CustomDrawerContent {...props} />,\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(Drawer);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(s.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(e.pre,{"data-name":"Drawer Actions - closeDrawer","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Drawer Actions - closeDrawer" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { Button } from '@react-navigation/elements';\nimport {\n  NavigationContainer,\n  DrawerActions,\n  useNavigation,\n} from '@react-navigation/native';\nimport {\n  createDrawerNavigator,\n  DrawerContentScrollView,\n  DrawerItemList,\n  DrawerItem,\n} from '@react-navigation/drawer';\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n  const jumpToAction = DrawerActions.jumpTo('Profile', { user: 'Satya' });\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home!</Text>\n      <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>\n        Open Drawer\n      </Button>\n      <Button onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>\n        Toggle Drawer\n      </Button>\n      <Button onPress={() => navigation.dispatch(jumpToAction)}>\n        Jump to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen({ route }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile!</Text>\n      <Text>{route?.params?.user ? route.params.user : 'Noone'}'s profile</Text>\n    </View>\n  );\n}\n\nfunction CustomDrawerContent({ navigation }) {\n  return (\n    <DrawerContentScrollView {...props}>\n      <DrawerItemList {...props} />\n      <DrawerItem\n        label=\"Close drawer\"\n        onPress={() => {\n          // codeblock-focus-start\n          navigation.dispatch(DrawerActions.closeDrawer());\n          // codeblock-focus-end\n        }}\n      />\n      <DrawerItem\n        label=\"Toggle drawer\"\n        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}\n      />\n    </DrawerContentScrollView>\n  );\n}\n\nconst Drawer = createDrawerNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Drawer.Navigator\n        drawerContent={(props) => <CustomDrawerContent {...props} />}\n      >\n        <Drawer.Screen name=\"Home\" component={HomeScreen} />\n        <Drawer.Screen name=\"Profile\" component={ProfileScreen} />\n      </Drawer.Navigator>\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsx)(e.h3,{id:"toggledrawer",children:"toggleDrawer"}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"toggleDrawer"})," action can be used to open the drawer pane if closed, or close if open."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(s.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(e.pre,{"data-name":"Drawer Actions - toggleDrawer","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Drawer Actions - toggleDrawer" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { Button } from '@react-navigation/elements';\nimport {\n  createStaticNavigation,\n  useNavigation,\n  DrawerActions,\n} from '@react-navigation/native';\nimport {\n  createDrawerNavigator,\n  DrawerContentScrollView,\n  DrawerItemList,\n  DrawerItem,\n} from '@react-navigation/drawer';\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n  const jumpToAction = DrawerActions.jumpTo('Profile', { user: 'Satya' });\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home!</Text>\n      <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>\n        Open Drawer\n      </Button>\n      <Button\n        onPress={() => {\n          // codeblock-focus-start\n          navigation.dispatch(DrawerActions.toggleDrawer());\n          // codeblock-focus-end\n        }}\n      >\n        Toggle Drawer\n      </Button>\n      <Button onPress={() => navigation.dispatch(jumpToAction)}>\n        Jump to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen({ route }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile!</Text>\n      <Text>{route?.params?.user ? route.params.user : 'Noone'}'s profile</Text>\n    </View>\n  );\n}\n\nfunction CustomDrawerContent(props) {\n  return (\n    <DrawerContentScrollView {...props}>\n      <DrawerItemList {...props} />\n      <DrawerItem\n        label=\"Close drawer\"\n        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}\n      />\n      <DrawerItem\n        label=\"Toggle drawer\"\n        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}\n      />\n    </DrawerContentScrollView>\n  );\n}\n\nconst Drawer = createDrawerNavigator({\n  drawerContent: (props) => <CustomDrawerContent {...props} />,\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(Drawer);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(s.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(e.pre,{"data-name":"Drawer Actions - toggleDrawer","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Drawer Actions - toggleDrawer" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { Button } from '@react-navigation/elements';\nimport {\n  NavigationContainer,\n  DrawerActions,\n  useNavigation,\n} from '@react-navigation/native';\nimport {\n  createDrawerNavigator,\n  DrawerContentScrollView,\n  DrawerItemList,\n  DrawerItem,\n} from '@react-navigation/drawer';\n\nfunction HomeScreen({ navigation }) {\n  const jumpToAction = DrawerActions.jumpTo('Profile', { user: 'Satya' });\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home!</Text>\n      <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>\n        Open Drawer\n      </Button>\n      <Button\n        onPress={() => {\n          // codeblock-focus-start\n          navigation.dispatch(DrawerActions.toggleDrawer());\n          // codeblock-focus-end\n        }}\n      >\n        Toggle Drawer\n      </Button>\n      <Button onPress={() => navigation.dispatch(jumpToAction)}>\n        Jump to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen({ route }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile!</Text>\n      <Text>{route?.params?.user ? route.params.user : 'Noone'}'s profile</Text>\n    </View>\n  );\n}\n\nfunction CustomDrawerContent(props) {\n  return (\n    <DrawerContentScrollView {...props}>\n      <DrawerItemList {...props} />\n      <DrawerItem\n        label=\"Close drawer\"\n        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}\n      />\n      <DrawerItem\n        label=\"Toggle drawer\"\n        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}\n      />\n    </DrawerContentScrollView>\n  );\n}\n\nconst Drawer = createDrawerNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Drawer.Navigator\n        drawerContent={(props) => <CustomDrawerContent {...props} />}\n      >\n        <Drawer.Screen name=\"Home\" component={HomeScreen} />\n        <Drawer.Screen name=\"Profile\" component={ProfileScreen} />\n      </Drawer.Navigator>\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsx)(e.h3,{id:"jumpto",children:"jumpTo"}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"jumpTo"})," action can be used to jump to an existing route in the drawer navigator."]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"name"})," - ",(0,a.jsx)(e.em,{children:"string"})," - Name of the route to jump to."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"params"})," - ",(0,a.jsx)(e.em,{children:"object"})," - Screen params to pass to the destination route."]}),"\n"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(s.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(e.pre,{"data-name":"Drawer Actions - jumpTo","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Drawer Actions - jumpTo" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { Button } from '@react-navigation/elements';\nimport {\n  createStaticNavigation,\n  useNavigation,\n  DrawerActions,\n} from '@react-navigation/native';\nimport {\n  createDrawerNavigator,\n  DrawerContentScrollView,\n  DrawerItemList,\n  DrawerItem,\n} from '@react-navigation/drawer';\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n  const jumpToAction = DrawerActions.jumpTo('Profile', { user: 'Satya' });\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home!</Text>\n      <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>\n        Open Drawer\n      </Button>\n      <Button onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>\n        Toggle Drawer\n      </Button>\n      <Button\n        onPress={() => {\n          // codeblock-focus-start\n          navigation.dispatch(jumpToAction);\n          // codeblock-focus-end\n        }}\n      >\n        Jump to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen({ route }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile!</Text>\n      <Text>{route?.params?.user ? route.params.user : 'Noone'}'s profile</Text>\n    </View>\n  );\n}\n\nfunction CustomDrawerContent(props) {\n  return (\n    <DrawerContentScrollView {...props}>\n      <DrawerItemList {...props} />\n      <DrawerItem\n        label=\"Close drawer\"\n        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}\n      />\n      <DrawerItem\n        label=\"Toggle drawer\"\n        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}\n      />\n    </DrawerContentScrollView>\n  );\n}\n\nconst Drawer = createDrawerNavigator({\n  drawerContent: (props) => <CustomDrawerContent {...props} />,\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(Drawer);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(s.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(e.pre,{"data-name":"Drawer Actions - jumpTo","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Drawer Actions - jumpTo" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { Button } from '@react-navigation/elements';\nimport {\n  NavigationContainer,\n  DrawerActions,\n  useNavigation,\n} from '@react-navigation/native';\nimport {\n  createDrawerNavigator,\n  DrawerContentScrollView,\n  DrawerItemList,\n  DrawerItem,\n} from '@react-navigation/drawer';\n\nfunction HomeScreen({ navigation }) {\n  const jumpToAction = DrawerActions.jumpTo('Profile', { user: 'Satya' });\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home!</Text>\n      <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>\n        Open Drawer\n      </Button>\n      <Button onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>\n        Toggle Drawer\n      </Button>\n      <Button\n        onPress={() => {\n          // codeblock-focus-start\n          navigation.dispatch(jumpToAction);\n          // codeblock-focus-end\n        }}\n      >\n        Jump to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen({ route }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile!</Text>\n      <Text>{route?.params?.user ? route.params.user : 'Noone'}'s profile</Text>\n    </View>\n  );\n}\n\nfunction CustomDrawerContent(props) {\n  return (\n    <DrawerContentScrollView {...props}>\n      <DrawerItemList {...props} />\n      <DrawerItem\n        label=\"Close drawer\"\n        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}\n      />\n      <DrawerItem\n        label=\"Toggle drawer\"\n        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}\n      />\n    </DrawerContentScrollView>\n  );\n}\n\nconst Drawer = createDrawerNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Drawer.Navigator\n        drawerContent={(props) => <CustomDrawerContent {...props} />}\n      >\n        <Drawer.Screen name=\"Home\" component={HomeScreen} />\n        <Drawer.Screen name=\"Profile\" component={ProfileScreen} />\n      </Drawer.Navigator>\n    </NavigationContainer>\n  );\n}\n"})})})]})]})}function m(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(w,{...n})}):w(n)}},5525:function(n,e,r){r.d(e,{Z:()=>i});var t=r("85893");r("67294");var a=r("67026");let o="tabItem_Ymn6";function i(n){let{children:e,hidden:r,className:i}=n;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r,children:e})}},47902:function(n,e,r){r.d(e,{Z:()=>x});var t=r("85893"),a=r("67294"),o=r("67026"),i=r("69599"),s=r("16550"),c=r("32000"),l=r("4520"),u=r("38341"),p=r("76009");function w(n){var e,r;return null!==(r=null===(e=a.Children.toArray(n).filter(n=>"\n"!==n).map(n=>{if(!n||(0,a.isValidElement)(n)&&function(n){let{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof n.type?n.type:n.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===e?void 0:e.filter(Boolean))&&void 0!==r?r:[]}function m(n){let{value:e,tabValues:r}=n;return r.some(n=>n.value===e)}var d=r("7227");let g="tabList__CuJ",f="tabItem_LNqP";function D(n){let{className:e,block:r,selectedValue:a,selectValue:s,tabValues:c}=n,l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),p=n=>{let e=n.currentTarget,r=c[l.indexOf(e)].value;r!==a&&(u(e),s(r))},w=n=>{var e,r;let t=null;switch(n.key){case"Enter":p(n);break;case"ArrowRight":{let r=l.indexOf(n.currentTarget)+1;t=null!==(e=l[r])&&void 0!==e?e:l[0];break}case"ArrowLeft":{let e=l.indexOf(n.currentTarget)-1;t=null!==(r=l[e])&&void 0!==r?r:l[l.length-1]}}null==t||t.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},e),children:c.map(n=>{let{value:e,label:r,attributes:i}=n;return(0,t.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:n=>l.push(n),onKeyDown:w,onClick:p,...i,className:(0,o.Z)("tabs__item",f,null==i?void 0:i.className,{"tabs__item--active":a===e}),children:null!=r?r:e},e)})})}function v(n){let{lazy:e,children:r,selectedValue:i}=n,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){let n=s.find(n=>n.props.value===i);return n?(0,a.cloneElement)(n,{className:(0,o.Z)("margin-top--md",n.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map((n,e)=>(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==i}))})}function h(n){let e=function(n){let{defaultValue:e,queryString:r=!1,groupId:t}=n,o=function(n){let{values:e,children:r}=n;return(0,a.useMemo)(()=>{let n=null!=e?e:w(r).map(n=>{let{props:{value:e,label:r,attributes:t,default:a}}=n;return{value:e,label:r,attributes:t,default:a}});return!function(n){let e=(0,u.lx)(n,(n,e)=>n.value===e.value);if(e.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(e.map(n=>n.value).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(n),n},[e,r])}(n),[i,d]=(0,a.useState)(()=>(function(n){var e;let{defaultValue:r,tabValues:t}=n;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(r,'" but none of its children has the corresponding value. Available values are: ').concat(t.map(n=>n.value).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return r}let a=null!==(e=t.find(n=>n.default))&&void 0!==e?e:t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:e,tabValues:o})),[g,f]=function(n){let{queryString:e=!1,groupId:r}=n,t=(0,s.k6)(),o=function(n){let{queryString:e=!1,groupId:r}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r}),i=(0,l._X)(o);return[i,(0,a.useCallback)(n=>{if(!o)return;let e=new URLSearchParams(t.location.search);e.set(o,n),t.replace({...t.location,search:e.toString()})},[o,t])]}({queryString:r,groupId:t}),[D,v]=function(n){var e;let{groupId:r}=n;let t=(e=r)?"docusaurus.tab.".concat(e):null,[o,i]=(0,p.Nk)(t);return[o,(0,a.useCallback)(n=>{if(!!t)i.set(n)},[t,i])]}({groupId:t}),h=(()=>{let n=null!=g?g:D;return m({value:n,tabValues:o})?n:null})();return(0,c.Z)(()=>{h&&d(h)},[h]),{selectedValue:i,selectValue:(0,a.useCallback)(n=>{if(!m({value:n,tabValues:o}))throw Error("Can't select invalid tab value=".concat(n));d(n),f(n),v(n)},[f,v,o]),tabValues:o}}(n);return(0,t.jsxs)("div",{className:(0,o.Z)("tabs-container",g),children:[(0,t.jsx)(D,{...e,...n}),(0,t.jsx)(v,{...e,...n})]})}function x(n){let e=(0,d.Z)();return(0,t.jsx)(h,{...n,children:w(n.children)},String(e))}},50065:function(n,e,r){r.d(e,{Z:function(){return s},a:function(){return i}});var t=r(67294);let a={},o=t.createContext(a);function i(n){let e=t.useContext(o);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);