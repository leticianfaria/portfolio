(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(37)},18:function(e,t,a){},24:function(e,t,a){},27:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/leticia.61cbb816.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/mockup.916c59bf.png"},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(11),r=a.n(l),i=(a(18),a(6)),o=a(1),s=a(2),m=a(4),u=a(3),h=a(5),E=a(7),d=a.n(E);a(24);var p=function(e){return c.a.createElement("section",{id:e.id,className:e.className},e.children)},b=(a(27),a(12)),f=a.n(b);function v(e){return c.a.createElement("button",{className:"nav-item"},e.children)}var k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={links:["about","skills","portfolio","contact"]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",null,this.state.links.map(function(e,t){return c.a.createElement(f.a,{selector:"#"+e},c.a.createElement(v,{key:t},e))}))}}]),t}(n.Component);var O=function(e){return c.a.createElement("img",{className:e.className,src:e.src})};a(31);var N=function(e){return c.a.createElement("button",{id:e.index,onClick:e.onClick,className:e.className},e.children)};var j=function(){return c.a.createElement("footer",null,c.a.createElement("small",null,"MADE BY ",c.a.createElement("a",{href:"#"},"LET\xcdCIA FARIA.")))};a(33);var g=function(e){return c.a.createElement("h1",{className:"h1-content"},e.children)},y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={textIndex:0},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval(function(){22===e.state.textIndex&&clearInterval(t),e.setState(function(e){return{textIndex:e.textIndex+1}})},180)}},{key:"render",value:function(){var e=this.state.textIndex;return c.a.createElement("main",{className:"intro-content"},c.a.createElement("h1",{className:"h1-intro"},"Hi, I\u2019m Let\xedcia Faria"),c.a.createElement("h2",{className:"typewrite"},"<Front-End Developer />".slice(0,e)))}}]),t}(n.Component);function w(){return c.a.createElement(p,{id:"intro",className:"intro"},c.a.createElement(k,null),c.a.createElement(y,null))}function C(){return c.a.createElement(p,{id:"about",className:"about"},c.a.createElement(d.a,{bottom:!0},c.a.createElement(g,null,"About me"),c.a.createElement("div",{className:"about-content"},c.a.createElement("div",{className:"about-img-container"},c.a.createElement(O,{className:"about-img",src:a(35)})),c.a.createElement("p",null,"Hey! My name is Let\xedcia Faria and I'm 21. I'm a Front-end developer and a tech lover. I believe that with dedication and hard work all ours goals can be reached. I like learning new things and finding creative ways to solve problems.",c.a.createElement("br",null)," ",c.a.createElement("br",null),c.a.createElement("i",null,'"Those who can imagine anything, can create the impossible."'),c.a.createElement("small",null," - Alan Turing;"),c.a.createElement(N,{className:"btn"},"VIEW CV")))))}var I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={front:["HTML","CSS","Bootstrap","Materialize","SASS","Javascript","Vanilla","jQuery","React","Web APIs","Gulp","Responsive Design"],back:["Node.js","express.js","socket.io","mocha & chai","Database","SQL","Firebase"],uxui:["Wireframing","Prototyping","Usability","Visual Communication"]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(p,{id:"skills",className:"skills"},c.a.createElement(d.a,{bottom:!0},c.a.createElement(g,null,"Skills"),c.a.createElement("div",{className:"skills-content"},c.a.createElement("div",null,c.a.createElement("h2",null,"Front-End"),this.state.front.map(function(e,t){return"Bootstrap"!==e&&"Materialize"!==e&&"Vanilla"!==e&&"jQuery"!==e?c.a.createElement("p",{key:t},e):c.a.createElement("small",{key:t,className:"sub-skill"},e)})),c.a.createElement("div",null,c.a.createElement("h2",null,"Back-End"),this.state.back.map(function(e,t){return"Node.js"!==e&&"Database"!==e?c.a.createElement("small",{key:t,className:"sub-skill"},e):c.a.createElement("p",{key:t},e)})),c.a.createElement("div",null,c.a.createElement("h2",null,"UX/UI"),this.state.uxui.map(function(e,t){return c.a.createElement("p",{key:t},e)})))))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(i.a)(Object(i.a)(a))),a.state={buttons:["E-COMMERCE","CHAT","SOCIAL NETWORK","DASHBOARD","FOODMAP","TWITTER"]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t="",a="";"E-COMMERCE"===e?(t="./ecommerce.png",a="https://ecommerce-spa.herokuapp.com/"):"DASHBOARD"===e?(t="./dashboard.png",a="https://leticianfaria.github.io/data-dashboard/"):"CHAT"===e?(t="./chat.png",a="https://chat-maluco.herokuapp.com/"):"SOCIAL NETWORK"===e?(t="./social-network.png",a="https://rede-social-e1d56.firebaseapp.com/"):"FOODMAP"===e?(t="./foodmap.png",a="https://leticianfaria.github.io/foodmap/"):"TWITTER"===e&&(t="./twitter.png",a="https://leticianfaria.github.io/twitter/"),this.setState({imgSrc:t}),this.setState({url:a})}},{key:"render",value:function(){var e=this;return c.a.createElement(p,{id:"portfolio",className:"portfolio"},c.a.createElement(d.a,{bottom:!0},c.a.createElement(g,null,"My works"),c.a.createElement("div",{className:"container"},c.a.createElement("a",{className:"live-view",href:this.state.url},c.a.createElement(O,{className:"mockup",src:a(36)}),c.a.createElement(O,{className:"image",src:this.state.imgSrc}))),c.a.createElement("div",{className:"works-options"},this.state.buttons.map(function(t,a){return c.a.createElement(N,{key:a,onClick:function(){return e.handleClick(t)},className:"works"},t)}))))}}]),t}(n.Component);function x(){return c.a.createElement(p,{id:"contact",className:"contact"},c.a.createElement(d.a,{bottom:!0},c.a.createElement(g,null,"Contact me"),c.a.createElement("div",null,c.a.createElement("p",null,"You can send me an email at",c.a.createElement("a",{href:"#"},"leticianfaria@hotmail.com")),c.a.createElement("p",null,"You can find me on",c.a.createElement("a",{href:"https://github.com/leticianfaria"},"Github"),c.a.createElement("a",{href:"https://linkedin.com/in/leticianfaria"},"LinkedIn")))))}var S=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(w,null),c.a.createElement(C,null),c.a.createElement(I,null),c.a.createElement(A,null),c.a.createElement(x,null),c.a.createElement(j,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.c90fc0b0.chunk.js.map