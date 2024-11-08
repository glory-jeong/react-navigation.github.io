"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["74250"],{26180:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>h,frontMatter:()=>l});var a=JSON.parse('{"id":"material-bottom-tab-navigator","title":"Material Bottom Tabs Navigator","description":"The material-bottom-tabs navigator is moved to react-native-paper. Refer to react-native-paper\'s documentation instead for installation instructions, usage guide and API reference. For any issues with the navigator, please open an issue in react-native-paper\'s repository.","source":"@site/versioned_docs/version-6.x/material-bottom-tab-navigator.md","sourceDirName":".","slug":"/material-bottom-tab-navigator","permalink":"/docs/6.x/material-bottom-tab-navigator","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/material-bottom-tab-navigator.md","tags":[],"version":"6.x","frontMatter":{"id":"material-bottom-tab-navigator","title":"Material Bottom Tabs Navigator","sidebar_label":"Material Bottom Tabs"},"sidebar":"docs","previous":{"title":"Bottom Tabs","permalink":"/docs/6.x/bottom-tab-navigator"},"next":{"title":"Material Top Tabs","permalink":"/docs/6.x/material-top-tab-navigator"}}'),i=n("85893"),r=n("50065"),o=n("47902"),s=n("5525");let l={id:"material-bottom-tab-navigator",title:"Material Bottom Tabs Navigator",sidebar_label:"Material Bottom Tabs"},c=void 0,d={},h=[{value:"Installation",id:"installation",level:2},{value:"API Definition",id:"api-definition",level:2},{value:"RouteConfigs",id:"routeconfigs",level:2},{value:"Props",id:"props",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>initialRouteName</code>",id:"initialroutename",level:4},{value:"<code>screenOptions</code>",id:"screenoptions",level:4},{value:"<code>backBehavior</code>",id:"backbehavior",level:4},{value:"<code>shifting</code>",id:"shifting",level:4},{value:"<code>labeled</code>",id:"labeled",level:4},{value:"<code>activeColor</code>",id:"activecolor",level:4},{value:"<code>inactiveColor</code>",id:"inactivecolor",level:4},{value:"<code>barStyle</code>",id:"barstyle",level:4},{value:"Options",id:"options",level:3},{value:"<code>title</code>",id:"title",level:4},{value:"<code>tabBarIcon</code>",id:"tabbaricon",level:4},{value:"<code>tabBarColor</code>",id:"tabbarcolor",level:4},{value:"<code>tabBarLabel</code>",id:"tabbarlabel",level:4},{value:"<code>tabBarBadge</code>",id:"tabbarbadge",level:4},{value:"<code>tabBarAccessibilityLabel</code>",id:"tabbaraccessibilitylabel",level:4},{value:"<code>tabBarTestID</code>",id:"tabbartestid",level:4},{value:"Events",id:"events",level:3},{value:"<code>tabPress</code>",id:"tabpress",level:4},{value:"Helpers",id:"helpers",level:3},{value:"<code>jumpTo</code>",id:"jumpto",level:4},{value:"Example",id:"example",level:2},{value:"Using with <code>react-native-paper</code> (optional)",id:"using-with-react-native-paper-optional",level:2}];function u(e){let t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"material-bottom-tabs"})," navigator is moved to ",(0,i.jsx)(t.a,{href:"https://reactnativepaper.com/",children:(0,i.jsx)(t.code,{children:"react-native-paper"})}),". Refer to ",(0,i.jsxs)(t.a,{href:"https://callstack.github.io/react-native-paper/docs/guides/bottom-navigation",children:[(0,i.jsx)(t.code,{children:"react-native-paper"}),"'s documentation"]})," instead for installation instructions, usage guide and API reference. For any issues with the navigator, please open an issue in ",(0,i.jsxs)(t.a,{href:"https://github.com/callstack/react-native-paper/",children:[(0,i.jsx)(t.code,{children:"react-native-paper"}),"'s repository"]}),"."]})}),"\n",(0,i.jsx)(t.p,{children:"A material-design themed tab bar on the bottom of the screen that lets you switch between different routes with animation. Routes are lazily initialized - their screen components are not mounted until they are first focused."}),"\n",(0,i.jsxs)(t.p,{children:["This wraps the ",(0,i.jsx)(t.a,{href:"https://callstack.github.io/react-native-paper/bottom-navigation.html",children:(0,i.jsx)(t.code,{children:"BottomNavigation"})})," component from ",(0,i.jsx)(t.a,{href:"https://reactnativepaper.com",children:(0,i.jsx)(t.code,{children:"react-native-paper"})}),". If you ",(0,i.jsx)(t.a,{href:"https://callstack.github.io/react-native-paper/getting-started.html",children:"configure the Babel plugin"}),", it won't include the whole ",(0,i.jsx)(t.code,{children:"react-native-paper"})," library in your bundle."]}),"\n",(0,i.jsx)("img",{src:"/assets/navigators/tabs/material-bottom-tabs.gif",style:{width:"420px",maxWidth:"100%",margin:"16px 0"}}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.p,{children:["To use this navigator, ensure that you have ",(0,i.jsxs)(t.a,{href:"/docs/6.x/getting-started",children:[(0,i.jsx)(t.code,{children:"@react-navigation/native"})," and its dependencies (follow this guide)"]}),", then install ",(0,i.jsx)(t.a,{href:"https://github.com/react-navigation/react-navigation/tree/main/packages/material-bottom-tabs",children:(0,i.jsx)(t.code,{children:"@react-navigation/material-bottom-tabs"})}),":"]}),"\n",(0,i.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,i.jsx)(s.Z,{value:"npm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm install @react-navigation/material-bottom-tabs@^6.x react-native-paper react-native-vector-icons\n"})})}),(0,i.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"yarn add @react-navigation/material-bottom-tabs@^6.x react-native-paper react-native-vector-icons\n"})})}),(0,i.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"pnpm add @react-navigation/material-bottom-tabs@^6.x react-native-paper react-native-vector-icons\n"})})})]}),"\n",(0,i.jsxs)(t.p,{children:["This API also requires that you install ",(0,i.jsx)(t.code,{children:"react-native-vector-icons"}),"! If you are using Expo managed workflow, it will work without any extra steps. Otherwise, ",(0,i.jsx)(t.a,{href:"https://github.com/oblador/react-native-vector-icons#installation",children:"follow these installation instructions"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["To use this tab navigator, import it from ",(0,i.jsx)(t.code,{children:"@react-navigation/material-bottom-tabs"})]}),"\n",(0,i.jsx)(t.h2,{id:"api-definition",children:"API Definition"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["\uD83D\uDCA1 If you encounter any bugs while using ",(0,i.jsx)(t.code,{children:"createMaterialBottomTabNavigator"}),", please open issues on ",(0,i.jsx)(t.a,{href:"https://github.com/callstack/react-native-paper",children:(0,i.jsx)(t.code,{children:"react-native-paper"})})," rather than the ",(0,i.jsx)(t.code,{children:"react-navigation"})," repository!"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["To use this tab navigator, import it from ",(0,i.jsx)(t.code,{children:"@react-navigation/material-bottom-tabs"}),":"]}),"\n",(0,i.jsx)("samp",{id:"material-tab-based-navigation-minimal"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'import { createMaterialBottomTabNavigator } from \'@react-navigation/material-bottom-tabs\';\n\nconst Tab = createMaterialBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={HomeScreen} />\n      <Tab.Screen name="Settings" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n}\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["For a complete usage guide please visit ",(0,i.jsx)(t.a,{href:"/docs/6.x/tab-based-navigation",children:"Tab Navigation"})]})}),"\n",(0,i.jsx)(t.h2,{id:"routeconfigs",children:"RouteConfigs"}),"\n",(0,i.jsx)(t.p,{children:"The route configs object is a mapping from route name to a route config."}),"\n",(0,i.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Tab.Navigator"})," component accepts following props:"]}),"\n",(0,i.jsx)(t.h4,{id:"id",children:(0,i.jsx)(t.code,{children:"id"})}),"\n",(0,i.jsxs)(t.p,{children:["Optional unique ID for the navigator. This can be used with ",(0,i.jsx)(t.a,{href:"/docs/6.x/navigation-prop#getparent",children:(0,i.jsx)(t.code,{children:"navigation.getParent"})})," to refer to this navigator in a child navigator."]}),"\n",(0,i.jsx)(t.h4,{id:"initialroutename",children:(0,i.jsx)(t.code,{children:"initialRouteName"})}),"\n",(0,i.jsx)(t.p,{children:"The name of the route to render on first load of the navigator."}),"\n",(0,i.jsx)(t.h4,{id:"screenoptions",children:(0,i.jsx)(t.code,{children:"screenOptions"})}),"\n",(0,i.jsx)(t.p,{children:"Default options to use for the screens in the navigator."}),"\n",(0,i.jsx)(t.h4,{id:"backbehavior",children:(0,i.jsx)(t.code,{children:"backBehavior"})}),"\n",(0,i.jsxs)(t.p,{children:["This controls what happens when ",(0,i.jsx)(t.code,{children:"goBack"})," is called in the navigator. This includes pressing the device's back button or back gesture on Android."]}),"\n",(0,i.jsx)(t.p,{children:"It supports the following values:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"firstRoute"})," - return to the first screen defined in the navigator (default)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"initialRoute"})," - return to initial screen passed in ",(0,i.jsx)(t.code,{children:"initialRouteName"})," prop, if not passed, defaults to the first screen"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"order"})," - return to screen defined before the focused screen"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"history"})," - return to last visited screen in the navigator; if the same screen is visited multiple times, the older entries are dropped from the history"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"none"})," - do not handle back button"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"shifting",children:(0,i.jsx)(t.code,{children:"shifting"})}),"\n",(0,i.jsx)(t.p,{children:"Whether the shifting style is used, the active tab icon shifts up to show the label and the inactive tabs won't have a label."}),"\n",(0,i.jsxs)(t.p,{children:["By default, this is ",(0,i.jsx)(t.code,{children:"true"})," when you have more than 3 tabs. Pass ",(0,i.jsx)(t.code,{children:"shifting={false}"})," to explicitly disable this animation, or ",(0,i.jsx)(t.code,{children:"shifting={true}"})," to always use this animation."]}),"\n",(0,i.jsx)(t.h4,{id:"labeled",children:(0,i.jsx)(t.code,{children:"labeled"})}),"\n",(0,i.jsxs)(t.p,{children:["Whether to show labels in tabs. When ",(0,i.jsx)(t.code,{children:"false"}),", only icons will be displayed."]}),"\n",(0,i.jsx)(t.h4,{id:"activecolor",children:(0,i.jsx)(t.code,{children:"activeColor"})}),"\n",(0,i.jsx)(t.p,{children:"Custom color for icon and label in the active tab."}),"\n",(0,i.jsx)(t.h4,{id:"inactivecolor",children:(0,i.jsx)(t.code,{children:"inactiveColor"})}),"\n",(0,i.jsx)(t.p,{children:"Custom color for icon and label in the inactive tab."}),"\n",(0,i.jsx)(t.h4,{id:"barstyle",children:(0,i.jsx)(t.code,{children:"barStyle"})}),"\n",(0,i.jsx)(t.p,{children:"Style for the bottom navigation bar. You can pass custom background color here:"}),"\n",(0,i.jsx)("samp",{id:"material-bottom-tab-styled"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'<Tab.Navigator\n  initialRouteName="Home"\n  activeColor="#f0edf6"\n  inactiveColor="#3e2465"\n  barStyle={{ backgroundColor: \'#694fad\' }}\n>\n  {/* ... */}\n</Tab.Navigator>\n'})}),"\n",(0,i.jsx)(t.p,{children:"If you have a translucent navigation bar on Android, you can also set a bottom padding here:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'<Tab.Navigator\n  initialRouteName="Home"\n  activeColor="#f0edf6"\n  inactiveColor="#3e2465"\n  barStyle={{ paddingBottom: 48 }}\n>\n  {/* ... */}\n</Tab.Navigator>\n'})}),"\n",(0,i.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(t.p,{children:["The following ",(0,i.jsx)(t.a,{href:"/docs/6.x/screen-options",children:"options"})," can be used to configure the screens in the navigator:"]}),"\n",(0,i.jsx)(t.h4,{id:"title",children:(0,i.jsx)(t.code,{children:"title"})}),"\n",(0,i.jsxs)(t.p,{children:["Generic title that can be used as a fallback for ",(0,i.jsx)(t.code,{children:"headerTitle"})," and ",(0,i.jsx)(t.code,{children:"tabBarLabel"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"tabbaricon",children:(0,i.jsx)(t.code,{children:"tabBarIcon"})}),"\n",(0,i.jsxs)(t.p,{children:["Function that given ",(0,i.jsx)(t.code,{children:"{ focused: boolean, color: string }"})," returns a React.Node, to display in the tab bar."]}),"\n",(0,i.jsx)(t.h4,{id:"tabbarcolor",children:(0,i.jsx)(t.code,{children:"tabBarColor"})}),"\n",(0,i.jsxs)(t.p,{children:["Color for the tab bar when the tab corresponding to the screen is active. Used for the ripple effect. This is only supported when ",(0,i.jsx)(t.code,{children:"shifting"})," is ",(0,i.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"tabbarlabel",children:(0,i.jsx)(t.code,{children:"tabBarLabel"})}),"\n",(0,i.jsxs)(t.p,{children:["Title string of a tab displayed in the tab bar. When undefined, scene ",(0,i.jsx)(t.code,{children:"title"})," is used. To hide, see ",(0,i.jsx)(t.code,{children:"labeled"})," option in the previous section."]}),"\n",(0,i.jsx)(t.h4,{id:"tabbarbadge",children:(0,i.jsx)(t.code,{children:"tabBarBadge"})}),"\n",(0,i.jsxs)(t.p,{children:["Badge to show on the tab icon, can be ",(0,i.jsx)(t.code,{children:"true"})," to show a dot, ",(0,i.jsx)(t.code,{children:"string"})," or ",(0,i.jsx)(t.code,{children:"number"})," to show text."]}),"\n",(0,i.jsx)(t.h4,{id:"tabbaraccessibilitylabel",children:(0,i.jsx)(t.code,{children:"tabBarAccessibilityLabel"})}),"\n",(0,i.jsx)(t.p,{children:"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."}),"\n",(0,i.jsx)(t.h4,{id:"tabbartestid",children:(0,i.jsx)(t.code,{children:"tabBarTestID"})}),"\n",(0,i.jsx)(t.p,{children:"ID to locate this tab button in tests."}),"\n",(0,i.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,i.jsxs)(t.p,{children:["The navigator can ",(0,i.jsx)(t.a,{href:"/docs/6.x/navigation-events",children:"emit events"})," on certain actions. Supported events are:"]}),"\n",(0,i.jsx)(t.h4,{id:"tabpress",children:(0,i.jsx)(t.code,{children:"tabPress"})}),"\n",(0,i.jsx)(t.p,{children:"This event is fired when the user presses the tab button for the current screen in the tab bar. By default a tab press does several things:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"If the tab is not focused, tab press will focus that tab"}),"\n",(0,i.jsxs)(t.li,{children:["If the tab is already focused:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If the screen for the tab renders a scroll view, you can use ",(0,i.jsx)(t.a,{href:"/docs/6.x/use-scroll-to-top",children:(0,i.jsx)(t.code,{children:"useScrollToTop"})})," to scroll it to top"]}),"\n",(0,i.jsxs)(t.li,{children:["If the screen for the tab renders a stack navigator, a ",(0,i.jsx)(t.code,{children:"popToTop"})," action is performed on the stack"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["To prevent the default behavior, you can call ",(0,i.jsx)(t.code,{children:"event.preventDefault"}),":"]}),"\n",(0,i.jsx)("samp",{id:"material-bottom-tab-prevent-default"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabPress', (e) => {\n    // Prevent default behavior\n\n    e.preventDefault();\n    // Do something manually\n    // ...\n  });\n\n  return unsubscribe;\n}, [navigation]);\n"})}),"\n",(0,i.jsx)(t.h3,{id:"helpers",children:"Helpers"}),"\n",(0,i.jsx)(t.p,{children:"The tab navigator adds the following methods to the navigation prop:"}),"\n",(0,i.jsx)(t.h4,{id:"jumpto",children:(0,i.jsx)(t.code,{children:"jumpTo"})}),"\n",(0,i.jsx)(t.p,{children:"Navigates to an existing screen in the tab navigator. The method accepts following arguments:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"name"})," - ",(0,i.jsx)(t.em,{children:"string"})," - Name of the route to jump to."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"params"})," - ",(0,i.jsx)(t.em,{children:"object"})," - Screen params to pass to the destination route."]}),"\n"]}),"\n",(0,i.jsx)("samp",{id:"material-tab-jump-to"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"navigation.jumpTo('Profile', { name: 'Micha\u015B' });\n"})}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)("samp",{id:"material-bottom-tab-example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'import { createMaterialBottomTabNavigator } from \'@react-navigation/material-bottom-tabs\';\nimport MaterialCommunityIcons from \'react-native-vector-icons/MaterialCommunityIcons\';\n\nconst Tab = createMaterialBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator\n      initialRouteName="Feed"\n      activeColor="#e91e63"\n      barStyle={{ backgroundColor: \'tomato\' }}\n    >\n      <Tab.Screen\n        name="Feed"\n        component={Feed}\n        options={{\n          tabBarLabel: \'Home\',\n          tabBarIcon: ({ color }) => (\n            <MaterialCommunityIcons name="home" color={color} size={26} />\n          ),\n        }}\n      />\n      <Tab.Screen\n        name="Notifications"\n        component={Notifications}\n        options={{\n          tabBarLabel: \'Updates\',\n          tabBarIcon: ({ color }) => (\n            <MaterialCommunityIcons name="bell" color={color} size={26} />\n          ),\n        }}\n      />\n      <Tab.Screen\n        name="Profile"\n        component={Profile}\n        options={{\n          tabBarLabel: \'Profile\',\n          tabBarIcon: ({ color }) => (\n            <MaterialCommunityIcons name="account" color={color} size={26} />\n          ),\n        }}\n      />\n    </Tab.Navigator>\n  );\n}\n'})}),"\n",(0,i.jsxs)(t.h2,{id:"using-with-react-native-paper-optional",children:["Using with ",(0,i.jsx)(t.code,{children:"react-native-paper"})," (optional)"]}),"\n",(0,i.jsxs)(t.p,{children:["You can use the theming support in ",(0,i.jsx)(t.code,{children:"react-native-paper"})," to customize the material bottom navigation by wrapping your app in ",(0,i.jsxs)(t.a,{href:"https://callstack.github.io/react-native-paper/getting-started.html",children:[(0,i.jsx)(t.code,{children:"Provider"})," from ",(0,i.jsx)(t.code,{children:"react-native-paper"})]}),". A common use case for this can be to customize the background color for the screens when your app has a dark theme. Follow the ",(0,i.jsxs)(t.a,{href:"https://callstack.github.io/react-native-paper/theming.html",children:["instructions on ",(0,i.jsx)(t.code,{children:"react-native-paper"}),"'s documentation"]})," to learn how to customize the theme."]})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5525:function(e,t,n){n.d(t,{Z:()=>o});var a=n("85893");n("67294");var i=n("67026");let r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n,children:t})}},47902:function(e,t,n){n.d(t,{Z:()=>g});var a=n("85893"),i=n("67294"),r=n("67026"),o=n("69599"),s=n("16550"),l=n("32000"),c=n("4520"),d=n("38341"),h=n("76009");function u(e){var t,n;return null!==(n=null===(t=i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function p(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var b=n("7227");let v="tabList__CuJ",m="tabItem_LNqP";function x(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),h=e=>{let t=e.currentTarget,n=l[c.indexOf(t)].value;n!==i&&(d(t),s(n))},u=e=>{var t,n;let a=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;a=null!==(t=c[n])&&void 0!==t?t:c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;a=null!==(n=c[t])&&void 0!==n?n:c[c.length-1]}}null==a||a.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map(e=>{let{value:t,label:n,attributes:o}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>c.push(e),onKeyDown:u,onClick:h,...o,className:(0,r.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":i===t}),children:null!=n?n:t},t)})})}function j(e){let{lazy:t,children:n,selectedValue:o}=e,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=s.find(e=>e.props.value===o);return e?(0,i.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:s.map((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==o}))})}function f(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:a}=e,r=function(e){let{values:t,children:n}=e;return(0,i.useMemo)(()=>{let e=null!=t?t:u(n).map(e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}});return!function(e){let t=(0,d.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(t.map(e=>e.value).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[t,n])}(e),[o,b]=(0,i.useState)(()=>(function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(n,'" but none of its children has the corresponding value. Available values are: ').concat(a.map(e=>e.value).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return n}let i=null!==(t=a.find(e=>e.default))&&void 0!==t?t:a[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:t,tabValues:r})),[v,m]=function(e){let{queryString:t=!1,groupId:n}=e,a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n}),o=(0,c._X)(r);return[o,(0,i.useCallback)(e=>{if(!r)return;let t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})},[r,a])]}({queryString:n,groupId:a}),[x,j]=function(e){var t;let{groupId:n}=e;let a=(t=n)?"docusaurus.tab.".concat(t):null,[r,o]=(0,h.Nk)(a);return[r,(0,i.useCallback)(e=>{if(!!a)o.set(e)},[a,o])]}({groupId:a}),f=(()=>{let e=null!=v?v:x;return p({value:e,tabValues:r})?e:null})();return(0,l.Z)(()=>{f&&b(f)},[f]),{selectedValue:o,selectValue:(0,i.useCallback)(e=>{if(!p({value:e,tabValues:r}))throw Error("Can't select invalid tab value=".concat(e));b(e),m(e),j(e)},[m,j,r]),tabValues:r}}(e);return(0,a.jsxs)("div",{className:(0,r.Z)("tabs-container",v),children:[(0,a.jsx)(x,{...t,...e}),(0,a.jsx)(j,{...t,...e})]})}function g(e){let t=(0,b.Z)();return(0,a.jsx)(f,{...e,children:u(e.children)},String(t))}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return o}});var a=n(67294);let i={},r=a.createContext(i);function o(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);