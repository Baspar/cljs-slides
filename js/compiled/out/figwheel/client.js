// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30555 = cljs.core._EQ_;
var expr__30556 = (function (){var or__18460__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e30559){if((e30559 instanceof Error)){
var e = e30559;
return false;
} else {
throw e30559;

}
}})();
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30555.call(null,"true",expr__30556))){
return true;
} else {
if(cljs.core.truth_(pred__30555.call(null,"false",expr__30556))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30556)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e30561){if((e30561 instanceof Error)){
var e = e30561;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e30561;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19537__auto__ = [];
var len__19530__auto___30563 = arguments.length;
var i__19531__auto___30564 = (0);
while(true){
if((i__19531__auto___30564 < len__19530__auto___30563)){
args__19537__auto__.push((arguments[i__19531__auto___30564]));

var G__30565 = (i__19531__auto___30564 + (1));
i__19531__auto___30564 = G__30565;
continue;
} else {
}
break;
}

var argseq__19538__auto__ = ((((0) < args__19537__auto__.length))?(new cljs.core.IndexedSeq(args__19537__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19538__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq30562){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30562));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30566){
var map__30569 = p__30566;
var map__30569__$1 = ((((!((map__30569 == null)))?((((map__30569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30569):map__30569);
var message = cljs.core.get.call(null,map__30569__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30569__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18460__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18448__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18448__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18448__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20485__auto___30731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto___30731,ch){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto___30731,ch){
return (function (state_30700){
var state_val_30701 = (state_30700[(1)]);
if((state_val_30701 === (7))){
var inst_30696 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
var statearr_30702_30732 = state_30700__$1;
(statearr_30702_30732[(2)] = inst_30696);

(statearr_30702_30732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (1))){
var state_30700__$1 = state_30700;
var statearr_30703_30733 = state_30700__$1;
(statearr_30703_30733[(2)] = null);

(statearr_30703_30733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (4))){
var inst_30653 = (state_30700[(7)]);
var inst_30653__$1 = (state_30700[(2)]);
var state_30700__$1 = (function (){var statearr_30704 = state_30700;
(statearr_30704[(7)] = inst_30653__$1);

return statearr_30704;
})();
if(cljs.core.truth_(inst_30653__$1)){
var statearr_30705_30734 = state_30700__$1;
(statearr_30705_30734[(1)] = (5));

} else {
var statearr_30706_30735 = state_30700__$1;
(statearr_30706_30735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (15))){
var inst_30660 = (state_30700[(8)]);
var inst_30675 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30660);
var inst_30676 = cljs.core.first.call(null,inst_30675);
var inst_30677 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30676);
var inst_30678 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_30677)].join('');
var inst_30679 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30678);
var state_30700__$1 = state_30700;
var statearr_30707_30736 = state_30700__$1;
(statearr_30707_30736[(2)] = inst_30679);

(statearr_30707_30736[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (13))){
var inst_30684 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
var statearr_30708_30737 = state_30700__$1;
(statearr_30708_30737[(2)] = inst_30684);

(statearr_30708_30737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (6))){
var state_30700__$1 = state_30700;
var statearr_30709_30738 = state_30700__$1;
(statearr_30709_30738[(2)] = null);

(statearr_30709_30738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (17))){
var inst_30682 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
var statearr_30710_30739 = state_30700__$1;
(statearr_30710_30739[(2)] = inst_30682);

(statearr_30710_30739[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (3))){
var inst_30698 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30700__$1,inst_30698);
} else {
if((state_val_30701 === (12))){
var inst_30659 = (state_30700[(9)]);
var inst_30673 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30659,opts);
var state_30700__$1 = state_30700;
if(cljs.core.truth_(inst_30673)){
var statearr_30711_30740 = state_30700__$1;
(statearr_30711_30740[(1)] = (15));

} else {
var statearr_30712_30741 = state_30700__$1;
(statearr_30712_30741[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (2))){
var state_30700__$1 = state_30700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30700__$1,(4),ch);
} else {
if((state_val_30701 === (11))){
var inst_30660 = (state_30700[(8)]);
var inst_30665 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30666 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30660);
var inst_30667 = cljs.core.async.timeout.call(null,(1000));
var inst_30668 = [inst_30666,inst_30667];
var inst_30669 = (new cljs.core.PersistentVector(null,2,(5),inst_30665,inst_30668,null));
var state_30700__$1 = state_30700;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30700__$1,(14),inst_30669);
} else {
if((state_val_30701 === (9))){
var inst_30660 = (state_30700[(8)]);
var inst_30686 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30687 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30660);
var inst_30688 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30687);
var inst_30689 = [cljs.core.str("Not loading: "),cljs.core.str(inst_30688)].join('');
var inst_30690 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30689);
var state_30700__$1 = (function (){var statearr_30713 = state_30700;
(statearr_30713[(10)] = inst_30686);

return statearr_30713;
})();
var statearr_30714_30742 = state_30700__$1;
(statearr_30714_30742[(2)] = inst_30690);

(statearr_30714_30742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (5))){
var inst_30653 = (state_30700[(7)]);
var inst_30655 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30656 = (new cljs.core.PersistentArrayMap(null,2,inst_30655,null));
var inst_30657 = (new cljs.core.PersistentHashSet(null,inst_30656,null));
var inst_30658 = figwheel.client.focus_msgs.call(null,inst_30657,inst_30653);
var inst_30659 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30658);
var inst_30660 = cljs.core.first.call(null,inst_30658);
var inst_30661 = figwheel.client.autoload_QMARK_.call(null);
var state_30700__$1 = (function (){var statearr_30715 = state_30700;
(statearr_30715[(9)] = inst_30659);

(statearr_30715[(8)] = inst_30660);

return statearr_30715;
})();
if(cljs.core.truth_(inst_30661)){
var statearr_30716_30743 = state_30700__$1;
(statearr_30716_30743[(1)] = (8));

} else {
var statearr_30717_30744 = state_30700__$1;
(statearr_30717_30744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (14))){
var inst_30671 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
var statearr_30718_30745 = state_30700__$1;
(statearr_30718_30745[(2)] = inst_30671);

(statearr_30718_30745[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (16))){
var state_30700__$1 = state_30700;
var statearr_30719_30746 = state_30700__$1;
(statearr_30719_30746[(2)] = null);

(statearr_30719_30746[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (10))){
var inst_30692 = (state_30700[(2)]);
var state_30700__$1 = (function (){var statearr_30720 = state_30700;
(statearr_30720[(11)] = inst_30692);

return statearr_30720;
})();
var statearr_30721_30747 = state_30700__$1;
(statearr_30721_30747[(2)] = null);

(statearr_30721_30747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (8))){
var inst_30659 = (state_30700[(9)]);
var inst_30663 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30659,opts);
var state_30700__$1 = state_30700;
if(cljs.core.truth_(inst_30663)){
var statearr_30722_30748 = state_30700__$1;
(statearr_30722_30748[(1)] = (11));

} else {
var statearr_30723_30749 = state_30700__$1;
(statearr_30723_30749[(1)] = (12));

}

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
});})(c__20485__auto___30731,ch))
;
return ((function (switch__20464__auto__,c__20485__auto___30731,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20465__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20465__auto____0 = (function (){
var statearr_30727 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30727[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20465__auto__);

(statearr_30727[(1)] = (1));

return statearr_30727;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20465__auto____1 = (function (state_30700){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_30700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e30728){if((e30728 instanceof Object)){
var ex__20468__auto__ = e30728;
var statearr_30729_30750 = state_30700;
(statearr_30729_30750[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30751 = state_30700;
state_30700 = G__30751;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20465__auto__ = function(state_30700){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20465__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20465__auto____1.call(this,state_30700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20465__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20465__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto___30731,ch))
})();
var state__20487__auto__ = (function (){var statearr_30730 = f__20486__auto__.call(null);
(statearr_30730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto___30731);

return statearr_30730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto___30731,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30752_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30752_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30759 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30759){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_30757 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30758 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30758;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30757;
}}catch (e30756){if((e30756 instanceof Error)){
var e = e30756;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30759], null));
} else {
var e = e30756;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30759))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30760){
var map__30767 = p__30760;
var map__30767__$1 = ((((!((map__30767 == null)))?((((map__30767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30767):map__30767);
var opts = map__30767__$1;
var build_id = cljs.core.get.call(null,map__30767__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30767,map__30767__$1,opts,build_id){
return (function (p__30769){
var vec__30770 = p__30769;
var map__30771 = cljs.core.nth.call(null,vec__30770,(0),null);
var map__30771__$1 = ((((!((map__30771 == null)))?((((map__30771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30771):map__30771);
var msg = map__30771__$1;
var msg_name = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30770,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30770,map__30771,map__30771__$1,msg,msg_name,_,map__30767,map__30767__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30770,map__30771,map__30771__$1,msg,msg_name,_,map__30767,map__30767__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30767,map__30767__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30777){
var vec__30778 = p__30777;
var map__30779 = cljs.core.nth.call(null,vec__30778,(0),null);
var map__30779__$1 = ((((!((map__30779 == null)))?((((map__30779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30779):map__30779);
var msg = map__30779__$1;
var msg_name = cljs.core.get.call(null,map__30779__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30778,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30781){
var map__30791 = p__30781;
var map__30791__$1 = ((((!((map__30791 == null)))?((((map__30791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30791):map__30791);
var on_compile_warning = cljs.core.get.call(null,map__30791__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30791__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30791,map__30791__$1,on_compile_warning,on_compile_fail){
return (function (p__30793){
var vec__30794 = p__30793;
var map__30795 = cljs.core.nth.call(null,vec__30794,(0),null);
var map__30795__$1 = ((((!((map__30795 == null)))?((((map__30795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30795):map__30795);
var msg = map__30795__$1;
var msg_name = cljs.core.get.call(null,map__30795__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30794,(1));
var pred__30797 = cljs.core._EQ_;
var expr__30798 = msg_name;
if(cljs.core.truth_(pred__30797.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30798))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30797.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30798))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30791,map__30791__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20485__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto__,msg_hist,msg_names,msg){
return (function (state_31006){
var state_val_31007 = (state_31006[(1)]);
if((state_val_31007 === (7))){
var inst_30934 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
if(cljs.core.truth_(inst_30934)){
var statearr_31008_31054 = state_31006__$1;
(statearr_31008_31054[(1)] = (8));

} else {
var statearr_31009_31055 = state_31006__$1;
(statearr_31009_31055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (20))){
var inst_31000 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
var statearr_31010_31056 = state_31006__$1;
(statearr_31010_31056[(2)] = inst_31000);

(statearr_31010_31056[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (27))){
var inst_30996 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
var statearr_31011_31057 = state_31006__$1;
(statearr_31011_31057[(2)] = inst_30996);

(statearr_31011_31057[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (1))){
var inst_30927 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31006__$1 = state_31006;
if(cljs.core.truth_(inst_30927)){
var statearr_31012_31058 = state_31006__$1;
(statearr_31012_31058[(1)] = (2));

} else {
var statearr_31013_31059 = state_31006__$1;
(statearr_31013_31059[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (24))){
var inst_30998 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
var statearr_31014_31060 = state_31006__$1;
(statearr_31014_31060[(2)] = inst_30998);

(statearr_31014_31060[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (4))){
var inst_31004 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31006__$1,inst_31004);
} else {
if((state_val_31007 === (15))){
var inst_31002 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
var statearr_31015_31061 = state_31006__$1;
(statearr_31015_31061[(2)] = inst_31002);

(statearr_31015_31061[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (21))){
var inst_30961 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
var statearr_31016_31062 = state_31006__$1;
(statearr_31016_31062[(2)] = inst_30961);

(statearr_31016_31062[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (31))){
var inst_30985 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31006__$1 = state_31006;
if(cljs.core.truth_(inst_30985)){
var statearr_31017_31063 = state_31006__$1;
(statearr_31017_31063[(1)] = (34));

} else {
var statearr_31018_31064 = state_31006__$1;
(statearr_31018_31064[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (32))){
var inst_30994 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
var statearr_31019_31065 = state_31006__$1;
(statearr_31019_31065[(2)] = inst_30994);

(statearr_31019_31065[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (33))){
var inst_30983 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
var statearr_31020_31066 = state_31006__$1;
(statearr_31020_31066[(2)] = inst_30983);

(statearr_31020_31066[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (13))){
var inst_30948 = figwheel.client.heads_up.clear.call(null);
var state_31006__$1 = state_31006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31006__$1,(16),inst_30948);
} else {
if((state_val_31007 === (22))){
var inst_30965 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30966 = figwheel.client.heads_up.append_message.call(null,inst_30965);
var state_31006__$1 = state_31006;
var statearr_31021_31067 = state_31006__$1;
(statearr_31021_31067[(2)] = inst_30966);

(statearr_31021_31067[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (36))){
var inst_30992 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
var statearr_31022_31068 = state_31006__$1;
(statearr_31022_31068[(2)] = inst_30992);

(statearr_31022_31068[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (29))){
var inst_30976 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
var statearr_31023_31069 = state_31006__$1;
(statearr_31023_31069[(2)] = inst_30976);

(statearr_31023_31069[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (6))){
var inst_30929 = (state_31006[(7)]);
var state_31006__$1 = state_31006;
var statearr_31024_31070 = state_31006__$1;
(statearr_31024_31070[(2)] = inst_30929);

(statearr_31024_31070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (28))){
var inst_30972 = (state_31006[(2)]);
var inst_30973 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30974 = figwheel.client.heads_up.display_warning.call(null,inst_30973);
var state_31006__$1 = (function (){var statearr_31025 = state_31006;
(statearr_31025[(8)] = inst_30972);

return statearr_31025;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31006__$1,(29),inst_30974);
} else {
if((state_val_31007 === (25))){
var inst_30970 = figwheel.client.heads_up.clear.call(null);
var state_31006__$1 = state_31006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31006__$1,(28),inst_30970);
} else {
if((state_val_31007 === (34))){
var inst_30987 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31006__$1 = state_31006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31006__$1,(37),inst_30987);
} else {
if((state_val_31007 === (17))){
var inst_30954 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
var statearr_31026_31071 = state_31006__$1;
(statearr_31026_31071[(2)] = inst_30954);

(statearr_31026_31071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (3))){
var inst_30946 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31006__$1 = state_31006;
if(cljs.core.truth_(inst_30946)){
var statearr_31027_31072 = state_31006__$1;
(statearr_31027_31072[(1)] = (13));

} else {
var statearr_31028_31073 = state_31006__$1;
(statearr_31028_31073[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (12))){
var inst_30942 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
var statearr_31029_31074 = state_31006__$1;
(statearr_31029_31074[(2)] = inst_30942);

(statearr_31029_31074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (2))){
var inst_30929 = (state_31006[(7)]);
var inst_30929__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31006__$1 = (function (){var statearr_31030 = state_31006;
(statearr_31030[(7)] = inst_30929__$1);

return statearr_31030;
})();
if(cljs.core.truth_(inst_30929__$1)){
var statearr_31031_31075 = state_31006__$1;
(statearr_31031_31075[(1)] = (5));

} else {
var statearr_31032_31076 = state_31006__$1;
(statearr_31032_31076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (23))){
var inst_30968 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31006__$1 = state_31006;
if(cljs.core.truth_(inst_30968)){
var statearr_31033_31077 = state_31006__$1;
(statearr_31033_31077[(1)] = (25));

} else {
var statearr_31034_31078 = state_31006__$1;
(statearr_31034_31078[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (35))){
var state_31006__$1 = state_31006;
var statearr_31035_31079 = state_31006__$1;
(statearr_31035_31079[(2)] = null);

(statearr_31035_31079[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (19))){
var inst_30963 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31006__$1 = state_31006;
if(cljs.core.truth_(inst_30963)){
var statearr_31036_31080 = state_31006__$1;
(statearr_31036_31080[(1)] = (22));

} else {
var statearr_31037_31081 = state_31006__$1;
(statearr_31037_31081[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (11))){
var inst_30938 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
var statearr_31038_31082 = state_31006__$1;
(statearr_31038_31082[(2)] = inst_30938);

(statearr_31038_31082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (9))){
var inst_30940 = figwheel.client.heads_up.clear.call(null);
var state_31006__$1 = state_31006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31006__$1,(12),inst_30940);
} else {
if((state_val_31007 === (5))){
var inst_30931 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31006__$1 = state_31006;
var statearr_31039_31083 = state_31006__$1;
(statearr_31039_31083[(2)] = inst_30931);

(statearr_31039_31083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (14))){
var inst_30956 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31006__$1 = state_31006;
if(cljs.core.truth_(inst_30956)){
var statearr_31040_31084 = state_31006__$1;
(statearr_31040_31084[(1)] = (18));

} else {
var statearr_31041_31085 = state_31006__$1;
(statearr_31041_31085[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (26))){
var inst_30978 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31006__$1 = state_31006;
if(cljs.core.truth_(inst_30978)){
var statearr_31042_31086 = state_31006__$1;
(statearr_31042_31086[(1)] = (30));

} else {
var statearr_31043_31087 = state_31006__$1;
(statearr_31043_31087[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (16))){
var inst_30950 = (state_31006[(2)]);
var inst_30951 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30952 = figwheel.client.heads_up.display_exception.call(null,inst_30951);
var state_31006__$1 = (function (){var statearr_31044 = state_31006;
(statearr_31044[(9)] = inst_30950);

return statearr_31044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31006__$1,(17),inst_30952);
} else {
if((state_val_31007 === (30))){
var inst_30980 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30981 = figwheel.client.heads_up.display_warning.call(null,inst_30980);
var state_31006__$1 = state_31006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31006__$1,(33),inst_30981);
} else {
if((state_val_31007 === (10))){
var inst_30944 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
var statearr_31045_31088 = state_31006__$1;
(statearr_31045_31088[(2)] = inst_30944);

(statearr_31045_31088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (18))){
var inst_30958 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30959 = figwheel.client.heads_up.display_exception.call(null,inst_30958);
var state_31006__$1 = state_31006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31006__$1,(21),inst_30959);
} else {
if((state_val_31007 === (37))){
var inst_30989 = (state_31006[(2)]);
var state_31006__$1 = state_31006;
var statearr_31046_31089 = state_31006__$1;
(statearr_31046_31089[(2)] = inst_30989);

(statearr_31046_31089[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31007 === (8))){
var inst_30936 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31006__$1 = state_31006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31006__$1,(11),inst_30936);
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
}
}
}
}
}
}
}
});})(c__20485__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20464__auto__,c__20485__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20465__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20465__auto____0 = (function (){
var statearr_31050 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31050[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20465__auto__);

(statearr_31050[(1)] = (1));

return statearr_31050;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20465__auto____1 = (function (state_31006){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_31006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e31051){if((e31051 instanceof Object)){
var ex__20468__auto__ = e31051;
var statearr_31052_31090 = state_31006;
(statearr_31052_31090[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31091 = state_31006;
state_31006 = G__31091;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20465__auto__ = function(state_31006){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20465__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20465__auto____1.call(this,state_31006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20465__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20465__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto__,msg_hist,msg_names,msg))
})();
var state__20487__auto__ = (function (){var statearr_31053 = f__20486__auto__.call(null);
(statearr_31053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto__);

return statearr_31053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto__,msg_hist,msg_names,msg))
);

return c__20485__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20485__auto___31154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto___31154,ch){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto___31154,ch){
return (function (state_31137){
var state_val_31138 = (state_31137[(1)]);
if((state_val_31138 === (1))){
var state_31137__$1 = state_31137;
var statearr_31139_31155 = state_31137__$1;
(statearr_31139_31155[(2)] = null);

(statearr_31139_31155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (2))){
var state_31137__$1 = state_31137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31137__$1,(4),ch);
} else {
if((state_val_31138 === (3))){
var inst_31135 = (state_31137[(2)]);
var state_31137__$1 = state_31137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31137__$1,inst_31135);
} else {
if((state_val_31138 === (4))){
var inst_31125 = (state_31137[(7)]);
var inst_31125__$1 = (state_31137[(2)]);
var state_31137__$1 = (function (){var statearr_31140 = state_31137;
(statearr_31140[(7)] = inst_31125__$1);

return statearr_31140;
})();
if(cljs.core.truth_(inst_31125__$1)){
var statearr_31141_31156 = state_31137__$1;
(statearr_31141_31156[(1)] = (5));

} else {
var statearr_31142_31157 = state_31137__$1;
(statearr_31142_31157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (5))){
var inst_31125 = (state_31137[(7)]);
var inst_31127 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31125);
var state_31137__$1 = state_31137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31137__$1,(8),inst_31127);
} else {
if((state_val_31138 === (6))){
var state_31137__$1 = state_31137;
var statearr_31143_31158 = state_31137__$1;
(statearr_31143_31158[(2)] = null);

(statearr_31143_31158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (7))){
var inst_31133 = (state_31137[(2)]);
var state_31137__$1 = state_31137;
var statearr_31144_31159 = state_31137__$1;
(statearr_31144_31159[(2)] = inst_31133);

(statearr_31144_31159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (8))){
var inst_31129 = (state_31137[(2)]);
var state_31137__$1 = (function (){var statearr_31145 = state_31137;
(statearr_31145[(8)] = inst_31129);

return statearr_31145;
})();
var statearr_31146_31160 = state_31137__$1;
(statearr_31146_31160[(2)] = null);

(statearr_31146_31160[(1)] = (2));


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
});})(c__20485__auto___31154,ch))
;
return ((function (switch__20464__auto__,c__20485__auto___31154,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20465__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20465__auto____0 = (function (){
var statearr_31150 = [null,null,null,null,null,null,null,null,null];
(statearr_31150[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20465__auto__);

(statearr_31150[(1)] = (1));

return statearr_31150;
});
var figwheel$client$heads_up_plugin_$_state_machine__20465__auto____1 = (function (state_31137){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_31137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e31151){if((e31151 instanceof Object)){
var ex__20468__auto__ = e31151;
var statearr_31152_31161 = state_31137;
(statearr_31152_31161[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31162 = state_31137;
state_31137 = G__31162;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20465__auto__ = function(state_31137){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20465__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20465__auto____1.call(this,state_31137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20465__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20465__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto___31154,ch))
})();
var state__20487__auto__ = (function (){var statearr_31153 = f__20486__auto__.call(null);
(statearr_31153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto___31154);

return statearr_31153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto___31154,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20485__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto__){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto__){
return (function (state_31183){
var state_val_31184 = (state_31183[(1)]);
if((state_val_31184 === (1))){
var inst_31178 = cljs.core.async.timeout.call(null,(3000));
var state_31183__$1 = state_31183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31183__$1,(2),inst_31178);
} else {
if((state_val_31184 === (2))){
var inst_31180 = (state_31183[(2)]);
var inst_31181 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31183__$1 = (function (){var statearr_31185 = state_31183;
(statearr_31185[(7)] = inst_31180);

return statearr_31185;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31183__$1,inst_31181);
} else {
return null;
}
}
});})(c__20485__auto__))
;
return ((function (switch__20464__auto__,c__20485__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20465__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20465__auto____0 = (function (){
var statearr_31189 = [null,null,null,null,null,null,null,null];
(statearr_31189[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20465__auto__);

(statearr_31189[(1)] = (1));

return statearr_31189;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20465__auto____1 = (function (state_31183){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_31183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e31190){if((e31190 instanceof Object)){
var ex__20468__auto__ = e31190;
var statearr_31191_31193 = state_31183;
(statearr_31191_31193[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31194 = state_31183;
state_31183 = G__31194;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20465__auto__ = function(state_31183){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20465__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20465__auto____1.call(this,state_31183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20465__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20465__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto__))
})();
var state__20487__auto__ = (function (){var statearr_31192 = f__20486__auto__.call(null);
(statearr_31192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto__);

return statearr_31192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto__))
);

return c__20485__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31195){
var map__31202 = p__31195;
var map__31202__$1 = ((((!((map__31202 == null)))?((((map__31202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31202):map__31202);
var ed = map__31202__$1;
var formatted_exception = cljs.core.get.call(null,map__31202__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31202__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31202__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31204_31208 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31205_31209 = null;
var count__31206_31210 = (0);
var i__31207_31211 = (0);
while(true){
if((i__31207_31211 < count__31206_31210)){
var msg_31212 = cljs.core._nth.call(null,chunk__31205_31209,i__31207_31211);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31212);

var G__31213 = seq__31204_31208;
var G__31214 = chunk__31205_31209;
var G__31215 = count__31206_31210;
var G__31216 = (i__31207_31211 + (1));
seq__31204_31208 = G__31213;
chunk__31205_31209 = G__31214;
count__31206_31210 = G__31215;
i__31207_31211 = G__31216;
continue;
} else {
var temp__4657__auto___31217 = cljs.core.seq.call(null,seq__31204_31208);
if(temp__4657__auto___31217){
var seq__31204_31218__$1 = temp__4657__auto___31217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31204_31218__$1)){
var c__19271__auto___31219 = cljs.core.chunk_first.call(null,seq__31204_31218__$1);
var G__31220 = cljs.core.chunk_rest.call(null,seq__31204_31218__$1);
var G__31221 = c__19271__auto___31219;
var G__31222 = cljs.core.count.call(null,c__19271__auto___31219);
var G__31223 = (0);
seq__31204_31208 = G__31220;
chunk__31205_31209 = G__31221;
count__31206_31210 = G__31222;
i__31207_31211 = G__31223;
continue;
} else {
var msg_31224 = cljs.core.first.call(null,seq__31204_31218__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31224);

var G__31225 = cljs.core.next.call(null,seq__31204_31218__$1);
var G__31226 = null;
var G__31227 = (0);
var G__31228 = (0);
seq__31204_31208 = G__31225;
chunk__31205_31209 = G__31226;
count__31206_31210 = G__31227;
i__31207_31211 = G__31228;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31229){
var map__31232 = p__31229;
var map__31232__$1 = ((((!((map__31232 == null)))?((((map__31232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31232):map__31232);
var w = map__31232__$1;
var message = cljs.core.get.call(null,map__31232__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18448__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18448__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18448__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31240 = cljs.core.seq.call(null,plugins);
var chunk__31241 = null;
var count__31242 = (0);
var i__31243 = (0);
while(true){
if((i__31243 < count__31242)){
var vec__31244 = cljs.core._nth.call(null,chunk__31241,i__31243);
var k = cljs.core.nth.call(null,vec__31244,(0),null);
var plugin = cljs.core.nth.call(null,vec__31244,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31246 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31240,chunk__31241,count__31242,i__31243,pl_31246,vec__31244,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31246.call(null,msg_hist);
});})(seq__31240,chunk__31241,count__31242,i__31243,pl_31246,vec__31244,k,plugin))
);
} else {
}

var G__31247 = seq__31240;
var G__31248 = chunk__31241;
var G__31249 = count__31242;
var G__31250 = (i__31243 + (1));
seq__31240 = G__31247;
chunk__31241 = G__31248;
count__31242 = G__31249;
i__31243 = G__31250;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31240);
if(temp__4657__auto__){
var seq__31240__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31240__$1)){
var c__19271__auto__ = cljs.core.chunk_first.call(null,seq__31240__$1);
var G__31251 = cljs.core.chunk_rest.call(null,seq__31240__$1);
var G__31252 = c__19271__auto__;
var G__31253 = cljs.core.count.call(null,c__19271__auto__);
var G__31254 = (0);
seq__31240 = G__31251;
chunk__31241 = G__31252;
count__31242 = G__31253;
i__31243 = G__31254;
continue;
} else {
var vec__31245 = cljs.core.first.call(null,seq__31240__$1);
var k = cljs.core.nth.call(null,vec__31245,(0),null);
var plugin = cljs.core.nth.call(null,vec__31245,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31255 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31240,chunk__31241,count__31242,i__31243,pl_31255,vec__31245,k,plugin,seq__31240__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31255.call(null,msg_hist);
});})(seq__31240,chunk__31241,count__31242,i__31243,pl_31255,vec__31245,k,plugin,seq__31240__$1,temp__4657__auto__))
);
} else {
}

var G__31256 = cljs.core.next.call(null,seq__31240__$1);
var G__31257 = null;
var G__31258 = (0);
var G__31259 = (0);
seq__31240 = G__31256;
chunk__31241 = G__31257;
count__31242 = G__31258;
i__31243 = G__31259;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args31260 = [];
var len__19530__auto___31263 = arguments.length;
var i__19531__auto___31264 = (0);
while(true){
if((i__19531__auto___31264 < len__19530__auto___31263)){
args31260.push((arguments[i__19531__auto___31264]));

var G__31265 = (i__19531__auto___31264 + (1));
i__19531__auto___31264 = G__31265;
continue;
} else {
}
break;
}

var G__31262 = args31260.length;
switch (G__31262) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31260.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19537__auto__ = [];
var len__19530__auto___31271 = arguments.length;
var i__19531__auto___31272 = (0);
while(true){
if((i__19531__auto___31272 < len__19530__auto___31271)){
args__19537__auto__.push((arguments[i__19531__auto___31272]));

var G__31273 = (i__19531__auto___31272 + (1));
i__19531__auto___31272 = G__31273;
continue;
} else {
}
break;
}

var argseq__19538__auto__ = ((((0) < args__19537__auto__.length))?(new cljs.core.IndexedSeq(args__19537__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19538__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31268){
var map__31269 = p__31268;
var map__31269__$1 = ((((!((map__31269 == null)))?((((map__31269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31269):map__31269);
var opts = map__31269__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31267){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31267));
});

//# sourceMappingURL=client.js.map?rel=1470995251875