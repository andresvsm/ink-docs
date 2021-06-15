(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{107:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return s})),n.d(e,"metadata",(function(){return c})),n.d(e,"rightToc",(function(){return i})),n.d(e,"default",(function(){return l}));var o=n(2),r=n(6),a=(n(0),n(111)),s={title:"Troubleshooting",slug:"/getting-started/troubleshooting"},c={unversionedId:"getting-started/troubleshooting",id:"getting-started/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"Here are solutions to some of the common problems you may come across:",source:"@site/docs/getting-started/troubleshooting.md",slug:"/getting-started/troubleshooting",permalink:"/ink-docs/getting-started/troubleshooting",editUrl:"https://github.com/ink-docs/edit/master/docs/getting-started/troubleshooting.md",version:"current",sidebar:"reference",previous:{title:"Call Your Contract",permalink:"/ink-docs/getting-started/calling-your-contract"},next:{title:"Contract Template",permalink:"/ink-docs/basics/contract-template"}},i=[{value:"Unexpected Epoch Change",id:"unexpected-epoch-change",children:[]},{value:"Old Contracts in Local Storage",id:"old-contracts-in-local-storage",children:[]},{value:"&quot;Send as Transaction&quot; vs. &quot;Send as RPC&quot;",id:"send-as-transaction-vs-send-as-rpc",children:[]},{value:"Contract State Rent",id:"contract-state-rent",children:[]},{value:"Other Issues",id:"other-issues",children:[]}],u={rightToc:i};function l(t){var e=t.components,s=Object(r.a)(t,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,s,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Here are solutions to some of the common problems you may come across:"),Object(a.b)("h3",{id:"unexpected-epoch-change"},"Unexpected Epoch Change"),Object(a.b)("p",null,"There is a known issue with the Substrate block production (BABE) on a running chain. If you stop your node for too long (closing the terminal, putting your computer to sleep, etc.), you will get the following error:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'ClientImport("Unexpected epoch change")\n')),Object(a.b)("p",null,"To solve this you will need to restart your node with: ",Object(a.b)("inlineCode",{parentName:"p"},"canvas --dev --tmp"),". At that point, you will\nneed to re-deploy any contracts and re-do any steps that you may have done before on your node. As\nlong as you keep your node running, you should face no issues."),Object(a.b)("h3",{id:"old-contracts-in-local-storage"},"Old Contracts in Local Storage"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Canvas UI")," uses its own local storage to track the contracts that you have deployed. This means\nthat if you deploy a contract using the UI, and then purge your Canvas node, you will be prompted to\nreset your local storage and please do so. And then re-deploy any contracts and re-do any steps that\nyou may have done before on your node."),Object(a.b)("h3",{id:"send-as-transaction-vs-send-as-rpc"},'"Send as Transaction" vs. "Send as RPC"'),Object(a.b)("p",null,"When interacting with contracts using the Canvas UI, you have the option to submit your call as a\ntransaction or as a RPC:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"An image of submitting with transaction or RPC",src:n(169).default})),Object(a.b)("p",null,'When you send as a transaction, it should be exactly as you expect. A transaction is submitted to\nthe contract, a fee is deducted from your account, and the state of your blockchain can change. In\nthese situations, no value is returned from your contract call, only a "Success" or "Failed"\nextrinsic message along with any events it may emit.'),Object(a.b)("p",null,'However, there may be some calls that you want to "test", rather than actually submit a transaction,\nor you may want to peek at the value that ',Object(a.b)("em",{parentName:"p"},"would"),' be returned if you called the contract function.\nFor these scenarios, you submit an RPC call, which will run all of your contract logic, but not\nactually submit a transaction or update the chain state. However, you will still need to specify\nthe right amount of gas to cover your "virtual fee". But don\'t worry, nothing will be charged when making a call this way. :)'),Object(a.b)("h3",{id:"contract-state-rent"},"Contract State Rent"),Object(a.b)("p",null,"The Substrate contracts pallet has a state rent system that forces contracts to stay funded if they\nwant to stay on the blockchain. This means that the more you use a contract, the more fees are taken\nfrom it. At some point, the contract will run out of fees and turn into a non-functioning tombstone.\nWe try to avoid this by giving the contract a large endowment when we initially deploy it. However,\nif your contract does become a tombstone, for the purposes of this tutorial, the easiest solution is\nto just redeploy your contract on the chain."),Object(a.b)("p",null,"The best way to prevent this in general is to make sure your contract always stays well funded. In\nreal world scenarios, there is a process that you can go through to recover a tombstone contract and\nget it functioning again, however this is beyond the scope of this tutorial."),Object(a.b)("h3",{id:"other-issues"},"Other Issues"),Object(a.b)("p",null,"If you run into any other issues during this tutorial, please ",Object(a.b)("a",{parentName:"p",href:"https://github.com/substrate-developer-hub/substrate-contracts-workshop/issues"},"report an issue"),"!"))}l.isMDXComponent=!0},111:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=r.a.createContext({}),l=function(t){var e=r.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},d=function(t){var e=l(t.components);return r.a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},h=r.a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=l(n),h=o,b=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?r.a.createElement(b,c(c({ref:e},u),{},{components:n})):r.a.createElement(b,c({ref:e},u))}));function b(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,s=new Array(a);s[0]=h;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:o,s[1]=c;for(var u=2;u<a;u++)s[u]=n[u];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},169:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/send-as-c374f34ef9a7ae06db2ca9c3a4dc80aa.png"}}]);