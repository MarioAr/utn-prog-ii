"use strict";(self.webpackChunkprog_2_web=self.webpackChunkprog_2_web||[]).push([[9527],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,b=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return r?a.createElement(b,n(n({ref:t},d),{},{components:r})):a.createElement(b,n({ref:t},d))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,n=new Array(s);n[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,n[1]=i;for(var c=2;c<s;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55898:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const s={sidebar_label:"Sobrecarga de m\xe9todos",slug:"/clases/sobrecarga/apuntes/sobrecarga-metodos",hide_table_of_contents:!1,hide_title:!0,author:null,authorURL:null},n=void 0,i={unversionedId:"clases/sobrecarga/Apuntes/sobrecarga-metodos",id:"clases/sobrecarga/Apuntes/sobrecarga-metodos",title:"sobrecarga-metodos",description:"Sobrecarga de M\xe9todos",source:"@site/docs/clases/04-sobrecarga/Apuntes/01-sobrecarga-metodos.md",sourceDirName:"clases/04-sobrecarga/Apuntes",slug:"/clases/sobrecarga/apuntes/sobrecarga-metodos",permalink:"/docs/clases/sobrecarga/apuntes/sobrecarga-metodos",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/clases/04-sobrecarga/Apuntes/01-sobrecarga-metodos.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Sobrecarga de m\xe9todos",slug:"/clases/sobrecarga/apuntes/sobrecarga-metodos",hide_table_of_contents:!1,hide_title:!0,author:null,authorURL:null},sidebar:"Clases",previous:{title:"Sobrecarga",permalink:"/docs/clases/sobrecarga/apuntes/sobrecarga"},next:{title:"Sobrecarga de constructores",permalink:"/docs/clases/sobrecarga/apuntes/sobrecarga-constructores"}},l={},c=[{value:"Sobrecarga de M\xe9todos",id:"sobrecarga-de-m\xe9todos",level:2},{value:"Tipo de par\xe1metros",id:"tipo-de-par\xe1metros",level:3},{value:"Cantidad de par\xe1metros",id:"cantidad-de-par\xe1metros",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"sobrecarga-de-m\xe9todos"},"Sobrecarga de M\xe9todos"),(0,o.kt)("p",null,"Por lo general, la sobrecarga de m\xe9todos se utiliza para crear varios m\xe9todos con el mismo nombre que realicen la misma tarea o tareas similares, pero con distintos tipos o distintos n\xfameros de argumentos. "),(0,o.kt)("h3",{id:"tipo-de-par\xe1metros"},"Tipo de par\xe1metros"),(0,o.kt)("p",null,"La sobrecarga del tipo de par\xe1metro permite utilizar el mismo identificador para m\xe9todos que realizan operaciones id\xe9nticas con diferentes tipos de datos."),(0,o.kt)("p",null,"Por ejemplo, los m\xe9todos Min y Max de Math se sobrecargan con 11 versiones. Estos m\xe9todos buscan el m\xednimo y el m\xe1ximo, respectivamente, de dos valores de cada uno de los 11 tipos num\xe9ricos simples."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public static class Math {\n\n        public static int Max(int val1, int val2);\n        public static int Max(long val1, long val2);\n        public static int Max(float val1, float val2);\n        // ...\n        public static int Max(int val1, int val2);\n        public static int Max(long val1, long val2);\n        public static int Max(float val1, float val2);\n        // ...\n}\n")),(0,o.kt)("p",null,"Cuando se hace una llamada a un m\xe9todo sobrecargado el compilador selecciona el m\xe9todo apropiado mediante un an\xe1lisis de su ",(0,o.kt)("strong",{parentName:"p"},"firma"),". La firma es una combinaci\xf3n del nombre del m\xe9todo y del n\xfamero, tipos y orden de sus par\xe1metros. La firma tambi\xe9n incluye la forma en que se pasan esos par\xe1metros, los cuales pueden modificarse mediante las palabras ref y out. Las llamadas a los m\xe9todos no pueden diferenciarse en base al tipo de valor de retorno. Los m\xe9todos sobrecargados pueden tener tipos de retorno iguales o distintos, si los m\xe9todos tienen distintas listas de par\xe1metros."),(0,o.kt)("h3",{id:"cantidad-de-par\xe1metros"},"Cantidad de par\xe1metros"),(0,o.kt)("p",null,"La sobrecarga en el n\xfamero de par\xe1metros hace posible proporcionar versiones m\xe1s simples de m\xe9todos. "),(0,o.kt)("p",null,"Por ejemplo, el m\xe9todo Concat de String. Este m\xe9todo concatena las instancias de string que recibe como par\xe1metro:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public class String{\n    \n    public static String Concat(String str0, String str1){  }\n    public static String Concat(String str0, String str1, String str2){}\n    public static String Concat(String str0, String str1, String str2, String str3){}\n    // ...\n}\n")))}u.isMDXComponent=!0}}]);