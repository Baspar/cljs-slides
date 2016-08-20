// Compiled by ClojureScript 1.8.51 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__18460__auto__ = (function (){var and__18448__auto__ = typeof Symbol !== 'undefined';
if(and__18448__auto__){
var and__18448__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__18448__auto____$1){
var and__18448__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__18448__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__18448__auto____$2;
}
} else {
return and__18448__auto____$1;
}
} else {
return and__18448__auto__;
}
})();
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__26513_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__26513_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args26514 = [];
var len__19530__auto___26517 = arguments.length;
var i__19531__auto___26518 = (0);
while(true){
if((i__19531__auto___26518 < len__19530__auto___26517)){
args26514.push((arguments[i__19531__auto___26518]));

var G__26519 = (i__19531__auto___26518 + (1));
i__19531__auto___26518 = G__26519;
continue;
} else {
}
break;
}

var G__26516 = args26514.length;
switch (G__26516) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26514.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;
devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__18448__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__18448__auto__){
var map__26527 = c;
var map__26527__$1 = ((((!((map__26527 == null)))?((((map__26527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26527):map__26527);
var path = cljs.core.get.call(null,map__26527__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__26527__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__18448__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__25925__auto___26533 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",{"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))},React.createElement("code",{"className": (function (){var or__18460__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return "";
}
})(), "ref": "code-ref"},sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__25925__auto___26533);
}

var seq__26529_26534 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__26530_26535 = null;
var count__26531_26536 = (0);
var i__26532_26537 = (0);
while(true){
if((i__26532_26537 < count__26531_26536)){
var property__25926__auto___26538 = cljs.core._nth.call(null,chunk__26530_26535,i__26532_26537);
if(cljs.core.truth_((base__25925__auto___26533[property__25926__auto___26538]))){
(devcards.core.CodeHighlight.prototype[property__25926__auto___26538] = (base__25925__auto___26533[property__25926__auto___26538]));
} else {
}

var G__26539 = seq__26529_26534;
var G__26540 = chunk__26530_26535;
var G__26541 = count__26531_26536;
var G__26542 = (i__26532_26537 + (1));
seq__26529_26534 = G__26539;
chunk__26530_26535 = G__26540;
count__26531_26536 = G__26541;
i__26532_26537 = G__26542;
continue;
} else {
var temp__4657__auto___26543 = cljs.core.seq.call(null,seq__26529_26534);
if(temp__4657__auto___26543){
var seq__26529_26544__$1 = temp__4657__auto___26543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26529_26544__$1)){
var c__19271__auto___26545 = cljs.core.chunk_first.call(null,seq__26529_26544__$1);
var G__26546 = cljs.core.chunk_rest.call(null,seq__26529_26544__$1);
var G__26547 = c__19271__auto___26545;
var G__26548 = cljs.core.count.call(null,c__19271__auto___26545);
var G__26549 = (0);
seq__26529_26534 = G__26546;
chunk__26530_26535 = G__26547;
count__26531_26536 = G__26548;
i__26532_26537 = G__26549;
continue;
} else {
var property__25926__auto___26550 = cljs.core.first.call(null,seq__26529_26544__$1);
if(cljs.core.truth_((base__25925__auto___26533[property__25926__auto___26550]))){
(devcards.core.CodeHighlight.prototype[property__25926__auto___26550] = (base__25925__auto___26533[property__25926__auto___26550]));
} else {
}

var G__26551 = cljs.core.next.call(null,seq__26529_26544__$1);
var G__26552 = null;
var G__26553 = (0);
var G__26554 = (0);
seq__26529_26534 = G__26551;
chunk__26530_26535 = G__26552;
count__26531_26536 = G__26553;
i__26532_26537 = G__26554;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,{"code": code_str, "lang": lang});
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__19385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19388__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19389__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19389__auto__,method_table__19385__auto__,prefer_table__19386__auto__,method_cache__19387__auto__,cached_hierarchy__19388__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26555){
var map__26556 = p__26555;
var map__26556__$1 = ((((!((map__26556 == null)))?((((map__26556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26556):map__26556);
var content = cljs.core.get.call(null,map__26556__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__26558){
var map__26559 = p__26558;
var map__26559__$1 = ((((!((map__26559 == null)))?((((map__26559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26559):map__26559);
var block = map__26559__$1;
var content = cljs.core.get.call(null,map__26559__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,{"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)});
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__19537__auto__ = [];
var len__19530__auto___26562 = arguments.length;
var i__19531__auto___26563 = (0);
while(true){
if((i__19531__auto___26563 < len__19530__auto___26562)){
args__19537__auto__.push((arguments[i__19531__auto___26563]));

var G__26564 = (i__19531__auto___26563 + (1));
i__19531__auto___26563 = G__26564;
continue;
} else {
}
break;
}

var argseq__19538__auto__ = ((((0) < args__19537__auto__.length))?(new cljs.core.IndexedSeq(args__19537__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__19538__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",{"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"},sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",{"key": i},sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",{"style": {"color": "#a94442"}, "key": "devcards-markdown-error"},sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq26561){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26561));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",{"key": "devcards_naked-card", "className": (function (){var G__26566 = devcards.system.devcards_rendered_card_class;
var G__26566__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__26566),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__26566);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__26566__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__26566__$1;
}
})()},sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args26567 = [];
var len__19530__auto___26575 = arguments.length;
var i__19531__auto___26576 = (0);
while(true){
if((i__19531__auto___26576 < len__19530__auto___26575)){
args26567.push((arguments[i__19531__auto___26576]));

var G__26577 = (i__19531__auto___26576 + (1));
i__19531__auto___26576 = G__26577;
continue;
} else {
}
break;
}

var G__26569 = args26567.length;
switch (G__26569) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26567.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__26570 = card;
var map__26570__$1 = ((((!((map__26570 == null)))?((((map__26570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26570):map__26570);
var path = cljs.core.get.call(null,map__26570__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__26570__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))},sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},React.createElement("div",{"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"},(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__26570,map__26570__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__26570,map__26570__$1,path,options))
)},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs26572 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26572))?sablono.interpreter.attributes.call(null,attrs26572):null),((cljs.core.map_QMARK_.call(null,attrs26572))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26572)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;

/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__19123__auto__ = (((this$ == null))?null:this$);
var m__19124__auto__ = (devcards.core._devcard_options[goog.typeOf(x__19123__auto__)]);
if(!((m__19124__auto__ == null))){
return m__19124__auto__.call(null,this$,devcard_opts);
} else {
var m__19124__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__19124__auto____$1 == null))){
return m__19124__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__19123__auto__ = (((this$ == null))?null:this$);
var m__19124__auto__ = (devcards.core._devcard[goog.typeOf(x__19123__auto__)]);
if(!((m__19124__auto__ == null))){
return m__19124__auto__.call(null,this$,devcard_opts);
} else {
var m__19124__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__19124__auto____$1 == null))){
return m__19124__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__25925__auto___26584 = {"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs26579 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26579))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs26579)):{"className": "com-rigsomelight-dont-update"}),((cljs.core.map_QMARK_.call(null,attrs26579))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26579)], null)));
})};
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__25925__auto___26584);
}

var seq__26580_26585 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__26581_26586 = null;
var count__26582_26587 = (0);
var i__26583_26588 = (0);
while(true){
if((i__26583_26588 < count__26582_26587)){
var property__25926__auto___26589 = cljs.core._nth.call(null,chunk__26581_26586,i__26583_26588);
if(cljs.core.truth_((base__25925__auto___26584[property__25926__auto___26589]))){
(devcards.core.DontUpdate.prototype[property__25926__auto___26589] = (base__25925__auto___26584[property__25926__auto___26589]));
} else {
}

var G__26590 = seq__26580_26585;
var G__26591 = chunk__26581_26586;
var G__26592 = count__26582_26587;
var G__26593 = (i__26583_26588 + (1));
seq__26580_26585 = G__26590;
chunk__26581_26586 = G__26591;
count__26582_26587 = G__26592;
i__26583_26588 = G__26593;
continue;
} else {
var temp__4657__auto___26594 = cljs.core.seq.call(null,seq__26580_26585);
if(temp__4657__auto___26594){
var seq__26580_26595__$1 = temp__4657__auto___26594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26580_26595__$1)){
var c__19271__auto___26596 = cljs.core.chunk_first.call(null,seq__26580_26595__$1);
var G__26597 = cljs.core.chunk_rest.call(null,seq__26580_26595__$1);
var G__26598 = c__19271__auto___26596;
var G__26599 = cljs.core.count.call(null,c__19271__auto___26596);
var G__26600 = (0);
seq__26580_26585 = G__26597;
chunk__26581_26586 = G__26598;
count__26582_26587 = G__26599;
i__26583_26588 = G__26600;
continue;
} else {
var property__25926__auto___26601 = cljs.core.first.call(null,seq__26580_26595__$1);
if(cljs.core.truth_((base__25925__auto___26584[property__25926__auto___26601]))){
(devcards.core.DontUpdate.prototype[property__25926__auto___26601] = (base__25925__auto___26584[property__25926__auto___26601]));
} else {
}

var G__26602 = cljs.core.next.call(null,seq__26580_26595__$1);
var G__26603 = null;
var G__26604 = (0);
var G__26605 = (0);
seq__26580_26585 = G__26602;
chunk__26581_26586 = G__26603;
count__26582_26587 = G__26604;
i__26583_26588 = G__26605;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,{"change_count": change_count, "children_thunk": children_thunk});
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__18460__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",{"key": "devcards-main-section"},sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__19294__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__19294__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__19294__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__19294__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19294__auto____$3);
})(),x__19294__auto____$2);
})(),x__19294__auto____$1);
})(),x__19294__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",{"className": "com-rigsomelight-devcards-frameless"},sablono.interpreter.interpret.call(null,children));
}
});
var base__25925__auto___26612 = {"getInitialState": (function (){
return {"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)};
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__18460__auto__ = (function (){var and__18448__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__18448__auto__)){
return this$.state;
} else {
return and__18448__auto__;
}
})();
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return {"data_atom": devcards.core.wrangle_inital_data.call(null,this$)};
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__18448__auto__ = data_atom;
if(cljs.core.truth_(and__18448__auto__)){
return id;
} else {
return and__18448__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))});
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__25925__auto___26612);
}

var seq__26608_26613 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__26609_26614 = null;
var count__26610_26615 = (0);
var i__26611_26616 = (0);
while(true){
if((i__26611_26616 < count__26610_26615)){
var property__25926__auto___26617 = cljs.core._nth.call(null,chunk__26609_26614,i__26611_26616);
if(cljs.core.truth_((base__25925__auto___26612[property__25926__auto___26617]))){
(devcards.core.DevcardBase.prototype[property__25926__auto___26617] = (base__25925__auto___26612[property__25926__auto___26617]));
} else {
}

var G__26618 = seq__26608_26613;
var G__26619 = chunk__26609_26614;
var G__26620 = count__26610_26615;
var G__26621 = (i__26611_26616 + (1));
seq__26608_26613 = G__26618;
chunk__26609_26614 = G__26619;
count__26610_26615 = G__26620;
i__26611_26616 = G__26621;
continue;
} else {
var temp__4657__auto___26622 = cljs.core.seq.call(null,seq__26608_26613);
if(temp__4657__auto___26622){
var seq__26608_26623__$1 = temp__4657__auto___26622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26608_26623__$1)){
var c__19271__auto___26624 = cljs.core.chunk_first.call(null,seq__26608_26623__$1);
var G__26625 = cljs.core.chunk_rest.call(null,seq__26608_26623__$1);
var G__26626 = c__19271__auto___26624;
var G__26627 = cljs.core.count.call(null,c__19271__auto___26624);
var G__26628 = (0);
seq__26608_26613 = G__26625;
chunk__26609_26614 = G__26626;
count__26610_26615 = G__26627;
i__26611_26616 = G__26628;
continue;
} else {
var property__25926__auto___26629 = cljs.core.first.call(null,seq__26608_26623__$1);
if(cljs.core.truth_((base__25925__auto___26612[property__25926__auto___26629]))){
(devcards.core.DevcardBase.prototype[property__25926__auto___26629] = (base__25925__auto___26612[property__25926__auto___26629]));
} else {
}

var G__26630 = cljs.core.next.call(null,seq__26608_26623__$1);
var G__26631 = null;
var G__26632 = (0);
var G__26633 = (0);
seq__26608_26613 = G__26630;
chunk__26609_26614 = G__26631;
count__26610_26615 = G__26632;
i__26611_26616 = G__26633;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__25925__auto___26638 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__18448__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__18448__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__18448__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))},"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__25925__auto___26638);
}

var seq__26634_26639 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__26635_26640 = null;
var count__26636_26641 = (0);
var i__26637_26642 = (0);
while(true){
if((i__26637_26642 < count__26636_26641)){
var property__25926__auto___26643 = cljs.core._nth.call(null,chunk__26635_26640,i__26637_26642);
if(cljs.core.truth_((base__25925__auto___26638[property__25926__auto___26643]))){
(devcards.core.DomComponent.prototype[property__25926__auto___26643] = (base__25925__auto___26638[property__25926__auto___26643]));
} else {
}

var G__26644 = seq__26634_26639;
var G__26645 = chunk__26635_26640;
var G__26646 = count__26636_26641;
var G__26647 = (i__26637_26642 + (1));
seq__26634_26639 = G__26644;
chunk__26635_26640 = G__26645;
count__26636_26641 = G__26646;
i__26637_26642 = G__26647;
continue;
} else {
var temp__4657__auto___26648 = cljs.core.seq.call(null,seq__26634_26639);
if(temp__4657__auto___26648){
var seq__26634_26649__$1 = temp__4657__auto___26648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26634_26649__$1)){
var c__19271__auto___26650 = cljs.core.chunk_first.call(null,seq__26634_26649__$1);
var G__26651 = cljs.core.chunk_rest.call(null,seq__26634_26649__$1);
var G__26652 = c__19271__auto___26650;
var G__26653 = cljs.core.count.call(null,c__19271__auto___26650);
var G__26654 = (0);
seq__26634_26639 = G__26651;
chunk__26635_26640 = G__26652;
count__26636_26641 = G__26653;
i__26637_26642 = G__26654;
continue;
} else {
var property__25926__auto___26655 = cljs.core.first.call(null,seq__26634_26649__$1);
if(cljs.core.truth_((base__25925__auto___26638[property__25926__auto___26655]))){
(devcards.core.DomComponent.prototype[property__25926__auto___26655] = (base__25925__auto___26638[property__25926__auto___26655]));
} else {
}

var G__26656 = cljs.core.next.call(null,seq__26634_26649__$1);
var G__26657 = null;
var G__26658 = (0);
var G__26659 = (0);
seq__26634_26639 = G__26656;
chunk__26635_26640 = G__26657;
count__26636_26641 = G__26658;
i__26637_26642 = G__26659;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__18460__auto__ = x === true;
if(or__18460__auto__){
return or__18460__auto__;
} else {
var or__18460__auto____$1 = x === false;
if(or__18460__auto____$1){
return or__18460__auto____$1;
} else {
var or__18460__auto____$2 = (x == null);
if(or__18460__auto____$2){
return or__18460__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__18460__auto__ = typeof x === 'string';
if(or__18460__auto__){
return or__18460__auto__;
} else {
var or__18460__auto____$1 = (x == null);
if(or__18460__auto____$1){
return or__18460__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__18460__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__26660_SHARP_){
return !(p1__26660_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__26669 = opts;
var map__26669__$1 = ((((!((map__26669 == null)))?((((map__26669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26669):map__26669);
var name = cljs.core.get.call(null,map__26669__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__26669__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__26669__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__26669__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__18460__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__18460__auto__){
return or__18460__auto__;
} else {
var or__18460__auto____$1 = (options == null);
if(or__18460__auto____$1){
return or__18460__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__18460__auto__ = (initial_data == null);
if(or__18460__auto__){
return or__18460__auto__;
} else {
var or__18460__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__18460__auto____$1){
return or__18460__auto____$1;
} else {
var or__18460__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__18460__auto____$2){
return or__18460__auto____$2;
} else {
var or__18460__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__18460__auto____$3){
return or__18460__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__26669,map__26669__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__26661_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__26661_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__26669,map__26669__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",{"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}},sablono.interpreter.interpret.call(null,React.createElement("code",{"style": {"flex": "1 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",{"style": {"flex": "3 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",{"style": {"flex": "1 100px"}}," Received: ",(function (){var attrs26677 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs26677))?sablono.interpreter.attributes.call(null,attrs26677):null),((cljs.core.map_QMARK_.call(null,attrs26677))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26677)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",{"className": "com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs26681 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26681))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs26681)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),((cljs.core.map_QMARK_.call(null,attrs26681))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26681)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs26682 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26682))?sablono.interpreter.attributes.call(null,attrs26682):null),((cljs.core.map_QMARK_.call(null,attrs26682))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26682)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs26683 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26683))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs26683)):{"className": "com-rigsomelight-devcards-padding-top-border"}),((cljs.core.map_QMARK_.call(null,attrs26683))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26683)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__26684_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__26684_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,{"card": devcards.core.add_environment_defaults.call(null,card_options)});
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19082__auto__,k__19083__auto__){
var self__ = this;
var this__19082__auto____$1 = this;
return cljs.core._lookup.call(null,this__19082__auto____$1,k__19083__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19084__auto__,k26686,else__19085__auto__){
var self__ = this;
var this__19084__auto____$1 = this;
var G__26688 = (((k26686 instanceof cljs.core.Keyword))?k26686.fqn:null);
switch (G__26688) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26686,else__19085__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19096__auto__,writer__19097__auto__,opts__19098__auto__){
var self__ = this;
var this__19096__auto____$1 = this;
var pr_pair__19099__auto__ = ((function (this__19096__auto____$1){
return (function (keyval__19100__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19097__auto__,cljs.core.pr_writer,""," ","",opts__19098__auto__,keyval__19100__auto__);
});})(this__19096__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19097__auto__,pr_pair__19099__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__19098__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26685){
var self__ = this;
var G__26685__$1 = this;
return (new cljs.core.RecordIter((0),G__26685__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19080__auto__){
var self__ = this;
var this__19080__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19076__auto__){
var self__ = this;
var this__19076__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19086__auto__){
var self__ = this;
var this__19086__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19077__auto__){
var self__ = this;
var this__19077__auto____$1 = this;
var h__18895__auto__ = self__.__hash;
if(!((h__18895__auto__ == null))){
return h__18895__auto__;
} else {
var h__18895__auto____$1 = cljs.core.hash_imap.call(null,this__19077__auto____$1);
self__.__hash = h__18895__auto____$1;

return h__18895__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19078__auto__,other__19079__auto__){
var self__ = this;
var this__19078__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18448__auto__ = other__19079__auto__;
if(cljs.core.truth_(and__18448__auto__)){
var and__18448__auto____$1 = (this__19078__auto____$1.constructor === other__19079__auto__.constructor);
if(and__18448__auto____$1){
return cljs.core.equiv_map.call(null,this__19078__auto____$1,other__19079__auto__);
} else {
return and__18448__auto____$1;
}
} else {
return and__18448__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19091__auto__,k__19092__auto__){
var self__ = this;
var this__19091__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19092__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19091__auto____$1),self__.__meta),k__19092__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19092__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19089__auto__,k__19090__auto__,G__26685){
var self__ = this;
var this__19089__auto____$1 = this;
var pred__26689 = cljs.core.keyword_identical_QMARK_;
var expr__26690 = k__19090__auto__;
if(cljs.core.truth_(pred__26689.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__26690))){
return (new devcards.core.IdentiyOptions(G__26685,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19090__auto__,G__26685),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19094__auto__){
var self__ = this;
var this__19094__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19081__auto__,G__26685){
var self__ = this;
var this__19081__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__26685,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19087__auto__,entry__19088__auto__){
var self__ = this;
var this__19087__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19088__auto__)){
return cljs.core._assoc.call(null,this__19087__auto____$1,cljs.core._nth.call(null,entry__19088__auto__,(0)),cljs.core._nth.call(null,entry__19088__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19087__auto____$1,entry__19088__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__19116__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__19116__auto__,writer__19117__auto__){
return cljs.core._write.call(null,writer__19117__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__26687){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__26687),null,cljs.core.dissoc.call(null,G__26687,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__26693){
var map__26696 = p__26693;
var map__26696__$1 = ((((!((map__26696 == null)))?((((map__26696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26696):map__26696);
var devcard_opts = map__26696__$1;
var options = cljs.core.get.call(null,map__26696__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__26696,map__26696__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__26696,map__26696__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19082__auto__,k__19083__auto__){
var self__ = this;
var this__19082__auto____$1 = this;
return cljs.core._lookup.call(null,this__19082__auto____$1,k__19083__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19084__auto__,k26699,else__19085__auto__){
var self__ = this;
var this__19084__auto____$1 = this;
var G__26701 = (((k26699 instanceof cljs.core.Keyword))?k26699.fqn:null);
switch (G__26701) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26699,else__19085__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19096__auto__,writer__19097__auto__,opts__19098__auto__){
var self__ = this;
var this__19096__auto____$1 = this;
var pr_pair__19099__auto__ = ((function (this__19096__auto____$1){
return (function (keyval__19100__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19097__auto__,cljs.core.pr_writer,""," ","",opts__19098__auto__,keyval__19100__auto__);
});})(this__19096__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19097__auto__,pr_pair__19099__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__19098__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26698){
var self__ = this;
var G__26698__$1 = this;
return (new cljs.core.RecordIter((0),G__26698__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19080__auto__){
var self__ = this;
var this__19080__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19076__auto__){
var self__ = this;
var this__19076__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19086__auto__){
var self__ = this;
var this__19086__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19077__auto__){
var self__ = this;
var this__19077__auto____$1 = this;
var h__18895__auto__ = self__.__hash;
if(!((h__18895__auto__ == null))){
return h__18895__auto__;
} else {
var h__18895__auto____$1 = cljs.core.hash_imap.call(null,this__19077__auto____$1);
self__.__hash = h__18895__auto____$1;

return h__18895__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19078__auto__,other__19079__auto__){
var self__ = this;
var this__19078__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18448__auto__ = other__19079__auto__;
if(cljs.core.truth_(and__18448__auto__)){
var and__18448__auto____$1 = (this__19078__auto____$1.constructor === other__19079__auto__.constructor);
if(and__18448__auto____$1){
return cljs.core.equiv_map.call(null,this__19078__auto____$1,other__19079__auto__);
} else {
return and__18448__auto____$1;
}
} else {
return and__18448__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19091__auto__,k__19092__auto__){
var self__ = this;
var this__19091__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19092__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19091__auto____$1),self__.__meta),k__19092__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19092__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19089__auto__,k__19090__auto__,G__26698){
var self__ = this;
var this__19089__auto____$1 = this;
var pred__26702 = cljs.core.keyword_identical_QMARK_;
var expr__26703 = k__19090__auto__;
if(cljs.core.truth_(pred__26702.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__26703))){
return (new devcards.core.AtomLikeOptions(G__26698,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19090__auto__,G__26698),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19094__auto__){
var self__ = this;
var this__19094__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19081__auto__,G__26698){
var self__ = this;
var this__19081__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__26698,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19087__auto__,entry__19088__auto__){
var self__ = this;
var this__19087__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19088__auto__)){
return cljs.core._assoc.call(null,this__19087__auto____$1,cljs.core._nth.call(null,entry__19088__auto__,(0)),cljs.core._nth.call(null,entry__19088__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19087__auto____$1,entry__19088__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__19116__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__19116__auto__,writer__19117__auto__){
return cljs.core._write.call(null,writer__19117__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__26700){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__26700),null,cljs.core.dissoc.call(null,G__26700,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19082__auto__,k__19083__auto__){
var self__ = this;
var this__19082__auto____$1 = this;
return cljs.core._lookup.call(null,this__19082__auto____$1,k__19083__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19084__auto__,k26709,else__19085__auto__){
var self__ = this;
var this__19084__auto____$1 = this;
var G__26711 = (((k26709 instanceof cljs.core.Keyword))?k26709.fqn:null);
switch (G__26711) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26709,else__19085__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19096__auto__,writer__19097__auto__,opts__19098__auto__){
var self__ = this;
var this__19096__auto____$1 = this;
var pr_pair__19099__auto__ = ((function (this__19096__auto____$1){
return (function (keyval__19100__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19097__auto__,cljs.core.pr_writer,""," ","",opts__19098__auto__,keyval__19100__auto__);
});})(this__19096__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19097__auto__,pr_pair__19099__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__19098__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26708){
var self__ = this;
var G__26708__$1 = this;
return (new cljs.core.RecordIter((0),G__26708__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19080__auto__){
var self__ = this;
var this__19080__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19076__auto__){
var self__ = this;
var this__19076__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19086__auto__){
var self__ = this;
var this__19086__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19077__auto__){
var self__ = this;
var this__19077__auto____$1 = this;
var h__18895__auto__ = self__.__hash;
if(!((h__18895__auto__ == null))){
return h__18895__auto__;
} else {
var h__18895__auto____$1 = cljs.core.hash_imap.call(null,this__19077__auto____$1);
self__.__hash = h__18895__auto____$1;

return h__18895__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19078__auto__,other__19079__auto__){
var self__ = this;
var this__19078__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18448__auto__ = other__19079__auto__;
if(cljs.core.truth_(and__18448__auto__)){
var and__18448__auto____$1 = (this__19078__auto____$1.constructor === other__19079__auto__.constructor);
if(and__18448__auto____$1){
return cljs.core.equiv_map.call(null,this__19078__auto____$1,other__19079__auto__);
} else {
return and__18448__auto____$1;
}
} else {
return and__18448__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19091__auto__,k__19092__auto__){
var self__ = this;
var this__19091__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19092__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19091__auto____$1),self__.__meta),k__19092__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19092__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19089__auto__,k__19090__auto__,G__26708){
var self__ = this;
var this__19089__auto____$1 = this;
var pred__26712 = cljs.core.keyword_identical_QMARK_;
var expr__26713 = k__19090__auto__;
if(cljs.core.truth_(pred__26712.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__26713))){
return (new devcards.core.EdnLikeOptions(G__26708,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19090__auto__,G__26708),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19094__auto__){
var self__ = this;
var this__19094__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19081__auto__,G__26708){
var self__ = this;
var this__19081__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__26708,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19087__auto__,entry__19088__auto__){
var self__ = this;
var this__19087__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19088__auto__)){
return cljs.core._assoc.call(null,this__19087__auto____$1,cljs.core._nth.call(null,entry__19088__auto__,(0)),cljs.core._nth.call(null,entry__19088__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19087__auto____$1,entry__19088__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__19116__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__19116__auto__,writer__19117__auto__){
return cljs.core._write.call(null,writer__19117__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__26710){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__26710),null,cljs.core.dissoc.call(null,G__26710,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__18448__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__18448__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__18448__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__26727 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__26727 == null))){
if((false) || (G__26727.devcards$core$IDevcard$)){
return true;
} else {
if((!G__26727.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__26727);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__26727);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,{"node_fn": node_fn, "data_atom": data_atom});
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__26730 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__26730__$1 = ((((!((map__26730 == null)))?((((map__26730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26730):map__26730);
var history = cljs.core.get.call(null,map__26730__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__26730__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__26734 = cljs.core.deref.call(null,history_atom);
var map__26734__$1 = ((((!((map__26734 == null)))?((((map__26734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26734):map__26734);
var history = cljs.core.get.call(null,map__26734__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__26734__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__26738 = cljs.core.deref.call(null,history_atom);
var map__26738__$1 = ((((!((map__26738 == null)))?((((map__26738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26738):map__26738);
var history = cljs.core.get.call(null,map__26738__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__26738__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__26742 = cljs.core.deref.call(null,history_atom);
var map__26742__$1 = ((((!((map__26742 == null)))?((((map__26742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26742):map__26742);
var history = cljs.core.get.call(null,map__26742__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass({"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__19294__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19294__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__18448__auto__ = data_atom;
if(cljs.core.truth_(and__18448__auto__)){
return id;
} else {
return and__18448__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__26744){
var map__26745 = p__26744;
var map__26745__$1 = ((((!((map__26745 == null)))?((((map__26745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26745):map__26745);
var ha = map__26745__$1;
var pointer = cljs.core.get.call(null,map__26745__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__26745__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__26745__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__18460__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",{"style": {"display": (cljs.core.truth_((function (){var or__18460__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"},(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-left"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-stop"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-right"},"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-block"})));
})());
} else {
return null;
}
})});
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,{"data_atom": data_atom, "key": "devcards-history-control-bar"});
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_26760 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_26760;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__19385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19388__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19389__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19389__auto__,method_table__19385__auto__,prefer_table__19386__auto__,method_cache__19387__auto__,cached_hierarchy__19388__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs26761 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26761))?sablono.interpreter.attributes.call(null,attrs26761):null),((cljs.core.map_QMARK_.call(null,attrs26761))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26761)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__26762,body){
var map__26766 = p__26762;
var map__26766__$1 = ((((!((map__26766 == null)))?((((map__26766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26766):map__26766);
var message = cljs.core.get.call(null,map__26766__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs26768 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26768))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs26768)):{"className": "com-rigsomelight-devcards-test-message"}),((cljs.core.map_QMARK_.call(null,attrs26768))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26768)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__26769){
var map__26777 = p__26769;
var map__26777__$1 = ((((!((map__26777 == null)))?((((map__26777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26777):map__26777);
var m = map__26777__$1;
var expected = cljs.core.get.call(null,map__26777__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__26777__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__26777__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs26779 = React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"});
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26779))?sablono.interpreter.attributes.call(null,attrs26779):null),((cljs.core.map_QMARK_.call(null,attrs26779))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26779),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs26786 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs26786))?sablono.interpreter.attributes.call(null,attrs26786):null),((cljs.core.map_QMARK_.call(null,attrs26786))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26786)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs26787 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26787))?sablono.interpreter.attributes.call(null,attrs26787):null),((cljs.core.map_QMARK_.call(null,attrs26787))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26787)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__26788){
var map__26789 = p__26788;
var map__26789__$1 = ((((!((map__26789 == null)))?((((map__26789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26789):map__26789);
var testing_contexts = cljs.core.get.call(null,map__26789__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs26791 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__26789,map__26789__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__26789,map__26789__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__19294__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19294__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26791))?sablono.interpreter.attributes.call(null,attrs26791):null),((cljs.core.map_QMARK_.call(null,attrs26791))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26791)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs26798 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__26799,p__26800){
var map__26801 = p__26799;
var map__26801__$1 = ((((!((map__26801 == null)))?((((map__26801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26801):map__26801);
var last_context = cljs.core.get.call(null,map__26801__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__26801__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__26802 = p__26800;
var i = cljs.core.nth.call(null,vec__26802,(0),null);
var t = cljs.core.nth.call(null,vec__26802,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__19294__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19294__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26798))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs26798)):{"className": "com-rigsomelight-devcards-test-card"}),((cljs.core.map_QMARK_.call(null,attrs26798))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26798)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__26816){
var map__26817 = p__26816;
var map__26817__$1 = ((((!((map__26817 == null)))?((((map__26817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26817):map__26817);
var type = cljs.core.get.call(null,map__26817__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__26815 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__26815__$1 = ((((!((map__26815 == null)))?((((map__26815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26815):map__26815);
var fail = cljs.core.get.call(null,map__26815__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__26815__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__26815__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"},React.createElement("div",{"className": "com-rigsomelight-devcards-panel-heading"},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__26815,map__26815__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__26815,map__26815__$1,fail,pass,error,error__$1))
)},sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",{"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__26815,map__26815__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(error_QMARK_,tests,some_tests,total_tests,map__26815,map__26815__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__26815,map__26815__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__26815,map__26815__$1,fail,pass,error,error__$1){
return (function (p__26820){
var map__26821 = p__26820;
var map__26821__$1 = ((((!((map__26821 == null)))?((((map__26821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26821):map__26821);
var type = cljs.core.get.call(null,map__26821__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__26815,map__26815__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__26815,map__26815__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__26815,map__26815__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__26815,map__26815__$1,fail,pass,error,error__$1){
return (function (p__26823){
var map__26824 = p__26823;
var map__26824__$1 = ((((!((map__26824 == null)))?((((map__26824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26824):map__26824);
var type = cljs.core.get.call(null,map__26824__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__26815,map__26815__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__26815,map__26815__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",{"className": devcards.system.devcards_rendered_card_class},sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__18460__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__22651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto__){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto__){
return (function (state_26912){
var state_val_26913 = (state_26912[(1)]);
if((state_val_26913 === (7))){
var state_26912__$1 = state_26912;
var statearr_26914_26963 = state_26912__$1;
(statearr_26914_26963[(2)] = false);

(statearr_26914_26963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (20))){
var inst_26853 = (state_26912[(7)]);
var inst_26872 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26853);
var state_26912__$1 = state_26912;
var statearr_26915_26964 = state_26912__$1;
(statearr_26915_26964[(2)] = inst_26872);

(statearr_26915_26964[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (27))){
var inst_26887 = (state_26912[(8)]);
var inst_26877 = (state_26912[(9)]);
var inst_26891 = inst_26877.call(null,inst_26887);
var state_26912__$1 = state_26912;
var statearr_26916_26965 = state_26912__$1;
(statearr_26916_26965[(2)] = inst_26891);

(statearr_26916_26965[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (1))){
var state_26912__$1 = state_26912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26912__$1,(2),devcards.core.test_channel);
} else {
if((state_val_26913 === (24))){
var state_26912__$1 = state_26912;
var statearr_26917_26966 = state_26912__$1;
(statearr_26917_26966[(2)] = null);

(statearr_26917_26966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (4))){
var state_26912__$1 = state_26912;
var statearr_26918_26967 = state_26912__$1;
(statearr_26918_26967[(2)] = false);

(statearr_26918_26967[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (15))){
var state_26912__$1 = state_26912;
var statearr_26919_26968 = state_26912__$1;
(statearr_26919_26968[(2)] = false);

(statearr_26919_26968[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (21))){
var inst_26853 = (state_26912[(7)]);
var state_26912__$1 = state_26912;
var statearr_26920_26969 = state_26912__$1;
(statearr_26920_26969[(2)] = inst_26853);

(statearr_26920_26969[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (13))){
var inst_26910 = (state_26912[(2)]);
var state_26912__$1 = state_26912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26912__$1,inst_26910);
} else {
if((state_val_26913 === (22))){
var inst_26876 = (state_26912[(10)]);
var inst_26875 = (state_26912[(2)]);
var inst_26876__$1 = cljs.core.get.call(null,inst_26875,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_26877 = cljs.core.get.call(null,inst_26875,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_26912__$1 = (function (){var statearr_26921 = state_26912;
(statearr_26921[(10)] = inst_26876__$1);

(statearr_26921[(9)] = inst_26877);

return statearr_26921;
})();
if(cljs.core.truth_(inst_26876__$1)){
var statearr_26922_26970 = state_26912__$1;
(statearr_26922_26970[(1)] = (23));

} else {
var statearr_26923_26971 = state_26912__$1;
(statearr_26923_26971[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (29))){
var inst_26901 = (state_26912[(2)]);
var inst_26902 = cljs.test.clear_env_BANG_.call(null);
var state_26912__$1 = (function (){var statearr_26924 = state_26912;
(statearr_26924[(11)] = inst_26901);

(statearr_26924[(12)] = inst_26902);

return statearr_26924;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26912__$1,(30),devcards.core.test_channel);
} else {
if((state_val_26913 === (6))){
var state_26912__$1 = state_26912;
var statearr_26925_26972 = state_26912__$1;
(statearr_26925_26972[(2)] = true);

(statearr_26925_26972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (28))){
var inst_26877 = (state_26912[(9)]);
var inst_26893 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_26894 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_26895 = cljs.core.PersistentHashMap.fromArrays(inst_26893,inst_26894);
var inst_26896 = devcards.core.collect_test.call(null,inst_26895);
var inst_26897 = cljs.test.get_current_env.call(null);
var inst_26898 = cljs.core.assoc.call(null,inst_26897,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_26899 = inst_26877.call(null,inst_26898);
var state_26912__$1 = (function (){var statearr_26926 = state_26912;
(statearr_26926[(13)] = inst_26896);

return statearr_26926;
})();
var statearr_26927_26973 = state_26912__$1;
(statearr_26927_26973[(2)] = inst_26899);

(statearr_26927_26973[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (25))){
var inst_26908 = (state_26912[(2)]);
var state_26912__$1 = state_26912;
var statearr_26928_26974 = state_26912__$1;
(statearr_26928_26974[(2)] = inst_26908);

(statearr_26928_26974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (17))){
var state_26912__$1 = state_26912;
var statearr_26929_26975 = state_26912__$1;
(statearr_26929_26975[(2)] = true);

(statearr_26929_26975[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (3))){
var inst_26830 = (state_26912[(14)]);
var inst_26835 = inst_26830.cljs$lang$protocol_mask$partition0$;
var inst_26836 = (inst_26835 & (64));
var inst_26837 = inst_26830.cljs$core$ISeq$;
var inst_26838 = (inst_26836) || (inst_26837);
var state_26912__$1 = state_26912;
if(cljs.core.truth_(inst_26838)){
var statearr_26930_26976 = state_26912__$1;
(statearr_26930_26976[(1)] = (6));

} else {
var statearr_26931_26977 = state_26912__$1;
(statearr_26931_26977[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (12))){
var inst_26853 = (state_26912[(7)]);
var inst_26857 = (inst_26853 == null);
var inst_26858 = cljs.core.not.call(null,inst_26857);
var state_26912__$1 = state_26912;
if(inst_26858){
var statearr_26932_26978 = state_26912__$1;
(statearr_26932_26978[(1)] = (14));

} else {
var statearr_26933_26979 = state_26912__$1;
(statearr_26933_26979[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (2))){
var inst_26830 = (state_26912[(14)]);
var inst_26830__$1 = (state_26912[(2)]);
var inst_26832 = (inst_26830__$1 == null);
var inst_26833 = cljs.core.not.call(null,inst_26832);
var state_26912__$1 = (function (){var statearr_26934 = state_26912;
(statearr_26934[(14)] = inst_26830__$1);

return statearr_26934;
})();
if(inst_26833){
var statearr_26935_26980 = state_26912__$1;
(statearr_26935_26980[(1)] = (3));

} else {
var statearr_26936_26981 = state_26912__$1;
(statearr_26936_26981[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (23))){
var inst_26876 = (state_26912[(10)]);
var inst_26880 = (state_26912[(15)]);
var inst_26880__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_26881 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26882 = devcards.core.run_card_tests.call(null,inst_26876);
var inst_26883 = [inst_26882,inst_26880__$1];
var inst_26884 = (new cljs.core.PersistentVector(null,2,(5),inst_26881,inst_26883,null));
var state_26912__$1 = (function (){var statearr_26937 = state_26912;
(statearr_26937[(15)] = inst_26880__$1);

return statearr_26937;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26912__$1,(26),inst_26884);
} else {
if((state_val_26913 === (19))){
var inst_26867 = (state_26912[(2)]);
var state_26912__$1 = state_26912;
var statearr_26938_26982 = state_26912__$1;
(statearr_26938_26982[(2)] = inst_26867);

(statearr_26938_26982[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (11))){
var inst_26830 = (state_26912[(14)]);
var inst_26850 = (state_26912[(2)]);
var inst_26851 = cljs.core.get.call(null,inst_26850,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_26852 = cljs.core.get.call(null,inst_26850,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_26853 = inst_26830;
var state_26912__$1 = (function (){var statearr_26939 = state_26912;
(statearr_26939[(7)] = inst_26853);

(statearr_26939[(16)] = inst_26851);

(statearr_26939[(17)] = inst_26852);

return statearr_26939;
})();
var statearr_26940_26983 = state_26912__$1;
(statearr_26940_26983[(2)] = null);

(statearr_26940_26983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (9))){
var inst_26830 = (state_26912[(14)]);
var inst_26847 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26830);
var state_26912__$1 = state_26912;
var statearr_26941_26984 = state_26912__$1;
(statearr_26941_26984[(2)] = inst_26847);

(statearr_26941_26984[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (5))){
var inst_26845 = (state_26912[(2)]);
var state_26912__$1 = state_26912;
if(cljs.core.truth_(inst_26845)){
var statearr_26942_26985 = state_26912__$1;
(statearr_26942_26985[(1)] = (9));

} else {
var statearr_26943_26986 = state_26912__$1;
(statearr_26943_26986[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (14))){
var inst_26853 = (state_26912[(7)]);
var inst_26860 = inst_26853.cljs$lang$protocol_mask$partition0$;
var inst_26861 = (inst_26860 & (64));
var inst_26862 = inst_26853.cljs$core$ISeq$;
var inst_26863 = (inst_26861) || (inst_26862);
var state_26912__$1 = state_26912;
if(cljs.core.truth_(inst_26863)){
var statearr_26944_26987 = state_26912__$1;
(statearr_26944_26987[(1)] = (17));

} else {
var statearr_26945_26988 = state_26912__$1;
(statearr_26945_26988[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (26))){
var inst_26880 = (state_26912[(15)]);
var inst_26886 = (state_26912[(2)]);
var inst_26887 = cljs.core.nth.call(null,inst_26886,(0),null);
var inst_26888 = cljs.core.nth.call(null,inst_26886,(1),null);
var inst_26889 = cljs.core.not_EQ_.call(null,inst_26888,inst_26880);
var state_26912__$1 = (function (){var statearr_26946 = state_26912;
(statearr_26946[(8)] = inst_26887);

return statearr_26946;
})();
if(inst_26889){
var statearr_26947_26989 = state_26912__$1;
(statearr_26947_26989[(1)] = (27));

} else {
var statearr_26948_26990 = state_26912__$1;
(statearr_26948_26990[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (16))){
var inst_26870 = (state_26912[(2)]);
var state_26912__$1 = state_26912;
if(cljs.core.truth_(inst_26870)){
var statearr_26949_26991 = state_26912__$1;
(statearr_26949_26991[(1)] = (20));

} else {
var statearr_26950_26992 = state_26912__$1;
(statearr_26950_26992[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (30))){
var inst_26904 = (state_26912[(2)]);
var inst_26853 = inst_26904;
var state_26912__$1 = (function (){var statearr_26951 = state_26912;
(statearr_26951[(7)] = inst_26853);

return statearr_26951;
})();
var statearr_26952_26993 = state_26912__$1;
(statearr_26952_26993[(2)] = null);

(statearr_26952_26993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (10))){
var inst_26830 = (state_26912[(14)]);
var state_26912__$1 = state_26912;
var statearr_26953_26994 = state_26912__$1;
(statearr_26953_26994[(2)] = inst_26830);

(statearr_26953_26994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (18))){
var state_26912__$1 = state_26912;
var statearr_26954_26995 = state_26912__$1;
(statearr_26954_26995[(2)] = false);

(statearr_26954_26995[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (8))){
var inst_26842 = (state_26912[(2)]);
var state_26912__$1 = state_26912;
var statearr_26955_26996 = state_26912__$1;
(statearr_26955_26996[(2)] = inst_26842);

(statearr_26955_26996[(1)] = (5));


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
});})(c__22651__auto__))
;
return ((function (switch__20473__auto__,c__22651__auto__){
return (function() {
var devcards$core$state_machine__20474__auto__ = null;
var devcards$core$state_machine__20474__auto____0 = (function (){
var statearr_26959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26959[(0)] = devcards$core$state_machine__20474__auto__);

(statearr_26959[(1)] = (1));

return statearr_26959;
});
var devcards$core$state_machine__20474__auto____1 = (function (state_26912){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_26912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e26960){if((e26960 instanceof Object)){
var ex__20477__auto__ = e26960;
var statearr_26961_26997 = state_26912;
(statearr_26961_26997[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26998 = state_26912;
state_26912 = G__26998;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
devcards$core$state_machine__20474__auto__ = function(state_26912){
switch(arguments.length){
case 0:
return devcards$core$state_machine__20474__auto____0.call(this);
case 1:
return devcards$core$state_machine__20474__auto____1.call(this,state_26912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__20474__auto____0;
devcards$core$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__20474__auto____1;
return devcards$core$state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto__))
})();
var state__22653__auto__ = (function (){var statearr_26962 = f__22652__auto__.call(null);
(statearr_26962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto__);

return statearr_26962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto__))
);

return c__22651__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__25925__auto___27003 = {"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})};
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__25925__auto___27003);
}

var seq__26999_27004 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27000_27005 = null;
var count__27001_27006 = (0);
var i__27002_27007 = (0);
while(true){
if((i__27002_27007 < count__27001_27006)){
var property__25926__auto___27008 = cljs.core._nth.call(null,chunk__27000_27005,i__27002_27007);
if(cljs.core.truth_((base__25925__auto___27003[property__25926__auto___27008]))){
(devcards.core.TestDevcard.prototype[property__25926__auto___27008] = (base__25925__auto___27003[property__25926__auto___27008]));
} else {
}

var G__27009 = seq__26999_27004;
var G__27010 = chunk__27000_27005;
var G__27011 = count__27001_27006;
var G__27012 = (i__27002_27007 + (1));
seq__26999_27004 = G__27009;
chunk__27000_27005 = G__27010;
count__27001_27006 = G__27011;
i__27002_27007 = G__27012;
continue;
} else {
var temp__4657__auto___27013 = cljs.core.seq.call(null,seq__26999_27004);
if(temp__4657__auto___27013){
var seq__26999_27014__$1 = temp__4657__auto___27013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26999_27014__$1)){
var c__19271__auto___27015 = cljs.core.chunk_first.call(null,seq__26999_27014__$1);
var G__27016 = cljs.core.chunk_rest.call(null,seq__26999_27014__$1);
var G__27017 = c__19271__auto___27015;
var G__27018 = cljs.core.count.call(null,c__19271__auto___27015);
var G__27019 = (0);
seq__26999_27004 = G__27016;
chunk__27000_27005 = G__27017;
count__27001_27006 = G__27018;
i__27002_27007 = G__27019;
continue;
} else {
var property__25926__auto___27020 = cljs.core.first.call(null,seq__26999_27014__$1);
if(cljs.core.truth_((base__25925__auto___27003[property__25926__auto___27020]))){
(devcards.core.TestDevcard.prototype[property__25926__auto___27020] = (base__25925__auto___27003[property__25926__auto___27020]));
} else {
}

var G__27021 = cljs.core.next.call(null,seq__26999_27014__$1);
var G__27022 = null;
var G__27023 = (0);
var G__27024 = (0);
seq__26999_27004 = G__27021;
chunk__27000_27005 = G__27022;
count__27001_27006 = G__27023;
i__27002_27007 = G__27024;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__19537__auto__ = [];
var len__19530__auto___27029 = arguments.length;
var i__19531__auto___27030 = (0);
while(true){
if((i__19531__auto___27030 < len__19530__auto___27029)){
args__19537__auto__.push((arguments[i__19531__auto___27030]));

var G__27031 = (i__19531__auto___27030 + (1));
i__19531__auto___27030 = G__27031;
continue;
} else {
}
break;
}

var argseq__19538__auto__ = ((((0) < args__19537__auto__.length))?(new cljs.core.IndexedSeq(args__19537__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__19538__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core27026 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core27026 = (function (test_thunks,meta27027){
this.test_thunks = test_thunks;
this.meta27027 = meta27027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core27026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27028,meta27027__$1){
var self__ = this;
var _27028__$1 = this;
return (new devcards.core.t_devcards$core27026(self__.test_thunks,meta27027__$1));
});

devcards.core.t_devcards$core27026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27028){
var self__ = this;
var _27028__$1 = this;
return self__.meta27027;
});

devcards.core.t_devcards$core27026.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core27026.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,{"test_thunks": self__.test_thunks, "path": path});
});

devcards.core.t_devcards$core27026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta27027","meta27027",-93182215,null)], null);
});

devcards.core.t_devcards$core27026.cljs$lang$type = true;

devcards.core.t_devcards$core27026.cljs$lang$ctorStr = "devcards.core/t_devcards$core27026";

devcards.core.t_devcards$core27026.cljs$lang$ctorPrWriter = (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"devcards.core/t_devcards$core27026");
});

devcards.core.__GT_t_devcards$core27026 = (function devcards$core$__GT_t_devcards$core27026(test_thunks__$1,meta27027){
return (new devcards.core.t_devcards$core27026(test_thunks__$1,meta27027));
});

}

return (new devcards.core.t_devcards$core27026(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq27025){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27025));
});
devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs27033 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27033))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs27033)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs27033))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27033)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs27035 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27035))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs27035)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs27035))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27035)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__22651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto__){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto__){
return (function (state_27065){
var state_val_27066 = (state_27065[(1)]);
if((state_val_27066 === (1))){
var inst_27056 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_27065__$1 = state_27065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27065__$1,(2),inst_27056);
} else {
if((state_val_27066 === (2))){
var inst_27058 = (state_27065[(2)]);
var inst_27059 = cljs.core.async.timeout.call(null,(100));
var state_27065__$1 = (function (){var statearr_27067 = state_27065;
(statearr_27067[(7)] = inst_27058);

return statearr_27067;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27065__$1,(3),inst_27059);
} else {
if((state_val_27066 === (3))){
var inst_27061 = (state_27065[(2)]);
var inst_27062 = (function (){return ((function (inst_27061,state_val_27066,c__22651__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_27061,state_val_27066,c__22651__auto__))
})();
var inst_27063 = setTimeout(inst_27062,(0));
var state_27065__$1 = (function (){var statearr_27068 = state_27065;
(statearr_27068[(8)] = inst_27061);

return statearr_27068;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27065__$1,inst_27063);
} else {
return null;
}
}
}
});})(c__22651__auto__))
;
return ((function (switch__20473__auto__,c__22651__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__20474__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__20474__auto____0 = (function (){
var statearr_27072 = [null,null,null,null,null,null,null,null,null];
(statearr_27072[(0)] = devcards$core$mount_namespace_$_state_machine__20474__auto__);

(statearr_27072[(1)] = (1));

return statearr_27072;
});
var devcards$core$mount_namespace_$_state_machine__20474__auto____1 = (function (state_27065){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_27065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e27073){if((e27073 instanceof Object)){
var ex__20477__auto__ = e27073;
var statearr_27074_27076 = state_27065;
(statearr_27074_27076[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27077 = state_27065;
state_27065 = G__27077;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__20474__auto__ = function(state_27065){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__20474__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__20474__auto____1.call(this,state_27065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__20474__auto____0;
devcards$core$mount_namespace_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__20474__auto____1;
return devcards$core$mount_namespace_$_state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto__))
})();
var state__22653__auto__ = (function (){var statearr_27075 = f__22652__auto__.call(null);
(statearr_27075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto__);

return statearr_27075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto__))
);

return c__22651__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1470998057701