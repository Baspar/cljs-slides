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
var pred__28656 = cljs.core._EQ_;
var expr__28657 = (function (){var or__18460__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e28660){if((e28660 instanceof Error)){
var e = e28660;
return false;
} else {
throw e28660;

}
}})();
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28656.call(null,"true",expr__28657))){
return true;
} else {
if(cljs.core.truth_(pred__28656.call(null,"false",expr__28657))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28657)].join('')));
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
}catch (e28662){if((e28662 instanceof Error)){
var e = e28662;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e28662;

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
var len__19530__auto___28664 = arguments.length;
var i__19531__auto___28665 = (0);
while(true){
if((i__19531__auto___28665 < len__19530__auto___28664)){
args__19537__auto__.push((arguments[i__19531__auto___28665]));

var G__28666 = (i__19531__auto___28665 + (1));
i__19531__auto___28665 = G__28666;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq28663){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28663));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28667){
var map__28670 = p__28667;
var map__28670__$1 = ((((!((map__28670 == null)))?((((map__28670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28670):map__28670);
var message = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__22651__auto___28832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto___28832,ch){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto___28832,ch){
return (function (state_28801){
var state_val_28802 = (state_28801[(1)]);
if((state_val_28802 === (7))){
var inst_28797 = (state_28801[(2)]);
var state_28801__$1 = state_28801;
var statearr_28803_28833 = state_28801__$1;
(statearr_28803_28833[(2)] = inst_28797);

(statearr_28803_28833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (1))){
var state_28801__$1 = state_28801;
var statearr_28804_28834 = state_28801__$1;
(statearr_28804_28834[(2)] = null);

(statearr_28804_28834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (4))){
var inst_28754 = (state_28801[(7)]);
var inst_28754__$1 = (state_28801[(2)]);
var state_28801__$1 = (function (){var statearr_28805 = state_28801;
(statearr_28805[(7)] = inst_28754__$1);

return statearr_28805;
})();
if(cljs.core.truth_(inst_28754__$1)){
var statearr_28806_28835 = state_28801__$1;
(statearr_28806_28835[(1)] = (5));

} else {
var statearr_28807_28836 = state_28801__$1;
(statearr_28807_28836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (15))){
var inst_28761 = (state_28801[(8)]);
var inst_28776 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28761);
var inst_28777 = cljs.core.first.call(null,inst_28776);
var inst_28778 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28777);
var inst_28779 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28778)].join('');
var inst_28780 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28779);
var state_28801__$1 = state_28801;
var statearr_28808_28837 = state_28801__$1;
(statearr_28808_28837[(2)] = inst_28780);

(statearr_28808_28837[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (13))){
var inst_28785 = (state_28801[(2)]);
var state_28801__$1 = state_28801;
var statearr_28809_28838 = state_28801__$1;
(statearr_28809_28838[(2)] = inst_28785);

(statearr_28809_28838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (6))){
var state_28801__$1 = state_28801;
var statearr_28810_28839 = state_28801__$1;
(statearr_28810_28839[(2)] = null);

(statearr_28810_28839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (17))){
var inst_28783 = (state_28801[(2)]);
var state_28801__$1 = state_28801;
var statearr_28811_28840 = state_28801__$1;
(statearr_28811_28840[(2)] = inst_28783);

(statearr_28811_28840[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (3))){
var inst_28799 = (state_28801[(2)]);
var state_28801__$1 = state_28801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28801__$1,inst_28799);
} else {
if((state_val_28802 === (12))){
var inst_28760 = (state_28801[(9)]);
var inst_28774 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28760,opts);
var state_28801__$1 = state_28801;
if(cljs.core.truth_(inst_28774)){
var statearr_28812_28841 = state_28801__$1;
(statearr_28812_28841[(1)] = (15));

} else {
var statearr_28813_28842 = state_28801__$1;
(statearr_28813_28842[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (2))){
var state_28801__$1 = state_28801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28801__$1,(4),ch);
} else {
if((state_val_28802 === (11))){
var inst_28761 = (state_28801[(8)]);
var inst_28766 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28767 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28761);
var inst_28768 = cljs.core.async.timeout.call(null,(1000));
var inst_28769 = [inst_28767,inst_28768];
var inst_28770 = (new cljs.core.PersistentVector(null,2,(5),inst_28766,inst_28769,null));
var state_28801__$1 = state_28801;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28801__$1,(14),inst_28770);
} else {
if((state_val_28802 === (9))){
var inst_28761 = (state_28801[(8)]);
var inst_28787 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28788 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28761);
var inst_28789 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28788);
var inst_28790 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28789)].join('');
var inst_28791 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28790);
var state_28801__$1 = (function (){var statearr_28814 = state_28801;
(statearr_28814[(10)] = inst_28787);

return statearr_28814;
})();
var statearr_28815_28843 = state_28801__$1;
(statearr_28815_28843[(2)] = inst_28791);

(statearr_28815_28843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (5))){
var inst_28754 = (state_28801[(7)]);
var inst_28756 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28757 = (new cljs.core.PersistentArrayMap(null,2,inst_28756,null));
var inst_28758 = (new cljs.core.PersistentHashSet(null,inst_28757,null));
var inst_28759 = figwheel.client.focus_msgs.call(null,inst_28758,inst_28754);
var inst_28760 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28759);
var inst_28761 = cljs.core.first.call(null,inst_28759);
var inst_28762 = figwheel.client.autoload_QMARK_.call(null);
var state_28801__$1 = (function (){var statearr_28816 = state_28801;
(statearr_28816[(8)] = inst_28761);

(statearr_28816[(9)] = inst_28760);

return statearr_28816;
})();
if(cljs.core.truth_(inst_28762)){
var statearr_28817_28844 = state_28801__$1;
(statearr_28817_28844[(1)] = (8));

} else {
var statearr_28818_28845 = state_28801__$1;
(statearr_28818_28845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (14))){
var inst_28772 = (state_28801[(2)]);
var state_28801__$1 = state_28801;
var statearr_28819_28846 = state_28801__$1;
(statearr_28819_28846[(2)] = inst_28772);

(statearr_28819_28846[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (16))){
var state_28801__$1 = state_28801;
var statearr_28820_28847 = state_28801__$1;
(statearr_28820_28847[(2)] = null);

(statearr_28820_28847[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (10))){
var inst_28793 = (state_28801[(2)]);
var state_28801__$1 = (function (){var statearr_28821 = state_28801;
(statearr_28821[(11)] = inst_28793);

return statearr_28821;
})();
var statearr_28822_28848 = state_28801__$1;
(statearr_28822_28848[(2)] = null);

(statearr_28822_28848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (8))){
var inst_28760 = (state_28801[(9)]);
var inst_28764 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28760,opts);
var state_28801__$1 = state_28801;
if(cljs.core.truth_(inst_28764)){
var statearr_28823_28849 = state_28801__$1;
(statearr_28823_28849[(1)] = (11));

} else {
var statearr_28824_28850 = state_28801__$1;
(statearr_28824_28850[(1)] = (12));

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
});})(c__22651__auto___28832,ch))
;
return ((function (switch__20473__auto__,c__22651__auto___28832,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20474__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20474__auto____0 = (function (){
var statearr_28828 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28828[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20474__auto__);

(statearr_28828[(1)] = (1));

return statearr_28828;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20474__auto____1 = (function (state_28801){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_28801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e28829){if((e28829 instanceof Object)){
var ex__20477__auto__ = e28829;
var statearr_28830_28851 = state_28801;
(statearr_28830_28851[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28852 = state_28801;
state_28801 = G__28852;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20474__auto__ = function(state_28801){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20474__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20474__auto____1.call(this,state_28801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20474__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20474__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto___28832,ch))
})();
var state__22653__auto__ = (function (){var statearr_28831 = f__22652__auto__.call(null);
(statearr_28831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto___28832);

return statearr_28831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto___28832,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28853_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28853_SHARP_));
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
var base_path_28860 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28860){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28858 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28859 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28859;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28858;
}}catch (e28857){if((e28857 instanceof Error)){
var e = e28857;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28860], null));
} else {
var e = e28857;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28860))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28861){
var map__28868 = p__28861;
var map__28868__$1 = ((((!((map__28868 == null)))?((((map__28868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28868):map__28868);
var opts = map__28868__$1;
var build_id = cljs.core.get.call(null,map__28868__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28868,map__28868__$1,opts,build_id){
return (function (p__28870){
var vec__28871 = p__28870;
var map__28872 = cljs.core.nth.call(null,vec__28871,(0),null);
var map__28872__$1 = ((((!((map__28872 == null)))?((((map__28872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28872):map__28872);
var msg = map__28872__$1;
var msg_name = cljs.core.get.call(null,map__28872__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28871,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28871,map__28872,map__28872__$1,msg,msg_name,_,map__28868,map__28868__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28871,map__28872,map__28872__$1,msg,msg_name,_,map__28868,map__28868__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28868,map__28868__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28878){
var vec__28879 = p__28878;
var map__28880 = cljs.core.nth.call(null,vec__28879,(0),null);
var map__28880__$1 = ((((!((map__28880 == null)))?((((map__28880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28880):map__28880);
var msg = map__28880__$1;
var msg_name = cljs.core.get.call(null,map__28880__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28879,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28882){
var map__28892 = p__28882;
var map__28892__$1 = ((((!((map__28892 == null)))?((((map__28892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28892):map__28892);
var on_compile_warning = cljs.core.get.call(null,map__28892__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28892__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28892,map__28892__$1,on_compile_warning,on_compile_fail){
return (function (p__28894){
var vec__28895 = p__28894;
var map__28896 = cljs.core.nth.call(null,vec__28895,(0),null);
var map__28896__$1 = ((((!((map__28896 == null)))?((((map__28896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28896):map__28896);
var msg = map__28896__$1;
var msg_name = cljs.core.get.call(null,map__28896__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28895,(1));
var pred__28898 = cljs.core._EQ_;
var expr__28899 = msg_name;
if(cljs.core.truth_(pred__28898.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28899))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28898.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28899))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28892,map__28892__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto__,msg_hist,msg_names,msg){
return (function (state_29107){
var state_val_29108 = (state_29107[(1)]);
if((state_val_29108 === (7))){
var inst_29035 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
if(cljs.core.truth_(inst_29035)){
var statearr_29109_29155 = state_29107__$1;
(statearr_29109_29155[(1)] = (8));

} else {
var statearr_29110_29156 = state_29107__$1;
(statearr_29110_29156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (20))){
var inst_29101 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
var statearr_29111_29157 = state_29107__$1;
(statearr_29111_29157[(2)] = inst_29101);

(statearr_29111_29157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (27))){
var inst_29097 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
var statearr_29112_29158 = state_29107__$1;
(statearr_29112_29158[(2)] = inst_29097);

(statearr_29112_29158[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (1))){
var inst_29028 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29107__$1 = state_29107;
if(cljs.core.truth_(inst_29028)){
var statearr_29113_29159 = state_29107__$1;
(statearr_29113_29159[(1)] = (2));

} else {
var statearr_29114_29160 = state_29107__$1;
(statearr_29114_29160[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (24))){
var inst_29099 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
var statearr_29115_29161 = state_29107__$1;
(statearr_29115_29161[(2)] = inst_29099);

(statearr_29115_29161[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (4))){
var inst_29105 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29107__$1,inst_29105);
} else {
if((state_val_29108 === (15))){
var inst_29103 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
var statearr_29116_29162 = state_29107__$1;
(statearr_29116_29162[(2)] = inst_29103);

(statearr_29116_29162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (21))){
var inst_29062 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
var statearr_29117_29163 = state_29107__$1;
(statearr_29117_29163[(2)] = inst_29062);

(statearr_29117_29163[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (31))){
var inst_29086 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29107__$1 = state_29107;
if(cljs.core.truth_(inst_29086)){
var statearr_29118_29164 = state_29107__$1;
(statearr_29118_29164[(1)] = (34));

} else {
var statearr_29119_29165 = state_29107__$1;
(statearr_29119_29165[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (32))){
var inst_29095 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
var statearr_29120_29166 = state_29107__$1;
(statearr_29120_29166[(2)] = inst_29095);

(statearr_29120_29166[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (33))){
var inst_29084 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
var statearr_29121_29167 = state_29107__$1;
(statearr_29121_29167[(2)] = inst_29084);

(statearr_29121_29167[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (13))){
var inst_29049 = figwheel.client.heads_up.clear.call(null);
var state_29107__$1 = state_29107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29107__$1,(16),inst_29049);
} else {
if((state_val_29108 === (22))){
var inst_29066 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29067 = figwheel.client.heads_up.append_message.call(null,inst_29066);
var state_29107__$1 = state_29107;
var statearr_29122_29168 = state_29107__$1;
(statearr_29122_29168[(2)] = inst_29067);

(statearr_29122_29168[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (36))){
var inst_29093 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
var statearr_29123_29169 = state_29107__$1;
(statearr_29123_29169[(2)] = inst_29093);

(statearr_29123_29169[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (29))){
var inst_29077 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
var statearr_29124_29170 = state_29107__$1;
(statearr_29124_29170[(2)] = inst_29077);

(statearr_29124_29170[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (6))){
var inst_29030 = (state_29107[(7)]);
var state_29107__$1 = state_29107;
var statearr_29125_29171 = state_29107__$1;
(statearr_29125_29171[(2)] = inst_29030);

(statearr_29125_29171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (28))){
var inst_29073 = (state_29107[(2)]);
var inst_29074 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29075 = figwheel.client.heads_up.display_warning.call(null,inst_29074);
var state_29107__$1 = (function (){var statearr_29126 = state_29107;
(statearr_29126[(8)] = inst_29073);

return statearr_29126;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29107__$1,(29),inst_29075);
} else {
if((state_val_29108 === (25))){
var inst_29071 = figwheel.client.heads_up.clear.call(null);
var state_29107__$1 = state_29107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29107__$1,(28),inst_29071);
} else {
if((state_val_29108 === (34))){
var inst_29088 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29107__$1 = state_29107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29107__$1,(37),inst_29088);
} else {
if((state_val_29108 === (17))){
var inst_29055 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
var statearr_29127_29172 = state_29107__$1;
(statearr_29127_29172[(2)] = inst_29055);

(statearr_29127_29172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (3))){
var inst_29047 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29107__$1 = state_29107;
if(cljs.core.truth_(inst_29047)){
var statearr_29128_29173 = state_29107__$1;
(statearr_29128_29173[(1)] = (13));

} else {
var statearr_29129_29174 = state_29107__$1;
(statearr_29129_29174[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (12))){
var inst_29043 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
var statearr_29130_29175 = state_29107__$1;
(statearr_29130_29175[(2)] = inst_29043);

(statearr_29130_29175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (2))){
var inst_29030 = (state_29107[(7)]);
var inst_29030__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29107__$1 = (function (){var statearr_29131 = state_29107;
(statearr_29131[(7)] = inst_29030__$1);

return statearr_29131;
})();
if(cljs.core.truth_(inst_29030__$1)){
var statearr_29132_29176 = state_29107__$1;
(statearr_29132_29176[(1)] = (5));

} else {
var statearr_29133_29177 = state_29107__$1;
(statearr_29133_29177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (23))){
var inst_29069 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29107__$1 = state_29107;
if(cljs.core.truth_(inst_29069)){
var statearr_29134_29178 = state_29107__$1;
(statearr_29134_29178[(1)] = (25));

} else {
var statearr_29135_29179 = state_29107__$1;
(statearr_29135_29179[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (35))){
var state_29107__$1 = state_29107;
var statearr_29136_29180 = state_29107__$1;
(statearr_29136_29180[(2)] = null);

(statearr_29136_29180[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (19))){
var inst_29064 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29107__$1 = state_29107;
if(cljs.core.truth_(inst_29064)){
var statearr_29137_29181 = state_29107__$1;
(statearr_29137_29181[(1)] = (22));

} else {
var statearr_29138_29182 = state_29107__$1;
(statearr_29138_29182[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (11))){
var inst_29039 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
var statearr_29139_29183 = state_29107__$1;
(statearr_29139_29183[(2)] = inst_29039);

(statearr_29139_29183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (9))){
var inst_29041 = figwheel.client.heads_up.clear.call(null);
var state_29107__$1 = state_29107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29107__$1,(12),inst_29041);
} else {
if((state_val_29108 === (5))){
var inst_29032 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29107__$1 = state_29107;
var statearr_29140_29184 = state_29107__$1;
(statearr_29140_29184[(2)] = inst_29032);

(statearr_29140_29184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (14))){
var inst_29057 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29107__$1 = state_29107;
if(cljs.core.truth_(inst_29057)){
var statearr_29141_29185 = state_29107__$1;
(statearr_29141_29185[(1)] = (18));

} else {
var statearr_29142_29186 = state_29107__$1;
(statearr_29142_29186[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (26))){
var inst_29079 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29107__$1 = state_29107;
if(cljs.core.truth_(inst_29079)){
var statearr_29143_29187 = state_29107__$1;
(statearr_29143_29187[(1)] = (30));

} else {
var statearr_29144_29188 = state_29107__$1;
(statearr_29144_29188[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (16))){
var inst_29051 = (state_29107[(2)]);
var inst_29052 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29053 = figwheel.client.heads_up.display_exception.call(null,inst_29052);
var state_29107__$1 = (function (){var statearr_29145 = state_29107;
(statearr_29145[(9)] = inst_29051);

return statearr_29145;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29107__$1,(17),inst_29053);
} else {
if((state_val_29108 === (30))){
var inst_29081 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29082 = figwheel.client.heads_up.display_warning.call(null,inst_29081);
var state_29107__$1 = state_29107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29107__$1,(33),inst_29082);
} else {
if((state_val_29108 === (10))){
var inst_29045 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
var statearr_29146_29189 = state_29107__$1;
(statearr_29146_29189[(2)] = inst_29045);

(statearr_29146_29189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (18))){
var inst_29059 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29060 = figwheel.client.heads_up.display_exception.call(null,inst_29059);
var state_29107__$1 = state_29107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29107__$1,(21),inst_29060);
} else {
if((state_val_29108 === (37))){
var inst_29090 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
var statearr_29147_29190 = state_29107__$1;
(statearr_29147_29190[(2)] = inst_29090);

(statearr_29147_29190[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (8))){
var inst_29037 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29107__$1 = state_29107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29107__$1,(11),inst_29037);
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
});})(c__22651__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20473__auto__,c__22651__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20474__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20474__auto____0 = (function (){
var statearr_29151 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29151[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20474__auto__);

(statearr_29151[(1)] = (1));

return statearr_29151;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20474__auto____1 = (function (state_29107){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_29107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e29152){if((e29152 instanceof Object)){
var ex__20477__auto__ = e29152;
var statearr_29153_29191 = state_29107;
(statearr_29153_29191[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29192 = state_29107;
state_29107 = G__29192;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20474__auto__ = function(state_29107){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20474__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20474__auto____1.call(this,state_29107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20474__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20474__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto__,msg_hist,msg_names,msg))
})();
var state__22653__auto__ = (function (){var statearr_29154 = f__22652__auto__.call(null);
(statearr_29154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto__);

return statearr_29154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto__,msg_hist,msg_names,msg))
);

return c__22651__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22651__auto___29255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto___29255,ch){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto___29255,ch){
return (function (state_29238){
var state_val_29239 = (state_29238[(1)]);
if((state_val_29239 === (1))){
var state_29238__$1 = state_29238;
var statearr_29240_29256 = state_29238__$1;
(statearr_29240_29256[(2)] = null);

(statearr_29240_29256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (2))){
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29238__$1,(4),ch);
} else {
if((state_val_29239 === (3))){
var inst_29236 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29238__$1,inst_29236);
} else {
if((state_val_29239 === (4))){
var inst_29226 = (state_29238[(7)]);
var inst_29226__$1 = (state_29238[(2)]);
var state_29238__$1 = (function (){var statearr_29241 = state_29238;
(statearr_29241[(7)] = inst_29226__$1);

return statearr_29241;
})();
if(cljs.core.truth_(inst_29226__$1)){
var statearr_29242_29257 = state_29238__$1;
(statearr_29242_29257[(1)] = (5));

} else {
var statearr_29243_29258 = state_29238__$1;
(statearr_29243_29258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (5))){
var inst_29226 = (state_29238[(7)]);
var inst_29228 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29226);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29238__$1,(8),inst_29228);
} else {
if((state_val_29239 === (6))){
var state_29238__$1 = state_29238;
var statearr_29244_29259 = state_29238__$1;
(statearr_29244_29259[(2)] = null);

(statearr_29244_29259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (7))){
var inst_29234 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29245_29260 = state_29238__$1;
(statearr_29245_29260[(2)] = inst_29234);

(statearr_29245_29260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (8))){
var inst_29230 = (state_29238[(2)]);
var state_29238__$1 = (function (){var statearr_29246 = state_29238;
(statearr_29246[(8)] = inst_29230);

return statearr_29246;
})();
var statearr_29247_29261 = state_29238__$1;
(statearr_29247_29261[(2)] = null);

(statearr_29247_29261[(1)] = (2));


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
});})(c__22651__auto___29255,ch))
;
return ((function (switch__20473__auto__,c__22651__auto___29255,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20474__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20474__auto____0 = (function (){
var statearr_29251 = [null,null,null,null,null,null,null,null,null];
(statearr_29251[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20474__auto__);

(statearr_29251[(1)] = (1));

return statearr_29251;
});
var figwheel$client$heads_up_plugin_$_state_machine__20474__auto____1 = (function (state_29238){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_29238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e29252){if((e29252 instanceof Object)){
var ex__20477__auto__ = e29252;
var statearr_29253_29262 = state_29238;
(statearr_29253_29262[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29263 = state_29238;
state_29238 = G__29263;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20474__auto__ = function(state_29238){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20474__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20474__auto____1.call(this,state_29238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20474__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20474__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto___29255,ch))
})();
var state__22653__auto__ = (function (){var statearr_29254 = f__22652__auto__.call(null);
(statearr_29254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto___29255);

return statearr_29254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto___29255,ch))
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
var c__22651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto__){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto__){
return (function (state_29284){
var state_val_29285 = (state_29284[(1)]);
if((state_val_29285 === (1))){
var inst_29279 = cljs.core.async.timeout.call(null,(3000));
var state_29284__$1 = state_29284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29284__$1,(2),inst_29279);
} else {
if((state_val_29285 === (2))){
var inst_29281 = (state_29284[(2)]);
var inst_29282 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29284__$1 = (function (){var statearr_29286 = state_29284;
(statearr_29286[(7)] = inst_29281);

return statearr_29286;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29284__$1,inst_29282);
} else {
return null;
}
}
});})(c__22651__auto__))
;
return ((function (switch__20473__auto__,c__22651__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20474__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20474__auto____0 = (function (){
var statearr_29290 = [null,null,null,null,null,null,null,null];
(statearr_29290[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20474__auto__);

(statearr_29290[(1)] = (1));

return statearr_29290;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20474__auto____1 = (function (state_29284){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_29284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e29291){if((e29291 instanceof Object)){
var ex__20477__auto__ = e29291;
var statearr_29292_29294 = state_29284;
(statearr_29292_29294[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29295 = state_29284;
state_29284 = G__29295;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20474__auto__ = function(state_29284){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20474__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20474__auto____1.call(this,state_29284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20474__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20474__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto__))
})();
var state__22653__auto__ = (function (){var statearr_29293 = f__22652__auto__.call(null);
(statearr_29293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto__);

return statearr_29293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto__))
);

return c__22651__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29296){
var map__29303 = p__29296;
var map__29303__$1 = ((((!((map__29303 == null)))?((((map__29303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29303):map__29303);
var ed = map__29303__$1;
var formatted_exception = cljs.core.get.call(null,map__29303__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29303__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29303__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29305_29309 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29306_29310 = null;
var count__29307_29311 = (0);
var i__29308_29312 = (0);
while(true){
if((i__29308_29312 < count__29307_29311)){
var msg_29313 = cljs.core._nth.call(null,chunk__29306_29310,i__29308_29312);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29313);

var G__29314 = seq__29305_29309;
var G__29315 = chunk__29306_29310;
var G__29316 = count__29307_29311;
var G__29317 = (i__29308_29312 + (1));
seq__29305_29309 = G__29314;
chunk__29306_29310 = G__29315;
count__29307_29311 = G__29316;
i__29308_29312 = G__29317;
continue;
} else {
var temp__4657__auto___29318 = cljs.core.seq.call(null,seq__29305_29309);
if(temp__4657__auto___29318){
var seq__29305_29319__$1 = temp__4657__auto___29318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29305_29319__$1)){
var c__19271__auto___29320 = cljs.core.chunk_first.call(null,seq__29305_29319__$1);
var G__29321 = cljs.core.chunk_rest.call(null,seq__29305_29319__$1);
var G__29322 = c__19271__auto___29320;
var G__29323 = cljs.core.count.call(null,c__19271__auto___29320);
var G__29324 = (0);
seq__29305_29309 = G__29321;
chunk__29306_29310 = G__29322;
count__29307_29311 = G__29323;
i__29308_29312 = G__29324;
continue;
} else {
var msg_29325 = cljs.core.first.call(null,seq__29305_29319__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29325);

var G__29326 = cljs.core.next.call(null,seq__29305_29319__$1);
var G__29327 = null;
var G__29328 = (0);
var G__29329 = (0);
seq__29305_29309 = G__29326;
chunk__29306_29310 = G__29327;
count__29307_29311 = G__29328;
i__29308_29312 = G__29329;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29330){
var map__29333 = p__29330;
var map__29333__$1 = ((((!((map__29333 == null)))?((((map__29333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29333):map__29333);
var w = map__29333__$1;
var message = cljs.core.get.call(null,map__29333__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29341 = cljs.core.seq.call(null,plugins);
var chunk__29342 = null;
var count__29343 = (0);
var i__29344 = (0);
while(true){
if((i__29344 < count__29343)){
var vec__29345 = cljs.core._nth.call(null,chunk__29342,i__29344);
var k = cljs.core.nth.call(null,vec__29345,(0),null);
var plugin = cljs.core.nth.call(null,vec__29345,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29347 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29341,chunk__29342,count__29343,i__29344,pl_29347,vec__29345,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29347.call(null,msg_hist);
});})(seq__29341,chunk__29342,count__29343,i__29344,pl_29347,vec__29345,k,plugin))
);
} else {
}

var G__29348 = seq__29341;
var G__29349 = chunk__29342;
var G__29350 = count__29343;
var G__29351 = (i__29344 + (1));
seq__29341 = G__29348;
chunk__29342 = G__29349;
count__29343 = G__29350;
i__29344 = G__29351;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29341);
if(temp__4657__auto__){
var seq__29341__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29341__$1)){
var c__19271__auto__ = cljs.core.chunk_first.call(null,seq__29341__$1);
var G__29352 = cljs.core.chunk_rest.call(null,seq__29341__$1);
var G__29353 = c__19271__auto__;
var G__29354 = cljs.core.count.call(null,c__19271__auto__);
var G__29355 = (0);
seq__29341 = G__29352;
chunk__29342 = G__29353;
count__29343 = G__29354;
i__29344 = G__29355;
continue;
} else {
var vec__29346 = cljs.core.first.call(null,seq__29341__$1);
var k = cljs.core.nth.call(null,vec__29346,(0),null);
var plugin = cljs.core.nth.call(null,vec__29346,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29356 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29341,chunk__29342,count__29343,i__29344,pl_29356,vec__29346,k,plugin,seq__29341__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29356.call(null,msg_hist);
});})(seq__29341,chunk__29342,count__29343,i__29344,pl_29356,vec__29346,k,plugin,seq__29341__$1,temp__4657__auto__))
);
} else {
}

var G__29357 = cljs.core.next.call(null,seq__29341__$1);
var G__29358 = null;
var G__29359 = (0);
var G__29360 = (0);
seq__29341 = G__29357;
chunk__29342 = G__29358;
count__29343 = G__29359;
i__29344 = G__29360;
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
var args29361 = [];
var len__19530__auto___29364 = arguments.length;
var i__19531__auto___29365 = (0);
while(true){
if((i__19531__auto___29365 < len__19530__auto___29364)){
args29361.push((arguments[i__19531__auto___29365]));

var G__29366 = (i__19531__auto___29365 + (1));
i__19531__auto___29365 = G__29366;
continue;
} else {
}
break;
}

var G__29363 = args29361.length;
switch (G__29363) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29361.length)].join('')));

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
var len__19530__auto___29372 = arguments.length;
var i__19531__auto___29373 = (0);
while(true){
if((i__19531__auto___29373 < len__19530__auto___29372)){
args__19537__auto__.push((arguments[i__19531__auto___29373]));

var G__29374 = (i__19531__auto___29373 + (1));
i__19531__auto___29373 = G__29374;
continue;
} else {
}
break;
}

var argseq__19538__auto__ = ((((0) < args__19537__auto__.length))?(new cljs.core.IndexedSeq(args__19537__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19538__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29369){
var map__29370 = p__29369;
var map__29370__$1 = ((((!((map__29370 == null)))?((((map__29370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29370):map__29370);
var opts = map__29370__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29368){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29368));
});

//# sourceMappingURL=client.js.map?rel=1470998059051