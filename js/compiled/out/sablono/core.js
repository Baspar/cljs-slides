// Compiled by ClojureScript 1.8.51 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__20368__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__20367 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__20367,(0),null);
var body = cljs.core.nthnext.call(null,vec__20367,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__20368 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20369__i = 0, G__20369__a = new Array(arguments.length -  0);
while (G__20369__i < G__20369__a.length) {G__20369__a[G__20369__i] = arguments[G__20369__i + 0]; ++G__20369__i;}
  args = new cljs.core.IndexedSeq(G__20369__a,0);
} 
return G__20368__delegate.call(this,args);};
G__20368.cljs$lang$maxFixedArity = 0;
G__20368.cljs$lang$applyTo = (function (arglist__20370){
var args = cljs.core.seq(arglist__20370);
return G__20368__delegate(args);
});
G__20368.cljs$core$IFn$_invoke$arity$variadic = G__20368__delegate;
return G__20368;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19239__auto__ = (function sablono$core$update_arglists_$_iter__20375(s__20376){
return (new cljs.core.LazySeq(null,(function (){
var s__20376__$1 = s__20376;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20376__$1);
if(temp__4657__auto__){
var s__20376__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20376__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__20376__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__20378 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__20377 = (0);
while(true){
if((i__20377 < size__19238__auto__)){
var args = cljs.core._nth.call(null,c__19237__auto__,i__20377);
cljs.core.chunk_append.call(null,b__20378,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__20379 = (i__20377 + (1));
i__20377 = G__20379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20378),sablono$core$update_arglists_$_iter__20375.call(null,cljs.core.chunk_rest.call(null,s__20376__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20378),null);
}
} else {
var args = cljs.core.first.call(null,s__20376__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__20375.call(null,cljs.core.rest.call(null,s__20376__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__19536__auto__ = [];
var len__19529__auto___20385 = arguments.length;
var i__19530__auto___20386 = (0);
while(true){
if((i__19530__auto___20386 < len__19529__auto___20385)){
args__19536__auto__.push((arguments[i__19530__auto___20386]));

var G__20387 = (i__19530__auto___20386 + (1));
i__19530__auto___20386 = G__20387;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19239__auto__ = (function sablono$core$iter__20381(s__20382){
return (new cljs.core.LazySeq(null,(function (){
var s__20382__$1 = s__20382;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20382__$1);
if(temp__4657__auto__){
var s__20382__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20382__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__20382__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__20384 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__20383 = (0);
while(true){
if((i__20383 < size__19238__auto__)){
var style = cljs.core._nth.call(null,c__19237__auto__,i__20383);
cljs.core.chunk_append.call(null,b__20384,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__20388 = (i__20383 + (1));
i__20383 = G__20388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20384),sablono$core$iter__20381.call(null,cljs.core.chunk_rest.call(null,s__20382__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20384),null);
}
} else {
var style = cljs.core.first.call(null,s__20382__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__20381.call(null,cljs.core.rest.call(null,s__20382__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq20380){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20380));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to20389 = (function sablono$core$link_to20389(var_args){
var args__19536__auto__ = [];
var len__19529__auto___20392 = arguments.length;
var i__19530__auto___20393 = (0);
while(true){
if((i__19530__auto___20393 < len__19529__auto___20392)){
args__19536__auto__.push((arguments[i__19530__auto___20393]));

var G__20394 = (i__19530__auto___20393 + (1));
i__19530__auto___20393 = G__20394;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to20389.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.link_to20389.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to20389.cljs$lang$maxFixedArity = (1);

sablono.core.link_to20389.cljs$lang$applyTo = (function (seq20390){
var G__20391 = cljs.core.first.call(null,seq20390);
var seq20390__$1 = cljs.core.next.call(null,seq20390);
return sablono.core.link_to20389.cljs$core$IFn$_invoke$arity$variadic(G__20391,seq20390__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to20389);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to20395 = (function sablono$core$mail_to20395(var_args){
var args__19536__auto__ = [];
var len__19529__auto___20400 = arguments.length;
var i__19530__auto___20401 = (0);
while(true){
if((i__19530__auto___20401 < len__19529__auto___20400)){
args__19536__auto__.push((arguments[i__19530__auto___20401]));

var G__20402 = (i__19530__auto___20401 + (1));
i__19530__auto___20401 = G__20402;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to20395.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.mail_to20395.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__20398){
var vec__20399 = p__20398;
var content = cljs.core.nth.call(null,vec__20399,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18459__auto__ = content;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to20395.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to20395.cljs$lang$applyTo = (function (seq20396){
var G__20397 = cljs.core.first.call(null,seq20396);
var seq20396__$1 = cljs.core.next.call(null,seq20396);
return sablono.core.mail_to20395.cljs$core$IFn$_invoke$arity$variadic(G__20397,seq20396__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to20395);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list20403 = (function sablono$core$unordered_list20403(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19239__auto__ = (function sablono$core$unordered_list20403_$_iter__20408(s__20409){
return (new cljs.core.LazySeq(null,(function (){
var s__20409__$1 = s__20409;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20409__$1);
if(temp__4657__auto__){
var s__20409__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20409__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__20409__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__20411 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__20410 = (0);
while(true){
if((i__20410 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__20410);
cljs.core.chunk_append.call(null,b__20411,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__20412 = (i__20410 + (1));
i__20410 = G__20412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20411),sablono$core$unordered_list20403_$_iter__20408.call(null,cljs.core.chunk_rest.call(null,s__20409__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20411),null);
}
} else {
var x = cljs.core.first.call(null,s__20409__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list20403_$_iter__20408.call(null,cljs.core.rest.call(null,s__20409__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list20403);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list20413 = (function sablono$core$ordered_list20413(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19239__auto__ = (function sablono$core$ordered_list20413_$_iter__20418(s__20419){
return (new cljs.core.LazySeq(null,(function (){
var s__20419__$1 = s__20419;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20419__$1);
if(temp__4657__auto__){
var s__20419__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20419__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__20419__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__20421 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__20420 = (0);
while(true){
if((i__20420 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__20420);
cljs.core.chunk_append.call(null,b__20421,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__20422 = (i__20420 + (1));
i__20420 = G__20422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20421),sablono$core$ordered_list20413_$_iter__20418.call(null,cljs.core.chunk_rest.call(null,s__20419__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20421),null);
}
} else {
var x = cljs.core.first.call(null,s__20419__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list20413_$_iter__20418.call(null,cljs.core.rest.call(null,s__20419__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list20413);
/**
 * Create an image element.
 */
sablono.core.image20423 = (function sablono$core$image20423(var_args){
var args20424 = [];
var len__19529__auto___20427 = arguments.length;
var i__19530__auto___20428 = (0);
while(true){
if((i__19530__auto___20428 < len__19529__auto___20427)){
args20424.push((arguments[i__19530__auto___20428]));

var G__20429 = (i__19530__auto___20428 + (1));
i__19530__auto___20428 = G__20429;
continue;
} else {
}
break;
}

var G__20426 = args20424.length;
switch (G__20426) {
case 1:
return sablono.core.image20423.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image20423.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20424.length)].join('')));

}
});

sablono.core.image20423.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image20423.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image20423.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image20423);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__20431_SHARP_,p2__20432_SHARP_){
return [cljs.core.str(p1__20431_SHARP_),cljs.core.str("["),cljs.core.str(p2__20432_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__20433_SHARP_,p2__20434_SHARP_){
return [cljs.core.str(p1__20433_SHARP_),cljs.core.str("-"),cljs.core.str(p2__20434_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field20435 = (function sablono$core$color_field20435(var_args){
var args20436 = [];
var len__19529__auto___20503 = arguments.length;
var i__19530__auto___20504 = (0);
while(true){
if((i__19530__auto___20504 < len__19529__auto___20503)){
args20436.push((arguments[i__19530__auto___20504]));

var G__20505 = (i__19530__auto___20504 + (1));
i__19530__auto___20504 = G__20505;
continue;
} else {
}
break;
}

var G__20438 = args20436.length;
switch (G__20438) {
case 1:
return sablono.core.color_field20435.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field20435.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20436.length)].join('')));

}
});

sablono.core.color_field20435.cljs$core$IFn$_invoke$arity$1 = (function (name__20194__auto__){
return sablono.core.color_field20435.call(null,name__20194__auto__,null);
});

sablono.core.color_field20435.cljs$core$IFn$_invoke$arity$2 = (function (name__20194__auto__,value__20195__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__20194__auto__,value__20195__auto__);
});

sablono.core.color_field20435.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field20435);

/**
 * Creates a date input field.
 */
sablono.core.date_field20439 = (function sablono$core$date_field20439(var_args){
var args20440 = [];
var len__19529__auto___20507 = arguments.length;
var i__19530__auto___20508 = (0);
while(true){
if((i__19530__auto___20508 < len__19529__auto___20507)){
args20440.push((arguments[i__19530__auto___20508]));

var G__20509 = (i__19530__auto___20508 + (1));
i__19530__auto___20508 = G__20509;
continue;
} else {
}
break;
}

var G__20442 = args20440.length;
switch (G__20442) {
case 1:
return sablono.core.date_field20439.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field20439.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20440.length)].join('')));

}
});

sablono.core.date_field20439.cljs$core$IFn$_invoke$arity$1 = (function (name__20194__auto__){
return sablono.core.date_field20439.call(null,name__20194__auto__,null);
});

sablono.core.date_field20439.cljs$core$IFn$_invoke$arity$2 = (function (name__20194__auto__,value__20195__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__20194__auto__,value__20195__auto__);
});

sablono.core.date_field20439.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field20439);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field20443 = (function sablono$core$datetime_field20443(var_args){
var args20444 = [];
var len__19529__auto___20511 = arguments.length;
var i__19530__auto___20512 = (0);
while(true){
if((i__19530__auto___20512 < len__19529__auto___20511)){
args20444.push((arguments[i__19530__auto___20512]));

var G__20513 = (i__19530__auto___20512 + (1));
i__19530__auto___20512 = G__20513;
continue;
} else {
}
break;
}

var G__20446 = args20444.length;
switch (G__20446) {
case 1:
return sablono.core.datetime_field20443.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field20443.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20444.length)].join('')));

}
});

sablono.core.datetime_field20443.cljs$core$IFn$_invoke$arity$1 = (function (name__20194__auto__){
return sablono.core.datetime_field20443.call(null,name__20194__auto__,null);
});

sablono.core.datetime_field20443.cljs$core$IFn$_invoke$arity$2 = (function (name__20194__auto__,value__20195__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__20194__auto__,value__20195__auto__);
});

sablono.core.datetime_field20443.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field20443);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field20447 = (function sablono$core$datetime_local_field20447(var_args){
var args20448 = [];
var len__19529__auto___20515 = arguments.length;
var i__19530__auto___20516 = (0);
while(true){
if((i__19530__auto___20516 < len__19529__auto___20515)){
args20448.push((arguments[i__19530__auto___20516]));

var G__20517 = (i__19530__auto___20516 + (1));
i__19530__auto___20516 = G__20517;
continue;
} else {
}
break;
}

var G__20450 = args20448.length;
switch (G__20450) {
case 1:
return sablono.core.datetime_local_field20447.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field20447.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20448.length)].join('')));

}
});

sablono.core.datetime_local_field20447.cljs$core$IFn$_invoke$arity$1 = (function (name__20194__auto__){
return sablono.core.datetime_local_field20447.call(null,name__20194__auto__,null);
});

sablono.core.datetime_local_field20447.cljs$core$IFn$_invoke$arity$2 = (function (name__20194__auto__,value__20195__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__20194__auto__,value__20195__auto__);
});

sablono.core.datetime_local_field20447.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field20447);

/**
 * Creates a email input field.
 */
sablono.core.email_field20451 = (function sablono$core$email_field20451(var_args){
var args20452 = [];
var len__19529__auto___20519 = arguments.length;
var i__19530__auto___20520 = (0);
while(true){
if((i__19530__auto___20520 < len__19529__auto___20519)){
args20452.push((arguments[i__19530__auto___20520]));

var G__20521 = (i__19530__auto___20520 + (1));
i__19530__auto___20520 = G__20521;
continue;
} else {
}
break;
}

var G__20454 = args20452.length;
switch (G__20454) {
case 1:
return sablono.core.email_field20451.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field20451.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20452.length)].join('')));

}
});

sablono.core.email_field20451.cljs$core$IFn$_invoke$arity$1 = (function (name__20194__auto__){
return sablono.core.email_field20451.call(null,name__20194__auto__,null);
});

sablono.core.email_field20451.cljs$core$IFn$_invoke$arity$2 = (function (name__20194__auto__,value__20195__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__20194__auto__,value__20195__auto__);
});

sablono.core.email_field20451.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field20451);

/**
 * Creates a file input field.
 */
sablono.core.file_field20455 = (function sablono$core$file_field20455(var_args){
var args20456 = [];
var len__19529__auto___20523 = arguments.length;
var i__19530__auto___20524 = (0);
while(true){
if((i__19530__auto___20524 < len__19529__auto___20523)){
args20456.push((arguments[i__19530__auto___20524]));

var G__20525 = (i__19530__auto___20524 + (1));
i__19530__auto___20524 = G__20525;
continue;
} else {
}
break;
}

var G__20458 = args20456.length;
switch (G__20458) {
case 1:
return sablono.core.file_field20455.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field20455.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20456.length)].join('')));

}
});

sablono.core.file_field20455.cljs$core$IFn$_invoke$arity$1 = (function (name__20194__auto__){
return sablono.core.file_field20455.call(null,name__20194__auto__,null);
});

sablono.core.file_field20455.cljs$core$IFn$_invoke$arity$2 = (function (name__20194__auto__,value__20195__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__20194__auto__,value__20195__auto__);
});

sablono.core.file_field20455.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field20455);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field20459 = (function sablono$core$hidden_field20459(var_args){
var args20460 = [];
var len__19529__auto___20527 = arguments.length;
var i__19530__auto___20528 = (0);
while(true){
if((i__19530__auto___20528 < len__19529__auto___20527)){
args20460.push((arguments[i__19530__auto___20528]));

var G__20529 = (i__19530__auto___20528 + (1));
i__19530__auto___20528 = G__20529;
continue;
} else {
}
break;
}

var G__20462 = args20460.length;
switch (G__20462) {
case 1:
return sablono.core.hidden_field20459.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field20459.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20460.length)].join('')));

}
});

sablono.core.hidden_field20459.cljs$core$IFn$_invoke$arity$1 = (function (name__20194__auto__){
return sablono.core.hidden_field20459.call(null,name__20194__auto__,null);
});

sablono.core.hidden_field20459.cljs$core$IFn$_invoke$arity$2 = (function (name__20194__auto__,value__20195__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__20194__auto__,value__20195__auto__);
});

sablono.core.hidden_field20459.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field20459);

/**
 * Creates a month input field.
 */
sablono.core.month_field20463 = (function sablono$core$month_field20463(var_args){
var args20464 = [];
var len__19529__auto___20531 = arguments.length;
var i__19530__auto___20532 = (0);
while(true){
if((i__19530__auto___20532 < len__19529__auto___20531)){
args20464.push((arguments[i__19530__auto___20532]));

var G__20533 = (i__19530__auto___20532 + (1));
i__19530__auto___20532 = G__20533;
continue;
} else {
}
break;
}

var G__20466 = args20464.length;
switch (G__20466) {
case 1:
return sablono.core.month_field20463.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field20463.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20464.length)].join('')));

}
});

sablono.core.month_field20463.cljs$core$IFn$_invoke$arity$1 = (function (name__20194__auto__){
return sablono.core.month_field20463.call(null,name__20194__auto__,null);
});

sablono.core.month_field20463.cljs$core$IFn$_invoke$arity$2 = (function (name__20194__auto__,value__20195__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__20194__auto__,value__20195__auto__);
});

sablono.core.month_field20463.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field20463);

/**
 * Creates a number input field.
 */
sablono.core.number_field20467 = (function sablono$core$number_field20467(var_args){
var args20468 = [];
var len__19529__auto___20535 = arguments.length;
var i__19530__auto___20536 = (0);
while(true){
if((i__19530__auto___20536 < len__19529__auto___20535)){
args20468.push((arguments[i__19530__auto___20536]));

var G__20537 = (i__19530__auto___20536 + (1));
i__19530__auto___20536 = G__20537;
continue;
} else {
}
break;
}

var G__20470 = args20468.length;
switch (G__20470) {
case 1:
return sablono.core.number_field20467.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field20467.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20468.length)].join('')));

}
});

sablono.core.number_field20467.cljs$core$IFn$_invoke$arity$1 = (function (name__20194__auto__){
return sablono.core.number_field20467.call(null,name__20194__auto__,null);
});

sablono.core.number_field20467.cljs$core$IFn$_invoke$arity$2 = (function (name__20194__auto__,value__20195__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__20194__auto__,value__20195__auto__);
});

sablono.core.number_field20467.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field20467);

/**
 * Creates a password input field.
 */
sablono.core.password_field20471 = (function sablono$core$password_field20471(var_args){
var args20472 = [];
var len__19529__auto___20539 = arguments.length;
var i__19530__auto___20540 = (0);
while(true){
if((i__19530__auto___20540 < len__19529__auto___20539)){
args20472.push((arguments[i__19530__auto___20540]));

var G__20541 = (i__19530__auto___20540 + (1));
i__19530__auto___20540 = G__20541;
continue;
} else {
}
break;
}

var G__20474 = args20472.length;
switch (G__20474) {
case 1:
return sablono.core.password_field20471.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field20471.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20472.length)].join('')));

}
});

sablono.core.password_field20471.cljs$core$IFn$_invoke$arity$1 = (function (name__20194__auto__){
return sablono.core.password_field20471.call(null,name__20194__auto__,null);
});

sablono.core.password_field20471.cljs$core$IFn$_invoke$arity$2 = (function (name__20194__auto__,value__20195__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__20194__auto__,value__20195__auto__);
});

sablono.core.password_field20471.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field20471);

/**
 * Creates a range input field.
 */
sablono.core.range_field20475 = (function sablono$core$range_field20475(var_args){
var args20476 = [];
var len__19529__auto___20543 = arguments.length;
var i__19530__auto___20544 = (0);
while(true){
if((i__19530__auto___20544 < len__19529__auto___20543)){
args20476.push((arguments[i__19530__auto___20544]));

var G__20545 = (i__19530__auto___20544 + (1));
i__19530__auto___20544 = G__20545;
continue;
} else {
}
break;
}

var G__20478 = args20476.length;
switch (G__20478) {
case 1:
return sablono.core.range_field20475.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field20475.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20476.length)].join('')));

}
});

sablono.core.range_field20475.cljs$core$IFn$_invoke$arity$1 = (function (name__20194__auto__){
return sablono.core.range_field20475.call(null,name__20194__auto__,null);
});

sablono.core.range_field20475.cljs$core$IFn$_invoke$arity$2 = (function (name__20194__auto__,value__20195__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__20194__auto__,value__20195__auto__);
});

sablono.core.range_field20475.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field20475);

/**
 * Creates a search input field.
 */
sablono.core.search_field20479 = (function sablono$core$search_field20479(var_args){
var args20480 = [];
var len__19529__auto___20547 = arguments.length;
var i__19530__auto___20548 = (0);
while(true){
if((i__19530__auto___20548 < len__19529__auto___20547)){
args20480.push((arguments[i__19530__auto___20548]));

var G__20549 = (i__19530__auto___20548 + (1));
i__19530__auto___20548 = G__20549;
continue;
} else {
}
break;
}

var G__20482 = args20480.length;
switch (G__20482) {
case 1:
return sablono.core.search_field20479.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field20479.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20480.length)].join('')));

}
});

sablono.core.search_field20479.cljs$core$IFn$_invoke$arity$1 = (function (name__20194__auto__){
return sablono.core.search_field20479.call(null,name__20194__auto__,null);
});

sablono.core.search_field20479.cljs$core$IFn$_invoke$arity$2 = (function (name__20194__auto__,value__20195__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__20194__auto__,value__20195__auto__);
});

sablono.core.search_field20479.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field20479);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field20483 = (function sablono$core$tel_field20483(var_args){
var args20484 = [];
var len__19529__auto___20551 = arguments.length;
var i__19530__auto___20552 = (0);
while(true){
if((i__19530__auto___20552 < len__19529__auto___20551)){
args20484.push((arguments[i__19530__auto___20552]));

var G__20553 = (i__19530__auto___20552 + (1));
i__19530__auto___20552 = G__20553;
continue;
} else {
}
break;
}

var G__20486 = args20484.length;
switch (G__20486) {
case 1:
return sablono.core.tel_field20483.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field20483.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20484.length)].join('')));

}
});

sablono.core.tel_field20483.cljs$core$IFn$_invoke$arity$1 = (function (name__20194__auto__){
return sablono.core.tel_field20483.call(null,name__20194__auto__,null);
});

sablono.core.tel_field20483.cljs$core$IFn$_invoke$arity$2 = (function (name__20194__auto__,value__20195__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__20194__auto__,value__20195__auto__);
});

sablono.core.tel_field20483.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field20483);

/**
 * Creates a text input field.
 */
sablono.core.text_field20487 = (function sablono$core$text_field20487(var_args){
var args20488 = [];
var len__19529__auto___20555 = arguments.length;
var i__19530__auto___20556 = (0);
while(true){
if((i__19530__auto___20556 < len__19529__auto___20555)){
args20488.push((arguments[i__19530__auto___20556]));

var G__20557 = (i__19530__auto___20556 + (1));
i__19530__auto___20556 = G__20557;
continue;
} else {
}
break;
}

var G__20490 = args20488.length;
switch (G__20490) {
case 1:
return sablono.core.text_field20487.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field20487.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20488.length)].join('')));

}
});

sablono.core.text_field20487.cljs$core$IFn$_invoke$arity$1 = (function (name__20194__auto__){
return sablono.core.text_field20487.call(null,name__20194__auto__,null);
});

sablono.core.text_field20487.cljs$core$IFn$_invoke$arity$2 = (function (name__20194__auto__,value__20195__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__20194__auto__,value__20195__auto__);
});

sablono.core.text_field20487.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field20487);

/**
 * Creates a time input field.
 */
sablono.core.time_field20491 = (function sablono$core$time_field20491(var_args){
var args20492 = [];
var len__19529__auto___20559 = arguments.length;
var i__19530__auto___20560 = (0);
while(true){
if((i__19530__auto___20560 < len__19529__auto___20559)){
args20492.push((arguments[i__19530__auto___20560]));

var G__20561 = (i__19530__auto___20560 + (1));
i__19530__auto___20560 = G__20561;
continue;
} else {
}
break;
}

var G__20494 = args20492.length;
switch (G__20494) {
case 1:
return sablono.core.time_field20491.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field20491.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20492.length)].join('')));

}
});

sablono.core.time_field20491.cljs$core$IFn$_invoke$arity$1 = (function (name__20194__auto__){
return sablono.core.time_field20491.call(null,name__20194__auto__,null);
});

sablono.core.time_field20491.cljs$core$IFn$_invoke$arity$2 = (function (name__20194__auto__,value__20195__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__20194__auto__,value__20195__auto__);
});

sablono.core.time_field20491.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field20491);

/**
 * Creates a url input field.
 */
sablono.core.url_field20495 = (function sablono$core$url_field20495(var_args){
var args20496 = [];
var len__19529__auto___20563 = arguments.length;
var i__19530__auto___20564 = (0);
while(true){
if((i__19530__auto___20564 < len__19529__auto___20563)){
args20496.push((arguments[i__19530__auto___20564]));

var G__20565 = (i__19530__auto___20564 + (1));
i__19530__auto___20564 = G__20565;
continue;
} else {
}
break;
}

var G__20498 = args20496.length;
switch (G__20498) {
case 1:
return sablono.core.url_field20495.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field20495.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20496.length)].join('')));

}
});

sablono.core.url_field20495.cljs$core$IFn$_invoke$arity$1 = (function (name__20194__auto__){
return sablono.core.url_field20495.call(null,name__20194__auto__,null);
});

sablono.core.url_field20495.cljs$core$IFn$_invoke$arity$2 = (function (name__20194__auto__,value__20195__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__20194__auto__,value__20195__auto__);
});

sablono.core.url_field20495.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field20495);

/**
 * Creates a week input field.
 */
sablono.core.week_field20499 = (function sablono$core$week_field20499(var_args){
var args20500 = [];
var len__19529__auto___20567 = arguments.length;
var i__19530__auto___20568 = (0);
while(true){
if((i__19530__auto___20568 < len__19529__auto___20567)){
args20500.push((arguments[i__19530__auto___20568]));

var G__20569 = (i__19530__auto___20568 + (1));
i__19530__auto___20568 = G__20569;
continue;
} else {
}
break;
}

var G__20502 = args20500.length;
switch (G__20502) {
case 1:
return sablono.core.week_field20499.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field20499.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20500.length)].join('')));

}
});

sablono.core.week_field20499.cljs$core$IFn$_invoke$arity$1 = (function (name__20194__auto__){
return sablono.core.week_field20499.call(null,name__20194__auto__,null);
});

sablono.core.week_field20499.cljs$core$IFn$_invoke$arity$2 = (function (name__20194__auto__,value__20195__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__20194__auto__,value__20195__auto__);
});

sablono.core.week_field20499.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field20499);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box20571 = (function sablono$core$check_box20571(var_args){
var args20572 = [];
var len__19529__auto___20575 = arguments.length;
var i__19530__auto___20576 = (0);
while(true){
if((i__19530__auto___20576 < len__19529__auto___20575)){
args20572.push((arguments[i__19530__auto___20576]));

var G__20577 = (i__19530__auto___20576 + (1));
i__19530__auto___20576 = G__20577;
continue;
} else {
}
break;
}

var G__20574 = args20572.length;
switch (G__20574) {
case 1:
return sablono.core.check_box20571.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box20571.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box20571.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20572.length)].join('')));

}
});

sablono.core.check_box20571.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box20571.call(null,name,null);
});

sablono.core.check_box20571.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box20571.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box20571.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box20571.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box20571);
/**
 * Creates a radio button.
 */
sablono.core.radio_button20579 = (function sablono$core$radio_button20579(var_args){
var args20580 = [];
var len__19529__auto___20583 = arguments.length;
var i__19530__auto___20584 = (0);
while(true){
if((i__19530__auto___20584 < len__19529__auto___20583)){
args20580.push((arguments[i__19530__auto___20584]));

var G__20585 = (i__19530__auto___20584 + (1));
i__19530__auto___20584 = G__20585;
continue;
} else {
}
break;
}

var G__20582 = args20580.length;
switch (G__20582) {
case 1:
return sablono.core.radio_button20579.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button20579.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button20579.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20580.length)].join('')));

}
});

sablono.core.radio_button20579.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button20579.call(null,group,null);
});

sablono.core.radio_button20579.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button20579.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button20579.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button20579.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button20579);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options20587 = (function sablono$core$select_options20587(coll){
var iter__19239__auto__ = (function sablono$core$select_options20587_$_iter__20596(s__20597){
return (new cljs.core.LazySeq(null,(function (){
var s__20597__$1 = s__20597;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20597__$1);
if(temp__4657__auto__){
var s__20597__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20597__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__20597__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__20599 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__20598 = (0);
while(true){
if((i__20598 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__20598);
cljs.core.chunk_append.call(null,b__20599,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20602 = x;
var text = cljs.core.nth.call(null,vec__20602,(0),null);
var val = cljs.core.nth.call(null,vec__20602,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20602,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options20587.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__20604 = (i__20598 + (1));
i__20598 = G__20604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20599),sablono$core$select_options20587_$_iter__20596.call(null,cljs.core.chunk_rest.call(null,s__20597__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20599),null);
}
} else {
var x = cljs.core.first.call(null,s__20597__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20603 = x;
var text = cljs.core.nth.call(null,vec__20603,(0),null);
var val = cljs.core.nth.call(null,vec__20603,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20603,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options20587.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options20587_$_iter__20596.call(null,cljs.core.rest.call(null,s__20597__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options20587);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down20605 = (function sablono$core$drop_down20605(var_args){
var args20606 = [];
var len__19529__auto___20609 = arguments.length;
var i__19530__auto___20610 = (0);
while(true){
if((i__19530__auto___20610 < len__19529__auto___20609)){
args20606.push((arguments[i__19530__auto___20610]));

var G__20611 = (i__19530__auto___20610 + (1));
i__19530__auto___20610 = G__20611;
continue;
} else {
}
break;
}

var G__20608 = args20606.length;
switch (G__20608) {
case 2:
return sablono.core.drop_down20605.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down20605.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20606.length)].join('')));

}
});

sablono.core.drop_down20605.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down20605.call(null,name,options,null);
});

sablono.core.drop_down20605.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down20605.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down20605);
/**
 * Creates a text area element.
 */
sablono.core.text_area20613 = (function sablono$core$text_area20613(var_args){
var args20614 = [];
var len__19529__auto___20617 = arguments.length;
var i__19530__auto___20618 = (0);
while(true){
if((i__19530__auto___20618 < len__19529__auto___20617)){
args20614.push((arguments[i__19530__auto___20618]));

var G__20619 = (i__19530__auto___20618 + (1));
i__19530__auto___20618 = G__20619;
continue;
} else {
}
break;
}

var G__20616 = args20614.length;
switch (G__20616) {
case 1:
return sablono.core.text_area20613.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area20613.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20614.length)].join('')));

}
});

sablono.core.text_area20613.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area20613.call(null,name,null);
});

sablono.core.text_area20613.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area20613.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area20613);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label20621 = (function sablono$core$label20621(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label20621);
/**
 * Creates a submit button.
 */
sablono.core.submit_button20622 = (function sablono$core$submit_button20622(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button20622);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button20623 = (function sablono$core$reset_button20623(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button20623);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to20624 = (function sablono$core$form_to20624(var_args){
var args__19536__auto__ = [];
var len__19529__auto___20629 = arguments.length;
var i__19530__auto___20630 = (0);
while(true){
if((i__19530__auto___20630 < len__19529__auto___20629)){
args__19536__auto__.push((arguments[i__19530__auto___20630]));

var G__20631 = (i__19530__auto___20630 + (1));
i__19530__auto___20630 = G__20631;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to20624.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.form_to20624.cljs$core$IFn$_invoke$arity$variadic = (function (p__20627,body){
var vec__20628 = p__20627;
var method = cljs.core.nth.call(null,vec__20628,(0),null);
var action = cljs.core.nth.call(null,vec__20628,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to20624.cljs$lang$maxFixedArity = (1);

sablono.core.form_to20624.cljs$lang$applyTo = (function (seq20625){
var G__20626 = cljs.core.first.call(null,seq20625);
var seq20625__$1 = cljs.core.next.call(null,seq20625);
return sablono.core.form_to20624.cljs$core$IFn$_invoke$arity$variadic(G__20626,seq20625__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to20624);

//# sourceMappingURL=core.js.map?rel=1505274415873