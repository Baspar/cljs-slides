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
var seq__28168_28182 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28169_28183 = null;
var count__28170_28184 = (0);
var i__28171_28185 = (0);
while(true){
if((i__28171_28185 < count__28170_28184)){
var f_28186 = cljs.core._nth.call(null,chunk__28169_28183,i__28171_28185);
cljs.core.println.call(null,"  ",f_28186);

var G__28187 = seq__28168_28182;
var G__28188 = chunk__28169_28183;
var G__28189 = count__28170_28184;
var G__28190 = (i__28171_28185 + (1));
seq__28168_28182 = G__28187;
chunk__28169_28183 = G__28188;
count__28170_28184 = G__28189;
i__28171_28185 = G__28190;
continue;
} else {
var temp__4657__auto___28191 = cljs.core.seq.call(null,seq__28168_28182);
if(temp__4657__auto___28191){
var seq__28168_28192__$1 = temp__4657__auto___28191;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28168_28192__$1)){
var c__19271__auto___28193 = cljs.core.chunk_first.call(null,seq__28168_28192__$1);
var G__28194 = cljs.core.chunk_rest.call(null,seq__28168_28192__$1);
var G__28195 = c__19271__auto___28193;
var G__28196 = cljs.core.count.call(null,c__19271__auto___28193);
var G__28197 = (0);
seq__28168_28182 = G__28194;
chunk__28169_28183 = G__28195;
count__28170_28184 = G__28196;
i__28171_28185 = G__28197;
continue;
} else {
var f_28198 = cljs.core.first.call(null,seq__28168_28192__$1);
cljs.core.println.call(null,"  ",f_28198);

var G__28199 = cljs.core.next.call(null,seq__28168_28192__$1);
var G__28200 = null;
var G__28201 = (0);
var G__28202 = (0);
seq__28168_28182 = G__28199;
chunk__28169_28183 = G__28200;
count__28170_28184 = G__28201;
i__28171_28185 = G__28202;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28203 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18460__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28203);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28203)))?cljs.core.second.call(null,arglists_28203):arglists_28203));
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
var seq__28172 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28173 = null;
var count__28174 = (0);
var i__28175 = (0);
while(true){
if((i__28175 < count__28174)){
var vec__28176 = cljs.core._nth.call(null,chunk__28173,i__28175);
var name = cljs.core.nth.call(null,vec__28176,(0),null);
var map__28177 = cljs.core.nth.call(null,vec__28176,(1),null);
var map__28177__$1 = ((((!((map__28177 == null)))?((((map__28177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28177):map__28177);
var doc = cljs.core.get.call(null,map__28177__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28177__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28204 = seq__28172;
var G__28205 = chunk__28173;
var G__28206 = count__28174;
var G__28207 = (i__28175 + (1));
seq__28172 = G__28204;
chunk__28173 = G__28205;
count__28174 = G__28206;
i__28175 = G__28207;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28172);
if(temp__4657__auto__){
var seq__28172__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28172__$1)){
var c__19271__auto__ = cljs.core.chunk_first.call(null,seq__28172__$1);
var G__28208 = cljs.core.chunk_rest.call(null,seq__28172__$1);
var G__28209 = c__19271__auto__;
var G__28210 = cljs.core.count.call(null,c__19271__auto__);
var G__28211 = (0);
seq__28172 = G__28208;
chunk__28173 = G__28209;
count__28174 = G__28210;
i__28175 = G__28211;
continue;
} else {
var vec__28179 = cljs.core.first.call(null,seq__28172__$1);
var name = cljs.core.nth.call(null,vec__28179,(0),null);
var map__28180 = cljs.core.nth.call(null,vec__28179,(1),null);
var map__28180__$1 = ((((!((map__28180 == null)))?((((map__28180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28180):map__28180);
var doc = cljs.core.get.call(null,map__28180__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28180__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28212 = cljs.core.next.call(null,seq__28172__$1);
var G__28213 = null;
var G__28214 = (0);
var G__28215 = (0);
seq__28172 = G__28212;
chunk__28173 = G__28213;
count__28174 = G__28214;
i__28175 = G__28215;
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

//# sourceMappingURL=repl.js.map?rel=1470998058279