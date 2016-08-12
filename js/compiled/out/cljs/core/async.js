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
var args25952 = [];
var len__19530__auto___25958 = arguments.length;
var i__19531__auto___25959 = (0);
while(true){
if((i__19531__auto___25959 < len__19530__auto___25958)){
args25952.push((arguments[i__19531__auto___25959]));

var G__25960 = (i__19531__auto___25959 + (1));
i__19531__auto___25959 = G__25960;
continue;
} else {
}
break;
}

var G__25954 = args25952.length;
switch (G__25954) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25952.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async25955 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25955 = (function (f,blockable,meta25956){
this.f = f;
this.blockable = blockable;
this.meta25956 = meta25956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25957,meta25956__$1){
var self__ = this;
var _25957__$1 = this;
return (new cljs.core.async.t_cljs$core$async25955(self__.f,self__.blockable,meta25956__$1));
});

cljs.core.async.t_cljs$core$async25955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25957){
var self__ = this;
var _25957__$1 = this;
return self__.meta25956;
});

cljs.core.async.t_cljs$core$async25955.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25955.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25955.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25955.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25956","meta25956",-892937676,null)], null);
});

cljs.core.async.t_cljs$core$async25955.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25955";

cljs.core.async.t_cljs$core$async25955.cljs$lang$ctorPrWriter = (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async25955");
});

cljs.core.async.__GT_t_cljs$core$async25955 = (function cljs$core$async$__GT_t_cljs$core$async25955(f__$1,blockable__$1,meta25956){
return (new cljs.core.async.t_cljs$core$async25955(f__$1,blockable__$1,meta25956));
});

}

return (new cljs.core.async.t_cljs$core$async25955(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args25964 = [];
var len__19530__auto___25967 = arguments.length;
var i__19531__auto___25968 = (0);
while(true){
if((i__19531__auto___25968 < len__19530__auto___25967)){
args25964.push((arguments[i__19531__auto___25968]));

var G__25969 = (i__19531__auto___25968 + (1));
i__19531__auto___25968 = G__25969;
continue;
} else {
}
break;
}

var G__25966 = args25964.length;
switch (G__25966) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25964.length)].join('')));

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
var args25971 = [];
var len__19530__auto___25974 = arguments.length;
var i__19531__auto___25975 = (0);
while(true){
if((i__19531__auto___25975 < len__19530__auto___25974)){
args25971.push((arguments[i__19531__auto___25975]));

var G__25976 = (i__19531__auto___25975 + (1));
i__19531__auto___25975 = G__25976;
continue;
} else {
}
break;
}

var G__25973 = args25971.length;
switch (G__25973) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25971.length)].join('')));

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
var args25978 = [];
var len__19530__auto___25981 = arguments.length;
var i__19531__auto___25982 = (0);
while(true){
if((i__19531__auto___25982 < len__19530__auto___25981)){
args25978.push((arguments[i__19531__auto___25982]));

var G__25983 = (i__19531__auto___25982 + (1));
i__19531__auto___25982 = G__25983;
continue;
} else {
}
break;
}

var G__25980 = args25978.length;
switch (G__25980) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25978.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25985 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25985);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25985,ret){
return (function (){
return fn1.call(null,val_25985);
});})(val_25985,ret))
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
var args25986 = [];
var len__19530__auto___25989 = arguments.length;
var i__19531__auto___25990 = (0);
while(true){
if((i__19531__auto___25990 < len__19530__auto___25989)){
args25986.push((arguments[i__19531__auto___25990]));

var G__25991 = (i__19531__auto___25990 + (1));
i__19531__auto___25990 = G__25991;
continue;
} else {
}
break;
}

var G__25988 = args25986.length;
switch (G__25988) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25986.length)].join('')));

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
var n__19375__auto___25993 = n;
var x_25994 = (0);
while(true){
if((x_25994 < n__19375__auto___25993)){
(a[x_25994] = (0));

var G__25995 = (x_25994 + (1));
x_25994 = G__25995;
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

var G__25996 = (i + (1));
i = G__25996;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26000 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26000 = (function (alt_flag,flag,meta26001){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26001 = meta26001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26002,meta26001__$1){
var self__ = this;
var _26002__$1 = this;
return (new cljs.core.async.t_cljs$core$async26000(self__.alt_flag,self__.flag,meta26001__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26002){
var self__ = this;
var _26002__$1 = this;
return self__.meta26001;
});})(flag))
;

cljs.core.async.t_cljs$core$async26000.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26000.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26000.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26000.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26000.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26001","meta26001",-478745549,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26000.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26000";

cljs.core.async.t_cljs$core$async26000.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async26000");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26000 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26000(alt_flag__$1,flag__$1,meta26001){
return (new cljs.core.async.t_cljs$core$async26000(alt_flag__$1,flag__$1,meta26001));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26000(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26006 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26006 = (function (alt_handler,flag,cb,meta26007){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26007 = meta26007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26008,meta26007__$1){
var self__ = this;
var _26008__$1 = this;
return (new cljs.core.async.t_cljs$core$async26006(self__.alt_handler,self__.flag,self__.cb,meta26007__$1));
});

cljs.core.async.t_cljs$core$async26006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26008){
var self__ = this;
var _26008__$1 = this;
return self__.meta26007;
});

cljs.core.async.t_cljs$core$async26006.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26006.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26006.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26006.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26007","meta26007",-1827763353,null)], null);
});

cljs.core.async.t_cljs$core$async26006.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26006";

cljs.core.async.t_cljs$core$async26006.cljs$lang$ctorPrWriter = (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async26006");
});

cljs.core.async.__GT_t_cljs$core$async26006 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26006(alt_handler__$1,flag__$1,cb__$1,meta26007){
return (new cljs.core.async.t_cljs$core$async26006(alt_handler__$1,flag__$1,cb__$1,meta26007));
});

}

return (new cljs.core.async.t_cljs$core$async26006(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26009_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26009_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26010_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26010_SHARP_,port], null));
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
var G__26011 = (i + (1));
i = G__26011;
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
var len__19530__auto___26017 = arguments.length;
var i__19531__auto___26018 = (0);
while(true){
if((i__19531__auto___26018 < len__19530__auto___26017)){
args__19537__auto__.push((arguments[i__19531__auto___26018]));

var G__26019 = (i__19531__auto___26018 + (1));
i__19531__auto___26018 = G__26019;
continue;
} else {
}
break;
}

var argseq__19538__auto__ = ((((1) < args__19537__auto__.length))?(new cljs.core.IndexedSeq(args__19537__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19538__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26014){
var map__26015 = p__26014;
var map__26015__$1 = ((((!((map__26015 == null)))?((((map__26015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26015):map__26015);
var opts = map__26015__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26012){
var G__26013 = cljs.core.first.call(null,seq26012);
var seq26012__$1 = cljs.core.next.call(null,seq26012);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26013,seq26012__$1);
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
var args26020 = [];
var len__19530__auto___26070 = arguments.length;
var i__19531__auto___26071 = (0);
while(true){
if((i__19531__auto___26071 < len__19530__auto___26070)){
args26020.push((arguments[i__19531__auto___26071]));

var G__26072 = (i__19531__auto___26071 + (1));
i__19531__auto___26071 = G__26072;
continue;
} else {
}
break;
}

var G__26022 = args26020.length;
switch (G__26022) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26020.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20485__auto___26074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto___26074){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto___26074){
return (function (state_26046){
var state_val_26047 = (state_26046[(1)]);
if((state_val_26047 === (7))){
var inst_26042 = (state_26046[(2)]);
var state_26046__$1 = state_26046;
var statearr_26048_26075 = state_26046__$1;
(statearr_26048_26075[(2)] = inst_26042);

(statearr_26048_26075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (1))){
var state_26046__$1 = state_26046;
var statearr_26049_26076 = state_26046__$1;
(statearr_26049_26076[(2)] = null);

(statearr_26049_26076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (4))){
var inst_26025 = (state_26046[(7)]);
var inst_26025__$1 = (state_26046[(2)]);
var inst_26026 = (inst_26025__$1 == null);
var state_26046__$1 = (function (){var statearr_26050 = state_26046;
(statearr_26050[(7)] = inst_26025__$1);

return statearr_26050;
})();
if(cljs.core.truth_(inst_26026)){
var statearr_26051_26077 = state_26046__$1;
(statearr_26051_26077[(1)] = (5));

} else {
var statearr_26052_26078 = state_26046__$1;
(statearr_26052_26078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (13))){
var state_26046__$1 = state_26046;
var statearr_26053_26079 = state_26046__$1;
(statearr_26053_26079[(2)] = null);

(statearr_26053_26079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (6))){
var inst_26025 = (state_26046[(7)]);
var state_26046__$1 = state_26046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26046__$1,(11),to,inst_26025);
} else {
if((state_val_26047 === (3))){
var inst_26044 = (state_26046[(2)]);
var state_26046__$1 = state_26046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26046__$1,inst_26044);
} else {
if((state_val_26047 === (12))){
var state_26046__$1 = state_26046;
var statearr_26054_26080 = state_26046__$1;
(statearr_26054_26080[(2)] = null);

(statearr_26054_26080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (2))){
var state_26046__$1 = state_26046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26046__$1,(4),from);
} else {
if((state_val_26047 === (11))){
var inst_26035 = (state_26046[(2)]);
var state_26046__$1 = state_26046;
if(cljs.core.truth_(inst_26035)){
var statearr_26055_26081 = state_26046__$1;
(statearr_26055_26081[(1)] = (12));

} else {
var statearr_26056_26082 = state_26046__$1;
(statearr_26056_26082[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (9))){
var state_26046__$1 = state_26046;
var statearr_26057_26083 = state_26046__$1;
(statearr_26057_26083[(2)] = null);

(statearr_26057_26083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (5))){
var state_26046__$1 = state_26046;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26058_26084 = state_26046__$1;
(statearr_26058_26084[(1)] = (8));

} else {
var statearr_26059_26085 = state_26046__$1;
(statearr_26059_26085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (14))){
var inst_26040 = (state_26046[(2)]);
var state_26046__$1 = state_26046;
var statearr_26060_26086 = state_26046__$1;
(statearr_26060_26086[(2)] = inst_26040);

(statearr_26060_26086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (10))){
var inst_26032 = (state_26046[(2)]);
var state_26046__$1 = state_26046;
var statearr_26061_26087 = state_26046__$1;
(statearr_26061_26087[(2)] = inst_26032);

(statearr_26061_26087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (8))){
var inst_26029 = cljs.core.async.close_BANG_.call(null,to);
var state_26046__$1 = state_26046;
var statearr_26062_26088 = state_26046__$1;
(statearr_26062_26088[(2)] = inst_26029);

(statearr_26062_26088[(1)] = (10));


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
});})(c__20485__auto___26074))
;
return ((function (switch__20464__auto__,c__20485__auto___26074){
return (function() {
var cljs$core$async$state_machine__20465__auto__ = null;
var cljs$core$async$state_machine__20465__auto____0 = (function (){
var statearr_26066 = [null,null,null,null,null,null,null,null];
(statearr_26066[(0)] = cljs$core$async$state_machine__20465__auto__);

(statearr_26066[(1)] = (1));

return statearr_26066;
});
var cljs$core$async$state_machine__20465__auto____1 = (function (state_26046){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_26046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e26067){if((e26067 instanceof Object)){
var ex__20468__auto__ = e26067;
var statearr_26068_26089 = state_26046;
(statearr_26068_26089[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26090 = state_26046;
state_26046 = G__26090;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$state_machine__20465__auto__ = function(state_26046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20465__auto____1.call(this,state_26046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20465__auto____0;
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20465__auto____1;
return cljs$core$async$state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto___26074))
})();
var state__20487__auto__ = (function (){var statearr_26069 = f__20486__auto__.call(null);
(statearr_26069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto___26074);

return statearr_26069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto___26074))
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
return (function (p__26274){
var vec__26275 = p__26274;
var v = cljs.core.nth.call(null,vec__26275,(0),null);
var p = cljs.core.nth.call(null,vec__26275,(1),null);
var job = vec__26275;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20485__auto___26457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto___26457,res,vec__26275,v,p,job,jobs,results){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto___26457,res,vec__26275,v,p,job,jobs,results){
return (function (state_26280){
var state_val_26281 = (state_26280[(1)]);
if((state_val_26281 === (1))){
var state_26280__$1 = state_26280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26280__$1,(2),res,v);
} else {
if((state_val_26281 === (2))){
var inst_26277 = (state_26280[(2)]);
var inst_26278 = cljs.core.async.close_BANG_.call(null,res);
var state_26280__$1 = (function (){var statearr_26282 = state_26280;
(statearr_26282[(7)] = inst_26277);

return statearr_26282;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26280__$1,inst_26278);
} else {
return null;
}
}
});})(c__20485__auto___26457,res,vec__26275,v,p,job,jobs,results))
;
return ((function (switch__20464__auto__,c__20485__auto___26457,res,vec__26275,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____0 = (function (){
var statearr_26286 = [null,null,null,null,null,null,null,null];
(statearr_26286[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__);

(statearr_26286[(1)] = (1));

return statearr_26286;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____1 = (function (state_26280){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_26280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e26287){if((e26287 instanceof Object)){
var ex__20468__auto__ = e26287;
var statearr_26288_26458 = state_26280;
(statearr_26288_26458[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26459 = state_26280;
state_26280 = G__26459;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__ = function(state_26280){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____1.call(this,state_26280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto___26457,res,vec__26275,v,p,job,jobs,results))
})();
var state__20487__auto__ = (function (){var statearr_26289 = f__20486__auto__.call(null);
(statearr_26289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto___26457);

return statearr_26289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto___26457,res,vec__26275,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26290){
var vec__26291 = p__26290;
var v = cljs.core.nth.call(null,vec__26291,(0),null);
var p = cljs.core.nth.call(null,vec__26291,(1),null);
var job = vec__26291;
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
var n__19375__auto___26460 = n;
var __26461 = (0);
while(true){
if((__26461 < n__19375__auto___26460)){
var G__26292_26462 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26292_26462) {
case "compute":
var c__20485__auto___26464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26461,c__20485__auto___26464,G__26292_26462,n__19375__auto___26460,jobs,results,process,async){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (__26461,c__20485__auto___26464,G__26292_26462,n__19375__auto___26460,jobs,results,process,async){
return (function (state_26305){
var state_val_26306 = (state_26305[(1)]);
if((state_val_26306 === (1))){
var state_26305__$1 = state_26305;
var statearr_26307_26465 = state_26305__$1;
(statearr_26307_26465[(2)] = null);

(statearr_26307_26465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26306 === (2))){
var state_26305__$1 = state_26305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26305__$1,(4),jobs);
} else {
if((state_val_26306 === (3))){
var inst_26303 = (state_26305[(2)]);
var state_26305__$1 = state_26305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26305__$1,inst_26303);
} else {
if((state_val_26306 === (4))){
var inst_26295 = (state_26305[(2)]);
var inst_26296 = process.call(null,inst_26295);
var state_26305__$1 = state_26305;
if(cljs.core.truth_(inst_26296)){
var statearr_26308_26466 = state_26305__$1;
(statearr_26308_26466[(1)] = (5));

} else {
var statearr_26309_26467 = state_26305__$1;
(statearr_26309_26467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26306 === (5))){
var state_26305__$1 = state_26305;
var statearr_26310_26468 = state_26305__$1;
(statearr_26310_26468[(2)] = null);

(statearr_26310_26468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26306 === (6))){
var state_26305__$1 = state_26305;
var statearr_26311_26469 = state_26305__$1;
(statearr_26311_26469[(2)] = null);

(statearr_26311_26469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26306 === (7))){
var inst_26301 = (state_26305[(2)]);
var state_26305__$1 = state_26305;
var statearr_26312_26470 = state_26305__$1;
(statearr_26312_26470[(2)] = inst_26301);

(statearr_26312_26470[(1)] = (3));


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
});})(__26461,c__20485__auto___26464,G__26292_26462,n__19375__auto___26460,jobs,results,process,async))
;
return ((function (__26461,switch__20464__auto__,c__20485__auto___26464,G__26292_26462,n__19375__auto___26460,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____0 = (function (){
var statearr_26316 = [null,null,null,null,null,null,null];
(statearr_26316[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__);

(statearr_26316[(1)] = (1));

return statearr_26316;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____1 = (function (state_26305){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_26305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e26317){if((e26317 instanceof Object)){
var ex__20468__auto__ = e26317;
var statearr_26318_26471 = state_26305;
(statearr_26318_26471[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26472 = state_26305;
state_26305 = G__26472;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__ = function(state_26305){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____1.call(this,state_26305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__;
})()
;})(__26461,switch__20464__auto__,c__20485__auto___26464,G__26292_26462,n__19375__auto___26460,jobs,results,process,async))
})();
var state__20487__auto__ = (function (){var statearr_26319 = f__20486__auto__.call(null);
(statearr_26319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto___26464);

return statearr_26319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(__26461,c__20485__auto___26464,G__26292_26462,n__19375__auto___26460,jobs,results,process,async))
);


break;
case "async":
var c__20485__auto___26473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26461,c__20485__auto___26473,G__26292_26462,n__19375__auto___26460,jobs,results,process,async){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (__26461,c__20485__auto___26473,G__26292_26462,n__19375__auto___26460,jobs,results,process,async){
return (function (state_26332){
var state_val_26333 = (state_26332[(1)]);
if((state_val_26333 === (1))){
var state_26332__$1 = state_26332;
var statearr_26334_26474 = state_26332__$1;
(statearr_26334_26474[(2)] = null);

(statearr_26334_26474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26333 === (2))){
var state_26332__$1 = state_26332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26332__$1,(4),jobs);
} else {
if((state_val_26333 === (3))){
var inst_26330 = (state_26332[(2)]);
var state_26332__$1 = state_26332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26332__$1,inst_26330);
} else {
if((state_val_26333 === (4))){
var inst_26322 = (state_26332[(2)]);
var inst_26323 = async.call(null,inst_26322);
var state_26332__$1 = state_26332;
if(cljs.core.truth_(inst_26323)){
var statearr_26335_26475 = state_26332__$1;
(statearr_26335_26475[(1)] = (5));

} else {
var statearr_26336_26476 = state_26332__$1;
(statearr_26336_26476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26333 === (5))){
var state_26332__$1 = state_26332;
var statearr_26337_26477 = state_26332__$1;
(statearr_26337_26477[(2)] = null);

(statearr_26337_26477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26333 === (6))){
var state_26332__$1 = state_26332;
var statearr_26338_26478 = state_26332__$1;
(statearr_26338_26478[(2)] = null);

(statearr_26338_26478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26333 === (7))){
var inst_26328 = (state_26332[(2)]);
var state_26332__$1 = state_26332;
var statearr_26339_26479 = state_26332__$1;
(statearr_26339_26479[(2)] = inst_26328);

(statearr_26339_26479[(1)] = (3));


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
});})(__26461,c__20485__auto___26473,G__26292_26462,n__19375__auto___26460,jobs,results,process,async))
;
return ((function (__26461,switch__20464__auto__,c__20485__auto___26473,G__26292_26462,n__19375__auto___26460,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____0 = (function (){
var statearr_26343 = [null,null,null,null,null,null,null];
(statearr_26343[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__);

(statearr_26343[(1)] = (1));

return statearr_26343;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____1 = (function (state_26332){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_26332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e26344){if((e26344 instanceof Object)){
var ex__20468__auto__ = e26344;
var statearr_26345_26480 = state_26332;
(statearr_26345_26480[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26481 = state_26332;
state_26332 = G__26481;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__ = function(state_26332){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____1.call(this,state_26332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__;
})()
;})(__26461,switch__20464__auto__,c__20485__auto___26473,G__26292_26462,n__19375__auto___26460,jobs,results,process,async))
})();
var state__20487__auto__ = (function (){var statearr_26346 = f__20486__auto__.call(null);
(statearr_26346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto___26473);

return statearr_26346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(__26461,c__20485__auto___26473,G__26292_26462,n__19375__auto___26460,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26482 = (__26461 + (1));
__26461 = G__26482;
continue;
} else {
}
break;
}

var c__20485__auto___26483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto___26483,jobs,results,process,async){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto___26483,jobs,results,process,async){
return (function (state_26368){
var state_val_26369 = (state_26368[(1)]);
if((state_val_26369 === (1))){
var state_26368__$1 = state_26368;
var statearr_26370_26484 = state_26368__$1;
(statearr_26370_26484[(2)] = null);

(statearr_26370_26484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (2))){
var state_26368__$1 = state_26368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26368__$1,(4),from);
} else {
if((state_val_26369 === (3))){
var inst_26366 = (state_26368[(2)]);
var state_26368__$1 = state_26368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26368__$1,inst_26366);
} else {
if((state_val_26369 === (4))){
var inst_26349 = (state_26368[(7)]);
var inst_26349__$1 = (state_26368[(2)]);
var inst_26350 = (inst_26349__$1 == null);
var state_26368__$1 = (function (){var statearr_26371 = state_26368;
(statearr_26371[(7)] = inst_26349__$1);

return statearr_26371;
})();
if(cljs.core.truth_(inst_26350)){
var statearr_26372_26485 = state_26368__$1;
(statearr_26372_26485[(1)] = (5));

} else {
var statearr_26373_26486 = state_26368__$1;
(statearr_26373_26486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (5))){
var inst_26352 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26368__$1 = state_26368;
var statearr_26374_26487 = state_26368__$1;
(statearr_26374_26487[(2)] = inst_26352);

(statearr_26374_26487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (6))){
var inst_26349 = (state_26368[(7)]);
var inst_26354 = (state_26368[(8)]);
var inst_26354__$1 = cljs.core.async.chan.call(null,(1));
var inst_26355 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26356 = [inst_26349,inst_26354__$1];
var inst_26357 = (new cljs.core.PersistentVector(null,2,(5),inst_26355,inst_26356,null));
var state_26368__$1 = (function (){var statearr_26375 = state_26368;
(statearr_26375[(8)] = inst_26354__$1);

return statearr_26375;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26368__$1,(8),jobs,inst_26357);
} else {
if((state_val_26369 === (7))){
var inst_26364 = (state_26368[(2)]);
var state_26368__$1 = state_26368;
var statearr_26376_26488 = state_26368__$1;
(statearr_26376_26488[(2)] = inst_26364);

(statearr_26376_26488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (8))){
var inst_26354 = (state_26368[(8)]);
var inst_26359 = (state_26368[(2)]);
var state_26368__$1 = (function (){var statearr_26377 = state_26368;
(statearr_26377[(9)] = inst_26359);

return statearr_26377;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26368__$1,(9),results,inst_26354);
} else {
if((state_val_26369 === (9))){
var inst_26361 = (state_26368[(2)]);
var state_26368__$1 = (function (){var statearr_26378 = state_26368;
(statearr_26378[(10)] = inst_26361);

return statearr_26378;
})();
var statearr_26379_26489 = state_26368__$1;
(statearr_26379_26489[(2)] = null);

(statearr_26379_26489[(1)] = (2));


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
});})(c__20485__auto___26483,jobs,results,process,async))
;
return ((function (switch__20464__auto__,c__20485__auto___26483,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____0 = (function (){
var statearr_26383 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__);

(statearr_26383[(1)] = (1));

return statearr_26383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____1 = (function (state_26368){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_26368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e26384){if((e26384 instanceof Object)){
var ex__20468__auto__ = e26384;
var statearr_26385_26490 = state_26368;
(statearr_26385_26490[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26491 = state_26368;
state_26368 = G__26491;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__ = function(state_26368){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____1.call(this,state_26368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto___26483,jobs,results,process,async))
})();
var state__20487__auto__ = (function (){var statearr_26386 = f__20486__auto__.call(null);
(statearr_26386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto___26483);

return statearr_26386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto___26483,jobs,results,process,async))
);


var c__20485__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto__,jobs,results,process,async){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto__,jobs,results,process,async){
return (function (state_26424){
var state_val_26425 = (state_26424[(1)]);
if((state_val_26425 === (7))){
var inst_26420 = (state_26424[(2)]);
var state_26424__$1 = state_26424;
var statearr_26426_26492 = state_26424__$1;
(statearr_26426_26492[(2)] = inst_26420);

(statearr_26426_26492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26425 === (20))){
var state_26424__$1 = state_26424;
var statearr_26427_26493 = state_26424__$1;
(statearr_26427_26493[(2)] = null);

(statearr_26427_26493[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26425 === (1))){
var state_26424__$1 = state_26424;
var statearr_26428_26494 = state_26424__$1;
(statearr_26428_26494[(2)] = null);

(statearr_26428_26494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26425 === (4))){
var inst_26389 = (state_26424[(7)]);
var inst_26389__$1 = (state_26424[(2)]);
var inst_26390 = (inst_26389__$1 == null);
var state_26424__$1 = (function (){var statearr_26429 = state_26424;
(statearr_26429[(7)] = inst_26389__$1);

return statearr_26429;
})();
if(cljs.core.truth_(inst_26390)){
var statearr_26430_26495 = state_26424__$1;
(statearr_26430_26495[(1)] = (5));

} else {
var statearr_26431_26496 = state_26424__$1;
(statearr_26431_26496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26425 === (15))){
var inst_26402 = (state_26424[(8)]);
var state_26424__$1 = state_26424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26424__$1,(18),to,inst_26402);
} else {
if((state_val_26425 === (21))){
var inst_26415 = (state_26424[(2)]);
var state_26424__$1 = state_26424;
var statearr_26432_26497 = state_26424__$1;
(statearr_26432_26497[(2)] = inst_26415);

(statearr_26432_26497[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26425 === (13))){
var inst_26417 = (state_26424[(2)]);
var state_26424__$1 = (function (){var statearr_26433 = state_26424;
(statearr_26433[(9)] = inst_26417);

return statearr_26433;
})();
var statearr_26434_26498 = state_26424__$1;
(statearr_26434_26498[(2)] = null);

(statearr_26434_26498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26425 === (6))){
var inst_26389 = (state_26424[(7)]);
var state_26424__$1 = state_26424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26424__$1,(11),inst_26389);
} else {
if((state_val_26425 === (17))){
var inst_26410 = (state_26424[(2)]);
var state_26424__$1 = state_26424;
if(cljs.core.truth_(inst_26410)){
var statearr_26435_26499 = state_26424__$1;
(statearr_26435_26499[(1)] = (19));

} else {
var statearr_26436_26500 = state_26424__$1;
(statearr_26436_26500[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26425 === (3))){
var inst_26422 = (state_26424[(2)]);
var state_26424__$1 = state_26424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26424__$1,inst_26422);
} else {
if((state_val_26425 === (12))){
var inst_26399 = (state_26424[(10)]);
var state_26424__$1 = state_26424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26424__$1,(14),inst_26399);
} else {
if((state_val_26425 === (2))){
var state_26424__$1 = state_26424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26424__$1,(4),results);
} else {
if((state_val_26425 === (19))){
var state_26424__$1 = state_26424;
var statearr_26437_26501 = state_26424__$1;
(statearr_26437_26501[(2)] = null);

(statearr_26437_26501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26425 === (11))){
var inst_26399 = (state_26424[(2)]);
var state_26424__$1 = (function (){var statearr_26438 = state_26424;
(statearr_26438[(10)] = inst_26399);

return statearr_26438;
})();
var statearr_26439_26502 = state_26424__$1;
(statearr_26439_26502[(2)] = null);

(statearr_26439_26502[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26425 === (9))){
var state_26424__$1 = state_26424;
var statearr_26440_26503 = state_26424__$1;
(statearr_26440_26503[(2)] = null);

(statearr_26440_26503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26425 === (5))){
var state_26424__$1 = state_26424;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26441_26504 = state_26424__$1;
(statearr_26441_26504[(1)] = (8));

} else {
var statearr_26442_26505 = state_26424__$1;
(statearr_26442_26505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26425 === (14))){
var inst_26404 = (state_26424[(11)]);
var inst_26402 = (state_26424[(8)]);
var inst_26402__$1 = (state_26424[(2)]);
var inst_26403 = (inst_26402__$1 == null);
var inst_26404__$1 = cljs.core.not.call(null,inst_26403);
var state_26424__$1 = (function (){var statearr_26443 = state_26424;
(statearr_26443[(11)] = inst_26404__$1);

(statearr_26443[(8)] = inst_26402__$1);

return statearr_26443;
})();
if(inst_26404__$1){
var statearr_26444_26506 = state_26424__$1;
(statearr_26444_26506[(1)] = (15));

} else {
var statearr_26445_26507 = state_26424__$1;
(statearr_26445_26507[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26425 === (16))){
var inst_26404 = (state_26424[(11)]);
var state_26424__$1 = state_26424;
var statearr_26446_26508 = state_26424__$1;
(statearr_26446_26508[(2)] = inst_26404);

(statearr_26446_26508[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26425 === (10))){
var inst_26396 = (state_26424[(2)]);
var state_26424__$1 = state_26424;
var statearr_26447_26509 = state_26424__$1;
(statearr_26447_26509[(2)] = inst_26396);

(statearr_26447_26509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26425 === (18))){
var inst_26407 = (state_26424[(2)]);
var state_26424__$1 = state_26424;
var statearr_26448_26510 = state_26424__$1;
(statearr_26448_26510[(2)] = inst_26407);

(statearr_26448_26510[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26425 === (8))){
var inst_26393 = cljs.core.async.close_BANG_.call(null,to);
var state_26424__$1 = state_26424;
var statearr_26449_26511 = state_26424__$1;
(statearr_26449_26511[(2)] = inst_26393);

(statearr_26449_26511[(1)] = (10));


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
});})(c__20485__auto__,jobs,results,process,async))
;
return ((function (switch__20464__auto__,c__20485__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____0 = (function (){
var statearr_26453 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26453[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__);

(statearr_26453[(1)] = (1));

return statearr_26453;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____1 = (function (state_26424){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_26424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e26454){if((e26454 instanceof Object)){
var ex__20468__auto__ = e26454;
var statearr_26455_26512 = state_26424;
(statearr_26455_26512[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26513 = state_26424;
state_26424 = G__26513;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__ = function(state_26424){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____1.call(this,state_26424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto__,jobs,results,process,async))
})();
var state__20487__auto__ = (function (){var statearr_26456 = f__20486__auto__.call(null);
(statearr_26456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto__);

return statearr_26456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto__,jobs,results,process,async))
);

return c__20485__auto__;
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
var args26514 = [];
var len__19530__auto___26517 = arguments.length;
var i__19531__auto___26518 = (0);
while(true){
if((i__19531__auto___26518 < len__19530__auto___26517)){
args26514.push((arguments[i__19531__auto___26518]));

var G__26519 = (i__19531__auto___26518 + (1));
i__19531__auto___26518 = G__26519;
continue;
} else {
}
break;
}

var G__26516 = args26514.length;
switch (G__26516) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26514.length)].join('')));

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
var args26521 = [];
var len__19530__auto___26524 = arguments.length;
var i__19531__auto___26525 = (0);
while(true){
if((i__19531__auto___26525 < len__19530__auto___26524)){
args26521.push((arguments[i__19531__auto___26525]));

var G__26526 = (i__19531__auto___26525 + (1));
i__19531__auto___26525 = G__26526;
continue;
} else {
}
break;
}

var G__26523 = args26521.length;
switch (G__26523) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26521.length)].join('')));

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
var args26528 = [];
var len__19530__auto___26581 = arguments.length;
var i__19531__auto___26582 = (0);
while(true){
if((i__19531__auto___26582 < len__19530__auto___26581)){
args26528.push((arguments[i__19531__auto___26582]));

var G__26583 = (i__19531__auto___26582 + (1));
i__19531__auto___26582 = G__26583;
continue;
} else {
}
break;
}

var G__26530 = args26528.length;
switch (G__26530) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26528.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20485__auto___26585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto___26585,tc,fc){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto___26585,tc,fc){
return (function (state_26556){
var state_val_26557 = (state_26556[(1)]);
if((state_val_26557 === (7))){
var inst_26552 = (state_26556[(2)]);
var state_26556__$1 = state_26556;
var statearr_26558_26586 = state_26556__$1;
(statearr_26558_26586[(2)] = inst_26552);

(statearr_26558_26586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (1))){
var state_26556__$1 = state_26556;
var statearr_26559_26587 = state_26556__$1;
(statearr_26559_26587[(2)] = null);

(statearr_26559_26587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (4))){
var inst_26533 = (state_26556[(7)]);
var inst_26533__$1 = (state_26556[(2)]);
var inst_26534 = (inst_26533__$1 == null);
var state_26556__$1 = (function (){var statearr_26560 = state_26556;
(statearr_26560[(7)] = inst_26533__$1);

return statearr_26560;
})();
if(cljs.core.truth_(inst_26534)){
var statearr_26561_26588 = state_26556__$1;
(statearr_26561_26588[(1)] = (5));

} else {
var statearr_26562_26589 = state_26556__$1;
(statearr_26562_26589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (13))){
var state_26556__$1 = state_26556;
var statearr_26563_26590 = state_26556__$1;
(statearr_26563_26590[(2)] = null);

(statearr_26563_26590[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (6))){
var inst_26533 = (state_26556[(7)]);
var inst_26539 = p.call(null,inst_26533);
var state_26556__$1 = state_26556;
if(cljs.core.truth_(inst_26539)){
var statearr_26564_26591 = state_26556__$1;
(statearr_26564_26591[(1)] = (9));

} else {
var statearr_26565_26592 = state_26556__$1;
(statearr_26565_26592[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (3))){
var inst_26554 = (state_26556[(2)]);
var state_26556__$1 = state_26556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26556__$1,inst_26554);
} else {
if((state_val_26557 === (12))){
var state_26556__$1 = state_26556;
var statearr_26566_26593 = state_26556__$1;
(statearr_26566_26593[(2)] = null);

(statearr_26566_26593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (2))){
var state_26556__$1 = state_26556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26556__$1,(4),ch);
} else {
if((state_val_26557 === (11))){
var inst_26533 = (state_26556[(7)]);
var inst_26543 = (state_26556[(2)]);
var state_26556__$1 = state_26556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26556__$1,(8),inst_26543,inst_26533);
} else {
if((state_val_26557 === (9))){
var state_26556__$1 = state_26556;
var statearr_26567_26594 = state_26556__$1;
(statearr_26567_26594[(2)] = tc);

(statearr_26567_26594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (5))){
var inst_26536 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26537 = cljs.core.async.close_BANG_.call(null,fc);
var state_26556__$1 = (function (){var statearr_26568 = state_26556;
(statearr_26568[(8)] = inst_26536);

return statearr_26568;
})();
var statearr_26569_26595 = state_26556__$1;
(statearr_26569_26595[(2)] = inst_26537);

(statearr_26569_26595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (14))){
var inst_26550 = (state_26556[(2)]);
var state_26556__$1 = state_26556;
var statearr_26570_26596 = state_26556__$1;
(statearr_26570_26596[(2)] = inst_26550);

(statearr_26570_26596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (10))){
var state_26556__$1 = state_26556;
var statearr_26571_26597 = state_26556__$1;
(statearr_26571_26597[(2)] = fc);

(statearr_26571_26597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (8))){
var inst_26545 = (state_26556[(2)]);
var state_26556__$1 = state_26556;
if(cljs.core.truth_(inst_26545)){
var statearr_26572_26598 = state_26556__$1;
(statearr_26572_26598[(1)] = (12));

} else {
var statearr_26573_26599 = state_26556__$1;
(statearr_26573_26599[(1)] = (13));

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
});})(c__20485__auto___26585,tc,fc))
;
return ((function (switch__20464__auto__,c__20485__auto___26585,tc,fc){
return (function() {
var cljs$core$async$state_machine__20465__auto__ = null;
var cljs$core$async$state_machine__20465__auto____0 = (function (){
var statearr_26577 = [null,null,null,null,null,null,null,null,null];
(statearr_26577[(0)] = cljs$core$async$state_machine__20465__auto__);

(statearr_26577[(1)] = (1));

return statearr_26577;
});
var cljs$core$async$state_machine__20465__auto____1 = (function (state_26556){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_26556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e26578){if((e26578 instanceof Object)){
var ex__20468__auto__ = e26578;
var statearr_26579_26600 = state_26556;
(statearr_26579_26600[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26601 = state_26556;
state_26556 = G__26601;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$state_machine__20465__auto__ = function(state_26556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20465__auto____1.call(this,state_26556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20465__auto____0;
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20465__auto____1;
return cljs$core$async$state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto___26585,tc,fc))
})();
var state__20487__auto__ = (function (){var statearr_26580 = f__20486__auto__.call(null);
(statearr_26580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto___26585);

return statearr_26580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto___26585,tc,fc))
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
var c__20485__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto__){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto__){
return (function (state_26665){
var state_val_26666 = (state_26665[(1)]);
if((state_val_26666 === (7))){
var inst_26661 = (state_26665[(2)]);
var state_26665__$1 = state_26665;
var statearr_26667_26688 = state_26665__$1;
(statearr_26667_26688[(2)] = inst_26661);

(statearr_26667_26688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (1))){
var inst_26645 = init;
var state_26665__$1 = (function (){var statearr_26668 = state_26665;
(statearr_26668[(7)] = inst_26645);

return statearr_26668;
})();
var statearr_26669_26689 = state_26665__$1;
(statearr_26669_26689[(2)] = null);

(statearr_26669_26689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (4))){
var inst_26648 = (state_26665[(8)]);
var inst_26648__$1 = (state_26665[(2)]);
var inst_26649 = (inst_26648__$1 == null);
var state_26665__$1 = (function (){var statearr_26670 = state_26665;
(statearr_26670[(8)] = inst_26648__$1);

return statearr_26670;
})();
if(cljs.core.truth_(inst_26649)){
var statearr_26671_26690 = state_26665__$1;
(statearr_26671_26690[(1)] = (5));

} else {
var statearr_26672_26691 = state_26665__$1;
(statearr_26672_26691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (6))){
var inst_26652 = (state_26665[(9)]);
var inst_26648 = (state_26665[(8)]);
var inst_26645 = (state_26665[(7)]);
var inst_26652__$1 = f.call(null,inst_26645,inst_26648);
var inst_26653 = cljs.core.reduced_QMARK_.call(null,inst_26652__$1);
var state_26665__$1 = (function (){var statearr_26673 = state_26665;
(statearr_26673[(9)] = inst_26652__$1);

return statearr_26673;
})();
if(inst_26653){
var statearr_26674_26692 = state_26665__$1;
(statearr_26674_26692[(1)] = (8));

} else {
var statearr_26675_26693 = state_26665__$1;
(statearr_26675_26693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (3))){
var inst_26663 = (state_26665[(2)]);
var state_26665__$1 = state_26665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26665__$1,inst_26663);
} else {
if((state_val_26666 === (2))){
var state_26665__$1 = state_26665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26665__$1,(4),ch);
} else {
if((state_val_26666 === (9))){
var inst_26652 = (state_26665[(9)]);
var inst_26645 = inst_26652;
var state_26665__$1 = (function (){var statearr_26676 = state_26665;
(statearr_26676[(7)] = inst_26645);

return statearr_26676;
})();
var statearr_26677_26694 = state_26665__$1;
(statearr_26677_26694[(2)] = null);

(statearr_26677_26694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (5))){
var inst_26645 = (state_26665[(7)]);
var state_26665__$1 = state_26665;
var statearr_26678_26695 = state_26665__$1;
(statearr_26678_26695[(2)] = inst_26645);

(statearr_26678_26695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (10))){
var inst_26659 = (state_26665[(2)]);
var state_26665__$1 = state_26665;
var statearr_26679_26696 = state_26665__$1;
(statearr_26679_26696[(2)] = inst_26659);

(statearr_26679_26696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (8))){
var inst_26652 = (state_26665[(9)]);
var inst_26655 = cljs.core.deref.call(null,inst_26652);
var state_26665__$1 = state_26665;
var statearr_26680_26697 = state_26665__$1;
(statearr_26680_26697[(2)] = inst_26655);

(statearr_26680_26697[(1)] = (10));


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
});})(c__20485__auto__))
;
return ((function (switch__20464__auto__,c__20485__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20465__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20465__auto____0 = (function (){
var statearr_26684 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26684[(0)] = cljs$core$async$reduce_$_state_machine__20465__auto__);

(statearr_26684[(1)] = (1));

return statearr_26684;
});
var cljs$core$async$reduce_$_state_machine__20465__auto____1 = (function (state_26665){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_26665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e26685){if((e26685 instanceof Object)){
var ex__20468__auto__ = e26685;
var statearr_26686_26698 = state_26665;
(statearr_26686_26698[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26699 = state_26665;
state_26665 = G__26699;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20465__auto__ = function(state_26665){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20465__auto____1.call(this,state_26665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20465__auto____0;
cljs$core$async$reduce_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20465__auto____1;
return cljs$core$async$reduce_$_state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto__))
})();
var state__20487__auto__ = (function (){var statearr_26687 = f__20486__auto__.call(null);
(statearr_26687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto__);

return statearr_26687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto__))
);

return c__20485__auto__;
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
var args26700 = [];
var len__19530__auto___26752 = arguments.length;
var i__19531__auto___26753 = (0);
while(true){
if((i__19531__auto___26753 < len__19530__auto___26752)){
args26700.push((arguments[i__19531__auto___26753]));

var G__26754 = (i__19531__auto___26753 + (1));
i__19531__auto___26753 = G__26754;
continue;
} else {
}
break;
}

var G__26702 = args26700.length;
switch (G__26702) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26700.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20485__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto__){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto__){
return (function (state_26727){
var state_val_26728 = (state_26727[(1)]);
if((state_val_26728 === (7))){
var inst_26709 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
var statearr_26729_26756 = state_26727__$1;
(statearr_26729_26756[(2)] = inst_26709);

(statearr_26729_26756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (1))){
var inst_26703 = cljs.core.seq.call(null,coll);
var inst_26704 = inst_26703;
var state_26727__$1 = (function (){var statearr_26730 = state_26727;
(statearr_26730[(7)] = inst_26704);

return statearr_26730;
})();
var statearr_26731_26757 = state_26727__$1;
(statearr_26731_26757[(2)] = null);

(statearr_26731_26757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (4))){
var inst_26704 = (state_26727[(7)]);
var inst_26707 = cljs.core.first.call(null,inst_26704);
var state_26727__$1 = state_26727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26727__$1,(7),ch,inst_26707);
} else {
if((state_val_26728 === (13))){
var inst_26721 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
var statearr_26732_26758 = state_26727__$1;
(statearr_26732_26758[(2)] = inst_26721);

(statearr_26732_26758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (6))){
var inst_26712 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
if(cljs.core.truth_(inst_26712)){
var statearr_26733_26759 = state_26727__$1;
(statearr_26733_26759[(1)] = (8));

} else {
var statearr_26734_26760 = state_26727__$1;
(statearr_26734_26760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (3))){
var inst_26725 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26727__$1,inst_26725);
} else {
if((state_val_26728 === (12))){
var state_26727__$1 = state_26727;
var statearr_26735_26761 = state_26727__$1;
(statearr_26735_26761[(2)] = null);

(statearr_26735_26761[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (2))){
var inst_26704 = (state_26727[(7)]);
var state_26727__$1 = state_26727;
if(cljs.core.truth_(inst_26704)){
var statearr_26736_26762 = state_26727__$1;
(statearr_26736_26762[(1)] = (4));

} else {
var statearr_26737_26763 = state_26727__$1;
(statearr_26737_26763[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (11))){
var inst_26718 = cljs.core.async.close_BANG_.call(null,ch);
var state_26727__$1 = state_26727;
var statearr_26738_26764 = state_26727__$1;
(statearr_26738_26764[(2)] = inst_26718);

(statearr_26738_26764[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (9))){
var state_26727__$1 = state_26727;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26739_26765 = state_26727__$1;
(statearr_26739_26765[(1)] = (11));

} else {
var statearr_26740_26766 = state_26727__$1;
(statearr_26740_26766[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (5))){
var inst_26704 = (state_26727[(7)]);
var state_26727__$1 = state_26727;
var statearr_26741_26767 = state_26727__$1;
(statearr_26741_26767[(2)] = inst_26704);

(statearr_26741_26767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (10))){
var inst_26723 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
var statearr_26742_26768 = state_26727__$1;
(statearr_26742_26768[(2)] = inst_26723);

(statearr_26742_26768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (8))){
var inst_26704 = (state_26727[(7)]);
var inst_26714 = cljs.core.next.call(null,inst_26704);
var inst_26704__$1 = inst_26714;
var state_26727__$1 = (function (){var statearr_26743 = state_26727;
(statearr_26743[(7)] = inst_26704__$1);

return statearr_26743;
})();
var statearr_26744_26769 = state_26727__$1;
(statearr_26744_26769[(2)] = null);

(statearr_26744_26769[(1)] = (2));


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
});})(c__20485__auto__))
;
return ((function (switch__20464__auto__,c__20485__auto__){
return (function() {
var cljs$core$async$state_machine__20465__auto__ = null;
var cljs$core$async$state_machine__20465__auto____0 = (function (){
var statearr_26748 = [null,null,null,null,null,null,null,null];
(statearr_26748[(0)] = cljs$core$async$state_machine__20465__auto__);

(statearr_26748[(1)] = (1));

return statearr_26748;
});
var cljs$core$async$state_machine__20465__auto____1 = (function (state_26727){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_26727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e26749){if((e26749 instanceof Object)){
var ex__20468__auto__ = e26749;
var statearr_26750_26770 = state_26727;
(statearr_26750_26770[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26771 = state_26727;
state_26727 = G__26771;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$state_machine__20465__auto__ = function(state_26727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20465__auto____1.call(this,state_26727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20465__auto____0;
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20465__auto____1;
return cljs$core$async$state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto__))
})();
var state__20487__auto__ = (function (){var statearr_26751 = f__20486__auto__.call(null);
(statearr_26751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto__);

return statearr_26751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto__))
);

return c__20485__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async26993 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26993 = (function (mult,ch,cs,meta26994){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26994 = meta26994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26995,meta26994__$1){
var self__ = this;
var _26995__$1 = this;
return (new cljs.core.async.t_cljs$core$async26993(self__.mult,self__.ch,self__.cs,meta26994__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26993.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26995){
var self__ = this;
var _26995__$1 = this;
return self__.meta26994;
});})(cs))
;

cljs.core.async.t_cljs$core$async26993.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26993.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26993.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26993.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26993.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26993.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26993.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26994","meta26994",543799445,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26993.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26993";

cljs.core.async.t_cljs$core$async26993.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async26993");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26993 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26993(mult__$1,ch__$1,cs__$1,meta26994){
return (new cljs.core.async.t_cljs$core$async26993(mult__$1,ch__$1,cs__$1,meta26994));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26993(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20485__auto___27214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto___27214,cs,m,dchan,dctr,done){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto___27214,cs,m,dchan,dctr,done){
return (function (state_27126){
var state_val_27127 = (state_27126[(1)]);
if((state_val_27127 === (7))){
var inst_27122 = (state_27126[(2)]);
var state_27126__$1 = state_27126;
var statearr_27128_27215 = state_27126__$1;
(statearr_27128_27215[(2)] = inst_27122);

(statearr_27128_27215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (20))){
var inst_27027 = (state_27126[(7)]);
var inst_27037 = cljs.core.first.call(null,inst_27027);
var inst_27038 = cljs.core.nth.call(null,inst_27037,(0),null);
var inst_27039 = cljs.core.nth.call(null,inst_27037,(1),null);
var state_27126__$1 = (function (){var statearr_27129 = state_27126;
(statearr_27129[(8)] = inst_27038);

return statearr_27129;
})();
if(cljs.core.truth_(inst_27039)){
var statearr_27130_27216 = state_27126__$1;
(statearr_27130_27216[(1)] = (22));

} else {
var statearr_27131_27217 = state_27126__$1;
(statearr_27131_27217[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (27))){
var inst_26998 = (state_27126[(9)]);
var inst_27074 = (state_27126[(10)]);
var inst_27069 = (state_27126[(11)]);
var inst_27067 = (state_27126[(12)]);
var inst_27074__$1 = cljs.core._nth.call(null,inst_27067,inst_27069);
var inst_27075 = cljs.core.async.put_BANG_.call(null,inst_27074__$1,inst_26998,done);
var state_27126__$1 = (function (){var statearr_27132 = state_27126;
(statearr_27132[(10)] = inst_27074__$1);

return statearr_27132;
})();
if(cljs.core.truth_(inst_27075)){
var statearr_27133_27218 = state_27126__$1;
(statearr_27133_27218[(1)] = (30));

} else {
var statearr_27134_27219 = state_27126__$1;
(statearr_27134_27219[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (1))){
var state_27126__$1 = state_27126;
var statearr_27135_27220 = state_27126__$1;
(statearr_27135_27220[(2)] = null);

(statearr_27135_27220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (24))){
var inst_27027 = (state_27126[(7)]);
var inst_27044 = (state_27126[(2)]);
var inst_27045 = cljs.core.next.call(null,inst_27027);
var inst_27007 = inst_27045;
var inst_27008 = null;
var inst_27009 = (0);
var inst_27010 = (0);
var state_27126__$1 = (function (){var statearr_27136 = state_27126;
(statearr_27136[(13)] = inst_27010);

(statearr_27136[(14)] = inst_27044);

(statearr_27136[(15)] = inst_27007);

(statearr_27136[(16)] = inst_27008);

(statearr_27136[(17)] = inst_27009);

return statearr_27136;
})();
var statearr_27137_27221 = state_27126__$1;
(statearr_27137_27221[(2)] = null);

(statearr_27137_27221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (39))){
var state_27126__$1 = state_27126;
var statearr_27141_27222 = state_27126__$1;
(statearr_27141_27222[(2)] = null);

(statearr_27141_27222[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (4))){
var inst_26998 = (state_27126[(9)]);
var inst_26998__$1 = (state_27126[(2)]);
var inst_26999 = (inst_26998__$1 == null);
var state_27126__$1 = (function (){var statearr_27142 = state_27126;
(statearr_27142[(9)] = inst_26998__$1);

return statearr_27142;
})();
if(cljs.core.truth_(inst_26999)){
var statearr_27143_27223 = state_27126__$1;
(statearr_27143_27223[(1)] = (5));

} else {
var statearr_27144_27224 = state_27126__$1;
(statearr_27144_27224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (15))){
var inst_27010 = (state_27126[(13)]);
var inst_27007 = (state_27126[(15)]);
var inst_27008 = (state_27126[(16)]);
var inst_27009 = (state_27126[(17)]);
var inst_27023 = (state_27126[(2)]);
var inst_27024 = (inst_27010 + (1));
var tmp27138 = inst_27007;
var tmp27139 = inst_27008;
var tmp27140 = inst_27009;
var inst_27007__$1 = tmp27138;
var inst_27008__$1 = tmp27139;
var inst_27009__$1 = tmp27140;
var inst_27010__$1 = inst_27024;
var state_27126__$1 = (function (){var statearr_27145 = state_27126;
(statearr_27145[(13)] = inst_27010__$1);

(statearr_27145[(18)] = inst_27023);

(statearr_27145[(15)] = inst_27007__$1);

(statearr_27145[(16)] = inst_27008__$1);

(statearr_27145[(17)] = inst_27009__$1);

return statearr_27145;
})();
var statearr_27146_27225 = state_27126__$1;
(statearr_27146_27225[(2)] = null);

(statearr_27146_27225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (21))){
var inst_27048 = (state_27126[(2)]);
var state_27126__$1 = state_27126;
var statearr_27150_27226 = state_27126__$1;
(statearr_27150_27226[(2)] = inst_27048);

(statearr_27150_27226[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (31))){
var inst_27074 = (state_27126[(10)]);
var inst_27078 = done.call(null,null);
var inst_27079 = cljs.core.async.untap_STAR_.call(null,m,inst_27074);
var state_27126__$1 = (function (){var statearr_27151 = state_27126;
(statearr_27151[(19)] = inst_27078);

return statearr_27151;
})();
var statearr_27152_27227 = state_27126__$1;
(statearr_27152_27227[(2)] = inst_27079);

(statearr_27152_27227[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (32))){
var inst_27066 = (state_27126[(20)]);
var inst_27068 = (state_27126[(21)]);
var inst_27069 = (state_27126[(11)]);
var inst_27067 = (state_27126[(12)]);
var inst_27081 = (state_27126[(2)]);
var inst_27082 = (inst_27069 + (1));
var tmp27147 = inst_27066;
var tmp27148 = inst_27068;
var tmp27149 = inst_27067;
var inst_27066__$1 = tmp27147;
var inst_27067__$1 = tmp27149;
var inst_27068__$1 = tmp27148;
var inst_27069__$1 = inst_27082;
var state_27126__$1 = (function (){var statearr_27153 = state_27126;
(statearr_27153[(20)] = inst_27066__$1);

(statearr_27153[(21)] = inst_27068__$1);

(statearr_27153[(22)] = inst_27081);

(statearr_27153[(11)] = inst_27069__$1);

(statearr_27153[(12)] = inst_27067__$1);

return statearr_27153;
})();
var statearr_27154_27228 = state_27126__$1;
(statearr_27154_27228[(2)] = null);

(statearr_27154_27228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (40))){
var inst_27094 = (state_27126[(23)]);
var inst_27098 = done.call(null,null);
var inst_27099 = cljs.core.async.untap_STAR_.call(null,m,inst_27094);
var state_27126__$1 = (function (){var statearr_27155 = state_27126;
(statearr_27155[(24)] = inst_27098);

return statearr_27155;
})();
var statearr_27156_27229 = state_27126__$1;
(statearr_27156_27229[(2)] = inst_27099);

(statearr_27156_27229[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (33))){
var inst_27085 = (state_27126[(25)]);
var inst_27087 = cljs.core.chunked_seq_QMARK_.call(null,inst_27085);
var state_27126__$1 = state_27126;
if(inst_27087){
var statearr_27157_27230 = state_27126__$1;
(statearr_27157_27230[(1)] = (36));

} else {
var statearr_27158_27231 = state_27126__$1;
(statearr_27158_27231[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (13))){
var inst_27017 = (state_27126[(26)]);
var inst_27020 = cljs.core.async.close_BANG_.call(null,inst_27017);
var state_27126__$1 = state_27126;
var statearr_27159_27232 = state_27126__$1;
(statearr_27159_27232[(2)] = inst_27020);

(statearr_27159_27232[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (22))){
var inst_27038 = (state_27126[(8)]);
var inst_27041 = cljs.core.async.close_BANG_.call(null,inst_27038);
var state_27126__$1 = state_27126;
var statearr_27160_27233 = state_27126__$1;
(statearr_27160_27233[(2)] = inst_27041);

(statearr_27160_27233[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (36))){
var inst_27085 = (state_27126[(25)]);
var inst_27089 = cljs.core.chunk_first.call(null,inst_27085);
var inst_27090 = cljs.core.chunk_rest.call(null,inst_27085);
var inst_27091 = cljs.core.count.call(null,inst_27089);
var inst_27066 = inst_27090;
var inst_27067 = inst_27089;
var inst_27068 = inst_27091;
var inst_27069 = (0);
var state_27126__$1 = (function (){var statearr_27161 = state_27126;
(statearr_27161[(20)] = inst_27066);

(statearr_27161[(21)] = inst_27068);

(statearr_27161[(11)] = inst_27069);

(statearr_27161[(12)] = inst_27067);

return statearr_27161;
})();
var statearr_27162_27234 = state_27126__$1;
(statearr_27162_27234[(2)] = null);

(statearr_27162_27234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (41))){
var inst_27085 = (state_27126[(25)]);
var inst_27101 = (state_27126[(2)]);
var inst_27102 = cljs.core.next.call(null,inst_27085);
var inst_27066 = inst_27102;
var inst_27067 = null;
var inst_27068 = (0);
var inst_27069 = (0);
var state_27126__$1 = (function (){var statearr_27163 = state_27126;
(statearr_27163[(20)] = inst_27066);

(statearr_27163[(21)] = inst_27068);

(statearr_27163[(11)] = inst_27069);

(statearr_27163[(12)] = inst_27067);

(statearr_27163[(27)] = inst_27101);

return statearr_27163;
})();
var statearr_27164_27235 = state_27126__$1;
(statearr_27164_27235[(2)] = null);

(statearr_27164_27235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (43))){
var state_27126__$1 = state_27126;
var statearr_27165_27236 = state_27126__$1;
(statearr_27165_27236[(2)] = null);

(statearr_27165_27236[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (29))){
var inst_27110 = (state_27126[(2)]);
var state_27126__$1 = state_27126;
var statearr_27166_27237 = state_27126__$1;
(statearr_27166_27237[(2)] = inst_27110);

(statearr_27166_27237[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (44))){
var inst_27119 = (state_27126[(2)]);
var state_27126__$1 = (function (){var statearr_27167 = state_27126;
(statearr_27167[(28)] = inst_27119);

return statearr_27167;
})();
var statearr_27168_27238 = state_27126__$1;
(statearr_27168_27238[(2)] = null);

(statearr_27168_27238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (6))){
var inst_27058 = (state_27126[(29)]);
var inst_27057 = cljs.core.deref.call(null,cs);
var inst_27058__$1 = cljs.core.keys.call(null,inst_27057);
var inst_27059 = cljs.core.count.call(null,inst_27058__$1);
var inst_27060 = cljs.core.reset_BANG_.call(null,dctr,inst_27059);
var inst_27065 = cljs.core.seq.call(null,inst_27058__$1);
var inst_27066 = inst_27065;
var inst_27067 = null;
var inst_27068 = (0);
var inst_27069 = (0);
var state_27126__$1 = (function (){var statearr_27169 = state_27126;
(statearr_27169[(29)] = inst_27058__$1);

(statearr_27169[(20)] = inst_27066);

(statearr_27169[(21)] = inst_27068);

(statearr_27169[(30)] = inst_27060);

(statearr_27169[(11)] = inst_27069);

(statearr_27169[(12)] = inst_27067);

return statearr_27169;
})();
var statearr_27170_27239 = state_27126__$1;
(statearr_27170_27239[(2)] = null);

(statearr_27170_27239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (28))){
var inst_27066 = (state_27126[(20)]);
var inst_27085 = (state_27126[(25)]);
var inst_27085__$1 = cljs.core.seq.call(null,inst_27066);
var state_27126__$1 = (function (){var statearr_27171 = state_27126;
(statearr_27171[(25)] = inst_27085__$1);

return statearr_27171;
})();
if(inst_27085__$1){
var statearr_27172_27240 = state_27126__$1;
(statearr_27172_27240[(1)] = (33));

} else {
var statearr_27173_27241 = state_27126__$1;
(statearr_27173_27241[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (25))){
var inst_27068 = (state_27126[(21)]);
var inst_27069 = (state_27126[(11)]);
var inst_27071 = (inst_27069 < inst_27068);
var inst_27072 = inst_27071;
var state_27126__$1 = state_27126;
if(cljs.core.truth_(inst_27072)){
var statearr_27174_27242 = state_27126__$1;
(statearr_27174_27242[(1)] = (27));

} else {
var statearr_27175_27243 = state_27126__$1;
(statearr_27175_27243[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (34))){
var state_27126__$1 = state_27126;
var statearr_27176_27244 = state_27126__$1;
(statearr_27176_27244[(2)] = null);

(statearr_27176_27244[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (17))){
var state_27126__$1 = state_27126;
var statearr_27177_27245 = state_27126__$1;
(statearr_27177_27245[(2)] = null);

(statearr_27177_27245[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (3))){
var inst_27124 = (state_27126[(2)]);
var state_27126__$1 = state_27126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27126__$1,inst_27124);
} else {
if((state_val_27127 === (12))){
var inst_27053 = (state_27126[(2)]);
var state_27126__$1 = state_27126;
var statearr_27178_27246 = state_27126__$1;
(statearr_27178_27246[(2)] = inst_27053);

(statearr_27178_27246[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (2))){
var state_27126__$1 = state_27126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27126__$1,(4),ch);
} else {
if((state_val_27127 === (23))){
var state_27126__$1 = state_27126;
var statearr_27179_27247 = state_27126__$1;
(statearr_27179_27247[(2)] = null);

(statearr_27179_27247[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (35))){
var inst_27108 = (state_27126[(2)]);
var state_27126__$1 = state_27126;
var statearr_27180_27248 = state_27126__$1;
(statearr_27180_27248[(2)] = inst_27108);

(statearr_27180_27248[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (19))){
var inst_27027 = (state_27126[(7)]);
var inst_27031 = cljs.core.chunk_first.call(null,inst_27027);
var inst_27032 = cljs.core.chunk_rest.call(null,inst_27027);
var inst_27033 = cljs.core.count.call(null,inst_27031);
var inst_27007 = inst_27032;
var inst_27008 = inst_27031;
var inst_27009 = inst_27033;
var inst_27010 = (0);
var state_27126__$1 = (function (){var statearr_27181 = state_27126;
(statearr_27181[(13)] = inst_27010);

(statearr_27181[(15)] = inst_27007);

(statearr_27181[(16)] = inst_27008);

(statearr_27181[(17)] = inst_27009);

return statearr_27181;
})();
var statearr_27182_27249 = state_27126__$1;
(statearr_27182_27249[(2)] = null);

(statearr_27182_27249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (11))){
var inst_27027 = (state_27126[(7)]);
var inst_27007 = (state_27126[(15)]);
var inst_27027__$1 = cljs.core.seq.call(null,inst_27007);
var state_27126__$1 = (function (){var statearr_27183 = state_27126;
(statearr_27183[(7)] = inst_27027__$1);

return statearr_27183;
})();
if(inst_27027__$1){
var statearr_27184_27250 = state_27126__$1;
(statearr_27184_27250[(1)] = (16));

} else {
var statearr_27185_27251 = state_27126__$1;
(statearr_27185_27251[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (9))){
var inst_27055 = (state_27126[(2)]);
var state_27126__$1 = state_27126;
var statearr_27186_27252 = state_27126__$1;
(statearr_27186_27252[(2)] = inst_27055);

(statearr_27186_27252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (5))){
var inst_27005 = cljs.core.deref.call(null,cs);
var inst_27006 = cljs.core.seq.call(null,inst_27005);
var inst_27007 = inst_27006;
var inst_27008 = null;
var inst_27009 = (0);
var inst_27010 = (0);
var state_27126__$1 = (function (){var statearr_27187 = state_27126;
(statearr_27187[(13)] = inst_27010);

(statearr_27187[(15)] = inst_27007);

(statearr_27187[(16)] = inst_27008);

(statearr_27187[(17)] = inst_27009);

return statearr_27187;
})();
var statearr_27188_27253 = state_27126__$1;
(statearr_27188_27253[(2)] = null);

(statearr_27188_27253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (14))){
var state_27126__$1 = state_27126;
var statearr_27189_27254 = state_27126__$1;
(statearr_27189_27254[(2)] = null);

(statearr_27189_27254[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (45))){
var inst_27116 = (state_27126[(2)]);
var state_27126__$1 = state_27126;
var statearr_27190_27255 = state_27126__$1;
(statearr_27190_27255[(2)] = inst_27116);

(statearr_27190_27255[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (26))){
var inst_27058 = (state_27126[(29)]);
var inst_27112 = (state_27126[(2)]);
var inst_27113 = cljs.core.seq.call(null,inst_27058);
var state_27126__$1 = (function (){var statearr_27191 = state_27126;
(statearr_27191[(31)] = inst_27112);

return statearr_27191;
})();
if(inst_27113){
var statearr_27192_27256 = state_27126__$1;
(statearr_27192_27256[(1)] = (42));

} else {
var statearr_27193_27257 = state_27126__$1;
(statearr_27193_27257[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (16))){
var inst_27027 = (state_27126[(7)]);
var inst_27029 = cljs.core.chunked_seq_QMARK_.call(null,inst_27027);
var state_27126__$1 = state_27126;
if(inst_27029){
var statearr_27194_27258 = state_27126__$1;
(statearr_27194_27258[(1)] = (19));

} else {
var statearr_27195_27259 = state_27126__$1;
(statearr_27195_27259[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (38))){
var inst_27105 = (state_27126[(2)]);
var state_27126__$1 = state_27126;
var statearr_27196_27260 = state_27126__$1;
(statearr_27196_27260[(2)] = inst_27105);

(statearr_27196_27260[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (30))){
var state_27126__$1 = state_27126;
var statearr_27197_27261 = state_27126__$1;
(statearr_27197_27261[(2)] = null);

(statearr_27197_27261[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (10))){
var inst_27010 = (state_27126[(13)]);
var inst_27008 = (state_27126[(16)]);
var inst_27016 = cljs.core._nth.call(null,inst_27008,inst_27010);
var inst_27017 = cljs.core.nth.call(null,inst_27016,(0),null);
var inst_27018 = cljs.core.nth.call(null,inst_27016,(1),null);
var state_27126__$1 = (function (){var statearr_27198 = state_27126;
(statearr_27198[(26)] = inst_27017);

return statearr_27198;
})();
if(cljs.core.truth_(inst_27018)){
var statearr_27199_27262 = state_27126__$1;
(statearr_27199_27262[(1)] = (13));

} else {
var statearr_27200_27263 = state_27126__$1;
(statearr_27200_27263[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (18))){
var inst_27051 = (state_27126[(2)]);
var state_27126__$1 = state_27126;
var statearr_27201_27264 = state_27126__$1;
(statearr_27201_27264[(2)] = inst_27051);

(statearr_27201_27264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (42))){
var state_27126__$1 = state_27126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27126__$1,(45),dchan);
} else {
if((state_val_27127 === (37))){
var inst_26998 = (state_27126[(9)]);
var inst_27094 = (state_27126[(23)]);
var inst_27085 = (state_27126[(25)]);
var inst_27094__$1 = cljs.core.first.call(null,inst_27085);
var inst_27095 = cljs.core.async.put_BANG_.call(null,inst_27094__$1,inst_26998,done);
var state_27126__$1 = (function (){var statearr_27202 = state_27126;
(statearr_27202[(23)] = inst_27094__$1);

return statearr_27202;
})();
if(cljs.core.truth_(inst_27095)){
var statearr_27203_27265 = state_27126__$1;
(statearr_27203_27265[(1)] = (39));

} else {
var statearr_27204_27266 = state_27126__$1;
(statearr_27204_27266[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27127 === (8))){
var inst_27010 = (state_27126[(13)]);
var inst_27009 = (state_27126[(17)]);
var inst_27012 = (inst_27010 < inst_27009);
var inst_27013 = inst_27012;
var state_27126__$1 = state_27126;
if(cljs.core.truth_(inst_27013)){
var statearr_27205_27267 = state_27126__$1;
(statearr_27205_27267[(1)] = (10));

} else {
var statearr_27206_27268 = state_27126__$1;
(statearr_27206_27268[(1)] = (11));

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
});})(c__20485__auto___27214,cs,m,dchan,dctr,done))
;
return ((function (switch__20464__auto__,c__20485__auto___27214,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20465__auto__ = null;
var cljs$core$async$mult_$_state_machine__20465__auto____0 = (function (){
var statearr_27210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27210[(0)] = cljs$core$async$mult_$_state_machine__20465__auto__);

(statearr_27210[(1)] = (1));

return statearr_27210;
});
var cljs$core$async$mult_$_state_machine__20465__auto____1 = (function (state_27126){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_27126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e27211){if((e27211 instanceof Object)){
var ex__20468__auto__ = e27211;
var statearr_27212_27269 = state_27126;
(statearr_27212_27269[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27270 = state_27126;
state_27126 = G__27270;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20465__auto__ = function(state_27126){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20465__auto____1.call(this,state_27126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20465__auto____0;
cljs$core$async$mult_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20465__auto____1;
return cljs$core$async$mult_$_state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto___27214,cs,m,dchan,dctr,done))
})();
var state__20487__auto__ = (function (){var statearr_27213 = f__20486__auto__.call(null);
(statearr_27213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto___27214);

return statearr_27213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto___27214,cs,m,dchan,dctr,done))
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
var args27271 = [];
var len__19530__auto___27274 = arguments.length;
var i__19531__auto___27275 = (0);
while(true){
if((i__19531__auto___27275 < len__19530__auto___27274)){
args27271.push((arguments[i__19531__auto___27275]));

var G__27276 = (i__19531__auto___27275 + (1));
i__19531__auto___27275 = G__27276;
continue;
} else {
}
break;
}

var G__27273 = args27271.length;
switch (G__27273) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27271.length)].join('')));

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
var len__19530__auto___27288 = arguments.length;
var i__19531__auto___27289 = (0);
while(true){
if((i__19531__auto___27289 < len__19530__auto___27288)){
args__19537__auto__.push((arguments[i__19531__auto___27289]));

var G__27290 = (i__19531__auto___27289 + (1));
i__19531__auto___27289 = G__27290;
continue;
} else {
}
break;
}

var argseq__19538__auto__ = ((((3) < args__19537__auto__.length))?(new cljs.core.IndexedSeq(args__19537__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19538__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27282){
var map__27283 = p__27282;
var map__27283__$1 = ((((!((map__27283 == null)))?((((map__27283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27283):map__27283);
var opts = map__27283__$1;
var statearr_27285_27291 = state;
(statearr_27285_27291[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__27283,map__27283__$1,opts){
return (function (val){
var statearr_27286_27292 = state;
(statearr_27286_27292[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27283,map__27283__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_27287_27293 = state;
(statearr_27287_27293[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27278){
var G__27279 = cljs.core.first.call(null,seq27278);
var seq27278__$1 = cljs.core.next.call(null,seq27278);
var G__27280 = cljs.core.first.call(null,seq27278__$1);
var seq27278__$2 = cljs.core.next.call(null,seq27278__$1);
var G__27281 = cljs.core.first.call(null,seq27278__$2);
var seq27278__$3 = cljs.core.next.call(null,seq27278__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27279,G__27280,G__27281,seq27278__$3);
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
if(typeof cljs.core.async.t_cljs$core$async27457 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27457 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27458){
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
this.meta27458 = meta27458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27459,meta27458__$1){
var self__ = this;
var _27459__$1 = this;
return (new cljs.core.async.t_cljs$core$async27457(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27458__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27459){
var self__ = this;
var _27459__$1 = this;
return self__.meta27458;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27457.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27457.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27457.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27457.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27457.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27457.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27457.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27457.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27457.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27458","meta27458",-1250624675,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27457";

cljs.core.async.t_cljs$core$async27457.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async27457");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27457 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27457(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27458){
return (new cljs.core.async.t_cljs$core$async27457(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27458));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27457(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20485__auto___27620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto___27620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto___27620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27557){
var state_val_27558 = (state_27557[(1)]);
if((state_val_27558 === (7))){
var inst_27475 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
var statearr_27559_27621 = state_27557__$1;
(statearr_27559_27621[(2)] = inst_27475);

(statearr_27559_27621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (20))){
var inst_27487 = (state_27557[(7)]);
var state_27557__$1 = state_27557;
var statearr_27560_27622 = state_27557__$1;
(statearr_27560_27622[(2)] = inst_27487);

(statearr_27560_27622[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (27))){
var state_27557__$1 = state_27557;
var statearr_27561_27623 = state_27557__$1;
(statearr_27561_27623[(2)] = null);

(statearr_27561_27623[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (1))){
var inst_27463 = (state_27557[(8)]);
var inst_27463__$1 = calc_state.call(null);
var inst_27465 = (inst_27463__$1 == null);
var inst_27466 = cljs.core.not.call(null,inst_27465);
var state_27557__$1 = (function (){var statearr_27562 = state_27557;
(statearr_27562[(8)] = inst_27463__$1);

return statearr_27562;
})();
if(inst_27466){
var statearr_27563_27624 = state_27557__$1;
(statearr_27563_27624[(1)] = (2));

} else {
var statearr_27564_27625 = state_27557__$1;
(statearr_27564_27625[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (24))){
var inst_27517 = (state_27557[(9)]);
var inst_27531 = (state_27557[(10)]);
var inst_27510 = (state_27557[(11)]);
var inst_27531__$1 = inst_27510.call(null,inst_27517);
var state_27557__$1 = (function (){var statearr_27565 = state_27557;
(statearr_27565[(10)] = inst_27531__$1);

return statearr_27565;
})();
if(cljs.core.truth_(inst_27531__$1)){
var statearr_27566_27626 = state_27557__$1;
(statearr_27566_27626[(1)] = (29));

} else {
var statearr_27567_27627 = state_27557__$1;
(statearr_27567_27627[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (4))){
var inst_27478 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
if(cljs.core.truth_(inst_27478)){
var statearr_27568_27628 = state_27557__$1;
(statearr_27568_27628[(1)] = (8));

} else {
var statearr_27569_27629 = state_27557__$1;
(statearr_27569_27629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (15))){
var inst_27504 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
if(cljs.core.truth_(inst_27504)){
var statearr_27570_27630 = state_27557__$1;
(statearr_27570_27630[(1)] = (19));

} else {
var statearr_27571_27631 = state_27557__$1;
(statearr_27571_27631[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (21))){
var inst_27509 = (state_27557[(12)]);
var inst_27509__$1 = (state_27557[(2)]);
var inst_27510 = cljs.core.get.call(null,inst_27509__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27511 = cljs.core.get.call(null,inst_27509__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27512 = cljs.core.get.call(null,inst_27509__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27557__$1 = (function (){var statearr_27572 = state_27557;
(statearr_27572[(11)] = inst_27510);

(statearr_27572[(13)] = inst_27511);

(statearr_27572[(12)] = inst_27509__$1);

return statearr_27572;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27557__$1,(22),inst_27512);
} else {
if((state_val_27558 === (31))){
var inst_27539 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
if(cljs.core.truth_(inst_27539)){
var statearr_27573_27632 = state_27557__$1;
(statearr_27573_27632[(1)] = (32));

} else {
var statearr_27574_27633 = state_27557__$1;
(statearr_27574_27633[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (32))){
var inst_27516 = (state_27557[(14)]);
var state_27557__$1 = state_27557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27557__$1,(35),out,inst_27516);
} else {
if((state_val_27558 === (33))){
var inst_27509 = (state_27557[(12)]);
var inst_27487 = inst_27509;
var state_27557__$1 = (function (){var statearr_27575 = state_27557;
(statearr_27575[(7)] = inst_27487);

return statearr_27575;
})();
var statearr_27576_27634 = state_27557__$1;
(statearr_27576_27634[(2)] = null);

(statearr_27576_27634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (13))){
var inst_27487 = (state_27557[(7)]);
var inst_27494 = inst_27487.cljs$lang$protocol_mask$partition0$;
var inst_27495 = (inst_27494 & (64));
var inst_27496 = inst_27487.cljs$core$ISeq$;
var inst_27497 = (inst_27495) || (inst_27496);
var state_27557__$1 = state_27557;
if(cljs.core.truth_(inst_27497)){
var statearr_27577_27635 = state_27557__$1;
(statearr_27577_27635[(1)] = (16));

} else {
var statearr_27578_27636 = state_27557__$1;
(statearr_27578_27636[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (22))){
var inst_27517 = (state_27557[(9)]);
var inst_27516 = (state_27557[(14)]);
var inst_27515 = (state_27557[(2)]);
var inst_27516__$1 = cljs.core.nth.call(null,inst_27515,(0),null);
var inst_27517__$1 = cljs.core.nth.call(null,inst_27515,(1),null);
var inst_27518 = (inst_27516__$1 == null);
var inst_27519 = cljs.core._EQ_.call(null,inst_27517__$1,change);
var inst_27520 = (inst_27518) || (inst_27519);
var state_27557__$1 = (function (){var statearr_27579 = state_27557;
(statearr_27579[(9)] = inst_27517__$1);

(statearr_27579[(14)] = inst_27516__$1);

return statearr_27579;
})();
if(cljs.core.truth_(inst_27520)){
var statearr_27580_27637 = state_27557__$1;
(statearr_27580_27637[(1)] = (23));

} else {
var statearr_27581_27638 = state_27557__$1;
(statearr_27581_27638[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (36))){
var inst_27509 = (state_27557[(12)]);
var inst_27487 = inst_27509;
var state_27557__$1 = (function (){var statearr_27582 = state_27557;
(statearr_27582[(7)] = inst_27487);

return statearr_27582;
})();
var statearr_27583_27639 = state_27557__$1;
(statearr_27583_27639[(2)] = null);

(statearr_27583_27639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (29))){
var inst_27531 = (state_27557[(10)]);
var state_27557__$1 = state_27557;
var statearr_27584_27640 = state_27557__$1;
(statearr_27584_27640[(2)] = inst_27531);

(statearr_27584_27640[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (6))){
var state_27557__$1 = state_27557;
var statearr_27585_27641 = state_27557__$1;
(statearr_27585_27641[(2)] = false);

(statearr_27585_27641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (28))){
var inst_27527 = (state_27557[(2)]);
var inst_27528 = calc_state.call(null);
var inst_27487 = inst_27528;
var state_27557__$1 = (function (){var statearr_27586 = state_27557;
(statearr_27586[(15)] = inst_27527);

(statearr_27586[(7)] = inst_27487);

return statearr_27586;
})();
var statearr_27587_27642 = state_27557__$1;
(statearr_27587_27642[(2)] = null);

(statearr_27587_27642[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (25))){
var inst_27553 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
var statearr_27588_27643 = state_27557__$1;
(statearr_27588_27643[(2)] = inst_27553);

(statearr_27588_27643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (34))){
var inst_27551 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
var statearr_27589_27644 = state_27557__$1;
(statearr_27589_27644[(2)] = inst_27551);

(statearr_27589_27644[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (17))){
var state_27557__$1 = state_27557;
var statearr_27590_27645 = state_27557__$1;
(statearr_27590_27645[(2)] = false);

(statearr_27590_27645[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (3))){
var state_27557__$1 = state_27557;
var statearr_27591_27646 = state_27557__$1;
(statearr_27591_27646[(2)] = false);

(statearr_27591_27646[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (12))){
var inst_27555 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27557__$1,inst_27555);
} else {
if((state_val_27558 === (2))){
var inst_27463 = (state_27557[(8)]);
var inst_27468 = inst_27463.cljs$lang$protocol_mask$partition0$;
var inst_27469 = (inst_27468 & (64));
var inst_27470 = inst_27463.cljs$core$ISeq$;
var inst_27471 = (inst_27469) || (inst_27470);
var state_27557__$1 = state_27557;
if(cljs.core.truth_(inst_27471)){
var statearr_27592_27647 = state_27557__$1;
(statearr_27592_27647[(1)] = (5));

} else {
var statearr_27593_27648 = state_27557__$1;
(statearr_27593_27648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (23))){
var inst_27516 = (state_27557[(14)]);
var inst_27522 = (inst_27516 == null);
var state_27557__$1 = state_27557;
if(cljs.core.truth_(inst_27522)){
var statearr_27594_27649 = state_27557__$1;
(statearr_27594_27649[(1)] = (26));

} else {
var statearr_27595_27650 = state_27557__$1;
(statearr_27595_27650[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (35))){
var inst_27542 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
if(cljs.core.truth_(inst_27542)){
var statearr_27596_27651 = state_27557__$1;
(statearr_27596_27651[(1)] = (36));

} else {
var statearr_27597_27652 = state_27557__$1;
(statearr_27597_27652[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (19))){
var inst_27487 = (state_27557[(7)]);
var inst_27506 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27487);
var state_27557__$1 = state_27557;
var statearr_27598_27653 = state_27557__$1;
(statearr_27598_27653[(2)] = inst_27506);

(statearr_27598_27653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (11))){
var inst_27487 = (state_27557[(7)]);
var inst_27491 = (inst_27487 == null);
var inst_27492 = cljs.core.not.call(null,inst_27491);
var state_27557__$1 = state_27557;
if(inst_27492){
var statearr_27599_27654 = state_27557__$1;
(statearr_27599_27654[(1)] = (13));

} else {
var statearr_27600_27655 = state_27557__$1;
(statearr_27600_27655[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (9))){
var inst_27463 = (state_27557[(8)]);
var state_27557__$1 = state_27557;
var statearr_27601_27656 = state_27557__$1;
(statearr_27601_27656[(2)] = inst_27463);

(statearr_27601_27656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (5))){
var state_27557__$1 = state_27557;
var statearr_27602_27657 = state_27557__$1;
(statearr_27602_27657[(2)] = true);

(statearr_27602_27657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (14))){
var state_27557__$1 = state_27557;
var statearr_27603_27658 = state_27557__$1;
(statearr_27603_27658[(2)] = false);

(statearr_27603_27658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (26))){
var inst_27517 = (state_27557[(9)]);
var inst_27524 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27517);
var state_27557__$1 = state_27557;
var statearr_27604_27659 = state_27557__$1;
(statearr_27604_27659[(2)] = inst_27524);

(statearr_27604_27659[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (16))){
var state_27557__$1 = state_27557;
var statearr_27605_27660 = state_27557__$1;
(statearr_27605_27660[(2)] = true);

(statearr_27605_27660[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (38))){
var inst_27547 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
var statearr_27606_27661 = state_27557__$1;
(statearr_27606_27661[(2)] = inst_27547);

(statearr_27606_27661[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (30))){
var inst_27517 = (state_27557[(9)]);
var inst_27510 = (state_27557[(11)]);
var inst_27511 = (state_27557[(13)]);
var inst_27534 = cljs.core.empty_QMARK_.call(null,inst_27510);
var inst_27535 = inst_27511.call(null,inst_27517);
var inst_27536 = cljs.core.not.call(null,inst_27535);
var inst_27537 = (inst_27534) && (inst_27536);
var state_27557__$1 = state_27557;
var statearr_27607_27662 = state_27557__$1;
(statearr_27607_27662[(2)] = inst_27537);

(statearr_27607_27662[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (10))){
var inst_27463 = (state_27557[(8)]);
var inst_27483 = (state_27557[(2)]);
var inst_27484 = cljs.core.get.call(null,inst_27483,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27485 = cljs.core.get.call(null,inst_27483,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27486 = cljs.core.get.call(null,inst_27483,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27487 = inst_27463;
var state_27557__$1 = (function (){var statearr_27608 = state_27557;
(statearr_27608[(16)] = inst_27485);

(statearr_27608[(17)] = inst_27484);

(statearr_27608[(7)] = inst_27487);

(statearr_27608[(18)] = inst_27486);

return statearr_27608;
})();
var statearr_27609_27663 = state_27557__$1;
(statearr_27609_27663[(2)] = null);

(statearr_27609_27663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (18))){
var inst_27501 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
var statearr_27610_27664 = state_27557__$1;
(statearr_27610_27664[(2)] = inst_27501);

(statearr_27610_27664[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (37))){
var state_27557__$1 = state_27557;
var statearr_27611_27665 = state_27557__$1;
(statearr_27611_27665[(2)] = null);

(statearr_27611_27665[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (8))){
var inst_27463 = (state_27557[(8)]);
var inst_27480 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27463);
var state_27557__$1 = state_27557;
var statearr_27612_27666 = state_27557__$1;
(statearr_27612_27666[(2)] = inst_27480);

(statearr_27612_27666[(1)] = (10));


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
});})(c__20485__auto___27620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20464__auto__,c__20485__auto___27620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20465__auto__ = null;
var cljs$core$async$mix_$_state_machine__20465__auto____0 = (function (){
var statearr_27616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27616[(0)] = cljs$core$async$mix_$_state_machine__20465__auto__);

(statearr_27616[(1)] = (1));

return statearr_27616;
});
var cljs$core$async$mix_$_state_machine__20465__auto____1 = (function (state_27557){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_27557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e27617){if((e27617 instanceof Object)){
var ex__20468__auto__ = e27617;
var statearr_27618_27667 = state_27557;
(statearr_27618_27667[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27668 = state_27557;
state_27557 = G__27668;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20465__auto__ = function(state_27557){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20465__auto____1.call(this,state_27557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20465__auto____0;
cljs$core$async$mix_$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20465__auto____1;
return cljs$core$async$mix_$_state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto___27620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20487__auto__ = (function (){var statearr_27619 = f__20486__auto__.call(null);
(statearr_27619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto___27620);

return statearr_27619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto___27620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args27669 = [];
var len__19530__auto___27672 = arguments.length;
var i__19531__auto___27673 = (0);
while(true){
if((i__19531__auto___27673 < len__19530__auto___27672)){
args27669.push((arguments[i__19531__auto___27673]));

var G__27674 = (i__19531__auto___27673 + (1));
i__19531__auto___27673 = G__27674;
continue;
} else {
}
break;
}

var G__27671 = args27669.length;
switch (G__27671) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27669.length)].join('')));

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
var args27677 = [];
var len__19530__auto___27802 = arguments.length;
var i__19531__auto___27803 = (0);
while(true){
if((i__19531__auto___27803 < len__19530__auto___27802)){
args27677.push((arguments[i__19531__auto___27803]));

var G__27804 = (i__19531__auto___27803 + (1));
i__19531__auto___27803 = G__27804;
continue;
} else {
}
break;
}

var G__27679 = args27677.length;
switch (G__27679) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27677.length)].join('')));

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
return (function (p1__27676_SHARP_){
if(cljs.core.truth_(p1__27676_SHARP_.call(null,topic))){
return p1__27676_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27676_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18460__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27680 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27681){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27681 = meta27681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27682,meta27681__$1){
var self__ = this;
var _27682__$1 = this;
return (new cljs.core.async.t_cljs$core$async27680(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27681__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27680.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27682){
var self__ = this;
var _27682__$1 = this;
return self__.meta27681;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27680.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27680.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27680.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async27680.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27680.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27680.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27680.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27680.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27681","meta27681",1597195789,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27680";

cljs.core.async.t_cljs$core$async27680.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async27680");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27680 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27680(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27681){
return (new cljs.core.async.t_cljs$core$async27680(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27681));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27680(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20485__auto___27806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto___27806,mults,ensure_mult,p){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto___27806,mults,ensure_mult,p){
return (function (state_27754){
var state_val_27755 = (state_27754[(1)]);
if((state_val_27755 === (7))){
var inst_27750 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27756_27807 = state_27754__$1;
(statearr_27756_27807[(2)] = inst_27750);

(statearr_27756_27807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (20))){
var state_27754__$1 = state_27754;
var statearr_27757_27808 = state_27754__$1;
(statearr_27757_27808[(2)] = null);

(statearr_27757_27808[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (1))){
var state_27754__$1 = state_27754;
var statearr_27758_27809 = state_27754__$1;
(statearr_27758_27809[(2)] = null);

(statearr_27758_27809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (24))){
var inst_27733 = (state_27754[(7)]);
var inst_27742 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27733);
var state_27754__$1 = state_27754;
var statearr_27759_27810 = state_27754__$1;
(statearr_27759_27810[(2)] = inst_27742);

(statearr_27759_27810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (4))){
var inst_27685 = (state_27754[(8)]);
var inst_27685__$1 = (state_27754[(2)]);
var inst_27686 = (inst_27685__$1 == null);
var state_27754__$1 = (function (){var statearr_27760 = state_27754;
(statearr_27760[(8)] = inst_27685__$1);

return statearr_27760;
})();
if(cljs.core.truth_(inst_27686)){
var statearr_27761_27811 = state_27754__$1;
(statearr_27761_27811[(1)] = (5));

} else {
var statearr_27762_27812 = state_27754__$1;
(statearr_27762_27812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (15))){
var inst_27727 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27763_27813 = state_27754__$1;
(statearr_27763_27813[(2)] = inst_27727);

(statearr_27763_27813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (21))){
var inst_27747 = (state_27754[(2)]);
var state_27754__$1 = (function (){var statearr_27764 = state_27754;
(statearr_27764[(9)] = inst_27747);

return statearr_27764;
})();
var statearr_27765_27814 = state_27754__$1;
(statearr_27765_27814[(2)] = null);

(statearr_27765_27814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (13))){
var inst_27709 = (state_27754[(10)]);
var inst_27711 = cljs.core.chunked_seq_QMARK_.call(null,inst_27709);
var state_27754__$1 = state_27754;
if(inst_27711){
var statearr_27766_27815 = state_27754__$1;
(statearr_27766_27815[(1)] = (16));

} else {
var statearr_27767_27816 = state_27754__$1;
(statearr_27767_27816[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (22))){
var inst_27739 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
if(cljs.core.truth_(inst_27739)){
var statearr_27768_27817 = state_27754__$1;
(statearr_27768_27817[(1)] = (23));

} else {
var statearr_27769_27818 = state_27754__$1;
(statearr_27769_27818[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (6))){
var inst_27733 = (state_27754[(7)]);
var inst_27735 = (state_27754[(11)]);
var inst_27685 = (state_27754[(8)]);
var inst_27733__$1 = topic_fn.call(null,inst_27685);
var inst_27734 = cljs.core.deref.call(null,mults);
var inst_27735__$1 = cljs.core.get.call(null,inst_27734,inst_27733__$1);
var state_27754__$1 = (function (){var statearr_27770 = state_27754;
(statearr_27770[(7)] = inst_27733__$1);

(statearr_27770[(11)] = inst_27735__$1);

return statearr_27770;
})();
if(cljs.core.truth_(inst_27735__$1)){
var statearr_27771_27819 = state_27754__$1;
(statearr_27771_27819[(1)] = (19));

} else {
var statearr_27772_27820 = state_27754__$1;
(statearr_27772_27820[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (25))){
var inst_27744 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27773_27821 = state_27754__$1;
(statearr_27773_27821[(2)] = inst_27744);

(statearr_27773_27821[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (17))){
var inst_27709 = (state_27754[(10)]);
var inst_27718 = cljs.core.first.call(null,inst_27709);
var inst_27719 = cljs.core.async.muxch_STAR_.call(null,inst_27718);
var inst_27720 = cljs.core.async.close_BANG_.call(null,inst_27719);
var inst_27721 = cljs.core.next.call(null,inst_27709);
var inst_27695 = inst_27721;
var inst_27696 = null;
var inst_27697 = (0);
var inst_27698 = (0);
var state_27754__$1 = (function (){var statearr_27774 = state_27754;
(statearr_27774[(12)] = inst_27720);

(statearr_27774[(13)] = inst_27698);

(statearr_27774[(14)] = inst_27696);

(statearr_27774[(15)] = inst_27697);

(statearr_27774[(16)] = inst_27695);

return statearr_27774;
})();
var statearr_27775_27822 = state_27754__$1;
(statearr_27775_27822[(2)] = null);

(statearr_27775_27822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (3))){
var inst_27752 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27754__$1,inst_27752);
} else {
if((state_val_27755 === (12))){
var inst_27729 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27776_27823 = state_27754__$1;
(statearr_27776_27823[(2)] = inst_27729);

(statearr_27776_27823[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (2))){
var state_27754__$1 = state_27754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27754__$1,(4),ch);
} else {
if((state_val_27755 === (23))){
var state_27754__$1 = state_27754;
var statearr_27777_27824 = state_27754__$1;
(statearr_27777_27824[(2)] = null);

(statearr_27777_27824[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (19))){
var inst_27735 = (state_27754[(11)]);
var inst_27685 = (state_27754[(8)]);
var inst_27737 = cljs.core.async.muxch_STAR_.call(null,inst_27735);
var state_27754__$1 = state_27754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27754__$1,(22),inst_27737,inst_27685);
} else {
if((state_val_27755 === (11))){
var inst_27695 = (state_27754[(16)]);
var inst_27709 = (state_27754[(10)]);
var inst_27709__$1 = cljs.core.seq.call(null,inst_27695);
var state_27754__$1 = (function (){var statearr_27778 = state_27754;
(statearr_27778[(10)] = inst_27709__$1);

return statearr_27778;
})();
if(inst_27709__$1){
var statearr_27779_27825 = state_27754__$1;
(statearr_27779_27825[(1)] = (13));

} else {
var statearr_27780_27826 = state_27754__$1;
(statearr_27780_27826[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (9))){
var inst_27731 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27781_27827 = state_27754__$1;
(statearr_27781_27827[(2)] = inst_27731);

(statearr_27781_27827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (5))){
var inst_27692 = cljs.core.deref.call(null,mults);
var inst_27693 = cljs.core.vals.call(null,inst_27692);
var inst_27694 = cljs.core.seq.call(null,inst_27693);
var inst_27695 = inst_27694;
var inst_27696 = null;
var inst_27697 = (0);
var inst_27698 = (0);
var state_27754__$1 = (function (){var statearr_27782 = state_27754;
(statearr_27782[(13)] = inst_27698);

(statearr_27782[(14)] = inst_27696);

(statearr_27782[(15)] = inst_27697);

(statearr_27782[(16)] = inst_27695);

return statearr_27782;
})();
var statearr_27783_27828 = state_27754__$1;
(statearr_27783_27828[(2)] = null);

(statearr_27783_27828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (14))){
var state_27754__$1 = state_27754;
var statearr_27787_27829 = state_27754__$1;
(statearr_27787_27829[(2)] = null);

(statearr_27787_27829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (16))){
var inst_27709 = (state_27754[(10)]);
var inst_27713 = cljs.core.chunk_first.call(null,inst_27709);
var inst_27714 = cljs.core.chunk_rest.call(null,inst_27709);
var inst_27715 = cljs.core.count.call(null,inst_27713);
var inst_27695 = inst_27714;
var inst_27696 = inst_27713;
var inst_27697 = inst_27715;
var inst_27698 = (0);
var state_27754__$1 = (function (){var statearr_27788 = state_27754;
(statearr_27788[(13)] = inst_27698);

(statearr_27788[(14)] = inst_27696);

(statearr_27788[(15)] = inst_27697);

(statearr_27788[(16)] = inst_27695);

return statearr_27788;
})();
var statearr_27789_27830 = state_27754__$1;
(statearr_27789_27830[(2)] = null);

(statearr_27789_27830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (10))){
var inst_27698 = (state_27754[(13)]);
var inst_27696 = (state_27754[(14)]);
var inst_27697 = (state_27754[(15)]);
var inst_27695 = (state_27754[(16)]);
var inst_27703 = cljs.core._nth.call(null,inst_27696,inst_27698);
var inst_27704 = cljs.core.async.muxch_STAR_.call(null,inst_27703);
var inst_27705 = cljs.core.async.close_BANG_.call(null,inst_27704);
var inst_27706 = (inst_27698 + (1));
var tmp27784 = inst_27696;
var tmp27785 = inst_27697;
var tmp27786 = inst_27695;
var inst_27695__$1 = tmp27786;
var inst_27696__$1 = tmp27784;
var inst_27697__$1 = tmp27785;
var inst_27698__$1 = inst_27706;
var state_27754__$1 = (function (){var statearr_27790 = state_27754;
(statearr_27790[(13)] = inst_27698__$1);

(statearr_27790[(14)] = inst_27696__$1);

(statearr_27790[(15)] = inst_27697__$1);

(statearr_27790[(17)] = inst_27705);

(statearr_27790[(16)] = inst_27695__$1);

return statearr_27790;
})();
var statearr_27791_27831 = state_27754__$1;
(statearr_27791_27831[(2)] = null);

(statearr_27791_27831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (18))){
var inst_27724 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27792_27832 = state_27754__$1;
(statearr_27792_27832[(2)] = inst_27724);

(statearr_27792_27832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (8))){
var inst_27698 = (state_27754[(13)]);
var inst_27697 = (state_27754[(15)]);
var inst_27700 = (inst_27698 < inst_27697);
var inst_27701 = inst_27700;
var state_27754__$1 = state_27754;
if(cljs.core.truth_(inst_27701)){
var statearr_27793_27833 = state_27754__$1;
(statearr_27793_27833[(1)] = (10));

} else {
var statearr_27794_27834 = state_27754__$1;
(statearr_27794_27834[(1)] = (11));

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
});})(c__20485__auto___27806,mults,ensure_mult,p))
;
return ((function (switch__20464__auto__,c__20485__auto___27806,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20465__auto__ = null;
var cljs$core$async$state_machine__20465__auto____0 = (function (){
var statearr_27798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27798[(0)] = cljs$core$async$state_machine__20465__auto__);

(statearr_27798[(1)] = (1));

return statearr_27798;
});
var cljs$core$async$state_machine__20465__auto____1 = (function (state_27754){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_27754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e27799){if((e27799 instanceof Object)){
var ex__20468__auto__ = e27799;
var statearr_27800_27835 = state_27754;
(statearr_27800_27835[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27836 = state_27754;
state_27754 = G__27836;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$state_machine__20465__auto__ = function(state_27754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20465__auto____1.call(this,state_27754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20465__auto____0;
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20465__auto____1;
return cljs$core$async$state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto___27806,mults,ensure_mult,p))
})();
var state__20487__auto__ = (function (){var statearr_27801 = f__20486__auto__.call(null);
(statearr_27801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto___27806);

return statearr_27801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto___27806,mults,ensure_mult,p))
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
var args27837 = [];
var len__19530__auto___27840 = arguments.length;
var i__19531__auto___27841 = (0);
while(true){
if((i__19531__auto___27841 < len__19530__auto___27840)){
args27837.push((arguments[i__19531__auto___27841]));

var G__27842 = (i__19531__auto___27841 + (1));
i__19531__auto___27841 = G__27842;
continue;
} else {
}
break;
}

var G__27839 = args27837.length;
switch (G__27839) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27837.length)].join('')));

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
var args27844 = [];
var len__19530__auto___27847 = arguments.length;
var i__19531__auto___27848 = (0);
while(true){
if((i__19531__auto___27848 < len__19530__auto___27847)){
args27844.push((arguments[i__19531__auto___27848]));

var G__27849 = (i__19531__auto___27848 + (1));
i__19531__auto___27848 = G__27849;
continue;
} else {
}
break;
}

var G__27846 = args27844.length;
switch (G__27846) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27844.length)].join('')));

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
var args27851 = [];
var len__19530__auto___27922 = arguments.length;
var i__19531__auto___27923 = (0);
while(true){
if((i__19531__auto___27923 < len__19530__auto___27922)){
args27851.push((arguments[i__19531__auto___27923]));

var G__27924 = (i__19531__auto___27923 + (1));
i__19531__auto___27923 = G__27924;
continue;
} else {
}
break;
}

var G__27853 = args27851.length;
switch (G__27853) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27851.length)].join('')));

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
var c__20485__auto___27926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto___27926,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto___27926,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27892){
var state_val_27893 = (state_27892[(1)]);
if((state_val_27893 === (7))){
var state_27892__$1 = state_27892;
var statearr_27894_27927 = state_27892__$1;
(statearr_27894_27927[(2)] = null);

(statearr_27894_27927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (1))){
var state_27892__$1 = state_27892;
var statearr_27895_27928 = state_27892__$1;
(statearr_27895_27928[(2)] = null);

(statearr_27895_27928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (4))){
var inst_27856 = (state_27892[(7)]);
var inst_27858 = (inst_27856 < cnt);
var state_27892__$1 = state_27892;
if(cljs.core.truth_(inst_27858)){
var statearr_27896_27929 = state_27892__$1;
(statearr_27896_27929[(1)] = (6));

} else {
var statearr_27897_27930 = state_27892__$1;
(statearr_27897_27930[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (15))){
var inst_27888 = (state_27892[(2)]);
var state_27892__$1 = state_27892;
var statearr_27898_27931 = state_27892__$1;
(statearr_27898_27931[(2)] = inst_27888);

(statearr_27898_27931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (13))){
var inst_27881 = cljs.core.async.close_BANG_.call(null,out);
var state_27892__$1 = state_27892;
var statearr_27899_27932 = state_27892__$1;
(statearr_27899_27932[(2)] = inst_27881);

(statearr_27899_27932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (6))){
var state_27892__$1 = state_27892;
var statearr_27900_27933 = state_27892__$1;
(statearr_27900_27933[(2)] = null);

(statearr_27900_27933[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (3))){
var inst_27890 = (state_27892[(2)]);
var state_27892__$1 = state_27892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27892__$1,inst_27890);
} else {
if((state_val_27893 === (12))){
var inst_27878 = (state_27892[(8)]);
var inst_27878__$1 = (state_27892[(2)]);
var inst_27879 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27878__$1);
var state_27892__$1 = (function (){var statearr_27901 = state_27892;
(statearr_27901[(8)] = inst_27878__$1);

return statearr_27901;
})();
if(cljs.core.truth_(inst_27879)){
var statearr_27902_27934 = state_27892__$1;
(statearr_27902_27934[(1)] = (13));

} else {
var statearr_27903_27935 = state_27892__$1;
(statearr_27903_27935[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (2))){
var inst_27855 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27856 = (0);
var state_27892__$1 = (function (){var statearr_27904 = state_27892;
(statearr_27904[(7)] = inst_27856);

(statearr_27904[(9)] = inst_27855);

return statearr_27904;
})();
var statearr_27905_27936 = state_27892__$1;
(statearr_27905_27936[(2)] = null);

(statearr_27905_27936[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (11))){
var inst_27856 = (state_27892[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27892,(10),Object,null,(9));
var inst_27865 = chs__$1.call(null,inst_27856);
var inst_27866 = done.call(null,inst_27856);
var inst_27867 = cljs.core.async.take_BANG_.call(null,inst_27865,inst_27866);
var state_27892__$1 = state_27892;
var statearr_27906_27937 = state_27892__$1;
(statearr_27906_27937[(2)] = inst_27867);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27892__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (9))){
var inst_27856 = (state_27892[(7)]);
var inst_27869 = (state_27892[(2)]);
var inst_27870 = (inst_27856 + (1));
var inst_27856__$1 = inst_27870;
var state_27892__$1 = (function (){var statearr_27907 = state_27892;
(statearr_27907[(7)] = inst_27856__$1);

(statearr_27907[(10)] = inst_27869);

return statearr_27907;
})();
var statearr_27908_27938 = state_27892__$1;
(statearr_27908_27938[(2)] = null);

(statearr_27908_27938[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (5))){
var inst_27876 = (state_27892[(2)]);
var state_27892__$1 = (function (){var statearr_27909 = state_27892;
(statearr_27909[(11)] = inst_27876);

return statearr_27909;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27892__$1,(12),dchan);
} else {
if((state_val_27893 === (14))){
var inst_27878 = (state_27892[(8)]);
var inst_27883 = cljs.core.apply.call(null,f,inst_27878);
var state_27892__$1 = state_27892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27892__$1,(16),out,inst_27883);
} else {
if((state_val_27893 === (16))){
var inst_27885 = (state_27892[(2)]);
var state_27892__$1 = (function (){var statearr_27910 = state_27892;
(statearr_27910[(12)] = inst_27885);

return statearr_27910;
})();
var statearr_27911_27939 = state_27892__$1;
(statearr_27911_27939[(2)] = null);

(statearr_27911_27939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (10))){
var inst_27860 = (state_27892[(2)]);
var inst_27861 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27892__$1 = (function (){var statearr_27912 = state_27892;
(statearr_27912[(13)] = inst_27860);

return statearr_27912;
})();
var statearr_27913_27940 = state_27892__$1;
(statearr_27913_27940[(2)] = inst_27861);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27892__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (8))){
var inst_27874 = (state_27892[(2)]);
var state_27892__$1 = state_27892;
var statearr_27914_27941 = state_27892__$1;
(statearr_27914_27941[(2)] = inst_27874);

(statearr_27914_27941[(1)] = (5));


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
});})(c__20485__auto___27926,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20464__auto__,c__20485__auto___27926,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20465__auto__ = null;
var cljs$core$async$state_machine__20465__auto____0 = (function (){
var statearr_27918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27918[(0)] = cljs$core$async$state_machine__20465__auto__);

(statearr_27918[(1)] = (1));

return statearr_27918;
});
var cljs$core$async$state_machine__20465__auto____1 = (function (state_27892){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_27892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e27919){if((e27919 instanceof Object)){
var ex__20468__auto__ = e27919;
var statearr_27920_27942 = state_27892;
(statearr_27920_27942[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27943 = state_27892;
state_27892 = G__27943;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$state_machine__20465__auto__ = function(state_27892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20465__auto____1.call(this,state_27892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20465__auto____0;
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20465__auto____1;
return cljs$core$async$state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto___27926,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20487__auto__ = (function (){var statearr_27921 = f__20486__auto__.call(null);
(statearr_27921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto___27926);

return statearr_27921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto___27926,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args27945 = [];
var len__19530__auto___28001 = arguments.length;
var i__19531__auto___28002 = (0);
while(true){
if((i__19531__auto___28002 < len__19530__auto___28001)){
args27945.push((arguments[i__19531__auto___28002]));

var G__28003 = (i__19531__auto___28002 + (1));
i__19531__auto___28002 = G__28003;
continue;
} else {
}
break;
}

var G__27947 = args27945.length;
switch (G__27947) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27945.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20485__auto___28005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto___28005,out){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto___28005,out){
return (function (state_27977){
var state_val_27978 = (state_27977[(1)]);
if((state_val_27978 === (7))){
var inst_27956 = (state_27977[(7)]);
var inst_27957 = (state_27977[(8)]);
var inst_27956__$1 = (state_27977[(2)]);
var inst_27957__$1 = cljs.core.nth.call(null,inst_27956__$1,(0),null);
var inst_27958 = cljs.core.nth.call(null,inst_27956__$1,(1),null);
var inst_27959 = (inst_27957__$1 == null);
var state_27977__$1 = (function (){var statearr_27979 = state_27977;
(statearr_27979[(7)] = inst_27956__$1);

(statearr_27979[(8)] = inst_27957__$1);

(statearr_27979[(9)] = inst_27958);

return statearr_27979;
})();
if(cljs.core.truth_(inst_27959)){
var statearr_27980_28006 = state_27977__$1;
(statearr_27980_28006[(1)] = (8));

} else {
var statearr_27981_28007 = state_27977__$1;
(statearr_27981_28007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (1))){
var inst_27948 = cljs.core.vec.call(null,chs);
var inst_27949 = inst_27948;
var state_27977__$1 = (function (){var statearr_27982 = state_27977;
(statearr_27982[(10)] = inst_27949);

return statearr_27982;
})();
var statearr_27983_28008 = state_27977__$1;
(statearr_27983_28008[(2)] = null);

(statearr_27983_28008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (4))){
var inst_27949 = (state_27977[(10)]);
var state_27977__$1 = state_27977;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27977__$1,(7),inst_27949);
} else {
if((state_val_27978 === (6))){
var inst_27973 = (state_27977[(2)]);
var state_27977__$1 = state_27977;
var statearr_27984_28009 = state_27977__$1;
(statearr_27984_28009[(2)] = inst_27973);

(statearr_27984_28009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (3))){
var inst_27975 = (state_27977[(2)]);
var state_27977__$1 = state_27977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27977__$1,inst_27975);
} else {
if((state_val_27978 === (2))){
var inst_27949 = (state_27977[(10)]);
var inst_27951 = cljs.core.count.call(null,inst_27949);
var inst_27952 = (inst_27951 > (0));
var state_27977__$1 = state_27977;
if(cljs.core.truth_(inst_27952)){
var statearr_27986_28010 = state_27977__$1;
(statearr_27986_28010[(1)] = (4));

} else {
var statearr_27987_28011 = state_27977__$1;
(statearr_27987_28011[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (11))){
var inst_27949 = (state_27977[(10)]);
var inst_27966 = (state_27977[(2)]);
var tmp27985 = inst_27949;
var inst_27949__$1 = tmp27985;
var state_27977__$1 = (function (){var statearr_27988 = state_27977;
(statearr_27988[(10)] = inst_27949__$1);

(statearr_27988[(11)] = inst_27966);

return statearr_27988;
})();
var statearr_27989_28012 = state_27977__$1;
(statearr_27989_28012[(2)] = null);

(statearr_27989_28012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (9))){
var inst_27957 = (state_27977[(8)]);
var state_27977__$1 = state_27977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27977__$1,(11),out,inst_27957);
} else {
if((state_val_27978 === (5))){
var inst_27971 = cljs.core.async.close_BANG_.call(null,out);
var state_27977__$1 = state_27977;
var statearr_27990_28013 = state_27977__$1;
(statearr_27990_28013[(2)] = inst_27971);

(statearr_27990_28013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (10))){
var inst_27969 = (state_27977[(2)]);
var state_27977__$1 = state_27977;
var statearr_27991_28014 = state_27977__$1;
(statearr_27991_28014[(2)] = inst_27969);

(statearr_27991_28014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (8))){
var inst_27956 = (state_27977[(7)]);
var inst_27949 = (state_27977[(10)]);
var inst_27957 = (state_27977[(8)]);
var inst_27958 = (state_27977[(9)]);
var inst_27961 = (function (){var cs = inst_27949;
var vec__27954 = inst_27956;
var v = inst_27957;
var c = inst_27958;
return ((function (cs,vec__27954,v,c,inst_27956,inst_27949,inst_27957,inst_27958,state_val_27978,c__20485__auto___28005,out){
return (function (p1__27944_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27944_SHARP_);
});
;})(cs,vec__27954,v,c,inst_27956,inst_27949,inst_27957,inst_27958,state_val_27978,c__20485__auto___28005,out))
})();
var inst_27962 = cljs.core.filterv.call(null,inst_27961,inst_27949);
var inst_27949__$1 = inst_27962;
var state_27977__$1 = (function (){var statearr_27992 = state_27977;
(statearr_27992[(10)] = inst_27949__$1);

return statearr_27992;
})();
var statearr_27993_28015 = state_27977__$1;
(statearr_27993_28015[(2)] = null);

(statearr_27993_28015[(1)] = (2));


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
});})(c__20485__auto___28005,out))
;
return ((function (switch__20464__auto__,c__20485__auto___28005,out){
return (function() {
var cljs$core$async$state_machine__20465__auto__ = null;
var cljs$core$async$state_machine__20465__auto____0 = (function (){
var statearr_27997 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27997[(0)] = cljs$core$async$state_machine__20465__auto__);

(statearr_27997[(1)] = (1));

return statearr_27997;
});
var cljs$core$async$state_machine__20465__auto____1 = (function (state_27977){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_27977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e27998){if((e27998 instanceof Object)){
var ex__20468__auto__ = e27998;
var statearr_27999_28016 = state_27977;
(statearr_27999_28016[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28017 = state_27977;
state_27977 = G__28017;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$state_machine__20465__auto__ = function(state_27977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20465__auto____1.call(this,state_27977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20465__auto____0;
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20465__auto____1;
return cljs$core$async$state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto___28005,out))
})();
var state__20487__auto__ = (function (){var statearr_28000 = f__20486__auto__.call(null);
(statearr_28000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto___28005);

return statearr_28000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto___28005,out))
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
var args28018 = [];
var len__19530__auto___28067 = arguments.length;
var i__19531__auto___28068 = (0);
while(true){
if((i__19531__auto___28068 < len__19530__auto___28067)){
args28018.push((arguments[i__19531__auto___28068]));

var G__28069 = (i__19531__auto___28068 + (1));
i__19531__auto___28068 = G__28069;
continue;
} else {
}
break;
}

var G__28020 = args28018.length;
switch (G__28020) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28018.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20485__auto___28071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto___28071,out){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto___28071,out){
return (function (state_28044){
var state_val_28045 = (state_28044[(1)]);
if((state_val_28045 === (7))){
var inst_28026 = (state_28044[(7)]);
var inst_28026__$1 = (state_28044[(2)]);
var inst_28027 = (inst_28026__$1 == null);
var inst_28028 = cljs.core.not.call(null,inst_28027);
var state_28044__$1 = (function (){var statearr_28046 = state_28044;
(statearr_28046[(7)] = inst_28026__$1);

return statearr_28046;
})();
if(inst_28028){
var statearr_28047_28072 = state_28044__$1;
(statearr_28047_28072[(1)] = (8));

} else {
var statearr_28048_28073 = state_28044__$1;
(statearr_28048_28073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28045 === (1))){
var inst_28021 = (0);
var state_28044__$1 = (function (){var statearr_28049 = state_28044;
(statearr_28049[(8)] = inst_28021);

return statearr_28049;
})();
var statearr_28050_28074 = state_28044__$1;
(statearr_28050_28074[(2)] = null);

(statearr_28050_28074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28045 === (4))){
var state_28044__$1 = state_28044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28044__$1,(7),ch);
} else {
if((state_val_28045 === (6))){
var inst_28039 = (state_28044[(2)]);
var state_28044__$1 = state_28044;
var statearr_28051_28075 = state_28044__$1;
(statearr_28051_28075[(2)] = inst_28039);

(statearr_28051_28075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28045 === (3))){
var inst_28041 = (state_28044[(2)]);
var inst_28042 = cljs.core.async.close_BANG_.call(null,out);
var state_28044__$1 = (function (){var statearr_28052 = state_28044;
(statearr_28052[(9)] = inst_28041);

return statearr_28052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28044__$1,inst_28042);
} else {
if((state_val_28045 === (2))){
var inst_28021 = (state_28044[(8)]);
var inst_28023 = (inst_28021 < n);
var state_28044__$1 = state_28044;
if(cljs.core.truth_(inst_28023)){
var statearr_28053_28076 = state_28044__$1;
(statearr_28053_28076[(1)] = (4));

} else {
var statearr_28054_28077 = state_28044__$1;
(statearr_28054_28077[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28045 === (11))){
var inst_28021 = (state_28044[(8)]);
var inst_28031 = (state_28044[(2)]);
var inst_28032 = (inst_28021 + (1));
var inst_28021__$1 = inst_28032;
var state_28044__$1 = (function (){var statearr_28055 = state_28044;
(statearr_28055[(8)] = inst_28021__$1);

(statearr_28055[(10)] = inst_28031);

return statearr_28055;
})();
var statearr_28056_28078 = state_28044__$1;
(statearr_28056_28078[(2)] = null);

(statearr_28056_28078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28045 === (9))){
var state_28044__$1 = state_28044;
var statearr_28057_28079 = state_28044__$1;
(statearr_28057_28079[(2)] = null);

(statearr_28057_28079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28045 === (5))){
var state_28044__$1 = state_28044;
var statearr_28058_28080 = state_28044__$1;
(statearr_28058_28080[(2)] = null);

(statearr_28058_28080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28045 === (10))){
var inst_28036 = (state_28044[(2)]);
var state_28044__$1 = state_28044;
var statearr_28059_28081 = state_28044__$1;
(statearr_28059_28081[(2)] = inst_28036);

(statearr_28059_28081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28045 === (8))){
var inst_28026 = (state_28044[(7)]);
var state_28044__$1 = state_28044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28044__$1,(11),out,inst_28026);
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
});})(c__20485__auto___28071,out))
;
return ((function (switch__20464__auto__,c__20485__auto___28071,out){
return (function() {
var cljs$core$async$state_machine__20465__auto__ = null;
var cljs$core$async$state_machine__20465__auto____0 = (function (){
var statearr_28063 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28063[(0)] = cljs$core$async$state_machine__20465__auto__);

(statearr_28063[(1)] = (1));

return statearr_28063;
});
var cljs$core$async$state_machine__20465__auto____1 = (function (state_28044){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_28044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e28064){if((e28064 instanceof Object)){
var ex__20468__auto__ = e28064;
var statearr_28065_28082 = state_28044;
(statearr_28065_28082[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28083 = state_28044;
state_28044 = G__28083;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$state_machine__20465__auto__ = function(state_28044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20465__auto____1.call(this,state_28044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20465__auto____0;
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20465__auto____1;
return cljs$core$async$state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto___28071,out))
})();
var state__20487__auto__ = (function (){var statearr_28066 = f__20486__auto__.call(null);
(statearr_28066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto___28071);

return statearr_28066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto___28071,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28091 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28091 = (function (map_LT_,f,ch,meta28092){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28092 = meta28092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28093,meta28092__$1){
var self__ = this;
var _28093__$1 = this;
return (new cljs.core.async.t_cljs$core$async28091(self__.map_LT_,self__.f,self__.ch,meta28092__$1));
});

cljs.core.async.t_cljs$core$async28091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28093){
var self__ = this;
var _28093__$1 = this;
return self__.meta28092;
});

cljs.core.async.t_cljs$core$async28091.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28091.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28091.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28091.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28091.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28094 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28094 = (function (map_LT_,f,ch,meta28092,_,fn1,meta28095){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28092 = meta28092;
this._ = _;
this.fn1 = fn1;
this.meta28095 = meta28095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28096,meta28095__$1){
var self__ = this;
var _28096__$1 = this;
return (new cljs.core.async.t_cljs$core$async28094(self__.map_LT_,self__.f,self__.ch,self__.meta28092,self__._,self__.fn1,meta28095__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28094.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28096){
var self__ = this;
var _28096__$1 = this;
return self__.meta28095;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28094.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28094.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28094.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28094.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28084_SHARP_){
return f1.call(null,(((p1__28084_SHARP_ == null))?null:self__.f.call(null,p1__28084_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28094.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28092","meta28092",-608901634,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28091","cljs.core.async/t_cljs$core$async28091",1900774499,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28095","meta28095",-1264971464,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28094.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28094";

cljs.core.async.t_cljs$core$async28094.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async28094");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28094 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28094(map_LT___$1,f__$1,ch__$1,meta28092__$1,___$2,fn1__$1,meta28095){
return (new cljs.core.async.t_cljs$core$async28094(map_LT___$1,f__$1,ch__$1,meta28092__$1,___$2,fn1__$1,meta28095));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28094(self__.map_LT_,self__.f,self__.ch,self__.meta28092,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async28091.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28091.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28092","meta28092",-608901634,null)], null);
});

cljs.core.async.t_cljs$core$async28091.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28091";

cljs.core.async.t_cljs$core$async28091.cljs$lang$ctorPrWriter = (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async28091");
});

cljs.core.async.__GT_t_cljs$core$async28091 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28091(map_LT___$1,f__$1,ch__$1,meta28092){
return (new cljs.core.async.t_cljs$core$async28091(map_LT___$1,f__$1,ch__$1,meta28092));
});

}

return (new cljs.core.async.t_cljs$core$async28091(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28100 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28100 = (function (map_GT_,f,ch,meta28101){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28101 = meta28101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28102,meta28101__$1){
var self__ = this;
var _28102__$1 = this;
return (new cljs.core.async.t_cljs$core$async28100(self__.map_GT_,self__.f,self__.ch,meta28101__$1));
});

cljs.core.async.t_cljs$core$async28100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28102){
var self__ = this;
var _28102__$1 = this;
return self__.meta28101;
});

cljs.core.async.t_cljs$core$async28100.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28100.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28100.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28100.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28100.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28100.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28101","meta28101",-1975886889,null)], null);
});

cljs.core.async.t_cljs$core$async28100.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28100";

cljs.core.async.t_cljs$core$async28100.cljs$lang$ctorPrWriter = (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async28100");
});

cljs.core.async.__GT_t_cljs$core$async28100 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28100(map_GT___$1,f__$1,ch__$1,meta28101){
return (new cljs.core.async.t_cljs$core$async28100(map_GT___$1,f__$1,ch__$1,meta28101));
});

}

return (new cljs.core.async.t_cljs$core$async28100(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28106 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28106 = (function (filter_GT_,p,ch,meta28107){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28107 = meta28107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28108,meta28107__$1){
var self__ = this;
var _28108__$1 = this;
return (new cljs.core.async.t_cljs$core$async28106(self__.filter_GT_,self__.p,self__.ch,meta28107__$1));
});

cljs.core.async.t_cljs$core$async28106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28108){
var self__ = this;
var _28108__$1 = this;
return self__.meta28107;
});

cljs.core.async.t_cljs$core$async28106.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28106.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28106.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28106.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28106.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28106.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28106.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28107","meta28107",1593994095,null)], null);
});

cljs.core.async.t_cljs$core$async28106.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28106";

cljs.core.async.t_cljs$core$async28106.cljs$lang$ctorPrWriter = (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"cljs.core.async/t_cljs$core$async28106");
});

cljs.core.async.__GT_t_cljs$core$async28106 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28106(filter_GT___$1,p__$1,ch__$1,meta28107){
return (new cljs.core.async.t_cljs$core$async28106(filter_GT___$1,p__$1,ch__$1,meta28107));
});

}

return (new cljs.core.async.t_cljs$core$async28106(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args28109 = [];
var len__19530__auto___28153 = arguments.length;
var i__19531__auto___28154 = (0);
while(true){
if((i__19531__auto___28154 < len__19530__auto___28153)){
args28109.push((arguments[i__19531__auto___28154]));

var G__28155 = (i__19531__auto___28154 + (1));
i__19531__auto___28154 = G__28155;
continue;
} else {
}
break;
}

var G__28111 = args28109.length;
switch (G__28111) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28109.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20485__auto___28157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto___28157,out){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto___28157,out){
return (function (state_28132){
var state_val_28133 = (state_28132[(1)]);
if((state_val_28133 === (7))){
var inst_28128 = (state_28132[(2)]);
var state_28132__$1 = state_28132;
var statearr_28134_28158 = state_28132__$1;
(statearr_28134_28158[(2)] = inst_28128);

(statearr_28134_28158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28133 === (1))){
var state_28132__$1 = state_28132;
var statearr_28135_28159 = state_28132__$1;
(statearr_28135_28159[(2)] = null);

(statearr_28135_28159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28133 === (4))){
var inst_28114 = (state_28132[(7)]);
var inst_28114__$1 = (state_28132[(2)]);
var inst_28115 = (inst_28114__$1 == null);
var state_28132__$1 = (function (){var statearr_28136 = state_28132;
(statearr_28136[(7)] = inst_28114__$1);

return statearr_28136;
})();
if(cljs.core.truth_(inst_28115)){
var statearr_28137_28160 = state_28132__$1;
(statearr_28137_28160[(1)] = (5));

} else {
var statearr_28138_28161 = state_28132__$1;
(statearr_28138_28161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28133 === (6))){
var inst_28114 = (state_28132[(7)]);
var inst_28119 = p.call(null,inst_28114);
var state_28132__$1 = state_28132;
if(cljs.core.truth_(inst_28119)){
var statearr_28139_28162 = state_28132__$1;
(statearr_28139_28162[(1)] = (8));

} else {
var statearr_28140_28163 = state_28132__$1;
(statearr_28140_28163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28133 === (3))){
var inst_28130 = (state_28132[(2)]);
var state_28132__$1 = state_28132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28132__$1,inst_28130);
} else {
if((state_val_28133 === (2))){
var state_28132__$1 = state_28132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28132__$1,(4),ch);
} else {
if((state_val_28133 === (11))){
var inst_28122 = (state_28132[(2)]);
var state_28132__$1 = state_28132;
var statearr_28141_28164 = state_28132__$1;
(statearr_28141_28164[(2)] = inst_28122);

(statearr_28141_28164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28133 === (9))){
var state_28132__$1 = state_28132;
var statearr_28142_28165 = state_28132__$1;
(statearr_28142_28165[(2)] = null);

(statearr_28142_28165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28133 === (5))){
var inst_28117 = cljs.core.async.close_BANG_.call(null,out);
var state_28132__$1 = state_28132;
var statearr_28143_28166 = state_28132__$1;
(statearr_28143_28166[(2)] = inst_28117);

(statearr_28143_28166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28133 === (10))){
var inst_28125 = (state_28132[(2)]);
var state_28132__$1 = (function (){var statearr_28144 = state_28132;
(statearr_28144[(8)] = inst_28125);

return statearr_28144;
})();
var statearr_28145_28167 = state_28132__$1;
(statearr_28145_28167[(2)] = null);

(statearr_28145_28167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28133 === (8))){
var inst_28114 = (state_28132[(7)]);
var state_28132__$1 = state_28132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28132__$1,(11),out,inst_28114);
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
});})(c__20485__auto___28157,out))
;
return ((function (switch__20464__auto__,c__20485__auto___28157,out){
return (function() {
var cljs$core$async$state_machine__20465__auto__ = null;
var cljs$core$async$state_machine__20465__auto____0 = (function (){
var statearr_28149 = [null,null,null,null,null,null,null,null,null];
(statearr_28149[(0)] = cljs$core$async$state_machine__20465__auto__);

(statearr_28149[(1)] = (1));

return statearr_28149;
});
var cljs$core$async$state_machine__20465__auto____1 = (function (state_28132){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_28132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e28150){if((e28150 instanceof Object)){
var ex__20468__auto__ = e28150;
var statearr_28151_28168 = state_28132;
(statearr_28151_28168[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28169 = state_28132;
state_28132 = G__28169;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$state_machine__20465__auto__ = function(state_28132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20465__auto____1.call(this,state_28132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20465__auto____0;
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20465__auto____1;
return cljs$core$async$state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto___28157,out))
})();
var state__20487__auto__ = (function (){var statearr_28152 = f__20486__auto__.call(null);
(statearr_28152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto___28157);

return statearr_28152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto___28157,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28170 = [];
var len__19530__auto___28173 = arguments.length;
var i__19531__auto___28174 = (0);
while(true){
if((i__19531__auto___28174 < len__19530__auto___28173)){
args28170.push((arguments[i__19531__auto___28174]));

var G__28175 = (i__19531__auto___28174 + (1));
i__19531__auto___28174 = G__28175;
continue;
} else {
}
break;
}

var G__28172 = args28170.length;
switch (G__28172) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28170.length)].join('')));

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
var c__20485__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto__){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto__){
return (function (state_28342){
var state_val_28343 = (state_28342[(1)]);
if((state_val_28343 === (7))){
var inst_28338 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28344_28385 = state_28342__$1;
(statearr_28344_28385[(2)] = inst_28338);

(statearr_28344_28385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (20))){
var inst_28308 = (state_28342[(7)]);
var inst_28319 = (state_28342[(2)]);
var inst_28320 = cljs.core.next.call(null,inst_28308);
var inst_28294 = inst_28320;
var inst_28295 = null;
var inst_28296 = (0);
var inst_28297 = (0);
var state_28342__$1 = (function (){var statearr_28345 = state_28342;
(statearr_28345[(8)] = inst_28296);

(statearr_28345[(9)] = inst_28297);

(statearr_28345[(10)] = inst_28294);

(statearr_28345[(11)] = inst_28295);

(statearr_28345[(12)] = inst_28319);

return statearr_28345;
})();
var statearr_28346_28386 = state_28342__$1;
(statearr_28346_28386[(2)] = null);

(statearr_28346_28386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (1))){
var state_28342__$1 = state_28342;
var statearr_28347_28387 = state_28342__$1;
(statearr_28347_28387[(2)] = null);

(statearr_28347_28387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (4))){
var inst_28283 = (state_28342[(13)]);
var inst_28283__$1 = (state_28342[(2)]);
var inst_28284 = (inst_28283__$1 == null);
var state_28342__$1 = (function (){var statearr_28348 = state_28342;
(statearr_28348[(13)] = inst_28283__$1);

return statearr_28348;
})();
if(cljs.core.truth_(inst_28284)){
var statearr_28349_28388 = state_28342__$1;
(statearr_28349_28388[(1)] = (5));

} else {
var statearr_28350_28389 = state_28342__$1;
(statearr_28350_28389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (15))){
var state_28342__$1 = state_28342;
var statearr_28354_28390 = state_28342__$1;
(statearr_28354_28390[(2)] = null);

(statearr_28354_28390[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (21))){
var state_28342__$1 = state_28342;
var statearr_28355_28391 = state_28342__$1;
(statearr_28355_28391[(2)] = null);

(statearr_28355_28391[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (13))){
var inst_28296 = (state_28342[(8)]);
var inst_28297 = (state_28342[(9)]);
var inst_28294 = (state_28342[(10)]);
var inst_28295 = (state_28342[(11)]);
var inst_28304 = (state_28342[(2)]);
var inst_28305 = (inst_28297 + (1));
var tmp28351 = inst_28296;
var tmp28352 = inst_28294;
var tmp28353 = inst_28295;
var inst_28294__$1 = tmp28352;
var inst_28295__$1 = tmp28353;
var inst_28296__$1 = tmp28351;
var inst_28297__$1 = inst_28305;
var state_28342__$1 = (function (){var statearr_28356 = state_28342;
(statearr_28356[(8)] = inst_28296__$1);

(statearr_28356[(9)] = inst_28297__$1);

(statearr_28356[(10)] = inst_28294__$1);

(statearr_28356[(14)] = inst_28304);

(statearr_28356[(11)] = inst_28295__$1);

return statearr_28356;
})();
var statearr_28357_28392 = state_28342__$1;
(statearr_28357_28392[(2)] = null);

(statearr_28357_28392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (22))){
var state_28342__$1 = state_28342;
var statearr_28358_28393 = state_28342__$1;
(statearr_28358_28393[(2)] = null);

(statearr_28358_28393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (6))){
var inst_28283 = (state_28342[(13)]);
var inst_28292 = f.call(null,inst_28283);
var inst_28293 = cljs.core.seq.call(null,inst_28292);
var inst_28294 = inst_28293;
var inst_28295 = null;
var inst_28296 = (0);
var inst_28297 = (0);
var state_28342__$1 = (function (){var statearr_28359 = state_28342;
(statearr_28359[(8)] = inst_28296);

(statearr_28359[(9)] = inst_28297);

(statearr_28359[(10)] = inst_28294);

(statearr_28359[(11)] = inst_28295);

return statearr_28359;
})();
var statearr_28360_28394 = state_28342__$1;
(statearr_28360_28394[(2)] = null);

(statearr_28360_28394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (17))){
var inst_28308 = (state_28342[(7)]);
var inst_28312 = cljs.core.chunk_first.call(null,inst_28308);
var inst_28313 = cljs.core.chunk_rest.call(null,inst_28308);
var inst_28314 = cljs.core.count.call(null,inst_28312);
var inst_28294 = inst_28313;
var inst_28295 = inst_28312;
var inst_28296 = inst_28314;
var inst_28297 = (0);
var state_28342__$1 = (function (){var statearr_28361 = state_28342;
(statearr_28361[(8)] = inst_28296);

(statearr_28361[(9)] = inst_28297);

(statearr_28361[(10)] = inst_28294);

(statearr_28361[(11)] = inst_28295);

return statearr_28361;
})();
var statearr_28362_28395 = state_28342__$1;
(statearr_28362_28395[(2)] = null);

(statearr_28362_28395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (3))){
var inst_28340 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28342__$1,inst_28340);
} else {
if((state_val_28343 === (12))){
var inst_28328 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28363_28396 = state_28342__$1;
(statearr_28363_28396[(2)] = inst_28328);

(statearr_28363_28396[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (2))){
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28342__$1,(4),in$);
} else {
if((state_val_28343 === (23))){
var inst_28336 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28364_28397 = state_28342__$1;
(statearr_28364_28397[(2)] = inst_28336);

(statearr_28364_28397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (19))){
var inst_28323 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28365_28398 = state_28342__$1;
(statearr_28365_28398[(2)] = inst_28323);

(statearr_28365_28398[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (11))){
var inst_28294 = (state_28342[(10)]);
var inst_28308 = (state_28342[(7)]);
var inst_28308__$1 = cljs.core.seq.call(null,inst_28294);
var state_28342__$1 = (function (){var statearr_28366 = state_28342;
(statearr_28366[(7)] = inst_28308__$1);

return statearr_28366;
})();
if(inst_28308__$1){
var statearr_28367_28399 = state_28342__$1;
(statearr_28367_28399[(1)] = (14));

} else {
var statearr_28368_28400 = state_28342__$1;
(statearr_28368_28400[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (9))){
var inst_28330 = (state_28342[(2)]);
var inst_28331 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28342__$1 = (function (){var statearr_28369 = state_28342;
(statearr_28369[(15)] = inst_28330);

return statearr_28369;
})();
if(cljs.core.truth_(inst_28331)){
var statearr_28370_28401 = state_28342__$1;
(statearr_28370_28401[(1)] = (21));

} else {
var statearr_28371_28402 = state_28342__$1;
(statearr_28371_28402[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (5))){
var inst_28286 = cljs.core.async.close_BANG_.call(null,out);
var state_28342__$1 = state_28342;
var statearr_28372_28403 = state_28342__$1;
(statearr_28372_28403[(2)] = inst_28286);

(statearr_28372_28403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (14))){
var inst_28308 = (state_28342[(7)]);
var inst_28310 = cljs.core.chunked_seq_QMARK_.call(null,inst_28308);
var state_28342__$1 = state_28342;
if(inst_28310){
var statearr_28373_28404 = state_28342__$1;
(statearr_28373_28404[(1)] = (17));

} else {
var statearr_28374_28405 = state_28342__$1;
(statearr_28374_28405[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (16))){
var inst_28326 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28375_28406 = state_28342__$1;
(statearr_28375_28406[(2)] = inst_28326);

(statearr_28375_28406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (10))){
var inst_28297 = (state_28342[(9)]);
var inst_28295 = (state_28342[(11)]);
var inst_28302 = cljs.core._nth.call(null,inst_28295,inst_28297);
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28342__$1,(13),out,inst_28302);
} else {
if((state_val_28343 === (18))){
var inst_28308 = (state_28342[(7)]);
var inst_28317 = cljs.core.first.call(null,inst_28308);
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28342__$1,(20),out,inst_28317);
} else {
if((state_val_28343 === (8))){
var inst_28296 = (state_28342[(8)]);
var inst_28297 = (state_28342[(9)]);
var inst_28299 = (inst_28297 < inst_28296);
var inst_28300 = inst_28299;
var state_28342__$1 = state_28342;
if(cljs.core.truth_(inst_28300)){
var statearr_28376_28407 = state_28342__$1;
(statearr_28376_28407[(1)] = (10));

} else {
var statearr_28377_28408 = state_28342__$1;
(statearr_28377_28408[(1)] = (11));

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
});})(c__20485__auto__))
;
return ((function (switch__20464__auto__,c__20485__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20465__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20465__auto____0 = (function (){
var statearr_28381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28381[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20465__auto__);

(statearr_28381[(1)] = (1));

return statearr_28381;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20465__auto____1 = (function (state_28342){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_28342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e28382){if((e28382 instanceof Object)){
var ex__20468__auto__ = e28382;
var statearr_28383_28409 = state_28342;
(statearr_28383_28409[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28410 = state_28342;
state_28342 = G__28410;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20465__auto__ = function(state_28342){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20465__auto____1.call(this,state_28342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20465__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20465__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto__))
})();
var state__20487__auto__ = (function (){var statearr_28384 = f__20486__auto__.call(null);
(statearr_28384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto__);

return statearr_28384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto__))
);

return c__20485__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28411 = [];
var len__19530__auto___28414 = arguments.length;
var i__19531__auto___28415 = (0);
while(true){
if((i__19531__auto___28415 < len__19530__auto___28414)){
args28411.push((arguments[i__19531__auto___28415]));

var G__28416 = (i__19531__auto___28415 + (1));
i__19531__auto___28415 = G__28416;
continue;
} else {
}
break;
}

var G__28413 = args28411.length;
switch (G__28413) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28411.length)].join('')));

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
var args28418 = [];
var len__19530__auto___28421 = arguments.length;
var i__19531__auto___28422 = (0);
while(true){
if((i__19531__auto___28422 < len__19530__auto___28421)){
args28418.push((arguments[i__19531__auto___28422]));

var G__28423 = (i__19531__auto___28422 + (1));
i__19531__auto___28422 = G__28423;
continue;
} else {
}
break;
}

var G__28420 = args28418.length;
switch (G__28420) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28418.length)].join('')));

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
var args28425 = [];
var len__19530__auto___28476 = arguments.length;
var i__19531__auto___28477 = (0);
while(true){
if((i__19531__auto___28477 < len__19530__auto___28476)){
args28425.push((arguments[i__19531__auto___28477]));

var G__28478 = (i__19531__auto___28477 + (1));
i__19531__auto___28477 = G__28478;
continue;
} else {
}
break;
}

var G__28427 = args28425.length;
switch (G__28427) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28425.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20485__auto___28480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto___28480,out){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto___28480,out){
return (function (state_28451){
var state_val_28452 = (state_28451[(1)]);
if((state_val_28452 === (7))){
var inst_28446 = (state_28451[(2)]);
var state_28451__$1 = state_28451;
var statearr_28453_28481 = state_28451__$1;
(statearr_28453_28481[(2)] = inst_28446);

(statearr_28453_28481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (1))){
var inst_28428 = null;
var state_28451__$1 = (function (){var statearr_28454 = state_28451;
(statearr_28454[(7)] = inst_28428);

return statearr_28454;
})();
var statearr_28455_28482 = state_28451__$1;
(statearr_28455_28482[(2)] = null);

(statearr_28455_28482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (4))){
var inst_28431 = (state_28451[(8)]);
var inst_28431__$1 = (state_28451[(2)]);
var inst_28432 = (inst_28431__$1 == null);
var inst_28433 = cljs.core.not.call(null,inst_28432);
var state_28451__$1 = (function (){var statearr_28456 = state_28451;
(statearr_28456[(8)] = inst_28431__$1);

return statearr_28456;
})();
if(inst_28433){
var statearr_28457_28483 = state_28451__$1;
(statearr_28457_28483[(1)] = (5));

} else {
var statearr_28458_28484 = state_28451__$1;
(statearr_28458_28484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (6))){
var state_28451__$1 = state_28451;
var statearr_28459_28485 = state_28451__$1;
(statearr_28459_28485[(2)] = null);

(statearr_28459_28485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (3))){
var inst_28448 = (state_28451[(2)]);
var inst_28449 = cljs.core.async.close_BANG_.call(null,out);
var state_28451__$1 = (function (){var statearr_28460 = state_28451;
(statearr_28460[(9)] = inst_28448);

return statearr_28460;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28451__$1,inst_28449);
} else {
if((state_val_28452 === (2))){
var state_28451__$1 = state_28451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28451__$1,(4),ch);
} else {
if((state_val_28452 === (11))){
var inst_28431 = (state_28451[(8)]);
var inst_28440 = (state_28451[(2)]);
var inst_28428 = inst_28431;
var state_28451__$1 = (function (){var statearr_28461 = state_28451;
(statearr_28461[(7)] = inst_28428);

(statearr_28461[(10)] = inst_28440);

return statearr_28461;
})();
var statearr_28462_28486 = state_28451__$1;
(statearr_28462_28486[(2)] = null);

(statearr_28462_28486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (9))){
var inst_28431 = (state_28451[(8)]);
var state_28451__$1 = state_28451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28451__$1,(11),out,inst_28431);
} else {
if((state_val_28452 === (5))){
var inst_28428 = (state_28451[(7)]);
var inst_28431 = (state_28451[(8)]);
var inst_28435 = cljs.core._EQ_.call(null,inst_28431,inst_28428);
var state_28451__$1 = state_28451;
if(inst_28435){
var statearr_28464_28487 = state_28451__$1;
(statearr_28464_28487[(1)] = (8));

} else {
var statearr_28465_28488 = state_28451__$1;
(statearr_28465_28488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (10))){
var inst_28443 = (state_28451[(2)]);
var state_28451__$1 = state_28451;
var statearr_28466_28489 = state_28451__$1;
(statearr_28466_28489[(2)] = inst_28443);

(statearr_28466_28489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (8))){
var inst_28428 = (state_28451[(7)]);
var tmp28463 = inst_28428;
var inst_28428__$1 = tmp28463;
var state_28451__$1 = (function (){var statearr_28467 = state_28451;
(statearr_28467[(7)] = inst_28428__$1);

return statearr_28467;
})();
var statearr_28468_28490 = state_28451__$1;
(statearr_28468_28490[(2)] = null);

(statearr_28468_28490[(1)] = (2));


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
});})(c__20485__auto___28480,out))
;
return ((function (switch__20464__auto__,c__20485__auto___28480,out){
return (function() {
var cljs$core$async$state_machine__20465__auto__ = null;
var cljs$core$async$state_machine__20465__auto____0 = (function (){
var statearr_28472 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28472[(0)] = cljs$core$async$state_machine__20465__auto__);

(statearr_28472[(1)] = (1));

return statearr_28472;
});
var cljs$core$async$state_machine__20465__auto____1 = (function (state_28451){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_28451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e28473){if((e28473 instanceof Object)){
var ex__20468__auto__ = e28473;
var statearr_28474_28491 = state_28451;
(statearr_28474_28491[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28492 = state_28451;
state_28451 = G__28492;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$state_machine__20465__auto__ = function(state_28451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20465__auto____1.call(this,state_28451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20465__auto____0;
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20465__auto____1;
return cljs$core$async$state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto___28480,out))
})();
var state__20487__auto__ = (function (){var statearr_28475 = f__20486__auto__.call(null);
(statearr_28475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto___28480);

return statearr_28475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto___28480,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28493 = [];
var len__19530__auto___28563 = arguments.length;
var i__19531__auto___28564 = (0);
while(true){
if((i__19531__auto___28564 < len__19530__auto___28563)){
args28493.push((arguments[i__19531__auto___28564]));

var G__28565 = (i__19531__auto___28564 + (1));
i__19531__auto___28564 = G__28565;
continue;
} else {
}
break;
}

var G__28495 = args28493.length;
switch (G__28495) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28493.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20485__auto___28567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto___28567,out){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto___28567,out){
return (function (state_28533){
var state_val_28534 = (state_28533[(1)]);
if((state_val_28534 === (7))){
var inst_28529 = (state_28533[(2)]);
var state_28533__$1 = state_28533;
var statearr_28535_28568 = state_28533__$1;
(statearr_28535_28568[(2)] = inst_28529);

(statearr_28535_28568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28534 === (1))){
var inst_28496 = (new Array(n));
var inst_28497 = inst_28496;
var inst_28498 = (0);
var state_28533__$1 = (function (){var statearr_28536 = state_28533;
(statearr_28536[(7)] = inst_28498);

(statearr_28536[(8)] = inst_28497);

return statearr_28536;
})();
var statearr_28537_28569 = state_28533__$1;
(statearr_28537_28569[(2)] = null);

(statearr_28537_28569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28534 === (4))){
var inst_28501 = (state_28533[(9)]);
var inst_28501__$1 = (state_28533[(2)]);
var inst_28502 = (inst_28501__$1 == null);
var inst_28503 = cljs.core.not.call(null,inst_28502);
var state_28533__$1 = (function (){var statearr_28538 = state_28533;
(statearr_28538[(9)] = inst_28501__$1);

return statearr_28538;
})();
if(inst_28503){
var statearr_28539_28570 = state_28533__$1;
(statearr_28539_28570[(1)] = (5));

} else {
var statearr_28540_28571 = state_28533__$1;
(statearr_28540_28571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28534 === (15))){
var inst_28523 = (state_28533[(2)]);
var state_28533__$1 = state_28533;
var statearr_28541_28572 = state_28533__$1;
(statearr_28541_28572[(2)] = inst_28523);

(statearr_28541_28572[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28534 === (13))){
var state_28533__$1 = state_28533;
var statearr_28542_28573 = state_28533__$1;
(statearr_28542_28573[(2)] = null);

(statearr_28542_28573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28534 === (6))){
var inst_28498 = (state_28533[(7)]);
var inst_28519 = (inst_28498 > (0));
var state_28533__$1 = state_28533;
if(cljs.core.truth_(inst_28519)){
var statearr_28543_28574 = state_28533__$1;
(statearr_28543_28574[(1)] = (12));

} else {
var statearr_28544_28575 = state_28533__$1;
(statearr_28544_28575[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28534 === (3))){
var inst_28531 = (state_28533[(2)]);
var state_28533__$1 = state_28533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28533__$1,inst_28531);
} else {
if((state_val_28534 === (12))){
var inst_28497 = (state_28533[(8)]);
var inst_28521 = cljs.core.vec.call(null,inst_28497);
var state_28533__$1 = state_28533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28533__$1,(15),out,inst_28521);
} else {
if((state_val_28534 === (2))){
var state_28533__$1 = state_28533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28533__$1,(4),ch);
} else {
if((state_val_28534 === (11))){
var inst_28513 = (state_28533[(2)]);
var inst_28514 = (new Array(n));
var inst_28497 = inst_28514;
var inst_28498 = (0);
var state_28533__$1 = (function (){var statearr_28545 = state_28533;
(statearr_28545[(7)] = inst_28498);

(statearr_28545[(8)] = inst_28497);

(statearr_28545[(10)] = inst_28513);

return statearr_28545;
})();
var statearr_28546_28576 = state_28533__$1;
(statearr_28546_28576[(2)] = null);

(statearr_28546_28576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28534 === (9))){
var inst_28497 = (state_28533[(8)]);
var inst_28511 = cljs.core.vec.call(null,inst_28497);
var state_28533__$1 = state_28533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28533__$1,(11),out,inst_28511);
} else {
if((state_val_28534 === (5))){
var inst_28501 = (state_28533[(9)]);
var inst_28498 = (state_28533[(7)]);
var inst_28506 = (state_28533[(11)]);
var inst_28497 = (state_28533[(8)]);
var inst_28505 = (inst_28497[inst_28498] = inst_28501);
var inst_28506__$1 = (inst_28498 + (1));
var inst_28507 = (inst_28506__$1 < n);
var state_28533__$1 = (function (){var statearr_28547 = state_28533;
(statearr_28547[(12)] = inst_28505);

(statearr_28547[(11)] = inst_28506__$1);

return statearr_28547;
})();
if(cljs.core.truth_(inst_28507)){
var statearr_28548_28577 = state_28533__$1;
(statearr_28548_28577[(1)] = (8));

} else {
var statearr_28549_28578 = state_28533__$1;
(statearr_28549_28578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28534 === (14))){
var inst_28526 = (state_28533[(2)]);
var inst_28527 = cljs.core.async.close_BANG_.call(null,out);
var state_28533__$1 = (function (){var statearr_28551 = state_28533;
(statearr_28551[(13)] = inst_28526);

return statearr_28551;
})();
var statearr_28552_28579 = state_28533__$1;
(statearr_28552_28579[(2)] = inst_28527);

(statearr_28552_28579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28534 === (10))){
var inst_28517 = (state_28533[(2)]);
var state_28533__$1 = state_28533;
var statearr_28553_28580 = state_28533__$1;
(statearr_28553_28580[(2)] = inst_28517);

(statearr_28553_28580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28534 === (8))){
var inst_28506 = (state_28533[(11)]);
var inst_28497 = (state_28533[(8)]);
var tmp28550 = inst_28497;
var inst_28497__$1 = tmp28550;
var inst_28498 = inst_28506;
var state_28533__$1 = (function (){var statearr_28554 = state_28533;
(statearr_28554[(7)] = inst_28498);

(statearr_28554[(8)] = inst_28497__$1);

return statearr_28554;
})();
var statearr_28555_28581 = state_28533__$1;
(statearr_28555_28581[(2)] = null);

(statearr_28555_28581[(1)] = (2));


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
});})(c__20485__auto___28567,out))
;
return ((function (switch__20464__auto__,c__20485__auto___28567,out){
return (function() {
var cljs$core$async$state_machine__20465__auto__ = null;
var cljs$core$async$state_machine__20465__auto____0 = (function (){
var statearr_28559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28559[(0)] = cljs$core$async$state_machine__20465__auto__);

(statearr_28559[(1)] = (1));

return statearr_28559;
});
var cljs$core$async$state_machine__20465__auto____1 = (function (state_28533){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_28533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e28560){if((e28560 instanceof Object)){
var ex__20468__auto__ = e28560;
var statearr_28561_28582 = state_28533;
(statearr_28561_28582[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28583 = state_28533;
state_28533 = G__28583;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$state_machine__20465__auto__ = function(state_28533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20465__auto____1.call(this,state_28533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20465__auto____0;
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20465__auto____1;
return cljs$core$async$state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto___28567,out))
})();
var state__20487__auto__ = (function (){var statearr_28562 = f__20486__auto__.call(null);
(statearr_28562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto___28567);

return statearr_28562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto___28567,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28584 = [];
var len__19530__auto___28658 = arguments.length;
var i__19531__auto___28659 = (0);
while(true){
if((i__19531__auto___28659 < len__19530__auto___28658)){
args28584.push((arguments[i__19531__auto___28659]));

var G__28660 = (i__19531__auto___28659 + (1));
i__19531__auto___28659 = G__28660;
continue;
} else {
}
break;
}

var G__28586 = args28584.length;
switch (G__28586) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28584.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20485__auto___28662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20485__auto___28662,out){
return (function (){
var f__20486__auto__ = (function (){var switch__20464__auto__ = ((function (c__20485__auto___28662,out){
return (function (state_28628){
var state_val_28629 = (state_28628[(1)]);
if((state_val_28629 === (7))){
var inst_28624 = (state_28628[(2)]);
var state_28628__$1 = state_28628;
var statearr_28630_28663 = state_28628__$1;
(statearr_28630_28663[(2)] = inst_28624);

(statearr_28630_28663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28629 === (1))){
var inst_28587 = [];
var inst_28588 = inst_28587;
var inst_28589 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28628__$1 = (function (){var statearr_28631 = state_28628;
(statearr_28631[(7)] = inst_28588);

(statearr_28631[(8)] = inst_28589);

return statearr_28631;
})();
var statearr_28632_28664 = state_28628__$1;
(statearr_28632_28664[(2)] = null);

(statearr_28632_28664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28629 === (4))){
var inst_28592 = (state_28628[(9)]);
var inst_28592__$1 = (state_28628[(2)]);
var inst_28593 = (inst_28592__$1 == null);
var inst_28594 = cljs.core.not.call(null,inst_28593);
var state_28628__$1 = (function (){var statearr_28633 = state_28628;
(statearr_28633[(9)] = inst_28592__$1);

return statearr_28633;
})();
if(inst_28594){
var statearr_28634_28665 = state_28628__$1;
(statearr_28634_28665[(1)] = (5));

} else {
var statearr_28635_28666 = state_28628__$1;
(statearr_28635_28666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28629 === (15))){
var inst_28618 = (state_28628[(2)]);
var state_28628__$1 = state_28628;
var statearr_28636_28667 = state_28628__$1;
(statearr_28636_28667[(2)] = inst_28618);

(statearr_28636_28667[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28629 === (13))){
var state_28628__$1 = state_28628;
var statearr_28637_28668 = state_28628__$1;
(statearr_28637_28668[(2)] = null);

(statearr_28637_28668[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28629 === (6))){
var inst_28588 = (state_28628[(7)]);
var inst_28613 = inst_28588.length;
var inst_28614 = (inst_28613 > (0));
var state_28628__$1 = state_28628;
if(cljs.core.truth_(inst_28614)){
var statearr_28638_28669 = state_28628__$1;
(statearr_28638_28669[(1)] = (12));

} else {
var statearr_28639_28670 = state_28628__$1;
(statearr_28639_28670[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28629 === (3))){
var inst_28626 = (state_28628[(2)]);
var state_28628__$1 = state_28628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28628__$1,inst_28626);
} else {
if((state_val_28629 === (12))){
var inst_28588 = (state_28628[(7)]);
var inst_28616 = cljs.core.vec.call(null,inst_28588);
var state_28628__$1 = state_28628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28628__$1,(15),out,inst_28616);
} else {
if((state_val_28629 === (2))){
var state_28628__$1 = state_28628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28628__$1,(4),ch);
} else {
if((state_val_28629 === (11))){
var inst_28592 = (state_28628[(9)]);
var inst_28596 = (state_28628[(10)]);
var inst_28606 = (state_28628[(2)]);
var inst_28607 = [];
var inst_28608 = inst_28607.push(inst_28592);
var inst_28588 = inst_28607;
var inst_28589 = inst_28596;
var state_28628__$1 = (function (){var statearr_28640 = state_28628;
(statearr_28640[(7)] = inst_28588);

(statearr_28640[(11)] = inst_28608);

(statearr_28640[(8)] = inst_28589);

(statearr_28640[(12)] = inst_28606);

return statearr_28640;
})();
var statearr_28641_28671 = state_28628__$1;
(statearr_28641_28671[(2)] = null);

(statearr_28641_28671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28629 === (9))){
var inst_28588 = (state_28628[(7)]);
var inst_28604 = cljs.core.vec.call(null,inst_28588);
var state_28628__$1 = state_28628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28628__$1,(11),out,inst_28604);
} else {
if((state_val_28629 === (5))){
var inst_28592 = (state_28628[(9)]);
var inst_28589 = (state_28628[(8)]);
var inst_28596 = (state_28628[(10)]);
var inst_28596__$1 = f.call(null,inst_28592);
var inst_28597 = cljs.core._EQ_.call(null,inst_28596__$1,inst_28589);
var inst_28598 = cljs.core.keyword_identical_QMARK_.call(null,inst_28589,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28599 = (inst_28597) || (inst_28598);
var state_28628__$1 = (function (){var statearr_28642 = state_28628;
(statearr_28642[(10)] = inst_28596__$1);

return statearr_28642;
})();
if(cljs.core.truth_(inst_28599)){
var statearr_28643_28672 = state_28628__$1;
(statearr_28643_28672[(1)] = (8));

} else {
var statearr_28644_28673 = state_28628__$1;
(statearr_28644_28673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28629 === (14))){
var inst_28621 = (state_28628[(2)]);
var inst_28622 = cljs.core.async.close_BANG_.call(null,out);
var state_28628__$1 = (function (){var statearr_28646 = state_28628;
(statearr_28646[(13)] = inst_28621);

return statearr_28646;
})();
var statearr_28647_28674 = state_28628__$1;
(statearr_28647_28674[(2)] = inst_28622);

(statearr_28647_28674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28629 === (10))){
var inst_28611 = (state_28628[(2)]);
var state_28628__$1 = state_28628;
var statearr_28648_28675 = state_28628__$1;
(statearr_28648_28675[(2)] = inst_28611);

(statearr_28648_28675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28629 === (8))){
var inst_28588 = (state_28628[(7)]);
var inst_28592 = (state_28628[(9)]);
var inst_28596 = (state_28628[(10)]);
var inst_28601 = inst_28588.push(inst_28592);
var tmp28645 = inst_28588;
var inst_28588__$1 = tmp28645;
var inst_28589 = inst_28596;
var state_28628__$1 = (function (){var statearr_28649 = state_28628;
(statearr_28649[(7)] = inst_28588__$1);

(statearr_28649[(8)] = inst_28589);

(statearr_28649[(14)] = inst_28601);

return statearr_28649;
})();
var statearr_28650_28676 = state_28628__$1;
(statearr_28650_28676[(2)] = null);

(statearr_28650_28676[(1)] = (2));


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
});})(c__20485__auto___28662,out))
;
return ((function (switch__20464__auto__,c__20485__auto___28662,out){
return (function() {
var cljs$core$async$state_machine__20465__auto__ = null;
var cljs$core$async$state_machine__20465__auto____0 = (function (){
var statearr_28654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28654[(0)] = cljs$core$async$state_machine__20465__auto__);

(statearr_28654[(1)] = (1));

return statearr_28654;
});
var cljs$core$async$state_machine__20465__auto____1 = (function (state_28628){
while(true){
var ret_value__20466__auto__ = (function (){try{while(true){
var result__20467__auto__ = switch__20464__auto__.call(null,state_28628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20467__auto__;
}
break;
}
}catch (e28655){if((e28655 instanceof Object)){
var ex__20468__auto__ = e28655;
var statearr_28656_28677 = state_28628;
(statearr_28656_28677[(5)] = ex__20468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28678 = state_28628;
state_28628 = G__28678;
continue;
} else {
return ret_value__20466__auto__;
}
break;
}
});
cljs$core$async$state_machine__20465__auto__ = function(state_28628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20465__auto____1.call(this,state_28628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20465__auto____0;
cljs$core$async$state_machine__20465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20465__auto____1;
return cljs$core$async$state_machine__20465__auto__;
})()
;})(switch__20464__auto__,c__20485__auto___28662,out))
})();
var state__20487__auto__ = (function (){var statearr_28657 = f__20486__auto__.call(null);
(statearr_28657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20485__auto___28662);

return statearr_28657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20487__auto__);
});})(c__20485__auto___28662,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1470995250221