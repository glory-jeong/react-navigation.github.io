"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["10428"],{86712:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>s});var a=JSON.parse('{"id":"redux-integration","title":"Redux integration","description":"It is extremely easy to use Redux in an app with React Navigation. It\'s basically no different than without React Navigation. The following example shows how to do it end to end","source":"@site/versioned_docs/version-4.x/redux-integration.md","sourceDirName":".","slug":"/redux-integration","permalink":"/docs/4.x/redux-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/redux-integration.md","tags":[],"version":"4.x","frontMatter":{"id":"redux-integration","title":"Redux integration","sidebar_label":"Redux integration"},"sidebar":"version-4.x-docs","previous":{"title":"Type checking with TypeScript","permalink":"/docs/4.x/typescript"},"next":{"title":"MobX State Tree integration","permalink":"/docs/4.x/MST-integration"}}'),o=n("85893"),i=n("50065");let s={id:"redux-integration",title:"Redux integration",sidebar_label:"Redux integration"},r=void 0,c={},d=[{value:"What about <code>navigationOptions</code>?",id:"what-about-navigationoptions",level:2},{value:"Use a component that is <code>connect</code>ed",id:"use-a-component-that-is-connected",level:3},{value:"Pass the state you care about as a param to the screen",id:"pass-the-state-you-care-about-as-a-param-to-the-screen",level:3},{value:"setParams from your screen",id:"setparams-from-your-screen",level:3},{value:"Can I store the navigation state in Redux too?",id:"can-i-store-the-navigation-state-in-redux-too",level:2}];function l(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["It is extremely easy to use Redux in an app with React Navigation. It's basically no different than without React Navigation. The following example shows how to do it end to end: ",(0,o.jsx)(t.a,{href:"https://snack.expo.io/@react-navigation/redux-example",children:"snack.expo.io/@react-navigation/redux-example"}),". The most important piece from it is the following:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"let RootStack = createStackNavigator({\n  Counter: CounterContainer,\n  StaticCounter: StaticCounterContainer,\n});\n\nlet Navigation = createAppContainer(RootStack);\n\n// Render the app container component with the provider around it\nexport default class App extends React.Component {\n  render() {\n    return (\n      <Provider store={store}>\n        <Navigation />\n      </Provider>\n    );\n  }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Notice that we take the component returned from ",(0,o.jsx)(t.code,{children:"createAppContainer"})," and wrap it in a ",(0,o.jsx)(t.code,{children:"Provider"}),". Ta da! Now feel free to use ",(0,o.jsx)(t.code,{children:"connect"})," throughout your app."]}),"\n",(0,o.jsxs)(t.h2,{id:"what-about-navigationoptions",children:["What about ",(0,o.jsx)(t.code,{children:"navigationOptions"}),"?"]}),"\n",(0,o.jsx)(t.p,{children:"Alright fair enough, the answer here isn't the most obvious. Let's say that you want to access the Redux store state from the title, what would you do? There are a couple of options. For these examples let's say that you want to put the count from the above example into the title."}),"\n",(0,o.jsxs)(t.h3,{id:"use-a-component-that-is-connected",children:["Use a component that is ",(0,o.jsx)(t.code,{children:"connect"}),"ed"]}),"\n",(0,o.jsxs)(t.p,{children:["Create a component, ",(0,o.jsx)(t.code,{children:"connect"})," it to the store, then use that component in the ",(0,o.jsx)(t.code,{children:"title"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"class Count extends React.Component {\n  render() {\n    return <Text>Count: {this.props.value}</Text>;\n  }\n}\n\nlet CountContainer = connect((state) => ({ value: state.count }))(Count);\n\nclass Counter extends React.Component {\n  static navigationOptions = {\n    title: <CountContainer />,\n  };\n\n  /* .. the rest of the code */\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://snack.expo.io/@react-navigation/redux-example-with-dynamic-title",children:"See a runnable example"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"pass-the-state-you-care-about-as-a-param-to-the-screen",children:"Pass the state you care about as a param to the screen"}),"\n",(0,o.jsxs)(t.p,{children:["If the value isn't expected to change, you can just pass it from a ",(0,o.jsx)(t.code,{children:"connect"}),"ed component to the other screen as a param."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"<Button\n  title=\"Go to static count screen\"\n  onPress={() =>\n    this.props.navigation.navigate('StaticCounter', {\n      count: this.props.count,\n    })\n  }\n/>\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"class StaticCounter extends React.Component {\n  static navigationOptions = ({ navigation }) => ({\n    title: navigation.getParam('count'),\n  });\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <Text style={styles.paragraph}>\n          {this.props.navigation.getParam('count')}\n        </Text>\n      </View>\n    );\n  }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://snack.expo.io/@react-navigation/redux-example-with-dynamic-title",children:"See a runnable example"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"setparams-from-your-screen",children:"setParams from your screen"}),"\n",(0,o.jsxs)(t.p,{children:["Let's modify the ",(0,o.jsx)(t.code,{children:"StaticCounter"})," from the previous example as follows:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"class StaticCounter extends React.Component {\n  static navigationOptions = ({ navigation }) => ({\n    title: navigation.getParam('count'),\n  });\n\n  componentDidMount() {\n    this.updateCount();\n  }\n\n  componentDidUpdate() {\n    this.updateCount();\n  }\n\n  updateCount() {\n    this.props.navigation.setParams({ count: this.props.count });\n  }\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <Text style={styles.paragraph}>\n          {this.props.navigation.getParam('count')}\n        </Text>\n      </View>\n    );\n  }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Now whenever the store updates we update the ",(0,o.jsx)(t.code,{children:"count"})," param and the title updates accordingly."]}),"\n",(0,o.jsx)(t.h2,{id:"can-i-store-the-navigation-state-in-redux-too",children:"Can I store the navigation state in Redux too?"}),"\n",(0,o.jsxs)(t.p,{children:["This is technically possible, but we don't recommend it - it's too easy to shoot yourself in the foot and slow down / break your app. We encourage you to leave it up to React Navigation to manage the navigation state. But if you really want to do this, you can use ",(0,o.jsx)(t.a,{href:"https://github.com/react-navigation/react-navigation-redux-helpers",children:"react-navigation-redux-helpers"}),", but this isn't an officially supported workflow."]})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return s}});var a=n(67294);let o={},i=a.createContext(o);function s(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);