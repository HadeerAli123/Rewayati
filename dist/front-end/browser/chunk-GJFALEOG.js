import{a as I}from"./chunk-KEB5ZY3L.js";import{a as _,b,c as O,e as w,g as P,i as k}from"./chunk-W3C7AKPZ.js";import{a as F}from"./chunk-IJMMPBSN.js";import"./chunk-5LRLNLMG.js";import"./chunk-BCOK47RC.js";import{a as E,c as R}from"./chunk-2OPUPMLU.js";import"./chunk-TJXMHTLD.js";import{a as h,d as C,f as M}from"./chunk-BNBCP7ER.js";import"./chunk-FAX5B2RI.js";import{$b as d,Cb as e,Db as o,Eb as r,Qb as f,Rb as p,Tc as x,Wa as g,Xc as S,Za as n,Zb as a,_a as c,_b as s,ec as y,ga as l,ob as u,tb as v}from"./chunk-OHLU4CVY.js";import"./chunk-GAL4ENT6.js";function A(m,i){if(m&1&&(e(0,"div",4)(1,"mat-card",5),r(2,"img",6),e(3,"mat-card-content",7)(4,"a")(5,"p",8),a(6),o()(),e(7,"div",9)(8,"div")(9,"span"),r(10,"img",10),e(11,"span",11),a(12),o()()(),e(13,"div",12)(14,"span"),r(15,"img",13),e(16,"span",11),a(17),o()()(),e(18,"div",12)(19,"span"),r(20,"img",14),e(21,"span",15),a(22),o()()(),e(23,"div",12)(24,"span"),r(25,"img",16),e(26,"span",15),a(27),o()()()()(),e(28,"mat-card-actions")(29,"div")(30,"button",17),a(31,"Read Now"),o()()()()()),m&2){let t=i.$implicit;n(),p("routerLink","/story/",t.id,"/details"),n(),f("src",t.cover_image,g),n(),p("routerLink","/story/",t.id,"/details"),n(3),d("",t.title,"."),n(6),s(t.readers_count),n(5),d(" ",t.votes_count,""),n(5),s(t.comments_count),n(5),s(t.chapters_count)}}var L=class m{constructor(i,t){this.activatedRoute=i;this.storyService=t}stories=[];tagId=0;categoryId=0;ngOnInit(){this.activatedRoute.params.subscribe(i=>{this.categoryId=i.category_id}),this.storyService.getStoriesByCategory(this.categoryId).subscribe({next:i=>{console.log("by category",i),this.stories=i},error:i=>{console.log(i)}})}static \u0275fac=function(t){return new(t||m)(c(h),c(F))};static \u0275cmp=l({type:m,selectors:[["app-stories"]],standalone:!0,features:[y],decls:5,vars:1,consts:[[1,"container","my-5"],[1,"container"],[1,"row","m-3"],["class","col-md-3 my-2",4,"ngFor","ngForOf"],[1,"col-md-3","my-2"],["appearance","outlined",3,"routerLink"],["mat-card-image","","alt","cover_image",1,"story-img","m-2",3,"src"],[1,"pt-2",3,"routerLink"],["mat-card-title","",1,"py-2","title"],[1,"d-flex","justify-content-start"],["src","images/reading-book.png","alt","",2,"height","20px","width","20px"],[2,"padding-left","3px","font-size","12px"],[1,"ps-2"],["src","images/feedback.png","alt","",2,"height","20px","width","20px"],["src","images/feedback-2.png","alt","",2,"height","20px","width","20px"],[2,"font-size","12px"],["src","images/chapter.png","alt","",2,"height","13px","width","20px"],["mat-button",""]],template:function(t,z){t&1&&(e(0,"div",0),r(1,"app-category-carousel"),o(),e(2,"div",1)(3,"div",2),u(4,A,32,10,"div",3),o()()),t&2&&(n(4),v("ngForOf",z.stories))},dependencies:[M,C,R,E,k,_,w,O,P,b,S,x,I],styles:[".container[_ngcontent-%COMP%]{margin:50px}mat-card[_ngcontent-%COMP%]{cursor:pointer}a[_ngcontent-%COMP%]{color:#282827;text-decoration:none}.title[_ngcontent-%COMP%]{font-size:16px;font-weight:500}mat-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 8px #00000080}img.story-img[_ngcontent-%COMP%]{max-height:170px;min-height:170px}"]})};export{L as StoriesComponent};