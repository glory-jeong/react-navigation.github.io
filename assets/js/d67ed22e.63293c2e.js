"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["91705"],{82465:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>s,default:()=>l,assets:()=>c,toc:()=>d,frontMatter:()=>r});var a=JSON.parse('{"id":"typescript","title":"Type checking with TypeScript","description":"React Navigation is written with TypeScript and exports type definitions for TypeScript projects.","source":"@site/versioned_docs/version-6.x/typescript.md","sourceDirName":".","slug":"/typescript","permalink":"/docs/6.x/typescript","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/typescript.md","tags":[],"version":"6.x","frontMatter":{"id":"typescript","title":"Type checking with TypeScript","sidebar_label":"Type checking with TypeScript"},"sidebar":"docs","previous":{"title":"Testing with Jest","permalink":"/docs/6.x/testing"},"next":{"title":"Redux integration","permalink":"/docs/6.x/redux-integration"}}'),o=t("85893"),i=t("50065");let r={id:"typescript",title:"Type checking with TypeScript",sidebar_label:"Type checking with TypeScript"},s=void 0,c={},d=[{value:"Type checking the navigator",id:"type-checking-the-navigator",level:3},{value:"Type checking screens",id:"type-checking-screens",level:3},{value:"Nesting navigators",id:"nesting-navigators",level:3},{value:"Type checking screens and params in nested navigator",id:"type-checking-screens-and-params-in-nested-navigator",level:4},{value:"Combining navigation props",id:"combining-navigation-props",level:4},{value:"Annotating <code>useNavigation</code>",id:"annotating-usenavigation",level:3},{value:"Annotating <code>useRoute</code>",id:"annotating-useroute",level:3},{value:"Annotating <code>options</code> and <code>screenOptions</code>",id:"annotating-options-and-screenoptions",level:3},{value:"Annotating <code>ref</code> on <code>NavigationContainer</code>",id:"annotating-ref-on-navigationcontainer",level:3},{value:"Specifying default types for <code>useNavigation</code>, <code>Link</code>, <code>ref</code> etc",id:"specifying-default-types-for-usenavigation-link-ref-etc",level:3},{value:"Organizing types",id:"organizing-types",level:3}];function p(e){let n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"React Navigation is written with TypeScript and exports type definitions for TypeScript projects."}),"\n",(0,o.jsx)(n.h3,{id:"type-checking-the-navigator",children:"Type checking the navigator"}),"\n",(0,o.jsxs)(n.p,{children:["To type check our route name and params, the first thing we need to do is to create an object type with mappings for route name to the params of the route. For example, say we have a route called ",(0,o.jsx)(n.code,{children:"Profile"})," in our root navigator which should have a param ",(0,o.jsx)(n.code,{children:"userId"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"type RootStackParamList = {\n  Profile: { userId: string };\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"Similarly, we need to do the same for each route:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"type RootStackParamList = {\n  Home: undefined;\n  Profile: { userId: string };\n  Feed: { sort: 'latest' | 'top' } | undefined;\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Specifying ",(0,o.jsx)(n.code,{children:"undefined"})," means that the route doesn't have params. A union type with ",(0,o.jsx)(n.code,{children:"undefined"})," (e.g. ",(0,o.jsx)(n.code,{children:"SomeType | undefined"}),") means that params are optional."]}),"\n",(0,o.jsxs)(n.p,{children:["After we have defined the mappings, we need to tell our navigator to use it. To do that, we can pass it as a generic to the ",(0,o.jsx)(n.code,{children:"createXNavigator"})," functions:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { createStackNavigator } from '@react-navigation/stack';\n\nconst RootStack = createStackNavigator<RootStackParamList>();\n"})}),"\n",(0,o.jsx)(n.p,{children:"And then we can use it:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'<RootStack.Navigator initialRouteName="Home">\n  <RootStack.Screen name="Home" component={Home} />\n  <RootStack.Screen\n    name="Profile"\n    component={Profile}\n    initialParams={{ userId: user.id }}\n  />\n  <RootStack.Screen name="Feed" component={Feed} />\n</RootStack.Navigator>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This will provide type checking and intelliSense for props of the ",(0,o.jsx)(n.code,{children:"Navigator"})," and ",(0,o.jsx)(n.a,{href:"/docs/6.x/screen",children:(0,o.jsx)(n.code,{children:"Screen"})})," components."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The type containing the mappings must be a type alias (e.g. ",(0,o.jsx)(n.code,{children:"type RootStackParamList = { ... }"}),"). It cannot be an interface (e.g. ",(0,o.jsx)(n.code,{children:"interface RootStackParamList { ... }"}),"). It also shouldn't extend ",(0,o.jsx)(n.code,{children:"ParamListBase"})," (e.g. ",(0,o.jsx)(n.code,{children:"interface RootStackParamList extends ParamListBase { ... }"}),"). Doing so will result in incorrect type checking where it allows you to pass incorrect route names."]})}),"\n",(0,o.jsx)(n.h3,{id:"type-checking-screens",children:"Type checking screens"}),"\n",(0,o.jsxs)(n.p,{children:["To type check our screens, we need to annotate the ",(0,o.jsx)(n.code,{children:"navigation"})," prop and the ",(0,o.jsx)(n.code,{children:"route"})," prop received by a screen. The navigator packages in React Navigation export a generic types to define types for both the ",(0,o.jsx)(n.code,{children:"navigation"})," and ",(0,o.jsx)(n.code,{children:"route"})," props from the corresponding navigator."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, you can use ",(0,o.jsx)(n.code,{children:"NativeStackScreenProps"})," for the Native Stack Navigator."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import type { NativeStackScreenProps } from '@react-navigation/native-stack';\n\ntype RootStackParamList = {\n  Home: undefined;\n  Profile: { userId: string };\n  Feed: { sort: 'latest' | 'top' } | undefined;\n};\n\ntype Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;\n"})}),"\n",(0,o.jsx)(n.p,{children:"The type takes 3 generics:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The param list object we defined earlier"}),"\n",(0,o.jsx)(n.li,{children:"The name of the route the screen belongs to"}),"\n",(0,o.jsx)(n.li,{children:"The ID of the navigator (optional)"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["If you have an ",(0,o.jsx)(n.code,{children:"id"})," prop for your navigator, you can do:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"type Props = NativeStackScreenProps<RootStackParamList, 'Profile', 'MyStack'>;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This allows us to type check route names and params which you're navigating using ",(0,o.jsx)(n.code,{children:"navigate"}),", ",(0,o.jsx)(n.a,{href:"/docs/6.x/stack-actions#push",children:(0,o.jsx)(n.code,{children:"push"})})," etc. The name of the current route is necessary to type check the params in ",(0,o.jsx)(n.code,{children:"route.params"})," and when you call ",(0,o.jsx)(n.a,{href:"navigation-actions#setparams",children:(0,o.jsx)(n.code,{children:"setParams"})}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Similarly, you can import ",(0,o.jsx)(n.code,{children:"StackScreenProps"})," from ",(0,o.jsx)(n.a,{href:"/docs/6.x/stack-navigator",children:(0,o.jsx)(n.code,{children:"@react-navigation/stack"})}),", ",(0,o.jsx)(n.code,{children:"DrawerScreenProps"})," from ",(0,o.jsx)(n.a,{href:"/docs/6.x/drawer-navigator",children:(0,o.jsx)(n.code,{children:"@react-navigation/drawer"})}),", ",(0,o.jsx)(n.code,{children:"BottomTabScreenProps"})," from ",(0,o.jsx)(n.a,{href:"/docs/6.x/bottom-tab-navigator",children:(0,o.jsx)(n.code,{children:"@react-navigation/bottom-tabs"})})," and so on."]}),"\n",(0,o.jsxs)(n.p,{children:["Then you can use the ",(0,o.jsx)(n.code,{children:"Props"})," type you defined above to annotate your component."]}),"\n",(0,o.jsx)(n.p,{children:"For function components:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function ProfileScreen({ route, navigation }: Props) {\n  // ...\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"For class components:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"class ProfileScreen extends React.Component<Props> {\n  render() {\n    // ...\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can get the types for ",(0,o.jsx)(n.code,{children:"navigation"})," and ",(0,o.jsx)(n.code,{children:"route"})," from the ",(0,o.jsx)(n.code,{children:"Props"})," type as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"type ProfileScreenNavigationProp = Props['navigation'];\n\ntype ProfileScreenRouteProp = Props['route'];\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Alternatively, you can also annotate the ",(0,o.jsx)(n.code,{children:"navigation"})," and ",(0,o.jsx)(n.code,{children:"route"})," props separately."]}),"\n",(0,o.jsxs)(n.p,{children:["To get the type for the ",(0,o.jsx)(n.code,{children:"navigation"})," prop, we need to import the corresponding type from the navigator. For example, ",(0,o.jsx)(n.code,{children:"NativeStackNavigationProp"})," for ",(0,o.jsx)(n.code,{children:"@react-navigation/native-stack"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import type { NativeStackNavigationProp } from '@react-navigation/native-stack';\n\ntype ProfileScreenNavigationProp = NativeStackNavigationProp<\n  RootStackParamList,\n  'Profile'\n>;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Similarly, you can import ",(0,o.jsx)(n.code,{children:"StackNavigationProp"})," from ",(0,o.jsx)(n.a,{href:"/docs/6.x/stack-navigator",children:(0,o.jsx)(n.code,{children:"@react-navigation/stack"})}),", ",(0,o.jsx)(n.code,{children:"DrawerNavigationProp"})," from ",(0,o.jsx)(n.a,{href:"/docs/6.x/drawer-navigator",children:(0,o.jsx)(n.code,{children:"@react-navigation/drawer"})}),", ",(0,o.jsx)(n.code,{children:"BottomTabNavigationProp"})," from ",(0,o.jsx)(n.a,{href:"/docs/6.x/bottom-tab-navigator",children:(0,o.jsx)(n.code,{children:"@react-navigation/bottom-tabs"})})," etc."]}),"\n",(0,o.jsxs)(n.p,{children:["To get the type for the ",(0,o.jsx)(n.code,{children:"route"})," prop, we need to use the ",(0,o.jsx)(n.code,{children:"RouteProp"})," type from ",(0,o.jsx)(n.code,{children:"@react-navigation/native"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import type { RouteProp } from '@react-navigation/native';\n\ntype ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We recommend creating a separate ",(0,o.jsx)(n.code,{children:"types.tsx"})," file where you keep the types and import them in your component files instead of repeating them in each file."]}),"\n",(0,o.jsx)(n.h3,{id:"nesting-navigators",children:"Nesting navigators"}),"\n",(0,o.jsx)(n.h4,{id:"type-checking-screens-and-params-in-nested-navigator",children:"Type checking screens and params in nested navigator"}),"\n",(0,o.jsxs)(n.p,{children:["You can ",(0,o.jsx)(n.a,{href:"/docs/6.x/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator",children:"navigate to a screen in a nested navigator"})," by passing ",(0,o.jsx)(n.code,{children:"screen"})," and ",(0,o.jsx)(n.code,{children:"params"})," properties for the nested screen:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"navigation.navigate('Home', {\n  screen: 'Feed',\n  params: { sort: 'latest' },\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To be able to type check this, we need to extract the params from the screen containing the nested navigator. This can be done using the ",(0,o.jsx)(n.code,{children:"NavigatorScreenParams"})," utility:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { NavigatorScreenParams } from '@react-navigation/native';\n\ntype TabParamList = {\n  Home: NavigatorScreenParams<StackParamList>;\n  Profile: { userId: string };\n};\n"})}),"\n",(0,o.jsx)(n.h4,{id:"combining-navigation-props",children:"Combining navigation props"}),"\n",(0,o.jsxs)(n.p,{children:["When you nest navigators, the navigation prop of the screen is a combination of multiple navigation props. For example, if we have a tab inside a stack, the ",(0,o.jsx)(n.code,{children:"navigation"})," prop will have both ",(0,o.jsx)(n.code,{children:"jumpTo"})," (from the tab navigator) and ",(0,o.jsx)(n.code,{children:"push"})," (from the stack navigator). To make it easier to combine types from multiple navigators, you can use the ",(0,o.jsx)(n.code,{children:"CompositeScreenProps"})," type:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CompositeScreenProps } from '@react-navigation/native';\nimport type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';\nimport type { StackScreenProps } from '@react-navigation/stack';\n\ntype ProfileScreenProps = CompositeScreenProps<\n  BottomTabScreenProps<TabParamList, 'Profile'>,\n  StackScreenProps<StackParamList>\n>;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"CompositeScreenProps"})," type takes 2 parameters, first parameter is the type of props for the primary navigation (type for the navigator that owns this screen, in our case the tab navigator which contains the ",(0,o.jsx)(n.code,{children:"Profile"})," screen) and second parameter is the type of props for secondary navigation (type for a parent navigator). The primary type should always have the screen's route name as its second parameter."]}),"\n",(0,o.jsx)(n.p,{children:"For multiple parent navigators, this secondary type should be nested:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"type ProfileScreenProps = CompositeScreenProps<\n  BottomTabScreenProps<TabParamList, 'Profile'>,\n  CompositeScreenProps<\n    StackScreenProps<StackParamList>,\n    DrawerScreenProps<DrawerParamList>\n  >\n>;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If annotating the ",(0,o.jsx)(n.code,{children:"navigation"})," prop separately, you can use ",(0,o.jsx)(n.code,{children:"CompositeNavigationProp"})," instead. The usage is similar to ",(0,o.jsx)(n.code,{children:"CompositeScreenProps"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CompositeNavigationProp } from '@react-navigation/native';\nimport type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';\nimport type { StackNavigationProp } from '@react-navigation/stack';\n\ntype ProfileScreenNavigationProp = CompositeNavigationProp<\n  BottomTabNavigationProp<TabParamList, 'Profile'>,\n  StackNavigationProp<StackParamList>\n>;\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"annotating-usenavigation",children:["Annotating ",(0,o.jsx)(n.code,{children:"useNavigation"})]}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsxs)(n.p,{children:["Annotating ",(0,o.jsx)(n.code,{children:"useNavigation"})," isn't type-safe because the type parameter cannot be statically verified.\nPrefer ",(0,o.jsx)(n.a,{href:"#specifying-default-types-for-usenavigation-link-ref-etc",children:"specifying a default type"})," instead."]})}),"\n",(0,o.jsxs)(n.p,{children:["To annotate the ",(0,o.jsx)(n.code,{children:"navigation"})," prop that we get from ",(0,o.jsx)(n.code,{children:"useNavigation"}),", we can use a type parameter:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const navigation = useNavigation<ProfileScreenNavigationProp>();\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"annotating-useroute",children:["Annotating ",(0,o.jsx)(n.code,{children:"useRoute"})]}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsxs)(n.p,{children:["Annotating ",(0,o.jsx)(n.code,{children:"useRoute"})," isn't type-safe because the type parameter cannot be statically verified.\nPrefer using the ",(0,o.jsxs)(n.a,{href:"/docs/6.x/route-prop",children:[(0,o.jsx)(n.code,{children:"route"})," prop"]})," instead when possible. Use ",(0,o.jsx)(n.code,{children:"useRoute"})," for generic code that doesn't need specific route type."]})}),"\n",(0,o.jsxs)(n.p,{children:["To annotate the ",(0,o.jsx)(n.code,{children:"route"})," prop that we get from ",(0,o.jsx)(n.code,{children:"useRoute"}),", we can use a type parameter:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const route = useRoute<ProfileScreenRouteProp>();\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"annotating-options-and-screenoptions",children:["Annotating ",(0,o.jsx)(n.code,{children:"options"})," and ",(0,o.jsx)(n.code,{children:"screenOptions"})]}),"\n",(0,o.jsxs)(n.p,{children:["When you pass the ",(0,o.jsx)(n.code,{children:"options"})," to a ",(0,o.jsx)(n.code,{children:"Screen"})," or ",(0,o.jsx)(n.code,{children:"screenOptions"})," prop to a ",(0,o.jsx)(n.code,{children:"Navigator"})," component, they are already type-checked and you don't need to do anything special. However, sometimes you might want to extract the options to a separate object, and you might want to annotate it."]}),"\n",(0,o.jsxs)(n.p,{children:["To annotate the options, we need to import the corresponding type from the navigator. For example, ",(0,o.jsx)(n.code,{children:"StackNavigationOptions"})," for ",(0,o.jsx)(n.code,{children:"@react-navigation/stack"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { StackNavigationOptions } from '@react-navigation/stack';\n\nconst options: StackNavigationOptions = {\n  headerShown: false,\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Similarly, you can import ",(0,o.jsx)(n.code,{children:"DrawerNavigationOptions"})," from ",(0,o.jsx)(n.code,{children:"@react-navigation/drawer"}),", ",(0,o.jsx)(n.code,{children:"BottomTabNavigationOptions"})," from ",(0,o.jsx)(n.code,{children:"@react-navigation/bottom-tabs"})," etc."]}),"\n",(0,o.jsxs)(n.p,{children:["When using the function form of ",(0,o.jsx)(n.code,{children:"options"})," and ",(0,o.jsx)(n.code,{children:"screenOptions"}),", you can annotate the arguments with the same type you used to annotate the ",(0,o.jsx)(n.code,{children:"navigation"})," and ",(0,o.jsx)(n.code,{children:"route"})," props."]}),"\n",(0,o.jsxs)(n.h3,{id:"annotating-ref-on-navigationcontainer",children:["Annotating ",(0,o.jsx)(n.code,{children:"ref"})," on ",(0,o.jsx)(n.code,{children:"NavigationContainer"})]}),"\n",(0,o.jsxs)(n.p,{children:["If you use the ",(0,o.jsx)(n.code,{children:"createNavigationContainerRef()"})," method to create the ref, you can annotate it to type-check navigation actions:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { createNavigationContainerRef } from '@react-navigation/native';\n\n// ...\n\nconst navigationRef = createNavigationContainerRef<RootStackParamList>();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Similarly, for ",(0,o.jsx)(n.code,{children:"useNavigationContainerRef()"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { useNavigationContainerRef } from '@react-navigation/native';\n\n// ...\n\nconst navigationRef = useNavigationContainerRef<RootStackParamList>();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you're using a regular ",(0,o.jsx)(n.code,{children:"ref"})," object, you can pass a generic to the ",(0,o.jsx)(n.code,{children:"NavigationContainerRef"})," type.."]}),"\n",(0,o.jsxs)(n.p,{children:["Example when using ",(0,o.jsx)(n.code,{children:"React.useRef"})," hook:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { NavigationContainerRef } from '@react-navigation/native';\n\n// ...\n\nconst navigationRef =\n  React.useRef<NavigationContainerRef<RootStackParamList>>(null);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Example when using ",(0,o.jsx)(n.code,{children:"React.createRef"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { NavigationContainerRef } from '@react-navigation/native';\n\n// ...\n\nconst navigationRef =\n  React.createRef<NavigationContainerRef<RootStackParamList>>();\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"specifying-default-types-for-usenavigation-link-ref-etc",children:["Specifying default types for ",(0,o.jsx)(n.code,{children:"useNavigation"}),", ",(0,o.jsx)(n.code,{children:"Link"}),", ",(0,o.jsx)(n.code,{children:"ref"})," etc"]}),"\n",(0,o.jsx)(n.p,{children:"Instead of manually annotating these APIs, you can specify a global type for your root navigator which will be used as the default type."}),"\n",(0,o.jsx)(n.p,{children:"To do this, you can add this snippet somewhere in your codebase:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"declare global {\n  namespace ReactNavigation {\n    interface RootParamList extends RootStackParamList {}\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"RootParamList"})," interface lets React Navigation know about the params accepted by your root navigator. Here we extend the type ",(0,o.jsx)(n.code,{children:"RootStackParamList"})," because that's the type of params for our stack navigator at the root. The name of this type isn't important."]}),"\n",(0,o.jsxs)(n.p,{children:["Specifying this type is important if you heavily use ",(0,o.jsx)(n.code,{children:"useNavigation"}),", ",(0,o.jsx)(n.a,{href:"/docs/6.x/link",children:(0,o.jsx)(n.code,{children:"Link"})})," etc. in your app since it'll ensure type-safety. It will also make sure that you have correct nesting on the ",(0,o.jsx)(n.a,{href:"/docs/6.x/navigation-container#linking",children:(0,o.jsx)(n.code,{children:"linking"})})," prop."]}),"\n",(0,o.jsx)(n.h3,{id:"organizing-types",children:"Organizing types"}),"\n",(0,o.jsx)(n.p,{children:"When writing types for React Navigation, there are a couple of things we recommend to keep things organized."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["It's good to create a separate files (e.g. ",(0,o.jsx)(n.code,{children:"navigation/types.tsx"}),") which contains the types related to React Navigation."]}),"\n",(0,o.jsxs)(n.li,{children:["Instead of using ",(0,o.jsx)(n.code,{children:"CompositeNavigationProp"})," directly in your components, it's better to create a helper type that you can reuse."]}),"\n",(0,o.jsx)(n.li,{children:"Specifying a global type for your root navigator would avoid manual annotations in many places."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Considering these recommendations, the file containing the types may look something like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type {\n  CompositeScreenProps,\n  NavigatorScreenParams,\n} from '@react-navigation/native';\nimport type { StackScreenProps } from '@react-navigation/stack';\nimport type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';\n\nexport type RootStackParamList = {\n  Home: NavigatorScreenParams<HomeTabParamList>;\n  PostDetails: { id: string };\n  NotFound: undefined;\n};\n\nexport type RootStackScreenProps<T extends keyof RootStackParamList> =\n  StackScreenProps<RootStackParamList, T>;\n\nexport type HomeTabParamList = {\n  Popular: undefined;\n  Latest: undefined;\n};\n\nexport type HomeTabScreenProps<T extends keyof HomeTabParamList> =\n  CompositeScreenProps<\n    BottomTabScreenProps<HomeTabParamList, T>,\n    RootStackScreenProps<keyof RootStackParamList>\n  >;\n\ndeclare global {\n  namespace ReactNavigation {\n    interface RootParamList extends RootStackParamList {}\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now, when annotating your components, you can write:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { HomeTabScreenProps } from './navigation/types';\n\nfunction PopularScreen({ navigation, route }: HomeTabScreenProps<'Popular'>) {\n  // ...\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you're using hooks such as ",(0,o.jsx)(n.code,{children:"useRoute"}),", you can write:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { HomeTabScreenProps } from './navigation/types';\n\nfunction PopularScreen() {\n  const route = useRoute<HomeTabScreenProps<'Popular'>['route']>();\n\n  // ...\n}\n"})})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var a=t(67294);let o={},i=a.createContext(o);function r(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);