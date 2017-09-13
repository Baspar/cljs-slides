// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25486_25500 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25487_25501 = null;
var count__25488_25502 = (0);
var i__25489_25503 = (0);
while(true){
if((i__25489_25503 < count__25488_25502)){
var f_25504 = cljs.core._nth.call(null,chunk__25487_25501,i__25489_25503);
cljs.core.println.call(null,"  ",f_25504);

var G__25505 = seq__25486_25500;
var G__25506 = chunk__25487_25501;
var G__25507 = count__25488_25502;
var G__25508 = (i__25489_25503 + (1));
seq__25486_25500 = G__25505;
chunk__25487_25501 = G__25506;
count__25488_25502 = G__25507;
i__25489_25503 = G__25508;
continue;
} else {
var temp__4657__auto___25509 = cljs.core.seq.call(null,seq__25486_25500);
if(temp__4657__auto___25509){
var seq__25486_25510__$1 = temp__4657__auto___25509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25486_25510__$1)){
var c__19270__auto___25511 = cljs.core.chunk_first.call(null,seq__25486_25510__$1);
var G__25512 = cljs.core.chunk_rest.call(null,seq__25486_25510__$1);
var G__25513 = c__19270__auto___25511;
var G__25514 = cljs.core.count.call(null,c__19270__auto___25511);
var G__25515 = (0);
seq__25486_25500 = G__25512;
chunk__25487_25501 = G__25513;
count__25488_25502 = G__25514;
i__25489_25503 = G__25515;
continue;
} else {
var f_25516 = cljs.core.first.call(null,seq__25486_25510__$1);
cljs.core.println.call(null,"  ",f_25516);

var G__25517 = cljs.core.next.call(null,seq__25486_25510__$1);
var G__25518 = null;
var G__25519 = (0);
var G__25520 = (0);
seq__25486_25500 = G__25517;
chunk__25487_25501 = G__25518;
count__25488_25502 = G__25519;
i__25489_25503 = G__25520;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25521 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18459__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25521);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25521)))?cljs.core.second.call(null,arglists_25521):arglists_25521));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25490 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25491 = null;
var count__25492 = (0);
var i__25493 = (0);
while(true){
if((i__25493 < count__25492)){
var vec__25494 = cljs.core._nth.call(null,chunk__25491,i__25493);
var name = cljs.core.nth.call(null,vec__25494,(0),null);
var map__25495 = cljs.core.nth.call(null,vec__25494,(1),null);
var map__25495__$1 = ((((!((map__25495 == null)))?((((map__25495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25495):map__25495);
var doc = cljs.core.get.call(null,map__25495__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25495__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25522 = seq__25490;
var G__25523 = chunk__25491;
var G__25524 = count__25492;
var G__25525 = (i__25493 + (1));
seq__25490 = G__25522;
chunk__25491 = G__25523;
count__25492 = G__25524;
i__25493 = G__25525;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25490);
if(temp__4657__auto__){
var seq__25490__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25490__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__25490__$1);
var G__25526 = cljs.core.chunk_rest.call(null,seq__25490__$1);
var G__25527 = c__19270__auto__;
var G__25528 = cljs.core.count.call(null,c__19270__auto__);
var G__25529 = (0);
seq__25490 = G__25526;
chunk__25491 = G__25527;
count__25492 = G__25528;
i__25493 = G__25529;
continue;
} else {
var vec__25497 = cljs.core.first.call(null,seq__25490__$1);
var name = cljs.core.nth.call(null,vec__25497,(0),null);
var map__25498 = cljs.core.nth.call(null,vec__25497,(1),null);
var map__25498__$1 = ((((!((map__25498 == null)))?((((map__25498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25498):map__25498);
var doc = cljs.core.get.call(null,map__25498__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25498__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25530 = cljs.core.next.call(null,seq__25490__$1);
var G__25531 = null;
var G__25532 = (0);
var G__25533 = (0);
seq__25490 = G__25530;
chunk__25491 = G__25531;
count__25492 = G__25532;
i__25493 = G__25533;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1505274418181