"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["79429"],{75753:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>l,assets:()=>c,toc:()=>p,frontMatter:()=>r});var t=JSON.parse('{"id":"screen-options","title":"Options for screens","description":"Each screen can configure various aspects about how it gets presented in the navigator that renders it by specifying certain options, for example, the header title in stack navigator, tab bar icon in bottom tab navigator etc. Different navigators support different set of options.","source":"@site/versioned_docs/version-5.x/screen-options.md","sourceDirName":".","slug":"/screen-options","permalink":"/docs/5.x/screen-options","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/screen-options.md","tags":[],"version":"5.x","frontMatter":{"id":"screen-options","title":"Options for screens","sidebar_label":"Options for screens"},"sidebar":"docs","previous":{"title":"Screen","permalink":"/docs/5.x/screen"},"next":{"title":"Route prop","permalink":"/docs/5.x/route-prop"}}'),i=o("85893"),s=o("50065");let r={id:"screen-options",title:"Options for screens",sidebar_label:"Options for screens"},a=void 0,c={},p=[{value:"<code>options</code> prop on <code>Screen</code>",id:"options-prop-on-screen",level:3},{value:"<code>screenOptions</code> prop on the navigator",id:"screenoptions-prop-on-the-navigator",level:3},{value:"<code>navigation.setOptions</code> method",id:"navigationsetoptions-method",level:3}];function d(e){let n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Each screen can configure various aspects about how it gets presented in the navigator that renders it by specifying certain options, for example, the header title in stack navigator, tab bar icon in bottom tab navigator etc. Different navigators support different set of options."}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.a,{href:"/docs/5.x/headers",children:"configuring the header bar"})," section of the fundamentals documentation we explain the basics of how this works. Also see the ",(0,i.jsx)(n.a,{href:"/docs/5.x/screen-options-resolution",children:"screen options resolution guide"})," to get an idea of how they work when there are multiple navigators."]}),"\n",(0,i.jsx)(n.p,{children:"There are 3 ways of specifying options for screens:"}),"\n",(0,i.jsxs)(n.h3,{id:"options-prop-on-screen",children:[(0,i.jsx)(n.code,{children:"options"})," prop on ",(0,i.jsx)(n.code,{children:"Screen"})]}),"\n",(0,i.jsxs)(n.p,{children:["You can pass a prop named ",(0,i.jsx)(n.code,{children:"options"})," to the ",(0,i.jsx)(n.code,{children:"Screen"})," component to configure a screen, where you can specify an object with different options for that screen:"]}),"\n",(0,i.jsx)("samp",{id:"screen-options"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"<Stack.Navigator>\n  <Stack.Screen\n    name=\"Home\"\n    component={HomeScreen}\n    options={{ title: 'Awesome app' }}\n  />\n  <Stack.Screen\n    name=\"Profile\"\n    component={ProfileScreen}\n    options={{ title: 'My profile' }}\n  />\n</Stack.Navigator>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also pass a function to ",(0,i.jsx)(n.code,{children:"options"}),". The function will receive the ",(0,i.jsxs)(n.a,{href:"/docs/5.x/navigation-prop",children:[(0,i.jsx)(n.code,{children:"navigation"})," prop"]})," and the ",(0,i.jsxs)(n.a,{href:"/docs/5.x/route-prop",children:[(0,i.jsx)(n.code,{children:"route"})," prop"]})," for that screen. This can be useful if you want to perform navigation in your options:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"<Stack.Screen\n  name=\"Home\"\n  component={HomeScreen}\n  options={({ navigation }) => ({\n    title: 'Awesome app',\n    headerLeft: () => (\n      <DrawerButton onPress={() => navigation.toggleDrawer()} />\n    ),\n  })}\n/>\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"screenoptions-prop-on-the-navigator",children:[(0,i.jsx)(n.code,{children:"screenOptions"})," prop on the navigator"]}),"\n",(0,i.jsxs)(n.p,{children:["You can pass a prop named ",(0,i.jsx)(n.code,{children:"screenOptions"})," to the navigator component, where you can specify an object with different options. The options specified in ",(0,i.jsx)(n.code,{children:"screenOptions"})," apply to all of the screens in the navigator. So this is a good place to add options that will apply to all screens within the navigator."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'<Stack.Navigator\n  screenOptions={{ headerStyle: { backgroundColor: \'papayawhip\' } }}\n>\n  <Stack.Screen name="Home" component={HomeScreen} />\n  <Stack.Screen name="Profile" component={ProfileScreen} />\n</Stack.Navigator>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Similar to ",(0,i.jsx)(n.code,{children:"options"}),", you can also pass a function to ",(0,i.jsx)(n.code,{children:"screenOptions"}),". The function will receive the ",(0,i.jsxs)(n.a,{href:"/docs/5.x/navigation-prop",children:[(0,i.jsx)(n.code,{children:"navigation"})," prop"]})," and the ",(0,i.jsxs)(n.a,{href:"/docs/5.x/route-prop",children:[(0,i.jsx)(n.code,{children:"route"})," prop"]})," for each screen. This can be useful if you want to configure options for all the screens in one place based on the route:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"<Tab.Navigator\n  screenOptions={({ route }) => ({\n    tabBarIcon: ({ color, size }) => {\n      const icons = {\n        Home: 'home',\n        Profile: 'account',\n      };\n\n      return (\n        <MaterialCommunityIcons\n          name={icons[route.name]}\n          color={color}\n          size={size}\n        />\n      );\n    },\n  })}\n>\n  <Tab.Screen name=\"Home\" component={HomeScreen} />\n  <Tab.Screen name=\"Profile\" component={ProfileScreen} />\n</Tab.Navigator>\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"navigationsetoptions-method",children:[(0,i.jsx)(n.code,{children:"navigation.setOptions"})," method"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"navigation"})," prop has a ",(0,i.jsx)(n.code,{children:"setOptions"})," method that lets you update the options for a screen from within a component. See ",(0,i.jsx)(n.a,{href:"/docs/5.x/navigation-prop#setoptions",children:"navigation prop's docs"})," more details."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"<Button\n  title=\"Update options\"\n  onPress={() => navigation.setOptions({ title: 'Updated!' })}\n/>\n"})})]})}function l(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return r}});var t=o(67294);let i={},s=t.createContext(i);function r(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);