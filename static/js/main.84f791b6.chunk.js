(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(18)},16:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(2),o=t.n(c),i=(t(16),t(7)),s=t(3),m=t(4),p=t(8),l=t(5),u=t(9),d=function(e){function a(){return Object(s.a)(this,a),Object(p.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Product"},r.a.createElement("h1",null,this.props.name),r.a.createElement("img",{className:"productimage",src:this.props.image,alt:""}),r.a.createElement("p",null,this.props.desc),r.a.createElement("p",null,this.props.price))}}]),a}(r.a.Component),g=t(6);t(17);var h=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],o=g.filter(function(e){return e.name.toLowerCase().indexOf(t)>-1});return r.a.createElement("div",{className:"App"},r.a.createElement("form",{className:"search-form"},r.a.createElement("input",{className:"search-bar",type:"text",value:t,onChange:function(e){c(e.target.value)}})),r.a.createElement("div",{className:"Products"},o.map(function(e){return r.a.createElement(d,{key:e.name,name:e.name,image:e.image,desc:e.desc,price:e.price})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports=[{name:"Laptop",image:"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6KQQ?ver=4b2e",desc:"A basic laptop computer.",price:"$1000"},{name:"Mouse",image:"https://media.flixcar.com/f360cdn/Microsoft-1608458921-BOM_comp_FY12-zoom.png",desc:"A basic computer mouse.",price:"$5"},{name:"Keyboard",image:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c04897548.png",desc:"A rubberdome keyboard.",price:"$7.50"},{name:"Monitor",image:"https://static.acer.com/up/Resource/Acer/Monitors/AGW2%20Everyday/Images/20131101/K202HQL_sku_preview.png",desc:"A basic 1080p monitor.",price:"$7.50"},{name:"Desktop",image:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05920518.png",desc:"A basic 1080p monitor.",price:"$7.50"}]}},[[10,1,2]]]);
//# sourceMappingURL=main.84f791b6.chunk.js.map