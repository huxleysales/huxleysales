"use strict";(self.webpackChunkhuxley_website=self.webpackChunkhuxley_website||[]).push([[3653],{7349:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=o(6070),r=o(5710);const i={id:"typings",title:"Spawner Typings"},s=void 0,l={id:"spawner/typings",title:"Spawner Typings",description:"LUAU",source:"@site/docs/spawner/typings.mdx",sourceDirName:"spawner",slug:"/spawner/typings",permalink:"/docs/spawner/typings",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Fisher",lastUpdatedAt:1721182909e3,frontMatter:{id:"typings",title:"Spawner Typings"},sidebar:"spawner",previous:{title:"Webhook Setup",permalink:"/docs/spawner/webhook"}},a={},c=[{value:"LUAU",id:"luau",level:2},{value:"Full typings file",id:"full-typings-file",level:2},{value:"ColorSchemeOption",id:"colorschemeoption",level:2},{value:"CategoryTypeOption",id:"categorytypeoption",level:2},{value:"BusResult *",id:"busresult-",level:2},{value:"ThemeConfig",id:"themeconfig",level:2},{value:"CategoryConfig",id:"categoryconfig",level:2},{value:"CategoryConfigs",id:"categoryconfigs",level:2},{value:"GroupConfig",id:"groupconfig",level:2},{value:"WebhookConfig",id:"webhookconfig",level:2},{value:"Config",id:"config",level:2},{value:"EventResponse<code>&lt;T&gt;</code>",id:"eventresponset",level:2},{value:"NotificationObject",id:"notificationobject",level:2},{value:"ColorSchemeConfig",id:"colorschemeconfig",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"luau",children:"LUAU"}),"\n",(0,t.jsxs)(n.p,{children:["This uses LUAU types. I recommend reading more about it to understand how it works. ",(0,t.jsx)(n.a,{href:"https://luau-lang.org/typecheck",children:"https://luau-lang.org/typecheck"})]}),"\n",(0,t.jsx)(n.h2,{id:"full-typings-file",children:"Full typings file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",metastring:'showLineNumbers title="SpawnerTypings"',children:'--!strict\nexport type ColorSchemeOption = "dark" | "light" | "blue";\nexport type CategoryTypeOption = "open" | "rank" | "clothing" | "gamepass" | "premium" --| "mypod"\n\nexport type BusResult = "NO_WORKSPACE_FOLDER" | "NO_MODELS_FOLDER" | "NO_BUS_FOUND"\nexport type SpawnBusResult = BusResult | "UNABLE_TO_SPAWN" | "ALREADY_HAS_BUS_SPAWNED" | "PERMISSION_DENIED" | "NO_MODEL_GIVEN" | "INVALID_MODEL_GIVEN" | "UNABLE_TO_TELEPORT_BUS" | "UNABLE_TO_TELEPORT_PLAYER" | "SPAWNED"\nexport type DespawnBusResult = BusResult | "UNABLE_TO_DESPAWN" | "DESPAWNED_NOT_DESTROYED" | "DESTROYED_NOT_AVAILABLE" |"DESPAWNED"\nexport type RefuelBusResult = BusResult | "UNABLE_TO_REFUEL" | "REFUELED"\nexport type TurnOffBusResult = BusResult | "UNABLE_TO_TURN_BUS_OFF" | "TURNED_OFF_BUS"\n\nexport type WebhookReceiever = "discord" | "other"\n\nexport type ThemeConfig = {\n\ttitle: string;\n\tcolorScheme: ColorSchemeOption;\n\tlogoImageId: number;\n}\n\nexport type CategoryConfig = {\n\ttitle: string;\n\tcategoryType: CategoryTypeOption;\n\tassetId: number?;\n\tminimumRank: number?;\n}\n\nexport type CategoryConfigs = {\n\tCategory1: CategoryConfig;\n\tCategory2: CategoryConfig?;\n\tCategory3: CategoryConfig?;\n\tCategory4: CategoryConfig?;\n\tCategory5: CategoryConfig?;\n}\n\nexport type GroupConfig = {\n\tenabled: boolean;\n\tgroupId: number;\n\tminimumSpawnerRank: number;\n\tminimumAdminRank: number;\n\tallowVipOwnersServerAdmin: boolean;\n}\n\nexport type WebhookConfig = {\n\tenabled: boolean;\n\treceiver: WebhookReceiever;\n\twebhookServerUrl: string;\n\twebhookClientUrl: string;\n\tbodies: {[string]: {}}\n}\n\nexport type Config = {\n\ttheme: ThemeConfig;\n\tcategories: CategoryConfigs;\n\tgroupSettings: GroupConfig;\n\twebhookSettings: WebhookConfig;\n\tbusModelsLocation: Folder;\n\tdepsawnOnPlayerLeave: boolean;\n\tteleportPlayerToBus: boolean;\n\tbusModelSpawnType: "basic" | "advanced";\n}\n\nexport type EventResponse<T> = {\n\tstatus: "OK" | "ERROR";\n\tmessage: string;\n\tdata: T;\n}\n\nexport type NotificationObject = {\n\tplrName: string;\n\tplrId: number;\n\tbody: string;\n\tglobal: boolean?;\n}\n\n\nexport type ColorSchemeConfig = {\n\tprimary: Color3;\n\tsecondary: Color3;\n\ttertiary: Color3;\n\tinfoBackgroundColor: Color3;\n\tinfoContentBackgroundColor: Color3;\n\tprimaryTextColor: Color3;\n\tdashboardButtonColor: Color3;\n\tdashboardBoxColor: Color3;\n\tdashboardNAColor: Color3;\n\tnavListTextColor: Color3;\n\twelcomeTextColor: Color3;\n\tdesignerTextColor: Color3;\n\tspawnerButtonColor: Color3;\n\tassignmentTextColor: Color3;\n\tnotificationStrokeColor: Color3;\n\tcontentFrameBackgroundId: number;\n\tnotificationFrameBackgroundId: number;\n\tdashboardIconId: number;\n\tbusIconId: number;\n}\n\nreturn nil;\n'})}),"\n",(0,t.jsx)(n.h2,{id:"colorschemeoption",children:"ColorSchemeOption"}),"\n",(0,t.jsx)(n.p,{children:"A List of Options for the Color Scheme"}),"\n",(0,t.jsx)(n.h2,{id:"categorytypeoption",children:"CategoryTypeOption"}),"\n",(0,t.jsx)(n.p,{children:"A List of Options for the Category Type"}),"\n",(0,t.jsx)(n.h2,{id:"busresult-",children:"BusResult *"}),"\n",(0,t.jsxs)(n.p,{children:["(Applies for ",(0,t.jsx)(n.strong,{children:"all"})," bus result types) List of Options for the end result depending on the kind of bus event"]}),"\n",(0,t.jsx)(n.h2,{id:"themeconfig",children:"ThemeConfig"}),"\n",(0,t.jsx)(n.p,{children:"Contains items for configuring the theme in the spawner configuration"}),"\n",(0,t.jsx)(n.h2,{id:"categoryconfig",children:"CategoryConfig"}),"\n",(0,t.jsx)(n.p,{children:"Contains items for configuring a category in the spawner configuration"}),"\n",(0,t.jsx)(n.h2,{id:"categoryconfigs",children:"CategoryConfigs"}),"\n",(0,t.jsx)(n.p,{children:"Contains list of category config's"}),"\n",(0,t.jsx)(n.h2,{id:"groupconfig",children:"GroupConfig"}),"\n",(0,t.jsx)(n.p,{children:"Contains items for configuring the group in the spawner configuration"}),"\n",(0,t.jsx)(n.h2,{id:"webhookconfig",children:"WebhookConfig"}),"\n",(0,t.jsx)(n.p,{children:"Contains items for configuring a webhook in the spawner configuration"}),"\n",(0,t.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,t.jsx)(n.p,{children:"Contains items for configuring the spawner"}),"\n",(0,t.jsxs)(n.h2,{id:"eventresponset",children:["EventResponse",(0,t.jsx)(n.code,{children:"<T>"})]}),"\n",(0,t.jsxs)(n.p,{children:["Contains items for the remote function event response object - with a generic type paramater for the ",(0,t.jsx)(n.code,{children:"data"})," property."]}),"\n",(0,t.jsx)(n.h2,{id:"notificationobject",children:"NotificationObject"}),"\n",(0,t.jsxs)(n.p,{children:["Contains items for a notification object usually used when interacting with the ROBLOX ",(0,t.jsx)(n.a,{href:"https://create.roblox.com/docs/reference/engine/classes/MessagingService",children:(0,t.jsx)(n.code,{children:"MessagingService"})})]}),"\n",(0,t.jsx)(n.h2,{id:"colorschemeconfig",children:"ColorSchemeConfig"}),"\n",(0,t.jsx)(n.p,{children:"Contains all items used for initalizing and setting the color scheme."})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},5710:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var t=o(758);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);