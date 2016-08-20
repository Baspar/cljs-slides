// Compiled by ClojureScript 1.8.51 {}
goog.provide('template.ui');
goog.require('cljs.core');
goog.require('template.dispatch');
goog.require('template.util');
goog.require('template.pages');
template.ui.render_page = (function template$ui$render_page(var_args){
var args25908 = [];
var len__19529__auto___25912 = arguments.length;
var i__19530__auto___25913 = (0);
while(true){
if((i__19530__auto___25913 < len__19529__auto___25912)){
args25908.push((arguments[i__19530__auto___25913]));

var G__25914 = (i__19530__auto___25913 + (1));
i__19530__auto___25913 = G__25914;
continue;
} else {
}
break;
}

var G__25910 = args25908.length;
switch (G__25910) {
case 2:
return template.ui.render_page.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return template.ui.render_page.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25908.length)].join('')));

}
});

template.ui.render_page.cljs$core$IFn$_invoke$arity$2 = (function (state,page){
return React.createElement("div",{"key": template.util.get_slide.call(null,state,page).call(null,new cljs.core.Keyword(null,"id","id",-1388402092)), "style": {"height": "100%", "width": "100%", "position": "absolute", "display": "flex", "flexDirection": "column", "alignItems": "center"}},(function (){var attrs25911 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(template.util.get_slide.call(null,state,page));
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs25911))?sablono.interpreter.attributes.call(null,attrs25911):null),((cljs.core.map_QMARK_.call(null,attrs25911))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25911)], null)));
})(),React.createElement("div",{"style": {"position": "relative", "display": "flex", "flexGrow": "1", "flexDirection": "column", "alignItems": "stretch", "width": "100%"}},sablono.interpreter.interpret.call(null,template.pages.render_page.call(null,state,page))));
});

template.ui.render_page.cljs$core$IFn$_invoke$arity$1 = (function (state){
return template.ui.render_page.call(null,state,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)));
});

template.ui.render_page.cljs$lang$maxFixedArity = 2;
template.ui.header = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"20%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100",new cljs.core.Keyword(null,"preserveAspectRatio","preserveAspectRatio",1832131817),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"0,0 100,0 100,100 86,30 0,100",new cljs.core.Keyword(null,"fill","fill",883462889),"#e7e7e7"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"85,0 100,100 100,0",new cljs.core.Keyword(null,"fill","fill",883462889),"#fcbe13"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"85,0 100,60 100,0",new cljs.core.Keyword(null,"fill","fill",883462889),"#fcd123"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"0,0 100,0 0,80",new cljs.core.Keyword(null,"fill","fill",883462889),"#039088"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"0,0 50,0 0,80",new cljs.core.Keyword(null,"fill","fill",883462889),"#02a89e"], null)], null)], null);
template.ui.title = (function template$ui$title(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-6deg)",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"5%",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"40px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"left","left",-399115937),"2%"], null)], null),React.createElement(React.addons.CSSTransitionGroup,{"transitionName": [cljs.core.str("title-"),cljs.core.str(cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"anim","anim",-1276068045),"next"))].join(''), "transitionLeave": true, "transitionEnter": true, "transitionLeaveTimeout": (500), "transitionEnterTimeout": (500)},React.createElement("div",{"key": template.util.get_group.call(null,state).call(null,new cljs.core.Keyword(null,"title","title",636505583)), "style": {"width": "50vw", "position": "absolute"}},sablono.interpreter.interpret.call(null,template.util.get_group.call(null,state).call(null,new cljs.core.Keyword(null,"title","title",636505583)))))], null);
});
template.ui.summary = (function template$ui$summary(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100vw",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"100vh",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"menu-visible","menu-visible",859800212),false))?"auto":"none"),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,state,(function (x){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,x,new cljs.core.Keyword(null,"highlight","highlight",-800930873)),new cljs.core.Keyword(null,"menu-visible","menu-visible",859800212),false);
}));
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"height","height",1025178622)],["center",[cljs.core.str("scale("),cljs.core.str((cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"menu-visible","menu-visible",859800212),false))?"1)":"8)"))].join(''),"transform .3s ease-in-out,\n                               opacity .3s","rgba(100, 100, 100, 0.5)","100vw",(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"menu-visible","menu-visible",859800212),false))?(1):(0)),"center","flex","100vh"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(10vw)"], null)], null),cljs.core.map_indexed.call(null,(function (i1,x){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px"], null)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(x),cljs.core.map_indexed.call(null,(function (i2,y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"highlight","highlight",-800930873),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i1,i2], null));
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,state,(function (x__$1){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,x__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873)),new cljs.core.Keyword(null,"menu-visible","menu-visible",859800212),false);
}));

return template.util.go_to.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i1,i2], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"40px",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"opacity","opacity",397153780),((cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i1,i2], null),cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"highlight","highlight",-800930873))))?(1):0.5),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"background-color","background-color",570434026),"grey"], null)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y)], null);
}),new cljs.core.Keyword(null,"slides","slides",-1933049910).cljs$core$IFn$_invoke$arity$1(x))], null);
}),cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"groups","groups",-136896102)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(.4)",new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"border","border",1444987323),"solid white 15px",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"highlight","highlight",-800930873)))?(1):(0))], null)], null),(function (){var temp__4657__auto__ = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
if(cljs.core.truth_(temp__4657__auto__)){
var page = temp__4657__auto__;
return template.ui.render_page.call(null,state,page);
} else {
return null;
}
})()], null)], null)], null);
});
template.ui.page = (function template$ui$page(state){
var attrs25917 = template.ui.summary.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25917))?sablono.interpreter.attributes.call(null,attrs25917):null),((cljs.core.map_QMARK_.call(null,attrs25917))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",{"style": {"transition": "-webkit-filter 0.5s", "overflow": "hidden", "width": "100vw", "flexDirection": "column", "display": "flex", "position": "relative", "backgroundColor": "white", "height": "100vh", "alignItems": "center", "WebkitFilter": [cljs.core.str("blur("),cljs.core.str((cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"menu-visible","menu-visible",859800212),false))?(5):(0))),cljs.core.str("px)")].join('')}},sablono.interpreter.interpret.call(null,template.ui.header),sablono.interpreter.interpret.call(null,template.ui.title.call(null,state)),React.createElement("div",{"style": {"position": "relative", "perspective": "1000px", "height": "75%", "width": "80%"}},sablono.interpreter.interpret.call(null,React.createElement(React.addons.CSSTransitionGroup,{"transitionName": cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"anim","anim",-1276068045),"next"), "transitionLeave": true, "transitionEnter": true, "transitionLeaveTimeout": (500), "transitionEnterTimeout": (500)},template.ui.render_page.call(null,state)))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25917),React.createElement("div",{"style": {"transition": "-webkit-filter 0.5s", "overflow": "hidden", "width": "100vw", "flexDirection": "column", "display": "flex", "position": "relative", "backgroundColor": "white", "height": "100vh", "alignItems": "center", "WebkitFilter": [cljs.core.str("blur("),cljs.core.str((cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"menu-visible","menu-visible",859800212),false))?(5):(0))),cljs.core.str("px)")].join('')}},sablono.interpreter.interpret.call(null,template.ui.header),sablono.interpreter.interpret.call(null,template.ui.title.call(null,state)),React.createElement("div",{"style": {"position": "relative", "perspective": "1000px", "height": "75%", "width": "80%"}},sablono.interpreter.interpret.call(null,React.createElement(React.addons.CSSTransitionGroup,{"transitionName": cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"anim","anim",-1276068045),"next"), "transitionLeave": true, "transitionEnter": true, "transitionLeaveTimeout": (500), "transitionEnterTimeout": (500)},template.ui.render_page.call(null,state)))))], null)));
});
template.ui.app = (function template$ui$app(state){

return template.ui.page.call(null,state);
});

//# sourceMappingURL=ui.js.map?rel=1471713501468