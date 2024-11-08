"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["98514"],{89337:function(e,t,r){r.r(t),r.d(t,{default:()=>b});var n=r("85893");r("67294");var a=r("67026"),i=r("2933"),s=r("79741"),l=r("84681"),o=r("15571"),c=r("61722"),d=r("84315"),p=r("23725"),h=r("94819"),u=r("41835");function f(e){let t=(0,u.CS)(e);return(0,n.jsx)(h.Z,{children:(0,n.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function m(e){let{metadata:t}=e,{siteConfig:{title:r}}=(0,i.Z)(),{blogDescription:a,blogTitle:l,permalink:o}=t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.d,{title:"/"===o?r:l,description:a}),(0,n.jsx)(d.Z,{tag:"blog_posts_list"})]})}function g(e){let{metadata:t,items:r,sidebar:a}=e;return(0,n.jsxs)(o.Z,{sidebar:a,children:[(0,n.jsx)(p.Z,{items:r}),(0,n.jsx)(c.Z,{metadata:t})]})}function b(e){return(0,n.jsxs)(s.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogListPage),children:[(0,n.jsx)(m,{...e}),(0,n.jsx)(f,{...e}),(0,n.jsx)(g,{...e})]})}},61722:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(85893);r(67294);var a=r(96025),i=r(50790);function s(e){let{metadata:t}=e,{previousPage:r,nextPage:s}=t;return(0,n.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[r&&(0,n.jsx)(i.Z,{permalink:r,title:(0,n.jsx)(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),s&&(0,n.jsx)(i.Z,{permalink:s,title:(0,n.jsx)(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},23725:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(85893);r(67294);var a=r(41835),i=r(67510);function s(e){let{items:t,component:r=i.Z}=e;return(0,n.jsx)(n.Fragment,{children:t.map(e=>{let{content:t}=e;return(0,n.jsx)(a.n4,{content:t,children:(0,n.jsx)(r,{children:(0,n.jsx)(t,{})})},t.metadata.permalink)})})}},48548:function(e,t,r){r.d(t,{Z:()=>u});var n=r("28607"),a=r("85893"),i=r("81723"),s=r("84239"),l=r("51672"),o=r("34643"),c=r("67294"),d=r("47902"),p=r("5525");let h={config:[{value:"static",label:"Static",default:!0},{value:"dynamic",label:"Dynamic"}]},u={...n.Z,pre:function e(t){let{children:r,"data-name":n,"data-snack":u,"data-dependencies":f,"data-tabs":m,"data-lang":g,...b}=t,{colorMode:x}=(0,s.I)(),j=(0,i.zu)(),{versions:v}=(0,l.eZ)("react-navigation-versions"),k=c.Children.only(r);if(m&&m in h)return(0,a.jsx)(d.Z,{groupId:"config",queryString:"config",children:h[m].map(t=>{let i=k.props.children;if("string"!=typeof i)throw Error("Code to display in tabs must be a string, but received "+typeof i);let s=i.split("\n"),l="",o=!1;for(let e of s)e.trim().startsWith("// codeblock-tabs=")?o=e.trim()!=="// codeblock-tabs=".concat(t.value):"// codeblock-tabs-end"===e.trim()?o=!1:!o&&(l+=e+"\n");return(0,a.jsx)(p.Z,{value:t.value,label:t.label,default:t.default,children:(0,a.jsx)(e,{...b,"data-name":n,"data-snack":u,"data-dependencies":f,"data-lang":g,children:c.cloneElement(r,{...k.props,children:l.trim()})})},t.value)})});if("language-diff"===k.props.className&&g){let e=k.props.children;if("string"!=typeof e)throw Error("Diff code must be a string, but received "+typeof e);let t=e.split("\n").map(e=>e.startsWith("+ ")?"// diff-add\n".concat(e.replace(/^\+ /,"")):e.startsWith("- ")?"// diff-remove\n".concat(e.replace(/^- /,"")):e).join("\n");return r=c.cloneElement(k,{className:"language-".concat(g),children:t}),(0,a.jsx)(o.Z,{...b,children:r})}if(u){let e=k.props.children;if("string"!=typeof e)throw Error("Playground code must be a string, but received "+typeof e);let t=f?Object.fromEntries(f.split(",").map(e=>{let t="";e.startsWith("@")&&(t="@",e=e.slice(1));let[r,n="*"]=e.split("@");return[t+r,n]})):{},i=null==j?void 0:j.name;if(null==i||null==v[i])throw Error("Invalid version: ".concat(i));Object.assign(t,Object.entries(v[i]).reduce((t,r)=>{let[n,a]=r;if(e.includes("from '".concat(n,"'"))){if(Array.isArray(a)){let[e,r]=a;Object.assign(t,{[n]:e,...Object.fromEntries(Object.entries(r).map(e=>{let[t,r]=e,n=v[i][t];return"*"===r&&n?[t,Array.isArray(n)?n[0]:n]:[t,r]}))})}else t[n]=a}return t},{}));let s=new URL("https://snack.expo.dev");if(n&&s.searchParams.set("name",n),s.searchParams.set("code",e.split("\n").filter(e=>["// highlight-start","// highlight-end","// highlight-next-line","// codeblock-focus-start","// codeblock-focus-end"].every(t=>e.trim()!==t)).join("\n").replace(/import (.*) from 'react-native-vector-icons\/(.*)'/g,'import $1 from "@expo/vector-icons/$2"')),s.searchParams.set("dependencies",Object.entries(t).map(e=>{let[t,r]=e;return"".concat(t,"@").concat(r)}).join(",")),s.searchParams.set("platform","web"),s.searchParams.set("supportedPlatforms","ios,android,web"),s.searchParams.set("preview","true"),s.searchParams.set("hideQueryParams","true"),"embed"===u)return s.searchParams.set("theme","dark"===x?"dark":"light"),s.pathname="embedded",(0,a.jsx)("iframe",{src:s.href,style:{width:"100%",height:660,border:"none",border:"1px solid var(--ifm-table-border-color)",borderRadius:"var(--ifm-global-radius)",overflow:"hidden"}});if(e.includes("// codeblock-focus-start")){let t;let n=e.split("\n"),a="",i=!1;for(let e of n)"// codeblock-focus-start"===e.trim()?i=!0:"// codeblock-focus-end"===e.trim()?i=!1:i&&(void 0===t&&(t=e.match(/^\s*/)[0]),e.startsWith(t)?a+=e.slice(t.length)+"\n":a+=e+"\n");r=c.Children.map(r,e=>c.cloneElement(e,{children:a}))}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{...b,children:r}),(0,a.jsxs)("a",{className:"snack-sample-link","data-snack":"true",target:"_blank",href:s.href,children:["Try on ",(0,a.jsx)("b",{children:"Snack"}),(0,a.jsx)("svg",{width:"14px",height:"14px",viewBox:"0 0 16 16",style:{verticalAlign:"-1px"},children:(0,a.jsxs)("g",{stroke:"none",strokeWidth:"1",fill:"none",children:[(0,a.jsx)("polyline",{stroke:"currentColor",points:"8.5 0.5 15.5 0.5 15.5 7.5"}),(0,a.jsx)("path",{d:"M8,8 L15.0710678,0.928932188",stroke:"currentColor"}),(0,a.jsx)("polyline",{stroke:"currentColor",points:"9.06944444 3.5 1.5 3.5 1.5 14.5 12.5 14.5 12.5 6.93055556"})]})})]})]})}return(0,a.jsx)(o.Z,{...b,children:r})}}}}]);