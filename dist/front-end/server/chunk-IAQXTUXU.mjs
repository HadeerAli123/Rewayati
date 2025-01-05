import './polyfills.server.mjs';
import{a as o}from"./chunk-76K5FOAY.mjs";import"./chunk-KA3EQVIX.mjs";import{g as r}from"./chunk-APY6NCEA.mjs";import"./chunk-NP6UCXIG.mjs";import{Z as a,ed as n,ha as e}from"./chunk-JFMF6S6U.mjs";import"./chunk-5XUXGTUW.mjs";var i=[{path:"",canActivate:[o],data:{role:"admin"},loadComponent:()=>import("./chunk-BDVJPMVS.mjs").then(t=>t.AdminComponent),children:[{path:"users",canActivate:[o],data:{role:"admin"},loadComponent:()=>import("./chunk-EV2A3RRF.mjs").then(t=>t.UsersComponent)},{path:"categories",canActivate:[o],data:{role:"admin"},loadComponent:()=>import("./chunk-J6E3TRST.mjs").then(t=>t.ShowAllCategoriesComponent)},{path:"category/create",canActivate:[o],data:{role:"admin"},loadComponent:()=>import("./chunk-VHF5QLET.mjs").then(t=>t.CreateCategoryComponent)},{path:"category/update/:id",canActivate:[o],data:{role:"admin"},loadComponent:()=>import("./chunk-VHF5QLET.mjs").then(t=>t.CreateCategoryComponent)},{path:"chapter/create",canActivate:[o],data:{role:"admin"},loadComponent:()=>import("./chunk-JGZCDIOV.mjs").then(t=>t.CreateChapterComponent)},{path:"chapter/edit",canActivate:[o],data:{role:"admin"},loadComponent:()=>import("./chunk-JGZCDIOV.mjs").then(t=>t.CreateChapterComponent)},{path:"stories",canActivate:[o],data:{role:"admin"},loadComponent:()=>import("./chunk-FLYSDNTA.mjs").then(t=>t.StoriesListComponent)},{path:"deleted-stories",canActivate:[o],data:{role:"admin"},loadComponent:()=>import("./chunk-FLYSDNTA.mjs").then(t=>t.StoriesListComponent)},{path:"story/create",canActivate:[o],data:{role:"admin"},loadComponent:()=>import("./chunk-XR76WH4G.mjs").then(t=>t.CreateStoryComponent)},{path:"story/edit",canActivate:[o],data:{role:"admin"},loadComponent:()=>import("./chunk-XR76WH4G.mjs").then(t=>t.CreateStoryComponent)},{path:"tags/:categoryId",canActivate:[o],data:{role:"admin"},loadComponent:()=>import("./chunk-HMCWX64Q.mjs").then(t=>t.TagsComponent)},{path:"reviews",canActivate:[o],data:{role:"admin"},loadComponent:()=>import("./chunk-7AMLK7ND.mjs").then(t=>t.ReviewsComponent)},{path:"start-reading",canActivate:[o],data:{role:"admin"},loadComponent:()=>import("./chunk-H7KPMHC7.mjs").then(t=>t.StartReadingComponent)},{path:"reading-later",canActivate:[o],data:{role:"admin"},loadComponent:()=>import("./chunk-TD7HZP7A.mjs").then(t=>t.ReadingLaterComponent)},{path:"contacts",canActivate:[o],data:{role:"admin"},loadComponent:()=>import("./chunk-NEGSQ3DJ.mjs").then(t=>t.ContactComponent)}]}];var m=class t{static \u0275fac=function(p){return new(p||t)};static \u0275mod=e({type:t});static \u0275inj=a({imports:[n,r.forChild(i)]})};export{m as AdminModule};
