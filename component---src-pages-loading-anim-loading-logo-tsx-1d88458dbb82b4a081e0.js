(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{JX7q:function(t,e,s){"use strict";function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}s.d(e,"a",(function(){return i}))},oFLc:function(t,e,s){"use strict";s.r(e);var i=s("JX7q"),n=s("dI71"),a=s("q1tI"),o=s.n(a),r=function(t){function e(e){var s;return(s=t.call(this,e)||this).state={points:[[125,5],[5,80],[5,230],[125,305],[255,230],[255,80],[125,5]],completeStr:"125,5",str:"125,5 125,5",last:0,finished:!1,alpha:0},s.hexagonAnim=s.hexagonAnim.bind(Object(i.a)(s)),s}Object(n.a)(e,t);var s=e.prototype;return s.componentDidMount=function(){this.interval=setInterval(this.hexagonAnim,10)},s.hexagonAnim=function(){var t=this;if(this.state.alpha>=1){var e,s=this.state.last+1===this.state.points.length-1;e=s?this.state.points.length-1:this.state.last+1;var i=this.state.completeStr+" ";if(i+=this.state.points[e][0]+","+this.state.points[e][1],s)return this.setState({str:i,completeStr:i,last:e}),clearInterval(this.interval),setTimeout((function(){return t.setState({finished:!0})}),150),setTimeout(this.props.showPage,300),void setTimeout(this.props.doneAnim,300);this.setState({str:i,completeStr:i,last:e,alpha:0})}var n=this.state.points[this.state.last],a=n[0],o=n[1],r=this.state.points[this.state.last+1],h=r[0],l=r[1],p=this.state.alpha,c=this.state.completeStr+" ";c+=a+(h-a)*p+",",c+=o+(l-o)*p,this.setState({str:c,alpha:p+.05})},s.render=function(){return o.a.createElement("svg",{id:"loading-svg",height:"310",width:"260",style:{transition:"all 0.5s ease-in-out",transform:"scale("+(this.state.finished?0:.4)+")",opacity:""+(this.state.finished?0:1)}},o.a.createElement("polyline",{style:{stroke:"#E94560",fill:"rgba(0,0,0,0)",strokeLinejoin:"round"},strokeWidth:"8px",points:this.state.str}),o.a.createElement("text",{style:{fill:"#E94560",transition:"all 0.25s ease-in-out"},x:"53",y:"190",fontFamily:"Poppins",fontSize:"110"},"CS"))},e}(o.a.Component);e.default=r}}]);
//# sourceMappingURL=component---src-pages-loading-anim-loading-logo-tsx-1d88458dbb82b4a081e0.js.map