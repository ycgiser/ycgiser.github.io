webpackJsonp([1],{AueA:function(t,s){},CzY3:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("4bK6"),a=e.n(i),n={name:"first",data:function(){return{isClicked:!1}},methods:{turn2Next:function(){var t=this;this.isClicked=!0,setTimeout(function(){t.$router.push({name:"second"})},1e3)}}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main"},[t._m(0),t._v(" "),e("figure",{staticClass:"logo"}),t._v(" "),e("section",{staticClass:"main-title"}),t._v(" "),e("section",{staticClass:"packet"},[e("figure",{staticClass:"head"}),t._v(" "),e("figure",{staticClass:"money",class:{"toggle-up":t.isClicked}}),t._v(" "),e("figure",{staticClass:"hand"},[e("figure",{staticClass:"btn",on:{click:t.turn2Next}})])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"coin-group"},[s("figure",{staticClass:"coin coin-1"}),this._v(" "),s("figure",{staticClass:"coin coin-1"}),this._v(" "),s("figure",{staticClass:"coin coin-1"})])}]};var r=e("VU/8")(n,o,!1,function(t){e("YztS")},"data-v-65be91c6",null).exports;document.getElementById("audio").play(),document.addEventListener("WeixinJSBridgeReady",function(){document.getElementById("audio").play()},!1);var c={name:"App",components:{first:r}},l={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("audio",{attrs:{autoplay:"",loop:"",src:e("qheF"),id:"audio"}}),this._v(" "),s("router-view")],1)},staticRenderFns:[]};var u=e("VU/8")(c,l,!1,function(t){e("AueA")},null,null).exports,p=e("/ocq"),f=e("2Pnh"),m=e.n(f),d={name:"first",data:function(){return{isClicked:!1,imgUrl:"",imgUrl2:"",fileData:"",note:""}},methods:{turn2Next:function(){this.$router.push({name:"third"})},upload:function(){new RegExp("(.jpg$)|(.png$)|(.bmp$)|(.jpeg$)","i").test(this.$refs.file.value)?this.previewImg():alert("只支持上传.jpg .png .bmp .jpeg;你的选择有误")},previewImg:function(){var t=new FileReader,s=this;t.readAsDataURL(this.$refs.file.files[0]),t.onload=function(e){s.$set(s,"imgUrl",t.result)}},output:function(){this.$store.state.imgUrl=this.imgUrl,this.$store.state.note=this.note.substr(0,70),this.$router.push({name:"third"})}}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main",attrs:{id:"main"}},[t._m(0),t._v(" "),e("figure",{staticClass:"logo"}),t._v(" "),e("section",{staticClass:"enp-group"},[e("figure",{staticClass:"photo-group"},[e("figure",{staticClass:"photo"}),t._v(" "),e("img",{ref:"preview",staticClass:"photo-real",style:{backgroundImage:"url("+t.imgUrl+")"}}),t._v(" "),e("figure",{staticClass:"btn",class:{"upload-btn":!t.imgUrl,"change-btn":t.imgUrl}})]),t._v(" "),e("section",{staticClass:"enp-group"},[e("figure",{staticClass:"paper"},[e("input",{ref:"file",staticClass:"img-btn btn",attrs:{type:"file",id:"uploadImg",name:"uploadImg"},on:{change:t.upload}})]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note,expression:"note"}],staticClass:"txt",attrs:{cols:"30",rows:"10",placeholder:"是点击输入宝贝红包的故事"},domProps:{value:t.note},on:{input:function(s){s.target.composing||(t.note=s.target.value)}}}),t._v(" "),e("figure",{staticClass:"enp-cover"},[e("figure",{staticClass:"output-btn",on:{click:t.output}})])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"coin-group"},[s("figure",{staticClass:"coin coin-1"}),this._v(" "),s("figure",{staticClass:"coin coin-1"}),this._v(" "),s("figure",{staticClass:"coin coin-1"})])}]};var h=e("VU/8")(d,g,!1,function(t){e("CzY3")},"data-v-321a2652",null).exports,v={name:"outputPhoto",data:function(){return{imgUrl:this.$store.state.imgUrl,note:this.$store.state.note,finalImg:""}},methods:{turn2Next:function(){console.log(this.$store)}},mounted:function(){var t=this;m()(document.querySelector("#final"),{allowTaint:!1,taintTest:!1}).then(function(s){var e=s.toDataURL("image/png").replace("image/png","image/octet-stream");t.$set(t,"finalImg",e),t.$set(t.$store.state,"finalImg",e)})}},_={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticStyle:{width:"100%",height:"100%"}},[i("div",{staticClass:"final",attrs:{id:"final"}},[i("img",{staticClass:"final-real",attrs:{src:t.imgUrl,alt:""}}),t._v(" "),i("img",{staticClass:"final-base",attrs:{src:e("Tg1j"),alt:""}}),t._v(" "),i("img",{staticClass:"id-img",attrs:{src:e("WJuX"),alt:""}}),t._v(" "),i("p",{staticClass:"final-note"},[t._v(t._s(t.note))])]),t._v(" "),t.finalImg?i("img",{staticClass:"final-img",attrs:{src:t.finalImg,alt:""}}):t._e()])},staticRenderFns:[]};var C={name:"third",data:function(){return{per:0}},components:{outputPhoto:e("VU/8")(v,_,!1,function(t){e("xS4N")},"data-v-41f15bbe",null).exports},methods:{turn2Next:function(){var t=this;this.isClicked=!0,setTimeout(function(){t.$router.push({name:"second"})},1e3)}},mounted:function(){var t=this,s=setInterval(function(){t.per+=10,100==t.per&&(clearInterval(s),t.$router.push({name:"forth"}))},120)}},$={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main"},[e("section",{staticClass:"fly-group"},[e("figure",{staticClass:"plane"}),t._v(" "),e("section",{staticClass:"loading"},[e("span",{staticClass:"dot"}),t._v(" "),e("span",{staticClass:"dot"}),t._v(" "),e("span",{staticClass:"dot"}),t._v(" "),e("span",{staticClass:"dot"}),t._v(" "),e("span",{staticClass:"dot"}),t._v(" "),e("span",{staticClass:"dot"}),t._v(" "),e("span",{staticClass:"dot"}),t._v(" "),e("span",{staticClass:"dot"}),t._v(" "),e("span",{staticClass:"dot"}),t._v(" "),e("span",{staticClass:"dot"}),t._v(" "),e("span",{staticClass:"per"},[t._v(t._s(t.per+"%"))])]),t._v(" "),e("section",{staticClass:"loading-msg"},[t._v("\n          制作中\n      ")])]),t._v(" "),e("output-photo",{staticStyle:{position:"absolute",top:"100%"}})],1)},staticRenderFns:[]};var x=e("VU/8")(C,$,!1,function(t){e("k3Pk")},"data-v-995e41b8",null).exports,b={name:"forth",data:function(){return{per:0,finalImg:this.$store.state.finalImg}},methods:{turn2Next:function(){var t=this;this.isClicked=!0,setTimeout(function(){t.$router.push({name:"second"})},1e3)},turnFinal:function(){window.location.href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU2MzA3NTQ5OQ==&scene=124#wechat_redirect"}},mounted:function(){var t=this,s=setInterval(function(){t.per+=10,100==t.per&&clearInterval(s)},120)}},U={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"main"},[s("section",{staticClass:"final-group"},[s("section",{staticClass:"output"},[s("img",{staticClass:"final-img-block",attrs:{src:this.finalImg}}),this._v(" "),s("section",{staticClass:"turn-final",on:{click:this.turnFinal}})]),this._v(" "),s("h5",{staticClass:"success-tip"},[this._v("长按海报保存并分享")]),this._v(" "),s("figure",{staticClass:"success"})])])},staticRenderFns:[]};var I=e("VU/8")(b,U,!1,function(t){e("hT/5")},"data-v-65c930cc",null).exports;a.a.use(p.a);var w=new p.a({routes:[{path:"/first",name:"first",component:r},{path:"/second",name:"second",component:h},{path:"/third",name:"third",component:x},{path:"/forth",name:"forth",component:I},{path:"/",redirect:"/first"}]}),k=e("NYxO");a.a.config.productionTip=!1,a.a.use(k.a);var y=new k.a.Store({state:{note:"",imgUrl:"",finalImg:""}});new a.a({el:"#app",router:w,store:y,template:"<App/>",components:{App:u}})},Tg1j:function(t,s,e){t.exports=e.p+"static/img/final-base.40feb80.png"},WJuX:function(t,s,e){t.exports=e.p+"static/img/id.8f2aa48.jpg"},YztS:function(t,s){},"hT/5":function(t,s){},k3Pk:function(t,s){},qheF:function(t,s,e){t.exports=e.p+"static/media/music.f22331e.mp3"},xS4N:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.ab2dda952aa4afc98e14.js.map