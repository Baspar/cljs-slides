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
var pred__26327 = cljs.core._EQ_;
var expr__26328 = (function (){var or__18459__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e26331){if((e26331 instanceof Error)){
var e = e26331;
return false;
} else {
throw e26331;

}
}})();
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26327.call(null,"true",expr__26328))){
return true;
} else {
if(cljs.core.truth_(pred__26327.call(null,"false",expr__26328))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26328)].join('')));
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
}catch (e26333){if((e26333 instanceof Error)){
var e = e26333;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e26333;

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
var len__19529__auto___26335 = arguments.length;
var i__19530__auto___26336 = (0);
while(true){
if((i__19530__auto___26336 < len__19529__auto___26335)){
args__19536__auto__.push((arguments[i__19530__auto___26336]));

var G__26337 = (i__19530__auto___26336 + (1));
i__19530__auto___26336 = G__26337;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq26334){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26334));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26338){
var map__26341 = p__26338;
var map__26341__$1 = ((((!((map__26341 == null)))?((((map__26341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26341):map__26341);
var message = cljs.core.get.call(null,map__26341__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26341__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20574__auto___26503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto___26503,ch){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto___26503,ch){
return (function (state_26472){
var state_val_26473 = (state_26472[(1)]);
if((state_val_26473 === (7))){
var inst_26468 = (state_26472[(2)]);
var state_26472__$1 = state_26472;
var statearr_26474_26504 = state_26472__$1;
(statearr_26474_26504[(2)] = inst_26468);

(statearr_26474_26504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (1))){
var state_26472__$1 = state_26472;
var statearr_26475_26505 = state_26472__$1;
(statearr_26475_26505[(2)] = null);

(statearr_26475_26505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (4))){
var inst_26425 = (state_26472[(7)]);
var inst_26425__$1 = (state_26472[(2)]);
var state_26472__$1 = (function (){var statearr_26476 = state_26472;
(statearr_26476[(7)] = inst_26425__$1);

return statearr_26476;
})();
if(cljs.core.truth_(inst_26425__$1)){
var statearr_26477_26506 = state_26472__$1;
(statearr_26477_26506[(1)] = (5));

} else {
var statearr_26478_26507 = state_26472__$1;
(statearr_26478_26507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (15))){
var inst_26432 = (state_26472[(8)]);
var inst_26447 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26432);
var inst_26448 = cljs.core.first.call(null,inst_26447);
var inst_26449 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26448);
var inst_26450 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26449)].join('');
var inst_26451 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26450);
var state_26472__$1 = state_26472;
var statearr_26479_26508 = state_26472__$1;
(statearr_26479_26508[(2)] = inst_26451);

(statearr_26479_26508[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (13))){
var inst_26456 = (state_26472[(2)]);
var state_26472__$1 = state_26472;
var statearr_26480_26509 = state_26472__$1;
(statearr_26480_26509[(2)] = inst_26456);

(statearr_26480_26509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (6))){
var state_26472__$1 = state_26472;
var statearr_26481_26510 = state_26472__$1;
(statearr_26481_26510[(2)] = null);

(statearr_26481_26510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (17))){
var inst_26454 = (state_26472[(2)]);
var state_26472__$1 = state_26472;
var statearr_26482_26511 = state_26472__$1;
(statearr_26482_26511[(2)] = inst_26454);

(statearr_26482_26511[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (3))){
var inst_26470 = (state_26472[(2)]);
var state_26472__$1 = state_26472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26472__$1,inst_26470);
} else {
if((state_val_26473 === (12))){
var inst_26431 = (state_26472[(9)]);
var inst_26445 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26431,opts);
var state_26472__$1 = state_26472;
if(cljs.core.truth_(inst_26445)){
var statearr_26483_26512 = state_26472__$1;
(statearr_26483_26512[(1)] = (15));

} else {
var statearr_26484_26513 = state_26472__$1;
(statearr_26484_26513[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (2))){
var state_26472__$1 = state_26472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26472__$1,(4),ch);
} else {
if((state_val_26473 === (11))){
var inst_26432 = (state_26472[(8)]);
var inst_26437 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26438 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26432);
var inst_26439 = cljs.core.async.timeout.call(null,(1000));
var inst_26440 = [inst_26438,inst_26439];
var inst_26441 = (new cljs.core.PersistentVector(null,2,(5),inst_26437,inst_26440,null));
var state_26472__$1 = state_26472;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26472__$1,(14),inst_26441);
} else {
if((state_val_26473 === (9))){
var inst_26432 = (state_26472[(8)]);
var inst_26458 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26459 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26432);
var inst_26460 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26459);
var inst_26461 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26460)].join('');
var inst_26462 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26461);
var state_26472__$1 = (function (){var statearr_26485 = state_26472;
(statearr_26485[(10)] = inst_26458);

return statearr_26485;
})();
var statearr_26486_26514 = state_26472__$1;
(statearr_26486_26514[(2)] = inst_26462);

(statearr_26486_26514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (5))){
var inst_26425 = (state_26472[(7)]);
var inst_26427 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26428 = (new cljs.core.PersistentArrayMap(null,2,inst_26427,null));
var inst_26429 = (new cljs.core.PersistentHashSet(null,inst_26428,null));
var inst_26430 = figwheel.client.focus_msgs.call(null,inst_26429,inst_26425);
var inst_26431 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26430);
var inst_26432 = cljs.core.first.call(null,inst_26430);
var inst_26433 = figwheel.client.autoload_QMARK_.call(null);
var state_26472__$1 = (function (){var statearr_26487 = state_26472;
(statearr_26487[(8)] = inst_26432);

(statearr_26487[(9)] = inst_26431);

return statearr_26487;
})();
if(cljs.core.truth_(inst_26433)){
var statearr_26488_26515 = state_26472__$1;
(statearr_26488_26515[(1)] = (8));

} else {
var statearr_26489_26516 = state_26472__$1;
(statearr_26489_26516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (14))){
var inst_26443 = (state_26472[(2)]);
var state_26472__$1 = state_26472;
var statearr_26490_26517 = state_26472__$1;
(statearr_26490_26517[(2)] = inst_26443);

(statearr_26490_26517[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (16))){
var state_26472__$1 = state_26472;
var statearr_26491_26518 = state_26472__$1;
(statearr_26491_26518[(2)] = null);

(statearr_26491_26518[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (10))){
var inst_26464 = (state_26472[(2)]);
var state_26472__$1 = (function (){var statearr_26492 = state_26472;
(statearr_26492[(11)] = inst_26464);

return statearr_26492;
})();
var statearr_26493_26519 = state_26472__$1;
(statearr_26493_26519[(2)] = null);

(statearr_26493_26519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (8))){
var inst_26431 = (state_26472[(9)]);
var inst_26435 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26431,opts);
var state_26472__$1 = state_26472;
if(cljs.core.truth_(inst_26435)){
var statearr_26494_26520 = state_26472__$1;
(statearr_26494_26520[(1)] = (11));

} else {
var statearr_26495_26521 = state_26472__$1;
(statearr_26495_26521[(1)] = (12));

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
});})(c__20574__auto___26503,ch))
;
return ((function (switch__20553__auto__,c__20574__auto___26503,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20554__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20554__auto____0 = (function (){
var statearr_26499 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26499[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20554__auto__);

(statearr_26499[(1)] = (1));

return statearr_26499;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20554__auto____1 = (function (state_26472){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_26472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e26500){if((e26500 instanceof Object)){
var ex__20557__auto__ = e26500;
var statearr_26501_26522 = state_26472;
(statearr_26501_26522[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26523 = state_26472;
state_26472 = G__26523;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20554__auto__ = function(state_26472){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20554__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20554__auto____1.call(this,state_26472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20554__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20554__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto___26503,ch))
})();
var state__20576__auto__ = (function (){var statearr_26502 = f__20575__auto__.call(null);
(statearr_26502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto___26503);

return statearr_26502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto___26503,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26524_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26524_SHARP_));
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
var base_path_26531 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26531){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26529 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26530 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26530;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26529;
}}catch (e26528){if((e26528 instanceof Error)){
var e = e26528;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26531], null));
} else {
var e = e26528;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26531))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26532){
var map__26539 = p__26532;
var map__26539__$1 = ((((!((map__26539 == null)))?((((map__26539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26539):map__26539);
var opts = map__26539__$1;
var build_id = cljs.core.get.call(null,map__26539__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26539,map__26539__$1,opts,build_id){
return (function (p__26541){
var vec__26542 = p__26541;
var map__26543 = cljs.core.nth.call(null,vec__26542,(0),null);
var map__26543__$1 = ((((!((map__26543 == null)))?((((map__26543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26543):map__26543);
var msg = map__26543__$1;
var msg_name = cljs.core.get.call(null,map__26543__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26542,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26542,map__26543,map__26543__$1,msg,msg_name,_,map__26539,map__26539__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26542,map__26543,map__26543__$1,msg,msg_name,_,map__26539,map__26539__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26539,map__26539__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26549){
var vec__26550 = p__26549;
var map__26551 = cljs.core.nth.call(null,vec__26550,(0),null);
var map__26551__$1 = ((((!((map__26551 == null)))?((((map__26551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26551):map__26551);
var msg = map__26551__$1;
var msg_name = cljs.core.get.call(null,map__26551__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26550,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26553){
var map__26563 = p__26553;
var map__26563__$1 = ((((!((map__26563 == null)))?((((map__26563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26563):map__26563);
var on_compile_warning = cljs.core.get.call(null,map__26563__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26563__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26563,map__26563__$1,on_compile_warning,on_compile_fail){
return (function (p__26565){
var vec__26566 = p__26565;
var map__26567 = cljs.core.nth.call(null,vec__26566,(0),null);
var map__26567__$1 = ((((!((map__26567 == null)))?((((map__26567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26567):map__26567);
var msg = map__26567__$1;
var msg_name = cljs.core.get.call(null,map__26567__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26566,(1));
var pred__26569 = cljs.core._EQ_;
var expr__26570 = msg_name;
if(cljs.core.truth_(pred__26569.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26570))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26569.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26570))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26563,map__26563__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20574__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto__,msg_hist,msg_names,msg){
return (function (state_26778){
var state_val_26779 = (state_26778[(1)]);
if((state_val_26779 === (7))){
var inst_26706 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
if(cljs.core.truth_(inst_26706)){
var statearr_26780_26826 = state_26778__$1;
(statearr_26780_26826[(1)] = (8));

} else {
var statearr_26781_26827 = state_26778__$1;
(statearr_26781_26827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (20))){
var inst_26772 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26782_26828 = state_26778__$1;
(statearr_26782_26828[(2)] = inst_26772);

(statearr_26782_26828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (27))){
var inst_26768 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26783_26829 = state_26778__$1;
(statearr_26783_26829[(2)] = inst_26768);

(statearr_26783_26829[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (1))){
var inst_26699 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26778__$1 = state_26778;
if(cljs.core.truth_(inst_26699)){
var statearr_26784_26830 = state_26778__$1;
(statearr_26784_26830[(1)] = (2));

} else {
var statearr_26785_26831 = state_26778__$1;
(statearr_26785_26831[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (24))){
var inst_26770 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26786_26832 = state_26778__$1;
(statearr_26786_26832[(2)] = inst_26770);

(statearr_26786_26832[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (4))){
var inst_26776 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26778__$1,inst_26776);
} else {
if((state_val_26779 === (15))){
var inst_26774 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26787_26833 = state_26778__$1;
(statearr_26787_26833[(2)] = inst_26774);

(statearr_26787_26833[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (21))){
var inst_26733 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26788_26834 = state_26778__$1;
(statearr_26788_26834[(2)] = inst_26733);

(statearr_26788_26834[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (31))){
var inst_26757 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26778__$1 = state_26778;
if(cljs.core.truth_(inst_26757)){
var statearr_26789_26835 = state_26778__$1;
(statearr_26789_26835[(1)] = (34));

} else {
var statearr_26790_26836 = state_26778__$1;
(statearr_26790_26836[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (32))){
var inst_26766 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26791_26837 = state_26778__$1;
(statearr_26791_26837[(2)] = inst_26766);

(statearr_26791_26837[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (33))){
var inst_26755 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26792_26838 = state_26778__$1;
(statearr_26792_26838[(2)] = inst_26755);

(statearr_26792_26838[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (13))){
var inst_26720 = figwheel.client.heads_up.clear.call(null);
var state_26778__$1 = state_26778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26778__$1,(16),inst_26720);
} else {
if((state_val_26779 === (22))){
var inst_26737 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26738 = figwheel.client.heads_up.append_message.call(null,inst_26737);
var state_26778__$1 = state_26778;
var statearr_26793_26839 = state_26778__$1;
(statearr_26793_26839[(2)] = inst_26738);

(statearr_26793_26839[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (36))){
var inst_26764 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26794_26840 = state_26778__$1;
(statearr_26794_26840[(2)] = inst_26764);

(statearr_26794_26840[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (29))){
var inst_26748 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26795_26841 = state_26778__$1;
(statearr_26795_26841[(2)] = inst_26748);

(statearr_26795_26841[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (6))){
var inst_26701 = (state_26778[(7)]);
var state_26778__$1 = state_26778;
var statearr_26796_26842 = state_26778__$1;
(statearr_26796_26842[(2)] = inst_26701);

(statearr_26796_26842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (28))){
var inst_26744 = (state_26778[(2)]);
var inst_26745 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26746 = figwheel.client.heads_up.display_warning.call(null,inst_26745);
var state_26778__$1 = (function (){var statearr_26797 = state_26778;
(statearr_26797[(8)] = inst_26744);

return statearr_26797;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26778__$1,(29),inst_26746);
} else {
if((state_val_26779 === (25))){
var inst_26742 = figwheel.client.heads_up.clear.call(null);
var state_26778__$1 = state_26778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26778__$1,(28),inst_26742);
} else {
if((state_val_26779 === (34))){
var inst_26759 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26778__$1 = state_26778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26778__$1,(37),inst_26759);
} else {
if((state_val_26779 === (17))){
var inst_26726 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26798_26843 = state_26778__$1;
(statearr_26798_26843[(2)] = inst_26726);

(statearr_26798_26843[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (3))){
var inst_26718 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26778__$1 = state_26778;
if(cljs.core.truth_(inst_26718)){
var statearr_26799_26844 = state_26778__$1;
(statearr_26799_26844[(1)] = (13));

} else {
var statearr_26800_26845 = state_26778__$1;
(statearr_26800_26845[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (12))){
var inst_26714 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26801_26846 = state_26778__$1;
(statearr_26801_26846[(2)] = inst_26714);

(statearr_26801_26846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (2))){
var inst_26701 = (state_26778[(7)]);
var inst_26701__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26778__$1 = (function (){var statearr_26802 = state_26778;
(statearr_26802[(7)] = inst_26701__$1);

return statearr_26802;
})();
if(cljs.core.truth_(inst_26701__$1)){
var statearr_26803_26847 = state_26778__$1;
(statearr_26803_26847[(1)] = (5));

} else {
var statearr_26804_26848 = state_26778__$1;
(statearr_26804_26848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (23))){
var inst_26740 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26778__$1 = state_26778;
if(cljs.core.truth_(inst_26740)){
var statearr_26805_26849 = state_26778__$1;
(statearr_26805_26849[(1)] = (25));

} else {
var statearr_26806_26850 = state_26778__$1;
(statearr_26806_26850[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (35))){
var state_26778__$1 = state_26778;
var statearr_26807_26851 = state_26778__$1;
(statearr_26807_26851[(2)] = null);

(statearr_26807_26851[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (19))){
var inst_26735 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26778__$1 = state_26778;
if(cljs.core.truth_(inst_26735)){
var statearr_26808_26852 = state_26778__$1;
(statearr_26808_26852[(1)] = (22));

} else {
var statearr_26809_26853 = state_26778__$1;
(statearr_26809_26853[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (11))){
var inst_26710 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26810_26854 = state_26778__$1;
(statearr_26810_26854[(2)] = inst_26710);

(statearr_26810_26854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (9))){
var inst_26712 = figwheel.client.heads_up.clear.call(null);
var state_26778__$1 = state_26778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26778__$1,(12),inst_26712);
} else {
if((state_val_26779 === (5))){
var inst_26703 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26778__$1 = state_26778;
var statearr_26811_26855 = state_26778__$1;
(statearr_26811_26855[(2)] = inst_26703);

(statearr_26811_26855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (14))){
var inst_26728 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26778__$1 = state_26778;
if(cljs.core.truth_(inst_26728)){
var statearr_26812_26856 = state_26778__$1;
(statearr_26812_26856[(1)] = (18));

} else {
var statearr_26813_26857 = state_26778__$1;
(statearr_26813_26857[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (26))){
var inst_26750 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26778__$1 = state_26778;
if(cljs.core.truth_(inst_26750)){
var statearr_26814_26858 = state_26778__$1;
(statearr_26814_26858[(1)] = (30));

} else {
var statearr_26815_26859 = state_26778__$1;
(statearr_26815_26859[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (16))){
var inst_26722 = (state_26778[(2)]);
var inst_26723 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26724 = figwheel.client.heads_up.display_exception.call(null,inst_26723);
var state_26778__$1 = (function (){var statearr_26816 = state_26778;
(statearr_26816[(9)] = inst_26722);

return statearr_26816;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26778__$1,(17),inst_26724);
} else {
if((state_val_26779 === (30))){
var inst_26752 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26753 = figwheel.client.heads_up.display_warning.call(null,inst_26752);
var state_26778__$1 = state_26778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26778__$1,(33),inst_26753);
} else {
if((state_val_26779 === (10))){
var inst_26716 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26817_26860 = state_26778__$1;
(statearr_26817_26860[(2)] = inst_26716);

(statearr_26817_26860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (18))){
var inst_26730 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26731 = figwheel.client.heads_up.display_exception.call(null,inst_26730);
var state_26778__$1 = state_26778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26778__$1,(21),inst_26731);
} else {
if((state_val_26779 === (37))){
var inst_26761 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
var statearr_26818_26861 = state_26778__$1;
(statearr_26818_26861[(2)] = inst_26761);

(statearr_26818_26861[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (8))){
var inst_26708 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26778__$1 = state_26778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26778__$1,(11),inst_26708);
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
});})(c__20574__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20553__auto__,c__20574__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20554__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20554__auto____0 = (function (){
var statearr_26822 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26822[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20554__auto__);

(statearr_26822[(1)] = (1));

return statearr_26822;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20554__auto____1 = (function (state_26778){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_26778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e26823){if((e26823 instanceof Object)){
var ex__20557__auto__ = e26823;
var statearr_26824_26862 = state_26778;
(statearr_26824_26862[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26863 = state_26778;
state_26778 = G__26863;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20554__auto__ = function(state_26778){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20554__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20554__auto____1.call(this,state_26778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20554__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20554__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto__,msg_hist,msg_names,msg))
})();
var state__20576__auto__ = (function (){var statearr_26825 = f__20575__auto__.call(null);
(statearr_26825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto__);

return statearr_26825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto__,msg_hist,msg_names,msg))
);

return c__20574__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20574__auto___26926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto___26926,ch){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto___26926,ch){
return (function (state_26909){
var state_val_26910 = (state_26909[(1)]);
if((state_val_26910 === (1))){
var state_26909__$1 = state_26909;
var statearr_26911_26927 = state_26909__$1;
(statearr_26911_26927[(2)] = null);

(statearr_26911_26927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (2))){
var state_26909__$1 = state_26909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26909__$1,(4),ch);
} else {
if((state_val_26910 === (3))){
var inst_26907 = (state_26909[(2)]);
var state_26909__$1 = state_26909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26909__$1,inst_26907);
} else {
if((state_val_26910 === (4))){
var inst_26897 = (state_26909[(7)]);
var inst_26897__$1 = (state_26909[(2)]);
var state_26909__$1 = (function (){var statearr_26912 = state_26909;
(statearr_26912[(7)] = inst_26897__$1);

return statearr_26912;
})();
if(cljs.core.truth_(inst_26897__$1)){
var statearr_26913_26928 = state_26909__$1;
(statearr_26913_26928[(1)] = (5));

} else {
var statearr_26914_26929 = state_26909__$1;
(statearr_26914_26929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (5))){
var inst_26897 = (state_26909[(7)]);
var inst_26899 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26897);
var state_26909__$1 = state_26909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26909__$1,(8),inst_26899);
} else {
if((state_val_26910 === (6))){
var state_26909__$1 = state_26909;
var statearr_26915_26930 = state_26909__$1;
(statearr_26915_26930[(2)] = null);

(statearr_26915_26930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (7))){
var inst_26905 = (state_26909[(2)]);
var state_26909__$1 = state_26909;
var statearr_26916_26931 = state_26909__$1;
(statearr_26916_26931[(2)] = inst_26905);

(statearr_26916_26931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (8))){
var inst_26901 = (state_26909[(2)]);
var state_26909__$1 = (function (){var statearr_26917 = state_26909;
(statearr_26917[(8)] = inst_26901);

return statearr_26917;
})();
var statearr_26918_26932 = state_26909__$1;
(statearr_26918_26932[(2)] = null);

(statearr_26918_26932[(1)] = (2));


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
});})(c__20574__auto___26926,ch))
;
return ((function (switch__20553__auto__,c__20574__auto___26926,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20554__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20554__auto____0 = (function (){
var statearr_26922 = [null,null,null,null,null,null,null,null,null];
(statearr_26922[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20554__auto__);

(statearr_26922[(1)] = (1));

return statearr_26922;
});
var figwheel$client$heads_up_plugin_$_state_machine__20554__auto____1 = (function (state_26909){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_26909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e26923){if((e26923 instanceof Object)){
var ex__20557__auto__ = e26923;
var statearr_26924_26933 = state_26909;
(statearr_26924_26933[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26934 = state_26909;
state_26909 = G__26934;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20554__auto__ = function(state_26909){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20554__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20554__auto____1.call(this,state_26909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20554__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20554__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto___26926,ch))
})();
var state__20576__auto__ = (function (){var statearr_26925 = f__20575__auto__.call(null);
(statearr_26925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto___26926);

return statearr_26925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto___26926,ch))
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
var c__20574__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto__){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto__){
return (function (state_26955){
var state_val_26956 = (state_26955[(1)]);
if((state_val_26956 === (1))){
var inst_26950 = cljs.core.async.timeout.call(null,(3000));
var state_26955__$1 = state_26955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26955__$1,(2),inst_26950);
} else {
if((state_val_26956 === (2))){
var inst_26952 = (state_26955[(2)]);
var inst_26953 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26955__$1 = (function (){var statearr_26957 = state_26955;
(statearr_26957[(7)] = inst_26952);

return statearr_26957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26955__$1,inst_26953);
} else {
return null;
}
}
});})(c__20574__auto__))
;
return ((function (switch__20553__auto__,c__20574__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20554__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20554__auto____0 = (function (){
var statearr_26961 = [null,null,null,null,null,null,null,null];
(statearr_26961[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20554__auto__);

(statearr_26961[(1)] = (1));

return statearr_26961;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20554__auto____1 = (function (state_26955){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_26955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e26962){if((e26962 instanceof Object)){
var ex__20557__auto__ = e26962;
var statearr_26963_26965 = state_26955;
(statearr_26963_26965[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26966 = state_26955;
state_26955 = G__26966;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20554__auto__ = function(state_26955){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20554__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20554__auto____1.call(this,state_26955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20554__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20554__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto__))
})();
var state__20576__auto__ = (function (){var statearr_26964 = f__20575__auto__.call(null);
(statearr_26964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto__);

return statearr_26964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto__))
);

return c__20574__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26967){
var map__26974 = p__26967;
var map__26974__$1 = ((((!((map__26974 == null)))?((((map__26974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26974):map__26974);
var ed = map__26974__$1;
var formatted_exception = cljs.core.get.call(null,map__26974__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26974__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26974__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26976_26980 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26977_26981 = null;
var count__26978_26982 = (0);
var i__26979_26983 = (0);
while(true){
if((i__26979_26983 < count__26978_26982)){
var msg_26984 = cljs.core._nth.call(null,chunk__26977_26981,i__26979_26983);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26984);

var G__26985 = seq__26976_26980;
var G__26986 = chunk__26977_26981;
var G__26987 = count__26978_26982;
var G__26988 = (i__26979_26983 + (1));
seq__26976_26980 = G__26985;
chunk__26977_26981 = G__26986;
count__26978_26982 = G__26987;
i__26979_26983 = G__26988;
continue;
} else {
var temp__4657__auto___26989 = cljs.core.seq.call(null,seq__26976_26980);
if(temp__4657__auto___26989){
var seq__26976_26990__$1 = temp__4657__auto___26989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26976_26990__$1)){
var c__19270__auto___26991 = cljs.core.chunk_first.call(null,seq__26976_26990__$1);
var G__26992 = cljs.core.chunk_rest.call(null,seq__26976_26990__$1);
var G__26993 = c__19270__auto___26991;
var G__26994 = cljs.core.count.call(null,c__19270__auto___26991);
var G__26995 = (0);
seq__26976_26980 = G__26992;
chunk__26977_26981 = G__26993;
count__26978_26982 = G__26994;
i__26979_26983 = G__26995;
continue;
} else {
var msg_26996 = cljs.core.first.call(null,seq__26976_26990__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26996);

var G__26997 = cljs.core.next.call(null,seq__26976_26990__$1);
var G__26998 = null;
var G__26999 = (0);
var G__27000 = (0);
seq__26976_26980 = G__26997;
chunk__26977_26981 = G__26998;
count__26978_26982 = G__26999;
i__26979_26983 = G__27000;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27001){
var map__27004 = p__27001;
var map__27004__$1 = ((((!((map__27004 == null)))?((((map__27004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27004):map__27004);
var w = map__27004__$1;
var message = cljs.core.get.call(null,map__27004__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__27012 = cljs.core.seq.call(null,plugins);
var chunk__27013 = null;
var count__27014 = (0);
var i__27015 = (0);
while(true){
if((i__27015 < count__27014)){
var vec__27016 = cljs.core._nth.call(null,chunk__27013,i__27015);
var k = cljs.core.nth.call(null,vec__27016,(0),null);
var plugin = cljs.core.nth.call(null,vec__27016,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27018 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27012,chunk__27013,count__27014,i__27015,pl_27018,vec__27016,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27018.call(null,msg_hist);
});})(seq__27012,chunk__27013,count__27014,i__27015,pl_27018,vec__27016,k,plugin))
);
} else {
}

var G__27019 = seq__27012;
var G__27020 = chunk__27013;
var G__27021 = count__27014;
var G__27022 = (i__27015 + (1));
seq__27012 = G__27019;
chunk__27013 = G__27020;
count__27014 = G__27021;
i__27015 = G__27022;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27012);
if(temp__4657__auto__){
var seq__27012__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27012__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__27012__$1);
var G__27023 = cljs.core.chunk_rest.call(null,seq__27012__$1);
var G__27024 = c__19270__auto__;
var G__27025 = cljs.core.count.call(null,c__19270__auto__);
var G__27026 = (0);
seq__27012 = G__27023;
chunk__27013 = G__27024;
count__27014 = G__27025;
i__27015 = G__27026;
continue;
} else {
var vec__27017 = cljs.core.first.call(null,seq__27012__$1);
var k = cljs.core.nth.call(null,vec__27017,(0),null);
var plugin = cljs.core.nth.call(null,vec__27017,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27027 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27012,chunk__27013,count__27014,i__27015,pl_27027,vec__27017,k,plugin,seq__27012__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27027.call(null,msg_hist);
});})(seq__27012,chunk__27013,count__27014,i__27015,pl_27027,vec__27017,k,plugin,seq__27012__$1,temp__4657__auto__))
);
} else {
}

var G__27028 = cljs.core.next.call(null,seq__27012__$1);
var G__27029 = null;
var G__27030 = (0);
var G__27031 = (0);
seq__27012 = G__27028;
chunk__27013 = G__27029;
count__27014 = G__27030;
i__27015 = G__27031;
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
var args27032 = [];
var len__19529__auto___27035 = arguments.length;
var i__19530__auto___27036 = (0);
while(true){
if((i__19530__auto___27036 < len__19529__auto___27035)){
args27032.push((arguments[i__19530__auto___27036]));

var G__27037 = (i__19530__auto___27036 + (1));
i__19530__auto___27036 = G__27037;
continue;
} else {
}
break;
}

var G__27034 = args27032.length;
switch (G__27034) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27032.length)].join('')));

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
var len__19529__auto___27043 = arguments.length;
var i__19530__auto___27044 = (0);
while(true){
if((i__19530__auto___27044 < len__19529__auto___27043)){
args__19536__auto__.push((arguments[i__19530__auto___27044]));

var G__27045 = (i__19530__auto___27044 + (1));
i__19530__auto___27044 = G__27045;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27040){
var map__27041 = p__27040;
var map__27041__$1 = ((((!((map__27041 == null)))?((((map__27041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27041):map__27041);
var opts = map__27041__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27039){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27039));
});

//# sourceMappingURL=client.js.map?rel=1471682748042