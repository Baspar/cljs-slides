// Compiled by ClojureScript 1.8.51 {}
goog.provide('template.util');
goog.require('cljs.core');
template.util.get_group = (function template$util$get_group(var_args){
var args19583 = [];
var len__19529__auto___19586 = arguments.length;
var i__19530__auto___19587 = (0);
while(true){
if((i__19530__auto___19587 < len__19529__auto___19586)){
args19583.push((arguments[i__19530__auto___19587]));

var G__19588 = (i__19530__auto___19587 + (1));
i__19530__auto___19587 = G__19588;
continue;
} else {
}
break;
}

var G__19585 = args19583.length;
switch (G__19585) {
case 1:
return template.util.get_group.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.get_group.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19583.length)].join('')));

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
var args19590 = [];
var len__19529__auto___19593 = arguments.length;
var i__19530__auto___19594 = (0);
while(true){
if((i__19530__auto___19594 < len__19529__auto___19593)){
args19590.push((arguments[i__19530__auto___19594]));

var G__19595 = (i__19530__auto___19594 + (1));
i__19530__auto___19594 = G__19595;
continue;
} else {
}
break;
}

var G__19592 = args19590.length;
switch (G__19592) {
case 1:
return template.util.get_slide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.get_slide.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19590.length)].join('')));

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
var args19597 = [];
var len__19529__auto___19600 = arguments.length;
var i__19530__auto___19601 = (0);
while(true){
if((i__19530__auto___19601 < len__19529__auto___19600)){
args19597.push((arguments[i__19530__auto___19601]));

var G__19602 = (i__19530__auto___19601 + (1));
i__19530__auto___19601 = G__19602;
continue;
} else {
}
break;
}

var G__19599 = args19597.length;
switch (G__19599) {
case 1:
return template.util.whos_previous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.whos_previous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19597.length)].join('')));

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
var args19604 = [];
var len__19529__auto___19607 = arguments.length;
var i__19530__auto___19608 = (0);
while(true){
if((i__19530__auto___19608 < len__19529__auto___19607)){
args19604.push((arguments[i__19530__auto___19608]));

var G__19609 = (i__19530__auto___19608 + (1));
i__19530__auto___19608 = G__19609;
continue;
} else {
}
break;
}

var G__19606 = args19604.length;
switch (G__19606) {
case 1:
return template.util.whos_next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.whos_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19604.length)].join('')));

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
var args19611 = [];
var len__19529__auto___19614 = arguments.length;
var i__19530__auto___19615 = (0);
while(true){
if((i__19530__auto___19615 < len__19529__auto___19614)){
args19611.push((arguments[i__19530__auto___19615]));

var G__19616 = (i__19530__auto___19615 + (1));
i__19530__auto___19615 = G__19616;
continue;
} else {
}
break;
}

var G__19613 = args19611.length;
switch (G__19613) {
case 1:
return template.util.can_go_previous_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.can_go_previous_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19611.length)].join('')));

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
var args19618 = [];
var len__19529__auto___19621 = arguments.length;
var i__19530__auto___19622 = (0);
while(true){
if((i__19530__auto___19622 < len__19529__auto___19621)){
args19618.push((arguments[i__19530__auto___19622]));

var G__19623 = (i__19530__auto___19622 + (1));
i__19530__auto___19622 = G__19623;
continue;
} else {
}
break;
}

var G__19620 = args19618.length;
switch (G__19620) {
case 1:
return template.util.can_go_next_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return template.util.can_go_next_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19618.length)].join('')));

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
return (function (p1__19625_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__19625_SHARP_,new cljs.core.Keyword(null,"slide-shown","slide-shown",1288064429),slide),new cljs.core.Keyword(null,"anim","anim",-1276068045),((cljs.core._EQ_.call(null,(1),cljs.core.compare.call(null,current_slide,slide)))?"previous":"next"));
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

//# sourceMappingURL=util.js.map?rel=1471585382443