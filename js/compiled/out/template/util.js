// Compiled by ClojureScript 1.8.51 {}
goog.provide('template.util');
goog.require('cljs.core');
goog.require('template.pages');
template.util.get_group = (function template$util$get_group(var_args){
var args29277 = [];
var len__19529__auto___29280 = arguments.length;
var i__19530__auto___29281 = (0);
while(true){
if((i__19530__auto___29281 < len__19529__auto___29280)){
args29277.push((arguments[i__19530__auto___29281]));

var G__29282 = (i__19530__auto___29281 + (1));
i__19530__auto___29281 = G__29282;
continue;
} else {
}
break;
}

var G__29279 = args29277.length;
switch (G__29279) {
case 1:
return template.util.get_group.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.get_group.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29277.length)].join('')));

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
var args29284 = [];
var len__19529__auto___29287 = arguments.length;
var i__19530__auto___29288 = (0);
while(true){
if((i__19530__auto___29288 < len__19529__auto___29287)){
args29284.push((arguments[i__19530__auto___29288]));

var G__29289 = (i__19530__auto___29288 + (1));
i__19530__auto___29288 = G__29289;
continue;
} else {
}
break;
}

var G__29286 = args29284.length;
switch (G__29286) {
case 1:
return template.util.get_slide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.get_slide.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29284.length)].join('')));

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
var args29291 = [];
var len__19529__auto___29295 = arguments.length;
var i__19530__auto___29296 = (0);
while(true){
if((i__19530__auto___29296 < len__19529__auto___29295)){
args29291.push((arguments[i__19530__auto___29296]));

var G__29297 = (i__19530__auto___29296 + (1));
i__19530__auto___29296 = G__29297;
continue;
} else {
}
break;
}

var G__29293 = args29291.length;
switch (G__29293) {
case 1:
return template.util.whos_previous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.whos_previous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29291.length)].join('')));

}
});

template.util.whos_previous.cljs$core$IFn$_invoke$arity$1 = (function (state){
return template.util.whos_previous.call(null,state,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429)));
});

template.util.whos_previous.cljs$core$IFn$_invoke$arity$2 = (function (state,slide){
var vec__29294 = slide;
var this_group = cljs.core.nth.call(null,vec__29294,(0),null);
var this_slide = cljs.core.nth.call(null,vec__29294,(1),null);
var this_pause = cljs.core.nth.call(null,vec__29294,(2),null);
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
var args29299 = [];
var len__19529__auto___29303 = arguments.length;
var i__19530__auto___29304 = (0);
while(true){
if((i__19530__auto___29304 < len__19529__auto___29303)){
args29299.push((arguments[i__19530__auto___29304]));

var G__29305 = (i__19530__auto___29304 + (1));
i__19530__auto___29304 = G__29305;
continue;
} else {
}
break;
}

var G__29301 = args29299.length;
switch (G__29301) {
case 1:
return template.util.whos_next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.whos_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29299.length)].join('')));

}
});

template.util.whos_next.cljs$core$IFn$_invoke$arity$1 = (function (state){
return template.util.whos_next.call(null,state,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429)));
});

template.util.whos_next.cljs$core$IFn$_invoke$arity$2 = (function (state,slide){
var vec__29302 = slide;
var this_group = cljs.core.nth.call(null,vec__29302,(0),null);
var this_slide = cljs.core.nth.call(null,vec__29302,(1),null);
var this_pause = cljs.core.nth.call(null,vec__29302,(2),null);
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
var args29307 = [];
var len__19529__auto___29310 = arguments.length;
var i__19530__auto___29311 = (0);
while(true){
if((i__19530__auto___29311 < len__19529__auto___29310)){
args29307.push((arguments[i__19530__auto___29311]));

var G__29312 = (i__19530__auto___29311 + (1));
i__19530__auto___29311 = G__29312;
continue;
} else {
}
break;
}

var G__29309 = args29307.length;
switch (G__29309) {
case 1:
return template.util.can_go_previous_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.can_go_previous_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29307.length)].join('')));

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
var args29314 = [];
var len__19529__auto___29317 = arguments.length;
var i__19530__auto___29318 = (0);
while(true){
if((i__19530__auto___29318 < len__19529__auto___29317)){
args29314.push((arguments[i__19530__auto___29318]));

var G__29319 = (i__19530__auto___29318 + (1));
i__19530__auto___29318 = G__29319;
continue;
} else {
}
break;
}

var G__29316 = args29314.length;
switch (G__29316) {
case 1:
return template.util.can_go_next_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.can_go_next_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29314.length)].join('')));

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
return (function (p1__29321_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__29321_SHARP_,new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429),slide),new cljs.core.Keyword(null,"anim","anim",-1276068045),((cljs.core._EQ_.call(null,(1),cljs.core.compare.call(null,current_slide,slide)))?"previous":"next"));
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

//# sourceMappingURL=util.js.map?rel=1505304033717