(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6kRj":function(e,t,o){},iUgQ:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return u}));var n=o("q1tI"),r=o.n(n),a=(o("6kRj"),o("0L7f")),i=o("oBNZ"),l=o.n(i);function u(){return r.a.createElement("div",{id:"header"},r.a.createElement(l.a,{left:!0},r.a.createElement("div",{id:"left-side"},r.a.createElement(a.a.Consumer,null,(function(e){return e?r.a.createElement("div",{id:"left-content"},r.a.createElement("div",{id:"name-text"},r.a.createElement("p",null,e.header_top),r.a.createElement("h1",null,"CRISTOBAL SZKUTNIK"),r.a.createElement("h2",null,e.header_degree)),r.a.createElement("div",{id:"description-text"},r.a.createElement("p",null,e.header_text)),r.a.createElement("div",{id:"header-button"},r.a.createElement("span",{onClick:function(){return window.scrollTo(0,window.innerHeight)}},e.header_btn))):r.a.createElement(r.a.Fragment,null)})))))}},oBNZ:function(e,t,o){"use strict";function n(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}function r(e,t){var o=t.left,n=t.right,r=t.up,a=t.down,i=t.top,l=t.bottom,u=t.big,d=t.mirror,f=t.opposite,s=(o?1:0)|(n?2:0)|(i||a?4:0)|(l||r?8:0)|(d?16:0)|(f?32:0)|(e?64:0)|(u?128:0);if(m.hasOwnProperty(s))return m[s];var v=o||n||r||a||i||l,p=void 0,b=void 0;if(v){if(!d!=!(e&&f)){var h=[n,o,l,i,a,r];o=h[0],n=h[1],i=h[2],l=h[3],r=h[4],a=h[5]}var E=u?"2000px":"100%";p=o?"-"+E:n?E:"0",b=a||i?"-"+E:r||l?E:"0"}return m[s]=(0,c.animation)((e?"to":"from")+" {"+(v?" transform: translate3d("+p+", "+b+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),m[s]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.defaults,t=e.children,o=(e.out,e.forever),a=e.timeout,i=e.duration,l=void 0===i?c.defaults.duration:i,u=e.delay,f=void 0===u?c.defaults.delay:u,m=e.count,s=void 0===m?c.defaults.count:m,v=n(e,["children","out","forever","timeout","duration","delay","count"]),p={make:r,duration:void 0===a?l:a,delay:f,forever:o,count:s,style:{animationFillMode:"both"},reverse:v.left};return(0,d.default)(v,p,p,t)}Object.defineProperty(t,"__esModule",{value:!0});var i,l=o("17x9"),u=o("eH+L"),d=(i=u)&&i.__esModule?i:{default:i},c=o("ar19"),f={out:l.bool,left:l.bool,right:l.bool,top:l.bool,bottom:l.bool,big:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},m={};a.propTypes=f,t.default=a,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-header-header-tsx-8ba44d7116dbd100aebc.js.map