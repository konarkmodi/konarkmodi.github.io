!function(n){function t(t){for(var r,c,u=t[0],i=t[1],s=t[2],f=0,p=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r]);for(l&&l(t);p.length;)p.shift()();return a.push.apply(a,s||[]),e()}function e(){for(var n,t=0;t<a.length;t++){for(var e=a[t],r=!0,u=1;u<e.length;u++){var i=e[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),n=c(c.s=e[0]))}return n}var r={},o={1:0,2:0},a=[];function c(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=n,c.c=r,c.d=function(n,t,e){c.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,t){if(1&t&&(n=c(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)c.d(e,r,function(t){return n[t]}.bind(null,r));return e},c.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(t,"a",t),t},c.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},c.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;a.push([543,0,3]),e()}({1305:function(n,t){},1307:function(n,t){},1330:function(n,t){},1331:function(n,t){},1381:function(n,t){},150:function(n,t){},244:function(n,t){},326:function(n,t){},334:function(n,t){},341:function(n,t){},342:function(n,t){},353:function(n,t){},354:function(n,t){},396:function(n,t){},432:function(n,t){},439:function(n,t){},453:function(n,t){},485:function(n,t){},500:function(n,t){},510:function(n,t){},543:function(n,t,e){"use strict";e.r(t);var r=e(540),o=e.n(r),a=e(134),c=e.n(a),u=e(291),i=e.n(u),s=e(541),l=e.n(s),f=e(542),p=e.n(f);(function(){var n=i()(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.create({repo:"./ipfs-repo",EXPERIMENTAL:{pubsub:!0},preload:{enabled:!1},config:{Addresses:{Swarm:["/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star"]}}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()().then(function(){var n=i()(c.a.mark((function n(t){var e,r,a,u,i,s,l,f,d,g;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(">>>>",document.location.href),console.log(">>>",navigator.userAgent),n.next=4,p.a.createInstance(t);case 4:return e=n.sent,r={create:!0,overwrite:!0,localOnly:!1,accessController:{write:["*"]},sync:!0},n.next=8,e.eventlog("/orbitdb/zdpuAokjQzUd67EbLAoQuujwtVoYMcYFMaWV2tSjTzWhPaooX/arfaafaa",r);case 8:return a=n.sent,n.next=11,a.load();case 11:return console.log(a.address.toString()),a.events.on("replicated",(function(n){console.log(a.iterator({limit:-1}).collect())})),u=Date.now().toString(),i=navigator.userAgent,s=document.location.pathname,l={timestamp:u,user_agent:i,page_visited:s},n.next=19,a.add(l);case 19:f=n.sent,console.log(f),d=a.iterator({limit:-1}).collect(),console.log(d),g=new Set,d.forEach((function(n){g.add(n.payload.value.user_agent),document.getElementById("raw_logs").innerHTML+="".concat(JSON.stringify(n.payload.value)," <br/>")})),document.getElementById("unique_visitors").textContent=o()(g).length,document.getElementById("total_pageviews").textContent=d.length;case 27:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())}});