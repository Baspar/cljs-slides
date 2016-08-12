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
var seq__26563_26577 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26564_26578 = null;
var count__26565_26579 = (0);
var i__26566_26580 = (0);
while(true){
if((i__26566_26580 < count__26565_26579)){
var f_26581 = cljs.core._nth.call(null,chunk__26564_26578,i__26566_26580);
cljs.core.println.call(null,"  ",f_26581);

var G__26582 = seq__26563_26577;
var G__26583 = chunk__26564_26578;
var G__26584 = count__26565_26579;
var G__26585 = (i__26566_26580 + (1));
seq__26563_26577 = G__26582;
chunk__26564_26578 = G__26583;
count__26565_26579 = G__26584;
i__26566_26580 = G__26585;
continue;
} else {
var temp__4657__auto___26586 = cljs.core.seq.call(null,seq__26563_26577);
if(temp__4657__auto___26586){
var seq__26563_26587__$1 = temp__4657__auto___26586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26563_26587__$1)){
var c__19270__auto___26588 = cljs.core.chunk_first.call(null,seq__26563_26587__$1);
var G__26589 = cljs.core.chunk_rest.call(null,seq__26563_26587__$1);
var G__26590 = c__19270__auto___26588;
var G__26591 = cljs.core.count.call(null,c__19270__auto___26588);
var G__26592 = (0);
seq__26563_26577 = G__26589;
chunk__26564_26578 = G__26590;
count__26565_26579 = G__26591;
i__26566_26580 = G__26592;
continue;
} else {
var f_26593 = cljs.core.first.call(null,seq__26563_26587__$1);
cljs.core.println.call(null,"  ",f_26593);

var G__26594 = cljs.core.next.call(null,seq__26563_26587__$1);
var G__26595 = null;
var G__26596 = (0);
var G__26597 = (0);
seq__26563_26577 = G__26594;
chunk__26564_26578 = G__26595;
count__26565_26579 = G__26596;
i__26566_26580 = G__26597;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26598 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18459__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26598);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26598)))?cljs.core.second.call(null,arglists_26598):arglists_26598));
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
var seq__26567 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26568 = null;
var count__26569 = (0);
var i__26570 = (0);
while(true){
if((i__26570 < count__26569)){
var vec__26571 = cljs.core._nth.call(null,chunk__26568,i__26570);
var name = cljs.core.nth.call(null,vec__26571,(0),null);
var map__26572 = cljs.core.nth.call(null,vec__26571,(1),null);
var map__26572__$1 = ((((!((map__26572 == null)))?((((map__26572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26572):map__26572);
var doc = cljs.core.get.call(null,map__26572__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26572__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26599 = seq__26567;
var G__26600 = chunk__26568;
var G__26601 = count__26569;
var G__26602 = (i__26570 + (1));
seq__26567 = G__26599;
chunk__26568 = G__26600;
count__26569 = G__26601;
i__26570 = G__26602;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26567);
if(temp__4657__auto__){
var seq__26567__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26567__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__26567__$1);
var G__26603 = cljs.core.chunk_rest.call(null,seq__26567__$1);
var G__26604 = c__19270__auto__;
var G__26605 = cljs.core.count.call(null,c__19270__auto__);
var G__26606 = (0);
seq__26567 = G__26603;
chunk__26568 = G__26604;
count__26569 = G__26605;
i__26570 = G__26606;
continue;
} else {
var vec__26574 = cljs.core.first.call(null,seq__26567__$1);
var name = cljs.core.nth.call(null,vec__26574,(0),null);
var map__26575 = cljs.core.nth.call(null,vec__26574,(1),null);
var map__26575__$1 = ((((!((map__26575 == null)))?((((map__26575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26575):map__26575);
var doc = cljs.core.get.call(null,map__26575__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26575__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26607 = cljs.core.next.call(null,seq__26567__$1);
var G__26608 = null;
var G__26609 = (0);
var G__26610 = (0);
seq__26567 = G__26607;
chunk__26568 = G__26608;
count__26569 = G__26609;
i__26570 = G__26610;
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

//# sourceMappingURL=repl.js.map?rel=1470846204966