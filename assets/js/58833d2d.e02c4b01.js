(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2059],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8637:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],s={title:"Overview",slug:"/datastructures/overview"},l={unversionedId:"datastructures/overview",id:"datastructures/overview",isDocsHomePage:!1,title:"Overview",description:"The ink_storage crate acts as the standard storage library for ink! smart contracts.",source:"@site/docs/datastructures/overview.md",sourceDirName:"datastructures",slug:"/datastructures/overview",permalink:"/ink-docs/datastructures/overview",editUrl:"https://github.com/ink-docs/edit/master/docs/datastructures/overview.md",version:"current",frontMatter:{title:"Overview",slug:"/datastructures/overview"},sidebar:"reference",previous:{title:"#[ink::chain_extension]",permalink:"/ink-docs/macros-attributes/chain-extension"},next:{title:"Working with Datastructures",permalink:"/ink-docs/datastructures/hashmap"}},c=[],u={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ink_storage")," crate acts as the standard storage library for ink! smart contracts.\nIt provides all the necessary tools and data structures to organize and operate the contract's storage intuitively and efficiently."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/ink/ink_storage/collections/"},"You can find the crates documentation for all ink! data structures here.")),(0,o.kt)("p",null,"At the moment we provide these data structures:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paritytech.github.io/ink/ink_storage/collections/struct.BinaryHeap.html"},(0,o.kt)("inlineCode",{parentName:"a"},"BinaryHeap")),":\tA priority queue implemented with a binary heap."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paritytech.github.io/ink/ink_storage/collections/struct.BitStash.html"},(0,o.kt)("inlineCode",{parentName:"a"},"BitStash"))," A stash for bits operating on the contract storage."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paritytech.github.io/ink/ink_storage/collections/struct.Bitvec.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Bitvec"))," A storage bit vector."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paritytech.github.io/ink/ink_storage/collections/struct.HashMap.html"},(0,o.kt)("inlineCode",{parentName:"a"},"HashMap")),"\tA hash map operating on the contract storage."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paritytech.github.io/ink/ink_storage/collections/struct.SmallVec.html"},(0,o.kt)("inlineCode",{parentName:"a"},"SmallVec"))," A contiguous growable array type."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paritytech.github.io/ink/ink_storage/collections/struct.Stash.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Stash")),"\tA stash data structure operating on contract storage."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paritytech.github.io/ink/ink_storage/collections/struct.Vec.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Vec")),"\tA contiguous growable array type, written ",(0,o.kt)("inlineCode",{parentName:"li"},"Vec<T>")," but pronounced 'vector'.")),(0,o.kt)("p",null,"Data structures provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"ink_storage")," crate are inherently lazy;\nthey are either high-level lazy or low-level lazy data structures.\nThe difference between high-level and low-level lies in the distinction in how these data structures are aware\nof the elements that they operate on."),(0,o.kt)("p",null,"For ",(0,o.kt)("em",null,"high-level")," data structures they are fully aware about the elements they contain, do all the clean-up by themselves so the user can concentrate on the business logic."),(0,o.kt)("p",null,"For ",(0,o.kt)("em",null,"low-level")," data structures the responsibility about the elements lies in the hands of the contract author.\nAlso they operate on cells (",(0,o.kt)("inlineCode",{parentName:"p"},"Option<T>"),") instead of entities of type ",(0,o.kt)("inlineCode",{parentName:"p"},"T"),". But what does that mean exactly?"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ink_storage::Lazy")," type caches their entities and acts lazily on the storage.\nThis means that a read or write operation is only performed when it really needs to\nin order to satisfy other inputs."),(0,o.kt)("p",null,"Data types such as Rust primitives ",(0,o.kt)("inlineCode",{parentName:"p"},"i32")," or Rust's very own ",(0,o.kt)("inlineCode",{parentName:"p"},"Vec")," or data structures\ncan also be used to operate on the contract's storage, however, they will load their\ncontents eagerly which is often not what you want."),(0,o.kt)("p",null,"An example follows with the below contract storage and a message that operates on either of the two fields."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct TwoValues {\n    offset: i32,\n    a: i32,\n    b: i32,\n}\n\nimpl TwoValues {\n    #[ink(message)]\n    pub fn set(&mut self, which: bool, new_value: i32) {\n        match which {\n            true  => { self.a = self.offset + new_value; },\n            false => { self.b = self.offset + new_value; },\n        }\n    }\n}\n")),(0,o.kt)("p",null,"Whenever we call ",(0,o.kt)("inlineCode",{parentName:"p"},"TwoValues::set")," always both ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," are loaded despite the fact the we only operate on one of them at a time. This is very costly since storage accesses are in fact database look-ups.\nIn order to prevent this eager loading of storage contents we can make use of ",(0,o.kt)("inlineCode",{parentName:"p"},"ink_storage::Lazy")," or other lazy data structures defined in that crate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct TwoValues {\n    offset: i32,\n    a: ink_storage::Lazy<i32>,\n    b: ink_storage::Lazy<i32>,\n}\n\nimpl TwoValues {\n    #[ink(message)]\n    pub fn set(&mut self, which: bool, new_value: i32) {\n        match which {\n            true  => { self.a = offset + new_value; },\n            false => { self.b = offset + new_value; },\n        }\n    }\n}\n")),(0,o.kt)("p",null,"Now ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," are only loaded when the contract really needs their values.\nNote that ",(0,o.kt)("inlineCode",{parentName:"p"},"offset")," remained ",(0,o.kt)("inlineCode",{parentName:"p"},"i32")," since it is always needed and could spare the minor overhead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ink_storage::Lazy")," wrapper."))}p.isMDXComponent=!0}}]);