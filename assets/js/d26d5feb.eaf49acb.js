"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2325],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(t),p=a,g=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return t?r.createElement(g,o(o({ref:n},m),{},{components:t})):r.createElement(g,o({ref:n},m))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},226:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],l={title:"Naming strategy"},s=void 0,c={unversionedId:"naming-strategy",id:"version-2.7/naming-strategy",title:"Naming strategy",description:"When mapping your entities to database tables and columns, their names will be defined by naming",source:"@site/versioned_docs/version-2.7/naming-strategy.md",sourceDirName:".",slug:"/naming-strategy",permalink:"/docs/2.7/naming-strategy",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/naming-strategy.md",tags:[],version:"2.7",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1646210598,formattedLastUpdatedAt:"3/2/2022",frontMatter:{title:"Naming strategy"},sidebar:"version-2.7/docs",previous:{title:"Lifecycle hooks",permalink:"/docs/2.7/lifecycle-hooks"},next:{title:"Metadata cache",permalink:"/docs/2.7/metadata-cache"}},m=[{value:"Naming strategy in mongo driver",id:"naming-strategy-in-mongo-driver",children:[],level:2},{value:"Naming strategy in SQL drivers",id:"naming-strategy-in-sql-drivers",children:[],level:2}],d={toc:m};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When mapping your entities to database tables and columns, their names will be defined by naming\nstrategy. There are 2 basic naming strategies you can choose from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UnderscoreNamingStrategy")," - default of ",(0,i.kt)("inlineCode",{parentName:"li"},"MySqlDriver")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"SqliteDriver")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MongoNamingStrategy")," - default of ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoDriver"))),(0,i.kt)("p",null,"You can override this when initializing ORM. You can also provide your own naming strategy, just\nimplement ",(0,i.kt)("inlineCode",{parentName:"p"},"NamingStrategy")," interface and provide your implementation when bootstrapping ORM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class YourCustomNamingStrategy implements NamingStrategy {\n  ...\n}\n\nconst orm = await MikroORM.init({\n  ...\n  namingStrategy: YourCustomNamingStrategy,\n  ...\n});\n")),(0,i.kt)("h2",{id:"naming-strategy-in-mongo-driver"},"Naming strategy in mongo driver"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MongoNamingStrategy")," will simply use all field names as they are defined. Collection names will\nbe translated into lower-cased dashed form:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MyCoolEntity")," will be translated into ",(0,i.kt)("inlineCode",{parentName:"p"},"my-cool-entity")," collection name."),(0,i.kt)("h2",{id:"naming-strategy-in-sql-drivers"},"Naming strategy in SQL drivers"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MySqlDriver")," defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"UnderscoreNamingStrategy"),", which means your all your database tables and\ncolumns will be lower-cased and words divided by underscored:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `author` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `created_at` datetime(3) DEFAULT NULL,\n  `updated_at` datetime(3) DEFAULT NULL,\n  `terms_accepted` tinyint(1) DEFAULT NULL,\n  `name` varchar(255) DEFAULT NULL,\n  `email` varchar(255) DEFAULT NULL,\n  `born` datetime DEFAULT NULL,\n  `favourite_book_id` int(11) DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")))}u.isMDXComponent=!0}}]);