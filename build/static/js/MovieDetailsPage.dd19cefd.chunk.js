(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{66:function(e,t,a){e.exports={wrap:"Movie_wrap__geHDk",text:"Movie_text__1T0qv",img:"Movie_img__ScBuS",list:"Movie_list__2vE6s"}},67:function(e,t,a){e.exports={btn:"movieDetailsPage_btn__4m0u3"}},85:function(e,t,a){"use strict";a.r(t);var n=a(12),c=a(13),r=a(14),l=a(15),o=a(0),i=a.n(o),s=a(7),m=a(21),p=a(66),u=a.n(p),h=function(e){var t=e.poster_path,a=e.title,n=e.overview,c=e.genres,r=10*e.vote_average,l=e.release_date.slice(0,4);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:u.a.wrap},i.a.createElement("img",{className:u.a.img,src:"".concat("https://image.tmdb.org/t/p/w185").concat(t),alt:a}),i.a.createElement("div",null,i.a.createElement("h3",{className:u.a.text},a," (",l,")"),i.a.createElement("p",null,"User Score: ",r,"%"),i.a.createElement("h3",{className:u.a.text},"Overview"),i.a.createElement("p",null,n),i.a.createElement("h3",{className:u.a.text},"Genres"),c.map((function(e){return i.a.createElement("p",{key:e.id,className:u.a.list},"  ",e.name)})))))},v=a(6),f=a(9),E=a.n(f),b=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.match.params.movieId;return i.a.createElement(i.a.Fragment,null,i.a.createElement("ul",{className:E.a.box},i.a.createElement("li",null,i.a.createElement(v.b,{to:{pathname:"/movie/".concat(e,"/cast"),state:{from:this.props.location}},className:E.a.linkTwo},"Cast")),i.a.createElement("li",null,i.a.createElement(v.b,{to:{pathname:"/movie/".concat(e,"/reviews"),state:{from:this.props.location}},className:E.a.linkTwo},"Reviews"))))}}]),a}(o.Component),d=Object(s.f)(b),_=a(67),g=a.n(_),w=Object(o.lazy)((function(){return a.e(0).then(a.bind(null,87))})),k=Object(o.lazy)((function(){return a.e(3).then(a.bind(null,86))})),y=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,r=new Array(c),l=0;l<c;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={film:null},e.handleGoBack=function(){var t=e.props.location.state;t?e.props.history.push(t.from):e.props.history.push({pathname:"/"})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;m.c(t).then((function(t){return e.setState({film:t})}))}},{key:"render",value:function(){var e=this.state.film;return e&&console.log("film:",e),i.a.createElement("div",null,i.a.createElement("button",{className:g.a.btn,type:"button",onClick:this.handleGoBack},"\u21d0 Go back"),e&&i.a.createElement(h,e),i.a.createElement("p",null,"Additional information"),i.a.createElement(d,null),i.a.createElement(o.Suspense,{fallback:i.a.createElement("h2",null,"Loading...")},i.a.createElement(s.c,null,i.a.createElement(s.a,{path:"".concat(this.props.match.path,"/cast"),exact:!0,component:w}),i.a.createElement(s.a,{path:"".concat(this.props.match.path,"/reviews"),component:k}))))}}]),a}(o.Component);t.default=y}}]);
//# sourceMappingURL=MovieDetailsPage.dd19cefd.chunk.js.map