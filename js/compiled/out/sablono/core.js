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
var G__20369__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__20368 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__20368,(0),null);
var body = cljs.core.nthnext.call(null,vec__20368,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__20369 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20370__i = 0, G__20370__a = new Array(arguments.length -  0);
while (G__20370__i < G__20370__a.length) {G__20370__a[G__20370__i] = arguments[G__20370__i + 0]; ++G__20370__i;}
  args = new cljs.core.IndexedSeq(G__20370__a,0);
} 
return G__20369__delegate.call(this,args);};
G__20369.cljs$lang$maxFixedArity = 0;
G__20369.cljs$lang$applyTo = (function (arglist__20371){
var args = cljs.core.seq(arglist__20371);
return G__20369__delegate(args);
});
G__20369.cljs$core$IFn$_invoke$arity$variadic = G__20369__delegate;
return G__20369;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19239__auto__ = (function sablono$core$update_arglists_$_iter__20376(s__20377){
return (new cljs.core.LazySeq(null,(function (){
var s__20377__$1 = s__20377;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20377__$1);
if(temp__4657__auto__){
var s__20377__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20377__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__20377__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__20379 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__20378 = (0);
while(true){
if((i__20378 < size__19238__auto__)){
var args = cljs.core._nth.call(null,c__19237__auto__,i__20378);
cljs.core.chunk_append.call(null,b__20379,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__20380 = (i__20378 + (1));
i__20378 = G__20380;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20379),sablono$core$update_arglists_$_iter__20376.call(null,cljs.core.chunk_rest.call(null,s__20377__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20379),null);
}
} else {
var args = cljs.core.first.call(null,s__20377__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__20376.call(null,cljs.core.rest.call(null,s__20377__$2)));
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
var len__19529__auto___20386 = arguments.length;
var i__19530__auto___20387 = (0);
while(true){
if((i__19530__auto___20387 < len__19529__auto___20386)){
args__19536__auto__.push((arguments[i__19530__auto___20387]));

var G__20388 = (i__19530__auto___20387 + (1));
i__19530__auto___20387 = G__20388;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19239__auto__ = (function sablono$core$iter__20382(s__20383){
return (new cljs.core.LazySeq(null,(function (){
var s__20383__$1 = s__20383;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20383__$1);
if(temp__4657__auto__){
var s__20383__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20383__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__20383__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__20385 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__20384 = (0);
while(true){
if((i__20384 < size__19238__auto__)){
var style = cljs.core._nth.call(null,c__19237__auto__,i__20384);
cljs.core.chunk_append.call(null,b__20385,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__20389 = (i__20384 + (1));
i__20384 = G__20389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20385),sablono$core$iter__20382.call(null,cljs.core.chunk_rest.call(null,s__20383__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20385),null);
}
} else {
var style = cljs.core.first.call(null,s__20383__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__20382.call(null,cljs.core.rest.call(null,s__20383__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq20381){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20381));
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
sablono.core.link_to20390 = (function sablono$core$link_to20390(var_args){
var args__19536__auto__ = [];
var len__19529__auto___20393 = arguments.length;
var i__19530__auto___20394 = (0);
while(true){
if((i__19530__auto___20394 < len__19529__auto___20393)){
args__19536__auto__.push((arguments[i__19530__auto___20394]));

var G__20395 = (i__19530__auto___20394 + (1));
i__19530__auto___20394 = G__20395;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to20390.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.link_to20390.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to20390.cljs$lang$maxFixedArity = (1);

sablono.core.link_to20390.cljs$lang$applyTo = (function (seq20391){
var G__20392 = cljs.core.first.call(null,seq20391);
var seq20391__$1 = cljs.core.next.call(null,seq20391);
return sablono.core.link_to20390.cljs$core$IFn$_invoke$arity$variadic(G__20392,seq20391__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to20390);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to20396 = (function sablono$core$mail_to20396(var_args){
var args__19536__auto__ = [];
var len__19529__auto___20401 = arguments.length;
var i__19530__auto___20402 = (0);
while(true){
if((i__19530__auto___20402 < len__19529__auto___20401)){
args__19536__auto__.push((arguments[i__19530__auto___20402]));

var G__20403 = (i__19530__auto___20402 + (1));
i__19530__auto___20402 = G__20403;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to20396.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.mail_to20396.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__20399){
var vec__20400 = p__20399;
var content = cljs.core.nth.call(null,vec__20400,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18459__auto__ = content;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to20396.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to20396.cljs$lang$applyTo = (function (seq20397){
var G__20398 = cljs.core.first.call(null,seq20397);
var seq20397__$1 = cljs.core.next.call(null,seq20397);
return sablono.core.mail_to20396.cljs$core$IFn$_invoke$arity$variadic(G__20398,seq20397__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to20396);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list20404 = (function sablono$core$unordered_list20404(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19239__auto__ = (function sablono$core$unordered_list20404_$_iter__20409(s__20410){
return (new cljs.core.LazySeq(null,(function (){
var s__20410__$1 = s__20410;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20410__$1);
if(temp__4657__auto__){
var s__20410__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20410__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__20410__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__20412 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__20411 = (0);
while(true){
if((i__20411 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__20411);
cljs.core.chunk_append.call(null,b__20412,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__20413 = (i__20411 + (1));
i__20411 = G__20413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20412),sablono$core$unordered_list20404_$_iter__20409.call(null,cljs.core.chunk_rest.call(null,s__20410__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20412),null);
}
} else {
var x = cljs.core.first.call(null,s__20410__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list20404_$_iter__20409.call(null,cljs.core.rest.call(null,s__20410__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list20404);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list20414 = (function sablono$core$ordered_list20414(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19239__auto__ = (function sablono$core$ordered_list20414_$_iter__20419(s__20420){
return (new cljs.core.LazySeq(null,(function (){
var s__20420__$1 = s__20420;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20420__$1);
if(temp__4657__auto__){
var s__20420__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20420__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__20420__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__20422 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__20421 = (0);
while(true){
if((i__20421 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__20421);
cljs.core.chunk_append.call(null,b__20422,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__20423 = (i__20421 + (1));
i__20421 = G__20423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20422),sablono$core$ordered_list20414_$_iter__20419.call(null,cljs.core.chunk_rest.call(null,s__20420__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20422),null);
}
} else {
var x = cljs.core.first.call(null,s__20420__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list20414_$_iter__20419.call(null,cljs.core.rest.call(null,s__20420__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list20414);
/**
 * Create an image element.
 */
sablono.core.image20424 = (function sablono$core$image20424(var_args){
var args20425 = [];
var len__19529__auto___20428 = arguments.length;
var i__19530__auto___20429 = (0);
while(true){
if((i__19530__auto___20429 < len__19529__auto___20428)){
args20425.push((arguments[i__19530__auto___20429]));

var G__20430 = (i__19530__auto___20429 + (1));
i__19530__auto___20429 = G__20430;
continue;
} else {
}
break;
}

var G__20427 = args20425.length;
switch (G__20427) {
case 1:
return sablono.core.image20424.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image20424.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20425.length)].join('')));

}
});

sablono.core.image20424.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image20424.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image20424.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image20424);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__20432_SHARP_,p2__20433_SHARP_){
return [cljs.core.str(p1__20432_SHARP_),cljs.core.str("["),cljs.core.str(p2__20433_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__20434_SHARP_,p2__20435_SHARP_){
return [cljs.core.str(p1__20434_SHARP_),cljs.core.str("-"),cljs.core.str(p2__20435_SHARP_)].join('');
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
sablono.core.color_field20436 = (function sablono$core$color_field20436(var_args){
var args20437 = [];
var len__19529__auto___20504 = arguments.length;
var i__19530__auto___20505 = (0);
while(true){
if((i__19530__auto___20505 < len__19529__auto___20504)){
args20437.push((arguments[i__19530__auto___20505]));

var G__20506 = (i__19530__auto___20505 + (1));
i__19530__auto___20505 = G__20506;
continue;
} else {
}
break;
}

var G__20439 = args20437.length;
switch (G__20439) {
case 1:
return sablono.core.color_field20436.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field20436.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20437.length)].join('')));

}
});

sablono.core.color_field20436.cljs$core$IFn$_invoke$arity$1 = (function (name__20196__auto__){
return sablono.core.color_field20436.call(null,name__20196__auto__,null);
});

sablono.core.color_field20436.cljs$core$IFn$_invoke$arity$2 = (function (name__20196__auto__,value__20197__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__20196__auto__,value__20197__auto__);
});

sablono.core.color_field20436.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field20436);

/**
 * Creates a date input field.
 */
sablono.core.date_field20440 = (function sablono$core$date_field20440(var_args){
var args20441 = [];
var len__19529__auto___20508 = arguments.length;
var i__19530__auto___20509 = (0);
while(true){
if((i__19530__auto___20509 < len__19529__auto___20508)){
args20441.push((arguments[i__19530__auto___20509]));

var G__20510 = (i__19530__auto___20509 + (1));
i__19530__auto___20509 = G__20510;
continue;
} else {
}
break;
}

var G__20443 = args20441.length;
switch (G__20443) {
case 1:
return sablono.core.date_field20440.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field20440.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20441.length)].join('')));

}
});

sablono.core.date_field20440.cljs$core$IFn$_invoke$arity$1 = (function (name__20196__auto__){
return sablono.core.date_field20440.call(null,name__20196__auto__,null);
});

sablono.core.date_field20440.cljs$core$IFn$_invoke$arity$2 = (function (name__20196__auto__,value__20197__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__20196__auto__,value__20197__auto__);
});

sablono.core.date_field20440.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field20440);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field20444 = (function sablono$core$datetime_field20444(var_args){
var args20445 = [];
var len__19529__auto___20512 = arguments.length;
var i__19530__auto___20513 = (0);
while(true){
if((i__19530__auto___20513 < len__19529__auto___20512)){
args20445.push((arguments[i__19530__auto___20513]));

var G__20514 = (i__19530__auto___20513 + (1));
i__19530__auto___20513 = G__20514;
continue;
} else {
}
break;
}

var G__20447 = args20445.length;
switch (G__20447) {
case 1:
return sablono.core.datetime_field20444.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field20444.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20445.length)].join('')));

}
});

sablono.core.datetime_field20444.cljs$core$IFn$_invoke$arity$1 = (function (name__20196__auto__){
return sablono.core.datetime_field20444.call(null,name__20196__auto__,null);
});

sablono.core.datetime_field20444.cljs$core$IFn$_invoke$arity$2 = (function (name__20196__auto__,value__20197__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__20196__auto__,value__20197__auto__);
});

sablono.core.datetime_field20444.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field20444);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field20448 = (function sablono$core$datetime_local_field20448(var_args){
var args20449 = [];
var len__19529__auto___20516 = arguments.length;
var i__19530__auto___20517 = (0);
while(true){
if((i__19530__auto___20517 < len__19529__auto___20516)){
args20449.push((arguments[i__19530__auto___20517]));

var G__20518 = (i__19530__auto___20517 + (1));
i__19530__auto___20517 = G__20518;
continue;
} else {
}
break;
}

var G__20451 = args20449.length;
switch (G__20451) {
case 1:
return sablono.core.datetime_local_field20448.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field20448.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20449.length)].join('')));

}
});

sablono.core.datetime_local_field20448.cljs$core$IFn$_invoke$arity$1 = (function (name__20196__auto__){
return sablono.core.datetime_local_field20448.call(null,name__20196__auto__,null);
});

sablono.core.datetime_local_field20448.cljs$core$IFn$_invoke$arity$2 = (function (name__20196__auto__,value__20197__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__20196__auto__,value__20197__auto__);
});

sablono.core.datetime_local_field20448.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field20448);

/**
 * Creates a email input field.
 */
sablono.core.email_field20452 = (function sablono$core$email_field20452(var_args){
var args20453 = [];
var len__19529__auto___20520 = arguments.length;
var i__19530__auto___20521 = (0);
while(true){
if((i__19530__auto___20521 < len__19529__auto___20520)){
args20453.push((arguments[i__19530__auto___20521]));

var G__20522 = (i__19530__auto___20521 + (1));
i__19530__auto___20521 = G__20522;
continue;
} else {
}
break;
}

var G__20455 = args20453.length;
switch (G__20455) {
case 1:
return sablono.core.email_field20452.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field20452.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20453.length)].join('')));

}
});

sablono.core.email_field20452.cljs$core$IFn$_invoke$arity$1 = (function (name__20196__auto__){
return sablono.core.email_field20452.call(null,name__20196__auto__,null);
});

sablono.core.email_field20452.cljs$core$IFn$_invoke$arity$2 = (function (name__20196__auto__,value__20197__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__20196__auto__,value__20197__auto__);
});

sablono.core.email_field20452.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field20452);

/**
 * Creates a file input field.
 */
sablono.core.file_field20456 = (function sablono$core$file_field20456(var_args){
var args20457 = [];
var len__19529__auto___20524 = arguments.length;
var i__19530__auto___20525 = (0);
while(true){
if((i__19530__auto___20525 < len__19529__auto___20524)){
args20457.push((arguments[i__19530__auto___20525]));

var G__20526 = (i__19530__auto___20525 + (1));
i__19530__auto___20525 = G__20526;
continue;
} else {
}
break;
}

var G__20459 = args20457.length;
switch (G__20459) {
case 1:
return sablono.core.file_field20456.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field20456.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20457.length)].join('')));

}
});

sablono.core.file_field20456.cljs$core$IFn$_invoke$arity$1 = (function (name__20196__auto__){
return sablono.core.file_field20456.call(null,name__20196__auto__,null);
});

sablono.core.file_field20456.cljs$core$IFn$_invoke$arity$2 = (function (name__20196__auto__,value__20197__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__20196__auto__,value__20197__auto__);
});

sablono.core.file_field20456.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field20456);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field20460 = (function sablono$core$hidden_field20460(var_args){
var args20461 = [];
var len__19529__auto___20528 = arguments.length;
var i__19530__auto___20529 = (0);
while(true){
if((i__19530__auto___20529 < len__19529__auto___20528)){
args20461.push((arguments[i__19530__auto___20529]));

var G__20530 = (i__19530__auto___20529 + (1));
i__19530__auto___20529 = G__20530;
continue;
} else {
}
break;
}

var G__20463 = args20461.length;
switch (G__20463) {
case 1:
return sablono.core.hidden_field20460.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field20460.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20461.length)].join('')));

}
});

sablono.core.hidden_field20460.cljs$core$IFn$_invoke$arity$1 = (function (name__20196__auto__){
return sablono.core.hidden_field20460.call(null,name__20196__auto__,null);
});

sablono.core.hidden_field20460.cljs$core$IFn$_invoke$arity$2 = (function (name__20196__auto__,value__20197__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__20196__auto__,value__20197__auto__);
});

sablono.core.hidden_field20460.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field20460);

/**
 * Creates a month input field.
 */
sablono.core.month_field20464 = (function sablono$core$month_field20464(var_args){
var args20465 = [];
var len__19529__auto___20532 = arguments.length;
var i__19530__auto___20533 = (0);
while(true){
if((i__19530__auto___20533 < len__19529__auto___20532)){
args20465.push((arguments[i__19530__auto___20533]));

var G__20534 = (i__19530__auto___20533 + (1));
i__19530__auto___20533 = G__20534;
continue;
} else {
}
break;
}

var G__20467 = args20465.length;
switch (G__20467) {
case 1:
return sablono.core.month_field20464.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field20464.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20465.length)].join('')));

}
});

sablono.core.month_field20464.cljs$core$IFn$_invoke$arity$1 = (function (name__20196__auto__){
return sablono.core.month_field20464.call(null,name__20196__auto__,null);
});

sablono.core.month_field20464.cljs$core$IFn$_invoke$arity$2 = (function (name__20196__auto__,value__20197__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__20196__auto__,value__20197__auto__);
});

sablono.core.month_field20464.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field20464);

/**
 * Creates a number input field.
 */
sablono.core.number_field20468 = (function sablono$core$number_field20468(var_args){
var args20469 = [];
var len__19529__auto___20536 = arguments.length;
var i__19530__auto___20537 = (0);
while(true){
if((i__19530__auto___20537 < len__19529__auto___20536)){
args20469.push((arguments[i__19530__auto___20537]));

var G__20538 = (i__19530__auto___20537 + (1));
i__19530__auto___20537 = G__20538;
continue;
} else {
}
break;
}

var G__20471 = args20469.length;
switch (G__20471) {
case 1:
return sablono.core.number_field20468.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field20468.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20469.length)].join('')));

}
});

sablono.core.number_field20468.cljs$core$IFn$_invoke$arity$1 = (function (name__20196__auto__){
return sablono.core.number_field20468.call(null,name__20196__auto__,null);
});

sablono.core.number_field20468.cljs$core$IFn$_invoke$arity$2 = (function (name__20196__auto__,value__20197__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__20196__auto__,value__20197__auto__);
});

sablono.core.number_field20468.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field20468);

/**
 * Creates a password input field.
 */
sablono.core.password_field20472 = (function sablono$core$password_field20472(var_args){
var args20473 = [];
var len__19529__auto___20540 = arguments.length;
var i__19530__auto___20541 = (0);
while(true){
if((i__19530__auto___20541 < len__19529__auto___20540)){
args20473.push((arguments[i__19530__auto___20541]));

var G__20542 = (i__19530__auto___20541 + (1));
i__19530__auto___20541 = G__20542;
continue;
} else {
}
break;
}

var G__20475 = args20473.length;
switch (G__20475) {
case 1:
return sablono.core.password_field20472.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field20472.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20473.length)].join('')));

}
});

sablono.core.password_field20472.cljs$core$IFn$_invoke$arity$1 = (function (name__20196__auto__){
return sablono.core.password_field20472.call(null,name__20196__auto__,null);
});

sablono.core.password_field20472.cljs$core$IFn$_invoke$arity$2 = (function (name__20196__auto__,value__20197__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__20196__auto__,value__20197__auto__);
});

sablono.core.password_field20472.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field20472);

/**
 * Creates a range input field.
 */
sablono.core.range_field20476 = (function sablono$core$range_field20476(var_args){
var args20477 = [];
var len__19529__auto___20544 = arguments.length;
var i__19530__auto___20545 = (0);
while(true){
if((i__19530__auto___20545 < len__19529__auto___20544)){
args20477.push((arguments[i__19530__auto___20545]));

var G__20546 = (i__19530__auto___20545 + (1));
i__19530__auto___20545 = G__20546;
continue;
} else {
}
break;
}

var G__20479 = args20477.length;
switch (G__20479) {
case 1:
return sablono.core.range_field20476.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field20476.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20477.length)].join('')));

}
});

sablono.core.range_field20476.cljs$core$IFn$_invoke$arity$1 = (function (name__20196__auto__){
return sablono.core.range_field20476.call(null,name__20196__auto__,null);
});

sablono.core.range_field20476.cljs$core$IFn$_invoke$arity$2 = (function (name__20196__auto__,value__20197__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__20196__auto__,value__20197__auto__);
});

sablono.core.range_field20476.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field20476);

/**
 * Creates a search input field.
 */
sablono.core.search_field20480 = (function sablono$core$search_field20480(var_args){
var args20481 = [];
var len__19529__auto___20548 = arguments.length;
var i__19530__auto___20549 = (0);
while(true){
if((i__19530__auto___20549 < len__19529__auto___20548)){
args20481.push((arguments[i__19530__auto___20549]));

var G__20550 = (i__19530__auto___20549 + (1));
i__19530__auto___20549 = G__20550;
continue;
} else {
}
break;
}

var G__20483 = args20481.length;
switch (G__20483) {
case 1:
return sablono.core.search_field20480.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field20480.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20481.length)].join('')));

}
});

sablono.core.search_field20480.cljs$core$IFn$_invoke$arity$1 = (function (name__20196__auto__){
return sablono.core.search_field20480.call(null,name__20196__auto__,null);
});

sablono.core.search_field20480.cljs$core$IFn$_invoke$arity$2 = (function (name__20196__auto__,value__20197__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__20196__auto__,value__20197__auto__);
});

sablono.core.search_field20480.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field20480);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field20484 = (function sablono$core$tel_field20484(var_args){
var args20485 = [];
var len__19529__auto___20552 = arguments.length;
var i__19530__auto___20553 = (0);
while(true){
if((i__19530__auto___20553 < len__19529__auto___20552)){
args20485.push((arguments[i__19530__auto___20553]));

var G__20554 = (i__19530__auto___20553 + (1));
i__19530__auto___20553 = G__20554;
continue;
} else {
}
break;
}

var G__20487 = args20485.length;
switch (G__20487) {
case 1:
return sablono.core.tel_field20484.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field20484.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20485.length)].join('')));

}
});

sablono.core.tel_field20484.cljs$core$IFn$_invoke$arity$1 = (function (name__20196__auto__){
return sablono.core.tel_field20484.call(null,name__20196__auto__,null);
});

sablono.core.tel_field20484.cljs$core$IFn$_invoke$arity$2 = (function (name__20196__auto__,value__20197__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__20196__auto__,value__20197__auto__);
});

sablono.core.tel_field20484.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field20484);

/**
 * Creates a text input field.
 */
sablono.core.text_field20488 = (function sablono$core$text_field20488(var_args){
var args20489 = [];
var len__19529__auto___20556 = arguments.length;
var i__19530__auto___20557 = (0);
while(true){
if((i__19530__auto___20557 < len__19529__auto___20556)){
args20489.push((arguments[i__19530__auto___20557]));

var G__20558 = (i__19530__auto___20557 + (1));
i__19530__auto___20557 = G__20558;
continue;
} else {
}
break;
}

var G__20491 = args20489.length;
switch (G__20491) {
case 1:
return sablono.core.text_field20488.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field20488.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20489.length)].join('')));

}
});

sablono.core.text_field20488.cljs$core$IFn$_invoke$arity$1 = (function (name__20196__auto__){
return sablono.core.text_field20488.call(null,name__20196__auto__,null);
});

sablono.core.text_field20488.cljs$core$IFn$_invoke$arity$2 = (function (name__20196__auto__,value__20197__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__20196__auto__,value__20197__auto__);
});

sablono.core.text_field20488.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field20488);

/**
 * Creates a time input field.
 */
sablono.core.time_field20492 = (function sablono$core$time_field20492(var_args){
var args20493 = [];
var len__19529__auto___20560 = arguments.length;
var i__19530__auto___20561 = (0);
while(true){
if((i__19530__auto___20561 < len__19529__auto___20560)){
args20493.push((arguments[i__19530__auto___20561]));

var G__20562 = (i__19530__auto___20561 + (1));
i__19530__auto___20561 = G__20562;
continue;
} else {
}
break;
}

var G__20495 = args20493.length;
switch (G__20495) {
case 1:
return sablono.core.time_field20492.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field20492.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20493.length)].join('')));

}
});

sablono.core.time_field20492.cljs$core$IFn$_invoke$arity$1 = (function (name__20196__auto__){
return sablono.core.time_field20492.call(null,name__20196__auto__,null);
});

sablono.core.time_field20492.cljs$core$IFn$_invoke$arity$2 = (function (name__20196__auto__,value__20197__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__20196__auto__,value__20197__auto__);
});

sablono.core.time_field20492.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field20492);

/**
 * Creates a url input field.
 */
sablono.core.url_field20496 = (function sablono$core$url_field20496(var_args){
var args20497 = [];
var len__19529__auto___20564 = arguments.length;
var i__19530__auto___20565 = (0);
while(true){
if((i__19530__auto___20565 < len__19529__auto___20564)){
args20497.push((arguments[i__19530__auto___20565]));

var G__20566 = (i__19530__auto___20565 + (1));
i__19530__auto___20565 = G__20566;
continue;
} else {
}
break;
}

var G__20499 = args20497.length;
switch (G__20499) {
case 1:
return sablono.core.url_field20496.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field20496.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20497.length)].join('')));

}
});

sablono.core.url_field20496.cljs$core$IFn$_invoke$arity$1 = (function (name__20196__auto__){
return sablono.core.url_field20496.call(null,name__20196__auto__,null);
});

sablono.core.url_field20496.cljs$core$IFn$_invoke$arity$2 = (function (name__20196__auto__,value__20197__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__20196__auto__,value__20197__auto__);
});

sablono.core.url_field20496.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field20496);

/**
 * Creates a week input field.
 */
sablono.core.week_field20500 = (function sablono$core$week_field20500(var_args){
var args20501 = [];
var len__19529__auto___20568 = arguments.length;
var i__19530__auto___20569 = (0);
while(true){
if((i__19530__auto___20569 < len__19529__auto___20568)){
args20501.push((arguments[i__19530__auto___20569]));

var G__20570 = (i__19530__auto___20569 + (1));
i__19530__auto___20569 = G__20570;
continue;
} else {
}
break;
}

var G__20503 = args20501.length;
switch (G__20503) {
case 1:
return sablono.core.week_field20500.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field20500.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20501.length)].join('')));

}
});

sablono.core.week_field20500.cljs$core$IFn$_invoke$arity$1 = (function (name__20196__auto__){
return sablono.core.week_field20500.call(null,name__20196__auto__,null);
});

sablono.core.week_field20500.cljs$core$IFn$_invoke$arity$2 = (function (name__20196__auto__,value__20197__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__20196__auto__,value__20197__auto__);
});

sablono.core.week_field20500.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field20500);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box20572 = (function sablono$core$check_box20572(var_args){
var args20573 = [];
var len__19529__auto___20576 = arguments.length;
var i__19530__auto___20577 = (0);
while(true){
if((i__19530__auto___20577 < len__19529__auto___20576)){
args20573.push((arguments[i__19530__auto___20577]));

var G__20578 = (i__19530__auto___20577 + (1));
i__19530__auto___20577 = G__20578;
continue;
} else {
}
break;
}

var G__20575 = args20573.length;
switch (G__20575) {
case 1:
return sablono.core.check_box20572.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box20572.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box20572.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20573.length)].join('')));

}
});

sablono.core.check_box20572.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box20572.call(null,name,null);
});

sablono.core.check_box20572.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box20572.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box20572.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box20572.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box20572);
/**
 * Creates a radio button.
 */
sablono.core.radio_button20580 = (function sablono$core$radio_button20580(var_args){
var args20581 = [];
var len__19529__auto___20584 = arguments.length;
var i__19530__auto___20585 = (0);
while(true){
if((i__19530__auto___20585 < len__19529__auto___20584)){
args20581.push((arguments[i__19530__auto___20585]));

var G__20586 = (i__19530__auto___20585 + (1));
i__19530__auto___20585 = G__20586;
continue;
} else {
}
break;
}

var G__20583 = args20581.length;
switch (G__20583) {
case 1:
return sablono.core.radio_button20580.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button20580.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button20580.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20581.length)].join('')));

}
});

sablono.core.radio_button20580.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button20580.call(null,group,null);
});

sablono.core.radio_button20580.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button20580.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button20580.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button20580.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button20580);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options20588 = (function sablono$core$select_options20588(coll){
var iter__19239__auto__ = (function sablono$core$select_options20588_$_iter__20597(s__20598){
return (new cljs.core.LazySeq(null,(function (){
var s__20598__$1 = s__20598;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20598__$1);
if(temp__4657__auto__){
var s__20598__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20598__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__20598__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__20600 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__20599 = (0);
while(true){
if((i__20599 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__20599);
cljs.core.chunk_append.call(null,b__20600,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20603 = x;
var text = cljs.core.nth.call(null,vec__20603,(0),null);
var val = cljs.core.nth.call(null,vec__20603,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20603,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options20588.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__20605 = (i__20599 + (1));
i__20599 = G__20605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20600),sablono$core$select_options20588_$_iter__20597.call(null,cljs.core.chunk_rest.call(null,s__20598__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20600),null);
}
} else {
var x = cljs.core.first.call(null,s__20598__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20604 = x;
var text = cljs.core.nth.call(null,vec__20604,(0),null);
var val = cljs.core.nth.call(null,vec__20604,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20604,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options20588.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options20588_$_iter__20597.call(null,cljs.core.rest.call(null,s__20598__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options20588);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down20606 = (function sablono$core$drop_down20606(var_args){
var args20607 = [];
var len__19529__auto___20610 = arguments.length;
var i__19530__auto___20611 = (0);
while(true){
if((i__19530__auto___20611 < len__19529__auto___20610)){
args20607.push((arguments[i__19530__auto___20611]));

var G__20612 = (i__19530__auto___20611 + (1));
i__19530__auto___20611 = G__20612;
continue;
} else {
}
break;
}

var G__20609 = args20607.length;
switch (G__20609) {
case 2:
return sablono.core.drop_down20606.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down20606.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20607.length)].join('')));

}
});

sablono.core.drop_down20606.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down20606.call(null,name,options,null);
});

sablono.core.drop_down20606.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down20606.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down20606);
/**
 * Creates a text area element.
 */
sablono.core.text_area20614 = (function sablono$core$text_area20614(var_args){
var args20615 = [];
var len__19529__auto___20618 = arguments.length;
var i__19530__auto___20619 = (0);
while(true){
if((i__19530__auto___20619 < len__19529__auto___20618)){
args20615.push((arguments[i__19530__auto___20619]));

var G__20620 = (i__19530__auto___20619 + (1));
i__19530__auto___20619 = G__20620;
continue;
} else {
}
break;
}

var G__20617 = args20615.length;
switch (G__20617) {
case 1:
return sablono.core.text_area20614.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area20614.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20615.length)].join('')));

}
});

sablono.core.text_area20614.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area20614.call(null,name,null);
});

sablono.core.text_area20614.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area20614.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area20614);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label20622 = (function sablono$core$label20622(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label20622);
/**
 * Creates a submit button.
 */
sablono.core.submit_button20623 = (function sablono$core$submit_button20623(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button20623);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button20624 = (function sablono$core$reset_button20624(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button20624);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to20625 = (function sablono$core$form_to20625(var_args){
var args__19536__auto__ = [];
var len__19529__auto___20630 = arguments.length;
var i__19530__auto___20631 = (0);
while(true){
if((i__19530__auto___20631 < len__19529__auto___20630)){
args__19536__auto__.push((arguments[i__19530__auto___20631]));

var G__20632 = (i__19530__auto___20631 + (1));
i__19530__auto___20631 = G__20632;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to20625.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.form_to20625.cljs$core$IFn$_invoke$arity$variadic = (function (p__20628,body){
var vec__20629 = p__20628;
var method = cljs.core.nth.call(null,vec__20629,(0),null);
var action = cljs.core.nth.call(null,vec__20629,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to20625.cljs$lang$maxFixedArity = (1);

sablono.core.form_to20625.cljs$lang$applyTo = (function (seq20626){
var G__20627 = cljs.core.first.call(null,seq20626);
var seq20626__$1 = cljs.core.next.call(null,seq20626);
return sablono.core.form_to20625.cljs$core$IFn$_invoke$arity$variadic(G__20627,seq20626__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to20625);

//# sourceMappingURL=core.js.map?rel=1505315423755