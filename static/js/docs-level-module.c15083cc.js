(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./docs/level/data.js":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return d}));var n=[{type:"Review",xp:10,date:new Date,text:"Review a Product"},{type:"Play",xp:10,date:new Date,text:"Play a Game"},{type:"Like",xp:10,date:new Date,text:"Like a Picture"},{type:"Share",xp:10,date:new Date,text:"Share a Story"},{type:"Subscribe",xp:10,date:new Date,text:"Subscribe"},{type:"Comment",xp:10,date:new Date,text:"Comment a Post"},{type:"Pat",xp:10,date:new Date,text:"Pat a Tiger"},{type:"Love",xp:10,date:new Date,text:"Sharing Is Caring"},{type:"Pat",xp:10,date:new Date,text:"Pat a Cat"},{type:"Hug",xp:10,date:new Date,text:"Hug a Friend"}];"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LogData",filename:"docs/level/data.js"}});var o=[{currency:"coin",amount:50}];"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RewardData",filename:"docs/level/data.js"}});var d={url:"https://storage.googleapis.com/gwen-prod-storage/avatar-packages/default/01.svg",colors:{background:"#98ca9d",shirt:"#55ab59"}};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarData",filename:"docs/level/data.js"}})},"./docs/level/module.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var n=a("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),d=a("./node_modules/docz/dist/index.esm.js"),r=a("./src/index.ts"),l=a("./docs/level/data.js"),i={},s="wrapper";function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(s,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"module-component"},"Module Component"),Object(o.b)("p",null,"Use this component in Embedded views"),Object(o.b)(d.c,{__position:0,__code:"<div style={{ width: '100%', height: '650px', overflow: 'hidden' }}>\n  <LevelModuleComponent\n    data={{\n      level: 5,\n      currentXp: 512,\n      totalXp: 10231,\n      levelXp: 1100,\n      rewards: RewardData,\n    }}\n    log={LogData}\n    avatar={AvatarData}\n    cooldowns={[\n      {\n        behaviorName: 'Paint a Donkey',\n        cooldownInMS: 10000,\n        lastReportedAt: new Date(),\n      },\n      {\n        behaviorName: 'Trick a Monkey',\n        cooldownInMS: 95000,\n        lastReportedAt: new Date(),\n      },\n      {\n        behaviorName: 'Eat a Bananna',\n        cooldownInMS: 720000,\n        lastReportedAt: new Date(),\n      },\n    ]}\n  />\n</div>",__scope:{props:this?this.props:a,Playground:d.c,Props:d.d,LevelModuleComponent:r.e,LogData:l.b,RewardData:l.c,AvatarData:l.a},mdxType:"Playground"},Object(o.b)("div",{style:{width:"100%",height:"650px",overflow:"hidden"}},Object(o.b)(r.e,{data:{level:5,currentXp:512,totalXp:10231,levelXp:1100,rewards:l.c},log:l.b,avatar:l.a,cooldowns:[{behaviorName:"Paint a Donkey",cooldownInMS:1e4,lastReportedAt:new Date},{behaviorName:"Trick a Monkey",cooldownInMS:95e3,lastReportedAt:new Date},{behaviorName:"Eat a Bananna",cooldownInMS:72e4,lastReportedAt:new Date}],mdxType:"LevelModuleComponent"}))),Object(o.b)(d.d,{of:r.e,mdxType:"Props"}))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/level/module.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-level-module.aa955f8734fa55ca8605.js.map