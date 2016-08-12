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
var pred__28665 = cljs.core._EQ_;
var expr__28666 = (function (){var or__18459__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e28669){if((e28669 instanceof Error)){
var e = e28669;
return false;
} else {
throw e28669;

}
}})();
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28665.call(null,"true",expr__28666))){
return true;
} else {
if(cljs.core.truth_(pred__28665.call(null,"false",expr__28666))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28666)].join('')));
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
}catch (e28671){if((e28671 instanceof Error)){
var e = e28671;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e28671;

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
var len__19529__auto___28673 = arguments.length;
var i__19530__auto___28674 = (0);
while(true){
if((i__19530__auto___28674 < len__19529__auto___28673)){
args__19536__auto__.push((arguments[i__19530__auto___28674]));

var G__28675 = (i__19530__auto___28674 + (1));
i__19530__auto___28674 = G__28675;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq28672){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28672));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28676){
var map__28679 = p__28676;
var map__28679__$1 = ((((!((map__28679 == null)))?((((map__28679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28679):map__28679);
var message = cljs.core.get.call(null,map__28679__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28679__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20626__auto___28841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto___28841,ch){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto___28841,ch){
return (function (state_28810){
var state_val_28811 = (state_28810[(1)]);
if((state_val_28811 === (7))){
var inst_28806 = (state_28810[(2)]);
var state_28810__$1 = state_28810;
var statearr_28812_28842 = state_28810__$1;
(statearr_28812_28842[(2)] = inst_28806);

(statearr_28812_28842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (1))){
var state_28810__$1 = state_28810;
var statearr_28813_28843 = state_28810__$1;
(statearr_28813_28843[(2)] = null);

(statearr_28813_28843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (4))){
var inst_28763 = (state_28810[(7)]);
var inst_28763__$1 = (state_28810[(2)]);
var state_28810__$1 = (function (){var statearr_28814 = state_28810;
(statearr_28814[(7)] = inst_28763__$1);

return statearr_28814;
})();
if(cljs.core.truth_(inst_28763__$1)){
var statearr_28815_28844 = state_28810__$1;
(statearr_28815_28844[(1)] = (5));

} else {
var statearr_28816_28845 = state_28810__$1;
(statearr_28816_28845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (15))){
var inst_28770 = (state_28810[(8)]);
var inst_28785 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28770);
var inst_28786 = cljs.core.first.call(null,inst_28785);
var inst_28787 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28786);
var inst_28788 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28787)].join('');
var inst_28789 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28788);
var state_28810__$1 = state_28810;
var statearr_28817_28846 = state_28810__$1;
(statearr_28817_28846[(2)] = inst_28789);

(statearr_28817_28846[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (13))){
var inst_28794 = (state_28810[(2)]);
var state_28810__$1 = state_28810;
var statearr_28818_28847 = state_28810__$1;
(statearr_28818_28847[(2)] = inst_28794);

(statearr_28818_28847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (6))){
var state_28810__$1 = state_28810;
var statearr_28819_28848 = state_28810__$1;
(statearr_28819_28848[(2)] = null);

(statearr_28819_28848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (17))){
var inst_28792 = (state_28810[(2)]);
var state_28810__$1 = state_28810;
var statearr_28820_28849 = state_28810__$1;
(statearr_28820_28849[(2)] = inst_28792);

(statearr_28820_28849[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (3))){
var inst_28808 = (state_28810[(2)]);
var state_28810__$1 = state_28810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28810__$1,inst_28808);
} else {
if((state_val_28811 === (12))){
var inst_28769 = (state_28810[(9)]);
var inst_28783 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28769,opts);
var state_28810__$1 = state_28810;
if(cljs.core.truth_(inst_28783)){
var statearr_28821_28850 = state_28810__$1;
(statearr_28821_28850[(1)] = (15));

} else {
var statearr_28822_28851 = state_28810__$1;
(statearr_28822_28851[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (2))){
var state_28810__$1 = state_28810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28810__$1,(4),ch);
} else {
if((state_val_28811 === (11))){
var inst_28770 = (state_28810[(8)]);
var inst_28775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28776 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28770);
var inst_28777 = cljs.core.async.timeout.call(null,(1000));
var inst_28778 = [inst_28776,inst_28777];
var inst_28779 = (new cljs.core.PersistentVector(null,2,(5),inst_28775,inst_28778,null));
var state_28810__$1 = state_28810;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28810__$1,(14),inst_28779);
} else {
if((state_val_28811 === (9))){
var inst_28770 = (state_28810[(8)]);
var inst_28796 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28797 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28770);
var inst_28798 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28797);
var inst_28799 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28798)].join('');
var inst_28800 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28799);
var state_28810__$1 = (function (){var statearr_28823 = state_28810;
(statearr_28823[(10)] = inst_28796);

return statearr_28823;
})();
var statearr_28824_28852 = state_28810__$1;
(statearr_28824_28852[(2)] = inst_28800);

(statearr_28824_28852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (5))){
var inst_28763 = (state_28810[(7)]);
var inst_28765 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28766 = (new cljs.core.PersistentArrayMap(null,2,inst_28765,null));
var inst_28767 = (new cljs.core.PersistentHashSet(null,inst_28766,null));
var inst_28768 = figwheel.client.focus_msgs.call(null,inst_28767,inst_28763);
var inst_28769 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28768);
var inst_28770 = cljs.core.first.call(null,inst_28768);
var inst_28771 = figwheel.client.autoload_QMARK_.call(null);
var state_28810__$1 = (function (){var statearr_28825 = state_28810;
(statearr_28825[(8)] = inst_28770);

(statearr_28825[(9)] = inst_28769);

return statearr_28825;
})();
if(cljs.core.truth_(inst_28771)){
var statearr_28826_28853 = state_28810__$1;
(statearr_28826_28853[(1)] = (8));

} else {
var statearr_28827_28854 = state_28810__$1;
(statearr_28827_28854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (14))){
var inst_28781 = (state_28810[(2)]);
var state_28810__$1 = state_28810;
var statearr_28828_28855 = state_28810__$1;
(statearr_28828_28855[(2)] = inst_28781);

(statearr_28828_28855[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (16))){
var state_28810__$1 = state_28810;
var statearr_28829_28856 = state_28810__$1;
(statearr_28829_28856[(2)] = null);

(statearr_28829_28856[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (10))){
var inst_28802 = (state_28810[(2)]);
var state_28810__$1 = (function (){var statearr_28830 = state_28810;
(statearr_28830[(11)] = inst_28802);

return statearr_28830;
})();
var statearr_28831_28857 = state_28810__$1;
(statearr_28831_28857[(2)] = null);

(statearr_28831_28857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28811 === (8))){
var inst_28769 = (state_28810[(9)]);
var inst_28773 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28769,opts);
var state_28810__$1 = state_28810;
if(cljs.core.truth_(inst_28773)){
var statearr_28832_28858 = state_28810__$1;
(statearr_28832_28858[(1)] = (11));

} else {
var statearr_28833_28859 = state_28810__$1;
(statearr_28833_28859[(1)] = (12));

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
});})(c__20626__auto___28841,ch))
;
return ((function (switch__20514__auto__,c__20626__auto___28841,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20515__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20515__auto____0 = (function (){
var statearr_28837 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28837[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20515__auto__);

(statearr_28837[(1)] = (1));

return statearr_28837;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20515__auto____1 = (function (state_28810){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_28810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e28838){if((e28838 instanceof Object)){
var ex__20518__auto__ = e28838;
var statearr_28839_28860 = state_28810;
(statearr_28839_28860[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28861 = state_28810;
state_28810 = G__28861;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20515__auto__ = function(state_28810){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20515__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20515__auto____1.call(this,state_28810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20515__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20515__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto___28841,ch))
})();
var state__20628__auto__ = (function (){var statearr_28840 = f__20627__auto__.call(null);
(statearr_28840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto___28841);

return statearr_28840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto___28841,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28862_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28862_SHARP_));
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
var base_path_28869 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28869){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28867 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28868 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28868;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28867;
}}catch (e28866){if((e28866 instanceof Error)){
var e = e28866;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28869], null));
} else {
var e = e28866;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28869))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28870){
var map__28877 = p__28870;
var map__28877__$1 = ((((!((map__28877 == null)))?((((map__28877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28877):map__28877);
var opts = map__28877__$1;
var build_id = cljs.core.get.call(null,map__28877__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28877,map__28877__$1,opts,build_id){
return (function (p__28879){
var vec__28880 = p__28879;
var map__28881 = cljs.core.nth.call(null,vec__28880,(0),null);
var map__28881__$1 = ((((!((map__28881 == null)))?((((map__28881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28881):map__28881);
var msg = map__28881__$1;
var msg_name = cljs.core.get.call(null,map__28881__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28880,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28880,map__28881,map__28881__$1,msg,msg_name,_,map__28877,map__28877__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28880,map__28881,map__28881__$1,msg,msg_name,_,map__28877,map__28877__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28877,map__28877__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28887){
var vec__28888 = p__28887;
var map__28889 = cljs.core.nth.call(null,vec__28888,(0),null);
var map__28889__$1 = ((((!((map__28889 == null)))?((((map__28889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28889):map__28889);
var msg = map__28889__$1;
var msg_name = cljs.core.get.call(null,map__28889__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28888,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28891){
var map__28901 = p__28891;
var map__28901__$1 = ((((!((map__28901 == null)))?((((map__28901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28901):map__28901);
var on_compile_warning = cljs.core.get.call(null,map__28901__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28901__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28901,map__28901__$1,on_compile_warning,on_compile_fail){
return (function (p__28903){
var vec__28904 = p__28903;
var map__28905 = cljs.core.nth.call(null,vec__28904,(0),null);
var map__28905__$1 = ((((!((map__28905 == null)))?((((map__28905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28905):map__28905);
var msg = map__28905__$1;
var msg_name = cljs.core.get.call(null,map__28905__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28904,(1));
var pred__28907 = cljs.core._EQ_;
var expr__28908 = msg_name;
if(cljs.core.truth_(pred__28907.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28908))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28907.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28908))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28901,map__28901__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20626__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto__,msg_hist,msg_names,msg){
return (function (state_29116){
var state_val_29117 = (state_29116[(1)]);
if((state_val_29117 === (7))){
var inst_29044 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
if(cljs.core.truth_(inst_29044)){
var statearr_29118_29164 = state_29116__$1;
(statearr_29118_29164[(1)] = (8));

} else {
var statearr_29119_29165 = state_29116__$1;
(statearr_29119_29165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (20))){
var inst_29110 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29120_29166 = state_29116__$1;
(statearr_29120_29166[(2)] = inst_29110);

(statearr_29120_29166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (27))){
var inst_29106 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29121_29167 = state_29116__$1;
(statearr_29121_29167[(2)] = inst_29106);

(statearr_29121_29167[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (1))){
var inst_29037 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29116__$1 = state_29116;
if(cljs.core.truth_(inst_29037)){
var statearr_29122_29168 = state_29116__$1;
(statearr_29122_29168[(1)] = (2));

} else {
var statearr_29123_29169 = state_29116__$1;
(statearr_29123_29169[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (24))){
var inst_29108 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29124_29170 = state_29116__$1;
(statearr_29124_29170[(2)] = inst_29108);

(statearr_29124_29170[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (4))){
var inst_29114 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29116__$1,inst_29114);
} else {
if((state_val_29117 === (15))){
var inst_29112 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29125_29171 = state_29116__$1;
(statearr_29125_29171[(2)] = inst_29112);

(statearr_29125_29171[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (21))){
var inst_29071 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29126_29172 = state_29116__$1;
(statearr_29126_29172[(2)] = inst_29071);

(statearr_29126_29172[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (31))){
var inst_29095 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29116__$1 = state_29116;
if(cljs.core.truth_(inst_29095)){
var statearr_29127_29173 = state_29116__$1;
(statearr_29127_29173[(1)] = (34));

} else {
var statearr_29128_29174 = state_29116__$1;
(statearr_29128_29174[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (32))){
var inst_29104 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29129_29175 = state_29116__$1;
(statearr_29129_29175[(2)] = inst_29104);

(statearr_29129_29175[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (33))){
var inst_29093 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29130_29176 = state_29116__$1;
(statearr_29130_29176[(2)] = inst_29093);

(statearr_29130_29176[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (13))){
var inst_29058 = figwheel.client.heads_up.clear.call(null);
var state_29116__$1 = state_29116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29116__$1,(16),inst_29058);
} else {
if((state_val_29117 === (22))){
var inst_29075 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29076 = figwheel.client.heads_up.append_message.call(null,inst_29075);
var state_29116__$1 = state_29116;
var statearr_29131_29177 = state_29116__$1;
(statearr_29131_29177[(2)] = inst_29076);

(statearr_29131_29177[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (36))){
var inst_29102 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29132_29178 = state_29116__$1;
(statearr_29132_29178[(2)] = inst_29102);

(statearr_29132_29178[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (29))){
var inst_29086 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29133_29179 = state_29116__$1;
(statearr_29133_29179[(2)] = inst_29086);

(statearr_29133_29179[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (6))){
var inst_29039 = (state_29116[(7)]);
var state_29116__$1 = state_29116;
var statearr_29134_29180 = state_29116__$1;
(statearr_29134_29180[(2)] = inst_29039);

(statearr_29134_29180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (28))){
var inst_29082 = (state_29116[(2)]);
var inst_29083 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29084 = figwheel.client.heads_up.display_warning.call(null,inst_29083);
var state_29116__$1 = (function (){var statearr_29135 = state_29116;
(statearr_29135[(8)] = inst_29082);

return statearr_29135;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29116__$1,(29),inst_29084);
} else {
if((state_val_29117 === (25))){
var inst_29080 = figwheel.client.heads_up.clear.call(null);
var state_29116__$1 = state_29116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29116__$1,(28),inst_29080);
} else {
if((state_val_29117 === (34))){
var inst_29097 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29116__$1 = state_29116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29116__$1,(37),inst_29097);
} else {
if((state_val_29117 === (17))){
var inst_29064 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29136_29181 = state_29116__$1;
(statearr_29136_29181[(2)] = inst_29064);

(statearr_29136_29181[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (3))){
var inst_29056 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29116__$1 = state_29116;
if(cljs.core.truth_(inst_29056)){
var statearr_29137_29182 = state_29116__$1;
(statearr_29137_29182[(1)] = (13));

} else {
var statearr_29138_29183 = state_29116__$1;
(statearr_29138_29183[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (12))){
var inst_29052 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29139_29184 = state_29116__$1;
(statearr_29139_29184[(2)] = inst_29052);

(statearr_29139_29184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (2))){
var inst_29039 = (state_29116[(7)]);
var inst_29039__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29116__$1 = (function (){var statearr_29140 = state_29116;
(statearr_29140[(7)] = inst_29039__$1);

return statearr_29140;
})();
if(cljs.core.truth_(inst_29039__$1)){
var statearr_29141_29185 = state_29116__$1;
(statearr_29141_29185[(1)] = (5));

} else {
var statearr_29142_29186 = state_29116__$1;
(statearr_29142_29186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (23))){
var inst_29078 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29116__$1 = state_29116;
if(cljs.core.truth_(inst_29078)){
var statearr_29143_29187 = state_29116__$1;
(statearr_29143_29187[(1)] = (25));

} else {
var statearr_29144_29188 = state_29116__$1;
(statearr_29144_29188[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (35))){
var state_29116__$1 = state_29116;
var statearr_29145_29189 = state_29116__$1;
(statearr_29145_29189[(2)] = null);

(statearr_29145_29189[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (19))){
var inst_29073 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29116__$1 = state_29116;
if(cljs.core.truth_(inst_29073)){
var statearr_29146_29190 = state_29116__$1;
(statearr_29146_29190[(1)] = (22));

} else {
var statearr_29147_29191 = state_29116__$1;
(statearr_29147_29191[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (11))){
var inst_29048 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29148_29192 = state_29116__$1;
(statearr_29148_29192[(2)] = inst_29048);

(statearr_29148_29192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (9))){
var inst_29050 = figwheel.client.heads_up.clear.call(null);
var state_29116__$1 = state_29116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29116__$1,(12),inst_29050);
} else {
if((state_val_29117 === (5))){
var inst_29041 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29116__$1 = state_29116;
var statearr_29149_29193 = state_29116__$1;
(statearr_29149_29193[(2)] = inst_29041);

(statearr_29149_29193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (14))){
var inst_29066 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29116__$1 = state_29116;
if(cljs.core.truth_(inst_29066)){
var statearr_29150_29194 = state_29116__$1;
(statearr_29150_29194[(1)] = (18));

} else {
var statearr_29151_29195 = state_29116__$1;
(statearr_29151_29195[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (26))){
var inst_29088 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29116__$1 = state_29116;
if(cljs.core.truth_(inst_29088)){
var statearr_29152_29196 = state_29116__$1;
(statearr_29152_29196[(1)] = (30));

} else {
var statearr_29153_29197 = state_29116__$1;
(statearr_29153_29197[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (16))){
var inst_29060 = (state_29116[(2)]);
var inst_29061 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29062 = figwheel.client.heads_up.display_exception.call(null,inst_29061);
var state_29116__$1 = (function (){var statearr_29154 = state_29116;
(statearr_29154[(9)] = inst_29060);

return statearr_29154;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29116__$1,(17),inst_29062);
} else {
if((state_val_29117 === (30))){
var inst_29090 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29091 = figwheel.client.heads_up.display_warning.call(null,inst_29090);
var state_29116__$1 = state_29116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29116__$1,(33),inst_29091);
} else {
if((state_val_29117 === (10))){
var inst_29054 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29155_29198 = state_29116__$1;
(statearr_29155_29198[(2)] = inst_29054);

(statearr_29155_29198[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (18))){
var inst_29068 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29069 = figwheel.client.heads_up.display_exception.call(null,inst_29068);
var state_29116__$1 = state_29116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29116__$1,(21),inst_29069);
} else {
if((state_val_29117 === (37))){
var inst_29099 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29156_29199 = state_29116__$1;
(statearr_29156_29199[(2)] = inst_29099);

(statearr_29156_29199[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (8))){
var inst_29046 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29116__$1 = state_29116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29116__$1,(11),inst_29046);
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
});})(c__20626__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20514__auto__,c__20626__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20515__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20515__auto____0 = (function (){
var statearr_29160 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29160[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20515__auto__);

(statearr_29160[(1)] = (1));

return statearr_29160;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20515__auto____1 = (function (state_29116){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_29116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e29161){if((e29161 instanceof Object)){
var ex__20518__auto__ = e29161;
var statearr_29162_29200 = state_29116;
(statearr_29162_29200[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29201 = state_29116;
state_29116 = G__29201;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20515__auto__ = function(state_29116){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20515__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20515__auto____1.call(this,state_29116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20515__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20515__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto__,msg_hist,msg_names,msg))
})();
var state__20628__auto__ = (function (){var statearr_29163 = f__20627__auto__.call(null);
(statearr_29163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto__);

return statearr_29163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto__,msg_hist,msg_names,msg))
);

return c__20626__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20626__auto___29264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto___29264,ch){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto___29264,ch){
return (function (state_29247){
var state_val_29248 = (state_29247[(1)]);
if((state_val_29248 === (1))){
var state_29247__$1 = state_29247;
var statearr_29249_29265 = state_29247__$1;
(statearr_29249_29265[(2)] = null);

(statearr_29249_29265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29248 === (2))){
var state_29247__$1 = state_29247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29247__$1,(4),ch);
} else {
if((state_val_29248 === (3))){
var inst_29245 = (state_29247[(2)]);
var state_29247__$1 = state_29247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29247__$1,inst_29245);
} else {
if((state_val_29248 === (4))){
var inst_29235 = (state_29247[(7)]);
var inst_29235__$1 = (state_29247[(2)]);
var state_29247__$1 = (function (){var statearr_29250 = state_29247;
(statearr_29250[(7)] = inst_29235__$1);

return statearr_29250;
})();
if(cljs.core.truth_(inst_29235__$1)){
var statearr_29251_29266 = state_29247__$1;
(statearr_29251_29266[(1)] = (5));

} else {
var statearr_29252_29267 = state_29247__$1;
(statearr_29252_29267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29248 === (5))){
var inst_29235 = (state_29247[(7)]);
var inst_29237 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29235);
var state_29247__$1 = state_29247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29247__$1,(8),inst_29237);
} else {
if((state_val_29248 === (6))){
var state_29247__$1 = state_29247;
var statearr_29253_29268 = state_29247__$1;
(statearr_29253_29268[(2)] = null);

(statearr_29253_29268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29248 === (7))){
var inst_29243 = (state_29247[(2)]);
var state_29247__$1 = state_29247;
var statearr_29254_29269 = state_29247__$1;
(statearr_29254_29269[(2)] = inst_29243);

(statearr_29254_29269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29248 === (8))){
var inst_29239 = (state_29247[(2)]);
var state_29247__$1 = (function (){var statearr_29255 = state_29247;
(statearr_29255[(8)] = inst_29239);

return statearr_29255;
})();
var statearr_29256_29270 = state_29247__$1;
(statearr_29256_29270[(2)] = null);

(statearr_29256_29270[(1)] = (2));


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
});})(c__20626__auto___29264,ch))
;
return ((function (switch__20514__auto__,c__20626__auto___29264,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20515__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20515__auto____0 = (function (){
var statearr_29260 = [null,null,null,null,null,null,null,null,null];
(statearr_29260[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20515__auto__);

(statearr_29260[(1)] = (1));

return statearr_29260;
});
var figwheel$client$heads_up_plugin_$_state_machine__20515__auto____1 = (function (state_29247){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_29247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e29261){if((e29261 instanceof Object)){
var ex__20518__auto__ = e29261;
var statearr_29262_29271 = state_29247;
(statearr_29262_29271[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29272 = state_29247;
state_29247 = G__29272;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20515__auto__ = function(state_29247){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20515__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20515__auto____1.call(this,state_29247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20515__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20515__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto___29264,ch))
})();
var state__20628__auto__ = (function (){var statearr_29263 = f__20627__auto__.call(null);
(statearr_29263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto___29264);

return statearr_29263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto___29264,ch))
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
var c__20626__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto__){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto__){
return (function (state_29293){
var state_val_29294 = (state_29293[(1)]);
if((state_val_29294 === (1))){
var inst_29288 = cljs.core.async.timeout.call(null,(3000));
var state_29293__$1 = state_29293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29293__$1,(2),inst_29288);
} else {
if((state_val_29294 === (2))){
var inst_29290 = (state_29293[(2)]);
var inst_29291 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29293__$1 = (function (){var statearr_29295 = state_29293;
(statearr_29295[(7)] = inst_29290);

return statearr_29295;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29293__$1,inst_29291);
} else {
return null;
}
}
});})(c__20626__auto__))
;
return ((function (switch__20514__auto__,c__20626__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20515__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20515__auto____0 = (function (){
var statearr_29299 = [null,null,null,null,null,null,null,null];
(statearr_29299[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20515__auto__);

(statearr_29299[(1)] = (1));

return statearr_29299;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20515__auto____1 = (function (state_29293){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_29293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e29300){if((e29300 instanceof Object)){
var ex__20518__auto__ = e29300;
var statearr_29301_29303 = state_29293;
(statearr_29301_29303[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29304 = state_29293;
state_29293 = G__29304;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20515__auto__ = function(state_29293){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20515__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20515__auto____1.call(this,state_29293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20515__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20515__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto__))
})();
var state__20628__auto__ = (function (){var statearr_29302 = f__20627__auto__.call(null);
(statearr_29302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto__);

return statearr_29302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto__))
);

return c__20626__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29305){
var map__29312 = p__29305;
var map__29312__$1 = ((((!((map__29312 == null)))?((((map__29312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29312):map__29312);
var ed = map__29312__$1;
var formatted_exception = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29314_29318 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29315_29319 = null;
var count__29316_29320 = (0);
var i__29317_29321 = (0);
while(true){
if((i__29317_29321 < count__29316_29320)){
var msg_29322 = cljs.core._nth.call(null,chunk__29315_29319,i__29317_29321);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29322);

var G__29323 = seq__29314_29318;
var G__29324 = chunk__29315_29319;
var G__29325 = count__29316_29320;
var G__29326 = (i__29317_29321 + (1));
seq__29314_29318 = G__29323;
chunk__29315_29319 = G__29324;
count__29316_29320 = G__29325;
i__29317_29321 = G__29326;
continue;
} else {
var temp__4657__auto___29327 = cljs.core.seq.call(null,seq__29314_29318);
if(temp__4657__auto___29327){
var seq__29314_29328__$1 = temp__4657__auto___29327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29314_29328__$1)){
var c__19270__auto___29329 = cljs.core.chunk_first.call(null,seq__29314_29328__$1);
var G__29330 = cljs.core.chunk_rest.call(null,seq__29314_29328__$1);
var G__29331 = c__19270__auto___29329;
var G__29332 = cljs.core.count.call(null,c__19270__auto___29329);
var G__29333 = (0);
seq__29314_29318 = G__29330;
chunk__29315_29319 = G__29331;
count__29316_29320 = G__29332;
i__29317_29321 = G__29333;
continue;
} else {
var msg_29334 = cljs.core.first.call(null,seq__29314_29328__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29334);

var G__29335 = cljs.core.next.call(null,seq__29314_29328__$1);
var G__29336 = null;
var G__29337 = (0);
var G__29338 = (0);
seq__29314_29318 = G__29335;
chunk__29315_29319 = G__29336;
count__29316_29320 = G__29337;
i__29317_29321 = G__29338;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29339){
var map__29342 = p__29339;
var map__29342__$1 = ((((!((map__29342 == null)))?((((map__29342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29342):map__29342);
var w = map__29342__$1;
var message = cljs.core.get.call(null,map__29342__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29350 = cljs.core.seq.call(null,plugins);
var chunk__29351 = null;
var count__29352 = (0);
var i__29353 = (0);
while(true){
if((i__29353 < count__29352)){
var vec__29354 = cljs.core._nth.call(null,chunk__29351,i__29353);
var k = cljs.core.nth.call(null,vec__29354,(0),null);
var plugin = cljs.core.nth.call(null,vec__29354,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29356 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29350,chunk__29351,count__29352,i__29353,pl_29356,vec__29354,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29356.call(null,msg_hist);
});})(seq__29350,chunk__29351,count__29352,i__29353,pl_29356,vec__29354,k,plugin))
);
} else {
}

var G__29357 = seq__29350;
var G__29358 = chunk__29351;
var G__29359 = count__29352;
var G__29360 = (i__29353 + (1));
seq__29350 = G__29357;
chunk__29351 = G__29358;
count__29352 = G__29359;
i__29353 = G__29360;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29350);
if(temp__4657__auto__){
var seq__29350__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29350__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__29350__$1);
var G__29361 = cljs.core.chunk_rest.call(null,seq__29350__$1);
var G__29362 = c__19270__auto__;
var G__29363 = cljs.core.count.call(null,c__19270__auto__);
var G__29364 = (0);
seq__29350 = G__29361;
chunk__29351 = G__29362;
count__29352 = G__29363;
i__29353 = G__29364;
continue;
} else {
var vec__29355 = cljs.core.first.call(null,seq__29350__$1);
var k = cljs.core.nth.call(null,vec__29355,(0),null);
var plugin = cljs.core.nth.call(null,vec__29355,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29365 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29350,chunk__29351,count__29352,i__29353,pl_29365,vec__29355,k,plugin,seq__29350__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29365.call(null,msg_hist);
});})(seq__29350,chunk__29351,count__29352,i__29353,pl_29365,vec__29355,k,plugin,seq__29350__$1,temp__4657__auto__))
);
} else {
}

var G__29366 = cljs.core.next.call(null,seq__29350__$1);
var G__29367 = null;
var G__29368 = (0);
var G__29369 = (0);
seq__29350 = G__29366;
chunk__29351 = G__29367;
count__29352 = G__29368;
i__29353 = G__29369;
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
var args29370 = [];
var len__19529__auto___29373 = arguments.length;
var i__19530__auto___29374 = (0);
while(true){
if((i__19530__auto___29374 < len__19529__auto___29373)){
args29370.push((arguments[i__19530__auto___29374]));

var G__29375 = (i__19530__auto___29374 + (1));
i__19530__auto___29374 = G__29375;
continue;
} else {
}
break;
}

var G__29372 = args29370.length;
switch (G__29372) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29370.length)].join('')));

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
var len__19529__auto___29381 = arguments.length;
var i__19530__auto___29382 = (0);
while(true){
if((i__19530__auto___29382 < len__19529__auto___29381)){
args__19536__auto__.push((arguments[i__19530__auto___29382]));

var G__29383 = (i__19530__auto___29382 + (1));
i__19530__auto___29382 = G__29383;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29378){
var map__29379 = p__29378;
var map__29379__$1 = ((((!((map__29379 == null)))?((((map__29379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29379):map__29379);
var opts = map__29379__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29377){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29377));
});

//# sourceMappingURL=client.js.map?rel=1470497438230