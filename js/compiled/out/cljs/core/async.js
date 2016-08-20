// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21720 = [];
var len__19529__auto___21726 = arguments.length;
var i__19530__auto___21727 = (0);
while(true){
if((i__19530__auto___21727 < len__19529__auto___21726)){
args21720.push((arguments[i__19530__auto___21727]));

var G__21728 = (i__19530__auto___21727 + (1));
i__19530__auto___21727 = G__21728;
continue;
} else {
}
break;
}

var G__21722 = args21720.length;
switch (G__21722) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21720.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21723 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21723 = (function (f,blockable,meta21724){
this.f = f;
this.blockable = blockable;
this.meta21724 = meta21724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21725,meta21724__$1){
var self__ = this;
var _21725__$1 = this;
return (new cljs.core.async.t_cljs$core$async21723(self__.f,self__.blockable,meta21724__$1));
});

cljs.core.async.t_cljs$core$async21723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21725){
var self__ = this;
var _21725__$1 = this;
return self__.meta21724;
});

cljs.core.async.t_cljs$core$async21723.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21723.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21723.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21723.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21724","meta21724",-1220577090,null)], null);
});

cljs.core.async.t_cljs$core$async21723.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21723";

cljs.core.async.t_cljs$core$async21723.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async21723");
});

cljs.core.async.__GT_t_cljs$core$async21723 = (function cljs$core$async$__GT_t_cljs$core$async21723(f__$1,blockable__$1,meta21724){
return (new cljs.core.async.t_cljs$core$async21723(f__$1,blockable__$1,meta21724));
});

}

return (new cljs.core.async.t_cljs$core$async21723(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args21732 = [];
var len__19529__auto___21735 = arguments.length;
var i__19530__auto___21736 = (0);
while(true){
if((i__19530__auto___21736 < len__19529__auto___21735)){
args21732.push((arguments[i__19530__auto___21736]));

var G__21737 = (i__19530__auto___21736 + (1));
i__19530__auto___21736 = G__21737;
continue;
} else {
}
break;
}

var G__21734 = args21732.length;
switch (G__21734) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21732.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args21739 = [];
var len__19529__auto___21742 = arguments.length;
var i__19530__auto___21743 = (0);
while(true){
if((i__19530__auto___21743 < len__19529__auto___21742)){
args21739.push((arguments[i__19530__auto___21743]));

var G__21744 = (i__19530__auto___21743 + (1));
i__19530__auto___21743 = G__21744;
continue;
} else {
}
break;
}

var G__21741 = args21739.length;
switch (G__21741) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21739.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args21746 = [];
var len__19529__auto___21749 = arguments.length;
var i__19530__auto___21750 = (0);
while(true){
if((i__19530__auto___21750 < len__19529__auto___21749)){
args21746.push((arguments[i__19530__auto___21750]));

var G__21751 = (i__19530__auto___21750 + (1));
i__19530__auto___21750 = G__21751;
continue;
} else {
}
break;
}

var G__21748 = args21746.length;
switch (G__21748) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21746.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21753 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21753);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21753,ret){
return (function (){
return fn1.call(null,val_21753);
});})(val_21753,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args21754 = [];
var len__19529__auto___21757 = arguments.length;
var i__19530__auto___21758 = (0);
while(true){
if((i__19530__auto___21758 < len__19529__auto___21757)){
args21754.push((arguments[i__19530__auto___21758]));

var G__21759 = (i__19530__auto___21758 + (1));
i__19530__auto___21758 = G__21759;
continue;
} else {
}
break;
}

var G__21756 = args21754.length;
switch (G__21756) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21754.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19374__auto___21761 = n;
var x_21762 = (0);
while(true){
if((x_21762 < n__19374__auto___21761)){
(a[x_21762] = (0));

var G__21763 = (x_21762 + (1));
x_21762 = G__21763;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21764 = (i + (1));
i = G__21764;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21768 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21768 = (function (alt_flag,flag,meta21769){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21769 = meta21769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21770,meta21769__$1){
var self__ = this;
var _21770__$1 = this;
return (new cljs.core.async.t_cljs$core$async21768(self__.alt_flag,self__.flag,meta21769__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21768.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21770){
var self__ = this;
var _21770__$1 = this;
return self__.meta21769;
});})(flag))
;

cljs.core.async.t_cljs$core$async21768.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21768.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21768.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21768.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21768.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21769","meta21769",1551113676,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21768.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21768";

cljs.core.async.t_cljs$core$async21768.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async21768");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21768 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21768(alt_flag__$1,flag__$1,meta21769){
return (new cljs.core.async.t_cljs$core$async21768(alt_flag__$1,flag__$1,meta21769));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21768(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21774 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21774 = (function (alt_handler,flag,cb,meta21775){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21775 = meta21775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21776,meta21775__$1){
var self__ = this;
var _21776__$1 = this;
return (new cljs.core.async.t_cljs$core$async21774(self__.alt_handler,self__.flag,self__.cb,meta21775__$1));
});

cljs.core.async.t_cljs$core$async21774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21776){
var self__ = this;
var _21776__$1 = this;
return self__.meta21775;
});

cljs.core.async.t_cljs$core$async21774.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21774.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21774.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21774.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21775","meta21775",1937646635,null)], null);
});

cljs.core.async.t_cljs$core$async21774.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21774";

cljs.core.async.t_cljs$core$async21774.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async21774");
});

cljs.core.async.__GT_t_cljs$core$async21774 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21774(alt_handler__$1,flag__$1,cb__$1,meta21775){
return (new cljs.core.async.t_cljs$core$async21774(alt_handler__$1,flag__$1,cb__$1,meta21775));
});

}

return (new cljs.core.async.t_cljs$core$async21774(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21777_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21777_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21778_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21778_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18459__auto__ = wport;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21779 = (i + (1));
i = G__21779;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18459__auto__ = ret;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18447__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18447__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19536__auto__ = [];
var len__19529__auto___21785 = arguments.length;
var i__19530__auto___21786 = (0);
while(true){
if((i__19530__auto___21786 < len__19529__auto___21785)){
args__19536__auto__.push((arguments[i__19530__auto___21786]));

var G__21787 = (i__19530__auto___21786 + (1));
i__19530__auto___21786 = G__21787;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21782){
var map__21783 = p__21782;
var map__21783__$1 = ((((!((map__21783 == null)))?((((map__21783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21783):map__21783);
var opts = map__21783__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21780){
var G__21781 = cljs.core.first.call(null,seq21780);
var seq21780__$1 = cljs.core.next.call(null,seq21780);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21781,seq21780__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args21788 = [];
var len__19529__auto___21838 = arguments.length;
var i__19530__auto___21839 = (0);
while(true){
if((i__19530__auto___21839 < len__19529__auto___21838)){
args21788.push((arguments[i__19530__auto___21839]));

var G__21840 = (i__19530__auto___21839 + (1));
i__19530__auto___21839 = G__21840;
continue;
} else {
}
break;
}

var G__21790 = args21788.length;
switch (G__21790) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21788.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20574__auto___21842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto___21842){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto___21842){
return (function (state_21814){
var state_val_21815 = (state_21814[(1)]);
if((state_val_21815 === (7))){
var inst_21810 = (state_21814[(2)]);
var state_21814__$1 = state_21814;
var statearr_21816_21843 = state_21814__$1;
(statearr_21816_21843[(2)] = inst_21810);

(statearr_21816_21843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (1))){
var state_21814__$1 = state_21814;
var statearr_21817_21844 = state_21814__$1;
(statearr_21817_21844[(2)] = null);

(statearr_21817_21844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (4))){
var inst_21793 = (state_21814[(7)]);
var inst_21793__$1 = (state_21814[(2)]);
var inst_21794 = (inst_21793__$1 == null);
var state_21814__$1 = (function (){var statearr_21818 = state_21814;
(statearr_21818[(7)] = inst_21793__$1);

return statearr_21818;
})();
if(cljs.core.truth_(inst_21794)){
var statearr_21819_21845 = state_21814__$1;
(statearr_21819_21845[(1)] = (5));

} else {
var statearr_21820_21846 = state_21814__$1;
(statearr_21820_21846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (13))){
var state_21814__$1 = state_21814;
var statearr_21821_21847 = state_21814__$1;
(statearr_21821_21847[(2)] = null);

(statearr_21821_21847[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (6))){
var inst_21793 = (state_21814[(7)]);
var state_21814__$1 = state_21814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21814__$1,(11),to,inst_21793);
} else {
if((state_val_21815 === (3))){
var inst_21812 = (state_21814[(2)]);
var state_21814__$1 = state_21814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21814__$1,inst_21812);
} else {
if((state_val_21815 === (12))){
var state_21814__$1 = state_21814;
var statearr_21822_21848 = state_21814__$1;
(statearr_21822_21848[(2)] = null);

(statearr_21822_21848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (2))){
var state_21814__$1 = state_21814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21814__$1,(4),from);
} else {
if((state_val_21815 === (11))){
var inst_21803 = (state_21814[(2)]);
var state_21814__$1 = state_21814;
if(cljs.core.truth_(inst_21803)){
var statearr_21823_21849 = state_21814__$1;
(statearr_21823_21849[(1)] = (12));

} else {
var statearr_21824_21850 = state_21814__$1;
(statearr_21824_21850[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (9))){
var state_21814__$1 = state_21814;
var statearr_21825_21851 = state_21814__$1;
(statearr_21825_21851[(2)] = null);

(statearr_21825_21851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (5))){
var state_21814__$1 = state_21814;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21826_21852 = state_21814__$1;
(statearr_21826_21852[(1)] = (8));

} else {
var statearr_21827_21853 = state_21814__$1;
(statearr_21827_21853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (14))){
var inst_21808 = (state_21814[(2)]);
var state_21814__$1 = state_21814;
var statearr_21828_21854 = state_21814__$1;
(statearr_21828_21854[(2)] = inst_21808);

(statearr_21828_21854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (10))){
var inst_21800 = (state_21814[(2)]);
var state_21814__$1 = state_21814;
var statearr_21829_21855 = state_21814__$1;
(statearr_21829_21855[(2)] = inst_21800);

(statearr_21829_21855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (8))){
var inst_21797 = cljs.core.async.close_BANG_.call(null,to);
var state_21814__$1 = state_21814;
var statearr_21830_21856 = state_21814__$1;
(statearr_21830_21856[(2)] = inst_21797);

(statearr_21830_21856[(1)] = (10));


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
});})(c__20574__auto___21842))
;
return ((function (switch__20553__auto__,c__20574__auto___21842){
return (function() {
var cljs$core$async$state_machine__20554__auto__ = null;
var cljs$core$async$state_machine__20554__auto____0 = (function (){
var statearr_21834 = [null,null,null,null,null,null,null,null];
(statearr_21834[(0)] = cljs$core$async$state_machine__20554__auto__);

(statearr_21834[(1)] = (1));

return statearr_21834;
});
var cljs$core$async$state_machine__20554__auto____1 = (function (state_21814){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_21814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e21835){if((e21835 instanceof Object)){
var ex__20557__auto__ = e21835;
var statearr_21836_21857 = state_21814;
(statearr_21836_21857[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21858 = state_21814;
state_21814 = G__21858;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$state_machine__20554__auto__ = function(state_21814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20554__auto____1.call(this,state_21814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20554__auto____0;
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20554__auto____1;
return cljs$core$async$state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto___21842))
})();
var state__20576__auto__ = (function (){var statearr_21837 = f__20575__auto__.call(null);
(statearr_21837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto___21842);

return statearr_21837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto___21842))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22042){
var vec__22043 = p__22042;
var v = cljs.core.nth.call(null,vec__22043,(0),null);
var p = cljs.core.nth.call(null,vec__22043,(1),null);
var job = vec__22043;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20574__auto___22225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto___22225,res,vec__22043,v,p,job,jobs,results){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto___22225,res,vec__22043,v,p,job,jobs,results){
return (function (state_22048){
var state_val_22049 = (state_22048[(1)]);
if((state_val_22049 === (1))){
var state_22048__$1 = state_22048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22048__$1,(2),res,v);
} else {
if((state_val_22049 === (2))){
var inst_22045 = (state_22048[(2)]);
var inst_22046 = cljs.core.async.close_BANG_.call(null,res);
var state_22048__$1 = (function (){var statearr_22050 = state_22048;
(statearr_22050[(7)] = inst_22045);

return statearr_22050;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22048__$1,inst_22046);
} else {
return null;
}
}
});})(c__20574__auto___22225,res,vec__22043,v,p,job,jobs,results))
;
return ((function (switch__20553__auto__,c__20574__auto___22225,res,vec__22043,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____0 = (function (){
var statearr_22054 = [null,null,null,null,null,null,null,null];
(statearr_22054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__);

(statearr_22054[(1)] = (1));

return statearr_22054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____1 = (function (state_22048){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_22048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e22055){if((e22055 instanceof Object)){
var ex__20557__auto__ = e22055;
var statearr_22056_22226 = state_22048;
(statearr_22056_22226[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22227 = state_22048;
state_22048 = G__22227;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__ = function(state_22048){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____1.call(this,state_22048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto___22225,res,vec__22043,v,p,job,jobs,results))
})();
var state__20576__auto__ = (function (){var statearr_22057 = f__20575__auto__.call(null);
(statearr_22057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto___22225);

return statearr_22057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto___22225,res,vec__22043,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22058){
var vec__22059 = p__22058;
var v = cljs.core.nth.call(null,vec__22059,(0),null);
var p = cljs.core.nth.call(null,vec__22059,(1),null);
var job = vec__22059;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19374__auto___22228 = n;
var __22229 = (0);
while(true){
if((__22229 < n__19374__auto___22228)){
var G__22060_22230 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22060_22230) {
case "compute":
var c__20574__auto___22232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22229,c__20574__auto___22232,G__22060_22230,n__19374__auto___22228,jobs,results,process,async){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (__22229,c__20574__auto___22232,G__22060_22230,n__19374__auto___22228,jobs,results,process,async){
return (function (state_22073){
var state_val_22074 = (state_22073[(1)]);
if((state_val_22074 === (1))){
var state_22073__$1 = state_22073;
var statearr_22075_22233 = state_22073__$1;
(statearr_22075_22233[(2)] = null);

(statearr_22075_22233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22074 === (2))){
var state_22073__$1 = state_22073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22073__$1,(4),jobs);
} else {
if((state_val_22074 === (3))){
var inst_22071 = (state_22073[(2)]);
var state_22073__$1 = state_22073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22073__$1,inst_22071);
} else {
if((state_val_22074 === (4))){
var inst_22063 = (state_22073[(2)]);
var inst_22064 = process.call(null,inst_22063);
var state_22073__$1 = state_22073;
if(cljs.core.truth_(inst_22064)){
var statearr_22076_22234 = state_22073__$1;
(statearr_22076_22234[(1)] = (5));

} else {
var statearr_22077_22235 = state_22073__$1;
(statearr_22077_22235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22074 === (5))){
var state_22073__$1 = state_22073;
var statearr_22078_22236 = state_22073__$1;
(statearr_22078_22236[(2)] = null);

(statearr_22078_22236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22074 === (6))){
var state_22073__$1 = state_22073;
var statearr_22079_22237 = state_22073__$1;
(statearr_22079_22237[(2)] = null);

(statearr_22079_22237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22074 === (7))){
var inst_22069 = (state_22073[(2)]);
var state_22073__$1 = state_22073;
var statearr_22080_22238 = state_22073__$1;
(statearr_22080_22238[(2)] = inst_22069);

(statearr_22080_22238[(1)] = (3));


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
});})(__22229,c__20574__auto___22232,G__22060_22230,n__19374__auto___22228,jobs,results,process,async))
;
return ((function (__22229,switch__20553__auto__,c__20574__auto___22232,G__22060_22230,n__19374__auto___22228,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____0 = (function (){
var statearr_22084 = [null,null,null,null,null,null,null];
(statearr_22084[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__);

(statearr_22084[(1)] = (1));

return statearr_22084;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____1 = (function (state_22073){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_22073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e22085){if((e22085 instanceof Object)){
var ex__20557__auto__ = e22085;
var statearr_22086_22239 = state_22073;
(statearr_22086_22239[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22240 = state_22073;
state_22073 = G__22240;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__ = function(state_22073){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____1.call(this,state_22073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__;
})()
;})(__22229,switch__20553__auto__,c__20574__auto___22232,G__22060_22230,n__19374__auto___22228,jobs,results,process,async))
})();
var state__20576__auto__ = (function (){var statearr_22087 = f__20575__auto__.call(null);
(statearr_22087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto___22232);

return statearr_22087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(__22229,c__20574__auto___22232,G__22060_22230,n__19374__auto___22228,jobs,results,process,async))
);


break;
case "async":
var c__20574__auto___22241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22229,c__20574__auto___22241,G__22060_22230,n__19374__auto___22228,jobs,results,process,async){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (__22229,c__20574__auto___22241,G__22060_22230,n__19374__auto___22228,jobs,results,process,async){
return (function (state_22100){
var state_val_22101 = (state_22100[(1)]);
if((state_val_22101 === (1))){
var state_22100__$1 = state_22100;
var statearr_22102_22242 = state_22100__$1;
(statearr_22102_22242[(2)] = null);

(statearr_22102_22242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (2))){
var state_22100__$1 = state_22100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22100__$1,(4),jobs);
} else {
if((state_val_22101 === (3))){
var inst_22098 = (state_22100[(2)]);
var state_22100__$1 = state_22100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22100__$1,inst_22098);
} else {
if((state_val_22101 === (4))){
var inst_22090 = (state_22100[(2)]);
var inst_22091 = async.call(null,inst_22090);
var state_22100__$1 = state_22100;
if(cljs.core.truth_(inst_22091)){
var statearr_22103_22243 = state_22100__$1;
(statearr_22103_22243[(1)] = (5));

} else {
var statearr_22104_22244 = state_22100__$1;
(statearr_22104_22244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (5))){
var state_22100__$1 = state_22100;
var statearr_22105_22245 = state_22100__$1;
(statearr_22105_22245[(2)] = null);

(statearr_22105_22245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (6))){
var state_22100__$1 = state_22100;
var statearr_22106_22246 = state_22100__$1;
(statearr_22106_22246[(2)] = null);

(statearr_22106_22246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (7))){
var inst_22096 = (state_22100[(2)]);
var state_22100__$1 = state_22100;
var statearr_22107_22247 = state_22100__$1;
(statearr_22107_22247[(2)] = inst_22096);

(statearr_22107_22247[(1)] = (3));


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
});})(__22229,c__20574__auto___22241,G__22060_22230,n__19374__auto___22228,jobs,results,process,async))
;
return ((function (__22229,switch__20553__auto__,c__20574__auto___22241,G__22060_22230,n__19374__auto___22228,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____0 = (function (){
var statearr_22111 = [null,null,null,null,null,null,null];
(statearr_22111[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__);

(statearr_22111[(1)] = (1));

return statearr_22111;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____1 = (function (state_22100){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_22100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e22112){if((e22112 instanceof Object)){
var ex__20557__auto__ = e22112;
var statearr_22113_22248 = state_22100;
(statearr_22113_22248[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22249 = state_22100;
state_22100 = G__22249;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__ = function(state_22100){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____1.call(this,state_22100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__;
})()
;})(__22229,switch__20553__auto__,c__20574__auto___22241,G__22060_22230,n__19374__auto___22228,jobs,results,process,async))
})();
var state__20576__auto__ = (function (){var statearr_22114 = f__20575__auto__.call(null);
(statearr_22114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto___22241);

return statearr_22114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(__22229,c__20574__auto___22241,G__22060_22230,n__19374__auto___22228,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22250 = (__22229 + (1));
__22229 = G__22250;
continue;
} else {
}
break;
}

var c__20574__auto___22251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto___22251,jobs,results,process,async){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto___22251,jobs,results,process,async){
return (function (state_22136){
var state_val_22137 = (state_22136[(1)]);
if((state_val_22137 === (1))){
var state_22136__$1 = state_22136;
var statearr_22138_22252 = state_22136__$1;
(statearr_22138_22252[(2)] = null);

(statearr_22138_22252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22137 === (2))){
var state_22136__$1 = state_22136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22136__$1,(4),from);
} else {
if((state_val_22137 === (3))){
var inst_22134 = (state_22136[(2)]);
var state_22136__$1 = state_22136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22136__$1,inst_22134);
} else {
if((state_val_22137 === (4))){
var inst_22117 = (state_22136[(7)]);
var inst_22117__$1 = (state_22136[(2)]);
var inst_22118 = (inst_22117__$1 == null);
var state_22136__$1 = (function (){var statearr_22139 = state_22136;
(statearr_22139[(7)] = inst_22117__$1);

return statearr_22139;
})();
if(cljs.core.truth_(inst_22118)){
var statearr_22140_22253 = state_22136__$1;
(statearr_22140_22253[(1)] = (5));

} else {
var statearr_22141_22254 = state_22136__$1;
(statearr_22141_22254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22137 === (5))){
var inst_22120 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22136__$1 = state_22136;
var statearr_22142_22255 = state_22136__$1;
(statearr_22142_22255[(2)] = inst_22120);

(statearr_22142_22255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22137 === (6))){
var inst_22122 = (state_22136[(8)]);
var inst_22117 = (state_22136[(7)]);
var inst_22122__$1 = cljs.core.async.chan.call(null,(1));
var inst_22123 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22124 = [inst_22117,inst_22122__$1];
var inst_22125 = (new cljs.core.PersistentVector(null,2,(5),inst_22123,inst_22124,null));
var state_22136__$1 = (function (){var statearr_22143 = state_22136;
(statearr_22143[(8)] = inst_22122__$1);

return statearr_22143;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22136__$1,(8),jobs,inst_22125);
} else {
if((state_val_22137 === (7))){
var inst_22132 = (state_22136[(2)]);
var state_22136__$1 = state_22136;
var statearr_22144_22256 = state_22136__$1;
(statearr_22144_22256[(2)] = inst_22132);

(statearr_22144_22256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22137 === (8))){
var inst_22122 = (state_22136[(8)]);
var inst_22127 = (state_22136[(2)]);
var state_22136__$1 = (function (){var statearr_22145 = state_22136;
(statearr_22145[(9)] = inst_22127);

return statearr_22145;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22136__$1,(9),results,inst_22122);
} else {
if((state_val_22137 === (9))){
var inst_22129 = (state_22136[(2)]);
var state_22136__$1 = (function (){var statearr_22146 = state_22136;
(statearr_22146[(10)] = inst_22129);

return statearr_22146;
})();
var statearr_22147_22257 = state_22136__$1;
(statearr_22147_22257[(2)] = null);

(statearr_22147_22257[(1)] = (2));


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
});})(c__20574__auto___22251,jobs,results,process,async))
;
return ((function (switch__20553__auto__,c__20574__auto___22251,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____0 = (function (){
var statearr_22151 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22151[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__);

(statearr_22151[(1)] = (1));

return statearr_22151;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____1 = (function (state_22136){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_22136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e22152){if((e22152 instanceof Object)){
var ex__20557__auto__ = e22152;
var statearr_22153_22258 = state_22136;
(statearr_22153_22258[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22259 = state_22136;
state_22136 = G__22259;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__ = function(state_22136){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____1.call(this,state_22136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto___22251,jobs,results,process,async))
})();
var state__20576__auto__ = (function (){var statearr_22154 = f__20575__auto__.call(null);
(statearr_22154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto___22251);

return statearr_22154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto___22251,jobs,results,process,async))
);


var c__20574__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto__,jobs,results,process,async){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto__,jobs,results,process,async){
return (function (state_22192){
var state_val_22193 = (state_22192[(1)]);
if((state_val_22193 === (7))){
var inst_22188 = (state_22192[(2)]);
var state_22192__$1 = state_22192;
var statearr_22194_22260 = state_22192__$1;
(statearr_22194_22260[(2)] = inst_22188);

(statearr_22194_22260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (20))){
var state_22192__$1 = state_22192;
var statearr_22195_22261 = state_22192__$1;
(statearr_22195_22261[(2)] = null);

(statearr_22195_22261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (1))){
var state_22192__$1 = state_22192;
var statearr_22196_22262 = state_22192__$1;
(statearr_22196_22262[(2)] = null);

(statearr_22196_22262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (4))){
var inst_22157 = (state_22192[(7)]);
var inst_22157__$1 = (state_22192[(2)]);
var inst_22158 = (inst_22157__$1 == null);
var state_22192__$1 = (function (){var statearr_22197 = state_22192;
(statearr_22197[(7)] = inst_22157__$1);

return statearr_22197;
})();
if(cljs.core.truth_(inst_22158)){
var statearr_22198_22263 = state_22192__$1;
(statearr_22198_22263[(1)] = (5));

} else {
var statearr_22199_22264 = state_22192__$1;
(statearr_22199_22264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (15))){
var inst_22170 = (state_22192[(8)]);
var state_22192__$1 = state_22192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22192__$1,(18),to,inst_22170);
} else {
if((state_val_22193 === (21))){
var inst_22183 = (state_22192[(2)]);
var state_22192__$1 = state_22192;
var statearr_22200_22265 = state_22192__$1;
(statearr_22200_22265[(2)] = inst_22183);

(statearr_22200_22265[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (13))){
var inst_22185 = (state_22192[(2)]);
var state_22192__$1 = (function (){var statearr_22201 = state_22192;
(statearr_22201[(9)] = inst_22185);

return statearr_22201;
})();
var statearr_22202_22266 = state_22192__$1;
(statearr_22202_22266[(2)] = null);

(statearr_22202_22266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (6))){
var inst_22157 = (state_22192[(7)]);
var state_22192__$1 = state_22192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22192__$1,(11),inst_22157);
} else {
if((state_val_22193 === (17))){
var inst_22178 = (state_22192[(2)]);
var state_22192__$1 = state_22192;
if(cljs.core.truth_(inst_22178)){
var statearr_22203_22267 = state_22192__$1;
(statearr_22203_22267[(1)] = (19));

} else {
var statearr_22204_22268 = state_22192__$1;
(statearr_22204_22268[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (3))){
var inst_22190 = (state_22192[(2)]);
var state_22192__$1 = state_22192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22192__$1,inst_22190);
} else {
if((state_val_22193 === (12))){
var inst_22167 = (state_22192[(10)]);
var state_22192__$1 = state_22192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22192__$1,(14),inst_22167);
} else {
if((state_val_22193 === (2))){
var state_22192__$1 = state_22192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22192__$1,(4),results);
} else {
if((state_val_22193 === (19))){
var state_22192__$1 = state_22192;
var statearr_22205_22269 = state_22192__$1;
(statearr_22205_22269[(2)] = null);

(statearr_22205_22269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (11))){
var inst_22167 = (state_22192[(2)]);
var state_22192__$1 = (function (){var statearr_22206 = state_22192;
(statearr_22206[(10)] = inst_22167);

return statearr_22206;
})();
var statearr_22207_22270 = state_22192__$1;
(statearr_22207_22270[(2)] = null);

(statearr_22207_22270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (9))){
var state_22192__$1 = state_22192;
var statearr_22208_22271 = state_22192__$1;
(statearr_22208_22271[(2)] = null);

(statearr_22208_22271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (5))){
var state_22192__$1 = state_22192;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22209_22272 = state_22192__$1;
(statearr_22209_22272[(1)] = (8));

} else {
var statearr_22210_22273 = state_22192__$1;
(statearr_22210_22273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (14))){
var inst_22172 = (state_22192[(11)]);
var inst_22170 = (state_22192[(8)]);
var inst_22170__$1 = (state_22192[(2)]);
var inst_22171 = (inst_22170__$1 == null);
var inst_22172__$1 = cljs.core.not.call(null,inst_22171);
var state_22192__$1 = (function (){var statearr_22211 = state_22192;
(statearr_22211[(11)] = inst_22172__$1);

(statearr_22211[(8)] = inst_22170__$1);

return statearr_22211;
})();
if(inst_22172__$1){
var statearr_22212_22274 = state_22192__$1;
(statearr_22212_22274[(1)] = (15));

} else {
var statearr_22213_22275 = state_22192__$1;
(statearr_22213_22275[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (16))){
var inst_22172 = (state_22192[(11)]);
var state_22192__$1 = state_22192;
var statearr_22214_22276 = state_22192__$1;
(statearr_22214_22276[(2)] = inst_22172);

(statearr_22214_22276[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (10))){
var inst_22164 = (state_22192[(2)]);
var state_22192__$1 = state_22192;
var statearr_22215_22277 = state_22192__$1;
(statearr_22215_22277[(2)] = inst_22164);

(statearr_22215_22277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (18))){
var inst_22175 = (state_22192[(2)]);
var state_22192__$1 = state_22192;
var statearr_22216_22278 = state_22192__$1;
(statearr_22216_22278[(2)] = inst_22175);

(statearr_22216_22278[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (8))){
var inst_22161 = cljs.core.async.close_BANG_.call(null,to);
var state_22192__$1 = state_22192;
var statearr_22217_22279 = state_22192__$1;
(statearr_22217_22279[(2)] = inst_22161);

(statearr_22217_22279[(1)] = (10));


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
}
}
}
}
});})(c__20574__auto__,jobs,results,process,async))
;
return ((function (switch__20553__auto__,c__20574__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____0 = (function (){
var statearr_22221 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22221[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__);

(statearr_22221[(1)] = (1));

return statearr_22221;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____1 = (function (state_22192){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_22192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e22222){if((e22222 instanceof Object)){
var ex__20557__auto__ = e22222;
var statearr_22223_22280 = state_22192;
(statearr_22223_22280[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22281 = state_22192;
state_22192 = G__22281;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__ = function(state_22192){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____1.call(this,state_22192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20554__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto__,jobs,results,process,async))
})();
var state__20576__auto__ = (function (){var statearr_22224 = f__20575__auto__.call(null);
(statearr_22224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto__);

return statearr_22224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto__,jobs,results,process,async))
);

return c__20574__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22282 = [];
var len__19529__auto___22285 = arguments.length;
var i__19530__auto___22286 = (0);
while(true){
if((i__19530__auto___22286 < len__19529__auto___22285)){
args22282.push((arguments[i__19530__auto___22286]));

var G__22287 = (i__19530__auto___22286 + (1));
i__19530__auto___22286 = G__22287;
continue;
} else {
}
break;
}

var G__22284 = args22282.length;
switch (G__22284) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22282.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22289 = [];
var len__19529__auto___22292 = arguments.length;
var i__19530__auto___22293 = (0);
while(true){
if((i__19530__auto___22293 < len__19529__auto___22292)){
args22289.push((arguments[i__19530__auto___22293]));

var G__22294 = (i__19530__auto___22293 + (1));
i__19530__auto___22293 = G__22294;
continue;
} else {
}
break;
}

var G__22291 = args22289.length;
switch (G__22291) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22289.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22296 = [];
var len__19529__auto___22349 = arguments.length;
var i__19530__auto___22350 = (0);
while(true){
if((i__19530__auto___22350 < len__19529__auto___22349)){
args22296.push((arguments[i__19530__auto___22350]));

var G__22351 = (i__19530__auto___22350 + (1));
i__19530__auto___22350 = G__22351;
continue;
} else {
}
break;
}

var G__22298 = args22296.length;
switch (G__22298) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22296.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20574__auto___22353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto___22353,tc,fc){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto___22353,tc,fc){
return (function (state_22324){
var state_val_22325 = (state_22324[(1)]);
if((state_val_22325 === (7))){
var inst_22320 = (state_22324[(2)]);
var state_22324__$1 = state_22324;
var statearr_22326_22354 = state_22324__$1;
(statearr_22326_22354[(2)] = inst_22320);

(statearr_22326_22354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22325 === (1))){
var state_22324__$1 = state_22324;
var statearr_22327_22355 = state_22324__$1;
(statearr_22327_22355[(2)] = null);

(statearr_22327_22355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22325 === (4))){
var inst_22301 = (state_22324[(7)]);
var inst_22301__$1 = (state_22324[(2)]);
var inst_22302 = (inst_22301__$1 == null);
var state_22324__$1 = (function (){var statearr_22328 = state_22324;
(statearr_22328[(7)] = inst_22301__$1);

return statearr_22328;
})();
if(cljs.core.truth_(inst_22302)){
var statearr_22329_22356 = state_22324__$1;
(statearr_22329_22356[(1)] = (5));

} else {
var statearr_22330_22357 = state_22324__$1;
(statearr_22330_22357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22325 === (13))){
var state_22324__$1 = state_22324;
var statearr_22331_22358 = state_22324__$1;
(statearr_22331_22358[(2)] = null);

(statearr_22331_22358[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22325 === (6))){
var inst_22301 = (state_22324[(7)]);
var inst_22307 = p.call(null,inst_22301);
var state_22324__$1 = state_22324;
if(cljs.core.truth_(inst_22307)){
var statearr_22332_22359 = state_22324__$1;
(statearr_22332_22359[(1)] = (9));

} else {
var statearr_22333_22360 = state_22324__$1;
(statearr_22333_22360[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22325 === (3))){
var inst_22322 = (state_22324[(2)]);
var state_22324__$1 = state_22324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22324__$1,inst_22322);
} else {
if((state_val_22325 === (12))){
var state_22324__$1 = state_22324;
var statearr_22334_22361 = state_22324__$1;
(statearr_22334_22361[(2)] = null);

(statearr_22334_22361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22325 === (2))){
var state_22324__$1 = state_22324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22324__$1,(4),ch);
} else {
if((state_val_22325 === (11))){
var inst_22301 = (state_22324[(7)]);
var inst_22311 = (state_22324[(2)]);
var state_22324__$1 = state_22324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22324__$1,(8),inst_22311,inst_22301);
} else {
if((state_val_22325 === (9))){
var state_22324__$1 = state_22324;
var statearr_22335_22362 = state_22324__$1;
(statearr_22335_22362[(2)] = tc);

(statearr_22335_22362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22325 === (5))){
var inst_22304 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22305 = cljs.core.async.close_BANG_.call(null,fc);
var state_22324__$1 = (function (){var statearr_22336 = state_22324;
(statearr_22336[(8)] = inst_22304);

return statearr_22336;
})();
var statearr_22337_22363 = state_22324__$1;
(statearr_22337_22363[(2)] = inst_22305);

(statearr_22337_22363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22325 === (14))){
var inst_22318 = (state_22324[(2)]);
var state_22324__$1 = state_22324;
var statearr_22338_22364 = state_22324__$1;
(statearr_22338_22364[(2)] = inst_22318);

(statearr_22338_22364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22325 === (10))){
var state_22324__$1 = state_22324;
var statearr_22339_22365 = state_22324__$1;
(statearr_22339_22365[(2)] = fc);

(statearr_22339_22365[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22325 === (8))){
var inst_22313 = (state_22324[(2)]);
var state_22324__$1 = state_22324;
if(cljs.core.truth_(inst_22313)){
var statearr_22340_22366 = state_22324__$1;
(statearr_22340_22366[(1)] = (12));

} else {
var statearr_22341_22367 = state_22324__$1;
(statearr_22341_22367[(1)] = (13));

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
});})(c__20574__auto___22353,tc,fc))
;
return ((function (switch__20553__auto__,c__20574__auto___22353,tc,fc){
return (function() {
var cljs$core$async$state_machine__20554__auto__ = null;
var cljs$core$async$state_machine__20554__auto____0 = (function (){
var statearr_22345 = [null,null,null,null,null,null,null,null,null];
(statearr_22345[(0)] = cljs$core$async$state_machine__20554__auto__);

(statearr_22345[(1)] = (1));

return statearr_22345;
});
var cljs$core$async$state_machine__20554__auto____1 = (function (state_22324){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_22324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e22346){if((e22346 instanceof Object)){
var ex__20557__auto__ = e22346;
var statearr_22347_22368 = state_22324;
(statearr_22347_22368[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22369 = state_22324;
state_22324 = G__22369;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$state_machine__20554__auto__ = function(state_22324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20554__auto____1.call(this,state_22324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20554__auto____0;
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20554__auto____1;
return cljs$core$async$state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto___22353,tc,fc))
})();
var state__20576__auto__ = (function (){var statearr_22348 = f__20575__auto__.call(null);
(statearr_22348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto___22353);

return statearr_22348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto___22353,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20574__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto__){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto__){
return (function (state_22433){
var state_val_22434 = (state_22433[(1)]);
if((state_val_22434 === (7))){
var inst_22429 = (state_22433[(2)]);
var state_22433__$1 = state_22433;
var statearr_22435_22456 = state_22433__$1;
(statearr_22435_22456[(2)] = inst_22429);

(statearr_22435_22456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22434 === (1))){
var inst_22413 = init;
var state_22433__$1 = (function (){var statearr_22436 = state_22433;
(statearr_22436[(7)] = inst_22413);

return statearr_22436;
})();
var statearr_22437_22457 = state_22433__$1;
(statearr_22437_22457[(2)] = null);

(statearr_22437_22457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22434 === (4))){
var inst_22416 = (state_22433[(8)]);
var inst_22416__$1 = (state_22433[(2)]);
var inst_22417 = (inst_22416__$1 == null);
var state_22433__$1 = (function (){var statearr_22438 = state_22433;
(statearr_22438[(8)] = inst_22416__$1);

return statearr_22438;
})();
if(cljs.core.truth_(inst_22417)){
var statearr_22439_22458 = state_22433__$1;
(statearr_22439_22458[(1)] = (5));

} else {
var statearr_22440_22459 = state_22433__$1;
(statearr_22440_22459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22434 === (6))){
var inst_22416 = (state_22433[(8)]);
var inst_22413 = (state_22433[(7)]);
var inst_22420 = (state_22433[(9)]);
var inst_22420__$1 = f.call(null,inst_22413,inst_22416);
var inst_22421 = cljs.core.reduced_QMARK_.call(null,inst_22420__$1);
var state_22433__$1 = (function (){var statearr_22441 = state_22433;
(statearr_22441[(9)] = inst_22420__$1);

return statearr_22441;
})();
if(inst_22421){
var statearr_22442_22460 = state_22433__$1;
(statearr_22442_22460[(1)] = (8));

} else {
var statearr_22443_22461 = state_22433__$1;
(statearr_22443_22461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22434 === (3))){
var inst_22431 = (state_22433[(2)]);
var state_22433__$1 = state_22433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22433__$1,inst_22431);
} else {
if((state_val_22434 === (2))){
var state_22433__$1 = state_22433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22433__$1,(4),ch);
} else {
if((state_val_22434 === (9))){
var inst_22420 = (state_22433[(9)]);
var inst_22413 = inst_22420;
var state_22433__$1 = (function (){var statearr_22444 = state_22433;
(statearr_22444[(7)] = inst_22413);

return statearr_22444;
})();
var statearr_22445_22462 = state_22433__$1;
(statearr_22445_22462[(2)] = null);

(statearr_22445_22462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22434 === (5))){
var inst_22413 = (state_22433[(7)]);
var state_22433__$1 = state_22433;
var statearr_22446_22463 = state_22433__$1;
(statearr_22446_22463[(2)] = inst_22413);

(statearr_22446_22463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22434 === (10))){
var inst_22427 = (state_22433[(2)]);
var state_22433__$1 = state_22433;
var statearr_22447_22464 = state_22433__$1;
(statearr_22447_22464[(2)] = inst_22427);

(statearr_22447_22464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22434 === (8))){
var inst_22420 = (state_22433[(9)]);
var inst_22423 = cljs.core.deref.call(null,inst_22420);
var state_22433__$1 = state_22433;
var statearr_22448_22465 = state_22433__$1;
(statearr_22448_22465[(2)] = inst_22423);

(statearr_22448_22465[(1)] = (10));


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
});})(c__20574__auto__))
;
return ((function (switch__20553__auto__,c__20574__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20554__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20554__auto____0 = (function (){
var statearr_22452 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22452[(0)] = cljs$core$async$reduce_$_state_machine__20554__auto__);

(statearr_22452[(1)] = (1));

return statearr_22452;
});
var cljs$core$async$reduce_$_state_machine__20554__auto____1 = (function (state_22433){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_22433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e22453){if((e22453 instanceof Object)){
var ex__20557__auto__ = e22453;
var statearr_22454_22466 = state_22433;
(statearr_22454_22466[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22467 = state_22433;
state_22433 = G__22467;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20554__auto__ = function(state_22433){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20554__auto____1.call(this,state_22433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20554__auto____0;
cljs$core$async$reduce_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20554__auto____1;
return cljs$core$async$reduce_$_state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto__))
})();
var state__20576__auto__ = (function (){var statearr_22455 = f__20575__auto__.call(null);
(statearr_22455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto__);

return statearr_22455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto__))
);

return c__20574__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22468 = [];
var len__19529__auto___22520 = arguments.length;
var i__19530__auto___22521 = (0);
while(true){
if((i__19530__auto___22521 < len__19529__auto___22520)){
args22468.push((arguments[i__19530__auto___22521]));

var G__22522 = (i__19530__auto___22521 + (1));
i__19530__auto___22521 = G__22522;
continue;
} else {
}
break;
}

var G__22470 = args22468.length;
switch (G__22470) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22468.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20574__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto__){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto__){
return (function (state_22495){
var state_val_22496 = (state_22495[(1)]);
if((state_val_22496 === (7))){
var inst_22477 = (state_22495[(2)]);
var state_22495__$1 = state_22495;
var statearr_22497_22524 = state_22495__$1;
(statearr_22497_22524[(2)] = inst_22477);

(statearr_22497_22524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (1))){
var inst_22471 = cljs.core.seq.call(null,coll);
var inst_22472 = inst_22471;
var state_22495__$1 = (function (){var statearr_22498 = state_22495;
(statearr_22498[(7)] = inst_22472);

return statearr_22498;
})();
var statearr_22499_22525 = state_22495__$1;
(statearr_22499_22525[(2)] = null);

(statearr_22499_22525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (4))){
var inst_22472 = (state_22495[(7)]);
var inst_22475 = cljs.core.first.call(null,inst_22472);
var state_22495__$1 = state_22495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22495__$1,(7),ch,inst_22475);
} else {
if((state_val_22496 === (13))){
var inst_22489 = (state_22495[(2)]);
var state_22495__$1 = state_22495;
var statearr_22500_22526 = state_22495__$1;
(statearr_22500_22526[(2)] = inst_22489);

(statearr_22500_22526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (6))){
var inst_22480 = (state_22495[(2)]);
var state_22495__$1 = state_22495;
if(cljs.core.truth_(inst_22480)){
var statearr_22501_22527 = state_22495__$1;
(statearr_22501_22527[(1)] = (8));

} else {
var statearr_22502_22528 = state_22495__$1;
(statearr_22502_22528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (3))){
var inst_22493 = (state_22495[(2)]);
var state_22495__$1 = state_22495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22495__$1,inst_22493);
} else {
if((state_val_22496 === (12))){
var state_22495__$1 = state_22495;
var statearr_22503_22529 = state_22495__$1;
(statearr_22503_22529[(2)] = null);

(statearr_22503_22529[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (2))){
var inst_22472 = (state_22495[(7)]);
var state_22495__$1 = state_22495;
if(cljs.core.truth_(inst_22472)){
var statearr_22504_22530 = state_22495__$1;
(statearr_22504_22530[(1)] = (4));

} else {
var statearr_22505_22531 = state_22495__$1;
(statearr_22505_22531[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (11))){
var inst_22486 = cljs.core.async.close_BANG_.call(null,ch);
var state_22495__$1 = state_22495;
var statearr_22506_22532 = state_22495__$1;
(statearr_22506_22532[(2)] = inst_22486);

(statearr_22506_22532[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (9))){
var state_22495__$1 = state_22495;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22507_22533 = state_22495__$1;
(statearr_22507_22533[(1)] = (11));

} else {
var statearr_22508_22534 = state_22495__$1;
(statearr_22508_22534[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (5))){
var inst_22472 = (state_22495[(7)]);
var state_22495__$1 = state_22495;
var statearr_22509_22535 = state_22495__$1;
(statearr_22509_22535[(2)] = inst_22472);

(statearr_22509_22535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (10))){
var inst_22491 = (state_22495[(2)]);
var state_22495__$1 = state_22495;
var statearr_22510_22536 = state_22495__$1;
(statearr_22510_22536[(2)] = inst_22491);

(statearr_22510_22536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (8))){
var inst_22472 = (state_22495[(7)]);
var inst_22482 = cljs.core.next.call(null,inst_22472);
var inst_22472__$1 = inst_22482;
var state_22495__$1 = (function (){var statearr_22511 = state_22495;
(statearr_22511[(7)] = inst_22472__$1);

return statearr_22511;
})();
var statearr_22512_22537 = state_22495__$1;
(statearr_22512_22537[(2)] = null);

(statearr_22512_22537[(1)] = (2));


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
});})(c__20574__auto__))
;
return ((function (switch__20553__auto__,c__20574__auto__){
return (function() {
var cljs$core$async$state_machine__20554__auto__ = null;
var cljs$core$async$state_machine__20554__auto____0 = (function (){
var statearr_22516 = [null,null,null,null,null,null,null,null];
(statearr_22516[(0)] = cljs$core$async$state_machine__20554__auto__);

(statearr_22516[(1)] = (1));

return statearr_22516;
});
var cljs$core$async$state_machine__20554__auto____1 = (function (state_22495){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_22495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e22517){if((e22517 instanceof Object)){
var ex__20557__auto__ = e22517;
var statearr_22518_22538 = state_22495;
(statearr_22518_22538[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22539 = state_22495;
state_22495 = G__22539;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$state_machine__20554__auto__ = function(state_22495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20554__auto____1.call(this,state_22495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20554__auto____0;
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20554__auto____1;
return cljs$core$async$state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto__))
})();
var state__20576__auto__ = (function (){var statearr_22519 = f__20575__auto__.call(null);
(statearr_22519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto__);

return statearr_22519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto__))
);

return c__20574__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19122__auto__ = (((_ == null))?null:_);
var m__19123__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,_);
} else {
var m__19123__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19123__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,ch);
} else {
var m__19123__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m);
} else {
var m__19123__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22761 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22761 = (function (mult,ch,cs,meta22762){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22762 = meta22762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22763,meta22762__$1){
var self__ = this;
var _22763__$1 = this;
return (new cljs.core.async.t_cljs$core$async22761(self__.mult,self__.ch,self__.cs,meta22762__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22763){
var self__ = this;
var _22763__$1 = this;
return self__.meta22762;
});})(cs))
;

cljs.core.async.t_cljs$core$async22761.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22761.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22761.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22761.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22761.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22761.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22761.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22762","meta22762",-481176738,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22761.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22761";

cljs.core.async.t_cljs$core$async22761.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async22761");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22761 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22761(mult__$1,ch__$1,cs__$1,meta22762){
return (new cljs.core.async.t_cljs$core$async22761(mult__$1,ch__$1,cs__$1,meta22762));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22761(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20574__auto___22982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto___22982,cs,m,dchan,dctr,done){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto___22982,cs,m,dchan,dctr,done){
return (function (state_22894){
var state_val_22895 = (state_22894[(1)]);
if((state_val_22895 === (7))){
var inst_22890 = (state_22894[(2)]);
var state_22894__$1 = state_22894;
var statearr_22896_22983 = state_22894__$1;
(statearr_22896_22983[(2)] = inst_22890);

(statearr_22896_22983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (20))){
var inst_22795 = (state_22894[(7)]);
var inst_22805 = cljs.core.first.call(null,inst_22795);
var inst_22806 = cljs.core.nth.call(null,inst_22805,(0),null);
var inst_22807 = cljs.core.nth.call(null,inst_22805,(1),null);
var state_22894__$1 = (function (){var statearr_22897 = state_22894;
(statearr_22897[(8)] = inst_22806);

return statearr_22897;
})();
if(cljs.core.truth_(inst_22807)){
var statearr_22898_22984 = state_22894__$1;
(statearr_22898_22984[(1)] = (22));

} else {
var statearr_22899_22985 = state_22894__$1;
(statearr_22899_22985[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (27))){
var inst_22766 = (state_22894[(9)]);
var inst_22842 = (state_22894[(10)]);
var inst_22837 = (state_22894[(11)]);
var inst_22835 = (state_22894[(12)]);
var inst_22842__$1 = cljs.core._nth.call(null,inst_22835,inst_22837);
var inst_22843 = cljs.core.async.put_BANG_.call(null,inst_22842__$1,inst_22766,done);
var state_22894__$1 = (function (){var statearr_22900 = state_22894;
(statearr_22900[(10)] = inst_22842__$1);

return statearr_22900;
})();
if(cljs.core.truth_(inst_22843)){
var statearr_22901_22986 = state_22894__$1;
(statearr_22901_22986[(1)] = (30));

} else {
var statearr_22902_22987 = state_22894__$1;
(statearr_22902_22987[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (1))){
var state_22894__$1 = state_22894;
var statearr_22903_22988 = state_22894__$1;
(statearr_22903_22988[(2)] = null);

(statearr_22903_22988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (24))){
var inst_22795 = (state_22894[(7)]);
var inst_22812 = (state_22894[(2)]);
var inst_22813 = cljs.core.next.call(null,inst_22795);
var inst_22775 = inst_22813;
var inst_22776 = null;
var inst_22777 = (0);
var inst_22778 = (0);
var state_22894__$1 = (function (){var statearr_22904 = state_22894;
(statearr_22904[(13)] = inst_22775);

(statearr_22904[(14)] = inst_22777);

(statearr_22904[(15)] = inst_22812);

(statearr_22904[(16)] = inst_22778);

(statearr_22904[(17)] = inst_22776);

return statearr_22904;
})();
var statearr_22905_22989 = state_22894__$1;
(statearr_22905_22989[(2)] = null);

(statearr_22905_22989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (39))){
var state_22894__$1 = state_22894;
var statearr_22909_22990 = state_22894__$1;
(statearr_22909_22990[(2)] = null);

(statearr_22909_22990[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (4))){
var inst_22766 = (state_22894[(9)]);
var inst_22766__$1 = (state_22894[(2)]);
var inst_22767 = (inst_22766__$1 == null);
var state_22894__$1 = (function (){var statearr_22910 = state_22894;
(statearr_22910[(9)] = inst_22766__$1);

return statearr_22910;
})();
if(cljs.core.truth_(inst_22767)){
var statearr_22911_22991 = state_22894__$1;
(statearr_22911_22991[(1)] = (5));

} else {
var statearr_22912_22992 = state_22894__$1;
(statearr_22912_22992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (15))){
var inst_22775 = (state_22894[(13)]);
var inst_22777 = (state_22894[(14)]);
var inst_22778 = (state_22894[(16)]);
var inst_22776 = (state_22894[(17)]);
var inst_22791 = (state_22894[(2)]);
var inst_22792 = (inst_22778 + (1));
var tmp22906 = inst_22775;
var tmp22907 = inst_22777;
var tmp22908 = inst_22776;
var inst_22775__$1 = tmp22906;
var inst_22776__$1 = tmp22908;
var inst_22777__$1 = tmp22907;
var inst_22778__$1 = inst_22792;
var state_22894__$1 = (function (){var statearr_22913 = state_22894;
(statearr_22913[(13)] = inst_22775__$1);

(statearr_22913[(14)] = inst_22777__$1);

(statearr_22913[(18)] = inst_22791);

(statearr_22913[(16)] = inst_22778__$1);

(statearr_22913[(17)] = inst_22776__$1);

return statearr_22913;
})();
var statearr_22914_22993 = state_22894__$1;
(statearr_22914_22993[(2)] = null);

(statearr_22914_22993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (21))){
var inst_22816 = (state_22894[(2)]);
var state_22894__$1 = state_22894;
var statearr_22918_22994 = state_22894__$1;
(statearr_22918_22994[(2)] = inst_22816);

(statearr_22918_22994[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (31))){
var inst_22842 = (state_22894[(10)]);
var inst_22846 = done.call(null,null);
var inst_22847 = cljs.core.async.untap_STAR_.call(null,m,inst_22842);
var state_22894__$1 = (function (){var statearr_22919 = state_22894;
(statearr_22919[(19)] = inst_22846);

return statearr_22919;
})();
var statearr_22920_22995 = state_22894__$1;
(statearr_22920_22995[(2)] = inst_22847);

(statearr_22920_22995[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (32))){
var inst_22836 = (state_22894[(20)]);
var inst_22837 = (state_22894[(11)]);
var inst_22834 = (state_22894[(21)]);
var inst_22835 = (state_22894[(12)]);
var inst_22849 = (state_22894[(2)]);
var inst_22850 = (inst_22837 + (1));
var tmp22915 = inst_22836;
var tmp22916 = inst_22834;
var tmp22917 = inst_22835;
var inst_22834__$1 = tmp22916;
var inst_22835__$1 = tmp22917;
var inst_22836__$1 = tmp22915;
var inst_22837__$1 = inst_22850;
var state_22894__$1 = (function (){var statearr_22921 = state_22894;
(statearr_22921[(20)] = inst_22836__$1);

(statearr_22921[(11)] = inst_22837__$1);

(statearr_22921[(21)] = inst_22834__$1);

(statearr_22921[(12)] = inst_22835__$1);

(statearr_22921[(22)] = inst_22849);

return statearr_22921;
})();
var statearr_22922_22996 = state_22894__$1;
(statearr_22922_22996[(2)] = null);

(statearr_22922_22996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (40))){
var inst_22862 = (state_22894[(23)]);
var inst_22866 = done.call(null,null);
var inst_22867 = cljs.core.async.untap_STAR_.call(null,m,inst_22862);
var state_22894__$1 = (function (){var statearr_22923 = state_22894;
(statearr_22923[(24)] = inst_22866);

return statearr_22923;
})();
var statearr_22924_22997 = state_22894__$1;
(statearr_22924_22997[(2)] = inst_22867);

(statearr_22924_22997[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (33))){
var inst_22853 = (state_22894[(25)]);
var inst_22855 = cljs.core.chunked_seq_QMARK_.call(null,inst_22853);
var state_22894__$1 = state_22894;
if(inst_22855){
var statearr_22925_22998 = state_22894__$1;
(statearr_22925_22998[(1)] = (36));

} else {
var statearr_22926_22999 = state_22894__$1;
(statearr_22926_22999[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (13))){
var inst_22785 = (state_22894[(26)]);
var inst_22788 = cljs.core.async.close_BANG_.call(null,inst_22785);
var state_22894__$1 = state_22894;
var statearr_22927_23000 = state_22894__$1;
(statearr_22927_23000[(2)] = inst_22788);

(statearr_22927_23000[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (22))){
var inst_22806 = (state_22894[(8)]);
var inst_22809 = cljs.core.async.close_BANG_.call(null,inst_22806);
var state_22894__$1 = state_22894;
var statearr_22928_23001 = state_22894__$1;
(statearr_22928_23001[(2)] = inst_22809);

(statearr_22928_23001[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (36))){
var inst_22853 = (state_22894[(25)]);
var inst_22857 = cljs.core.chunk_first.call(null,inst_22853);
var inst_22858 = cljs.core.chunk_rest.call(null,inst_22853);
var inst_22859 = cljs.core.count.call(null,inst_22857);
var inst_22834 = inst_22858;
var inst_22835 = inst_22857;
var inst_22836 = inst_22859;
var inst_22837 = (0);
var state_22894__$1 = (function (){var statearr_22929 = state_22894;
(statearr_22929[(20)] = inst_22836);

(statearr_22929[(11)] = inst_22837);

(statearr_22929[(21)] = inst_22834);

(statearr_22929[(12)] = inst_22835);

return statearr_22929;
})();
var statearr_22930_23002 = state_22894__$1;
(statearr_22930_23002[(2)] = null);

(statearr_22930_23002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (41))){
var inst_22853 = (state_22894[(25)]);
var inst_22869 = (state_22894[(2)]);
var inst_22870 = cljs.core.next.call(null,inst_22853);
var inst_22834 = inst_22870;
var inst_22835 = null;
var inst_22836 = (0);
var inst_22837 = (0);
var state_22894__$1 = (function (){var statearr_22931 = state_22894;
(statearr_22931[(27)] = inst_22869);

(statearr_22931[(20)] = inst_22836);

(statearr_22931[(11)] = inst_22837);

(statearr_22931[(21)] = inst_22834);

(statearr_22931[(12)] = inst_22835);

return statearr_22931;
})();
var statearr_22932_23003 = state_22894__$1;
(statearr_22932_23003[(2)] = null);

(statearr_22932_23003[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (43))){
var state_22894__$1 = state_22894;
var statearr_22933_23004 = state_22894__$1;
(statearr_22933_23004[(2)] = null);

(statearr_22933_23004[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (29))){
var inst_22878 = (state_22894[(2)]);
var state_22894__$1 = state_22894;
var statearr_22934_23005 = state_22894__$1;
(statearr_22934_23005[(2)] = inst_22878);

(statearr_22934_23005[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (44))){
var inst_22887 = (state_22894[(2)]);
var state_22894__$1 = (function (){var statearr_22935 = state_22894;
(statearr_22935[(28)] = inst_22887);

return statearr_22935;
})();
var statearr_22936_23006 = state_22894__$1;
(statearr_22936_23006[(2)] = null);

(statearr_22936_23006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (6))){
var inst_22826 = (state_22894[(29)]);
var inst_22825 = cljs.core.deref.call(null,cs);
var inst_22826__$1 = cljs.core.keys.call(null,inst_22825);
var inst_22827 = cljs.core.count.call(null,inst_22826__$1);
var inst_22828 = cljs.core.reset_BANG_.call(null,dctr,inst_22827);
var inst_22833 = cljs.core.seq.call(null,inst_22826__$1);
var inst_22834 = inst_22833;
var inst_22835 = null;
var inst_22836 = (0);
var inst_22837 = (0);
var state_22894__$1 = (function (){var statearr_22937 = state_22894;
(statearr_22937[(30)] = inst_22828);

(statearr_22937[(20)] = inst_22836);

(statearr_22937[(11)] = inst_22837);

(statearr_22937[(21)] = inst_22834);

(statearr_22937[(12)] = inst_22835);

(statearr_22937[(29)] = inst_22826__$1);

return statearr_22937;
})();
var statearr_22938_23007 = state_22894__$1;
(statearr_22938_23007[(2)] = null);

(statearr_22938_23007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (28))){
var inst_22853 = (state_22894[(25)]);
var inst_22834 = (state_22894[(21)]);
var inst_22853__$1 = cljs.core.seq.call(null,inst_22834);
var state_22894__$1 = (function (){var statearr_22939 = state_22894;
(statearr_22939[(25)] = inst_22853__$1);

return statearr_22939;
})();
if(inst_22853__$1){
var statearr_22940_23008 = state_22894__$1;
(statearr_22940_23008[(1)] = (33));

} else {
var statearr_22941_23009 = state_22894__$1;
(statearr_22941_23009[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (25))){
var inst_22836 = (state_22894[(20)]);
var inst_22837 = (state_22894[(11)]);
var inst_22839 = (inst_22837 < inst_22836);
var inst_22840 = inst_22839;
var state_22894__$1 = state_22894;
if(cljs.core.truth_(inst_22840)){
var statearr_22942_23010 = state_22894__$1;
(statearr_22942_23010[(1)] = (27));

} else {
var statearr_22943_23011 = state_22894__$1;
(statearr_22943_23011[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (34))){
var state_22894__$1 = state_22894;
var statearr_22944_23012 = state_22894__$1;
(statearr_22944_23012[(2)] = null);

(statearr_22944_23012[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (17))){
var state_22894__$1 = state_22894;
var statearr_22945_23013 = state_22894__$1;
(statearr_22945_23013[(2)] = null);

(statearr_22945_23013[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (3))){
var inst_22892 = (state_22894[(2)]);
var state_22894__$1 = state_22894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22894__$1,inst_22892);
} else {
if((state_val_22895 === (12))){
var inst_22821 = (state_22894[(2)]);
var state_22894__$1 = state_22894;
var statearr_22946_23014 = state_22894__$1;
(statearr_22946_23014[(2)] = inst_22821);

(statearr_22946_23014[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (2))){
var state_22894__$1 = state_22894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22894__$1,(4),ch);
} else {
if((state_val_22895 === (23))){
var state_22894__$1 = state_22894;
var statearr_22947_23015 = state_22894__$1;
(statearr_22947_23015[(2)] = null);

(statearr_22947_23015[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (35))){
var inst_22876 = (state_22894[(2)]);
var state_22894__$1 = state_22894;
var statearr_22948_23016 = state_22894__$1;
(statearr_22948_23016[(2)] = inst_22876);

(statearr_22948_23016[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (19))){
var inst_22795 = (state_22894[(7)]);
var inst_22799 = cljs.core.chunk_first.call(null,inst_22795);
var inst_22800 = cljs.core.chunk_rest.call(null,inst_22795);
var inst_22801 = cljs.core.count.call(null,inst_22799);
var inst_22775 = inst_22800;
var inst_22776 = inst_22799;
var inst_22777 = inst_22801;
var inst_22778 = (0);
var state_22894__$1 = (function (){var statearr_22949 = state_22894;
(statearr_22949[(13)] = inst_22775);

(statearr_22949[(14)] = inst_22777);

(statearr_22949[(16)] = inst_22778);

(statearr_22949[(17)] = inst_22776);

return statearr_22949;
})();
var statearr_22950_23017 = state_22894__$1;
(statearr_22950_23017[(2)] = null);

(statearr_22950_23017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (11))){
var inst_22795 = (state_22894[(7)]);
var inst_22775 = (state_22894[(13)]);
var inst_22795__$1 = cljs.core.seq.call(null,inst_22775);
var state_22894__$1 = (function (){var statearr_22951 = state_22894;
(statearr_22951[(7)] = inst_22795__$1);

return statearr_22951;
})();
if(inst_22795__$1){
var statearr_22952_23018 = state_22894__$1;
(statearr_22952_23018[(1)] = (16));

} else {
var statearr_22953_23019 = state_22894__$1;
(statearr_22953_23019[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (9))){
var inst_22823 = (state_22894[(2)]);
var state_22894__$1 = state_22894;
var statearr_22954_23020 = state_22894__$1;
(statearr_22954_23020[(2)] = inst_22823);

(statearr_22954_23020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (5))){
var inst_22773 = cljs.core.deref.call(null,cs);
var inst_22774 = cljs.core.seq.call(null,inst_22773);
var inst_22775 = inst_22774;
var inst_22776 = null;
var inst_22777 = (0);
var inst_22778 = (0);
var state_22894__$1 = (function (){var statearr_22955 = state_22894;
(statearr_22955[(13)] = inst_22775);

(statearr_22955[(14)] = inst_22777);

(statearr_22955[(16)] = inst_22778);

(statearr_22955[(17)] = inst_22776);

return statearr_22955;
})();
var statearr_22956_23021 = state_22894__$1;
(statearr_22956_23021[(2)] = null);

(statearr_22956_23021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (14))){
var state_22894__$1 = state_22894;
var statearr_22957_23022 = state_22894__$1;
(statearr_22957_23022[(2)] = null);

(statearr_22957_23022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (45))){
var inst_22884 = (state_22894[(2)]);
var state_22894__$1 = state_22894;
var statearr_22958_23023 = state_22894__$1;
(statearr_22958_23023[(2)] = inst_22884);

(statearr_22958_23023[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (26))){
var inst_22826 = (state_22894[(29)]);
var inst_22880 = (state_22894[(2)]);
var inst_22881 = cljs.core.seq.call(null,inst_22826);
var state_22894__$1 = (function (){var statearr_22959 = state_22894;
(statearr_22959[(31)] = inst_22880);

return statearr_22959;
})();
if(inst_22881){
var statearr_22960_23024 = state_22894__$1;
(statearr_22960_23024[(1)] = (42));

} else {
var statearr_22961_23025 = state_22894__$1;
(statearr_22961_23025[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (16))){
var inst_22795 = (state_22894[(7)]);
var inst_22797 = cljs.core.chunked_seq_QMARK_.call(null,inst_22795);
var state_22894__$1 = state_22894;
if(inst_22797){
var statearr_22962_23026 = state_22894__$1;
(statearr_22962_23026[(1)] = (19));

} else {
var statearr_22963_23027 = state_22894__$1;
(statearr_22963_23027[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (38))){
var inst_22873 = (state_22894[(2)]);
var state_22894__$1 = state_22894;
var statearr_22964_23028 = state_22894__$1;
(statearr_22964_23028[(2)] = inst_22873);

(statearr_22964_23028[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (30))){
var state_22894__$1 = state_22894;
var statearr_22965_23029 = state_22894__$1;
(statearr_22965_23029[(2)] = null);

(statearr_22965_23029[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (10))){
var inst_22778 = (state_22894[(16)]);
var inst_22776 = (state_22894[(17)]);
var inst_22784 = cljs.core._nth.call(null,inst_22776,inst_22778);
var inst_22785 = cljs.core.nth.call(null,inst_22784,(0),null);
var inst_22786 = cljs.core.nth.call(null,inst_22784,(1),null);
var state_22894__$1 = (function (){var statearr_22966 = state_22894;
(statearr_22966[(26)] = inst_22785);

return statearr_22966;
})();
if(cljs.core.truth_(inst_22786)){
var statearr_22967_23030 = state_22894__$1;
(statearr_22967_23030[(1)] = (13));

} else {
var statearr_22968_23031 = state_22894__$1;
(statearr_22968_23031[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (18))){
var inst_22819 = (state_22894[(2)]);
var state_22894__$1 = state_22894;
var statearr_22969_23032 = state_22894__$1;
(statearr_22969_23032[(2)] = inst_22819);

(statearr_22969_23032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (42))){
var state_22894__$1 = state_22894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22894__$1,(45),dchan);
} else {
if((state_val_22895 === (37))){
var inst_22853 = (state_22894[(25)]);
var inst_22766 = (state_22894[(9)]);
var inst_22862 = (state_22894[(23)]);
var inst_22862__$1 = cljs.core.first.call(null,inst_22853);
var inst_22863 = cljs.core.async.put_BANG_.call(null,inst_22862__$1,inst_22766,done);
var state_22894__$1 = (function (){var statearr_22970 = state_22894;
(statearr_22970[(23)] = inst_22862__$1);

return statearr_22970;
})();
if(cljs.core.truth_(inst_22863)){
var statearr_22971_23033 = state_22894__$1;
(statearr_22971_23033[(1)] = (39));

} else {
var statearr_22972_23034 = state_22894__$1;
(statearr_22972_23034[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22895 === (8))){
var inst_22777 = (state_22894[(14)]);
var inst_22778 = (state_22894[(16)]);
var inst_22780 = (inst_22778 < inst_22777);
var inst_22781 = inst_22780;
var state_22894__$1 = state_22894;
if(cljs.core.truth_(inst_22781)){
var statearr_22973_23035 = state_22894__$1;
(statearr_22973_23035[(1)] = (10));

} else {
var statearr_22974_23036 = state_22894__$1;
(statearr_22974_23036[(1)] = (11));

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
});})(c__20574__auto___22982,cs,m,dchan,dctr,done))
;
return ((function (switch__20553__auto__,c__20574__auto___22982,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20554__auto__ = null;
var cljs$core$async$mult_$_state_machine__20554__auto____0 = (function (){
var statearr_22978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22978[(0)] = cljs$core$async$mult_$_state_machine__20554__auto__);

(statearr_22978[(1)] = (1));

return statearr_22978;
});
var cljs$core$async$mult_$_state_machine__20554__auto____1 = (function (state_22894){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_22894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e22979){if((e22979 instanceof Object)){
var ex__20557__auto__ = e22979;
var statearr_22980_23037 = state_22894;
(statearr_22980_23037[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23038 = state_22894;
state_22894 = G__23038;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20554__auto__ = function(state_22894){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20554__auto____1.call(this,state_22894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20554__auto____0;
cljs$core$async$mult_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20554__auto____1;
return cljs$core$async$mult_$_state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto___22982,cs,m,dchan,dctr,done))
})();
var state__20576__auto__ = (function (){var statearr_22981 = f__20575__auto__.call(null);
(statearr_22981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto___22982);

return statearr_22981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto___22982,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23039 = [];
var len__19529__auto___23042 = arguments.length;
var i__19530__auto___23043 = (0);
while(true){
if((i__19530__auto___23043 < len__19529__auto___23042)){
args23039.push((arguments[i__19530__auto___23043]));

var G__23044 = (i__19530__auto___23043 + (1));
i__19530__auto___23043 = G__23044;
continue;
} else {
}
break;
}

var G__23041 = args23039.length;
switch (G__23041) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23039.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,ch);
} else {
var m__19123__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,ch);
} else {
var m__19123__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m);
} else {
var m__19123__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,state_map);
} else {
var m__19123__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,mode);
} else {
var m__19123__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19536__auto__ = [];
var len__19529__auto___23056 = arguments.length;
var i__19530__auto___23057 = (0);
while(true){
if((i__19530__auto___23057 < len__19529__auto___23056)){
args__19536__auto__.push((arguments[i__19530__auto___23057]));

var G__23058 = (i__19530__auto___23057 + (1));
i__19530__auto___23057 = G__23058;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((3) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19537__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23050){
var map__23051 = p__23050;
var map__23051__$1 = ((((!((map__23051 == null)))?((((map__23051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23051):map__23051);
var opts = map__23051__$1;
var statearr_23053_23059 = state;
(statearr_23053_23059[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23051,map__23051__$1,opts){
return (function (val){
var statearr_23054_23060 = state;
(statearr_23054_23060[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23051,map__23051__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23055_23061 = state;
(statearr_23055_23061[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23046){
var G__23047 = cljs.core.first.call(null,seq23046);
var seq23046__$1 = cljs.core.next.call(null,seq23046);
var G__23048 = cljs.core.first.call(null,seq23046__$1);
var seq23046__$2 = cljs.core.next.call(null,seq23046__$1);
var G__23049 = cljs.core.first.call(null,seq23046__$2);
var seq23046__$3 = cljs.core.next.call(null,seq23046__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23047,G__23048,G__23049,seq23046__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23225 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23225 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23226){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23226 = meta23226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23227,meta23226__$1){
var self__ = this;
var _23227__$1 = this;
return (new cljs.core.async.t_cljs$core$async23225(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23226__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23225.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23227){
var self__ = this;
var _23227__$1 = this;
return self__.meta23226;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23225.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23225.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23225.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23225.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23225.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23225.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23225.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23225.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23225.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23226","meta23226",618019040,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23225.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23225.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23225";

cljs.core.async.t_cljs$core$async23225.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23225");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23225 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23225(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23226){
return (new cljs.core.async.t_cljs$core$async23225(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23226));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23225(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20574__auto___23388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto___23388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto___23388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23325){
var state_val_23326 = (state_23325[(1)]);
if((state_val_23326 === (7))){
var inst_23243 = (state_23325[(2)]);
var state_23325__$1 = state_23325;
var statearr_23327_23389 = state_23325__$1;
(statearr_23327_23389[(2)] = inst_23243);

(statearr_23327_23389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (20))){
var inst_23255 = (state_23325[(7)]);
var state_23325__$1 = state_23325;
var statearr_23328_23390 = state_23325__$1;
(statearr_23328_23390[(2)] = inst_23255);

(statearr_23328_23390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (27))){
var state_23325__$1 = state_23325;
var statearr_23329_23391 = state_23325__$1;
(statearr_23329_23391[(2)] = null);

(statearr_23329_23391[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (1))){
var inst_23231 = (state_23325[(8)]);
var inst_23231__$1 = calc_state.call(null);
var inst_23233 = (inst_23231__$1 == null);
var inst_23234 = cljs.core.not.call(null,inst_23233);
var state_23325__$1 = (function (){var statearr_23330 = state_23325;
(statearr_23330[(8)] = inst_23231__$1);

return statearr_23330;
})();
if(inst_23234){
var statearr_23331_23392 = state_23325__$1;
(statearr_23331_23392[(1)] = (2));

} else {
var statearr_23332_23393 = state_23325__$1;
(statearr_23332_23393[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (24))){
var inst_23285 = (state_23325[(9)]);
var inst_23299 = (state_23325[(10)]);
var inst_23278 = (state_23325[(11)]);
var inst_23299__$1 = inst_23278.call(null,inst_23285);
var state_23325__$1 = (function (){var statearr_23333 = state_23325;
(statearr_23333[(10)] = inst_23299__$1);

return statearr_23333;
})();
if(cljs.core.truth_(inst_23299__$1)){
var statearr_23334_23394 = state_23325__$1;
(statearr_23334_23394[(1)] = (29));

} else {
var statearr_23335_23395 = state_23325__$1;
(statearr_23335_23395[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (4))){
var inst_23246 = (state_23325[(2)]);
var state_23325__$1 = state_23325;
if(cljs.core.truth_(inst_23246)){
var statearr_23336_23396 = state_23325__$1;
(statearr_23336_23396[(1)] = (8));

} else {
var statearr_23337_23397 = state_23325__$1;
(statearr_23337_23397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (15))){
var inst_23272 = (state_23325[(2)]);
var state_23325__$1 = state_23325;
if(cljs.core.truth_(inst_23272)){
var statearr_23338_23398 = state_23325__$1;
(statearr_23338_23398[(1)] = (19));

} else {
var statearr_23339_23399 = state_23325__$1;
(statearr_23339_23399[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (21))){
var inst_23277 = (state_23325[(12)]);
var inst_23277__$1 = (state_23325[(2)]);
var inst_23278 = cljs.core.get.call(null,inst_23277__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23279 = cljs.core.get.call(null,inst_23277__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23280 = cljs.core.get.call(null,inst_23277__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23325__$1 = (function (){var statearr_23340 = state_23325;
(statearr_23340[(12)] = inst_23277__$1);

(statearr_23340[(13)] = inst_23279);

(statearr_23340[(11)] = inst_23278);

return statearr_23340;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23325__$1,(22),inst_23280);
} else {
if((state_val_23326 === (31))){
var inst_23307 = (state_23325[(2)]);
var state_23325__$1 = state_23325;
if(cljs.core.truth_(inst_23307)){
var statearr_23341_23400 = state_23325__$1;
(statearr_23341_23400[(1)] = (32));

} else {
var statearr_23342_23401 = state_23325__$1;
(statearr_23342_23401[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (32))){
var inst_23284 = (state_23325[(14)]);
var state_23325__$1 = state_23325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23325__$1,(35),out,inst_23284);
} else {
if((state_val_23326 === (33))){
var inst_23277 = (state_23325[(12)]);
var inst_23255 = inst_23277;
var state_23325__$1 = (function (){var statearr_23343 = state_23325;
(statearr_23343[(7)] = inst_23255);

return statearr_23343;
})();
var statearr_23344_23402 = state_23325__$1;
(statearr_23344_23402[(2)] = null);

(statearr_23344_23402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (13))){
var inst_23255 = (state_23325[(7)]);
var inst_23262 = inst_23255.cljs$lang$protocol_mask$partition0$;
var inst_23263 = (inst_23262 & (64));
var inst_23264 = inst_23255.cljs$core$ISeq$;
var inst_23265 = (inst_23263) || (inst_23264);
var state_23325__$1 = state_23325;
if(cljs.core.truth_(inst_23265)){
var statearr_23345_23403 = state_23325__$1;
(statearr_23345_23403[(1)] = (16));

} else {
var statearr_23346_23404 = state_23325__$1;
(statearr_23346_23404[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (22))){
var inst_23285 = (state_23325[(9)]);
var inst_23284 = (state_23325[(14)]);
var inst_23283 = (state_23325[(2)]);
var inst_23284__$1 = cljs.core.nth.call(null,inst_23283,(0),null);
var inst_23285__$1 = cljs.core.nth.call(null,inst_23283,(1),null);
var inst_23286 = (inst_23284__$1 == null);
var inst_23287 = cljs.core._EQ_.call(null,inst_23285__$1,change);
var inst_23288 = (inst_23286) || (inst_23287);
var state_23325__$1 = (function (){var statearr_23347 = state_23325;
(statearr_23347[(9)] = inst_23285__$1);

(statearr_23347[(14)] = inst_23284__$1);

return statearr_23347;
})();
if(cljs.core.truth_(inst_23288)){
var statearr_23348_23405 = state_23325__$1;
(statearr_23348_23405[(1)] = (23));

} else {
var statearr_23349_23406 = state_23325__$1;
(statearr_23349_23406[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (36))){
var inst_23277 = (state_23325[(12)]);
var inst_23255 = inst_23277;
var state_23325__$1 = (function (){var statearr_23350 = state_23325;
(statearr_23350[(7)] = inst_23255);

return statearr_23350;
})();
var statearr_23351_23407 = state_23325__$1;
(statearr_23351_23407[(2)] = null);

(statearr_23351_23407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (29))){
var inst_23299 = (state_23325[(10)]);
var state_23325__$1 = state_23325;
var statearr_23352_23408 = state_23325__$1;
(statearr_23352_23408[(2)] = inst_23299);

(statearr_23352_23408[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (6))){
var state_23325__$1 = state_23325;
var statearr_23353_23409 = state_23325__$1;
(statearr_23353_23409[(2)] = false);

(statearr_23353_23409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (28))){
var inst_23295 = (state_23325[(2)]);
var inst_23296 = calc_state.call(null);
var inst_23255 = inst_23296;
var state_23325__$1 = (function (){var statearr_23354 = state_23325;
(statearr_23354[(7)] = inst_23255);

(statearr_23354[(15)] = inst_23295);

return statearr_23354;
})();
var statearr_23355_23410 = state_23325__$1;
(statearr_23355_23410[(2)] = null);

(statearr_23355_23410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (25))){
var inst_23321 = (state_23325[(2)]);
var state_23325__$1 = state_23325;
var statearr_23356_23411 = state_23325__$1;
(statearr_23356_23411[(2)] = inst_23321);

(statearr_23356_23411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (34))){
var inst_23319 = (state_23325[(2)]);
var state_23325__$1 = state_23325;
var statearr_23357_23412 = state_23325__$1;
(statearr_23357_23412[(2)] = inst_23319);

(statearr_23357_23412[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (17))){
var state_23325__$1 = state_23325;
var statearr_23358_23413 = state_23325__$1;
(statearr_23358_23413[(2)] = false);

(statearr_23358_23413[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (3))){
var state_23325__$1 = state_23325;
var statearr_23359_23414 = state_23325__$1;
(statearr_23359_23414[(2)] = false);

(statearr_23359_23414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (12))){
var inst_23323 = (state_23325[(2)]);
var state_23325__$1 = state_23325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23325__$1,inst_23323);
} else {
if((state_val_23326 === (2))){
var inst_23231 = (state_23325[(8)]);
var inst_23236 = inst_23231.cljs$lang$protocol_mask$partition0$;
var inst_23237 = (inst_23236 & (64));
var inst_23238 = inst_23231.cljs$core$ISeq$;
var inst_23239 = (inst_23237) || (inst_23238);
var state_23325__$1 = state_23325;
if(cljs.core.truth_(inst_23239)){
var statearr_23360_23415 = state_23325__$1;
(statearr_23360_23415[(1)] = (5));

} else {
var statearr_23361_23416 = state_23325__$1;
(statearr_23361_23416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (23))){
var inst_23284 = (state_23325[(14)]);
var inst_23290 = (inst_23284 == null);
var state_23325__$1 = state_23325;
if(cljs.core.truth_(inst_23290)){
var statearr_23362_23417 = state_23325__$1;
(statearr_23362_23417[(1)] = (26));

} else {
var statearr_23363_23418 = state_23325__$1;
(statearr_23363_23418[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (35))){
var inst_23310 = (state_23325[(2)]);
var state_23325__$1 = state_23325;
if(cljs.core.truth_(inst_23310)){
var statearr_23364_23419 = state_23325__$1;
(statearr_23364_23419[(1)] = (36));

} else {
var statearr_23365_23420 = state_23325__$1;
(statearr_23365_23420[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (19))){
var inst_23255 = (state_23325[(7)]);
var inst_23274 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23255);
var state_23325__$1 = state_23325;
var statearr_23366_23421 = state_23325__$1;
(statearr_23366_23421[(2)] = inst_23274);

(statearr_23366_23421[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (11))){
var inst_23255 = (state_23325[(7)]);
var inst_23259 = (inst_23255 == null);
var inst_23260 = cljs.core.not.call(null,inst_23259);
var state_23325__$1 = state_23325;
if(inst_23260){
var statearr_23367_23422 = state_23325__$1;
(statearr_23367_23422[(1)] = (13));

} else {
var statearr_23368_23423 = state_23325__$1;
(statearr_23368_23423[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (9))){
var inst_23231 = (state_23325[(8)]);
var state_23325__$1 = state_23325;
var statearr_23369_23424 = state_23325__$1;
(statearr_23369_23424[(2)] = inst_23231);

(statearr_23369_23424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (5))){
var state_23325__$1 = state_23325;
var statearr_23370_23425 = state_23325__$1;
(statearr_23370_23425[(2)] = true);

(statearr_23370_23425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (14))){
var state_23325__$1 = state_23325;
var statearr_23371_23426 = state_23325__$1;
(statearr_23371_23426[(2)] = false);

(statearr_23371_23426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (26))){
var inst_23285 = (state_23325[(9)]);
var inst_23292 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23285);
var state_23325__$1 = state_23325;
var statearr_23372_23427 = state_23325__$1;
(statearr_23372_23427[(2)] = inst_23292);

(statearr_23372_23427[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (16))){
var state_23325__$1 = state_23325;
var statearr_23373_23428 = state_23325__$1;
(statearr_23373_23428[(2)] = true);

(statearr_23373_23428[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (38))){
var inst_23315 = (state_23325[(2)]);
var state_23325__$1 = state_23325;
var statearr_23374_23429 = state_23325__$1;
(statearr_23374_23429[(2)] = inst_23315);

(statearr_23374_23429[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (30))){
var inst_23285 = (state_23325[(9)]);
var inst_23279 = (state_23325[(13)]);
var inst_23278 = (state_23325[(11)]);
var inst_23302 = cljs.core.empty_QMARK_.call(null,inst_23278);
var inst_23303 = inst_23279.call(null,inst_23285);
var inst_23304 = cljs.core.not.call(null,inst_23303);
var inst_23305 = (inst_23302) && (inst_23304);
var state_23325__$1 = state_23325;
var statearr_23375_23430 = state_23325__$1;
(statearr_23375_23430[(2)] = inst_23305);

(statearr_23375_23430[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (10))){
var inst_23231 = (state_23325[(8)]);
var inst_23251 = (state_23325[(2)]);
var inst_23252 = cljs.core.get.call(null,inst_23251,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23253 = cljs.core.get.call(null,inst_23251,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23254 = cljs.core.get.call(null,inst_23251,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23255 = inst_23231;
var state_23325__$1 = (function (){var statearr_23376 = state_23325;
(statearr_23376[(7)] = inst_23255);

(statearr_23376[(16)] = inst_23252);

(statearr_23376[(17)] = inst_23254);

(statearr_23376[(18)] = inst_23253);

return statearr_23376;
})();
var statearr_23377_23431 = state_23325__$1;
(statearr_23377_23431[(2)] = null);

(statearr_23377_23431[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (18))){
var inst_23269 = (state_23325[(2)]);
var state_23325__$1 = state_23325;
var statearr_23378_23432 = state_23325__$1;
(statearr_23378_23432[(2)] = inst_23269);

(statearr_23378_23432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (37))){
var state_23325__$1 = state_23325;
var statearr_23379_23433 = state_23325__$1;
(statearr_23379_23433[(2)] = null);

(statearr_23379_23433[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (8))){
var inst_23231 = (state_23325[(8)]);
var inst_23248 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23231);
var state_23325__$1 = state_23325;
var statearr_23380_23434 = state_23325__$1;
(statearr_23380_23434[(2)] = inst_23248);

(statearr_23380_23434[(1)] = (10));


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
});})(c__20574__auto___23388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20553__auto__,c__20574__auto___23388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20554__auto__ = null;
var cljs$core$async$mix_$_state_machine__20554__auto____0 = (function (){
var statearr_23384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23384[(0)] = cljs$core$async$mix_$_state_machine__20554__auto__);

(statearr_23384[(1)] = (1));

return statearr_23384;
});
var cljs$core$async$mix_$_state_machine__20554__auto____1 = (function (state_23325){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_23325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e23385){if((e23385 instanceof Object)){
var ex__20557__auto__ = e23385;
var statearr_23386_23435 = state_23325;
(statearr_23386_23435[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23436 = state_23325;
state_23325 = G__23436;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20554__auto__ = function(state_23325){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20554__auto____1.call(this,state_23325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20554__auto____0;
cljs$core$async$mix_$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20554__auto____1;
return cljs$core$async$mix_$_state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto___23388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20576__auto__ = (function (){var statearr_23387 = f__20575__auto__.call(null);
(statearr_23387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto___23388);

return statearr_23387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto___23388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19122__auto__ = (((p == null))?null:p);
var m__19123__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19123__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19122__auto__ = (((p == null))?null:p);
var m__19123__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,p,v,ch);
} else {
var m__19123__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23437 = [];
var len__19529__auto___23440 = arguments.length;
var i__19530__auto___23441 = (0);
while(true){
if((i__19530__auto___23441 < len__19529__auto___23440)){
args23437.push((arguments[i__19530__auto___23441]));

var G__23442 = (i__19530__auto___23441 + (1));
i__19530__auto___23441 = G__23442;
continue;
} else {
}
break;
}

var G__23439 = args23437.length;
switch (G__23439) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23437.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19122__auto__ = (((p == null))?null:p);
var m__19123__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,p);
} else {
var m__19123__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19122__auto__ = (((p == null))?null:p);
var m__19123__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,p,v);
} else {
var m__19123__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args23445 = [];
var len__19529__auto___23570 = arguments.length;
var i__19530__auto___23571 = (0);
while(true){
if((i__19530__auto___23571 < len__19529__auto___23570)){
args23445.push((arguments[i__19530__auto___23571]));

var G__23572 = (i__19530__auto___23571 + (1));
i__19530__auto___23571 = G__23572;
continue;
} else {
}
break;
}

var G__23447 = args23445.length;
switch (G__23447) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23445.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18459__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18459__auto__,mults){
return (function (p1__23444_SHARP_){
if(cljs.core.truth_(p1__23444_SHARP_.call(null,topic))){
return p1__23444_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23444_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18459__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23448 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23448 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23449){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23449 = meta23449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23450,meta23449__$1){
var self__ = this;
var _23450__$1 = this;
return (new cljs.core.async.t_cljs$core$async23448(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23449__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23448.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23450){
var self__ = this;
var _23450__$1 = this;
return self__.meta23449;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23448.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23448.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23448.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23448.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23448.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23448.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23448.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23448.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23449","meta23449",-1357214982,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23448.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23448";

cljs.core.async.t_cljs$core$async23448.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23448");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23448 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23448(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23449){
return (new cljs.core.async.t_cljs$core$async23448(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23449));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23448(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20574__auto___23574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto___23574,mults,ensure_mult,p){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto___23574,mults,ensure_mult,p){
return (function (state_23522){
var state_val_23523 = (state_23522[(1)]);
if((state_val_23523 === (7))){
var inst_23518 = (state_23522[(2)]);
var state_23522__$1 = state_23522;
var statearr_23524_23575 = state_23522__$1;
(statearr_23524_23575[(2)] = inst_23518);

(statearr_23524_23575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (20))){
var state_23522__$1 = state_23522;
var statearr_23525_23576 = state_23522__$1;
(statearr_23525_23576[(2)] = null);

(statearr_23525_23576[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (1))){
var state_23522__$1 = state_23522;
var statearr_23526_23577 = state_23522__$1;
(statearr_23526_23577[(2)] = null);

(statearr_23526_23577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (24))){
var inst_23501 = (state_23522[(7)]);
var inst_23510 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23501);
var state_23522__$1 = state_23522;
var statearr_23527_23578 = state_23522__$1;
(statearr_23527_23578[(2)] = inst_23510);

(statearr_23527_23578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (4))){
var inst_23453 = (state_23522[(8)]);
var inst_23453__$1 = (state_23522[(2)]);
var inst_23454 = (inst_23453__$1 == null);
var state_23522__$1 = (function (){var statearr_23528 = state_23522;
(statearr_23528[(8)] = inst_23453__$1);

return statearr_23528;
})();
if(cljs.core.truth_(inst_23454)){
var statearr_23529_23579 = state_23522__$1;
(statearr_23529_23579[(1)] = (5));

} else {
var statearr_23530_23580 = state_23522__$1;
(statearr_23530_23580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (15))){
var inst_23495 = (state_23522[(2)]);
var state_23522__$1 = state_23522;
var statearr_23531_23581 = state_23522__$1;
(statearr_23531_23581[(2)] = inst_23495);

(statearr_23531_23581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (21))){
var inst_23515 = (state_23522[(2)]);
var state_23522__$1 = (function (){var statearr_23532 = state_23522;
(statearr_23532[(9)] = inst_23515);

return statearr_23532;
})();
var statearr_23533_23582 = state_23522__$1;
(statearr_23533_23582[(2)] = null);

(statearr_23533_23582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (13))){
var inst_23477 = (state_23522[(10)]);
var inst_23479 = cljs.core.chunked_seq_QMARK_.call(null,inst_23477);
var state_23522__$1 = state_23522;
if(inst_23479){
var statearr_23534_23583 = state_23522__$1;
(statearr_23534_23583[(1)] = (16));

} else {
var statearr_23535_23584 = state_23522__$1;
(statearr_23535_23584[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (22))){
var inst_23507 = (state_23522[(2)]);
var state_23522__$1 = state_23522;
if(cljs.core.truth_(inst_23507)){
var statearr_23536_23585 = state_23522__$1;
(statearr_23536_23585[(1)] = (23));

} else {
var statearr_23537_23586 = state_23522__$1;
(statearr_23537_23586[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (6))){
var inst_23503 = (state_23522[(11)]);
var inst_23501 = (state_23522[(7)]);
var inst_23453 = (state_23522[(8)]);
var inst_23501__$1 = topic_fn.call(null,inst_23453);
var inst_23502 = cljs.core.deref.call(null,mults);
var inst_23503__$1 = cljs.core.get.call(null,inst_23502,inst_23501__$1);
var state_23522__$1 = (function (){var statearr_23538 = state_23522;
(statearr_23538[(11)] = inst_23503__$1);

(statearr_23538[(7)] = inst_23501__$1);

return statearr_23538;
})();
if(cljs.core.truth_(inst_23503__$1)){
var statearr_23539_23587 = state_23522__$1;
(statearr_23539_23587[(1)] = (19));

} else {
var statearr_23540_23588 = state_23522__$1;
(statearr_23540_23588[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (25))){
var inst_23512 = (state_23522[(2)]);
var state_23522__$1 = state_23522;
var statearr_23541_23589 = state_23522__$1;
(statearr_23541_23589[(2)] = inst_23512);

(statearr_23541_23589[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (17))){
var inst_23477 = (state_23522[(10)]);
var inst_23486 = cljs.core.first.call(null,inst_23477);
var inst_23487 = cljs.core.async.muxch_STAR_.call(null,inst_23486);
var inst_23488 = cljs.core.async.close_BANG_.call(null,inst_23487);
var inst_23489 = cljs.core.next.call(null,inst_23477);
var inst_23463 = inst_23489;
var inst_23464 = null;
var inst_23465 = (0);
var inst_23466 = (0);
var state_23522__$1 = (function (){var statearr_23542 = state_23522;
(statearr_23542[(12)] = inst_23488);

(statearr_23542[(13)] = inst_23466);

(statearr_23542[(14)] = inst_23464);

(statearr_23542[(15)] = inst_23463);

(statearr_23542[(16)] = inst_23465);

return statearr_23542;
})();
var statearr_23543_23590 = state_23522__$1;
(statearr_23543_23590[(2)] = null);

(statearr_23543_23590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (3))){
var inst_23520 = (state_23522[(2)]);
var state_23522__$1 = state_23522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23522__$1,inst_23520);
} else {
if((state_val_23523 === (12))){
var inst_23497 = (state_23522[(2)]);
var state_23522__$1 = state_23522;
var statearr_23544_23591 = state_23522__$1;
(statearr_23544_23591[(2)] = inst_23497);

(statearr_23544_23591[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (2))){
var state_23522__$1 = state_23522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23522__$1,(4),ch);
} else {
if((state_val_23523 === (23))){
var state_23522__$1 = state_23522;
var statearr_23545_23592 = state_23522__$1;
(statearr_23545_23592[(2)] = null);

(statearr_23545_23592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (19))){
var inst_23503 = (state_23522[(11)]);
var inst_23453 = (state_23522[(8)]);
var inst_23505 = cljs.core.async.muxch_STAR_.call(null,inst_23503);
var state_23522__$1 = state_23522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23522__$1,(22),inst_23505,inst_23453);
} else {
if((state_val_23523 === (11))){
var inst_23477 = (state_23522[(10)]);
var inst_23463 = (state_23522[(15)]);
var inst_23477__$1 = cljs.core.seq.call(null,inst_23463);
var state_23522__$1 = (function (){var statearr_23546 = state_23522;
(statearr_23546[(10)] = inst_23477__$1);

return statearr_23546;
})();
if(inst_23477__$1){
var statearr_23547_23593 = state_23522__$1;
(statearr_23547_23593[(1)] = (13));

} else {
var statearr_23548_23594 = state_23522__$1;
(statearr_23548_23594[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (9))){
var inst_23499 = (state_23522[(2)]);
var state_23522__$1 = state_23522;
var statearr_23549_23595 = state_23522__$1;
(statearr_23549_23595[(2)] = inst_23499);

(statearr_23549_23595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (5))){
var inst_23460 = cljs.core.deref.call(null,mults);
var inst_23461 = cljs.core.vals.call(null,inst_23460);
var inst_23462 = cljs.core.seq.call(null,inst_23461);
var inst_23463 = inst_23462;
var inst_23464 = null;
var inst_23465 = (0);
var inst_23466 = (0);
var state_23522__$1 = (function (){var statearr_23550 = state_23522;
(statearr_23550[(13)] = inst_23466);

(statearr_23550[(14)] = inst_23464);

(statearr_23550[(15)] = inst_23463);

(statearr_23550[(16)] = inst_23465);

return statearr_23550;
})();
var statearr_23551_23596 = state_23522__$1;
(statearr_23551_23596[(2)] = null);

(statearr_23551_23596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (14))){
var state_23522__$1 = state_23522;
var statearr_23555_23597 = state_23522__$1;
(statearr_23555_23597[(2)] = null);

(statearr_23555_23597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (16))){
var inst_23477 = (state_23522[(10)]);
var inst_23481 = cljs.core.chunk_first.call(null,inst_23477);
var inst_23482 = cljs.core.chunk_rest.call(null,inst_23477);
var inst_23483 = cljs.core.count.call(null,inst_23481);
var inst_23463 = inst_23482;
var inst_23464 = inst_23481;
var inst_23465 = inst_23483;
var inst_23466 = (0);
var state_23522__$1 = (function (){var statearr_23556 = state_23522;
(statearr_23556[(13)] = inst_23466);

(statearr_23556[(14)] = inst_23464);

(statearr_23556[(15)] = inst_23463);

(statearr_23556[(16)] = inst_23465);

return statearr_23556;
})();
var statearr_23557_23598 = state_23522__$1;
(statearr_23557_23598[(2)] = null);

(statearr_23557_23598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (10))){
var inst_23466 = (state_23522[(13)]);
var inst_23464 = (state_23522[(14)]);
var inst_23463 = (state_23522[(15)]);
var inst_23465 = (state_23522[(16)]);
var inst_23471 = cljs.core._nth.call(null,inst_23464,inst_23466);
var inst_23472 = cljs.core.async.muxch_STAR_.call(null,inst_23471);
var inst_23473 = cljs.core.async.close_BANG_.call(null,inst_23472);
var inst_23474 = (inst_23466 + (1));
var tmp23552 = inst_23464;
var tmp23553 = inst_23463;
var tmp23554 = inst_23465;
var inst_23463__$1 = tmp23553;
var inst_23464__$1 = tmp23552;
var inst_23465__$1 = tmp23554;
var inst_23466__$1 = inst_23474;
var state_23522__$1 = (function (){var statearr_23558 = state_23522;
(statearr_23558[(13)] = inst_23466__$1);

(statearr_23558[(14)] = inst_23464__$1);

(statearr_23558[(15)] = inst_23463__$1);

(statearr_23558[(16)] = inst_23465__$1);

(statearr_23558[(17)] = inst_23473);

return statearr_23558;
})();
var statearr_23559_23599 = state_23522__$1;
(statearr_23559_23599[(2)] = null);

(statearr_23559_23599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (18))){
var inst_23492 = (state_23522[(2)]);
var state_23522__$1 = state_23522;
var statearr_23560_23600 = state_23522__$1;
(statearr_23560_23600[(2)] = inst_23492);

(statearr_23560_23600[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23523 === (8))){
var inst_23466 = (state_23522[(13)]);
var inst_23465 = (state_23522[(16)]);
var inst_23468 = (inst_23466 < inst_23465);
var inst_23469 = inst_23468;
var state_23522__$1 = state_23522;
if(cljs.core.truth_(inst_23469)){
var statearr_23561_23601 = state_23522__$1;
(statearr_23561_23601[(1)] = (10));

} else {
var statearr_23562_23602 = state_23522__$1;
(statearr_23562_23602[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__20574__auto___23574,mults,ensure_mult,p))
;
return ((function (switch__20553__auto__,c__20574__auto___23574,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20554__auto__ = null;
var cljs$core$async$state_machine__20554__auto____0 = (function (){
var statearr_23566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23566[(0)] = cljs$core$async$state_machine__20554__auto__);

(statearr_23566[(1)] = (1));

return statearr_23566;
});
var cljs$core$async$state_machine__20554__auto____1 = (function (state_23522){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_23522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e23567){if((e23567 instanceof Object)){
var ex__20557__auto__ = e23567;
var statearr_23568_23603 = state_23522;
(statearr_23568_23603[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23604 = state_23522;
state_23522 = G__23604;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$state_machine__20554__auto__ = function(state_23522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20554__auto____1.call(this,state_23522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20554__auto____0;
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20554__auto____1;
return cljs$core$async$state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto___23574,mults,ensure_mult,p))
})();
var state__20576__auto__ = (function (){var statearr_23569 = f__20575__auto__.call(null);
(statearr_23569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto___23574);

return statearr_23569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto___23574,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args23605 = [];
var len__19529__auto___23608 = arguments.length;
var i__19530__auto___23609 = (0);
while(true){
if((i__19530__auto___23609 < len__19529__auto___23608)){
args23605.push((arguments[i__19530__auto___23609]));

var G__23610 = (i__19530__auto___23609 + (1));
i__19530__auto___23609 = G__23610;
continue;
} else {
}
break;
}

var G__23607 = args23605.length;
switch (G__23607) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23605.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args23612 = [];
var len__19529__auto___23615 = arguments.length;
var i__19530__auto___23616 = (0);
while(true){
if((i__19530__auto___23616 < len__19529__auto___23615)){
args23612.push((arguments[i__19530__auto___23616]));

var G__23617 = (i__19530__auto___23616 + (1));
i__19530__auto___23616 = G__23617;
continue;
} else {
}
break;
}

var G__23614 = args23612.length;
switch (G__23614) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23612.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args23619 = [];
var len__19529__auto___23690 = arguments.length;
var i__19530__auto___23691 = (0);
while(true){
if((i__19530__auto___23691 < len__19529__auto___23690)){
args23619.push((arguments[i__19530__auto___23691]));

var G__23692 = (i__19530__auto___23691 + (1));
i__19530__auto___23691 = G__23692;
continue;
} else {
}
break;
}

var G__23621 = args23619.length;
switch (G__23621) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23619.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20574__auto___23694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto___23694,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto___23694,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23660){
var state_val_23661 = (state_23660[(1)]);
if((state_val_23661 === (7))){
var state_23660__$1 = state_23660;
var statearr_23662_23695 = state_23660__$1;
(statearr_23662_23695[(2)] = null);

(statearr_23662_23695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (1))){
var state_23660__$1 = state_23660;
var statearr_23663_23696 = state_23660__$1;
(statearr_23663_23696[(2)] = null);

(statearr_23663_23696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (4))){
var inst_23624 = (state_23660[(7)]);
var inst_23626 = (inst_23624 < cnt);
var state_23660__$1 = state_23660;
if(cljs.core.truth_(inst_23626)){
var statearr_23664_23697 = state_23660__$1;
(statearr_23664_23697[(1)] = (6));

} else {
var statearr_23665_23698 = state_23660__$1;
(statearr_23665_23698[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (15))){
var inst_23656 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
var statearr_23666_23699 = state_23660__$1;
(statearr_23666_23699[(2)] = inst_23656);

(statearr_23666_23699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (13))){
var inst_23649 = cljs.core.async.close_BANG_.call(null,out);
var state_23660__$1 = state_23660;
var statearr_23667_23700 = state_23660__$1;
(statearr_23667_23700[(2)] = inst_23649);

(statearr_23667_23700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (6))){
var state_23660__$1 = state_23660;
var statearr_23668_23701 = state_23660__$1;
(statearr_23668_23701[(2)] = null);

(statearr_23668_23701[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (3))){
var inst_23658 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23660__$1,inst_23658);
} else {
if((state_val_23661 === (12))){
var inst_23646 = (state_23660[(8)]);
var inst_23646__$1 = (state_23660[(2)]);
var inst_23647 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23646__$1);
var state_23660__$1 = (function (){var statearr_23669 = state_23660;
(statearr_23669[(8)] = inst_23646__$1);

return statearr_23669;
})();
if(cljs.core.truth_(inst_23647)){
var statearr_23670_23702 = state_23660__$1;
(statearr_23670_23702[(1)] = (13));

} else {
var statearr_23671_23703 = state_23660__$1;
(statearr_23671_23703[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (2))){
var inst_23623 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23624 = (0);
var state_23660__$1 = (function (){var statearr_23672 = state_23660;
(statearr_23672[(9)] = inst_23623);

(statearr_23672[(7)] = inst_23624);

return statearr_23672;
})();
var statearr_23673_23704 = state_23660__$1;
(statearr_23673_23704[(2)] = null);

(statearr_23673_23704[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (11))){
var inst_23624 = (state_23660[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23660,(10),Object,null,(9));
var inst_23633 = chs__$1.call(null,inst_23624);
var inst_23634 = done.call(null,inst_23624);
var inst_23635 = cljs.core.async.take_BANG_.call(null,inst_23633,inst_23634);
var state_23660__$1 = state_23660;
var statearr_23674_23705 = state_23660__$1;
(statearr_23674_23705[(2)] = inst_23635);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23660__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (9))){
var inst_23624 = (state_23660[(7)]);
var inst_23637 = (state_23660[(2)]);
var inst_23638 = (inst_23624 + (1));
var inst_23624__$1 = inst_23638;
var state_23660__$1 = (function (){var statearr_23675 = state_23660;
(statearr_23675[(10)] = inst_23637);

(statearr_23675[(7)] = inst_23624__$1);

return statearr_23675;
})();
var statearr_23676_23706 = state_23660__$1;
(statearr_23676_23706[(2)] = null);

(statearr_23676_23706[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (5))){
var inst_23644 = (state_23660[(2)]);
var state_23660__$1 = (function (){var statearr_23677 = state_23660;
(statearr_23677[(11)] = inst_23644);

return statearr_23677;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23660__$1,(12),dchan);
} else {
if((state_val_23661 === (14))){
var inst_23646 = (state_23660[(8)]);
var inst_23651 = cljs.core.apply.call(null,f,inst_23646);
var state_23660__$1 = state_23660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23660__$1,(16),out,inst_23651);
} else {
if((state_val_23661 === (16))){
var inst_23653 = (state_23660[(2)]);
var state_23660__$1 = (function (){var statearr_23678 = state_23660;
(statearr_23678[(12)] = inst_23653);

return statearr_23678;
})();
var statearr_23679_23707 = state_23660__$1;
(statearr_23679_23707[(2)] = null);

(statearr_23679_23707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (10))){
var inst_23628 = (state_23660[(2)]);
var inst_23629 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23660__$1 = (function (){var statearr_23680 = state_23660;
(statearr_23680[(13)] = inst_23628);

return statearr_23680;
})();
var statearr_23681_23708 = state_23660__$1;
(statearr_23681_23708[(2)] = inst_23629);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23660__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (8))){
var inst_23642 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
var statearr_23682_23709 = state_23660__$1;
(statearr_23682_23709[(2)] = inst_23642);

(statearr_23682_23709[(1)] = (5));


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
});})(c__20574__auto___23694,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20553__auto__,c__20574__auto___23694,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20554__auto__ = null;
var cljs$core$async$state_machine__20554__auto____0 = (function (){
var statearr_23686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23686[(0)] = cljs$core$async$state_machine__20554__auto__);

(statearr_23686[(1)] = (1));

return statearr_23686;
});
var cljs$core$async$state_machine__20554__auto____1 = (function (state_23660){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_23660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e23687){if((e23687 instanceof Object)){
var ex__20557__auto__ = e23687;
var statearr_23688_23710 = state_23660;
(statearr_23688_23710[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23711 = state_23660;
state_23660 = G__23711;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$state_machine__20554__auto__ = function(state_23660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20554__auto____1.call(this,state_23660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20554__auto____0;
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20554__auto____1;
return cljs$core$async$state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto___23694,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20576__auto__ = (function (){var statearr_23689 = f__20575__auto__.call(null);
(statearr_23689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto___23694);

return statearr_23689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto___23694,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23713 = [];
var len__19529__auto___23769 = arguments.length;
var i__19530__auto___23770 = (0);
while(true){
if((i__19530__auto___23770 < len__19529__auto___23769)){
args23713.push((arguments[i__19530__auto___23770]));

var G__23771 = (i__19530__auto___23770 + (1));
i__19530__auto___23770 = G__23771;
continue;
} else {
}
break;
}

var G__23715 = args23713.length;
switch (G__23715) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23713.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20574__auto___23773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto___23773,out){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto___23773,out){
return (function (state_23745){
var state_val_23746 = (state_23745[(1)]);
if((state_val_23746 === (7))){
var inst_23725 = (state_23745[(7)]);
var inst_23724 = (state_23745[(8)]);
var inst_23724__$1 = (state_23745[(2)]);
var inst_23725__$1 = cljs.core.nth.call(null,inst_23724__$1,(0),null);
var inst_23726 = cljs.core.nth.call(null,inst_23724__$1,(1),null);
var inst_23727 = (inst_23725__$1 == null);
var state_23745__$1 = (function (){var statearr_23747 = state_23745;
(statearr_23747[(7)] = inst_23725__$1);

(statearr_23747[(8)] = inst_23724__$1);

(statearr_23747[(9)] = inst_23726);

return statearr_23747;
})();
if(cljs.core.truth_(inst_23727)){
var statearr_23748_23774 = state_23745__$1;
(statearr_23748_23774[(1)] = (8));

} else {
var statearr_23749_23775 = state_23745__$1;
(statearr_23749_23775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (1))){
var inst_23716 = cljs.core.vec.call(null,chs);
var inst_23717 = inst_23716;
var state_23745__$1 = (function (){var statearr_23750 = state_23745;
(statearr_23750[(10)] = inst_23717);

return statearr_23750;
})();
var statearr_23751_23776 = state_23745__$1;
(statearr_23751_23776[(2)] = null);

(statearr_23751_23776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (4))){
var inst_23717 = (state_23745[(10)]);
var state_23745__$1 = state_23745;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23745__$1,(7),inst_23717);
} else {
if((state_val_23746 === (6))){
var inst_23741 = (state_23745[(2)]);
var state_23745__$1 = state_23745;
var statearr_23752_23777 = state_23745__$1;
(statearr_23752_23777[(2)] = inst_23741);

(statearr_23752_23777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (3))){
var inst_23743 = (state_23745[(2)]);
var state_23745__$1 = state_23745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23745__$1,inst_23743);
} else {
if((state_val_23746 === (2))){
var inst_23717 = (state_23745[(10)]);
var inst_23719 = cljs.core.count.call(null,inst_23717);
var inst_23720 = (inst_23719 > (0));
var state_23745__$1 = state_23745;
if(cljs.core.truth_(inst_23720)){
var statearr_23754_23778 = state_23745__$1;
(statearr_23754_23778[(1)] = (4));

} else {
var statearr_23755_23779 = state_23745__$1;
(statearr_23755_23779[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (11))){
var inst_23717 = (state_23745[(10)]);
var inst_23734 = (state_23745[(2)]);
var tmp23753 = inst_23717;
var inst_23717__$1 = tmp23753;
var state_23745__$1 = (function (){var statearr_23756 = state_23745;
(statearr_23756[(11)] = inst_23734);

(statearr_23756[(10)] = inst_23717__$1);

return statearr_23756;
})();
var statearr_23757_23780 = state_23745__$1;
(statearr_23757_23780[(2)] = null);

(statearr_23757_23780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (9))){
var inst_23725 = (state_23745[(7)]);
var state_23745__$1 = state_23745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23745__$1,(11),out,inst_23725);
} else {
if((state_val_23746 === (5))){
var inst_23739 = cljs.core.async.close_BANG_.call(null,out);
var state_23745__$1 = state_23745;
var statearr_23758_23781 = state_23745__$1;
(statearr_23758_23781[(2)] = inst_23739);

(statearr_23758_23781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (10))){
var inst_23737 = (state_23745[(2)]);
var state_23745__$1 = state_23745;
var statearr_23759_23782 = state_23745__$1;
(statearr_23759_23782[(2)] = inst_23737);

(statearr_23759_23782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (8))){
var inst_23725 = (state_23745[(7)]);
var inst_23724 = (state_23745[(8)]);
var inst_23726 = (state_23745[(9)]);
var inst_23717 = (state_23745[(10)]);
var inst_23729 = (function (){var cs = inst_23717;
var vec__23722 = inst_23724;
var v = inst_23725;
var c = inst_23726;
return ((function (cs,vec__23722,v,c,inst_23725,inst_23724,inst_23726,inst_23717,state_val_23746,c__20574__auto___23773,out){
return (function (p1__23712_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23712_SHARP_);
});
;})(cs,vec__23722,v,c,inst_23725,inst_23724,inst_23726,inst_23717,state_val_23746,c__20574__auto___23773,out))
})();
var inst_23730 = cljs.core.filterv.call(null,inst_23729,inst_23717);
var inst_23717__$1 = inst_23730;
var state_23745__$1 = (function (){var statearr_23760 = state_23745;
(statearr_23760[(10)] = inst_23717__$1);

return statearr_23760;
})();
var statearr_23761_23783 = state_23745__$1;
(statearr_23761_23783[(2)] = null);

(statearr_23761_23783[(1)] = (2));


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
});})(c__20574__auto___23773,out))
;
return ((function (switch__20553__auto__,c__20574__auto___23773,out){
return (function() {
var cljs$core$async$state_machine__20554__auto__ = null;
var cljs$core$async$state_machine__20554__auto____0 = (function (){
var statearr_23765 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23765[(0)] = cljs$core$async$state_machine__20554__auto__);

(statearr_23765[(1)] = (1));

return statearr_23765;
});
var cljs$core$async$state_machine__20554__auto____1 = (function (state_23745){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_23745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e23766){if((e23766 instanceof Object)){
var ex__20557__auto__ = e23766;
var statearr_23767_23784 = state_23745;
(statearr_23767_23784[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23785 = state_23745;
state_23745 = G__23785;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$state_machine__20554__auto__ = function(state_23745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20554__auto____1.call(this,state_23745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20554__auto____0;
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20554__auto____1;
return cljs$core$async$state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto___23773,out))
})();
var state__20576__auto__ = (function (){var statearr_23768 = f__20575__auto__.call(null);
(statearr_23768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto___23773);

return statearr_23768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto___23773,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args23786 = [];
var len__19529__auto___23835 = arguments.length;
var i__19530__auto___23836 = (0);
while(true){
if((i__19530__auto___23836 < len__19529__auto___23835)){
args23786.push((arguments[i__19530__auto___23836]));

var G__23837 = (i__19530__auto___23836 + (1));
i__19530__auto___23836 = G__23837;
continue;
} else {
}
break;
}

var G__23788 = args23786.length;
switch (G__23788) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23786.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20574__auto___23839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto___23839,out){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto___23839,out){
return (function (state_23812){
var state_val_23813 = (state_23812[(1)]);
if((state_val_23813 === (7))){
var inst_23794 = (state_23812[(7)]);
var inst_23794__$1 = (state_23812[(2)]);
var inst_23795 = (inst_23794__$1 == null);
var inst_23796 = cljs.core.not.call(null,inst_23795);
var state_23812__$1 = (function (){var statearr_23814 = state_23812;
(statearr_23814[(7)] = inst_23794__$1);

return statearr_23814;
})();
if(inst_23796){
var statearr_23815_23840 = state_23812__$1;
(statearr_23815_23840[(1)] = (8));

} else {
var statearr_23816_23841 = state_23812__$1;
(statearr_23816_23841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (1))){
var inst_23789 = (0);
var state_23812__$1 = (function (){var statearr_23817 = state_23812;
(statearr_23817[(8)] = inst_23789);

return statearr_23817;
})();
var statearr_23818_23842 = state_23812__$1;
(statearr_23818_23842[(2)] = null);

(statearr_23818_23842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (4))){
var state_23812__$1 = state_23812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23812__$1,(7),ch);
} else {
if((state_val_23813 === (6))){
var inst_23807 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
var statearr_23819_23843 = state_23812__$1;
(statearr_23819_23843[(2)] = inst_23807);

(statearr_23819_23843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (3))){
var inst_23809 = (state_23812[(2)]);
var inst_23810 = cljs.core.async.close_BANG_.call(null,out);
var state_23812__$1 = (function (){var statearr_23820 = state_23812;
(statearr_23820[(9)] = inst_23809);

return statearr_23820;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23812__$1,inst_23810);
} else {
if((state_val_23813 === (2))){
var inst_23789 = (state_23812[(8)]);
var inst_23791 = (inst_23789 < n);
var state_23812__$1 = state_23812;
if(cljs.core.truth_(inst_23791)){
var statearr_23821_23844 = state_23812__$1;
(statearr_23821_23844[(1)] = (4));

} else {
var statearr_23822_23845 = state_23812__$1;
(statearr_23822_23845[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (11))){
var inst_23789 = (state_23812[(8)]);
var inst_23799 = (state_23812[(2)]);
var inst_23800 = (inst_23789 + (1));
var inst_23789__$1 = inst_23800;
var state_23812__$1 = (function (){var statearr_23823 = state_23812;
(statearr_23823[(10)] = inst_23799);

(statearr_23823[(8)] = inst_23789__$1);

return statearr_23823;
})();
var statearr_23824_23846 = state_23812__$1;
(statearr_23824_23846[(2)] = null);

(statearr_23824_23846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (9))){
var state_23812__$1 = state_23812;
var statearr_23825_23847 = state_23812__$1;
(statearr_23825_23847[(2)] = null);

(statearr_23825_23847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (5))){
var state_23812__$1 = state_23812;
var statearr_23826_23848 = state_23812__$1;
(statearr_23826_23848[(2)] = null);

(statearr_23826_23848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (10))){
var inst_23804 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
var statearr_23827_23849 = state_23812__$1;
(statearr_23827_23849[(2)] = inst_23804);

(statearr_23827_23849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (8))){
var inst_23794 = (state_23812[(7)]);
var state_23812__$1 = state_23812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23812__$1,(11),out,inst_23794);
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
});})(c__20574__auto___23839,out))
;
return ((function (switch__20553__auto__,c__20574__auto___23839,out){
return (function() {
var cljs$core$async$state_machine__20554__auto__ = null;
var cljs$core$async$state_machine__20554__auto____0 = (function (){
var statearr_23831 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23831[(0)] = cljs$core$async$state_machine__20554__auto__);

(statearr_23831[(1)] = (1));

return statearr_23831;
});
var cljs$core$async$state_machine__20554__auto____1 = (function (state_23812){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_23812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e23832){if((e23832 instanceof Object)){
var ex__20557__auto__ = e23832;
var statearr_23833_23850 = state_23812;
(statearr_23833_23850[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23851 = state_23812;
state_23812 = G__23851;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$state_machine__20554__auto__ = function(state_23812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20554__auto____1.call(this,state_23812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20554__auto____0;
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20554__auto____1;
return cljs$core$async$state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto___23839,out))
})();
var state__20576__auto__ = (function (){var statearr_23834 = f__20575__auto__.call(null);
(statearr_23834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto___23839);

return statearr_23834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto___23839,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23859 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23859 = (function (map_LT_,f,ch,meta23860){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23860 = meta23860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23861,meta23860__$1){
var self__ = this;
var _23861__$1 = this;
return (new cljs.core.async.t_cljs$core$async23859(self__.map_LT_,self__.f,self__.ch,meta23860__$1));
});

cljs.core.async.t_cljs$core$async23859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23861){
var self__ = this;
var _23861__$1 = this;
return self__.meta23860;
});

cljs.core.async.t_cljs$core$async23859.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23859.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23859.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23859.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23859.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23862 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23862 = (function (map_LT_,f,ch,meta23860,_,fn1,meta23863){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23860 = meta23860;
this._ = _;
this.fn1 = fn1;
this.meta23863 = meta23863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23864,meta23863__$1){
var self__ = this;
var _23864__$1 = this;
return (new cljs.core.async.t_cljs$core$async23862(self__.map_LT_,self__.f,self__.ch,self__.meta23860,self__._,self__.fn1,meta23863__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23862.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23864){
var self__ = this;
var _23864__$1 = this;
return self__.meta23863;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23862.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23862.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23862.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23862.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23852_SHARP_){
return f1.call(null,(((p1__23852_SHARP_ == null))?null:self__.f.call(null,p1__23852_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23862.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23860","meta23860",-1139524430,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23859","cljs.core.async/t_cljs$core$async23859",-1752798363,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23863","meta23863",1850417933,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23862.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23862";

cljs.core.async.t_cljs$core$async23862.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23862");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23862 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23862(map_LT___$1,f__$1,ch__$1,meta23860__$1,___$2,fn1__$1,meta23863){
return (new cljs.core.async.t_cljs$core$async23862(map_LT___$1,f__$1,ch__$1,meta23860__$1,___$2,fn1__$1,meta23863));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23862(self__.map_LT_,self__.f,self__.ch,self__.meta23860,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18447__auto__ = ret;
if(cljs.core.truth_(and__18447__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18447__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23859.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23859.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23859.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23860","meta23860",-1139524430,null)], null);
});

cljs.core.async.t_cljs$core$async23859.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23859";

cljs.core.async.t_cljs$core$async23859.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23859");
});

cljs.core.async.__GT_t_cljs$core$async23859 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23859(map_LT___$1,f__$1,ch__$1,meta23860){
return (new cljs.core.async.t_cljs$core$async23859(map_LT___$1,f__$1,ch__$1,meta23860));
});

}

return (new cljs.core.async.t_cljs$core$async23859(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23868 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23868 = (function (map_GT_,f,ch,meta23869){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23869 = meta23869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23870,meta23869__$1){
var self__ = this;
var _23870__$1 = this;
return (new cljs.core.async.t_cljs$core$async23868(self__.map_GT_,self__.f,self__.ch,meta23869__$1));
});

cljs.core.async.t_cljs$core$async23868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23870){
var self__ = this;
var _23870__$1 = this;
return self__.meta23869;
});

cljs.core.async.t_cljs$core$async23868.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23868.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23868.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23868.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23868.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23868.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23869","meta23869",2088235265,null)], null);
});

cljs.core.async.t_cljs$core$async23868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23868";

cljs.core.async.t_cljs$core$async23868.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23868");
});

cljs.core.async.__GT_t_cljs$core$async23868 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23868(map_GT___$1,f__$1,ch__$1,meta23869){
return (new cljs.core.async.t_cljs$core$async23868(map_GT___$1,f__$1,ch__$1,meta23869));
});

}

return (new cljs.core.async.t_cljs$core$async23868(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23874 = (function (filter_GT_,p,ch,meta23875){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23875 = meta23875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23876,meta23875__$1){
var self__ = this;
var _23876__$1 = this;
return (new cljs.core.async.t_cljs$core$async23874(self__.filter_GT_,self__.p,self__.ch,meta23875__$1));
});

cljs.core.async.t_cljs$core$async23874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23876){
var self__ = this;
var _23876__$1 = this;
return self__.meta23875;
});

cljs.core.async.t_cljs$core$async23874.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23874.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23874.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23874.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23874.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23874.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23874.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23875","meta23875",2066412191,null)], null);
});

cljs.core.async.t_cljs$core$async23874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23874";

cljs.core.async.t_cljs$core$async23874.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23874");
});

cljs.core.async.__GT_t_cljs$core$async23874 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23874(filter_GT___$1,p__$1,ch__$1,meta23875){
return (new cljs.core.async.t_cljs$core$async23874(filter_GT___$1,p__$1,ch__$1,meta23875));
});

}

return (new cljs.core.async.t_cljs$core$async23874(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args23877 = [];
var len__19529__auto___23921 = arguments.length;
var i__19530__auto___23922 = (0);
while(true){
if((i__19530__auto___23922 < len__19529__auto___23921)){
args23877.push((arguments[i__19530__auto___23922]));

var G__23923 = (i__19530__auto___23922 + (1));
i__19530__auto___23922 = G__23923;
continue;
} else {
}
break;
}

var G__23879 = args23877.length;
switch (G__23879) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23877.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20574__auto___23925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto___23925,out){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto___23925,out){
return (function (state_23900){
var state_val_23901 = (state_23900[(1)]);
if((state_val_23901 === (7))){
var inst_23896 = (state_23900[(2)]);
var state_23900__$1 = state_23900;
var statearr_23902_23926 = state_23900__$1;
(statearr_23902_23926[(2)] = inst_23896);

(statearr_23902_23926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23901 === (1))){
var state_23900__$1 = state_23900;
var statearr_23903_23927 = state_23900__$1;
(statearr_23903_23927[(2)] = null);

(statearr_23903_23927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23901 === (4))){
var inst_23882 = (state_23900[(7)]);
var inst_23882__$1 = (state_23900[(2)]);
var inst_23883 = (inst_23882__$1 == null);
var state_23900__$1 = (function (){var statearr_23904 = state_23900;
(statearr_23904[(7)] = inst_23882__$1);

return statearr_23904;
})();
if(cljs.core.truth_(inst_23883)){
var statearr_23905_23928 = state_23900__$1;
(statearr_23905_23928[(1)] = (5));

} else {
var statearr_23906_23929 = state_23900__$1;
(statearr_23906_23929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23901 === (6))){
var inst_23882 = (state_23900[(7)]);
var inst_23887 = p.call(null,inst_23882);
var state_23900__$1 = state_23900;
if(cljs.core.truth_(inst_23887)){
var statearr_23907_23930 = state_23900__$1;
(statearr_23907_23930[(1)] = (8));

} else {
var statearr_23908_23931 = state_23900__$1;
(statearr_23908_23931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23901 === (3))){
var inst_23898 = (state_23900[(2)]);
var state_23900__$1 = state_23900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23900__$1,inst_23898);
} else {
if((state_val_23901 === (2))){
var state_23900__$1 = state_23900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23900__$1,(4),ch);
} else {
if((state_val_23901 === (11))){
var inst_23890 = (state_23900[(2)]);
var state_23900__$1 = state_23900;
var statearr_23909_23932 = state_23900__$1;
(statearr_23909_23932[(2)] = inst_23890);

(statearr_23909_23932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23901 === (9))){
var state_23900__$1 = state_23900;
var statearr_23910_23933 = state_23900__$1;
(statearr_23910_23933[(2)] = null);

(statearr_23910_23933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23901 === (5))){
var inst_23885 = cljs.core.async.close_BANG_.call(null,out);
var state_23900__$1 = state_23900;
var statearr_23911_23934 = state_23900__$1;
(statearr_23911_23934[(2)] = inst_23885);

(statearr_23911_23934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23901 === (10))){
var inst_23893 = (state_23900[(2)]);
var state_23900__$1 = (function (){var statearr_23912 = state_23900;
(statearr_23912[(8)] = inst_23893);

return statearr_23912;
})();
var statearr_23913_23935 = state_23900__$1;
(statearr_23913_23935[(2)] = null);

(statearr_23913_23935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23901 === (8))){
var inst_23882 = (state_23900[(7)]);
var state_23900__$1 = state_23900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23900__$1,(11),out,inst_23882);
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
});})(c__20574__auto___23925,out))
;
return ((function (switch__20553__auto__,c__20574__auto___23925,out){
return (function() {
var cljs$core$async$state_machine__20554__auto__ = null;
var cljs$core$async$state_machine__20554__auto____0 = (function (){
var statearr_23917 = [null,null,null,null,null,null,null,null,null];
(statearr_23917[(0)] = cljs$core$async$state_machine__20554__auto__);

(statearr_23917[(1)] = (1));

return statearr_23917;
});
var cljs$core$async$state_machine__20554__auto____1 = (function (state_23900){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_23900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e23918){if((e23918 instanceof Object)){
var ex__20557__auto__ = e23918;
var statearr_23919_23936 = state_23900;
(statearr_23919_23936[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23937 = state_23900;
state_23900 = G__23937;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$state_machine__20554__auto__ = function(state_23900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20554__auto____1.call(this,state_23900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20554__auto____0;
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20554__auto____1;
return cljs$core$async$state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto___23925,out))
})();
var state__20576__auto__ = (function (){var statearr_23920 = f__20575__auto__.call(null);
(statearr_23920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto___23925);

return statearr_23920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto___23925,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23938 = [];
var len__19529__auto___23941 = arguments.length;
var i__19530__auto___23942 = (0);
while(true){
if((i__19530__auto___23942 < len__19529__auto___23941)){
args23938.push((arguments[i__19530__auto___23942]));

var G__23943 = (i__19530__auto___23942 + (1));
i__19530__auto___23942 = G__23943;
continue;
} else {
}
break;
}

var G__23940 = args23938.length;
switch (G__23940) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23938.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20574__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto__){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto__){
return (function (state_24110){
var state_val_24111 = (state_24110[(1)]);
if((state_val_24111 === (7))){
var inst_24106 = (state_24110[(2)]);
var state_24110__$1 = state_24110;
var statearr_24112_24153 = state_24110__$1;
(statearr_24112_24153[(2)] = inst_24106);

(statearr_24112_24153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24111 === (20))){
var inst_24076 = (state_24110[(7)]);
var inst_24087 = (state_24110[(2)]);
var inst_24088 = cljs.core.next.call(null,inst_24076);
var inst_24062 = inst_24088;
var inst_24063 = null;
var inst_24064 = (0);
var inst_24065 = (0);
var state_24110__$1 = (function (){var statearr_24113 = state_24110;
(statearr_24113[(8)] = inst_24064);

(statearr_24113[(9)] = inst_24065);

(statearr_24113[(10)] = inst_24062);

(statearr_24113[(11)] = inst_24087);

(statearr_24113[(12)] = inst_24063);

return statearr_24113;
})();
var statearr_24114_24154 = state_24110__$1;
(statearr_24114_24154[(2)] = null);

(statearr_24114_24154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24111 === (1))){
var state_24110__$1 = state_24110;
var statearr_24115_24155 = state_24110__$1;
(statearr_24115_24155[(2)] = null);

(statearr_24115_24155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24111 === (4))){
var inst_24051 = (state_24110[(13)]);
var inst_24051__$1 = (state_24110[(2)]);
var inst_24052 = (inst_24051__$1 == null);
var state_24110__$1 = (function (){var statearr_24116 = state_24110;
(statearr_24116[(13)] = inst_24051__$1);

return statearr_24116;
})();
if(cljs.core.truth_(inst_24052)){
var statearr_24117_24156 = state_24110__$1;
(statearr_24117_24156[(1)] = (5));

} else {
var statearr_24118_24157 = state_24110__$1;
(statearr_24118_24157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24111 === (15))){
var state_24110__$1 = state_24110;
var statearr_24122_24158 = state_24110__$1;
(statearr_24122_24158[(2)] = null);

(statearr_24122_24158[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24111 === (21))){
var state_24110__$1 = state_24110;
var statearr_24123_24159 = state_24110__$1;
(statearr_24123_24159[(2)] = null);

(statearr_24123_24159[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24111 === (13))){
var inst_24064 = (state_24110[(8)]);
var inst_24065 = (state_24110[(9)]);
var inst_24062 = (state_24110[(10)]);
var inst_24063 = (state_24110[(12)]);
var inst_24072 = (state_24110[(2)]);
var inst_24073 = (inst_24065 + (1));
var tmp24119 = inst_24064;
var tmp24120 = inst_24062;
var tmp24121 = inst_24063;
var inst_24062__$1 = tmp24120;
var inst_24063__$1 = tmp24121;
var inst_24064__$1 = tmp24119;
var inst_24065__$1 = inst_24073;
var state_24110__$1 = (function (){var statearr_24124 = state_24110;
(statearr_24124[(14)] = inst_24072);

(statearr_24124[(8)] = inst_24064__$1);

(statearr_24124[(9)] = inst_24065__$1);

(statearr_24124[(10)] = inst_24062__$1);

(statearr_24124[(12)] = inst_24063__$1);

return statearr_24124;
})();
var statearr_24125_24160 = state_24110__$1;
(statearr_24125_24160[(2)] = null);

(statearr_24125_24160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24111 === (22))){
var state_24110__$1 = state_24110;
var statearr_24126_24161 = state_24110__$1;
(statearr_24126_24161[(2)] = null);

(statearr_24126_24161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24111 === (6))){
var inst_24051 = (state_24110[(13)]);
var inst_24060 = f.call(null,inst_24051);
var inst_24061 = cljs.core.seq.call(null,inst_24060);
var inst_24062 = inst_24061;
var inst_24063 = null;
var inst_24064 = (0);
var inst_24065 = (0);
var state_24110__$1 = (function (){var statearr_24127 = state_24110;
(statearr_24127[(8)] = inst_24064);

(statearr_24127[(9)] = inst_24065);

(statearr_24127[(10)] = inst_24062);

(statearr_24127[(12)] = inst_24063);

return statearr_24127;
})();
var statearr_24128_24162 = state_24110__$1;
(statearr_24128_24162[(2)] = null);

(statearr_24128_24162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24111 === (17))){
var inst_24076 = (state_24110[(7)]);
var inst_24080 = cljs.core.chunk_first.call(null,inst_24076);
var inst_24081 = cljs.core.chunk_rest.call(null,inst_24076);
var inst_24082 = cljs.core.count.call(null,inst_24080);
var inst_24062 = inst_24081;
var inst_24063 = inst_24080;
var inst_24064 = inst_24082;
var inst_24065 = (0);
var state_24110__$1 = (function (){var statearr_24129 = state_24110;
(statearr_24129[(8)] = inst_24064);

(statearr_24129[(9)] = inst_24065);

(statearr_24129[(10)] = inst_24062);

(statearr_24129[(12)] = inst_24063);

return statearr_24129;
})();
var statearr_24130_24163 = state_24110__$1;
(statearr_24130_24163[(2)] = null);

(statearr_24130_24163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24111 === (3))){
var inst_24108 = (state_24110[(2)]);
var state_24110__$1 = state_24110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24110__$1,inst_24108);
} else {
if((state_val_24111 === (12))){
var inst_24096 = (state_24110[(2)]);
var state_24110__$1 = state_24110;
var statearr_24131_24164 = state_24110__$1;
(statearr_24131_24164[(2)] = inst_24096);

(statearr_24131_24164[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24111 === (2))){
var state_24110__$1 = state_24110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24110__$1,(4),in$);
} else {
if((state_val_24111 === (23))){
var inst_24104 = (state_24110[(2)]);
var state_24110__$1 = state_24110;
var statearr_24132_24165 = state_24110__$1;
(statearr_24132_24165[(2)] = inst_24104);

(statearr_24132_24165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24111 === (19))){
var inst_24091 = (state_24110[(2)]);
var state_24110__$1 = state_24110;
var statearr_24133_24166 = state_24110__$1;
(statearr_24133_24166[(2)] = inst_24091);

(statearr_24133_24166[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24111 === (11))){
var inst_24076 = (state_24110[(7)]);
var inst_24062 = (state_24110[(10)]);
var inst_24076__$1 = cljs.core.seq.call(null,inst_24062);
var state_24110__$1 = (function (){var statearr_24134 = state_24110;
(statearr_24134[(7)] = inst_24076__$1);

return statearr_24134;
})();
if(inst_24076__$1){
var statearr_24135_24167 = state_24110__$1;
(statearr_24135_24167[(1)] = (14));

} else {
var statearr_24136_24168 = state_24110__$1;
(statearr_24136_24168[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24111 === (9))){
var inst_24098 = (state_24110[(2)]);
var inst_24099 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24110__$1 = (function (){var statearr_24137 = state_24110;
(statearr_24137[(15)] = inst_24098);

return statearr_24137;
})();
if(cljs.core.truth_(inst_24099)){
var statearr_24138_24169 = state_24110__$1;
(statearr_24138_24169[(1)] = (21));

} else {
var statearr_24139_24170 = state_24110__$1;
(statearr_24139_24170[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24111 === (5))){
var inst_24054 = cljs.core.async.close_BANG_.call(null,out);
var state_24110__$1 = state_24110;
var statearr_24140_24171 = state_24110__$1;
(statearr_24140_24171[(2)] = inst_24054);

(statearr_24140_24171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24111 === (14))){
var inst_24076 = (state_24110[(7)]);
var inst_24078 = cljs.core.chunked_seq_QMARK_.call(null,inst_24076);
var state_24110__$1 = state_24110;
if(inst_24078){
var statearr_24141_24172 = state_24110__$1;
(statearr_24141_24172[(1)] = (17));

} else {
var statearr_24142_24173 = state_24110__$1;
(statearr_24142_24173[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24111 === (16))){
var inst_24094 = (state_24110[(2)]);
var state_24110__$1 = state_24110;
var statearr_24143_24174 = state_24110__$1;
(statearr_24143_24174[(2)] = inst_24094);

(statearr_24143_24174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24111 === (10))){
var inst_24065 = (state_24110[(9)]);
var inst_24063 = (state_24110[(12)]);
var inst_24070 = cljs.core._nth.call(null,inst_24063,inst_24065);
var state_24110__$1 = state_24110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24110__$1,(13),out,inst_24070);
} else {
if((state_val_24111 === (18))){
var inst_24076 = (state_24110[(7)]);
var inst_24085 = cljs.core.first.call(null,inst_24076);
var state_24110__$1 = state_24110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24110__$1,(20),out,inst_24085);
} else {
if((state_val_24111 === (8))){
var inst_24064 = (state_24110[(8)]);
var inst_24065 = (state_24110[(9)]);
var inst_24067 = (inst_24065 < inst_24064);
var inst_24068 = inst_24067;
var state_24110__$1 = state_24110;
if(cljs.core.truth_(inst_24068)){
var statearr_24144_24175 = state_24110__$1;
(statearr_24144_24175[(1)] = (10));

} else {
var statearr_24145_24176 = state_24110__$1;
(statearr_24145_24176[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__20554__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20554__auto____0 = (function (){
var statearr_24149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24149[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20554__auto__);

(statearr_24149[(1)] = (1));

return statearr_24149;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20554__auto____1 = (function (state_24110){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_24110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e24150){if((e24150 instanceof Object)){
var ex__20557__auto__ = e24150;
var statearr_24151_24177 = state_24110;
(statearr_24151_24177[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24178 = state_24110;
state_24110 = G__24178;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20554__auto__ = function(state_24110){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20554__auto____1.call(this,state_24110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20554__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20554__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto__))
})();
var state__20576__auto__ = (function (){var statearr_24152 = f__20575__auto__.call(null);
(statearr_24152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto__);

return statearr_24152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto__))
);

return c__20574__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24179 = [];
var len__19529__auto___24182 = arguments.length;
var i__19530__auto___24183 = (0);
while(true){
if((i__19530__auto___24183 < len__19529__auto___24182)){
args24179.push((arguments[i__19530__auto___24183]));

var G__24184 = (i__19530__auto___24183 + (1));
i__19530__auto___24183 = G__24184;
continue;
} else {
}
break;
}

var G__24181 = args24179.length;
switch (G__24181) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24179.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24186 = [];
var len__19529__auto___24189 = arguments.length;
var i__19530__auto___24190 = (0);
while(true){
if((i__19530__auto___24190 < len__19529__auto___24189)){
args24186.push((arguments[i__19530__auto___24190]));

var G__24191 = (i__19530__auto___24190 + (1));
i__19530__auto___24190 = G__24191;
continue;
} else {
}
break;
}

var G__24188 = args24186.length;
switch (G__24188) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24186.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24193 = [];
var len__19529__auto___24244 = arguments.length;
var i__19530__auto___24245 = (0);
while(true){
if((i__19530__auto___24245 < len__19529__auto___24244)){
args24193.push((arguments[i__19530__auto___24245]));

var G__24246 = (i__19530__auto___24245 + (1));
i__19530__auto___24245 = G__24246;
continue;
} else {
}
break;
}

var G__24195 = args24193.length;
switch (G__24195) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24193.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20574__auto___24248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto___24248,out){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto___24248,out){
return (function (state_24219){
var state_val_24220 = (state_24219[(1)]);
if((state_val_24220 === (7))){
var inst_24214 = (state_24219[(2)]);
var state_24219__$1 = state_24219;
var statearr_24221_24249 = state_24219__$1;
(statearr_24221_24249[(2)] = inst_24214);

(statearr_24221_24249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24220 === (1))){
var inst_24196 = null;
var state_24219__$1 = (function (){var statearr_24222 = state_24219;
(statearr_24222[(7)] = inst_24196);

return statearr_24222;
})();
var statearr_24223_24250 = state_24219__$1;
(statearr_24223_24250[(2)] = null);

(statearr_24223_24250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24220 === (4))){
var inst_24199 = (state_24219[(8)]);
var inst_24199__$1 = (state_24219[(2)]);
var inst_24200 = (inst_24199__$1 == null);
var inst_24201 = cljs.core.not.call(null,inst_24200);
var state_24219__$1 = (function (){var statearr_24224 = state_24219;
(statearr_24224[(8)] = inst_24199__$1);

return statearr_24224;
})();
if(inst_24201){
var statearr_24225_24251 = state_24219__$1;
(statearr_24225_24251[(1)] = (5));

} else {
var statearr_24226_24252 = state_24219__$1;
(statearr_24226_24252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24220 === (6))){
var state_24219__$1 = state_24219;
var statearr_24227_24253 = state_24219__$1;
(statearr_24227_24253[(2)] = null);

(statearr_24227_24253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24220 === (3))){
var inst_24216 = (state_24219[(2)]);
var inst_24217 = cljs.core.async.close_BANG_.call(null,out);
var state_24219__$1 = (function (){var statearr_24228 = state_24219;
(statearr_24228[(9)] = inst_24216);

return statearr_24228;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24219__$1,inst_24217);
} else {
if((state_val_24220 === (2))){
var state_24219__$1 = state_24219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24219__$1,(4),ch);
} else {
if((state_val_24220 === (11))){
var inst_24199 = (state_24219[(8)]);
var inst_24208 = (state_24219[(2)]);
var inst_24196 = inst_24199;
var state_24219__$1 = (function (){var statearr_24229 = state_24219;
(statearr_24229[(10)] = inst_24208);

(statearr_24229[(7)] = inst_24196);

return statearr_24229;
})();
var statearr_24230_24254 = state_24219__$1;
(statearr_24230_24254[(2)] = null);

(statearr_24230_24254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24220 === (9))){
var inst_24199 = (state_24219[(8)]);
var state_24219__$1 = state_24219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24219__$1,(11),out,inst_24199);
} else {
if((state_val_24220 === (5))){
var inst_24196 = (state_24219[(7)]);
var inst_24199 = (state_24219[(8)]);
var inst_24203 = cljs.core._EQ_.call(null,inst_24199,inst_24196);
var state_24219__$1 = state_24219;
if(inst_24203){
var statearr_24232_24255 = state_24219__$1;
(statearr_24232_24255[(1)] = (8));

} else {
var statearr_24233_24256 = state_24219__$1;
(statearr_24233_24256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24220 === (10))){
var inst_24211 = (state_24219[(2)]);
var state_24219__$1 = state_24219;
var statearr_24234_24257 = state_24219__$1;
(statearr_24234_24257[(2)] = inst_24211);

(statearr_24234_24257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24220 === (8))){
var inst_24196 = (state_24219[(7)]);
var tmp24231 = inst_24196;
var inst_24196__$1 = tmp24231;
var state_24219__$1 = (function (){var statearr_24235 = state_24219;
(statearr_24235[(7)] = inst_24196__$1);

return statearr_24235;
})();
var statearr_24236_24258 = state_24219__$1;
(statearr_24236_24258[(2)] = null);

(statearr_24236_24258[(1)] = (2));


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
});})(c__20574__auto___24248,out))
;
return ((function (switch__20553__auto__,c__20574__auto___24248,out){
return (function() {
var cljs$core$async$state_machine__20554__auto__ = null;
var cljs$core$async$state_machine__20554__auto____0 = (function (){
var statearr_24240 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24240[(0)] = cljs$core$async$state_machine__20554__auto__);

(statearr_24240[(1)] = (1));

return statearr_24240;
});
var cljs$core$async$state_machine__20554__auto____1 = (function (state_24219){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_24219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e24241){if((e24241 instanceof Object)){
var ex__20557__auto__ = e24241;
var statearr_24242_24259 = state_24219;
(statearr_24242_24259[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24260 = state_24219;
state_24219 = G__24260;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$state_machine__20554__auto__ = function(state_24219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20554__auto____1.call(this,state_24219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20554__auto____0;
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20554__auto____1;
return cljs$core$async$state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto___24248,out))
})();
var state__20576__auto__ = (function (){var statearr_24243 = f__20575__auto__.call(null);
(statearr_24243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto___24248);

return statearr_24243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto___24248,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24261 = [];
var len__19529__auto___24331 = arguments.length;
var i__19530__auto___24332 = (0);
while(true){
if((i__19530__auto___24332 < len__19529__auto___24331)){
args24261.push((arguments[i__19530__auto___24332]));

var G__24333 = (i__19530__auto___24332 + (1));
i__19530__auto___24332 = G__24333;
continue;
} else {
}
break;
}

var G__24263 = args24261.length;
switch (G__24263) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24261.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20574__auto___24335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto___24335,out){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto___24335,out){
return (function (state_24301){
var state_val_24302 = (state_24301[(1)]);
if((state_val_24302 === (7))){
var inst_24297 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
var statearr_24303_24336 = state_24301__$1;
(statearr_24303_24336[(2)] = inst_24297);

(statearr_24303_24336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (1))){
var inst_24264 = (new Array(n));
var inst_24265 = inst_24264;
var inst_24266 = (0);
var state_24301__$1 = (function (){var statearr_24304 = state_24301;
(statearr_24304[(7)] = inst_24266);

(statearr_24304[(8)] = inst_24265);

return statearr_24304;
})();
var statearr_24305_24337 = state_24301__$1;
(statearr_24305_24337[(2)] = null);

(statearr_24305_24337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (4))){
var inst_24269 = (state_24301[(9)]);
var inst_24269__$1 = (state_24301[(2)]);
var inst_24270 = (inst_24269__$1 == null);
var inst_24271 = cljs.core.not.call(null,inst_24270);
var state_24301__$1 = (function (){var statearr_24306 = state_24301;
(statearr_24306[(9)] = inst_24269__$1);

return statearr_24306;
})();
if(inst_24271){
var statearr_24307_24338 = state_24301__$1;
(statearr_24307_24338[(1)] = (5));

} else {
var statearr_24308_24339 = state_24301__$1;
(statearr_24308_24339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (15))){
var inst_24291 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
var statearr_24309_24340 = state_24301__$1;
(statearr_24309_24340[(2)] = inst_24291);

(statearr_24309_24340[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (13))){
var state_24301__$1 = state_24301;
var statearr_24310_24341 = state_24301__$1;
(statearr_24310_24341[(2)] = null);

(statearr_24310_24341[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (6))){
var inst_24266 = (state_24301[(7)]);
var inst_24287 = (inst_24266 > (0));
var state_24301__$1 = state_24301;
if(cljs.core.truth_(inst_24287)){
var statearr_24311_24342 = state_24301__$1;
(statearr_24311_24342[(1)] = (12));

} else {
var statearr_24312_24343 = state_24301__$1;
(statearr_24312_24343[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (3))){
var inst_24299 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24301__$1,inst_24299);
} else {
if((state_val_24302 === (12))){
var inst_24265 = (state_24301[(8)]);
var inst_24289 = cljs.core.vec.call(null,inst_24265);
var state_24301__$1 = state_24301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24301__$1,(15),out,inst_24289);
} else {
if((state_val_24302 === (2))){
var state_24301__$1 = state_24301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24301__$1,(4),ch);
} else {
if((state_val_24302 === (11))){
var inst_24281 = (state_24301[(2)]);
var inst_24282 = (new Array(n));
var inst_24265 = inst_24282;
var inst_24266 = (0);
var state_24301__$1 = (function (){var statearr_24313 = state_24301;
(statearr_24313[(7)] = inst_24266);

(statearr_24313[(8)] = inst_24265);

(statearr_24313[(10)] = inst_24281);

return statearr_24313;
})();
var statearr_24314_24344 = state_24301__$1;
(statearr_24314_24344[(2)] = null);

(statearr_24314_24344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (9))){
var inst_24265 = (state_24301[(8)]);
var inst_24279 = cljs.core.vec.call(null,inst_24265);
var state_24301__$1 = state_24301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24301__$1,(11),out,inst_24279);
} else {
if((state_val_24302 === (5))){
var inst_24269 = (state_24301[(9)]);
var inst_24266 = (state_24301[(7)]);
var inst_24274 = (state_24301[(11)]);
var inst_24265 = (state_24301[(8)]);
var inst_24273 = (inst_24265[inst_24266] = inst_24269);
var inst_24274__$1 = (inst_24266 + (1));
var inst_24275 = (inst_24274__$1 < n);
var state_24301__$1 = (function (){var statearr_24315 = state_24301;
(statearr_24315[(11)] = inst_24274__$1);

(statearr_24315[(12)] = inst_24273);

return statearr_24315;
})();
if(cljs.core.truth_(inst_24275)){
var statearr_24316_24345 = state_24301__$1;
(statearr_24316_24345[(1)] = (8));

} else {
var statearr_24317_24346 = state_24301__$1;
(statearr_24317_24346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (14))){
var inst_24294 = (state_24301[(2)]);
var inst_24295 = cljs.core.async.close_BANG_.call(null,out);
var state_24301__$1 = (function (){var statearr_24319 = state_24301;
(statearr_24319[(13)] = inst_24294);

return statearr_24319;
})();
var statearr_24320_24347 = state_24301__$1;
(statearr_24320_24347[(2)] = inst_24295);

(statearr_24320_24347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (10))){
var inst_24285 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
var statearr_24321_24348 = state_24301__$1;
(statearr_24321_24348[(2)] = inst_24285);

(statearr_24321_24348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (8))){
var inst_24274 = (state_24301[(11)]);
var inst_24265 = (state_24301[(8)]);
var tmp24318 = inst_24265;
var inst_24265__$1 = tmp24318;
var inst_24266 = inst_24274;
var state_24301__$1 = (function (){var statearr_24322 = state_24301;
(statearr_24322[(7)] = inst_24266);

(statearr_24322[(8)] = inst_24265__$1);

return statearr_24322;
})();
var statearr_24323_24349 = state_24301__$1;
(statearr_24323_24349[(2)] = null);

(statearr_24323_24349[(1)] = (2));


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
});})(c__20574__auto___24335,out))
;
return ((function (switch__20553__auto__,c__20574__auto___24335,out){
return (function() {
var cljs$core$async$state_machine__20554__auto__ = null;
var cljs$core$async$state_machine__20554__auto____0 = (function (){
var statearr_24327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24327[(0)] = cljs$core$async$state_machine__20554__auto__);

(statearr_24327[(1)] = (1));

return statearr_24327;
});
var cljs$core$async$state_machine__20554__auto____1 = (function (state_24301){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_24301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e24328){if((e24328 instanceof Object)){
var ex__20557__auto__ = e24328;
var statearr_24329_24350 = state_24301;
(statearr_24329_24350[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24351 = state_24301;
state_24301 = G__24351;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$state_machine__20554__auto__ = function(state_24301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20554__auto____1.call(this,state_24301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20554__auto____0;
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20554__auto____1;
return cljs$core$async$state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto___24335,out))
})();
var state__20576__auto__ = (function (){var statearr_24330 = f__20575__auto__.call(null);
(statearr_24330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto___24335);

return statearr_24330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto___24335,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24352 = [];
var len__19529__auto___24426 = arguments.length;
var i__19530__auto___24427 = (0);
while(true){
if((i__19530__auto___24427 < len__19529__auto___24426)){
args24352.push((arguments[i__19530__auto___24427]));

var G__24428 = (i__19530__auto___24427 + (1));
i__19530__auto___24427 = G__24428;
continue;
} else {
}
break;
}

var G__24354 = args24352.length;
switch (G__24354) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24352.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20574__auto___24430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20574__auto___24430,out){
return (function (){
var f__20575__auto__ = (function (){var switch__20553__auto__ = ((function (c__20574__auto___24430,out){
return (function (state_24396){
var state_val_24397 = (state_24396[(1)]);
if((state_val_24397 === (7))){
var inst_24392 = (state_24396[(2)]);
var state_24396__$1 = state_24396;
var statearr_24398_24431 = state_24396__$1;
(statearr_24398_24431[(2)] = inst_24392);

(statearr_24398_24431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (1))){
var inst_24355 = [];
var inst_24356 = inst_24355;
var inst_24357 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24396__$1 = (function (){var statearr_24399 = state_24396;
(statearr_24399[(7)] = inst_24356);

(statearr_24399[(8)] = inst_24357);

return statearr_24399;
})();
var statearr_24400_24432 = state_24396__$1;
(statearr_24400_24432[(2)] = null);

(statearr_24400_24432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (4))){
var inst_24360 = (state_24396[(9)]);
var inst_24360__$1 = (state_24396[(2)]);
var inst_24361 = (inst_24360__$1 == null);
var inst_24362 = cljs.core.not.call(null,inst_24361);
var state_24396__$1 = (function (){var statearr_24401 = state_24396;
(statearr_24401[(9)] = inst_24360__$1);

return statearr_24401;
})();
if(inst_24362){
var statearr_24402_24433 = state_24396__$1;
(statearr_24402_24433[(1)] = (5));

} else {
var statearr_24403_24434 = state_24396__$1;
(statearr_24403_24434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (15))){
var inst_24386 = (state_24396[(2)]);
var state_24396__$1 = state_24396;
var statearr_24404_24435 = state_24396__$1;
(statearr_24404_24435[(2)] = inst_24386);

(statearr_24404_24435[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (13))){
var state_24396__$1 = state_24396;
var statearr_24405_24436 = state_24396__$1;
(statearr_24405_24436[(2)] = null);

(statearr_24405_24436[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (6))){
var inst_24356 = (state_24396[(7)]);
var inst_24381 = inst_24356.length;
var inst_24382 = (inst_24381 > (0));
var state_24396__$1 = state_24396;
if(cljs.core.truth_(inst_24382)){
var statearr_24406_24437 = state_24396__$1;
(statearr_24406_24437[(1)] = (12));

} else {
var statearr_24407_24438 = state_24396__$1;
(statearr_24407_24438[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (3))){
var inst_24394 = (state_24396[(2)]);
var state_24396__$1 = state_24396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24396__$1,inst_24394);
} else {
if((state_val_24397 === (12))){
var inst_24356 = (state_24396[(7)]);
var inst_24384 = cljs.core.vec.call(null,inst_24356);
var state_24396__$1 = state_24396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24396__$1,(15),out,inst_24384);
} else {
if((state_val_24397 === (2))){
var state_24396__$1 = state_24396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24396__$1,(4),ch);
} else {
if((state_val_24397 === (11))){
var inst_24360 = (state_24396[(9)]);
var inst_24364 = (state_24396[(10)]);
var inst_24374 = (state_24396[(2)]);
var inst_24375 = [];
var inst_24376 = inst_24375.push(inst_24360);
var inst_24356 = inst_24375;
var inst_24357 = inst_24364;
var state_24396__$1 = (function (){var statearr_24408 = state_24396;
(statearr_24408[(7)] = inst_24356);

(statearr_24408[(11)] = inst_24376);

(statearr_24408[(12)] = inst_24374);

(statearr_24408[(8)] = inst_24357);

return statearr_24408;
})();
var statearr_24409_24439 = state_24396__$1;
(statearr_24409_24439[(2)] = null);

(statearr_24409_24439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (9))){
var inst_24356 = (state_24396[(7)]);
var inst_24372 = cljs.core.vec.call(null,inst_24356);
var state_24396__$1 = state_24396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24396__$1,(11),out,inst_24372);
} else {
if((state_val_24397 === (5))){
var inst_24360 = (state_24396[(9)]);
var inst_24357 = (state_24396[(8)]);
var inst_24364 = (state_24396[(10)]);
var inst_24364__$1 = f.call(null,inst_24360);
var inst_24365 = cljs.core._EQ_.call(null,inst_24364__$1,inst_24357);
var inst_24366 = cljs.core.keyword_identical_QMARK_.call(null,inst_24357,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24367 = (inst_24365) || (inst_24366);
var state_24396__$1 = (function (){var statearr_24410 = state_24396;
(statearr_24410[(10)] = inst_24364__$1);

return statearr_24410;
})();
if(cljs.core.truth_(inst_24367)){
var statearr_24411_24440 = state_24396__$1;
(statearr_24411_24440[(1)] = (8));

} else {
var statearr_24412_24441 = state_24396__$1;
(statearr_24412_24441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (14))){
var inst_24389 = (state_24396[(2)]);
var inst_24390 = cljs.core.async.close_BANG_.call(null,out);
var state_24396__$1 = (function (){var statearr_24414 = state_24396;
(statearr_24414[(13)] = inst_24389);

return statearr_24414;
})();
var statearr_24415_24442 = state_24396__$1;
(statearr_24415_24442[(2)] = inst_24390);

(statearr_24415_24442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (10))){
var inst_24379 = (state_24396[(2)]);
var state_24396__$1 = state_24396;
var statearr_24416_24443 = state_24396__$1;
(statearr_24416_24443[(2)] = inst_24379);

(statearr_24416_24443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (8))){
var inst_24360 = (state_24396[(9)]);
var inst_24356 = (state_24396[(7)]);
var inst_24364 = (state_24396[(10)]);
var inst_24369 = inst_24356.push(inst_24360);
var tmp24413 = inst_24356;
var inst_24356__$1 = tmp24413;
var inst_24357 = inst_24364;
var state_24396__$1 = (function (){var statearr_24417 = state_24396;
(statearr_24417[(7)] = inst_24356__$1);

(statearr_24417[(14)] = inst_24369);

(statearr_24417[(8)] = inst_24357);

return statearr_24417;
})();
var statearr_24418_24444 = state_24396__$1;
(statearr_24418_24444[(2)] = null);

(statearr_24418_24444[(1)] = (2));


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
});})(c__20574__auto___24430,out))
;
return ((function (switch__20553__auto__,c__20574__auto___24430,out){
return (function() {
var cljs$core$async$state_machine__20554__auto__ = null;
var cljs$core$async$state_machine__20554__auto____0 = (function (){
var statearr_24422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24422[(0)] = cljs$core$async$state_machine__20554__auto__);

(statearr_24422[(1)] = (1));

return statearr_24422;
});
var cljs$core$async$state_machine__20554__auto____1 = (function (state_24396){
while(true){
var ret_value__20555__auto__ = (function (){try{while(true){
var result__20556__auto__ = switch__20553__auto__.call(null,state_24396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20556__auto__;
}
break;
}
}catch (e24423){if((e24423 instanceof Object)){
var ex__20557__auto__ = e24423;
var statearr_24424_24445 = state_24396;
(statearr_24424_24445[(5)] = ex__20557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24446 = state_24396;
state_24396 = G__24446;
continue;
} else {
return ret_value__20555__auto__;
}
break;
}
});
cljs$core$async$state_machine__20554__auto__ = function(state_24396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20554__auto____1.call(this,state_24396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20554__auto____0;
cljs$core$async$state_machine__20554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20554__auto____1;
return cljs$core$async$state_machine__20554__auto__;
})()
;})(switch__20553__auto__,c__20574__auto___24430,out))
})();
var state__20576__auto__ = (function (){var statearr_24425 = f__20575__auto__.call(null);
(statearr_24425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20574__auto___24430);

return statearr_24425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20576__auto__);
});})(c__20574__auto___24430,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1471682746179