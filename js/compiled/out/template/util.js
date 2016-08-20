// Compiled by ClojureScript 1.8.51 {}
goog.provide('template.util');
goog.require('cljs.core');
template.util.get_group = (function template$util$get_group(var_args){
var args22301 = [];
var len__19529__auto___22304 = arguments.length;
var i__19530__auto___22305 = (0);
while(true){
if((i__19530__auto___22305 < len__19529__auto___22304)){
args22301.push((arguments[i__19530__auto___22305]));

var G__22306 = (i__19530__auto___22305 + (1));
i__19530__auto___22305 = G__22306;
continue;
} else {
}
break;
}

var G__22303 = args22301.length;
switch (G__22303) {
case 1:
return template.util.get_group.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.get_group.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22301.length)].join('')));

}
});

template.util.get_group.cljs$core$IFn$_invoke$arity$1 = (function (state){
var slide = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return template.util.get_group.call(null,state,slide);
});

template.util.get_group.cljs$core$IFn$_invoke$arity$2 = (function (state,slide){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.first.call(null,slide)], null));
});

template.util.get_group.cljs$lang$maxFixedArity = 2;
template.util.get_slide = (function template$util$get_slide(var_args){
var args22308 = [];
var len__19529__auto___22311 = arguments.length;
var i__19530__auto___22312 = (0);
while(true){
if((i__19530__auto___22312 < len__19529__auto___22311)){
args22308.push((arguments[i__19530__auto___22312]));

var G__22313 = (i__19530__auto___22312 + (1));
i__19530__auto___22312 = G__22313;
continue;
} else {
}
break;
}

var G__22310 = args22308.length;
switch (G__22310) {
case 1:
return template.util.get_slide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.get_slide.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22308.length)].join('')));

}
});

template.util.get_slide.cljs$core$IFn$_invoke$arity$1 = (function (state){
var slide = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return template.util.get_slide.call(null,state,slide);
});

template.util.get_slide.cljs$core$IFn$_invoke$arity$2 = (function (state,slide){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.first.call(null,slide),new cljs.core.Keyword(null,"slides","slides",-1933049910),cljs.core.last.call(null,slide)], null));
});

template.util.get_slide.cljs$lang$maxFixedArity = 2;
template.util.whos_previous = (function template$util$whos_previous(var_args){
var args22315 = [];
var len__19529__auto___22318 = arguments.length;
var i__19530__auto___22319 = (0);
while(true){
if((i__19530__auto___22319 < len__19529__auto___22318)){
args22315.push((arguments[i__19530__auto___22319]));

var G__22320 = (i__19530__auto___22319 + (1));
i__19530__auto___22319 = G__22320;
continue;
} else {
}
break;
}

var G__22317 = args22315.length;
switch (G__22317) {
case 1:
return template.util.whos_previous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.whos_previous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22315.length)].join('')));

}
});

template.util.whos_previous.cljs$core$IFn$_invoke$arity$1 = (function (state){
return template.util.whos_previous.call(null,state,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)));
});

template.util.whos_previous.cljs$core$IFn$_invoke$arity$2 = (function (state,slide){
var this_group = cljs.core.first.call(null,slide);
var this_slide = cljs.core.last.call(null,slide);
var prev_group = (this_group - (1));
var prev_slide = (this_slide - (1));
var nb_prev_group = cljs.core.count.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102),prev_group,new cljs.core.Keyword(null,"slides","slides",-1933049910)], null)));
if(cljs.core.truth_(template.util.get_slide.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,prev_slide], null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,prev_slide], null);
} else {
if(cljs.core.truth_(template.util.get_slide.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_group,(nb_prev_group - (1))], null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_group,(nb_prev_group - (1))], null);
} else {
return null;
}
}
});

template.util.whos_previous.cljs$lang$maxFixedArity = 2;
template.util.whos_next = (function template$util$whos_next(var_args){
var args22322 = [];
var len__19529__auto___22325 = arguments.length;
var i__19530__auto___22326 = (0);
while(true){
if((i__19530__auto___22326 < len__19529__auto___22325)){
args22322.push((arguments[i__19530__auto___22326]));

var G__22327 = (i__19530__auto___22326 + (1));
i__19530__auto___22326 = G__22327;
continue;
} else {
}
break;
}

var G__22324 = args22322.length;
switch (G__22324) {
case 1:
return template.util.whos_next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.whos_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22322.length)].join('')));

}
});

template.util.whos_next.cljs$core$IFn$_invoke$arity$1 = (function (state){
return template.util.whos_next.call(null,state,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)));
});

template.util.whos_next.cljs$core$IFn$_invoke$arity$2 = (function (state,slide){
var this_group = cljs.core.first.call(null,slide);
var this_slide = cljs.core.last.call(null,slide);
var next_group = (this_group + (1));
var next_slide = (this_slide + (1));
if(cljs.core.truth_(template.util.get_slide.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,next_slide], null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_group,next_slide], null);
} else {
if(cljs.core.truth_(template.util.get_slide.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_group,(0)], null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_group,(0)], null);
} else {
return null;
}
}
});

template.util.whos_next.cljs$lang$maxFixedArity = 2;
template.util.can_go_previous_QMARK_ = (function template$util$can_go_previous_QMARK_(var_args){
var args22329 = [];
var len__19529__auto___22332 = arguments.length;
var i__19530__auto___22333 = (0);
while(true){
if((i__19530__auto___22333 < len__19529__auto___22332)){
args22329.push((arguments[i__19530__auto___22333]));

var G__22334 = (i__19530__auto___22333 + (1));
i__19530__auto___22333 = G__22334;
continue;
} else {
}
break;
}

var G__22331 = args22329.length;
switch (G__22331) {
case 1:
return template.util.can_go_previous_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.can_go_previous_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22329.length)].join('')));

}
});

template.util.can_go_previous_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return template.util.can_go_previous_QMARK_.call(null,state,template.util.get_slide.call(null,state));
});

template.util.can_go_previous_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (state,slide){
return !((template.util.whos_previous.call(null,state,slide) == null));
});

template.util.can_go_previous_QMARK_.cljs$lang$maxFixedArity = 2;
template.util.can_go_next_QMARK_ = (function template$util$can_go_next_QMARK_(var_args){
var args22336 = [];
var len__19529__auto___22339 = arguments.length;
var i__19530__auto___22340 = (0);
while(true){
if((i__19530__auto___22340 < len__19529__auto___22339)){
args22336.push((arguments[i__19530__auto___22340]));

var G__22341 = (i__19530__auto___22340 + (1));
i__19530__auto___22340 = G__22341;
continue;
} else {
}
break;
}

var G__22338 = args22336.length;
switch (G__22338) {
case 1:
return template.util.can_go_next_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.can_go_next_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22336.length)].join('')));

}
});

template.util.can_go_next_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return template.util.can_go_next_QMARK_.call(null,state,template.util.get_slide.call(null,state));
});

template.util.can_go_next_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (state,slide){
return !((template.util.whos_next.call(null,state,slide) == null));
});

template.util.can_go_next_QMARK_.cljs$lang$maxFixedArity = 2;
template.util.go_to = (function template$util$go_to(state,slide){
var current_slide = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return cljs.core.swap_BANG_.call(null,state,((function (current_slide){
return (function (p1__22343_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__22343_SHARP_,new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429),slide),new cljs.core.Keyword(null,"anim","anim",-1276068045),((cljs.core._EQ_.call(null,(1),cljs.core.compare.call(null,current_slide,slide)))?"previous":"next"));
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

//# sourceMappingURL=util.js.map?rel=1471708006712