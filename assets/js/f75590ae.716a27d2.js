"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["91215"],{15515:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>s,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"stack-navigator","title":"createStackNavigator","description":"Provides a way for your app to transition between screens where each new screen is placed on top of a stack.","source":"@site/versioned_docs/version-3.x/stack-navigator.md","sourceDirName":".","slug":"/stack-navigator","permalink":"/docs/3.x/stack-navigator","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/stack-navigator.md","tags":[],"version":"3.x","frontMatter":{"id":"stack-navigator","title":"createStackNavigator","sidebar_label":"createStackNavigator"},"sidebar":"version-3.x-docs","previous":{"title":"NavigationEvents","permalink":"/docs/3.x/navigation-events"},"next":{"title":"createSwitchNavigator","permalink":"/docs/3.x/switch-navigator"}}'),a=i("85893"),r=i("50065");let o={id:"stack-navigator",title:"createStackNavigator",sidebar_label:"createStackNavigator"},s=void 0,d={},c=[{value:"API Definition",id:"api-definition",level:2},{value:"RouteConfigs",id:"routeconfigs",level:3},{value:"StackNavigatorConfig",id:"stacknavigatorconfig",level:3},{value:"<code>navigationOptions</code> for screens inside of the navigator",id:"navigationoptions-for-screens-inside-of-the-navigator",level:3},{value:"<code>title</code>",id:"title",level:4},{value:"<code>header</code>",id:"header",level:4},{value:"<code>headerTitle</code>",id:"headertitle",level:4},{value:"<code>headerTitleAllowFontScaling</code>",id:"headertitleallowfontscaling",level:4},{value:"<code>headerBackAllowFontScaling</code>",id:"headerbackallowfontscaling",level:4},{value:"<code>headerBackImage</code>",id:"headerbackimage",level:4},{value:"<code>headerBackTitle</code>",id:"headerbacktitle",level:4},{value:"<code>headerTruncatedBackTitle</code>",id:"headertruncatedbacktitle",level:4},{value:"<code>headerRight</code>",id:"headerright",level:4},{value:"<code>headerLeft</code>",id:"headerleft",level:4},{value:"<code>headerStyle</code>",id:"headerstyle",level:4},{value:"<code>headerForceInset</code>",id:"headerforceinset",level:4},{value:"<code>headerTitleStyle</code>",id:"headertitlestyle",level:4},{value:"<code>headerBackTitleStyle</code>",id:"headerbacktitlestyle",level:4},{value:"<code>headerLeftContainerStyle</code>",id:"headerleftcontainerstyle",level:4},{value:"<code>headerRightContainerStyle</code>",id:"headerrightcontainerstyle",level:4},{value:"<code>headerTitleContainerStyle</code>",id:"headertitlecontainerstyle",level:4},{value:"<code>headerTintColor</code>",id:"headertintcolor",level:4},{value:"<code>headerPressColorAndroid</code>",id:"headerpresscolorandroid",level:4},{value:"<code>headerTransparent</code>",id:"headertransparent",level:4},{value:"<code>headerBackground</code>",id:"headerbackground",level:4},{value:"<code>headerBackgroundTransitionPreset</code>",id:"headerbackgroundtransitionpreset",level:4},{value:"<code>gesturesEnabled</code>",id:"gesturesenabled",level:4},{value:"<code>gestureResponseDistance</code>",id:"gestureresponsedistance",level:4},{value:"<code>gestureDirection</code>",id:"gesturedirection",level:4},{value:"<code>params</code>",id:"params",level:4},{value:"Navigator Props",id:"navigator-props",level:3},{value:"Examples",id:"examples",level:3},{value:"Modal StackNavigator with Custom Screen Transitions",id:"modal-stacknavigator-with-custom-screen-transitions",level:4},{value:"Specifying the transition mode for a stack&#39;s screens explicitly",id:"specifying-the-transition-mode-for-a-stacks-screens-explicitly",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Provides a way for your app to transition between screens where each new screen is placed on top of a stack."}),"\n",(0,a.jsx)(n.p,{children:"By default the stack navigator is configured to have the familiar iOS and Android look & feel: new screens slide in from the right on iOS, fade in from the bottom on Android. On iOS the stack navigator can also be configured to a modal style where screens slide in from the bottom."}),"\n",(0,a.jsx)(n.h2,{id:"api-definition",children:"API Definition"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"createStackNavigator(RouteConfigs, StackNavigatorConfig);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"routeconfigs",children:"RouteConfigs"}),"\n",(0,a.jsx)(n.p,{children:"The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"createStackNavigator({\n  // For each screen that you can navigate to, create a new entry like this:\n  Profile: {\n    // `ProfileScreen` is a React component that will be the main content of the screen.\n    screen: ProfileScreen,\n    // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.\n\n    // Optional: When deep linking or using react-navigation in a web app, this path is used:\n    path: 'people/:name',\n    // The action and route params are extracted from the path.\n\n    // Optional: Override the `navigationOptions` for the screen\n    navigationOptions: ({ navigation }) => ({\n      title: `${navigation.state.params.name}'s Profile'`,\n    }),\n  },\n\n  ...MyOtherRoutes,\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"stacknavigatorconfig",children:"StackNavigatorConfig"}),"\n",(0,a.jsx)(n.p,{children:"Options for the router:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"initialRouteName"})," - Sets the default screen of the stack. Must match one of the keys in route configs."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"initialRouteParams"})," - The params for the initial route"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"initialRouteKey"})," - Optional identifier of the initial route"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"navigationOptions"})," - Navigation options for the navigator itself, to configure a parent navigator"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"defaultNavigationOptions"})," - Default navigation options to use for screens"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"paths"})," - A mapping of overrides for the paths set in the route configs"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"disableKeyboardHandling"})," - If true, the keyboard will NOT automatically dismiss when navigating to a new screen. Defaults to false. This is ignored in the web platform."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Visual options:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"mode"})," - Defines the style for rendering and transitions:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"card"})," - Use the standard iOS and Android screen transitions. This is the default."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"modal"})," - Make the screens slide in from the bottom which is a common iOS pattern. Only works on iOS, has no effect on Android."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"headerMode"})," - Specifies how the header should be rendered:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"float"})," - Render a single header that stays at the top and animates as screens are changed. This is a common pattern on iOS."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"screen"})," - Each screen has a header attached to it and the header fades in and out together with the screen. This is a common pattern on Android."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"none"})," - No header will be rendered."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"headerBackTitleVisible"})," - A reasonable default is supplied for whether the back button title should be visible or not, but if you want to override that you can use ",(0,a.jsx)(n.code,{children:"true"})," or ",(0,a.jsx)(n.code,{children:"false"})," in this option."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"headerTransitionPreset"})," - Specifies how the header should transition from one screen to another when ",(0,a.jsx)(n.code,{children:"headerMode: float"})," is enabled.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"fade-in-place"})," - Header components cross-fade without moving, similar to the Twitter, Instagram, and Facebook app for iOS. This is the default value."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"uikit"})," - An approximation of the default behavior for iOS."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"headerLayoutPreset"})," - Specifies how to lay out the header components.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"left"})," - Anchor the title to the left, near the back button or other left component. This is the default on Android. When used on iOS, the header back title is hidden. Content from the left component will overflow underneath the title, if you need to adjust this you can use ",(0,a.jsx)(n.code,{children:"headerLeftContainerStyle"})," and ",(0,a.jsx)(n.code,{children:"headerTitleContainerStyle"}),". Additionally, this alignment is incompatible with ",(0,a.jsx)(n.code,{children:"headerTransitionPreset: 'uikit'"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"center"})," - Center the title, this is the default on iOS."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"cardStyle"})," - Use this prop to override or extend the default style for an individual card in stack."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"cardShadowEnabled"})," - Use this prop to have visible shadows during transitions. Defaults to ",(0,a.jsx)(n.code,{children:"true"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"cardOverlayEnabled"})," - Use this prop to have visible stack card overlays during transitions. Defaults to ",(0,a.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"transitionConfig"})," - Function to return an object that is merged with the default screen transitions (take a look at TransitionConfig in ",(0,a.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation/blob/3.x/flow/react-navigation.js",children:"type definitions"}),"). Provided function will be passed the following arguments:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"transitionProps"})," - Transition props for the new screen."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"prevTransitionProps"})," - Transitions props for the old screen."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"isModal"})," - Boolean specifying if screen is modal."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"onTransitionStart"})," - Function to be invoked when the card transition animation is about to start."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"onTransitionEnd"})," - Function to be invoked once the card transition animation completes."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"transparentCard"})," - ",(0,a.jsx)(n.em,{children:"Experimental"})," - Prop to keep all cards in the stack visible and add a transparent background instead of a white one. This is useful to implement things like modal dialogs where the previous scene should still be visible underneath the current one."]}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"navigationoptions-for-screens-inside-of-the-navigator",children:[(0,a.jsx)(n.code,{children:"navigationOptions"})," for screens inside of the navigator"]}),"\n",(0,a.jsx)(n.h4,{id:"title",children:(0,a.jsx)(n.code,{children:"title"})}),"\n",(0,a.jsxs)(n.p,{children:["String that can be used as a fallback for ",(0,a.jsx)(n.code,{children:"headerTitle"}),". Additionally, will be used as a fallback for ",(0,a.jsx)(n.code,{children:"tabBarLabel"})," (if nested in a TabNavigator) or ",(0,a.jsx)(n.code,{children:"drawerLabel"})," (if nested in a DrawerNavigator)."]}),"\n",(0,a.jsx)(n.h4,{id:"header",children:(0,a.jsx)(n.code,{children:"header"})}),"\n",(0,a.jsxs)(n.p,{children:["React Element or a function that given ",(0,a.jsx)(n.code,{children:"HeaderProps"})," returns a React Element, to display as a header. Setting to ",(0,a.jsx)(n.code,{children:"null"})," hides header."]}),"\n",(0,a.jsx)(n.h4,{id:"headertitle",children:(0,a.jsx)(n.code,{children:"headerTitle"})}),"\n",(0,a.jsxs)(n.p,{children:["String, React Element or React Component used by the header. Defaults to scene ",(0,a.jsx)(n.code,{children:"title"}),". When a component is used, it receives ",(0,a.jsx)(n.code,{children:"allowFontScaling"}),", ",(0,a.jsx)(n.code,{children:"style"})," and ",(0,a.jsx)(n.code,{children:"children"})," props. The title string is passed in ",(0,a.jsx)(n.code,{children:"children"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"headertitleallowfontscaling",children:(0,a.jsx)(n.code,{children:"headerTitleAllowFontScaling"})}),"\n",(0,a.jsx)(n.p,{children:"Whether header title font should scale to respect Text Size accessibility settings. Defaults to true."}),"\n",(0,a.jsx)(n.h4,{id:"headerbackallowfontscaling",children:(0,a.jsx)(n.code,{children:"headerBackAllowFontScaling"})}),"\n",(0,a.jsx)(n.p,{children:"Whether back button title font should scale to respect Text Size accessibility settings. Defaults to false."}),"\n",(0,a.jsx)(n.h4,{id:"headerbackimage",children:(0,a.jsx)(n.code,{children:"headerBackImage"})}),"\n",(0,a.jsxs)(n.p,{children:["React Element or Component to display custom image in header's back button. When a component is used, it receives a number of props when rendered (",(0,a.jsx)(n.code,{children:"tintColor"}),", ",(0,a.jsx)(n.code,{children:"title"}),"). Defaults to Image component with ",(0,a.jsx)(n.code,{children:"react-navigation/views/assets/back-icon.png"})," back image source, which is the default back icon image for the platform (a chevron on iOS and an arrow on Android)."]}),"\n",(0,a.jsx)(n.h4,{id:"headerbacktitle",children:(0,a.jsx)(n.code,{children:"headerBackTitle"})}),"\n",(0,a.jsxs)(n.p,{children:["Title string used by the back button on iOS, or ",(0,a.jsx)(n.code,{children:"null"})," to disable label. Defaults to the previous scene's ",(0,a.jsx)(n.code,{children:"headerTitle"}),". ",(0,a.jsx)(n.code,{children:"headerBackTitle"})," has to be defined in the origin screen, not in the destination screen. For instance, when you have a transition A to B and you want to disable the ",(0,a.jsx)(n.code,{children:"headerBackTitle"})," on ",(0,a.jsx)(n.code,{children:"B"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"StackNavigator({\n  A: {\n    screen: AScreen,\n    navigationOptions: () => ({\n      title: `A`,\n      headerBackTitle: null,\n    }),\n  },\n  B: {\n    screen: BScreen,\n    navigationOptions: () => ({\n      title: `B`,\n    }),\n  },\n});\n"})}),"\n",(0,a.jsx)(n.h4,{id:"headertruncatedbacktitle",children:(0,a.jsx)(n.code,{children:"headerTruncatedBackTitle"})}),"\n",(0,a.jsxs)(n.p,{children:["Title string used by the back button when ",(0,a.jsx)(n.code,{children:"headerBackTitle"})," doesn't fit on the screen. ",(0,a.jsx)(n.code,{children:'"Back"'})," by default. ",(0,a.jsx)(n.code,{children:"headerTruncatedBackTitle"})," has to be defined in the origin screen, not in the destination screen. For instance, when you have a transition A to B and you want to truncate the label on ",(0,a.jsx)(n.code,{children:"B"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"StackNavigator({\n  A: {\n    screen: AScreen,\n    navigationOptions: () => ({\n      title: `A`,\n      headerBackTitle: 'A much too long text for back button from B to A',\n      headerTruncatedBackTitle: `to A`,\n    }),\n  },\n  B: {\n    screen: BScreen,\n    navigationOptions: () => ({\n      title: `B`,\n    }),\n  },\n});\n"})}),"\n",(0,a.jsx)(n.h4,{id:"headerright",children:(0,a.jsx)(n.code,{children:"headerRight"})}),"\n",(0,a.jsx)(n.p,{children:"React Element to display on the right side of the header."}),"\n",(0,a.jsx)(n.h4,{id:"headerleft",children:(0,a.jsx)(n.code,{children:"headerLeft"})}),"\n",(0,a.jsxs)(n.p,{children:["React Element or Component to display on the left side of the header. When a component is used, it receives a number of props when rendered (",(0,a.jsx)(n.code,{children:"onPress"}),", ",(0,a.jsx)(n.code,{children:"title"}),", ",(0,a.jsx)(n.code,{children:"titleStyle"})," and more - check ",(0,a.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation-stack/blob/master/src/views/Header/Header.tsx",children:"Header.tsx"})," for the complete list)."]}),"\n",(0,a.jsx)(n.h4,{id:"headerstyle",children:(0,a.jsx)(n.code,{children:"headerStyle"})}),"\n",(0,a.jsx)(n.p,{children:"Style object for the header"}),"\n",(0,a.jsx)(n.h4,{id:"headerforceinset",children:(0,a.jsx)(n.code,{children:"headerForceInset"})}),"\n",(0,a.jsxs)(n.p,{children:["Allows to pass ",(0,a.jsx)(n.code,{children:"forceInset"})," object to internal SafeAreaView used in the header."]}),"\n",(0,a.jsx)(n.h4,{id:"headertitlestyle",children:(0,a.jsx)(n.code,{children:"headerTitleStyle"})}),"\n",(0,a.jsx)(n.p,{children:"Style object for the title component"}),"\n",(0,a.jsx)(n.h4,{id:"headerbacktitlestyle",children:(0,a.jsx)(n.code,{children:"headerBackTitleStyle"})}),"\n",(0,a.jsx)(n.p,{children:"Style object for the back title"}),"\n",(0,a.jsx)(n.h4,{id:"headerleftcontainerstyle",children:(0,a.jsx)(n.code,{children:"headerLeftContainerStyle"})}),"\n",(0,a.jsxs)(n.p,{children:["Customize the style for the container of the ",(0,a.jsx)(n.code,{children:"headerLeft"})," component, for example to add padding."]}),"\n",(0,a.jsx)(n.h4,{id:"headerrightcontainerstyle",children:(0,a.jsx)(n.code,{children:"headerRightContainerStyle"})}),"\n",(0,a.jsxs)(n.p,{children:["Customize the style for the container of the ",(0,a.jsx)(n.code,{children:"headerRight"})," component, for example to add padding."]}),"\n",(0,a.jsx)(n.h4,{id:"headertitlecontainerstyle",children:(0,a.jsx)(n.code,{children:"headerTitleContainerStyle"})}),"\n",(0,a.jsxs)(n.p,{children:["Customize the style for the container of the ",(0,a.jsx)(n.code,{children:"headerTitle"})," component, for example to add padding."]}),"\n",(0,a.jsxs)(n.p,{children:["By default, ",(0,a.jsx)(n.code,{children:"headerTitleContainerStyle"})," is with an absolute position style and offsets both ",(0,a.jsx)(n.code,{children:"left"})," and ",(0,a.jsx)(n.code,{children:"right"}),". This may lead to white space or overlap between ",(0,a.jsx)(n.code,{children:"headerLeft"})," and ",(0,a.jsx)(n.code,{children:"headerTitle"})," if a customized ",(0,a.jsx)(n.code,{children:"headerLeft"})," is used. It can be solved by adjusting ",(0,a.jsx)(n.code,{children:"left"})," and ",(0,a.jsx)(n.code,{children:"right"})," style in ",(0,a.jsx)(n.code,{children:"headerTitleContainerStyle"})," and ",(0,a.jsx)(n.code,{children:"marginHorizontal"})," in ",(0,a.jsx)(n.code,{children:"headerTitleStyle"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"headertintcolor",children:(0,a.jsx)(n.code,{children:"headerTintColor"})}),"\n",(0,a.jsx)(n.p,{children:"Tint color for the header"}),"\n",(0,a.jsx)(n.h4,{id:"headerpresscolorandroid",children:(0,a.jsx)(n.code,{children:"headerPressColorAndroid"})}),"\n",(0,a.jsx)(n.p,{children:"Color for material ripple (Android >= 5.0 only)"}),"\n",(0,a.jsx)(n.h4,{id:"headertransparent",children:(0,a.jsx)(n.code,{children:"headerTransparent"})}),"\n",(0,a.jsxs)(n.p,{children:["Defaults to ",(0,a.jsx)(n.code,{children:"false"}),". If ",(0,a.jsx)(n.code,{children:"true"}),", the header will not have a background unless you explicitly provide it with ",(0,a.jsx)(n.code,{children:"headerStyle"})," or ",(0,a.jsx)(n.code,{children:"headerBackground"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"headerbackground",children:(0,a.jsx)(n.code,{children:"headerBackground"})}),"\n",(0,a.jsxs)(n.p,{children:["Use this with ",(0,a.jsx)(n.code,{children:"headerTransparent"})," to provide a component to render in the background of the header. You can use this with a blur view, for example, to create a translucent header."]}),"\n",(0,a.jsx)(n.h4,{id:"headerbackgroundtransitionpreset",children:(0,a.jsx)(n.code,{children:"headerBackgroundTransitionPreset"})}),"\n",(0,a.jsxs)(n.p,{children:["One of ",(0,a.jsx)(n.code,{children:"toggle"})," | ",(0,a.jsx)(n.code,{children:"fade"})," | ",(0,a.jsx)(n.code,{children:"translate"}),"; lets you choose how to transition your custom ",(0,a.jsx)(n.code,{children:"headerBackground"})," components between screens."]}),"\n",(0,a.jsx)(n.h4,{id:"gesturesenabled",children:(0,a.jsx)(n.code,{children:"gesturesEnabled"})}),"\n",(0,a.jsx)(n.p,{children:"Whether you can use gestures to dismiss this screen. Defaults to true on iOS, false on Android."}),"\n",(0,a.jsx)(n.h4,{id:"gestureresponsedistance",children:(0,a.jsx)(n.code,{children:"gestureResponseDistance"})}),"\n",(0,a.jsx)(n.p,{children:"Object to override the distance of touch start from the edge of the screen to recognize gestures. It takes the following properties:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"horizontal"})," - ",(0,a.jsx)(n.em,{children:"number"})," - Distance for horizontal direction. Defaults to 25."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"vertical"})," - ",(0,a.jsx)(n.em,{children:"number"})," - Distance for vertical direction. Defaults to 135."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"gesturedirection",children:(0,a.jsx)(n.code,{children:"gestureDirection"})}),"\n",(0,a.jsxs)(n.p,{children:["String to override the direction for dismiss gesture. ",(0,a.jsx)(n.code,{children:"default"})," for normal behaviour or ",(0,a.jsx)(n.code,{children:"inverted"})," for right-to-left swipes."]}),"\n",(0,a.jsx)(n.h4,{id:"params",children:(0,a.jsx)(n.code,{children:"params"})}),"\n",(0,a.jsx)(n.p,{children:"You can provide default params inside route definitions:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const Store = createStackNavigator({\n  Playstation: { screen: ProductScreen, params: { product: 'Playstation' } },\n  Xbox: { screen: ProductScreen, params: { product: 'Xbox' } },\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"navigator-props",children:"Navigator Props"}),"\n",(0,a.jsxs)(n.p,{children:["The navigator component created by ",(0,a.jsx)(n.code,{children:"createStackNavigator(...)"})," takes the following props:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"screenProps"})," - Pass down extra options to child screens, for example:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const SomeStack = createStackNavigator({\n  // config\n});\n\n<SomeStack\n  screenProps={/* this prop will get passed to the screen components as this.props.screenProps */}\n/>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.p,{children:["See the examples ",(0,a.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation/blob/3.x/examples/NavigationPlayground/src/SimpleStack.tsx",children:"SimpleStack.tsx"})," and ",(0,a.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation/blob/3.x/examples/NavigationPlayground/src/ModalStack.tsx",children:"ModalStack.tsx"})," which you can run locally as part of the ",(0,a.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation/tree/3.x/examples/NavigationPlayground",children:"NavigationPlayground"})," app."]}),"\n",(0,a.jsxs)(n.p,{children:["You can view these examples directly on your phone by visiting ",(0,a.jsx)(n.a,{href:"https://exp.host/@react-navigation/NavigationPlayground",children:"our expo demo"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"modal-stacknavigator-with-custom-screen-transitions",children:"Modal StackNavigator with Custom Screen Transitions"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const ModalNavigator = createStackNavigator(\n  {\n    Main: { screen: Main },\n    Login: { screen: Login },\n  },\n  {\n    headerMode: 'none',\n    mode: 'modal',\n    defaultNavigationOptions: {\n      gesturesEnabled: false,\n    },\n    transitionConfig: () => ({\n      transitionSpec: {\n        duration: 300,\n        easing: Easing.out(Easing.poly(4)),\n        timing: Animated.timing,\n      },\n      screenInterpolator: (sceneProps) => {\n        const { layout, position, scene } = sceneProps;\n        const { index } = scene;\n\n        const height = layout.initHeight;\n        const translateY = position.interpolate({\n          inputRange: [index - 1, index, index + 1],\n          outputRange: [height, 0, 0],\n        });\n\n        const opacity = position.interpolate({\n          inputRange: [index - 1, index - 0.99, index],\n          outputRange: [0, 1, 1],\n        });\n\n        return { opacity, transform: [{ translateY }] };\n      },\n    }),\n  }\n);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Header transitions can also be configured using ",(0,a.jsx)(n.code,{children:"headerLeftInterpolator"}),", ",(0,a.jsx)(n.code,{children:"headerTitleInterpolator"})," and ",(0,a.jsx)(n.code,{children:"headerRightInterpolator"})," fields under ",(0,a.jsx)(n.code,{children:"transitionConfig"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"specifying-the-transition-mode-for-a-stacks-screens-explicitly",children:"Specifying the transition mode for a stack's screens explicitly"}),"\n",(0,a.jsxs)(n.p,{children:["We can't set the ",(0,a.jsx)(n.code,{children:"StackNavigatorConfig"}),"'s ",(0,a.jsx)(n.code,{children:"mode"})," dynamically. Instead we are going to use a custom ",(0,a.jsx)(n.code,{children:"transitionConfig"})," to render the specific transition we want - modal or card - on a screen by screen basis."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import {\n  createStackNavigator,\n  StackViewTransitionConfigs,\n} from 'react-navigation';\n\n/* The screens you add to IOS_MODAL_ROUTES will have the modal transition.  */\nconst IOS_MODAL_ROUTES = ['OptionsScreen'];\n\nlet dynamicModalTransition = (transitionProps, prevTransitionProps) => {\n  const isModal = IOS_MODAL_ROUTES.some(\n    (screenName) =>\n      screenName === transitionProps.scene.route.routeName ||\n      (prevTransitionProps &&\n        screenName === prevTransitionProps.scene.route.routeName)\n  );\n  return StackViewTransitionConfigs.defaultTransitionConfig(\n    transitionProps,\n    prevTransitionProps,\n    isModal\n  );\n};\n\nconst HomeStack = createStackNavigator(\n  { DetailScreen, HomeScreen, OptionsScreen },\n  { initialRouteName: 'HomeScreen', transitionConfig: dynamicModalTransition }\n);\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return o}});var t=i(67294);let a={},r=t.createContext(a);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);