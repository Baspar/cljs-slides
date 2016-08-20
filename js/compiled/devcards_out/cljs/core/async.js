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
var args22696 = [];
var len__19530__auto___22702 = arguments.length;
var i__19531__auto___22703 = (0);
while(true){
if((i__19531__auto___22703 < len__19530__auto___22702)){
args22696.push((arguments[i__19531__auto___22703]));

var G__22704 = (i__19531__auto___22703 + (1));
i__19531__auto___22703 = G__22704;
continue;
} else {
}
break;
}

var G__22698 = args22696.length;
switch (G__22698) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22696.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22699 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22699 = (function (f,blockable,meta22700){
this.f = f;
this.blockable = blockable;
this.meta22700 = meta22700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22701,meta22700__$1){
var self__ = this;
var _22701__$1 = this;
return (new cljs.core.async.t_cljs$core$async22699(self__.f,self__.blockable,meta22700__$1));
});

cljs.core.async.t_cljs$core$async22699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22701){
var self__ = this;
var _22701__$1 = this;
return self__.meta22700;
});

cljs.core.async.t_cljs$core$async22699.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22699.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22699.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22699.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22699.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22700","meta22700",-557378869,null)], null);
});

cljs.core.async.t_cljs$core$async22699.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22699.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22699";

cljs.core.async.t_cljs$core$async22699.cljs$lang$ctorPrWriter = (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async22699");
});

cljs.core.async.__GT_t_cljs$core$async22699 = (function cljs$core$async$__GT_t_cljs$core$async22699(f__$1,blockable__$1,meta22700){
return (new cljs.core.async.t_cljs$core$async22699(f__$1,blockable__$1,meta22700));
});

}

return (new cljs.core.async.t_cljs$core$async22699(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args22708 = [];
var len__19530__auto___22711 = arguments.length;
var i__19531__auto___22712 = (0);
while(true){
if((i__19531__auto___22712 < len__19530__auto___22711)){
args22708.push((arguments[i__19531__auto___22712]));

var G__22713 = (i__19531__auto___22712 + (1));
i__19531__auto___22712 = G__22713;
continue;
} else {
}
break;
}

var G__22710 = args22708.length;
switch (G__22710) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22708.length)].join('')));

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
var args22715 = [];
var len__19530__auto___22718 = arguments.length;
var i__19531__auto___22719 = (0);
while(true){
if((i__19531__auto___22719 < len__19530__auto___22718)){
args22715.push((arguments[i__19531__auto___22719]));

var G__22720 = (i__19531__auto___22719 + (1));
i__19531__auto___22719 = G__22720;
continue;
} else {
}
break;
}

var G__22717 = args22715.length;
switch (G__22717) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22715.length)].join('')));

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
var args22722 = [];
var len__19530__auto___22725 = arguments.length;
var i__19531__auto___22726 = (0);
while(true){
if((i__19531__auto___22726 < len__19530__auto___22725)){
args22722.push((arguments[i__19531__auto___22726]));

var G__22727 = (i__19531__auto___22726 + (1));
i__19531__auto___22726 = G__22727;
continue;
} else {
}
break;
}

var G__22724 = args22722.length;
switch (G__22724) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22722.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22729 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22729);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22729,ret){
return (function (){
return fn1.call(null,val_22729);
});})(val_22729,ret))
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
var args22730 = [];
var len__19530__auto___22733 = arguments.length;
var i__19531__auto___22734 = (0);
while(true){
if((i__19531__auto___22734 < len__19530__auto___22733)){
args22730.push((arguments[i__19531__auto___22734]));

var G__22735 = (i__19531__auto___22734 + (1));
i__19531__auto___22734 = G__22735;
continue;
} else {
}
break;
}

var G__22732 = args22730.length;
switch (G__22732) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22730.length)].join('')));

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
var n__19375__auto___22737 = n;
var x_22738 = (0);
while(true){
if((x_22738 < n__19375__auto___22737)){
(a[x_22738] = (0));

var G__22739 = (x_22738 + (1));
x_22738 = G__22739;
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

var G__22740 = (i + (1));
i = G__22740;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22744 = (function (alt_flag,flag,meta22745){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22745 = meta22745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22746,meta22745__$1){
var self__ = this;
var _22746__$1 = this;
return (new cljs.core.async.t_cljs$core$async22744(self__.alt_flag,self__.flag,meta22745__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22746){
var self__ = this;
var _22746__$1 = this;
return self__.meta22745;
});})(flag))
;

cljs.core.async.t_cljs$core$async22744.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22744.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22744.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22745","meta22745",919109262,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22744";

cljs.core.async.t_cljs$core$async22744.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async22744");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22744 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22744(alt_flag__$1,flag__$1,meta22745){
return (new cljs.core.async.t_cljs$core$async22744(alt_flag__$1,flag__$1,meta22745));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22744(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22750 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22750 = (function (alt_handler,flag,cb,meta22751){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22751 = meta22751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22752,meta22751__$1){
var self__ = this;
var _22752__$1 = this;
return (new cljs.core.async.t_cljs$core$async22750(self__.alt_handler,self__.flag,self__.cb,meta22751__$1));
});

cljs.core.async.t_cljs$core$async22750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22752){
var self__ = this;
var _22752__$1 = this;
return self__.meta22751;
});

cljs.core.async.t_cljs$core$async22750.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22750.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22750.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22750.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22750.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22751","meta22751",1655440525,null)], null);
});

cljs.core.async.t_cljs$core$async22750.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22750";

cljs.core.async.t_cljs$core$async22750.cljs$lang$ctorPrWriter = (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async22750");
});

cljs.core.async.__GT_t_cljs$core$async22750 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22750(alt_handler__$1,flag__$1,cb__$1,meta22751){
return (new cljs.core.async.t_cljs$core$async22750(alt_handler__$1,flag__$1,cb__$1,meta22751));
});

}

return (new cljs.core.async.t_cljs$core$async22750(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22753_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22753_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22754_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22754_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18460__auto__ = wport;
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22755 = (i + (1));
i = G__22755;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18460__auto__ = ret;
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18448__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18448__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18448__auto__;
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
var args__19537__auto__ = [];
var len__19530__auto___22761 = arguments.length;
var i__19531__auto___22762 = (0);
while(true){
if((i__19531__auto___22762 < len__19530__auto___22761)){
args__19537__auto__.push((arguments[i__19531__auto___22762]));

var G__22763 = (i__19531__auto___22762 + (1));
i__19531__auto___22762 = G__22763;
continue;
} else {
}
break;
}

var argseq__19538__auto__ = ((((1) < args__19537__auto__.length))?(new cljs.core.IndexedSeq(args__19537__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19538__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22758){
var map__22759 = p__22758;
var map__22759__$1 = ((((!((map__22759 == null)))?((((map__22759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22759):map__22759);
var opts = map__22759__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22756){
var G__22757 = cljs.core.first.call(null,seq22756);
var seq22756__$1 = cljs.core.next.call(null,seq22756);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22757,seq22756__$1);
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
var args22764 = [];
var len__19530__auto___22814 = arguments.length;
var i__19531__auto___22815 = (0);
while(true){
if((i__19531__auto___22815 < len__19530__auto___22814)){
args22764.push((arguments[i__19531__auto___22815]));

var G__22816 = (i__19531__auto___22815 + (1));
i__19531__auto___22815 = G__22816;
continue;
} else {
}
break;
}

var G__22766 = args22764.length;
switch (G__22766) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22764.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22651__auto___22818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto___22818){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto___22818){
return (function (state_22790){
var state_val_22791 = (state_22790[(1)]);
if((state_val_22791 === (7))){
var inst_22786 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
var statearr_22792_22819 = state_22790__$1;
(statearr_22792_22819[(2)] = inst_22786);

(statearr_22792_22819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (1))){
var state_22790__$1 = state_22790;
var statearr_22793_22820 = state_22790__$1;
(statearr_22793_22820[(2)] = null);

(statearr_22793_22820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (4))){
var inst_22769 = (state_22790[(7)]);
var inst_22769__$1 = (state_22790[(2)]);
var inst_22770 = (inst_22769__$1 == null);
var state_22790__$1 = (function (){var statearr_22794 = state_22790;
(statearr_22794[(7)] = inst_22769__$1);

return statearr_22794;
})();
if(cljs.core.truth_(inst_22770)){
var statearr_22795_22821 = state_22790__$1;
(statearr_22795_22821[(1)] = (5));

} else {
var statearr_22796_22822 = state_22790__$1;
(statearr_22796_22822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (13))){
var state_22790__$1 = state_22790;
var statearr_22797_22823 = state_22790__$1;
(statearr_22797_22823[(2)] = null);

(statearr_22797_22823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (6))){
var inst_22769 = (state_22790[(7)]);
var state_22790__$1 = state_22790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22790__$1,(11),to,inst_22769);
} else {
if((state_val_22791 === (3))){
var inst_22788 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22790__$1,inst_22788);
} else {
if((state_val_22791 === (12))){
var state_22790__$1 = state_22790;
var statearr_22798_22824 = state_22790__$1;
(statearr_22798_22824[(2)] = null);

(statearr_22798_22824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (2))){
var state_22790__$1 = state_22790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22790__$1,(4),from);
} else {
if((state_val_22791 === (11))){
var inst_22779 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
if(cljs.core.truth_(inst_22779)){
var statearr_22799_22825 = state_22790__$1;
(statearr_22799_22825[(1)] = (12));

} else {
var statearr_22800_22826 = state_22790__$1;
(statearr_22800_22826[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (9))){
var state_22790__$1 = state_22790;
var statearr_22801_22827 = state_22790__$1;
(statearr_22801_22827[(2)] = null);

(statearr_22801_22827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (5))){
var state_22790__$1 = state_22790;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22802_22828 = state_22790__$1;
(statearr_22802_22828[(1)] = (8));

} else {
var statearr_22803_22829 = state_22790__$1;
(statearr_22803_22829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (14))){
var inst_22784 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
var statearr_22804_22830 = state_22790__$1;
(statearr_22804_22830[(2)] = inst_22784);

(statearr_22804_22830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (10))){
var inst_22776 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
var statearr_22805_22831 = state_22790__$1;
(statearr_22805_22831[(2)] = inst_22776);

(statearr_22805_22831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (8))){
var inst_22773 = cljs.core.async.close_BANG_.call(null,to);
var state_22790__$1 = state_22790;
var statearr_22806_22832 = state_22790__$1;
(statearr_22806_22832[(2)] = inst_22773);

(statearr_22806_22832[(1)] = (10));


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
});})(c__22651__auto___22818))
;
return ((function (switch__20473__auto__,c__22651__auto___22818){
return (function() {
var cljs$core$async$state_machine__20474__auto__ = null;
var cljs$core$async$state_machine__20474__auto____0 = (function (){
var statearr_22810 = [null,null,null,null,null,null,null,null];
(statearr_22810[(0)] = cljs$core$async$state_machine__20474__auto__);

(statearr_22810[(1)] = (1));

return statearr_22810;
});
var cljs$core$async$state_machine__20474__auto____1 = (function (state_22790){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_22790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e22811){if((e22811 instanceof Object)){
var ex__20477__auto__ = e22811;
var statearr_22812_22833 = state_22790;
(statearr_22812_22833[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22834 = state_22790;
state_22790 = G__22834;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$state_machine__20474__auto__ = function(state_22790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20474__auto____1.call(this,state_22790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20474__auto____0;
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20474__auto____1;
return cljs$core$async$state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto___22818))
})();
var state__22653__auto__ = (function (){var statearr_22813 = f__22652__auto__.call(null);
(statearr_22813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto___22818);

return statearr_22813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto___22818))
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
return (function (p__23018){
var vec__23019 = p__23018;
var v = cljs.core.nth.call(null,vec__23019,(0),null);
var p = cljs.core.nth.call(null,vec__23019,(1),null);
var job = vec__23019;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22651__auto___23201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto___23201,res,vec__23019,v,p,job,jobs,results){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto___23201,res,vec__23019,v,p,job,jobs,results){
return (function (state_23024){
var state_val_23025 = (state_23024[(1)]);
if((state_val_23025 === (1))){
var state_23024__$1 = state_23024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23024__$1,(2),res,v);
} else {
if((state_val_23025 === (2))){
var inst_23021 = (state_23024[(2)]);
var inst_23022 = cljs.core.async.close_BANG_.call(null,res);
var state_23024__$1 = (function (){var statearr_23026 = state_23024;
(statearr_23026[(7)] = inst_23021);

return statearr_23026;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23024__$1,inst_23022);
} else {
return null;
}
}
});})(c__22651__auto___23201,res,vec__23019,v,p,job,jobs,results))
;
return ((function (switch__20473__auto__,c__22651__auto___23201,res,vec__23019,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____0 = (function (){
var statearr_23030 = [null,null,null,null,null,null,null,null];
(statearr_23030[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__);

(statearr_23030[(1)] = (1));

return statearr_23030;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____1 = (function (state_23024){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_23024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e23031){if((e23031 instanceof Object)){
var ex__20477__auto__ = e23031;
var statearr_23032_23202 = state_23024;
(statearr_23032_23202[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23203 = state_23024;
state_23024 = G__23203;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__ = function(state_23024){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____1.call(this,state_23024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto___23201,res,vec__23019,v,p,job,jobs,results))
})();
var state__22653__auto__ = (function (){var statearr_23033 = f__22652__auto__.call(null);
(statearr_23033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto___23201);

return statearr_23033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto___23201,res,vec__23019,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23034){
var vec__23035 = p__23034;
var v = cljs.core.nth.call(null,vec__23035,(0),null);
var p = cljs.core.nth.call(null,vec__23035,(1),null);
var job = vec__23035;
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
var n__19375__auto___23204 = n;
var __23205 = (0);
while(true){
if((__23205 < n__19375__auto___23204)){
var G__23036_23206 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23036_23206) {
case "compute":
var c__22651__auto___23208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23205,c__22651__auto___23208,G__23036_23206,n__19375__auto___23204,jobs,results,process,async){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (__23205,c__22651__auto___23208,G__23036_23206,n__19375__auto___23204,jobs,results,process,async){
return (function (state_23049){
var state_val_23050 = (state_23049[(1)]);
if((state_val_23050 === (1))){
var state_23049__$1 = state_23049;
var statearr_23051_23209 = state_23049__$1;
(statearr_23051_23209[(2)] = null);

(statearr_23051_23209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23050 === (2))){
var state_23049__$1 = state_23049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23049__$1,(4),jobs);
} else {
if((state_val_23050 === (3))){
var inst_23047 = (state_23049[(2)]);
var state_23049__$1 = state_23049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23049__$1,inst_23047);
} else {
if((state_val_23050 === (4))){
var inst_23039 = (state_23049[(2)]);
var inst_23040 = process.call(null,inst_23039);
var state_23049__$1 = state_23049;
if(cljs.core.truth_(inst_23040)){
var statearr_23052_23210 = state_23049__$1;
(statearr_23052_23210[(1)] = (5));

} else {
var statearr_23053_23211 = state_23049__$1;
(statearr_23053_23211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23050 === (5))){
var state_23049__$1 = state_23049;
var statearr_23054_23212 = state_23049__$1;
(statearr_23054_23212[(2)] = null);

(statearr_23054_23212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23050 === (6))){
var state_23049__$1 = state_23049;
var statearr_23055_23213 = state_23049__$1;
(statearr_23055_23213[(2)] = null);

(statearr_23055_23213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23050 === (7))){
var inst_23045 = (state_23049[(2)]);
var state_23049__$1 = state_23049;
var statearr_23056_23214 = state_23049__$1;
(statearr_23056_23214[(2)] = inst_23045);

(statearr_23056_23214[(1)] = (3));


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
});})(__23205,c__22651__auto___23208,G__23036_23206,n__19375__auto___23204,jobs,results,process,async))
;
return ((function (__23205,switch__20473__auto__,c__22651__auto___23208,G__23036_23206,n__19375__auto___23204,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____0 = (function (){
var statearr_23060 = [null,null,null,null,null,null,null];
(statearr_23060[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__);

(statearr_23060[(1)] = (1));

return statearr_23060;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____1 = (function (state_23049){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_23049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e23061){if((e23061 instanceof Object)){
var ex__20477__auto__ = e23061;
var statearr_23062_23215 = state_23049;
(statearr_23062_23215[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23216 = state_23049;
state_23049 = G__23216;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__ = function(state_23049){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____1.call(this,state_23049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__;
})()
;})(__23205,switch__20473__auto__,c__22651__auto___23208,G__23036_23206,n__19375__auto___23204,jobs,results,process,async))
})();
var state__22653__auto__ = (function (){var statearr_23063 = f__22652__auto__.call(null);
(statearr_23063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto___23208);

return statearr_23063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(__23205,c__22651__auto___23208,G__23036_23206,n__19375__auto___23204,jobs,results,process,async))
);


break;
case "async":
var c__22651__auto___23217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23205,c__22651__auto___23217,G__23036_23206,n__19375__auto___23204,jobs,results,process,async){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (__23205,c__22651__auto___23217,G__23036_23206,n__19375__auto___23204,jobs,results,process,async){
return (function (state_23076){
var state_val_23077 = (state_23076[(1)]);
if((state_val_23077 === (1))){
var state_23076__$1 = state_23076;
var statearr_23078_23218 = state_23076__$1;
(statearr_23078_23218[(2)] = null);

(statearr_23078_23218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23077 === (2))){
var state_23076__$1 = state_23076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23076__$1,(4),jobs);
} else {
if((state_val_23077 === (3))){
var inst_23074 = (state_23076[(2)]);
var state_23076__$1 = state_23076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23076__$1,inst_23074);
} else {
if((state_val_23077 === (4))){
var inst_23066 = (state_23076[(2)]);
var inst_23067 = async.call(null,inst_23066);
var state_23076__$1 = state_23076;
if(cljs.core.truth_(inst_23067)){
var statearr_23079_23219 = state_23076__$1;
(statearr_23079_23219[(1)] = (5));

} else {
var statearr_23080_23220 = state_23076__$1;
(statearr_23080_23220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23077 === (5))){
var state_23076__$1 = state_23076;
var statearr_23081_23221 = state_23076__$1;
(statearr_23081_23221[(2)] = null);

(statearr_23081_23221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23077 === (6))){
var state_23076__$1 = state_23076;
var statearr_23082_23222 = state_23076__$1;
(statearr_23082_23222[(2)] = null);

(statearr_23082_23222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23077 === (7))){
var inst_23072 = (state_23076[(2)]);
var state_23076__$1 = state_23076;
var statearr_23083_23223 = state_23076__$1;
(statearr_23083_23223[(2)] = inst_23072);

(statearr_23083_23223[(1)] = (3));


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
});})(__23205,c__22651__auto___23217,G__23036_23206,n__19375__auto___23204,jobs,results,process,async))
;
return ((function (__23205,switch__20473__auto__,c__22651__auto___23217,G__23036_23206,n__19375__auto___23204,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____0 = (function (){
var statearr_23087 = [null,null,null,null,null,null,null];
(statearr_23087[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__);

(statearr_23087[(1)] = (1));

return statearr_23087;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____1 = (function (state_23076){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_23076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e23088){if((e23088 instanceof Object)){
var ex__20477__auto__ = e23088;
var statearr_23089_23224 = state_23076;
(statearr_23089_23224[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23225 = state_23076;
state_23076 = G__23225;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__ = function(state_23076){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____1.call(this,state_23076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__;
})()
;})(__23205,switch__20473__auto__,c__22651__auto___23217,G__23036_23206,n__19375__auto___23204,jobs,results,process,async))
})();
var state__22653__auto__ = (function (){var statearr_23090 = f__22652__auto__.call(null);
(statearr_23090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto___23217);

return statearr_23090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(__23205,c__22651__auto___23217,G__23036_23206,n__19375__auto___23204,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23226 = (__23205 + (1));
__23205 = G__23226;
continue;
} else {
}
break;
}

var c__22651__auto___23227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto___23227,jobs,results,process,async){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto___23227,jobs,results,process,async){
return (function (state_23112){
var state_val_23113 = (state_23112[(1)]);
if((state_val_23113 === (1))){
var state_23112__$1 = state_23112;
var statearr_23114_23228 = state_23112__$1;
(statearr_23114_23228[(2)] = null);

(statearr_23114_23228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23113 === (2))){
var state_23112__$1 = state_23112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23112__$1,(4),from);
} else {
if((state_val_23113 === (3))){
var inst_23110 = (state_23112[(2)]);
var state_23112__$1 = state_23112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23112__$1,inst_23110);
} else {
if((state_val_23113 === (4))){
var inst_23093 = (state_23112[(7)]);
var inst_23093__$1 = (state_23112[(2)]);
var inst_23094 = (inst_23093__$1 == null);
var state_23112__$1 = (function (){var statearr_23115 = state_23112;
(statearr_23115[(7)] = inst_23093__$1);

return statearr_23115;
})();
if(cljs.core.truth_(inst_23094)){
var statearr_23116_23229 = state_23112__$1;
(statearr_23116_23229[(1)] = (5));

} else {
var statearr_23117_23230 = state_23112__$1;
(statearr_23117_23230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23113 === (5))){
var inst_23096 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23112__$1 = state_23112;
var statearr_23118_23231 = state_23112__$1;
(statearr_23118_23231[(2)] = inst_23096);

(statearr_23118_23231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23113 === (6))){
var inst_23093 = (state_23112[(7)]);
var inst_23098 = (state_23112[(8)]);
var inst_23098__$1 = cljs.core.async.chan.call(null,(1));
var inst_23099 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23100 = [inst_23093,inst_23098__$1];
var inst_23101 = (new cljs.core.PersistentVector(null,2,(5),inst_23099,inst_23100,null));
var state_23112__$1 = (function (){var statearr_23119 = state_23112;
(statearr_23119[(8)] = inst_23098__$1);

return statearr_23119;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23112__$1,(8),jobs,inst_23101);
} else {
if((state_val_23113 === (7))){
var inst_23108 = (state_23112[(2)]);
var state_23112__$1 = state_23112;
var statearr_23120_23232 = state_23112__$1;
(statearr_23120_23232[(2)] = inst_23108);

(statearr_23120_23232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23113 === (8))){
var inst_23098 = (state_23112[(8)]);
var inst_23103 = (state_23112[(2)]);
var state_23112__$1 = (function (){var statearr_23121 = state_23112;
(statearr_23121[(9)] = inst_23103);

return statearr_23121;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23112__$1,(9),results,inst_23098);
} else {
if((state_val_23113 === (9))){
var inst_23105 = (state_23112[(2)]);
var state_23112__$1 = (function (){var statearr_23122 = state_23112;
(statearr_23122[(10)] = inst_23105);

return statearr_23122;
})();
var statearr_23123_23233 = state_23112__$1;
(statearr_23123_23233[(2)] = null);

(statearr_23123_23233[(1)] = (2));


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
});})(c__22651__auto___23227,jobs,results,process,async))
;
return ((function (switch__20473__auto__,c__22651__auto___23227,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____0 = (function (){
var statearr_23127 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23127[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__);

(statearr_23127[(1)] = (1));

return statearr_23127;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____1 = (function (state_23112){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_23112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e23128){if((e23128 instanceof Object)){
var ex__20477__auto__ = e23128;
var statearr_23129_23234 = state_23112;
(statearr_23129_23234[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23235 = state_23112;
state_23112 = G__23235;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__ = function(state_23112){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____1.call(this,state_23112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto___23227,jobs,results,process,async))
})();
var state__22653__auto__ = (function (){var statearr_23130 = f__22652__auto__.call(null);
(statearr_23130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto___23227);

return statearr_23130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto___23227,jobs,results,process,async))
);


var c__22651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto__,jobs,results,process,async){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto__,jobs,results,process,async){
return (function (state_23168){
var state_val_23169 = (state_23168[(1)]);
if((state_val_23169 === (7))){
var inst_23164 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
var statearr_23170_23236 = state_23168__$1;
(statearr_23170_23236[(2)] = inst_23164);

(statearr_23170_23236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (20))){
var state_23168__$1 = state_23168;
var statearr_23171_23237 = state_23168__$1;
(statearr_23171_23237[(2)] = null);

(statearr_23171_23237[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (1))){
var state_23168__$1 = state_23168;
var statearr_23172_23238 = state_23168__$1;
(statearr_23172_23238[(2)] = null);

(statearr_23172_23238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (4))){
var inst_23133 = (state_23168[(7)]);
var inst_23133__$1 = (state_23168[(2)]);
var inst_23134 = (inst_23133__$1 == null);
var state_23168__$1 = (function (){var statearr_23173 = state_23168;
(statearr_23173[(7)] = inst_23133__$1);

return statearr_23173;
})();
if(cljs.core.truth_(inst_23134)){
var statearr_23174_23239 = state_23168__$1;
(statearr_23174_23239[(1)] = (5));

} else {
var statearr_23175_23240 = state_23168__$1;
(statearr_23175_23240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (15))){
var inst_23146 = (state_23168[(8)]);
var state_23168__$1 = state_23168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23168__$1,(18),to,inst_23146);
} else {
if((state_val_23169 === (21))){
var inst_23159 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
var statearr_23176_23241 = state_23168__$1;
(statearr_23176_23241[(2)] = inst_23159);

(statearr_23176_23241[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (13))){
var inst_23161 = (state_23168[(2)]);
var state_23168__$1 = (function (){var statearr_23177 = state_23168;
(statearr_23177[(9)] = inst_23161);

return statearr_23177;
})();
var statearr_23178_23242 = state_23168__$1;
(statearr_23178_23242[(2)] = null);

(statearr_23178_23242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (6))){
var inst_23133 = (state_23168[(7)]);
var state_23168__$1 = state_23168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23168__$1,(11),inst_23133);
} else {
if((state_val_23169 === (17))){
var inst_23154 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
if(cljs.core.truth_(inst_23154)){
var statearr_23179_23243 = state_23168__$1;
(statearr_23179_23243[(1)] = (19));

} else {
var statearr_23180_23244 = state_23168__$1;
(statearr_23180_23244[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (3))){
var inst_23166 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23168__$1,inst_23166);
} else {
if((state_val_23169 === (12))){
var inst_23143 = (state_23168[(10)]);
var state_23168__$1 = state_23168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23168__$1,(14),inst_23143);
} else {
if((state_val_23169 === (2))){
var state_23168__$1 = state_23168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23168__$1,(4),results);
} else {
if((state_val_23169 === (19))){
var state_23168__$1 = state_23168;
var statearr_23181_23245 = state_23168__$1;
(statearr_23181_23245[(2)] = null);

(statearr_23181_23245[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (11))){
var inst_23143 = (state_23168[(2)]);
var state_23168__$1 = (function (){var statearr_23182 = state_23168;
(statearr_23182[(10)] = inst_23143);

return statearr_23182;
})();
var statearr_23183_23246 = state_23168__$1;
(statearr_23183_23246[(2)] = null);

(statearr_23183_23246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (9))){
var state_23168__$1 = state_23168;
var statearr_23184_23247 = state_23168__$1;
(statearr_23184_23247[(2)] = null);

(statearr_23184_23247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (5))){
var state_23168__$1 = state_23168;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23185_23248 = state_23168__$1;
(statearr_23185_23248[(1)] = (8));

} else {
var statearr_23186_23249 = state_23168__$1;
(statearr_23186_23249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (14))){
var inst_23148 = (state_23168[(11)]);
var inst_23146 = (state_23168[(8)]);
var inst_23146__$1 = (state_23168[(2)]);
var inst_23147 = (inst_23146__$1 == null);
var inst_23148__$1 = cljs.core.not.call(null,inst_23147);
var state_23168__$1 = (function (){var statearr_23187 = state_23168;
(statearr_23187[(11)] = inst_23148__$1);

(statearr_23187[(8)] = inst_23146__$1);

return statearr_23187;
})();
if(inst_23148__$1){
var statearr_23188_23250 = state_23168__$1;
(statearr_23188_23250[(1)] = (15));

} else {
var statearr_23189_23251 = state_23168__$1;
(statearr_23189_23251[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (16))){
var inst_23148 = (state_23168[(11)]);
var state_23168__$1 = state_23168;
var statearr_23190_23252 = state_23168__$1;
(statearr_23190_23252[(2)] = inst_23148);

(statearr_23190_23252[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (10))){
var inst_23140 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
var statearr_23191_23253 = state_23168__$1;
(statearr_23191_23253[(2)] = inst_23140);

(statearr_23191_23253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (18))){
var inst_23151 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
var statearr_23192_23254 = state_23168__$1;
(statearr_23192_23254[(2)] = inst_23151);

(statearr_23192_23254[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (8))){
var inst_23137 = cljs.core.async.close_BANG_.call(null,to);
var state_23168__$1 = state_23168;
var statearr_23193_23255 = state_23168__$1;
(statearr_23193_23255[(2)] = inst_23137);

(statearr_23193_23255[(1)] = (10));


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
});})(c__22651__auto__,jobs,results,process,async))
;
return ((function (switch__20473__auto__,c__22651__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____0 = (function (){
var statearr_23197 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23197[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__);

(statearr_23197[(1)] = (1));

return statearr_23197;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____1 = (function (state_23168){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_23168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e23198){if((e23198 instanceof Object)){
var ex__20477__auto__ = e23198;
var statearr_23199_23256 = state_23168;
(statearr_23199_23256[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23257 = state_23168;
state_23168 = G__23257;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__ = function(state_23168){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____1.call(this,state_23168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto__,jobs,results,process,async))
})();
var state__22653__auto__ = (function (){var statearr_23200 = f__22652__auto__.call(null);
(statearr_23200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto__);

return statearr_23200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto__,jobs,results,process,async))
);

return c__22651__auto__;
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
var args23258 = [];
var len__19530__auto___23261 = arguments.length;
var i__19531__auto___23262 = (0);
while(true){
if((i__19531__auto___23262 < len__19530__auto___23261)){
args23258.push((arguments[i__19531__auto___23262]));

var G__23263 = (i__19531__auto___23262 + (1));
i__19531__auto___23262 = G__23263;
continue;
} else {
}
break;
}

var G__23260 = args23258.length;
switch (G__23260) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23258.length)].join('')));

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
var args23265 = [];
var len__19530__auto___23268 = arguments.length;
var i__19531__auto___23269 = (0);
while(true){
if((i__19531__auto___23269 < len__19530__auto___23268)){
args23265.push((arguments[i__19531__auto___23269]));

var G__23270 = (i__19531__auto___23269 + (1));
i__19531__auto___23269 = G__23270;
continue;
} else {
}
break;
}

var G__23267 = args23265.length;
switch (G__23267) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23265.length)].join('')));

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
var args23272 = [];
var len__19530__auto___23325 = arguments.length;
var i__19531__auto___23326 = (0);
while(true){
if((i__19531__auto___23326 < len__19530__auto___23325)){
args23272.push((arguments[i__19531__auto___23326]));

var G__23327 = (i__19531__auto___23326 + (1));
i__19531__auto___23326 = G__23327;
continue;
} else {
}
break;
}

var G__23274 = args23272.length;
switch (G__23274) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23272.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22651__auto___23329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto___23329,tc,fc){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto___23329,tc,fc){
return (function (state_23300){
var state_val_23301 = (state_23300[(1)]);
if((state_val_23301 === (7))){
var inst_23296 = (state_23300[(2)]);
var state_23300__$1 = state_23300;
var statearr_23302_23330 = state_23300__$1;
(statearr_23302_23330[(2)] = inst_23296);

(statearr_23302_23330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23301 === (1))){
var state_23300__$1 = state_23300;
var statearr_23303_23331 = state_23300__$1;
(statearr_23303_23331[(2)] = null);

(statearr_23303_23331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23301 === (4))){
var inst_23277 = (state_23300[(7)]);
var inst_23277__$1 = (state_23300[(2)]);
var inst_23278 = (inst_23277__$1 == null);
var state_23300__$1 = (function (){var statearr_23304 = state_23300;
(statearr_23304[(7)] = inst_23277__$1);

return statearr_23304;
})();
if(cljs.core.truth_(inst_23278)){
var statearr_23305_23332 = state_23300__$1;
(statearr_23305_23332[(1)] = (5));

} else {
var statearr_23306_23333 = state_23300__$1;
(statearr_23306_23333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23301 === (13))){
var state_23300__$1 = state_23300;
var statearr_23307_23334 = state_23300__$1;
(statearr_23307_23334[(2)] = null);

(statearr_23307_23334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23301 === (6))){
var inst_23277 = (state_23300[(7)]);
var inst_23283 = p.call(null,inst_23277);
var state_23300__$1 = state_23300;
if(cljs.core.truth_(inst_23283)){
var statearr_23308_23335 = state_23300__$1;
(statearr_23308_23335[(1)] = (9));

} else {
var statearr_23309_23336 = state_23300__$1;
(statearr_23309_23336[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23301 === (3))){
var inst_23298 = (state_23300[(2)]);
var state_23300__$1 = state_23300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23300__$1,inst_23298);
} else {
if((state_val_23301 === (12))){
var state_23300__$1 = state_23300;
var statearr_23310_23337 = state_23300__$1;
(statearr_23310_23337[(2)] = null);

(statearr_23310_23337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23301 === (2))){
var state_23300__$1 = state_23300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23300__$1,(4),ch);
} else {
if((state_val_23301 === (11))){
var inst_23277 = (state_23300[(7)]);
var inst_23287 = (state_23300[(2)]);
var state_23300__$1 = state_23300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23300__$1,(8),inst_23287,inst_23277);
} else {
if((state_val_23301 === (9))){
var state_23300__$1 = state_23300;
var statearr_23311_23338 = state_23300__$1;
(statearr_23311_23338[(2)] = tc);

(statearr_23311_23338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23301 === (5))){
var inst_23280 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23281 = cljs.core.async.close_BANG_.call(null,fc);
var state_23300__$1 = (function (){var statearr_23312 = state_23300;
(statearr_23312[(8)] = inst_23280);

return statearr_23312;
})();
var statearr_23313_23339 = state_23300__$1;
(statearr_23313_23339[(2)] = inst_23281);

(statearr_23313_23339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23301 === (14))){
var inst_23294 = (state_23300[(2)]);
var state_23300__$1 = state_23300;
var statearr_23314_23340 = state_23300__$1;
(statearr_23314_23340[(2)] = inst_23294);

(statearr_23314_23340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23301 === (10))){
var state_23300__$1 = state_23300;
var statearr_23315_23341 = state_23300__$1;
(statearr_23315_23341[(2)] = fc);

(statearr_23315_23341[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23301 === (8))){
var inst_23289 = (state_23300[(2)]);
var state_23300__$1 = state_23300;
if(cljs.core.truth_(inst_23289)){
var statearr_23316_23342 = state_23300__$1;
(statearr_23316_23342[(1)] = (12));

} else {
var statearr_23317_23343 = state_23300__$1;
(statearr_23317_23343[(1)] = (13));

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
});})(c__22651__auto___23329,tc,fc))
;
return ((function (switch__20473__auto__,c__22651__auto___23329,tc,fc){
return (function() {
var cljs$core$async$state_machine__20474__auto__ = null;
var cljs$core$async$state_machine__20474__auto____0 = (function (){
var statearr_23321 = [null,null,null,null,null,null,null,null,null];
(statearr_23321[(0)] = cljs$core$async$state_machine__20474__auto__);

(statearr_23321[(1)] = (1));

return statearr_23321;
});
var cljs$core$async$state_machine__20474__auto____1 = (function (state_23300){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_23300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e23322){if((e23322 instanceof Object)){
var ex__20477__auto__ = e23322;
var statearr_23323_23344 = state_23300;
(statearr_23323_23344[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23345 = state_23300;
state_23300 = G__23345;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$state_machine__20474__auto__ = function(state_23300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20474__auto____1.call(this,state_23300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20474__auto____0;
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20474__auto____1;
return cljs$core$async$state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto___23329,tc,fc))
})();
var state__22653__auto__ = (function (){var statearr_23324 = f__22652__auto__.call(null);
(statearr_23324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto___23329);

return statearr_23324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto___23329,tc,fc))
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
var c__22651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto__){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto__){
return (function (state_23409){
var state_val_23410 = (state_23409[(1)]);
if((state_val_23410 === (7))){
var inst_23405 = (state_23409[(2)]);
var state_23409__$1 = state_23409;
var statearr_23411_23432 = state_23409__$1;
(statearr_23411_23432[(2)] = inst_23405);

(statearr_23411_23432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23410 === (1))){
var inst_23389 = init;
var state_23409__$1 = (function (){var statearr_23412 = state_23409;
(statearr_23412[(7)] = inst_23389);

return statearr_23412;
})();
var statearr_23413_23433 = state_23409__$1;
(statearr_23413_23433[(2)] = null);

(statearr_23413_23433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23410 === (4))){
var inst_23392 = (state_23409[(8)]);
var inst_23392__$1 = (state_23409[(2)]);
var inst_23393 = (inst_23392__$1 == null);
var state_23409__$1 = (function (){var statearr_23414 = state_23409;
(statearr_23414[(8)] = inst_23392__$1);

return statearr_23414;
})();
if(cljs.core.truth_(inst_23393)){
var statearr_23415_23434 = state_23409__$1;
(statearr_23415_23434[(1)] = (5));

} else {
var statearr_23416_23435 = state_23409__$1;
(statearr_23416_23435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23410 === (6))){
var inst_23392 = (state_23409[(8)]);
var inst_23389 = (state_23409[(7)]);
var inst_23396 = (state_23409[(9)]);
var inst_23396__$1 = f.call(null,inst_23389,inst_23392);
var inst_23397 = cljs.core.reduced_QMARK_.call(null,inst_23396__$1);
var state_23409__$1 = (function (){var statearr_23417 = state_23409;
(statearr_23417[(9)] = inst_23396__$1);

return statearr_23417;
})();
if(inst_23397){
var statearr_23418_23436 = state_23409__$1;
(statearr_23418_23436[(1)] = (8));

} else {
var statearr_23419_23437 = state_23409__$1;
(statearr_23419_23437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23410 === (3))){
var inst_23407 = (state_23409[(2)]);
var state_23409__$1 = state_23409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23409__$1,inst_23407);
} else {
if((state_val_23410 === (2))){
var state_23409__$1 = state_23409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23409__$1,(4),ch);
} else {
if((state_val_23410 === (9))){
var inst_23396 = (state_23409[(9)]);
var inst_23389 = inst_23396;
var state_23409__$1 = (function (){var statearr_23420 = state_23409;
(statearr_23420[(7)] = inst_23389);

return statearr_23420;
})();
var statearr_23421_23438 = state_23409__$1;
(statearr_23421_23438[(2)] = null);

(statearr_23421_23438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23410 === (5))){
var inst_23389 = (state_23409[(7)]);
var state_23409__$1 = state_23409;
var statearr_23422_23439 = state_23409__$1;
(statearr_23422_23439[(2)] = inst_23389);

(statearr_23422_23439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23410 === (10))){
var inst_23403 = (state_23409[(2)]);
var state_23409__$1 = state_23409;
var statearr_23423_23440 = state_23409__$1;
(statearr_23423_23440[(2)] = inst_23403);

(statearr_23423_23440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23410 === (8))){
var inst_23396 = (state_23409[(9)]);
var inst_23399 = cljs.core.deref.call(null,inst_23396);
var state_23409__$1 = state_23409;
var statearr_23424_23441 = state_23409__$1;
(statearr_23424_23441[(2)] = inst_23399);

(statearr_23424_23441[(1)] = (10));


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
});})(c__22651__auto__))
;
return ((function (switch__20473__auto__,c__22651__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20474__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20474__auto____0 = (function (){
var statearr_23428 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23428[(0)] = cljs$core$async$reduce_$_state_machine__20474__auto__);

(statearr_23428[(1)] = (1));

return statearr_23428;
});
var cljs$core$async$reduce_$_state_machine__20474__auto____1 = (function (state_23409){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_23409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e23429){if((e23429 instanceof Object)){
var ex__20477__auto__ = e23429;
var statearr_23430_23442 = state_23409;
(statearr_23430_23442[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23443 = state_23409;
state_23409 = G__23443;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20474__auto__ = function(state_23409){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20474__auto____1.call(this,state_23409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20474__auto____0;
cljs$core$async$reduce_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20474__auto____1;
return cljs$core$async$reduce_$_state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto__))
})();
var state__22653__auto__ = (function (){var statearr_23431 = f__22652__auto__.call(null);
(statearr_23431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto__);

return statearr_23431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto__))
);

return c__22651__auto__;
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
var args23444 = [];
var len__19530__auto___23496 = arguments.length;
var i__19531__auto___23497 = (0);
while(true){
if((i__19531__auto___23497 < len__19530__auto___23496)){
args23444.push((arguments[i__19531__auto___23497]));

var G__23498 = (i__19531__auto___23497 + (1));
i__19531__auto___23497 = G__23498;
continue;
} else {
}
break;
}

var G__23446 = args23444.length;
switch (G__23446) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23444.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto__){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto__){
return (function (state_23471){
var state_val_23472 = (state_23471[(1)]);
if((state_val_23472 === (7))){
var inst_23453 = (state_23471[(2)]);
var state_23471__$1 = state_23471;
var statearr_23473_23500 = state_23471__$1;
(statearr_23473_23500[(2)] = inst_23453);

(statearr_23473_23500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (1))){
var inst_23447 = cljs.core.seq.call(null,coll);
var inst_23448 = inst_23447;
var state_23471__$1 = (function (){var statearr_23474 = state_23471;
(statearr_23474[(7)] = inst_23448);

return statearr_23474;
})();
var statearr_23475_23501 = state_23471__$1;
(statearr_23475_23501[(2)] = null);

(statearr_23475_23501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (4))){
var inst_23448 = (state_23471[(7)]);
var inst_23451 = cljs.core.first.call(null,inst_23448);
var state_23471__$1 = state_23471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23471__$1,(7),ch,inst_23451);
} else {
if((state_val_23472 === (13))){
var inst_23465 = (state_23471[(2)]);
var state_23471__$1 = state_23471;
var statearr_23476_23502 = state_23471__$1;
(statearr_23476_23502[(2)] = inst_23465);

(statearr_23476_23502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (6))){
var inst_23456 = (state_23471[(2)]);
var state_23471__$1 = state_23471;
if(cljs.core.truth_(inst_23456)){
var statearr_23477_23503 = state_23471__$1;
(statearr_23477_23503[(1)] = (8));

} else {
var statearr_23478_23504 = state_23471__$1;
(statearr_23478_23504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (3))){
var inst_23469 = (state_23471[(2)]);
var state_23471__$1 = state_23471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23471__$1,inst_23469);
} else {
if((state_val_23472 === (12))){
var state_23471__$1 = state_23471;
var statearr_23479_23505 = state_23471__$1;
(statearr_23479_23505[(2)] = null);

(statearr_23479_23505[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (2))){
var inst_23448 = (state_23471[(7)]);
var state_23471__$1 = state_23471;
if(cljs.core.truth_(inst_23448)){
var statearr_23480_23506 = state_23471__$1;
(statearr_23480_23506[(1)] = (4));

} else {
var statearr_23481_23507 = state_23471__$1;
(statearr_23481_23507[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (11))){
var inst_23462 = cljs.core.async.close_BANG_.call(null,ch);
var state_23471__$1 = state_23471;
var statearr_23482_23508 = state_23471__$1;
(statearr_23482_23508[(2)] = inst_23462);

(statearr_23482_23508[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (9))){
var state_23471__$1 = state_23471;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23483_23509 = state_23471__$1;
(statearr_23483_23509[(1)] = (11));

} else {
var statearr_23484_23510 = state_23471__$1;
(statearr_23484_23510[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (5))){
var inst_23448 = (state_23471[(7)]);
var state_23471__$1 = state_23471;
var statearr_23485_23511 = state_23471__$1;
(statearr_23485_23511[(2)] = inst_23448);

(statearr_23485_23511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (10))){
var inst_23467 = (state_23471[(2)]);
var state_23471__$1 = state_23471;
var statearr_23486_23512 = state_23471__$1;
(statearr_23486_23512[(2)] = inst_23467);

(statearr_23486_23512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (8))){
var inst_23448 = (state_23471[(7)]);
var inst_23458 = cljs.core.next.call(null,inst_23448);
var inst_23448__$1 = inst_23458;
var state_23471__$1 = (function (){var statearr_23487 = state_23471;
(statearr_23487[(7)] = inst_23448__$1);

return statearr_23487;
})();
var statearr_23488_23513 = state_23471__$1;
(statearr_23488_23513[(2)] = null);

(statearr_23488_23513[(1)] = (2));


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
});})(c__22651__auto__))
;
return ((function (switch__20473__auto__,c__22651__auto__){
return (function() {
var cljs$core$async$state_machine__20474__auto__ = null;
var cljs$core$async$state_machine__20474__auto____0 = (function (){
var statearr_23492 = [null,null,null,null,null,null,null,null];
(statearr_23492[(0)] = cljs$core$async$state_machine__20474__auto__);

(statearr_23492[(1)] = (1));

return statearr_23492;
});
var cljs$core$async$state_machine__20474__auto____1 = (function (state_23471){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_23471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e23493){if((e23493 instanceof Object)){
var ex__20477__auto__ = e23493;
var statearr_23494_23514 = state_23471;
(statearr_23494_23514[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23515 = state_23471;
state_23471 = G__23515;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$state_machine__20474__auto__ = function(state_23471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20474__auto____1.call(this,state_23471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20474__auto____0;
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20474__auto____1;
return cljs$core$async$state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto__))
})();
var state__22653__auto__ = (function (){var statearr_23495 = f__22652__auto__.call(null);
(statearr_23495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto__);

return statearr_23495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto__))
);

return c__22651__auto__;
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
var x__19123__auto__ = (((_ == null))?null:_);
var m__19124__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19123__auto__)]);
if(!((m__19124__auto__ == null))){
return m__19124__auto__.call(null,_);
} else {
var m__19124__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19124__auto____$1 == null))){
return m__19124__auto____$1.call(null,_);
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
var x__19123__auto__ = (((m == null))?null:m);
var m__19124__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19123__auto__)]);
if(!((m__19124__auto__ == null))){
return m__19124__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19124__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19124__auto____$1 == null))){
return m__19124__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19123__auto__ = (((m == null))?null:m);
var m__19124__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19123__auto__)]);
if(!((m__19124__auto__ == null))){
return m__19124__auto__.call(null,m,ch);
} else {
var m__19124__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19124__auto____$1 == null))){
return m__19124__auto____$1.call(null,m,ch);
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
var x__19123__auto__ = (((m == null))?null:m);
var m__19124__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19123__auto__)]);
if(!((m__19124__auto__ == null))){
return m__19124__auto__.call(null,m);
} else {
var m__19124__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19124__auto____$1 == null))){
return m__19124__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async23737 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23737 = (function (mult,ch,cs,meta23738){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23738 = meta23738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23739,meta23738__$1){
var self__ = this;
var _23739__$1 = this;
return (new cljs.core.async.t_cljs$core$async23737(self__.mult,self__.ch,self__.cs,meta23738__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23737.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23739){
var self__ = this;
var _23739__$1 = this;
return self__.meta23738;
});})(cs))
;

cljs.core.async.t_cljs$core$async23737.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23737.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23737.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23737.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23737.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23737.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23737.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23738","meta23738",1508128487,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23737.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23737";

cljs.core.async.t_cljs$core$async23737.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async23737");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23737 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23737(mult__$1,ch__$1,cs__$1,meta23738){
return (new cljs.core.async.t_cljs$core$async23737(mult__$1,ch__$1,cs__$1,meta23738));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23737(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22651__auto___23958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto___23958,cs,m,dchan,dctr,done){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto___23958,cs,m,dchan,dctr,done){
return (function (state_23870){
var state_val_23871 = (state_23870[(1)]);
if((state_val_23871 === (7))){
var inst_23866 = (state_23870[(2)]);
var state_23870__$1 = state_23870;
var statearr_23872_23959 = state_23870__$1;
(statearr_23872_23959[(2)] = inst_23866);

(statearr_23872_23959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (20))){
var inst_23771 = (state_23870[(7)]);
var inst_23781 = cljs.core.first.call(null,inst_23771);
var inst_23782 = cljs.core.nth.call(null,inst_23781,(0),null);
var inst_23783 = cljs.core.nth.call(null,inst_23781,(1),null);
var state_23870__$1 = (function (){var statearr_23873 = state_23870;
(statearr_23873[(8)] = inst_23782);

return statearr_23873;
})();
if(cljs.core.truth_(inst_23783)){
var statearr_23874_23960 = state_23870__$1;
(statearr_23874_23960[(1)] = (22));

} else {
var statearr_23875_23961 = state_23870__$1;
(statearr_23875_23961[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (27))){
var inst_23813 = (state_23870[(9)]);
var inst_23742 = (state_23870[(10)]);
var inst_23818 = (state_23870[(11)]);
var inst_23811 = (state_23870[(12)]);
var inst_23818__$1 = cljs.core._nth.call(null,inst_23811,inst_23813);
var inst_23819 = cljs.core.async.put_BANG_.call(null,inst_23818__$1,inst_23742,done);
var state_23870__$1 = (function (){var statearr_23876 = state_23870;
(statearr_23876[(11)] = inst_23818__$1);

return statearr_23876;
})();
if(cljs.core.truth_(inst_23819)){
var statearr_23877_23962 = state_23870__$1;
(statearr_23877_23962[(1)] = (30));

} else {
var statearr_23878_23963 = state_23870__$1;
(statearr_23878_23963[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (1))){
var state_23870__$1 = state_23870;
var statearr_23879_23964 = state_23870__$1;
(statearr_23879_23964[(2)] = null);

(statearr_23879_23964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (24))){
var inst_23771 = (state_23870[(7)]);
var inst_23788 = (state_23870[(2)]);
var inst_23789 = cljs.core.next.call(null,inst_23771);
var inst_23751 = inst_23789;
var inst_23752 = null;
var inst_23753 = (0);
var inst_23754 = (0);
var state_23870__$1 = (function (){var statearr_23880 = state_23870;
(statearr_23880[(13)] = inst_23754);

(statearr_23880[(14)] = inst_23788);

(statearr_23880[(15)] = inst_23753);

(statearr_23880[(16)] = inst_23751);

(statearr_23880[(17)] = inst_23752);

return statearr_23880;
})();
var statearr_23881_23965 = state_23870__$1;
(statearr_23881_23965[(2)] = null);

(statearr_23881_23965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (39))){
var state_23870__$1 = state_23870;
var statearr_23885_23966 = state_23870__$1;
(statearr_23885_23966[(2)] = null);

(statearr_23885_23966[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (4))){
var inst_23742 = (state_23870[(10)]);
var inst_23742__$1 = (state_23870[(2)]);
var inst_23743 = (inst_23742__$1 == null);
var state_23870__$1 = (function (){var statearr_23886 = state_23870;
(statearr_23886[(10)] = inst_23742__$1);

return statearr_23886;
})();
if(cljs.core.truth_(inst_23743)){
var statearr_23887_23967 = state_23870__$1;
(statearr_23887_23967[(1)] = (5));

} else {
var statearr_23888_23968 = state_23870__$1;
(statearr_23888_23968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (15))){
var inst_23754 = (state_23870[(13)]);
var inst_23753 = (state_23870[(15)]);
var inst_23751 = (state_23870[(16)]);
var inst_23752 = (state_23870[(17)]);
var inst_23767 = (state_23870[(2)]);
var inst_23768 = (inst_23754 + (1));
var tmp23882 = inst_23753;
var tmp23883 = inst_23751;
var tmp23884 = inst_23752;
var inst_23751__$1 = tmp23883;
var inst_23752__$1 = tmp23884;
var inst_23753__$1 = tmp23882;
var inst_23754__$1 = inst_23768;
var state_23870__$1 = (function (){var statearr_23889 = state_23870;
(statearr_23889[(18)] = inst_23767);

(statearr_23889[(13)] = inst_23754__$1);

(statearr_23889[(15)] = inst_23753__$1);

(statearr_23889[(16)] = inst_23751__$1);

(statearr_23889[(17)] = inst_23752__$1);

return statearr_23889;
})();
var statearr_23890_23969 = state_23870__$1;
(statearr_23890_23969[(2)] = null);

(statearr_23890_23969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (21))){
var inst_23792 = (state_23870[(2)]);
var state_23870__$1 = state_23870;
var statearr_23894_23970 = state_23870__$1;
(statearr_23894_23970[(2)] = inst_23792);

(statearr_23894_23970[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (31))){
var inst_23818 = (state_23870[(11)]);
var inst_23822 = done.call(null,null);
var inst_23823 = cljs.core.async.untap_STAR_.call(null,m,inst_23818);
var state_23870__$1 = (function (){var statearr_23895 = state_23870;
(statearr_23895[(19)] = inst_23822);

return statearr_23895;
})();
var statearr_23896_23971 = state_23870__$1;
(statearr_23896_23971[(2)] = inst_23823);

(statearr_23896_23971[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (32))){
var inst_23813 = (state_23870[(9)]);
var inst_23810 = (state_23870[(20)]);
var inst_23812 = (state_23870[(21)]);
var inst_23811 = (state_23870[(12)]);
var inst_23825 = (state_23870[(2)]);
var inst_23826 = (inst_23813 + (1));
var tmp23891 = inst_23810;
var tmp23892 = inst_23812;
var tmp23893 = inst_23811;
var inst_23810__$1 = tmp23891;
var inst_23811__$1 = tmp23893;
var inst_23812__$1 = tmp23892;
var inst_23813__$1 = inst_23826;
var state_23870__$1 = (function (){var statearr_23897 = state_23870;
(statearr_23897[(9)] = inst_23813__$1);

(statearr_23897[(22)] = inst_23825);

(statearr_23897[(20)] = inst_23810__$1);

(statearr_23897[(21)] = inst_23812__$1);

(statearr_23897[(12)] = inst_23811__$1);

return statearr_23897;
})();
var statearr_23898_23972 = state_23870__$1;
(statearr_23898_23972[(2)] = null);

(statearr_23898_23972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (40))){
var inst_23838 = (state_23870[(23)]);
var inst_23842 = done.call(null,null);
var inst_23843 = cljs.core.async.untap_STAR_.call(null,m,inst_23838);
var state_23870__$1 = (function (){var statearr_23899 = state_23870;
(statearr_23899[(24)] = inst_23842);

return statearr_23899;
})();
var statearr_23900_23973 = state_23870__$1;
(statearr_23900_23973[(2)] = inst_23843);

(statearr_23900_23973[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (33))){
var inst_23829 = (state_23870[(25)]);
var inst_23831 = cljs.core.chunked_seq_QMARK_.call(null,inst_23829);
var state_23870__$1 = state_23870;
if(inst_23831){
var statearr_23901_23974 = state_23870__$1;
(statearr_23901_23974[(1)] = (36));

} else {
var statearr_23902_23975 = state_23870__$1;
(statearr_23902_23975[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (13))){
var inst_23761 = (state_23870[(26)]);
var inst_23764 = cljs.core.async.close_BANG_.call(null,inst_23761);
var state_23870__$1 = state_23870;
var statearr_23903_23976 = state_23870__$1;
(statearr_23903_23976[(2)] = inst_23764);

(statearr_23903_23976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (22))){
var inst_23782 = (state_23870[(8)]);
var inst_23785 = cljs.core.async.close_BANG_.call(null,inst_23782);
var state_23870__$1 = state_23870;
var statearr_23904_23977 = state_23870__$1;
(statearr_23904_23977[(2)] = inst_23785);

(statearr_23904_23977[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (36))){
var inst_23829 = (state_23870[(25)]);
var inst_23833 = cljs.core.chunk_first.call(null,inst_23829);
var inst_23834 = cljs.core.chunk_rest.call(null,inst_23829);
var inst_23835 = cljs.core.count.call(null,inst_23833);
var inst_23810 = inst_23834;
var inst_23811 = inst_23833;
var inst_23812 = inst_23835;
var inst_23813 = (0);
var state_23870__$1 = (function (){var statearr_23905 = state_23870;
(statearr_23905[(9)] = inst_23813);

(statearr_23905[(20)] = inst_23810);

(statearr_23905[(21)] = inst_23812);

(statearr_23905[(12)] = inst_23811);

return statearr_23905;
})();
var statearr_23906_23978 = state_23870__$1;
(statearr_23906_23978[(2)] = null);

(statearr_23906_23978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (41))){
var inst_23829 = (state_23870[(25)]);
var inst_23845 = (state_23870[(2)]);
var inst_23846 = cljs.core.next.call(null,inst_23829);
var inst_23810 = inst_23846;
var inst_23811 = null;
var inst_23812 = (0);
var inst_23813 = (0);
var state_23870__$1 = (function (){var statearr_23907 = state_23870;
(statearr_23907[(9)] = inst_23813);

(statearr_23907[(27)] = inst_23845);

(statearr_23907[(20)] = inst_23810);

(statearr_23907[(21)] = inst_23812);

(statearr_23907[(12)] = inst_23811);

return statearr_23907;
})();
var statearr_23908_23979 = state_23870__$1;
(statearr_23908_23979[(2)] = null);

(statearr_23908_23979[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (43))){
var state_23870__$1 = state_23870;
var statearr_23909_23980 = state_23870__$1;
(statearr_23909_23980[(2)] = null);

(statearr_23909_23980[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (29))){
var inst_23854 = (state_23870[(2)]);
var state_23870__$1 = state_23870;
var statearr_23910_23981 = state_23870__$1;
(statearr_23910_23981[(2)] = inst_23854);

(statearr_23910_23981[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (44))){
var inst_23863 = (state_23870[(2)]);
var state_23870__$1 = (function (){var statearr_23911 = state_23870;
(statearr_23911[(28)] = inst_23863);

return statearr_23911;
})();
var statearr_23912_23982 = state_23870__$1;
(statearr_23912_23982[(2)] = null);

(statearr_23912_23982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (6))){
var inst_23802 = (state_23870[(29)]);
var inst_23801 = cljs.core.deref.call(null,cs);
var inst_23802__$1 = cljs.core.keys.call(null,inst_23801);
var inst_23803 = cljs.core.count.call(null,inst_23802__$1);
var inst_23804 = cljs.core.reset_BANG_.call(null,dctr,inst_23803);
var inst_23809 = cljs.core.seq.call(null,inst_23802__$1);
var inst_23810 = inst_23809;
var inst_23811 = null;
var inst_23812 = (0);
var inst_23813 = (0);
var state_23870__$1 = (function (){var statearr_23913 = state_23870;
(statearr_23913[(9)] = inst_23813);

(statearr_23913[(29)] = inst_23802__$1);

(statearr_23913[(20)] = inst_23810);

(statearr_23913[(21)] = inst_23812);

(statearr_23913[(30)] = inst_23804);

(statearr_23913[(12)] = inst_23811);

return statearr_23913;
})();
var statearr_23914_23983 = state_23870__$1;
(statearr_23914_23983[(2)] = null);

(statearr_23914_23983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (28))){
var inst_23829 = (state_23870[(25)]);
var inst_23810 = (state_23870[(20)]);
var inst_23829__$1 = cljs.core.seq.call(null,inst_23810);
var state_23870__$1 = (function (){var statearr_23915 = state_23870;
(statearr_23915[(25)] = inst_23829__$1);

return statearr_23915;
})();
if(inst_23829__$1){
var statearr_23916_23984 = state_23870__$1;
(statearr_23916_23984[(1)] = (33));

} else {
var statearr_23917_23985 = state_23870__$1;
(statearr_23917_23985[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (25))){
var inst_23813 = (state_23870[(9)]);
var inst_23812 = (state_23870[(21)]);
var inst_23815 = (inst_23813 < inst_23812);
var inst_23816 = inst_23815;
var state_23870__$1 = state_23870;
if(cljs.core.truth_(inst_23816)){
var statearr_23918_23986 = state_23870__$1;
(statearr_23918_23986[(1)] = (27));

} else {
var statearr_23919_23987 = state_23870__$1;
(statearr_23919_23987[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (34))){
var state_23870__$1 = state_23870;
var statearr_23920_23988 = state_23870__$1;
(statearr_23920_23988[(2)] = null);

(statearr_23920_23988[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (17))){
var state_23870__$1 = state_23870;
var statearr_23921_23989 = state_23870__$1;
(statearr_23921_23989[(2)] = null);

(statearr_23921_23989[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (3))){
var inst_23868 = (state_23870[(2)]);
var state_23870__$1 = state_23870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23870__$1,inst_23868);
} else {
if((state_val_23871 === (12))){
var inst_23797 = (state_23870[(2)]);
var state_23870__$1 = state_23870;
var statearr_23922_23990 = state_23870__$1;
(statearr_23922_23990[(2)] = inst_23797);

(statearr_23922_23990[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (2))){
var state_23870__$1 = state_23870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23870__$1,(4),ch);
} else {
if((state_val_23871 === (23))){
var state_23870__$1 = state_23870;
var statearr_23923_23991 = state_23870__$1;
(statearr_23923_23991[(2)] = null);

(statearr_23923_23991[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (35))){
var inst_23852 = (state_23870[(2)]);
var state_23870__$1 = state_23870;
var statearr_23924_23992 = state_23870__$1;
(statearr_23924_23992[(2)] = inst_23852);

(statearr_23924_23992[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (19))){
var inst_23771 = (state_23870[(7)]);
var inst_23775 = cljs.core.chunk_first.call(null,inst_23771);
var inst_23776 = cljs.core.chunk_rest.call(null,inst_23771);
var inst_23777 = cljs.core.count.call(null,inst_23775);
var inst_23751 = inst_23776;
var inst_23752 = inst_23775;
var inst_23753 = inst_23777;
var inst_23754 = (0);
var state_23870__$1 = (function (){var statearr_23925 = state_23870;
(statearr_23925[(13)] = inst_23754);

(statearr_23925[(15)] = inst_23753);

(statearr_23925[(16)] = inst_23751);

(statearr_23925[(17)] = inst_23752);

return statearr_23925;
})();
var statearr_23926_23993 = state_23870__$1;
(statearr_23926_23993[(2)] = null);

(statearr_23926_23993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (11))){
var inst_23771 = (state_23870[(7)]);
var inst_23751 = (state_23870[(16)]);
var inst_23771__$1 = cljs.core.seq.call(null,inst_23751);
var state_23870__$1 = (function (){var statearr_23927 = state_23870;
(statearr_23927[(7)] = inst_23771__$1);

return statearr_23927;
})();
if(inst_23771__$1){
var statearr_23928_23994 = state_23870__$1;
(statearr_23928_23994[(1)] = (16));

} else {
var statearr_23929_23995 = state_23870__$1;
(statearr_23929_23995[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (9))){
var inst_23799 = (state_23870[(2)]);
var state_23870__$1 = state_23870;
var statearr_23930_23996 = state_23870__$1;
(statearr_23930_23996[(2)] = inst_23799);

(statearr_23930_23996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (5))){
var inst_23749 = cljs.core.deref.call(null,cs);
var inst_23750 = cljs.core.seq.call(null,inst_23749);
var inst_23751 = inst_23750;
var inst_23752 = null;
var inst_23753 = (0);
var inst_23754 = (0);
var state_23870__$1 = (function (){var statearr_23931 = state_23870;
(statearr_23931[(13)] = inst_23754);

(statearr_23931[(15)] = inst_23753);

(statearr_23931[(16)] = inst_23751);

(statearr_23931[(17)] = inst_23752);

return statearr_23931;
})();
var statearr_23932_23997 = state_23870__$1;
(statearr_23932_23997[(2)] = null);

(statearr_23932_23997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (14))){
var state_23870__$1 = state_23870;
var statearr_23933_23998 = state_23870__$1;
(statearr_23933_23998[(2)] = null);

(statearr_23933_23998[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (45))){
var inst_23860 = (state_23870[(2)]);
var state_23870__$1 = state_23870;
var statearr_23934_23999 = state_23870__$1;
(statearr_23934_23999[(2)] = inst_23860);

(statearr_23934_23999[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (26))){
var inst_23802 = (state_23870[(29)]);
var inst_23856 = (state_23870[(2)]);
var inst_23857 = cljs.core.seq.call(null,inst_23802);
var state_23870__$1 = (function (){var statearr_23935 = state_23870;
(statearr_23935[(31)] = inst_23856);

return statearr_23935;
})();
if(inst_23857){
var statearr_23936_24000 = state_23870__$1;
(statearr_23936_24000[(1)] = (42));

} else {
var statearr_23937_24001 = state_23870__$1;
(statearr_23937_24001[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (16))){
var inst_23771 = (state_23870[(7)]);
var inst_23773 = cljs.core.chunked_seq_QMARK_.call(null,inst_23771);
var state_23870__$1 = state_23870;
if(inst_23773){
var statearr_23938_24002 = state_23870__$1;
(statearr_23938_24002[(1)] = (19));

} else {
var statearr_23939_24003 = state_23870__$1;
(statearr_23939_24003[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (38))){
var inst_23849 = (state_23870[(2)]);
var state_23870__$1 = state_23870;
var statearr_23940_24004 = state_23870__$1;
(statearr_23940_24004[(2)] = inst_23849);

(statearr_23940_24004[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (30))){
var state_23870__$1 = state_23870;
var statearr_23941_24005 = state_23870__$1;
(statearr_23941_24005[(2)] = null);

(statearr_23941_24005[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (10))){
var inst_23754 = (state_23870[(13)]);
var inst_23752 = (state_23870[(17)]);
var inst_23760 = cljs.core._nth.call(null,inst_23752,inst_23754);
var inst_23761 = cljs.core.nth.call(null,inst_23760,(0),null);
var inst_23762 = cljs.core.nth.call(null,inst_23760,(1),null);
var state_23870__$1 = (function (){var statearr_23942 = state_23870;
(statearr_23942[(26)] = inst_23761);

return statearr_23942;
})();
if(cljs.core.truth_(inst_23762)){
var statearr_23943_24006 = state_23870__$1;
(statearr_23943_24006[(1)] = (13));

} else {
var statearr_23944_24007 = state_23870__$1;
(statearr_23944_24007[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (18))){
var inst_23795 = (state_23870[(2)]);
var state_23870__$1 = state_23870;
var statearr_23945_24008 = state_23870__$1;
(statearr_23945_24008[(2)] = inst_23795);

(statearr_23945_24008[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (42))){
var state_23870__$1 = state_23870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23870__$1,(45),dchan);
} else {
if((state_val_23871 === (37))){
var inst_23838 = (state_23870[(23)]);
var inst_23829 = (state_23870[(25)]);
var inst_23742 = (state_23870[(10)]);
var inst_23838__$1 = cljs.core.first.call(null,inst_23829);
var inst_23839 = cljs.core.async.put_BANG_.call(null,inst_23838__$1,inst_23742,done);
var state_23870__$1 = (function (){var statearr_23946 = state_23870;
(statearr_23946[(23)] = inst_23838__$1);

return statearr_23946;
})();
if(cljs.core.truth_(inst_23839)){
var statearr_23947_24009 = state_23870__$1;
(statearr_23947_24009[(1)] = (39));

} else {
var statearr_23948_24010 = state_23870__$1;
(statearr_23948_24010[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (8))){
var inst_23754 = (state_23870[(13)]);
var inst_23753 = (state_23870[(15)]);
var inst_23756 = (inst_23754 < inst_23753);
var inst_23757 = inst_23756;
var state_23870__$1 = state_23870;
if(cljs.core.truth_(inst_23757)){
var statearr_23949_24011 = state_23870__$1;
(statearr_23949_24011[(1)] = (10));

} else {
var statearr_23950_24012 = state_23870__$1;
(statearr_23950_24012[(1)] = (11));

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
});})(c__22651__auto___23958,cs,m,dchan,dctr,done))
;
return ((function (switch__20473__auto__,c__22651__auto___23958,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20474__auto__ = null;
var cljs$core$async$mult_$_state_machine__20474__auto____0 = (function (){
var statearr_23954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23954[(0)] = cljs$core$async$mult_$_state_machine__20474__auto__);

(statearr_23954[(1)] = (1));

return statearr_23954;
});
var cljs$core$async$mult_$_state_machine__20474__auto____1 = (function (state_23870){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_23870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e23955){if((e23955 instanceof Object)){
var ex__20477__auto__ = e23955;
var statearr_23956_24013 = state_23870;
(statearr_23956_24013[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24014 = state_23870;
state_23870 = G__24014;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20474__auto__ = function(state_23870){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20474__auto____1.call(this,state_23870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20474__auto____0;
cljs$core$async$mult_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20474__auto____1;
return cljs$core$async$mult_$_state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto___23958,cs,m,dchan,dctr,done))
})();
var state__22653__auto__ = (function (){var statearr_23957 = f__22652__auto__.call(null);
(statearr_23957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto___23958);

return statearr_23957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto___23958,cs,m,dchan,dctr,done))
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
var args24015 = [];
var len__19530__auto___24018 = arguments.length;
var i__19531__auto___24019 = (0);
while(true){
if((i__19531__auto___24019 < len__19530__auto___24018)){
args24015.push((arguments[i__19531__auto___24019]));

var G__24020 = (i__19531__auto___24019 + (1));
i__19531__auto___24019 = G__24020;
continue;
} else {
}
break;
}

var G__24017 = args24015.length;
switch (G__24017) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24015.length)].join('')));

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
var x__19123__auto__ = (((m == null))?null:m);
var m__19124__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19123__auto__)]);
if(!((m__19124__auto__ == null))){
return m__19124__auto__.call(null,m,ch);
} else {
var m__19124__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19124__auto____$1 == null))){
return m__19124__auto____$1.call(null,m,ch);
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
var x__19123__auto__ = (((m == null))?null:m);
var m__19124__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19123__auto__)]);
if(!((m__19124__auto__ == null))){
return m__19124__auto__.call(null,m,ch);
} else {
var m__19124__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19124__auto____$1 == null))){
return m__19124__auto____$1.call(null,m,ch);
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
var x__19123__auto__ = (((m == null))?null:m);
var m__19124__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19123__auto__)]);
if(!((m__19124__auto__ == null))){
return m__19124__auto__.call(null,m);
} else {
var m__19124__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19124__auto____$1 == null))){
return m__19124__auto____$1.call(null,m);
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
var x__19123__auto__ = (((m == null))?null:m);
var m__19124__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19123__auto__)]);
if(!((m__19124__auto__ == null))){
return m__19124__auto__.call(null,m,state_map);
} else {
var m__19124__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19124__auto____$1 == null))){
return m__19124__auto____$1.call(null,m,state_map);
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
var x__19123__auto__ = (((m == null))?null:m);
var m__19124__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19123__auto__)]);
if(!((m__19124__auto__ == null))){
return m__19124__auto__.call(null,m,mode);
} else {
var m__19124__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19124__auto____$1 == null))){
return m__19124__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19537__auto__ = [];
var len__19530__auto___24032 = arguments.length;
var i__19531__auto___24033 = (0);
while(true){
if((i__19531__auto___24033 < len__19530__auto___24032)){
args__19537__auto__.push((arguments[i__19531__auto___24033]));

var G__24034 = (i__19531__auto___24033 + (1));
i__19531__auto___24033 = G__24034;
continue;
} else {
}
break;
}

var argseq__19538__auto__ = ((((3) < args__19537__auto__.length))?(new cljs.core.IndexedSeq(args__19537__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19538__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24026){
var map__24027 = p__24026;
var map__24027__$1 = ((((!((map__24027 == null)))?((((map__24027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24027):map__24027);
var opts = map__24027__$1;
var statearr_24029_24035 = state;
(statearr_24029_24035[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__24027,map__24027__$1,opts){
return (function (val){
var statearr_24030_24036 = state;
(statearr_24030_24036[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24027,map__24027__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_24031_24037 = state;
(statearr_24031_24037[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24022){
var G__24023 = cljs.core.first.call(null,seq24022);
var seq24022__$1 = cljs.core.next.call(null,seq24022);
var G__24024 = cljs.core.first.call(null,seq24022__$1);
var seq24022__$2 = cljs.core.next.call(null,seq24022__$1);
var G__24025 = cljs.core.first.call(null,seq24022__$2);
var seq24022__$3 = cljs.core.next.call(null,seq24022__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24023,G__24024,G__24025,seq24022__$3);
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
if(typeof cljs.core.async.t_cljs$core$async24201 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24201 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24202){
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
this.meta24202 = meta24202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24203,meta24202__$1){
var self__ = this;
var _24203__$1 = this;
return (new cljs.core.async.t_cljs$core$async24201(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24202__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24201.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24203){
var self__ = this;
var _24203__$1 = this;
return self__.meta24202;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24201.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24201.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24201.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24201.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24201.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24201.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24201.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24201.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24201.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24202","meta24202",-1417246986,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24201.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24201";

cljs.core.async.t_cljs$core$async24201.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async24201");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24201 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24201(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24202){
return (new cljs.core.async.t_cljs$core$async24201(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24202));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24201(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22651__auto___24364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto___24364,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto___24364,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24301){
var state_val_24302 = (state_24301[(1)]);
if((state_val_24302 === (7))){
var inst_24219 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
var statearr_24303_24365 = state_24301__$1;
(statearr_24303_24365[(2)] = inst_24219);

(statearr_24303_24365[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (20))){
var inst_24231 = (state_24301[(7)]);
var state_24301__$1 = state_24301;
var statearr_24304_24366 = state_24301__$1;
(statearr_24304_24366[(2)] = inst_24231);

(statearr_24304_24366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (27))){
var state_24301__$1 = state_24301;
var statearr_24305_24367 = state_24301__$1;
(statearr_24305_24367[(2)] = null);

(statearr_24305_24367[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (1))){
var inst_24207 = (state_24301[(8)]);
var inst_24207__$1 = calc_state.call(null);
var inst_24209 = (inst_24207__$1 == null);
var inst_24210 = cljs.core.not.call(null,inst_24209);
var state_24301__$1 = (function (){var statearr_24306 = state_24301;
(statearr_24306[(8)] = inst_24207__$1);

return statearr_24306;
})();
if(inst_24210){
var statearr_24307_24368 = state_24301__$1;
(statearr_24307_24368[(1)] = (2));

} else {
var statearr_24308_24369 = state_24301__$1;
(statearr_24308_24369[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (24))){
var inst_24275 = (state_24301[(9)]);
var inst_24261 = (state_24301[(10)]);
var inst_24254 = (state_24301[(11)]);
var inst_24275__$1 = inst_24254.call(null,inst_24261);
var state_24301__$1 = (function (){var statearr_24309 = state_24301;
(statearr_24309[(9)] = inst_24275__$1);

return statearr_24309;
})();
if(cljs.core.truth_(inst_24275__$1)){
var statearr_24310_24370 = state_24301__$1;
(statearr_24310_24370[(1)] = (29));

} else {
var statearr_24311_24371 = state_24301__$1;
(statearr_24311_24371[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (4))){
var inst_24222 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
if(cljs.core.truth_(inst_24222)){
var statearr_24312_24372 = state_24301__$1;
(statearr_24312_24372[(1)] = (8));

} else {
var statearr_24313_24373 = state_24301__$1;
(statearr_24313_24373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (15))){
var inst_24248 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
if(cljs.core.truth_(inst_24248)){
var statearr_24314_24374 = state_24301__$1;
(statearr_24314_24374[(1)] = (19));

} else {
var statearr_24315_24375 = state_24301__$1;
(statearr_24315_24375[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (21))){
var inst_24253 = (state_24301[(12)]);
var inst_24253__$1 = (state_24301[(2)]);
var inst_24254 = cljs.core.get.call(null,inst_24253__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24255 = cljs.core.get.call(null,inst_24253__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24256 = cljs.core.get.call(null,inst_24253__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24301__$1 = (function (){var statearr_24316 = state_24301;
(statearr_24316[(13)] = inst_24255);

(statearr_24316[(12)] = inst_24253__$1);

(statearr_24316[(11)] = inst_24254);

return statearr_24316;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24301__$1,(22),inst_24256);
} else {
if((state_val_24302 === (31))){
var inst_24283 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
if(cljs.core.truth_(inst_24283)){
var statearr_24317_24376 = state_24301__$1;
(statearr_24317_24376[(1)] = (32));

} else {
var statearr_24318_24377 = state_24301__$1;
(statearr_24318_24377[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (32))){
var inst_24260 = (state_24301[(14)]);
var state_24301__$1 = state_24301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24301__$1,(35),out,inst_24260);
} else {
if((state_val_24302 === (33))){
var inst_24253 = (state_24301[(12)]);
var inst_24231 = inst_24253;
var state_24301__$1 = (function (){var statearr_24319 = state_24301;
(statearr_24319[(7)] = inst_24231);

return statearr_24319;
})();
var statearr_24320_24378 = state_24301__$1;
(statearr_24320_24378[(2)] = null);

(statearr_24320_24378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (13))){
var inst_24231 = (state_24301[(7)]);
var inst_24238 = inst_24231.cljs$lang$protocol_mask$partition0$;
var inst_24239 = (inst_24238 & (64));
var inst_24240 = inst_24231.cljs$core$ISeq$;
var inst_24241 = (inst_24239) || (inst_24240);
var state_24301__$1 = state_24301;
if(cljs.core.truth_(inst_24241)){
var statearr_24321_24379 = state_24301__$1;
(statearr_24321_24379[(1)] = (16));

} else {
var statearr_24322_24380 = state_24301__$1;
(statearr_24322_24380[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (22))){
var inst_24261 = (state_24301[(10)]);
var inst_24260 = (state_24301[(14)]);
var inst_24259 = (state_24301[(2)]);
var inst_24260__$1 = cljs.core.nth.call(null,inst_24259,(0),null);
var inst_24261__$1 = cljs.core.nth.call(null,inst_24259,(1),null);
var inst_24262 = (inst_24260__$1 == null);
var inst_24263 = cljs.core._EQ_.call(null,inst_24261__$1,change);
var inst_24264 = (inst_24262) || (inst_24263);
var state_24301__$1 = (function (){var statearr_24323 = state_24301;
(statearr_24323[(10)] = inst_24261__$1);

(statearr_24323[(14)] = inst_24260__$1);

return statearr_24323;
})();
if(cljs.core.truth_(inst_24264)){
var statearr_24324_24381 = state_24301__$1;
(statearr_24324_24381[(1)] = (23));

} else {
var statearr_24325_24382 = state_24301__$1;
(statearr_24325_24382[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (36))){
var inst_24253 = (state_24301[(12)]);
var inst_24231 = inst_24253;
var state_24301__$1 = (function (){var statearr_24326 = state_24301;
(statearr_24326[(7)] = inst_24231);

return statearr_24326;
})();
var statearr_24327_24383 = state_24301__$1;
(statearr_24327_24383[(2)] = null);

(statearr_24327_24383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (29))){
var inst_24275 = (state_24301[(9)]);
var state_24301__$1 = state_24301;
var statearr_24328_24384 = state_24301__$1;
(statearr_24328_24384[(2)] = inst_24275);

(statearr_24328_24384[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (6))){
var state_24301__$1 = state_24301;
var statearr_24329_24385 = state_24301__$1;
(statearr_24329_24385[(2)] = false);

(statearr_24329_24385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (28))){
var inst_24271 = (state_24301[(2)]);
var inst_24272 = calc_state.call(null);
var inst_24231 = inst_24272;
var state_24301__$1 = (function (){var statearr_24330 = state_24301;
(statearr_24330[(15)] = inst_24271);

(statearr_24330[(7)] = inst_24231);

return statearr_24330;
})();
var statearr_24331_24386 = state_24301__$1;
(statearr_24331_24386[(2)] = null);

(statearr_24331_24386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (25))){
var inst_24297 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
var statearr_24332_24387 = state_24301__$1;
(statearr_24332_24387[(2)] = inst_24297);

(statearr_24332_24387[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (34))){
var inst_24295 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
var statearr_24333_24388 = state_24301__$1;
(statearr_24333_24388[(2)] = inst_24295);

(statearr_24333_24388[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (17))){
var state_24301__$1 = state_24301;
var statearr_24334_24389 = state_24301__$1;
(statearr_24334_24389[(2)] = false);

(statearr_24334_24389[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (3))){
var state_24301__$1 = state_24301;
var statearr_24335_24390 = state_24301__$1;
(statearr_24335_24390[(2)] = false);

(statearr_24335_24390[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (12))){
var inst_24299 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24301__$1,inst_24299);
} else {
if((state_val_24302 === (2))){
var inst_24207 = (state_24301[(8)]);
var inst_24212 = inst_24207.cljs$lang$protocol_mask$partition0$;
var inst_24213 = (inst_24212 & (64));
var inst_24214 = inst_24207.cljs$core$ISeq$;
var inst_24215 = (inst_24213) || (inst_24214);
var state_24301__$1 = state_24301;
if(cljs.core.truth_(inst_24215)){
var statearr_24336_24391 = state_24301__$1;
(statearr_24336_24391[(1)] = (5));

} else {
var statearr_24337_24392 = state_24301__$1;
(statearr_24337_24392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (23))){
var inst_24260 = (state_24301[(14)]);
var inst_24266 = (inst_24260 == null);
var state_24301__$1 = state_24301;
if(cljs.core.truth_(inst_24266)){
var statearr_24338_24393 = state_24301__$1;
(statearr_24338_24393[(1)] = (26));

} else {
var statearr_24339_24394 = state_24301__$1;
(statearr_24339_24394[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (35))){
var inst_24286 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
if(cljs.core.truth_(inst_24286)){
var statearr_24340_24395 = state_24301__$1;
(statearr_24340_24395[(1)] = (36));

} else {
var statearr_24341_24396 = state_24301__$1;
(statearr_24341_24396[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (19))){
var inst_24231 = (state_24301[(7)]);
var inst_24250 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24231);
var state_24301__$1 = state_24301;
var statearr_24342_24397 = state_24301__$1;
(statearr_24342_24397[(2)] = inst_24250);

(statearr_24342_24397[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (11))){
var inst_24231 = (state_24301[(7)]);
var inst_24235 = (inst_24231 == null);
var inst_24236 = cljs.core.not.call(null,inst_24235);
var state_24301__$1 = state_24301;
if(inst_24236){
var statearr_24343_24398 = state_24301__$1;
(statearr_24343_24398[(1)] = (13));

} else {
var statearr_24344_24399 = state_24301__$1;
(statearr_24344_24399[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (9))){
var inst_24207 = (state_24301[(8)]);
var state_24301__$1 = state_24301;
var statearr_24345_24400 = state_24301__$1;
(statearr_24345_24400[(2)] = inst_24207);

(statearr_24345_24400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (5))){
var state_24301__$1 = state_24301;
var statearr_24346_24401 = state_24301__$1;
(statearr_24346_24401[(2)] = true);

(statearr_24346_24401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (14))){
var state_24301__$1 = state_24301;
var statearr_24347_24402 = state_24301__$1;
(statearr_24347_24402[(2)] = false);

(statearr_24347_24402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (26))){
var inst_24261 = (state_24301[(10)]);
var inst_24268 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24261);
var state_24301__$1 = state_24301;
var statearr_24348_24403 = state_24301__$1;
(statearr_24348_24403[(2)] = inst_24268);

(statearr_24348_24403[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (16))){
var state_24301__$1 = state_24301;
var statearr_24349_24404 = state_24301__$1;
(statearr_24349_24404[(2)] = true);

(statearr_24349_24404[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (38))){
var inst_24291 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
var statearr_24350_24405 = state_24301__$1;
(statearr_24350_24405[(2)] = inst_24291);

(statearr_24350_24405[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (30))){
var inst_24255 = (state_24301[(13)]);
var inst_24261 = (state_24301[(10)]);
var inst_24254 = (state_24301[(11)]);
var inst_24278 = cljs.core.empty_QMARK_.call(null,inst_24254);
var inst_24279 = inst_24255.call(null,inst_24261);
var inst_24280 = cljs.core.not.call(null,inst_24279);
var inst_24281 = (inst_24278) && (inst_24280);
var state_24301__$1 = state_24301;
var statearr_24351_24406 = state_24301__$1;
(statearr_24351_24406[(2)] = inst_24281);

(statearr_24351_24406[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (10))){
var inst_24207 = (state_24301[(8)]);
var inst_24227 = (state_24301[(2)]);
var inst_24228 = cljs.core.get.call(null,inst_24227,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24229 = cljs.core.get.call(null,inst_24227,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24230 = cljs.core.get.call(null,inst_24227,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24231 = inst_24207;
var state_24301__$1 = (function (){var statearr_24352 = state_24301;
(statearr_24352[(16)] = inst_24228);

(statearr_24352[(17)] = inst_24230);

(statearr_24352[(18)] = inst_24229);

(statearr_24352[(7)] = inst_24231);

return statearr_24352;
})();
var statearr_24353_24407 = state_24301__$1;
(statearr_24353_24407[(2)] = null);

(statearr_24353_24407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (18))){
var inst_24245 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
var statearr_24354_24408 = state_24301__$1;
(statearr_24354_24408[(2)] = inst_24245);

(statearr_24354_24408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (37))){
var state_24301__$1 = state_24301;
var statearr_24355_24409 = state_24301__$1;
(statearr_24355_24409[(2)] = null);

(statearr_24355_24409[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (8))){
var inst_24207 = (state_24301[(8)]);
var inst_24224 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24207);
var state_24301__$1 = state_24301;
var statearr_24356_24410 = state_24301__$1;
(statearr_24356_24410[(2)] = inst_24224);

(statearr_24356_24410[(1)] = (10));


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
});})(c__22651__auto___24364,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20473__auto__,c__22651__auto___24364,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20474__auto__ = null;
var cljs$core$async$mix_$_state_machine__20474__auto____0 = (function (){
var statearr_24360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24360[(0)] = cljs$core$async$mix_$_state_machine__20474__auto__);

(statearr_24360[(1)] = (1));

return statearr_24360;
});
var cljs$core$async$mix_$_state_machine__20474__auto____1 = (function (state_24301){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_24301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e24361){if((e24361 instanceof Object)){
var ex__20477__auto__ = e24361;
var statearr_24362_24411 = state_24301;
(statearr_24362_24411[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24412 = state_24301;
state_24301 = G__24412;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20474__auto__ = function(state_24301){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20474__auto____1.call(this,state_24301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20474__auto____0;
cljs$core$async$mix_$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20474__auto____1;
return cljs$core$async$mix_$_state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto___24364,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22653__auto__ = (function (){var statearr_24363 = f__22652__auto__.call(null);
(statearr_24363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto___24364);

return statearr_24363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto___24364,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__19123__auto__ = (((p == null))?null:p);
var m__19124__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19123__auto__)]);
if(!((m__19124__auto__ == null))){
return m__19124__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19124__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19124__auto____$1 == null))){
return m__19124__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19123__auto__ = (((p == null))?null:p);
var m__19124__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19123__auto__)]);
if(!((m__19124__auto__ == null))){
return m__19124__auto__.call(null,p,v,ch);
} else {
var m__19124__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19124__auto____$1 == null))){
return m__19124__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24413 = [];
var len__19530__auto___24416 = arguments.length;
var i__19531__auto___24417 = (0);
while(true){
if((i__19531__auto___24417 < len__19530__auto___24416)){
args24413.push((arguments[i__19531__auto___24417]));

var G__24418 = (i__19531__auto___24417 + (1));
i__19531__auto___24417 = G__24418;
continue;
} else {
}
break;
}

var G__24415 = args24413.length;
switch (G__24415) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24413.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19123__auto__ = (((p == null))?null:p);
var m__19124__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19123__auto__)]);
if(!((m__19124__auto__ == null))){
return m__19124__auto__.call(null,p);
} else {
var m__19124__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19124__auto____$1 == null))){
return m__19124__auto____$1.call(null,p);
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
var x__19123__auto__ = (((p == null))?null:p);
var m__19124__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19123__auto__)]);
if(!((m__19124__auto__ == null))){
return m__19124__auto__.call(null,p,v);
} else {
var m__19124__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19124__auto____$1 == null))){
return m__19124__auto____$1.call(null,p,v);
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
var args24421 = [];
var len__19530__auto___24546 = arguments.length;
var i__19531__auto___24547 = (0);
while(true){
if((i__19531__auto___24547 < len__19530__auto___24546)){
args24421.push((arguments[i__19531__auto___24547]));

var G__24548 = (i__19531__auto___24547 + (1));
i__19531__auto___24547 = G__24548;
continue;
} else {
}
break;
}

var G__24423 = args24421.length;
switch (G__24423) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24421.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18460__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18460__auto__)){
return or__18460__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18460__auto__,mults){
return (function (p1__24420_SHARP_){
if(cljs.core.truth_(p1__24420_SHARP_.call(null,topic))){
return p1__24420_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24420_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18460__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24424 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24425){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24425 = meta24425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24426,meta24425__$1){
var self__ = this;
var _24426__$1 = this;
return (new cljs.core.async.t_cljs$core$async24424(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24425__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24426){
var self__ = this;
var _24426__$1 = this;
return self__.meta24425;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24424.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24425","meta24425",-925102660,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24424.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24424";

cljs.core.async.t_cljs$core$async24424.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async24424");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24424 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24424(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24425){
return (new cljs.core.async.t_cljs$core$async24424(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24425));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24424(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22651__auto___24550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto___24550,mults,ensure_mult,p){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto___24550,mults,ensure_mult,p){
return (function (state_24498){
var state_val_24499 = (state_24498[(1)]);
if((state_val_24499 === (7))){
var inst_24494 = (state_24498[(2)]);
var state_24498__$1 = state_24498;
var statearr_24500_24551 = state_24498__$1;
(statearr_24500_24551[(2)] = inst_24494);

(statearr_24500_24551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (20))){
var state_24498__$1 = state_24498;
var statearr_24501_24552 = state_24498__$1;
(statearr_24501_24552[(2)] = null);

(statearr_24501_24552[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (1))){
var state_24498__$1 = state_24498;
var statearr_24502_24553 = state_24498__$1;
(statearr_24502_24553[(2)] = null);

(statearr_24502_24553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (24))){
var inst_24477 = (state_24498[(7)]);
var inst_24486 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24477);
var state_24498__$1 = state_24498;
var statearr_24503_24554 = state_24498__$1;
(statearr_24503_24554[(2)] = inst_24486);

(statearr_24503_24554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (4))){
var inst_24429 = (state_24498[(8)]);
var inst_24429__$1 = (state_24498[(2)]);
var inst_24430 = (inst_24429__$1 == null);
var state_24498__$1 = (function (){var statearr_24504 = state_24498;
(statearr_24504[(8)] = inst_24429__$1);

return statearr_24504;
})();
if(cljs.core.truth_(inst_24430)){
var statearr_24505_24555 = state_24498__$1;
(statearr_24505_24555[(1)] = (5));

} else {
var statearr_24506_24556 = state_24498__$1;
(statearr_24506_24556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (15))){
var inst_24471 = (state_24498[(2)]);
var state_24498__$1 = state_24498;
var statearr_24507_24557 = state_24498__$1;
(statearr_24507_24557[(2)] = inst_24471);

(statearr_24507_24557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (21))){
var inst_24491 = (state_24498[(2)]);
var state_24498__$1 = (function (){var statearr_24508 = state_24498;
(statearr_24508[(9)] = inst_24491);

return statearr_24508;
})();
var statearr_24509_24558 = state_24498__$1;
(statearr_24509_24558[(2)] = null);

(statearr_24509_24558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (13))){
var inst_24453 = (state_24498[(10)]);
var inst_24455 = cljs.core.chunked_seq_QMARK_.call(null,inst_24453);
var state_24498__$1 = state_24498;
if(inst_24455){
var statearr_24510_24559 = state_24498__$1;
(statearr_24510_24559[(1)] = (16));

} else {
var statearr_24511_24560 = state_24498__$1;
(statearr_24511_24560[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (22))){
var inst_24483 = (state_24498[(2)]);
var state_24498__$1 = state_24498;
if(cljs.core.truth_(inst_24483)){
var statearr_24512_24561 = state_24498__$1;
(statearr_24512_24561[(1)] = (23));

} else {
var statearr_24513_24562 = state_24498__$1;
(statearr_24513_24562[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (6))){
var inst_24477 = (state_24498[(7)]);
var inst_24429 = (state_24498[(8)]);
var inst_24479 = (state_24498[(11)]);
var inst_24477__$1 = topic_fn.call(null,inst_24429);
var inst_24478 = cljs.core.deref.call(null,mults);
var inst_24479__$1 = cljs.core.get.call(null,inst_24478,inst_24477__$1);
var state_24498__$1 = (function (){var statearr_24514 = state_24498;
(statearr_24514[(7)] = inst_24477__$1);

(statearr_24514[(11)] = inst_24479__$1);

return statearr_24514;
})();
if(cljs.core.truth_(inst_24479__$1)){
var statearr_24515_24563 = state_24498__$1;
(statearr_24515_24563[(1)] = (19));

} else {
var statearr_24516_24564 = state_24498__$1;
(statearr_24516_24564[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (25))){
var inst_24488 = (state_24498[(2)]);
var state_24498__$1 = state_24498;
var statearr_24517_24565 = state_24498__$1;
(statearr_24517_24565[(2)] = inst_24488);

(statearr_24517_24565[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (17))){
var inst_24453 = (state_24498[(10)]);
var inst_24462 = cljs.core.first.call(null,inst_24453);
var inst_24463 = cljs.core.async.muxch_STAR_.call(null,inst_24462);
var inst_24464 = cljs.core.async.close_BANG_.call(null,inst_24463);
var inst_24465 = cljs.core.next.call(null,inst_24453);
var inst_24439 = inst_24465;
var inst_24440 = null;
var inst_24441 = (0);
var inst_24442 = (0);
var state_24498__$1 = (function (){var statearr_24518 = state_24498;
(statearr_24518[(12)] = inst_24441);

(statearr_24518[(13)] = inst_24439);

(statearr_24518[(14)] = inst_24440);

(statearr_24518[(15)] = inst_24442);

(statearr_24518[(16)] = inst_24464);

return statearr_24518;
})();
var statearr_24519_24566 = state_24498__$1;
(statearr_24519_24566[(2)] = null);

(statearr_24519_24566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (3))){
var inst_24496 = (state_24498[(2)]);
var state_24498__$1 = state_24498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24498__$1,inst_24496);
} else {
if((state_val_24499 === (12))){
var inst_24473 = (state_24498[(2)]);
var state_24498__$1 = state_24498;
var statearr_24520_24567 = state_24498__$1;
(statearr_24520_24567[(2)] = inst_24473);

(statearr_24520_24567[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (2))){
var state_24498__$1 = state_24498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24498__$1,(4),ch);
} else {
if((state_val_24499 === (23))){
var state_24498__$1 = state_24498;
var statearr_24521_24568 = state_24498__$1;
(statearr_24521_24568[(2)] = null);

(statearr_24521_24568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (19))){
var inst_24429 = (state_24498[(8)]);
var inst_24479 = (state_24498[(11)]);
var inst_24481 = cljs.core.async.muxch_STAR_.call(null,inst_24479);
var state_24498__$1 = state_24498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24498__$1,(22),inst_24481,inst_24429);
} else {
if((state_val_24499 === (11))){
var inst_24439 = (state_24498[(13)]);
var inst_24453 = (state_24498[(10)]);
var inst_24453__$1 = cljs.core.seq.call(null,inst_24439);
var state_24498__$1 = (function (){var statearr_24522 = state_24498;
(statearr_24522[(10)] = inst_24453__$1);

return statearr_24522;
})();
if(inst_24453__$1){
var statearr_24523_24569 = state_24498__$1;
(statearr_24523_24569[(1)] = (13));

} else {
var statearr_24524_24570 = state_24498__$1;
(statearr_24524_24570[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (9))){
var inst_24475 = (state_24498[(2)]);
var state_24498__$1 = state_24498;
var statearr_24525_24571 = state_24498__$1;
(statearr_24525_24571[(2)] = inst_24475);

(statearr_24525_24571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (5))){
var inst_24436 = cljs.core.deref.call(null,mults);
var inst_24437 = cljs.core.vals.call(null,inst_24436);
var inst_24438 = cljs.core.seq.call(null,inst_24437);
var inst_24439 = inst_24438;
var inst_24440 = null;
var inst_24441 = (0);
var inst_24442 = (0);
var state_24498__$1 = (function (){var statearr_24526 = state_24498;
(statearr_24526[(12)] = inst_24441);

(statearr_24526[(13)] = inst_24439);

(statearr_24526[(14)] = inst_24440);

(statearr_24526[(15)] = inst_24442);

return statearr_24526;
})();
var statearr_24527_24572 = state_24498__$1;
(statearr_24527_24572[(2)] = null);

(statearr_24527_24572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (14))){
var state_24498__$1 = state_24498;
var statearr_24531_24573 = state_24498__$1;
(statearr_24531_24573[(2)] = null);

(statearr_24531_24573[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (16))){
var inst_24453 = (state_24498[(10)]);
var inst_24457 = cljs.core.chunk_first.call(null,inst_24453);
var inst_24458 = cljs.core.chunk_rest.call(null,inst_24453);
var inst_24459 = cljs.core.count.call(null,inst_24457);
var inst_24439 = inst_24458;
var inst_24440 = inst_24457;
var inst_24441 = inst_24459;
var inst_24442 = (0);
var state_24498__$1 = (function (){var statearr_24532 = state_24498;
(statearr_24532[(12)] = inst_24441);

(statearr_24532[(13)] = inst_24439);

(statearr_24532[(14)] = inst_24440);

(statearr_24532[(15)] = inst_24442);

return statearr_24532;
})();
var statearr_24533_24574 = state_24498__$1;
(statearr_24533_24574[(2)] = null);

(statearr_24533_24574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (10))){
var inst_24441 = (state_24498[(12)]);
var inst_24439 = (state_24498[(13)]);
var inst_24440 = (state_24498[(14)]);
var inst_24442 = (state_24498[(15)]);
var inst_24447 = cljs.core._nth.call(null,inst_24440,inst_24442);
var inst_24448 = cljs.core.async.muxch_STAR_.call(null,inst_24447);
var inst_24449 = cljs.core.async.close_BANG_.call(null,inst_24448);
var inst_24450 = (inst_24442 + (1));
var tmp24528 = inst_24441;
var tmp24529 = inst_24439;
var tmp24530 = inst_24440;
var inst_24439__$1 = tmp24529;
var inst_24440__$1 = tmp24530;
var inst_24441__$1 = tmp24528;
var inst_24442__$1 = inst_24450;
var state_24498__$1 = (function (){var statearr_24534 = state_24498;
(statearr_24534[(12)] = inst_24441__$1);

(statearr_24534[(13)] = inst_24439__$1);

(statearr_24534[(17)] = inst_24449);

(statearr_24534[(14)] = inst_24440__$1);

(statearr_24534[(15)] = inst_24442__$1);

return statearr_24534;
})();
var statearr_24535_24575 = state_24498__$1;
(statearr_24535_24575[(2)] = null);

(statearr_24535_24575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (18))){
var inst_24468 = (state_24498[(2)]);
var state_24498__$1 = state_24498;
var statearr_24536_24576 = state_24498__$1;
(statearr_24536_24576[(2)] = inst_24468);

(statearr_24536_24576[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24499 === (8))){
var inst_24441 = (state_24498[(12)]);
var inst_24442 = (state_24498[(15)]);
var inst_24444 = (inst_24442 < inst_24441);
var inst_24445 = inst_24444;
var state_24498__$1 = state_24498;
if(cljs.core.truth_(inst_24445)){
var statearr_24537_24577 = state_24498__$1;
(statearr_24537_24577[(1)] = (10));

} else {
var statearr_24538_24578 = state_24498__$1;
(statearr_24538_24578[(1)] = (11));

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
});})(c__22651__auto___24550,mults,ensure_mult,p))
;
return ((function (switch__20473__auto__,c__22651__auto___24550,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20474__auto__ = null;
var cljs$core$async$state_machine__20474__auto____0 = (function (){
var statearr_24542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24542[(0)] = cljs$core$async$state_machine__20474__auto__);

(statearr_24542[(1)] = (1));

return statearr_24542;
});
var cljs$core$async$state_machine__20474__auto____1 = (function (state_24498){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_24498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e24543){if((e24543 instanceof Object)){
var ex__20477__auto__ = e24543;
var statearr_24544_24579 = state_24498;
(statearr_24544_24579[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24580 = state_24498;
state_24498 = G__24580;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$state_machine__20474__auto__ = function(state_24498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20474__auto____1.call(this,state_24498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20474__auto____0;
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20474__auto____1;
return cljs$core$async$state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto___24550,mults,ensure_mult,p))
})();
var state__22653__auto__ = (function (){var statearr_24545 = f__22652__auto__.call(null);
(statearr_24545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto___24550);

return statearr_24545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto___24550,mults,ensure_mult,p))
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
var args24581 = [];
var len__19530__auto___24584 = arguments.length;
var i__19531__auto___24585 = (0);
while(true){
if((i__19531__auto___24585 < len__19530__auto___24584)){
args24581.push((arguments[i__19531__auto___24585]));

var G__24586 = (i__19531__auto___24585 + (1));
i__19531__auto___24585 = G__24586;
continue;
} else {
}
break;
}

var G__24583 = args24581.length;
switch (G__24583) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24581.length)].join('')));

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
var args24588 = [];
var len__19530__auto___24591 = arguments.length;
var i__19531__auto___24592 = (0);
while(true){
if((i__19531__auto___24592 < len__19530__auto___24591)){
args24588.push((arguments[i__19531__auto___24592]));

var G__24593 = (i__19531__auto___24592 + (1));
i__19531__auto___24592 = G__24593;
continue;
} else {
}
break;
}

var G__24590 = args24588.length;
switch (G__24590) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24588.length)].join('')));

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
var args24595 = [];
var len__19530__auto___24666 = arguments.length;
var i__19531__auto___24667 = (0);
while(true){
if((i__19531__auto___24667 < len__19530__auto___24666)){
args24595.push((arguments[i__19531__auto___24667]));

var G__24668 = (i__19531__auto___24667 + (1));
i__19531__auto___24667 = G__24668;
continue;
} else {
}
break;
}

var G__24597 = args24595.length;
switch (G__24597) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24595.length)].join('')));

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
var c__22651__auto___24670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto___24670,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto___24670,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24636){
var state_val_24637 = (state_24636[(1)]);
if((state_val_24637 === (7))){
var state_24636__$1 = state_24636;
var statearr_24638_24671 = state_24636__$1;
(statearr_24638_24671[(2)] = null);

(statearr_24638_24671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (1))){
var state_24636__$1 = state_24636;
var statearr_24639_24672 = state_24636__$1;
(statearr_24639_24672[(2)] = null);

(statearr_24639_24672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (4))){
var inst_24600 = (state_24636[(7)]);
var inst_24602 = (inst_24600 < cnt);
var state_24636__$1 = state_24636;
if(cljs.core.truth_(inst_24602)){
var statearr_24640_24673 = state_24636__$1;
(statearr_24640_24673[(1)] = (6));

} else {
var statearr_24641_24674 = state_24636__$1;
(statearr_24641_24674[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (15))){
var inst_24632 = (state_24636[(2)]);
var state_24636__$1 = state_24636;
var statearr_24642_24675 = state_24636__$1;
(statearr_24642_24675[(2)] = inst_24632);

(statearr_24642_24675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (13))){
var inst_24625 = cljs.core.async.close_BANG_.call(null,out);
var state_24636__$1 = state_24636;
var statearr_24643_24676 = state_24636__$1;
(statearr_24643_24676[(2)] = inst_24625);

(statearr_24643_24676[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (6))){
var state_24636__$1 = state_24636;
var statearr_24644_24677 = state_24636__$1;
(statearr_24644_24677[(2)] = null);

(statearr_24644_24677[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (3))){
var inst_24634 = (state_24636[(2)]);
var state_24636__$1 = state_24636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24636__$1,inst_24634);
} else {
if((state_val_24637 === (12))){
var inst_24622 = (state_24636[(8)]);
var inst_24622__$1 = (state_24636[(2)]);
var inst_24623 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24622__$1);
var state_24636__$1 = (function (){var statearr_24645 = state_24636;
(statearr_24645[(8)] = inst_24622__$1);

return statearr_24645;
})();
if(cljs.core.truth_(inst_24623)){
var statearr_24646_24678 = state_24636__$1;
(statearr_24646_24678[(1)] = (13));

} else {
var statearr_24647_24679 = state_24636__$1;
(statearr_24647_24679[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (2))){
var inst_24599 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24600 = (0);
var state_24636__$1 = (function (){var statearr_24648 = state_24636;
(statearr_24648[(7)] = inst_24600);

(statearr_24648[(9)] = inst_24599);

return statearr_24648;
})();
var statearr_24649_24680 = state_24636__$1;
(statearr_24649_24680[(2)] = null);

(statearr_24649_24680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (11))){
var inst_24600 = (state_24636[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24636,(10),Object,null,(9));
var inst_24609 = chs__$1.call(null,inst_24600);
var inst_24610 = done.call(null,inst_24600);
var inst_24611 = cljs.core.async.take_BANG_.call(null,inst_24609,inst_24610);
var state_24636__$1 = state_24636;
var statearr_24650_24681 = state_24636__$1;
(statearr_24650_24681[(2)] = inst_24611);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24636__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (9))){
var inst_24600 = (state_24636[(7)]);
var inst_24613 = (state_24636[(2)]);
var inst_24614 = (inst_24600 + (1));
var inst_24600__$1 = inst_24614;
var state_24636__$1 = (function (){var statearr_24651 = state_24636;
(statearr_24651[(10)] = inst_24613);

(statearr_24651[(7)] = inst_24600__$1);

return statearr_24651;
})();
var statearr_24652_24682 = state_24636__$1;
(statearr_24652_24682[(2)] = null);

(statearr_24652_24682[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (5))){
var inst_24620 = (state_24636[(2)]);
var state_24636__$1 = (function (){var statearr_24653 = state_24636;
(statearr_24653[(11)] = inst_24620);

return statearr_24653;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24636__$1,(12),dchan);
} else {
if((state_val_24637 === (14))){
var inst_24622 = (state_24636[(8)]);
var inst_24627 = cljs.core.apply.call(null,f,inst_24622);
var state_24636__$1 = state_24636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24636__$1,(16),out,inst_24627);
} else {
if((state_val_24637 === (16))){
var inst_24629 = (state_24636[(2)]);
var state_24636__$1 = (function (){var statearr_24654 = state_24636;
(statearr_24654[(12)] = inst_24629);

return statearr_24654;
})();
var statearr_24655_24683 = state_24636__$1;
(statearr_24655_24683[(2)] = null);

(statearr_24655_24683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (10))){
var inst_24604 = (state_24636[(2)]);
var inst_24605 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24636__$1 = (function (){var statearr_24656 = state_24636;
(statearr_24656[(13)] = inst_24604);

return statearr_24656;
})();
var statearr_24657_24684 = state_24636__$1;
(statearr_24657_24684[(2)] = inst_24605);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24636__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (8))){
var inst_24618 = (state_24636[(2)]);
var state_24636__$1 = state_24636;
var statearr_24658_24685 = state_24636__$1;
(statearr_24658_24685[(2)] = inst_24618);

(statearr_24658_24685[(1)] = (5));


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
});})(c__22651__auto___24670,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20473__auto__,c__22651__auto___24670,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20474__auto__ = null;
var cljs$core$async$state_machine__20474__auto____0 = (function (){
var statearr_24662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24662[(0)] = cljs$core$async$state_machine__20474__auto__);

(statearr_24662[(1)] = (1));

return statearr_24662;
});
var cljs$core$async$state_machine__20474__auto____1 = (function (state_24636){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_24636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e24663){if((e24663 instanceof Object)){
var ex__20477__auto__ = e24663;
var statearr_24664_24686 = state_24636;
(statearr_24664_24686[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24687 = state_24636;
state_24636 = G__24687;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$state_machine__20474__auto__ = function(state_24636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20474__auto____1.call(this,state_24636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20474__auto____0;
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20474__auto____1;
return cljs$core$async$state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto___24670,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22653__auto__ = (function (){var statearr_24665 = f__22652__auto__.call(null);
(statearr_24665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto___24670);

return statearr_24665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto___24670,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24689 = [];
var len__19530__auto___24745 = arguments.length;
var i__19531__auto___24746 = (0);
while(true){
if((i__19531__auto___24746 < len__19530__auto___24745)){
args24689.push((arguments[i__19531__auto___24746]));

var G__24747 = (i__19531__auto___24746 + (1));
i__19531__auto___24746 = G__24747;
continue;
} else {
}
break;
}

var G__24691 = args24689.length;
switch (G__24691) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24689.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22651__auto___24749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto___24749,out){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto___24749,out){
return (function (state_24721){
var state_val_24722 = (state_24721[(1)]);
if((state_val_24722 === (7))){
var inst_24701 = (state_24721[(7)]);
var inst_24700 = (state_24721[(8)]);
var inst_24700__$1 = (state_24721[(2)]);
var inst_24701__$1 = cljs.core.nth.call(null,inst_24700__$1,(0),null);
var inst_24702 = cljs.core.nth.call(null,inst_24700__$1,(1),null);
var inst_24703 = (inst_24701__$1 == null);
var state_24721__$1 = (function (){var statearr_24723 = state_24721;
(statearr_24723[(7)] = inst_24701__$1);

(statearr_24723[(9)] = inst_24702);

(statearr_24723[(8)] = inst_24700__$1);

return statearr_24723;
})();
if(cljs.core.truth_(inst_24703)){
var statearr_24724_24750 = state_24721__$1;
(statearr_24724_24750[(1)] = (8));

} else {
var statearr_24725_24751 = state_24721__$1;
(statearr_24725_24751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24722 === (1))){
var inst_24692 = cljs.core.vec.call(null,chs);
var inst_24693 = inst_24692;
var state_24721__$1 = (function (){var statearr_24726 = state_24721;
(statearr_24726[(10)] = inst_24693);

return statearr_24726;
})();
var statearr_24727_24752 = state_24721__$1;
(statearr_24727_24752[(2)] = null);

(statearr_24727_24752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24722 === (4))){
var inst_24693 = (state_24721[(10)]);
var state_24721__$1 = state_24721;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24721__$1,(7),inst_24693);
} else {
if((state_val_24722 === (6))){
var inst_24717 = (state_24721[(2)]);
var state_24721__$1 = state_24721;
var statearr_24728_24753 = state_24721__$1;
(statearr_24728_24753[(2)] = inst_24717);

(statearr_24728_24753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24722 === (3))){
var inst_24719 = (state_24721[(2)]);
var state_24721__$1 = state_24721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24721__$1,inst_24719);
} else {
if((state_val_24722 === (2))){
var inst_24693 = (state_24721[(10)]);
var inst_24695 = cljs.core.count.call(null,inst_24693);
var inst_24696 = (inst_24695 > (0));
var state_24721__$1 = state_24721;
if(cljs.core.truth_(inst_24696)){
var statearr_24730_24754 = state_24721__$1;
(statearr_24730_24754[(1)] = (4));

} else {
var statearr_24731_24755 = state_24721__$1;
(statearr_24731_24755[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24722 === (11))){
var inst_24693 = (state_24721[(10)]);
var inst_24710 = (state_24721[(2)]);
var tmp24729 = inst_24693;
var inst_24693__$1 = tmp24729;
var state_24721__$1 = (function (){var statearr_24732 = state_24721;
(statearr_24732[(10)] = inst_24693__$1);

(statearr_24732[(11)] = inst_24710);

return statearr_24732;
})();
var statearr_24733_24756 = state_24721__$1;
(statearr_24733_24756[(2)] = null);

(statearr_24733_24756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24722 === (9))){
var inst_24701 = (state_24721[(7)]);
var state_24721__$1 = state_24721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24721__$1,(11),out,inst_24701);
} else {
if((state_val_24722 === (5))){
var inst_24715 = cljs.core.async.close_BANG_.call(null,out);
var state_24721__$1 = state_24721;
var statearr_24734_24757 = state_24721__$1;
(statearr_24734_24757[(2)] = inst_24715);

(statearr_24734_24757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24722 === (10))){
var inst_24713 = (state_24721[(2)]);
var state_24721__$1 = state_24721;
var statearr_24735_24758 = state_24721__$1;
(statearr_24735_24758[(2)] = inst_24713);

(statearr_24735_24758[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24722 === (8))){
var inst_24693 = (state_24721[(10)]);
var inst_24701 = (state_24721[(7)]);
var inst_24702 = (state_24721[(9)]);
var inst_24700 = (state_24721[(8)]);
var inst_24705 = (function (){var cs = inst_24693;
var vec__24698 = inst_24700;
var v = inst_24701;
var c = inst_24702;
return ((function (cs,vec__24698,v,c,inst_24693,inst_24701,inst_24702,inst_24700,state_val_24722,c__22651__auto___24749,out){
return (function (p1__24688_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24688_SHARP_);
});
;})(cs,vec__24698,v,c,inst_24693,inst_24701,inst_24702,inst_24700,state_val_24722,c__22651__auto___24749,out))
})();
var inst_24706 = cljs.core.filterv.call(null,inst_24705,inst_24693);
var inst_24693__$1 = inst_24706;
var state_24721__$1 = (function (){var statearr_24736 = state_24721;
(statearr_24736[(10)] = inst_24693__$1);

return statearr_24736;
})();
var statearr_24737_24759 = state_24721__$1;
(statearr_24737_24759[(2)] = null);

(statearr_24737_24759[(1)] = (2));


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
});})(c__22651__auto___24749,out))
;
return ((function (switch__20473__auto__,c__22651__auto___24749,out){
return (function() {
var cljs$core$async$state_machine__20474__auto__ = null;
var cljs$core$async$state_machine__20474__auto____0 = (function (){
var statearr_24741 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24741[(0)] = cljs$core$async$state_machine__20474__auto__);

(statearr_24741[(1)] = (1));

return statearr_24741;
});
var cljs$core$async$state_machine__20474__auto____1 = (function (state_24721){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_24721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e24742){if((e24742 instanceof Object)){
var ex__20477__auto__ = e24742;
var statearr_24743_24760 = state_24721;
(statearr_24743_24760[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24761 = state_24721;
state_24721 = G__24761;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$state_machine__20474__auto__ = function(state_24721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20474__auto____1.call(this,state_24721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20474__auto____0;
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20474__auto____1;
return cljs$core$async$state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto___24749,out))
})();
var state__22653__auto__ = (function (){var statearr_24744 = f__22652__auto__.call(null);
(statearr_24744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto___24749);

return statearr_24744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto___24749,out))
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
var args24762 = [];
var len__19530__auto___24811 = arguments.length;
var i__19531__auto___24812 = (0);
while(true){
if((i__19531__auto___24812 < len__19530__auto___24811)){
args24762.push((arguments[i__19531__auto___24812]));

var G__24813 = (i__19531__auto___24812 + (1));
i__19531__auto___24812 = G__24813;
continue;
} else {
}
break;
}

var G__24764 = args24762.length;
switch (G__24764) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24762.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22651__auto___24815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto___24815,out){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto___24815,out){
return (function (state_24788){
var state_val_24789 = (state_24788[(1)]);
if((state_val_24789 === (7))){
var inst_24770 = (state_24788[(7)]);
var inst_24770__$1 = (state_24788[(2)]);
var inst_24771 = (inst_24770__$1 == null);
var inst_24772 = cljs.core.not.call(null,inst_24771);
var state_24788__$1 = (function (){var statearr_24790 = state_24788;
(statearr_24790[(7)] = inst_24770__$1);

return statearr_24790;
})();
if(inst_24772){
var statearr_24791_24816 = state_24788__$1;
(statearr_24791_24816[(1)] = (8));

} else {
var statearr_24792_24817 = state_24788__$1;
(statearr_24792_24817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (1))){
var inst_24765 = (0);
var state_24788__$1 = (function (){var statearr_24793 = state_24788;
(statearr_24793[(8)] = inst_24765);

return statearr_24793;
})();
var statearr_24794_24818 = state_24788__$1;
(statearr_24794_24818[(2)] = null);

(statearr_24794_24818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (4))){
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24788__$1,(7),ch);
} else {
if((state_val_24789 === (6))){
var inst_24783 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24795_24819 = state_24788__$1;
(statearr_24795_24819[(2)] = inst_24783);

(statearr_24795_24819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (3))){
var inst_24785 = (state_24788[(2)]);
var inst_24786 = cljs.core.async.close_BANG_.call(null,out);
var state_24788__$1 = (function (){var statearr_24796 = state_24788;
(statearr_24796[(9)] = inst_24785);

return statearr_24796;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24788__$1,inst_24786);
} else {
if((state_val_24789 === (2))){
var inst_24765 = (state_24788[(8)]);
var inst_24767 = (inst_24765 < n);
var state_24788__$1 = state_24788;
if(cljs.core.truth_(inst_24767)){
var statearr_24797_24820 = state_24788__$1;
(statearr_24797_24820[(1)] = (4));

} else {
var statearr_24798_24821 = state_24788__$1;
(statearr_24798_24821[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (11))){
var inst_24765 = (state_24788[(8)]);
var inst_24775 = (state_24788[(2)]);
var inst_24776 = (inst_24765 + (1));
var inst_24765__$1 = inst_24776;
var state_24788__$1 = (function (){var statearr_24799 = state_24788;
(statearr_24799[(10)] = inst_24775);

(statearr_24799[(8)] = inst_24765__$1);

return statearr_24799;
})();
var statearr_24800_24822 = state_24788__$1;
(statearr_24800_24822[(2)] = null);

(statearr_24800_24822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (9))){
var state_24788__$1 = state_24788;
var statearr_24801_24823 = state_24788__$1;
(statearr_24801_24823[(2)] = null);

(statearr_24801_24823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (5))){
var state_24788__$1 = state_24788;
var statearr_24802_24824 = state_24788__$1;
(statearr_24802_24824[(2)] = null);

(statearr_24802_24824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (10))){
var inst_24780 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24803_24825 = state_24788__$1;
(statearr_24803_24825[(2)] = inst_24780);

(statearr_24803_24825[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (8))){
var inst_24770 = (state_24788[(7)]);
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24788__$1,(11),out,inst_24770);
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
});})(c__22651__auto___24815,out))
;
return ((function (switch__20473__auto__,c__22651__auto___24815,out){
return (function() {
var cljs$core$async$state_machine__20474__auto__ = null;
var cljs$core$async$state_machine__20474__auto____0 = (function (){
var statearr_24807 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24807[(0)] = cljs$core$async$state_machine__20474__auto__);

(statearr_24807[(1)] = (1));

return statearr_24807;
});
var cljs$core$async$state_machine__20474__auto____1 = (function (state_24788){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_24788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e24808){if((e24808 instanceof Object)){
var ex__20477__auto__ = e24808;
var statearr_24809_24826 = state_24788;
(statearr_24809_24826[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24827 = state_24788;
state_24788 = G__24827;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$state_machine__20474__auto__ = function(state_24788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20474__auto____1.call(this,state_24788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20474__auto____0;
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20474__auto____1;
return cljs$core$async$state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto___24815,out))
})();
var state__22653__auto__ = (function (){var statearr_24810 = f__22652__auto__.call(null);
(statearr_24810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto___24815);

return statearr_24810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto___24815,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24835 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24835 = (function (map_LT_,f,ch,meta24836){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24836 = meta24836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24837,meta24836__$1){
var self__ = this;
var _24837__$1 = this;
return (new cljs.core.async.t_cljs$core$async24835(self__.map_LT_,self__.f,self__.ch,meta24836__$1));
});

cljs.core.async.t_cljs$core$async24835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24837){
var self__ = this;
var _24837__$1 = this;
return self__.meta24836;
});

cljs.core.async.t_cljs$core$async24835.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24835.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24835.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24835.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24835.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24838 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24838 = (function (map_LT_,f,ch,meta24836,_,fn1,meta24839){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24836 = meta24836;
this._ = _;
this.fn1 = fn1;
this.meta24839 = meta24839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24840,meta24839__$1){
var self__ = this;
var _24840__$1 = this;
return (new cljs.core.async.t_cljs$core$async24838(self__.map_LT_,self__.f,self__.ch,self__.meta24836,self__._,self__.fn1,meta24839__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24838.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24840){
var self__ = this;
var _24840__$1 = this;
return self__.meta24839;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24838.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24838.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24828_SHARP_){
return f1.call(null,(((p1__24828_SHARP_ == null))?null:self__.f.call(null,p1__24828_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24838.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24836","meta24836",561157698,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24835","cljs.core.async/t_cljs$core$async24835",-1604582804,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24839","meta24839",-2035405985,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24838.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24838";

cljs.core.async.t_cljs$core$async24838.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async24838");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24838 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24838(map_LT___$1,f__$1,ch__$1,meta24836__$1,___$2,fn1__$1,meta24839){
return (new cljs.core.async.t_cljs$core$async24838(map_LT___$1,f__$1,ch__$1,meta24836__$1,___$2,fn1__$1,meta24839));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24838(self__.map_LT_,self__.f,self__.ch,self__.meta24836,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18448__auto__ = ret;
if(cljs.core.truth_(and__18448__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18448__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24835.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24835.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24836","meta24836",561157698,null)], null);
});

cljs.core.async.t_cljs$core$async24835.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24835";

cljs.core.async.t_cljs$core$async24835.cljs$lang$ctorPrWriter = (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async24835");
});

cljs.core.async.__GT_t_cljs$core$async24835 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24835(map_LT___$1,f__$1,ch__$1,meta24836){
return (new cljs.core.async.t_cljs$core$async24835(map_LT___$1,f__$1,ch__$1,meta24836));
});

}

return (new cljs.core.async.t_cljs$core$async24835(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24844 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24844 = (function (map_GT_,f,ch,meta24845){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24845 = meta24845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24846,meta24845__$1){
var self__ = this;
var _24846__$1 = this;
return (new cljs.core.async.t_cljs$core$async24844(self__.map_GT_,self__.f,self__.ch,meta24845__$1));
});

cljs.core.async.t_cljs$core$async24844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24846){
var self__ = this;
var _24846__$1 = this;
return self__.meta24845;
});

cljs.core.async.t_cljs$core$async24844.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24844.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24844.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24844.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24844.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24844.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24845","meta24845",548640399,null)], null);
});

cljs.core.async.t_cljs$core$async24844.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24844";

cljs.core.async.t_cljs$core$async24844.cljs$lang$ctorPrWriter = (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async24844");
});

cljs.core.async.__GT_t_cljs$core$async24844 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24844(map_GT___$1,f__$1,ch__$1,meta24845){
return (new cljs.core.async.t_cljs$core$async24844(map_GT___$1,f__$1,ch__$1,meta24845));
});

}

return (new cljs.core.async.t_cljs$core$async24844(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24850 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24850 = (function (filter_GT_,p,ch,meta24851){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24851 = meta24851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24852,meta24851__$1){
var self__ = this;
var _24852__$1 = this;
return (new cljs.core.async.t_cljs$core$async24850(self__.filter_GT_,self__.p,self__.ch,meta24851__$1));
});

cljs.core.async.t_cljs$core$async24850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24852){
var self__ = this;
var _24852__$1 = this;
return self__.meta24851;
});

cljs.core.async.t_cljs$core$async24850.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24850.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24850.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24850.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24850.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24850.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24850.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24851","meta24851",-1043550741,null)], null);
});

cljs.core.async.t_cljs$core$async24850.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24850";

cljs.core.async.t_cljs$core$async24850.cljs$lang$ctorPrWriter = (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async24850");
});

cljs.core.async.__GT_t_cljs$core$async24850 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24850(filter_GT___$1,p__$1,ch__$1,meta24851){
return (new cljs.core.async.t_cljs$core$async24850(filter_GT___$1,p__$1,ch__$1,meta24851));
});

}

return (new cljs.core.async.t_cljs$core$async24850(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24853 = [];
var len__19530__auto___24897 = arguments.length;
var i__19531__auto___24898 = (0);
while(true){
if((i__19531__auto___24898 < len__19530__auto___24897)){
args24853.push((arguments[i__19531__auto___24898]));

var G__24899 = (i__19531__auto___24898 + (1));
i__19531__auto___24898 = G__24899;
continue;
} else {
}
break;
}

var G__24855 = args24853.length;
switch (G__24855) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24853.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22651__auto___24901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto___24901,out){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto___24901,out){
return (function (state_24876){
var state_val_24877 = (state_24876[(1)]);
if((state_val_24877 === (7))){
var inst_24872 = (state_24876[(2)]);
var state_24876__$1 = state_24876;
var statearr_24878_24902 = state_24876__$1;
(statearr_24878_24902[(2)] = inst_24872);

(statearr_24878_24902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (1))){
var state_24876__$1 = state_24876;
var statearr_24879_24903 = state_24876__$1;
(statearr_24879_24903[(2)] = null);

(statearr_24879_24903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (4))){
var inst_24858 = (state_24876[(7)]);
var inst_24858__$1 = (state_24876[(2)]);
var inst_24859 = (inst_24858__$1 == null);
var state_24876__$1 = (function (){var statearr_24880 = state_24876;
(statearr_24880[(7)] = inst_24858__$1);

return statearr_24880;
})();
if(cljs.core.truth_(inst_24859)){
var statearr_24881_24904 = state_24876__$1;
(statearr_24881_24904[(1)] = (5));

} else {
var statearr_24882_24905 = state_24876__$1;
(statearr_24882_24905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (6))){
var inst_24858 = (state_24876[(7)]);
var inst_24863 = p.call(null,inst_24858);
var state_24876__$1 = state_24876;
if(cljs.core.truth_(inst_24863)){
var statearr_24883_24906 = state_24876__$1;
(statearr_24883_24906[(1)] = (8));

} else {
var statearr_24884_24907 = state_24876__$1;
(statearr_24884_24907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (3))){
var inst_24874 = (state_24876[(2)]);
var state_24876__$1 = state_24876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24876__$1,inst_24874);
} else {
if((state_val_24877 === (2))){
var state_24876__$1 = state_24876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24876__$1,(4),ch);
} else {
if((state_val_24877 === (11))){
var inst_24866 = (state_24876[(2)]);
var state_24876__$1 = state_24876;
var statearr_24885_24908 = state_24876__$1;
(statearr_24885_24908[(2)] = inst_24866);

(statearr_24885_24908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (9))){
var state_24876__$1 = state_24876;
var statearr_24886_24909 = state_24876__$1;
(statearr_24886_24909[(2)] = null);

(statearr_24886_24909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (5))){
var inst_24861 = cljs.core.async.close_BANG_.call(null,out);
var state_24876__$1 = state_24876;
var statearr_24887_24910 = state_24876__$1;
(statearr_24887_24910[(2)] = inst_24861);

(statearr_24887_24910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (10))){
var inst_24869 = (state_24876[(2)]);
var state_24876__$1 = (function (){var statearr_24888 = state_24876;
(statearr_24888[(8)] = inst_24869);

return statearr_24888;
})();
var statearr_24889_24911 = state_24876__$1;
(statearr_24889_24911[(2)] = null);

(statearr_24889_24911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (8))){
var inst_24858 = (state_24876[(7)]);
var state_24876__$1 = state_24876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24876__$1,(11),out,inst_24858);
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
});})(c__22651__auto___24901,out))
;
return ((function (switch__20473__auto__,c__22651__auto___24901,out){
return (function() {
var cljs$core$async$state_machine__20474__auto__ = null;
var cljs$core$async$state_machine__20474__auto____0 = (function (){
var statearr_24893 = [null,null,null,null,null,null,null,null,null];
(statearr_24893[(0)] = cljs$core$async$state_machine__20474__auto__);

(statearr_24893[(1)] = (1));

return statearr_24893;
});
var cljs$core$async$state_machine__20474__auto____1 = (function (state_24876){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_24876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e24894){if((e24894 instanceof Object)){
var ex__20477__auto__ = e24894;
var statearr_24895_24912 = state_24876;
(statearr_24895_24912[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24913 = state_24876;
state_24876 = G__24913;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$state_machine__20474__auto__ = function(state_24876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20474__auto____1.call(this,state_24876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20474__auto____0;
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20474__auto____1;
return cljs$core$async$state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto___24901,out))
})();
var state__22653__auto__ = (function (){var statearr_24896 = f__22652__auto__.call(null);
(statearr_24896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto___24901);

return statearr_24896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto___24901,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24914 = [];
var len__19530__auto___24917 = arguments.length;
var i__19531__auto___24918 = (0);
while(true){
if((i__19531__auto___24918 < len__19530__auto___24917)){
args24914.push((arguments[i__19531__auto___24918]));

var G__24919 = (i__19531__auto___24918 + (1));
i__19531__auto___24918 = G__24919;
continue;
} else {
}
break;
}

var G__24916 = args24914.length;
switch (G__24916) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24914.length)].join('')));

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
var c__22651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto__){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto__){
return (function (state_25086){
var state_val_25087 = (state_25086[(1)]);
if((state_val_25087 === (7))){
var inst_25082 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
var statearr_25088_25129 = state_25086__$1;
(statearr_25088_25129[(2)] = inst_25082);

(statearr_25088_25129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (20))){
var inst_25052 = (state_25086[(7)]);
var inst_25063 = (state_25086[(2)]);
var inst_25064 = cljs.core.next.call(null,inst_25052);
var inst_25038 = inst_25064;
var inst_25039 = null;
var inst_25040 = (0);
var inst_25041 = (0);
var state_25086__$1 = (function (){var statearr_25089 = state_25086;
(statearr_25089[(8)] = inst_25040);

(statearr_25089[(9)] = inst_25063);

(statearr_25089[(10)] = inst_25041);

(statearr_25089[(11)] = inst_25039);

(statearr_25089[(12)] = inst_25038);

return statearr_25089;
})();
var statearr_25090_25130 = state_25086__$1;
(statearr_25090_25130[(2)] = null);

(statearr_25090_25130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (1))){
var state_25086__$1 = state_25086;
var statearr_25091_25131 = state_25086__$1;
(statearr_25091_25131[(2)] = null);

(statearr_25091_25131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (4))){
var inst_25027 = (state_25086[(13)]);
var inst_25027__$1 = (state_25086[(2)]);
var inst_25028 = (inst_25027__$1 == null);
var state_25086__$1 = (function (){var statearr_25092 = state_25086;
(statearr_25092[(13)] = inst_25027__$1);

return statearr_25092;
})();
if(cljs.core.truth_(inst_25028)){
var statearr_25093_25132 = state_25086__$1;
(statearr_25093_25132[(1)] = (5));

} else {
var statearr_25094_25133 = state_25086__$1;
(statearr_25094_25133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (15))){
var state_25086__$1 = state_25086;
var statearr_25098_25134 = state_25086__$1;
(statearr_25098_25134[(2)] = null);

(statearr_25098_25134[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (21))){
var state_25086__$1 = state_25086;
var statearr_25099_25135 = state_25086__$1;
(statearr_25099_25135[(2)] = null);

(statearr_25099_25135[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (13))){
var inst_25040 = (state_25086[(8)]);
var inst_25041 = (state_25086[(10)]);
var inst_25039 = (state_25086[(11)]);
var inst_25038 = (state_25086[(12)]);
var inst_25048 = (state_25086[(2)]);
var inst_25049 = (inst_25041 + (1));
var tmp25095 = inst_25040;
var tmp25096 = inst_25039;
var tmp25097 = inst_25038;
var inst_25038__$1 = tmp25097;
var inst_25039__$1 = tmp25096;
var inst_25040__$1 = tmp25095;
var inst_25041__$1 = inst_25049;
var state_25086__$1 = (function (){var statearr_25100 = state_25086;
(statearr_25100[(14)] = inst_25048);

(statearr_25100[(8)] = inst_25040__$1);

(statearr_25100[(10)] = inst_25041__$1);

(statearr_25100[(11)] = inst_25039__$1);

(statearr_25100[(12)] = inst_25038__$1);

return statearr_25100;
})();
var statearr_25101_25136 = state_25086__$1;
(statearr_25101_25136[(2)] = null);

(statearr_25101_25136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (22))){
var state_25086__$1 = state_25086;
var statearr_25102_25137 = state_25086__$1;
(statearr_25102_25137[(2)] = null);

(statearr_25102_25137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (6))){
var inst_25027 = (state_25086[(13)]);
var inst_25036 = f.call(null,inst_25027);
var inst_25037 = cljs.core.seq.call(null,inst_25036);
var inst_25038 = inst_25037;
var inst_25039 = null;
var inst_25040 = (0);
var inst_25041 = (0);
var state_25086__$1 = (function (){var statearr_25103 = state_25086;
(statearr_25103[(8)] = inst_25040);

(statearr_25103[(10)] = inst_25041);

(statearr_25103[(11)] = inst_25039);

(statearr_25103[(12)] = inst_25038);

return statearr_25103;
})();
var statearr_25104_25138 = state_25086__$1;
(statearr_25104_25138[(2)] = null);

(statearr_25104_25138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (17))){
var inst_25052 = (state_25086[(7)]);
var inst_25056 = cljs.core.chunk_first.call(null,inst_25052);
var inst_25057 = cljs.core.chunk_rest.call(null,inst_25052);
var inst_25058 = cljs.core.count.call(null,inst_25056);
var inst_25038 = inst_25057;
var inst_25039 = inst_25056;
var inst_25040 = inst_25058;
var inst_25041 = (0);
var state_25086__$1 = (function (){var statearr_25105 = state_25086;
(statearr_25105[(8)] = inst_25040);

(statearr_25105[(10)] = inst_25041);

(statearr_25105[(11)] = inst_25039);

(statearr_25105[(12)] = inst_25038);

return statearr_25105;
})();
var statearr_25106_25139 = state_25086__$1;
(statearr_25106_25139[(2)] = null);

(statearr_25106_25139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (3))){
var inst_25084 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25086__$1,inst_25084);
} else {
if((state_val_25087 === (12))){
var inst_25072 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
var statearr_25107_25140 = state_25086__$1;
(statearr_25107_25140[(2)] = inst_25072);

(statearr_25107_25140[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (2))){
var state_25086__$1 = state_25086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25086__$1,(4),in$);
} else {
if((state_val_25087 === (23))){
var inst_25080 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
var statearr_25108_25141 = state_25086__$1;
(statearr_25108_25141[(2)] = inst_25080);

(statearr_25108_25141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (19))){
var inst_25067 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
var statearr_25109_25142 = state_25086__$1;
(statearr_25109_25142[(2)] = inst_25067);

(statearr_25109_25142[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (11))){
var inst_25052 = (state_25086[(7)]);
var inst_25038 = (state_25086[(12)]);
var inst_25052__$1 = cljs.core.seq.call(null,inst_25038);
var state_25086__$1 = (function (){var statearr_25110 = state_25086;
(statearr_25110[(7)] = inst_25052__$1);

return statearr_25110;
})();
if(inst_25052__$1){
var statearr_25111_25143 = state_25086__$1;
(statearr_25111_25143[(1)] = (14));

} else {
var statearr_25112_25144 = state_25086__$1;
(statearr_25112_25144[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (9))){
var inst_25074 = (state_25086[(2)]);
var inst_25075 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25086__$1 = (function (){var statearr_25113 = state_25086;
(statearr_25113[(15)] = inst_25074);

return statearr_25113;
})();
if(cljs.core.truth_(inst_25075)){
var statearr_25114_25145 = state_25086__$1;
(statearr_25114_25145[(1)] = (21));

} else {
var statearr_25115_25146 = state_25086__$1;
(statearr_25115_25146[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (5))){
var inst_25030 = cljs.core.async.close_BANG_.call(null,out);
var state_25086__$1 = state_25086;
var statearr_25116_25147 = state_25086__$1;
(statearr_25116_25147[(2)] = inst_25030);

(statearr_25116_25147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (14))){
var inst_25052 = (state_25086[(7)]);
var inst_25054 = cljs.core.chunked_seq_QMARK_.call(null,inst_25052);
var state_25086__$1 = state_25086;
if(inst_25054){
var statearr_25117_25148 = state_25086__$1;
(statearr_25117_25148[(1)] = (17));

} else {
var statearr_25118_25149 = state_25086__$1;
(statearr_25118_25149[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (16))){
var inst_25070 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
var statearr_25119_25150 = state_25086__$1;
(statearr_25119_25150[(2)] = inst_25070);

(statearr_25119_25150[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (10))){
var inst_25041 = (state_25086[(10)]);
var inst_25039 = (state_25086[(11)]);
var inst_25046 = cljs.core._nth.call(null,inst_25039,inst_25041);
var state_25086__$1 = state_25086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25086__$1,(13),out,inst_25046);
} else {
if((state_val_25087 === (18))){
var inst_25052 = (state_25086[(7)]);
var inst_25061 = cljs.core.first.call(null,inst_25052);
var state_25086__$1 = state_25086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25086__$1,(20),out,inst_25061);
} else {
if((state_val_25087 === (8))){
var inst_25040 = (state_25086[(8)]);
var inst_25041 = (state_25086[(10)]);
var inst_25043 = (inst_25041 < inst_25040);
var inst_25044 = inst_25043;
var state_25086__$1 = state_25086;
if(cljs.core.truth_(inst_25044)){
var statearr_25120_25151 = state_25086__$1;
(statearr_25120_25151[(1)] = (10));

} else {
var statearr_25121_25152 = state_25086__$1;
(statearr_25121_25152[(1)] = (11));

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
});})(c__22651__auto__))
;
return ((function (switch__20473__auto__,c__22651__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20474__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20474__auto____0 = (function (){
var statearr_25125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25125[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20474__auto__);

(statearr_25125[(1)] = (1));

return statearr_25125;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20474__auto____1 = (function (state_25086){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_25086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e25126){if((e25126 instanceof Object)){
var ex__20477__auto__ = e25126;
var statearr_25127_25153 = state_25086;
(statearr_25127_25153[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25154 = state_25086;
state_25086 = G__25154;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20474__auto__ = function(state_25086){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20474__auto____1.call(this,state_25086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20474__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20474__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto__))
})();
var state__22653__auto__ = (function (){var statearr_25128 = f__22652__auto__.call(null);
(statearr_25128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto__);

return statearr_25128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto__))
);

return c__22651__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25155 = [];
var len__19530__auto___25158 = arguments.length;
var i__19531__auto___25159 = (0);
while(true){
if((i__19531__auto___25159 < len__19530__auto___25158)){
args25155.push((arguments[i__19531__auto___25159]));

var G__25160 = (i__19531__auto___25159 + (1));
i__19531__auto___25159 = G__25160;
continue;
} else {
}
break;
}

var G__25157 = args25155.length;
switch (G__25157) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25155.length)].join('')));

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
var args25162 = [];
var len__19530__auto___25165 = arguments.length;
var i__19531__auto___25166 = (0);
while(true){
if((i__19531__auto___25166 < len__19530__auto___25165)){
args25162.push((arguments[i__19531__auto___25166]));

var G__25167 = (i__19531__auto___25166 + (1));
i__19531__auto___25166 = G__25167;
continue;
} else {
}
break;
}

var G__25164 = args25162.length;
switch (G__25164) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25162.length)].join('')));

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
var args25169 = [];
var len__19530__auto___25220 = arguments.length;
var i__19531__auto___25221 = (0);
while(true){
if((i__19531__auto___25221 < len__19530__auto___25220)){
args25169.push((arguments[i__19531__auto___25221]));

var G__25222 = (i__19531__auto___25221 + (1));
i__19531__auto___25221 = G__25222;
continue;
} else {
}
break;
}

var G__25171 = args25169.length;
switch (G__25171) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25169.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22651__auto___25224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto___25224,out){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto___25224,out){
return (function (state_25195){
var state_val_25196 = (state_25195[(1)]);
if((state_val_25196 === (7))){
var inst_25190 = (state_25195[(2)]);
var state_25195__$1 = state_25195;
var statearr_25197_25225 = state_25195__$1;
(statearr_25197_25225[(2)] = inst_25190);

(statearr_25197_25225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25196 === (1))){
var inst_25172 = null;
var state_25195__$1 = (function (){var statearr_25198 = state_25195;
(statearr_25198[(7)] = inst_25172);

return statearr_25198;
})();
var statearr_25199_25226 = state_25195__$1;
(statearr_25199_25226[(2)] = null);

(statearr_25199_25226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25196 === (4))){
var inst_25175 = (state_25195[(8)]);
var inst_25175__$1 = (state_25195[(2)]);
var inst_25176 = (inst_25175__$1 == null);
var inst_25177 = cljs.core.not.call(null,inst_25176);
var state_25195__$1 = (function (){var statearr_25200 = state_25195;
(statearr_25200[(8)] = inst_25175__$1);

return statearr_25200;
})();
if(inst_25177){
var statearr_25201_25227 = state_25195__$1;
(statearr_25201_25227[(1)] = (5));

} else {
var statearr_25202_25228 = state_25195__$1;
(statearr_25202_25228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25196 === (6))){
var state_25195__$1 = state_25195;
var statearr_25203_25229 = state_25195__$1;
(statearr_25203_25229[(2)] = null);

(statearr_25203_25229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25196 === (3))){
var inst_25192 = (state_25195[(2)]);
var inst_25193 = cljs.core.async.close_BANG_.call(null,out);
var state_25195__$1 = (function (){var statearr_25204 = state_25195;
(statearr_25204[(9)] = inst_25192);

return statearr_25204;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25195__$1,inst_25193);
} else {
if((state_val_25196 === (2))){
var state_25195__$1 = state_25195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25195__$1,(4),ch);
} else {
if((state_val_25196 === (11))){
var inst_25175 = (state_25195[(8)]);
var inst_25184 = (state_25195[(2)]);
var inst_25172 = inst_25175;
var state_25195__$1 = (function (){var statearr_25205 = state_25195;
(statearr_25205[(10)] = inst_25184);

(statearr_25205[(7)] = inst_25172);

return statearr_25205;
})();
var statearr_25206_25230 = state_25195__$1;
(statearr_25206_25230[(2)] = null);

(statearr_25206_25230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25196 === (9))){
var inst_25175 = (state_25195[(8)]);
var state_25195__$1 = state_25195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25195__$1,(11),out,inst_25175);
} else {
if((state_val_25196 === (5))){
var inst_25175 = (state_25195[(8)]);
var inst_25172 = (state_25195[(7)]);
var inst_25179 = cljs.core._EQ_.call(null,inst_25175,inst_25172);
var state_25195__$1 = state_25195;
if(inst_25179){
var statearr_25208_25231 = state_25195__$1;
(statearr_25208_25231[(1)] = (8));

} else {
var statearr_25209_25232 = state_25195__$1;
(statearr_25209_25232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25196 === (10))){
var inst_25187 = (state_25195[(2)]);
var state_25195__$1 = state_25195;
var statearr_25210_25233 = state_25195__$1;
(statearr_25210_25233[(2)] = inst_25187);

(statearr_25210_25233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25196 === (8))){
var inst_25172 = (state_25195[(7)]);
var tmp25207 = inst_25172;
var inst_25172__$1 = tmp25207;
var state_25195__$1 = (function (){var statearr_25211 = state_25195;
(statearr_25211[(7)] = inst_25172__$1);

return statearr_25211;
})();
var statearr_25212_25234 = state_25195__$1;
(statearr_25212_25234[(2)] = null);

(statearr_25212_25234[(1)] = (2));


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
});})(c__22651__auto___25224,out))
;
return ((function (switch__20473__auto__,c__22651__auto___25224,out){
return (function() {
var cljs$core$async$state_machine__20474__auto__ = null;
var cljs$core$async$state_machine__20474__auto____0 = (function (){
var statearr_25216 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25216[(0)] = cljs$core$async$state_machine__20474__auto__);

(statearr_25216[(1)] = (1));

return statearr_25216;
});
var cljs$core$async$state_machine__20474__auto____1 = (function (state_25195){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_25195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e25217){if((e25217 instanceof Object)){
var ex__20477__auto__ = e25217;
var statearr_25218_25235 = state_25195;
(statearr_25218_25235[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25236 = state_25195;
state_25195 = G__25236;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$state_machine__20474__auto__ = function(state_25195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20474__auto____1.call(this,state_25195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20474__auto____0;
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20474__auto____1;
return cljs$core$async$state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto___25224,out))
})();
var state__22653__auto__ = (function (){var statearr_25219 = f__22652__auto__.call(null);
(statearr_25219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto___25224);

return statearr_25219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto___25224,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25237 = [];
var len__19530__auto___25307 = arguments.length;
var i__19531__auto___25308 = (0);
while(true){
if((i__19531__auto___25308 < len__19530__auto___25307)){
args25237.push((arguments[i__19531__auto___25308]));

var G__25309 = (i__19531__auto___25308 + (1));
i__19531__auto___25308 = G__25309;
continue;
} else {
}
break;
}

var G__25239 = args25237.length;
switch (G__25239) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25237.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22651__auto___25311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto___25311,out){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto___25311,out){
return (function (state_25277){
var state_val_25278 = (state_25277[(1)]);
if((state_val_25278 === (7))){
var inst_25273 = (state_25277[(2)]);
var state_25277__$1 = state_25277;
var statearr_25279_25312 = state_25277__$1;
(statearr_25279_25312[(2)] = inst_25273);

(statearr_25279_25312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (1))){
var inst_25240 = (new Array(n));
var inst_25241 = inst_25240;
var inst_25242 = (0);
var state_25277__$1 = (function (){var statearr_25280 = state_25277;
(statearr_25280[(7)] = inst_25242);

(statearr_25280[(8)] = inst_25241);

return statearr_25280;
})();
var statearr_25281_25313 = state_25277__$1;
(statearr_25281_25313[(2)] = null);

(statearr_25281_25313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (4))){
var inst_25245 = (state_25277[(9)]);
var inst_25245__$1 = (state_25277[(2)]);
var inst_25246 = (inst_25245__$1 == null);
var inst_25247 = cljs.core.not.call(null,inst_25246);
var state_25277__$1 = (function (){var statearr_25282 = state_25277;
(statearr_25282[(9)] = inst_25245__$1);

return statearr_25282;
})();
if(inst_25247){
var statearr_25283_25314 = state_25277__$1;
(statearr_25283_25314[(1)] = (5));

} else {
var statearr_25284_25315 = state_25277__$1;
(statearr_25284_25315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (15))){
var inst_25267 = (state_25277[(2)]);
var state_25277__$1 = state_25277;
var statearr_25285_25316 = state_25277__$1;
(statearr_25285_25316[(2)] = inst_25267);

(statearr_25285_25316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (13))){
var state_25277__$1 = state_25277;
var statearr_25286_25317 = state_25277__$1;
(statearr_25286_25317[(2)] = null);

(statearr_25286_25317[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (6))){
var inst_25242 = (state_25277[(7)]);
var inst_25263 = (inst_25242 > (0));
var state_25277__$1 = state_25277;
if(cljs.core.truth_(inst_25263)){
var statearr_25287_25318 = state_25277__$1;
(statearr_25287_25318[(1)] = (12));

} else {
var statearr_25288_25319 = state_25277__$1;
(statearr_25288_25319[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (3))){
var inst_25275 = (state_25277[(2)]);
var state_25277__$1 = state_25277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25277__$1,inst_25275);
} else {
if((state_val_25278 === (12))){
var inst_25241 = (state_25277[(8)]);
var inst_25265 = cljs.core.vec.call(null,inst_25241);
var state_25277__$1 = state_25277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25277__$1,(15),out,inst_25265);
} else {
if((state_val_25278 === (2))){
var state_25277__$1 = state_25277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25277__$1,(4),ch);
} else {
if((state_val_25278 === (11))){
var inst_25257 = (state_25277[(2)]);
var inst_25258 = (new Array(n));
var inst_25241 = inst_25258;
var inst_25242 = (0);
var state_25277__$1 = (function (){var statearr_25289 = state_25277;
(statearr_25289[(10)] = inst_25257);

(statearr_25289[(7)] = inst_25242);

(statearr_25289[(8)] = inst_25241);

return statearr_25289;
})();
var statearr_25290_25320 = state_25277__$1;
(statearr_25290_25320[(2)] = null);

(statearr_25290_25320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (9))){
var inst_25241 = (state_25277[(8)]);
var inst_25255 = cljs.core.vec.call(null,inst_25241);
var state_25277__$1 = state_25277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25277__$1,(11),out,inst_25255);
} else {
if((state_val_25278 === (5))){
var inst_25242 = (state_25277[(7)]);
var inst_25250 = (state_25277[(11)]);
var inst_25241 = (state_25277[(8)]);
var inst_25245 = (state_25277[(9)]);
var inst_25249 = (inst_25241[inst_25242] = inst_25245);
var inst_25250__$1 = (inst_25242 + (1));
var inst_25251 = (inst_25250__$1 < n);
var state_25277__$1 = (function (){var statearr_25291 = state_25277;
(statearr_25291[(11)] = inst_25250__$1);

(statearr_25291[(12)] = inst_25249);

return statearr_25291;
})();
if(cljs.core.truth_(inst_25251)){
var statearr_25292_25321 = state_25277__$1;
(statearr_25292_25321[(1)] = (8));

} else {
var statearr_25293_25322 = state_25277__$1;
(statearr_25293_25322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (14))){
var inst_25270 = (state_25277[(2)]);
var inst_25271 = cljs.core.async.close_BANG_.call(null,out);
var state_25277__$1 = (function (){var statearr_25295 = state_25277;
(statearr_25295[(13)] = inst_25270);

return statearr_25295;
})();
var statearr_25296_25323 = state_25277__$1;
(statearr_25296_25323[(2)] = inst_25271);

(statearr_25296_25323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (10))){
var inst_25261 = (state_25277[(2)]);
var state_25277__$1 = state_25277;
var statearr_25297_25324 = state_25277__$1;
(statearr_25297_25324[(2)] = inst_25261);

(statearr_25297_25324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25278 === (8))){
var inst_25250 = (state_25277[(11)]);
var inst_25241 = (state_25277[(8)]);
var tmp25294 = inst_25241;
var inst_25241__$1 = tmp25294;
var inst_25242 = inst_25250;
var state_25277__$1 = (function (){var statearr_25298 = state_25277;
(statearr_25298[(7)] = inst_25242);

(statearr_25298[(8)] = inst_25241__$1);

return statearr_25298;
})();
var statearr_25299_25325 = state_25277__$1;
(statearr_25299_25325[(2)] = null);

(statearr_25299_25325[(1)] = (2));


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
});})(c__22651__auto___25311,out))
;
return ((function (switch__20473__auto__,c__22651__auto___25311,out){
return (function() {
var cljs$core$async$state_machine__20474__auto__ = null;
var cljs$core$async$state_machine__20474__auto____0 = (function (){
var statearr_25303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25303[(0)] = cljs$core$async$state_machine__20474__auto__);

(statearr_25303[(1)] = (1));

return statearr_25303;
});
var cljs$core$async$state_machine__20474__auto____1 = (function (state_25277){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_25277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e25304){if((e25304 instanceof Object)){
var ex__20477__auto__ = e25304;
var statearr_25305_25326 = state_25277;
(statearr_25305_25326[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25327 = state_25277;
state_25277 = G__25327;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$state_machine__20474__auto__ = function(state_25277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20474__auto____1.call(this,state_25277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20474__auto____0;
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20474__auto____1;
return cljs$core$async$state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto___25311,out))
})();
var state__22653__auto__ = (function (){var statearr_25306 = f__22652__auto__.call(null);
(statearr_25306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto___25311);

return statearr_25306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto___25311,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25328 = [];
var len__19530__auto___25402 = arguments.length;
var i__19531__auto___25403 = (0);
while(true){
if((i__19531__auto___25403 < len__19530__auto___25402)){
args25328.push((arguments[i__19531__auto___25403]));

var G__25404 = (i__19531__auto___25403 + (1));
i__19531__auto___25403 = G__25404;
continue;
} else {
}
break;
}

var G__25330 = args25328.length;
switch (G__25330) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25328.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22651__auto___25406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22651__auto___25406,out){
return (function (){
var f__22652__auto__ = (function (){var switch__20473__auto__ = ((function (c__22651__auto___25406,out){
return (function (state_25372){
var state_val_25373 = (state_25372[(1)]);
if((state_val_25373 === (7))){
var inst_25368 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
var statearr_25374_25407 = state_25372__$1;
(statearr_25374_25407[(2)] = inst_25368);

(statearr_25374_25407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (1))){
var inst_25331 = [];
var inst_25332 = inst_25331;
var inst_25333 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25372__$1 = (function (){var statearr_25375 = state_25372;
(statearr_25375[(7)] = inst_25333);

(statearr_25375[(8)] = inst_25332);

return statearr_25375;
})();
var statearr_25376_25408 = state_25372__$1;
(statearr_25376_25408[(2)] = null);

(statearr_25376_25408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (4))){
var inst_25336 = (state_25372[(9)]);
var inst_25336__$1 = (state_25372[(2)]);
var inst_25337 = (inst_25336__$1 == null);
var inst_25338 = cljs.core.not.call(null,inst_25337);
var state_25372__$1 = (function (){var statearr_25377 = state_25372;
(statearr_25377[(9)] = inst_25336__$1);

return statearr_25377;
})();
if(inst_25338){
var statearr_25378_25409 = state_25372__$1;
(statearr_25378_25409[(1)] = (5));

} else {
var statearr_25379_25410 = state_25372__$1;
(statearr_25379_25410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (15))){
var inst_25362 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
var statearr_25380_25411 = state_25372__$1;
(statearr_25380_25411[(2)] = inst_25362);

(statearr_25380_25411[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (13))){
var state_25372__$1 = state_25372;
var statearr_25381_25412 = state_25372__$1;
(statearr_25381_25412[(2)] = null);

(statearr_25381_25412[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (6))){
var inst_25332 = (state_25372[(8)]);
var inst_25357 = inst_25332.length;
var inst_25358 = (inst_25357 > (0));
var state_25372__$1 = state_25372;
if(cljs.core.truth_(inst_25358)){
var statearr_25382_25413 = state_25372__$1;
(statearr_25382_25413[(1)] = (12));

} else {
var statearr_25383_25414 = state_25372__$1;
(statearr_25383_25414[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (3))){
var inst_25370 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25372__$1,inst_25370);
} else {
if((state_val_25373 === (12))){
var inst_25332 = (state_25372[(8)]);
var inst_25360 = cljs.core.vec.call(null,inst_25332);
var state_25372__$1 = state_25372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25372__$1,(15),out,inst_25360);
} else {
if((state_val_25373 === (2))){
var state_25372__$1 = state_25372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25372__$1,(4),ch);
} else {
if((state_val_25373 === (11))){
var inst_25336 = (state_25372[(9)]);
var inst_25340 = (state_25372[(10)]);
var inst_25350 = (state_25372[(2)]);
var inst_25351 = [];
var inst_25352 = inst_25351.push(inst_25336);
var inst_25332 = inst_25351;
var inst_25333 = inst_25340;
var state_25372__$1 = (function (){var statearr_25384 = state_25372;
(statearr_25384[(7)] = inst_25333);

(statearr_25384[(8)] = inst_25332);

(statearr_25384[(11)] = inst_25350);

(statearr_25384[(12)] = inst_25352);

return statearr_25384;
})();
var statearr_25385_25415 = state_25372__$1;
(statearr_25385_25415[(2)] = null);

(statearr_25385_25415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (9))){
var inst_25332 = (state_25372[(8)]);
var inst_25348 = cljs.core.vec.call(null,inst_25332);
var state_25372__$1 = state_25372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25372__$1,(11),out,inst_25348);
} else {
if((state_val_25373 === (5))){
var inst_25333 = (state_25372[(7)]);
var inst_25336 = (state_25372[(9)]);
var inst_25340 = (state_25372[(10)]);
var inst_25340__$1 = f.call(null,inst_25336);
var inst_25341 = cljs.core._EQ_.call(null,inst_25340__$1,inst_25333);
var inst_25342 = cljs.core.keyword_identical_QMARK_.call(null,inst_25333,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25343 = (inst_25341) || (inst_25342);
var state_25372__$1 = (function (){var statearr_25386 = state_25372;
(statearr_25386[(10)] = inst_25340__$1);

return statearr_25386;
})();
if(cljs.core.truth_(inst_25343)){
var statearr_25387_25416 = state_25372__$1;
(statearr_25387_25416[(1)] = (8));

} else {
var statearr_25388_25417 = state_25372__$1;
(statearr_25388_25417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (14))){
var inst_25365 = (state_25372[(2)]);
var inst_25366 = cljs.core.async.close_BANG_.call(null,out);
var state_25372__$1 = (function (){var statearr_25390 = state_25372;
(statearr_25390[(13)] = inst_25365);

return statearr_25390;
})();
var statearr_25391_25418 = state_25372__$1;
(statearr_25391_25418[(2)] = inst_25366);

(statearr_25391_25418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (10))){
var inst_25355 = (state_25372[(2)]);
var state_25372__$1 = state_25372;
var statearr_25392_25419 = state_25372__$1;
(statearr_25392_25419[(2)] = inst_25355);

(statearr_25392_25419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25373 === (8))){
var inst_25336 = (state_25372[(9)]);
var inst_25332 = (state_25372[(8)]);
var inst_25340 = (state_25372[(10)]);
var inst_25345 = inst_25332.push(inst_25336);
var tmp25389 = inst_25332;
var inst_25332__$1 = tmp25389;
var inst_25333 = inst_25340;
var state_25372__$1 = (function (){var statearr_25393 = state_25372;
(statearr_25393[(7)] = inst_25333);

(statearr_25393[(8)] = inst_25332__$1);

(statearr_25393[(14)] = inst_25345);

return statearr_25393;
})();
var statearr_25394_25420 = state_25372__$1;
(statearr_25394_25420[(2)] = null);

(statearr_25394_25420[(1)] = (2));


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
});})(c__22651__auto___25406,out))
;
return ((function (switch__20473__auto__,c__22651__auto___25406,out){
return (function() {
var cljs$core$async$state_machine__20474__auto__ = null;
var cljs$core$async$state_machine__20474__auto____0 = (function (){
var statearr_25398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25398[(0)] = cljs$core$async$state_machine__20474__auto__);

(statearr_25398[(1)] = (1));

return statearr_25398;
});
var cljs$core$async$state_machine__20474__auto____1 = (function (state_25372){
while(true){
var ret_value__20475__auto__ = (function (){try{while(true){
var result__20476__auto__ = switch__20473__auto__.call(null,state_25372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20476__auto__;
}
break;
}
}catch (e25399){if((e25399 instanceof Object)){
var ex__20477__auto__ = e25399;
var statearr_25400_25421 = state_25372;
(statearr_25400_25421[(5)] = ex__20477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25422 = state_25372;
state_25372 = G__25422;
continue;
} else {
return ret_value__20475__auto__;
}
break;
}
});
cljs$core$async$state_machine__20474__auto__ = function(state_25372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20474__auto____1.call(this,state_25372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20474__auto____0;
cljs$core$async$state_machine__20474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20474__auto____1;
return cljs$core$async$state_machine__20474__auto__;
})()
;})(switch__20473__auto__,c__22651__auto___25406,out))
})();
var state__22653__auto__ = (function (){var statearr_25401 = f__22652__auto__.call(null);
(statearr_25401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22651__auto___25406);

return statearr_25401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22653__auto__);
});})(c__22651__auto___25406,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1470998056001