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
var seq__28177_28191 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28178_28192 = null;
var count__28179_28193 = (0);
var i__28180_28194 = (0);
while(true){
if((i__28180_28194 < count__28179_28193)){
var f_28195 = cljs.core._nth.call(null,chunk__28178_28192,i__28180_28194);
cljs.core.println.call(null,"  ",f_28195);

var G__28196 = seq__28177_28191;
var G__28197 = chunk__28178_28192;
var G__28198 = count__28179_28193;
var G__28199 = (i__28180_28194 + (1));
seq__28177_28191 = G__28196;
chunk__28178_28192 = G__28197;
count__28179_28193 = G__28198;
i__28180_28194 = G__28199;
continue;
} else {
var temp__4657__auto___28200 = cljs.core.seq.call(null,seq__28177_28191);
if(temp__4657__auto___28200){
var seq__28177_28201__$1 = temp__4657__auto___28200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28177_28201__$1)){
var c__19270__auto___28202 = cljs.core.chunk_first.call(null,seq__28177_28201__$1);
var G__28203 = cljs.core.chunk_rest.call(null,seq__28177_28201__$1);
var G__28204 = c__19270__auto___28202;
var G__28205 = cljs.core.count.call(null,c__19270__auto___28202);
var G__28206 = (0);
seq__28177_28191 = G__28203;
chunk__28178_28192 = G__28204;
count__28179_28193 = G__28205;
i__28180_28194 = G__28206;
continue;
} else {
var f_28207 = cljs.core.first.call(null,seq__28177_28201__$1);
cljs.core.println.call(null,"  ",f_28207);

var G__28208 = cljs.core.next.call(null,seq__28177_28201__$1);
var G__28209 = null;
var G__28210 = (0);
var G__28211 = (0);
seq__28177_28191 = G__28208;
chunk__28178_28192 = G__28209;
count__28179_28193 = G__28210;
i__28180_28194 = G__28211;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28212 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18459__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28212);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28212)))?cljs.core.second.call(null,arglists_28212):arglists_28212));
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
var seq__28181 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28182 = null;
var count__28183 = (0);
var i__28184 = (0);
while(true){
if((i__28184 < count__28183)){
var vec__28185 = cljs.core._nth.call(null,chunk__28182,i__28184);
var name = cljs.core.nth.call(null,vec__28185,(0),null);
var map__28186 = cljs.core.nth.call(null,vec__28185,(1),null);
var map__28186__$1 = ((((!((map__28186 == null)))?((((map__28186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28186):map__28186);
var doc = cljs.core.get.call(null,map__28186__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28186__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28213 = seq__28181;
var G__28214 = chunk__28182;
var G__28215 = count__28183;
var G__28216 = (i__28184 + (1));
seq__28181 = G__28213;
chunk__28182 = G__28214;
count__28183 = G__28215;
i__28184 = G__28216;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28181);
if(temp__4657__auto__){
var seq__28181__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28181__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__28181__$1);
var G__28217 = cljs.core.chunk_rest.call(null,seq__28181__$1);
var G__28218 = c__19270__auto__;
var G__28219 = cljs.core.count.call(null,c__19270__auto__);
var G__28220 = (0);
seq__28181 = G__28217;
chunk__28182 = G__28218;
count__28183 = G__28219;
i__28184 = G__28220;
continue;
} else {
var vec__28188 = cljs.core.first.call(null,seq__28181__$1);
var name = cljs.core.nth.call(null,vec__28188,(0),null);
var map__28189 = cljs.core.nth.call(null,vec__28188,(1),null);
var map__28189__$1 = ((((!((map__28189 == null)))?((((map__28189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28189):map__28189);
var doc = cljs.core.get.call(null,map__28189__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28189__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28221 = cljs.core.next.call(null,seq__28181__$1);
var G__28222 = null;
var G__28223 = (0);
var G__28224 = (0);
seq__28181 = G__28221;
chunk__28182 = G__28222;
count__28183 = G__28223;
i__28184 = G__28224;
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

//# sourceMappingURL=repl.js.map?rel=1470497437455