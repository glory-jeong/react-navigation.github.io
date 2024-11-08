"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["32058"],{82590:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>s,default:()=>d,assets:()=>c,toc:()=>l,frontMatter:()=>a});var i=JSON.parse('{"id":"web-support","title":"React Navigation on the Web","description":"Note: starting in v3, React Navigation has built-in support for use in web sites, including server rendering. This has not yet been widely used in production and we consider this feature to be experimental.","source":"@site/versioned_docs/version-4.x/web-support.md","sourceDirName":".","slug":"/web-support","permalink":"/docs/4.x/web-support","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/web-support.md","tags":[],"version":"4.x","frontMatter":{"id":"web-support","title":"React Navigation on the Web","sidebar_label":"Web support"},"sidebar":"version-4.x-docs","previous":{"title":"Localization","permalink":"/docs/4.x/localization"},"next":{"title":"Call a function when focused screen changes","permalink":"/docs/4.x/function-after-focusing-screen"}}'),r=n("85893"),o=n("50065");let a={id:"web-support",title:"React Navigation on the Web",sidebar_label:"Web support"},s="With react-native-web",c={},l=[{value:"Web Links",id:"web-links",level:2},{value:"Server rendering",id:"server-rendering",level:2},{value:"Custom navigators for the web",id:"custom-navigators-for-the-web",level:2}];function h(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Note: starting in v3, React Navigation has built-in support for use in web sites, including server rendering. This has not yet been widely used in production and we consider this feature to be experimental."}),"\n"]}),"\n",(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"with-react-native-web",children:"With react-native-web"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:['"',(0,r.jsx)(t.a,{href:"https://github.com/necolas/react-native-web",children:"React Native for Web"}),'" makes it possible to run React Native components and APIs on the web using React DOM.']}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["This approach allows you to reuse most of React Navigation on the web because React Native for Web maps React Native primitives like ",(0,r.jsx)(t.code,{children:"View"}),", ",(0,r.jsx)(t.code,{children:"Text"}),", and others to their equivalents on the web."]}),"\n",(0,r.jsxs)(t.p,{children:["The easiest way to get started with this approach is to use to use the ",(0,r.jsx)(t.a,{href:"https://blog.expo.io/expo-cli-and-sdk-web-support-beta-d0c588221375",children:"Expo CLI web support beta"}),". More information on how to set this up in other projects will follow in the future, help on documenting it is also welcome!"]}),"\n",(0,r.jsx)(t.h1,{id:"with-standard-web-tools",children:"With standard web tools"}),"\n",(0,r.jsx)(t.p,{children:"This approach requires that you rebuild the navigation views for your app (at least until the community builds out an alternative), but allows you to leverage routers and simple navigators that don't require views, like the switch navigator."}),"\n",(0,r.jsxs)(t.p,{children:["To set up a navigator in a React app, ",(0,r.jsx)(t.a,{href:"https://github.com/react-navigation/example-web",children:"(such as one created with create-react-app)"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { createSwitchNavigator } from '@react-navigation/core';\nimport { createBrowserApp } from '@react-navigation/web';\n\nconst MyNavigator = createSwitchNavigator(routes);\n\nconst App = createBrowserApp(MyNavigator);\n\n// now you can render \"App\" normally\n"})}),"\n",(0,r.jsx)(t.h2,{id:"web-links",children:"Web Links"}),"\n",(0,r.jsxs)(t.p,{children:["We ship a utility out of the box which automatically sets up an ",(0,r.jsx)(t.code,{children:"<a>"})," tag for you with the correct ",(0,r.jsx)(t.code,{children:"href"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"This is necessary to properly support server rendering, critical for accessibility, and nice to provide a good user experience when the browser displays what URL the link will go to."}),"\n",(0,r.jsx)(t.p,{children:"When the app is running, the default browser behavior will be blocked and a navigation action will be dispatched instead."}),"\n",(0,r.jsx)(t.p,{children:'To render a link to the "Profile" route:'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"<Link toRoute=\"Profile\" params={{ name: 'jamie' }}>\n  Jamie's Profile\n</Link>\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Depending on the ",(0,r.jsx)(t.code,{children:"path"})," that is set up for the ",(0,r.jsx)(t.code,{children:"Profile"})," route, the above link may render to html as ",(0,r.jsx)(t.code,{children:'<a href="/people/jamie">Jamie\'s Profile</a>'})]}),"\n",(0,r.jsxs)(t.p,{children:["You can alternatively provide an ",(0,r.jsx)(t.code,{children:"action"})," prop to the ",(0,r.jsx)(t.code,{children:"Link"}),", to specify the exact navigation action that will be used to handle this link."]}),"\n",(0,r.jsx)(t.h2,{id:"server-rendering",children:"Server rendering"}),"\n",(0,r.jsxs)(t.p,{children:["You can use the ",(0,r.jsx)(t.code,{children:"handleServerRequest"})," function to get the top-level navigation prop for your app, as well as the current title for this route."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'expressApp.get(\'/*\', (req, res) => {\n  const { path, query } = req;\n\n  const { navigation, title, options } = handleServerRequest(\n    AppNavigator.router,\n    path,\n    query\n  );\n\n  const markup = renderToString(<AppNavigator navigation={navigation} />);\n\n  res.send(\n    `<!doctype html>\n  <html lang="">\n  <head>\n    <title>${title}</title>\n    <script src="main.js"><\/script>\n  </head>\n  <body>\n    <div id="root">${markup}</div>\n  </body>\n</html>`\n  );\n});\n'})}),"\n",(0,r.jsxs)(t.p,{children:["For a full example, ",(0,r.jsx)(t.a,{href:"https://github.com/react-navigation/web-server-example",children:"see a full server+client React web app here"})]}),"\n",(0,r.jsx)(t.h2,{id:"custom-navigators-for-the-web",children:"Custom navigators for the web"}),"\n",(0,r.jsx)(t.p,{children:"The built-in navigator components such as Stack are often not well suited for web sites, so you may want to create custom navigators yourself."}),"\n",(0,r.jsxs)(t.p,{children:["Your view can use ",(0,r.jsx)(t.code,{children:"props.descriptors"})," to see the current set of screens, get their navigation object, and see the current navigation options. You should use ",(0,r.jsx)(t.code,{children:"SceneView"})," to present your child screen components."]}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"/docs/4.x/custom-navigators",children:'"Custom Navigators"'})," for more details."]}),"\n",(0,r.jsxs)(t.p,{children:["For an example of this, see how the custom ",(0,r.jsx)(t.code,{children:"SidebarView"})," and ",(0,r.jsx)(t.code,{children:"AppView"})," are used from ",(0,r.jsxs)(t.a,{href:"https://github.com/react-navigation/web-server-example/blob/master/src/App.js",children:[(0,r.jsx)(t.code,{children:"App.js"})," in the web server example"]}),"."]})]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var i=n(67294);let r={},o=i.createContext(r);function a(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);