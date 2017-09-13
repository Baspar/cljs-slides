// Compiled by ClojureScript 1.8.51 {}
goog.provide('template.util');
goog.require('cljs.core');
goog.require('template.pages');
template.util.get_group = (function template$util$get_group(var_args){
var args40245 = [];
var len__19529__auto___40248 = arguments.length;
var i__19530__auto___40249 = (0);
while(true){
if((i__19530__auto___40249 < len__19529__auto___40248)){
args40245.push((arguments[i__19530__auto___40249]));

var G__40250 = (i__19530__auto___40249 + (1));
i__19530__auto___40249 = G__40250;
continue;
} else {
}
break;
}

var G__40247 = args40245.length;
switch (G__40247) {
case 1:
return template.util.get_group.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.get_group.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40245.length)].join('')));

}
});

template.util.get_group.cljs$core$IFn$_invoke$arity$1 = (function (state){
var slide = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429));
return template.util.get_group.call(null,state,slide);
});

template.util.get_group.cljs$core$IFn$_invoke$arity$2 = (function (state,slide){
return cljs.core.get_in.call(null,template.pages.groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.first.call(null,slide)], null));
});

template.util.get_group.cljs$lang$maxFixedArity = 2;
template.util.get_slide = (function template$util$get_slide(var_args){
var args40252 = [];
var len__19529__auto___40255 = arguments.length;
var i__19530__auto___40256 = (0);
while(true){
if((i__19530__auto___40256 < len__19529__auto___40255)){
args40252.push((arguments[i__19530__auto___40256]));

var G__40257 = (i__19530__auto___40256 + (1));
i__19530__auto___40256 = G__40257;
continue;
} else {
}
break;
}

var G__40254 = args40252.length;
switch (G__40254) {
case 1:
return template.util.get_slide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.get_slide.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40252.length)].join('')));

}
});

template.util.get_slide.cljs$core$IFn$_invoke$arity$1 = (function (state){
return template.util.get_slide.call(null,state,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429)));
});

template.util.get_slide.cljs$core$IFn$_invoke$arity$2 = (function (state,slide){
return cljs.core.get_in.call(null,template.pages.groups,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.first.call(null,slide),new cljs.core.Keyword(null,"slides","slides",-1933049910),cljs.core.second.call(null,slide)], null));
});

template.util.get_slide.cljs$lang$maxFixedArity = 2;
template.util.whos_previous = (function template$util$whos_previous(var_args){
var args40259 = [];
var len__19529__auto___40263 = arguments.length;
var i__19530__auto___40264 = (0);
while(true){
if((i__19530__auto___40264 < len__19529__auto___40263)){
args40259.push((arguments[i__19530__auto___40264]));

var G__40265 = (i__19530__auto___40264 + (1));
i__19530__auto___40264 = G__40265;
continue;
} else {
}
break;
}

var G__40261 = args40259.length;
switch (G__40261) {
case 1:
return template.util.whos_previous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.whos_previous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40259.length)].join('')));

}
});

template.util.whos_previous.cljs$core$IFn$_invoke$arity$1 = (function (state){
return template.util.whos_previous.call(null,state,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429)));
});

template.util.whos_previous.cljs$core$IFn$_invoke$arity$2 = (function (state,slide){
var vec__40262 = slide;
var this_group = cljs.core.nth.call(null,vec__40262,(0),null);
var this_slide = cljs.core.nth.call(null,vec__40262,(1),null);
var this_pause = cljs.core.nth.call(null,vec__40262,(2),null);
var prev_group = (this_group - (1));
var prev_slide = (this_slide - (1));
var nb_prev_group = cljs.core.count.call(null,cljs.core.get_in.call(null,template.pages.groups,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102),prev_group,new cljs.core.Keyword(null,"slides","slides",-1933049910)], null)));
if(((0) < this_pause)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,this_slide,(this_pause - (1))], null);
} else {
if(cljs.core.truth_(template.util.get_slide.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,prev_slide], null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,prev_slide,cljs.core.get_in.call(null,template.util.get_slide.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,prev_slide], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"nb-pauses","nb-pauses",-133868075)], null))], null);
} else {
if(cljs.core.truth_(template.util.get_slide.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_group,(nb_prev_group - (1))], null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_group,(nb_prev_group - (1)),cljs.core.get_in.call(null,template.util.get_slide.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_group,(nb_prev_group - (1))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"nb-pauses","nb-pauses",-133868075)], null))], null);
} else {
return null;
}
}
}
});

template.util.whos_previous.cljs$lang$maxFixedArity = 2;
template.util.whos_next = (function template$util$whos_next(var_args){
var args40267 = [];
var len__19529__auto___40271 = arguments.length;
var i__19530__auto___40272 = (0);
while(true){
if((i__19530__auto___40272 < len__19529__auto___40271)){
args40267.push((arguments[i__19530__auto___40272]));

var G__40273 = (i__19530__auto___40272 + (1));
i__19530__auto___40272 = G__40273;
continue;
} else {
}
break;
}

var G__40269 = args40267.length;
switch (G__40269) {
case 1:
return template.util.whos_next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.whos_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40267.length)].join('')));

}
});

template.util.whos_next.cljs$core$IFn$_invoke$arity$1 = (function (state){
return template.util.whos_next.call(null,state,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429)));
});

template.util.whos_next.cljs$core$IFn$_invoke$arity$2 = (function (state,slide){
var vec__40270 = slide;
var this_group = cljs.core.nth.call(null,vec__40270,(0),null);
var this_slide = cljs.core.nth.call(null,vec__40270,(1),null);
var this_pause = cljs.core.nth.call(null,vec__40270,(2),null);
var this_nb_pause = cljs.core.get_in.call(null,template.util.get_slide.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,this_slide], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"nb-pauses","nb-pauses",-133868075)], null));
var next_group = (this_group + (1));
var next_slide = (this_slide + (1));
if((this_pause < this_nb_pause)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,this_slide,(this_pause + (1))], null);
} else {
if(cljs.core.truth_(template.util.get_slide.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,next_slide], null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,next_slide,(0)], null);
} else {
if(cljs.core.truth_(template.util.get_slide.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_group,(0)], null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_group,(0),(0)], null);
} else {
return null;
}
}
}
});

template.util.whos_next.cljs$lang$maxFixedArity = 2;
template.util.can_go_previous_QMARK_ = (function template$util$can_go_previous_QMARK_(var_args){
var args40275 = [];
var len__19529__auto___40278 = arguments.length;
var i__19530__auto___40279 = (0);
while(true){
if((i__19530__auto___40279 < len__19529__auto___40278)){
args40275.push((arguments[i__19530__auto___40279]));

var G__40280 = (i__19530__auto___40279 + (1));
i__19530__auto___40279 = G__40280;
continue;
} else {
}
break;
}

var G__40277 = args40275.length;
switch (G__40277) {
case 1:
return template.util.can_go_previous_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.can_go_previous_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40275.length)].join('')));

}
});

template.util.can_go_previous_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return template.util.can_go_previous_QMARK_.call(null,state,template.util.get_slide.call(null,state));
});

template.util.can_go_previous_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (state,slide){
return cljs.core.some_QMARK_.call(null,template.util.whos_previous.call(null,state,slide));
});

template.util.can_go_previous_QMARK_.cljs$lang$maxFixedArity = 2;
template.util.can_go_next_QMARK_ = (function template$util$can_go_next_QMARK_(var_args){
var args40282 = [];
var len__19529__auto___40285 = arguments.length;
var i__19530__auto___40286 = (0);
while(true){
if((i__19530__auto___40286 < len__19529__auto___40285)){
args40282.push((arguments[i__19530__auto___40286]));

var G__40287 = (i__19530__auto___40286 + (1));
i__19530__auto___40286 = G__40287;
continue;
} else {
}
break;
}

var G__40284 = args40282.length;
switch (G__40284) {
case 1:
return template.util.can_go_next_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.can_go_next_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40282.length)].join('')));

}
});

template.util.can_go_next_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return template.util.can_go_next_QMARK_.call(null,state,template.util.get_slide.call(null,state));
});

template.util.can_go_next_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (state,slide){
return cljs.core.some_QMARK_.call(null,template.util.whos_next.call(null,state,slide));
});

template.util.can_go_next_QMARK_.cljs$lang$maxFixedArity = 2;
template.util.go_to = (function template$util$go_to(state,slide){
var current_slide = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429));
return cljs.core.swap_BANG_.call(null,state,((function (current_slide){
return (function (p1__40289_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__40289_SHARP_,new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429),slide),new cljs.core.Keyword(null,"anim","anim",-1276068045),((cljs.core._EQ_.call(null,(1),cljs.core.compare.call(null,current_slide,slide)))?"previous":"next"));
});})(current_slide))
);
});
template.util.go_to_previous = (function template$util$go_to_previous(state){
var temp__4657__auto__ = template.util.whos_previous.call(null,state);
if(cljs.core.truth_(temp__4657__auto__)){
var slide = temp__4657__auto__;
return template.util.go_to.call(null,state,slide);
} else {
return null;
}
});
template.util.go_to_next = (function template$util$go_to_next(state){
var temp__4657__auto__ = template.util.whos_next.call(null,state);
if(cljs.core.truth_(temp__4657__auto__)){
var slide = temp__4657__auto__;
return template.util.go_to.call(null,state,slide);
} else {
return null;
}
});

//# sourceMappingURL=util.js.map?rel=1505303162149