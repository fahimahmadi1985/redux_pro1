(this.webpackJsonpredux_project=this.webpackJsonpredux_project||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(3),o=n.n(a),u=n(4),s={counter:0},i=function(e){var t=e.value,n=e.Inc,c=e.Dec;return r.a.createElement("div",{className:"container row bg-secondary rounded d-flex justify-content-center p-5 ml-5"},r.a.createElement("div",{className:"container col-12 d-flex justify-content-center"},r.a.createElement("div",{className:"d-box bg-dark rounded text-white col-5 d-flex align-items-center justify-content-center p-3"},"Counter: ",r.a.createElement("span",{className:"text-warning ml-3"},t))),r.a.createElement("button",{type:"button",onClick:n,className:"btn btn-light text-dark m-3"},"Increment"),r.a.createElement("button",{type:"button",onClick:c,className:"btn btn-light text-dark m-3"},"Decrement"))},l=Object(u.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return{counter:e.counter+1};case"DECREMENT":return{counter:e.counter-1};default:return e}})),d=document.getElementById("root"),m=function(){o.a.render(r.a.createElement(i,{value:l.getState().counter,Inc:function(){return l.dispatch({type:"INCREMENT"})},Dec:function(){return l.dispatch({type:"DECREMENT"})}}),d)};m(),l.subscribe(m)},6:function(e,t,n){e.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.dd8bb41b.chunk.js.map