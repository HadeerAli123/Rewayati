import './polyfills.server.mjs';
import{a as B,b as D}from"./chunk-2TNK437T.mjs";import{a as J,b as K}from"./chunk-GPWFGHYN.mjs";import{b as j,c as L,d as Z,g as U,h as H}from"./chunk-JJJL62AU.mjs";import{a as E}from"./chunk-KA3EQVIX.mjs";import{b as N,d,g as O,h as k,m as q,o as A,p as T,q as V,s as z,u as G}from"./chunk-ZGHL4WF5.mjs";import"./chunk-5LTXXU3Y.mjs";import{c as $}from"./chunk-KLCAW5LL.mjs";import"./chunk-67HAECRY.mjs";import{a as S,d as I,g as R}from"./chunk-APY6NCEA.mjs";import"./chunk-NP6UCXIG.mjs";import{$a as s,$b as m,Eb as n,Fb as r,Gb as g,Kb as x,Nb as c,Pb as h,ab as p,bc as _,bd as M,ed as F,ga as C,gc as y,qa as v,qb as u,ra as b,vb as l}from"./chunk-JFMF6S6U.mjs";import"./chunk-5XUXGTUW.mjs";function W(o,t){o&1&&(n(0,"mat-error"),m(1," Current Password is required "),r())}function X(o,t){o&1&&(n(0,"mat-error"),m(1," Current password must be at least 8 characters long. "),r())}function Y(o,t){if(o&1){let a=x();n(0,"mat-form-field",5)(1,"mat-label"),m(2,"current Password"),r(),g(3,"input",12),n(4,"mat-icon",7),c("click",function(){v(a);let i=h();return b(i.togglePasswordVisibility("current"))}),m(5),r(),u(6,W,2,0,"mat-error",8)(7,X,2,0,"mat-error",8),r()}if(o&2){let a,e,i=h();s(3),l("type",i.hideCurrentPassword?"password":"text"),s(2),_(" ",i.hideCurrentPassword?"visibility_off":"visibility"," "),s(),l("ngIf",((a=i.passwordForm.get("currentPassword"))==null?null:a.touched)&&((a=i.passwordForm.get("currentPassword"))==null?null:a.hasError("required"))),s(),l("ngIf",((e=i.passwordForm.get("currentPassword"))==null?null:e.touched)&&((e=i.passwordForm.get("currentPassword"))==null?null:e.hasError("minlength")))}}function ee(o,t){o&1&&(n(0,"mat-error"),m(1," New Password is required "),r())}function te(o,t){o&1&&(n(0,"mat-error"),m(1," New password must be at least 8 characters long. "),r())}function re(o,t){o&1&&(n(0,"mat-error"),m(1," Confirm Password is required "),r())}function oe(o,t){o&1&&(n(0,"mat-error"),m(1," New password and confirm password do not match. "),r())}var Q=class o{constructor(t,a,e,i){this.fb=t;this.router=a;this.authService=e;this.activateRoute=i;this.passwordForm=this.fb.group({currentPassword:["",[d.required,d.minLength(8)]],newPassword:["",[d.required,d.minLength(8),d.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$")]],confirmPassword:["",[d.required,d.minLength(8),d.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$")]]},{validator:this.passwordMatchValidator})}passwordForm;hideCurrentPassword=!0;hideNewPassword=!0;hideConfirmPassword=!0;ngOnInit(){this.activateRoute.queryParams.subscribe(t=>{console.log("params",t)})}togglePasswordVisibility(t){t==="current"?this.hideCurrentPassword=!this.hideCurrentPassword:t==="new"?this.hideNewPassword=!this.hideNewPassword:t==="confirm"&&(this.hideConfirmPassword=!this.hideConfirmPassword)}passwordMatchValidator(t){let a=t.get("newPassword")?.value,e=t.get("confirmPassword")?.value;return a&&e&&a!==e?{passwordMismatch:!0}:null}onSubmit(){if(this.passwordForm.invalid){this.passwordForm.markAllAsTouched(),console.log("Form is invalid");return}this.authService.resetPassword({email:"",password:this.passwordForm.value.newPassword}).subscribe({next:t=>{console.log("res",t),this.router.navigateByUrl("/auth/login")},error:t=>{console.log(t)}}),console.log("Form submitted successfully")}static \u0275fac=function(a){return new(a||o)(p(z),p(I),p(E),p(S))};static \u0275cmp=C({type:o,selectors:[["app-reset-password"]],standalone:!0,features:[y],decls:25,vars:10,consts:[[1,"password","my-5","m-auto","shadow","bg-white"],[1,"title","mb-3"],[1,"container"],[3,"ngSubmit","formGroup"],["appearance","outline",4,"ngIf"],["appearance","outline"],["matInput","","formControlName","newPassword","name","newPassword","placeholder","New password","required","",3,"type"],["matSuffix","",3,"click"],[4,"ngIf"],["matInput","","formControlName","confirmPassword","name","confirmPassword","placeholder","Confirm password","required","",3,"type"],[1,"text-center"],["type","submit",1,"btn"],["matInput","","formControlName","currentPassword","name","currentPassword","placeholder","Current password","required","",3,"type"]],template:function(a,e){if(a&1&&(n(0,"div",0)(1,"h5",1),m(2,"create new password"),r(),n(3,"div",2)(4,"form",3),c("ngSubmit",function(){return e.onSubmit()}),u(5,Y,8,4,"mat-form-field",4),n(6,"mat-form-field",5)(7,"mat-label"),m(8,"New Password"),r(),g(9,"input",6),n(10,"mat-icon",7),c("click",function(){return e.togglePasswordVisibility("new")}),m(11),r(),u(12,ee,2,0,"mat-error",8)(13,te,2,0,"mat-error",8),r(),n(14,"mat-form-field",5)(15,"mat-label"),m(16,"Confirm New Password"),r(),g(17,"input",9),n(18,"mat-icon",7),c("click",function(){return e.togglePasswordVisibility("confirm")}),m(19),r(),u(20,re,2,0,"mat-error",8)(21,oe,2,0,"mat-error",8),r(),n(22,"div",10)(23,"button",11),m(24,"Change Password"),r()()()()()),a&2){let i,f,w,P;s(4),l("formGroup",e.passwordForm),s(),l("ngIf",!e.router.url.includes("auth")),s(4),l("type",e.hideNewPassword?"password":"text"),s(2),_(" ",e.hideNewPassword?"visibility_off":"visibility"," "),s(),l("ngIf",((i=e.passwordForm.get("newPassword"))==null?null:i.touched)&&((i=e.passwordForm.get("newPassword"))==null?null:i.hasError("required"))),s(),l("ngIf",((f=e.passwordForm.get("newPassword"))==null?null:f.touched)&&((f=e.passwordForm.get("newPassword"))==null?null:f.hasError("minlength"))),s(4),l("type",e.hideConfirmPassword?"password":"text"),s(2),_(" ",e.hideConfirmPassword?"visibility_off":"visibility"," "),s(),l("ngIf",((w=e.passwordForm.get("confirmPassword"))==null?null:w.touched)&&((w=e.passwordForm.get("confirmPassword"))==null?null:w.hasError("required"))),s(),l("ngIf",e.passwordForm.hasError("passwordMismatch")&&((P=e.passwordForm.get("confirmPassword"))==null?null:P.touched))}},dependencies:[F,M,R,H,U,j,L,Z,K,J,G,q,N,O,k,V,A,T,$,D,B],styles:[".password[_ngcontent-%COMP%]{max-width:500px;margin:50px auto;position:relative;box-shadow:0 10px 30px #0000001a;padding:30px}.password[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-transform:uppercase;text-align:center;letter-spacing:3px;font-size:1.5em;line-height:48px;padding-bottom:20px;color:#f87f27;background:linear-gradient(to right,#f87f27,#262628);background-clip:text;-webkit-text-fill-color:transparent}.password-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{position:relative;margin:20px 0}.btn[_ngcontent-%COMP%]{background-color:#f87f27;font-size:16px;line-height:26px;font-weight:500;color:#fff;margin:25px 0;padding:5px 15px}.btn[_ngcontent-%COMP%]:hover{background-color:#262628;color:#fff}.password-form[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{color:#262628;font-size:18px;font-weight:500;margin-bottom:10px;padding-bottom:5px}.password-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] + mat-form-field[_ngcontent-%COMP%]{margin-left:8px;color:#262628!important;height:50px;background-color:#fff}mat-form-field[_ngcontent-%COMP%]{width:100%;border-color:#262628;margin-bottom:10px}"]})};export{Q as ResetPasswordComponent};
