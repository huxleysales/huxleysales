"use strict";(self.webpackChunkhuxley_website=self.webpackChunkhuxley_website||[]).push([[6752],{409:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(6070),a=t(5710);const o={id:"advanced-spawning",title:"Advanced Spawning Setup"},i=void 0,r={id:"spawner/advanced-spawning",title:"Advanced Spawning Setup",description:"What does Advanced Spawning mean?",source:"@site/docs/spawner/advanced-spawning.mdx",sourceDirName:"spawner",slug:"/spawner/advanced-spawning",permalink:"/docs/spawner/advanced-spawning",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Fisher",lastUpdatedAt:1721182909e3,frontMatter:{id:"advanced-spawning",title:"Advanced Spawning Setup"},sidebar:"spawner",previous:{title:"Clothing",permalink:"/docs/spawner/category-types/clothing"},next:{title:"Teleporting to your Bus when Spawned",permalink:"/docs/spawner/bus-teleport"}},d={},l=[{value:"What does Advanced Spawning mean?",id:"what-does-advanced-spawning-mean",level:2},{value:"Setup",id:"setup",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"what-does-advanced-spawning-mean",children:"What does Advanced Spawning mean?"}),"\n",(0,s.jsx)(n.p,{children:'Advanced spawning means that to the player, the buses will spawn as normal; however, this way decreases lag in your game by almost 50%, as most lag comes from the buses.\nWhile sitting in server storage, it takes up a lot of the games memory which causes it to lag. This new method of spawning decreases the lag by using one model for all buses that use the same model anyways.\nSo all the buses with the model "2015 Thomas C2" will only use one actual roblox model.'}),"\n",(0,s.jsxs)(n.p,{children:["If you are ",(0,s.jsx)(n.strong,{children:"not"})," planning on using the advanced option, you may delete the ",(0,s.jsx)(n.code,{children:"BusLocations"})," Folder in workspace."]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["First, go to your configuration and set the ",(0,s.jsx)(n.code,{children:"busModelSpawnType"})," value to ",(0,s.jsx)(n.code,{children:'"advanced"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.img,{alt:"Config Image with the busModelSpawnType",src:t(4028).A+"",width:"489",height:"297"}),(0,s.jsx)("br",{})," ",(0,s.jsx)(n.img,{alt:"Config Image with the busModelSpawnType now set to &quot;advanced&quot;",src:t(2277).A+"",width:"436",height:"304"})]}),"\n",(0,s.jsxs)(n.li,{children:['Then, for this example we will be having our "model" be a "2015 Thomas C2" - For all buses that will just be using the same "2015 Thomas C2", go and set the ',(0,s.jsx)(n.code,{children:"ModelName"}),' attribute to "2015 Thomas C2". ',(0,s.jsx)("br",{}),(0,s.jsx)(n.img,{alt:"Gif changing the Model Name",src:t(3089).A+"",width:"367",height:"344"})]}),"\n",(0,s.jsxs)(n.li,{children:["Now, make sure the ",(0,s.jsx)(n.code,{children:"BusLocations"})," Folder is ungrouped from the ",(0,s.jsx)(n.code,{children:"WORKSPACE-UNGROUP"})," folder. Now you can move the arrow whereever you want it to go. The bus will spawn in the very center of that part. And the front of the bus is facing in the direction of the arrow. ",(0,s.jsx)("br",{}),(0,s.jsx)(n.img,{alt:"Moving the Arrow",src:t(1824).A+"",width:"1920",height:"1017"})]}),"\n",(0,s.jsxs)(n.li,{children:["**Repeat Step 3 For each bus with the Model of 2015 Thomas C2 (",(0,s.jsx)(n.em,{children:"or whatever other model"}),") -",(0,s.jsx)(n.em,{children:"Remember to rename the workspace part to the corresponding bus number"})," **(The parts will turn transparent automatically once the game is played.)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Repeat Steps 2-4 For each Model you have"})}),"\n",(0,s.jsxs)(n.li,{children:["Spawn your bus now with less lag. In this example we made the workspace part visible for you to see.\n",(0,s.jsx)(n.img,{alt:"Spawning a bus with advanced spawning",src:t(4930).A+"",width:"1920",height:"1017"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3089:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/busModelName-92144bc3b29f5e18004836285c78c877.gif"},4028:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/busModelSpawnTypeConfig-6092ed7967423c369e917f4778a74583.png"},2277:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/busModelSpawnTypeConfigAdv-40142c4fb04032cc364eb25809a54384.png"},1824:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/freeMovingArrow-649309ac58f882af89b1906fc71c51ff.gif"},4930:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/spawnBusAdvanced-c5d39c3d262415534e6fd01eb0ed8e3f.gif"},5710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(758);const a={},o=s.createContext(a);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);