(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{17:function(e,t,n){e.exports={link:"MoviesList_link__1VtBz",list:"MoviesList_list__2Yemu"}},20:function(e,t,n){e.exports={text:"HomePage_text__3_hBV"}},21:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return m}));var a=n(10),c=n.n(a),r="https://api.themoviedb.org/3/",i="b633d756413361ebb99e0429df3527e6",o=function(){return c.a.get("".concat(r,"trending/movie/day?api_key=").concat(i)).then((function(e){return e.data.results}))},l=function(e){var t=e.slice(1);return c.a.get("".concat(r,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US")).then((function(e){return e.data}))},u=function(e){var t=e.slice(1);return c.a.get("".concat(r,"movie/").concat(t,"/credits?api_key=").concat(i)).then((function(e){return e.data}))},s=function(e){var t=e.slice(1);return c.a.get("".concat(r,"movie/").concat(t,"/reviews?api_key=").concat(i)).then((function(e){return e.data.results}))},m=function(e){return c.a.get("".concat(r,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.data.results}))}},31:function(e,t,n){"use strict";var a=n(12),c=n(13),r=n(14),i=n(15),o=n(0),l=n.n(o),u=n(6),s=n(7),m=n(17),f=n.n(m),v=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.films;return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:f.a.list},t.map((function(t){if("UNdefined"!==t.title)return l.a.createElement("li",{key:t.id},l.a.createElement(u.b,{to:{pathname:"/movie/:".concat(t.id),state:{from:e.props.location}},className:f.a.link},t.title))}))))}}]),n}(o.Component);t.a=Object(s.f)(v)},36:function(e,t,n){e.exports=n(63)},63:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(33),i=n.n(r),o=n(6),l=n(7),u=n(12),s=n(13),m=n(14),f=n(15),v=n(21),p=n(31),d=n(20),_=n.n(d),h=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={films:[]},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;v.e().then((function(t){return e.setState({films:t})}))}},{key:"render",value:function(){var e=this.state.films;return c.a.createElement("div",{className:_.a.wrapper},c.a.createElement("h2",{className:_.a.text},"Trending today"),c.a.createElement(p.a,{films:e}))}}]),n}(a.Component),E=n(9),b=n.n(E),k=function(){return c.a.createElement("div",{className:b.a.wrapper},c.a.createElement("ul",{className:b.a.list},c.a.createElement("li",null,c.a.createElement(o.c,{to:"/",exact:!0,activeClassName:b.a.active,className:b.a.link},"Home")),c.a.createElement("li",null,c.a.createElement(o.c,{to:"/movie",activeClassName:b.a.active,className:b.a.link},"Movie"))))},g=Object(a.lazy)((function(){return n.e(1).then(n.bind(null,85))})),y=Object(a.lazy)((function(){return n.e(2).then(n.bind(null,84))})),N=function(){return c.a.createElement("div",null,c.a.createElement(k,null),c.a.createElement(a.Suspense,{fallback:c.a.createElement("h2",null,"Loading...")},c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/",exact:!0,component:h}),c.a.createElement(l.a,{path:"/movie/:movieId",component:g}),c.a.createElement(l.a,{path:"/movie",component:y}),c.a.createElement(l.a,{component:h}))))};i.a.render(c.a.createElement(o.a,null,c.a.createElement(l.a,{component:N})),document.getElementById("root"))},9:function(e,t,n){e.exports={wrapper:"Nav_wrapper__1n6a6",list:"Nav_list__12u09",link:"Nav_link__zWrsl",active:"Nav_active__2tMe4",box:"Nav_box__1Eqc3",linkTwo:"Nav_linkTwo__3SQsu"}}},[[36,5,6]]]);
//# sourceMappingURL=main.2ed43c0d.chunk.js.map