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
var args21674 = [];
var len__19529__auto___21680 = arguments.length;
var i__19530__auto___21681 = (0);
while(true){
if((i__19530__auto___21681 < len__19529__auto___21680)){
args21674.push((arguments[i__19530__auto___21681]));

var G__21682 = (i__19530__auto___21681 + (1));
i__19530__auto___21681 = G__21682;
continue;
} else {
}
break;
}

var G__21676 = args21674.length;
switch (G__21676) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21674.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21677 = (function (f,blockable,meta21678){
this.f = f;
this.blockable = blockable;
this.meta21678 = meta21678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21679,meta21678__$1){
var self__ = this;
var _21679__$1 = this;
return (new cljs.core.async.t_cljs$core$async21677(self__.f,self__.blockable,meta21678__$1));
});

cljs.core.async.t_cljs$core$async21677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21679){
var self__ = this;
var _21679__$1 = this;
return self__.meta21678;
});

cljs.core.async.t_cljs$core$async21677.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21677.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21678","meta21678",-427704983,null)], null);
});

cljs.core.async.t_cljs$core$async21677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21677";

cljs.core.async.t_cljs$core$async21677.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async21677");
});

cljs.core.async.__GT_t_cljs$core$async21677 = (function cljs$core$async$__GT_t_cljs$core$async21677(f__$1,blockable__$1,meta21678){
return (new cljs.core.async.t_cljs$core$async21677(f__$1,blockable__$1,meta21678));
});

}

return (new cljs.core.async.t_cljs$core$async21677(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args21686 = [];
var len__19529__auto___21689 = arguments.length;
var i__19530__auto___21690 = (0);
while(true){
if((i__19530__auto___21690 < len__19529__auto___21689)){
args21686.push((arguments[i__19530__auto___21690]));

var G__21691 = (i__19530__auto___21690 + (1));
i__19530__auto___21690 = G__21691;
continue;
} else {
}
break;
}

var G__21688 = args21686.length;
switch (G__21688) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21686.length)].join('')));

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
var args21693 = [];
var len__19529__auto___21696 = arguments.length;
var i__19530__auto___21697 = (0);
while(true){
if((i__19530__auto___21697 < len__19529__auto___21696)){
args21693.push((arguments[i__19530__auto___21697]));

var G__21698 = (i__19530__auto___21697 + (1));
i__19530__auto___21697 = G__21698;
continue;
} else {
}
break;
}

var G__21695 = args21693.length;
switch (G__21695) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21693.length)].join('')));

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
var args21700 = [];
var len__19529__auto___21703 = arguments.length;
var i__19530__auto___21704 = (0);
while(true){
if((i__19530__auto___21704 < len__19529__auto___21703)){
args21700.push((arguments[i__19530__auto___21704]));

var G__21705 = (i__19530__auto___21704 + (1));
i__19530__auto___21704 = G__21705;
continue;
} else {
}
break;
}

var G__21702 = args21700.length;
switch (G__21702) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21700.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21707 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21707);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21707,ret){
return (function (){
return fn1.call(null,val_21707);
});})(val_21707,ret))
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
var args21708 = [];
var len__19529__auto___21711 = arguments.length;
var i__19530__auto___21712 = (0);
while(true){
if((i__19530__auto___21712 < len__19529__auto___21711)){
args21708.push((arguments[i__19530__auto___21712]));

var G__21713 = (i__19530__auto___21712 + (1));
i__19530__auto___21712 = G__21713;
continue;
} else {
}
break;
}

var G__21710 = args21708.length;
switch (G__21710) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21708.length)].join('')));

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
var n__19374__auto___21715 = n;
var x_21716 = (0);
while(true){
if((x_21716 < n__19374__auto___21715)){
(a[x_21716] = (0));

var G__21717 = (x_21716 + (1));
x_21716 = G__21717;
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

var G__21718 = (i + (1));
i = G__21718;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21722 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21722 = (function (alt_flag,flag,meta21723){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21723 = meta21723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21724,meta21723__$1){
var self__ = this;
var _21724__$1 = this;
return (new cljs.core.async.t_cljs$core$async21722(self__.alt_flag,self__.flag,meta21723__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21722.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21724){
var self__ = this;
var _21724__$1 = this;
return self__.meta21723;
});})(flag))
;

cljs.core.async.t_cljs$core$async21722.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21722.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21722.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21723","meta21723",-32117028,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21722.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21722";

cljs.core.async.t_cljs$core$async21722.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async21722");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21722 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21722(alt_flag__$1,flag__$1,meta21723){
return (new cljs.core.async.t_cljs$core$async21722(alt_flag__$1,flag__$1,meta21723));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21722(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21728 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21728 = (function (alt_handler,flag,cb,meta21729){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21729 = meta21729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21730,meta21729__$1){
var self__ = this;
var _21730__$1 = this;
return (new cljs.core.async.t_cljs$core$async21728(self__.alt_handler,self__.flag,self__.cb,meta21729__$1));
});

cljs.core.async.t_cljs$core$async21728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21730){
var self__ = this;
var _21730__$1 = this;
return self__.meta21729;
});

cljs.core.async.t_cljs$core$async21728.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21728.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21728.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21728.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21729","meta21729",1076935679,null)], null);
});

cljs.core.async.t_cljs$core$async21728.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21728";

cljs.core.async.t_cljs$core$async21728.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async21728");
});

cljs.core.async.__GT_t_cljs$core$async21728 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21728(alt_handler__$1,flag__$1,cb__$1,meta21729){
return (new cljs.core.async.t_cljs$core$async21728(alt_handler__$1,flag__$1,cb__$1,meta21729));
});

}

return (new cljs.core.async.t_cljs$core$async21728(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21731_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21731_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21732_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21732_SHARP_,port], null));
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
var G__21733 = (i + (1));
i = G__21733;
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
var len__19529__auto___21739 = arguments.length;
var i__19530__auto___21740 = (0);
while(true){
if((i__19530__auto___21740 < len__19529__auto___21739)){
args__19536__auto__.push((arguments[i__19530__auto___21740]));

var G__21741 = (i__19530__auto___21740 + (1));
i__19530__auto___21740 = G__21741;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21736){
var map__21737 = p__21736;
var map__21737__$1 = ((((!((map__21737 == null)))?((((map__21737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21737):map__21737);
var opts = map__21737__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21734){
var G__21735 = cljs.core.first.call(null,seq21734);
var seq21734__$1 = cljs.core.next.call(null,seq21734);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21735,seq21734__$1);
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
var args21742 = [];
var len__19529__auto___21792 = arguments.length;
var i__19530__auto___21793 = (0);
while(true){
if((i__19530__auto___21793 < len__19529__auto___21792)){
args21742.push((arguments[i__19530__auto___21793]));

var G__21794 = (i__19530__auto___21793 + (1));
i__19530__auto___21793 = G__21794;
continue;
} else {
}
break;
}

var G__21744 = args21742.length;
switch (G__21744) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21742.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21629__auto___21796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto___21796){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto___21796){
return (function (state_21768){
var state_val_21769 = (state_21768[(1)]);
if((state_val_21769 === (7))){
var inst_21764 = (state_21768[(2)]);
var state_21768__$1 = state_21768;
var statearr_21770_21797 = state_21768__$1;
(statearr_21770_21797[(2)] = inst_21764);

(statearr_21770_21797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21769 === (1))){
var state_21768__$1 = state_21768;
var statearr_21771_21798 = state_21768__$1;
(statearr_21771_21798[(2)] = null);

(statearr_21771_21798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21769 === (4))){
var inst_21747 = (state_21768[(7)]);
var inst_21747__$1 = (state_21768[(2)]);
var inst_21748 = (inst_21747__$1 == null);
var state_21768__$1 = (function (){var statearr_21772 = state_21768;
(statearr_21772[(7)] = inst_21747__$1);

return statearr_21772;
})();
if(cljs.core.truth_(inst_21748)){
var statearr_21773_21799 = state_21768__$1;
(statearr_21773_21799[(1)] = (5));

} else {
var statearr_21774_21800 = state_21768__$1;
(statearr_21774_21800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21769 === (13))){
var state_21768__$1 = state_21768;
var statearr_21775_21801 = state_21768__$1;
(statearr_21775_21801[(2)] = null);

(statearr_21775_21801[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21769 === (6))){
var inst_21747 = (state_21768[(7)]);
var state_21768__$1 = state_21768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21768__$1,(11),to,inst_21747);
} else {
if((state_val_21769 === (3))){
var inst_21766 = (state_21768[(2)]);
var state_21768__$1 = state_21768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21768__$1,inst_21766);
} else {
if((state_val_21769 === (12))){
var state_21768__$1 = state_21768;
var statearr_21776_21802 = state_21768__$1;
(statearr_21776_21802[(2)] = null);

(statearr_21776_21802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21769 === (2))){
var state_21768__$1 = state_21768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21768__$1,(4),from);
} else {
if((state_val_21769 === (11))){
var inst_21757 = (state_21768[(2)]);
var state_21768__$1 = state_21768;
if(cljs.core.truth_(inst_21757)){
var statearr_21777_21803 = state_21768__$1;
(statearr_21777_21803[(1)] = (12));

} else {
var statearr_21778_21804 = state_21768__$1;
(statearr_21778_21804[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21769 === (9))){
var state_21768__$1 = state_21768;
var statearr_21779_21805 = state_21768__$1;
(statearr_21779_21805[(2)] = null);

(statearr_21779_21805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21769 === (5))){
var state_21768__$1 = state_21768;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21780_21806 = state_21768__$1;
(statearr_21780_21806[(1)] = (8));

} else {
var statearr_21781_21807 = state_21768__$1;
(statearr_21781_21807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21769 === (14))){
var inst_21762 = (state_21768[(2)]);
var state_21768__$1 = state_21768;
var statearr_21782_21808 = state_21768__$1;
(statearr_21782_21808[(2)] = inst_21762);

(statearr_21782_21808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21769 === (10))){
var inst_21754 = (state_21768[(2)]);
var state_21768__$1 = state_21768;
var statearr_21783_21809 = state_21768__$1;
(statearr_21783_21809[(2)] = inst_21754);

(statearr_21783_21809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21769 === (8))){
var inst_21751 = cljs.core.async.close_BANG_.call(null,to);
var state_21768__$1 = state_21768;
var statearr_21784_21810 = state_21768__$1;
(statearr_21784_21810[(2)] = inst_21751);

(statearr_21784_21810[(1)] = (10));


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
});})(c__21629__auto___21796))
;
return ((function (switch__21517__auto__,c__21629__auto___21796){
return (function() {
var cljs$core$async$state_machine__21518__auto__ = null;
var cljs$core$async$state_machine__21518__auto____0 = (function (){
var statearr_21788 = [null,null,null,null,null,null,null,null];
(statearr_21788[(0)] = cljs$core$async$state_machine__21518__auto__);

(statearr_21788[(1)] = (1));

return statearr_21788;
});
var cljs$core$async$state_machine__21518__auto____1 = (function (state_21768){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_21768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e21789){if((e21789 instanceof Object)){
var ex__21521__auto__ = e21789;
var statearr_21790_21811 = state_21768;
(statearr_21790_21811[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21812 = state_21768;
state_21768 = G__21812;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$state_machine__21518__auto__ = function(state_21768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21518__auto____1.call(this,state_21768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21518__auto____0;
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21518__auto____1;
return cljs$core$async$state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto___21796))
})();
var state__21631__auto__ = (function (){var statearr_21791 = f__21630__auto__.call(null);
(statearr_21791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto___21796);

return statearr_21791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto___21796))
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
return (function (p__21996){
var vec__21997 = p__21996;
var v = cljs.core.nth.call(null,vec__21997,(0),null);
var p = cljs.core.nth.call(null,vec__21997,(1),null);
var job = vec__21997;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21629__auto___22179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto___22179,res,vec__21997,v,p,job,jobs,results){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto___22179,res,vec__21997,v,p,job,jobs,results){
return (function (state_22002){
var state_val_22003 = (state_22002[(1)]);
if((state_val_22003 === (1))){
var state_22002__$1 = state_22002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22002__$1,(2),res,v);
} else {
if((state_val_22003 === (2))){
var inst_21999 = (state_22002[(2)]);
var inst_22000 = cljs.core.async.close_BANG_.call(null,res);
var state_22002__$1 = (function (){var statearr_22004 = state_22002;
(statearr_22004[(7)] = inst_21999);

return statearr_22004;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22002__$1,inst_22000);
} else {
return null;
}
}
});})(c__21629__auto___22179,res,vec__21997,v,p,job,jobs,results))
;
return ((function (switch__21517__auto__,c__21629__auto___22179,res,vec__21997,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____0 = (function (){
var statearr_22008 = [null,null,null,null,null,null,null,null];
(statearr_22008[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__);

(statearr_22008[(1)] = (1));

return statearr_22008;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____1 = (function (state_22002){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_22002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e22009){if((e22009 instanceof Object)){
var ex__21521__auto__ = e22009;
var statearr_22010_22180 = state_22002;
(statearr_22010_22180[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22181 = state_22002;
state_22002 = G__22181;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__ = function(state_22002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____1.call(this,state_22002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto___22179,res,vec__21997,v,p,job,jobs,results))
})();
var state__21631__auto__ = (function (){var statearr_22011 = f__21630__auto__.call(null);
(statearr_22011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto___22179);

return statearr_22011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto___22179,res,vec__21997,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22012){
var vec__22013 = p__22012;
var v = cljs.core.nth.call(null,vec__22013,(0),null);
var p = cljs.core.nth.call(null,vec__22013,(1),null);
var job = vec__22013;
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
var n__19374__auto___22182 = n;
var __22183 = (0);
while(true){
if((__22183 < n__19374__auto___22182)){
var G__22014_22184 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22014_22184) {
case "compute":
var c__21629__auto___22186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22183,c__21629__auto___22186,G__22014_22184,n__19374__auto___22182,jobs,results,process,async){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (__22183,c__21629__auto___22186,G__22014_22184,n__19374__auto___22182,jobs,results,process,async){
return (function (state_22027){
var state_val_22028 = (state_22027[(1)]);
if((state_val_22028 === (1))){
var state_22027__$1 = state_22027;
var statearr_22029_22187 = state_22027__$1;
(statearr_22029_22187[(2)] = null);

(statearr_22029_22187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22028 === (2))){
var state_22027__$1 = state_22027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22027__$1,(4),jobs);
} else {
if((state_val_22028 === (3))){
var inst_22025 = (state_22027[(2)]);
var state_22027__$1 = state_22027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22027__$1,inst_22025);
} else {
if((state_val_22028 === (4))){
var inst_22017 = (state_22027[(2)]);
var inst_22018 = process.call(null,inst_22017);
var state_22027__$1 = state_22027;
if(cljs.core.truth_(inst_22018)){
var statearr_22030_22188 = state_22027__$1;
(statearr_22030_22188[(1)] = (5));

} else {
var statearr_22031_22189 = state_22027__$1;
(statearr_22031_22189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22028 === (5))){
var state_22027__$1 = state_22027;
var statearr_22032_22190 = state_22027__$1;
(statearr_22032_22190[(2)] = null);

(statearr_22032_22190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22028 === (6))){
var state_22027__$1 = state_22027;
var statearr_22033_22191 = state_22027__$1;
(statearr_22033_22191[(2)] = null);

(statearr_22033_22191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22028 === (7))){
var inst_22023 = (state_22027[(2)]);
var state_22027__$1 = state_22027;
var statearr_22034_22192 = state_22027__$1;
(statearr_22034_22192[(2)] = inst_22023);

(statearr_22034_22192[(1)] = (3));


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
});})(__22183,c__21629__auto___22186,G__22014_22184,n__19374__auto___22182,jobs,results,process,async))
;
return ((function (__22183,switch__21517__auto__,c__21629__auto___22186,G__22014_22184,n__19374__auto___22182,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____0 = (function (){
var statearr_22038 = [null,null,null,null,null,null,null];
(statearr_22038[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__);

(statearr_22038[(1)] = (1));

return statearr_22038;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____1 = (function (state_22027){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_22027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e22039){if((e22039 instanceof Object)){
var ex__21521__auto__ = e22039;
var statearr_22040_22193 = state_22027;
(statearr_22040_22193[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22194 = state_22027;
state_22027 = G__22194;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__ = function(state_22027){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____1.call(this,state_22027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__;
})()
;})(__22183,switch__21517__auto__,c__21629__auto___22186,G__22014_22184,n__19374__auto___22182,jobs,results,process,async))
})();
var state__21631__auto__ = (function (){var statearr_22041 = f__21630__auto__.call(null);
(statearr_22041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto___22186);

return statearr_22041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(__22183,c__21629__auto___22186,G__22014_22184,n__19374__auto___22182,jobs,results,process,async))
);


break;
case "async":
var c__21629__auto___22195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22183,c__21629__auto___22195,G__22014_22184,n__19374__auto___22182,jobs,results,process,async){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (__22183,c__21629__auto___22195,G__22014_22184,n__19374__auto___22182,jobs,results,process,async){
return (function (state_22054){
var state_val_22055 = (state_22054[(1)]);
if((state_val_22055 === (1))){
var state_22054__$1 = state_22054;
var statearr_22056_22196 = state_22054__$1;
(statearr_22056_22196[(2)] = null);

(statearr_22056_22196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (2))){
var state_22054__$1 = state_22054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22054__$1,(4),jobs);
} else {
if((state_val_22055 === (3))){
var inst_22052 = (state_22054[(2)]);
var state_22054__$1 = state_22054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22054__$1,inst_22052);
} else {
if((state_val_22055 === (4))){
var inst_22044 = (state_22054[(2)]);
var inst_22045 = async.call(null,inst_22044);
var state_22054__$1 = state_22054;
if(cljs.core.truth_(inst_22045)){
var statearr_22057_22197 = state_22054__$1;
(statearr_22057_22197[(1)] = (5));

} else {
var statearr_22058_22198 = state_22054__$1;
(statearr_22058_22198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (5))){
var state_22054__$1 = state_22054;
var statearr_22059_22199 = state_22054__$1;
(statearr_22059_22199[(2)] = null);

(statearr_22059_22199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (6))){
var state_22054__$1 = state_22054;
var statearr_22060_22200 = state_22054__$1;
(statearr_22060_22200[(2)] = null);

(statearr_22060_22200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (7))){
var inst_22050 = (state_22054[(2)]);
var state_22054__$1 = state_22054;
var statearr_22061_22201 = state_22054__$1;
(statearr_22061_22201[(2)] = inst_22050);

(statearr_22061_22201[(1)] = (3));


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
});})(__22183,c__21629__auto___22195,G__22014_22184,n__19374__auto___22182,jobs,results,process,async))
;
return ((function (__22183,switch__21517__auto__,c__21629__auto___22195,G__22014_22184,n__19374__auto___22182,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____0 = (function (){
var statearr_22065 = [null,null,null,null,null,null,null];
(statearr_22065[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__);

(statearr_22065[(1)] = (1));

return statearr_22065;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____1 = (function (state_22054){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_22054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e22066){if((e22066 instanceof Object)){
var ex__21521__auto__ = e22066;
var statearr_22067_22202 = state_22054;
(statearr_22067_22202[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22203 = state_22054;
state_22054 = G__22203;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__ = function(state_22054){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____1.call(this,state_22054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__;
})()
;})(__22183,switch__21517__auto__,c__21629__auto___22195,G__22014_22184,n__19374__auto___22182,jobs,results,process,async))
})();
var state__21631__auto__ = (function (){var statearr_22068 = f__21630__auto__.call(null);
(statearr_22068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto___22195);

return statearr_22068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(__22183,c__21629__auto___22195,G__22014_22184,n__19374__auto___22182,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22204 = (__22183 + (1));
__22183 = G__22204;
continue;
} else {
}
break;
}

var c__21629__auto___22205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto___22205,jobs,results,process,async){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto___22205,jobs,results,process,async){
return (function (state_22090){
var state_val_22091 = (state_22090[(1)]);
if((state_val_22091 === (1))){
var state_22090__$1 = state_22090;
var statearr_22092_22206 = state_22090__$1;
(statearr_22092_22206[(2)] = null);

(statearr_22092_22206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22091 === (2))){
var state_22090__$1 = state_22090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22090__$1,(4),from);
} else {
if((state_val_22091 === (3))){
var inst_22088 = (state_22090[(2)]);
var state_22090__$1 = state_22090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22090__$1,inst_22088);
} else {
if((state_val_22091 === (4))){
var inst_22071 = (state_22090[(7)]);
var inst_22071__$1 = (state_22090[(2)]);
var inst_22072 = (inst_22071__$1 == null);
var state_22090__$1 = (function (){var statearr_22093 = state_22090;
(statearr_22093[(7)] = inst_22071__$1);

return statearr_22093;
})();
if(cljs.core.truth_(inst_22072)){
var statearr_22094_22207 = state_22090__$1;
(statearr_22094_22207[(1)] = (5));

} else {
var statearr_22095_22208 = state_22090__$1;
(statearr_22095_22208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22091 === (5))){
var inst_22074 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22090__$1 = state_22090;
var statearr_22096_22209 = state_22090__$1;
(statearr_22096_22209[(2)] = inst_22074);

(statearr_22096_22209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22091 === (6))){
var inst_22071 = (state_22090[(7)]);
var inst_22076 = (state_22090[(8)]);
var inst_22076__$1 = cljs.core.async.chan.call(null,(1));
var inst_22077 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22078 = [inst_22071,inst_22076__$1];
var inst_22079 = (new cljs.core.PersistentVector(null,2,(5),inst_22077,inst_22078,null));
var state_22090__$1 = (function (){var statearr_22097 = state_22090;
(statearr_22097[(8)] = inst_22076__$1);

return statearr_22097;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22090__$1,(8),jobs,inst_22079);
} else {
if((state_val_22091 === (7))){
var inst_22086 = (state_22090[(2)]);
var state_22090__$1 = state_22090;
var statearr_22098_22210 = state_22090__$1;
(statearr_22098_22210[(2)] = inst_22086);

(statearr_22098_22210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22091 === (8))){
var inst_22076 = (state_22090[(8)]);
var inst_22081 = (state_22090[(2)]);
var state_22090__$1 = (function (){var statearr_22099 = state_22090;
(statearr_22099[(9)] = inst_22081);

return statearr_22099;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22090__$1,(9),results,inst_22076);
} else {
if((state_val_22091 === (9))){
var inst_22083 = (state_22090[(2)]);
var state_22090__$1 = (function (){var statearr_22100 = state_22090;
(statearr_22100[(10)] = inst_22083);

return statearr_22100;
})();
var statearr_22101_22211 = state_22090__$1;
(statearr_22101_22211[(2)] = null);

(statearr_22101_22211[(1)] = (2));


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
});})(c__21629__auto___22205,jobs,results,process,async))
;
return ((function (switch__21517__auto__,c__21629__auto___22205,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____0 = (function (){
var statearr_22105 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22105[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__);

(statearr_22105[(1)] = (1));

return statearr_22105;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____1 = (function (state_22090){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_22090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e22106){if((e22106 instanceof Object)){
var ex__21521__auto__ = e22106;
var statearr_22107_22212 = state_22090;
(statearr_22107_22212[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22213 = state_22090;
state_22090 = G__22213;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__ = function(state_22090){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____1.call(this,state_22090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto___22205,jobs,results,process,async))
})();
var state__21631__auto__ = (function (){var statearr_22108 = f__21630__auto__.call(null);
(statearr_22108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto___22205);

return statearr_22108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto___22205,jobs,results,process,async))
);


var c__21629__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto__,jobs,results,process,async){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto__,jobs,results,process,async){
return (function (state_22146){
var state_val_22147 = (state_22146[(1)]);
if((state_val_22147 === (7))){
var inst_22142 = (state_22146[(2)]);
var state_22146__$1 = state_22146;
var statearr_22148_22214 = state_22146__$1;
(statearr_22148_22214[(2)] = inst_22142);

(statearr_22148_22214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (20))){
var state_22146__$1 = state_22146;
var statearr_22149_22215 = state_22146__$1;
(statearr_22149_22215[(2)] = null);

(statearr_22149_22215[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (1))){
var state_22146__$1 = state_22146;
var statearr_22150_22216 = state_22146__$1;
(statearr_22150_22216[(2)] = null);

(statearr_22150_22216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (4))){
var inst_22111 = (state_22146[(7)]);
var inst_22111__$1 = (state_22146[(2)]);
var inst_22112 = (inst_22111__$1 == null);
var state_22146__$1 = (function (){var statearr_22151 = state_22146;
(statearr_22151[(7)] = inst_22111__$1);

return statearr_22151;
})();
if(cljs.core.truth_(inst_22112)){
var statearr_22152_22217 = state_22146__$1;
(statearr_22152_22217[(1)] = (5));

} else {
var statearr_22153_22218 = state_22146__$1;
(statearr_22153_22218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (15))){
var inst_22124 = (state_22146[(8)]);
var state_22146__$1 = state_22146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22146__$1,(18),to,inst_22124);
} else {
if((state_val_22147 === (21))){
var inst_22137 = (state_22146[(2)]);
var state_22146__$1 = state_22146;
var statearr_22154_22219 = state_22146__$1;
(statearr_22154_22219[(2)] = inst_22137);

(statearr_22154_22219[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (13))){
var inst_22139 = (state_22146[(2)]);
var state_22146__$1 = (function (){var statearr_22155 = state_22146;
(statearr_22155[(9)] = inst_22139);

return statearr_22155;
})();
var statearr_22156_22220 = state_22146__$1;
(statearr_22156_22220[(2)] = null);

(statearr_22156_22220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (6))){
var inst_22111 = (state_22146[(7)]);
var state_22146__$1 = state_22146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22146__$1,(11),inst_22111);
} else {
if((state_val_22147 === (17))){
var inst_22132 = (state_22146[(2)]);
var state_22146__$1 = state_22146;
if(cljs.core.truth_(inst_22132)){
var statearr_22157_22221 = state_22146__$1;
(statearr_22157_22221[(1)] = (19));

} else {
var statearr_22158_22222 = state_22146__$1;
(statearr_22158_22222[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (3))){
var inst_22144 = (state_22146[(2)]);
var state_22146__$1 = state_22146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22146__$1,inst_22144);
} else {
if((state_val_22147 === (12))){
var inst_22121 = (state_22146[(10)]);
var state_22146__$1 = state_22146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22146__$1,(14),inst_22121);
} else {
if((state_val_22147 === (2))){
var state_22146__$1 = state_22146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22146__$1,(4),results);
} else {
if((state_val_22147 === (19))){
var state_22146__$1 = state_22146;
var statearr_22159_22223 = state_22146__$1;
(statearr_22159_22223[(2)] = null);

(statearr_22159_22223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (11))){
var inst_22121 = (state_22146[(2)]);
var state_22146__$1 = (function (){var statearr_22160 = state_22146;
(statearr_22160[(10)] = inst_22121);

return statearr_22160;
})();
var statearr_22161_22224 = state_22146__$1;
(statearr_22161_22224[(2)] = null);

(statearr_22161_22224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (9))){
var state_22146__$1 = state_22146;
var statearr_22162_22225 = state_22146__$1;
(statearr_22162_22225[(2)] = null);

(statearr_22162_22225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (5))){
var state_22146__$1 = state_22146;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22163_22226 = state_22146__$1;
(statearr_22163_22226[(1)] = (8));

} else {
var statearr_22164_22227 = state_22146__$1;
(statearr_22164_22227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (14))){
var inst_22124 = (state_22146[(8)]);
var inst_22126 = (state_22146[(11)]);
var inst_22124__$1 = (state_22146[(2)]);
var inst_22125 = (inst_22124__$1 == null);
var inst_22126__$1 = cljs.core.not.call(null,inst_22125);
var state_22146__$1 = (function (){var statearr_22165 = state_22146;
(statearr_22165[(8)] = inst_22124__$1);

(statearr_22165[(11)] = inst_22126__$1);

return statearr_22165;
})();
if(inst_22126__$1){
var statearr_22166_22228 = state_22146__$1;
(statearr_22166_22228[(1)] = (15));

} else {
var statearr_22167_22229 = state_22146__$1;
(statearr_22167_22229[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (16))){
var inst_22126 = (state_22146[(11)]);
var state_22146__$1 = state_22146;
var statearr_22168_22230 = state_22146__$1;
(statearr_22168_22230[(2)] = inst_22126);

(statearr_22168_22230[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (10))){
var inst_22118 = (state_22146[(2)]);
var state_22146__$1 = state_22146;
var statearr_22169_22231 = state_22146__$1;
(statearr_22169_22231[(2)] = inst_22118);

(statearr_22169_22231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (18))){
var inst_22129 = (state_22146[(2)]);
var state_22146__$1 = state_22146;
var statearr_22170_22232 = state_22146__$1;
(statearr_22170_22232[(2)] = inst_22129);

(statearr_22170_22232[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (8))){
var inst_22115 = cljs.core.async.close_BANG_.call(null,to);
var state_22146__$1 = state_22146;
var statearr_22171_22233 = state_22146__$1;
(statearr_22171_22233[(2)] = inst_22115);

(statearr_22171_22233[(1)] = (10));


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
});})(c__21629__auto__,jobs,results,process,async))
;
return ((function (switch__21517__auto__,c__21629__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____0 = (function (){
var statearr_22175 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22175[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__);

(statearr_22175[(1)] = (1));

return statearr_22175;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____1 = (function (state_22146){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_22146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e22176){if((e22176 instanceof Object)){
var ex__21521__auto__ = e22176;
var statearr_22177_22234 = state_22146;
(statearr_22177_22234[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22235 = state_22146;
state_22146 = G__22235;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__ = function(state_22146){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____1.call(this,state_22146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto__,jobs,results,process,async))
})();
var state__21631__auto__ = (function (){var statearr_22178 = f__21630__auto__.call(null);
(statearr_22178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto__);

return statearr_22178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto__,jobs,results,process,async))
);

return c__21629__auto__;
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
var args22236 = [];
var len__19529__auto___22239 = arguments.length;
var i__19530__auto___22240 = (0);
while(true){
if((i__19530__auto___22240 < len__19529__auto___22239)){
args22236.push((arguments[i__19530__auto___22240]));

var G__22241 = (i__19530__auto___22240 + (1));
i__19530__auto___22240 = G__22241;
continue;
} else {
}
break;
}

var G__22238 = args22236.length;
switch (G__22238) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22236.length)].join('')));

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
var args22243 = [];
var len__19529__auto___22246 = arguments.length;
var i__19530__auto___22247 = (0);
while(true){
if((i__19530__auto___22247 < len__19529__auto___22246)){
args22243.push((arguments[i__19530__auto___22247]));

var G__22248 = (i__19530__auto___22247 + (1));
i__19530__auto___22247 = G__22248;
continue;
} else {
}
break;
}

var G__22245 = args22243.length;
switch (G__22245) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22243.length)].join('')));

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
var args22250 = [];
var len__19529__auto___22303 = arguments.length;
var i__19530__auto___22304 = (0);
while(true){
if((i__19530__auto___22304 < len__19529__auto___22303)){
args22250.push((arguments[i__19530__auto___22304]));

var G__22305 = (i__19530__auto___22304 + (1));
i__19530__auto___22304 = G__22305;
continue;
} else {
}
break;
}

var G__22252 = args22250.length;
switch (G__22252) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22250.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21629__auto___22307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto___22307,tc,fc){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto___22307,tc,fc){
return (function (state_22278){
var state_val_22279 = (state_22278[(1)]);
if((state_val_22279 === (7))){
var inst_22274 = (state_22278[(2)]);
var state_22278__$1 = state_22278;
var statearr_22280_22308 = state_22278__$1;
(statearr_22280_22308[(2)] = inst_22274);

(statearr_22280_22308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22279 === (1))){
var state_22278__$1 = state_22278;
var statearr_22281_22309 = state_22278__$1;
(statearr_22281_22309[(2)] = null);

(statearr_22281_22309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22279 === (4))){
var inst_22255 = (state_22278[(7)]);
var inst_22255__$1 = (state_22278[(2)]);
var inst_22256 = (inst_22255__$1 == null);
var state_22278__$1 = (function (){var statearr_22282 = state_22278;
(statearr_22282[(7)] = inst_22255__$1);

return statearr_22282;
})();
if(cljs.core.truth_(inst_22256)){
var statearr_22283_22310 = state_22278__$1;
(statearr_22283_22310[(1)] = (5));

} else {
var statearr_22284_22311 = state_22278__$1;
(statearr_22284_22311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22279 === (13))){
var state_22278__$1 = state_22278;
var statearr_22285_22312 = state_22278__$1;
(statearr_22285_22312[(2)] = null);

(statearr_22285_22312[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22279 === (6))){
var inst_22255 = (state_22278[(7)]);
var inst_22261 = p.call(null,inst_22255);
var state_22278__$1 = state_22278;
if(cljs.core.truth_(inst_22261)){
var statearr_22286_22313 = state_22278__$1;
(statearr_22286_22313[(1)] = (9));

} else {
var statearr_22287_22314 = state_22278__$1;
(statearr_22287_22314[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22279 === (3))){
var inst_22276 = (state_22278[(2)]);
var state_22278__$1 = state_22278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22278__$1,inst_22276);
} else {
if((state_val_22279 === (12))){
var state_22278__$1 = state_22278;
var statearr_22288_22315 = state_22278__$1;
(statearr_22288_22315[(2)] = null);

(statearr_22288_22315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22279 === (2))){
var state_22278__$1 = state_22278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22278__$1,(4),ch);
} else {
if((state_val_22279 === (11))){
var inst_22255 = (state_22278[(7)]);
var inst_22265 = (state_22278[(2)]);
var state_22278__$1 = state_22278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22278__$1,(8),inst_22265,inst_22255);
} else {
if((state_val_22279 === (9))){
var state_22278__$1 = state_22278;
var statearr_22289_22316 = state_22278__$1;
(statearr_22289_22316[(2)] = tc);

(statearr_22289_22316[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22279 === (5))){
var inst_22258 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22259 = cljs.core.async.close_BANG_.call(null,fc);
var state_22278__$1 = (function (){var statearr_22290 = state_22278;
(statearr_22290[(8)] = inst_22258);

return statearr_22290;
})();
var statearr_22291_22317 = state_22278__$1;
(statearr_22291_22317[(2)] = inst_22259);

(statearr_22291_22317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22279 === (14))){
var inst_22272 = (state_22278[(2)]);
var state_22278__$1 = state_22278;
var statearr_22292_22318 = state_22278__$1;
(statearr_22292_22318[(2)] = inst_22272);

(statearr_22292_22318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22279 === (10))){
var state_22278__$1 = state_22278;
var statearr_22293_22319 = state_22278__$1;
(statearr_22293_22319[(2)] = fc);

(statearr_22293_22319[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22279 === (8))){
var inst_22267 = (state_22278[(2)]);
var state_22278__$1 = state_22278;
if(cljs.core.truth_(inst_22267)){
var statearr_22294_22320 = state_22278__$1;
(statearr_22294_22320[(1)] = (12));

} else {
var statearr_22295_22321 = state_22278__$1;
(statearr_22295_22321[(1)] = (13));

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
});})(c__21629__auto___22307,tc,fc))
;
return ((function (switch__21517__auto__,c__21629__auto___22307,tc,fc){
return (function() {
var cljs$core$async$state_machine__21518__auto__ = null;
var cljs$core$async$state_machine__21518__auto____0 = (function (){
var statearr_22299 = [null,null,null,null,null,null,null,null,null];
(statearr_22299[(0)] = cljs$core$async$state_machine__21518__auto__);

(statearr_22299[(1)] = (1));

return statearr_22299;
});
var cljs$core$async$state_machine__21518__auto____1 = (function (state_22278){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_22278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e22300){if((e22300 instanceof Object)){
var ex__21521__auto__ = e22300;
var statearr_22301_22322 = state_22278;
(statearr_22301_22322[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22323 = state_22278;
state_22278 = G__22323;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$state_machine__21518__auto__ = function(state_22278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21518__auto____1.call(this,state_22278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21518__auto____0;
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21518__auto____1;
return cljs$core$async$state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto___22307,tc,fc))
})();
var state__21631__auto__ = (function (){var statearr_22302 = f__21630__auto__.call(null);
(statearr_22302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto___22307);

return statearr_22302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto___22307,tc,fc))
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
var c__21629__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto__){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto__){
return (function (state_22387){
var state_val_22388 = (state_22387[(1)]);
if((state_val_22388 === (7))){
var inst_22383 = (state_22387[(2)]);
var state_22387__$1 = state_22387;
var statearr_22389_22410 = state_22387__$1;
(statearr_22389_22410[(2)] = inst_22383);

(statearr_22389_22410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22388 === (1))){
var inst_22367 = init;
var state_22387__$1 = (function (){var statearr_22390 = state_22387;
(statearr_22390[(7)] = inst_22367);

return statearr_22390;
})();
var statearr_22391_22411 = state_22387__$1;
(statearr_22391_22411[(2)] = null);

(statearr_22391_22411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22388 === (4))){
var inst_22370 = (state_22387[(8)]);
var inst_22370__$1 = (state_22387[(2)]);
var inst_22371 = (inst_22370__$1 == null);
var state_22387__$1 = (function (){var statearr_22392 = state_22387;
(statearr_22392[(8)] = inst_22370__$1);

return statearr_22392;
})();
if(cljs.core.truth_(inst_22371)){
var statearr_22393_22412 = state_22387__$1;
(statearr_22393_22412[(1)] = (5));

} else {
var statearr_22394_22413 = state_22387__$1;
(statearr_22394_22413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22388 === (6))){
var inst_22367 = (state_22387[(7)]);
var inst_22374 = (state_22387[(9)]);
var inst_22370 = (state_22387[(8)]);
var inst_22374__$1 = f.call(null,inst_22367,inst_22370);
var inst_22375 = cljs.core.reduced_QMARK_.call(null,inst_22374__$1);
var state_22387__$1 = (function (){var statearr_22395 = state_22387;
(statearr_22395[(9)] = inst_22374__$1);

return statearr_22395;
})();
if(inst_22375){
var statearr_22396_22414 = state_22387__$1;
(statearr_22396_22414[(1)] = (8));

} else {
var statearr_22397_22415 = state_22387__$1;
(statearr_22397_22415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22388 === (3))){
var inst_22385 = (state_22387[(2)]);
var state_22387__$1 = state_22387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22387__$1,inst_22385);
} else {
if((state_val_22388 === (2))){
var state_22387__$1 = state_22387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22387__$1,(4),ch);
} else {
if((state_val_22388 === (9))){
var inst_22374 = (state_22387[(9)]);
var inst_22367 = inst_22374;
var state_22387__$1 = (function (){var statearr_22398 = state_22387;
(statearr_22398[(7)] = inst_22367);

return statearr_22398;
})();
var statearr_22399_22416 = state_22387__$1;
(statearr_22399_22416[(2)] = null);

(statearr_22399_22416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22388 === (5))){
var inst_22367 = (state_22387[(7)]);
var state_22387__$1 = state_22387;
var statearr_22400_22417 = state_22387__$1;
(statearr_22400_22417[(2)] = inst_22367);

(statearr_22400_22417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22388 === (10))){
var inst_22381 = (state_22387[(2)]);
var state_22387__$1 = state_22387;
var statearr_22401_22418 = state_22387__$1;
(statearr_22401_22418[(2)] = inst_22381);

(statearr_22401_22418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22388 === (8))){
var inst_22374 = (state_22387[(9)]);
var inst_22377 = cljs.core.deref.call(null,inst_22374);
var state_22387__$1 = state_22387;
var statearr_22402_22419 = state_22387__$1;
(statearr_22402_22419[(2)] = inst_22377);

(statearr_22402_22419[(1)] = (10));


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
});})(c__21629__auto__))
;
return ((function (switch__21517__auto__,c__21629__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21518__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21518__auto____0 = (function (){
var statearr_22406 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22406[(0)] = cljs$core$async$reduce_$_state_machine__21518__auto__);

(statearr_22406[(1)] = (1));

return statearr_22406;
});
var cljs$core$async$reduce_$_state_machine__21518__auto____1 = (function (state_22387){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_22387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e22407){if((e22407 instanceof Object)){
var ex__21521__auto__ = e22407;
var statearr_22408_22420 = state_22387;
(statearr_22408_22420[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22421 = state_22387;
state_22387 = G__22421;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21518__auto__ = function(state_22387){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21518__auto____1.call(this,state_22387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21518__auto____0;
cljs$core$async$reduce_$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21518__auto____1;
return cljs$core$async$reduce_$_state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto__))
})();
var state__21631__auto__ = (function (){var statearr_22409 = f__21630__auto__.call(null);
(statearr_22409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto__);

return statearr_22409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto__))
);

return c__21629__auto__;
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
var args22422 = [];
var len__19529__auto___22474 = arguments.length;
var i__19530__auto___22475 = (0);
while(true){
if((i__19530__auto___22475 < len__19529__auto___22474)){
args22422.push((arguments[i__19530__auto___22475]));

var G__22476 = (i__19530__auto___22475 + (1));
i__19530__auto___22475 = G__22476;
continue;
} else {
}
break;
}

var G__22424 = args22422.length;
switch (G__22424) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22422.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21629__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto__){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto__){
return (function (state_22449){
var state_val_22450 = (state_22449[(1)]);
if((state_val_22450 === (7))){
var inst_22431 = (state_22449[(2)]);
var state_22449__$1 = state_22449;
var statearr_22451_22478 = state_22449__$1;
(statearr_22451_22478[(2)] = inst_22431);

(statearr_22451_22478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22450 === (1))){
var inst_22425 = cljs.core.seq.call(null,coll);
var inst_22426 = inst_22425;
var state_22449__$1 = (function (){var statearr_22452 = state_22449;
(statearr_22452[(7)] = inst_22426);

return statearr_22452;
})();
var statearr_22453_22479 = state_22449__$1;
(statearr_22453_22479[(2)] = null);

(statearr_22453_22479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22450 === (4))){
var inst_22426 = (state_22449[(7)]);
var inst_22429 = cljs.core.first.call(null,inst_22426);
var state_22449__$1 = state_22449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22449__$1,(7),ch,inst_22429);
} else {
if((state_val_22450 === (13))){
var inst_22443 = (state_22449[(2)]);
var state_22449__$1 = state_22449;
var statearr_22454_22480 = state_22449__$1;
(statearr_22454_22480[(2)] = inst_22443);

(statearr_22454_22480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22450 === (6))){
var inst_22434 = (state_22449[(2)]);
var state_22449__$1 = state_22449;
if(cljs.core.truth_(inst_22434)){
var statearr_22455_22481 = state_22449__$1;
(statearr_22455_22481[(1)] = (8));

} else {
var statearr_22456_22482 = state_22449__$1;
(statearr_22456_22482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22450 === (3))){
var inst_22447 = (state_22449[(2)]);
var state_22449__$1 = state_22449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22449__$1,inst_22447);
} else {
if((state_val_22450 === (12))){
var state_22449__$1 = state_22449;
var statearr_22457_22483 = state_22449__$1;
(statearr_22457_22483[(2)] = null);

(statearr_22457_22483[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22450 === (2))){
var inst_22426 = (state_22449[(7)]);
var state_22449__$1 = state_22449;
if(cljs.core.truth_(inst_22426)){
var statearr_22458_22484 = state_22449__$1;
(statearr_22458_22484[(1)] = (4));

} else {
var statearr_22459_22485 = state_22449__$1;
(statearr_22459_22485[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22450 === (11))){
var inst_22440 = cljs.core.async.close_BANG_.call(null,ch);
var state_22449__$1 = state_22449;
var statearr_22460_22486 = state_22449__$1;
(statearr_22460_22486[(2)] = inst_22440);

(statearr_22460_22486[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22450 === (9))){
var state_22449__$1 = state_22449;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22461_22487 = state_22449__$1;
(statearr_22461_22487[(1)] = (11));

} else {
var statearr_22462_22488 = state_22449__$1;
(statearr_22462_22488[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22450 === (5))){
var inst_22426 = (state_22449[(7)]);
var state_22449__$1 = state_22449;
var statearr_22463_22489 = state_22449__$1;
(statearr_22463_22489[(2)] = inst_22426);

(statearr_22463_22489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22450 === (10))){
var inst_22445 = (state_22449[(2)]);
var state_22449__$1 = state_22449;
var statearr_22464_22490 = state_22449__$1;
(statearr_22464_22490[(2)] = inst_22445);

(statearr_22464_22490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22450 === (8))){
var inst_22426 = (state_22449[(7)]);
var inst_22436 = cljs.core.next.call(null,inst_22426);
var inst_22426__$1 = inst_22436;
var state_22449__$1 = (function (){var statearr_22465 = state_22449;
(statearr_22465[(7)] = inst_22426__$1);

return statearr_22465;
})();
var statearr_22466_22491 = state_22449__$1;
(statearr_22466_22491[(2)] = null);

(statearr_22466_22491[(1)] = (2));


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
});})(c__21629__auto__))
;
return ((function (switch__21517__auto__,c__21629__auto__){
return (function() {
var cljs$core$async$state_machine__21518__auto__ = null;
var cljs$core$async$state_machine__21518__auto____0 = (function (){
var statearr_22470 = [null,null,null,null,null,null,null,null];
(statearr_22470[(0)] = cljs$core$async$state_machine__21518__auto__);

(statearr_22470[(1)] = (1));

return statearr_22470;
});
var cljs$core$async$state_machine__21518__auto____1 = (function (state_22449){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_22449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e22471){if((e22471 instanceof Object)){
var ex__21521__auto__ = e22471;
var statearr_22472_22492 = state_22449;
(statearr_22472_22492[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22493 = state_22449;
state_22449 = G__22493;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$state_machine__21518__auto__ = function(state_22449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21518__auto____1.call(this,state_22449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21518__auto____0;
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21518__auto____1;
return cljs$core$async$state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto__))
})();
var state__21631__auto__ = (function (){var statearr_22473 = f__21630__auto__.call(null);
(statearr_22473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto__);

return statearr_22473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto__))
);

return c__21629__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async22715 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22715 = (function (mult,ch,cs,meta22716){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22716 = meta22716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22717,meta22716__$1){
var self__ = this;
var _22717__$1 = this;
return (new cljs.core.async.t_cljs$core$async22715(self__.mult,self__.ch,self__.cs,meta22716__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22717){
var self__ = this;
var _22717__$1 = this;
return self__.meta22716;
});})(cs))
;

cljs.core.async.t_cljs$core$async22715.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22715.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22715.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22715.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22715.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22715.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22715.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22716","meta22716",2064372500,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22715.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22715";

cljs.core.async.t_cljs$core$async22715.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async22715");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22715 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22715(mult__$1,ch__$1,cs__$1,meta22716){
return (new cljs.core.async.t_cljs$core$async22715(mult__$1,ch__$1,cs__$1,meta22716));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22715(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21629__auto___22936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto___22936,cs,m,dchan,dctr,done){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto___22936,cs,m,dchan,dctr,done){
return (function (state_22848){
var state_val_22849 = (state_22848[(1)]);
if((state_val_22849 === (7))){
var inst_22844 = (state_22848[(2)]);
var state_22848__$1 = state_22848;
var statearr_22850_22937 = state_22848__$1;
(statearr_22850_22937[(2)] = inst_22844);

(statearr_22850_22937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (20))){
var inst_22749 = (state_22848[(7)]);
var inst_22759 = cljs.core.first.call(null,inst_22749);
var inst_22760 = cljs.core.nth.call(null,inst_22759,(0),null);
var inst_22761 = cljs.core.nth.call(null,inst_22759,(1),null);
var state_22848__$1 = (function (){var statearr_22851 = state_22848;
(statearr_22851[(8)] = inst_22760);

return statearr_22851;
})();
if(cljs.core.truth_(inst_22761)){
var statearr_22852_22938 = state_22848__$1;
(statearr_22852_22938[(1)] = (22));

} else {
var statearr_22853_22939 = state_22848__$1;
(statearr_22853_22939[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (27))){
var inst_22720 = (state_22848[(9)]);
var inst_22791 = (state_22848[(10)]);
var inst_22789 = (state_22848[(11)]);
var inst_22796 = (state_22848[(12)]);
var inst_22796__$1 = cljs.core._nth.call(null,inst_22789,inst_22791);
var inst_22797 = cljs.core.async.put_BANG_.call(null,inst_22796__$1,inst_22720,done);
var state_22848__$1 = (function (){var statearr_22854 = state_22848;
(statearr_22854[(12)] = inst_22796__$1);

return statearr_22854;
})();
if(cljs.core.truth_(inst_22797)){
var statearr_22855_22940 = state_22848__$1;
(statearr_22855_22940[(1)] = (30));

} else {
var statearr_22856_22941 = state_22848__$1;
(statearr_22856_22941[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (1))){
var state_22848__$1 = state_22848;
var statearr_22857_22942 = state_22848__$1;
(statearr_22857_22942[(2)] = null);

(statearr_22857_22942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (24))){
var inst_22749 = (state_22848[(7)]);
var inst_22766 = (state_22848[(2)]);
var inst_22767 = cljs.core.next.call(null,inst_22749);
var inst_22729 = inst_22767;
var inst_22730 = null;
var inst_22731 = (0);
var inst_22732 = (0);
var state_22848__$1 = (function (){var statearr_22858 = state_22848;
(statearr_22858[(13)] = inst_22766);

(statearr_22858[(14)] = inst_22729);

(statearr_22858[(15)] = inst_22730);

(statearr_22858[(16)] = inst_22732);

(statearr_22858[(17)] = inst_22731);

return statearr_22858;
})();
var statearr_22859_22943 = state_22848__$1;
(statearr_22859_22943[(2)] = null);

(statearr_22859_22943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (39))){
var state_22848__$1 = state_22848;
var statearr_22863_22944 = state_22848__$1;
(statearr_22863_22944[(2)] = null);

(statearr_22863_22944[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (4))){
var inst_22720 = (state_22848[(9)]);
var inst_22720__$1 = (state_22848[(2)]);
var inst_22721 = (inst_22720__$1 == null);
var state_22848__$1 = (function (){var statearr_22864 = state_22848;
(statearr_22864[(9)] = inst_22720__$1);

return statearr_22864;
})();
if(cljs.core.truth_(inst_22721)){
var statearr_22865_22945 = state_22848__$1;
(statearr_22865_22945[(1)] = (5));

} else {
var statearr_22866_22946 = state_22848__$1;
(statearr_22866_22946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (15))){
var inst_22729 = (state_22848[(14)]);
var inst_22730 = (state_22848[(15)]);
var inst_22732 = (state_22848[(16)]);
var inst_22731 = (state_22848[(17)]);
var inst_22745 = (state_22848[(2)]);
var inst_22746 = (inst_22732 + (1));
var tmp22860 = inst_22729;
var tmp22861 = inst_22730;
var tmp22862 = inst_22731;
var inst_22729__$1 = tmp22860;
var inst_22730__$1 = tmp22861;
var inst_22731__$1 = tmp22862;
var inst_22732__$1 = inst_22746;
var state_22848__$1 = (function (){var statearr_22867 = state_22848;
(statearr_22867[(18)] = inst_22745);

(statearr_22867[(14)] = inst_22729__$1);

(statearr_22867[(15)] = inst_22730__$1);

(statearr_22867[(16)] = inst_22732__$1);

(statearr_22867[(17)] = inst_22731__$1);

return statearr_22867;
})();
var statearr_22868_22947 = state_22848__$1;
(statearr_22868_22947[(2)] = null);

(statearr_22868_22947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (21))){
var inst_22770 = (state_22848[(2)]);
var state_22848__$1 = state_22848;
var statearr_22872_22948 = state_22848__$1;
(statearr_22872_22948[(2)] = inst_22770);

(statearr_22872_22948[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (31))){
var inst_22796 = (state_22848[(12)]);
var inst_22800 = done.call(null,null);
var inst_22801 = cljs.core.async.untap_STAR_.call(null,m,inst_22796);
var state_22848__$1 = (function (){var statearr_22873 = state_22848;
(statearr_22873[(19)] = inst_22800);

return statearr_22873;
})();
var statearr_22874_22949 = state_22848__$1;
(statearr_22874_22949[(2)] = inst_22801);

(statearr_22874_22949[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (32))){
var inst_22791 = (state_22848[(10)]);
var inst_22788 = (state_22848[(20)]);
var inst_22790 = (state_22848[(21)]);
var inst_22789 = (state_22848[(11)]);
var inst_22803 = (state_22848[(2)]);
var inst_22804 = (inst_22791 + (1));
var tmp22869 = inst_22788;
var tmp22870 = inst_22790;
var tmp22871 = inst_22789;
var inst_22788__$1 = tmp22869;
var inst_22789__$1 = tmp22871;
var inst_22790__$1 = tmp22870;
var inst_22791__$1 = inst_22804;
var state_22848__$1 = (function (){var statearr_22875 = state_22848;
(statearr_22875[(10)] = inst_22791__$1);

(statearr_22875[(22)] = inst_22803);

(statearr_22875[(20)] = inst_22788__$1);

(statearr_22875[(21)] = inst_22790__$1);

(statearr_22875[(11)] = inst_22789__$1);

return statearr_22875;
})();
var statearr_22876_22950 = state_22848__$1;
(statearr_22876_22950[(2)] = null);

(statearr_22876_22950[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (40))){
var inst_22816 = (state_22848[(23)]);
var inst_22820 = done.call(null,null);
var inst_22821 = cljs.core.async.untap_STAR_.call(null,m,inst_22816);
var state_22848__$1 = (function (){var statearr_22877 = state_22848;
(statearr_22877[(24)] = inst_22820);

return statearr_22877;
})();
var statearr_22878_22951 = state_22848__$1;
(statearr_22878_22951[(2)] = inst_22821);

(statearr_22878_22951[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (33))){
var inst_22807 = (state_22848[(25)]);
var inst_22809 = cljs.core.chunked_seq_QMARK_.call(null,inst_22807);
var state_22848__$1 = state_22848;
if(inst_22809){
var statearr_22879_22952 = state_22848__$1;
(statearr_22879_22952[(1)] = (36));

} else {
var statearr_22880_22953 = state_22848__$1;
(statearr_22880_22953[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (13))){
var inst_22739 = (state_22848[(26)]);
var inst_22742 = cljs.core.async.close_BANG_.call(null,inst_22739);
var state_22848__$1 = state_22848;
var statearr_22881_22954 = state_22848__$1;
(statearr_22881_22954[(2)] = inst_22742);

(statearr_22881_22954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (22))){
var inst_22760 = (state_22848[(8)]);
var inst_22763 = cljs.core.async.close_BANG_.call(null,inst_22760);
var state_22848__$1 = state_22848;
var statearr_22882_22955 = state_22848__$1;
(statearr_22882_22955[(2)] = inst_22763);

(statearr_22882_22955[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (36))){
var inst_22807 = (state_22848[(25)]);
var inst_22811 = cljs.core.chunk_first.call(null,inst_22807);
var inst_22812 = cljs.core.chunk_rest.call(null,inst_22807);
var inst_22813 = cljs.core.count.call(null,inst_22811);
var inst_22788 = inst_22812;
var inst_22789 = inst_22811;
var inst_22790 = inst_22813;
var inst_22791 = (0);
var state_22848__$1 = (function (){var statearr_22883 = state_22848;
(statearr_22883[(10)] = inst_22791);

(statearr_22883[(20)] = inst_22788);

(statearr_22883[(21)] = inst_22790);

(statearr_22883[(11)] = inst_22789);

return statearr_22883;
})();
var statearr_22884_22956 = state_22848__$1;
(statearr_22884_22956[(2)] = null);

(statearr_22884_22956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (41))){
var inst_22807 = (state_22848[(25)]);
var inst_22823 = (state_22848[(2)]);
var inst_22824 = cljs.core.next.call(null,inst_22807);
var inst_22788 = inst_22824;
var inst_22789 = null;
var inst_22790 = (0);
var inst_22791 = (0);
var state_22848__$1 = (function (){var statearr_22885 = state_22848;
(statearr_22885[(10)] = inst_22791);

(statearr_22885[(20)] = inst_22788);

(statearr_22885[(21)] = inst_22790);

(statearr_22885[(11)] = inst_22789);

(statearr_22885[(27)] = inst_22823);

return statearr_22885;
})();
var statearr_22886_22957 = state_22848__$1;
(statearr_22886_22957[(2)] = null);

(statearr_22886_22957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (43))){
var state_22848__$1 = state_22848;
var statearr_22887_22958 = state_22848__$1;
(statearr_22887_22958[(2)] = null);

(statearr_22887_22958[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (29))){
var inst_22832 = (state_22848[(2)]);
var state_22848__$1 = state_22848;
var statearr_22888_22959 = state_22848__$1;
(statearr_22888_22959[(2)] = inst_22832);

(statearr_22888_22959[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (44))){
var inst_22841 = (state_22848[(2)]);
var state_22848__$1 = (function (){var statearr_22889 = state_22848;
(statearr_22889[(28)] = inst_22841);

return statearr_22889;
})();
var statearr_22890_22960 = state_22848__$1;
(statearr_22890_22960[(2)] = null);

(statearr_22890_22960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (6))){
var inst_22780 = (state_22848[(29)]);
var inst_22779 = cljs.core.deref.call(null,cs);
var inst_22780__$1 = cljs.core.keys.call(null,inst_22779);
var inst_22781 = cljs.core.count.call(null,inst_22780__$1);
var inst_22782 = cljs.core.reset_BANG_.call(null,dctr,inst_22781);
var inst_22787 = cljs.core.seq.call(null,inst_22780__$1);
var inst_22788 = inst_22787;
var inst_22789 = null;
var inst_22790 = (0);
var inst_22791 = (0);
var state_22848__$1 = (function (){var statearr_22891 = state_22848;
(statearr_22891[(30)] = inst_22782);

(statearr_22891[(10)] = inst_22791);

(statearr_22891[(29)] = inst_22780__$1);

(statearr_22891[(20)] = inst_22788);

(statearr_22891[(21)] = inst_22790);

(statearr_22891[(11)] = inst_22789);

return statearr_22891;
})();
var statearr_22892_22961 = state_22848__$1;
(statearr_22892_22961[(2)] = null);

(statearr_22892_22961[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (28))){
var inst_22807 = (state_22848[(25)]);
var inst_22788 = (state_22848[(20)]);
var inst_22807__$1 = cljs.core.seq.call(null,inst_22788);
var state_22848__$1 = (function (){var statearr_22893 = state_22848;
(statearr_22893[(25)] = inst_22807__$1);

return statearr_22893;
})();
if(inst_22807__$1){
var statearr_22894_22962 = state_22848__$1;
(statearr_22894_22962[(1)] = (33));

} else {
var statearr_22895_22963 = state_22848__$1;
(statearr_22895_22963[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (25))){
var inst_22791 = (state_22848[(10)]);
var inst_22790 = (state_22848[(21)]);
var inst_22793 = (inst_22791 < inst_22790);
var inst_22794 = inst_22793;
var state_22848__$1 = state_22848;
if(cljs.core.truth_(inst_22794)){
var statearr_22896_22964 = state_22848__$1;
(statearr_22896_22964[(1)] = (27));

} else {
var statearr_22897_22965 = state_22848__$1;
(statearr_22897_22965[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (34))){
var state_22848__$1 = state_22848;
var statearr_22898_22966 = state_22848__$1;
(statearr_22898_22966[(2)] = null);

(statearr_22898_22966[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (17))){
var state_22848__$1 = state_22848;
var statearr_22899_22967 = state_22848__$1;
(statearr_22899_22967[(2)] = null);

(statearr_22899_22967[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (3))){
var inst_22846 = (state_22848[(2)]);
var state_22848__$1 = state_22848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22848__$1,inst_22846);
} else {
if((state_val_22849 === (12))){
var inst_22775 = (state_22848[(2)]);
var state_22848__$1 = state_22848;
var statearr_22900_22968 = state_22848__$1;
(statearr_22900_22968[(2)] = inst_22775);

(statearr_22900_22968[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (2))){
var state_22848__$1 = state_22848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22848__$1,(4),ch);
} else {
if((state_val_22849 === (23))){
var state_22848__$1 = state_22848;
var statearr_22901_22969 = state_22848__$1;
(statearr_22901_22969[(2)] = null);

(statearr_22901_22969[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (35))){
var inst_22830 = (state_22848[(2)]);
var state_22848__$1 = state_22848;
var statearr_22902_22970 = state_22848__$1;
(statearr_22902_22970[(2)] = inst_22830);

(statearr_22902_22970[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (19))){
var inst_22749 = (state_22848[(7)]);
var inst_22753 = cljs.core.chunk_first.call(null,inst_22749);
var inst_22754 = cljs.core.chunk_rest.call(null,inst_22749);
var inst_22755 = cljs.core.count.call(null,inst_22753);
var inst_22729 = inst_22754;
var inst_22730 = inst_22753;
var inst_22731 = inst_22755;
var inst_22732 = (0);
var state_22848__$1 = (function (){var statearr_22903 = state_22848;
(statearr_22903[(14)] = inst_22729);

(statearr_22903[(15)] = inst_22730);

(statearr_22903[(16)] = inst_22732);

(statearr_22903[(17)] = inst_22731);

return statearr_22903;
})();
var statearr_22904_22971 = state_22848__$1;
(statearr_22904_22971[(2)] = null);

(statearr_22904_22971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (11))){
var inst_22749 = (state_22848[(7)]);
var inst_22729 = (state_22848[(14)]);
var inst_22749__$1 = cljs.core.seq.call(null,inst_22729);
var state_22848__$1 = (function (){var statearr_22905 = state_22848;
(statearr_22905[(7)] = inst_22749__$1);

return statearr_22905;
})();
if(inst_22749__$1){
var statearr_22906_22972 = state_22848__$1;
(statearr_22906_22972[(1)] = (16));

} else {
var statearr_22907_22973 = state_22848__$1;
(statearr_22907_22973[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (9))){
var inst_22777 = (state_22848[(2)]);
var state_22848__$1 = state_22848;
var statearr_22908_22974 = state_22848__$1;
(statearr_22908_22974[(2)] = inst_22777);

(statearr_22908_22974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (5))){
var inst_22727 = cljs.core.deref.call(null,cs);
var inst_22728 = cljs.core.seq.call(null,inst_22727);
var inst_22729 = inst_22728;
var inst_22730 = null;
var inst_22731 = (0);
var inst_22732 = (0);
var state_22848__$1 = (function (){var statearr_22909 = state_22848;
(statearr_22909[(14)] = inst_22729);

(statearr_22909[(15)] = inst_22730);

(statearr_22909[(16)] = inst_22732);

(statearr_22909[(17)] = inst_22731);

return statearr_22909;
})();
var statearr_22910_22975 = state_22848__$1;
(statearr_22910_22975[(2)] = null);

(statearr_22910_22975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (14))){
var state_22848__$1 = state_22848;
var statearr_22911_22976 = state_22848__$1;
(statearr_22911_22976[(2)] = null);

(statearr_22911_22976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (45))){
var inst_22838 = (state_22848[(2)]);
var state_22848__$1 = state_22848;
var statearr_22912_22977 = state_22848__$1;
(statearr_22912_22977[(2)] = inst_22838);

(statearr_22912_22977[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (26))){
var inst_22780 = (state_22848[(29)]);
var inst_22834 = (state_22848[(2)]);
var inst_22835 = cljs.core.seq.call(null,inst_22780);
var state_22848__$1 = (function (){var statearr_22913 = state_22848;
(statearr_22913[(31)] = inst_22834);

return statearr_22913;
})();
if(inst_22835){
var statearr_22914_22978 = state_22848__$1;
(statearr_22914_22978[(1)] = (42));

} else {
var statearr_22915_22979 = state_22848__$1;
(statearr_22915_22979[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (16))){
var inst_22749 = (state_22848[(7)]);
var inst_22751 = cljs.core.chunked_seq_QMARK_.call(null,inst_22749);
var state_22848__$1 = state_22848;
if(inst_22751){
var statearr_22916_22980 = state_22848__$1;
(statearr_22916_22980[(1)] = (19));

} else {
var statearr_22917_22981 = state_22848__$1;
(statearr_22917_22981[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (38))){
var inst_22827 = (state_22848[(2)]);
var state_22848__$1 = state_22848;
var statearr_22918_22982 = state_22848__$1;
(statearr_22918_22982[(2)] = inst_22827);

(statearr_22918_22982[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (30))){
var state_22848__$1 = state_22848;
var statearr_22919_22983 = state_22848__$1;
(statearr_22919_22983[(2)] = null);

(statearr_22919_22983[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (10))){
var inst_22730 = (state_22848[(15)]);
var inst_22732 = (state_22848[(16)]);
var inst_22738 = cljs.core._nth.call(null,inst_22730,inst_22732);
var inst_22739 = cljs.core.nth.call(null,inst_22738,(0),null);
var inst_22740 = cljs.core.nth.call(null,inst_22738,(1),null);
var state_22848__$1 = (function (){var statearr_22920 = state_22848;
(statearr_22920[(26)] = inst_22739);

return statearr_22920;
})();
if(cljs.core.truth_(inst_22740)){
var statearr_22921_22984 = state_22848__$1;
(statearr_22921_22984[(1)] = (13));

} else {
var statearr_22922_22985 = state_22848__$1;
(statearr_22922_22985[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (18))){
var inst_22773 = (state_22848[(2)]);
var state_22848__$1 = state_22848;
var statearr_22923_22986 = state_22848__$1;
(statearr_22923_22986[(2)] = inst_22773);

(statearr_22923_22986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (42))){
var state_22848__$1 = state_22848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22848__$1,(45),dchan);
} else {
if((state_val_22849 === (37))){
var inst_22720 = (state_22848[(9)]);
var inst_22816 = (state_22848[(23)]);
var inst_22807 = (state_22848[(25)]);
var inst_22816__$1 = cljs.core.first.call(null,inst_22807);
var inst_22817 = cljs.core.async.put_BANG_.call(null,inst_22816__$1,inst_22720,done);
var state_22848__$1 = (function (){var statearr_22924 = state_22848;
(statearr_22924[(23)] = inst_22816__$1);

return statearr_22924;
})();
if(cljs.core.truth_(inst_22817)){
var statearr_22925_22987 = state_22848__$1;
(statearr_22925_22987[(1)] = (39));

} else {
var statearr_22926_22988 = state_22848__$1;
(statearr_22926_22988[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (8))){
var inst_22732 = (state_22848[(16)]);
var inst_22731 = (state_22848[(17)]);
var inst_22734 = (inst_22732 < inst_22731);
var inst_22735 = inst_22734;
var state_22848__$1 = state_22848;
if(cljs.core.truth_(inst_22735)){
var statearr_22927_22989 = state_22848__$1;
(statearr_22927_22989[(1)] = (10));

} else {
var statearr_22928_22990 = state_22848__$1;
(statearr_22928_22990[(1)] = (11));

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
});})(c__21629__auto___22936,cs,m,dchan,dctr,done))
;
return ((function (switch__21517__auto__,c__21629__auto___22936,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21518__auto__ = null;
var cljs$core$async$mult_$_state_machine__21518__auto____0 = (function (){
var statearr_22932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22932[(0)] = cljs$core$async$mult_$_state_machine__21518__auto__);

(statearr_22932[(1)] = (1));

return statearr_22932;
});
var cljs$core$async$mult_$_state_machine__21518__auto____1 = (function (state_22848){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_22848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e22933){if((e22933 instanceof Object)){
var ex__21521__auto__ = e22933;
var statearr_22934_22991 = state_22848;
(statearr_22934_22991[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22992 = state_22848;
state_22848 = G__22992;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21518__auto__ = function(state_22848){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21518__auto____1.call(this,state_22848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21518__auto____0;
cljs$core$async$mult_$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21518__auto____1;
return cljs$core$async$mult_$_state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto___22936,cs,m,dchan,dctr,done))
})();
var state__21631__auto__ = (function (){var statearr_22935 = f__21630__auto__.call(null);
(statearr_22935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto___22936);

return statearr_22935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto___22936,cs,m,dchan,dctr,done))
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
var args22993 = [];
var len__19529__auto___22996 = arguments.length;
var i__19530__auto___22997 = (0);
while(true){
if((i__19530__auto___22997 < len__19529__auto___22996)){
args22993.push((arguments[i__19530__auto___22997]));

var G__22998 = (i__19530__auto___22997 + (1));
i__19530__auto___22997 = G__22998;
continue;
} else {
}
break;
}

var G__22995 = args22993.length;
switch (G__22995) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22993.length)].join('')));

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
var len__19529__auto___23010 = arguments.length;
var i__19530__auto___23011 = (0);
while(true){
if((i__19530__auto___23011 < len__19529__auto___23010)){
args__19536__auto__.push((arguments[i__19530__auto___23011]));

var G__23012 = (i__19530__auto___23011 + (1));
i__19530__auto___23011 = G__23012;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((3) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19537__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23004){
var map__23005 = p__23004;
var map__23005__$1 = ((((!((map__23005 == null)))?((((map__23005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23005):map__23005);
var opts = map__23005__$1;
var statearr_23007_23013 = state;
(statearr_23007_23013[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23005,map__23005__$1,opts){
return (function (val){
var statearr_23008_23014 = state;
(statearr_23008_23014[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23005,map__23005__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23009_23015 = state;
(statearr_23009_23015[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23000){
var G__23001 = cljs.core.first.call(null,seq23000);
var seq23000__$1 = cljs.core.next.call(null,seq23000);
var G__23002 = cljs.core.first.call(null,seq23000__$1);
var seq23000__$2 = cljs.core.next.call(null,seq23000__$1);
var G__23003 = cljs.core.first.call(null,seq23000__$2);
var seq23000__$3 = cljs.core.next.call(null,seq23000__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23001,G__23002,G__23003,seq23000__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23179 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23179 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23180){
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
this.meta23180 = meta23180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23181,meta23180__$1){
var self__ = this;
var _23181__$1 = this;
return (new cljs.core.async.t_cljs$core$async23179(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23180__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23179.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23181){
var self__ = this;
var _23181__$1 = this;
return self__.meta23180;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23179.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23179.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23179.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23179.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23179.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23179.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23179.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23179.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23179.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23180","meta23180",-672284902,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23179.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23179";

cljs.core.async.t_cljs$core$async23179.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23179");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23179 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23179(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23180){
return (new cljs.core.async.t_cljs$core$async23179(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23180));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23179(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21629__auto___23342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto___23342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto___23342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23279){
var state_val_23280 = (state_23279[(1)]);
if((state_val_23280 === (7))){
var inst_23197 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23281_23343 = state_23279__$1;
(statearr_23281_23343[(2)] = inst_23197);

(statearr_23281_23343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (20))){
var inst_23209 = (state_23279[(7)]);
var state_23279__$1 = state_23279;
var statearr_23282_23344 = state_23279__$1;
(statearr_23282_23344[(2)] = inst_23209);

(statearr_23282_23344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (27))){
var state_23279__$1 = state_23279;
var statearr_23283_23345 = state_23279__$1;
(statearr_23283_23345[(2)] = null);

(statearr_23283_23345[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (1))){
var inst_23185 = (state_23279[(8)]);
var inst_23185__$1 = calc_state.call(null);
var inst_23187 = (inst_23185__$1 == null);
var inst_23188 = cljs.core.not.call(null,inst_23187);
var state_23279__$1 = (function (){var statearr_23284 = state_23279;
(statearr_23284[(8)] = inst_23185__$1);

return statearr_23284;
})();
if(inst_23188){
var statearr_23285_23346 = state_23279__$1;
(statearr_23285_23346[(1)] = (2));

} else {
var statearr_23286_23347 = state_23279__$1;
(statearr_23286_23347[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (24))){
var inst_23232 = (state_23279[(9)]);
var inst_23239 = (state_23279[(10)]);
var inst_23253 = (state_23279[(11)]);
var inst_23253__$1 = inst_23232.call(null,inst_23239);
var state_23279__$1 = (function (){var statearr_23287 = state_23279;
(statearr_23287[(11)] = inst_23253__$1);

return statearr_23287;
})();
if(cljs.core.truth_(inst_23253__$1)){
var statearr_23288_23348 = state_23279__$1;
(statearr_23288_23348[(1)] = (29));

} else {
var statearr_23289_23349 = state_23279__$1;
(statearr_23289_23349[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (4))){
var inst_23200 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
if(cljs.core.truth_(inst_23200)){
var statearr_23290_23350 = state_23279__$1;
(statearr_23290_23350[(1)] = (8));

} else {
var statearr_23291_23351 = state_23279__$1;
(statearr_23291_23351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (15))){
var inst_23226 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
if(cljs.core.truth_(inst_23226)){
var statearr_23292_23352 = state_23279__$1;
(statearr_23292_23352[(1)] = (19));

} else {
var statearr_23293_23353 = state_23279__$1;
(statearr_23293_23353[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (21))){
var inst_23231 = (state_23279[(12)]);
var inst_23231__$1 = (state_23279[(2)]);
var inst_23232 = cljs.core.get.call(null,inst_23231__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23233 = cljs.core.get.call(null,inst_23231__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23234 = cljs.core.get.call(null,inst_23231__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23279__$1 = (function (){var statearr_23294 = state_23279;
(statearr_23294[(9)] = inst_23232);

(statearr_23294[(12)] = inst_23231__$1);

(statearr_23294[(13)] = inst_23233);

return statearr_23294;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23279__$1,(22),inst_23234);
} else {
if((state_val_23280 === (31))){
var inst_23261 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
if(cljs.core.truth_(inst_23261)){
var statearr_23295_23354 = state_23279__$1;
(statearr_23295_23354[(1)] = (32));

} else {
var statearr_23296_23355 = state_23279__$1;
(statearr_23296_23355[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (32))){
var inst_23238 = (state_23279[(14)]);
var state_23279__$1 = state_23279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23279__$1,(35),out,inst_23238);
} else {
if((state_val_23280 === (33))){
var inst_23231 = (state_23279[(12)]);
var inst_23209 = inst_23231;
var state_23279__$1 = (function (){var statearr_23297 = state_23279;
(statearr_23297[(7)] = inst_23209);

return statearr_23297;
})();
var statearr_23298_23356 = state_23279__$1;
(statearr_23298_23356[(2)] = null);

(statearr_23298_23356[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (13))){
var inst_23209 = (state_23279[(7)]);
var inst_23216 = inst_23209.cljs$lang$protocol_mask$partition0$;
var inst_23217 = (inst_23216 & (64));
var inst_23218 = inst_23209.cljs$core$ISeq$;
var inst_23219 = (inst_23217) || (inst_23218);
var state_23279__$1 = state_23279;
if(cljs.core.truth_(inst_23219)){
var statearr_23299_23357 = state_23279__$1;
(statearr_23299_23357[(1)] = (16));

} else {
var statearr_23300_23358 = state_23279__$1;
(statearr_23300_23358[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (22))){
var inst_23238 = (state_23279[(14)]);
var inst_23239 = (state_23279[(10)]);
var inst_23237 = (state_23279[(2)]);
var inst_23238__$1 = cljs.core.nth.call(null,inst_23237,(0),null);
var inst_23239__$1 = cljs.core.nth.call(null,inst_23237,(1),null);
var inst_23240 = (inst_23238__$1 == null);
var inst_23241 = cljs.core._EQ_.call(null,inst_23239__$1,change);
var inst_23242 = (inst_23240) || (inst_23241);
var state_23279__$1 = (function (){var statearr_23301 = state_23279;
(statearr_23301[(14)] = inst_23238__$1);

(statearr_23301[(10)] = inst_23239__$1);

return statearr_23301;
})();
if(cljs.core.truth_(inst_23242)){
var statearr_23302_23359 = state_23279__$1;
(statearr_23302_23359[(1)] = (23));

} else {
var statearr_23303_23360 = state_23279__$1;
(statearr_23303_23360[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (36))){
var inst_23231 = (state_23279[(12)]);
var inst_23209 = inst_23231;
var state_23279__$1 = (function (){var statearr_23304 = state_23279;
(statearr_23304[(7)] = inst_23209);

return statearr_23304;
})();
var statearr_23305_23361 = state_23279__$1;
(statearr_23305_23361[(2)] = null);

(statearr_23305_23361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (29))){
var inst_23253 = (state_23279[(11)]);
var state_23279__$1 = state_23279;
var statearr_23306_23362 = state_23279__$1;
(statearr_23306_23362[(2)] = inst_23253);

(statearr_23306_23362[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (6))){
var state_23279__$1 = state_23279;
var statearr_23307_23363 = state_23279__$1;
(statearr_23307_23363[(2)] = false);

(statearr_23307_23363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (28))){
var inst_23249 = (state_23279[(2)]);
var inst_23250 = calc_state.call(null);
var inst_23209 = inst_23250;
var state_23279__$1 = (function (){var statearr_23308 = state_23279;
(statearr_23308[(7)] = inst_23209);

(statearr_23308[(15)] = inst_23249);

return statearr_23308;
})();
var statearr_23309_23364 = state_23279__$1;
(statearr_23309_23364[(2)] = null);

(statearr_23309_23364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (25))){
var inst_23275 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23310_23365 = state_23279__$1;
(statearr_23310_23365[(2)] = inst_23275);

(statearr_23310_23365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (34))){
var inst_23273 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23311_23366 = state_23279__$1;
(statearr_23311_23366[(2)] = inst_23273);

(statearr_23311_23366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (17))){
var state_23279__$1 = state_23279;
var statearr_23312_23367 = state_23279__$1;
(statearr_23312_23367[(2)] = false);

(statearr_23312_23367[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (3))){
var state_23279__$1 = state_23279;
var statearr_23313_23368 = state_23279__$1;
(statearr_23313_23368[(2)] = false);

(statearr_23313_23368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (12))){
var inst_23277 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23279__$1,inst_23277);
} else {
if((state_val_23280 === (2))){
var inst_23185 = (state_23279[(8)]);
var inst_23190 = inst_23185.cljs$lang$protocol_mask$partition0$;
var inst_23191 = (inst_23190 & (64));
var inst_23192 = inst_23185.cljs$core$ISeq$;
var inst_23193 = (inst_23191) || (inst_23192);
var state_23279__$1 = state_23279;
if(cljs.core.truth_(inst_23193)){
var statearr_23314_23369 = state_23279__$1;
(statearr_23314_23369[(1)] = (5));

} else {
var statearr_23315_23370 = state_23279__$1;
(statearr_23315_23370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (23))){
var inst_23238 = (state_23279[(14)]);
var inst_23244 = (inst_23238 == null);
var state_23279__$1 = state_23279;
if(cljs.core.truth_(inst_23244)){
var statearr_23316_23371 = state_23279__$1;
(statearr_23316_23371[(1)] = (26));

} else {
var statearr_23317_23372 = state_23279__$1;
(statearr_23317_23372[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (35))){
var inst_23264 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
if(cljs.core.truth_(inst_23264)){
var statearr_23318_23373 = state_23279__$1;
(statearr_23318_23373[(1)] = (36));

} else {
var statearr_23319_23374 = state_23279__$1;
(statearr_23319_23374[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (19))){
var inst_23209 = (state_23279[(7)]);
var inst_23228 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23209);
var state_23279__$1 = state_23279;
var statearr_23320_23375 = state_23279__$1;
(statearr_23320_23375[(2)] = inst_23228);

(statearr_23320_23375[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (11))){
var inst_23209 = (state_23279[(7)]);
var inst_23213 = (inst_23209 == null);
var inst_23214 = cljs.core.not.call(null,inst_23213);
var state_23279__$1 = state_23279;
if(inst_23214){
var statearr_23321_23376 = state_23279__$1;
(statearr_23321_23376[(1)] = (13));

} else {
var statearr_23322_23377 = state_23279__$1;
(statearr_23322_23377[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (9))){
var inst_23185 = (state_23279[(8)]);
var state_23279__$1 = state_23279;
var statearr_23323_23378 = state_23279__$1;
(statearr_23323_23378[(2)] = inst_23185);

(statearr_23323_23378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (5))){
var state_23279__$1 = state_23279;
var statearr_23324_23379 = state_23279__$1;
(statearr_23324_23379[(2)] = true);

(statearr_23324_23379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (14))){
var state_23279__$1 = state_23279;
var statearr_23325_23380 = state_23279__$1;
(statearr_23325_23380[(2)] = false);

(statearr_23325_23380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (26))){
var inst_23239 = (state_23279[(10)]);
var inst_23246 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23239);
var state_23279__$1 = state_23279;
var statearr_23326_23381 = state_23279__$1;
(statearr_23326_23381[(2)] = inst_23246);

(statearr_23326_23381[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (16))){
var state_23279__$1 = state_23279;
var statearr_23327_23382 = state_23279__$1;
(statearr_23327_23382[(2)] = true);

(statearr_23327_23382[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (38))){
var inst_23269 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23328_23383 = state_23279__$1;
(statearr_23328_23383[(2)] = inst_23269);

(statearr_23328_23383[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (30))){
var inst_23232 = (state_23279[(9)]);
var inst_23239 = (state_23279[(10)]);
var inst_23233 = (state_23279[(13)]);
var inst_23256 = cljs.core.empty_QMARK_.call(null,inst_23232);
var inst_23257 = inst_23233.call(null,inst_23239);
var inst_23258 = cljs.core.not.call(null,inst_23257);
var inst_23259 = (inst_23256) && (inst_23258);
var state_23279__$1 = state_23279;
var statearr_23329_23384 = state_23279__$1;
(statearr_23329_23384[(2)] = inst_23259);

(statearr_23329_23384[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (10))){
var inst_23185 = (state_23279[(8)]);
var inst_23205 = (state_23279[(2)]);
var inst_23206 = cljs.core.get.call(null,inst_23205,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23207 = cljs.core.get.call(null,inst_23205,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23208 = cljs.core.get.call(null,inst_23205,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23209 = inst_23185;
var state_23279__$1 = (function (){var statearr_23330 = state_23279;
(statearr_23330[(16)] = inst_23207);

(statearr_23330[(17)] = inst_23208);

(statearr_23330[(18)] = inst_23206);

(statearr_23330[(7)] = inst_23209);

return statearr_23330;
})();
var statearr_23331_23385 = state_23279__$1;
(statearr_23331_23385[(2)] = null);

(statearr_23331_23385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (18))){
var inst_23223 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23332_23386 = state_23279__$1;
(statearr_23332_23386[(2)] = inst_23223);

(statearr_23332_23386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (37))){
var state_23279__$1 = state_23279;
var statearr_23333_23387 = state_23279__$1;
(statearr_23333_23387[(2)] = null);

(statearr_23333_23387[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (8))){
var inst_23185 = (state_23279[(8)]);
var inst_23202 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23185);
var state_23279__$1 = state_23279;
var statearr_23334_23388 = state_23279__$1;
(statearr_23334_23388[(2)] = inst_23202);

(statearr_23334_23388[(1)] = (10));


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
});})(c__21629__auto___23342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21517__auto__,c__21629__auto___23342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21518__auto__ = null;
var cljs$core$async$mix_$_state_machine__21518__auto____0 = (function (){
var statearr_23338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23338[(0)] = cljs$core$async$mix_$_state_machine__21518__auto__);

(statearr_23338[(1)] = (1));

return statearr_23338;
});
var cljs$core$async$mix_$_state_machine__21518__auto____1 = (function (state_23279){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_23279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e23339){if((e23339 instanceof Object)){
var ex__21521__auto__ = e23339;
var statearr_23340_23389 = state_23279;
(statearr_23340_23389[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23390 = state_23279;
state_23279 = G__23390;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21518__auto__ = function(state_23279){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21518__auto____1.call(this,state_23279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21518__auto____0;
cljs$core$async$mix_$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21518__auto____1;
return cljs$core$async$mix_$_state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto___23342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21631__auto__ = (function (){var statearr_23341 = f__21630__auto__.call(null);
(statearr_23341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto___23342);

return statearr_23341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto___23342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args23391 = [];
var len__19529__auto___23394 = arguments.length;
var i__19530__auto___23395 = (0);
while(true){
if((i__19530__auto___23395 < len__19529__auto___23394)){
args23391.push((arguments[i__19530__auto___23395]));

var G__23396 = (i__19530__auto___23395 + (1));
i__19530__auto___23395 = G__23396;
continue;
} else {
}
break;
}

var G__23393 = args23391.length;
switch (G__23393) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23391.length)].join('')));

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
var args23399 = [];
var len__19529__auto___23524 = arguments.length;
var i__19530__auto___23525 = (0);
while(true){
if((i__19530__auto___23525 < len__19529__auto___23524)){
args23399.push((arguments[i__19530__auto___23525]));

var G__23526 = (i__19530__auto___23525 + (1));
i__19530__auto___23525 = G__23526;
continue;
} else {
}
break;
}

var G__23401 = args23399.length;
switch (G__23401) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23399.length)].join('')));

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
return (function (p1__23398_SHARP_){
if(cljs.core.truth_(p1__23398_SHARP_.call(null,topic))){
return p1__23398_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23398_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18459__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23402 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23402 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23403){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23403 = meta23403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23404,meta23403__$1){
var self__ = this;
var _23404__$1 = this;
return (new cljs.core.async.t_cljs$core$async23402(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23403__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23402.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23404){
var self__ = this;
var _23404__$1 = this;
return self__.meta23403;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23402.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23402.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23402.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23402.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23402.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23402.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23402.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23402.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23403","meta23403",-472865130,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23402.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23402";

cljs.core.async.t_cljs$core$async23402.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23402");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23402 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23402(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23403){
return (new cljs.core.async.t_cljs$core$async23402(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23403));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23402(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21629__auto___23528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto___23528,mults,ensure_mult,p){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto___23528,mults,ensure_mult,p){
return (function (state_23476){
var state_val_23477 = (state_23476[(1)]);
if((state_val_23477 === (7))){
var inst_23472 = (state_23476[(2)]);
var state_23476__$1 = state_23476;
var statearr_23478_23529 = state_23476__$1;
(statearr_23478_23529[(2)] = inst_23472);

(statearr_23478_23529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (20))){
var state_23476__$1 = state_23476;
var statearr_23479_23530 = state_23476__$1;
(statearr_23479_23530[(2)] = null);

(statearr_23479_23530[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (1))){
var state_23476__$1 = state_23476;
var statearr_23480_23531 = state_23476__$1;
(statearr_23480_23531[(2)] = null);

(statearr_23480_23531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (24))){
var inst_23455 = (state_23476[(7)]);
var inst_23464 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23455);
var state_23476__$1 = state_23476;
var statearr_23481_23532 = state_23476__$1;
(statearr_23481_23532[(2)] = inst_23464);

(statearr_23481_23532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (4))){
var inst_23407 = (state_23476[(8)]);
var inst_23407__$1 = (state_23476[(2)]);
var inst_23408 = (inst_23407__$1 == null);
var state_23476__$1 = (function (){var statearr_23482 = state_23476;
(statearr_23482[(8)] = inst_23407__$1);

return statearr_23482;
})();
if(cljs.core.truth_(inst_23408)){
var statearr_23483_23533 = state_23476__$1;
(statearr_23483_23533[(1)] = (5));

} else {
var statearr_23484_23534 = state_23476__$1;
(statearr_23484_23534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (15))){
var inst_23449 = (state_23476[(2)]);
var state_23476__$1 = state_23476;
var statearr_23485_23535 = state_23476__$1;
(statearr_23485_23535[(2)] = inst_23449);

(statearr_23485_23535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (21))){
var inst_23469 = (state_23476[(2)]);
var state_23476__$1 = (function (){var statearr_23486 = state_23476;
(statearr_23486[(9)] = inst_23469);

return statearr_23486;
})();
var statearr_23487_23536 = state_23476__$1;
(statearr_23487_23536[(2)] = null);

(statearr_23487_23536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (13))){
var inst_23431 = (state_23476[(10)]);
var inst_23433 = cljs.core.chunked_seq_QMARK_.call(null,inst_23431);
var state_23476__$1 = state_23476;
if(inst_23433){
var statearr_23488_23537 = state_23476__$1;
(statearr_23488_23537[(1)] = (16));

} else {
var statearr_23489_23538 = state_23476__$1;
(statearr_23489_23538[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (22))){
var inst_23461 = (state_23476[(2)]);
var state_23476__$1 = state_23476;
if(cljs.core.truth_(inst_23461)){
var statearr_23490_23539 = state_23476__$1;
(statearr_23490_23539[(1)] = (23));

} else {
var statearr_23491_23540 = state_23476__$1;
(statearr_23491_23540[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (6))){
var inst_23457 = (state_23476[(11)]);
var inst_23407 = (state_23476[(8)]);
var inst_23455 = (state_23476[(7)]);
var inst_23455__$1 = topic_fn.call(null,inst_23407);
var inst_23456 = cljs.core.deref.call(null,mults);
var inst_23457__$1 = cljs.core.get.call(null,inst_23456,inst_23455__$1);
var state_23476__$1 = (function (){var statearr_23492 = state_23476;
(statearr_23492[(11)] = inst_23457__$1);

(statearr_23492[(7)] = inst_23455__$1);

return statearr_23492;
})();
if(cljs.core.truth_(inst_23457__$1)){
var statearr_23493_23541 = state_23476__$1;
(statearr_23493_23541[(1)] = (19));

} else {
var statearr_23494_23542 = state_23476__$1;
(statearr_23494_23542[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (25))){
var inst_23466 = (state_23476[(2)]);
var state_23476__$1 = state_23476;
var statearr_23495_23543 = state_23476__$1;
(statearr_23495_23543[(2)] = inst_23466);

(statearr_23495_23543[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (17))){
var inst_23431 = (state_23476[(10)]);
var inst_23440 = cljs.core.first.call(null,inst_23431);
var inst_23441 = cljs.core.async.muxch_STAR_.call(null,inst_23440);
var inst_23442 = cljs.core.async.close_BANG_.call(null,inst_23441);
var inst_23443 = cljs.core.next.call(null,inst_23431);
var inst_23417 = inst_23443;
var inst_23418 = null;
var inst_23419 = (0);
var inst_23420 = (0);
var state_23476__$1 = (function (){var statearr_23496 = state_23476;
(statearr_23496[(12)] = inst_23442);

(statearr_23496[(13)] = inst_23420);

(statearr_23496[(14)] = inst_23418);

(statearr_23496[(15)] = inst_23419);

(statearr_23496[(16)] = inst_23417);

return statearr_23496;
})();
var statearr_23497_23544 = state_23476__$1;
(statearr_23497_23544[(2)] = null);

(statearr_23497_23544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (3))){
var inst_23474 = (state_23476[(2)]);
var state_23476__$1 = state_23476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23476__$1,inst_23474);
} else {
if((state_val_23477 === (12))){
var inst_23451 = (state_23476[(2)]);
var state_23476__$1 = state_23476;
var statearr_23498_23545 = state_23476__$1;
(statearr_23498_23545[(2)] = inst_23451);

(statearr_23498_23545[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (2))){
var state_23476__$1 = state_23476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23476__$1,(4),ch);
} else {
if((state_val_23477 === (23))){
var state_23476__$1 = state_23476;
var statearr_23499_23546 = state_23476__$1;
(statearr_23499_23546[(2)] = null);

(statearr_23499_23546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (19))){
var inst_23457 = (state_23476[(11)]);
var inst_23407 = (state_23476[(8)]);
var inst_23459 = cljs.core.async.muxch_STAR_.call(null,inst_23457);
var state_23476__$1 = state_23476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23476__$1,(22),inst_23459,inst_23407);
} else {
if((state_val_23477 === (11))){
var inst_23431 = (state_23476[(10)]);
var inst_23417 = (state_23476[(16)]);
var inst_23431__$1 = cljs.core.seq.call(null,inst_23417);
var state_23476__$1 = (function (){var statearr_23500 = state_23476;
(statearr_23500[(10)] = inst_23431__$1);

return statearr_23500;
})();
if(inst_23431__$1){
var statearr_23501_23547 = state_23476__$1;
(statearr_23501_23547[(1)] = (13));

} else {
var statearr_23502_23548 = state_23476__$1;
(statearr_23502_23548[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (9))){
var inst_23453 = (state_23476[(2)]);
var state_23476__$1 = state_23476;
var statearr_23503_23549 = state_23476__$1;
(statearr_23503_23549[(2)] = inst_23453);

(statearr_23503_23549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (5))){
var inst_23414 = cljs.core.deref.call(null,mults);
var inst_23415 = cljs.core.vals.call(null,inst_23414);
var inst_23416 = cljs.core.seq.call(null,inst_23415);
var inst_23417 = inst_23416;
var inst_23418 = null;
var inst_23419 = (0);
var inst_23420 = (0);
var state_23476__$1 = (function (){var statearr_23504 = state_23476;
(statearr_23504[(13)] = inst_23420);

(statearr_23504[(14)] = inst_23418);

(statearr_23504[(15)] = inst_23419);

(statearr_23504[(16)] = inst_23417);

return statearr_23504;
})();
var statearr_23505_23550 = state_23476__$1;
(statearr_23505_23550[(2)] = null);

(statearr_23505_23550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (14))){
var state_23476__$1 = state_23476;
var statearr_23509_23551 = state_23476__$1;
(statearr_23509_23551[(2)] = null);

(statearr_23509_23551[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (16))){
var inst_23431 = (state_23476[(10)]);
var inst_23435 = cljs.core.chunk_first.call(null,inst_23431);
var inst_23436 = cljs.core.chunk_rest.call(null,inst_23431);
var inst_23437 = cljs.core.count.call(null,inst_23435);
var inst_23417 = inst_23436;
var inst_23418 = inst_23435;
var inst_23419 = inst_23437;
var inst_23420 = (0);
var state_23476__$1 = (function (){var statearr_23510 = state_23476;
(statearr_23510[(13)] = inst_23420);

(statearr_23510[(14)] = inst_23418);

(statearr_23510[(15)] = inst_23419);

(statearr_23510[(16)] = inst_23417);

return statearr_23510;
})();
var statearr_23511_23552 = state_23476__$1;
(statearr_23511_23552[(2)] = null);

(statearr_23511_23552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (10))){
var inst_23420 = (state_23476[(13)]);
var inst_23418 = (state_23476[(14)]);
var inst_23419 = (state_23476[(15)]);
var inst_23417 = (state_23476[(16)]);
var inst_23425 = cljs.core._nth.call(null,inst_23418,inst_23420);
var inst_23426 = cljs.core.async.muxch_STAR_.call(null,inst_23425);
var inst_23427 = cljs.core.async.close_BANG_.call(null,inst_23426);
var inst_23428 = (inst_23420 + (1));
var tmp23506 = inst_23418;
var tmp23507 = inst_23419;
var tmp23508 = inst_23417;
var inst_23417__$1 = tmp23508;
var inst_23418__$1 = tmp23506;
var inst_23419__$1 = tmp23507;
var inst_23420__$1 = inst_23428;
var state_23476__$1 = (function (){var statearr_23512 = state_23476;
(statearr_23512[(13)] = inst_23420__$1);

(statearr_23512[(14)] = inst_23418__$1);

(statearr_23512[(15)] = inst_23419__$1);

(statearr_23512[(16)] = inst_23417__$1);

(statearr_23512[(17)] = inst_23427);

return statearr_23512;
})();
var statearr_23513_23553 = state_23476__$1;
(statearr_23513_23553[(2)] = null);

(statearr_23513_23553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (18))){
var inst_23446 = (state_23476[(2)]);
var state_23476__$1 = state_23476;
var statearr_23514_23554 = state_23476__$1;
(statearr_23514_23554[(2)] = inst_23446);

(statearr_23514_23554[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (8))){
var inst_23420 = (state_23476[(13)]);
var inst_23419 = (state_23476[(15)]);
var inst_23422 = (inst_23420 < inst_23419);
var inst_23423 = inst_23422;
var state_23476__$1 = state_23476;
if(cljs.core.truth_(inst_23423)){
var statearr_23515_23555 = state_23476__$1;
(statearr_23515_23555[(1)] = (10));

} else {
var statearr_23516_23556 = state_23476__$1;
(statearr_23516_23556[(1)] = (11));

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
});})(c__21629__auto___23528,mults,ensure_mult,p))
;
return ((function (switch__21517__auto__,c__21629__auto___23528,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21518__auto__ = null;
var cljs$core$async$state_machine__21518__auto____0 = (function (){
var statearr_23520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23520[(0)] = cljs$core$async$state_machine__21518__auto__);

(statearr_23520[(1)] = (1));

return statearr_23520;
});
var cljs$core$async$state_machine__21518__auto____1 = (function (state_23476){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_23476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e23521){if((e23521 instanceof Object)){
var ex__21521__auto__ = e23521;
var statearr_23522_23557 = state_23476;
(statearr_23522_23557[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23558 = state_23476;
state_23476 = G__23558;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$state_machine__21518__auto__ = function(state_23476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21518__auto____1.call(this,state_23476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21518__auto____0;
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21518__auto____1;
return cljs$core$async$state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto___23528,mults,ensure_mult,p))
})();
var state__21631__auto__ = (function (){var statearr_23523 = f__21630__auto__.call(null);
(statearr_23523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto___23528);

return statearr_23523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto___23528,mults,ensure_mult,p))
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
var args23559 = [];
var len__19529__auto___23562 = arguments.length;
var i__19530__auto___23563 = (0);
while(true){
if((i__19530__auto___23563 < len__19529__auto___23562)){
args23559.push((arguments[i__19530__auto___23563]));

var G__23564 = (i__19530__auto___23563 + (1));
i__19530__auto___23563 = G__23564;
continue;
} else {
}
break;
}

var G__23561 = args23559.length;
switch (G__23561) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23559.length)].join('')));

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
var args23566 = [];
var len__19529__auto___23569 = arguments.length;
var i__19530__auto___23570 = (0);
while(true){
if((i__19530__auto___23570 < len__19529__auto___23569)){
args23566.push((arguments[i__19530__auto___23570]));

var G__23571 = (i__19530__auto___23570 + (1));
i__19530__auto___23570 = G__23571;
continue;
} else {
}
break;
}

var G__23568 = args23566.length;
switch (G__23568) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23566.length)].join('')));

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
var args23573 = [];
var len__19529__auto___23644 = arguments.length;
var i__19530__auto___23645 = (0);
while(true){
if((i__19530__auto___23645 < len__19529__auto___23644)){
args23573.push((arguments[i__19530__auto___23645]));

var G__23646 = (i__19530__auto___23645 + (1));
i__19530__auto___23645 = G__23646;
continue;
} else {
}
break;
}

var G__23575 = args23573.length;
switch (G__23575) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23573.length)].join('')));

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
var c__21629__auto___23648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto___23648,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto___23648,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23614){
var state_val_23615 = (state_23614[(1)]);
if((state_val_23615 === (7))){
var state_23614__$1 = state_23614;
var statearr_23616_23649 = state_23614__$1;
(statearr_23616_23649[(2)] = null);

(statearr_23616_23649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23615 === (1))){
var state_23614__$1 = state_23614;
var statearr_23617_23650 = state_23614__$1;
(statearr_23617_23650[(2)] = null);

(statearr_23617_23650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23615 === (4))){
var inst_23578 = (state_23614[(7)]);
var inst_23580 = (inst_23578 < cnt);
var state_23614__$1 = state_23614;
if(cljs.core.truth_(inst_23580)){
var statearr_23618_23651 = state_23614__$1;
(statearr_23618_23651[(1)] = (6));

} else {
var statearr_23619_23652 = state_23614__$1;
(statearr_23619_23652[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23615 === (15))){
var inst_23610 = (state_23614[(2)]);
var state_23614__$1 = state_23614;
var statearr_23620_23653 = state_23614__$1;
(statearr_23620_23653[(2)] = inst_23610);

(statearr_23620_23653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23615 === (13))){
var inst_23603 = cljs.core.async.close_BANG_.call(null,out);
var state_23614__$1 = state_23614;
var statearr_23621_23654 = state_23614__$1;
(statearr_23621_23654[(2)] = inst_23603);

(statearr_23621_23654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23615 === (6))){
var state_23614__$1 = state_23614;
var statearr_23622_23655 = state_23614__$1;
(statearr_23622_23655[(2)] = null);

(statearr_23622_23655[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23615 === (3))){
var inst_23612 = (state_23614[(2)]);
var state_23614__$1 = state_23614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23614__$1,inst_23612);
} else {
if((state_val_23615 === (12))){
var inst_23600 = (state_23614[(8)]);
var inst_23600__$1 = (state_23614[(2)]);
var inst_23601 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23600__$1);
var state_23614__$1 = (function (){var statearr_23623 = state_23614;
(statearr_23623[(8)] = inst_23600__$1);

return statearr_23623;
})();
if(cljs.core.truth_(inst_23601)){
var statearr_23624_23656 = state_23614__$1;
(statearr_23624_23656[(1)] = (13));

} else {
var statearr_23625_23657 = state_23614__$1;
(statearr_23625_23657[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23615 === (2))){
var inst_23577 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23578 = (0);
var state_23614__$1 = (function (){var statearr_23626 = state_23614;
(statearr_23626[(7)] = inst_23578);

(statearr_23626[(9)] = inst_23577);

return statearr_23626;
})();
var statearr_23627_23658 = state_23614__$1;
(statearr_23627_23658[(2)] = null);

(statearr_23627_23658[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23615 === (11))){
var inst_23578 = (state_23614[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23614,(10),Object,null,(9));
var inst_23587 = chs__$1.call(null,inst_23578);
var inst_23588 = done.call(null,inst_23578);
var inst_23589 = cljs.core.async.take_BANG_.call(null,inst_23587,inst_23588);
var state_23614__$1 = state_23614;
var statearr_23628_23659 = state_23614__$1;
(statearr_23628_23659[(2)] = inst_23589);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23614__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23615 === (9))){
var inst_23578 = (state_23614[(7)]);
var inst_23591 = (state_23614[(2)]);
var inst_23592 = (inst_23578 + (1));
var inst_23578__$1 = inst_23592;
var state_23614__$1 = (function (){var statearr_23629 = state_23614;
(statearr_23629[(7)] = inst_23578__$1);

(statearr_23629[(10)] = inst_23591);

return statearr_23629;
})();
var statearr_23630_23660 = state_23614__$1;
(statearr_23630_23660[(2)] = null);

(statearr_23630_23660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23615 === (5))){
var inst_23598 = (state_23614[(2)]);
var state_23614__$1 = (function (){var statearr_23631 = state_23614;
(statearr_23631[(11)] = inst_23598);

return statearr_23631;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23614__$1,(12),dchan);
} else {
if((state_val_23615 === (14))){
var inst_23600 = (state_23614[(8)]);
var inst_23605 = cljs.core.apply.call(null,f,inst_23600);
var state_23614__$1 = state_23614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23614__$1,(16),out,inst_23605);
} else {
if((state_val_23615 === (16))){
var inst_23607 = (state_23614[(2)]);
var state_23614__$1 = (function (){var statearr_23632 = state_23614;
(statearr_23632[(12)] = inst_23607);

return statearr_23632;
})();
var statearr_23633_23661 = state_23614__$1;
(statearr_23633_23661[(2)] = null);

(statearr_23633_23661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23615 === (10))){
var inst_23582 = (state_23614[(2)]);
var inst_23583 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23614__$1 = (function (){var statearr_23634 = state_23614;
(statearr_23634[(13)] = inst_23582);

return statearr_23634;
})();
var statearr_23635_23662 = state_23614__$1;
(statearr_23635_23662[(2)] = inst_23583);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23614__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23615 === (8))){
var inst_23596 = (state_23614[(2)]);
var state_23614__$1 = state_23614;
var statearr_23636_23663 = state_23614__$1;
(statearr_23636_23663[(2)] = inst_23596);

(statearr_23636_23663[(1)] = (5));


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
});})(c__21629__auto___23648,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21517__auto__,c__21629__auto___23648,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21518__auto__ = null;
var cljs$core$async$state_machine__21518__auto____0 = (function (){
var statearr_23640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23640[(0)] = cljs$core$async$state_machine__21518__auto__);

(statearr_23640[(1)] = (1));

return statearr_23640;
});
var cljs$core$async$state_machine__21518__auto____1 = (function (state_23614){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_23614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e23641){if((e23641 instanceof Object)){
var ex__21521__auto__ = e23641;
var statearr_23642_23664 = state_23614;
(statearr_23642_23664[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23665 = state_23614;
state_23614 = G__23665;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$state_machine__21518__auto__ = function(state_23614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21518__auto____1.call(this,state_23614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21518__auto____0;
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21518__auto____1;
return cljs$core$async$state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto___23648,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21631__auto__ = (function (){var statearr_23643 = f__21630__auto__.call(null);
(statearr_23643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto___23648);

return statearr_23643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto___23648,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args23667 = [];
var len__19529__auto___23723 = arguments.length;
var i__19530__auto___23724 = (0);
while(true){
if((i__19530__auto___23724 < len__19529__auto___23723)){
args23667.push((arguments[i__19530__auto___23724]));

var G__23725 = (i__19530__auto___23724 + (1));
i__19530__auto___23724 = G__23725;
continue;
} else {
}
break;
}

var G__23669 = args23667.length;
switch (G__23669) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23667.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21629__auto___23727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto___23727,out){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto___23727,out){
return (function (state_23699){
var state_val_23700 = (state_23699[(1)]);
if((state_val_23700 === (7))){
var inst_23679 = (state_23699[(7)]);
var inst_23678 = (state_23699[(8)]);
var inst_23678__$1 = (state_23699[(2)]);
var inst_23679__$1 = cljs.core.nth.call(null,inst_23678__$1,(0),null);
var inst_23680 = cljs.core.nth.call(null,inst_23678__$1,(1),null);
var inst_23681 = (inst_23679__$1 == null);
var state_23699__$1 = (function (){var statearr_23701 = state_23699;
(statearr_23701[(7)] = inst_23679__$1);

(statearr_23701[(8)] = inst_23678__$1);

(statearr_23701[(9)] = inst_23680);

return statearr_23701;
})();
if(cljs.core.truth_(inst_23681)){
var statearr_23702_23728 = state_23699__$1;
(statearr_23702_23728[(1)] = (8));

} else {
var statearr_23703_23729 = state_23699__$1;
(statearr_23703_23729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23700 === (1))){
var inst_23670 = cljs.core.vec.call(null,chs);
var inst_23671 = inst_23670;
var state_23699__$1 = (function (){var statearr_23704 = state_23699;
(statearr_23704[(10)] = inst_23671);

return statearr_23704;
})();
var statearr_23705_23730 = state_23699__$1;
(statearr_23705_23730[(2)] = null);

(statearr_23705_23730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23700 === (4))){
var inst_23671 = (state_23699[(10)]);
var state_23699__$1 = state_23699;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23699__$1,(7),inst_23671);
} else {
if((state_val_23700 === (6))){
var inst_23695 = (state_23699[(2)]);
var state_23699__$1 = state_23699;
var statearr_23706_23731 = state_23699__$1;
(statearr_23706_23731[(2)] = inst_23695);

(statearr_23706_23731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23700 === (3))){
var inst_23697 = (state_23699[(2)]);
var state_23699__$1 = state_23699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23699__$1,inst_23697);
} else {
if((state_val_23700 === (2))){
var inst_23671 = (state_23699[(10)]);
var inst_23673 = cljs.core.count.call(null,inst_23671);
var inst_23674 = (inst_23673 > (0));
var state_23699__$1 = state_23699;
if(cljs.core.truth_(inst_23674)){
var statearr_23708_23732 = state_23699__$1;
(statearr_23708_23732[(1)] = (4));

} else {
var statearr_23709_23733 = state_23699__$1;
(statearr_23709_23733[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23700 === (11))){
var inst_23671 = (state_23699[(10)]);
var inst_23688 = (state_23699[(2)]);
var tmp23707 = inst_23671;
var inst_23671__$1 = tmp23707;
var state_23699__$1 = (function (){var statearr_23710 = state_23699;
(statearr_23710[(11)] = inst_23688);

(statearr_23710[(10)] = inst_23671__$1);

return statearr_23710;
})();
var statearr_23711_23734 = state_23699__$1;
(statearr_23711_23734[(2)] = null);

(statearr_23711_23734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23700 === (9))){
var inst_23679 = (state_23699[(7)]);
var state_23699__$1 = state_23699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23699__$1,(11),out,inst_23679);
} else {
if((state_val_23700 === (5))){
var inst_23693 = cljs.core.async.close_BANG_.call(null,out);
var state_23699__$1 = state_23699;
var statearr_23712_23735 = state_23699__$1;
(statearr_23712_23735[(2)] = inst_23693);

(statearr_23712_23735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23700 === (10))){
var inst_23691 = (state_23699[(2)]);
var state_23699__$1 = state_23699;
var statearr_23713_23736 = state_23699__$1;
(statearr_23713_23736[(2)] = inst_23691);

(statearr_23713_23736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23700 === (8))){
var inst_23679 = (state_23699[(7)]);
var inst_23678 = (state_23699[(8)]);
var inst_23671 = (state_23699[(10)]);
var inst_23680 = (state_23699[(9)]);
var inst_23683 = (function (){var cs = inst_23671;
var vec__23676 = inst_23678;
var v = inst_23679;
var c = inst_23680;
return ((function (cs,vec__23676,v,c,inst_23679,inst_23678,inst_23671,inst_23680,state_val_23700,c__21629__auto___23727,out){
return (function (p1__23666_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23666_SHARP_);
});
;})(cs,vec__23676,v,c,inst_23679,inst_23678,inst_23671,inst_23680,state_val_23700,c__21629__auto___23727,out))
})();
var inst_23684 = cljs.core.filterv.call(null,inst_23683,inst_23671);
var inst_23671__$1 = inst_23684;
var state_23699__$1 = (function (){var statearr_23714 = state_23699;
(statearr_23714[(10)] = inst_23671__$1);

return statearr_23714;
})();
var statearr_23715_23737 = state_23699__$1;
(statearr_23715_23737[(2)] = null);

(statearr_23715_23737[(1)] = (2));


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
});})(c__21629__auto___23727,out))
;
return ((function (switch__21517__auto__,c__21629__auto___23727,out){
return (function() {
var cljs$core$async$state_machine__21518__auto__ = null;
var cljs$core$async$state_machine__21518__auto____0 = (function (){
var statearr_23719 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23719[(0)] = cljs$core$async$state_machine__21518__auto__);

(statearr_23719[(1)] = (1));

return statearr_23719;
});
var cljs$core$async$state_machine__21518__auto____1 = (function (state_23699){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_23699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e23720){if((e23720 instanceof Object)){
var ex__21521__auto__ = e23720;
var statearr_23721_23738 = state_23699;
(statearr_23721_23738[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23739 = state_23699;
state_23699 = G__23739;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$state_machine__21518__auto__ = function(state_23699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21518__auto____1.call(this,state_23699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21518__auto____0;
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21518__auto____1;
return cljs$core$async$state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto___23727,out))
})();
var state__21631__auto__ = (function (){var statearr_23722 = f__21630__auto__.call(null);
(statearr_23722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto___23727);

return statearr_23722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto___23727,out))
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
var args23740 = [];
var len__19529__auto___23789 = arguments.length;
var i__19530__auto___23790 = (0);
while(true){
if((i__19530__auto___23790 < len__19529__auto___23789)){
args23740.push((arguments[i__19530__auto___23790]));

var G__23791 = (i__19530__auto___23790 + (1));
i__19530__auto___23790 = G__23791;
continue;
} else {
}
break;
}

var G__23742 = args23740.length;
switch (G__23742) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23740.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21629__auto___23793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto___23793,out){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto___23793,out){
return (function (state_23766){
var state_val_23767 = (state_23766[(1)]);
if((state_val_23767 === (7))){
var inst_23748 = (state_23766[(7)]);
var inst_23748__$1 = (state_23766[(2)]);
var inst_23749 = (inst_23748__$1 == null);
var inst_23750 = cljs.core.not.call(null,inst_23749);
var state_23766__$1 = (function (){var statearr_23768 = state_23766;
(statearr_23768[(7)] = inst_23748__$1);

return statearr_23768;
})();
if(inst_23750){
var statearr_23769_23794 = state_23766__$1;
(statearr_23769_23794[(1)] = (8));

} else {
var statearr_23770_23795 = state_23766__$1;
(statearr_23770_23795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23767 === (1))){
var inst_23743 = (0);
var state_23766__$1 = (function (){var statearr_23771 = state_23766;
(statearr_23771[(8)] = inst_23743);

return statearr_23771;
})();
var statearr_23772_23796 = state_23766__$1;
(statearr_23772_23796[(2)] = null);

(statearr_23772_23796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23767 === (4))){
var state_23766__$1 = state_23766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23766__$1,(7),ch);
} else {
if((state_val_23767 === (6))){
var inst_23761 = (state_23766[(2)]);
var state_23766__$1 = state_23766;
var statearr_23773_23797 = state_23766__$1;
(statearr_23773_23797[(2)] = inst_23761);

(statearr_23773_23797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23767 === (3))){
var inst_23763 = (state_23766[(2)]);
var inst_23764 = cljs.core.async.close_BANG_.call(null,out);
var state_23766__$1 = (function (){var statearr_23774 = state_23766;
(statearr_23774[(9)] = inst_23763);

return statearr_23774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23766__$1,inst_23764);
} else {
if((state_val_23767 === (2))){
var inst_23743 = (state_23766[(8)]);
var inst_23745 = (inst_23743 < n);
var state_23766__$1 = state_23766;
if(cljs.core.truth_(inst_23745)){
var statearr_23775_23798 = state_23766__$1;
(statearr_23775_23798[(1)] = (4));

} else {
var statearr_23776_23799 = state_23766__$1;
(statearr_23776_23799[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23767 === (11))){
var inst_23743 = (state_23766[(8)]);
var inst_23753 = (state_23766[(2)]);
var inst_23754 = (inst_23743 + (1));
var inst_23743__$1 = inst_23754;
var state_23766__$1 = (function (){var statearr_23777 = state_23766;
(statearr_23777[(10)] = inst_23753);

(statearr_23777[(8)] = inst_23743__$1);

return statearr_23777;
})();
var statearr_23778_23800 = state_23766__$1;
(statearr_23778_23800[(2)] = null);

(statearr_23778_23800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23767 === (9))){
var state_23766__$1 = state_23766;
var statearr_23779_23801 = state_23766__$1;
(statearr_23779_23801[(2)] = null);

(statearr_23779_23801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23767 === (5))){
var state_23766__$1 = state_23766;
var statearr_23780_23802 = state_23766__$1;
(statearr_23780_23802[(2)] = null);

(statearr_23780_23802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23767 === (10))){
var inst_23758 = (state_23766[(2)]);
var state_23766__$1 = state_23766;
var statearr_23781_23803 = state_23766__$1;
(statearr_23781_23803[(2)] = inst_23758);

(statearr_23781_23803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23767 === (8))){
var inst_23748 = (state_23766[(7)]);
var state_23766__$1 = state_23766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23766__$1,(11),out,inst_23748);
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
});})(c__21629__auto___23793,out))
;
return ((function (switch__21517__auto__,c__21629__auto___23793,out){
return (function() {
var cljs$core$async$state_machine__21518__auto__ = null;
var cljs$core$async$state_machine__21518__auto____0 = (function (){
var statearr_23785 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23785[(0)] = cljs$core$async$state_machine__21518__auto__);

(statearr_23785[(1)] = (1));

return statearr_23785;
});
var cljs$core$async$state_machine__21518__auto____1 = (function (state_23766){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_23766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e23786){if((e23786 instanceof Object)){
var ex__21521__auto__ = e23786;
var statearr_23787_23804 = state_23766;
(statearr_23787_23804[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23805 = state_23766;
state_23766 = G__23805;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$state_machine__21518__auto__ = function(state_23766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21518__auto____1.call(this,state_23766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21518__auto____0;
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21518__auto____1;
return cljs$core$async$state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto___23793,out))
})();
var state__21631__auto__ = (function (){var statearr_23788 = f__21630__auto__.call(null);
(statearr_23788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto___23793);

return statearr_23788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto___23793,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23813 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23813 = (function (map_LT_,f,ch,meta23814){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23814 = meta23814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23815,meta23814__$1){
var self__ = this;
var _23815__$1 = this;
return (new cljs.core.async.t_cljs$core$async23813(self__.map_LT_,self__.f,self__.ch,meta23814__$1));
});

cljs.core.async.t_cljs$core$async23813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23815){
var self__ = this;
var _23815__$1 = this;
return self__.meta23814;
});

cljs.core.async.t_cljs$core$async23813.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23813.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23813.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23813.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23813.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23816 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23816 = (function (map_LT_,f,ch,meta23814,_,fn1,meta23817){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23814 = meta23814;
this._ = _;
this.fn1 = fn1;
this.meta23817 = meta23817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23818,meta23817__$1){
var self__ = this;
var _23818__$1 = this;
return (new cljs.core.async.t_cljs$core$async23816(self__.map_LT_,self__.f,self__.ch,self__.meta23814,self__._,self__.fn1,meta23817__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23816.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23818){
var self__ = this;
var _23818__$1 = this;
return self__.meta23817;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23816.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23816.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23816.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23816.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23806_SHARP_){
return f1.call(null,(((p1__23806_SHARP_ == null))?null:self__.f.call(null,p1__23806_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23816.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23814","meta23814",315535709,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23813","cljs.core.async/t_cljs$core$async23813",1284783644,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23817","meta23817",1260282314,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23816.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23816";

cljs.core.async.t_cljs$core$async23816.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23816");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23816 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23816(map_LT___$1,f__$1,ch__$1,meta23814__$1,___$2,fn1__$1,meta23817){
return (new cljs.core.async.t_cljs$core$async23816(map_LT___$1,f__$1,ch__$1,meta23814__$1,___$2,fn1__$1,meta23817));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23816(self__.map_LT_,self__.f,self__.ch,self__.meta23814,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async23813.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23813.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23814","meta23814",315535709,null)], null);
});

cljs.core.async.t_cljs$core$async23813.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23813";

cljs.core.async.t_cljs$core$async23813.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23813");
});

cljs.core.async.__GT_t_cljs$core$async23813 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23813(map_LT___$1,f__$1,ch__$1,meta23814){
return (new cljs.core.async.t_cljs$core$async23813(map_LT___$1,f__$1,ch__$1,meta23814));
});

}

return (new cljs.core.async.t_cljs$core$async23813(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23822 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23822 = (function (map_GT_,f,ch,meta23823){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23823 = meta23823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23824,meta23823__$1){
var self__ = this;
var _23824__$1 = this;
return (new cljs.core.async.t_cljs$core$async23822(self__.map_GT_,self__.f,self__.ch,meta23823__$1));
});

cljs.core.async.t_cljs$core$async23822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23824){
var self__ = this;
var _23824__$1 = this;
return self__.meta23823;
});

cljs.core.async.t_cljs$core$async23822.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23822.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23822.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23822.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23822.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23822.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23823","meta23823",1467416991,null)], null);
});

cljs.core.async.t_cljs$core$async23822.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23822";

cljs.core.async.t_cljs$core$async23822.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23822");
});

cljs.core.async.__GT_t_cljs$core$async23822 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23822(map_GT___$1,f__$1,ch__$1,meta23823){
return (new cljs.core.async.t_cljs$core$async23822(map_GT___$1,f__$1,ch__$1,meta23823));
});

}

return (new cljs.core.async.t_cljs$core$async23822(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23828 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23828 = (function (filter_GT_,p,ch,meta23829){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23829 = meta23829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23830,meta23829__$1){
var self__ = this;
var _23830__$1 = this;
return (new cljs.core.async.t_cljs$core$async23828(self__.filter_GT_,self__.p,self__.ch,meta23829__$1));
});

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23830){
var self__ = this;
var _23830__$1 = this;
return self__.meta23829;
});

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23828.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23829","meta23829",984151816,null)], null);
});

cljs.core.async.t_cljs$core$async23828.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23828";

cljs.core.async.t_cljs$core$async23828.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23828");
});

cljs.core.async.__GT_t_cljs$core$async23828 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23828(filter_GT___$1,p__$1,ch__$1,meta23829){
return (new cljs.core.async.t_cljs$core$async23828(filter_GT___$1,p__$1,ch__$1,meta23829));
});

}

return (new cljs.core.async.t_cljs$core$async23828(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args23831 = [];
var len__19529__auto___23875 = arguments.length;
var i__19530__auto___23876 = (0);
while(true){
if((i__19530__auto___23876 < len__19529__auto___23875)){
args23831.push((arguments[i__19530__auto___23876]));

var G__23877 = (i__19530__auto___23876 + (1));
i__19530__auto___23876 = G__23877;
continue;
} else {
}
break;
}

var G__23833 = args23831.length;
switch (G__23833) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23831.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21629__auto___23879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto___23879,out){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto___23879,out){
return (function (state_23854){
var state_val_23855 = (state_23854[(1)]);
if((state_val_23855 === (7))){
var inst_23850 = (state_23854[(2)]);
var state_23854__$1 = state_23854;
var statearr_23856_23880 = state_23854__$1;
(statearr_23856_23880[(2)] = inst_23850);

(statearr_23856_23880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23855 === (1))){
var state_23854__$1 = state_23854;
var statearr_23857_23881 = state_23854__$1;
(statearr_23857_23881[(2)] = null);

(statearr_23857_23881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23855 === (4))){
var inst_23836 = (state_23854[(7)]);
var inst_23836__$1 = (state_23854[(2)]);
var inst_23837 = (inst_23836__$1 == null);
var state_23854__$1 = (function (){var statearr_23858 = state_23854;
(statearr_23858[(7)] = inst_23836__$1);

return statearr_23858;
})();
if(cljs.core.truth_(inst_23837)){
var statearr_23859_23882 = state_23854__$1;
(statearr_23859_23882[(1)] = (5));

} else {
var statearr_23860_23883 = state_23854__$1;
(statearr_23860_23883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23855 === (6))){
var inst_23836 = (state_23854[(7)]);
var inst_23841 = p.call(null,inst_23836);
var state_23854__$1 = state_23854;
if(cljs.core.truth_(inst_23841)){
var statearr_23861_23884 = state_23854__$1;
(statearr_23861_23884[(1)] = (8));

} else {
var statearr_23862_23885 = state_23854__$1;
(statearr_23862_23885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23855 === (3))){
var inst_23852 = (state_23854[(2)]);
var state_23854__$1 = state_23854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23854__$1,inst_23852);
} else {
if((state_val_23855 === (2))){
var state_23854__$1 = state_23854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23854__$1,(4),ch);
} else {
if((state_val_23855 === (11))){
var inst_23844 = (state_23854[(2)]);
var state_23854__$1 = state_23854;
var statearr_23863_23886 = state_23854__$1;
(statearr_23863_23886[(2)] = inst_23844);

(statearr_23863_23886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23855 === (9))){
var state_23854__$1 = state_23854;
var statearr_23864_23887 = state_23854__$1;
(statearr_23864_23887[(2)] = null);

(statearr_23864_23887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23855 === (5))){
var inst_23839 = cljs.core.async.close_BANG_.call(null,out);
var state_23854__$1 = state_23854;
var statearr_23865_23888 = state_23854__$1;
(statearr_23865_23888[(2)] = inst_23839);

(statearr_23865_23888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23855 === (10))){
var inst_23847 = (state_23854[(2)]);
var state_23854__$1 = (function (){var statearr_23866 = state_23854;
(statearr_23866[(8)] = inst_23847);

return statearr_23866;
})();
var statearr_23867_23889 = state_23854__$1;
(statearr_23867_23889[(2)] = null);

(statearr_23867_23889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23855 === (8))){
var inst_23836 = (state_23854[(7)]);
var state_23854__$1 = state_23854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23854__$1,(11),out,inst_23836);
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
});})(c__21629__auto___23879,out))
;
return ((function (switch__21517__auto__,c__21629__auto___23879,out){
return (function() {
var cljs$core$async$state_machine__21518__auto__ = null;
var cljs$core$async$state_machine__21518__auto____0 = (function (){
var statearr_23871 = [null,null,null,null,null,null,null,null,null];
(statearr_23871[(0)] = cljs$core$async$state_machine__21518__auto__);

(statearr_23871[(1)] = (1));

return statearr_23871;
});
var cljs$core$async$state_machine__21518__auto____1 = (function (state_23854){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_23854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e23872){if((e23872 instanceof Object)){
var ex__21521__auto__ = e23872;
var statearr_23873_23890 = state_23854;
(statearr_23873_23890[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23891 = state_23854;
state_23854 = G__23891;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$state_machine__21518__auto__ = function(state_23854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21518__auto____1.call(this,state_23854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21518__auto____0;
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21518__auto____1;
return cljs$core$async$state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto___23879,out))
})();
var state__21631__auto__ = (function (){var statearr_23874 = f__21630__auto__.call(null);
(statearr_23874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto___23879);

return statearr_23874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto___23879,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23892 = [];
var len__19529__auto___23895 = arguments.length;
var i__19530__auto___23896 = (0);
while(true){
if((i__19530__auto___23896 < len__19529__auto___23895)){
args23892.push((arguments[i__19530__auto___23896]));

var G__23897 = (i__19530__auto___23896 + (1));
i__19530__auto___23896 = G__23897;
continue;
} else {
}
break;
}

var G__23894 = args23892.length;
switch (G__23894) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23892.length)].join('')));

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
var c__21629__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto__){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto__){
return (function (state_24064){
var state_val_24065 = (state_24064[(1)]);
if((state_val_24065 === (7))){
var inst_24060 = (state_24064[(2)]);
var state_24064__$1 = state_24064;
var statearr_24066_24107 = state_24064__$1;
(statearr_24066_24107[(2)] = inst_24060);

(statearr_24066_24107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24065 === (20))){
var inst_24030 = (state_24064[(7)]);
var inst_24041 = (state_24064[(2)]);
var inst_24042 = cljs.core.next.call(null,inst_24030);
var inst_24016 = inst_24042;
var inst_24017 = null;
var inst_24018 = (0);
var inst_24019 = (0);
var state_24064__$1 = (function (){var statearr_24067 = state_24064;
(statearr_24067[(8)] = inst_24017);

(statearr_24067[(9)] = inst_24018);

(statearr_24067[(10)] = inst_24019);

(statearr_24067[(11)] = inst_24041);

(statearr_24067[(12)] = inst_24016);

return statearr_24067;
})();
var statearr_24068_24108 = state_24064__$1;
(statearr_24068_24108[(2)] = null);

(statearr_24068_24108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24065 === (1))){
var state_24064__$1 = state_24064;
var statearr_24069_24109 = state_24064__$1;
(statearr_24069_24109[(2)] = null);

(statearr_24069_24109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24065 === (4))){
var inst_24005 = (state_24064[(13)]);
var inst_24005__$1 = (state_24064[(2)]);
var inst_24006 = (inst_24005__$1 == null);
var state_24064__$1 = (function (){var statearr_24070 = state_24064;
(statearr_24070[(13)] = inst_24005__$1);

return statearr_24070;
})();
if(cljs.core.truth_(inst_24006)){
var statearr_24071_24110 = state_24064__$1;
(statearr_24071_24110[(1)] = (5));

} else {
var statearr_24072_24111 = state_24064__$1;
(statearr_24072_24111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24065 === (15))){
var state_24064__$1 = state_24064;
var statearr_24076_24112 = state_24064__$1;
(statearr_24076_24112[(2)] = null);

(statearr_24076_24112[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24065 === (21))){
var state_24064__$1 = state_24064;
var statearr_24077_24113 = state_24064__$1;
(statearr_24077_24113[(2)] = null);

(statearr_24077_24113[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24065 === (13))){
var inst_24017 = (state_24064[(8)]);
var inst_24018 = (state_24064[(9)]);
var inst_24019 = (state_24064[(10)]);
var inst_24016 = (state_24064[(12)]);
var inst_24026 = (state_24064[(2)]);
var inst_24027 = (inst_24019 + (1));
var tmp24073 = inst_24017;
var tmp24074 = inst_24018;
var tmp24075 = inst_24016;
var inst_24016__$1 = tmp24075;
var inst_24017__$1 = tmp24073;
var inst_24018__$1 = tmp24074;
var inst_24019__$1 = inst_24027;
var state_24064__$1 = (function (){var statearr_24078 = state_24064;
(statearr_24078[(8)] = inst_24017__$1);

(statearr_24078[(14)] = inst_24026);

(statearr_24078[(9)] = inst_24018__$1);

(statearr_24078[(10)] = inst_24019__$1);

(statearr_24078[(12)] = inst_24016__$1);

return statearr_24078;
})();
var statearr_24079_24114 = state_24064__$1;
(statearr_24079_24114[(2)] = null);

(statearr_24079_24114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24065 === (22))){
var state_24064__$1 = state_24064;
var statearr_24080_24115 = state_24064__$1;
(statearr_24080_24115[(2)] = null);

(statearr_24080_24115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24065 === (6))){
var inst_24005 = (state_24064[(13)]);
var inst_24014 = f.call(null,inst_24005);
var inst_24015 = cljs.core.seq.call(null,inst_24014);
var inst_24016 = inst_24015;
var inst_24017 = null;
var inst_24018 = (0);
var inst_24019 = (0);
var state_24064__$1 = (function (){var statearr_24081 = state_24064;
(statearr_24081[(8)] = inst_24017);

(statearr_24081[(9)] = inst_24018);

(statearr_24081[(10)] = inst_24019);

(statearr_24081[(12)] = inst_24016);

return statearr_24081;
})();
var statearr_24082_24116 = state_24064__$1;
(statearr_24082_24116[(2)] = null);

(statearr_24082_24116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24065 === (17))){
var inst_24030 = (state_24064[(7)]);
var inst_24034 = cljs.core.chunk_first.call(null,inst_24030);
var inst_24035 = cljs.core.chunk_rest.call(null,inst_24030);
var inst_24036 = cljs.core.count.call(null,inst_24034);
var inst_24016 = inst_24035;
var inst_24017 = inst_24034;
var inst_24018 = inst_24036;
var inst_24019 = (0);
var state_24064__$1 = (function (){var statearr_24083 = state_24064;
(statearr_24083[(8)] = inst_24017);

(statearr_24083[(9)] = inst_24018);

(statearr_24083[(10)] = inst_24019);

(statearr_24083[(12)] = inst_24016);

return statearr_24083;
})();
var statearr_24084_24117 = state_24064__$1;
(statearr_24084_24117[(2)] = null);

(statearr_24084_24117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24065 === (3))){
var inst_24062 = (state_24064[(2)]);
var state_24064__$1 = state_24064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24064__$1,inst_24062);
} else {
if((state_val_24065 === (12))){
var inst_24050 = (state_24064[(2)]);
var state_24064__$1 = state_24064;
var statearr_24085_24118 = state_24064__$1;
(statearr_24085_24118[(2)] = inst_24050);

(statearr_24085_24118[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24065 === (2))){
var state_24064__$1 = state_24064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24064__$1,(4),in$);
} else {
if((state_val_24065 === (23))){
var inst_24058 = (state_24064[(2)]);
var state_24064__$1 = state_24064;
var statearr_24086_24119 = state_24064__$1;
(statearr_24086_24119[(2)] = inst_24058);

(statearr_24086_24119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24065 === (19))){
var inst_24045 = (state_24064[(2)]);
var state_24064__$1 = state_24064;
var statearr_24087_24120 = state_24064__$1;
(statearr_24087_24120[(2)] = inst_24045);

(statearr_24087_24120[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24065 === (11))){
var inst_24030 = (state_24064[(7)]);
var inst_24016 = (state_24064[(12)]);
var inst_24030__$1 = cljs.core.seq.call(null,inst_24016);
var state_24064__$1 = (function (){var statearr_24088 = state_24064;
(statearr_24088[(7)] = inst_24030__$1);

return statearr_24088;
})();
if(inst_24030__$1){
var statearr_24089_24121 = state_24064__$1;
(statearr_24089_24121[(1)] = (14));

} else {
var statearr_24090_24122 = state_24064__$1;
(statearr_24090_24122[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24065 === (9))){
var inst_24052 = (state_24064[(2)]);
var inst_24053 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24064__$1 = (function (){var statearr_24091 = state_24064;
(statearr_24091[(15)] = inst_24052);

return statearr_24091;
})();
if(cljs.core.truth_(inst_24053)){
var statearr_24092_24123 = state_24064__$1;
(statearr_24092_24123[(1)] = (21));

} else {
var statearr_24093_24124 = state_24064__$1;
(statearr_24093_24124[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24065 === (5))){
var inst_24008 = cljs.core.async.close_BANG_.call(null,out);
var state_24064__$1 = state_24064;
var statearr_24094_24125 = state_24064__$1;
(statearr_24094_24125[(2)] = inst_24008);

(statearr_24094_24125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24065 === (14))){
var inst_24030 = (state_24064[(7)]);
var inst_24032 = cljs.core.chunked_seq_QMARK_.call(null,inst_24030);
var state_24064__$1 = state_24064;
if(inst_24032){
var statearr_24095_24126 = state_24064__$1;
(statearr_24095_24126[(1)] = (17));

} else {
var statearr_24096_24127 = state_24064__$1;
(statearr_24096_24127[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24065 === (16))){
var inst_24048 = (state_24064[(2)]);
var state_24064__$1 = state_24064;
var statearr_24097_24128 = state_24064__$1;
(statearr_24097_24128[(2)] = inst_24048);

(statearr_24097_24128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24065 === (10))){
var inst_24017 = (state_24064[(8)]);
var inst_24019 = (state_24064[(10)]);
var inst_24024 = cljs.core._nth.call(null,inst_24017,inst_24019);
var state_24064__$1 = state_24064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24064__$1,(13),out,inst_24024);
} else {
if((state_val_24065 === (18))){
var inst_24030 = (state_24064[(7)]);
var inst_24039 = cljs.core.first.call(null,inst_24030);
var state_24064__$1 = state_24064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24064__$1,(20),out,inst_24039);
} else {
if((state_val_24065 === (8))){
var inst_24018 = (state_24064[(9)]);
var inst_24019 = (state_24064[(10)]);
var inst_24021 = (inst_24019 < inst_24018);
var inst_24022 = inst_24021;
var state_24064__$1 = state_24064;
if(cljs.core.truth_(inst_24022)){
var statearr_24098_24129 = state_24064__$1;
(statearr_24098_24129[(1)] = (10));

} else {
var statearr_24099_24130 = state_24064__$1;
(statearr_24099_24130[(1)] = (11));

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
});})(c__21629__auto__))
;
return ((function (switch__21517__auto__,c__21629__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21518__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21518__auto____0 = (function (){
var statearr_24103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24103[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21518__auto__);

(statearr_24103[(1)] = (1));

return statearr_24103;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21518__auto____1 = (function (state_24064){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_24064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e24104){if((e24104 instanceof Object)){
var ex__21521__auto__ = e24104;
var statearr_24105_24131 = state_24064;
(statearr_24105_24131[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24132 = state_24064;
state_24064 = G__24132;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21518__auto__ = function(state_24064){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21518__auto____1.call(this,state_24064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21518__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21518__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto__))
})();
var state__21631__auto__ = (function (){var statearr_24106 = f__21630__auto__.call(null);
(statearr_24106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto__);

return statearr_24106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto__))
);

return c__21629__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24133 = [];
var len__19529__auto___24136 = arguments.length;
var i__19530__auto___24137 = (0);
while(true){
if((i__19530__auto___24137 < len__19529__auto___24136)){
args24133.push((arguments[i__19530__auto___24137]));

var G__24138 = (i__19530__auto___24137 + (1));
i__19530__auto___24137 = G__24138;
continue;
} else {
}
break;
}

var G__24135 = args24133.length;
switch (G__24135) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24133.length)].join('')));

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
var args24140 = [];
var len__19529__auto___24143 = arguments.length;
var i__19530__auto___24144 = (0);
while(true){
if((i__19530__auto___24144 < len__19529__auto___24143)){
args24140.push((arguments[i__19530__auto___24144]));

var G__24145 = (i__19530__auto___24144 + (1));
i__19530__auto___24144 = G__24145;
continue;
} else {
}
break;
}

var G__24142 = args24140.length;
switch (G__24142) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24140.length)].join('')));

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
var args24147 = [];
var len__19529__auto___24198 = arguments.length;
var i__19530__auto___24199 = (0);
while(true){
if((i__19530__auto___24199 < len__19529__auto___24198)){
args24147.push((arguments[i__19530__auto___24199]));

var G__24200 = (i__19530__auto___24199 + (1));
i__19530__auto___24199 = G__24200;
continue;
} else {
}
break;
}

var G__24149 = args24147.length;
switch (G__24149) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24147.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21629__auto___24202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto___24202,out){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto___24202,out){
return (function (state_24173){
var state_val_24174 = (state_24173[(1)]);
if((state_val_24174 === (7))){
var inst_24168 = (state_24173[(2)]);
var state_24173__$1 = state_24173;
var statearr_24175_24203 = state_24173__$1;
(statearr_24175_24203[(2)] = inst_24168);

(statearr_24175_24203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24174 === (1))){
var inst_24150 = null;
var state_24173__$1 = (function (){var statearr_24176 = state_24173;
(statearr_24176[(7)] = inst_24150);

return statearr_24176;
})();
var statearr_24177_24204 = state_24173__$1;
(statearr_24177_24204[(2)] = null);

(statearr_24177_24204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24174 === (4))){
var inst_24153 = (state_24173[(8)]);
var inst_24153__$1 = (state_24173[(2)]);
var inst_24154 = (inst_24153__$1 == null);
var inst_24155 = cljs.core.not.call(null,inst_24154);
var state_24173__$1 = (function (){var statearr_24178 = state_24173;
(statearr_24178[(8)] = inst_24153__$1);

return statearr_24178;
})();
if(inst_24155){
var statearr_24179_24205 = state_24173__$1;
(statearr_24179_24205[(1)] = (5));

} else {
var statearr_24180_24206 = state_24173__$1;
(statearr_24180_24206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24174 === (6))){
var state_24173__$1 = state_24173;
var statearr_24181_24207 = state_24173__$1;
(statearr_24181_24207[(2)] = null);

(statearr_24181_24207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24174 === (3))){
var inst_24170 = (state_24173[(2)]);
var inst_24171 = cljs.core.async.close_BANG_.call(null,out);
var state_24173__$1 = (function (){var statearr_24182 = state_24173;
(statearr_24182[(9)] = inst_24170);

return statearr_24182;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24173__$1,inst_24171);
} else {
if((state_val_24174 === (2))){
var state_24173__$1 = state_24173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24173__$1,(4),ch);
} else {
if((state_val_24174 === (11))){
var inst_24153 = (state_24173[(8)]);
var inst_24162 = (state_24173[(2)]);
var inst_24150 = inst_24153;
var state_24173__$1 = (function (){var statearr_24183 = state_24173;
(statearr_24183[(7)] = inst_24150);

(statearr_24183[(10)] = inst_24162);

return statearr_24183;
})();
var statearr_24184_24208 = state_24173__$1;
(statearr_24184_24208[(2)] = null);

(statearr_24184_24208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24174 === (9))){
var inst_24153 = (state_24173[(8)]);
var state_24173__$1 = state_24173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24173__$1,(11),out,inst_24153);
} else {
if((state_val_24174 === (5))){
var inst_24150 = (state_24173[(7)]);
var inst_24153 = (state_24173[(8)]);
var inst_24157 = cljs.core._EQ_.call(null,inst_24153,inst_24150);
var state_24173__$1 = state_24173;
if(inst_24157){
var statearr_24186_24209 = state_24173__$1;
(statearr_24186_24209[(1)] = (8));

} else {
var statearr_24187_24210 = state_24173__$1;
(statearr_24187_24210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24174 === (10))){
var inst_24165 = (state_24173[(2)]);
var state_24173__$1 = state_24173;
var statearr_24188_24211 = state_24173__$1;
(statearr_24188_24211[(2)] = inst_24165);

(statearr_24188_24211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24174 === (8))){
var inst_24150 = (state_24173[(7)]);
var tmp24185 = inst_24150;
var inst_24150__$1 = tmp24185;
var state_24173__$1 = (function (){var statearr_24189 = state_24173;
(statearr_24189[(7)] = inst_24150__$1);

return statearr_24189;
})();
var statearr_24190_24212 = state_24173__$1;
(statearr_24190_24212[(2)] = null);

(statearr_24190_24212[(1)] = (2));


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
});})(c__21629__auto___24202,out))
;
return ((function (switch__21517__auto__,c__21629__auto___24202,out){
return (function() {
var cljs$core$async$state_machine__21518__auto__ = null;
var cljs$core$async$state_machine__21518__auto____0 = (function (){
var statearr_24194 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24194[(0)] = cljs$core$async$state_machine__21518__auto__);

(statearr_24194[(1)] = (1));

return statearr_24194;
});
var cljs$core$async$state_machine__21518__auto____1 = (function (state_24173){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_24173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e24195){if((e24195 instanceof Object)){
var ex__21521__auto__ = e24195;
var statearr_24196_24213 = state_24173;
(statearr_24196_24213[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24214 = state_24173;
state_24173 = G__24214;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$state_machine__21518__auto__ = function(state_24173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21518__auto____1.call(this,state_24173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21518__auto____0;
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21518__auto____1;
return cljs$core$async$state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto___24202,out))
})();
var state__21631__auto__ = (function (){var statearr_24197 = f__21630__auto__.call(null);
(statearr_24197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto___24202);

return statearr_24197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto___24202,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24215 = [];
var len__19529__auto___24285 = arguments.length;
var i__19530__auto___24286 = (0);
while(true){
if((i__19530__auto___24286 < len__19529__auto___24285)){
args24215.push((arguments[i__19530__auto___24286]));

var G__24287 = (i__19530__auto___24286 + (1));
i__19530__auto___24286 = G__24287;
continue;
} else {
}
break;
}

var G__24217 = args24215.length;
switch (G__24217) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24215.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21629__auto___24289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto___24289,out){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto___24289,out){
return (function (state_24255){
var state_val_24256 = (state_24255[(1)]);
if((state_val_24256 === (7))){
var inst_24251 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24257_24290 = state_24255__$1;
(statearr_24257_24290[(2)] = inst_24251);

(statearr_24257_24290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (1))){
var inst_24218 = (new Array(n));
var inst_24219 = inst_24218;
var inst_24220 = (0);
var state_24255__$1 = (function (){var statearr_24258 = state_24255;
(statearr_24258[(7)] = inst_24220);

(statearr_24258[(8)] = inst_24219);

return statearr_24258;
})();
var statearr_24259_24291 = state_24255__$1;
(statearr_24259_24291[(2)] = null);

(statearr_24259_24291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (4))){
var inst_24223 = (state_24255[(9)]);
var inst_24223__$1 = (state_24255[(2)]);
var inst_24224 = (inst_24223__$1 == null);
var inst_24225 = cljs.core.not.call(null,inst_24224);
var state_24255__$1 = (function (){var statearr_24260 = state_24255;
(statearr_24260[(9)] = inst_24223__$1);

return statearr_24260;
})();
if(inst_24225){
var statearr_24261_24292 = state_24255__$1;
(statearr_24261_24292[(1)] = (5));

} else {
var statearr_24262_24293 = state_24255__$1;
(statearr_24262_24293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (15))){
var inst_24245 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24263_24294 = state_24255__$1;
(statearr_24263_24294[(2)] = inst_24245);

(statearr_24263_24294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (13))){
var state_24255__$1 = state_24255;
var statearr_24264_24295 = state_24255__$1;
(statearr_24264_24295[(2)] = null);

(statearr_24264_24295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (6))){
var inst_24220 = (state_24255[(7)]);
var inst_24241 = (inst_24220 > (0));
var state_24255__$1 = state_24255;
if(cljs.core.truth_(inst_24241)){
var statearr_24265_24296 = state_24255__$1;
(statearr_24265_24296[(1)] = (12));

} else {
var statearr_24266_24297 = state_24255__$1;
(statearr_24266_24297[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (3))){
var inst_24253 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24255__$1,inst_24253);
} else {
if((state_val_24256 === (12))){
var inst_24219 = (state_24255[(8)]);
var inst_24243 = cljs.core.vec.call(null,inst_24219);
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24255__$1,(15),out,inst_24243);
} else {
if((state_val_24256 === (2))){
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24255__$1,(4),ch);
} else {
if((state_val_24256 === (11))){
var inst_24235 = (state_24255[(2)]);
var inst_24236 = (new Array(n));
var inst_24219 = inst_24236;
var inst_24220 = (0);
var state_24255__$1 = (function (){var statearr_24267 = state_24255;
(statearr_24267[(7)] = inst_24220);

(statearr_24267[(10)] = inst_24235);

(statearr_24267[(8)] = inst_24219);

return statearr_24267;
})();
var statearr_24268_24298 = state_24255__$1;
(statearr_24268_24298[(2)] = null);

(statearr_24268_24298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (9))){
var inst_24219 = (state_24255[(8)]);
var inst_24233 = cljs.core.vec.call(null,inst_24219);
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24255__$1,(11),out,inst_24233);
} else {
if((state_val_24256 === (5))){
var inst_24220 = (state_24255[(7)]);
var inst_24228 = (state_24255[(11)]);
var inst_24219 = (state_24255[(8)]);
var inst_24223 = (state_24255[(9)]);
var inst_24227 = (inst_24219[inst_24220] = inst_24223);
var inst_24228__$1 = (inst_24220 + (1));
var inst_24229 = (inst_24228__$1 < n);
var state_24255__$1 = (function (){var statearr_24269 = state_24255;
(statearr_24269[(12)] = inst_24227);

(statearr_24269[(11)] = inst_24228__$1);

return statearr_24269;
})();
if(cljs.core.truth_(inst_24229)){
var statearr_24270_24299 = state_24255__$1;
(statearr_24270_24299[(1)] = (8));

} else {
var statearr_24271_24300 = state_24255__$1;
(statearr_24271_24300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (14))){
var inst_24248 = (state_24255[(2)]);
var inst_24249 = cljs.core.async.close_BANG_.call(null,out);
var state_24255__$1 = (function (){var statearr_24273 = state_24255;
(statearr_24273[(13)] = inst_24248);

return statearr_24273;
})();
var statearr_24274_24301 = state_24255__$1;
(statearr_24274_24301[(2)] = inst_24249);

(statearr_24274_24301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (10))){
var inst_24239 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24275_24302 = state_24255__$1;
(statearr_24275_24302[(2)] = inst_24239);

(statearr_24275_24302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (8))){
var inst_24228 = (state_24255[(11)]);
var inst_24219 = (state_24255[(8)]);
var tmp24272 = inst_24219;
var inst_24219__$1 = tmp24272;
var inst_24220 = inst_24228;
var state_24255__$1 = (function (){var statearr_24276 = state_24255;
(statearr_24276[(7)] = inst_24220);

(statearr_24276[(8)] = inst_24219__$1);

return statearr_24276;
})();
var statearr_24277_24303 = state_24255__$1;
(statearr_24277_24303[(2)] = null);

(statearr_24277_24303[(1)] = (2));


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
});})(c__21629__auto___24289,out))
;
return ((function (switch__21517__auto__,c__21629__auto___24289,out){
return (function() {
var cljs$core$async$state_machine__21518__auto__ = null;
var cljs$core$async$state_machine__21518__auto____0 = (function (){
var statearr_24281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24281[(0)] = cljs$core$async$state_machine__21518__auto__);

(statearr_24281[(1)] = (1));

return statearr_24281;
});
var cljs$core$async$state_machine__21518__auto____1 = (function (state_24255){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_24255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e24282){if((e24282 instanceof Object)){
var ex__21521__auto__ = e24282;
var statearr_24283_24304 = state_24255;
(statearr_24283_24304[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24305 = state_24255;
state_24255 = G__24305;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$state_machine__21518__auto__ = function(state_24255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21518__auto____1.call(this,state_24255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21518__auto____0;
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21518__auto____1;
return cljs$core$async$state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto___24289,out))
})();
var state__21631__auto__ = (function (){var statearr_24284 = f__21630__auto__.call(null);
(statearr_24284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto___24289);

return statearr_24284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto___24289,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24306 = [];
var len__19529__auto___24380 = arguments.length;
var i__19530__auto___24381 = (0);
while(true){
if((i__19530__auto___24381 < len__19529__auto___24380)){
args24306.push((arguments[i__19530__auto___24381]));

var G__24382 = (i__19530__auto___24381 + (1));
i__19530__auto___24381 = G__24382;
continue;
} else {
}
break;
}

var G__24308 = args24306.length;
switch (G__24308) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24306.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21629__auto___24384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21629__auto___24384,out){
return (function (){
var f__21630__auto__ = (function (){var switch__21517__auto__ = ((function (c__21629__auto___24384,out){
return (function (state_24350){
var state_val_24351 = (state_24350[(1)]);
if((state_val_24351 === (7))){
var inst_24346 = (state_24350[(2)]);
var state_24350__$1 = state_24350;
var statearr_24352_24385 = state_24350__$1;
(statearr_24352_24385[(2)] = inst_24346);

(statearr_24352_24385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (1))){
var inst_24309 = [];
var inst_24310 = inst_24309;
var inst_24311 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24350__$1 = (function (){var statearr_24353 = state_24350;
(statearr_24353[(7)] = inst_24311);

(statearr_24353[(8)] = inst_24310);

return statearr_24353;
})();
var statearr_24354_24386 = state_24350__$1;
(statearr_24354_24386[(2)] = null);

(statearr_24354_24386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (4))){
var inst_24314 = (state_24350[(9)]);
var inst_24314__$1 = (state_24350[(2)]);
var inst_24315 = (inst_24314__$1 == null);
var inst_24316 = cljs.core.not.call(null,inst_24315);
var state_24350__$1 = (function (){var statearr_24355 = state_24350;
(statearr_24355[(9)] = inst_24314__$1);

return statearr_24355;
})();
if(inst_24316){
var statearr_24356_24387 = state_24350__$1;
(statearr_24356_24387[(1)] = (5));

} else {
var statearr_24357_24388 = state_24350__$1;
(statearr_24357_24388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (15))){
var inst_24340 = (state_24350[(2)]);
var state_24350__$1 = state_24350;
var statearr_24358_24389 = state_24350__$1;
(statearr_24358_24389[(2)] = inst_24340);

(statearr_24358_24389[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (13))){
var state_24350__$1 = state_24350;
var statearr_24359_24390 = state_24350__$1;
(statearr_24359_24390[(2)] = null);

(statearr_24359_24390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (6))){
var inst_24310 = (state_24350[(8)]);
var inst_24335 = inst_24310.length;
var inst_24336 = (inst_24335 > (0));
var state_24350__$1 = state_24350;
if(cljs.core.truth_(inst_24336)){
var statearr_24360_24391 = state_24350__$1;
(statearr_24360_24391[(1)] = (12));

} else {
var statearr_24361_24392 = state_24350__$1;
(statearr_24361_24392[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (3))){
var inst_24348 = (state_24350[(2)]);
var state_24350__$1 = state_24350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24350__$1,inst_24348);
} else {
if((state_val_24351 === (12))){
var inst_24310 = (state_24350[(8)]);
var inst_24338 = cljs.core.vec.call(null,inst_24310);
var state_24350__$1 = state_24350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24350__$1,(15),out,inst_24338);
} else {
if((state_val_24351 === (2))){
var state_24350__$1 = state_24350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24350__$1,(4),ch);
} else {
if((state_val_24351 === (11))){
var inst_24314 = (state_24350[(9)]);
var inst_24318 = (state_24350[(10)]);
var inst_24328 = (state_24350[(2)]);
var inst_24329 = [];
var inst_24330 = inst_24329.push(inst_24314);
var inst_24310 = inst_24329;
var inst_24311 = inst_24318;
var state_24350__$1 = (function (){var statearr_24362 = state_24350;
(statearr_24362[(7)] = inst_24311);

(statearr_24362[(11)] = inst_24328);

(statearr_24362[(12)] = inst_24330);

(statearr_24362[(8)] = inst_24310);

return statearr_24362;
})();
var statearr_24363_24393 = state_24350__$1;
(statearr_24363_24393[(2)] = null);

(statearr_24363_24393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (9))){
var inst_24310 = (state_24350[(8)]);
var inst_24326 = cljs.core.vec.call(null,inst_24310);
var state_24350__$1 = state_24350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24350__$1,(11),out,inst_24326);
} else {
if((state_val_24351 === (5))){
var inst_24314 = (state_24350[(9)]);
var inst_24318 = (state_24350[(10)]);
var inst_24311 = (state_24350[(7)]);
var inst_24318__$1 = f.call(null,inst_24314);
var inst_24319 = cljs.core._EQ_.call(null,inst_24318__$1,inst_24311);
var inst_24320 = cljs.core.keyword_identical_QMARK_.call(null,inst_24311,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24321 = (inst_24319) || (inst_24320);
var state_24350__$1 = (function (){var statearr_24364 = state_24350;
(statearr_24364[(10)] = inst_24318__$1);

return statearr_24364;
})();
if(cljs.core.truth_(inst_24321)){
var statearr_24365_24394 = state_24350__$1;
(statearr_24365_24394[(1)] = (8));

} else {
var statearr_24366_24395 = state_24350__$1;
(statearr_24366_24395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (14))){
var inst_24343 = (state_24350[(2)]);
var inst_24344 = cljs.core.async.close_BANG_.call(null,out);
var state_24350__$1 = (function (){var statearr_24368 = state_24350;
(statearr_24368[(13)] = inst_24343);

return statearr_24368;
})();
var statearr_24369_24396 = state_24350__$1;
(statearr_24369_24396[(2)] = inst_24344);

(statearr_24369_24396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (10))){
var inst_24333 = (state_24350[(2)]);
var state_24350__$1 = state_24350;
var statearr_24370_24397 = state_24350__$1;
(statearr_24370_24397[(2)] = inst_24333);

(statearr_24370_24397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (8))){
var inst_24314 = (state_24350[(9)]);
var inst_24318 = (state_24350[(10)]);
var inst_24310 = (state_24350[(8)]);
var inst_24323 = inst_24310.push(inst_24314);
var tmp24367 = inst_24310;
var inst_24310__$1 = tmp24367;
var inst_24311 = inst_24318;
var state_24350__$1 = (function (){var statearr_24371 = state_24350;
(statearr_24371[(7)] = inst_24311);

(statearr_24371[(14)] = inst_24323);

(statearr_24371[(8)] = inst_24310__$1);

return statearr_24371;
})();
var statearr_24372_24398 = state_24350__$1;
(statearr_24372_24398[(2)] = null);

(statearr_24372_24398[(1)] = (2));


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
});})(c__21629__auto___24384,out))
;
return ((function (switch__21517__auto__,c__21629__auto___24384,out){
return (function() {
var cljs$core$async$state_machine__21518__auto__ = null;
var cljs$core$async$state_machine__21518__auto____0 = (function (){
var statearr_24376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24376[(0)] = cljs$core$async$state_machine__21518__auto__);

(statearr_24376[(1)] = (1));

return statearr_24376;
});
var cljs$core$async$state_machine__21518__auto____1 = (function (state_24350){
while(true){
var ret_value__21519__auto__ = (function (){try{while(true){
var result__21520__auto__ = switch__21517__auto__.call(null,state_24350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21520__auto__;
}
break;
}
}catch (e24377){if((e24377 instanceof Object)){
var ex__21521__auto__ = e24377;
var statearr_24378_24399 = state_24350;
(statearr_24378_24399[(5)] = ex__21521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24400 = state_24350;
state_24350 = G__24400;
continue;
} else {
return ret_value__21519__auto__;
}
break;
}
});
cljs$core$async$state_machine__21518__auto__ = function(state_24350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21518__auto____1.call(this,state_24350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21518__auto____0;
cljs$core$async$state_machine__21518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21518__auto____1;
return cljs$core$async$state_machine__21518__auto__;
})()
;})(switch__21517__auto__,c__21629__auto___24384,out))
})();
var state__21631__auto__ = (function (){var statearr_24379 = f__21630__auto__.call(null);
(statearr_24379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21629__auto___24384);

return statearr_24379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21631__auto__);
});})(c__21629__auto___24384,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1505274417528