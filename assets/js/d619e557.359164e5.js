"use strict";(self.webpackChunkhuxley_website=self.webpackChunkhuxley_website||[]).push([[7378],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(r),m=i,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:i,o[1]=a;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3209:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var n=r(7462),i=(r(7294),r(4137));const s={id:"psi-guide",title:"Air Pressure Guide"},o=void 0,a={unversionedId:"buses/customization/psi-guide",id:"buses/customization/psi-guide",title:"Air Pressure Guide",description:"If you wish to disable this, set BusSettings.PSI_Enabled in the BusSettings script to false",source:"@site/docs/buses/customization/psi-guide.mdx",sourceDirName:"buses/customization",slug:"/buses/customization/psi-guide",permalink:"/docs/buses/customization/psi-guide",draft:!1,tags:[],version:"current",lastUpdatedBy:"Fisher",lastUpdatedAt:1721173907,formattedLastUpdatedAt:"Jul 16, 2024",frontMatter:{id:"psi-guide",title:"Air Pressure Guide"},sidebar:"buses",previous:{title:"Customization",permalink:"/docs/category/customization"},next:{title:"ROBLOX Studio Help",permalink:"/docs/category/roblox-studio-help"}},l={},u=[{value:"Information about Air Pressure (PSI)",id:"information-about-air-pressure-psi",level:2},{value:"Ways Pressure is loss",id:"ways-pressure-is-loss",level:2},{value:"Questions",id:"questions",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"If you wish to disable this, set ",(0,i.kt)("inlineCode",{parentName:"strong"},"BusSettings.PSI_Enabled")," in the BusSettings script to ",(0,i.kt)("inlineCode",{parentName:"strong"},"false"))),(0,i.kt)("h2",{id:"information-about-air-pressure-psi"},"Information about Air Pressure (PSI)"),(0,i.kt)("p",null,"With the Air Pressure feature enabled, the bus has to reach ",(0,i.kt)("strong",{parentName:"p"},"50 PSI in order to disable the parking brake."),"\nIf the PSI is below 50, a ",(0,i.kt)("inlineCode",{parentName:"p"},"LOW AIR PRESSURE")," Pop-Up will appear."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1122983719792300163/1123072749817045012/image.png",alt:"Informational Pic"})),(0,i.kt)("p",null,"If you are driving, and the PSI drops down to below 40, the parking brake will re-enable and the ",(0,i.kt)("inlineCode",{parentName:"p"},"LOW AIR PRESSURE")," Pop-Up will re-appear again."),(0,i.kt)("h2",{id:"ways-pressure-is-loss"},"Ways Pressure is loss"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pressing the brakes (Pressing S)"),(0,i.kt)("li",{parentName:"ul"},"Using the Parking Brake"),(0,i.kt)("li",{parentName:"ul"},"Using a Air-Powered Service Door")),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"If my door is Electric, how do I disable the Pressure Loss on it?"),"\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"Bus Settings")," script has an option in it for Door Pressure Loss, if you want to disable Air Pressure Loss on the service door, set ",(0,i.kt)("inlineCode",{parentName:"p"},"BusSettings.PSI_ServiceDoor")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"What will it be like if I disable it?"),"\nIf you disable it, the bus will allow you to disable the parking brake without needing PSI, and you would be able to drive around. PSI is for realism, its your choice to disable it."))))}d.isMDXComponent=!0}}]);