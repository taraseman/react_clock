(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(6),i=n.n(c),l=n(1),r=n(2),s=n(4),u=n(3),m=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){var e=new Date;t.setState({time:e.toLocaleTimeString()}),console.log(e.toLocaleTimeString())}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return o.a.createElement("p",null,"Current time:"," ",this.state.time)}}]),n}(o.a.Component),h=(n(12),function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,name:"0"},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t.changeName=function(){t.setState({name:(10*Math.random()).toFixed(0)})},t}return Object(r.a)(n,[{key:"componentDidUpdate",value:function(t,e){this.state.previousName=e.name,console.log("The clock was renamed from\n        ".concat(this.state.previousName," to ").concat(this.state.name))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"React clock"," ",this.state.name),this.state.isClockVisible&&o.a.createElement(m,null),o.a.createElement("button",{type:"button",onClick:this.showClock},"Show Clock"),o.a.createElement("button",{type:"button",onClick:this.hideClock},"Hide Clock"),o.a.createElement("button",{type:"button",onClick:this.changeName},"Set random name"))}}]),n}(o.a.Component));i.a.render(o.a.createElement(h,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.f1ce053e.chunk.js.map