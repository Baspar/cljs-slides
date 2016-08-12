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
var G__24020__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__24019 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__24019,(0),null);
var body = cljs.core.nthnext.call(null,vec__24019,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__24020 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24021__i = 0, G__24021__a = new Array(arguments.length -  0);
while (G__24021__i < G__24021__a.length) {G__24021__a[G__24021__i] = arguments[G__24021__i + 0]; ++G__24021__i;}
  args = new cljs.core.IndexedSeq(G__24021__a,0);
} 
return G__24020__delegate.call(this,args);};
G__24020.cljs$lang$maxFixedArity = 0;
G__24020.cljs$lang$applyTo = (function (arglist__24022){
var args = cljs.core.seq(arglist__24022);
return G__24020__delegate(args);
});
G__24020.cljs$core$IFn$_invoke$arity$variadic = G__24020__delegate;
return G__24020;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19239__auto__ = (function sablono$core$update_arglists_$_iter__24027(s__24028){
return (new cljs.core.LazySeq(null,(function (){
var s__24028__$1 = s__24028;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24028__$1);
if(temp__4657__auto__){
var s__24028__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24028__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__24028__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__24030 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__24029 = (0);
while(true){
if((i__24029 < size__19238__auto__)){
var args = cljs.core._nth.call(null,c__19237__auto__,i__24029);
cljs.core.chunk_append.call(null,b__24030,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__24031 = (i__24029 + (1));
i__24029 = G__24031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24030),sablono$core$update_arglists_$_iter__24027.call(null,cljs.core.chunk_rest.call(null,s__24028__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24030),null);
}
} else {
var args = cljs.core.first.call(null,s__24028__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__24027.call(null,cljs.core.rest.call(null,s__24028__$2)));
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
var len__19529__auto___24037 = arguments.length;
var i__19530__auto___24038 = (0);
while(true){
if((i__19530__auto___24038 < len__19529__auto___24037)){
args__19536__auto__.push((arguments[i__19530__auto___24038]));

var G__24039 = (i__19530__auto___24038 + (1));
i__19530__auto___24038 = G__24039;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19239__auto__ = (function sablono$core$iter__24033(s__24034){
return (new cljs.core.LazySeq(null,(function (){
var s__24034__$1 = s__24034;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24034__$1);
if(temp__4657__auto__){
var s__24034__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24034__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__24034__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__24036 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__24035 = (0);
while(true){
if((i__24035 < size__19238__auto__)){
var style = cljs.core._nth.call(null,c__19237__auto__,i__24035);
cljs.core.chunk_append.call(null,b__24036,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__24040 = (i__24035 + (1));
i__24035 = G__24040;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24036),sablono$core$iter__24033.call(null,cljs.core.chunk_rest.call(null,s__24034__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24036),null);
}
} else {
var style = cljs.core.first.call(null,s__24034__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__24033.call(null,cljs.core.rest.call(null,s__24034__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq24032){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24032));
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
sablono.core.link_to24041 = (function sablono$core$link_to24041(var_args){
var args__19536__auto__ = [];
var len__19529__auto___24044 = arguments.length;
var i__19530__auto___24045 = (0);
while(true){
if((i__19530__auto___24045 < len__19529__auto___24044)){
args__19536__auto__.push((arguments[i__19530__auto___24045]));

var G__24046 = (i__19530__auto___24045 + (1));
i__19530__auto___24045 = G__24046;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to24041.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.link_to24041.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to24041.cljs$lang$maxFixedArity = (1);

sablono.core.link_to24041.cljs$lang$applyTo = (function (seq24042){
var G__24043 = cljs.core.first.call(null,seq24042);
var seq24042__$1 = cljs.core.next.call(null,seq24042);
return sablono.core.link_to24041.cljs$core$IFn$_invoke$arity$variadic(G__24043,seq24042__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to24041);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to24047 = (function sablono$core$mail_to24047(var_args){
var args__19536__auto__ = [];
var len__19529__auto___24052 = arguments.length;
var i__19530__auto___24053 = (0);
while(true){
if((i__19530__auto___24053 < len__19529__auto___24052)){
args__19536__auto__.push((arguments[i__19530__auto___24053]));

var G__24054 = (i__19530__auto___24053 + (1));
i__19530__auto___24053 = G__24054;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to24047.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.mail_to24047.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__24050){
var vec__24051 = p__24050;
var content = cljs.core.nth.call(null,vec__24051,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18459__auto__ = content;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to24047.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to24047.cljs$lang$applyTo = (function (seq24048){
var G__24049 = cljs.core.first.call(null,seq24048);
var seq24048__$1 = cljs.core.next.call(null,seq24048);
return sablono.core.mail_to24047.cljs$core$IFn$_invoke$arity$variadic(G__24049,seq24048__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to24047);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list24055 = (function sablono$core$unordered_list24055(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19239__auto__ = (function sablono$core$unordered_list24055_$_iter__24060(s__24061){
return (new cljs.core.LazySeq(null,(function (){
var s__24061__$1 = s__24061;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24061__$1);
if(temp__4657__auto__){
var s__24061__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24061__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__24061__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__24063 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__24062 = (0);
while(true){
if((i__24062 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__24062);
cljs.core.chunk_append.call(null,b__24063,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24064 = (i__24062 + (1));
i__24062 = G__24064;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24063),sablono$core$unordered_list24055_$_iter__24060.call(null,cljs.core.chunk_rest.call(null,s__24061__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24063),null);
}
} else {
var x = cljs.core.first.call(null,s__24061__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list24055_$_iter__24060.call(null,cljs.core.rest.call(null,s__24061__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list24055);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list24065 = (function sablono$core$ordered_list24065(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19239__auto__ = (function sablono$core$ordered_list24065_$_iter__24070(s__24071){
return (new cljs.core.LazySeq(null,(function (){
var s__24071__$1 = s__24071;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24071__$1);
if(temp__4657__auto__){
var s__24071__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24071__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__24071__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__24073 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__24072 = (0);
while(true){
if((i__24072 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__24072);
cljs.core.chunk_append.call(null,b__24073,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24074 = (i__24072 + (1));
i__24072 = G__24074;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24073),sablono$core$ordered_list24065_$_iter__24070.call(null,cljs.core.chunk_rest.call(null,s__24071__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24073),null);
}
} else {
var x = cljs.core.first.call(null,s__24071__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list24065_$_iter__24070.call(null,cljs.core.rest.call(null,s__24071__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list24065);
/**
 * Create an image element.
 */
sablono.core.image24075 = (function sablono$core$image24075(var_args){
var args24076 = [];
var len__19529__auto___24079 = arguments.length;
var i__19530__auto___24080 = (0);
while(true){
if((i__19530__auto___24080 < len__19529__auto___24079)){
args24076.push((arguments[i__19530__auto___24080]));

var G__24081 = (i__19530__auto___24080 + (1));
i__19530__auto___24080 = G__24081;
continue;
} else {
}
break;
}

var G__24078 = args24076.length;
switch (G__24078) {
case 1:
return sablono.core.image24075.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image24075.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24076.length)].join('')));

}
});

sablono.core.image24075.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image24075.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image24075.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image24075);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__24083_SHARP_,p2__24084_SHARP_){
return [cljs.core.str(p1__24083_SHARP_),cljs.core.str("["),cljs.core.str(p2__24084_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__24085_SHARP_,p2__24086_SHARP_){
return [cljs.core.str(p1__24085_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24086_SHARP_)].join('');
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
sablono.core.color_field24087 = (function sablono$core$color_field24087(var_args){
var args24088 = [];
var len__19529__auto___24155 = arguments.length;
var i__19530__auto___24156 = (0);
while(true){
if((i__19530__auto___24156 < len__19529__auto___24155)){
args24088.push((arguments[i__19530__auto___24156]));

var G__24157 = (i__19530__auto___24156 + (1));
i__19530__auto___24156 = G__24157;
continue;
} else {
}
break;
}

var G__24090 = args24088.length;
switch (G__24090) {
case 1:
return sablono.core.color_field24087.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field24087.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24088.length)].join('')));

}
});

sablono.core.color_field24087.cljs$core$IFn$_invoke$arity$1 = (function (name__24008__auto__){
return sablono.core.color_field24087.call(null,name__24008__auto__,null);
});

sablono.core.color_field24087.cljs$core$IFn$_invoke$arity$2 = (function (name__24008__auto__,value__24009__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__24008__auto__,value__24009__auto__);
});

sablono.core.color_field24087.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field24087);

/**
 * Creates a date input field.
 */
sablono.core.date_field24091 = (function sablono$core$date_field24091(var_args){
var args24092 = [];
var len__19529__auto___24159 = arguments.length;
var i__19530__auto___24160 = (0);
while(true){
if((i__19530__auto___24160 < len__19529__auto___24159)){
args24092.push((arguments[i__19530__auto___24160]));

var G__24161 = (i__19530__auto___24160 + (1));
i__19530__auto___24160 = G__24161;
continue;
} else {
}
break;
}

var G__24094 = args24092.length;
switch (G__24094) {
case 1:
return sablono.core.date_field24091.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field24091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24092.length)].join('')));

}
});

sablono.core.date_field24091.cljs$core$IFn$_invoke$arity$1 = (function (name__24008__auto__){
return sablono.core.date_field24091.call(null,name__24008__auto__,null);
});

sablono.core.date_field24091.cljs$core$IFn$_invoke$arity$2 = (function (name__24008__auto__,value__24009__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__24008__auto__,value__24009__auto__);
});

sablono.core.date_field24091.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field24091);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field24095 = (function sablono$core$datetime_field24095(var_args){
var args24096 = [];
var len__19529__auto___24163 = arguments.length;
var i__19530__auto___24164 = (0);
while(true){
if((i__19530__auto___24164 < len__19529__auto___24163)){
args24096.push((arguments[i__19530__auto___24164]));

var G__24165 = (i__19530__auto___24164 + (1));
i__19530__auto___24164 = G__24165;
continue;
} else {
}
break;
}

var G__24098 = args24096.length;
switch (G__24098) {
case 1:
return sablono.core.datetime_field24095.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field24095.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24096.length)].join('')));

}
});

sablono.core.datetime_field24095.cljs$core$IFn$_invoke$arity$1 = (function (name__24008__auto__){
return sablono.core.datetime_field24095.call(null,name__24008__auto__,null);
});

sablono.core.datetime_field24095.cljs$core$IFn$_invoke$arity$2 = (function (name__24008__auto__,value__24009__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__24008__auto__,value__24009__auto__);
});

sablono.core.datetime_field24095.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field24095);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field24099 = (function sablono$core$datetime_local_field24099(var_args){
var args24100 = [];
var len__19529__auto___24167 = arguments.length;
var i__19530__auto___24168 = (0);
while(true){
if((i__19530__auto___24168 < len__19529__auto___24167)){
args24100.push((arguments[i__19530__auto___24168]));

var G__24169 = (i__19530__auto___24168 + (1));
i__19530__auto___24168 = G__24169;
continue;
} else {
}
break;
}

var G__24102 = args24100.length;
switch (G__24102) {
case 1:
return sablono.core.datetime_local_field24099.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field24099.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24100.length)].join('')));

}
});

sablono.core.datetime_local_field24099.cljs$core$IFn$_invoke$arity$1 = (function (name__24008__auto__){
return sablono.core.datetime_local_field24099.call(null,name__24008__auto__,null);
});

sablono.core.datetime_local_field24099.cljs$core$IFn$_invoke$arity$2 = (function (name__24008__auto__,value__24009__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__24008__auto__,value__24009__auto__);
});

sablono.core.datetime_local_field24099.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field24099);

/**
 * Creates a email input field.
 */
sablono.core.email_field24103 = (function sablono$core$email_field24103(var_args){
var args24104 = [];
var len__19529__auto___24171 = arguments.length;
var i__19530__auto___24172 = (0);
while(true){
if((i__19530__auto___24172 < len__19529__auto___24171)){
args24104.push((arguments[i__19530__auto___24172]));

var G__24173 = (i__19530__auto___24172 + (1));
i__19530__auto___24172 = G__24173;
continue;
} else {
}
break;
}

var G__24106 = args24104.length;
switch (G__24106) {
case 1:
return sablono.core.email_field24103.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field24103.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24104.length)].join('')));

}
});

sablono.core.email_field24103.cljs$core$IFn$_invoke$arity$1 = (function (name__24008__auto__){
return sablono.core.email_field24103.call(null,name__24008__auto__,null);
});

sablono.core.email_field24103.cljs$core$IFn$_invoke$arity$2 = (function (name__24008__auto__,value__24009__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__24008__auto__,value__24009__auto__);
});

sablono.core.email_field24103.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field24103);

/**
 * Creates a file input field.
 */
sablono.core.file_field24107 = (function sablono$core$file_field24107(var_args){
var args24108 = [];
var len__19529__auto___24175 = arguments.length;
var i__19530__auto___24176 = (0);
while(true){
if((i__19530__auto___24176 < len__19529__auto___24175)){
args24108.push((arguments[i__19530__auto___24176]));

var G__24177 = (i__19530__auto___24176 + (1));
i__19530__auto___24176 = G__24177;
continue;
} else {
}
break;
}

var G__24110 = args24108.length;
switch (G__24110) {
case 1:
return sablono.core.file_field24107.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field24107.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24108.length)].join('')));

}
});

sablono.core.file_field24107.cljs$core$IFn$_invoke$arity$1 = (function (name__24008__auto__){
return sablono.core.file_field24107.call(null,name__24008__auto__,null);
});

sablono.core.file_field24107.cljs$core$IFn$_invoke$arity$2 = (function (name__24008__auto__,value__24009__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__24008__auto__,value__24009__auto__);
});

sablono.core.file_field24107.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field24107);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field24111 = (function sablono$core$hidden_field24111(var_args){
var args24112 = [];
var len__19529__auto___24179 = arguments.length;
var i__19530__auto___24180 = (0);
while(true){
if((i__19530__auto___24180 < len__19529__auto___24179)){
args24112.push((arguments[i__19530__auto___24180]));

var G__24181 = (i__19530__auto___24180 + (1));
i__19530__auto___24180 = G__24181;
continue;
} else {
}
break;
}

var G__24114 = args24112.length;
switch (G__24114) {
case 1:
return sablono.core.hidden_field24111.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field24111.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24112.length)].join('')));

}
});

sablono.core.hidden_field24111.cljs$core$IFn$_invoke$arity$1 = (function (name__24008__auto__){
return sablono.core.hidden_field24111.call(null,name__24008__auto__,null);
});

sablono.core.hidden_field24111.cljs$core$IFn$_invoke$arity$2 = (function (name__24008__auto__,value__24009__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__24008__auto__,value__24009__auto__);
});

sablono.core.hidden_field24111.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field24111);

/**
 * Creates a month input field.
 */
sablono.core.month_field24115 = (function sablono$core$month_field24115(var_args){
var args24116 = [];
var len__19529__auto___24183 = arguments.length;
var i__19530__auto___24184 = (0);
while(true){
if((i__19530__auto___24184 < len__19529__auto___24183)){
args24116.push((arguments[i__19530__auto___24184]));

var G__24185 = (i__19530__auto___24184 + (1));
i__19530__auto___24184 = G__24185;
continue;
} else {
}
break;
}

var G__24118 = args24116.length;
switch (G__24118) {
case 1:
return sablono.core.month_field24115.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field24115.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24116.length)].join('')));

}
});

sablono.core.month_field24115.cljs$core$IFn$_invoke$arity$1 = (function (name__24008__auto__){
return sablono.core.month_field24115.call(null,name__24008__auto__,null);
});

sablono.core.month_field24115.cljs$core$IFn$_invoke$arity$2 = (function (name__24008__auto__,value__24009__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__24008__auto__,value__24009__auto__);
});

sablono.core.month_field24115.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field24115);

/**
 * Creates a number input field.
 */
sablono.core.number_field24119 = (function sablono$core$number_field24119(var_args){
var args24120 = [];
var len__19529__auto___24187 = arguments.length;
var i__19530__auto___24188 = (0);
while(true){
if((i__19530__auto___24188 < len__19529__auto___24187)){
args24120.push((arguments[i__19530__auto___24188]));

var G__24189 = (i__19530__auto___24188 + (1));
i__19530__auto___24188 = G__24189;
continue;
} else {
}
break;
}

var G__24122 = args24120.length;
switch (G__24122) {
case 1:
return sablono.core.number_field24119.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field24119.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24120.length)].join('')));

}
});

sablono.core.number_field24119.cljs$core$IFn$_invoke$arity$1 = (function (name__24008__auto__){
return sablono.core.number_field24119.call(null,name__24008__auto__,null);
});

sablono.core.number_field24119.cljs$core$IFn$_invoke$arity$2 = (function (name__24008__auto__,value__24009__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__24008__auto__,value__24009__auto__);
});

sablono.core.number_field24119.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field24119);

/**
 * Creates a password input field.
 */
sablono.core.password_field24123 = (function sablono$core$password_field24123(var_args){
var args24124 = [];
var len__19529__auto___24191 = arguments.length;
var i__19530__auto___24192 = (0);
while(true){
if((i__19530__auto___24192 < len__19529__auto___24191)){
args24124.push((arguments[i__19530__auto___24192]));

var G__24193 = (i__19530__auto___24192 + (1));
i__19530__auto___24192 = G__24193;
continue;
} else {
}
break;
}

var G__24126 = args24124.length;
switch (G__24126) {
case 1:
return sablono.core.password_field24123.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field24123.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24124.length)].join('')));

}
});

sablono.core.password_field24123.cljs$core$IFn$_invoke$arity$1 = (function (name__24008__auto__){
return sablono.core.password_field24123.call(null,name__24008__auto__,null);
});

sablono.core.password_field24123.cljs$core$IFn$_invoke$arity$2 = (function (name__24008__auto__,value__24009__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__24008__auto__,value__24009__auto__);
});

sablono.core.password_field24123.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field24123);

/**
 * Creates a range input field.
 */
sablono.core.range_field24127 = (function sablono$core$range_field24127(var_args){
var args24128 = [];
var len__19529__auto___24195 = arguments.length;
var i__19530__auto___24196 = (0);
while(true){
if((i__19530__auto___24196 < len__19529__auto___24195)){
args24128.push((arguments[i__19530__auto___24196]));

var G__24197 = (i__19530__auto___24196 + (1));
i__19530__auto___24196 = G__24197;
continue;
} else {
}
break;
}

var G__24130 = args24128.length;
switch (G__24130) {
case 1:
return sablono.core.range_field24127.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field24127.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24128.length)].join('')));

}
});

sablono.core.range_field24127.cljs$core$IFn$_invoke$arity$1 = (function (name__24008__auto__){
return sablono.core.range_field24127.call(null,name__24008__auto__,null);
});

sablono.core.range_field24127.cljs$core$IFn$_invoke$arity$2 = (function (name__24008__auto__,value__24009__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__24008__auto__,value__24009__auto__);
});

sablono.core.range_field24127.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field24127);

/**
 * Creates a search input field.
 */
sablono.core.search_field24131 = (function sablono$core$search_field24131(var_args){
var args24132 = [];
var len__19529__auto___24199 = arguments.length;
var i__19530__auto___24200 = (0);
while(true){
if((i__19530__auto___24200 < len__19529__auto___24199)){
args24132.push((arguments[i__19530__auto___24200]));

var G__24201 = (i__19530__auto___24200 + (1));
i__19530__auto___24200 = G__24201;
continue;
} else {
}
break;
}

var G__24134 = args24132.length;
switch (G__24134) {
case 1:
return sablono.core.search_field24131.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field24131.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24132.length)].join('')));

}
});

sablono.core.search_field24131.cljs$core$IFn$_invoke$arity$1 = (function (name__24008__auto__){
return sablono.core.search_field24131.call(null,name__24008__auto__,null);
});

sablono.core.search_field24131.cljs$core$IFn$_invoke$arity$2 = (function (name__24008__auto__,value__24009__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__24008__auto__,value__24009__auto__);
});

sablono.core.search_field24131.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field24131);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field24135 = (function sablono$core$tel_field24135(var_args){
var args24136 = [];
var len__19529__auto___24203 = arguments.length;
var i__19530__auto___24204 = (0);
while(true){
if((i__19530__auto___24204 < len__19529__auto___24203)){
args24136.push((arguments[i__19530__auto___24204]));

var G__24205 = (i__19530__auto___24204 + (1));
i__19530__auto___24204 = G__24205;
continue;
} else {
}
break;
}

var G__24138 = args24136.length;
switch (G__24138) {
case 1:
return sablono.core.tel_field24135.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field24135.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24136.length)].join('')));

}
});

sablono.core.tel_field24135.cljs$core$IFn$_invoke$arity$1 = (function (name__24008__auto__){
return sablono.core.tel_field24135.call(null,name__24008__auto__,null);
});

sablono.core.tel_field24135.cljs$core$IFn$_invoke$arity$2 = (function (name__24008__auto__,value__24009__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__24008__auto__,value__24009__auto__);
});

sablono.core.tel_field24135.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field24135);

/**
 * Creates a text input field.
 */
sablono.core.text_field24139 = (function sablono$core$text_field24139(var_args){
var args24140 = [];
var len__19529__auto___24207 = arguments.length;
var i__19530__auto___24208 = (0);
while(true){
if((i__19530__auto___24208 < len__19529__auto___24207)){
args24140.push((arguments[i__19530__auto___24208]));

var G__24209 = (i__19530__auto___24208 + (1));
i__19530__auto___24208 = G__24209;
continue;
} else {
}
break;
}

var G__24142 = args24140.length;
switch (G__24142) {
case 1:
return sablono.core.text_field24139.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field24139.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24140.length)].join('')));

}
});

sablono.core.text_field24139.cljs$core$IFn$_invoke$arity$1 = (function (name__24008__auto__){
return sablono.core.text_field24139.call(null,name__24008__auto__,null);
});

sablono.core.text_field24139.cljs$core$IFn$_invoke$arity$2 = (function (name__24008__auto__,value__24009__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__24008__auto__,value__24009__auto__);
});

sablono.core.text_field24139.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field24139);

/**
 * Creates a time input field.
 */
sablono.core.time_field24143 = (function sablono$core$time_field24143(var_args){
var args24144 = [];
var len__19529__auto___24211 = arguments.length;
var i__19530__auto___24212 = (0);
while(true){
if((i__19530__auto___24212 < len__19529__auto___24211)){
args24144.push((arguments[i__19530__auto___24212]));

var G__24213 = (i__19530__auto___24212 + (1));
i__19530__auto___24212 = G__24213;
continue;
} else {
}
break;
}

var G__24146 = args24144.length;
switch (G__24146) {
case 1:
return sablono.core.time_field24143.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field24143.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24144.length)].join('')));

}
});

sablono.core.time_field24143.cljs$core$IFn$_invoke$arity$1 = (function (name__24008__auto__){
return sablono.core.time_field24143.call(null,name__24008__auto__,null);
});

sablono.core.time_field24143.cljs$core$IFn$_invoke$arity$2 = (function (name__24008__auto__,value__24009__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__24008__auto__,value__24009__auto__);
});

sablono.core.time_field24143.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field24143);

/**
 * Creates a url input field.
 */
sablono.core.url_field24147 = (function sablono$core$url_field24147(var_args){
var args24148 = [];
var len__19529__auto___24215 = arguments.length;
var i__19530__auto___24216 = (0);
while(true){
if((i__19530__auto___24216 < len__19529__auto___24215)){
args24148.push((arguments[i__19530__auto___24216]));

var G__24217 = (i__19530__auto___24216 + (1));
i__19530__auto___24216 = G__24217;
continue;
} else {
}
break;
}

var G__24150 = args24148.length;
switch (G__24150) {
case 1:
return sablono.core.url_field24147.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field24147.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24148.length)].join('')));

}
});

sablono.core.url_field24147.cljs$core$IFn$_invoke$arity$1 = (function (name__24008__auto__){
return sablono.core.url_field24147.call(null,name__24008__auto__,null);
});

sablono.core.url_field24147.cljs$core$IFn$_invoke$arity$2 = (function (name__24008__auto__,value__24009__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__24008__auto__,value__24009__auto__);
});

sablono.core.url_field24147.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field24147);

/**
 * Creates a week input field.
 */
sablono.core.week_field24151 = (function sablono$core$week_field24151(var_args){
var args24152 = [];
var len__19529__auto___24219 = arguments.length;
var i__19530__auto___24220 = (0);
while(true){
if((i__19530__auto___24220 < len__19529__auto___24219)){
args24152.push((arguments[i__19530__auto___24220]));

var G__24221 = (i__19530__auto___24220 + (1));
i__19530__auto___24220 = G__24221;
continue;
} else {
}
break;
}

var G__24154 = args24152.length;
switch (G__24154) {
case 1:
return sablono.core.week_field24151.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field24151.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24152.length)].join('')));

}
});

sablono.core.week_field24151.cljs$core$IFn$_invoke$arity$1 = (function (name__24008__auto__){
return sablono.core.week_field24151.call(null,name__24008__auto__,null);
});

sablono.core.week_field24151.cljs$core$IFn$_invoke$arity$2 = (function (name__24008__auto__,value__24009__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__24008__auto__,value__24009__auto__);
});

sablono.core.week_field24151.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field24151);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box24223 = (function sablono$core$check_box24223(var_args){
var args24224 = [];
var len__19529__auto___24227 = arguments.length;
var i__19530__auto___24228 = (0);
while(true){
if((i__19530__auto___24228 < len__19529__auto___24227)){
args24224.push((arguments[i__19530__auto___24228]));

var G__24229 = (i__19530__auto___24228 + (1));
i__19530__auto___24228 = G__24229;
continue;
} else {
}
break;
}

var G__24226 = args24224.length;
switch (G__24226) {
case 1:
return sablono.core.check_box24223.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box24223.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box24223.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24224.length)].join('')));

}
});

sablono.core.check_box24223.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box24223.call(null,name,null);
});

sablono.core.check_box24223.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box24223.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box24223.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box24223.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box24223);
/**
 * Creates a radio button.
 */
sablono.core.radio_button24231 = (function sablono$core$radio_button24231(var_args){
var args24232 = [];
var len__19529__auto___24235 = arguments.length;
var i__19530__auto___24236 = (0);
while(true){
if((i__19530__auto___24236 < len__19529__auto___24235)){
args24232.push((arguments[i__19530__auto___24236]));

var G__24237 = (i__19530__auto___24236 + (1));
i__19530__auto___24236 = G__24237;
continue;
} else {
}
break;
}

var G__24234 = args24232.length;
switch (G__24234) {
case 1:
return sablono.core.radio_button24231.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button24231.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button24231.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24232.length)].join('')));

}
});

sablono.core.radio_button24231.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button24231.call(null,group,null);
});

sablono.core.radio_button24231.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button24231.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button24231.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button24231.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button24231);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options24239 = (function sablono$core$select_options24239(coll){
var iter__19239__auto__ = (function sablono$core$select_options24239_$_iter__24248(s__24249){
return (new cljs.core.LazySeq(null,(function (){
var s__24249__$1 = s__24249;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24249__$1);
if(temp__4657__auto__){
var s__24249__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24249__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__24249__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__24251 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__24250 = (0);
while(true){
if((i__24250 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__24250);
cljs.core.chunk_append.call(null,b__24251,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24254 = x;
var text = cljs.core.nth.call(null,vec__24254,(0),null);
var val = cljs.core.nth.call(null,vec__24254,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24254,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options24239.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__24256 = (i__24250 + (1));
i__24250 = G__24256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24251),sablono$core$select_options24239_$_iter__24248.call(null,cljs.core.chunk_rest.call(null,s__24249__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24251),null);
}
} else {
var x = cljs.core.first.call(null,s__24249__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24255 = x;
var text = cljs.core.nth.call(null,vec__24255,(0),null);
var val = cljs.core.nth.call(null,vec__24255,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24255,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options24239.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options24239_$_iter__24248.call(null,cljs.core.rest.call(null,s__24249__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options24239);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down24257 = (function sablono$core$drop_down24257(var_args){
var args24258 = [];
var len__19529__auto___24261 = arguments.length;
var i__19530__auto___24262 = (0);
while(true){
if((i__19530__auto___24262 < len__19529__auto___24261)){
args24258.push((arguments[i__19530__auto___24262]));

var G__24263 = (i__19530__auto___24262 + (1));
i__19530__auto___24262 = G__24263;
continue;
} else {
}
break;
}

var G__24260 = args24258.length;
switch (G__24260) {
case 2:
return sablono.core.drop_down24257.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down24257.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24258.length)].join('')));

}
});

sablono.core.drop_down24257.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down24257.call(null,name,options,null);
});

sablono.core.drop_down24257.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down24257.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down24257);
/**
 * Creates a text area element.
 */
sablono.core.text_area24265 = (function sablono$core$text_area24265(var_args){
var args24266 = [];
var len__19529__auto___24269 = arguments.length;
var i__19530__auto___24270 = (0);
while(true){
if((i__19530__auto___24270 < len__19529__auto___24269)){
args24266.push((arguments[i__19530__auto___24270]));

var G__24271 = (i__19530__auto___24270 + (1));
i__19530__auto___24270 = G__24271;
continue;
} else {
}
break;
}

var G__24268 = args24266.length;
switch (G__24268) {
case 1:
return sablono.core.text_area24265.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area24265.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24266.length)].join('')));

}
});

sablono.core.text_area24265.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area24265.call(null,name,null);
});

sablono.core.text_area24265.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area24265.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area24265);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label24273 = (function sablono$core$label24273(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label24273);
/**
 * Creates a submit button.
 */
sablono.core.submit_button24274 = (function sablono$core$submit_button24274(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button24274);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button24275 = (function sablono$core$reset_button24275(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button24275);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to24276 = (function sablono$core$form_to24276(var_args){
var args__19536__auto__ = [];
var len__19529__auto___24281 = arguments.length;
var i__19530__auto___24282 = (0);
while(true){
if((i__19530__auto___24282 < len__19529__auto___24281)){
args__19536__auto__.push((arguments[i__19530__auto___24282]));

var G__24283 = (i__19530__auto___24282 + (1));
i__19530__auto___24282 = G__24283;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to24276.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.form_to24276.cljs$core$IFn$_invoke$arity$variadic = (function (p__24279,body){
var vec__24280 = p__24279;
var method = cljs.core.nth.call(null,vec__24280,(0),null);
var action = cljs.core.nth.call(null,vec__24280,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to24276.cljs$lang$maxFixedArity = (1);

sablono.core.form_to24276.cljs$lang$applyTo = (function (seq24277){
var G__24278 = cljs.core.first.call(null,seq24277);
var seq24277__$1 = cljs.core.next.call(null,seq24277);
return sablono.core.form_to24276.cljs$core$IFn$_invoke$arity$variadic(G__24278,seq24277__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to24276);

//# sourceMappingURL=core.js.map?rel=1470497433904