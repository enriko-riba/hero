webpackJsonp([0],{"4gqy":function(n,l,o){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=o("WT6e"),e=function(){},i=o("Xjw4"),u=o("D5JD"),c=o("bfOx"),r=o("QXGy"),a=function(){function n(n,l,o,t){this.router=n,this.route=l,this.client=o,this.loginSvc=t,this.canClick=!1}return n.prototype.ngOnInit=function(){},n.prototype.startClick=function(){console.log("start..., token is:",this.loginSvc.token),this.client.initSocket(),this.router.navigate(["character/stats"])},n.prototype.signoutClick=function(){this.loginSvc.signOut()},n}(),s=t._0({encapsulation:0,styles:[[".menu[_ngcontent-%COMP%]{padding-top:10px}.card[_ngcontent-%COMP%]{background-color:#3b62b8cc;margin:10px;border:2px solid #eee69f;height:65px;width:65px;border-radius:45px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer}.card[_ngcontent-%COMP%]:focus{outline:0}.disabled[_ngcontent-%COMP%]{border:none;opacity:.6}"]],data:{}});function g(n){return t._20(0,[(n()(),t._2(0,0,null,null,12,"div",[["class","flex-container row menu"]],null,null,null,null,null)),(n()(),t._18(-1,null,["\n  "])),(n()(),t._2(2,0,null,null,3,"button",[["class","card"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.startClick()&&t),t},null,null)),t._1(3,278528,null,0,i.i,[t.q,t.r,t.k,t.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._14(4,{disabled:0}),(n()(),t._18(-1,null,["Start"])),(n()(),t._18(-1,null,["\n  "])),(n()(),t._2(7,0,null,null,3,"button",[["class","card"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.signoutClick()&&t),t},null,null)),t._1(8,278528,null,0,i.i,[t.q,t.r,t.k,t.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._14(9,{disabled:0}),(n()(),t._18(-1,null,["Signout"])),(n()(),t._18(-1,null,["\n  "])),(n()(),t._18(-1,null,["\n"])),(n()(),t._18(-1,null,["!"]))],function(n,l){var o=l.component;n(l,3,0,"card",n(l,4,0,!o.canClick)),n(l,8,0,"card",n(l,9,0,!o.canClick))},function(n,l){var o=l.component;n(l,2,0,!o.canClick),n(l,7,0,!o.canClick)})}var b=function(){function n(n){this.loginSvc=n,this.isGoogleButtonEnabled=!1,this.googleText="Google loading...",this.isFbButtonEnabled=!1,this.fbText="FB loading...",this.isMenuVisible=!1,this.statusText="Sign-in required!"}return n.prototype.ngOnInit=function(){var n=this;this.loginSvc.authStatus.subscribe(function(l){return n.handleProviderChange(l)}),this.loginSvc.googleStatus.subscribe(function(l){return n.handleGoogleAccountChange(l)});var l=this;this.loginSvc.googleLoadedPromise.then(function(){return setTimeout(l.signInGoogle.bind(l),1e3)})},n.prototype.handleProviderChange=function(n){n===u.b.None?(this.statusText="Sign-in required!",this.isMenuVisible=!1):this.isMenuVisible=!0},n.prototype.handleGoogleAccountChange=function(n){if(this.isGoogleButtonEnabled=n!=u.d.Initializing,n===u.d.SignedOut)this.googleText="Sign in with Google";else if(n===u.d.SignedIn){var l=this.loginSvc.googleAuthObject.currentUser.get().getBasicProfile();this.googleText="Continue as "+l.getName(),this.statusText="Hi "+l.getName()}},n.prototype.signInGoogle=function(){var n=this;console.log("Google sign in..."),this.isMenuVisible=!1,this.loginSvc.signInGoogle().then(function(l){n.statusText="Hi "+l.getBasicProfile().getName(),n.isMenuVisible=!0},function(n){console.error(n)})},n.prototype.signOutGoogle=function(){gapi.auth2.getAuthInstance().signOut().then(function(){console.log("User signed out.")})},n.prototype.signInFacebook=function(){},n}(),d=t._0({encapsulation:0,styles:[['.dashboard[_ngcontent-%COMP%]{height:100vh;background-image:url(cover.140e645efee9d3939e55.jpg);background-position:center;background-size:cover;background-repeat:no-repeat}.status[_ngcontent-%COMP%]{margin:50px 10px 15px;font-size:30px;text-align:center;color:#eee69f;background-color:#3b62b8cc;padding:20px}.sign-in[_ngcontent-%COMP%]{width:100%;margin:5px 10px 2px;padding:2px;font-size:24px;text-align:center;color:#eee69f;background-color:#3b62b8cc;border-color:#eee69f}.loginBtn[_ngcontent-%COMP%]{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;width:100%;padding:0 15px 0 46px;border:none;text-align:left;line-height:44px;white-space:nowrap;border-radius:.2em;color:#fff;cursor:pointer}.loginBtn[_ngcontent-%COMP%]:disabled{color:#b3b3b3;border:none;cursor:default}.loginBtn[_ngcontent-%COMP%]:before{content:"";-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;top:0;left:0;width:34px;height:100%}.loginBtn[_ngcontent-%COMP%]:focus{outline:0}.loginBtn[_ngcontent-%COMP%]:active{-webkit-box-shadow:inset 0 0 0 32px rgba(0,0,0,.1);box-shadow:inset 0 0 0 32px rgba(0,0,0,.1)}.loginBtn--facebook[_ngcontent-%COMP%]{background-color:#4c69ba;background-image:-webkit-gradient(linear,left top,left bottom,from(#4c69ba),to(#3b55a0));background-image:linear-gradient(#4c69ba,#3b55a0);font-family:"Helvetica neue",Helvetica Neue,Helvetica,Arial,sans-serif;text-shadow:0 -1px 0 #354c8c}.loginBtn--facebook[_ngcontent-%COMP%]:before{border-right:1px solid #364e92;background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png) 6px 6px no-repeat}.loginBtn--facebook[_ngcontent-%COMP%]:focus, .loginBtn--facebook[_ngcontent-%COMP%]:hover{background-color:#5b7bd5;background-image:-webkit-gradient(linear,left top,left bottom,from(#5b7bd5),to(#4864b1));background-image:linear-gradient(#5b7bd5,#4864b1)}.loginBtn--google[_ngcontent-%COMP%]{font-family:Roboto,Roboto,arial,sans-serif;background:#dd4b39}.loginBtn--google[_ngcontent-%COMP%]:before{border-right:1px solid #bb3f30;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4yMfEgaZUAAAOVSURBVEhL5ZRZTBNBGMd9wePBN43xzTefDMaIikRALsWrRCKCeAQjJsRoeAAP1KiJoiFKNJqowSsQ5aonXrVcwcRClCBqEWOMRK21u4W20t3t7szOOrVjO7vdLUTjg/GX/9N+O9/v25nJTlD+Mv+JAAUC8sgwdDrgl0/Q8Rm6nLJnRAESKcdkDAEcZvnbjd6DZcNb81hTGpOVyGQnsblZI9vyfUcrhId3kMCTVw0wFKCAILQ+cheamKxFTHqCfpYljmwrEF90KxCQZVHoC2Svx3fiUHBeTUe9sKtT/bU1CkJksRodAd5fT+l2JmOhppFhlidx5hvjFeCdCc6eqe3uXrfcW1H6vbry+8mjnj072bWZpJS5CI+PbwFZH4VWIHQ80Ww6uzJ59MJp2c1itwIAwhF4+PWLr/IguyqFa6zDD8liPVQCJLq8+1KZjEh3d152oKtN//ORLL3sRaLh7CFUAtlxTXow1Vc+i8maH5w9OwlfJKPNHSeUQBbgqwLQGgcsE/1VM9058Z69u/CGkOrvQgnEb8A2JyjAscYJ12dAxztSouj7CGNlCHo41RdHBIj/CDqnEUFrHOxJUICP1CjSjvljx9Kv+oVQAu49aJscEfSZFMiRGoWmXXQabCJ9ahrBFEqw+vcEtU8lA4EwBDpnRAS2uQrwkhqFpl107vUC+hDoQ2Zg97xQ94B1Ypdl9jv2NSlR1D0VNSm5woe7Z1T6uwZVF48SIAm+KcLdeeuk6rvxKY2mTZbdEhzjpy/LaPN5LizIqeYGHJDUfkIJ8Dd8rR+yTi+/lbigYe38htzEpvXXB1sgUi2ggbLS3COl/+qOU3SR9/EG1xQDJN+ux8UJDbm4eyjJ5o03BluQoloTpnMAmE5FuuPUdIik9guVANPt7F9iLgwLcBY0rqt4Vt3PDjL8sF/ifeKok2Nfsm8PdZ9Nrbm89Lgr3L3gHDcqaEfRCiQZnOmrxU1pB06yuTD3wc4tT/YUWspy7u9Iubkp+Lw+b+HV/alVH3D3FVX+Nrvq/oTQCjA8CBywncYHQAtiJKFue/qZFxdaA/hIotERYHggXLI3L27K1/TSDT6n+oF2UWf6IPoCDEKo12UvbjtAdkMveN+KrPtszj78MlkWhaEghF/iehl7zZumHR1Hsu8WL27OX2LesKalpKT98GW7+bnrNf5W8qoBYwhCyAgBGYqyJMJgJFkCMogxNc24BH/Cvy5QlB8RAzCWUrcEnwAAAABJRU5ErkJggg==) 6px 6px/30px no-repeat}.loginBtn--google[_ngcontent-%COMP%]:focus, .loginBtn--google[_ngcontent-%COMP%]:hover{background:#e74b37}']],data:{}});function p(n){return t._20(0,[(n()(),t._2(0,0,null,null,4,"div",[["class","sign-in"]],null,null,null,null,null)),(n()(),t._18(-1,null,["\n      "])),(n()(),t._2(2,0,null,null,1,"button",[["class","loginBtn loginBtn--google"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.signInGoogle()&&t),t},null,null)),(n()(),t._18(3,null,["",""])),(n()(),t._18(-1,null,["\n    "]))],null,function(n,l){var o=l.component;n(l,2,0,!o.isGoogleButtonEnabled),n(l,3,0,o.googleText)})}function f(n){return t._20(0,[(n()(),t._2(0,0,null,null,4,"div",[["class","sign-in"]],null,null,null,null,null)),(n()(),t._18(-1,null,["\n      "])),(n()(),t._2(2,0,null,null,1,"button",[["class","loginBtn loginBtn--facebook"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.signInFacebook()&&t),t},null,null)),(n()(),t._18(3,null,["",""])),(n()(),t._18(-1,null,["\n    "]))],null,function(n,l){var o=l.component;n(l,2,0,!o.isFbButtonEnabled),n(l,3,0,o.fbText)})}function h(n){return t._20(0,[(n()(),t._2(0,0,null,null,16,"div",[["class","dashboard"]],null,null,null,null,null)),(n()(),t._18(-1,null,["\n\n  "])),(n()(),t._2(2,0,null,null,1,"menulist",[],null,null,null,g,s)),t._1(3,114688,null,0,a,[c.k,c.a,r.a,u.c],{canClick:[0,"canClick"]},null),(n()(),t._18(-1,null,["\n\n  "])),(n()(),t._2(5,0,null,null,10,"div",[["class","flex-container row"]],null,null,null,null,null)),(n()(),t._18(-1,null,["\n    "])),(n()(),t._2(7,0,null,null,1,"div",[["class","status"]],null,null,null,null,null)),(n()(),t._18(8,null,["",""])),(n()(),t._18(-1,null,["\n    "])),(n()(),t.X(16777216,null,null,1,null,p)),t._1(11,16384,null,0,i.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t._18(-1,null,["\n    "])),(n()(),t.X(16777216,null,null,1,null,f)),t._1(14,16384,null,0,i.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t._18(-1,null,["\n  "])),(n()(),t._18(-1,null,["\n"]))],function(n,l){var o=l.component;n(l,3,0,o.isMenuVisible),n(l,11,0,!o.isMenuVisible),n(l,14,0,!o.isMenuVisible)},function(n,l){n(l,8,0,l.component.statusText)})}var x=t.Y("app-dashboard",b,function(n){return t._20(0,[(n()(),t._2(0,0,null,null,1,"app-dashboard",[],null,null,null,h,d)),t._1(1,114688,null,0,b,[u.c],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),k=function(){};o.d(l,"DashModuleNgFactory",function(){return _});var _=t.Z(e,[],function(n){return t._8([t._9(512,t.j,t.V,[[8,[x]],[3,t.j],t.v]),t._9(4608,i.l,i.k,[t.s,[2,i.q]]),t._9(512,i.b,i.b,[]),t._9(512,c.l,c.l,[[2,c.q],[2,c.k]]),t._9(512,k,k,[]),t._9(512,e,e,[]),t._9(1024,c.i,function(){return[[{path:"",component:b}]]},[])])})}});