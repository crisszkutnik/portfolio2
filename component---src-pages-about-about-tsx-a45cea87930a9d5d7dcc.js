(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/eHF":function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){var n=t.distance,a=t.left,r=t.right,l=t.up,o=t.down,i=t.top,c=t.bottom,d=t.big,s=t.mirror,f=t.opposite,b=(n?n.toString():0)+((a?1:0)|(r?2:0)|(i||o?4:0)|(c||l?8:0)|(s?16:0)|(f?32:0)|(e?64:0)|(d?128:0));if(m.hasOwnProperty(b))return m[b];var p=a||r||l||o||i||c,v=void 0,E=void 0;if(p){if(!s!=!(e&&f)){var h=[r,a,c,i,o,l];a=h[0],r=h[1],i=h[2],c=h[3],l=h[4],o=h[5]}var w=n||(d?"2000px":"100%");v=a?"-"+w:r?w:"0",E=o||i?"-"+w:l||c?w:"0"}return m[b]=(0,u.animation)((e?"to":"from")+" {opacity: 0;"+(p?" transform: translate3d("+v+", "+E+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),m[b]}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,l=(e.out,e.forever),o=e.timeout,i=e.duration,c=void 0===i?u.defaults.duration:i,s=e.delay,m=void 0===s?u.defaults.delay:s,f=e.count,b=void 0===f?u.defaults.count:f,p=a(e,["children","out","forever","timeout","duration","delay","count"]),v={make:r,duration:void 0===o?c:o,delay:m,forever:l,count:b,style:{animationFillMode:"both"},reverse:p.left};return t?(0,d.default)(p,v,v,n):v}Object.defineProperty(t,"__esModule",{value:!0});var o,i=n("17x9"),u=n("ar19"),c=n("eH+L"),d=(o=c)&&o.__esModule?o:{default:o},s={out:i.bool,left:i.bool,right:i.bool,top:i.bool,bottom:i.bool,big:i.bool,mirror:i.bool,opposite:i.bool,duration:i.number,timeout:i.number,distance:i.string,delay:i.number,count:i.number,forever:i.bool},m={};l.propTypes=s,t.default=l,e.exports=t.default},"B/qo":function(e,t,n){},EDu8:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=(n("B/qo"),n("0L7f")),o=n("w1JH");t.default=function(){return r.a.createElement(l.a.Consumer,null,(function(e){return e?r.a.createElement("div",{id:"about"},r.a.createElement(o.a,null,r.a.createElement("h1",null,".",e.about_title)),r.a.createElement(o.a,null,r.a.createElement("div",{id:"about-text"},r.a.createElement("div",{id:"about-img"},r.a.createElement("div",{id:"img-bg"},r.a.createElement("div",{id:"about-gradient"})),r.a.createElement("div",{id:"img-outline"})),r.a.createElement("div",{id:"about-data"},r.a.createElement("p",null,e.about_text_1,r.a.createElement("br",null),r.a.createElement("br",null),e.about_text_2,r.a.createElement("br",null),r.a.createElement("br",null),e.about_text_3,r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{id:"lang-list"},r.a.createElement("ul",null,r.a.createElement("li",null,"ReactJS"),r.a.createElement("li",null,"SCSS"),r.a.createElement("li",null,"Gatsby")),r.a.createElement("ul",null,r.a.createElement("li",null,"NodeJS"),r.a.createElement("li",null,"Express.js"),r.a.createElement("li",null,"Mongoose")),r.a.createElement("ul",null,r.a.createElement("li",null,"TypeScript"),r.a.createElement("li",null,"Git/Github"))))))):r.a.createElement(r.a.Fragment,null)}))}},JX7q:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},w1JH:function(e,t,n){"use strict";var a=n("JX7q"),r=n("dI71"),l=n("q1tI"),o=n.n(l),i=n("i8i4"),u=n.n(i),c=n("/eHF"),d=n.n(c),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={hasAppeared:!1},n.checkScroll=n.checkScroll.bind(Object(a.a)(n)),n}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.checkScroll)},n.checkScroll=function(){u.a.findDOMNode(this).getBoundingClientRect().top+50<=window.innerHeight+window.scrollY&&(this.setState({hasAppeared:!0}),window.removeEventListener("scroll",this.checkScroll))},n.render=function(){return o.a.createElement(d.a,{left:!0,when:this.state.hasAppeared},this.props.children)},t}(o.a.Component);t.a=s}}]);
//# sourceMappingURL=component---src-pages-about-about-tsx-a45cea87930a9d5d7dcc.js.map