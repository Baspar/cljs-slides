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
devcards.core.react_element_type_symbol = (function (){var or__18459__auto__ = (function (){var and__18447__auto__ = typeof Symbol !== 'undefined';
if(and__18447__auto__){
var and__18447__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__18447__auto____$1){
var and__18447__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__18447__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__18447__auto____$2;
}
} else {
return and__18447__auto____$1;
}
} else {
return and__18447__auto__;
}
})();
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
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
document.body.addEventListener("figwheel.js-reload",(function (p1__26523_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__26523_SHARP_.detail], null));
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
var args26524 = [];
var len__19529__auto___26527 = arguments.length;
var i__19530__auto___26528 = (0);
while(true){
if((i__19530__auto___26528 < len__19529__auto___26527)){
args26524.push((arguments[i__19530__auto___26528]));

var G__26529 = (i__19530__auto___26528 + (1));
i__19530__auto___26528 = G__26529;
continue;
} else {
}
break;
}

var G__26526 = args26524.length;
switch (G__26526) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26524.length)].join('')));

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
var and__18447__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__18447__auto__){
var map__26537 = c;
var map__26537__$1 = ((((!((map__26537 == null)))?((((map__26537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26537):map__26537);
var path = cljs.core.get.call(null,map__26537__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__26537__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__18447__auto__;
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
var base__25935__auto___26543 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",{"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))},React.createElement("code",{"className": (function (){var or__18459__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return "";
}
})(), "ref": "code-ref"},sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__25935__auto___26543);
}

var seq__26539_26544 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__26540_26545 = null;
var count__26541_26546 = (0);
var i__26542_26547 = (0);
while(true){
if((i__26542_26547 < count__26541_26546)){
var property__25936__auto___26548 = cljs.core._nth.call(null,chunk__26540_26545,i__26542_26547);
if(cljs.core.truth_((base__25935__auto___26543[property__25936__auto___26548]))){
(devcards.core.CodeHighlight.prototype[property__25936__auto___26548] = (base__25935__auto___26543[property__25936__auto___26548]));
} else {
}

var G__26549 = seq__26539_26544;
var G__26550 = chunk__26540_26545;
var G__26551 = count__26541_26546;
var G__26552 = (i__26542_26547 + (1));
seq__26539_26544 = G__26549;
chunk__26540_26545 = G__26550;
count__26541_26546 = G__26551;
i__26542_26547 = G__26552;
continue;
} else {
var temp__4657__auto___26553 = cljs.core.seq.call(null,seq__26539_26544);
if(temp__4657__auto___26553){
var seq__26539_26554__$1 = temp__4657__auto___26553;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26539_26554__$1)){
var c__19270__auto___26555 = cljs.core.chunk_first.call(null,seq__26539_26554__$1);
var G__26556 = cljs.core.chunk_rest.call(null,seq__26539_26554__$1);
var G__26557 = c__19270__auto___26555;
var G__26558 = cljs.core.count.call(null,c__19270__auto___26555);
var G__26559 = (0);
seq__26539_26544 = G__26556;
chunk__26540_26545 = G__26557;
count__26541_26546 = G__26558;
i__26542_26547 = G__26559;
continue;
} else {
var property__25936__auto___26560 = cljs.core.first.call(null,seq__26539_26554__$1);
if(cljs.core.truth_((base__25935__auto___26543[property__25936__auto___26560]))){
(devcards.core.CodeHighlight.prototype[property__25936__auto___26560] = (base__25935__auto___26543[property__25936__auto___26560]));
} else {
}

var G__26561 = cljs.core.next.call(null,seq__26539_26554__$1);
var G__26562 = null;
var G__26563 = (0);
var G__26564 = (0);
seq__26539_26544 = G__26561;
chunk__26540_26545 = G__26562;
count__26541_26546 = G__26563;
i__26542_26547 = G__26564;
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
devcards.core.markdown_block__GT_react = (function (){var method_table__19384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19388__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19388__auto__,method_table__19384__auto__,prefer_table__19385__auto__,method_cache__19386__auto__,cached_hierarchy__19387__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26565){
var map__26566 = p__26565;
var map__26566__$1 = ((((!((map__26566 == null)))?((((map__26566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26566):map__26566);
var content = cljs.core.get.call(null,map__26566__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__26568){
var map__26569 = p__26568;
var map__26569__$1 = ((((!((map__26569 == null)))?((((map__26569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26569):map__26569);
var block = map__26569__$1;
var content = cljs.core.get.call(null,map__26569__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,{"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)});
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__19536__auto__ = [];
var len__19529__auto___26572 = arguments.length;
var i__19530__auto___26573 = (0);
while(true){
if((i__19530__auto___26573 < len__19529__auto___26572)){
args__19536__auto__.push((arguments[i__19530__auto___26573]));

var G__26574 = (i__19530__auto___26573 + (1));
i__19530__auto___26573 = G__26574;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
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

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq26571){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26571));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",{"key": "devcards_naked-card", "className": (function (){var G__26576 = devcards.system.devcards_rendered_card_class;
var G__26576__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__26576),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__26576);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__26576__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__26576__$1;
}
})()},sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args26577 = [];
var len__19529__auto___26585 = arguments.length;
var i__19530__auto___26586 = (0);
while(true){
if((i__19530__auto___26586 < len__19529__auto___26585)){
args26577.push((arguments[i__19530__auto___26586]));

var G__26587 = (i__19530__auto___26586 + (1));
i__19530__auto___26586 = G__26587;
continue;
} else {
}
break;
}

var G__26579 = args26577.length;
switch (G__26579) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26577.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__26580 = card;
var map__26580__$1 = ((((!((map__26580 == null)))?((((map__26580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26580):map__26580);
var path = cljs.core.get.call(null,map__26580__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__26580__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))},sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},React.createElement("div",{"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"},(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__26580,map__26580__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__26580,map__26580__$1,path,options))
)},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs26582 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26582))?sablono.interpreter.attributes.call(null,attrs26582):null),((cljs.core.map_QMARK_.call(null,attrs26582))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26582)], null)));
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
var x__19122__auto__ = (((this$ == null))?null:this$);
var m__19123__auto__ = (devcards.core._devcard_options[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,this$,devcard_opts);
} else {
var m__19123__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,this$,devcard_opts);
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
var x__19122__auto__ = (((this$ == null))?null:this$);
var m__19123__auto__ = (devcards.core._devcard[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,this$,devcard_opts);
} else {
var m__19123__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,this$,devcard_opts);
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
var base__25935__auto___26594 = {"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs26589 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26589))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs26589)):{"className": "com-rigsomelight-dont-update"}),((cljs.core.map_QMARK_.call(null,attrs26589))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26589)], null)));
})};
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__25935__auto___26594);
}

var seq__26590_26595 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__26591_26596 = null;
var count__26592_26597 = (0);
var i__26593_26598 = (0);
while(true){
if((i__26593_26598 < count__26592_26597)){
var property__25936__auto___26599 = cljs.core._nth.call(null,chunk__26591_26596,i__26593_26598);
if(cljs.core.truth_((base__25935__auto___26594[property__25936__auto___26599]))){
(devcards.core.DontUpdate.prototype[property__25936__auto___26599] = (base__25935__auto___26594[property__25936__auto___26599]));
} else {
}

var G__26600 = seq__26590_26595;
var G__26601 = chunk__26591_26596;
var G__26602 = count__26592_26597;
var G__26603 = (i__26593_26598 + (1));
seq__26590_26595 = G__26600;
chunk__26591_26596 = G__26601;
count__26592_26597 = G__26602;
i__26593_26598 = G__26603;
continue;
} else {
var temp__4657__auto___26604 = cljs.core.seq.call(null,seq__26590_26595);
if(temp__4657__auto___26604){
var seq__26590_26605__$1 = temp__4657__auto___26604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26590_26605__$1)){
var c__19270__auto___26606 = cljs.core.chunk_first.call(null,seq__26590_26605__$1);
var G__26607 = cljs.core.chunk_rest.call(null,seq__26590_26605__$1);
var G__26608 = c__19270__auto___26606;
var G__26609 = cljs.core.count.call(null,c__19270__auto___26606);
var G__26610 = (0);
seq__26590_26595 = G__26607;
chunk__26591_26596 = G__26608;
count__26592_26597 = G__26609;
i__26593_26598 = G__26610;
continue;
} else {
var property__25936__auto___26611 = cljs.core.first.call(null,seq__26590_26605__$1);
if(cljs.core.truth_((base__25935__auto___26594[property__25936__auto___26611]))){
(devcards.core.DontUpdate.prototype[property__25936__auto___26611] = (base__25935__auto___26594[property__25936__auto___26611]));
} else {
}

var G__26612 = cljs.core.next.call(null,seq__26590_26605__$1);
var G__26613 = null;
var G__26614 = (0);
var G__26615 = (0);
seq__26590_26595 = G__26612;
chunk__26591_26596 = G__26613;
count__26592_26597 = G__26614;
i__26593_26598 = G__26615;
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
var data = (function (){var or__18459__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
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
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__19293__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__19293__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__19293__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__19293__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19293__auto____$3);
})(),x__19293__auto____$2);
})(),x__19293__auto____$1);
})(),x__19293__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",{"className": "com-rigsomelight-devcards-frameless"},sablono.interpreter.interpret.call(null,children));
}
});
var base__25935__auto___26622 = {"getInitialState": (function (){
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
return this$.setState((function (){var or__18459__auto__ = (function (){var and__18447__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__18447__auto__)){
return this$.state;
} else {
return and__18447__auto__;
}
})();
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
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
if(cljs.core.truth_((function (){var and__18447__auto__ = data_atom;
if(cljs.core.truth_(and__18447__auto__)){
return id;
} else {
return and__18447__auto__;
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
devcards.core.DevcardBase = React.createClass(base__25935__auto___26622);
}

var seq__26618_26623 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__26619_26624 = null;
var count__26620_26625 = (0);
var i__26621_26626 = (0);
while(true){
if((i__26621_26626 < count__26620_26625)){
var property__25936__auto___26627 = cljs.core._nth.call(null,chunk__26619_26624,i__26621_26626);
if(cljs.core.truth_((base__25935__auto___26622[property__25936__auto___26627]))){
(devcards.core.DevcardBase.prototype[property__25936__auto___26627] = (base__25935__auto___26622[property__25936__auto___26627]));
} else {
}

var G__26628 = seq__26618_26623;
var G__26629 = chunk__26619_26624;
var G__26630 = count__26620_26625;
var G__26631 = (i__26621_26626 + (1));
seq__26618_26623 = G__26628;
chunk__26619_26624 = G__26629;
count__26620_26625 = G__26630;
i__26621_26626 = G__26631;
continue;
} else {
var temp__4657__auto___26632 = cljs.core.seq.call(null,seq__26618_26623);
if(temp__4657__auto___26632){
var seq__26618_26633__$1 = temp__4657__auto___26632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26618_26633__$1)){
var c__19270__auto___26634 = cljs.core.chunk_first.call(null,seq__26618_26633__$1);
var G__26635 = cljs.core.chunk_rest.call(null,seq__26618_26633__$1);
var G__26636 = c__19270__auto___26634;
var G__26637 = cljs.core.count.call(null,c__19270__auto___26634);
var G__26638 = (0);
seq__26618_26623 = G__26635;
chunk__26619_26624 = G__26636;
count__26620_26625 = G__26637;
i__26621_26626 = G__26638;
continue;
} else {
var property__25936__auto___26639 = cljs.core.first.call(null,seq__26618_26633__$1);
if(cljs.core.truth_((base__25935__auto___26622[property__25936__auto___26639]))){
(devcards.core.DevcardBase.prototype[property__25936__auto___26639] = (base__25935__auto___26622[property__25936__auto___26639]));
} else {
}

var G__26640 = cljs.core.next.call(null,seq__26618_26633__$1);
var G__26641 = null;
var G__26642 = (0);
var G__26643 = (0);
seq__26618_26623 = G__26640;
chunk__26619_26624 = G__26641;
count__26620_26625 = G__26642;
i__26621_26626 = G__26643;
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
var base__25935__auto___26648 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__18447__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__18447__auto__;
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
devcards.core.DomComponent = React.createClass(base__25935__auto___26648);
}

var seq__26644_26649 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__26645_26650 = null;
var count__26646_26651 = (0);
var i__26647_26652 = (0);
while(true){
if((i__26647_26652 < count__26646_26651)){
var property__25936__auto___26653 = cljs.core._nth.call(null,chunk__26645_26650,i__26647_26652);
if(cljs.core.truth_((base__25935__auto___26648[property__25936__auto___26653]))){
(devcards.core.DomComponent.prototype[property__25936__auto___26653] = (base__25935__auto___26648[property__25936__auto___26653]));
} else {
}

var G__26654 = seq__26644_26649;
var G__26655 = chunk__26645_26650;
var G__26656 = count__26646_26651;
var G__26657 = (i__26647_26652 + (1));
seq__26644_26649 = G__26654;
chunk__26645_26650 = G__26655;
count__26646_26651 = G__26656;
i__26647_26652 = G__26657;
continue;
} else {
var temp__4657__auto___26658 = cljs.core.seq.call(null,seq__26644_26649);
if(temp__4657__auto___26658){
var seq__26644_26659__$1 = temp__4657__auto___26658;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26644_26659__$1)){
var c__19270__auto___26660 = cljs.core.chunk_first.call(null,seq__26644_26659__$1);
var G__26661 = cljs.core.chunk_rest.call(null,seq__26644_26659__$1);
var G__26662 = c__19270__auto___26660;
var G__26663 = cljs.core.count.call(null,c__19270__auto___26660);
var G__26664 = (0);
seq__26644_26649 = G__26661;
chunk__26645_26650 = G__26662;
count__26646_26651 = G__26663;
i__26647_26652 = G__26664;
continue;
} else {
var property__25936__auto___26665 = cljs.core.first.call(null,seq__26644_26659__$1);
if(cljs.core.truth_((base__25935__auto___26648[property__25936__auto___26665]))){
(devcards.core.DomComponent.prototype[property__25936__auto___26665] = (base__25935__auto___26648[property__25936__auto___26665]));
} else {
}

var G__26666 = cljs.core.next.call(null,seq__26644_26659__$1);
var G__26667 = null;
var G__26668 = (0);
var G__26669 = (0);
seq__26644_26649 = G__26666;
chunk__26645_26650 = G__26667;
count__26646_26651 = G__26668;
i__26647_26652 = G__26669;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__18459__auto__ = x === true;
if(or__18459__auto__){
return or__18459__auto__;
} else {
var or__18459__auto____$1 = x === false;
if(or__18459__auto____$1){
return or__18459__auto____$1;
} else {
var or__18459__auto____$2 = (x == null);
if(or__18459__auto____$2){
return or__18459__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__18459__auto__ = typeof x === 'string';
if(or__18459__auto__){
return or__18459__auto__;
} else {
var or__18459__auto____$1 = (x == null);
if(or__18459__auto____$1){
return or__18459__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__18459__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__26670_SHARP_){
return !(p1__26670_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__26679 = opts;
var map__26679__$1 = ((((!((map__26679 == null)))?((((map__26679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26679):map__26679);
var name = cljs.core.get.call(null,map__26679__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__26679__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__26679__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__26679__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__18459__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__18459__auto__){
return or__18459__auto__;
} else {
var or__18459__auto____$1 = (options == null);
if(or__18459__auto____$1){
return or__18459__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__18459__auto__ = (initial_data == null);
if(or__18459__auto__){
return or__18459__auto__;
} else {
var or__18459__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__18459__auto____$1){
return or__18459__auto____$1;
} else {
var or__18459__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__18459__auto____$2){
return or__18459__auto____$2;
} else {
var or__18459__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__18459__auto____$3){
return or__18459__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__26679,map__26679__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__26671_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__26671_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__26679,map__26679__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",{"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}},sablono.interpreter.interpret.call(null,React.createElement("code",{"style": {"flex": "1 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",{"style": {"flex": "3 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",{"style": {"flex": "1 100px"}}," Received: ",(function (){var attrs26687 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs26687))?sablono.interpreter.attributes.call(null,attrs26687):null),((cljs.core.map_QMARK_.call(null,attrs26687))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26687)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",{"className": "com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs26691 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26691))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs26691)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),((cljs.core.map_QMARK_.call(null,attrs26691))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26691)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs26692 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26692))?sablono.interpreter.attributes.call(null,attrs26692):null),((cljs.core.map_QMARK_.call(null,attrs26692))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26692)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs26693 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26693))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs26693)):{"className": "com-rigsomelight-devcards-padding-top-border"}),((cljs.core.map_QMARK_.call(null,attrs26693))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26693)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__26694_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__26694_SHARP_);
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
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19081__auto__,k__19082__auto__){
var self__ = this;
var this__19081__auto____$1 = this;
return cljs.core._lookup.call(null,this__19081__auto____$1,k__19082__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19083__auto__,k26696,else__19084__auto__){
var self__ = this;
var this__19083__auto____$1 = this;
var G__26698 = (((k26696 instanceof cljs.core.Keyword))?k26696.fqn:null);
switch (G__26698) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26696,else__19084__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19095__auto__,writer__19096__auto__,opts__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var pr_pair__19098__auto__ = ((function (this__19095__auto____$1){
return (function (keyval__19099__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19096__auto__,cljs.core.pr_writer,""," ","",opts__19097__auto__,keyval__19099__auto__);
});})(this__19095__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19096__auto__,pr_pair__19098__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__19097__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26695){
var self__ = this;
var G__26695__$1 = this;
return (new cljs.core.RecordIter((0),G__26695__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19079__auto__){
var self__ = this;
var this__19079__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19075__auto__){
var self__ = this;
var this__19075__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19085__auto__){
var self__ = this;
var this__19085__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19076__auto__){
var self__ = this;
var this__19076__auto____$1 = this;
var h__18894__auto__ = self__.__hash;
if(!((h__18894__auto__ == null))){
return h__18894__auto__;
} else {
var h__18894__auto____$1 = cljs.core.hash_imap.call(null,this__19076__auto____$1);
self__.__hash = h__18894__auto____$1;

return h__18894__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19077__auto__,other__19078__auto__){
var self__ = this;
var this__19077__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18447__auto__ = other__19078__auto__;
if(cljs.core.truth_(and__18447__auto__)){
var and__18447__auto____$1 = (this__19077__auto____$1.constructor === other__19078__auto__.constructor);
if(and__18447__auto____$1){
return cljs.core.equiv_map.call(null,this__19077__auto____$1,other__19078__auto__);
} else {
return and__18447__auto____$1;
}
} else {
return and__18447__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19090__auto__,k__19091__auto__){
var self__ = this;
var this__19090__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19091__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19090__auto____$1),self__.__meta),k__19091__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19091__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19088__auto__,k__19089__auto__,G__26695){
var self__ = this;
var this__19088__auto____$1 = this;
var pred__26699 = cljs.core.keyword_identical_QMARK_;
var expr__26700 = k__19089__auto__;
if(cljs.core.truth_(pred__26699.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__26700))){
return (new devcards.core.IdentiyOptions(G__26695,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19089__auto__,G__26695),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19093__auto__){
var self__ = this;
var this__19093__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19080__auto__,G__26695){
var self__ = this;
var this__19080__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__26695,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19086__auto__,entry__19087__auto__){
var self__ = this;
var this__19086__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19087__auto__)){
return cljs.core._assoc.call(null,this__19086__auto____$1,cljs.core._nth.call(null,entry__19087__auto__,(0)),cljs.core._nth.call(null,entry__19087__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19086__auto____$1,entry__19087__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__19115__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__19115__auto__,writer__19116__auto__){
return cljs.core._write.call(null,writer__19116__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__26697){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__26697),null,cljs.core.dissoc.call(null,G__26697,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__26703){
var map__26706 = p__26703;
var map__26706__$1 = ((((!((map__26706 == null)))?((((map__26706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26706):map__26706);
var devcard_opts = map__26706__$1;
var options = cljs.core.get.call(null,map__26706__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__26706,map__26706__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__26706,map__26706__$1,devcard_opts,options))
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
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19081__auto__,k__19082__auto__){
var self__ = this;
var this__19081__auto____$1 = this;
return cljs.core._lookup.call(null,this__19081__auto____$1,k__19082__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19083__auto__,k26709,else__19084__auto__){
var self__ = this;
var this__19083__auto____$1 = this;
var G__26711 = (((k26709 instanceof cljs.core.Keyword))?k26709.fqn:null);
switch (G__26711) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26709,else__19084__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19095__auto__,writer__19096__auto__,opts__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var pr_pair__19098__auto__ = ((function (this__19095__auto____$1){
return (function (keyval__19099__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19096__auto__,cljs.core.pr_writer,""," ","",opts__19097__auto__,keyval__19099__auto__);
});})(this__19095__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19096__auto__,pr_pair__19098__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__19097__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26708){
var self__ = this;
var G__26708__$1 = this;
return (new cljs.core.RecordIter((0),G__26708__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19079__auto__){
var self__ = this;
var this__19079__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19075__auto__){
var self__ = this;
var this__19075__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19085__auto__){
var self__ = this;
var this__19085__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19076__auto__){
var self__ = this;
var this__19076__auto____$1 = this;
var h__18894__auto__ = self__.__hash;
if(!((h__18894__auto__ == null))){
return h__18894__auto__;
} else {
var h__18894__auto____$1 = cljs.core.hash_imap.call(null,this__19076__auto____$1);
self__.__hash = h__18894__auto____$1;

return h__18894__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19077__auto__,other__19078__auto__){
var self__ = this;
var this__19077__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18447__auto__ = other__19078__auto__;
if(cljs.core.truth_(and__18447__auto__)){
var and__18447__auto____$1 = (this__19077__auto____$1.constructor === other__19078__auto__.constructor);
if(and__18447__auto____$1){
return cljs.core.equiv_map.call(null,this__19077__auto____$1,other__19078__auto__);
} else {
return and__18447__auto____$1;
}
} else {
return and__18447__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19090__auto__,k__19091__auto__){
var self__ = this;
var this__19090__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19091__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19090__auto____$1),self__.__meta),k__19091__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19091__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19088__auto__,k__19089__auto__,G__26708){
var self__ = this;
var this__19088__auto____$1 = this;
var pred__26712 = cljs.core.keyword_identical_QMARK_;
var expr__26713 = k__19089__auto__;
if(cljs.core.truth_(pred__26712.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__26713))){
return (new devcards.core.AtomLikeOptions(G__26708,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19089__auto__,G__26708),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19093__auto__){
var self__ = this;
var this__19093__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19080__auto__,G__26708){
var self__ = this;
var this__19080__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__26708,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19086__auto__,entry__19087__auto__){
var self__ = this;
var this__19086__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19087__auto__)){
return cljs.core._assoc.call(null,this__19086__auto____$1,cljs.core._nth.call(null,entry__19087__auto__,(0)),cljs.core._nth.call(null,entry__19087__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19086__auto____$1,entry__19087__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__19115__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__19115__auto__,writer__19116__auto__){
return cljs.core._write.call(null,writer__19116__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__26710){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__26710),null,cljs.core.dissoc.call(null,G__26710,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
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
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19081__auto__,k__19082__auto__){
var self__ = this;
var this__19081__auto____$1 = this;
return cljs.core._lookup.call(null,this__19081__auto____$1,k__19082__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19083__auto__,k26719,else__19084__auto__){
var self__ = this;
var this__19083__auto____$1 = this;
var G__26721 = (((k26719 instanceof cljs.core.Keyword))?k26719.fqn:null);
switch (G__26721) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26719,else__19084__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19095__auto__,writer__19096__auto__,opts__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var pr_pair__19098__auto__ = ((function (this__19095__auto____$1){
return (function (keyval__19099__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19096__auto__,cljs.core.pr_writer,""," ","",opts__19097__auto__,keyval__19099__auto__);
});})(this__19095__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19096__auto__,pr_pair__19098__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__19097__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26718){
var self__ = this;
var G__26718__$1 = this;
return (new cljs.core.RecordIter((0),G__26718__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19079__auto__){
var self__ = this;
var this__19079__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19075__auto__){
var self__ = this;
var this__19075__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19085__auto__){
var self__ = this;
var this__19085__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19076__auto__){
var self__ = this;
var this__19076__auto____$1 = this;
var h__18894__auto__ = self__.__hash;
if(!((h__18894__auto__ == null))){
return h__18894__auto__;
} else {
var h__18894__auto____$1 = cljs.core.hash_imap.call(null,this__19076__auto____$1);
self__.__hash = h__18894__auto____$1;

return h__18894__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19077__auto__,other__19078__auto__){
var self__ = this;
var this__19077__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18447__auto__ = other__19078__auto__;
if(cljs.core.truth_(and__18447__auto__)){
var and__18447__auto____$1 = (this__19077__auto____$1.constructor === other__19078__auto__.constructor);
if(and__18447__auto____$1){
return cljs.core.equiv_map.call(null,this__19077__auto____$1,other__19078__auto__);
} else {
return and__18447__auto____$1;
}
} else {
return and__18447__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19090__auto__,k__19091__auto__){
var self__ = this;
var this__19090__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19091__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19090__auto____$1),self__.__meta),k__19091__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19091__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19088__auto__,k__19089__auto__,G__26718){
var self__ = this;
var this__19088__auto____$1 = this;
var pred__26722 = cljs.core.keyword_identical_QMARK_;
var expr__26723 = k__19089__auto__;
if(cljs.core.truth_(pred__26722.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__26723))){
return (new devcards.core.EdnLikeOptions(G__26718,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19089__auto__,G__26718),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19093__auto__){
var self__ = this;
var this__19093__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19080__auto__,G__26718){
var self__ = this;
var this__19080__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__26718,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19086__auto__,entry__19087__auto__){
var self__ = this;
var this__19086__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19087__auto__)){
return cljs.core._assoc.call(null,this__19086__auto____$1,cljs.core._nth.call(null,entry__19087__auto__,(0)),cljs.core._nth.call(null,entry__19087__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19086__auto____$1,entry__19087__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__19115__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__19115__auto__,writer__19116__auto__){
return cljs.core._write.call(null,writer__19116__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__26720){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__26720),null,cljs.core.dissoc.call(null,G__26720,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__18447__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__18447__auto__){
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
return and__18447__auto__;
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
if((function (){var G__26737 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__26737 == null))){
if((false) || (G__26737.devcards$core$IDevcard$)){
return true;
} else {
if((!G__26737.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__26737);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__26737);
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
var map__26740 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__26740__$1 = ((((!((map__26740 == null)))?((((map__26740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26740):map__26740);
var history = cljs.core.get.call(null,map__26740__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__26740__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__26744 = cljs.core.deref.call(null,history_atom);
var map__26744__$1 = ((((!((map__26744 == null)))?((((map__26744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26744):map__26744);
var history = cljs.core.get.call(null,map__26744__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__26744__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__26748 = cljs.core.deref.call(null,history_atom);
var map__26748__$1 = ((((!((map__26748 == null)))?((((map__26748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26748):map__26748);
var history = cljs.core.get.call(null,map__26748__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__26748__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__26752 = cljs.core.deref.call(null,history_atom);
var map__26752__$1 = ((((!((map__26752 == null)))?((((map__26752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26752):map__26752);
var history = cljs.core.get.call(null,map__26752__$1,new cljs.core.Keyword(null,"history","history",-247395220));
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
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__19293__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19293__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__18447__auto__ = data_atom;
if(cljs.core.truth_(and__18447__auto__)){
return id;
} else {
return and__18447__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__26754){
var map__26755 = p__26754;
var map__26755__$1 = ((((!((map__26755 == null)))?((((map__26755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26755):map__26755);
var ha = map__26755__$1;
var pointer = cljs.core.get.call(null,map__26755__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__26755__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__26755__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
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
if(cljs.core.truth_((function (){var or__18459__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",{"style": {"display": (cljs.core.truth_((function (){var or__18459__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
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
var _STAR_current_env_STAR_26770 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_26770;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__19384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19388__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19388__auto__,method_table__19384__auto__,prefer_table__19385__auto__,method_cache__19386__auto__,cached_hierarchy__19387__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs26771 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26771))?sablono.interpreter.attributes.call(null,attrs26771):null),((cljs.core.map_QMARK_.call(null,attrs26771))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26771)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__26772,body){
var map__26776 = p__26772;
var map__26776__$1 = ((((!((map__26776 == null)))?((((map__26776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26776):map__26776);
var message = cljs.core.get.call(null,map__26776__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs26778 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26778))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs26778)):{"className": "com-rigsomelight-devcards-test-message"}),((cljs.core.map_QMARK_.call(null,attrs26778))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26778)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__26779){
var map__26787 = p__26779;
var map__26787__$1 = ((((!((map__26787 == null)))?((((map__26787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26787):map__26787);
var m = map__26787__$1;
var expected = cljs.core.get.call(null,map__26787__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__26787__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__26787__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs26789 = React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"});
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26789))?sablono.interpreter.attributes.call(null,attrs26789):null),((cljs.core.map_QMARK_.call(null,attrs26789))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26789),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs26796 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs26796))?sablono.interpreter.attributes.call(null,attrs26796):null),((cljs.core.map_QMARK_.call(null,attrs26796))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26796)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs26797 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26797))?sablono.interpreter.attributes.call(null,attrs26797):null),((cljs.core.map_QMARK_.call(null,attrs26797))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26797)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__26798){
var map__26799 = p__26798;
var map__26799__$1 = ((((!((map__26799 == null)))?((((map__26799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26799):map__26799);
var testing_contexts = cljs.core.get.call(null,map__26799__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs26801 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__26799,map__26799__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__26799,map__26799__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__19293__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19293__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26801))?sablono.interpreter.attributes.call(null,attrs26801):null),((cljs.core.map_QMARK_.call(null,attrs26801))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26801)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs26808 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__26809,p__26810){
var map__26811 = p__26809;
var map__26811__$1 = ((((!((map__26811 == null)))?((((map__26811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26811):map__26811);
var last_context = cljs.core.get.call(null,map__26811__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__26811__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__26812 = p__26810;
var i = cljs.core.nth.call(null,vec__26812,(0),null);
var t = cljs.core.nth.call(null,vec__26812,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__19293__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19293__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26808))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs26808)):{"className": "com-rigsomelight-devcards-test-card"}),((cljs.core.map_QMARK_.call(null,attrs26808))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26808)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__26826){
var map__26827 = p__26826;
var map__26827__$1 = ((((!((map__26827 == null)))?((((map__26827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26827):map__26827);
var type = cljs.core.get.call(null,map__26827__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__26825 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__26825__$1 = ((((!((map__26825 == null)))?((((map__26825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26825):map__26825);
var fail = cljs.core.get.call(null,map__26825__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__26825__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__26825__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"},React.createElement("div",{"className": "com-rigsomelight-devcards-panel-heading"},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__26825,map__26825__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__26825,map__26825__$1,fail,pass,error,error__$1))
)},sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",{"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__26825,map__26825__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(error_QMARK_,tests,some_tests,total_tests,map__26825,map__26825__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__26825,map__26825__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__26825,map__26825__$1,fail,pass,error,error__$1){
return (function (p__26830){
var map__26831 = p__26830;
var map__26831__$1 = ((((!((map__26831 == null)))?((((map__26831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26831):map__26831);
var type = cljs.core.get.call(null,map__26831__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__26825,map__26825__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__26825,map__26825__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__26825,map__26825__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__26825,map__26825__$1,fail,pass,error,error__$1){
return (function (p__26833){
var map__26834 = p__26833;
var map__26834__$1 = ((((!((map__26834 == null)))?((((map__26834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26834):map__26834);
var type = cljs.core.get.call(null,map__26834__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__26825,map__26825__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__26825,map__26825__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",{"className": devcards.system.devcards_rendered_card_class},sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__18459__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
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
devcards.core.test_loop = (function (){var c__20626__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto__){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto__){
return (function (state_26922){
var state_val_26923 = (state_26922[(1)]);
if((state_val_26923 === (7))){
var state_26922__$1 = state_26922;
var statearr_26924_26973 = state_26922__$1;
(statearr_26924_26973[(2)] = false);

(statearr_26924_26973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (20))){
var inst_26863 = (state_26922[(7)]);
var inst_26882 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26863);
var state_26922__$1 = state_26922;
var statearr_26925_26974 = state_26922__$1;
(statearr_26925_26974[(2)] = inst_26882);

(statearr_26925_26974[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (27))){
var inst_26887 = (state_26922[(8)]);
var inst_26897 = (state_26922[(9)]);
var inst_26901 = inst_26887.call(null,inst_26897);
var state_26922__$1 = state_26922;
var statearr_26926_26975 = state_26922__$1;
(statearr_26926_26975[(2)] = inst_26901);

(statearr_26926_26975[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (1))){
var state_26922__$1 = state_26922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26922__$1,(2),devcards.core.test_channel);
} else {
if((state_val_26923 === (24))){
var state_26922__$1 = state_26922;
var statearr_26927_26976 = state_26922__$1;
(statearr_26927_26976[(2)] = null);

(statearr_26927_26976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (4))){
var state_26922__$1 = state_26922;
var statearr_26928_26977 = state_26922__$1;
(statearr_26928_26977[(2)] = false);

(statearr_26928_26977[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (15))){
var state_26922__$1 = state_26922;
var statearr_26929_26978 = state_26922__$1;
(statearr_26929_26978[(2)] = false);

(statearr_26929_26978[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (21))){
var inst_26863 = (state_26922[(7)]);
var state_26922__$1 = state_26922;
var statearr_26930_26979 = state_26922__$1;
(statearr_26930_26979[(2)] = inst_26863);

(statearr_26930_26979[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (13))){
var inst_26920 = (state_26922[(2)]);
var state_26922__$1 = state_26922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26922__$1,inst_26920);
} else {
if((state_val_26923 === (22))){
var inst_26886 = (state_26922[(10)]);
var inst_26885 = (state_26922[(2)]);
var inst_26886__$1 = cljs.core.get.call(null,inst_26885,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_26887 = cljs.core.get.call(null,inst_26885,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_26922__$1 = (function (){var statearr_26931 = state_26922;
(statearr_26931[(8)] = inst_26887);

(statearr_26931[(10)] = inst_26886__$1);

return statearr_26931;
})();
if(cljs.core.truth_(inst_26886__$1)){
var statearr_26932_26980 = state_26922__$1;
(statearr_26932_26980[(1)] = (23));

} else {
var statearr_26933_26981 = state_26922__$1;
(statearr_26933_26981[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (29))){
var inst_26911 = (state_26922[(2)]);
var inst_26912 = cljs.test.clear_env_BANG_.call(null);
var state_26922__$1 = (function (){var statearr_26934 = state_26922;
(statearr_26934[(11)] = inst_26912);

(statearr_26934[(12)] = inst_26911);

return statearr_26934;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26922__$1,(30),devcards.core.test_channel);
} else {
if((state_val_26923 === (6))){
var state_26922__$1 = state_26922;
var statearr_26935_26982 = state_26922__$1;
(statearr_26935_26982[(2)] = true);

(statearr_26935_26982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (28))){
var inst_26887 = (state_26922[(8)]);
var inst_26903 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_26904 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_26905 = cljs.core.PersistentHashMap.fromArrays(inst_26903,inst_26904);
var inst_26906 = devcards.core.collect_test.call(null,inst_26905);
var inst_26907 = cljs.test.get_current_env.call(null);
var inst_26908 = cljs.core.assoc.call(null,inst_26907,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_26909 = inst_26887.call(null,inst_26908);
var state_26922__$1 = (function (){var statearr_26936 = state_26922;
(statearr_26936[(13)] = inst_26906);

return statearr_26936;
})();
var statearr_26937_26983 = state_26922__$1;
(statearr_26937_26983[(2)] = inst_26909);

(statearr_26937_26983[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (25))){
var inst_26918 = (state_26922[(2)]);
var state_26922__$1 = state_26922;
var statearr_26938_26984 = state_26922__$1;
(statearr_26938_26984[(2)] = inst_26918);

(statearr_26938_26984[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (17))){
var state_26922__$1 = state_26922;
var statearr_26939_26985 = state_26922__$1;
(statearr_26939_26985[(2)] = true);

(statearr_26939_26985[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (3))){
var inst_26840 = (state_26922[(14)]);
var inst_26845 = inst_26840.cljs$lang$protocol_mask$partition0$;
var inst_26846 = (inst_26845 & (64));
var inst_26847 = inst_26840.cljs$core$ISeq$;
var inst_26848 = (inst_26846) || (inst_26847);
var state_26922__$1 = state_26922;
if(cljs.core.truth_(inst_26848)){
var statearr_26940_26986 = state_26922__$1;
(statearr_26940_26986[(1)] = (6));

} else {
var statearr_26941_26987 = state_26922__$1;
(statearr_26941_26987[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (12))){
var inst_26863 = (state_26922[(7)]);
var inst_26867 = (inst_26863 == null);
var inst_26868 = cljs.core.not.call(null,inst_26867);
var state_26922__$1 = state_26922;
if(inst_26868){
var statearr_26942_26988 = state_26922__$1;
(statearr_26942_26988[(1)] = (14));

} else {
var statearr_26943_26989 = state_26922__$1;
(statearr_26943_26989[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (2))){
var inst_26840 = (state_26922[(14)]);
var inst_26840__$1 = (state_26922[(2)]);
var inst_26842 = (inst_26840__$1 == null);
var inst_26843 = cljs.core.not.call(null,inst_26842);
var state_26922__$1 = (function (){var statearr_26944 = state_26922;
(statearr_26944[(14)] = inst_26840__$1);

return statearr_26944;
})();
if(inst_26843){
var statearr_26945_26990 = state_26922__$1;
(statearr_26945_26990[(1)] = (3));

} else {
var statearr_26946_26991 = state_26922__$1;
(statearr_26946_26991[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (23))){
var inst_26890 = (state_26922[(15)]);
var inst_26886 = (state_26922[(10)]);
var inst_26890__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_26891 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26892 = devcards.core.run_card_tests.call(null,inst_26886);
var inst_26893 = [inst_26892,inst_26890__$1];
var inst_26894 = (new cljs.core.PersistentVector(null,2,(5),inst_26891,inst_26893,null));
var state_26922__$1 = (function (){var statearr_26947 = state_26922;
(statearr_26947[(15)] = inst_26890__$1);

return statearr_26947;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26922__$1,(26),inst_26894);
} else {
if((state_val_26923 === (19))){
var inst_26877 = (state_26922[(2)]);
var state_26922__$1 = state_26922;
var statearr_26948_26992 = state_26922__$1;
(statearr_26948_26992[(2)] = inst_26877);

(statearr_26948_26992[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (11))){
var inst_26840 = (state_26922[(14)]);
var inst_26860 = (state_26922[(2)]);
var inst_26861 = cljs.core.get.call(null,inst_26860,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_26862 = cljs.core.get.call(null,inst_26860,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_26863 = inst_26840;
var state_26922__$1 = (function (){var statearr_26949 = state_26922;
(statearr_26949[(16)] = inst_26861);

(statearr_26949[(7)] = inst_26863);

(statearr_26949[(17)] = inst_26862);

return statearr_26949;
})();
var statearr_26950_26993 = state_26922__$1;
(statearr_26950_26993[(2)] = null);

(statearr_26950_26993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (9))){
var inst_26840 = (state_26922[(14)]);
var inst_26857 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26840);
var state_26922__$1 = state_26922;
var statearr_26951_26994 = state_26922__$1;
(statearr_26951_26994[(2)] = inst_26857);

(statearr_26951_26994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (5))){
var inst_26855 = (state_26922[(2)]);
var state_26922__$1 = state_26922;
if(cljs.core.truth_(inst_26855)){
var statearr_26952_26995 = state_26922__$1;
(statearr_26952_26995[(1)] = (9));

} else {
var statearr_26953_26996 = state_26922__$1;
(statearr_26953_26996[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (14))){
var inst_26863 = (state_26922[(7)]);
var inst_26870 = inst_26863.cljs$lang$protocol_mask$partition0$;
var inst_26871 = (inst_26870 & (64));
var inst_26872 = inst_26863.cljs$core$ISeq$;
var inst_26873 = (inst_26871) || (inst_26872);
var state_26922__$1 = state_26922;
if(cljs.core.truth_(inst_26873)){
var statearr_26954_26997 = state_26922__$1;
(statearr_26954_26997[(1)] = (17));

} else {
var statearr_26955_26998 = state_26922__$1;
(statearr_26955_26998[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (26))){
var inst_26890 = (state_26922[(15)]);
var inst_26896 = (state_26922[(2)]);
var inst_26897 = cljs.core.nth.call(null,inst_26896,(0),null);
var inst_26898 = cljs.core.nth.call(null,inst_26896,(1),null);
var inst_26899 = cljs.core.not_EQ_.call(null,inst_26898,inst_26890);
var state_26922__$1 = (function (){var statearr_26956 = state_26922;
(statearr_26956[(9)] = inst_26897);

return statearr_26956;
})();
if(inst_26899){
var statearr_26957_26999 = state_26922__$1;
(statearr_26957_26999[(1)] = (27));

} else {
var statearr_26958_27000 = state_26922__$1;
(statearr_26958_27000[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (16))){
var inst_26880 = (state_26922[(2)]);
var state_26922__$1 = state_26922;
if(cljs.core.truth_(inst_26880)){
var statearr_26959_27001 = state_26922__$1;
(statearr_26959_27001[(1)] = (20));

} else {
var statearr_26960_27002 = state_26922__$1;
(statearr_26960_27002[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (30))){
var inst_26914 = (state_26922[(2)]);
var inst_26863 = inst_26914;
var state_26922__$1 = (function (){var statearr_26961 = state_26922;
(statearr_26961[(7)] = inst_26863);

return statearr_26961;
})();
var statearr_26962_27003 = state_26922__$1;
(statearr_26962_27003[(2)] = null);

(statearr_26962_27003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (10))){
var inst_26840 = (state_26922[(14)]);
var state_26922__$1 = state_26922;
var statearr_26963_27004 = state_26922__$1;
(statearr_26963_27004[(2)] = inst_26840);

(statearr_26963_27004[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (18))){
var state_26922__$1 = state_26922;
var statearr_26964_27005 = state_26922__$1;
(statearr_26964_27005[(2)] = false);

(statearr_26964_27005[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (8))){
var inst_26852 = (state_26922[(2)]);
var state_26922__$1 = state_26922;
var statearr_26965_27006 = state_26922__$1;
(statearr_26965_27006[(2)] = inst_26852);

(statearr_26965_27006[(1)] = (5));


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
});})(c__20626__auto__))
;
return ((function (switch__20514__auto__,c__20626__auto__){
return (function() {
var devcards$core$state_machine__20515__auto__ = null;
var devcards$core$state_machine__20515__auto____0 = (function (){
var statearr_26969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26969[(0)] = devcards$core$state_machine__20515__auto__);

(statearr_26969[(1)] = (1));

return statearr_26969;
});
var devcards$core$state_machine__20515__auto____1 = (function (state_26922){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_26922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e26970){if((e26970 instanceof Object)){
var ex__20518__auto__ = e26970;
var statearr_26971_27007 = state_26922;
(statearr_26971_27007[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27008 = state_26922;
state_26922 = G__27008;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
devcards$core$state_machine__20515__auto__ = function(state_26922){
switch(arguments.length){
case 0:
return devcards$core$state_machine__20515__auto____0.call(this);
case 1:
return devcards$core$state_machine__20515__auto____1.call(this,state_26922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__20515__auto____0;
devcards$core$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__20515__auto____1;
return devcards$core$state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto__))
})();
var state__20628__auto__ = (function (){var statearr_26972 = f__20627__auto__.call(null);
(statearr_26972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto__);

return statearr_26972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto__))
);

return c__20626__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__25935__auto___27013 = {"componentWillMount": (function (){
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
devcards.core.TestDevcard = React.createClass(base__25935__auto___27013);
}

var seq__27009_27014 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27010_27015 = null;
var count__27011_27016 = (0);
var i__27012_27017 = (0);
while(true){
if((i__27012_27017 < count__27011_27016)){
var property__25936__auto___27018 = cljs.core._nth.call(null,chunk__27010_27015,i__27012_27017);
if(cljs.core.truth_((base__25935__auto___27013[property__25936__auto___27018]))){
(devcards.core.TestDevcard.prototype[property__25936__auto___27018] = (base__25935__auto___27013[property__25936__auto___27018]));
} else {
}

var G__27019 = seq__27009_27014;
var G__27020 = chunk__27010_27015;
var G__27021 = count__27011_27016;
var G__27022 = (i__27012_27017 + (1));
seq__27009_27014 = G__27019;
chunk__27010_27015 = G__27020;
count__27011_27016 = G__27021;
i__27012_27017 = G__27022;
continue;
} else {
var temp__4657__auto___27023 = cljs.core.seq.call(null,seq__27009_27014);
if(temp__4657__auto___27023){
var seq__27009_27024__$1 = temp__4657__auto___27023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27009_27024__$1)){
var c__19270__auto___27025 = cljs.core.chunk_first.call(null,seq__27009_27024__$1);
var G__27026 = cljs.core.chunk_rest.call(null,seq__27009_27024__$1);
var G__27027 = c__19270__auto___27025;
var G__27028 = cljs.core.count.call(null,c__19270__auto___27025);
var G__27029 = (0);
seq__27009_27014 = G__27026;
chunk__27010_27015 = G__27027;
count__27011_27016 = G__27028;
i__27012_27017 = G__27029;
continue;
} else {
var property__25936__auto___27030 = cljs.core.first.call(null,seq__27009_27024__$1);
if(cljs.core.truth_((base__25935__auto___27013[property__25936__auto___27030]))){
(devcards.core.TestDevcard.prototype[property__25936__auto___27030] = (base__25935__auto___27013[property__25936__auto___27030]));
} else {
}

var G__27031 = cljs.core.next.call(null,seq__27009_27024__$1);
var G__27032 = null;
var G__27033 = (0);
var G__27034 = (0);
seq__27009_27014 = G__27031;
chunk__27010_27015 = G__27032;
count__27011_27016 = G__27033;
i__27012_27017 = G__27034;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__19536__auto__ = [];
var len__19529__auto___27039 = arguments.length;
var i__19530__auto___27040 = (0);
while(true){
if((i__19530__auto___27040 < len__19529__auto___27039)){
args__19536__auto__.push((arguments[i__19530__auto___27040]));

var G__27041 = (i__19530__auto___27040 + (1));
i__19530__auto___27040 = G__27041;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core27036 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core27036 = (function (test_thunks,meta27037){
this.test_thunks = test_thunks;
this.meta27037 = meta27037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core27036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27038,meta27037__$1){
var self__ = this;
var _27038__$1 = this;
return (new devcards.core.t_devcards$core27036(self__.test_thunks,meta27037__$1));
});

devcards.core.t_devcards$core27036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27038){
var self__ = this;
var _27038__$1 = this;
return self__.meta27037;
});

devcards.core.t_devcards$core27036.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core27036.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,{"test_thunks": self__.test_thunks, "path": path});
});

devcards.core.t_devcards$core27036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta27037","meta27037",-1612193712,null)], null);
});

devcards.core.t_devcards$core27036.cljs$lang$type = true;

devcards.core.t_devcards$core27036.cljs$lang$ctorStr = "devcards.core/t_devcards$core27036";

devcards.core.t_devcards$core27036.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"devcards.core/t_devcards$core27036");
});

devcards.core.__GT_t_devcards$core27036 = (function devcards$core$__GT_t_devcards$core27036(test_thunks__$1,meta27037){
return (new devcards.core.t_devcards$core27036(test_thunks__$1,meta27037));
});

}

return (new devcards.core.t_devcards$core27036(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq27035){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27035));
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

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs27043 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27043))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs27043)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs27043))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27043)], null)));
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
return React.render((function (){var attrs27045 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27045))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs27045)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs27045))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27045)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__20626__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto__){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto__){
return (function (state_27075){
var state_val_27076 = (state_27075[(1)]);
if((state_val_27076 === (1))){
var inst_27066 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_27075__$1 = state_27075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27075__$1,(2),inst_27066);
} else {
if((state_val_27076 === (2))){
var inst_27068 = (state_27075[(2)]);
var inst_27069 = cljs.core.async.timeout.call(null,(100));
var state_27075__$1 = (function (){var statearr_27077 = state_27075;
(statearr_27077[(7)] = inst_27068);

return statearr_27077;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27075__$1,(3),inst_27069);
} else {
if((state_val_27076 === (3))){
var inst_27071 = (state_27075[(2)]);
var inst_27072 = (function (){return ((function (inst_27071,state_val_27076,c__20626__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_27071,state_val_27076,c__20626__auto__))
})();
var inst_27073 = setTimeout(inst_27072,(0));
var state_27075__$1 = (function (){var statearr_27078 = state_27075;
(statearr_27078[(8)] = inst_27071);

return statearr_27078;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27075__$1,inst_27073);
} else {
return null;
}
}
}
});})(c__20626__auto__))
;
return ((function (switch__20514__auto__,c__20626__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__20515__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__20515__auto____0 = (function (){
var statearr_27082 = [null,null,null,null,null,null,null,null,null];
(statearr_27082[(0)] = devcards$core$mount_namespace_$_state_machine__20515__auto__);

(statearr_27082[(1)] = (1));

return statearr_27082;
});
var devcards$core$mount_namespace_$_state_machine__20515__auto____1 = (function (state_27075){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_27075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e27083){if((e27083 instanceof Object)){
var ex__20518__auto__ = e27083;
var statearr_27084_27086 = state_27075;
(statearr_27084_27086[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27087 = state_27075;
state_27075 = G__27087;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__20515__auto__ = function(state_27075){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__20515__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__20515__auto____1.call(this,state_27075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__20515__auto____0;
devcards$core$mount_namespace_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__20515__auto____1;
return devcards$core$mount_namespace_$_state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto__))
})();
var state__20628__auto__ = (function (){var statearr_27085 = f__20627__auto__.call(null);
(statearr_27085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto__);

return statearr_27085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto__))
);

return c__20626__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1470497436862