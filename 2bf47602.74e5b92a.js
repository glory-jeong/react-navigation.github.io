(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(6),r=(n(0),n(427)),o={id:"handling-iphonex",title:"iPhone X support",sidebar_label:"iPhone X support"},c={unversionedId:"handling-iphonex",id:"version-1.x/handling-iphonex",isDocsHomePage:!1,title:"iPhone X support",description:'By default React Navigation aids in ensuring your application displays correctly on the iPhoneX. It does so by using SafeAreaView inside of UI elements that may interact with the sensor cluster ("the notch") or the home activity indicator.',source:"@site/versioned_docs/version-1.x/handling-iphonex.md",slug:"/handling-iphonex",permalink:"/docs/1.x/handling-iphonex",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/handling-iphonex.md",version:"1.x",sidebar_label:"iPhone X support",sidebar:"version-1.x/docs",previous:{title:"Authentication flows",permalink:"/docs/1.x/auth-flow"},next:{title:"Different status bar configuration based on route",permalink:"/docs/1.x/status-bar"}},s=[{value:"Hidden/Custom Navigation Bar or Tab Bar",id:"hiddencustom-navigation-bar-or-tab-bar",children:[]},{value:"Landscape Mode",id:"landscape-mode",children:[]}],l={rightToc:s};function p(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"By default React Navigation aids in ensuring your application displays correctly on the iPhoneX. It does so by using ",Object(r.b)("inlineCode",{parentName:"p"},"SafeAreaView"),' inside of UI elements that may interact with the sensor cluster ("the notch") or the home activity indicator.'),Object(r.b)("h2",{id:"hiddencustom-navigation-bar-or-tab-bar"},"Hidden/Custom Navigation Bar or Tab Bar"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Default React Navigation Behavior",src:n(578).default})),Object(r.b)("p",null,"However, if you're overriding the default navigation bar it's important to ensure your UI doesn't interfere with either of those hardware elements."),Object(r.b)("p",null,"For example, if I render nothing for the ",Object(r.b)("inlineCode",{parentName:"p"},"header")," or ",Object(r.b)("inlineCode",{parentName:"p"},"tabBarComponent")," nothing renders"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const Tabs = TabNavigator({\n  ...\n}, {\n  tabBarComponent: () => null,\n});\n\nexport default StackNavigator({\n  ...\n}, {\n  headerMode: 'none',\n});\n")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Text hidden by iPhoneX UI elements",src:n(579).default})),Object(r.b)("p",null,"To fix this issue you can wrap your content in a ",Object(r.b)("inlineCode",{parentName:"p"},"SafeAreaView"),", which can be imported from either ",Object(r.b)("inlineCode",{parentName:"p"},"react-native")," or ",Object(r.b)("inlineCode",{parentName:"p"},"react-navigation"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { SafeAreaView } from 'react-navigation';\n\nclass App extends Component {\n  render() {\n    return (\n      <SafeAreaView style={styles.container}>\n        <Text style={styles.paragraph}>\n          This is top text.\n        </Text>\n        <Text style={styles.paragraph}>\n          This is bottom text.\n        </Text>\n      </SafeAreaView>\n    );\n  }\n}\n")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Content spaced correctly with SafeAreaView",src:n(580).default})),Object(r.b)("p",null,"This will detect if the app is running on an iPhoneX and, if so, ensure the content isn't hidden behind any hardware elements."),Object(r.b)("h2",{id:"landscape-mode"},"Landscape Mode"),Object(r.b)("p",null,"Even if you're using the default navigation bar and tab bar if your application works in landscape mode it's important to ensure you content isn't hidden behind the sensor cluster."),Object(r.b)("p",null,Object(r.b)("img",{alt:"App in landscape mode with text hidden",src:n(581).default})),Object(r.b)("p",null,"To fix this you can, once again, wrap your content in a ",Object(r.b)("inlineCode",{parentName:"p"},"SafeAreaView"),". This will not conflict with the navigation bar or tab bar's default behavior in portrait mode."),Object(r.b)("p",null,Object(r.b)("img",{alt:"App in landscape mode with text visible",src:n(582).default})),Object(r.b)("p",null,"In conclusion, use the ",Object(r.b)("inlineCode",{parentName:"p"},"SafeAreaView")," component on the screens you register with a React Navigation navigator."),Object(r.b)("p",null,"A ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/BJ6-M8pEG"}),"Snack")," is available with the code used in this overview."))}p.isMDXComponent=!0},427:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,f=d["".concat(o,".").concat(b)]||d[b]||u[b]||r;return n?i.a.createElement(f,c(c({ref:t},l),{},{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},578:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/01-iphonex-default-2588bf4cb73433282b14319e54ea4815.png"},579:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/02-iphonex-content-hidden-2a5db62e9fa6340cfb3e8f5a4250b7d4.png"},580:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/03-iphonex-content-fixed-cb656e6a268a30af3f9aae2b6f3d4c64.png"},581:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/04-iphonex-landscape-hidden-113cbaf522b57ff8fbfdf4b1b39411d3.png"},582:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/05-iphonex-landscape-fixed-0d90c3fe5813cdd8664946c5873d7f57.png"}}]);