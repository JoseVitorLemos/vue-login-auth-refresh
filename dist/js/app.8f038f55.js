(function(e){function t(t){for(var r,o,i=t[0],l=t[1],u=t[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},s=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"123a":function(e,t,a){},3170:function(e,t,a){"use strict";a("e328")},"3c5d":function(e,t,a){},"44c0":function(e,t,a){"use strict";a("3c5d")},"4e2a":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view",{attrs:{path:"$router.key"}}),a("Footer")],1)},s=[],o=(a("acc7"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm",attrs:{id:"sm1"}},[a("router-link",{staticClass:"btn btn-outline-light me-2",attrs:{to:"/"}},[e._v("Home")])],1),e.userActive?a("div",{staticClass:"col-sm",attrs:{id:"sm2"}},[a("router-link",{staticClass:"btn btn-outline-light me-2",attrs:{to:"/Find-user"}},[e._v("Find User")])],1):e._e(),e.userActive?e._e():a("div",{staticClass:"col-sm",attrs:{id:"sm3"}},[a("router-link",{staticClass:"btn btn-outline-light me-2",attrs:{to:"/Login"}},[e._v("Login")]),a("router-link",{staticClass:"btn btn-outline-light me-2",attrs:{to:"/Signin"}},[e._v("Signin")])],1),e.userActive?a("div",{staticClass:"col-sm",attrs:{id:"sm3"}},[a("router-link",{staticClass:"btn btn-outline-light me-2",attrs:{to:"/update"}},[e._v("Update")]),a("button",{staticClass:"btn btn-outline-light me-2",on:{click:e.logout}},[e._v("Logout")])],1):e._e()])])])}),i=[],l=a("1da1"),u=(a("96cf"),a("e9c4"),a("bc3a")),c=a.n(u),d={name:"Header",data:function(){return{userActive:null}},mounted:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,r,n,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=localStorage.getItem("userDetails"),null!=a){t.next=5;break}localStorage.setItem("userDetails",JSON.stringify({auth:!1})),t.next=12;break;case 5:if(r=JSON.parse(a),n=r.accessToken,null==n){t.next=12;break}return t.next=9,c.a.post("auth/token",{accessToken:n});case 9:s=t.sent,o=s.status,200!=o?(localStorage.setItem("userDetails",JSON.stringify(Object.assign(a,{auth:!1}))),e.userActive=!1):(c.a.defaults.headers.common["Authorization"]="Bearer ".concat(n),e.userActive=!0);case 12:case"end":return t.stop()}}),t)})))()},methods:{logout:function(){c.a.defaults.headers.common["Authorization"]="",localStorage.removeItem("userDetails"),location.reload(!0),this.$router.push("/")}}},m=d,p=(a("8d07"),a("2877")),f=Object(p["a"])(m,o,i,!1,null,"062e6421",null),v=f.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer")},h=[],w={name:"Footer"},b=w,_=(a("c4df"),Object(p["a"])(b,g,h,!1,null,"2e585c1f",null)),C=_.exports,x={name:"App",components:{Header:v,Footer:C}},y=x,O=Object(p["a"])(y,n,s,!1,null,null,null),P=O.exports;c.a.defaults.baseURL="http://localhost:3000/",c.a.interceptors.response.use((function(e){return e}),function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var a,r,n,s,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("userDetails"),r=JSON.parse(a),401!==t.response.status){e.next=9;break}return e.next=5,c.a.post("auth/refresh-token",{refreshToken:r.refreshToken});case 5:n=e.sent,s=n.status,o=n.data,200===s&&(i=Object.assign(r,o),localStorage.setItem("userDetails",JSON.stringify(i)),c.a.defaults.headers.common["Authorization"]="Bearer ".concat(o.accessToken));case 9:400==t.response.status&&"jwt expired"===t.response.data.message&&(localStorage.removeItem("userDetails"),location.reload(!0));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var k=a("5f5b"),S=a("8c4f"),j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("div",{staticClass:"text-top"},[e._v(" "+e._s(e.message)+" ")])])},D=[],N={name:"Home",data:function(){return{message:""}},mounted:function(){var e=this;c.a.get("").then(function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.message=a.data||"Error response API");case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},$=N,R=(a("5cd6"),Object(p["a"])($,j,D,!1,null,"154243d4",null)),I=R.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("div",{staticClass:"main-div"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[a("div",{staticClass:"text-top"},[e._v(" Please register ")]),a("div",{staticClass:"form-floating"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"exemple@mail.com",required:"",autocomplete:"on"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",[e._v("Email address")])]),a("div",{staticClass:"form-floating"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",required:"",autocomplete:"on"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("label",[e._v("Password")])]),e._m(0)])])])},T=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-floating"},[a("button",{staticClass:"w-100 btn btn-lg btn-primary"},[e._v("Register")])])}],A={name:"Signin",data:function(){return{email:"",password:""}},methods:{submit:function(){c.a.post("/account/signup",{email:this.email,password:this.password}),this.$router.push("/")}},mounted:function(){var e=localStorage.getItem("userDetails"),t=JSON.parse(e),a=t.auth;a&&this.$router.push("/")}},J=A,q=(a("44c0"),Object(p["a"])(J,E,T,!1,null,"0b9868a0",null)),L=q.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("div",{staticClass:"main-div"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[a("div",{staticClass:"text-top"},[e._v(" Login with your account ")]),a("div",{staticClass:"form-floating"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"exemple@mail.com",required:"",autocomplete:"on"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",[e._v("Email address")])]),a("div",{staticClass:"form-floating"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",required:"",autocomplete:"on"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("label",[e._v("Password")])]),e._m(0)])])])},U=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-floating"},[a("button",{staticClass:"w-100 btn btn-lg btn-primary"},[e._v("Login")])])}],H={name:"Login",data:function(){return{email:"",password:""}},methods:{submit:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:c.a.post("account/login",{email:this.email,password:this.password}).then(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:localStorage.setItem("userDetails",JSON.stringify(t.data)),c.a.defaults.headers.common["Authorization"]="Bearer ".concat(t.data.accessToken);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(){return location.reload(!0)}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=localStorage.getItem("userDetails"),t=JSON.parse(e),a=t.auth;a&&this.$router.push("/")}},M=H,z=(a("c7db"),Object(p["a"])(M,F,U,!1,null,"1dbc9e73",null)),B=z.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("div",{staticClass:"container"},[a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:e.handleInput}},[e._v("Search user")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Search by email",required:"",autocomplete:"on"},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}})])]),e.table?a("div",{staticClass:"container-list"},[a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item list-group-item-dark"},[e._v("User account")]),a("li",{staticClass:"list-group-item"},[a("b",[e._v("Id: ")]),e._v(" "+e._s(e.id))]),a("li",{staticClass:"list-group-item"},[a("b",[e._v("Email: ")]),e._v(e._s(e.email))]),a("li",{staticClass:"list-group-item"},[a("b",[e._v("Data de criação: ")]),e._v(e._s(e.created_at))]),null!=e.updated?a("li",{staticClass:"list-group-item"},[a("b",[e._v("Data de atualização: ")]),e._v(e._s(e.updated_at))]):e._e()])]):e._e()])},G=[];a("ac1f"),a("5319");function K(e){var t=e.getHours(),a=e.getMinutes(),r=e.getSeconds();r<10&&(r="0".concat(r));var n=t>=12?"pm":"am";t%=12,t=t>=0?t:12,a=a<10?"0"+a:a;var s=t+":"+a+":"+r+" "+n;return e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()+" "+s}var Q={name:"FindUser",data:function(){return{input:"",id:"",email:"",created_at:"",updated_at:"",updated:null,table:null}},methods:{handleInput:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,r,n,s,o,i,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.input.length>0)){t.next=13;break}return a=e.input.replace(/\s/g,""),t.next=4,c.a.get("account/search?email=".concat(a));case 4:r=t.sent,n=r.data,s=n.id,o=n.email,i=n.created_at,l=n.updated_at,e.id=s,e.email=o,e.created_at=K(new Date(i)),e.updated=!0,e.updated_at=l?K(new Date(l)):e.updated=null,e.table=!0;case 13:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=localStorage.getItem("userDetails");e||this.$router.push("/");var t=JSON.parse(e),a=t.auth;a||this.$router.push("/")}},V=Q,W=(a("7f1f"),Object(p["a"])(V,Y,G,!1,null,"74ebb000",null)),X=W.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("div",{staticClass:"main-div"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[a("div",{staticClass:"text-top"},[e._v(" Change your password ")]),a("div",{staticClass:"form-floating"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"your_emailmail.com",required:"",autocomplete:"on"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",[e._v("Email address")])]),a("div",{staticClass:"form-floating"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.oldPassword,expression:"oldPassword"}],staticClass:"form-control",attrs:{type:"password",placeholder:"exemple@mail.com",required:"",autocomplete:"on"},domProps:{value:e.oldPassword},on:{input:function(t){t.target.composing||(e.oldPassword=t.target.value)}}}),a("label",[e._v("Old password")])]),a("div",{staticClass:"form-floating"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newPasswordOne,expression:"newPasswordOne"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",required:"",autocomplete:"on"},domProps:{value:e.newPasswordOne},on:{input:function(t){t.target.composing||(e.newPasswordOne=t.target.value)}}}),a("label",[e._v("New password")])]),a("div",{staticClass:"form-floating"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newPasswordTwo,expression:"newPasswordTwo"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",required:"",autocomplete:"on"},domProps:{value:e.newPasswordTwo},on:{input:function(t){t.target.composing||(e.newPasswordTwo=t.target.value)}}}),a("label",[e._v("Repeat new password")])]),e._m(0),e.error?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" "+e._s(e.message)+" ")]):e._e(),e.success?a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[e._v(" "+e._s(e.message)+" ")]):e._e()])])])},ee=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-floating"},[a("button",{staticClass:"w-100 btn btn-lg btn-primary"},[e._v("Update the password")])])}],te={name:"Login",data:function(){return{email:"",oldPassword:"",newPasswordOne:"",newPasswordTwo:"",message:"",success:null,error:null}},methods:{submit:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.newPasswordOne!==this.newPasswordTwo){e.next=6;break}return this.error=null,e.next=4,c.a.put("account/update",{email:this.email,oldPassword:this.oldPassword,newPassword:this.newPasswordOne}).then(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a||(t.message="Invalid email or password",t.success=!1,t.error=!0),200===a.data.statusCode&&(t.message=a.data.message,t.error=!1,t.success=!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:e.next=9;break;case 6:this.message="Password is not equal",this.success=!1,this.error=!0;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=localStorage.getItem("userDetails"),t=JSON.parse(e),a=t.auth;a||this.$router.push("/")}},ae=te,re=(a("3170"),Object(p["a"])(ae,Z,ee,!1,null,"37f25d88",null)),ne=re.exports;r["default"].use(S["a"]);var se=[{path:"/",component:I},{path:"/Signin",name:"Signin",component:L},{path:"/Login",name:"Login",component:B},{path:"/Find-user",name:"FindUser",component:X},{path:"/Update",name:"Update",component:ne}],oe=new S["a"]({routes:se,mode:"history"}),ie=oe;a("f9e3"),a("2dd8");r["default"].use(k["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(P)},router:ie}).$mount("#app")},"5cd6":function(e,t,a){"use strict";a("123a")},"7f1f":function(e,t,a){"use strict";a("abf3")},"8d07":function(e,t,a){"use strict";a("cd88")},abf3:function(e,t,a){},acc7:function(e,t,a){},bb72:function(e,t,a){},c4df:function(e,t,a){"use strict";a("bb72")},c7db:function(e,t,a){"use strict";a("4e2a")},cd88:function(e,t,a){},e328:function(e,t,a){}});
//# sourceMappingURL=app.8f038f55.js.map