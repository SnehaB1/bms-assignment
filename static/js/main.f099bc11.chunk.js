(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){},150:function(e,t,a){e.exports=a(299)},159:function(e,t,a){},293:function(e,t,a){},294:function(e,t,a){e.exports=a.p+"static/media/bookmyshow.44a177ec.webp"},298:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),s=a.n(i),c=a(130),l=a(31),o=a(27),u=a(28),m=a(32),p=a(29),d=a(33),h=a(143),f=a(40),v=a(55),C=a(24),E=a(300),L=a(301),w=a(302),g=a(14),b=a(82),y=(a(159),function(e){return{type:"UPDATELIST",payload:e}}),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).init=function(){var e=a.props.numberList,t=[];Object.keys(e).map(function(a){return t.push(e[a])}),a.setState({arrayList:t})},a.hasErrors=function(e){return Object.keys(e).some(function(t){return e[t]})},a.updateArrayList=function(){var e=a.state,t=e.arrayList,n=e.duplicateValues,r=e.uniqueValues;n.map(function(e){a.deleteValueFromArray(t,e)}),r.map(function(e){a.addValueToArray(t,e)})},a.appendValuesBetweenRange=function(e,t){var a=t.split("-"),n=parseInt(a[0]),r=parseInt(a[1]);if(r>=n){var i=n;for(i=n;i<=r;++i)e.push(parseInt(i))}return e},a.deleteValueFromArray=function(e,t){var a=e.indexOf(t);return a>-1&&e.splice(a,1),e.sort(function(e,t){return e-t})},a.addValueToArray=function(e,t){return e.push(t),e.sort(function(e,t){return e-t})},a.handleSubmit=function(e){var t=a.props.updateList,n=a.state.arrayList;Array.prototype.diff=function(e){return this.filter(function(t){return e.indexOf(t)<0})},e.preventDefault(),a.props.form.validateFields(function(e,r){if(!e){var i=r.inputNumber.split(", ");i.map(function(e){e.includes("-")&&(a.appendValuesBetweenRange(i,e),a.deleteValueFromArray(i,e))});var s=n.filter(function(e){return-1!==i.indexOf(e)}),c=i.diff(s);a.setState({duplicateValues:s,uniqueValues:c}),s.map(function(e){a.deleteValueFromArray(n,e)}),c.map(function(e){a.addValueToArray(n,e)}),t(n)}})},a.state={arrayList:[],duplicateValues:[],uniqueValues:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"render",value:function(){var e=this.state,t=e.arrayList,a=e.duplicateValues,n=e.uniqueValues,i=this.props.form,s=i.getFieldDecorator,c=i.getFieldsError,l=i.getFieldError,o=(0,i.isFieldTouched)("inputNumber")&&l("inputNumber");return r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(C.a,null,r.a.createElement("h2",{className:"heading"},"Assignment #1"))),r.a.createElement(v.a,{align:"middle",className:"form-container"},r.a.createElement(C.a,{span:12,offset:6},r.a.createElement(E.a,{className:"card-container"},r.a.createElement(L.a,{layout:"inline",onSubmit:this.handleSubmit,className:"form"},r.a.createElement(L.a.Item,{validateStatus:o?"error":"",help:o||"E.g. 67, 78, 98-103"},s("inputNumber",{rules:[{required:!0,message:"Please input numbers!"}]})(r.a.createElement(w.a,{prefix:r.a.createElement(g.a,{type:"number",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Input Numbers"}))),r.a.createElement(L.a.Item,null,r.a.createElement(b.a,{type:"primary",htmlType:"submit",disabled:this.hasErrors(c())},"GO",r.a.createElement(g.a,{type:"right"})))),r.a.createElement(v.a,null,r.a.createElement(C.a,null,a.length>0&&r.a.createElement("p",null,r.a.createElement("b",{style:{color:"#ff0000"}},"Duplicate Values(deleted from list): "),a.join(", ")),n.length>0&&r.a.createElement("p",null,r.a.createElement("b",{style:{color:"#4BB543"}},"Unique Values(added to list): "),n.join(", ")),r.a.createElement("p",null,r.a.createElement("b",{style:{color:"#1890ff"}},"Current List: "),t.join(", "))))))))}}]),t}(r.a.Component),T=L.a.create({name:"assgn1"})(N),O=Object(l.b)(function(e){var t=e.assignment1;return console.log(e),{numberList:t}},function(e){return{updateList:function(t){return e(y(t))}}})(T),k=a(107),j=a.n(k),A=(a(129),function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"#fff",d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"}))}),M=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 48 48"},r.a.createElement("path",{d:"M 23 3 C 22.449219 3 22 3.449219 22 4 L 22 11.75 L 18 22 L 18 43 C 18.414063 44.164063 19.695313 45 21 45 L 40 45 C 42.207031 45 44 43.207031 44 41 C 44 40.175781 43.738281 39.417969 43.3125 38.78125 C 44.871094 38.234375 46 36.742188 46 35 C 46 34.019531 45.648438 33.132813 45.0625 32.4375 C 46.222656 31.738281 47 30.453125 47 29 C 47 28.019531 46.648438 27.132813 46.0625 26.4375 C 47.222656 25.738281 48 24.453125 48 23 C 48 20.792969 46.207031 19 44 19 L 29.375 19 C 29.984375 17.070313 31 13.617188 31 12 C 31 8.234375 28.242188 3 25.53125 3 Z M 3 19 C 2.714844 19 2.441406 19.128906 2.25 19.34375 C 2.058594 19.558594 1.964844 19.839844 2 20.125 L 5 44.125 C 5.0625 44.625 5.496094 45 6 45 L 15 45 C 15.550781 45 16 44.554688 16 44 L 16 20 C 16 19.449219 15.550781 19 15 19 Z M 11.5 38 C 12.328125 38 13 38.671875 13 39.5 C 13 40.328125 12.328125 41 11.5 41 C 10.671875 41 10 40.328125 10 39.5 C 10 38.671875 10.671875 38 11.5 38 Z "}))},x=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 64 64"},r.a.createElement("path",{d:"M 16 5 C 14.344 5 13 6.344 13 8 L 13 11 L 8 11 C 6.344 11 5 12.344 5 14 L 5 56 C 5 57.656 6.344 59 8 59 L 56 59 C 57.656 59 59 57.656 59 56 L 59 14 C 59 12.344 57.656 11 56 11 L 51 11 L 51 8 C 51 6.344 49.656 5 48 5 C 46.344 5 45 6.344 45 8 L 45 11 L 35 11 L 35 8 C 35 6.344 33.656 5 32 5 C 30.344 5 29 6.344 29 8 L 29 11 L 19 11 L 19 8 C 19 6.344 17.656 5 16 5 z M 16 7 C 16.551 7 17 7.449 17 8 L 17 16 C 17 16.551 16.551 17 16 17 C 15.449 17 15 16.551 15 16 L 15 8 C 15 7.449 15.449 7 16 7 z M 32 7 C 32.551 7 33 7.449 33 8 L 33 16 C 33 16.551 32.551 17 32 17 C 31.449 17 31 16.551 31 16 L 31 8 C 31 7.449 31.449 7 32 7 z M 48 7 C 48.551 7 49 7.449 49 8 L 49 16 C 49 16.551 48.551 17 48 17 C 47.449 17 47 16.551 47 16 L 47 8 C 47 7.449 47.449 7 48 7 z M 8 13 L 13 13 L 13 16 C 13 17.656 14.344 19 16 19 C 17.656 19 19 17.656 19 16 L 19 13 L 29 13 L 29 16 C 29 17.656 30.344 19 32 19 C 33.656 19 35 17.656 35 16 L 35 13 L 45 13 L 45 16 C 45 17.656 46.344 19 48 19 C 49.656 19 51 17.656 51 16 L 51 13 L 56 13 C 56.551 13 57 13.449 57 14 L 57 21 C 56.449 21 56 21.449 56 22 L 56 24 C 56 24.551 56.449 25 57 25 L 57 56 C 57 56.551 56.551 57 56 57 L 8 57 C 7.449 57 7 56.551 7 56 L 7 25 C 7.551 25 8 24.551 8 24 L 8 22 C 8 21.449 7.551 21 7 21 L 7 14 C 7 13.449 7.449 13 8 13 z M 12 21 C 11.449 21 11 21.449 11 22 L 11 24 C 11 24.551 11.449 25 12 25 C 12.551 25 13 24.551 13 24 L 13 22 C 13 21.449 12.551 21 12 21 z M 17 21 C 16.449 21 16 21.449 16 22 L 16 24 C 16 24.551 16.449 25 17 25 C 17.551 25 18 24.551 18 24 L 18 22 C 18 21.449 17.551 21 17 21 z M 22 21 C 21.449 21 21 21.449 21 22 L 21 24 C 21 24.551 21.449 25 22 25 C 22.551 25 23 24.551 23 24 L 23 22 C 23 21.449 22.551 21 22 21 z M 27 21 C 26.449 21 26 21.449 26 22 L 26 24 C 26 24.551 26.449 25 27 25 C 27.551 25 28 24.551 28 24 L 28 22 C 28 21.449 27.551 21 27 21 z M 32 21 C 31.449 21 31 21.449 31 22 L 31 24 C 31 24.551 31.449 25 32 25 C 32.551 25 33 24.551 33 24 L 33 22 C 33 21.449 32.551 21 32 21 z M 37 21 C 36.449 21 36 21.449 36 22 L 36 24 C 36 24.551 36.449 25 37 25 C 37.551 25 38 24.551 38 24 L 38 22 C 38 21.449 37.551 21 37 21 z M 42 21 C 41.449 21 41 21.449 41 22 L 41 24 C 41 24.551 41.449 25 42 25 C 42.551 25 43 24.551 43 24 L 43 22 C 43 21.449 42.551 21 42 21 z M 47 21 C 46.449 21 46 21.449 46 22 L 46 24 C 46 24.551 46.449 25 47 25 C 47.551 25 48 24.551 48 24 L 48 22 C 48 21.449 47.551 21 47 21 z M 52 21 C 51.449 21 51 21.449 51 22 L 51 24 C 51 24.551 51.449 25 52 25 C 52.551 25 53 24.551 53 24 L 53 22 C 53 21.449 52.551 21 52 21 z M 14 28 C 13.448 28 13 28.448 13 29 L 13 47 C 13 47.552 13.448 48 14 48 L 50 48 C 50.552 48 51 47.552 51 47 L 51 29 C 51 28.448 50.552 28 50 28 L 14 28 z M 15 30 L 22 30 L 22 37 L 15 37 L 15 30 z M 24 30 L 31 30 L 31 37 L 24 37 L 24 30 z M 33 30 L 40 30 L 40 37 L 33 37 L 33 30 z M 42 30 L 49 30 L 49 37 L 42 37 L 42 30 z M 15 39 L 22 39 L 22 46 L 15 46 L 15 39 z M 24 39 L 31 39 L 31 46 L 24 46 L 24 39 z M 33 39 L 40 39 L 40 46 L 33 46 L 33 39 z M 42 39 L 49 39 L 49 46 L 42 46 L 42 39 z M 10 51 C 9.449 51 9 51.449 9 52 C 9 52.551 9.449 53 10 53 L 54 53 C 54.551 53 55 52.551 55 52 C 55 51.449 54.551 51 54 51 L 10 51 z"}))},D=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M 12.298828 2.0078125 C 9.2536504 1.8592539 6.6687031 3.9932031 6.1113281 6.8457031 C 5.9933281 7.4477031 6.4914687 8 7.1054688 8 C 7.5894687 8 7.9859375 7.6497813 8.0859375 7.1757812 C 8.5179375 5.1197812 10.534922 3.6391719 12.794922 4.0761719 C 14.716922 4.4481719 16.103141 6.2667031 15.994141 8.2207031 C 15.908141 9.7697031 14.910672 10.751859 13.763672 11.880859 C 12.712672 12.915859 11.548484 14.061281 11.146484 15.738281 C 10.992484 16.377281 11.460188 17 12.117188 17 C 12.594188 17 12.981703 16.657359 13.095703 16.193359 C 13.373703 15.069359 14.217016 14.238687 15.166016 13.304688 C 16.490016 12.001688 17.99 10.525391 18 8.0253906 C 18.011 5.2883906 16.274906 2.9158438 13.628906 2.2148438 C 13.179656 2.0958438 12.733854 2.0290352 12.298828 2.0078125 z M 11.5 20 C 11.224 20 11 20.224 11 20.5 L 11 21.5 C 11 21.776 11.224 22 11.5 22 L 12.5 22 C 12.776 22 13 21.776 13 21.5 L 13 20.5 C 13 20.224 12.776 20 12.5 20 L 11.5 20 z"}))},z=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M 2 2 C 1.448 2 1 2.448 1 3 L 1 13 C 1 13.552 1.448 14 2 14 L 4 14 C 4.552 14 5 13.552 5 13 L 5 3 C 5 2.448 4.552 2 4 2 L 2 2 z M 9 2 C 7.895 2 7 2.895 7 4 L 7 13.992188 C 7 14.522187 7.2099844 15.029297 7.5839844 15.404297 L 13.113281 20.945312 C 13.696281 21.529312 14.640516 21.533078 15.228516 20.955078 C 15.595516 20.594078 15.752578 20.068453 15.642578 19.564453 L 14.648438 15 L 21 15 C 22.105 15 23 14.105 23 13 L 23 11.001953 C 23 10.730953 22.944891 10.461891 22.837891 10.212891 L 19.830078 3.2109375 C 19.515078 2.4759375 18.791188 2 17.992188 2 L 9 2 z"}))},S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={trailerCode:"",trailerVisible:!1,hideTrailer:!1,addStyle:a.props.index===a.props.activeTrailer.activeIndex,activeElement:{}},a.myInput=r.a.createRef(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.index;var e=this.state;e.itemsPerRow,e.minOffsetTop;this.sendValueToParent(),window.addEventListener("resize",this.sendValueToParent.bind(this))}},{key:"sendValueToParent",value:function(){var e=this.props.index;this.state.trailerVisible&&this.handleClick(),e<10&&this.props.getNumberOfItems(e,this.myInput.current.offsetTop)}},{key:"handleClick",value:function(){this.setState({trailerVisible:!0});var e=this.props.onClickTrailer(this.props.index,this.props.item);this.setState({activeElement:e})}},{key:"render",value:function(){var e=this,t=this.props,a=t.apiData,n=t.item,i=t.showTrailer,s=t.activeTrailer,c=this.state,l=c.hideTrailer,o=(c.addStyle,a[n]),u=o.DispReleaseDate,m=o.wtsCount,p=o.wtsPerc,d=o.EventTitle,h=s.activeEventTitle,f=s.activeTrailerURL,E=s.activeEventLanguage,L=s.activeEventGenre,w=s.activeShowDate,b=s.activeWtsPerc,y=s.activeWtsCount,N=s.activeDwtsCount,T=s.activeMaybeCount,O=s.activeIndex;return r.a.createElement(r.a.Fragment,null,i&&!l?r.a.createElement("div",{className:"trailer-row"},r.a.createElement("div",{className:"close",onClick:function(){return e.setState({hideTrailer:!0})}},r.a.createElement(g.a,{type:"close",className:"icon-close"})),r.a.createElement("div",{className:"iframe-col"},r.a.createElement("iframe",{width:"100%",height:"100%",style:{border:"1px solid #000"},src:f})),r.a.createElement("div",{className:"trailer-info"},r.a.createElement("div",{className:"trailer-title"},h),r.a.createElement("div",{className:"trailer-language"},E),r.a.createElement("div",{className:"genre-wrapper"},L.split("|").map(function(e,t){return r.a.createElement("div",{className:"genre-item",key:t},e)})),r.a.createElement(v.a,null,r.a.createElement(C.a,{span:12},r.a.createElement(v.a,{type:"flex"},r.a.createElement(C.a,null,r.a.createElement(g.a,{component:M,className:"trailer-info-like"})),r.a.createElement(C.a,null,r.a.createElement(v.a,{className:"trailer-info-percentage"},b,"%"),r.a.createElement(v.a,{className:"trailer-info-wtscount"},y," votes")))),r.a.createElement(C.a,{span:12},r.a.createElement(v.a,{type:"flex"},r.a.createElement(C.a,null,r.a.createElement(g.a,{component:x,className:"trailer-info-calendar"})),r.a.createElement(C.a,null,r.a.createElement(v.a,{className:"trailer-info-percentage"},w.split(",")[0]),r.a.createElement(v.a,{className:"trailer-info-wtscount"},w.split(",")[1]))))),r.a.createElement(v.a,{className:"stats"},r.a.createElement(C.a,{span:8,className:"info-will-watch"},r.a.createElement(v.a,null,r.a.createElement(g.a,{component:M,className:"stats-like"})),r.a.createElement(v.a,{className:"will-watch-text"},"Will Watch"),r.a.createElement(v.a,{className:"will-watch-count"},"(",y,")")),r.a.createElement(C.a,{span:8,className:"info-maybe-watch"},r.a.createElement(v.a,null,r.a.createElement(g.a,{component:D,className:"stats-maybe"})),r.a.createElement(v.a,{className:"maybe-watch-text"},"Maybe"),r.a.createElement(v.a,{className:"maybe-watch-count"},"(",T,")")),r.a.createElement(C.a,{span:8,className:"info-not-watch"},r.a.createElement(v.a,null,r.a.createElement(g.a,{component:z,className:"stats-dislike"})),r.a.createElement(v.a,{className:"not-watch-text"},"Won't Watch"),r.a.createElement(v.a,{className:"not-watch-count"},"(",N,")"))))):null,r.a.createElement("div",{className:"trailer-thumbmail ".concat(this.props.index!==O||l?null:"selectedItem"),ref:this.myInput,onClick:function(){return e.handleClick()}},r.a.createElement("div",{className:"trailers-container"},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:"https://in.bmscdn.com/events/moviecard/".concat(n,".jpg"),alt:"Bookmyshow Trailers",className:"trailers-image"}),r.a.createElement("div",{className:"trailer-date"},r.a.createElement("div",{className:"date"},j()(u).format("DD")),r.a.createElement("div",{className:"month"},j()(u).format("MMM"))),r.a.createElement("div",{className:"trailer-play"},r.a.createElement(g.a,{component:A,className:"play-button"})),r.a.createElement("div",{className:"trailer-like"},r.a.createElement(g.a,{component:M,className:"like"}),p,"%",r.a.createElement("p",{className:"votes"},m.toLocaleString(navigator.language,{minimumFractionDigits:0})," votes")))),r.a.createElement("div",{className:"trailer-name"},d)))}}]),t}(r.a.Component),I=Object(l.b)(function(e){return{activeTrailer:e.activeTrailer}})(S),R=function(e){return{type:"UPDATEACTIVETRAILER",payload:e}},V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={itemsPerRow:0,offsetTopArray:[],rowAbove:void 0,windowWidth:window.innerWidth},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onChangeWidth(),window.addEventListener("resize",this.initialiseArray.bind(this)),R({})}},{key:"initialiseArray",value:function(){this.setState({offsetTopArray:[]})}},{key:"onChangeWidth",value:function(){this.state.windowWidth!==window.innerWidth&&this.findMinRow(),this.setState({windowWidth:window.innerWidth})}},{key:"getNumberOfItems",value:function(e,t){this.state.offsetTopArray.push(t),e>8&&this.findMinRow()}},{key:"countOccurence",value:function(){var e=this.state.offsetTopArray,t=0,a=e[0];return e.map(function(e){if(e!==a)return t;t++}),t}},{key:"findMinRow",value:function(){var e=this.countOccurence();this.setState({itemsPerRow:e})}},{key:"onClickTrailer",value:function(e,t){var a=this.props,n=a.apiData,r=a.updateActiveTrailerData,i=this.state.itemsPerRow,s=n[t],c=s.EventTitle,l=s.TrailerURL,o=s.EventLanguage,u=s.EventGenre,m=s.ShowDate,p=s.wtsPerc,d=s.wtsCount,h=s.dwtsCount,f=s.maybeCount,v=Math.floor(parseInt(e)/parseInt(i));this.setState({rowAbove:v});var C=l.indexOf("v=");r({activeEventTitle:c,activeTrailerURL:"https://www.youtube.com/embed/".concat(l.substring(C+2,C+13),"?autoplay=1&mute=1&enablejsapi=1"),activeEventLanguage:o,activeEventGenre:u,activeShowDate:m,activeWtsPerc:p,activeWtsCount:d,activeDwtsCount:h,activeMaybeCount:f,activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.props.apiData,a=this.state,n=a.itemsPerRow,i=a.rowAbove;return r.a.createElement("div",null,r.a.createElement(v.a,{className:"heading-row"},r.a.createElement("p",{className:"two-heading"},"Movie Trailers"),r.a.createElement(b.a,{className:"coming-soon-button"},"Coming Soon")),r.a.createElement("div",{className:"trailer-wrapper",style:{}},Object.keys(t).map(function(a,s){return r.a.createElement(I,{apiData:t,item:a,key:s,index:s,getNumberOfItems:function(t,a){return e.getNumberOfItems(t,a)},onClickTrailer:function(t,a){return e.onClickTrailer(t,a)},showTrailer:s===n*i})})))}}]),t}(r.a.Component),W=Object(l.b)(function(e){return{apiData:e.assignment2}},function(e){return{updateActiveTrailerData:function(t){return e(R(t))}}})(V),P=a(54),B=a.n(P),U=a(78),F=(a(293),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(U.a)(B.a.mark(function e(){var t,a,n,r,i;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.updateList,n=t.getTrailersData,r=t.storeApiData,a([101,102,103,104,105,106,107,108,109,110]),e.next=4,n();case 4:(i=e.sent)&&r(i[1]);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:a(294),className:"App-logo",alt:"logo"}),r.a.createElement("h2",null,"Assignment"),r.a.createElement("div",null,r.a.createElement("button",{className:"select-button",onClick:function(){return e.props.history.push("/assignment1/")}},"Assignment #1"),r.a.createElement("button",{className:"select-button",onClick:function(){return e.props.history.push("/assignment2/")}},"Assignment #2"))))}}]),t}(r.a.Component)),q=Object(l.b)(null,function(e){return{updateList:function(t){return e(y(t))},getTrailersData:function(){return e(function(){var e=Object(U.a)(B.a.mark(function e(t){var a,n;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://cors.io/?https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs",{method:"GET",headers:{"Content-type":"text/plain"}});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),console.log("api-error",e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}())},storeApiData:function(t){return e({type:"STOREAPIDATA",payload:t})}}})(F),G=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{basename:"/bms-assignment"},r.a.createElement(f.a,{exact:!0,path:"/",component:q}),r.a.createElement(f.a,{path:"/assignment1/",component:O}),r.a.createElement(f.a,{path:"/assignment2/",component:W}))}}]),t}(r.a.PureComponent),Z=a(21),J=a(110),$=a(144),_=a.n($),H=a(145),K=a(34),Q=a(146),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=Object(Q.a)(t,["type"]);switch(a){case"STORE_USER":e=Object(K.a)({},e,n);break;default:e=Object(K.a)({},e)}return e},Y=Object(Z.c)({app:X,assignment1:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"UPDATELIST":return Object(K.a)({},e,n);default:return e}},assignment2:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"STOREAPIDATA":return Object(K.a)({},e,n);default:return e}},activeTrailer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"UPDATEACTIVETRAILER":return Object(K.a)({},e,n);default:return e}}}),ee={key:"root",storage:_.a,whitelist:["app","assignment1","assignment2","activeTrailer"]},te=Object(J.a)(ee,Y),ae=(a(298),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ne(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var re=function(){var e=Object(Z.d)(te,Object(Z.a)(H.a));return{store:e,persistor:Object(J.b)(e)}}();s.a.render(r.a.createElement(l.a,{store:re.store},r.a.createElement(c.a,{loading:null,persistor:re.persistor},r.a.createElement(G,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/bms-assignment",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/bms-assignment","/service-worker.js");ae?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ne(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ne(t,e)})}}()}},[[150,1,2]]]);
//# sourceMappingURL=main.f099bc11.chunk.js.map