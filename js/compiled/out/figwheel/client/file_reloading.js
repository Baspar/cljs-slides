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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24463_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24463_SHARP_));
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
var seq__24468 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24469 = null;
var count__24470 = (0);
var i__24471 = (0);
while(true){
if((i__24471 < count__24470)){
var n = cljs.core._nth.call(null,chunk__24469,i__24471);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24472 = seq__24468;
var G__24473 = chunk__24469;
var G__24474 = count__24470;
var G__24475 = (i__24471 + (1));
seq__24468 = G__24472;
chunk__24469 = G__24473;
count__24470 = G__24474;
i__24471 = G__24475;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24468);
if(temp__4657__auto__){
var seq__24468__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24468__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__24468__$1);
var G__24476 = cljs.core.chunk_rest.call(null,seq__24468__$1);
var G__24477 = c__19270__auto__;
var G__24478 = cljs.core.count.call(null,c__19270__auto__);
var G__24479 = (0);
seq__24468 = G__24476;
chunk__24469 = G__24477;
count__24470 = G__24478;
i__24471 = G__24479;
continue;
} else {
var n = cljs.core.first.call(null,seq__24468__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24480 = cljs.core.next.call(null,seq__24468__$1);
var G__24481 = null;
var G__24482 = (0);
var G__24483 = (0);
seq__24468 = G__24480;
chunk__24469 = G__24481;
count__24470 = G__24482;
i__24471 = G__24483;
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

var seq__24522_24529 = cljs.core.seq.call(null,deps);
var chunk__24523_24530 = null;
var count__24524_24531 = (0);
var i__24525_24532 = (0);
while(true){
if((i__24525_24532 < count__24524_24531)){
var dep_24533 = cljs.core._nth.call(null,chunk__24523_24530,i__24525_24532);
topo_sort_helper_STAR_.call(null,dep_24533,(depth + (1)),state);

var G__24534 = seq__24522_24529;
var G__24535 = chunk__24523_24530;
var G__24536 = count__24524_24531;
var G__24537 = (i__24525_24532 + (1));
seq__24522_24529 = G__24534;
chunk__24523_24530 = G__24535;
count__24524_24531 = G__24536;
i__24525_24532 = G__24537;
continue;
} else {
var temp__4657__auto___24538 = cljs.core.seq.call(null,seq__24522_24529);
if(temp__4657__auto___24538){
var seq__24522_24539__$1 = temp__4657__auto___24538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24522_24539__$1)){
var c__19270__auto___24540 = cljs.core.chunk_first.call(null,seq__24522_24539__$1);
var G__24541 = cljs.core.chunk_rest.call(null,seq__24522_24539__$1);
var G__24542 = c__19270__auto___24540;
var G__24543 = cljs.core.count.call(null,c__19270__auto___24540);
var G__24544 = (0);
seq__24522_24529 = G__24541;
chunk__24523_24530 = G__24542;
count__24524_24531 = G__24543;
i__24525_24532 = G__24544;
continue;
} else {
var dep_24545 = cljs.core.first.call(null,seq__24522_24539__$1);
topo_sort_helper_STAR_.call(null,dep_24545,(depth + (1)),state);

var G__24546 = cljs.core.next.call(null,seq__24522_24539__$1);
var G__24547 = null;
var G__24548 = (0);
var G__24549 = (0);
seq__24522_24529 = G__24546;
chunk__24523_24530 = G__24547;
count__24524_24531 = G__24548;
i__24525_24532 = G__24549;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24526){
var vec__24528 = p__24526;
var x = cljs.core.nth.call(null,vec__24528,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24528,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24528,x,xs,get_deps__$1){
return (function (p1__24484_SHARP_){
return clojure.set.difference.call(null,p1__24484_SHARP_,x);
});})(vec__24528,x,xs,get_deps__$1))
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
var seq__24562 = cljs.core.seq.call(null,provides);
var chunk__24563 = null;
var count__24564 = (0);
var i__24565 = (0);
while(true){
if((i__24565 < count__24564)){
var prov = cljs.core._nth.call(null,chunk__24563,i__24565);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24566_24574 = cljs.core.seq.call(null,requires);
var chunk__24567_24575 = null;
var count__24568_24576 = (0);
var i__24569_24577 = (0);
while(true){
if((i__24569_24577 < count__24568_24576)){
var req_24578 = cljs.core._nth.call(null,chunk__24567_24575,i__24569_24577);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24578,prov);

var G__24579 = seq__24566_24574;
var G__24580 = chunk__24567_24575;
var G__24581 = count__24568_24576;
var G__24582 = (i__24569_24577 + (1));
seq__24566_24574 = G__24579;
chunk__24567_24575 = G__24580;
count__24568_24576 = G__24581;
i__24569_24577 = G__24582;
continue;
} else {
var temp__4657__auto___24583 = cljs.core.seq.call(null,seq__24566_24574);
if(temp__4657__auto___24583){
var seq__24566_24584__$1 = temp__4657__auto___24583;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24566_24584__$1)){
var c__19270__auto___24585 = cljs.core.chunk_first.call(null,seq__24566_24584__$1);
var G__24586 = cljs.core.chunk_rest.call(null,seq__24566_24584__$1);
var G__24587 = c__19270__auto___24585;
var G__24588 = cljs.core.count.call(null,c__19270__auto___24585);
var G__24589 = (0);
seq__24566_24574 = G__24586;
chunk__24567_24575 = G__24587;
count__24568_24576 = G__24588;
i__24569_24577 = G__24589;
continue;
} else {
var req_24590 = cljs.core.first.call(null,seq__24566_24584__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24590,prov);

var G__24591 = cljs.core.next.call(null,seq__24566_24584__$1);
var G__24592 = null;
var G__24593 = (0);
var G__24594 = (0);
seq__24566_24574 = G__24591;
chunk__24567_24575 = G__24592;
count__24568_24576 = G__24593;
i__24569_24577 = G__24594;
continue;
}
} else {
}
}
break;
}

var G__24595 = seq__24562;
var G__24596 = chunk__24563;
var G__24597 = count__24564;
var G__24598 = (i__24565 + (1));
seq__24562 = G__24595;
chunk__24563 = G__24596;
count__24564 = G__24597;
i__24565 = G__24598;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24562);
if(temp__4657__auto__){
var seq__24562__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24562__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__24562__$1);
var G__24599 = cljs.core.chunk_rest.call(null,seq__24562__$1);
var G__24600 = c__19270__auto__;
var G__24601 = cljs.core.count.call(null,c__19270__auto__);
var G__24602 = (0);
seq__24562 = G__24599;
chunk__24563 = G__24600;
count__24564 = G__24601;
i__24565 = G__24602;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24562__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24570_24603 = cljs.core.seq.call(null,requires);
var chunk__24571_24604 = null;
var count__24572_24605 = (0);
var i__24573_24606 = (0);
while(true){
if((i__24573_24606 < count__24572_24605)){
var req_24607 = cljs.core._nth.call(null,chunk__24571_24604,i__24573_24606);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24607,prov);

var G__24608 = seq__24570_24603;
var G__24609 = chunk__24571_24604;
var G__24610 = count__24572_24605;
var G__24611 = (i__24573_24606 + (1));
seq__24570_24603 = G__24608;
chunk__24571_24604 = G__24609;
count__24572_24605 = G__24610;
i__24573_24606 = G__24611;
continue;
} else {
var temp__4657__auto___24612__$1 = cljs.core.seq.call(null,seq__24570_24603);
if(temp__4657__auto___24612__$1){
var seq__24570_24613__$1 = temp__4657__auto___24612__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24570_24613__$1)){
var c__19270__auto___24614 = cljs.core.chunk_first.call(null,seq__24570_24613__$1);
var G__24615 = cljs.core.chunk_rest.call(null,seq__24570_24613__$1);
var G__24616 = c__19270__auto___24614;
var G__24617 = cljs.core.count.call(null,c__19270__auto___24614);
var G__24618 = (0);
seq__24570_24603 = G__24615;
chunk__24571_24604 = G__24616;
count__24572_24605 = G__24617;
i__24573_24606 = G__24618;
continue;
} else {
var req_24619 = cljs.core.first.call(null,seq__24570_24613__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24619,prov);

var G__24620 = cljs.core.next.call(null,seq__24570_24613__$1);
var G__24621 = null;
var G__24622 = (0);
var G__24623 = (0);
seq__24570_24603 = G__24620;
chunk__24571_24604 = G__24621;
count__24572_24605 = G__24622;
i__24573_24606 = G__24623;
continue;
}
} else {
}
}
break;
}

var G__24624 = cljs.core.next.call(null,seq__24562__$1);
var G__24625 = null;
var G__24626 = (0);
var G__24627 = (0);
seq__24562 = G__24624;
chunk__24563 = G__24625;
count__24564 = G__24626;
i__24565 = G__24627;
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
var seq__24632_24636 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24633_24637 = null;
var count__24634_24638 = (0);
var i__24635_24639 = (0);
while(true){
if((i__24635_24639 < count__24634_24638)){
var ns_24640 = cljs.core._nth.call(null,chunk__24633_24637,i__24635_24639);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24640);

var G__24641 = seq__24632_24636;
var G__24642 = chunk__24633_24637;
var G__24643 = count__24634_24638;
var G__24644 = (i__24635_24639 + (1));
seq__24632_24636 = G__24641;
chunk__24633_24637 = G__24642;
count__24634_24638 = G__24643;
i__24635_24639 = G__24644;
continue;
} else {
var temp__4657__auto___24645 = cljs.core.seq.call(null,seq__24632_24636);
if(temp__4657__auto___24645){
var seq__24632_24646__$1 = temp__4657__auto___24645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24632_24646__$1)){
var c__19270__auto___24647 = cljs.core.chunk_first.call(null,seq__24632_24646__$1);
var G__24648 = cljs.core.chunk_rest.call(null,seq__24632_24646__$1);
var G__24649 = c__19270__auto___24647;
var G__24650 = cljs.core.count.call(null,c__19270__auto___24647);
var G__24651 = (0);
seq__24632_24636 = G__24648;
chunk__24633_24637 = G__24649;
count__24634_24638 = G__24650;
i__24635_24639 = G__24651;
continue;
} else {
var ns_24652 = cljs.core.first.call(null,seq__24632_24646__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24652);

var G__24653 = cljs.core.next.call(null,seq__24632_24646__$1);
var G__24654 = null;
var G__24655 = (0);
var G__24656 = (0);
seq__24632_24636 = G__24653;
chunk__24633_24637 = G__24654;
count__24634_24638 = G__24655;
i__24635_24639 = G__24656;
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
var G__24657__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24658__i = 0, G__24658__a = new Array(arguments.length -  0);
while (G__24658__i < G__24658__a.length) {G__24658__a[G__24658__i] = arguments[G__24658__i + 0]; ++G__24658__i;}
  args = new cljs.core.IndexedSeq(G__24658__a,0);
} 
return G__24657__delegate.call(this,args);};
G__24657.cljs$lang$maxFixedArity = 0;
G__24657.cljs$lang$applyTo = (function (arglist__24659){
var args = cljs.core.seq(arglist__24659);
return G__24657__delegate(args);
});
G__24657.cljs$core$IFn$_invoke$arity$variadic = G__24657__delegate;
return G__24657;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24661 = cljs.core._EQ_;
var expr__24662 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24661.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24662))){
var path_parts = ((function (pred__24661,expr__24662){
return (function (p1__24660_SHARP_){
return clojure.string.split.call(null,p1__24660_SHARP_,/[\/\\]/);
});})(pred__24661,expr__24662))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24661,expr__24662){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24664){if((e24664 instanceof Error)){
var e = e24664;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24664;

}
}})());
});
;})(path_parts,sep,root,pred__24661,expr__24662))
} else {
if(cljs.core.truth_(pred__24661.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24662))){
return ((function (pred__24661,expr__24662){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24661,expr__24662){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24661,expr__24662))
);

return deferred.addErrback(((function (deferred,pred__24661,expr__24662){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24661,expr__24662))
);
});
;})(pred__24661,expr__24662))
} else {
return ((function (pred__24661,expr__24662){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24661,expr__24662))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24665,callback){
var map__24668 = p__24665;
var map__24668__$1 = ((((!((map__24668 == null)))?((((map__24668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24668):map__24668);
var file_msg = map__24668__$1;
var request_url = cljs.core.get.call(null,map__24668__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24668,map__24668__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24668,map__24668__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__21630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto__){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto__){
return (function (state_24692){
var state_val_24693 = (state_24692[(1)]);
if((state_val_24693 === (7))){
var inst_24688 = (state_24692[(2)]);
var state_24692__$1 = state_24692;
var statearr_24694_24714 = state_24692__$1;
(statearr_24694_24714[(2)] = inst_24688);

(statearr_24694_24714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24693 === (1))){
var state_24692__$1 = state_24692;
var statearr_24695_24715 = state_24692__$1;
(statearr_24695_24715[(2)] = null);

(statearr_24695_24715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24693 === (4))){
var inst_24672 = (state_24692[(7)]);
var inst_24672__$1 = (state_24692[(2)]);
var state_24692__$1 = (function (){var statearr_24696 = state_24692;
(statearr_24696[(7)] = inst_24672__$1);

return statearr_24696;
})();
if(cljs.core.truth_(inst_24672__$1)){
var statearr_24697_24716 = state_24692__$1;
(statearr_24697_24716[(1)] = (5));

} else {
var statearr_24698_24717 = state_24692__$1;
(statearr_24698_24717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24693 === (6))){
var state_24692__$1 = state_24692;
var statearr_24699_24718 = state_24692__$1;
(statearr_24699_24718[(2)] = null);

(statearr_24699_24718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24693 === (3))){
var inst_24690 = (state_24692[(2)]);
var state_24692__$1 = state_24692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24692__$1,inst_24690);
} else {
if((state_val_24693 === (2))){
var state_24692__$1 = state_24692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24692__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24693 === (11))){
var inst_24684 = (state_24692[(2)]);
var state_24692__$1 = (function (){var statearr_24700 = state_24692;
(statearr_24700[(8)] = inst_24684);

return statearr_24700;
})();
var statearr_24701_24719 = state_24692__$1;
(statearr_24701_24719[(2)] = null);

(statearr_24701_24719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24693 === (9))){
var inst_24678 = (state_24692[(9)]);
var inst_24676 = (state_24692[(10)]);
var inst_24680 = inst_24678.call(null,inst_24676);
var state_24692__$1 = state_24692;
var statearr_24702_24720 = state_24692__$1;
(statearr_24702_24720[(2)] = inst_24680);

(statearr_24702_24720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24693 === (5))){
var inst_24672 = (state_24692[(7)]);
var inst_24674 = figwheel.client.file_reloading.blocking_load.call(null,inst_24672);
var state_24692__$1 = state_24692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24692__$1,(8),inst_24674);
} else {
if((state_val_24693 === (10))){
var inst_24676 = (state_24692[(10)]);
var inst_24682 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24676);
var state_24692__$1 = state_24692;
var statearr_24703_24721 = state_24692__$1;
(statearr_24703_24721[(2)] = inst_24682);

(statearr_24703_24721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24693 === (8))){
var inst_24678 = (state_24692[(9)]);
var inst_24672 = (state_24692[(7)]);
var inst_24676 = (state_24692[(2)]);
var inst_24677 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24678__$1 = cljs.core.get.call(null,inst_24677,inst_24672);
var state_24692__$1 = (function (){var statearr_24704 = state_24692;
(statearr_24704[(9)] = inst_24678__$1);

(statearr_24704[(10)] = inst_24676);

return statearr_24704;
})();
if(cljs.core.truth_(inst_24678__$1)){
var statearr_24705_24722 = state_24692__$1;
(statearr_24705_24722[(1)] = (9));

} else {
var statearr_24706_24723 = state_24692__$1;
(statearr_24706_24723[(1)] = (10));

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
});})(c__21630__auto__))
;
return ((function (switch__21518__auto__,c__21630__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21519__auto__ = null;
var figwheel$client$file_reloading$state_machine__21519__auto____0 = (function (){
var statearr_24710 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24710[(0)] = figwheel$client$file_reloading$state_machine__21519__auto__);

(statearr_24710[(1)] = (1));

return statearr_24710;
});
var figwheel$client$file_reloading$state_machine__21519__auto____1 = (function (state_24692){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_24692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e24711){if((e24711 instanceof Object)){
var ex__21522__auto__ = e24711;
var statearr_24712_24724 = state_24692;
(statearr_24712_24724[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24725 = state_24692;
state_24692 = G__24725;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21519__auto__ = function(state_24692){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21519__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21519__auto____1.call(this,state_24692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21519__auto____0;
figwheel$client$file_reloading$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21519__auto____1;
return figwheel$client$file_reloading$state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto__))
})();
var state__21632__auto__ = (function (){var statearr_24713 = f__21631__auto__.call(null);
(statearr_24713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto__);

return statearr_24713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto__))
);

return c__21630__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24726,callback){
var map__24729 = p__24726;
var map__24729__$1 = ((((!((map__24729 == null)))?((((map__24729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24729):map__24729);
var file_msg = map__24729__$1;
var namespace = cljs.core.get.call(null,map__24729__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24729,map__24729__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24729,map__24729__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24731){
var map__24734 = p__24731;
var map__24734__$1 = ((((!((map__24734 == null)))?((((map__24734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24734):map__24734);
var file_msg = map__24734__$1;
var namespace = cljs.core.get.call(null,map__24734__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24736,callback){
var map__24739 = p__24736;
var map__24739__$1 = ((((!((map__24739 == null)))?((((map__24739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24739):map__24739);
var file_msg = map__24739__$1;
var request_url = cljs.core.get.call(null,map__24739__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24739__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21630__auto___24827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto___24827,out){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto___24827,out){
return (function (state_24809){
var state_val_24810 = (state_24809[(1)]);
if((state_val_24810 === (1))){
var inst_24787 = cljs.core.nth.call(null,files,(0),null);
var inst_24788 = cljs.core.nthnext.call(null,files,(1));
var inst_24789 = files;
var state_24809__$1 = (function (){var statearr_24811 = state_24809;
(statearr_24811[(7)] = inst_24789);

(statearr_24811[(8)] = inst_24788);

(statearr_24811[(9)] = inst_24787);

return statearr_24811;
})();
var statearr_24812_24828 = state_24809__$1;
(statearr_24812_24828[(2)] = null);

(statearr_24812_24828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24810 === (2))){
var inst_24789 = (state_24809[(7)]);
var inst_24792 = (state_24809[(10)]);
var inst_24792__$1 = cljs.core.nth.call(null,inst_24789,(0),null);
var inst_24793 = cljs.core.nthnext.call(null,inst_24789,(1));
var inst_24794 = (inst_24792__$1 == null);
var inst_24795 = cljs.core.not.call(null,inst_24794);
var state_24809__$1 = (function (){var statearr_24813 = state_24809;
(statearr_24813[(10)] = inst_24792__$1);

(statearr_24813[(11)] = inst_24793);

return statearr_24813;
})();
if(inst_24795){
var statearr_24814_24829 = state_24809__$1;
(statearr_24814_24829[(1)] = (4));

} else {
var statearr_24815_24830 = state_24809__$1;
(statearr_24815_24830[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24810 === (3))){
var inst_24807 = (state_24809[(2)]);
var state_24809__$1 = state_24809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24809__$1,inst_24807);
} else {
if((state_val_24810 === (4))){
var inst_24792 = (state_24809[(10)]);
var inst_24797 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24792);
var state_24809__$1 = state_24809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24809__$1,(7),inst_24797);
} else {
if((state_val_24810 === (5))){
var inst_24803 = cljs.core.async.close_BANG_.call(null,out);
var state_24809__$1 = state_24809;
var statearr_24816_24831 = state_24809__$1;
(statearr_24816_24831[(2)] = inst_24803);

(statearr_24816_24831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24810 === (6))){
var inst_24805 = (state_24809[(2)]);
var state_24809__$1 = state_24809;
var statearr_24817_24832 = state_24809__$1;
(statearr_24817_24832[(2)] = inst_24805);

(statearr_24817_24832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24810 === (7))){
var inst_24793 = (state_24809[(11)]);
var inst_24799 = (state_24809[(2)]);
var inst_24800 = cljs.core.async.put_BANG_.call(null,out,inst_24799);
var inst_24789 = inst_24793;
var state_24809__$1 = (function (){var statearr_24818 = state_24809;
(statearr_24818[(7)] = inst_24789);

(statearr_24818[(12)] = inst_24800);

return statearr_24818;
})();
var statearr_24819_24833 = state_24809__$1;
(statearr_24819_24833[(2)] = null);

(statearr_24819_24833[(1)] = (2));


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
});})(c__21630__auto___24827,out))
;
return ((function (switch__21518__auto__,c__21630__auto___24827,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21519__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21519__auto____0 = (function (){
var statearr_24823 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24823[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21519__auto__);

(statearr_24823[(1)] = (1));

return statearr_24823;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21519__auto____1 = (function (state_24809){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_24809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e24824){if((e24824 instanceof Object)){
var ex__21522__auto__ = e24824;
var statearr_24825_24834 = state_24809;
(statearr_24825_24834[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24835 = state_24809;
state_24809 = G__24835;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21519__auto__ = function(state_24809){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21519__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21519__auto____1.call(this,state_24809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21519__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21519__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto___24827,out))
})();
var state__21632__auto__ = (function (){var statearr_24826 = f__21631__auto__.call(null);
(statearr_24826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto___24827);

return statearr_24826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto___24827,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24836,opts){
var map__24840 = p__24836;
var map__24840__$1 = ((((!((map__24840 == null)))?((((map__24840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24840):map__24840);
var eval_body__$1 = cljs.core.get.call(null,map__24840__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24840__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e24842){var e = e24842;
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
return (function (p1__24843_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24843_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__24848){
var vec__24849 = p__24848;
var k = cljs.core.nth.call(null,vec__24849,(0),null);
var v = cljs.core.nth.call(null,vec__24849,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24850){
var vec__24851 = p__24850;
var k = cljs.core.nth.call(null,vec__24851,(0),null);
var v = cljs.core.nth.call(null,vec__24851,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24855,p__24856){
var map__25103 = p__24855;
var map__25103__$1 = ((((!((map__25103 == null)))?((((map__25103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25103):map__25103);
var opts = map__25103__$1;
var before_jsload = cljs.core.get.call(null,map__25103__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25103__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25103__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25104 = p__24856;
var map__25104__$1 = ((((!((map__25104 == null)))?((((map__25104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25104):map__25104);
var msg = map__25104__$1;
var files = cljs.core.get.call(null,map__25104__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25104__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25104__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25257){
var state_val_25258 = (state_25257[(1)]);
if((state_val_25258 === (7))){
var inst_25121 = (state_25257[(7)]);
var inst_25118 = (state_25257[(8)]);
var inst_25119 = (state_25257[(9)]);
var inst_25120 = (state_25257[(10)]);
var inst_25126 = cljs.core._nth.call(null,inst_25119,inst_25121);
var inst_25127 = figwheel.client.file_reloading.eval_body.call(null,inst_25126,opts);
var inst_25128 = (inst_25121 + (1));
var tmp25259 = inst_25118;
var tmp25260 = inst_25119;
var tmp25261 = inst_25120;
var inst_25118__$1 = tmp25259;
var inst_25119__$1 = tmp25260;
var inst_25120__$1 = tmp25261;
var inst_25121__$1 = inst_25128;
var state_25257__$1 = (function (){var statearr_25262 = state_25257;
(statearr_25262[(11)] = inst_25127);

(statearr_25262[(7)] = inst_25121__$1);

(statearr_25262[(8)] = inst_25118__$1);

(statearr_25262[(9)] = inst_25119__$1);

(statearr_25262[(10)] = inst_25120__$1);

return statearr_25262;
})();
var statearr_25263_25349 = state_25257__$1;
(statearr_25263_25349[(2)] = null);

(statearr_25263_25349[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (20))){
var inst_25161 = (state_25257[(12)]);
var inst_25169 = figwheel.client.file_reloading.sort_files.call(null,inst_25161);
var state_25257__$1 = state_25257;
var statearr_25264_25350 = state_25257__$1;
(statearr_25264_25350[(2)] = inst_25169);

(statearr_25264_25350[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (27))){
var state_25257__$1 = state_25257;
var statearr_25265_25351 = state_25257__$1;
(statearr_25265_25351[(2)] = null);

(statearr_25265_25351[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (1))){
var inst_25110 = (state_25257[(13)]);
var inst_25107 = before_jsload.call(null,files);
var inst_25108 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25109 = (function (){return ((function (inst_25110,inst_25107,inst_25108,state_val_25258,c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24852_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24852_SHARP_);
});
;})(inst_25110,inst_25107,inst_25108,state_val_25258,c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25110__$1 = cljs.core.filter.call(null,inst_25109,files);
var inst_25111 = cljs.core.not_empty.call(null,inst_25110__$1);
var state_25257__$1 = (function (){var statearr_25266 = state_25257;
(statearr_25266[(14)] = inst_25107);

(statearr_25266[(13)] = inst_25110__$1);

(statearr_25266[(15)] = inst_25108);

return statearr_25266;
})();
if(cljs.core.truth_(inst_25111)){
var statearr_25267_25352 = state_25257__$1;
(statearr_25267_25352[(1)] = (2));

} else {
var statearr_25268_25353 = state_25257__$1;
(statearr_25268_25353[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (24))){
var state_25257__$1 = state_25257;
var statearr_25269_25354 = state_25257__$1;
(statearr_25269_25354[(2)] = null);

(statearr_25269_25354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (39))){
var inst_25211 = (state_25257[(16)]);
var state_25257__$1 = state_25257;
var statearr_25270_25355 = state_25257__$1;
(statearr_25270_25355[(2)] = inst_25211);

(statearr_25270_25355[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (46))){
var inst_25252 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
var statearr_25271_25356 = state_25257__$1;
(statearr_25271_25356[(2)] = inst_25252);

(statearr_25271_25356[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (4))){
var inst_25155 = (state_25257[(2)]);
var inst_25156 = cljs.core.List.EMPTY;
var inst_25157 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25156);
var inst_25158 = (function (){return ((function (inst_25155,inst_25156,inst_25157,state_val_25258,c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24853_SHARP_){
var and__18447__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24853_SHARP_);
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24853_SHARP_));
} else {
return and__18447__auto__;
}
});
;})(inst_25155,inst_25156,inst_25157,state_val_25258,c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25159 = cljs.core.filter.call(null,inst_25158,files);
var inst_25160 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25161 = cljs.core.concat.call(null,inst_25159,inst_25160);
var state_25257__$1 = (function (){var statearr_25272 = state_25257;
(statearr_25272[(17)] = inst_25155);

(statearr_25272[(18)] = inst_25157);

(statearr_25272[(12)] = inst_25161);

return statearr_25272;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25273_25357 = state_25257__$1;
(statearr_25273_25357[(1)] = (16));

} else {
var statearr_25274_25358 = state_25257__$1;
(statearr_25274_25358[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (15))){
var inst_25145 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
var statearr_25275_25359 = state_25257__$1;
(statearr_25275_25359[(2)] = inst_25145);

(statearr_25275_25359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (21))){
var inst_25171 = (state_25257[(19)]);
var inst_25171__$1 = (state_25257[(2)]);
var inst_25172 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25171__$1);
var state_25257__$1 = (function (){var statearr_25276 = state_25257;
(statearr_25276[(19)] = inst_25171__$1);

return statearr_25276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25257__$1,(22),inst_25172);
} else {
if((state_val_25258 === (31))){
var inst_25255 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25257__$1,inst_25255);
} else {
if((state_val_25258 === (32))){
var inst_25211 = (state_25257[(16)]);
var inst_25216 = inst_25211.cljs$lang$protocol_mask$partition0$;
var inst_25217 = (inst_25216 & (64));
var inst_25218 = inst_25211.cljs$core$ISeq$;
var inst_25219 = (inst_25217) || (inst_25218);
var state_25257__$1 = state_25257;
if(cljs.core.truth_(inst_25219)){
var statearr_25277_25360 = state_25257__$1;
(statearr_25277_25360[(1)] = (35));

} else {
var statearr_25278_25361 = state_25257__$1;
(statearr_25278_25361[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (40))){
var inst_25232 = (state_25257[(20)]);
var inst_25231 = (state_25257[(2)]);
var inst_25232__$1 = cljs.core.get.call(null,inst_25231,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25233 = cljs.core.get.call(null,inst_25231,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25234 = cljs.core.not_empty.call(null,inst_25232__$1);
var state_25257__$1 = (function (){var statearr_25279 = state_25257;
(statearr_25279[(20)] = inst_25232__$1);

(statearr_25279[(21)] = inst_25233);

return statearr_25279;
})();
if(cljs.core.truth_(inst_25234)){
var statearr_25280_25362 = state_25257__$1;
(statearr_25280_25362[(1)] = (41));

} else {
var statearr_25281_25363 = state_25257__$1;
(statearr_25281_25363[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (33))){
var state_25257__$1 = state_25257;
var statearr_25282_25364 = state_25257__$1;
(statearr_25282_25364[(2)] = false);

(statearr_25282_25364[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (13))){
var inst_25131 = (state_25257[(22)]);
var inst_25135 = cljs.core.chunk_first.call(null,inst_25131);
var inst_25136 = cljs.core.chunk_rest.call(null,inst_25131);
var inst_25137 = cljs.core.count.call(null,inst_25135);
var inst_25118 = inst_25136;
var inst_25119 = inst_25135;
var inst_25120 = inst_25137;
var inst_25121 = (0);
var state_25257__$1 = (function (){var statearr_25283 = state_25257;
(statearr_25283[(7)] = inst_25121);

(statearr_25283[(8)] = inst_25118);

(statearr_25283[(9)] = inst_25119);

(statearr_25283[(10)] = inst_25120);

return statearr_25283;
})();
var statearr_25284_25365 = state_25257__$1;
(statearr_25284_25365[(2)] = null);

(statearr_25284_25365[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (22))){
var inst_25171 = (state_25257[(19)]);
var inst_25175 = (state_25257[(23)]);
var inst_25174 = (state_25257[(24)]);
var inst_25179 = (state_25257[(25)]);
var inst_25174__$1 = (state_25257[(2)]);
var inst_25175__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25174__$1);
var inst_25176 = (function (){var all_files = inst_25171;
var res_SINGLEQUOTE_ = inst_25174__$1;
var res = inst_25175__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25171,inst_25175,inst_25174,inst_25179,inst_25174__$1,inst_25175__$1,state_val_25258,c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24854_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24854_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25171,inst_25175,inst_25174,inst_25179,inst_25174__$1,inst_25175__$1,state_val_25258,c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25177 = cljs.core.filter.call(null,inst_25176,inst_25174__$1);
var inst_25178 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25179__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25178);
var inst_25180 = cljs.core.not_empty.call(null,inst_25179__$1);
var state_25257__$1 = (function (){var statearr_25285 = state_25257;
(statearr_25285[(23)] = inst_25175__$1);

(statearr_25285[(26)] = inst_25177);

(statearr_25285[(24)] = inst_25174__$1);

(statearr_25285[(25)] = inst_25179__$1);

return statearr_25285;
})();
if(cljs.core.truth_(inst_25180)){
var statearr_25286_25366 = state_25257__$1;
(statearr_25286_25366[(1)] = (23));

} else {
var statearr_25287_25367 = state_25257__$1;
(statearr_25287_25367[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (36))){
var state_25257__$1 = state_25257;
var statearr_25288_25368 = state_25257__$1;
(statearr_25288_25368[(2)] = false);

(statearr_25288_25368[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (41))){
var inst_25232 = (state_25257[(20)]);
var inst_25236 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25237 = cljs.core.map.call(null,inst_25236,inst_25232);
var inst_25238 = cljs.core.pr_str.call(null,inst_25237);
var inst_25239 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25238)].join('');
var inst_25240 = figwheel.client.utils.log.call(null,inst_25239);
var state_25257__$1 = state_25257;
var statearr_25289_25369 = state_25257__$1;
(statearr_25289_25369[(2)] = inst_25240);

(statearr_25289_25369[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (43))){
var inst_25233 = (state_25257[(21)]);
var inst_25243 = (state_25257[(2)]);
var inst_25244 = cljs.core.not_empty.call(null,inst_25233);
var state_25257__$1 = (function (){var statearr_25290 = state_25257;
(statearr_25290[(27)] = inst_25243);

return statearr_25290;
})();
if(cljs.core.truth_(inst_25244)){
var statearr_25291_25370 = state_25257__$1;
(statearr_25291_25370[(1)] = (44));

} else {
var statearr_25292_25371 = state_25257__$1;
(statearr_25292_25371[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (29))){
var inst_25171 = (state_25257[(19)]);
var inst_25175 = (state_25257[(23)]);
var inst_25177 = (state_25257[(26)]);
var inst_25211 = (state_25257[(16)]);
var inst_25174 = (state_25257[(24)]);
var inst_25179 = (state_25257[(25)]);
var inst_25207 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25210 = (function (){var all_files = inst_25171;
var res_SINGLEQUOTE_ = inst_25174;
var res = inst_25175;
var files_not_loaded = inst_25177;
var dependencies_that_loaded = inst_25179;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25171,inst_25175,inst_25177,inst_25211,inst_25174,inst_25179,inst_25207,state_val_25258,c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25209){
var map__25293 = p__25209;
var map__25293__$1 = ((((!((map__25293 == null)))?((((map__25293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25293):map__25293);
var namespace = cljs.core.get.call(null,map__25293__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25171,inst_25175,inst_25177,inst_25211,inst_25174,inst_25179,inst_25207,state_val_25258,c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25211__$1 = cljs.core.group_by.call(null,inst_25210,inst_25177);
var inst_25213 = (inst_25211__$1 == null);
var inst_25214 = cljs.core.not.call(null,inst_25213);
var state_25257__$1 = (function (){var statearr_25295 = state_25257;
(statearr_25295[(28)] = inst_25207);

(statearr_25295[(16)] = inst_25211__$1);

return statearr_25295;
})();
if(inst_25214){
var statearr_25296_25372 = state_25257__$1;
(statearr_25296_25372[(1)] = (32));

} else {
var statearr_25297_25373 = state_25257__$1;
(statearr_25297_25373[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (44))){
var inst_25233 = (state_25257[(21)]);
var inst_25246 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25233);
var inst_25247 = cljs.core.pr_str.call(null,inst_25246);
var inst_25248 = [cljs.core.str("not required: "),cljs.core.str(inst_25247)].join('');
var inst_25249 = figwheel.client.utils.log.call(null,inst_25248);
var state_25257__$1 = state_25257;
var statearr_25298_25374 = state_25257__$1;
(statearr_25298_25374[(2)] = inst_25249);

(statearr_25298_25374[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (6))){
var inst_25152 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
var statearr_25299_25375 = state_25257__$1;
(statearr_25299_25375[(2)] = inst_25152);

(statearr_25299_25375[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (28))){
var inst_25177 = (state_25257[(26)]);
var inst_25204 = (state_25257[(2)]);
var inst_25205 = cljs.core.not_empty.call(null,inst_25177);
var state_25257__$1 = (function (){var statearr_25300 = state_25257;
(statearr_25300[(29)] = inst_25204);

return statearr_25300;
})();
if(cljs.core.truth_(inst_25205)){
var statearr_25301_25376 = state_25257__$1;
(statearr_25301_25376[(1)] = (29));

} else {
var statearr_25302_25377 = state_25257__$1;
(statearr_25302_25377[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (25))){
var inst_25175 = (state_25257[(23)]);
var inst_25191 = (state_25257[(2)]);
var inst_25192 = cljs.core.not_empty.call(null,inst_25175);
var state_25257__$1 = (function (){var statearr_25303 = state_25257;
(statearr_25303[(30)] = inst_25191);

return statearr_25303;
})();
if(cljs.core.truth_(inst_25192)){
var statearr_25304_25378 = state_25257__$1;
(statearr_25304_25378[(1)] = (26));

} else {
var statearr_25305_25379 = state_25257__$1;
(statearr_25305_25379[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (34))){
var inst_25226 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
if(cljs.core.truth_(inst_25226)){
var statearr_25306_25380 = state_25257__$1;
(statearr_25306_25380[(1)] = (38));

} else {
var statearr_25307_25381 = state_25257__$1;
(statearr_25307_25381[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (17))){
var state_25257__$1 = state_25257;
var statearr_25308_25382 = state_25257__$1;
(statearr_25308_25382[(2)] = recompile_dependents);

(statearr_25308_25382[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (3))){
var state_25257__$1 = state_25257;
var statearr_25309_25383 = state_25257__$1;
(statearr_25309_25383[(2)] = null);

(statearr_25309_25383[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (12))){
var inst_25148 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
var statearr_25310_25384 = state_25257__$1;
(statearr_25310_25384[(2)] = inst_25148);

(statearr_25310_25384[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (2))){
var inst_25110 = (state_25257[(13)]);
var inst_25117 = cljs.core.seq.call(null,inst_25110);
var inst_25118 = inst_25117;
var inst_25119 = null;
var inst_25120 = (0);
var inst_25121 = (0);
var state_25257__$1 = (function (){var statearr_25311 = state_25257;
(statearr_25311[(7)] = inst_25121);

(statearr_25311[(8)] = inst_25118);

(statearr_25311[(9)] = inst_25119);

(statearr_25311[(10)] = inst_25120);

return statearr_25311;
})();
var statearr_25312_25385 = state_25257__$1;
(statearr_25312_25385[(2)] = null);

(statearr_25312_25385[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (23))){
var inst_25171 = (state_25257[(19)]);
var inst_25175 = (state_25257[(23)]);
var inst_25177 = (state_25257[(26)]);
var inst_25174 = (state_25257[(24)]);
var inst_25179 = (state_25257[(25)]);
var inst_25182 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25184 = (function (){var all_files = inst_25171;
var res_SINGLEQUOTE_ = inst_25174;
var res = inst_25175;
var files_not_loaded = inst_25177;
var dependencies_that_loaded = inst_25179;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25171,inst_25175,inst_25177,inst_25174,inst_25179,inst_25182,state_val_25258,c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25183){
var map__25313 = p__25183;
var map__25313__$1 = ((((!((map__25313 == null)))?((((map__25313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25313):map__25313);
var request_url = cljs.core.get.call(null,map__25313__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25171,inst_25175,inst_25177,inst_25174,inst_25179,inst_25182,state_val_25258,c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25185 = cljs.core.reverse.call(null,inst_25179);
var inst_25186 = cljs.core.map.call(null,inst_25184,inst_25185);
var inst_25187 = cljs.core.pr_str.call(null,inst_25186);
var inst_25188 = figwheel.client.utils.log.call(null,inst_25187);
var state_25257__$1 = (function (){var statearr_25315 = state_25257;
(statearr_25315[(31)] = inst_25182);

return statearr_25315;
})();
var statearr_25316_25386 = state_25257__$1;
(statearr_25316_25386[(2)] = inst_25188);

(statearr_25316_25386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (35))){
var state_25257__$1 = state_25257;
var statearr_25317_25387 = state_25257__$1;
(statearr_25317_25387[(2)] = true);

(statearr_25317_25387[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (19))){
var inst_25161 = (state_25257[(12)]);
var inst_25167 = figwheel.client.file_reloading.expand_files.call(null,inst_25161);
var state_25257__$1 = state_25257;
var statearr_25318_25388 = state_25257__$1;
(statearr_25318_25388[(2)] = inst_25167);

(statearr_25318_25388[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (11))){
var state_25257__$1 = state_25257;
var statearr_25319_25389 = state_25257__$1;
(statearr_25319_25389[(2)] = null);

(statearr_25319_25389[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (9))){
var inst_25150 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
var statearr_25320_25390 = state_25257__$1;
(statearr_25320_25390[(2)] = inst_25150);

(statearr_25320_25390[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (5))){
var inst_25121 = (state_25257[(7)]);
var inst_25120 = (state_25257[(10)]);
var inst_25123 = (inst_25121 < inst_25120);
var inst_25124 = inst_25123;
var state_25257__$1 = state_25257;
if(cljs.core.truth_(inst_25124)){
var statearr_25321_25391 = state_25257__$1;
(statearr_25321_25391[(1)] = (7));

} else {
var statearr_25322_25392 = state_25257__$1;
(statearr_25322_25392[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (14))){
var inst_25131 = (state_25257[(22)]);
var inst_25140 = cljs.core.first.call(null,inst_25131);
var inst_25141 = figwheel.client.file_reloading.eval_body.call(null,inst_25140,opts);
var inst_25142 = cljs.core.next.call(null,inst_25131);
var inst_25118 = inst_25142;
var inst_25119 = null;
var inst_25120 = (0);
var inst_25121 = (0);
var state_25257__$1 = (function (){var statearr_25323 = state_25257;
(statearr_25323[(7)] = inst_25121);

(statearr_25323[(32)] = inst_25141);

(statearr_25323[(8)] = inst_25118);

(statearr_25323[(9)] = inst_25119);

(statearr_25323[(10)] = inst_25120);

return statearr_25323;
})();
var statearr_25324_25393 = state_25257__$1;
(statearr_25324_25393[(2)] = null);

(statearr_25324_25393[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (45))){
var state_25257__$1 = state_25257;
var statearr_25325_25394 = state_25257__$1;
(statearr_25325_25394[(2)] = null);

(statearr_25325_25394[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (26))){
var inst_25171 = (state_25257[(19)]);
var inst_25175 = (state_25257[(23)]);
var inst_25177 = (state_25257[(26)]);
var inst_25174 = (state_25257[(24)]);
var inst_25179 = (state_25257[(25)]);
var inst_25194 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25196 = (function (){var all_files = inst_25171;
var res_SINGLEQUOTE_ = inst_25174;
var res = inst_25175;
var files_not_loaded = inst_25177;
var dependencies_that_loaded = inst_25179;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25171,inst_25175,inst_25177,inst_25174,inst_25179,inst_25194,state_val_25258,c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25195){
var map__25326 = p__25195;
var map__25326__$1 = ((((!((map__25326 == null)))?((((map__25326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25326):map__25326);
var namespace = cljs.core.get.call(null,map__25326__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25326__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25171,inst_25175,inst_25177,inst_25174,inst_25179,inst_25194,state_val_25258,c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25197 = cljs.core.map.call(null,inst_25196,inst_25175);
var inst_25198 = cljs.core.pr_str.call(null,inst_25197);
var inst_25199 = figwheel.client.utils.log.call(null,inst_25198);
var inst_25200 = (function (){var all_files = inst_25171;
var res_SINGLEQUOTE_ = inst_25174;
var res = inst_25175;
var files_not_loaded = inst_25177;
var dependencies_that_loaded = inst_25179;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25171,inst_25175,inst_25177,inst_25174,inst_25179,inst_25194,inst_25196,inst_25197,inst_25198,inst_25199,state_val_25258,c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25171,inst_25175,inst_25177,inst_25174,inst_25179,inst_25194,inst_25196,inst_25197,inst_25198,inst_25199,state_val_25258,c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25201 = setTimeout(inst_25200,(10));
var state_25257__$1 = (function (){var statearr_25328 = state_25257;
(statearr_25328[(33)] = inst_25199);

(statearr_25328[(34)] = inst_25194);

return statearr_25328;
})();
var statearr_25329_25395 = state_25257__$1;
(statearr_25329_25395[(2)] = inst_25201);

(statearr_25329_25395[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (16))){
var state_25257__$1 = state_25257;
var statearr_25330_25396 = state_25257__$1;
(statearr_25330_25396[(2)] = reload_dependents);

(statearr_25330_25396[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (38))){
var inst_25211 = (state_25257[(16)]);
var inst_25228 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25211);
var state_25257__$1 = state_25257;
var statearr_25331_25397 = state_25257__$1;
(statearr_25331_25397[(2)] = inst_25228);

(statearr_25331_25397[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (30))){
var state_25257__$1 = state_25257;
var statearr_25332_25398 = state_25257__$1;
(statearr_25332_25398[(2)] = null);

(statearr_25332_25398[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (10))){
var inst_25131 = (state_25257[(22)]);
var inst_25133 = cljs.core.chunked_seq_QMARK_.call(null,inst_25131);
var state_25257__$1 = state_25257;
if(inst_25133){
var statearr_25333_25399 = state_25257__$1;
(statearr_25333_25399[(1)] = (13));

} else {
var statearr_25334_25400 = state_25257__$1;
(statearr_25334_25400[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (18))){
var inst_25165 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
if(cljs.core.truth_(inst_25165)){
var statearr_25335_25401 = state_25257__$1;
(statearr_25335_25401[(1)] = (19));

} else {
var statearr_25336_25402 = state_25257__$1;
(statearr_25336_25402[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (42))){
var state_25257__$1 = state_25257;
var statearr_25337_25403 = state_25257__$1;
(statearr_25337_25403[(2)] = null);

(statearr_25337_25403[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (37))){
var inst_25223 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
var statearr_25338_25404 = state_25257__$1;
(statearr_25338_25404[(2)] = inst_25223);

(statearr_25338_25404[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (8))){
var inst_25131 = (state_25257[(22)]);
var inst_25118 = (state_25257[(8)]);
var inst_25131__$1 = cljs.core.seq.call(null,inst_25118);
var state_25257__$1 = (function (){var statearr_25339 = state_25257;
(statearr_25339[(22)] = inst_25131__$1);

return statearr_25339;
})();
if(inst_25131__$1){
var statearr_25340_25405 = state_25257__$1;
(statearr_25340_25405[(1)] = (10));

} else {
var statearr_25341_25406 = state_25257__$1;
(statearr_25341_25406[(1)] = (11));

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
});})(c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21518__auto__,c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21519__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21519__auto____0 = (function (){
var statearr_25345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25345[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21519__auto__);

(statearr_25345[(1)] = (1));

return statearr_25345;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21519__auto____1 = (function (state_25257){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_25257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e25346){if((e25346 instanceof Object)){
var ex__21522__auto__ = e25346;
var statearr_25347_25407 = state_25257;
(statearr_25347_25407[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25408 = state_25257;
state_25257 = G__25408;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21519__auto__ = function(state_25257){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21519__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21519__auto____1.call(this,state_25257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21519__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21519__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21632__auto__ = (function (){var statearr_25348 = f__21631__auto__.call(null);
(statearr_25348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto__);

return statearr_25348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto__,map__25103,map__25103__$1,opts,before_jsload,on_jsload,reload_dependents,map__25104,map__25104__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21630__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25411,link){
var map__25414 = p__25411;
var map__25414__$1 = ((((!((map__25414 == null)))?((((map__25414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25414):map__25414);
var file = cljs.core.get.call(null,map__25414__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__25414,map__25414__$1,file){
return (function (p1__25409_SHARP_,p2__25410_SHARP_){
if(cljs.core._EQ_.call(null,p1__25409_SHARP_,p2__25410_SHARP_)){
return p1__25409_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__25414,map__25414__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25420){
var map__25421 = p__25420;
var map__25421__$1 = ((((!((map__25421 == null)))?((((map__25421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25421):map__25421);
var match_length = cljs.core.get.call(null,map__25421__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25421__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25416_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25416_SHARP_);
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
var args25423 = [];
var len__19529__auto___25426 = arguments.length;
var i__19530__auto___25427 = (0);
while(true){
if((i__19530__auto___25427 < len__19529__auto___25426)){
args25423.push((arguments[i__19530__auto___25427]));

var G__25428 = (i__19530__auto___25427 + (1));
i__19530__auto___25427 = G__25428;
continue;
} else {
}
break;
}

var G__25425 = args25423.length;
switch (G__25425) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25423.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25430_SHARP_,p2__25431_SHARP_){
return cljs.core.assoc.call(null,p1__25430_SHARP_,cljs.core.get.call(null,p2__25431_SHARP_,key),p2__25431_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25432){
var map__25435 = p__25432;
var map__25435__$1 = ((((!((map__25435 == null)))?((((map__25435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25435):map__25435);
var f_data = map__25435__$1;
var file = cljs.core.get.call(null,map__25435__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25437,files_msg){
var map__25444 = p__25437;
var map__25444__$1 = ((((!((map__25444 == null)))?((((map__25444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25444):map__25444);
var opts = map__25444__$1;
var on_cssload = cljs.core.get.call(null,map__25444__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25446_25450 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25447_25451 = null;
var count__25448_25452 = (0);
var i__25449_25453 = (0);
while(true){
if((i__25449_25453 < count__25448_25452)){
var f_25454 = cljs.core._nth.call(null,chunk__25447_25451,i__25449_25453);
figwheel.client.file_reloading.reload_css_file.call(null,f_25454);

var G__25455 = seq__25446_25450;
var G__25456 = chunk__25447_25451;
var G__25457 = count__25448_25452;
var G__25458 = (i__25449_25453 + (1));
seq__25446_25450 = G__25455;
chunk__25447_25451 = G__25456;
count__25448_25452 = G__25457;
i__25449_25453 = G__25458;
continue;
} else {
var temp__4657__auto___25459 = cljs.core.seq.call(null,seq__25446_25450);
if(temp__4657__auto___25459){
var seq__25446_25460__$1 = temp__4657__auto___25459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25446_25460__$1)){
var c__19270__auto___25461 = cljs.core.chunk_first.call(null,seq__25446_25460__$1);
var G__25462 = cljs.core.chunk_rest.call(null,seq__25446_25460__$1);
var G__25463 = c__19270__auto___25461;
var G__25464 = cljs.core.count.call(null,c__19270__auto___25461);
var G__25465 = (0);
seq__25446_25450 = G__25462;
chunk__25447_25451 = G__25463;
count__25448_25452 = G__25464;
i__25449_25453 = G__25465;
continue;
} else {
var f_25466 = cljs.core.first.call(null,seq__25446_25460__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25466);

var G__25467 = cljs.core.next.call(null,seq__25446_25460__$1);
var G__25468 = null;
var G__25469 = (0);
var G__25470 = (0);
seq__25446_25450 = G__25467;
chunk__25447_25451 = G__25468;
count__25448_25452 = G__25469;
i__25449_25453 = G__25470;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25444,map__25444__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25444,map__25444__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1505315425917