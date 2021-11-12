"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33119],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=o,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78084:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={title:"Debugging"},s=void 0,u={unversionedId:"debugging",id:"version-3.6/debugging",isDocsHomePage:!1,title:"Debugging",description:"For development purposes it might come handy to enable logging and debug mode:",source:"@site/versioned_docs/version-3.6/debugging.md",sourceDirName:".",slug:"/debugging",permalink:"/docs/3.6/debugging",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/debugging.md",tags:[],version:"3.6",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1636676024,formattedLastUpdatedAt:"11/12/2021",frontMatter:{title:"Debugging"},sidebar:"version-3.6/docs",previous:{title:"Metadata Cache",permalink:"/docs/3.6/metadata-cache"},next:{title:"Schema Generator",permalink:"/docs/3.6/schema-generator"}},c=[{value:"Custom Logger",id:"custom-logger",children:[],level:2},{value:"Logger Namespaces",id:"logger-namespaces",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For development purposes it might come handy to enable logging and debug mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"return MikroORM.init({\n  debug: true,\n});\n")),(0,i.kt)("p",null,"By doing this ",(0,i.kt)("inlineCode",{parentName:"p"},"MikroORM")," will start using ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log()")," function to dump all queries:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[query] select `e0`.* from `author` as `e0` where `e0`.`name` = ? limit ? [took 2 ms]\n[query] begin [took 1 ms]\n[query] insert into `author` (`name`, `email`, `created_at`, `updated_at`, `terms_accepted`) values (?, ?, ?, ?, ?) [took 2 ms]\n[query] commit [took 2 ms]\n")),(0,i.kt)("p",null,"It is also useful for debugging problems with entity discovery, as you will see information\nabout every processed entity:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[discovery] ORM entity discovery started\n[discovery] - processing entity Author\n[discovery] - using cached metadata for entity Author\n[discovery] - processing entity Book\n[discovery] - processing entity BookTag\n[discovery] - entity discovery finished after 13 ms\n")),(0,i.kt)("h2",{id:"custom-logger"},"Custom Logger"),(0,i.kt)("p",null,"You can also provide your own logger via ",(0,i.kt)("inlineCode",{parentName:"p"},"logger")," option. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"return MikroORM.init({\n  debug: true,\n  logger: msg => myCustomLogger.log(msg),\n});\n")),(0,i.kt)("h2",{id:"logger-namespaces"},"Logger Namespaces"),(0,i.kt)("p",null,"There are multiple Logger Namespaces that you can specifically request, while omitting the rest.\nJust specify array of them via the ",(0,i.kt)("inlineCode",{parentName:"p"},"debug")," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"return MikroORM.init({\n  debug: ['query'], // now only queries will be logged\n});\n")),(0,i.kt)("p",null,"Currently there are 4 namespaces \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"query-params"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"discovery")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"info"),"."),(0,i.kt)("p",null,"If you provide ",(0,i.kt)("inlineCode",{parentName:"p"},"query-params")," then you must also provide ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," in order for it to take effect."))}d.isMDXComponent=!0}}]);