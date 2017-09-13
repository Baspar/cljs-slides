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
var pred__25974 = cljs.core._EQ_;
var expr__25975 = (function (){var or__18459__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e25978){if((e25978 instanceof Error)){
var e = e25978;
return false;
} else {
throw e25978;

}
}})();
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25974.call(null,"true",expr__25975))){
return true;
} else {
if(cljs.core.truth_(pred__25974.call(null,"false",expr__25975))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25975)].join('')));
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
}catch (e25980){if((e25980 instanceof Error)){
var e = e25980;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e25980;

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
var len__19529__auto___25982 = arguments.length;
var i__19530__auto___25983 = (0);
while(true){
if((i__19530__auto___25983 < len__19529__auto___25982)){
args__19536__auto__.push((arguments[i__19530__auto___25983]));

var G__25984 = (i__19530__auto___25983 + (1));
i__19530__auto___25983 = G__25984;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq25981){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25981));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25985){
var map__25988 = p__25985;
var map__25988__$1 = ((((!((map__25988 == null)))?((((map__25988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25988):map__25988);
var message = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__21629__auto___26150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto___26150,ch){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto___26150,ch){
return (function (state_26119){
var state_val_26120 = (state_26119[(1)]);
if((state_val_26120 === (7))){
var inst_26115 = (state_26119[(2)]);
var state_26119__$1 = state_26119;
var statearr_26121_26151 = state_26119__$1;
(statearr_26121_26151[(2)] = inst_26115);

(statearr_26121_26151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26120 === (1))){
var state_26119__$1 = state_26119;
var statearr_26122_26152 = state_26119__$1;
(statearr_26122_26152[(2)] = null);

(statearr_26122_26152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26120 === (4))){
var inst_26072 = (state_26119[(7)]);
var inst_26072__$1 = (state_26119[(2)]);
var state_26119__$1 = (function (){var statearr_26123 = state_26119;
(statearr_26123[(7)] = inst_26072__$1);

return statearr_26123;
})();
if(cljs.core.truth_(inst_26072__$1)){
var statearr_26124_26153 = state_26119__$1;
(statearr_26124_26153[(1)] = (5));

} else {
var statearr_26125_26154 = state_26119__$1;
(statearr_26125_26154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26120 === (15))){
var inst_26079 = (state_26119[(8)]);
var inst_26094 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26079);
var inst_26095 = cljs.core.first.call(null,inst_26094);
var inst_26096 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26095);
var inst_26097 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26096)].join('');
var inst_26098 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26097);
var state_26119__$1 = state_26119;
var statearr_26126_26155 = state_26119__$1;
(statearr_26126_26155[(2)] = inst_26098);

(statearr_26126_26155[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26120 === (13))){
var inst_26103 = (state_26119[(2)]);
var state_26119__$1 = state_26119;
var statearr_26127_26156 = state_26119__$1;
(statearr_26127_26156[(2)] = inst_26103);

(statearr_26127_26156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26120 === (6))){
var state_26119__$1 = state_26119;
var statearr_26128_26157 = state_26119__$1;
(statearr_26128_26157[(2)] = null);

(statearr_26128_26157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26120 === (17))){
var inst_26101 = (state_26119[(2)]);
var state_26119__$1 = state_26119;
var statearr_26129_26158 = state_26119__$1;
(statearr_26129_26158[(2)] = inst_26101);

(statearr_26129_26158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26120 === (3))){
var inst_26117 = (state_26119[(2)]);
var state_26119__$1 = state_26119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26119__$1,inst_26117);
} else {
if((state_val_26120 === (12))){
var inst_26078 = (state_26119[(9)]);
var inst_26092 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26078,opts);
var state_26119__$1 = state_26119;
if(cljs.core.truth_(inst_26092)){
var statearr_26130_26159 = state_26119__$1;
(statearr_26130_26159[(1)] = (15));

} else {
var statearr_26131_26160 = state_26119__$1;
(statearr_26131_26160[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26120 === (2))){
var state_26119__$1 = state_26119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26119__$1,(4),ch);
} else {
if((state_val_26120 === (11))){
var inst_26079 = (state_26119[(8)]);
var inst_26084 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26085 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26079);
var inst_26086 = cljs.core.async.timeout.call(null,(1000));
var inst_26087 = [inst_26085,inst_26086];
var inst_26088 = (new cljs.core.PersistentVector(null,2,(5),inst_26084,inst_26087,null));
var state_26119__$1 = state_26119;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26119__$1,(14),inst_26088);
} else {
if((state_val_26120 === (9))){
var inst_26079 = (state_26119[(8)]);
var inst_26105 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26106 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26079);
var inst_26107 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26106);
var inst_26108 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26107)].join('');
var inst_26109 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26108);
var state_26119__$1 = (function (){var statearr_26132 = state_26119;
(statearr_26132[(10)] = inst_26105);

return statearr_26132;
})();
var statearr_26133_26161 = state_26119__$1;
(statearr_26133_26161[(2)] = inst_26109);

(statearr_26133_26161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26120 === (5))){
var inst_26072 = (state_26119[(7)]);
var inst_26074 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26075 = (new cljs.core.PersistentArrayMap(null,2,inst_26074,null));
var inst_26076 = (new cljs.core.PersistentHashSet(null,inst_26075,null));
var inst_26077 = figwheel.client.focus_msgs.call(null,inst_26076,inst_26072);
var inst_26078 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26077);
var inst_26079 = cljs.core.first.call(null,inst_26077);
var inst_26080 = figwheel.client.autoload_QMARK_.call(null);
var state_26119__$1 = (function (){var statearr_26134 = state_26119;
(statearr_26134[(9)] = inst_26078);

(statearr_26134[(8)] = inst_26079);

return statearr_26134;
})();
if(cljs.core.truth_(inst_26080)){
var statearr_26135_26162 = state_26119__$1;
(statearr_26135_26162[(1)] = (8));

} else {
var statearr_26136_26163 = state_26119__$1;
(statearr_26136_26163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26120 === (14))){
var inst_26090 = (state_26119[(2)]);
var state_26119__$1 = state_26119;
var statearr_26137_26164 = state_26119__$1;
(statearr_26137_26164[(2)] = inst_26090);

(statearr_26137_26164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26120 === (16))){
var state_26119__$1 = state_26119;
var statearr_26138_26165 = state_26119__$1;
(statearr_26138_26165[(2)] = null);

(statearr_26138_26165[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26120 === (10))){
var inst_26111 = (state_26119[(2)]);
var state_26119__$1 = (function (){var statearr_26139 = state_26119;
(statearr_26139[(11)] = inst_26111);

return statearr_26139;
})();
var statearr_26140_26166 = state_26119__$1;
(statearr_26140_26166[(2)] = null);

(statearr_26140_26166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26120 === (8))){
var inst_26078 = (state_26119[(9)]);
var inst_26082 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26078,opts);
var state_26119__$1 = state_26119;
if(cljs.core.truth_(inst_26082)){
var statearr_26141_26167 = state_26119__$1;
(statearr_26141_26167[(1)] = (11));

} else {
var statearr_26142_26168 = state_26119__$1;
(statearr_26142_26168[(1)] = (12));

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
});})(c__21629__auto___26150,ch))
;
return ((function (switch__21517__auto__,c__21629__auto___26150,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21518__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21518__auto____0 = (function (){
var statearr_26146 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26146[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21518__auto__);

(statearr_26146[(1)] = (1));

return statearr_26146;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21518__auto____1 = (function (state_26119){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_26119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e26147){if((e26147 instanceof Object)){
var ex__21521__auto__ = e26147;
var statearr_26148_26169 = state_26119;
(statearr_26148_26169[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26170 = state_26119;
state_26119 = G__26170;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21518__auto__ = function(state_26119){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21518__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21518__auto____1.call(this,state_26119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21518__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21518__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto___26150,ch))
})();
var state__21631__auto__ = (function (){var statearr_26149 = f__21630__auto__.call(null);
(statearr_26149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto___26150);

return statearr_26149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto___26150,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26171_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26171_SHARP_));
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
var base_path_26178 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26178){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26176 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26177 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26177;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26176;
}}catch (e26175){if((e26175 instanceof Error)){
var e = e26175;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26178], null));
} else {
var e = e26175;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26178))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26179){
var map__26186 = p__26179;
var map__26186__$1 = ((((!((map__26186 == null)))?((((map__26186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26186):map__26186);
var opts = map__26186__$1;
var build_id = cljs.core.get.call(null,map__26186__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26186,map__26186__$1,opts,build_id){
return (function (p__26188){
var vec__26189 = p__26188;
var map__26190 = cljs.core.nth.call(null,vec__26189,(0),null);
var map__26190__$1 = ((((!((map__26190 == null)))?((((map__26190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26190):map__26190);
var msg = map__26190__$1;
var msg_name = cljs.core.get.call(null,map__26190__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26189,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26189,map__26190,map__26190__$1,msg,msg_name,_,map__26186,map__26186__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26189,map__26190,map__26190__$1,msg,msg_name,_,map__26186,map__26186__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26186,map__26186__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26196){
var vec__26197 = p__26196;
var map__26198 = cljs.core.nth.call(null,vec__26197,(0),null);
var map__26198__$1 = ((((!((map__26198 == null)))?((((map__26198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26198):map__26198);
var msg = map__26198__$1;
var msg_name = cljs.core.get.call(null,map__26198__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26197,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26200){
var map__26210 = p__26200;
var map__26210__$1 = ((((!((map__26210 == null)))?((((map__26210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26210):map__26210);
var on_compile_warning = cljs.core.get.call(null,map__26210__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26210__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26210,map__26210__$1,on_compile_warning,on_compile_fail){
return (function (p__26212){
var vec__26213 = p__26212;
var map__26214 = cljs.core.nth.call(null,vec__26213,(0),null);
var map__26214__$1 = ((((!((map__26214 == null)))?((((map__26214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26214):map__26214);
var msg = map__26214__$1;
var msg_name = cljs.core.get.call(null,map__26214__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26213,(1));
var pred__26216 = cljs.core._EQ_;
var expr__26217 = msg_name;
if(cljs.core.truth_(pred__26216.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26217))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26216.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26217))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26210,map__26210__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21629__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto__,msg_hist,msg_names,msg){
return (function (state_26425){
var state_val_26426 = (state_26425[(1)]);
if((state_val_26426 === (7))){
var inst_26353 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
if(cljs.core.truth_(inst_26353)){
var statearr_26427_26473 = state_26425__$1;
(statearr_26427_26473[(1)] = (8));

} else {
var statearr_26428_26474 = state_26425__$1;
(statearr_26428_26474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (20))){
var inst_26419 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26429_26475 = state_26425__$1;
(statearr_26429_26475[(2)] = inst_26419);

(statearr_26429_26475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (27))){
var inst_26415 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26430_26476 = state_26425__$1;
(statearr_26430_26476[(2)] = inst_26415);

(statearr_26430_26476[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (1))){
var inst_26346 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26425__$1 = state_26425;
if(cljs.core.truth_(inst_26346)){
var statearr_26431_26477 = state_26425__$1;
(statearr_26431_26477[(1)] = (2));

} else {
var statearr_26432_26478 = state_26425__$1;
(statearr_26432_26478[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (24))){
var inst_26417 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26433_26479 = state_26425__$1;
(statearr_26433_26479[(2)] = inst_26417);

(statearr_26433_26479[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (4))){
var inst_26423 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26425__$1,inst_26423);
} else {
if((state_val_26426 === (15))){
var inst_26421 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26434_26480 = state_26425__$1;
(statearr_26434_26480[(2)] = inst_26421);

(statearr_26434_26480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (21))){
var inst_26380 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26435_26481 = state_26425__$1;
(statearr_26435_26481[(2)] = inst_26380);

(statearr_26435_26481[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (31))){
var inst_26404 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26425__$1 = state_26425;
if(cljs.core.truth_(inst_26404)){
var statearr_26436_26482 = state_26425__$1;
(statearr_26436_26482[(1)] = (34));

} else {
var statearr_26437_26483 = state_26425__$1;
(statearr_26437_26483[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (32))){
var inst_26413 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26438_26484 = state_26425__$1;
(statearr_26438_26484[(2)] = inst_26413);

(statearr_26438_26484[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (33))){
var inst_26402 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26439_26485 = state_26425__$1;
(statearr_26439_26485[(2)] = inst_26402);

(statearr_26439_26485[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (13))){
var inst_26367 = figwheel.client.heads_up.clear.call(null);
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26425__$1,(16),inst_26367);
} else {
if((state_val_26426 === (22))){
var inst_26384 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26385 = figwheel.client.heads_up.append_message.call(null,inst_26384);
var state_26425__$1 = state_26425;
var statearr_26440_26486 = state_26425__$1;
(statearr_26440_26486[(2)] = inst_26385);

(statearr_26440_26486[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (36))){
var inst_26411 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26441_26487 = state_26425__$1;
(statearr_26441_26487[(2)] = inst_26411);

(statearr_26441_26487[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (29))){
var inst_26395 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26442_26488 = state_26425__$1;
(statearr_26442_26488[(2)] = inst_26395);

(statearr_26442_26488[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (6))){
var inst_26348 = (state_26425[(7)]);
var state_26425__$1 = state_26425;
var statearr_26443_26489 = state_26425__$1;
(statearr_26443_26489[(2)] = inst_26348);

(statearr_26443_26489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (28))){
var inst_26391 = (state_26425[(2)]);
var inst_26392 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26393 = figwheel.client.heads_up.display_warning.call(null,inst_26392);
var state_26425__$1 = (function (){var statearr_26444 = state_26425;
(statearr_26444[(8)] = inst_26391);

return statearr_26444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26425__$1,(29),inst_26393);
} else {
if((state_val_26426 === (25))){
var inst_26389 = figwheel.client.heads_up.clear.call(null);
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26425__$1,(28),inst_26389);
} else {
if((state_val_26426 === (34))){
var inst_26406 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26425__$1,(37),inst_26406);
} else {
if((state_val_26426 === (17))){
var inst_26373 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26445_26490 = state_26425__$1;
(statearr_26445_26490[(2)] = inst_26373);

(statearr_26445_26490[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (3))){
var inst_26365 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26425__$1 = state_26425;
if(cljs.core.truth_(inst_26365)){
var statearr_26446_26491 = state_26425__$1;
(statearr_26446_26491[(1)] = (13));

} else {
var statearr_26447_26492 = state_26425__$1;
(statearr_26447_26492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (12))){
var inst_26361 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26448_26493 = state_26425__$1;
(statearr_26448_26493[(2)] = inst_26361);

(statearr_26448_26493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (2))){
var inst_26348 = (state_26425[(7)]);
var inst_26348__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26425__$1 = (function (){var statearr_26449 = state_26425;
(statearr_26449[(7)] = inst_26348__$1);

return statearr_26449;
})();
if(cljs.core.truth_(inst_26348__$1)){
var statearr_26450_26494 = state_26425__$1;
(statearr_26450_26494[(1)] = (5));

} else {
var statearr_26451_26495 = state_26425__$1;
(statearr_26451_26495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (23))){
var inst_26387 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26425__$1 = state_26425;
if(cljs.core.truth_(inst_26387)){
var statearr_26452_26496 = state_26425__$1;
(statearr_26452_26496[(1)] = (25));

} else {
var statearr_26453_26497 = state_26425__$1;
(statearr_26453_26497[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (35))){
var state_26425__$1 = state_26425;
var statearr_26454_26498 = state_26425__$1;
(statearr_26454_26498[(2)] = null);

(statearr_26454_26498[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (19))){
var inst_26382 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26425__$1 = state_26425;
if(cljs.core.truth_(inst_26382)){
var statearr_26455_26499 = state_26425__$1;
(statearr_26455_26499[(1)] = (22));

} else {
var statearr_26456_26500 = state_26425__$1;
(statearr_26456_26500[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (11))){
var inst_26357 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26457_26501 = state_26425__$1;
(statearr_26457_26501[(2)] = inst_26357);

(statearr_26457_26501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (9))){
var inst_26359 = figwheel.client.heads_up.clear.call(null);
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26425__$1,(12),inst_26359);
} else {
if((state_val_26426 === (5))){
var inst_26350 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26425__$1 = state_26425;
var statearr_26458_26502 = state_26425__$1;
(statearr_26458_26502[(2)] = inst_26350);

(statearr_26458_26502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (14))){
var inst_26375 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26425__$1 = state_26425;
if(cljs.core.truth_(inst_26375)){
var statearr_26459_26503 = state_26425__$1;
(statearr_26459_26503[(1)] = (18));

} else {
var statearr_26460_26504 = state_26425__$1;
(statearr_26460_26504[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (26))){
var inst_26397 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26425__$1 = state_26425;
if(cljs.core.truth_(inst_26397)){
var statearr_26461_26505 = state_26425__$1;
(statearr_26461_26505[(1)] = (30));

} else {
var statearr_26462_26506 = state_26425__$1;
(statearr_26462_26506[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (16))){
var inst_26369 = (state_26425[(2)]);
var inst_26370 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26371 = figwheel.client.heads_up.display_exception.call(null,inst_26370);
var state_26425__$1 = (function (){var statearr_26463 = state_26425;
(statearr_26463[(9)] = inst_26369);

return statearr_26463;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26425__$1,(17),inst_26371);
} else {
if((state_val_26426 === (30))){
var inst_26399 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26400 = figwheel.client.heads_up.display_warning.call(null,inst_26399);
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26425__$1,(33),inst_26400);
} else {
if((state_val_26426 === (10))){
var inst_26363 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26464_26507 = state_26425__$1;
(statearr_26464_26507[(2)] = inst_26363);

(statearr_26464_26507[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (18))){
var inst_26377 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26378 = figwheel.client.heads_up.display_exception.call(null,inst_26377);
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26425__$1,(21),inst_26378);
} else {
if((state_val_26426 === (37))){
var inst_26408 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26465_26508 = state_26425__$1;
(statearr_26465_26508[(2)] = inst_26408);

(statearr_26465_26508[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (8))){
var inst_26355 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26425__$1,(11),inst_26355);
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
});})(c__21629__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21517__auto__,c__21629__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21518__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21518__auto____0 = (function (){
var statearr_26469 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26469[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21518__auto__);

(statearr_26469[(1)] = (1));

return statearr_26469;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21518__auto____1 = (function (state_26425){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_26425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e26470){if((e26470 instanceof Object)){
var ex__21521__auto__ = e26470;
var statearr_26471_26509 = state_26425;
(statearr_26471_26509[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26510 = state_26425;
state_26425 = G__26510;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21518__auto__ = function(state_26425){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21518__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21518__auto____1.call(this,state_26425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21518__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21518__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto__,msg_hist,msg_names,msg))
})();
var state__21631__auto__ = (function (){var statearr_26472 = f__21630__auto__.call(null);
(statearr_26472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto__);

return statearr_26472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto__,msg_hist,msg_names,msg))
);

return c__21629__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21629__auto___26573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto___26573,ch){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto___26573,ch){
return (function (state_26556){
var state_val_26557 = (state_26556[(1)]);
if((state_val_26557 === (1))){
var state_26556__$1 = state_26556;
var statearr_26558_26574 = state_26556__$1;
(statearr_26558_26574[(2)] = null);

(statearr_26558_26574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (2))){
var state_26556__$1 = state_26556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26556__$1,(4),ch);
} else {
if((state_val_26557 === (3))){
var inst_26554 = (state_26556[(2)]);
var state_26556__$1 = state_26556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26556__$1,inst_26554);
} else {
if((state_val_26557 === (4))){
var inst_26544 = (state_26556[(7)]);
var inst_26544__$1 = (state_26556[(2)]);
var state_26556__$1 = (function (){var statearr_26559 = state_26556;
(statearr_26559[(7)] = inst_26544__$1);

return statearr_26559;
})();
if(cljs.core.truth_(inst_26544__$1)){
var statearr_26560_26575 = state_26556__$1;
(statearr_26560_26575[(1)] = (5));

} else {
var statearr_26561_26576 = state_26556__$1;
(statearr_26561_26576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (5))){
var inst_26544 = (state_26556[(7)]);
var inst_26546 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26544);
var state_26556__$1 = state_26556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26556__$1,(8),inst_26546);
} else {
if((state_val_26557 === (6))){
var state_26556__$1 = state_26556;
var statearr_26562_26577 = state_26556__$1;
(statearr_26562_26577[(2)] = null);

(statearr_26562_26577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (7))){
var inst_26552 = (state_26556[(2)]);
var state_26556__$1 = state_26556;
var statearr_26563_26578 = state_26556__$1;
(statearr_26563_26578[(2)] = inst_26552);

(statearr_26563_26578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (8))){
var inst_26548 = (state_26556[(2)]);
var state_26556__$1 = (function (){var statearr_26564 = state_26556;
(statearr_26564[(8)] = inst_26548);

return statearr_26564;
})();
var statearr_26565_26579 = state_26556__$1;
(statearr_26565_26579[(2)] = null);

(statearr_26565_26579[(1)] = (2));


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
});})(c__21629__auto___26573,ch))
;
return ((function (switch__21517__auto__,c__21629__auto___26573,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21518__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21518__auto____0 = (function (){
var statearr_26569 = [null,null,null,null,null,null,null,null,null];
(statearr_26569[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21518__auto__);

(statearr_26569[(1)] = (1));

return statearr_26569;
});
var figwheel$client$heads_up_plugin_$_state_machine__21518__auto____1 = (function (state_26556){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_26556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e26570){if((e26570 instanceof Object)){
var ex__21521__auto__ = e26570;
var statearr_26571_26580 = state_26556;
(statearr_26571_26580[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26581 = state_26556;
state_26556 = G__26581;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21518__auto__ = function(state_26556){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21518__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21518__auto____1.call(this,state_26556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21518__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21518__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto___26573,ch))
})();
var state__21631__auto__ = (function (){var statearr_26572 = f__21630__auto__.call(null);
(statearr_26572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto___26573);

return statearr_26572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto___26573,ch))
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
var c__21629__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto__){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto__){
return (function (state_26602){
var state_val_26603 = (state_26602[(1)]);
if((state_val_26603 === (1))){
var inst_26597 = cljs.core.async.timeout.call(null,(3000));
var state_26602__$1 = state_26602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26602__$1,(2),inst_26597);
} else {
if((state_val_26603 === (2))){
var inst_26599 = (state_26602[(2)]);
var inst_26600 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26602__$1 = (function (){var statearr_26604 = state_26602;
(statearr_26604[(7)] = inst_26599);

return statearr_26604;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26602__$1,inst_26600);
} else {
return null;
}
}
});})(c__21629__auto__))
;
return ((function (switch__21517__auto__,c__21629__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21518__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21518__auto____0 = (function (){
var statearr_26608 = [null,null,null,null,null,null,null,null];
(statearr_26608[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21518__auto__);

(statearr_26608[(1)] = (1));

return statearr_26608;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21518__auto____1 = (function (state_26602){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_26602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e26609){if((e26609 instanceof Object)){
var ex__21521__auto__ = e26609;
var statearr_26610_26612 = state_26602;
(statearr_26610_26612[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26613 = state_26602;
state_26602 = G__26613;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21518__auto__ = function(state_26602){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21518__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21518__auto____1.call(this,state_26602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21518__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21518__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto__))
})();
var state__21631__auto__ = (function (){var statearr_26611 = f__21630__auto__.call(null);
(statearr_26611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto__);

return statearr_26611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto__))
);

return c__21629__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26614){
var map__26621 = p__26614;
var map__26621__$1 = ((((!((map__26621 == null)))?((((map__26621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26621):map__26621);
var ed = map__26621__$1;
var formatted_exception = cljs.core.get.call(null,map__26621__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26621__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26621__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26623_26627 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26624_26628 = null;
var count__26625_26629 = (0);
var i__26626_26630 = (0);
while(true){
if((i__26626_26630 < count__26625_26629)){
var msg_26631 = cljs.core._nth.call(null,chunk__26624_26628,i__26626_26630);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26631);

var G__26632 = seq__26623_26627;
var G__26633 = chunk__26624_26628;
var G__26634 = count__26625_26629;
var G__26635 = (i__26626_26630 + (1));
seq__26623_26627 = G__26632;
chunk__26624_26628 = G__26633;
count__26625_26629 = G__26634;
i__26626_26630 = G__26635;
continue;
} else {
var temp__4657__auto___26636 = cljs.core.seq.call(null,seq__26623_26627);
if(temp__4657__auto___26636){
var seq__26623_26637__$1 = temp__4657__auto___26636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26623_26637__$1)){
var c__19270__auto___26638 = cljs.core.chunk_first.call(null,seq__26623_26637__$1);
var G__26639 = cljs.core.chunk_rest.call(null,seq__26623_26637__$1);
var G__26640 = c__19270__auto___26638;
var G__26641 = cljs.core.count.call(null,c__19270__auto___26638);
var G__26642 = (0);
seq__26623_26627 = G__26639;
chunk__26624_26628 = G__26640;
count__26625_26629 = G__26641;
i__26626_26630 = G__26642;
continue;
} else {
var msg_26643 = cljs.core.first.call(null,seq__26623_26637__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26643);

var G__26644 = cljs.core.next.call(null,seq__26623_26637__$1);
var G__26645 = null;
var G__26646 = (0);
var G__26647 = (0);
seq__26623_26627 = G__26644;
chunk__26624_26628 = G__26645;
count__26625_26629 = G__26646;
i__26626_26630 = G__26647;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26648){
var map__26651 = p__26648;
var map__26651__$1 = ((((!((map__26651 == null)))?((((map__26651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26651):map__26651);
var w = map__26651__$1;
var message = cljs.core.get.call(null,map__26651__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__26659 = cljs.core.seq.call(null,plugins);
var chunk__26660 = null;
var count__26661 = (0);
var i__26662 = (0);
while(true){
if((i__26662 < count__26661)){
var vec__26663 = cljs.core._nth.call(null,chunk__26660,i__26662);
var k = cljs.core.nth.call(null,vec__26663,(0),null);
var plugin = cljs.core.nth.call(null,vec__26663,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26665 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26659,chunk__26660,count__26661,i__26662,pl_26665,vec__26663,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26665.call(null,msg_hist);
});})(seq__26659,chunk__26660,count__26661,i__26662,pl_26665,vec__26663,k,plugin))
);
} else {
}

var G__26666 = seq__26659;
var G__26667 = chunk__26660;
var G__26668 = count__26661;
var G__26669 = (i__26662 + (1));
seq__26659 = G__26666;
chunk__26660 = G__26667;
count__26661 = G__26668;
i__26662 = G__26669;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26659);
if(temp__4657__auto__){
var seq__26659__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26659__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__26659__$1);
var G__26670 = cljs.core.chunk_rest.call(null,seq__26659__$1);
var G__26671 = c__19270__auto__;
var G__26672 = cljs.core.count.call(null,c__19270__auto__);
var G__26673 = (0);
seq__26659 = G__26670;
chunk__26660 = G__26671;
count__26661 = G__26672;
i__26662 = G__26673;
continue;
} else {
var vec__26664 = cljs.core.first.call(null,seq__26659__$1);
var k = cljs.core.nth.call(null,vec__26664,(0),null);
var plugin = cljs.core.nth.call(null,vec__26664,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26674 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26659,chunk__26660,count__26661,i__26662,pl_26674,vec__26664,k,plugin,seq__26659__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26674.call(null,msg_hist);
});})(seq__26659,chunk__26660,count__26661,i__26662,pl_26674,vec__26664,k,plugin,seq__26659__$1,temp__4657__auto__))
);
} else {
}

var G__26675 = cljs.core.next.call(null,seq__26659__$1);
var G__26676 = null;
var G__26677 = (0);
var G__26678 = (0);
seq__26659 = G__26675;
chunk__26660 = G__26676;
count__26661 = G__26677;
i__26662 = G__26678;
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
var args26679 = [];
var len__19529__auto___26682 = arguments.length;
var i__19530__auto___26683 = (0);
while(true){
if((i__19530__auto___26683 < len__19529__auto___26682)){
args26679.push((arguments[i__19530__auto___26683]));

var G__26684 = (i__19530__auto___26683 + (1));
i__19530__auto___26683 = G__26684;
continue;
} else {
}
break;
}

var G__26681 = args26679.length;
switch (G__26681) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26679.length)].join('')));

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
var len__19529__auto___26690 = arguments.length;
var i__19530__auto___26691 = (0);
while(true){
if((i__19530__auto___26691 < len__19529__auto___26690)){
args__19536__auto__.push((arguments[i__19530__auto___26691]));

var G__26692 = (i__19530__auto___26691 + (1));
i__19530__auto___26691 = G__26692;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26687){
var map__26688 = p__26687;
var map__26688__$1 = ((((!((map__26688 == null)))?((((map__26688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26688):map__26688);
var opts = map__26688__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26686){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26686));
});

//# sourceMappingURL=client.js.map?rel=1505274418961