"use strict";(self.webpackChunkprog_2_web=self.webpackChunkprog_2_web||[]).push([[1970],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>v});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),i=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=i(e.components);return t.createElement(p.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=i(n),m=r,v=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?t.createElement(v,l(l({ref:a},d),{},{components:n})):t.createElement(v,l({ref:a},d))}));function v(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7630:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var t=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Propiedades",slug:"/clases/encapsulamiento/apuntes/propiedades",hide_table_of_contents:!1,hide_title:!0,author:null,authorURL:null},l=void 0,s={unversionedId:"clases/encapsulamiento/Apuntes/propiedades",id:"clases/encapsulamiento/Apuntes/propiedades",title:"propiedades",description:"Propiedades",source:"@site/docs/clases/07-encapsulamiento/Apuntes/01-propiedades.md",sourceDirName:"clases/07-encapsulamiento/Apuntes",slug:"/clases/encapsulamiento/apuntes/propiedades",permalink:"/utn-prog-ii/docs/clases/encapsulamiento/apuntes/propiedades",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/clases/07-encapsulamiento/Apuntes/01-propiedades.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Propiedades",slug:"/clases/encapsulamiento/apuntes/propiedades",hide_table_of_contents:!1,hide_title:!0,author:null,authorURL:null}},p={},i=[{value:"Propiedades",id:"propiedades",level:2}],d={toc:i},c="wrapper";function u(e){let{components:a,...n}=e;return(0,r.kt)(c,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"propiedades"},"Propiedades"),(0,r.kt)("p",null,"Una propiedad es un miembro que proporciona un mecanismo flexible para leer, escribir o calcular el valor de un campo. Las propiedades se pueden usar como si fueran miembros de datos p\xfablicos, pero en realidad son m\xe9todos especiales llamados ",(0,r.kt)("em",{parentName:"p"},"descriptores de acceso")," . Esto permite acceder f\xe1cilmente a los datos de manera segura."),(0,r.kt)("p",null,"Las propiedades permiten que una clase exponga una forma p\xfablica de obtener y establecer valores, mientras oculta el c\xf3digo de implementaci\xf3n o validaci\xf3n."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"class Clase\n{\n    private [tipo_dato] campo;\n\n    public [tipo_dato] Propiedad\n    {\n        get\n        {\n            return campo;\n        }\n        set\n        {\n            campo = value;\n        }\n    }\n\n}\n")),(0,r.kt)("p",null,"Analicemos el c\xf3digo anterior:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"La palabra reservada ",(0,r.kt)("strong",{parentName:"li"},"get")," define un m\xe9todo de ",(0,r.kt)("em",{parentName:"li"},"acceso")," en una propiedad que devuelve el valor de la propiedad. Debe devolver un valor del tipo de propiedad. Equivale a leer el valor del campo"),(0,r.kt)("li",{parentName:"ul"},"La palabra reservada ",(0,r.kt)("strong",{parentName:"li"},"set")," define un m\xe9todo de ",(0,r.kt)("em",{parentName:"li"},"acceso")," en una propiedad que asigna el valor a la propiedad."),(0,r.kt)("li",{parentName:"ul"},"La palabra reservada ",(0,r.kt)("strong",{parentName:"li"},"value")," se utiliza como un p\xe1rametro impl\xedcito para definir el valor que asigna el ",(0,r.kt)("em",{parentName:"li"},"set")," al campo. "),(0,r.kt)("li",{parentName:"ul"},"Las propiedades pueden ser de lectura y escritura (tienen un get y un set), de s\xf3lo lectura (tienen s\xf3lo un get) o de solo escritura (tienen s\xf3lo un set). ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'class IntervaloTiempo\n{\n    private double segundos;\n\n    public double Horas\n    {\n       get { return segundos / 3600; }\n       set {\n          if (value < 0 || value > 24)\n             throw new ArgumentOutOfRangeException();\n\n          segundos = value * 3600;\n       }\n   }\n}\n\nclass Program\n{\n   static void Main()\n   {\n       IntervaloTiempo t = new IntervaloTiempo();\n       // Al asignar un valor a una propiedad invocamos el metodo de acceso set\n       t.Horas = 24;\n\n       // Al recuperar el valor de la propiedad estamos invocando el m\xe9todo de acceso get \n       Console.WriteLine($"El intervalo en horas es: {t.Horas}");\n   }\n}\n// El ejemplo muestra la siguiente salida:\n//    El intervalo en horas es: 24\n')),(0,r.kt)("p",null,"En este ejemplo, la clase representa un intervalo de tiempo. Internamente, la clase almacena el intervalo de tiempo en segundos en un campo privado llamado ",(0,r.kt)("em",{parentName:"p"},"segundo"),". Una propiedad de lectura y escritura denominada ",(0,r.kt)("em",{parentName:"p"},"Horas")," permite al usuario de la clase especificar el intervalo de tiempo en horas. Tanto el ",(0,r.kt)("em",{parentName:"p"},"get")," como el ",(0,r.kt)("em",{parentName:"p"},"set")," realizan la conversi\xf3n necesaria entre horas y segundos. Adem\xe1s, el ",(0,r.kt)("em",{parentName:"p"},"set")," valida los datos y lanza una ArgumentOutOfRangeException si el n\xfamero de horas no es v\xe1lido."),(0,r.kt)("admonition",{title:"Atenci\xf3n",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Las propiedades pueden ser marcados como ",(0,r.kt)("code",null,"public"),", ",(0,r.kt)("code",null,"private"),", ",(0,r.kt)("code",null,"protected"),",",(0,r.kt)("code",null,"internal")," , ",(0,r.kt)("code",null,"protected internal"),", o ",(0,r.kt)("code",null,"private protected")," . Estos modificadores de acceso definen c\xf3mo los usuarios de la clase pueden acceder a la propiedad. Los descriptores de acceso ",(0,r.kt)("code",null,"get")," y ",(0,r.kt)("code",null,"set")," para la misma propiedad pueden tener diferentes modificadores de acceso. Por ejemplo, ",(0,r.kt)("code",null,"get")," puede ser ",(0,r.kt)("code",null,"public")," para permitir el acceso de solo lectura desde fuera de la clase, y ",(0,r.kt)("code",null,"set")," puede ser ",(0,r.kt)("code",null,"private")," o ",(0,r.kt)("code",null,"protected"),".")))}u.isMDXComponent=!0}}]);