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
var c__20574__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto__){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto__){
return (function (state_24920){
var state_val_24921 = (state_24920[(1)]);
if((state_val_24921 === (1))){
var state_24920__$1 = state_24920;
var statearr_24922_24937 = state_24920__$1;
(statearr_24922_24937[(2)] = null);

(statearr_24922_24937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24921 === (2))){
var state_24920__$1 = state_24920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24920__$1,(4),channel);
} else {
if((state_val_24921 === (3))){
var inst_24918 = (state_24920[(2)]);
var state_24920__$1 = state_24920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24920__$1,inst_24918);
} else {
if((state_val_24921 === (4))){
var inst_24904 = (state_24920[(7)]);
var inst_24904__$1 = (state_24920[(2)]);
var state_24920__$1 = (function (){var statearr_24923 = state_24920;
(statearr_24923[(7)] = inst_24904__$1);

return statearr_24923;
})();
if(cljs.core.truth_(inst_24904__$1)){
var statearr_24924_24938 = state_24920__$1;
(statearr_24924_24938[(1)] = (5));

} else {
var statearr_24925_24939 = state_24920__$1;
(statearr_24925_24939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24921 === (5))){
var inst_24904 = (state_24920[(7)]);
var inst_24907 = cljs.core.nth.call(null,inst_24904,(0),null);
var inst_24908 = cljs.core.nth.call(null,inst_24904,(1),null);
var inst_24909 = cljs.core.nth.call(null,inst_24904,(2),null);
var inst_24910 = cljs.core.nth.call(null,inst_24904,(3),null);
var inst_24911 = cljs.core.nth.call(null,inst_24904,(4),null);
var inst_24912 = cljs.core.println.call(null,inst_24907,inst_24908,inst_24909,inst_24910,inst_24911);
var state_24920__$1 = (function (){var statearr_24926 = state_24920;
(statearr_24926[(8)] = inst_24912);

return statearr_24926;
})();
var statearr_24927_24940 = state_24920__$1;
(statearr_24927_24940[(2)] = null);

(statearr_24927_24940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24921 === (6))){
var state_24920__$1 = state_24920;
var statearr_24928_24941 = state_24920__$1;
(statearr_24928_24941[(2)] = null);

(statearr_24928_24941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24921 === (7))){
var inst_24916 = (state_24920[(2)]);
var state_24920__$1 = state_24920;
var statearr_24929_24942 = state_24920__$1;
(statearr_24929_24942[(2)] = inst_24916);

(statearr_24929_24942[(1)] = (3));


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
});})(c__20574__auto__))
;
return ((function (switch__20553__auto__,c__20574__auto__){
return (function() {
var template$dispatch$process_events_$_state_machine__20554__auto__ = null;
var template$dispatch$process_events_$_state_machine__20554__auto____0 = (function (){
var statearr_24933 = [null,null,null,null,null,null,null,null,null];
(statearr_24933[(0)] = template$dispatch$process_events_$_state_machine__20554__auto__);

(statearr_24933[(1)] = (1));

return statearr_24933;
});
var template$dispatch$process_events_$_state_machine__20554__auto____1 = (function (state_24920){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_24920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e24934){if((e24934 instanceof Object)){
var ex__20557__auto__ = e24934;
var statearr_24935_24943 = state_24920;
(statearr_24935_24943[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24944 = state_24920;
state_24920 = G__24944;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
template$dispatch$process_events_$_state_machine__20554__auto__ = function(state_24920){
switch(arguments.length){
case 0:
return template$dispatch$process_events_$_state_machine__20554__auto____0.call(this);
case 1:
return template$dispatch$process_events_$_state_machine__20554__auto____1.call(this,state_24920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
template$dispatch$process_events_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = template$dispatch$process_events_$_state_machine__20554__auto____0;
template$dispatch$process_events_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = template$dispatch$process_events_$_state_machine__20554__auto____1;
return template$dispatch$process_events_$_state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto__))
})();
var state__20576__auto__ = (function (){var statearr_24936 = f__20575__auto__.call(null);
(statearr_24936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto__);

return statearr_24936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto__))
);

return c__20574__auto__;
});
template.dispatch.process_events.call(null,template.dispatch.pipe);
template.dispatch.emit = (function template$dispatch$emit(var_args){
var args24945 = [];
var len__19529__auto___24948 = arguments.length;
var i__19530__auto___24949 = (0);
while(true){
if((i__19530__auto___24949 < len__19529__auto___24948)){
args24945.push((arguments[i__19530__auto___24949]));

var G__24950 = (i__19530__auto___24949 + (1));
i__19530__auto___24949 = G__24950;
continue;
} else {
}
break;
}

var G__24947 = args24945.length;
switch (G__24947) {
case 2:
return template.dispatch.emit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return template.dispatch.emit.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24945.length)].join('')));

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

//# sourceMappingURL=dispatch.js.map?rel=1471682746949