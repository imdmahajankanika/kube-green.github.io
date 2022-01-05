"use strict";(self.webpackChunkkube_green_github_io=self.webpackChunkkube_green_github_io||[]).push([[885],{1824:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),o=n(9887),r=n.n(o),l="inputCalc_F3lj",u="cardBody_pHtg",i="inputWrapper_U0kh",s="subTitle_qnpF";function c(){var e=a.useState(new(r())(11)),t=e[0],n=e[1],o=a.useState(new(r())(100)),l=o[0],i=o[1],c=a.useState(new(r())(100)),d=c[0],h=c[1],b=a.useState(new(r())(128)),v=b[0],w=b[1],f=a.useMemo((function(){return p(t,l,d,v)}),[t,l,d,v]),g=a.useMemo((function(){return p(t,l,d,new(r())(0))}),[t,l,d]);return a.createElement("div",{className:"card",style:{width:"60%",margin:"auto"}},a.createElement("div",{className:"card__header"},a.createElement("h2",null,"CO2 Calculator")),a.createElement("div",{className:"card__body"},a.createElement("div",{className:u},a.createElement(m,{label:"CO2 per pods per year (kg CO2eq)",onInputChange:n,value:t}),a.createElement(m,{label:"Total number of pods",onInputChange:i,value:l}),a.createElement(m,{label:"Pods sleeped",onInputChange:h,value:d}),a.createElement(m,{label:"Hour of sleep per week",onInputChange:w,value:v})),a.createElement("h3",null,"Results",a.createElement("div",{className:s},"Total (Kg CO2eq/week)")),a.createElement("div",null,a.createElement("div",null,"without kube-green:"," ",g.toString()),a.createElement("div",null,a.createElement("b",null,"with kube-green:"," ",f.toString())),a.createElement("div",null,a.createElement("b",null,"Difference:"," ",f.minus(g).toString())))))}var d=new(r())(7).mul(new(r())(24));function p(e,t,n,a){var o=e.dividedBy(365).dividedBy(24),r=o.mul(t.minus(n)).mul(a),l=o.mul(t).mul(d.minus(a));return r.plus(l).toDecimalPlaces(0)}function m(e){var t=e.label,n=e.value,o=e.onInputChange;return a.createElement("div",{className:i},a.createElement("div",null,t),a.createElement("div",null,a.createElement("input",{className:l,onChange:function(e){return o(new(r())(e.target.value||0))},type:"number",value:n.toString()})))}},3577:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),l=n(1824),u=["components"],i={sidebar_position:11},s="FAQ",c={unversionedId:"FAQ",id:"FAQ",title:"FAQ",description:"I have a couple of nodes with low utilization, but they are not scaled down. Why?",source:"@site/docs/FAQ.mdx",sourceDirName:".",slug:"/FAQ",permalink:"/docs/FAQ",editUrl:"https://github.com/kube-green/kube-green.github.io/edit/main/docs/FAQ.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/docs/apireference_v1alpha1"}},d=[{value:"I have a couple of nodes with low utilization, but they are not scaled down. Why?",id:"i-have-a-couple-of-nodes-with-low-utilization-but-they-are-not-scaled-down-why",children:[],level:3},{value:"How many CO2 is produced by pod?",id:"how-many-co2-is-produced-by-pod",children:[],level:3}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"i-have-a-couple-of-nodes-with-low-utilization-but-they-are-not-scaled-down-why"},"I have a couple of nodes with low utilization, but they are not scaled down. Why?"),(0,r.kt)("p",null,"Have you set the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler"},"cluster autoscaler"),"?"),(0,r.kt)("p",null,"If cluster autoscaler is set up, it should be correctly configured to scale down the nodes.\nTo see the possible issues, check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#i-have-a-couple-of-nodes-with-low-utilization-but-they-are-not-scaled-down-why"},"cluster autoscaler documentation"),"."),(0,r.kt)("h3",{id:"how-many-co2-is-produced-by-pod"},"How many CO2 is produced by pod?"),(0,r.kt)("p",null,"This calculations are based on the following assumptions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Emissions for cloud server using 100% green electricity: ",(0,r.kt)("strong",{parentName:"li"},"160 Kg CO2eq / year and server")," (from ",(0,r.kt)("a",{parentName:"li",href:"https://www.goclimate.com/blog/the-carbon-footprint-of-servers/#:~:text=Cloud%20server%20using%20100%25%20green%20electricity:%20160%20kg%20CO2e%20/%20year%20and%20server"},"goclimate.com"),"\n)"),(0,r.kt)("li",{parentName:"ul"},"Cluster node of 2 cpu. We approximate ",(0,r.kt)("strong",{parentName:"li"},"1 node is 1 server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"15 pods per node"))),(0,r.kt)("p",null,"With this assumption, the mean consumption of CO2 per pod in a year is 160 / 15 = ",(0,r.kt)("strong",{parentName:"p"},"11 Kg CO2eq / year per pod"),"."),(0,r.kt)(l.Z,{mdxType:"ConsumptionCalculator"}))}m.isMDXComponent=!0}}]);