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
var args21675 = [];
var len__19529__auto___21681 = arguments.length;
var i__19530__auto___21682 = (0);
while(true){
if((i__19530__auto___21682 < len__19529__auto___21681)){
args21675.push((arguments[i__19530__auto___21682]));

var G__21683 = (i__19530__auto___21682 + (1));
i__19530__auto___21682 = G__21683;
continue;
} else {
}
break;
}

var G__21677 = args21675.length;
switch (G__21677) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21675.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21678 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21678 = (function (f,blockable,meta21679){
this.f = f;
this.blockable = blockable;
this.meta21679 = meta21679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21680,meta21679__$1){
var self__ = this;
var _21680__$1 = this;
return (new cljs.core.async.t_cljs$core$async21678(self__.f,self__.blockable,meta21679__$1));
});

cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21680){
var self__ = this;
var _21680__$1 = this;
return self__.meta21679;
});

cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21679","meta21679",1474553362,null)], null);
});

cljs.core.async.t_cljs$core$async21678.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21678";

cljs.core.async.t_cljs$core$async21678.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async21678");
});

cljs.core.async.__GT_t_cljs$core$async21678 = (function cljs$core$async$__GT_t_cljs$core$async21678(f__$1,blockable__$1,meta21679){
return (new cljs.core.async.t_cljs$core$async21678(f__$1,blockable__$1,meta21679));
});

}

return (new cljs.core.async.t_cljs$core$async21678(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args21687 = [];
var len__19529__auto___21690 = arguments.length;
var i__19530__auto___21691 = (0);
while(true){
if((i__19530__auto___21691 < len__19529__auto___21690)){
args21687.push((arguments[i__19530__auto___21691]));

var G__21692 = (i__19530__auto___21691 + (1));
i__19530__auto___21691 = G__21692;
continue;
} else {
}
break;
}

var G__21689 = args21687.length;
switch (G__21689) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21687.length)].join('')));

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
var args21694 = [];
var len__19529__auto___21697 = arguments.length;
var i__19530__auto___21698 = (0);
while(true){
if((i__19530__auto___21698 < len__19529__auto___21697)){
args21694.push((arguments[i__19530__auto___21698]));

var G__21699 = (i__19530__auto___21698 + (1));
i__19530__auto___21698 = G__21699;
continue;
} else {
}
break;
}

var G__21696 = args21694.length;
switch (G__21696) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21694.length)].join('')));

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
var args21701 = [];
var len__19529__auto___21704 = arguments.length;
var i__19530__auto___21705 = (0);
while(true){
if((i__19530__auto___21705 < len__19529__auto___21704)){
args21701.push((arguments[i__19530__auto___21705]));

var G__21706 = (i__19530__auto___21705 + (1));
i__19530__auto___21705 = G__21706;
continue;
} else {
}
break;
}

var G__21703 = args21701.length;
switch (G__21703) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21701.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21708 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21708);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21708,ret){
return (function (){
return fn1.call(null,val_21708);
});})(val_21708,ret))
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
var args21709 = [];
var len__19529__auto___21712 = arguments.length;
var i__19530__auto___21713 = (0);
while(true){
if((i__19530__auto___21713 < len__19529__auto___21712)){
args21709.push((arguments[i__19530__auto___21713]));

var G__21714 = (i__19530__auto___21713 + (1));
i__19530__auto___21713 = G__21714;
continue;
} else {
}
break;
}

var G__21711 = args21709.length;
switch (G__21711) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21709.length)].join('')));

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
var n__19374__auto___21716 = n;
var x_21717 = (0);
while(true){
if((x_21717 < n__19374__auto___21716)){
(a[x_21717] = (0));

var G__21718 = (x_21717 + (1));
x_21717 = G__21718;
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

var G__21719 = (i + (1));
i = G__21719;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21723 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21723 = (function (alt_flag,flag,meta21724){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21724 = meta21724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21725,meta21724__$1){
var self__ = this;
var _21725__$1 = this;
return (new cljs.core.async.t_cljs$core$async21723(self__.alt_flag,self__.flag,meta21724__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21723.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21725){
var self__ = this;
var _21725__$1 = this;
return self__.meta21724;
});})(flag))
;

cljs.core.async.t_cljs$core$async21723.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21723.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21723.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21723.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21723.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21724","meta21724",-1220577090,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21723.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21723";

cljs.core.async.t_cljs$core$async21723.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async21723");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21723 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21723(alt_flag__$1,flag__$1,meta21724){
return (new cljs.core.async.t_cljs$core$async21723(alt_flag__$1,flag__$1,meta21724));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21723(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21729 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21729 = (function (alt_handler,flag,cb,meta21730){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21730 = meta21730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21731,meta21730__$1){
var self__ = this;
var _21731__$1 = this;
return (new cljs.core.async.t_cljs$core$async21729(self__.alt_handler,self__.flag,self__.cb,meta21730__$1));
});

cljs.core.async.t_cljs$core$async21729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21731){
var self__ = this;
var _21731__$1 = this;
return self__.meta21730;
});

cljs.core.async.t_cljs$core$async21729.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21729.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21729.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21729.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21730","meta21730",-2140725912,null)], null);
});

cljs.core.async.t_cljs$core$async21729.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21729";

cljs.core.async.t_cljs$core$async21729.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async21729");
});

cljs.core.async.__GT_t_cljs$core$async21729 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21729(alt_handler__$1,flag__$1,cb__$1,meta21730){
return (new cljs.core.async.t_cljs$core$async21729(alt_handler__$1,flag__$1,cb__$1,meta21730));
});

}

return (new cljs.core.async.t_cljs$core$async21729(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21732_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21732_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21733_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21733_SHARP_,port], null));
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
var G__21734 = (i + (1));
i = G__21734;
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
var len__19529__auto___21740 = arguments.length;
var i__19530__auto___21741 = (0);
while(true){
if((i__19530__auto___21741 < len__19529__auto___21740)){
args__19536__auto__.push((arguments[i__19530__auto___21741]));

var G__21742 = (i__19530__auto___21741 + (1));
i__19530__auto___21741 = G__21742;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21737){
var map__21738 = p__21737;
var map__21738__$1 = ((((!((map__21738 == null)))?((((map__21738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21738):map__21738);
var opts = map__21738__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21735){
var G__21736 = cljs.core.first.call(null,seq21735);
var seq21735__$1 = cljs.core.next.call(null,seq21735);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21736,seq21735__$1);
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
var args21743 = [];
var len__19529__auto___21793 = arguments.length;
var i__19530__auto___21794 = (0);
while(true){
if((i__19530__auto___21794 < len__19529__auto___21793)){
args21743.push((arguments[i__19530__auto___21794]));

var G__21795 = (i__19530__auto___21794 + (1));
i__19530__auto___21794 = G__21795;
continue;
} else {
}
break;
}

var G__21745 = args21743.length;
switch (G__21745) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21743.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21630__auto___21797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto___21797){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto___21797){
return (function (state_21769){
var state_val_21770 = (state_21769[(1)]);
if((state_val_21770 === (7))){
var inst_21765 = (state_21769[(2)]);
var state_21769__$1 = state_21769;
var statearr_21771_21798 = state_21769__$1;
(statearr_21771_21798[(2)] = inst_21765);

(statearr_21771_21798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (1))){
var state_21769__$1 = state_21769;
var statearr_21772_21799 = state_21769__$1;
(statearr_21772_21799[(2)] = null);

(statearr_21772_21799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (4))){
var inst_21748 = (state_21769[(7)]);
var inst_21748__$1 = (state_21769[(2)]);
var inst_21749 = (inst_21748__$1 == null);
var state_21769__$1 = (function (){var statearr_21773 = state_21769;
(statearr_21773[(7)] = inst_21748__$1);

return statearr_21773;
})();
if(cljs.core.truth_(inst_21749)){
var statearr_21774_21800 = state_21769__$1;
(statearr_21774_21800[(1)] = (5));

} else {
var statearr_21775_21801 = state_21769__$1;
(statearr_21775_21801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (13))){
var state_21769__$1 = state_21769;
var statearr_21776_21802 = state_21769__$1;
(statearr_21776_21802[(2)] = null);

(statearr_21776_21802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (6))){
var inst_21748 = (state_21769[(7)]);
var state_21769__$1 = state_21769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21769__$1,(11),to,inst_21748);
} else {
if((state_val_21770 === (3))){
var inst_21767 = (state_21769[(2)]);
var state_21769__$1 = state_21769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21769__$1,inst_21767);
} else {
if((state_val_21770 === (12))){
var state_21769__$1 = state_21769;
var statearr_21777_21803 = state_21769__$1;
(statearr_21777_21803[(2)] = null);

(statearr_21777_21803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (2))){
var state_21769__$1 = state_21769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21769__$1,(4),from);
} else {
if((state_val_21770 === (11))){
var inst_21758 = (state_21769[(2)]);
var state_21769__$1 = state_21769;
if(cljs.core.truth_(inst_21758)){
var statearr_21778_21804 = state_21769__$1;
(statearr_21778_21804[(1)] = (12));

} else {
var statearr_21779_21805 = state_21769__$1;
(statearr_21779_21805[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (9))){
var state_21769__$1 = state_21769;
var statearr_21780_21806 = state_21769__$1;
(statearr_21780_21806[(2)] = null);

(statearr_21780_21806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (5))){
var state_21769__$1 = state_21769;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21781_21807 = state_21769__$1;
(statearr_21781_21807[(1)] = (8));

} else {
var statearr_21782_21808 = state_21769__$1;
(statearr_21782_21808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (14))){
var inst_21763 = (state_21769[(2)]);
var state_21769__$1 = state_21769;
var statearr_21783_21809 = state_21769__$1;
(statearr_21783_21809[(2)] = inst_21763);

(statearr_21783_21809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (10))){
var inst_21755 = (state_21769[(2)]);
var state_21769__$1 = state_21769;
var statearr_21784_21810 = state_21769__$1;
(statearr_21784_21810[(2)] = inst_21755);

(statearr_21784_21810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (8))){
var inst_21752 = cljs.core.async.close_BANG_.call(null,to);
var state_21769__$1 = state_21769;
var statearr_21785_21811 = state_21769__$1;
(statearr_21785_21811[(2)] = inst_21752);

(statearr_21785_21811[(1)] = (10));


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
});})(c__21630__auto___21797))
;
return ((function (switch__21518__auto__,c__21630__auto___21797){
return (function() {
var cljs$core$async$state_machine__21519__auto__ = null;
var cljs$core$async$state_machine__21519__auto____0 = (function (){
var statearr_21789 = [null,null,null,null,null,null,null,null];
(statearr_21789[(0)] = cljs$core$async$state_machine__21519__auto__);

(statearr_21789[(1)] = (1));

return statearr_21789;
});
var cljs$core$async$state_machine__21519__auto____1 = (function (state_21769){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_21769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e21790){if((e21790 instanceof Object)){
var ex__21522__auto__ = e21790;
var statearr_21791_21812 = state_21769;
(statearr_21791_21812[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21813 = state_21769;
state_21769 = G__21813;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$state_machine__21519__auto__ = function(state_21769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21519__auto____1.call(this,state_21769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21519__auto____0;
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21519__auto____1;
return cljs$core$async$state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto___21797))
})();
var state__21632__auto__ = (function (){var statearr_21792 = f__21631__auto__.call(null);
(statearr_21792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto___21797);

return statearr_21792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto___21797))
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
return (function (p__21997){
var vec__21998 = p__21997;
var v = cljs.core.nth.call(null,vec__21998,(0),null);
var p = cljs.core.nth.call(null,vec__21998,(1),null);
var job = vec__21998;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21630__auto___22180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto___22180,res,vec__21998,v,p,job,jobs,results){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto___22180,res,vec__21998,v,p,job,jobs,results){
return (function (state_22003){
var state_val_22004 = (state_22003[(1)]);
if((state_val_22004 === (1))){
var state_22003__$1 = state_22003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22003__$1,(2),res,v);
} else {
if((state_val_22004 === (2))){
var inst_22000 = (state_22003[(2)]);
var inst_22001 = cljs.core.async.close_BANG_.call(null,res);
var state_22003__$1 = (function (){var statearr_22005 = state_22003;
(statearr_22005[(7)] = inst_22000);

return statearr_22005;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22003__$1,inst_22001);
} else {
return null;
}
}
});})(c__21630__auto___22180,res,vec__21998,v,p,job,jobs,results))
;
return ((function (switch__21518__auto__,c__21630__auto___22180,res,vec__21998,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____0 = (function (){
var statearr_22009 = [null,null,null,null,null,null,null,null];
(statearr_22009[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__);

(statearr_22009[(1)] = (1));

return statearr_22009;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____1 = (function (state_22003){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_22003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e22010){if((e22010 instanceof Object)){
var ex__21522__auto__ = e22010;
var statearr_22011_22181 = state_22003;
(statearr_22011_22181[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22182 = state_22003;
state_22003 = G__22182;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__ = function(state_22003){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____1.call(this,state_22003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto___22180,res,vec__21998,v,p,job,jobs,results))
})();
var state__21632__auto__ = (function (){var statearr_22012 = f__21631__auto__.call(null);
(statearr_22012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto___22180);

return statearr_22012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto___22180,res,vec__21998,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22013){
var vec__22014 = p__22013;
var v = cljs.core.nth.call(null,vec__22014,(0),null);
var p = cljs.core.nth.call(null,vec__22014,(1),null);
var job = vec__22014;
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
var n__19374__auto___22183 = n;
var __22184 = (0);
while(true){
if((__22184 < n__19374__auto___22183)){
var G__22015_22185 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22015_22185) {
case "compute":
var c__21630__auto___22187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22184,c__21630__auto___22187,G__22015_22185,n__19374__auto___22183,jobs,results,process,async){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (__22184,c__21630__auto___22187,G__22015_22185,n__19374__auto___22183,jobs,results,process,async){
return (function (state_22028){
var state_val_22029 = (state_22028[(1)]);
if((state_val_22029 === (1))){
var state_22028__$1 = state_22028;
var statearr_22030_22188 = state_22028__$1;
(statearr_22030_22188[(2)] = null);

(statearr_22030_22188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22029 === (2))){
var state_22028__$1 = state_22028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22028__$1,(4),jobs);
} else {
if((state_val_22029 === (3))){
var inst_22026 = (state_22028[(2)]);
var state_22028__$1 = state_22028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22028__$1,inst_22026);
} else {
if((state_val_22029 === (4))){
var inst_22018 = (state_22028[(2)]);
var inst_22019 = process.call(null,inst_22018);
var state_22028__$1 = state_22028;
if(cljs.core.truth_(inst_22019)){
var statearr_22031_22189 = state_22028__$1;
(statearr_22031_22189[(1)] = (5));

} else {
var statearr_22032_22190 = state_22028__$1;
(statearr_22032_22190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22029 === (5))){
var state_22028__$1 = state_22028;
var statearr_22033_22191 = state_22028__$1;
(statearr_22033_22191[(2)] = null);

(statearr_22033_22191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22029 === (6))){
var state_22028__$1 = state_22028;
var statearr_22034_22192 = state_22028__$1;
(statearr_22034_22192[(2)] = null);

(statearr_22034_22192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22029 === (7))){
var inst_22024 = (state_22028[(2)]);
var state_22028__$1 = state_22028;
var statearr_22035_22193 = state_22028__$1;
(statearr_22035_22193[(2)] = inst_22024);

(statearr_22035_22193[(1)] = (3));


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
});})(__22184,c__21630__auto___22187,G__22015_22185,n__19374__auto___22183,jobs,results,process,async))
;
return ((function (__22184,switch__21518__auto__,c__21630__auto___22187,G__22015_22185,n__19374__auto___22183,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____0 = (function (){
var statearr_22039 = [null,null,null,null,null,null,null];
(statearr_22039[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__);

(statearr_22039[(1)] = (1));

return statearr_22039;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____1 = (function (state_22028){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_22028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e22040){if((e22040 instanceof Object)){
var ex__21522__auto__ = e22040;
var statearr_22041_22194 = state_22028;
(statearr_22041_22194[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22195 = state_22028;
state_22028 = G__22195;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__ = function(state_22028){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____1.call(this,state_22028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__;
})()
;})(__22184,switch__21518__auto__,c__21630__auto___22187,G__22015_22185,n__19374__auto___22183,jobs,results,process,async))
})();
var state__21632__auto__ = (function (){var statearr_22042 = f__21631__auto__.call(null);
(statearr_22042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto___22187);

return statearr_22042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(__22184,c__21630__auto___22187,G__22015_22185,n__19374__auto___22183,jobs,results,process,async))
);


break;
case "async":
var c__21630__auto___22196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22184,c__21630__auto___22196,G__22015_22185,n__19374__auto___22183,jobs,results,process,async){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (__22184,c__21630__auto___22196,G__22015_22185,n__19374__auto___22183,jobs,results,process,async){
return (function (state_22055){
var state_val_22056 = (state_22055[(1)]);
if((state_val_22056 === (1))){
var state_22055__$1 = state_22055;
var statearr_22057_22197 = state_22055__$1;
(statearr_22057_22197[(2)] = null);

(statearr_22057_22197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (2))){
var state_22055__$1 = state_22055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22055__$1,(4),jobs);
} else {
if((state_val_22056 === (3))){
var inst_22053 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22055__$1,inst_22053);
} else {
if((state_val_22056 === (4))){
var inst_22045 = (state_22055[(2)]);
var inst_22046 = async.call(null,inst_22045);
var state_22055__$1 = state_22055;
if(cljs.core.truth_(inst_22046)){
var statearr_22058_22198 = state_22055__$1;
(statearr_22058_22198[(1)] = (5));

} else {
var statearr_22059_22199 = state_22055__$1;
(statearr_22059_22199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (5))){
var state_22055__$1 = state_22055;
var statearr_22060_22200 = state_22055__$1;
(statearr_22060_22200[(2)] = null);

(statearr_22060_22200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (6))){
var state_22055__$1 = state_22055;
var statearr_22061_22201 = state_22055__$1;
(statearr_22061_22201[(2)] = null);

(statearr_22061_22201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (7))){
var inst_22051 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
var statearr_22062_22202 = state_22055__$1;
(statearr_22062_22202[(2)] = inst_22051);

(statearr_22062_22202[(1)] = (3));


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
});})(__22184,c__21630__auto___22196,G__22015_22185,n__19374__auto___22183,jobs,results,process,async))
;
return ((function (__22184,switch__21518__auto__,c__21630__auto___22196,G__22015_22185,n__19374__auto___22183,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____0 = (function (){
var statearr_22066 = [null,null,null,null,null,null,null];
(statearr_22066[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__);

(statearr_22066[(1)] = (1));

return statearr_22066;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____1 = (function (state_22055){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_22055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e22067){if((e22067 instanceof Object)){
var ex__21522__auto__ = e22067;
var statearr_22068_22203 = state_22055;
(statearr_22068_22203[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22204 = state_22055;
state_22055 = G__22204;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__ = function(state_22055){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____1.call(this,state_22055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__;
})()
;})(__22184,switch__21518__auto__,c__21630__auto___22196,G__22015_22185,n__19374__auto___22183,jobs,results,process,async))
})();
var state__21632__auto__ = (function (){var statearr_22069 = f__21631__auto__.call(null);
(statearr_22069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto___22196);

return statearr_22069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(__22184,c__21630__auto___22196,G__22015_22185,n__19374__auto___22183,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22205 = (__22184 + (1));
__22184 = G__22205;
continue;
} else {
}
break;
}

var c__21630__auto___22206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto___22206,jobs,results,process,async){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto___22206,jobs,results,process,async){
return (function (state_22091){
var state_val_22092 = (state_22091[(1)]);
if((state_val_22092 === (1))){
var state_22091__$1 = state_22091;
var statearr_22093_22207 = state_22091__$1;
(statearr_22093_22207[(2)] = null);

(statearr_22093_22207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22092 === (2))){
var state_22091__$1 = state_22091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22091__$1,(4),from);
} else {
if((state_val_22092 === (3))){
var inst_22089 = (state_22091[(2)]);
var state_22091__$1 = state_22091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22091__$1,inst_22089);
} else {
if((state_val_22092 === (4))){
var inst_22072 = (state_22091[(7)]);
var inst_22072__$1 = (state_22091[(2)]);
var inst_22073 = (inst_22072__$1 == null);
var state_22091__$1 = (function (){var statearr_22094 = state_22091;
(statearr_22094[(7)] = inst_22072__$1);

return statearr_22094;
})();
if(cljs.core.truth_(inst_22073)){
var statearr_22095_22208 = state_22091__$1;
(statearr_22095_22208[(1)] = (5));

} else {
var statearr_22096_22209 = state_22091__$1;
(statearr_22096_22209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22092 === (5))){
var inst_22075 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22091__$1 = state_22091;
var statearr_22097_22210 = state_22091__$1;
(statearr_22097_22210[(2)] = inst_22075);

(statearr_22097_22210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22092 === (6))){
var inst_22072 = (state_22091[(7)]);
var inst_22077 = (state_22091[(8)]);
var inst_22077__$1 = cljs.core.async.chan.call(null,(1));
var inst_22078 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22079 = [inst_22072,inst_22077__$1];
var inst_22080 = (new cljs.core.PersistentVector(null,2,(5),inst_22078,inst_22079,null));
var state_22091__$1 = (function (){var statearr_22098 = state_22091;
(statearr_22098[(8)] = inst_22077__$1);

return statearr_22098;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22091__$1,(8),jobs,inst_22080);
} else {
if((state_val_22092 === (7))){
var inst_22087 = (state_22091[(2)]);
var state_22091__$1 = state_22091;
var statearr_22099_22211 = state_22091__$1;
(statearr_22099_22211[(2)] = inst_22087);

(statearr_22099_22211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22092 === (8))){
var inst_22077 = (state_22091[(8)]);
var inst_22082 = (state_22091[(2)]);
var state_22091__$1 = (function (){var statearr_22100 = state_22091;
(statearr_22100[(9)] = inst_22082);

return statearr_22100;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22091__$1,(9),results,inst_22077);
} else {
if((state_val_22092 === (9))){
var inst_22084 = (state_22091[(2)]);
var state_22091__$1 = (function (){var statearr_22101 = state_22091;
(statearr_22101[(10)] = inst_22084);

return statearr_22101;
})();
var statearr_22102_22212 = state_22091__$1;
(statearr_22102_22212[(2)] = null);

(statearr_22102_22212[(1)] = (2));


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
});})(c__21630__auto___22206,jobs,results,process,async))
;
return ((function (switch__21518__auto__,c__21630__auto___22206,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____0 = (function (){
var statearr_22106 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22106[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__);

(statearr_22106[(1)] = (1));

return statearr_22106;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____1 = (function (state_22091){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_22091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e22107){if((e22107 instanceof Object)){
var ex__21522__auto__ = e22107;
var statearr_22108_22213 = state_22091;
(statearr_22108_22213[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22214 = state_22091;
state_22091 = G__22214;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__ = function(state_22091){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____1.call(this,state_22091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto___22206,jobs,results,process,async))
})();
var state__21632__auto__ = (function (){var statearr_22109 = f__21631__auto__.call(null);
(statearr_22109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto___22206);

return statearr_22109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto___22206,jobs,results,process,async))
);


var c__21630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto__,jobs,results,process,async){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto__,jobs,results,process,async){
return (function (state_22147){
var state_val_22148 = (state_22147[(1)]);
if((state_val_22148 === (7))){
var inst_22143 = (state_22147[(2)]);
var state_22147__$1 = state_22147;
var statearr_22149_22215 = state_22147__$1;
(statearr_22149_22215[(2)] = inst_22143);

(statearr_22149_22215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22148 === (20))){
var state_22147__$1 = state_22147;
var statearr_22150_22216 = state_22147__$1;
(statearr_22150_22216[(2)] = null);

(statearr_22150_22216[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22148 === (1))){
var state_22147__$1 = state_22147;
var statearr_22151_22217 = state_22147__$1;
(statearr_22151_22217[(2)] = null);

(statearr_22151_22217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22148 === (4))){
var inst_22112 = (state_22147[(7)]);
var inst_22112__$1 = (state_22147[(2)]);
var inst_22113 = (inst_22112__$1 == null);
var state_22147__$1 = (function (){var statearr_22152 = state_22147;
(statearr_22152[(7)] = inst_22112__$1);

return statearr_22152;
})();
if(cljs.core.truth_(inst_22113)){
var statearr_22153_22218 = state_22147__$1;
(statearr_22153_22218[(1)] = (5));

} else {
var statearr_22154_22219 = state_22147__$1;
(statearr_22154_22219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22148 === (15))){
var inst_22125 = (state_22147[(8)]);
var state_22147__$1 = state_22147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22147__$1,(18),to,inst_22125);
} else {
if((state_val_22148 === (21))){
var inst_22138 = (state_22147[(2)]);
var state_22147__$1 = state_22147;
var statearr_22155_22220 = state_22147__$1;
(statearr_22155_22220[(2)] = inst_22138);

(statearr_22155_22220[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22148 === (13))){
var inst_22140 = (state_22147[(2)]);
var state_22147__$1 = (function (){var statearr_22156 = state_22147;
(statearr_22156[(9)] = inst_22140);

return statearr_22156;
})();
var statearr_22157_22221 = state_22147__$1;
(statearr_22157_22221[(2)] = null);

(statearr_22157_22221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22148 === (6))){
var inst_22112 = (state_22147[(7)]);
var state_22147__$1 = state_22147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22147__$1,(11),inst_22112);
} else {
if((state_val_22148 === (17))){
var inst_22133 = (state_22147[(2)]);
var state_22147__$1 = state_22147;
if(cljs.core.truth_(inst_22133)){
var statearr_22158_22222 = state_22147__$1;
(statearr_22158_22222[(1)] = (19));

} else {
var statearr_22159_22223 = state_22147__$1;
(statearr_22159_22223[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22148 === (3))){
var inst_22145 = (state_22147[(2)]);
var state_22147__$1 = state_22147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22147__$1,inst_22145);
} else {
if((state_val_22148 === (12))){
var inst_22122 = (state_22147[(10)]);
var state_22147__$1 = state_22147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22147__$1,(14),inst_22122);
} else {
if((state_val_22148 === (2))){
var state_22147__$1 = state_22147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22147__$1,(4),results);
} else {
if((state_val_22148 === (19))){
var state_22147__$1 = state_22147;
var statearr_22160_22224 = state_22147__$1;
(statearr_22160_22224[(2)] = null);

(statearr_22160_22224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22148 === (11))){
var inst_22122 = (state_22147[(2)]);
var state_22147__$1 = (function (){var statearr_22161 = state_22147;
(statearr_22161[(10)] = inst_22122);

return statearr_22161;
})();
var statearr_22162_22225 = state_22147__$1;
(statearr_22162_22225[(2)] = null);

(statearr_22162_22225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22148 === (9))){
var state_22147__$1 = state_22147;
var statearr_22163_22226 = state_22147__$1;
(statearr_22163_22226[(2)] = null);

(statearr_22163_22226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22148 === (5))){
var state_22147__$1 = state_22147;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22164_22227 = state_22147__$1;
(statearr_22164_22227[(1)] = (8));

} else {
var statearr_22165_22228 = state_22147__$1;
(statearr_22165_22228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22148 === (14))){
var inst_22125 = (state_22147[(8)]);
var inst_22127 = (state_22147[(11)]);
var inst_22125__$1 = (state_22147[(2)]);
var inst_22126 = (inst_22125__$1 == null);
var inst_22127__$1 = cljs.core.not.call(null,inst_22126);
var state_22147__$1 = (function (){var statearr_22166 = state_22147;
(statearr_22166[(8)] = inst_22125__$1);

(statearr_22166[(11)] = inst_22127__$1);

return statearr_22166;
})();
if(inst_22127__$1){
var statearr_22167_22229 = state_22147__$1;
(statearr_22167_22229[(1)] = (15));

} else {
var statearr_22168_22230 = state_22147__$1;
(statearr_22168_22230[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22148 === (16))){
var inst_22127 = (state_22147[(11)]);
var state_22147__$1 = state_22147;
var statearr_22169_22231 = state_22147__$1;
(statearr_22169_22231[(2)] = inst_22127);

(statearr_22169_22231[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22148 === (10))){
var inst_22119 = (state_22147[(2)]);
var state_22147__$1 = state_22147;
var statearr_22170_22232 = state_22147__$1;
(statearr_22170_22232[(2)] = inst_22119);

(statearr_22170_22232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22148 === (18))){
var inst_22130 = (state_22147[(2)]);
var state_22147__$1 = state_22147;
var statearr_22171_22233 = state_22147__$1;
(statearr_22171_22233[(2)] = inst_22130);

(statearr_22171_22233[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22148 === (8))){
var inst_22116 = cljs.core.async.close_BANG_.call(null,to);
var state_22147__$1 = state_22147;
var statearr_22172_22234 = state_22147__$1;
(statearr_22172_22234[(2)] = inst_22116);

(statearr_22172_22234[(1)] = (10));


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
});})(c__21630__auto__,jobs,results,process,async))
;
return ((function (switch__21518__auto__,c__21630__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____0 = (function (){
var statearr_22176 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22176[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__);

(statearr_22176[(1)] = (1));

return statearr_22176;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____1 = (function (state_22147){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_22147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e22177){if((e22177 instanceof Object)){
var ex__21522__auto__ = e22177;
var statearr_22178_22235 = state_22147;
(statearr_22178_22235[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22236 = state_22147;
state_22147 = G__22236;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__ = function(state_22147){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____1.call(this,state_22147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21519__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto__,jobs,results,process,async))
})();
var state__21632__auto__ = (function (){var statearr_22179 = f__21631__auto__.call(null);
(statearr_22179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto__);

return statearr_22179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto__,jobs,results,process,async))
);

return c__21630__auto__;
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
var args22237 = [];
var len__19529__auto___22240 = arguments.length;
var i__19530__auto___22241 = (0);
while(true){
if((i__19530__auto___22241 < len__19529__auto___22240)){
args22237.push((arguments[i__19530__auto___22241]));

var G__22242 = (i__19530__auto___22241 + (1));
i__19530__auto___22241 = G__22242;
continue;
} else {
}
break;
}

var G__22239 = args22237.length;
switch (G__22239) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22237.length)].join('')));

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
var args22244 = [];
var len__19529__auto___22247 = arguments.length;
var i__19530__auto___22248 = (0);
while(true){
if((i__19530__auto___22248 < len__19529__auto___22247)){
args22244.push((arguments[i__19530__auto___22248]));

var G__22249 = (i__19530__auto___22248 + (1));
i__19530__auto___22248 = G__22249;
continue;
} else {
}
break;
}

var G__22246 = args22244.length;
switch (G__22246) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22244.length)].join('')));

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
var args22251 = [];
var len__19529__auto___22304 = arguments.length;
var i__19530__auto___22305 = (0);
while(true){
if((i__19530__auto___22305 < len__19529__auto___22304)){
args22251.push((arguments[i__19530__auto___22305]));

var G__22306 = (i__19530__auto___22305 + (1));
i__19530__auto___22305 = G__22306;
continue;
} else {
}
break;
}

var G__22253 = args22251.length;
switch (G__22253) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22251.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21630__auto___22308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto___22308,tc,fc){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto___22308,tc,fc){
return (function (state_22279){
var state_val_22280 = (state_22279[(1)]);
if((state_val_22280 === (7))){
var inst_22275 = (state_22279[(2)]);
var state_22279__$1 = state_22279;
var statearr_22281_22309 = state_22279__$1;
(statearr_22281_22309[(2)] = inst_22275);

(statearr_22281_22309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22280 === (1))){
var state_22279__$1 = state_22279;
var statearr_22282_22310 = state_22279__$1;
(statearr_22282_22310[(2)] = null);

(statearr_22282_22310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22280 === (4))){
var inst_22256 = (state_22279[(7)]);
var inst_22256__$1 = (state_22279[(2)]);
var inst_22257 = (inst_22256__$1 == null);
var state_22279__$1 = (function (){var statearr_22283 = state_22279;
(statearr_22283[(7)] = inst_22256__$1);

return statearr_22283;
})();
if(cljs.core.truth_(inst_22257)){
var statearr_22284_22311 = state_22279__$1;
(statearr_22284_22311[(1)] = (5));

} else {
var statearr_22285_22312 = state_22279__$1;
(statearr_22285_22312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22280 === (13))){
var state_22279__$1 = state_22279;
var statearr_22286_22313 = state_22279__$1;
(statearr_22286_22313[(2)] = null);

(statearr_22286_22313[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22280 === (6))){
var inst_22256 = (state_22279[(7)]);
var inst_22262 = p.call(null,inst_22256);
var state_22279__$1 = state_22279;
if(cljs.core.truth_(inst_22262)){
var statearr_22287_22314 = state_22279__$1;
(statearr_22287_22314[(1)] = (9));

} else {
var statearr_22288_22315 = state_22279__$1;
(statearr_22288_22315[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22280 === (3))){
var inst_22277 = (state_22279[(2)]);
var state_22279__$1 = state_22279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22279__$1,inst_22277);
} else {
if((state_val_22280 === (12))){
var state_22279__$1 = state_22279;
var statearr_22289_22316 = state_22279__$1;
(statearr_22289_22316[(2)] = null);

(statearr_22289_22316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22280 === (2))){
var state_22279__$1 = state_22279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22279__$1,(4),ch);
} else {
if((state_val_22280 === (11))){
var inst_22256 = (state_22279[(7)]);
var inst_22266 = (state_22279[(2)]);
var state_22279__$1 = state_22279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22279__$1,(8),inst_22266,inst_22256);
} else {
if((state_val_22280 === (9))){
var state_22279__$1 = state_22279;
var statearr_22290_22317 = state_22279__$1;
(statearr_22290_22317[(2)] = tc);

(statearr_22290_22317[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22280 === (5))){
var inst_22259 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22260 = cljs.core.async.close_BANG_.call(null,fc);
var state_22279__$1 = (function (){var statearr_22291 = state_22279;
(statearr_22291[(8)] = inst_22259);

return statearr_22291;
})();
var statearr_22292_22318 = state_22279__$1;
(statearr_22292_22318[(2)] = inst_22260);

(statearr_22292_22318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22280 === (14))){
var inst_22273 = (state_22279[(2)]);
var state_22279__$1 = state_22279;
var statearr_22293_22319 = state_22279__$1;
(statearr_22293_22319[(2)] = inst_22273);

(statearr_22293_22319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22280 === (10))){
var state_22279__$1 = state_22279;
var statearr_22294_22320 = state_22279__$1;
(statearr_22294_22320[(2)] = fc);

(statearr_22294_22320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22280 === (8))){
var inst_22268 = (state_22279[(2)]);
var state_22279__$1 = state_22279;
if(cljs.core.truth_(inst_22268)){
var statearr_22295_22321 = state_22279__$1;
(statearr_22295_22321[(1)] = (12));

} else {
var statearr_22296_22322 = state_22279__$1;
(statearr_22296_22322[(1)] = (13));

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
});})(c__21630__auto___22308,tc,fc))
;
return ((function (switch__21518__auto__,c__21630__auto___22308,tc,fc){
return (function() {
var cljs$core$async$state_machine__21519__auto__ = null;
var cljs$core$async$state_machine__21519__auto____0 = (function (){
var statearr_22300 = [null,null,null,null,null,null,null,null,null];
(statearr_22300[(0)] = cljs$core$async$state_machine__21519__auto__);

(statearr_22300[(1)] = (1));

return statearr_22300;
});
var cljs$core$async$state_machine__21519__auto____1 = (function (state_22279){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_22279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e22301){if((e22301 instanceof Object)){
var ex__21522__auto__ = e22301;
var statearr_22302_22323 = state_22279;
(statearr_22302_22323[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22324 = state_22279;
state_22279 = G__22324;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$state_machine__21519__auto__ = function(state_22279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21519__auto____1.call(this,state_22279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21519__auto____0;
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21519__auto____1;
return cljs$core$async$state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto___22308,tc,fc))
})();
var state__21632__auto__ = (function (){var statearr_22303 = f__21631__auto__.call(null);
(statearr_22303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto___22308);

return statearr_22303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto___22308,tc,fc))
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
var c__21630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto__){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto__){
return (function (state_22388){
var state_val_22389 = (state_22388[(1)]);
if((state_val_22389 === (7))){
var inst_22384 = (state_22388[(2)]);
var state_22388__$1 = state_22388;
var statearr_22390_22411 = state_22388__$1;
(statearr_22390_22411[(2)] = inst_22384);

(statearr_22390_22411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (1))){
var inst_22368 = init;
var state_22388__$1 = (function (){var statearr_22391 = state_22388;
(statearr_22391[(7)] = inst_22368);

return statearr_22391;
})();
var statearr_22392_22412 = state_22388__$1;
(statearr_22392_22412[(2)] = null);

(statearr_22392_22412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (4))){
var inst_22371 = (state_22388[(8)]);
var inst_22371__$1 = (state_22388[(2)]);
var inst_22372 = (inst_22371__$1 == null);
var state_22388__$1 = (function (){var statearr_22393 = state_22388;
(statearr_22393[(8)] = inst_22371__$1);

return statearr_22393;
})();
if(cljs.core.truth_(inst_22372)){
var statearr_22394_22413 = state_22388__$1;
(statearr_22394_22413[(1)] = (5));

} else {
var statearr_22395_22414 = state_22388__$1;
(statearr_22395_22414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (6))){
var inst_22368 = (state_22388[(7)]);
var inst_22375 = (state_22388[(9)]);
var inst_22371 = (state_22388[(8)]);
var inst_22375__$1 = f.call(null,inst_22368,inst_22371);
var inst_22376 = cljs.core.reduced_QMARK_.call(null,inst_22375__$1);
var state_22388__$1 = (function (){var statearr_22396 = state_22388;
(statearr_22396[(9)] = inst_22375__$1);

return statearr_22396;
})();
if(inst_22376){
var statearr_22397_22415 = state_22388__$1;
(statearr_22397_22415[(1)] = (8));

} else {
var statearr_22398_22416 = state_22388__$1;
(statearr_22398_22416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (3))){
var inst_22386 = (state_22388[(2)]);
var state_22388__$1 = state_22388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22388__$1,inst_22386);
} else {
if((state_val_22389 === (2))){
var state_22388__$1 = state_22388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22388__$1,(4),ch);
} else {
if((state_val_22389 === (9))){
var inst_22375 = (state_22388[(9)]);
var inst_22368 = inst_22375;
var state_22388__$1 = (function (){var statearr_22399 = state_22388;
(statearr_22399[(7)] = inst_22368);

return statearr_22399;
})();
var statearr_22400_22417 = state_22388__$1;
(statearr_22400_22417[(2)] = null);

(statearr_22400_22417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (5))){
var inst_22368 = (state_22388[(7)]);
var state_22388__$1 = state_22388;
var statearr_22401_22418 = state_22388__$1;
(statearr_22401_22418[(2)] = inst_22368);

(statearr_22401_22418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (10))){
var inst_22382 = (state_22388[(2)]);
var state_22388__$1 = state_22388;
var statearr_22402_22419 = state_22388__$1;
(statearr_22402_22419[(2)] = inst_22382);

(statearr_22402_22419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (8))){
var inst_22375 = (state_22388[(9)]);
var inst_22378 = cljs.core.deref.call(null,inst_22375);
var state_22388__$1 = state_22388;
var statearr_22403_22420 = state_22388__$1;
(statearr_22403_22420[(2)] = inst_22378);

(statearr_22403_22420[(1)] = (10));


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
});})(c__21630__auto__))
;
return ((function (switch__21518__auto__,c__21630__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21519__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21519__auto____0 = (function (){
var statearr_22407 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22407[(0)] = cljs$core$async$reduce_$_state_machine__21519__auto__);

(statearr_22407[(1)] = (1));

return statearr_22407;
});
var cljs$core$async$reduce_$_state_machine__21519__auto____1 = (function (state_22388){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_22388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e22408){if((e22408 instanceof Object)){
var ex__21522__auto__ = e22408;
var statearr_22409_22421 = state_22388;
(statearr_22409_22421[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22422 = state_22388;
state_22388 = G__22422;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21519__auto__ = function(state_22388){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21519__auto____1.call(this,state_22388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21519__auto____0;
cljs$core$async$reduce_$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21519__auto____1;
return cljs$core$async$reduce_$_state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto__))
})();
var state__21632__auto__ = (function (){var statearr_22410 = f__21631__auto__.call(null);
(statearr_22410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto__);

return statearr_22410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto__))
);

return c__21630__auto__;
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
var args22423 = [];
var len__19529__auto___22475 = arguments.length;
var i__19530__auto___22476 = (0);
while(true){
if((i__19530__auto___22476 < len__19529__auto___22475)){
args22423.push((arguments[i__19530__auto___22476]));

var G__22477 = (i__19530__auto___22476 + (1));
i__19530__auto___22476 = G__22477;
continue;
} else {
}
break;
}

var G__22425 = args22423.length;
switch (G__22425) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22423.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto__){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto__){
return (function (state_22450){
var state_val_22451 = (state_22450[(1)]);
if((state_val_22451 === (7))){
var inst_22432 = (state_22450[(2)]);
var state_22450__$1 = state_22450;
var statearr_22452_22479 = state_22450__$1;
(statearr_22452_22479[(2)] = inst_22432);

(statearr_22452_22479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (1))){
var inst_22426 = cljs.core.seq.call(null,coll);
var inst_22427 = inst_22426;
var state_22450__$1 = (function (){var statearr_22453 = state_22450;
(statearr_22453[(7)] = inst_22427);

return statearr_22453;
})();
var statearr_22454_22480 = state_22450__$1;
(statearr_22454_22480[(2)] = null);

(statearr_22454_22480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (4))){
var inst_22427 = (state_22450[(7)]);
var inst_22430 = cljs.core.first.call(null,inst_22427);
var state_22450__$1 = state_22450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22450__$1,(7),ch,inst_22430);
} else {
if((state_val_22451 === (13))){
var inst_22444 = (state_22450[(2)]);
var state_22450__$1 = state_22450;
var statearr_22455_22481 = state_22450__$1;
(statearr_22455_22481[(2)] = inst_22444);

(statearr_22455_22481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (6))){
var inst_22435 = (state_22450[(2)]);
var state_22450__$1 = state_22450;
if(cljs.core.truth_(inst_22435)){
var statearr_22456_22482 = state_22450__$1;
(statearr_22456_22482[(1)] = (8));

} else {
var statearr_22457_22483 = state_22450__$1;
(statearr_22457_22483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (3))){
var inst_22448 = (state_22450[(2)]);
var state_22450__$1 = state_22450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22450__$1,inst_22448);
} else {
if((state_val_22451 === (12))){
var state_22450__$1 = state_22450;
var statearr_22458_22484 = state_22450__$1;
(statearr_22458_22484[(2)] = null);

(statearr_22458_22484[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (2))){
var inst_22427 = (state_22450[(7)]);
var state_22450__$1 = state_22450;
if(cljs.core.truth_(inst_22427)){
var statearr_22459_22485 = state_22450__$1;
(statearr_22459_22485[(1)] = (4));

} else {
var statearr_22460_22486 = state_22450__$1;
(statearr_22460_22486[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (11))){
var inst_22441 = cljs.core.async.close_BANG_.call(null,ch);
var state_22450__$1 = state_22450;
var statearr_22461_22487 = state_22450__$1;
(statearr_22461_22487[(2)] = inst_22441);

(statearr_22461_22487[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (9))){
var state_22450__$1 = state_22450;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22462_22488 = state_22450__$1;
(statearr_22462_22488[(1)] = (11));

} else {
var statearr_22463_22489 = state_22450__$1;
(statearr_22463_22489[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (5))){
var inst_22427 = (state_22450[(7)]);
var state_22450__$1 = state_22450;
var statearr_22464_22490 = state_22450__$1;
(statearr_22464_22490[(2)] = inst_22427);

(statearr_22464_22490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (10))){
var inst_22446 = (state_22450[(2)]);
var state_22450__$1 = state_22450;
var statearr_22465_22491 = state_22450__$1;
(statearr_22465_22491[(2)] = inst_22446);

(statearr_22465_22491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22451 === (8))){
var inst_22427 = (state_22450[(7)]);
var inst_22437 = cljs.core.next.call(null,inst_22427);
var inst_22427__$1 = inst_22437;
var state_22450__$1 = (function (){var statearr_22466 = state_22450;
(statearr_22466[(7)] = inst_22427__$1);

return statearr_22466;
})();
var statearr_22467_22492 = state_22450__$1;
(statearr_22467_22492[(2)] = null);

(statearr_22467_22492[(1)] = (2));


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
});})(c__21630__auto__))
;
return ((function (switch__21518__auto__,c__21630__auto__){
return (function() {
var cljs$core$async$state_machine__21519__auto__ = null;
var cljs$core$async$state_machine__21519__auto____0 = (function (){
var statearr_22471 = [null,null,null,null,null,null,null,null];
(statearr_22471[(0)] = cljs$core$async$state_machine__21519__auto__);

(statearr_22471[(1)] = (1));

return statearr_22471;
});
var cljs$core$async$state_machine__21519__auto____1 = (function (state_22450){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_22450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e22472){if((e22472 instanceof Object)){
var ex__21522__auto__ = e22472;
var statearr_22473_22493 = state_22450;
(statearr_22473_22493[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22494 = state_22450;
state_22450 = G__22494;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$state_machine__21519__auto__ = function(state_22450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21519__auto____1.call(this,state_22450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21519__auto____0;
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21519__auto____1;
return cljs$core$async$state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto__))
})();
var state__21632__auto__ = (function (){var statearr_22474 = f__21631__auto__.call(null);
(statearr_22474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto__);

return statearr_22474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto__))
);

return c__21630__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async22716 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22716 = (function (mult,ch,cs,meta22717){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22717 = meta22717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22718,meta22717__$1){
var self__ = this;
var _22718__$1 = this;
return (new cljs.core.async.t_cljs$core$async22716(self__.mult,self__.ch,self__.cs,meta22717__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22718){
var self__ = this;
var _22718__$1 = this;
return self__.meta22717;
});})(cs))
;

cljs.core.async.t_cljs$core$async22716.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22716.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22716.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22716.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22716.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22716.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22717","meta22717",-2088440962,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22716";

cljs.core.async.t_cljs$core$async22716.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async22716");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22716 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22716(mult__$1,ch__$1,cs__$1,meta22717){
return (new cljs.core.async.t_cljs$core$async22716(mult__$1,ch__$1,cs__$1,meta22717));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22716(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21630__auto___22937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto___22937,cs,m,dchan,dctr,done){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto___22937,cs,m,dchan,dctr,done){
return (function (state_22849){
var state_val_22850 = (state_22849[(1)]);
if((state_val_22850 === (7))){
var inst_22845 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22851_22938 = state_22849__$1;
(statearr_22851_22938[(2)] = inst_22845);

(statearr_22851_22938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (20))){
var inst_22750 = (state_22849[(7)]);
var inst_22760 = cljs.core.first.call(null,inst_22750);
var inst_22761 = cljs.core.nth.call(null,inst_22760,(0),null);
var inst_22762 = cljs.core.nth.call(null,inst_22760,(1),null);
var state_22849__$1 = (function (){var statearr_22852 = state_22849;
(statearr_22852[(8)] = inst_22761);

return statearr_22852;
})();
if(cljs.core.truth_(inst_22762)){
var statearr_22853_22939 = state_22849__$1;
(statearr_22853_22939[(1)] = (22));

} else {
var statearr_22854_22940 = state_22849__$1;
(statearr_22854_22940[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (27))){
var inst_22792 = (state_22849[(9)]);
var inst_22721 = (state_22849[(10)]);
var inst_22797 = (state_22849[(11)]);
var inst_22790 = (state_22849[(12)]);
var inst_22797__$1 = cljs.core._nth.call(null,inst_22790,inst_22792);
var inst_22798 = cljs.core.async.put_BANG_.call(null,inst_22797__$1,inst_22721,done);
var state_22849__$1 = (function (){var statearr_22855 = state_22849;
(statearr_22855[(11)] = inst_22797__$1);

return statearr_22855;
})();
if(cljs.core.truth_(inst_22798)){
var statearr_22856_22941 = state_22849__$1;
(statearr_22856_22941[(1)] = (30));

} else {
var statearr_22857_22942 = state_22849__$1;
(statearr_22857_22942[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (1))){
var state_22849__$1 = state_22849;
var statearr_22858_22943 = state_22849__$1;
(statearr_22858_22943[(2)] = null);

(statearr_22858_22943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (24))){
var inst_22750 = (state_22849[(7)]);
var inst_22767 = (state_22849[(2)]);
var inst_22768 = cljs.core.next.call(null,inst_22750);
var inst_22730 = inst_22768;
var inst_22731 = null;
var inst_22732 = (0);
var inst_22733 = (0);
var state_22849__$1 = (function (){var statearr_22859 = state_22849;
(statearr_22859[(13)] = inst_22730);

(statearr_22859[(14)] = inst_22732);

(statearr_22859[(15)] = inst_22731);

(statearr_22859[(16)] = inst_22767);

(statearr_22859[(17)] = inst_22733);

return statearr_22859;
})();
var statearr_22860_22944 = state_22849__$1;
(statearr_22860_22944[(2)] = null);

(statearr_22860_22944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (39))){
var state_22849__$1 = state_22849;
var statearr_22864_22945 = state_22849__$1;
(statearr_22864_22945[(2)] = null);

(statearr_22864_22945[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (4))){
var inst_22721 = (state_22849[(10)]);
var inst_22721__$1 = (state_22849[(2)]);
var inst_22722 = (inst_22721__$1 == null);
var state_22849__$1 = (function (){var statearr_22865 = state_22849;
(statearr_22865[(10)] = inst_22721__$1);

return statearr_22865;
})();
if(cljs.core.truth_(inst_22722)){
var statearr_22866_22946 = state_22849__$1;
(statearr_22866_22946[(1)] = (5));

} else {
var statearr_22867_22947 = state_22849__$1;
(statearr_22867_22947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (15))){
var inst_22730 = (state_22849[(13)]);
var inst_22732 = (state_22849[(14)]);
var inst_22731 = (state_22849[(15)]);
var inst_22733 = (state_22849[(17)]);
var inst_22746 = (state_22849[(2)]);
var inst_22747 = (inst_22733 + (1));
var tmp22861 = inst_22730;
var tmp22862 = inst_22732;
var tmp22863 = inst_22731;
var inst_22730__$1 = tmp22861;
var inst_22731__$1 = tmp22863;
var inst_22732__$1 = tmp22862;
var inst_22733__$1 = inst_22747;
var state_22849__$1 = (function (){var statearr_22868 = state_22849;
(statearr_22868[(18)] = inst_22746);

(statearr_22868[(13)] = inst_22730__$1);

(statearr_22868[(14)] = inst_22732__$1);

(statearr_22868[(15)] = inst_22731__$1);

(statearr_22868[(17)] = inst_22733__$1);

return statearr_22868;
})();
var statearr_22869_22948 = state_22849__$1;
(statearr_22869_22948[(2)] = null);

(statearr_22869_22948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (21))){
var inst_22771 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22873_22949 = state_22849__$1;
(statearr_22873_22949[(2)] = inst_22771);

(statearr_22873_22949[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (31))){
var inst_22797 = (state_22849[(11)]);
var inst_22801 = done.call(null,null);
var inst_22802 = cljs.core.async.untap_STAR_.call(null,m,inst_22797);
var state_22849__$1 = (function (){var statearr_22874 = state_22849;
(statearr_22874[(19)] = inst_22801);

return statearr_22874;
})();
var statearr_22875_22950 = state_22849__$1;
(statearr_22875_22950[(2)] = inst_22802);

(statearr_22875_22950[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (32))){
var inst_22792 = (state_22849[(9)]);
var inst_22791 = (state_22849[(20)]);
var inst_22790 = (state_22849[(12)]);
var inst_22789 = (state_22849[(21)]);
var inst_22804 = (state_22849[(2)]);
var inst_22805 = (inst_22792 + (1));
var tmp22870 = inst_22791;
var tmp22871 = inst_22790;
var tmp22872 = inst_22789;
var inst_22789__$1 = tmp22872;
var inst_22790__$1 = tmp22871;
var inst_22791__$1 = tmp22870;
var inst_22792__$1 = inst_22805;
var state_22849__$1 = (function (){var statearr_22876 = state_22849;
(statearr_22876[(22)] = inst_22804);

(statearr_22876[(9)] = inst_22792__$1);

(statearr_22876[(20)] = inst_22791__$1);

(statearr_22876[(12)] = inst_22790__$1);

(statearr_22876[(21)] = inst_22789__$1);

return statearr_22876;
})();
var statearr_22877_22951 = state_22849__$1;
(statearr_22877_22951[(2)] = null);

(statearr_22877_22951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (40))){
var inst_22817 = (state_22849[(23)]);
var inst_22821 = done.call(null,null);
var inst_22822 = cljs.core.async.untap_STAR_.call(null,m,inst_22817);
var state_22849__$1 = (function (){var statearr_22878 = state_22849;
(statearr_22878[(24)] = inst_22821);

return statearr_22878;
})();
var statearr_22879_22952 = state_22849__$1;
(statearr_22879_22952[(2)] = inst_22822);

(statearr_22879_22952[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (33))){
var inst_22808 = (state_22849[(25)]);
var inst_22810 = cljs.core.chunked_seq_QMARK_.call(null,inst_22808);
var state_22849__$1 = state_22849;
if(inst_22810){
var statearr_22880_22953 = state_22849__$1;
(statearr_22880_22953[(1)] = (36));

} else {
var statearr_22881_22954 = state_22849__$1;
(statearr_22881_22954[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (13))){
var inst_22740 = (state_22849[(26)]);
var inst_22743 = cljs.core.async.close_BANG_.call(null,inst_22740);
var state_22849__$1 = state_22849;
var statearr_22882_22955 = state_22849__$1;
(statearr_22882_22955[(2)] = inst_22743);

(statearr_22882_22955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (22))){
var inst_22761 = (state_22849[(8)]);
var inst_22764 = cljs.core.async.close_BANG_.call(null,inst_22761);
var state_22849__$1 = state_22849;
var statearr_22883_22956 = state_22849__$1;
(statearr_22883_22956[(2)] = inst_22764);

(statearr_22883_22956[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (36))){
var inst_22808 = (state_22849[(25)]);
var inst_22812 = cljs.core.chunk_first.call(null,inst_22808);
var inst_22813 = cljs.core.chunk_rest.call(null,inst_22808);
var inst_22814 = cljs.core.count.call(null,inst_22812);
var inst_22789 = inst_22813;
var inst_22790 = inst_22812;
var inst_22791 = inst_22814;
var inst_22792 = (0);
var state_22849__$1 = (function (){var statearr_22884 = state_22849;
(statearr_22884[(9)] = inst_22792);

(statearr_22884[(20)] = inst_22791);

(statearr_22884[(12)] = inst_22790);

(statearr_22884[(21)] = inst_22789);

return statearr_22884;
})();
var statearr_22885_22957 = state_22849__$1;
(statearr_22885_22957[(2)] = null);

(statearr_22885_22957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (41))){
var inst_22808 = (state_22849[(25)]);
var inst_22824 = (state_22849[(2)]);
var inst_22825 = cljs.core.next.call(null,inst_22808);
var inst_22789 = inst_22825;
var inst_22790 = null;
var inst_22791 = (0);
var inst_22792 = (0);
var state_22849__$1 = (function (){var statearr_22886 = state_22849;
(statearr_22886[(27)] = inst_22824);

(statearr_22886[(9)] = inst_22792);

(statearr_22886[(20)] = inst_22791);

(statearr_22886[(12)] = inst_22790);

(statearr_22886[(21)] = inst_22789);

return statearr_22886;
})();
var statearr_22887_22958 = state_22849__$1;
(statearr_22887_22958[(2)] = null);

(statearr_22887_22958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (43))){
var state_22849__$1 = state_22849;
var statearr_22888_22959 = state_22849__$1;
(statearr_22888_22959[(2)] = null);

(statearr_22888_22959[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (29))){
var inst_22833 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22889_22960 = state_22849__$1;
(statearr_22889_22960[(2)] = inst_22833);

(statearr_22889_22960[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (44))){
var inst_22842 = (state_22849[(2)]);
var state_22849__$1 = (function (){var statearr_22890 = state_22849;
(statearr_22890[(28)] = inst_22842);

return statearr_22890;
})();
var statearr_22891_22961 = state_22849__$1;
(statearr_22891_22961[(2)] = null);

(statearr_22891_22961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (6))){
var inst_22781 = (state_22849[(29)]);
var inst_22780 = cljs.core.deref.call(null,cs);
var inst_22781__$1 = cljs.core.keys.call(null,inst_22780);
var inst_22782 = cljs.core.count.call(null,inst_22781__$1);
var inst_22783 = cljs.core.reset_BANG_.call(null,dctr,inst_22782);
var inst_22788 = cljs.core.seq.call(null,inst_22781__$1);
var inst_22789 = inst_22788;
var inst_22790 = null;
var inst_22791 = (0);
var inst_22792 = (0);
var state_22849__$1 = (function (){var statearr_22892 = state_22849;
(statearr_22892[(30)] = inst_22783);

(statearr_22892[(9)] = inst_22792);

(statearr_22892[(29)] = inst_22781__$1);

(statearr_22892[(20)] = inst_22791);

(statearr_22892[(12)] = inst_22790);

(statearr_22892[(21)] = inst_22789);

return statearr_22892;
})();
var statearr_22893_22962 = state_22849__$1;
(statearr_22893_22962[(2)] = null);

(statearr_22893_22962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (28))){
var inst_22808 = (state_22849[(25)]);
var inst_22789 = (state_22849[(21)]);
var inst_22808__$1 = cljs.core.seq.call(null,inst_22789);
var state_22849__$1 = (function (){var statearr_22894 = state_22849;
(statearr_22894[(25)] = inst_22808__$1);

return statearr_22894;
})();
if(inst_22808__$1){
var statearr_22895_22963 = state_22849__$1;
(statearr_22895_22963[(1)] = (33));

} else {
var statearr_22896_22964 = state_22849__$1;
(statearr_22896_22964[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (25))){
var inst_22792 = (state_22849[(9)]);
var inst_22791 = (state_22849[(20)]);
var inst_22794 = (inst_22792 < inst_22791);
var inst_22795 = inst_22794;
var state_22849__$1 = state_22849;
if(cljs.core.truth_(inst_22795)){
var statearr_22897_22965 = state_22849__$1;
(statearr_22897_22965[(1)] = (27));

} else {
var statearr_22898_22966 = state_22849__$1;
(statearr_22898_22966[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (34))){
var state_22849__$1 = state_22849;
var statearr_22899_22967 = state_22849__$1;
(statearr_22899_22967[(2)] = null);

(statearr_22899_22967[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (17))){
var state_22849__$1 = state_22849;
var statearr_22900_22968 = state_22849__$1;
(statearr_22900_22968[(2)] = null);

(statearr_22900_22968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (3))){
var inst_22847 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22849__$1,inst_22847);
} else {
if((state_val_22850 === (12))){
var inst_22776 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22901_22969 = state_22849__$1;
(statearr_22901_22969[(2)] = inst_22776);

(statearr_22901_22969[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (2))){
var state_22849__$1 = state_22849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22849__$1,(4),ch);
} else {
if((state_val_22850 === (23))){
var state_22849__$1 = state_22849;
var statearr_22902_22970 = state_22849__$1;
(statearr_22902_22970[(2)] = null);

(statearr_22902_22970[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (35))){
var inst_22831 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22903_22971 = state_22849__$1;
(statearr_22903_22971[(2)] = inst_22831);

(statearr_22903_22971[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (19))){
var inst_22750 = (state_22849[(7)]);
var inst_22754 = cljs.core.chunk_first.call(null,inst_22750);
var inst_22755 = cljs.core.chunk_rest.call(null,inst_22750);
var inst_22756 = cljs.core.count.call(null,inst_22754);
var inst_22730 = inst_22755;
var inst_22731 = inst_22754;
var inst_22732 = inst_22756;
var inst_22733 = (0);
var state_22849__$1 = (function (){var statearr_22904 = state_22849;
(statearr_22904[(13)] = inst_22730);

(statearr_22904[(14)] = inst_22732);

(statearr_22904[(15)] = inst_22731);

(statearr_22904[(17)] = inst_22733);

return statearr_22904;
})();
var statearr_22905_22972 = state_22849__$1;
(statearr_22905_22972[(2)] = null);

(statearr_22905_22972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (11))){
var inst_22750 = (state_22849[(7)]);
var inst_22730 = (state_22849[(13)]);
var inst_22750__$1 = cljs.core.seq.call(null,inst_22730);
var state_22849__$1 = (function (){var statearr_22906 = state_22849;
(statearr_22906[(7)] = inst_22750__$1);

return statearr_22906;
})();
if(inst_22750__$1){
var statearr_22907_22973 = state_22849__$1;
(statearr_22907_22973[(1)] = (16));

} else {
var statearr_22908_22974 = state_22849__$1;
(statearr_22908_22974[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (9))){
var inst_22778 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22909_22975 = state_22849__$1;
(statearr_22909_22975[(2)] = inst_22778);

(statearr_22909_22975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (5))){
var inst_22728 = cljs.core.deref.call(null,cs);
var inst_22729 = cljs.core.seq.call(null,inst_22728);
var inst_22730 = inst_22729;
var inst_22731 = null;
var inst_22732 = (0);
var inst_22733 = (0);
var state_22849__$1 = (function (){var statearr_22910 = state_22849;
(statearr_22910[(13)] = inst_22730);

(statearr_22910[(14)] = inst_22732);

(statearr_22910[(15)] = inst_22731);

(statearr_22910[(17)] = inst_22733);

return statearr_22910;
})();
var statearr_22911_22976 = state_22849__$1;
(statearr_22911_22976[(2)] = null);

(statearr_22911_22976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (14))){
var state_22849__$1 = state_22849;
var statearr_22912_22977 = state_22849__$1;
(statearr_22912_22977[(2)] = null);

(statearr_22912_22977[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (45))){
var inst_22839 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22913_22978 = state_22849__$1;
(statearr_22913_22978[(2)] = inst_22839);

(statearr_22913_22978[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (26))){
var inst_22781 = (state_22849[(29)]);
var inst_22835 = (state_22849[(2)]);
var inst_22836 = cljs.core.seq.call(null,inst_22781);
var state_22849__$1 = (function (){var statearr_22914 = state_22849;
(statearr_22914[(31)] = inst_22835);

return statearr_22914;
})();
if(inst_22836){
var statearr_22915_22979 = state_22849__$1;
(statearr_22915_22979[(1)] = (42));

} else {
var statearr_22916_22980 = state_22849__$1;
(statearr_22916_22980[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (16))){
var inst_22750 = (state_22849[(7)]);
var inst_22752 = cljs.core.chunked_seq_QMARK_.call(null,inst_22750);
var state_22849__$1 = state_22849;
if(inst_22752){
var statearr_22917_22981 = state_22849__$1;
(statearr_22917_22981[(1)] = (19));

} else {
var statearr_22918_22982 = state_22849__$1;
(statearr_22918_22982[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (38))){
var inst_22828 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22919_22983 = state_22849__$1;
(statearr_22919_22983[(2)] = inst_22828);

(statearr_22919_22983[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (30))){
var state_22849__$1 = state_22849;
var statearr_22920_22984 = state_22849__$1;
(statearr_22920_22984[(2)] = null);

(statearr_22920_22984[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (10))){
var inst_22731 = (state_22849[(15)]);
var inst_22733 = (state_22849[(17)]);
var inst_22739 = cljs.core._nth.call(null,inst_22731,inst_22733);
var inst_22740 = cljs.core.nth.call(null,inst_22739,(0),null);
var inst_22741 = cljs.core.nth.call(null,inst_22739,(1),null);
var state_22849__$1 = (function (){var statearr_22921 = state_22849;
(statearr_22921[(26)] = inst_22740);

return statearr_22921;
})();
if(cljs.core.truth_(inst_22741)){
var statearr_22922_22985 = state_22849__$1;
(statearr_22922_22985[(1)] = (13));

} else {
var statearr_22923_22986 = state_22849__$1;
(statearr_22923_22986[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (18))){
var inst_22774 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22924_22987 = state_22849__$1;
(statearr_22924_22987[(2)] = inst_22774);

(statearr_22924_22987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (42))){
var state_22849__$1 = state_22849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22849__$1,(45),dchan);
} else {
if((state_val_22850 === (37))){
var inst_22808 = (state_22849[(25)]);
var inst_22721 = (state_22849[(10)]);
var inst_22817 = (state_22849[(23)]);
var inst_22817__$1 = cljs.core.first.call(null,inst_22808);
var inst_22818 = cljs.core.async.put_BANG_.call(null,inst_22817__$1,inst_22721,done);
var state_22849__$1 = (function (){var statearr_22925 = state_22849;
(statearr_22925[(23)] = inst_22817__$1);

return statearr_22925;
})();
if(cljs.core.truth_(inst_22818)){
var statearr_22926_22988 = state_22849__$1;
(statearr_22926_22988[(1)] = (39));

} else {
var statearr_22927_22989 = state_22849__$1;
(statearr_22927_22989[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (8))){
var inst_22732 = (state_22849[(14)]);
var inst_22733 = (state_22849[(17)]);
var inst_22735 = (inst_22733 < inst_22732);
var inst_22736 = inst_22735;
var state_22849__$1 = state_22849;
if(cljs.core.truth_(inst_22736)){
var statearr_22928_22990 = state_22849__$1;
(statearr_22928_22990[(1)] = (10));

} else {
var statearr_22929_22991 = state_22849__$1;
(statearr_22929_22991[(1)] = (11));

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
});})(c__21630__auto___22937,cs,m,dchan,dctr,done))
;
return ((function (switch__21518__auto__,c__21630__auto___22937,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21519__auto__ = null;
var cljs$core$async$mult_$_state_machine__21519__auto____0 = (function (){
var statearr_22933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22933[(0)] = cljs$core$async$mult_$_state_machine__21519__auto__);

(statearr_22933[(1)] = (1));

return statearr_22933;
});
var cljs$core$async$mult_$_state_machine__21519__auto____1 = (function (state_22849){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_22849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e22934){if((e22934 instanceof Object)){
var ex__21522__auto__ = e22934;
var statearr_22935_22992 = state_22849;
(statearr_22935_22992[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22993 = state_22849;
state_22849 = G__22993;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21519__auto__ = function(state_22849){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21519__auto____1.call(this,state_22849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21519__auto____0;
cljs$core$async$mult_$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21519__auto____1;
return cljs$core$async$mult_$_state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto___22937,cs,m,dchan,dctr,done))
})();
var state__21632__auto__ = (function (){var statearr_22936 = f__21631__auto__.call(null);
(statearr_22936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto___22937);

return statearr_22936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto___22937,cs,m,dchan,dctr,done))
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
var args22994 = [];
var len__19529__auto___22997 = arguments.length;
var i__19530__auto___22998 = (0);
while(true){
if((i__19530__auto___22998 < len__19529__auto___22997)){
args22994.push((arguments[i__19530__auto___22998]));

var G__22999 = (i__19530__auto___22998 + (1));
i__19530__auto___22998 = G__22999;
continue;
} else {
}
break;
}

var G__22996 = args22994.length;
switch (G__22996) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22994.length)].join('')));

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
var len__19529__auto___23011 = arguments.length;
var i__19530__auto___23012 = (0);
while(true){
if((i__19530__auto___23012 < len__19529__auto___23011)){
args__19536__auto__.push((arguments[i__19530__auto___23012]));

var G__23013 = (i__19530__auto___23012 + (1));
i__19530__auto___23012 = G__23013;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((3) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19537__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23005){
var map__23006 = p__23005;
var map__23006__$1 = ((((!((map__23006 == null)))?((((map__23006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23006):map__23006);
var opts = map__23006__$1;
var statearr_23008_23014 = state;
(statearr_23008_23014[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23006,map__23006__$1,opts){
return (function (val){
var statearr_23009_23015 = state;
(statearr_23009_23015[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23006,map__23006__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23010_23016 = state;
(statearr_23010_23016[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23001){
var G__23002 = cljs.core.first.call(null,seq23001);
var seq23001__$1 = cljs.core.next.call(null,seq23001);
var G__23003 = cljs.core.first.call(null,seq23001__$1);
var seq23001__$2 = cljs.core.next.call(null,seq23001__$1);
var G__23004 = cljs.core.first.call(null,seq23001__$2);
var seq23001__$3 = cljs.core.next.call(null,seq23001__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23002,G__23003,G__23004,seq23001__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23180 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23181){
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
this.meta23181 = meta23181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23182,meta23181__$1){
var self__ = this;
var _23182__$1 = this;
return (new cljs.core.async.t_cljs$core$async23180(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23181__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23180.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23182){
var self__ = this;
var _23182__$1 = this;
return self__.meta23181;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23180.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23180.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23180.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23180.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23180.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23180.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23180.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23180.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23180.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23181","meta23181",1272544993,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23180";

cljs.core.async.t_cljs$core$async23180.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23180");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23180 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23180(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23181){
return (new cljs.core.async.t_cljs$core$async23180(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23181));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23180(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21630__auto___23343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto___23343,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto___23343,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23280){
var state_val_23281 = (state_23280[(1)]);
if((state_val_23281 === (7))){
var inst_23198 = (state_23280[(2)]);
var state_23280__$1 = state_23280;
var statearr_23282_23344 = state_23280__$1;
(statearr_23282_23344[(2)] = inst_23198);

(statearr_23282_23344[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (20))){
var inst_23210 = (state_23280[(7)]);
var state_23280__$1 = state_23280;
var statearr_23283_23345 = state_23280__$1;
(statearr_23283_23345[(2)] = inst_23210);

(statearr_23283_23345[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (27))){
var state_23280__$1 = state_23280;
var statearr_23284_23346 = state_23280__$1;
(statearr_23284_23346[(2)] = null);

(statearr_23284_23346[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (1))){
var inst_23186 = (state_23280[(8)]);
var inst_23186__$1 = calc_state.call(null);
var inst_23188 = (inst_23186__$1 == null);
var inst_23189 = cljs.core.not.call(null,inst_23188);
var state_23280__$1 = (function (){var statearr_23285 = state_23280;
(statearr_23285[(8)] = inst_23186__$1);

return statearr_23285;
})();
if(inst_23189){
var statearr_23286_23347 = state_23280__$1;
(statearr_23286_23347[(1)] = (2));

} else {
var statearr_23287_23348 = state_23280__$1;
(statearr_23287_23348[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (24))){
var inst_23240 = (state_23280[(9)]);
var inst_23254 = (state_23280[(10)]);
var inst_23233 = (state_23280[(11)]);
var inst_23254__$1 = inst_23233.call(null,inst_23240);
var state_23280__$1 = (function (){var statearr_23288 = state_23280;
(statearr_23288[(10)] = inst_23254__$1);

return statearr_23288;
})();
if(cljs.core.truth_(inst_23254__$1)){
var statearr_23289_23349 = state_23280__$1;
(statearr_23289_23349[(1)] = (29));

} else {
var statearr_23290_23350 = state_23280__$1;
(statearr_23290_23350[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (4))){
var inst_23201 = (state_23280[(2)]);
var state_23280__$1 = state_23280;
if(cljs.core.truth_(inst_23201)){
var statearr_23291_23351 = state_23280__$1;
(statearr_23291_23351[(1)] = (8));

} else {
var statearr_23292_23352 = state_23280__$1;
(statearr_23292_23352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (15))){
var inst_23227 = (state_23280[(2)]);
var state_23280__$1 = state_23280;
if(cljs.core.truth_(inst_23227)){
var statearr_23293_23353 = state_23280__$1;
(statearr_23293_23353[(1)] = (19));

} else {
var statearr_23294_23354 = state_23280__$1;
(statearr_23294_23354[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (21))){
var inst_23232 = (state_23280[(12)]);
var inst_23232__$1 = (state_23280[(2)]);
var inst_23233 = cljs.core.get.call(null,inst_23232__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23234 = cljs.core.get.call(null,inst_23232__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23235 = cljs.core.get.call(null,inst_23232__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23280__$1 = (function (){var statearr_23295 = state_23280;
(statearr_23295[(12)] = inst_23232__$1);

(statearr_23295[(13)] = inst_23234);

(statearr_23295[(11)] = inst_23233);

return statearr_23295;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23280__$1,(22),inst_23235);
} else {
if((state_val_23281 === (31))){
var inst_23262 = (state_23280[(2)]);
var state_23280__$1 = state_23280;
if(cljs.core.truth_(inst_23262)){
var statearr_23296_23355 = state_23280__$1;
(statearr_23296_23355[(1)] = (32));

} else {
var statearr_23297_23356 = state_23280__$1;
(statearr_23297_23356[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (32))){
var inst_23239 = (state_23280[(14)]);
var state_23280__$1 = state_23280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23280__$1,(35),out,inst_23239);
} else {
if((state_val_23281 === (33))){
var inst_23232 = (state_23280[(12)]);
var inst_23210 = inst_23232;
var state_23280__$1 = (function (){var statearr_23298 = state_23280;
(statearr_23298[(7)] = inst_23210);

return statearr_23298;
})();
var statearr_23299_23357 = state_23280__$1;
(statearr_23299_23357[(2)] = null);

(statearr_23299_23357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (13))){
var inst_23210 = (state_23280[(7)]);
var inst_23217 = inst_23210.cljs$lang$protocol_mask$partition0$;
var inst_23218 = (inst_23217 & (64));
var inst_23219 = inst_23210.cljs$core$ISeq$;
var inst_23220 = (inst_23218) || (inst_23219);
var state_23280__$1 = state_23280;
if(cljs.core.truth_(inst_23220)){
var statearr_23300_23358 = state_23280__$1;
(statearr_23300_23358[(1)] = (16));

} else {
var statearr_23301_23359 = state_23280__$1;
(statearr_23301_23359[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (22))){
var inst_23240 = (state_23280[(9)]);
var inst_23239 = (state_23280[(14)]);
var inst_23238 = (state_23280[(2)]);
var inst_23239__$1 = cljs.core.nth.call(null,inst_23238,(0),null);
var inst_23240__$1 = cljs.core.nth.call(null,inst_23238,(1),null);
var inst_23241 = (inst_23239__$1 == null);
var inst_23242 = cljs.core._EQ_.call(null,inst_23240__$1,change);
var inst_23243 = (inst_23241) || (inst_23242);
var state_23280__$1 = (function (){var statearr_23302 = state_23280;
(statearr_23302[(9)] = inst_23240__$1);

(statearr_23302[(14)] = inst_23239__$1);

return statearr_23302;
})();
if(cljs.core.truth_(inst_23243)){
var statearr_23303_23360 = state_23280__$1;
(statearr_23303_23360[(1)] = (23));

} else {
var statearr_23304_23361 = state_23280__$1;
(statearr_23304_23361[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (36))){
var inst_23232 = (state_23280[(12)]);
var inst_23210 = inst_23232;
var state_23280__$1 = (function (){var statearr_23305 = state_23280;
(statearr_23305[(7)] = inst_23210);

return statearr_23305;
})();
var statearr_23306_23362 = state_23280__$1;
(statearr_23306_23362[(2)] = null);

(statearr_23306_23362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (29))){
var inst_23254 = (state_23280[(10)]);
var state_23280__$1 = state_23280;
var statearr_23307_23363 = state_23280__$1;
(statearr_23307_23363[(2)] = inst_23254);

(statearr_23307_23363[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (6))){
var state_23280__$1 = state_23280;
var statearr_23308_23364 = state_23280__$1;
(statearr_23308_23364[(2)] = false);

(statearr_23308_23364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (28))){
var inst_23250 = (state_23280[(2)]);
var inst_23251 = calc_state.call(null);
var inst_23210 = inst_23251;
var state_23280__$1 = (function (){var statearr_23309 = state_23280;
(statearr_23309[(15)] = inst_23250);

(statearr_23309[(7)] = inst_23210);

return statearr_23309;
})();
var statearr_23310_23365 = state_23280__$1;
(statearr_23310_23365[(2)] = null);

(statearr_23310_23365[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (25))){
var inst_23276 = (state_23280[(2)]);
var state_23280__$1 = state_23280;
var statearr_23311_23366 = state_23280__$1;
(statearr_23311_23366[(2)] = inst_23276);

(statearr_23311_23366[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (34))){
var inst_23274 = (state_23280[(2)]);
var state_23280__$1 = state_23280;
var statearr_23312_23367 = state_23280__$1;
(statearr_23312_23367[(2)] = inst_23274);

(statearr_23312_23367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (17))){
var state_23280__$1 = state_23280;
var statearr_23313_23368 = state_23280__$1;
(statearr_23313_23368[(2)] = false);

(statearr_23313_23368[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (3))){
var state_23280__$1 = state_23280;
var statearr_23314_23369 = state_23280__$1;
(statearr_23314_23369[(2)] = false);

(statearr_23314_23369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (12))){
var inst_23278 = (state_23280[(2)]);
var state_23280__$1 = state_23280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23280__$1,inst_23278);
} else {
if((state_val_23281 === (2))){
var inst_23186 = (state_23280[(8)]);
var inst_23191 = inst_23186.cljs$lang$protocol_mask$partition0$;
var inst_23192 = (inst_23191 & (64));
var inst_23193 = inst_23186.cljs$core$ISeq$;
var inst_23194 = (inst_23192) || (inst_23193);
var state_23280__$1 = state_23280;
if(cljs.core.truth_(inst_23194)){
var statearr_23315_23370 = state_23280__$1;
(statearr_23315_23370[(1)] = (5));

} else {
var statearr_23316_23371 = state_23280__$1;
(statearr_23316_23371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (23))){
var inst_23239 = (state_23280[(14)]);
var inst_23245 = (inst_23239 == null);
var state_23280__$1 = state_23280;
if(cljs.core.truth_(inst_23245)){
var statearr_23317_23372 = state_23280__$1;
(statearr_23317_23372[(1)] = (26));

} else {
var statearr_23318_23373 = state_23280__$1;
(statearr_23318_23373[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (35))){
var inst_23265 = (state_23280[(2)]);
var state_23280__$1 = state_23280;
if(cljs.core.truth_(inst_23265)){
var statearr_23319_23374 = state_23280__$1;
(statearr_23319_23374[(1)] = (36));

} else {
var statearr_23320_23375 = state_23280__$1;
(statearr_23320_23375[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (19))){
var inst_23210 = (state_23280[(7)]);
var inst_23229 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23210);
var state_23280__$1 = state_23280;
var statearr_23321_23376 = state_23280__$1;
(statearr_23321_23376[(2)] = inst_23229);

(statearr_23321_23376[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (11))){
var inst_23210 = (state_23280[(7)]);
var inst_23214 = (inst_23210 == null);
var inst_23215 = cljs.core.not.call(null,inst_23214);
var state_23280__$1 = state_23280;
if(inst_23215){
var statearr_23322_23377 = state_23280__$1;
(statearr_23322_23377[(1)] = (13));

} else {
var statearr_23323_23378 = state_23280__$1;
(statearr_23323_23378[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (9))){
var inst_23186 = (state_23280[(8)]);
var state_23280__$1 = state_23280;
var statearr_23324_23379 = state_23280__$1;
(statearr_23324_23379[(2)] = inst_23186);

(statearr_23324_23379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (5))){
var state_23280__$1 = state_23280;
var statearr_23325_23380 = state_23280__$1;
(statearr_23325_23380[(2)] = true);

(statearr_23325_23380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (14))){
var state_23280__$1 = state_23280;
var statearr_23326_23381 = state_23280__$1;
(statearr_23326_23381[(2)] = false);

(statearr_23326_23381[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (26))){
var inst_23240 = (state_23280[(9)]);
var inst_23247 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23240);
var state_23280__$1 = state_23280;
var statearr_23327_23382 = state_23280__$1;
(statearr_23327_23382[(2)] = inst_23247);

(statearr_23327_23382[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (16))){
var state_23280__$1 = state_23280;
var statearr_23328_23383 = state_23280__$1;
(statearr_23328_23383[(2)] = true);

(statearr_23328_23383[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (38))){
var inst_23270 = (state_23280[(2)]);
var state_23280__$1 = state_23280;
var statearr_23329_23384 = state_23280__$1;
(statearr_23329_23384[(2)] = inst_23270);

(statearr_23329_23384[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (30))){
var inst_23234 = (state_23280[(13)]);
var inst_23240 = (state_23280[(9)]);
var inst_23233 = (state_23280[(11)]);
var inst_23257 = cljs.core.empty_QMARK_.call(null,inst_23233);
var inst_23258 = inst_23234.call(null,inst_23240);
var inst_23259 = cljs.core.not.call(null,inst_23258);
var inst_23260 = (inst_23257) && (inst_23259);
var state_23280__$1 = state_23280;
var statearr_23330_23385 = state_23280__$1;
(statearr_23330_23385[(2)] = inst_23260);

(statearr_23330_23385[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (10))){
var inst_23186 = (state_23280[(8)]);
var inst_23206 = (state_23280[(2)]);
var inst_23207 = cljs.core.get.call(null,inst_23206,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23208 = cljs.core.get.call(null,inst_23206,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23209 = cljs.core.get.call(null,inst_23206,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23210 = inst_23186;
var state_23280__$1 = (function (){var statearr_23331 = state_23280;
(statearr_23331[(7)] = inst_23210);

(statearr_23331[(16)] = inst_23207);

(statearr_23331[(17)] = inst_23208);

(statearr_23331[(18)] = inst_23209);

return statearr_23331;
})();
var statearr_23332_23386 = state_23280__$1;
(statearr_23332_23386[(2)] = null);

(statearr_23332_23386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (18))){
var inst_23224 = (state_23280[(2)]);
var state_23280__$1 = state_23280;
var statearr_23333_23387 = state_23280__$1;
(statearr_23333_23387[(2)] = inst_23224);

(statearr_23333_23387[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (37))){
var state_23280__$1 = state_23280;
var statearr_23334_23388 = state_23280__$1;
(statearr_23334_23388[(2)] = null);

(statearr_23334_23388[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23281 === (8))){
var inst_23186 = (state_23280[(8)]);
var inst_23203 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23186);
var state_23280__$1 = state_23280;
var statearr_23335_23389 = state_23280__$1;
(statearr_23335_23389[(2)] = inst_23203);

(statearr_23335_23389[(1)] = (10));


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
});})(c__21630__auto___23343,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21518__auto__,c__21630__auto___23343,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21519__auto__ = null;
var cljs$core$async$mix_$_state_machine__21519__auto____0 = (function (){
var statearr_23339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23339[(0)] = cljs$core$async$mix_$_state_machine__21519__auto__);

(statearr_23339[(1)] = (1));

return statearr_23339;
});
var cljs$core$async$mix_$_state_machine__21519__auto____1 = (function (state_23280){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_23280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e23340){if((e23340 instanceof Object)){
var ex__21522__auto__ = e23340;
var statearr_23341_23390 = state_23280;
(statearr_23341_23390[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23391 = state_23280;
state_23280 = G__23391;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21519__auto__ = function(state_23280){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21519__auto____1.call(this,state_23280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21519__auto____0;
cljs$core$async$mix_$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21519__auto____1;
return cljs$core$async$mix_$_state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto___23343,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21632__auto__ = (function (){var statearr_23342 = f__21631__auto__.call(null);
(statearr_23342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto___23343);

return statearr_23342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto___23343,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args23392 = [];
var len__19529__auto___23395 = arguments.length;
var i__19530__auto___23396 = (0);
while(true){
if((i__19530__auto___23396 < len__19529__auto___23395)){
args23392.push((arguments[i__19530__auto___23396]));

var G__23397 = (i__19530__auto___23396 + (1));
i__19530__auto___23396 = G__23397;
continue;
} else {
}
break;
}

var G__23394 = args23392.length;
switch (G__23394) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23392.length)].join('')));

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
var args23400 = [];
var len__19529__auto___23525 = arguments.length;
var i__19530__auto___23526 = (0);
while(true){
if((i__19530__auto___23526 < len__19529__auto___23525)){
args23400.push((arguments[i__19530__auto___23526]));

var G__23527 = (i__19530__auto___23526 + (1));
i__19530__auto___23526 = G__23527;
continue;
} else {
}
break;
}

var G__23402 = args23400.length;
switch (G__23402) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23400.length)].join('')));

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
return (function (p1__23399_SHARP_){
if(cljs.core.truth_(p1__23399_SHARP_.call(null,topic))){
return p1__23399_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23399_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18459__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23403 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23403 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23404){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23404 = meta23404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23405,meta23404__$1){
var self__ = this;
var _23405__$1 = this;
return (new cljs.core.async.t_cljs$core$async23403(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23404__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23403.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23405){
var self__ = this;
var _23405__$1 = this;
return self__.meta23404;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23403.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23403.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23403.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23403.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23403.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23403.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23403.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23403.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23404","meta23404",119372227,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23403.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23403";

cljs.core.async.t_cljs$core$async23403.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23403");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23403 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23403(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23404){
return (new cljs.core.async.t_cljs$core$async23403(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23404));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23403(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21630__auto___23529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto___23529,mults,ensure_mult,p){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto___23529,mults,ensure_mult,p){
return (function (state_23477){
var state_val_23478 = (state_23477[(1)]);
if((state_val_23478 === (7))){
var inst_23473 = (state_23477[(2)]);
var state_23477__$1 = state_23477;
var statearr_23479_23530 = state_23477__$1;
(statearr_23479_23530[(2)] = inst_23473);

(statearr_23479_23530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (20))){
var state_23477__$1 = state_23477;
var statearr_23480_23531 = state_23477__$1;
(statearr_23480_23531[(2)] = null);

(statearr_23480_23531[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (1))){
var state_23477__$1 = state_23477;
var statearr_23481_23532 = state_23477__$1;
(statearr_23481_23532[(2)] = null);

(statearr_23481_23532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (24))){
var inst_23456 = (state_23477[(7)]);
var inst_23465 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23456);
var state_23477__$1 = state_23477;
var statearr_23482_23533 = state_23477__$1;
(statearr_23482_23533[(2)] = inst_23465);

(statearr_23482_23533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (4))){
var inst_23408 = (state_23477[(8)]);
var inst_23408__$1 = (state_23477[(2)]);
var inst_23409 = (inst_23408__$1 == null);
var state_23477__$1 = (function (){var statearr_23483 = state_23477;
(statearr_23483[(8)] = inst_23408__$1);

return statearr_23483;
})();
if(cljs.core.truth_(inst_23409)){
var statearr_23484_23534 = state_23477__$1;
(statearr_23484_23534[(1)] = (5));

} else {
var statearr_23485_23535 = state_23477__$1;
(statearr_23485_23535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (15))){
var inst_23450 = (state_23477[(2)]);
var state_23477__$1 = state_23477;
var statearr_23486_23536 = state_23477__$1;
(statearr_23486_23536[(2)] = inst_23450);

(statearr_23486_23536[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (21))){
var inst_23470 = (state_23477[(2)]);
var state_23477__$1 = (function (){var statearr_23487 = state_23477;
(statearr_23487[(9)] = inst_23470);

return statearr_23487;
})();
var statearr_23488_23537 = state_23477__$1;
(statearr_23488_23537[(2)] = null);

(statearr_23488_23537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (13))){
var inst_23432 = (state_23477[(10)]);
var inst_23434 = cljs.core.chunked_seq_QMARK_.call(null,inst_23432);
var state_23477__$1 = state_23477;
if(inst_23434){
var statearr_23489_23538 = state_23477__$1;
(statearr_23489_23538[(1)] = (16));

} else {
var statearr_23490_23539 = state_23477__$1;
(statearr_23490_23539[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (22))){
var inst_23462 = (state_23477[(2)]);
var state_23477__$1 = state_23477;
if(cljs.core.truth_(inst_23462)){
var statearr_23491_23540 = state_23477__$1;
(statearr_23491_23540[(1)] = (23));

} else {
var statearr_23492_23541 = state_23477__$1;
(statearr_23492_23541[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (6))){
var inst_23408 = (state_23477[(8)]);
var inst_23458 = (state_23477[(11)]);
var inst_23456 = (state_23477[(7)]);
var inst_23456__$1 = topic_fn.call(null,inst_23408);
var inst_23457 = cljs.core.deref.call(null,mults);
var inst_23458__$1 = cljs.core.get.call(null,inst_23457,inst_23456__$1);
var state_23477__$1 = (function (){var statearr_23493 = state_23477;
(statearr_23493[(11)] = inst_23458__$1);

(statearr_23493[(7)] = inst_23456__$1);

return statearr_23493;
})();
if(cljs.core.truth_(inst_23458__$1)){
var statearr_23494_23542 = state_23477__$1;
(statearr_23494_23542[(1)] = (19));

} else {
var statearr_23495_23543 = state_23477__$1;
(statearr_23495_23543[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (25))){
var inst_23467 = (state_23477[(2)]);
var state_23477__$1 = state_23477;
var statearr_23496_23544 = state_23477__$1;
(statearr_23496_23544[(2)] = inst_23467);

(statearr_23496_23544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (17))){
var inst_23432 = (state_23477[(10)]);
var inst_23441 = cljs.core.first.call(null,inst_23432);
var inst_23442 = cljs.core.async.muxch_STAR_.call(null,inst_23441);
var inst_23443 = cljs.core.async.close_BANG_.call(null,inst_23442);
var inst_23444 = cljs.core.next.call(null,inst_23432);
var inst_23418 = inst_23444;
var inst_23419 = null;
var inst_23420 = (0);
var inst_23421 = (0);
var state_23477__$1 = (function (){var statearr_23497 = state_23477;
(statearr_23497[(12)] = inst_23420);

(statearr_23497[(13)] = inst_23443);

(statearr_23497[(14)] = inst_23418);

(statearr_23497[(15)] = inst_23419);

(statearr_23497[(16)] = inst_23421);

return statearr_23497;
})();
var statearr_23498_23545 = state_23477__$1;
(statearr_23498_23545[(2)] = null);

(statearr_23498_23545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (3))){
var inst_23475 = (state_23477[(2)]);
var state_23477__$1 = state_23477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23477__$1,inst_23475);
} else {
if((state_val_23478 === (12))){
var inst_23452 = (state_23477[(2)]);
var state_23477__$1 = state_23477;
var statearr_23499_23546 = state_23477__$1;
(statearr_23499_23546[(2)] = inst_23452);

(statearr_23499_23546[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (2))){
var state_23477__$1 = state_23477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23477__$1,(4),ch);
} else {
if((state_val_23478 === (23))){
var state_23477__$1 = state_23477;
var statearr_23500_23547 = state_23477__$1;
(statearr_23500_23547[(2)] = null);

(statearr_23500_23547[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (19))){
var inst_23408 = (state_23477[(8)]);
var inst_23458 = (state_23477[(11)]);
var inst_23460 = cljs.core.async.muxch_STAR_.call(null,inst_23458);
var state_23477__$1 = state_23477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23477__$1,(22),inst_23460,inst_23408);
} else {
if((state_val_23478 === (11))){
var inst_23418 = (state_23477[(14)]);
var inst_23432 = (state_23477[(10)]);
var inst_23432__$1 = cljs.core.seq.call(null,inst_23418);
var state_23477__$1 = (function (){var statearr_23501 = state_23477;
(statearr_23501[(10)] = inst_23432__$1);

return statearr_23501;
})();
if(inst_23432__$1){
var statearr_23502_23548 = state_23477__$1;
(statearr_23502_23548[(1)] = (13));

} else {
var statearr_23503_23549 = state_23477__$1;
(statearr_23503_23549[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (9))){
var inst_23454 = (state_23477[(2)]);
var state_23477__$1 = state_23477;
var statearr_23504_23550 = state_23477__$1;
(statearr_23504_23550[(2)] = inst_23454);

(statearr_23504_23550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (5))){
var inst_23415 = cljs.core.deref.call(null,mults);
var inst_23416 = cljs.core.vals.call(null,inst_23415);
var inst_23417 = cljs.core.seq.call(null,inst_23416);
var inst_23418 = inst_23417;
var inst_23419 = null;
var inst_23420 = (0);
var inst_23421 = (0);
var state_23477__$1 = (function (){var statearr_23505 = state_23477;
(statearr_23505[(12)] = inst_23420);

(statearr_23505[(14)] = inst_23418);

(statearr_23505[(15)] = inst_23419);

(statearr_23505[(16)] = inst_23421);

return statearr_23505;
})();
var statearr_23506_23551 = state_23477__$1;
(statearr_23506_23551[(2)] = null);

(statearr_23506_23551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (14))){
var state_23477__$1 = state_23477;
var statearr_23510_23552 = state_23477__$1;
(statearr_23510_23552[(2)] = null);

(statearr_23510_23552[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (16))){
var inst_23432 = (state_23477[(10)]);
var inst_23436 = cljs.core.chunk_first.call(null,inst_23432);
var inst_23437 = cljs.core.chunk_rest.call(null,inst_23432);
var inst_23438 = cljs.core.count.call(null,inst_23436);
var inst_23418 = inst_23437;
var inst_23419 = inst_23436;
var inst_23420 = inst_23438;
var inst_23421 = (0);
var state_23477__$1 = (function (){var statearr_23511 = state_23477;
(statearr_23511[(12)] = inst_23420);

(statearr_23511[(14)] = inst_23418);

(statearr_23511[(15)] = inst_23419);

(statearr_23511[(16)] = inst_23421);

return statearr_23511;
})();
var statearr_23512_23553 = state_23477__$1;
(statearr_23512_23553[(2)] = null);

(statearr_23512_23553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (10))){
var inst_23420 = (state_23477[(12)]);
var inst_23418 = (state_23477[(14)]);
var inst_23419 = (state_23477[(15)]);
var inst_23421 = (state_23477[(16)]);
var inst_23426 = cljs.core._nth.call(null,inst_23419,inst_23421);
var inst_23427 = cljs.core.async.muxch_STAR_.call(null,inst_23426);
var inst_23428 = cljs.core.async.close_BANG_.call(null,inst_23427);
var inst_23429 = (inst_23421 + (1));
var tmp23507 = inst_23420;
var tmp23508 = inst_23418;
var tmp23509 = inst_23419;
var inst_23418__$1 = tmp23508;
var inst_23419__$1 = tmp23509;
var inst_23420__$1 = tmp23507;
var inst_23421__$1 = inst_23429;
var state_23477__$1 = (function (){var statearr_23513 = state_23477;
(statearr_23513[(12)] = inst_23420__$1);

(statearr_23513[(14)] = inst_23418__$1);

(statearr_23513[(15)] = inst_23419__$1);

(statearr_23513[(17)] = inst_23428);

(statearr_23513[(16)] = inst_23421__$1);

return statearr_23513;
})();
var statearr_23514_23554 = state_23477__$1;
(statearr_23514_23554[(2)] = null);

(statearr_23514_23554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (18))){
var inst_23447 = (state_23477[(2)]);
var state_23477__$1 = state_23477;
var statearr_23515_23555 = state_23477__$1;
(statearr_23515_23555[(2)] = inst_23447);

(statearr_23515_23555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (8))){
var inst_23420 = (state_23477[(12)]);
var inst_23421 = (state_23477[(16)]);
var inst_23423 = (inst_23421 < inst_23420);
var inst_23424 = inst_23423;
var state_23477__$1 = state_23477;
if(cljs.core.truth_(inst_23424)){
var statearr_23516_23556 = state_23477__$1;
(statearr_23516_23556[(1)] = (10));

} else {
var statearr_23517_23557 = state_23477__$1;
(statearr_23517_23557[(1)] = (11));

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
});})(c__21630__auto___23529,mults,ensure_mult,p))
;
return ((function (switch__21518__auto__,c__21630__auto___23529,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21519__auto__ = null;
var cljs$core$async$state_machine__21519__auto____0 = (function (){
var statearr_23521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23521[(0)] = cljs$core$async$state_machine__21519__auto__);

(statearr_23521[(1)] = (1));

return statearr_23521;
});
var cljs$core$async$state_machine__21519__auto____1 = (function (state_23477){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_23477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e23522){if((e23522 instanceof Object)){
var ex__21522__auto__ = e23522;
var statearr_23523_23558 = state_23477;
(statearr_23523_23558[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23559 = state_23477;
state_23477 = G__23559;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$state_machine__21519__auto__ = function(state_23477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21519__auto____1.call(this,state_23477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21519__auto____0;
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21519__auto____1;
return cljs$core$async$state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto___23529,mults,ensure_mult,p))
})();
var state__21632__auto__ = (function (){var statearr_23524 = f__21631__auto__.call(null);
(statearr_23524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto___23529);

return statearr_23524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto___23529,mults,ensure_mult,p))
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
var args23560 = [];
var len__19529__auto___23563 = arguments.length;
var i__19530__auto___23564 = (0);
while(true){
if((i__19530__auto___23564 < len__19529__auto___23563)){
args23560.push((arguments[i__19530__auto___23564]));

var G__23565 = (i__19530__auto___23564 + (1));
i__19530__auto___23564 = G__23565;
continue;
} else {
}
break;
}

var G__23562 = args23560.length;
switch (G__23562) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23560.length)].join('')));

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
var args23567 = [];
var len__19529__auto___23570 = arguments.length;
var i__19530__auto___23571 = (0);
while(true){
if((i__19530__auto___23571 < len__19529__auto___23570)){
args23567.push((arguments[i__19530__auto___23571]));

var G__23572 = (i__19530__auto___23571 + (1));
i__19530__auto___23571 = G__23572;
continue;
} else {
}
break;
}

var G__23569 = args23567.length;
switch (G__23569) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23567.length)].join('')));

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
var args23574 = [];
var len__19529__auto___23645 = arguments.length;
var i__19530__auto___23646 = (0);
while(true){
if((i__19530__auto___23646 < len__19529__auto___23645)){
args23574.push((arguments[i__19530__auto___23646]));

var G__23647 = (i__19530__auto___23646 + (1));
i__19530__auto___23646 = G__23647;
continue;
} else {
}
break;
}

var G__23576 = args23574.length;
switch (G__23576) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23574.length)].join('')));

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
var c__21630__auto___23649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto___23649,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto___23649,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23615){
var state_val_23616 = (state_23615[(1)]);
if((state_val_23616 === (7))){
var state_23615__$1 = state_23615;
var statearr_23617_23650 = state_23615__$1;
(statearr_23617_23650[(2)] = null);

(statearr_23617_23650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23616 === (1))){
var state_23615__$1 = state_23615;
var statearr_23618_23651 = state_23615__$1;
(statearr_23618_23651[(2)] = null);

(statearr_23618_23651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23616 === (4))){
var inst_23579 = (state_23615[(7)]);
var inst_23581 = (inst_23579 < cnt);
var state_23615__$1 = state_23615;
if(cljs.core.truth_(inst_23581)){
var statearr_23619_23652 = state_23615__$1;
(statearr_23619_23652[(1)] = (6));

} else {
var statearr_23620_23653 = state_23615__$1;
(statearr_23620_23653[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23616 === (15))){
var inst_23611 = (state_23615[(2)]);
var state_23615__$1 = state_23615;
var statearr_23621_23654 = state_23615__$1;
(statearr_23621_23654[(2)] = inst_23611);

(statearr_23621_23654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23616 === (13))){
var inst_23604 = cljs.core.async.close_BANG_.call(null,out);
var state_23615__$1 = state_23615;
var statearr_23622_23655 = state_23615__$1;
(statearr_23622_23655[(2)] = inst_23604);

(statearr_23622_23655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23616 === (6))){
var state_23615__$1 = state_23615;
var statearr_23623_23656 = state_23615__$1;
(statearr_23623_23656[(2)] = null);

(statearr_23623_23656[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23616 === (3))){
var inst_23613 = (state_23615[(2)]);
var state_23615__$1 = state_23615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23615__$1,inst_23613);
} else {
if((state_val_23616 === (12))){
var inst_23601 = (state_23615[(8)]);
var inst_23601__$1 = (state_23615[(2)]);
var inst_23602 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23601__$1);
var state_23615__$1 = (function (){var statearr_23624 = state_23615;
(statearr_23624[(8)] = inst_23601__$1);

return statearr_23624;
})();
if(cljs.core.truth_(inst_23602)){
var statearr_23625_23657 = state_23615__$1;
(statearr_23625_23657[(1)] = (13));

} else {
var statearr_23626_23658 = state_23615__$1;
(statearr_23626_23658[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23616 === (2))){
var inst_23578 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23579 = (0);
var state_23615__$1 = (function (){var statearr_23627 = state_23615;
(statearr_23627[(9)] = inst_23578);

(statearr_23627[(7)] = inst_23579);

return statearr_23627;
})();
var statearr_23628_23659 = state_23615__$1;
(statearr_23628_23659[(2)] = null);

(statearr_23628_23659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23616 === (11))){
var inst_23579 = (state_23615[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23615,(10),Object,null,(9));
var inst_23588 = chs__$1.call(null,inst_23579);
var inst_23589 = done.call(null,inst_23579);
var inst_23590 = cljs.core.async.take_BANG_.call(null,inst_23588,inst_23589);
var state_23615__$1 = state_23615;
var statearr_23629_23660 = state_23615__$1;
(statearr_23629_23660[(2)] = inst_23590);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23615__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23616 === (9))){
var inst_23579 = (state_23615[(7)]);
var inst_23592 = (state_23615[(2)]);
var inst_23593 = (inst_23579 + (1));
var inst_23579__$1 = inst_23593;
var state_23615__$1 = (function (){var statearr_23630 = state_23615;
(statearr_23630[(7)] = inst_23579__$1);

(statearr_23630[(10)] = inst_23592);

return statearr_23630;
})();
var statearr_23631_23661 = state_23615__$1;
(statearr_23631_23661[(2)] = null);

(statearr_23631_23661[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23616 === (5))){
var inst_23599 = (state_23615[(2)]);
var state_23615__$1 = (function (){var statearr_23632 = state_23615;
(statearr_23632[(11)] = inst_23599);

return statearr_23632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23615__$1,(12),dchan);
} else {
if((state_val_23616 === (14))){
var inst_23601 = (state_23615[(8)]);
var inst_23606 = cljs.core.apply.call(null,f,inst_23601);
var state_23615__$1 = state_23615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23615__$1,(16),out,inst_23606);
} else {
if((state_val_23616 === (16))){
var inst_23608 = (state_23615[(2)]);
var state_23615__$1 = (function (){var statearr_23633 = state_23615;
(statearr_23633[(12)] = inst_23608);

return statearr_23633;
})();
var statearr_23634_23662 = state_23615__$1;
(statearr_23634_23662[(2)] = null);

(statearr_23634_23662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23616 === (10))){
var inst_23583 = (state_23615[(2)]);
var inst_23584 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23615__$1 = (function (){var statearr_23635 = state_23615;
(statearr_23635[(13)] = inst_23583);

return statearr_23635;
})();
var statearr_23636_23663 = state_23615__$1;
(statearr_23636_23663[(2)] = inst_23584);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23615__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23616 === (8))){
var inst_23597 = (state_23615[(2)]);
var state_23615__$1 = state_23615;
var statearr_23637_23664 = state_23615__$1;
(statearr_23637_23664[(2)] = inst_23597);

(statearr_23637_23664[(1)] = (5));


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
});})(c__21630__auto___23649,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21518__auto__,c__21630__auto___23649,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21519__auto__ = null;
var cljs$core$async$state_machine__21519__auto____0 = (function (){
var statearr_23641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23641[(0)] = cljs$core$async$state_machine__21519__auto__);

(statearr_23641[(1)] = (1));

return statearr_23641;
});
var cljs$core$async$state_machine__21519__auto____1 = (function (state_23615){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_23615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e23642){if((e23642 instanceof Object)){
var ex__21522__auto__ = e23642;
var statearr_23643_23665 = state_23615;
(statearr_23643_23665[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23666 = state_23615;
state_23615 = G__23666;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$state_machine__21519__auto__ = function(state_23615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21519__auto____1.call(this,state_23615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21519__auto____0;
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21519__auto____1;
return cljs$core$async$state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto___23649,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21632__auto__ = (function (){var statearr_23644 = f__21631__auto__.call(null);
(statearr_23644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto___23649);

return statearr_23644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto___23649,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args23668 = [];
var len__19529__auto___23724 = arguments.length;
var i__19530__auto___23725 = (0);
while(true){
if((i__19530__auto___23725 < len__19529__auto___23724)){
args23668.push((arguments[i__19530__auto___23725]));

var G__23726 = (i__19530__auto___23725 + (1));
i__19530__auto___23725 = G__23726;
continue;
} else {
}
break;
}

var G__23670 = args23668.length;
switch (G__23670) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23668.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21630__auto___23728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto___23728,out){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto___23728,out){
return (function (state_23700){
var state_val_23701 = (state_23700[(1)]);
if((state_val_23701 === (7))){
var inst_23679 = (state_23700[(7)]);
var inst_23680 = (state_23700[(8)]);
var inst_23679__$1 = (state_23700[(2)]);
var inst_23680__$1 = cljs.core.nth.call(null,inst_23679__$1,(0),null);
var inst_23681 = cljs.core.nth.call(null,inst_23679__$1,(1),null);
var inst_23682 = (inst_23680__$1 == null);
var state_23700__$1 = (function (){var statearr_23702 = state_23700;
(statearr_23702[(7)] = inst_23679__$1);

(statearr_23702[(9)] = inst_23681);

(statearr_23702[(8)] = inst_23680__$1);

return statearr_23702;
})();
if(cljs.core.truth_(inst_23682)){
var statearr_23703_23729 = state_23700__$1;
(statearr_23703_23729[(1)] = (8));

} else {
var statearr_23704_23730 = state_23700__$1;
(statearr_23704_23730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23701 === (1))){
var inst_23671 = cljs.core.vec.call(null,chs);
var inst_23672 = inst_23671;
var state_23700__$1 = (function (){var statearr_23705 = state_23700;
(statearr_23705[(10)] = inst_23672);

return statearr_23705;
})();
var statearr_23706_23731 = state_23700__$1;
(statearr_23706_23731[(2)] = null);

(statearr_23706_23731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23701 === (4))){
var inst_23672 = (state_23700[(10)]);
var state_23700__$1 = state_23700;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23700__$1,(7),inst_23672);
} else {
if((state_val_23701 === (6))){
var inst_23696 = (state_23700[(2)]);
var state_23700__$1 = state_23700;
var statearr_23707_23732 = state_23700__$1;
(statearr_23707_23732[(2)] = inst_23696);

(statearr_23707_23732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23701 === (3))){
var inst_23698 = (state_23700[(2)]);
var state_23700__$1 = state_23700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23700__$1,inst_23698);
} else {
if((state_val_23701 === (2))){
var inst_23672 = (state_23700[(10)]);
var inst_23674 = cljs.core.count.call(null,inst_23672);
var inst_23675 = (inst_23674 > (0));
var state_23700__$1 = state_23700;
if(cljs.core.truth_(inst_23675)){
var statearr_23709_23733 = state_23700__$1;
(statearr_23709_23733[(1)] = (4));

} else {
var statearr_23710_23734 = state_23700__$1;
(statearr_23710_23734[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23701 === (11))){
var inst_23672 = (state_23700[(10)]);
var inst_23689 = (state_23700[(2)]);
var tmp23708 = inst_23672;
var inst_23672__$1 = tmp23708;
var state_23700__$1 = (function (){var statearr_23711 = state_23700;
(statearr_23711[(10)] = inst_23672__$1);

(statearr_23711[(11)] = inst_23689);

return statearr_23711;
})();
var statearr_23712_23735 = state_23700__$1;
(statearr_23712_23735[(2)] = null);

(statearr_23712_23735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23701 === (9))){
var inst_23680 = (state_23700[(8)]);
var state_23700__$1 = state_23700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23700__$1,(11),out,inst_23680);
} else {
if((state_val_23701 === (5))){
var inst_23694 = cljs.core.async.close_BANG_.call(null,out);
var state_23700__$1 = state_23700;
var statearr_23713_23736 = state_23700__$1;
(statearr_23713_23736[(2)] = inst_23694);

(statearr_23713_23736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23701 === (10))){
var inst_23692 = (state_23700[(2)]);
var state_23700__$1 = state_23700;
var statearr_23714_23737 = state_23700__$1;
(statearr_23714_23737[(2)] = inst_23692);

(statearr_23714_23737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23701 === (8))){
var inst_23679 = (state_23700[(7)]);
var inst_23672 = (state_23700[(10)]);
var inst_23681 = (state_23700[(9)]);
var inst_23680 = (state_23700[(8)]);
var inst_23684 = (function (){var cs = inst_23672;
var vec__23677 = inst_23679;
var v = inst_23680;
var c = inst_23681;
return ((function (cs,vec__23677,v,c,inst_23679,inst_23672,inst_23681,inst_23680,state_val_23701,c__21630__auto___23728,out){
return (function (p1__23667_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23667_SHARP_);
});
;})(cs,vec__23677,v,c,inst_23679,inst_23672,inst_23681,inst_23680,state_val_23701,c__21630__auto___23728,out))
})();
var inst_23685 = cljs.core.filterv.call(null,inst_23684,inst_23672);
var inst_23672__$1 = inst_23685;
var state_23700__$1 = (function (){var statearr_23715 = state_23700;
(statearr_23715[(10)] = inst_23672__$1);

return statearr_23715;
})();
var statearr_23716_23738 = state_23700__$1;
(statearr_23716_23738[(2)] = null);

(statearr_23716_23738[(1)] = (2));


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
});})(c__21630__auto___23728,out))
;
return ((function (switch__21518__auto__,c__21630__auto___23728,out){
return (function() {
var cljs$core$async$state_machine__21519__auto__ = null;
var cljs$core$async$state_machine__21519__auto____0 = (function (){
var statearr_23720 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23720[(0)] = cljs$core$async$state_machine__21519__auto__);

(statearr_23720[(1)] = (1));

return statearr_23720;
});
var cljs$core$async$state_machine__21519__auto____1 = (function (state_23700){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_23700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e23721){if((e23721 instanceof Object)){
var ex__21522__auto__ = e23721;
var statearr_23722_23739 = state_23700;
(statearr_23722_23739[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23740 = state_23700;
state_23700 = G__23740;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$state_machine__21519__auto__ = function(state_23700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21519__auto____1.call(this,state_23700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21519__auto____0;
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21519__auto____1;
return cljs$core$async$state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto___23728,out))
})();
var state__21632__auto__ = (function (){var statearr_23723 = f__21631__auto__.call(null);
(statearr_23723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto___23728);

return statearr_23723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto___23728,out))
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
var args23741 = [];
var len__19529__auto___23790 = arguments.length;
var i__19530__auto___23791 = (0);
while(true){
if((i__19530__auto___23791 < len__19529__auto___23790)){
args23741.push((arguments[i__19530__auto___23791]));

var G__23792 = (i__19530__auto___23791 + (1));
i__19530__auto___23791 = G__23792;
continue;
} else {
}
break;
}

var G__23743 = args23741.length;
switch (G__23743) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23741.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21630__auto___23794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto___23794,out){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto___23794,out){
return (function (state_23767){
var state_val_23768 = (state_23767[(1)]);
if((state_val_23768 === (7))){
var inst_23749 = (state_23767[(7)]);
var inst_23749__$1 = (state_23767[(2)]);
var inst_23750 = (inst_23749__$1 == null);
var inst_23751 = cljs.core.not.call(null,inst_23750);
var state_23767__$1 = (function (){var statearr_23769 = state_23767;
(statearr_23769[(7)] = inst_23749__$1);

return statearr_23769;
})();
if(inst_23751){
var statearr_23770_23795 = state_23767__$1;
(statearr_23770_23795[(1)] = (8));

} else {
var statearr_23771_23796 = state_23767__$1;
(statearr_23771_23796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (1))){
var inst_23744 = (0);
var state_23767__$1 = (function (){var statearr_23772 = state_23767;
(statearr_23772[(8)] = inst_23744);

return statearr_23772;
})();
var statearr_23773_23797 = state_23767__$1;
(statearr_23773_23797[(2)] = null);

(statearr_23773_23797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (4))){
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23767__$1,(7),ch);
} else {
if((state_val_23768 === (6))){
var inst_23762 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23774_23798 = state_23767__$1;
(statearr_23774_23798[(2)] = inst_23762);

(statearr_23774_23798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (3))){
var inst_23764 = (state_23767[(2)]);
var inst_23765 = cljs.core.async.close_BANG_.call(null,out);
var state_23767__$1 = (function (){var statearr_23775 = state_23767;
(statearr_23775[(9)] = inst_23764);

return statearr_23775;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23767__$1,inst_23765);
} else {
if((state_val_23768 === (2))){
var inst_23744 = (state_23767[(8)]);
var inst_23746 = (inst_23744 < n);
var state_23767__$1 = state_23767;
if(cljs.core.truth_(inst_23746)){
var statearr_23776_23799 = state_23767__$1;
(statearr_23776_23799[(1)] = (4));

} else {
var statearr_23777_23800 = state_23767__$1;
(statearr_23777_23800[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (11))){
var inst_23744 = (state_23767[(8)]);
var inst_23754 = (state_23767[(2)]);
var inst_23755 = (inst_23744 + (1));
var inst_23744__$1 = inst_23755;
var state_23767__$1 = (function (){var statearr_23778 = state_23767;
(statearr_23778[(10)] = inst_23754);

(statearr_23778[(8)] = inst_23744__$1);

return statearr_23778;
})();
var statearr_23779_23801 = state_23767__$1;
(statearr_23779_23801[(2)] = null);

(statearr_23779_23801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (9))){
var state_23767__$1 = state_23767;
var statearr_23780_23802 = state_23767__$1;
(statearr_23780_23802[(2)] = null);

(statearr_23780_23802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (5))){
var state_23767__$1 = state_23767;
var statearr_23781_23803 = state_23767__$1;
(statearr_23781_23803[(2)] = null);

(statearr_23781_23803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (10))){
var inst_23759 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23782_23804 = state_23767__$1;
(statearr_23782_23804[(2)] = inst_23759);

(statearr_23782_23804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (8))){
var inst_23749 = (state_23767[(7)]);
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23767__$1,(11),out,inst_23749);
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
});})(c__21630__auto___23794,out))
;
return ((function (switch__21518__auto__,c__21630__auto___23794,out){
return (function() {
var cljs$core$async$state_machine__21519__auto__ = null;
var cljs$core$async$state_machine__21519__auto____0 = (function (){
var statearr_23786 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23786[(0)] = cljs$core$async$state_machine__21519__auto__);

(statearr_23786[(1)] = (1));

return statearr_23786;
});
var cljs$core$async$state_machine__21519__auto____1 = (function (state_23767){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_23767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e23787){if((e23787 instanceof Object)){
var ex__21522__auto__ = e23787;
var statearr_23788_23805 = state_23767;
(statearr_23788_23805[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23806 = state_23767;
state_23767 = G__23806;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$state_machine__21519__auto__ = function(state_23767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21519__auto____1.call(this,state_23767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21519__auto____0;
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21519__auto____1;
return cljs$core$async$state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto___23794,out))
})();
var state__21632__auto__ = (function (){var statearr_23789 = f__21631__auto__.call(null);
(statearr_23789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto___23794);

return statearr_23789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto___23794,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23814 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23814 = (function (map_LT_,f,ch,meta23815){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23815 = meta23815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23816,meta23815__$1){
var self__ = this;
var _23816__$1 = this;
return (new cljs.core.async.t_cljs$core$async23814(self__.map_LT_,self__.f,self__.ch,meta23815__$1));
});

cljs.core.async.t_cljs$core$async23814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23816){
var self__ = this;
var _23816__$1 = this;
return self__.meta23815;
});

cljs.core.async.t_cljs$core$async23814.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23814.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23814.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23814.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23814.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23817 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23817 = (function (map_LT_,f,ch,meta23815,_,fn1,meta23818){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23815 = meta23815;
this._ = _;
this.fn1 = fn1;
this.meta23818 = meta23818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23819,meta23818__$1){
var self__ = this;
var _23819__$1 = this;
return (new cljs.core.async.t_cljs$core$async23817(self__.map_LT_,self__.f,self__.ch,self__.meta23815,self__._,self__.fn1,meta23818__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23819){
var self__ = this;
var _23819__$1 = this;
return self__.meta23818;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23817.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23817.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23817.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23817.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23807_SHARP_){
return f1.call(null,(((p1__23807_SHARP_ == null))?null:self__.f.call(null,p1__23807_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23817.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23815","meta23815",718306534,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23814","cljs.core.async/t_cljs$core$async23814",-194722609,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23818","meta23818",-818848607,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23817.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23817";

cljs.core.async.t_cljs$core$async23817.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23817");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23817 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23817(map_LT___$1,f__$1,ch__$1,meta23815__$1,___$2,fn1__$1,meta23818){
return (new cljs.core.async.t_cljs$core$async23817(map_LT___$1,f__$1,ch__$1,meta23815__$1,___$2,fn1__$1,meta23818));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23817(self__.map_LT_,self__.f,self__.ch,self__.meta23815,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async23814.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23814.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23815","meta23815",718306534,null)], null);
});

cljs.core.async.t_cljs$core$async23814.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23814";

cljs.core.async.t_cljs$core$async23814.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23814");
});

cljs.core.async.__GT_t_cljs$core$async23814 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23814(map_LT___$1,f__$1,ch__$1,meta23815){
return (new cljs.core.async.t_cljs$core$async23814(map_LT___$1,f__$1,ch__$1,meta23815));
});

}

return (new cljs.core.async.t_cljs$core$async23814(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23823 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23823 = (function (map_GT_,f,ch,meta23824){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23824 = meta23824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23825,meta23824__$1){
var self__ = this;
var _23825__$1 = this;
return (new cljs.core.async.t_cljs$core$async23823(self__.map_GT_,self__.f,self__.ch,meta23824__$1));
});

cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23825){
var self__ = this;
var _23825__$1 = this;
return self__.meta23824;
});

cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23823.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23824","meta23824",1976837377,null)], null);
});

cljs.core.async.t_cljs$core$async23823.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23823";

cljs.core.async.t_cljs$core$async23823.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23823");
});

cljs.core.async.__GT_t_cljs$core$async23823 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23823(map_GT___$1,f__$1,ch__$1,meta23824){
return (new cljs.core.async.t_cljs$core$async23823(map_GT___$1,f__$1,ch__$1,meta23824));
});

}

return (new cljs.core.async.t_cljs$core$async23823(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23829 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23829 = (function (filter_GT_,p,ch,meta23830){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23830 = meta23830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23831,meta23830__$1){
var self__ = this;
var _23831__$1 = this;
return (new cljs.core.async.t_cljs$core$async23829(self__.filter_GT_,self__.p,self__.ch,meta23830__$1));
});

cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23831){
var self__ = this;
var _23831__$1 = this;
return self__.meta23830;
});

cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23830","meta23830",-225402136,null)], null);
});

cljs.core.async.t_cljs$core$async23829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23829";

cljs.core.async.t_cljs$core$async23829.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23829");
});

cljs.core.async.__GT_t_cljs$core$async23829 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23829(filter_GT___$1,p__$1,ch__$1,meta23830){
return (new cljs.core.async.t_cljs$core$async23829(filter_GT___$1,p__$1,ch__$1,meta23830));
});

}

return (new cljs.core.async.t_cljs$core$async23829(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args23832 = [];
var len__19529__auto___23876 = arguments.length;
var i__19530__auto___23877 = (0);
while(true){
if((i__19530__auto___23877 < len__19529__auto___23876)){
args23832.push((arguments[i__19530__auto___23877]));

var G__23878 = (i__19530__auto___23877 + (1));
i__19530__auto___23877 = G__23878;
continue;
} else {
}
break;
}

var G__23834 = args23832.length;
switch (G__23834) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23832.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21630__auto___23880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto___23880,out){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto___23880,out){
return (function (state_23855){
var state_val_23856 = (state_23855[(1)]);
if((state_val_23856 === (7))){
var inst_23851 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
var statearr_23857_23881 = state_23855__$1;
(statearr_23857_23881[(2)] = inst_23851);

(statearr_23857_23881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (1))){
var state_23855__$1 = state_23855;
var statearr_23858_23882 = state_23855__$1;
(statearr_23858_23882[(2)] = null);

(statearr_23858_23882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (4))){
var inst_23837 = (state_23855[(7)]);
var inst_23837__$1 = (state_23855[(2)]);
var inst_23838 = (inst_23837__$1 == null);
var state_23855__$1 = (function (){var statearr_23859 = state_23855;
(statearr_23859[(7)] = inst_23837__$1);

return statearr_23859;
})();
if(cljs.core.truth_(inst_23838)){
var statearr_23860_23883 = state_23855__$1;
(statearr_23860_23883[(1)] = (5));

} else {
var statearr_23861_23884 = state_23855__$1;
(statearr_23861_23884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (6))){
var inst_23837 = (state_23855[(7)]);
var inst_23842 = p.call(null,inst_23837);
var state_23855__$1 = state_23855;
if(cljs.core.truth_(inst_23842)){
var statearr_23862_23885 = state_23855__$1;
(statearr_23862_23885[(1)] = (8));

} else {
var statearr_23863_23886 = state_23855__$1;
(statearr_23863_23886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (3))){
var inst_23853 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23855__$1,inst_23853);
} else {
if((state_val_23856 === (2))){
var state_23855__$1 = state_23855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23855__$1,(4),ch);
} else {
if((state_val_23856 === (11))){
var inst_23845 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
var statearr_23864_23887 = state_23855__$1;
(statearr_23864_23887[(2)] = inst_23845);

(statearr_23864_23887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (9))){
var state_23855__$1 = state_23855;
var statearr_23865_23888 = state_23855__$1;
(statearr_23865_23888[(2)] = null);

(statearr_23865_23888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (5))){
var inst_23840 = cljs.core.async.close_BANG_.call(null,out);
var state_23855__$1 = state_23855;
var statearr_23866_23889 = state_23855__$1;
(statearr_23866_23889[(2)] = inst_23840);

(statearr_23866_23889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (10))){
var inst_23848 = (state_23855[(2)]);
var state_23855__$1 = (function (){var statearr_23867 = state_23855;
(statearr_23867[(8)] = inst_23848);

return statearr_23867;
})();
var statearr_23868_23890 = state_23855__$1;
(statearr_23868_23890[(2)] = null);

(statearr_23868_23890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (8))){
var inst_23837 = (state_23855[(7)]);
var state_23855__$1 = state_23855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23855__$1,(11),out,inst_23837);
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
});})(c__21630__auto___23880,out))
;
return ((function (switch__21518__auto__,c__21630__auto___23880,out){
return (function() {
var cljs$core$async$state_machine__21519__auto__ = null;
var cljs$core$async$state_machine__21519__auto____0 = (function (){
var statearr_23872 = [null,null,null,null,null,null,null,null,null];
(statearr_23872[(0)] = cljs$core$async$state_machine__21519__auto__);

(statearr_23872[(1)] = (1));

return statearr_23872;
});
var cljs$core$async$state_machine__21519__auto____1 = (function (state_23855){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_23855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e23873){if((e23873 instanceof Object)){
var ex__21522__auto__ = e23873;
var statearr_23874_23891 = state_23855;
(statearr_23874_23891[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23892 = state_23855;
state_23855 = G__23892;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$state_machine__21519__auto__ = function(state_23855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21519__auto____1.call(this,state_23855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21519__auto____0;
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21519__auto____1;
return cljs$core$async$state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto___23880,out))
})();
var state__21632__auto__ = (function (){var statearr_23875 = f__21631__auto__.call(null);
(statearr_23875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto___23880);

return statearr_23875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto___23880,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23893 = [];
var len__19529__auto___23896 = arguments.length;
var i__19530__auto___23897 = (0);
while(true){
if((i__19530__auto___23897 < len__19529__auto___23896)){
args23893.push((arguments[i__19530__auto___23897]));

var G__23898 = (i__19530__auto___23897 + (1));
i__19530__auto___23897 = G__23898;
continue;
} else {
}
break;
}

var G__23895 = args23893.length;
switch (G__23895) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23893.length)].join('')));

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
var c__21630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto__){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto__){
return (function (state_24065){
var state_val_24066 = (state_24065[(1)]);
if((state_val_24066 === (7))){
var inst_24061 = (state_24065[(2)]);
var state_24065__$1 = state_24065;
var statearr_24067_24108 = state_24065__$1;
(statearr_24067_24108[(2)] = inst_24061);

(statearr_24067_24108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24066 === (20))){
var inst_24031 = (state_24065[(7)]);
var inst_24042 = (state_24065[(2)]);
var inst_24043 = cljs.core.next.call(null,inst_24031);
var inst_24017 = inst_24043;
var inst_24018 = null;
var inst_24019 = (0);
var inst_24020 = (0);
var state_24065__$1 = (function (){var statearr_24068 = state_24065;
(statearr_24068[(8)] = inst_24017);

(statearr_24068[(9)] = inst_24018);

(statearr_24068[(10)] = inst_24019);

(statearr_24068[(11)] = inst_24020);

(statearr_24068[(12)] = inst_24042);

return statearr_24068;
})();
var statearr_24069_24109 = state_24065__$1;
(statearr_24069_24109[(2)] = null);

(statearr_24069_24109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24066 === (1))){
var state_24065__$1 = state_24065;
var statearr_24070_24110 = state_24065__$1;
(statearr_24070_24110[(2)] = null);

(statearr_24070_24110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24066 === (4))){
var inst_24006 = (state_24065[(13)]);
var inst_24006__$1 = (state_24065[(2)]);
var inst_24007 = (inst_24006__$1 == null);
var state_24065__$1 = (function (){var statearr_24071 = state_24065;
(statearr_24071[(13)] = inst_24006__$1);

return statearr_24071;
})();
if(cljs.core.truth_(inst_24007)){
var statearr_24072_24111 = state_24065__$1;
(statearr_24072_24111[(1)] = (5));

} else {
var statearr_24073_24112 = state_24065__$1;
(statearr_24073_24112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24066 === (15))){
var state_24065__$1 = state_24065;
var statearr_24077_24113 = state_24065__$1;
(statearr_24077_24113[(2)] = null);

(statearr_24077_24113[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24066 === (21))){
var state_24065__$1 = state_24065;
var statearr_24078_24114 = state_24065__$1;
(statearr_24078_24114[(2)] = null);

(statearr_24078_24114[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24066 === (13))){
var inst_24017 = (state_24065[(8)]);
var inst_24018 = (state_24065[(9)]);
var inst_24019 = (state_24065[(10)]);
var inst_24020 = (state_24065[(11)]);
var inst_24027 = (state_24065[(2)]);
var inst_24028 = (inst_24020 + (1));
var tmp24074 = inst_24017;
var tmp24075 = inst_24018;
var tmp24076 = inst_24019;
var inst_24017__$1 = tmp24074;
var inst_24018__$1 = tmp24075;
var inst_24019__$1 = tmp24076;
var inst_24020__$1 = inst_24028;
var state_24065__$1 = (function (){var statearr_24079 = state_24065;
(statearr_24079[(8)] = inst_24017__$1);

(statearr_24079[(14)] = inst_24027);

(statearr_24079[(9)] = inst_24018__$1);

(statearr_24079[(10)] = inst_24019__$1);

(statearr_24079[(11)] = inst_24020__$1);

return statearr_24079;
})();
var statearr_24080_24115 = state_24065__$1;
(statearr_24080_24115[(2)] = null);

(statearr_24080_24115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24066 === (22))){
var state_24065__$1 = state_24065;
var statearr_24081_24116 = state_24065__$1;
(statearr_24081_24116[(2)] = null);

(statearr_24081_24116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24066 === (6))){
var inst_24006 = (state_24065[(13)]);
var inst_24015 = f.call(null,inst_24006);
var inst_24016 = cljs.core.seq.call(null,inst_24015);
var inst_24017 = inst_24016;
var inst_24018 = null;
var inst_24019 = (0);
var inst_24020 = (0);
var state_24065__$1 = (function (){var statearr_24082 = state_24065;
(statearr_24082[(8)] = inst_24017);

(statearr_24082[(9)] = inst_24018);

(statearr_24082[(10)] = inst_24019);

(statearr_24082[(11)] = inst_24020);

return statearr_24082;
})();
var statearr_24083_24117 = state_24065__$1;
(statearr_24083_24117[(2)] = null);

(statearr_24083_24117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24066 === (17))){
var inst_24031 = (state_24065[(7)]);
var inst_24035 = cljs.core.chunk_first.call(null,inst_24031);
var inst_24036 = cljs.core.chunk_rest.call(null,inst_24031);
var inst_24037 = cljs.core.count.call(null,inst_24035);
var inst_24017 = inst_24036;
var inst_24018 = inst_24035;
var inst_24019 = inst_24037;
var inst_24020 = (0);
var state_24065__$1 = (function (){var statearr_24084 = state_24065;
(statearr_24084[(8)] = inst_24017);

(statearr_24084[(9)] = inst_24018);

(statearr_24084[(10)] = inst_24019);

(statearr_24084[(11)] = inst_24020);

return statearr_24084;
})();
var statearr_24085_24118 = state_24065__$1;
(statearr_24085_24118[(2)] = null);

(statearr_24085_24118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24066 === (3))){
var inst_24063 = (state_24065[(2)]);
var state_24065__$1 = state_24065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24065__$1,inst_24063);
} else {
if((state_val_24066 === (12))){
var inst_24051 = (state_24065[(2)]);
var state_24065__$1 = state_24065;
var statearr_24086_24119 = state_24065__$1;
(statearr_24086_24119[(2)] = inst_24051);

(statearr_24086_24119[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24066 === (2))){
var state_24065__$1 = state_24065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24065__$1,(4),in$);
} else {
if((state_val_24066 === (23))){
var inst_24059 = (state_24065[(2)]);
var state_24065__$1 = state_24065;
var statearr_24087_24120 = state_24065__$1;
(statearr_24087_24120[(2)] = inst_24059);

(statearr_24087_24120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24066 === (19))){
var inst_24046 = (state_24065[(2)]);
var state_24065__$1 = state_24065;
var statearr_24088_24121 = state_24065__$1;
(statearr_24088_24121[(2)] = inst_24046);

(statearr_24088_24121[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24066 === (11))){
var inst_24017 = (state_24065[(8)]);
var inst_24031 = (state_24065[(7)]);
var inst_24031__$1 = cljs.core.seq.call(null,inst_24017);
var state_24065__$1 = (function (){var statearr_24089 = state_24065;
(statearr_24089[(7)] = inst_24031__$1);

return statearr_24089;
})();
if(inst_24031__$1){
var statearr_24090_24122 = state_24065__$1;
(statearr_24090_24122[(1)] = (14));

} else {
var statearr_24091_24123 = state_24065__$1;
(statearr_24091_24123[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24066 === (9))){
var inst_24053 = (state_24065[(2)]);
var inst_24054 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24065__$1 = (function (){var statearr_24092 = state_24065;
(statearr_24092[(15)] = inst_24053);

return statearr_24092;
})();
if(cljs.core.truth_(inst_24054)){
var statearr_24093_24124 = state_24065__$1;
(statearr_24093_24124[(1)] = (21));

} else {
var statearr_24094_24125 = state_24065__$1;
(statearr_24094_24125[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24066 === (5))){
var inst_24009 = cljs.core.async.close_BANG_.call(null,out);
var state_24065__$1 = state_24065;
var statearr_24095_24126 = state_24065__$1;
(statearr_24095_24126[(2)] = inst_24009);

(statearr_24095_24126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24066 === (14))){
var inst_24031 = (state_24065[(7)]);
var inst_24033 = cljs.core.chunked_seq_QMARK_.call(null,inst_24031);
var state_24065__$1 = state_24065;
if(inst_24033){
var statearr_24096_24127 = state_24065__$1;
(statearr_24096_24127[(1)] = (17));

} else {
var statearr_24097_24128 = state_24065__$1;
(statearr_24097_24128[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24066 === (16))){
var inst_24049 = (state_24065[(2)]);
var state_24065__$1 = state_24065;
var statearr_24098_24129 = state_24065__$1;
(statearr_24098_24129[(2)] = inst_24049);

(statearr_24098_24129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24066 === (10))){
var inst_24018 = (state_24065[(9)]);
var inst_24020 = (state_24065[(11)]);
var inst_24025 = cljs.core._nth.call(null,inst_24018,inst_24020);
var state_24065__$1 = state_24065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24065__$1,(13),out,inst_24025);
} else {
if((state_val_24066 === (18))){
var inst_24031 = (state_24065[(7)]);
var inst_24040 = cljs.core.first.call(null,inst_24031);
var state_24065__$1 = state_24065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24065__$1,(20),out,inst_24040);
} else {
if((state_val_24066 === (8))){
var inst_24019 = (state_24065[(10)]);
var inst_24020 = (state_24065[(11)]);
var inst_24022 = (inst_24020 < inst_24019);
var inst_24023 = inst_24022;
var state_24065__$1 = state_24065;
if(cljs.core.truth_(inst_24023)){
var statearr_24099_24130 = state_24065__$1;
(statearr_24099_24130[(1)] = (10));

} else {
var statearr_24100_24131 = state_24065__$1;
(statearr_24100_24131[(1)] = (11));

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
});})(c__21630__auto__))
;
return ((function (switch__21518__auto__,c__21630__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21519__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21519__auto____0 = (function (){
var statearr_24104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24104[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21519__auto__);

(statearr_24104[(1)] = (1));

return statearr_24104;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21519__auto____1 = (function (state_24065){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_24065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e24105){if((e24105 instanceof Object)){
var ex__21522__auto__ = e24105;
var statearr_24106_24132 = state_24065;
(statearr_24106_24132[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24133 = state_24065;
state_24065 = G__24133;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21519__auto__ = function(state_24065){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21519__auto____1.call(this,state_24065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21519__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21519__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto__))
})();
var state__21632__auto__ = (function (){var statearr_24107 = f__21631__auto__.call(null);
(statearr_24107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto__);

return statearr_24107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto__))
);

return c__21630__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24134 = [];
var len__19529__auto___24137 = arguments.length;
var i__19530__auto___24138 = (0);
while(true){
if((i__19530__auto___24138 < len__19529__auto___24137)){
args24134.push((arguments[i__19530__auto___24138]));

var G__24139 = (i__19530__auto___24138 + (1));
i__19530__auto___24138 = G__24139;
continue;
} else {
}
break;
}

var G__24136 = args24134.length;
switch (G__24136) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24134.length)].join('')));

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
var args24141 = [];
var len__19529__auto___24144 = arguments.length;
var i__19530__auto___24145 = (0);
while(true){
if((i__19530__auto___24145 < len__19529__auto___24144)){
args24141.push((arguments[i__19530__auto___24145]));

var G__24146 = (i__19530__auto___24145 + (1));
i__19530__auto___24145 = G__24146;
continue;
} else {
}
break;
}

var G__24143 = args24141.length;
switch (G__24143) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24141.length)].join('')));

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
var args24148 = [];
var len__19529__auto___24199 = arguments.length;
var i__19530__auto___24200 = (0);
while(true){
if((i__19530__auto___24200 < len__19529__auto___24199)){
args24148.push((arguments[i__19530__auto___24200]));

var G__24201 = (i__19530__auto___24200 + (1));
i__19530__auto___24200 = G__24201;
continue;
} else {
}
break;
}

var G__24150 = args24148.length;
switch (G__24150) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24148.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21630__auto___24203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto___24203,out){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto___24203,out){
return (function (state_24174){
var state_val_24175 = (state_24174[(1)]);
if((state_val_24175 === (7))){
var inst_24169 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24176_24204 = state_24174__$1;
(statearr_24176_24204[(2)] = inst_24169);

(statearr_24176_24204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (1))){
var inst_24151 = null;
var state_24174__$1 = (function (){var statearr_24177 = state_24174;
(statearr_24177[(7)] = inst_24151);

return statearr_24177;
})();
var statearr_24178_24205 = state_24174__$1;
(statearr_24178_24205[(2)] = null);

(statearr_24178_24205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (4))){
var inst_24154 = (state_24174[(8)]);
var inst_24154__$1 = (state_24174[(2)]);
var inst_24155 = (inst_24154__$1 == null);
var inst_24156 = cljs.core.not.call(null,inst_24155);
var state_24174__$1 = (function (){var statearr_24179 = state_24174;
(statearr_24179[(8)] = inst_24154__$1);

return statearr_24179;
})();
if(inst_24156){
var statearr_24180_24206 = state_24174__$1;
(statearr_24180_24206[(1)] = (5));

} else {
var statearr_24181_24207 = state_24174__$1;
(statearr_24181_24207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (6))){
var state_24174__$1 = state_24174;
var statearr_24182_24208 = state_24174__$1;
(statearr_24182_24208[(2)] = null);

(statearr_24182_24208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (3))){
var inst_24171 = (state_24174[(2)]);
var inst_24172 = cljs.core.async.close_BANG_.call(null,out);
var state_24174__$1 = (function (){var statearr_24183 = state_24174;
(statearr_24183[(9)] = inst_24171);

return statearr_24183;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24174__$1,inst_24172);
} else {
if((state_val_24175 === (2))){
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24174__$1,(4),ch);
} else {
if((state_val_24175 === (11))){
var inst_24154 = (state_24174[(8)]);
var inst_24163 = (state_24174[(2)]);
var inst_24151 = inst_24154;
var state_24174__$1 = (function (){var statearr_24184 = state_24174;
(statearr_24184[(10)] = inst_24163);

(statearr_24184[(7)] = inst_24151);

return statearr_24184;
})();
var statearr_24185_24209 = state_24174__$1;
(statearr_24185_24209[(2)] = null);

(statearr_24185_24209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (9))){
var inst_24154 = (state_24174[(8)]);
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24174__$1,(11),out,inst_24154);
} else {
if((state_val_24175 === (5))){
var inst_24154 = (state_24174[(8)]);
var inst_24151 = (state_24174[(7)]);
var inst_24158 = cljs.core._EQ_.call(null,inst_24154,inst_24151);
var state_24174__$1 = state_24174;
if(inst_24158){
var statearr_24187_24210 = state_24174__$1;
(statearr_24187_24210[(1)] = (8));

} else {
var statearr_24188_24211 = state_24174__$1;
(statearr_24188_24211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (10))){
var inst_24166 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24189_24212 = state_24174__$1;
(statearr_24189_24212[(2)] = inst_24166);

(statearr_24189_24212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (8))){
var inst_24151 = (state_24174[(7)]);
var tmp24186 = inst_24151;
var inst_24151__$1 = tmp24186;
var state_24174__$1 = (function (){var statearr_24190 = state_24174;
(statearr_24190[(7)] = inst_24151__$1);

return statearr_24190;
})();
var statearr_24191_24213 = state_24174__$1;
(statearr_24191_24213[(2)] = null);

(statearr_24191_24213[(1)] = (2));


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
});})(c__21630__auto___24203,out))
;
return ((function (switch__21518__auto__,c__21630__auto___24203,out){
return (function() {
var cljs$core$async$state_machine__21519__auto__ = null;
var cljs$core$async$state_machine__21519__auto____0 = (function (){
var statearr_24195 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24195[(0)] = cljs$core$async$state_machine__21519__auto__);

(statearr_24195[(1)] = (1));

return statearr_24195;
});
var cljs$core$async$state_machine__21519__auto____1 = (function (state_24174){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_24174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e24196){if((e24196 instanceof Object)){
var ex__21522__auto__ = e24196;
var statearr_24197_24214 = state_24174;
(statearr_24197_24214[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24215 = state_24174;
state_24174 = G__24215;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$state_machine__21519__auto__ = function(state_24174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21519__auto____1.call(this,state_24174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21519__auto____0;
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21519__auto____1;
return cljs$core$async$state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto___24203,out))
})();
var state__21632__auto__ = (function (){var statearr_24198 = f__21631__auto__.call(null);
(statearr_24198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto___24203);

return statearr_24198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto___24203,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24216 = [];
var len__19529__auto___24286 = arguments.length;
var i__19530__auto___24287 = (0);
while(true){
if((i__19530__auto___24287 < len__19529__auto___24286)){
args24216.push((arguments[i__19530__auto___24287]));

var G__24288 = (i__19530__auto___24287 + (1));
i__19530__auto___24287 = G__24288;
continue;
} else {
}
break;
}

var G__24218 = args24216.length;
switch (G__24218) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24216.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21630__auto___24290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto___24290,out){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto___24290,out){
return (function (state_24256){
var state_val_24257 = (state_24256[(1)]);
if((state_val_24257 === (7))){
var inst_24252 = (state_24256[(2)]);
var state_24256__$1 = state_24256;
var statearr_24258_24291 = state_24256__$1;
(statearr_24258_24291[(2)] = inst_24252);

(statearr_24258_24291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24257 === (1))){
var inst_24219 = (new Array(n));
var inst_24220 = inst_24219;
var inst_24221 = (0);
var state_24256__$1 = (function (){var statearr_24259 = state_24256;
(statearr_24259[(7)] = inst_24220);

(statearr_24259[(8)] = inst_24221);

return statearr_24259;
})();
var statearr_24260_24292 = state_24256__$1;
(statearr_24260_24292[(2)] = null);

(statearr_24260_24292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24257 === (4))){
var inst_24224 = (state_24256[(9)]);
var inst_24224__$1 = (state_24256[(2)]);
var inst_24225 = (inst_24224__$1 == null);
var inst_24226 = cljs.core.not.call(null,inst_24225);
var state_24256__$1 = (function (){var statearr_24261 = state_24256;
(statearr_24261[(9)] = inst_24224__$1);

return statearr_24261;
})();
if(inst_24226){
var statearr_24262_24293 = state_24256__$1;
(statearr_24262_24293[(1)] = (5));

} else {
var statearr_24263_24294 = state_24256__$1;
(statearr_24263_24294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24257 === (15))){
var inst_24246 = (state_24256[(2)]);
var state_24256__$1 = state_24256;
var statearr_24264_24295 = state_24256__$1;
(statearr_24264_24295[(2)] = inst_24246);

(statearr_24264_24295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24257 === (13))){
var state_24256__$1 = state_24256;
var statearr_24265_24296 = state_24256__$1;
(statearr_24265_24296[(2)] = null);

(statearr_24265_24296[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24257 === (6))){
var inst_24221 = (state_24256[(8)]);
var inst_24242 = (inst_24221 > (0));
var state_24256__$1 = state_24256;
if(cljs.core.truth_(inst_24242)){
var statearr_24266_24297 = state_24256__$1;
(statearr_24266_24297[(1)] = (12));

} else {
var statearr_24267_24298 = state_24256__$1;
(statearr_24267_24298[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24257 === (3))){
var inst_24254 = (state_24256[(2)]);
var state_24256__$1 = state_24256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24256__$1,inst_24254);
} else {
if((state_val_24257 === (12))){
var inst_24220 = (state_24256[(7)]);
var inst_24244 = cljs.core.vec.call(null,inst_24220);
var state_24256__$1 = state_24256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24256__$1,(15),out,inst_24244);
} else {
if((state_val_24257 === (2))){
var state_24256__$1 = state_24256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24256__$1,(4),ch);
} else {
if((state_val_24257 === (11))){
var inst_24236 = (state_24256[(2)]);
var inst_24237 = (new Array(n));
var inst_24220 = inst_24237;
var inst_24221 = (0);
var state_24256__$1 = (function (){var statearr_24268 = state_24256;
(statearr_24268[(7)] = inst_24220);

(statearr_24268[(10)] = inst_24236);

(statearr_24268[(8)] = inst_24221);

return statearr_24268;
})();
var statearr_24269_24299 = state_24256__$1;
(statearr_24269_24299[(2)] = null);

(statearr_24269_24299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24257 === (9))){
var inst_24220 = (state_24256[(7)]);
var inst_24234 = cljs.core.vec.call(null,inst_24220);
var state_24256__$1 = state_24256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24256__$1,(11),out,inst_24234);
} else {
if((state_val_24257 === (5))){
var inst_24220 = (state_24256[(7)]);
var inst_24229 = (state_24256[(11)]);
var inst_24221 = (state_24256[(8)]);
var inst_24224 = (state_24256[(9)]);
var inst_24228 = (inst_24220[inst_24221] = inst_24224);
var inst_24229__$1 = (inst_24221 + (1));
var inst_24230 = (inst_24229__$1 < n);
var state_24256__$1 = (function (){var statearr_24270 = state_24256;
(statearr_24270[(12)] = inst_24228);

(statearr_24270[(11)] = inst_24229__$1);

return statearr_24270;
})();
if(cljs.core.truth_(inst_24230)){
var statearr_24271_24300 = state_24256__$1;
(statearr_24271_24300[(1)] = (8));

} else {
var statearr_24272_24301 = state_24256__$1;
(statearr_24272_24301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24257 === (14))){
var inst_24249 = (state_24256[(2)]);
var inst_24250 = cljs.core.async.close_BANG_.call(null,out);
var state_24256__$1 = (function (){var statearr_24274 = state_24256;
(statearr_24274[(13)] = inst_24249);

return statearr_24274;
})();
var statearr_24275_24302 = state_24256__$1;
(statearr_24275_24302[(2)] = inst_24250);

(statearr_24275_24302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24257 === (10))){
var inst_24240 = (state_24256[(2)]);
var state_24256__$1 = state_24256;
var statearr_24276_24303 = state_24256__$1;
(statearr_24276_24303[(2)] = inst_24240);

(statearr_24276_24303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24257 === (8))){
var inst_24220 = (state_24256[(7)]);
var inst_24229 = (state_24256[(11)]);
var tmp24273 = inst_24220;
var inst_24220__$1 = tmp24273;
var inst_24221 = inst_24229;
var state_24256__$1 = (function (){var statearr_24277 = state_24256;
(statearr_24277[(7)] = inst_24220__$1);

(statearr_24277[(8)] = inst_24221);

return statearr_24277;
})();
var statearr_24278_24304 = state_24256__$1;
(statearr_24278_24304[(2)] = null);

(statearr_24278_24304[(1)] = (2));


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
});})(c__21630__auto___24290,out))
;
return ((function (switch__21518__auto__,c__21630__auto___24290,out){
return (function() {
var cljs$core$async$state_machine__21519__auto__ = null;
var cljs$core$async$state_machine__21519__auto____0 = (function (){
var statearr_24282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24282[(0)] = cljs$core$async$state_machine__21519__auto__);

(statearr_24282[(1)] = (1));

return statearr_24282;
});
var cljs$core$async$state_machine__21519__auto____1 = (function (state_24256){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_24256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e24283){if((e24283 instanceof Object)){
var ex__21522__auto__ = e24283;
var statearr_24284_24305 = state_24256;
(statearr_24284_24305[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24306 = state_24256;
state_24256 = G__24306;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$state_machine__21519__auto__ = function(state_24256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21519__auto____1.call(this,state_24256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21519__auto____0;
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21519__auto____1;
return cljs$core$async$state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto___24290,out))
})();
var state__21632__auto__ = (function (){var statearr_24285 = f__21631__auto__.call(null);
(statearr_24285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto___24290);

return statearr_24285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto___24290,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24307 = [];
var len__19529__auto___24381 = arguments.length;
var i__19530__auto___24382 = (0);
while(true){
if((i__19530__auto___24382 < len__19529__auto___24381)){
args24307.push((arguments[i__19530__auto___24382]));

var G__24383 = (i__19530__auto___24382 + (1));
i__19530__auto___24382 = G__24383;
continue;
} else {
}
break;
}

var G__24309 = args24307.length;
switch (G__24309) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24307.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21630__auto___24385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21630__auto___24385,out){
return (function (){
var f__21631__auto__ = (function (){var switch__21518__auto__ = ((function (c__21630__auto___24385,out){
return (function (state_24351){
var state_val_24352 = (state_24351[(1)]);
if((state_val_24352 === (7))){
var inst_24347 = (state_24351[(2)]);
var state_24351__$1 = state_24351;
var statearr_24353_24386 = state_24351__$1;
(statearr_24353_24386[(2)] = inst_24347);

(statearr_24353_24386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (1))){
var inst_24310 = [];
var inst_24311 = inst_24310;
var inst_24312 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24351__$1 = (function (){var statearr_24354 = state_24351;
(statearr_24354[(7)] = inst_24311);

(statearr_24354[(8)] = inst_24312);

return statearr_24354;
})();
var statearr_24355_24387 = state_24351__$1;
(statearr_24355_24387[(2)] = null);

(statearr_24355_24387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (4))){
var inst_24315 = (state_24351[(9)]);
var inst_24315__$1 = (state_24351[(2)]);
var inst_24316 = (inst_24315__$1 == null);
var inst_24317 = cljs.core.not.call(null,inst_24316);
var state_24351__$1 = (function (){var statearr_24356 = state_24351;
(statearr_24356[(9)] = inst_24315__$1);

return statearr_24356;
})();
if(inst_24317){
var statearr_24357_24388 = state_24351__$1;
(statearr_24357_24388[(1)] = (5));

} else {
var statearr_24358_24389 = state_24351__$1;
(statearr_24358_24389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (15))){
var inst_24341 = (state_24351[(2)]);
var state_24351__$1 = state_24351;
var statearr_24359_24390 = state_24351__$1;
(statearr_24359_24390[(2)] = inst_24341);

(statearr_24359_24390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (13))){
var state_24351__$1 = state_24351;
var statearr_24360_24391 = state_24351__$1;
(statearr_24360_24391[(2)] = null);

(statearr_24360_24391[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (6))){
var inst_24311 = (state_24351[(7)]);
var inst_24336 = inst_24311.length;
var inst_24337 = (inst_24336 > (0));
var state_24351__$1 = state_24351;
if(cljs.core.truth_(inst_24337)){
var statearr_24361_24392 = state_24351__$1;
(statearr_24361_24392[(1)] = (12));

} else {
var statearr_24362_24393 = state_24351__$1;
(statearr_24362_24393[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (3))){
var inst_24349 = (state_24351[(2)]);
var state_24351__$1 = state_24351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24351__$1,inst_24349);
} else {
if((state_val_24352 === (12))){
var inst_24311 = (state_24351[(7)]);
var inst_24339 = cljs.core.vec.call(null,inst_24311);
var state_24351__$1 = state_24351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24351__$1,(15),out,inst_24339);
} else {
if((state_val_24352 === (2))){
var state_24351__$1 = state_24351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24351__$1,(4),ch);
} else {
if((state_val_24352 === (11))){
var inst_24319 = (state_24351[(10)]);
var inst_24315 = (state_24351[(9)]);
var inst_24329 = (state_24351[(2)]);
var inst_24330 = [];
var inst_24331 = inst_24330.push(inst_24315);
var inst_24311 = inst_24330;
var inst_24312 = inst_24319;
var state_24351__$1 = (function (){var statearr_24363 = state_24351;
(statearr_24363[(11)] = inst_24331);

(statearr_24363[(7)] = inst_24311);

(statearr_24363[(12)] = inst_24329);

(statearr_24363[(8)] = inst_24312);

return statearr_24363;
})();
var statearr_24364_24394 = state_24351__$1;
(statearr_24364_24394[(2)] = null);

(statearr_24364_24394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (9))){
var inst_24311 = (state_24351[(7)]);
var inst_24327 = cljs.core.vec.call(null,inst_24311);
var state_24351__$1 = state_24351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24351__$1,(11),out,inst_24327);
} else {
if((state_val_24352 === (5))){
var inst_24319 = (state_24351[(10)]);
var inst_24312 = (state_24351[(8)]);
var inst_24315 = (state_24351[(9)]);
var inst_24319__$1 = f.call(null,inst_24315);
var inst_24320 = cljs.core._EQ_.call(null,inst_24319__$1,inst_24312);
var inst_24321 = cljs.core.keyword_identical_QMARK_.call(null,inst_24312,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24322 = (inst_24320) || (inst_24321);
var state_24351__$1 = (function (){var statearr_24365 = state_24351;
(statearr_24365[(10)] = inst_24319__$1);

return statearr_24365;
})();
if(cljs.core.truth_(inst_24322)){
var statearr_24366_24395 = state_24351__$1;
(statearr_24366_24395[(1)] = (8));

} else {
var statearr_24367_24396 = state_24351__$1;
(statearr_24367_24396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (14))){
var inst_24344 = (state_24351[(2)]);
var inst_24345 = cljs.core.async.close_BANG_.call(null,out);
var state_24351__$1 = (function (){var statearr_24369 = state_24351;
(statearr_24369[(13)] = inst_24344);

return statearr_24369;
})();
var statearr_24370_24397 = state_24351__$1;
(statearr_24370_24397[(2)] = inst_24345);

(statearr_24370_24397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (10))){
var inst_24334 = (state_24351[(2)]);
var state_24351__$1 = state_24351;
var statearr_24371_24398 = state_24351__$1;
(statearr_24371_24398[(2)] = inst_24334);

(statearr_24371_24398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (8))){
var inst_24319 = (state_24351[(10)]);
var inst_24311 = (state_24351[(7)]);
var inst_24315 = (state_24351[(9)]);
var inst_24324 = inst_24311.push(inst_24315);
var tmp24368 = inst_24311;
var inst_24311__$1 = tmp24368;
var inst_24312 = inst_24319;
var state_24351__$1 = (function (){var statearr_24372 = state_24351;
(statearr_24372[(14)] = inst_24324);

(statearr_24372[(7)] = inst_24311__$1);

(statearr_24372[(8)] = inst_24312);

return statearr_24372;
})();
var statearr_24373_24399 = state_24351__$1;
(statearr_24373_24399[(2)] = null);

(statearr_24373_24399[(1)] = (2));


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
});})(c__21630__auto___24385,out))
;
return ((function (switch__21518__auto__,c__21630__auto___24385,out){
return (function() {
var cljs$core$async$state_machine__21519__auto__ = null;
var cljs$core$async$state_machine__21519__auto____0 = (function (){
var statearr_24377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24377[(0)] = cljs$core$async$state_machine__21519__auto__);

(statearr_24377[(1)] = (1));

return statearr_24377;
});
var cljs$core$async$state_machine__21519__auto____1 = (function (state_24351){
while(true){
var ret_value__21520__auto__ = (function (){try{while(true){
var result__21521__auto__ = switch__21518__auto__.call(null,state_24351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21521__auto__;
}
break;
}
}catch (e24378){if((e24378 instanceof Object)){
var ex__21522__auto__ = e24378;
var statearr_24379_24400 = state_24351;
(statearr_24379_24400[(5)] = ex__21522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24401 = state_24351;
state_24351 = G__24401;
continue;
} else {
return ret_value__21520__auto__;
}
break;
}
});
cljs$core$async$state_machine__21519__auto__ = function(state_24351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21519__auto____1.call(this,state_24351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21519__auto____0;
cljs$core$async$state_machine__21519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21519__auto____1;
return cljs$core$async$state_machine__21519__auto__;
})()
;})(switch__21518__auto__,c__21630__auto___24385,out))
})();
var state__21632__auto__ = (function (){var statearr_24380 = f__21631__auto__.call(null);
(statearr_24380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21630__auto___24385);

return statearr_24380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21632__auto__);
});})(c__21630__auto___24385,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1505315425366