"use strict";(self.webpackChunkhuxley_website=self.webpackChunkhuxley_website||[]).push([[7933],{1297:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var s=t(6070),o=t(5710);t(758);function r(e){let{source:n}=e;return(0,s.jsx)("video",{controls:!0,playsInline:!0,style:{maxWidth:"100%"},children:(0,s.jsx)("source",{src:n})})}const a={id:"webhook",title:"Webhook Setup"},i=void 0,d={id:"spawner/webhook",title:"Webhook Setup",description:"If you were brought to this page after purchasing the Bus Spawner Webhook Access product, please make a Spawner support ticket so you can get access to the Webhook Bot to get your Discord webhook URLs.",source:"@site/docs/spawner/webhook.mdx",sourceDirName:"spawner",slug:"/spawner/webhook",permalink:"/docs/spawner/webhook",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Lad",lastUpdatedAt:1721182839e3,frontMatter:{id:"webhook",title:"Webhook Setup"},sidebar:"spawner",previous:{title:"Teleporting to your Bus when Spawned",permalink:"/docs/spawner/bus-teleport"},next:{title:"Spawner Typings",permalink:"/docs/spawner/typings"}},c={},l=[{value:"Background info",id:"background-info",level:2},{value:"Service Setup (Back-End)",id:"service-setup-back-end",level:2},{value:"Roblox Studio Setup",id:"roblox-studio-setup",level:2},{value:"Bot &amp; Discord Webhook",id:"bot--discord-webhook",level:3},{value:"Spawner Configuration",id:"spawner-configuration",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{title:"NOTICE!",type:"caution",children:(0,s.jsxs)(n.p,{children:["If you were brought to this page after purchasing the ",(0,s.jsx)(n.code,{children:"Bus Spawner Webhook Access"})," product, please make a Spawner support ticket so you can get access to the Webhook Bot to get your Discord webhook URLs."]})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["If you want to use the webhook system, you must first purchase the ",(0,s.jsx)(n.code,{children:"Bus Spawner Webhook Access"})," from the ",(0,s.jsx)(n.a,{href:"https://www.roblox.com/games/refer?PlaceId=11746877837&PageType=GroupDetail&LocalTimestamp=%7BlocalTimestamp%7D",children:"product hub"}),"."]}),(0,s.jsx)(n.p,{children:"Then, please make a Spawner support ticket so you can get access to the Webhook Bot to get your Discord webhook URLs."})]}),"\n",(0,s.jsx)(n.h2,{id:"background-info",children:"Background info"}),"\n",(0,s.jsxs)(n.p,{children:["To maximize usability, uptime, and reliability. It is up to ",(0,s.jsx)(n.strong,{children:"you"})," to self-host the service that sends the webhooks. But don't worry, all the instructions and code is provided!"]}),"\n",(0,s.jsx)(n.h2,{id:"service-setup-back-end",children:"Service Setup (Back-End)"}),"\n",(0,s.jsxs)(n.p,{children:["First, you need to make an account at ",(0,s.jsx)(n.a,{href:"https://www.cloudflare.com/",children:"https://www.cloudflare.com/"})," if you don't already have one. Dont worry, this is a trusted website used by millions of websites and services, such as Discord. Eventually, you should reach the dashboard page (see below)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Dashboard",src:t(9126).A+"",width:"2624",height:"1326"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, click on the Workers page on the left sidebar (as displayed in the image above). Then, click the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Create application"})})," button. Don't worry if you don't already have any created."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Workers page",src:t(7863).A+"",width:"2624",height:"1326"})}),"\n",(0,s.jsxs)(n.p,{children:["Make sure you are selecting the ",(0,s.jsx)(n.code,{children:"Workers"})," tab, and then click ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Create Worker"})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create worker",src:t(3402).A+"",width:"2624",height:"1326"})}),"\n",(0,s.jsx)(n.p,{children:"Next, you need to name your worker, and make sure you remember the name and full link. Don't worry though, if you forget it, Cloudflare will still have the name!"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Name worker",src:t(535).A+"",width:"2624",height:"1326"})}),"\n",(0,s.jsxs)(n.p,{children:["Then, click ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Deploy"})}),"!"]}),"\n",(0,s.jsx)(n.p,{children:"You are almost done with this part!"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Worker deployed",src:t(4256).A+"",width:"2624",height:"1326"})}),"\n",(0,s.jsx)(n.p,{children:"You still need to edit the code, you should be at the page where it gives you the option to edit the code, so click on that. Copy and paste the code below, and replace the current code in the box on the left. You can watch the video demonstration below!"}),"\n","\n",(0,s.jsx)(r,{source:"/video/docs/spawner/webhook/code.mp4"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'showLineNumbers title="worker.js"',children:'"use strict";\n(() => {\n  // dist/worker.js\n  (() => {\n    "use strict";\n    var __webpack_modules__ = {\n      "./src/handler.ts": (__unused_webpack_module, exports) => {\n        Object.defineProperty(exports, "__esModule", { value: true });\n        exports.handleRequest = void 0;\n        function getParam(name, url) {\n          name = name.replace(/[[\\]]/g, "\\\\$&");\n          name = name.replace(/\\//g, "");\n          const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),\n            results = regex.exec(url);\n          if (!results) return null;\n          else if (!results[2]) return "";\n          else if (results[2]) {\n            results[2] = results[2].replace(/\\//g, "");\n          }\n          return decodeURIComponent(results[2].replace(/\\+/g, " "));\n        }\n        async function handleRequest(request) {\n          if (request.url.includes("/post") && request.method == "POST") {\n            let jsonBody = null;\n            if (request.body) jsonBody = await request.json();\n            const url = getParam("webhookurl", request.url);\n            if (!jsonBody) return new Response("Missing Body", { status: 400 });\n            if (!url)\n              return new Response("Missing Webhook URL", { status: 400 });\n            try {\n              const req = await fetch(url, {\n                method: "post",\n                body: JSON.stringify(jsonBody),\n                headers: {\n                  "Content-Type": "application/json",\n                },\n              });\n              if (req.status && req.status == 204)\n                return new Response(null, {\n                  status: 204,\n                });\n              return new Response(\n                `Request Sent! You should see if it sent or not (if status code is not in the 200 range then something went wrong)`,\n                {\n                  status: req.status || 200,\n                }\n              );\n            } catch (error) {\n              return new Response(`Error - Message: ${error}`, { status: 500 });\n            }\n          } else if (\n            request.url.includes("/webhookinfo") &&\n            request.method == "GET"\n          ) {\n            const url = getParam("webhookurl", request.url);\n            if (!url)\n              return new Response("Missing Webhook URL", { status: 400 });\n            try {\n              const req = await fetch(url);\n              return new Response(JSON.stringify(await req.json()), {\n                status: req.status,\n              });\n            } catch (error) {\n              return new Response(`Error - Message: ${error}`, { status: 500 });\n            }\n          } else if (\n            request.url.includes("/thumb") &&\n            request.method == "GET"\n          ) {\n            const userId = getParam("userId", request.url);\n            if (!userId)\n              return new Response("Missing User ID", { status: 400 });\n            const thumbType = getParam("type", request.url);\n            if (!thumbType)\n              return new Response("Missing Thumbnail Type", { status: 400 });\n            try {\n              let req = null;\n              if (thumbType == "0") {\n                req = await fetch(\n                  `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=420x420&format=Png&isCircular=false`\n                );\n              } else {\n                req = await fetch(\n                  `https://thumbnails.roblox.com/v1/users/avatar-bust?userIds=${userId}&size=420x420&format=Png&isCircular=false`\n                );\n              }\n              return new Response((await req.json()).data[0].imageUrl, {\n                status: req.status,\n              });\n            } catch (error) {\n              return new Response(`Error - Message: ${error}`, { status: 500 });\n            }\n          } else {\n            return new Response("Uh oh!", { status: 404 });\n          }\n        }\n        exports.handleRequest = handleRequest;\n      },\n    };\n    var __webpack_module_cache__ = {};\n    function __webpack_require__(moduleId) {\n      var cachedModule = __webpack_module_cache__[moduleId];\n      if (cachedModule !== void 0) {\n        return cachedModule.exports;\n      }\n      var module = (__webpack_module_cache__[moduleId] = {\n        exports: {},\n      });\n      __webpack_modules__[moduleId](\n        module,\n        module.exports,\n        __webpack_require__\n      );\n      return module.exports;\n    }\n    var __webpack_exports__ = {};\n    (() => {\n      var exports = __webpack_exports__;\n      Object.defineProperty(exports, "__esModule", { value: true });\n      const handler_1 = __webpack_require__("./src/handler.ts");\n      addEventListener("fetch", (event) => {\n        event.respondWith(handler_1.handleRequest(event.request));\n      });\n    })();\n  })();\n})();\n//# sourceMappingURL=worker.js.map\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Last, but not least. Click on ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Save & Deploy"})}),", and you are done with this part!"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Worker finished and deployed",src:t(8729).A+"",width:"831",height:"520"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, for the next part of this setup, have that full ",(0,s.jsx)(n.code,{children:"https://workers.dev"})," link handy!"]}),"\n",(0,s.jsx)(n.h2,{id:"roblox-studio-setup",children:"Roblox Studio Setup"}),"\n",(0,s.jsx)(n.h3,{id:"bot--discord-webhook",children:"Bot & Discord Webhook"}),"\n",(0,s.jsxs)(n.p,{children:["First, you need to invite the ",(0,s.jsx)(n.code,{children:"Bus Spawner Webhook"})," bot (you can ping it in the Huxley Sales server) and invite it. You already should have been added to the system, so now in your own server, do ",(0,s.jsx)(n.code,{children:"/generate-webhook"})," and specify the channel. It should now give you a Discord webhook link."]}),"\n",(0,s.jsxs)(n.admonition,{title:"NOTICE!",type:"caution",children:[(0,s.jsx)(n.p,{children:"If it doesn't let you generate one, make a ticket in the Discord server."}),(0,s.jsx)(n.p,{children:"If the bot doesn't respond, please notify fisher#8036 on Discord."}),(0,s.jsxs)(n.p,{children:["The webhook you put in the spawner configuration ",(0,s.jsx)(n.strong,{children:"MUST"})," be generated by the Discord bot, or else the spawner will reject it. (It knows ",":O",")"]})]}),"\n",(0,s.jsx)(n.h3,{id:"spawner-configuration",children:"Spawner Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Look for the ",(0,s.jsx)(n.code,{children:"webhookSettings"})," options in the spawner configuration. Make the following edits:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Set ",(0,s.jsx)(n.code,{children:"webhookServerUrl"})," to the full ",(0,s.jsx)(n.code,{children:"https://workers.dev"})," you have from earlier."]}),"\n",(0,s.jsxs)(n.li,{children:["Set ",(0,s.jsx)(n.code,{children:"webhookClientUrl"})," to the Discord webhook generated by the Discord bot."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Now, you are done!"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},3402:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/createworker-ee67335721a000042f85605731c21b34.png"},9126:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dashboard-b132055c8770d1ad5126c26bd6860e77.png"},535:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/deployworker-063d4740d5fd09b9ed0a4936141b027d.png"},8729:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/saveanddeploy-e983f572d15bca3ffa3bd790fbe7d929.png"},4256:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/workerdeployed-d34c8b97f2bac231013771b37ca5d7b0.png"},7863:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/workersdashboard-c6e00c909383ac00fceff98ef4ce2a7b.png"},5710:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(758);const o={},r=s.createContext(o);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);