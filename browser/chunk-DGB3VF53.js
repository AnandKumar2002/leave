import{c as r3}from"./chunk-FFNQQ6S7.js";import"./chunk-YT63TBDZ.js";import{b as u3,c as d3,d as f1,e as C3,f as $2}from"./chunk-EP4UQZT6.js";import"./chunk-YWK6GFPS.js";import{a as f3,b as m3,c as z3,d as L3,h as p3}from"./chunk-2OV54QIK.js";import{a as M3}from"./chunk-IYQM5MWB.js";import{$ as a2,Ba as G,Ca as M2,Cb as a3,Ea as J1,Gb as n3,Hb as i3,Ib as o3,L as o1,La as f2,M as G1,Ma as Z1,Mb as t3,Na as c2,Pa as x2,Qa as j,R as Y1,Ra as q,Sa as i2,T as H2,U as X1,Ua as K2,V as K1,Va as c3,Wa as Q,Xa as $,Ya as l3,Za as s3,_ as X2,aa as n2,cb as V,db as t1,eb as r1,fb as _2,gb as E2,hb as R2,ia as $1,ib as B2,kb as I2,lb as e3,ya as Q1}from"./chunk-CVYJNGOA.js";import{a as F,b as K,d as T4,f as F4,g as V1}from"./chunk-FK42CRUA.js";var A4=T4((w2,j1)=>{"use strict";(function(s,l){if(typeof w2=="object"&&typeof j1=="object")j1.exports=l(function(){try{return f1(),V1(d3)}catch{}}());else if(typeof define=="function"&&define.amd)define(["jspdf"],l);else{var e=l(typeof w2=="object"?function(){try{return f1(),V1(d3)}catch{}}():s.jspdf);for(var a in e)(typeof w2=="object"?w2:s)[a]=e[a]}})(typeof globalThis<"u"?globalThis:typeof w2<"u"?w2:typeof window<"u"?window:typeof self<"u"?self:global,function(c){return function(){"use strict";var s={172:function(n,i){var m=this&&this.__extends||function(){var M=function(k,r){return M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,b){A.__proto__=b}||function(A,b){for(var g in b)Object.prototype.hasOwnProperty.call(b,g)&&(A[g]=b[g])},M(k,r)};return function(k,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");M(k,r);function A(){this.constructor=k}k.prototype=r===null?Object.create(r):(A.prototype=r.prototype,new A)}}();Object.defineProperty(i,"__esModule",{value:!0}),i.CellHookData=i.HookData=void 0;var S=function(){function M(k,r,A){this.table=r,this.pageNumber=r.pageNumber,this.pageCount=this.pageNumber,this.settings=r.settings,this.cursor=A,this.doc=k.getDocument()}return M}();i.HookData=S;var L=function(M){m(k,M);function k(r,A,b,g,z,o){var t=M.call(this,r,A,o)||this;return t.cell=b,t.row=g,t.column=z,t.section=g.section,t}return k}(S);i.CellHookData=L},340:function(n,i,m){Object.defineProperty(i,"__esModule",{value:!0});var S=m(4),L=m(136),M=m(744),k=m(776),r=m(664),A=m(972);function b(g){g.API.autoTable=function(){for(var z=[],o=0;o<arguments.length;o++)z[o]=arguments[o];var t;z.length===1?t=z[0]:(console.error("Use of deprecated autoTable initiation"),t=z[2]||{},t.columns=z[0],t.body=z[1]);var p=(0,k.parseInput)(this,t),C=(0,A.createTable)(this,p);return(0,r.drawTable)(this,C),this},g.API.lastAutoTable=!1,g.API.previousAutoTable=!1,g.API.autoTable.previous=!1,g.API.autoTableText=function(z,o,t,p){(0,L.default)(z,o,t,p,this)},g.API.autoTableSetDefaults=function(z){return M.DocHandler.setDefaults(z,this),this},g.autoTableSetDefaults=function(z,o){M.DocHandler.setDefaults(z,o)},g.API.autoTableHtmlToJson=function(z,o){var t;if(o===void 0&&(o=!1),typeof window>"u")return console.error("Cannot run autoTableHtmlToJson in non browser environment"),null;var p=new M.DocHandler(this),C=(0,S.parseHtml)(p,z,window,o,!1),f=C.head,h=C.body,y=((t=f[0])===null||t===void 0?void 0:t.map(function(w){return w.content}))||[];return{columns:y,rows:h,data:h}},g.API.autoTableEndPosY=function(){console.error("Use of deprecated function: autoTableEndPosY. Use doc.lastAutoTable.finalY instead.");var z=this.lastAutoTable;return z&&z.finalY?z.finalY:0},g.API.autoTableAddPageContent=function(z){return console.error("Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead."),g.API.autoTable.globalDefaults||(g.API.autoTable.globalDefaults={}),g.API.autoTable.globalDefaults.addPageContent=z,this},g.API.autoTableAddPage=function(){return console.error("Use of deprecated function: autoTableAddPage. Use doc.addPage()"),this.addPage(),this}}i.default=b},136:function(n,i){Object.defineProperty(i,"__esModule",{value:!0});function m(S,L,M,k,r){k=k||{};var A=1.15,b=r.internal.scaleFactor,g=r.internal.getFontSize()/b,z=r.getLineHeightFactor?r.getLineHeightFactor():A,o=g*z,t=/\r\n|\r|\n/g,p="",C=1;if((k.valign==="middle"||k.valign==="bottom"||k.halign==="center"||k.halign==="right")&&(p=typeof S=="string"?S.split(t):S,C=p.length||1),M+=g*(2-A),k.valign==="middle"?M-=C/2*o:k.valign==="bottom"&&(M-=C*o),k.halign==="center"||k.halign==="right"){var f=g;if(k.halign==="center"&&(f*=.5),p&&C>=1){for(var h=0;h<p.length;h++)r.text(p[h],L-r.getStringUnitWidth(p[h])*f,M),M+=o;return r}L-=r.getStringUnitWidth(S)*f}return k.halign==="justify"?r.text(S,L,M,{maxWidth:k.maxWidth||100,align:"justify"}):r.text(S,L,M),r}i.default=m},420:function(n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.getPageAvailableWidth=i.parseSpacing=i.getFillStyle=i.addTableBorder=i.getStringWidth=void 0;function m(r,A,b){b.applyStyles(A,!0);var g=Array.isArray(r)?r:[r],z=g.map(function(o){return b.getTextWidth(o)}).reduce(function(o,t){return Math.max(o,t)},0);return z}i.getStringWidth=m;function S(r,A,b,g){var z=A.settings.tableLineWidth,o=A.settings.tableLineColor;r.applyStyles({lineWidth:z,lineColor:o});var t=L(z,!1);t&&r.rect(b.x,b.y,A.getWidth(r.pageSize().width),g.y-b.y,t)}i.addTableBorder=S;function L(r,A){var b=r>0,g=A||A===0;return b&&g?"DF":b?"S":g?"F":null}i.getFillStyle=L;function M(r,A){var b,g,z,o;if(r=r||A,Array.isArray(r)){if(r.length>=4)return{top:r[0],right:r[1],bottom:r[2],left:r[3]};if(r.length===3)return{top:r[0],right:r[1],bottom:r[2],left:r[1]};if(r.length===2)return{top:r[0],right:r[1],bottom:r[0],left:r[1]};r.length===1?r=r[0]:r=A}return typeof r=="object"?(typeof r.vertical=="number"&&(r.top=r.vertical,r.bottom=r.vertical),typeof r.horizontal=="number"&&(r.right=r.horizontal,r.left=r.horizontal),{left:(b=r.left)!==null&&b!==void 0?b:A,top:(g=r.top)!==null&&g!==void 0?g:A,right:(z=r.right)!==null&&z!==void 0?z:A,bottom:(o=r.bottom)!==null&&o!==void 0?o:A}):(typeof r!="number"&&(r=A),{top:r,right:r,bottom:r,left:r})}i.parseSpacing=M;function k(r,A){var b=M(A.settings.margin,0);return r.pageSize().width-(b.left+b.right)}i.getPageAvailableWidth=k},796:function(n,i){var m=this&&this.__extends||function(){var k=function(r,A){return k=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,g){b.__proto__=g}||function(b,g){for(var z in g)Object.prototype.hasOwnProperty.call(g,z)&&(b[z]=g[z])},k(r,A)};return function(r,A){if(typeof A!="function"&&A!==null)throw new TypeError("Class extends value "+String(A)+" is not a constructor or null");k(r,A);function b(){this.constructor=r}r.prototype=A===null?Object.create(A):(b.prototype=A.prototype,new b)}}();Object.defineProperty(i,"__esModule",{value:!0}),i.getTheme=i.defaultStyles=i.HtmlRowInput=void 0;var S=function(k){m(r,k);function r(A){var b=k.call(this)||this;return b._element=A,b}return r}(Array);i.HtmlRowInput=S;function L(k){return{font:"helvetica",fontStyle:"normal",overflow:"linebreak",fillColor:!1,textColor:20,halign:"left",valign:"top",fontSize:10,cellPadding:5/k,lineColor:200,lineWidth:0,cellWidth:"auto",minCellHeight:0,minCellWidth:0}}i.defaultStyles=L;function M(k){var r={striped:{table:{fillColor:255,textColor:80,fontStyle:"normal"},head:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},body:{},foot:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},alternateRow:{fillColor:245}},grid:{table:{fillColor:255,textColor:80,fontStyle:"normal",lineWidth:.1},head:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},body:{},foot:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},alternateRow:{}},plain:{head:{fontStyle:"bold"},foot:{fontStyle:"bold"}}};return r[k]}i.getTheme=M},903:function(n,i,m){Object.defineProperty(i,"__esModule",{value:!0}),i.parseCss=void 0;var S=m(420);function L(b,g,z,o,t){var p={},C=1.3333333333333333,f=k(g,function(N){return t.getComputedStyle(N).backgroundColor});f!=null&&(p.fillColor=f);var h=k(g,function(N){return t.getComputedStyle(N).color});h!=null&&(p.textColor=h);var y=A(o,z);y&&(p.cellPadding=y);var w="borderTopColor",v=C*z,d=o.borderTopWidth;if(o.borderBottomWidth===d&&o.borderRightWidth===d&&o.borderLeftWidth===d){var T=(parseFloat(d)||0)/v;T&&(p.lineWidth=T)}else p.lineWidth={top:(parseFloat(o.borderTopWidth)||0)/v,right:(parseFloat(o.borderRightWidth)||0)/v,bottom:(parseFloat(o.borderBottomWidth)||0)/v,left:(parseFloat(o.borderLeftWidth)||0)/v},p.lineWidth.top||(p.lineWidth.right?w="borderRightColor":p.lineWidth.bottom?w="borderBottomColor":p.lineWidth.left&&(w="borderLeftColor"));var R=k(g,function(N){return t.getComputedStyle(N)[w]});R!=null&&(p.lineColor=R);var O=["left","right","center","justify"];O.indexOf(o.textAlign)!==-1&&(p.halign=o.textAlign),O=["middle","bottom","top"],O.indexOf(o.verticalAlign)!==-1&&(p.valign=o.verticalAlign);var x=parseInt(o.fontSize||"");isNaN(x)||(p.fontSize=x/C);var u=M(o);u&&(p.fontStyle=u);var P=(o.fontFamily||"").toLowerCase();return b.indexOf(P)!==-1&&(p.font=P),p}i.parseCss=L;function M(b){var g="";return(b.fontWeight==="bold"||b.fontWeight==="bolder"||parseInt(b.fontWeight)>=700)&&(g="bold"),(b.fontStyle==="italic"||b.fontStyle==="oblique")&&(g+="italic"),g}function k(b,g){var z=r(b,g);if(!z)return null;var o=z.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);if(!o||!Array.isArray(o))return null;var t=[parseInt(o[1]),parseInt(o[2]),parseInt(o[3])],p=parseInt(o[4]);return p===0||isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function r(b,g){var z=g(b);return z==="rgba(0, 0, 0, 0)"||z==="transparent"||z==="initial"||z==="inherit"?b.parentElement==null?null:r(b.parentElement,g):z}function A(b,g){var z=[b.paddingTop,b.paddingRight,b.paddingBottom,b.paddingLeft],o=96/(72/g),t=(parseInt(b.lineHeight)-parseInt(b.fontSize))/g/2,p=z.map(function(f){return parseInt(f||"0")/o}),C=(0,S.parseSpacing)(p,0);return t>C.top&&(C.top=t),t>C.bottom&&(C.bottom=t),C}},744:function(n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.DocHandler=void 0;var m={},S=function(){function L(M){this.jsPDFDocument=M,this.userStyles={textColor:M.getTextColor?this.jsPDFDocument.getTextColor():0,fontSize:M.internal.getFontSize(),fontStyle:M.internal.getFont().fontStyle,font:M.internal.getFont().fontName,lineWidth:M.getLineWidth?this.jsPDFDocument.getLineWidth():0,lineColor:M.getDrawColor?this.jsPDFDocument.getDrawColor():0}}return L.setDefaults=function(M,k){k===void 0&&(k=null),k?k.__autoTableDocumentDefaults=M:m=M},L.unifyColor=function(M){return Array.isArray(M)?M:typeof M=="number"?[M,M,M]:typeof M=="string"?[M]:null},L.prototype.applyStyles=function(M,k){var r,A,b;k===void 0&&(k=!1),M.fontStyle&&this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(M.fontStyle);var g=this.jsPDFDocument.internal.getFont(),z=g.fontStyle,o=g.fontName;if(M.font&&(o=M.font),M.fontStyle){z=M.fontStyle;var t=this.getFontList()[o];t&&t.indexOf(z)===-1&&(this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(t[0]),z=t[0])}if(this.jsPDFDocument.setFont(o,z),M.fontSize&&this.jsPDFDocument.setFontSize(M.fontSize),!k){var p=L.unifyColor(M.fillColor);p&&(r=this.jsPDFDocument).setFillColor.apply(r,p),p=L.unifyColor(M.textColor),p&&(A=this.jsPDFDocument).setTextColor.apply(A,p),p=L.unifyColor(M.lineColor),p&&(b=this.jsPDFDocument).setDrawColor.apply(b,p),typeof M.lineWidth=="number"&&this.jsPDFDocument.setLineWidth(M.lineWidth)}},L.prototype.splitTextToSize=function(M,k,r){return this.jsPDFDocument.splitTextToSize(M,k,r)},L.prototype.rect=function(M,k,r,A,b){return this.jsPDFDocument.rect(M,k,r,A,b)},L.prototype.getLastAutoTable=function(){return this.jsPDFDocument.lastAutoTable||null},L.prototype.getTextWidth=function(M){return this.jsPDFDocument.getTextWidth(M)},L.prototype.getDocument=function(){return this.jsPDFDocument},L.prototype.setPage=function(M){this.jsPDFDocument.setPage(M)},L.prototype.addPage=function(){return this.jsPDFDocument.addPage()},L.prototype.getFontList=function(){return this.jsPDFDocument.getFontList()},L.prototype.getGlobalOptions=function(){return m||{}},L.prototype.getDocumentOptions=function(){return this.jsPDFDocument.__autoTableDocumentDefaults||{}},L.prototype.pageSize=function(){var M=this.jsPDFDocument.internal.pageSize;return M.width==null&&(M={width:M.getWidth(),height:M.getHeight()}),M},L.prototype.scaleFactor=function(){return this.jsPDFDocument.internal.scaleFactor},L.prototype.getLineHeightFactor=function(){var M=this.jsPDFDocument;return M.getLineHeightFactor?M.getLineHeightFactor():1.15},L.prototype.getLineHeight=function(M){return M/this.scaleFactor()*this.getLineHeightFactor()},L.prototype.pageNumber=function(){var M=this.jsPDFDocument.internal.getCurrentPageInfo();return M?M.pageNumber:this.jsPDFDocument.internal.getNumberOfPages()},L}();i.DocHandler=S},4:function(n,i,m){Object.defineProperty(i,"__esModule",{value:!0}),i.parseHtml=void 0;var S=m(903),L=m(796);function M(A,b,g,z,o){var t,p;z===void 0&&(z=!1),o===void 0&&(o=!1);var C;typeof b=="string"?C=g.document.querySelector(b):C=b;var f=Object.keys(A.getFontList()),h=A.scaleFactor(),y=[],w=[],v=[];if(!C)return console.error("Html table could not be found with input: ",b),{head:y,body:w,foot:v};for(var d=0;d<C.rows.length;d++){var T=C.rows[d],R=(p=(t=T?.parentElement)===null||t===void 0?void 0:t.tagName)===null||p===void 0?void 0:p.toLowerCase(),O=k(f,h,g,T,z,o);O&&(R==="thead"?y.push(O):R==="tfoot"?v.push(O):w.push(O))}return{head:y,body:w,foot:v}}i.parseHtml=M;function k(A,b,g,z,o,t){for(var p=new L.HtmlRowInput(z),C=0;C<z.cells.length;C++){var f=z.cells[C],h=g.getComputedStyle(f);if(o||h.display!=="none"){var y=void 0;t&&(y=(0,S.parseCss)(A,f,b,h,g)),p.push({rowSpan:f.rowSpan,colSpan:f.colSpan,styles:y,_element:f,content:r(f)})}}var w=g.getComputedStyle(z);if(p.length>0&&(o||w.display!=="none"))return p}function r(A){var b=A.cloneNode(!0);return b.innerHTML=b.innerHTML.replace(/\n/g,"").replace(/ +/g," "),b.innerHTML=b.innerHTML.split(/<br.*?>/).map(function(g){return g.trim()}).join(`
`),b.innerText||b.textContent||""}},776:function(n,i,m){Object.defineProperty(i,"__esModule",{value:!0}),i.parseInput=void 0;var S=m(4),L=m(356),M=m(420),k=m(744),r=m(792);function A(C,f){var h=new k.DocHandler(C),y=h.getDocumentOptions(),w=h.getGlobalOptions();(0,r.default)(h,w,y,f);var v=(0,L.assign)({},w,y,f),d;typeof window<"u"&&(d=window);var T=b(w,y,f),R=g(w,y,f),O=z(h,v),x=t(h,v,d);return{id:f.tableId,content:x,hooks:R,styles:T,settings:O}}i.parseInput=A;function b(C,f,h){for(var y={styles:{},headStyles:{},bodyStyles:{},footStyles:{},alternateRowStyles:{},columnStyles:{}},w=function(R){if(R==="columnStyles"){var O=C[R],x=f[R],u=h[R];y.columnStyles=(0,L.assign)({},O,x,u)}else{var P=[C,f,h],N=P.map(function(H){return H[R]||{}});y[R]=(0,L.assign)({},N[0],N[1],N[2])}},v=0,d=Object.keys(y);v<d.length;v++){var T=d[v];w(T)}return y}function g(C,f,h){for(var y=[C,f,h],w={didParseCell:[],willDrawCell:[],didDrawCell:[],willDrawPage:[],didDrawPage:[]},v=0,d=y;v<d.length;v++){var T=d[v];T.didParseCell&&w.didParseCell.push(T.didParseCell),T.willDrawCell&&w.willDrawCell.push(T.willDrawCell),T.didDrawCell&&w.didDrawCell.push(T.didDrawCell),T.willDrawPage&&w.willDrawPage.push(T.willDrawPage),T.didDrawPage&&w.didDrawPage.push(T.didDrawPage)}return w}function z(C,f){var h,y,w,v,d,T,R,O,x,u,P,N,H=(0,M.parseSpacing)(f.margin,40/C.scaleFactor()),D=(h=o(C,f.startY))!==null&&h!==void 0?h:H.top,E;f.showFoot===!0?E="everyPage":f.showFoot===!1?E="never":E=(y=f.showFoot)!==null&&y!==void 0?y:"everyPage";var B;f.showHead===!0?B="everyPage":f.showHead===!1?B="never":B=(w=f.showHead)!==null&&w!==void 0?w:"everyPage";var U=(v=f.useCss)!==null&&v!==void 0?v:!1,W=f.theme||(U?"plain":"striped"),I=!!f.horizontalPageBreak,J=(d=f.horizontalPageBreakRepeat)!==null&&d!==void 0?d:null;return{includeHiddenHtml:(T=f.includeHiddenHtml)!==null&&T!==void 0?T:!1,useCss:U,theme:W,startY:D,margin:H,pageBreak:(R=f.pageBreak)!==null&&R!==void 0?R:"auto",rowPageBreak:(O=f.rowPageBreak)!==null&&O!==void 0?O:"auto",tableWidth:(x=f.tableWidth)!==null&&x!==void 0?x:"auto",showHead:B,showFoot:E,tableLineWidth:(u=f.tableLineWidth)!==null&&u!==void 0?u:0,tableLineColor:(P=f.tableLineColor)!==null&&P!==void 0?P:200,horizontalPageBreak:I,horizontalPageBreakRepeat:J,horizontalPageBreakBehaviour:(N=f.horizontalPageBreakBehaviour)!==null&&N!==void 0?N:"afterAllRows"}}function o(C,f){var h=C.getLastAutoTable(),y=C.scaleFactor(),w=C.pageNumber(),v=!1;if(h&&h.startPageNumber){var d=h.startPageNumber+h.pageNumber-1;v=d===w}return typeof f=="number"?f:(f==null||f===!1)&&v&&h?.finalY!=null?h.finalY+20/y:null}function t(C,f,h){var y=f.head||[],w=f.body||[],v=f.foot||[];if(f.html){var d=f.includeHiddenHtml;if(h){var T=(0,S.parseHtml)(C,f.html,h,d,f.useCss)||{};y=T.head||y,w=T.body||y,v=T.foot||y}else console.error("Cannot parse html in non browser environment")}var R=f.columns||p(y,w,v);return{columns:R,head:y,body:w,foot:v}}function p(C,f,h){var y=C[0]||f[0]||h[0]||[],w=[];return Object.keys(y).filter(function(v){return v!=="_element"}).forEach(function(v){var d=1,T;Array.isArray(y)?T=y[parseInt(v)]:T=y[v],typeof T=="object"&&!Array.isArray(T)&&(d=T?.colSpan||1);for(var R=0;R<d;R++){var O=void 0;Array.isArray(y)?O=w.length:O=v+(R>0?"_".concat(R):"");var x={dataKey:O};w.push(x)}}),w}},792:function(n,i){Object.defineProperty(i,"__esModule",{value:!0});function m(L,M,k,r){for(var A=function(o){o&&typeof o!="object"&&console.error("The options parameter should be of type object, is: "+typeof o),typeof o.extendWidth<"u"&&(o.tableWidth=o.extendWidth?"auto":"wrap",console.error("Use of deprecated option: extendWidth, use tableWidth instead.")),typeof o.margins<"u"&&(typeof o.margin>"u"&&(o.margin=o.margins),console.error("Use of deprecated option: margins, use margin instead.")),o.startY&&typeof o.startY!="number"&&(console.error("Invalid value for startY option",o.startY),delete o.startY),!o.didDrawPage&&(o.afterPageContent||o.beforePageContent||o.afterPageAdd)&&(console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead"),o.didDrawPage=function(v){L.applyStyles(L.userStyles),o.beforePageContent&&o.beforePageContent(v),L.applyStyles(L.userStyles),o.afterPageContent&&o.afterPageContent(v),L.applyStyles(L.userStyles),o.afterPageAdd&&v.pageNumber>1&&v.afterPageAdd(v),L.applyStyles(L.userStyles)}),["createdHeaderCell","drawHeaderRow","drawRow","drawHeaderCell"].forEach(function(v){o[v]&&console.error('The "'.concat(v,'" hook has changed in version 3.0, check the changelog for how to migrate.'))}),[["showFoot","showFooter"],["showHead","showHeader"],["didDrawPage","addPageContent"],["didParseCell","createdCell"],["headStyles","headerStyles"]].forEach(function(v){var d=v[0],T=v[1];o[T]&&(console.error("Use of deprecated option ".concat(T,". Use ").concat(d," instead")),o[d]=o[T])}),[["padding","cellPadding"],["lineHeight","rowHeight"],"fontSize","overflow"].forEach(function(v){var d=typeof v=="string"?v:v[0],T=typeof v=="string"?v:v[1];typeof o[d]<"u"&&(typeof o.styles[T]>"u"&&(o.styles[T]=o[d]),console.error("Use of deprecated option: "+d+", use the style "+T+" instead."))});for(var t=0,p=["styles","bodyStyles","headStyles","footStyles"];t<p.length;t++){var C=p[t];S(o[C]||{})}for(var f=o.columnStyles||{},h=0,y=Object.keys(f);h<y.length;h++){var w=y[h];S(f[w]||{})}},b=0,g=[M,k,r];b<g.length;b++){var z=g[b];A(z)}}i.default=m;function S(L){L.rowHeight?(console.error("Use of deprecated style rowHeight. It is renamed to minCellHeight."),L.minCellHeight||(L.minCellHeight=L.rowHeight)):L.columnWidth&&(console.error("Use of deprecated style columnWidth. It is renamed to cellWidth."),L.cellWidth||(L.cellWidth=L.columnWidth))}},260:function(n,i,m){Object.defineProperty(i,"__esModule",{value:!0}),i.Column=i.Cell=i.Row=i.Table=void 0;var S=m(796),L=m(172),M=m(420),k=function(){function g(z,o){this.pageNumber=1,this.pageCount=1,this.id=z.id,this.settings=z.settings,this.styles=z.styles,this.hooks=z.hooks,this.columns=o.columns,this.head=o.head,this.body=o.body,this.foot=o.foot}return g.prototype.getHeadHeight=function(z){return this.head.reduce(function(o,t){return o+t.getMaxCellHeight(z)},0)},g.prototype.getFootHeight=function(z){return this.foot.reduce(function(o,t){return o+t.getMaxCellHeight(z)},0)},g.prototype.allRows=function(){return this.head.concat(this.body).concat(this.foot)},g.prototype.callCellHooks=function(z,o,t,p,C,f){for(var h=0,y=o;h<y.length;h++){var w=y[h],v=new L.CellHookData(z,this,t,p,C,f),d=w(v)===!1;if(t.text=Array.isArray(t.text)?t.text:[t.text],d)return!1}return!0},g.prototype.callEndPageHooks=function(z,o){z.applyStyles(z.userStyles);for(var t=0,p=this.hooks.didDrawPage;t<p.length;t++){var C=p[t];C(new L.HookData(z,this,o))}},g.prototype.callWillDrawPageHooks=function(z,o){for(var t=0,p=this.hooks.willDrawPage;t<p.length;t++){var C=p[t];C(new L.HookData(z,this,o))}},g.prototype.getWidth=function(z){if(typeof this.settings.tableWidth=="number")return this.settings.tableWidth;if(this.settings.tableWidth==="wrap"){var o=this.columns.reduce(function(p,C){return p+C.wrappedWidth},0);return o}else{var t=this.settings.margin;return z-t.left-t.right}},g}();i.Table=k;var r=function(){function g(z,o,t,p,C){C===void 0&&(C=!1),this.height=0,this.raw=z,z instanceof S.HtmlRowInput&&(this.raw=z._element,this.element=z._element),this.index=o,this.section=t,this.cells=p,this.spansMultiplePages=C}return g.prototype.getMaxCellHeight=function(z){var o=this;return z.reduce(function(t,p){var C;return Math.max(t,((C=o.cells[p.index])===null||C===void 0?void 0:C.height)||0)},0)},g.prototype.hasRowSpan=function(z){var o=this;return z.filter(function(t){var p=o.cells[t.index];return p?p.rowSpan>1:!1}).length>0},g.prototype.canEntireRowFit=function(z,o){return this.getMaxCellHeight(o)<=z},g.prototype.getMinimumRowHeight=function(z,o){var t=this;return z.reduce(function(p,C){var f=t.cells[C.index];if(!f)return 0;var h=o.getLineHeight(f.styles.fontSize),y=f.padding("vertical"),w=y+h;return w>p?w:p},0)},g}();i.Row=r;var A=function(){function g(z,o,t){var p,C;this.contentHeight=0,this.contentWidth=0,this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.height=0,this.x=0,this.y=0,this.styles=o,this.section=t,this.raw=z;var f=z;z!=null&&typeof z=="object"&&!Array.isArray(z)?(this.rowSpan=z.rowSpan||1,this.colSpan=z.colSpan||1,f=(C=(p=z.content)!==null&&p!==void 0?p:z.title)!==null&&C!==void 0?C:z,z._element&&(this.raw=z._element)):(this.rowSpan=1,this.colSpan=1);var h=f!=null?""+f:"",y=/\r\n|\r|\n/g;this.text=h.split(y)}return g.prototype.getTextPos=function(){var z;if(this.styles.valign==="top")z=this.y+this.padding("top");else if(this.styles.valign==="bottom")z=this.y+this.height-this.padding("bottom");else{var o=this.height-this.padding("vertical");z=this.y+o/2+this.padding("top")}var t;if(this.styles.halign==="right")t=this.x+this.width-this.padding("right");else if(this.styles.halign==="center"){var p=this.width-this.padding("horizontal");t=this.x+p/2+this.padding("left")}else t=this.x+this.padding("left");return{x:t,y:z}},g.prototype.getContentHeight=function(z,o){o===void 0&&(o=1.15);var t=Array.isArray(this.text)?this.text.length:1,p=this.styles.fontSize/z*o,C=t*p+this.padding("vertical");return Math.max(C,this.styles.minCellHeight)},g.prototype.padding=function(z){var o=(0,M.parseSpacing)(this.styles.cellPadding,0);return z==="vertical"?o.top+o.bottom:z==="horizontal"?o.left+o.right:o[z]},g}();i.Cell=A;var b=function(){function g(z,o,t){this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.dataKey=z,this.raw=o,this.index=t}return g.prototype.getMaxCustomCellWidth=function(z){for(var o=0,t=0,p=z.allRows();t<p.length;t++){var C=p[t],f=C.cells[this.index];f&&typeof f.styles.cellWidth=="number"&&(o=Math.max(o,f.styles.cellWidth))}return o},g}();i.Column=b},356:function(n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.assign=void 0;function m(S,L,M,k,r){if(S==null)throw new TypeError("Cannot convert undefined or null to object");for(var A=Object(S),b=1;b<arguments.length;b++){var g=arguments[b];if(g!=null)for(var z in g)Object.prototype.hasOwnProperty.call(g,z)&&(A[z]=g[z])}return A}i.assign=m},972:function(n,i,m){Object.defineProperty(i,"__esModule",{value:!0}),i.createTable=void 0;var S=m(744),L=m(260),M=m(324),k=m(796),r=m(356);function A(C,f){var h=new S.DocHandler(C),y=b(f,h.scaleFactor()),w=new L.Table(f,y);return(0,M.calculateWidths)(h,w),h.applyStyles(h.userStyles),w}i.createTable=A;function b(C,f){var h=C.content,y=t(h.columns);if(h.head.length===0){var w=z(y,"head");w&&h.head.push(w)}if(h.foot.length===0){var w=z(y,"foot");w&&h.foot.push(w)}var v=C.settings.theme,d=C.styles;return{columns:y,head:g("head",h.head,y,d,v,f),body:g("body",h.body,y,d,v,f),foot:g("foot",h.foot,y,d,v,f)}}function g(C,f,h,y,w,v){var d={},T=f.map(function(R,O){for(var x=0,u={},P=0,N=0,H=0,D=h;H<D.length;H++){var E=D[H];if(d[E.index]==null||d[E.index].left===0)if(N===0){var B=void 0;Array.isArray(R)?B=R[E.index-P-x]:B=R[E.dataKey];var U={};typeof B=="object"&&!Array.isArray(B)&&(U=B?.styles||{});var W=p(C,E,O,w,y,v,U),I=new L.Cell(B,W,C);u[E.dataKey]=I,u[E.index]=I,N=I.colSpan-1,d[E.index]={left:I.rowSpan-1,times:N}}else N--,P++;else d[E.index].left--,N=d[E.index].times,x++}return new L.Row(R,O,C,u)});return T}function z(C,f){var h={};return C.forEach(function(y){if(y.raw!=null){var w=o(f,y.raw);w!=null&&(h[y.dataKey]=w)}}),Object.keys(h).length>0?h:null}function o(C,f){if(C==="head"){if(typeof f=="object")return f.header||f.title||null;if(typeof f=="string"||typeof f=="number")return f}else if(C==="foot"&&typeof f=="object")return f.footer;return null}function t(C){return C.map(function(f,h){var y,w,v;return typeof f=="object"?v=(w=(y=f.dataKey)!==null&&y!==void 0?y:f.key)!==null&&w!==void 0?w:h:v=h,new L.Column(v,f,h)})}function p(C,f,h,y,w,v,d){var T=(0,k.getTheme)(y),R;C==="head"?R=w.headStyles:C==="body"?R=w.bodyStyles:C==="foot"&&(R=w.footStyles);var O=(0,r.assign)({},T.table,T[C],w.styles,R),x=w.columnStyles[f.dataKey]||w.columnStyles[f.index]||{},u=C==="body"?x:{},P=C==="body"&&h%2===0?(0,r.assign)({},T.alternateRow,w.alternateRowStyles):{},N=(0,k.defaultStyles)(v),H=(0,r.assign)({},N,O,P,u);return(0,r.assign)(H,d)}},664:function(n,i,m){Object.defineProperty(i,"__esModule",{value:!0}),i.addPage=i.drawTable=void 0;var S=m(420),L=m(260),M=m(744),k=m(356),r=m(136),A=m(224);function b(x,u){var P=u.settings,N=P.startY,H=P.margin,D={x:H.left,y:N},E=u.getHeadHeight(u.columns)+u.getFootHeight(u.columns),B=N+H.bottom+E;if(P.pageBreak==="avoid"){var U=u.body,W=U.reduce(function(Z,p2){return Z+p2.height},0);B+=W}var I=new M.DocHandler(x);(P.pageBreak==="always"||P.startY!=null&&B>I.pageSize().height)&&(O(I),D.y=H.top),u.callWillDrawPageHooks(I,D);var J=(0,k.assign)({},D);u.startPageNumber=I.pageNumber(),P.horizontalPageBreak?g(I,u,J,D):(I.applyStyles(I.userStyles),(P.showHead==="firstPage"||P.showHead==="everyPage")&&u.head.forEach(function(Z){return w(I,u,Z,D,u.columns)}),I.applyStyles(I.userStyles),u.body.forEach(function(Z,p2){var k2=p2===u.body.length-1;y(I,u,Z,k2,J,D,u.columns)}),I.applyStyles(I.userStyles),(P.showFoot==="lastPage"||P.showFoot==="everyPage")&&u.foot.forEach(function(Z){return w(I,u,Z,D,u.columns)})),(0,S.addTableBorder)(I,u,J,D),u.callEndPageHooks(I,D),u.finalY=D.y,x.lastAutoTable=u,x.previousAutoTable=u,x.autoTable&&(x.autoTable.previous=u),I.applyStyles(I.userStyles)}i.drawTable=b;function g(x,u,P,N){var H=(0,A.calculateAllColumnsCanFitInPage)(x,u),D=u.settings;if(D.horizontalPageBreakBehaviour==="afterAllRows")H.forEach(function(W,I){x.applyStyles(x.userStyles),I>0?R(x,u,P,N,W.columns,!0):z(x,u,N,W.columns),o(x,u,P,N,W.columns),p(x,u,N,W.columns)});else for(var E=-1,B=H[0],U=function(){var W=E;if(B){x.applyStyles(x.userStyles);var I=B.columns;E>=0?R(x,u,P,N,I,!0):z(x,u,N,I),W=t(x,u,E+1,N,I),p(x,u,N,I)}var J=W-E;H.slice(1).forEach(function(Z){x.applyStyles(x.userStyles),R(x,u,P,N,Z.columns,!0),t(x,u,E+1,N,Z.columns,J),p(x,u,N,Z.columns)}),E=W};E<u.body.length-1;)U()}function z(x,u,P,N){var H=u.settings;x.applyStyles(x.userStyles),(H.showHead==="firstPage"||H.showHead==="everyPage")&&u.head.forEach(function(D){return w(x,u,D,P,N)})}function o(x,u,P,N,H){x.applyStyles(x.userStyles),u.body.forEach(function(D,E){var B=E===u.body.length-1;y(x,u,D,B,P,N,H)})}function t(x,u,P,N,H,D){x.applyStyles(x.userStyles),D=D??u.body.length;var E=Math.min(P+D,u.body.length),B=-1;return u.body.slice(P,E).forEach(function(U,W){var I=P+W===u.body.length-1,J=T(x,u,I,N);U.canEntireRowFit(J,H)&&(w(x,u,U,N,H),B=P+W)}),B}function p(x,u,P,N){var H=u.settings;x.applyStyles(x.userStyles),(H.showFoot==="lastPage"||H.showFoot==="everyPage")&&u.foot.forEach(function(D){return w(x,u,D,P,N)})}function C(x,u,P){var N=P.getLineHeight(x.styles.fontSize),H=x.padding("vertical"),D=Math.floor((u-H)/N);return Math.max(0,D)}function f(x,u,P,N){var H={};x.spansMultiplePages=!0,x.height=0;for(var D=0,E=0,B=P.columns;E<B.length;E++){var U=B[E],W=x.cells[U.index];if(W){Array.isArray(W.text)||(W.text=[W.text]);var I=new L.Cell(W.raw,W.styles,W.section);I=(0,k.assign)(I,W),I.text=[];var J=C(W,u,N);W.text.length>J&&(I.text=W.text.splice(J,W.text.length));var Z=N.scaleFactor(),p2=N.getLineHeightFactor();W.contentHeight=W.getContentHeight(Z,p2),W.contentHeight>=u&&(W.contentHeight=u,I.styles.minCellHeight-=u),W.contentHeight>x.height&&(x.height=W.contentHeight),I.contentHeight=I.getContentHeight(Z,p2),I.contentHeight>D&&(D=I.contentHeight),H[U.index]=I}}var k2=new L.Row(x.raw,-1,x.section,H,!0);k2.height=D;for(var i1=0,q1=P.columns;i1<q1.length;i1++){var U=q1[i1],I=k2.cells[U.index];I&&(I.height=k2.height);var W=x.cells[U.index];W&&(W.height=x.height)}return k2}function h(x,u,P,N){var H=x.pageSize().height,D=N.settings.margin,E=D.top+D.bottom,B=H-E;u.section==="body"&&(B-=N.getHeadHeight(N.columns)+N.getFootHeight(N.columns));var U=u.getMinimumRowHeight(N.columns,x),W=U<P;if(U>B)return console.error("Will not be able to print row ".concat(u.index," correctly since it's minimum height is larger than page height")),!0;if(!W)return!1;var I=u.hasRowSpan(N.columns),J=u.getMaxCellHeight(N.columns)>B;return J?(I&&console.error("The content of row ".concat(u.index," will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.")),!0):!(I||N.settings.rowPageBreak==="avoid")}function y(x,u,P,N,H,D,E){var B=T(x,u,N,D);if(P.canEntireRowFit(B,E))w(x,u,P,D,E);else if(h(x,P,B,u)){var U=f(P,B,u,x);w(x,u,P,D,E),R(x,u,H,D,E),y(x,u,U,N,H,D,E)}else R(x,u,H,D,E),y(x,u,P,N,H,D,E)}function w(x,u,P,N,H){N.x=u.settings.margin.left;for(var D=0,E=H;D<E.length;D++){var B=E[D],U=P.cells[B.index];if(!U){N.x+=B.width;continue}x.applyStyles(U.styles),U.x=N.x,U.y=N.y;var W=u.callCellHooks(x,u.hooks.willDrawCell,U,P,B,N);if(W===!1){N.x+=B.width;continue}v(x,U,N);var I=U.getTextPos();(0,r.default)(U.text,I.x,I.y,{halign:U.styles.halign,valign:U.styles.valign,maxWidth:Math.ceil(U.width-U.padding("left")-U.padding("right"))},x.getDocument()),u.callCellHooks(x,u.hooks.didDrawCell,U,P,B,N),N.x+=B.width}N.y+=P.height}function v(x,u,P){var N=u.styles;if(x.getDocument().setFillColor(x.getDocument().getFillColor()),typeof N.lineWidth=="number"){var H=(0,S.getFillStyle)(N.lineWidth,N.fillColor);H&&x.rect(u.x,P.y,u.width,u.height,H)}else typeof N.lineWidth=="object"&&(N.fillColor&&x.rect(u.x,P.y,u.width,u.height,"F"),d(x,u,P,N.lineWidth))}function d(x,u,P,N){var H,D,E,B;N.top&&(H=P.x,D=P.y,E=P.x+u.width,B=P.y,N.right&&(E+=.5*N.right),N.left&&(H-=.5*N.left),U(N.top,H,D,E,B)),N.bottom&&(H=P.x,D=P.y+u.height,E=P.x+u.width,B=P.y+u.height,N.right&&(E+=.5*N.right),N.left&&(H-=.5*N.left),U(N.bottom,H,D,E,B)),N.left&&(H=P.x,D=P.y,E=P.x,B=P.y+u.height,N.top&&(D-=.5*N.top),N.bottom&&(B+=.5*N.bottom),U(N.left,H,D,E,B)),N.right&&(H=P.x+u.width,D=P.y,E=P.x+u.width,B=P.y+u.height,N.top&&(D-=.5*N.top),N.bottom&&(B+=.5*N.bottom),U(N.right,H,D,E,B));function U(W,I,J,Z,p2){x.getDocument().setLineWidth(W),x.getDocument().line(I,J,Z,p2,"S")}}function T(x,u,P,N){var H=u.settings.margin.bottom,D=u.settings.showFoot;return(D==="everyPage"||D==="lastPage"&&P)&&(H+=u.getFootHeight(u.columns)),x.pageSize().height-N.y-H}function R(x,u,P,N,H,D){H===void 0&&(H=[]),D===void 0&&(D=!1),x.applyStyles(x.userStyles),u.settings.showFoot==="everyPage"&&!D&&u.foot.forEach(function(B){return w(x,u,B,N,H)}),u.callEndPageHooks(x,N);var E=u.settings.margin;(0,S.addTableBorder)(x,u,P,N),O(x),u.pageNumber++,u.pageCount++,N.x=E.left,N.y=E.top,P.y=E.top,u.callWillDrawPageHooks(x,N),u.settings.showHead==="everyPage"&&(u.head.forEach(function(B){return w(x,u,B,N,H)}),x.applyStyles(x.userStyles))}i.addPage=R;function O(x){var u=x.pageNumber();x.setPage(u+1);var P=x.pageNumber();return P===u?(x.addPage(),!0):!1}},224:function(n,i,m){Object.defineProperty(i,"__esModule",{value:!0}),i.calculateAllColumnsCanFitInPage=void 0;var S=m(420);function L(k,r,A){var b;A===void 0&&(A={});var g=(0,S.getPageAvailableWidth)(k,r),z=new Map,o=[],t=[],p=[];r.settings.horizontalPageBreakRepeat,Array.isArray(r.settings.horizontalPageBreakRepeat)?p=r.settings.horizontalPageBreakRepeat:(typeof r.settings.horizontalPageBreakRepeat=="string"||typeof r.settings.horizontalPageBreakRepeat=="number")&&(p=[r.settings.horizontalPageBreakRepeat]),p.forEach(function(y){var w=r.columns.find(function(v){return v.dataKey===y||v.index===y});w&&!z.has(w.index)&&(z.set(w.index,!0),o.push(w.index),t.push(r.columns[w.index]),g-=w.wrappedWidth)});for(var C=!0,f=(b=A?.start)!==null&&b!==void 0?b:0;f<r.columns.length;){if(z.has(f)){f++;continue}var h=r.columns[f].wrappedWidth;if(C||g>=h)C=!1,o.push(f),t.push(r.columns[f]),g-=h;else break;f++}return{colIndexes:o,columns:t,lastIndex:f-1}}function M(k,r){for(var A=[],b=0;b<r.columns.length;b++){var g=L(k,r,{start:b});g.columns.length&&(A.push(g),b=g.lastIndex)}return A}i.calculateAllColumnsCanFitInPage=M},324:function(n,i,m){Object.defineProperty(i,"__esModule",{value:!0}),i.ellipsize=i.resizeColumns=i.calculateWidths=void 0;var S=m(420);function L(o,t){M(o,t);var p=[],C=0;t.columns.forEach(function(h){var y=h.getMaxCustomCellWidth(t);y?h.width=y:(h.width=h.wrappedWidth,p.push(h)),C+=h.width});var f=t.getWidth(o.pageSize().width)-C;f&&(f=k(p,f,function(h){return Math.max(h.minReadableWidth,h.minWidth)})),f&&(f=k(p,f,function(h){return h.minWidth})),f=Math.abs(f),!t.settings.horizontalPageBreak&&f>.1/o.scaleFactor()&&(f=f<1?f:Math.round(f),console.warn("Of the table content, ".concat(f," units width could not fit page"))),A(t),b(t,o),r(t)}i.calculateWidths=L;function M(o,t){var p=o.scaleFactor(),C=t.settings.horizontalPageBreak,f=(0,S.getPageAvailableWidth)(o,t);t.allRows().forEach(function(h){for(var y=0,w=t.columns;y<w.length;y++){var v=w[y],d=h.cells[v.index];if(d){var T=t.hooks.didParseCell;t.callCellHooks(o,T,d,h,v,null);var R=d.padding("horizontal");d.contentWidth=(0,S.getStringWidth)(d.text,d.styles,o)+R;var O=(0,S.getStringWidth)(d.text.join(" ").split(/[^\S\u00A0]+/),d.styles,o);if(d.minReadableWidth=O+d.padding("horizontal"),typeof d.styles.cellWidth=="number")d.minWidth=d.styles.cellWidth,d.wrappedWidth=d.styles.cellWidth;else if(d.styles.cellWidth==="wrap"||C===!0)d.contentWidth>f?(d.minWidth=f,d.wrappedWidth=f):(d.minWidth=d.contentWidth,d.wrappedWidth=d.contentWidth);else{var x=10/p;d.minWidth=d.styles.minCellWidth||x,d.wrappedWidth=d.contentWidth,d.minWidth>d.wrappedWidth&&(d.wrappedWidth=d.minWidth)}}}}),t.allRows().forEach(function(h){for(var y=0,w=t.columns;y<w.length;y++){var v=w[y],d=h.cells[v.index];if(d&&d.colSpan===1)v.wrappedWidth=Math.max(v.wrappedWidth,d.wrappedWidth),v.minWidth=Math.max(v.minWidth,d.minWidth),v.minReadableWidth=Math.max(v.minReadableWidth,d.minReadableWidth);else{var T=t.styles.columnStyles[v.dataKey]||t.styles.columnStyles[v.index]||{},R=T.cellWidth||T.minCellWidth;R&&typeof R=="number"&&(v.minWidth=R,v.wrappedWidth=R)}d&&(d.colSpan>1&&!v.minWidth&&(v.minWidth=d.minWidth),d.colSpan>1&&!v.wrappedWidth&&(v.wrappedWidth=d.minWidth))}})}function k(o,t,p){for(var C=t,f=o.reduce(function(x,u){return x+u.wrappedWidth},0),h=0;h<o.length;h++){var y=o[h],w=y.wrappedWidth/f,v=C*w,d=y.width+v,T=p(y),R=d<T?T:d;t-=R-y.width,y.width=R}if(t=Math.round(t*1e10)/1e10,t){var O=o.filter(function(x){return t<0?x.width>p(x):!0});O.length&&(t=k(O,t,p))}return t}i.resizeColumns=k;function r(o){for(var t={},p=1,C=o.allRows(),f=0;f<C.length;f++)for(var h=C[f],y=0,w=o.columns;y<w.length;y++){var v=w[y],d=t[v.index];if(p>1)p--,delete h.cells[v.index];else if(d)d.cell.height+=h.height,p=d.cell.colSpan,delete h.cells[v.index],d.left--,d.left<=1&&delete t[v.index];else{var T=h.cells[v.index];if(!T)continue;if(T.height=h.height,T.rowSpan>1){var R=C.length-f,O=T.rowSpan>R?R:T.rowSpan;t[v.index]={cell:T,left:O,row:h}}}}}function A(o){for(var t=o.allRows(),p=0;p<t.length;p++)for(var C=t[p],f=null,h=0,y=0,w=0;w<o.columns.length;w++){var v=o.columns[w];if(y-=1,y>1&&o.columns[w+1])h+=v.width,delete C.cells[v.index];else if(f){var d=f;delete C.cells[v.index],f=null,d.width=v.width+h}else{var d=C.cells[v.index];if(!d)continue;if(y=d.colSpan,h=0,d.colSpan>1){f=d,h+=v.width;continue}d.width=v.width+h}}}function b(o,t){for(var p={count:0,height:0},C=0,f=o.allRows();C<f.length;C++){for(var h=f[C],y=0,w=o.columns;y<w.length;y++){var v=w[y],d=h.cells[v.index];if(d){t.applyStyles(d.styles,!0);var T=d.width-d.padding("horizontal");if(d.styles.overflow==="linebreak")d.text=t.splitTextToSize(d.text,T+1/t.scaleFactor(),{fontSize:d.styles.fontSize});else if(d.styles.overflow==="ellipsize")d.text=g(d.text,T,d.styles,t,"...");else if(d.styles.overflow==="hidden")d.text=g(d.text,T,d.styles,t,"");else if(typeof d.styles.overflow=="function"){var R=d.styles.overflow(d.text,T);typeof R=="string"?d.text=[R]:d.text=R}d.contentHeight=d.getContentHeight(t.scaleFactor(),t.getLineHeightFactor());var O=d.contentHeight/d.rowSpan;d.rowSpan>1&&p.count*p.height<O*d.rowSpan?p={height:O,count:d.rowSpan}:p&&p.count>0&&p.height>O&&(O=p.height),O>h.height&&(h.height=O)}}p.count--}}function g(o,t,p,C,f){return o.map(function(h){return z(h,t,p,C,f)})}i.ellipsize=g;function z(o,t,p,C,f){var h=1e4*C.scaleFactor();if(t=Math.ceil(t*h)/h,t>=(0,S.getStringWidth)(o,p,C))return o;for(;t<(0,S.getStringWidth)(o+f,p,C)&&!(o.length<=1);)o=o.substring(0,o.length-1);return o.trim()+f}},964:function(n){if(typeof c>"u"){var i=new Error("Cannot find module 'undefined'");throw i.code="MODULE_NOT_FOUND",i}n.exports=c}},l={};function e(n){var i=l[n];if(i!==void 0)return i.exports;var m=l[n]={exports:{}};return s[n].call(m.exports,m,m.exports,e),m.exports}var a={};return function(){var n=a;Object.defineProperty(n,"__esModule",{value:!0}),n.Cell=n.Column=n.Row=n.Table=n.CellHookData=n.__drawTable=n.__createTable=n.applyPlugin=void 0;var i=e(340),m=e(776),S=e(664),L=e(972),M=e(260);Object.defineProperty(n,"Table",{enumerable:!0,get:function(){return M.Table}});var k=e(172);Object.defineProperty(n,"CellHookData",{enumerable:!0,get:function(){return k.CellHookData}});var r=e(260);Object.defineProperty(n,"Cell",{enumerable:!0,get:function(){return r.Cell}}),Object.defineProperty(n,"Column",{enumerable:!0,get:function(){return r.Column}}),Object.defineProperty(n,"Row",{enumerable:!0,get:function(){return r.Row}});function A(t){(0,i.default)(t)}n.applyPlugin=A;function b(t,p){var C=(0,m.parseInput)(t,p),f=(0,L.createTable)(t,C);(0,S.drawTable)(t,f)}function g(t,p){var C=(0,m.parseInput)(t,p);return(0,L.createTable)(t,C)}n.__createTable=g;function z(t,p){(0,S.drawTable)(t,p)}n.__drawTable=z;try{var o=e(964);o.jsPDF&&(o=o.jsPDF),A(o)}catch{}n.default=b}(),a}()})});var D4={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},h3=D4;var g3={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]};var x3=()=>{},T1={},V3={},G3=null,Y3={mark:x3,measure:x3};try{typeof window<"u"&&(T1=window),typeof document<"u"&&(V3=document),typeof MutationObserver<"u"&&(G3=MutationObserver),typeof performance<"u"&&(Y3=performance)}catch{}var{userAgent:N3=""}=T1.navigator||{},C2=T1,Y=V3,b3=G3,Q2=Y3,G6=!!C2.document,L2=!!Y.documentElement&&!!Y.head&&typeof Y.addEventListener=="function"&&typeof Y.createElement=="function",X3=~N3.indexOf("MSIE")||~N3.indexOf("Trident/"),X="classic",K3="duotone",l2="sharp",s2="sharp-duotone",H4=[X,K3,l2,s2],_4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},y3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},E4=["kit"],R4=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,B4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,I4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},W4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},U4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},O4={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},j4={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},q4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},$3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},V4=["solid","regular","light","thin","duotone","brands"],Q3=[1,2,3,4,5,6,7,8,9,10],G4=Q3.concat([11,12,13,14,15,16,17,18,19,20]),W2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Y4=[...Object.keys(O4),...V4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",W2.GROUP,W2.SWAP_OPACITY,W2.PRIMARY,W2.SECONDARY].concat(Q3.map(c=>"".concat(c,"x"))).concat(G4.map(c=>"w-".concat(c))),X4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},K4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},$4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},v3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},m2="___FONT_AWESOME___",u1=16,J3="fa",Z3="svg-inline--fa",v2="data-fa-i2svg",d1="data-fa-pseudo-element",Q4="data-fa-pseudo-element-pending",F1="data-prefix",D1="data-icon",S3="fontawesome-i2svg",J4="async",Z4=["HTML","HEAD","STYLE","SCRIPT"],c4=(()=>{try{return!0}catch{return!1}})(),l4=[X,l2,s2];function G2(c){return new Proxy(c,{get(s,l){return l in s?s[l]:s[X]}})}var s4=F({},$3);s4[X]=F(F(F({},$3[X]),y3.kit),y3["kit-duotone"]);var b2=G2(s4),C1=F({},q4);C1[X]=F(F(F({},C1[X]),v3.kit),v3["kit-duotone"]);var q2=G2(C1),h1=F({},j4);h1[X]=F(F({},h1[X]),$4.kit);var y2=G2(h1),g1=F({},U4);g1[X]=F(F({},g1[X]),K4.kit);var c0=G2(g1),l0=R4,e4="fa-layers-text",s0=B4,e0=F({},_4),Y6=G2(e0),a0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],m1=W2,T2=new Set;Object.keys(q2[X]).map(T2.add.bind(T2));Object.keys(q2[l2]).map(T2.add.bind(T2));Object.keys(q2[s2]).map(T2.add.bind(T2));var n0=[...E4,...Y4],O2=C2.FontAwesomeConfig||{};function i0(c){var s=Y.querySelector("script["+c+"]");if(s)return s.getAttribute(c)}function o0(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}Y&&typeof Y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(s=>{let[l,e]=s,a=o0(i0(l));a!=null&&(O2[e]=a)});var a4={styleDefault:"solid",familyDefault:"classic",cssPrefix:J3,replacementClass:Z3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};O2.familyPrefix&&(O2.cssPrefix=O2.familyPrefix);var F2=F(F({},a4),O2);F2.autoReplaceSvg||(F2.observeMutations=!1);var _={};Object.keys(a4).forEach(c=>{Object.defineProperty(_,c,{enumerable:!0,set:function(s){F2[c]=s,j2.forEach(l=>l(_))},get:function(){return F2[c]}})});Object.defineProperty(_,"familyPrefix",{enumerable:!0,set:function(c){F2.cssPrefix=c,j2.forEach(s=>s(_))},get:function(){return F2.cssPrefix}});C2.FontAwesomeConfig=_;var j2=[];function t0(c){return j2.push(c),()=>{j2.splice(j2.indexOf(c),1)}}var u2=u1,o2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function r0(c){if(!c||!L2)return;let s=Y.createElement("style");s.setAttribute("type","text/css"),s.innerHTML=c;let l=Y.head.childNodes,e=null;for(let a=l.length-1;a>-1;a--){let n=l[a],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=n)}return Y.head.insertBefore(s,e),c}var f0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function V2(){let c=12,s="";for(;c-- >0;)s+=f0[Math.random()*62|0];return s}function D2(c){let s=[];for(let l=(c||[]).length>>>0;l--;)s[l]=c[l];return s}function H1(c){return c.classList?D2(c.classList):(c.getAttribute("class")||"").split(" ").filter(s=>s)}function n4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function m0(c){return Object.keys(c||{}).reduce((s,l)=>s+"".concat(l,'="').concat(n4(c[l]),'" '),"").trim()}function s1(c){return Object.keys(c||{}).reduce((s,l)=>s+"".concat(l,": ").concat(c[l].trim(),";"),"")}function _1(c){return c.size!==o2.size||c.x!==o2.x||c.y!==o2.y||c.rotate!==o2.rotate||c.flipX||c.flipY}function z0(c){let{transform:s,containerWidth:l,iconWidth:e}=c,a={transform:"translate(".concat(l/2," 256)")},n="translate(".concat(s.x*32,", ").concat(s.y*32,") "),i="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),m="rotate(".concat(s.rotate," 0 0)"),S={transform:"".concat(n," ").concat(i," ").concat(m)},L={transform:"translate(".concat(e/2*-1," -256)")};return{outer:a,inner:S,path:L}}function L0(c){let{transform:s,width:l=u1,height:e=u1,startCentered:a=!1}=c,n="";return a&&X3?n+="translate(".concat(s.x/u2-l/2,"em, ").concat(s.y/u2-e/2,"em) "):a?n+="translate(calc(-50% + ".concat(s.x/u2,"em), calc(-50% + ").concat(s.y/u2,"em)) "):n+="translate(".concat(s.x/u2,"em, ").concat(s.y/u2,"em) "),n+="scale(".concat(s.size/u2*(s.flipX?-1:1),", ").concat(s.size/u2*(s.flipY?-1:1),") "),n+="rotate(".concat(s.rotate,"deg) "),n}var p0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function i4(){let c=J3,s=Z3,l=_.cssPrefix,e=_.replacementClass,a=p0;if(l!==c||e!==s){let n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),m=new RegExp("\\.".concat(s),"g");a=a.replace(n,".".concat(l,"-")).replace(i,"--".concat(l,"-")).replace(m,".".concat(e))}return a}var w3=!1;function z1(){_.autoAddCss&&!w3&&(r0(i4()),w3=!0)}var M0={mixout(){return{dom:{css:i4,insertCss:z1}}},hooks(){return{beforeDOMElementCreation(){z1()},beforeI2svg(){z1()}}}},z2=C2||{};z2[m2]||(z2[m2]={});z2[m2].styles||(z2[m2].styles={});z2[m2].hooks||(z2[m2].hooks={});z2[m2].shims||(z2[m2].shims=[]);var t2=z2[m2],o4=[],t4=function(){Y.removeEventListener("DOMContentLoaded",t4),c1=1,o4.map(c=>c())},c1=!1;L2&&(c1=(Y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Y.readyState),c1||Y.addEventListener("DOMContentLoaded",t4));function u0(c){L2&&(c1?setTimeout(c,0):o4.push(c))}function Y2(c){let{tag:s,attributes:l={},children:e=[]}=c;return typeof c=="string"?n4(c):"<".concat(s," ").concat(m0(l),">").concat(e.map(Y2).join(""),"</").concat(s,">")}function k3(c,s,l){if(c&&c[s]&&c[s][l])return{prefix:s,iconName:l,icon:c[s][l]}}var d0=function(s,l){return function(e,a,n,i){return s.call(l,e,a,n,i)}},L1=function(s,l,e,a){var n=Object.keys(s),i=n.length,m=a!==void 0?d0(l,a):l,S,L,M;for(e===void 0?(S=1,M=s[n[0]]):(S=0,M=e);S<i;S++)L=n[S],M=m(M,s[L],L,s);return M};function C0(c){let s=[],l=0,e=c.length;for(;l<e;){let a=c.charCodeAt(l++);if(a>=55296&&a<=56319&&l<e){let n=c.charCodeAt(l++);(n&64512)==56320?s.push(((a&1023)<<10)+(n&1023)+65536):(s.push(a),l--)}else s.push(a)}return s}function x1(c){let s=C0(c);return s.length===1?s[0].toString(16):null}function h0(c,s){let l=c.length,e=c.charCodeAt(s),a;return e>=55296&&e<=56319&&l>s+1&&(a=c.charCodeAt(s+1),a>=56320&&a<=57343)?(e-55296)*1024+a-56320+65536:e}function A3(c){return Object.keys(c).reduce((s,l)=>{let e=c[l];return!!e.icon?s[e.iconName]=e.icon:s[l]=e,s},{})}function N1(c,s){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:e=!1}=l,a=A3(s);typeof t2.hooks.addPack=="function"&&!e?t2.hooks.addPack(c,A3(s)):t2.styles[c]=F(F({},t2.styles[c]||{}),a),c==="fas"&&N1("fa",s)}var{styles:N2,shims:g0}=t2,x0={[X]:Object.values(y2[X]),[l2]:Object.values(y2[l2]),[s2]:Object.values(y2[s2])},E1=null,r4={},f4={},m4={},z4={},L4={},N0={[X]:Object.keys(b2[X]),[l2]:Object.keys(b2[l2]),[s2]:Object.keys(b2[s2])};function b0(c){return~n0.indexOf(c)}function y0(c,s){let l=s.split("-"),e=l[0],a=l.slice(1).join("-");return e===c&&a!==""&&!b0(a)?a:null}var p4=()=>{let c=e=>L1(N2,(a,n,i)=>(a[i]=L1(n,e,{}),a),{});r4=c((e,a,n)=>(a[3]&&(e[a[3]]=n),a[2]&&a[2].filter(m=>typeof m=="number").forEach(m=>{e[m.toString(16)]=n}),e)),f4=c((e,a,n)=>(e[n]=n,a[2]&&a[2].filter(m=>typeof m=="string").forEach(m=>{e[m]=n}),e)),L4=c((e,a,n)=>{let i=a[2];return e[n]=n,i.forEach(m=>{e[m]=n}),e});let s="far"in N2||_.autoFetchSvg,l=L1(g0,(e,a)=>{let n=a[0],i=a[1],m=a[2];return i==="far"&&!s&&(i="fas"),typeof n=="string"&&(e.names[n]={prefix:i,iconName:m}),typeof n=="number"&&(e.unicodes[n.toString(16)]={prefix:i,iconName:m}),e},{names:{},unicodes:{}});m4=l.names,z4=l.unicodes,E1=e1(_.styleDefault,{family:_.familyDefault})};t0(c=>{E1=e1(c.styleDefault,{family:_.familyDefault})});p4();function R1(c,s){return(r4[c]||{})[s]}function v0(c,s){return(f4[c]||{})[s]}function d2(c,s){return(L4[c]||{})[s]}function M4(c){return m4[c]||{prefix:null,iconName:null}}function S0(c){let s=z4[c],l=R1("fas",c);return s||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function h2(){return E1}var B1=()=>({prefix:null,iconName:null,rest:[]});function e1(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:l=X}=s,e=b2[l][c],a=q2[l][c]||q2[l][e],n=c in t2.styles?c:null;return a||n||null}var w0={[X]:Object.keys(y2[X]),[l2]:Object.keys(y2[l2]),[s2]:Object.keys(y2[s2])};function a1(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:l=!1}=s,e={[X]:"".concat(_.cssPrefix,"-").concat(X),[l2]:"".concat(_.cssPrefix,"-").concat(l2),[s2]:"".concat(_.cssPrefix,"-").concat(s2)},a=null,n=X,i=H4.filter(S=>S!==K3);i.forEach(S=>{(c.includes(e[S])||c.some(L=>w0[S].includes(L)))&&(n=S)});let m=c.reduce((S,L)=>{let M=y0(_.cssPrefix,L);if(N2[L]?(L=x0[n].includes(L)?c0[n][L]:L,a=L,S.prefix=L):N0[n].indexOf(L)>-1?(a=L,S.prefix=e1(L,{family:n})):M?S.iconName=M:L!==_.replacementClass&&!i.some(k=>L===e[k])&&S.rest.push(L),!l&&S.prefix&&S.iconName){let k=a==="fa"?M4(S.iconName):{},r=d2(S.prefix,S.iconName);k.prefix&&(a=null),S.iconName=k.iconName||r||S.iconName,S.prefix=k.prefix||S.prefix,S.prefix==="far"&&!N2.far&&N2.fas&&!_.autoFetchSvg&&(S.prefix="fas")}return S},B1());return(c.includes("fa-brands")||c.includes("fab"))&&(m.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(m.prefix="fad"),!m.prefix&&n===l2&&(N2.fass||_.autoFetchSvg)&&(m.prefix="fass",m.iconName=d2(m.prefix,m.iconName)||m.iconName),!m.prefix&&n===s2&&(N2.fasds||_.autoFetchSvg)&&(m.prefix="fasds",m.iconName=d2(m.prefix,m.iconName)||m.iconName),(m.prefix==="fa"||a==="fa")&&(m.prefix=h2()||"fas"),m}var b1=class{constructor(){this.definitions={}}add(){for(var s=arguments.length,l=new Array(s),e=0;e<s;e++)l[e]=arguments[e];let a=l.reduce(this._pullDefinitions,{});Object.keys(a).forEach(n=>{this.definitions[n]=F(F({},this.definitions[n]||{}),a[n]),N1(n,a[n]);let i=y2[X][n];i&&N1(i,a[n]),p4()})}reset(){this.definitions={}}_pullDefinitions(s,l){let e=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(e).map(a=>{let{prefix:n,iconName:i,icon:m}=e[a],S=m[2];s[n]||(s[n]={}),S.length>0&&S.forEach(L=>{typeof L=="string"&&(s[n][L]=m)}),s[n][i]=m}),s}},P3=[],A2={},P2={},k0=Object.keys(P2);function A0(c,s){let{mixoutsTo:l}=s;return P3=c,A2={},Object.keys(P2).forEach(e=>{k0.indexOf(e)===-1&&delete P2[e]}),P3.forEach(e=>{let a=e.mixout?e.mixout():{};if(Object.keys(a).forEach(n=>{typeof a[n]=="function"&&(l[n]=a[n]),typeof a[n]=="object"&&Object.keys(a[n]).forEach(i=>{l[n]||(l[n]={}),l[n][i]=a[n][i]})}),e.hooks){let n=e.hooks();Object.keys(n).forEach(i=>{A2[i]||(A2[i]=[]),A2[i].push(n[i])})}e.provides&&e.provides(P2)}),l}function y1(c,s){for(var l=arguments.length,e=new Array(l>2?l-2:0),a=2;a<l;a++)e[a-2]=arguments[a];return(A2[c]||[]).forEach(i=>{s=i.apply(null,[s,...e])}),s}function S2(c){for(var s=arguments.length,l=new Array(s>1?s-1:0),e=1;e<s;e++)l[e-1]=arguments[e];(A2[c]||[]).forEach(n=>{n.apply(null,l)})}function g2(){let c=arguments[0],s=Array.prototype.slice.call(arguments,1);return P2[c]?P2[c].apply(null,s):void 0}function v1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:s}=c,l=c.prefix||h2();if(s)return s=d2(l,s)||s,k3(u4.definitions,l,s)||k3(t2.styles,l,s)}var u4=new b1,P0=()=>{_.autoReplaceSvg=!1,_.observeMutations=!1,S2("noAuto")},T0={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return L2?(S2("beforeI2svg",c),g2("pseudoElements2svg",c),g2("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:s}=c;_.autoReplaceSvg===!1&&(_.autoReplaceSvg=!0),_.observeMutations=!0,u0(()=>{D0({autoReplaceSvgRoot:s}),S2("watch",c)})}},F0={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:d2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let s=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],l=e1(c[0]);return{prefix:l,iconName:d2(l,s)||s}}if(typeof c=="string"&&(c.indexOf("".concat(_.cssPrefix,"-"))>-1||c.match(l0))){let s=a1(c.split(" "),{skipLookups:!0});return{prefix:s.prefix||h2(),iconName:d2(s.prefix,s.iconName)||s.iconName}}if(typeof c=="string"){let s=h2();return{prefix:s,iconName:d2(s,c)||c}}}},e2={noAuto:P0,config:_,dom:T0,parse:F0,library:u4,findIconDefinition:v1,toHtml:Y2},D0=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:s=Y}=c;(Object.keys(t2.styles).length>0||_.autoFetchSvg)&&L2&&_.autoReplaceSvg&&e2.dom.i2svg({node:s})};function n1(c,s){return Object.defineProperty(c,"abstract",{get:s}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(l=>Y2(l))}}),Object.defineProperty(c,"node",{get:function(){if(!L2)return;let l=Y.createElement("div");return l.innerHTML=c.html,l.children}}),c}function H0(c){let{children:s,main:l,mask:e,attributes:a,styles:n,transform:i}=c;if(_1(i)&&l.found&&!e.found){let{width:m,height:S}=l,L={x:m/S/2,y:.5};a.style=s1(K(F({},n),{"transform-origin":"".concat(L.x+i.x/16,"em ").concat(L.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:s}]}function _0(c){let{prefix:s,iconName:l,children:e,attributes:a,symbol:n}=c,i=n===!0?"".concat(s,"-").concat(_.cssPrefix,"-").concat(l):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:K(F({},a),{id:i}),children:e}]}]}function I1(c){let{icons:{main:s,mask:l},prefix:e,iconName:a,transform:n,symbol:i,title:m,maskId:S,titleId:L,extra:M,watchable:k=!1}=c,{width:r,height:A}=l.found?l:s,b=e==="fak",g=[_.replacementClass,a?"".concat(_.cssPrefix,"-").concat(a):""].filter(f=>M.classes.indexOf(f)===-1).filter(f=>f!==""||!!f).concat(M.classes).join(" "),z={children:[],attributes:K(F({},M.attributes),{"data-prefix":e,"data-icon":a,class:g,role:M.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(r," ").concat(A)})},o=b&&!~M.classes.indexOf("fa-fw")?{width:"".concat(r/A*16*.0625,"em")}:{};k&&(z.attributes[v2]=""),m&&(z.children.push({tag:"title",attributes:{id:z.attributes["aria-labelledby"]||"title-".concat(L||V2())},children:[m]}),delete z.attributes.title);let t=K(F({},z),{prefix:e,iconName:a,main:s,mask:l,maskId:S,transform:n,symbol:i,styles:F(F({},o),M.styles)}),{children:p,attributes:C}=l.found&&s.found?g2("generateAbstractMask",t)||{children:[],attributes:{}}:g2("generateAbstractIcon",t)||{children:[],attributes:{}};return t.children=p,t.attributes=C,i?_0(t):H0(t)}function T3(c){let{content:s,width:l,height:e,transform:a,title:n,extra:i,watchable:m=!1}=c,S=K(F(F({},i.attributes),n?{title:n}:{}),{class:i.classes.join(" ")});m&&(S[v2]="");let L=F({},i.styles);_1(a)&&(L.transform=L0({transform:a,startCentered:!0,width:l,height:e}),L["-webkit-transform"]=L.transform);let M=s1(L);M.length>0&&(S.style=M);let k=[];return k.push({tag:"span",attributes:S,children:[s]}),n&&k.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),k}function E0(c){let{content:s,title:l,extra:e}=c,a=K(F(F({},e.attributes),l?{title:l}:{}),{class:e.classes.join(" ")}),n=s1(e.styles);n.length>0&&(a.style=n);let i=[];return i.push({tag:"span",attributes:a,children:[s]}),l&&i.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),i}var{styles:p1}=t2;function S1(c){let s=c[0],l=c[1],[e]=c.slice(4),a=null;return Array.isArray(e)?a={tag:"g",attributes:{class:"".concat(_.cssPrefix,"-").concat(m1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(m1.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(m1.PRIMARY),fill:"currentColor",d:e[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:e}},{found:!0,width:s,height:l,icon:a}}var R0={found:!1,width:512,height:512};function B0(c,s){!c4&&!_.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(s,'" is missing.'))}function w1(c,s){let l=s;return s==="fa"&&_.styleDefault!==null&&(s=h2()),new Promise((e,a)=>{if(l==="fa"){let n=M4(c)||{};c=n.iconName||c,s=n.prefix||s}if(c&&s&&p1[s]&&p1[s][c]){let n=p1[s][c];return e(S1(n))}B0(c,s),e(K(F({},R0),{icon:_.showMissingIcons&&c?g2("missingIconAbstract")||{}:{}}))})}var F3=()=>{},k1=_.measurePerformance&&Q2&&Q2.mark&&Q2.measure?Q2:{mark:F3,measure:F3},U2='FA "6.6.0"',I0=c=>(k1.mark("".concat(U2," ").concat(c," begins")),()=>d4(c)),d4=c=>{k1.mark("".concat(U2," ").concat(c," ends")),k1.measure("".concat(U2," ").concat(c),"".concat(U2," ").concat(c," begins"),"".concat(U2," ").concat(c," ends"))},W1={begin:I0,end:d4},J2=()=>{};function D3(c){return typeof(c.getAttribute?c.getAttribute(v2):null)=="string"}function W0(c){let s=c.getAttribute?c.getAttribute(F1):null,l=c.getAttribute?c.getAttribute(D1):null;return s&&l}function U0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(_.replacementClass)}function O0(){return _.autoReplaceSvg===!0?Z2.replace:Z2[_.autoReplaceSvg]||Z2.replace}function j0(c){return Y.createElementNS("http://www.w3.org/2000/svg",c)}function q0(c){return Y.createElement(c)}function C4(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:l=c.tag==="svg"?j0:q0}=s;if(typeof c=="string")return Y.createTextNode(c);let e=l(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){e.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){e.appendChild(C4(n,{ceFn:l}))}),e}function V0(c){let s=" ".concat(c.outerHTML," ");return s="".concat(s,"Font Awesome fontawesome.com "),s}var Z2={replace:function(c){let s=c[0];if(s.parentNode)if(c[1].forEach(l=>{s.parentNode.insertBefore(C4(l),s)}),s.getAttribute(v2)===null&&_.keepOriginalSource){let l=Y.createComment(V0(s));s.parentNode.replaceChild(l,s)}else s.remove()},nest:function(c){let s=c[0],l=c[1];if(~H1(s).indexOf(_.replacementClass))return Z2.replace(c);let e=new RegExp("".concat(_.cssPrefix,"-.*"));if(delete l[0].attributes.id,l[0].attributes.class){let n=l[0].attributes.class.split(" ").reduce((i,m)=>(m===_.replacementClass||m.match(e)?i.toSvg.push(m):i.toNode.push(m),i),{toNode:[],toSvg:[]});l[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",n.toNode.join(" "))}let a=l.map(n=>Y2(n)).join(`
`);s.setAttribute(v2,""),s.innerHTML=a}};function H3(c){c()}function h4(c,s){let l=typeof s=="function"?s:J2;if(c.length===0)l();else{let e=H3;_.mutateApproach===J4&&(e=C2.requestAnimationFrame||H3),e(()=>{let a=O0(),n=W1.begin("mutate");c.map(a),n(),l()})}}var U1=!1;function g4(){U1=!0}function A1(){U1=!1}var l1=null;function _3(c){if(!b3||!_.observeMutations)return;let{treeCallback:s=J2,nodeCallback:l=J2,pseudoElementsCallback:e=J2,observeMutationsRoot:a=Y}=c;l1=new b3(n=>{if(U1)return;let i=h2();D2(n).forEach(m=>{if(m.type==="childList"&&m.addedNodes.length>0&&!D3(m.addedNodes[0])&&(_.searchPseudoElements&&e(m.target),s(m.target)),m.type==="attributes"&&m.target.parentNode&&_.searchPseudoElements&&e(m.target.parentNode),m.type==="attributes"&&D3(m.target)&&~a0.indexOf(m.attributeName))if(m.attributeName==="class"&&W0(m.target)){let{prefix:S,iconName:L}=a1(H1(m.target));m.target.setAttribute(F1,S||i),L&&m.target.setAttribute(D1,L)}else U0(m.target)&&l(m.target)})}),L2&&l1.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function G0(){l1&&l1.disconnect()}function Y0(c){let s=c.getAttribute("style"),l=[];return s&&(l=s.split(";").reduce((e,a)=>{let n=a.split(":"),i=n[0],m=n.slice(1);return i&&m.length>0&&(e[i]=m.join(":").trim()),e},{})),l}function X0(c){let s=c.getAttribute("data-prefix"),l=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",a=a1(H1(c));return a.prefix||(a.prefix=h2()),s&&l&&(a.prefix=s,a.iconName=l),a.iconName&&a.prefix||(a.prefix&&e.length>0&&(a.iconName=v0(a.prefix,c.innerText)||R1(a.prefix,x1(c.innerText))),!a.iconName&&_.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function K0(c){let s=D2(c.attributes).reduce((a,n)=>(a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a),{}),l=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return _.autoA11y&&(l?s["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(e||V2()):(s["aria-hidden"]="true",s.focusable="false")),s}function $0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:o2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function E3(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:l,prefix:e,rest:a}=X0(c),n=K0(c),i=y1("parseNodeAttributes",{},c),m=s.styleParser?Y0(c):[];return F({iconName:l,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:e,transform:o2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:m,attributes:n}},i)}var{styles:Q0}=t2;function x4(c){let s=_.autoReplaceSvg==="nest"?E3(c,{styleParser:!1}):E3(c);return~s.extra.classes.indexOf(e4)?g2("generateLayersText",c,s):g2("generateSvgReplacementMutation",c,s)}var r2=new Set;l4.map(c=>{r2.add("fa-".concat(c))});Object.keys(b2[X]).map(r2.add.bind(r2));Object.keys(b2[l2]).map(r2.add.bind(r2));Object.keys(b2[s2]).map(r2.add.bind(r2));r2=[...r2];function R3(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!L2)return Promise.resolve();let l=Y.documentElement.classList,e=M=>l.add("".concat(S3,"-").concat(M)),a=M=>l.remove("".concat(S3,"-").concat(M)),n=_.autoFetchSvg?r2:l4.map(M=>"fa-".concat(M)).concat(Object.keys(Q0));n.includes("fa")||n.push("fa");let i=[".".concat(e4,":not([").concat(v2,"])")].concat(n.map(M=>".".concat(M,":not([").concat(v2,"])"))).join(", ");if(i.length===0)return Promise.resolve();let m=[];try{m=D2(c.querySelectorAll(i))}catch{}if(m.length>0)e("pending"),a("complete");else return Promise.resolve();let S=W1.begin("onTree"),L=m.reduce((M,k)=>{try{let r=x4(k);r&&M.push(r)}catch(r){c4||r.name==="MissingIcon"&&console.error(r)}return M},[]);return new Promise((M,k)=>{Promise.all(L).then(r=>{h4(r,()=>{e("active"),e("complete"),a("pending"),typeof s=="function"&&s(),S(),M()})}).catch(r=>{S(),k(r)})})}function J0(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;x4(c).then(l=>{l&&h4([l],s)})}function Z0(c){return function(s){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(s||{}).icon?s:v1(s||{}),{mask:a}=l;return a&&(a=(a||{}).icon?a:v1(a||{})),c(e,K(F({},l),{mask:a}))}}var c6=function(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=o2,symbol:e=!1,mask:a=null,maskId:n=null,title:i=null,titleId:m=null,classes:S=[],attributes:L={},styles:M={}}=s;if(!c)return;let{prefix:k,iconName:r,icon:A}=c;return n1(F({type:"icon"},c),()=>(S2("beforeDOMElementCreation",{iconDefinition:c,params:s}),_.autoA11y&&(i?L["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(m||V2()):(L["aria-hidden"]="true",L.focusable="false")),I1({icons:{main:S1(A),mask:a?S1(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:r,transform:F(F({},o2),l),symbol:e,title:i,maskId:n,titleId:m,extra:{attributes:L,styles:M,classes:S}})))},l6={mixout(){return{icon:Z0(c6)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=R3,c.nodeCallback=J0,c}}},provides(c){c.i2svg=function(s){let{node:l=Y,callback:e=()=>{}}=s;return R3(l,e)},c.generateSvgReplacementMutation=function(s,l){let{iconName:e,title:a,titleId:n,prefix:i,transform:m,symbol:S,mask:L,maskId:M,extra:k}=l;return new Promise((r,A)=>{Promise.all([w1(e,i),L.iconName?w1(L.iconName,L.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(b=>{let[g,z]=b;r([s,I1({icons:{main:g,mask:z},prefix:i,iconName:e,transform:m,symbol:S,maskId:M,title:a,titleId:n,extra:k,watchable:!0})])}).catch(A)})},c.generateAbstractIcon=function(s){let{children:l,attributes:e,main:a,transform:n,styles:i}=s,m=s1(i);m.length>0&&(e.style=m);let S;return _1(n)&&(S=g2("generateAbstractTransformGrouping",{main:a,transform:n,containerWidth:a.width,iconWidth:a.width})),l.push(S||a.icon),{children:l,attributes:e}}}},s6={mixout(){return{layer(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:l=[]}=s;return n1({type:"layer"},()=>{S2("beforeDOMElementCreation",{assembler:c,params:s});let e=[];return c(a=>{Array.isArray(a)?a.map(n=>{e=e.concat(n.abstract)}):e=e.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(_.cssPrefix,"-layers"),...l].join(" ")},children:e}]})}}}},e6={mixout(){return{counter(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:l=null,classes:e=[],attributes:a={},styles:n={}}=s;return n1({type:"counter",content:c},()=>(S2("beforeDOMElementCreation",{content:c,params:s}),E0({content:c.toString(),title:l,extra:{attributes:a,styles:n,classes:["".concat(_.cssPrefix,"-layers-counter"),...e]}})))}}}},a6={mixout(){return{text(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=o2,title:e=null,classes:a=[],attributes:n={},styles:i={}}=s;return n1({type:"text",content:c},()=>(S2("beforeDOMElementCreation",{content:c,params:s}),T3({content:c,transform:F(F({},o2),l),title:e,extra:{attributes:n,styles:i,classes:["".concat(_.cssPrefix,"-layers-text"),...a]}})))}}},provides(c){c.generateLayersText=function(s,l){let{title:e,transform:a,extra:n}=l,i=null,m=null;if(X3){let S=parseInt(getComputedStyle(s).fontSize,10),L=s.getBoundingClientRect();i=L.width/S,m=L.height/S}return _.autoA11y&&!e&&(n.attributes["aria-hidden"]="true"),Promise.resolve([s,T3({content:s.innerHTML,width:i,height:m,transform:a,title:e,extra:n,watchable:!0})])}}},n6=new RegExp('"',"ug"),B3=[1105920,1112319],I3=F(F(F({FontAwesome:{normal:"fas",400:"fas"}},W4),I4),X4),P1=Object.keys(I3).reduce((c,s)=>(c[s.toLowerCase()]=I3[s],c),{}),i6=Object.keys(P1).reduce((c,s)=>{let l=P1[s];return c[s]=l[900]||[...Object.entries(l)][0][1],c},{});function o6(c){let s=c.replace(n6,""),l=h0(s,0),e=l>=B3[0]&&l<=B3[1],a=s.length===2?s[0]===s[1]:!1;return{value:x1(a?s[0]:s),isSecondary:e||a}}function t6(c,s){let l=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(s),a=isNaN(e)?"normal":e;return(P1[l]||{})[a]||i6[l]}function W3(c,s){let l="".concat(Q4).concat(s.replace(":","-"));return new Promise((e,a)=>{if(c.getAttribute(l)!==null)return e();let i=D2(c.children).filter(r=>r.getAttribute(d1)===s)[0],m=C2.getComputedStyle(c,s),S=m.getPropertyValue("font-family"),L=S.match(s0),M=m.getPropertyValue("font-weight"),k=m.getPropertyValue("content");if(i&&!L)return c.removeChild(i),e();if(L&&k!=="none"&&k!==""){let r=m.getPropertyValue("content"),A=t6(S,M),{value:b,isSecondary:g}=o6(r),z=L[0].startsWith("FontAwesome"),o=R1(A,b),t=o;if(z){let p=S0(b);p.iconName&&p.prefix&&(o=p.iconName,A=p.prefix)}if(o&&!g&&(!i||i.getAttribute(F1)!==A||i.getAttribute(D1)!==t)){c.setAttribute(l,t),i&&c.removeChild(i);let p=$0(),{extra:C}=p;C.attributes[d1]=s,w1(o,A).then(f=>{let h=I1(K(F({},p),{icons:{main:f,mask:B1()},prefix:A,iconName:t,extra:C,watchable:!0})),y=Y.createElementNS("http://www.w3.org/2000/svg","svg");s==="::before"?c.insertBefore(y,c.firstChild):c.appendChild(y),y.outerHTML=h.map(w=>Y2(w)).join(`
`),c.removeAttribute(l),e()}).catch(a)}else e()}else e()})}function r6(c){return Promise.all([W3(c,"::before"),W3(c,"::after")])}function f6(c){return c.parentNode!==document.head&&!~Z4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(d1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function U3(c){if(L2)return new Promise((s,l)=>{let e=D2(c.querySelectorAll("*")).filter(f6).map(r6),a=W1.begin("searchPseudoElements");g4(),Promise.all(e).then(()=>{a(),A1(),s()}).catch(()=>{a(),A1(),l()})})}var m6={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=U3,c}}},provides(c){c.pseudoElements2svg=function(s){let{node:l=Y}=s;_.searchPseudoElements&&U3(l)}}},O3=!1,z6={mixout(){return{dom:{unwatch(){g4(),O3=!0}}}},hooks(){return{bootstrap(){_3(y1("mutationObserverCallbacks",{}))},noAuto(){G0()},watch(c){let{observeMutationsRoot:s}=c;O3?A1():_3(y1("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},j3=c=>{let s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((l,e)=>{let a=e.toLowerCase().split("-"),n=a[0],i=a.slice(1).join("-");if(n&&i==="h")return l.flipX=!0,l;if(n&&i==="v")return l.flipY=!0,l;if(i=parseFloat(i),isNaN(i))return l;switch(n){case"grow":l.size=l.size+i;break;case"shrink":l.size=l.size-i;break;case"left":l.x=l.x-i;break;case"right":l.x=l.x+i;break;case"up":l.y=l.y-i;break;case"down":l.y=l.y+i;break;case"rotate":l.rotate=l.rotate+i;break}return l},s)},L6={mixout(){return{parse:{transform:c=>j3(c)}}},hooks(){return{parseNodeAttributes(c,s){let l=s.getAttribute("data-fa-transform");return l&&(c.transform=j3(l)),c}}},provides(c){c.generateAbstractTransformGrouping=function(s){let{main:l,transform:e,containerWidth:a,iconWidth:n}=s,i={transform:"translate(".concat(a/2," 256)")},m="translate(".concat(e.x*32,", ").concat(e.y*32,") "),S="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),L="rotate(".concat(e.rotate," 0 0)"),M={transform:"".concat(m," ").concat(S," ").concat(L)},k={transform:"translate(".concat(n/2*-1," -256)")},r={outer:i,inner:M,path:k};return{tag:"g",attributes:F({},r.outer),children:[{tag:"g",attributes:F({},r.inner),children:[{tag:l.icon.tag,children:l.icon.children,attributes:F(F({},l.icon.attributes),r.path)}]}]}}}},M1={x:0,y:0,width:"100%",height:"100%"};function q3(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||s)&&(c.attributes.fill="black"),c}function p6(c){return c.tag==="g"?c.children:[c]}var M6={hooks(){return{parseNodeAttributes(c,s){let l=s.getAttribute("data-fa-mask"),e=l?a1(l.split(" ").map(a=>a.trim())):B1();return e.prefix||(e.prefix=h2()),c.mask=e,c.maskId=s.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(s){let{children:l,attributes:e,main:a,mask:n,maskId:i,transform:m}=s,{width:S,icon:L}=a,{width:M,icon:k}=n,r=z0({transform:m,containerWidth:M,iconWidth:S}),A={tag:"rect",attributes:K(F({},M1),{fill:"white"})},b=L.children?{children:L.children.map(q3)}:{},g={tag:"g",attributes:F({},r.inner),children:[q3(F({tag:L.tag,attributes:F(F({},L.attributes),r.path)},b))]},z={tag:"g",attributes:F({},r.outer),children:[g]},o="mask-".concat(i||V2()),t="clip-".concat(i||V2()),p={tag:"mask",attributes:K(F({},M1),{id:o,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,z]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:t},children:p6(k)},p]};return l.push(C,{tag:"rect",attributes:F({fill:"currentColor","clip-path":"url(#".concat(t,")"),mask:"url(#".concat(o,")")},M1)}),{children:l,attributes:e}}}},u6={provides(c){let s=!1;C2.matchMedia&&(s=C2.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let l=[],e={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l.push({tag:"path",attributes:K(F({},e),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=K(F({},a),{attributeName:"opacity"}),i={tag:"circle",attributes:K(F({},e),{cx:"256",cy:"364",r:"28"}),children:[]};return s||i.children.push({tag:"animate",attributes:K(F({},a),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:K(F({},n),{values:"1;0;1;1;0;1;"})}),l.push(i),l.push({tag:"path",attributes:K(F({},e),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:K(F({},n),{values:"1;0;0;0;0;1;"})}]}),s||l.push({tag:"path",attributes:K(F({},e),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:K(F({},n),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:l}}}},d6={hooks(){return{parseNodeAttributes(c,s){let l=s.getAttribute("data-fa-symbol"),e=l===null?!1:l===""?!0:l;return c.symbol=e,c}}}},C6=[M0,l6,s6,e6,a6,m6,z6,L6,M6,u6,d6];A0(C6,{mixoutsTo:e2});var X6=e2.noAuto,N4=e2.config,K6=e2.library,b4=e2.dom,y4=e2.parse,$6=e2.findIconDefinition,Q6=e2.toHtml,v4=e2.icon,J6=e2.layer,h6=e2.text,g6=e2.counter;var N6=["*"],b6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},y6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},v6=c=>{let s={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(s).map(l=>s[l]?l:null).filter(l=>l)},O1=new WeakSet,S4="fa-auto-css";function S6(c,s){if(!s.autoAddCss||O1.has(c))return;if(c.getElementById(S4)!=null){s.autoAddCss=!1,O1.add(c);return}let l=c.createElement("style");l.setAttribute("type","text/css"),l.setAttribute("id",S4),l.innerHTML=b4.css();let e=c.head.childNodes,a=null;for(let n=e.length-1;n>-1;n--){let i=e[n],m=i.nodeName.toUpperCase();["STYLE","LINK"].indexOf(m)>-1&&(a=i)}c.head.insertBefore(l,a),s.autoAddCss=!1,O1.add(c)}var w6=c=>c.prefix!==void 0&&c.iconName!==void 0,k6=(c,s)=>w6(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:s,iconName:c},A6=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(l){N4.autoAddCss=l,this._autoAddCss=l}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275prov=o1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),P6=(()=>{class c{constructor(){this.definitions={}}addIcons(...l){for(let e of l){e.prefix in this.definitions||(this.definitions[e.prefix]={}),this.definitions[e.prefix][e.iconName]=e;for(let a of e.icon[2])typeof a=="string"&&(this.definitions[e.prefix][a]=e)}}addIconPacks(...l){for(let e of l){let a=Object.keys(e).map(n=>e[n]);this.addIcons(...a)}}getIconDefinition(l,e){return l in this.definitions&&e in this.definitions[l]?this.definitions[l][e]:null}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275prov=o1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),T6=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(l){if("size"in l)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275dir=K1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[X2]})}}return c})(),F6=(()=>{class c{constructor(l,e){this.renderer=l,this.elementRef=e}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(l){"size"in l&&(l.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${l.size.currentValue}`),l.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${l.size.previousValue}`))}static{this.\u0275fac=function(e){return new(e||c)(M2(J1),M2($1))}}static{this.\u0275cmp=H2({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[X2,I2],ngContentSelectors:N6,decls:1,vars:0,template:function(e,a){e&1&&(l3(),s3(0))},encapsulation:2})}}return c})(),w4=(()=>{class c{constructor(l,e,a,n,i){this.sanitizer=l,this.config=e,this.iconLibrary=a,this.stackItem=n,this.document=Y1(a3),i!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(l){if(this.icon==null&&this.config.fallbackIcon==null){y6();return}if(l){let e=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(e!=null){let a=this.buildParams();S6(this.document,this.config);let n=v4(e,a);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(l){let e=k6(l,this.config.defaultPrefix);if("icon"in e)return e;let a=this.iconLibrary.getIconDefinition(e.prefix,e.iconName);return a??(b6(e),null)}buildParams(){let l={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},e=typeof this.transform=="string"?y4.transform(this.transform):this.transform;return{title:this.title,transform:e,classes:v6(l),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}static{this.\u0275fac=function(e){return new(e||c)(M2(r3),M2(A6),M2(P6),M2(T6,8),M2(F6,8))}}static{this.\u0275cmp=H2({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(e,a){e&2&&(c3("innerHTML",a.renderedIconHTML,Q1),Z1("title",a.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[X2,I2],decls:0,vars:0,template:function(e,a){},encapsulation:2})}}return c})();var k4=(()=>{class c{static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275mod=X1({type:c})}static{this.\u0275inj=G1({})}}return c})();f1();var v8=F4(A4());var H6=c=>({"bg-blue-50":c,"hover:bg-gray-100":!0});function _6(c,s){if(c&1&&i2(0,"i"),c&2){let l=$();x2(l.sortAscending?"fa-solid fa-arrow-up":"fa-solid fa-arrow-down")}}function E6(c,s){if(c&1&&i2(0,"i"),c&2){let l=$();x2(l.sortAscending?"fa-solid fa-arrow-up":"fa-solid fa-arrow-down")}}function R6(c,s){if(c&1&&i2(0,"i"),c&2){let l=$();x2(l.sortAscending?"fa-solid fa-arrow-up":"fa-solid fa-arrow-down")}}function B6(c,s){if(c&1&&i2(0,"i"),c&2){let l=$();x2(l.sortAscending?"fa-solid fa-arrow-up":"fa-solid fa-arrow-down")}}function I6(c,s){if(c&1&&i2(0,"i"),c&2){let l=$();x2(l.sortAscending?"fa-solid fa-arrow-up":"fa-solid fa-arrow-down")}}function W6(c,s){if(c&1&&i2(0,"i"),c&2){let l=$();x2(l.sortAscending?"fa-solid fa-arrow-up":"fa-solid fa-arrow-down")}}function U6(c,s){if(c&1){let l=K2();j(0,"tr",19)(1,"td",20),V(2),q(),j(3,"td",20),V(4),q(),j(5,"td",20),V(6),q(),j(7,"td",20),V(8),q(),j(9,"td",20),V(10),q(),j(11,"td",20),V(12),q(),j(13,"td",21)(14,"button",22),Q("click",function(){let a=a2(l).$implicit,n=$();return n2(n.openEditModal(a))}),i2(15,"fa-icon",23),q()()()}if(c&2){let l=s.$implicit,e=s.index,a=$();c2("ngClass",e3(12,H6,e%2!=0)),G(2),t1(l.id),G(2),t1(l.name),G(2),_2(" ",l.yearlyTotalLeaves,"/",a.totalTakenLeave(l)," "),G(2),_2(" ",l.CL_Assign,"/",l.CL_Taken," "),G(2),_2(" ",l.ML_Assign,"/",l.ML_Taken," "),G(2),_2(" ",l.EL_Assign,"/",l.EL_Taken," "),G(3),c2("icon",a.editIcon)}}function O6(c,s){c&1&&(j(0,"div",24),V(1," No results found "),q())}function j6(c,s){if(c&1){let l=K2();j(0,"div",25)(1,"div",26)(2,"h3",27),V(3),q(),j(4,"label",28),V(5," Yearly Total Leaves: "),i2(6,"input",29),q(),j(7,"label",28),V(8," CL: "),j(9,"input",30),B2("ngModelChange",function(a){a2(l);let n=$();return R2(n.selectedUser.CL_Assign,a)||(n.selectedUser.CL_Assign=a),n2(a)}),Q("input",function(){a2(l);let a=$();return n2(a.updateYearlyLeaves())}),q()(),j(10,"label",28),V(11," ML: "),j(12,"input",30),B2("ngModelChange",function(a){a2(l);let n=$();return R2(n.selectedUser.ML_Assign,a)||(n.selectedUser.ML_Assign=a),n2(a)}),Q("input",function(){a2(l);let a=$();return n2(a.updateYearlyLeaves())}),q()(),j(13,"label",28),V(14," EL: "),j(15,"input",30),B2("ngModelChange",function(a){a2(l);let n=$();return R2(n.selectedUser.EL_Assign,a)||(n.selectedUser.EL_Assign=a),n2(a)}),Q("input",function(){a2(l);let a=$();return n2(a.updateYearlyLeaves())}),q()(),j(16,"div",31)(17,"button",32),Q("click",function(){a2(l);let a=$();return n2(a.closeModal())}),V(18," Cancel "),q(),j(19,"button",33),Q("click",function(){a2(l);let a=$();return n2(a.confirmSave())}),V(20," Save "),q()()()()}if(c&2){let l=$();G(3),r1(" Edit ",l.selectedUser.name,"'s Leaves "),G(3),c2("value",l.calculateYearlyTotal()),G(3),E2("ngModel",l.selectedUser.CL_Assign),G(3),E2("ngModel",l.selectedUser.ML_Assign),G(3),E2("ngModel",l.selectedUser.EL_Assign)}}function q6(c,s){if(c&1){let l=K2();j(0,"div",25)(1,"div",34)(2,"p",35),V(3,"Are you sure you want to save changes?"),q(),j(4,"div",31)(5,"button",32),Q("click",function(){a2(l);let a=$();return n2(a.closeConfirmModal())}),V(6," No "),q(),j(7,"button",33),Q("click",function(){a2(l);let a=$();return n2(a.saveChanges())}),V(8," Yes "),q()()()()}}var P4=class c{users=M3.users;searchQuery="";selectedUser=null;showLeaveDetails=!1;showConfirmModal=!1;editIcon=h3;viewIcon=g3;sortColumn="id";sortAscending=!0;currentDateTime="";ngOnInit(){this.updateDateTime(),setInterval(()=>{this.updateDateTime()},6e4)}updateDateTime(){let s=new Date;this.currentDateTime=s.toLocaleString("en-US",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0})}get filteredUsers(){return this.users.filter(s=>s.name.toLowerCase().includes(this.searchQuery.toLowerCase())).sort((s,l)=>this.sortUsers(s,l))}openEditModal(s){this.selectedUser=F({},s)}updateYearlyLeaves(){this.selectedUser&&(this.selectedUser.yearlyTotalLeaves=this.calculateYearlyTotal())}calculateYearlyTotal(){return(this.selectedUser?.CL_Assign||0)+(this.selectedUser?.ML_Assign||0)+(this.selectedUser?.EL_Assign||0)}confirmSave(){this.showConfirmModal=!0}closeConfirmModal(){this.showConfirmModal=!1}saveChanges(){if(this.selectedUser){let s=this.users.findIndex(l=>l.id===this.selectedUser.id);this.users[s]=F({},this.selectedUser),this.selectedUser=null,this.showConfirmModal=!1}}closeModal(){this.selectedUser=null,this.showLeaveDetails=!1}exportToExcel(){let s=$2.json_to_sheet(this.users),l=$2.book_new();$2.book_append_sheet(l,s,"Users"),C3(l,"users.xlsx")}exportToPDF(){let s=new u3,l=this.users.map(e=>[e.id,e.name,e.yearlyTotalLeaves,e.CL_Assign,e.ML_Assign,e.EL_Assign]);s.text("User List",20,10),s.autoTable({head:[["ID","Name","Yearly Leaves","CL","ML","EL"]],body:l}),s.save("users.pdf")}sortData(s){this.sortColumn===s?this.sortAscending=!this.sortAscending:(this.sortColumn=s,this.sortAscending=!0)}sortUsers(s,l){let e=s[this.sortColumn],a=l[this.sortColumn];return typeof e=="string"&&typeof a=="string"?this.sortAscending?e.localeCompare(a):a.localeCompare(e):typeof e=="number"&&typeof a=="number"?this.sortAscending?e-a:a-e:0}totalTakenLeave(s){return(s.CL_Taken||0)+(s.ML_Taken||0)+(s.EL_Taken||0)}static \u0275fac=function(l){return new(l||c)};static \u0275cmp=H2({type:c,selectors:[["app-all-users"]],standalone:!0,features:[I2],decls:42,vars:12,consts:[[1,"p-4","md:p-8","bg-gray-100"],[1,"flex","justify-between","items-center","mb-4"],[1,"text-lg","md:text-2xl","font-semibold","text-gray-800"],[1,"text-sm","text-gray-600","shadow-md","rounded-lg","bg-white","p-2","cursor-pointer"],[1,"fa-solid","fa-calendar-days"],["type","text","placeholder","Search by user name...",1,"mb-6","p-3","border","rounded-lg","w-full",3,"ngModelChange","ngModel"],[1,"flex","md:justify-end","justify-between","space-x-4","mb-4"],[1,"bg-green-500","text-white","px-4","py-2","rounded","hover:bg-green-600","transition-colors","duration-300",3,"click"],[1,"bg-blue-500","text-white","px-4","py-2","rounded","hover:bg-blue-600","transition-colors","duration-300",3,"click"],[1,"overflow-x-auto","bg-white","shadow-lg","rounded-lg","max-w-full",2,"max-height","550px"],[1,"min-w-full","divide-y","divide-gray-200"],[1,"bg-gray-200"],[1,"px-6","py-3","text-left","text-xs","font-medium","text-center","text-gray-700","uppercase","tracking-wider",3,"click"],[3,"class",4,"ngIf"],[1,"px-6","py-3","text-center","text-xs","font-medium","text-center","text-gray-700","uppercase","tracking-wider"],[1,"bg-white","divide-y","divide-gray-200"],[3,"ngClass",4,"ngFor","ngForOf"],["class","text-center text-gray-500 py-4 mt-10",4,"ngIf"],["class","fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center",4,"ngIf"],[3,"ngClass"],[1,"px-6","py-4","text-center"],[1,"px-6","py-4","text-center","flex","justify-center","space-x-3"],[1,"text-blue-500",3,"click"],[3,"icon"],[1,"text-center","text-gray-500","py-4","mt-10"],[1,"fixed","inset-0","bg-gray-900","bg-opacity-50","flex","justify-center","items-center"],[1,"bg-white","p-6","rounded-lg","shadow-lg","w-full","max-w-lg"],[1,"text-2xl","font-semibold","mb-4"],[1,"block","mb-3"],["type","number","readonly","",1,"border","p-2","rounded","w-full","text-gray-400","bg-gray-100","cursor-not-allowed",3,"value"],["type","number",1,"border","p-2","rounded","w-full",3,"ngModelChange","input","ngModel"],[1,"flex","justify-end"],[1,"bg-gray-500","text-white","px-4","py-2","rounded","mr-2",3,"click"],[1,"bg-green-500","text-white","px-4","py-2","rounded",3,"click"],[1,"bg-white","p-6","rounded-lg","shadow-lg","w-full","max-w-md"],[1,"text-xl","mb-6"]],template:function(l,e){l&1&&(j(0,"div",0)(1,"div",1)(2,"p",2),V(3,"All Users"),q(),j(4,"p",3),i2(5,"i",4),V(6),q()(),j(7,"input",5),B2("ngModelChange",function(n){return R2(e.searchQuery,n)||(e.searchQuery=n),n}),q(),j(8,"div",6)(9,"button",7),Q("click",function(){return e.exportToExcel()}),V(10," Export to Excel "),q(),j(11,"button",8),Q("click",function(){return e.exportToPDF()}),V(12," Export to PDF "),q()(),j(13,"div",9)(14,"table",10)(15,"thead",11)(16,"tr")(17,"th",12),Q("click",function(){return e.sortData("id")}),V(18," Sr No. "),f2(19,_6,1,2,"i",13),q(),j(20,"th",12),Q("click",function(){return e.sortData("name")}),V(21," Name "),f2(22,E6,1,2,"i",13),q(),j(23,"th",12),Q("click",function(){return e.sortData("yearlyTotalLeaves")}),V(24," Yearly Leaves "),f2(25,R6,1,2,"i",13),q(),j(26,"th",12),Q("click",function(){return e.sortData("CL_Assign")}),V(27," CL "),f2(28,B6,1,2,"i",13),q(),j(29,"th",12),Q("click",function(){return e.sortData("ML_Assign")}),V(30," ML "),f2(31,I6,1,2,"i",13),q(),j(32,"th",12),Q("click",function(){return e.sortData("EL_Assign")}),V(33," EL "),f2(34,W6,1,2,"i",13),q(),j(35,"th",14),V(36," Actions "),q()()(),j(37,"tbody",15),f2(38,U6,16,14,"tr",16),q()()(),f2(39,O6,2,0,"div",17)(40,j6,21,5,"div",18)(41,q6,9,0,"div",18),q()),l&2&&(G(6),r1(" ",e.currentDateTime," "),G(),E2("ngModel",e.searchQuery),G(12),c2("ngIf",e.sortColumn==="id"),G(3),c2("ngIf",e.sortColumn==="name"),G(3),c2("ngIf",e.sortColumn==="yearlyTotalLeaves"),G(3),c2("ngIf",e.sortColumn==="CL_Assign"),G(3),c2("ngIf",e.sortColumn==="ML_Assign"),G(3),c2("ngIf",e.sortColumn==="EL_Assign"),G(4),c2("ngForOf",e.filteredUsers),G(),c2("ngIf",e.filteredUsers.length===0),G(),c2("ngIf",e.selectedUser&&!e.showLeaveDetails),G(),c2("ngIf",e.showConfirmModal))},dependencies:[p3,f3,L3,m3,z3,t3,n3,i3,o3,k4,w4]})};export{P4 as AllUsersComponent};
