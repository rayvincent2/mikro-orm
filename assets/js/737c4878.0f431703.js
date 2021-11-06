"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53504],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,b=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21991:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],s={title:"Separating Concerns using Embeddables",sidebar_label:"Embeddables"},l=void 0,d={unversionedId:"embeddables",id:"version-4.2/embeddables",isDocsHomePage:!1,title:"Separating Concerns using Embeddables",description:"Support for embeddables was added in version 4.0",source:"@site/versioned_docs/version-4.2/embeddables.md",sourceDirName:".",slug:"/embeddables",permalink:"/docs/4.2/embeddables",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/embeddables.md",tags:[],version:"4.2",lastUpdatedBy:"James Meneghello",lastUpdatedAt:1636199372,formattedLastUpdatedAt:"11/6/2021",frontMatter:{title:"Separating Concerns using Embeddables",sidebar_label:"Embeddables"},sidebar:"version-4.2/docs",previous:{title:"Custom Types",permalink:"/docs/4.2/custom-types"},next:{title:"Defining Entities via EntitySchema",permalink:"/docs/4.2/entity-schema"}},p=[{value:"Initializing embeddables",id:"initializing-embeddables",children:[],level:2},{value:"Column Prefixing",id:"column-prefixing",children:[],level:2},{value:"Storing embeddables as objects",id:"storing-embeddables-as-objects",children:[],level:2}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Support for embeddables was added in version 4.0")),(0,o.kt)("p",null,"Embeddables are classes which are not entities themselves, but are embedded in\nentities and can also be queried. You'll mostly want to use them to reduce\nduplication or separating concerns. Value objects such as date range or address\nare the primary use case for this feature."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Embeddables needs to be discovered just like regular entities, don't forget to\nadd them to the list of entities when initializing the ORM.")),(0,o.kt)("p",null,"Embeddables can only contain properties with basic ",(0,o.kt)("inlineCode",{parentName:"p"},"@Property()")," mapping."),(0,o.kt)("p",null,"For the purposes of this tutorial, we will assume that you have a ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," class in\nyour application and you would like to store an address in the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," class. We will\nmodel the ",(0,o.kt)("inlineCode",{parentName:"p"},"Address")," class as an embeddable instead of simply adding the respective\ncolumns to the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Embedded()\n  address!: Address;\n\n}\n\n@Embeddable()\nexport class Address {\n  \n  @Property()\n  street!: string;\n\n  @Property()\n  postalCode!: string;\n\n  @Property()\n  city!: string;\n\n  @Property()\n  country!: string;\n\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When using ReflectMetadataProvider, you might need to provide the class in decorator options:\n",(0,o.kt)("inlineCode",{parentName:"p"},"@Embedded(() => Address)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@Embedded({ entity: () => Address })"),".")),(0,o.kt)("p",null,"In terms of your database schema, MikroORM will automatically inline all columns from\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"Address")," class into the table of the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," class, just as if you had declared\nthem directly there."),(0,o.kt)("h2",{id:"initializing-embeddables"},"Initializing embeddables"),(0,o.kt)("p",null,"In case all fields in the embeddable are nullable, you might want to initialize the\nembeddable, to avoid getting a null value instead of the embedded object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Embedded()\naddress = new Address();\n")),(0,o.kt)("h2",{id:"column-prefixing"},"Column Prefixing"),(0,o.kt)("p",null,"By default, MikroORM names your columns by prefixing them, using the value object name."),(0,o.kt)("p",null,"Following the example above, your columns would be named as ",(0,o.kt)("inlineCode",{parentName:"p"},"address_street"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"address_postal_code"),"..."),(0,o.kt)("p",null,"You can change this behaviour to meet your needs by changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"prefix")," attribute\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Embedded()")," notation."),(0,o.kt)("p",null,"The following example shows you how to set your prefix to ",(0,o.kt)("inlineCode",{parentName:"p"},"myPrefix_"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Embedded({ prefix: 'myPrefix_' })\n  address!: Address;\n\n}\n")),(0,o.kt)("p",null,"To have MikroORM drop the prefix and use the value object's property name directly,\nset ",(0,o.kt)("inlineCode",{parentName:"p"},"prefix: false"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Embedded({ entity: () => Address, prefix: false })\n  address!: Address;\n\n}\n")),(0,o.kt)("h2",{id:"storing-embeddables-as-objects"},"Storing embeddables as objects"),(0,o.kt)("p",null,"From MikroORM v4.2 we can also store the embeddable as an object instead of\ninlining its properties to the owing entity."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class User {\n\n  @Embedded({ entity: () => Address, object: true })\n  address!: Address;\n\n}\n")),(0,o.kt)("p",null,"In SQL drivers, this will use a JSON column to store the value. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Only MySQL and PostgreSQL drivers support searching by JSON properties currently.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-orm/en/latest/tutorials/embeddables.html"},"doctrine tutorial"),"\nas the behaviour here is pretty much the same.")))}u.isMDXComponent=!0}}]);