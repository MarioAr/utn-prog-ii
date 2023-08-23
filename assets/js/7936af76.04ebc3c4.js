"use strict";(self.webpackChunkprog_2_web=self.webpackChunkprog_2_web||[]).push([[6908],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>b});var a=s(67294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,a,r=function(e,t){if(null==e)return{};var s,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var s=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(s),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||n;return s?a.createElement(b,o(o({ref:t},p),{},{components:s})):a.createElement(b,o({ref:t},p))}));function b(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=s.length,o=new Array(n);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<n;l++)o[l]=s[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,s)}m.displayName="MDXCreateElement"},53173:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=s(87462),r=(s(67294),s(3905));const n={sidebar_label:"Clases est\xe1ticas",slug:"/clases/estaticos/apuntes/clases-estaticas",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},o=void 0,i={unversionedId:"clases/estaticos/Apuntes/clases-estaticas",id:"clases/estaticos/Apuntes/clases-estaticas",title:"clases-estaticas",description:"Clases est\xe1ticas",source:"@site/docs/clases/02-estaticos/Apuntes/01-clases-estaticas.md",sourceDirName:"clases/02-estaticos/Apuntes",slug:"/clases/estaticos/apuntes/clases-estaticas",permalink:"/utn-prog-ii/docs/clases/estaticos/apuntes/clases-estaticas",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/clases/02-estaticos/Apuntes/01-clases-estaticas.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Clases est\xe1ticas",slug:"/clases/estaticos/apuntes/clases-estaticas",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"Clases y m\xe9todos est\xe1ticos",permalink:"/utn-prog-ii/docs/clases/estaticos/apuntes/metodos-estaticos"},next:{title:"Namespaces",permalink:"/utn-prog-ii/docs/clases/estaticos/apuntes/namespaces"}},c={},l=[{value:"Clases est\xe1ticas",id:"clases-est\xe1ticas",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"clases-est\xe1ticas"},"Clases est\xe1ticas"),(0,r.kt)("p",null,"Las ",(0,r.kt)("strong",{parentName:"p"},"clases est\xe1ticas")," son agrupadores de atributos est\xe1ticos y m\xe9todos est\xe1ticos, es decir de datos y funciones que operan sobre esos datos respectivamente."),(0,r.kt)("p",null,"Para declarar una clase se debe indicar el nivel de acceso con un modificador de visibilidad (que puede ser ",(0,r.kt)("inlineCode",{parentName:"p"},"internal")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"public"),") seguido de la palabra reservada ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," y un identificador para la clase. "),(0,r.kt)("p",null,"Los nombres de las clases deben ser sustantivos con notaci\xf3n ",(0,r.kt)("em",{parentName:"p"},"PascalCase"),". "),(0,r.kt)("p",null,"Opcionalmente, seguido del modificador de acceso puede ir alg\xfan modificador especial como ",(0,r.kt)("inlineCode",{parentName:"p"},"static"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public static class Cotizador\n{\n    private const decimal pesosPorDolarComprado = 96.75M;\n    private const decimal pesosPorDolarVendido = 102.82M;\n\n    public static decimal CotizarVentaDolares(decimal montoDolaresAVender)\n    {\n        decimal costoEnPesos = montoDolaresAVender * pesosPorDolarVendido;\n\n        return costoEnPesos;\n    }\n\n    public static decimal CotizarCompraDolares(decimal montoDolaresAComprar)\n    {\n        decimal pagoEnPesos = montoDolaresAComprar * pesosPorDolarComprado;\n\n        return pagoEnPesos;\n    }\n}\n")),(0,r.kt)("p",null,"Las constantes son como atributos est\xe1ticos, la \xfanica diferencia es que su valor no puede cambiar en tiempo de ejecuci\xf3n. "),(0,r.kt)("p",null,"Si seguimos buenas pr\xe1cticas de programaci\xf3n, los atributos de una clase siempre deber\xe1n ser privados."))}d.isMDXComponent=!0}}]);