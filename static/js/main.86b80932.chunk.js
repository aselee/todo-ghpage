(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,o){t.exports=o(29)},19:function(t,e,o){},28:function(t,e,o){},29:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),l=o(10),c=o.n(l),r=(o(19),o(1)),i=o(2),u=o(4),s=o(3),d=o(5),m=o(8),h=o(12),f=o(7),p=o(11),g=o.n(p),b=function(t){function e(){var t,o;Object(r.a)(this,e);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(a)))).state={text:""},o.handleChange=function(t){o.setState(Object(f.a)({},t.target.name,t.target.value))},o.handleSubmit=function(t){t.preventDefault(),o.props.onSubmit({id:g.a.generate(),text:o.state.text,complete:!1}),o.setState({text:""})},o}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("input",{name:"text",value:this.state.text,onChange:this.handleChange,placeholder:"Things to do..."}),a.a.createElement("button",{onClick:this.handleChange},"Add Todo"))}}]),e}(a.a.Component),v=function(t){return a.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},a.a.createElement("div",{style:{textDecoration:t.todo.complete?"line-through":""},onClick:t.toggleComplete},t.todo.text),a.a.createElement("button",{onClick:t.onDelete},"x"))},C=function(t){function e(){var t,o;Object(r.a)(this,e);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[],todoToShow:"all",toggleAllComplete:!0},o.addTodo=function(t){o.setState(function(e){return{todos:[t].concat(Object(h.a)(e.todos))}})},o.toggleComplete=function(t){o.setState(function(e){return{todos:o.state.todos.map(function(e){return e.id===t?Object(m.a)({},e,{complete:!e.complete}):e})}})},o.updateTodoToShow=function(t){o.setState({todoToShow:t})},o.handleDeleteTodo=function(t){o.setState(function(e){return{todos:o.state.todos.filter(function(e){return e.id!==t})}})},o.removeCompleted=function(){o.setState(function(t){return{todos:o.state.todos.filter(function(t){return t.complete})}})},o}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this,e=[];return"all"===this.state.todoToShow?e=this.state.todos:"active"===this.state.todoToshow?e=this.state.todos.filter(function(t){return!t.complete}):"complete"===this.state.todoToshow&&(e=this.state.todos.filter(function(t){return t.complete})),a.a.createElement("div",null,a.a.createElement(b,{onSubmit:this.addTodo}),e.map(function(e){return a.a.createElement(v,{key:e.id,toggleComplete:function(){return t.toggleComplete(e.id)},onDelete:function(){return t.handleDeleteTodo(e.id)},todo:e})}),a.a.createElement("div",null,"Things I need to do:",this.state.todos.filter(function(t){return!t.complete}).length),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return t.updateTodoToShow("all")}},"all"),a.a.createElement("button",{onClick:function(){return t.updateTodoToShow("active")}},"active"),a.a.createElement("button",{onClick:function(){return t.updateTodoToShow("complete")}},"complete")),this.state.todos.some(function(t){return t.complete}).length?a.a.createElement("div",null,a.a.createElement("button",{onClick:this.removeCompleted},"Remove all complete todos")):null,a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return t.setState(function(t){return{todos:t.todos.map(function(e){return Object(m.a)({},e,{complete:t.toggleAllComplete})}),toggleAllComplete:!t.toggleAllComplete}})}},"toggle all complete: ","".concat(this.state.toggleAllComplete))))}}]),e}(a.a.Component),w=(o(28),function(t){function e(){var t,o;Object(r.a)(this,e);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(a)))).state={count:0},o.increment=function(){o.setState({count:o.state.count+1})},o.decrement=function(){o.setState({count:o.state.count-1})},o}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(C,null))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.86b80932.chunk.js.map