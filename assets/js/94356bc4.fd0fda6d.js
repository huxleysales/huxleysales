"use strict";(self.webpackChunkhuxley_website=self.webpackChunkhuxley_website||[]).push([[2235],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(4137));const i={id:"setup",title:"Setup"},o=void 0,p={unversionedId:"spawner/setup",id:"spawner/setup",title:"Setup",description:"Initial Setup",source:"@site/docs/spawner/setup.mdx",sourceDirName:"spawner",slug:"/spawner/setup",permalink:"/docs/spawner/setup",draft:!1,tags:[],version:"current",lastUpdatedBy:"TheLadderon",lastUpdatedAt:1687208729,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{id:"setup",title:"Setup"},sidebar:"spawner",previous:{title:"Introduction",permalink:"/docs/spawner/"},next:{title:"Configuration",permalink:"/docs/spawner/config"}},s={},l=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"Adding Buses",id:"adding-buses",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Model Name &amp; It&#39;s use",id:"model-name--its-use",level:2}],d={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,r.kt)("p",null,"Once you have imported the ",(0,r.kt)("inlineCode",{parentName:"p"},".RBXM")," file that you have downloaded, ungroup everything in the folder where it asks you to."),(0,r.kt)("h2",{id:"adding-buses"},"Adding Buses"),(0,r.kt)("p",null,"To add buses to the spawner, move the model into the 'Buses' folder within ServerStorage."),(0,r.kt)("p",null,"Next, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"ReplicatedStorage -> Buses -> Spawner -> Data")," and pick a category. You should start with ",(0,r.kt)("inlineCode",{parentName:"p"},"Category1")," for now. Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"BUSNUMBERHEREEXAMPLE")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration")," Item and paste it into which category you would like."),(0,r.kt)("p",null,"The categories are listed in order 1-4."),(0,r.kt)("p",null,"Once you have pasted the value into the folder, rename the value to the bus name and check the ",(0,r.kt)("inlineCode",{parentName:"p"},"Attributes")," section of the value in the Properties tab."),(0,r.kt)("p",null,"You will see different values. You are free to customize these to your liking."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AssignedDriver"),(0,r.kt)("td",{parentName:"tr",align:"center"},"String"),(0,r.kt)("td",{parentName:"tr",align:"right"},"The ",(0,r.kt)("strong",{parentName:"td"},"ROBLOX User Id")," of the player who you want assigned to the bus")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Available"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"right"},"If the bus is available. To make out of service check the ",(0,r.kt)("inlineCode",{parentName:"td"},"Servicing")," attribute, this is used to tell if the bus has been spawned. ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"Editing this value may mess up how the spawner deals with buses!")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CurrentDriver"),(0,r.kt)("td",{parentName:"tr",align:"center"},"String"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Internal information used by the spawner to know who is driving the bus. ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"Editing this value may mess up how the spawner deals with buses!")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("td",{parentName:"tr",align:"center"},"String"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Description of the bus that the player can see when spawning it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Image"),(0,r.kt)("td",{parentName:"tr",align:"center"},"String"),(0,r.kt)("td",{parentName:"tr",align:"right"},"The ",(0,r.kt)("strong",{parentName:"td"},"Image ID")," that the player can see when spawning it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ModelName"),(0,r.kt)("td",{parentName:"tr",align:"center"},"String"),(0,r.kt)("td",{parentName:"tr",align:"right"},"The Name of Bus Model (ex: 2020 ICCE) that the player can see when spawning it ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"SEE ",(0,r.kt)("a",{parentName:"em",href:"#model-name--its-use"},"Model Name & It's use"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Servicing"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Used by the spawner to know if the bus is in service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Spare"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Used by the spawner to know if the bus is a spare.")))),(0,r.kt)("h2",{id:"model-name--its-use"},"Model Name & It's use"),(0,r.kt)("p",null,"The Model Name Attribute is primarily used for showing the user what the model bus is when they spawn it."),(0,r.kt)("p",null,"In your ",(0,r.kt)("a",{parentName:"p",href:"config"},"configuration"),", you can see there is a value named ",(0,r.kt)("inlineCode",{parentName:"p"},"busModelSpawnType"),". It is set to ",(0,r.kt)("inlineCode",{parentName:"p"},'"basic"')," and recommended thst way for new users."),(0,r.kt)("p",null,"If you want to set it to ",(0,r.kt)("inlineCode",{parentName:"p"},'"advanced"'),", that is fine and advanced does increase performance by a lot, as each bus model adds on to server lag, which then goes impacts all players."),(0,r.kt)("p",null,"To see how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},'"advanced"')," option, ",(0,r.kt)("a",{parentName:"p",href:"advanced-spawning"},"see here.")),(0,r.kt)("p",null,"If you are ",(0,r.kt)("strong",{parentName:"p"},"not")," planning on using the advanced option, you may delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"BusLocations")," Folder in workspace."))}m.isMDXComponent=!0}}]);