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
var c__20626__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto__){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto__){
return (function (state_24688){
var state_val_24689 = (state_24688[(1)]);
if((state_val_24689 === (1))){
var state_24688__$1 = state_24688;
var statearr_24690_24705 = state_24688__$1;
(statearr_24690_24705[(2)] = null);

(statearr_24690_24705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24689 === (2))){
var state_24688__$1 = state_24688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24688__$1,(4),channel);
} else {
if((state_val_24689 === (3))){
var inst_24686 = (state_24688[(2)]);
var state_24688__$1 = state_24688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24688__$1,inst_24686);
} else {
if((state_val_24689 === (4))){
var inst_24672 = (state_24688[(7)]);
var inst_24672__$1 = (state_24688[(2)]);
var state_24688__$1 = (function (){var statearr_24691 = state_24688;
(statearr_24691[(7)] = inst_24672__$1);

return statearr_24691;
})();
if(cljs.core.truth_(inst_24672__$1)){
var statearr_24692_24706 = state_24688__$1;
(statearr_24692_24706[(1)] = (5));

} else {
var statearr_24693_24707 = state_24688__$1;
(statearr_24693_24707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24689 === (5))){
var inst_24672 = (state_24688[(7)]);
var inst_24675 = cljs.core.nth.call(null,inst_24672,(0),null);
var inst_24676 = cljs.core.nth.call(null,inst_24672,(1),null);
var inst_24677 = cljs.core.nth.call(null,inst_24672,(2),null);
var inst_24678 = cljs.core.nth.call(null,inst_24672,(3),null);
var inst_24679 = cljs.core.nth.call(null,inst_24672,(4),null);
var inst_24680 = cljs.core.println.call(null,inst_24675,inst_24676,inst_24677,inst_24678,inst_24679);
var state_24688__$1 = (function (){var statearr_24694 = state_24688;
(statearr_24694[(8)] = inst_24680);

return statearr_24694;
})();
var statearr_24695_24708 = state_24688__$1;
(statearr_24695_24708[(2)] = null);

(statearr_24695_24708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24689 === (6))){
var state_24688__$1 = state_24688;
var statearr_24696_24709 = state_24688__$1;
(statearr_24696_24709[(2)] = null);

(statearr_24696_24709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24689 === (7))){
var inst_24684 = (state_24688[(2)]);
var state_24688__$1 = state_24688;
var statearr_24697_24710 = state_24688__$1;
(statearr_24697_24710[(2)] = inst_24684);

(statearr_24697_24710[(1)] = (3));


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
});})(c__20626__auto__))
;
return ((function (switch__20514__auto__,c__20626__auto__){
return (function() {
var template$dispatch$process_events_$_state_machine__20515__auto__ = null;
var template$dispatch$process_events_$_state_machine__20515__auto____0 = (function (){
var statearr_24701 = [null,null,null,null,null,null,null,null,null];
(statearr_24701[(0)] = template$dispatch$process_events_$_state_machine__20515__auto__);

(statearr_24701[(1)] = (1));

return statearr_24701;
});
var template$dispatch$process_events_$_state_machine__20515__auto____1 = (function (state_24688){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_24688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e24702){if((e24702 instanceof Object)){
var ex__20518__auto__ = e24702;
var statearr_24703_24711 = state_24688;
(statearr_24703_24711[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24712 = state_24688;
state_24688 = G__24712;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
template$dispatch$process_events_$_state_machine__20515__auto__ = function(state_24688){
switch(arguments.length){
case 0:
return template$dispatch$process_events_$_state_machine__20515__auto____0.call(this);
case 1:
return template$dispatch$process_events_$_state_machine__20515__auto____1.call(this,state_24688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
template$dispatch$process_events_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = template$dispatch$process_events_$_state_machine__20515__auto____0;
template$dispatch$process_events_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = template$dispatch$process_events_$_state_machine__20515__auto____1;
return template$dispatch$process_events_$_state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto__))
})();
var state__20628__auto__ = (function (){var statearr_24704 = f__20627__auto__.call(null);
(statearr_24704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto__);

return statearr_24704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto__))
);

return c__20626__auto__;
});
template.dispatch.process_events.call(null,template.dispatch.pipe);
template.dispatch.emit = (function template$dispatch$emit(var_args){
var args24713 = [];
var len__19529__auto___24716 = arguments.length;
var i__19530__auto___24717 = (0);
while(true){
if((i__19530__auto___24717 < len__19529__auto___24716)){
args24713.push((arguments[i__19530__auto___24717]));

var G__24718 = (i__19530__auto___24717 + (1));
i__19530__auto___24717 = G__24718;
continue;
} else {
}
break;
}

var G__24715 = args24713.length;
switch (G__24715) {
case 2:
return template.dispatch.emit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return template.dispatch.emit.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24713.length)].join('')));

}
});

template.dispatch.emit.cljs$core$IFn$_invoke$arity$2 = (function (native_event,state){
var id = native_event.target.id;
var css_class = cljs.core.first.call(null,clojure.string.split.call(null,native_event.target.className," "));
var sender = (cljs.core.truth_(id)?cljs.core.keyword.call(null,id):cljs.core.keyword.call(null,css_class));
var message_type = cljs.core.keyword.call(null,native_event.type);
if(cljs.core.truth_((function (){var and__18447__auto__ = template.dispatch.empty_or_nil_QMARK_.call(null,id);
if(cljs.core.truth_(and__18447__auto__)){
return template.dispatch.empty_or_nil_QMARK_.call(null,css_class);
} else {
return and__18447__auto__;
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

//# sourceMappingURL=dispatch.js.map?rel=1470497434079