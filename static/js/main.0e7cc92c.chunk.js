(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{18:function(t,e,n){t.exports=n(34)},23:function(t,e,n){},24:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),a=n(7),o=n.n(a),u=(n(23),n(24),n(6)),s=n.n(u),c=n(13),l=n(1);n(30);var f=Object(l.b)((function(t,e){var n=t.field[e.x][e.y];return{bomb:n.bomb,closed:n.closed,number:n.number,flagged:n.flagged}}),(function(t,e){return{open:function(){return t({type:"OPEN",x:e.x,y:e.y})},toggleFlag:function(){return t({type:"TOGGLE_FLAG",x:e.x,y:e.y})},autoOpen:function(){return t({type:"AUTO_OPEN",x:e.x,y:e.y})}}}))((function(t){return r.a.createElement("div",{className:"cell",onClick:function(){return t.open()},onContextMenu:function(e){e.preventDefault(),t.toggleFlag()},onDoubleClick:t.autoOpen},t.closed?r.a.createElement("div",{className:"cover"},t.flagged?"\u26f3\ufe0f":null):t.bomb?"\ud83d\udca3":t.number)})),h=(n(31),Object(l.b)((function(t){return{width:t.fieldWidth,height:t.fieldHeight}}))((function(t){var e=s.a.mark(o),n=s.a.mark(u),i=t.width,a=t.height;return r.a.createElement(r.a.Fragment,null,Object(c.a)(o()));function o(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<a)){e.next=7;break}return e.next=4,r.a.createElement("div",{key:t,className:"row"},Object(c.a)(u(t)));case 4:t++,e.next=1;break;case 7:case"end":return e.stop()}}),e)}function u(t){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=0;case 1:if(!(e<i)){n.next=7;break}return n.next=4,l(t,e);case 4:e++,n.next=1;break;case 7:case"end":return n.stop()}}),n)}function l(t,e){return r.a.createElement(f,{key:e,x:t,y:e})}})));n(32);var d=Object(l.b)((function(t){return{bombs:t.bombs}}),(function(t){return{restart:function(){return t({type:"RESTART"})}}}))((function(t){return r.a.createElement("div",{className:"stats"},r.a.createElement("div",{className:"bombs"},"\ud83d\udca3 ".concat(t.bombs.toString().padStart(2,"0"))),r.a.createElement("button",{className:"restart-button",onClick:t.restart},"\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430"))}));var b=Object(l.b)()((function(){return r.a.createElement("div",{className:"root"},r.a.createElement(h,null),r.a.createElement(d,null))})),m=n(5),g=n(8),v=n(4),y=function(){function t(e,n){Object(g.a)(this,t),this._width=e,this._height=n,this._items=void 0,this._items=new Array(e*n)}return Object(v.a)(t,[{key:"items",get:function(){return this._items}},{key:"width",get:function(){return this._width}},{key:"height",get:function(){return this._height}}]),Object(v.a)(t,[{key:"itemAt",value:function(t,e){if(t<0||t>=this._height)throw new Error("x is out of range");if(e<0||e>=this._width)throw new Error("y is out of range");return this._items[this.calculateIndex(t,e)]}},{key:"unsageGetItemAt",value:function(t,e){if(!(t<0||t>=this._height||e<0||e>=this._width))return this._items[this.calculateIndex(t,e)]}},{key:"setItemAt",value:function(t,e,n){t<0||t>=this._height||e<0||e>=this._width||(this._items[this.calculateIndex(t,e)]=n)}},{key:"fill",value:function(t){var e=this;this.iterate((function(n,i,r){return e.setItemAt(i,r,t(i,r))}))}},{key:"iterate",value:function(t){for(var e=0;e<this._height;e++)for(var n=0;n<this._width;n++)t(this.itemAt(e,n),e,n)}},{key:"getItemsAround",value:function(t,e){for(var n=[],i=-1;i<=1;i++)for(var r=-1;r<=1;r++)0===i&&0===r||n.push(this.unsageGetItemAt(t+i,e+r));return n.filter((function(t){return void 0!==t}))}},{key:"get3X3SubMatrixAround",value:function(e,n){var i=this,r=new t(3,3);return r.fill((function(t,r){return i.unsageGetItemAt(e+t-1,n+r-1)})),r}},{key:"toDoubleArray",value:function(){for(var t=[],e=0;e<this.height;e++){var n=[];t.push(n);for(var i=0;i<this.width;i++)n.push(this.itemAt(e,i))}return t}},{key:"calculateIndex",value:function(t,e){return t*this._width+e}}]),t}(),_=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;Object(g.a)(this,t),this._width=e,this._height=n,this._bombCount=i,this._field=void 0,this._firstOpenedPosition=void 0,this._field=new y(e,n),this.reset()}return Object(v.a)(t,[{key:"fieldMatrix",get:function(){return this._field}},{key:"cells",get:function(){return this._field.items}},{key:"bombCount",get:function(){return this._bombCount}},{key:"bombsRemaining",get:function(){return this.bombCount-this.cells.filter((function(t){return t.flagged})).length}}]),Object(v.a)(t,[{key:"reset",value:function(){this._field.fill((function(){return{bomb:!1,closed:!0,flagged:!1}})),this._firstOpenedPosition=void 0}},{key:"cellAt",value:function(t,e){return this._field.itemAt(t,e)}},{key:"open",value:function(t,e){var n=this;this._firstOpenedPosition||(this._firstOpenedPosition=[t,e],this.generate());var i=this.cellAt(t,e);if(i.closed&&!i.flagged)if(i.closed=!1,i.bomb)this.cells.forEach((function(t){return t.closed=!1}));else if(null==i.number){!function t(e,i){n.fieldMatrix.get3X3SubMatrixAround(e,i).iterate((function(n,r,a){n&&!n.bomb&&n.closed&&(n.closed=!1,null==n.number&&t(e+r-1,i+a-1))}))}(t,e)}}},{key:"autoOpen",value:function(t,e){var n=this,i=this.cellAt(t,e);i.closed||null==i.number||this.fieldMatrix.getItemsAround(t,e).filter((function(t){return t.flagged})).length===i.number&&this.fieldMatrix.get3X3SubMatrixAround(t,e).iterate((function(i,r,a){i&&!i.flagged&&n.open(t+r-1,e+a-1)}))}},{key:"generate",value:function(){this.populateBombs()}},{key:"populateBombsFromPattern",value:function(t){var e=0,n=0,i=!0,r=!1,a=void 0;try{for(var o,u=t[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){switch(o.value){case"|":e++,n=0;continue;case"*":this.cellAt(e,n).bomb=!0;break;case"_":this.cellAt(e,n).bomb=!1}n++}}catch(s){r=!0,a=s}finally{try{i||null==u.return||u.return()}finally{if(r)throw a}}this.setNumbers()}},{key:"populateBombs",value:function(){for(var t=this._bombCount;t>0;){var e=[this.random(this._height),this.random(this._width)];if(!(Math.abs(this._firstOpenedPosition[0]-e[0])<2&&Math.abs(this._firstOpenedPosition[1]-e[1])<2)){var n=this.cellAt(e[0],e[1]);n.bomb||(n.bomb=!0,t--)}}this.setNumbers()}},{key:"setNumbers",value:function(){var t=this;this.iterateField((function(e,n,i){if(e.bomb)e.number=null;else{var r=t._field.getItemsAround(n,i).reduce((function(t,e){return t+(e.bomb?1:0)}),0);e.number=r||null}}))}},{key:"random",value:function(t){return Math.floor(Math.random()*t)}},{key:"iterateField",value:function(t){this._field.iterate(t)}}]),t}(),p=n(16),k=n.n(p),x=new _(30,16,99);function w(){return{field:k.a.cloneDeep(x.fieldMatrix.toDoubleArray()),bombs:x.bombsRemaining,fieldWidth:x.fieldMatrix.width,fieldHeight:x.fieldMatrix.height}}var O=n(17),A=n.n(O),E=Object(m.c)((function(t,e){switch(e.type){case"OPEN":return x.open(e.x,e.y),w();case"TOGGLE_FLAG":var n=x.cellAt(e.x,e.y);return n.closed&&(n.flagged=!n.flagged),w();case"AUTO_OPEN":return x.autoOpen(e.x,e.y),w();case"RESTART":return x.reset(),w();default:return w()}}),w(),Object(m.a)(A.a));o.a.render(r.a.createElement(l.a,{store:E},r.a.createElement(b,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.0e7cc92c.chunk.js.map