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
var pred__25922 = cljs.core._EQ_;
var expr__25923 = (function (){var or__18459__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e25926){if((e25926 instanceof Error)){
var e = e25926;
return false;
} else {
throw e25926;

}
}})();
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25922.call(null,"true",expr__25923))){
return true;
} else {
if(cljs.core.truth_(pred__25922.call(null,"false",expr__25923))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25923)].join('')));
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
}catch (e25928){if((e25928 instanceof Error)){
var e = e25928;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e25928;

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
var args__19536__auto__ = [];
var len__19529__auto___25930 = arguments.length;
var i__19530__auto___25931 = (0);
while(true){
if((i__19530__auto___25931 < len__19529__auto___25930)){
args__19536__auto__.push((arguments[i__19530__auto___25931]));

var G__25932 = (i__19530__auto___25931 + (1));
i__19530__auto___25931 = G__25932;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq25929){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25929));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25933){
var map__25936 = p__25933;
var map__25936__$1 = ((((!((map__25936 == null)))?((((map__25936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25936):map__25936);
var message = cljs.core.get.call(null,map__25936__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25936__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18459__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18447__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18447__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18447__auto__;
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
var c__21577__auto___26098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto___26098,ch){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto___26098,ch){
return (function (state_26067){
var state_val_26068 = (state_26067[(1)]);
if((state_val_26068 === (7))){
var inst_26063 = (state_26067[(2)]);
var state_26067__$1 = state_26067;
var statearr_26069_26099 = state_26067__$1;
(statearr_26069_26099[(2)] = inst_26063);

(statearr_26069_26099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (1))){
var state_26067__$1 = state_26067;
var statearr_26070_26100 = state_26067__$1;
(statearr_26070_26100[(2)] = null);

(statearr_26070_26100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (4))){
var inst_26020 = (state_26067[(7)]);
var inst_26020__$1 = (state_26067[(2)]);
var state_26067__$1 = (function (){var statearr_26071 = state_26067;
(statearr_26071[(7)] = inst_26020__$1);

return statearr_26071;
})();
if(cljs.core.truth_(inst_26020__$1)){
var statearr_26072_26101 = state_26067__$1;
(statearr_26072_26101[(1)] = (5));

} else {
var statearr_26073_26102 = state_26067__$1;
(statearr_26073_26102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (15))){
var inst_26027 = (state_26067[(8)]);
var inst_26042 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26027);
var inst_26043 = cljs.core.first.call(null,inst_26042);
var inst_26044 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26043);
var inst_26045 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26044)].join('');
var inst_26046 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26045);
var state_26067__$1 = state_26067;
var statearr_26074_26103 = state_26067__$1;
(statearr_26074_26103[(2)] = inst_26046);

(statearr_26074_26103[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (13))){
var inst_26051 = (state_26067[(2)]);
var state_26067__$1 = state_26067;
var statearr_26075_26104 = state_26067__$1;
(statearr_26075_26104[(2)] = inst_26051);

(statearr_26075_26104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (6))){
var state_26067__$1 = state_26067;
var statearr_26076_26105 = state_26067__$1;
(statearr_26076_26105[(2)] = null);

(statearr_26076_26105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (17))){
var inst_26049 = (state_26067[(2)]);
var state_26067__$1 = state_26067;
var statearr_26077_26106 = state_26067__$1;
(statearr_26077_26106[(2)] = inst_26049);

(statearr_26077_26106[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (3))){
var inst_26065 = (state_26067[(2)]);
var state_26067__$1 = state_26067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26067__$1,inst_26065);
} else {
if((state_val_26068 === (12))){
var inst_26026 = (state_26067[(9)]);
var inst_26040 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26026,opts);
var state_26067__$1 = state_26067;
if(cljs.core.truth_(inst_26040)){
var statearr_26078_26107 = state_26067__$1;
(statearr_26078_26107[(1)] = (15));

} else {
var statearr_26079_26108 = state_26067__$1;
(statearr_26079_26108[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (2))){
var state_26067__$1 = state_26067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26067__$1,(4),ch);
} else {
if((state_val_26068 === (11))){
var inst_26027 = (state_26067[(8)]);
var inst_26032 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26033 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26027);
var inst_26034 = cljs.core.async.timeout.call(null,(1000));
var inst_26035 = [inst_26033,inst_26034];
var inst_26036 = (new cljs.core.PersistentVector(null,2,(5),inst_26032,inst_26035,null));
var state_26067__$1 = state_26067;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26067__$1,(14),inst_26036);
} else {
if((state_val_26068 === (9))){
var inst_26027 = (state_26067[(8)]);
var inst_26053 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26054 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26027);
var inst_26055 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26054);
var inst_26056 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26055)].join('');
var inst_26057 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26056);
var state_26067__$1 = (function (){var statearr_26080 = state_26067;
(statearr_26080[(10)] = inst_26053);

return statearr_26080;
})();
var statearr_26081_26109 = state_26067__$1;
(statearr_26081_26109[(2)] = inst_26057);

(statearr_26081_26109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (5))){
var inst_26020 = (state_26067[(7)]);
var inst_26022 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26023 = (new cljs.core.PersistentArrayMap(null,2,inst_26022,null));
var inst_26024 = (new cljs.core.PersistentHashSet(null,inst_26023,null));
var inst_26025 = figwheel.client.focus_msgs.call(null,inst_26024,inst_26020);
var inst_26026 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26025);
var inst_26027 = cljs.core.first.call(null,inst_26025);
var inst_26028 = figwheel.client.autoload_QMARK_.call(null);
var state_26067__$1 = (function (){var statearr_26082 = state_26067;
(statearr_26082[(9)] = inst_26026);

(statearr_26082[(8)] = inst_26027);

return statearr_26082;
})();
if(cljs.core.truth_(inst_26028)){
var statearr_26083_26110 = state_26067__$1;
(statearr_26083_26110[(1)] = (8));

} else {
var statearr_26084_26111 = state_26067__$1;
(statearr_26084_26111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (14))){
var inst_26038 = (state_26067[(2)]);
var state_26067__$1 = state_26067;
var statearr_26085_26112 = state_26067__$1;
(statearr_26085_26112[(2)] = inst_26038);

(statearr_26085_26112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (16))){
var state_26067__$1 = state_26067;
var statearr_26086_26113 = state_26067__$1;
(statearr_26086_26113[(2)] = null);

(statearr_26086_26113[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (10))){
var inst_26059 = (state_26067[(2)]);
var state_26067__$1 = (function (){var statearr_26087 = state_26067;
(statearr_26087[(11)] = inst_26059);

return statearr_26087;
})();
var statearr_26088_26114 = state_26067__$1;
(statearr_26088_26114[(2)] = null);

(statearr_26088_26114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (8))){
var inst_26026 = (state_26067[(9)]);
var inst_26030 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26026,opts);
var state_26067__$1 = state_26067;
if(cljs.core.truth_(inst_26030)){
var statearr_26089_26115 = state_26067__$1;
(statearr_26089_26115[(1)] = (11));

} else {
var statearr_26090_26116 = state_26067__$1;
(statearr_26090_26116[(1)] = (12));

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
});})(c__21577__auto___26098,ch))
;
return ((function (switch__21465__auto__,c__21577__auto___26098,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21466__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21466__auto____0 = (function (){
var statearr_26094 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26094[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21466__auto__);

(statearr_26094[(1)] = (1));

return statearr_26094;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21466__auto____1 = (function (state_26067){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_26067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e26095){if((e26095 instanceof Object)){
var ex__21469__auto__ = e26095;
var statearr_26096_26117 = state_26067;
(statearr_26096_26117[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26118 = state_26067;
state_26067 = G__26118;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21466__auto__ = function(state_26067){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21466__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21466__auto____1.call(this,state_26067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21466__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21466__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto___26098,ch))
})();
var state__21579__auto__ = (function (){var statearr_26097 = f__21578__auto__.call(null);
(statearr_26097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto___26098);

return statearr_26097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto___26098,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26119_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26119_SHARP_));
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
var base_path_26126 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26126){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26124 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26125 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26125;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26124;
}}catch (e26123){if((e26123 instanceof Error)){
var e = e26123;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26126], null));
} else {
var e = e26123;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26126))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26127){
var map__26134 = p__26127;
var map__26134__$1 = ((((!((map__26134 == null)))?((((map__26134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26134):map__26134);
var opts = map__26134__$1;
var build_id = cljs.core.get.call(null,map__26134__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26134,map__26134__$1,opts,build_id){
return (function (p__26136){
var vec__26137 = p__26136;
var map__26138 = cljs.core.nth.call(null,vec__26137,(0),null);
var map__26138__$1 = ((((!((map__26138 == null)))?((((map__26138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26138):map__26138);
var msg = map__26138__$1;
var msg_name = cljs.core.get.call(null,map__26138__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26137,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26137,map__26138,map__26138__$1,msg,msg_name,_,map__26134,map__26134__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26137,map__26138,map__26138__$1,msg,msg_name,_,map__26134,map__26134__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26134,map__26134__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26144){
var vec__26145 = p__26144;
var map__26146 = cljs.core.nth.call(null,vec__26145,(0),null);
var map__26146__$1 = ((((!((map__26146 == null)))?((((map__26146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26146):map__26146);
var msg = map__26146__$1;
var msg_name = cljs.core.get.call(null,map__26146__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26145,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26148){
var map__26158 = p__26148;
var map__26158__$1 = ((((!((map__26158 == null)))?((((map__26158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26158):map__26158);
var on_compile_warning = cljs.core.get.call(null,map__26158__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26158__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26158,map__26158__$1,on_compile_warning,on_compile_fail){
return (function (p__26160){
var vec__26161 = p__26160;
var map__26162 = cljs.core.nth.call(null,vec__26161,(0),null);
var map__26162__$1 = ((((!((map__26162 == null)))?((((map__26162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26162):map__26162);
var msg = map__26162__$1;
var msg_name = cljs.core.get.call(null,map__26162__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26161,(1));
var pred__26164 = cljs.core._EQ_;
var expr__26165 = msg_name;
if(cljs.core.truth_(pred__26164.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26165))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26164.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26165))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26158,map__26158__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto__,msg_hist,msg_names,msg){
return (function (state_26373){
var state_val_26374 = (state_26373[(1)]);
if((state_val_26374 === (7))){
var inst_26301 = (state_26373[(2)]);
var state_26373__$1 = state_26373;
if(cljs.core.truth_(inst_26301)){
var statearr_26375_26421 = state_26373__$1;
(statearr_26375_26421[(1)] = (8));

} else {
var statearr_26376_26422 = state_26373__$1;
(statearr_26376_26422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (20))){
var inst_26367 = (state_26373[(2)]);
var state_26373__$1 = state_26373;
var statearr_26377_26423 = state_26373__$1;
(statearr_26377_26423[(2)] = inst_26367);

(statearr_26377_26423[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (27))){
var inst_26363 = (state_26373[(2)]);
var state_26373__$1 = state_26373;
var statearr_26378_26424 = state_26373__$1;
(statearr_26378_26424[(2)] = inst_26363);

(statearr_26378_26424[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (1))){
var inst_26294 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26373__$1 = state_26373;
if(cljs.core.truth_(inst_26294)){
var statearr_26379_26425 = state_26373__$1;
(statearr_26379_26425[(1)] = (2));

} else {
var statearr_26380_26426 = state_26373__$1;
(statearr_26380_26426[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (24))){
var inst_26365 = (state_26373[(2)]);
var state_26373__$1 = state_26373;
var statearr_26381_26427 = state_26373__$1;
(statearr_26381_26427[(2)] = inst_26365);

(statearr_26381_26427[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (4))){
var inst_26371 = (state_26373[(2)]);
var state_26373__$1 = state_26373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26373__$1,inst_26371);
} else {
if((state_val_26374 === (15))){
var inst_26369 = (state_26373[(2)]);
var state_26373__$1 = state_26373;
var statearr_26382_26428 = state_26373__$1;
(statearr_26382_26428[(2)] = inst_26369);

(statearr_26382_26428[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (21))){
var inst_26328 = (state_26373[(2)]);
var state_26373__$1 = state_26373;
var statearr_26383_26429 = state_26373__$1;
(statearr_26383_26429[(2)] = inst_26328);

(statearr_26383_26429[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (31))){
var inst_26352 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26373__$1 = state_26373;
if(cljs.core.truth_(inst_26352)){
var statearr_26384_26430 = state_26373__$1;
(statearr_26384_26430[(1)] = (34));

} else {
var statearr_26385_26431 = state_26373__$1;
(statearr_26385_26431[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (32))){
var inst_26361 = (state_26373[(2)]);
var state_26373__$1 = state_26373;
var statearr_26386_26432 = state_26373__$1;
(statearr_26386_26432[(2)] = inst_26361);

(statearr_26386_26432[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (33))){
var inst_26350 = (state_26373[(2)]);
var state_26373__$1 = state_26373;
var statearr_26387_26433 = state_26373__$1;
(statearr_26387_26433[(2)] = inst_26350);

(statearr_26387_26433[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (13))){
var inst_26315 = figwheel.client.heads_up.clear.call(null);
var state_26373__$1 = state_26373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26373__$1,(16),inst_26315);
} else {
if((state_val_26374 === (22))){
var inst_26332 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26333 = figwheel.client.heads_up.append_message.call(null,inst_26332);
var state_26373__$1 = state_26373;
var statearr_26388_26434 = state_26373__$1;
(statearr_26388_26434[(2)] = inst_26333);

(statearr_26388_26434[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (36))){
var inst_26359 = (state_26373[(2)]);
var state_26373__$1 = state_26373;
var statearr_26389_26435 = state_26373__$1;
(statearr_26389_26435[(2)] = inst_26359);

(statearr_26389_26435[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (29))){
var inst_26343 = (state_26373[(2)]);
var state_26373__$1 = state_26373;
var statearr_26390_26436 = state_26373__$1;
(statearr_26390_26436[(2)] = inst_26343);

(statearr_26390_26436[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (6))){
var inst_26296 = (state_26373[(7)]);
var state_26373__$1 = state_26373;
var statearr_26391_26437 = state_26373__$1;
(statearr_26391_26437[(2)] = inst_26296);

(statearr_26391_26437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (28))){
var inst_26339 = (state_26373[(2)]);
var inst_26340 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26341 = figwheel.client.heads_up.display_warning.call(null,inst_26340);
var state_26373__$1 = (function (){var statearr_26392 = state_26373;
(statearr_26392[(8)] = inst_26339);

return statearr_26392;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26373__$1,(29),inst_26341);
} else {
if((state_val_26374 === (25))){
var inst_26337 = figwheel.client.heads_up.clear.call(null);
var state_26373__$1 = state_26373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26373__$1,(28),inst_26337);
} else {
if((state_val_26374 === (34))){
var inst_26354 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26373__$1 = state_26373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26373__$1,(37),inst_26354);
} else {
if((state_val_26374 === (17))){
var inst_26321 = (state_26373[(2)]);
var state_26373__$1 = state_26373;
var statearr_26393_26438 = state_26373__$1;
(statearr_26393_26438[(2)] = inst_26321);

(statearr_26393_26438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (3))){
var inst_26313 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26373__$1 = state_26373;
if(cljs.core.truth_(inst_26313)){
var statearr_26394_26439 = state_26373__$1;
(statearr_26394_26439[(1)] = (13));

} else {
var statearr_26395_26440 = state_26373__$1;
(statearr_26395_26440[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (12))){
var inst_26309 = (state_26373[(2)]);
var state_26373__$1 = state_26373;
var statearr_26396_26441 = state_26373__$1;
(statearr_26396_26441[(2)] = inst_26309);

(statearr_26396_26441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (2))){
var inst_26296 = (state_26373[(7)]);
var inst_26296__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26373__$1 = (function (){var statearr_26397 = state_26373;
(statearr_26397[(7)] = inst_26296__$1);

return statearr_26397;
})();
if(cljs.core.truth_(inst_26296__$1)){
var statearr_26398_26442 = state_26373__$1;
(statearr_26398_26442[(1)] = (5));

} else {
var statearr_26399_26443 = state_26373__$1;
(statearr_26399_26443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (23))){
var inst_26335 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26373__$1 = state_26373;
if(cljs.core.truth_(inst_26335)){
var statearr_26400_26444 = state_26373__$1;
(statearr_26400_26444[(1)] = (25));

} else {
var statearr_26401_26445 = state_26373__$1;
(statearr_26401_26445[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (35))){
var state_26373__$1 = state_26373;
var statearr_26402_26446 = state_26373__$1;
(statearr_26402_26446[(2)] = null);

(statearr_26402_26446[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (19))){
var inst_26330 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26373__$1 = state_26373;
if(cljs.core.truth_(inst_26330)){
var statearr_26403_26447 = state_26373__$1;
(statearr_26403_26447[(1)] = (22));

} else {
var statearr_26404_26448 = state_26373__$1;
(statearr_26404_26448[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (11))){
var inst_26305 = (state_26373[(2)]);
var state_26373__$1 = state_26373;
var statearr_26405_26449 = state_26373__$1;
(statearr_26405_26449[(2)] = inst_26305);

(statearr_26405_26449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (9))){
var inst_26307 = figwheel.client.heads_up.clear.call(null);
var state_26373__$1 = state_26373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26373__$1,(12),inst_26307);
} else {
if((state_val_26374 === (5))){
var inst_26298 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26373__$1 = state_26373;
var statearr_26406_26450 = state_26373__$1;
(statearr_26406_26450[(2)] = inst_26298);

(statearr_26406_26450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (14))){
var inst_26323 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26373__$1 = state_26373;
if(cljs.core.truth_(inst_26323)){
var statearr_26407_26451 = state_26373__$1;
(statearr_26407_26451[(1)] = (18));

} else {
var statearr_26408_26452 = state_26373__$1;
(statearr_26408_26452[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (26))){
var inst_26345 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26373__$1 = state_26373;
if(cljs.core.truth_(inst_26345)){
var statearr_26409_26453 = state_26373__$1;
(statearr_26409_26453[(1)] = (30));

} else {
var statearr_26410_26454 = state_26373__$1;
(statearr_26410_26454[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (16))){
var inst_26317 = (state_26373[(2)]);
var inst_26318 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26319 = figwheel.client.heads_up.display_exception.call(null,inst_26318);
var state_26373__$1 = (function (){var statearr_26411 = state_26373;
(statearr_26411[(9)] = inst_26317);

return statearr_26411;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26373__$1,(17),inst_26319);
} else {
if((state_val_26374 === (30))){
var inst_26347 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26348 = figwheel.client.heads_up.display_warning.call(null,inst_26347);
var state_26373__$1 = state_26373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26373__$1,(33),inst_26348);
} else {
if((state_val_26374 === (10))){
var inst_26311 = (state_26373[(2)]);
var state_26373__$1 = state_26373;
var statearr_26412_26455 = state_26373__$1;
(statearr_26412_26455[(2)] = inst_26311);

(statearr_26412_26455[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (18))){
var inst_26325 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26326 = figwheel.client.heads_up.display_exception.call(null,inst_26325);
var state_26373__$1 = state_26373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26373__$1,(21),inst_26326);
} else {
if((state_val_26374 === (37))){
var inst_26356 = (state_26373[(2)]);
var state_26373__$1 = state_26373;
var statearr_26413_26456 = state_26373__$1;
(statearr_26413_26456[(2)] = inst_26356);

(statearr_26413_26456[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26374 === (8))){
var inst_26303 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26373__$1 = state_26373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26373__$1,(11),inst_26303);
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
});})(c__21577__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21465__auto__,c__21577__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21466__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21466__auto____0 = (function (){
var statearr_26417 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26417[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21466__auto__);

(statearr_26417[(1)] = (1));

return statearr_26417;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21466__auto____1 = (function (state_26373){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_26373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e26418){if((e26418 instanceof Object)){
var ex__21469__auto__ = e26418;
var statearr_26419_26457 = state_26373;
(statearr_26419_26457[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26458 = state_26373;
state_26373 = G__26458;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21466__auto__ = function(state_26373){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21466__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21466__auto____1.call(this,state_26373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21466__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21466__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto__,msg_hist,msg_names,msg))
})();
var state__21579__auto__ = (function (){var statearr_26420 = f__21578__auto__.call(null);
(statearr_26420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto__);

return statearr_26420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto__,msg_hist,msg_names,msg))
);

return c__21577__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21577__auto___26521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto___26521,ch){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto___26521,ch){
return (function (state_26504){
var state_val_26505 = (state_26504[(1)]);
if((state_val_26505 === (1))){
var state_26504__$1 = state_26504;
var statearr_26506_26522 = state_26504__$1;
(statearr_26506_26522[(2)] = null);

(statearr_26506_26522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (2))){
var state_26504__$1 = state_26504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26504__$1,(4),ch);
} else {
if((state_val_26505 === (3))){
var inst_26502 = (state_26504[(2)]);
var state_26504__$1 = state_26504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26504__$1,inst_26502);
} else {
if((state_val_26505 === (4))){
var inst_26492 = (state_26504[(7)]);
var inst_26492__$1 = (state_26504[(2)]);
var state_26504__$1 = (function (){var statearr_26507 = state_26504;
(statearr_26507[(7)] = inst_26492__$1);

return statearr_26507;
})();
if(cljs.core.truth_(inst_26492__$1)){
var statearr_26508_26523 = state_26504__$1;
(statearr_26508_26523[(1)] = (5));

} else {
var statearr_26509_26524 = state_26504__$1;
(statearr_26509_26524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (5))){
var inst_26492 = (state_26504[(7)]);
var inst_26494 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26492);
var state_26504__$1 = state_26504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26504__$1,(8),inst_26494);
} else {
if((state_val_26505 === (6))){
var state_26504__$1 = state_26504;
var statearr_26510_26525 = state_26504__$1;
(statearr_26510_26525[(2)] = null);

(statearr_26510_26525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (7))){
var inst_26500 = (state_26504[(2)]);
var state_26504__$1 = state_26504;
var statearr_26511_26526 = state_26504__$1;
(statearr_26511_26526[(2)] = inst_26500);

(statearr_26511_26526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (8))){
var inst_26496 = (state_26504[(2)]);
var state_26504__$1 = (function (){var statearr_26512 = state_26504;
(statearr_26512[(8)] = inst_26496);

return statearr_26512;
})();
var statearr_26513_26527 = state_26504__$1;
(statearr_26513_26527[(2)] = null);

(statearr_26513_26527[(1)] = (2));


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
});})(c__21577__auto___26521,ch))
;
return ((function (switch__21465__auto__,c__21577__auto___26521,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21466__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21466__auto____0 = (function (){
var statearr_26517 = [null,null,null,null,null,null,null,null,null];
(statearr_26517[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21466__auto__);

(statearr_26517[(1)] = (1));

return statearr_26517;
});
var figwheel$client$heads_up_plugin_$_state_machine__21466__auto____1 = (function (state_26504){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_26504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e26518){if((e26518 instanceof Object)){
var ex__21469__auto__ = e26518;
var statearr_26519_26528 = state_26504;
(statearr_26519_26528[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26529 = state_26504;
state_26504 = G__26529;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21466__auto__ = function(state_26504){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21466__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21466__auto____1.call(this,state_26504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21466__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21466__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto___26521,ch))
})();
var state__21579__auto__ = (function (){var statearr_26520 = f__21578__auto__.call(null);
(statearr_26520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto___26521);

return statearr_26520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto___26521,ch))
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
var c__21577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto__){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto__){
return (function (state_26550){
var state_val_26551 = (state_26550[(1)]);
if((state_val_26551 === (1))){
var inst_26545 = cljs.core.async.timeout.call(null,(3000));
var state_26550__$1 = state_26550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26550__$1,(2),inst_26545);
} else {
if((state_val_26551 === (2))){
var inst_26547 = (state_26550[(2)]);
var inst_26548 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26550__$1 = (function (){var statearr_26552 = state_26550;
(statearr_26552[(7)] = inst_26547);

return statearr_26552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26550__$1,inst_26548);
} else {
return null;
}
}
});})(c__21577__auto__))
;
return ((function (switch__21465__auto__,c__21577__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21466__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21466__auto____0 = (function (){
var statearr_26556 = [null,null,null,null,null,null,null,null];
(statearr_26556[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21466__auto__);

(statearr_26556[(1)] = (1));

return statearr_26556;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21466__auto____1 = (function (state_26550){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_26550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e26557){if((e26557 instanceof Object)){
var ex__21469__auto__ = e26557;
var statearr_26558_26560 = state_26550;
(statearr_26558_26560[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26561 = state_26550;
state_26550 = G__26561;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21466__auto__ = function(state_26550){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21466__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21466__auto____1.call(this,state_26550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21466__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21466__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto__))
})();
var state__21579__auto__ = (function (){var statearr_26559 = f__21578__auto__.call(null);
(statearr_26559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto__);

return statearr_26559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto__))
);

return c__21577__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26562){
var map__26569 = p__26562;
var map__26569__$1 = ((((!((map__26569 == null)))?((((map__26569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26569):map__26569);
var ed = map__26569__$1;
var formatted_exception = cljs.core.get.call(null,map__26569__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26569__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26569__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26571_26575 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26572_26576 = null;
var count__26573_26577 = (0);
var i__26574_26578 = (0);
while(true){
if((i__26574_26578 < count__26573_26577)){
var msg_26579 = cljs.core._nth.call(null,chunk__26572_26576,i__26574_26578);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26579);

var G__26580 = seq__26571_26575;
var G__26581 = chunk__26572_26576;
var G__26582 = count__26573_26577;
var G__26583 = (i__26574_26578 + (1));
seq__26571_26575 = G__26580;
chunk__26572_26576 = G__26581;
count__26573_26577 = G__26582;
i__26574_26578 = G__26583;
continue;
} else {
var temp__4657__auto___26584 = cljs.core.seq.call(null,seq__26571_26575);
if(temp__4657__auto___26584){
var seq__26571_26585__$1 = temp__4657__auto___26584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26571_26585__$1)){
var c__19270__auto___26586 = cljs.core.chunk_first.call(null,seq__26571_26585__$1);
var G__26587 = cljs.core.chunk_rest.call(null,seq__26571_26585__$1);
var G__26588 = c__19270__auto___26586;
var G__26589 = cljs.core.count.call(null,c__19270__auto___26586);
var G__26590 = (0);
seq__26571_26575 = G__26587;
chunk__26572_26576 = G__26588;
count__26573_26577 = G__26589;
i__26574_26578 = G__26590;
continue;
} else {
var msg_26591 = cljs.core.first.call(null,seq__26571_26585__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26591);

var G__26592 = cljs.core.next.call(null,seq__26571_26585__$1);
var G__26593 = null;
var G__26594 = (0);
var G__26595 = (0);
seq__26571_26575 = G__26592;
chunk__26572_26576 = G__26593;
count__26573_26577 = G__26594;
i__26574_26578 = G__26595;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26596){
var map__26599 = p__26596;
var map__26599__$1 = ((((!((map__26599 == null)))?((((map__26599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26599):map__26599);
var w = map__26599__$1;
var message = cljs.core.get.call(null,map__26599__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__18447__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18447__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18447__auto__;
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
var seq__26607 = cljs.core.seq.call(null,plugins);
var chunk__26608 = null;
var count__26609 = (0);
var i__26610 = (0);
while(true){
if((i__26610 < count__26609)){
var vec__26611 = cljs.core._nth.call(null,chunk__26608,i__26610);
var k = cljs.core.nth.call(null,vec__26611,(0),null);
var plugin = cljs.core.nth.call(null,vec__26611,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26613 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26607,chunk__26608,count__26609,i__26610,pl_26613,vec__26611,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26613.call(null,msg_hist);
});})(seq__26607,chunk__26608,count__26609,i__26610,pl_26613,vec__26611,k,plugin))
);
} else {
}

var G__26614 = seq__26607;
var G__26615 = chunk__26608;
var G__26616 = count__26609;
var G__26617 = (i__26610 + (1));
seq__26607 = G__26614;
chunk__26608 = G__26615;
count__26609 = G__26616;
i__26610 = G__26617;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26607);
if(temp__4657__auto__){
var seq__26607__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26607__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__26607__$1);
var G__26618 = cljs.core.chunk_rest.call(null,seq__26607__$1);
var G__26619 = c__19270__auto__;
var G__26620 = cljs.core.count.call(null,c__19270__auto__);
var G__26621 = (0);
seq__26607 = G__26618;
chunk__26608 = G__26619;
count__26609 = G__26620;
i__26610 = G__26621;
continue;
} else {
var vec__26612 = cljs.core.first.call(null,seq__26607__$1);
var k = cljs.core.nth.call(null,vec__26612,(0),null);
var plugin = cljs.core.nth.call(null,vec__26612,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26622 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26607,chunk__26608,count__26609,i__26610,pl_26622,vec__26612,k,plugin,seq__26607__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26622.call(null,msg_hist);
});})(seq__26607,chunk__26608,count__26609,i__26610,pl_26622,vec__26612,k,plugin,seq__26607__$1,temp__4657__auto__))
);
} else {
}

var G__26623 = cljs.core.next.call(null,seq__26607__$1);
var G__26624 = null;
var G__26625 = (0);
var G__26626 = (0);
seq__26607 = G__26623;
chunk__26608 = G__26624;
count__26609 = G__26625;
i__26610 = G__26626;
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
var args26627 = [];
var len__19529__auto___26630 = arguments.length;
var i__19530__auto___26631 = (0);
while(true){
if((i__19530__auto___26631 < len__19529__auto___26630)){
args26627.push((arguments[i__19530__auto___26631]));

var G__26632 = (i__19530__auto___26631 + (1));
i__19530__auto___26631 = G__26632;
continue;
} else {
}
break;
}

var G__26629 = args26627.length;
switch (G__26629) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26627.length)].join('')));

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
var args__19536__auto__ = [];
var len__19529__auto___26638 = arguments.length;
var i__19530__auto___26639 = (0);
while(true){
if((i__19530__auto___26639 < len__19529__auto___26638)){
args__19536__auto__.push((arguments[i__19530__auto___26639]));

var G__26640 = (i__19530__auto___26639 + (1));
i__19530__auto___26639 = G__26640;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26635){
var map__26636 = p__26635;
var map__26636__$1 = ((((!((map__26636 == null)))?((((map__26636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26636):map__26636);
var opts = map__26636__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26634){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26634));
});

//# sourceMappingURL=client.js.map?rel=1505303972781