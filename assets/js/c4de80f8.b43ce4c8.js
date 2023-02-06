"use strict";(self.webpackChunkkube_green_github_io=self.webpackChunkkube_green_github_io||[]).push([[7943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},l="Install",i={unversionedId:"install",id:"install",title:"Install",description:"Prerequisite",source:"@site/docs/install.md",sourceDirName:".",slug:"/install",permalink:"/docs/install",draft:!1,editUrl:"https://github.com/kube-green/kube-green.github.io/edit/main/docs/install.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How it works",permalink:"/docs/lifecycle"},next:{title:"Configuration",permalink:"/docs/configuration"}},p={},u=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"kubectl apply",id:"kubectl-apply",level:2},{value:"kustomize",id:"kustomize",level:2},{value:"Change default configuration",id:"change-default-configuration",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Operator Lifecycle Manager (OLM)",id:"operator-lifecycle-manager-olm",level:2},{value:"Install from OperatorHub.io",id:"install-from-operatorhubio",level:3},{value:"Install on OpenShift",id:"install-on-openshift",level:3},{value:"Cloud compatibility",id:"cloud-compatibility",level:2},{value:"GKE",id:"gke",level:3},{value:"AWS EKS",id:"aws-eks",level:3}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install"},"Install"),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"kube-green")," support all Kubernetes cluster versions >= 1.19 <= 1.24 and OpenShift Container Platform v4."),(0,o.kt)("p",null,"Supported architectures are: amd64, arm64."),(0,o.kt)("p",null,"To successfully install ",(0,o.kt)("em",{parentName:"p"},"kube-green"),", in the cluster must be installed a ",(0,o.kt)("strong",{parentName:"p"},"cert-manager"),". If it is not already installed installed, ",(0,o.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/"},"click here"),"."),(0,o.kt)("h2",{id:"kubectl-apply"},"kubectl apply"),(0,o.kt)("p",null,"With this method, you can not change the default configuration parameters."),(0,o.kt)("p",null,"The default static configuration for the latest release can be installed with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f https://github.com/kube-green/kube-green/releases/latest/download/kube-green.yaml\n")),(0,o.kt)("p",null,"If you want to install a specific release version, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f https://github.com/kube-green/kube-green/releases/download/${RELEASE_TAG}/kube-green.yaml\n")),(0,o.kt)("p",null,"with ",(0,o.kt)("inlineCode",{parentName:"p"},"${RELEASE_TAG}")," correctly filled."),(0,o.kt)("h2",{id:"kustomize"},"kustomize"),(0,o.kt)("h3",{id:"change-default-configuration"},"Change default configuration"),(0,o.kt)("p",null,"You can change default configuration editing the config files."),(0,o.kt)("p",null,"For example, to deploy the controller in another namespace, change the file ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kube-green/kube-green/blob/main/config/default/kustomization.yaml#L2"},"kustomization.yaml")," with the desired namespace name."),(0,o.kt)("h3",{id:"deploy"},"Deploy"),(0,o.kt)("p",null,"To install ",(0,o.kt)("em",{parentName:"p"},"kube-green")," in the cluster, clone the repository and run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make deploy\n")),(0,o.kt)("p",null,"This will create a new namespace, ",(0,o.kt)("em",{parentName:"p"},"kube-green"),", which contains the pod of the operator."),(0,o.kt)("h2",{id:"operator-lifecycle-manager-olm"},"Operator Lifecycle Manager (OLM)"),(0,o.kt)("h3",{id:"install-from-operatorhubio"},"Install from OperatorHub.io"),(0,o.kt)("p",null,"You can find ",(0,o.kt)("em",{parentName:"p"},"kube-green")," in the ",(0,o.kt)("a",{parentName:"p",href:"https://operatorhub.io/operator/kube-green"},"OperatorHub.io website"),". Click the Install button, and follow the instructions."),(0,o.kt)("h3",{id:"install-on-openshift"},"Install on OpenShift"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"kube-green")," is in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.9/operators/understanding/olm-rh-catalogs.html"},"Red Hat-provided Operator catalogs")," called community operators. On OpenShift 4 you can install ",(0,o.kt)("em",{parentName:"p"},"kube-green")," from ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.9/operators/understanding/olm-understanding-operatorhub.html"},"OperatorHub"),". To install it, follow ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.9/operators/admin/olm-adding-operators-to-cluster.html"},"this guide"),"."),(0,o.kt)("h2",{id:"cloud-compatibility"},"Cloud compatibility"),(0,o.kt)("h3",{id:"gke"},"GKE"),(0,o.kt)("p",null,"When Google configure the control plane for private cluster, they automatically configure VPC peering between your Kubernetes cluster network and a separate Google managed project."),(0,o.kt)("p",null,"To restrict what Google is able to access in your cluster, the firewall rules configured restrict access to your Kubernetes pods. This means that the webhook won't work, and you see an error like ",(0,o.kt)("inlineCode",{parentName:"p"},"Internal error occurred: failed calling webhook ...:")),(0,o.kt)("p",null,"So, to use the webhook component with a GKE private cluster, you need to configure an additional firewall rule to allow the GKE control plane to access to your webhook pod."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"kube-green")," uses webhook (exposed on port 9443) to check that SleepInfo CRD is valid. In order to make it works, you must open the 9443 port (or change the exposed port by configuration) otherwise it would not possible to add SleepInfo CRD."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#add_firewall_rules"},"Here")," you can read more information about how to add firewall rules to GKE."),(0,o.kt)("h3",{id:"aws-eks"},"AWS EKS"),(0,o.kt)("p",null,"When using a custom CNI on EKS (such as cilium), the webhook cannot be reached by kube-green. This happens because the control plane cannot be configured to run on a custom CNI, so the CNIs differ between control plane and worker nodes."),(0,o.kt)("p",null,"To address this, set ",(0,o.kt)("inlineCode",{parentName:"p"},"hostNetwork: true")," in the deployment of the webhook to run it in the host network."),(0,o.kt)("p",null,"To set this, uncomment the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"# - host_network_patch.yaml")," line (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kube-green/kube-green/blob/main/config/default/kustomization.yaml"},"in this file"),") to apply the patch with the ",(0,o.kt)("inlineCode",{parentName:"p"},"hostNetwork: true")," value."))}c.isMDXComponent=!0}}]);