"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[5678],{3905:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>p});var n=l(7294);function i(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){i(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,i=function(e,t){if(null==e)return{};var l,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var l=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=c(l),p=i,k=h["".concat(s,".").concat(p)]||h[p]||u[p]||r;return l?n.createElement(k,a(a({ref:t},d),{},{components:l})):n.createElement(k,a({ref:t},d))}));function p(e,t){var l=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=l.length,a=new Array(r);a[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<r;c++)a[c]=l[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}h.displayName="MDXCreateElement"},8113:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=l(7462),i=(l(7294),l(3905));const r={id:"cell",title:"Cell mode",sidebar_label:"Cell mode",slug:"/library/index/cell"},a=void 0,o={unversionedId:"library/index/cell",id:"library/index/cell",title:"Cell mode",description:"The H3 system assigns a unique hierarchical index to each cell. The H3 index of a resolution r cell begins with the appropriate resolution 0 base cell number. This is followed by a sequence of r digits 0-6, where each ith digit di specifies one of the 7 cells centered on the cell indicated by the coarser resolution digits d1 through di-1. A local hexagon coordinate system is assigned to each of the resolution 0 base cells and is used to orient all hierarchical indexing child cells of that base cell. The assignment of digits 0-6 at each resolution uses a Central Place Indexing arrangement (see Sahr, 2014). In the case of the 12 pentagonal cells the indexing hierarchy produced by sub-digit 1 is removed at all resolutions.",source:"@site/docs/library/index/cell.md",sourceDirName:"library/index",slug:"/library/index/cell",permalink:"/docs/library/index/cell",draft:!1,editUrl:"https://github.com/uber/h3/edit/master/website/docs/library/index/cell.md",tags:[],version:"current",frontMatter:{id:"cell",title:"Cell mode",sidebar_label:"Cell mode",slug:"/library/index/cell"},sidebar:"someSidebar",previous:{title:"H3 Index",permalink:"/docs/core-library/h3Indexing"},next:{title:"Directed edge mode",permalink:"/docs/library/index/directededge"}},s={},c=[{value:"H3 Cell Index",id:"h3-cell-index",level:2},{value:"Bit layout of H3Index for cells",id:"bit-layout-of-h3index-for-cells",level:2},{value:"Links",id:"links",level:2}],d={toc:c};function u(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{height:"300",src:"/images/cell_mode.png"})),(0,i.kt)("p",null,"The H3 system assigns a unique hierarchical index to each cell. The H3 index of a resolution ",(0,i.kt)("em",{parentName:"p"},"r")," cell begins with the appropriate resolution 0 base cell number. This is followed by a sequence of ",(0,i.kt)("em",{parentName:"p"},"r")," digits 0-6, where each ",(0,i.kt)("em",{parentName:"p"},"i"),(0,i.kt)("sup",null,"th")," digit ",(0,i.kt)("em",{parentName:"p"},"d"),(0,i.kt)("sub",null,"i")," specifies one of the 7 cells centered on the cell indicated by the coarser resolution digits ",(0,i.kt)("em",{parentName:"p"},"d"),(0,i.kt)("sub",null,"1")," through ",(0,i.kt)("em",{parentName:"p"},"d"),(0,i.kt)("sub",null,"i-1"),". A local hexagon coordinate system is assigned to each of the resolution 0 base cells and is used to orient all hierarchical indexing child cells of that base cell. The assignment of digits 0-6 at each resolution uses a ",(0,i.kt)("em",{parentName:"p"},"Central Place Indexing")," arrangement (see ",(0,i.kt)("a",{parentName:"p",href:"http://webpages.sou.edu/~sahrk/sqspc/pubs/autocarto14.pdf"},"Sahr, 2014"),"). In the case of the 12 pentagonal cells the indexing hierarchy produced by sub-digit 1 is removed at all resolutions."),(0,i.kt)("p",null,"Child hexagons are linearly smaller than their parent hexagons."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{height:"300",src:"/images/cpidigits.png"})),(0,i.kt)("h2",{id:"h3-cell-index"},"H3 Cell Index"),(0,i.kt)("p",null,"An H3 Cell index (mode 1) represents a cell (hexagon or pentagon) in the H3 grid system at a particular resolution. The components of the H3 Cell index are packed into a 64-bit integer in order, highest bit first, as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 bit reserved and set to 0,"),(0,i.kt)("li",{parentName:"ul"},"4 bits to indicate the H3 Cell index mode,"),(0,i.kt)("li",{parentName:"ul"},"3 bits reserved and set to 0,"),(0,i.kt)("li",{parentName:"ul"},"4 bits to indicate the cell resolution 0-15,"),(0,i.kt)("li",{parentName:"ul"},"7 bits to indicate the base cell 0-121,"),(0,i.kt)("li",{parentName:"ul"},"3 bits to indicate each subsequent digit 0-6 from resolution 1 up to the resolution of the cell (45 bits total are reserved for resolutions 1-15)")),(0,i.kt)("p",null,"The three bits for each unused digit are set to 7."),(0,i.kt)("h2",{id:"bit-layout-of-h3index-for-cells"},"Bit layout of H3Index for cells"),(0,i.kt)("p",null,"The layout of an ",(0,i.kt)("inlineCode",{parentName:"p"},"H3Index"),' is shown below in table form. The interpretation of the "Mode-Dependent" field differs depending on the mode of the index.'),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null),(0,i.kt)("th",null,"0x0F"),(0,i.kt)("th",null,"0x0E"),(0,i.kt)("th",null,"0x0D"),(0,i.kt)("th",null,"0x0C"),(0,i.kt)("th",null,"0x0B"),(0,i.kt)("th",null,"0x0A"),(0,i.kt)("th",null,"0x09"),(0,i.kt)("th",null,"0x08"),(0,i.kt)("th",null,"0x07"),(0,i.kt)("th",null,"0x06"),(0,i.kt)("th",null,"0x05"),(0,i.kt)("th",null,"0x04"),(0,i.kt)("th",null,"0x03"),(0,i.kt)("th",null,"0x02"),(0,i.kt)("th",null,"0x01"),(0,i.kt)("th",null,"0x00")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"0x30"),(0,i.kt)("td",null,"Reserved (0)"),(0,i.kt)("td",{colspan:"4"},"Mode (1)"),(0,i.kt)("td",{colspan:"3"},"Reserved (0)"),(0,i.kt)("td",{colspan:"4"},"Resolution"),(0,i.kt)("td",{colspan:"4"},"Base cell")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"0x20"),(0,i.kt)("td",{colspan:"3"},"Base cell"),(0,i.kt)("td",{colspan:"3"},"Digit 1"),(0,i.kt)("td",{colspan:"3"},"Digit 2"),(0,i.kt)("td",{colspan:"3"},"Digit 3"),(0,i.kt)("td",{colspan:"3"},"Digit 4"),(0,i.kt)("td",null,"Digit 5")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"0x10"),(0,i.kt)("td",{colspan:"2"},"Digit 5"),(0,i.kt)("td",{colspan:"3"},"Digit 6"),(0,i.kt)("td",{colspan:"3"},"Digit 7"),(0,i.kt)("td",{colspan:"3"},"Digit 8"),(0,i.kt)("td",{colspan:"3"},"Digit 9"),(0,i.kt)("td",{colspan:"2"},"Digit 10")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"0x00"),(0,i.kt)("td",null,"Digit 10"),(0,i.kt)("td",{colspan:"3"},"Digit 11"),(0,i.kt)("td",{colspan:"3"},"Digit 12"),(0,i.kt)("td",{colspan:"3"},"Digit 13"),(0,i.kt)("td",{colspan:"3"},"Digit 14"),(0,i.kt)("td",{colspan:"3"},"Digit 15"))),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Observable notebook example: ",(0,i.kt)("a",{parentName:"li",href:"https://observablehq.com/@nrabinowitz/h3-index-inspector?collection=@nrabinowitz/h3"},"H3 Index Inspector"))))}u.isMDXComponent=!0}}]);