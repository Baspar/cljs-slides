// Compiled by ClojureScript 1.8.51 {}
goog.provide('template.core');
goog.require('cljs.core');
goog.require('template.state');
goog.require('template.ui');
goog.require('cljs.core.async');
goog.require('template.dispatch');
goog.require('sablono.core');
goog.require('clojure.string');
goog.require('template.cards.app');
cljs.core.enable_console_print_BANG_.call(null);
template.core.render_app = (function template$core$render_app(dom_node){

return (function (_,a,o,n){
return ReactDOM.render(template.ui.page.call(null,a),dom_node);
});
});
template.core.main = (function template$core$main(){

var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
cljs.core.add_watch.call(null,template.state.app_state,new cljs.core.Keyword(null,"render","render",-1408033454),template.core.render_app.call(null,node));

return ReactDOM.render(template.ui.page.call(null,template.state.app_state),node);
} else {
return null;
}
});
template.core.main.call(null);
document.onkeydown = (function (p1__21353_SHARP_){
return cljs.core.swap_BANG_.call(null,template.state.app_state,(function (m){
if(cljs.core._EQ_.call(null,(37),p1__21353_SHARP_.keyCode)){
return cljs.core.assoc.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"cpt","cpt",262873405),cljs.core.dec),new cljs.core.Keyword(null,"anim","anim",-1276068045),"previous");
} else {
if(cljs.core._EQ_.call(null,(39),p1__21353_SHARP_.keyCode)){
return cljs.core.assoc.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"cpt","cpt",262873405),cljs.core.inc),new cljs.core.Keyword(null,"anim","anim",-1276068045),"next");
} else {
return m;
}
}
}));
});

//# sourceMappingURL=core.js.map?rel=1470994236953