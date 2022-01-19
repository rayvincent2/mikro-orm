"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20916],{3905:function(e,t,n){n.d(t,{Zo:function(){return y},kt:function(){return u}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},y=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,c=m["".concat(d,".").concat(u)]||m[u]||p[u]||a;return n?i.createElement(c,o(o({ref:t},y),{},{components:n})):i.createElement(c,o({ref:t},y))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91593:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return y},default:function(){return m}});var i=n(83117),r=n(80102),a=(n(67294),n(3905)),o=["components"],l={title:"EntityManager API"},d=void 0,s={unversionedId:"entity-manager-api",id:"version-4.1/entity-manager-api",title:"EntityManager API",description:"getDriver(): IDatabaseDriver",source:"@site/versioned_docs/version-4.1/entity-manager-api.md",sourceDirName:".",slug:"/entity-manager-api",permalink:"/docs/4.1/entity-manager-api",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.1/entity-manager-api.md",tags:[],version:"4.1",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1642548320,formattedLastUpdatedAt:"1/18/2022",frontMatter:{title:"EntityManager API"},sidebar:"version-4.1/docs",previous:{title:"Read Replica Connections",permalink:"/docs/4.1/read-connections"},next:{title:"EntityRepository API",permalink:"/docs/4.1/repositories-api"}},y=[{value:"<code>getDriver(): IDatabaseDriver</code>",id:"getdriver-idatabasedriver",children:[],level:4},{value:"<code>getConnection(type?: &#39;read&#39; | &#39;write&#39;): ReturnType&lt;D[&#39;getConnection&#39;]&gt;</code>",id:"getconnectiontype-read--write-returntypedgetconnection",children:[],level:4},{value:"<code>getRepository(entityName: EntityName&lt;T&gt;): GetRepository&lt;T, U&gt;</code>",id:"getrepositoryentityname-entitynamet-getrepositoryt-u",children:[],level:4},{value:"<code>getValidator(): EntityValidator</code>",id:"getvalidator-entityvalidator",children:[],level:4},{value:"<code>find(entityName: EntityName&lt;T&gt;, where: FilterQuery&lt;T&gt;, options?: FindOptions&lt;T, P&gt;): Promise&lt;Loaded&lt;T, P&gt;[]&gt;</code>",id:"findentityname-entitynamet-where-filterqueryt-options-findoptionst-p-promiseloadedt-p",children:[],level:4},{value:"<code>find(entityName: EntityName&lt;T&gt;, where: FilterQuery&lt;T&gt;, populate?: P, orderBy?: QueryOrderMap, limit?: number, offset?: number): Promise&lt;Loaded&lt;T, P&gt;[]&gt;</code>",id:"findentityname-entitynamet-where-filterqueryt-populate-p-orderby-queryordermap-limit-number-offset-number-promiseloadedt-p",children:[],level:4},{value:"<code>addFilter(name: string, cond: FilterQuery&lt;T&gt; | ((args: Dictionary) =&gt; FilterQuery&lt;T&gt;), entityName?: EntityName&lt;T&gt;[], enabled?: boolean): void</code>",id:"addfiltername-string-cond-filterqueryt--args-dictionary--filterqueryt-entityname-entitynamet-enabled-boolean-void",children:[],level:4},{value:"<code>setFilterParams(name: string, args: Dictionary): void</code>",id:"setfilterparamsname-string-args-dictionary-void",children:[],level:4},{value:"<code>getFilterParams&lt;T extends Dictionary = Dictionary&gt;(name: string): T</code>",id:"getfilterparamst-extends-dictionary--dictionaryname-string-t",children:[],level:4},{value:"<code>findAndCount(entityName: EntityName&lt;T&gt;, where: FilterQuery&lt;T&gt;, options?: FindOptions&lt;T, P&gt;): Promise&lt;[Loaded&lt;T, P&gt;[], number]&gt;</code>",id:"findandcountentityname-entitynamet-where-filterqueryt-options-findoptionst-p-promiseloadedt-p-number",children:[],level:4},{value:"<code>findAndCount(entityName: EntityName&lt;T&gt;, where: FilterQuery&lt;T&gt;, populate?: P, orderBy?: QueryOrderMap, limit?: number, offset?: number): Promise&lt;[Loaded&lt;T, P&gt;[], number]&gt;</code>",id:"findandcountentityname-entitynamet-where-filterqueryt-populate-p-orderby-queryordermap-limit-number-offset-number-promiseloadedt-p-number",children:[],level:4},{value:"<code>findOne(entityName: EntityName&lt;T&gt;, where: FilterQuery&lt;T&gt;, options?: FindOneOptions&lt;T, P&gt;): Promise&lt;Loaded&lt;T, P&gt; | null&gt;</code>",id:"findoneentityname-entitynamet-where-filterqueryt-options-findoneoptionst-p-promiseloadedt-p--null",children:[],level:4},{value:"<code>findOne(entityName: EntityName&lt;T&gt;, where: FilterQuery&lt;T&gt;, populate?: P, orderBy?: QueryOrderMap): Promise&lt;Loaded&lt;T, P&gt; | null&gt;</code>",id:"findoneentityname-entitynamet-where-filterqueryt-populate-p-orderby-queryordermap-promiseloadedt-p--null",children:[],level:4},{value:"<code>findOneOrFail(entityName: EntityName&lt;T&gt;, where: FilterQuery&lt;T&gt;, options?: FindOneOrFailOptions&lt;T, P&gt;): Promise&lt;Loaded&lt;T, P&gt;&gt;</code>",id:"findoneorfailentityname-entitynamet-where-filterqueryt-options-findoneorfailoptionst-p-promiseloadedt-p",children:[],level:4},{value:"<code>findOneOrFail(entityName: EntityName&lt;T&gt;, where: FilterQuery&lt;T&gt;, populate?: P, orderBy?: QueryOrderMap): Promise&lt;Loaded&lt;T, P&gt;&gt;</code>",id:"findoneorfailentityname-entitynamet-where-filterqueryt-populate-p-orderby-queryordermap-promiseloadedt-p",children:[],level:4},{value:"<code>transactional(cb: (em: D[typeof EntityManagerType]) =&gt; Promise&lt;T&gt;, ctx?: any): Promise&lt;T&gt;</code>",id:"transactionalcb-em-dtypeof-entitymanagertype--promiset-ctx-any-promiset",children:[],level:4},{value:"<code>begin(ctx?: Transaction): Promise&lt;void&gt;</code>",id:"beginctx-transaction-promisevoid",children:[],level:4},{value:"<code>commit(): Promise&lt;void&gt;</code>",id:"commit-promisevoid",children:[],level:4},{value:"<code>rollback(): Promise&lt;void&gt;</code>",id:"rollback-promisevoid",children:[],level:4},{value:"<code>lock(entity: AnyEntity, lockMode: LockMode, lockVersion?: number | Date): Promise&lt;void&gt;</code>",id:"lockentity-anyentity-lockmode-lockmode-lockversion-number--date-promisevoid",children:[],level:4},{value:"<code>nativeInsert(entity: T): Promise&lt;Primary&lt;T&gt;&gt;</code>",id:"nativeinsertentity-t-promiseprimaryt",children:[],level:4},{value:"<code>nativeInsert(entityName: EntityName&lt;T&gt;, data: EntityData&lt;T&gt;): Promise&lt;Primary&lt;T&gt;&gt;</code>",id:"nativeinsertentityname-entitynamet-data-entitydatat-promiseprimaryt",children:[],level:4},{value:"<code>nativeUpdate(entityName: EntityName&lt;T&gt;, where: FilterQuery&lt;T&gt;, data: EntityData&lt;T&gt;, options?: UpdateOptions&lt;T&gt;): Promise&lt;number&gt;</code>",id:"nativeupdateentityname-entitynamet-where-filterqueryt-data-entitydatat-options-updateoptionst-promisenumber",children:[],level:4},{value:"<code>nativeDelete(entityName: EntityName&lt;T&gt;, where: FilterQuery&lt;T&gt;, options?: DeleteOptions&lt;T&gt;): Promise&lt;number&gt;</code>",id:"nativedeleteentityname-entitynamet-where-filterqueryt-options-deleteoptionst-promisenumber",children:[],level:4},{value:"<code>map(entityName: EntityName&lt;T&gt;, result: EntityData&lt;T&gt;): T</code>",id:"mapentityname-entitynamet-result-entitydatat-t",children:[],level:4},{value:"<code>merge(entity: T, refresh?: boolean): T</code>",id:"mergeentity-t-refresh-boolean-t",children:[],level:4},{value:"<code>merge(entityName: EntityName&lt;T&gt;, data: EntityData&lt;T&gt;, refresh?: boolean, convertCustomTypes?: boolean): T</code>",id:"mergeentityname-entitynamet-data-entitydatat-refresh-boolean-convertcustomtypes-boolean-t",children:[],level:4},{value:"<code>create(entityName: EntityName&lt;T&gt;, data: EntityData&lt;T&gt;): New&lt;T, P&gt;</code>",id:"createentityname-entitynamet-data-entitydatat-newt-p",children:[],level:4},{value:"<code>assign(entity: T, data: EntityData&lt;T&gt;, options?: AssignOptions): T</code>",id:"assignentity-t-data-entitydatat-options-assignoptions-t",children:[],level:4},{value:"<code>getReference(entityName: EntityName&lt;T&gt;, id: Primary&lt;T&gt;, wrapped?: boolean, convertCustomTypes?: boolean): T | Reference&lt;T&gt;</code>",id:"getreferenceentityname-entitynamet-id-primaryt-wrapped-boolean-convertcustomtypes-boolean-t--referencet",children:[],level:4},{value:"<code>count(entityName: EntityName&lt;T&gt;, where?: FilterQuery&lt;T&gt;, options?: CountOptions&lt;T&gt;): Promise&lt;number&gt;</code>",id:"countentityname-entitynamet-where-filterqueryt-options-countoptionst-promisenumber",children:[],level:4},{value:"<code>persist(entity: AnyEntity | Reference&lt;AnyEntity&gt; | (AnyEntity | Reference&lt;AnyEntity&gt;)[]): this</code>",id:"persistentity-anyentity--referenceanyentity--anyentity--referenceanyentity-this",children:[],level:4},{value:"<code>persistAndFlush(entity: AnyEntity | Reference&lt;AnyEntity&gt; | (AnyEntity | Reference&lt;AnyEntity&gt;)[]): Promise&lt;void&gt;</code>",id:"persistandflushentity-anyentity--referenceanyentity--anyentity--referenceanyentity-promisevoid",children:[],level:4},{value:"<code>persistLater(entity: AnyEntity | AnyEntity[]): void</code>",id:"persistlaterentity-anyentity--anyentity-void",children:[],level:4},{value:"<code>remove(entity: T | Reference&lt;T&gt; | (T | Reference&lt;T&gt;)[]): this</code>",id:"removeentity-t--referencet--t--referencet-this",children:[],level:4},{value:"<code>removeAndFlush(entity: AnyEntity | Reference&lt;AnyEntity&gt;): Promise&lt;void&gt;</code>",id:"removeandflushentity-anyentity--referenceanyentity-promisevoid",children:[],level:4},{value:"<code>removeLater(entity: AnyEntity): void</code>",id:"removelaterentity-anyentity-void",children:[],level:4},{value:"<code>flush(): Promise&lt;void&gt;</code>",id:"flush-promisevoid",children:[],level:4},{value:"<code>clear(): void</code>",id:"clear-void",children:[],level:4},{value:"<code>canPopulate(entityName: EntityName&lt;T&gt;, property: string): boolean</code>",id:"canpopulateentityname-entitynamet-property-string-boolean",children:[],level:4},{value:"<code>populate(entities: T | T[], populate: P, where?: FilterQuery&lt;T&gt;, orderBy?: QueryOrderMap, refresh?: boolean, validate?: boolean): Promise&lt;Loaded&lt;T, P&gt; | Loaded&lt;T, P&gt;[]&gt;</code>",id:"populateentities-t--t-populate-p-where-filterqueryt-orderby-queryordermap-refresh-boolean-validate-boolean-promiseloadedt-p--loadedt-p",children:[],level:4},{value:"<code>fork(clear?: boolean, useContext?: boolean): D[typeof EntityManagerType]</code>",id:"forkclear-boolean-usecontext-boolean-dtypeof-entitymanagertype",children:[],level:4},{value:"<code>getUnitOfWork(): UnitOfWork</code>",id:"getunitofwork-unitofwork",children:[],level:4},{value:"<code>getEntityFactory(): EntityFactory</code>",id:"getentityfactory-entityfactory",children:[],level:4},{value:"<code>getEventManager(): EventManager</code>",id:"geteventmanager-eventmanager",children:[],level:4},{value:"<code>isInTransaction(): boolean</code>",id:"isintransaction-boolean",children:[],level:4},{value:"<code>getTransactionContext&lt;T extends Transaction = Transaction&gt;(): T | undefined</code>",id:"gettransactioncontextt-extends-transaction--transaction-t--undefined",children:[],level:4},{value:"<code>getMetadata(): MetadataStorage</code>",id:"getmetadata-metadatastorage",children:[],level:4},{value:"<code>getComparator(): EntityComparator</code>",id:"getcomparator-entitycomparator",children:[],level:4}],p={toc:y};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"getdriver-idatabasedriver"},(0,a.kt)("inlineCode",{parentName:"h4"},"getDriver(): IDatabaseDriver")),(0,a.kt)("p",null,"Gets the Driver instance used by this EntityManager"),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"getconnectiontype-read--write-returntypedgetconnection"},(0,a.kt)("inlineCode",{parentName:"h4"},"getConnection(type?: 'read' | 'write'): ReturnType<D['getConnection']>")),(0,a.kt)("p",null,"Gets the Connection instance, by default returns write connection"),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"getrepositoryentityname-entitynamet-getrepositoryt-u"},(0,a.kt)("inlineCode",{parentName:"h4"},"getRepository(entityName: EntityName<T>): GetRepository<T, U>")),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityRepository")," for given entity, respects ",(0,a.kt)("inlineCode",{parentName:"p"},"customRepository")," option of ",(0,a.kt)("inlineCode",{parentName:"p"},"@Entity"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"entityRepository")," option of ",(0,a.kt)("inlineCode",{parentName:"p"},"MikroORM.init()"),"."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"getvalidator-entityvalidator"},(0,a.kt)("inlineCode",{parentName:"h4"},"getValidator(): EntityValidator")),(0,a.kt)("p",null,"Gets EntityValidator instance"),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"findentityname-entitynamet-where-filterqueryt-options-findoptionst-p-promiseloadedt-p"},(0,a.kt)("inlineCode",{parentName:"h4"},"find(entityName: EntityName<T>, where: FilterQuery<T>, options?: FindOptions<T, P>): Promise<Loaded<T, P>[]>")),(0,a.kt)("p",null,"Finds all entities matching your ",(0,a.kt)("inlineCode",{parentName:"p"},"where")," query. You can pass additional options via the ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface FindOptions<T, P extends Populate<T> = Populate<T>> {\n  populate?: P;\n  orderBy?: QueryOrderMap;\n  limit?: number;\n  offset?: number;\n  refresh?: boolean;\n  convertCustomTypes?: boolean;\n  fields?: string[];\n  schema?: string;\n  flags?: QueryFlag[];\n  groupBy?: string | string[];\n  having?: QBFilterQuery<T>;\n  strategy?: LoadStrategy;\n  filters?: Dictionary<boolean | Dictionary> | string[] | boolean;\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"findentityname-entitynamet-where-filterqueryt-populate-p-orderby-queryordermap-limit-number-offset-number-promiseloadedt-p"},(0,a.kt)("inlineCode",{parentName:"h4"},"find(entityName: EntityName<T>, where: FilterQuery<T>, populate?: P, orderBy?: QueryOrderMap, limit?: number, offset?: number): Promise<Loaded<T, P>[]>")),(0,a.kt)("p",null,"Finds all entities matching your ",(0,a.kt)("inlineCode",{parentName:"p"},"where")," query.\nSame as previous ",(0,a.kt)("inlineCode",{parentName:"p"},"find")," method, just with dedicated parameters for ",(0,a.kt)("inlineCode",{parentName:"p"},"populate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"orderBy"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"limit"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"offset"),"."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"addfiltername-string-cond-filterqueryt--args-dictionary--filterqueryt-entityname-entitynamet-enabled-boolean-void"},(0,a.kt)("inlineCode",{parentName:"h4"},"addFilter(name: string, cond: FilterQuery<T> | ((args: Dictionary) => FilterQuery<T>), entityName?: EntityName<T>[], enabled?: boolean): void")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"setfilterparamsname-string-args-dictionary-void"},(0,a.kt)("inlineCode",{parentName:"h4"},"setFilterParams(name: string, args: Dictionary): void")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"getfilterparamst-extends-dictionary--dictionaryname-string-t"},(0,a.kt)("inlineCode",{parentName:"h4"},"getFilterParams<T extends Dictionary = Dictionary>(name: string): T")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"findandcountentityname-entitynamet-where-filterqueryt-options-findoptionst-p-promiseloadedt-p-number"},(0,a.kt)("inlineCode",{parentName:"h4"},"findAndCount(entityName: EntityName<T>, where: FilterQuery<T>, options?: FindOptions<T, P>): Promise<[Loaded<T, P>[], number]>")),(0,a.kt)("p",null,"Calls ",(0,a.kt)("inlineCode",{parentName:"p"},"em.find()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"em.count()")," with the same arguments (where applicable) and returns the results as tuple\nwhere first element is the array of entities and the second is the count."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"findandcountentityname-entitynamet-where-filterqueryt-populate-p-orderby-queryordermap-limit-number-offset-number-promiseloadedt-p-number"},(0,a.kt)("inlineCode",{parentName:"h4"},"findAndCount(entityName: EntityName<T>, where: FilterQuery<T>, populate?: P, orderBy?: QueryOrderMap, limit?: number, offset?: number): Promise<[Loaded<T, P>[], number]>")),(0,a.kt)("p",null,"Calls ",(0,a.kt)("inlineCode",{parentName:"p"},"em.find()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"em.count()")," with the same arguments (where applicable) and returns the results as tuple\nwhere first element is the array of entities and the second is the count."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"findoneentityname-entitynamet-where-filterqueryt-options-findoneoptionst-p-promiseloadedt-p--null"},(0,a.kt)("inlineCode",{parentName:"h4"},"findOne(entityName: EntityName<T>, where: FilterQuery<T>, options?: FindOneOptions<T, P>): Promise<Loaded<T, P> | null>")),(0,a.kt)("p",null,"Finds first entity matching your ",(0,a.kt)("inlineCode",{parentName:"p"},"where")," query."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"findoneentityname-entitynamet-where-filterqueryt-populate-p-orderby-queryordermap-promiseloadedt-p--null"},(0,a.kt)("inlineCode",{parentName:"h4"},"findOne(entityName: EntityName<T>, where: FilterQuery<T>, populate?: P, orderBy?: QueryOrderMap): Promise<Loaded<T, P> | null>")),(0,a.kt)("p",null,"Finds first entity matching your ",(0,a.kt)("inlineCode",{parentName:"p"},"where")," query."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"findoneorfailentityname-entitynamet-where-filterqueryt-options-findoneorfailoptionst-p-promiseloadedt-p"},(0,a.kt)("inlineCode",{parentName:"h4"},"findOneOrFail(entityName: EntityName<T>, where: FilterQuery<T>, options?: FindOneOrFailOptions<T, P>): Promise<Loaded<T, P>>")),(0,a.kt)("p",null,"Finds first entity matching your ",(0,a.kt)("inlineCode",{parentName:"p"},"where")," query. If nothing found, it will throw an error.\nYou can override the factory for creating this method via ",(0,a.kt)("inlineCode",{parentName:"p"},"options.failHandler")," locally\nor via ",(0,a.kt)("inlineCode",{parentName:"p"},"Configuration.findOneOrFailHandler")," globally."),(0,a.kt)("p",null,"Finds first entity matching your ",(0,a.kt)("inlineCode",{parentName:"p"},"where")," query. If nothing found, it will throw an error."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"findoneorfailentityname-entitynamet-where-filterqueryt-populate-p-orderby-queryordermap-promiseloadedt-p"},(0,a.kt)("inlineCode",{parentName:"h4"},"findOneOrFail(entityName: EntityName<T>, where: FilterQuery<T>, populate?: P, orderBy?: QueryOrderMap): Promise<Loaded<T, P>>")),(0,a.kt)("p",null,"You can override the factory for creating this method via ",(0,a.kt)("inlineCode",{parentName:"p"},"options.failHandler")," locally\nor via ",(0,a.kt)("inlineCode",{parentName:"p"},"Configuration.findOneOrFailHandler")," globally."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"transactionalcb-em-dtypeof-entitymanagertype--promiset-ctx-any-promiset"},(0,a.kt)("inlineCode",{parentName:"h4"},"transactional(cb: (em: D[typeof EntityManagerType]) => Promise<T>, ctx?: any): Promise<T>")),(0,a.kt)("p",null,"Runs your callback wrapped inside a database transaction."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"beginctx-transaction-promisevoid"},(0,a.kt)("inlineCode",{parentName:"h4"},"begin(ctx?: Transaction): Promise<void>")),(0,a.kt)("p",null,"Starts new transaction bound to this EntityManager. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx")," parameter to provide the parent when nesting transactions."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"commit-promisevoid"},(0,a.kt)("inlineCode",{parentName:"h4"},"commit(): Promise<void>")),(0,a.kt)("p",null,"Commits the transaction bound to this EntityManager. Flushes before doing the actual commit query."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"rollback-promisevoid"},(0,a.kt)("inlineCode",{parentName:"h4"},"rollback(): Promise<void>")),(0,a.kt)("p",null,"Rollbacks the transaction bound to this EntityManager."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"lockentity-anyentity-lockmode-lockmode-lockversion-number--date-promisevoid"},(0,a.kt)("inlineCode",{parentName:"h4"},"lock(entity: AnyEntity, lockMode: LockMode, lockVersion?: number | Date): Promise<void>")),(0,a.kt)("p",null,"Runs your callback wrapped inside a database transaction."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"nativeinsertentity-t-promiseprimaryt"},(0,a.kt)("inlineCode",{parentName:"h4"},"nativeInsert(entity: T): Promise<Primary<T>>")),(0,a.kt)("p",null,"Fires native insert query. Calling this has no side effects on the context (identity map)."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"nativeinsertentityname-entitynamet-data-entitydatat-promiseprimaryt"},(0,a.kt)("inlineCode",{parentName:"h4"},"nativeInsert(entityName: EntityName<T>, data: EntityData<T>): Promise<Primary<T>>")),(0,a.kt)("p",null,"Fires native insert query. Calling this has no side effects on the context (identity map)."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"nativeupdateentityname-entitynamet-where-filterqueryt-data-entitydatat-options-updateoptionst-promisenumber"},(0,a.kt)("inlineCode",{parentName:"h4"},"nativeUpdate(entityName: EntityName<T>, where: FilterQuery<T>, data: EntityData<T>, options?: UpdateOptions<T>): Promise<number>")),(0,a.kt)("p",null,"Fires native update query. Calling this has no side effects on the context (identity map)."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"nativedeleteentityname-entitynamet-where-filterqueryt-options-deleteoptionst-promisenumber"},(0,a.kt)("inlineCode",{parentName:"h4"},"nativeDelete(entityName: EntityName<T>, where: FilterQuery<T>, options?: DeleteOptions<T>): Promise<number>")),(0,a.kt)("p",null,"Fires native delete query. Calling this has no side effects on the context (identity map)."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"mapentityname-entitynamet-result-entitydatat-t"},(0,a.kt)("inlineCode",{parentName:"h4"},"map(entityName: EntityName<T>, result: EntityData<T>): T")),(0,a.kt)("p",null,"Maps raw DB result to entity, adding it to current Identity Map. Equivalent to\n",(0,a.kt)("inlineCode",{parentName:"p"},"driver.mapResult()")," followed by ",(0,a.kt)("inlineCode",{parentName:"p"},"em.merge()"),"."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"mergeentity-t-refresh-boolean-t"},(0,a.kt)("inlineCode",{parentName:"h4"},"merge(entity: T, refresh?: boolean): T")),(0,a.kt)("p",null,"Merges given entity to this EntityManager so it becomes managed. You can force refreshing of existing entities\nvia second parameter. By default it will return already loaded entities without modifying them."),(0,a.kt)("p",null,"This is useful when you want to work with cached entities. "),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"mergeentityname-entitynamet-data-entitydatat-refresh-boolean-convertcustomtypes-boolean-t"},(0,a.kt)("inlineCode",{parentName:"h4"},"merge(entityName: EntityName<T>, data: EntityData<T>, refresh?: boolean, convertCustomTypes?: boolean): T")),(0,a.kt)("p",null,"Merges given entity to this EntityManager so it becomes managed. You can force refreshing of existing entities\nvia second parameter. By default it will return already loaded entities without modifying them."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"createentityname-entitynamet-data-entitydatat-newt-p"},(0,a.kt)("inlineCode",{parentName:"h4"},"create(entityName: EntityName<T>, data: EntityData<T>): New<T, P>")),(0,a.kt)("p",null,"Creates new instance of given entity and populates it with given data"),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"assignentity-t-data-entitydatat-options-assignoptions-t"},(0,a.kt)("inlineCode",{parentName:"h4"},"assign(entity: T, data: EntityData<T>, options?: AssignOptions): T")),(0,a.kt)("p",null,"Shortcut for ",(0,a.kt)("inlineCode",{parentName:"p"},"wrap(entity).assign(data, { em })")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"getreferenceentityname-entitynamet-id-primaryt-wrapped-boolean-convertcustomtypes-boolean-t--referencet"},(0,a.kt)("inlineCode",{parentName:"h4"},"getReference(entityName: EntityName<T>, id: Primary<T>, wrapped?: boolean, convertCustomTypes?: boolean): T | Reference<T>")),(0,a.kt)("p",null,"Gets a reference to the entity identified by the given type and identifier without actually loading it, if the entity is not yet loaded"),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"countentityname-entitynamet-where-filterqueryt-options-countoptionst-promisenumber"},(0,a.kt)("inlineCode",{parentName:"h4"},"count(entityName: EntityName<T>, where?: FilterQuery<T>, options?: CountOptions<T>): Promise<number>")),(0,a.kt)("p",null,"Returns total number of entities matching your ",(0,a.kt)("inlineCode",{parentName:"p"},"where")," query."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"persistentity-anyentity--referenceanyentity--anyentity--referenceanyentity-this"},(0,a.kt)("inlineCode",{parentName:"h4"},"persist(entity: AnyEntity | Reference<AnyEntity> | (AnyEntity | Reference<AnyEntity>)[]): this")),(0,a.kt)("p",null,"Tells the EntityManager to make an instance managed and persistent.\nThe entity will be entered into the database at or before transaction commit or as a result of the flush operation."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"persistandflushentity-anyentity--referenceanyentity--anyentity--referenceanyentity-promisevoid"},(0,a.kt)("inlineCode",{parentName:"h4"},"persistAndFlush(entity: AnyEntity | Reference<AnyEntity> | (AnyEntity | Reference<AnyEntity>)[]): Promise<void>")),(0,a.kt)("p",null,"Persists your entity immediately, flushing all not yet persisted changes to the database too.\nEquivalent to ",(0,a.kt)("inlineCode",{parentName:"p"},"em.persist(e).flush()"),"."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"persistlaterentity-anyentity--anyentity-void"},(0,a.kt)("inlineCode",{parentName:"h4"},"persistLater(entity: AnyEntity | AnyEntity[]): void")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"deprecated, use ",(0,a.kt)("inlineCode",{parentName:"p"},"persist()"))),(0,a.kt)("p",null,"Tells the EntityManager to make an instance managed and persistent.\nThe entity will be entered into the database at or before transaction commit or as a result of the flush operation."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"removeentity-t--referencet--t--referencet-this"},(0,a.kt)("inlineCode",{parentName:"h4"},"remove(entity: T | Reference<T> | (T | Reference<T>)[]): this")),(0,a.kt)("p",null,"Marks entity for removal.\nA removed entity will be removed from the database at or before transaction commit or as a result of the flush operation."),(0,a.kt)("p",null,"This method fires ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeDelete")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"afterDelete")," hooks.  "),(0,a.kt)("p",null,"To remove entities by condition, use ",(0,a.kt)("inlineCode",{parentName:"p"},"em.nativeDelete()"),"."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"removeandflushentity-anyentity--referenceanyentity-promisevoid"},(0,a.kt)("inlineCode",{parentName:"h4"},"removeAndFlush(entity: AnyEntity | Reference<AnyEntity>): Promise<void>")),(0,a.kt)("p",null,"Removes an entity instance immediately, flushing all not yet persisted changes to the database too.\nEquivalent to ",(0,a.kt)("inlineCode",{parentName:"p"},"em.remove(e).flush()")),(0,a.kt)("p",null,"This method fires ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeDelete")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"afterDelete")," hooks.  "),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"removelaterentity-anyentity-void"},(0,a.kt)("inlineCode",{parentName:"h4"},"removeLater(entity: AnyEntity): void")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"deprecated use ",(0,a.kt)("inlineCode",{parentName:"p"},"remove()"))),(0,a.kt)("p",null,"Marks entity for removal.\nA removed entity will be removed from the database at or before transaction commit or as a result of the flush operation."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"flush-promisevoid"},(0,a.kt)("inlineCode",{parentName:"h4"},"flush(): Promise<void>")),(0,a.kt)("p",null,"Flushes all changes to objects that have been queued up to now to the database.\nThis effectively synchronizes the in-memory state of managed objects with the database."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"clear-void"},(0,a.kt)("inlineCode",{parentName:"h4"},"clear(): void")),(0,a.kt)("p",null,"Clears the EntityManager. All entities that are currently managed by this EntityManager become detached."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"canpopulateentityname-entitynamet-property-string-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"canPopulate(entityName: EntityName<T>, property: string): boolean")),(0,a.kt)("p",null,"Checks whether given property can be populated on the entity."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"populateentities-t--t-populate-p-where-filterqueryt-orderby-queryordermap-refresh-boolean-validate-boolean-promiseloadedt-p--loadedt-p"},(0,a.kt)("inlineCode",{parentName:"h4"},"populate(entities: T | T[], populate: P, where?: FilterQuery<T>, orderBy?: QueryOrderMap, refresh?: boolean, validate?: boolean): Promise<Loaded<T, P> | Loaded<T, P>[]>")),(0,a.kt)("p",null,"Populate existing entities. Supports nested (conditional) populating."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"forkclear-boolean-usecontext-boolean-dtypeof-entitymanagertype"},(0,a.kt)("inlineCode",{parentName:"h4"},"fork(clear?: boolean, useContext?: boolean): D[typeof EntityManagerType]")),(0,a.kt)("p",null,"Returns new EntityManager instance with its own identity map"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@param clear do we want clear identity map? defaults to true\n@param useContext use request context? should be used only for top level request scope EM, defaults to false\n")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"getunitofwork-unitofwork"},(0,a.kt)("inlineCode",{parentName:"h4"},"getUnitOfWork(): UnitOfWork")),(0,a.kt)("p",null,"Gets the UnitOfWork used by the EntityManager to coordinate operations."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"getentityfactory-entityfactory"},(0,a.kt)("inlineCode",{parentName:"h4"},"getEntityFactory(): EntityFactory")),(0,a.kt)("p",null,"Gets the EntityFactory used by the EntityManager."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"geteventmanager-eventmanager"},(0,a.kt)("inlineCode",{parentName:"h4"},"getEventManager(): EventManager")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"isintransaction-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"isInTransaction(): boolean")),(0,a.kt)("p",null,"Checks whether this EntityManager is currently operating inside a database transaction."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"gettransactioncontextt-extends-transaction--transaction-t--undefined"},(0,a.kt)("inlineCode",{parentName:"h4"},"getTransactionContext<T extends Transaction = Transaction>(): T | undefined")),(0,a.kt)("p",null,"Gets the transaction context (driver dependent object used to make sure queries are executed on same connection)."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"getmetadata-metadatastorage"},(0,a.kt)("inlineCode",{parentName:"h4"},"getMetadata(): MetadataStorage")),(0,a.kt)("p",null,"Gets the MetadataStorage."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"getcomparator-entitycomparator"},(0,a.kt)("inlineCode",{parentName:"h4"},"getComparator(): EntityComparator")),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);