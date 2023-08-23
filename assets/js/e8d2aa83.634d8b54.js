"use strict";(self.webpackChunkprog_2_web=self.webpackChunkprog_2_web||[]).push([[3581],{3905:(e,t,a)=>{a.d(t,{Zo:()=>M,kt:()=>L});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},M=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,M=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,L=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(L,o(o({ref:t},M),{},{components:a})):r.createElement(L,o({ref:t},M))}));function L(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18864:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={sidebar_label:"I05 - Prueba de geometr\xeda",title:"Ejercicio I05 - Prueba de geometr\xeda",sidebar_position:5,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},o=void 0,l={unversionedId:"clases/objetos/Ejercicios/I05-prueba-geometria",id:"clases/objetos/Ejercicios/I05-prueba-geometria",title:"Ejercicio I05 - Prueba de geometr\xeda",description:"---",source:"@site/docs/clases/03-objetos/Ejercicios/I05-prueba-geometria.md",sourceDirName:"clases/03-objetos/Ejercicios",slug:"/clases/objetos/Ejercicios/I05-prueba-geometria",permalink:"/utn-prog-ii/docs/clases/objetos/Ejercicios/I05-prueba-geometria",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/clases/03-objetos/Ejercicios/I05-prueba-geometria.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"I05 - Prueba de geometr\xeda",title:"Ejercicio I05 - Prueba de geometr\xeda",sidebar_position:5,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},sidebar:"Clases",previous:{title:"I04 - Invento argentino",permalink:"/utn-prog-ii/docs/clases/objetos/Ejercicios/I04-invento-argentino"},next:{title:"A01 - Vienen con sistema de auto-navegaci\xf3n",permalink:"/utn-prog-ii/docs/clases/objetos/Ejercicios/A01-vienen-con-sistema-auto-navegacion"}},s={},c=[{value:"Consigna",id:"consigna",level:3},{value:"Resoluci\xf3n",id:"resoluci\xf3n",level:3}],M={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},M,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"consigna"},"Consigna"),(0,n.kt)("p",null,"En un proyecto de biblioteca de clases, crear las clases modeladas en el siguiente diagrama:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Diagrama de clases",src:a(59224).Z,width:"499",height:"297"})),(0,n.kt)("p",null,"Ambas clases deber\xe1n encontrarse dentro de un espacio de nombres (namespace) llamado ",(0,n.kt)("inlineCode",{parentName:"p"},"Geometria"),"."),(0,n.kt)("p",null,"La clase ",(0,n.kt)("inlineCode",{parentName:"p"},"Punto")," debe tener:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dos atributos ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"privados"))," con acceso de s\xf3lo lectura (s\xf3lo con getters), que ser\xe1n las coordenadas del punto. "),(0,n.kt)("li",{parentName:"ul"},"Un constructor que reciba los par\xe1metros x e y.")),(0,n.kt)("p",null,"La clase ",(0,n.kt)("inlineCode",{parentName:"p"},"Rectangulo"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tiene los atributos de tipo ",(0,n.kt)("inlineCode",{parentName:"li"},"Punto"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"vertice1"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"vertice2"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"vertice3")," y ",(0,n.kt)("inlineCode",{parentName:"li"},"vertice4")," (que corresponden a los cuatro v\xe9rtices del rect\xe1ngulo)."),(0,n.kt)("li",{parentName:"ul"},"La base de todos los rect\xe1ngulos de esta clase ser\xe1 siempre horizontal. El constructor para calcular\xe1 los v\xe9rtices 2 y 4 del rect\xe1ngulo a partir de los v\xe9rtices 1 y 3. Utilizar el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"li"},"Abs")," de la clase ",(0,n.kt)("inlineCode",{parentName:"li"},"Math")," que retorna el valor absoluto de un n\xfamero y ser\xe1 necesario para obtener la distancia entre puntos."),(0,n.kt)("li",{parentName:"ul"},"Realizar los m\xe9todos ",(0,n.kt)("strong",{parentName:"li"},"getters")," para los atributos privados ",(0,n.kt)("inlineCode",{parentName:"li"},"area")," y ",(0,n.kt)("inlineCode",{parentName:"li"},"perimetro"),"."),(0,n.kt)("li",{parentName:"ul"},"El \xe1rea (",(0,n.kt)("inlineCode",{parentName:"li"},"base * altura"),") y el per\xedmetro (",(0,n.kt)("inlineCode",{parentName:"li"},"(base + altura) / 2"),") se deber\xe1n calcular s\xf3lo una vez cuando se llame por primera vez a su correspondiente m\xe9todo getter. En las siguientes invocaciones de dichos m\xe9todos se deber\xe1 retornar siempre el valor calculado anteriormente. ")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Crear un proyecto de consola."),(0,n.kt)("li",{parentName:"ol"},"En la clase ",(0,n.kt)("inlineCode",{parentName:"li"},"Program"),", desarrollar un m\xe9todo de clase (est\xe1tico) que muestre todos los datos de una instancia de ",(0,n.kt)("inlineCode",{parentName:"li"},"Rectangulo")," que reciba como par\xe1metro."),(0,n.kt)("li",{parentName:"ol"},"En el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"li"},"Main")," probar las funcionalidades de las clases ",(0,n.kt)("inlineCode",{parentName:"li"},"Punto")," y ",(0,n.kt)("inlineCode",{parentName:"li"},"Rect\xe1ngulo"),".",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Instanciar un nuevo ",(0,n.kt)("inlineCode",{parentName:"li"},"Rectangulo"),"."),(0,n.kt)("li",{parentName:"ol"},"Imprimir por pantalla los valores de \xe1rea y per\xedmetro.")))),(0,n.kt)("h3",{id:"resoluci\xf3n"},"Resoluci\xf3n"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"img",src:a(67251).Z,width:"32",height:"32"})),(0,n.kt)("th",{parentName:"tr",align:"center"},"Video"),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"img",src:a(90732).Z,width:"32",height:"32"})),(0,n.kt)("th",{parentName:"tr",align:"center"},"C\xf3digo")))))}d.isMDXComponent=!0},90732:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAzLDBDNy4xNywwLDAuMDA4LDcuMTYyLDAuMDA4LDE1Ljk5NyAgYzAsNy4wNjcsNC41ODIsMTMuMDYzLDEwLjk0LDE1LjE3OWMwLjgsMC4xNDYsMS4wNTItMC4zMjgsMS4wNTItMC43NTJjMC0wLjM4LDAuMDA4LTEuNDQyLDAtMi43NzcgIGMtNC40NDksMC45NjctNS4zNzEtMi4xMDctNS4zNzEtMi4xMDdjLTAuNzI3LTEuODQ4LTEuNzc1LTIuMzQtMS43NzUtMi4zNGMtMS40NTItMC45OTIsMC4xMDktMC45NzMsMC4xMDktMC45NzMgIGMxLjYwNSwwLjExMywyLjQ1MSwxLjY0OSwyLjQ1MSwxLjY0OWMxLjQyNywyLjQ0MywzLjc0MywxLjczNyw0LjY1NCwxLjMyOWMwLjE0Ni0xLjAzNCwwLjU2LTEuNzM5LDEuMDE3LTIuMTM5ICBjLTMuNTUyLTAuNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2YzAtMS43NDcsMC42MjMtMy4xNzQsMS42NDYtNC4yOTJDNy4yOCwxMC40NjQsNi43Myw4LjgzNyw3LjYwMiw2LjYzNCAgYzAsMCwxLjM0My0wLjQzLDQuMzk4LDEuNjQxYzEuMjc2LTAuMzU1LDIuNjQ1LTAuNTMyLDQuMDA1LTAuNTM4YzEuMzU5LDAuMDA2LDIuNzI3LDAuMTgzLDQuMDA1LDAuNTM4ICBjMy4wNTUtMi4wNyw0LjM5Ni0xLjY0MSw0LjM5Ni0xLjY0MWMwLjg3MiwyLjIwMywwLjMyMywzLjgzLDAuMTU5LDQuMjM0YzEuMDIzLDEuMTE4LDEuNjQ0LDIuNTQ1LDEuNjQ0LDQuMjkyICBjMCw2LjE0Ni0zLjc0LDcuNDk4LTcuMzA0LDcuODkzQzE5LjQ3OSwyMy41NDgsMjAsMjQuNTA4LDIwLDI2YzAsMiwwLDMuOTAyLDAsNC40MjhjMCwwLjQyOCwwLjI1OCwwLjkwMSwxLjA3LDAuNzQ2ICBDMjcuNDIyLDI5LjA1NSwzMiwyMy4wNjIsMzIsMTUuOTk3QzMyLDcuMTYyLDI0LjgzOCwwLDE2LjAwMywweiIgZmlsbD0iIzE4MTYxNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},67251:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMxLjY3LDkuMTc5YzAsMC0wLjMxMi0yLjM1My0xLjI3MS0zLjM4OWMtMS4yMTctMS4zNTgtMi41OC0xLjM2Ni0zLjIwNS0xLjQ0M0MyMi43MTcsNCwxNi4wMDIsNCwxNi4wMDIsNCAgIGgtMC4wMTVjMCwwLTYuNzE1LDAtMTEuMTkxLDAuMzQ3QzQuMTcxLDQuNDI0LDIuODA5LDQuNDMyLDEuNTkxLDUuNzlDMC42MzMsNi44MjYsMC4zMiw5LjE3OSwwLjMyLDkuMTc5UzAsMTEuOTQsMCwxNC43MDF2Mi41ODggICBjMCwyLjc2MywwLjMyLDUuNTIzLDAuMzIsNS41MjNzMC4zMTIsMi4zNTIsMS4yNzEsMy4zODZjMS4yMTgsMS4zNTgsMi44MTUsMS4zMTcsMy41MjcsMS40NTlDNy42NzcsMjcuOTE5LDE1Ljk5NSwyOCwxNS45OTUsMjggICBzNi43MjItMC4wMTIsMTEuMTk5LTAuMzU1YzAuNjI1LTAuMDgsMS45ODgtMC4wODgsMy4yMDUtMS40NDZjMC45NTgtMS4wMzQsMS4yNzEtMy4zODYsMS4yNzEtMy4zODZzMC4zMi0yLjc2MSwwLjMyLTUuNTIzdi0yLjU4OCAgIEMzMS45OSwxMS45NCwzMS42Nyw5LjE3OSwzMS42Nyw5LjE3OXoiIGZpbGw9IiNFMDJGMkYiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDEwIDEyLDIyIDIyLDE2ICAiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},59224:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/prueba-geometria-diagram-be87fdac08aad2a269c5c41353e4b607.png"}}]);