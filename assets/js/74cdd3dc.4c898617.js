"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["87974"],{32609:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>c,default:()=>b,assets:()=>d,toc:()=>h,frontMatter:()=>l});var a=JSON.parse('{"id":"material-top-tab-navigator","title":"Material Top Tabs Navigator","description":"A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the tabs or swiping horizontally. Transitions are animated by default. Screen components for each route are mounted immediately.","source":"@site/versioned_docs/version-7.x/material-top-tab-navigator.md","sourceDirName":".","slug":"/material-top-tab-navigator","permalink":"/docs/material-top-tab-navigator","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/material-top-tab-navigator.md","tags":[],"version":"7.x","frontMatter":{"id":"material-top-tab-navigator","title":"Material Top Tabs Navigator","sidebar_label":"Material Top Tabs"},"sidebar":"docs","previous":{"title":"Drawer","permalink":"/docs/drawer-navigator"},"next":{"title":"Developer tools","permalink":"/docs/devtools"}}'),i=t("85893"),r=t("50065"),o=t("47902"),s=t("5525");let l={id:"material-top-tab-navigator",title:"Material Top Tabs Navigator",sidebar_label:"Material Top Tabs"},c=void 0,d={},h=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"API Definition",id:"api-definition",level:2},{value:"Props",id:"props",level:3},{value:"<code>backBehavior</code>",id:"backbehavior",level:4},{value:"<code>tabBarPosition</code>",id:"tabbarposition",level:4},{value:"<code>keyboardDismissMode</code>",id:"keyboarddismissmode",level:4},{value:"<code>initialLayout</code>",id:"initiallayout",level:4},{value:"<code>sceneContainerStyle</code>",id:"scenecontainerstyle",level:4},{value:"<code>style</code>",id:"style",level:4},{value:"<code>tabBar</code>",id:"tabbar",level:4},{value:"Options",id:"options",level:3},{value:"<code>title</code>",id:"title",level:4},{value:"<code>tabBarLabel</code>",id:"tabbarlabel",level:4},{value:"<code>tabBarAccessibilityLabel</code>",id:"tabbaraccessibilitylabel",level:4},{value:"<code>tabBarAllowFontScaling</code>",id:"tabbarallowfontscaling",level:4},{value:"<code>tabBarShowLabel</code>",id:"tabbarshowlabel",level:4},{value:"<code>tabBarIcon</code>",id:"tabbaricon",level:4},{value:"<code>tabBarShowIcon</code>",id:"tabbarshowicon",level:4},{value:"<code>tabBarBadge</code>",id:"tabbarbadge",level:4},{value:"<code>tabBarIndicator</code>",id:"tabbarindicator",level:4},{value:"<code>tabBarIndicatorStyle</code>",id:"tabbarindicatorstyle",level:4},{value:"<code>tabBarIndicatorContainerStyle</code>",id:"tabbarindicatorcontainerstyle",level:4},{value:"<code>tabBarButtonTestID</code>",id:"tabbarbuttontestid",level:4},{value:"<code>tabBarActiveTintColor</code>",id:"tabbaractivetintcolor",level:4},{value:"<code>tabBarInactiveTintColor</code>",id:"tabbarinactivetintcolor",level:4},{value:"<code>tabBarPressColor</code>",id:"tabbarpresscolor",level:4},{value:"<code>tabBarPressOpacity</code>",id:"tabbarpressopacity",level:4},{value:"<code>tabBarBounces</code>",id:"tabbarbounces",level:4},{value:"<code>tabBarScrollEnabled</code>",id:"tabbarscrollenabled",level:4},{value:"<code>tabBarIconStyle</code>",id:"tabbariconstyle",level:4},{value:"<code>tabBarLabelStyle</code>",id:"tabbarlabelstyle",level:4},{value:"<code>tabBarItemStyle</code>",id:"tabbaritemstyle",level:4},{value:"<code>tabBarContentContainerStyle</code>",id:"tabbarcontentcontainerstyle",level:4},{value:"<code>tabBarStyle</code>",id:"tabbarstyle",level:4},{value:"<code>swipeEnabled</code>",id:"swipeenabled",level:4},{value:"<code>lazy</code>",id:"lazy",level:4},{value:"<code>lazyPreloadDistance</code>",id:"lazypreloaddistance",level:4},{value:"<code>lazyPlaceholder</code>",id:"lazyplaceholder",level:4},{value:"Events",id:"events",level:3},{value:"<code>tabPress</code>",id:"tabpress",level:4},{value:"<code>tabLongPress</code>",id:"tablongpress",level:4},{value:"Helpers",id:"helpers",level:3},{value:"<code>jumpTo</code>",id:"jumpto",level:4},{value:"Hooks",id:"hooks",level:3},{value:"<code>useTabAnimation</code>",id:"usetabanimation",level:4}];function u(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the tabs or swiping horizontally. Transitions are animated by default. Screen components for each route are mounted immediately."}),"\n",(0,i.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,children:(0,i.jsx)("source",{src:"/assets/7.x/material-top-tabs.mp4"})}),"\n",(0,i.jsxs)(n.p,{children:["This wraps ",(0,i.jsx)(n.a,{href:"/docs/tab-view",children:(0,i.jsx)(n.code,{children:"react-native-tab-view"})}),". If you want to use the tab view without React Navigation integration, use the library directly instead."]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["To use this navigator, ensure that you have ",(0,i.jsxs)(n.a,{href:"/docs/getting-started",children:[(0,i.jsx)(n.code,{children:"@react-navigation/native"})," and its dependencies (follow this guide)"]}),", then install ",(0,i.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation/tree/main/packages/material-top-tabs",children:(0,i.jsx)(n.code,{children:"@react-navigation/material-top-tabs"})}),":"]}),"\n",(0,i.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,i.jsx)(s.Z,{value:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install @react-navigation/material-top-tabs\n"})})}),(0,i.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @react-navigation/material-top-tabs\n"})})}),(0,i.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add @react-navigation/material-top-tabs\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Then, you need to install ",(0,i.jsx)(n.a,{href:"https://github.com/callstack/react-native-pager-view",children:(0,i.jsx)(n.code,{children:"react-native-pager-view"})})," which is required by the navigator."]}),"\n",(0,i.jsx)(n.p,{children:"If you have a Expo managed project, in your project directory, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx expo install react-native-pager-view\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you have a bare React Native project, in your project directory, run:"}),"\n",(0,i.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,i.jsx)(s.Z,{value:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install react-native-pager-view\n"})})}),(0,i.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add react-native-pager-view\n"})})}),(0,i.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add react-native-pager-view\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["If you're on a Mac and developing for iOS, you also need to install the pods (via ",(0,i.jsx)(n.a,{href:"https://cocoapods.org/",children:"Cocoapods"}),") to complete the linking."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx pod-install ios\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:["To use this navigator, import it from ",(0,i.jsx)(n.code,{children:"@react-navigation/material-top-tabs"}),":"]}),"\n",(0,i.jsxs)(o.Z,{groupId:"config",queryString:"config",children:[(0,i.jsx)(s.Z,{value:"static",label:"Static",default:!0,children:(0,i.jsx)(n.pre,{"data-name":"Material Top Tab Navigator","data-snack":"true",children:(0,i.jsx)(n.code,{className:"language-js",metastring:'name="Material Top Tab Navigator" snack',children:"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport {\n  createStaticNavigation,\n  useNavigation,\n} from '@react-navigation/native';\nimport { Button } from '@react-navigation/elements';\n// codeblock-focus-start\nimport { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';\n\n// codeblock-focus-end\nfunction HomeScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button onPress={() => navigation.navigate('Profile')}>\n        Go to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile Screen</Text>\n      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>\n    </View>\n  );\n}\n\n// codeblock-focus-start\nconst MyTabs = createMaterialTopTabNavigator({\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n// codeblock-focus-end\n\nconst Navigation = createStaticNavigation(MyTabs);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,i.jsx)(s.Z,{value:"dynamic",label:"Dynamic",children:(0,i.jsx)(n.pre,{"data-name":"Material Top Tab Navigator","data-snack":"true",children:(0,i.jsx)(n.code,{className:"language-js",metastring:'name="Material Top Tab Navigator" snack',children:"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport { NavigationContainer, useNavigation } from '@react-navigation/native';\nimport { Button } from '@react-navigation/elements';\n// codeblock-focus-start\nimport { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';\n\nconst Tab = createMaterialTopTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name=\"Home\" component={HomeScreen} />\n      <Tab.Screen name=\"Profile\" component={ProfileScreen} />\n    </Tab.Navigator>\n  );\n}\n// codeblock-focus-end\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button onPress={() => navigation.navigate('Profile')}>\n        Go to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile Screen</Text>\n      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>\n    </View>\n  );\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <MyTabs />\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"api-definition",children:"API Definition"}),"\n",(0,i.jsx)(n.h3,{id:"props",children:"Props"}),"\n",(0,i.jsxs)(n.p,{children:["In addition to the ",(0,i.jsx)(n.a,{href:"/docs/navigator#configuration",children:"common props"})," shared by all navigators, the material top tabs navigator component accepts the following additional props:"]}),"\n",(0,i.jsx)(n.h4,{id:"backbehavior",children:(0,i.jsx)(n.code,{children:"backBehavior"})}),"\n",(0,i.jsxs)(n.p,{children:["This controls what happens when ",(0,i.jsx)(n.code,{children:"goBack"})," is called in the navigator. This includes pressing the device's back button or back gesture on Android."]}),"\n",(0,i.jsx)(n.p,{children:"It supports the following values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"firstRoute"})," - return to the first screen defined in the navigator (default)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"initialRoute"})," - return to initial screen passed in ",(0,i.jsx)(n.code,{children:"initialRouteName"})," prop, if not passed, defaults to the first screen"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"order"})," - return to screen defined before the focused screen"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"history"})," - return to last visited screen in the navigator; if the same screen is visited multiple times, the older entries are dropped from the history"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"none"})," - do not handle back button"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"tabbarposition",children:(0,i.jsx)(n.code,{children:"tabBarPosition"})}),"\n",(0,i.jsxs)(n.p,{children:["Position of the tab bar in the tab view. Possible values are ",(0,i.jsx)(n.code,{children:"'top'"})," and ",(0,i.jsx)(n.code,{children:"'bottom'"}),". Defaults to ",(0,i.jsx)(n.code,{children:"'top'"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"keyboarddismissmode",children:(0,i.jsx)(n.code,{children:"keyboardDismissMode"})}),"\n",(0,i.jsx)(n.p,{children:"String indicating whether the keyboard gets dismissed in response to a drag gesture. Possible values are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"'auto'"})," (default): the keyboard is dismissed when the index changes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"'on-drag'"}),": the keyboard is dismissed when a drag begins."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"'none'"}),": drags do not dismiss the keyboard."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"initiallayout",children:(0,i.jsx)(n.code,{children:"initialLayout"})}),"\n",(0,i.jsx)(n.p,{children:"Object containing the initial height and width of the screens. Passing this will improve the initial rendering performance. For most apps, this is a good default:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"{\n  width: Dimensions.get('window').width;\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"scenecontainerstyle",children:(0,i.jsx)(n.code,{children:"sceneContainerStyle"})}),"\n",(0,i.jsx)(n.p,{children:"Style to apply to the view wrapping each screen. You can pass this to override some default styles such as overflow clipping."}),"\n",(0,i.jsx)(n.h4,{id:"style",children:(0,i.jsx)(n.code,{children:"style"})}),"\n",(0,i.jsx)(n.p,{children:"Style to apply to the tab view container."}),"\n",(0,i.jsx)(n.h4,{id:"tabbar",children:(0,i.jsx)(n.code,{children:"tabBar"})}),"\n",(0,i.jsx)(n.p,{children:"Function that returns a React element to display as the tab bar."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)("samp",{id:"material-top-tab-custom-tab-bar"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { Animated, View, TouchableOpacity, Platform } from 'react-native';\nimport { useLinkBuilder, useTheme } from '@react-navigation/native';\n\nfunction MyTabBar({ state, descriptors, navigation, position }) {\n  const { colors } = useTheme();\n  const { buildHref } = useLinkBuilder();\n\n  return (\n    <View style={{ flexDirection: 'row' }}>\n      {state.routes.map((route, index) => {\n        const { options } = descriptors[route.key];\n        const label =\n          options.tabBarLabel !== undefined\n            ? options.tabBarLabel\n            : options.title !== undefined\n              ? options.title\n              : route.name;\n\n        const isFocused = state.index === index;\n\n        const onPress = () => {\n          const event = navigation.emit({\n            type: 'tabPress',\n            target: route.key,\n            canPreventDefault: true,\n          });\n\n          if (!isFocused && !event.defaultPrevented) {\n            navigation.navigate(route.name, route.params);\n          }\n        };\n\n        const onLongPress = () => {\n          navigation.emit({\n            type: 'tabLongPress',\n            target: route.key,\n          });\n        };\n\n        const inputRange = state.routes.map((_, i) => i);\n        const opacity = position.interpolate({\n          inputRange,\n          outputRange: inputRange.map((i) => (i === index ? 1 : 0)),\n        });\n\n        return (\n          <TouchableOpacity\n            href={buildHref(route.name, route.params)}\n            accessibilityRole={Platform.OS === 'web' ? 'link' : 'button'}\n            accessibilityState={isFocused ? { selected: true } : {}}\n            accessibilityLabel={options.tabBarAccessibilityLabel}\n            testID={options.tabBarButtonTestID}\n            onPress={onPress}\n            onLongPress={onLongPress}\n            style={{ flex: 1 }}\n          >\n            <Animated.Text style={{ opacity, color: colors.text }}>\n              {label}\n            </Animated.Text>\n          </TouchableOpacity>\n        );\n      })}\n    </View>\n  );\n}\n\n// ...\n\n<Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>\n  {/* ... */}\n</Tab.Navigator>;\n"})}),"\n",(0,i.jsx)(n.p,{children:"This example will render a basic tab bar with labels."}),"\n",(0,i.jsxs)(n.p,{children:["Note that you ",(0,i.jsx)(n.strong,{children:"cannot"})," use the ",(0,i.jsx)(n.code,{children:"useNavigation"})," hook inside the ",(0,i.jsx)(n.code,{children:"tabBar"})," since ",(0,i.jsx)(n.code,{children:"useNavigation"})," is only available inside screens. You get a ",(0,i.jsx)(n.code,{children:"navigation"})," prop for your ",(0,i.jsx)(n.code,{children:"tabBar"})," which you can use instead:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"function MyTabBar({ navigation }) {\n  return (\n    <Button\n      onPress={() => {\n        // Navigate using the `navigation` prop that you received\n        // highlight-next-line\n        navigation.navigate('SomeScreen');\n      }}\n    >\n      Go somewhere\n    </Button>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.p,{children:["The following ",(0,i.jsx)(n.a,{href:"/docs/screen-options",children:"options"})," can be used to configure the screens in the navigator:"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)("samp",{id:"material-top-tab-options"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"<Tab.Navigator\n  screenOptions={{\n    tabBarLabelStyle: { fontSize: 12 },\n    tabBarItemStyle: { width: 100 },\n    tabBarStyle: { backgroundColor: 'powderblue' },\n  }}\n>\n  {/* ... */}\n</Tab.Navigator>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"title",children:(0,i.jsx)(n.code,{children:"title"})}),"\n",(0,i.jsxs)(n.p,{children:["Generic title that can be used as a fallback for ",(0,i.jsx)(n.code,{children:"headerTitle"})," and ",(0,i.jsx)(n.code,{children:"tabBarLabel"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"tabbarlabel",children:(0,i.jsx)(n.code,{children:"tabBarLabel"})}),"\n",(0,i.jsxs)(n.p,{children:["Title string of a tab displayed in the tab bar or a function that given ",(0,i.jsx)(n.code,{children:"{ focused: boolean, color: string }"})," returns a React.Node, to display in tab bar. When undefined, scene ",(0,i.jsx)(n.code,{children:"title"})," is used. To hide, see ",(0,i.jsx)(n.a,{href:"#tabbarshowlabel",children:(0,i.jsx)(n.code,{children:"tabBarShowLabel"})})," option."]}),"\n",(0,i.jsx)(n.h4,{id:"tabbaraccessibilitylabel",children:(0,i.jsx)(n.code,{children:"tabBarAccessibilityLabel"})}),"\n",(0,i.jsx)(n.p,{children:"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."}),"\n",(0,i.jsx)(n.h4,{id:"tabbarallowfontscaling",children:(0,i.jsx)(n.code,{children:"tabBarAllowFontScaling"})}),"\n",(0,i.jsx)(n.p,{children:"Whether label font should scale to respect Text Size accessibility settings."}),"\n",(0,i.jsx)(n.h4,{id:"tabbarshowlabel",children:(0,i.jsx)(n.code,{children:"tabBarShowLabel"})}),"\n",(0,i.jsxs)(n.p,{children:["Whether the tab label should be visible. Defaults to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"tabbaricon",children:(0,i.jsx)(n.code,{children:"tabBarIcon"})}),"\n",(0,i.jsxs)(n.p,{children:["Function that given ",(0,i.jsx)(n.code,{children:"{ focused: boolean, color: string }"})," returns a React.Node, to display in the tab bar."]}),"\n",(0,i.jsx)(n.h4,{id:"tabbarshowicon",children:(0,i.jsx)(n.code,{children:"tabBarShowIcon"})}),"\n",(0,i.jsxs)(n.p,{children:["Whether the tab icon should be visible. Defaults to ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"tabbarbadge",children:(0,i.jsx)(n.code,{children:"tabBarBadge"})}),"\n",(0,i.jsx)(n.p,{children:"Function that returns a React element to use as a badge for the tab."}),"\n",(0,i.jsx)(n.h4,{id:"tabbarindicator",children:(0,i.jsx)(n.code,{children:"tabBarIndicator"})}),"\n",(0,i.jsx)(n.p,{children:"Function that returns a React element as the tab bar indicator."}),"\n",(0,i.jsx)(n.h4,{id:"tabbarindicatorstyle",children:(0,i.jsx)(n.code,{children:"tabBarIndicatorStyle"})}),"\n",(0,i.jsx)(n.p,{children:"Style object for the tab bar indicator."}),"\n",(0,i.jsx)(n.h4,{id:"tabbarindicatorcontainerstyle",children:(0,i.jsx)(n.code,{children:"tabBarIndicatorContainerStyle"})}),"\n",(0,i.jsx)(n.p,{children:"Style object for the view containing the tab bar indicator."}),"\n",(0,i.jsx)(n.h4,{id:"tabbarbuttontestid",children:(0,i.jsx)(n.code,{children:"tabBarButtonTestID"})}),"\n",(0,i.jsx)(n.p,{children:"ID to locate this tab button in tests."}),"\n",(0,i.jsx)(n.h4,{id:"tabbaractivetintcolor",children:(0,i.jsx)(n.code,{children:"tabBarActiveTintColor"})}),"\n",(0,i.jsx)(n.p,{children:"Color for the icon and label in the active tab."}),"\n",(0,i.jsx)(n.h4,{id:"tabbarinactivetintcolor",children:(0,i.jsx)(n.code,{children:"tabBarInactiveTintColor"})}),"\n",(0,i.jsx)(n.p,{children:"Color for the icon and label in the inactive tabs."}),"\n",(0,i.jsx)(n.h4,{id:"tabbarpresscolor",children:(0,i.jsx)(n.code,{children:"tabBarPressColor"})}),"\n",(0,i.jsx)(n.p,{children:"Color for material ripple (Android >= 5.0 only)."}),"\n",(0,i.jsx)(n.h4,{id:"tabbarpressopacity",children:(0,i.jsx)(n.code,{children:"tabBarPressOpacity"})}),"\n",(0,i.jsx)(n.p,{children:"Opacity for pressed tab (iOS and Android < 5.0 only)."}),"\n",(0,i.jsx)(n.h4,{id:"tabbarbounces",children:(0,i.jsx)(n.code,{children:"tabBarBounces"})}),"\n",(0,i.jsx)(n.p,{children:"Boolean indicating whether the tab bar bounces when overscrolling."}),"\n",(0,i.jsx)(n.h4,{id:"tabbarscrollenabled",children:(0,i.jsx)(n.code,{children:"tabBarScrollEnabled"})}),"\n",(0,i.jsx)(n.p,{children:"Boolean indicating whether to make the tab bar scrollable."}),"\n",(0,i.jsxs)(n.p,{children:["If you set this to ",(0,i.jsx)(n.code,{children:"true"}),", you should also specify a width in ",(0,i.jsx)(n.code,{children:"tabBarItemStyle"})," to improve the performance of initial render."]}),"\n",(0,i.jsx)(n.h4,{id:"tabbariconstyle",children:(0,i.jsx)(n.code,{children:"tabBarIconStyle"})}),"\n",(0,i.jsx)(n.p,{children:"Style object for the tab icon container."}),"\n",(0,i.jsx)(n.h4,{id:"tabbarlabelstyle",children:(0,i.jsx)(n.code,{children:"tabBarLabelStyle"})}),"\n",(0,i.jsx)(n.p,{children:"Style object for the tab label."}),"\n",(0,i.jsx)(n.h4,{id:"tabbaritemstyle",children:(0,i.jsx)(n.code,{children:"tabBarItemStyle"})}),"\n",(0,i.jsx)(n.p,{children:"Style object for the individual tab items."}),"\n",(0,i.jsx)(n.h4,{id:"tabbarcontentcontainerstyle",children:(0,i.jsx)(n.code,{children:"tabBarContentContainerStyle"})}),"\n",(0,i.jsx)(n.p,{children:"Style object for the view containing the tab items."}),"\n",(0,i.jsx)(n.h4,{id:"tabbarstyle",children:(0,i.jsx)(n.code,{children:"tabBarStyle"})}),"\n",(0,i.jsx)(n.p,{children:"Style object for the tab bar."}),"\n",(0,i.jsx)(n.h4,{id:"swipeenabled",children:(0,i.jsx)(n.code,{children:"swipeEnabled"})}),"\n",(0,i.jsxs)(n.p,{children:["Boolean indicating whether to enable swipe gestures. Swipe gestures are enabled by default. Passing ",(0,i.jsx)(n.code,{children:"false"})," will disable swipe gestures, but the user can still switch tabs by pressing the tab bar."]}),"\n",(0,i.jsx)(n.h4,{id:"lazy",children:(0,i.jsx)(n.code,{children:"lazy"})}),"\n",(0,i.jsxs)(n.p,{children:["Whether this screen should be lazily rendered. When this is set to ",(0,i.jsx)(n.code,{children:"true"}),", the screen will be rendered as it comes into the viewport. By default all screens are rendered to provide a smoother swipe experience. But you might want to defer the rendering of screens out of the viewport until the user sees them. To enable lazy rendering for this screen, set ",(0,i.jsx)(n.code,{children:"lazy"})," to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When you enable ",(0,i.jsx)(n.code,{children:"lazy"}),", the lazy loaded screens will usually take some time to render when they come into the viewport. You can use the ",(0,i.jsx)(n.code,{children:"lazyPlaceholder"})," prop to customize what the user sees during this short period."]}),"\n",(0,i.jsx)(n.h4,{id:"lazypreloaddistance",children:(0,i.jsx)(n.code,{children:"lazyPreloadDistance"})}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"lazy"})," is enabled, you can specify how many adjacent screens should be preloaded in advance with this prop. This value defaults to ",(0,i.jsx)(n.code,{children:"0"})," which means lazy pages are loaded as they come into the viewport."]}),"\n",(0,i.jsx)(n.h4,{id:"lazyplaceholder",children:(0,i.jsx)(n.code,{children:"lazyPlaceholder"})}),"\n",(0,i.jsxs)(n.p,{children:["Function that returns a React element to render if this screen hasn't been rendered yet. The ",(0,i.jsx)(n.code,{children:"lazy"})," option also needs to be enabled for this to work."]}),"\n",(0,i.jsx)(n.p,{children:"This view is usually only shown for a split second. Keep it lightweight."}),"\n",(0,i.jsxs)(n.p,{children:["By default, this renders ",(0,i.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,i.jsxs)(n.p,{children:["The navigator can ",(0,i.jsx)(n.a,{href:"/docs/navigation-events",children:"emit events"})," on certain actions. Supported events are:"]}),"\n",(0,i.jsx)(n.h4,{id:"tabpress",children:(0,i.jsx)(n.code,{children:"tabPress"})}),"\n",(0,i.jsx)(n.p,{children:"This event is fired when the user presses the tab button for the current screen in the tab bar. By default a tab press does several things:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the tab is not focused, tab press will focus that tab"}),"\n",(0,i.jsxs)(n.li,{children:["If the tab is already focused:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If the screen for the tab renders a scroll view, you can use ",(0,i.jsx)(n.a,{href:"/docs/use-scroll-to-top",children:(0,i.jsx)(n.code,{children:"useScrollToTop"})})," to scroll it to top"]}),"\n",(0,i.jsxs)(n.li,{children:["If the screen for the tab renders a stack navigator, a ",(0,i.jsx)(n.code,{children:"popToTop"})," action is performed on the stack"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To prevent the default behavior, you can call ",(0,i.jsx)(n.code,{children:"event.preventDefault"}),":"]}),"\n",(0,i.jsx)("samp",{id:"material-top-tab-prevent-default"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabPress', (e) => {\n    // Prevent default behavior\n    e.preventDefault();\n\n    // Do something manually\n    // ...\n  });\n\n  return unsubscribe;\n}, [navigation]);\n"})}),"\n",(0,i.jsx)(n.h4,{id:"tablongpress",children:(0,i.jsx)(n.code,{children:"tabLongPress"})}),"\n",(0,i.jsx)(n.p,{children:"This event is fired when the user presses the tab button for the current screen in the tab bar for an extended period."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabLongPress', (e) => {\n    // Do something\n  });\n\n  return unsubscribe;\n}, [navigation]);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"helpers",children:"Helpers"}),"\n",(0,i.jsx)(n.p,{children:"The tab navigator adds the following methods to the navigation object:"}),"\n",(0,i.jsx)(n.h4,{id:"jumpto",children:(0,i.jsx)(n.code,{children:"jumpTo"})}),"\n",(0,i.jsx)(n.p,{children:"Navigates to an existing screen in the tab navigator. The method accepts following arguments:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," - ",(0,i.jsx)(n.em,{children:"string"})," - Name of the route to jump to."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"params"})," - ",(0,i.jsx)(n.em,{children:"object"})," - Screen params to pass to the destination route."]}),"\n"]}),"\n",(0,i.jsx)("samp",{id:"material-top-tab-jump-to"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"navigation.jumpTo('Profile', { name: 'Micha\u015B' });\n"})}),"\n",(0,i.jsx)(n.h3,{id:"hooks",children:"Hooks"}),"\n",(0,i.jsx)(n.p,{children:"The material top tab navigator exports the following hooks:"}),"\n",(0,i.jsx)(n.h4,{id:"usetabanimation",children:(0,i.jsx)(n.code,{children:"useTabAnimation"})}),"\n",(0,i.jsx)(n.p,{children:"This hook returns an object containing an animated value that represents the current position of the tabs. This can be used to animate elements based on the swipe position of the tabs, such as the tab indicator:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { Animated } from 'react-native';\nimport { useTabAnimation } from '@react-navigation/material-top-tabs';\n\nfunction MyView() {\n  const { position } = useTabAnimation();\n\n  return (\n    <Animated.View\n      style={{\n        width: '50%',\n        height: 2,\n        backgroundColor: 'tomato',\n        transform: [{ translateX: position }],\n      }}\n    />\n  );\n}\n"})})]})}function b(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5525:function(e,n,t){t.d(n,{Z:()=>o});var a=t("85893");t("67294");var i=t("67026");let r="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:t,children:n})}},47902:function(e,n,t){t.d(n,{Z:()=>f});var a=t("85893"),i=t("67294"),r=t("67026"),o=t("69599"),s=t("16550"),l=t("32000"),c=t("4520"),d=t("38341"),h=t("76009");function u(e){var n,t;return null!==(t=null===(n=i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function b(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var p=t("7227");let v="tabList__CuJ",x="tabItem_LNqP";function j(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),h=e=>{let n=e.currentTarget,t=l[c.indexOf(n)].value;t!==i&&(d(n),s(t))},u=e=>{var n,t;let a=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;a=null!==(n=c[t])&&void 0!==n?n:c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;a=null!==(t=c[n])&&void 0!==t?t:c[c.length-1]}}null==a||a.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map(e=>{let{value:n,label:t,attributes:o}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:u,onClick:h,...o,className:(0,r.Z)("tabs__item",x,null==o?void 0:o.className,{"tabs__item--active":i===n}),children:null!=t?t:n},n)})})}function m(e){let{lazy:n,children:t,selectedValue:o}=e,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===o);return e?(0,i.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o}))})}function g(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:a}=e,r=function(e){let{values:n,children:t}=e;return(0,i.useMemo)(()=>{let e=null!=n?n:u(t).map(e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(n.map(e=>e.value).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[n,t])}(e),[o,p]=(0,i.useState)(()=>(function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(t,'" but none of its children has the corresponding value. Available values are: ').concat(a.map(e=>e.value).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return t}let i=null!==(n=a.find(e=>e.default))&&void 0!==n?n:a[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:r})),[v,x]=function(e){let{queryString:n=!1,groupId:t}=e,a=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t}),o=(0,c._X)(r);return[o,(0,i.useCallback)(e=>{if(!r)return;let n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})},[r,a])]}({queryString:t,groupId:a}),[j,m]=function(e){var n;let{groupId:t}=e;let a=(n=t)?"docusaurus.tab.".concat(n):null,[r,o]=(0,h.Nk)(a);return[r,(0,i.useCallback)(e=>{if(!!a)o.set(e)},[a,o])]}({groupId:a}),g=(()=>{let e=null!=v?v:j;return b({value:e,tabValues:r})?e:null})();return(0,l.Z)(()=>{g&&p(g)},[g]),{selectedValue:o,selectValue:(0,i.useCallback)(e=>{if(!b({value:e,tabValues:r}))throw Error("Can't select invalid tab value=".concat(e));p(e),x(e),m(e)},[x,m,r]),tabValues:r}}(e);return(0,a.jsxs)("div",{className:(0,r.Z)("tabs-container",v),children:[(0,a.jsx)(j,{...n,...e}),(0,a.jsx)(m,{...n,...e})]})}function f(e){let n=(0,p.Z)();return(0,a.jsx)(g,{...e,children:u(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var a=t(67294);let i={},r=a.createContext(i);function o(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);