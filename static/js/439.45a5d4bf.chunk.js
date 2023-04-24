"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[439],{6277:function(e,n,t){t.d(n,{Df:function(){return i},IQ:function(){return p},Jh:function(){return d},eO:function(){return l},z1:function(){return u}});var r=t(5861),a=t(7757),c=t.n(a),o=t(1243),s="3efcb5a4bc88c289f82be253ec28a31f";o.Z.defaults.baseURL="https://api.themoviedb.org/3/",o.Z.defaults.headers.common.Authorization=s,o.Z.defaults.params={api_key:"".concat(s)};var i=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("trending/movie/day");case 3:return n=e.sent,t=n.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("search/movie",{params:{query:n}});case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("movie/".concat(n));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("movie/".concat(n,"/credits"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.cast);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("movie/".concat(n,"/reviews"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()},5439:function(e,n,t){t.r(n),t.d(n,{default:function(){return G}});var r,a,c,o,s,i,u,l,p=t(5861),d=t(9439),f=t(7757),h=t.n(f),v=t(1686),x=t.n(v),m=t(9128),g=t(168),b=t(1087),Z=t(6444),j=(0,Z.ZP)(b.rU)(r||(r=(0,g.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 20px;\n  padding: 8px;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  background-color: #ff00ff;\n  color: white;\n  border-radius: 5px;\n\n  &:hover,\n  &:focus {\n    background-color: #9f2b68;\n    color: white;\n  }\n"]))),w=t(184),k=function(e){var n=e.to,t=e.children;return(0,w.jsxs)(j,{to:n,children:[(0,w.jsx)(m.jTe,{size:"24"}),t]})},y=t(6277),P=t(2791),_=t(7689),S=t(6007),U=Z.ZP.div(a||(a=(0,g.Z)(["\n  display: flex;\n"]))),D=Z.ZP.div(c||(c=(0,g.Z)(["\n  display: block;\n  padding: 15px;\n"]))),O=Z.ZP.h3(o||(o=(0,g.Z)(["\n  text-align: center;\n  margin-bottom: 30px;\n"]))),q=Z.ZP.h3(s||(s=(0,g.Z)(["\n  text-align: center;\n  margin-bottom: 15px;\n"]))),z=Z.ZP.h3(i||(i=(0,g.Z)(["\n  text-align: center;\n  margin-bottom: 15px;\n"]))),C=function(e){var n=e.movieDetails,t=n.poster_path,r=n.release_date,a=n.title,c=n.vote_average,o=n.overview,s=n.genres,i=new Date(r).getFullYear(),u=Math.round(c).toFixed(1);return(0,w.jsxs)(U,{children:[(0,w.jsx)("img",{src:t?"".concat("https://image.tmdb.org/t/p/w300").concat(t):S,alt:a}),(0,w.jsxs)(D,{children:[(0,w.jsxs)(O,{children:[a," (",i,")"]}),(0,w.jsxs)("p",{children:["User Score: ",u,"%"]}),(0,w.jsx)(q,{children:"Overview"}),(0,w.jsx)("p",{children:o}),(0,w.jsx)(z,{children:"Genres"}),(0,w.jsx)("p",{children:s&&s.map((function(e){return e.name})).join(", ")})]})]})},I=Z.ZP.ul(u||(u=(0,g.Z)(["\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  padding: 20px;\n  list-style: none;\n  text-decoration: none;\n"]))),F=(0,Z.ZP)(b.rU)(l||(l=(0,g.Z)(["\n  padding: 8px 16px;\n  border-radius: 5px;\n  text-decoration: none;\n  color: white;\n  background-color: #ff00ff;\n  &:hover,\n  &:focus {\n    background-color: #9f2b68;\n  }\n"]))),G=function(){var e,n,t=(0,P.useState)([]),r=(0,d.Z)(t,2),a=r[0],c=r[1],o=(0,P.useState)(null),s=(0,d.Z)(o,2),i=s[0],u=s[1],l=(0,_.UO)().movieId,f=null!==(e=null===(n=(0,_.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,P.useEffect)((function(){if(l){var e=function(){var e=(0,p.Z)(h().mark((function e(){var n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,y.eO)(l);case 3:if(n=e.sent){e.next=7;break}return x().Notify.warning("Sorry, there are no matching results by your request!"),e.abrupt("return");case 7:c(n),u(null),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),u(e.t0),x().Notify.failure("Sorry there are no movies matching your request.Please try again!");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}}),[l]),(0,w.jsxs)("div",{children:[(0,w.jsxs)("main",{children:[(0,w.jsx)(k,{to:f,children:"Go back"}),a&&(0,w.jsx)(C,{movieDetails:a})]}),(0,w.jsxs)("div",{children:[(0,w.jsxs)(I,{children:[(0,w.jsx)("li",{children:(0,w.jsx)(F,{to:"cast",state:{from:f},children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(F,{to:"reviews",state:{from:f},children:"Reviews"})})]}),(0,w.jsx)(P.Suspense,{fallback:(0,w.jsx)("div",{children:"Loading..."}),children:(0,w.jsx)(_.j3,{})})]}),i&&(0,w.jsx)("p",{children:i.message})]})}},6007:function(e,n,t){e.exports=t.p+"static/media/noImage.675ab06152a434854d64.webp"}}]);
//# sourceMappingURL=439.45a5d4bf.chunk.js.map