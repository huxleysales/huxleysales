"use strict";(self.webpackChunkhuxley_website=self.webpackChunkhuxley_website||[]).push([[1146],{8283:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>r,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var i=n(6070),l=n(5710);const s={id:"config",title:"Configuration"},r=void 0,d={id:"spawner/config",title:"Configuration",description:"Example Config File",source:"@site/docs/spawner/configuration.mdx",sourceDirName:"spawner",slug:"/spawner/config",permalink:"/docs/spawner/config",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Fisher",lastUpdatedAt:172218402e4,frontMatter:{id:"config",title:"Configuration"},sidebar:"spawner",previous:{title:"Setup",permalink:"/docs/spawner/setup"},next:{title:"Category Types",permalink:"/docs/category/category-types"}},h={},o=[{value:"Example Config File",id:"example-config-file",level:2},{value:"Configuration Options",id:"configuration-options",level:2},{value:"Basic Configuration Options",id:"basic-configuration-options",level:3},{value:"Theme Configuration Options",id:"theme-configuration-options",level:3},{value:"Category Configuration Options",id:"category-configuration-options",level:3},{value:"Categories",id:"categories",level:4},{value:"Category",id:"category",level:4},{value:"Group Configuration Options",id:"group-configuration-options",level:3},{value:"Webhook Configuration Options",id:"webhook-configuration-options",level:3}];function c(t){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"example-config-file",children:"Example Config File"}),"\n",(0,i.jsx)(e.p,{children:"We provided you with an example configuration file if needed."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-lua",metastring:'showLineNumbers title="SpawnerConfig"',children:'--!strict\nlocal Typings = require(game:GetService\'ReplicatedStorage\'.Spawner.SpawnerTypings);\n\n--[[\n\nONLY EDIT THE CONFIG TABLE!\n\nNeed help? Visit\n\nhttps://huxleysales.github.io/docs/spawner/config\nor join https://discord.gg/yHH2cynGzD\n\n]]\n\nlocal config: Typings.Config = {\n\ttheme = {\n\t\ttitle = "My Spawner",\n\t\tcolorScheme = "dark",\n\t\tlogoImageId = 9428951785,\n\t},\n\n\tcategories = {\n\t\tCategory1 = {\n\t\t\ttitle = "Spawn Bus",\n\t\t\tcategoryType = "open",\n\t\t},\n\t},\n\n\tgroupSettings = {\n\t\tenabled = false,\n\t\tgroupId = 16419590,\n\t\tminimumSpawnerRank = 0,\n\t\tminimumAdminRank = 250,\n\t\tallowVipOwnersServerAdmin = false\n\t},\n\n\twebhookSettings = {\n\t\tenabled = true,\n\t\treceiver = "discord",\n\t\twebhookServerUrl = "",\n\t\twebhookClientUrl = "",\n\t\tbodies = {\n\t\t\tonSpawn = {\n\t\t\t\tusername = "{{spawnerTitle}}",\n\t\t\t\tembeds = {\n\t\t\t\t\t{\n\t\t\t\t\t\ttitle = "**Bus Spawned**",\n\t\t\t\t\t\tdescription = "A bus was spawned",\n\t\t\t\t\t\tcolor = tonumber(0x9acd32),\n\t\t\t\t\t\tauthor = {\n\t\t\t\t\t\t\tname = "{{spawnerTitle}}"\n\t\t\t\t\t\t},\n\t\t\t\t\t\tthumbnail = {\n\t\t\t\t\t\t\turl = "{{userAvatarHeadShot}}"\n\t\t\t\t\t\t},\n\t\t\t\t\t\tfields = {\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tname = "Bus Spawned",\n\t\t\t\t\t\t\t\tvalue = "{{busNumber}}",\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tname = "Bus Spawned by",\n\t\t\t\t\t\t\t\tvalue = "[{{displayName}} (@{{username}})](https://roblox.com/users/{{userId}}/profile)"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tname = "Bus Spawned at",\n\t\t\t\t\t\t\t\tvalue = "<t:{{timestamp}}> (<t:{{timestamp}}:R>)"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\tonDespawn = {\n\t\t\t\tusername = "{{spawnerTitle}}",\n\t\t\t\tembeds = {\n\t\t\t\t\t{\n\t\t\t\t\t\ttitle = "**Bus Despawned**",\n\t\t\t\t\t\tdescription = "A bus was despawned",\n\t\t\t\t\t\tauthor = {\n\t\t\t\t\t\t\tname = "{{spawnerTitle}}"\n\t\t\t\t\t\t},\n\t\t\t\t\t\tthumbnail = {\n\t\t\t\t\t\t\turl = "{{userAvatarHeadShot}}"\n\t\t\t\t\t\t},\n\t\t\t\t\t\tcolor = tonumber(0x3c78d8),\n\t\t\t\t\t\tfields = {\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tname = "Bus Despawned",\n\t\t\t\t\t\t\t\tvalue = "{{busNumber}}"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tname = "Bus Despawned by",\n\t\t\t\t\t\t\t\tvalue = "[{{displayName}} (@{{username}})](https://roblox.com/users/{{userId}}/profile)"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tname = "Bus Despawned at",\n\t\t\t\t\t\t\t\tvalue = "<t:{{timestamp}}> (<t:{{timestamp}}:R>)"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\tonMessage = {\n\t\t\t\tusername = "{{spawnerTitle}}",\n\t\t\t\tembeds = {\n\t\t\t\t\t{\n\t\t\t\t\t\ttitle = "**notification Broadcasted**",\n\t\t\t\t\t\tdescription = "Someone sent a notification!",\n\t\t\t\t\t\tcolor = tonumber(0x3c78d8),\n\t\t\t\t\t\tauthor = {\n\t\t\t\t\t\t\tname = "{{spawnerTitle}}"\n\t\t\t\t\t\t},\n\t\t\t\t\t\tthumbnail = {\n\t\t\t\t\t\t\turl = "{{userAvatarHeadShot}}"\n\t\t\t\t\t\t},\n\t\t\t\t\t\tfields = {\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tname = "notifiction Broadcasted by",\n\t\t\t\t\t\t\t\tvalue = "[{{displayName}} (@{{username}})](https://roblox.com/users/{{userId}}/profile)"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tname = "notification Broadcasted at",\n\t\t\t\t\t\t\t\tvalue = "<t:{{timestamp}}> (<t:{{timestamp}}:R>)"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tname = "notification Type",\n\t\t\t\t\t\t\t\tvalue = "{{messageType}}"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tname = "notification",\n\t\t\t\t\t\t\t\tvalue = "{{message}}"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\tonAdmin = {\n\t\t\t\tusername = "{{spawnerTitle}}",\n\t\t\t\tembeds = {\n\t\t\t\t\t{\n\t\t\t\t\t\ttitle = "**Administrative Action**",\n\t\t\t\t\t\tdescription = "Someone executed something on the admin panel",\n\t\t\t\t\t\tcolor = tonumber(0xff4848),\n\t\t\t\t\t\tauthor = {\n\t\t\t\t\t\t\tname = "{{spawnerTitle}}"\n\t\t\t\t\t\t},\n\t\t\t\t\t\tfields = {\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tname = "Executed by",\n\t\t\t\t\t\t\t\tvalue = "[{{displayName}} (@{{username}})](https://roblox.com/users/{{userId}}/profile)"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tname = "Executed at",\n\t\t\t\t\t\t\t\tvalue = "<t:{{timestamp}}> (<t:{{timestamp}}:R>)"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tname = "Executed towards",\n\t\t\t\t\t\t\t\tvalue = "[{{moderatedDisplayName}} (@{{moderatedUsername}})](https://roblox.com/users/{{moderatedUserId}}/profile)"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tname = "Action",\n\t\t\t\t\t\t\t\tvalue = "{{action}}"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tname = "Reason",\n\t\t\t\t\t\t\t\tvalue = "{{reason}}"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t},\n\n\tbusModelsLocation = game.ServerStorage.BusModels,\n\tdepsawnonPlayerLeave = false,\n\tteleportPlayerToBus = false,\n\tbusModelSpawnType = "basic"\n}\n\nreturn config;\n'})}),"\n",(0,i.jsx)(e.h2,{id:"configuration-options",children:"Configuration Options"}),"\n",(0,i.jsx)(e.h3,{id:"basic-configuration-options",children:"Basic Configuration Options"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(e.th,{style:{textAlign:"center"},children:"Description"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Type"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Value Choices"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"DefaultValue"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:(0,i.jsx)(e.a,{href:"#theme-configuration-options",children:"theme"})}),(0,i.jsxs)(e.td,{style:{textAlign:"center"},children:["Includes all the data for your theme such as a title, custom logo image, and color themes! (Blue & Dark Theme are the best ","\ud83d\ude0e",")"]}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.a,{href:"typings#themeconfig",children:"ThemeConfig"})}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.a,{href:"#theme-configuration-options",children:"View this for value choices"})}),(0,i.jsx)(e.td,{style:{textAlign:"right"}})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:(0,i.jsx)(e.a,{href:"#category-configuration-options",children:"categories"})}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Includes all the data about the different categories."}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.a,{href:"typings#categoryconfigs",children:"CategoryConfigs"})}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.a,{href:"#category-configuration-options",children:"View this for value choices"})}),(0,i.jsx)(e.td,{style:{textAlign:"right"}})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:(0,i.jsx)(e.a,{href:"#group-configuration-options",children:"groupSettings"})}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Includes all the data about your group and group settings for the spawner."}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.a,{href:"typings#groupconfig",children:"GroupConfig"})}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.a,{href:"#webhook-configuration-options",children:"View this for value choices"})}),(0,i.jsx)(e.td,{style:{textAlign:"right"}})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:(0,i.jsx)(e.a,{href:"#webhook-configuration-options",children:"webhookSettings"})}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Includes all the data about your webhook settings for the spawner."}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.a,{href:"typings#webhookconfig",children:"WebhookConfig"})}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.a,{href:"#webhook-configuration-options",children:"View this for value choices"})}),(0,i.jsx)(e.td,{style:{textAlign:"right"}})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"busModelsLocation"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"If you want to add more spawner categories (up-to 3 extra)."}),(0,i.jsxs)(e.td,{style:{textAlign:"right"},children:["Path to ",(0,i.jsx)(e.a,{href:"https://create.roblox.com/docs/reference/engine/classes/Folder",children:(0,i.jsx)(e.code,{children:"Folder"})})]}),(0,i.jsxs)(e.td,{style:{textAlign:"right"},children:["Any folder in ",(0,i.jsx)(e.code,{children:"game"})]}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.code,{children:"game.ServerStorage.BusModels"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"depsawnonPlayerLeave"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"If you want a spawned bus to despawn when the associated player leaves the game"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"boolean"}),(0,i.jsxs)(e.td,{style:{textAlign:"right"},children:[(0,i.jsx)(e.code,{children:"true"}),"/",(0,i.jsx)(e.code,{children:"false"})]}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.code,{children:"false"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"teleportPlayerToBus"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"If you want to teleport a player to their bus when they spawn it"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"boolean"}),(0,i.jsxs)(e.td,{style:{textAlign:"right"},children:[(0,i.jsx)(e.code,{children:"true"}),"/",(0,i.jsx)(e.code,{children:"false"})]}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.code,{children:"false"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"busModelSpawnType"}),(0,i.jsxs)(e.td,{style:{textAlign:"center"},children:["The method of spawning a bus - if using advanced, see ",(0,i.jsx)(e.a,{href:"advanced-spawning",children:"Advanced Spawning"})]}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"string"}),(0,i.jsxs)(e.td,{style:{textAlign:"right"},children:[(0,i.jsx)(e.code,{children:'"basic"'}),"/",(0,i.jsx)(e.code,{children:'"advanced"'})]}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.code,{children:'"basic"'})})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"theme-configuration-options",children:"Theme Configuration Options"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(e.th,{style:{textAlign:"center"},children:"Description"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Type"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Value Choices"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"DefaultValue"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"title"}),(0,i.jsxs)(e.td,{style:{textAlign:"center"},children:["Includes all the data for your theme such as a title, custom logo image, and color themes! (Blue & Dark Theme are the best ","\ud83d\ude0e",")"]}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"string"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Any string"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:'"My Spawner"'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"colorScheme"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Includes all the data about the different categories."}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"string"}),(0,i.jsxs)(e.td,{style:{textAlign:"right"},children:[(0,i.jsx)(e.code,{children:'"light"'}),"/",(0,i.jsx)(e.code,{children:'"dark"'}),"/",(0,i.jsx)(e.code,{children:'"blue"'})]}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.code,{children:'"dark"'})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"logoImageId"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Includes all the data about your group and group settings for the spawner."}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"number"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Any number"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.code,{children:"9428951785"})})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"category-configuration-options",children:"Category Configuration Options"}),"\n",(0,i.jsx)(e.h4,{id:"categories",children:"Categories"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Required"}),(0,i.jsx)(e.th,{style:{textAlign:"center"},children:"Description"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Type"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:(0,i.jsx)(e.a,{href:"#category",children:"Category1"})}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"yes"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Includes all the data for Category1"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.a,{href:"typings#categoryconfig",children:"CategoryConfig"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:(0,i.jsx)(e.a,{href:"#category",children:"Category2"})}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"no"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Includes all the data for Category2"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.a,{href:"typings#categoryconfig",children:"CategoryConfig"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:(0,i.jsx)(e.a,{href:"#category",children:"Category3"})}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"no"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Includes all the data for Category3"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.a,{href:"typings#categoryconfig",children:"CategoryConfig"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:(0,i.jsx)(e.a,{href:"#category",children:"Category4"})}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"no"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Includes all the data for Category4"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.a,{href:"typings#categoryconfig",children:"CategoryConfig"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:(0,i.jsx)(e.a,{href:"#category",children:"Category5"})}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"no"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Includes all the data for Category4"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.a,{href:"typings#categoryconfig",children:"CategoryConfig"})})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"category",children:"Category"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Required"}),(0,i.jsx)(e.th,{style:{textAlign:"center"},children:"Description"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Type"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Value Choices"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"DefaultValue"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"title"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"yes"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Title of this category"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"string"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Any string"}),(0,i.jsxs)(e.td,{style:{textAlign:"right"},children:[(0,i.jsx)(e.code,{children:"nil"})," unless first - then ",(0,i.jsx)(e.code,{children:'"Spawn Bus"'})]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"categoryType"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"yes"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"The Category Type"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"number"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.a,{href:"typings#categorytypeoption",children:"CategoryTypeOption"})}),(0,i.jsxs)(e.td,{style:{textAlign:"right"},children:[(0,i.jsx)(e.code,{children:"nil"})," unless first - then ",(0,i.jsx)(e.code,{children:'"open"'})]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"assetId"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"no"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"The asset ID to access this category"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"number"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Any number"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.code,{children:"nil"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"mypodProduct"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"no"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"The Product Name for your mypod hub to access this category"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"string"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Any String"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.code,{children:"nil"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"minimumRank"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"no"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Minimum Group Rank to access this category"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"number"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Any number"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.code,{children:"nil"})})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"group-configuration-options",children:"Group Configuration Options"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(e.th,{style:{textAlign:"center"},children:"Description"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Type"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Value Choices"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"DefaultValue"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"enabled"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"If any of these group features should be used"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"boolean"}),(0,i.jsxs)(e.td,{style:{textAlign:"right"},children:[(0,i.jsx)(e.code,{children:"true"}),"/",(0,i.jsx)(e.code,{children:"false"})]}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.code,{children:"false"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"groupId"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"The ID of the Roblox Group"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"number"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Any number"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.code,{children:"13299030"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"minimumSpawnerRank"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Minimum Group Rank to see the spawner"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"number"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Any number"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.code,{children:"1"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"minimumAdminRank"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Minimum Group Rank to see the admin panel"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"number"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Any number"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.code,{children:"255"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"allowVipOwnersServerAdmin"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"If VIP Server Owners should see the admin panel"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"boolean"}),(0,i.jsxs)(e.td,{style:{textAlign:"right"},children:[(0,i.jsx)(e.code,{children:"true"}),"/",(0,i.jsx)(e.code,{children:"false"})]}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.code,{children:"false"})})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"webhook-configuration-options",children:"Webhook Configuration Options"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(e.th,{style:{textAlign:"center"},children:"Description"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Type"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Value Choices"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"DefaultValue"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"enabled"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"If any of these webhook features should be used"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"boolean"}),(0,i.jsxs)(e.td,{style:{textAlign:"right"},children:[(0,i.jsx)(e.code,{children:"true"}),"/",(0,i.jsx)(e.code,{children:"false"})]}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.code,{children:"false"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"receiver"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"What system is receiving the webhook (most likely discord)"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"number"}),(0,i.jsx)(e.td,{style:{textAlign:"right"}}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.code,{children:'"discord"'})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"webhookServerUrl"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"The Server/Service URL for the Webhook"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"string"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Any string"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.code,{children:'""'})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"webhookServerUrl"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"The Webhook URL"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"string"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Any string"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:(0,i.jsx)(e.code,{children:'""'})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"bodies"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"The templates/bodies"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"[string]: "}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Any object"}),(0,i.jsx)(e.td,{style:{textAlign:"right"}})]})]})]}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsx)(e.mdxAdmonitionTitle,{children:(0,i.jsx)(e.code,{children:"bodies"})}),(0,i.jsxs)(e.p,{children:["You should not touch the names of the bodies (",(0,i.jsx)(e.code,{children:"onSpawn"}),", ",(0,i.jsx)(e.code,{children:"onMessage"}),", etc...) but you can touch the contents inside of those names."]}),(0,i.jsx)(e.admonition,{type:"tip"})]})]})}function x(t={}){const{wrapper:e}={...(0,l.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(c,{...t})}):c(t)}},5710:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>d});var i=n(758);const l={},s=i.createContext(l);function r(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:r(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);