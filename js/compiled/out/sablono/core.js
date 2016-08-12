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
var G__28833__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__28832 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__28832,(0),null);
var body = cljs.core.nthnext.call(null,vec__28832,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__28833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28834__i = 0, G__28834__a = new Array(arguments.length -  0);
while (G__28834__i < G__28834__a.length) {G__28834__a[G__28834__i] = arguments[G__28834__i + 0]; ++G__28834__i;}
  args = new cljs.core.IndexedSeq(G__28834__a,0);
} 
return G__28833__delegate.call(this,args);};
G__28833.cljs$lang$maxFixedArity = 0;
G__28833.cljs$lang$applyTo = (function (arglist__28835){
var args = cljs.core.seq(arglist__28835);
return G__28833__delegate(args);
});
G__28833.cljs$core$IFn$_invoke$arity$variadic = G__28833__delegate;
return G__28833;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19240__auto__ = (function sablono$core$update_arglists_$_iter__28840(s__28841){
return (new cljs.core.LazySeq(null,(function (){
var s__28841__$1 = s__28841;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28841__$1);
if(temp__4657__auto__){
var s__28841__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28841__$2)){
var c__19238__auto__ = cljs.core.chunk_first.call(null,s__28841__$2);
var size__19239__auto__ = cljs.core.count.call(null,c__19238__auto__);
var b__28843 = cljs.core.chunk_buffer.call(null,size__19239__auto__);
if((function (){var i__28842 = (0);
while(true){
if((i__28842 < size__19239__auto__)){
var args = cljs.core._nth.call(null,c__19238__auto__,i__28842);
cljs.core.chunk_append.call(null,b__28843,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__28844 = (i__28842 + (1));
i__28842 = G__28844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28843),sablono$core$update_arglists_$_iter__28840.call(null,cljs.core.chunk_rest.call(null,s__28841__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28843),null);
}
} else {
var args = cljs.core.first.call(null,s__28841__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__28840.call(null,cljs.core.rest.call(null,s__28841__$2)));
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
var len__19530__auto___28850 = arguments.length;
var i__19531__auto___28851 = (0);
while(true){
if((i__19531__auto___28851 < len__19530__auto___28850)){
args__19537__auto__.push((arguments[i__19531__auto___28851]));

var G__28852 = (i__19531__auto___28851 + (1));
i__19531__auto___28851 = G__28852;
continue;
} else {
}
break;
}

var argseq__19538__auto__ = ((((0) < args__19537__auto__.length))?(new cljs.core.IndexedSeq(args__19537__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19538__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19240__auto__ = (function sablono$core$iter__28846(s__28847){
return (new cljs.core.LazySeq(null,(function (){
var s__28847__$1 = s__28847;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28847__$1);
if(temp__4657__auto__){
var s__28847__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28847__$2)){
var c__19238__auto__ = cljs.core.chunk_first.call(null,s__28847__$2);
var size__19239__auto__ = cljs.core.count.call(null,c__19238__auto__);
var b__28849 = cljs.core.chunk_buffer.call(null,size__19239__auto__);
if((function (){var i__28848 = (0);
while(true){
if((i__28848 < size__19239__auto__)){
var style = cljs.core._nth.call(null,c__19238__auto__,i__28848);
cljs.core.chunk_append.call(null,b__28849,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__28853 = (i__28848 + (1));
i__28848 = G__28853;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28849),sablono$core$iter__28846.call(null,cljs.core.chunk_rest.call(null,s__28847__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28849),null);
}
} else {
var style = cljs.core.first.call(null,s__28847__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__28846.call(null,cljs.core.rest.call(null,s__28847__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq28845){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28845));
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
sablono.core.link_to28854 = (function sablono$core$link_to28854(var_args){
var args__19537__auto__ = [];
var len__19530__auto___28857 = arguments.length;
var i__19531__auto___28858 = (0);
while(true){
if((i__19531__auto___28858 < len__19530__auto___28857)){
args__19537__auto__.push((arguments[i__19531__auto___28858]));

var G__28859 = (i__19531__auto___28858 + (1));
i__19531__auto___28858 = G__28859;
continue;
} else {
}
break;
}

var argseq__19538__auto__ = ((((1) < args__19537__auto__.length))?(new cljs.core.IndexedSeq(args__19537__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to28854.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19538__auto__);
});

sablono.core.link_to28854.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to28854.cljs$lang$maxFixedArity = (1);

sablono.core.link_to28854.cljs$lang$applyTo = (function (seq28855){
var G__28856 = cljs.core.first.call(null,seq28855);
var seq28855__$1 = cljs.core.next.call(null,seq28855);
return sablono.core.link_to28854.cljs$core$IFn$_invoke$arity$variadic(G__28856,seq28855__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to28854);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to28860 = (function sablono$core$mail_to28860(var_args){
var args__19537__auto__ = [];
var len__19530__auto___28865 = arguments.length;
var i__19531__auto___28866 = (0);
while(true){
if((i__19531__auto___28866 < len__19530__auto___28865)){
args__19537__auto__.push((arguments[i__19531__auto___28866]));

var G__28867 = (i__19531__auto___28866 + (1));
i__19531__auto___28866 = G__28867;
continue;
} else {
}
break;
}

var argseq__19538__auto__ = ((((1) < args__19537__auto__.length))?(new cljs.core.IndexedSeq(args__19537__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to28860.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19538__auto__);
});

sablono.core.mail_to28860.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__28863){
var vec__28864 = p__28863;
var content = cljs.core.nth.call(null,vec__28864,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18460__auto__ = content;
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to28860.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to28860.cljs$lang$applyTo = (function (seq28861){
var G__28862 = cljs.core.first.call(null,seq28861);
var seq28861__$1 = cljs.core.next.call(null,seq28861);
return sablono.core.mail_to28860.cljs$core$IFn$_invoke$arity$variadic(G__28862,seq28861__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to28860);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list28868 = (function sablono$core$unordered_list28868(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19240__auto__ = (function sablono$core$unordered_list28868_$_iter__28873(s__28874){
return (new cljs.core.LazySeq(null,(function (){
var s__28874__$1 = s__28874;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28874__$1);
if(temp__4657__auto__){
var s__28874__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28874__$2)){
var c__19238__auto__ = cljs.core.chunk_first.call(null,s__28874__$2);
var size__19239__auto__ = cljs.core.count.call(null,c__19238__auto__);
var b__28876 = cljs.core.chunk_buffer.call(null,size__19239__auto__);
if((function (){var i__28875 = (0);
while(true){
if((i__28875 < size__19239__auto__)){
var x = cljs.core._nth.call(null,c__19238__auto__,i__28875);
cljs.core.chunk_append.call(null,b__28876,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28877 = (i__28875 + (1));
i__28875 = G__28877;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28876),sablono$core$unordered_list28868_$_iter__28873.call(null,cljs.core.chunk_rest.call(null,s__28874__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28876),null);
}
} else {
var x = cljs.core.first.call(null,s__28874__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list28868_$_iter__28873.call(null,cljs.core.rest.call(null,s__28874__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list28868);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list28878 = (function sablono$core$ordered_list28878(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19240__auto__ = (function sablono$core$ordered_list28878_$_iter__28883(s__28884){
return (new cljs.core.LazySeq(null,(function (){
var s__28884__$1 = s__28884;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28884__$1);
if(temp__4657__auto__){
var s__28884__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28884__$2)){
var c__19238__auto__ = cljs.core.chunk_first.call(null,s__28884__$2);
var size__19239__auto__ = cljs.core.count.call(null,c__19238__auto__);
var b__28886 = cljs.core.chunk_buffer.call(null,size__19239__auto__);
if((function (){var i__28885 = (0);
while(true){
if((i__28885 < size__19239__auto__)){
var x = cljs.core._nth.call(null,c__19238__auto__,i__28885);
cljs.core.chunk_append.call(null,b__28886,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28887 = (i__28885 + (1));
i__28885 = G__28887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28886),sablono$core$ordered_list28878_$_iter__28883.call(null,cljs.core.chunk_rest.call(null,s__28884__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28886),null);
}
} else {
var x = cljs.core.first.call(null,s__28884__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list28878_$_iter__28883.call(null,cljs.core.rest.call(null,s__28884__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list28878);
/**
 * Create an image element.
 */
sablono.core.image28888 = (function sablono$core$image28888(var_args){
var args28889 = [];
var len__19530__auto___28892 = arguments.length;
var i__19531__auto___28893 = (0);
while(true){
if((i__19531__auto___28893 < len__19530__auto___28892)){
args28889.push((arguments[i__19531__auto___28893]));

var G__28894 = (i__19531__auto___28893 + (1));
i__19531__auto___28893 = G__28894;
continue;
} else {
}
break;
}

var G__28891 = args28889.length;
switch (G__28891) {
case 1:
return sablono.core.image28888.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image28888.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28889.length)].join('')));

}
});

sablono.core.image28888.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image28888.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image28888.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image28888);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__28896_SHARP_,p2__28897_SHARP_){
return [cljs.core.str(p1__28896_SHARP_),cljs.core.str("["),cljs.core.str(p2__28897_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__28898_SHARP_,p2__28899_SHARP_){
return [cljs.core.str(p1__28898_SHARP_),cljs.core.str("-"),cljs.core.str(p2__28899_SHARP_)].join('');
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
sablono.core.color_field28900 = (function sablono$core$color_field28900(var_args){
var args28901 = [];
var len__19530__auto___28968 = arguments.length;
var i__19531__auto___28969 = (0);
while(true){
if((i__19531__auto___28969 < len__19530__auto___28968)){
args28901.push((arguments[i__19531__auto___28969]));

var G__28970 = (i__19531__auto___28969 + (1));
i__19531__auto___28969 = G__28970;
continue;
} else {
}
break;
}

var G__28903 = args28901.length;
switch (G__28903) {
case 1:
return sablono.core.color_field28900.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field28900.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28901.length)].join('')));

}
});

sablono.core.color_field28900.cljs$core$IFn$_invoke$arity$1 = (function (name__20988__auto__){
return sablono.core.color_field28900.call(null,name__20988__auto__,null);
});

sablono.core.color_field28900.cljs$core$IFn$_invoke$arity$2 = (function (name__20988__auto__,value__20989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__20988__auto__,value__20989__auto__);
});

sablono.core.color_field28900.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field28900);

/**
 * Creates a date input field.
 */
sablono.core.date_field28904 = (function sablono$core$date_field28904(var_args){
var args28905 = [];
var len__19530__auto___28972 = arguments.length;
var i__19531__auto___28973 = (0);
while(true){
if((i__19531__auto___28973 < len__19530__auto___28972)){
args28905.push((arguments[i__19531__auto___28973]));

var G__28974 = (i__19531__auto___28973 + (1));
i__19531__auto___28973 = G__28974;
continue;
} else {
}
break;
}

var G__28907 = args28905.length;
switch (G__28907) {
case 1:
return sablono.core.date_field28904.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field28904.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28905.length)].join('')));

}
});

sablono.core.date_field28904.cljs$core$IFn$_invoke$arity$1 = (function (name__20988__auto__){
return sablono.core.date_field28904.call(null,name__20988__auto__,null);
});

sablono.core.date_field28904.cljs$core$IFn$_invoke$arity$2 = (function (name__20988__auto__,value__20989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__20988__auto__,value__20989__auto__);
});

sablono.core.date_field28904.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field28904);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field28908 = (function sablono$core$datetime_field28908(var_args){
var args28909 = [];
var len__19530__auto___28976 = arguments.length;
var i__19531__auto___28977 = (0);
while(true){
if((i__19531__auto___28977 < len__19530__auto___28976)){
args28909.push((arguments[i__19531__auto___28977]));

var G__28978 = (i__19531__auto___28977 + (1));
i__19531__auto___28977 = G__28978;
continue;
} else {
}
break;
}

var G__28911 = args28909.length;
switch (G__28911) {
case 1:
return sablono.core.datetime_field28908.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field28908.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28909.length)].join('')));

}
});

sablono.core.datetime_field28908.cljs$core$IFn$_invoke$arity$1 = (function (name__20988__auto__){
return sablono.core.datetime_field28908.call(null,name__20988__auto__,null);
});

sablono.core.datetime_field28908.cljs$core$IFn$_invoke$arity$2 = (function (name__20988__auto__,value__20989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__20988__auto__,value__20989__auto__);
});

sablono.core.datetime_field28908.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field28908);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field28912 = (function sablono$core$datetime_local_field28912(var_args){
var args28913 = [];
var len__19530__auto___28980 = arguments.length;
var i__19531__auto___28981 = (0);
while(true){
if((i__19531__auto___28981 < len__19530__auto___28980)){
args28913.push((arguments[i__19531__auto___28981]));

var G__28982 = (i__19531__auto___28981 + (1));
i__19531__auto___28981 = G__28982;
continue;
} else {
}
break;
}

var G__28915 = args28913.length;
switch (G__28915) {
case 1:
return sablono.core.datetime_local_field28912.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field28912.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28913.length)].join('')));

}
});

sablono.core.datetime_local_field28912.cljs$core$IFn$_invoke$arity$1 = (function (name__20988__auto__){
return sablono.core.datetime_local_field28912.call(null,name__20988__auto__,null);
});

sablono.core.datetime_local_field28912.cljs$core$IFn$_invoke$arity$2 = (function (name__20988__auto__,value__20989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__20988__auto__,value__20989__auto__);
});

sablono.core.datetime_local_field28912.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field28912);

/**
 * Creates a email input field.
 */
sablono.core.email_field28916 = (function sablono$core$email_field28916(var_args){
var args28917 = [];
var len__19530__auto___28984 = arguments.length;
var i__19531__auto___28985 = (0);
while(true){
if((i__19531__auto___28985 < len__19530__auto___28984)){
args28917.push((arguments[i__19531__auto___28985]));

var G__28986 = (i__19531__auto___28985 + (1));
i__19531__auto___28985 = G__28986;
continue;
} else {
}
break;
}

var G__28919 = args28917.length;
switch (G__28919) {
case 1:
return sablono.core.email_field28916.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field28916.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28917.length)].join('')));

}
});

sablono.core.email_field28916.cljs$core$IFn$_invoke$arity$1 = (function (name__20988__auto__){
return sablono.core.email_field28916.call(null,name__20988__auto__,null);
});

sablono.core.email_field28916.cljs$core$IFn$_invoke$arity$2 = (function (name__20988__auto__,value__20989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__20988__auto__,value__20989__auto__);
});

sablono.core.email_field28916.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28916);

/**
 * Creates a file input field.
 */
sablono.core.file_field28920 = (function sablono$core$file_field28920(var_args){
var args28921 = [];
var len__19530__auto___28988 = arguments.length;
var i__19531__auto___28989 = (0);
while(true){
if((i__19531__auto___28989 < len__19530__auto___28988)){
args28921.push((arguments[i__19531__auto___28989]));

var G__28990 = (i__19531__auto___28989 + (1));
i__19531__auto___28989 = G__28990;
continue;
} else {
}
break;
}

var G__28923 = args28921.length;
switch (G__28923) {
case 1:
return sablono.core.file_field28920.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field28920.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28921.length)].join('')));

}
});

sablono.core.file_field28920.cljs$core$IFn$_invoke$arity$1 = (function (name__20988__auto__){
return sablono.core.file_field28920.call(null,name__20988__auto__,null);
});

sablono.core.file_field28920.cljs$core$IFn$_invoke$arity$2 = (function (name__20988__auto__,value__20989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__20988__auto__,value__20989__auto__);
});

sablono.core.file_field28920.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field28920);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field28924 = (function sablono$core$hidden_field28924(var_args){
var args28925 = [];
var len__19530__auto___28992 = arguments.length;
var i__19531__auto___28993 = (0);
while(true){
if((i__19531__auto___28993 < len__19530__auto___28992)){
args28925.push((arguments[i__19531__auto___28993]));

var G__28994 = (i__19531__auto___28993 + (1));
i__19531__auto___28993 = G__28994;
continue;
} else {
}
break;
}

var G__28927 = args28925.length;
switch (G__28927) {
case 1:
return sablono.core.hidden_field28924.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field28924.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28925.length)].join('')));

}
});

sablono.core.hidden_field28924.cljs$core$IFn$_invoke$arity$1 = (function (name__20988__auto__){
return sablono.core.hidden_field28924.call(null,name__20988__auto__,null);
});

sablono.core.hidden_field28924.cljs$core$IFn$_invoke$arity$2 = (function (name__20988__auto__,value__20989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__20988__auto__,value__20989__auto__);
});

sablono.core.hidden_field28924.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28924);

/**
 * Creates a month input field.
 */
sablono.core.month_field28928 = (function sablono$core$month_field28928(var_args){
var args28929 = [];
var len__19530__auto___28996 = arguments.length;
var i__19531__auto___28997 = (0);
while(true){
if((i__19531__auto___28997 < len__19530__auto___28996)){
args28929.push((arguments[i__19531__auto___28997]));

var G__28998 = (i__19531__auto___28997 + (1));
i__19531__auto___28997 = G__28998;
continue;
} else {
}
break;
}

var G__28931 = args28929.length;
switch (G__28931) {
case 1:
return sablono.core.month_field28928.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field28928.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28929.length)].join('')));

}
});

sablono.core.month_field28928.cljs$core$IFn$_invoke$arity$1 = (function (name__20988__auto__){
return sablono.core.month_field28928.call(null,name__20988__auto__,null);
});

sablono.core.month_field28928.cljs$core$IFn$_invoke$arity$2 = (function (name__20988__auto__,value__20989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__20988__auto__,value__20989__auto__);
});

sablono.core.month_field28928.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field28928);

/**
 * Creates a number input field.
 */
sablono.core.number_field28932 = (function sablono$core$number_field28932(var_args){
var args28933 = [];
var len__19530__auto___29000 = arguments.length;
var i__19531__auto___29001 = (0);
while(true){
if((i__19531__auto___29001 < len__19530__auto___29000)){
args28933.push((arguments[i__19531__auto___29001]));

var G__29002 = (i__19531__auto___29001 + (1));
i__19531__auto___29001 = G__29002;
continue;
} else {
}
break;
}

var G__28935 = args28933.length;
switch (G__28935) {
case 1:
return sablono.core.number_field28932.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field28932.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28933.length)].join('')));

}
});

sablono.core.number_field28932.cljs$core$IFn$_invoke$arity$1 = (function (name__20988__auto__){
return sablono.core.number_field28932.call(null,name__20988__auto__,null);
});

sablono.core.number_field28932.cljs$core$IFn$_invoke$arity$2 = (function (name__20988__auto__,value__20989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__20988__auto__,value__20989__auto__);
});

sablono.core.number_field28932.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field28932);

/**
 * Creates a password input field.
 */
sablono.core.password_field28936 = (function sablono$core$password_field28936(var_args){
var args28937 = [];
var len__19530__auto___29004 = arguments.length;
var i__19531__auto___29005 = (0);
while(true){
if((i__19531__auto___29005 < len__19530__auto___29004)){
args28937.push((arguments[i__19531__auto___29005]));

var G__29006 = (i__19531__auto___29005 + (1));
i__19531__auto___29005 = G__29006;
continue;
} else {
}
break;
}

var G__28939 = args28937.length;
switch (G__28939) {
case 1:
return sablono.core.password_field28936.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field28936.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28937.length)].join('')));

}
});

sablono.core.password_field28936.cljs$core$IFn$_invoke$arity$1 = (function (name__20988__auto__){
return sablono.core.password_field28936.call(null,name__20988__auto__,null);
});

sablono.core.password_field28936.cljs$core$IFn$_invoke$arity$2 = (function (name__20988__auto__,value__20989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__20988__auto__,value__20989__auto__);
});

sablono.core.password_field28936.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28936);

/**
 * Creates a range input field.
 */
sablono.core.range_field28940 = (function sablono$core$range_field28940(var_args){
var args28941 = [];
var len__19530__auto___29008 = arguments.length;
var i__19531__auto___29009 = (0);
while(true){
if((i__19531__auto___29009 < len__19530__auto___29008)){
args28941.push((arguments[i__19531__auto___29009]));

var G__29010 = (i__19531__auto___29009 + (1));
i__19531__auto___29009 = G__29010;
continue;
} else {
}
break;
}

var G__28943 = args28941.length;
switch (G__28943) {
case 1:
return sablono.core.range_field28940.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field28940.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28941.length)].join('')));

}
});

sablono.core.range_field28940.cljs$core$IFn$_invoke$arity$1 = (function (name__20988__auto__){
return sablono.core.range_field28940.call(null,name__20988__auto__,null);
});

sablono.core.range_field28940.cljs$core$IFn$_invoke$arity$2 = (function (name__20988__auto__,value__20989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__20988__auto__,value__20989__auto__);
});

sablono.core.range_field28940.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field28940);

/**
 * Creates a search input field.
 */
sablono.core.search_field28944 = (function sablono$core$search_field28944(var_args){
var args28945 = [];
var len__19530__auto___29012 = arguments.length;
var i__19531__auto___29013 = (0);
while(true){
if((i__19531__auto___29013 < len__19530__auto___29012)){
args28945.push((arguments[i__19531__auto___29013]));

var G__29014 = (i__19531__auto___29013 + (1));
i__19531__auto___29013 = G__29014;
continue;
} else {
}
break;
}

var G__28947 = args28945.length;
switch (G__28947) {
case 1:
return sablono.core.search_field28944.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field28944.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28945.length)].join('')));

}
});

sablono.core.search_field28944.cljs$core$IFn$_invoke$arity$1 = (function (name__20988__auto__){
return sablono.core.search_field28944.call(null,name__20988__auto__,null);
});

sablono.core.search_field28944.cljs$core$IFn$_invoke$arity$2 = (function (name__20988__auto__,value__20989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__20988__auto__,value__20989__auto__);
});

sablono.core.search_field28944.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field28944);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field28948 = (function sablono$core$tel_field28948(var_args){
var args28949 = [];
var len__19530__auto___29016 = arguments.length;
var i__19531__auto___29017 = (0);
while(true){
if((i__19531__auto___29017 < len__19530__auto___29016)){
args28949.push((arguments[i__19531__auto___29017]));

var G__29018 = (i__19531__auto___29017 + (1));
i__19531__auto___29017 = G__29018;
continue;
} else {
}
break;
}

var G__28951 = args28949.length;
switch (G__28951) {
case 1:
return sablono.core.tel_field28948.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field28948.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28949.length)].join('')));

}
});

sablono.core.tel_field28948.cljs$core$IFn$_invoke$arity$1 = (function (name__20988__auto__){
return sablono.core.tel_field28948.call(null,name__20988__auto__,null);
});

sablono.core.tel_field28948.cljs$core$IFn$_invoke$arity$2 = (function (name__20988__auto__,value__20989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__20988__auto__,value__20989__auto__);
});

sablono.core.tel_field28948.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field28948);

/**
 * Creates a text input field.
 */
sablono.core.text_field28952 = (function sablono$core$text_field28952(var_args){
var args28953 = [];
var len__19530__auto___29020 = arguments.length;
var i__19531__auto___29021 = (0);
while(true){
if((i__19531__auto___29021 < len__19530__auto___29020)){
args28953.push((arguments[i__19531__auto___29021]));

var G__29022 = (i__19531__auto___29021 + (1));
i__19531__auto___29021 = G__29022;
continue;
} else {
}
break;
}

var G__28955 = args28953.length;
switch (G__28955) {
case 1:
return sablono.core.text_field28952.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field28952.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28953.length)].join('')));

}
});

sablono.core.text_field28952.cljs$core$IFn$_invoke$arity$1 = (function (name__20988__auto__){
return sablono.core.text_field28952.call(null,name__20988__auto__,null);
});

sablono.core.text_field28952.cljs$core$IFn$_invoke$arity$2 = (function (name__20988__auto__,value__20989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__20988__auto__,value__20989__auto__);
});

sablono.core.text_field28952.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28952);

/**
 * Creates a time input field.
 */
sablono.core.time_field28956 = (function sablono$core$time_field28956(var_args){
var args28957 = [];
var len__19530__auto___29024 = arguments.length;
var i__19531__auto___29025 = (0);
while(true){
if((i__19531__auto___29025 < len__19530__auto___29024)){
args28957.push((arguments[i__19531__auto___29025]));

var G__29026 = (i__19531__auto___29025 + (1));
i__19531__auto___29025 = G__29026;
continue;
} else {
}
break;
}

var G__28959 = args28957.length;
switch (G__28959) {
case 1:
return sablono.core.time_field28956.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field28956.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28957.length)].join('')));

}
});

sablono.core.time_field28956.cljs$core$IFn$_invoke$arity$1 = (function (name__20988__auto__){
return sablono.core.time_field28956.call(null,name__20988__auto__,null);
});

sablono.core.time_field28956.cljs$core$IFn$_invoke$arity$2 = (function (name__20988__auto__,value__20989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__20988__auto__,value__20989__auto__);
});

sablono.core.time_field28956.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field28956);

/**
 * Creates a url input field.
 */
sablono.core.url_field28960 = (function sablono$core$url_field28960(var_args){
var args28961 = [];
var len__19530__auto___29028 = arguments.length;
var i__19531__auto___29029 = (0);
while(true){
if((i__19531__auto___29029 < len__19530__auto___29028)){
args28961.push((arguments[i__19531__auto___29029]));

var G__29030 = (i__19531__auto___29029 + (1));
i__19531__auto___29029 = G__29030;
continue;
} else {
}
break;
}

var G__28963 = args28961.length;
switch (G__28963) {
case 1:
return sablono.core.url_field28960.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field28960.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28961.length)].join('')));

}
});

sablono.core.url_field28960.cljs$core$IFn$_invoke$arity$1 = (function (name__20988__auto__){
return sablono.core.url_field28960.call(null,name__20988__auto__,null);
});

sablono.core.url_field28960.cljs$core$IFn$_invoke$arity$2 = (function (name__20988__auto__,value__20989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__20988__auto__,value__20989__auto__);
});

sablono.core.url_field28960.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field28960);

/**
 * Creates a week input field.
 */
sablono.core.week_field28964 = (function sablono$core$week_field28964(var_args){
var args28965 = [];
var len__19530__auto___29032 = arguments.length;
var i__19531__auto___29033 = (0);
while(true){
if((i__19531__auto___29033 < len__19530__auto___29032)){
args28965.push((arguments[i__19531__auto___29033]));

var G__29034 = (i__19531__auto___29033 + (1));
i__19531__auto___29033 = G__29034;
continue;
} else {
}
break;
}

var G__28967 = args28965.length;
switch (G__28967) {
case 1:
return sablono.core.week_field28964.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field28964.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28965.length)].join('')));

}
});

sablono.core.week_field28964.cljs$core$IFn$_invoke$arity$1 = (function (name__20988__auto__){
return sablono.core.week_field28964.call(null,name__20988__auto__,null);
});

sablono.core.week_field28964.cljs$core$IFn$_invoke$arity$2 = (function (name__20988__auto__,value__20989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__20988__auto__,value__20989__auto__);
});

sablono.core.week_field28964.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field28964);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box29036 = (function sablono$core$check_box29036(var_args){
var args29037 = [];
var len__19530__auto___29040 = arguments.length;
var i__19531__auto___29041 = (0);
while(true){
if((i__19531__auto___29041 < len__19530__auto___29040)){
args29037.push((arguments[i__19531__auto___29041]));

var G__29042 = (i__19531__auto___29041 + (1));
i__19531__auto___29041 = G__29042;
continue;
} else {
}
break;
}

var G__29039 = args29037.length;
switch (G__29039) {
case 1:
return sablono.core.check_box29036.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box29036.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box29036.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29037.length)].join('')));

}
});

sablono.core.check_box29036.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box29036.call(null,name,null);
});

sablono.core.check_box29036.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box29036.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box29036.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18460__auto__ = value;
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box29036.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box29036);
/**
 * Creates a radio button.
 */
sablono.core.radio_button29044 = (function sablono$core$radio_button29044(var_args){
var args29045 = [];
var len__19530__auto___29048 = arguments.length;
var i__19531__auto___29049 = (0);
while(true){
if((i__19531__auto___29049 < len__19530__auto___29048)){
args29045.push((arguments[i__19531__auto___29049]));

var G__29050 = (i__19531__auto___29049 + (1));
i__19531__auto___29049 = G__29050;
continue;
} else {
}
break;
}

var G__29047 = args29045.length;
switch (G__29047) {
case 1:
return sablono.core.radio_button29044.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button29044.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button29044.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29045.length)].join('')));

}
});

sablono.core.radio_button29044.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button29044.call(null,group,null);
});

sablono.core.radio_button29044.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button29044.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button29044.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18460__auto__ = value;
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button29044.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button29044);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options29052 = (function sablono$core$select_options29052(coll){
var iter__19240__auto__ = (function sablono$core$select_options29052_$_iter__29061(s__29062){
return (new cljs.core.LazySeq(null,(function (){
var s__29062__$1 = s__29062;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29062__$1);
if(temp__4657__auto__){
var s__29062__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29062__$2)){
var c__19238__auto__ = cljs.core.chunk_first.call(null,s__29062__$2);
var size__19239__auto__ = cljs.core.count.call(null,c__19238__auto__);
var b__29064 = cljs.core.chunk_buffer.call(null,size__19239__auto__);
if((function (){var i__29063 = (0);
while(true){
if((i__29063 < size__19239__auto__)){
var x = cljs.core._nth.call(null,c__19238__auto__,i__29063);
cljs.core.chunk_append.call(null,b__29064,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__29067 = x;
var text = cljs.core.nth.call(null,vec__29067,(0),null);
var val = cljs.core.nth.call(null,vec__29067,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__29067,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options29052.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__29069 = (i__29063 + (1));
i__29063 = G__29069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29064),sablono$core$select_options29052_$_iter__29061.call(null,cljs.core.chunk_rest.call(null,s__29062__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29064),null);
}
} else {
var x = cljs.core.first.call(null,s__29062__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__29068 = x;
var text = cljs.core.nth.call(null,vec__29068,(0),null);
var val = cljs.core.nth.call(null,vec__29068,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__29068,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options29052.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options29052_$_iter__29061.call(null,cljs.core.rest.call(null,s__29062__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options29052);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down29070 = (function sablono$core$drop_down29070(var_args){
var args29071 = [];
var len__19530__auto___29074 = arguments.length;
var i__19531__auto___29075 = (0);
while(true){
if((i__19531__auto___29075 < len__19530__auto___29074)){
args29071.push((arguments[i__19531__auto___29075]));

var G__29076 = (i__19531__auto___29075 + (1));
i__19531__auto___29075 = G__29076;
continue;
} else {
}
break;
}

var G__29073 = args29071.length;
switch (G__29073) {
case 2:
return sablono.core.drop_down29070.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down29070.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29071.length)].join('')));

}
});

sablono.core.drop_down29070.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down29070.call(null,name,options,null);
});

sablono.core.drop_down29070.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down29070.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down29070);
/**
 * Creates a text area element.
 */
sablono.core.text_area29078 = (function sablono$core$text_area29078(var_args){
var args29079 = [];
var len__19530__auto___29082 = arguments.length;
var i__19531__auto___29083 = (0);
while(true){
if((i__19531__auto___29083 < len__19530__auto___29082)){
args29079.push((arguments[i__19531__auto___29083]));

var G__29084 = (i__19531__auto___29083 + (1));
i__19531__auto___29083 = G__29084;
continue;
} else {
}
break;
}

var G__29081 = args29079.length;
switch (G__29081) {
case 1:
return sablono.core.text_area29078.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area29078.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29079.length)].join('')));

}
});

sablono.core.text_area29078.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area29078.call(null,name,null);
});

sablono.core.text_area29078.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18460__auto__ = value;
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area29078.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area29078);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label29086 = (function sablono$core$label29086(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label29086);
/**
 * Creates a submit button.
 */
sablono.core.submit_button29087 = (function sablono$core$submit_button29087(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button29087);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button29088 = (function sablono$core$reset_button29088(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button29088);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to29089 = (function sablono$core$form_to29089(var_args){
var args__19537__auto__ = [];
var len__19530__auto___29094 = arguments.length;
var i__19531__auto___29095 = (0);
while(true){
if((i__19531__auto___29095 < len__19530__auto___29094)){
args__19537__auto__.push((arguments[i__19531__auto___29095]));

var G__29096 = (i__19531__auto___29095 + (1));
i__19531__auto___29095 = G__29096;
continue;
} else {
}
break;
}

var argseq__19538__auto__ = ((((1) < args__19537__auto__.length))?(new cljs.core.IndexedSeq(args__19537__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to29089.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19538__auto__);
});

sablono.core.form_to29089.cljs$core$IFn$_invoke$arity$variadic = (function (p__29092,body){
var vec__29093 = p__29092;
var method = cljs.core.nth.call(null,vec__29093,(0),null);
var action = cljs.core.nth.call(null,vec__29093,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to29089.cljs$lang$maxFixedArity = (1);

sablono.core.form_to29089.cljs$lang$applyTo = (function (seq29090){
var G__29091 = cljs.core.first.call(null,seq29090);
var seq29090__$1 = cljs.core.next.call(null,seq29090);
return sablono.core.form_to29089.cljs$core$IFn$_invoke$arity$variadic(G__29091,seq29090__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to29089);

//# sourceMappingURL=core.js.map?rel=1470995250829