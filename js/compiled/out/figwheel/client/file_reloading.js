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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24462_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24462_SHARP_));
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
var seq__24467 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24468 = null;
var count__24469 = (0);
var i__24470 = (0);
while(true){
if((i__24470 < count__24469)){
var n = cljs.core._nth.call(null,chunk__24468,i__24470);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24471 = seq__24467;
var G__24472 = chunk__24468;
var G__24473 = count__24469;
var G__24474 = (i__24470 + (1));
seq__24467 = G__24471;
chunk__24468 = G__24472;
count__24469 = G__24473;
i__24470 = G__24474;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24467);
if(temp__4657__auto__){
var seq__24467__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24467__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__24467__$1);
var G__24475 = cljs.core.chunk_rest.call(null,seq__24467__$1);
var G__24476 = c__19270__auto__;
var G__24477 = cljs.core.count.call(null,c__19270__auto__);
var G__24478 = (0);
seq__24467 = G__24475;
chunk__24468 = G__24476;
count__24469 = G__24477;
i__24470 = G__24478;
continue;
} else {
var n = cljs.core.first.call(null,seq__24467__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24479 = cljs.core.next.call(null,seq__24467__$1);
var G__24480 = null;
var G__24481 = (0);
var G__24482 = (0);
seq__24467 = G__24479;
chunk__24468 = G__24480;
count__24469 = G__24481;
i__24470 = G__24482;
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

var seq__24521_24528 = cljs.core.seq.call(null,deps);
var chunk__24522_24529 = null;
var count__24523_24530 = (0);
var i__24524_24531 = (0);
while(true){
if((i__24524_24531 < count__24523_24530)){
var dep_24532 = cljs.core._nth.call(null,chunk__24522_24529,i__24524_24531);
topo_sort_helper_STAR_.call(null,dep_24532,(depth + (1)),state);

var G__24533 = seq__24521_24528;
var G__24534 = chunk__24522_24529;
var G__24535 = count__24523_24530;
var G__24536 = (i__24524_24531 + (1));
seq__24521_24528 = G__24533;
chunk__24522_24529 = G__24534;
count__24523_24530 = G__24535;
i__24524_24531 = G__24536;
continue;
} else {
var temp__4657__auto___24537 = cljs.core.seq.call(null,seq__24521_24528);
if(temp__4657__auto___24537){
var seq__24521_24538__$1 = temp__4657__auto___24537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24521_24538__$1)){
var c__19270__auto___24539 = cljs.core.chunk_first.call(null,seq__24521_24538__$1);
var G__24540 = cljs.core.chunk_rest.call(null,seq__24521_24538__$1);
var G__24541 = c__19270__auto___24539;
var G__24542 = cljs.core.count.call(null,c__19270__auto___24539);
var G__24543 = (0);
seq__24521_24528 = G__24540;
chunk__24522_24529 = G__24541;
count__24523_24530 = G__24542;
i__24524_24531 = G__24543;
continue;
} else {
var dep_24544 = cljs.core.first.call(null,seq__24521_24538__$1);
topo_sort_helper_STAR_.call(null,dep_24544,(depth + (1)),state);

var G__24545 = cljs.core.next.call(null,seq__24521_24538__$1);
var G__24546 = null;
var G__24547 = (0);
var G__24548 = (0);
seq__24521_24528 = G__24545;
chunk__24522_24529 = G__24546;
count__24523_24530 = G__24547;
i__24524_24531 = G__24548;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24525){
var vec__24527 = p__24525;
var x = cljs.core.nth.call(null,vec__24527,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24527,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24527,x,xs,get_deps__$1){
return (function (p1__24483_SHARP_){
return clojure.set.difference.call(null,p1__24483_SHARP_,x);
});})(vec__24527,x,xs,get_deps__$1))
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
var seq__24561 = cljs.core.seq.call(null,provides);
var chunk__24562 = null;
var count__24563 = (0);
var i__24564 = (0);
while(true){
if((i__24564 < count__24563)){
var prov = cljs.core._nth.call(null,chunk__24562,i__24564);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24565_24573 = cljs.core.seq.call(null,requires);
var chunk__24566_24574 = null;
var count__24567_24575 = (0);
var i__24568_24576 = (0);
while(true){
if((i__24568_24576 < count__24567_24575)){
var req_24577 = cljs.core._nth.call(null,chunk__24566_24574,i__24568_24576);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24577,prov);

var G__24578 = seq__24565_24573;
var G__24579 = chunk__24566_24574;
var G__24580 = count__24567_24575;
var G__24581 = (i__24568_24576 + (1));
seq__24565_24573 = G__24578;
chunk__24566_24574 = G__24579;
count__24567_24575 = G__24580;
i__24568_24576 = G__24581;
continue;
} else {
var temp__4657__auto___24582 = cljs.core.seq.call(null,seq__24565_24573);
if(temp__4657__auto___24582){
var seq__24565_24583__$1 = temp__4657__auto___24582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24565_24583__$1)){
var c__19270__auto___24584 = cljs.core.chunk_first.call(null,seq__24565_24583__$1);
var G__24585 = cljs.core.chunk_rest.call(null,seq__24565_24583__$1);
var G__24586 = c__19270__auto___24584;
var G__24587 = cljs.core.count.call(null,c__19270__auto___24584);
var G__24588 = (0);
seq__24565_24573 = G__24585;
chunk__24566_24574 = G__24586;
count__24567_24575 = G__24587;
i__24568_24576 = G__24588;
continue;
} else {
var req_24589 = cljs.core.first.call(null,seq__24565_24583__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24589,prov);

var G__24590 = cljs.core.next.call(null,seq__24565_24583__$1);
var G__24591 = null;
var G__24592 = (0);
var G__24593 = (0);
seq__24565_24573 = G__24590;
chunk__24566_24574 = G__24591;
count__24567_24575 = G__24592;
i__24568_24576 = G__24593;
continue;
}
} else {
}
}
break;
}

var G__24594 = seq__24561;
var G__24595 = chunk__24562;
var G__24596 = count__24563;
var G__24597 = (i__24564 + (1));
seq__24561 = G__24594;
chunk__24562 = G__24595;
count__24563 = G__24596;
i__24564 = G__24597;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24561);
if(temp__4657__auto__){
var seq__24561__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24561__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__24561__$1);
var G__24598 = cljs.core.chunk_rest.call(null,seq__24561__$1);
var G__24599 = c__19270__auto__;
var G__24600 = cljs.core.count.call(null,c__19270__auto__);
var G__24601 = (0);
seq__24561 = G__24598;
chunk__24562 = G__24599;
count__24563 = G__24600;
i__24564 = G__24601;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24561__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24569_24602 = cljs.core.seq.call(null,requires);
var chunk__24570_24603 = null;
var count__24571_24604 = (0);
var i__24572_24605 = (0);
while(true){
if((i__24572_24605 < count__24571_24604)){
var req_24606 = cljs.core._nth.call(null,chunk__24570_24603,i__24572_24605);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24606,prov);

var G__24607 = seq__24569_24602;
var G__24608 = chunk__24570_24603;
var G__24609 = count__24571_24604;
var G__24610 = (i__24572_24605 + (1));
seq__24569_24602 = G__24607;
chunk__24570_24603 = G__24608;
count__24571_24604 = G__24609;
i__24572_24605 = G__24610;
continue;
} else {
var temp__4657__auto___24611__$1 = cljs.core.seq.call(null,seq__24569_24602);
if(temp__4657__auto___24611__$1){
var seq__24569_24612__$1 = temp__4657__auto___24611__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24569_24612__$1)){
var c__19270__auto___24613 = cljs.core.chunk_first.call(null,seq__24569_24612__$1);
var G__24614 = cljs.core.chunk_rest.call(null,seq__24569_24612__$1);
var G__24615 = c__19270__auto___24613;
var G__24616 = cljs.core.count.call(null,c__19270__auto___24613);
var G__24617 = (0);
seq__24569_24602 = G__24614;
chunk__24570_24603 = G__24615;
count__24571_24604 = G__24616;
i__24572_24605 = G__24617;
continue;
} else {
var req_24618 = cljs.core.first.call(null,seq__24569_24612__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24618,prov);

var G__24619 = cljs.core.next.call(null,seq__24569_24612__$1);
var G__24620 = null;
var G__24621 = (0);
var G__24622 = (0);
seq__24569_24602 = G__24619;
chunk__24570_24603 = G__24620;
count__24571_24604 = G__24621;
i__24572_24605 = G__24622;
continue;
}
} else {
}
}
break;
}

var G__24623 = cljs.core.next.call(null,seq__24561__$1);
var G__24624 = null;
var G__24625 = (0);
var G__24626 = (0);
seq__24561 = G__24623;
chunk__24562 = G__24624;
count__24563 = G__24625;
i__24564 = G__24626;
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
var seq__24631_24635 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24632_24636 = null;
var count__24633_24637 = (0);
var i__24634_24638 = (0);
while(true){
if((i__24634_24638 < count__24633_24637)){
var ns_24639 = cljs.core._nth.call(null,chunk__24632_24636,i__24634_24638);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24639);

var G__24640 = seq__24631_24635;
var G__24641 = chunk__24632_24636;
var G__24642 = count__24633_24637;
var G__24643 = (i__24634_24638 + (1));
seq__24631_24635 = G__24640;
chunk__24632_24636 = G__24641;
count__24633_24637 = G__24642;
i__24634_24638 = G__24643;
continue;
} else {
var temp__4657__auto___24644 = cljs.core.seq.call(null,seq__24631_24635);
if(temp__4657__auto___24644){
var seq__24631_24645__$1 = temp__4657__auto___24644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24631_24645__$1)){
var c__19270__auto___24646 = cljs.core.chunk_first.call(null,seq__24631_24645__$1);
var G__24647 = cljs.core.chunk_rest.call(null,seq__24631_24645__$1);
var G__24648 = c__19270__auto___24646;
var G__24649 = cljs.core.count.call(null,c__19270__auto___24646);
var G__24650 = (0);
seq__24631_24635 = G__24647;
chunk__24632_24636 = G__24648;
count__24633_24637 = G__24649;
i__24634_24638 = G__24650;
continue;
} else {
var ns_24651 = cljs.core.first.call(null,seq__24631_24645__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24651);

var G__24652 = cljs.core.next.call(null,seq__24631_24645__$1);
var G__24653 = null;
var G__24654 = (0);
var G__24655 = (0);
seq__24631_24635 = G__24652;
chunk__24632_24636 = G__24653;
count__24633_24637 = G__24654;
i__24634_24638 = G__24655;
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
var G__24656__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24656 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24657__i = 0, G__24657__a = new Array(arguments.length -  0);
while (G__24657__i < G__24657__a.length) {G__24657__a[G__24657__i] = arguments[G__24657__i + 0]; ++G__24657__i;}
  args = new cljs.core.IndexedSeq(G__24657__a,0);
} 
return G__24656__delegate.call(this,args);};
G__24656.cljs$lang$maxFixedArity = 0;
G__24656.cljs$lang$applyTo = (function (arglist__24658){
var args = cljs.core.seq(arglist__24658);
return G__24656__delegate(args);
});
G__24656.cljs$core$IFn$_invoke$arity$variadic = G__24656__delegate;
return G__24656;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24660 = cljs.core._EQ_;
var expr__24661 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24660.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24661))){
var path_parts = ((function (pred__24660,expr__24661){
return (function (p1__24659_SHARP_){
return clojure.string.split.call(null,p1__24659_SHARP_,/[\/\\]/);
});})(pred__24660,expr__24661))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24660,expr__24661){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24663){if((e24663 instanceof Error)){
var e = e24663;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24663;

}
}})());
});
;})(path_parts,sep,root,pred__24660,expr__24661))
} else {
if(cljs.core.truth_(pred__24660.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24661))){
return ((function (pred__24660,expr__24661){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24660,expr__24661){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24660,expr__24661))
);

return deferred.addErrback(((function (deferred,pred__24660,expr__24661){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24660,expr__24661))
);
});
;})(pred__24660,expr__24661))
} else {
return ((function (pred__24660,expr__24661){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24660,expr__24661))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24664,callback){
var map__24667 = p__24664;
var map__24667__$1 = ((((!((map__24667 == null)))?((((map__24667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24667):map__24667);
var file_msg = map__24667__$1;
var request_url = cljs.core.get.call(null,map__24667__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24667,map__24667__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24667,map__24667__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__21629__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto__){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto__){
return (function (state_24691){
var state_val_24692 = (state_24691[(1)]);
if((state_val_24692 === (7))){
var inst_24687 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
var statearr_24693_24713 = state_24691__$1;
(statearr_24693_24713[(2)] = inst_24687);

(statearr_24693_24713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (1))){
var state_24691__$1 = state_24691;
var statearr_24694_24714 = state_24691__$1;
(statearr_24694_24714[(2)] = null);

(statearr_24694_24714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (4))){
var inst_24671 = (state_24691[(7)]);
var inst_24671__$1 = (state_24691[(2)]);
var state_24691__$1 = (function (){var statearr_24695 = state_24691;
(statearr_24695[(7)] = inst_24671__$1);

return statearr_24695;
})();
if(cljs.core.truth_(inst_24671__$1)){
var statearr_24696_24715 = state_24691__$1;
(statearr_24696_24715[(1)] = (5));

} else {
var statearr_24697_24716 = state_24691__$1;
(statearr_24697_24716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (6))){
var state_24691__$1 = state_24691;
var statearr_24698_24717 = state_24691__$1;
(statearr_24698_24717[(2)] = null);

(statearr_24698_24717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (3))){
var inst_24689 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24691__$1,inst_24689);
} else {
if((state_val_24692 === (2))){
var state_24691__$1 = state_24691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24691__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24692 === (11))){
var inst_24683 = (state_24691[(2)]);
var state_24691__$1 = (function (){var statearr_24699 = state_24691;
(statearr_24699[(8)] = inst_24683);

return statearr_24699;
})();
var statearr_24700_24718 = state_24691__$1;
(statearr_24700_24718[(2)] = null);

(statearr_24700_24718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (9))){
var inst_24677 = (state_24691[(9)]);
var inst_24675 = (state_24691[(10)]);
var inst_24679 = inst_24677.call(null,inst_24675);
var state_24691__$1 = state_24691;
var statearr_24701_24719 = state_24691__$1;
(statearr_24701_24719[(2)] = inst_24679);

(statearr_24701_24719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (5))){
var inst_24671 = (state_24691[(7)]);
var inst_24673 = figwheel.client.file_reloading.blocking_load.call(null,inst_24671);
var state_24691__$1 = state_24691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24691__$1,(8),inst_24673);
} else {
if((state_val_24692 === (10))){
var inst_24675 = (state_24691[(10)]);
var inst_24681 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24675);
var state_24691__$1 = state_24691;
var statearr_24702_24720 = state_24691__$1;
(statearr_24702_24720[(2)] = inst_24681);

(statearr_24702_24720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (8))){
var inst_24671 = (state_24691[(7)]);
var inst_24677 = (state_24691[(9)]);
var inst_24675 = (state_24691[(2)]);
var inst_24676 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24677__$1 = cljs.core.get.call(null,inst_24676,inst_24671);
var state_24691__$1 = (function (){var statearr_24703 = state_24691;
(statearr_24703[(9)] = inst_24677__$1);

(statearr_24703[(10)] = inst_24675);

return statearr_24703;
})();
if(cljs.core.truth_(inst_24677__$1)){
var statearr_24704_24721 = state_24691__$1;
(statearr_24704_24721[(1)] = (9));

} else {
var statearr_24705_24722 = state_24691__$1;
(statearr_24705_24722[(1)] = (10));

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
});})(c__21629__auto__))
;
return ((function (switch__21517__auto__,c__21629__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21518__auto__ = null;
var figwheel$client$file_reloading$state_machine__21518__auto____0 = (function (){
var statearr_24709 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24709[(0)] = figwheel$client$file_reloading$state_machine__21518__auto__);

(statearr_24709[(1)] = (1));

return statearr_24709;
});
var figwheel$client$file_reloading$state_machine__21518__auto____1 = (function (state_24691){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_24691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e24710){if((e24710 instanceof Object)){
var ex__21521__auto__ = e24710;
var statearr_24711_24723 = state_24691;
(statearr_24711_24723[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24724 = state_24691;
state_24691 = G__24724;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21518__auto__ = function(state_24691){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21518__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21518__auto____1.call(this,state_24691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21518__auto____0;
figwheel$client$file_reloading$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21518__auto____1;
return figwheel$client$file_reloading$state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto__))
})();
var state__21631__auto__ = (function (){var statearr_24712 = f__21630__auto__.call(null);
(statearr_24712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto__);

return statearr_24712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto__))
);

return c__21629__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24725,callback){
var map__24728 = p__24725;
var map__24728__$1 = ((((!((map__24728 == null)))?((((map__24728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24728):map__24728);
var file_msg = map__24728__$1;
var namespace = cljs.core.get.call(null,map__24728__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24728,map__24728__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24728,map__24728__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24730){
var map__24733 = p__24730;
var map__24733__$1 = ((((!((map__24733 == null)))?((((map__24733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24733):map__24733);
var file_msg = map__24733__$1;
var namespace = cljs.core.get.call(null,map__24733__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24735,callback){
var map__24738 = p__24735;
var map__24738__$1 = ((((!((map__24738 == null)))?((((map__24738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24738):map__24738);
var file_msg = map__24738__$1;
var request_url = cljs.core.get.call(null,map__24738__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24738__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21629__auto___24826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto___24826,out){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto___24826,out){
return (function (state_24808){
var state_val_24809 = (state_24808[(1)]);
if((state_val_24809 === (1))){
var inst_24786 = cljs.core.nth.call(null,files,(0),null);
var inst_24787 = cljs.core.nthnext.call(null,files,(1));
var inst_24788 = files;
var state_24808__$1 = (function (){var statearr_24810 = state_24808;
(statearr_24810[(7)] = inst_24788);

(statearr_24810[(8)] = inst_24786);

(statearr_24810[(9)] = inst_24787);

return statearr_24810;
})();
var statearr_24811_24827 = state_24808__$1;
(statearr_24811_24827[(2)] = null);

(statearr_24811_24827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (2))){
var inst_24788 = (state_24808[(7)]);
var inst_24791 = (state_24808[(10)]);
var inst_24791__$1 = cljs.core.nth.call(null,inst_24788,(0),null);
var inst_24792 = cljs.core.nthnext.call(null,inst_24788,(1));
var inst_24793 = (inst_24791__$1 == null);
var inst_24794 = cljs.core.not.call(null,inst_24793);
var state_24808__$1 = (function (){var statearr_24812 = state_24808;
(statearr_24812[(11)] = inst_24792);

(statearr_24812[(10)] = inst_24791__$1);

return statearr_24812;
})();
if(inst_24794){
var statearr_24813_24828 = state_24808__$1;
(statearr_24813_24828[(1)] = (4));

} else {
var statearr_24814_24829 = state_24808__$1;
(statearr_24814_24829[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (3))){
var inst_24806 = (state_24808[(2)]);
var state_24808__$1 = state_24808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24808__$1,inst_24806);
} else {
if((state_val_24809 === (4))){
var inst_24791 = (state_24808[(10)]);
var inst_24796 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24791);
var state_24808__$1 = state_24808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24808__$1,(7),inst_24796);
} else {
if((state_val_24809 === (5))){
var inst_24802 = cljs.core.async.close_BANG_.call(null,out);
var state_24808__$1 = state_24808;
var statearr_24815_24830 = state_24808__$1;
(statearr_24815_24830[(2)] = inst_24802);

(statearr_24815_24830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (6))){
var inst_24804 = (state_24808[(2)]);
var state_24808__$1 = state_24808;
var statearr_24816_24831 = state_24808__$1;
(statearr_24816_24831[(2)] = inst_24804);

(statearr_24816_24831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (7))){
var inst_24792 = (state_24808[(11)]);
var inst_24798 = (state_24808[(2)]);
var inst_24799 = cljs.core.async.put_BANG_.call(null,out,inst_24798);
var inst_24788 = inst_24792;
var state_24808__$1 = (function (){var statearr_24817 = state_24808;
(statearr_24817[(7)] = inst_24788);

(statearr_24817[(12)] = inst_24799);

return statearr_24817;
})();
var statearr_24818_24832 = state_24808__$1;
(statearr_24818_24832[(2)] = null);

(statearr_24818_24832[(1)] = (2));


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
});})(c__21629__auto___24826,out))
;
return ((function (switch__21517__auto__,c__21629__auto___24826,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21518__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21518__auto____0 = (function (){
var statearr_24822 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24822[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21518__auto__);

(statearr_24822[(1)] = (1));

return statearr_24822;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21518__auto____1 = (function (state_24808){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_24808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e24823){if((e24823 instanceof Object)){
var ex__21521__auto__ = e24823;
var statearr_24824_24833 = state_24808;
(statearr_24824_24833[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24834 = state_24808;
state_24808 = G__24834;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21518__auto__ = function(state_24808){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21518__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21518__auto____1.call(this,state_24808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21518__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21518__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto___24826,out))
})();
var state__21631__auto__ = (function (){var statearr_24825 = f__21630__auto__.call(null);
(statearr_24825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto___24826);

return statearr_24825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto___24826,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24835,opts){
var map__24839 = p__24835;
var map__24839__$1 = ((((!((map__24839 == null)))?((((map__24839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24839):map__24839);
var eval_body__$1 = cljs.core.get.call(null,map__24839__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24839__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e24841){var e = e24841;
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
return (function (p1__24842_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24842_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__24847){
var vec__24848 = p__24847;
var k = cljs.core.nth.call(null,vec__24848,(0),null);
var v = cljs.core.nth.call(null,vec__24848,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24849){
var vec__24850 = p__24849;
var k = cljs.core.nth.call(null,vec__24850,(0),null);
var v = cljs.core.nth.call(null,vec__24850,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24854,p__24855){
var map__25102 = p__24854;
var map__25102__$1 = ((((!((map__25102 == null)))?((((map__25102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25102):map__25102);
var opts = map__25102__$1;
var before_jsload = cljs.core.get.call(null,map__25102__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25102__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25102__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25103 = p__24855;
var map__25103__$1 = ((((!((map__25103 == null)))?((((map__25103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25103):map__25103);
var msg = map__25103__$1;
var files = cljs.core.get.call(null,map__25103__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25103__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25103__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21629__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25256){
var state_val_25257 = (state_25256[(1)]);
if((state_val_25257 === (7))){
var inst_25117 = (state_25256[(7)]);
var inst_25118 = (state_25256[(8)]);
var inst_25119 = (state_25256[(9)]);
var inst_25120 = (state_25256[(10)]);
var inst_25125 = cljs.core._nth.call(null,inst_25118,inst_25120);
var inst_25126 = figwheel.client.file_reloading.eval_body.call(null,inst_25125,opts);
var inst_25127 = (inst_25120 + (1));
var tmp25258 = inst_25117;
var tmp25259 = inst_25118;
var tmp25260 = inst_25119;
var inst_25117__$1 = tmp25258;
var inst_25118__$1 = tmp25259;
var inst_25119__$1 = tmp25260;
var inst_25120__$1 = inst_25127;
var state_25256__$1 = (function (){var statearr_25261 = state_25256;
(statearr_25261[(7)] = inst_25117__$1);

(statearr_25261[(11)] = inst_25126);

(statearr_25261[(8)] = inst_25118__$1);

(statearr_25261[(9)] = inst_25119__$1);

(statearr_25261[(10)] = inst_25120__$1);

return statearr_25261;
})();
var statearr_25262_25348 = state_25256__$1;
(statearr_25262_25348[(2)] = null);

(statearr_25262_25348[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (20))){
var inst_25160 = (state_25256[(12)]);
var inst_25168 = figwheel.client.file_reloading.sort_files.call(null,inst_25160);
var state_25256__$1 = state_25256;
var statearr_25263_25349 = state_25256__$1;
(statearr_25263_25349[(2)] = inst_25168);

(statearr_25263_25349[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (27))){
var state_25256__$1 = state_25256;
var statearr_25264_25350 = state_25256__$1;
(statearr_25264_25350[(2)] = null);

(statearr_25264_25350[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (1))){
var inst_25109 = (state_25256[(13)]);
var inst_25106 = before_jsload.call(null,files);
var inst_25107 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25108 = (function (){return ((function (inst_25109,inst_25106,inst_25107,state_val_25257,c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24851_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24851_SHARP_);
});
;})(inst_25109,inst_25106,inst_25107,state_val_25257,c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25109__$1 = cljs.core.filter.call(null,inst_25108,files);
var inst_25110 = cljs.core.not_empty.call(null,inst_25109__$1);
var state_25256__$1 = (function (){var statearr_25265 = state_25256;
(statearr_25265[(14)] = inst_25107);

(statearr_25265[(15)] = inst_25106);

(statearr_25265[(13)] = inst_25109__$1);

return statearr_25265;
})();
if(cljs.core.truth_(inst_25110)){
var statearr_25266_25351 = state_25256__$1;
(statearr_25266_25351[(1)] = (2));

} else {
var statearr_25267_25352 = state_25256__$1;
(statearr_25267_25352[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (24))){
var state_25256__$1 = state_25256;
var statearr_25268_25353 = state_25256__$1;
(statearr_25268_25353[(2)] = null);

(statearr_25268_25353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (39))){
var inst_25210 = (state_25256[(16)]);
var state_25256__$1 = state_25256;
var statearr_25269_25354 = state_25256__$1;
(statearr_25269_25354[(2)] = inst_25210);

(statearr_25269_25354[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (46))){
var inst_25251 = (state_25256[(2)]);
var state_25256__$1 = state_25256;
var statearr_25270_25355 = state_25256__$1;
(statearr_25270_25355[(2)] = inst_25251);

(statearr_25270_25355[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (4))){
var inst_25154 = (state_25256[(2)]);
var inst_25155 = cljs.core.List.EMPTY;
var inst_25156 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25155);
var inst_25157 = (function (){return ((function (inst_25154,inst_25155,inst_25156,state_val_25257,c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24852_SHARP_){
var and__18447__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24852_SHARP_);
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24852_SHARP_));
} else {
return and__18447__auto__;
}
});
;})(inst_25154,inst_25155,inst_25156,state_val_25257,c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25158 = cljs.core.filter.call(null,inst_25157,files);
var inst_25159 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25160 = cljs.core.concat.call(null,inst_25158,inst_25159);
var state_25256__$1 = (function (){var statearr_25271 = state_25256;
(statearr_25271[(12)] = inst_25160);

(statearr_25271[(17)] = inst_25156);

(statearr_25271[(18)] = inst_25154);

return statearr_25271;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25272_25356 = state_25256__$1;
(statearr_25272_25356[(1)] = (16));

} else {
var statearr_25273_25357 = state_25256__$1;
(statearr_25273_25357[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (15))){
var inst_25144 = (state_25256[(2)]);
var state_25256__$1 = state_25256;
var statearr_25274_25358 = state_25256__$1;
(statearr_25274_25358[(2)] = inst_25144);

(statearr_25274_25358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (21))){
var inst_25170 = (state_25256[(19)]);
var inst_25170__$1 = (state_25256[(2)]);
var inst_25171 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25170__$1);
var state_25256__$1 = (function (){var statearr_25275 = state_25256;
(statearr_25275[(19)] = inst_25170__$1);

return statearr_25275;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25256__$1,(22),inst_25171);
} else {
if((state_val_25257 === (31))){
var inst_25254 = (state_25256[(2)]);
var state_25256__$1 = state_25256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25256__$1,inst_25254);
} else {
if((state_val_25257 === (32))){
var inst_25210 = (state_25256[(16)]);
var inst_25215 = inst_25210.cljs$lang$protocol_mask$partition0$;
var inst_25216 = (inst_25215 & (64));
var inst_25217 = inst_25210.cljs$core$ISeq$;
var inst_25218 = (inst_25216) || (inst_25217);
var state_25256__$1 = state_25256;
if(cljs.core.truth_(inst_25218)){
var statearr_25276_25359 = state_25256__$1;
(statearr_25276_25359[(1)] = (35));

} else {
var statearr_25277_25360 = state_25256__$1;
(statearr_25277_25360[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (40))){
var inst_25231 = (state_25256[(20)]);
var inst_25230 = (state_25256[(2)]);
var inst_25231__$1 = cljs.core.get.call(null,inst_25230,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25232 = cljs.core.get.call(null,inst_25230,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25233 = cljs.core.not_empty.call(null,inst_25231__$1);
var state_25256__$1 = (function (){var statearr_25278 = state_25256;
(statearr_25278[(21)] = inst_25232);

(statearr_25278[(20)] = inst_25231__$1);

return statearr_25278;
})();
if(cljs.core.truth_(inst_25233)){
var statearr_25279_25361 = state_25256__$1;
(statearr_25279_25361[(1)] = (41));

} else {
var statearr_25280_25362 = state_25256__$1;
(statearr_25280_25362[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (33))){
var state_25256__$1 = state_25256;
var statearr_25281_25363 = state_25256__$1;
(statearr_25281_25363[(2)] = false);

(statearr_25281_25363[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (13))){
var inst_25130 = (state_25256[(22)]);
var inst_25134 = cljs.core.chunk_first.call(null,inst_25130);
var inst_25135 = cljs.core.chunk_rest.call(null,inst_25130);
var inst_25136 = cljs.core.count.call(null,inst_25134);
var inst_25117 = inst_25135;
var inst_25118 = inst_25134;
var inst_25119 = inst_25136;
var inst_25120 = (0);
var state_25256__$1 = (function (){var statearr_25282 = state_25256;
(statearr_25282[(7)] = inst_25117);

(statearr_25282[(8)] = inst_25118);

(statearr_25282[(9)] = inst_25119);

(statearr_25282[(10)] = inst_25120);

return statearr_25282;
})();
var statearr_25283_25364 = state_25256__$1;
(statearr_25283_25364[(2)] = null);

(statearr_25283_25364[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (22))){
var inst_25173 = (state_25256[(23)]);
var inst_25178 = (state_25256[(24)]);
var inst_25174 = (state_25256[(25)]);
var inst_25170 = (state_25256[(19)]);
var inst_25173__$1 = (state_25256[(2)]);
var inst_25174__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25173__$1);
var inst_25175 = (function (){var all_files = inst_25170;
var res_SINGLEQUOTE_ = inst_25173__$1;
var res = inst_25174__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25173,inst_25178,inst_25174,inst_25170,inst_25173__$1,inst_25174__$1,state_val_25257,c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24853_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24853_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25173,inst_25178,inst_25174,inst_25170,inst_25173__$1,inst_25174__$1,state_val_25257,c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25176 = cljs.core.filter.call(null,inst_25175,inst_25173__$1);
var inst_25177 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25178__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25177);
var inst_25179 = cljs.core.not_empty.call(null,inst_25178__$1);
var state_25256__$1 = (function (){var statearr_25284 = state_25256;
(statearr_25284[(23)] = inst_25173__$1);

(statearr_25284[(24)] = inst_25178__$1);

(statearr_25284[(25)] = inst_25174__$1);

(statearr_25284[(26)] = inst_25176);

return statearr_25284;
})();
if(cljs.core.truth_(inst_25179)){
var statearr_25285_25365 = state_25256__$1;
(statearr_25285_25365[(1)] = (23));

} else {
var statearr_25286_25366 = state_25256__$1;
(statearr_25286_25366[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (36))){
var state_25256__$1 = state_25256;
var statearr_25287_25367 = state_25256__$1;
(statearr_25287_25367[(2)] = false);

(statearr_25287_25367[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (41))){
var inst_25231 = (state_25256[(20)]);
var inst_25235 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25236 = cljs.core.map.call(null,inst_25235,inst_25231);
var inst_25237 = cljs.core.pr_str.call(null,inst_25236);
var inst_25238 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25237)].join('');
var inst_25239 = figwheel.client.utils.log.call(null,inst_25238);
var state_25256__$1 = state_25256;
var statearr_25288_25368 = state_25256__$1;
(statearr_25288_25368[(2)] = inst_25239);

(statearr_25288_25368[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (43))){
var inst_25232 = (state_25256[(21)]);
var inst_25242 = (state_25256[(2)]);
var inst_25243 = cljs.core.not_empty.call(null,inst_25232);
var state_25256__$1 = (function (){var statearr_25289 = state_25256;
(statearr_25289[(27)] = inst_25242);

return statearr_25289;
})();
if(cljs.core.truth_(inst_25243)){
var statearr_25290_25369 = state_25256__$1;
(statearr_25290_25369[(1)] = (44));

} else {
var statearr_25291_25370 = state_25256__$1;
(statearr_25291_25370[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (29))){
var inst_25210 = (state_25256[(16)]);
var inst_25173 = (state_25256[(23)]);
var inst_25178 = (state_25256[(24)]);
var inst_25174 = (state_25256[(25)]);
var inst_25170 = (state_25256[(19)]);
var inst_25176 = (state_25256[(26)]);
var inst_25206 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25209 = (function (){var all_files = inst_25170;
var res_SINGLEQUOTE_ = inst_25173;
var res = inst_25174;
var files_not_loaded = inst_25176;
var dependencies_that_loaded = inst_25178;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25210,inst_25173,inst_25178,inst_25174,inst_25170,inst_25176,inst_25206,state_val_25257,c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25208){
var map__25292 = p__25208;
var map__25292__$1 = ((((!((map__25292 == null)))?((((map__25292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25292):map__25292);
var namespace = cljs.core.get.call(null,map__25292__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25210,inst_25173,inst_25178,inst_25174,inst_25170,inst_25176,inst_25206,state_val_25257,c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25210__$1 = cljs.core.group_by.call(null,inst_25209,inst_25176);
var inst_25212 = (inst_25210__$1 == null);
var inst_25213 = cljs.core.not.call(null,inst_25212);
var state_25256__$1 = (function (){var statearr_25294 = state_25256;
(statearr_25294[(16)] = inst_25210__$1);

(statearr_25294[(28)] = inst_25206);

return statearr_25294;
})();
if(inst_25213){
var statearr_25295_25371 = state_25256__$1;
(statearr_25295_25371[(1)] = (32));

} else {
var statearr_25296_25372 = state_25256__$1;
(statearr_25296_25372[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (44))){
var inst_25232 = (state_25256[(21)]);
var inst_25245 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25232);
var inst_25246 = cljs.core.pr_str.call(null,inst_25245);
var inst_25247 = [cljs.core.str("not required: "),cljs.core.str(inst_25246)].join('');
var inst_25248 = figwheel.client.utils.log.call(null,inst_25247);
var state_25256__$1 = state_25256;
var statearr_25297_25373 = state_25256__$1;
(statearr_25297_25373[(2)] = inst_25248);

(statearr_25297_25373[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (6))){
var inst_25151 = (state_25256[(2)]);
var state_25256__$1 = state_25256;
var statearr_25298_25374 = state_25256__$1;
(statearr_25298_25374[(2)] = inst_25151);

(statearr_25298_25374[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (28))){
var inst_25176 = (state_25256[(26)]);
var inst_25203 = (state_25256[(2)]);
var inst_25204 = cljs.core.not_empty.call(null,inst_25176);
var state_25256__$1 = (function (){var statearr_25299 = state_25256;
(statearr_25299[(29)] = inst_25203);

return statearr_25299;
})();
if(cljs.core.truth_(inst_25204)){
var statearr_25300_25375 = state_25256__$1;
(statearr_25300_25375[(1)] = (29));

} else {
var statearr_25301_25376 = state_25256__$1;
(statearr_25301_25376[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (25))){
var inst_25174 = (state_25256[(25)]);
var inst_25190 = (state_25256[(2)]);
var inst_25191 = cljs.core.not_empty.call(null,inst_25174);
var state_25256__$1 = (function (){var statearr_25302 = state_25256;
(statearr_25302[(30)] = inst_25190);

return statearr_25302;
})();
if(cljs.core.truth_(inst_25191)){
var statearr_25303_25377 = state_25256__$1;
(statearr_25303_25377[(1)] = (26));

} else {
var statearr_25304_25378 = state_25256__$1;
(statearr_25304_25378[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (34))){
var inst_25225 = (state_25256[(2)]);
var state_25256__$1 = state_25256;
if(cljs.core.truth_(inst_25225)){
var statearr_25305_25379 = state_25256__$1;
(statearr_25305_25379[(1)] = (38));

} else {
var statearr_25306_25380 = state_25256__$1;
(statearr_25306_25380[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (17))){
var state_25256__$1 = state_25256;
var statearr_25307_25381 = state_25256__$1;
(statearr_25307_25381[(2)] = recompile_dependents);

(statearr_25307_25381[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (3))){
var state_25256__$1 = state_25256;
var statearr_25308_25382 = state_25256__$1;
(statearr_25308_25382[(2)] = null);

(statearr_25308_25382[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (12))){
var inst_25147 = (state_25256[(2)]);
var state_25256__$1 = state_25256;
var statearr_25309_25383 = state_25256__$1;
(statearr_25309_25383[(2)] = inst_25147);

(statearr_25309_25383[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (2))){
var inst_25109 = (state_25256[(13)]);
var inst_25116 = cljs.core.seq.call(null,inst_25109);
var inst_25117 = inst_25116;
var inst_25118 = null;
var inst_25119 = (0);
var inst_25120 = (0);
var state_25256__$1 = (function (){var statearr_25310 = state_25256;
(statearr_25310[(7)] = inst_25117);

(statearr_25310[(8)] = inst_25118);

(statearr_25310[(9)] = inst_25119);

(statearr_25310[(10)] = inst_25120);

return statearr_25310;
})();
var statearr_25311_25384 = state_25256__$1;
(statearr_25311_25384[(2)] = null);

(statearr_25311_25384[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (23))){
var inst_25173 = (state_25256[(23)]);
var inst_25178 = (state_25256[(24)]);
var inst_25174 = (state_25256[(25)]);
var inst_25170 = (state_25256[(19)]);
var inst_25176 = (state_25256[(26)]);
var inst_25181 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25183 = (function (){var all_files = inst_25170;
var res_SINGLEQUOTE_ = inst_25173;
var res = inst_25174;
var files_not_loaded = inst_25176;
var dependencies_that_loaded = inst_25178;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25173,inst_25178,inst_25174,inst_25170,inst_25176,inst_25181,state_val_25257,c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25182){
var map__25312 = p__25182;
var map__25312__$1 = ((((!((map__25312 == null)))?((((map__25312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25312):map__25312);
var request_url = cljs.core.get.call(null,map__25312__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25173,inst_25178,inst_25174,inst_25170,inst_25176,inst_25181,state_val_25257,c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25184 = cljs.core.reverse.call(null,inst_25178);
var inst_25185 = cljs.core.map.call(null,inst_25183,inst_25184);
var inst_25186 = cljs.core.pr_str.call(null,inst_25185);
var inst_25187 = figwheel.client.utils.log.call(null,inst_25186);
var state_25256__$1 = (function (){var statearr_25314 = state_25256;
(statearr_25314[(31)] = inst_25181);

return statearr_25314;
})();
var statearr_25315_25385 = state_25256__$1;
(statearr_25315_25385[(2)] = inst_25187);

(statearr_25315_25385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (35))){
var state_25256__$1 = state_25256;
var statearr_25316_25386 = state_25256__$1;
(statearr_25316_25386[(2)] = true);

(statearr_25316_25386[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (19))){
var inst_25160 = (state_25256[(12)]);
var inst_25166 = figwheel.client.file_reloading.expand_files.call(null,inst_25160);
var state_25256__$1 = state_25256;
var statearr_25317_25387 = state_25256__$1;
(statearr_25317_25387[(2)] = inst_25166);

(statearr_25317_25387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (11))){
var state_25256__$1 = state_25256;
var statearr_25318_25388 = state_25256__$1;
(statearr_25318_25388[(2)] = null);

(statearr_25318_25388[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (9))){
var inst_25149 = (state_25256[(2)]);
var state_25256__$1 = state_25256;
var statearr_25319_25389 = state_25256__$1;
(statearr_25319_25389[(2)] = inst_25149);

(statearr_25319_25389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (5))){
var inst_25119 = (state_25256[(9)]);
var inst_25120 = (state_25256[(10)]);
var inst_25122 = (inst_25120 < inst_25119);
var inst_25123 = inst_25122;
var state_25256__$1 = state_25256;
if(cljs.core.truth_(inst_25123)){
var statearr_25320_25390 = state_25256__$1;
(statearr_25320_25390[(1)] = (7));

} else {
var statearr_25321_25391 = state_25256__$1;
(statearr_25321_25391[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (14))){
var inst_25130 = (state_25256[(22)]);
var inst_25139 = cljs.core.first.call(null,inst_25130);
var inst_25140 = figwheel.client.file_reloading.eval_body.call(null,inst_25139,opts);
var inst_25141 = cljs.core.next.call(null,inst_25130);
var inst_25117 = inst_25141;
var inst_25118 = null;
var inst_25119 = (0);
var inst_25120 = (0);
var state_25256__$1 = (function (){var statearr_25322 = state_25256;
(statearr_25322[(32)] = inst_25140);

(statearr_25322[(7)] = inst_25117);

(statearr_25322[(8)] = inst_25118);

(statearr_25322[(9)] = inst_25119);

(statearr_25322[(10)] = inst_25120);

return statearr_25322;
})();
var statearr_25323_25392 = state_25256__$1;
(statearr_25323_25392[(2)] = null);

(statearr_25323_25392[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (45))){
var state_25256__$1 = state_25256;
var statearr_25324_25393 = state_25256__$1;
(statearr_25324_25393[(2)] = null);

(statearr_25324_25393[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (26))){
var inst_25173 = (state_25256[(23)]);
var inst_25178 = (state_25256[(24)]);
var inst_25174 = (state_25256[(25)]);
var inst_25170 = (state_25256[(19)]);
var inst_25176 = (state_25256[(26)]);
var inst_25193 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25195 = (function (){var all_files = inst_25170;
var res_SINGLEQUOTE_ = inst_25173;
var res = inst_25174;
var files_not_loaded = inst_25176;
var dependencies_that_loaded = inst_25178;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25173,inst_25178,inst_25174,inst_25170,inst_25176,inst_25193,state_val_25257,c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25194){
var map__25325 = p__25194;
var map__25325__$1 = ((((!((map__25325 == null)))?((((map__25325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25325):map__25325);
var namespace = cljs.core.get.call(null,map__25325__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25325__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25173,inst_25178,inst_25174,inst_25170,inst_25176,inst_25193,state_val_25257,c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25196 = cljs.core.map.call(null,inst_25195,inst_25174);
var inst_25197 = cljs.core.pr_str.call(null,inst_25196);
var inst_25198 = figwheel.client.utils.log.call(null,inst_25197);
var inst_25199 = (function (){var all_files = inst_25170;
var res_SINGLEQUOTE_ = inst_25173;
var res = inst_25174;
var files_not_loaded = inst_25176;
var dependencies_that_loaded = inst_25178;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25173,inst_25178,inst_25174,inst_25170,inst_25176,inst_25193,inst_25195,inst_25196,inst_25197,inst_25198,state_val_25257,c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25173,inst_25178,inst_25174,inst_25170,inst_25176,inst_25193,inst_25195,inst_25196,inst_25197,inst_25198,state_val_25257,c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25200 = setTimeout(inst_25199,(10));
var state_25256__$1 = (function (){var statearr_25327 = state_25256;
(statearr_25327[(33)] = inst_25193);

(statearr_25327[(34)] = inst_25198);

return statearr_25327;
})();
var statearr_25328_25394 = state_25256__$1;
(statearr_25328_25394[(2)] = inst_25200);

(statearr_25328_25394[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (16))){
var state_25256__$1 = state_25256;
var statearr_25329_25395 = state_25256__$1;
(statearr_25329_25395[(2)] = reload_dependents);

(statearr_25329_25395[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (38))){
var inst_25210 = (state_25256[(16)]);
var inst_25227 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25210);
var state_25256__$1 = state_25256;
var statearr_25330_25396 = state_25256__$1;
(statearr_25330_25396[(2)] = inst_25227);

(statearr_25330_25396[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (30))){
var state_25256__$1 = state_25256;
var statearr_25331_25397 = state_25256__$1;
(statearr_25331_25397[(2)] = null);

(statearr_25331_25397[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (10))){
var inst_25130 = (state_25256[(22)]);
var inst_25132 = cljs.core.chunked_seq_QMARK_.call(null,inst_25130);
var state_25256__$1 = state_25256;
if(inst_25132){
var statearr_25332_25398 = state_25256__$1;
(statearr_25332_25398[(1)] = (13));

} else {
var statearr_25333_25399 = state_25256__$1;
(statearr_25333_25399[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (18))){
var inst_25164 = (state_25256[(2)]);
var state_25256__$1 = state_25256;
if(cljs.core.truth_(inst_25164)){
var statearr_25334_25400 = state_25256__$1;
(statearr_25334_25400[(1)] = (19));

} else {
var statearr_25335_25401 = state_25256__$1;
(statearr_25335_25401[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (42))){
var state_25256__$1 = state_25256;
var statearr_25336_25402 = state_25256__$1;
(statearr_25336_25402[(2)] = null);

(statearr_25336_25402[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (37))){
var inst_25222 = (state_25256[(2)]);
var state_25256__$1 = state_25256;
var statearr_25337_25403 = state_25256__$1;
(statearr_25337_25403[(2)] = inst_25222);

(statearr_25337_25403[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25257 === (8))){
var inst_25117 = (state_25256[(7)]);
var inst_25130 = (state_25256[(22)]);
var inst_25130__$1 = cljs.core.seq.call(null,inst_25117);
var state_25256__$1 = (function (){var statearr_25338 = state_25256;
(statearr_25338[(22)] = inst_25130__$1);

return statearr_25338;
})();
if(inst_25130__$1){
var statearr_25339_25404 = state_25256__$1;
(statearr_25339_25404[(1)] = (10));

} else {
var statearr_25340_25405 = state_25256__$1;
(statearr_25340_25405[(1)] = (11));

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
});})(c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21517__auto__,c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21518__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21518__auto____0 = (function (){
var statearr_25344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25344[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21518__auto__);

(statearr_25344[(1)] = (1));

return statearr_25344;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21518__auto____1 = (function (state_25256){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_25256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e25345){if((e25345 instanceof Object)){
var ex__21521__auto__ = e25345;
var statearr_25346_25406 = state_25256;
(statearr_25346_25406[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25407 = state_25256;
state_25256 = G__25407;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21518__auto__ = function(state_25256){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21518__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21518__auto____1.call(this,state_25256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21518__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21518__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21631__auto__ = (function (){var statearr_25347 = f__21630__auto__.call(null);
(statearr_25347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto__);

return statearr_25347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto__,map__25102,map__25102__$1,opts,before_jsload,on_jsload,reload_dependents,map__25103,map__25103__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21629__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25410,link){
var map__25413 = p__25410;
var map__25413__$1 = ((((!((map__25413 == null)))?((((map__25413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25413):map__25413);
var file = cljs.core.get.call(null,map__25413__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__25413,map__25413__$1,file){
return (function (p1__25408_SHARP_,p2__25409_SHARP_){
if(cljs.core._EQ_.call(null,p1__25408_SHARP_,p2__25409_SHARP_)){
return p1__25408_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__25413,map__25413__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25419){
var map__25420 = p__25419;
var map__25420__$1 = ((((!((map__25420 == null)))?((((map__25420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25420):map__25420);
var match_length = cljs.core.get.call(null,map__25420__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25420__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25415_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25415_SHARP_);
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
var args25422 = [];
var len__19529__auto___25425 = arguments.length;
var i__19530__auto___25426 = (0);
while(true){
if((i__19530__auto___25426 < len__19529__auto___25425)){
args25422.push((arguments[i__19530__auto___25426]));

var G__25427 = (i__19530__auto___25426 + (1));
i__19530__auto___25426 = G__25427;
continue;
} else {
}
break;
}

var G__25424 = args25422.length;
switch (G__25424) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25422.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25429_SHARP_,p2__25430_SHARP_){
return cljs.core.assoc.call(null,p1__25429_SHARP_,cljs.core.get.call(null,p2__25430_SHARP_,key),p2__25430_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25431){
var map__25434 = p__25431;
var map__25434__$1 = ((((!((map__25434 == null)))?((((map__25434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25434):map__25434);
var f_data = map__25434__$1;
var file = cljs.core.get.call(null,map__25434__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25436,files_msg){
var map__25443 = p__25436;
var map__25443__$1 = ((((!((map__25443 == null)))?((((map__25443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25443):map__25443);
var opts = map__25443__$1;
var on_cssload = cljs.core.get.call(null,map__25443__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25445_25449 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25446_25450 = null;
var count__25447_25451 = (0);
var i__25448_25452 = (0);
while(true){
if((i__25448_25452 < count__25447_25451)){
var f_25453 = cljs.core._nth.call(null,chunk__25446_25450,i__25448_25452);
figwheel.client.file_reloading.reload_css_file.call(null,f_25453);

var G__25454 = seq__25445_25449;
var G__25455 = chunk__25446_25450;
var G__25456 = count__25447_25451;
var G__25457 = (i__25448_25452 + (1));
seq__25445_25449 = G__25454;
chunk__25446_25450 = G__25455;
count__25447_25451 = G__25456;
i__25448_25452 = G__25457;
continue;
} else {
var temp__4657__auto___25458 = cljs.core.seq.call(null,seq__25445_25449);
if(temp__4657__auto___25458){
var seq__25445_25459__$1 = temp__4657__auto___25458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25445_25459__$1)){
var c__19270__auto___25460 = cljs.core.chunk_first.call(null,seq__25445_25459__$1);
var G__25461 = cljs.core.chunk_rest.call(null,seq__25445_25459__$1);
var G__25462 = c__19270__auto___25460;
var G__25463 = cljs.core.count.call(null,c__19270__auto___25460);
var G__25464 = (0);
seq__25445_25449 = G__25461;
chunk__25446_25450 = G__25462;
count__25447_25451 = G__25463;
i__25448_25452 = G__25464;
continue;
} else {
var f_25465 = cljs.core.first.call(null,seq__25445_25459__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25465);

var G__25466 = cljs.core.next.call(null,seq__25445_25459__$1);
var G__25467 = null;
var G__25468 = (0);
var G__25469 = (0);
seq__25445_25449 = G__25466;
chunk__25446_25450 = G__25467;
count__25447_25451 = G__25468;
i__25448_25452 = G__25469;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25443,map__25443__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25443,map__25443__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1505274418113