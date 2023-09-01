"use strict";(self.webpackChunkprog_2_web=self.webpackChunkprog_2_web||[]).push([[8024],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,v=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return r?a.createElement(v,o(o({ref:t},d),{},{components:r})):a.createElement(v,o({ref:t},d))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12184:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={title:"Instalaci\xf3n del entorno de base de datos",sidebar_label:"Instalaci\xf3n del entorno de base de datos",sidebar_position:8,slug:"/introduccion/sql-server",hide_table_of_contents:!1,hide_title:!1,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},o=void 0,s={unversionedId:"introduccion/entorno-trabajo/sql-server",id:"introduccion/entorno-trabajo/sql-server",title:"Instalaci\xf3n del entorno de base de datos",description:"Instalaci\xf3n de SQL Server",source:"@site/docs/introduccion/entorno-trabajo/sql-server.md",sourceDirName:"introduccion/entorno-trabajo",slug:"/introduccion/sql-server",permalink:"/docs/introduccion/sql-server",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/introduccion/entorno-trabajo/sql-server.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Instalaci\xf3n del entorno de base de datos",sidebar_label:"Instalaci\xf3n del entorno de base de datos",sidebar_position:8,slug:"/introduccion/sql-server",hide_table_of_contents:!1,hide_title:!1,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Introduccion",previous:{title:"Instalaci\xf3n de Visual Studio y .NET",permalink:"/docs/introduccion/visual-studio"},next:{title:"Gu\xeda de estilos",permalink:"/docs/introduccion/guia-estilos"}},l={},c=[{value:"Instalaci\xf3n de SQL Server",id:"instalaci\xf3n-de-sql-server",level:2},{value:"Instalaci\xf3n de SQL Server Management Studio",id:"instalaci\xf3n-de-sql-server-management-studio",level:2},{value:"Verificar que todo funcione",id:"verificar-que-todo-funcione",level:2},{value:"Instalaci\xf3n de entonrno SQL Server",id:"instalaci\xf3n-de-entonrno-sql-server",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"instalaci\xf3n-de-sql-server"},"Instalaci\xf3n de SQL Server"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Microsoft SQL Server")," es un sistema de gesti\xf3n de base de datos relacional, desarrollado por la empresa Microsoft. El lenguaje de desarrollo utilizado es Transact-SQL, una implementaci\xf3n del est\xe1ndar ANSI del lenguaje SQL, utilizado para manipular y recuperar datos, crear tablas y definir relaciones entre ellas."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Descargar el instalador para la ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xfaltima versi\xf3n"))," de ",(0,n.kt)("strong",{parentName:"li"},"SQL Server")," desde ",(0,n.kt)("a",{parentName:"li",href:"https://www.microsoft.com/es-es/sql-server/sql-server-downloads"},"https://www.microsoft.com/es-es/sql-server/sql-server-downloads"),". Elegir la ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"versi\xf3n Developer/Desarrollador")),". ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SQL Server Developer Download",src:r(61829).Z,width:"1402",height:"418"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Ejecutar el instalador y elegir la ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"opci\xf3n b\xe1sica")),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SQL Server Developer Download",src:r(56481).Z,width:"838",height:"660"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Aceptar los t\xe9rminos.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Elegir la ubicaci\xf3n de la instalaci\xf3n (puede ser la que viene por defecto) y presionar el bot\xf3n "Instalar". ')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Esperar que termine el proceso de descarga e instalaci\xf3n. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Una vez finalizado, presionar el bot\xf3n "Cerrar".'))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SQL Server Developer Download",src:r(36926).Z,width:"610",height:"72"})),(0,n.kt)("admonition",{title:"Computadoras con bajos recursos ",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Si tu computadora no soporta la \xfaltima versi\xf3n de SQL Server, pod\xe9s descargar y usar la versi\xf3n 2014: ",(0,n.kt)("a",{parentName:"p",href:"https://www.microsoft.com/es-ar/download/details.aspx?id=42299"},"https://www.microsoft.com/es-ar/download/details.aspx?id=42299"))),(0,n.kt)("h2",{id:"instalaci\xf3n-de-sql-server-management-studio"},"Instalaci\xf3n de SQL Server Management Studio"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"SQL Server Management Studio (SSMS)")," es un entorno de desarrollo integrado para administrar cualquier infraestructura SQL. Permite configurar, consultar, dise\xf1ar, monitorear y administrar instancias de SQL Server y bases de datos."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Descargar el instalador para la ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xfaltima versi\xf3n"))," de ",(0,n.kt)("strong",{parentName:"li"},"SQL Server Management Studio (SSMS)")," desde ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15"},"https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15"),". ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SQL Server Developer Download",src:r(56539).Z,width:"893",height:"691"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Elegir la ubicaci\xf3n de la instalaci\xf3n (puede ser la que viene por defecto) y presionar el bot\xf3n "Install".')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Esperar que termine el proceso de instalaci\xf3n."))),(0,n.kt)("h2",{id:"verificar-que-todo-funcione"},"Verificar que todo funcione"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Abrir SQL Server Management Studio.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Cargar los siguientes datos en la ventana ",(0,n.kt)("em",{parentName:"p"},"Connect to Server"),":"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Server Type:")," Database Engine"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Server Name:")," ."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Authentication:")," Windows Authentication")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SSMS Connect to Server",src:r(55186).Z,width:"470",height:"309"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Presionar el bot\xf3n "Connect".')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Si se pudo conectar est\xe1 todo correcto. Si tuviste alg\xfan problema contact\xe1 a los docentes."))),(0,n.kt)("h2",{id:"instalaci\xf3n-de-entonrno-sql-server"},"Instalaci\xf3n de entonrno SQL Server"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ksOeu0lf9dU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}u.isMDXComponent=!0},56539:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/sql-management-studio-download-4c32f55d56da1b9eb7753b096cb2d5b6.png"},61829:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/sql-server-developer-download-d1af2e78fd32d5f66dd3ee9c9d070431.png"},56481:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/sql-server-instalador-01-dbfd3efc2a5e4b6646ecb47bb395e213.png"},36926:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"},55186:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ssms-connect-to-server-7832c23e01592615e339e1401c051203.png"}}]);