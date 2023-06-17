"use strict";(self.webpackChunkhuxley_website=self.webpackChunkhuxley_website||[]).push([[5314],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,k=d["".concat(u,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),o=n(7294),a=n(4137);function s(e){let{source:t}=e;return o.createElement("video",{controls:!0,playsInline:!0,style:{maxWidth:"100%"}},o.createElement("source",{src:t}))}const i={id:"webhook",title:"Webhook Setup"},u=void 0,l={unversionedId:"spawner/webhook",id:"spawner/webhook",title:"Webhook Setup",description:"If you were brought to this page after purchasing the Bus Spawner Webhook Access product, please make a Spawner support ticket so you can get access to the Webhook Bot to get your Discord webhook URLs.",source:"@site/docs/spawner/webhook.mdx",sourceDirName:"spawner",slug:"/spawner/webhook",permalink:"/docs/spawner/webhook",draft:!1,tags:[],version:"current",lastUpdatedBy:"fisherjacobc",lastUpdatedAt:1687027220,formattedLastUpdatedAt:"Jun 17, 2023",frontMatter:{id:"webhook",title:"Webhook Setup"},sidebar:"spawner",previous:{title:"Teleporting to your Bus when Spawned",permalink:"/docs/spawner/bus-teleport"},next:{title:"Spawner Typings",permalink:"/docs/spawner/typings"}},p={},d=[{value:"Background info",id:"background-info",level:2},{value:"Service Setup (Back-End)",id:"service-setup-back-end",level:2},{value:"Roblox Studio Setup",id:"roblox-studio-setup",level:2},{value:"Bot &amp; Discord Webhook",id:"bot--discord-webhook",level:3},{value:"Spawner Configuration",id:"spawner-configuration",level:3}],c={toc:d},h="wrapper";function k(e){let{components:t,...o}=e;return(0,a.kt)(h,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"NOTICE!",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you were brought to this page after purchasing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Bus Spawner Webhook Access")," product, please make a Spawner support ticket so you can get access to the Webhook Bot to get your Discord webhook URLs.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you want to use the webhook system, you must first purchase the ",(0,a.kt)("inlineCode",{parentName:"p"},"Bus Spawner Webhook Access")," from the ",(0,a.kt)("a",{parentName:"p",href:"https://www.roblox.com/games/refer?PlaceId=11746877837&PageType=GroupDetail&LocalTimestamp=%7BlocalTimestamp%7D"},"product hub"),"."),(0,a.kt)("p",{parentName:"admonition"},"Then, please make a Spawner support ticket so you can get access to the Webhook Bot to get your Discord webhook URLs.")),(0,a.kt)("h2",{id:"background-info"},"Background info"),(0,a.kt)("p",null,"To maximize usability, uptime, and reliability. It is up to ",(0,a.kt)("strong",{parentName:"p"},"you")," to self-host the service that sends the webhooks. But don't worry, all the instructions and code is provided!"),(0,a.kt)("h2",{id:"service-setup-back-end"},"Service Setup (Back-End)"),(0,a.kt)("p",null,"First, you need to make an account at ",(0,a.kt)("a",{parentName:"p",href:"https://www.cloudflare.com/"},"https://www.cloudflare.com/")," if you don't already have one. Dont worry, this is a trusted website used by millions of websites and services, such as Discord. Eventually, you should reach the dashboard page (see below)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dashboard",src:n(5342).Z,width:"2624",height:"1326"})),(0,a.kt)("p",null,"Next, click on the Workers page on the left sidebar (as displayed in the image above). Then, click the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Create application"))," button. Don't worry if you don't already have any created."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Workers page",src:n(7280).Z,width:"2624",height:"1326"})),(0,a.kt)("p",null,"Make sure you are selecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"Workers")," tab, and then click ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Create Worker"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create worker",src:n(4204).Z,width:"2624",height:"1326"})),(0,a.kt)("p",null,"Next, you need to name your worker, and make sure you remember the name and full link. Don't worry though, if you forget it, Cloudflare will still have the name!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Name worker",src:n(1822).Z,width:"2624",height:"1326"})),(0,a.kt)("p",null,"Then, click ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Deploy")),"!"),(0,a.kt)("p",null,"You are almost done with this part!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Worker deployed",src:n(8205).Z,width:"2624",height:"1326"})),(0,a.kt)("p",null,"You still need to edit the code, you should be at the page where it gives you the option to edit the code, so click on that. Copy and paste the code below, and replace the current code in the box on the left. You can watch the video demonstration below!"),(0,a.kt)(s,{source:"/video/docs/spawner/webhook/code.mp4",mdxType:"Video"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'showLineNumbers title="worker.js"',showLineNumbers:!0,title:'"worker.js"'},'"use strict";\n(() => {\n  // dist/worker.js\n  (() => {\n    "use strict";\n    var __webpack_modules__ = {\n      "./src/handler.ts": (__unused_webpack_module, exports) => {\n        Object.defineProperty(exports, "__esModule", { value: true });\n        exports.handleRequest = void 0;\n        function getParam(name, url) {\n          name = name.replace(/[[\\]]/g, "\\\\$&");\n          name = name.replace(/\\//g, "");\n          const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),\n            results = regex.exec(url);\n          if (!results) return null;\n          else if (!results[2]) return "";\n          else if (results[2]) {\n            results[2] = results[2].replace(/\\//g, "");\n          }\n          return decodeURIComponent(results[2].replace(/\\+/g, " "));\n        }\n        async function handleRequest(request) {\n          if (request.url.includes("/post") && request.method == "POST") {\n            let jsonBody = null;\n            if (request.body) jsonBody = await request.json();\n            const url = getParam("webhookurl", request.url);\n            if (!jsonBody) return new Response("Missing Body", { status: 400 });\n            if (!url)\n              return new Response("Missing Webhook URL", { status: 400 });\n            try {\n              const req = await fetch(url, {\n                method: "post",\n                body: JSON.stringify(jsonBody),\n                headers: {\n                  "Content-Type": "application/json",\n                },\n              });\n              if (req.status && req.status == 204)\n                return new Response(null, {\n                  status: 204,\n                });\n              return new Response(\n                `Request Sent! You should see if it sent or not (if status code is not in the 200 range then something went wrong)`,\n                {\n                  status: req.status || 200,\n                }\n              );\n            } catch (error) {\n              return new Response(`Error - Message: ${error}`, { status: 500 });\n            }\n          } else if (\n            request.url.includes("/webhookinfo") &&\n            request.method == "GET"\n          ) {\n            const url = getParam("webhookurl", request.url);\n            if (!url)\n              return new Response("Missing Webhook URL", { status: 400 });\n            try {\n              const req = await fetch(url);\n              return new Response(JSON.stringify(await req.json()), {\n                status: req.status,\n              });\n            } catch (error) {\n              return new Response(`Error - Message: ${error}`, { status: 500 });\n            }\n          } else if (\n            request.url.includes("/thumb") &&\n            request.method == "GET"\n          ) {\n            const userId = getParam("userId", request.url);\n            if (!userId)\n              return new Response("Missing User ID", { status: 400 });\n            const thumbType = getParam("type", request.url);\n            if (!thumbType)\n              return new Response("Missing Thumbnail Type", { status: 400 });\n            try {\n              let req = null;\n              if (thumbType == "0") {\n                req = await fetch(\n                  `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=420x420&format=Png&isCircular=false`\n                );\n              } else {\n                req = await fetch(\n                  `https://thumbnails.roblox.com/v1/users/avatar-bust?userIds=${userId}&size=420x420&format=Png&isCircular=false`\n                );\n              }\n              return new Response((await req.json()).data[0].imageUrl, {\n                status: req.status,\n              });\n            } catch (error) {\n              return new Response(`Error - Message: ${error}`, { status: 500 });\n            }\n          } else {\n            return new Response("Uh oh!", { status: 404 });\n          }\n        }\n        exports.handleRequest = handleRequest;\n      },\n    };\n    var __webpack_module_cache__ = {};\n    function __webpack_require__(moduleId) {\n      var cachedModule = __webpack_module_cache__[moduleId];\n      if (cachedModule !== void 0) {\n        return cachedModule.exports;\n      }\n      var module = (__webpack_module_cache__[moduleId] = {\n        exports: {},\n      });\n      __webpack_modules__[moduleId](\n        module,\n        module.exports,\n        __webpack_require__\n      );\n      return module.exports;\n    }\n    var __webpack_exports__ = {};\n    (() => {\n      var exports = __webpack_exports__;\n      Object.defineProperty(exports, "__esModule", { value: true });\n      const handler_1 = __webpack_require__("./src/handler.ts");\n      addEventListener("fetch", (event) => {\n        event.respondWith(handler_1.handleRequest(event.request));\n      });\n    })();\n  })();\n})();\n//# sourceMappingURL=worker.js.map\n')),(0,a.kt)("p",null,"Last, but not least. Click on ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Save & Deploy")),", and you are done with this part!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Worker finished and deployed",src:n(941).Z,width:"831",height:"520"})),(0,a.kt)("p",null,"Now, for the next part of this setup, have that full ",(0,a.kt)("inlineCode",{parentName:"p"},"https://workers.dev")," link handy!"),(0,a.kt)("h2",{id:"roblox-studio-setup"},"Roblox Studio Setup"),(0,a.kt)("h3",{id:"bot--discord-webhook"},"Bot & Discord Webhook"),(0,a.kt)("p",null,"First, you need to invite the ",(0,a.kt)("inlineCode",{parentName:"p"},"Bus Spawner Webhook")," bot (you can ping it in the Huxley Sales server) and invite it. You already should have been added to the system, so now in your own server, do ",(0,a.kt)("inlineCode",{parentName:"p"},"/generate-webhook")," and specify the channel. It should now give you a Discord webhook link."),(0,a.kt)("admonition",{title:"NOTICE!",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If it doesn't let you generate one, make a ticket in the Discord server."),(0,a.kt)("p",{parentName:"admonition"},"If the bot doesn't respond, please notify fisher#8036 on Discord."),(0,a.kt)("p",{parentName:"admonition"},"The webhook you put in the spawner configuration ",(0,a.kt)("strong",{parentName:"p"},"MUST")," be generated by the Discord bot, or else the spawner will reject it. (It knows :O)")),(0,a.kt)("h3",{id:"spawner-configuration"},"Spawner Configuration"),(0,a.kt)("p",null,"Look for the ",(0,a.kt)("inlineCode",{parentName:"p"},"webhookSettings")," options in the spawner configuration. Make the following edits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"webhookServerUrl")," to the full ",(0,a.kt)("inlineCode",{parentName:"li"},"https://workers.dev")," you have from earlier."),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"webhookClientUrl")," to the Discord webhook generated by the Discord bot.")),(0,a.kt)("p",null,"Now, you are done!"))}k.isMDXComponent=!0},4204:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/createworker-ee67335721a000042f85605731c21b34.png"},5342:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dashboard-b132055c8770d1ad5126c26bd6860e77.png"},1822:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/deployworker-063d4740d5fd09b9ed0a4936141b027d.png"},941:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/saveanddeploy-e983f572d15bca3ffa3bd790fbe7d929.png"},8205:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/workerdeployed-d34c8b97f2bac231013771b37ca5d7b0.png"},7280:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/workersdashboard-c6e00c909383ac00fceff98ef4ce2a7b.png"}}]);