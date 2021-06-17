(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[235],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,f=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3064:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={title:"Why WebAssembly for Smart Contracts?",slug:"/why-webassembly-for-smart-contracts"},l={unversionedId:"intro/why-webassembly",id:"intro/why-webassembly",isDocsHomePage:!1,title:"Why WebAssembly for Smart Contracts?",description:"* High performance: Wasm is high performance \u2014 it\u2019s built to be as close to native machine code as possible while still being platform independent.",source:"@site/docs/intro/why-webassembly.md",sourceDirName:"intro",slug:"/why-webassembly-for-smart-contracts",permalink:"/ink-docs/why-webassembly-for-smart-contracts",editUrl:"https://github.com/ink-docs/edit/master/docs/intro/why-webassembly.md",version:"current",frontMatter:{title:"Why WebAssembly for Smart Contracts?",slug:"/why-webassembly-for-smart-contracts"},sidebar:"reference",previous:{title:"Why Rust for Smart Contracts?",permalink:"/ink-docs/why-rust-for-smart-contracts"},next:{title:"How it Works \u2012 Substrate",permalink:"/ink-docs/how-it-works"}},c=[],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"High performance:")," Wasm is high performance \u2014 it\u2019s built to be as close to native machine code as possible while still being platform independent."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Small size")," It facilitates small binaries to ship over the internet to devices with potentially slow internet connection. This is a great fit for the space-constrainted blockchain world."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"General VM & bytecode:"),"It was developed so that code can be deployed in any browser with the same result. Contrary to the EVM it was not developed towards a very specific use case, this has the benefit of a lot of tooling being available and large companies putting a lot of resources into furthering Wasm development."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Efficient JIT execution:"),"64 and 32-bit integer operation support that maps one-to-one with CPU instructions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Minimalistic")," Formal spec that fits on a single page"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Deterministic execution:"),"Wasm is easily made deterministic by removing floating point operations, which is necessary for consensus algorithms."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Open Standards > Custom Solutions:"),"Wasm is a standard for web browsers developed by W3C workgroup that includes Google, Mozilla, and others. There\u2019s been many years of work put into Wasm, both by compiler and standardisation teams."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Many languages available:")," Wasm expands the family of languages available to smart contract developers to include Rust, C/C++, C#, Typescript, Haxe, and Kotlin. This means you can write smart contracts in whichever language you\u2019re familiar with, though we\u2019re partial to Rust due to its lack of runtime overhead and inherent security properties."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Memory-safe, sandboxed, and platform-independent.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"LLVM support"),"Supported by the LLVM compiler infrastructure project, meaning that Wasm benefits from over a decade of LLVM\u2019s compiler optimisation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Large companies involved:")," Continually developed by major companies such as Google, Apple, Microsoft, Mozilla, and Facebook.")))}u.isMDXComponent=!0}}]);