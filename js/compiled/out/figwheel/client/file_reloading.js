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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24410_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24410_SHARP_));
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
var seq__24415 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24416 = null;
var count__24417 = (0);
var i__24418 = (0);
while(true){
if((i__24418 < count__24417)){
var n = cljs.core._nth.call(null,chunk__24416,i__24418);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24419 = seq__24415;
var G__24420 = chunk__24416;
var G__24421 = count__24417;
var G__24422 = (i__24418 + (1));
seq__24415 = G__24419;
chunk__24416 = G__24420;
count__24417 = G__24421;
i__24418 = G__24422;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24415);
if(temp__4657__auto__){
var seq__24415__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24415__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__24415__$1);
var G__24423 = cljs.core.chunk_rest.call(null,seq__24415__$1);
var G__24424 = c__19270__auto__;
var G__24425 = cljs.core.count.call(null,c__19270__auto__);
var G__24426 = (0);
seq__24415 = G__24423;
chunk__24416 = G__24424;
count__24417 = G__24425;
i__24418 = G__24426;
continue;
} else {
var n = cljs.core.first.call(null,seq__24415__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24427 = cljs.core.next.call(null,seq__24415__$1);
var G__24428 = null;
var G__24429 = (0);
var G__24430 = (0);
seq__24415 = G__24427;
chunk__24416 = G__24428;
count__24417 = G__24429;
i__24418 = G__24430;
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

var seq__24469_24476 = cljs.core.seq.call(null,deps);
var chunk__24470_24477 = null;
var count__24471_24478 = (0);
var i__24472_24479 = (0);
while(true){
if((i__24472_24479 < count__24471_24478)){
var dep_24480 = cljs.core._nth.call(null,chunk__24470_24477,i__24472_24479);
topo_sort_helper_STAR_.call(null,dep_24480,(depth + (1)),state);

var G__24481 = seq__24469_24476;
var G__24482 = chunk__24470_24477;
var G__24483 = count__24471_24478;
var G__24484 = (i__24472_24479 + (1));
seq__24469_24476 = G__24481;
chunk__24470_24477 = G__24482;
count__24471_24478 = G__24483;
i__24472_24479 = G__24484;
continue;
} else {
var temp__4657__auto___24485 = cljs.core.seq.call(null,seq__24469_24476);
if(temp__4657__auto___24485){
var seq__24469_24486__$1 = temp__4657__auto___24485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24469_24486__$1)){
var c__19270__auto___24487 = cljs.core.chunk_first.call(null,seq__24469_24486__$1);
var G__24488 = cljs.core.chunk_rest.call(null,seq__24469_24486__$1);
var G__24489 = c__19270__auto___24487;
var G__24490 = cljs.core.count.call(null,c__19270__auto___24487);
var G__24491 = (0);
seq__24469_24476 = G__24488;
chunk__24470_24477 = G__24489;
count__24471_24478 = G__24490;
i__24472_24479 = G__24491;
continue;
} else {
var dep_24492 = cljs.core.first.call(null,seq__24469_24486__$1);
topo_sort_helper_STAR_.call(null,dep_24492,(depth + (1)),state);

var G__24493 = cljs.core.next.call(null,seq__24469_24486__$1);
var G__24494 = null;
var G__24495 = (0);
var G__24496 = (0);
seq__24469_24476 = G__24493;
chunk__24470_24477 = G__24494;
count__24471_24478 = G__24495;
i__24472_24479 = G__24496;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24473){
var vec__24475 = p__24473;
var x = cljs.core.nth.call(null,vec__24475,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24475,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24475,x,xs,get_deps__$1){
return (function (p1__24431_SHARP_){
return clojure.set.difference.call(null,p1__24431_SHARP_,x);
});})(vec__24475,x,xs,get_deps__$1))
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
var seq__24509 = cljs.core.seq.call(null,provides);
var chunk__24510 = null;
var count__24511 = (0);
var i__24512 = (0);
while(true){
if((i__24512 < count__24511)){
var prov = cljs.core._nth.call(null,chunk__24510,i__24512);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24513_24521 = cljs.core.seq.call(null,requires);
var chunk__24514_24522 = null;
var count__24515_24523 = (0);
var i__24516_24524 = (0);
while(true){
if((i__24516_24524 < count__24515_24523)){
var req_24525 = cljs.core._nth.call(null,chunk__24514_24522,i__24516_24524);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24525,prov);

var G__24526 = seq__24513_24521;
var G__24527 = chunk__24514_24522;
var G__24528 = count__24515_24523;
var G__24529 = (i__24516_24524 + (1));
seq__24513_24521 = G__24526;
chunk__24514_24522 = G__24527;
count__24515_24523 = G__24528;
i__24516_24524 = G__24529;
continue;
} else {
var temp__4657__auto___24530 = cljs.core.seq.call(null,seq__24513_24521);
if(temp__4657__auto___24530){
var seq__24513_24531__$1 = temp__4657__auto___24530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24513_24531__$1)){
var c__19270__auto___24532 = cljs.core.chunk_first.call(null,seq__24513_24531__$1);
var G__24533 = cljs.core.chunk_rest.call(null,seq__24513_24531__$1);
var G__24534 = c__19270__auto___24532;
var G__24535 = cljs.core.count.call(null,c__19270__auto___24532);
var G__24536 = (0);
seq__24513_24521 = G__24533;
chunk__24514_24522 = G__24534;
count__24515_24523 = G__24535;
i__24516_24524 = G__24536;
continue;
} else {
var req_24537 = cljs.core.first.call(null,seq__24513_24531__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24537,prov);

var G__24538 = cljs.core.next.call(null,seq__24513_24531__$1);
var G__24539 = null;
var G__24540 = (0);
var G__24541 = (0);
seq__24513_24521 = G__24538;
chunk__24514_24522 = G__24539;
count__24515_24523 = G__24540;
i__24516_24524 = G__24541;
continue;
}
} else {
}
}
break;
}

var G__24542 = seq__24509;
var G__24543 = chunk__24510;
var G__24544 = count__24511;
var G__24545 = (i__24512 + (1));
seq__24509 = G__24542;
chunk__24510 = G__24543;
count__24511 = G__24544;
i__24512 = G__24545;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24509);
if(temp__4657__auto__){
var seq__24509__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24509__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__24509__$1);
var G__24546 = cljs.core.chunk_rest.call(null,seq__24509__$1);
var G__24547 = c__19270__auto__;
var G__24548 = cljs.core.count.call(null,c__19270__auto__);
var G__24549 = (0);
seq__24509 = G__24546;
chunk__24510 = G__24547;
count__24511 = G__24548;
i__24512 = G__24549;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24509__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24517_24550 = cljs.core.seq.call(null,requires);
var chunk__24518_24551 = null;
var count__24519_24552 = (0);
var i__24520_24553 = (0);
while(true){
if((i__24520_24553 < count__24519_24552)){
var req_24554 = cljs.core._nth.call(null,chunk__24518_24551,i__24520_24553);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24554,prov);

var G__24555 = seq__24517_24550;
var G__24556 = chunk__24518_24551;
var G__24557 = count__24519_24552;
var G__24558 = (i__24520_24553 + (1));
seq__24517_24550 = G__24555;
chunk__24518_24551 = G__24556;
count__24519_24552 = G__24557;
i__24520_24553 = G__24558;
continue;
} else {
var temp__4657__auto___24559__$1 = cljs.core.seq.call(null,seq__24517_24550);
if(temp__4657__auto___24559__$1){
var seq__24517_24560__$1 = temp__4657__auto___24559__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24517_24560__$1)){
var c__19270__auto___24561 = cljs.core.chunk_first.call(null,seq__24517_24560__$1);
var G__24562 = cljs.core.chunk_rest.call(null,seq__24517_24560__$1);
var G__24563 = c__19270__auto___24561;
var G__24564 = cljs.core.count.call(null,c__19270__auto___24561);
var G__24565 = (0);
seq__24517_24550 = G__24562;
chunk__24518_24551 = G__24563;
count__24519_24552 = G__24564;
i__24520_24553 = G__24565;
continue;
} else {
var req_24566 = cljs.core.first.call(null,seq__24517_24560__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24566,prov);

var G__24567 = cljs.core.next.call(null,seq__24517_24560__$1);
var G__24568 = null;
var G__24569 = (0);
var G__24570 = (0);
seq__24517_24550 = G__24567;
chunk__24518_24551 = G__24568;
count__24519_24552 = G__24569;
i__24520_24553 = G__24570;
continue;
}
} else {
}
}
break;
}

var G__24571 = cljs.core.next.call(null,seq__24509__$1);
var G__24572 = null;
var G__24573 = (0);
var G__24574 = (0);
seq__24509 = G__24571;
chunk__24510 = G__24572;
count__24511 = G__24573;
i__24512 = G__24574;
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
var seq__24579_24583 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24580_24584 = null;
var count__24581_24585 = (0);
var i__24582_24586 = (0);
while(true){
if((i__24582_24586 < count__24581_24585)){
var ns_24587 = cljs.core._nth.call(null,chunk__24580_24584,i__24582_24586);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24587);

var G__24588 = seq__24579_24583;
var G__24589 = chunk__24580_24584;
var G__24590 = count__24581_24585;
var G__24591 = (i__24582_24586 + (1));
seq__24579_24583 = G__24588;
chunk__24580_24584 = G__24589;
count__24581_24585 = G__24590;
i__24582_24586 = G__24591;
continue;
} else {
var temp__4657__auto___24592 = cljs.core.seq.call(null,seq__24579_24583);
if(temp__4657__auto___24592){
var seq__24579_24593__$1 = temp__4657__auto___24592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24579_24593__$1)){
var c__19270__auto___24594 = cljs.core.chunk_first.call(null,seq__24579_24593__$1);
var G__24595 = cljs.core.chunk_rest.call(null,seq__24579_24593__$1);
var G__24596 = c__19270__auto___24594;
var G__24597 = cljs.core.count.call(null,c__19270__auto___24594);
var G__24598 = (0);
seq__24579_24583 = G__24595;
chunk__24580_24584 = G__24596;
count__24581_24585 = G__24597;
i__24582_24586 = G__24598;
continue;
} else {
var ns_24599 = cljs.core.first.call(null,seq__24579_24593__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24599);

var G__24600 = cljs.core.next.call(null,seq__24579_24593__$1);
var G__24601 = null;
var G__24602 = (0);
var G__24603 = (0);
seq__24579_24583 = G__24600;
chunk__24580_24584 = G__24601;
count__24581_24585 = G__24602;
i__24582_24586 = G__24603;
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
var G__24604__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24605__i = 0, G__24605__a = new Array(arguments.length -  0);
while (G__24605__i < G__24605__a.length) {G__24605__a[G__24605__i] = arguments[G__24605__i + 0]; ++G__24605__i;}
  args = new cljs.core.IndexedSeq(G__24605__a,0);
} 
return G__24604__delegate.call(this,args);};
G__24604.cljs$lang$maxFixedArity = 0;
G__24604.cljs$lang$applyTo = (function (arglist__24606){
var args = cljs.core.seq(arglist__24606);
return G__24604__delegate(args);
});
G__24604.cljs$core$IFn$_invoke$arity$variadic = G__24604__delegate;
return G__24604;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24608 = cljs.core._EQ_;
var expr__24609 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24608.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24609))){
var path_parts = ((function (pred__24608,expr__24609){
return (function (p1__24607_SHARP_){
return clojure.string.split.call(null,p1__24607_SHARP_,/[\/\\]/);
});})(pred__24608,expr__24609))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24608,expr__24609){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24611){if((e24611 instanceof Error)){
var e = e24611;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24611;

}
}})());
});
;})(path_parts,sep,root,pred__24608,expr__24609))
} else {
if(cljs.core.truth_(pred__24608.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24609))){
return ((function (pred__24608,expr__24609){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24608,expr__24609){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24608,expr__24609))
);

return deferred.addErrback(((function (deferred,pred__24608,expr__24609){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24608,expr__24609))
);
});
;})(pred__24608,expr__24609))
} else {
return ((function (pred__24608,expr__24609){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24608,expr__24609))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24612,callback){
var map__24615 = p__24612;
var map__24615__$1 = ((((!((map__24615 == null)))?((((map__24615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24615):map__24615);
var file_msg = map__24615__$1;
var request_url = cljs.core.get.call(null,map__24615__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24615,map__24615__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24615,map__24615__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__21577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto__){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto__){
return (function (state_24639){
var state_val_24640 = (state_24639[(1)]);
if((state_val_24640 === (7))){
var inst_24635 = (state_24639[(2)]);
var state_24639__$1 = state_24639;
var statearr_24641_24661 = state_24639__$1;
(statearr_24641_24661[(2)] = inst_24635);

(statearr_24641_24661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24640 === (1))){
var state_24639__$1 = state_24639;
var statearr_24642_24662 = state_24639__$1;
(statearr_24642_24662[(2)] = null);

(statearr_24642_24662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24640 === (4))){
var inst_24619 = (state_24639[(7)]);
var inst_24619__$1 = (state_24639[(2)]);
var state_24639__$1 = (function (){var statearr_24643 = state_24639;
(statearr_24643[(7)] = inst_24619__$1);

return statearr_24643;
})();
if(cljs.core.truth_(inst_24619__$1)){
var statearr_24644_24663 = state_24639__$1;
(statearr_24644_24663[(1)] = (5));

} else {
var statearr_24645_24664 = state_24639__$1;
(statearr_24645_24664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24640 === (6))){
var state_24639__$1 = state_24639;
var statearr_24646_24665 = state_24639__$1;
(statearr_24646_24665[(2)] = null);

(statearr_24646_24665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24640 === (3))){
var inst_24637 = (state_24639[(2)]);
var state_24639__$1 = state_24639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24639__$1,inst_24637);
} else {
if((state_val_24640 === (2))){
var state_24639__$1 = state_24639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24639__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24640 === (11))){
var inst_24631 = (state_24639[(2)]);
var state_24639__$1 = (function (){var statearr_24647 = state_24639;
(statearr_24647[(8)] = inst_24631);

return statearr_24647;
})();
var statearr_24648_24666 = state_24639__$1;
(statearr_24648_24666[(2)] = null);

(statearr_24648_24666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24640 === (9))){
var inst_24623 = (state_24639[(9)]);
var inst_24625 = (state_24639[(10)]);
var inst_24627 = inst_24625.call(null,inst_24623);
var state_24639__$1 = state_24639;
var statearr_24649_24667 = state_24639__$1;
(statearr_24649_24667[(2)] = inst_24627);

(statearr_24649_24667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24640 === (5))){
var inst_24619 = (state_24639[(7)]);
var inst_24621 = figwheel.client.file_reloading.blocking_load.call(null,inst_24619);
var state_24639__$1 = state_24639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24639__$1,(8),inst_24621);
} else {
if((state_val_24640 === (10))){
var inst_24623 = (state_24639[(9)]);
var inst_24629 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24623);
var state_24639__$1 = state_24639;
var statearr_24650_24668 = state_24639__$1;
(statearr_24650_24668[(2)] = inst_24629);

(statearr_24650_24668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24640 === (8))){
var inst_24619 = (state_24639[(7)]);
var inst_24625 = (state_24639[(10)]);
var inst_24623 = (state_24639[(2)]);
var inst_24624 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24625__$1 = cljs.core.get.call(null,inst_24624,inst_24619);
var state_24639__$1 = (function (){var statearr_24651 = state_24639;
(statearr_24651[(9)] = inst_24623);

(statearr_24651[(10)] = inst_24625__$1);

return statearr_24651;
})();
if(cljs.core.truth_(inst_24625__$1)){
var statearr_24652_24669 = state_24639__$1;
(statearr_24652_24669[(1)] = (9));

} else {
var statearr_24653_24670 = state_24639__$1;
(statearr_24653_24670[(1)] = (10));

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
});})(c__21577__auto__))
;
return ((function (switch__21465__auto__,c__21577__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21466__auto__ = null;
var figwheel$client$file_reloading$state_machine__21466__auto____0 = (function (){
var statearr_24657 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24657[(0)] = figwheel$client$file_reloading$state_machine__21466__auto__);

(statearr_24657[(1)] = (1));

return statearr_24657;
});
var figwheel$client$file_reloading$state_machine__21466__auto____1 = (function (state_24639){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_24639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e24658){if((e24658 instanceof Object)){
var ex__21469__auto__ = e24658;
var statearr_24659_24671 = state_24639;
(statearr_24659_24671[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24672 = state_24639;
state_24639 = G__24672;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21466__auto__ = function(state_24639){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21466__auto____1.call(this,state_24639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21466__auto____0;
figwheel$client$file_reloading$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21466__auto____1;
return figwheel$client$file_reloading$state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto__))
})();
var state__21579__auto__ = (function (){var statearr_24660 = f__21578__auto__.call(null);
(statearr_24660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto__);

return statearr_24660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto__))
);

return c__21577__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24673,callback){
var map__24676 = p__24673;
var map__24676__$1 = ((((!((map__24676 == null)))?((((map__24676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24676):map__24676);
var file_msg = map__24676__$1;
var namespace = cljs.core.get.call(null,map__24676__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24676,map__24676__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24676,map__24676__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24678){
var map__24681 = p__24678;
var map__24681__$1 = ((((!((map__24681 == null)))?((((map__24681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24681):map__24681);
var file_msg = map__24681__$1;
var namespace = cljs.core.get.call(null,map__24681__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24683,callback){
var map__24686 = p__24683;
var map__24686__$1 = ((((!((map__24686 == null)))?((((map__24686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24686):map__24686);
var file_msg = map__24686__$1;
var request_url = cljs.core.get.call(null,map__24686__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24686__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21577__auto___24774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto___24774,out){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto___24774,out){
return (function (state_24756){
var state_val_24757 = (state_24756[(1)]);
if((state_val_24757 === (1))){
var inst_24734 = cljs.core.nth.call(null,files,(0),null);
var inst_24735 = cljs.core.nthnext.call(null,files,(1));
var inst_24736 = files;
var state_24756__$1 = (function (){var statearr_24758 = state_24756;
(statearr_24758[(7)] = inst_24735);

(statearr_24758[(8)] = inst_24734);

(statearr_24758[(9)] = inst_24736);

return statearr_24758;
})();
var statearr_24759_24775 = state_24756__$1;
(statearr_24759_24775[(2)] = null);

(statearr_24759_24775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24757 === (2))){
var inst_24736 = (state_24756[(9)]);
var inst_24739 = (state_24756[(10)]);
var inst_24739__$1 = cljs.core.nth.call(null,inst_24736,(0),null);
var inst_24740 = cljs.core.nthnext.call(null,inst_24736,(1));
var inst_24741 = (inst_24739__$1 == null);
var inst_24742 = cljs.core.not.call(null,inst_24741);
var state_24756__$1 = (function (){var statearr_24760 = state_24756;
(statearr_24760[(10)] = inst_24739__$1);

(statearr_24760[(11)] = inst_24740);

return statearr_24760;
})();
if(inst_24742){
var statearr_24761_24776 = state_24756__$1;
(statearr_24761_24776[(1)] = (4));

} else {
var statearr_24762_24777 = state_24756__$1;
(statearr_24762_24777[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24757 === (3))){
var inst_24754 = (state_24756[(2)]);
var state_24756__$1 = state_24756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24756__$1,inst_24754);
} else {
if((state_val_24757 === (4))){
var inst_24739 = (state_24756[(10)]);
var inst_24744 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24739);
var state_24756__$1 = state_24756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24756__$1,(7),inst_24744);
} else {
if((state_val_24757 === (5))){
var inst_24750 = cljs.core.async.close_BANG_.call(null,out);
var state_24756__$1 = state_24756;
var statearr_24763_24778 = state_24756__$1;
(statearr_24763_24778[(2)] = inst_24750);

(statearr_24763_24778[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24757 === (6))){
var inst_24752 = (state_24756[(2)]);
var state_24756__$1 = state_24756;
var statearr_24764_24779 = state_24756__$1;
(statearr_24764_24779[(2)] = inst_24752);

(statearr_24764_24779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24757 === (7))){
var inst_24740 = (state_24756[(11)]);
var inst_24746 = (state_24756[(2)]);
var inst_24747 = cljs.core.async.put_BANG_.call(null,out,inst_24746);
var inst_24736 = inst_24740;
var state_24756__$1 = (function (){var statearr_24765 = state_24756;
(statearr_24765[(12)] = inst_24747);

(statearr_24765[(9)] = inst_24736);

return statearr_24765;
})();
var statearr_24766_24780 = state_24756__$1;
(statearr_24766_24780[(2)] = null);

(statearr_24766_24780[(1)] = (2));


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
});})(c__21577__auto___24774,out))
;
return ((function (switch__21465__auto__,c__21577__auto___24774,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21466__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21466__auto____0 = (function (){
var statearr_24770 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24770[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21466__auto__);

(statearr_24770[(1)] = (1));

return statearr_24770;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21466__auto____1 = (function (state_24756){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_24756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e24771){if((e24771 instanceof Object)){
var ex__21469__auto__ = e24771;
var statearr_24772_24781 = state_24756;
(statearr_24772_24781[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24782 = state_24756;
state_24756 = G__24782;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21466__auto__ = function(state_24756){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21466__auto____1.call(this,state_24756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21466__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21466__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto___24774,out))
})();
var state__21579__auto__ = (function (){var statearr_24773 = f__21578__auto__.call(null);
(statearr_24773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto___24774);

return statearr_24773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto___24774,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24783,opts){
var map__24787 = p__24783;
var map__24787__$1 = ((((!((map__24787 == null)))?((((map__24787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24787):map__24787);
var eval_body__$1 = cljs.core.get.call(null,map__24787__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24787__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e24789){var e = e24789;
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
return (function (p1__24790_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24790_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__24795){
var vec__24796 = p__24795;
var k = cljs.core.nth.call(null,vec__24796,(0),null);
var v = cljs.core.nth.call(null,vec__24796,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24797){
var vec__24798 = p__24797;
var k = cljs.core.nth.call(null,vec__24798,(0),null);
var v = cljs.core.nth.call(null,vec__24798,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24802,p__24803){
var map__25050 = p__24802;
var map__25050__$1 = ((((!((map__25050 == null)))?((((map__25050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25050):map__25050);
var opts = map__25050__$1;
var before_jsload = cljs.core.get.call(null,map__25050__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25050__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25050__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25051 = p__24803;
var map__25051__$1 = ((((!((map__25051 == null)))?((((map__25051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25051):map__25051);
var msg = map__25051__$1;
var files = cljs.core.get.call(null,map__25051__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25051__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25051__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25204){
var state_val_25205 = (state_25204[(1)]);
if((state_val_25205 === (7))){
var inst_25065 = (state_25204[(7)]);
var inst_25068 = (state_25204[(8)]);
var inst_25066 = (state_25204[(9)]);
var inst_25067 = (state_25204[(10)]);
var inst_25073 = cljs.core._nth.call(null,inst_25066,inst_25068);
var inst_25074 = figwheel.client.file_reloading.eval_body.call(null,inst_25073,opts);
var inst_25075 = (inst_25068 + (1));
var tmp25206 = inst_25065;
var tmp25207 = inst_25066;
var tmp25208 = inst_25067;
var inst_25065__$1 = tmp25206;
var inst_25066__$1 = tmp25207;
var inst_25067__$1 = tmp25208;
var inst_25068__$1 = inst_25075;
var state_25204__$1 = (function (){var statearr_25209 = state_25204;
(statearr_25209[(7)] = inst_25065__$1);

(statearr_25209[(11)] = inst_25074);

(statearr_25209[(8)] = inst_25068__$1);

(statearr_25209[(9)] = inst_25066__$1);

(statearr_25209[(10)] = inst_25067__$1);

return statearr_25209;
})();
var statearr_25210_25296 = state_25204__$1;
(statearr_25210_25296[(2)] = null);

(statearr_25210_25296[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (20))){
var inst_25108 = (state_25204[(12)]);
var inst_25116 = figwheel.client.file_reloading.sort_files.call(null,inst_25108);
var state_25204__$1 = state_25204;
var statearr_25211_25297 = state_25204__$1;
(statearr_25211_25297[(2)] = inst_25116);

(statearr_25211_25297[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (27))){
var state_25204__$1 = state_25204;
var statearr_25212_25298 = state_25204__$1;
(statearr_25212_25298[(2)] = null);

(statearr_25212_25298[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (1))){
var inst_25057 = (state_25204[(13)]);
var inst_25054 = before_jsload.call(null,files);
var inst_25055 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25056 = (function (){return ((function (inst_25057,inst_25054,inst_25055,state_val_25205,c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24799_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24799_SHARP_);
});
;})(inst_25057,inst_25054,inst_25055,state_val_25205,c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25057__$1 = cljs.core.filter.call(null,inst_25056,files);
var inst_25058 = cljs.core.not_empty.call(null,inst_25057__$1);
var state_25204__$1 = (function (){var statearr_25213 = state_25204;
(statearr_25213[(14)] = inst_25054);

(statearr_25213[(15)] = inst_25055);

(statearr_25213[(13)] = inst_25057__$1);

return statearr_25213;
})();
if(cljs.core.truth_(inst_25058)){
var statearr_25214_25299 = state_25204__$1;
(statearr_25214_25299[(1)] = (2));

} else {
var statearr_25215_25300 = state_25204__$1;
(statearr_25215_25300[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (24))){
var state_25204__$1 = state_25204;
var statearr_25216_25301 = state_25204__$1;
(statearr_25216_25301[(2)] = null);

(statearr_25216_25301[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (39))){
var inst_25158 = (state_25204[(16)]);
var state_25204__$1 = state_25204;
var statearr_25217_25302 = state_25204__$1;
(statearr_25217_25302[(2)] = inst_25158);

(statearr_25217_25302[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (46))){
var inst_25199 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
var statearr_25218_25303 = state_25204__$1;
(statearr_25218_25303[(2)] = inst_25199);

(statearr_25218_25303[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (4))){
var inst_25102 = (state_25204[(2)]);
var inst_25103 = cljs.core.List.EMPTY;
var inst_25104 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25103);
var inst_25105 = (function (){return ((function (inst_25102,inst_25103,inst_25104,state_val_25205,c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24800_SHARP_){
var and__18447__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24800_SHARP_);
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24800_SHARP_));
} else {
return and__18447__auto__;
}
});
;})(inst_25102,inst_25103,inst_25104,state_val_25205,c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25106 = cljs.core.filter.call(null,inst_25105,files);
var inst_25107 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25108 = cljs.core.concat.call(null,inst_25106,inst_25107);
var state_25204__$1 = (function (){var statearr_25219 = state_25204;
(statearr_25219[(17)] = inst_25104);

(statearr_25219[(12)] = inst_25108);

(statearr_25219[(18)] = inst_25102);

return statearr_25219;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25220_25304 = state_25204__$1;
(statearr_25220_25304[(1)] = (16));

} else {
var statearr_25221_25305 = state_25204__$1;
(statearr_25221_25305[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (15))){
var inst_25092 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
var statearr_25222_25306 = state_25204__$1;
(statearr_25222_25306[(2)] = inst_25092);

(statearr_25222_25306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (21))){
var inst_25118 = (state_25204[(19)]);
var inst_25118__$1 = (state_25204[(2)]);
var inst_25119 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25118__$1);
var state_25204__$1 = (function (){var statearr_25223 = state_25204;
(statearr_25223[(19)] = inst_25118__$1);

return statearr_25223;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25204__$1,(22),inst_25119);
} else {
if((state_val_25205 === (31))){
var inst_25202 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25204__$1,inst_25202);
} else {
if((state_val_25205 === (32))){
var inst_25158 = (state_25204[(16)]);
var inst_25163 = inst_25158.cljs$lang$protocol_mask$partition0$;
var inst_25164 = (inst_25163 & (64));
var inst_25165 = inst_25158.cljs$core$ISeq$;
var inst_25166 = (inst_25164) || (inst_25165);
var state_25204__$1 = state_25204;
if(cljs.core.truth_(inst_25166)){
var statearr_25224_25307 = state_25204__$1;
(statearr_25224_25307[(1)] = (35));

} else {
var statearr_25225_25308 = state_25204__$1;
(statearr_25225_25308[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (40))){
var inst_25179 = (state_25204[(20)]);
var inst_25178 = (state_25204[(2)]);
var inst_25179__$1 = cljs.core.get.call(null,inst_25178,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25180 = cljs.core.get.call(null,inst_25178,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25181 = cljs.core.not_empty.call(null,inst_25179__$1);
var state_25204__$1 = (function (){var statearr_25226 = state_25204;
(statearr_25226[(20)] = inst_25179__$1);

(statearr_25226[(21)] = inst_25180);

return statearr_25226;
})();
if(cljs.core.truth_(inst_25181)){
var statearr_25227_25309 = state_25204__$1;
(statearr_25227_25309[(1)] = (41));

} else {
var statearr_25228_25310 = state_25204__$1;
(statearr_25228_25310[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (33))){
var state_25204__$1 = state_25204;
var statearr_25229_25311 = state_25204__$1;
(statearr_25229_25311[(2)] = false);

(statearr_25229_25311[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (13))){
var inst_25078 = (state_25204[(22)]);
var inst_25082 = cljs.core.chunk_first.call(null,inst_25078);
var inst_25083 = cljs.core.chunk_rest.call(null,inst_25078);
var inst_25084 = cljs.core.count.call(null,inst_25082);
var inst_25065 = inst_25083;
var inst_25066 = inst_25082;
var inst_25067 = inst_25084;
var inst_25068 = (0);
var state_25204__$1 = (function (){var statearr_25230 = state_25204;
(statearr_25230[(7)] = inst_25065);

(statearr_25230[(8)] = inst_25068);

(statearr_25230[(9)] = inst_25066);

(statearr_25230[(10)] = inst_25067);

return statearr_25230;
})();
var statearr_25231_25312 = state_25204__$1;
(statearr_25231_25312[(2)] = null);

(statearr_25231_25312[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (22))){
var inst_25121 = (state_25204[(23)]);
var inst_25126 = (state_25204[(24)]);
var inst_25118 = (state_25204[(19)]);
var inst_25122 = (state_25204[(25)]);
var inst_25121__$1 = (state_25204[(2)]);
var inst_25122__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25121__$1);
var inst_25123 = (function (){var all_files = inst_25118;
var res_SINGLEQUOTE_ = inst_25121__$1;
var res = inst_25122__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25121,inst_25126,inst_25118,inst_25122,inst_25121__$1,inst_25122__$1,state_val_25205,c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24801_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24801_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25121,inst_25126,inst_25118,inst_25122,inst_25121__$1,inst_25122__$1,state_val_25205,c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25124 = cljs.core.filter.call(null,inst_25123,inst_25121__$1);
var inst_25125 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25126__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25125);
var inst_25127 = cljs.core.not_empty.call(null,inst_25126__$1);
var state_25204__$1 = (function (){var statearr_25232 = state_25204;
(statearr_25232[(26)] = inst_25124);

(statearr_25232[(23)] = inst_25121__$1);

(statearr_25232[(24)] = inst_25126__$1);

(statearr_25232[(25)] = inst_25122__$1);

return statearr_25232;
})();
if(cljs.core.truth_(inst_25127)){
var statearr_25233_25313 = state_25204__$1;
(statearr_25233_25313[(1)] = (23));

} else {
var statearr_25234_25314 = state_25204__$1;
(statearr_25234_25314[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (36))){
var state_25204__$1 = state_25204;
var statearr_25235_25315 = state_25204__$1;
(statearr_25235_25315[(2)] = false);

(statearr_25235_25315[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (41))){
var inst_25179 = (state_25204[(20)]);
var inst_25183 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25184 = cljs.core.map.call(null,inst_25183,inst_25179);
var inst_25185 = cljs.core.pr_str.call(null,inst_25184);
var inst_25186 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25185)].join('');
var inst_25187 = figwheel.client.utils.log.call(null,inst_25186);
var state_25204__$1 = state_25204;
var statearr_25236_25316 = state_25204__$1;
(statearr_25236_25316[(2)] = inst_25187);

(statearr_25236_25316[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (43))){
var inst_25180 = (state_25204[(21)]);
var inst_25190 = (state_25204[(2)]);
var inst_25191 = cljs.core.not_empty.call(null,inst_25180);
var state_25204__$1 = (function (){var statearr_25237 = state_25204;
(statearr_25237[(27)] = inst_25190);

return statearr_25237;
})();
if(cljs.core.truth_(inst_25191)){
var statearr_25238_25317 = state_25204__$1;
(statearr_25238_25317[(1)] = (44));

} else {
var statearr_25239_25318 = state_25204__$1;
(statearr_25239_25318[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (29))){
var inst_25124 = (state_25204[(26)]);
var inst_25158 = (state_25204[(16)]);
var inst_25121 = (state_25204[(23)]);
var inst_25126 = (state_25204[(24)]);
var inst_25118 = (state_25204[(19)]);
var inst_25122 = (state_25204[(25)]);
var inst_25154 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25157 = (function (){var all_files = inst_25118;
var res_SINGLEQUOTE_ = inst_25121;
var res = inst_25122;
var files_not_loaded = inst_25124;
var dependencies_that_loaded = inst_25126;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25124,inst_25158,inst_25121,inst_25126,inst_25118,inst_25122,inst_25154,state_val_25205,c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25156){
var map__25240 = p__25156;
var map__25240__$1 = ((((!((map__25240 == null)))?((((map__25240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25240):map__25240);
var namespace = cljs.core.get.call(null,map__25240__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25124,inst_25158,inst_25121,inst_25126,inst_25118,inst_25122,inst_25154,state_val_25205,c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25158__$1 = cljs.core.group_by.call(null,inst_25157,inst_25124);
var inst_25160 = (inst_25158__$1 == null);
var inst_25161 = cljs.core.not.call(null,inst_25160);
var state_25204__$1 = (function (){var statearr_25242 = state_25204;
(statearr_25242[(16)] = inst_25158__$1);

(statearr_25242[(28)] = inst_25154);

return statearr_25242;
})();
if(inst_25161){
var statearr_25243_25319 = state_25204__$1;
(statearr_25243_25319[(1)] = (32));

} else {
var statearr_25244_25320 = state_25204__$1;
(statearr_25244_25320[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (44))){
var inst_25180 = (state_25204[(21)]);
var inst_25193 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25180);
var inst_25194 = cljs.core.pr_str.call(null,inst_25193);
var inst_25195 = [cljs.core.str("not required: "),cljs.core.str(inst_25194)].join('');
var inst_25196 = figwheel.client.utils.log.call(null,inst_25195);
var state_25204__$1 = state_25204;
var statearr_25245_25321 = state_25204__$1;
(statearr_25245_25321[(2)] = inst_25196);

(statearr_25245_25321[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (6))){
var inst_25099 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
var statearr_25246_25322 = state_25204__$1;
(statearr_25246_25322[(2)] = inst_25099);

(statearr_25246_25322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (28))){
var inst_25124 = (state_25204[(26)]);
var inst_25151 = (state_25204[(2)]);
var inst_25152 = cljs.core.not_empty.call(null,inst_25124);
var state_25204__$1 = (function (){var statearr_25247 = state_25204;
(statearr_25247[(29)] = inst_25151);

return statearr_25247;
})();
if(cljs.core.truth_(inst_25152)){
var statearr_25248_25323 = state_25204__$1;
(statearr_25248_25323[(1)] = (29));

} else {
var statearr_25249_25324 = state_25204__$1;
(statearr_25249_25324[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (25))){
var inst_25122 = (state_25204[(25)]);
var inst_25138 = (state_25204[(2)]);
var inst_25139 = cljs.core.not_empty.call(null,inst_25122);
var state_25204__$1 = (function (){var statearr_25250 = state_25204;
(statearr_25250[(30)] = inst_25138);

return statearr_25250;
})();
if(cljs.core.truth_(inst_25139)){
var statearr_25251_25325 = state_25204__$1;
(statearr_25251_25325[(1)] = (26));

} else {
var statearr_25252_25326 = state_25204__$1;
(statearr_25252_25326[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (34))){
var inst_25173 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
if(cljs.core.truth_(inst_25173)){
var statearr_25253_25327 = state_25204__$1;
(statearr_25253_25327[(1)] = (38));

} else {
var statearr_25254_25328 = state_25204__$1;
(statearr_25254_25328[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (17))){
var state_25204__$1 = state_25204;
var statearr_25255_25329 = state_25204__$1;
(statearr_25255_25329[(2)] = recompile_dependents);

(statearr_25255_25329[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (3))){
var state_25204__$1 = state_25204;
var statearr_25256_25330 = state_25204__$1;
(statearr_25256_25330[(2)] = null);

(statearr_25256_25330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (12))){
var inst_25095 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
var statearr_25257_25331 = state_25204__$1;
(statearr_25257_25331[(2)] = inst_25095);

(statearr_25257_25331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (2))){
var inst_25057 = (state_25204[(13)]);
var inst_25064 = cljs.core.seq.call(null,inst_25057);
var inst_25065 = inst_25064;
var inst_25066 = null;
var inst_25067 = (0);
var inst_25068 = (0);
var state_25204__$1 = (function (){var statearr_25258 = state_25204;
(statearr_25258[(7)] = inst_25065);

(statearr_25258[(8)] = inst_25068);

(statearr_25258[(9)] = inst_25066);

(statearr_25258[(10)] = inst_25067);

return statearr_25258;
})();
var statearr_25259_25332 = state_25204__$1;
(statearr_25259_25332[(2)] = null);

(statearr_25259_25332[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (23))){
var inst_25124 = (state_25204[(26)]);
var inst_25121 = (state_25204[(23)]);
var inst_25126 = (state_25204[(24)]);
var inst_25118 = (state_25204[(19)]);
var inst_25122 = (state_25204[(25)]);
var inst_25129 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25131 = (function (){var all_files = inst_25118;
var res_SINGLEQUOTE_ = inst_25121;
var res = inst_25122;
var files_not_loaded = inst_25124;
var dependencies_that_loaded = inst_25126;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25124,inst_25121,inst_25126,inst_25118,inst_25122,inst_25129,state_val_25205,c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25130){
var map__25260 = p__25130;
var map__25260__$1 = ((((!((map__25260 == null)))?((((map__25260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25260):map__25260);
var request_url = cljs.core.get.call(null,map__25260__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25124,inst_25121,inst_25126,inst_25118,inst_25122,inst_25129,state_val_25205,c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25132 = cljs.core.reverse.call(null,inst_25126);
var inst_25133 = cljs.core.map.call(null,inst_25131,inst_25132);
var inst_25134 = cljs.core.pr_str.call(null,inst_25133);
var inst_25135 = figwheel.client.utils.log.call(null,inst_25134);
var state_25204__$1 = (function (){var statearr_25262 = state_25204;
(statearr_25262[(31)] = inst_25129);

return statearr_25262;
})();
var statearr_25263_25333 = state_25204__$1;
(statearr_25263_25333[(2)] = inst_25135);

(statearr_25263_25333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (35))){
var state_25204__$1 = state_25204;
var statearr_25264_25334 = state_25204__$1;
(statearr_25264_25334[(2)] = true);

(statearr_25264_25334[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (19))){
var inst_25108 = (state_25204[(12)]);
var inst_25114 = figwheel.client.file_reloading.expand_files.call(null,inst_25108);
var state_25204__$1 = state_25204;
var statearr_25265_25335 = state_25204__$1;
(statearr_25265_25335[(2)] = inst_25114);

(statearr_25265_25335[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (11))){
var state_25204__$1 = state_25204;
var statearr_25266_25336 = state_25204__$1;
(statearr_25266_25336[(2)] = null);

(statearr_25266_25336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (9))){
var inst_25097 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
var statearr_25267_25337 = state_25204__$1;
(statearr_25267_25337[(2)] = inst_25097);

(statearr_25267_25337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (5))){
var inst_25068 = (state_25204[(8)]);
var inst_25067 = (state_25204[(10)]);
var inst_25070 = (inst_25068 < inst_25067);
var inst_25071 = inst_25070;
var state_25204__$1 = state_25204;
if(cljs.core.truth_(inst_25071)){
var statearr_25268_25338 = state_25204__$1;
(statearr_25268_25338[(1)] = (7));

} else {
var statearr_25269_25339 = state_25204__$1;
(statearr_25269_25339[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (14))){
var inst_25078 = (state_25204[(22)]);
var inst_25087 = cljs.core.first.call(null,inst_25078);
var inst_25088 = figwheel.client.file_reloading.eval_body.call(null,inst_25087,opts);
var inst_25089 = cljs.core.next.call(null,inst_25078);
var inst_25065 = inst_25089;
var inst_25066 = null;
var inst_25067 = (0);
var inst_25068 = (0);
var state_25204__$1 = (function (){var statearr_25270 = state_25204;
(statearr_25270[(7)] = inst_25065);

(statearr_25270[(8)] = inst_25068);

(statearr_25270[(9)] = inst_25066);

(statearr_25270[(10)] = inst_25067);

(statearr_25270[(32)] = inst_25088);

return statearr_25270;
})();
var statearr_25271_25340 = state_25204__$1;
(statearr_25271_25340[(2)] = null);

(statearr_25271_25340[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (45))){
var state_25204__$1 = state_25204;
var statearr_25272_25341 = state_25204__$1;
(statearr_25272_25341[(2)] = null);

(statearr_25272_25341[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (26))){
var inst_25124 = (state_25204[(26)]);
var inst_25121 = (state_25204[(23)]);
var inst_25126 = (state_25204[(24)]);
var inst_25118 = (state_25204[(19)]);
var inst_25122 = (state_25204[(25)]);
var inst_25141 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25143 = (function (){var all_files = inst_25118;
var res_SINGLEQUOTE_ = inst_25121;
var res = inst_25122;
var files_not_loaded = inst_25124;
var dependencies_that_loaded = inst_25126;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25124,inst_25121,inst_25126,inst_25118,inst_25122,inst_25141,state_val_25205,c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25142){
var map__25273 = p__25142;
var map__25273__$1 = ((((!((map__25273 == null)))?((((map__25273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25273):map__25273);
var namespace = cljs.core.get.call(null,map__25273__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25273__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25124,inst_25121,inst_25126,inst_25118,inst_25122,inst_25141,state_val_25205,c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25144 = cljs.core.map.call(null,inst_25143,inst_25122);
var inst_25145 = cljs.core.pr_str.call(null,inst_25144);
var inst_25146 = figwheel.client.utils.log.call(null,inst_25145);
var inst_25147 = (function (){var all_files = inst_25118;
var res_SINGLEQUOTE_ = inst_25121;
var res = inst_25122;
var files_not_loaded = inst_25124;
var dependencies_that_loaded = inst_25126;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25124,inst_25121,inst_25126,inst_25118,inst_25122,inst_25141,inst_25143,inst_25144,inst_25145,inst_25146,state_val_25205,c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25124,inst_25121,inst_25126,inst_25118,inst_25122,inst_25141,inst_25143,inst_25144,inst_25145,inst_25146,state_val_25205,c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25148 = setTimeout(inst_25147,(10));
var state_25204__$1 = (function (){var statearr_25275 = state_25204;
(statearr_25275[(33)] = inst_25141);

(statearr_25275[(34)] = inst_25146);

return statearr_25275;
})();
var statearr_25276_25342 = state_25204__$1;
(statearr_25276_25342[(2)] = inst_25148);

(statearr_25276_25342[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (16))){
var state_25204__$1 = state_25204;
var statearr_25277_25343 = state_25204__$1;
(statearr_25277_25343[(2)] = reload_dependents);

(statearr_25277_25343[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (38))){
var inst_25158 = (state_25204[(16)]);
var inst_25175 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25158);
var state_25204__$1 = state_25204;
var statearr_25278_25344 = state_25204__$1;
(statearr_25278_25344[(2)] = inst_25175);

(statearr_25278_25344[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (30))){
var state_25204__$1 = state_25204;
var statearr_25279_25345 = state_25204__$1;
(statearr_25279_25345[(2)] = null);

(statearr_25279_25345[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (10))){
var inst_25078 = (state_25204[(22)]);
var inst_25080 = cljs.core.chunked_seq_QMARK_.call(null,inst_25078);
var state_25204__$1 = state_25204;
if(inst_25080){
var statearr_25280_25346 = state_25204__$1;
(statearr_25280_25346[(1)] = (13));

} else {
var statearr_25281_25347 = state_25204__$1;
(statearr_25281_25347[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (18))){
var inst_25112 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
if(cljs.core.truth_(inst_25112)){
var statearr_25282_25348 = state_25204__$1;
(statearr_25282_25348[(1)] = (19));

} else {
var statearr_25283_25349 = state_25204__$1;
(statearr_25283_25349[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (42))){
var state_25204__$1 = state_25204;
var statearr_25284_25350 = state_25204__$1;
(statearr_25284_25350[(2)] = null);

(statearr_25284_25350[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (37))){
var inst_25170 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
var statearr_25285_25351 = state_25204__$1;
(statearr_25285_25351[(2)] = inst_25170);

(statearr_25285_25351[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (8))){
var inst_25065 = (state_25204[(7)]);
var inst_25078 = (state_25204[(22)]);
var inst_25078__$1 = cljs.core.seq.call(null,inst_25065);
var state_25204__$1 = (function (){var statearr_25286 = state_25204;
(statearr_25286[(22)] = inst_25078__$1);

return statearr_25286;
})();
if(inst_25078__$1){
var statearr_25287_25352 = state_25204__$1;
(statearr_25287_25352[(1)] = (10));

} else {
var statearr_25288_25353 = state_25204__$1;
(statearr_25288_25353[(1)] = (11));

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
});})(c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21465__auto__,c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21466__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21466__auto____0 = (function (){
var statearr_25292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25292[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21466__auto__);

(statearr_25292[(1)] = (1));

return statearr_25292;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21466__auto____1 = (function (state_25204){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_25204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e25293){if((e25293 instanceof Object)){
var ex__21469__auto__ = e25293;
var statearr_25294_25354 = state_25204;
(statearr_25294_25354[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25355 = state_25204;
state_25204 = G__25355;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21466__auto__ = function(state_25204){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21466__auto____1.call(this,state_25204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21466__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21466__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21579__auto__ = (function (){var statearr_25295 = f__21578__auto__.call(null);
(statearr_25295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto__);

return statearr_25295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto__,map__25050,map__25050__$1,opts,before_jsload,on_jsload,reload_dependents,map__25051,map__25051__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21577__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25358,link){
var map__25361 = p__25358;
var map__25361__$1 = ((((!((map__25361 == null)))?((((map__25361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25361):map__25361);
var file = cljs.core.get.call(null,map__25361__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__25361,map__25361__$1,file){
return (function (p1__25356_SHARP_,p2__25357_SHARP_){
if(cljs.core._EQ_.call(null,p1__25356_SHARP_,p2__25357_SHARP_)){
return p1__25356_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__25361,map__25361__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25367){
var map__25368 = p__25367;
var map__25368__$1 = ((((!((map__25368 == null)))?((((map__25368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25368):map__25368);
var match_length = cljs.core.get.call(null,map__25368__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25368__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25363_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25363_SHARP_);
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
var args25370 = [];
var len__19529__auto___25373 = arguments.length;
var i__19530__auto___25374 = (0);
while(true){
if((i__19530__auto___25374 < len__19529__auto___25373)){
args25370.push((arguments[i__19530__auto___25374]));

var G__25375 = (i__19530__auto___25374 + (1));
i__19530__auto___25374 = G__25375;
continue;
} else {
}
break;
}

var G__25372 = args25370.length;
switch (G__25372) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25370.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25377_SHARP_,p2__25378_SHARP_){
return cljs.core.assoc.call(null,p1__25377_SHARP_,cljs.core.get.call(null,p2__25378_SHARP_,key),p2__25378_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25379){
var map__25382 = p__25379;
var map__25382__$1 = ((((!((map__25382 == null)))?((((map__25382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25382):map__25382);
var f_data = map__25382__$1;
var file = cljs.core.get.call(null,map__25382__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25384,files_msg){
var map__25391 = p__25384;
var map__25391__$1 = ((((!((map__25391 == null)))?((((map__25391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25391):map__25391);
var opts = map__25391__$1;
var on_cssload = cljs.core.get.call(null,map__25391__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25393_25397 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25394_25398 = null;
var count__25395_25399 = (0);
var i__25396_25400 = (0);
while(true){
if((i__25396_25400 < count__25395_25399)){
var f_25401 = cljs.core._nth.call(null,chunk__25394_25398,i__25396_25400);
figwheel.client.file_reloading.reload_css_file.call(null,f_25401);

var G__25402 = seq__25393_25397;
var G__25403 = chunk__25394_25398;
var G__25404 = count__25395_25399;
var G__25405 = (i__25396_25400 + (1));
seq__25393_25397 = G__25402;
chunk__25394_25398 = G__25403;
count__25395_25399 = G__25404;
i__25396_25400 = G__25405;
continue;
} else {
var temp__4657__auto___25406 = cljs.core.seq.call(null,seq__25393_25397);
if(temp__4657__auto___25406){
var seq__25393_25407__$1 = temp__4657__auto___25406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25393_25407__$1)){
var c__19270__auto___25408 = cljs.core.chunk_first.call(null,seq__25393_25407__$1);
var G__25409 = cljs.core.chunk_rest.call(null,seq__25393_25407__$1);
var G__25410 = c__19270__auto___25408;
var G__25411 = cljs.core.count.call(null,c__19270__auto___25408);
var G__25412 = (0);
seq__25393_25397 = G__25409;
chunk__25394_25398 = G__25410;
count__25395_25399 = G__25411;
i__25396_25400 = G__25412;
continue;
} else {
var f_25413 = cljs.core.first.call(null,seq__25393_25407__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25413);

var G__25414 = cljs.core.next.call(null,seq__25393_25407__$1);
var G__25415 = null;
var G__25416 = (0);
var G__25417 = (0);
seq__25393_25397 = G__25414;
chunk__25394_25398 = G__25415;
count__25395_25399 = G__25416;
i__25396_25400 = G__25417;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25391,map__25391__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25391,map__25391__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1505303971957