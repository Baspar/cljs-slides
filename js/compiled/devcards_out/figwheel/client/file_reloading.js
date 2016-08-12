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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27153_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27153_SHARP_));
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
var seq__27158 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27159 = null;
var count__27160 = (0);
var i__27161 = (0);
while(true){
if((i__27161 < count__27160)){
var n = cljs.core._nth.call(null,chunk__27159,i__27161);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27162 = seq__27158;
var G__27163 = chunk__27159;
var G__27164 = count__27160;
var G__27165 = (i__27161 + (1));
seq__27158 = G__27162;
chunk__27159 = G__27163;
count__27160 = G__27164;
i__27161 = G__27165;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27158);
if(temp__4657__auto__){
var seq__27158__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27158__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__27158__$1);
var G__27166 = cljs.core.chunk_rest.call(null,seq__27158__$1);
var G__27167 = c__19270__auto__;
var G__27168 = cljs.core.count.call(null,c__19270__auto__);
var G__27169 = (0);
seq__27158 = G__27166;
chunk__27159 = G__27167;
count__27160 = G__27168;
i__27161 = G__27169;
continue;
} else {
var n = cljs.core.first.call(null,seq__27158__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27170 = cljs.core.next.call(null,seq__27158__$1);
var G__27171 = null;
var G__27172 = (0);
var G__27173 = (0);
seq__27158 = G__27170;
chunk__27159 = G__27171;
count__27160 = G__27172;
i__27161 = G__27173;
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

var seq__27212_27219 = cljs.core.seq.call(null,deps);
var chunk__27213_27220 = null;
var count__27214_27221 = (0);
var i__27215_27222 = (0);
while(true){
if((i__27215_27222 < count__27214_27221)){
var dep_27223 = cljs.core._nth.call(null,chunk__27213_27220,i__27215_27222);
topo_sort_helper_STAR_.call(null,dep_27223,(depth + (1)),state);

var G__27224 = seq__27212_27219;
var G__27225 = chunk__27213_27220;
var G__27226 = count__27214_27221;
var G__27227 = (i__27215_27222 + (1));
seq__27212_27219 = G__27224;
chunk__27213_27220 = G__27225;
count__27214_27221 = G__27226;
i__27215_27222 = G__27227;
continue;
} else {
var temp__4657__auto___27228 = cljs.core.seq.call(null,seq__27212_27219);
if(temp__4657__auto___27228){
var seq__27212_27229__$1 = temp__4657__auto___27228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27212_27229__$1)){
var c__19270__auto___27230 = cljs.core.chunk_first.call(null,seq__27212_27229__$1);
var G__27231 = cljs.core.chunk_rest.call(null,seq__27212_27229__$1);
var G__27232 = c__19270__auto___27230;
var G__27233 = cljs.core.count.call(null,c__19270__auto___27230);
var G__27234 = (0);
seq__27212_27219 = G__27231;
chunk__27213_27220 = G__27232;
count__27214_27221 = G__27233;
i__27215_27222 = G__27234;
continue;
} else {
var dep_27235 = cljs.core.first.call(null,seq__27212_27229__$1);
topo_sort_helper_STAR_.call(null,dep_27235,(depth + (1)),state);

var G__27236 = cljs.core.next.call(null,seq__27212_27229__$1);
var G__27237 = null;
var G__27238 = (0);
var G__27239 = (0);
seq__27212_27219 = G__27236;
chunk__27213_27220 = G__27237;
count__27214_27221 = G__27238;
i__27215_27222 = G__27239;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27216){
var vec__27218 = p__27216;
var x = cljs.core.nth.call(null,vec__27218,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27218,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27218,x,xs,get_deps__$1){
return (function (p1__27174_SHARP_){
return clojure.set.difference.call(null,p1__27174_SHARP_,x);
});})(vec__27218,x,xs,get_deps__$1))
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
var seq__27252 = cljs.core.seq.call(null,provides);
var chunk__27253 = null;
var count__27254 = (0);
var i__27255 = (0);
while(true){
if((i__27255 < count__27254)){
var prov = cljs.core._nth.call(null,chunk__27253,i__27255);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27256_27264 = cljs.core.seq.call(null,requires);
var chunk__27257_27265 = null;
var count__27258_27266 = (0);
var i__27259_27267 = (0);
while(true){
if((i__27259_27267 < count__27258_27266)){
var req_27268 = cljs.core._nth.call(null,chunk__27257_27265,i__27259_27267);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27268,prov);

var G__27269 = seq__27256_27264;
var G__27270 = chunk__27257_27265;
var G__27271 = count__27258_27266;
var G__27272 = (i__27259_27267 + (1));
seq__27256_27264 = G__27269;
chunk__27257_27265 = G__27270;
count__27258_27266 = G__27271;
i__27259_27267 = G__27272;
continue;
} else {
var temp__4657__auto___27273 = cljs.core.seq.call(null,seq__27256_27264);
if(temp__4657__auto___27273){
var seq__27256_27274__$1 = temp__4657__auto___27273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27256_27274__$1)){
var c__19270__auto___27275 = cljs.core.chunk_first.call(null,seq__27256_27274__$1);
var G__27276 = cljs.core.chunk_rest.call(null,seq__27256_27274__$1);
var G__27277 = c__19270__auto___27275;
var G__27278 = cljs.core.count.call(null,c__19270__auto___27275);
var G__27279 = (0);
seq__27256_27264 = G__27276;
chunk__27257_27265 = G__27277;
count__27258_27266 = G__27278;
i__27259_27267 = G__27279;
continue;
} else {
var req_27280 = cljs.core.first.call(null,seq__27256_27274__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27280,prov);

var G__27281 = cljs.core.next.call(null,seq__27256_27274__$1);
var G__27282 = null;
var G__27283 = (0);
var G__27284 = (0);
seq__27256_27264 = G__27281;
chunk__27257_27265 = G__27282;
count__27258_27266 = G__27283;
i__27259_27267 = G__27284;
continue;
}
} else {
}
}
break;
}

var G__27285 = seq__27252;
var G__27286 = chunk__27253;
var G__27287 = count__27254;
var G__27288 = (i__27255 + (1));
seq__27252 = G__27285;
chunk__27253 = G__27286;
count__27254 = G__27287;
i__27255 = G__27288;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27252);
if(temp__4657__auto__){
var seq__27252__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27252__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__27252__$1);
var G__27289 = cljs.core.chunk_rest.call(null,seq__27252__$1);
var G__27290 = c__19270__auto__;
var G__27291 = cljs.core.count.call(null,c__19270__auto__);
var G__27292 = (0);
seq__27252 = G__27289;
chunk__27253 = G__27290;
count__27254 = G__27291;
i__27255 = G__27292;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27252__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27260_27293 = cljs.core.seq.call(null,requires);
var chunk__27261_27294 = null;
var count__27262_27295 = (0);
var i__27263_27296 = (0);
while(true){
if((i__27263_27296 < count__27262_27295)){
var req_27297 = cljs.core._nth.call(null,chunk__27261_27294,i__27263_27296);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27297,prov);

var G__27298 = seq__27260_27293;
var G__27299 = chunk__27261_27294;
var G__27300 = count__27262_27295;
var G__27301 = (i__27263_27296 + (1));
seq__27260_27293 = G__27298;
chunk__27261_27294 = G__27299;
count__27262_27295 = G__27300;
i__27263_27296 = G__27301;
continue;
} else {
var temp__4657__auto___27302__$1 = cljs.core.seq.call(null,seq__27260_27293);
if(temp__4657__auto___27302__$1){
var seq__27260_27303__$1 = temp__4657__auto___27302__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27260_27303__$1)){
var c__19270__auto___27304 = cljs.core.chunk_first.call(null,seq__27260_27303__$1);
var G__27305 = cljs.core.chunk_rest.call(null,seq__27260_27303__$1);
var G__27306 = c__19270__auto___27304;
var G__27307 = cljs.core.count.call(null,c__19270__auto___27304);
var G__27308 = (0);
seq__27260_27293 = G__27305;
chunk__27261_27294 = G__27306;
count__27262_27295 = G__27307;
i__27263_27296 = G__27308;
continue;
} else {
var req_27309 = cljs.core.first.call(null,seq__27260_27303__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27309,prov);

var G__27310 = cljs.core.next.call(null,seq__27260_27303__$1);
var G__27311 = null;
var G__27312 = (0);
var G__27313 = (0);
seq__27260_27293 = G__27310;
chunk__27261_27294 = G__27311;
count__27262_27295 = G__27312;
i__27263_27296 = G__27313;
continue;
}
} else {
}
}
break;
}

var G__27314 = cljs.core.next.call(null,seq__27252__$1);
var G__27315 = null;
var G__27316 = (0);
var G__27317 = (0);
seq__27252 = G__27314;
chunk__27253 = G__27315;
count__27254 = G__27316;
i__27255 = G__27317;
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
var seq__27322_27326 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27323_27327 = null;
var count__27324_27328 = (0);
var i__27325_27329 = (0);
while(true){
if((i__27325_27329 < count__27324_27328)){
var ns_27330 = cljs.core._nth.call(null,chunk__27323_27327,i__27325_27329);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27330);

var G__27331 = seq__27322_27326;
var G__27332 = chunk__27323_27327;
var G__27333 = count__27324_27328;
var G__27334 = (i__27325_27329 + (1));
seq__27322_27326 = G__27331;
chunk__27323_27327 = G__27332;
count__27324_27328 = G__27333;
i__27325_27329 = G__27334;
continue;
} else {
var temp__4657__auto___27335 = cljs.core.seq.call(null,seq__27322_27326);
if(temp__4657__auto___27335){
var seq__27322_27336__$1 = temp__4657__auto___27335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27322_27336__$1)){
var c__19270__auto___27337 = cljs.core.chunk_first.call(null,seq__27322_27336__$1);
var G__27338 = cljs.core.chunk_rest.call(null,seq__27322_27336__$1);
var G__27339 = c__19270__auto___27337;
var G__27340 = cljs.core.count.call(null,c__19270__auto___27337);
var G__27341 = (0);
seq__27322_27326 = G__27338;
chunk__27323_27327 = G__27339;
count__27324_27328 = G__27340;
i__27325_27329 = G__27341;
continue;
} else {
var ns_27342 = cljs.core.first.call(null,seq__27322_27336__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27342);

var G__27343 = cljs.core.next.call(null,seq__27322_27336__$1);
var G__27344 = null;
var G__27345 = (0);
var G__27346 = (0);
seq__27322_27326 = G__27343;
chunk__27323_27327 = G__27344;
count__27324_27328 = G__27345;
i__27325_27329 = G__27346;
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
var G__27347__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27348__i = 0, G__27348__a = new Array(arguments.length -  0);
while (G__27348__i < G__27348__a.length) {G__27348__a[G__27348__i] = arguments[G__27348__i + 0]; ++G__27348__i;}
  args = new cljs.core.IndexedSeq(G__27348__a,0);
} 
return G__27347__delegate.call(this,args);};
G__27347.cljs$lang$maxFixedArity = 0;
G__27347.cljs$lang$applyTo = (function (arglist__27349){
var args = cljs.core.seq(arglist__27349);
return G__27347__delegate(args);
});
G__27347.cljs$core$IFn$_invoke$arity$variadic = G__27347__delegate;
return G__27347;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27351 = cljs.core._EQ_;
var expr__27352 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27351.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27352))){
var path_parts = ((function (pred__27351,expr__27352){
return (function (p1__27350_SHARP_){
return clojure.string.split.call(null,p1__27350_SHARP_,/[\/\\]/);
});})(pred__27351,expr__27352))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27351,expr__27352){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27354){if((e27354 instanceof Error)){
var e = e27354;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27354;

}
}})());
});
;})(path_parts,sep,root,pred__27351,expr__27352))
} else {
if(cljs.core.truth_(pred__27351.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27352))){
return ((function (pred__27351,expr__27352){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27351,expr__27352){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27351,expr__27352))
);

return deferred.addErrback(((function (deferred,pred__27351,expr__27352){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27351,expr__27352))
);
});
;})(pred__27351,expr__27352))
} else {
return ((function (pred__27351,expr__27352){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27351,expr__27352))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27355,callback){
var map__27358 = p__27355;
var map__27358__$1 = ((((!((map__27358 == null)))?((((map__27358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27358):map__27358);
var file_msg = map__27358__$1;
var request_url = cljs.core.get.call(null,map__27358__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27358,map__27358__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27358,map__27358__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__20626__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto__){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto__){
return (function (state_27382){
var state_val_27383 = (state_27382[(1)]);
if((state_val_27383 === (7))){
var inst_27378 = (state_27382[(2)]);
var state_27382__$1 = state_27382;
var statearr_27384_27404 = state_27382__$1;
(statearr_27384_27404[(2)] = inst_27378);

(statearr_27384_27404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (1))){
var state_27382__$1 = state_27382;
var statearr_27385_27405 = state_27382__$1;
(statearr_27385_27405[(2)] = null);

(statearr_27385_27405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (4))){
var inst_27362 = (state_27382[(7)]);
var inst_27362__$1 = (state_27382[(2)]);
var state_27382__$1 = (function (){var statearr_27386 = state_27382;
(statearr_27386[(7)] = inst_27362__$1);

return statearr_27386;
})();
if(cljs.core.truth_(inst_27362__$1)){
var statearr_27387_27406 = state_27382__$1;
(statearr_27387_27406[(1)] = (5));

} else {
var statearr_27388_27407 = state_27382__$1;
(statearr_27388_27407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (6))){
var state_27382__$1 = state_27382;
var statearr_27389_27408 = state_27382__$1;
(statearr_27389_27408[(2)] = null);

(statearr_27389_27408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (3))){
var inst_27380 = (state_27382[(2)]);
var state_27382__$1 = state_27382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27382__$1,inst_27380);
} else {
if((state_val_27383 === (2))){
var state_27382__$1 = state_27382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27382__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27383 === (11))){
var inst_27374 = (state_27382[(2)]);
var state_27382__$1 = (function (){var statearr_27390 = state_27382;
(statearr_27390[(8)] = inst_27374);

return statearr_27390;
})();
var statearr_27391_27409 = state_27382__$1;
(statearr_27391_27409[(2)] = null);

(statearr_27391_27409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (9))){
var inst_27368 = (state_27382[(9)]);
var inst_27366 = (state_27382[(10)]);
var inst_27370 = inst_27368.call(null,inst_27366);
var state_27382__$1 = state_27382;
var statearr_27392_27410 = state_27382__$1;
(statearr_27392_27410[(2)] = inst_27370);

(statearr_27392_27410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (5))){
var inst_27362 = (state_27382[(7)]);
var inst_27364 = figwheel.client.file_reloading.blocking_load.call(null,inst_27362);
var state_27382__$1 = state_27382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27382__$1,(8),inst_27364);
} else {
if((state_val_27383 === (10))){
var inst_27366 = (state_27382[(10)]);
var inst_27372 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27366);
var state_27382__$1 = state_27382;
var statearr_27393_27411 = state_27382__$1;
(statearr_27393_27411[(2)] = inst_27372);

(statearr_27393_27411[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (8))){
var inst_27368 = (state_27382[(9)]);
var inst_27362 = (state_27382[(7)]);
var inst_27366 = (state_27382[(2)]);
var inst_27367 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27368__$1 = cljs.core.get.call(null,inst_27367,inst_27362);
var state_27382__$1 = (function (){var statearr_27394 = state_27382;
(statearr_27394[(9)] = inst_27368__$1);

(statearr_27394[(10)] = inst_27366);

return statearr_27394;
})();
if(cljs.core.truth_(inst_27368__$1)){
var statearr_27395_27412 = state_27382__$1;
(statearr_27395_27412[(1)] = (9));

} else {
var statearr_27396_27413 = state_27382__$1;
(statearr_27396_27413[(1)] = (10));

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
});})(c__20626__auto__))
;
return ((function (switch__20514__auto__,c__20626__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20515__auto__ = null;
var figwheel$client$file_reloading$state_machine__20515__auto____0 = (function (){
var statearr_27400 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27400[(0)] = figwheel$client$file_reloading$state_machine__20515__auto__);

(statearr_27400[(1)] = (1));

return statearr_27400;
});
var figwheel$client$file_reloading$state_machine__20515__auto____1 = (function (state_27382){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_27382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e27401){if((e27401 instanceof Object)){
var ex__20518__auto__ = e27401;
var statearr_27402_27414 = state_27382;
(statearr_27402_27414[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27415 = state_27382;
state_27382 = G__27415;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20515__auto__ = function(state_27382){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20515__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20515__auto____1.call(this,state_27382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20515__auto____0;
figwheel$client$file_reloading$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20515__auto____1;
return figwheel$client$file_reloading$state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto__))
})();
var state__20628__auto__ = (function (){var statearr_27403 = f__20627__auto__.call(null);
(statearr_27403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto__);

return statearr_27403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto__))
);

return c__20626__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27416,callback){
var map__27419 = p__27416;
var map__27419__$1 = ((((!((map__27419 == null)))?((((map__27419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27419):map__27419);
var file_msg = map__27419__$1;
var namespace = cljs.core.get.call(null,map__27419__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27419,map__27419__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27419,map__27419__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27421){
var map__27424 = p__27421;
var map__27424__$1 = ((((!((map__27424 == null)))?((((map__27424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27424):map__27424);
var file_msg = map__27424__$1;
var namespace = cljs.core.get.call(null,map__27424__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27426,callback){
var map__27429 = p__27426;
var map__27429__$1 = ((((!((map__27429 == null)))?((((map__27429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27429):map__27429);
var file_msg = map__27429__$1;
var request_url = cljs.core.get.call(null,map__27429__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27429__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20626__auto___27517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto___27517,out){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto___27517,out){
return (function (state_27499){
var state_val_27500 = (state_27499[(1)]);
if((state_val_27500 === (1))){
var inst_27477 = cljs.core.nth.call(null,files,(0),null);
var inst_27478 = cljs.core.nthnext.call(null,files,(1));
var inst_27479 = files;
var state_27499__$1 = (function (){var statearr_27501 = state_27499;
(statearr_27501[(7)] = inst_27477);

(statearr_27501[(8)] = inst_27479);

(statearr_27501[(9)] = inst_27478);

return statearr_27501;
})();
var statearr_27502_27518 = state_27499__$1;
(statearr_27502_27518[(2)] = null);

(statearr_27502_27518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (2))){
var inst_27482 = (state_27499[(10)]);
var inst_27479 = (state_27499[(8)]);
var inst_27482__$1 = cljs.core.nth.call(null,inst_27479,(0),null);
var inst_27483 = cljs.core.nthnext.call(null,inst_27479,(1));
var inst_27484 = (inst_27482__$1 == null);
var inst_27485 = cljs.core.not.call(null,inst_27484);
var state_27499__$1 = (function (){var statearr_27503 = state_27499;
(statearr_27503[(10)] = inst_27482__$1);

(statearr_27503[(11)] = inst_27483);

return statearr_27503;
})();
if(inst_27485){
var statearr_27504_27519 = state_27499__$1;
(statearr_27504_27519[(1)] = (4));

} else {
var statearr_27505_27520 = state_27499__$1;
(statearr_27505_27520[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (3))){
var inst_27497 = (state_27499[(2)]);
var state_27499__$1 = state_27499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27499__$1,inst_27497);
} else {
if((state_val_27500 === (4))){
var inst_27482 = (state_27499[(10)]);
var inst_27487 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27482);
var state_27499__$1 = state_27499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27499__$1,(7),inst_27487);
} else {
if((state_val_27500 === (5))){
var inst_27493 = cljs.core.async.close_BANG_.call(null,out);
var state_27499__$1 = state_27499;
var statearr_27506_27521 = state_27499__$1;
(statearr_27506_27521[(2)] = inst_27493);

(statearr_27506_27521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (6))){
var inst_27495 = (state_27499[(2)]);
var state_27499__$1 = state_27499;
var statearr_27507_27522 = state_27499__$1;
(statearr_27507_27522[(2)] = inst_27495);

(statearr_27507_27522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (7))){
var inst_27483 = (state_27499[(11)]);
var inst_27489 = (state_27499[(2)]);
var inst_27490 = cljs.core.async.put_BANG_.call(null,out,inst_27489);
var inst_27479 = inst_27483;
var state_27499__$1 = (function (){var statearr_27508 = state_27499;
(statearr_27508[(12)] = inst_27490);

(statearr_27508[(8)] = inst_27479);

return statearr_27508;
})();
var statearr_27509_27523 = state_27499__$1;
(statearr_27509_27523[(2)] = null);

(statearr_27509_27523[(1)] = (2));


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
});})(c__20626__auto___27517,out))
;
return ((function (switch__20514__auto__,c__20626__auto___27517,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20515__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20515__auto____0 = (function (){
var statearr_27513 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27513[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20515__auto__);

(statearr_27513[(1)] = (1));

return statearr_27513;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20515__auto____1 = (function (state_27499){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_27499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e27514){if((e27514 instanceof Object)){
var ex__20518__auto__ = e27514;
var statearr_27515_27524 = state_27499;
(statearr_27515_27524[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27525 = state_27499;
state_27499 = G__27525;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20515__auto__ = function(state_27499){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20515__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20515__auto____1.call(this,state_27499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20515__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20515__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto___27517,out))
})();
var state__20628__auto__ = (function (){var statearr_27516 = f__20627__auto__.call(null);
(statearr_27516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto___27517);

return statearr_27516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto___27517,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27526,opts){
var map__27530 = p__27526;
var map__27530__$1 = ((((!((map__27530 == null)))?((((map__27530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27530):map__27530);
var eval_body__$1 = cljs.core.get.call(null,map__27530__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27530__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27532){var e = e27532;
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
return (function (p1__27533_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27533_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27538){
var vec__27539 = p__27538;
var k = cljs.core.nth.call(null,vec__27539,(0),null);
var v = cljs.core.nth.call(null,vec__27539,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27540){
var vec__27541 = p__27540;
var k = cljs.core.nth.call(null,vec__27541,(0),null);
var v = cljs.core.nth.call(null,vec__27541,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27545,p__27546){
var map__27793 = p__27545;
var map__27793__$1 = ((((!((map__27793 == null)))?((((map__27793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27793):map__27793);
var opts = map__27793__$1;
var before_jsload = cljs.core.get.call(null,map__27793__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27793__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27793__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27794 = p__27546;
var map__27794__$1 = ((((!((map__27794 == null)))?((((map__27794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27794):map__27794);
var msg = map__27794__$1;
var files = cljs.core.get.call(null,map__27794__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27794__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27794__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20626__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27947){
var state_val_27948 = (state_27947[(1)]);
if((state_val_27948 === (7))){
var inst_27811 = (state_27947[(7)]);
var inst_27810 = (state_27947[(8)]);
var inst_27809 = (state_27947[(9)]);
var inst_27808 = (state_27947[(10)]);
var inst_27816 = cljs.core._nth.call(null,inst_27809,inst_27811);
var inst_27817 = figwheel.client.file_reloading.eval_body.call(null,inst_27816,opts);
var inst_27818 = (inst_27811 + (1));
var tmp27949 = inst_27810;
var tmp27950 = inst_27809;
var tmp27951 = inst_27808;
var inst_27808__$1 = tmp27951;
var inst_27809__$1 = tmp27950;
var inst_27810__$1 = tmp27949;
var inst_27811__$1 = inst_27818;
var state_27947__$1 = (function (){var statearr_27952 = state_27947;
(statearr_27952[(7)] = inst_27811__$1);

(statearr_27952[(11)] = inst_27817);

(statearr_27952[(8)] = inst_27810__$1);

(statearr_27952[(9)] = inst_27809__$1);

(statearr_27952[(10)] = inst_27808__$1);

return statearr_27952;
})();
var statearr_27953_28039 = state_27947__$1;
(statearr_27953_28039[(2)] = null);

(statearr_27953_28039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (20))){
var inst_27851 = (state_27947[(12)]);
var inst_27859 = figwheel.client.file_reloading.sort_files.call(null,inst_27851);
var state_27947__$1 = state_27947;
var statearr_27954_28040 = state_27947__$1;
(statearr_27954_28040[(2)] = inst_27859);

(statearr_27954_28040[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (27))){
var state_27947__$1 = state_27947;
var statearr_27955_28041 = state_27947__$1;
(statearr_27955_28041[(2)] = null);

(statearr_27955_28041[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (1))){
var inst_27800 = (state_27947[(13)]);
var inst_27797 = before_jsload.call(null,files);
var inst_27798 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27799 = (function (){return ((function (inst_27800,inst_27797,inst_27798,state_val_27948,c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27542_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27542_SHARP_);
});
;})(inst_27800,inst_27797,inst_27798,state_val_27948,c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27800__$1 = cljs.core.filter.call(null,inst_27799,files);
var inst_27801 = cljs.core.not_empty.call(null,inst_27800__$1);
var state_27947__$1 = (function (){var statearr_27956 = state_27947;
(statearr_27956[(13)] = inst_27800__$1);

(statearr_27956[(14)] = inst_27797);

(statearr_27956[(15)] = inst_27798);

return statearr_27956;
})();
if(cljs.core.truth_(inst_27801)){
var statearr_27957_28042 = state_27947__$1;
(statearr_27957_28042[(1)] = (2));

} else {
var statearr_27958_28043 = state_27947__$1;
(statearr_27958_28043[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (24))){
var state_27947__$1 = state_27947;
var statearr_27959_28044 = state_27947__$1;
(statearr_27959_28044[(2)] = null);

(statearr_27959_28044[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (39))){
var inst_27901 = (state_27947[(16)]);
var state_27947__$1 = state_27947;
var statearr_27960_28045 = state_27947__$1;
(statearr_27960_28045[(2)] = inst_27901);

(statearr_27960_28045[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (46))){
var inst_27942 = (state_27947[(2)]);
var state_27947__$1 = state_27947;
var statearr_27961_28046 = state_27947__$1;
(statearr_27961_28046[(2)] = inst_27942);

(statearr_27961_28046[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (4))){
var inst_27845 = (state_27947[(2)]);
var inst_27846 = cljs.core.List.EMPTY;
var inst_27847 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27846);
var inst_27848 = (function (){return ((function (inst_27845,inst_27846,inst_27847,state_val_27948,c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27543_SHARP_){
var and__18447__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27543_SHARP_);
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27543_SHARP_));
} else {
return and__18447__auto__;
}
});
;})(inst_27845,inst_27846,inst_27847,state_val_27948,c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27849 = cljs.core.filter.call(null,inst_27848,files);
var inst_27850 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27851 = cljs.core.concat.call(null,inst_27849,inst_27850);
var state_27947__$1 = (function (){var statearr_27962 = state_27947;
(statearr_27962[(12)] = inst_27851);

(statearr_27962[(17)] = inst_27847);

(statearr_27962[(18)] = inst_27845);

return statearr_27962;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27963_28047 = state_27947__$1;
(statearr_27963_28047[(1)] = (16));

} else {
var statearr_27964_28048 = state_27947__$1;
(statearr_27964_28048[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (15))){
var inst_27835 = (state_27947[(2)]);
var state_27947__$1 = state_27947;
var statearr_27965_28049 = state_27947__$1;
(statearr_27965_28049[(2)] = inst_27835);

(statearr_27965_28049[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (21))){
var inst_27861 = (state_27947[(19)]);
var inst_27861__$1 = (state_27947[(2)]);
var inst_27862 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27861__$1);
var state_27947__$1 = (function (){var statearr_27966 = state_27947;
(statearr_27966[(19)] = inst_27861__$1);

return statearr_27966;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27947__$1,(22),inst_27862);
} else {
if((state_val_27948 === (31))){
var inst_27945 = (state_27947[(2)]);
var state_27947__$1 = state_27947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27947__$1,inst_27945);
} else {
if((state_val_27948 === (32))){
var inst_27901 = (state_27947[(16)]);
var inst_27906 = inst_27901.cljs$lang$protocol_mask$partition0$;
var inst_27907 = (inst_27906 & (64));
var inst_27908 = inst_27901.cljs$core$ISeq$;
var inst_27909 = (inst_27907) || (inst_27908);
var state_27947__$1 = state_27947;
if(cljs.core.truth_(inst_27909)){
var statearr_27967_28050 = state_27947__$1;
(statearr_27967_28050[(1)] = (35));

} else {
var statearr_27968_28051 = state_27947__$1;
(statearr_27968_28051[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (40))){
var inst_27922 = (state_27947[(20)]);
var inst_27921 = (state_27947[(2)]);
var inst_27922__$1 = cljs.core.get.call(null,inst_27921,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27923 = cljs.core.get.call(null,inst_27921,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27924 = cljs.core.not_empty.call(null,inst_27922__$1);
var state_27947__$1 = (function (){var statearr_27969 = state_27947;
(statearr_27969[(20)] = inst_27922__$1);

(statearr_27969[(21)] = inst_27923);

return statearr_27969;
})();
if(cljs.core.truth_(inst_27924)){
var statearr_27970_28052 = state_27947__$1;
(statearr_27970_28052[(1)] = (41));

} else {
var statearr_27971_28053 = state_27947__$1;
(statearr_27971_28053[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (33))){
var state_27947__$1 = state_27947;
var statearr_27972_28054 = state_27947__$1;
(statearr_27972_28054[(2)] = false);

(statearr_27972_28054[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (13))){
var inst_27821 = (state_27947[(22)]);
var inst_27825 = cljs.core.chunk_first.call(null,inst_27821);
var inst_27826 = cljs.core.chunk_rest.call(null,inst_27821);
var inst_27827 = cljs.core.count.call(null,inst_27825);
var inst_27808 = inst_27826;
var inst_27809 = inst_27825;
var inst_27810 = inst_27827;
var inst_27811 = (0);
var state_27947__$1 = (function (){var statearr_27973 = state_27947;
(statearr_27973[(7)] = inst_27811);

(statearr_27973[(8)] = inst_27810);

(statearr_27973[(9)] = inst_27809);

(statearr_27973[(10)] = inst_27808);

return statearr_27973;
})();
var statearr_27974_28055 = state_27947__$1;
(statearr_27974_28055[(2)] = null);

(statearr_27974_28055[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (22))){
var inst_27864 = (state_27947[(23)]);
var inst_27869 = (state_27947[(24)]);
var inst_27865 = (state_27947[(25)]);
var inst_27861 = (state_27947[(19)]);
var inst_27864__$1 = (state_27947[(2)]);
var inst_27865__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27864__$1);
var inst_27866 = (function (){var all_files = inst_27861;
var res_SINGLEQUOTE_ = inst_27864__$1;
var res = inst_27865__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27864,inst_27869,inst_27865,inst_27861,inst_27864__$1,inst_27865__$1,state_val_27948,c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27544_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27544_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27864,inst_27869,inst_27865,inst_27861,inst_27864__$1,inst_27865__$1,state_val_27948,c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27867 = cljs.core.filter.call(null,inst_27866,inst_27864__$1);
var inst_27868 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27869__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27868);
var inst_27870 = cljs.core.not_empty.call(null,inst_27869__$1);
var state_27947__$1 = (function (){var statearr_27975 = state_27947;
(statearr_27975[(26)] = inst_27867);

(statearr_27975[(23)] = inst_27864__$1);

(statearr_27975[(24)] = inst_27869__$1);

(statearr_27975[(25)] = inst_27865__$1);

return statearr_27975;
})();
if(cljs.core.truth_(inst_27870)){
var statearr_27976_28056 = state_27947__$1;
(statearr_27976_28056[(1)] = (23));

} else {
var statearr_27977_28057 = state_27947__$1;
(statearr_27977_28057[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (36))){
var state_27947__$1 = state_27947;
var statearr_27978_28058 = state_27947__$1;
(statearr_27978_28058[(2)] = false);

(statearr_27978_28058[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (41))){
var inst_27922 = (state_27947[(20)]);
var inst_27926 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27927 = cljs.core.map.call(null,inst_27926,inst_27922);
var inst_27928 = cljs.core.pr_str.call(null,inst_27927);
var inst_27929 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27928)].join('');
var inst_27930 = figwheel.client.utils.log.call(null,inst_27929);
var state_27947__$1 = state_27947;
var statearr_27979_28059 = state_27947__$1;
(statearr_27979_28059[(2)] = inst_27930);

(statearr_27979_28059[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (43))){
var inst_27923 = (state_27947[(21)]);
var inst_27933 = (state_27947[(2)]);
var inst_27934 = cljs.core.not_empty.call(null,inst_27923);
var state_27947__$1 = (function (){var statearr_27980 = state_27947;
(statearr_27980[(27)] = inst_27933);

return statearr_27980;
})();
if(cljs.core.truth_(inst_27934)){
var statearr_27981_28060 = state_27947__$1;
(statearr_27981_28060[(1)] = (44));

} else {
var statearr_27982_28061 = state_27947__$1;
(statearr_27982_28061[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (29))){
var inst_27867 = (state_27947[(26)]);
var inst_27864 = (state_27947[(23)]);
var inst_27869 = (state_27947[(24)]);
var inst_27901 = (state_27947[(16)]);
var inst_27865 = (state_27947[(25)]);
var inst_27861 = (state_27947[(19)]);
var inst_27897 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27900 = (function (){var all_files = inst_27861;
var res_SINGLEQUOTE_ = inst_27864;
var res = inst_27865;
var files_not_loaded = inst_27867;
var dependencies_that_loaded = inst_27869;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27867,inst_27864,inst_27869,inst_27901,inst_27865,inst_27861,inst_27897,state_val_27948,c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27899){
var map__27983 = p__27899;
var map__27983__$1 = ((((!((map__27983 == null)))?((((map__27983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27983):map__27983);
var namespace = cljs.core.get.call(null,map__27983__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27867,inst_27864,inst_27869,inst_27901,inst_27865,inst_27861,inst_27897,state_val_27948,c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27901__$1 = cljs.core.group_by.call(null,inst_27900,inst_27867);
var inst_27903 = (inst_27901__$1 == null);
var inst_27904 = cljs.core.not.call(null,inst_27903);
var state_27947__$1 = (function (){var statearr_27985 = state_27947;
(statearr_27985[(16)] = inst_27901__$1);

(statearr_27985[(28)] = inst_27897);

return statearr_27985;
})();
if(inst_27904){
var statearr_27986_28062 = state_27947__$1;
(statearr_27986_28062[(1)] = (32));

} else {
var statearr_27987_28063 = state_27947__$1;
(statearr_27987_28063[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (44))){
var inst_27923 = (state_27947[(21)]);
var inst_27936 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27923);
var inst_27937 = cljs.core.pr_str.call(null,inst_27936);
var inst_27938 = [cljs.core.str("not required: "),cljs.core.str(inst_27937)].join('');
var inst_27939 = figwheel.client.utils.log.call(null,inst_27938);
var state_27947__$1 = state_27947;
var statearr_27988_28064 = state_27947__$1;
(statearr_27988_28064[(2)] = inst_27939);

(statearr_27988_28064[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (6))){
var inst_27842 = (state_27947[(2)]);
var state_27947__$1 = state_27947;
var statearr_27989_28065 = state_27947__$1;
(statearr_27989_28065[(2)] = inst_27842);

(statearr_27989_28065[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (28))){
var inst_27867 = (state_27947[(26)]);
var inst_27894 = (state_27947[(2)]);
var inst_27895 = cljs.core.not_empty.call(null,inst_27867);
var state_27947__$1 = (function (){var statearr_27990 = state_27947;
(statearr_27990[(29)] = inst_27894);

return statearr_27990;
})();
if(cljs.core.truth_(inst_27895)){
var statearr_27991_28066 = state_27947__$1;
(statearr_27991_28066[(1)] = (29));

} else {
var statearr_27992_28067 = state_27947__$1;
(statearr_27992_28067[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (25))){
var inst_27865 = (state_27947[(25)]);
var inst_27881 = (state_27947[(2)]);
var inst_27882 = cljs.core.not_empty.call(null,inst_27865);
var state_27947__$1 = (function (){var statearr_27993 = state_27947;
(statearr_27993[(30)] = inst_27881);

return statearr_27993;
})();
if(cljs.core.truth_(inst_27882)){
var statearr_27994_28068 = state_27947__$1;
(statearr_27994_28068[(1)] = (26));

} else {
var statearr_27995_28069 = state_27947__$1;
(statearr_27995_28069[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (34))){
var inst_27916 = (state_27947[(2)]);
var state_27947__$1 = state_27947;
if(cljs.core.truth_(inst_27916)){
var statearr_27996_28070 = state_27947__$1;
(statearr_27996_28070[(1)] = (38));

} else {
var statearr_27997_28071 = state_27947__$1;
(statearr_27997_28071[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (17))){
var state_27947__$1 = state_27947;
var statearr_27998_28072 = state_27947__$1;
(statearr_27998_28072[(2)] = recompile_dependents);

(statearr_27998_28072[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (3))){
var state_27947__$1 = state_27947;
var statearr_27999_28073 = state_27947__$1;
(statearr_27999_28073[(2)] = null);

(statearr_27999_28073[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (12))){
var inst_27838 = (state_27947[(2)]);
var state_27947__$1 = state_27947;
var statearr_28000_28074 = state_27947__$1;
(statearr_28000_28074[(2)] = inst_27838);

(statearr_28000_28074[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (2))){
var inst_27800 = (state_27947[(13)]);
var inst_27807 = cljs.core.seq.call(null,inst_27800);
var inst_27808 = inst_27807;
var inst_27809 = null;
var inst_27810 = (0);
var inst_27811 = (0);
var state_27947__$1 = (function (){var statearr_28001 = state_27947;
(statearr_28001[(7)] = inst_27811);

(statearr_28001[(8)] = inst_27810);

(statearr_28001[(9)] = inst_27809);

(statearr_28001[(10)] = inst_27808);

return statearr_28001;
})();
var statearr_28002_28075 = state_27947__$1;
(statearr_28002_28075[(2)] = null);

(statearr_28002_28075[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (23))){
var inst_27867 = (state_27947[(26)]);
var inst_27864 = (state_27947[(23)]);
var inst_27869 = (state_27947[(24)]);
var inst_27865 = (state_27947[(25)]);
var inst_27861 = (state_27947[(19)]);
var inst_27872 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27874 = (function (){var all_files = inst_27861;
var res_SINGLEQUOTE_ = inst_27864;
var res = inst_27865;
var files_not_loaded = inst_27867;
var dependencies_that_loaded = inst_27869;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27867,inst_27864,inst_27869,inst_27865,inst_27861,inst_27872,state_val_27948,c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27873){
var map__28003 = p__27873;
var map__28003__$1 = ((((!((map__28003 == null)))?((((map__28003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28003):map__28003);
var request_url = cljs.core.get.call(null,map__28003__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27867,inst_27864,inst_27869,inst_27865,inst_27861,inst_27872,state_val_27948,c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27875 = cljs.core.reverse.call(null,inst_27869);
var inst_27876 = cljs.core.map.call(null,inst_27874,inst_27875);
var inst_27877 = cljs.core.pr_str.call(null,inst_27876);
var inst_27878 = figwheel.client.utils.log.call(null,inst_27877);
var state_27947__$1 = (function (){var statearr_28005 = state_27947;
(statearr_28005[(31)] = inst_27872);

return statearr_28005;
})();
var statearr_28006_28076 = state_27947__$1;
(statearr_28006_28076[(2)] = inst_27878);

(statearr_28006_28076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (35))){
var state_27947__$1 = state_27947;
var statearr_28007_28077 = state_27947__$1;
(statearr_28007_28077[(2)] = true);

(statearr_28007_28077[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (19))){
var inst_27851 = (state_27947[(12)]);
var inst_27857 = figwheel.client.file_reloading.expand_files.call(null,inst_27851);
var state_27947__$1 = state_27947;
var statearr_28008_28078 = state_27947__$1;
(statearr_28008_28078[(2)] = inst_27857);

(statearr_28008_28078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (11))){
var state_27947__$1 = state_27947;
var statearr_28009_28079 = state_27947__$1;
(statearr_28009_28079[(2)] = null);

(statearr_28009_28079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (9))){
var inst_27840 = (state_27947[(2)]);
var state_27947__$1 = state_27947;
var statearr_28010_28080 = state_27947__$1;
(statearr_28010_28080[(2)] = inst_27840);

(statearr_28010_28080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (5))){
var inst_27811 = (state_27947[(7)]);
var inst_27810 = (state_27947[(8)]);
var inst_27813 = (inst_27811 < inst_27810);
var inst_27814 = inst_27813;
var state_27947__$1 = state_27947;
if(cljs.core.truth_(inst_27814)){
var statearr_28011_28081 = state_27947__$1;
(statearr_28011_28081[(1)] = (7));

} else {
var statearr_28012_28082 = state_27947__$1;
(statearr_28012_28082[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (14))){
var inst_27821 = (state_27947[(22)]);
var inst_27830 = cljs.core.first.call(null,inst_27821);
var inst_27831 = figwheel.client.file_reloading.eval_body.call(null,inst_27830,opts);
var inst_27832 = cljs.core.next.call(null,inst_27821);
var inst_27808 = inst_27832;
var inst_27809 = null;
var inst_27810 = (0);
var inst_27811 = (0);
var state_27947__$1 = (function (){var statearr_28013 = state_27947;
(statearr_28013[(7)] = inst_27811);

(statearr_28013[(8)] = inst_27810);

(statearr_28013[(32)] = inst_27831);

(statearr_28013[(9)] = inst_27809);

(statearr_28013[(10)] = inst_27808);

return statearr_28013;
})();
var statearr_28014_28083 = state_27947__$1;
(statearr_28014_28083[(2)] = null);

(statearr_28014_28083[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (45))){
var state_27947__$1 = state_27947;
var statearr_28015_28084 = state_27947__$1;
(statearr_28015_28084[(2)] = null);

(statearr_28015_28084[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (26))){
var inst_27867 = (state_27947[(26)]);
var inst_27864 = (state_27947[(23)]);
var inst_27869 = (state_27947[(24)]);
var inst_27865 = (state_27947[(25)]);
var inst_27861 = (state_27947[(19)]);
var inst_27884 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27886 = (function (){var all_files = inst_27861;
var res_SINGLEQUOTE_ = inst_27864;
var res = inst_27865;
var files_not_loaded = inst_27867;
var dependencies_that_loaded = inst_27869;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27867,inst_27864,inst_27869,inst_27865,inst_27861,inst_27884,state_val_27948,c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27885){
var map__28016 = p__27885;
var map__28016__$1 = ((((!((map__28016 == null)))?((((map__28016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28016):map__28016);
var namespace = cljs.core.get.call(null,map__28016__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28016__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27867,inst_27864,inst_27869,inst_27865,inst_27861,inst_27884,state_val_27948,c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27887 = cljs.core.map.call(null,inst_27886,inst_27865);
var inst_27888 = cljs.core.pr_str.call(null,inst_27887);
var inst_27889 = figwheel.client.utils.log.call(null,inst_27888);
var inst_27890 = (function (){var all_files = inst_27861;
var res_SINGLEQUOTE_ = inst_27864;
var res = inst_27865;
var files_not_loaded = inst_27867;
var dependencies_that_loaded = inst_27869;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27867,inst_27864,inst_27869,inst_27865,inst_27861,inst_27884,inst_27886,inst_27887,inst_27888,inst_27889,state_val_27948,c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27867,inst_27864,inst_27869,inst_27865,inst_27861,inst_27884,inst_27886,inst_27887,inst_27888,inst_27889,state_val_27948,c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27891 = setTimeout(inst_27890,(10));
var state_27947__$1 = (function (){var statearr_28018 = state_27947;
(statearr_28018[(33)] = inst_27889);

(statearr_28018[(34)] = inst_27884);

return statearr_28018;
})();
var statearr_28019_28085 = state_27947__$1;
(statearr_28019_28085[(2)] = inst_27891);

(statearr_28019_28085[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (16))){
var state_27947__$1 = state_27947;
var statearr_28020_28086 = state_27947__$1;
(statearr_28020_28086[(2)] = reload_dependents);

(statearr_28020_28086[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (38))){
var inst_27901 = (state_27947[(16)]);
var inst_27918 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27901);
var state_27947__$1 = state_27947;
var statearr_28021_28087 = state_27947__$1;
(statearr_28021_28087[(2)] = inst_27918);

(statearr_28021_28087[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (30))){
var state_27947__$1 = state_27947;
var statearr_28022_28088 = state_27947__$1;
(statearr_28022_28088[(2)] = null);

(statearr_28022_28088[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (10))){
var inst_27821 = (state_27947[(22)]);
var inst_27823 = cljs.core.chunked_seq_QMARK_.call(null,inst_27821);
var state_27947__$1 = state_27947;
if(inst_27823){
var statearr_28023_28089 = state_27947__$1;
(statearr_28023_28089[(1)] = (13));

} else {
var statearr_28024_28090 = state_27947__$1;
(statearr_28024_28090[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (18))){
var inst_27855 = (state_27947[(2)]);
var state_27947__$1 = state_27947;
if(cljs.core.truth_(inst_27855)){
var statearr_28025_28091 = state_27947__$1;
(statearr_28025_28091[(1)] = (19));

} else {
var statearr_28026_28092 = state_27947__$1;
(statearr_28026_28092[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (42))){
var state_27947__$1 = state_27947;
var statearr_28027_28093 = state_27947__$1;
(statearr_28027_28093[(2)] = null);

(statearr_28027_28093[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (37))){
var inst_27913 = (state_27947[(2)]);
var state_27947__$1 = state_27947;
var statearr_28028_28094 = state_27947__$1;
(statearr_28028_28094[(2)] = inst_27913);

(statearr_28028_28094[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (8))){
var inst_27821 = (state_27947[(22)]);
var inst_27808 = (state_27947[(10)]);
var inst_27821__$1 = cljs.core.seq.call(null,inst_27808);
var state_27947__$1 = (function (){var statearr_28029 = state_27947;
(statearr_28029[(22)] = inst_27821__$1);

return statearr_28029;
})();
if(inst_27821__$1){
var statearr_28030_28095 = state_27947__$1;
(statearr_28030_28095[(1)] = (10));

} else {
var statearr_28031_28096 = state_27947__$1;
(statearr_28031_28096[(1)] = (11));

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
});})(c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20514__auto__,c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20515__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20515__auto____0 = (function (){
var statearr_28035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28035[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20515__auto__);

(statearr_28035[(1)] = (1));

return statearr_28035;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20515__auto____1 = (function (state_27947){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_27947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e28036){if((e28036 instanceof Object)){
var ex__20518__auto__ = e28036;
var statearr_28037_28097 = state_27947;
(statearr_28037_28097[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28098 = state_27947;
state_27947 = G__28098;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20515__auto__ = function(state_27947){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20515__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20515__auto____1.call(this,state_27947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20515__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20515__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20628__auto__ = (function (){var statearr_28038 = f__20627__auto__.call(null);
(statearr_28038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto__);

return statearr_28038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto__,map__27793,map__27793__$1,opts,before_jsload,on_jsload,reload_dependents,map__27794,map__27794__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20626__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28101,link){
var map__28104 = p__28101;
var map__28104__$1 = ((((!((map__28104 == null)))?((((map__28104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28104):map__28104);
var file = cljs.core.get.call(null,map__28104__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28104,map__28104__$1,file){
return (function (p1__28099_SHARP_,p2__28100_SHARP_){
if(cljs.core._EQ_.call(null,p1__28099_SHARP_,p2__28100_SHARP_)){
return p1__28099_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28104,map__28104__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28110){
var map__28111 = p__28110;
var map__28111__$1 = ((((!((map__28111 == null)))?((((map__28111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28111):map__28111);
var match_length = cljs.core.get.call(null,map__28111__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28111__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28106_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28106_SHARP_);
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
var args28113 = [];
var len__19529__auto___28116 = arguments.length;
var i__19530__auto___28117 = (0);
while(true){
if((i__19530__auto___28117 < len__19529__auto___28116)){
args28113.push((arguments[i__19530__auto___28117]));

var G__28118 = (i__19530__auto___28117 + (1));
i__19530__auto___28117 = G__28118;
continue;
} else {
}
break;
}

var G__28115 = args28113.length;
switch (G__28115) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28113.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28120_SHARP_,p2__28121_SHARP_){
return cljs.core.assoc.call(null,p1__28120_SHARP_,cljs.core.get.call(null,p2__28121_SHARP_,key),p2__28121_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28122){
var map__28125 = p__28122;
var map__28125__$1 = ((((!((map__28125 == null)))?((((map__28125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28125):map__28125);
var f_data = map__28125__$1;
var file = cljs.core.get.call(null,map__28125__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28127,files_msg){
var map__28134 = p__28127;
var map__28134__$1 = ((((!((map__28134 == null)))?((((map__28134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28134):map__28134);
var opts = map__28134__$1;
var on_cssload = cljs.core.get.call(null,map__28134__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28136_28140 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28137_28141 = null;
var count__28138_28142 = (0);
var i__28139_28143 = (0);
while(true){
if((i__28139_28143 < count__28138_28142)){
var f_28144 = cljs.core._nth.call(null,chunk__28137_28141,i__28139_28143);
figwheel.client.file_reloading.reload_css_file.call(null,f_28144);

var G__28145 = seq__28136_28140;
var G__28146 = chunk__28137_28141;
var G__28147 = count__28138_28142;
var G__28148 = (i__28139_28143 + (1));
seq__28136_28140 = G__28145;
chunk__28137_28141 = G__28146;
count__28138_28142 = G__28147;
i__28139_28143 = G__28148;
continue;
} else {
var temp__4657__auto___28149 = cljs.core.seq.call(null,seq__28136_28140);
if(temp__4657__auto___28149){
var seq__28136_28150__$1 = temp__4657__auto___28149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28136_28150__$1)){
var c__19270__auto___28151 = cljs.core.chunk_first.call(null,seq__28136_28150__$1);
var G__28152 = cljs.core.chunk_rest.call(null,seq__28136_28150__$1);
var G__28153 = c__19270__auto___28151;
var G__28154 = cljs.core.count.call(null,c__19270__auto___28151);
var G__28155 = (0);
seq__28136_28140 = G__28152;
chunk__28137_28141 = G__28153;
count__28138_28142 = G__28154;
i__28139_28143 = G__28155;
continue;
} else {
var f_28156 = cljs.core.first.call(null,seq__28136_28150__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28156);

var G__28157 = cljs.core.next.call(null,seq__28136_28150__$1);
var G__28158 = null;
var G__28159 = (0);
var G__28160 = (0);
seq__28136_28140 = G__28157;
chunk__28137_28141 = G__28158;
count__28138_28142 = G__28159;
i__28139_28143 = G__28160;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28134,map__28134__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28134,map__28134__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1470497437384