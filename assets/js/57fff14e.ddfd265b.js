"use strict";(self.webpackChunkprog_2_web=self.webpackChunkprog_2_web||[]).push([[3017],{3905:(e,a,o)=>{o.d(a,{Zo:()=>d,kt:()=>b});var r=o(67294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function l(e,a){if(null==e)return{};var o,r,n=function(e,a){if(null==e)return{};var o,r,n={},t=Object.keys(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var a=r.useContext(s),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},d=function(e){var a=c(e.components);return r.createElement(s.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var o=e.components,n=e.mdxType,t=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(o),p=n,b=u["".concat(s,".").concat(p)]||u[p]||m[p]||t;return o?r.createElement(b,i(i({ref:a},d),{},{components:o})):r.createElement(b,i({ref:a},d))}));function b(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=o.length,i=new Array(t);i[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<t;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},99119:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const t={title:"Gu\xeda de estilos",sidebar_label:"Gu\xeda de estilos",sidebar_position:8,slug:"/introduccion/guia-estilos",hide_table_of_contents:!0},i=void 0,l={unversionedId:"introduccion/guia-estilos",id:"introduccion/guia-estilos",title:"Gu\xeda de estilos",description:"Las gu\xedas de estilo (tambi\xe9n llamadas est\xe1ndares de c\xf3digo o estilos de programaci\xf3n) es el nombre que se le da al conjunto de normas usadas para escribir c\xf3digo, estas son regularmente dependientes del lenguaje de programaci\xf3n.",source:"@site/docs/introduccion/guia-estilos.md",sourceDirName:"introduccion",slug:"/introduccion/guia-estilos",permalink:"/docs/introduccion/guia-estilos",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/introduccion/guia-estilos.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Gu\xeda de estilos",sidebar_label:"Gu\xeda de estilos",sidebar_position:8,slug:"/introduccion/guia-estilos",hide_table_of_contents:!0},sidebar:"Introduccion",previous:{title:"Instalaci\xf3n del entorno de base de datos",permalink:"/docs/introduccion/sql-server"},next:{title:"Recomendaciones",permalink:"/docs/introduccion/recomendaciones"}},s={},c=[{value:"Identificadores",id:"identificadores",level:2},{value:"Es preferible la legibilidad a la brevedad",id:"es-preferible-la-legibilidad-a-la-brevedad",level:3},{value:"Graf\xeda",id:"graf\xeda",level:2},{value:"PascalCase",id:"pascalcase",level:3},{value:"CamelCase",id:"camelcase",level:3},{value:"Comentarios",id:"comentarios",level:2},{value:"C\xf3digo Limpio",id:"c\xf3digo-limpio",level:2},{value:"Los nombres importan",id:"los-nombres-importan",level:3},{value:"Evitar identificadores de una letra",id:"evitar-identificadores-de-una-letra",level:4},{value:"Hacer una cosa",id:"hacer-una-cosa",level:3},{value:"La regla del Boy Scout",id:"la-regla-del-boy-scout",level:3},{value:"DRY (Don\xb4t repeat yourself)",id:"dry-dont-repeat-yourself",level:3},{value:"Los comentarios mienten",id:"los-comentarios-mienten",level:3}],d={toc:c},u="wrapper";function m(e){let{components:a,...o}=e;return(0,n.kt)(u,(0,r.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Las gu\xedas de estilo (tambi\xe9n llamadas est\xe1ndares de c\xf3digo o estilos de programaci\xf3n) es el nombre que se le da al conjunto de normas usadas para escribir c\xf3digo, estas son regularmente dependientes del lenguaje de programaci\xf3n. "),(0,n.kt)("p",null,"Es importante escribir c\xf3digo que sea f\xe1cil de mantener, un buen estilo para programar debe tener una estructura de c\xf3digo f\xe1cil de entender no solo para quien lo programa sino tambi\xe9n para otros programadores y aportar eficiencia al proceso de desarrollo, logrando que los programas sean m\xe1s robustos y comprensibles."),(0,n.kt)("h2",{id:"identificadores"},"Identificadores"),(0,n.kt)("p",null,"Un identificador es el nombre que se asigna a un tipo (clase, interfaz, estructura, registro, delegado o enumeraci\xf3n), miembro, variable o espacio de nombres."),(0,n.kt)("p",null,"Los nombres de indentificadores deben ser descriptivos. "),(0,n.kt)("h3",{id:"es-preferible-la-legibilidad-a-la-brevedad"},"Es preferible la legibilidad a la brevedad"),(0,n.kt)("p",null,"Elija nombre facilmente legibles. En general, no deber\xeda utilizar abreviaturas ni acr\xf3nimos. Estos elementos hacen\nque los nombres sean menos legibles. De igual forma, es dif\xedcil saber cu\xe1ndo es\nseguro suponer que un acr\xf3nimo es ampliamente reconocido. "),(0,n.kt)("p",null,"Por ejemplo en lugar de declarar una variable que contendra un numero aleatorio como:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"}," int numAleat;\n")),(0,n.kt)("p",null,"es preferible:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"}," int numeroAleatorio;\n")),(0,n.kt)("p",null,"\xf3:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"}," int numeroRandom;\n")),(0,n.kt)("p",null,"No utilice guiones de subrayado, guiones ni ning\xfan otro car\xe1cter no alfanum\xe9rico. Evite utilizar identificadores que est\xe1n en conflicto con palabras clave de lenguajes\nde programaci\xf3n ampliamente utilizados. Aunque los lenguajes conformes a CLS\ndeben proporcionar una manera de utilizar palabras clave como palabras normales,\nlos procedimientos recomendados indican que no deber\xeda obligar a los\ndesarrolladores a saber c\xf3mo hacerlo.  "),(0,n.kt)("h2",{id:"graf\xeda"},"Graf\xeda"),(0,n.kt)("h3",{id:"pascalcase"},"PascalCase"),(0,n.kt)("p",null,"La notaci\xf3n Pascal Case combina las palabras estableciendo que la primera letra de cada palabra est\xe9 en may\xfascula sin excepciones, y el resto de letras en min\xfasculas ",(0,n.kt)("inlineCode",{parentName:"p"},"ContarPalabras"),"."),(0,n.kt)("p",null,"Utilizamos PascalCase para: clases, enumerados, m\xe9todos, eventos, namespaces, propiedades e interfaces."),(0,n.kt)("p",null,"Al nombrar una interface anteponer el nombre con un I. Esto indica claramente a los usuarios del c\xf3digo que es un interface."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface IWorkerQueue\n{\n}\n")),(0,n.kt)("h3",{id:"camelcase"},"CamelCase"),(0,n.kt)("p",null,"La notaci\xf3n Camel Case combina las palabras estableciendo que la primera letra de cada palabra est\xe9 en may\xfascula a excepci\xf3n de la primera palabra, y el resto de letras en min\xfasculas.\nUtilizamos camelCase para: par\xe1metros, variables locales y atributos."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"  int notaPrimerParcial;\n")),(0,n.kt)("h2",{id:"comentarios"},"Comentarios"),(0,n.kt)("p",null,"Utilizar la documentaci\xf3n de m\xe9todos. Colocando sobre la firma de un m\xe9todo /// se\nautocompletar\xe1 el bloque de documentaci\xf3n:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'/// <summary> \n/// Descripci\xf3n del m\xe9todo \n/// </summary> \n/// <param name="dato">Informaci\xf3n sobre el par\xe1metro</param> \n/// <returns>Informaci\xf3n sobre el retorno del m\xe9todo</returns> \nprivate static int Metodo(string dato)\n{\n    // ...\n}\n')),(0,n.kt)("h2",{id:"c\xf3digo-limpio"},"C\xf3digo Limpio"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Clean Code")," es el t\xedtulo de un libro escrito por Robert C. Martin (Uncle Bob) donde nos habla de c\xf3mo escribir \xabc\xf3digo limpio\xbb, ese c\xf3digo bien estructurado, f\xe1cil de comprender, robusto y, a su vez f\xe1cil de mantener. En esta secci\xf3n tomaremos algunos principios de Clean Code."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"El c\xf3digo limpio se lee como prosa bien escrita. -\nRobert Martin.")),(0,n.kt)("h3",{id:"los-nombres-importan"},"Los nombres importan"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"El nombre de una variable, funci\xf3n o clase debe indicar por qu\xe9 existe, qu\xe9 hace y c\xf3mo se usa. Si el nombre requiere un comentario, significa que el nombre no cumple su cometido. -\nRobert Martin")),(0,n.kt)("p",null,"Deben ser preciso y entregar la idea central."),(0,n.kt)("h4",{id:"evitar-identificadores-de-una-letra"},"Evitar identificadores de una letra"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Los contadores de bucle est\xe1n bautizados como i, j o k, pero nunca con otra variable de una sola letra. Recordar que r es la versi\xf3n en min\xfascula de una URL sin el host y el sistema\u2026 es algo que podr\xedas recordar el primer d\xeda, pero seguro que al d\xeda siguiente tendr\xedas que volver a mirar el c\xf3digo para averiguar que es. -\nRobert Martin")),(0,n.kt)("h3",{id:"hacer-una-cosa"},"Hacer una cosa"),(0,n.kt)("p",null,"Los m\xe9todos deben hacer. Deben hacerlo bien y debe ser lo unico que hagan.\nDeben ser de un tama\xf1o reducido con pocos niveles de anidamiento. Si un m\xe9todo tiene muchas lineas probablemente necesite divir el m\xe9todo en varios procedimientos. Los m\xe9todos deben ser simples, claros y peque\xf1os."),(0,n.kt)("h3",{id:"la-regla-del-boy-scout"},"La regla del Boy Scout"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Dejar el campamento m\xe1s limpio de lo que se ha encontrado.")),(0,n.kt)("p",null,"Dejar el c\xf3digo mejor de lo que lo encontraste."),(0,n.kt)("h3",{id:"dry-dont-repeat-yourself"},"DRY (Don\xb4t repeat yourself)"),(0,n.kt)("p",null,"No deben existir dos partes del programa que realicen la misma funci\xf3n"),(0,n.kt)("h3",{id:"los-comentarios-mienten"},"Los comentarios mienten"),(0,n.kt)("p",null,"A menudo el c\xf3digo es modificado, los comentarios no. Los comentarios deben acompa\xf1ar las modificaciones en el c\xf3digo."))}m.isMDXComponent=!0}}]);