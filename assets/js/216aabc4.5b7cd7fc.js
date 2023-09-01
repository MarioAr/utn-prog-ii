"use strict";(self.webpackChunkprog_2_web=self.webpackChunkprog_2_web||[]).push([[956],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var M=r.createContext({}),l=function(e){var t=r.useContext(M),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=l(e.components);return r.createElement(M.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,M=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,p=u["".concat(M,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(p,o(o({ref:t},s),{},{components:a})):r.createElement(p,o({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var M in t)hasOwnProperty.call(t,M)&&(c[M]=t[M]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},51994:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>M,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const i={sidebar_label:"I01 - Sumador",title:"Ejercicio I01 - Sumador",sidebar_position:1,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},o=void 0,c={unversionedId:"clases/sobrecarga/Ejercicios/I01-sumador",id:"clases/sobrecarga/Ejercicios/I01-sumador",title:"Ejercicio I01 - Sumador",description:"---",source:"@site/docs/clases/04-sobrecarga/Ejercicios/I01-sumador.md",sourceDirName:"clases/04-sobrecarga/Ejercicios",slug:"/clases/sobrecarga/Ejercicios/I01-sumador",permalink:"/docs/clases/sobrecarga/Ejercicios/I01-sumador",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/clases/04-sobrecarga/Ejercicios/I01-sumador.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"I01 - Sumador",title:"Ejercicio I01 - Sumador",sidebar_position:1,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},sidebar:"Clases",previous:{title:"Cuestionario",permalink:"/docs/clases/sobrecarga/apuntes/cuestionario"},next:{title:"I02 - Cotizador",permalink:"/docs/clases/sobrecarga/Ejercicios/I02-cotizador"}},M={},l=[{value:"Consigna",id:"consigna",level:3},{value:"Resoluci\xf3n",id:"resoluci\xf3n",level:3}],s={toc:l},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"consigna"},"Consigna"),(0,n.kt)("p",null,"Crear un proyecto de tipo biblioteca de clases y agregar la clase ",(0,n.kt)("inlineCode",{parentName:"p"},"Sumador"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Diagrama de clase Sumador",src:a(14222).Z,width:"386",height:"342"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Crear dos constructores:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Sumador(int)")," inicializa ",(0,n.kt)("inlineCode",{parentName:"li"},"cantidadSumas")," en el valor recibido por par\xe1metro."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Sumador()")," inicializa ",(0,n.kt)("inlineCode",{parentName:"li"},"cantidadSumas")," en cero. Reutilizar\xe1 al primer constructor."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"El m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"Sumar")," incrementar\xe1 ",(0,n.kt)("inlineCode",{parentName:"p"},"cantidadSumas")," en 1 y adicionar\xe1 sus par\xe1metros con la siguiente l\xf3gica:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"En el caso de ",(0,n.kt)("inlineCode",{parentName:"li"},"Sumar(long, long)")," sumar\xe1 los valores num\xe9ricos"),(0,n.kt)("li",{parentName:"ol"},"En el de ",(0,n.kt)("inlineCode",{parentName:"li"},"Sumar(string, string)")," concatenar\xe1 las cadenas de texto.")))),(0,n.kt)("p",null,"Crear un proyecto de consola y agregar un objeto del tipo ",(0,n.kt)("inlineCode",{parentName:"p"},"Sumador")," en el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"Main")," y probar el c\xf3digo."),(0,n.kt)("p",null,"Seguido:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Generar una conversi\xf3n ",(0,n.kt)("strong",{parentName:"p"},"expl\xedcita")," que retorne ",(0,n.kt)("inlineCode",{parentName:"p"},"cantidadSumas"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sobrecargar el operador ",(0,n.kt)("inlineCode",{parentName:"p"},"+")," (suma) con dos operadores de tipo ",(0,n.kt)("inlineCode",{parentName:"p"},"Sumador"),". El resultado ser\xe1 un ",(0,n.kt)("inlineCode",{parentName:"p"},"long")," correspondiente al resultado de la suma del atributo ",(0,n.kt)("inlineCode",{parentName:"p"},"cantidadSumas")," de cada argumento.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sobrecargar el operador ",(0,n.kt)("inlineCode",{parentName:"p"},"|")," (pipe) con dos operadores de tipo ",(0,n.kt)("inlineCode",{parentName:"p"},"Sumador"),". Deber\xe1 retornar ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," si ambos sumadores tienen igual valor en el atributo ",(0,n.kt)("inlineCode",{parentName:"p"},"cantidadSumas"),"."))),(0,n.kt)("p",null,"Agregar un segundo objeto del tipo ",(0,n.kt)("inlineCode",{parentName:"p"},"Sumador")," en el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"Main")," y probar el c\xf3digo."),(0,n.kt)("h3",{id:"resoluci\xf3n"},"Resoluci\xf3n"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"img",src:a(63612).Z,width:"32",height:"32"})),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"th",href:"https://youtu.be/tQAQDaiK_2A"},"Video")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"img",src:a(21044).Z,width:"32",height:"32"})),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"th",href:"https://github.com/codeutnfra/programacion_2_laboratorio_2/tree/master/Ejercicios_Resueltos/Clase_04/I01_Sumador"},"C\xf3digo"))))))}d.isMDXComponent=!0},21044:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAzLDBDNy4xNywwLDAuMDA4LDcuMTYyLDAuMDA4LDE1Ljk5NyAgYzAsNy4wNjcsNC41ODIsMTMuMDYzLDEwLjk0LDE1LjE3OWMwLjgsMC4xNDYsMS4wNTItMC4zMjgsMS4wNTItMC43NTJjMC0wLjM4LDAuMDA4LTEuNDQyLDAtMi43NzcgIGMtNC40NDksMC45NjctNS4zNzEtMi4xMDctNS4zNzEtMi4xMDdjLTAuNzI3LTEuODQ4LTEuNzc1LTIuMzQtMS43NzUtMi4zNGMtMS40NTItMC45OTIsMC4xMDktMC45NzMsMC4xMDktMC45NzMgIGMxLjYwNSwwLjExMywyLjQ1MSwxLjY0OSwyLjQ1MSwxLjY0OWMxLjQyNywyLjQ0MywzLjc0MywxLjczNyw0LjY1NCwxLjMyOWMwLjE0Ni0xLjAzNCwwLjU2LTEuNzM5LDEuMDE3LTIuMTM5ICBjLTMuNTUyLTAuNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2YzAtMS43NDcsMC42MjMtMy4xNzQsMS42NDYtNC4yOTJDNy4yOCwxMC40NjQsNi43Myw4LjgzNyw3LjYwMiw2LjYzNCAgYzAsMCwxLjM0My0wLjQzLDQuMzk4LDEuNjQxYzEuMjc2LTAuMzU1LDIuNjQ1LTAuNTMyLDQuMDA1LTAuNTM4YzEuMzU5LDAuMDA2LDIuNzI3LDAuMTgzLDQuMDA1LDAuNTM4ICBjMy4wNTUtMi4wNyw0LjM5Ni0xLjY0MSw0LjM5Ni0xLjY0MWMwLjg3MiwyLjIwMywwLjMyMywzLjgzLDAuMTU5LDQuMjM0YzEuMDIzLDEuMTE4LDEuNjQ0LDIuNTQ1LDEuNjQ0LDQuMjkyICBjMCw2LjE0Ni0zLjc0LDcuNDk4LTcuMzA0LDcuODkzQzE5LjQ3OSwyMy41NDgsMjAsMjQuNTA4LDIwLDI2YzAsMiwwLDMuOTAyLDAsNC40MjhjMCwwLjQyOCwwLjI1OCwwLjkwMSwxLjA3LDAuNzQ2ICBDMjcuNDIyLDI5LjA1NSwzMiwyMy4wNjIsMzIsMTUuOTk3QzMyLDcuMTYyLDI0LjgzOCwwLDE2LjAwMywweiIgZmlsbD0iIzE4MTYxNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},63612:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMxLjY3LDkuMTc5YzAsMC0wLjMxMi0yLjM1My0xLjI3MS0zLjM4OWMtMS4yMTctMS4zNTgtMi41OC0xLjM2Ni0zLjIwNS0xLjQ0M0MyMi43MTcsNCwxNi4wMDIsNCwxNi4wMDIsNCAgIGgtMC4wMTVjMCwwLTYuNzE1LDAtMTEuMTkxLDAuMzQ3QzQuMTcxLDQuNDI0LDIuODA5LDQuNDMyLDEuNTkxLDUuNzlDMC42MzMsNi44MjYsMC4zMiw5LjE3OSwwLjMyLDkuMTc5UzAsMTEuOTQsMCwxNC43MDF2Mi41ODggICBjMCwyLjc2MywwLjMyLDUuNTIzLDAuMzIsNS41MjNzMC4zMTIsMi4zNTIsMS4yNzEsMy4zODZjMS4yMTgsMS4zNTgsMi44MTUsMS4zMTcsMy41MjcsMS40NTlDNy42NzcsMjcuOTE5LDE1Ljk5NSwyOCwxNS45OTUsMjggICBzNi43MjItMC4wMTIsMTEuMTk5LTAuMzU1YzAuNjI1LTAuMDgsMS45ODgtMC4wODgsMy4yMDUtMS40NDZjMC45NTgtMS4wMzQsMS4yNzEtMy4zODYsMS4yNzEtMy4zODZzMC4zMi0yLjc2MSwwLjMyLTUuNTIzdi0yLjU4OCAgIEMzMS45OSwxMS45NCwzMS42Nyw5LjE3OSwzMS42Nyw5LjE3OXoiIGZpbGw9IiNFMDJGMkYiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDEwIDEyLDIyIDIyLDE2ICAiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},14222:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/diagramaSumador-c055af95d68e4c1e2a9f9b6f1259f38c.JPG"}}]);