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
var pred__25975 = cljs.core._EQ_;
var expr__25976 = (function (){var or__18459__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e25979){if((e25979 instanceof Error)){
var e = e25979;
return false;
} else {
throw e25979;

}
}})();
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25975.call(null,"true",expr__25976))){
return true;
} else {
if(cljs.core.truth_(pred__25975.call(null,"false",expr__25976))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25976)].join('')));
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
}catch (e25981){if((e25981 instanceof Error)){
var e = e25981;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e25981;

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
var len__19529__auto___25983 = arguments.length;
var i__19530__auto___25984 = (0);
while(true){
if((i__19530__auto___25984 < len__19529__auto___25983)){
args__19536__auto__.push((arguments[i__19530__auto___25984]));

var G__25985 = (i__19530__auto___25984 + (1));
i__19530__auto___25984 = G__25985;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq25982){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25982));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25986){
var map__25989 = p__25986;
var map__25989__$1 = ((((!((map__25989 == null)))?((((map__25989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25989):map__25989);
var message = cljs.core.get.call(null,map__25989__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25989__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__21630__auto___26151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto___26151,ch){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto___26151,ch){
return (function (state_26120){
var state_val_26121 = (state_26120[(1)]);
if((state_val_26121 === (7))){
var inst_26116 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
var statearr_26122_26152 = state_26120__$1;
(statearr_26122_26152[(2)] = inst_26116);

(statearr_26122_26152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (1))){
var state_26120__$1 = state_26120;
var statearr_26123_26153 = state_26120__$1;
(statearr_26123_26153[(2)] = null);

(statearr_26123_26153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (4))){
var inst_26073 = (state_26120[(7)]);
var inst_26073__$1 = (state_26120[(2)]);
var state_26120__$1 = (function (){var statearr_26124 = state_26120;
(statearr_26124[(7)] = inst_26073__$1);

return statearr_26124;
})();
if(cljs.core.truth_(inst_26073__$1)){
var statearr_26125_26154 = state_26120__$1;
(statearr_26125_26154[(1)] = (5));

} else {
var statearr_26126_26155 = state_26120__$1;
(statearr_26126_26155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (15))){
var inst_26080 = (state_26120[(8)]);
var inst_26095 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26080);
var inst_26096 = cljs.core.first.call(null,inst_26095);
var inst_26097 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26096);
var inst_26098 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26097)].join('');
var inst_26099 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26098);
var state_26120__$1 = state_26120;
var statearr_26127_26156 = state_26120__$1;
(statearr_26127_26156[(2)] = inst_26099);

(statearr_26127_26156[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (13))){
var inst_26104 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
var statearr_26128_26157 = state_26120__$1;
(statearr_26128_26157[(2)] = inst_26104);

(statearr_26128_26157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (6))){
var state_26120__$1 = state_26120;
var statearr_26129_26158 = state_26120__$1;
(statearr_26129_26158[(2)] = null);

(statearr_26129_26158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (17))){
var inst_26102 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
var statearr_26130_26159 = state_26120__$1;
(statearr_26130_26159[(2)] = inst_26102);

(statearr_26130_26159[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (3))){
var inst_26118 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26120__$1,inst_26118);
} else {
if((state_val_26121 === (12))){
var inst_26079 = (state_26120[(9)]);
var inst_26093 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26079,opts);
var state_26120__$1 = state_26120;
if(cljs.core.truth_(inst_26093)){
var statearr_26131_26160 = state_26120__$1;
(statearr_26131_26160[(1)] = (15));

} else {
var statearr_26132_26161 = state_26120__$1;
(statearr_26132_26161[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (2))){
var state_26120__$1 = state_26120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26120__$1,(4),ch);
} else {
if((state_val_26121 === (11))){
var inst_26080 = (state_26120[(8)]);
var inst_26085 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26086 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26080);
var inst_26087 = cljs.core.async.timeout.call(null,(1000));
var inst_26088 = [inst_26086,inst_26087];
var inst_26089 = (new cljs.core.PersistentVector(null,2,(5),inst_26085,inst_26088,null));
var state_26120__$1 = state_26120;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26120__$1,(14),inst_26089);
} else {
if((state_val_26121 === (9))){
var inst_26080 = (state_26120[(8)]);
var inst_26106 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26107 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26080);
var inst_26108 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26107);
var inst_26109 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26108)].join('');
var inst_26110 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26109);
var state_26120__$1 = (function (){var statearr_26133 = state_26120;
(statearr_26133[(10)] = inst_26106);

return statearr_26133;
})();
var statearr_26134_26162 = state_26120__$1;
(statearr_26134_26162[(2)] = inst_26110);

(statearr_26134_26162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (5))){
var inst_26073 = (state_26120[(7)]);
var inst_26075 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26076 = (new cljs.core.PersistentArrayMap(null,2,inst_26075,null));
var inst_26077 = (new cljs.core.PersistentHashSet(null,inst_26076,null));
var inst_26078 = figwheel.client.focus_msgs.call(null,inst_26077,inst_26073);
var inst_26079 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26078);
var inst_26080 = cljs.core.first.call(null,inst_26078);
var inst_26081 = figwheel.client.autoload_QMARK_.call(null);
var state_26120__$1 = (function (){var statearr_26135 = state_26120;
(statearr_26135[(8)] = inst_26080);

(statearr_26135[(9)] = inst_26079);

return statearr_26135;
})();
if(cljs.core.truth_(inst_26081)){
var statearr_26136_26163 = state_26120__$1;
(statearr_26136_26163[(1)] = (8));

} else {
var statearr_26137_26164 = state_26120__$1;
(statearr_26137_26164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (14))){
var inst_26091 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
var statearr_26138_26165 = state_26120__$1;
(statearr_26138_26165[(2)] = inst_26091);

(statearr_26138_26165[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (16))){
var state_26120__$1 = state_26120;
var statearr_26139_26166 = state_26120__$1;
(statearr_26139_26166[(2)] = null);

(statearr_26139_26166[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (10))){
var inst_26112 = (state_26120[(2)]);
var state_26120__$1 = (function (){var statearr_26140 = state_26120;
(statearr_26140[(11)] = inst_26112);

return statearr_26140;
})();
var statearr_26141_26167 = state_26120__$1;
(statearr_26141_26167[(2)] = null);

(statearr_26141_26167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (8))){
var inst_26079 = (state_26120[(9)]);
var inst_26083 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26079,opts);
var state_26120__$1 = state_26120;
if(cljs.core.truth_(inst_26083)){
var statearr_26142_26168 = state_26120__$1;
(statearr_26142_26168[(1)] = (11));

} else {
var statearr_26143_26169 = state_26120__$1;
(statearr_26143_26169[(1)] = (12));

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
});})(c__21630__auto___26151,ch))
;
return ((function (switch__21518__auto__,c__21630__auto___26151,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21519__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21519__auto____0 = (function (){
var statearr_26147 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26147[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21519__auto__);

(statearr_26147[(1)] = (1));

return statearr_26147;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21519__auto____1 = (function (state_26120){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_26120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e26148){if((e26148 instanceof Object)){
var ex__21522__auto__ = e26148;
var statearr_26149_26170 = state_26120;
(statearr_26149_26170[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26171 = state_26120;
state_26120 = G__26171;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21519__auto__ = function(state_26120){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21519__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21519__auto____1.call(this,state_26120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21519__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21519__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto___26151,ch))
})();
var state__21632__auto__ = (function (){var statearr_26150 = f__21631__auto__.call(null);
(statearr_26150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto___26151);

return statearr_26150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto___26151,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26172_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26172_SHARP_));
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
var base_path_26179 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26179){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26177 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26178 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26178;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26177;
}}catch (e26176){if((e26176 instanceof Error)){
var e = e26176;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26179], null));
} else {
var e = e26176;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26179))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26180){
var map__26187 = p__26180;
var map__26187__$1 = ((((!((map__26187 == null)))?((((map__26187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26187):map__26187);
var opts = map__26187__$1;
var build_id = cljs.core.get.call(null,map__26187__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26187,map__26187__$1,opts,build_id){
return (function (p__26189){
var vec__26190 = p__26189;
var map__26191 = cljs.core.nth.call(null,vec__26190,(0),null);
var map__26191__$1 = ((((!((map__26191 == null)))?((((map__26191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26191):map__26191);
var msg = map__26191__$1;
var msg_name = cljs.core.get.call(null,map__26191__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26190,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26190,map__26191,map__26191__$1,msg,msg_name,_,map__26187,map__26187__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26190,map__26191,map__26191__$1,msg,msg_name,_,map__26187,map__26187__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26187,map__26187__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26197){
var vec__26198 = p__26197;
var map__26199 = cljs.core.nth.call(null,vec__26198,(0),null);
var map__26199__$1 = ((((!((map__26199 == null)))?((((map__26199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26199):map__26199);
var msg = map__26199__$1;
var msg_name = cljs.core.get.call(null,map__26199__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26198,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26201){
var map__26211 = p__26201;
var map__26211__$1 = ((((!((map__26211 == null)))?((((map__26211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26211):map__26211);
var on_compile_warning = cljs.core.get.call(null,map__26211__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26211__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26211,map__26211__$1,on_compile_warning,on_compile_fail){
return (function (p__26213){
var vec__26214 = p__26213;
var map__26215 = cljs.core.nth.call(null,vec__26214,(0),null);
var map__26215__$1 = ((((!((map__26215 == null)))?((((map__26215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26215):map__26215);
var msg = map__26215__$1;
var msg_name = cljs.core.get.call(null,map__26215__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26214,(1));
var pred__26217 = cljs.core._EQ_;
var expr__26218 = msg_name;
if(cljs.core.truth_(pred__26217.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26218))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26217.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26218))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26211,map__26211__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto__,msg_hist,msg_names,msg){
return (function (state_26426){
var state_val_26427 = (state_26426[(1)]);
if((state_val_26427 === (7))){
var inst_26354 = (state_26426[(2)]);
var state_26426__$1 = state_26426;
if(cljs.core.truth_(inst_26354)){
var statearr_26428_26474 = state_26426__$1;
(statearr_26428_26474[(1)] = (8));

} else {
var statearr_26429_26475 = state_26426__$1;
(statearr_26429_26475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (20))){
var inst_26420 = (state_26426[(2)]);
var state_26426__$1 = state_26426;
var statearr_26430_26476 = state_26426__$1;
(statearr_26430_26476[(2)] = inst_26420);

(statearr_26430_26476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (27))){
var inst_26416 = (state_26426[(2)]);
var state_26426__$1 = state_26426;
var statearr_26431_26477 = state_26426__$1;
(statearr_26431_26477[(2)] = inst_26416);

(statearr_26431_26477[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (1))){
var inst_26347 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26426__$1 = state_26426;
if(cljs.core.truth_(inst_26347)){
var statearr_26432_26478 = state_26426__$1;
(statearr_26432_26478[(1)] = (2));

} else {
var statearr_26433_26479 = state_26426__$1;
(statearr_26433_26479[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (24))){
var inst_26418 = (state_26426[(2)]);
var state_26426__$1 = state_26426;
var statearr_26434_26480 = state_26426__$1;
(statearr_26434_26480[(2)] = inst_26418);

(statearr_26434_26480[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (4))){
var inst_26424 = (state_26426[(2)]);
var state_26426__$1 = state_26426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26426__$1,inst_26424);
} else {
if((state_val_26427 === (15))){
var inst_26422 = (state_26426[(2)]);
var state_26426__$1 = state_26426;
var statearr_26435_26481 = state_26426__$1;
(statearr_26435_26481[(2)] = inst_26422);

(statearr_26435_26481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (21))){
var inst_26381 = (state_26426[(2)]);
var state_26426__$1 = state_26426;
var statearr_26436_26482 = state_26426__$1;
(statearr_26436_26482[(2)] = inst_26381);

(statearr_26436_26482[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (31))){
var inst_26405 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26426__$1 = state_26426;
if(cljs.core.truth_(inst_26405)){
var statearr_26437_26483 = state_26426__$1;
(statearr_26437_26483[(1)] = (34));

} else {
var statearr_26438_26484 = state_26426__$1;
(statearr_26438_26484[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (32))){
var inst_26414 = (state_26426[(2)]);
var state_26426__$1 = state_26426;
var statearr_26439_26485 = state_26426__$1;
(statearr_26439_26485[(2)] = inst_26414);

(statearr_26439_26485[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (33))){
var inst_26403 = (state_26426[(2)]);
var state_26426__$1 = state_26426;
var statearr_26440_26486 = state_26426__$1;
(statearr_26440_26486[(2)] = inst_26403);

(statearr_26440_26486[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (13))){
var inst_26368 = figwheel.client.heads_up.clear.call(null);
var state_26426__$1 = state_26426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26426__$1,(16),inst_26368);
} else {
if((state_val_26427 === (22))){
var inst_26385 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26386 = figwheel.client.heads_up.append_message.call(null,inst_26385);
var state_26426__$1 = state_26426;
var statearr_26441_26487 = state_26426__$1;
(statearr_26441_26487[(2)] = inst_26386);

(statearr_26441_26487[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (36))){
var inst_26412 = (state_26426[(2)]);
var state_26426__$1 = state_26426;
var statearr_26442_26488 = state_26426__$1;
(statearr_26442_26488[(2)] = inst_26412);

(statearr_26442_26488[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (29))){
var inst_26396 = (state_26426[(2)]);
var state_26426__$1 = state_26426;
var statearr_26443_26489 = state_26426__$1;
(statearr_26443_26489[(2)] = inst_26396);

(statearr_26443_26489[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (6))){
var inst_26349 = (state_26426[(7)]);
var state_26426__$1 = state_26426;
var statearr_26444_26490 = state_26426__$1;
(statearr_26444_26490[(2)] = inst_26349);

(statearr_26444_26490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (28))){
var inst_26392 = (state_26426[(2)]);
var inst_26393 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26394 = figwheel.client.heads_up.display_warning.call(null,inst_26393);
var state_26426__$1 = (function (){var statearr_26445 = state_26426;
(statearr_26445[(8)] = inst_26392);

return statearr_26445;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26426__$1,(29),inst_26394);
} else {
if((state_val_26427 === (25))){
var inst_26390 = figwheel.client.heads_up.clear.call(null);
var state_26426__$1 = state_26426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26426__$1,(28),inst_26390);
} else {
if((state_val_26427 === (34))){
var inst_26407 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26426__$1 = state_26426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26426__$1,(37),inst_26407);
} else {
if((state_val_26427 === (17))){
var inst_26374 = (state_26426[(2)]);
var state_26426__$1 = state_26426;
var statearr_26446_26491 = state_26426__$1;
(statearr_26446_26491[(2)] = inst_26374);

(statearr_26446_26491[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (3))){
var inst_26366 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26426__$1 = state_26426;
if(cljs.core.truth_(inst_26366)){
var statearr_26447_26492 = state_26426__$1;
(statearr_26447_26492[(1)] = (13));

} else {
var statearr_26448_26493 = state_26426__$1;
(statearr_26448_26493[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (12))){
var inst_26362 = (state_26426[(2)]);
var state_26426__$1 = state_26426;
var statearr_26449_26494 = state_26426__$1;
(statearr_26449_26494[(2)] = inst_26362);

(statearr_26449_26494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (2))){
var inst_26349 = (state_26426[(7)]);
var inst_26349__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26426__$1 = (function (){var statearr_26450 = state_26426;
(statearr_26450[(7)] = inst_26349__$1);

return statearr_26450;
})();
if(cljs.core.truth_(inst_26349__$1)){
var statearr_26451_26495 = state_26426__$1;
(statearr_26451_26495[(1)] = (5));

} else {
var statearr_26452_26496 = state_26426__$1;
(statearr_26452_26496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (23))){
var inst_26388 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26426__$1 = state_26426;
if(cljs.core.truth_(inst_26388)){
var statearr_26453_26497 = state_26426__$1;
(statearr_26453_26497[(1)] = (25));

} else {
var statearr_26454_26498 = state_26426__$1;
(statearr_26454_26498[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (35))){
var state_26426__$1 = state_26426;
var statearr_26455_26499 = state_26426__$1;
(statearr_26455_26499[(2)] = null);

(statearr_26455_26499[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (19))){
var inst_26383 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26426__$1 = state_26426;
if(cljs.core.truth_(inst_26383)){
var statearr_26456_26500 = state_26426__$1;
(statearr_26456_26500[(1)] = (22));

} else {
var statearr_26457_26501 = state_26426__$1;
(statearr_26457_26501[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (11))){
var inst_26358 = (state_26426[(2)]);
var state_26426__$1 = state_26426;
var statearr_26458_26502 = state_26426__$1;
(statearr_26458_26502[(2)] = inst_26358);

(statearr_26458_26502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (9))){
var inst_26360 = figwheel.client.heads_up.clear.call(null);
var state_26426__$1 = state_26426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26426__$1,(12),inst_26360);
} else {
if((state_val_26427 === (5))){
var inst_26351 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26426__$1 = state_26426;
var statearr_26459_26503 = state_26426__$1;
(statearr_26459_26503[(2)] = inst_26351);

(statearr_26459_26503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (14))){
var inst_26376 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26426__$1 = state_26426;
if(cljs.core.truth_(inst_26376)){
var statearr_26460_26504 = state_26426__$1;
(statearr_26460_26504[(1)] = (18));

} else {
var statearr_26461_26505 = state_26426__$1;
(statearr_26461_26505[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (26))){
var inst_26398 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26426__$1 = state_26426;
if(cljs.core.truth_(inst_26398)){
var statearr_26462_26506 = state_26426__$1;
(statearr_26462_26506[(1)] = (30));

} else {
var statearr_26463_26507 = state_26426__$1;
(statearr_26463_26507[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (16))){
var inst_26370 = (state_26426[(2)]);
var inst_26371 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26372 = figwheel.client.heads_up.display_exception.call(null,inst_26371);
var state_26426__$1 = (function (){var statearr_26464 = state_26426;
(statearr_26464[(9)] = inst_26370);

return statearr_26464;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26426__$1,(17),inst_26372);
} else {
if((state_val_26427 === (30))){
var inst_26400 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26401 = figwheel.client.heads_up.display_warning.call(null,inst_26400);
var state_26426__$1 = state_26426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26426__$1,(33),inst_26401);
} else {
if((state_val_26427 === (10))){
var inst_26364 = (state_26426[(2)]);
var state_26426__$1 = state_26426;
var statearr_26465_26508 = state_26426__$1;
(statearr_26465_26508[(2)] = inst_26364);

(statearr_26465_26508[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (18))){
var inst_26378 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26379 = figwheel.client.heads_up.display_exception.call(null,inst_26378);
var state_26426__$1 = state_26426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26426__$1,(21),inst_26379);
} else {
if((state_val_26427 === (37))){
var inst_26409 = (state_26426[(2)]);
var state_26426__$1 = state_26426;
var statearr_26466_26509 = state_26426__$1;
(statearr_26466_26509[(2)] = inst_26409);

(statearr_26466_26509[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (8))){
var inst_26356 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26426__$1 = state_26426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26426__$1,(11),inst_26356);
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
});})(c__21630__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21518__auto__,c__21630__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21519__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21519__auto____0 = (function (){
var statearr_26470 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26470[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21519__auto__);

(statearr_26470[(1)] = (1));

return statearr_26470;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21519__auto____1 = (function (state_26426){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_26426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e26471){if((e26471 instanceof Object)){
var ex__21522__auto__ = e26471;
var statearr_26472_26510 = state_26426;
(statearr_26472_26510[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26511 = state_26426;
state_26426 = G__26511;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21519__auto__ = function(state_26426){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21519__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21519__auto____1.call(this,state_26426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21519__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21519__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto__,msg_hist,msg_names,msg))
})();
var state__21632__auto__ = (function (){var statearr_26473 = f__21631__auto__.call(null);
(statearr_26473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto__);

return statearr_26473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto__,msg_hist,msg_names,msg))
);

return c__21630__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21630__auto___26574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto___26574,ch){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto___26574,ch){
return (function (state_26557){
var state_val_26558 = (state_26557[(1)]);
if((state_val_26558 === (1))){
var state_26557__$1 = state_26557;
var statearr_26559_26575 = state_26557__$1;
(statearr_26559_26575[(2)] = null);

(statearr_26559_26575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26558 === (2))){
var state_26557__$1 = state_26557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26557__$1,(4),ch);
} else {
if((state_val_26558 === (3))){
var inst_26555 = (state_26557[(2)]);
var state_26557__$1 = state_26557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26557__$1,inst_26555);
} else {
if((state_val_26558 === (4))){
var inst_26545 = (state_26557[(7)]);
var inst_26545__$1 = (state_26557[(2)]);
var state_26557__$1 = (function (){var statearr_26560 = state_26557;
(statearr_26560[(7)] = inst_26545__$1);

return statearr_26560;
})();
if(cljs.core.truth_(inst_26545__$1)){
var statearr_26561_26576 = state_26557__$1;
(statearr_26561_26576[(1)] = (5));

} else {
var statearr_26562_26577 = state_26557__$1;
(statearr_26562_26577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26558 === (5))){
var inst_26545 = (state_26557[(7)]);
var inst_26547 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26545);
var state_26557__$1 = state_26557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26557__$1,(8),inst_26547);
} else {
if((state_val_26558 === (6))){
var state_26557__$1 = state_26557;
var statearr_26563_26578 = state_26557__$1;
(statearr_26563_26578[(2)] = null);

(statearr_26563_26578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26558 === (7))){
var inst_26553 = (state_26557[(2)]);
var state_26557__$1 = state_26557;
var statearr_26564_26579 = state_26557__$1;
(statearr_26564_26579[(2)] = inst_26553);

(statearr_26564_26579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26558 === (8))){
var inst_26549 = (state_26557[(2)]);
var state_26557__$1 = (function (){var statearr_26565 = state_26557;
(statearr_26565[(8)] = inst_26549);

return statearr_26565;
})();
var statearr_26566_26580 = state_26557__$1;
(statearr_26566_26580[(2)] = null);

(statearr_26566_26580[(1)] = (2));


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
});})(c__21630__auto___26574,ch))
;
return ((function (switch__21518__auto__,c__21630__auto___26574,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21519__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21519__auto____0 = (function (){
var statearr_26570 = [null,null,null,null,null,null,null,null,null];
(statearr_26570[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21519__auto__);

(statearr_26570[(1)] = (1));

return statearr_26570;
});
var figwheel$client$heads_up_plugin_$_state_machine__21519__auto____1 = (function (state_26557){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_26557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e26571){if((e26571 instanceof Object)){
var ex__21522__auto__ = e26571;
var statearr_26572_26581 = state_26557;
(statearr_26572_26581[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26582 = state_26557;
state_26557 = G__26582;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21519__auto__ = function(state_26557){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21519__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21519__auto____1.call(this,state_26557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21519__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21519__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto___26574,ch))
})();
var state__21632__auto__ = (function (){var statearr_26573 = f__21631__auto__.call(null);
(statearr_26573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto___26574);

return statearr_26573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto___26574,ch))
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
var c__21630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto__){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto__){
return (function (state_26603){
var state_val_26604 = (state_26603[(1)]);
if((state_val_26604 === (1))){
var inst_26598 = cljs.core.async.timeout.call(null,(3000));
var state_26603__$1 = state_26603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26603__$1,(2),inst_26598);
} else {
if((state_val_26604 === (2))){
var inst_26600 = (state_26603[(2)]);
var inst_26601 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26603__$1 = (function (){var statearr_26605 = state_26603;
(statearr_26605[(7)] = inst_26600);

return statearr_26605;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26603__$1,inst_26601);
} else {
return null;
}
}
});})(c__21630__auto__))
;
return ((function (switch__21518__auto__,c__21630__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21519__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21519__auto____0 = (function (){
var statearr_26609 = [null,null,null,null,null,null,null,null];
(statearr_26609[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21519__auto__);

(statearr_26609[(1)] = (1));

return statearr_26609;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21519__auto____1 = (function (state_26603){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_26603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e26610){if((e26610 instanceof Object)){
var ex__21522__auto__ = e26610;
var statearr_26611_26613 = state_26603;
(statearr_26611_26613[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26614 = state_26603;
state_26603 = G__26614;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21519__auto__ = function(state_26603){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21519__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21519__auto____1.call(this,state_26603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21519__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21519__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto__))
})();
var state__21632__auto__ = (function (){var statearr_26612 = f__21631__auto__.call(null);
(statearr_26612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto__);

return statearr_26612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto__))
);

return c__21630__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26615){
var map__26622 = p__26615;
var map__26622__$1 = ((((!((map__26622 == null)))?((((map__26622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26622):map__26622);
var ed = map__26622__$1;
var formatted_exception = cljs.core.get.call(null,map__26622__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26622__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26622__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26624_26628 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26625_26629 = null;
var count__26626_26630 = (0);
var i__26627_26631 = (0);
while(true){
if((i__26627_26631 < count__26626_26630)){
var msg_26632 = cljs.core._nth.call(null,chunk__26625_26629,i__26627_26631);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26632);

var G__26633 = seq__26624_26628;
var G__26634 = chunk__26625_26629;
var G__26635 = count__26626_26630;
var G__26636 = (i__26627_26631 + (1));
seq__26624_26628 = G__26633;
chunk__26625_26629 = G__26634;
count__26626_26630 = G__26635;
i__26627_26631 = G__26636;
continue;
} else {
var temp__4657__auto___26637 = cljs.core.seq.call(null,seq__26624_26628);
if(temp__4657__auto___26637){
var seq__26624_26638__$1 = temp__4657__auto___26637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26624_26638__$1)){
var c__19270__auto___26639 = cljs.core.chunk_first.call(null,seq__26624_26638__$1);
var G__26640 = cljs.core.chunk_rest.call(null,seq__26624_26638__$1);
var G__26641 = c__19270__auto___26639;
var G__26642 = cljs.core.count.call(null,c__19270__auto___26639);
var G__26643 = (0);
seq__26624_26628 = G__26640;
chunk__26625_26629 = G__26641;
count__26626_26630 = G__26642;
i__26627_26631 = G__26643;
continue;
} else {
var msg_26644 = cljs.core.first.call(null,seq__26624_26638__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26644);

var G__26645 = cljs.core.next.call(null,seq__26624_26638__$1);
var G__26646 = null;
var G__26647 = (0);
var G__26648 = (0);
seq__26624_26628 = G__26645;
chunk__26625_26629 = G__26646;
count__26626_26630 = G__26647;
i__26627_26631 = G__26648;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26649){
var map__26652 = p__26649;
var map__26652__$1 = ((((!((map__26652 == null)))?((((map__26652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26652):map__26652);
var w = map__26652__$1;
var message = cljs.core.get.call(null,map__26652__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__26660 = cljs.core.seq.call(null,plugins);
var chunk__26661 = null;
var count__26662 = (0);
var i__26663 = (0);
while(true){
if((i__26663 < count__26662)){
var vec__26664 = cljs.core._nth.call(null,chunk__26661,i__26663);
var k = cljs.core.nth.call(null,vec__26664,(0),null);
var plugin = cljs.core.nth.call(null,vec__26664,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26666 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26660,chunk__26661,count__26662,i__26663,pl_26666,vec__26664,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26666.call(null,msg_hist);
});})(seq__26660,chunk__26661,count__26662,i__26663,pl_26666,vec__26664,k,plugin))
);
} else {
}

var G__26667 = seq__26660;
var G__26668 = chunk__26661;
var G__26669 = count__26662;
var G__26670 = (i__26663 + (1));
seq__26660 = G__26667;
chunk__26661 = G__26668;
count__26662 = G__26669;
i__26663 = G__26670;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26660);
if(temp__4657__auto__){
var seq__26660__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26660__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__26660__$1);
var G__26671 = cljs.core.chunk_rest.call(null,seq__26660__$1);
var G__26672 = c__19270__auto__;
var G__26673 = cljs.core.count.call(null,c__19270__auto__);
var G__26674 = (0);
seq__26660 = G__26671;
chunk__26661 = G__26672;
count__26662 = G__26673;
i__26663 = G__26674;
continue;
} else {
var vec__26665 = cljs.core.first.call(null,seq__26660__$1);
var k = cljs.core.nth.call(null,vec__26665,(0),null);
var plugin = cljs.core.nth.call(null,vec__26665,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26675 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26660,chunk__26661,count__26662,i__26663,pl_26675,vec__26665,k,plugin,seq__26660__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26675.call(null,msg_hist);
});})(seq__26660,chunk__26661,count__26662,i__26663,pl_26675,vec__26665,k,plugin,seq__26660__$1,temp__4657__auto__))
);
} else {
}

var G__26676 = cljs.core.next.call(null,seq__26660__$1);
var G__26677 = null;
var G__26678 = (0);
var G__26679 = (0);
seq__26660 = G__26676;
chunk__26661 = G__26677;
count__26662 = G__26678;
i__26663 = G__26679;
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
var args26680 = [];
var len__19529__auto___26683 = arguments.length;
var i__19530__auto___26684 = (0);
while(true){
if((i__19530__auto___26684 < len__19529__auto___26683)){
args26680.push((arguments[i__19530__auto___26684]));

var G__26685 = (i__19530__auto___26684 + (1));
i__19530__auto___26684 = G__26685;
continue;
} else {
}
break;
}

var G__26682 = args26680.length;
switch (G__26682) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26680.length)].join('')));

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
var len__19529__auto___26691 = arguments.length;
var i__19530__auto___26692 = (0);
while(true){
if((i__19530__auto___26692 < len__19529__auto___26691)){
args__19536__auto__.push((arguments[i__19530__auto___26692]));

var G__26693 = (i__19530__auto___26692 + (1));
i__19530__auto___26692 = G__26693;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26688){
var map__26689 = p__26688;
var map__26689__$1 = ((((!((map__26689 == null)))?((((map__26689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26689):map__26689);
var opts = map__26689__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26687){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26687));
});

//# sourceMappingURL=client.js.map?rel=1505315426739