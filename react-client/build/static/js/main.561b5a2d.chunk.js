(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,n,t){e.exports=t(52)},28:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(21),c=t.n(r),i=(t(28),t(5)),u=t(6),s=t(8),l=t(7),m=t(9),h=t(54),f=t(56),p=t(55),d=t(12),g=t(11),w=t.n(g),b=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(o)))).state={theQuestion:[]},t.handleChange=function(e){var n=[];n.push(Object(d.a)({},e.target.name,e.target.value)),t.setState({theQuestion:n})},t.sendQuestion=function(){var e=t.state.theQuestion;w.a.post("/question",{theQuestion:e}).then(function(e){console.log(e)})},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Main"},"Main",o.a.createElement("input",{type:"text",name:"structure",onChange:function(n){return e.handleChange(n)}}),o.a.createElement("button",{onClick:function(){return e.sendQuestion()}},"Question"))}}]),n}(a.Component),v=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(s.a)(this,Object(l.a)(n).call(this,e))).onChange=function(e){t.setState(Object(d.a)({},e.target.name,e.target.value))},t.login=function(){var e=t.state,n=e.username,a=e.password;w.a.post("/login",{username:n,password:a}).then(function(e){var n=e.config;"admin"===JSON.parse(n.data).username?window.location.href="/admin":window.location.href="/main"}).catch(function(e){console.log(e)})},t.state={username:"",password:""},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Login"},o.a.createElement("button",{onClick:function(){return window.location.href="/signup"}},"signup"),"User Name :",o.a.createElement("input",{name:"username",onChange:function(n){return e.onChange(n)}}),"Password :",o.a.createElement("input",{name:"password",onChange:function(n){return e.onChange(n)}}),o.a.createElement("button",{onClick:function(){return e.login()}},"login"))}}]),n}(a.Component),O=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(s.a)(this,Object(l.a)(n).call(this,e))).onChange=function(e){t.setState(Object(d.a)({},e.target.name,e.target.value))},t.signup=function(){var e=t.state,n=e.username,a=e.password;w.a.post("/signup",{username:n,password:a}).then(function(e){var n=e.config;"admin"===JSON.parse(n.data).username?window.location.href="/admin":window.location.href="/main"}).catch(function(e){console.log(e)})},t.state={username:"",password:""},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"signup"},o.a.createElement("button",{onClick:function(){return window.location.href="/login"}},"login"),"User Name :",o.a.createElement("input",{name:"username",onChange:function(n){return e.onChange(n)}}),"Password :",o.a.createElement("input",{name:"password",onChange:function(n){return e.onChange(n)}}),o.a.createElement("button",{onClick:function(){return e.signup()}},"signup"))}}]),n}(a.Component),j=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(s.a)(this,Object(l.a)(n).call(this,e))).sendAnswer=function(e){var n=t.state.answer;w.a.post("/addAnswer",{answer:n,questions_id:e}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},t.onChange=function(e){t.setState(Object(d.a)({},e.target.name,e.target.value))},t.componentDidMount=function(){w.a.get("/allQuestion").then(function(e){var n=e.data;t.setState({allAnswers:n}),console.log(n)}).catch(function(e){console.log(e)})},t.state={answer:"",allAnswers:[]},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this,n=this.state.allAnswers;return o.a.createElement("div",{className:"Admin"},"Admin",o.a.createElement("div",null,n.map(function(n){return o.a.createElement("div",null,n.username,o.a.createElement("div",null,n.questions.map(function(n){return n.structure?o.a.createElement("div",null,n.structure,o.a.createElement("input",{name:"answer",onChange:function(n){e.onChange(n)}}),o.a.createElement("button",{onClick:function(){return e.sendAnswer(n._id)}},"yes")):null})))})))}}]),n}(a.Component),E=function(e){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement(f.a,null,o.a.createElement(p.a,{exact:!0,path:"/",component:O}),o.a.createElement(p.a,{exact:!0,path:"/login",component:v}),o.a.createElement(p.a,{exact:!0,path:"/signup",component:O}),o.a.createElement(p.a,{exact:!0,path:"/main",component:b}),o.a.createElement(p.a,{exact:!0,path:"/admin",component:j})))}}]),n}(o.a.Component),C=function(e){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(E,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.561b5a2d.chunk.js.map