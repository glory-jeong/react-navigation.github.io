"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["63218"],{43851:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return n},toc:function(){return l}});var n=a(66895),i=a(85893),r=a(50065);let o={title:"React Navigation 4.0",authors:"satya",tags:["release","announcement"]},s=void 0,c={authorsImageUrls:[void 0]},l=[];function h(e){let t={a:"a",code:"code",hr:"hr",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The documentation is now live at ",(0,i.jsx)(t.a,{href:"https://reactnavigation.org",children:"reactnavigation.org"}),", and v3 lives ",(0,i.jsx)(t.a,{href:"/docs/3.x/getting-started",children:"here"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"In this release, we have removed the navigators from the react-navigation package. The navigators have lived in separate packages for quite a while and you could already use those packages manually, but we still bundled them in the react-navigation package. This made it difficult for us to release significant updates to navigators, because we had to then do a major version release of react-navigation too. By separating the navigator packages there is more freedom to update and improve navigators without any impact on folks that don't use them."}),"\n",(0,i.jsx)(t.p,{children:"For example, you will find when you install the latest versions of the drawer and tab navigators that the animations are more performant because they use react-native-reanimated to smoothly animate gestures. These have been available in react-navigation-drawer and react-navigation-tabs for several months now but we delayed updating them in react-navigation itself because we did not want to force every user to update."}),"\n",(0,i.jsx)(t.p,{children:"With this version, you now install the navigators from their respective packages, which means that you can independently update them."}),"\n",(0,i.jsx)(t.p,{children:"The navigators live at:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"createStackNavigator"})," - ",(0,i.jsx)(t.a,{href:"https://github.com/react-navigation/stack",children:(0,i.jsx)(t.code,{children:"react-navigation-stack"})})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"createBottomTabNavigator"}),", ",(0,i.jsx)(t.code,{children:"createMaterialTopTabNavigator"})," - ",(0,i.jsx)(t.a,{href:"https://github.com/react-navigation/tabs",children:(0,i.jsx)(t.code,{children:"react-navigation-tabs"})})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"createDrawerNavigator"})," - ",(0,i.jsx)(t.a,{href:"https://github.com/react-navigation/drawer",children:(0,i.jsx)(t.code,{children:"react-navigation-drawer"})})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For upgrade instructions, please check the ",(0,i.jsx)(t.a,{href:"https://github.com/react-navigation/react-navigation/releases/tag/v4.0.0",children:"release notes"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"If you're using TypeScript, navigator specific types were also removed from the main package. We've mentioned the replacement types in the release notes. But if you are still having problems, please open an issue and let us know."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["Thanks for reading, please post any issues you encounter to ",(0,i.jsx)(t.a,{href:"https://github.com/react-navigation/react-navigation/issues",children:"react-navigation/issues"}),"!"]})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return s},a:function(){return o}});var n=a(67294);let i={},r=n.createContext(i);function o(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}},66895:function(e){e.exports=JSON.parse('{"permalink":"/blog/2019/09/16/react-navigation-4.0","source":"@site/blog/2019-09-16-react-navigation-4.0.md","title":"React Navigation 4.0","description":"The documentation is now live at reactnavigation.org, and v3 lives here.","date":"2019-09-16T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/blog/tags/release"},{"inline":true,"label":"announcement","permalink":"/blog/tags/announcement"}],"readingTime":1.285,"hasTruncateMarker":true,"authors":[{"name":"Satyajit Sahoo","url":"https://satya164.page","title":"Core Team","socials":{"x":"https://x.com/satya164","github":"https://github.com/satya164"},"imageURL":"https://avatars2.githubusercontent.com/u/1174278","key":"satya","page":null}],"frontMatter":{"title":"React Navigation 4.0","authors":"satya","tags":["release","announcement"]},"unlisted":false,"prevItem":{"title":"React Navigation meets native","permalink":"/blog/2019/10/17/react-navigation-native"},"nextItem":{"title":"React Navigation 3.0","permalink":"/blog/2018/11/17/react-navigation-3.0"}}')}}]);