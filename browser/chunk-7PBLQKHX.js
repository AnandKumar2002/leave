import{a as E}from"./chunk-YT63TBDZ.js";import{h as v}from"./chunk-2OV54QIK.js";import{Ba as l,Gb as h,Hb as f,Ib as y,La as s,Mb as b,Na as m,Qa as t,R as x,Ra as e,T as u,Wa as p,cb as i,eb as o,kb as g,lb as c}from"./chunk-CVYJNGOA.js";import"./chunk-FK42CRUA.js";var _=r=>({"bg-blue-50":r,"hover:bg-gray-100":!0});function T(r,n){if(r&1&&(t(0,"tr",12)(1,"td",13),i(2),e(),t(3,"td",14),i(4),e(),t(5,"td",14),i(6),e(),t(7,"td",14),i(8),e(),t(9,"td",14),i(10),e(),t(11,"td",14),i(12),e(),t(13,"td",14),i(14),e(),t(15,"td",14),i(16),e()()),r&2){let a=n.$implicit,d=n.index;m("ngClass",c(9,_,d%2!==0)),l(2),o(" ",a.name," "),l(2),o(" ",a.CL_Assign," "),l(2),o(" ",a.CL_Taken," "),l(2),o(" ",a.EL_Assign," "),l(2),o(" ",a.EL_Taken," "),l(2),o(" ",a.ML_Assign," "),l(2),o(" ",a.ML_Taken," "),l(2),o(" ",a.leaveStatus," ")}}function I(r,n){r&1&&(t(0,"div",15),i(1," Loading users data... "),e())}function L(r,n){if(r&1&&(t(0,"tr",12)(1,"td",13),i(2),e(),t(3,"td",14),i(4),e(),t(5,"td",14),i(6),e()()),r&2){let a=n.$implicit,d=n.index;m("ngClass",c(4,_,d%2!==0)),l(2),o(" ",a.name," "),l(2),o(" ",a.startDate," "),l(2),o(" ",a.endDate," ")}}function w(r,n){r&1&&(t(0,"div",15),i(1," Loading public holidays... "),e())}var S=class r{httpClient=x(E);data=[];publicHolidays=[];constructor(){}fetchUsers(){this.httpClient.get("http://localhost:3000/users").subscribe({next:n=>{console.log("Users:",n),this.data=n},error:n=>{console.log("Error fetching users data:",n)}})}fetchPublicHolidays(){this.httpClient.get("http://localhost:3000/publicHolidays").subscribe({next:n=>{console.log("Public Holidays:",n),this.publicHolidays=n},error:n=>{console.log("Error fetching public holidays data:",n)}})}static \u0275fac=function(a){return new(a||r)};static \u0275cmp=u({type:r,selectors:[["app-test"]],standalone:!0,features:[g],decls:47,vars:4,consts:[[1,"p-4","md:p-8","bg-gray-100"],[1,"text-2xl","font-semibold","p-4"],[1,"flex","gap-4"],[1,"bg-blue-500","text-white","px-4","py-2","rounded","hover:bg-blue-600","mb-4",3,"click"],[1,"overflow-x-auto","bg-white","shadow-lg","rounded-lg","max-w-full",2,"max-height","550px"],[1,"min-w-full","divide-y","divide-gray-200"],[1,"bg-gray-200"],[1,"px-6","py-3","text-left","text-xs","font-medium","text-gray-500","uppercase","tracking-wider"],[1,"bg-white","divide-y","divide-gray-200"],[3,"ngClass",4,"ngFor","ngForOf"],["class","text-center text-gray-500 py-4",4,"ngIf"],[1,"mt-6"],[3,"ngClass"],[1,"px-6","py-4","whitespace-nowrap","text-sm","font-medium","text-gray-900"],[1,"px-6","py-4","whitespace-nowrap","text-sm","text-gray-500"],[1,"text-center","text-gray-500","py-4"]],template:function(a,d){a&1&&(t(0,"div",0)(1,"h2",1),i(2,"Users List"),e(),t(3,"div",2)(4,"button",3),p("click",function(){return d.fetchUsers()}),i(5," Fetch Users Data "),e(),t(6,"button",3),p("click",function(){return d.fetchPublicHolidays()}),i(7," Fetch Users Data "),e()(),t(8,"div",4)(9,"table",5)(10,"thead",6)(11,"tr")(12,"th",7),i(13," Name "),e(),t(14,"th",7),i(15," CL Assign "),e(),t(16,"th",7),i(17," CL Taken "),e(),t(18,"th",7),i(19," EL Assign "),e(),t(20,"th",7),i(21," EL Taken "),e(),t(22,"th",7),i(23," ML Assign "),e(),t(24,"th",7),i(25," ML Taken "),e(),t(26,"th",7),i(27," Leave Status "),e()()(),t(28,"tbody",8),s(29,T,17,11,"tr",9),e()(),s(30,I,2,0,"div",10),e(),t(31,"div",11)(32,"h2",1),i(33,"Public Holidays"),e(),t(34,"div",4)(35,"table",5)(36,"thead",6)(37,"tr")(38,"th",7),i(39," Holiday Name "),e(),t(40,"th",7),i(41," Start Date "),e(),t(42,"th",7),i(43," End Date "),e()()(),t(44,"tbody",8),s(45,L,7,6,"tr",9),e()(),s(46,w,2,0,"div",10),e()()()),a&2&&(l(29),m("ngForOf",d.data),l(),m("ngIf",d.data.length===0),l(15),m("ngForOf",d.publicHolidays),l(),m("ngIf",d.publicHolidays.length===0))},dependencies:[b,h,f,y,v]})};export{S as TestComponent};
