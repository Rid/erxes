(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6551],{82964:function(e,t,n){"use strict";n.d(t,{u:function(){return a},P:function(){return s}});var r=n(67294),i=n(60641),o=n(69713).Z,l=n(50210);function a(e,t){return r.createElement(r.Fragment,null,e&&r.createElement(l.Z,{className:"language-javascript"},"import "+e+' from "erxes-ui/lib/components/'+e+'";'),t&&r.createElement(r.Fragment,null,r.createElement("p",null,"required prop - ",r.createElement("span",{className:i.Z.required},"*")),r.createElement(o,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Default"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,t.map((function(e,t){return r.createElement("tr",{key:t},e.map((function(e,t){return r.createElement("td",{key:t},"*"===e[e.length-1]?r.createElement(r.Fragment,null,e.slice(0,-1),r.createElement("span",{className:i.Z.required},"*")):r.createElement(r.Fragment,null,e))})))}))))))}function s(e){var t=JSON.stringify(e);return t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/{}/g,"")).replace(/{"/g,"")).replace(/":/g,"=")).replace(/,"/g," ")).replace(/}/g,"")).replace(/=true/g,"")).replace(/"</g,"{<")).replace(/>"/g,">}")).replace(/true/g,"{true}")).replace(/false/g,"{false}")).replace(/null/g,"")}},57167:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return h}});var r=n(74034),i=n(79973),o=n(67294),l=n(3905),a=n(70762),s=n(30094),p=n(60641),c=n(50210),m=n(82964);function u(e){var t=e.type,n=e.table,r=void 0===n?[]:n,i=function(e,t){if(e){var n,r=((n={})[e]="active"===e?2:"title"!==e||"Title",n);return Object.assign({},r,{img:t&&"https://erxes.io/static/images/logo/logo_dark.svg"})}return{img:t&&"https://erxes.io/static/images/logo/logo_dark.svg"}},l=function(e){var t=JSON.stringify(e);return t=(t=(t=(t=(t=(t=(t=t.replace(/{}/g,"")).replace(/{"/g,"")).replace(/":/g,"=")).replace(/,"/g," ")).replace(/}/g,"")).replace(/=true/g,"")).replace(/2/g,"{2}")},u=function(e){return o.createElement(o.Fragment,null,"noButton"===e?o.createElement("div",{className:p.Z.styled},o.createElement(a.Z,null,o.createElement(s.Z,{noButton:!0,img:"https://erxes.io/static/images/logo/logo_dark.svg"},"children1"),o.createElement(s.Z,{noButton:!0,img:"https://erxes.io/static/images/logo/logo_dark.svg"},"children2"),o.createElement(s.Z,{noButton:!0,img:"https://erxes.io/static/images/logo/logo_dark.svg"},"children3"))):o.createElement("div",{className:p.Z.styled},o.createElement(a.Z,i(e),o.createElement(s.Z,{img:"https://erxes.io/static/images/logo/logo_dark.svg"},"children1"),o.createElement(s.Z,{img:"https://erxes.io/static/images/logo/logo_dark.svg"},"children2"),o.createElement(s.Z,{img:"https://erxes.io/static/images/logo/logo_dark.svg"},"children3"))),o.createElement(c.Z,{className:"language-jsx"},"<>"+("noButton"===e?'\n\t<Steps>\n\t\t<Step noButton img="https://erxes.io/static/images/logo/logo_dark.svg">children1</Step>\n\t\t<Step noButton img="https://erxes.io/static/images/logo/logo_dark.svg">children2</Step>\n\t\t<Step noButton img="https://erxes.io/static/images/logo/logo_dark.svg">children3</Step>\n\t</Steps>':"\n\t<Steps "+l(i(e))+'>\n\t\t<Step img="https://erxes.io/static/images/logo/logo_dark.svg">children1</Step>\n\t\t<Step img="https://erxes.io/static/images/logo/logo_dark.svg">children2</Step>\n\t\t<Step img="https://erxes.io/static/images/logo/logo_dark.svg">children3</Step>\n\t</Steps>')+"\n</>"))},d=function(e){return o.createElement(o.Fragment,null,o.createElement("div",{className:p.Z.styled},o.createElement(s.Z,i(e,"img"),"children")),o.createElement(c.Z,{className:"language-jsx"},"<>\n\t<Step "+l(i(e,"img"))+">children</Step>\n</>"))};return"example"===t?u():"activeSteps"===t?u("active"):"APIsteps"===t?(0,m.u)("Steps",r):"img"===t?d():"title"===t?d("title"):"nobtn"===t?u("noButton"):"APIstep"===t?(0,m.u)("Step",r):null}var d={id:"steps",title:"Steps"},g={unversionedId:"components/Steps/steps",id:"components/Steps/steps",isDocsHomePage:!1,title:"Steps",description:"Example",source:"@site/docs/components/Steps/steps.md",sourceDirName:"components/Steps",slug:"/components/Steps/steps",permalink:"/components/Steps/steps",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/components/Steps/steps.md",version:"current",lastUpdatedBy:"enkhzule",lastUpdatedAt:1638773199,formattedLastUpdatedAt:"12/6/2021",frontMatter:{id:"steps",title:"Steps"}},h=[{value:"Example",id:"example",children:[]},{value:"Active",id:"active",children:[]},{value:"Step",id:"step",children:[{value:"Image",id:"image",children:[]},{value:"Title",id:"title",children:[]},{value:"No button",id:"no-button",children:[]}]},{value:"Api",id:"api",children:[{value:"Steps",id:"steps",children:[]},{value:"Step",id:"step-1",children:[]}]}],S={toc:h};function k(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Simple step component with image and content."),(0,l.kt)(u,{type:"example",mdxType:"StepComponent"}),(0,l.kt)("h2",{id:"active"},"Active"),(0,l.kt)("p",null,"Change the step that expands on start with ",(0,l.kt)("code",null,"active")," prop."),(0,l.kt)(u,{type:"activeSteps",mdxType:"StepComponent"}),(0,l.kt)("h2",{id:"step"},"Step"),(0,l.kt)("h3",{id:"image"},"Image"),(0,l.kt)("p",null,"Add image by ",(0,l.kt)("code",null,"img")," prop."),(0,l.kt)(u,{type:"img",mdxType:"StepComponent"}),(0,l.kt)("h3",{id:"title"},"Title"),(0,l.kt)("p",null,"Add title by ",(0,l.kt)("code",null,"title")," prop. "),(0,l.kt)(u,{type:"title",mdxType:"StepComponent"}),(0,l.kt)("h3",{id:"no-button"},"No button"),(0,l.kt)("p",null,'Hide the "next" button by ',(0,l.kt)("code",null,"noButton")," prop."),(0,l.kt)(u,{type:"nobtn",mdxType:"StepComponent"}),(0,l.kt)("h2",{id:"api"},"Api"),(0,l.kt)("h3",{id:"steps"},"Steps"),(0,l.kt)(u,{type:"APIsteps",table:[["children*","any","","Contain step components"],["active","number","","Change the step that expands on start"],["maxStep","number","6","Limit the number of steps (always 6)"]],mdxType:"StepComponent"}),(0,l.kt)("h3",{id:"step-1"},"Step"),(0,l.kt)(u,{type:"APIstep",table:[["stepNumber","number","","Define step number"],["active","number","","Define which step that expands on start"],["img","string","","Shows image"],["title","string","","Shows title"],["children","React.ReactNode","","Shows content of step"],["next","function","","Define click function of next button"],["noButton","boolen","",'Hide the "Next" button'],["onClick","function","","Define click handler function"]],mdxType:"StepComponent"}))}k.isMDXComponent=!0},60641:function(e,t){"use strict";t.Z={buttons:"buttons_18wb",step:"step_2TGP",dedicationWrapper:"dedicationWrapper_3CLG",featureImage:"featureImage_Nz4U",investIcon:"investIcon_1E_p",smallDesc:"smallDesc_rLtZ",description:"description_30kM",item:"item_281F",link:"link_3jTK",iframe:"iframe_WMJZ",clientsWrapper:"clientsWrapper_2zdX",clients:"clients_21O3",features:"features_2xlB",iconWrapper:"iconWrapper_2t8I",colorYellow:"colorYellow_iVS4",colorPrimary:"colorPrimary_1n6O",descriptionList:"descriptionList_3h7-",styled:"styled_304r",styleSpinner:"styleSpinner_1qYL",spinner:"spinner_3Hax",sortHandlerContainer:"sortHandlerContainer_1ei3",blueP:"blueP__d2Y",TipsContainer:"TipsContainer_u6UJ",bigContainer:"bigContainer_26LP",required:"required_3y-p",iconButton:"iconButton_3UNH",searchBar:"searchBar_26hY",test:"test_1ZxE",smBox:"smBox_28BN",sizeBox:"sizeBox_3Wh4",datecontrol:"datecontrol_2iyS",formborder:"formborder_2Ad9",controllabel:"controllabel_CiyA"}}}]);