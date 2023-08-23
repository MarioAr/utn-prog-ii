"use strict";(self.webpackChunkprog_2_web=self.webpackChunkprog_2_web||[]).push([[727],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>b});var t=n(67294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},d=function(e){var a=l(e.components);return t.createElement(c.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,b=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return n?t.createElement(b,s(s({ref:a},d),{},{components:n})):t.createElement(b,s({ref:a},d))}));function b(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97002:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=n(87462),o=(n(67294),n(3905));const r={sidebar_label:"Abstracci\xf3n",slug:"/clases/objetos/apuntes/abstraccion",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},s=void 0,i={unversionedId:"clases/objetos/Apuntes/abstraccion",id:"clases/objetos/Apuntes/abstraccion",title:"abstraccion",description:"Abstracci\xf3n",source:"@site/docs/clases/03-objetos/Apuntes/01-abstraccion.md",sourceDirName:"clases/03-objetos/Apuntes",slug:"/clases/objetos/apuntes/abstraccion",permalink:"/utn-prog-ii/docs/clases/objetos/apuntes/abstraccion",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/clases/03-objetos/Apuntes/01-abstraccion.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Abstracci\xf3n",slug:"/clases/objetos/apuntes/abstraccion",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"Programaci\xf3n orientada a objetos",permalink:"/utn-prog-ii/docs/clases/objetos/apuntes/poo"},next:{title:"Clases",permalink:"/utn-prog-ii/docs/clases/objetos/apuntes/clases"}},c={},l=[{value:"Abstracci\xf3n",id:"abstracci\xf3n",level:2}],d={toc:l},u="wrapper";function p(e){let{components:a,...r}=e;return(0,o.kt)(u,(0,t.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"abstracci\xf3n"},"Abstracci\xf3n"),(0,o.kt)("p",null,"El primer pilar de la programaci\xf3n orientada a objetos que aprenderemos es la abstracci\xf3n. "),(0,o.kt)("p",null,"La ",(0,o.kt)("strong",{parentName:"p"},"abstracci\xf3n")," es la habilidad de abordar un concepto mientras se ignoran de forma segura algunos de sus detalles. Dependiendo del contexto y de la necesidad podemos trabajar a distintos niveles de abstracci\xf3n, enfoc\xe1ndonos en distintos aspectos y trabajando con un mayor o menor nivel de detalle."),(0,o.kt)("p",null,"En la vida real aplicamos la abstracci\xf3n continuamente. Por ejemplo, cuando hablamos de una casa no nos detenemos en las mol\xe9culas y part\xedculas que la componen, normalmente ni siquiera hablamos de sus materiales de construcci\xf3n o por donde pasan las tuber\xedas de agua. En una conversaci\xf3n habitual manejaremos un nivel de abstracci\xf3n muy alto: la ubicaci\xf3n, detalles de la fachada, cantidad de habitaciones, y no mucho m\xe1s. En alguna situaci\xf3n puntual podremos necesitar saber c\xf3mo est\xe1 armado el tendido el\xe9ctrico para hacer una reparaci\xf3n, pero no nos interesar\xe1n otros detalles tales como de qu\xe9 material son los pisos o cu\xe1ntas personas habitan el lugar. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Abstracci\xf3n aplicada a una casa",src:n(92361).Z,width:"1000",height:"246"})),(0,o.kt)("p",null,"Un mapa del mundo es una abstracci\xf3n de lo que realmente es el planeta, pero pr\xe1ctica a fines de su uso. La tierra no es bidimensional, sin embargo se puede ",(0,o.kt)("em",{parentName:"p"},"abstraer")," esa realidad a una representaci\xf3n gr\xe1fica a escala, plana y bidimensional que nos informa sobre la distribuci\xf3n geogr\xe1fica y pol\xedtica del territorio de manera sencilla y accesible. Se pierden muchos detalles de forma intensional para facilitar la comprensi\xf3n de lo que nos interesa comunicar. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Abstracci\xf3n aplicada al planeta",src:n(22813).Z,width:"1000",height:"313"})),(0,o.kt)("p",null,"Si bien un mapa en si mismo ignora gran cantidad de detalles con el fin de simplificar la transmisi\xf3n de la informaci\xf3n, tambi\xe9n existen distintos niveles de abstracci\xf3n para un mapa dependiendo del enfoque que se necesite. No es lo mismo un mapa hidrogr\xe1fico que se enfoca en el curso de r\xedos y otras superficiones de agua, que un mapa pol\xedtico que representa divisiones administrativas de distintos territorios. Tampoco es lo mismo un mapa de la ciudad de buenos aires donde podemos ver el trazado de las calles y recorrido de l\xedneas de trenes y subtes, a un mapa del continente donde esos detalles no figuran. Dependendiendo de la necesidad, trabajaremos con uno u otro. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Abstracci\xf3n aplicada a distintos tipos de mapas",src:n(85241).Z,width:"1680",height:"1044"})),(0,o.kt)("p",null,"Podemos decir entonces que la abstracci\xf3n es una simplificaci\xf3n de la realidad donde me quedo con lo importante y descarto los detalles irrelevantes. En el \xe1mbito del desarrollo de software, lo que determina qu\xe9 es relevante y qu\xe9 no es el ",(0,o.kt)("strong",{parentName:"p"},"contexto del negocio"),", el problema, requerimiento o proceso que queremos resolver o automatizar con un sistema inform\xe1tico. En otras palabras, el \xe1rea de conocimiento o la actividad sobre la que se desarrolla la aplicaci\xf3n. "),(0,o.kt)("p",null,"La abstracci\xf3n es clave para construir sistemas f\xe1cilmente mantenibles y que no terminen manejando una complejidad excesiva e innecesaria. En el siguiente cap\xedtulo veremos como este pilar conduce el dise\xf1o de las clases, que no son otra cosa mas que abstracciones de conceptos u objetos pertenecientes al dominio del problema."))}p.isMDXComponent=!0},92361:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/abstraccion_casa-831b1d89902812c6a667f45eb6c89d9a.png"},85241:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/abstraccion_mapas-1fecf37173bc9055832d4d813adc4e18.png"},22813:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/abstraccion_planeta-4b599e49f851f4813367297e4d14dfe7.png"}}]);