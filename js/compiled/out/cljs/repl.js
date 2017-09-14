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
var seq__25487_25501 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25488_25502 = null;
var count__25489_25503 = (0);
var i__25490_25504 = (0);
while(true){
if((i__25490_25504 < count__25489_25503)){
var f_25505 = cljs.core._nth.call(null,chunk__25488_25502,i__25490_25504);
cljs.core.println.call(null,"  ",f_25505);

var G__25506 = seq__25487_25501;
var G__25507 = chunk__25488_25502;
var G__25508 = count__25489_25503;
var G__25509 = (i__25490_25504 + (1));
seq__25487_25501 = G__25506;
chunk__25488_25502 = G__25507;
count__25489_25503 = G__25508;
i__25490_25504 = G__25509;
continue;
} else {
var temp__4657__auto___25510 = cljs.core.seq.call(null,seq__25487_25501);
if(temp__4657__auto___25510){
var seq__25487_25511__$1 = temp__4657__auto___25510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25487_25511__$1)){
var c__19270__auto___25512 = cljs.core.chunk_first.call(null,seq__25487_25511__$1);
var G__25513 = cljs.core.chunk_rest.call(null,seq__25487_25511__$1);
var G__25514 = c__19270__auto___25512;
var G__25515 = cljs.core.count.call(null,c__19270__auto___25512);
var G__25516 = (0);
seq__25487_25501 = G__25513;
chunk__25488_25502 = G__25514;
count__25489_25503 = G__25515;
i__25490_25504 = G__25516;
continue;
} else {
var f_25517 = cljs.core.first.call(null,seq__25487_25511__$1);
cljs.core.println.call(null,"  ",f_25517);

var G__25518 = cljs.core.next.call(null,seq__25487_25511__$1);
var G__25519 = null;
var G__25520 = (0);
var G__25521 = (0);
seq__25487_25501 = G__25518;
chunk__25488_25502 = G__25519;
count__25489_25503 = G__25520;
i__25490_25504 = G__25521;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25522 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18459__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25522);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25522)))?cljs.core.second.call(null,arglists_25522):arglists_25522));
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
var seq__25491 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25492 = null;
var count__25493 = (0);
var i__25494 = (0);
while(true){
if((i__25494 < count__25493)){
var vec__25495 = cljs.core._nth.call(null,chunk__25492,i__25494);
var name = cljs.core.nth.call(null,vec__25495,(0),null);
var map__25496 = cljs.core.nth.call(null,vec__25495,(1),null);
var map__25496__$1 = ((((!((map__25496 == null)))?((((map__25496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25496):map__25496);
var doc = cljs.core.get.call(null,map__25496__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25496__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25523 = seq__25491;
var G__25524 = chunk__25492;
var G__25525 = count__25493;
var G__25526 = (i__25494 + (1));
seq__25491 = G__25523;
chunk__25492 = G__25524;
count__25493 = G__25525;
i__25494 = G__25526;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25491);
if(temp__4657__auto__){
var seq__25491__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25491__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__25491__$1);
var G__25527 = cljs.core.chunk_rest.call(null,seq__25491__$1);
var G__25528 = c__19270__auto__;
var G__25529 = cljs.core.count.call(null,c__19270__auto__);
var G__25530 = (0);
seq__25491 = G__25527;
chunk__25492 = G__25528;
count__25493 = G__25529;
i__25494 = G__25530;
continue;
} else {
var vec__25498 = cljs.core.first.call(null,seq__25491__$1);
var name = cljs.core.nth.call(null,vec__25498,(0),null);
var map__25499 = cljs.core.nth.call(null,vec__25498,(1),null);
var map__25499__$1 = ((((!((map__25499 == null)))?((((map__25499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25499):map__25499);
var doc = cljs.core.get.call(null,map__25499__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25499__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25531 = cljs.core.next.call(null,seq__25491__$1);
var G__25532 = null;
var G__25533 = (0);
var G__25534 = (0);
seq__25491 = G__25531;
chunk__25492 = G__25532;
count__25493 = G__25533;
i__25494 = G__25534;
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

//# sourceMappingURL=repl.js.map?rel=1505315425985