(this.webpackJsonpredux_project=this.webpackJsonpredux_project||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},18:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(3),o=n.n(a),i=n(7),s=n(4),u=n(5),p=n(9),l=n(6),b=n(10),d=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.emoji,n=e.smiling,r=e.crying;return c.a.createElement("div",{className:"container justify-content-center"},c.a.createElement("div",{className:"col-3 container p-5 border border-1 border-dark"},t),c.a.createElement("button",{onClick:n,className:"btn btn-secondary col-3"},"Happy"),c.a.createElement("button",{onClick:r,className:"btn btn-secondary col-3 "},"Sad"))}}]),t}(r.Component),m=Object(i.a)((function(e,t){switch(t.type){case"HAPPY":return"&128578;";case"SAD":return":(";default:return e}})),y=document.getElementById("root"),f=function(){o.a.render(c.a.createElement(d,{emoji:m.getState(),smiling:function(){return m.dispatch({type:"HAPPY"})},crying:function(){return m.dispatch({type:"SAD"})}}),y)};f(),m.subscribe(f)}},[[11,1,2]]]);
//# sourceMappingURL=main.b5857158.chunk.js.map