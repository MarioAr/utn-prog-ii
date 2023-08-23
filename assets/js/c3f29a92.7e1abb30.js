"use strict";(self.webpackChunkprog_2_web=self.webpackChunkprog_2_web||[]).push([[4011],{3905:(e,a,t)=>{t.d(a,{Zo:()=>A,kt:()=>b});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),u=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},A=function(e){var a=u(e.components);return r.createElement(l.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,A=o(e,["components","mdxType","originalType","parentName"]),c=u(t),p=n,b=c["".concat(l,".").concat(p)]||c[p]||d[p]||s;return t?r.createElement(b,i(i({ref:a},A),{},{components:t})):r.createElement(b,i({ref:a},A))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=p;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<s;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},88398:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=t(87462),n=(t(67294),t(3905));const s={title:"Apuntes - Pruebas unitarias",sidebar_label:"Pruebas Unitarias",slug:"/clases/pruebas/apuntes/pruebas",hide_table_of_contents:!1,hide_title:!1,author:null,authorURL:null},i=void 0,o={unversionedId:"clases/testing/apuntes/pruebas-unitarias",id:"clases/testing/apuntes/pruebas-unitarias",title:"Apuntes - Pruebas unitarias",description:"Unit Testing",source:"@site/docs/clases/11-testing/apuntes/00-pruebas-unitarias.md",sourceDirName:"clases/11-testing/apuntes",slug:"/clases/pruebas/apuntes/pruebas",permalink:"/utn-prog-ii/docs/clases/pruebas/apuntes/pruebas",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/clases/11-testing/apuntes/00-pruebas-unitarias.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Apuntes - Pruebas unitarias",sidebar_label:"Pruebas Unitarias",slug:"/clases/pruebas/apuntes/pruebas",hide_table_of_contents:!1,hide_title:!1,author:null,authorURL:null},sidebar:"Clases",previous:{title:"C03 - Parada en boxes",permalink:"/utn-prog-ii/docs/clases/testing/Ejercicios/C03-parada-en-boxes"},next:{title:"Cuestionario",permalink:"/utn-prog-ii/docs/clases/pruebas/apuntes/cuestionario"}},l={},u=[{value:"Unit Testing",id:"unit-testing",level:2},{value:"Motivos para realizar un test unitario",id:"motivos-para-realizar-un-test-unitario",level:2},{value:"Las tres A del unit testing",id:"las-tres-a-del-unit-testing",level:2},{value:"Creaci\xf3n Proyecto Unit Test",id:"creaci\xf3n-proyecto-unit-test",level:2},{value:"Creaci\xf3n de un test unitario en C#",id:"creaci\xf3n-de-un-test-unitario-en-c",level:2},{value:"Comprobaci\xf3n de una excepci\xf3n dentro de los test",id:"comprobaci\xf3n-de-una-excepci\xf3n-dentro-de-los-test",level:2}],A={toc:u},c="wrapper";function d(e){let{components:a,...s}=e;return(0,n.kt)(c,(0,r.Z)({},A,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"unit-testing"},"Unit Testing"),(0,n.kt)("p",null,"Las ",(0,n.kt)("strong",{parentName:"p"},"pruebas unitarias")," o  ",(0,n.kt)("strong",{parentName:"p"},"unit testing")," consisten en aislar una parte del c\xf3digo y comprobar que funciona a la perfecci\xf3n. Son peque\xf1os tests que validan el comportamiento de un objeto y la l\xf3gica.\nEl unit testing suele realizarse durante la fase de desarrollo de aplicaciones de software o m\xf3viles. Normalmente las llevan a cabo los desarrolladores, aunque en la pr\xe1ctica, tambi\xe9n pueden realizarlas los responsables de QA.\nHay una especie de mito respecto a las pruebas unitarias. Algunos desarrolladores est\xe1n convencidos de que son una p\xe9rdida de tiempo y las evitan buscando ahorrar tiempo.\nNada m\xe1s alejado de la realidad.\nCon ellas se detectan antes errores que, sin las pruebas unitarias, no se podr\xedan detectar hasta fases m\xe1s avanzadas como las pruebas de sistema, de integraci\xf3n e incluso en la beta.\nRealizar pruebas unitarias con regularidad supone, al final, un ahorro de tiempo y dinero."),(0,n.kt)("h2",{id:"motivos-para-realizar-un-test-unitario"},"Motivos para realizar un test unitario"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Las pruebas unitarias demuestran que la l\xf3gica del c\xf3digo est\xe1 en buen estado y que funcionar\xe1 en todos los casos."),(0,n.kt)("li",{parentName:"ul"},"Aumentan la legibilidad del c\xf3digo y ayudan a los desarrolladores a entender el c\xf3digo base, lo que facilita hacer cambios m\xe1s r\xe1pidamente."),(0,n.kt)("li",{parentName:"ul"},"Los test unitarios bien realizados sirven como documentaci\xf3n del proyecto."),(0,n.kt)("li",{parentName:"ul"},"Se realizan en pocos milisegundos, por lo que podr\xe1s realizar cientos de ellas en muy poco tiempo."),(0,n.kt)("li",{parentName:"ul"},"Las pruebas unitarias permiten al desarrollador refactorizar el c\xf3digo m\xe1s adelante y tener la garant\xeda de que el m\xf3dulo sigue funcionando correctamente. Para ello se escriben casos de prueba para todas las funciones y m\xe9todos, para que cada vez que un cambio provoque un error, sea posible identificarlo y repararlo r\xe1pidamente."),(0,n.kt)("li",{parentName:"ul"},"La calidad final del c\xf3digo mejorar\xe1 ya que, al estar realizando pruebas de manera continua, al finalizar el c\xf3digo ser\xe1 limpio y de calidad.\nComo las pruebas unitarias dividen el c\xf3digo en peque\xf1os fragmentos, es posible probar distintas partes del proyecto sin tener que esperar a que otras est\xe9n completas.")),(0,n.kt)("h2",{id:"las-tres-a-del-unit-testing"},"Las tres A del unit testing"),(0,n.kt)("p",null,"Para llevar a cabo buenas pruebas unitarias, deben estar estructuradas siguiendo las tres A\u2019s del Unit Testing:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Arrange (organizar). Es el primer paso de las pruebas unitarias. En esta parte se definen los requisitos que debe cumplir el c\xf3digo."),(0,n.kt)("li",{parentName:"ul"},"Act (actuar). Es el paso intermedio de las pruebas, el momento de ejecutar el test que dar\xe1 lugar a los resultados que deber\xe1s analizar."),(0,n.kt)("li",{parentName:"ul"},"Assert (afirmar). En el \xfaltimo paso, es el momento de comprobar si los resultados obtenidos son los que se esperaban. Si es as\xed, se valida y se sigue adelante. Si no, se corrige el error hasta que desaparezca.")),(0,n.kt)("h2",{id:"creaci\xf3n-proyecto-unit-test"},"Creaci\xf3n Proyecto Unit Test"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Seleccionar el siguiente tipo de proyecto"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Unit Test",src:t(82171).Z,width:"1023",height:"528"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Crear el proyecto y seleccionar NET 5.0"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Unit Test",src:t(49968).Z,width:"665",height:"423"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Unit Test",src:t(22731).Z,width:"625",height:"234"})))),(0,n.kt)("h2",{id:"creaci\xf3n-de-un-test-unitario-en-c"},"Creaci\xf3n de un test unitario en C#"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Creamos el proyecto de consola y agregamos la referencia del proyecto a testear en el proyecto de unit testing. La clase se crear\xe1 con el atributo ",(0,n.kt)("strong",{parentName:"p"},"[TestClass]")," y el m\xe9todo que va a ejecutar el test contiene un atributo llamado ",(0,n.kt)("strong",{parentName:"p"},"[TestMethod]"),". "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Unit Test",src:t(25264).Z,width:"1717",height:"754"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Se escribe el test del m\xe9todo a probar.",(0,n.kt)("br",{parentName:"p"}),"\n","Primero se asignan los valores, posteriormente se llama al m\xe9todo de sumar y finalmente, se comprueba que ",(0,n.kt)("strong",{parentName:"p"},"suma")," es correcta."),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{alt:"Unit Test",src:t(53360).Z,width:"1169",height:"723"})))),(0,n.kt)("h2",{id:"comprobaci\xf3n-de-una-excepci\xf3n-dentro-de-los-test"},"Comprobaci\xf3n de una excepci\xf3n dentro de los test"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"En este caso con MsTest se debe utilizar el atributo ","[ExpectedException]"," sobre el m\xe9todo, el cual va a capturar y comprobar la excepci\xf3n, y en este caso,no ser\xe1 necesario el assert."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Unit Test",src:t(5689).Z,width:"1237",height:"539"})))))}d.isMDXComponent=!0},82171:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/UnitTest_00-6ae564163ba6f2ded4baf834c611b017.png"},49968:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/UnitTest_02-4796effa9048e27e098dee95a074be02.png"},22731:(e,a,t)=>{t.d(a,{Z:()=>r});const r="data:image/png;base64,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"},25264:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/UnitTest_04-12b5bbdab7268cc51af486ca046b6b08.png"},53360:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/UnitTest_05-576f63104e62ac59da077ca9f8ff7ac5.png"},5689:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/UnitTest_06-35fb6640b4bc718c8639d720fac28cca.png"}}]);