(function(e){function t(t){for(var r,o,i=t[0],s=t[1],l=t[2],d=0,b=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==c[s]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},c={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2b1d":function(e,t,n){},"2bed":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,a,o){var i=Object(r["k"])("PlayerGrid");return Object(r["g"])(),Object(r["c"])(i)}var a=Object(r["q"])("data-v-1371b5c6");Object(r["i"])("data-v-1371b5c6");var o={class:"columns is-multiline is-mobile fill"};Object(r["h"])();var i=a((function(e,t,n,c,a,i){var s=Object(r["k"])("PlayerShow");return Object(r["g"])(),Object(r["c"])("div",o,[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(a.numberOfPlayers,(function(e){return Object(r["g"])(),Object(r["c"])(s,{key:e,number:e},null,8,["number"])})),128))])})),s=Object(r["q"])("data-v-5416de6b");Object(r["i"])("data-v-5416de6b");var l={class:"columns is-flex-direction-column is-flex-grow-1 is-mobile"},u={class:"column is-flex is-justify-content-space-between"},d={class:"has-text-white text-shadow"},b={class:"column is-flex is-flex-grow-1 is-align-items-center is-justify-content-space-between"},f={class:"title has-text-white is-size-1 text-shadow"},m=Object(r["d"])("div",{class:"column"},null,-1),p=Object(r["d"])("div",{class:"modal-background"},null,-1),j={class:"modal-content"};Object(r["h"])();var O=s((function(e,t,n,c,a,o){var i=Object(r["k"])("font-awesome-icon"),s=Object(r["k"])("PlayerForm");return Object(r["g"])(),Object(r["c"])(r["a"],null,[Object(r["d"])("div",{class:"column is-flex is-6 p-5",style:o.styleObject},[Object(r["d"])("div",l,[Object(r["d"])("div",u,[Object(r["d"])("div",null,[Object(r["d"])("p",d,Object(r["l"])(a.player),1)]),Object(r["d"])("div",null,[Object(r["d"])(i,{icon:a.faCog,size:"lg",class:"has-text-white",onClick:o.openForm},null,8,["icon","onClick"])])]),Object(r["d"])("div",b,[Object(r["d"])("div",{onClick:t[1]||(t[1]=function(){return o.decreaseLife&&o.decreaseLife.apply(o,arguments)})},[Object(r["d"])(i,{icon:a.faMinusSquare,size:"lg",class:"has-text-white"},null,8,["icon"])]),Object(r["d"])("div",null,[Object(r["d"])("h1",f,Object(r["l"])(a.life),1)]),Object(r["d"])("div",{onClick:t[2]||(t[2]=function(){return o.increaseLife&&o.increaseLife.apply(o,arguments)})},[Object(r["d"])(i,{icon:a.faPlusSquare,size:"lg",class:"has-text-white"},null,8,["icon"])])]),m])],4),Object(r["d"])("div",{class:["modal",{"is-active":a.showForm}]},[p,Object(r["d"])("div",j,[Object(r["d"])(s,{onPlayerSubmit:o.save},null,8,["onPlayerSubmit"])]),Object(r["d"])("button",{class:"modal-close is-large","aria-label":"close",onClick:t[3]||(t[3]=function(){return o.closeForm&&o.closeForm.apply(o,arguments)})})],2)],64)})),h=(n("a9e3"),n("ad3d")),y=n("c074"),v={class:"box is-mobile"},g={class:"field"},w=Object(r["d"])("label",{for:"player",class:"label"},"Player",-1),x={class:"control"},P={class:"field"},k=Object(r["d"])("label",{for:"query",class:"label"},"Commander",-1),S={class:"control"},q={class:"help is-warning"},F={class:"help is-danger"},_={class:"field"},C={class:"control"};function M(e,t,n,c,a,o){return Object(r["g"])(),Object(r["c"])("div",v,[Object(r["d"])("form",{onSubmit:t[4]||(t[4]=Object(r["p"])((function(){}),["prevent"]))},[Object(r["d"])("div",g,[w,Object(r["d"])("div",x,[Object(r["o"])(Object(r["d"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.player=e}),name:"player",type:"text",class:"input"},null,512),[[r["m"],a.player]])])]),Object(r["d"])("div",P,[k,Object(r["d"])("div",S,[Object(r["o"])(Object(r["d"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.query=e}),name:"query",type:"text",class:["input",{"is-danger":a.hasError,"is-warning":a.hasWarning}]},null,2),[[r["m"],a.query]])]),Object(r["o"])(Object(r["d"])("p",q,"Multiple cards found",512),[[r["n"],a.hasWarning]]),Object(r["o"])(Object(r["d"])("p",F,"Card not found",512),[[r["n"],a.hasError]])]),Object(r["d"])("div",_,[Object(r["d"])("div",C,[Object(r["d"])("button",{class:"button is-link",type:"button",onClick:t[3]||(t[3]=function(){return o.submit&&o.submit.apply(o,arguments)})}," Submit ")])])],32)])}n("b0c0"),n("d3b7"),n("96cf");var L=n("1da1"),z="https://api.scryfall.com/",E={name:"PlayerForm",data:function(){return{player:"Player",commander:{name:"",image:""},query:"",hasError:!1,hasWarning:!1}},methods:{submit:function(){var e=this;return Object(L["a"])(regeneratorRuntime.mark((function t(){var n,r,c,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=encodeURI("".concat(z,"/cards/search?q=").concat(e.query)),t.next=3,fetch(n);case 3:if(r=t.sent,r.ok){t.next=7;break}return e.hasError=!0,t.abrupt("return");case 7:return t.next=9,r.json();case 9:if(c=t.sent,!(c.total_cards>1)){t.next=13;break}return e.hasWarning=!0,t.abrupt("return");case 13:a=c.data[0],e.commander={name:a.name,image:a.image_uris.art_crop},e.$emit("player-submit",e.player,e.commander),e.reset();case 17:case"end":return t.stop()}}),t)})))()},reset:function(){this.player="Player",this.commander={name:"",image:""},this.query="",this.hasError=!1,this.hasWarning=!1}}};E.render=M;var I=E,W=40,R="https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/4/c4300d24-1cae-4dd5-be7e-38cc677cf5bd.jpg?1559591399",G={name:"PlayerShow",components:{PlayerForm:I,FontAwesomeIcon:h["a"]},props:{number:{type:Number,required:!0}},data:function(){return{faCog:y["a"],faMinusSquare:y["b"],faPlusSquare:y["c"],showForm:!1,player:"Player",commander:{name:"",image:R},life:W}},methods:{openForm:function(){this.showForm=!0},closeForm:function(){this.showForm=!1},save:function(e,t){this.closeForm(),this.player=e,this.commander=t},decreaseLife:function(){console.log("decrease life"),this.life-=1},increaseLife:function(){console.log("increase life"),this.life+=1}},computed:{styleObject:function(){return{backgroundImage:"url(".concat(this.commander.image,")"),backgroundPosition:"top",backgroundRepeat:"no-repeat",backgroundSize:"cover",boxShadow:"inset 0 0 3em 1.25em #000"}}}};n("75ee");G.render=O,G.__scopeId="data-v-5416de6b";var U=G,A={name:"PlayerGrid",components:{PlayerShow:U},data:function(){return{numberOfPlayers:4}}};n("f108");A.render=i,A.__scopeId="data-v-1371b5c6";var J=A,T={name:"App",components:{PlayerGrid:J}};n("ebb7");T.render=c;var V=T;Object(r["b"])(V).mount("#app")},"5b2e":function(e,t,n){},"75ee":function(e,t,n){"use strict";n("2bed")},ebb7:function(e,t,n){"use strict";n("5b2e")},f108:function(e,t,n){"use strict";n("2b1d")}});
//# sourceMappingURL=app.a9155a18.js.map