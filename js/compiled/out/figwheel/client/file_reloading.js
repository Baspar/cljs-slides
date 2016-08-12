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
var or__18460__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18460__auto__){
return or__18460__auto__;
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
var or__18460__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29222_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29222_SHARP_));
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
var seq__29227 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29228 = null;
var count__29229 = (0);
var i__29230 = (0);
while(true){
if((i__29230 < count__29229)){
var n = cljs.core._nth.call(null,chunk__29228,i__29230);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29231 = seq__29227;
var G__29232 = chunk__29228;
var G__29233 = count__29229;
var G__29234 = (i__29230 + (1));
seq__29227 = G__29231;
chunk__29228 = G__29232;
count__29229 = G__29233;
i__29230 = G__29234;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29227);
if(temp__4657__auto__){
var seq__29227__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29227__$1)){
var c__19271__auto__ = cljs.core.chunk_first.call(null,seq__29227__$1);
var G__29235 = cljs.core.chunk_rest.call(null,seq__29227__$1);
var G__29236 = c__19271__auto__;
var G__29237 = cljs.core.count.call(null,c__19271__auto__);
var G__29238 = (0);
seq__29227 = G__29235;
chunk__29228 = G__29236;
count__29229 = G__29237;
i__29230 = G__29238;
continue;
} else {
var n = cljs.core.first.call(null,seq__29227__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29239 = cljs.core.next.call(null,seq__29227__$1);
var G__29240 = null;
var G__29241 = (0);
var G__29242 = (0);
seq__29227 = G__29239;
chunk__29228 = G__29240;
count__29229 = G__29241;
i__29230 = G__29242;
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

var seq__29281_29288 = cljs.core.seq.call(null,deps);
var chunk__29282_29289 = null;
var count__29283_29290 = (0);
var i__29284_29291 = (0);
while(true){
if((i__29284_29291 < count__29283_29290)){
var dep_29292 = cljs.core._nth.call(null,chunk__29282_29289,i__29284_29291);
topo_sort_helper_STAR_.call(null,dep_29292,(depth + (1)),state);

var G__29293 = seq__29281_29288;
var G__29294 = chunk__29282_29289;
var G__29295 = count__29283_29290;
var G__29296 = (i__29284_29291 + (1));
seq__29281_29288 = G__29293;
chunk__29282_29289 = G__29294;
count__29283_29290 = G__29295;
i__29284_29291 = G__29296;
continue;
} else {
var temp__4657__auto___29297 = cljs.core.seq.call(null,seq__29281_29288);
if(temp__4657__auto___29297){
var seq__29281_29298__$1 = temp__4657__auto___29297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29281_29298__$1)){
var c__19271__auto___29299 = cljs.core.chunk_first.call(null,seq__29281_29298__$1);
var G__29300 = cljs.core.chunk_rest.call(null,seq__29281_29298__$1);
var G__29301 = c__19271__auto___29299;
var G__29302 = cljs.core.count.call(null,c__19271__auto___29299);
var G__29303 = (0);
seq__29281_29288 = G__29300;
chunk__29282_29289 = G__29301;
count__29283_29290 = G__29302;
i__29284_29291 = G__29303;
continue;
} else {
var dep_29304 = cljs.core.first.call(null,seq__29281_29298__$1);
topo_sort_helper_STAR_.call(null,dep_29304,(depth + (1)),state);

var G__29305 = cljs.core.next.call(null,seq__29281_29298__$1);
var G__29306 = null;
var G__29307 = (0);
var G__29308 = (0);
seq__29281_29288 = G__29305;
chunk__29282_29289 = G__29306;
count__29283_29290 = G__29307;
i__29284_29291 = G__29308;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29285){
var vec__29287 = p__29285;
var x = cljs.core.nth.call(null,vec__29287,(0),null);
var xs = cljs.core.nthnext.call(null,vec__29287,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29287,x,xs,get_deps__$1){
return (function (p1__29243_SHARP_){
return clojure.set.difference.call(null,p1__29243_SHARP_,x);
});})(vec__29287,x,xs,get_deps__$1))
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
var seq__29321 = cljs.core.seq.call(null,provides);
var chunk__29322 = null;
var count__29323 = (0);
var i__29324 = (0);
while(true){
if((i__29324 < count__29323)){
var prov = cljs.core._nth.call(null,chunk__29322,i__29324);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29325_29333 = cljs.core.seq.call(null,requires);
var chunk__29326_29334 = null;
var count__29327_29335 = (0);
var i__29328_29336 = (0);
while(true){
if((i__29328_29336 < count__29327_29335)){
var req_29337 = cljs.core._nth.call(null,chunk__29326_29334,i__29328_29336);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29337,prov);

var G__29338 = seq__29325_29333;
var G__29339 = chunk__29326_29334;
var G__29340 = count__29327_29335;
var G__29341 = (i__29328_29336 + (1));
seq__29325_29333 = G__29338;
chunk__29326_29334 = G__29339;
count__29327_29335 = G__29340;
i__29328_29336 = G__29341;
continue;
} else {
var temp__4657__auto___29342 = cljs.core.seq.call(null,seq__29325_29333);
if(temp__4657__auto___29342){
var seq__29325_29343__$1 = temp__4657__auto___29342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29325_29343__$1)){
var c__19271__auto___29344 = cljs.core.chunk_first.call(null,seq__29325_29343__$1);
var G__29345 = cljs.core.chunk_rest.call(null,seq__29325_29343__$1);
var G__29346 = c__19271__auto___29344;
var G__29347 = cljs.core.count.call(null,c__19271__auto___29344);
var G__29348 = (0);
seq__29325_29333 = G__29345;
chunk__29326_29334 = G__29346;
count__29327_29335 = G__29347;
i__29328_29336 = G__29348;
continue;
} else {
var req_29349 = cljs.core.first.call(null,seq__29325_29343__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29349,prov);

var G__29350 = cljs.core.next.call(null,seq__29325_29343__$1);
var G__29351 = null;
var G__29352 = (0);
var G__29353 = (0);
seq__29325_29333 = G__29350;
chunk__29326_29334 = G__29351;
count__29327_29335 = G__29352;
i__29328_29336 = G__29353;
continue;
}
} else {
}
}
break;
}

var G__29354 = seq__29321;
var G__29355 = chunk__29322;
var G__29356 = count__29323;
var G__29357 = (i__29324 + (1));
seq__29321 = G__29354;
chunk__29322 = G__29355;
count__29323 = G__29356;
i__29324 = G__29357;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29321);
if(temp__4657__auto__){
var seq__29321__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29321__$1)){
var c__19271__auto__ = cljs.core.chunk_first.call(null,seq__29321__$1);
var G__29358 = cljs.core.chunk_rest.call(null,seq__29321__$1);
var G__29359 = c__19271__auto__;
var G__29360 = cljs.core.count.call(null,c__19271__auto__);
var G__29361 = (0);
seq__29321 = G__29358;
chunk__29322 = G__29359;
count__29323 = G__29360;
i__29324 = G__29361;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29321__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29329_29362 = cljs.core.seq.call(null,requires);
var chunk__29330_29363 = null;
var count__29331_29364 = (0);
var i__29332_29365 = (0);
while(true){
if((i__29332_29365 < count__29331_29364)){
var req_29366 = cljs.core._nth.call(null,chunk__29330_29363,i__29332_29365);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29366,prov);

var G__29367 = seq__29329_29362;
var G__29368 = chunk__29330_29363;
var G__29369 = count__29331_29364;
var G__29370 = (i__29332_29365 + (1));
seq__29329_29362 = G__29367;
chunk__29330_29363 = G__29368;
count__29331_29364 = G__29369;
i__29332_29365 = G__29370;
continue;
} else {
var temp__4657__auto___29371__$1 = cljs.core.seq.call(null,seq__29329_29362);
if(temp__4657__auto___29371__$1){
var seq__29329_29372__$1 = temp__4657__auto___29371__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29329_29372__$1)){
var c__19271__auto___29373 = cljs.core.chunk_first.call(null,seq__29329_29372__$1);
var G__29374 = cljs.core.chunk_rest.call(null,seq__29329_29372__$1);
var G__29375 = c__19271__auto___29373;
var G__29376 = cljs.core.count.call(null,c__19271__auto___29373);
var G__29377 = (0);
seq__29329_29362 = G__29374;
chunk__29330_29363 = G__29375;
count__29331_29364 = G__29376;
i__29332_29365 = G__29377;
continue;
} else {
var req_29378 = cljs.core.first.call(null,seq__29329_29372__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29378,prov);

var G__29379 = cljs.core.next.call(null,seq__29329_29372__$1);
var G__29380 = null;
var G__29381 = (0);
var G__29382 = (0);
seq__29329_29362 = G__29379;
chunk__29330_29363 = G__29380;
count__29331_29364 = G__29381;
i__29332_29365 = G__29382;
continue;
}
} else {
}
}
break;
}

var G__29383 = cljs.core.next.call(null,seq__29321__$1);
var G__29384 = null;
var G__29385 = (0);
var G__29386 = (0);
seq__29321 = G__29383;
chunk__29322 = G__29384;
count__29323 = G__29385;
i__29324 = G__29386;
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
var seq__29391_29395 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29392_29396 = null;
var count__29393_29397 = (0);
var i__29394_29398 = (0);
while(true){
if((i__29394_29398 < count__29393_29397)){
var ns_29399 = cljs.core._nth.call(null,chunk__29392_29396,i__29394_29398);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29399);

var G__29400 = seq__29391_29395;
var G__29401 = chunk__29392_29396;
var G__29402 = count__29393_29397;
var G__29403 = (i__29394_29398 + (1));
seq__29391_29395 = G__29400;
chunk__29392_29396 = G__29401;
count__29393_29397 = G__29402;
i__29394_29398 = G__29403;
continue;
} else {
var temp__4657__auto___29404 = cljs.core.seq.call(null,seq__29391_29395);
if(temp__4657__auto___29404){
var seq__29391_29405__$1 = temp__4657__auto___29404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29391_29405__$1)){
var c__19271__auto___29406 = cljs.core.chunk_first.call(null,seq__29391_29405__$1);
var G__29407 = cljs.core.chunk_rest.call(null,seq__29391_29405__$1);
var G__29408 = c__19271__auto___29406;
var G__29409 = cljs.core.count.call(null,c__19271__auto___29406);
var G__29410 = (0);
seq__29391_29395 = G__29407;
chunk__29392_29396 = G__29408;
count__29393_29397 = G__29409;
i__29394_29398 = G__29410;
continue;
} else {
var ns_29411 = cljs.core.first.call(null,seq__29391_29405__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29411);

var G__29412 = cljs.core.next.call(null,seq__29391_29405__$1);
var G__29413 = null;
var G__29414 = (0);
var G__29415 = (0);
seq__29391_29395 = G__29412;
chunk__29392_29396 = G__29413;
count__29393_29397 = G__29414;
i__29394_29398 = G__29415;
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
goog.require_figwheel_backup_ = (function (){var or__18460__auto__ = goog.require__;
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
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
var G__29416__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29416 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29417__i = 0, G__29417__a = new Array(arguments.length -  0);
while (G__29417__i < G__29417__a.length) {G__29417__a[G__29417__i] = arguments[G__29417__i + 0]; ++G__29417__i;}
  args = new cljs.core.IndexedSeq(G__29417__a,0);
} 
return G__29416__delegate.call(this,args);};
G__29416.cljs$lang$maxFixedArity = 0;
G__29416.cljs$lang$applyTo = (function (arglist__29418){
var args = cljs.core.seq(arglist__29418);
return G__29416__delegate(args);
});
G__29416.cljs$core$IFn$_invoke$arity$variadic = G__29416__delegate;
return G__29416;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29420 = cljs.core._EQ_;
var expr__29421 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29420.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29421))){
var path_parts = ((function (pred__29420,expr__29421){
return (function (p1__29419_SHARP_){
return clojure.string.split.call(null,p1__29419_SHARP_,/[\/\\]/);
});})(pred__29420,expr__29421))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__29420,expr__29421){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29423){if((e29423 instanceof Error)){
var e = e29423;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29423;

}
}})());
});
;})(path_parts,sep,root,pred__29420,expr__29421))
} else {
if(cljs.core.truth_(pred__29420.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29421))){
return ((function (pred__29420,expr__29421){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__29420,expr__29421){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__29420,expr__29421))
);

return deferred.addErrback(((function (deferred,pred__29420,expr__29421){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__29420,expr__29421))
);
});
;})(pred__29420,expr__29421))
} else {
return ((function (pred__29420,expr__29421){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29420,expr__29421))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29424,callback){
var map__29427 = p__29424;
var map__29427__$1 = ((((!((map__29427 == null)))?((((map__29427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29427):map__29427);
var file_msg = map__29427__$1;
var request_url = cljs.core.get.call(null,map__29427__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29427,map__29427__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29427,map__29427__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__20485__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto__){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto__){
return (function (state_29451){
var state_val_29452 = (state_29451[(1)]);
if((state_val_29452 === (7))){
var inst_29447 = (state_29451[(2)]);
var state_29451__$1 = state_29451;
var statearr_29453_29473 = state_29451__$1;
(statearr_29453_29473[(2)] = inst_29447);

(statearr_29453_29473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29452 === (1))){
var state_29451__$1 = state_29451;
var statearr_29454_29474 = state_29451__$1;
(statearr_29454_29474[(2)] = null);

(statearr_29454_29474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29452 === (4))){
var inst_29431 = (state_29451[(7)]);
var inst_29431__$1 = (state_29451[(2)]);
var state_29451__$1 = (function (){var statearr_29455 = state_29451;
(statearr_29455[(7)] = inst_29431__$1);

return statearr_29455;
})();
if(cljs.core.truth_(inst_29431__$1)){
var statearr_29456_29475 = state_29451__$1;
(statearr_29456_29475[(1)] = (5));

} else {
var statearr_29457_29476 = state_29451__$1;
(statearr_29457_29476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29452 === (6))){
var state_29451__$1 = state_29451;
var statearr_29458_29477 = state_29451__$1;
(statearr_29458_29477[(2)] = null);

(statearr_29458_29477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29452 === (3))){
var inst_29449 = (state_29451[(2)]);
var state_29451__$1 = state_29451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29451__$1,inst_29449);
} else {
if((state_val_29452 === (2))){
var state_29451__$1 = state_29451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29451__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29452 === (11))){
var inst_29443 = (state_29451[(2)]);
var state_29451__$1 = (function (){var statearr_29459 = state_29451;
(statearr_29459[(8)] = inst_29443);

return statearr_29459;
})();
var statearr_29460_29478 = state_29451__$1;
(statearr_29460_29478[(2)] = null);

(statearr_29460_29478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29452 === (9))){
var inst_29435 = (state_29451[(9)]);
var inst_29437 = (state_29451[(10)]);
var inst_29439 = inst_29437.call(null,inst_29435);
var state_29451__$1 = state_29451;
var statearr_29461_29479 = state_29451__$1;
(statearr_29461_29479[(2)] = inst_29439);

(statearr_29461_29479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29452 === (5))){
var inst_29431 = (state_29451[(7)]);
var inst_29433 = figwheel.client.file_reloading.blocking_load.call(null,inst_29431);
var state_29451__$1 = state_29451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29451__$1,(8),inst_29433);
} else {
if((state_val_29452 === (10))){
var inst_29435 = (state_29451[(9)]);
var inst_29441 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29435);
var state_29451__$1 = state_29451;
var statearr_29462_29480 = state_29451__$1;
(statearr_29462_29480[(2)] = inst_29441);

(statearr_29462_29480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29452 === (8))){
var inst_29431 = (state_29451[(7)]);
var inst_29437 = (state_29451[(10)]);
var inst_29435 = (state_29451[(2)]);
var inst_29436 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29437__$1 = cljs.core.get.call(null,inst_29436,inst_29431);
var state_29451__$1 = (function (){var statearr_29463 = state_29451;
(statearr_29463[(9)] = inst_29435);

(statearr_29463[(10)] = inst_29437__$1);

return statearr_29463;
})();
if(cljs.core.truth_(inst_29437__$1)){
var statearr_29464_29481 = state_29451__$1;
(statearr_29464_29481[(1)] = (9));

} else {
var statearr_29465_29482 = state_29451__$1;
(statearr_29465_29482[(1)] = (10));

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
});})(c__20485__auto__))
;
return ((function (switch__20464__auto__,c__20485__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20465__auto__ = null;
var figwheel$client$file_reloading$state_machine__20465__auto____0 = (function (){
var statearr_29469 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29469[(0)] = figwheel$client$file_reloading$state_machine__20465__auto__);

(statearr_29469[(1)] = (1));

return statearr_29469;
});
var figwheel$client$file_reloading$state_machine__20465__auto____1 = (function (state_29451){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_29451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e29470){if((e29470 instanceof Object)){
var ex__20468__auto__ = e29470;
var statearr_29471_29483 = state_29451;
(statearr_29471_29483[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29484 = state_29451;
state_29451 = G__29484;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20465__auto__ = function(state_29451){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20465__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20465__auto____1.call(this,state_29451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20465__auto____0;
figwheel$client$file_reloading$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20465__auto____1;
return figwheel$client$file_reloading$state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto__))
})();
var state__20487__auto__ = (function (){var statearr_29472 = f__20486__auto__.call(null);
(statearr_29472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto__);

return statearr_29472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto__))
);

return c__20485__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29485,callback){
var map__29488 = p__29485;
var map__29488__$1 = ((((!((map__29488 == null)))?((((map__29488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29488):map__29488);
var file_msg = map__29488__$1;
var namespace = cljs.core.get.call(null,map__29488__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29488,map__29488__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29488,map__29488__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29490){
var map__29493 = p__29490;
var map__29493__$1 = ((((!((map__29493 == null)))?((((map__29493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29493):map__29493);
var file_msg = map__29493__$1;
var namespace = cljs.core.get.call(null,map__29493__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18448__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18448__auto__){
var or__18460__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
var or__18460__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18460__auto____$1)){
return or__18460__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18448__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29495,callback){
var map__29498 = p__29495;
var map__29498__$1 = ((((!((map__29498 == null)))?((((map__29498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29498):map__29498);
var file_msg = map__29498__$1;
var request_url = cljs.core.get.call(null,map__29498__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29498__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20485__auto___29586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto___29586,out){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto___29586,out){
return (function (state_29568){
var state_val_29569 = (state_29568[(1)]);
if((state_val_29569 === (1))){
var inst_29546 = cljs.core.nth.call(null,files,(0),null);
var inst_29547 = cljs.core.nthnext.call(null,files,(1));
var inst_29548 = files;
var state_29568__$1 = (function (){var statearr_29570 = state_29568;
(statearr_29570[(7)] = inst_29547);

(statearr_29570[(8)] = inst_29546);

(statearr_29570[(9)] = inst_29548);

return statearr_29570;
})();
var statearr_29571_29587 = state_29568__$1;
(statearr_29571_29587[(2)] = null);

(statearr_29571_29587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (2))){
var inst_29548 = (state_29568[(9)]);
var inst_29551 = (state_29568[(10)]);
var inst_29551__$1 = cljs.core.nth.call(null,inst_29548,(0),null);
var inst_29552 = cljs.core.nthnext.call(null,inst_29548,(1));
var inst_29553 = (inst_29551__$1 == null);
var inst_29554 = cljs.core.not.call(null,inst_29553);
var state_29568__$1 = (function (){var statearr_29572 = state_29568;
(statearr_29572[(11)] = inst_29552);

(statearr_29572[(10)] = inst_29551__$1);

return statearr_29572;
})();
if(inst_29554){
var statearr_29573_29588 = state_29568__$1;
(statearr_29573_29588[(1)] = (4));

} else {
var statearr_29574_29589 = state_29568__$1;
(statearr_29574_29589[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (3))){
var inst_29566 = (state_29568[(2)]);
var state_29568__$1 = state_29568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29568__$1,inst_29566);
} else {
if((state_val_29569 === (4))){
var inst_29551 = (state_29568[(10)]);
var inst_29556 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29551);
var state_29568__$1 = state_29568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29568__$1,(7),inst_29556);
} else {
if((state_val_29569 === (5))){
var inst_29562 = cljs.core.async.close_BANG_.call(null,out);
var state_29568__$1 = state_29568;
var statearr_29575_29590 = state_29568__$1;
(statearr_29575_29590[(2)] = inst_29562);

(statearr_29575_29590[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (6))){
var inst_29564 = (state_29568[(2)]);
var state_29568__$1 = state_29568;
var statearr_29576_29591 = state_29568__$1;
(statearr_29576_29591[(2)] = inst_29564);

(statearr_29576_29591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (7))){
var inst_29552 = (state_29568[(11)]);
var inst_29558 = (state_29568[(2)]);
var inst_29559 = cljs.core.async.put_BANG_.call(null,out,inst_29558);
var inst_29548 = inst_29552;
var state_29568__$1 = (function (){var statearr_29577 = state_29568;
(statearr_29577[(9)] = inst_29548);

(statearr_29577[(12)] = inst_29559);

return statearr_29577;
})();
var statearr_29578_29592 = state_29568__$1;
(statearr_29578_29592[(2)] = null);

(statearr_29578_29592[(1)] = (2));


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
});})(c__20485__auto___29586,out))
;
return ((function (switch__20464__auto__,c__20485__auto___29586,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20465__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20465__auto____0 = (function (){
var statearr_29582 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29582[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20465__auto__);

(statearr_29582[(1)] = (1));

return statearr_29582;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20465__auto____1 = (function (state_29568){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_29568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e29583){if((e29583 instanceof Object)){
var ex__20468__auto__ = e29583;
var statearr_29584_29593 = state_29568;
(statearr_29584_29593[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29594 = state_29568;
state_29568 = G__29594;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20465__auto__ = function(state_29568){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20465__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20465__auto____1.call(this,state_29568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20465__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20465__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto___29586,out))
})();
var state__20487__auto__ = (function (){var statearr_29585 = f__20486__auto__.call(null);
(statearr_29585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto___29586);

return statearr_29585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto___29586,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29595,opts){
var map__29599 = p__29595;
var map__29599__$1 = ((((!((map__29599 == null)))?((((map__29599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29599):map__29599);
var eval_body__$1 = cljs.core.get.call(null,map__29599__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29599__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18448__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18448__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18448__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29601){var e = e29601;
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
return (function (p1__29602_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29602_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29607){
var vec__29608 = p__29607;
var k = cljs.core.nth.call(null,vec__29608,(0),null);
var v = cljs.core.nth.call(null,vec__29608,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29609){
var vec__29610 = p__29609;
var k = cljs.core.nth.call(null,vec__29610,(0),null);
var v = cljs.core.nth.call(null,vec__29610,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29614,p__29615){
var map__29862 = p__29614;
var map__29862__$1 = ((((!((map__29862 == null)))?((((map__29862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29862):map__29862);
var opts = map__29862__$1;
var before_jsload = cljs.core.get.call(null,map__29862__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29862__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29862__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29863 = p__29615;
var map__29863__$1 = ((((!((map__29863 == null)))?((((map__29863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29863):map__29863);
var msg = map__29863__$1;
var files = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20485__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30016){
var state_val_30017 = (state_30016[(1)]);
if((state_val_30017 === (7))){
var inst_29878 = (state_30016[(7)]);
var inst_29880 = (state_30016[(8)]);
var inst_29879 = (state_30016[(9)]);
var inst_29877 = (state_30016[(10)]);
var inst_29885 = cljs.core._nth.call(null,inst_29878,inst_29880);
var inst_29886 = figwheel.client.file_reloading.eval_body.call(null,inst_29885,opts);
var inst_29887 = (inst_29880 + (1));
var tmp30018 = inst_29878;
var tmp30019 = inst_29879;
var tmp30020 = inst_29877;
var inst_29877__$1 = tmp30020;
var inst_29878__$1 = tmp30018;
var inst_29879__$1 = tmp30019;
var inst_29880__$1 = inst_29887;
var state_30016__$1 = (function (){var statearr_30021 = state_30016;
(statearr_30021[(7)] = inst_29878__$1);

(statearr_30021[(8)] = inst_29880__$1);

(statearr_30021[(9)] = inst_29879__$1);

(statearr_30021[(10)] = inst_29877__$1);

(statearr_30021[(11)] = inst_29886);

return statearr_30021;
})();
var statearr_30022_30108 = state_30016__$1;
(statearr_30022_30108[(2)] = null);

(statearr_30022_30108[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (20))){
var inst_29920 = (state_30016[(12)]);
var inst_29928 = figwheel.client.file_reloading.sort_files.call(null,inst_29920);
var state_30016__$1 = state_30016;
var statearr_30023_30109 = state_30016__$1;
(statearr_30023_30109[(2)] = inst_29928);

(statearr_30023_30109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (27))){
var state_30016__$1 = state_30016;
var statearr_30024_30110 = state_30016__$1;
(statearr_30024_30110[(2)] = null);

(statearr_30024_30110[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (1))){
var inst_29869 = (state_30016[(13)]);
var inst_29866 = before_jsload.call(null,files);
var inst_29867 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29868 = (function (){return ((function (inst_29869,inst_29866,inst_29867,state_val_30017,c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29611_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29611_SHARP_);
});
;})(inst_29869,inst_29866,inst_29867,state_val_30017,c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29869__$1 = cljs.core.filter.call(null,inst_29868,files);
var inst_29870 = cljs.core.not_empty.call(null,inst_29869__$1);
var state_30016__$1 = (function (){var statearr_30025 = state_30016;
(statearr_30025[(13)] = inst_29869__$1);

(statearr_30025[(14)] = inst_29867);

(statearr_30025[(15)] = inst_29866);

return statearr_30025;
})();
if(cljs.core.truth_(inst_29870)){
var statearr_30026_30111 = state_30016__$1;
(statearr_30026_30111[(1)] = (2));

} else {
var statearr_30027_30112 = state_30016__$1;
(statearr_30027_30112[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (24))){
var state_30016__$1 = state_30016;
var statearr_30028_30113 = state_30016__$1;
(statearr_30028_30113[(2)] = null);

(statearr_30028_30113[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (39))){
var inst_29970 = (state_30016[(16)]);
var state_30016__$1 = state_30016;
var statearr_30029_30114 = state_30016__$1;
(statearr_30029_30114[(2)] = inst_29970);

(statearr_30029_30114[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (46))){
var inst_30011 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
var statearr_30030_30115 = state_30016__$1;
(statearr_30030_30115[(2)] = inst_30011);

(statearr_30030_30115[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (4))){
var inst_29914 = (state_30016[(2)]);
var inst_29915 = cljs.core.List.EMPTY;
var inst_29916 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29915);
var inst_29917 = (function (){return ((function (inst_29914,inst_29915,inst_29916,state_val_30017,c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29612_SHARP_){
var and__18448__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29612_SHARP_);
if(cljs.core.truth_(and__18448__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29612_SHARP_));
} else {
return and__18448__auto__;
}
});
;})(inst_29914,inst_29915,inst_29916,state_val_30017,c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29918 = cljs.core.filter.call(null,inst_29917,files);
var inst_29919 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29920 = cljs.core.concat.call(null,inst_29918,inst_29919);
var state_30016__$1 = (function (){var statearr_30031 = state_30016;
(statearr_30031[(12)] = inst_29920);

(statearr_30031[(17)] = inst_29916);

(statearr_30031[(18)] = inst_29914);

return statearr_30031;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30032_30116 = state_30016__$1;
(statearr_30032_30116[(1)] = (16));

} else {
var statearr_30033_30117 = state_30016__$1;
(statearr_30033_30117[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (15))){
var inst_29904 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
var statearr_30034_30118 = state_30016__$1;
(statearr_30034_30118[(2)] = inst_29904);

(statearr_30034_30118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (21))){
var inst_29930 = (state_30016[(19)]);
var inst_29930__$1 = (state_30016[(2)]);
var inst_29931 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29930__$1);
var state_30016__$1 = (function (){var statearr_30035 = state_30016;
(statearr_30035[(19)] = inst_29930__$1);

return statearr_30035;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30016__$1,(22),inst_29931);
} else {
if((state_val_30017 === (31))){
var inst_30014 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30016__$1,inst_30014);
} else {
if((state_val_30017 === (32))){
var inst_29970 = (state_30016[(16)]);
var inst_29975 = inst_29970.cljs$lang$protocol_mask$partition0$;
var inst_29976 = (inst_29975 & (64));
var inst_29977 = inst_29970.cljs$core$ISeq$;
var inst_29978 = (inst_29976) || (inst_29977);
var state_30016__$1 = state_30016;
if(cljs.core.truth_(inst_29978)){
var statearr_30036_30119 = state_30016__$1;
(statearr_30036_30119[(1)] = (35));

} else {
var statearr_30037_30120 = state_30016__$1;
(statearr_30037_30120[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (40))){
var inst_29991 = (state_30016[(20)]);
var inst_29990 = (state_30016[(2)]);
var inst_29991__$1 = cljs.core.get.call(null,inst_29990,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29992 = cljs.core.get.call(null,inst_29990,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29993 = cljs.core.not_empty.call(null,inst_29991__$1);
var state_30016__$1 = (function (){var statearr_30038 = state_30016;
(statearr_30038[(20)] = inst_29991__$1);

(statearr_30038[(21)] = inst_29992);

return statearr_30038;
})();
if(cljs.core.truth_(inst_29993)){
var statearr_30039_30121 = state_30016__$1;
(statearr_30039_30121[(1)] = (41));

} else {
var statearr_30040_30122 = state_30016__$1;
(statearr_30040_30122[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (33))){
var state_30016__$1 = state_30016;
var statearr_30041_30123 = state_30016__$1;
(statearr_30041_30123[(2)] = false);

(statearr_30041_30123[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (13))){
var inst_29890 = (state_30016[(22)]);
var inst_29894 = cljs.core.chunk_first.call(null,inst_29890);
var inst_29895 = cljs.core.chunk_rest.call(null,inst_29890);
var inst_29896 = cljs.core.count.call(null,inst_29894);
var inst_29877 = inst_29895;
var inst_29878 = inst_29894;
var inst_29879 = inst_29896;
var inst_29880 = (0);
var state_30016__$1 = (function (){var statearr_30042 = state_30016;
(statearr_30042[(7)] = inst_29878);

(statearr_30042[(8)] = inst_29880);

(statearr_30042[(9)] = inst_29879);

(statearr_30042[(10)] = inst_29877);

return statearr_30042;
})();
var statearr_30043_30124 = state_30016__$1;
(statearr_30043_30124[(2)] = null);

(statearr_30043_30124[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (22))){
var inst_29930 = (state_30016[(19)]);
var inst_29938 = (state_30016[(23)]);
var inst_29934 = (state_30016[(24)]);
var inst_29933 = (state_30016[(25)]);
var inst_29933__$1 = (state_30016[(2)]);
var inst_29934__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29933__$1);
var inst_29935 = (function (){var all_files = inst_29930;
var res_SINGLEQUOTE_ = inst_29933__$1;
var res = inst_29934__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29930,inst_29938,inst_29934,inst_29933,inst_29933__$1,inst_29934__$1,state_val_30017,c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29613_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29613_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29930,inst_29938,inst_29934,inst_29933,inst_29933__$1,inst_29934__$1,state_val_30017,c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29936 = cljs.core.filter.call(null,inst_29935,inst_29933__$1);
var inst_29937 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29938__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29937);
var inst_29939 = cljs.core.not_empty.call(null,inst_29938__$1);
var state_30016__$1 = (function (){var statearr_30044 = state_30016;
(statearr_30044[(23)] = inst_29938__$1);

(statearr_30044[(24)] = inst_29934__$1);

(statearr_30044[(25)] = inst_29933__$1);

(statearr_30044[(26)] = inst_29936);

return statearr_30044;
})();
if(cljs.core.truth_(inst_29939)){
var statearr_30045_30125 = state_30016__$1;
(statearr_30045_30125[(1)] = (23));

} else {
var statearr_30046_30126 = state_30016__$1;
(statearr_30046_30126[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (36))){
var state_30016__$1 = state_30016;
var statearr_30047_30127 = state_30016__$1;
(statearr_30047_30127[(2)] = false);

(statearr_30047_30127[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (41))){
var inst_29991 = (state_30016[(20)]);
var inst_29995 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29996 = cljs.core.map.call(null,inst_29995,inst_29991);
var inst_29997 = cljs.core.pr_str.call(null,inst_29996);
var inst_29998 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29997)].join('');
var inst_29999 = figwheel.client.utils.log.call(null,inst_29998);
var state_30016__$1 = state_30016;
var statearr_30048_30128 = state_30016__$1;
(statearr_30048_30128[(2)] = inst_29999);

(statearr_30048_30128[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (43))){
var inst_29992 = (state_30016[(21)]);
var inst_30002 = (state_30016[(2)]);
var inst_30003 = cljs.core.not_empty.call(null,inst_29992);
var state_30016__$1 = (function (){var statearr_30049 = state_30016;
(statearr_30049[(27)] = inst_30002);

return statearr_30049;
})();
if(cljs.core.truth_(inst_30003)){
var statearr_30050_30129 = state_30016__$1;
(statearr_30050_30129[(1)] = (44));

} else {
var statearr_30051_30130 = state_30016__$1;
(statearr_30051_30130[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (29))){
var inst_29930 = (state_30016[(19)]);
var inst_29970 = (state_30016[(16)]);
var inst_29938 = (state_30016[(23)]);
var inst_29934 = (state_30016[(24)]);
var inst_29933 = (state_30016[(25)]);
var inst_29936 = (state_30016[(26)]);
var inst_29966 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29969 = (function (){var all_files = inst_29930;
var res_SINGLEQUOTE_ = inst_29933;
var res = inst_29934;
var files_not_loaded = inst_29936;
var dependencies_that_loaded = inst_29938;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29930,inst_29970,inst_29938,inst_29934,inst_29933,inst_29936,inst_29966,state_val_30017,c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29968){
var map__30052 = p__29968;
var map__30052__$1 = ((((!((map__30052 == null)))?((((map__30052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30052):map__30052);
var namespace = cljs.core.get.call(null,map__30052__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29930,inst_29970,inst_29938,inst_29934,inst_29933,inst_29936,inst_29966,state_val_30017,c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29970__$1 = cljs.core.group_by.call(null,inst_29969,inst_29936);
var inst_29972 = (inst_29970__$1 == null);
var inst_29973 = cljs.core.not.call(null,inst_29972);
var state_30016__$1 = (function (){var statearr_30054 = state_30016;
(statearr_30054[(16)] = inst_29970__$1);

(statearr_30054[(28)] = inst_29966);

return statearr_30054;
})();
if(inst_29973){
var statearr_30055_30131 = state_30016__$1;
(statearr_30055_30131[(1)] = (32));

} else {
var statearr_30056_30132 = state_30016__$1;
(statearr_30056_30132[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (44))){
var inst_29992 = (state_30016[(21)]);
var inst_30005 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29992);
var inst_30006 = cljs.core.pr_str.call(null,inst_30005);
var inst_30007 = [cljs.core.str("not required: "),cljs.core.str(inst_30006)].join('');
var inst_30008 = figwheel.client.utils.log.call(null,inst_30007);
var state_30016__$1 = state_30016;
var statearr_30057_30133 = state_30016__$1;
(statearr_30057_30133[(2)] = inst_30008);

(statearr_30057_30133[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (6))){
var inst_29911 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
var statearr_30058_30134 = state_30016__$1;
(statearr_30058_30134[(2)] = inst_29911);

(statearr_30058_30134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (28))){
var inst_29936 = (state_30016[(26)]);
var inst_29963 = (state_30016[(2)]);
var inst_29964 = cljs.core.not_empty.call(null,inst_29936);
var state_30016__$1 = (function (){var statearr_30059 = state_30016;
(statearr_30059[(29)] = inst_29963);

return statearr_30059;
})();
if(cljs.core.truth_(inst_29964)){
var statearr_30060_30135 = state_30016__$1;
(statearr_30060_30135[(1)] = (29));

} else {
var statearr_30061_30136 = state_30016__$1;
(statearr_30061_30136[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (25))){
var inst_29934 = (state_30016[(24)]);
var inst_29950 = (state_30016[(2)]);
var inst_29951 = cljs.core.not_empty.call(null,inst_29934);
var state_30016__$1 = (function (){var statearr_30062 = state_30016;
(statearr_30062[(30)] = inst_29950);

return statearr_30062;
})();
if(cljs.core.truth_(inst_29951)){
var statearr_30063_30137 = state_30016__$1;
(statearr_30063_30137[(1)] = (26));

} else {
var statearr_30064_30138 = state_30016__$1;
(statearr_30064_30138[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (34))){
var inst_29985 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
if(cljs.core.truth_(inst_29985)){
var statearr_30065_30139 = state_30016__$1;
(statearr_30065_30139[(1)] = (38));

} else {
var statearr_30066_30140 = state_30016__$1;
(statearr_30066_30140[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (17))){
var state_30016__$1 = state_30016;
var statearr_30067_30141 = state_30016__$1;
(statearr_30067_30141[(2)] = recompile_dependents);

(statearr_30067_30141[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (3))){
var state_30016__$1 = state_30016;
var statearr_30068_30142 = state_30016__$1;
(statearr_30068_30142[(2)] = null);

(statearr_30068_30142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (12))){
var inst_29907 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
var statearr_30069_30143 = state_30016__$1;
(statearr_30069_30143[(2)] = inst_29907);

(statearr_30069_30143[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (2))){
var inst_29869 = (state_30016[(13)]);
var inst_29876 = cljs.core.seq.call(null,inst_29869);
var inst_29877 = inst_29876;
var inst_29878 = null;
var inst_29879 = (0);
var inst_29880 = (0);
var state_30016__$1 = (function (){var statearr_30070 = state_30016;
(statearr_30070[(7)] = inst_29878);

(statearr_30070[(8)] = inst_29880);

(statearr_30070[(9)] = inst_29879);

(statearr_30070[(10)] = inst_29877);

return statearr_30070;
})();
var statearr_30071_30144 = state_30016__$1;
(statearr_30071_30144[(2)] = null);

(statearr_30071_30144[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (23))){
var inst_29930 = (state_30016[(19)]);
var inst_29938 = (state_30016[(23)]);
var inst_29934 = (state_30016[(24)]);
var inst_29933 = (state_30016[(25)]);
var inst_29936 = (state_30016[(26)]);
var inst_29941 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29943 = (function (){var all_files = inst_29930;
var res_SINGLEQUOTE_ = inst_29933;
var res = inst_29934;
var files_not_loaded = inst_29936;
var dependencies_that_loaded = inst_29938;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29930,inst_29938,inst_29934,inst_29933,inst_29936,inst_29941,state_val_30017,c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29942){
var map__30072 = p__29942;
var map__30072__$1 = ((((!((map__30072 == null)))?((((map__30072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30072):map__30072);
var request_url = cljs.core.get.call(null,map__30072__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29930,inst_29938,inst_29934,inst_29933,inst_29936,inst_29941,state_val_30017,c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29944 = cljs.core.reverse.call(null,inst_29938);
var inst_29945 = cljs.core.map.call(null,inst_29943,inst_29944);
var inst_29946 = cljs.core.pr_str.call(null,inst_29945);
var inst_29947 = figwheel.client.utils.log.call(null,inst_29946);
var state_30016__$1 = (function (){var statearr_30074 = state_30016;
(statearr_30074[(31)] = inst_29941);

return statearr_30074;
})();
var statearr_30075_30145 = state_30016__$1;
(statearr_30075_30145[(2)] = inst_29947);

(statearr_30075_30145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (35))){
var state_30016__$1 = state_30016;
var statearr_30076_30146 = state_30016__$1;
(statearr_30076_30146[(2)] = true);

(statearr_30076_30146[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (19))){
var inst_29920 = (state_30016[(12)]);
var inst_29926 = figwheel.client.file_reloading.expand_files.call(null,inst_29920);
var state_30016__$1 = state_30016;
var statearr_30077_30147 = state_30016__$1;
(statearr_30077_30147[(2)] = inst_29926);

(statearr_30077_30147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (11))){
var state_30016__$1 = state_30016;
var statearr_30078_30148 = state_30016__$1;
(statearr_30078_30148[(2)] = null);

(statearr_30078_30148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (9))){
var inst_29909 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
var statearr_30079_30149 = state_30016__$1;
(statearr_30079_30149[(2)] = inst_29909);

(statearr_30079_30149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (5))){
var inst_29880 = (state_30016[(8)]);
var inst_29879 = (state_30016[(9)]);
var inst_29882 = (inst_29880 < inst_29879);
var inst_29883 = inst_29882;
var state_30016__$1 = state_30016;
if(cljs.core.truth_(inst_29883)){
var statearr_30080_30150 = state_30016__$1;
(statearr_30080_30150[(1)] = (7));

} else {
var statearr_30081_30151 = state_30016__$1;
(statearr_30081_30151[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (14))){
var inst_29890 = (state_30016[(22)]);
var inst_29899 = cljs.core.first.call(null,inst_29890);
var inst_29900 = figwheel.client.file_reloading.eval_body.call(null,inst_29899,opts);
var inst_29901 = cljs.core.next.call(null,inst_29890);
var inst_29877 = inst_29901;
var inst_29878 = null;
var inst_29879 = (0);
var inst_29880 = (0);
var state_30016__$1 = (function (){var statearr_30082 = state_30016;
(statearr_30082[(32)] = inst_29900);

(statearr_30082[(7)] = inst_29878);

(statearr_30082[(8)] = inst_29880);

(statearr_30082[(9)] = inst_29879);

(statearr_30082[(10)] = inst_29877);

return statearr_30082;
})();
var statearr_30083_30152 = state_30016__$1;
(statearr_30083_30152[(2)] = null);

(statearr_30083_30152[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (45))){
var state_30016__$1 = state_30016;
var statearr_30084_30153 = state_30016__$1;
(statearr_30084_30153[(2)] = null);

(statearr_30084_30153[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (26))){
var inst_29930 = (state_30016[(19)]);
var inst_29938 = (state_30016[(23)]);
var inst_29934 = (state_30016[(24)]);
var inst_29933 = (state_30016[(25)]);
var inst_29936 = (state_30016[(26)]);
var inst_29953 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29955 = (function (){var all_files = inst_29930;
var res_SINGLEQUOTE_ = inst_29933;
var res = inst_29934;
var files_not_loaded = inst_29936;
var dependencies_that_loaded = inst_29938;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29930,inst_29938,inst_29934,inst_29933,inst_29936,inst_29953,state_val_30017,c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29954){
var map__30085 = p__29954;
var map__30085__$1 = ((((!((map__30085 == null)))?((((map__30085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30085):map__30085);
var namespace = cljs.core.get.call(null,map__30085__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30085__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29930,inst_29938,inst_29934,inst_29933,inst_29936,inst_29953,state_val_30017,c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29956 = cljs.core.map.call(null,inst_29955,inst_29934);
var inst_29957 = cljs.core.pr_str.call(null,inst_29956);
var inst_29958 = figwheel.client.utils.log.call(null,inst_29957);
var inst_29959 = (function (){var all_files = inst_29930;
var res_SINGLEQUOTE_ = inst_29933;
var res = inst_29934;
var files_not_loaded = inst_29936;
var dependencies_that_loaded = inst_29938;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29930,inst_29938,inst_29934,inst_29933,inst_29936,inst_29953,inst_29955,inst_29956,inst_29957,inst_29958,state_val_30017,c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29930,inst_29938,inst_29934,inst_29933,inst_29936,inst_29953,inst_29955,inst_29956,inst_29957,inst_29958,state_val_30017,c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29960 = setTimeout(inst_29959,(10));
var state_30016__$1 = (function (){var statearr_30087 = state_30016;
(statearr_30087[(33)] = inst_29953);

(statearr_30087[(34)] = inst_29958);

return statearr_30087;
})();
var statearr_30088_30154 = state_30016__$1;
(statearr_30088_30154[(2)] = inst_29960);

(statearr_30088_30154[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (16))){
var state_30016__$1 = state_30016;
var statearr_30089_30155 = state_30016__$1;
(statearr_30089_30155[(2)] = reload_dependents);

(statearr_30089_30155[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (38))){
var inst_29970 = (state_30016[(16)]);
var inst_29987 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29970);
var state_30016__$1 = state_30016;
var statearr_30090_30156 = state_30016__$1;
(statearr_30090_30156[(2)] = inst_29987);

(statearr_30090_30156[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (30))){
var state_30016__$1 = state_30016;
var statearr_30091_30157 = state_30016__$1;
(statearr_30091_30157[(2)] = null);

(statearr_30091_30157[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (10))){
var inst_29890 = (state_30016[(22)]);
var inst_29892 = cljs.core.chunked_seq_QMARK_.call(null,inst_29890);
var state_30016__$1 = state_30016;
if(inst_29892){
var statearr_30092_30158 = state_30016__$1;
(statearr_30092_30158[(1)] = (13));

} else {
var statearr_30093_30159 = state_30016__$1;
(statearr_30093_30159[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (18))){
var inst_29924 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
if(cljs.core.truth_(inst_29924)){
var statearr_30094_30160 = state_30016__$1;
(statearr_30094_30160[(1)] = (19));

} else {
var statearr_30095_30161 = state_30016__$1;
(statearr_30095_30161[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (42))){
var state_30016__$1 = state_30016;
var statearr_30096_30162 = state_30016__$1;
(statearr_30096_30162[(2)] = null);

(statearr_30096_30162[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (37))){
var inst_29982 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
var statearr_30097_30163 = state_30016__$1;
(statearr_30097_30163[(2)] = inst_29982);

(statearr_30097_30163[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (8))){
var inst_29890 = (state_30016[(22)]);
var inst_29877 = (state_30016[(10)]);
var inst_29890__$1 = cljs.core.seq.call(null,inst_29877);
var state_30016__$1 = (function (){var statearr_30098 = state_30016;
(statearr_30098[(22)] = inst_29890__$1);

return statearr_30098;
})();
if(inst_29890__$1){
var statearr_30099_30164 = state_30016__$1;
(statearr_30099_30164[(1)] = (10));

} else {
var statearr_30100_30165 = state_30016__$1;
(statearr_30100_30165[(1)] = (11));

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
});})(c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20464__auto__,c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20465__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20465__auto____0 = (function (){
var statearr_30104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30104[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20465__auto__);

(statearr_30104[(1)] = (1));

return statearr_30104;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20465__auto____1 = (function (state_30016){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_30016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e30105){if((e30105 instanceof Object)){
var ex__20468__auto__ = e30105;
var statearr_30106_30166 = state_30016;
(statearr_30106_30166[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30167 = state_30016;
state_30016 = G__30167;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20465__auto__ = function(state_30016){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20465__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20465__auto____1.call(this,state_30016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20465__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20465__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20487__auto__ = (function (){var statearr_30107 = f__20486__auto__.call(null);
(statearr_30107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto__);

return statearr_30107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto__,map__29862,map__29862__$1,opts,before_jsload,on_jsload,reload_dependents,map__29863,map__29863__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20485__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30170,link){
var map__30173 = p__30170;
var map__30173__$1 = ((((!((map__30173 == null)))?((((map__30173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30173):map__30173);
var file = cljs.core.get.call(null,map__30173__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__30173,map__30173__$1,file){
return (function (p1__30168_SHARP_,p2__30169_SHARP_){
if(cljs.core._EQ_.call(null,p1__30168_SHARP_,p2__30169_SHARP_)){
return p1__30168_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__30173,map__30173__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30179){
var map__30180 = p__30179;
var map__30180__$1 = ((((!((map__30180 == null)))?((((map__30180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30180):map__30180);
var match_length = cljs.core.get.call(null,map__30180__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30180__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30175_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30175_SHARP_);
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
var args30182 = [];
var len__19530__auto___30185 = arguments.length;
var i__19531__auto___30186 = (0);
while(true){
if((i__19531__auto___30186 < len__19530__auto___30185)){
args30182.push((arguments[i__19531__auto___30186]));

var G__30187 = (i__19531__auto___30186 + (1));
i__19531__auto___30186 = G__30187;
continue;
} else {
}
break;
}

var G__30184 = args30182.length;
switch (G__30184) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30182.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30189_SHARP_,p2__30190_SHARP_){
return cljs.core.assoc.call(null,p1__30189_SHARP_,cljs.core.get.call(null,p2__30190_SHARP_,key),p2__30190_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30191){
var map__30194 = p__30191;
var map__30194__$1 = ((((!((map__30194 == null)))?((((map__30194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30194):map__30194);
var f_data = map__30194__$1;
var file = cljs.core.get.call(null,map__30194__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30196,files_msg){
var map__30203 = p__30196;
var map__30203__$1 = ((((!((map__30203 == null)))?((((map__30203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30203):map__30203);
var opts = map__30203__$1;
var on_cssload = cljs.core.get.call(null,map__30203__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30205_30209 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30206_30210 = null;
var count__30207_30211 = (0);
var i__30208_30212 = (0);
while(true){
if((i__30208_30212 < count__30207_30211)){
var f_30213 = cljs.core._nth.call(null,chunk__30206_30210,i__30208_30212);
figwheel.client.file_reloading.reload_css_file.call(null,f_30213);

var G__30214 = seq__30205_30209;
var G__30215 = chunk__30206_30210;
var G__30216 = count__30207_30211;
var G__30217 = (i__30208_30212 + (1));
seq__30205_30209 = G__30214;
chunk__30206_30210 = G__30215;
count__30207_30211 = G__30216;
i__30208_30212 = G__30217;
continue;
} else {
var temp__4657__auto___30218 = cljs.core.seq.call(null,seq__30205_30209);
if(temp__4657__auto___30218){
var seq__30205_30219__$1 = temp__4657__auto___30218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30205_30219__$1)){
var c__19271__auto___30220 = cljs.core.chunk_first.call(null,seq__30205_30219__$1);
var G__30221 = cljs.core.chunk_rest.call(null,seq__30205_30219__$1);
var G__30222 = c__19271__auto___30220;
var G__30223 = cljs.core.count.call(null,c__19271__auto___30220);
var G__30224 = (0);
seq__30205_30209 = G__30221;
chunk__30206_30210 = G__30222;
count__30207_30211 = G__30223;
i__30208_30212 = G__30224;
continue;
} else {
var f_30225 = cljs.core.first.call(null,seq__30205_30219__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30225);

var G__30226 = cljs.core.next.call(null,seq__30205_30219__$1);
var G__30227 = null;
var G__30228 = (0);
var G__30229 = (0);
seq__30205_30209 = G__30226;
chunk__30206_30210 = G__30227;
count__30207_30211 = G__30228;
i__30208_30212 = G__30229;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30203,map__30203__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__30203,map__30203__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1470995251312