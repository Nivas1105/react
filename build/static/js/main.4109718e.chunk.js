(this["webpackJsonpnivas-app"]=this["webpackJsonpnivas-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),o=n.n(l),c=(n(13),n(1)),i=n(2),m=n(4),u=n(3),s=n(7),h=(n(14),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={firstName:"",lastName:"",phonenum:"",email:"",empid:""},e.change=function(t){e.setState(Object(s.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("form",null,r.a.createElement("h2",null,"Employee Info "),r.a.createElement("label",{for:"fname"},"First Name: "),r.a.createElement("input",{name:"firstName",placeholder:"First name",value:this.state.firstName,onChange:function(t){return e.change(t)}}),r.a.createElement("br",null),r.a.createElement("label",{for:"lname"},"Last Name: "),r.a.createElement("input",{name:"lastName",placeholder:"Last name",value:this.state.lastName,onChange:function(t){return e.change(t)}}),r.a.createElement("br",null),r.a.createElement("label",{for:"phnum"},"Phone Num: "),r.a.createElement("input",{name:"phonenum",placeholder:"Phone Number",value:this.state.phonenum,onChange:function(t){return e.change(t)}}),r.a.createElement("br",null),r.a.createElement("label",{for:"email"},"E-mail: "),r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",value:this.state.email,onChange:function(t){return e.change(t)}}),r.a.createElement("br",null),r.a.createElement("label",{for:"empid"},"Employee ID: "),r.a.createElement("input",{name:"empid",placeholder:"Employee ID",value:this.state.empid,onChange:function(t){return e.change(t)}}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(t){return e.onSubmit(t)}},"Submit"))}}]),n}(r.a.Component)),p=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(e){console.log("app:",e)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(h,{onSubmit:function(t){return e.onSubmit(t)}}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.4109718e.chunk.js.map