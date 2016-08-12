// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19537__auto__ = [];
var len__19530__auto___30252 = arguments.length;
var i__19531__auto___30253 = (0);
while(true){
if((i__19531__auto___30253 < len__19530__auto___30252)){
args__19537__auto__.push((arguments[i__19531__auto___30253]));

var G__30254 = (i__19531__auto___30253 + (1));
i__19531__auto___30253 = G__30254;
continue;
} else {
}
break;
}

var argseq__19538__auto__ = ((((2) < args__19537__auto__.length))?(new cljs.core.IndexedSeq(args__19537__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19538__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__30244_30255 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30245_30256 = null;
var count__30246_30257 = (0);
var i__30247_30258 = (0);
while(true){
if((i__30247_30258 < count__30246_30257)){
var k_30259 = cljs.core._nth.call(null,chunk__30245_30256,i__30247_30258);
e.setAttribute(cljs.core.name.call(null,k_30259),cljs.core.get.call(null,attrs,k_30259));

var G__30260 = seq__30244_30255;
var G__30261 = chunk__30245_30256;
var G__30262 = count__30246_30257;
var G__30263 = (i__30247_30258 + (1));
seq__30244_30255 = G__30260;
chunk__30245_30256 = G__30261;
count__30246_30257 = G__30262;
i__30247_30258 = G__30263;
continue;
} else {
var temp__4657__auto___30264 = cljs.core.seq.call(null,seq__30244_30255);
if(temp__4657__auto___30264){
var seq__30244_30265__$1 = temp__4657__auto___30264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30244_30265__$1)){
var c__19271__auto___30266 = cljs.core.chunk_first.call(null,seq__30244_30265__$1);
var G__30267 = cljs.core.chunk_rest.call(null,seq__30244_30265__$1);
var G__30268 = c__19271__auto___30266;
var G__30269 = cljs.core.count.call(null,c__19271__auto___30266);
var G__30270 = (0);
seq__30244_30255 = G__30267;
chunk__30245_30256 = G__30268;
count__30246_30257 = G__30269;
i__30247_30258 = G__30270;
continue;
} else {
var k_30271 = cljs.core.first.call(null,seq__30244_30265__$1);
e.setAttribute(cljs.core.name.call(null,k_30271),cljs.core.get.call(null,attrs,k_30271));

var G__30272 = cljs.core.next.call(null,seq__30244_30265__$1);
var G__30273 = null;
var G__30274 = (0);
var G__30275 = (0);
seq__30244_30255 = G__30272;
chunk__30245_30256 = G__30273;
count__30246_30257 = G__30274;
i__30247_30258 = G__30275;
continue;
}
} else {
}
}
break;
}

var seq__30248_30276 = cljs.core.seq.call(null,children);
var chunk__30249_30277 = null;
var count__30250_30278 = (0);
var i__30251_30279 = (0);
while(true){
if((i__30251_30279 < count__30250_30278)){
var ch_30280 = cljs.core._nth.call(null,chunk__30249_30277,i__30251_30279);
e.appendChild(ch_30280);

var G__30281 = seq__30248_30276;
var G__30282 = chunk__30249_30277;
var G__30283 = count__30250_30278;
var G__30284 = (i__30251_30279 + (1));
seq__30248_30276 = G__30281;
chunk__30249_30277 = G__30282;
count__30250_30278 = G__30283;
i__30251_30279 = G__30284;
continue;
} else {
var temp__4657__auto___30285 = cljs.core.seq.call(null,seq__30248_30276);
if(temp__4657__auto___30285){
var seq__30248_30286__$1 = temp__4657__auto___30285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30248_30286__$1)){
var c__19271__auto___30287 = cljs.core.chunk_first.call(null,seq__30248_30286__$1);
var G__30288 = cljs.core.chunk_rest.call(null,seq__30248_30286__$1);
var G__30289 = c__19271__auto___30287;
var G__30290 = cljs.core.count.call(null,c__19271__auto___30287);
var G__30291 = (0);
seq__30248_30276 = G__30288;
chunk__30249_30277 = G__30289;
count__30250_30278 = G__30290;
i__30251_30279 = G__30291;
continue;
} else {
var ch_30292 = cljs.core.first.call(null,seq__30248_30286__$1);
e.appendChild(ch_30292);

var G__30293 = cljs.core.next.call(null,seq__30248_30286__$1);
var G__30294 = null;
var G__30295 = (0);
var G__30296 = (0);
seq__30248_30276 = G__30293;
chunk__30249_30277 = G__30294;
count__30250_30278 = G__30295;
i__30251_30279 = G__30296;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq30241){
var G__30242 = cljs.core.first.call(null,seq30241);
var seq30241__$1 = cljs.core.next.call(null,seq30241);
var G__30243 = cljs.core.first.call(null,seq30241__$1);
var seq30241__$2 = cljs.core.next.call(null,seq30241__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__30242,G__30243,seq30241__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19388__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19389__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19385__auto__,prefer_table__19386__auto__,method_cache__19387__auto__,cached_hierarchy__19388__auto__,hierarchy__19389__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19385__auto__,prefer_table__19386__auto__,method_cache__19387__auto__,cached_hierarchy__19388__auto__,hierarchy__19389__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19389__auto__,method_table__19385__auto__,prefer_table__19386__auto__,method_cache__19387__auto__,cached_hierarchy__19388__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_30297 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_30297.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_30297.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_30297.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_30297);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__30298,st_map){
var map__30303 = p__30298;
var map__30303__$1 = ((((!((map__30303 == null)))?((((map__30303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30303):map__30303);
var container_el = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30303,map__30303__$1,container_el){
return (function (p__30305){
var vec__30306 = p__30305;
var k = cljs.core.nth.call(null,vec__30306,(0),null);
var v = cljs.core.nth.call(null,vec__30306,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30303,map__30303__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__30307,dom_str){
var map__30310 = p__30307;
var map__30310__$1 = ((((!((map__30310 == null)))?((((map__30310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30310):map__30310);
var c = map__30310__$1;
var content_area_el = cljs.core.get.call(null,map__30310__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__30312){
var map__30315 = p__30312;
var map__30315__$1 = ((((!((map__30315 == null)))?((((map__30315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30315):map__30315);
var content_area_el = cljs.core.get.call(null,map__30315__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20485__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto__){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto__){
return (function (state_30358){
var state_val_30359 = (state_30358[(1)]);
if((state_val_30359 === (1))){
var inst_30343 = (state_30358[(7)]);
var inst_30343__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30344 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30345 = ["10px","10px","100%","68px","1.0"];
var inst_30346 = cljs.core.PersistentHashMap.fromArrays(inst_30344,inst_30345);
var inst_30347 = cljs.core.merge.call(null,inst_30346,style);
var inst_30348 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30343__$1,inst_30347);
var inst_30349 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30343__$1,msg);
var inst_30350 = cljs.core.async.timeout.call(null,(300));
var state_30358__$1 = (function (){var statearr_30360 = state_30358;
(statearr_30360[(7)] = inst_30343__$1);

(statearr_30360[(8)] = inst_30348);

(statearr_30360[(9)] = inst_30349);

return statearr_30360;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30358__$1,(2),inst_30350);
} else {
if((state_val_30359 === (2))){
var inst_30343 = (state_30358[(7)]);
var inst_30352 = (state_30358[(2)]);
var inst_30353 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30354 = ["auto"];
var inst_30355 = cljs.core.PersistentHashMap.fromArrays(inst_30353,inst_30354);
var inst_30356 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30343,inst_30355);
var state_30358__$1 = (function (){var statearr_30361 = state_30358;
(statearr_30361[(10)] = inst_30352);

return statearr_30361;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30358__$1,inst_30356);
} else {
return null;
}
}
});})(c__20485__auto__))
;
return ((function (switch__20464__auto__,c__20485__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20465__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20465__auto____0 = (function (){
var statearr_30365 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30365[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20465__auto__);

(statearr_30365[(1)] = (1));

return statearr_30365;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20465__auto____1 = (function (state_30358){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_30358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e30366){if((e30366 instanceof Object)){
var ex__20468__auto__ = e30366;
var statearr_30367_30369 = state_30358;
(statearr_30367_30369[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30370 = state_30358;
state_30358 = G__30370;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20465__auto__ = function(state_30358){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20465__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20465__auto____1.call(this,state_30358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20465__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20465__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto__))
})();
var state__20487__auto__ = (function (){var statearr_30368 = f__20486__auto__.call(null);
(statearr_30368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto__);

return statearr_30368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto__))
);

return c__20485__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args30371 = [];
var len__19530__auto___30374 = arguments.length;
var i__19531__auto___30375 = (0);
while(true){
if((i__19531__auto___30375 < len__19530__auto___30374)){
args30371.push((arguments[i__19531__auto___30375]));

var G__30376 = (i__19531__auto___30375 + (1));
i__19531__auto___30375 = G__30376;
continue;
} else {
}
break;
}

var G__30373 = args30371.length;
switch (G__30373) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30371.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str(" <span style=\""),cljs.core.str("display: inline-block;"),cljs.core.str("font-size: 13px;"),cljs.core.str("\">"),cljs.core.str(sub_head),cljs.core.str("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__30379 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__30379,(0),null);
var ln = cljs.core.nth.call(null,vec__30379,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__30382 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__30382,(0),null);
var file_line = cljs.core.nth.call(null,vec__30382,(1),null);
var file_column = cljs.core.nth.call(null,vec__30382,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30382,file_name,file_line,file_column){
return (function (p1__30380_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__30380_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__30382,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18460__auto__ = file_line;
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
var and__18448__auto__ = cause;
if(cljs.core.truth_(and__18448__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18448__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(ex){
return cljs.core.take_while.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_),cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),ex));
});
figwheel.client.heads_up.exception_info_QMARK_ = (function figwheel$client$heads_up$exception_info_QMARK_(ex){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(ex),new cljs.core.Symbol(null,"clojure.lang.ExceptionInfo","clojure.lang.ExceptionInfo",-550564927,null));
});
figwheel.client.heads_up.parse_failed_compile = (function figwheel$client$heads_up$parse_failed_compile(p__30383){
var map__30386 = p__30383;
var map__30386__$1 = ((((!((map__30386 == null)))?((((map__30386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30386):map__30386);
var ex = map__30386__$1;
var exception_data = cljs.core.get.call(null,map__30386__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var exception = cljs.core.first.call(null,exception_data);
if(cljs.core.truth_((function (){var and__18448__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exception);
if(cljs.core.truth_(and__18448__auto__)){
return cljs.core.re_matches.call(null,/failed compiling.*/,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception));
} else {
return and__18448__auto__;
}
})())){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503),true,new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.get_in.call(null,exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"file","file",-1269645878)], null)));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_analysis_error = (function figwheel$client$heads_up$parse_analysis_error(p__30388){
var map__30394 = p__30388;
var map__30394__$1 = ((((!((map__30394 == null)))?((((map__30394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30394):map__30394);
var ex = map__30394__$1;
var exception_data = cljs.core.get.call(null,map__30394__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__30394,map__30394__$1,ex,exception_data){
return (function (p__30396){
var map__30397 = p__30396;
var map__30397__$1 = ((((!((map__30397 == null)))?((((map__30397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30397):map__30397);
var exc = map__30397__$1;
var data = cljs.core.get.call(null,map__30397__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__18448__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__18448__auto__)){
return data;
} else {
return and__18448__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349));
} else {
return null;
}
});})(map__30394,map__30394__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var analysis_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285),analysis_exception,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"class","class",-2030961996)], null))], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(analysis_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__18460__auto__ = cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"message","message",-406056002)], null));
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(analysis_exception);
}
})()], null));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_reader_error = (function figwheel$client$heads_up$parse_reader_error(p__30399){
var map__30405 = p__30399;
var map__30405__$1 = ((((!((map__30405 == null)))?((((map__30405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30405):map__30405);
var ex = map__30405__$1;
var exception_data = cljs.core.get.call(null,map__30405__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__30405,map__30405__$1,ex,exception_data){
return (function (p__30407){
var map__30408 = p__30407;
var map__30408__$1 = ((((!((map__30408 == null)))?((((map__30408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30408):map__30408);
var exc = map__30408__$1;
var data = cljs.core.get.call(null,map__30408__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__18448__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__18448__auto__)){
return data;
} else {
return and__18448__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
} else {
return null;
}
});})(map__30405,map__30405__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var reader_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),reader_exception], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(reader_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(reader_exception)], null));
} else {
return ex;
}
});
figwheel.client.heads_up.patch_eof_reader_exception = (function figwheel$client$heads_up$patch_eof_reader_exception(p__30410){
var map__30414 = p__30410;
var map__30414__$1 = ((((!((map__30414 == null)))?((((map__30414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30414):map__30414);
var ex = map__30414__$1;
var reader_exception = cljs.core.get.call(null,map__30414__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var message = cljs.core.get.call(null,map__30414__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_((function (){var and__18448__auto__ = reader_exception;
if(cljs.core.truth_(and__18448__auto__)){
return cljs.core.re_matches.call(null,/EOF while reading, starting.*/,message);
} else {
return and__18448__auto__;
}
})())){
var temp__4657__auto__ = cljs.core.re_matches.call(null,/.*line\s(\d*)\sand\scolumn\s(\d*).*/,message);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__30416 = temp__4657__auto__;
var _ = cljs.core.nth.call(null,vec__30416,(0),null);
var line = cljs.core.nth.call(null,vec__30416,(1),null);
var column = cljs.core.nth.call(null,vec__30416,(2),null);
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),(line | (0)),new cljs.core.Keyword(null,"column","column",2078222095),(column | (0)));
} else {
return null;
}
} else {
return ex;
}
});
figwheel.client.heads_up.ensure_file_line = (function figwheel$client$heads_up$ensure_file_line(p__30417){
var map__30423 = p__30417;
var map__30423__$1 = ((((!((map__30423 == null)))?((((map__30423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30423):map__30423);
var ex = map__30423__$1;
var exception_data = cljs.core.get.call(null,map__30423__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var map__30425 = cljs.core.apply.call(null,cljs.core.merge,cljs.core.keep.call(null,new cljs.core.Keyword(null,"data","data",-232669377),exception_data));
var map__30425__$1 = ((((!((map__30425 == null)))?((((map__30425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30425):map__30425);
var file = cljs.core.get.call(null,map__30425__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30425__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__30427 = ex;
var G__30427__$1 = (((new cljs.core.Keyword(null,"file","file",-1269645878) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"file","file",-1269645878),file,G__30427):G__30427);
var G__30427__$2 = (((new cljs.core.Keyword(null,"line","line",212345235) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),line,G__30427__$1):G__30427__$1);
if((new cljs.core.Keyword(null,"message","message",-406056002) == null)){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.last.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"message","message",-406056002),exception_data)),G__30427__$2);
} else {
return G__30427__$2;
}
});
figwheel.client.heads_up.remove_file_from_message = (function figwheel$client$heads_up$remove_file_from_message(p__30428){
var map__30431 = p__30428;
var map__30431__$1 = ((((!((map__30431 == null)))?((((map__30431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30431):map__30431);
var ex = map__30431__$1;
var message = cljs.core.get.call(null,map__30431__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__30431__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18448__auto__ = file;
if(cljs.core.truth_(and__18448__auto__)){
return cljs.core.re_matches.call(null,/.*in file.*/,message);
} else {
return and__18448__auto__;
}
})())){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.first.call(null,clojure.string.split.call(null,message,"in file")));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_exception = (function figwheel$client$heads_up$parse_exception(exception_data){
return figwheel.client.heads_up.remove_file_from_message.call(null,figwheel.client.heads_up.patch_eof_reader_exception.call(null,figwheel.client.heads_up.parse_reader_error.call(null,figwheel.client.heads_up.parse_analysis_error.call(null,figwheel.client.heads_up.parse_failed_compile.call(null,cljs.core.update_in.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exception-data","exception-data",-512474886),exception_data], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception-data","exception-data",-512474886)], null),figwheel.client.heads_up.flatten_exception))))));
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__30435){
var map__30438 = p__30435;
var map__30438__$1 = ((((!((map__30438 == null)))?((((map__30438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30438):map__30438);
var exception = map__30438__$1;
var failed_compiling = cljs.core.get.call(null,map__30438__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__30438__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__30438__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__30438__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__30438__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30438__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30438__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__30438__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var last_message = (cljs.core.truth_((function (){var and__18448__auto__ = file;
if(cljs.core.truth_(and__18448__auto__)){
return line;
} else {
return and__18448__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__30438,map__30438__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__30433_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__30433_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__30438,map__30438__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join('')], null):cljs.core.map.call(null,((function (last_message,map__30438,map__30438__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__30434_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__30434_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__30434_SHARP_)))].join('');
});})(last_message,map__30438,map__30438__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__30443 = figwheel.client.heads_up.exception__GT_display_data.call(null,figwheel.client.heads_up.parse_exception.call(null,exception_data));
var map__30443__$1 = ((((!((map__30443 == null)))?((((map__30443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30443):map__30443);
var head = cljs.core.get.call(null,map__30443__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__30443__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__30443__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__30443__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__30443__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30443__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30443__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__30447 = figwheel.client.heads_up.ensure_container.call(null);
var map__30447__$1 = ((((!((map__30447 == null)))?((((map__30447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30447):map__30447);
var content_area_el = cljs.core.get.call(null,map__30447__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20485__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto__){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto__){
return (function (state_30495){
var state_val_30496 = (state_30495[(1)]);
if((state_val_30496 === (1))){
var inst_30478 = (state_30495[(7)]);
var inst_30478__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30479 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30480 = ["0.0"];
var inst_30481 = cljs.core.PersistentHashMap.fromArrays(inst_30479,inst_30480);
var inst_30482 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30478__$1,inst_30481);
var inst_30483 = cljs.core.async.timeout.call(null,(300));
var state_30495__$1 = (function (){var statearr_30497 = state_30495;
(statearr_30497[(7)] = inst_30478__$1);

(statearr_30497[(8)] = inst_30482);

return statearr_30497;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30495__$1,(2),inst_30483);
} else {
if((state_val_30496 === (2))){
var inst_30478 = (state_30495[(7)]);
var inst_30485 = (state_30495[(2)]);
var inst_30486 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30487 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30488 = cljs.core.PersistentHashMap.fromArrays(inst_30486,inst_30487);
var inst_30489 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30478,inst_30488);
var inst_30490 = cljs.core.async.timeout.call(null,(200));
var state_30495__$1 = (function (){var statearr_30498 = state_30495;
(statearr_30498[(9)] = inst_30489);

(statearr_30498[(10)] = inst_30485);

return statearr_30498;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30495__$1,(3),inst_30490);
} else {
if((state_val_30496 === (3))){
var inst_30478 = (state_30495[(7)]);
var inst_30492 = (state_30495[(2)]);
var inst_30493 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30478,"");
var state_30495__$1 = (function (){var statearr_30499 = state_30495;
(statearr_30499[(11)] = inst_30492);

return statearr_30499;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30495__$1,inst_30493);
} else {
return null;
}
}
}
});})(c__20485__auto__))
;
return ((function (switch__20464__auto__,c__20485__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20465__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20465__auto____0 = (function (){
var statearr_30503 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30503[(0)] = figwheel$client$heads_up$clear_$_state_machine__20465__auto__);

(statearr_30503[(1)] = (1));

return statearr_30503;
});
var figwheel$client$heads_up$clear_$_state_machine__20465__auto____1 = (function (state_30495){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_30495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e30504){if((e30504 instanceof Object)){
var ex__20468__auto__ = e30504;
var statearr_30505_30507 = state_30495;
(statearr_30505_30507[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30508 = state_30495;
state_30495 = G__30508;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20465__auto__ = function(state_30495){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20465__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20465__auto____1.call(this,state_30495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20465__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20465__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto__))
})();
var state__20487__auto__ = (function (){var statearr_30506 = f__20486__auto__.call(null);
(statearr_30506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto__);

return statearr_30506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto__))
);

return c__20485__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20485__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto__){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto__){
return (function (state_30540){
var state_val_30541 = (state_30540[(1)]);
if((state_val_30541 === (1))){
var inst_30530 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_30540__$1 = state_30540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30540__$1,(2),inst_30530);
} else {
if((state_val_30541 === (2))){
var inst_30532 = (state_30540[(2)]);
var inst_30533 = cljs.core.async.timeout.call(null,(400));
var state_30540__$1 = (function (){var statearr_30542 = state_30540;
(statearr_30542[(7)] = inst_30532);

return statearr_30542;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30540__$1,(3),inst_30533);
} else {
if((state_val_30541 === (3))){
var inst_30535 = (state_30540[(2)]);
var inst_30536 = figwheel.client.heads_up.clear.call(null);
var state_30540__$1 = (function (){var statearr_30543 = state_30540;
(statearr_30543[(8)] = inst_30535);

return statearr_30543;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30540__$1,(4),inst_30536);
} else {
if((state_val_30541 === (4))){
var inst_30538 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30540__$1,inst_30538);
} else {
return null;
}
}
}
}
});})(c__20485__auto__))
;
return ((function (switch__20464__auto__,c__20485__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20465__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20465__auto____0 = (function (){
var statearr_30547 = [null,null,null,null,null,null,null,null,null];
(statearr_30547[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20465__auto__);

(statearr_30547[(1)] = (1));

return statearr_30547;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20465__auto____1 = (function (state_30540){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_30540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e30548){if((e30548 instanceof Object)){
var ex__20468__auto__ = e30548;
var statearr_30549_30551 = state_30540;
(statearr_30549_30551[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30552 = state_30540;
state_30540 = G__30552;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20465__auto__ = function(state_30540){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20465__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20465__auto____1.call(this,state_30540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20465__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20465__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto__))
})();
var state__20487__auto__ = (function (){var statearr_30550 = f__20486__auto__.call(null);
(statearr_30550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto__);

return statearr_30550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto__))
);

return c__20485__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1470995251593