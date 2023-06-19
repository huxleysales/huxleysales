"use strict";(self.webpackChunkhuxley_website=self.webpackChunkhuxley_website||[]).push([[420],{4137:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},g="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),g=d(a),k=r,h=g["".concat(p,".").concat(k)]||g[k]||s[k]||i;return a?n.createElement(h,o(o({ref:e},m),{},{components:a})):n.createElement(h,o({ref:e},m))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=k;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[g]="string"==typeof t?t:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3718:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(4137));const i={id:"config",title:"Configuration"},o=void 0,l={unversionedId:"spawner/config",id:"spawner/config",title:"Configuration",description:"Example Config File",source:"@site/docs/spawner/configuration.mdx",sourceDirName:"spawner",slug:"/spawner/config",permalink:"/docs/spawner/config",draft:!1,tags:[],version:"current",lastUpdatedBy:"TheLadderon",lastUpdatedAt:1687136553,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{id:"config",title:"Configuration"},sidebar:"spawner",previous:{title:"Setup",permalink:"/docs/spawner/setup"},next:{title:"Category Types",permalink:"/docs/category/category-types"}},p={},d=[{value:"Example Config File",id:"example-config-file",level:2},{value:"Configuration Options",id:"configuration-options",level:2},{value:"Basic Configuration Options",id:"basic-configuration-options",level:3},{value:"Theme Configuration Options",id:"theme-configuration-options",level:3},{value:"Category Configuration Options",id:"category-configuration-options",level:3},{value:"Categories",id:"categories",level:4},{value:"Category",id:"category",level:4},{value:"Group Configuration Options",id:"group-configuration-options",level:3},{value:"Webhook Configuration Options",id:"webhook-configuration-options",level:3}],m={toc:d},g="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(g,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"example-config-file"},"Example Config File"),(0,r.kt)("p",null,"We provided you with an example configuration file if needed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'showLineNumbers title="SpawnerConfig"',showLineNumbers:!0,title:'"SpawnerConfig"'},'--!strict\nlocal Typings = require(game:GetService\'ReplicatedStorage\'.Spawner.SpawnerTypings);\n\n--[[\n\nONLY EDIT THE CONFIG TABLE!\n\nNeed help? Visit\n\nhttps://huxleysales.github.io/docs/spawner/config\nor join https://discord.gg/yHH2cynGzD\n\n]]\n\nlocal config: Typings.Config = {\n    theme = {\n        title = "My Spawner",\n        colorScheme = "dark",\n        logoImageId = 9428951785,\n    },\n\n    categories = {\n        Category1 = {\n            title = "Spawn Bus",\n            categoryType = "open",\n        },\n    },\n\n    groupSettings = {\n        enabled = false,\n        groupId = 16419590,\n        minimumSpawnerRank = 0,\n        minimumAdminRank = 250,\n        allowVipOwnersServerAdmin = false\n    },\n\n    webhookSettings = {\n        enabled = true,\n        receiver = "discord",\n        webhookServerUrl = "",\n        webhookClientUrl = "",\n        bodies = {\n            onSpawn = {\n                username = "{{spawnerTitle}}",\n                embeds = {\n                    {\n                        title = "**Bus Spawned**",\n                        description = "A bus was spawned",\n                        color = tonumber(0x9acd32),\n                        author = {\n                            name = "{{spawnerTitle}}"\n                        },\n                        thumbnail = {\n                            url = "{{userAvatarHeadShot}}"\n                        },\n                        fields = {\n                            {\n                                name = "Bus Spawned",\n                                value = "{{busNumber}}",\n                            },\n                            {\n                                name = "Bus Spawned by",\n                                value = "[{{displayName}} (@{{username}})](https://roblox.com/users/{{userId}}/profile)"\n                            },\n                            {\n                                name = "Bus Spawned at",\n                                value = "<t:{{timestamp}}> (<t:{{timestamp}}:R>)"\n                            }\n                        }\n                    }\n                }\n            },\n            onDespawn = {\n                username = "{{spawnerTitle}}",\n                embeds = {\n                    {\n                        title = "**Bus Despawned**",\n                        description = "A bus was despawned",\n                        author = {\n                            name = "{{spawnerTitle}}"\n                        },\n                        thumbnail = {\n                            url = "{{userAvatarHeadShot}}"\n                        },\n                        color = tonumber(0x3c78d8),\n                        fields = {\n                            {\n                                name = "Bus Despawned",\n                                value = "{{busNumber}}"\n                            },\n                            {\n                                name = "Bus Despawned by",\n                                value = "[{{displayName}} (@{{username}})](https://roblox.com/users/{{userId}}/profile)"\n                            },\n                            {\n                                name = "Bus Despawned at",\n                                value = "<t:{{timestamp}}> (<t:{{timestamp}}:R>)"\n                            }\n                        }\n                    }\n                }\n            },\n            onMessage = {\n                username = "{{spawnerTitle}}",\n                embeds = {\n                    {\n                        title = "**notification Broadcasted**",\n                        description = "Someone sent a notification!",\n                        color = tonumber(0x3c78d8),\n                        author = {\n                            name = "{{spawnerTitle}}"\n                        },\n                        thumbnail = {\n                            url = "{{userAvatarHeadShot}}"\n                        },\n                        fields = {\n                            {\n                                name = "notifiction Broadcasted by",\n                                value = "[{{displayName}} (@{{username}})](https://roblox.com/users/{{userId}}/profile)"\n                            },\n                            {\n                                name = "notification Broadcasted at",\n                                value = "<t:{{timestamp}}> (<t:{{timestamp}}:R>)"\n                            },\n                            {\n                                name = "notification Type",\n                                value = "{{messageType}}"\n                            },\n                            {\n                                name = "notification",\n                                value = "{{message}}"\n                            }\n                        }\n                    }\n                }\n            },\n            onAdmin = {\n                username = "{{spawnerTitle}}",\n                embeds = {\n                    {\n                        title = "**Administrative Action**",\n                        description = "Someone executed something on the admin panel",\n                        color = tonumber(0xff4848),\n                        author = {\n                            name = "{{spawnerTitle}}"\n                        },\n                        fields = {\n                            {\n                                name = "Executed by",\n                                value = "[{{displayName}} (@{{username}})](https://roblox.com/users/{{userId}}/profile)"\n                            },\n                            {\n                                name = "Executed at",\n                                value = "<t:{{timestamp}}> (<t:{{timestamp}}:R>)"\n                            },\n                            {\n                                name = "Executed towards",\n                                value = "[{{moderatedDisplayName}} (@{{moderatedUsername}})](https://roblox.com/users/{{moderatedUserId}}/profile)"\n                            },\n                            {\n                                name = "Action",\n                                value = "{{action}}"\n                            },\n                            {\n                                name = "Reason",\n                                value = "{{reason}}"\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    },\n\n    busModelsLocation = game.ServerStorage.BusModels,\n    depsawnonPlayerLeave = false,\n    teleportPlayerToBus = false,\n    busModelSpawnType = "basic"\n}\n\nreturn config;\n')),(0,r.kt)("h2",{id:"configuration-options"},"Configuration Options"),(0,r.kt)("h3",{id:"basic-configuration-options"},"Basic Configuration Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Value Choices"),(0,r.kt)("th",{parentName:"tr",align:"right"},"DefaultValue"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#theme-configuration-options"},"theme")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Includes all the data for your theme such as a title, custom logo image, and color themes! (Blue & Dark Theme are the best \ud83d\ude0e)"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("a",{parentName:"td",href:"typings#themeconfig"},"ThemeConfig")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("a",{parentName:"td",href:"#theme-configuration-options"},"View this for value choices")),(0,r.kt)("td",{parentName:"tr",align:"right"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#category-configuration-options"},"categories")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Includes all the data about the different categories."),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("a",{parentName:"td",href:"typings#categoryconfigs"},"CategoryConfigs")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("a",{parentName:"td",href:"#category-configuration-options"},"View this for value choices")),(0,r.kt)("td",{parentName:"tr",align:"right"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#group-configuration-options"},"groupSettings")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Includes all the data about your group and group settings for the spawner."),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("a",{parentName:"td",href:"typings#groupconfig"},"GroupConfig")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("a",{parentName:"td",href:"#webhook-configuration-options"},"View this for value choices")),(0,r.kt)("td",{parentName:"tr",align:"right"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#webhook-configuration-options"},"webhookSettings")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Includes all the data about your webhook settings for the spawner."),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("a",{parentName:"td",href:"typings#webhookconfig"},"WebhookConfig")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("a",{parentName:"td",href:"#webhook-configuration-options"},"View this for value choices")),(0,r.kt)("td",{parentName:"tr",align:"right"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"busModelsLocation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"If you want to add more spawner categories (up-to 3 extra)."),(0,r.kt)("td",{parentName:"tr",align:"right"},"Path to ",(0,r.kt)("a",{parentName:"td",href:"https://create.roblox.com/docs/reference/engine/classes/Folder"},(0,r.kt)("inlineCode",{parentName:"a"},"Folder"))),(0,r.kt)("td",{parentName:"tr",align:"right"},"Any folder in ",(0,r.kt)("inlineCode",{parentName:"td"},"game")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"game.ServerStorage.BusModels"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"depsawnonPlayerLeave"),(0,r.kt)("td",{parentName:"tr",align:"center"},"If you want a spawned bus to despawn when the associated player leaves the game"),(0,r.kt)("td",{parentName:"tr",align:"right"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"true"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"teleportPlayerToBus"),(0,r.kt)("td",{parentName:"tr",align:"center"},"If you want to teleport a player to their bus when they spawn it"),(0,r.kt)("td",{parentName:"tr",align:"right"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"true"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"busModelSpawnType"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The method of spawning a bus - if using advanced, see ",(0,r.kt)("a",{parentName:"td",href:"advanced-spawning"},"Advanced Spawning")),(0,r.kt)("td",{parentName:"tr",align:"right"},"string"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},'"basic"'),"/",(0,r.kt)("inlineCode",{parentName:"td"},'"advanced"')),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},'"basic"'))))),(0,r.kt)("h3",{id:"theme-configuration-options"},"Theme Configuration Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Value Choices"),(0,r.kt)("th",{parentName:"tr",align:"right"},"DefaultValue"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Includes all the data for your theme such as a title, custom logo image, and color themes! (Blue & Dark Theme are the best \ud83d\ude0e)"),(0,r.kt)("td",{parentName:"tr",align:"right"},"string"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Any string"),(0,r.kt)("td",{parentName:"tr",align:"right"},'"My Spawner"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"colorScheme"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Includes all the data about the different categories."),(0,r.kt)("td",{parentName:"tr",align:"right"},"string"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},'"light"'),"/",(0,r.kt)("inlineCode",{parentName:"td"},'"dark"'),"/",(0,r.kt)("inlineCode",{parentName:"td"},'"blue"')),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},'"dark"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"logoImageId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Includes all the data about your group and group settings for the spawner."),(0,r.kt)("td",{parentName:"tr",align:"right"},"number"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Any number"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"9428951785"))))),(0,r.kt)("h3",{id:"category-configuration-options"},"Category Configuration Options"),(0,r.kt)("h4",{id:"categories"},"Categories"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#category"},"Category1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Includes all the data for Category1"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("a",{parentName:"td",href:"typings#categoryconfig"},"CategoryConfig"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#category"},"Category2")),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Includes all the data for Category2"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("a",{parentName:"td",href:"typings#categoryconfig"},"CategoryConfig"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#category"},"Category3")),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Includes all the data for Category3"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("a",{parentName:"td",href:"typings#categoryconfig"},"CategoryConfig"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#category"},"Category4")),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Includes all the data for Category4"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("a",{parentName:"td",href:"typings#categoryconfig"},"CategoryConfig"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#category"},"Category5")),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Includes all the data for Category4"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("a",{parentName:"td",href:"typings#categoryconfig"},"CategoryConfig"))))),(0,r.kt)("h4",{id:"category"},"Category"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Value Choices"),(0,r.kt)("th",{parentName:"tr",align:"right"},"DefaultValue"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Title of this category"),(0,r.kt)("td",{parentName:"tr",align:"right"},"string"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Any string"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"nil")," unless first - then ",(0,r.kt)("inlineCode",{parentName:"td"},'"Spawn Bus"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"categoryType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The Category Type"),(0,r.kt)("td",{parentName:"tr",align:"right"},"number"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("a",{parentName:"td",href:"typings#categorytypeoption"},"CategoryTypeOption")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"nil")," unless first - then ",(0,r.kt)("inlineCode",{parentName:"td"},'"open"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"assetId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The asset ID to access this category"),(0,r.kt)("td",{parentName:"tr",align:"right"},"number"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Any number"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"mypodProduct"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The Product Name for your mypod hub to access this category"),(0,r.kt)("td",{parentName:"tr",align:"right"},"string"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Any String"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"minimumRank"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Minimum Group Rank to access this category"),(0,r.kt)("td",{parentName:"tr",align:"right"},"number"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Any number"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))))),(0,r.kt)("h3",{id:"group-configuration-options"},"Group Configuration Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Value Choices"),(0,r.kt)("th",{parentName:"tr",align:"right"},"DefaultValue"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,r.kt)("td",{parentName:"tr",align:"center"},"If any of these group features should be used"),(0,r.kt)("td",{parentName:"tr",align:"right"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"true"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"groupId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The ID of the Roblox Group"),(0,r.kt)("td",{parentName:"tr",align:"right"},"number"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Any number"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"13299030"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"minimumSpawnerRank"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Minimum Group Rank to see the spawner"),(0,r.kt)("td",{parentName:"tr",align:"right"},"number"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Any number"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"minimumAdminRank"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Minimum Group Rank to see the admin panel"),(0,r.kt)("td",{parentName:"tr",align:"right"},"number"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Any number"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"255"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"allowVipOwnersServerAdmin"),(0,r.kt)("td",{parentName:"tr",align:"center"},"If VIP Server Owners should see the admin panel"),(0,r.kt)("td",{parentName:"tr",align:"right"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"true"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h3",{id:"webhook-configuration-options"},"Webhook Configuration Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Value Choices"),(0,r.kt)("th",{parentName:"tr",align:"right"},"DefaultValue"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,r.kt)("td",{parentName:"tr",align:"center"},"If any of these webhook features should be used"),(0,r.kt)("td",{parentName:"tr",align:"right"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"true"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"receiver"),(0,r.kt)("td",{parentName:"tr",align:"center"},"What system is receiving the webhook (most likely discord)"),(0,r.kt)("td",{parentName:"tr",align:"right"},"number"),(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},'"discord"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"webhookServerUrl"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The Server/Service URL for the Webhook"),(0,r.kt)("td",{parentName:"tr",align:"right"},"string"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Any string"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"webhookServerUrl"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The Webhook URL"),(0,r.kt)("td",{parentName:"tr",align:"right"},"string"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Any string"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"bodies"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The templates/bodies"),(0,r.kt)("td",{parentName:"tr",align:"right"},"[string]",": {}"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Any object"),(0,r.kt)("td",{parentName:"tr",align:"right"})))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"bodies")),(0,r.kt)("p",{parentName:"admonition"},"You should not touch the names of the bodies (",(0,r.kt)("inlineCode",{parentName:"p"},"onSpawn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onMessage"),", etc...) but you can touch the contents inside of those names.")))}s.isMDXComponent=!0}}]);