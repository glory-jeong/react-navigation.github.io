"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["6150"],{4401:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>s});var o=JSON.parse('{"id":"headers","title":"Configuring the header bar","description":"By now you\'re probably tired of seeing a blank grey bar on the top of your screen &mdash; you\'re ready for some flair. So let\'s jump in to configuring the header bar.","source":"@site/versioned_docs/version-1.x/headers.md","sourceDirName":".","slug":"/headers","permalink":"/docs/1.x/headers","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/headers.md","tags":[],"version":"1.x","frontMatter":{"id":"headers","title":"Configuring the header bar","sidebar_label":"Configuring the header bar"},"sidebar":"docs","previous":{"title":"Passing parameters to routes","permalink":"/docs/1.x/params"},"next":{"title":"Header buttons","permalink":"/docs/1.x/header-buttons"}}'),i=t("85893"),a=t("50065");let s={id:"headers",title:"Configuring the header bar",sidebar_label:"Configuring the header bar"},r=void 0,c={},d=[{value:"Setting the header title",id:"setting-the-header-title",level:2},{value:"Using params in the title",id:"using-params-in-the-title",level:2},{value:"Updating <code>navigationOptions</code> with <code>setParams</code>",id:"updating-navigationoptions-with-setparams",level:2},{value:"Adjusting header styles",id:"adjusting-header-styles",level:2},{value:"Sharing common <code>navigationOptions</code> across screens",id:"sharing-common-navigationoptions-across-screens",level:2},{value:"Overriding shared <code>navigationOptions</code>",id:"overriding-shared-navigationoptions",level:2},{value:"Replacing the title with a custom component",id:"replacing-the-title-with-a-custom-component",level:2},{value:"Additional configuration",id:"additional-configuration",level:2},{value:"Summary",id:"summary",level:2}];function l(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["By now you're probably tired of seeing a blank grey bar on the top of your screen \u2014 you're ready for some ",(0,i.jsx)(n.a,{href:"https://memegenerator.net/img/images/600x600/14303485/stan-flair-office-space.jpg",children:"flair"}),". So let's jump in to configuring the header bar."]}),"\n",(0,i.jsx)(n.h2,{id:"setting-the-header-title",children:"Setting the header title"}),"\n",(0,i.jsxs)(n.p,{children:["A screen component can have a static property called ",(0,i.jsx)(n.code,{children:"navigationOptions"})," which is either an object or a function that returns an object that contains various configuration options. The one we use for the header title is ",(0,i.jsx)(n.code,{children:"title"}),", as demonstrated in the following example."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"class HomeScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Home',\n  };\n\n  /* render function, etc */\n}\n\nclass DetailsScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Details',\n  };\n\n  /* render function, etc */\n}\n"})}),"\n",(0,i.jsx)("a",{href:"https://snack.expo.io/@react-navigation/setting-header-title",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"StackNavigator"})," uses platform conventions by default, so on iOS the title will be centered and on Android it will be left-aligned."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"using-params-in-the-title",children:"Using params in the title"}),"\n",(0,i.jsxs)(n.p,{children:["In order to use params in the title, we need to make ",(0,i.jsx)(n.code,{children:"navigationOptions"})," a function that returns a configuration object. It might be tempting to try to use ",(0,i.jsx)(n.code,{children:"this.props"})," inside of ",(0,i.jsx)(n.code,{children:"navigationOptions"}),", but because it is a static property of the component, ",(0,i.jsx)(n.code,{children:"this"})," does not refer to an instance of the component and therefore no props are available. Instead, if we make ",(0,i.jsx)(n.code,{children:"navigationOptions"})," a function then React Navigation will call it with an object containing ",(0,i.jsx)(n.code,{children:"{ navigation, navigationOptions, screenProps }"})," -- in this case, all we care about is ",(0,i.jsx)(n.code,{children:"navigation"}),", which is the same object that is passed to your screen props as ",(0,i.jsx)(n.code,{children:"this.props.navigation"}),". You may recall that we can get the params from ",(0,i.jsx)(n.code,{children:"navigation"})," through ",(0,i.jsx)(n.code,{children:"navigation.state.params"}),", and so we do this below to extract a param and use it as a title."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"class DetailsScreen extends React.Component {\n  static navigationOptions = ({ navigation }) => {\n    const { params } = navigation.state;\n\n    return {\n      title: params ? params.otherParam : 'A Nested Details Screen',\n    };\n  };\n\n  /* render function, etc */\n}\n"})}),"\n",(0,i.jsx)("a",{href:"https://snack.expo.io/@react-navigation/using-params-in-title",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,i.jsxs)(n.p,{children:["The argument that is passed in to the ",(0,i.jsx)(n.code,{children:"navigationOptions"})," function is an object with the following properties:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"navigation"})," - The ",(0,i.jsx)(n.a,{href:"/docs/1.x/navigation-prop",children:"navigation prop"})," for the screen, with the screen's route at ",(0,i.jsx)(n.code,{children:"navigation.state"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"screenProps"})," - The props passing from above the navigator component"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"navigationOptions"})," - The default or previous options that would be used if new values are not provided"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["We only needed the ",(0,i.jsx)(n.code,{children:"navigation"})," prop in the above example but you may in some cases want to use ",(0,i.jsx)(n.code,{children:"screenProps"})," or ",(0,i.jsx)(n.code,{children:"navigationOptions"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"updating-navigationoptions-with-setparams",children:["Updating ",(0,i.jsx)(n.code,{children:"navigationOptions"})," with ",(0,i.jsx)(n.code,{children:"setParams"})]}),"\n",(0,i.jsxs)(n.p,{children:["It's often necessary to update the ",(0,i.jsx)(n.code,{children:"navigationOptions"})," configuration for the active screen from the mounted screen component itself. We can do this using ",(0,i.jsx)(n.code,{children:"this.props.navigation.setParams"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/* Inside of render() */\n<Button\n  title=\"Update the title\"\n  onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}\n/>\n"})}),"\n",(0,i.jsx)("a",{href:"https://snack.expo.io/@react-navigation/updating-navigationoptions-with-setparams",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,i.jsx)(n.h2,{id:"adjusting-header-styles",children:"Adjusting header styles"}),"\n",(0,i.jsxs)(n.p,{children:["There are three key properties to use when customizing the style of your header: ",(0,i.jsx)(n.code,{children:"headerStyle"}),", ",(0,i.jsx)(n.code,{children:"headerTintColor"}),", and ",(0,i.jsx)(n.code,{children:"headerTitleStyle"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"headerStyle"}),": a style object that will be applied to the ",(0,i.jsx)(n.code,{children:"View"})," that wraps the header. If you set ",(0,i.jsx)(n.code,{children:"backgroundColor"})," on it, that will be the color of your header."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"headerTintColor"}),": the back button and title both use this property as their color. In the example below, we set the tint color to white (",(0,i.jsx)(n.code,{children:"#fff"}),") so the back button and the header title would be white."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"headerTitleStyle"}),": if we want to customize the ",(0,i.jsx)(n.code,{children:"fontFamily"}),", ",(0,i.jsx)(n.code,{children:"fontWeight"})," and other ",(0,i.jsx)(n.code,{children:"Text"})," style properties for the title, we can use this to do it."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"class HomeScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Home',\n    headerStyle: {\n      backgroundColor: '#f4511e',\n    },\n    headerTintColor: '#fff',\n    headerTitleStyle: {\n      fontWeight: 'bold',\n    },\n  };\n\n  /* render function, etc */\n}\n"})}),"\n",(0,i.jsx)("a",{href:"https://snack.expo.io/@react-navigation/setting-header-styles",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,i.jsx)(n.p,{children:"There are a couple of things to notice here:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["On iOS the status bar text and icons are black, and this doesn't look great over a dark colored background. We won't discuss it here, but you should be sure to configure the status bar to fit with your screen colors ",(0,i.jsx)(n.a,{href:"/docs/1.x/status-bar",children:"as described in the status bar guide"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The configuration we set only applies to the home screen; when we navigate to the details screen, the default styles are back. We'll look at how to share ",(0,i.jsx)(n.code,{children:"navigationOptions"})," between screens now."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"sharing-common-navigationoptions-across-screens",children:["Sharing common ",(0,i.jsx)(n.code,{children:"navigationOptions"})," across screens"]}),"\n",(0,i.jsxs)(n.p,{children:["It is common to want to configure the header in a similar way across many screens. For example, your company brand color might be red and so you want the header background color to be red and tint color to be white. Conveniently, these are the colors we're using our running example, and you'll notice that when you navigate to the ",(0,i.jsx)(n.code,{children:"DetailsScreen"})," the colors go back to the defaults. Wouldn't it be awful if we had to copy the ",(0,i.jsx)(n.code,{children:"navigationOptions"})," header style properties from ",(0,i.jsx)(n.code,{children:"HomeScreen"})," to ",(0,i.jsx)(n.code,{children:"DetailsScreen"}),", and for every single screen component we use in our app? Thankfully, we do not. We can instead move the configuration up to the ",(0,i.jsx)(n.code,{children:"StackNavigator"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"class HomeScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Home',\n    /* No more header config here! */\n  };\n\n  /* render function, etc */\n}\n\n/* other code... */\n\nconst RootStack = StackNavigator(\n  {\n    Home: {\n      screen: HomeScreen,\n    },\n    Details: {\n      screen: DetailsScreen,\n    },\n  },\n  {\n    initialRouteName: 'Home',\n    /* The header config from HomeScreen is now here */\n    navigationOptions: {\n      headerStyle: {\n        backgroundColor: '#f4511e',\n      },\n      headerTintColor: '#fff',\n      headerTitleStyle: {\n        fontWeight: 'bold',\n      },\n    },\n  }\n);\n"})}),"\n",(0,i.jsx)("a",{href:"https://snack.expo.io/@react-navigation/sharing-header-styles",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,i.jsxs)(n.p,{children:["Now, any screen that belongs to the ",(0,i.jsx)(n.code,{children:"RootStack"})," will have our wonderful branded styles. Surely though, there must be a way to override these options if we need to?"]}),"\n",(0,i.jsxs)(n.h2,{id:"overriding-shared-navigationoptions",children:["Overriding shared ",(0,i.jsx)(n.code,{children:"navigationOptions"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"navigationOptions"})," specified on your screen component are merged together with those of its parent ",(0,i.jsx)(n.code,{children:"StackNavigator"}),", with the options on the screen component taking precedence. Let's use this knowledge to invert the background and tint colors on the details screen."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"class DetailsScreen extends React.Component {\n  static navigationOptions = ({ navigation, navigationOptions }) => {\n    const { params } = navigation.state;\n\n    return {\n      title: params ? params.otherParam : 'A Nested Details Screen',\n      /* These values are used instead of the shared configuration! */\n      headerStyle: {\n        backgroundColor: navigationOptions.headerTintColor,\n      },\n      headerTintColor: navigationOptions.headerStyle.backgroundColor,\n    };\n  };\n\n  /* render function, etc */\n}\n"})}),"\n",(0,i.jsx)("a",{href:"https://snack.expo.io/@react-navigation/overriding-shared-header-styles",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,i.jsx)(n.h2,{id:"replacing-the-title-with-a-custom-component",children:"Replacing the title with a custom component"}),"\n",(0,i.jsx)(n.p,{children:"Sometimes you need more control than just changing the text and styles of your title -- for example, you may want to render an image in place of the title, or make the title into a button. In these cases you can completely override the component used for the title and provide your own."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"class LogoTitle extends React.Component {\n  render() {\n    return (\n      <Image\n        source={require('./spiro.png')}\n        style={{ width: 30, height: 30 }}\n      />\n    );\n  }\n}\n\nclass HomeScreen extends React.Component {\n  static navigationOptions = {\n    // headerTitle instead of title\n    headerTitle: <LogoTitle />,\n  };\n\n  /* render function, etc */\n}\n"})}),"\n",(0,i.jsx)("a",{href:"https://snack.expo.io/@react-navigation/custom-header-title-component",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["You might be wondering, why ",(0,i.jsx)(n.code,{children:"headerTitle"})," when we provide a component and not ",(0,i.jsx)(n.code,{children:"title"}),", like before? The reason is that ",(0,i.jsx)(n.code,{children:"headerTitle"})," is a property that is specific to a ",(0,i.jsx)(n.code,{children:"StackNavigator"}),", the ",(0,i.jsx)(n.code,{children:"headerTitle"})," defaults to a ",(0,i.jsx)(n.code,{children:"Text"})," component that displays the ",(0,i.jsx)(n.code,{children:"title"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"additional-configuration",children:"Additional configuration"}),"\n",(0,i.jsxs)(n.p,{children:["You can read the full list of available screen ",(0,i.jsx)(n.code,{children:"navigationOptions"})," for screens inside of ",(0,i.jsx)(n.code,{children:"StackNavigator"})," in the ",(0,i.jsx)(n.a,{href:"/docs/1.x/stack-navigator#navigationoptions-used-by-stacknavigator",children:"StackNavigator reference"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can customize the header inside of the ",(0,i.jsx)(n.code,{children:"navigationOptions"})," static property on your screen components. Read the full list of options ",(0,i.jsx)(n.a,{href:"/docs/1.x/stack-navigator#navigationoptions-used-by-stacknavigator",children:"in the API reference"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"navigationOptions"})," static property can be an object or a function. When it is a function, it is provided with an object with the ",(0,i.jsx)(n.code,{children:"navigation"})," prop, ",(0,i.jsx)(n.code,{children:"screenProps"}),", and ",(0,i.jsx)(n.code,{children:"navigationOptions"})," on it."]}),"\n",(0,i.jsxs)(n.li,{children:["You can also specify shared ",(0,i.jsx)(n.code,{children:"navigationOptions"})," in the ",(0,i.jsx)(n.code,{children:"StackNavigator"})," configuration when you initialize it. The static property takes precedence over that configuration."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://snack.expo.io/@react-navigation/custom-header-title-component",children:"Full source of what we have built so far"}),"."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var o=t(67294);let i={},a=o.createContext(i);function s(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);