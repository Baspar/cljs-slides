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
var G__20316__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__20315 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__20315,(0),null);
var body = cljs.core.nthnext.call(null,vec__20315,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__20316 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20317__i = 0, G__20317__a = new Array(arguments.length -  0);
while (G__20317__i < G__20317__a.length) {G__20317__a[G__20317__i] = arguments[G__20317__i + 0]; ++G__20317__i;}
  args = new cljs.core.IndexedSeq(G__20317__a,0);
} 
return G__20316__delegate.call(this,args);};
G__20316.cljs$lang$maxFixedArity = 0;
G__20316.cljs$lang$applyTo = (function (arglist__20318){
var args = cljs.core.seq(arglist__20318);
return G__20316__delegate(args);
});
G__20316.cljs$core$IFn$_invoke$arity$variadic = G__20316__delegate;
return G__20316;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19239__auto__ = (function sablono$core$update_arglists_$_iter__20323(s__20324){
return (new cljs.core.LazySeq(null,(function (){
var s__20324__$1 = s__20324;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20324__$1);
if(temp__4657__auto__){
var s__20324__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20324__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__20324__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__20326 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__20325 = (0);
while(true){
if((i__20325 < size__19238__auto__)){
var args = cljs.core._nth.call(null,c__19237__auto__,i__20325);
cljs.core.chunk_append.call(null,b__20326,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__20327 = (i__20325 + (1));
i__20325 = G__20327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20326),sablono$core$update_arglists_$_iter__20323.call(null,cljs.core.chunk_rest.call(null,s__20324__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20326),null);
}
} else {
var args = cljs.core.first.call(null,s__20324__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__20323.call(null,cljs.core.rest.call(null,s__20324__$2)));
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
var len__19529__auto___20333 = arguments.length;
var i__19530__auto___20334 = (0);
while(true){
if((i__19530__auto___20334 < len__19529__auto___20333)){
args__19536__auto__.push((arguments[i__19530__auto___20334]));

var G__20335 = (i__19530__auto___20334 + (1));
i__19530__auto___20334 = G__20335;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19239__auto__ = (function sablono$core$iter__20329(s__20330){
return (new cljs.core.LazySeq(null,(function (){
var s__20330__$1 = s__20330;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20330__$1);
if(temp__4657__auto__){
var s__20330__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20330__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__20330__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__20332 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__20331 = (0);
while(true){
if((i__20331 < size__19238__auto__)){
var style = cljs.core._nth.call(null,c__19237__auto__,i__20331);
cljs.core.chunk_append.call(null,b__20332,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__20336 = (i__20331 + (1));
i__20331 = G__20336;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20332),sablono$core$iter__20329.call(null,cljs.core.chunk_rest.call(null,s__20330__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20332),null);
}
} else {
var style = cljs.core.first.call(null,s__20330__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__20329.call(null,cljs.core.rest.call(null,s__20330__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq20328){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20328));
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
sablono.core.link_to20337 = (function sablono$core$link_to20337(var_args){
var args__19536__auto__ = [];
var len__19529__auto___20340 = arguments.length;
var i__19530__auto___20341 = (0);
while(true){
if((i__19530__auto___20341 < len__19529__auto___20340)){
args__19536__auto__.push((arguments[i__19530__auto___20341]));

var G__20342 = (i__19530__auto___20341 + (1));
i__19530__auto___20341 = G__20342;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to20337.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.link_to20337.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to20337.cljs$lang$maxFixedArity = (1);

sablono.core.link_to20337.cljs$lang$applyTo = (function (seq20338){
var G__20339 = cljs.core.first.call(null,seq20338);
var seq20338__$1 = cljs.core.next.call(null,seq20338);
return sablono.core.link_to20337.cljs$core$IFn$_invoke$arity$variadic(G__20339,seq20338__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to20337);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to20343 = (function sablono$core$mail_to20343(var_args){
var args__19536__auto__ = [];
var len__19529__auto___20348 = arguments.length;
var i__19530__auto___20349 = (0);
while(true){
if((i__19530__auto___20349 < len__19529__auto___20348)){
args__19536__auto__.push((arguments[i__19530__auto___20349]));

var G__20350 = (i__19530__auto___20349 + (1));
i__19530__auto___20349 = G__20350;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to20343.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.mail_to20343.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__20346){
var vec__20347 = p__20346;
var content = cljs.core.nth.call(null,vec__20347,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18459__auto__ = content;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to20343.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to20343.cljs$lang$applyTo = (function (seq20344){
var G__20345 = cljs.core.first.call(null,seq20344);
var seq20344__$1 = cljs.core.next.call(null,seq20344);
return sablono.core.mail_to20343.cljs$core$IFn$_invoke$arity$variadic(G__20345,seq20344__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to20343);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list20351 = (function sablono$core$unordered_list20351(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19239__auto__ = (function sablono$core$unordered_list20351_$_iter__20356(s__20357){
return (new cljs.core.LazySeq(null,(function (){
var s__20357__$1 = s__20357;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20357__$1);
if(temp__4657__auto__){
var s__20357__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20357__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__20357__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__20359 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__20358 = (0);
while(true){
if((i__20358 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__20358);
cljs.core.chunk_append.call(null,b__20359,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__20360 = (i__20358 + (1));
i__20358 = G__20360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20359),sablono$core$unordered_list20351_$_iter__20356.call(null,cljs.core.chunk_rest.call(null,s__20357__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20359),null);
}
} else {
var x = cljs.core.first.call(null,s__20357__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list20351_$_iter__20356.call(null,cljs.core.rest.call(null,s__20357__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list20351);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list20361 = (function sablono$core$ordered_list20361(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19239__auto__ = (function sablono$core$ordered_list20361_$_iter__20366(s__20367){
return (new cljs.core.LazySeq(null,(function (){
var s__20367__$1 = s__20367;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20367__$1);
if(temp__4657__auto__){
var s__20367__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20367__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__20367__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__20369 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__20368 = (0);
while(true){
if((i__20368 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__20368);
cljs.core.chunk_append.call(null,b__20369,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__20370 = (i__20368 + (1));
i__20368 = G__20370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20369),sablono$core$ordered_list20361_$_iter__20366.call(null,cljs.core.chunk_rest.call(null,s__20367__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20369),null);
}
} else {
var x = cljs.core.first.call(null,s__20367__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list20361_$_iter__20366.call(null,cljs.core.rest.call(null,s__20367__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list20361);
/**
 * Create an image element.
 */
sablono.core.image20371 = (function sablono$core$image20371(var_args){
var args20372 = [];
var len__19529__auto___20375 = arguments.length;
var i__19530__auto___20376 = (0);
while(true){
if((i__19530__auto___20376 < len__19529__auto___20375)){
args20372.push((arguments[i__19530__auto___20376]));

var G__20377 = (i__19530__auto___20376 + (1));
i__19530__auto___20376 = G__20377;
continue;
} else {
}
break;
}

var G__20374 = args20372.length;
switch (G__20374) {
case 1:
return sablono.core.image20371.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image20371.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20372.length)].join('')));

}
});

sablono.core.image20371.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image20371.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image20371.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image20371);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__20379_SHARP_,p2__20380_SHARP_){
return [cljs.core.str(p1__20379_SHARP_),cljs.core.str("["),cljs.core.str(p2__20380_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__20381_SHARP_,p2__20382_SHARP_){
return [cljs.core.str(p1__20381_SHARP_),cljs.core.str("-"),cljs.core.str(p2__20382_SHARP_)].join('');
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
sablono.core.color_field20383 = (function sablono$core$color_field20383(var_args){
var args20384 = [];
var len__19529__auto___20451 = arguments.length;
var i__19530__auto___20452 = (0);
while(true){
if((i__19530__auto___20452 < len__19529__auto___20451)){
args20384.push((arguments[i__19530__auto___20452]));

var G__20453 = (i__19530__auto___20452 + (1));
i__19530__auto___20452 = G__20453;
continue;
} else {
}
break;
}

var G__20386 = args20384.length;
switch (G__20386) {
case 1:
return sablono.core.color_field20383.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field20383.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20384.length)].join('')));

}
});

sablono.core.color_field20383.cljs$core$IFn$_invoke$arity$1 = (function (name__20143__auto__){
return sablono.core.color_field20383.call(null,name__20143__auto__,null);
});

sablono.core.color_field20383.cljs$core$IFn$_invoke$arity$2 = (function (name__20143__auto__,value__20144__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__20143__auto__,value__20144__auto__);
});

sablono.core.color_field20383.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field20383);

/**
 * Creates a date input field.
 */
sablono.core.date_field20387 = (function sablono$core$date_field20387(var_args){
var args20388 = [];
var len__19529__auto___20455 = arguments.length;
var i__19530__auto___20456 = (0);
while(true){
if((i__19530__auto___20456 < len__19529__auto___20455)){
args20388.push((arguments[i__19530__auto___20456]));

var G__20457 = (i__19530__auto___20456 + (1));
i__19530__auto___20456 = G__20457;
continue;
} else {
}
break;
}

var G__20390 = args20388.length;
switch (G__20390) {
case 1:
return sablono.core.date_field20387.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field20387.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20388.length)].join('')));

}
});

sablono.core.date_field20387.cljs$core$IFn$_invoke$arity$1 = (function (name__20143__auto__){
return sablono.core.date_field20387.call(null,name__20143__auto__,null);
});

sablono.core.date_field20387.cljs$core$IFn$_invoke$arity$2 = (function (name__20143__auto__,value__20144__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__20143__auto__,value__20144__auto__);
});

sablono.core.date_field20387.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field20387);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field20391 = (function sablono$core$datetime_field20391(var_args){
var args20392 = [];
var len__19529__auto___20459 = arguments.length;
var i__19530__auto___20460 = (0);
while(true){
if((i__19530__auto___20460 < len__19529__auto___20459)){
args20392.push((arguments[i__19530__auto___20460]));

var G__20461 = (i__19530__auto___20460 + (1));
i__19530__auto___20460 = G__20461;
continue;
} else {
}
break;
}

var G__20394 = args20392.length;
switch (G__20394) {
case 1:
return sablono.core.datetime_field20391.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field20391.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20392.length)].join('')));

}
});

sablono.core.datetime_field20391.cljs$core$IFn$_invoke$arity$1 = (function (name__20143__auto__){
return sablono.core.datetime_field20391.call(null,name__20143__auto__,null);
});

sablono.core.datetime_field20391.cljs$core$IFn$_invoke$arity$2 = (function (name__20143__auto__,value__20144__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__20143__auto__,value__20144__auto__);
});

sablono.core.datetime_field20391.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field20391);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field20395 = (function sablono$core$datetime_local_field20395(var_args){
var args20396 = [];
var len__19529__auto___20463 = arguments.length;
var i__19530__auto___20464 = (0);
while(true){
if((i__19530__auto___20464 < len__19529__auto___20463)){
args20396.push((arguments[i__19530__auto___20464]));

var G__20465 = (i__19530__auto___20464 + (1));
i__19530__auto___20464 = G__20465;
continue;
} else {
}
break;
}

var G__20398 = args20396.length;
switch (G__20398) {
case 1:
return sablono.core.datetime_local_field20395.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field20395.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20396.length)].join('')));

}
});

sablono.core.datetime_local_field20395.cljs$core$IFn$_invoke$arity$1 = (function (name__20143__auto__){
return sablono.core.datetime_local_field20395.call(null,name__20143__auto__,null);
});

sablono.core.datetime_local_field20395.cljs$core$IFn$_invoke$arity$2 = (function (name__20143__auto__,value__20144__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__20143__auto__,value__20144__auto__);
});

sablono.core.datetime_local_field20395.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field20395);

/**
 * Creates a email input field.
 */
sablono.core.email_field20399 = (function sablono$core$email_field20399(var_args){
var args20400 = [];
var len__19529__auto___20467 = arguments.length;
var i__19530__auto___20468 = (0);
while(true){
if((i__19530__auto___20468 < len__19529__auto___20467)){
args20400.push((arguments[i__19530__auto___20468]));

var G__20469 = (i__19530__auto___20468 + (1));
i__19530__auto___20468 = G__20469;
continue;
} else {
}
break;
}

var G__20402 = args20400.length;
switch (G__20402) {
case 1:
return sablono.core.email_field20399.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field20399.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20400.length)].join('')));

}
});

sablono.core.email_field20399.cljs$core$IFn$_invoke$arity$1 = (function (name__20143__auto__){
return sablono.core.email_field20399.call(null,name__20143__auto__,null);
});

sablono.core.email_field20399.cljs$core$IFn$_invoke$arity$2 = (function (name__20143__auto__,value__20144__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__20143__auto__,value__20144__auto__);
});

sablono.core.email_field20399.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field20399);

/**
 * Creates a file input field.
 */
sablono.core.file_field20403 = (function sablono$core$file_field20403(var_args){
var args20404 = [];
var len__19529__auto___20471 = arguments.length;
var i__19530__auto___20472 = (0);
while(true){
if((i__19530__auto___20472 < len__19529__auto___20471)){
args20404.push((arguments[i__19530__auto___20472]));

var G__20473 = (i__19530__auto___20472 + (1));
i__19530__auto___20472 = G__20473;
continue;
} else {
}
break;
}

var G__20406 = args20404.length;
switch (G__20406) {
case 1:
return sablono.core.file_field20403.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field20403.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20404.length)].join('')));

}
});

sablono.core.file_field20403.cljs$core$IFn$_invoke$arity$1 = (function (name__20143__auto__){
return sablono.core.file_field20403.call(null,name__20143__auto__,null);
});

sablono.core.file_field20403.cljs$core$IFn$_invoke$arity$2 = (function (name__20143__auto__,value__20144__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__20143__auto__,value__20144__auto__);
});

sablono.core.file_field20403.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field20403);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field20407 = (function sablono$core$hidden_field20407(var_args){
var args20408 = [];
var len__19529__auto___20475 = arguments.length;
var i__19530__auto___20476 = (0);
while(true){
if((i__19530__auto___20476 < len__19529__auto___20475)){
args20408.push((arguments[i__19530__auto___20476]));

var G__20477 = (i__19530__auto___20476 + (1));
i__19530__auto___20476 = G__20477;
continue;
} else {
}
break;
}

var G__20410 = args20408.length;
switch (G__20410) {
case 1:
return sablono.core.hidden_field20407.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field20407.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20408.length)].join('')));

}
});

sablono.core.hidden_field20407.cljs$core$IFn$_invoke$arity$1 = (function (name__20143__auto__){
return sablono.core.hidden_field20407.call(null,name__20143__auto__,null);
});

sablono.core.hidden_field20407.cljs$core$IFn$_invoke$arity$2 = (function (name__20143__auto__,value__20144__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__20143__auto__,value__20144__auto__);
});

sablono.core.hidden_field20407.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field20407);

/**
 * Creates a month input field.
 */
sablono.core.month_field20411 = (function sablono$core$month_field20411(var_args){
var args20412 = [];
var len__19529__auto___20479 = arguments.length;
var i__19530__auto___20480 = (0);
while(true){
if((i__19530__auto___20480 < len__19529__auto___20479)){
args20412.push((arguments[i__19530__auto___20480]));

var G__20481 = (i__19530__auto___20480 + (1));
i__19530__auto___20480 = G__20481;
continue;
} else {
}
break;
}

var G__20414 = args20412.length;
switch (G__20414) {
case 1:
return sablono.core.month_field20411.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field20411.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20412.length)].join('')));

}
});

sablono.core.month_field20411.cljs$core$IFn$_invoke$arity$1 = (function (name__20143__auto__){
return sablono.core.month_field20411.call(null,name__20143__auto__,null);
});

sablono.core.month_field20411.cljs$core$IFn$_invoke$arity$2 = (function (name__20143__auto__,value__20144__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__20143__auto__,value__20144__auto__);
});

sablono.core.month_field20411.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field20411);

/**
 * Creates a number input field.
 */
sablono.core.number_field20415 = (function sablono$core$number_field20415(var_args){
var args20416 = [];
var len__19529__auto___20483 = arguments.length;
var i__19530__auto___20484 = (0);
while(true){
if((i__19530__auto___20484 < len__19529__auto___20483)){
args20416.push((arguments[i__19530__auto___20484]));

var G__20485 = (i__19530__auto___20484 + (1));
i__19530__auto___20484 = G__20485;
continue;
} else {
}
break;
}

var G__20418 = args20416.length;
switch (G__20418) {
case 1:
return sablono.core.number_field20415.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field20415.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20416.length)].join('')));

}
});

sablono.core.number_field20415.cljs$core$IFn$_invoke$arity$1 = (function (name__20143__auto__){
return sablono.core.number_field20415.call(null,name__20143__auto__,null);
});

sablono.core.number_field20415.cljs$core$IFn$_invoke$arity$2 = (function (name__20143__auto__,value__20144__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__20143__auto__,value__20144__auto__);
});

sablono.core.number_field20415.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field20415);

/**
 * Creates a password input field.
 */
sablono.core.password_field20419 = (function sablono$core$password_field20419(var_args){
var args20420 = [];
var len__19529__auto___20487 = arguments.length;
var i__19530__auto___20488 = (0);
while(true){
if((i__19530__auto___20488 < len__19529__auto___20487)){
args20420.push((arguments[i__19530__auto___20488]));

var G__20489 = (i__19530__auto___20488 + (1));
i__19530__auto___20488 = G__20489;
continue;
} else {
}
break;
}

var G__20422 = args20420.length;
switch (G__20422) {
case 1:
return sablono.core.password_field20419.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field20419.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20420.length)].join('')));

}
});

sablono.core.password_field20419.cljs$core$IFn$_invoke$arity$1 = (function (name__20143__auto__){
return sablono.core.password_field20419.call(null,name__20143__auto__,null);
});

sablono.core.password_field20419.cljs$core$IFn$_invoke$arity$2 = (function (name__20143__auto__,value__20144__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__20143__auto__,value__20144__auto__);
});

sablono.core.password_field20419.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field20419);

/**
 * Creates a range input field.
 */
sablono.core.range_field20423 = (function sablono$core$range_field20423(var_args){
var args20424 = [];
var len__19529__auto___20491 = arguments.length;
var i__19530__auto___20492 = (0);
while(true){
if((i__19530__auto___20492 < len__19529__auto___20491)){
args20424.push((arguments[i__19530__auto___20492]));

var G__20493 = (i__19530__auto___20492 + (1));
i__19530__auto___20492 = G__20493;
continue;
} else {
}
break;
}

var G__20426 = args20424.length;
switch (G__20426) {
case 1:
return sablono.core.range_field20423.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field20423.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20424.length)].join('')));

}
});

sablono.core.range_field20423.cljs$core$IFn$_invoke$arity$1 = (function (name__20143__auto__){
return sablono.core.range_field20423.call(null,name__20143__auto__,null);
});

sablono.core.range_field20423.cljs$core$IFn$_invoke$arity$2 = (function (name__20143__auto__,value__20144__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__20143__auto__,value__20144__auto__);
});

sablono.core.range_field20423.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field20423);

/**
 * Creates a search input field.
 */
sablono.core.search_field20427 = (function sablono$core$search_field20427(var_args){
var args20428 = [];
var len__19529__auto___20495 = arguments.length;
var i__19530__auto___20496 = (0);
while(true){
if((i__19530__auto___20496 < len__19529__auto___20495)){
args20428.push((arguments[i__19530__auto___20496]));

var G__20497 = (i__19530__auto___20496 + (1));
i__19530__auto___20496 = G__20497;
continue;
} else {
}
break;
}

var G__20430 = args20428.length;
switch (G__20430) {
case 1:
return sablono.core.search_field20427.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field20427.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20428.length)].join('')));

}
});

sablono.core.search_field20427.cljs$core$IFn$_invoke$arity$1 = (function (name__20143__auto__){
return sablono.core.search_field20427.call(null,name__20143__auto__,null);
});

sablono.core.search_field20427.cljs$core$IFn$_invoke$arity$2 = (function (name__20143__auto__,value__20144__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__20143__auto__,value__20144__auto__);
});

sablono.core.search_field20427.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field20427);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field20431 = (function sablono$core$tel_field20431(var_args){
var args20432 = [];
var len__19529__auto___20499 = arguments.length;
var i__19530__auto___20500 = (0);
while(true){
if((i__19530__auto___20500 < len__19529__auto___20499)){
args20432.push((arguments[i__19530__auto___20500]));

var G__20501 = (i__19530__auto___20500 + (1));
i__19530__auto___20500 = G__20501;
continue;
} else {
}
break;
}

var G__20434 = args20432.length;
switch (G__20434) {
case 1:
return sablono.core.tel_field20431.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field20431.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20432.length)].join('')));

}
});

sablono.core.tel_field20431.cljs$core$IFn$_invoke$arity$1 = (function (name__20143__auto__){
return sablono.core.tel_field20431.call(null,name__20143__auto__,null);
});

sablono.core.tel_field20431.cljs$core$IFn$_invoke$arity$2 = (function (name__20143__auto__,value__20144__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__20143__auto__,value__20144__auto__);
});

sablono.core.tel_field20431.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field20431);

/**
 * Creates a text input field.
 */
sablono.core.text_field20435 = (function sablono$core$text_field20435(var_args){
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
return sablono.core.text_field20435.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field20435.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20436.length)].join('')));

}
});

sablono.core.text_field20435.cljs$core$IFn$_invoke$arity$1 = (function (name__20143__auto__){
return sablono.core.text_field20435.call(null,name__20143__auto__,null);
});

sablono.core.text_field20435.cljs$core$IFn$_invoke$arity$2 = (function (name__20143__auto__,value__20144__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__20143__auto__,value__20144__auto__);
});

sablono.core.text_field20435.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field20435);

/**
 * Creates a time input field.
 */
sablono.core.time_field20439 = (function sablono$core$time_field20439(var_args){
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
return sablono.core.time_field20439.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field20439.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20440.length)].join('')));

}
});

sablono.core.time_field20439.cljs$core$IFn$_invoke$arity$1 = (function (name__20143__auto__){
return sablono.core.time_field20439.call(null,name__20143__auto__,null);
});

sablono.core.time_field20439.cljs$core$IFn$_invoke$arity$2 = (function (name__20143__auto__,value__20144__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__20143__auto__,value__20144__auto__);
});

sablono.core.time_field20439.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field20439);

/**
 * Creates a url input field.
 */
sablono.core.url_field20443 = (function sablono$core$url_field20443(var_args){
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
return sablono.core.url_field20443.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field20443.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20444.length)].join('')));

}
});

sablono.core.url_field20443.cljs$core$IFn$_invoke$arity$1 = (function (name__20143__auto__){
return sablono.core.url_field20443.call(null,name__20143__auto__,null);
});

sablono.core.url_field20443.cljs$core$IFn$_invoke$arity$2 = (function (name__20143__auto__,value__20144__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__20143__auto__,value__20144__auto__);
});

sablono.core.url_field20443.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field20443);

/**
 * Creates a week input field.
 */
sablono.core.week_field20447 = (function sablono$core$week_field20447(var_args){
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
return sablono.core.week_field20447.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field20447.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20448.length)].join('')));

}
});

sablono.core.week_field20447.cljs$core$IFn$_invoke$arity$1 = (function (name__20143__auto__){
return sablono.core.week_field20447.call(null,name__20143__auto__,null);
});

sablono.core.week_field20447.cljs$core$IFn$_invoke$arity$2 = (function (name__20143__auto__,value__20144__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__20143__auto__,value__20144__auto__);
});

sablono.core.week_field20447.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field20447);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box20519 = (function sablono$core$check_box20519(var_args){
var args20520 = [];
var len__19529__auto___20523 = arguments.length;
var i__19530__auto___20524 = (0);
while(true){
if((i__19530__auto___20524 < len__19529__auto___20523)){
args20520.push((arguments[i__19530__auto___20524]));

var G__20525 = (i__19530__auto___20524 + (1));
i__19530__auto___20524 = G__20525;
continue;
} else {
}
break;
}

var G__20522 = args20520.length;
switch (G__20522) {
case 1:
return sablono.core.check_box20519.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box20519.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box20519.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20520.length)].join('')));

}
});

sablono.core.check_box20519.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box20519.call(null,name,null);
});

sablono.core.check_box20519.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box20519.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box20519.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box20519.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box20519);
/**
 * Creates a radio button.
 */
sablono.core.radio_button20527 = (function sablono$core$radio_button20527(var_args){
var args20528 = [];
var len__19529__auto___20531 = arguments.length;
var i__19530__auto___20532 = (0);
while(true){
if((i__19530__auto___20532 < len__19529__auto___20531)){
args20528.push((arguments[i__19530__auto___20532]));

var G__20533 = (i__19530__auto___20532 + (1));
i__19530__auto___20532 = G__20533;
continue;
} else {
}
break;
}

var G__20530 = args20528.length;
switch (G__20530) {
case 1:
return sablono.core.radio_button20527.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button20527.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button20527.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20528.length)].join('')));

}
});

sablono.core.radio_button20527.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button20527.call(null,group,null);
});

sablono.core.radio_button20527.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button20527.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button20527.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button20527.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button20527);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options20535 = (function sablono$core$select_options20535(coll){
var iter__19239__auto__ = (function sablono$core$select_options20535_$_iter__20544(s__20545){
return (new cljs.core.LazySeq(null,(function (){
var s__20545__$1 = s__20545;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20545__$1);
if(temp__4657__auto__){
var s__20545__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20545__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__20545__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__20547 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__20546 = (0);
while(true){
if((i__20546 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__20546);
cljs.core.chunk_append.call(null,b__20547,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20550 = x;
var text = cljs.core.nth.call(null,vec__20550,(0),null);
var val = cljs.core.nth.call(null,vec__20550,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20550,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options20535.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__20552 = (i__20546 + (1));
i__20546 = G__20552;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20547),sablono$core$select_options20535_$_iter__20544.call(null,cljs.core.chunk_rest.call(null,s__20545__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20547),null);
}
} else {
var x = cljs.core.first.call(null,s__20545__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20551 = x;
var text = cljs.core.nth.call(null,vec__20551,(0),null);
var val = cljs.core.nth.call(null,vec__20551,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20551,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options20535.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options20535_$_iter__20544.call(null,cljs.core.rest.call(null,s__20545__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options20535);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down20553 = (function sablono$core$drop_down20553(var_args){
var args20554 = [];
var len__19529__auto___20557 = arguments.length;
var i__19530__auto___20558 = (0);
while(true){
if((i__19530__auto___20558 < len__19529__auto___20557)){
args20554.push((arguments[i__19530__auto___20558]));

var G__20559 = (i__19530__auto___20558 + (1));
i__19530__auto___20558 = G__20559;
continue;
} else {
}
break;
}

var G__20556 = args20554.length;
switch (G__20556) {
case 2:
return sablono.core.drop_down20553.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down20553.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20554.length)].join('')));

}
});

sablono.core.drop_down20553.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down20553.call(null,name,options,null);
});

sablono.core.drop_down20553.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down20553.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down20553);
/**
 * Creates a text area element.
 */
sablono.core.text_area20561 = (function sablono$core$text_area20561(var_args){
var args20562 = [];
var len__19529__auto___20565 = arguments.length;
var i__19530__auto___20566 = (0);
while(true){
if((i__19530__auto___20566 < len__19529__auto___20565)){
args20562.push((arguments[i__19530__auto___20566]));

var G__20567 = (i__19530__auto___20566 + (1));
i__19530__auto___20566 = G__20567;
continue;
} else {
}
break;
}

var G__20564 = args20562.length;
switch (G__20564) {
case 1:
return sablono.core.text_area20561.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area20561.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20562.length)].join('')));

}
});

sablono.core.text_area20561.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area20561.call(null,name,null);
});

sablono.core.text_area20561.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area20561.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area20561);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label20569 = (function sablono$core$label20569(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label20569);
/**
 * Creates a submit button.
 */
sablono.core.submit_button20570 = (function sablono$core$submit_button20570(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button20570);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button20571 = (function sablono$core$reset_button20571(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button20571);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to20572 = (function sablono$core$form_to20572(var_args){
var args__19536__auto__ = [];
var len__19529__auto___20577 = arguments.length;
var i__19530__auto___20578 = (0);
while(true){
if((i__19530__auto___20578 < len__19529__auto___20577)){
args__19536__auto__.push((arguments[i__19530__auto___20578]));

var G__20579 = (i__19530__auto___20578 + (1));
i__19530__auto___20578 = G__20579;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to20572.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.form_to20572.cljs$core$IFn$_invoke$arity$variadic = (function (p__20575,body){
var vec__20576 = p__20575;
var method = cljs.core.nth.call(null,vec__20576,(0),null);
var action = cljs.core.nth.call(null,vec__20576,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to20572.cljs$lang$maxFixedArity = (1);

sablono.core.form_to20572.cljs$lang$applyTo = (function (seq20573){
var G__20574 = cljs.core.first.call(null,seq20573);
var seq20573__$1 = cljs.core.next.call(null,seq20573);
return sablono.core.form_to20572.cljs$core$IFn$_invoke$arity$variadic(G__20574,seq20573__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to20572);

//# sourceMappingURL=core.js.map?rel=1505303969741