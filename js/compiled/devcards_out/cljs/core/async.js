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
var args20671 = [];
var len__19529__auto___20677 = arguments.length;
var i__19530__auto___20678 = (0);
while(true){
if((i__19530__auto___20678 < len__19529__auto___20677)){
args20671.push((arguments[i__19530__auto___20678]));

var G__20679 = (i__19530__auto___20678 + (1));
i__19530__auto___20678 = G__20679;
continue;
} else {
}
break;
}

var G__20673 = args20671.length;
switch (G__20673) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20671.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20674 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20674 = (function (f,blockable,meta20675){
this.f = f;
this.blockable = blockable;
this.meta20675 = meta20675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20676,meta20675__$1){
var self__ = this;
var _20676__$1 = this;
return (new cljs.core.async.t_cljs$core$async20674(self__.f,self__.blockable,meta20675__$1));
});

cljs.core.async.t_cljs$core$async20674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20676){
var self__ = this;
var _20676__$1 = this;
return self__.meta20675;
});

cljs.core.async.t_cljs$core$async20674.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20674.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20674.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20674.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20675","meta20675",669398146,null)], null);
});

cljs.core.async.t_cljs$core$async20674.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20674";

cljs.core.async.t_cljs$core$async20674.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async20674");
});

cljs.core.async.__GT_t_cljs$core$async20674 = (function cljs$core$async$__GT_t_cljs$core$async20674(f__$1,blockable__$1,meta20675){
return (new cljs.core.async.t_cljs$core$async20674(f__$1,blockable__$1,meta20675));
});

}

return (new cljs.core.async.t_cljs$core$async20674(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args20683 = [];
var len__19529__auto___20686 = arguments.length;
var i__19530__auto___20687 = (0);
while(true){
if((i__19530__auto___20687 < len__19529__auto___20686)){
args20683.push((arguments[i__19530__auto___20687]));

var G__20688 = (i__19530__auto___20687 + (1));
i__19530__auto___20687 = G__20688;
continue;
} else {
}
break;
}

var G__20685 = args20683.length;
switch (G__20685) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20683.length)].join('')));

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
var args20690 = [];
var len__19529__auto___20693 = arguments.length;
var i__19530__auto___20694 = (0);
while(true){
if((i__19530__auto___20694 < len__19529__auto___20693)){
args20690.push((arguments[i__19530__auto___20694]));

var G__20695 = (i__19530__auto___20694 + (1));
i__19530__auto___20694 = G__20695;
continue;
} else {
}
break;
}

var G__20692 = args20690.length;
switch (G__20692) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20690.length)].join('')));

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
var args20697 = [];
var len__19529__auto___20700 = arguments.length;
var i__19530__auto___20701 = (0);
while(true){
if((i__19530__auto___20701 < len__19529__auto___20700)){
args20697.push((arguments[i__19530__auto___20701]));

var G__20702 = (i__19530__auto___20701 + (1));
i__19530__auto___20701 = G__20702;
continue;
} else {
}
break;
}

var G__20699 = args20697.length;
switch (G__20699) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20697.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20704 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20704);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20704,ret){
return (function (){
return fn1.call(null,val_20704);
});})(val_20704,ret))
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
var args20705 = [];
var len__19529__auto___20708 = arguments.length;
var i__19530__auto___20709 = (0);
while(true){
if((i__19530__auto___20709 < len__19529__auto___20708)){
args20705.push((arguments[i__19530__auto___20709]));

var G__20710 = (i__19530__auto___20709 + (1));
i__19530__auto___20709 = G__20710;
continue;
} else {
}
break;
}

var G__20707 = args20705.length;
switch (G__20707) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20705.length)].join('')));

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
var n__19374__auto___20712 = n;
var x_20713 = (0);
while(true){
if((x_20713 < n__19374__auto___20712)){
(a[x_20713] = (0));

var G__20714 = (x_20713 + (1));
x_20713 = G__20714;
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

var G__20715 = (i + (1));
i = G__20715;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20719 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20719 = (function (alt_flag,flag,meta20720){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20720 = meta20720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20721,meta20720__$1){
var self__ = this;
var _20721__$1 = this;
return (new cljs.core.async.t_cljs$core$async20719(self__.alt_flag,self__.flag,meta20720__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20719.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20721){
var self__ = this;
var _20721__$1 = this;
return self__.meta20720;
});})(flag))
;

cljs.core.async.t_cljs$core$async20719.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20719.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20719.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20719.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20719.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20720","meta20720",-891761703,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20719.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20719";

cljs.core.async.t_cljs$core$async20719.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async20719");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20719 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20719(alt_flag__$1,flag__$1,meta20720){
return (new cljs.core.async.t_cljs$core$async20719(alt_flag__$1,flag__$1,meta20720));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20719(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20725 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20725 = (function (alt_handler,flag,cb,meta20726){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20726 = meta20726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20727,meta20726__$1){
var self__ = this;
var _20727__$1 = this;
return (new cljs.core.async.t_cljs$core$async20725(self__.alt_handler,self__.flag,self__.cb,meta20726__$1));
});

cljs.core.async.t_cljs$core$async20725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20727){
var self__ = this;
var _20727__$1 = this;
return self__.meta20726;
});

cljs.core.async.t_cljs$core$async20725.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20725.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20725.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20725.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20726","meta20726",-337903451,null)], null);
});

cljs.core.async.t_cljs$core$async20725.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20725";

cljs.core.async.t_cljs$core$async20725.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async20725");
});

cljs.core.async.__GT_t_cljs$core$async20725 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20725(alt_handler__$1,flag__$1,cb__$1,meta20726){
return (new cljs.core.async.t_cljs$core$async20725(alt_handler__$1,flag__$1,cb__$1,meta20726));
});

}

return (new cljs.core.async.t_cljs$core$async20725(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__20728_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20728_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20729_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20729_SHARP_,port], null));
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
var G__20730 = (i + (1));
i = G__20730;
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
var len__19529__auto___20736 = arguments.length;
var i__19530__auto___20737 = (0);
while(true){
if((i__19530__auto___20737 < len__19529__auto___20736)){
args__19536__auto__.push((arguments[i__19530__auto___20737]));

var G__20738 = (i__19530__auto___20737 + (1));
i__19530__auto___20737 = G__20738;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20733){
var map__20734 = p__20733;
var map__20734__$1 = ((((!((map__20734 == null)))?((((map__20734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20734):map__20734);
var opts = map__20734__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20731){
var G__20732 = cljs.core.first.call(null,seq20731);
var seq20731__$1 = cljs.core.next.call(null,seq20731);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20732,seq20731__$1);
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
var args20739 = [];
var len__19529__auto___20789 = arguments.length;
var i__19530__auto___20790 = (0);
while(true){
if((i__19530__auto___20790 < len__19529__auto___20789)){
args20739.push((arguments[i__19530__auto___20790]));

var G__20791 = (i__19530__auto___20790 + (1));
i__19530__auto___20790 = G__20791;
continue;
} else {
}
break;
}

var G__20741 = args20739.length;
switch (G__20741) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20739.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20626__auto___20793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto___20793){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto___20793){
return (function (state_20765){
var state_val_20766 = (state_20765[(1)]);
if((state_val_20766 === (7))){
var inst_20761 = (state_20765[(2)]);
var state_20765__$1 = state_20765;
var statearr_20767_20794 = state_20765__$1;
(statearr_20767_20794[(2)] = inst_20761);

(statearr_20767_20794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20766 === (1))){
var state_20765__$1 = state_20765;
var statearr_20768_20795 = state_20765__$1;
(statearr_20768_20795[(2)] = null);

(statearr_20768_20795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20766 === (4))){
var inst_20744 = (state_20765[(7)]);
var inst_20744__$1 = (state_20765[(2)]);
var inst_20745 = (inst_20744__$1 == null);
var state_20765__$1 = (function (){var statearr_20769 = state_20765;
(statearr_20769[(7)] = inst_20744__$1);

return statearr_20769;
})();
if(cljs.core.truth_(inst_20745)){
var statearr_20770_20796 = state_20765__$1;
(statearr_20770_20796[(1)] = (5));

} else {
var statearr_20771_20797 = state_20765__$1;
(statearr_20771_20797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20766 === (13))){
var state_20765__$1 = state_20765;
var statearr_20772_20798 = state_20765__$1;
(statearr_20772_20798[(2)] = null);

(statearr_20772_20798[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20766 === (6))){
var inst_20744 = (state_20765[(7)]);
var state_20765__$1 = state_20765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20765__$1,(11),to,inst_20744);
} else {
if((state_val_20766 === (3))){
var inst_20763 = (state_20765[(2)]);
var state_20765__$1 = state_20765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20765__$1,inst_20763);
} else {
if((state_val_20766 === (12))){
var state_20765__$1 = state_20765;
var statearr_20773_20799 = state_20765__$1;
(statearr_20773_20799[(2)] = null);

(statearr_20773_20799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20766 === (2))){
var state_20765__$1 = state_20765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20765__$1,(4),from);
} else {
if((state_val_20766 === (11))){
var inst_20754 = (state_20765[(2)]);
var state_20765__$1 = state_20765;
if(cljs.core.truth_(inst_20754)){
var statearr_20774_20800 = state_20765__$1;
(statearr_20774_20800[(1)] = (12));

} else {
var statearr_20775_20801 = state_20765__$1;
(statearr_20775_20801[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20766 === (9))){
var state_20765__$1 = state_20765;
var statearr_20776_20802 = state_20765__$1;
(statearr_20776_20802[(2)] = null);

(statearr_20776_20802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20766 === (5))){
var state_20765__$1 = state_20765;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20777_20803 = state_20765__$1;
(statearr_20777_20803[(1)] = (8));

} else {
var statearr_20778_20804 = state_20765__$1;
(statearr_20778_20804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20766 === (14))){
var inst_20759 = (state_20765[(2)]);
var state_20765__$1 = state_20765;
var statearr_20779_20805 = state_20765__$1;
(statearr_20779_20805[(2)] = inst_20759);

(statearr_20779_20805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20766 === (10))){
var inst_20751 = (state_20765[(2)]);
var state_20765__$1 = state_20765;
var statearr_20780_20806 = state_20765__$1;
(statearr_20780_20806[(2)] = inst_20751);

(statearr_20780_20806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20766 === (8))){
var inst_20748 = cljs.core.async.close_BANG_.call(null,to);
var state_20765__$1 = state_20765;
var statearr_20781_20807 = state_20765__$1;
(statearr_20781_20807[(2)] = inst_20748);

(statearr_20781_20807[(1)] = (10));


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
});})(c__20626__auto___20793))
;
return ((function (switch__20514__auto__,c__20626__auto___20793){
return (function() {
var cljs$core$async$state_machine__20515__auto__ = null;
var cljs$core$async$state_machine__20515__auto____0 = (function (){
var statearr_20785 = [null,null,null,null,null,null,null,null];
(statearr_20785[(0)] = cljs$core$async$state_machine__20515__auto__);

(statearr_20785[(1)] = (1));

return statearr_20785;
});
var cljs$core$async$state_machine__20515__auto____1 = (function (state_20765){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_20765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e20786){if((e20786 instanceof Object)){
var ex__20518__auto__ = e20786;
var statearr_20787_20808 = state_20765;
(statearr_20787_20808[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20809 = state_20765;
state_20765 = G__20809;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$state_machine__20515__auto__ = function(state_20765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20515__auto____1.call(this,state_20765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20515__auto____0;
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20515__auto____1;
return cljs$core$async$state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto___20793))
})();
var state__20628__auto__ = (function (){var statearr_20788 = f__20627__auto__.call(null);
(statearr_20788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto___20793);

return statearr_20788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto___20793))
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
return (function (p__20993){
var vec__20994 = p__20993;
var v = cljs.core.nth.call(null,vec__20994,(0),null);
var p = cljs.core.nth.call(null,vec__20994,(1),null);
var job = vec__20994;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20626__auto___21176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto___21176,res,vec__20994,v,p,job,jobs,results){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto___21176,res,vec__20994,v,p,job,jobs,results){
return (function (state_20999){
var state_val_21000 = (state_20999[(1)]);
if((state_val_21000 === (1))){
var state_20999__$1 = state_20999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20999__$1,(2),res,v);
} else {
if((state_val_21000 === (2))){
var inst_20996 = (state_20999[(2)]);
var inst_20997 = cljs.core.async.close_BANG_.call(null,res);
var state_20999__$1 = (function (){var statearr_21001 = state_20999;
(statearr_21001[(7)] = inst_20996);

return statearr_21001;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20999__$1,inst_20997);
} else {
return null;
}
}
});})(c__20626__auto___21176,res,vec__20994,v,p,job,jobs,results))
;
return ((function (switch__20514__auto__,c__20626__auto___21176,res,vec__20994,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____0 = (function (){
var statearr_21005 = [null,null,null,null,null,null,null,null];
(statearr_21005[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__);

(statearr_21005[(1)] = (1));

return statearr_21005;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____1 = (function (state_20999){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_20999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e21006){if((e21006 instanceof Object)){
var ex__20518__auto__ = e21006;
var statearr_21007_21177 = state_20999;
(statearr_21007_21177[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21178 = state_20999;
state_20999 = G__21178;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__ = function(state_20999){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____1.call(this,state_20999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto___21176,res,vec__20994,v,p,job,jobs,results))
})();
var state__20628__auto__ = (function (){var statearr_21008 = f__20627__auto__.call(null);
(statearr_21008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto___21176);

return statearr_21008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto___21176,res,vec__20994,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21009){
var vec__21010 = p__21009;
var v = cljs.core.nth.call(null,vec__21010,(0),null);
var p = cljs.core.nth.call(null,vec__21010,(1),null);
var job = vec__21010;
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
var n__19374__auto___21179 = n;
var __21180 = (0);
while(true){
if((__21180 < n__19374__auto___21179)){
var G__21011_21181 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21011_21181) {
case "compute":
var c__20626__auto___21183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21180,c__20626__auto___21183,G__21011_21181,n__19374__auto___21179,jobs,results,process,async){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (__21180,c__20626__auto___21183,G__21011_21181,n__19374__auto___21179,jobs,results,process,async){
return (function (state_21024){
var state_val_21025 = (state_21024[(1)]);
if((state_val_21025 === (1))){
var state_21024__$1 = state_21024;
var statearr_21026_21184 = state_21024__$1;
(statearr_21026_21184[(2)] = null);

(statearr_21026_21184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (2))){
var state_21024__$1 = state_21024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21024__$1,(4),jobs);
} else {
if((state_val_21025 === (3))){
var inst_21022 = (state_21024[(2)]);
var state_21024__$1 = state_21024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21024__$1,inst_21022);
} else {
if((state_val_21025 === (4))){
var inst_21014 = (state_21024[(2)]);
var inst_21015 = process.call(null,inst_21014);
var state_21024__$1 = state_21024;
if(cljs.core.truth_(inst_21015)){
var statearr_21027_21185 = state_21024__$1;
(statearr_21027_21185[(1)] = (5));

} else {
var statearr_21028_21186 = state_21024__$1;
(statearr_21028_21186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (5))){
var state_21024__$1 = state_21024;
var statearr_21029_21187 = state_21024__$1;
(statearr_21029_21187[(2)] = null);

(statearr_21029_21187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (6))){
var state_21024__$1 = state_21024;
var statearr_21030_21188 = state_21024__$1;
(statearr_21030_21188[(2)] = null);

(statearr_21030_21188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (7))){
var inst_21020 = (state_21024[(2)]);
var state_21024__$1 = state_21024;
var statearr_21031_21189 = state_21024__$1;
(statearr_21031_21189[(2)] = inst_21020);

(statearr_21031_21189[(1)] = (3));


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
});})(__21180,c__20626__auto___21183,G__21011_21181,n__19374__auto___21179,jobs,results,process,async))
;
return ((function (__21180,switch__20514__auto__,c__20626__auto___21183,G__21011_21181,n__19374__auto___21179,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____0 = (function (){
var statearr_21035 = [null,null,null,null,null,null,null];
(statearr_21035[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__);

(statearr_21035[(1)] = (1));

return statearr_21035;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____1 = (function (state_21024){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_21024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e21036){if((e21036 instanceof Object)){
var ex__20518__auto__ = e21036;
var statearr_21037_21190 = state_21024;
(statearr_21037_21190[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21191 = state_21024;
state_21024 = G__21191;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__ = function(state_21024){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____1.call(this,state_21024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__;
})()
;})(__21180,switch__20514__auto__,c__20626__auto___21183,G__21011_21181,n__19374__auto___21179,jobs,results,process,async))
})();
var state__20628__auto__ = (function (){var statearr_21038 = f__20627__auto__.call(null);
(statearr_21038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto___21183);

return statearr_21038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(__21180,c__20626__auto___21183,G__21011_21181,n__19374__auto___21179,jobs,results,process,async))
);


break;
case "async":
var c__20626__auto___21192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21180,c__20626__auto___21192,G__21011_21181,n__19374__auto___21179,jobs,results,process,async){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (__21180,c__20626__auto___21192,G__21011_21181,n__19374__auto___21179,jobs,results,process,async){
return (function (state_21051){
var state_val_21052 = (state_21051[(1)]);
if((state_val_21052 === (1))){
var state_21051__$1 = state_21051;
var statearr_21053_21193 = state_21051__$1;
(statearr_21053_21193[(2)] = null);

(statearr_21053_21193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21052 === (2))){
var state_21051__$1 = state_21051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21051__$1,(4),jobs);
} else {
if((state_val_21052 === (3))){
var inst_21049 = (state_21051[(2)]);
var state_21051__$1 = state_21051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21051__$1,inst_21049);
} else {
if((state_val_21052 === (4))){
var inst_21041 = (state_21051[(2)]);
var inst_21042 = async.call(null,inst_21041);
var state_21051__$1 = state_21051;
if(cljs.core.truth_(inst_21042)){
var statearr_21054_21194 = state_21051__$1;
(statearr_21054_21194[(1)] = (5));

} else {
var statearr_21055_21195 = state_21051__$1;
(statearr_21055_21195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21052 === (5))){
var state_21051__$1 = state_21051;
var statearr_21056_21196 = state_21051__$1;
(statearr_21056_21196[(2)] = null);

(statearr_21056_21196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21052 === (6))){
var state_21051__$1 = state_21051;
var statearr_21057_21197 = state_21051__$1;
(statearr_21057_21197[(2)] = null);

(statearr_21057_21197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21052 === (7))){
var inst_21047 = (state_21051[(2)]);
var state_21051__$1 = state_21051;
var statearr_21058_21198 = state_21051__$1;
(statearr_21058_21198[(2)] = inst_21047);

(statearr_21058_21198[(1)] = (3));


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
});})(__21180,c__20626__auto___21192,G__21011_21181,n__19374__auto___21179,jobs,results,process,async))
;
return ((function (__21180,switch__20514__auto__,c__20626__auto___21192,G__21011_21181,n__19374__auto___21179,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____0 = (function (){
var statearr_21062 = [null,null,null,null,null,null,null];
(statearr_21062[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__);

(statearr_21062[(1)] = (1));

return statearr_21062;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____1 = (function (state_21051){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_21051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e21063){if((e21063 instanceof Object)){
var ex__20518__auto__ = e21063;
var statearr_21064_21199 = state_21051;
(statearr_21064_21199[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21200 = state_21051;
state_21051 = G__21200;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__ = function(state_21051){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____1.call(this,state_21051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__;
})()
;})(__21180,switch__20514__auto__,c__20626__auto___21192,G__21011_21181,n__19374__auto___21179,jobs,results,process,async))
})();
var state__20628__auto__ = (function (){var statearr_21065 = f__20627__auto__.call(null);
(statearr_21065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto___21192);

return statearr_21065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(__21180,c__20626__auto___21192,G__21011_21181,n__19374__auto___21179,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21201 = (__21180 + (1));
__21180 = G__21201;
continue;
} else {
}
break;
}

var c__20626__auto___21202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto___21202,jobs,results,process,async){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto___21202,jobs,results,process,async){
return (function (state_21087){
var state_val_21088 = (state_21087[(1)]);
if((state_val_21088 === (1))){
var state_21087__$1 = state_21087;
var statearr_21089_21203 = state_21087__$1;
(statearr_21089_21203[(2)] = null);

(statearr_21089_21203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21088 === (2))){
var state_21087__$1 = state_21087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21087__$1,(4),from);
} else {
if((state_val_21088 === (3))){
var inst_21085 = (state_21087[(2)]);
var state_21087__$1 = state_21087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21087__$1,inst_21085);
} else {
if((state_val_21088 === (4))){
var inst_21068 = (state_21087[(7)]);
var inst_21068__$1 = (state_21087[(2)]);
var inst_21069 = (inst_21068__$1 == null);
var state_21087__$1 = (function (){var statearr_21090 = state_21087;
(statearr_21090[(7)] = inst_21068__$1);

return statearr_21090;
})();
if(cljs.core.truth_(inst_21069)){
var statearr_21091_21204 = state_21087__$1;
(statearr_21091_21204[(1)] = (5));

} else {
var statearr_21092_21205 = state_21087__$1;
(statearr_21092_21205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21088 === (5))){
var inst_21071 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21087__$1 = state_21087;
var statearr_21093_21206 = state_21087__$1;
(statearr_21093_21206[(2)] = inst_21071);

(statearr_21093_21206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21088 === (6))){
var inst_21073 = (state_21087[(8)]);
var inst_21068 = (state_21087[(7)]);
var inst_21073__$1 = cljs.core.async.chan.call(null,(1));
var inst_21074 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21075 = [inst_21068,inst_21073__$1];
var inst_21076 = (new cljs.core.PersistentVector(null,2,(5),inst_21074,inst_21075,null));
var state_21087__$1 = (function (){var statearr_21094 = state_21087;
(statearr_21094[(8)] = inst_21073__$1);

return statearr_21094;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21087__$1,(8),jobs,inst_21076);
} else {
if((state_val_21088 === (7))){
var inst_21083 = (state_21087[(2)]);
var state_21087__$1 = state_21087;
var statearr_21095_21207 = state_21087__$1;
(statearr_21095_21207[(2)] = inst_21083);

(statearr_21095_21207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21088 === (8))){
var inst_21073 = (state_21087[(8)]);
var inst_21078 = (state_21087[(2)]);
var state_21087__$1 = (function (){var statearr_21096 = state_21087;
(statearr_21096[(9)] = inst_21078);

return statearr_21096;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21087__$1,(9),results,inst_21073);
} else {
if((state_val_21088 === (9))){
var inst_21080 = (state_21087[(2)]);
var state_21087__$1 = (function (){var statearr_21097 = state_21087;
(statearr_21097[(10)] = inst_21080);

return statearr_21097;
})();
var statearr_21098_21208 = state_21087__$1;
(statearr_21098_21208[(2)] = null);

(statearr_21098_21208[(1)] = (2));


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
});})(c__20626__auto___21202,jobs,results,process,async))
;
return ((function (switch__20514__auto__,c__20626__auto___21202,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____0 = (function (){
var statearr_21102 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21102[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__);

(statearr_21102[(1)] = (1));

return statearr_21102;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____1 = (function (state_21087){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_21087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e21103){if((e21103 instanceof Object)){
var ex__20518__auto__ = e21103;
var statearr_21104_21209 = state_21087;
(statearr_21104_21209[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21210 = state_21087;
state_21087 = G__21210;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__ = function(state_21087){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____1.call(this,state_21087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto___21202,jobs,results,process,async))
})();
var state__20628__auto__ = (function (){var statearr_21105 = f__20627__auto__.call(null);
(statearr_21105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto___21202);

return statearr_21105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto___21202,jobs,results,process,async))
);


var c__20626__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto__,jobs,results,process,async){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto__,jobs,results,process,async){
return (function (state_21143){
var state_val_21144 = (state_21143[(1)]);
if((state_val_21144 === (7))){
var inst_21139 = (state_21143[(2)]);
var state_21143__$1 = state_21143;
var statearr_21145_21211 = state_21143__$1;
(statearr_21145_21211[(2)] = inst_21139);

(statearr_21145_21211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (20))){
var state_21143__$1 = state_21143;
var statearr_21146_21212 = state_21143__$1;
(statearr_21146_21212[(2)] = null);

(statearr_21146_21212[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (1))){
var state_21143__$1 = state_21143;
var statearr_21147_21213 = state_21143__$1;
(statearr_21147_21213[(2)] = null);

(statearr_21147_21213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (4))){
var inst_21108 = (state_21143[(7)]);
var inst_21108__$1 = (state_21143[(2)]);
var inst_21109 = (inst_21108__$1 == null);
var state_21143__$1 = (function (){var statearr_21148 = state_21143;
(statearr_21148[(7)] = inst_21108__$1);

return statearr_21148;
})();
if(cljs.core.truth_(inst_21109)){
var statearr_21149_21214 = state_21143__$1;
(statearr_21149_21214[(1)] = (5));

} else {
var statearr_21150_21215 = state_21143__$1;
(statearr_21150_21215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (15))){
var inst_21121 = (state_21143[(8)]);
var state_21143__$1 = state_21143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21143__$1,(18),to,inst_21121);
} else {
if((state_val_21144 === (21))){
var inst_21134 = (state_21143[(2)]);
var state_21143__$1 = state_21143;
var statearr_21151_21216 = state_21143__$1;
(statearr_21151_21216[(2)] = inst_21134);

(statearr_21151_21216[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (13))){
var inst_21136 = (state_21143[(2)]);
var state_21143__$1 = (function (){var statearr_21152 = state_21143;
(statearr_21152[(9)] = inst_21136);

return statearr_21152;
})();
var statearr_21153_21217 = state_21143__$1;
(statearr_21153_21217[(2)] = null);

(statearr_21153_21217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (6))){
var inst_21108 = (state_21143[(7)]);
var state_21143__$1 = state_21143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21143__$1,(11),inst_21108);
} else {
if((state_val_21144 === (17))){
var inst_21129 = (state_21143[(2)]);
var state_21143__$1 = state_21143;
if(cljs.core.truth_(inst_21129)){
var statearr_21154_21218 = state_21143__$1;
(statearr_21154_21218[(1)] = (19));

} else {
var statearr_21155_21219 = state_21143__$1;
(statearr_21155_21219[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (3))){
var inst_21141 = (state_21143[(2)]);
var state_21143__$1 = state_21143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21143__$1,inst_21141);
} else {
if((state_val_21144 === (12))){
var inst_21118 = (state_21143[(10)]);
var state_21143__$1 = state_21143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21143__$1,(14),inst_21118);
} else {
if((state_val_21144 === (2))){
var state_21143__$1 = state_21143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21143__$1,(4),results);
} else {
if((state_val_21144 === (19))){
var state_21143__$1 = state_21143;
var statearr_21156_21220 = state_21143__$1;
(statearr_21156_21220[(2)] = null);

(statearr_21156_21220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (11))){
var inst_21118 = (state_21143[(2)]);
var state_21143__$1 = (function (){var statearr_21157 = state_21143;
(statearr_21157[(10)] = inst_21118);

return statearr_21157;
})();
var statearr_21158_21221 = state_21143__$1;
(statearr_21158_21221[(2)] = null);

(statearr_21158_21221[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (9))){
var state_21143__$1 = state_21143;
var statearr_21159_21222 = state_21143__$1;
(statearr_21159_21222[(2)] = null);

(statearr_21159_21222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (5))){
var state_21143__$1 = state_21143;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21160_21223 = state_21143__$1;
(statearr_21160_21223[(1)] = (8));

} else {
var statearr_21161_21224 = state_21143__$1;
(statearr_21161_21224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (14))){
var inst_21123 = (state_21143[(11)]);
var inst_21121 = (state_21143[(8)]);
var inst_21121__$1 = (state_21143[(2)]);
var inst_21122 = (inst_21121__$1 == null);
var inst_21123__$1 = cljs.core.not.call(null,inst_21122);
var state_21143__$1 = (function (){var statearr_21162 = state_21143;
(statearr_21162[(11)] = inst_21123__$1);

(statearr_21162[(8)] = inst_21121__$1);

return statearr_21162;
})();
if(inst_21123__$1){
var statearr_21163_21225 = state_21143__$1;
(statearr_21163_21225[(1)] = (15));

} else {
var statearr_21164_21226 = state_21143__$1;
(statearr_21164_21226[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (16))){
var inst_21123 = (state_21143[(11)]);
var state_21143__$1 = state_21143;
var statearr_21165_21227 = state_21143__$1;
(statearr_21165_21227[(2)] = inst_21123);

(statearr_21165_21227[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (10))){
var inst_21115 = (state_21143[(2)]);
var state_21143__$1 = state_21143;
var statearr_21166_21228 = state_21143__$1;
(statearr_21166_21228[(2)] = inst_21115);

(statearr_21166_21228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (18))){
var inst_21126 = (state_21143[(2)]);
var state_21143__$1 = state_21143;
var statearr_21167_21229 = state_21143__$1;
(statearr_21167_21229[(2)] = inst_21126);

(statearr_21167_21229[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (8))){
var inst_21112 = cljs.core.async.close_BANG_.call(null,to);
var state_21143__$1 = state_21143;
var statearr_21168_21230 = state_21143__$1;
(statearr_21168_21230[(2)] = inst_21112);

(statearr_21168_21230[(1)] = (10));


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
});})(c__20626__auto__,jobs,results,process,async))
;
return ((function (switch__20514__auto__,c__20626__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____0 = (function (){
var statearr_21172 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21172[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__);

(statearr_21172[(1)] = (1));

return statearr_21172;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____1 = (function (state_21143){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_21143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e21173){if((e21173 instanceof Object)){
var ex__20518__auto__ = e21173;
var statearr_21174_21231 = state_21143;
(statearr_21174_21231[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21232 = state_21143;
state_21143 = G__21232;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__ = function(state_21143){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____1.call(this,state_21143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto__,jobs,results,process,async))
})();
var state__20628__auto__ = (function (){var statearr_21175 = f__20627__auto__.call(null);
(statearr_21175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto__);

return statearr_21175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto__,jobs,results,process,async))
);

return c__20626__auto__;
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
var args21233 = [];
var len__19529__auto___21236 = arguments.length;
var i__19530__auto___21237 = (0);
while(true){
if((i__19530__auto___21237 < len__19529__auto___21236)){
args21233.push((arguments[i__19530__auto___21237]));

var G__21238 = (i__19530__auto___21237 + (1));
i__19530__auto___21237 = G__21238;
continue;
} else {
}
break;
}

var G__21235 = args21233.length;
switch (G__21235) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21233.length)].join('')));

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
var args21240 = [];
var len__19529__auto___21243 = arguments.length;
var i__19530__auto___21244 = (0);
while(true){
if((i__19530__auto___21244 < len__19529__auto___21243)){
args21240.push((arguments[i__19530__auto___21244]));

var G__21245 = (i__19530__auto___21244 + (1));
i__19530__auto___21244 = G__21245;
continue;
} else {
}
break;
}

var G__21242 = args21240.length;
switch (G__21242) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21240.length)].join('')));

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
var args21247 = [];
var len__19529__auto___21300 = arguments.length;
var i__19530__auto___21301 = (0);
while(true){
if((i__19530__auto___21301 < len__19529__auto___21300)){
args21247.push((arguments[i__19530__auto___21301]));

var G__21302 = (i__19530__auto___21301 + (1));
i__19530__auto___21301 = G__21302;
continue;
} else {
}
break;
}

var G__21249 = args21247.length;
switch (G__21249) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21247.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20626__auto___21304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto___21304,tc,fc){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto___21304,tc,fc){
return (function (state_21275){
var state_val_21276 = (state_21275[(1)]);
if((state_val_21276 === (7))){
var inst_21271 = (state_21275[(2)]);
var state_21275__$1 = state_21275;
var statearr_21277_21305 = state_21275__$1;
(statearr_21277_21305[(2)] = inst_21271);

(statearr_21277_21305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (1))){
var state_21275__$1 = state_21275;
var statearr_21278_21306 = state_21275__$1;
(statearr_21278_21306[(2)] = null);

(statearr_21278_21306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (4))){
var inst_21252 = (state_21275[(7)]);
var inst_21252__$1 = (state_21275[(2)]);
var inst_21253 = (inst_21252__$1 == null);
var state_21275__$1 = (function (){var statearr_21279 = state_21275;
(statearr_21279[(7)] = inst_21252__$1);

return statearr_21279;
})();
if(cljs.core.truth_(inst_21253)){
var statearr_21280_21307 = state_21275__$1;
(statearr_21280_21307[(1)] = (5));

} else {
var statearr_21281_21308 = state_21275__$1;
(statearr_21281_21308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (13))){
var state_21275__$1 = state_21275;
var statearr_21282_21309 = state_21275__$1;
(statearr_21282_21309[(2)] = null);

(statearr_21282_21309[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (6))){
var inst_21252 = (state_21275[(7)]);
var inst_21258 = p.call(null,inst_21252);
var state_21275__$1 = state_21275;
if(cljs.core.truth_(inst_21258)){
var statearr_21283_21310 = state_21275__$1;
(statearr_21283_21310[(1)] = (9));

} else {
var statearr_21284_21311 = state_21275__$1;
(statearr_21284_21311[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (3))){
var inst_21273 = (state_21275[(2)]);
var state_21275__$1 = state_21275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21275__$1,inst_21273);
} else {
if((state_val_21276 === (12))){
var state_21275__$1 = state_21275;
var statearr_21285_21312 = state_21275__$1;
(statearr_21285_21312[(2)] = null);

(statearr_21285_21312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (2))){
var state_21275__$1 = state_21275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21275__$1,(4),ch);
} else {
if((state_val_21276 === (11))){
var inst_21252 = (state_21275[(7)]);
var inst_21262 = (state_21275[(2)]);
var state_21275__$1 = state_21275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21275__$1,(8),inst_21262,inst_21252);
} else {
if((state_val_21276 === (9))){
var state_21275__$1 = state_21275;
var statearr_21286_21313 = state_21275__$1;
(statearr_21286_21313[(2)] = tc);

(statearr_21286_21313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (5))){
var inst_21255 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21256 = cljs.core.async.close_BANG_.call(null,fc);
var state_21275__$1 = (function (){var statearr_21287 = state_21275;
(statearr_21287[(8)] = inst_21255);

return statearr_21287;
})();
var statearr_21288_21314 = state_21275__$1;
(statearr_21288_21314[(2)] = inst_21256);

(statearr_21288_21314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (14))){
var inst_21269 = (state_21275[(2)]);
var state_21275__$1 = state_21275;
var statearr_21289_21315 = state_21275__$1;
(statearr_21289_21315[(2)] = inst_21269);

(statearr_21289_21315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (10))){
var state_21275__$1 = state_21275;
var statearr_21290_21316 = state_21275__$1;
(statearr_21290_21316[(2)] = fc);

(statearr_21290_21316[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (8))){
var inst_21264 = (state_21275[(2)]);
var state_21275__$1 = state_21275;
if(cljs.core.truth_(inst_21264)){
var statearr_21291_21317 = state_21275__$1;
(statearr_21291_21317[(1)] = (12));

} else {
var statearr_21292_21318 = state_21275__$1;
(statearr_21292_21318[(1)] = (13));

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
});})(c__20626__auto___21304,tc,fc))
;
return ((function (switch__20514__auto__,c__20626__auto___21304,tc,fc){
return (function() {
var cljs$core$async$state_machine__20515__auto__ = null;
var cljs$core$async$state_machine__20515__auto____0 = (function (){
var statearr_21296 = [null,null,null,null,null,null,null,null,null];
(statearr_21296[(0)] = cljs$core$async$state_machine__20515__auto__);

(statearr_21296[(1)] = (1));

return statearr_21296;
});
var cljs$core$async$state_machine__20515__auto____1 = (function (state_21275){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_21275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e21297){if((e21297 instanceof Object)){
var ex__20518__auto__ = e21297;
var statearr_21298_21319 = state_21275;
(statearr_21298_21319[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21320 = state_21275;
state_21275 = G__21320;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$state_machine__20515__auto__ = function(state_21275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20515__auto____1.call(this,state_21275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20515__auto____0;
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20515__auto____1;
return cljs$core$async$state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto___21304,tc,fc))
})();
var state__20628__auto__ = (function (){var statearr_21299 = f__20627__auto__.call(null);
(statearr_21299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto___21304);

return statearr_21299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto___21304,tc,fc))
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
var c__20626__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto__){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto__){
return (function (state_21384){
var state_val_21385 = (state_21384[(1)]);
if((state_val_21385 === (7))){
var inst_21380 = (state_21384[(2)]);
var state_21384__$1 = state_21384;
var statearr_21386_21407 = state_21384__$1;
(statearr_21386_21407[(2)] = inst_21380);

(statearr_21386_21407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (1))){
var inst_21364 = init;
var state_21384__$1 = (function (){var statearr_21387 = state_21384;
(statearr_21387[(7)] = inst_21364);

return statearr_21387;
})();
var statearr_21388_21408 = state_21384__$1;
(statearr_21388_21408[(2)] = null);

(statearr_21388_21408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (4))){
var inst_21367 = (state_21384[(8)]);
var inst_21367__$1 = (state_21384[(2)]);
var inst_21368 = (inst_21367__$1 == null);
var state_21384__$1 = (function (){var statearr_21389 = state_21384;
(statearr_21389[(8)] = inst_21367__$1);

return statearr_21389;
})();
if(cljs.core.truth_(inst_21368)){
var statearr_21390_21409 = state_21384__$1;
(statearr_21390_21409[(1)] = (5));

} else {
var statearr_21391_21410 = state_21384__$1;
(statearr_21391_21410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (6))){
var inst_21364 = (state_21384[(7)]);
var inst_21371 = (state_21384[(9)]);
var inst_21367 = (state_21384[(8)]);
var inst_21371__$1 = f.call(null,inst_21364,inst_21367);
var inst_21372 = cljs.core.reduced_QMARK_.call(null,inst_21371__$1);
var state_21384__$1 = (function (){var statearr_21392 = state_21384;
(statearr_21392[(9)] = inst_21371__$1);

return statearr_21392;
})();
if(inst_21372){
var statearr_21393_21411 = state_21384__$1;
(statearr_21393_21411[(1)] = (8));

} else {
var statearr_21394_21412 = state_21384__$1;
(statearr_21394_21412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (3))){
var inst_21382 = (state_21384[(2)]);
var state_21384__$1 = state_21384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21384__$1,inst_21382);
} else {
if((state_val_21385 === (2))){
var state_21384__$1 = state_21384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21384__$1,(4),ch);
} else {
if((state_val_21385 === (9))){
var inst_21371 = (state_21384[(9)]);
var inst_21364 = inst_21371;
var state_21384__$1 = (function (){var statearr_21395 = state_21384;
(statearr_21395[(7)] = inst_21364);

return statearr_21395;
})();
var statearr_21396_21413 = state_21384__$1;
(statearr_21396_21413[(2)] = null);

(statearr_21396_21413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (5))){
var inst_21364 = (state_21384[(7)]);
var state_21384__$1 = state_21384;
var statearr_21397_21414 = state_21384__$1;
(statearr_21397_21414[(2)] = inst_21364);

(statearr_21397_21414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (10))){
var inst_21378 = (state_21384[(2)]);
var state_21384__$1 = state_21384;
var statearr_21398_21415 = state_21384__$1;
(statearr_21398_21415[(2)] = inst_21378);

(statearr_21398_21415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (8))){
var inst_21371 = (state_21384[(9)]);
var inst_21374 = cljs.core.deref.call(null,inst_21371);
var state_21384__$1 = state_21384;
var statearr_21399_21416 = state_21384__$1;
(statearr_21399_21416[(2)] = inst_21374);

(statearr_21399_21416[(1)] = (10));


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
});})(c__20626__auto__))
;
return ((function (switch__20514__auto__,c__20626__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20515__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20515__auto____0 = (function (){
var statearr_21403 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21403[(0)] = cljs$core$async$reduce_$_state_machine__20515__auto__);

(statearr_21403[(1)] = (1));

return statearr_21403;
});
var cljs$core$async$reduce_$_state_machine__20515__auto____1 = (function (state_21384){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_21384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e21404){if((e21404 instanceof Object)){
var ex__20518__auto__ = e21404;
var statearr_21405_21417 = state_21384;
(statearr_21405_21417[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21418 = state_21384;
state_21384 = G__21418;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20515__auto__ = function(state_21384){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20515__auto____1.call(this,state_21384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20515__auto____0;
cljs$core$async$reduce_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20515__auto____1;
return cljs$core$async$reduce_$_state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto__))
})();
var state__20628__auto__ = (function (){var statearr_21406 = f__20627__auto__.call(null);
(statearr_21406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto__);

return statearr_21406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto__))
);

return c__20626__auto__;
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
var args21419 = [];
var len__19529__auto___21471 = arguments.length;
var i__19530__auto___21472 = (0);
while(true){
if((i__19530__auto___21472 < len__19529__auto___21471)){
args21419.push((arguments[i__19530__auto___21472]));

var G__21473 = (i__19530__auto___21472 + (1));
i__19530__auto___21472 = G__21473;
continue;
} else {
}
break;
}

var G__21421 = args21419.length;
switch (G__21421) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21419.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20626__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto__){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto__){
return (function (state_21446){
var state_val_21447 = (state_21446[(1)]);
if((state_val_21447 === (7))){
var inst_21428 = (state_21446[(2)]);
var state_21446__$1 = state_21446;
var statearr_21448_21475 = state_21446__$1;
(statearr_21448_21475[(2)] = inst_21428);

(statearr_21448_21475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21447 === (1))){
var inst_21422 = cljs.core.seq.call(null,coll);
var inst_21423 = inst_21422;
var state_21446__$1 = (function (){var statearr_21449 = state_21446;
(statearr_21449[(7)] = inst_21423);

return statearr_21449;
})();
var statearr_21450_21476 = state_21446__$1;
(statearr_21450_21476[(2)] = null);

(statearr_21450_21476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21447 === (4))){
var inst_21423 = (state_21446[(7)]);
var inst_21426 = cljs.core.first.call(null,inst_21423);
var state_21446__$1 = state_21446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21446__$1,(7),ch,inst_21426);
} else {
if((state_val_21447 === (13))){
var inst_21440 = (state_21446[(2)]);
var state_21446__$1 = state_21446;
var statearr_21451_21477 = state_21446__$1;
(statearr_21451_21477[(2)] = inst_21440);

(statearr_21451_21477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21447 === (6))){
var inst_21431 = (state_21446[(2)]);
var state_21446__$1 = state_21446;
if(cljs.core.truth_(inst_21431)){
var statearr_21452_21478 = state_21446__$1;
(statearr_21452_21478[(1)] = (8));

} else {
var statearr_21453_21479 = state_21446__$1;
(statearr_21453_21479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21447 === (3))){
var inst_21444 = (state_21446[(2)]);
var state_21446__$1 = state_21446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21446__$1,inst_21444);
} else {
if((state_val_21447 === (12))){
var state_21446__$1 = state_21446;
var statearr_21454_21480 = state_21446__$1;
(statearr_21454_21480[(2)] = null);

(statearr_21454_21480[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21447 === (2))){
var inst_21423 = (state_21446[(7)]);
var state_21446__$1 = state_21446;
if(cljs.core.truth_(inst_21423)){
var statearr_21455_21481 = state_21446__$1;
(statearr_21455_21481[(1)] = (4));

} else {
var statearr_21456_21482 = state_21446__$1;
(statearr_21456_21482[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21447 === (11))){
var inst_21437 = cljs.core.async.close_BANG_.call(null,ch);
var state_21446__$1 = state_21446;
var statearr_21457_21483 = state_21446__$1;
(statearr_21457_21483[(2)] = inst_21437);

(statearr_21457_21483[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21447 === (9))){
var state_21446__$1 = state_21446;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21458_21484 = state_21446__$1;
(statearr_21458_21484[(1)] = (11));

} else {
var statearr_21459_21485 = state_21446__$1;
(statearr_21459_21485[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21447 === (5))){
var inst_21423 = (state_21446[(7)]);
var state_21446__$1 = state_21446;
var statearr_21460_21486 = state_21446__$1;
(statearr_21460_21486[(2)] = inst_21423);

(statearr_21460_21486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21447 === (10))){
var inst_21442 = (state_21446[(2)]);
var state_21446__$1 = state_21446;
var statearr_21461_21487 = state_21446__$1;
(statearr_21461_21487[(2)] = inst_21442);

(statearr_21461_21487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21447 === (8))){
var inst_21423 = (state_21446[(7)]);
var inst_21433 = cljs.core.next.call(null,inst_21423);
var inst_21423__$1 = inst_21433;
var state_21446__$1 = (function (){var statearr_21462 = state_21446;
(statearr_21462[(7)] = inst_21423__$1);

return statearr_21462;
})();
var statearr_21463_21488 = state_21446__$1;
(statearr_21463_21488[(2)] = null);

(statearr_21463_21488[(1)] = (2));


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
});})(c__20626__auto__))
;
return ((function (switch__20514__auto__,c__20626__auto__){
return (function() {
var cljs$core$async$state_machine__20515__auto__ = null;
var cljs$core$async$state_machine__20515__auto____0 = (function (){
var statearr_21467 = [null,null,null,null,null,null,null,null];
(statearr_21467[(0)] = cljs$core$async$state_machine__20515__auto__);

(statearr_21467[(1)] = (1));

return statearr_21467;
});
var cljs$core$async$state_machine__20515__auto____1 = (function (state_21446){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_21446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e21468){if((e21468 instanceof Object)){
var ex__20518__auto__ = e21468;
var statearr_21469_21489 = state_21446;
(statearr_21469_21489[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21490 = state_21446;
state_21446 = G__21490;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$state_machine__20515__auto__ = function(state_21446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20515__auto____1.call(this,state_21446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20515__auto____0;
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20515__auto____1;
return cljs$core$async$state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto__))
})();
var state__20628__auto__ = (function (){var statearr_21470 = f__20627__auto__.call(null);
(statearr_21470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto__);

return statearr_21470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto__))
);

return c__20626__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async21712 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21712 = (function (mult,ch,cs,meta21713){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21713 = meta21713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21714,meta21713__$1){
var self__ = this;
var _21714__$1 = this;
return (new cljs.core.async.t_cljs$core$async21712(self__.mult,self__.ch,self__.cs,meta21713__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21712.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21714){
var self__ = this;
var _21714__$1 = this;
return self__.meta21713;
});})(cs))
;

cljs.core.async.t_cljs$core$async21712.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21712.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21712.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21712.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21712.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21712.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21712.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21713","meta21713",713667970,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21712.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21712";

cljs.core.async.t_cljs$core$async21712.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async21712");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21712 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21712(mult__$1,ch__$1,cs__$1,meta21713){
return (new cljs.core.async.t_cljs$core$async21712(mult__$1,ch__$1,cs__$1,meta21713));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21712(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20626__auto___21933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto___21933,cs,m,dchan,dctr,done){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto___21933,cs,m,dchan,dctr,done){
return (function (state_21845){
var state_val_21846 = (state_21845[(1)]);
if((state_val_21846 === (7))){
var inst_21841 = (state_21845[(2)]);
var state_21845__$1 = state_21845;
var statearr_21847_21934 = state_21845__$1;
(statearr_21847_21934[(2)] = inst_21841);

(statearr_21847_21934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (20))){
var inst_21746 = (state_21845[(7)]);
var inst_21756 = cljs.core.first.call(null,inst_21746);
var inst_21757 = cljs.core.nth.call(null,inst_21756,(0),null);
var inst_21758 = cljs.core.nth.call(null,inst_21756,(1),null);
var state_21845__$1 = (function (){var statearr_21848 = state_21845;
(statearr_21848[(8)] = inst_21757);

return statearr_21848;
})();
if(cljs.core.truth_(inst_21758)){
var statearr_21849_21935 = state_21845__$1;
(statearr_21849_21935[(1)] = (22));

} else {
var statearr_21850_21936 = state_21845__$1;
(statearr_21850_21936[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (27))){
var inst_21717 = (state_21845[(9)]);
var inst_21793 = (state_21845[(10)]);
var inst_21788 = (state_21845[(11)]);
var inst_21786 = (state_21845[(12)]);
var inst_21793__$1 = cljs.core._nth.call(null,inst_21786,inst_21788);
var inst_21794 = cljs.core.async.put_BANG_.call(null,inst_21793__$1,inst_21717,done);
var state_21845__$1 = (function (){var statearr_21851 = state_21845;
(statearr_21851[(10)] = inst_21793__$1);

return statearr_21851;
})();
if(cljs.core.truth_(inst_21794)){
var statearr_21852_21937 = state_21845__$1;
(statearr_21852_21937[(1)] = (30));

} else {
var statearr_21853_21938 = state_21845__$1;
(statearr_21853_21938[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (1))){
var state_21845__$1 = state_21845;
var statearr_21854_21939 = state_21845__$1;
(statearr_21854_21939[(2)] = null);

(statearr_21854_21939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (24))){
var inst_21746 = (state_21845[(7)]);
var inst_21763 = (state_21845[(2)]);
var inst_21764 = cljs.core.next.call(null,inst_21746);
var inst_21726 = inst_21764;
var inst_21727 = null;
var inst_21728 = (0);
var inst_21729 = (0);
var state_21845__$1 = (function (){var statearr_21855 = state_21845;
(statearr_21855[(13)] = inst_21726);

(statearr_21855[(14)] = inst_21763);

(statearr_21855[(15)] = inst_21729);

(statearr_21855[(16)] = inst_21728);

(statearr_21855[(17)] = inst_21727);

return statearr_21855;
})();
var statearr_21856_21940 = state_21845__$1;
(statearr_21856_21940[(2)] = null);

(statearr_21856_21940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (39))){
var state_21845__$1 = state_21845;
var statearr_21860_21941 = state_21845__$1;
(statearr_21860_21941[(2)] = null);

(statearr_21860_21941[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (4))){
var inst_21717 = (state_21845[(9)]);
var inst_21717__$1 = (state_21845[(2)]);
var inst_21718 = (inst_21717__$1 == null);
var state_21845__$1 = (function (){var statearr_21861 = state_21845;
(statearr_21861[(9)] = inst_21717__$1);

return statearr_21861;
})();
if(cljs.core.truth_(inst_21718)){
var statearr_21862_21942 = state_21845__$1;
(statearr_21862_21942[(1)] = (5));

} else {
var statearr_21863_21943 = state_21845__$1;
(statearr_21863_21943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (15))){
var inst_21726 = (state_21845[(13)]);
var inst_21729 = (state_21845[(15)]);
var inst_21728 = (state_21845[(16)]);
var inst_21727 = (state_21845[(17)]);
var inst_21742 = (state_21845[(2)]);
var inst_21743 = (inst_21729 + (1));
var tmp21857 = inst_21726;
var tmp21858 = inst_21728;
var tmp21859 = inst_21727;
var inst_21726__$1 = tmp21857;
var inst_21727__$1 = tmp21859;
var inst_21728__$1 = tmp21858;
var inst_21729__$1 = inst_21743;
var state_21845__$1 = (function (){var statearr_21864 = state_21845;
(statearr_21864[(13)] = inst_21726__$1);

(statearr_21864[(18)] = inst_21742);

(statearr_21864[(15)] = inst_21729__$1);

(statearr_21864[(16)] = inst_21728__$1);

(statearr_21864[(17)] = inst_21727__$1);

return statearr_21864;
})();
var statearr_21865_21944 = state_21845__$1;
(statearr_21865_21944[(2)] = null);

(statearr_21865_21944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (21))){
var inst_21767 = (state_21845[(2)]);
var state_21845__$1 = state_21845;
var statearr_21869_21945 = state_21845__$1;
(statearr_21869_21945[(2)] = inst_21767);

(statearr_21869_21945[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (31))){
var inst_21793 = (state_21845[(10)]);
var inst_21797 = done.call(null,null);
var inst_21798 = cljs.core.async.untap_STAR_.call(null,m,inst_21793);
var state_21845__$1 = (function (){var statearr_21870 = state_21845;
(statearr_21870[(19)] = inst_21797);

return statearr_21870;
})();
var statearr_21871_21946 = state_21845__$1;
(statearr_21871_21946[(2)] = inst_21798);

(statearr_21871_21946[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (32))){
var inst_21788 = (state_21845[(11)]);
var inst_21787 = (state_21845[(20)]);
var inst_21786 = (state_21845[(12)]);
var inst_21785 = (state_21845[(21)]);
var inst_21800 = (state_21845[(2)]);
var inst_21801 = (inst_21788 + (1));
var tmp21866 = inst_21787;
var tmp21867 = inst_21786;
var tmp21868 = inst_21785;
var inst_21785__$1 = tmp21868;
var inst_21786__$1 = tmp21867;
var inst_21787__$1 = tmp21866;
var inst_21788__$1 = inst_21801;
var state_21845__$1 = (function (){var statearr_21872 = state_21845;
(statearr_21872[(11)] = inst_21788__$1);

(statearr_21872[(20)] = inst_21787__$1);

(statearr_21872[(22)] = inst_21800);

(statearr_21872[(12)] = inst_21786__$1);

(statearr_21872[(21)] = inst_21785__$1);

return statearr_21872;
})();
var statearr_21873_21947 = state_21845__$1;
(statearr_21873_21947[(2)] = null);

(statearr_21873_21947[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (40))){
var inst_21813 = (state_21845[(23)]);
var inst_21817 = done.call(null,null);
var inst_21818 = cljs.core.async.untap_STAR_.call(null,m,inst_21813);
var state_21845__$1 = (function (){var statearr_21874 = state_21845;
(statearr_21874[(24)] = inst_21817);

return statearr_21874;
})();
var statearr_21875_21948 = state_21845__$1;
(statearr_21875_21948[(2)] = inst_21818);

(statearr_21875_21948[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (33))){
var inst_21804 = (state_21845[(25)]);
var inst_21806 = cljs.core.chunked_seq_QMARK_.call(null,inst_21804);
var state_21845__$1 = state_21845;
if(inst_21806){
var statearr_21876_21949 = state_21845__$1;
(statearr_21876_21949[(1)] = (36));

} else {
var statearr_21877_21950 = state_21845__$1;
(statearr_21877_21950[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (13))){
var inst_21736 = (state_21845[(26)]);
var inst_21739 = cljs.core.async.close_BANG_.call(null,inst_21736);
var state_21845__$1 = state_21845;
var statearr_21878_21951 = state_21845__$1;
(statearr_21878_21951[(2)] = inst_21739);

(statearr_21878_21951[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (22))){
var inst_21757 = (state_21845[(8)]);
var inst_21760 = cljs.core.async.close_BANG_.call(null,inst_21757);
var state_21845__$1 = state_21845;
var statearr_21879_21952 = state_21845__$1;
(statearr_21879_21952[(2)] = inst_21760);

(statearr_21879_21952[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (36))){
var inst_21804 = (state_21845[(25)]);
var inst_21808 = cljs.core.chunk_first.call(null,inst_21804);
var inst_21809 = cljs.core.chunk_rest.call(null,inst_21804);
var inst_21810 = cljs.core.count.call(null,inst_21808);
var inst_21785 = inst_21809;
var inst_21786 = inst_21808;
var inst_21787 = inst_21810;
var inst_21788 = (0);
var state_21845__$1 = (function (){var statearr_21880 = state_21845;
(statearr_21880[(11)] = inst_21788);

(statearr_21880[(20)] = inst_21787);

(statearr_21880[(12)] = inst_21786);

(statearr_21880[(21)] = inst_21785);

return statearr_21880;
})();
var statearr_21881_21953 = state_21845__$1;
(statearr_21881_21953[(2)] = null);

(statearr_21881_21953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (41))){
var inst_21804 = (state_21845[(25)]);
var inst_21820 = (state_21845[(2)]);
var inst_21821 = cljs.core.next.call(null,inst_21804);
var inst_21785 = inst_21821;
var inst_21786 = null;
var inst_21787 = (0);
var inst_21788 = (0);
var state_21845__$1 = (function (){var statearr_21882 = state_21845;
(statearr_21882[(27)] = inst_21820);

(statearr_21882[(11)] = inst_21788);

(statearr_21882[(20)] = inst_21787);

(statearr_21882[(12)] = inst_21786);

(statearr_21882[(21)] = inst_21785);

return statearr_21882;
})();
var statearr_21883_21954 = state_21845__$1;
(statearr_21883_21954[(2)] = null);

(statearr_21883_21954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (43))){
var state_21845__$1 = state_21845;
var statearr_21884_21955 = state_21845__$1;
(statearr_21884_21955[(2)] = null);

(statearr_21884_21955[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (29))){
var inst_21829 = (state_21845[(2)]);
var state_21845__$1 = state_21845;
var statearr_21885_21956 = state_21845__$1;
(statearr_21885_21956[(2)] = inst_21829);

(statearr_21885_21956[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (44))){
var inst_21838 = (state_21845[(2)]);
var state_21845__$1 = (function (){var statearr_21886 = state_21845;
(statearr_21886[(28)] = inst_21838);

return statearr_21886;
})();
var statearr_21887_21957 = state_21845__$1;
(statearr_21887_21957[(2)] = null);

(statearr_21887_21957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (6))){
var inst_21777 = (state_21845[(29)]);
var inst_21776 = cljs.core.deref.call(null,cs);
var inst_21777__$1 = cljs.core.keys.call(null,inst_21776);
var inst_21778 = cljs.core.count.call(null,inst_21777__$1);
var inst_21779 = cljs.core.reset_BANG_.call(null,dctr,inst_21778);
var inst_21784 = cljs.core.seq.call(null,inst_21777__$1);
var inst_21785 = inst_21784;
var inst_21786 = null;
var inst_21787 = (0);
var inst_21788 = (0);
var state_21845__$1 = (function (){var statearr_21888 = state_21845;
(statearr_21888[(29)] = inst_21777__$1);

(statearr_21888[(11)] = inst_21788);

(statearr_21888[(20)] = inst_21787);

(statearr_21888[(12)] = inst_21786);

(statearr_21888[(30)] = inst_21779);

(statearr_21888[(21)] = inst_21785);

return statearr_21888;
})();
var statearr_21889_21958 = state_21845__$1;
(statearr_21889_21958[(2)] = null);

(statearr_21889_21958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (28))){
var inst_21785 = (state_21845[(21)]);
var inst_21804 = (state_21845[(25)]);
var inst_21804__$1 = cljs.core.seq.call(null,inst_21785);
var state_21845__$1 = (function (){var statearr_21890 = state_21845;
(statearr_21890[(25)] = inst_21804__$1);

return statearr_21890;
})();
if(inst_21804__$1){
var statearr_21891_21959 = state_21845__$1;
(statearr_21891_21959[(1)] = (33));

} else {
var statearr_21892_21960 = state_21845__$1;
(statearr_21892_21960[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (25))){
var inst_21788 = (state_21845[(11)]);
var inst_21787 = (state_21845[(20)]);
var inst_21790 = (inst_21788 < inst_21787);
var inst_21791 = inst_21790;
var state_21845__$1 = state_21845;
if(cljs.core.truth_(inst_21791)){
var statearr_21893_21961 = state_21845__$1;
(statearr_21893_21961[(1)] = (27));

} else {
var statearr_21894_21962 = state_21845__$1;
(statearr_21894_21962[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (34))){
var state_21845__$1 = state_21845;
var statearr_21895_21963 = state_21845__$1;
(statearr_21895_21963[(2)] = null);

(statearr_21895_21963[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (17))){
var state_21845__$1 = state_21845;
var statearr_21896_21964 = state_21845__$1;
(statearr_21896_21964[(2)] = null);

(statearr_21896_21964[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (3))){
var inst_21843 = (state_21845[(2)]);
var state_21845__$1 = state_21845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21845__$1,inst_21843);
} else {
if((state_val_21846 === (12))){
var inst_21772 = (state_21845[(2)]);
var state_21845__$1 = state_21845;
var statearr_21897_21965 = state_21845__$1;
(statearr_21897_21965[(2)] = inst_21772);

(statearr_21897_21965[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (2))){
var state_21845__$1 = state_21845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21845__$1,(4),ch);
} else {
if((state_val_21846 === (23))){
var state_21845__$1 = state_21845;
var statearr_21898_21966 = state_21845__$1;
(statearr_21898_21966[(2)] = null);

(statearr_21898_21966[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (35))){
var inst_21827 = (state_21845[(2)]);
var state_21845__$1 = state_21845;
var statearr_21899_21967 = state_21845__$1;
(statearr_21899_21967[(2)] = inst_21827);

(statearr_21899_21967[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (19))){
var inst_21746 = (state_21845[(7)]);
var inst_21750 = cljs.core.chunk_first.call(null,inst_21746);
var inst_21751 = cljs.core.chunk_rest.call(null,inst_21746);
var inst_21752 = cljs.core.count.call(null,inst_21750);
var inst_21726 = inst_21751;
var inst_21727 = inst_21750;
var inst_21728 = inst_21752;
var inst_21729 = (0);
var state_21845__$1 = (function (){var statearr_21900 = state_21845;
(statearr_21900[(13)] = inst_21726);

(statearr_21900[(15)] = inst_21729);

(statearr_21900[(16)] = inst_21728);

(statearr_21900[(17)] = inst_21727);

return statearr_21900;
})();
var statearr_21901_21968 = state_21845__$1;
(statearr_21901_21968[(2)] = null);

(statearr_21901_21968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (11))){
var inst_21746 = (state_21845[(7)]);
var inst_21726 = (state_21845[(13)]);
var inst_21746__$1 = cljs.core.seq.call(null,inst_21726);
var state_21845__$1 = (function (){var statearr_21902 = state_21845;
(statearr_21902[(7)] = inst_21746__$1);

return statearr_21902;
})();
if(inst_21746__$1){
var statearr_21903_21969 = state_21845__$1;
(statearr_21903_21969[(1)] = (16));

} else {
var statearr_21904_21970 = state_21845__$1;
(statearr_21904_21970[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (9))){
var inst_21774 = (state_21845[(2)]);
var state_21845__$1 = state_21845;
var statearr_21905_21971 = state_21845__$1;
(statearr_21905_21971[(2)] = inst_21774);

(statearr_21905_21971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (5))){
var inst_21724 = cljs.core.deref.call(null,cs);
var inst_21725 = cljs.core.seq.call(null,inst_21724);
var inst_21726 = inst_21725;
var inst_21727 = null;
var inst_21728 = (0);
var inst_21729 = (0);
var state_21845__$1 = (function (){var statearr_21906 = state_21845;
(statearr_21906[(13)] = inst_21726);

(statearr_21906[(15)] = inst_21729);

(statearr_21906[(16)] = inst_21728);

(statearr_21906[(17)] = inst_21727);

return statearr_21906;
})();
var statearr_21907_21972 = state_21845__$1;
(statearr_21907_21972[(2)] = null);

(statearr_21907_21972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (14))){
var state_21845__$1 = state_21845;
var statearr_21908_21973 = state_21845__$1;
(statearr_21908_21973[(2)] = null);

(statearr_21908_21973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (45))){
var inst_21835 = (state_21845[(2)]);
var state_21845__$1 = state_21845;
var statearr_21909_21974 = state_21845__$1;
(statearr_21909_21974[(2)] = inst_21835);

(statearr_21909_21974[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (26))){
var inst_21777 = (state_21845[(29)]);
var inst_21831 = (state_21845[(2)]);
var inst_21832 = cljs.core.seq.call(null,inst_21777);
var state_21845__$1 = (function (){var statearr_21910 = state_21845;
(statearr_21910[(31)] = inst_21831);

return statearr_21910;
})();
if(inst_21832){
var statearr_21911_21975 = state_21845__$1;
(statearr_21911_21975[(1)] = (42));

} else {
var statearr_21912_21976 = state_21845__$1;
(statearr_21912_21976[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (16))){
var inst_21746 = (state_21845[(7)]);
var inst_21748 = cljs.core.chunked_seq_QMARK_.call(null,inst_21746);
var state_21845__$1 = state_21845;
if(inst_21748){
var statearr_21913_21977 = state_21845__$1;
(statearr_21913_21977[(1)] = (19));

} else {
var statearr_21914_21978 = state_21845__$1;
(statearr_21914_21978[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (38))){
var inst_21824 = (state_21845[(2)]);
var state_21845__$1 = state_21845;
var statearr_21915_21979 = state_21845__$1;
(statearr_21915_21979[(2)] = inst_21824);

(statearr_21915_21979[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (30))){
var state_21845__$1 = state_21845;
var statearr_21916_21980 = state_21845__$1;
(statearr_21916_21980[(2)] = null);

(statearr_21916_21980[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (10))){
var inst_21729 = (state_21845[(15)]);
var inst_21727 = (state_21845[(17)]);
var inst_21735 = cljs.core._nth.call(null,inst_21727,inst_21729);
var inst_21736 = cljs.core.nth.call(null,inst_21735,(0),null);
var inst_21737 = cljs.core.nth.call(null,inst_21735,(1),null);
var state_21845__$1 = (function (){var statearr_21917 = state_21845;
(statearr_21917[(26)] = inst_21736);

return statearr_21917;
})();
if(cljs.core.truth_(inst_21737)){
var statearr_21918_21981 = state_21845__$1;
(statearr_21918_21981[(1)] = (13));

} else {
var statearr_21919_21982 = state_21845__$1;
(statearr_21919_21982[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (18))){
var inst_21770 = (state_21845[(2)]);
var state_21845__$1 = state_21845;
var statearr_21920_21983 = state_21845__$1;
(statearr_21920_21983[(2)] = inst_21770);

(statearr_21920_21983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (42))){
var state_21845__$1 = state_21845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21845__$1,(45),dchan);
} else {
if((state_val_21846 === (37))){
var inst_21717 = (state_21845[(9)]);
var inst_21813 = (state_21845[(23)]);
var inst_21804 = (state_21845[(25)]);
var inst_21813__$1 = cljs.core.first.call(null,inst_21804);
var inst_21814 = cljs.core.async.put_BANG_.call(null,inst_21813__$1,inst_21717,done);
var state_21845__$1 = (function (){var statearr_21921 = state_21845;
(statearr_21921[(23)] = inst_21813__$1);

return statearr_21921;
})();
if(cljs.core.truth_(inst_21814)){
var statearr_21922_21984 = state_21845__$1;
(statearr_21922_21984[(1)] = (39));

} else {
var statearr_21923_21985 = state_21845__$1;
(statearr_21923_21985[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21846 === (8))){
var inst_21729 = (state_21845[(15)]);
var inst_21728 = (state_21845[(16)]);
var inst_21731 = (inst_21729 < inst_21728);
var inst_21732 = inst_21731;
var state_21845__$1 = state_21845;
if(cljs.core.truth_(inst_21732)){
var statearr_21924_21986 = state_21845__$1;
(statearr_21924_21986[(1)] = (10));

} else {
var statearr_21925_21987 = state_21845__$1;
(statearr_21925_21987[(1)] = (11));

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
});})(c__20626__auto___21933,cs,m,dchan,dctr,done))
;
return ((function (switch__20514__auto__,c__20626__auto___21933,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20515__auto__ = null;
var cljs$core$async$mult_$_state_machine__20515__auto____0 = (function (){
var statearr_21929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21929[(0)] = cljs$core$async$mult_$_state_machine__20515__auto__);

(statearr_21929[(1)] = (1));

return statearr_21929;
});
var cljs$core$async$mult_$_state_machine__20515__auto____1 = (function (state_21845){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_21845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e21930){if((e21930 instanceof Object)){
var ex__20518__auto__ = e21930;
var statearr_21931_21988 = state_21845;
(statearr_21931_21988[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21989 = state_21845;
state_21845 = G__21989;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20515__auto__ = function(state_21845){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20515__auto____1.call(this,state_21845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20515__auto____0;
cljs$core$async$mult_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20515__auto____1;
return cljs$core$async$mult_$_state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto___21933,cs,m,dchan,dctr,done))
})();
var state__20628__auto__ = (function (){var statearr_21932 = f__20627__auto__.call(null);
(statearr_21932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto___21933);

return statearr_21932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto___21933,cs,m,dchan,dctr,done))
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
var args21990 = [];
var len__19529__auto___21993 = arguments.length;
var i__19530__auto___21994 = (0);
while(true){
if((i__19530__auto___21994 < len__19529__auto___21993)){
args21990.push((arguments[i__19530__auto___21994]));

var G__21995 = (i__19530__auto___21994 + (1));
i__19530__auto___21994 = G__21995;
continue;
} else {
}
break;
}

var G__21992 = args21990.length;
switch (G__21992) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21990.length)].join('')));

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
var len__19529__auto___22007 = arguments.length;
var i__19530__auto___22008 = (0);
while(true){
if((i__19530__auto___22008 < len__19529__auto___22007)){
args__19536__auto__.push((arguments[i__19530__auto___22008]));

var G__22009 = (i__19530__auto___22008 + (1));
i__19530__auto___22008 = G__22009;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((3) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19537__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22001){
var map__22002 = p__22001;
var map__22002__$1 = ((((!((map__22002 == null)))?((((map__22002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22002):map__22002);
var opts = map__22002__$1;
var statearr_22004_22010 = state;
(statearr_22004_22010[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__22002,map__22002__$1,opts){
return (function (val){
var statearr_22005_22011 = state;
(statearr_22005_22011[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22002,map__22002__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22006_22012 = state;
(statearr_22006_22012[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21997){
var G__21998 = cljs.core.first.call(null,seq21997);
var seq21997__$1 = cljs.core.next.call(null,seq21997);
var G__21999 = cljs.core.first.call(null,seq21997__$1);
var seq21997__$2 = cljs.core.next.call(null,seq21997__$1);
var G__22000 = cljs.core.first.call(null,seq21997__$2);
var seq21997__$3 = cljs.core.next.call(null,seq21997__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21998,G__21999,G__22000,seq21997__$3);
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
if(typeof cljs.core.async.t_cljs$core$async22176 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22176 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22177){
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
this.meta22177 = meta22177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22178,meta22177__$1){
var self__ = this;
var _22178__$1 = this;
return (new cljs.core.async.t_cljs$core$async22176(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22177__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22176.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22178){
var self__ = this;
var _22178__$1 = this;
return self__.meta22177;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22176.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22176.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22176.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22176.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22176.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22176.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22176.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22176.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async22176.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22177","meta22177",589885454,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22176.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22176";

cljs.core.async.t_cljs$core$async22176.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async22176");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22176 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22176(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22177){
return (new cljs.core.async.t_cljs$core$async22176(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22177));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22176(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20626__auto___22339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto___22339,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto___22339,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22276){
var state_val_22277 = (state_22276[(1)]);
if((state_val_22277 === (7))){
var inst_22194 = (state_22276[(2)]);
var state_22276__$1 = state_22276;
var statearr_22278_22340 = state_22276__$1;
(statearr_22278_22340[(2)] = inst_22194);

(statearr_22278_22340[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (20))){
var inst_22206 = (state_22276[(7)]);
var state_22276__$1 = state_22276;
var statearr_22279_22341 = state_22276__$1;
(statearr_22279_22341[(2)] = inst_22206);

(statearr_22279_22341[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (27))){
var state_22276__$1 = state_22276;
var statearr_22280_22342 = state_22276__$1;
(statearr_22280_22342[(2)] = null);

(statearr_22280_22342[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (1))){
var inst_22182 = (state_22276[(8)]);
var inst_22182__$1 = calc_state.call(null);
var inst_22184 = (inst_22182__$1 == null);
var inst_22185 = cljs.core.not.call(null,inst_22184);
var state_22276__$1 = (function (){var statearr_22281 = state_22276;
(statearr_22281[(8)] = inst_22182__$1);

return statearr_22281;
})();
if(inst_22185){
var statearr_22282_22343 = state_22276__$1;
(statearr_22282_22343[(1)] = (2));

} else {
var statearr_22283_22344 = state_22276__$1;
(statearr_22283_22344[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (24))){
var inst_22250 = (state_22276[(9)]);
var inst_22236 = (state_22276[(10)]);
var inst_22229 = (state_22276[(11)]);
var inst_22250__$1 = inst_22229.call(null,inst_22236);
var state_22276__$1 = (function (){var statearr_22284 = state_22276;
(statearr_22284[(9)] = inst_22250__$1);

return statearr_22284;
})();
if(cljs.core.truth_(inst_22250__$1)){
var statearr_22285_22345 = state_22276__$1;
(statearr_22285_22345[(1)] = (29));

} else {
var statearr_22286_22346 = state_22276__$1;
(statearr_22286_22346[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (4))){
var inst_22197 = (state_22276[(2)]);
var state_22276__$1 = state_22276;
if(cljs.core.truth_(inst_22197)){
var statearr_22287_22347 = state_22276__$1;
(statearr_22287_22347[(1)] = (8));

} else {
var statearr_22288_22348 = state_22276__$1;
(statearr_22288_22348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (15))){
var inst_22223 = (state_22276[(2)]);
var state_22276__$1 = state_22276;
if(cljs.core.truth_(inst_22223)){
var statearr_22289_22349 = state_22276__$1;
(statearr_22289_22349[(1)] = (19));

} else {
var statearr_22290_22350 = state_22276__$1;
(statearr_22290_22350[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (21))){
var inst_22228 = (state_22276[(12)]);
var inst_22228__$1 = (state_22276[(2)]);
var inst_22229 = cljs.core.get.call(null,inst_22228__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22230 = cljs.core.get.call(null,inst_22228__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22231 = cljs.core.get.call(null,inst_22228__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22276__$1 = (function (){var statearr_22291 = state_22276;
(statearr_22291[(13)] = inst_22230);

(statearr_22291[(12)] = inst_22228__$1);

(statearr_22291[(11)] = inst_22229);

return statearr_22291;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22276__$1,(22),inst_22231);
} else {
if((state_val_22277 === (31))){
var inst_22258 = (state_22276[(2)]);
var state_22276__$1 = state_22276;
if(cljs.core.truth_(inst_22258)){
var statearr_22292_22351 = state_22276__$1;
(statearr_22292_22351[(1)] = (32));

} else {
var statearr_22293_22352 = state_22276__$1;
(statearr_22293_22352[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (32))){
var inst_22235 = (state_22276[(14)]);
var state_22276__$1 = state_22276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22276__$1,(35),out,inst_22235);
} else {
if((state_val_22277 === (33))){
var inst_22228 = (state_22276[(12)]);
var inst_22206 = inst_22228;
var state_22276__$1 = (function (){var statearr_22294 = state_22276;
(statearr_22294[(7)] = inst_22206);

return statearr_22294;
})();
var statearr_22295_22353 = state_22276__$1;
(statearr_22295_22353[(2)] = null);

(statearr_22295_22353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (13))){
var inst_22206 = (state_22276[(7)]);
var inst_22213 = inst_22206.cljs$lang$protocol_mask$partition0$;
var inst_22214 = (inst_22213 & (64));
var inst_22215 = inst_22206.cljs$core$ISeq$;
var inst_22216 = (inst_22214) || (inst_22215);
var state_22276__$1 = state_22276;
if(cljs.core.truth_(inst_22216)){
var statearr_22296_22354 = state_22276__$1;
(statearr_22296_22354[(1)] = (16));

} else {
var statearr_22297_22355 = state_22276__$1;
(statearr_22297_22355[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (22))){
var inst_22236 = (state_22276[(10)]);
var inst_22235 = (state_22276[(14)]);
var inst_22234 = (state_22276[(2)]);
var inst_22235__$1 = cljs.core.nth.call(null,inst_22234,(0),null);
var inst_22236__$1 = cljs.core.nth.call(null,inst_22234,(1),null);
var inst_22237 = (inst_22235__$1 == null);
var inst_22238 = cljs.core._EQ_.call(null,inst_22236__$1,change);
var inst_22239 = (inst_22237) || (inst_22238);
var state_22276__$1 = (function (){var statearr_22298 = state_22276;
(statearr_22298[(10)] = inst_22236__$1);

(statearr_22298[(14)] = inst_22235__$1);

return statearr_22298;
})();
if(cljs.core.truth_(inst_22239)){
var statearr_22299_22356 = state_22276__$1;
(statearr_22299_22356[(1)] = (23));

} else {
var statearr_22300_22357 = state_22276__$1;
(statearr_22300_22357[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (36))){
var inst_22228 = (state_22276[(12)]);
var inst_22206 = inst_22228;
var state_22276__$1 = (function (){var statearr_22301 = state_22276;
(statearr_22301[(7)] = inst_22206);

return statearr_22301;
})();
var statearr_22302_22358 = state_22276__$1;
(statearr_22302_22358[(2)] = null);

(statearr_22302_22358[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (29))){
var inst_22250 = (state_22276[(9)]);
var state_22276__$1 = state_22276;
var statearr_22303_22359 = state_22276__$1;
(statearr_22303_22359[(2)] = inst_22250);

(statearr_22303_22359[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (6))){
var state_22276__$1 = state_22276;
var statearr_22304_22360 = state_22276__$1;
(statearr_22304_22360[(2)] = false);

(statearr_22304_22360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (28))){
var inst_22246 = (state_22276[(2)]);
var inst_22247 = calc_state.call(null);
var inst_22206 = inst_22247;
var state_22276__$1 = (function (){var statearr_22305 = state_22276;
(statearr_22305[(7)] = inst_22206);

(statearr_22305[(15)] = inst_22246);

return statearr_22305;
})();
var statearr_22306_22361 = state_22276__$1;
(statearr_22306_22361[(2)] = null);

(statearr_22306_22361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (25))){
var inst_22272 = (state_22276[(2)]);
var state_22276__$1 = state_22276;
var statearr_22307_22362 = state_22276__$1;
(statearr_22307_22362[(2)] = inst_22272);

(statearr_22307_22362[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (34))){
var inst_22270 = (state_22276[(2)]);
var state_22276__$1 = state_22276;
var statearr_22308_22363 = state_22276__$1;
(statearr_22308_22363[(2)] = inst_22270);

(statearr_22308_22363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (17))){
var state_22276__$1 = state_22276;
var statearr_22309_22364 = state_22276__$1;
(statearr_22309_22364[(2)] = false);

(statearr_22309_22364[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (3))){
var state_22276__$1 = state_22276;
var statearr_22310_22365 = state_22276__$1;
(statearr_22310_22365[(2)] = false);

(statearr_22310_22365[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (12))){
var inst_22274 = (state_22276[(2)]);
var state_22276__$1 = state_22276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22276__$1,inst_22274);
} else {
if((state_val_22277 === (2))){
var inst_22182 = (state_22276[(8)]);
var inst_22187 = inst_22182.cljs$lang$protocol_mask$partition0$;
var inst_22188 = (inst_22187 & (64));
var inst_22189 = inst_22182.cljs$core$ISeq$;
var inst_22190 = (inst_22188) || (inst_22189);
var state_22276__$1 = state_22276;
if(cljs.core.truth_(inst_22190)){
var statearr_22311_22366 = state_22276__$1;
(statearr_22311_22366[(1)] = (5));

} else {
var statearr_22312_22367 = state_22276__$1;
(statearr_22312_22367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (23))){
var inst_22235 = (state_22276[(14)]);
var inst_22241 = (inst_22235 == null);
var state_22276__$1 = state_22276;
if(cljs.core.truth_(inst_22241)){
var statearr_22313_22368 = state_22276__$1;
(statearr_22313_22368[(1)] = (26));

} else {
var statearr_22314_22369 = state_22276__$1;
(statearr_22314_22369[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (35))){
var inst_22261 = (state_22276[(2)]);
var state_22276__$1 = state_22276;
if(cljs.core.truth_(inst_22261)){
var statearr_22315_22370 = state_22276__$1;
(statearr_22315_22370[(1)] = (36));

} else {
var statearr_22316_22371 = state_22276__$1;
(statearr_22316_22371[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (19))){
var inst_22206 = (state_22276[(7)]);
var inst_22225 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22206);
var state_22276__$1 = state_22276;
var statearr_22317_22372 = state_22276__$1;
(statearr_22317_22372[(2)] = inst_22225);

(statearr_22317_22372[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (11))){
var inst_22206 = (state_22276[(7)]);
var inst_22210 = (inst_22206 == null);
var inst_22211 = cljs.core.not.call(null,inst_22210);
var state_22276__$1 = state_22276;
if(inst_22211){
var statearr_22318_22373 = state_22276__$1;
(statearr_22318_22373[(1)] = (13));

} else {
var statearr_22319_22374 = state_22276__$1;
(statearr_22319_22374[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (9))){
var inst_22182 = (state_22276[(8)]);
var state_22276__$1 = state_22276;
var statearr_22320_22375 = state_22276__$1;
(statearr_22320_22375[(2)] = inst_22182);

(statearr_22320_22375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (5))){
var state_22276__$1 = state_22276;
var statearr_22321_22376 = state_22276__$1;
(statearr_22321_22376[(2)] = true);

(statearr_22321_22376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (14))){
var state_22276__$1 = state_22276;
var statearr_22322_22377 = state_22276__$1;
(statearr_22322_22377[(2)] = false);

(statearr_22322_22377[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (26))){
var inst_22236 = (state_22276[(10)]);
var inst_22243 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22236);
var state_22276__$1 = state_22276;
var statearr_22323_22378 = state_22276__$1;
(statearr_22323_22378[(2)] = inst_22243);

(statearr_22323_22378[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (16))){
var state_22276__$1 = state_22276;
var statearr_22324_22379 = state_22276__$1;
(statearr_22324_22379[(2)] = true);

(statearr_22324_22379[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (38))){
var inst_22266 = (state_22276[(2)]);
var state_22276__$1 = state_22276;
var statearr_22325_22380 = state_22276__$1;
(statearr_22325_22380[(2)] = inst_22266);

(statearr_22325_22380[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (30))){
var inst_22230 = (state_22276[(13)]);
var inst_22236 = (state_22276[(10)]);
var inst_22229 = (state_22276[(11)]);
var inst_22253 = cljs.core.empty_QMARK_.call(null,inst_22229);
var inst_22254 = inst_22230.call(null,inst_22236);
var inst_22255 = cljs.core.not.call(null,inst_22254);
var inst_22256 = (inst_22253) && (inst_22255);
var state_22276__$1 = state_22276;
var statearr_22326_22381 = state_22276__$1;
(statearr_22326_22381[(2)] = inst_22256);

(statearr_22326_22381[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (10))){
var inst_22182 = (state_22276[(8)]);
var inst_22202 = (state_22276[(2)]);
var inst_22203 = cljs.core.get.call(null,inst_22202,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22204 = cljs.core.get.call(null,inst_22202,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22205 = cljs.core.get.call(null,inst_22202,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22206 = inst_22182;
var state_22276__$1 = (function (){var statearr_22327 = state_22276;
(statearr_22327[(7)] = inst_22206);

(statearr_22327[(16)] = inst_22204);

(statearr_22327[(17)] = inst_22203);

(statearr_22327[(18)] = inst_22205);

return statearr_22327;
})();
var statearr_22328_22382 = state_22276__$1;
(statearr_22328_22382[(2)] = null);

(statearr_22328_22382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (18))){
var inst_22220 = (state_22276[(2)]);
var state_22276__$1 = state_22276;
var statearr_22329_22383 = state_22276__$1;
(statearr_22329_22383[(2)] = inst_22220);

(statearr_22329_22383[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (37))){
var state_22276__$1 = state_22276;
var statearr_22330_22384 = state_22276__$1;
(statearr_22330_22384[(2)] = null);

(statearr_22330_22384[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (8))){
var inst_22182 = (state_22276[(8)]);
var inst_22199 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22182);
var state_22276__$1 = state_22276;
var statearr_22331_22385 = state_22276__$1;
(statearr_22331_22385[(2)] = inst_22199);

(statearr_22331_22385[(1)] = (10));


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
});})(c__20626__auto___22339,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20514__auto__,c__20626__auto___22339,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20515__auto__ = null;
var cljs$core$async$mix_$_state_machine__20515__auto____0 = (function (){
var statearr_22335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22335[(0)] = cljs$core$async$mix_$_state_machine__20515__auto__);

(statearr_22335[(1)] = (1));

return statearr_22335;
});
var cljs$core$async$mix_$_state_machine__20515__auto____1 = (function (state_22276){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_22276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e22336){if((e22336 instanceof Object)){
var ex__20518__auto__ = e22336;
var statearr_22337_22386 = state_22276;
(statearr_22337_22386[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22387 = state_22276;
state_22276 = G__22387;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20515__auto__ = function(state_22276){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20515__auto____1.call(this,state_22276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20515__auto____0;
cljs$core$async$mix_$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20515__auto____1;
return cljs$core$async$mix_$_state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto___22339,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20628__auto__ = (function (){var statearr_22338 = f__20627__auto__.call(null);
(statearr_22338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto___22339);

return statearr_22338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto___22339,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args22388 = [];
var len__19529__auto___22391 = arguments.length;
var i__19530__auto___22392 = (0);
while(true){
if((i__19530__auto___22392 < len__19529__auto___22391)){
args22388.push((arguments[i__19530__auto___22392]));

var G__22393 = (i__19530__auto___22392 + (1));
i__19530__auto___22392 = G__22393;
continue;
} else {
}
break;
}

var G__22390 = args22388.length;
switch (G__22390) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22388.length)].join('')));

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
var args22396 = [];
var len__19529__auto___22521 = arguments.length;
var i__19530__auto___22522 = (0);
while(true){
if((i__19530__auto___22522 < len__19529__auto___22521)){
args22396.push((arguments[i__19530__auto___22522]));

var G__22523 = (i__19530__auto___22522 + (1));
i__19530__auto___22522 = G__22523;
continue;
} else {
}
break;
}

var G__22398 = args22396.length;
switch (G__22398) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22396.length)].join('')));

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
return (function (p1__22395_SHARP_){
if(cljs.core.truth_(p1__22395_SHARP_.call(null,topic))){
return p1__22395_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22395_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18459__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22399 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22399 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22400){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22400 = meta22400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22401,meta22400__$1){
var self__ = this;
var _22401__$1 = this;
return (new cljs.core.async.t_cljs$core$async22399(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22400__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22399.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22401){
var self__ = this;
var _22401__$1 = this;
return self__.meta22400;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22399.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22399.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22399.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22399.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22399.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async22399.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22399.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22399.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22400","meta22400",2106086116,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22399.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22399.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22399";

cljs.core.async.t_cljs$core$async22399.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async22399");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22399 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22399(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22400){
return (new cljs.core.async.t_cljs$core$async22399(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22400));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22399(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20626__auto___22525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto___22525,mults,ensure_mult,p){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto___22525,mults,ensure_mult,p){
return (function (state_22473){
var state_val_22474 = (state_22473[(1)]);
if((state_val_22474 === (7))){
var inst_22469 = (state_22473[(2)]);
var state_22473__$1 = state_22473;
var statearr_22475_22526 = state_22473__$1;
(statearr_22475_22526[(2)] = inst_22469);

(statearr_22475_22526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (20))){
var state_22473__$1 = state_22473;
var statearr_22476_22527 = state_22473__$1;
(statearr_22476_22527[(2)] = null);

(statearr_22476_22527[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (1))){
var state_22473__$1 = state_22473;
var statearr_22477_22528 = state_22473__$1;
(statearr_22477_22528[(2)] = null);

(statearr_22477_22528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (24))){
var inst_22452 = (state_22473[(7)]);
var inst_22461 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22452);
var state_22473__$1 = state_22473;
var statearr_22478_22529 = state_22473__$1;
(statearr_22478_22529[(2)] = inst_22461);

(statearr_22478_22529[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (4))){
var inst_22404 = (state_22473[(8)]);
var inst_22404__$1 = (state_22473[(2)]);
var inst_22405 = (inst_22404__$1 == null);
var state_22473__$1 = (function (){var statearr_22479 = state_22473;
(statearr_22479[(8)] = inst_22404__$1);

return statearr_22479;
})();
if(cljs.core.truth_(inst_22405)){
var statearr_22480_22530 = state_22473__$1;
(statearr_22480_22530[(1)] = (5));

} else {
var statearr_22481_22531 = state_22473__$1;
(statearr_22481_22531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (15))){
var inst_22446 = (state_22473[(2)]);
var state_22473__$1 = state_22473;
var statearr_22482_22532 = state_22473__$1;
(statearr_22482_22532[(2)] = inst_22446);

(statearr_22482_22532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (21))){
var inst_22466 = (state_22473[(2)]);
var state_22473__$1 = (function (){var statearr_22483 = state_22473;
(statearr_22483[(9)] = inst_22466);

return statearr_22483;
})();
var statearr_22484_22533 = state_22473__$1;
(statearr_22484_22533[(2)] = null);

(statearr_22484_22533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (13))){
var inst_22428 = (state_22473[(10)]);
var inst_22430 = cljs.core.chunked_seq_QMARK_.call(null,inst_22428);
var state_22473__$1 = state_22473;
if(inst_22430){
var statearr_22485_22534 = state_22473__$1;
(statearr_22485_22534[(1)] = (16));

} else {
var statearr_22486_22535 = state_22473__$1;
(statearr_22486_22535[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (22))){
var inst_22458 = (state_22473[(2)]);
var state_22473__$1 = state_22473;
if(cljs.core.truth_(inst_22458)){
var statearr_22487_22536 = state_22473__$1;
(statearr_22487_22536[(1)] = (23));

} else {
var statearr_22488_22537 = state_22473__$1;
(statearr_22488_22537[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (6))){
var inst_22454 = (state_22473[(11)]);
var inst_22452 = (state_22473[(7)]);
var inst_22404 = (state_22473[(8)]);
var inst_22452__$1 = topic_fn.call(null,inst_22404);
var inst_22453 = cljs.core.deref.call(null,mults);
var inst_22454__$1 = cljs.core.get.call(null,inst_22453,inst_22452__$1);
var state_22473__$1 = (function (){var statearr_22489 = state_22473;
(statearr_22489[(11)] = inst_22454__$1);

(statearr_22489[(7)] = inst_22452__$1);

return statearr_22489;
})();
if(cljs.core.truth_(inst_22454__$1)){
var statearr_22490_22538 = state_22473__$1;
(statearr_22490_22538[(1)] = (19));

} else {
var statearr_22491_22539 = state_22473__$1;
(statearr_22491_22539[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (25))){
var inst_22463 = (state_22473[(2)]);
var state_22473__$1 = state_22473;
var statearr_22492_22540 = state_22473__$1;
(statearr_22492_22540[(2)] = inst_22463);

(statearr_22492_22540[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (17))){
var inst_22428 = (state_22473[(10)]);
var inst_22437 = cljs.core.first.call(null,inst_22428);
var inst_22438 = cljs.core.async.muxch_STAR_.call(null,inst_22437);
var inst_22439 = cljs.core.async.close_BANG_.call(null,inst_22438);
var inst_22440 = cljs.core.next.call(null,inst_22428);
var inst_22414 = inst_22440;
var inst_22415 = null;
var inst_22416 = (0);
var inst_22417 = (0);
var state_22473__$1 = (function (){var statearr_22493 = state_22473;
(statearr_22493[(12)] = inst_22416);

(statearr_22493[(13)] = inst_22417);

(statearr_22493[(14)] = inst_22439);

(statearr_22493[(15)] = inst_22414);

(statearr_22493[(16)] = inst_22415);

return statearr_22493;
})();
var statearr_22494_22541 = state_22473__$1;
(statearr_22494_22541[(2)] = null);

(statearr_22494_22541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (3))){
var inst_22471 = (state_22473[(2)]);
var state_22473__$1 = state_22473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22473__$1,inst_22471);
} else {
if((state_val_22474 === (12))){
var inst_22448 = (state_22473[(2)]);
var state_22473__$1 = state_22473;
var statearr_22495_22542 = state_22473__$1;
(statearr_22495_22542[(2)] = inst_22448);

(statearr_22495_22542[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (2))){
var state_22473__$1 = state_22473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22473__$1,(4),ch);
} else {
if((state_val_22474 === (23))){
var state_22473__$1 = state_22473;
var statearr_22496_22543 = state_22473__$1;
(statearr_22496_22543[(2)] = null);

(statearr_22496_22543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (19))){
var inst_22454 = (state_22473[(11)]);
var inst_22404 = (state_22473[(8)]);
var inst_22456 = cljs.core.async.muxch_STAR_.call(null,inst_22454);
var state_22473__$1 = state_22473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22473__$1,(22),inst_22456,inst_22404);
} else {
if((state_val_22474 === (11))){
var inst_22414 = (state_22473[(15)]);
var inst_22428 = (state_22473[(10)]);
var inst_22428__$1 = cljs.core.seq.call(null,inst_22414);
var state_22473__$1 = (function (){var statearr_22497 = state_22473;
(statearr_22497[(10)] = inst_22428__$1);

return statearr_22497;
})();
if(inst_22428__$1){
var statearr_22498_22544 = state_22473__$1;
(statearr_22498_22544[(1)] = (13));

} else {
var statearr_22499_22545 = state_22473__$1;
(statearr_22499_22545[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (9))){
var inst_22450 = (state_22473[(2)]);
var state_22473__$1 = state_22473;
var statearr_22500_22546 = state_22473__$1;
(statearr_22500_22546[(2)] = inst_22450);

(statearr_22500_22546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (5))){
var inst_22411 = cljs.core.deref.call(null,mults);
var inst_22412 = cljs.core.vals.call(null,inst_22411);
var inst_22413 = cljs.core.seq.call(null,inst_22412);
var inst_22414 = inst_22413;
var inst_22415 = null;
var inst_22416 = (0);
var inst_22417 = (0);
var state_22473__$1 = (function (){var statearr_22501 = state_22473;
(statearr_22501[(12)] = inst_22416);

(statearr_22501[(13)] = inst_22417);

(statearr_22501[(15)] = inst_22414);

(statearr_22501[(16)] = inst_22415);

return statearr_22501;
})();
var statearr_22502_22547 = state_22473__$1;
(statearr_22502_22547[(2)] = null);

(statearr_22502_22547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (14))){
var state_22473__$1 = state_22473;
var statearr_22506_22548 = state_22473__$1;
(statearr_22506_22548[(2)] = null);

(statearr_22506_22548[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (16))){
var inst_22428 = (state_22473[(10)]);
var inst_22432 = cljs.core.chunk_first.call(null,inst_22428);
var inst_22433 = cljs.core.chunk_rest.call(null,inst_22428);
var inst_22434 = cljs.core.count.call(null,inst_22432);
var inst_22414 = inst_22433;
var inst_22415 = inst_22432;
var inst_22416 = inst_22434;
var inst_22417 = (0);
var state_22473__$1 = (function (){var statearr_22507 = state_22473;
(statearr_22507[(12)] = inst_22416);

(statearr_22507[(13)] = inst_22417);

(statearr_22507[(15)] = inst_22414);

(statearr_22507[(16)] = inst_22415);

return statearr_22507;
})();
var statearr_22508_22549 = state_22473__$1;
(statearr_22508_22549[(2)] = null);

(statearr_22508_22549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (10))){
var inst_22416 = (state_22473[(12)]);
var inst_22417 = (state_22473[(13)]);
var inst_22414 = (state_22473[(15)]);
var inst_22415 = (state_22473[(16)]);
var inst_22422 = cljs.core._nth.call(null,inst_22415,inst_22417);
var inst_22423 = cljs.core.async.muxch_STAR_.call(null,inst_22422);
var inst_22424 = cljs.core.async.close_BANG_.call(null,inst_22423);
var inst_22425 = (inst_22417 + (1));
var tmp22503 = inst_22416;
var tmp22504 = inst_22414;
var tmp22505 = inst_22415;
var inst_22414__$1 = tmp22504;
var inst_22415__$1 = tmp22505;
var inst_22416__$1 = tmp22503;
var inst_22417__$1 = inst_22425;
var state_22473__$1 = (function (){var statearr_22509 = state_22473;
(statearr_22509[(12)] = inst_22416__$1);

(statearr_22509[(13)] = inst_22417__$1);

(statearr_22509[(17)] = inst_22424);

(statearr_22509[(15)] = inst_22414__$1);

(statearr_22509[(16)] = inst_22415__$1);

return statearr_22509;
})();
var statearr_22510_22550 = state_22473__$1;
(statearr_22510_22550[(2)] = null);

(statearr_22510_22550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (18))){
var inst_22443 = (state_22473[(2)]);
var state_22473__$1 = state_22473;
var statearr_22511_22551 = state_22473__$1;
(statearr_22511_22551[(2)] = inst_22443);

(statearr_22511_22551[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22474 === (8))){
var inst_22416 = (state_22473[(12)]);
var inst_22417 = (state_22473[(13)]);
var inst_22419 = (inst_22417 < inst_22416);
var inst_22420 = inst_22419;
var state_22473__$1 = state_22473;
if(cljs.core.truth_(inst_22420)){
var statearr_22512_22552 = state_22473__$1;
(statearr_22512_22552[(1)] = (10));

} else {
var statearr_22513_22553 = state_22473__$1;
(statearr_22513_22553[(1)] = (11));

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
});})(c__20626__auto___22525,mults,ensure_mult,p))
;
return ((function (switch__20514__auto__,c__20626__auto___22525,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20515__auto__ = null;
var cljs$core$async$state_machine__20515__auto____0 = (function (){
var statearr_22517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22517[(0)] = cljs$core$async$state_machine__20515__auto__);

(statearr_22517[(1)] = (1));

return statearr_22517;
});
var cljs$core$async$state_machine__20515__auto____1 = (function (state_22473){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_22473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e22518){if((e22518 instanceof Object)){
var ex__20518__auto__ = e22518;
var statearr_22519_22554 = state_22473;
(statearr_22519_22554[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22555 = state_22473;
state_22473 = G__22555;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$state_machine__20515__auto__ = function(state_22473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20515__auto____1.call(this,state_22473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20515__auto____0;
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20515__auto____1;
return cljs$core$async$state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto___22525,mults,ensure_mult,p))
})();
var state__20628__auto__ = (function (){var statearr_22520 = f__20627__auto__.call(null);
(statearr_22520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto___22525);

return statearr_22520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto___22525,mults,ensure_mult,p))
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
var args22556 = [];
var len__19529__auto___22559 = arguments.length;
var i__19530__auto___22560 = (0);
while(true){
if((i__19530__auto___22560 < len__19529__auto___22559)){
args22556.push((arguments[i__19530__auto___22560]));

var G__22561 = (i__19530__auto___22560 + (1));
i__19530__auto___22560 = G__22561;
continue;
} else {
}
break;
}

var G__22558 = args22556.length;
switch (G__22558) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22556.length)].join('')));

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
var args22563 = [];
var len__19529__auto___22566 = arguments.length;
var i__19530__auto___22567 = (0);
while(true){
if((i__19530__auto___22567 < len__19529__auto___22566)){
args22563.push((arguments[i__19530__auto___22567]));

var G__22568 = (i__19530__auto___22567 + (1));
i__19530__auto___22567 = G__22568;
continue;
} else {
}
break;
}

var G__22565 = args22563.length;
switch (G__22565) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22563.length)].join('')));

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
var args22570 = [];
var len__19529__auto___22641 = arguments.length;
var i__19530__auto___22642 = (0);
while(true){
if((i__19530__auto___22642 < len__19529__auto___22641)){
args22570.push((arguments[i__19530__auto___22642]));

var G__22643 = (i__19530__auto___22642 + (1));
i__19530__auto___22642 = G__22643;
continue;
} else {
}
break;
}

var G__22572 = args22570.length;
switch (G__22572) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22570.length)].join('')));

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
var c__20626__auto___22645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto___22645,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto___22645,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22611){
var state_val_22612 = (state_22611[(1)]);
if((state_val_22612 === (7))){
var state_22611__$1 = state_22611;
var statearr_22613_22646 = state_22611__$1;
(statearr_22613_22646[(2)] = null);

(statearr_22613_22646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22612 === (1))){
var state_22611__$1 = state_22611;
var statearr_22614_22647 = state_22611__$1;
(statearr_22614_22647[(2)] = null);

(statearr_22614_22647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22612 === (4))){
var inst_22575 = (state_22611[(7)]);
var inst_22577 = (inst_22575 < cnt);
var state_22611__$1 = state_22611;
if(cljs.core.truth_(inst_22577)){
var statearr_22615_22648 = state_22611__$1;
(statearr_22615_22648[(1)] = (6));

} else {
var statearr_22616_22649 = state_22611__$1;
(statearr_22616_22649[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22612 === (15))){
var inst_22607 = (state_22611[(2)]);
var state_22611__$1 = state_22611;
var statearr_22617_22650 = state_22611__$1;
(statearr_22617_22650[(2)] = inst_22607);

(statearr_22617_22650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22612 === (13))){
var inst_22600 = cljs.core.async.close_BANG_.call(null,out);
var state_22611__$1 = state_22611;
var statearr_22618_22651 = state_22611__$1;
(statearr_22618_22651[(2)] = inst_22600);

(statearr_22618_22651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22612 === (6))){
var state_22611__$1 = state_22611;
var statearr_22619_22652 = state_22611__$1;
(statearr_22619_22652[(2)] = null);

(statearr_22619_22652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22612 === (3))){
var inst_22609 = (state_22611[(2)]);
var state_22611__$1 = state_22611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22611__$1,inst_22609);
} else {
if((state_val_22612 === (12))){
var inst_22597 = (state_22611[(8)]);
var inst_22597__$1 = (state_22611[(2)]);
var inst_22598 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22597__$1);
var state_22611__$1 = (function (){var statearr_22620 = state_22611;
(statearr_22620[(8)] = inst_22597__$1);

return statearr_22620;
})();
if(cljs.core.truth_(inst_22598)){
var statearr_22621_22653 = state_22611__$1;
(statearr_22621_22653[(1)] = (13));

} else {
var statearr_22622_22654 = state_22611__$1;
(statearr_22622_22654[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22612 === (2))){
var inst_22574 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22575 = (0);
var state_22611__$1 = (function (){var statearr_22623 = state_22611;
(statearr_22623[(9)] = inst_22574);

(statearr_22623[(7)] = inst_22575);

return statearr_22623;
})();
var statearr_22624_22655 = state_22611__$1;
(statearr_22624_22655[(2)] = null);

(statearr_22624_22655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22612 === (11))){
var inst_22575 = (state_22611[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22611,(10),Object,null,(9));
var inst_22584 = chs__$1.call(null,inst_22575);
var inst_22585 = done.call(null,inst_22575);
var inst_22586 = cljs.core.async.take_BANG_.call(null,inst_22584,inst_22585);
var state_22611__$1 = state_22611;
var statearr_22625_22656 = state_22611__$1;
(statearr_22625_22656[(2)] = inst_22586);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22611__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22612 === (9))){
var inst_22575 = (state_22611[(7)]);
var inst_22588 = (state_22611[(2)]);
var inst_22589 = (inst_22575 + (1));
var inst_22575__$1 = inst_22589;
var state_22611__$1 = (function (){var statearr_22626 = state_22611;
(statearr_22626[(10)] = inst_22588);

(statearr_22626[(7)] = inst_22575__$1);

return statearr_22626;
})();
var statearr_22627_22657 = state_22611__$1;
(statearr_22627_22657[(2)] = null);

(statearr_22627_22657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22612 === (5))){
var inst_22595 = (state_22611[(2)]);
var state_22611__$1 = (function (){var statearr_22628 = state_22611;
(statearr_22628[(11)] = inst_22595);

return statearr_22628;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22611__$1,(12),dchan);
} else {
if((state_val_22612 === (14))){
var inst_22597 = (state_22611[(8)]);
var inst_22602 = cljs.core.apply.call(null,f,inst_22597);
var state_22611__$1 = state_22611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22611__$1,(16),out,inst_22602);
} else {
if((state_val_22612 === (16))){
var inst_22604 = (state_22611[(2)]);
var state_22611__$1 = (function (){var statearr_22629 = state_22611;
(statearr_22629[(12)] = inst_22604);

return statearr_22629;
})();
var statearr_22630_22658 = state_22611__$1;
(statearr_22630_22658[(2)] = null);

(statearr_22630_22658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22612 === (10))){
var inst_22579 = (state_22611[(2)]);
var inst_22580 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22611__$1 = (function (){var statearr_22631 = state_22611;
(statearr_22631[(13)] = inst_22579);

return statearr_22631;
})();
var statearr_22632_22659 = state_22611__$1;
(statearr_22632_22659[(2)] = inst_22580);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22611__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22612 === (8))){
var inst_22593 = (state_22611[(2)]);
var state_22611__$1 = state_22611;
var statearr_22633_22660 = state_22611__$1;
(statearr_22633_22660[(2)] = inst_22593);

(statearr_22633_22660[(1)] = (5));


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
});})(c__20626__auto___22645,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20514__auto__,c__20626__auto___22645,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20515__auto__ = null;
var cljs$core$async$state_machine__20515__auto____0 = (function (){
var statearr_22637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22637[(0)] = cljs$core$async$state_machine__20515__auto__);

(statearr_22637[(1)] = (1));

return statearr_22637;
});
var cljs$core$async$state_machine__20515__auto____1 = (function (state_22611){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_22611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e22638){if((e22638 instanceof Object)){
var ex__20518__auto__ = e22638;
var statearr_22639_22661 = state_22611;
(statearr_22639_22661[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22662 = state_22611;
state_22611 = G__22662;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$state_machine__20515__auto__ = function(state_22611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20515__auto____1.call(this,state_22611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20515__auto____0;
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20515__auto____1;
return cljs$core$async$state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto___22645,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20628__auto__ = (function (){var statearr_22640 = f__20627__auto__.call(null);
(statearr_22640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto___22645);

return statearr_22640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto___22645,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args22664 = [];
var len__19529__auto___22720 = arguments.length;
var i__19530__auto___22721 = (0);
while(true){
if((i__19530__auto___22721 < len__19529__auto___22720)){
args22664.push((arguments[i__19530__auto___22721]));

var G__22722 = (i__19530__auto___22721 + (1));
i__19530__auto___22721 = G__22722;
continue;
} else {
}
break;
}

var G__22666 = args22664.length;
switch (G__22666) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22664.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20626__auto___22724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto___22724,out){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto___22724,out){
return (function (state_22696){
var state_val_22697 = (state_22696[(1)]);
if((state_val_22697 === (7))){
var inst_22675 = (state_22696[(7)]);
var inst_22676 = (state_22696[(8)]);
var inst_22675__$1 = (state_22696[(2)]);
var inst_22676__$1 = cljs.core.nth.call(null,inst_22675__$1,(0),null);
var inst_22677 = cljs.core.nth.call(null,inst_22675__$1,(1),null);
var inst_22678 = (inst_22676__$1 == null);
var state_22696__$1 = (function (){var statearr_22698 = state_22696;
(statearr_22698[(7)] = inst_22675__$1);

(statearr_22698[(8)] = inst_22676__$1);

(statearr_22698[(9)] = inst_22677);

return statearr_22698;
})();
if(cljs.core.truth_(inst_22678)){
var statearr_22699_22725 = state_22696__$1;
(statearr_22699_22725[(1)] = (8));

} else {
var statearr_22700_22726 = state_22696__$1;
(statearr_22700_22726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22697 === (1))){
var inst_22667 = cljs.core.vec.call(null,chs);
var inst_22668 = inst_22667;
var state_22696__$1 = (function (){var statearr_22701 = state_22696;
(statearr_22701[(10)] = inst_22668);

return statearr_22701;
})();
var statearr_22702_22727 = state_22696__$1;
(statearr_22702_22727[(2)] = null);

(statearr_22702_22727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22697 === (4))){
var inst_22668 = (state_22696[(10)]);
var state_22696__$1 = state_22696;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22696__$1,(7),inst_22668);
} else {
if((state_val_22697 === (6))){
var inst_22692 = (state_22696[(2)]);
var state_22696__$1 = state_22696;
var statearr_22703_22728 = state_22696__$1;
(statearr_22703_22728[(2)] = inst_22692);

(statearr_22703_22728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22697 === (3))){
var inst_22694 = (state_22696[(2)]);
var state_22696__$1 = state_22696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22696__$1,inst_22694);
} else {
if((state_val_22697 === (2))){
var inst_22668 = (state_22696[(10)]);
var inst_22670 = cljs.core.count.call(null,inst_22668);
var inst_22671 = (inst_22670 > (0));
var state_22696__$1 = state_22696;
if(cljs.core.truth_(inst_22671)){
var statearr_22705_22729 = state_22696__$1;
(statearr_22705_22729[(1)] = (4));

} else {
var statearr_22706_22730 = state_22696__$1;
(statearr_22706_22730[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22697 === (11))){
var inst_22668 = (state_22696[(10)]);
var inst_22685 = (state_22696[(2)]);
var tmp22704 = inst_22668;
var inst_22668__$1 = tmp22704;
var state_22696__$1 = (function (){var statearr_22707 = state_22696;
(statearr_22707[(10)] = inst_22668__$1);

(statearr_22707[(11)] = inst_22685);

return statearr_22707;
})();
var statearr_22708_22731 = state_22696__$1;
(statearr_22708_22731[(2)] = null);

(statearr_22708_22731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22697 === (9))){
var inst_22676 = (state_22696[(8)]);
var state_22696__$1 = state_22696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22696__$1,(11),out,inst_22676);
} else {
if((state_val_22697 === (5))){
var inst_22690 = cljs.core.async.close_BANG_.call(null,out);
var state_22696__$1 = state_22696;
var statearr_22709_22732 = state_22696__$1;
(statearr_22709_22732[(2)] = inst_22690);

(statearr_22709_22732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22697 === (10))){
var inst_22688 = (state_22696[(2)]);
var state_22696__$1 = state_22696;
var statearr_22710_22733 = state_22696__$1;
(statearr_22710_22733[(2)] = inst_22688);

(statearr_22710_22733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22697 === (8))){
var inst_22668 = (state_22696[(10)]);
var inst_22675 = (state_22696[(7)]);
var inst_22676 = (state_22696[(8)]);
var inst_22677 = (state_22696[(9)]);
var inst_22680 = (function (){var cs = inst_22668;
var vec__22673 = inst_22675;
var v = inst_22676;
var c = inst_22677;
return ((function (cs,vec__22673,v,c,inst_22668,inst_22675,inst_22676,inst_22677,state_val_22697,c__20626__auto___22724,out){
return (function (p1__22663_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22663_SHARP_);
});
;})(cs,vec__22673,v,c,inst_22668,inst_22675,inst_22676,inst_22677,state_val_22697,c__20626__auto___22724,out))
})();
var inst_22681 = cljs.core.filterv.call(null,inst_22680,inst_22668);
var inst_22668__$1 = inst_22681;
var state_22696__$1 = (function (){var statearr_22711 = state_22696;
(statearr_22711[(10)] = inst_22668__$1);

return statearr_22711;
})();
var statearr_22712_22734 = state_22696__$1;
(statearr_22712_22734[(2)] = null);

(statearr_22712_22734[(1)] = (2));


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
});})(c__20626__auto___22724,out))
;
return ((function (switch__20514__auto__,c__20626__auto___22724,out){
return (function() {
var cljs$core$async$state_machine__20515__auto__ = null;
var cljs$core$async$state_machine__20515__auto____0 = (function (){
var statearr_22716 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22716[(0)] = cljs$core$async$state_machine__20515__auto__);

(statearr_22716[(1)] = (1));

return statearr_22716;
});
var cljs$core$async$state_machine__20515__auto____1 = (function (state_22696){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_22696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e22717){if((e22717 instanceof Object)){
var ex__20518__auto__ = e22717;
var statearr_22718_22735 = state_22696;
(statearr_22718_22735[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22736 = state_22696;
state_22696 = G__22736;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$state_machine__20515__auto__ = function(state_22696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20515__auto____1.call(this,state_22696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20515__auto____0;
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20515__auto____1;
return cljs$core$async$state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto___22724,out))
})();
var state__20628__auto__ = (function (){var statearr_22719 = f__20627__auto__.call(null);
(statearr_22719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto___22724);

return statearr_22719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto___22724,out))
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
var args22737 = [];
var len__19529__auto___22786 = arguments.length;
var i__19530__auto___22787 = (0);
while(true){
if((i__19530__auto___22787 < len__19529__auto___22786)){
args22737.push((arguments[i__19530__auto___22787]));

var G__22788 = (i__19530__auto___22787 + (1));
i__19530__auto___22787 = G__22788;
continue;
} else {
}
break;
}

var G__22739 = args22737.length;
switch (G__22739) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22737.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20626__auto___22790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto___22790,out){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto___22790,out){
return (function (state_22763){
var state_val_22764 = (state_22763[(1)]);
if((state_val_22764 === (7))){
var inst_22745 = (state_22763[(7)]);
var inst_22745__$1 = (state_22763[(2)]);
var inst_22746 = (inst_22745__$1 == null);
var inst_22747 = cljs.core.not.call(null,inst_22746);
var state_22763__$1 = (function (){var statearr_22765 = state_22763;
(statearr_22765[(7)] = inst_22745__$1);

return statearr_22765;
})();
if(inst_22747){
var statearr_22766_22791 = state_22763__$1;
(statearr_22766_22791[(1)] = (8));

} else {
var statearr_22767_22792 = state_22763__$1;
(statearr_22767_22792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22764 === (1))){
var inst_22740 = (0);
var state_22763__$1 = (function (){var statearr_22768 = state_22763;
(statearr_22768[(8)] = inst_22740);

return statearr_22768;
})();
var statearr_22769_22793 = state_22763__$1;
(statearr_22769_22793[(2)] = null);

(statearr_22769_22793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22764 === (4))){
var state_22763__$1 = state_22763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22763__$1,(7),ch);
} else {
if((state_val_22764 === (6))){
var inst_22758 = (state_22763[(2)]);
var state_22763__$1 = state_22763;
var statearr_22770_22794 = state_22763__$1;
(statearr_22770_22794[(2)] = inst_22758);

(statearr_22770_22794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22764 === (3))){
var inst_22760 = (state_22763[(2)]);
var inst_22761 = cljs.core.async.close_BANG_.call(null,out);
var state_22763__$1 = (function (){var statearr_22771 = state_22763;
(statearr_22771[(9)] = inst_22760);

return statearr_22771;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22763__$1,inst_22761);
} else {
if((state_val_22764 === (2))){
var inst_22740 = (state_22763[(8)]);
var inst_22742 = (inst_22740 < n);
var state_22763__$1 = state_22763;
if(cljs.core.truth_(inst_22742)){
var statearr_22772_22795 = state_22763__$1;
(statearr_22772_22795[(1)] = (4));

} else {
var statearr_22773_22796 = state_22763__$1;
(statearr_22773_22796[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22764 === (11))){
var inst_22740 = (state_22763[(8)]);
var inst_22750 = (state_22763[(2)]);
var inst_22751 = (inst_22740 + (1));
var inst_22740__$1 = inst_22751;
var state_22763__$1 = (function (){var statearr_22774 = state_22763;
(statearr_22774[(10)] = inst_22750);

(statearr_22774[(8)] = inst_22740__$1);

return statearr_22774;
})();
var statearr_22775_22797 = state_22763__$1;
(statearr_22775_22797[(2)] = null);

(statearr_22775_22797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22764 === (9))){
var state_22763__$1 = state_22763;
var statearr_22776_22798 = state_22763__$1;
(statearr_22776_22798[(2)] = null);

(statearr_22776_22798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22764 === (5))){
var state_22763__$1 = state_22763;
var statearr_22777_22799 = state_22763__$1;
(statearr_22777_22799[(2)] = null);

(statearr_22777_22799[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22764 === (10))){
var inst_22755 = (state_22763[(2)]);
var state_22763__$1 = state_22763;
var statearr_22778_22800 = state_22763__$1;
(statearr_22778_22800[(2)] = inst_22755);

(statearr_22778_22800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22764 === (8))){
var inst_22745 = (state_22763[(7)]);
var state_22763__$1 = state_22763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22763__$1,(11),out,inst_22745);
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
});})(c__20626__auto___22790,out))
;
return ((function (switch__20514__auto__,c__20626__auto___22790,out){
return (function() {
var cljs$core$async$state_machine__20515__auto__ = null;
var cljs$core$async$state_machine__20515__auto____0 = (function (){
var statearr_22782 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22782[(0)] = cljs$core$async$state_machine__20515__auto__);

(statearr_22782[(1)] = (1));

return statearr_22782;
});
var cljs$core$async$state_machine__20515__auto____1 = (function (state_22763){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_22763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e22783){if((e22783 instanceof Object)){
var ex__20518__auto__ = e22783;
var statearr_22784_22801 = state_22763;
(statearr_22784_22801[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22802 = state_22763;
state_22763 = G__22802;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$state_machine__20515__auto__ = function(state_22763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20515__auto____1.call(this,state_22763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20515__auto____0;
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20515__auto____1;
return cljs$core$async$state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto___22790,out))
})();
var state__20628__auto__ = (function (){var statearr_22785 = f__20627__auto__.call(null);
(statearr_22785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto___22790);

return statearr_22785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto___22790,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22810 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22810 = (function (map_LT_,f,ch,meta22811){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22811 = meta22811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22812,meta22811__$1){
var self__ = this;
var _22812__$1 = this;
return (new cljs.core.async.t_cljs$core$async22810(self__.map_LT_,self__.f,self__.ch,meta22811__$1));
});

cljs.core.async.t_cljs$core$async22810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22812){
var self__ = this;
var _22812__$1 = this;
return self__.meta22811;
});

cljs.core.async.t_cljs$core$async22810.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22810.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22810.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22810.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22810.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22813 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22813 = (function (map_LT_,f,ch,meta22811,_,fn1,meta22814){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22811 = meta22811;
this._ = _;
this.fn1 = fn1;
this.meta22814 = meta22814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22815,meta22814__$1){
var self__ = this;
var _22815__$1 = this;
return (new cljs.core.async.t_cljs$core$async22813(self__.map_LT_,self__.f,self__.ch,self__.meta22811,self__._,self__.fn1,meta22814__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22815){
var self__ = this;
var _22815__$1 = this;
return self__.meta22814;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22813.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22813.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22813.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22813.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22803_SHARP_){
return f1.call(null,(((p1__22803_SHARP_ == null))?null:self__.f.call(null,p1__22803_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22813.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22811","meta22811",-80561425,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22810","cljs.core.async/t_cljs$core$async22810",785980613,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22814","meta22814",-907029476,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22813.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22813";

cljs.core.async.t_cljs$core$async22813.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async22813");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22813 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22813(map_LT___$1,f__$1,ch__$1,meta22811__$1,___$2,fn1__$1,meta22814){
return (new cljs.core.async.t_cljs$core$async22813(map_LT___$1,f__$1,ch__$1,meta22811__$1,___$2,fn1__$1,meta22814));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22813(self__.map_LT_,self__.f,self__.ch,self__.meta22811,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async22810.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22810.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22811","meta22811",-80561425,null)], null);
});

cljs.core.async.t_cljs$core$async22810.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22810";

cljs.core.async.t_cljs$core$async22810.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async22810");
});

cljs.core.async.__GT_t_cljs$core$async22810 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22810(map_LT___$1,f__$1,ch__$1,meta22811){
return (new cljs.core.async.t_cljs$core$async22810(map_LT___$1,f__$1,ch__$1,meta22811));
});

}

return (new cljs.core.async.t_cljs$core$async22810(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22819 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22819 = (function (map_GT_,f,ch,meta22820){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22820 = meta22820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22821,meta22820__$1){
var self__ = this;
var _22821__$1 = this;
return (new cljs.core.async.t_cljs$core$async22819(self__.map_GT_,self__.f,self__.ch,meta22820__$1));
});

cljs.core.async.t_cljs$core$async22819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22821){
var self__ = this;
var _22821__$1 = this;
return self__.meta22820;
});

cljs.core.async.t_cljs$core$async22819.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22819.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22819.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22819.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22819.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22819.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22820","meta22820",975728311,null)], null);
});

cljs.core.async.t_cljs$core$async22819.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22819";

cljs.core.async.t_cljs$core$async22819.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async22819");
});

cljs.core.async.__GT_t_cljs$core$async22819 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22819(map_GT___$1,f__$1,ch__$1,meta22820){
return (new cljs.core.async.t_cljs$core$async22819(map_GT___$1,f__$1,ch__$1,meta22820));
});

}

return (new cljs.core.async.t_cljs$core$async22819(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22825 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22825 = (function (filter_GT_,p,ch,meta22826){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22826 = meta22826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22827,meta22826__$1){
var self__ = this;
var _22827__$1 = this;
return (new cljs.core.async.t_cljs$core$async22825(self__.filter_GT_,self__.p,self__.ch,meta22826__$1));
});

cljs.core.async.t_cljs$core$async22825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22827){
var self__ = this;
var _22827__$1 = this;
return self__.meta22826;
});

cljs.core.async.t_cljs$core$async22825.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22825.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22825.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22825.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22825.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22825.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22825.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22826","meta22826",69702116,null)], null);
});

cljs.core.async.t_cljs$core$async22825.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22825";

cljs.core.async.t_cljs$core$async22825.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async22825");
});

cljs.core.async.__GT_t_cljs$core$async22825 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22825(filter_GT___$1,p__$1,ch__$1,meta22826){
return (new cljs.core.async.t_cljs$core$async22825(filter_GT___$1,p__$1,ch__$1,meta22826));
});

}

return (new cljs.core.async.t_cljs$core$async22825(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args22828 = [];
var len__19529__auto___22872 = arguments.length;
var i__19530__auto___22873 = (0);
while(true){
if((i__19530__auto___22873 < len__19529__auto___22872)){
args22828.push((arguments[i__19530__auto___22873]));

var G__22874 = (i__19530__auto___22873 + (1));
i__19530__auto___22873 = G__22874;
continue;
} else {
}
break;
}

var G__22830 = args22828.length;
switch (G__22830) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22828.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20626__auto___22876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto___22876,out){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto___22876,out){
return (function (state_22851){
var state_val_22852 = (state_22851[(1)]);
if((state_val_22852 === (7))){
var inst_22847 = (state_22851[(2)]);
var state_22851__$1 = state_22851;
var statearr_22853_22877 = state_22851__$1;
(statearr_22853_22877[(2)] = inst_22847);

(statearr_22853_22877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (1))){
var state_22851__$1 = state_22851;
var statearr_22854_22878 = state_22851__$1;
(statearr_22854_22878[(2)] = null);

(statearr_22854_22878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (4))){
var inst_22833 = (state_22851[(7)]);
var inst_22833__$1 = (state_22851[(2)]);
var inst_22834 = (inst_22833__$1 == null);
var state_22851__$1 = (function (){var statearr_22855 = state_22851;
(statearr_22855[(7)] = inst_22833__$1);

return statearr_22855;
})();
if(cljs.core.truth_(inst_22834)){
var statearr_22856_22879 = state_22851__$1;
(statearr_22856_22879[(1)] = (5));

} else {
var statearr_22857_22880 = state_22851__$1;
(statearr_22857_22880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (6))){
var inst_22833 = (state_22851[(7)]);
var inst_22838 = p.call(null,inst_22833);
var state_22851__$1 = state_22851;
if(cljs.core.truth_(inst_22838)){
var statearr_22858_22881 = state_22851__$1;
(statearr_22858_22881[(1)] = (8));

} else {
var statearr_22859_22882 = state_22851__$1;
(statearr_22859_22882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (3))){
var inst_22849 = (state_22851[(2)]);
var state_22851__$1 = state_22851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22851__$1,inst_22849);
} else {
if((state_val_22852 === (2))){
var state_22851__$1 = state_22851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22851__$1,(4),ch);
} else {
if((state_val_22852 === (11))){
var inst_22841 = (state_22851[(2)]);
var state_22851__$1 = state_22851;
var statearr_22860_22883 = state_22851__$1;
(statearr_22860_22883[(2)] = inst_22841);

(statearr_22860_22883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (9))){
var state_22851__$1 = state_22851;
var statearr_22861_22884 = state_22851__$1;
(statearr_22861_22884[(2)] = null);

(statearr_22861_22884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (5))){
var inst_22836 = cljs.core.async.close_BANG_.call(null,out);
var state_22851__$1 = state_22851;
var statearr_22862_22885 = state_22851__$1;
(statearr_22862_22885[(2)] = inst_22836);

(statearr_22862_22885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (10))){
var inst_22844 = (state_22851[(2)]);
var state_22851__$1 = (function (){var statearr_22863 = state_22851;
(statearr_22863[(8)] = inst_22844);

return statearr_22863;
})();
var statearr_22864_22886 = state_22851__$1;
(statearr_22864_22886[(2)] = null);

(statearr_22864_22886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22852 === (8))){
var inst_22833 = (state_22851[(7)]);
var state_22851__$1 = state_22851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22851__$1,(11),out,inst_22833);
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
});})(c__20626__auto___22876,out))
;
return ((function (switch__20514__auto__,c__20626__auto___22876,out){
return (function() {
var cljs$core$async$state_machine__20515__auto__ = null;
var cljs$core$async$state_machine__20515__auto____0 = (function (){
var statearr_22868 = [null,null,null,null,null,null,null,null,null];
(statearr_22868[(0)] = cljs$core$async$state_machine__20515__auto__);

(statearr_22868[(1)] = (1));

return statearr_22868;
});
var cljs$core$async$state_machine__20515__auto____1 = (function (state_22851){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_22851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e22869){if((e22869 instanceof Object)){
var ex__20518__auto__ = e22869;
var statearr_22870_22887 = state_22851;
(statearr_22870_22887[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22888 = state_22851;
state_22851 = G__22888;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$state_machine__20515__auto__ = function(state_22851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20515__auto____1.call(this,state_22851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20515__auto____0;
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20515__auto____1;
return cljs$core$async$state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto___22876,out))
})();
var state__20628__auto__ = (function (){var statearr_22871 = f__20627__auto__.call(null);
(statearr_22871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto___22876);

return statearr_22871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto___22876,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22889 = [];
var len__19529__auto___22892 = arguments.length;
var i__19530__auto___22893 = (0);
while(true){
if((i__19530__auto___22893 < len__19529__auto___22892)){
args22889.push((arguments[i__19530__auto___22893]));

var G__22894 = (i__19530__auto___22893 + (1));
i__19530__auto___22893 = G__22894;
continue;
} else {
}
break;
}

var G__22891 = args22889.length;
switch (G__22891) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22889.length)].join('')));

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
var c__20626__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto__){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto__){
return (function (state_23061){
var state_val_23062 = (state_23061[(1)]);
if((state_val_23062 === (7))){
var inst_23057 = (state_23061[(2)]);
var state_23061__$1 = state_23061;
var statearr_23063_23104 = state_23061__$1;
(statearr_23063_23104[(2)] = inst_23057);

(statearr_23063_23104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (20))){
var inst_23027 = (state_23061[(7)]);
var inst_23038 = (state_23061[(2)]);
var inst_23039 = cljs.core.next.call(null,inst_23027);
var inst_23013 = inst_23039;
var inst_23014 = null;
var inst_23015 = (0);
var inst_23016 = (0);
var state_23061__$1 = (function (){var statearr_23064 = state_23061;
(statearr_23064[(8)] = inst_23016);

(statearr_23064[(9)] = inst_23038);

(statearr_23064[(10)] = inst_23014);

(statearr_23064[(11)] = inst_23015);

(statearr_23064[(12)] = inst_23013);

return statearr_23064;
})();
var statearr_23065_23105 = state_23061__$1;
(statearr_23065_23105[(2)] = null);

(statearr_23065_23105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (1))){
var state_23061__$1 = state_23061;
var statearr_23066_23106 = state_23061__$1;
(statearr_23066_23106[(2)] = null);

(statearr_23066_23106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (4))){
var inst_23002 = (state_23061[(13)]);
var inst_23002__$1 = (state_23061[(2)]);
var inst_23003 = (inst_23002__$1 == null);
var state_23061__$1 = (function (){var statearr_23067 = state_23061;
(statearr_23067[(13)] = inst_23002__$1);

return statearr_23067;
})();
if(cljs.core.truth_(inst_23003)){
var statearr_23068_23107 = state_23061__$1;
(statearr_23068_23107[(1)] = (5));

} else {
var statearr_23069_23108 = state_23061__$1;
(statearr_23069_23108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (15))){
var state_23061__$1 = state_23061;
var statearr_23073_23109 = state_23061__$1;
(statearr_23073_23109[(2)] = null);

(statearr_23073_23109[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (21))){
var state_23061__$1 = state_23061;
var statearr_23074_23110 = state_23061__$1;
(statearr_23074_23110[(2)] = null);

(statearr_23074_23110[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (13))){
var inst_23016 = (state_23061[(8)]);
var inst_23014 = (state_23061[(10)]);
var inst_23015 = (state_23061[(11)]);
var inst_23013 = (state_23061[(12)]);
var inst_23023 = (state_23061[(2)]);
var inst_23024 = (inst_23016 + (1));
var tmp23070 = inst_23014;
var tmp23071 = inst_23015;
var tmp23072 = inst_23013;
var inst_23013__$1 = tmp23072;
var inst_23014__$1 = tmp23070;
var inst_23015__$1 = tmp23071;
var inst_23016__$1 = inst_23024;
var state_23061__$1 = (function (){var statearr_23075 = state_23061;
(statearr_23075[(8)] = inst_23016__$1);

(statearr_23075[(10)] = inst_23014__$1);

(statearr_23075[(14)] = inst_23023);

(statearr_23075[(11)] = inst_23015__$1);

(statearr_23075[(12)] = inst_23013__$1);

return statearr_23075;
})();
var statearr_23076_23111 = state_23061__$1;
(statearr_23076_23111[(2)] = null);

(statearr_23076_23111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (22))){
var state_23061__$1 = state_23061;
var statearr_23077_23112 = state_23061__$1;
(statearr_23077_23112[(2)] = null);

(statearr_23077_23112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (6))){
var inst_23002 = (state_23061[(13)]);
var inst_23011 = f.call(null,inst_23002);
var inst_23012 = cljs.core.seq.call(null,inst_23011);
var inst_23013 = inst_23012;
var inst_23014 = null;
var inst_23015 = (0);
var inst_23016 = (0);
var state_23061__$1 = (function (){var statearr_23078 = state_23061;
(statearr_23078[(8)] = inst_23016);

(statearr_23078[(10)] = inst_23014);

(statearr_23078[(11)] = inst_23015);

(statearr_23078[(12)] = inst_23013);

return statearr_23078;
})();
var statearr_23079_23113 = state_23061__$1;
(statearr_23079_23113[(2)] = null);

(statearr_23079_23113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (17))){
var inst_23027 = (state_23061[(7)]);
var inst_23031 = cljs.core.chunk_first.call(null,inst_23027);
var inst_23032 = cljs.core.chunk_rest.call(null,inst_23027);
var inst_23033 = cljs.core.count.call(null,inst_23031);
var inst_23013 = inst_23032;
var inst_23014 = inst_23031;
var inst_23015 = inst_23033;
var inst_23016 = (0);
var state_23061__$1 = (function (){var statearr_23080 = state_23061;
(statearr_23080[(8)] = inst_23016);

(statearr_23080[(10)] = inst_23014);

(statearr_23080[(11)] = inst_23015);

(statearr_23080[(12)] = inst_23013);

return statearr_23080;
})();
var statearr_23081_23114 = state_23061__$1;
(statearr_23081_23114[(2)] = null);

(statearr_23081_23114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (3))){
var inst_23059 = (state_23061[(2)]);
var state_23061__$1 = state_23061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23061__$1,inst_23059);
} else {
if((state_val_23062 === (12))){
var inst_23047 = (state_23061[(2)]);
var state_23061__$1 = state_23061;
var statearr_23082_23115 = state_23061__$1;
(statearr_23082_23115[(2)] = inst_23047);

(statearr_23082_23115[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (2))){
var state_23061__$1 = state_23061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23061__$1,(4),in$);
} else {
if((state_val_23062 === (23))){
var inst_23055 = (state_23061[(2)]);
var state_23061__$1 = state_23061;
var statearr_23083_23116 = state_23061__$1;
(statearr_23083_23116[(2)] = inst_23055);

(statearr_23083_23116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (19))){
var inst_23042 = (state_23061[(2)]);
var state_23061__$1 = state_23061;
var statearr_23084_23117 = state_23061__$1;
(statearr_23084_23117[(2)] = inst_23042);

(statearr_23084_23117[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (11))){
var inst_23027 = (state_23061[(7)]);
var inst_23013 = (state_23061[(12)]);
var inst_23027__$1 = cljs.core.seq.call(null,inst_23013);
var state_23061__$1 = (function (){var statearr_23085 = state_23061;
(statearr_23085[(7)] = inst_23027__$1);

return statearr_23085;
})();
if(inst_23027__$1){
var statearr_23086_23118 = state_23061__$1;
(statearr_23086_23118[(1)] = (14));

} else {
var statearr_23087_23119 = state_23061__$1;
(statearr_23087_23119[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (9))){
var inst_23049 = (state_23061[(2)]);
var inst_23050 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23061__$1 = (function (){var statearr_23088 = state_23061;
(statearr_23088[(15)] = inst_23049);

return statearr_23088;
})();
if(cljs.core.truth_(inst_23050)){
var statearr_23089_23120 = state_23061__$1;
(statearr_23089_23120[(1)] = (21));

} else {
var statearr_23090_23121 = state_23061__$1;
(statearr_23090_23121[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (5))){
var inst_23005 = cljs.core.async.close_BANG_.call(null,out);
var state_23061__$1 = state_23061;
var statearr_23091_23122 = state_23061__$1;
(statearr_23091_23122[(2)] = inst_23005);

(statearr_23091_23122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (14))){
var inst_23027 = (state_23061[(7)]);
var inst_23029 = cljs.core.chunked_seq_QMARK_.call(null,inst_23027);
var state_23061__$1 = state_23061;
if(inst_23029){
var statearr_23092_23123 = state_23061__$1;
(statearr_23092_23123[(1)] = (17));

} else {
var statearr_23093_23124 = state_23061__$1;
(statearr_23093_23124[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (16))){
var inst_23045 = (state_23061[(2)]);
var state_23061__$1 = state_23061;
var statearr_23094_23125 = state_23061__$1;
(statearr_23094_23125[(2)] = inst_23045);

(statearr_23094_23125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (10))){
var inst_23016 = (state_23061[(8)]);
var inst_23014 = (state_23061[(10)]);
var inst_23021 = cljs.core._nth.call(null,inst_23014,inst_23016);
var state_23061__$1 = state_23061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23061__$1,(13),out,inst_23021);
} else {
if((state_val_23062 === (18))){
var inst_23027 = (state_23061[(7)]);
var inst_23036 = cljs.core.first.call(null,inst_23027);
var state_23061__$1 = state_23061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23061__$1,(20),out,inst_23036);
} else {
if((state_val_23062 === (8))){
var inst_23016 = (state_23061[(8)]);
var inst_23015 = (state_23061[(11)]);
var inst_23018 = (inst_23016 < inst_23015);
var inst_23019 = inst_23018;
var state_23061__$1 = state_23061;
if(cljs.core.truth_(inst_23019)){
var statearr_23095_23126 = state_23061__$1;
(statearr_23095_23126[(1)] = (10));

} else {
var statearr_23096_23127 = state_23061__$1;
(statearr_23096_23127[(1)] = (11));

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
});})(c__20626__auto__))
;
return ((function (switch__20514__auto__,c__20626__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20515__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20515__auto____0 = (function (){
var statearr_23100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23100[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20515__auto__);

(statearr_23100[(1)] = (1));

return statearr_23100;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20515__auto____1 = (function (state_23061){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_23061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e23101){if((e23101 instanceof Object)){
var ex__20518__auto__ = e23101;
var statearr_23102_23128 = state_23061;
(statearr_23102_23128[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23129 = state_23061;
state_23061 = G__23129;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20515__auto__ = function(state_23061){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20515__auto____1.call(this,state_23061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20515__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20515__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto__))
})();
var state__20628__auto__ = (function (){var statearr_23103 = f__20627__auto__.call(null);
(statearr_23103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto__);

return statearr_23103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto__))
);

return c__20626__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23130 = [];
var len__19529__auto___23133 = arguments.length;
var i__19530__auto___23134 = (0);
while(true){
if((i__19530__auto___23134 < len__19529__auto___23133)){
args23130.push((arguments[i__19530__auto___23134]));

var G__23135 = (i__19530__auto___23134 + (1));
i__19530__auto___23134 = G__23135;
continue;
} else {
}
break;
}

var G__23132 = args23130.length;
switch (G__23132) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23130.length)].join('')));

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
var args23137 = [];
var len__19529__auto___23140 = arguments.length;
var i__19530__auto___23141 = (0);
while(true){
if((i__19530__auto___23141 < len__19529__auto___23140)){
args23137.push((arguments[i__19530__auto___23141]));

var G__23142 = (i__19530__auto___23141 + (1));
i__19530__auto___23141 = G__23142;
continue;
} else {
}
break;
}

var G__23139 = args23137.length;
switch (G__23139) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23137.length)].join('')));

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
var args23144 = [];
var len__19529__auto___23195 = arguments.length;
var i__19530__auto___23196 = (0);
while(true){
if((i__19530__auto___23196 < len__19529__auto___23195)){
args23144.push((arguments[i__19530__auto___23196]));

var G__23197 = (i__19530__auto___23196 + (1));
i__19530__auto___23196 = G__23197;
continue;
} else {
}
break;
}

var G__23146 = args23144.length;
switch (G__23146) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23144.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20626__auto___23199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto___23199,out){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto___23199,out){
return (function (state_23170){
var state_val_23171 = (state_23170[(1)]);
if((state_val_23171 === (7))){
var inst_23165 = (state_23170[(2)]);
var state_23170__$1 = state_23170;
var statearr_23172_23200 = state_23170__$1;
(statearr_23172_23200[(2)] = inst_23165);

(statearr_23172_23200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23171 === (1))){
var inst_23147 = null;
var state_23170__$1 = (function (){var statearr_23173 = state_23170;
(statearr_23173[(7)] = inst_23147);

return statearr_23173;
})();
var statearr_23174_23201 = state_23170__$1;
(statearr_23174_23201[(2)] = null);

(statearr_23174_23201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23171 === (4))){
var inst_23150 = (state_23170[(8)]);
var inst_23150__$1 = (state_23170[(2)]);
var inst_23151 = (inst_23150__$1 == null);
var inst_23152 = cljs.core.not.call(null,inst_23151);
var state_23170__$1 = (function (){var statearr_23175 = state_23170;
(statearr_23175[(8)] = inst_23150__$1);

return statearr_23175;
})();
if(inst_23152){
var statearr_23176_23202 = state_23170__$1;
(statearr_23176_23202[(1)] = (5));

} else {
var statearr_23177_23203 = state_23170__$1;
(statearr_23177_23203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23171 === (6))){
var state_23170__$1 = state_23170;
var statearr_23178_23204 = state_23170__$1;
(statearr_23178_23204[(2)] = null);

(statearr_23178_23204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23171 === (3))){
var inst_23167 = (state_23170[(2)]);
var inst_23168 = cljs.core.async.close_BANG_.call(null,out);
var state_23170__$1 = (function (){var statearr_23179 = state_23170;
(statearr_23179[(9)] = inst_23167);

return statearr_23179;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23170__$1,inst_23168);
} else {
if((state_val_23171 === (2))){
var state_23170__$1 = state_23170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23170__$1,(4),ch);
} else {
if((state_val_23171 === (11))){
var inst_23150 = (state_23170[(8)]);
var inst_23159 = (state_23170[(2)]);
var inst_23147 = inst_23150;
var state_23170__$1 = (function (){var statearr_23180 = state_23170;
(statearr_23180[(10)] = inst_23159);

(statearr_23180[(7)] = inst_23147);

return statearr_23180;
})();
var statearr_23181_23205 = state_23170__$1;
(statearr_23181_23205[(2)] = null);

(statearr_23181_23205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23171 === (9))){
var inst_23150 = (state_23170[(8)]);
var state_23170__$1 = state_23170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23170__$1,(11),out,inst_23150);
} else {
if((state_val_23171 === (5))){
var inst_23150 = (state_23170[(8)]);
var inst_23147 = (state_23170[(7)]);
var inst_23154 = cljs.core._EQ_.call(null,inst_23150,inst_23147);
var state_23170__$1 = state_23170;
if(inst_23154){
var statearr_23183_23206 = state_23170__$1;
(statearr_23183_23206[(1)] = (8));

} else {
var statearr_23184_23207 = state_23170__$1;
(statearr_23184_23207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23171 === (10))){
var inst_23162 = (state_23170[(2)]);
var state_23170__$1 = state_23170;
var statearr_23185_23208 = state_23170__$1;
(statearr_23185_23208[(2)] = inst_23162);

(statearr_23185_23208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23171 === (8))){
var inst_23147 = (state_23170[(7)]);
var tmp23182 = inst_23147;
var inst_23147__$1 = tmp23182;
var state_23170__$1 = (function (){var statearr_23186 = state_23170;
(statearr_23186[(7)] = inst_23147__$1);

return statearr_23186;
})();
var statearr_23187_23209 = state_23170__$1;
(statearr_23187_23209[(2)] = null);

(statearr_23187_23209[(1)] = (2));


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
});})(c__20626__auto___23199,out))
;
return ((function (switch__20514__auto__,c__20626__auto___23199,out){
return (function() {
var cljs$core$async$state_machine__20515__auto__ = null;
var cljs$core$async$state_machine__20515__auto____0 = (function (){
var statearr_23191 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23191[(0)] = cljs$core$async$state_machine__20515__auto__);

(statearr_23191[(1)] = (1));

return statearr_23191;
});
var cljs$core$async$state_machine__20515__auto____1 = (function (state_23170){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_23170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e23192){if((e23192 instanceof Object)){
var ex__20518__auto__ = e23192;
var statearr_23193_23210 = state_23170;
(statearr_23193_23210[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23211 = state_23170;
state_23170 = G__23211;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$state_machine__20515__auto__ = function(state_23170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20515__auto____1.call(this,state_23170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20515__auto____0;
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20515__auto____1;
return cljs$core$async$state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto___23199,out))
})();
var state__20628__auto__ = (function (){var statearr_23194 = f__20627__auto__.call(null);
(statearr_23194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto___23199);

return statearr_23194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto___23199,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23212 = [];
var len__19529__auto___23282 = arguments.length;
var i__19530__auto___23283 = (0);
while(true){
if((i__19530__auto___23283 < len__19529__auto___23282)){
args23212.push((arguments[i__19530__auto___23283]));

var G__23284 = (i__19530__auto___23283 + (1));
i__19530__auto___23283 = G__23284;
continue;
} else {
}
break;
}

var G__23214 = args23212.length;
switch (G__23214) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23212.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20626__auto___23286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto___23286,out){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto___23286,out){
return (function (state_23252){
var state_val_23253 = (state_23252[(1)]);
if((state_val_23253 === (7))){
var inst_23248 = (state_23252[(2)]);
var state_23252__$1 = state_23252;
var statearr_23254_23287 = state_23252__$1;
(statearr_23254_23287[(2)] = inst_23248);

(statearr_23254_23287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (1))){
var inst_23215 = (new Array(n));
var inst_23216 = inst_23215;
var inst_23217 = (0);
var state_23252__$1 = (function (){var statearr_23255 = state_23252;
(statearr_23255[(7)] = inst_23217);

(statearr_23255[(8)] = inst_23216);

return statearr_23255;
})();
var statearr_23256_23288 = state_23252__$1;
(statearr_23256_23288[(2)] = null);

(statearr_23256_23288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (4))){
var inst_23220 = (state_23252[(9)]);
var inst_23220__$1 = (state_23252[(2)]);
var inst_23221 = (inst_23220__$1 == null);
var inst_23222 = cljs.core.not.call(null,inst_23221);
var state_23252__$1 = (function (){var statearr_23257 = state_23252;
(statearr_23257[(9)] = inst_23220__$1);

return statearr_23257;
})();
if(inst_23222){
var statearr_23258_23289 = state_23252__$1;
(statearr_23258_23289[(1)] = (5));

} else {
var statearr_23259_23290 = state_23252__$1;
(statearr_23259_23290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (15))){
var inst_23242 = (state_23252[(2)]);
var state_23252__$1 = state_23252;
var statearr_23260_23291 = state_23252__$1;
(statearr_23260_23291[(2)] = inst_23242);

(statearr_23260_23291[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (13))){
var state_23252__$1 = state_23252;
var statearr_23261_23292 = state_23252__$1;
(statearr_23261_23292[(2)] = null);

(statearr_23261_23292[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (6))){
var inst_23217 = (state_23252[(7)]);
var inst_23238 = (inst_23217 > (0));
var state_23252__$1 = state_23252;
if(cljs.core.truth_(inst_23238)){
var statearr_23262_23293 = state_23252__$1;
(statearr_23262_23293[(1)] = (12));

} else {
var statearr_23263_23294 = state_23252__$1;
(statearr_23263_23294[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (3))){
var inst_23250 = (state_23252[(2)]);
var state_23252__$1 = state_23252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23252__$1,inst_23250);
} else {
if((state_val_23253 === (12))){
var inst_23216 = (state_23252[(8)]);
var inst_23240 = cljs.core.vec.call(null,inst_23216);
var state_23252__$1 = state_23252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23252__$1,(15),out,inst_23240);
} else {
if((state_val_23253 === (2))){
var state_23252__$1 = state_23252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23252__$1,(4),ch);
} else {
if((state_val_23253 === (11))){
var inst_23232 = (state_23252[(2)]);
var inst_23233 = (new Array(n));
var inst_23216 = inst_23233;
var inst_23217 = (0);
var state_23252__$1 = (function (){var statearr_23264 = state_23252;
(statearr_23264[(10)] = inst_23232);

(statearr_23264[(7)] = inst_23217);

(statearr_23264[(8)] = inst_23216);

return statearr_23264;
})();
var statearr_23265_23295 = state_23252__$1;
(statearr_23265_23295[(2)] = null);

(statearr_23265_23295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (9))){
var inst_23216 = (state_23252[(8)]);
var inst_23230 = cljs.core.vec.call(null,inst_23216);
var state_23252__$1 = state_23252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23252__$1,(11),out,inst_23230);
} else {
if((state_val_23253 === (5))){
var inst_23217 = (state_23252[(7)]);
var inst_23216 = (state_23252[(8)]);
var inst_23225 = (state_23252[(11)]);
var inst_23220 = (state_23252[(9)]);
var inst_23224 = (inst_23216[inst_23217] = inst_23220);
var inst_23225__$1 = (inst_23217 + (1));
var inst_23226 = (inst_23225__$1 < n);
var state_23252__$1 = (function (){var statearr_23266 = state_23252;
(statearr_23266[(12)] = inst_23224);

(statearr_23266[(11)] = inst_23225__$1);

return statearr_23266;
})();
if(cljs.core.truth_(inst_23226)){
var statearr_23267_23296 = state_23252__$1;
(statearr_23267_23296[(1)] = (8));

} else {
var statearr_23268_23297 = state_23252__$1;
(statearr_23268_23297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (14))){
var inst_23245 = (state_23252[(2)]);
var inst_23246 = cljs.core.async.close_BANG_.call(null,out);
var state_23252__$1 = (function (){var statearr_23270 = state_23252;
(statearr_23270[(13)] = inst_23245);

return statearr_23270;
})();
var statearr_23271_23298 = state_23252__$1;
(statearr_23271_23298[(2)] = inst_23246);

(statearr_23271_23298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (10))){
var inst_23236 = (state_23252[(2)]);
var state_23252__$1 = state_23252;
var statearr_23272_23299 = state_23252__$1;
(statearr_23272_23299[(2)] = inst_23236);

(statearr_23272_23299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (8))){
var inst_23216 = (state_23252[(8)]);
var inst_23225 = (state_23252[(11)]);
var tmp23269 = inst_23216;
var inst_23216__$1 = tmp23269;
var inst_23217 = inst_23225;
var state_23252__$1 = (function (){var statearr_23273 = state_23252;
(statearr_23273[(7)] = inst_23217);

(statearr_23273[(8)] = inst_23216__$1);

return statearr_23273;
})();
var statearr_23274_23300 = state_23252__$1;
(statearr_23274_23300[(2)] = null);

(statearr_23274_23300[(1)] = (2));


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
});})(c__20626__auto___23286,out))
;
return ((function (switch__20514__auto__,c__20626__auto___23286,out){
return (function() {
var cljs$core$async$state_machine__20515__auto__ = null;
var cljs$core$async$state_machine__20515__auto____0 = (function (){
var statearr_23278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23278[(0)] = cljs$core$async$state_machine__20515__auto__);

(statearr_23278[(1)] = (1));

return statearr_23278;
});
var cljs$core$async$state_machine__20515__auto____1 = (function (state_23252){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_23252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e23279){if((e23279 instanceof Object)){
var ex__20518__auto__ = e23279;
var statearr_23280_23301 = state_23252;
(statearr_23280_23301[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23302 = state_23252;
state_23252 = G__23302;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$state_machine__20515__auto__ = function(state_23252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20515__auto____1.call(this,state_23252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20515__auto____0;
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20515__auto____1;
return cljs$core$async$state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto___23286,out))
})();
var state__20628__auto__ = (function (){var statearr_23281 = f__20627__auto__.call(null);
(statearr_23281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto___23286);

return statearr_23281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto___23286,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23303 = [];
var len__19529__auto___23377 = arguments.length;
var i__19530__auto___23378 = (0);
while(true){
if((i__19530__auto___23378 < len__19529__auto___23377)){
args23303.push((arguments[i__19530__auto___23378]));

var G__23379 = (i__19530__auto___23378 + (1));
i__19530__auto___23378 = G__23379;
continue;
} else {
}
break;
}

var G__23305 = args23303.length;
switch (G__23305) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23303.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20626__auto___23381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20626__auto___23381,out){
return (function (){
var f__20627__auto__ = (function (){var switch__20514__auto__ = ((function (c__20626__auto___23381,out){
return (function (state_23347){
var state_val_23348 = (state_23347[(1)]);
if((state_val_23348 === (7))){
var inst_23343 = (state_23347[(2)]);
var state_23347__$1 = state_23347;
var statearr_23349_23382 = state_23347__$1;
(statearr_23349_23382[(2)] = inst_23343);

(statearr_23349_23382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (1))){
var inst_23306 = [];
var inst_23307 = inst_23306;
var inst_23308 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23347__$1 = (function (){var statearr_23350 = state_23347;
(statearr_23350[(7)] = inst_23307);

(statearr_23350[(8)] = inst_23308);

return statearr_23350;
})();
var statearr_23351_23383 = state_23347__$1;
(statearr_23351_23383[(2)] = null);

(statearr_23351_23383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (4))){
var inst_23311 = (state_23347[(9)]);
var inst_23311__$1 = (state_23347[(2)]);
var inst_23312 = (inst_23311__$1 == null);
var inst_23313 = cljs.core.not.call(null,inst_23312);
var state_23347__$1 = (function (){var statearr_23352 = state_23347;
(statearr_23352[(9)] = inst_23311__$1);

return statearr_23352;
})();
if(inst_23313){
var statearr_23353_23384 = state_23347__$1;
(statearr_23353_23384[(1)] = (5));

} else {
var statearr_23354_23385 = state_23347__$1;
(statearr_23354_23385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (15))){
var inst_23337 = (state_23347[(2)]);
var state_23347__$1 = state_23347;
var statearr_23355_23386 = state_23347__$1;
(statearr_23355_23386[(2)] = inst_23337);

(statearr_23355_23386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (13))){
var state_23347__$1 = state_23347;
var statearr_23356_23387 = state_23347__$1;
(statearr_23356_23387[(2)] = null);

(statearr_23356_23387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (6))){
var inst_23307 = (state_23347[(7)]);
var inst_23332 = inst_23307.length;
var inst_23333 = (inst_23332 > (0));
var state_23347__$1 = state_23347;
if(cljs.core.truth_(inst_23333)){
var statearr_23357_23388 = state_23347__$1;
(statearr_23357_23388[(1)] = (12));

} else {
var statearr_23358_23389 = state_23347__$1;
(statearr_23358_23389[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (3))){
var inst_23345 = (state_23347[(2)]);
var state_23347__$1 = state_23347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23347__$1,inst_23345);
} else {
if((state_val_23348 === (12))){
var inst_23307 = (state_23347[(7)]);
var inst_23335 = cljs.core.vec.call(null,inst_23307);
var state_23347__$1 = state_23347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23347__$1,(15),out,inst_23335);
} else {
if((state_val_23348 === (2))){
var state_23347__$1 = state_23347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23347__$1,(4),ch);
} else {
if((state_val_23348 === (11))){
var inst_23315 = (state_23347[(10)]);
var inst_23311 = (state_23347[(9)]);
var inst_23325 = (state_23347[(2)]);
var inst_23326 = [];
var inst_23327 = inst_23326.push(inst_23311);
var inst_23307 = inst_23326;
var inst_23308 = inst_23315;
var state_23347__$1 = (function (){var statearr_23359 = state_23347;
(statearr_23359[(7)] = inst_23307);

(statearr_23359[(11)] = inst_23327);

(statearr_23359[(8)] = inst_23308);

(statearr_23359[(12)] = inst_23325);

return statearr_23359;
})();
var statearr_23360_23390 = state_23347__$1;
(statearr_23360_23390[(2)] = null);

(statearr_23360_23390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (9))){
var inst_23307 = (state_23347[(7)]);
var inst_23323 = cljs.core.vec.call(null,inst_23307);
var state_23347__$1 = state_23347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23347__$1,(11),out,inst_23323);
} else {
if((state_val_23348 === (5))){
var inst_23315 = (state_23347[(10)]);
var inst_23311 = (state_23347[(9)]);
var inst_23308 = (state_23347[(8)]);
var inst_23315__$1 = f.call(null,inst_23311);
var inst_23316 = cljs.core._EQ_.call(null,inst_23315__$1,inst_23308);
var inst_23317 = cljs.core.keyword_identical_QMARK_.call(null,inst_23308,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23318 = (inst_23316) || (inst_23317);
var state_23347__$1 = (function (){var statearr_23361 = state_23347;
(statearr_23361[(10)] = inst_23315__$1);

return statearr_23361;
})();
if(cljs.core.truth_(inst_23318)){
var statearr_23362_23391 = state_23347__$1;
(statearr_23362_23391[(1)] = (8));

} else {
var statearr_23363_23392 = state_23347__$1;
(statearr_23363_23392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (14))){
var inst_23340 = (state_23347[(2)]);
var inst_23341 = cljs.core.async.close_BANG_.call(null,out);
var state_23347__$1 = (function (){var statearr_23365 = state_23347;
(statearr_23365[(13)] = inst_23340);

return statearr_23365;
})();
var statearr_23366_23393 = state_23347__$1;
(statearr_23366_23393[(2)] = inst_23341);

(statearr_23366_23393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (10))){
var inst_23330 = (state_23347[(2)]);
var state_23347__$1 = state_23347;
var statearr_23367_23394 = state_23347__$1;
(statearr_23367_23394[(2)] = inst_23330);

(statearr_23367_23394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (8))){
var inst_23315 = (state_23347[(10)]);
var inst_23307 = (state_23347[(7)]);
var inst_23311 = (state_23347[(9)]);
var inst_23320 = inst_23307.push(inst_23311);
var tmp23364 = inst_23307;
var inst_23307__$1 = tmp23364;
var inst_23308 = inst_23315;
var state_23347__$1 = (function (){var statearr_23368 = state_23347;
(statearr_23368[(14)] = inst_23320);

(statearr_23368[(7)] = inst_23307__$1);

(statearr_23368[(8)] = inst_23308);

return statearr_23368;
})();
var statearr_23369_23395 = state_23347__$1;
(statearr_23369_23395[(2)] = null);

(statearr_23369_23395[(1)] = (2));


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
});})(c__20626__auto___23381,out))
;
return ((function (switch__20514__auto__,c__20626__auto___23381,out){
return (function() {
var cljs$core$async$state_machine__20515__auto__ = null;
var cljs$core$async$state_machine__20515__auto____0 = (function (){
var statearr_23373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23373[(0)] = cljs$core$async$state_machine__20515__auto__);

(statearr_23373[(1)] = (1));

return statearr_23373;
});
var cljs$core$async$state_machine__20515__auto____1 = (function (state_23347){
while(true){
var ret_value__20516__auto__ = (function (){try{while(true){
var result__20517__auto__ = switch__20514__auto__.call(null,state_23347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20517__auto__;
}
break;
}
}catch (e23374){if((e23374 instanceof Object)){
var ex__20518__auto__ = e23374;
var statearr_23375_23396 = state_23347;
(statearr_23375_23396[(5)] = ex__20518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23397 = state_23347;
state_23347 = G__23397;
continue;
} else {
return ret_value__20516__auto__;
}
break;
}
});
cljs$core$async$state_machine__20515__auto__ = function(state_23347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20515__auto____1.call(this,state_23347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20515__auto____0;
cljs$core$async$state_machine__20515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20515__auto____1;
return cljs$core$async$state_machine__20515__auto__;
})()
;})(switch__20514__auto__,c__20626__auto___23381,out))
})();
var state__20628__auto__ = (function (){var statearr_23376 = f__20627__auto__.call(null);
(statearr_23376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20626__auto___23381);

return statearr_23376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20628__auto__);
});})(c__20626__auto___23381,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1470497433173