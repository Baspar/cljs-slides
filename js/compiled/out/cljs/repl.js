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
var seq__41866_41880 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41867_41881 = null;
var count__41868_41882 = (0);
var i__41869_41883 = (0);
while(true){
if((i__41869_41883 < count__41868_41882)){
var f_41884 = cljs.core._nth.call(null,chunk__41867_41881,i__41869_41883);
cljs.core.println.call(null,"  ",f_41884);

var G__41885 = seq__41866_41880;
var G__41886 = chunk__41867_41881;
var G__41887 = count__41868_41882;
var G__41888 = (i__41869_41883 + (1));
seq__41866_41880 = G__41885;
chunk__41867_41881 = G__41886;
count__41868_41882 = G__41887;
i__41869_41883 = G__41888;
continue;
} else {
var temp__4657__auto___41889 = cljs.core.seq.call(null,seq__41866_41880);
if(temp__4657__auto___41889){
var seq__41866_41890__$1 = temp__4657__auto___41889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41866_41890__$1)){
var c__19271__auto___41891 = cljs.core.chunk_first.call(null,seq__41866_41890__$1);
var G__41892 = cljs.core.chunk_rest.call(null,seq__41866_41890__$1);
var G__41893 = c__19271__auto___41891;
var G__41894 = cljs.core.count.call(null,c__19271__auto___41891);
var G__41895 = (0);
seq__41866_41880 = G__41892;
chunk__41867_41881 = G__41893;
count__41868_41882 = G__41894;
i__41869_41883 = G__41895;
continue;
} else {
var f_41896 = cljs.core.first.call(null,seq__41866_41890__$1);
cljs.core.println.call(null,"  ",f_41896);

var G__41897 = cljs.core.next.call(null,seq__41866_41890__$1);
var G__41898 = null;
var G__41899 = (0);
var G__41900 = (0);
seq__41866_41880 = G__41897;
chunk__41867_41881 = G__41898;
count__41868_41882 = G__41899;
i__41869_41883 = G__41900;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41901 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18460__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41901);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41901)))?cljs.core.second.call(null,arglists_41901):arglists_41901));
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
var seq__41870 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41871 = null;
var count__41872 = (0);
var i__41873 = (0);
while(true){
if((i__41873 < count__41872)){
var vec__41874 = cljs.core._nth.call(null,chunk__41871,i__41873);
var name = cljs.core.nth.call(null,vec__41874,(0),null);
var map__41875 = cljs.core.nth.call(null,vec__41874,(1),null);
var map__41875__$1 = ((((!((map__41875 == null)))?((((map__41875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41875):map__41875);
var doc = cljs.core.get.call(null,map__41875__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__41875__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__41902 = seq__41870;
var G__41903 = chunk__41871;
var G__41904 = count__41872;
var G__41905 = (i__41873 + (1));
seq__41870 = G__41902;
chunk__41871 = G__41903;
count__41872 = G__41904;
i__41873 = G__41905;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41870);
if(temp__4657__auto__){
var seq__41870__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41870__$1)){
var c__19271__auto__ = cljs.core.chunk_first.call(null,seq__41870__$1);
var G__41906 = cljs.core.chunk_rest.call(null,seq__41870__$1);
var G__41907 = c__19271__auto__;
var G__41908 = cljs.core.count.call(null,c__19271__auto__);
var G__41909 = (0);
seq__41870 = G__41906;
chunk__41871 = G__41907;
count__41872 = G__41908;
i__41873 = G__41909;
continue;
} else {
var vec__41877 = cljs.core.first.call(null,seq__41870__$1);
var name = cljs.core.nth.call(null,vec__41877,(0),null);
var map__41878 = cljs.core.nth.call(null,vec__41877,(1),null);
var map__41878__$1 = ((((!((map__41878 == null)))?((((map__41878.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41878.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41878):map__41878);
var doc = cljs.core.get.call(null,map__41878__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__41878__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__41910 = cljs.core.next.call(null,seq__41870__$1);
var G__41911 = null;
var G__41912 = (0);
var G__41913 = (0);
seq__41870 = G__41910;
chunk__41871 = G__41911;
count__41872 = G__41912;
i__41873 = G__41913;
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

//# sourceMappingURL=repl.js.map?rel=1470998076006