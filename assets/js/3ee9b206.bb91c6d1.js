(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9293],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8402:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],c={title:"Creating an ink! Project",slug:"/getting-started/creating-an-ink-project"},s={unversionedId:"getting-started/creating",id:"getting-started/creating",isDocsHomePage:!1,title:"Creating an ink! Project",description:"ink! is an Embedded Domain Specific Language (EDSL) that you can use to write WebAssembly based smart contracts in the Rust programming language.",source:"@site/docs/getting-started/creating.md",sourceDirName:"getting-started",slug:"/getting-started/creating-an-ink-project",permalink:"/ink-docs/getting-started/creating-an-ink-project",editUrl:"https://github.com/ink-docs/edit/master/docs/getting-started/creating.md",version:"current",frontMatter:{title:"Creating an ink! Project",slug:"/getting-started/creating-an-ink-project"},sidebar:"reference",previous:{title:"Setup",permalink:"/ink-docs/getting-started/setup"},next:{title:"Compile Your Contract",permalink:"/ink-docs/getting-started/building-your-contract"}},l=[{value:"Contract Source Code",id:"contract-source-code",children:[]},{value:"Testing Your Contract",id:"testing-your-contract",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ink! is an ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.haskell.org/Embedded_domain_specific_language"},"Embedded Domain Specific Language")," (EDSL) that you can use to write WebAssembly based smart contracts in the Rust programming language."),(0,o.kt)("p",null,'ink! is just standard Rust in a well defined "contract format" with specialized ',(0,o.kt)("inlineCode",{parentName:"p"},"#[ink(\u2026)]")," attribute macros. These attribute macros tell ink! what the different parts of your Rust smart contract represent, and ultimately allow ink! to do all the magic needed to create Substrate compatible Wasm bytecode!"),(0,o.kt)("p",null,"Use the ink! CLI to generate an initial smart contract with some scaffolding code."),(0,o.kt)("p",null,"Make sure you are in your working directory, and then run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo contract new flipper\n")),(0,o.kt)("p",null,"This command will create a new project folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"flipper")," with this content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"flipper\n  \u2514\u2500 lib.rs                <-- Contract Source Code\n  \u2514\u2500 Cargo.toml            <-- Rust Dependencies and ink! Configuration\n  \u2514\u2500 .gitignore\n")),(0,o.kt)("h2",{id:"contract-source-code"},"Contract Source Code"),(0,o.kt)("p",null,'The ink CLI automatically generates the source code for the "Flipper" contract, which is about the simplest "smart" contract you can build. You can take a sneak peak as to what will come by looking at the source code here:'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/v3.0.0-rc3/examples/flipper/lib.rs"},"Flipper Example Source Code")),(0,o.kt)("p",null,"The Flipper contract is nothing more than a ",(0,o.kt)("inlineCode",{parentName:"p"},"bool")," which gets flipped from ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," through the ",(0,o.kt)("inlineCode",{parentName:"p"},"flip()")," function. "),(0,o.kt)("h2",{id:"testing-your-contract"},"Testing Your Contract"),(0,o.kt)("p",null,"You will see at the bottom of the source code there are simple test cases which verify the functionality of the contract. We can quickly test this code is functioning as expected using the ",(0,o.kt)("strong",{parentName:"p"},"off-chain test environment")," that ink! provides."),(0,o.kt)("p",null,"In your project folder run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo +nightly test\n")),(0,o.kt)("p",null,"To which you should see a successful test completion:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo +nightly test\n    running 2 tests\n    test flipper::tests::it_works ... ok\n    test flipper::tests::default_works ... ok\n\n    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n")),(0,o.kt)("p",null,"Now that we are feeling confident things are working, we can actually compile this contract to Wasm in the next step."))}p.isMDXComponent=!0}}]);