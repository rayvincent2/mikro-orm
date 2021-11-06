"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70468],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55056:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],c={title:"Metadata Cache"},l=void 0,p={unversionedId:"metadata-cache",id:"version-4.4/metadata-cache",isDocsHomePage:!1,title:"Metadata Cache",description:"In v4 you need to explicitly install @mikro-orm/reflection to use TsMorphMetadataProvider.",source:"@site/versioned_docs/version-4.4/metadata-cache.md",sourceDirName:".",slug:"/metadata-cache",permalink:"/docs/4.4/metadata-cache",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/metadata-cache.md",tags:[],version:"4.4",lastUpdatedBy:"James Meneghello",lastUpdatedAt:1636199372,formattedLastUpdatedAt:"11/6/2021",frontMatter:{title:"Metadata Cache"},sidebar:"version-4.4/docs",previous:{title:"Metadata Providers",permalink:"/docs/4.4/metadata-providers"},next:{title:"Schema Generator",permalink:"/docs/4.4/schema-generator"}},s=[{value:"Automatic Invalidation",id:"automatic-invalidation",children:[],level:2},{value:"Disabling Metadata Cache",id:"disabling-metadata-cache",children:[],level:2},{value:"Pretty Printing",id:"pretty-printing",children:[],level:2},{value:"Using Different temp Folder",id:"using-different-temp-folder",children:[],level:2},{value:"Providing Custom Cache Adapter",id:"providing-custom-cache-adapter",children:[],level:2}],d={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In v4 you need to explicitly install ",(0,i.kt)("inlineCode",{parentName:"p"},"@mikro-orm/reflection")," to use ",(0,i.kt)("inlineCode",{parentName:"p"},"TsMorphMetadataProvider"),".")),(0,i.kt)("p",null,"Under the hood, ",(0,i.kt)("inlineCode",{parentName:"p"},"MikroORM")," uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dsherret/ts-morph"},(0,i.kt)("inlineCode",{parentName:"a"},"ts-morph"))," to read\nTypeScript source files of all entities to be able to detect all types. Thanks to this,\ndefining the type is enough for runtime validation."),(0,i.kt)("p",null,"If you use folder-based discovery, you should specify paths to\nthe compiled entities via ",(0,i.kt)("inlineCode",{parentName:"p"},"entities")," as well as paths to the TS source files of\nthose entities via ",(0,i.kt)("inlineCode",{parentName:"p"},"entitiesTs"),". When you run the ORM via ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-node"),", the latter\nwill be used automatically, or if you explicitly pass ",(0,i.kt)("inlineCode",{parentName:"p"},"tsNode: true")," in the config."),(0,i.kt)("p",null,"After the discovery process ends, all metadata will be cached. By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"FileCacheAdapter"),"\nwill be used to store the cache inside ",(0,i.kt)("inlineCode",{parentName:"p"},"./temp")," folder to JSON files. "),(0,i.kt)("h2",{id:"automatic-invalidation"},"Automatic Invalidation"),(0,i.kt)("p",null,"Entity metadata are cached together with modified time of the source file, and every time\nthe cache is requested, it first checks if the cache is not invalid. This way you can forgot\nabout the caching mechanism most of the time."),(0,i.kt)("p",null,"One case where you can end up needing to wipe the cache manually is when you work withing a\ngit branch where contents of entities folder differs. "),(0,i.kt)("h2",{id:"disabling-metadata-cache"},"Disabling Metadata Cache"),(0,i.kt)("p",null,"You can disable caching via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await MikroORM.init({\n  cache: { enabled: false },\n  // ...\n});\n")),(0,i.kt)("h2",{id:"pretty-printing"},"Pretty Printing"),(0,i.kt)("p",null,"By default, cached metadata will be one line JSON string. You can force pretty printing it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await MikroORM.init({\n  cache: { pretty: true },\n  // ...\n});\n")),(0,i.kt)("h2",{id:"using-different-temp-folder"},"Using Different temp Folder"),(0,i.kt)("p",null,"You can set the temp folder via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await MikroORM.init({\n  cache: { options: { cacheDir: '...' } },\n  // ...\n});\n")),(0,i.kt)("h2",{id:"providing-custom-cache-adapter"},"Providing Custom Cache Adapter"),(0,i.kt)("p",null,"You can also implement your own cache adapter, for example to store the cache in redis.\nTo do so, just implement simple ",(0,i.kt)("inlineCode",{parentName:"p"},"CacheAdapter")," interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface CacheAdapter {\n\n  get(name: string): any;\n\n  set(name: string, data: any, origin: string): void;\n\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export class RedisCacheAdapter implements CacheAdapter { ... }\n")),(0,i.kt)("p",null,"And provide the implementation in ",(0,i.kt)("inlineCode",{parentName:"p"},"cache.adapter")," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await MikroORM.init({\n  cache: { adapter: RedisCacheAdapter, options: { ... } },\n  // ...\n});\n")))}u.isMDXComponent=!0}}]);