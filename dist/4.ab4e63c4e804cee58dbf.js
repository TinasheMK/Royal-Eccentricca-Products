(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{jcJX:function(n,t,e){"use strict";e.r(t),e.d(t,"AccountModule",(function(){return bn}));var o=e("MKys"),r=e("ofXK"),i=e("tyNb"),s=e("fXoL");let c=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Eb({type:n,selectors:[["app-help"]],decls:12,vars:0,consts:[[1,"help","container"],[1,"title","row"],[1,"col-md-12"],[1,"row"],["routerLink","/faq"]],template:function(n,t){1&n&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Pb(3,"p"),s.Cc(4,"Help"),s.Ob(),s.Ob(),s.Ob(),s.Lb(5,"hr"),s.Pb(6,"div",3),s.Pb(7,"div",2),s.Pb(8,"p"),s.Cc(9,"Please visit "),s.Pb(10,"a",4),s.Cc(11,"FAQ."),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob())},directives:[i.g],styles:[".help[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-weight:700;color:#000}"]}),n})();var a=e("3Pt+"),d=e("rwfU"),b=e("IzEk"),l=e("JIr8"),g=e("z6cu"),P=e("flj8");function p(n,t){1&n&&s.Lb(0,"div",4)}function O(n,t){1&n&&(s.Pb(0,"span",24),s.Cc(1,"This field is required!"),s.Ob())}function u(n,t){if(1&n&&(s.Pb(0,"span"),s.Ac(1,O,2,0,"span",18),s.Ob()),2&n){const n=s.cc(2);s.xb(1),s.ic("ngIf",n.addressForm.get("country").errors.required)}}function m(n,t){1&n&&(s.Pb(0,"span",24),s.Cc(1,"This field is required!"),s.Ob())}function f(n,t){if(1&n&&(s.Pb(0,"span"),s.Ac(1,m,2,0,"span",18),s.Ob()),2&n){const n=s.cc(2);s.xb(1),s.ic("ngIf",n.addressForm.get("city").errors.required)}}function C(n,t){1&n&&(s.Pb(0,"span"),s.Pb(1,"span",24),s.Cc(2,"Please enter a valid state"),s.Ob(),s.Ob())}function v(n,t){1&n&&(s.Pb(0,"span",24),s.Cc(1," Please enter a valid zip number! "),s.Ob())}function h(n,t){if(1&n){const n=s.Qb();s.Pb(0,"div"),s.Pb(1,"form",5),s.ac("ngSubmit",(function(){return s.tc(n),s.cc().onSubmitAddressForm()})),s.Pb(2,"div",6),s.Pb(3,"div",7),s.Pb(4,"div",8),s.Pb(5,"div",9),s.Pb(6,"label",10),s.Cc(7,"COUNTRY"),s.Ob(),s.Lb(8,"input",11),s.Ac(9,u,2,1,"span",3),s.Ob(),s.Ob(),s.Pb(10,"div",8),s.Pb(11,"div",9),s.Pb(12,"label",12),s.Cc(13,"CITY"),s.Ob(),s.Lb(14,"input",13),s.Ac(15,f,2,1,"span",3),s.Ob(),s.Ob(),s.Ob(),s.Pb(16,"div",7),s.Pb(17,"div",8),s.Pb(18,"div",9),s.Pb(19,"label",14),s.Cc(20,"STATE"),s.Ob(),s.Lb(21,"input",15),s.Ac(22,C,3,0,"span",3),s.Ob(),s.Ob(),s.Pb(23,"div",8),s.Pb(24,"div",9),s.Pb(25,"label",16),s.Cc(26,"ZIP"),s.Ob(),s.Lb(27,"input",17),s.Ac(28,v,2,0,"span",18),s.Ob(),s.Ob(),s.Ob(),s.Pb(29,"div",7),s.Pb(30,"div",19),s.Pb(31,"div",9),s.Pb(32,"label",20),s.Cc(33,"ADDRESS"),s.Ob(),s.Pb(34,"textarea",21),s.Cc(35,"              "),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(36,"div",22),s.Pb(37,"div",19),s.Pb(38,"button",23),s.Cc(39," Update "),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()}if(2&n){const n=s.cc();s.xb(1),s.ic("formGroup",n.addressForm),s.xb(7),s.ic("maxlength",240),s.xb(1),s.ic("ngIf",n.addressForm.get("country").invalid&&n.addressForm.get("country").touched),s.xb(5),s.ic("maxlength",240),s.xb(1),s.ic("ngIf",n.addressForm.get("city").invalid&&n.addressForm.get("city").touched),s.xb(6),s.ic("maxlength",240),s.xb(1),s.ic("ngIf",n.addressForm.get("state").invalid&&n.addressForm.get("state").touched),s.xb(5),s.ic("maxlength",6)("minlength",5),s.xb(1),s.ic("ngIf",n.addressForm.get("zip").invalid&&n.addressForm.get("zip").touched),s.xb(10),s.ic("disabled",n.addressForm.invalid||n.addressForm.pending)}}let w=(()=>{class n{constructor(n){this.accountService=n,this.innerLoading=!0}ngOnInit(){this.addressForm=new a.d({address:new a.b(null,[a.r.pattern("[0-9a-zA-Z #,-]+"),d.a,a.r.minLength(3),a.r.maxLength(240)]),city:new a.b(null,[a.r.pattern("^[a-zA-Z\\s]+$"),d.a,a.r.minLength(3),a.r.maxLength(100)]),state:new a.b(null,[a.r.pattern("^[a-zA-Z\\s]+$"),d.a,a.r.minLength(3),a.r.maxLength(40)]),zip:new a.b(null,[a.r.pattern("^[0-9]*$"),d.a,a.r.maxLength(6),a.r.minLength(5)]),country:new a.b(null,[a.r.pattern("^[a-zA-Z\\s]+$"),d.a,a.r.minLength(3),a.r.maxLength(40)])}),this.accountService.getUser().pipe(Object(b.a)(1)).subscribe(n=>{this.addressForm.patchValue({address:n.address,city:n.city,state:n.state,zip:n.zip,country:n.country}),this.innerLoading=!1})}onSubmitAddressForm(){var n,t,e,o,r,i,s,c,a,d,P,p,O,u,m;this.innerLoading=!0;const f={address:(null===(e=null===(t=null===(n=this.addressForm.value)||void 0===n?void 0:n.address)||void 0===t?void 0:t.trim())||void 0===e?void 0:e.length)?this.addressForm.value.address.trim():null,city:(null===(i=null===(r=null===(o=this.addressForm.value)||void 0===o?void 0:o.city)||void 0===r?void 0:r.trim())||void 0===i?void 0:i.length)?this.addressForm.value.city.trim():null,state:(null===(a=null===(c=null===(s=this.addressForm.value)||void 0===s?void 0:s.state)||void 0===c?void 0:c.trim())||void 0===a?void 0:a.length)?this.addressForm.value.state.trim():null,zip:(null===(p=null===(P=null===(d=this.addressForm.value)||void 0===d?void 0:d.zip)||void 0===P?void 0:P.trim())||void 0===p?void 0:p.length)?this.addressForm.value.zip.trim():null,country:(null===(m=null===(u=null===(O=this.addressForm.value)||void 0===O?void 0:O.country)||void 0===u?void 0:u.trim())||void 0===m?void 0:m.length)?this.addressForm.value.country.trim():null};this.accountService.updateUserAddress(f).pipe(Object(b.a)(1),Object(l.a)(n=>(alert("An error occurred. Please refresh your page."),Object(g.a)(n)))).subscribe(n=>{this.innerLoading=!1,alert("Success! Your address has been changed.")})}}return n.\u0275fac=function(t){return new(t||n)(s.Kb(P.a))},n.\u0275cmp=s.Eb({type:n,selectors:[["app-address"]],decls:7,vars:2,consts:[[1,"address","container"],[1,"title"],["class","loader",4,"ngIf"],[4,"ngIf"],[1,"loader"],[3,"formGroup","ngSubmit"],[1,"info"],[1,"row"],[1,"col-md-6"],[1,"form-group"],["for","country"],["type","text","id","country","name","country","formControlName","country",1,"form-control",3,"maxlength"],["for","city"],["type","text","id","city","name","city","formControlName","city",1,"form-control",3,"maxlength"],["for","state"],["type","text","id","state","name","state","formControlName","state",1,"form-control",3,"maxlength"],["for","zip"],["type","text","id","zip","name","zip","formControlName","zip",1,"form-control",3,"maxlength","minlength"],["class","alert-danger",4,"ngIf"],[1,"col-md-12"],["for","address"],["type","text","id","address","name","address","formControlName","address","rows","3",1,"form-control"],[1,"row","controls"],["type","submit",1,"btn","btn-info",3,"disabled"],[1,"alert-danger"]],template:function(n,t){1&n&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"p"),s.Cc(3,"Address"),s.Ob(),s.Ob(),s.Lb(4,"hr"),s.Ac(5,p,1,0,"div",2),s.Ac(6,h,40,11,"div",3),s.Ob()),2&n&&(s.xb(5),s.ic("ngIf",t.innerLoading),s.xb(1),s.ic("ngIf",!t.innerLoading))},directives:[r.m,a.t,a.m,a.e,a.a,a.l,a.c,a.h,a.i],styles:[".address[_ngcontent-%COMP%]{min-height:40vh}.address[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700;color:#000}.address[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px;color:grey;font-weight:700}.address[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .address[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border-radius:10px}.address[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:none}.address[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end}.address[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;padding-left:35px;padding-right:35px;font-size:14px;border-radius:10px}"]}),n})(),M=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Eb({type:n,selectors:[["app-account"]],decls:28,vars:0,consts:[[1,"account","container"],[1,"row"],[1,"links","col-md-3"],[1,"title"],["routerLink","/account/information","routerLinkActive","active"],["aria-hidden","true",1,"fa","fa-user-o"],["routerLink","/account/orders","routerLinkActive","active"],["aria-hidden","true",1,"fa","fa-archive"],["routerLink","/account/address","routerLinkActive","active"],["aria-hidden","true",1,"fa","fa-home"],["routerLink","/account/help","routerLinkActive","active"],["aria-hidden","true",1,"fa","fa-question-circle-o"],[1,"panel","col-md-9"]],template:function(n,t){1&n&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Pb(3,"div",3),s.Pb(4,"p"),s.Cc(5,"Account"),s.Ob(),s.Ob(),s.Pb(6,"div"),s.Pb(7,"a",4),s.Lb(8,"i",5),s.Pb(9,"p"),s.Cc(10,"User Information"),s.Ob(),s.Ob(),s.Ob(),s.Pb(11,"div"),s.Pb(12,"a",6),s.Lb(13,"i",7),s.Pb(14,"p"),s.Cc(15,"Orders"),s.Ob(),s.Ob(),s.Ob(),s.Pb(16,"div"),s.Pb(17,"a",8),s.Lb(18,"i",9),s.Pb(19,"p"),s.Cc(20,"Address"),s.Ob(),s.Ob(),s.Ob(),s.Pb(21,"div"),s.Pb(22,"a",10),s.Lb(23,"i",11),s.Pb(24,"p"),s.Cc(25,"Help"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(26,"div",12),s.Lb(27,"router-outlet"),s.Ob(),s.Ob(),s.Ob())},directives:[i.g,i.f,i.i],styles:[".account[_ngcontent-%COMP%]{position:relative;top:150px;min-height:50vh}.account[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:8px}.account[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-left:22px;margin-bottom:5px;color:#000;font-weight:700;font-size:18px}.account[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.account[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px}.account[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.account[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline;color:grey;margin:0 0 0 5px}.account[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:relative;top:1px;color:grey;font-size:20px;align-content:center}.account[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.fa-archive[_ngcontent-%COMP%], .account[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.fa-user-o[_ngcontent-%COMP%]{font-size:16px;margin-right:2px}.account[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .account[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#17a2b8}"]}),n})();const _={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};var x=e("kVqo"),y=e("1kSV");function L(n,t){1&n&&(s.Pb(0,"div",8),s.Pb(1,"div",2),s.Pb(2,"div",9),s.Cc(3,"An error occurred. Please try again."),s.Ob(),s.Ob(),s.Ob())}function F(n,t){1&n&&(s.Pb(0,"div",8),s.Pb(1,"div",2),s.Pb(2,"p",10),s.Cc(3,"You do not have any orders. "),s.Pb(4,"a",11),s.Cc(5,"Browse now!"),s.Ob(),s.Ob(),s.Ob(),s.Ob())}function A(n,t){1&n&&s.Lb(0,"div",12)}function I(n,t){if(1&n&&(s.Pb(0,"div",8),s.Pb(1,"div",20),s.Pb(2,"p"),s.Cc(3,"Discount: "),s.Pb(4,"span"),s.Cc(5),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&n){const n=s.cc().$implicit;s.xb(5),s.Ec("",n.discount.discountPercent,"%")}}const S=function(n){return{"background-color":n}};function N(n,t){if(1&n){const n=s.Qb();s.Pb(0,"div",25),s.Pb(1,"div",26),s.ac("click",(function(){s.tc(n);const e=t.$implicit;return s.cc(3).goToItem(e.url)})),s.Pb(2,"div",27),s.Lb(3,"div",28),s.Lb(4,"img",29),s.Ob(),s.Pb(5,"div",30),s.Pb(6,"div",8),s.Pb(7,"div",2),s.Pb(8,"p",31),s.Cc(9),s.Ob(),s.Ob(),s.Ob(),s.Pb(10,"div",8),s.Pb(11,"div",32),s.Pb(12,"p",33),s.Cc(13,"Amount: "),s.Pb(14,"span"),s.Cc(15),s.Ob(),s.Ob(),s.Ob(),s.Pb(16,"div",32),s.Pb(17,"p",34),s.Cc(18),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()}if(2&n){const n=t.$implicit;s.xb(3),s.ic("ngStyle",s.nc(6,S,n.color.hex)),s.xb(1),s.jc("src",n.thumb,s.vc),s.jc("alt",n.name),s.xb(5),s.Dc(n.name),s.xb(6),s.Dc(n.amount),s.xb(3),s.Ec("",n.price," \u20ac")}}function z(n,t){if(1&n&&(s.Pb(0,"div",14),s.Pb(1,"div",15),s.Pb(2,"div",8),s.Pb(3,"div",16),s.Pb(4,"p"),s.Cc(5,"ORDER: "),s.Pb(6,"span"),s.Cc(7),s.Ob(),s.Ob(),s.Ob(),s.Pb(8,"div",17),s.Pb(9,"p"),s.Cc(10,"DATE: "),s.Pb(11,"span"),s.Cc(12),s.Ob(),s.Ob(),s.Ob(),s.Pb(13,"div",18),s.Pb(14,"p"),s.Cc(15,"STATUS: "),s.Pb(16,"span"),s.Cc(17),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Lb(18,"hr"),s.Pb(19,"div",8),s.Pb(20,"div",19),s.Pb(21,"div",8),s.Pb(22,"div",20),s.Pb(23,"p"),s.Cc(24,"Name: "),s.Pb(25,"span"),s.Cc(26),s.Ob(),s.Ob(),s.Ob(),s.Pb(27,"div",20),s.Pb(28,"p"),s.Cc(29,"Phone: "),s.Pb(30,"span"),s.Cc(31),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(32,"div",8),s.Pb(33,"div",20),s.Pb(34,"p"),s.Cc(35,"Country: "),s.Pb(36,"span"),s.Cc(37),s.Ob(),s.Ob(),s.Ob(),s.Pb(38,"div",20),s.Pb(39,"p"),s.Cc(40,"City: "),s.Pb(41,"span"),s.Cc(42),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(43,"div",8),s.Pb(44,"div",20),s.Pb(45,"p"),s.Cc(46,"State: "),s.Pb(47,"span"),s.Cc(48),s.Ob(),s.Ob(),s.Ob(),s.Pb(49,"div",20),s.Pb(50,"p"),s.Cc(51,"Zip Code: "),s.Pb(52,"span"),s.Cc(53),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(54,"div",8),s.Pb(55,"div",20),s.Pb(56,"p"),s.Cc(57,"Cargo Price: "),s.Pb(58,"span"),s.Cc(59),s.Ob(),s.Ob(),s.Ob(),s.Pb(60,"div",20),s.Pb(61,"p"),s.Cc(62,"Final Price: "),s.Pb(63,"span"),s.Cc(64),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ac(65,I,6,1,"div",3),s.Pb(66,"div",8),s.Pb(67,"div",21),s.Pb(68,"p"),s.Cc(69,"Ship Address: "),s.Pb(70,"span"),s.Cc(71),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(72,"div",8),s.Pb(73,"div",21),s.Pb(74,"p"),s.Cc(75,"Billing Address: "),s.Pb(76,"span"),s.Cc(77),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(78,"div",22),s.Pb(79,"div",23),s.Ac(80,N,19,8,"div",24),s.Ob(),s.Ob(),s.Lb(81,"hr"),s.Ob(),s.Ob()),2&n){const n=t.$implicit,e=s.cc(2);s.xb(7),s.Ec("#",n.id,""),s.xb(5),s.Dc(e.convertDate(n.date)),s.xb(5),s.Dc(0===n.shipped?"Preparing":"Shipped"),s.xb(9),s.Dc(n.shipName),s.xb(5),s.Dc(n.phone),s.xb(6),s.Dc(n.country),s.xb(5),s.Dc(n.city),s.xb(6),s.Dc(n.state),s.xb(5),s.Dc(n.zip),s.xb(6),s.Ec("",n.totalCargoPrice," \u20ac"),s.xb(5),s.Ec("",n.totalPrice," \u20ac"),s.xb(1),s.ic("ngIf",n.discount),s.xb(6),s.Dc(n.shipAddress),s.xb(6),s.Dc(n.billingAddress),s.xb(3),s.ic("ngForOf",n.orderItems)}}function k(n,t){if(1&n&&(s.Pb(0,"div",8),s.Ac(1,z,82,15,"div",13),s.Ob()),2&n){const n=s.cc();s.xb(1),s.ic("ngForOf",n.orders)}}function j(n,t){if(1&n){const n=s.Qb();s.Pb(0,"ngb-pagination",35),s.ac("pageChange",(function(t){return s.tc(n),s.cc().page=t}))("pageChange",(function(){return s.tc(n),s.cc().pageNavigation()})),s.Ob()}if(2&n){const n=s.cc();s.ic("collectionSize",n.collectionSize)("pageSize",n.pageSize)("page",n.page)("rotate",!0)("maxSize",5)}}let E=(()=>{class n{constructor(n,t){this.orderService=n,this.router=t,this.fetchError=!1,this.noOrders=!1,this.page=1,this.pageSize=3,this.collectionSize=0,this.innerLoading=!0}ngOnInit(){this.orderService.getAllOrdersCount().pipe(Object(b.a)(1),Object(l.a)(n=>(alert("An error occurred loading orders. Please refresh your page."),Object(g.a)(n)))).subscribe(n=>{0===n?(this.noOrders=!0,this.innerLoading=!1):(this.pageSize=this.orderService.getPageSize(),this.collectionSize=n,this.pageNavigation())})}convertDate(n){return new Date(n).toLocaleDateString(void 0,_)}pageNavigation(){this.orders=[],this.innerLoading=!0,this.orderService.getAllOrders(this.page-1).pipe(Object(b.a)(1),Object(l.a)(n=>(this.fetchError=!0,this.innerLoading=!1,Object(g.a)(n)))).subscribe(n=>{this.orders=n,this.innerLoading=!1})}goToItem(n){this.router.navigate(["/detail/",n])}}return n.\u0275fac=function(t){return new(t||n)(s.Kb(x.a),s.Kb(i.e))},n.\u0275cmp=s.Eb({type:n,selectors:[["app-list-orders"]],decls:13,vars:5,consts:[[1,"list-orders","container"],[1,"title","row"],[1,"col-md-12"],["class","row",4,"ngIf"],["class","loader",4,"ngIf"],[1,"row","bottom"],[1,"col","md-12","col-12"],["class","d-flex justify-content-end","aria-label","pagination",3,"collectionSize","pageSize","page","rotate","maxSize","pageChange",4,"ngIf"],[1,"row"],[1,"alert-warning"],[1,"no-order"],["routerLink","/browse"],[1,"loader"],["class","order col-md-12",4,"ngFor","ngForOf"],[1,"order","col-md-12"],[1,"order-title"],[1,"col-md-3"],[1,"date","col-md-6"],[1,"status","col-md-3"],[1,"col-md-7","left-panel"],[1,"col-md-6","col-6"],[1,"col-md-12","col-12"],[1,"col-md-5","right-panel"],[1,"row","item-list"],["class","col-md-12 col-12 pb-4",4,"ngFor","ngForOf"],[1,"col-md-12","col-12","pb-4"],[1,"row","item",3,"click"],[1,"col-md-4"],[1,"color",3,"ngStyle"],[3,"src","alt"],[1,"col-md-8","details"],[1,"product-name"],[1,"col-md-6"],[1,"amount"],[1,"price"],["aria-label","pagination",1,"d-flex","justify-content-end",3,"collectionSize","pageSize","page","rotate","maxSize","pageChange"]],template:function(n,t){1&n&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Pb(3,"p"),s.Cc(4,"Orders"),s.Ob(),s.Ob(),s.Ob(),s.Lb(5,"hr"),s.Ac(6,L,4,0,"div",3),s.Ac(7,F,6,0,"div",3),s.Ac(8,A,1,0,"div",4),s.Ac(9,k,2,1,"div",3),s.Pb(10,"div",5),s.Pb(11,"div",6),s.Ac(12,j,1,5,"ngb-pagination",7),s.Ob(),s.Ob(),s.Ob()),2&n&&(s.xb(6),s.ic("ngIf",t.fetchError),s.xb(1),s.ic("ngIf",t.noOrders),s.xb(1),s.ic("ngIf",t.innerLoading),s.xb(1),s.ic("ngIf",!t.fetchError),s.xb(3),s.ic("ngIf",!t.noOrders))},directives:[r.m,i.g,r.l,r.n,y.i],styles:[".list-orders[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:16px;font-weight:700;color:#000}.list-orders[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]{margin-top:20px;border:1px solid rgba(0,0,0,.1);border-radius:10px;padding:20px}.list-orders[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .order-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;display:inline;font-weight:700;color:#000}.list-orders[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .order-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#17a2b8;font-weight:400}.list-orders[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .order-title[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{text-align:center}.list-orders[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .order-title[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end}.list-orders[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin-left:-20px;margin-right:-20px}.list-orders[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]{border-right:1px solid rgba(0,0,0,.1)}.list-orders[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding-bottom:10px;font-weight:700;color:#000}.list-orders[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:grey;font-weight:400}.list-orders[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]{max-height:25vh;padding-top:10px;padding-bottom:10px;overflow:hidden;overflow-y:scroll}.list-orders[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:14px}.list-orders[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:75px;width:75px;margin-left:15px}.list-orders[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]{position:relative;top:50%;width:10px;height:10px;border-radius:50%}.list-orders[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{cursor:pointer}.list-orders[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.list-orders[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{color:#000;font-weight:700}.list-orders[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:grey}.list-orders[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{color:#17a2b8;font-weight:700}.list-orders[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{position:relative;top:50px}.list-orders[_ngcontent-%COMP%]   ngb-pagination[_ngcontent-%COMP%]     ul>li:not(.active)>a{background-color:#fff!important;border:none;color:grey}.list-orders[_ngcontent-%COMP%]   ngb-pagination[_ngcontent-%COMP%]     ul>li.active>a{background-color:#17a2b8!important;color:#fff!important;border-color:#dee2e6!important;border-radius:10px}"]}),n})();var D=e("C9XJ"),G=e("l7P3");function T(n,t){1&n&&s.Lb(0,"div",4)}function q(n,t){1&n&&(s.Pb(0,"span",19),s.Cc(1,"This field is required!"),s.Ob())}function U(n,t){if(1&n&&(s.Pb(0,"span"),s.Ac(1,q,2,0,"span",15),s.Ob()),2&n){const n=s.cc(2);s.xb(1),s.ic("ngIf",n.detailsForm.get("firstName").errors.required)}}function R(n,t){1&n&&(s.Pb(0,"span",19),s.Cc(1,"This field is required!"),s.Ob())}function $(n,t){if(1&n&&(s.Pb(0,"span"),s.Ac(1,R,2,0,"span",15),s.Ob()),2&n){const n=s.cc(2);s.xb(1),s.ic("ngIf",n.detailsForm.get("lastName").errors.required)}}function K(n,t){1&n&&(s.Pb(0,"span",19),s.Cc(1," Please enter a valid phone number! "),s.Ob())}function Z(n,t){if(1&n){const n=s.Qb();s.Pb(0,"div"),s.Pb(1,"form",5),s.ac("ngSubmit",(function(){return s.tc(n),s.cc().onSubmitDetailsForm()})),s.Pb(2,"div",6),s.Pb(3,"div",7),s.Pb(4,"div",8),s.Pb(5,"label",9),s.Cc(6,"NAME"),s.Ob(),s.Lb(7,"input",10),s.Ac(8,U,2,1,"span",3),s.Ob(),s.Ob(),s.Pb(9,"div",7),s.Pb(10,"div",8),s.Pb(11,"label",11),s.Cc(12,"SURNAME"),s.Ob(),s.Lb(13,"input",12),s.Ac(14,$,2,1,"span",3),s.Ob(),s.Ob(),s.Ob(),s.Pb(15,"div",6),s.Pb(16,"div",7),s.Pb(17,"div",8),s.Pb(18,"label",13),s.Cc(19,"PHONE NUMBER"),s.Ob(),s.Lb(20,"input",14),s.Ac(21,K,2,0,"span",15),s.Ob(),s.Ob(),s.Lb(22,"div",7),s.Ob(),s.Pb(23,"div",16),s.Pb(24,"div",17),s.Pb(25,"button",18),s.Cc(26," Update "),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()}if(2&n){const n=s.cc();s.xb(1),s.ic("formGroup",n.detailsForm),s.xb(6),s.ic("maxlength",52),s.xb(1),s.ic("ngIf",n.detailsForm.get("firstName").invalid&&n.detailsForm.get("firstName").touched),s.xb(5),s.ic("maxlength",52),s.xb(1),s.ic("ngIf",n.detailsForm.get("lastName").invalid&&n.detailsForm.get("lastName").touched),s.xb(6),s.ic("maxlength",12),s.xb(1),s.ic("ngIf",n.detailsForm.get("phone").invalid&&n.detailsForm.get("phone").touched),s.xb(4),s.ic("disabled",n.detailsForm.invalid||n.detailsForm.pending)}}let Q=(()=>{class n{constructor(n,t,e){this.accountService=n,this.store=t,this.router=e,this.innerLoading=!0}ngOnInit(){this.detailsForm=new a.d({firstName:new a.b(null,[a.r.pattern("^[a-zA-Z\\s]+$"),d.a,a.r.minLength(3),a.r.maxLength(52)]),lastName:new a.b(null,[a.r.pattern("^[a-zA-Z\\s]+$"),d.a,a.r.minLength(3),a.r.maxLength(52)]),phone:new a.b(null,[d.a,a.r.pattern("[0-9]+"),a.r.minLength(11),a.r.maxLength(12)])}),this.accountService.getUser().pipe(Object(b.a)(1),Object(l.a)(n=>(this.store.dispatch(new D.o),this.router.navigate(["/"]),Object(g.a)(n)))).subscribe(n=>{this.detailsForm.patchValue({firstName:n.firstName,lastName:n.lastName,phone:n.phone}),this.innerLoading=!1})}onSubmitDetailsForm(){var n,t,e,o,r,i,s,c;this.innerLoading=!0;const a={firstName:(null===(e=null===(t=null===(n=this.detailsForm.value)||void 0===n?void 0:n.firstName)||void 0===t?void 0:t.trim())||void 0===e?void 0:e.length)?this.detailsForm.value.firstName.trim():null,lastName:(null===(i=null===(r=null===(o=this.detailsForm.value)||void 0===o?void 0:o.lastName)||void 0===r?void 0:r.trim())||void 0===i?void 0:i.length)?this.detailsForm.value.lastName.trim():null,phone:(null===(c=null===(s=this.detailsForm.value)||void 0===s?void 0:s.phone)||void 0===c?void 0:c.length)?this.detailsForm.value.phone:null};this.accountService.updateUser(a).pipe(Object(b.a)(1),Object(l.a)(n=>(alert("An error occurred. Please refresh your page."),Object(g.a)(n)))).subscribe(n=>{this.innerLoading=!1,alert("Success! Your information has been changed.")})}}return n.\u0275fac=function(t){return new(t||n)(s.Kb(P.a),s.Kb(G.b),s.Kb(i.e))},n.\u0275cmp=s.Eb({type:n,selectors:[["app-reset-details"]],decls:7,vars:2,consts:[[1,"reset-details"],[1,"title"],["class","loader",4,"ngIf"],[4,"ngIf"],[1,"loader"],[3,"formGroup","ngSubmit"],[1,"info","row"],[1,"col-md-6"],[1,"form-group"],["for","firstName"],["type","text","id","firstName","name","firstName","formControlName","firstName",1,"form-control",3,"maxlength"],["for","lastName"],["type","text","id","lastName","name","lastName","formControlName","lastName",1,"form-control",3,"maxlength"],["for","phone"],["type","text","id","phone","name","phone","formControlName","phone",1,"form-control",3,"maxlength"],["class","alert-danger",4,"ngIf"],[1,"row","controls"],[1,"col-md-12"],["type","submit",1,"btn","btn-info",3,"disabled"],[1,"alert-danger"]],template:function(n,t){1&n&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"p"),s.Cc(3,"User Information"),s.Ob(),s.Ob(),s.Lb(4,"hr"),s.Ac(5,T,1,0,"div",2),s.Ac(6,Z,27,8,"div",3),s.Ob()),2&n&&(s.xb(5),s.ic("ngIf",t.innerLoading),s.xb(1),s.ic("ngIf",!t.innerLoading))},directives:[r.m,a.t,a.m,a.e,a.a,a.l,a.c,a.h],styles:[".reset-details[_ngcontent-%COMP%]{min-height:20vh}.reset-details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700;color:#000}.reset-details[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px;color:grey;font-weight:700}.reset-details[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:10px}.reset-details[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end}.reset-details[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;padding-left:35px;padding-right:35px;font-size:14px;border-radius:10px}"]}),n})();var Y=e("ok48");function J(n,t){1&n&&s.Lb(0,"div",4)}function H(n,t){1&n&&(s.Pb(0,"span",20),s.Cc(1,"This field is required!"),s.Ob())}function V(n,t){1&n&&(s.Pb(0,"span",20),s.Cc(1,"The password should at least be 6 digits!"),s.Ob())}function X(n,t){if(1&n&&(s.Pb(0,"span"),s.Ac(1,H,2,0,"span",19),s.Ac(2,V,2,0,"span",19),s.Ob()),2&n){const n=s.cc(2);s.xb(1),s.ic("ngIf",n.resetPasswordForm.get("oldPassword").errors.required),s.xb(1),s.ic("ngIf",n.resetPasswordForm.get("oldPassword").errors.minlength)}}function B(n,t){1&n&&(s.Pb(0,"span",20),s.Cc(1,"This field is required!"),s.Ob())}function W(n,t){1&n&&(s.Pb(0,"span",20),s.Cc(1,"The password should at least be 6 digits!"),s.Ob())}function nn(n,t){if(1&n&&(s.Pb(0,"span"),s.Ac(1,B,2,0,"span",19),s.Ac(2,W,2,0,"span",19),s.Ob()),2&n){const n=s.cc(2);s.xb(1),s.ic("ngIf",n.resetPasswordForm.get("newPasswordGroup.newPassword").errors.required),s.xb(1),s.ic("ngIf",n.resetPasswordForm.get("newPasswordGroup.newPassword").errors.minlength)}}function tn(n,t){1&n&&(s.Pb(0,"span",20),s.Cc(1,"The passwords must match!"),s.Ob())}function en(n,t){if(1&n&&(s.Pb(0,"span"),s.Ac(1,tn,2,0,"span",19),s.Ob()),2&n){const n=s.cc(2);s.xb(1),s.ic("ngIf",null!=n.resetPasswordForm.get("newPasswordGroup").errors&&n.resetPasswordForm.get("newPasswordGroup").errors.noMatch)}}function on(n,t){1&n&&(s.Pb(0,"span",20),s.Cc(1,"This field is required!"),s.Ob())}function rn(n,t){1&n&&(s.Pb(0,"span",20),s.Cc(1,"The password should at least be 6 digits!"),s.Ob())}function sn(n,t){if(1&n&&(s.Pb(0,"span"),s.Ac(1,on,2,0,"span",19),s.Ac(2,rn,2,0,"span",19),s.Ob()),2&n){const n=s.cc(2);s.xb(1),s.ic("ngIf",n.resetPasswordForm.get("newPasswordGroup.newPasswordConfirm").errors.required),s.xb(1),s.ic("ngIf",n.resetPasswordForm.get("newPasswordGroup.newPasswordConfirm").errors.minlength)}}function cn(n,t){if(1&n){const n=s.Qb();s.Pb(0,"div"),s.Pb(1,"form",5),s.ac("ngSubmit",(function(){return s.tc(n),s.cc().onSubmitResetPassword()})),s.Pb(2,"div",6),s.Pb(3,"div",7),s.Pb(4,"div",8),s.Pb(5,"label",9),s.Cc(6,"CURRENT PASSWORD"),s.Ob(),s.Lb(7,"input",10),s.Ac(8,X,3,2,"span",3),s.Ob(),s.Ob(),s.Ob(),s.Pb(9,"div",11),s.Pb(10,"div",7),s.Pb(11,"div",8),s.Lb(12,"label",12),s.Lb(13,"input",13),s.Ac(14,nn,3,2,"span",3),s.Ac(15,en,2,1,"span",3),s.Ob(),s.Ob(),s.Pb(16,"div",7),s.Pb(17,"div",8),s.Lb(18,"label",14),s.Lb(19,"input",15),s.Ac(20,sn,3,2,"span",3),s.Ob(),s.Ob(),s.Ob(),s.Pb(21,"div",16),s.Pb(22,"div",17),s.Pb(23,"button",18),s.Cc(24," Update "),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()}if(2&n){const n=s.cc();s.xb(1),s.ic("formGroup",n.resetPasswordForm),s.xb(6),s.ic("maxlength",140),s.xb(1),s.ic("ngIf",n.resetPasswordForm.get("oldPassword").invalid&&n.resetPasswordForm.get("oldPassword").touched),s.xb(5),s.ic("maxlength",140),s.xb(1),s.ic("ngIf",n.resetPasswordForm.get("newPasswordGroup.newPassword").invalid&&n.resetPasswordForm.get("newPasswordGroup.newPassword").touched),s.xb(1),s.ic("ngIf",n.resetPasswordForm.get("newPasswordGroup").invalid&&n.resetPasswordForm.get("newPasswordGroup").touched),s.xb(4),s.ic("maxlength",140),s.xb(1),s.ic("ngIf",n.resetPasswordForm.get("newPasswordGroup.newPasswordConfirm").invalid&&n.resetPasswordForm.get("newPasswordGroup.newPasswordConfirm").touched),s.xb(3),s.ic("disabled",n.resetPasswordForm.invalid||n.resetPasswordForm.pending)}}let an=(()=>{class n{constructor(n){this.accountService=n,this.innerLoading=!1}ngOnInit(){this.resetPasswordForm=new a.d({oldPassword:new a.b(null,[a.r.required,d.a,a.r.minLength(6),a.r.maxLength(52)]),newPasswordGroup:new a.d({newPassword:new a.b(null,[a.r.required,d.a,a.r.minLength(6),a.r.maxLength(52)]),newPasswordConfirm:new a.b(null,[a.r.required,d.a,a.r.minLength(6)])},Y.a)})}onSubmitResetPassword(){this.innerLoading=!0,this.accountService.resetPassword(this.resetPasswordForm.value.oldPassword,this.resetPasswordForm.value.newPasswordGroup.newPassword,this.resetPasswordForm.value.newPasswordGroup.newPasswordConfirm).pipe(Object(b.a)(1),Object(l.a)(n=>(this.innerLoading=!1,alert("Error resetting password. Please try again."),Object(g.a)(n)))).subscribe(n=>{this.innerLoading=!1,alert("Success! Your password has been changed."),this.resetPasswordForm.reset()})}}return n.\u0275fac=function(t){return new(t||n)(s.Kb(P.a))},n.\u0275cmp=s.Eb({type:n,selectors:[["app-reset-password"]],decls:7,vars:2,consts:[[1,"reset-password"],[1,"title"],["class","loader",4,"ngIf"],[4,"ngIf"],[1,"loader"],[3,"formGroup","ngSubmit"],[1,"info","row"],[1,"col-md-6"],[1,"form-group"],["for","oldPassword"],["type","password","id","oldPassword","name","oldPassword","placeholder","Password","formControlName","oldPassword",1,"form-control",3,"maxlength"],["formGroupName","newPasswordGroup",1,"info","row"],["for","newPassword"],["type","password","id","newPassword","name","newPassword","placeholder","New Password","formControlName","newPassword",1,"form-control",3,"maxlength"],["for","newPasswordConfirm"],["type","password","id","newPasswordConfirm","name","newPasswordConfirm","placeholder","New Password Again","formControlName","newPasswordConfirm",1,"form-control",3,"maxlength"],[1,"row","controls"],[1,"col-md-12"],["type","submit",1,"btn","btn-info",3,"disabled"],["class","alert-danger",4,"ngIf"],[1,"alert-danger"]],template:function(n,t){1&n&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"p"),s.Cc(3,"Change Password"),s.Ob(),s.Ob(),s.Lb(4,"hr"),s.Ac(5,J,1,0,"div",2),s.Ac(6,cn,25,9,"div",3),s.Ob()),2&n&&(s.xb(5),s.ic("ngIf",t.innerLoading),s.xb(1),s.ic("ngIf",!t.innerLoading))},directives:[r.m,a.t,a.m,a.e,a.a,a.l,a.c,a.h,a.f],styles:[".reset-password[_ngcontent-%COMP%]{position:relative;top:50px;min-height:20vh}.reset-password[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700;color:#000}.reset-password[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px;color:grey;font-weight:700}.reset-password[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:10px}.reset-password[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end}.reset-password[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;padding-left:35px;padding-right:35px;font-size:14px;border-radius:10px}"]}),n})();const dn=[{path:"",component:M,canActivate:[o.a],children:[{path:"",redirectTo:"information",pathMatch:"full"},{path:"information",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Eb({type:n,selectors:[["app-information"]],decls:7,vars:0,consts:[[1,"information","container"],[1,"row"],[1,"col-md-12"]],template:function(n,t){1&n&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Lb(3,"app-reset-details"),s.Ob(),s.Ob(),s.Pb(4,"div",1),s.Pb(5,"div",2),s.Lb(6,"app-reset-password"),s.Ob(),s.Ob(),s.Ob())},directives:[Q,an],styles:[""]}),n})()},{path:"orders",component:E},{path:"address",component:w},{path:"help",component:c}]}];let bn=(()=>{class n{}return n.\u0275mod=s.Ib({type:n}),n.\u0275inj=s.Hb({factory:function(t){return new(t||n)},providers:[o.a],imports:[[r.c,i.h.forChild(dn),a.p,y.g]]}),n})()}}]);