"use strict";(self.webpackChunkprog_2_web=self.webpackChunkprog_2_web||[]).push([[1880],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>f});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?t.createElement(f,i(i({ref:n},u),{},{components:a})):t.createElement(f,i({ref:n},u))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86303:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=a(87462),r=(a(67294),a(3905));const o={title:"Cuestionario - Colecciones",sidebar_label:"Cuestionario",slug:"/clases/colecciones/apuntes/cuestionario",hide_table_of_contents:!0,hide_title:!1,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},i=void 0,l={unversionedId:"clases/colecciones/Apuntes/cuestionario",id:"clases/colecciones/Apuntes/cuestionario",title:"Cuestionario - Colecciones",description:"Arrays",source:"@site/docs/clases/06-colecciones/Apuntes/cuestionario.md",sourceDirName:"clases/06-colecciones/Apuntes",slug:"/clases/colecciones/apuntes/cuestionario",permalink:"/docs/clases/colecciones/apuntes/cuestionario",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/clases/06-colecciones/Apuntes/cuestionario.md",tags:[],version:"current",frontMatter:{title:"Cuestionario - Colecciones",sidebar_label:"Cuestionario",slug:"/clases/colecciones/apuntes/cuestionario",hide_table_of_contents:!0,hide_title:!1,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"Colecciones",permalink:"/docs/clases/colecciones/apuntes/colecciones"},next:{title:"I01 - N\xfameros locos",permalink:"/docs/clases/colecciones/Ejercicios/I01-numeros-locos"}},s={},c=[{value:"Arrays",id:"arrays",level:3},{value:"Colecciones",id:"colecciones",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...a}=e;return(0,r.kt)(p,(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"arrays"},"Arrays"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'\xbfQu\xe9 es un array "jagged"? \xbfEn qu\xe9 valor se inicializan sus elementos?'),(0,r.kt)("li",{parentName:"ol"},"\xbfLos arrays son objetos? "),(0,r.kt)("li",{parentName:"ol"},'\xbfQu\xe9 significa que en C# los arrays son de "base-cero"?'),(0,r.kt)("li",{parentName:"ol"},"Los arrays implementan la interfaz IEnumerable, \xbfqu\xe9 es lo que esto les permite hacer?"),(0,r.kt)("li",{parentName:"ol"},"\xbfC\xf3mo se declara e instancia un array multidimensional?"),(0,r.kt)("li",{parentName:"ol"},"\xbfEl m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"li"},"Array.Resize")," cambia el tama\xf1o de la instancia de array prove\xedda o genera una nueva con distinto tama\xf1o? \xbfPor qu\xe9?"),(0,r.kt)("li",{parentName:"ol"},"Considerando que la propiedad ",(0,r.kt)("inlineCode",{parentName:"li"},"Length")," devuelve la cantidad TOTAL de elementos de TODAS las dimensiones del array, \xbfqu\xe9 valor vamos a mostrar por consola en el siguiente c\xf3digo? ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'int[,,] a = new int[3, 2, 3];\nint[,] b = new int[3, 4];\nConsole.WriteLine("Array length = {0}", a.Length + b.Length)\n')),(0,r.kt)("h3",{id:"colecciones"},"Colecciones"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\xbfCu\xe1l es la diferencia entre colecciones y matrices?"),(0,r.kt)("li",{parentName:"ol"},"\xbfCu\xe1l es la diferencia entre las colecciones gen\xe9ricas y las no-gen\xe9ricas?"),(0,r.kt)("li",{parentName:"ol"},"\xbfCu\xe1l es la diferencia entre una cola (",(0,r.kt)("inlineCode",{parentName:"li"},"Queue"),") y una pila (",(0,r.kt)("inlineCode",{parentName:"li"},"Stack"),'). Asocie con los conceptos "FIFO" y "LIFO".'),(0,r.kt)("li",{parentName:"ol"},"Describa las siguientes colecciones: ",(0,r.kt)("inlineCode",{parentName:"li"},"List"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Dictionary"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"SortedList"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Arraylist"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Hashtable"),". Clasif\xedquelas en gen\xe9ricas o no-gen\xe9ricas."),(0,r.kt)("li",{parentName:"ol"},"\xbfPor qu\xe9 piensa que las colas y pilas no traen un m\xe9todo para ordenarlas? Piense en el uso de dichas colecciones. "),(0,r.kt)("li",{parentName:"ol"},"\xbfCu\xe1l es la diferencia entre colas y pilas gen\xe9ricas y no-gen\xe9ricas?"),(0,r.kt)("li",{parentName:"ol"},"\xbfCual es la salida del siguiente c\xf3digo?")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'short cantidad = 4;\nQueue<int> cola = new Queue<int>();\nStack<int> pila = new Stack<int>();\n\nfor(int i = 0; i <= cantidad * 2; i += 2 ){\n    cola.Enqueue(i);\n}\n\nforeach(int i in cola){\n    pila.Push(i);\n}\n\nforeach(int i in pila){\n    Console.Write("{0}, ",i );\n}\n')))}d.isMDXComponent=!0}}]);