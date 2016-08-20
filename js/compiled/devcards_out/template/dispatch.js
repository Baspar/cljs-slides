// Compiled by ClojureScript 1.8.51 {}
goog.provide('template.dispatch');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
if(typeof template.dispatch.pipe !== 'undefined'){
} else {
template.dispatch.pipe = cljs.core.async.chan.call(null);
}
template.dispatch.empty_or_nil_QMARK_ = (function template$dispatch$empty_or_nil_QMARK_(s){
return ((s == null)) || ((s.length < (1)));
});
template.dispatch.process_events = (function template$dispatch$process_events(channel){
var c__22651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto__){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto__){
return (function (state_25847){
var state_val_25848 = (state_25847[(1)]);
if((state_val_25848 === (1))){
var state_25847__$1 = state_25847;
var statearr_25849_25864 = state_25847__$1;
(statearr_25849_25864[(2)] = null);

(statearr_25849_25864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25848 === (2))){
var state_25847__$1 = state_25847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25847__$1,(4),channel);
} else {
if((state_val_25848 === (3))){
var inst_25845 = (state_25847[(2)]);
var state_25847__$1 = state_25847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25847__$1,inst_25845);
} else {
if((state_val_25848 === (4))){
var inst_25831 = (state_25847[(7)]);
var inst_25831__$1 = (state_25847[(2)]);
var state_25847__$1 = (function (){var statearr_25850 = state_25847;
(statearr_25850[(7)] = inst_25831__$1);

return statearr_25850;
})();
if(cljs.core.truth_(inst_25831__$1)){
var statearr_25851_25865 = state_25847__$1;
(statearr_25851_25865[(1)] = (5));

} else {
var statearr_25852_25866 = state_25847__$1;
(statearr_25852_25866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25848 === (5))){
var inst_25831 = (state_25847[(7)]);
var inst_25834 = cljs.core.nth.call(null,inst_25831,(0),null);
var inst_25835 = cljs.core.nth.call(null,inst_25831,(1),null);
var inst_25836 = cljs.core.nth.call(null,inst_25831,(2),null);
var inst_25837 = cljs.core.nth.call(null,inst_25831,(3),null);
var inst_25838 = cljs.core.nth.call(null,inst_25831,(4),null);
var inst_25839 = cljs.core.println.call(null,inst_25834,inst_25835,inst_25836,inst_25837,inst_25838);
var state_25847__$1 = (function (){var statearr_25853 = state_25847;
(statearr_25853[(8)] = inst_25839);

return statearr_25853;
})();
var statearr_25854_25867 = state_25847__$1;
(statearr_25854_25867[(2)] = null);

(statearr_25854_25867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25848 === (6))){
var state_25847__$1 = state_25847;
var statearr_25855_25868 = state_25847__$1;
(statearr_25855_25868[(2)] = null);

(statearr_25855_25868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25848 === (7))){
var inst_25843 = (state_25847[(2)]);
var state_25847__$1 = state_25847;
var statearr_25856_25869 = state_25847__$1;
(statearr_25856_25869[(2)] = inst_25843);

(statearr_25856_25869[(1)] = (3));


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
});})(c__22651__auto__))
;
return ((function (switch__20473__auto__,c__22651__auto__){
return (function() {
var template$dispatch$process_events_$_state_machine__20474__auto__ = null;
var template$dispatch$process_events_$_state_machine__20474__auto____0 = (function (){
var statearr_25860 = [null,null,null,null,null,null,null,null,null];
(statearr_25860[(0)] = template$dispatch$process_events_$_state_machine__20474__auto__);

(statearr_25860[(1)] = (1));

return statearr_25860;
});
var template$dispatch$process_events_$_state_machine__20474__auto____1 = (function (state_25847){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_25847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e25861){if((e25861 instanceof Object)){
var ex__20477__auto__ = e25861;
var statearr_25862_25870 = state_25847;
(statearr_25862_25870[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25871 = state_25847;
state_25847 = G__25871;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
template$dispatch$process_events_$_state_machine__20474__auto__ = function(state_25847){
switch(arguments.length){
case 0:
return template$dispatch$process_events_$_state_machine__20474__auto____0.call(this);
case 1:
return template$dispatch$process_events_$_state_machine__20474__auto____1.call(this,state_25847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
template$dispatch$process_events_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = template$dispatch$process_events_$_state_machine__20474__auto____0;
template$dispatch$process_events_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = template$dispatch$process_events_$_state_machine__20474__auto____1;
return template$dispatch$process_events_$_state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto__))
})();
var state__22653__auto__ = (function (){var statearr_25863 = f__22652__auto__.call(null);
(statearr_25863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto__);

return statearr_25863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto__))
);

return c__22651__auto__;
});
template.dispatch.process_events.call(null,template.dispatch.pipe);
template.dispatch.emit = (function template$dispatch$emit(var_args){
var args25872 = [];
var len__19530__auto___25875 = arguments.length;
var i__19531__auto___25876 = (0);
while(true){
if((i__19531__auto___25876 < len__19530__auto___25875)){
args25872.push((arguments[i__19531__auto___25876]));

var G__25877 = (i__19531__auto___25876 + (1));
i__19531__auto___25876 = G__25877;
continue;
} else {
}
break;
}

var G__25874 = args25872.length;
switch (G__25874) {
case 2:
return template.dispatch.emit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return template.dispatch.emit.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25872.length)].join('')));

}
});

template.dispatch.emit.cljs$core$IFn$_invoke$arity$2 = (function (native_event,state){
var id = native_event.target.id;
var css_class = cljs.core.first.call(null,clojure.string.split.call(null,native_event.target.className," "));
var sender = (cljs.core.truth_(id)?cljs.core.keyword.call(null,id):cljs.core.keyword.call(null,css_class));
var message_type = cljs.core.keyword.call(null,native_event.type);
if(cljs.core.truth_((function (){var and__18448__auto__ = template.dispatch.empty_or_nil_QMARK_.call(null,id);
if(cljs.core.truth_(and__18448__auto__)){
return template.dispatch.empty_or_nil_QMARK_.call(null,css_class);
} else {
return and__18448__auto__;
}
})())){
throw (new Error("Cannot Emit without id or class."));
} else {
return template.dispatch.emit.call(null,native_event,state,sender,message_type,null);
}
});

template.dispatch.emit.cljs$core$IFn$_invoke$arity$5 = (function (native_event,state,sender,message_type,value){
return cljs.core.async.put_BANG_.call(null,template.dispatch.pipe,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [native_event,state,sender,message_type,value], null));
});

template.dispatch.emit.cljs$lang$maxFixedArity = 5;

//# sourceMappingURL=dispatch.js.map?rel=1470998056595