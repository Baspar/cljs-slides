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
var G__24601__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__24600 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__24600,(0),null);
var body = cljs.core.nthnext.call(null,vec__24600,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__24601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24602__i = 0, G__24602__a = new Array(arguments.length -  0);
while (G__24602__i < G__24602__a.length) {G__24602__a[G__24602__i] = arguments[G__24602__i + 0]; ++G__24602__i;}
  args = new cljs.core.IndexedSeq(G__24602__a,0);
} 
return G__24601__delegate.call(this,args);};
G__24601.cljs$lang$maxFixedArity = 0;
G__24601.cljs$lang$applyTo = (function (arglist__24603){
var args = cljs.core.seq(arglist__24603);
return G__24601__delegate(args);
});
G__24601.cljs$core$IFn$_invoke$arity$variadic = G__24601__delegate;
return G__24601;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19239__auto__ = (function sablono$core$update_arglists_$_iter__24608(s__24609){
return (new cljs.core.LazySeq(null,(function (){
var s__24609__$1 = s__24609;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24609__$1);
if(temp__4657__auto__){
var s__24609__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24609__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__24609__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__24611 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__24610 = (0);
while(true){
if((i__24610 < size__19238__auto__)){
var args = cljs.core._nth.call(null,c__19237__auto__,i__24610);
cljs.core.chunk_append.call(null,b__24611,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__24612 = (i__24610 + (1));
i__24610 = G__24612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24611),sablono$core$update_arglists_$_iter__24608.call(null,cljs.core.chunk_rest.call(null,s__24609__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24611),null);
}
} else {
var args = cljs.core.first.call(null,s__24609__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__24608.call(null,cljs.core.rest.call(null,s__24609__$2)));
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
var len__19529__auto___24618 = arguments.length;
var i__19530__auto___24619 = (0);
while(true){
if((i__19530__auto___24619 < len__19529__auto___24618)){
args__19536__auto__.push((arguments[i__19530__auto___24619]));

var G__24620 = (i__19530__auto___24619 + (1));
i__19530__auto___24619 = G__24620;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19239__auto__ = (function sablono$core$iter__24614(s__24615){
return (new cljs.core.LazySeq(null,(function (){
var s__24615__$1 = s__24615;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24615__$1);
if(temp__4657__auto__){
var s__24615__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24615__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__24615__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__24617 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__24616 = (0);
while(true){
if((i__24616 < size__19238__auto__)){
var style = cljs.core._nth.call(null,c__19237__auto__,i__24616);
cljs.core.chunk_append.call(null,b__24617,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__24621 = (i__24616 + (1));
i__24616 = G__24621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24617),sablono$core$iter__24614.call(null,cljs.core.chunk_rest.call(null,s__24615__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24617),null);
}
} else {
var style = cljs.core.first.call(null,s__24615__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__24614.call(null,cljs.core.rest.call(null,s__24615__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq24613){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24613));
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
sablono.core.link_to24622 = (function sablono$core$link_to24622(var_args){
var args__19536__auto__ = [];
var len__19529__auto___24625 = arguments.length;
var i__19530__auto___24626 = (0);
while(true){
if((i__19530__auto___24626 < len__19529__auto___24625)){
args__19536__auto__.push((arguments[i__19530__auto___24626]));

var G__24627 = (i__19530__auto___24626 + (1));
i__19530__auto___24626 = G__24627;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to24622.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.link_to24622.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to24622.cljs$lang$maxFixedArity = (1);

sablono.core.link_to24622.cljs$lang$applyTo = (function (seq24623){
var G__24624 = cljs.core.first.call(null,seq24623);
var seq24623__$1 = cljs.core.next.call(null,seq24623);
return sablono.core.link_to24622.cljs$core$IFn$_invoke$arity$variadic(G__24624,seq24623__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to24622);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to24628 = (function sablono$core$mail_to24628(var_args){
var args__19536__auto__ = [];
var len__19529__auto___24633 = arguments.length;
var i__19530__auto___24634 = (0);
while(true){
if((i__19530__auto___24634 < len__19529__auto___24633)){
args__19536__auto__.push((arguments[i__19530__auto___24634]));

var G__24635 = (i__19530__auto___24634 + (1));
i__19530__auto___24634 = G__24635;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to24628.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.mail_to24628.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__24631){
var vec__24632 = p__24631;
var content = cljs.core.nth.call(null,vec__24632,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18459__auto__ = content;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to24628.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to24628.cljs$lang$applyTo = (function (seq24629){
var G__24630 = cljs.core.first.call(null,seq24629);
var seq24629__$1 = cljs.core.next.call(null,seq24629);
return sablono.core.mail_to24628.cljs$core$IFn$_invoke$arity$variadic(G__24630,seq24629__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to24628);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list24636 = (function sablono$core$unordered_list24636(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19239__auto__ = (function sablono$core$unordered_list24636_$_iter__24641(s__24642){
return (new cljs.core.LazySeq(null,(function (){
var s__24642__$1 = s__24642;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24642__$1);
if(temp__4657__auto__){
var s__24642__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24642__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__24642__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__24644 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__24643 = (0);
while(true){
if((i__24643 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__24643);
cljs.core.chunk_append.call(null,b__24644,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24645 = (i__24643 + (1));
i__24643 = G__24645;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24644),sablono$core$unordered_list24636_$_iter__24641.call(null,cljs.core.chunk_rest.call(null,s__24642__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24644),null);
}
} else {
var x = cljs.core.first.call(null,s__24642__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list24636_$_iter__24641.call(null,cljs.core.rest.call(null,s__24642__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list24636);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list24646 = (function sablono$core$ordered_list24646(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19239__auto__ = (function sablono$core$ordered_list24646_$_iter__24651(s__24652){
return (new cljs.core.LazySeq(null,(function (){
var s__24652__$1 = s__24652;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24652__$1);
if(temp__4657__auto__){
var s__24652__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24652__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__24652__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__24654 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__24653 = (0);
while(true){
if((i__24653 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__24653);
cljs.core.chunk_append.call(null,b__24654,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24655 = (i__24653 + (1));
i__24653 = G__24655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24654),sablono$core$ordered_list24646_$_iter__24651.call(null,cljs.core.chunk_rest.call(null,s__24652__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24654),null);
}
} else {
var x = cljs.core.first.call(null,s__24652__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list24646_$_iter__24651.call(null,cljs.core.rest.call(null,s__24652__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list24646);
/**
 * Create an image element.
 */
sablono.core.image24656 = (function sablono$core$image24656(var_args){
var args24657 = [];
var len__19529__auto___24660 = arguments.length;
var i__19530__auto___24661 = (0);
while(true){
if((i__19530__auto___24661 < len__19529__auto___24660)){
args24657.push((arguments[i__19530__auto___24661]));

var G__24662 = (i__19530__auto___24661 + (1));
i__19530__auto___24661 = G__24662;
continue;
} else {
}
break;
}

var G__24659 = args24657.length;
switch (G__24659) {
case 1:
return sablono.core.image24656.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image24656.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24657.length)].join('')));

}
});

sablono.core.image24656.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image24656.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image24656.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image24656);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__24664_SHARP_,p2__24665_SHARP_){
return [cljs.core.str(p1__24664_SHARP_),cljs.core.str("["),cljs.core.str(p2__24665_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__24666_SHARP_,p2__24667_SHARP_){
return [cljs.core.str(p1__24666_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24667_SHARP_)].join('');
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
sablono.core.color_field24668 = (function sablono$core$color_field24668(var_args){
var args24669 = [];
var len__19529__auto___24736 = arguments.length;
var i__19530__auto___24737 = (0);
while(true){
if((i__19530__auto___24737 < len__19529__auto___24736)){
args24669.push((arguments[i__19530__auto___24737]));

var G__24738 = (i__19530__auto___24737 + (1));
i__19530__auto___24737 = G__24738;
continue;
} else {
}
break;
}

var G__24671 = args24669.length;
switch (G__24671) {
case 1:
return sablono.core.color_field24668.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field24668.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24669.length)].join('')));

}
});

sablono.core.color_field24668.cljs$core$IFn$_invoke$arity$1 = (function (name__21077__auto__){
return sablono.core.color_field24668.call(null,name__21077__auto__,null);
});

sablono.core.color_field24668.cljs$core$IFn$_invoke$arity$2 = (function (name__21077__auto__,value__21078__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__21077__auto__,value__21078__auto__);
});

sablono.core.color_field24668.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field24668);

/**
 * Creates a date input field.
 */
sablono.core.date_field24672 = (function sablono$core$date_field24672(var_args){
var args24673 = [];
var len__19529__auto___24740 = arguments.length;
var i__19530__auto___24741 = (0);
while(true){
if((i__19530__auto___24741 < len__19529__auto___24740)){
args24673.push((arguments[i__19530__auto___24741]));

var G__24742 = (i__19530__auto___24741 + (1));
i__19530__auto___24741 = G__24742;
continue;
} else {
}
break;
}

var G__24675 = args24673.length;
switch (G__24675) {
case 1:
return sablono.core.date_field24672.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field24672.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24673.length)].join('')));

}
});

sablono.core.date_field24672.cljs$core$IFn$_invoke$arity$1 = (function (name__21077__auto__){
return sablono.core.date_field24672.call(null,name__21077__auto__,null);
});

sablono.core.date_field24672.cljs$core$IFn$_invoke$arity$2 = (function (name__21077__auto__,value__21078__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__21077__auto__,value__21078__auto__);
});

sablono.core.date_field24672.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field24672);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field24676 = (function sablono$core$datetime_field24676(var_args){
var args24677 = [];
var len__19529__auto___24744 = arguments.length;
var i__19530__auto___24745 = (0);
while(true){
if((i__19530__auto___24745 < len__19529__auto___24744)){
args24677.push((arguments[i__19530__auto___24745]));

var G__24746 = (i__19530__auto___24745 + (1));
i__19530__auto___24745 = G__24746;
continue;
} else {
}
break;
}

var G__24679 = args24677.length;
switch (G__24679) {
case 1:
return sablono.core.datetime_field24676.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field24676.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24677.length)].join('')));

}
});

sablono.core.datetime_field24676.cljs$core$IFn$_invoke$arity$1 = (function (name__21077__auto__){
return sablono.core.datetime_field24676.call(null,name__21077__auto__,null);
});

sablono.core.datetime_field24676.cljs$core$IFn$_invoke$arity$2 = (function (name__21077__auto__,value__21078__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__21077__auto__,value__21078__auto__);
});

sablono.core.datetime_field24676.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field24676);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field24680 = (function sablono$core$datetime_local_field24680(var_args){
var args24681 = [];
var len__19529__auto___24748 = arguments.length;
var i__19530__auto___24749 = (0);
while(true){
if((i__19530__auto___24749 < len__19529__auto___24748)){
args24681.push((arguments[i__19530__auto___24749]));

var G__24750 = (i__19530__auto___24749 + (1));
i__19530__auto___24749 = G__24750;
continue;
} else {
}
break;
}

var G__24683 = args24681.length;
switch (G__24683) {
case 1:
return sablono.core.datetime_local_field24680.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field24680.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24681.length)].join('')));

}
});

sablono.core.datetime_local_field24680.cljs$core$IFn$_invoke$arity$1 = (function (name__21077__auto__){
return sablono.core.datetime_local_field24680.call(null,name__21077__auto__,null);
});

sablono.core.datetime_local_field24680.cljs$core$IFn$_invoke$arity$2 = (function (name__21077__auto__,value__21078__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__21077__auto__,value__21078__auto__);
});

sablono.core.datetime_local_field24680.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field24680);

/**
 * Creates a email input field.
 */
sablono.core.email_field24684 = (function sablono$core$email_field24684(var_args){
var args24685 = [];
var len__19529__auto___24752 = arguments.length;
var i__19530__auto___24753 = (0);
while(true){
if((i__19530__auto___24753 < len__19529__auto___24752)){
args24685.push((arguments[i__19530__auto___24753]));

var G__24754 = (i__19530__auto___24753 + (1));
i__19530__auto___24753 = G__24754;
continue;
} else {
}
break;
}

var G__24687 = args24685.length;
switch (G__24687) {
case 1:
return sablono.core.email_field24684.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field24684.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24685.length)].join('')));

}
});

sablono.core.email_field24684.cljs$core$IFn$_invoke$arity$1 = (function (name__21077__auto__){
return sablono.core.email_field24684.call(null,name__21077__auto__,null);
});

sablono.core.email_field24684.cljs$core$IFn$_invoke$arity$2 = (function (name__21077__auto__,value__21078__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__21077__auto__,value__21078__auto__);
});

sablono.core.email_field24684.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field24684);

/**
 * Creates a file input field.
 */
sablono.core.file_field24688 = (function sablono$core$file_field24688(var_args){
var args24689 = [];
var len__19529__auto___24756 = arguments.length;
var i__19530__auto___24757 = (0);
while(true){
if((i__19530__auto___24757 < len__19529__auto___24756)){
args24689.push((arguments[i__19530__auto___24757]));

var G__24758 = (i__19530__auto___24757 + (1));
i__19530__auto___24757 = G__24758;
continue;
} else {
}
break;
}

var G__24691 = args24689.length;
switch (G__24691) {
case 1:
return sablono.core.file_field24688.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field24688.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24689.length)].join('')));

}
});

sablono.core.file_field24688.cljs$core$IFn$_invoke$arity$1 = (function (name__21077__auto__){
return sablono.core.file_field24688.call(null,name__21077__auto__,null);
});

sablono.core.file_field24688.cljs$core$IFn$_invoke$arity$2 = (function (name__21077__auto__,value__21078__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__21077__auto__,value__21078__auto__);
});

sablono.core.file_field24688.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field24688);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field24692 = (function sablono$core$hidden_field24692(var_args){
var args24693 = [];
var len__19529__auto___24760 = arguments.length;
var i__19530__auto___24761 = (0);
while(true){
if((i__19530__auto___24761 < len__19529__auto___24760)){
args24693.push((arguments[i__19530__auto___24761]));

var G__24762 = (i__19530__auto___24761 + (1));
i__19530__auto___24761 = G__24762;
continue;
} else {
}
break;
}

var G__24695 = args24693.length;
switch (G__24695) {
case 1:
return sablono.core.hidden_field24692.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field24692.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24693.length)].join('')));

}
});

sablono.core.hidden_field24692.cljs$core$IFn$_invoke$arity$1 = (function (name__21077__auto__){
return sablono.core.hidden_field24692.call(null,name__21077__auto__,null);
});

sablono.core.hidden_field24692.cljs$core$IFn$_invoke$arity$2 = (function (name__21077__auto__,value__21078__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__21077__auto__,value__21078__auto__);
});

sablono.core.hidden_field24692.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field24692);

/**
 * Creates a month input field.
 */
sablono.core.month_field24696 = (function sablono$core$month_field24696(var_args){
var args24697 = [];
var len__19529__auto___24764 = arguments.length;
var i__19530__auto___24765 = (0);
while(true){
if((i__19530__auto___24765 < len__19529__auto___24764)){
args24697.push((arguments[i__19530__auto___24765]));

var G__24766 = (i__19530__auto___24765 + (1));
i__19530__auto___24765 = G__24766;
continue;
} else {
}
break;
}

var G__24699 = args24697.length;
switch (G__24699) {
case 1:
return sablono.core.month_field24696.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field24696.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24697.length)].join('')));

}
});

sablono.core.month_field24696.cljs$core$IFn$_invoke$arity$1 = (function (name__21077__auto__){
return sablono.core.month_field24696.call(null,name__21077__auto__,null);
});

sablono.core.month_field24696.cljs$core$IFn$_invoke$arity$2 = (function (name__21077__auto__,value__21078__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__21077__auto__,value__21078__auto__);
});

sablono.core.month_field24696.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field24696);

/**
 * Creates a number input field.
 */
sablono.core.number_field24700 = (function sablono$core$number_field24700(var_args){
var args24701 = [];
var len__19529__auto___24768 = arguments.length;
var i__19530__auto___24769 = (0);
while(true){
if((i__19530__auto___24769 < len__19529__auto___24768)){
args24701.push((arguments[i__19530__auto___24769]));

var G__24770 = (i__19530__auto___24769 + (1));
i__19530__auto___24769 = G__24770;
continue;
} else {
}
break;
}

var G__24703 = args24701.length;
switch (G__24703) {
case 1:
return sablono.core.number_field24700.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field24700.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24701.length)].join('')));

}
});

sablono.core.number_field24700.cljs$core$IFn$_invoke$arity$1 = (function (name__21077__auto__){
return sablono.core.number_field24700.call(null,name__21077__auto__,null);
});

sablono.core.number_field24700.cljs$core$IFn$_invoke$arity$2 = (function (name__21077__auto__,value__21078__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__21077__auto__,value__21078__auto__);
});

sablono.core.number_field24700.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field24700);

/**
 * Creates a password input field.
 */
sablono.core.password_field24704 = (function sablono$core$password_field24704(var_args){
var args24705 = [];
var len__19529__auto___24772 = arguments.length;
var i__19530__auto___24773 = (0);
while(true){
if((i__19530__auto___24773 < len__19529__auto___24772)){
args24705.push((arguments[i__19530__auto___24773]));

var G__24774 = (i__19530__auto___24773 + (1));
i__19530__auto___24773 = G__24774;
continue;
} else {
}
break;
}

var G__24707 = args24705.length;
switch (G__24707) {
case 1:
return sablono.core.password_field24704.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field24704.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24705.length)].join('')));

}
});

sablono.core.password_field24704.cljs$core$IFn$_invoke$arity$1 = (function (name__21077__auto__){
return sablono.core.password_field24704.call(null,name__21077__auto__,null);
});

sablono.core.password_field24704.cljs$core$IFn$_invoke$arity$2 = (function (name__21077__auto__,value__21078__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__21077__auto__,value__21078__auto__);
});

sablono.core.password_field24704.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field24704);

/**
 * Creates a range input field.
 */
sablono.core.range_field24708 = (function sablono$core$range_field24708(var_args){
var args24709 = [];
var len__19529__auto___24776 = arguments.length;
var i__19530__auto___24777 = (0);
while(true){
if((i__19530__auto___24777 < len__19529__auto___24776)){
args24709.push((arguments[i__19530__auto___24777]));

var G__24778 = (i__19530__auto___24777 + (1));
i__19530__auto___24777 = G__24778;
continue;
} else {
}
break;
}

var G__24711 = args24709.length;
switch (G__24711) {
case 1:
return sablono.core.range_field24708.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field24708.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24709.length)].join('')));

}
});

sablono.core.range_field24708.cljs$core$IFn$_invoke$arity$1 = (function (name__21077__auto__){
return sablono.core.range_field24708.call(null,name__21077__auto__,null);
});

sablono.core.range_field24708.cljs$core$IFn$_invoke$arity$2 = (function (name__21077__auto__,value__21078__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__21077__auto__,value__21078__auto__);
});

sablono.core.range_field24708.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field24708);

/**
 * Creates a search input field.
 */
sablono.core.search_field24712 = (function sablono$core$search_field24712(var_args){
var args24713 = [];
var len__19529__auto___24780 = arguments.length;
var i__19530__auto___24781 = (0);
while(true){
if((i__19530__auto___24781 < len__19529__auto___24780)){
args24713.push((arguments[i__19530__auto___24781]));

var G__24782 = (i__19530__auto___24781 + (1));
i__19530__auto___24781 = G__24782;
continue;
} else {
}
break;
}

var G__24715 = args24713.length;
switch (G__24715) {
case 1:
return sablono.core.search_field24712.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field24712.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24713.length)].join('')));

}
});

sablono.core.search_field24712.cljs$core$IFn$_invoke$arity$1 = (function (name__21077__auto__){
return sablono.core.search_field24712.call(null,name__21077__auto__,null);
});

sablono.core.search_field24712.cljs$core$IFn$_invoke$arity$2 = (function (name__21077__auto__,value__21078__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__21077__auto__,value__21078__auto__);
});

sablono.core.search_field24712.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field24712);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field24716 = (function sablono$core$tel_field24716(var_args){
var args24717 = [];
var len__19529__auto___24784 = arguments.length;
var i__19530__auto___24785 = (0);
while(true){
if((i__19530__auto___24785 < len__19529__auto___24784)){
args24717.push((arguments[i__19530__auto___24785]));

var G__24786 = (i__19530__auto___24785 + (1));
i__19530__auto___24785 = G__24786;
continue;
} else {
}
break;
}

var G__24719 = args24717.length;
switch (G__24719) {
case 1:
return sablono.core.tel_field24716.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field24716.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24717.length)].join('')));

}
});

sablono.core.tel_field24716.cljs$core$IFn$_invoke$arity$1 = (function (name__21077__auto__){
return sablono.core.tel_field24716.call(null,name__21077__auto__,null);
});

sablono.core.tel_field24716.cljs$core$IFn$_invoke$arity$2 = (function (name__21077__auto__,value__21078__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__21077__auto__,value__21078__auto__);
});

sablono.core.tel_field24716.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field24716);

/**
 * Creates a text input field.
 */
sablono.core.text_field24720 = (function sablono$core$text_field24720(var_args){
var args24721 = [];
var len__19529__auto___24788 = arguments.length;
var i__19530__auto___24789 = (0);
while(true){
if((i__19530__auto___24789 < len__19529__auto___24788)){
args24721.push((arguments[i__19530__auto___24789]));

var G__24790 = (i__19530__auto___24789 + (1));
i__19530__auto___24789 = G__24790;
continue;
} else {
}
break;
}

var G__24723 = args24721.length;
switch (G__24723) {
case 1:
return sablono.core.text_field24720.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field24720.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24721.length)].join('')));

}
});

sablono.core.text_field24720.cljs$core$IFn$_invoke$arity$1 = (function (name__21077__auto__){
return sablono.core.text_field24720.call(null,name__21077__auto__,null);
});

sablono.core.text_field24720.cljs$core$IFn$_invoke$arity$2 = (function (name__21077__auto__,value__21078__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__21077__auto__,value__21078__auto__);
});

sablono.core.text_field24720.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field24720);

/**
 * Creates a time input field.
 */
sablono.core.time_field24724 = (function sablono$core$time_field24724(var_args){
var args24725 = [];
var len__19529__auto___24792 = arguments.length;
var i__19530__auto___24793 = (0);
while(true){
if((i__19530__auto___24793 < len__19529__auto___24792)){
args24725.push((arguments[i__19530__auto___24793]));

var G__24794 = (i__19530__auto___24793 + (1));
i__19530__auto___24793 = G__24794;
continue;
} else {
}
break;
}

var G__24727 = args24725.length;
switch (G__24727) {
case 1:
return sablono.core.time_field24724.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field24724.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24725.length)].join('')));

}
});

sablono.core.time_field24724.cljs$core$IFn$_invoke$arity$1 = (function (name__21077__auto__){
return sablono.core.time_field24724.call(null,name__21077__auto__,null);
});

sablono.core.time_field24724.cljs$core$IFn$_invoke$arity$2 = (function (name__21077__auto__,value__21078__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__21077__auto__,value__21078__auto__);
});

sablono.core.time_field24724.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field24724);

/**
 * Creates a url input field.
 */
sablono.core.url_field24728 = (function sablono$core$url_field24728(var_args){
var args24729 = [];
var len__19529__auto___24796 = arguments.length;
var i__19530__auto___24797 = (0);
while(true){
if((i__19530__auto___24797 < len__19529__auto___24796)){
args24729.push((arguments[i__19530__auto___24797]));

var G__24798 = (i__19530__auto___24797 + (1));
i__19530__auto___24797 = G__24798;
continue;
} else {
}
break;
}

var G__24731 = args24729.length;
switch (G__24731) {
case 1:
return sablono.core.url_field24728.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field24728.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24729.length)].join('')));

}
});

sablono.core.url_field24728.cljs$core$IFn$_invoke$arity$1 = (function (name__21077__auto__){
return sablono.core.url_field24728.call(null,name__21077__auto__,null);
});

sablono.core.url_field24728.cljs$core$IFn$_invoke$arity$2 = (function (name__21077__auto__,value__21078__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__21077__auto__,value__21078__auto__);
});

sablono.core.url_field24728.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field24728);

/**
 * Creates a week input field.
 */
sablono.core.week_field24732 = (function sablono$core$week_field24732(var_args){
var args24733 = [];
var len__19529__auto___24800 = arguments.length;
var i__19530__auto___24801 = (0);
while(true){
if((i__19530__auto___24801 < len__19529__auto___24800)){
args24733.push((arguments[i__19530__auto___24801]));

var G__24802 = (i__19530__auto___24801 + (1));
i__19530__auto___24801 = G__24802;
continue;
} else {
}
break;
}

var G__24735 = args24733.length;
switch (G__24735) {
case 1:
return sablono.core.week_field24732.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field24732.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24733.length)].join('')));

}
});

sablono.core.week_field24732.cljs$core$IFn$_invoke$arity$1 = (function (name__21077__auto__){
return sablono.core.week_field24732.call(null,name__21077__auto__,null);
});

sablono.core.week_field24732.cljs$core$IFn$_invoke$arity$2 = (function (name__21077__auto__,value__21078__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__21077__auto__,value__21078__auto__);
});

sablono.core.week_field24732.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field24732);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box24804 = (function sablono$core$check_box24804(var_args){
var args24805 = [];
var len__19529__auto___24808 = arguments.length;
var i__19530__auto___24809 = (0);
while(true){
if((i__19530__auto___24809 < len__19529__auto___24808)){
args24805.push((arguments[i__19530__auto___24809]));

var G__24810 = (i__19530__auto___24809 + (1));
i__19530__auto___24809 = G__24810;
continue;
} else {
}
break;
}

var G__24807 = args24805.length;
switch (G__24807) {
case 1:
return sablono.core.check_box24804.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box24804.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box24804.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24805.length)].join('')));

}
});

sablono.core.check_box24804.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box24804.call(null,name,null);
});

sablono.core.check_box24804.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box24804.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box24804.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box24804.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box24804);
/**
 * Creates a radio button.
 */
sablono.core.radio_button24812 = (function sablono$core$radio_button24812(var_args){
var args24813 = [];
var len__19529__auto___24816 = arguments.length;
var i__19530__auto___24817 = (0);
while(true){
if((i__19530__auto___24817 < len__19529__auto___24816)){
args24813.push((arguments[i__19530__auto___24817]));

var G__24818 = (i__19530__auto___24817 + (1));
i__19530__auto___24817 = G__24818;
continue;
} else {
}
break;
}

var G__24815 = args24813.length;
switch (G__24815) {
case 1:
return sablono.core.radio_button24812.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button24812.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button24812.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24813.length)].join('')));

}
});

sablono.core.radio_button24812.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button24812.call(null,group,null);
});

sablono.core.radio_button24812.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button24812.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button24812.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button24812.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button24812);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options24820 = (function sablono$core$select_options24820(coll){
var iter__19239__auto__ = (function sablono$core$select_options24820_$_iter__24829(s__24830){
return (new cljs.core.LazySeq(null,(function (){
var s__24830__$1 = s__24830;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24830__$1);
if(temp__4657__auto__){
var s__24830__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24830__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__24830__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__24832 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__24831 = (0);
while(true){
if((i__24831 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__24831);
cljs.core.chunk_append.call(null,b__24832,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24835 = x;
var text = cljs.core.nth.call(null,vec__24835,(0),null);
var val = cljs.core.nth.call(null,vec__24835,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24835,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options24820.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__24837 = (i__24831 + (1));
i__24831 = G__24837;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24832),sablono$core$select_options24820_$_iter__24829.call(null,cljs.core.chunk_rest.call(null,s__24830__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24832),null);
}
} else {
var x = cljs.core.first.call(null,s__24830__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24836 = x;
var text = cljs.core.nth.call(null,vec__24836,(0),null);
var val = cljs.core.nth.call(null,vec__24836,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24836,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options24820.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options24820_$_iter__24829.call(null,cljs.core.rest.call(null,s__24830__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options24820);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down24838 = (function sablono$core$drop_down24838(var_args){
var args24839 = [];
var len__19529__auto___24842 = arguments.length;
var i__19530__auto___24843 = (0);
while(true){
if((i__19530__auto___24843 < len__19529__auto___24842)){
args24839.push((arguments[i__19530__auto___24843]));

var G__24844 = (i__19530__auto___24843 + (1));
i__19530__auto___24843 = G__24844;
continue;
} else {
}
break;
}

var G__24841 = args24839.length;
switch (G__24841) {
case 2:
return sablono.core.drop_down24838.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down24838.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24839.length)].join('')));

}
});

sablono.core.drop_down24838.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down24838.call(null,name,options,null);
});

sablono.core.drop_down24838.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down24838.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down24838);
/**
 * Creates a text area element.
 */
sablono.core.text_area24846 = (function sablono$core$text_area24846(var_args){
var args24847 = [];
var len__19529__auto___24850 = arguments.length;
var i__19530__auto___24851 = (0);
while(true){
if((i__19530__auto___24851 < len__19529__auto___24850)){
args24847.push((arguments[i__19530__auto___24851]));

var G__24852 = (i__19530__auto___24851 + (1));
i__19530__auto___24851 = G__24852;
continue;
} else {
}
break;
}

var G__24849 = args24847.length;
switch (G__24849) {
case 1:
return sablono.core.text_area24846.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area24846.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24847.length)].join('')));

}
});

sablono.core.text_area24846.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area24846.call(null,name,null);
});

sablono.core.text_area24846.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area24846.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area24846);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label24854 = (function sablono$core$label24854(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label24854);
/**
 * Creates a submit button.
 */
sablono.core.submit_button24855 = (function sablono$core$submit_button24855(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button24855);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button24856 = (function sablono$core$reset_button24856(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button24856);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to24857 = (function sablono$core$form_to24857(var_args){
var args__19536__auto__ = [];
var len__19529__auto___24862 = arguments.length;
var i__19530__auto___24863 = (0);
while(true){
if((i__19530__auto___24863 < len__19529__auto___24862)){
args__19536__auto__.push((arguments[i__19530__auto___24863]));

var G__24864 = (i__19530__auto___24863 + (1));
i__19530__auto___24863 = G__24864;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to24857.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.form_to24857.cljs$core$IFn$_invoke$arity$variadic = (function (p__24860,body){
var vec__24861 = p__24860;
var method = cljs.core.nth.call(null,vec__24861,(0),null);
var action = cljs.core.nth.call(null,vec__24861,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to24857.cljs$lang$maxFixedArity = (1);

sablono.core.form_to24857.cljs$lang$applyTo = (function (seq24858){
var G__24859 = cljs.core.first.call(null,seq24858);
var seq24858__$1 = cljs.core.next.call(null,seq24858);
return sablono.core.form_to24857.cljs$core$IFn$_invoke$arity$variadic(G__24859,seq24858__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to24857);

//# sourceMappingURL=core.js.map?rel=1471682746887