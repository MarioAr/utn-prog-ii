"use strict";(self.webpackChunkprog_2_web=self.webpackChunkprog_2_web||[]).push([[1772],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>j});var n=i(67294);function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){c(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function M(e,t){if(null==e)return{};var i,n,c=function(e,t){if(null==e)return{};var i,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(c[i]=e[i]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(c[i]=e[i])}return c}var o=n.createContext({}),s=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},l=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",L={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},D=n.forwardRef((function(e,t){var i=e.components,c=e.mdxType,r=e.originalType,o=e.parentName,l=M(e,["components","mdxType","originalType","parentName"]),u=s(i),D=c,j=u["".concat(o,".").concat(D)]||u[D]||L[D]||r;return i?n.createElement(j,a(a({ref:t},l),{},{components:i})):n.createElement(j,a({ref:t},l))}));function j(e,t){var i=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=i.length,a=new Array(r);a[0]=D;var M={};for(var o in t)hasOwnProperty.call(t,o)&&(M[o]=t[o]);M.originalType=e,M[u]="string"==typeof e?e:c,a[1]=M;for(var s=2;s<r;s++)a[s]=i[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}D.displayName="MDXCreateElement"},3181:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>L,frontMatter:()=>r,metadata:()=>M,toc:()=>s});var n=i(87462),c=(i(67294),i(3905));const r={sidebar_label:"C01 - Competencia gen\xe9rica",title:"Ejercicio C01 - Competencia gen\xe9rica",sidebar_position:101,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},a=void 0,M={unversionedId:"clases/generics/Ejercicios/C01-competencia-generica",id:"clases/generics/Ejercicios/C01-competencia-generica",title:"Ejercicio C01 - Competencia gen\xe9rica",description:"---",source:"@site/docs/clases/12-generics/Ejercicios/C01-competencia-generica.md",sourceDirName:"clases/12-generics/Ejercicios",slug:"/clases/generics/Ejercicios/C01-competencia-generica",permalink:"/utn-prog-ii/docs/clases/generics/Ejercicios/C01-competencia-generica",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/clases/12-generics/Ejercicios/C01-competencia-generica.md",tags:[],version:"current",sidebarPosition:101,frontMatter:{sidebar_label:"C01 - Competencia gen\xe9rica",title:"Ejercicio C01 - Competencia gen\xe9rica",sidebar_position:101,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},sidebar:"Clases",previous:{title:"I02 - Contabilidad",permalink:"/utn-prog-ii/docs/clases/generics/Ejercicios/I02-contabilidad"},next:{title:"\xcdndice",permalink:"/utn-prog-ii/docs/interfaces"}},o={},s=[{value:"Consigna",id:"consigna",level:3},{value:"Resoluci\xf3n",id:"resoluci\xf3n",level:3}],l={toc:s},u="wrapper";function L(e){let{components:t,...r}=e;return(0,c.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"consigna"},"Consigna"),(0,c.kt)("p",null,"Partir del ejercicio ",(0,c.kt)("a",{parentName:"p",href:"/utn-prog-ii/docs/clases/testing/Ejercicios/C03-parada-en-boxes"},"Parada en boxes"),"."),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"La clase ",(0,c.kt)("inlineCode",{parentName:"li"},"Competencia")," deber\xe1 tener un tipo gen\xe9rico, el cual s\xf3lo podr\xe1 ser del tipo ",(0,c.kt)("inlineCode",{parentName:"li"},"VehiculoDeCarrera")," o uno de sus derivados."),(0,c.kt)("li",{parentName:"ol"},"La lista de competidores cambiar\xe1 del tipo ",(0,c.kt)("inlineCode",{parentName:"li"},"VehiculoDeCarrera")," al tipo gen\xe9rico."),(0,c.kt)("li",{parentName:"ol"},"Realizar todos los cambios necesarios para que esto funcione correctamente.",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"Tener en cuenta que el test unitario planteado en ",(0,c.kt)("a",{parentName:"li",href:"/utn-prog-ii/docs/clases/testing/Ejercicios/C03-parada-en-boxes"},"Parada en boxes")," que controla el lanzamiento de la excepci\xf3n ",(0,c.kt)("inlineCode",{parentName:"li"},"CompetenciaNoDisponible")," ya no es necesario.")))),(0,c.kt)("h3",{id:"resoluci\xf3n"},"Resoluci\xf3n"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"center"},(0,c.kt)("img",{alt:"img",src:i(67251).Z,width:"32",height:"32"})),(0,c.kt)("th",{parentName:"tr",align:"center"},"Video"),(0,c.kt)("th",{parentName:"tr",align:"center"},(0,c.kt)("img",{alt:"img",src:i(90732).Z,width:"32",height:"32"})),(0,c.kt)("th",{parentName:"tr",align:"center"},"C\xf3digo")))))}L.isMDXComponent=!0},90732:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAzLDBDNy4xNywwLDAuMDA4LDcuMTYyLDAuMDA4LDE1Ljk5NyAgYzAsNy4wNjcsNC41ODIsMTMuMDYzLDEwLjk0LDE1LjE3OWMwLjgsMC4xNDYsMS4wNTItMC4zMjgsMS4wNTItMC43NTJjMC0wLjM4LDAuMDA4LTEuNDQyLDAtMi43NzcgIGMtNC40NDksMC45NjctNS4zNzEtMi4xMDctNS4zNzEtMi4xMDdjLTAuNzI3LTEuODQ4LTEuNzc1LTIuMzQtMS43NzUtMi4zNGMtMS40NTItMC45OTIsMC4xMDktMC45NzMsMC4xMDktMC45NzMgIGMxLjYwNSwwLjExMywyLjQ1MSwxLjY0OSwyLjQ1MSwxLjY0OWMxLjQyNywyLjQ0MywzLjc0MywxLjczNyw0LjY1NCwxLjMyOWMwLjE0Ni0xLjAzNCwwLjU2LTEuNzM5LDEuMDE3LTIuMTM5ICBjLTMuNTUyLTAuNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2YzAtMS43NDcsMC42MjMtMy4xNzQsMS42NDYtNC4yOTJDNy4yOCwxMC40NjQsNi43Myw4LjgzNyw3LjYwMiw2LjYzNCAgYzAsMCwxLjM0My0wLjQzLDQuMzk4LDEuNjQxYzEuMjc2LTAuMzU1LDIuNjQ1LTAuNTMyLDQuMDA1LTAuNTM4YzEuMzU5LDAuMDA2LDIuNzI3LDAuMTgzLDQuMDA1LDAuNTM4ICBjMy4wNTUtMi4wNyw0LjM5Ni0xLjY0MSw0LjM5Ni0xLjY0MWMwLjg3MiwyLjIwMywwLjMyMywzLjgzLDAuMTU5LDQuMjM0YzEuMDIzLDEuMTE4LDEuNjQ0LDIuNTQ1LDEuNjQ0LDQuMjkyICBjMCw2LjE0Ni0zLjc0LDcuNDk4LTcuMzA0LDcuODkzQzE5LjQ3OSwyMy41NDgsMjAsMjQuNTA4LDIwLDI2YzAsMiwwLDMuOTAyLDAsNC40MjhjMCwwLjQyOCwwLjI1OCwwLjkwMSwxLjA3LDAuNzQ2ICBDMjcuNDIyLDI5LjA1NSwzMiwyMy4wNjIsMzIsMTUuOTk3QzMyLDcuMTYyLDI0LjgzOCwwLDE2LjAwMywweiIgZmlsbD0iIzE4MTYxNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},67251:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMxLjY3LDkuMTc5YzAsMC0wLjMxMi0yLjM1My0xLjI3MS0zLjM4OWMtMS4yMTctMS4zNTgtMi41OC0xLjM2Ni0zLjIwNS0xLjQ0M0MyMi43MTcsNCwxNi4wMDIsNCwxNi4wMDIsNCAgIGgtMC4wMTVjMCwwLTYuNzE1LDAtMTEuMTkxLDAuMzQ3QzQuMTcxLDQuNDI0LDIuODA5LDQuNDMyLDEuNTkxLDUuNzlDMC42MzMsNi44MjYsMC4zMiw5LjE3OSwwLjMyLDkuMTc5UzAsMTEuOTQsMCwxNC43MDF2Mi41ODggICBjMCwyLjc2MywwLjMyLDUuNTIzLDAuMzIsNS41MjNzMC4zMTIsMi4zNTIsMS4yNzEsMy4zODZjMS4yMTgsMS4zNTgsMi44MTUsMS4zMTcsMy41MjcsMS40NTlDNy42NzcsMjcuOTE5LDE1Ljk5NSwyOCwxNS45OTUsMjggICBzNi43MjItMC4wMTIsMTEuMTk5LTAuMzU1YzAuNjI1LTAuMDgsMS45ODgtMC4wODgsMy4yMDUtMS40NDZjMC45NTgtMS4wMzQsMS4yNzEtMy4zODYsMS4yNzEtMy4zODZzMC4zMi0yLjc2MSwwLjMyLTUuNTIzdi0yLjU4OCAgIEMzMS45OSwxMS45NCwzMS42Nyw5LjE3OSwzMS42Nyw5LjE3OXoiIGZpbGw9IiNFMDJGMkYiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDEwIDEyLDIyIDIyLDE2ICAiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"}}]);