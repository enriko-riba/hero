webpackJsonp([0],{"4gqy":function(n,l,o){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=o("WT6e"),e=function(){},i=o("Xjw4"),u=o("bfOx"),a=o("QXGy"),c=function(){function n(n,l,o){this.router=n,this.route=l,this.client=o,this.canClick=!1}return n.prototype.ngOnInit=function(){},n.prototype.startClick=function(){console.log("start..."),this.client.initSocket(),this.router.navigate(["character/stats"])},n}(),s=t.Y({encapsulation:0,styles:[[".menu[_ngcontent-%COMP%]{padding-top:100px}.card[_ngcontent-%COMP%]{background-color:#3b62b8cc;margin:10px;border:2px solid #eee69f;height:65px;width:65px;border-radius:45px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.card[_ngcontent-%COMP%]:focus{outline:0}.disabled[_ngcontent-%COMP%]{border:none;opacity:.6}"]],data:{}});function r(n){return t._14(0,[(n()(),t._0(0,0,null,null,21,"div",[["class","flex-container row menu"]],null,null,null,null,null)),(n()(),t._13(-1,null,["\n  "])),(n()(),t._0(2,0,null,null,3,"button",[["class","card"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.startClick()&&t),t},null,null)),t.Z(3,278528,null,0,i.h,[t.q,t.r,t.k,t.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._10(4,{disabled:0}),(n()(),t._13(-1,null,["Start"])),(n()(),t._13(-1,null,["\n  "])),(n()(),t._0(7,0,null,null,3,"button",[["class","card"]],[[8,"disabled",0]],null,null,null,null)),t.Z(8,278528,null,0,i.h,[t.q,t.r,t.k,t.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._10(9,{disabled:0}),(n()(),t._13(-1,null,["i2"])),(n()(),t._13(-1,null,["\n  "])),(n()(),t._0(12,0,null,null,3,"button",[["class","card"]],[[8,"disabled",0]],null,null,null,null)),t.Z(13,278528,null,0,i.h,[t.q,t.r,t.k,t.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._10(14,{disabled:0}),(n()(),t._13(-1,null,["i3"])),(n()(),t._13(-1,null,["\n  "])),(n()(),t._0(17,0,null,null,3,"button",[["class","card"]],[[8,"disabled",0]],null,null,null,null)),t.Z(18,278528,null,0,i.h,[t.q,t.r,t.k,t.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._10(19,{disabled:0}),(n()(),t._13(-1,null,["i4"])),(n()(),t._13(-1,null,["\n"])),(n()(),t._13(-1,null,["!"]))],function(n,l){var o=l.component;n(l,3,0,"card",n(l,4,0,!o.canClick)),n(l,8,0,"card",n(l,9,0,!o.canClick)),n(l,13,0,"card",n(l,14,0,!o.canClick)),n(l,18,0,"card",n(l,19,0,!o.canClick))},function(n,l){var o=l.component;n(l,2,0,!o.canClick),n(l,7,0,!o.canClick),n(l,12,0,!o.canClick),n(l,17,0,!o.canClick)})}var g=o("D5JD"),b=function(){function n(n){this.loginSvc=n,this.isGoogleButtonEnabled=!1,this.googleText="Google loading...",this.isFbButtonEnabled=!1,this.fbText="FB loading...",this.isMenuVisible=!1,this.statusText="Sign-in required!"}return n.prototype.ngOnInit=function(){var n=this;this.loginSvc.googleStatusState.subscribe(function(l){console.log("Google status:",l),n.isGoogleButtonEnabled=l!=g.b.Initializing,l===g.b.SignedOut?n.googleText="Google Sign in":l===g.b.SignedIn&&n.loginSvc.googleAuthObject.then(function(l){var o=l.currentUser.get().getBasicProfile();n.googleText="Continue as "+o.getName()})})},n.prototype.signInGoogle=function(){var n=this;this.isMenuVisible=!1,this.loginSvc.signInGoogle().then(function(l){n.statusText="Hi "+l.getBasicProfile().getName()},function(n){console.error(n)})},n.prototype.signOutGoogle=function(){gapi.auth2.getAuthInstance().signOut().then(function(){console.log("User signed out.")})},n.prototype.signInFacebook=function(){},n}(),d=t.Y({encapsulation:0,styles:[['.dashboard[_ngcontent-%COMP%]{height:100vh;background-image:url(8ec8ee6bc4062316c995a3a9fd8bbb5a.3a17a368251e0f37993c.jpg);background-position:center;background-size:cover;background-repeat:no-repeat}.status[_ngcontent-%COMP%]{margin:50px 10px 15px;font-size:30px;text-align:center;color:#eee69f;background-color:#3b62b8cc;padding:20px}.sign-in[_ngcontent-%COMP%]{width:100%;margin:5px 10px 2px;padding:2px;font-size:24px;text-align:center;color:#eee69f;background-color:#3b62b8cc;border-color:#eee69f}.loginBtn[_ngcontent-%COMP%]{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;width:100%;padding:0 15px 0 46px;border:none;text-align:left;line-height:44px;white-space:nowrap;border-radius:.2em;color:#fff}.loginBtn[_ngcontent-%COMP%]:disabled{color:#b3b3b3;border:none}.loginBtn[_ngcontent-%COMP%]:before{content:"";-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;top:0;left:0;width:34px;height:100%}.loginBtn[_ngcontent-%COMP%]:focus{outline:0}.loginBtn[_ngcontent-%COMP%]:active{-webkit-box-shadow:inset 0 0 0 32px rgba(0,0,0,.1);box-shadow:inset 0 0 0 32px rgba(0,0,0,.1)}.loginBtn--facebook[_ngcontent-%COMP%]{background-color:#4c69ba;background-image:-webkit-gradient(linear,left top,left bottom,from(#4c69ba),to(#3b55a0));background-image:linear-gradient(#4c69ba,#3b55a0);font-family:"Helvetica neue",Helvetica Neue,Helvetica,Arial,sans-serif;text-shadow:0 -1px 0 #354c8c}.loginBtn--facebook[_ngcontent-%COMP%]:before{border-right:1px solid #364e92;background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png) 6px 6px no-repeat}.loginBtn--facebook[_ngcontent-%COMP%]:focus, .loginBtn--facebook[_ngcontent-%COMP%]:hover{background-color:#5b7bd5;background-image:-webkit-gradient(linear,left top,left bottom,from(#5b7bd5),to(#4864b1));background-image:linear-gradient(#5b7bd5,#4864b1)}.loginBtn--google[_ngcontent-%COMP%]{font-family:Roboto,Roboto,arial,sans-serif;background:#dd4b39}.loginBtn--google[_ngcontent-%COMP%]:before{border-right:1px solid #bb3f30;background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png) 6px 6px no-repeat}.loginBtn--google[_ngcontent-%COMP%]:focus, .loginBtn--google[_ngcontent-%COMP%]:hover{background:#e74b37}']],data:{}});function p(n){return t._14(0,[(n()(),t._0(0,0,null,null,22,"div",[["class","dashboard"]],null,null,null,null,null)),(n()(),t._13(-1,null,["\n\n  "])),(n()(),t._0(2,0,null,null,1,"menulist",[],null,null,null,r,s)),t.Z(3,114688,null,0,c,[u.k,u.a,a.a],{canClick:[0,"canClick"]},null),(n()(),t._13(-1,null,["\n\n  "])),(n()(),t._0(5,0,null,null,16,"div",[["class","flex-container row"]],null,null,null,null,null)),(n()(),t._13(-1,null,["\n    "])),(n()(),t._0(7,0,null,null,1,"div",[["class","status"]],null,null,null,null,null)),(n()(),t._13(8,null,["",""])),(n()(),t._13(-1,null,["\n\n    "])),(n()(),t._0(10,0,null,null,4,"div",[["class","sign-in"]],null,null,null,null,null)),(n()(),t._13(-1,null,["\n      "])),(n()(),t._0(12,0,null,null,1,"button",[["class","loginBtn loginBtn--google"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.signInGoogle()&&t),t},null,null)),(n()(),t._13(13,null,["",""])),(n()(),t._13(-1,null,["\n    "])),(n()(),t._13(-1,null,["\n    "])),(n()(),t._0(16,0,null,null,4,"div",[["class","sign-in"]],null,null,null,null,null)),(n()(),t._13(-1,null,["\n      "])),(n()(),t._0(18,0,null,null,1,"button",[["class","loginBtn loginBtn--facebook"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.signInFacebook()&&t),t},null,null)),(n()(),t._13(19,null,["",""])),(n()(),t._13(-1,null,["\n    "])),(n()(),t._13(-1,null,["\n  "])),(n()(),t._13(-1,null,["\n"]))],function(n,l){n(l,3,0,l.component.isMenuVisible)},function(n,l){var o=l.component;n(l,8,0,o.statusText),n(l,12,0,!o.isGoogleButtonEnabled),n(l,13,0,o.googleText),n(l,18,0,!o.isFbButtonEnabled),n(l,19,0,o.fbText)})}var f=t.W("app-dashboard",b,function(n){return t._14(0,[(n()(),t._0(0,0,null,null,1,"app-dashboard",[],null,null,null,p,d)),t.Z(1,114688,null,0,b,[g.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),_=function(){};o.d(l,"DashModuleNgFactory",function(){return k});var k=t.X(e,[],function(n){return t._6([t._7(512,t.j,t.U,[[8,[f]],[3,t.j],t.v]),t._7(4608,i.j,i.i,[t.s,[2,i.o]]),t._7(512,i.b,i.b,[]),t._7(512,u.l,u.l,[[2,u.q],[2,u.k]]),t._7(512,_,_,[]),t._7(512,e,e,[]),t._7(1024,u.i,function(){return[[{path:"",component:b}]]},[])])})}});