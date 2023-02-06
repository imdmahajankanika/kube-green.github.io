"use strict";(self.webpackChunkkube_green_github_io=self.webpackChunkkube_green_github_io||[]).push([[9004],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(7462),o=(t(7294),t(3905));const r={sidebar_position:4},i="Configuration",l={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"In the namespace where you want to enable kube-green, apply the SleepInfo CRD.",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,editUrl:"https://github.com/kube-green/kube-green.github.io/edit/main/docs/configuration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/docs/install"},next:{title:"Metrics",permalink:"/docs/metrics"}},p={},s=[{value:"Examples",id:"examples",level:2},{value:"Simplest SleepInfo resource",id:"simplest-sleepinfo-resource",level:3},{value:"Complete SleepInfo resource",id:"complete-sleepinfo-resource",level:3},{value:"Complete SleepInfo without wake up",id:"complete-sleepinfo-without-wake-up",level:3},{value:"Suspend only CronJobs",id:"suspend-only-cronjobs",level:3},{value:"Exclude reference",id:"exclude-reference",level:3}],u={toc:s};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In the namespace where you want to enable ",(0,o.kt)("em",{parentName:"p"},"kube-green"),", apply the SleepInfo CRD.\nAn example of CRD is accessible ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kube-green/kube-green/blob/main/testdata/working-hours.yml"},"at this link"),"."),(0,o.kt)("p",null,"The SleepInfo spec contains:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"weekdays"),": day of the week. ",(0,o.kt)("inlineCode",{parentName:"li"},"*")," is every day, ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," is monday, ",(0,o.kt)("inlineCode",{parentName:"li"},"1-5")," is from monday to friday"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sleepAt"),": time in hours and minutes (HH:mm) when namespace will go to sleep. Valid values are, for example, 19:00or ",(0,o.kt)("inlineCode",{parentName:"li"},"*:*")," for every minute and every hour. Resources sleep will be deployments (setting replicas value to 0) and, if ",(0,o.kt)("inlineCode",{parentName:"li"},"suspendCronjobs")," option is set to true, cron jobs will be suspended."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"wakeUpAt")," (",(0,o.kt)("em",{parentName:"li"},"optional"),"): time in hours and minutes (HH:mm) when namespace should be restored to the initial state (before sleep). Valid values are, for example, 19:00or ",(0,o.kt)("inlineCode",{parentName:"li"},"*:*")," for every minute and every hour. If wake up value is not set, pod in namespace will not be restored. So, you will need to deploy the initial namespace configuration to restore it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"timeZone")," (",(0,o.kt)("em",{parentName:"li"},"optional"),", default to ",(0,o.kt)("em",{parentName:"li"},"UTC"),"): time zone in IANA specification. For example for italian hour, set ",(0,o.kt)("inlineCode",{parentName:"li"},"Europe/Rome"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"suspendDeployments")," (",(0,o.kt)("em",{parentName:"li"},"optional"),", default to ",(0,o.kt)("em",{parentName:"li"},"true"),"): if set to false, deployments will not be suspended."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"suspendCronJobs")," (",(0,o.kt)("em",{parentName:"li"},"optional"),", default to ",(0,o.kt)("em",{parentName:"li"},"false"),"): if set to true, cronjobs will be suspended."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"excludeRef")," (",(0,o.kt)("em",{parentName:"li"},"optional"),"): an array of object containing the resource to exclude from sleep. It can specify exactly the name of the specified resource or match based from the labels. The possible formats are:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"apiVersion"),": version of the resource. Now it is supported ",(0,o.kt)("em",{parentName:"li"},'"apps/v1"'),", ",(0,o.kt)("em",{parentName:"li"},'"batch/v1beta1"')," and ",(0,o.kt)("em",{parentName:"li"},'"batch/v1"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kind"),": the kind of resource. Now it is supported ",(0,o.kt)("em",{parentName:"li"},'"Deployment"')," and ",(0,o.kt)("em",{parentName:"li"},'"CronJob"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name"),": the name of the resource\nor"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"matchLabels"),": an object of strings with the labels to identify a resources\nclick ",(0,o.kt)("a",{parentName:"li",href:"#exclude-reference"},"here")," to see an example.")))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"simplest-sleepinfo-resource"},"Simplest SleepInfo resource"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kube-green.com/v1alpha1\nkind: SleepInfo\nmetadata:\n  name: working-hours\nspec:\n  weekdays: "1-5"\n  sleepAt: "20:00"\n  wakeUpAt: "08:00"\n  timeZone: "Europe/Rome"\n')),(0,o.kt)("p",null,"With this CRD, it's configured a sleep to 20:00 and wake up to 08:00 on weekdays only for Deployments."),(0,o.kt)("h3",{id:"complete-sleepinfo-resource"},"Complete SleepInfo resource"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kube-green.com/v1alpha1\nkind: SleepInfo\nmetadata:\n  name: working-hours\nspec:\n  weekdays: "1-5"\n  sleepAt: "20:00"\n  wakeUpAt: "08:00"\n  timeZone: "Europe/Rome"\n  suspendCronJobs: true\n  excludeRef:\n    - apiVersion: "apps/v1"\n      kind:       Deployment\n      name:       api-gateway\n')),(0,o.kt)("p",null,"With this CRD, it's configured a sleep to 20:00 and wake up to 08:00 on weekdays, for Deployments and CronJobs, excluding the Deployment named api-gateway."),(0,o.kt)("h3",{id:"complete-sleepinfo-without-wake-up"},"Complete SleepInfo without wake up"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kube-green.com/v1alpha1\nkind: SleepInfo\nmetadata:\n  name: working-hours\nspec:\n  weekdays: "1-5"\n  sleepAt: "20:00"\n  timeZone: "Europe/Rome"\n  suspendCronJobs: true\n  excludeRef:\n    - apiVersion: "apps/v1"\n      kind:       Deployment\n      name:       api-gateway\n')),(0,o.kt)("p",null,"With this CRD, it's configured a sleep to 20:00 on weekdays, for Deployments and CronJobs, excluding the Deployment named api-gateway. To wake up, you must redeploy all the resources to set to the initial state."),(0,o.kt)("h3",{id:"suspend-only-cronjobs"},"Suspend only CronJobs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kube-green.com/v1alpha1\nkind: SleepInfo\nmetadata:\n  name: working-hours\nspec:\n  weekdays: "*"\n  sleepAt: "20:00"\n  wakeUpAt: "08:00"\n  suspendCronJobs: true\n  suspendDeployments: false\n  excludeRef:\n    - apiVersion: "batch/v1"\n      kind:       CronJob\n      name:       do-not-suspend\n')),(0,o.kt)("p",null,"With this CRD, it's configured a sleep to 20:00 and wake up to 08:00 on weekdays, only for CronJobs (sleep of Deployments are inactive), excluding the CronJob ",(0,o.kt)("inlineCode",{parentName:"p"},"do-not-suspend"),"."),(0,o.kt)("h3",{id:"exclude-reference"},"Exclude reference"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kube-green.com/v1alpha1\nkind: SleepInfo\nmetadata:\n  name: working-hours\nspec:\n  weekdays: "*"\n  sleepAt: "20:00"\n  wakeUpAt: "08:00"\n  suspendCronJobs: true\n  excludeRef:\n    - apiVersion: "batch/v1"\n      kind:       CronJob\n      name:       do-not-suspend\n    - matchLabels: \n        kube-green.dev/exclude: true\n')),(0,o.kt)("p",null,"With this CRD, it's configured a sleep to 20:00 and wake up to 08:00 on weekdays, excluding the CronJob ",(0,o.kt)("inlineCode",{parentName:"p"},"do-not-suspend")," and all the supported resources with the label ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-green.dev/exclude: true"),"."))}m.isMDXComponent=!0}}]);