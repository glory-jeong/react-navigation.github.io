"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[62019],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81047:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=["components"],s={title:"3.0 release candidate",author:"Brent Vatne",author_url:"https://twitter.com/notbrent",author_title:"Core Team",author_image_url:"https://avatars0.githubusercontent.com/u/90494?s=200&v=4",tags:["release","announcement"]},l=void 0,p={permalink:"/blog/2018/11/01/react-navigation-3.0-rc",source:"@site/blog/2018-11-01-react-navigation-3.0-rc.md",title:"3.0 release candidate",description:"We are excited to announce the release candidate of version 3.0 today!",date:"2018-11-01T00:00:00.000Z",formattedDate:"November 1, 2018",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:7.97,hasTruncateMarker:!0,authors:[{name:"Brent Vatne",title:"Core Team",url:"https://twitter.com/notbrent",imageURL:"https://avatars0.githubusercontent.com/u/90494?s=200&v=4"}],frontMatter:{title:"3.0 release candidate",author:"Brent Vatne",author_url:"https://twitter.com/notbrent",author_title:"Core Team",author_image_url:"https://avatars0.githubusercontent.com/u/90494?s=200&v=4",tags:["release","announcement"]},prevItem:{title:"React Navigation 3.0",permalink:"/blog/2018/11/17/react-navigation-3.0"},nextItem:{title:"React Navigation 2.0",permalink:"/blog/2018/05/07/react-navigation-2.0"}},c={authorsImageUrls:[void 0]},u=[{value:"Installation",id:"installation",level:2},{value:"Breaking changes",id:"breaking-changes",level:2},{value:"Explicit app container required for the root navigator",id:"explicit-app-container-required-for-the-root-navigator",level:3},{value:"Renamed navigationOptions in navigator configuration",id:"renamed-navigationoptions-in-navigator-configuration",level:3},{value:"Drawer now keeps inactive tabs in memory by default",id:"drawer-now-keeps-inactive-tabs-in-memory-by-default",level:3},{value:"New features",id:"new-features",level:2},{value:"Assorted fixes &amp; improvements",id:"assorted-fixes--improvements",level:2},{value:"Ecosystem and web support",id:"ecosystem-and-web-support",level:2},{value:"Independent Projects",id:"independent-projects",level:3},{value:"Web Support",id:"web-support",level:3}],d={toc:u},m="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We are excited to announce the release candidate of version 3.0 today!"),(0,i.kt)("p",null,"This is the first release where React Navigation depends on a native module outside of React Native core: it now depends on react-native-gesture-handler. This library provides an excellent set of primitives for leveraging the operating systems\u2019 native gesture APIs and has enabled us to fix a variety of issues with stack and drawer navigators. React Navigation also depends on react-native-screens, but you don\u2019t need to install the native module if you prefer not to use it (we have a blog post coming soon that will explain what react-native-screens is and why you may want to use it, or you can watch ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Z0Jl1KCWiag"},"this talk")," by the author of the library)."),(0,i.kt)("p",null,"We didn\u2019t get around to every feature that we wanted to land for this release, but we also didn\u2019t want to hold it up further because we expect that you will want to start using it right away - the release includes performance improvements, bugfixes, ergonomics improvements, some handy new features, and a re-organizing of the internals to improve support for web as a target of React Navigation."),(0,i.kt)("p",null,"Let\u2019s get started with react-navigation 3.0."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"First, install the library using your favorite package manager: ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn add react-navigation@^3.0.0-rc.0")),(0,i.kt)("p",null,"Next, install react-native-gesture-handler. If you\u2019re using Expo you don\u2019t need to do anything here, it\u2019s included in the SDK. Otherwise: ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn add react-native-gesture-handler && react-native link")),(0,i.kt)("p",null,"Optionally, you can install react-native-screens. If you\u2019re using Expo you don\u2019t need to do anything here, it\u2019s included in SDK 30 and higher. Otherwise, follow the instructions in the README on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-screens"},(0,i.kt)("inlineCode",{parentName:"a"},"react-native-screens")),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warning"),": if you have manually installed any navigators in your project, for example react-navigation-material-bottom-tabs, you will need to update those to a version that is compatible with 3.0.0. In the case of react-navigation-material-bottom-tabs, 1.0.0-alpha.2 is compatible.")),(0,i.kt)("h2",{id:"breaking-changes"},"Breaking changes"),(0,i.kt)("p",null,"When you first run your app after updating it won\u2019t work because react-navigation@^3 requires you to add an app container to the root navigator. Once you get that in place, you may notice that your navigation options aren\u2019t being applied as you expect - this is due to navigationOptions in navigator configuration being renamed to defaultNavigationOptions. If you use a drawer, you may notice that it feels quicker, but if you depend on inactive screens being unmounted you\u2019ll be surprised. More details on these changes and how to update your app to work just as well (probably better) than before below."),(0,i.kt)("h3",{id:"explicit-app-container-required-for-the-root-navigator"},"Explicit app container required for the root navigator"),(0,i.kt)("p",null,"In the past, any navigator could act as the navigation container at the top-level of your app because they were all wrapped in \u201cnavigation containers\u201d. The navigation container, now known as an app container, is a higher-order-component that maintains the navigation state of your app and handles interacting with the outside world to turn linking events into navigation actions and so on."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  createStackNavigator,\n  createAppContainer\n} from 'react-navigation';\nconst MainNavigator = createStackNavigator({...});\nconst App = createAppContainer(MainNavigator);\n")),(0,i.kt)("p",null,"This should be an easy change - import ",(0,i.kt)("inlineCode",{parentName:"p"},"createAppContainer")," in the root of your app and use it to wrap the root navigator."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warning"),": if you have any custom navigators, you may have used  ",(0,i.kt)("inlineCode",{parentName:"p"},"createNavigationContainer"),", you can remove this now because it\u2019s only used at the root of the app and provided by the user.")),(0,i.kt)("h3",{id:"renamed-navigationoptions-in-navigator-configuration"},"Renamed navigationOptions in navigator configuration"),(0,i.kt)("p",null,"When configuring navigators it\u2019s often useful to pass in default navigation options for the screens inside of that navigator. For example in a stack you might want to set a background color and tint color for each screen. Previously, you would write something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const Home = createStackNavigator({\n  Feed: ExampleScreen,\n  Profile: ExampleScreen,\n}, {\n  navigationOptions: {\n    headerTintColor: '#fff',\n    headerStyle: {\n      backgroundColor: '#000',\n    },\n  }\n});\n")),(0,i.kt)("p",null,"As of this release, ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," in navigator configuration like this has been renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultNavigationOptions"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const Home = createStackNavigator({\n  Feed: ExampleScreen,\n  Profile: ExampleScreen,\n}, {\n  defaultNavigationOptions: {\n    headerTintColor: '#fff',\n    headerStyle: {\n      backgroundColor: '#000',\n    },\n  },\n});\n")),(0,i.kt)("p",null,"Sometimes you need to configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," for a navigator itself. Typically you\u2019d do something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Home.navigationOptions = { tabBarLabel: 'Home!' };\n")),(0,i.kt)("p",null,"As of this release, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," in the navigator config for this instead."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const Home = createStackNavigator({\n  Feed: ExampleScreen,\n  Profile: ExampleScreen,\n}, {\n  defaultNavigationOptions: {\n    headerTintColor: '#fff',\n    headerStyle: {\n      backgroundColor: '#000',\n    },\n  },\n  navigationOptions: {\n    tabBarLabel: 'Home!',\n  },\n});\n\nconst Tabs = createBottomTabNavigator({ Home });\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://snack.expo.io/@notbrent/belligerent-pizza"},"See this example on Snack"),"."),(0,i.kt)("p",null,"We\u2019re sorry to make you go hunt through your code and rename a handful of strings, the hope is that this change makes the code more readable and more intuitive to new users in the future."),(0,i.kt)("h3",{id:"drawer-now-keeps-inactive-tabs-in-memory-by-default"},"Drawer now keeps inactive tabs in memory by default"),(0,i.kt)("p",null,"Previously when using the drawer navigator screens would unmount when inactive, and when you switch back to them you\u2019d need to re-render the entire thing. In tabs these stay in memory as you would expect, so once you switch to the screen once it\u2019s faster to go back there again and you don\u2019t lose your place in a scroll view or anything. Drawer now behaves the same way, but you can go back to the old behavior if you like by passing in ",(0,i.kt)("inlineCode",{parentName:"p"},"unmountInactiveRoutes: true")," in the drawer navigation configuration."),(0,i.kt)("h2",{id:"new-features"},"New features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"react-navigation now exports ",(0,i.kt)("inlineCode",{parentName:"li"},"ScrollView"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"FlatList"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"SectionList")," that will scroll to top when tapping on the active tab as you would expect from native tab bars."),(0,i.kt)("li",{parentName:"ul"},"Drawer supports two more types in addition to the default \u2018front\u2019 behavior that you expect from typical Android drawers: back and slide."),(0,i.kt)("li",{parentName:"ul"},"You can now provide default params inside of route definitions:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const Store = createStackNavigator({\n  Playstation: { screen: ProductScreen, params: { product: 'Playstation' } },\n  Xbox: { screen: ProductScreen, params: { product: 'Xbox' } },\n});\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Basic support for hooks in ",(0,i.kt)("inlineCode",{parentName:"li"},"react-navigation-hooks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"headerBackgroundTransitionPreset: 'toggle' | 'fade' | 'translate'")," lets you choose how to transition your custom ",(0,i.kt)("inlineCode",{parentName:"li"},"headerBackground")," components between screens."),(0,i.kt)("li",{parentName:"ul"},"Add options to opt in/out of the stack card overlay and shadow that are visible during transitions: ",(0,i.kt)("inlineCode",{parentName:"li"},"cardShadowEnabled")," defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," and  ",(0,i.kt)("inlineCode",{parentName:"li"},"cardOverlayEnabled")," defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},"Export ",(0,i.kt)("inlineCode",{parentName:"li"},"StackGestureContext")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"DrawerGestureContext")," from react-navigation-stack and react-navigation-drawer, so you can use the ref from the corresponding gestures with other gesture handlers (eg: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation-drawer/blob/bf4bdba7f6a4fbc12192f5d5ba2285f6280431b7/example/src/GestureInteraction.js"},"GestureInteraction.js"),").")),(0,i.kt)("h2",{id:"assorted-fixes--improvements"},"Assorted fixes & improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Stack transition performance improved greatly by removing the shadow from the entire card and rendering it only on the slice where it is needed. The card opacity is also no longer directly animated but instead an overlay is put on top to create a similar effect but with better performance."),(0,i.kt)("li",{parentName:"ul"},"Fix long-standing issues with stack that led to quietly re-mounting screens when navigating quickly in certain patterns: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation/issues/4155"},"react-navigation/issues/415")),(0,i.kt)("li",{parentName:"ul"},"Support inverted gesture in modals."),(0,i.kt)("li",{parentName:"ul"},"Stack card gesture uses react-native-gesture-handler and native driver so the gesture runs on the UI thread (except when the gesture ends, then it calls back to JS)."),(0,i.kt)("li",{parentName:"ul"},"Fix a variety of issues with drawer navigator, including issues around nesting (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation/issues/4154"},"react-navigation/issues/4154"),") and bugs with firing open / close (eg: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation/issues/5146"},"react-navigation/issues/5146"),").")),(0,i.kt)("h2",{id:"ecosystem-and-web-support"},"Ecosystem and web support"),(0,i.kt)("p",null,"React Navigation 3.0 brings some important changes to the React Navigation ecosystem: the project now lives across a number of repositories and packages, we have an exciting new transitioner on the way, and the core finally has first-class support for web apps on the client and server!"),(0,i.kt)("h3",{id:"independent-projects"},"Independent Projects"),(0,i.kt)("p",null,"React Navigation has always been a set of loosely-coupled navigation components: Stack, Tabs, Drawer, etc. But until now they have always lived in the main navigation repo, which has been difficult to maintain. People often struggle to use different versions of these components, or they want to fork them for their own app."),(0,i.kt)("p",null,"In v3, all of our main packages and repos are separated. There are the following core packages in our new NPM org:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@react-navigation/core")," - The primitives and utilities that define our patterns, plus several routers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@react-navigation/native")," - Container and support for navigators on React Native apps. ",(0,i.kt)("inlineCode",{parentName:"li"},"createAppContainer")," from the main ",(0,i.kt)("inlineCode",{parentName:"li"},"react-navigation")," package actually comes from this package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@react-navigation/web")," - Web browser app container, and utilities for server rendering")),(0,i.kt)("p",null,"In addition, we have published our community-maintained components as standalone repos and packages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"react-navigation-stack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"react-navigation-tabs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"react-navigation-drawer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"react-navigation-transitioner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"react-navigation-hooks"))),(0,i.kt)("p",null,"To keep the experience as simple as possible the ",(0,i.kt)("inlineCode",{parentName:"p"},"react-navigation")," package will continue to be supported, and will contain most of the above components as it did before."),(0,i.kt)("h3",{id:"web-support"},"Web Support"),(0,i.kt)("p",null,"Now that the core of React Navigation can be used outside of React Native, we can provide first-class web support to anyone using React.js on the web, including those who do not want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-web"),"."),(0,i.kt)("p",null,"Here is an example web app which demonstrates the new ",(0,i.kt)("inlineCode",{parentName:"p"},"createBrowserApp")," container and the built-in  ",(0,i.kt)("inlineCode",{parentName:"p"},"Link")," component:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { createSwitchNavigator } from "@react-navigation/core";\nimport { createBrowserApp, Link } from "@react-navigation/web";\n\nclass Home extends React.Component {\n  static path = "";\n  static navigationOptions = {\n    title: "Home",\n  };\n  render () {\n    return (\n      <div>\n        <h2>Home Screen</h2>\n        <Link toRoute="Profile" params={{ name: "Brent", view: "photos" }}>\n          Brent\'s photos\n        </Link>\n      </div>\n    );\n  }\n}\nclass Profile extends React.Component {\n  static path = "/profile/:name";\n  ...\n}\n\nconst AppNavigator = createSwitchNavigator({\n  Home,\n  Profile,\n});\n\nconst App = createBrowserApp(AppNavigator);\n\nexport default App;\n')),(0,i.kt)("p",null,"The above ",(0,i.kt)("inlineCode",{parentName:"p"},"Link")," tag will render to:\n",(0,i.kt)("inlineCode",{parentName:"p"},'<a href=``"``/profile/Brent?view=photos``"``>Brent\'s Photos</a>')),(0,i.kt)("p",null,"See a simple web app with Create React App ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/example-web"},"here"),". Or take a look at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/web-server-example"},"this razzle app")," for a more complicated example including server rendering."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Thanks for reading, please post any issues you encounter to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/issues"},"react-navigation/issues"),"!"))}h.isMDXComponent=!0}}]);