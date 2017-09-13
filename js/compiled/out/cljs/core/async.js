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
var args21622 = [];
var len__19529__auto___21628 = arguments.length;
var i__19530__auto___21629 = (0);
while(true){
if((i__19530__auto___21629 < len__19529__auto___21628)){
args21622.push((arguments[i__19530__auto___21629]));

var G__21630 = (i__19530__auto___21629 + (1));
i__19530__auto___21629 = G__21630;
continue;
} else {
}
break;
}

var G__21624 = args21622.length;
switch (G__21624) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21622.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21625 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21625 = (function (f,blockable,meta21626){
this.f = f;
this.blockable = blockable;
this.meta21626 = meta21626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21627,meta21626__$1){
var self__ = this;
var _21627__$1 = this;
return (new cljs.core.async.t_cljs$core$async21625(self__.f,self__.blockable,meta21626__$1));
});

cljs.core.async.t_cljs$core$async21625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21627){
var self__ = this;
var _21627__$1 = this;
return self__.meta21626;
});

cljs.core.async.t_cljs$core$async21625.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21625.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21625.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21625.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21626","meta21626",1965325276,null)], null);
});

cljs.core.async.t_cljs$core$async21625.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21625";

cljs.core.async.t_cljs$core$async21625.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async21625");
});

cljs.core.async.__GT_t_cljs$core$async21625 = (function cljs$core$async$__GT_t_cljs$core$async21625(f__$1,blockable__$1,meta21626){
return (new cljs.core.async.t_cljs$core$async21625(f__$1,blockable__$1,meta21626));
});

}

return (new cljs.core.async.t_cljs$core$async21625(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args21634 = [];
var len__19529__auto___21637 = arguments.length;
var i__19530__auto___21638 = (0);
while(true){
if((i__19530__auto___21638 < len__19529__auto___21637)){
args21634.push((arguments[i__19530__auto___21638]));

var G__21639 = (i__19530__auto___21638 + (1));
i__19530__auto___21638 = G__21639;
continue;
} else {
}
break;
}

var G__21636 = args21634.length;
switch (G__21636) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21634.length)].join('')));

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
var args21641 = [];
var len__19529__auto___21644 = arguments.length;
var i__19530__auto___21645 = (0);
while(true){
if((i__19530__auto___21645 < len__19529__auto___21644)){
args21641.push((arguments[i__19530__auto___21645]));

var G__21646 = (i__19530__auto___21645 + (1));
i__19530__auto___21645 = G__21646;
continue;
} else {
}
break;
}

var G__21643 = args21641.length;
switch (G__21643) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21641.length)].join('')));

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
var args21648 = [];
var len__19529__auto___21651 = arguments.length;
var i__19530__auto___21652 = (0);
while(true){
if((i__19530__auto___21652 < len__19529__auto___21651)){
args21648.push((arguments[i__19530__auto___21652]));

var G__21653 = (i__19530__auto___21652 + (1));
i__19530__auto___21652 = G__21653;
continue;
} else {
}
break;
}

var G__21650 = args21648.length;
switch (G__21650) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21648.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21655 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21655);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21655,ret){
return (function (){
return fn1.call(null,val_21655);
});})(val_21655,ret))
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
var args21656 = [];
var len__19529__auto___21659 = arguments.length;
var i__19530__auto___21660 = (0);
while(true){
if((i__19530__auto___21660 < len__19529__auto___21659)){
args21656.push((arguments[i__19530__auto___21660]));

var G__21661 = (i__19530__auto___21660 + (1));
i__19530__auto___21660 = G__21661;
continue;
} else {
}
break;
}

var G__21658 = args21656.length;
switch (G__21658) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21656.length)].join('')));

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
var n__19374__auto___21663 = n;
var x_21664 = (0);
while(true){
if((x_21664 < n__19374__auto___21663)){
(a[x_21664] = (0));

var G__21665 = (x_21664 + (1));
x_21664 = G__21665;
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

var G__21666 = (i + (1));
i = G__21666;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21670 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21670 = (function (alt_flag,flag,meta21671){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21671 = meta21671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21672,meta21671__$1){
var self__ = this;
var _21672__$1 = this;
return (new cljs.core.async.t_cljs$core$async21670(self__.alt_flag,self__.flag,meta21671__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21672){
var self__ = this;
var _21672__$1 = this;
return self__.meta21671;
});})(flag))
;

cljs.core.async.t_cljs$core$async21670.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21670.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21670.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21670.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21670.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21671","meta21671",1498986021,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21670.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21670";

cljs.core.async.t_cljs$core$async21670.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async21670");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21670 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21670(alt_flag__$1,flag__$1,meta21671){
return (new cljs.core.async.t_cljs$core$async21670(alt_flag__$1,flag__$1,meta21671));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21670(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21676 = (function (alt_handler,flag,cb,meta21677){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21677 = meta21677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21678,meta21677__$1){
var self__ = this;
var _21678__$1 = this;
return (new cljs.core.async.t_cljs$core$async21676(self__.alt_handler,self__.flag,self__.cb,meta21677__$1));
});

cljs.core.async.t_cljs$core$async21676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21678){
var self__ = this;
var _21678__$1 = this;
return self__.meta21677;
});

cljs.core.async.t_cljs$core$async21676.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21676.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21676.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21676.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21677","meta21677",-981068295,null)], null);
});

cljs.core.async.t_cljs$core$async21676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21676";

cljs.core.async.t_cljs$core$async21676.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async21676");
});

cljs.core.async.__GT_t_cljs$core$async21676 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21676(alt_handler__$1,flag__$1,cb__$1,meta21677){
return (new cljs.core.async.t_cljs$core$async21676(alt_handler__$1,flag__$1,cb__$1,meta21677));
});

}

return (new cljs.core.async.t_cljs$core$async21676(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21679_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21679_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21680_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21680_SHARP_,port], null));
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
var G__21681 = (i + (1));
i = G__21681;
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
var len__19529__auto___21687 = arguments.length;
var i__19530__auto___21688 = (0);
while(true){
if((i__19530__auto___21688 < len__19529__auto___21687)){
args__19536__auto__.push((arguments[i__19530__auto___21688]));

var G__21689 = (i__19530__auto___21688 + (1));
i__19530__auto___21688 = G__21689;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21684){
var map__21685 = p__21684;
var map__21685__$1 = ((((!((map__21685 == null)))?((((map__21685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21685):map__21685);
var opts = map__21685__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21682){
var G__21683 = cljs.core.first.call(null,seq21682);
var seq21682__$1 = cljs.core.next.call(null,seq21682);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21683,seq21682__$1);
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
var args21690 = [];
var len__19529__auto___21740 = arguments.length;
var i__19530__auto___21741 = (0);
while(true){
if((i__19530__auto___21741 < len__19529__auto___21740)){
args21690.push((arguments[i__19530__auto___21741]));

var G__21742 = (i__19530__auto___21741 + (1));
i__19530__auto___21741 = G__21742;
continue;
} else {
}
break;
}

var G__21692 = args21690.length;
switch (G__21692) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21690.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21577__auto___21744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto___21744){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto___21744){
return (function (state_21716){
var state_val_21717 = (state_21716[(1)]);
if((state_val_21717 === (7))){
var inst_21712 = (state_21716[(2)]);
var state_21716__$1 = state_21716;
var statearr_21718_21745 = state_21716__$1;
(statearr_21718_21745[(2)] = inst_21712);

(statearr_21718_21745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (1))){
var state_21716__$1 = state_21716;
var statearr_21719_21746 = state_21716__$1;
(statearr_21719_21746[(2)] = null);

(statearr_21719_21746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (4))){
var inst_21695 = (state_21716[(7)]);
var inst_21695__$1 = (state_21716[(2)]);
var inst_21696 = (inst_21695__$1 == null);
var state_21716__$1 = (function (){var statearr_21720 = state_21716;
(statearr_21720[(7)] = inst_21695__$1);

return statearr_21720;
})();
if(cljs.core.truth_(inst_21696)){
var statearr_21721_21747 = state_21716__$1;
(statearr_21721_21747[(1)] = (5));

} else {
var statearr_21722_21748 = state_21716__$1;
(statearr_21722_21748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (13))){
var state_21716__$1 = state_21716;
var statearr_21723_21749 = state_21716__$1;
(statearr_21723_21749[(2)] = null);

(statearr_21723_21749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (6))){
var inst_21695 = (state_21716[(7)]);
var state_21716__$1 = state_21716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21716__$1,(11),to,inst_21695);
} else {
if((state_val_21717 === (3))){
var inst_21714 = (state_21716[(2)]);
var state_21716__$1 = state_21716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21716__$1,inst_21714);
} else {
if((state_val_21717 === (12))){
var state_21716__$1 = state_21716;
var statearr_21724_21750 = state_21716__$1;
(statearr_21724_21750[(2)] = null);

(statearr_21724_21750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (2))){
var state_21716__$1 = state_21716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21716__$1,(4),from);
} else {
if((state_val_21717 === (11))){
var inst_21705 = (state_21716[(2)]);
var state_21716__$1 = state_21716;
if(cljs.core.truth_(inst_21705)){
var statearr_21725_21751 = state_21716__$1;
(statearr_21725_21751[(1)] = (12));

} else {
var statearr_21726_21752 = state_21716__$1;
(statearr_21726_21752[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (9))){
var state_21716__$1 = state_21716;
var statearr_21727_21753 = state_21716__$1;
(statearr_21727_21753[(2)] = null);

(statearr_21727_21753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (5))){
var state_21716__$1 = state_21716;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21728_21754 = state_21716__$1;
(statearr_21728_21754[(1)] = (8));

} else {
var statearr_21729_21755 = state_21716__$1;
(statearr_21729_21755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (14))){
var inst_21710 = (state_21716[(2)]);
var state_21716__$1 = state_21716;
var statearr_21730_21756 = state_21716__$1;
(statearr_21730_21756[(2)] = inst_21710);

(statearr_21730_21756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (10))){
var inst_21702 = (state_21716[(2)]);
var state_21716__$1 = state_21716;
var statearr_21731_21757 = state_21716__$1;
(statearr_21731_21757[(2)] = inst_21702);

(statearr_21731_21757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (8))){
var inst_21699 = cljs.core.async.close_BANG_.call(null,to);
var state_21716__$1 = state_21716;
var statearr_21732_21758 = state_21716__$1;
(statearr_21732_21758[(2)] = inst_21699);

(statearr_21732_21758[(1)] = (10));


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
});})(c__21577__auto___21744))
;
return ((function (switch__21465__auto__,c__21577__auto___21744){
return (function() {
var cljs$core$async$state_machine__21466__auto__ = null;
var cljs$core$async$state_machine__21466__auto____0 = (function (){
var statearr_21736 = [null,null,null,null,null,null,null,null];
(statearr_21736[(0)] = cljs$core$async$state_machine__21466__auto__);

(statearr_21736[(1)] = (1));

return statearr_21736;
});
var cljs$core$async$state_machine__21466__auto____1 = (function (state_21716){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_21716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e21737){if((e21737 instanceof Object)){
var ex__21469__auto__ = e21737;
var statearr_21738_21759 = state_21716;
(statearr_21738_21759[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21760 = state_21716;
state_21716 = G__21760;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$state_machine__21466__auto__ = function(state_21716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21466__auto____1.call(this,state_21716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21466__auto____0;
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21466__auto____1;
return cljs$core$async$state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto___21744))
})();
var state__21579__auto__ = (function (){var statearr_21739 = f__21578__auto__.call(null);
(statearr_21739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto___21744);

return statearr_21739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto___21744))
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
return (function (p__21944){
var vec__21945 = p__21944;
var v = cljs.core.nth.call(null,vec__21945,(0),null);
var p = cljs.core.nth.call(null,vec__21945,(1),null);
var job = vec__21945;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21577__auto___22127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto___22127,res,vec__21945,v,p,job,jobs,results){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto___22127,res,vec__21945,v,p,job,jobs,results){
return (function (state_21950){
var state_val_21951 = (state_21950[(1)]);
if((state_val_21951 === (1))){
var state_21950__$1 = state_21950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21950__$1,(2),res,v);
} else {
if((state_val_21951 === (2))){
var inst_21947 = (state_21950[(2)]);
var inst_21948 = cljs.core.async.close_BANG_.call(null,res);
var state_21950__$1 = (function (){var statearr_21952 = state_21950;
(statearr_21952[(7)] = inst_21947);

return statearr_21952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21950__$1,inst_21948);
} else {
return null;
}
}
});})(c__21577__auto___22127,res,vec__21945,v,p,job,jobs,results))
;
return ((function (switch__21465__auto__,c__21577__auto___22127,res,vec__21945,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____0 = (function (){
var statearr_21956 = [null,null,null,null,null,null,null,null];
(statearr_21956[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__);

(statearr_21956[(1)] = (1));

return statearr_21956;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____1 = (function (state_21950){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_21950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e21957){if((e21957 instanceof Object)){
var ex__21469__auto__ = e21957;
var statearr_21958_22128 = state_21950;
(statearr_21958_22128[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22129 = state_21950;
state_21950 = G__22129;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__ = function(state_21950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____1.call(this,state_21950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto___22127,res,vec__21945,v,p,job,jobs,results))
})();
var state__21579__auto__ = (function (){var statearr_21959 = f__21578__auto__.call(null);
(statearr_21959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto___22127);

return statearr_21959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto___22127,res,vec__21945,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21960){
var vec__21961 = p__21960;
var v = cljs.core.nth.call(null,vec__21961,(0),null);
var p = cljs.core.nth.call(null,vec__21961,(1),null);
var job = vec__21961;
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
var n__19374__auto___22130 = n;
var __22131 = (0);
while(true){
if((__22131 < n__19374__auto___22130)){
var G__21962_22132 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21962_22132) {
case "compute":
var c__21577__auto___22134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22131,c__21577__auto___22134,G__21962_22132,n__19374__auto___22130,jobs,results,process,async){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (__22131,c__21577__auto___22134,G__21962_22132,n__19374__auto___22130,jobs,results,process,async){
return (function (state_21975){
var state_val_21976 = (state_21975[(1)]);
if((state_val_21976 === (1))){
var state_21975__$1 = state_21975;
var statearr_21977_22135 = state_21975__$1;
(statearr_21977_22135[(2)] = null);

(statearr_21977_22135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (2))){
var state_21975__$1 = state_21975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21975__$1,(4),jobs);
} else {
if((state_val_21976 === (3))){
var inst_21973 = (state_21975[(2)]);
var state_21975__$1 = state_21975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21975__$1,inst_21973);
} else {
if((state_val_21976 === (4))){
var inst_21965 = (state_21975[(2)]);
var inst_21966 = process.call(null,inst_21965);
var state_21975__$1 = state_21975;
if(cljs.core.truth_(inst_21966)){
var statearr_21978_22136 = state_21975__$1;
(statearr_21978_22136[(1)] = (5));

} else {
var statearr_21979_22137 = state_21975__$1;
(statearr_21979_22137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (5))){
var state_21975__$1 = state_21975;
var statearr_21980_22138 = state_21975__$1;
(statearr_21980_22138[(2)] = null);

(statearr_21980_22138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (6))){
var state_21975__$1 = state_21975;
var statearr_21981_22139 = state_21975__$1;
(statearr_21981_22139[(2)] = null);

(statearr_21981_22139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (7))){
var inst_21971 = (state_21975[(2)]);
var state_21975__$1 = state_21975;
var statearr_21982_22140 = state_21975__$1;
(statearr_21982_22140[(2)] = inst_21971);

(statearr_21982_22140[(1)] = (3));


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
});})(__22131,c__21577__auto___22134,G__21962_22132,n__19374__auto___22130,jobs,results,process,async))
;
return ((function (__22131,switch__21465__auto__,c__21577__auto___22134,G__21962_22132,n__19374__auto___22130,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____0 = (function (){
var statearr_21986 = [null,null,null,null,null,null,null];
(statearr_21986[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__);

(statearr_21986[(1)] = (1));

return statearr_21986;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____1 = (function (state_21975){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_21975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e21987){if((e21987 instanceof Object)){
var ex__21469__auto__ = e21987;
var statearr_21988_22141 = state_21975;
(statearr_21988_22141[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22142 = state_21975;
state_21975 = G__22142;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__ = function(state_21975){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____1.call(this,state_21975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__;
})()
;})(__22131,switch__21465__auto__,c__21577__auto___22134,G__21962_22132,n__19374__auto___22130,jobs,results,process,async))
})();
var state__21579__auto__ = (function (){var statearr_21989 = f__21578__auto__.call(null);
(statearr_21989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto___22134);

return statearr_21989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(__22131,c__21577__auto___22134,G__21962_22132,n__19374__auto___22130,jobs,results,process,async))
);


break;
case "async":
var c__21577__auto___22143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22131,c__21577__auto___22143,G__21962_22132,n__19374__auto___22130,jobs,results,process,async){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (__22131,c__21577__auto___22143,G__21962_22132,n__19374__auto___22130,jobs,results,process,async){
return (function (state_22002){
var state_val_22003 = (state_22002[(1)]);
if((state_val_22003 === (1))){
var state_22002__$1 = state_22002;
var statearr_22004_22144 = state_22002__$1;
(statearr_22004_22144[(2)] = null);

(statearr_22004_22144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22003 === (2))){
var state_22002__$1 = state_22002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22002__$1,(4),jobs);
} else {
if((state_val_22003 === (3))){
var inst_22000 = (state_22002[(2)]);
var state_22002__$1 = state_22002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22002__$1,inst_22000);
} else {
if((state_val_22003 === (4))){
var inst_21992 = (state_22002[(2)]);
var inst_21993 = async.call(null,inst_21992);
var state_22002__$1 = state_22002;
if(cljs.core.truth_(inst_21993)){
var statearr_22005_22145 = state_22002__$1;
(statearr_22005_22145[(1)] = (5));

} else {
var statearr_22006_22146 = state_22002__$1;
(statearr_22006_22146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22003 === (5))){
var state_22002__$1 = state_22002;
var statearr_22007_22147 = state_22002__$1;
(statearr_22007_22147[(2)] = null);

(statearr_22007_22147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22003 === (6))){
var state_22002__$1 = state_22002;
var statearr_22008_22148 = state_22002__$1;
(statearr_22008_22148[(2)] = null);

(statearr_22008_22148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22003 === (7))){
var inst_21998 = (state_22002[(2)]);
var state_22002__$1 = state_22002;
var statearr_22009_22149 = state_22002__$1;
(statearr_22009_22149[(2)] = inst_21998);

(statearr_22009_22149[(1)] = (3));


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
});})(__22131,c__21577__auto___22143,G__21962_22132,n__19374__auto___22130,jobs,results,process,async))
;
return ((function (__22131,switch__21465__auto__,c__21577__auto___22143,G__21962_22132,n__19374__auto___22130,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____0 = (function (){
var statearr_22013 = [null,null,null,null,null,null,null];
(statearr_22013[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__);

(statearr_22013[(1)] = (1));

return statearr_22013;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____1 = (function (state_22002){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_22002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e22014){if((e22014 instanceof Object)){
var ex__21469__auto__ = e22014;
var statearr_22015_22150 = state_22002;
(statearr_22015_22150[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22151 = state_22002;
state_22002 = G__22151;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__ = function(state_22002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____1.call(this,state_22002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__;
})()
;})(__22131,switch__21465__auto__,c__21577__auto___22143,G__21962_22132,n__19374__auto___22130,jobs,results,process,async))
})();
var state__21579__auto__ = (function (){var statearr_22016 = f__21578__auto__.call(null);
(statearr_22016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto___22143);

return statearr_22016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(__22131,c__21577__auto___22143,G__21962_22132,n__19374__auto___22130,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22152 = (__22131 + (1));
__22131 = G__22152;
continue;
} else {
}
break;
}

var c__21577__auto___22153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto___22153,jobs,results,process,async){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto___22153,jobs,results,process,async){
return (function (state_22038){
var state_val_22039 = (state_22038[(1)]);
if((state_val_22039 === (1))){
var state_22038__$1 = state_22038;
var statearr_22040_22154 = state_22038__$1;
(statearr_22040_22154[(2)] = null);

(statearr_22040_22154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22039 === (2))){
var state_22038__$1 = state_22038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22038__$1,(4),from);
} else {
if((state_val_22039 === (3))){
var inst_22036 = (state_22038[(2)]);
var state_22038__$1 = state_22038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22038__$1,inst_22036);
} else {
if((state_val_22039 === (4))){
var inst_22019 = (state_22038[(7)]);
var inst_22019__$1 = (state_22038[(2)]);
var inst_22020 = (inst_22019__$1 == null);
var state_22038__$1 = (function (){var statearr_22041 = state_22038;
(statearr_22041[(7)] = inst_22019__$1);

return statearr_22041;
})();
if(cljs.core.truth_(inst_22020)){
var statearr_22042_22155 = state_22038__$1;
(statearr_22042_22155[(1)] = (5));

} else {
var statearr_22043_22156 = state_22038__$1;
(statearr_22043_22156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22039 === (5))){
var inst_22022 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22038__$1 = state_22038;
var statearr_22044_22157 = state_22038__$1;
(statearr_22044_22157[(2)] = inst_22022);

(statearr_22044_22157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22039 === (6))){
var inst_22019 = (state_22038[(7)]);
var inst_22024 = (state_22038[(8)]);
var inst_22024__$1 = cljs.core.async.chan.call(null,(1));
var inst_22025 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22026 = [inst_22019,inst_22024__$1];
var inst_22027 = (new cljs.core.PersistentVector(null,2,(5),inst_22025,inst_22026,null));
var state_22038__$1 = (function (){var statearr_22045 = state_22038;
(statearr_22045[(8)] = inst_22024__$1);

return statearr_22045;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22038__$1,(8),jobs,inst_22027);
} else {
if((state_val_22039 === (7))){
var inst_22034 = (state_22038[(2)]);
var state_22038__$1 = state_22038;
var statearr_22046_22158 = state_22038__$1;
(statearr_22046_22158[(2)] = inst_22034);

(statearr_22046_22158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22039 === (8))){
var inst_22024 = (state_22038[(8)]);
var inst_22029 = (state_22038[(2)]);
var state_22038__$1 = (function (){var statearr_22047 = state_22038;
(statearr_22047[(9)] = inst_22029);

return statearr_22047;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22038__$1,(9),results,inst_22024);
} else {
if((state_val_22039 === (9))){
var inst_22031 = (state_22038[(2)]);
var state_22038__$1 = (function (){var statearr_22048 = state_22038;
(statearr_22048[(10)] = inst_22031);

return statearr_22048;
})();
var statearr_22049_22159 = state_22038__$1;
(statearr_22049_22159[(2)] = null);

(statearr_22049_22159[(1)] = (2));


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
});})(c__21577__auto___22153,jobs,results,process,async))
;
return ((function (switch__21465__auto__,c__21577__auto___22153,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____0 = (function (){
var statearr_22053 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22053[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__);

(statearr_22053[(1)] = (1));

return statearr_22053;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____1 = (function (state_22038){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_22038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e22054){if((e22054 instanceof Object)){
var ex__21469__auto__ = e22054;
var statearr_22055_22160 = state_22038;
(statearr_22055_22160[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22161 = state_22038;
state_22038 = G__22161;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__ = function(state_22038){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____1.call(this,state_22038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto___22153,jobs,results,process,async))
})();
var state__21579__auto__ = (function (){var statearr_22056 = f__21578__auto__.call(null);
(statearr_22056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto___22153);

return statearr_22056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto___22153,jobs,results,process,async))
);


var c__21577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto__,jobs,results,process,async){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto__,jobs,results,process,async){
return (function (state_22094){
var state_val_22095 = (state_22094[(1)]);
if((state_val_22095 === (7))){
var inst_22090 = (state_22094[(2)]);
var state_22094__$1 = state_22094;
var statearr_22096_22162 = state_22094__$1;
(statearr_22096_22162[(2)] = inst_22090);

(statearr_22096_22162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22095 === (20))){
var state_22094__$1 = state_22094;
var statearr_22097_22163 = state_22094__$1;
(statearr_22097_22163[(2)] = null);

(statearr_22097_22163[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22095 === (1))){
var state_22094__$1 = state_22094;
var statearr_22098_22164 = state_22094__$1;
(statearr_22098_22164[(2)] = null);

(statearr_22098_22164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22095 === (4))){
var inst_22059 = (state_22094[(7)]);
var inst_22059__$1 = (state_22094[(2)]);
var inst_22060 = (inst_22059__$1 == null);
var state_22094__$1 = (function (){var statearr_22099 = state_22094;
(statearr_22099[(7)] = inst_22059__$1);

return statearr_22099;
})();
if(cljs.core.truth_(inst_22060)){
var statearr_22100_22165 = state_22094__$1;
(statearr_22100_22165[(1)] = (5));

} else {
var statearr_22101_22166 = state_22094__$1;
(statearr_22101_22166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22095 === (15))){
var inst_22072 = (state_22094[(8)]);
var state_22094__$1 = state_22094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22094__$1,(18),to,inst_22072);
} else {
if((state_val_22095 === (21))){
var inst_22085 = (state_22094[(2)]);
var state_22094__$1 = state_22094;
var statearr_22102_22167 = state_22094__$1;
(statearr_22102_22167[(2)] = inst_22085);

(statearr_22102_22167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22095 === (13))){
var inst_22087 = (state_22094[(2)]);
var state_22094__$1 = (function (){var statearr_22103 = state_22094;
(statearr_22103[(9)] = inst_22087);

return statearr_22103;
})();
var statearr_22104_22168 = state_22094__$1;
(statearr_22104_22168[(2)] = null);

(statearr_22104_22168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22095 === (6))){
var inst_22059 = (state_22094[(7)]);
var state_22094__$1 = state_22094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22094__$1,(11),inst_22059);
} else {
if((state_val_22095 === (17))){
var inst_22080 = (state_22094[(2)]);
var state_22094__$1 = state_22094;
if(cljs.core.truth_(inst_22080)){
var statearr_22105_22169 = state_22094__$1;
(statearr_22105_22169[(1)] = (19));

} else {
var statearr_22106_22170 = state_22094__$1;
(statearr_22106_22170[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22095 === (3))){
var inst_22092 = (state_22094[(2)]);
var state_22094__$1 = state_22094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22094__$1,inst_22092);
} else {
if((state_val_22095 === (12))){
var inst_22069 = (state_22094[(10)]);
var state_22094__$1 = state_22094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22094__$1,(14),inst_22069);
} else {
if((state_val_22095 === (2))){
var state_22094__$1 = state_22094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22094__$1,(4),results);
} else {
if((state_val_22095 === (19))){
var state_22094__$1 = state_22094;
var statearr_22107_22171 = state_22094__$1;
(statearr_22107_22171[(2)] = null);

(statearr_22107_22171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22095 === (11))){
var inst_22069 = (state_22094[(2)]);
var state_22094__$1 = (function (){var statearr_22108 = state_22094;
(statearr_22108[(10)] = inst_22069);

return statearr_22108;
})();
var statearr_22109_22172 = state_22094__$1;
(statearr_22109_22172[(2)] = null);

(statearr_22109_22172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22095 === (9))){
var state_22094__$1 = state_22094;
var statearr_22110_22173 = state_22094__$1;
(statearr_22110_22173[(2)] = null);

(statearr_22110_22173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22095 === (5))){
var state_22094__$1 = state_22094;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22111_22174 = state_22094__$1;
(statearr_22111_22174[(1)] = (8));

} else {
var statearr_22112_22175 = state_22094__$1;
(statearr_22112_22175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22095 === (14))){
var inst_22072 = (state_22094[(8)]);
var inst_22074 = (state_22094[(11)]);
var inst_22072__$1 = (state_22094[(2)]);
var inst_22073 = (inst_22072__$1 == null);
var inst_22074__$1 = cljs.core.not.call(null,inst_22073);
var state_22094__$1 = (function (){var statearr_22113 = state_22094;
(statearr_22113[(8)] = inst_22072__$1);

(statearr_22113[(11)] = inst_22074__$1);

return statearr_22113;
})();
if(inst_22074__$1){
var statearr_22114_22176 = state_22094__$1;
(statearr_22114_22176[(1)] = (15));

} else {
var statearr_22115_22177 = state_22094__$1;
(statearr_22115_22177[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22095 === (16))){
var inst_22074 = (state_22094[(11)]);
var state_22094__$1 = state_22094;
var statearr_22116_22178 = state_22094__$1;
(statearr_22116_22178[(2)] = inst_22074);

(statearr_22116_22178[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22095 === (10))){
var inst_22066 = (state_22094[(2)]);
var state_22094__$1 = state_22094;
var statearr_22117_22179 = state_22094__$1;
(statearr_22117_22179[(2)] = inst_22066);

(statearr_22117_22179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22095 === (18))){
var inst_22077 = (state_22094[(2)]);
var state_22094__$1 = state_22094;
var statearr_22118_22180 = state_22094__$1;
(statearr_22118_22180[(2)] = inst_22077);

(statearr_22118_22180[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22095 === (8))){
var inst_22063 = cljs.core.async.close_BANG_.call(null,to);
var state_22094__$1 = state_22094;
var statearr_22119_22181 = state_22094__$1;
(statearr_22119_22181[(2)] = inst_22063);

(statearr_22119_22181[(1)] = (10));


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
});})(c__21577__auto__,jobs,results,process,async))
;
return ((function (switch__21465__auto__,c__21577__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____0 = (function (){
var statearr_22123 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22123[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__);

(statearr_22123[(1)] = (1));

return statearr_22123;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____1 = (function (state_22094){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_22094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e22124){if((e22124 instanceof Object)){
var ex__21469__auto__ = e22124;
var statearr_22125_22182 = state_22094;
(statearr_22125_22182[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22183 = state_22094;
state_22094 = G__22183;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__ = function(state_22094){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____1.call(this,state_22094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto__,jobs,results,process,async))
})();
var state__21579__auto__ = (function (){var statearr_22126 = f__21578__auto__.call(null);
(statearr_22126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto__);

return statearr_22126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto__,jobs,results,process,async))
);

return c__21577__auto__;
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
var args22184 = [];
var len__19529__auto___22187 = arguments.length;
var i__19530__auto___22188 = (0);
while(true){
if((i__19530__auto___22188 < len__19529__auto___22187)){
args22184.push((arguments[i__19530__auto___22188]));

var G__22189 = (i__19530__auto___22188 + (1));
i__19530__auto___22188 = G__22189;
continue;
} else {
}
break;
}

var G__22186 = args22184.length;
switch (G__22186) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22184.length)].join('')));

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
var args22191 = [];
var len__19529__auto___22194 = arguments.length;
var i__19530__auto___22195 = (0);
while(true){
if((i__19530__auto___22195 < len__19529__auto___22194)){
args22191.push((arguments[i__19530__auto___22195]));

var G__22196 = (i__19530__auto___22195 + (1));
i__19530__auto___22195 = G__22196;
continue;
} else {
}
break;
}

var G__22193 = args22191.length;
switch (G__22193) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22191.length)].join('')));

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
var args22198 = [];
var len__19529__auto___22251 = arguments.length;
var i__19530__auto___22252 = (0);
while(true){
if((i__19530__auto___22252 < len__19529__auto___22251)){
args22198.push((arguments[i__19530__auto___22252]));

var G__22253 = (i__19530__auto___22252 + (1));
i__19530__auto___22252 = G__22253;
continue;
} else {
}
break;
}

var G__22200 = args22198.length;
switch (G__22200) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22198.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21577__auto___22255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto___22255,tc,fc){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto___22255,tc,fc){
return (function (state_22226){
var state_val_22227 = (state_22226[(1)]);
if((state_val_22227 === (7))){
var inst_22222 = (state_22226[(2)]);
var state_22226__$1 = state_22226;
var statearr_22228_22256 = state_22226__$1;
(statearr_22228_22256[(2)] = inst_22222);

(statearr_22228_22256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (1))){
var state_22226__$1 = state_22226;
var statearr_22229_22257 = state_22226__$1;
(statearr_22229_22257[(2)] = null);

(statearr_22229_22257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (4))){
var inst_22203 = (state_22226[(7)]);
var inst_22203__$1 = (state_22226[(2)]);
var inst_22204 = (inst_22203__$1 == null);
var state_22226__$1 = (function (){var statearr_22230 = state_22226;
(statearr_22230[(7)] = inst_22203__$1);

return statearr_22230;
})();
if(cljs.core.truth_(inst_22204)){
var statearr_22231_22258 = state_22226__$1;
(statearr_22231_22258[(1)] = (5));

} else {
var statearr_22232_22259 = state_22226__$1;
(statearr_22232_22259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (13))){
var state_22226__$1 = state_22226;
var statearr_22233_22260 = state_22226__$1;
(statearr_22233_22260[(2)] = null);

(statearr_22233_22260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (6))){
var inst_22203 = (state_22226[(7)]);
var inst_22209 = p.call(null,inst_22203);
var state_22226__$1 = state_22226;
if(cljs.core.truth_(inst_22209)){
var statearr_22234_22261 = state_22226__$1;
(statearr_22234_22261[(1)] = (9));

} else {
var statearr_22235_22262 = state_22226__$1;
(statearr_22235_22262[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (3))){
var inst_22224 = (state_22226[(2)]);
var state_22226__$1 = state_22226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22226__$1,inst_22224);
} else {
if((state_val_22227 === (12))){
var state_22226__$1 = state_22226;
var statearr_22236_22263 = state_22226__$1;
(statearr_22236_22263[(2)] = null);

(statearr_22236_22263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (2))){
var state_22226__$1 = state_22226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22226__$1,(4),ch);
} else {
if((state_val_22227 === (11))){
var inst_22203 = (state_22226[(7)]);
var inst_22213 = (state_22226[(2)]);
var state_22226__$1 = state_22226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22226__$1,(8),inst_22213,inst_22203);
} else {
if((state_val_22227 === (9))){
var state_22226__$1 = state_22226;
var statearr_22237_22264 = state_22226__$1;
(statearr_22237_22264[(2)] = tc);

(statearr_22237_22264[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (5))){
var inst_22206 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22207 = cljs.core.async.close_BANG_.call(null,fc);
var state_22226__$1 = (function (){var statearr_22238 = state_22226;
(statearr_22238[(8)] = inst_22206);

return statearr_22238;
})();
var statearr_22239_22265 = state_22226__$1;
(statearr_22239_22265[(2)] = inst_22207);

(statearr_22239_22265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (14))){
var inst_22220 = (state_22226[(2)]);
var state_22226__$1 = state_22226;
var statearr_22240_22266 = state_22226__$1;
(statearr_22240_22266[(2)] = inst_22220);

(statearr_22240_22266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (10))){
var state_22226__$1 = state_22226;
var statearr_22241_22267 = state_22226__$1;
(statearr_22241_22267[(2)] = fc);

(statearr_22241_22267[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (8))){
var inst_22215 = (state_22226[(2)]);
var state_22226__$1 = state_22226;
if(cljs.core.truth_(inst_22215)){
var statearr_22242_22268 = state_22226__$1;
(statearr_22242_22268[(1)] = (12));

} else {
var statearr_22243_22269 = state_22226__$1;
(statearr_22243_22269[(1)] = (13));

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
});})(c__21577__auto___22255,tc,fc))
;
return ((function (switch__21465__auto__,c__21577__auto___22255,tc,fc){
return (function() {
var cljs$core$async$state_machine__21466__auto__ = null;
var cljs$core$async$state_machine__21466__auto____0 = (function (){
var statearr_22247 = [null,null,null,null,null,null,null,null,null];
(statearr_22247[(0)] = cljs$core$async$state_machine__21466__auto__);

(statearr_22247[(1)] = (1));

return statearr_22247;
});
var cljs$core$async$state_machine__21466__auto____1 = (function (state_22226){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_22226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e22248){if((e22248 instanceof Object)){
var ex__21469__auto__ = e22248;
var statearr_22249_22270 = state_22226;
(statearr_22249_22270[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22271 = state_22226;
state_22226 = G__22271;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$state_machine__21466__auto__ = function(state_22226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21466__auto____1.call(this,state_22226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21466__auto____0;
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21466__auto____1;
return cljs$core$async$state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto___22255,tc,fc))
})();
var state__21579__auto__ = (function (){var statearr_22250 = f__21578__auto__.call(null);
(statearr_22250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto___22255);

return statearr_22250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto___22255,tc,fc))
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
var c__21577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto__){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto__){
return (function (state_22335){
var state_val_22336 = (state_22335[(1)]);
if((state_val_22336 === (7))){
var inst_22331 = (state_22335[(2)]);
var state_22335__$1 = state_22335;
var statearr_22337_22358 = state_22335__$1;
(statearr_22337_22358[(2)] = inst_22331);

(statearr_22337_22358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (1))){
var inst_22315 = init;
var state_22335__$1 = (function (){var statearr_22338 = state_22335;
(statearr_22338[(7)] = inst_22315);

return statearr_22338;
})();
var statearr_22339_22359 = state_22335__$1;
(statearr_22339_22359[(2)] = null);

(statearr_22339_22359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (4))){
var inst_22318 = (state_22335[(8)]);
var inst_22318__$1 = (state_22335[(2)]);
var inst_22319 = (inst_22318__$1 == null);
var state_22335__$1 = (function (){var statearr_22340 = state_22335;
(statearr_22340[(8)] = inst_22318__$1);

return statearr_22340;
})();
if(cljs.core.truth_(inst_22319)){
var statearr_22341_22360 = state_22335__$1;
(statearr_22341_22360[(1)] = (5));

} else {
var statearr_22342_22361 = state_22335__$1;
(statearr_22342_22361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (6))){
var inst_22322 = (state_22335[(9)]);
var inst_22318 = (state_22335[(8)]);
var inst_22315 = (state_22335[(7)]);
var inst_22322__$1 = f.call(null,inst_22315,inst_22318);
var inst_22323 = cljs.core.reduced_QMARK_.call(null,inst_22322__$1);
var state_22335__$1 = (function (){var statearr_22343 = state_22335;
(statearr_22343[(9)] = inst_22322__$1);

return statearr_22343;
})();
if(inst_22323){
var statearr_22344_22362 = state_22335__$1;
(statearr_22344_22362[(1)] = (8));

} else {
var statearr_22345_22363 = state_22335__$1;
(statearr_22345_22363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (3))){
var inst_22333 = (state_22335[(2)]);
var state_22335__$1 = state_22335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22335__$1,inst_22333);
} else {
if((state_val_22336 === (2))){
var state_22335__$1 = state_22335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22335__$1,(4),ch);
} else {
if((state_val_22336 === (9))){
var inst_22322 = (state_22335[(9)]);
var inst_22315 = inst_22322;
var state_22335__$1 = (function (){var statearr_22346 = state_22335;
(statearr_22346[(7)] = inst_22315);

return statearr_22346;
})();
var statearr_22347_22364 = state_22335__$1;
(statearr_22347_22364[(2)] = null);

(statearr_22347_22364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (5))){
var inst_22315 = (state_22335[(7)]);
var state_22335__$1 = state_22335;
var statearr_22348_22365 = state_22335__$1;
(statearr_22348_22365[(2)] = inst_22315);

(statearr_22348_22365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (10))){
var inst_22329 = (state_22335[(2)]);
var state_22335__$1 = state_22335;
var statearr_22349_22366 = state_22335__$1;
(statearr_22349_22366[(2)] = inst_22329);

(statearr_22349_22366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (8))){
var inst_22322 = (state_22335[(9)]);
var inst_22325 = cljs.core.deref.call(null,inst_22322);
var state_22335__$1 = state_22335;
var statearr_22350_22367 = state_22335__$1;
(statearr_22350_22367[(2)] = inst_22325);

(statearr_22350_22367[(1)] = (10));


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
});})(c__21577__auto__))
;
return ((function (switch__21465__auto__,c__21577__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21466__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21466__auto____0 = (function (){
var statearr_22354 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22354[(0)] = cljs$core$async$reduce_$_state_machine__21466__auto__);

(statearr_22354[(1)] = (1));

return statearr_22354;
});
var cljs$core$async$reduce_$_state_machine__21466__auto____1 = (function (state_22335){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_22335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e22355){if((e22355 instanceof Object)){
var ex__21469__auto__ = e22355;
var statearr_22356_22368 = state_22335;
(statearr_22356_22368[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22369 = state_22335;
state_22335 = G__22369;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21466__auto__ = function(state_22335){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21466__auto____1.call(this,state_22335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21466__auto____0;
cljs$core$async$reduce_$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21466__auto____1;
return cljs$core$async$reduce_$_state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto__))
})();
var state__21579__auto__ = (function (){var statearr_22357 = f__21578__auto__.call(null);
(statearr_22357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto__);

return statearr_22357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto__))
);

return c__21577__auto__;
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
var args22370 = [];
var len__19529__auto___22422 = arguments.length;
var i__19530__auto___22423 = (0);
while(true){
if((i__19530__auto___22423 < len__19529__auto___22422)){
args22370.push((arguments[i__19530__auto___22423]));

var G__22424 = (i__19530__auto___22423 + (1));
i__19530__auto___22423 = G__22424;
continue;
} else {
}
break;
}

var G__22372 = args22370.length;
switch (G__22372) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22370.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto__){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto__){
return (function (state_22397){
var state_val_22398 = (state_22397[(1)]);
if((state_val_22398 === (7))){
var inst_22379 = (state_22397[(2)]);
var state_22397__$1 = state_22397;
var statearr_22399_22426 = state_22397__$1;
(statearr_22399_22426[(2)] = inst_22379);

(statearr_22399_22426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (1))){
var inst_22373 = cljs.core.seq.call(null,coll);
var inst_22374 = inst_22373;
var state_22397__$1 = (function (){var statearr_22400 = state_22397;
(statearr_22400[(7)] = inst_22374);

return statearr_22400;
})();
var statearr_22401_22427 = state_22397__$1;
(statearr_22401_22427[(2)] = null);

(statearr_22401_22427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (4))){
var inst_22374 = (state_22397[(7)]);
var inst_22377 = cljs.core.first.call(null,inst_22374);
var state_22397__$1 = state_22397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22397__$1,(7),ch,inst_22377);
} else {
if((state_val_22398 === (13))){
var inst_22391 = (state_22397[(2)]);
var state_22397__$1 = state_22397;
var statearr_22402_22428 = state_22397__$1;
(statearr_22402_22428[(2)] = inst_22391);

(statearr_22402_22428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (6))){
var inst_22382 = (state_22397[(2)]);
var state_22397__$1 = state_22397;
if(cljs.core.truth_(inst_22382)){
var statearr_22403_22429 = state_22397__$1;
(statearr_22403_22429[(1)] = (8));

} else {
var statearr_22404_22430 = state_22397__$1;
(statearr_22404_22430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (3))){
var inst_22395 = (state_22397[(2)]);
var state_22397__$1 = state_22397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22397__$1,inst_22395);
} else {
if((state_val_22398 === (12))){
var state_22397__$1 = state_22397;
var statearr_22405_22431 = state_22397__$1;
(statearr_22405_22431[(2)] = null);

(statearr_22405_22431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (2))){
var inst_22374 = (state_22397[(7)]);
var state_22397__$1 = state_22397;
if(cljs.core.truth_(inst_22374)){
var statearr_22406_22432 = state_22397__$1;
(statearr_22406_22432[(1)] = (4));

} else {
var statearr_22407_22433 = state_22397__$1;
(statearr_22407_22433[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (11))){
var inst_22388 = cljs.core.async.close_BANG_.call(null,ch);
var state_22397__$1 = state_22397;
var statearr_22408_22434 = state_22397__$1;
(statearr_22408_22434[(2)] = inst_22388);

(statearr_22408_22434[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (9))){
var state_22397__$1 = state_22397;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22409_22435 = state_22397__$1;
(statearr_22409_22435[(1)] = (11));

} else {
var statearr_22410_22436 = state_22397__$1;
(statearr_22410_22436[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (5))){
var inst_22374 = (state_22397[(7)]);
var state_22397__$1 = state_22397;
var statearr_22411_22437 = state_22397__$1;
(statearr_22411_22437[(2)] = inst_22374);

(statearr_22411_22437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (10))){
var inst_22393 = (state_22397[(2)]);
var state_22397__$1 = state_22397;
var statearr_22412_22438 = state_22397__$1;
(statearr_22412_22438[(2)] = inst_22393);

(statearr_22412_22438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (8))){
var inst_22374 = (state_22397[(7)]);
var inst_22384 = cljs.core.next.call(null,inst_22374);
var inst_22374__$1 = inst_22384;
var state_22397__$1 = (function (){var statearr_22413 = state_22397;
(statearr_22413[(7)] = inst_22374__$1);

return statearr_22413;
})();
var statearr_22414_22439 = state_22397__$1;
(statearr_22414_22439[(2)] = null);

(statearr_22414_22439[(1)] = (2));


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
});})(c__21577__auto__))
;
return ((function (switch__21465__auto__,c__21577__auto__){
return (function() {
var cljs$core$async$state_machine__21466__auto__ = null;
var cljs$core$async$state_machine__21466__auto____0 = (function (){
var statearr_22418 = [null,null,null,null,null,null,null,null];
(statearr_22418[(0)] = cljs$core$async$state_machine__21466__auto__);

(statearr_22418[(1)] = (1));

return statearr_22418;
});
var cljs$core$async$state_machine__21466__auto____1 = (function (state_22397){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_22397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e22419){if((e22419 instanceof Object)){
var ex__21469__auto__ = e22419;
var statearr_22420_22440 = state_22397;
(statearr_22420_22440[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22441 = state_22397;
state_22397 = G__22441;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$state_machine__21466__auto__ = function(state_22397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21466__auto____1.call(this,state_22397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21466__auto____0;
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21466__auto____1;
return cljs$core$async$state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto__))
})();
var state__21579__auto__ = (function (){var statearr_22421 = f__21578__auto__.call(null);
(statearr_22421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto__);

return statearr_22421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto__))
);

return c__21577__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async22663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22663 = (function (mult,ch,cs,meta22664){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22664 = meta22664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22665,meta22664__$1){
var self__ = this;
var _22665__$1 = this;
return (new cljs.core.async.t_cljs$core$async22663(self__.mult,self__.ch,self__.cs,meta22664__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22665){
var self__ = this;
var _22665__$1 = this;
return self__.meta22664;
});})(cs))
;

cljs.core.async.t_cljs$core$async22663.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22663.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22663.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22663.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22663.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22663.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22663.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22664","meta22664",-1665123702,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22663";

cljs.core.async.t_cljs$core$async22663.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async22663");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22663 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22663(mult__$1,ch__$1,cs__$1,meta22664){
return (new cljs.core.async.t_cljs$core$async22663(mult__$1,ch__$1,cs__$1,meta22664));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22663(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21577__auto___22884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto___22884,cs,m,dchan,dctr,done){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto___22884,cs,m,dchan,dctr,done){
return (function (state_22796){
var state_val_22797 = (state_22796[(1)]);
if((state_val_22797 === (7))){
var inst_22792 = (state_22796[(2)]);
var state_22796__$1 = state_22796;
var statearr_22798_22885 = state_22796__$1;
(statearr_22798_22885[(2)] = inst_22792);

(statearr_22798_22885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (20))){
var inst_22697 = (state_22796[(7)]);
var inst_22707 = cljs.core.first.call(null,inst_22697);
var inst_22708 = cljs.core.nth.call(null,inst_22707,(0),null);
var inst_22709 = cljs.core.nth.call(null,inst_22707,(1),null);
var state_22796__$1 = (function (){var statearr_22799 = state_22796;
(statearr_22799[(8)] = inst_22708);

return statearr_22799;
})();
if(cljs.core.truth_(inst_22709)){
var statearr_22800_22886 = state_22796__$1;
(statearr_22800_22886[(1)] = (22));

} else {
var statearr_22801_22887 = state_22796__$1;
(statearr_22801_22887[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (27))){
var inst_22744 = (state_22796[(9)]);
var inst_22739 = (state_22796[(10)]);
var inst_22668 = (state_22796[(11)]);
var inst_22737 = (state_22796[(12)]);
var inst_22744__$1 = cljs.core._nth.call(null,inst_22737,inst_22739);
var inst_22745 = cljs.core.async.put_BANG_.call(null,inst_22744__$1,inst_22668,done);
var state_22796__$1 = (function (){var statearr_22802 = state_22796;
(statearr_22802[(9)] = inst_22744__$1);

return statearr_22802;
})();
if(cljs.core.truth_(inst_22745)){
var statearr_22803_22888 = state_22796__$1;
(statearr_22803_22888[(1)] = (30));

} else {
var statearr_22804_22889 = state_22796__$1;
(statearr_22804_22889[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (1))){
var state_22796__$1 = state_22796;
var statearr_22805_22890 = state_22796__$1;
(statearr_22805_22890[(2)] = null);

(statearr_22805_22890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (24))){
var inst_22697 = (state_22796[(7)]);
var inst_22714 = (state_22796[(2)]);
var inst_22715 = cljs.core.next.call(null,inst_22697);
var inst_22677 = inst_22715;
var inst_22678 = null;
var inst_22679 = (0);
var inst_22680 = (0);
var state_22796__$1 = (function (){var statearr_22806 = state_22796;
(statearr_22806[(13)] = inst_22678);

(statearr_22806[(14)] = inst_22680);

(statearr_22806[(15)] = inst_22714);

(statearr_22806[(16)] = inst_22679);

(statearr_22806[(17)] = inst_22677);

return statearr_22806;
})();
var statearr_22807_22891 = state_22796__$1;
(statearr_22807_22891[(2)] = null);

(statearr_22807_22891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (39))){
var state_22796__$1 = state_22796;
var statearr_22811_22892 = state_22796__$1;
(statearr_22811_22892[(2)] = null);

(statearr_22811_22892[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (4))){
var inst_22668 = (state_22796[(11)]);
var inst_22668__$1 = (state_22796[(2)]);
var inst_22669 = (inst_22668__$1 == null);
var state_22796__$1 = (function (){var statearr_22812 = state_22796;
(statearr_22812[(11)] = inst_22668__$1);

return statearr_22812;
})();
if(cljs.core.truth_(inst_22669)){
var statearr_22813_22893 = state_22796__$1;
(statearr_22813_22893[(1)] = (5));

} else {
var statearr_22814_22894 = state_22796__$1;
(statearr_22814_22894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (15))){
var inst_22678 = (state_22796[(13)]);
var inst_22680 = (state_22796[(14)]);
var inst_22679 = (state_22796[(16)]);
var inst_22677 = (state_22796[(17)]);
var inst_22693 = (state_22796[(2)]);
var inst_22694 = (inst_22680 + (1));
var tmp22808 = inst_22678;
var tmp22809 = inst_22679;
var tmp22810 = inst_22677;
var inst_22677__$1 = tmp22810;
var inst_22678__$1 = tmp22808;
var inst_22679__$1 = tmp22809;
var inst_22680__$1 = inst_22694;
var state_22796__$1 = (function (){var statearr_22815 = state_22796;
(statearr_22815[(13)] = inst_22678__$1);

(statearr_22815[(14)] = inst_22680__$1);

(statearr_22815[(16)] = inst_22679__$1);

(statearr_22815[(18)] = inst_22693);

(statearr_22815[(17)] = inst_22677__$1);

return statearr_22815;
})();
var statearr_22816_22895 = state_22796__$1;
(statearr_22816_22895[(2)] = null);

(statearr_22816_22895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (21))){
var inst_22718 = (state_22796[(2)]);
var state_22796__$1 = state_22796;
var statearr_22820_22896 = state_22796__$1;
(statearr_22820_22896[(2)] = inst_22718);

(statearr_22820_22896[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (31))){
var inst_22744 = (state_22796[(9)]);
var inst_22748 = done.call(null,null);
var inst_22749 = cljs.core.async.untap_STAR_.call(null,m,inst_22744);
var state_22796__$1 = (function (){var statearr_22821 = state_22796;
(statearr_22821[(19)] = inst_22748);

return statearr_22821;
})();
var statearr_22822_22897 = state_22796__$1;
(statearr_22822_22897[(2)] = inst_22749);

(statearr_22822_22897[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (32))){
var inst_22739 = (state_22796[(10)]);
var inst_22736 = (state_22796[(20)]);
var inst_22738 = (state_22796[(21)]);
var inst_22737 = (state_22796[(12)]);
var inst_22751 = (state_22796[(2)]);
var inst_22752 = (inst_22739 + (1));
var tmp22817 = inst_22736;
var tmp22818 = inst_22738;
var tmp22819 = inst_22737;
var inst_22736__$1 = tmp22817;
var inst_22737__$1 = tmp22819;
var inst_22738__$1 = tmp22818;
var inst_22739__$1 = inst_22752;
var state_22796__$1 = (function (){var statearr_22823 = state_22796;
(statearr_22823[(10)] = inst_22739__$1);

(statearr_22823[(20)] = inst_22736__$1);

(statearr_22823[(22)] = inst_22751);

(statearr_22823[(21)] = inst_22738__$1);

(statearr_22823[(12)] = inst_22737__$1);

return statearr_22823;
})();
var statearr_22824_22898 = state_22796__$1;
(statearr_22824_22898[(2)] = null);

(statearr_22824_22898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (40))){
var inst_22764 = (state_22796[(23)]);
var inst_22768 = done.call(null,null);
var inst_22769 = cljs.core.async.untap_STAR_.call(null,m,inst_22764);
var state_22796__$1 = (function (){var statearr_22825 = state_22796;
(statearr_22825[(24)] = inst_22768);

return statearr_22825;
})();
var statearr_22826_22899 = state_22796__$1;
(statearr_22826_22899[(2)] = inst_22769);

(statearr_22826_22899[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (33))){
var inst_22755 = (state_22796[(25)]);
var inst_22757 = cljs.core.chunked_seq_QMARK_.call(null,inst_22755);
var state_22796__$1 = state_22796;
if(inst_22757){
var statearr_22827_22900 = state_22796__$1;
(statearr_22827_22900[(1)] = (36));

} else {
var statearr_22828_22901 = state_22796__$1;
(statearr_22828_22901[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (13))){
var inst_22687 = (state_22796[(26)]);
var inst_22690 = cljs.core.async.close_BANG_.call(null,inst_22687);
var state_22796__$1 = state_22796;
var statearr_22829_22902 = state_22796__$1;
(statearr_22829_22902[(2)] = inst_22690);

(statearr_22829_22902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (22))){
var inst_22708 = (state_22796[(8)]);
var inst_22711 = cljs.core.async.close_BANG_.call(null,inst_22708);
var state_22796__$1 = state_22796;
var statearr_22830_22903 = state_22796__$1;
(statearr_22830_22903[(2)] = inst_22711);

(statearr_22830_22903[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (36))){
var inst_22755 = (state_22796[(25)]);
var inst_22759 = cljs.core.chunk_first.call(null,inst_22755);
var inst_22760 = cljs.core.chunk_rest.call(null,inst_22755);
var inst_22761 = cljs.core.count.call(null,inst_22759);
var inst_22736 = inst_22760;
var inst_22737 = inst_22759;
var inst_22738 = inst_22761;
var inst_22739 = (0);
var state_22796__$1 = (function (){var statearr_22831 = state_22796;
(statearr_22831[(10)] = inst_22739);

(statearr_22831[(20)] = inst_22736);

(statearr_22831[(21)] = inst_22738);

(statearr_22831[(12)] = inst_22737);

return statearr_22831;
})();
var statearr_22832_22904 = state_22796__$1;
(statearr_22832_22904[(2)] = null);

(statearr_22832_22904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (41))){
var inst_22755 = (state_22796[(25)]);
var inst_22771 = (state_22796[(2)]);
var inst_22772 = cljs.core.next.call(null,inst_22755);
var inst_22736 = inst_22772;
var inst_22737 = null;
var inst_22738 = (0);
var inst_22739 = (0);
var state_22796__$1 = (function (){var statearr_22833 = state_22796;
(statearr_22833[(27)] = inst_22771);

(statearr_22833[(10)] = inst_22739);

(statearr_22833[(20)] = inst_22736);

(statearr_22833[(21)] = inst_22738);

(statearr_22833[(12)] = inst_22737);

return statearr_22833;
})();
var statearr_22834_22905 = state_22796__$1;
(statearr_22834_22905[(2)] = null);

(statearr_22834_22905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (43))){
var state_22796__$1 = state_22796;
var statearr_22835_22906 = state_22796__$1;
(statearr_22835_22906[(2)] = null);

(statearr_22835_22906[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (29))){
var inst_22780 = (state_22796[(2)]);
var state_22796__$1 = state_22796;
var statearr_22836_22907 = state_22796__$1;
(statearr_22836_22907[(2)] = inst_22780);

(statearr_22836_22907[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (44))){
var inst_22789 = (state_22796[(2)]);
var state_22796__$1 = (function (){var statearr_22837 = state_22796;
(statearr_22837[(28)] = inst_22789);

return statearr_22837;
})();
var statearr_22838_22908 = state_22796__$1;
(statearr_22838_22908[(2)] = null);

(statearr_22838_22908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (6))){
var inst_22728 = (state_22796[(29)]);
var inst_22727 = cljs.core.deref.call(null,cs);
var inst_22728__$1 = cljs.core.keys.call(null,inst_22727);
var inst_22729 = cljs.core.count.call(null,inst_22728__$1);
var inst_22730 = cljs.core.reset_BANG_.call(null,dctr,inst_22729);
var inst_22735 = cljs.core.seq.call(null,inst_22728__$1);
var inst_22736 = inst_22735;
var inst_22737 = null;
var inst_22738 = (0);
var inst_22739 = (0);
var state_22796__$1 = (function (){var statearr_22839 = state_22796;
(statearr_22839[(10)] = inst_22739);

(statearr_22839[(29)] = inst_22728__$1);

(statearr_22839[(30)] = inst_22730);

(statearr_22839[(20)] = inst_22736);

(statearr_22839[(21)] = inst_22738);

(statearr_22839[(12)] = inst_22737);

return statearr_22839;
})();
var statearr_22840_22909 = state_22796__$1;
(statearr_22840_22909[(2)] = null);

(statearr_22840_22909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (28))){
var inst_22736 = (state_22796[(20)]);
var inst_22755 = (state_22796[(25)]);
var inst_22755__$1 = cljs.core.seq.call(null,inst_22736);
var state_22796__$1 = (function (){var statearr_22841 = state_22796;
(statearr_22841[(25)] = inst_22755__$1);

return statearr_22841;
})();
if(inst_22755__$1){
var statearr_22842_22910 = state_22796__$1;
(statearr_22842_22910[(1)] = (33));

} else {
var statearr_22843_22911 = state_22796__$1;
(statearr_22843_22911[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (25))){
var inst_22739 = (state_22796[(10)]);
var inst_22738 = (state_22796[(21)]);
var inst_22741 = (inst_22739 < inst_22738);
var inst_22742 = inst_22741;
var state_22796__$1 = state_22796;
if(cljs.core.truth_(inst_22742)){
var statearr_22844_22912 = state_22796__$1;
(statearr_22844_22912[(1)] = (27));

} else {
var statearr_22845_22913 = state_22796__$1;
(statearr_22845_22913[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (34))){
var state_22796__$1 = state_22796;
var statearr_22846_22914 = state_22796__$1;
(statearr_22846_22914[(2)] = null);

(statearr_22846_22914[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (17))){
var state_22796__$1 = state_22796;
var statearr_22847_22915 = state_22796__$1;
(statearr_22847_22915[(2)] = null);

(statearr_22847_22915[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (3))){
var inst_22794 = (state_22796[(2)]);
var state_22796__$1 = state_22796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22796__$1,inst_22794);
} else {
if((state_val_22797 === (12))){
var inst_22723 = (state_22796[(2)]);
var state_22796__$1 = state_22796;
var statearr_22848_22916 = state_22796__$1;
(statearr_22848_22916[(2)] = inst_22723);

(statearr_22848_22916[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (2))){
var state_22796__$1 = state_22796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22796__$1,(4),ch);
} else {
if((state_val_22797 === (23))){
var state_22796__$1 = state_22796;
var statearr_22849_22917 = state_22796__$1;
(statearr_22849_22917[(2)] = null);

(statearr_22849_22917[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (35))){
var inst_22778 = (state_22796[(2)]);
var state_22796__$1 = state_22796;
var statearr_22850_22918 = state_22796__$1;
(statearr_22850_22918[(2)] = inst_22778);

(statearr_22850_22918[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (19))){
var inst_22697 = (state_22796[(7)]);
var inst_22701 = cljs.core.chunk_first.call(null,inst_22697);
var inst_22702 = cljs.core.chunk_rest.call(null,inst_22697);
var inst_22703 = cljs.core.count.call(null,inst_22701);
var inst_22677 = inst_22702;
var inst_22678 = inst_22701;
var inst_22679 = inst_22703;
var inst_22680 = (0);
var state_22796__$1 = (function (){var statearr_22851 = state_22796;
(statearr_22851[(13)] = inst_22678);

(statearr_22851[(14)] = inst_22680);

(statearr_22851[(16)] = inst_22679);

(statearr_22851[(17)] = inst_22677);

return statearr_22851;
})();
var statearr_22852_22919 = state_22796__$1;
(statearr_22852_22919[(2)] = null);

(statearr_22852_22919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (11))){
var inst_22697 = (state_22796[(7)]);
var inst_22677 = (state_22796[(17)]);
var inst_22697__$1 = cljs.core.seq.call(null,inst_22677);
var state_22796__$1 = (function (){var statearr_22853 = state_22796;
(statearr_22853[(7)] = inst_22697__$1);

return statearr_22853;
})();
if(inst_22697__$1){
var statearr_22854_22920 = state_22796__$1;
(statearr_22854_22920[(1)] = (16));

} else {
var statearr_22855_22921 = state_22796__$1;
(statearr_22855_22921[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (9))){
var inst_22725 = (state_22796[(2)]);
var state_22796__$1 = state_22796;
var statearr_22856_22922 = state_22796__$1;
(statearr_22856_22922[(2)] = inst_22725);

(statearr_22856_22922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (5))){
var inst_22675 = cljs.core.deref.call(null,cs);
var inst_22676 = cljs.core.seq.call(null,inst_22675);
var inst_22677 = inst_22676;
var inst_22678 = null;
var inst_22679 = (0);
var inst_22680 = (0);
var state_22796__$1 = (function (){var statearr_22857 = state_22796;
(statearr_22857[(13)] = inst_22678);

(statearr_22857[(14)] = inst_22680);

(statearr_22857[(16)] = inst_22679);

(statearr_22857[(17)] = inst_22677);

return statearr_22857;
})();
var statearr_22858_22923 = state_22796__$1;
(statearr_22858_22923[(2)] = null);

(statearr_22858_22923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (14))){
var state_22796__$1 = state_22796;
var statearr_22859_22924 = state_22796__$1;
(statearr_22859_22924[(2)] = null);

(statearr_22859_22924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (45))){
var inst_22786 = (state_22796[(2)]);
var state_22796__$1 = state_22796;
var statearr_22860_22925 = state_22796__$1;
(statearr_22860_22925[(2)] = inst_22786);

(statearr_22860_22925[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (26))){
var inst_22728 = (state_22796[(29)]);
var inst_22782 = (state_22796[(2)]);
var inst_22783 = cljs.core.seq.call(null,inst_22728);
var state_22796__$1 = (function (){var statearr_22861 = state_22796;
(statearr_22861[(31)] = inst_22782);

return statearr_22861;
})();
if(inst_22783){
var statearr_22862_22926 = state_22796__$1;
(statearr_22862_22926[(1)] = (42));

} else {
var statearr_22863_22927 = state_22796__$1;
(statearr_22863_22927[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (16))){
var inst_22697 = (state_22796[(7)]);
var inst_22699 = cljs.core.chunked_seq_QMARK_.call(null,inst_22697);
var state_22796__$1 = state_22796;
if(inst_22699){
var statearr_22864_22928 = state_22796__$1;
(statearr_22864_22928[(1)] = (19));

} else {
var statearr_22865_22929 = state_22796__$1;
(statearr_22865_22929[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (38))){
var inst_22775 = (state_22796[(2)]);
var state_22796__$1 = state_22796;
var statearr_22866_22930 = state_22796__$1;
(statearr_22866_22930[(2)] = inst_22775);

(statearr_22866_22930[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (30))){
var state_22796__$1 = state_22796;
var statearr_22867_22931 = state_22796__$1;
(statearr_22867_22931[(2)] = null);

(statearr_22867_22931[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (10))){
var inst_22678 = (state_22796[(13)]);
var inst_22680 = (state_22796[(14)]);
var inst_22686 = cljs.core._nth.call(null,inst_22678,inst_22680);
var inst_22687 = cljs.core.nth.call(null,inst_22686,(0),null);
var inst_22688 = cljs.core.nth.call(null,inst_22686,(1),null);
var state_22796__$1 = (function (){var statearr_22868 = state_22796;
(statearr_22868[(26)] = inst_22687);

return statearr_22868;
})();
if(cljs.core.truth_(inst_22688)){
var statearr_22869_22932 = state_22796__$1;
(statearr_22869_22932[(1)] = (13));

} else {
var statearr_22870_22933 = state_22796__$1;
(statearr_22870_22933[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (18))){
var inst_22721 = (state_22796[(2)]);
var state_22796__$1 = state_22796;
var statearr_22871_22934 = state_22796__$1;
(statearr_22871_22934[(2)] = inst_22721);

(statearr_22871_22934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (42))){
var state_22796__$1 = state_22796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22796__$1,(45),dchan);
} else {
if((state_val_22797 === (37))){
var inst_22668 = (state_22796[(11)]);
var inst_22764 = (state_22796[(23)]);
var inst_22755 = (state_22796[(25)]);
var inst_22764__$1 = cljs.core.first.call(null,inst_22755);
var inst_22765 = cljs.core.async.put_BANG_.call(null,inst_22764__$1,inst_22668,done);
var state_22796__$1 = (function (){var statearr_22872 = state_22796;
(statearr_22872[(23)] = inst_22764__$1);

return statearr_22872;
})();
if(cljs.core.truth_(inst_22765)){
var statearr_22873_22935 = state_22796__$1;
(statearr_22873_22935[(1)] = (39));

} else {
var statearr_22874_22936 = state_22796__$1;
(statearr_22874_22936[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22797 === (8))){
var inst_22680 = (state_22796[(14)]);
var inst_22679 = (state_22796[(16)]);
var inst_22682 = (inst_22680 < inst_22679);
var inst_22683 = inst_22682;
var state_22796__$1 = state_22796;
if(cljs.core.truth_(inst_22683)){
var statearr_22875_22937 = state_22796__$1;
(statearr_22875_22937[(1)] = (10));

} else {
var statearr_22876_22938 = state_22796__$1;
(statearr_22876_22938[(1)] = (11));

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
});})(c__21577__auto___22884,cs,m,dchan,dctr,done))
;
return ((function (switch__21465__auto__,c__21577__auto___22884,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21466__auto__ = null;
var cljs$core$async$mult_$_state_machine__21466__auto____0 = (function (){
var statearr_22880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22880[(0)] = cljs$core$async$mult_$_state_machine__21466__auto__);

(statearr_22880[(1)] = (1));

return statearr_22880;
});
var cljs$core$async$mult_$_state_machine__21466__auto____1 = (function (state_22796){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_22796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e22881){if((e22881 instanceof Object)){
var ex__21469__auto__ = e22881;
var statearr_22882_22939 = state_22796;
(statearr_22882_22939[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22940 = state_22796;
state_22796 = G__22940;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21466__auto__ = function(state_22796){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21466__auto____1.call(this,state_22796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21466__auto____0;
cljs$core$async$mult_$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21466__auto____1;
return cljs$core$async$mult_$_state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto___22884,cs,m,dchan,dctr,done))
})();
var state__21579__auto__ = (function (){var statearr_22883 = f__21578__auto__.call(null);
(statearr_22883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto___22884);

return statearr_22883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto___22884,cs,m,dchan,dctr,done))
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
var args22941 = [];
var len__19529__auto___22944 = arguments.length;
var i__19530__auto___22945 = (0);
while(true){
if((i__19530__auto___22945 < len__19529__auto___22944)){
args22941.push((arguments[i__19530__auto___22945]));

var G__22946 = (i__19530__auto___22945 + (1));
i__19530__auto___22945 = G__22946;
continue;
} else {
}
break;
}

var G__22943 = args22941.length;
switch (G__22943) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22941.length)].join('')));

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
var len__19529__auto___22958 = arguments.length;
var i__19530__auto___22959 = (0);
while(true){
if((i__19530__auto___22959 < len__19529__auto___22958)){
args__19536__auto__.push((arguments[i__19530__auto___22959]));

var G__22960 = (i__19530__auto___22959 + (1));
i__19530__auto___22959 = G__22960;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((3) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19537__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22952){
var map__22953 = p__22952;
var map__22953__$1 = ((((!((map__22953 == null)))?((((map__22953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22953):map__22953);
var opts = map__22953__$1;
var statearr_22955_22961 = state;
(statearr_22955_22961[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__22953,map__22953__$1,opts){
return (function (val){
var statearr_22956_22962 = state;
(statearr_22956_22962[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22953,map__22953__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22957_22963 = state;
(statearr_22957_22963[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22948){
var G__22949 = cljs.core.first.call(null,seq22948);
var seq22948__$1 = cljs.core.next.call(null,seq22948);
var G__22950 = cljs.core.first.call(null,seq22948__$1);
var seq22948__$2 = cljs.core.next.call(null,seq22948__$1);
var G__22951 = cljs.core.first.call(null,seq22948__$2);
var seq22948__$3 = cljs.core.next.call(null,seq22948__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22949,G__22950,G__22951,seq22948__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23127 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23128){
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
this.meta23128 = meta23128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23129,meta23128__$1){
var self__ = this;
var _23129__$1 = this;
return (new cljs.core.async.t_cljs$core$async23127(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23128__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23129){
var self__ = this;
var _23129__$1 = this;
return self__.meta23128;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23127.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23127.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23127.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23127.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23127.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23127.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23127.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23127.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23127.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23128","meta23128",-518596447,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23127";

cljs.core.async.t_cljs$core$async23127.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23127");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23127 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23127(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23128){
return (new cljs.core.async.t_cljs$core$async23127(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23128));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23127(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21577__auto___23290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto___23290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto___23290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23227){
var state_val_23228 = (state_23227[(1)]);
if((state_val_23228 === (7))){
var inst_23145 = (state_23227[(2)]);
var state_23227__$1 = state_23227;
var statearr_23229_23291 = state_23227__$1;
(statearr_23229_23291[(2)] = inst_23145);

(statearr_23229_23291[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (20))){
var inst_23157 = (state_23227[(7)]);
var state_23227__$1 = state_23227;
var statearr_23230_23292 = state_23227__$1;
(statearr_23230_23292[(2)] = inst_23157);

(statearr_23230_23292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (27))){
var state_23227__$1 = state_23227;
var statearr_23231_23293 = state_23227__$1;
(statearr_23231_23293[(2)] = null);

(statearr_23231_23293[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (1))){
var inst_23133 = (state_23227[(8)]);
var inst_23133__$1 = calc_state.call(null);
var inst_23135 = (inst_23133__$1 == null);
var inst_23136 = cljs.core.not.call(null,inst_23135);
var state_23227__$1 = (function (){var statearr_23232 = state_23227;
(statearr_23232[(8)] = inst_23133__$1);

return statearr_23232;
})();
if(inst_23136){
var statearr_23233_23294 = state_23227__$1;
(statearr_23233_23294[(1)] = (2));

} else {
var statearr_23234_23295 = state_23227__$1;
(statearr_23234_23295[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (24))){
var inst_23187 = (state_23227[(9)]);
var inst_23180 = (state_23227[(10)]);
var inst_23201 = (state_23227[(11)]);
var inst_23201__$1 = inst_23180.call(null,inst_23187);
var state_23227__$1 = (function (){var statearr_23235 = state_23227;
(statearr_23235[(11)] = inst_23201__$1);

return statearr_23235;
})();
if(cljs.core.truth_(inst_23201__$1)){
var statearr_23236_23296 = state_23227__$1;
(statearr_23236_23296[(1)] = (29));

} else {
var statearr_23237_23297 = state_23227__$1;
(statearr_23237_23297[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (4))){
var inst_23148 = (state_23227[(2)]);
var state_23227__$1 = state_23227;
if(cljs.core.truth_(inst_23148)){
var statearr_23238_23298 = state_23227__$1;
(statearr_23238_23298[(1)] = (8));

} else {
var statearr_23239_23299 = state_23227__$1;
(statearr_23239_23299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (15))){
var inst_23174 = (state_23227[(2)]);
var state_23227__$1 = state_23227;
if(cljs.core.truth_(inst_23174)){
var statearr_23240_23300 = state_23227__$1;
(statearr_23240_23300[(1)] = (19));

} else {
var statearr_23241_23301 = state_23227__$1;
(statearr_23241_23301[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (21))){
var inst_23179 = (state_23227[(12)]);
var inst_23179__$1 = (state_23227[(2)]);
var inst_23180 = cljs.core.get.call(null,inst_23179__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23181 = cljs.core.get.call(null,inst_23179__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23182 = cljs.core.get.call(null,inst_23179__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23227__$1 = (function (){var statearr_23242 = state_23227;
(statearr_23242[(13)] = inst_23181);

(statearr_23242[(10)] = inst_23180);

(statearr_23242[(12)] = inst_23179__$1);

return statearr_23242;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23227__$1,(22),inst_23182);
} else {
if((state_val_23228 === (31))){
var inst_23209 = (state_23227[(2)]);
var state_23227__$1 = state_23227;
if(cljs.core.truth_(inst_23209)){
var statearr_23243_23302 = state_23227__$1;
(statearr_23243_23302[(1)] = (32));

} else {
var statearr_23244_23303 = state_23227__$1;
(statearr_23244_23303[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (32))){
var inst_23186 = (state_23227[(14)]);
var state_23227__$1 = state_23227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23227__$1,(35),out,inst_23186);
} else {
if((state_val_23228 === (33))){
var inst_23179 = (state_23227[(12)]);
var inst_23157 = inst_23179;
var state_23227__$1 = (function (){var statearr_23245 = state_23227;
(statearr_23245[(7)] = inst_23157);

return statearr_23245;
})();
var statearr_23246_23304 = state_23227__$1;
(statearr_23246_23304[(2)] = null);

(statearr_23246_23304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (13))){
var inst_23157 = (state_23227[(7)]);
var inst_23164 = inst_23157.cljs$lang$protocol_mask$partition0$;
var inst_23165 = (inst_23164 & (64));
var inst_23166 = inst_23157.cljs$core$ISeq$;
var inst_23167 = (inst_23165) || (inst_23166);
var state_23227__$1 = state_23227;
if(cljs.core.truth_(inst_23167)){
var statearr_23247_23305 = state_23227__$1;
(statearr_23247_23305[(1)] = (16));

} else {
var statearr_23248_23306 = state_23227__$1;
(statearr_23248_23306[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (22))){
var inst_23187 = (state_23227[(9)]);
var inst_23186 = (state_23227[(14)]);
var inst_23185 = (state_23227[(2)]);
var inst_23186__$1 = cljs.core.nth.call(null,inst_23185,(0),null);
var inst_23187__$1 = cljs.core.nth.call(null,inst_23185,(1),null);
var inst_23188 = (inst_23186__$1 == null);
var inst_23189 = cljs.core._EQ_.call(null,inst_23187__$1,change);
var inst_23190 = (inst_23188) || (inst_23189);
var state_23227__$1 = (function (){var statearr_23249 = state_23227;
(statearr_23249[(9)] = inst_23187__$1);

(statearr_23249[(14)] = inst_23186__$1);

return statearr_23249;
})();
if(cljs.core.truth_(inst_23190)){
var statearr_23250_23307 = state_23227__$1;
(statearr_23250_23307[(1)] = (23));

} else {
var statearr_23251_23308 = state_23227__$1;
(statearr_23251_23308[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (36))){
var inst_23179 = (state_23227[(12)]);
var inst_23157 = inst_23179;
var state_23227__$1 = (function (){var statearr_23252 = state_23227;
(statearr_23252[(7)] = inst_23157);

return statearr_23252;
})();
var statearr_23253_23309 = state_23227__$1;
(statearr_23253_23309[(2)] = null);

(statearr_23253_23309[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (29))){
var inst_23201 = (state_23227[(11)]);
var state_23227__$1 = state_23227;
var statearr_23254_23310 = state_23227__$1;
(statearr_23254_23310[(2)] = inst_23201);

(statearr_23254_23310[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (6))){
var state_23227__$1 = state_23227;
var statearr_23255_23311 = state_23227__$1;
(statearr_23255_23311[(2)] = false);

(statearr_23255_23311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (28))){
var inst_23197 = (state_23227[(2)]);
var inst_23198 = calc_state.call(null);
var inst_23157 = inst_23198;
var state_23227__$1 = (function (){var statearr_23256 = state_23227;
(statearr_23256[(15)] = inst_23197);

(statearr_23256[(7)] = inst_23157);

return statearr_23256;
})();
var statearr_23257_23312 = state_23227__$1;
(statearr_23257_23312[(2)] = null);

(statearr_23257_23312[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (25))){
var inst_23223 = (state_23227[(2)]);
var state_23227__$1 = state_23227;
var statearr_23258_23313 = state_23227__$1;
(statearr_23258_23313[(2)] = inst_23223);

(statearr_23258_23313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (34))){
var inst_23221 = (state_23227[(2)]);
var state_23227__$1 = state_23227;
var statearr_23259_23314 = state_23227__$1;
(statearr_23259_23314[(2)] = inst_23221);

(statearr_23259_23314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (17))){
var state_23227__$1 = state_23227;
var statearr_23260_23315 = state_23227__$1;
(statearr_23260_23315[(2)] = false);

(statearr_23260_23315[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (3))){
var state_23227__$1 = state_23227;
var statearr_23261_23316 = state_23227__$1;
(statearr_23261_23316[(2)] = false);

(statearr_23261_23316[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (12))){
var inst_23225 = (state_23227[(2)]);
var state_23227__$1 = state_23227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23227__$1,inst_23225);
} else {
if((state_val_23228 === (2))){
var inst_23133 = (state_23227[(8)]);
var inst_23138 = inst_23133.cljs$lang$protocol_mask$partition0$;
var inst_23139 = (inst_23138 & (64));
var inst_23140 = inst_23133.cljs$core$ISeq$;
var inst_23141 = (inst_23139) || (inst_23140);
var state_23227__$1 = state_23227;
if(cljs.core.truth_(inst_23141)){
var statearr_23262_23317 = state_23227__$1;
(statearr_23262_23317[(1)] = (5));

} else {
var statearr_23263_23318 = state_23227__$1;
(statearr_23263_23318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (23))){
var inst_23186 = (state_23227[(14)]);
var inst_23192 = (inst_23186 == null);
var state_23227__$1 = state_23227;
if(cljs.core.truth_(inst_23192)){
var statearr_23264_23319 = state_23227__$1;
(statearr_23264_23319[(1)] = (26));

} else {
var statearr_23265_23320 = state_23227__$1;
(statearr_23265_23320[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (35))){
var inst_23212 = (state_23227[(2)]);
var state_23227__$1 = state_23227;
if(cljs.core.truth_(inst_23212)){
var statearr_23266_23321 = state_23227__$1;
(statearr_23266_23321[(1)] = (36));

} else {
var statearr_23267_23322 = state_23227__$1;
(statearr_23267_23322[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (19))){
var inst_23157 = (state_23227[(7)]);
var inst_23176 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23157);
var state_23227__$1 = state_23227;
var statearr_23268_23323 = state_23227__$1;
(statearr_23268_23323[(2)] = inst_23176);

(statearr_23268_23323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (11))){
var inst_23157 = (state_23227[(7)]);
var inst_23161 = (inst_23157 == null);
var inst_23162 = cljs.core.not.call(null,inst_23161);
var state_23227__$1 = state_23227;
if(inst_23162){
var statearr_23269_23324 = state_23227__$1;
(statearr_23269_23324[(1)] = (13));

} else {
var statearr_23270_23325 = state_23227__$1;
(statearr_23270_23325[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (9))){
var inst_23133 = (state_23227[(8)]);
var state_23227__$1 = state_23227;
var statearr_23271_23326 = state_23227__$1;
(statearr_23271_23326[(2)] = inst_23133);

(statearr_23271_23326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (5))){
var state_23227__$1 = state_23227;
var statearr_23272_23327 = state_23227__$1;
(statearr_23272_23327[(2)] = true);

(statearr_23272_23327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (14))){
var state_23227__$1 = state_23227;
var statearr_23273_23328 = state_23227__$1;
(statearr_23273_23328[(2)] = false);

(statearr_23273_23328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (26))){
var inst_23187 = (state_23227[(9)]);
var inst_23194 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23187);
var state_23227__$1 = state_23227;
var statearr_23274_23329 = state_23227__$1;
(statearr_23274_23329[(2)] = inst_23194);

(statearr_23274_23329[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (16))){
var state_23227__$1 = state_23227;
var statearr_23275_23330 = state_23227__$1;
(statearr_23275_23330[(2)] = true);

(statearr_23275_23330[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (38))){
var inst_23217 = (state_23227[(2)]);
var state_23227__$1 = state_23227;
var statearr_23276_23331 = state_23227__$1;
(statearr_23276_23331[(2)] = inst_23217);

(statearr_23276_23331[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (30))){
var inst_23187 = (state_23227[(9)]);
var inst_23181 = (state_23227[(13)]);
var inst_23180 = (state_23227[(10)]);
var inst_23204 = cljs.core.empty_QMARK_.call(null,inst_23180);
var inst_23205 = inst_23181.call(null,inst_23187);
var inst_23206 = cljs.core.not.call(null,inst_23205);
var inst_23207 = (inst_23204) && (inst_23206);
var state_23227__$1 = state_23227;
var statearr_23277_23332 = state_23227__$1;
(statearr_23277_23332[(2)] = inst_23207);

(statearr_23277_23332[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (10))){
var inst_23133 = (state_23227[(8)]);
var inst_23153 = (state_23227[(2)]);
var inst_23154 = cljs.core.get.call(null,inst_23153,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23155 = cljs.core.get.call(null,inst_23153,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23156 = cljs.core.get.call(null,inst_23153,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23157 = inst_23133;
var state_23227__$1 = (function (){var statearr_23278 = state_23227;
(statearr_23278[(16)] = inst_23156);

(statearr_23278[(17)] = inst_23154);

(statearr_23278[(18)] = inst_23155);

(statearr_23278[(7)] = inst_23157);

return statearr_23278;
})();
var statearr_23279_23333 = state_23227__$1;
(statearr_23279_23333[(2)] = null);

(statearr_23279_23333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (18))){
var inst_23171 = (state_23227[(2)]);
var state_23227__$1 = state_23227;
var statearr_23280_23334 = state_23227__$1;
(statearr_23280_23334[(2)] = inst_23171);

(statearr_23280_23334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (37))){
var state_23227__$1 = state_23227;
var statearr_23281_23335 = state_23227__$1;
(statearr_23281_23335[(2)] = null);

(statearr_23281_23335[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (8))){
var inst_23133 = (state_23227[(8)]);
var inst_23150 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23133);
var state_23227__$1 = state_23227;
var statearr_23282_23336 = state_23227__$1;
(statearr_23282_23336[(2)] = inst_23150);

(statearr_23282_23336[(1)] = (10));


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
});})(c__21577__auto___23290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21465__auto__,c__21577__auto___23290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21466__auto__ = null;
var cljs$core$async$mix_$_state_machine__21466__auto____0 = (function (){
var statearr_23286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23286[(0)] = cljs$core$async$mix_$_state_machine__21466__auto__);

(statearr_23286[(1)] = (1));

return statearr_23286;
});
var cljs$core$async$mix_$_state_machine__21466__auto____1 = (function (state_23227){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_23227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e23287){if((e23287 instanceof Object)){
var ex__21469__auto__ = e23287;
var statearr_23288_23337 = state_23227;
(statearr_23288_23337[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23338 = state_23227;
state_23227 = G__23338;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21466__auto__ = function(state_23227){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21466__auto____1.call(this,state_23227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21466__auto____0;
cljs$core$async$mix_$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21466__auto____1;
return cljs$core$async$mix_$_state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto___23290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21579__auto__ = (function (){var statearr_23289 = f__21578__auto__.call(null);
(statearr_23289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto___23290);

return statearr_23289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto___23290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args23339 = [];
var len__19529__auto___23342 = arguments.length;
var i__19530__auto___23343 = (0);
while(true){
if((i__19530__auto___23343 < len__19529__auto___23342)){
args23339.push((arguments[i__19530__auto___23343]));

var G__23344 = (i__19530__auto___23343 + (1));
i__19530__auto___23343 = G__23344;
continue;
} else {
}
break;
}

var G__23341 = args23339.length;
switch (G__23341) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23339.length)].join('')));

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
var args23347 = [];
var len__19529__auto___23472 = arguments.length;
var i__19530__auto___23473 = (0);
while(true){
if((i__19530__auto___23473 < len__19529__auto___23472)){
args23347.push((arguments[i__19530__auto___23473]));

var G__23474 = (i__19530__auto___23473 + (1));
i__19530__auto___23473 = G__23474;
continue;
} else {
}
break;
}

var G__23349 = args23347.length;
switch (G__23349) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23347.length)].join('')));

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
return (function (p1__23346_SHARP_){
if(cljs.core.truth_(p1__23346_SHARP_.call(null,topic))){
return p1__23346_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23346_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18459__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23350 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23351){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23351 = meta23351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23352,meta23351__$1){
var self__ = this;
var _23352__$1 = this;
return (new cljs.core.async.t_cljs$core$async23350(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23351__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23350.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23352){
var self__ = this;
var _23352__$1 = this;
return self__.meta23351;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23350.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23350.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23350.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23350.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23350.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23350.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23350.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23350.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23351","meta23351",990926325,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23350";

cljs.core.async.t_cljs$core$async23350.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23350");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23350 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23350(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23351){
return (new cljs.core.async.t_cljs$core$async23350(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23351));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23350(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21577__auto___23476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto___23476,mults,ensure_mult,p){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto___23476,mults,ensure_mult,p){
return (function (state_23424){
var state_val_23425 = (state_23424[(1)]);
if((state_val_23425 === (7))){
var inst_23420 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
var statearr_23426_23477 = state_23424__$1;
(statearr_23426_23477[(2)] = inst_23420);

(statearr_23426_23477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (20))){
var state_23424__$1 = state_23424;
var statearr_23427_23478 = state_23424__$1;
(statearr_23427_23478[(2)] = null);

(statearr_23427_23478[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (1))){
var state_23424__$1 = state_23424;
var statearr_23428_23479 = state_23424__$1;
(statearr_23428_23479[(2)] = null);

(statearr_23428_23479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (24))){
var inst_23403 = (state_23424[(7)]);
var inst_23412 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23403);
var state_23424__$1 = state_23424;
var statearr_23429_23480 = state_23424__$1;
(statearr_23429_23480[(2)] = inst_23412);

(statearr_23429_23480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (4))){
var inst_23355 = (state_23424[(8)]);
var inst_23355__$1 = (state_23424[(2)]);
var inst_23356 = (inst_23355__$1 == null);
var state_23424__$1 = (function (){var statearr_23430 = state_23424;
(statearr_23430[(8)] = inst_23355__$1);

return statearr_23430;
})();
if(cljs.core.truth_(inst_23356)){
var statearr_23431_23481 = state_23424__$1;
(statearr_23431_23481[(1)] = (5));

} else {
var statearr_23432_23482 = state_23424__$1;
(statearr_23432_23482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (15))){
var inst_23397 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
var statearr_23433_23483 = state_23424__$1;
(statearr_23433_23483[(2)] = inst_23397);

(statearr_23433_23483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (21))){
var inst_23417 = (state_23424[(2)]);
var state_23424__$1 = (function (){var statearr_23434 = state_23424;
(statearr_23434[(9)] = inst_23417);

return statearr_23434;
})();
var statearr_23435_23484 = state_23424__$1;
(statearr_23435_23484[(2)] = null);

(statearr_23435_23484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (13))){
var inst_23379 = (state_23424[(10)]);
var inst_23381 = cljs.core.chunked_seq_QMARK_.call(null,inst_23379);
var state_23424__$1 = state_23424;
if(inst_23381){
var statearr_23436_23485 = state_23424__$1;
(statearr_23436_23485[(1)] = (16));

} else {
var statearr_23437_23486 = state_23424__$1;
(statearr_23437_23486[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (22))){
var inst_23409 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
if(cljs.core.truth_(inst_23409)){
var statearr_23438_23487 = state_23424__$1;
(statearr_23438_23487[(1)] = (23));

} else {
var statearr_23439_23488 = state_23424__$1;
(statearr_23439_23488[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (6))){
var inst_23403 = (state_23424[(7)]);
var inst_23355 = (state_23424[(8)]);
var inst_23405 = (state_23424[(11)]);
var inst_23403__$1 = topic_fn.call(null,inst_23355);
var inst_23404 = cljs.core.deref.call(null,mults);
var inst_23405__$1 = cljs.core.get.call(null,inst_23404,inst_23403__$1);
var state_23424__$1 = (function (){var statearr_23440 = state_23424;
(statearr_23440[(7)] = inst_23403__$1);

(statearr_23440[(11)] = inst_23405__$1);

return statearr_23440;
})();
if(cljs.core.truth_(inst_23405__$1)){
var statearr_23441_23489 = state_23424__$1;
(statearr_23441_23489[(1)] = (19));

} else {
var statearr_23442_23490 = state_23424__$1;
(statearr_23442_23490[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (25))){
var inst_23414 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
var statearr_23443_23491 = state_23424__$1;
(statearr_23443_23491[(2)] = inst_23414);

(statearr_23443_23491[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (17))){
var inst_23379 = (state_23424[(10)]);
var inst_23388 = cljs.core.first.call(null,inst_23379);
var inst_23389 = cljs.core.async.muxch_STAR_.call(null,inst_23388);
var inst_23390 = cljs.core.async.close_BANG_.call(null,inst_23389);
var inst_23391 = cljs.core.next.call(null,inst_23379);
var inst_23365 = inst_23391;
var inst_23366 = null;
var inst_23367 = (0);
var inst_23368 = (0);
var state_23424__$1 = (function (){var statearr_23444 = state_23424;
(statearr_23444[(12)] = inst_23367);

(statearr_23444[(13)] = inst_23365);

(statearr_23444[(14)] = inst_23368);

(statearr_23444[(15)] = inst_23366);

(statearr_23444[(16)] = inst_23390);

return statearr_23444;
})();
var statearr_23445_23492 = state_23424__$1;
(statearr_23445_23492[(2)] = null);

(statearr_23445_23492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (3))){
var inst_23422 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23424__$1,inst_23422);
} else {
if((state_val_23425 === (12))){
var inst_23399 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
var statearr_23446_23493 = state_23424__$1;
(statearr_23446_23493[(2)] = inst_23399);

(statearr_23446_23493[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (2))){
var state_23424__$1 = state_23424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23424__$1,(4),ch);
} else {
if((state_val_23425 === (23))){
var state_23424__$1 = state_23424;
var statearr_23447_23494 = state_23424__$1;
(statearr_23447_23494[(2)] = null);

(statearr_23447_23494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (19))){
var inst_23355 = (state_23424[(8)]);
var inst_23405 = (state_23424[(11)]);
var inst_23407 = cljs.core.async.muxch_STAR_.call(null,inst_23405);
var state_23424__$1 = state_23424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23424__$1,(22),inst_23407,inst_23355);
} else {
if((state_val_23425 === (11))){
var inst_23379 = (state_23424[(10)]);
var inst_23365 = (state_23424[(13)]);
var inst_23379__$1 = cljs.core.seq.call(null,inst_23365);
var state_23424__$1 = (function (){var statearr_23448 = state_23424;
(statearr_23448[(10)] = inst_23379__$1);

return statearr_23448;
})();
if(inst_23379__$1){
var statearr_23449_23495 = state_23424__$1;
(statearr_23449_23495[(1)] = (13));

} else {
var statearr_23450_23496 = state_23424__$1;
(statearr_23450_23496[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (9))){
var inst_23401 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
var statearr_23451_23497 = state_23424__$1;
(statearr_23451_23497[(2)] = inst_23401);

(statearr_23451_23497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (5))){
var inst_23362 = cljs.core.deref.call(null,mults);
var inst_23363 = cljs.core.vals.call(null,inst_23362);
var inst_23364 = cljs.core.seq.call(null,inst_23363);
var inst_23365 = inst_23364;
var inst_23366 = null;
var inst_23367 = (0);
var inst_23368 = (0);
var state_23424__$1 = (function (){var statearr_23452 = state_23424;
(statearr_23452[(12)] = inst_23367);

(statearr_23452[(13)] = inst_23365);

(statearr_23452[(14)] = inst_23368);

(statearr_23452[(15)] = inst_23366);

return statearr_23452;
})();
var statearr_23453_23498 = state_23424__$1;
(statearr_23453_23498[(2)] = null);

(statearr_23453_23498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (14))){
var state_23424__$1 = state_23424;
var statearr_23457_23499 = state_23424__$1;
(statearr_23457_23499[(2)] = null);

(statearr_23457_23499[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (16))){
var inst_23379 = (state_23424[(10)]);
var inst_23383 = cljs.core.chunk_first.call(null,inst_23379);
var inst_23384 = cljs.core.chunk_rest.call(null,inst_23379);
var inst_23385 = cljs.core.count.call(null,inst_23383);
var inst_23365 = inst_23384;
var inst_23366 = inst_23383;
var inst_23367 = inst_23385;
var inst_23368 = (0);
var state_23424__$1 = (function (){var statearr_23458 = state_23424;
(statearr_23458[(12)] = inst_23367);

(statearr_23458[(13)] = inst_23365);

(statearr_23458[(14)] = inst_23368);

(statearr_23458[(15)] = inst_23366);

return statearr_23458;
})();
var statearr_23459_23500 = state_23424__$1;
(statearr_23459_23500[(2)] = null);

(statearr_23459_23500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (10))){
var inst_23367 = (state_23424[(12)]);
var inst_23365 = (state_23424[(13)]);
var inst_23368 = (state_23424[(14)]);
var inst_23366 = (state_23424[(15)]);
var inst_23373 = cljs.core._nth.call(null,inst_23366,inst_23368);
var inst_23374 = cljs.core.async.muxch_STAR_.call(null,inst_23373);
var inst_23375 = cljs.core.async.close_BANG_.call(null,inst_23374);
var inst_23376 = (inst_23368 + (1));
var tmp23454 = inst_23367;
var tmp23455 = inst_23365;
var tmp23456 = inst_23366;
var inst_23365__$1 = tmp23455;
var inst_23366__$1 = tmp23456;
var inst_23367__$1 = tmp23454;
var inst_23368__$1 = inst_23376;
var state_23424__$1 = (function (){var statearr_23460 = state_23424;
(statearr_23460[(17)] = inst_23375);

(statearr_23460[(12)] = inst_23367__$1);

(statearr_23460[(13)] = inst_23365__$1);

(statearr_23460[(14)] = inst_23368__$1);

(statearr_23460[(15)] = inst_23366__$1);

return statearr_23460;
})();
var statearr_23461_23501 = state_23424__$1;
(statearr_23461_23501[(2)] = null);

(statearr_23461_23501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (18))){
var inst_23394 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
var statearr_23462_23502 = state_23424__$1;
(statearr_23462_23502[(2)] = inst_23394);

(statearr_23462_23502[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23425 === (8))){
var inst_23367 = (state_23424[(12)]);
var inst_23368 = (state_23424[(14)]);
var inst_23370 = (inst_23368 < inst_23367);
var inst_23371 = inst_23370;
var state_23424__$1 = state_23424;
if(cljs.core.truth_(inst_23371)){
var statearr_23463_23503 = state_23424__$1;
(statearr_23463_23503[(1)] = (10));

} else {
var statearr_23464_23504 = state_23424__$1;
(statearr_23464_23504[(1)] = (11));

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
});})(c__21577__auto___23476,mults,ensure_mult,p))
;
return ((function (switch__21465__auto__,c__21577__auto___23476,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21466__auto__ = null;
var cljs$core$async$state_machine__21466__auto____0 = (function (){
var statearr_23468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23468[(0)] = cljs$core$async$state_machine__21466__auto__);

(statearr_23468[(1)] = (1));

return statearr_23468;
});
var cljs$core$async$state_machine__21466__auto____1 = (function (state_23424){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_23424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e23469){if((e23469 instanceof Object)){
var ex__21469__auto__ = e23469;
var statearr_23470_23505 = state_23424;
(statearr_23470_23505[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23506 = state_23424;
state_23424 = G__23506;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$state_machine__21466__auto__ = function(state_23424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21466__auto____1.call(this,state_23424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21466__auto____0;
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21466__auto____1;
return cljs$core$async$state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto___23476,mults,ensure_mult,p))
})();
var state__21579__auto__ = (function (){var statearr_23471 = f__21578__auto__.call(null);
(statearr_23471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto___23476);

return statearr_23471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto___23476,mults,ensure_mult,p))
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
var args23507 = [];
var len__19529__auto___23510 = arguments.length;
var i__19530__auto___23511 = (0);
while(true){
if((i__19530__auto___23511 < len__19529__auto___23510)){
args23507.push((arguments[i__19530__auto___23511]));

var G__23512 = (i__19530__auto___23511 + (1));
i__19530__auto___23511 = G__23512;
continue;
} else {
}
break;
}

var G__23509 = args23507.length;
switch (G__23509) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23507.length)].join('')));

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
var args23514 = [];
var len__19529__auto___23517 = arguments.length;
var i__19530__auto___23518 = (0);
while(true){
if((i__19530__auto___23518 < len__19529__auto___23517)){
args23514.push((arguments[i__19530__auto___23518]));

var G__23519 = (i__19530__auto___23518 + (1));
i__19530__auto___23518 = G__23519;
continue;
} else {
}
break;
}

var G__23516 = args23514.length;
switch (G__23516) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23514.length)].join('')));

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
var args23521 = [];
var len__19529__auto___23592 = arguments.length;
var i__19530__auto___23593 = (0);
while(true){
if((i__19530__auto___23593 < len__19529__auto___23592)){
args23521.push((arguments[i__19530__auto___23593]));

var G__23594 = (i__19530__auto___23593 + (1));
i__19530__auto___23593 = G__23594;
continue;
} else {
}
break;
}

var G__23523 = args23521.length;
switch (G__23523) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23521.length)].join('')));

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
var c__21577__auto___23596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto___23596,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto___23596,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23562){
var state_val_23563 = (state_23562[(1)]);
if((state_val_23563 === (7))){
var state_23562__$1 = state_23562;
var statearr_23564_23597 = state_23562__$1;
(statearr_23564_23597[(2)] = null);

(statearr_23564_23597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (1))){
var state_23562__$1 = state_23562;
var statearr_23565_23598 = state_23562__$1;
(statearr_23565_23598[(2)] = null);

(statearr_23565_23598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (4))){
var inst_23526 = (state_23562[(7)]);
var inst_23528 = (inst_23526 < cnt);
var state_23562__$1 = state_23562;
if(cljs.core.truth_(inst_23528)){
var statearr_23566_23599 = state_23562__$1;
(statearr_23566_23599[(1)] = (6));

} else {
var statearr_23567_23600 = state_23562__$1;
(statearr_23567_23600[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (15))){
var inst_23558 = (state_23562[(2)]);
var state_23562__$1 = state_23562;
var statearr_23568_23601 = state_23562__$1;
(statearr_23568_23601[(2)] = inst_23558);

(statearr_23568_23601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (13))){
var inst_23551 = cljs.core.async.close_BANG_.call(null,out);
var state_23562__$1 = state_23562;
var statearr_23569_23602 = state_23562__$1;
(statearr_23569_23602[(2)] = inst_23551);

(statearr_23569_23602[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (6))){
var state_23562__$1 = state_23562;
var statearr_23570_23603 = state_23562__$1;
(statearr_23570_23603[(2)] = null);

(statearr_23570_23603[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (3))){
var inst_23560 = (state_23562[(2)]);
var state_23562__$1 = state_23562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23562__$1,inst_23560);
} else {
if((state_val_23563 === (12))){
var inst_23548 = (state_23562[(8)]);
var inst_23548__$1 = (state_23562[(2)]);
var inst_23549 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23548__$1);
var state_23562__$1 = (function (){var statearr_23571 = state_23562;
(statearr_23571[(8)] = inst_23548__$1);

return statearr_23571;
})();
if(cljs.core.truth_(inst_23549)){
var statearr_23572_23604 = state_23562__$1;
(statearr_23572_23604[(1)] = (13));

} else {
var statearr_23573_23605 = state_23562__$1;
(statearr_23573_23605[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (2))){
var inst_23525 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23526 = (0);
var state_23562__$1 = (function (){var statearr_23574 = state_23562;
(statearr_23574[(9)] = inst_23525);

(statearr_23574[(7)] = inst_23526);

return statearr_23574;
})();
var statearr_23575_23606 = state_23562__$1;
(statearr_23575_23606[(2)] = null);

(statearr_23575_23606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (11))){
var inst_23526 = (state_23562[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23562,(10),Object,null,(9));
var inst_23535 = chs__$1.call(null,inst_23526);
var inst_23536 = done.call(null,inst_23526);
var inst_23537 = cljs.core.async.take_BANG_.call(null,inst_23535,inst_23536);
var state_23562__$1 = state_23562;
var statearr_23576_23607 = state_23562__$1;
(statearr_23576_23607[(2)] = inst_23537);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23562__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (9))){
var inst_23526 = (state_23562[(7)]);
var inst_23539 = (state_23562[(2)]);
var inst_23540 = (inst_23526 + (1));
var inst_23526__$1 = inst_23540;
var state_23562__$1 = (function (){var statearr_23577 = state_23562;
(statearr_23577[(10)] = inst_23539);

(statearr_23577[(7)] = inst_23526__$1);

return statearr_23577;
})();
var statearr_23578_23608 = state_23562__$1;
(statearr_23578_23608[(2)] = null);

(statearr_23578_23608[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (5))){
var inst_23546 = (state_23562[(2)]);
var state_23562__$1 = (function (){var statearr_23579 = state_23562;
(statearr_23579[(11)] = inst_23546);

return statearr_23579;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23562__$1,(12),dchan);
} else {
if((state_val_23563 === (14))){
var inst_23548 = (state_23562[(8)]);
var inst_23553 = cljs.core.apply.call(null,f,inst_23548);
var state_23562__$1 = state_23562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23562__$1,(16),out,inst_23553);
} else {
if((state_val_23563 === (16))){
var inst_23555 = (state_23562[(2)]);
var state_23562__$1 = (function (){var statearr_23580 = state_23562;
(statearr_23580[(12)] = inst_23555);

return statearr_23580;
})();
var statearr_23581_23609 = state_23562__$1;
(statearr_23581_23609[(2)] = null);

(statearr_23581_23609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (10))){
var inst_23530 = (state_23562[(2)]);
var inst_23531 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23562__$1 = (function (){var statearr_23582 = state_23562;
(statearr_23582[(13)] = inst_23530);

return statearr_23582;
})();
var statearr_23583_23610 = state_23562__$1;
(statearr_23583_23610[(2)] = inst_23531);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23562__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (8))){
var inst_23544 = (state_23562[(2)]);
var state_23562__$1 = state_23562;
var statearr_23584_23611 = state_23562__$1;
(statearr_23584_23611[(2)] = inst_23544);

(statearr_23584_23611[(1)] = (5));


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
});})(c__21577__auto___23596,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21465__auto__,c__21577__auto___23596,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21466__auto__ = null;
var cljs$core$async$state_machine__21466__auto____0 = (function (){
var statearr_23588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23588[(0)] = cljs$core$async$state_machine__21466__auto__);

(statearr_23588[(1)] = (1));

return statearr_23588;
});
var cljs$core$async$state_machine__21466__auto____1 = (function (state_23562){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_23562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e23589){if((e23589 instanceof Object)){
var ex__21469__auto__ = e23589;
var statearr_23590_23612 = state_23562;
(statearr_23590_23612[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23613 = state_23562;
state_23562 = G__23613;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$state_machine__21466__auto__ = function(state_23562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21466__auto____1.call(this,state_23562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21466__auto____0;
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21466__auto____1;
return cljs$core$async$state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto___23596,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21579__auto__ = (function (){var statearr_23591 = f__21578__auto__.call(null);
(statearr_23591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto___23596);

return statearr_23591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto___23596,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args23615 = [];
var len__19529__auto___23671 = arguments.length;
var i__19530__auto___23672 = (0);
while(true){
if((i__19530__auto___23672 < len__19529__auto___23671)){
args23615.push((arguments[i__19530__auto___23672]));

var G__23673 = (i__19530__auto___23672 + (1));
i__19530__auto___23672 = G__23673;
continue;
} else {
}
break;
}

var G__23617 = args23615.length;
switch (G__23617) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23615.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21577__auto___23675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto___23675,out){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto___23675,out){
return (function (state_23647){
var state_val_23648 = (state_23647[(1)]);
if((state_val_23648 === (7))){
var inst_23626 = (state_23647[(7)]);
var inst_23627 = (state_23647[(8)]);
var inst_23626__$1 = (state_23647[(2)]);
var inst_23627__$1 = cljs.core.nth.call(null,inst_23626__$1,(0),null);
var inst_23628 = cljs.core.nth.call(null,inst_23626__$1,(1),null);
var inst_23629 = (inst_23627__$1 == null);
var state_23647__$1 = (function (){var statearr_23649 = state_23647;
(statearr_23649[(9)] = inst_23628);

(statearr_23649[(7)] = inst_23626__$1);

(statearr_23649[(8)] = inst_23627__$1);

return statearr_23649;
})();
if(cljs.core.truth_(inst_23629)){
var statearr_23650_23676 = state_23647__$1;
(statearr_23650_23676[(1)] = (8));

} else {
var statearr_23651_23677 = state_23647__$1;
(statearr_23651_23677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (1))){
var inst_23618 = cljs.core.vec.call(null,chs);
var inst_23619 = inst_23618;
var state_23647__$1 = (function (){var statearr_23652 = state_23647;
(statearr_23652[(10)] = inst_23619);

return statearr_23652;
})();
var statearr_23653_23678 = state_23647__$1;
(statearr_23653_23678[(2)] = null);

(statearr_23653_23678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (4))){
var inst_23619 = (state_23647[(10)]);
var state_23647__$1 = state_23647;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23647__$1,(7),inst_23619);
} else {
if((state_val_23648 === (6))){
var inst_23643 = (state_23647[(2)]);
var state_23647__$1 = state_23647;
var statearr_23654_23679 = state_23647__$1;
(statearr_23654_23679[(2)] = inst_23643);

(statearr_23654_23679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (3))){
var inst_23645 = (state_23647[(2)]);
var state_23647__$1 = state_23647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23647__$1,inst_23645);
} else {
if((state_val_23648 === (2))){
var inst_23619 = (state_23647[(10)]);
var inst_23621 = cljs.core.count.call(null,inst_23619);
var inst_23622 = (inst_23621 > (0));
var state_23647__$1 = state_23647;
if(cljs.core.truth_(inst_23622)){
var statearr_23656_23680 = state_23647__$1;
(statearr_23656_23680[(1)] = (4));

} else {
var statearr_23657_23681 = state_23647__$1;
(statearr_23657_23681[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (11))){
var inst_23619 = (state_23647[(10)]);
var inst_23636 = (state_23647[(2)]);
var tmp23655 = inst_23619;
var inst_23619__$1 = tmp23655;
var state_23647__$1 = (function (){var statearr_23658 = state_23647;
(statearr_23658[(10)] = inst_23619__$1);

(statearr_23658[(11)] = inst_23636);

return statearr_23658;
})();
var statearr_23659_23682 = state_23647__$1;
(statearr_23659_23682[(2)] = null);

(statearr_23659_23682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (9))){
var inst_23627 = (state_23647[(8)]);
var state_23647__$1 = state_23647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23647__$1,(11),out,inst_23627);
} else {
if((state_val_23648 === (5))){
var inst_23641 = cljs.core.async.close_BANG_.call(null,out);
var state_23647__$1 = state_23647;
var statearr_23660_23683 = state_23647__$1;
(statearr_23660_23683[(2)] = inst_23641);

(statearr_23660_23683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (10))){
var inst_23639 = (state_23647[(2)]);
var state_23647__$1 = state_23647;
var statearr_23661_23684 = state_23647__$1;
(statearr_23661_23684[(2)] = inst_23639);

(statearr_23661_23684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (8))){
var inst_23619 = (state_23647[(10)]);
var inst_23628 = (state_23647[(9)]);
var inst_23626 = (state_23647[(7)]);
var inst_23627 = (state_23647[(8)]);
var inst_23631 = (function (){var cs = inst_23619;
var vec__23624 = inst_23626;
var v = inst_23627;
var c = inst_23628;
return ((function (cs,vec__23624,v,c,inst_23619,inst_23628,inst_23626,inst_23627,state_val_23648,c__21577__auto___23675,out){
return (function (p1__23614_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23614_SHARP_);
});
;})(cs,vec__23624,v,c,inst_23619,inst_23628,inst_23626,inst_23627,state_val_23648,c__21577__auto___23675,out))
})();
var inst_23632 = cljs.core.filterv.call(null,inst_23631,inst_23619);
var inst_23619__$1 = inst_23632;
var state_23647__$1 = (function (){var statearr_23662 = state_23647;
(statearr_23662[(10)] = inst_23619__$1);

return statearr_23662;
})();
var statearr_23663_23685 = state_23647__$1;
(statearr_23663_23685[(2)] = null);

(statearr_23663_23685[(1)] = (2));


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
});})(c__21577__auto___23675,out))
;
return ((function (switch__21465__auto__,c__21577__auto___23675,out){
return (function() {
var cljs$core$async$state_machine__21466__auto__ = null;
var cljs$core$async$state_machine__21466__auto____0 = (function (){
var statearr_23667 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23667[(0)] = cljs$core$async$state_machine__21466__auto__);

(statearr_23667[(1)] = (1));

return statearr_23667;
});
var cljs$core$async$state_machine__21466__auto____1 = (function (state_23647){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_23647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e23668){if((e23668 instanceof Object)){
var ex__21469__auto__ = e23668;
var statearr_23669_23686 = state_23647;
(statearr_23669_23686[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23687 = state_23647;
state_23647 = G__23687;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$state_machine__21466__auto__ = function(state_23647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21466__auto____1.call(this,state_23647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21466__auto____0;
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21466__auto____1;
return cljs$core$async$state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto___23675,out))
})();
var state__21579__auto__ = (function (){var statearr_23670 = f__21578__auto__.call(null);
(statearr_23670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto___23675);

return statearr_23670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto___23675,out))
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
var args23688 = [];
var len__19529__auto___23737 = arguments.length;
var i__19530__auto___23738 = (0);
while(true){
if((i__19530__auto___23738 < len__19529__auto___23737)){
args23688.push((arguments[i__19530__auto___23738]));

var G__23739 = (i__19530__auto___23738 + (1));
i__19530__auto___23738 = G__23739;
continue;
} else {
}
break;
}

var G__23690 = args23688.length;
switch (G__23690) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23688.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21577__auto___23741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto___23741,out){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto___23741,out){
return (function (state_23714){
var state_val_23715 = (state_23714[(1)]);
if((state_val_23715 === (7))){
var inst_23696 = (state_23714[(7)]);
var inst_23696__$1 = (state_23714[(2)]);
var inst_23697 = (inst_23696__$1 == null);
var inst_23698 = cljs.core.not.call(null,inst_23697);
var state_23714__$1 = (function (){var statearr_23716 = state_23714;
(statearr_23716[(7)] = inst_23696__$1);

return statearr_23716;
})();
if(inst_23698){
var statearr_23717_23742 = state_23714__$1;
(statearr_23717_23742[(1)] = (8));

} else {
var statearr_23718_23743 = state_23714__$1;
(statearr_23718_23743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23715 === (1))){
var inst_23691 = (0);
var state_23714__$1 = (function (){var statearr_23719 = state_23714;
(statearr_23719[(8)] = inst_23691);

return statearr_23719;
})();
var statearr_23720_23744 = state_23714__$1;
(statearr_23720_23744[(2)] = null);

(statearr_23720_23744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23715 === (4))){
var state_23714__$1 = state_23714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23714__$1,(7),ch);
} else {
if((state_val_23715 === (6))){
var inst_23709 = (state_23714[(2)]);
var state_23714__$1 = state_23714;
var statearr_23721_23745 = state_23714__$1;
(statearr_23721_23745[(2)] = inst_23709);

(statearr_23721_23745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23715 === (3))){
var inst_23711 = (state_23714[(2)]);
var inst_23712 = cljs.core.async.close_BANG_.call(null,out);
var state_23714__$1 = (function (){var statearr_23722 = state_23714;
(statearr_23722[(9)] = inst_23711);

return statearr_23722;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23714__$1,inst_23712);
} else {
if((state_val_23715 === (2))){
var inst_23691 = (state_23714[(8)]);
var inst_23693 = (inst_23691 < n);
var state_23714__$1 = state_23714;
if(cljs.core.truth_(inst_23693)){
var statearr_23723_23746 = state_23714__$1;
(statearr_23723_23746[(1)] = (4));

} else {
var statearr_23724_23747 = state_23714__$1;
(statearr_23724_23747[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23715 === (11))){
var inst_23691 = (state_23714[(8)]);
var inst_23701 = (state_23714[(2)]);
var inst_23702 = (inst_23691 + (1));
var inst_23691__$1 = inst_23702;
var state_23714__$1 = (function (){var statearr_23725 = state_23714;
(statearr_23725[(8)] = inst_23691__$1);

(statearr_23725[(10)] = inst_23701);

return statearr_23725;
})();
var statearr_23726_23748 = state_23714__$1;
(statearr_23726_23748[(2)] = null);

(statearr_23726_23748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23715 === (9))){
var state_23714__$1 = state_23714;
var statearr_23727_23749 = state_23714__$1;
(statearr_23727_23749[(2)] = null);

(statearr_23727_23749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23715 === (5))){
var state_23714__$1 = state_23714;
var statearr_23728_23750 = state_23714__$1;
(statearr_23728_23750[(2)] = null);

(statearr_23728_23750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23715 === (10))){
var inst_23706 = (state_23714[(2)]);
var state_23714__$1 = state_23714;
var statearr_23729_23751 = state_23714__$1;
(statearr_23729_23751[(2)] = inst_23706);

(statearr_23729_23751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23715 === (8))){
var inst_23696 = (state_23714[(7)]);
var state_23714__$1 = state_23714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23714__$1,(11),out,inst_23696);
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
});})(c__21577__auto___23741,out))
;
return ((function (switch__21465__auto__,c__21577__auto___23741,out){
return (function() {
var cljs$core$async$state_machine__21466__auto__ = null;
var cljs$core$async$state_machine__21466__auto____0 = (function (){
var statearr_23733 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23733[(0)] = cljs$core$async$state_machine__21466__auto__);

(statearr_23733[(1)] = (1));

return statearr_23733;
});
var cljs$core$async$state_machine__21466__auto____1 = (function (state_23714){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_23714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e23734){if((e23734 instanceof Object)){
var ex__21469__auto__ = e23734;
var statearr_23735_23752 = state_23714;
(statearr_23735_23752[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23753 = state_23714;
state_23714 = G__23753;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$state_machine__21466__auto__ = function(state_23714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21466__auto____1.call(this,state_23714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21466__auto____0;
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21466__auto____1;
return cljs$core$async$state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto___23741,out))
})();
var state__21579__auto__ = (function (){var statearr_23736 = f__21578__auto__.call(null);
(statearr_23736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto___23741);

return statearr_23736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto___23741,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23761 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23761 = (function (map_LT_,f,ch,meta23762){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23762 = meta23762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23763,meta23762__$1){
var self__ = this;
var _23763__$1 = this;
return (new cljs.core.async.t_cljs$core$async23761(self__.map_LT_,self__.f,self__.ch,meta23762__$1));
});

cljs.core.async.t_cljs$core$async23761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23763){
var self__ = this;
var _23763__$1 = this;
return self__.meta23762;
});

cljs.core.async.t_cljs$core$async23761.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23761.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23761.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23761.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23761.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23764 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23764 = (function (map_LT_,f,ch,meta23762,_,fn1,meta23765){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23762 = meta23762;
this._ = _;
this.fn1 = fn1;
this.meta23765 = meta23765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23766,meta23765__$1){
var self__ = this;
var _23766__$1 = this;
return (new cljs.core.async.t_cljs$core$async23764(self__.map_LT_,self__.f,self__.ch,self__.meta23762,self__._,self__.fn1,meta23765__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23764.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23766){
var self__ = this;
var _23766__$1 = this;
return self__.meta23765;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23764.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23764.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23764.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23764.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23754_SHARP_){
return f1.call(null,(((p1__23754_SHARP_ == null))?null:self__.f.call(null,p1__23754_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23764.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23762","meta23762",-160328868,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23761","cljs.core.async/t_cljs$core$async23761",244928989,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23765","meta23765",1076629902,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23764.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23764";

cljs.core.async.t_cljs$core$async23764.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23764");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23764 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23764(map_LT___$1,f__$1,ch__$1,meta23762__$1,___$2,fn1__$1,meta23765){
return (new cljs.core.async.t_cljs$core$async23764(map_LT___$1,f__$1,ch__$1,meta23762__$1,___$2,fn1__$1,meta23765));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23764(self__.map_LT_,self__.f,self__.ch,self__.meta23762,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async23761.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23761.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23762","meta23762",-160328868,null)], null);
});

cljs.core.async.t_cljs$core$async23761.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23761";

cljs.core.async.t_cljs$core$async23761.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23761");
});

cljs.core.async.__GT_t_cljs$core$async23761 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23761(map_LT___$1,f__$1,ch__$1,meta23762){
return (new cljs.core.async.t_cljs$core$async23761(map_LT___$1,f__$1,ch__$1,meta23762));
});

}

return (new cljs.core.async.t_cljs$core$async23761(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23770 = (function (map_GT_,f,ch,meta23771){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23771 = meta23771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23772,meta23771__$1){
var self__ = this;
var _23772__$1 = this;
return (new cljs.core.async.t_cljs$core$async23770(self__.map_GT_,self__.f,self__.ch,meta23771__$1));
});

cljs.core.async.t_cljs$core$async23770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23772){
var self__ = this;
var _23772__$1 = this;
return self__.meta23771;
});

cljs.core.async.t_cljs$core$async23770.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23770.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23770.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23770.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23770.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23770.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23771","meta23771",1681929403,null)], null);
});

cljs.core.async.t_cljs$core$async23770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23770";

cljs.core.async.t_cljs$core$async23770.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23770");
});

cljs.core.async.__GT_t_cljs$core$async23770 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23770(map_GT___$1,f__$1,ch__$1,meta23771){
return (new cljs.core.async.t_cljs$core$async23770(map_GT___$1,f__$1,ch__$1,meta23771));
});

}

return (new cljs.core.async.t_cljs$core$async23770(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23776 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23776 = (function (filter_GT_,p,ch,meta23777){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23777 = meta23777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23778,meta23777__$1){
var self__ = this;
var _23778__$1 = this;
return (new cljs.core.async.t_cljs$core$async23776(self__.filter_GT_,self__.p,self__.ch,meta23777__$1));
});

cljs.core.async.t_cljs$core$async23776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23778){
var self__ = this;
var _23778__$1 = this;
return self__.meta23777;
});

cljs.core.async.t_cljs$core$async23776.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23776.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23776.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23776.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23776.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23776.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23776.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23777","meta23777",817964810,null)], null);
});

cljs.core.async.t_cljs$core$async23776.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23776";

cljs.core.async.t_cljs$core$async23776.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23776");
});

cljs.core.async.__GT_t_cljs$core$async23776 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23776(filter_GT___$1,p__$1,ch__$1,meta23777){
return (new cljs.core.async.t_cljs$core$async23776(filter_GT___$1,p__$1,ch__$1,meta23777));
});

}

return (new cljs.core.async.t_cljs$core$async23776(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args23779 = [];
var len__19529__auto___23823 = arguments.length;
var i__19530__auto___23824 = (0);
while(true){
if((i__19530__auto___23824 < len__19529__auto___23823)){
args23779.push((arguments[i__19530__auto___23824]));

var G__23825 = (i__19530__auto___23824 + (1));
i__19530__auto___23824 = G__23825;
continue;
} else {
}
break;
}

var G__23781 = args23779.length;
switch (G__23781) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23779.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21577__auto___23827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto___23827,out){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto___23827,out){
return (function (state_23802){
var state_val_23803 = (state_23802[(1)]);
if((state_val_23803 === (7))){
var inst_23798 = (state_23802[(2)]);
var state_23802__$1 = state_23802;
var statearr_23804_23828 = state_23802__$1;
(statearr_23804_23828[(2)] = inst_23798);

(statearr_23804_23828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23803 === (1))){
var state_23802__$1 = state_23802;
var statearr_23805_23829 = state_23802__$1;
(statearr_23805_23829[(2)] = null);

(statearr_23805_23829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23803 === (4))){
var inst_23784 = (state_23802[(7)]);
var inst_23784__$1 = (state_23802[(2)]);
var inst_23785 = (inst_23784__$1 == null);
var state_23802__$1 = (function (){var statearr_23806 = state_23802;
(statearr_23806[(7)] = inst_23784__$1);

return statearr_23806;
})();
if(cljs.core.truth_(inst_23785)){
var statearr_23807_23830 = state_23802__$1;
(statearr_23807_23830[(1)] = (5));

} else {
var statearr_23808_23831 = state_23802__$1;
(statearr_23808_23831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23803 === (6))){
var inst_23784 = (state_23802[(7)]);
var inst_23789 = p.call(null,inst_23784);
var state_23802__$1 = state_23802;
if(cljs.core.truth_(inst_23789)){
var statearr_23809_23832 = state_23802__$1;
(statearr_23809_23832[(1)] = (8));

} else {
var statearr_23810_23833 = state_23802__$1;
(statearr_23810_23833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23803 === (3))){
var inst_23800 = (state_23802[(2)]);
var state_23802__$1 = state_23802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23802__$1,inst_23800);
} else {
if((state_val_23803 === (2))){
var state_23802__$1 = state_23802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23802__$1,(4),ch);
} else {
if((state_val_23803 === (11))){
var inst_23792 = (state_23802[(2)]);
var state_23802__$1 = state_23802;
var statearr_23811_23834 = state_23802__$1;
(statearr_23811_23834[(2)] = inst_23792);

(statearr_23811_23834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23803 === (9))){
var state_23802__$1 = state_23802;
var statearr_23812_23835 = state_23802__$1;
(statearr_23812_23835[(2)] = null);

(statearr_23812_23835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23803 === (5))){
var inst_23787 = cljs.core.async.close_BANG_.call(null,out);
var state_23802__$1 = state_23802;
var statearr_23813_23836 = state_23802__$1;
(statearr_23813_23836[(2)] = inst_23787);

(statearr_23813_23836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23803 === (10))){
var inst_23795 = (state_23802[(2)]);
var state_23802__$1 = (function (){var statearr_23814 = state_23802;
(statearr_23814[(8)] = inst_23795);

return statearr_23814;
})();
var statearr_23815_23837 = state_23802__$1;
(statearr_23815_23837[(2)] = null);

(statearr_23815_23837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23803 === (8))){
var inst_23784 = (state_23802[(7)]);
var state_23802__$1 = state_23802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23802__$1,(11),out,inst_23784);
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
});})(c__21577__auto___23827,out))
;
return ((function (switch__21465__auto__,c__21577__auto___23827,out){
return (function() {
var cljs$core$async$state_machine__21466__auto__ = null;
var cljs$core$async$state_machine__21466__auto____0 = (function (){
var statearr_23819 = [null,null,null,null,null,null,null,null,null];
(statearr_23819[(0)] = cljs$core$async$state_machine__21466__auto__);

(statearr_23819[(1)] = (1));

return statearr_23819;
});
var cljs$core$async$state_machine__21466__auto____1 = (function (state_23802){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_23802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e23820){if((e23820 instanceof Object)){
var ex__21469__auto__ = e23820;
var statearr_23821_23838 = state_23802;
(statearr_23821_23838[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23839 = state_23802;
state_23802 = G__23839;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$state_machine__21466__auto__ = function(state_23802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21466__auto____1.call(this,state_23802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21466__auto____0;
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21466__auto____1;
return cljs$core$async$state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto___23827,out))
})();
var state__21579__auto__ = (function (){var statearr_23822 = f__21578__auto__.call(null);
(statearr_23822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto___23827);

return statearr_23822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto___23827,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23840 = [];
var len__19529__auto___23843 = arguments.length;
var i__19530__auto___23844 = (0);
while(true){
if((i__19530__auto___23844 < len__19529__auto___23843)){
args23840.push((arguments[i__19530__auto___23844]));

var G__23845 = (i__19530__auto___23844 + (1));
i__19530__auto___23844 = G__23845;
continue;
} else {
}
break;
}

var G__23842 = args23840.length;
switch (G__23842) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23840.length)].join('')));

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
var c__21577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto__){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto__){
return (function (state_24012){
var state_val_24013 = (state_24012[(1)]);
if((state_val_24013 === (7))){
var inst_24008 = (state_24012[(2)]);
var state_24012__$1 = state_24012;
var statearr_24014_24055 = state_24012__$1;
(statearr_24014_24055[(2)] = inst_24008);

(statearr_24014_24055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (20))){
var inst_23978 = (state_24012[(7)]);
var inst_23989 = (state_24012[(2)]);
var inst_23990 = cljs.core.next.call(null,inst_23978);
var inst_23964 = inst_23990;
var inst_23965 = null;
var inst_23966 = (0);
var inst_23967 = (0);
var state_24012__$1 = (function (){var statearr_24015 = state_24012;
(statearr_24015[(8)] = inst_23965);

(statearr_24015[(9)] = inst_23966);

(statearr_24015[(10)] = inst_23967);

(statearr_24015[(11)] = inst_23989);

(statearr_24015[(12)] = inst_23964);

return statearr_24015;
})();
var statearr_24016_24056 = state_24012__$1;
(statearr_24016_24056[(2)] = null);

(statearr_24016_24056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (1))){
var state_24012__$1 = state_24012;
var statearr_24017_24057 = state_24012__$1;
(statearr_24017_24057[(2)] = null);

(statearr_24017_24057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (4))){
var inst_23953 = (state_24012[(13)]);
var inst_23953__$1 = (state_24012[(2)]);
var inst_23954 = (inst_23953__$1 == null);
var state_24012__$1 = (function (){var statearr_24018 = state_24012;
(statearr_24018[(13)] = inst_23953__$1);

return statearr_24018;
})();
if(cljs.core.truth_(inst_23954)){
var statearr_24019_24058 = state_24012__$1;
(statearr_24019_24058[(1)] = (5));

} else {
var statearr_24020_24059 = state_24012__$1;
(statearr_24020_24059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (15))){
var state_24012__$1 = state_24012;
var statearr_24024_24060 = state_24012__$1;
(statearr_24024_24060[(2)] = null);

(statearr_24024_24060[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (21))){
var state_24012__$1 = state_24012;
var statearr_24025_24061 = state_24012__$1;
(statearr_24025_24061[(2)] = null);

(statearr_24025_24061[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (13))){
var inst_23965 = (state_24012[(8)]);
var inst_23966 = (state_24012[(9)]);
var inst_23967 = (state_24012[(10)]);
var inst_23964 = (state_24012[(12)]);
var inst_23974 = (state_24012[(2)]);
var inst_23975 = (inst_23967 + (1));
var tmp24021 = inst_23965;
var tmp24022 = inst_23966;
var tmp24023 = inst_23964;
var inst_23964__$1 = tmp24023;
var inst_23965__$1 = tmp24021;
var inst_23966__$1 = tmp24022;
var inst_23967__$1 = inst_23975;
var state_24012__$1 = (function (){var statearr_24026 = state_24012;
(statearr_24026[(8)] = inst_23965__$1);

(statearr_24026[(14)] = inst_23974);

(statearr_24026[(9)] = inst_23966__$1);

(statearr_24026[(10)] = inst_23967__$1);

(statearr_24026[(12)] = inst_23964__$1);

return statearr_24026;
})();
var statearr_24027_24062 = state_24012__$1;
(statearr_24027_24062[(2)] = null);

(statearr_24027_24062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (22))){
var state_24012__$1 = state_24012;
var statearr_24028_24063 = state_24012__$1;
(statearr_24028_24063[(2)] = null);

(statearr_24028_24063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (6))){
var inst_23953 = (state_24012[(13)]);
var inst_23962 = f.call(null,inst_23953);
var inst_23963 = cljs.core.seq.call(null,inst_23962);
var inst_23964 = inst_23963;
var inst_23965 = null;
var inst_23966 = (0);
var inst_23967 = (0);
var state_24012__$1 = (function (){var statearr_24029 = state_24012;
(statearr_24029[(8)] = inst_23965);

(statearr_24029[(9)] = inst_23966);

(statearr_24029[(10)] = inst_23967);

(statearr_24029[(12)] = inst_23964);

return statearr_24029;
})();
var statearr_24030_24064 = state_24012__$1;
(statearr_24030_24064[(2)] = null);

(statearr_24030_24064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (17))){
var inst_23978 = (state_24012[(7)]);
var inst_23982 = cljs.core.chunk_first.call(null,inst_23978);
var inst_23983 = cljs.core.chunk_rest.call(null,inst_23978);
var inst_23984 = cljs.core.count.call(null,inst_23982);
var inst_23964 = inst_23983;
var inst_23965 = inst_23982;
var inst_23966 = inst_23984;
var inst_23967 = (0);
var state_24012__$1 = (function (){var statearr_24031 = state_24012;
(statearr_24031[(8)] = inst_23965);

(statearr_24031[(9)] = inst_23966);

(statearr_24031[(10)] = inst_23967);

(statearr_24031[(12)] = inst_23964);

return statearr_24031;
})();
var statearr_24032_24065 = state_24012__$1;
(statearr_24032_24065[(2)] = null);

(statearr_24032_24065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (3))){
var inst_24010 = (state_24012[(2)]);
var state_24012__$1 = state_24012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24012__$1,inst_24010);
} else {
if((state_val_24013 === (12))){
var inst_23998 = (state_24012[(2)]);
var state_24012__$1 = state_24012;
var statearr_24033_24066 = state_24012__$1;
(statearr_24033_24066[(2)] = inst_23998);

(statearr_24033_24066[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (2))){
var state_24012__$1 = state_24012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24012__$1,(4),in$);
} else {
if((state_val_24013 === (23))){
var inst_24006 = (state_24012[(2)]);
var state_24012__$1 = state_24012;
var statearr_24034_24067 = state_24012__$1;
(statearr_24034_24067[(2)] = inst_24006);

(statearr_24034_24067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (19))){
var inst_23993 = (state_24012[(2)]);
var state_24012__$1 = state_24012;
var statearr_24035_24068 = state_24012__$1;
(statearr_24035_24068[(2)] = inst_23993);

(statearr_24035_24068[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (11))){
var inst_23978 = (state_24012[(7)]);
var inst_23964 = (state_24012[(12)]);
var inst_23978__$1 = cljs.core.seq.call(null,inst_23964);
var state_24012__$1 = (function (){var statearr_24036 = state_24012;
(statearr_24036[(7)] = inst_23978__$1);

return statearr_24036;
})();
if(inst_23978__$1){
var statearr_24037_24069 = state_24012__$1;
(statearr_24037_24069[(1)] = (14));

} else {
var statearr_24038_24070 = state_24012__$1;
(statearr_24038_24070[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (9))){
var inst_24000 = (state_24012[(2)]);
var inst_24001 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24012__$1 = (function (){var statearr_24039 = state_24012;
(statearr_24039[(15)] = inst_24000);

return statearr_24039;
})();
if(cljs.core.truth_(inst_24001)){
var statearr_24040_24071 = state_24012__$1;
(statearr_24040_24071[(1)] = (21));

} else {
var statearr_24041_24072 = state_24012__$1;
(statearr_24041_24072[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (5))){
var inst_23956 = cljs.core.async.close_BANG_.call(null,out);
var state_24012__$1 = state_24012;
var statearr_24042_24073 = state_24012__$1;
(statearr_24042_24073[(2)] = inst_23956);

(statearr_24042_24073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (14))){
var inst_23978 = (state_24012[(7)]);
var inst_23980 = cljs.core.chunked_seq_QMARK_.call(null,inst_23978);
var state_24012__$1 = state_24012;
if(inst_23980){
var statearr_24043_24074 = state_24012__$1;
(statearr_24043_24074[(1)] = (17));

} else {
var statearr_24044_24075 = state_24012__$1;
(statearr_24044_24075[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (16))){
var inst_23996 = (state_24012[(2)]);
var state_24012__$1 = state_24012;
var statearr_24045_24076 = state_24012__$1;
(statearr_24045_24076[(2)] = inst_23996);

(statearr_24045_24076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (10))){
var inst_23965 = (state_24012[(8)]);
var inst_23967 = (state_24012[(10)]);
var inst_23972 = cljs.core._nth.call(null,inst_23965,inst_23967);
var state_24012__$1 = state_24012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24012__$1,(13),out,inst_23972);
} else {
if((state_val_24013 === (18))){
var inst_23978 = (state_24012[(7)]);
var inst_23987 = cljs.core.first.call(null,inst_23978);
var state_24012__$1 = state_24012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24012__$1,(20),out,inst_23987);
} else {
if((state_val_24013 === (8))){
var inst_23966 = (state_24012[(9)]);
var inst_23967 = (state_24012[(10)]);
var inst_23969 = (inst_23967 < inst_23966);
var inst_23970 = inst_23969;
var state_24012__$1 = state_24012;
if(cljs.core.truth_(inst_23970)){
var statearr_24046_24077 = state_24012__$1;
(statearr_24046_24077[(1)] = (10));

} else {
var statearr_24047_24078 = state_24012__$1;
(statearr_24047_24078[(1)] = (11));

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
});})(c__21577__auto__))
;
return ((function (switch__21465__auto__,c__21577__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21466__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21466__auto____0 = (function (){
var statearr_24051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24051[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21466__auto__);

(statearr_24051[(1)] = (1));

return statearr_24051;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21466__auto____1 = (function (state_24012){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_24012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e24052){if((e24052 instanceof Object)){
var ex__21469__auto__ = e24052;
var statearr_24053_24079 = state_24012;
(statearr_24053_24079[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24080 = state_24012;
state_24012 = G__24080;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21466__auto__ = function(state_24012){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21466__auto____1.call(this,state_24012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21466__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21466__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto__))
})();
var state__21579__auto__ = (function (){var statearr_24054 = f__21578__auto__.call(null);
(statearr_24054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto__);

return statearr_24054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto__))
);

return c__21577__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24081 = [];
var len__19529__auto___24084 = arguments.length;
var i__19530__auto___24085 = (0);
while(true){
if((i__19530__auto___24085 < len__19529__auto___24084)){
args24081.push((arguments[i__19530__auto___24085]));

var G__24086 = (i__19530__auto___24085 + (1));
i__19530__auto___24085 = G__24086;
continue;
} else {
}
break;
}

var G__24083 = args24081.length;
switch (G__24083) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24081.length)].join('')));

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
var args24088 = [];
var len__19529__auto___24091 = arguments.length;
var i__19530__auto___24092 = (0);
while(true){
if((i__19530__auto___24092 < len__19529__auto___24091)){
args24088.push((arguments[i__19530__auto___24092]));

var G__24093 = (i__19530__auto___24092 + (1));
i__19530__auto___24092 = G__24093;
continue;
} else {
}
break;
}

var G__24090 = args24088.length;
switch (G__24090) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24088.length)].join('')));

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
var args24095 = [];
var len__19529__auto___24146 = arguments.length;
var i__19530__auto___24147 = (0);
while(true){
if((i__19530__auto___24147 < len__19529__auto___24146)){
args24095.push((arguments[i__19530__auto___24147]));

var G__24148 = (i__19530__auto___24147 + (1));
i__19530__auto___24147 = G__24148;
continue;
} else {
}
break;
}

var G__24097 = args24095.length;
switch (G__24097) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24095.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21577__auto___24150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto___24150,out){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto___24150,out){
return (function (state_24121){
var state_val_24122 = (state_24121[(1)]);
if((state_val_24122 === (7))){
var inst_24116 = (state_24121[(2)]);
var state_24121__$1 = state_24121;
var statearr_24123_24151 = state_24121__$1;
(statearr_24123_24151[(2)] = inst_24116);

(statearr_24123_24151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24122 === (1))){
var inst_24098 = null;
var state_24121__$1 = (function (){var statearr_24124 = state_24121;
(statearr_24124[(7)] = inst_24098);

return statearr_24124;
})();
var statearr_24125_24152 = state_24121__$1;
(statearr_24125_24152[(2)] = null);

(statearr_24125_24152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24122 === (4))){
var inst_24101 = (state_24121[(8)]);
var inst_24101__$1 = (state_24121[(2)]);
var inst_24102 = (inst_24101__$1 == null);
var inst_24103 = cljs.core.not.call(null,inst_24102);
var state_24121__$1 = (function (){var statearr_24126 = state_24121;
(statearr_24126[(8)] = inst_24101__$1);

return statearr_24126;
})();
if(inst_24103){
var statearr_24127_24153 = state_24121__$1;
(statearr_24127_24153[(1)] = (5));

} else {
var statearr_24128_24154 = state_24121__$1;
(statearr_24128_24154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24122 === (6))){
var state_24121__$1 = state_24121;
var statearr_24129_24155 = state_24121__$1;
(statearr_24129_24155[(2)] = null);

(statearr_24129_24155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24122 === (3))){
var inst_24118 = (state_24121[(2)]);
var inst_24119 = cljs.core.async.close_BANG_.call(null,out);
var state_24121__$1 = (function (){var statearr_24130 = state_24121;
(statearr_24130[(9)] = inst_24118);

return statearr_24130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24121__$1,inst_24119);
} else {
if((state_val_24122 === (2))){
var state_24121__$1 = state_24121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24121__$1,(4),ch);
} else {
if((state_val_24122 === (11))){
var inst_24101 = (state_24121[(8)]);
var inst_24110 = (state_24121[(2)]);
var inst_24098 = inst_24101;
var state_24121__$1 = (function (){var statearr_24131 = state_24121;
(statearr_24131[(10)] = inst_24110);

(statearr_24131[(7)] = inst_24098);

return statearr_24131;
})();
var statearr_24132_24156 = state_24121__$1;
(statearr_24132_24156[(2)] = null);

(statearr_24132_24156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24122 === (9))){
var inst_24101 = (state_24121[(8)]);
var state_24121__$1 = state_24121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24121__$1,(11),out,inst_24101);
} else {
if((state_val_24122 === (5))){
var inst_24101 = (state_24121[(8)]);
var inst_24098 = (state_24121[(7)]);
var inst_24105 = cljs.core._EQ_.call(null,inst_24101,inst_24098);
var state_24121__$1 = state_24121;
if(inst_24105){
var statearr_24134_24157 = state_24121__$1;
(statearr_24134_24157[(1)] = (8));

} else {
var statearr_24135_24158 = state_24121__$1;
(statearr_24135_24158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24122 === (10))){
var inst_24113 = (state_24121[(2)]);
var state_24121__$1 = state_24121;
var statearr_24136_24159 = state_24121__$1;
(statearr_24136_24159[(2)] = inst_24113);

(statearr_24136_24159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24122 === (8))){
var inst_24098 = (state_24121[(7)]);
var tmp24133 = inst_24098;
var inst_24098__$1 = tmp24133;
var state_24121__$1 = (function (){var statearr_24137 = state_24121;
(statearr_24137[(7)] = inst_24098__$1);

return statearr_24137;
})();
var statearr_24138_24160 = state_24121__$1;
(statearr_24138_24160[(2)] = null);

(statearr_24138_24160[(1)] = (2));


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
});})(c__21577__auto___24150,out))
;
return ((function (switch__21465__auto__,c__21577__auto___24150,out){
return (function() {
var cljs$core$async$state_machine__21466__auto__ = null;
var cljs$core$async$state_machine__21466__auto____0 = (function (){
var statearr_24142 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24142[(0)] = cljs$core$async$state_machine__21466__auto__);

(statearr_24142[(1)] = (1));

return statearr_24142;
});
var cljs$core$async$state_machine__21466__auto____1 = (function (state_24121){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_24121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e24143){if((e24143 instanceof Object)){
var ex__21469__auto__ = e24143;
var statearr_24144_24161 = state_24121;
(statearr_24144_24161[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24162 = state_24121;
state_24121 = G__24162;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$state_machine__21466__auto__ = function(state_24121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21466__auto____1.call(this,state_24121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21466__auto____0;
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21466__auto____1;
return cljs$core$async$state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto___24150,out))
})();
var state__21579__auto__ = (function (){var statearr_24145 = f__21578__auto__.call(null);
(statearr_24145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto___24150);

return statearr_24145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto___24150,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24163 = [];
var len__19529__auto___24233 = arguments.length;
var i__19530__auto___24234 = (0);
while(true){
if((i__19530__auto___24234 < len__19529__auto___24233)){
args24163.push((arguments[i__19530__auto___24234]));

var G__24235 = (i__19530__auto___24234 + (1));
i__19530__auto___24234 = G__24235;
continue;
} else {
}
break;
}

var G__24165 = args24163.length;
switch (G__24165) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24163.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21577__auto___24237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto___24237,out){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto___24237,out){
return (function (state_24203){
var state_val_24204 = (state_24203[(1)]);
if((state_val_24204 === (7))){
var inst_24199 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
var statearr_24205_24238 = state_24203__$1;
(statearr_24205_24238[(2)] = inst_24199);

(statearr_24205_24238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (1))){
var inst_24166 = (new Array(n));
var inst_24167 = inst_24166;
var inst_24168 = (0);
var state_24203__$1 = (function (){var statearr_24206 = state_24203;
(statearr_24206[(7)] = inst_24167);

(statearr_24206[(8)] = inst_24168);

return statearr_24206;
})();
var statearr_24207_24239 = state_24203__$1;
(statearr_24207_24239[(2)] = null);

(statearr_24207_24239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (4))){
var inst_24171 = (state_24203[(9)]);
var inst_24171__$1 = (state_24203[(2)]);
var inst_24172 = (inst_24171__$1 == null);
var inst_24173 = cljs.core.not.call(null,inst_24172);
var state_24203__$1 = (function (){var statearr_24208 = state_24203;
(statearr_24208[(9)] = inst_24171__$1);

return statearr_24208;
})();
if(inst_24173){
var statearr_24209_24240 = state_24203__$1;
(statearr_24209_24240[(1)] = (5));

} else {
var statearr_24210_24241 = state_24203__$1;
(statearr_24210_24241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (15))){
var inst_24193 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
var statearr_24211_24242 = state_24203__$1;
(statearr_24211_24242[(2)] = inst_24193);

(statearr_24211_24242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (13))){
var state_24203__$1 = state_24203;
var statearr_24212_24243 = state_24203__$1;
(statearr_24212_24243[(2)] = null);

(statearr_24212_24243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (6))){
var inst_24168 = (state_24203[(8)]);
var inst_24189 = (inst_24168 > (0));
var state_24203__$1 = state_24203;
if(cljs.core.truth_(inst_24189)){
var statearr_24213_24244 = state_24203__$1;
(statearr_24213_24244[(1)] = (12));

} else {
var statearr_24214_24245 = state_24203__$1;
(statearr_24214_24245[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (3))){
var inst_24201 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24203__$1,inst_24201);
} else {
if((state_val_24204 === (12))){
var inst_24167 = (state_24203[(7)]);
var inst_24191 = cljs.core.vec.call(null,inst_24167);
var state_24203__$1 = state_24203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24203__$1,(15),out,inst_24191);
} else {
if((state_val_24204 === (2))){
var state_24203__$1 = state_24203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24203__$1,(4),ch);
} else {
if((state_val_24204 === (11))){
var inst_24183 = (state_24203[(2)]);
var inst_24184 = (new Array(n));
var inst_24167 = inst_24184;
var inst_24168 = (0);
var state_24203__$1 = (function (){var statearr_24215 = state_24203;
(statearr_24215[(10)] = inst_24183);

(statearr_24215[(7)] = inst_24167);

(statearr_24215[(8)] = inst_24168);

return statearr_24215;
})();
var statearr_24216_24246 = state_24203__$1;
(statearr_24216_24246[(2)] = null);

(statearr_24216_24246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (9))){
var inst_24167 = (state_24203[(7)]);
var inst_24181 = cljs.core.vec.call(null,inst_24167);
var state_24203__$1 = state_24203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24203__$1,(11),out,inst_24181);
} else {
if((state_val_24204 === (5))){
var inst_24171 = (state_24203[(9)]);
var inst_24176 = (state_24203[(11)]);
var inst_24167 = (state_24203[(7)]);
var inst_24168 = (state_24203[(8)]);
var inst_24175 = (inst_24167[inst_24168] = inst_24171);
var inst_24176__$1 = (inst_24168 + (1));
var inst_24177 = (inst_24176__$1 < n);
var state_24203__$1 = (function (){var statearr_24217 = state_24203;
(statearr_24217[(12)] = inst_24175);

(statearr_24217[(11)] = inst_24176__$1);

return statearr_24217;
})();
if(cljs.core.truth_(inst_24177)){
var statearr_24218_24247 = state_24203__$1;
(statearr_24218_24247[(1)] = (8));

} else {
var statearr_24219_24248 = state_24203__$1;
(statearr_24219_24248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (14))){
var inst_24196 = (state_24203[(2)]);
var inst_24197 = cljs.core.async.close_BANG_.call(null,out);
var state_24203__$1 = (function (){var statearr_24221 = state_24203;
(statearr_24221[(13)] = inst_24196);

return statearr_24221;
})();
var statearr_24222_24249 = state_24203__$1;
(statearr_24222_24249[(2)] = inst_24197);

(statearr_24222_24249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (10))){
var inst_24187 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
var statearr_24223_24250 = state_24203__$1;
(statearr_24223_24250[(2)] = inst_24187);

(statearr_24223_24250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (8))){
var inst_24176 = (state_24203[(11)]);
var inst_24167 = (state_24203[(7)]);
var tmp24220 = inst_24167;
var inst_24167__$1 = tmp24220;
var inst_24168 = inst_24176;
var state_24203__$1 = (function (){var statearr_24224 = state_24203;
(statearr_24224[(7)] = inst_24167__$1);

(statearr_24224[(8)] = inst_24168);

return statearr_24224;
})();
var statearr_24225_24251 = state_24203__$1;
(statearr_24225_24251[(2)] = null);

(statearr_24225_24251[(1)] = (2));


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
});})(c__21577__auto___24237,out))
;
return ((function (switch__21465__auto__,c__21577__auto___24237,out){
return (function() {
var cljs$core$async$state_machine__21466__auto__ = null;
var cljs$core$async$state_machine__21466__auto____0 = (function (){
var statearr_24229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24229[(0)] = cljs$core$async$state_machine__21466__auto__);

(statearr_24229[(1)] = (1));

return statearr_24229;
});
var cljs$core$async$state_machine__21466__auto____1 = (function (state_24203){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_24203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e24230){if((e24230 instanceof Object)){
var ex__21469__auto__ = e24230;
var statearr_24231_24252 = state_24203;
(statearr_24231_24252[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24253 = state_24203;
state_24203 = G__24253;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$state_machine__21466__auto__ = function(state_24203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21466__auto____1.call(this,state_24203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21466__auto____0;
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21466__auto____1;
return cljs$core$async$state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto___24237,out))
})();
var state__21579__auto__ = (function (){var statearr_24232 = f__21578__auto__.call(null);
(statearr_24232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto___24237);

return statearr_24232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto___24237,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24254 = [];
var len__19529__auto___24328 = arguments.length;
var i__19530__auto___24329 = (0);
while(true){
if((i__19530__auto___24329 < len__19529__auto___24328)){
args24254.push((arguments[i__19530__auto___24329]));

var G__24330 = (i__19530__auto___24329 + (1));
i__19530__auto___24329 = G__24330;
continue;
} else {
}
break;
}

var G__24256 = args24254.length;
switch (G__24256) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24254.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21577__auto___24332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21577__auto___24332,out){
return (function (){
var f__21578__auto__ = (function (){var switch__21465__auto__ = ((function (c__21577__auto___24332,out){
return (function (state_24298){
var state_val_24299 = (state_24298[(1)]);
if((state_val_24299 === (7))){
var inst_24294 = (state_24298[(2)]);
var state_24298__$1 = state_24298;
var statearr_24300_24333 = state_24298__$1;
(statearr_24300_24333[(2)] = inst_24294);

(statearr_24300_24333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (1))){
var inst_24257 = [];
var inst_24258 = inst_24257;
var inst_24259 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24298__$1 = (function (){var statearr_24301 = state_24298;
(statearr_24301[(7)] = inst_24259);

(statearr_24301[(8)] = inst_24258);

return statearr_24301;
})();
var statearr_24302_24334 = state_24298__$1;
(statearr_24302_24334[(2)] = null);

(statearr_24302_24334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (4))){
var inst_24262 = (state_24298[(9)]);
var inst_24262__$1 = (state_24298[(2)]);
var inst_24263 = (inst_24262__$1 == null);
var inst_24264 = cljs.core.not.call(null,inst_24263);
var state_24298__$1 = (function (){var statearr_24303 = state_24298;
(statearr_24303[(9)] = inst_24262__$1);

return statearr_24303;
})();
if(inst_24264){
var statearr_24304_24335 = state_24298__$1;
(statearr_24304_24335[(1)] = (5));

} else {
var statearr_24305_24336 = state_24298__$1;
(statearr_24305_24336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (15))){
var inst_24288 = (state_24298[(2)]);
var state_24298__$1 = state_24298;
var statearr_24306_24337 = state_24298__$1;
(statearr_24306_24337[(2)] = inst_24288);

(statearr_24306_24337[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (13))){
var state_24298__$1 = state_24298;
var statearr_24307_24338 = state_24298__$1;
(statearr_24307_24338[(2)] = null);

(statearr_24307_24338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (6))){
var inst_24258 = (state_24298[(8)]);
var inst_24283 = inst_24258.length;
var inst_24284 = (inst_24283 > (0));
var state_24298__$1 = state_24298;
if(cljs.core.truth_(inst_24284)){
var statearr_24308_24339 = state_24298__$1;
(statearr_24308_24339[(1)] = (12));

} else {
var statearr_24309_24340 = state_24298__$1;
(statearr_24309_24340[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (3))){
var inst_24296 = (state_24298[(2)]);
var state_24298__$1 = state_24298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24298__$1,inst_24296);
} else {
if((state_val_24299 === (12))){
var inst_24258 = (state_24298[(8)]);
var inst_24286 = cljs.core.vec.call(null,inst_24258);
var state_24298__$1 = state_24298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24298__$1,(15),out,inst_24286);
} else {
if((state_val_24299 === (2))){
var state_24298__$1 = state_24298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24298__$1,(4),ch);
} else {
if((state_val_24299 === (11))){
var inst_24266 = (state_24298[(10)]);
var inst_24262 = (state_24298[(9)]);
var inst_24276 = (state_24298[(2)]);
var inst_24277 = [];
var inst_24278 = inst_24277.push(inst_24262);
var inst_24258 = inst_24277;
var inst_24259 = inst_24266;
var state_24298__$1 = (function (){var statearr_24310 = state_24298;
(statearr_24310[(7)] = inst_24259);

(statearr_24310[(11)] = inst_24276);

(statearr_24310[(12)] = inst_24278);

(statearr_24310[(8)] = inst_24258);

return statearr_24310;
})();
var statearr_24311_24341 = state_24298__$1;
(statearr_24311_24341[(2)] = null);

(statearr_24311_24341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (9))){
var inst_24258 = (state_24298[(8)]);
var inst_24274 = cljs.core.vec.call(null,inst_24258);
var state_24298__$1 = state_24298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24298__$1,(11),out,inst_24274);
} else {
if((state_val_24299 === (5))){
var inst_24259 = (state_24298[(7)]);
var inst_24266 = (state_24298[(10)]);
var inst_24262 = (state_24298[(9)]);
var inst_24266__$1 = f.call(null,inst_24262);
var inst_24267 = cljs.core._EQ_.call(null,inst_24266__$1,inst_24259);
var inst_24268 = cljs.core.keyword_identical_QMARK_.call(null,inst_24259,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24269 = (inst_24267) || (inst_24268);
var state_24298__$1 = (function (){var statearr_24312 = state_24298;
(statearr_24312[(10)] = inst_24266__$1);

return statearr_24312;
})();
if(cljs.core.truth_(inst_24269)){
var statearr_24313_24342 = state_24298__$1;
(statearr_24313_24342[(1)] = (8));

} else {
var statearr_24314_24343 = state_24298__$1;
(statearr_24314_24343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (14))){
var inst_24291 = (state_24298[(2)]);
var inst_24292 = cljs.core.async.close_BANG_.call(null,out);
var state_24298__$1 = (function (){var statearr_24316 = state_24298;
(statearr_24316[(13)] = inst_24291);

return statearr_24316;
})();
var statearr_24317_24344 = state_24298__$1;
(statearr_24317_24344[(2)] = inst_24292);

(statearr_24317_24344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (10))){
var inst_24281 = (state_24298[(2)]);
var state_24298__$1 = state_24298;
var statearr_24318_24345 = state_24298__$1;
(statearr_24318_24345[(2)] = inst_24281);

(statearr_24318_24345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (8))){
var inst_24266 = (state_24298[(10)]);
var inst_24262 = (state_24298[(9)]);
var inst_24258 = (state_24298[(8)]);
var inst_24271 = inst_24258.push(inst_24262);
var tmp24315 = inst_24258;
var inst_24258__$1 = tmp24315;
var inst_24259 = inst_24266;
var state_24298__$1 = (function (){var statearr_24319 = state_24298;
(statearr_24319[(7)] = inst_24259);

(statearr_24319[(8)] = inst_24258__$1);

(statearr_24319[(14)] = inst_24271);

return statearr_24319;
})();
var statearr_24320_24346 = state_24298__$1;
(statearr_24320_24346[(2)] = null);

(statearr_24320_24346[(1)] = (2));


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
});})(c__21577__auto___24332,out))
;
return ((function (switch__21465__auto__,c__21577__auto___24332,out){
return (function() {
var cljs$core$async$state_machine__21466__auto__ = null;
var cljs$core$async$state_machine__21466__auto____0 = (function (){
var statearr_24324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24324[(0)] = cljs$core$async$state_machine__21466__auto__);

(statearr_24324[(1)] = (1));

return statearr_24324;
});
var cljs$core$async$state_machine__21466__auto____1 = (function (state_24298){
while(true){
var ret_value__21467__auto__ = (function (){try{while(true){
var result__21468__auto__ = switch__21465__auto__.call(null,state_24298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21468__auto__;
}
break;
}
}catch (e24325){if((e24325 instanceof Object)){
var ex__21469__auto__ = e24325;
var statearr_24326_24347 = state_24298;
(statearr_24326_24347[(5)] = ex__21469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24348 = state_24298;
state_24298 = G__24348;
continue;
} else {
return ret_value__21467__auto__;
}
break;
}
});
cljs$core$async$state_machine__21466__auto__ = function(state_24298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21466__auto____1.call(this,state_24298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21466__auto____0;
cljs$core$async$state_machine__21466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21466__auto____1;
return cljs$core$async$state_machine__21466__auto__;
})()
;})(switch__21465__auto__,c__21577__auto___24332,out))
})();
var state__21579__auto__ = (function (){var statearr_24327 = f__21578__auto__.call(null);
(statearr_24327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21577__auto___24332);

return statearr_24327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21579__auto__);
});})(c__21577__auto___24332,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1505303971391