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
var G__25528__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__25527 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__25527,(0),null);
var body = cljs.core.nthnext.call(null,vec__25527,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__25528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25529__i = 0, G__25529__a = new Array(arguments.length -  0);
while (G__25529__i < G__25529__a.length) {G__25529__a[G__25529__i] = arguments[G__25529__i + 0]; ++G__25529__i;}
  args = new cljs.core.IndexedSeq(G__25529__a,0);
} 
return G__25528__delegate.call(this,args);};
G__25528.cljs$lang$maxFixedArity = 0;
G__25528.cljs$lang$applyTo = (function (arglist__25530){
var args = cljs.core.seq(arglist__25530);
return G__25528__delegate(args);
});
G__25528.cljs$core$IFn$_invoke$arity$variadic = G__25528__delegate;
return G__25528;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19240__auto__ = (function sablono$core$update_arglists_$_iter__25535(s__25536){
return (new cljs.core.LazySeq(null,(function (){
var s__25536__$1 = s__25536;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25536__$1);
if(temp__4657__auto__){
var s__25536__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25536__$2)){
var c__19238__auto__ = cljs.core.chunk_first.call(null,s__25536__$2);
var size__19239__auto__ = cljs.core.count.call(null,c__19238__auto__);
var b__25538 = cljs.core.chunk_buffer.call(null,size__19239__auto__);
if((function (){var i__25537 = (0);
while(true){
if((i__25537 < size__19239__auto__)){
var args = cljs.core._nth.call(null,c__19238__auto__,i__25537);
cljs.core.chunk_append.call(null,b__25538,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__25539 = (i__25537 + (1));
i__25537 = G__25539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25538),sablono$core$update_arglists_$_iter__25535.call(null,cljs.core.chunk_rest.call(null,s__25536__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25538),null);
}
} else {
var args = cljs.core.first.call(null,s__25536__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__25535.call(null,cljs.core.rest.call(null,s__25536__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19240__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__19537__auto__ = [];
var len__19530__auto___25545 = arguments.length;
var i__19531__auto___25546 = (0);
while(true){
if((i__19531__auto___25546 < len__19530__auto___25545)){
args__19537__auto__.push((arguments[i__19531__auto___25546]));

var G__25547 = (i__19531__auto___25546 + (1));
i__19531__auto___25546 = G__25547;
continue;
} else {
}
break;
}

var argseq__19538__auto__ = ((((0) < args__19537__auto__.length))?(new cljs.core.IndexedSeq(args__19537__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19538__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19240__auto__ = (function sablono$core$iter__25541(s__25542){
return (new cljs.core.LazySeq(null,(function (){
var s__25542__$1 = s__25542;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25542__$1);
if(temp__4657__auto__){
var s__25542__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25542__$2)){
var c__19238__auto__ = cljs.core.chunk_first.call(null,s__25542__$2);
var size__19239__auto__ = cljs.core.count.call(null,c__19238__auto__);
var b__25544 = cljs.core.chunk_buffer.call(null,size__19239__auto__);
if((function (){var i__25543 = (0);
while(true){
if((i__25543 < size__19239__auto__)){
var style = cljs.core._nth.call(null,c__19238__auto__,i__25543);
cljs.core.chunk_append.call(null,b__25544,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__25548 = (i__25543 + (1));
i__25543 = G__25548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25544),sablono$core$iter__25541.call(null,cljs.core.chunk_rest.call(null,s__25542__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25544),null);
}
} else {
var style = cljs.core.first.call(null,s__25542__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__25541.call(null,cljs.core.rest.call(null,s__25542__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19240__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq25540){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25540));
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
sablono.core.link_to25549 = (function sablono$core$link_to25549(var_args){
var args__19537__auto__ = [];
var len__19530__auto___25552 = arguments.length;
var i__19531__auto___25553 = (0);
while(true){
if((i__19531__auto___25553 < len__19530__auto___25552)){
args__19537__auto__.push((arguments[i__19531__auto___25553]));

var G__25554 = (i__19531__auto___25553 + (1));
i__19531__auto___25553 = G__25554;
continue;
} else {
}
break;
}

var argseq__19538__auto__ = ((((1) < args__19537__auto__.length))?(new cljs.core.IndexedSeq(args__19537__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to25549.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19538__auto__);
});

sablono.core.link_to25549.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to25549.cljs$lang$maxFixedArity = (1);

sablono.core.link_to25549.cljs$lang$applyTo = (function (seq25550){
var G__25551 = cljs.core.first.call(null,seq25550);
var seq25550__$1 = cljs.core.next.call(null,seq25550);
return sablono.core.link_to25549.cljs$core$IFn$_invoke$arity$variadic(G__25551,seq25550__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to25549);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to25555 = (function sablono$core$mail_to25555(var_args){
var args__19537__auto__ = [];
var len__19530__auto___25560 = arguments.length;
var i__19531__auto___25561 = (0);
while(true){
if((i__19531__auto___25561 < len__19530__auto___25560)){
args__19537__auto__.push((arguments[i__19531__auto___25561]));

var G__25562 = (i__19531__auto___25561 + (1));
i__19531__auto___25561 = G__25562;
continue;
} else {
}
break;
}

var argseq__19538__auto__ = ((((1) < args__19537__auto__.length))?(new cljs.core.IndexedSeq(args__19537__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to25555.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19538__auto__);
});

sablono.core.mail_to25555.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__25558){
var vec__25559 = p__25558;
var content = cljs.core.nth.call(null,vec__25559,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18460__auto__ = content;
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to25555.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to25555.cljs$lang$applyTo = (function (seq25556){
var G__25557 = cljs.core.first.call(null,seq25556);
var seq25556__$1 = cljs.core.next.call(null,seq25556);
return sablono.core.mail_to25555.cljs$core$IFn$_invoke$arity$variadic(G__25557,seq25556__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to25555);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list25563 = (function sablono$core$unordered_list25563(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19240__auto__ = (function sablono$core$unordered_list25563_$_iter__25568(s__25569){
return (new cljs.core.LazySeq(null,(function (){
var s__25569__$1 = s__25569;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25569__$1);
if(temp__4657__auto__){
var s__25569__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25569__$2)){
var c__19238__auto__ = cljs.core.chunk_first.call(null,s__25569__$2);
var size__19239__auto__ = cljs.core.count.call(null,c__19238__auto__);
var b__25571 = cljs.core.chunk_buffer.call(null,size__19239__auto__);
if((function (){var i__25570 = (0);
while(true){
if((i__25570 < size__19239__auto__)){
var x = cljs.core._nth.call(null,c__19238__auto__,i__25570);
cljs.core.chunk_append.call(null,b__25571,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25572 = (i__25570 + (1));
i__25570 = G__25572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25571),sablono$core$unordered_list25563_$_iter__25568.call(null,cljs.core.chunk_rest.call(null,s__25569__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25571),null);
}
} else {
var x = cljs.core.first.call(null,s__25569__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list25563_$_iter__25568.call(null,cljs.core.rest.call(null,s__25569__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19240__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list25563);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list25573 = (function sablono$core$ordered_list25573(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19240__auto__ = (function sablono$core$ordered_list25573_$_iter__25578(s__25579){
return (new cljs.core.LazySeq(null,(function (){
var s__25579__$1 = s__25579;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25579__$1);
if(temp__4657__auto__){
var s__25579__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25579__$2)){
var c__19238__auto__ = cljs.core.chunk_first.call(null,s__25579__$2);
var size__19239__auto__ = cljs.core.count.call(null,c__19238__auto__);
var b__25581 = cljs.core.chunk_buffer.call(null,size__19239__auto__);
if((function (){var i__25580 = (0);
while(true){
if((i__25580 < size__19239__auto__)){
var x = cljs.core._nth.call(null,c__19238__auto__,i__25580);
cljs.core.chunk_append.call(null,b__25581,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25582 = (i__25580 + (1));
i__25580 = G__25582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25581),sablono$core$ordered_list25573_$_iter__25578.call(null,cljs.core.chunk_rest.call(null,s__25579__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25581),null);
}
} else {
var x = cljs.core.first.call(null,s__25579__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list25573_$_iter__25578.call(null,cljs.core.rest.call(null,s__25579__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19240__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list25573);
/**
 * Create an image element.
 */
sablono.core.image25583 = (function sablono$core$image25583(var_args){
var args25584 = [];
var len__19530__auto___25587 = arguments.length;
var i__19531__auto___25588 = (0);
while(true){
if((i__19531__auto___25588 < len__19530__auto___25587)){
args25584.push((arguments[i__19531__auto___25588]));

var G__25589 = (i__19531__auto___25588 + (1));
i__19531__auto___25588 = G__25589;
continue;
} else {
}
break;
}

var G__25586 = args25584.length;
switch (G__25586) {
case 1:
return sablono.core.image25583.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image25583.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25584.length)].join('')));

}
});

sablono.core.image25583.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image25583.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image25583.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image25583);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__25591_SHARP_,p2__25592_SHARP_){
return [cljs.core.str(p1__25591_SHARP_),cljs.core.str("["),cljs.core.str(p2__25592_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__25593_SHARP_,p2__25594_SHARP_){
return [cljs.core.str(p1__25593_SHARP_),cljs.core.str("-"),cljs.core.str(p2__25594_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18460__auto__ = value;
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field25595 = (function sablono$core$color_field25595(var_args){
var args25596 = [];
var len__19530__auto___25663 = arguments.length;
var i__19531__auto___25664 = (0);
while(true){
if((i__19531__auto___25664 < len__19530__auto___25663)){
args25596.push((arguments[i__19531__auto___25664]));

var G__25665 = (i__19531__auto___25664 + (1));
i__19531__auto___25664 = G__25665;
continue;
} else {
}
break;
}

var G__25598 = args25596.length;
switch (G__25598) {
case 1:
return sablono.core.color_field25595.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field25595.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25596.length)].join('')));

}
});

sablono.core.color_field25595.cljs$core$IFn$_invoke$arity$1 = (function (name__21030__auto__){
return sablono.core.color_field25595.call(null,name__21030__auto__,null);
});

sablono.core.color_field25595.cljs$core$IFn$_invoke$arity$2 = (function (name__21030__auto__,value__21031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__21030__auto__,value__21031__auto__);
});

sablono.core.color_field25595.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field25595);

/**
 * Creates a date input field.
 */
sablono.core.date_field25599 = (function sablono$core$date_field25599(var_args){
var args25600 = [];
var len__19530__auto___25667 = arguments.length;
var i__19531__auto___25668 = (0);
while(true){
if((i__19531__auto___25668 < len__19530__auto___25667)){
args25600.push((arguments[i__19531__auto___25668]));

var G__25669 = (i__19531__auto___25668 + (1));
i__19531__auto___25668 = G__25669;
continue;
} else {
}
break;
}

var G__25602 = args25600.length;
switch (G__25602) {
case 1:
return sablono.core.date_field25599.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field25599.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25600.length)].join('')));

}
});

sablono.core.date_field25599.cljs$core$IFn$_invoke$arity$1 = (function (name__21030__auto__){
return sablono.core.date_field25599.call(null,name__21030__auto__,null);
});

sablono.core.date_field25599.cljs$core$IFn$_invoke$arity$2 = (function (name__21030__auto__,value__21031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__21030__auto__,value__21031__auto__);
});

sablono.core.date_field25599.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field25599);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field25603 = (function sablono$core$datetime_field25603(var_args){
var args25604 = [];
var len__19530__auto___25671 = arguments.length;
var i__19531__auto___25672 = (0);
while(true){
if((i__19531__auto___25672 < len__19530__auto___25671)){
args25604.push((arguments[i__19531__auto___25672]));

var G__25673 = (i__19531__auto___25672 + (1));
i__19531__auto___25672 = G__25673;
continue;
} else {
}
break;
}

var G__25606 = args25604.length;
switch (G__25606) {
case 1:
return sablono.core.datetime_field25603.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field25603.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25604.length)].join('')));

}
});

sablono.core.datetime_field25603.cljs$core$IFn$_invoke$arity$1 = (function (name__21030__auto__){
return sablono.core.datetime_field25603.call(null,name__21030__auto__,null);
});

sablono.core.datetime_field25603.cljs$core$IFn$_invoke$arity$2 = (function (name__21030__auto__,value__21031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__21030__auto__,value__21031__auto__);
});

sablono.core.datetime_field25603.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field25603);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field25607 = (function sablono$core$datetime_local_field25607(var_args){
var args25608 = [];
var len__19530__auto___25675 = arguments.length;
var i__19531__auto___25676 = (0);
while(true){
if((i__19531__auto___25676 < len__19530__auto___25675)){
args25608.push((arguments[i__19531__auto___25676]));

var G__25677 = (i__19531__auto___25676 + (1));
i__19531__auto___25676 = G__25677;
continue;
} else {
}
break;
}

var G__25610 = args25608.length;
switch (G__25610) {
case 1:
return sablono.core.datetime_local_field25607.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field25607.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25608.length)].join('')));

}
});

sablono.core.datetime_local_field25607.cljs$core$IFn$_invoke$arity$1 = (function (name__21030__auto__){
return sablono.core.datetime_local_field25607.call(null,name__21030__auto__,null);
});

sablono.core.datetime_local_field25607.cljs$core$IFn$_invoke$arity$2 = (function (name__21030__auto__,value__21031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__21030__auto__,value__21031__auto__);
});

sablono.core.datetime_local_field25607.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field25607);

/**
 * Creates a email input field.
 */
sablono.core.email_field25611 = (function sablono$core$email_field25611(var_args){
var args25612 = [];
var len__19530__auto___25679 = arguments.length;
var i__19531__auto___25680 = (0);
while(true){
if((i__19531__auto___25680 < len__19530__auto___25679)){
args25612.push((arguments[i__19531__auto___25680]));

var G__25681 = (i__19531__auto___25680 + (1));
i__19531__auto___25680 = G__25681;
continue;
} else {
}
break;
}

var G__25614 = args25612.length;
switch (G__25614) {
case 1:
return sablono.core.email_field25611.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field25611.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25612.length)].join('')));

}
});

sablono.core.email_field25611.cljs$core$IFn$_invoke$arity$1 = (function (name__21030__auto__){
return sablono.core.email_field25611.call(null,name__21030__auto__,null);
});

sablono.core.email_field25611.cljs$core$IFn$_invoke$arity$2 = (function (name__21030__auto__,value__21031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__21030__auto__,value__21031__auto__);
});

sablono.core.email_field25611.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field25611);

/**
 * Creates a file input field.
 */
sablono.core.file_field25615 = (function sablono$core$file_field25615(var_args){
var args25616 = [];
var len__19530__auto___25683 = arguments.length;
var i__19531__auto___25684 = (0);
while(true){
if((i__19531__auto___25684 < len__19530__auto___25683)){
args25616.push((arguments[i__19531__auto___25684]));

var G__25685 = (i__19531__auto___25684 + (1));
i__19531__auto___25684 = G__25685;
continue;
} else {
}
break;
}

var G__25618 = args25616.length;
switch (G__25618) {
case 1:
return sablono.core.file_field25615.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field25615.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25616.length)].join('')));

}
});

sablono.core.file_field25615.cljs$core$IFn$_invoke$arity$1 = (function (name__21030__auto__){
return sablono.core.file_field25615.call(null,name__21030__auto__,null);
});

sablono.core.file_field25615.cljs$core$IFn$_invoke$arity$2 = (function (name__21030__auto__,value__21031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__21030__auto__,value__21031__auto__);
});

sablono.core.file_field25615.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field25615);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field25619 = (function sablono$core$hidden_field25619(var_args){
var args25620 = [];
var len__19530__auto___25687 = arguments.length;
var i__19531__auto___25688 = (0);
while(true){
if((i__19531__auto___25688 < len__19530__auto___25687)){
args25620.push((arguments[i__19531__auto___25688]));

var G__25689 = (i__19531__auto___25688 + (1));
i__19531__auto___25688 = G__25689;
continue;
} else {
}
break;
}

var G__25622 = args25620.length;
switch (G__25622) {
case 1:
return sablono.core.hidden_field25619.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field25619.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25620.length)].join('')));

}
});

sablono.core.hidden_field25619.cljs$core$IFn$_invoke$arity$1 = (function (name__21030__auto__){
return sablono.core.hidden_field25619.call(null,name__21030__auto__,null);
});

sablono.core.hidden_field25619.cljs$core$IFn$_invoke$arity$2 = (function (name__21030__auto__,value__21031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__21030__auto__,value__21031__auto__);
});

sablono.core.hidden_field25619.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field25619);

/**
 * Creates a month input field.
 */
sablono.core.month_field25623 = (function sablono$core$month_field25623(var_args){
var args25624 = [];
var len__19530__auto___25691 = arguments.length;
var i__19531__auto___25692 = (0);
while(true){
if((i__19531__auto___25692 < len__19530__auto___25691)){
args25624.push((arguments[i__19531__auto___25692]));

var G__25693 = (i__19531__auto___25692 + (1));
i__19531__auto___25692 = G__25693;
continue;
} else {
}
break;
}

var G__25626 = args25624.length;
switch (G__25626) {
case 1:
return sablono.core.month_field25623.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field25623.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25624.length)].join('')));

}
});

sablono.core.month_field25623.cljs$core$IFn$_invoke$arity$1 = (function (name__21030__auto__){
return sablono.core.month_field25623.call(null,name__21030__auto__,null);
});

sablono.core.month_field25623.cljs$core$IFn$_invoke$arity$2 = (function (name__21030__auto__,value__21031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__21030__auto__,value__21031__auto__);
});

sablono.core.month_field25623.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field25623);

/**
 * Creates a number input field.
 */
sablono.core.number_field25627 = (function sablono$core$number_field25627(var_args){
var args25628 = [];
var len__19530__auto___25695 = arguments.length;
var i__19531__auto___25696 = (0);
while(true){
if((i__19531__auto___25696 < len__19530__auto___25695)){
args25628.push((arguments[i__19531__auto___25696]));

var G__25697 = (i__19531__auto___25696 + (1));
i__19531__auto___25696 = G__25697;
continue;
} else {
}
break;
}

var G__25630 = args25628.length;
switch (G__25630) {
case 1:
return sablono.core.number_field25627.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field25627.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25628.length)].join('')));

}
});

sablono.core.number_field25627.cljs$core$IFn$_invoke$arity$1 = (function (name__21030__auto__){
return sablono.core.number_field25627.call(null,name__21030__auto__,null);
});

sablono.core.number_field25627.cljs$core$IFn$_invoke$arity$2 = (function (name__21030__auto__,value__21031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__21030__auto__,value__21031__auto__);
});

sablono.core.number_field25627.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field25627);

/**
 * Creates a password input field.
 */
sablono.core.password_field25631 = (function sablono$core$password_field25631(var_args){
var args25632 = [];
var len__19530__auto___25699 = arguments.length;
var i__19531__auto___25700 = (0);
while(true){
if((i__19531__auto___25700 < len__19530__auto___25699)){
args25632.push((arguments[i__19531__auto___25700]));

var G__25701 = (i__19531__auto___25700 + (1));
i__19531__auto___25700 = G__25701;
continue;
} else {
}
break;
}

var G__25634 = args25632.length;
switch (G__25634) {
case 1:
return sablono.core.password_field25631.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field25631.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25632.length)].join('')));

}
});

sablono.core.password_field25631.cljs$core$IFn$_invoke$arity$1 = (function (name__21030__auto__){
return sablono.core.password_field25631.call(null,name__21030__auto__,null);
});

sablono.core.password_field25631.cljs$core$IFn$_invoke$arity$2 = (function (name__21030__auto__,value__21031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__21030__auto__,value__21031__auto__);
});

sablono.core.password_field25631.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field25631);

/**
 * Creates a range input field.
 */
sablono.core.range_field25635 = (function sablono$core$range_field25635(var_args){
var args25636 = [];
var len__19530__auto___25703 = arguments.length;
var i__19531__auto___25704 = (0);
while(true){
if((i__19531__auto___25704 < len__19530__auto___25703)){
args25636.push((arguments[i__19531__auto___25704]));

var G__25705 = (i__19531__auto___25704 + (1));
i__19531__auto___25704 = G__25705;
continue;
} else {
}
break;
}

var G__25638 = args25636.length;
switch (G__25638) {
case 1:
return sablono.core.range_field25635.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field25635.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25636.length)].join('')));

}
});

sablono.core.range_field25635.cljs$core$IFn$_invoke$arity$1 = (function (name__21030__auto__){
return sablono.core.range_field25635.call(null,name__21030__auto__,null);
});

sablono.core.range_field25635.cljs$core$IFn$_invoke$arity$2 = (function (name__21030__auto__,value__21031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__21030__auto__,value__21031__auto__);
});

sablono.core.range_field25635.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field25635);

/**
 * Creates a search input field.
 */
sablono.core.search_field25639 = (function sablono$core$search_field25639(var_args){
var args25640 = [];
var len__19530__auto___25707 = arguments.length;
var i__19531__auto___25708 = (0);
while(true){
if((i__19531__auto___25708 < len__19530__auto___25707)){
args25640.push((arguments[i__19531__auto___25708]));

var G__25709 = (i__19531__auto___25708 + (1));
i__19531__auto___25708 = G__25709;
continue;
} else {
}
break;
}

var G__25642 = args25640.length;
switch (G__25642) {
case 1:
return sablono.core.search_field25639.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field25639.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25640.length)].join('')));

}
});

sablono.core.search_field25639.cljs$core$IFn$_invoke$arity$1 = (function (name__21030__auto__){
return sablono.core.search_field25639.call(null,name__21030__auto__,null);
});

sablono.core.search_field25639.cljs$core$IFn$_invoke$arity$2 = (function (name__21030__auto__,value__21031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__21030__auto__,value__21031__auto__);
});

sablono.core.search_field25639.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field25639);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field25643 = (function sablono$core$tel_field25643(var_args){
var args25644 = [];
var len__19530__auto___25711 = arguments.length;
var i__19531__auto___25712 = (0);
while(true){
if((i__19531__auto___25712 < len__19530__auto___25711)){
args25644.push((arguments[i__19531__auto___25712]));

var G__25713 = (i__19531__auto___25712 + (1));
i__19531__auto___25712 = G__25713;
continue;
} else {
}
break;
}

var G__25646 = args25644.length;
switch (G__25646) {
case 1:
return sablono.core.tel_field25643.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field25643.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25644.length)].join('')));

}
});

sablono.core.tel_field25643.cljs$core$IFn$_invoke$arity$1 = (function (name__21030__auto__){
return sablono.core.tel_field25643.call(null,name__21030__auto__,null);
});

sablono.core.tel_field25643.cljs$core$IFn$_invoke$arity$2 = (function (name__21030__auto__,value__21031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__21030__auto__,value__21031__auto__);
});

sablono.core.tel_field25643.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field25643);

/**
 * Creates a text input field.
 */
sablono.core.text_field25647 = (function sablono$core$text_field25647(var_args){
var args25648 = [];
var len__19530__auto___25715 = arguments.length;
var i__19531__auto___25716 = (0);
while(true){
if((i__19531__auto___25716 < len__19530__auto___25715)){
args25648.push((arguments[i__19531__auto___25716]));

var G__25717 = (i__19531__auto___25716 + (1));
i__19531__auto___25716 = G__25717;
continue;
} else {
}
break;
}

var G__25650 = args25648.length;
switch (G__25650) {
case 1:
return sablono.core.text_field25647.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field25647.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25648.length)].join('')));

}
});

sablono.core.text_field25647.cljs$core$IFn$_invoke$arity$1 = (function (name__21030__auto__){
return sablono.core.text_field25647.call(null,name__21030__auto__,null);
});

sablono.core.text_field25647.cljs$core$IFn$_invoke$arity$2 = (function (name__21030__auto__,value__21031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__21030__auto__,value__21031__auto__);
});

sablono.core.text_field25647.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field25647);

/**
 * Creates a time input field.
 */
sablono.core.time_field25651 = (function sablono$core$time_field25651(var_args){
var args25652 = [];
var len__19530__auto___25719 = arguments.length;
var i__19531__auto___25720 = (0);
while(true){
if((i__19531__auto___25720 < len__19530__auto___25719)){
args25652.push((arguments[i__19531__auto___25720]));

var G__25721 = (i__19531__auto___25720 + (1));
i__19531__auto___25720 = G__25721;
continue;
} else {
}
break;
}

var G__25654 = args25652.length;
switch (G__25654) {
case 1:
return sablono.core.time_field25651.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field25651.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25652.length)].join('')));

}
});

sablono.core.time_field25651.cljs$core$IFn$_invoke$arity$1 = (function (name__21030__auto__){
return sablono.core.time_field25651.call(null,name__21030__auto__,null);
});

sablono.core.time_field25651.cljs$core$IFn$_invoke$arity$2 = (function (name__21030__auto__,value__21031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__21030__auto__,value__21031__auto__);
});

sablono.core.time_field25651.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field25651);

/**
 * Creates a url input field.
 */
sablono.core.url_field25655 = (function sablono$core$url_field25655(var_args){
var args25656 = [];
var len__19530__auto___25723 = arguments.length;
var i__19531__auto___25724 = (0);
while(true){
if((i__19531__auto___25724 < len__19530__auto___25723)){
args25656.push((arguments[i__19531__auto___25724]));

var G__25725 = (i__19531__auto___25724 + (1));
i__19531__auto___25724 = G__25725;
continue;
} else {
}
break;
}

var G__25658 = args25656.length;
switch (G__25658) {
case 1:
return sablono.core.url_field25655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field25655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25656.length)].join('')));

}
});

sablono.core.url_field25655.cljs$core$IFn$_invoke$arity$1 = (function (name__21030__auto__){
return sablono.core.url_field25655.call(null,name__21030__auto__,null);
});

sablono.core.url_field25655.cljs$core$IFn$_invoke$arity$2 = (function (name__21030__auto__,value__21031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__21030__auto__,value__21031__auto__);
});

sablono.core.url_field25655.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field25655);

/**
 * Creates a week input field.
 */
sablono.core.week_field25659 = (function sablono$core$week_field25659(var_args){
var args25660 = [];
var len__19530__auto___25727 = arguments.length;
var i__19531__auto___25728 = (0);
while(true){
if((i__19531__auto___25728 < len__19530__auto___25727)){
args25660.push((arguments[i__19531__auto___25728]));

var G__25729 = (i__19531__auto___25728 + (1));
i__19531__auto___25728 = G__25729;
continue;
} else {
}
break;
}

var G__25662 = args25660.length;
switch (G__25662) {
case 1:
return sablono.core.week_field25659.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field25659.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25660.length)].join('')));

}
});

sablono.core.week_field25659.cljs$core$IFn$_invoke$arity$1 = (function (name__21030__auto__){
return sablono.core.week_field25659.call(null,name__21030__auto__,null);
});

sablono.core.week_field25659.cljs$core$IFn$_invoke$arity$2 = (function (name__21030__auto__,value__21031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__21030__auto__,value__21031__auto__);
});

sablono.core.week_field25659.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field25659);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box25731 = (function sablono$core$check_box25731(var_args){
var args25732 = [];
var len__19530__auto___25735 = arguments.length;
var i__19531__auto___25736 = (0);
while(true){
if((i__19531__auto___25736 < len__19530__auto___25735)){
args25732.push((arguments[i__19531__auto___25736]));

var G__25737 = (i__19531__auto___25736 + (1));
i__19531__auto___25736 = G__25737;
continue;
} else {
}
break;
}

var G__25734 = args25732.length;
switch (G__25734) {
case 1:
return sablono.core.check_box25731.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box25731.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box25731.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25732.length)].join('')));

}
});

sablono.core.check_box25731.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box25731.call(null,name,null);
});

sablono.core.check_box25731.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box25731.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box25731.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18460__auto__ = value;
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box25731.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box25731);
/**
 * Creates a radio button.
 */
sablono.core.radio_button25739 = (function sablono$core$radio_button25739(var_args){
var args25740 = [];
var len__19530__auto___25743 = arguments.length;
var i__19531__auto___25744 = (0);
while(true){
if((i__19531__auto___25744 < len__19530__auto___25743)){
args25740.push((arguments[i__19531__auto___25744]));

var G__25745 = (i__19531__auto___25744 + (1));
i__19531__auto___25744 = G__25745;
continue;
} else {
}
break;
}

var G__25742 = args25740.length;
switch (G__25742) {
case 1:
return sablono.core.radio_button25739.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button25739.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button25739.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25740.length)].join('')));

}
});

sablono.core.radio_button25739.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button25739.call(null,group,null);
});

sablono.core.radio_button25739.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button25739.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button25739.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18460__auto__ = value;
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button25739.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button25739);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options25747 = (function sablono$core$select_options25747(coll){
var iter__19240__auto__ = (function sablono$core$select_options25747_$_iter__25756(s__25757){
return (new cljs.core.LazySeq(null,(function (){
var s__25757__$1 = s__25757;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25757__$1);
if(temp__4657__auto__){
var s__25757__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25757__$2)){
var c__19238__auto__ = cljs.core.chunk_first.call(null,s__25757__$2);
var size__19239__auto__ = cljs.core.count.call(null,c__19238__auto__);
var b__25759 = cljs.core.chunk_buffer.call(null,size__19239__auto__);
if((function (){var i__25758 = (0);
while(true){
if((i__25758 < size__19239__auto__)){
var x = cljs.core._nth.call(null,c__19238__auto__,i__25758);
cljs.core.chunk_append.call(null,b__25759,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25762 = x;
var text = cljs.core.nth.call(null,vec__25762,(0),null);
var val = cljs.core.nth.call(null,vec__25762,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25762,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options25747.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__25764 = (i__25758 + (1));
i__25758 = G__25764;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25759),sablono$core$select_options25747_$_iter__25756.call(null,cljs.core.chunk_rest.call(null,s__25757__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25759),null);
}
} else {
var x = cljs.core.first.call(null,s__25757__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25763 = x;
var text = cljs.core.nth.call(null,vec__25763,(0),null);
var val = cljs.core.nth.call(null,vec__25763,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25763,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options25747.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options25747_$_iter__25756.call(null,cljs.core.rest.call(null,s__25757__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19240__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options25747);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down25765 = (function sablono$core$drop_down25765(var_args){
var args25766 = [];
var len__19530__auto___25769 = arguments.length;
var i__19531__auto___25770 = (0);
while(true){
if((i__19531__auto___25770 < len__19530__auto___25769)){
args25766.push((arguments[i__19531__auto___25770]));

var G__25771 = (i__19531__auto___25770 + (1));
i__19531__auto___25770 = G__25771;
continue;
} else {
}
break;
}

var G__25768 = args25766.length;
switch (G__25768) {
case 2:
return sablono.core.drop_down25765.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down25765.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25766.length)].join('')));

}
});

sablono.core.drop_down25765.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down25765.call(null,name,options,null);
});

sablono.core.drop_down25765.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down25765.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down25765);
/**
 * Creates a text area element.
 */
sablono.core.text_area25773 = (function sablono$core$text_area25773(var_args){
var args25774 = [];
var len__19530__auto___25777 = arguments.length;
var i__19531__auto___25778 = (0);
while(true){
if((i__19531__auto___25778 < len__19530__auto___25777)){
args25774.push((arguments[i__19531__auto___25778]));

var G__25779 = (i__19531__auto___25778 + (1));
i__19531__auto___25778 = G__25779;
continue;
} else {
}
break;
}

var G__25776 = args25774.length;
switch (G__25776) {
case 1:
return sablono.core.text_area25773.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area25773.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25774.length)].join('')));

}
});

sablono.core.text_area25773.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area25773.call(null,name,null);
});

sablono.core.text_area25773.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18460__auto__ = value;
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area25773.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area25773);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label25781 = (function sablono$core$label25781(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label25781);
/**
 * Creates a submit button.
 */
sablono.core.submit_button25782 = (function sablono$core$submit_button25782(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button25782);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button25783 = (function sablono$core$reset_button25783(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button25783);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to25784 = (function sablono$core$form_to25784(var_args){
var args__19537__auto__ = [];
var len__19530__auto___25789 = arguments.length;
var i__19531__auto___25790 = (0);
while(true){
if((i__19531__auto___25790 < len__19530__auto___25789)){
args__19537__auto__.push((arguments[i__19531__auto___25790]));

var G__25791 = (i__19531__auto___25790 + (1));
i__19531__auto___25790 = G__25791;
continue;
} else {
}
break;
}

var argseq__19538__auto__ = ((((1) < args__19537__auto__.length))?(new cljs.core.IndexedSeq(args__19537__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to25784.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19538__auto__);
});

sablono.core.form_to25784.cljs$core$IFn$_invoke$arity$variadic = (function (p__25787,body){
var vec__25788 = p__25787;
var method = cljs.core.nth.call(null,vec__25788,(0),null);
var action = cljs.core.nth.call(null,vec__25788,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to25784.cljs$lang$maxFixedArity = (1);

sablono.core.form_to25784.cljs$lang$applyTo = (function (seq25785){
var G__25786 = cljs.core.first.call(null,seq25785);
var seq25785__$1 = cljs.core.next.call(null,seq25785);
return sablono.core.form_to25784.cljs$core$IFn$_invoke$arity$variadic(G__25786,seq25785__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to25784);

//# sourceMappingURL=core.js.map?rel=1470998056525