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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27144_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27144_SHARP_));
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
var seq__27149 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27150 = null;
var count__27151 = (0);
var i__27152 = (0);
while(true){
if((i__27152 < count__27151)){
var n = cljs.core._nth.call(null,chunk__27150,i__27152);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27153 = seq__27149;
var G__27154 = chunk__27150;
var G__27155 = count__27151;
var G__27156 = (i__27152 + (1));
seq__27149 = G__27153;
chunk__27150 = G__27154;
count__27151 = G__27155;
i__27152 = G__27156;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27149);
if(temp__4657__auto__){
var seq__27149__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27149__$1)){
var c__19271__auto__ = cljs.core.chunk_first.call(null,seq__27149__$1);
var G__27157 = cljs.core.chunk_rest.call(null,seq__27149__$1);
var G__27158 = c__19271__auto__;
var G__27159 = cljs.core.count.call(null,c__19271__auto__);
var G__27160 = (0);
seq__27149 = G__27157;
chunk__27150 = G__27158;
count__27151 = G__27159;
i__27152 = G__27160;
continue;
} else {
var n = cljs.core.first.call(null,seq__27149__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27161 = cljs.core.next.call(null,seq__27149__$1);
var G__27162 = null;
var G__27163 = (0);
var G__27164 = (0);
seq__27149 = G__27161;
chunk__27150 = G__27162;
count__27151 = G__27163;
i__27152 = G__27164;
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

var seq__27203_27210 = cljs.core.seq.call(null,deps);
var chunk__27204_27211 = null;
var count__27205_27212 = (0);
var i__27206_27213 = (0);
while(true){
if((i__27206_27213 < count__27205_27212)){
var dep_27214 = cljs.core._nth.call(null,chunk__27204_27211,i__27206_27213);
topo_sort_helper_STAR_.call(null,dep_27214,(depth + (1)),state);

var G__27215 = seq__27203_27210;
var G__27216 = chunk__27204_27211;
var G__27217 = count__27205_27212;
var G__27218 = (i__27206_27213 + (1));
seq__27203_27210 = G__27215;
chunk__27204_27211 = G__27216;
count__27205_27212 = G__27217;
i__27206_27213 = G__27218;
continue;
} else {
var temp__4657__auto___27219 = cljs.core.seq.call(null,seq__27203_27210);
if(temp__4657__auto___27219){
var seq__27203_27220__$1 = temp__4657__auto___27219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27203_27220__$1)){
var c__19271__auto___27221 = cljs.core.chunk_first.call(null,seq__27203_27220__$1);
var G__27222 = cljs.core.chunk_rest.call(null,seq__27203_27220__$1);
var G__27223 = c__19271__auto___27221;
var G__27224 = cljs.core.count.call(null,c__19271__auto___27221);
var G__27225 = (0);
seq__27203_27210 = G__27222;
chunk__27204_27211 = G__27223;
count__27205_27212 = G__27224;
i__27206_27213 = G__27225;
continue;
} else {
var dep_27226 = cljs.core.first.call(null,seq__27203_27220__$1);
topo_sort_helper_STAR_.call(null,dep_27226,(depth + (1)),state);

var G__27227 = cljs.core.next.call(null,seq__27203_27220__$1);
var G__27228 = null;
var G__27229 = (0);
var G__27230 = (0);
seq__27203_27210 = G__27227;
chunk__27204_27211 = G__27228;
count__27205_27212 = G__27229;
i__27206_27213 = G__27230;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27207){
var vec__27209 = p__27207;
var x = cljs.core.nth.call(null,vec__27209,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27209,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27209,x,xs,get_deps__$1){
return (function (p1__27165_SHARP_){
return clojure.set.difference.call(null,p1__27165_SHARP_,x);
});})(vec__27209,x,xs,get_deps__$1))
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
var seq__27243 = cljs.core.seq.call(null,provides);
var chunk__27244 = null;
var count__27245 = (0);
var i__27246 = (0);
while(true){
if((i__27246 < count__27245)){
var prov = cljs.core._nth.call(null,chunk__27244,i__27246);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27247_27255 = cljs.core.seq.call(null,requires);
var chunk__27248_27256 = null;
var count__27249_27257 = (0);
var i__27250_27258 = (0);
while(true){
if((i__27250_27258 < count__27249_27257)){
var req_27259 = cljs.core._nth.call(null,chunk__27248_27256,i__27250_27258);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27259,prov);

var G__27260 = seq__27247_27255;
var G__27261 = chunk__27248_27256;
var G__27262 = count__27249_27257;
var G__27263 = (i__27250_27258 + (1));
seq__27247_27255 = G__27260;
chunk__27248_27256 = G__27261;
count__27249_27257 = G__27262;
i__27250_27258 = G__27263;
continue;
} else {
var temp__4657__auto___27264 = cljs.core.seq.call(null,seq__27247_27255);
if(temp__4657__auto___27264){
var seq__27247_27265__$1 = temp__4657__auto___27264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27247_27265__$1)){
var c__19271__auto___27266 = cljs.core.chunk_first.call(null,seq__27247_27265__$1);
var G__27267 = cljs.core.chunk_rest.call(null,seq__27247_27265__$1);
var G__27268 = c__19271__auto___27266;
var G__27269 = cljs.core.count.call(null,c__19271__auto___27266);
var G__27270 = (0);
seq__27247_27255 = G__27267;
chunk__27248_27256 = G__27268;
count__27249_27257 = G__27269;
i__27250_27258 = G__27270;
continue;
} else {
var req_27271 = cljs.core.first.call(null,seq__27247_27265__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27271,prov);

var G__27272 = cljs.core.next.call(null,seq__27247_27265__$1);
var G__27273 = null;
var G__27274 = (0);
var G__27275 = (0);
seq__27247_27255 = G__27272;
chunk__27248_27256 = G__27273;
count__27249_27257 = G__27274;
i__27250_27258 = G__27275;
continue;
}
} else {
}
}
break;
}

var G__27276 = seq__27243;
var G__27277 = chunk__27244;
var G__27278 = count__27245;
var G__27279 = (i__27246 + (1));
seq__27243 = G__27276;
chunk__27244 = G__27277;
count__27245 = G__27278;
i__27246 = G__27279;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27243);
if(temp__4657__auto__){
var seq__27243__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27243__$1)){
var c__19271__auto__ = cljs.core.chunk_first.call(null,seq__27243__$1);
var G__27280 = cljs.core.chunk_rest.call(null,seq__27243__$1);
var G__27281 = c__19271__auto__;
var G__27282 = cljs.core.count.call(null,c__19271__auto__);
var G__27283 = (0);
seq__27243 = G__27280;
chunk__27244 = G__27281;
count__27245 = G__27282;
i__27246 = G__27283;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27243__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27251_27284 = cljs.core.seq.call(null,requires);
var chunk__27252_27285 = null;
var count__27253_27286 = (0);
var i__27254_27287 = (0);
while(true){
if((i__27254_27287 < count__27253_27286)){
var req_27288 = cljs.core._nth.call(null,chunk__27252_27285,i__27254_27287);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27288,prov);

var G__27289 = seq__27251_27284;
var G__27290 = chunk__27252_27285;
var G__27291 = count__27253_27286;
var G__27292 = (i__27254_27287 + (1));
seq__27251_27284 = G__27289;
chunk__27252_27285 = G__27290;
count__27253_27286 = G__27291;
i__27254_27287 = G__27292;
continue;
} else {
var temp__4657__auto___27293__$1 = cljs.core.seq.call(null,seq__27251_27284);
if(temp__4657__auto___27293__$1){
var seq__27251_27294__$1 = temp__4657__auto___27293__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27251_27294__$1)){
var c__19271__auto___27295 = cljs.core.chunk_first.call(null,seq__27251_27294__$1);
var G__27296 = cljs.core.chunk_rest.call(null,seq__27251_27294__$1);
var G__27297 = c__19271__auto___27295;
var G__27298 = cljs.core.count.call(null,c__19271__auto___27295);
var G__27299 = (0);
seq__27251_27284 = G__27296;
chunk__27252_27285 = G__27297;
count__27253_27286 = G__27298;
i__27254_27287 = G__27299;
continue;
} else {
var req_27300 = cljs.core.first.call(null,seq__27251_27294__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27300,prov);

var G__27301 = cljs.core.next.call(null,seq__27251_27294__$1);
var G__27302 = null;
var G__27303 = (0);
var G__27304 = (0);
seq__27251_27284 = G__27301;
chunk__27252_27285 = G__27302;
count__27253_27286 = G__27303;
i__27254_27287 = G__27304;
continue;
}
} else {
}
}
break;
}

var G__27305 = cljs.core.next.call(null,seq__27243__$1);
var G__27306 = null;
var G__27307 = (0);
var G__27308 = (0);
seq__27243 = G__27305;
chunk__27244 = G__27306;
count__27245 = G__27307;
i__27246 = G__27308;
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
var seq__27313_27317 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27314_27318 = null;
var count__27315_27319 = (0);
var i__27316_27320 = (0);
while(true){
if((i__27316_27320 < count__27315_27319)){
var ns_27321 = cljs.core._nth.call(null,chunk__27314_27318,i__27316_27320);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27321);

var G__27322 = seq__27313_27317;
var G__27323 = chunk__27314_27318;
var G__27324 = count__27315_27319;
var G__27325 = (i__27316_27320 + (1));
seq__27313_27317 = G__27322;
chunk__27314_27318 = G__27323;
count__27315_27319 = G__27324;
i__27316_27320 = G__27325;
continue;
} else {
var temp__4657__auto___27326 = cljs.core.seq.call(null,seq__27313_27317);
if(temp__4657__auto___27326){
var seq__27313_27327__$1 = temp__4657__auto___27326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27313_27327__$1)){
var c__19271__auto___27328 = cljs.core.chunk_first.call(null,seq__27313_27327__$1);
var G__27329 = cljs.core.chunk_rest.call(null,seq__27313_27327__$1);
var G__27330 = c__19271__auto___27328;
var G__27331 = cljs.core.count.call(null,c__19271__auto___27328);
var G__27332 = (0);
seq__27313_27317 = G__27329;
chunk__27314_27318 = G__27330;
count__27315_27319 = G__27331;
i__27316_27320 = G__27332;
continue;
} else {
var ns_27333 = cljs.core.first.call(null,seq__27313_27327__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27333);

var G__27334 = cljs.core.next.call(null,seq__27313_27327__$1);
var G__27335 = null;
var G__27336 = (0);
var G__27337 = (0);
seq__27313_27317 = G__27334;
chunk__27314_27318 = G__27335;
count__27315_27319 = G__27336;
i__27316_27320 = G__27337;
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
var G__27338__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27338 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27339__i = 0, G__27339__a = new Array(arguments.length -  0);
while (G__27339__i < G__27339__a.length) {G__27339__a[G__27339__i] = arguments[G__27339__i + 0]; ++G__27339__i;}
  args = new cljs.core.IndexedSeq(G__27339__a,0);
} 
return G__27338__delegate.call(this,args);};
G__27338.cljs$lang$maxFixedArity = 0;
G__27338.cljs$lang$applyTo = (function (arglist__27340){
var args = cljs.core.seq(arglist__27340);
return G__27338__delegate(args);
});
G__27338.cljs$core$IFn$_invoke$arity$variadic = G__27338__delegate;
return G__27338;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27342 = cljs.core._EQ_;
var expr__27343 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27342.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27343))){
var path_parts = ((function (pred__27342,expr__27343){
return (function (p1__27341_SHARP_){
return clojure.string.split.call(null,p1__27341_SHARP_,/[\/\\]/);
});})(pred__27342,expr__27343))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27342,expr__27343){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27345){if((e27345 instanceof Error)){
var e = e27345;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27345;

}
}})());
});
;})(path_parts,sep,root,pred__27342,expr__27343))
} else {
if(cljs.core.truth_(pred__27342.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27343))){
return ((function (pred__27342,expr__27343){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27342,expr__27343){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27342,expr__27343))
);

return deferred.addErrback(((function (deferred,pred__27342,expr__27343){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27342,expr__27343))
);
});
;})(pred__27342,expr__27343))
} else {
return ((function (pred__27342,expr__27343){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27342,expr__27343))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27346,callback){
var map__27349 = p__27346;
var map__27349__$1 = ((((!((map__27349 == null)))?((((map__27349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27349):map__27349);
var file_msg = map__27349__$1;
var request_url = cljs.core.get.call(null,map__27349__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27349,map__27349__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27349,map__27349__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto__){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto__){
return (function (state_27373){
var state_val_27374 = (state_27373[(1)]);
if((state_val_27374 === (7))){
var inst_27369 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
var statearr_27375_27395 = state_27373__$1;
(statearr_27375_27395[(2)] = inst_27369);

(statearr_27375_27395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (1))){
var state_27373__$1 = state_27373;
var statearr_27376_27396 = state_27373__$1;
(statearr_27376_27396[(2)] = null);

(statearr_27376_27396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (4))){
var inst_27353 = (state_27373[(7)]);
var inst_27353__$1 = (state_27373[(2)]);
var state_27373__$1 = (function (){var statearr_27377 = state_27373;
(statearr_27377[(7)] = inst_27353__$1);

return statearr_27377;
})();
if(cljs.core.truth_(inst_27353__$1)){
var statearr_27378_27397 = state_27373__$1;
(statearr_27378_27397[(1)] = (5));

} else {
var statearr_27379_27398 = state_27373__$1;
(statearr_27379_27398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (6))){
var state_27373__$1 = state_27373;
var statearr_27380_27399 = state_27373__$1;
(statearr_27380_27399[(2)] = null);

(statearr_27380_27399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (3))){
var inst_27371 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27373__$1,inst_27371);
} else {
if((state_val_27374 === (2))){
var state_27373__$1 = state_27373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27373__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27374 === (11))){
var inst_27365 = (state_27373[(2)]);
var state_27373__$1 = (function (){var statearr_27381 = state_27373;
(statearr_27381[(8)] = inst_27365);

return statearr_27381;
})();
var statearr_27382_27400 = state_27373__$1;
(statearr_27382_27400[(2)] = null);

(statearr_27382_27400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (9))){
var inst_27359 = (state_27373[(9)]);
var inst_27357 = (state_27373[(10)]);
var inst_27361 = inst_27359.call(null,inst_27357);
var state_27373__$1 = state_27373;
var statearr_27383_27401 = state_27373__$1;
(statearr_27383_27401[(2)] = inst_27361);

(statearr_27383_27401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (5))){
var inst_27353 = (state_27373[(7)]);
var inst_27355 = figwheel.client.file_reloading.blocking_load.call(null,inst_27353);
var state_27373__$1 = state_27373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27373__$1,(8),inst_27355);
} else {
if((state_val_27374 === (10))){
var inst_27357 = (state_27373[(10)]);
var inst_27363 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27357);
var state_27373__$1 = state_27373;
var statearr_27384_27402 = state_27373__$1;
(statearr_27384_27402[(2)] = inst_27363);

(statearr_27384_27402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (8))){
var inst_27353 = (state_27373[(7)]);
var inst_27359 = (state_27373[(9)]);
var inst_27357 = (state_27373[(2)]);
var inst_27358 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27359__$1 = cljs.core.get.call(null,inst_27358,inst_27353);
var state_27373__$1 = (function (){var statearr_27385 = state_27373;
(statearr_27385[(9)] = inst_27359__$1);

(statearr_27385[(10)] = inst_27357);

return statearr_27385;
})();
if(cljs.core.truth_(inst_27359__$1)){
var statearr_27386_27403 = state_27373__$1;
(statearr_27386_27403[(1)] = (9));

} else {
var statearr_27387_27404 = state_27373__$1;
(statearr_27387_27404[(1)] = (10));

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
});})(c__22651__auto__))
;
return ((function (switch__20473__auto__,c__22651__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20474__auto__ = null;
var figwheel$client$file_reloading$state_machine__20474__auto____0 = (function (){
var statearr_27391 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27391[(0)] = figwheel$client$file_reloading$state_machine__20474__auto__);

(statearr_27391[(1)] = (1));

return statearr_27391;
});
var figwheel$client$file_reloading$state_machine__20474__auto____1 = (function (state_27373){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_27373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e27392){if((e27392 instanceof Object)){
var ex__20477__auto__ = e27392;
var statearr_27393_27405 = state_27373;
(statearr_27393_27405[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27406 = state_27373;
state_27373 = G__27406;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20474__auto__ = function(state_27373){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20474__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20474__auto____1.call(this,state_27373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20474__auto____0;
figwheel$client$file_reloading$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20474__auto____1;
return figwheel$client$file_reloading$state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto__))
})();
var state__22653__auto__ = (function (){var statearr_27394 = f__22652__auto__.call(null);
(statearr_27394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto__);

return statearr_27394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto__))
);

return c__22651__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27407,callback){
var map__27410 = p__27407;
var map__27410__$1 = ((((!((map__27410 == null)))?((((map__27410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27410):map__27410);
var file_msg = map__27410__$1;
var namespace = cljs.core.get.call(null,map__27410__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27410,map__27410__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27410,map__27410__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27412){
var map__27415 = p__27412;
var map__27415__$1 = ((((!((map__27415 == null)))?((((map__27415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27415):map__27415);
var file_msg = map__27415__$1;
var namespace = cljs.core.get.call(null,map__27415__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27417,callback){
var map__27420 = p__27417;
var map__27420__$1 = ((((!((map__27420 == null)))?((((map__27420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27420):map__27420);
var file_msg = map__27420__$1;
var request_url = cljs.core.get.call(null,map__27420__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27420__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22651__auto___27508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto___27508,out){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto___27508,out){
return (function (state_27490){
var state_val_27491 = (state_27490[(1)]);
if((state_val_27491 === (1))){
var inst_27468 = cljs.core.nth.call(null,files,(0),null);
var inst_27469 = cljs.core.nthnext.call(null,files,(1));
var inst_27470 = files;
var state_27490__$1 = (function (){var statearr_27492 = state_27490;
(statearr_27492[(7)] = inst_27468);

(statearr_27492[(8)] = inst_27470);

(statearr_27492[(9)] = inst_27469);

return statearr_27492;
})();
var statearr_27493_27509 = state_27490__$1;
(statearr_27493_27509[(2)] = null);

(statearr_27493_27509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (2))){
var inst_27470 = (state_27490[(8)]);
var inst_27473 = (state_27490[(10)]);
var inst_27473__$1 = cljs.core.nth.call(null,inst_27470,(0),null);
var inst_27474 = cljs.core.nthnext.call(null,inst_27470,(1));
var inst_27475 = (inst_27473__$1 == null);
var inst_27476 = cljs.core.not.call(null,inst_27475);
var state_27490__$1 = (function (){var statearr_27494 = state_27490;
(statearr_27494[(11)] = inst_27474);

(statearr_27494[(10)] = inst_27473__$1);

return statearr_27494;
})();
if(inst_27476){
var statearr_27495_27510 = state_27490__$1;
(statearr_27495_27510[(1)] = (4));

} else {
var statearr_27496_27511 = state_27490__$1;
(statearr_27496_27511[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (3))){
var inst_27488 = (state_27490[(2)]);
var state_27490__$1 = state_27490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27490__$1,inst_27488);
} else {
if((state_val_27491 === (4))){
var inst_27473 = (state_27490[(10)]);
var inst_27478 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27473);
var state_27490__$1 = state_27490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27490__$1,(7),inst_27478);
} else {
if((state_val_27491 === (5))){
var inst_27484 = cljs.core.async.close_BANG_.call(null,out);
var state_27490__$1 = state_27490;
var statearr_27497_27512 = state_27490__$1;
(statearr_27497_27512[(2)] = inst_27484);

(statearr_27497_27512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (6))){
var inst_27486 = (state_27490[(2)]);
var state_27490__$1 = state_27490;
var statearr_27498_27513 = state_27490__$1;
(statearr_27498_27513[(2)] = inst_27486);

(statearr_27498_27513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (7))){
var inst_27474 = (state_27490[(11)]);
var inst_27480 = (state_27490[(2)]);
var inst_27481 = cljs.core.async.put_BANG_.call(null,out,inst_27480);
var inst_27470 = inst_27474;
var state_27490__$1 = (function (){var statearr_27499 = state_27490;
(statearr_27499[(12)] = inst_27481);

(statearr_27499[(8)] = inst_27470);

return statearr_27499;
})();
var statearr_27500_27514 = state_27490__$1;
(statearr_27500_27514[(2)] = null);

(statearr_27500_27514[(1)] = (2));


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
});})(c__22651__auto___27508,out))
;
return ((function (switch__20473__auto__,c__22651__auto___27508,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20474__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20474__auto____0 = (function (){
var statearr_27504 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27504[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20474__auto__);

(statearr_27504[(1)] = (1));

return statearr_27504;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20474__auto____1 = (function (state_27490){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_27490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e27505){if((e27505 instanceof Object)){
var ex__20477__auto__ = e27505;
var statearr_27506_27515 = state_27490;
(statearr_27506_27515[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27516 = state_27490;
state_27490 = G__27516;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20474__auto__ = function(state_27490){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20474__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20474__auto____1.call(this,state_27490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20474__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20474__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto___27508,out))
})();
var state__22653__auto__ = (function (){var statearr_27507 = f__22652__auto__.call(null);
(statearr_27507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto___27508);

return statearr_27507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto___27508,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27517,opts){
var map__27521 = p__27517;
var map__27521__$1 = ((((!((map__27521 == null)))?((((map__27521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27521):map__27521);
var eval_body__$1 = cljs.core.get.call(null,map__27521__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27521__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27523){var e = e27523;
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
return (function (p1__27524_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27524_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27529){
var vec__27530 = p__27529;
var k = cljs.core.nth.call(null,vec__27530,(0),null);
var v = cljs.core.nth.call(null,vec__27530,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27531){
var vec__27532 = p__27531;
var k = cljs.core.nth.call(null,vec__27532,(0),null);
var v = cljs.core.nth.call(null,vec__27532,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27536,p__27537){
var map__27784 = p__27536;
var map__27784__$1 = ((((!((map__27784 == null)))?((((map__27784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27784):map__27784);
var opts = map__27784__$1;
var before_jsload = cljs.core.get.call(null,map__27784__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27784__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27784__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27785 = p__27537;
var map__27785__$1 = ((((!((map__27785 == null)))?((((map__27785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27785):map__27785);
var msg = map__27785__$1;
var files = cljs.core.get.call(null,map__27785__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27785__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27785__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27938){
var state_val_27939 = (state_27938[(1)]);
if((state_val_27939 === (7))){
var inst_27802 = (state_27938[(7)]);
var inst_27800 = (state_27938[(8)]);
var inst_27799 = (state_27938[(9)]);
var inst_27801 = (state_27938[(10)]);
var inst_27807 = cljs.core._nth.call(null,inst_27800,inst_27802);
var inst_27808 = figwheel.client.file_reloading.eval_body.call(null,inst_27807,opts);
var inst_27809 = (inst_27802 + (1));
var tmp27940 = inst_27800;
var tmp27941 = inst_27799;
var tmp27942 = inst_27801;
var inst_27799__$1 = tmp27941;
var inst_27800__$1 = tmp27940;
var inst_27801__$1 = tmp27942;
var inst_27802__$1 = inst_27809;
var state_27938__$1 = (function (){var statearr_27943 = state_27938;
(statearr_27943[(7)] = inst_27802__$1);

(statearr_27943[(8)] = inst_27800__$1);

(statearr_27943[(9)] = inst_27799__$1);

(statearr_27943[(10)] = inst_27801__$1);

(statearr_27943[(11)] = inst_27808);

return statearr_27943;
})();
var statearr_27944_28030 = state_27938__$1;
(statearr_27944_28030[(2)] = null);

(statearr_27944_28030[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (20))){
var inst_27842 = (state_27938[(12)]);
var inst_27850 = figwheel.client.file_reloading.sort_files.call(null,inst_27842);
var state_27938__$1 = state_27938;
var statearr_27945_28031 = state_27938__$1;
(statearr_27945_28031[(2)] = inst_27850);

(statearr_27945_28031[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (27))){
var state_27938__$1 = state_27938;
var statearr_27946_28032 = state_27938__$1;
(statearr_27946_28032[(2)] = null);

(statearr_27946_28032[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (1))){
var inst_27791 = (state_27938[(13)]);
var inst_27788 = before_jsload.call(null,files);
var inst_27789 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27790 = (function (){return ((function (inst_27791,inst_27788,inst_27789,state_val_27939,c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27533_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27533_SHARP_);
});
;})(inst_27791,inst_27788,inst_27789,state_val_27939,c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27791__$1 = cljs.core.filter.call(null,inst_27790,files);
var inst_27792 = cljs.core.not_empty.call(null,inst_27791__$1);
var state_27938__$1 = (function (){var statearr_27947 = state_27938;
(statearr_27947[(14)] = inst_27788);

(statearr_27947[(15)] = inst_27789);

(statearr_27947[(13)] = inst_27791__$1);

return statearr_27947;
})();
if(cljs.core.truth_(inst_27792)){
var statearr_27948_28033 = state_27938__$1;
(statearr_27948_28033[(1)] = (2));

} else {
var statearr_27949_28034 = state_27938__$1;
(statearr_27949_28034[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (24))){
var state_27938__$1 = state_27938;
var statearr_27950_28035 = state_27938__$1;
(statearr_27950_28035[(2)] = null);

(statearr_27950_28035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (39))){
var inst_27892 = (state_27938[(16)]);
var state_27938__$1 = state_27938;
var statearr_27951_28036 = state_27938__$1;
(statearr_27951_28036[(2)] = inst_27892);

(statearr_27951_28036[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (46))){
var inst_27933 = (state_27938[(2)]);
var state_27938__$1 = state_27938;
var statearr_27952_28037 = state_27938__$1;
(statearr_27952_28037[(2)] = inst_27933);

(statearr_27952_28037[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (4))){
var inst_27836 = (state_27938[(2)]);
var inst_27837 = cljs.core.List.EMPTY;
var inst_27838 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27837);
var inst_27839 = (function (){return ((function (inst_27836,inst_27837,inst_27838,state_val_27939,c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27534_SHARP_){
var and__18448__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27534_SHARP_);
if(cljs.core.truth_(and__18448__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27534_SHARP_));
} else {
return and__18448__auto__;
}
});
;})(inst_27836,inst_27837,inst_27838,state_val_27939,c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27840 = cljs.core.filter.call(null,inst_27839,files);
var inst_27841 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27842 = cljs.core.concat.call(null,inst_27840,inst_27841);
var state_27938__$1 = (function (){var statearr_27953 = state_27938;
(statearr_27953[(17)] = inst_27838);

(statearr_27953[(18)] = inst_27836);

(statearr_27953[(12)] = inst_27842);

return statearr_27953;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27954_28038 = state_27938__$1;
(statearr_27954_28038[(1)] = (16));

} else {
var statearr_27955_28039 = state_27938__$1;
(statearr_27955_28039[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (15))){
var inst_27826 = (state_27938[(2)]);
var state_27938__$1 = state_27938;
var statearr_27956_28040 = state_27938__$1;
(statearr_27956_28040[(2)] = inst_27826);

(statearr_27956_28040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (21))){
var inst_27852 = (state_27938[(19)]);
var inst_27852__$1 = (state_27938[(2)]);
var inst_27853 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27852__$1);
var state_27938__$1 = (function (){var statearr_27957 = state_27938;
(statearr_27957[(19)] = inst_27852__$1);

return statearr_27957;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27938__$1,(22),inst_27853);
} else {
if((state_val_27939 === (31))){
var inst_27936 = (state_27938[(2)]);
var state_27938__$1 = state_27938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27938__$1,inst_27936);
} else {
if((state_val_27939 === (32))){
var inst_27892 = (state_27938[(16)]);
var inst_27897 = inst_27892.cljs$lang$protocol_mask$partition0$;
var inst_27898 = (inst_27897 & (64));
var inst_27899 = inst_27892.cljs$core$ISeq$;
var inst_27900 = (inst_27898) || (inst_27899);
var state_27938__$1 = state_27938;
if(cljs.core.truth_(inst_27900)){
var statearr_27958_28041 = state_27938__$1;
(statearr_27958_28041[(1)] = (35));

} else {
var statearr_27959_28042 = state_27938__$1;
(statearr_27959_28042[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (40))){
var inst_27913 = (state_27938[(20)]);
var inst_27912 = (state_27938[(2)]);
var inst_27913__$1 = cljs.core.get.call(null,inst_27912,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27914 = cljs.core.get.call(null,inst_27912,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27915 = cljs.core.not_empty.call(null,inst_27913__$1);
var state_27938__$1 = (function (){var statearr_27960 = state_27938;
(statearr_27960[(21)] = inst_27914);

(statearr_27960[(20)] = inst_27913__$1);

return statearr_27960;
})();
if(cljs.core.truth_(inst_27915)){
var statearr_27961_28043 = state_27938__$1;
(statearr_27961_28043[(1)] = (41));

} else {
var statearr_27962_28044 = state_27938__$1;
(statearr_27962_28044[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (33))){
var state_27938__$1 = state_27938;
var statearr_27963_28045 = state_27938__$1;
(statearr_27963_28045[(2)] = false);

(statearr_27963_28045[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (13))){
var inst_27812 = (state_27938[(22)]);
var inst_27816 = cljs.core.chunk_first.call(null,inst_27812);
var inst_27817 = cljs.core.chunk_rest.call(null,inst_27812);
var inst_27818 = cljs.core.count.call(null,inst_27816);
var inst_27799 = inst_27817;
var inst_27800 = inst_27816;
var inst_27801 = inst_27818;
var inst_27802 = (0);
var state_27938__$1 = (function (){var statearr_27964 = state_27938;
(statearr_27964[(7)] = inst_27802);

(statearr_27964[(8)] = inst_27800);

(statearr_27964[(9)] = inst_27799);

(statearr_27964[(10)] = inst_27801);

return statearr_27964;
})();
var statearr_27965_28046 = state_27938__$1;
(statearr_27965_28046[(2)] = null);

(statearr_27965_28046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (22))){
var inst_27860 = (state_27938[(23)]);
var inst_27852 = (state_27938[(19)]);
var inst_27856 = (state_27938[(24)]);
var inst_27855 = (state_27938[(25)]);
var inst_27855__$1 = (state_27938[(2)]);
var inst_27856__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27855__$1);
var inst_27857 = (function (){var all_files = inst_27852;
var res_SINGLEQUOTE_ = inst_27855__$1;
var res = inst_27856__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27860,inst_27852,inst_27856,inst_27855,inst_27855__$1,inst_27856__$1,state_val_27939,c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27535_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27535_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27860,inst_27852,inst_27856,inst_27855,inst_27855__$1,inst_27856__$1,state_val_27939,c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27858 = cljs.core.filter.call(null,inst_27857,inst_27855__$1);
var inst_27859 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27860__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27859);
var inst_27861 = cljs.core.not_empty.call(null,inst_27860__$1);
var state_27938__$1 = (function (){var statearr_27966 = state_27938;
(statearr_27966[(23)] = inst_27860__$1);

(statearr_27966[(24)] = inst_27856__$1);

(statearr_27966[(26)] = inst_27858);

(statearr_27966[(25)] = inst_27855__$1);

return statearr_27966;
})();
if(cljs.core.truth_(inst_27861)){
var statearr_27967_28047 = state_27938__$1;
(statearr_27967_28047[(1)] = (23));

} else {
var statearr_27968_28048 = state_27938__$1;
(statearr_27968_28048[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (36))){
var state_27938__$1 = state_27938;
var statearr_27969_28049 = state_27938__$1;
(statearr_27969_28049[(2)] = false);

(statearr_27969_28049[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (41))){
var inst_27913 = (state_27938[(20)]);
var inst_27917 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27918 = cljs.core.map.call(null,inst_27917,inst_27913);
var inst_27919 = cljs.core.pr_str.call(null,inst_27918);
var inst_27920 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27919)].join('');
var inst_27921 = figwheel.client.utils.log.call(null,inst_27920);
var state_27938__$1 = state_27938;
var statearr_27970_28050 = state_27938__$1;
(statearr_27970_28050[(2)] = inst_27921);

(statearr_27970_28050[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (43))){
var inst_27914 = (state_27938[(21)]);
var inst_27924 = (state_27938[(2)]);
var inst_27925 = cljs.core.not_empty.call(null,inst_27914);
var state_27938__$1 = (function (){var statearr_27971 = state_27938;
(statearr_27971[(27)] = inst_27924);

return statearr_27971;
})();
if(cljs.core.truth_(inst_27925)){
var statearr_27972_28051 = state_27938__$1;
(statearr_27972_28051[(1)] = (44));

} else {
var statearr_27973_28052 = state_27938__$1;
(statearr_27973_28052[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (29))){
var inst_27860 = (state_27938[(23)]);
var inst_27852 = (state_27938[(19)]);
var inst_27856 = (state_27938[(24)]);
var inst_27858 = (state_27938[(26)]);
var inst_27892 = (state_27938[(16)]);
var inst_27855 = (state_27938[(25)]);
var inst_27888 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27891 = (function (){var all_files = inst_27852;
var res_SINGLEQUOTE_ = inst_27855;
var res = inst_27856;
var files_not_loaded = inst_27858;
var dependencies_that_loaded = inst_27860;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27860,inst_27852,inst_27856,inst_27858,inst_27892,inst_27855,inst_27888,state_val_27939,c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27890){
var map__27974 = p__27890;
var map__27974__$1 = ((((!((map__27974 == null)))?((((map__27974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27974):map__27974);
var namespace = cljs.core.get.call(null,map__27974__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27860,inst_27852,inst_27856,inst_27858,inst_27892,inst_27855,inst_27888,state_val_27939,c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27892__$1 = cljs.core.group_by.call(null,inst_27891,inst_27858);
var inst_27894 = (inst_27892__$1 == null);
var inst_27895 = cljs.core.not.call(null,inst_27894);
var state_27938__$1 = (function (){var statearr_27976 = state_27938;
(statearr_27976[(16)] = inst_27892__$1);

(statearr_27976[(28)] = inst_27888);

return statearr_27976;
})();
if(inst_27895){
var statearr_27977_28053 = state_27938__$1;
(statearr_27977_28053[(1)] = (32));

} else {
var statearr_27978_28054 = state_27938__$1;
(statearr_27978_28054[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (44))){
var inst_27914 = (state_27938[(21)]);
var inst_27927 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27914);
var inst_27928 = cljs.core.pr_str.call(null,inst_27927);
var inst_27929 = [cljs.core.str("not required: "),cljs.core.str(inst_27928)].join('');
var inst_27930 = figwheel.client.utils.log.call(null,inst_27929);
var state_27938__$1 = state_27938;
var statearr_27979_28055 = state_27938__$1;
(statearr_27979_28055[(2)] = inst_27930);

(statearr_27979_28055[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (6))){
var inst_27833 = (state_27938[(2)]);
var state_27938__$1 = state_27938;
var statearr_27980_28056 = state_27938__$1;
(statearr_27980_28056[(2)] = inst_27833);

(statearr_27980_28056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (28))){
var inst_27858 = (state_27938[(26)]);
var inst_27885 = (state_27938[(2)]);
var inst_27886 = cljs.core.not_empty.call(null,inst_27858);
var state_27938__$1 = (function (){var statearr_27981 = state_27938;
(statearr_27981[(29)] = inst_27885);

return statearr_27981;
})();
if(cljs.core.truth_(inst_27886)){
var statearr_27982_28057 = state_27938__$1;
(statearr_27982_28057[(1)] = (29));

} else {
var statearr_27983_28058 = state_27938__$1;
(statearr_27983_28058[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (25))){
var inst_27856 = (state_27938[(24)]);
var inst_27872 = (state_27938[(2)]);
var inst_27873 = cljs.core.not_empty.call(null,inst_27856);
var state_27938__$1 = (function (){var statearr_27984 = state_27938;
(statearr_27984[(30)] = inst_27872);

return statearr_27984;
})();
if(cljs.core.truth_(inst_27873)){
var statearr_27985_28059 = state_27938__$1;
(statearr_27985_28059[(1)] = (26));

} else {
var statearr_27986_28060 = state_27938__$1;
(statearr_27986_28060[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (34))){
var inst_27907 = (state_27938[(2)]);
var state_27938__$1 = state_27938;
if(cljs.core.truth_(inst_27907)){
var statearr_27987_28061 = state_27938__$1;
(statearr_27987_28061[(1)] = (38));

} else {
var statearr_27988_28062 = state_27938__$1;
(statearr_27988_28062[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (17))){
var state_27938__$1 = state_27938;
var statearr_27989_28063 = state_27938__$1;
(statearr_27989_28063[(2)] = recompile_dependents);

(statearr_27989_28063[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (3))){
var state_27938__$1 = state_27938;
var statearr_27990_28064 = state_27938__$1;
(statearr_27990_28064[(2)] = null);

(statearr_27990_28064[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (12))){
var inst_27829 = (state_27938[(2)]);
var state_27938__$1 = state_27938;
var statearr_27991_28065 = state_27938__$1;
(statearr_27991_28065[(2)] = inst_27829);

(statearr_27991_28065[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (2))){
var inst_27791 = (state_27938[(13)]);
var inst_27798 = cljs.core.seq.call(null,inst_27791);
var inst_27799 = inst_27798;
var inst_27800 = null;
var inst_27801 = (0);
var inst_27802 = (0);
var state_27938__$1 = (function (){var statearr_27992 = state_27938;
(statearr_27992[(7)] = inst_27802);

(statearr_27992[(8)] = inst_27800);

(statearr_27992[(9)] = inst_27799);

(statearr_27992[(10)] = inst_27801);

return statearr_27992;
})();
var statearr_27993_28066 = state_27938__$1;
(statearr_27993_28066[(2)] = null);

(statearr_27993_28066[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (23))){
var inst_27860 = (state_27938[(23)]);
var inst_27852 = (state_27938[(19)]);
var inst_27856 = (state_27938[(24)]);
var inst_27858 = (state_27938[(26)]);
var inst_27855 = (state_27938[(25)]);
var inst_27863 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27865 = (function (){var all_files = inst_27852;
var res_SINGLEQUOTE_ = inst_27855;
var res = inst_27856;
var files_not_loaded = inst_27858;
var dependencies_that_loaded = inst_27860;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27860,inst_27852,inst_27856,inst_27858,inst_27855,inst_27863,state_val_27939,c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27864){
var map__27994 = p__27864;
var map__27994__$1 = ((((!((map__27994 == null)))?((((map__27994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27994):map__27994);
var request_url = cljs.core.get.call(null,map__27994__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27860,inst_27852,inst_27856,inst_27858,inst_27855,inst_27863,state_val_27939,c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27866 = cljs.core.reverse.call(null,inst_27860);
var inst_27867 = cljs.core.map.call(null,inst_27865,inst_27866);
var inst_27868 = cljs.core.pr_str.call(null,inst_27867);
var inst_27869 = figwheel.client.utils.log.call(null,inst_27868);
var state_27938__$1 = (function (){var statearr_27996 = state_27938;
(statearr_27996[(31)] = inst_27863);

return statearr_27996;
})();
var statearr_27997_28067 = state_27938__$1;
(statearr_27997_28067[(2)] = inst_27869);

(statearr_27997_28067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (35))){
var state_27938__$1 = state_27938;
var statearr_27998_28068 = state_27938__$1;
(statearr_27998_28068[(2)] = true);

(statearr_27998_28068[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (19))){
var inst_27842 = (state_27938[(12)]);
var inst_27848 = figwheel.client.file_reloading.expand_files.call(null,inst_27842);
var state_27938__$1 = state_27938;
var statearr_27999_28069 = state_27938__$1;
(statearr_27999_28069[(2)] = inst_27848);

(statearr_27999_28069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (11))){
var state_27938__$1 = state_27938;
var statearr_28000_28070 = state_27938__$1;
(statearr_28000_28070[(2)] = null);

(statearr_28000_28070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (9))){
var inst_27831 = (state_27938[(2)]);
var state_27938__$1 = state_27938;
var statearr_28001_28071 = state_27938__$1;
(statearr_28001_28071[(2)] = inst_27831);

(statearr_28001_28071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (5))){
var inst_27802 = (state_27938[(7)]);
var inst_27801 = (state_27938[(10)]);
var inst_27804 = (inst_27802 < inst_27801);
var inst_27805 = inst_27804;
var state_27938__$1 = state_27938;
if(cljs.core.truth_(inst_27805)){
var statearr_28002_28072 = state_27938__$1;
(statearr_28002_28072[(1)] = (7));

} else {
var statearr_28003_28073 = state_27938__$1;
(statearr_28003_28073[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (14))){
var inst_27812 = (state_27938[(22)]);
var inst_27821 = cljs.core.first.call(null,inst_27812);
var inst_27822 = figwheel.client.file_reloading.eval_body.call(null,inst_27821,opts);
var inst_27823 = cljs.core.next.call(null,inst_27812);
var inst_27799 = inst_27823;
var inst_27800 = null;
var inst_27801 = (0);
var inst_27802 = (0);
var state_27938__$1 = (function (){var statearr_28004 = state_27938;
(statearr_28004[(7)] = inst_27802);

(statearr_28004[(8)] = inst_27800);

(statearr_28004[(32)] = inst_27822);

(statearr_28004[(9)] = inst_27799);

(statearr_28004[(10)] = inst_27801);

return statearr_28004;
})();
var statearr_28005_28074 = state_27938__$1;
(statearr_28005_28074[(2)] = null);

(statearr_28005_28074[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (45))){
var state_27938__$1 = state_27938;
var statearr_28006_28075 = state_27938__$1;
(statearr_28006_28075[(2)] = null);

(statearr_28006_28075[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (26))){
var inst_27860 = (state_27938[(23)]);
var inst_27852 = (state_27938[(19)]);
var inst_27856 = (state_27938[(24)]);
var inst_27858 = (state_27938[(26)]);
var inst_27855 = (state_27938[(25)]);
var inst_27875 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27877 = (function (){var all_files = inst_27852;
var res_SINGLEQUOTE_ = inst_27855;
var res = inst_27856;
var files_not_loaded = inst_27858;
var dependencies_that_loaded = inst_27860;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27860,inst_27852,inst_27856,inst_27858,inst_27855,inst_27875,state_val_27939,c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27876){
var map__28007 = p__27876;
var map__28007__$1 = ((((!((map__28007 == null)))?((((map__28007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28007):map__28007);
var namespace = cljs.core.get.call(null,map__28007__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28007__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27860,inst_27852,inst_27856,inst_27858,inst_27855,inst_27875,state_val_27939,c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27878 = cljs.core.map.call(null,inst_27877,inst_27856);
var inst_27879 = cljs.core.pr_str.call(null,inst_27878);
var inst_27880 = figwheel.client.utils.log.call(null,inst_27879);
var inst_27881 = (function (){var all_files = inst_27852;
var res_SINGLEQUOTE_ = inst_27855;
var res = inst_27856;
var files_not_loaded = inst_27858;
var dependencies_that_loaded = inst_27860;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27860,inst_27852,inst_27856,inst_27858,inst_27855,inst_27875,inst_27877,inst_27878,inst_27879,inst_27880,state_val_27939,c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27860,inst_27852,inst_27856,inst_27858,inst_27855,inst_27875,inst_27877,inst_27878,inst_27879,inst_27880,state_val_27939,c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27882 = setTimeout(inst_27881,(10));
var state_27938__$1 = (function (){var statearr_28009 = state_27938;
(statearr_28009[(33)] = inst_27875);

(statearr_28009[(34)] = inst_27880);

return statearr_28009;
})();
var statearr_28010_28076 = state_27938__$1;
(statearr_28010_28076[(2)] = inst_27882);

(statearr_28010_28076[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (16))){
var state_27938__$1 = state_27938;
var statearr_28011_28077 = state_27938__$1;
(statearr_28011_28077[(2)] = reload_dependents);

(statearr_28011_28077[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (38))){
var inst_27892 = (state_27938[(16)]);
var inst_27909 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27892);
var state_27938__$1 = state_27938;
var statearr_28012_28078 = state_27938__$1;
(statearr_28012_28078[(2)] = inst_27909);

(statearr_28012_28078[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (30))){
var state_27938__$1 = state_27938;
var statearr_28013_28079 = state_27938__$1;
(statearr_28013_28079[(2)] = null);

(statearr_28013_28079[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (10))){
var inst_27812 = (state_27938[(22)]);
var inst_27814 = cljs.core.chunked_seq_QMARK_.call(null,inst_27812);
var state_27938__$1 = state_27938;
if(inst_27814){
var statearr_28014_28080 = state_27938__$1;
(statearr_28014_28080[(1)] = (13));

} else {
var statearr_28015_28081 = state_27938__$1;
(statearr_28015_28081[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (18))){
var inst_27846 = (state_27938[(2)]);
var state_27938__$1 = state_27938;
if(cljs.core.truth_(inst_27846)){
var statearr_28016_28082 = state_27938__$1;
(statearr_28016_28082[(1)] = (19));

} else {
var statearr_28017_28083 = state_27938__$1;
(statearr_28017_28083[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (42))){
var state_27938__$1 = state_27938;
var statearr_28018_28084 = state_27938__$1;
(statearr_28018_28084[(2)] = null);

(statearr_28018_28084[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (37))){
var inst_27904 = (state_27938[(2)]);
var state_27938__$1 = state_27938;
var statearr_28019_28085 = state_27938__$1;
(statearr_28019_28085[(2)] = inst_27904);

(statearr_28019_28085[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (8))){
var inst_27799 = (state_27938[(9)]);
var inst_27812 = (state_27938[(22)]);
var inst_27812__$1 = cljs.core.seq.call(null,inst_27799);
var state_27938__$1 = (function (){var statearr_28020 = state_27938;
(statearr_28020[(22)] = inst_27812__$1);

return statearr_28020;
})();
if(inst_27812__$1){
var statearr_28021_28086 = state_27938__$1;
(statearr_28021_28086[(1)] = (10));

} else {
var statearr_28022_28087 = state_27938__$1;
(statearr_28022_28087[(1)] = (11));

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
});})(c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20473__auto__,c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20474__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20474__auto____0 = (function (){
var statearr_28026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28026[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20474__auto__);

(statearr_28026[(1)] = (1));

return statearr_28026;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20474__auto____1 = (function (state_27938){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_27938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e28027){if((e28027 instanceof Object)){
var ex__20477__auto__ = e28027;
var statearr_28028_28088 = state_27938;
(statearr_28028_28088[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28089 = state_27938;
state_27938 = G__28089;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20474__auto__ = function(state_27938){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20474__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20474__auto____1.call(this,state_27938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20474__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20474__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22653__auto__ = (function (){var statearr_28029 = f__22652__auto__.call(null);
(statearr_28029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto__);

return statearr_28029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto__,map__27784,map__27784__$1,opts,before_jsload,on_jsload,reload_dependents,map__27785,map__27785__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22651__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28092,link){
var map__28095 = p__28092;
var map__28095__$1 = ((((!((map__28095 == null)))?((((map__28095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28095):map__28095);
var file = cljs.core.get.call(null,map__28095__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28095,map__28095__$1,file){
return (function (p1__28090_SHARP_,p2__28091_SHARP_){
if(cljs.core._EQ_.call(null,p1__28090_SHARP_,p2__28091_SHARP_)){
return p1__28090_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28095,map__28095__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28101){
var map__28102 = p__28101;
var map__28102__$1 = ((((!((map__28102 == null)))?((((map__28102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28102):map__28102);
var match_length = cljs.core.get.call(null,map__28102__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28102__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28097_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28097_SHARP_);
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
var args28104 = [];
var len__19530__auto___28107 = arguments.length;
var i__19531__auto___28108 = (0);
while(true){
if((i__19531__auto___28108 < len__19530__auto___28107)){
args28104.push((arguments[i__19531__auto___28108]));

var G__28109 = (i__19531__auto___28108 + (1));
i__19531__auto___28108 = G__28109;
continue;
} else {
}
break;
}

var G__28106 = args28104.length;
switch (G__28106) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28104.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28111_SHARP_,p2__28112_SHARP_){
return cljs.core.assoc.call(null,p1__28111_SHARP_,cljs.core.get.call(null,p2__28112_SHARP_,key),p2__28112_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28113){
var map__28116 = p__28113;
var map__28116__$1 = ((((!((map__28116 == null)))?((((map__28116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28116):map__28116);
var f_data = map__28116__$1;
var file = cljs.core.get.call(null,map__28116__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28118,files_msg){
var map__28125 = p__28118;
var map__28125__$1 = ((((!((map__28125 == null)))?((((map__28125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28125):map__28125);
var opts = map__28125__$1;
var on_cssload = cljs.core.get.call(null,map__28125__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28127_28131 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28128_28132 = null;
var count__28129_28133 = (0);
var i__28130_28134 = (0);
while(true){
if((i__28130_28134 < count__28129_28133)){
var f_28135 = cljs.core._nth.call(null,chunk__28128_28132,i__28130_28134);
figwheel.client.file_reloading.reload_css_file.call(null,f_28135);

var G__28136 = seq__28127_28131;
var G__28137 = chunk__28128_28132;
var G__28138 = count__28129_28133;
var G__28139 = (i__28130_28134 + (1));
seq__28127_28131 = G__28136;
chunk__28128_28132 = G__28137;
count__28129_28133 = G__28138;
i__28130_28134 = G__28139;
continue;
} else {
var temp__4657__auto___28140 = cljs.core.seq.call(null,seq__28127_28131);
if(temp__4657__auto___28140){
var seq__28127_28141__$1 = temp__4657__auto___28140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28127_28141__$1)){
var c__19271__auto___28142 = cljs.core.chunk_first.call(null,seq__28127_28141__$1);
var G__28143 = cljs.core.chunk_rest.call(null,seq__28127_28141__$1);
var G__28144 = c__19271__auto___28142;
var G__28145 = cljs.core.count.call(null,c__19271__auto___28142);
var G__28146 = (0);
seq__28127_28131 = G__28143;
chunk__28128_28132 = G__28144;
count__28129_28133 = G__28145;
i__28130_28134 = G__28146;
continue;
} else {
var f_28147 = cljs.core.first.call(null,seq__28127_28141__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28147);

var G__28148 = cljs.core.next.call(null,seq__28127_28141__$1);
var G__28149 = null;
var G__28150 = (0);
var G__28151 = (0);
seq__28127_28131 = G__28148;
chunk__28128_28132 = G__28149;
count__28129_28133 = G__28150;
i__28130_28134 = G__28151;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28125,map__28125__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28125,map__28125__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1470998058211