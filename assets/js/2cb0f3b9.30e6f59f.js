"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[5248],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>p});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),s=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),g=s(t),p=l,m=g["".concat(o,".").concat(p)]||g[p]||u[p]||r;return t?n.createElement(m,i(i({ref:a},c),{},{components:t})):n.createElement(m,i({ref:a},c))}));function p(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=g;var d={};for(var o in a)hasOwnProperty.call(a,o)&&(d[o]=a[o]);d.originalType=e,d.mdxType="string"==typeof e?e:l,i[1]=d;for(var s=2;s<r;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(7294),l=t(6010);const r="tabItem_Ymn6";function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(7462),l=t(7294),r=t(6010),i=t(2389),d=t(7392),o=t(7094),s=t(2466);const c="tabList__CuJ",u="tabItem_LNqP";function g(e){var a,t;const{lazy:i,block:g,defaultValue:p,values:m,groupId:v,className:f}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:b.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),k=(0,d.l)(h,((e,a)=>e.value===a.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===p?p:null!=(a=null!=p?p:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?a:b[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:N}=(0,o.U)(),[x,E]=(0,l.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:I}=(0,s.o5)();if(null!=v){const e=T[v];null!=e&&e!==x&&h.some((a=>a.value===e))&&E(e)}const D=e=>{const a=e.currentTarget,t=j.indexOf(a),n=h[t].value;n!==x&&(I(a),E(n),null!=v&&N(v,String(n)))},Z=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{var n;const a=j.indexOf(e.currentTarget)+1;t=null!=(n=j[a])?n:j[0];break}case"ArrowLeft":{var l;const a=j.indexOf(e.currentTarget)-1;t=null!=(l=j[a])?l:j[j.length-1];break}}null==(a=t)||a.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":g},f)},h.map((e=>{let{value:a,label:t,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===a?0:-1,"aria-selected":x===a,key:a,ref:e=>j.push(e),onKeyDown:Z,onFocus:D,onClick:D},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":x===a})}),null!=t?t:a)}))),i?(0,l.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==x})))))}function p(e){const a=(0,i.Z)();return l.createElement(g,(0,n.Z)({key:String(a)},e))}},5207:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>u});var n=t(7462),l=(t(7294),t(3905)),r=t(5488),i=t(5162);const d={id:"uniedge",title:"Directed edge functions",sidebar_label:"Directed edges",slug:"/api/uniedge"},o=void 0,s={unversionedId:"api/uniedge",id:"api/uniedge",title:"Directed edge functions",description:"Directed edges allow encoding the directed (that is, which cell is the origin and which is the destination can be determined)",source:"@site/docs/api/directededge.mdx",sourceDirName:"api",slug:"/api/uniedge",permalink:"/docs/api/uniedge",draft:!1,editUrl:"https://github.com/uber/h3/edit/master/website/docs/api/directededge.mdx",tags:[],version:"current",frontMatter:{id:"uniedge",title:"Directed edge functions",sidebar_label:"Directed edges",slug:"/api/uniedge"},sidebar:"someSidebar",previous:{title:"Regions",permalink:"/docs/api/regions"},next:{title:"Vertexes",permalink:"/docs/api/vertex"}},c={},u=[{value:"areNeighborCells",id:"areneighborcells",level:2},{value:"cellsToDirectedEdge",id:"cellstodirectededge",level:2},{value:"isValidDirectedEdge",id:"isvaliddirectededge",level:2},{value:"getDirectedEdgeOrigin",id:"getdirectededgeorigin",level:2},{value:"getDirectedEdgeDestination",id:"getdirectededgedestination",level:2},{value:"directedEdgeToCells",id:"directededgetocells",level:2},{value:"originToDirectedEdges",id:"origintodirectededges",level:2},{value:"directedEdgeToBoundary",id:"directededgetoboundary",level:2}],g={toc:u};function p(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Directed edges allow encoding the directed (that is, which cell is the origin and which is the destination can be determined)\nedge from one cell to a neighboring cell."),(0,l.kt)("h2",{id:"areneighborcells"},"areNeighborCells"),(0,l.kt)(r.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"H3Error areNeighborCells(H3Index origin, H3Index destination, int *out);\n"))),(0,l.kt)(i.Z,{value:"python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"h3.are_neighbor_cells(origin, destination)\n"))),(0,l.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"boolean areNeighborCells(long origin, long destination);\nboolean areNeighborCells(String origin, String destination);\n"))),(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"h3.areNeighborCells(origin, destination)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const origin = '85283473fffffff';\n  const destination = '85283477fffffff';\n  return h3.areNeighborCells(origin, destination);\n}\n")))),(0,l.kt)("p",null,"Returns whether or not the provided H3 cell indexes are neighbors."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"out")," will be 1 if the indexes are neighbors, 0 otherwise."),(0,l.kt)("h2",{id:"cellstodirectededge"},"cellsToDirectedEdge"),(0,l.kt)(r.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"H3Error cellsToDirectedEdge(H3Index origin, H3Index destination, H3Index *out);\n"))),(0,l.kt)(i.Z,{value:"python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"h3.cells_to_directed_edge(origin, destination)\n"))),(0,l.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"long cellsToDirectedEdge(long origin, long destination);\nString cellsToDirectedEdge(String origin, String destination);\n"))),(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"h3.cellsToDirectedEdge(h3Index)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const origin = '85283473fffffff';\n  const destination = '85283477fffffff';\n  return h3.cellsToDirectedEdge(origin, destination);\n}\n")))),(0,l.kt)("p",null,"Returns a unidirectional edge H3 index based on the provided origin and\ndestination."),(0,l.kt)("p",null,"Returns 0 on success."),(0,l.kt)("h2",{id:"isvaliddirectededge"},"isValidDirectedEdge"),(0,l.kt)(r.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"int isValidDirectedEdge(H3Index edge);\n"))),(0,l.kt)(i.Z,{value:"python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"h3.is_valid_directed_edge(edge)\n"))),(0,l.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"boolean isValidDirectedEdge(long edge);\nboolean isValidDirectedEdge(String edgeAddress);\n"))),(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"h3.isValidDirectedEdge(edge)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const edge = '115283473fffffff';\n  return h3.isValidDirectedEdge(edge);\n}\n")))),(0,l.kt)("p",null,"Determines if the provided H3Index is a valid unidirectional edge index."),(0,l.kt)("p",null,"Returns 1 if it is a unidirectional edge H3Index, otherwise 0."),(0,l.kt)("h2",{id:"getdirectededgeorigin"},"getDirectedEdgeOrigin"),(0,l.kt)(r.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"H3Error getDirectedEdgeOrigin(H3Index edge, H3Index *out);\n"))),(0,l.kt)(i.Z,{value:"python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"h3.get_directed_edge_origin(edge)\n"))),(0,l.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"long getDirectedEdgeOrigin(long edge);\nString getDirectedEdgeOrigin(String edgeAddress);\n"))),(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"h3.getDirectedEdgeOrigin(h3Index)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const edge = '115283473fffffff';\n  return h3.getDirectedEdgeOrigin(edge);\n}\n")))),(0,l.kt)("p",null,"Returns the origin hexagon from the unidirectional edge H3Index."),(0,l.kt)("h2",{id:"getdirectededgedestination"},"getDirectedEdgeDestination"),(0,l.kt)(r.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"H3Error getDirectedEdgeDestination(H3Index edge, H3Index *out);\n"))),(0,l.kt)(i.Z,{value:"python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"h3.get_directed_edge_destination(edge)\n"))),(0,l.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"long getDirectedEdgeDestination(long edge);\nString getDirectedEdgeDestination(String edgeAddress);\n"))),(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"h3.getDirectedEdgeDestination(edge)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const edge = '115283473fffffff';\n  return h3.getDirectedEdgeDestination(edge);\n}\n")))),(0,l.kt)("p",null,"Returns the destination hexagon from the unidirectional edge H3Index."),(0,l.kt)("h2",{id:"directededgetocells"},"directedEdgeToCells"),(0,l.kt)(r.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"H3Error directedEdgeToCells(H3Index edge, H3Index* originDestination);\n"))),(0,l.kt)(i.Z,{value:"python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"h3.directed_edge_to_cells(edge)\n"))),(0,l.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<Long> directedEdgeToCells(long edge);\nList<String> directedEdgeToCells(String edgeAddress);\n"))),(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"h3.directedEdgeToCells(edge)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const edge = '115283473fffffff';\n  return h3.directedEdgeToCells(edge);\n}\n")))),(0,l.kt)("p",null,"Returns the origin, destination pair of hexagon IDs for the given edge ID, which are placed at ",(0,l.kt)("inlineCode",{parentName:"p"},"originDestination[0]")," and\n",(0,l.kt)("inlineCode",{parentName:"p"},"originDestination[1]")," respectively."),(0,l.kt)("h2",{id:"origintodirectededges"},"originToDirectedEdges"),(0,l.kt)(r.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"H3Error originToDirectedEdges(H3Index origin, H3Index* edges);\n"))),(0,l.kt)(i.Z,{value:"python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"h3.origin_to_directed_edges(h)\n"))),(0,l.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<Long> originToDirectedEdges(long h3);\nList<String> originToDirectedEdges(String h3);\n"))),(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"h3.originToDirectedEdges(h3Index)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const h = '85283473fffffff';\n  return h3.originToDirectedEdges(h);\n}\n")))),(0,l.kt)("p",null,"Provides all of the directed edges from the current H3Index. ",(0,l.kt)("inlineCode",{parentName:"p"},"edges")," must be of length 6,\nand the number of directed edges placed in the array may be less than 6. If this is the case,\none of the members of the array will be ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,l.kt)("h2",{id:"directededgetoboundary"},"directedEdgeToBoundary"),(0,l.kt)(r.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"H3Error directedEdgeToBoundary(H3Index edge, CellBoundary* gb);\n"))),(0,l.kt)(i.Z,{value:"python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"h3.directed_edge_to_boundary(edge, geo_json=False)\n"))),(0,l.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<LatLng> directedEdgeToBoundary(long edge);\nList<LatLng> directedEdgeToBoundary(String edgeAddress);\n"))),(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"h3.directedEdgeToBoundary(edge, [formatAsGeoJson])\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const edge = '115283473fffffff';\n  return h3.directedEdgeToBoundary(edge);\n}\n")))),(0,l.kt)("p",null,"Provides the coordinates defining the unidirectional edge."))}p.isMDXComponent=!0}}]);