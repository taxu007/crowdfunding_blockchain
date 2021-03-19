(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],p=0,d=[];p<s.length;p++)i=s[p],o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},10:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("bb71");n("da64");a["a"].use(o["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"grey lighten-3"},[n("v-content",[n("v-container",[n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n            Crowdfunding\n          ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n            Utilizing Ethereum for Decentralized Crowdfunding\n          ")])])],1),n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{"max-width":"600px",persistent:""},model:{value:t.startProjectDialog,callback:function(e){t.startProjectDialog=e},expression:"startProjectDialog"}},[n("v-btn",{attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v("Start a Project")]),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline font-weight-bold mt-2 ml-4"},[t._v("Bring your project to life")])]),n("v-card-text",{staticClass:"pt-0"},[n("v-container",{staticClass:"pt-0",attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Title","persistent-hint":""},model:{value:t.newProject.title,callback:function(e){t.$set(t.newProject,"title",e)},expression:"newProject.title"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-textarea",{attrs:{label:"Description","persistent-hint":""},model:{value:t.newProject.description,callback:function(e){t.$set(t.newProject,"description",e)},expression:"newProject.description"}})],1),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-text-field",{attrs:{label:"Amount Needed (ETH)",type:"number",step:"0.0001",min:"0"},model:{value:t.newProject.amountGoal,callback:function(e){t.$set(t.newProject,"amountGoal",e)},expression:"newProject.amountGoal"}})],1),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-text-field",{attrs:{label:"Duration (in days)",type:"number"},model:{value:t.newProject.duration,callback:function(e){t.$set(t.newProject,"duration",e)},expression:"newProject.duration"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.startProjectDialog=!1,t.newProject.isLoading=!1}}},[t._v("\n                Close\n              ")]),n("v-btn",{attrs:{color:"blue darken-1",flat:"",loading:t.newProject.isLoading},on:{click:t.startProject}},[t._v("\n                Save\n              ")])],1)],1)],1)],1)],1),n("v-container",{attrs:{"grid-list-lg":""}},[n("h1",{staticClass:"display-1 font-weight-bold mb-3"},[t._v("\n        Projects\n      ")]),n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.projectData,function(e,a){return n("v-flex",{key:a,attrs:{xs12:""}},[n("v-dialog",{attrs:{width:"800"},model:{value:e.dialog,callback:function(n){t.$set(e,"dialog",n)},expression:"project.dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline font-weight-bold"},[t._v("\n                "+t._s(e.projectTitle)+"\n              ")]),n("v-card-text",[t._v("\n                "+t._s(e.projectDesc)+"\n              ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:"flat"},on:{click:function(e){t.projectData[a].dialog=!1}}},[t._v("\n                  Close\n                ")])],1)],1)],1),n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(o){var r=o.hover;return n("v-card",{class:"elevation-"+(r?10:2)},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("div",{staticClass:"headline font-weight-bold"},[n("v-chip",{staticClass:"mt-0",attrs:{label:"",color:t.stateMap[e.currentState].color,"text-color":"white"}},[t._v("\n                    "+t._s(t.stateMap[e.currentState].text)+"\n                    ")]),t._v("\n                    "+t._s(e.projectTitle)+"\n                  ")],1),n("br"),n("span",[t._v(t._s(e.projectDesc.substring(0,100)))]),e.projectDesc.length>100?n("span",[t._v("\n                    ... "),n("a",{on:{click:function(e){t.projectData[a].dialog=!0}}},[t._v("[Show full]")])]):t._e(),n("br"),n("br"),n("small",[t._v("Up Until: "),n("b",[t._v(t._s(new Date(1e3*e.deadline)))])]),n("br"),n("br"),n("small",[t._v("Goal of "),n("b",[t._v(t._s(e.goalAmount/Math.pow(10,18))+" ETH ")])]),1==e.currentState?n("small",[t._v("wasn't achieved before deadline")]):t._e(),2==e.currentState?n("small",[t._v("has been achieved")]):t._e()])]),0==e.currentState&&t.account!=e.projectStarter?n("v-flex",{staticClass:"d-flex ml-3",attrs:{xs12:"",sm6:"",md3:""}},[n("v-text-field",{attrs:{label:"Amount (in ETH)",type:"number",step:"0.0001",min:"0"},model:{value:e.fundAmount,callback:function(n){t.$set(e,"fundAmount",n)},expression:"project.fundAmount"}}),n("v-btn",{staticClass:"mt-3",attrs:{color:"light-blue darken-1 white--text",loading:e.isLoading},on:{click:function(e){return t.fundProject(a)}}},[t._v("\n                  Fund\n                ")])],1):t._e(),n("v-flex",{staticClass:"d-flex ml-3",attrs:{xs12:"",sm6:"",md3:""}},[1==e.currentState?n("v-btn",{staticClass:"mt-3",attrs:{color:"amber darken-1 white--text",loading:e.isLoading},on:{click:function(e){return t.getRefund(a)}}},[t._v("\n                  Get refund\n                ")]):t._e()],1),0==e.currentState?n("v-card-actions",{staticClass:"text-xs-center"},[n("span",{staticClass:"font-weight-bold",staticStyle:{width:"200px"}},[t._v("\n                  "+t._s(e.currentAmount/Math.pow(10,18))+" ETH\n                ")]),n("v-progress-linear",{attrs:{height:"10",color:t.stateMap[e.currentState].color,value:e.currentAmount/e.goalAmount*100}}),n("span",{staticClass:"font-weight-bold",staticStyle:{width:"200px"}},[t._v("\n                  "+t._s(e.goalAmount/Math.pow(10,18))+" ETH\n                ")])],1):t._e()],1)}}],null,!0)})],1)}),1)],1)],1)],1)},i=[],s=n("e814"),c=n.n(s),u=(n("ac6a"),n("768b")),l=n("2b30"),p=n.n(l);if(window.ethereum){window.web3=new p.a(ethereum);try{ethereum.enable()}catch(U){}}else window.web3?window.web3=new p.a(web3.currentProvider):console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");var d=web3,f="0x9fc1a2e85b3ae6b4b0a36146929f2c1a860689af",m=[{anonymous:!1,inputs:[{indexed:!1,name:"contractAddress",type:"address"},{indexed:!1,name:"projectStarter",type:"address"},{indexed:!1,name:"projectTitle",type:"string"},{indexed:!1,name:"projectDesc",type:"string"},{indexed:!1,name:"deadline",type:"uint256"},{indexed:!1,name:"goalAmount",type:"uint256"}],name:"ProjectStarted",type:"event"},{constant:!1,inputs:[{name:"title",type:"string"},{name:"description",type:"string"},{name:"durationInDays",type:"uint256"},{name:"amountToRaise",type:"uint256"}],name:"startProject",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"returnAllProjects",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"}],y=new d.eth.Contract(m,f),v=y,b=[{constant:!0,inputs:[],name:"creator",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"amountGoal",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"raiseBy",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"contributions",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"title",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"completeAt",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"description",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"checkIfFundingCompleteOrExpired",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"getRefund",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"state",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"payOut",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"currentBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"contribute",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"getDetails",outputs:[{name:"projectStarter",type:"address"},{name:"projectTitle",type:"string"},{name:"projectDesc",type:"string"},{name:"deadline",type:"uint256"},{name:"currentState",type:"uint8"},{name:"currentAmount",type:"uint256"},{name:"goalAmount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"projectStarter",type:"address"},{name:"projectTitle",type:"string"},{name:"projectDesc",type:"string"},{name:"fundRaisingDeadline",type:"uint256"},{name:"goalAmount",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"contributor",type:"address"},{indexed:!1,name:"amount",type:"uint256"},{indexed:!1,name:"currentTotal",type:"uint256"}],name:"FundingReceived",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"recipient",type:"address"}],name:"CreatorPaid",type:"event"}],g=function(t){var e=new d.eth.Contract(b,t);return e},h={name:"App",data:function(){return{startProjectDialog:!1,account:null,stateMap:[{color:"primary",text:"Ongoing"},{color:"warning",text:"Expired"},{color:"success",text:"Completed"}],projectData:[],newProject:{isLoading:!1}}},mounted:function(){var t=this;d.eth.getAccounts().then(function(e){var n=Object(u["a"])(e,1);t.account=n[0],t.getProjects()})},methods:{getProjects:function(){var t=this;v.methods.returnAllProjects().call().then(function(e){e.forEach(function(e){var n=g(e);n.methods.getDetails().call().then(function(e){var a=e;a.isLoading=!1,a.contract=n,t.projectData.push(a)})})})},startProject:function(){var t=this;this.newProject.isLoading=!0,v.methods.startProject(this.newProject.title,this.newProject.description,this.newProject.duration,d.utils.toWei(this.newProject.amountGoal,"ether")).send({from:this.account}).then(function(e){var n=e.events.ProjectStarted.returnValues;n.isLoading=!1,n.currentAmount=0,n.currentState=0,n.contract=g(n.contractAddress),t.startProjectDialog=!1,t.newProject={isLoading:!1}})},fundProject:function(t){var e=this;if(this.projectData[t].fundAmount){var n=this.projectData[t].contract;this.projectData[t].isLoading=!0,n.methods.contribute().send({from:this.account,value:d.utils.toWei(this.projectData[t].fundAmount,"ether")}).then(function(n){var a=c()(n.events.FundingReceived.returnValues.currentTotal,10),o=c()(e.projectData[t].goalAmount,10);e.projectData[t].currentAmount=a,e.projectData[t].isLoading=!1,a>=o&&(e.projectData[t].currentState=2)})}},getRefund:function(t){var e=this;this.projectData[t].isLoading=!0,this.projectData[t].contract.methods.getRefund().send({from:this.account}).then(function(){e.projectData[t].isLoading=!1})}}},w=h,j=n("2877"),x=n("6544"),P=n.n(x),_=n("7496"),D=n("8336"),C=n("b0af"),M=n("99d9"),S=n("12b2"),A=n("cc20"),k=n("a523"),T=n("549c"),V=n("169a"),L=n("0e8f"),O=n("ce87"),E=n("a722"),R=n("8e36"),$=n("9910"),G=n("2677"),F=n("a844"),H=Object(j["a"])(w,r,i,!1,null,null,null),B=H.exports;P()(H,{VApp:_["a"],VBtn:D["a"],VCard:C["a"],VCardActions:M["a"],VCardText:M["b"],VCardTitle:S["a"],VChip:A["a"],VContainer:k["a"],VContent:T["a"],VDialog:V["a"],VFlex:L["a"],VHover:O["a"],VLayout:E["a"],VProgressLinear:R["a"],VSpacer:$["a"],VTextField:G["a"],VTextarea:F["a"]}),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(B)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){}});
//# sourceMappingURL=app.344dd7b5.js.map