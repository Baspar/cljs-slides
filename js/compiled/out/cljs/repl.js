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
var seq__25434_25448 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25435_25449 = null;
var count__25436_25450 = (0);
var i__25437_25451 = (0);
while(true){
if((i__25437_25451 < count__25436_25450)){
var f_25452 = cljs.core._nth.call(null,chunk__25435_25449,i__25437_25451);
cljs.core.println.call(null,"  ",f_25452);

var G__25453 = seq__25434_25448;
var G__25454 = chunk__25435_25449;
var G__25455 = count__25436_25450;
var G__25456 = (i__25437_25451 + (1));
seq__25434_25448 = G__25453;
chunk__25435_25449 = G__25454;
count__25436_25450 = G__25455;
i__25437_25451 = G__25456;
continue;
} else {
var temp__4657__auto___25457 = cljs.core.seq.call(null,seq__25434_25448);
if(temp__4657__auto___25457){
var seq__25434_25458__$1 = temp__4657__auto___25457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25434_25458__$1)){
var c__19270__auto___25459 = cljs.core.chunk_first.call(null,seq__25434_25458__$1);
var G__25460 = cljs.core.chunk_rest.call(null,seq__25434_25458__$1);
var G__25461 = c__19270__auto___25459;
var G__25462 = cljs.core.count.call(null,c__19270__auto___25459);
var G__25463 = (0);
seq__25434_25448 = G__25460;
chunk__25435_25449 = G__25461;
count__25436_25450 = G__25462;
i__25437_25451 = G__25463;
continue;
} else {
var f_25464 = cljs.core.first.call(null,seq__25434_25458__$1);
cljs.core.println.call(null,"  ",f_25464);

var G__25465 = cljs.core.next.call(null,seq__25434_25458__$1);
var G__25466 = null;
var G__25467 = (0);
var G__25468 = (0);
seq__25434_25448 = G__25465;
chunk__25435_25449 = G__25466;
count__25436_25450 = G__25467;
i__25437_25451 = G__25468;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25469 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18459__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25469);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25469)))?cljs.core.second.call(null,arglists_25469):arglists_25469));
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
var seq__25438 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25439 = null;
var count__25440 = (0);
var i__25441 = (0);
while(true){
if((i__25441 < count__25440)){
var vec__25442 = cljs.core._nth.call(null,chunk__25439,i__25441);
var name = cljs.core.nth.call(null,vec__25442,(0),null);
var map__25443 = cljs.core.nth.call(null,vec__25442,(1),null);
var map__25443__$1 = ((((!((map__25443 == null)))?((((map__25443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25443):map__25443);
var doc = cljs.core.get.call(null,map__25443__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25443__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25470 = seq__25438;
var G__25471 = chunk__25439;
var G__25472 = count__25440;
var G__25473 = (i__25441 + (1));
seq__25438 = G__25470;
chunk__25439 = G__25471;
count__25440 = G__25472;
i__25441 = G__25473;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25438);
if(temp__4657__auto__){
var seq__25438__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25438__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__25438__$1);
var G__25474 = cljs.core.chunk_rest.call(null,seq__25438__$1);
var G__25475 = c__19270__auto__;
var G__25476 = cljs.core.count.call(null,c__19270__auto__);
var G__25477 = (0);
seq__25438 = G__25474;
chunk__25439 = G__25475;
count__25440 = G__25476;
i__25441 = G__25477;
continue;
} else {
var vec__25445 = cljs.core.first.call(null,seq__25438__$1);
var name = cljs.core.nth.call(null,vec__25445,(0),null);
var map__25446 = cljs.core.nth.call(null,vec__25445,(1),null);
var map__25446__$1 = ((((!((map__25446 == null)))?((((map__25446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25446):map__25446);
var doc = cljs.core.get.call(null,map__25446__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25446__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25478 = cljs.core.next.call(null,seq__25438__$1);
var G__25479 = null;
var G__25480 = (0);
var G__25481 = (0);
seq__25438 = G__25478;
chunk__25439 = G__25479;
count__25440 = G__25480;
i__25441 = G__25481;
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

//# sourceMappingURL=repl.js.map?rel=1505303972024