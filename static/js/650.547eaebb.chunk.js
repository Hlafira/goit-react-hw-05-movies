"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[650],{650:function(t,n,r){r.r(n),r.d(n,{default:function(){return p}});var e=r(439),u=r(689),i=r(791),a=r(610),c=r(184),o=function(t){var n=t.reviews.map((function(t,n){return(0,c.jsxs)("li",{children:[(0,c.jsxs)("h4",{children:["Author:",t.author]}),(0,c.jsx)("p",{children:t.content})]},n)}));return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{children:n})})},s=o;o.defaultProps={reviews:[]};var p=function(){var t=(0,u.UO)().id,n=(0,i.useState)([]),r=(0,e.Z)(n,2),o=r[0],p=r[1];return(0,i.useEffect)((function(){(0,a.Hx)(t).then((function(t){var n=t.map((function(t){return{author:t.author,content:t.content,id:t.id}}));p((function(){return n}))})).catch((function(t){console.log(t)}))}),[t]),(0,c.jsx)(c.Fragment,{children:o.length>0?(0,c.jsx)(s,{reviews:o}):(0,c.jsx)("p",{children:"We don't have any reviews for this movie"})})}},610:function(t,n,r){r.d(n,{HY:function(){return o},Hx:function(){return g},Y5:function(){return l},bI:function(){return f},hp:function(){return c},xc:function(){return m},yS:function(){return s}});var e=r(861),u=r(757),i=r.n(u),a=r(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"c1b8c874be54ebc5c34c225dbd6a36f5"}}),c="https://image.tmdb.org/t/p/w185/",o="https://image.tmdb.org/t/p/w92/";function s(t){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(i().mark((function t(n){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a.get("trending/movie/day",{params:{page:n,language:"en-US"}}).then((function(t){return t.data.results.map((function(t){var n=t.id,r=t.name,e=t.original_title,u=t.title;return{id:n,title:r||(u||e)}}))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t,n){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(i().mark((function t(n,r){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a.get("search/movie",{params:{page:r,include_adult:!1,query:n,sort_by:"popularity.desc"}}).then((function(t){return t.data.results.map((function(t){var n=t.id,r=t.name,e=t.original_title,u=t.title;return{id:n,title:r||(u||e)}}))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(i().mark((function t(n){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a.get("movie/".concat(n),{}).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(i().mark((function t(n){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a.get("movie/".concat(n,"/credits"),{}).then((function(t){return t.data.cast})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return w.apply(this,arguments)}function w(){return(w=(0,e.Z)(i().mark((function t(n){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a.get("movie/".concat(n,"/reviews"),{}).then((function(t){return t.data.results})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=650.547eaebb.chunk.js.map