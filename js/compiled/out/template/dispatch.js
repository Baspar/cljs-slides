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
var c__20485__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto__){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto__){
return (function (state_29152){
var state_val_29153 = (state_29152[(1)]);
if((state_val_29153 === (1))){
var state_29152__$1 = state_29152;
var statearr_29154_29169 = state_29152__$1;
(statearr_29154_29169[(2)] = null);

(statearr_29154_29169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (2))){
var state_29152__$1 = state_29152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29152__$1,(4),channel);
} else {
if((state_val_29153 === (3))){
var inst_29150 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29152__$1,inst_29150);
} else {
if((state_val_29153 === (4))){
var inst_29136 = (state_29152[(7)]);
var inst_29136__$1 = (state_29152[(2)]);
var state_29152__$1 = (function (){var statearr_29155 = state_29152;
(statearr_29155[(7)] = inst_29136__$1);

return statearr_29155;
})();
if(cljs.core.truth_(inst_29136__$1)){
var statearr_29156_29170 = state_29152__$1;
(statearr_29156_29170[(1)] = (5));

} else {
var statearr_29157_29171 = state_29152__$1;
(statearr_29157_29171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (5))){
var inst_29136 = (state_29152[(7)]);
var inst_29139 = cljs.core.nth.call(null,inst_29136,(0),null);
var inst_29140 = cljs.core.nth.call(null,inst_29136,(1),null);
var inst_29141 = cljs.core.nth.call(null,inst_29136,(2),null);
var inst_29142 = cljs.core.nth.call(null,inst_29136,(3),null);
var inst_29143 = cljs.core.nth.call(null,inst_29136,(4),null);
var inst_29144 = cljs.core.println.call(null,inst_29139,inst_29140,inst_29141,inst_29142,inst_29143);
var state_29152__$1 = (function (){var statearr_29158 = state_29152;
(statearr_29158[(8)] = inst_29144);

return statearr_29158;
})();
var statearr_29159_29172 = state_29152__$1;
(statearr_29159_29172[(2)] = null);

(statearr_29159_29172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (6))){
var state_29152__$1 = state_29152;
var statearr_29160_29173 = state_29152__$1;
(statearr_29160_29173[(2)] = null);

(statearr_29160_29173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (7))){
var inst_29148 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
var statearr_29161_29174 = state_29152__$1;
(statearr_29161_29174[(2)] = inst_29148);

(statearr_29161_29174[(1)] = (3));


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
});})(c__20485__auto__))
;
return ((function (switch__20464__auto__,c__20485__auto__){
return (function() {
var template$dispatch$process_events_$_state_machine__20465__auto__ = null;
var template$dispatch$process_events_$_state_machine__20465__auto____0 = (function (){
var statearr_29165 = [null,null,null,null,null,null,null,null,null];
(statearr_29165[(0)] = template$dispatch$process_events_$_state_machine__20465__auto__);

(statearr_29165[(1)] = (1));

return statearr_29165;
});
var template$dispatch$process_events_$_state_machine__20465__auto____1 = (function (state_29152){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_29152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e29166){if((e29166 instanceof Object)){
var ex__20468__auto__ = e29166;
var statearr_29167_29175 = state_29152;
(statearr_29167_29175[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29176 = state_29152;
state_29152 = G__29176;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
template$dispatch$process_events_$_state_machine__20465__auto__ = function(state_29152){
switch(arguments.length){
case 0:
return template$dispatch$process_events_$_state_machine__20465__auto____0.call(this);
case 1:
return template$dispatch$process_events_$_state_machine__20465__auto____1.call(this,state_29152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
template$dispatch$process_events_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = template$dispatch$process_events_$_state_machine__20465__auto____0;
template$dispatch$process_events_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = template$dispatch$process_events_$_state_machine__20465__auto____1;
return template$dispatch$process_events_$_state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto__))
})();
var state__20487__auto__ = (function (){var statearr_29168 = f__20486__auto__.call(null);
(statearr_29168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto__);

return statearr_29168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto__))
);

return c__20485__auto__;
});
template.dispatch.process_events.call(null,template.dispatch.pipe);
template.dispatch.emit = (function template$dispatch$emit(var_args){
var args29177 = [];
var len__19530__auto___29180 = arguments.length;
var i__19531__auto___29181 = (0);
while(true){
if((i__19531__auto___29181 < len__19530__auto___29180)){
args29177.push((arguments[i__19531__auto___29181]));

var G__29182 = (i__19531__auto___29181 + (1));
i__19531__auto___29181 = G__29182;
continue;
} else {
}
break;
}

var G__29179 = args29177.length;
switch (G__29179) {
case 2:
return template.dispatch.emit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return template.dispatch.emit.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29177.length)].join('')));

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

//# sourceMappingURL=dispatch.js.map?rel=1470995250887