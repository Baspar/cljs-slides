// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18459__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18459__auto__){
return or__18459__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18459__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24994_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24994_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24999 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25000 = null;
var count__25001 = (0);
var i__25002 = (0);
while(true){
if((i__25002 < count__25001)){
var n = cljs.core._nth.call(null,chunk__25000,i__25002);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25003 = seq__24999;
var G__25004 = chunk__25000;
var G__25005 = count__25001;
var G__25006 = (i__25002 + (1));
seq__24999 = G__25003;
chunk__25000 = G__25004;
count__25001 = G__25005;
i__25002 = G__25006;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24999);
if(temp__4657__auto__){
var seq__24999__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24999__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__24999__$1);
var G__25007 = cljs.core.chunk_rest.call(null,seq__24999__$1);
var G__25008 = c__19270__auto__;
var G__25009 = cljs.core.count.call(null,c__19270__auto__);
var G__25010 = (0);
seq__24999 = G__25007;
chunk__25000 = G__25008;
count__25001 = G__25009;
i__25002 = G__25010;
continue;
} else {
var n = cljs.core.first.call(null,seq__24999__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25011 = cljs.core.next.call(null,seq__24999__$1);
var G__25012 = null;
var G__25013 = (0);
var G__25014 = (0);
seq__24999 = G__25011;
chunk__25000 = G__25012;
count__25001 = G__25013;
i__25002 = G__25014;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25053_25060 = cljs.core.seq.call(null,deps);
var chunk__25054_25061 = null;
var count__25055_25062 = (0);
var i__25056_25063 = (0);
while(true){
if((i__25056_25063 < count__25055_25062)){
var dep_25064 = cljs.core._nth.call(null,chunk__25054_25061,i__25056_25063);
topo_sort_helper_STAR_.call(null,dep_25064,(depth + (1)),state);

var G__25065 = seq__25053_25060;
var G__25066 = chunk__25054_25061;
var G__25067 = count__25055_25062;
var G__25068 = (i__25056_25063 + (1));
seq__25053_25060 = G__25065;
chunk__25054_25061 = G__25066;
count__25055_25062 = G__25067;
i__25056_25063 = G__25068;
continue;
} else {
var temp__4657__auto___25069 = cljs.core.seq.call(null,seq__25053_25060);
if(temp__4657__auto___25069){
var seq__25053_25070__$1 = temp__4657__auto___25069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25053_25070__$1)){
var c__19270__auto___25071 = cljs.core.chunk_first.call(null,seq__25053_25070__$1);
var G__25072 = cljs.core.chunk_rest.call(null,seq__25053_25070__$1);
var G__25073 = c__19270__auto___25071;
var G__25074 = cljs.core.count.call(null,c__19270__auto___25071);
var G__25075 = (0);
seq__25053_25060 = G__25072;
chunk__25054_25061 = G__25073;
count__25055_25062 = G__25074;
i__25056_25063 = G__25075;
continue;
} else {
var dep_25076 = cljs.core.first.call(null,seq__25053_25070__$1);
topo_sort_helper_STAR_.call(null,dep_25076,(depth + (1)),state);

var G__25077 = cljs.core.next.call(null,seq__25053_25070__$1);
var G__25078 = null;
var G__25079 = (0);
var G__25080 = (0);
seq__25053_25060 = G__25077;
chunk__25054_25061 = G__25078;
count__25055_25062 = G__25079;
i__25056_25063 = G__25080;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25057){
var vec__25059 = p__25057;
var x = cljs.core.nth.call(null,vec__25059,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25059,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25059,x,xs,get_deps__$1){
return (function (p1__25015_SHARP_){
return clojure.set.difference.call(null,p1__25015_SHARP_,x);
});})(vec__25059,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25093 = cljs.core.seq.call(null,provides);
var chunk__25094 = null;
var count__25095 = (0);
var i__25096 = (0);
while(true){
if((i__25096 < count__25095)){
var prov = cljs.core._nth.call(null,chunk__25094,i__25096);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25097_25105 = cljs.core.seq.call(null,requires);
var chunk__25098_25106 = null;
var count__25099_25107 = (0);
var i__25100_25108 = (0);
while(true){
if((i__25100_25108 < count__25099_25107)){
var req_25109 = cljs.core._nth.call(null,chunk__25098_25106,i__25100_25108);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25109,prov);

var G__25110 = seq__25097_25105;
var G__25111 = chunk__25098_25106;
var G__25112 = count__25099_25107;
var G__25113 = (i__25100_25108 + (1));
seq__25097_25105 = G__25110;
chunk__25098_25106 = G__25111;
count__25099_25107 = G__25112;
i__25100_25108 = G__25113;
continue;
} else {
var temp__4657__auto___25114 = cljs.core.seq.call(null,seq__25097_25105);
if(temp__4657__auto___25114){
var seq__25097_25115__$1 = temp__4657__auto___25114;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25097_25115__$1)){
var c__19270__auto___25116 = cljs.core.chunk_first.call(null,seq__25097_25115__$1);
var G__25117 = cljs.core.chunk_rest.call(null,seq__25097_25115__$1);
var G__25118 = c__19270__auto___25116;
var G__25119 = cljs.core.count.call(null,c__19270__auto___25116);
var G__25120 = (0);
seq__25097_25105 = G__25117;
chunk__25098_25106 = G__25118;
count__25099_25107 = G__25119;
i__25100_25108 = G__25120;
continue;
} else {
var req_25121 = cljs.core.first.call(null,seq__25097_25115__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25121,prov);

var G__25122 = cljs.core.next.call(null,seq__25097_25115__$1);
var G__25123 = null;
var G__25124 = (0);
var G__25125 = (0);
seq__25097_25105 = G__25122;
chunk__25098_25106 = G__25123;
count__25099_25107 = G__25124;
i__25100_25108 = G__25125;
continue;
}
} else {
}
}
break;
}

var G__25126 = seq__25093;
var G__25127 = chunk__25094;
var G__25128 = count__25095;
var G__25129 = (i__25096 + (1));
seq__25093 = G__25126;
chunk__25094 = G__25127;
count__25095 = G__25128;
i__25096 = G__25129;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25093);
if(temp__4657__auto__){
var seq__25093__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25093__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__25093__$1);
var G__25130 = cljs.core.chunk_rest.call(null,seq__25093__$1);
var G__25131 = c__19270__auto__;
var G__25132 = cljs.core.count.call(null,c__19270__auto__);
var G__25133 = (0);
seq__25093 = G__25130;
chunk__25094 = G__25131;
count__25095 = G__25132;
i__25096 = G__25133;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25093__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25101_25134 = cljs.core.seq.call(null,requires);
var chunk__25102_25135 = null;
var count__25103_25136 = (0);
var i__25104_25137 = (0);
while(true){
if((i__25104_25137 < count__25103_25136)){
var req_25138 = cljs.core._nth.call(null,chunk__25102_25135,i__25104_25137);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25138,prov);

var G__25139 = seq__25101_25134;
var G__25140 = chunk__25102_25135;
var G__25141 = count__25103_25136;
var G__25142 = (i__25104_25137 + (1));
seq__25101_25134 = G__25139;
chunk__25102_25135 = G__25140;
count__25103_25136 = G__25141;
i__25104_25137 = G__25142;
continue;
} else {
var temp__4657__auto___25143__$1 = cljs.core.seq.call(null,seq__25101_25134);
if(temp__4657__auto___25143__$1){
var seq__25101_25144__$1 = temp__4657__auto___25143__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25101_25144__$1)){
var c__19270__auto___25145 = cljs.core.chunk_first.call(null,seq__25101_25144__$1);
var G__25146 = cljs.core.chunk_rest.call(null,seq__25101_25144__$1);
var G__25147 = c__19270__auto___25145;
var G__25148 = cljs.core.count.call(null,c__19270__auto___25145);
var G__25149 = (0);
seq__25101_25134 = G__25146;
chunk__25102_25135 = G__25147;
count__25103_25136 = G__25148;
i__25104_25137 = G__25149;
continue;
} else {
var req_25150 = cljs.core.first.call(null,seq__25101_25144__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25150,prov);

var G__25151 = cljs.core.next.call(null,seq__25101_25144__$1);
var G__25152 = null;
var G__25153 = (0);
var G__25154 = (0);
seq__25101_25134 = G__25151;
chunk__25102_25135 = G__25152;
count__25103_25136 = G__25153;
i__25104_25137 = G__25154;
continue;
}
} else {
}
}
break;
}

var G__25155 = cljs.core.next.call(null,seq__25093__$1);
var G__25156 = null;
var G__25157 = (0);
var G__25158 = (0);
seq__25093 = G__25155;
chunk__25094 = G__25156;
count__25095 = G__25157;
i__25096 = G__25158;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25163_25167 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25164_25168 = null;
var count__25165_25169 = (0);
var i__25166_25170 = (0);
while(true){
if((i__25166_25170 < count__25165_25169)){
var ns_25171 = cljs.core._nth.call(null,chunk__25164_25168,i__25166_25170);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25171);

var G__25172 = seq__25163_25167;
var G__25173 = chunk__25164_25168;
var G__25174 = count__25165_25169;
var G__25175 = (i__25166_25170 + (1));
seq__25163_25167 = G__25172;
chunk__25164_25168 = G__25173;
count__25165_25169 = G__25174;
i__25166_25170 = G__25175;
continue;
} else {
var temp__4657__auto___25176 = cljs.core.seq.call(null,seq__25163_25167);
if(temp__4657__auto___25176){
var seq__25163_25177__$1 = temp__4657__auto___25176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25163_25177__$1)){
var c__19270__auto___25178 = cljs.core.chunk_first.call(null,seq__25163_25177__$1);
var G__25179 = cljs.core.chunk_rest.call(null,seq__25163_25177__$1);
var G__25180 = c__19270__auto___25178;
var G__25181 = cljs.core.count.call(null,c__19270__auto___25178);
var G__25182 = (0);
seq__25163_25167 = G__25179;
chunk__25164_25168 = G__25180;
count__25165_25169 = G__25181;
i__25166_25170 = G__25182;
continue;
} else {
var ns_25183 = cljs.core.first.call(null,seq__25163_25177__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25183);

var G__25184 = cljs.core.next.call(null,seq__25163_25177__$1);
var G__25185 = null;
var G__25186 = (0);
var G__25187 = (0);
seq__25163_25167 = G__25184;
chunk__25164_25168 = G__25185;
count__25165_25169 = G__25186;
i__25166_25170 = G__25187;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18459__auto__ = goog.require__;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25188__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25189__i = 0, G__25189__a = new Array(arguments.length -  0);
while (G__25189__i < G__25189__a.length) {G__25189__a[G__25189__i] = arguments[G__25189__i + 0]; ++G__25189__i;}
  args = new cljs.core.IndexedSeq(G__25189__a,0);
} 
return G__25188__delegate.call(this,args);};
G__25188.cljs$lang$maxFixedArity = 0;
G__25188.cljs$lang$applyTo = (function (arglist__25190){
var args = cljs.core.seq(arglist__25190);
return G__25188__delegate(args);
});
G__25188.cljs$core$IFn$_invoke$arity$variadic = G__25188__delegate;
return G__25188;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25192 = cljs.core._EQ_;
var expr__25193 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25192.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25193))){
var path_parts = ((function (pred__25192,expr__25193){
return (function (p1__25191_SHARP_){
return clojure.string.split.call(null,p1__25191_SHARP_,/[\/\\]/);
});})(pred__25192,expr__25193))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25192,expr__25193){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25195){if((e25195 instanceof Error)){
var e = e25195;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25195;

}
}})());
});
;})(path_parts,sep,root,pred__25192,expr__25193))
} else {
if(cljs.core.truth_(pred__25192.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25193))){
return ((function (pred__25192,expr__25193){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25192,expr__25193){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25192,expr__25193))
);

return deferred.addErrback(((function (deferred,pred__25192,expr__25193){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25192,expr__25193))
);
});
;})(pred__25192,expr__25193))
} else {
return ((function (pred__25192,expr__25193){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25192,expr__25193))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25196,callback){
var map__25199 = p__25196;
var map__25199__$1 = ((((!((map__25199 == null)))?((((map__25199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25199):map__25199);
var file_msg = map__25199__$1;
var request_url = cljs.core.get.call(null,map__25199__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25199,map__25199__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25199,map__25199__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20574__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto__){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto__){
return (function (state_25223){
var state_val_25224 = (state_25223[(1)]);
if((state_val_25224 === (7))){
var inst_25219 = (state_25223[(2)]);
var state_25223__$1 = state_25223;
var statearr_25225_25245 = state_25223__$1;
(statearr_25225_25245[(2)] = inst_25219);

(statearr_25225_25245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (1))){
var state_25223__$1 = state_25223;
var statearr_25226_25246 = state_25223__$1;
(statearr_25226_25246[(2)] = null);

(statearr_25226_25246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (4))){
var inst_25203 = (state_25223[(7)]);
var inst_25203__$1 = (state_25223[(2)]);
var state_25223__$1 = (function (){var statearr_25227 = state_25223;
(statearr_25227[(7)] = inst_25203__$1);

return statearr_25227;
})();
if(cljs.core.truth_(inst_25203__$1)){
var statearr_25228_25247 = state_25223__$1;
(statearr_25228_25247[(1)] = (5));

} else {
var statearr_25229_25248 = state_25223__$1;
(statearr_25229_25248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (6))){
var state_25223__$1 = state_25223;
var statearr_25230_25249 = state_25223__$1;
(statearr_25230_25249[(2)] = null);

(statearr_25230_25249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (3))){
var inst_25221 = (state_25223[(2)]);
var state_25223__$1 = state_25223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25223__$1,inst_25221);
} else {
if((state_val_25224 === (2))){
var state_25223__$1 = state_25223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25223__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25224 === (11))){
var inst_25215 = (state_25223[(2)]);
var state_25223__$1 = (function (){var statearr_25231 = state_25223;
(statearr_25231[(8)] = inst_25215);

return statearr_25231;
})();
var statearr_25232_25250 = state_25223__$1;
(statearr_25232_25250[(2)] = null);

(statearr_25232_25250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (9))){
var inst_25207 = (state_25223[(9)]);
var inst_25209 = (state_25223[(10)]);
var inst_25211 = inst_25209.call(null,inst_25207);
var state_25223__$1 = state_25223;
var statearr_25233_25251 = state_25223__$1;
(statearr_25233_25251[(2)] = inst_25211);

(statearr_25233_25251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (5))){
var inst_25203 = (state_25223[(7)]);
var inst_25205 = figwheel.client.file_reloading.blocking_load.call(null,inst_25203);
var state_25223__$1 = state_25223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25223__$1,(8),inst_25205);
} else {
if((state_val_25224 === (10))){
var inst_25207 = (state_25223[(9)]);
var inst_25213 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25207);
var state_25223__$1 = state_25223;
var statearr_25234_25252 = state_25223__$1;
(statearr_25234_25252[(2)] = inst_25213);

(statearr_25234_25252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (8))){
var inst_25203 = (state_25223[(7)]);
var inst_25209 = (state_25223[(10)]);
var inst_25207 = (state_25223[(2)]);
var inst_25208 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25209__$1 = cljs.core.get.call(null,inst_25208,inst_25203);
var state_25223__$1 = (function (){var statearr_25235 = state_25223;
(statearr_25235[(9)] = inst_25207);

(statearr_25235[(10)] = inst_25209__$1);

return statearr_25235;
})();
if(cljs.core.truth_(inst_25209__$1)){
var statearr_25236_25253 = state_25223__$1;
(statearr_25236_25253[(1)] = (9));

} else {
var statearr_25237_25254 = state_25223__$1;
(statearr_25237_25254[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20574__auto__))
;
return ((function (switch__20553__auto__,c__20574__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20554__auto__ = null;
var figwheel$client$file_reloading$state_machine__20554__auto____0 = (function (){
var statearr_25241 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25241[(0)] = figwheel$client$file_reloading$state_machine__20554__auto__);

(statearr_25241[(1)] = (1));

return statearr_25241;
});
var figwheel$client$file_reloading$state_machine__20554__auto____1 = (function (state_25223){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_25223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e25242){if((e25242 instanceof Object)){
var ex__20557__auto__ = e25242;
var statearr_25243_25255 = state_25223;
(statearr_25243_25255[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25256 = state_25223;
state_25223 = G__25256;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20554__auto__ = function(state_25223){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20554__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20554__auto____1.call(this,state_25223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20554__auto____0;
figwheel$client$file_reloading$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20554__auto____1;
return figwheel$client$file_reloading$state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto__))
})();
var state__20576__auto__ = (function (){var statearr_25244 = f__20575__auto__.call(null);
(statearr_25244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto__);

return statearr_25244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto__))
);

return c__20574__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25257,callback){
var map__25260 = p__25257;
var map__25260__$1 = ((((!((map__25260 == null)))?((((map__25260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25260):map__25260);
var file_msg = map__25260__$1;
var namespace = cljs.core.get.call(null,map__25260__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25260,map__25260__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25260,map__25260__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25262){
var map__25265 = p__25262;
var map__25265__$1 = ((((!((map__25265 == null)))?((((map__25265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25265):map__25265);
var file_msg = map__25265__$1;
var namespace = cljs.core.get.call(null,map__25265__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18447__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18447__auto__){
var or__18459__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
var or__18459__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18459__auto____$1)){
return or__18459__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18447__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25267,callback){
var map__25270 = p__25267;
var map__25270__$1 = ((((!((map__25270 == null)))?((((map__25270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25270):map__25270);
var file_msg = map__25270__$1;
var request_url = cljs.core.get.call(null,map__25270__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25270__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20574__auto___25358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto___25358,out){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto___25358,out){
return (function (state_25340){
var state_val_25341 = (state_25340[(1)]);
if((state_val_25341 === (1))){
var inst_25318 = cljs.core.nth.call(null,files,(0),null);
var inst_25319 = cljs.core.nthnext.call(null,files,(1));
var inst_25320 = files;
var state_25340__$1 = (function (){var statearr_25342 = state_25340;
(statearr_25342[(7)] = inst_25320);

(statearr_25342[(8)] = inst_25318);

(statearr_25342[(9)] = inst_25319);

return statearr_25342;
})();
var statearr_25343_25359 = state_25340__$1;
(statearr_25343_25359[(2)] = null);

(statearr_25343_25359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25341 === (2))){
var inst_25320 = (state_25340[(7)]);
var inst_25323 = (state_25340[(10)]);
var inst_25323__$1 = cljs.core.nth.call(null,inst_25320,(0),null);
var inst_25324 = cljs.core.nthnext.call(null,inst_25320,(1));
var inst_25325 = (inst_25323__$1 == null);
var inst_25326 = cljs.core.not.call(null,inst_25325);
var state_25340__$1 = (function (){var statearr_25344 = state_25340;
(statearr_25344[(11)] = inst_25324);

(statearr_25344[(10)] = inst_25323__$1);

return statearr_25344;
})();
if(inst_25326){
var statearr_25345_25360 = state_25340__$1;
(statearr_25345_25360[(1)] = (4));

} else {
var statearr_25346_25361 = state_25340__$1;
(statearr_25346_25361[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25341 === (3))){
var inst_25338 = (state_25340[(2)]);
var state_25340__$1 = state_25340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25340__$1,inst_25338);
} else {
if((state_val_25341 === (4))){
var inst_25323 = (state_25340[(10)]);
var inst_25328 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25323);
var state_25340__$1 = state_25340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25340__$1,(7),inst_25328);
} else {
if((state_val_25341 === (5))){
var inst_25334 = cljs.core.async.close_BANG_.call(null,out);
var state_25340__$1 = state_25340;
var statearr_25347_25362 = state_25340__$1;
(statearr_25347_25362[(2)] = inst_25334);

(statearr_25347_25362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25341 === (6))){
var inst_25336 = (state_25340[(2)]);
var state_25340__$1 = state_25340;
var statearr_25348_25363 = state_25340__$1;
(statearr_25348_25363[(2)] = inst_25336);

(statearr_25348_25363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25341 === (7))){
var inst_25324 = (state_25340[(11)]);
var inst_25330 = (state_25340[(2)]);
var inst_25331 = cljs.core.async.put_BANG_.call(null,out,inst_25330);
var inst_25320 = inst_25324;
var state_25340__$1 = (function (){var statearr_25349 = state_25340;
(statearr_25349[(7)] = inst_25320);

(statearr_25349[(12)] = inst_25331);

return statearr_25349;
})();
var statearr_25350_25364 = state_25340__$1;
(statearr_25350_25364[(2)] = null);

(statearr_25350_25364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20574__auto___25358,out))
;
return ((function (switch__20553__auto__,c__20574__auto___25358,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20554__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20554__auto____0 = (function (){
var statearr_25354 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25354[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20554__auto__);

(statearr_25354[(1)] = (1));

return statearr_25354;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20554__auto____1 = (function (state_25340){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_25340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e25355){if((e25355 instanceof Object)){
var ex__20557__auto__ = e25355;
var statearr_25356_25365 = state_25340;
(statearr_25356_25365[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25366 = state_25340;
state_25340 = G__25366;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20554__auto__ = function(state_25340){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20554__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20554__auto____1.call(this,state_25340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20554__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20554__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto___25358,out))
})();
var state__20576__auto__ = (function (){var statearr_25357 = f__20575__auto__.call(null);
(statearr_25357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto___25358);

return statearr_25357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto___25358,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25367,opts){
var map__25371 = p__25367;
var map__25371__$1 = ((((!((map__25371 == null)))?((((map__25371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25371):map__25371);
var eval_body__$1 = cljs.core.get.call(null,map__25371__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25371__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18447__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18447__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18447__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25373){var e = e25373;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25374_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25374_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25379){
var vec__25380 = p__25379;
var k = cljs.core.nth.call(null,vec__25380,(0),null);
var v = cljs.core.nth.call(null,vec__25380,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25381){
var vec__25382 = p__25381;
var k = cljs.core.nth.call(null,vec__25382,(0),null);
var v = cljs.core.nth.call(null,vec__25382,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25386,p__25387){
var map__25634 = p__25386;
var map__25634__$1 = ((((!((map__25634 == null)))?((((map__25634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25634):map__25634);
var opts = map__25634__$1;
var before_jsload = cljs.core.get.call(null,map__25634__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25634__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25634__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25635 = p__25387;
var map__25635__$1 = ((((!((map__25635 == null)))?((((map__25635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25635):map__25635);
var msg = map__25635__$1;
var files = cljs.core.get.call(null,map__25635__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25635__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25635__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20574__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25788){
var state_val_25789 = (state_25788[(1)]);
if((state_val_25789 === (7))){
var inst_25649 = (state_25788[(7)]);
var inst_25650 = (state_25788[(8)]);
var inst_25651 = (state_25788[(9)]);
var inst_25652 = (state_25788[(10)]);
var inst_25657 = cljs.core._nth.call(null,inst_25650,inst_25652);
var inst_25658 = figwheel.client.file_reloading.eval_body.call(null,inst_25657,opts);
var inst_25659 = (inst_25652 + (1));
var tmp25790 = inst_25649;
var tmp25791 = inst_25650;
var tmp25792 = inst_25651;
var inst_25649__$1 = tmp25790;
var inst_25650__$1 = tmp25791;
var inst_25651__$1 = tmp25792;
var inst_25652__$1 = inst_25659;
var state_25788__$1 = (function (){var statearr_25793 = state_25788;
(statearr_25793[(7)] = inst_25649__$1);

(statearr_25793[(8)] = inst_25650__$1);

(statearr_25793[(11)] = inst_25658);

(statearr_25793[(9)] = inst_25651__$1);

(statearr_25793[(10)] = inst_25652__$1);

return statearr_25793;
})();
var statearr_25794_25880 = state_25788__$1;
(statearr_25794_25880[(2)] = null);

(statearr_25794_25880[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (20))){
var inst_25692 = (state_25788[(12)]);
var inst_25700 = figwheel.client.file_reloading.sort_files.call(null,inst_25692);
var state_25788__$1 = state_25788;
var statearr_25795_25881 = state_25788__$1;
(statearr_25795_25881[(2)] = inst_25700);

(statearr_25795_25881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (27))){
var state_25788__$1 = state_25788;
var statearr_25796_25882 = state_25788__$1;
(statearr_25796_25882[(2)] = null);

(statearr_25796_25882[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (1))){
var inst_25641 = (state_25788[(13)]);
var inst_25638 = before_jsload.call(null,files);
var inst_25639 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25640 = (function (){return ((function (inst_25641,inst_25638,inst_25639,state_val_25789,c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25383_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25383_SHARP_);
});
;})(inst_25641,inst_25638,inst_25639,state_val_25789,c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25641__$1 = cljs.core.filter.call(null,inst_25640,files);
var inst_25642 = cljs.core.not_empty.call(null,inst_25641__$1);
var state_25788__$1 = (function (){var statearr_25797 = state_25788;
(statearr_25797[(14)] = inst_25639);

(statearr_25797[(13)] = inst_25641__$1);

(statearr_25797[(15)] = inst_25638);

return statearr_25797;
})();
if(cljs.core.truth_(inst_25642)){
var statearr_25798_25883 = state_25788__$1;
(statearr_25798_25883[(1)] = (2));

} else {
var statearr_25799_25884 = state_25788__$1;
(statearr_25799_25884[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (24))){
var state_25788__$1 = state_25788;
var statearr_25800_25885 = state_25788__$1;
(statearr_25800_25885[(2)] = null);

(statearr_25800_25885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (39))){
var inst_25742 = (state_25788[(16)]);
var state_25788__$1 = state_25788;
var statearr_25801_25886 = state_25788__$1;
(statearr_25801_25886[(2)] = inst_25742);

(statearr_25801_25886[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (46))){
var inst_25783 = (state_25788[(2)]);
var state_25788__$1 = state_25788;
var statearr_25802_25887 = state_25788__$1;
(statearr_25802_25887[(2)] = inst_25783);

(statearr_25802_25887[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (4))){
var inst_25686 = (state_25788[(2)]);
var inst_25687 = cljs.core.List.EMPTY;
var inst_25688 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25687);
var inst_25689 = (function (){return ((function (inst_25686,inst_25687,inst_25688,state_val_25789,c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25384_SHARP_){
var and__18447__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25384_SHARP_);
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25384_SHARP_));
} else {
return and__18447__auto__;
}
});
;})(inst_25686,inst_25687,inst_25688,state_val_25789,c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25690 = cljs.core.filter.call(null,inst_25689,files);
var inst_25691 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25692 = cljs.core.concat.call(null,inst_25690,inst_25691);
var state_25788__$1 = (function (){var statearr_25803 = state_25788;
(statearr_25803[(12)] = inst_25692);

(statearr_25803[(17)] = inst_25686);

(statearr_25803[(18)] = inst_25688);

return statearr_25803;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25804_25888 = state_25788__$1;
(statearr_25804_25888[(1)] = (16));

} else {
var statearr_25805_25889 = state_25788__$1;
(statearr_25805_25889[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (15))){
var inst_25676 = (state_25788[(2)]);
var state_25788__$1 = state_25788;
var statearr_25806_25890 = state_25788__$1;
(statearr_25806_25890[(2)] = inst_25676);

(statearr_25806_25890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (21))){
var inst_25702 = (state_25788[(19)]);
var inst_25702__$1 = (state_25788[(2)]);
var inst_25703 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25702__$1);
var state_25788__$1 = (function (){var statearr_25807 = state_25788;
(statearr_25807[(19)] = inst_25702__$1);

return statearr_25807;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25788__$1,(22),inst_25703);
} else {
if((state_val_25789 === (31))){
var inst_25786 = (state_25788[(2)]);
var state_25788__$1 = state_25788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25788__$1,inst_25786);
} else {
if((state_val_25789 === (32))){
var inst_25742 = (state_25788[(16)]);
var inst_25747 = inst_25742.cljs$lang$protocol_mask$partition0$;
var inst_25748 = (inst_25747 & (64));
var inst_25749 = inst_25742.cljs$core$ISeq$;
var inst_25750 = (inst_25748) || (inst_25749);
var state_25788__$1 = state_25788;
if(cljs.core.truth_(inst_25750)){
var statearr_25808_25891 = state_25788__$1;
(statearr_25808_25891[(1)] = (35));

} else {
var statearr_25809_25892 = state_25788__$1;
(statearr_25809_25892[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (40))){
var inst_25763 = (state_25788[(20)]);
var inst_25762 = (state_25788[(2)]);
var inst_25763__$1 = cljs.core.get.call(null,inst_25762,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25764 = cljs.core.get.call(null,inst_25762,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25765 = cljs.core.not_empty.call(null,inst_25763__$1);
var state_25788__$1 = (function (){var statearr_25810 = state_25788;
(statearr_25810[(21)] = inst_25764);

(statearr_25810[(20)] = inst_25763__$1);

return statearr_25810;
})();
if(cljs.core.truth_(inst_25765)){
var statearr_25811_25893 = state_25788__$1;
(statearr_25811_25893[(1)] = (41));

} else {
var statearr_25812_25894 = state_25788__$1;
(statearr_25812_25894[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (33))){
var state_25788__$1 = state_25788;
var statearr_25813_25895 = state_25788__$1;
(statearr_25813_25895[(2)] = false);

(statearr_25813_25895[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (13))){
var inst_25662 = (state_25788[(22)]);
var inst_25666 = cljs.core.chunk_first.call(null,inst_25662);
var inst_25667 = cljs.core.chunk_rest.call(null,inst_25662);
var inst_25668 = cljs.core.count.call(null,inst_25666);
var inst_25649 = inst_25667;
var inst_25650 = inst_25666;
var inst_25651 = inst_25668;
var inst_25652 = (0);
var state_25788__$1 = (function (){var statearr_25814 = state_25788;
(statearr_25814[(7)] = inst_25649);

(statearr_25814[(8)] = inst_25650);

(statearr_25814[(9)] = inst_25651);

(statearr_25814[(10)] = inst_25652);

return statearr_25814;
})();
var statearr_25815_25896 = state_25788__$1;
(statearr_25815_25896[(2)] = null);

(statearr_25815_25896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (22))){
var inst_25705 = (state_25788[(23)]);
var inst_25710 = (state_25788[(24)]);
var inst_25702 = (state_25788[(19)]);
var inst_25706 = (state_25788[(25)]);
var inst_25705__$1 = (state_25788[(2)]);
var inst_25706__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25705__$1);
var inst_25707 = (function (){var all_files = inst_25702;
var res_SINGLEQUOTE_ = inst_25705__$1;
var res = inst_25706__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25705,inst_25710,inst_25702,inst_25706,inst_25705__$1,inst_25706__$1,state_val_25789,c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25385_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25385_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25705,inst_25710,inst_25702,inst_25706,inst_25705__$1,inst_25706__$1,state_val_25789,c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25708 = cljs.core.filter.call(null,inst_25707,inst_25705__$1);
var inst_25709 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25710__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25709);
var inst_25711 = cljs.core.not_empty.call(null,inst_25710__$1);
var state_25788__$1 = (function (){var statearr_25816 = state_25788;
(statearr_25816[(23)] = inst_25705__$1);

(statearr_25816[(26)] = inst_25708);

(statearr_25816[(24)] = inst_25710__$1);

(statearr_25816[(25)] = inst_25706__$1);

return statearr_25816;
})();
if(cljs.core.truth_(inst_25711)){
var statearr_25817_25897 = state_25788__$1;
(statearr_25817_25897[(1)] = (23));

} else {
var statearr_25818_25898 = state_25788__$1;
(statearr_25818_25898[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (36))){
var state_25788__$1 = state_25788;
var statearr_25819_25899 = state_25788__$1;
(statearr_25819_25899[(2)] = false);

(statearr_25819_25899[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (41))){
var inst_25763 = (state_25788[(20)]);
var inst_25767 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25768 = cljs.core.map.call(null,inst_25767,inst_25763);
var inst_25769 = cljs.core.pr_str.call(null,inst_25768);
var inst_25770 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25769)].join('');
var inst_25771 = figwheel.client.utils.log.call(null,inst_25770);
var state_25788__$1 = state_25788;
var statearr_25820_25900 = state_25788__$1;
(statearr_25820_25900[(2)] = inst_25771);

(statearr_25820_25900[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (43))){
var inst_25764 = (state_25788[(21)]);
var inst_25774 = (state_25788[(2)]);
var inst_25775 = cljs.core.not_empty.call(null,inst_25764);
var state_25788__$1 = (function (){var statearr_25821 = state_25788;
(statearr_25821[(27)] = inst_25774);

return statearr_25821;
})();
if(cljs.core.truth_(inst_25775)){
var statearr_25822_25901 = state_25788__$1;
(statearr_25822_25901[(1)] = (44));

} else {
var statearr_25823_25902 = state_25788__$1;
(statearr_25823_25902[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (29))){
var inst_25705 = (state_25788[(23)]);
var inst_25708 = (state_25788[(26)]);
var inst_25710 = (state_25788[(24)]);
var inst_25702 = (state_25788[(19)]);
var inst_25706 = (state_25788[(25)]);
var inst_25742 = (state_25788[(16)]);
var inst_25738 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25741 = (function (){var all_files = inst_25702;
var res_SINGLEQUOTE_ = inst_25705;
var res = inst_25706;
var files_not_loaded = inst_25708;
var dependencies_that_loaded = inst_25710;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25705,inst_25708,inst_25710,inst_25702,inst_25706,inst_25742,inst_25738,state_val_25789,c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25740){
var map__25824 = p__25740;
var map__25824__$1 = ((((!((map__25824 == null)))?((((map__25824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25824):map__25824);
var namespace = cljs.core.get.call(null,map__25824__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25705,inst_25708,inst_25710,inst_25702,inst_25706,inst_25742,inst_25738,state_val_25789,c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25742__$1 = cljs.core.group_by.call(null,inst_25741,inst_25708);
var inst_25744 = (inst_25742__$1 == null);
var inst_25745 = cljs.core.not.call(null,inst_25744);
var state_25788__$1 = (function (){var statearr_25826 = state_25788;
(statearr_25826[(28)] = inst_25738);

(statearr_25826[(16)] = inst_25742__$1);

return statearr_25826;
})();
if(inst_25745){
var statearr_25827_25903 = state_25788__$1;
(statearr_25827_25903[(1)] = (32));

} else {
var statearr_25828_25904 = state_25788__$1;
(statearr_25828_25904[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (44))){
var inst_25764 = (state_25788[(21)]);
var inst_25777 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25764);
var inst_25778 = cljs.core.pr_str.call(null,inst_25777);
var inst_25779 = [cljs.core.str("not required: "),cljs.core.str(inst_25778)].join('');
var inst_25780 = figwheel.client.utils.log.call(null,inst_25779);
var state_25788__$1 = state_25788;
var statearr_25829_25905 = state_25788__$1;
(statearr_25829_25905[(2)] = inst_25780);

(statearr_25829_25905[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (6))){
var inst_25683 = (state_25788[(2)]);
var state_25788__$1 = state_25788;
var statearr_25830_25906 = state_25788__$1;
(statearr_25830_25906[(2)] = inst_25683);

(statearr_25830_25906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (28))){
var inst_25708 = (state_25788[(26)]);
var inst_25735 = (state_25788[(2)]);
var inst_25736 = cljs.core.not_empty.call(null,inst_25708);
var state_25788__$1 = (function (){var statearr_25831 = state_25788;
(statearr_25831[(29)] = inst_25735);

return statearr_25831;
})();
if(cljs.core.truth_(inst_25736)){
var statearr_25832_25907 = state_25788__$1;
(statearr_25832_25907[(1)] = (29));

} else {
var statearr_25833_25908 = state_25788__$1;
(statearr_25833_25908[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (25))){
var inst_25706 = (state_25788[(25)]);
var inst_25722 = (state_25788[(2)]);
var inst_25723 = cljs.core.not_empty.call(null,inst_25706);
var state_25788__$1 = (function (){var statearr_25834 = state_25788;
(statearr_25834[(30)] = inst_25722);

return statearr_25834;
})();
if(cljs.core.truth_(inst_25723)){
var statearr_25835_25909 = state_25788__$1;
(statearr_25835_25909[(1)] = (26));

} else {
var statearr_25836_25910 = state_25788__$1;
(statearr_25836_25910[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (34))){
var inst_25757 = (state_25788[(2)]);
var state_25788__$1 = state_25788;
if(cljs.core.truth_(inst_25757)){
var statearr_25837_25911 = state_25788__$1;
(statearr_25837_25911[(1)] = (38));

} else {
var statearr_25838_25912 = state_25788__$1;
(statearr_25838_25912[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (17))){
var state_25788__$1 = state_25788;
var statearr_25839_25913 = state_25788__$1;
(statearr_25839_25913[(2)] = recompile_dependents);

(statearr_25839_25913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (3))){
var state_25788__$1 = state_25788;
var statearr_25840_25914 = state_25788__$1;
(statearr_25840_25914[(2)] = null);

(statearr_25840_25914[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (12))){
var inst_25679 = (state_25788[(2)]);
var state_25788__$1 = state_25788;
var statearr_25841_25915 = state_25788__$1;
(statearr_25841_25915[(2)] = inst_25679);

(statearr_25841_25915[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (2))){
var inst_25641 = (state_25788[(13)]);
var inst_25648 = cljs.core.seq.call(null,inst_25641);
var inst_25649 = inst_25648;
var inst_25650 = null;
var inst_25651 = (0);
var inst_25652 = (0);
var state_25788__$1 = (function (){var statearr_25842 = state_25788;
(statearr_25842[(7)] = inst_25649);

(statearr_25842[(8)] = inst_25650);

(statearr_25842[(9)] = inst_25651);

(statearr_25842[(10)] = inst_25652);

return statearr_25842;
})();
var statearr_25843_25916 = state_25788__$1;
(statearr_25843_25916[(2)] = null);

(statearr_25843_25916[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (23))){
var inst_25705 = (state_25788[(23)]);
var inst_25708 = (state_25788[(26)]);
var inst_25710 = (state_25788[(24)]);
var inst_25702 = (state_25788[(19)]);
var inst_25706 = (state_25788[(25)]);
var inst_25713 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25715 = (function (){var all_files = inst_25702;
var res_SINGLEQUOTE_ = inst_25705;
var res = inst_25706;
var files_not_loaded = inst_25708;
var dependencies_that_loaded = inst_25710;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25705,inst_25708,inst_25710,inst_25702,inst_25706,inst_25713,state_val_25789,c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25714){
var map__25844 = p__25714;
var map__25844__$1 = ((((!((map__25844 == null)))?((((map__25844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25844):map__25844);
var request_url = cljs.core.get.call(null,map__25844__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25705,inst_25708,inst_25710,inst_25702,inst_25706,inst_25713,state_val_25789,c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25716 = cljs.core.reverse.call(null,inst_25710);
var inst_25717 = cljs.core.map.call(null,inst_25715,inst_25716);
var inst_25718 = cljs.core.pr_str.call(null,inst_25717);
var inst_25719 = figwheel.client.utils.log.call(null,inst_25718);
var state_25788__$1 = (function (){var statearr_25846 = state_25788;
(statearr_25846[(31)] = inst_25713);

return statearr_25846;
})();
var statearr_25847_25917 = state_25788__$1;
(statearr_25847_25917[(2)] = inst_25719);

(statearr_25847_25917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (35))){
var state_25788__$1 = state_25788;
var statearr_25848_25918 = state_25788__$1;
(statearr_25848_25918[(2)] = true);

(statearr_25848_25918[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (19))){
var inst_25692 = (state_25788[(12)]);
var inst_25698 = figwheel.client.file_reloading.expand_files.call(null,inst_25692);
var state_25788__$1 = state_25788;
var statearr_25849_25919 = state_25788__$1;
(statearr_25849_25919[(2)] = inst_25698);

(statearr_25849_25919[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (11))){
var state_25788__$1 = state_25788;
var statearr_25850_25920 = state_25788__$1;
(statearr_25850_25920[(2)] = null);

(statearr_25850_25920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (9))){
var inst_25681 = (state_25788[(2)]);
var state_25788__$1 = state_25788;
var statearr_25851_25921 = state_25788__$1;
(statearr_25851_25921[(2)] = inst_25681);

(statearr_25851_25921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (5))){
var inst_25651 = (state_25788[(9)]);
var inst_25652 = (state_25788[(10)]);
var inst_25654 = (inst_25652 < inst_25651);
var inst_25655 = inst_25654;
var state_25788__$1 = state_25788;
if(cljs.core.truth_(inst_25655)){
var statearr_25852_25922 = state_25788__$1;
(statearr_25852_25922[(1)] = (7));

} else {
var statearr_25853_25923 = state_25788__$1;
(statearr_25853_25923[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (14))){
var inst_25662 = (state_25788[(22)]);
var inst_25671 = cljs.core.first.call(null,inst_25662);
var inst_25672 = figwheel.client.file_reloading.eval_body.call(null,inst_25671,opts);
var inst_25673 = cljs.core.next.call(null,inst_25662);
var inst_25649 = inst_25673;
var inst_25650 = null;
var inst_25651 = (0);
var inst_25652 = (0);
var state_25788__$1 = (function (){var statearr_25854 = state_25788;
(statearr_25854[(7)] = inst_25649);

(statearr_25854[(8)] = inst_25650);

(statearr_25854[(9)] = inst_25651);

(statearr_25854[(10)] = inst_25652);

(statearr_25854[(32)] = inst_25672);

return statearr_25854;
})();
var statearr_25855_25924 = state_25788__$1;
(statearr_25855_25924[(2)] = null);

(statearr_25855_25924[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (45))){
var state_25788__$1 = state_25788;
var statearr_25856_25925 = state_25788__$1;
(statearr_25856_25925[(2)] = null);

(statearr_25856_25925[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (26))){
var inst_25705 = (state_25788[(23)]);
var inst_25708 = (state_25788[(26)]);
var inst_25710 = (state_25788[(24)]);
var inst_25702 = (state_25788[(19)]);
var inst_25706 = (state_25788[(25)]);
var inst_25725 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25727 = (function (){var all_files = inst_25702;
var res_SINGLEQUOTE_ = inst_25705;
var res = inst_25706;
var files_not_loaded = inst_25708;
var dependencies_that_loaded = inst_25710;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25705,inst_25708,inst_25710,inst_25702,inst_25706,inst_25725,state_val_25789,c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25726){
var map__25857 = p__25726;
var map__25857__$1 = ((((!((map__25857 == null)))?((((map__25857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25857):map__25857);
var namespace = cljs.core.get.call(null,map__25857__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25857__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25705,inst_25708,inst_25710,inst_25702,inst_25706,inst_25725,state_val_25789,c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25728 = cljs.core.map.call(null,inst_25727,inst_25706);
var inst_25729 = cljs.core.pr_str.call(null,inst_25728);
var inst_25730 = figwheel.client.utils.log.call(null,inst_25729);
var inst_25731 = (function (){var all_files = inst_25702;
var res_SINGLEQUOTE_ = inst_25705;
var res = inst_25706;
var files_not_loaded = inst_25708;
var dependencies_that_loaded = inst_25710;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25705,inst_25708,inst_25710,inst_25702,inst_25706,inst_25725,inst_25727,inst_25728,inst_25729,inst_25730,state_val_25789,c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25705,inst_25708,inst_25710,inst_25702,inst_25706,inst_25725,inst_25727,inst_25728,inst_25729,inst_25730,state_val_25789,c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25732 = setTimeout(inst_25731,(10));
var state_25788__$1 = (function (){var statearr_25859 = state_25788;
(statearr_25859[(33)] = inst_25725);

(statearr_25859[(34)] = inst_25730);

return statearr_25859;
})();
var statearr_25860_25926 = state_25788__$1;
(statearr_25860_25926[(2)] = inst_25732);

(statearr_25860_25926[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (16))){
var state_25788__$1 = state_25788;
var statearr_25861_25927 = state_25788__$1;
(statearr_25861_25927[(2)] = reload_dependents);

(statearr_25861_25927[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (38))){
var inst_25742 = (state_25788[(16)]);
var inst_25759 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25742);
var state_25788__$1 = state_25788;
var statearr_25862_25928 = state_25788__$1;
(statearr_25862_25928[(2)] = inst_25759);

(statearr_25862_25928[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (30))){
var state_25788__$1 = state_25788;
var statearr_25863_25929 = state_25788__$1;
(statearr_25863_25929[(2)] = null);

(statearr_25863_25929[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (10))){
var inst_25662 = (state_25788[(22)]);
var inst_25664 = cljs.core.chunked_seq_QMARK_.call(null,inst_25662);
var state_25788__$1 = state_25788;
if(inst_25664){
var statearr_25864_25930 = state_25788__$1;
(statearr_25864_25930[(1)] = (13));

} else {
var statearr_25865_25931 = state_25788__$1;
(statearr_25865_25931[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (18))){
var inst_25696 = (state_25788[(2)]);
var state_25788__$1 = state_25788;
if(cljs.core.truth_(inst_25696)){
var statearr_25866_25932 = state_25788__$1;
(statearr_25866_25932[(1)] = (19));

} else {
var statearr_25867_25933 = state_25788__$1;
(statearr_25867_25933[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (42))){
var state_25788__$1 = state_25788;
var statearr_25868_25934 = state_25788__$1;
(statearr_25868_25934[(2)] = null);

(statearr_25868_25934[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (37))){
var inst_25754 = (state_25788[(2)]);
var state_25788__$1 = state_25788;
var statearr_25869_25935 = state_25788__$1;
(statearr_25869_25935[(2)] = inst_25754);

(statearr_25869_25935[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (8))){
var inst_25662 = (state_25788[(22)]);
var inst_25649 = (state_25788[(7)]);
var inst_25662__$1 = cljs.core.seq.call(null,inst_25649);
var state_25788__$1 = (function (){var statearr_25870 = state_25788;
(statearr_25870[(22)] = inst_25662__$1);

return statearr_25870;
})();
if(inst_25662__$1){
var statearr_25871_25936 = state_25788__$1;
(statearr_25871_25936[(1)] = (10));

} else {
var statearr_25872_25937 = state_25788__$1;
(statearr_25872_25937[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20553__auto__,c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20554__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20554__auto____0 = (function (){
var statearr_25876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25876[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20554__auto__);

(statearr_25876[(1)] = (1));

return statearr_25876;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20554__auto____1 = (function (state_25788){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_25788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e25877){if((e25877 instanceof Object)){
var ex__20557__auto__ = e25877;
var statearr_25878_25938 = state_25788;
(statearr_25878_25938[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25939 = state_25788;
state_25788 = G__25939;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20554__auto__ = function(state_25788){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20554__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20554__auto____1.call(this,state_25788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20554__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20554__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20576__auto__ = (function (){var statearr_25879 = f__20575__auto__.call(null);
(statearr_25879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto__);

return statearr_25879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto__,map__25634,map__25634__$1,opts,before_jsload,on_jsload,reload_dependents,map__25635,map__25635__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20574__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25942,link){
var map__25945 = p__25942;
var map__25945__$1 = ((((!((map__25945 == null)))?((((map__25945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25945):map__25945);
var file = cljs.core.get.call(null,map__25945__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__25945,map__25945__$1,file){
return (function (p1__25940_SHARP_,p2__25941_SHARP_){
if(cljs.core._EQ_.call(null,p1__25940_SHARP_,p2__25941_SHARP_)){
return p1__25940_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__25945,map__25945__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25951){
var map__25952 = p__25951;
var map__25952__$1 = ((((!((map__25952 == null)))?((((map__25952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25952):map__25952);
var match_length = cljs.core.get.call(null,map__25952__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25952__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25947_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25947_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25954 = [];
var len__19529__auto___25957 = arguments.length;
var i__19530__auto___25958 = (0);
while(true){
if((i__19530__auto___25958 < len__19529__auto___25957)){
args25954.push((arguments[i__19530__auto___25958]));

var G__25959 = (i__19530__auto___25958 + (1));
i__19530__auto___25958 = G__25959;
continue;
} else {
}
break;
}

var G__25956 = args25954.length;
switch (G__25956) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25954.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25961_SHARP_,p2__25962_SHARP_){
return cljs.core.assoc.call(null,p1__25961_SHARP_,cljs.core.get.call(null,p2__25962_SHARP_,key),p2__25962_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25963){
var map__25966 = p__25963;
var map__25966__$1 = ((((!((map__25966 == null)))?((((map__25966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25966):map__25966);
var f_data = map__25966__$1;
var file = cljs.core.get.call(null,map__25966__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25968,files_msg){
var map__25975 = p__25968;
var map__25975__$1 = ((((!((map__25975 == null)))?((((map__25975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25975):map__25975);
var opts = map__25975__$1;
var on_cssload = cljs.core.get.call(null,map__25975__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25977_25981 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25978_25982 = null;
var count__25979_25983 = (0);
var i__25980_25984 = (0);
while(true){
if((i__25980_25984 < count__25979_25983)){
var f_25985 = cljs.core._nth.call(null,chunk__25978_25982,i__25980_25984);
figwheel.client.file_reloading.reload_css_file.call(null,f_25985);

var G__25986 = seq__25977_25981;
var G__25987 = chunk__25978_25982;
var G__25988 = count__25979_25983;
var G__25989 = (i__25980_25984 + (1));
seq__25977_25981 = G__25986;
chunk__25978_25982 = G__25987;
count__25979_25983 = G__25988;
i__25980_25984 = G__25989;
continue;
} else {
var temp__4657__auto___25990 = cljs.core.seq.call(null,seq__25977_25981);
if(temp__4657__auto___25990){
var seq__25977_25991__$1 = temp__4657__auto___25990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25977_25991__$1)){
var c__19270__auto___25992 = cljs.core.chunk_first.call(null,seq__25977_25991__$1);
var G__25993 = cljs.core.chunk_rest.call(null,seq__25977_25991__$1);
var G__25994 = c__19270__auto___25992;
var G__25995 = cljs.core.count.call(null,c__19270__auto___25992);
var G__25996 = (0);
seq__25977_25981 = G__25993;
chunk__25978_25982 = G__25994;
count__25979_25983 = G__25995;
i__25980_25984 = G__25996;
continue;
} else {
var f_25997 = cljs.core.first.call(null,seq__25977_25991__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25997);

var G__25998 = cljs.core.next.call(null,seq__25977_25991__$1);
var G__25999 = null;
var G__26000 = (0);
var G__26001 = (0);
seq__25977_25981 = G__25998;
chunk__25978_25982 = G__25999;
count__25979_25983 = G__26000;
i__25980_25984 = G__26001;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25975,map__25975__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25975,map__25975__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1471682747463