(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{108:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),i=(r(0),r(177)),a={id:"deployment-overview",title:"Deployment Overview"},l={unversionedId:"overview/deployment-overview",id:"overview/deployment-overview",isDocsHomePage:!1,title:"Deployment Overview",description:"This document details the steps to perform the Erxes installation.",source:"@site/docs/overview/deployment-overview.md",slug:"/overview/deployment-overview",permalink:"/overview/deployment-overview",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/overview/deployment-overview.md",version:"current",lastUpdatedBy:"Anu-Ujin Bat-Ulzii",lastUpdatedAt:1617857670,sidebar:"docs",previous:{title:"Architecture Overview",permalink:"/overview/architecture-overview"},next:{title:"Integrations Overview",permalink:"/overview/integrations-overview"}},c=[{value:"Installing erxes",id:"installing-erxes",children:[{value:"Choose an installation method",id:"choose-an-installation-method",children:[]}]},{value:"Prerequisites",id:"prerequisites",children:[]}],s={rightToc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document details the steps to perform the Erxes installation."),Object(i.b)("h2",{id:"installing-erxes"},"Installing erxes"),Object(i.b)("p",null,"Modern server architectures and configurations are managed in many different ways. Some people still put new software somewhere in ",Object(i.b)("inlineCode",{parentName:"p"},"opt")," manually for each server while others have already jumped on the configuration management train and fully automated reproducible setups."),Object(i.b)("p",null,"Erxes can be installed in many different ways so you can pick whatever works best for you."),Object(i.b)("p",null,"We recommend to start with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/installation/docker"}),"docker images")," for the fastest way to get started and then pick one of the other, more flexible installation methods to build an easier to scale setup."),Object(i.b)("h3",{id:"choose-an-installation-method"},"Choose an installation method"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/installation/ubuntu"}),"Ubuntu 18.04")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/installation/docker"}),"Docker"))),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"MongoDB 3.6+"),Object(i.b)("li",{parentName:"ul"},"Redis 3.x+"),Object(i.b)("li",{parentName:"ul"},"RabbitMQ 3.8.x+")))}u.isMDXComponent=!0},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return r?o.a.createElement(m,l(l({ref:t},s),{},{components:r})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);